var b = wx.e$;
import esnw0o from '../a6gb1e/a0pkm1a.js';
window[b[31212]] = { 'wxVersion': window[b[562]][b[31213]] }, window[b[31214]] = ![], window[b[31215]] = 0x1, window[b[31216]] = 0x1, window[b[31217]] = !![], window[b[31218]] = !![], window['e1$FV6E'] = '', window[b[31219]] = ![], window[b[31220]] = {
    'base_cdn': b[31221],
    'cdn': b[31221]
}, e16E[b[31222]] = {}, e16E[b[25902]] = '0', e16E[b[4902]] = window[b[31212]][b[31223]], e16E[b[31224]] = '', e16E['os'] = '1', e16E[b[31225]] = b[31226], e16E[b[31227]] = b[31228], e16E[b[31229]] = b[31230], e16E[b[31231]] = b[31232], e16E[b[31233]] = b[31234], e16E[b[24284]] = '1', e16E[b[26221]] = '', e16E[b[26223]] = '', e16E[b[31235]] = 0x0, e16E[b[31236]] = {}, e16E[b[31237]] = parseInt(e16E[b[24284]]), e16E[b[26219]] = e16E[b[24284]], e16E[b[26215]] = {}, e16E[b[31238]] = b[31239], e16E[b[31240]] = ![], e16E[b[12249]] = b[31241], e16E[b[26184]] = Date[b[83]](), e16E[b[11842]] = b[31242], e16E[b[755]] = '_a', e16E[b[31243]] = 0x2, e16E[b[101]] = 0x7c1, e16E[b[31223]] = window[b[31212]][b[31223]], e16E[b[779]] = ![], e16E[b[1116]] = ![], e16E[b[11140]] = ![], e16E[b[25904]] = ![], window[b[31244]] = 0x5, window[b[31245]] = ![], window[b[31246]] = ![], window[b[31247]] = ![], window[b[31248]] = ![], window[b[31249]] = ![], window[b[31250]] = ![], window[b[31251]] = ![], window[b[31252]] = ![], window[b[31253]] = ![], window[b[31254]] = null, window[b[655]] = function (u8vl3) {
    console[b[487]](b[655], u8vl3), wx[b[4422]]({}), wx[b[31255]]({
        'title': b[5619],
        'content': u8vl3,
        'success'(l6t37) {
            if (l6t37[b[31256]]) console[b[487]](b[31257]);else l6t37[b[558]] && console[b[487]](b[31258]);
        }
    });
}, window[b[31259]] = function (cyz2) {
    console[b[487]](b[31260], cyz2), e1F6EV(), wx[b[31255]]({
        'title': b[5619],
        'content': cyz2,
        'confirmText': b[31261],
        'cancelText': b[18890],
        'success'(ae19f_) {
            if (ae19f_[b[31256]]) window[b[31262]]();else ae19f_[b[558]] && (console[b[487]](b[31263]), wx[b[25900]]({}));
        }
    });
}, window[b[31264]] = function (giw0ds) {
    console[b[487]](b[31264], giw0ds), wx[b[31255]]({
        'title': b[5619],
        'content': giw0ds,
        'confirmText': b[26350],
        'showCancel': ![],
        'complete'(hobn) {
            console[b[487]](b[31263]), wx[b[25900]]({});
        }
    });
}, window[b[31265]] = ![], window[b[31266]] = function (n0dw) {
    window[b[31265]] = !![], wx[b[4421]](n0dw);
}, window[b[31267]] = function () {
    window[b[31265]] && (window[b[31265]] = ![], wx[b[4422]]({}));
}, window[b[31268]] = function (mdig5) {
    window[b[31269]][b[148]][b[31268]](mdig5);
}, window[b[12119]] = function ($px9, i05mg) {
    esnw0o[b[12119]]($px9, function (be$ph) {
        be$ph && be$ph[b[11]] ? be$ph[b[11]][b[1255]] == 0x1 ? i05mg(!![]) : (i05mg(![]), console[b[78]](b[31270] + be$ph[b[11]][b[31271]])) : console[b[487]](b[12119], be$ph);
    });
}, window[b[31272]] = function (_af4k1) {
    console[b[487]](b[31273], _af4k1);
}, window[b[31274]] = function (_f14ka) {}, window[b[31275]] = function (f_19, j4q1ak, owhins) {}, window[b[31276]] = function (p$hx) {
    console[b[487]](b[31277], p$hx), window[b[31269]][b[148]][b[31278]](), window[b[31269]][b[148]][b[31279]](), window[b[31269]][b[148]][b[31280]]();
}, window[b[31281]] = function (ka1j4) {
    window[b[31282]](0xe, b[31283] + ka1j4), window[b[31259]](b[31284]);
    var t6q7j = {
        'id': window[b[31220]][b[31285]],
        'role': window[b[31220]][b[4213]],
        'level': window[b[31220]][b[31286]],
        'account': window[b[31220]][b[26220]],
        'version': window[b[31220]][b[101]],
        'cdn': window[b[31220]][b[4089]],
        'pkgName': window[b[31220]][b[26221]],
        'gamever': window[b[562]][b[31213]],
        'serverid': window[b[31220]][b[26215]] ? window[b[31220]][b[26215]][b[11316]] : 0x0,
        'systemInfo': window[b[31287]],
        'error': b[31288],
        'stack': ka1j4 ? ka1j4 : b[31284]
    },
        $b = JSON[b[4075]](t6q7j);
    console[b[125]](b[31289] + $b), window[b[31238]]($b);
}, window[b[31282]] = function (a_1f94, y8lvr) {
    sendApi(e16E[b[31229]], b[31290], {
        'game_pkg': e16E[b[26221]],
        'partner_id': e16E[b[24284]],
        'server_id': e16E[b[26215]] && e16E[b[26215]][b[11316]] > 0x0 ? e16E[b[26215]][b[11316]] : 0x0,
        'uid': e16E[b[26220]] > 0x0 ? e16E[b[26220]] : 0x0,
        'type': a_1f94,
        'info': y8lvr
    });
}, window[b[31291]] = function (nihos) {
    var jq67 = JSON[b[530]](nihos);
    jq67[b[31292]] = window[b[562]][b[31213]], jq67[b[31293]] = window[b[31220]][b[26215]] ? window[b[31220]][b[26215]][b[11316]] : 0x0, jq67[b[31287]] = window[b[31287]];
    var a41k_ = JSON[b[4075]](jq67);
    console[b[125]](b[31294] + a41k_), window[b[31238]](a41k_);
}, window[b[31295]] = function (hwnsio, $hnbox) {
    var gidm = {
        'id': window[b[31220]][b[31285]],
        'role': window[b[31220]][b[4213]],
        'level': window[b[31220]][b[31286]],
        'account': window[b[31220]][b[26220]],
        'version': window[b[31220]][b[101]],
        'cdn': window[b[31220]][b[4089]],
        'pkgName': window[b[31220]][b[26221]],
        'gamever': window[b[562]][b[31213]],
        'serverid': window[b[31220]][b[26215]] ? window[b[31220]][b[26215]][b[11316]] : 0x0,
        'systemInfo': window[b[31287]],
        'error': hwnsio,
        'stack': $hnbox
    },
        ob$pxh = JSON[b[4075]](gidm);
    console[b[96]](b[31296] + ob$pxh), window[b[31238]](ob$pxh);
}, window[b[31238]] = function (dn0ws) {
    if (window[b[31220]][b[31297]] == b[31298]) return;
    var pe$f_ = e16E[b[31238]] + b[31299] + e16E[b[26220]];
    wx[b[482]]({
        'url': pe$f_,
        'method': b[30716],
        'data': dn0ws,
        'header': {
            'content-type': b[31300],
            'cache-control': b[31301]
        },
        'success': function (hsxwn) {
            DEBUG && console[b[487]](b[31302], pe$f_, dn0ws, hsxwn);
        },
        'fail': function (wdgi0s) {
            DEBUG && console[b[487]](b[31302], pe$f_, dn0ws, wdgi0s);
        },
        'complete': function () {}
    });
}, window[b[31303]] = function () {
    function vyu8lr() {
        return ((0x1 + Math[b[119]]()) * 0x10000 | 0x0)[b[271]](0x10)[b[502]](0x1);
    }
    return vyu8lr() + vyu8lr() + '-' + vyu8lr() + '-' + vyu8lr() + '-' + vyu8lr() + '+' + vyu8lr() + vyu8lr() + vyu8lr();
}, window[b[31262]] = function () {
    console[b[487]](b[31304]);
    var hisow = esnw0o[b[31305]]();
    e16E[b[26219]] = hisow[b[31306]], e16E[b[31237]] = hisow[b[31306]], e16E[b[24284]] = hisow[b[31306]], e16E[b[26221]] = hisow[b[31307]];
    var hiowns = { 'game_ver': e16E[b[4902]] };
    e16E[b[26223]] = this[b[31303]](), e1F6VE({ 'title': b[31308] }), esnw0o[b[367]](hiowns, this[b[31309]][b[74]](this));
}, window[b[31309]] = function (wnsho) {
    var fb9e = wnsho[b[31310]];
    sdkInitRes = wnsho, console[b[487]](b[31311] + fb9e + b[31312] + (fb9e == 0x1) + b[31313] + wnsho[b[31213]] + b[31314] + window[b[31212]][b[31223]]);
    if (!wnsho[b[31213]] || window['e1$VEF6'](window[b[31212]][b[31223]], wnsho[b[31213]]) < 0x0) console[b[487]](b[31315]), e16E[b[31227]] = b[31316], e16E[b[31229]] = b[31317], e16E[b[31231]] = b[31318], e16E[b[4089]] = b[31319], e16E[b[25901]] = b[31320], e16E[b[31321]] = wnsho[b[31321]], e16E[b[779]] = ![];else window['e1$VEF6'](window[b[31212]][b[31223]], wnsho[b[31213]]) == 0x0 ? (console[b[487]](b[31322]), e16E[b[31227]] = b[31228], e16E[b[31229]] = b[31230], e16E[b[31231]] = b[31232], e16E[b[4089]] = b[31323], e16E[b[25901]] = b[31320], e16E[b[31321]] = b[31324], e16E[b[779]] = !![]) : (console[b[487]](b[31325]), e16E[b[31227]] = b[31228], e16E[b[31229]] = b[31230], e16E[b[31231]] = b[31232], e16E[b[4089]] = b[31323], e16E[b[25901]] = b[31320], e16E[b[31321]] = b[31324], e16E[b[779]] = ![]);
    e16E[b[31235]] = config[b[30799]] ? config[b[30799]] : 0x0, this[b[31326]](), this[b[31327]](), window[b[31328]] = 0x5, e1F6VE({ 'title': b[31329] }), esnw0o[b[30707]](this[b[31330]][b[74]](this));
}, window[b[31328]] = 0x5, window[b[31330]] = function (eb$h, o$xbnh) {
    if (eb$h == 0x0 && o$xbnh && o$xbnh[b[30890]]) {
        e16E[b[31331]] = o$xbnh[b[30890]], e16E[b[26359]] = o$xbnh[b[26359]];
        var pxeh = this;
        e1F6VE({ 'title': b[31332] }), sendApi(e16E[b[31227]], b[31333], {
            'platform': e16E[b[31225]],
            'partner_id': e16E[b[24284]],
            'token': o$xbnh[b[30890]],
            'game_pkg': e16E[b[26221]],
            'deviceId': e16E[b[26223]],
            'scene': b[31334] + e16E[b[31235]]
        }, this[b[31335]][b[74]](this), e1VE6, e1EF);
    } else o$xbnh && o$xbnh[b[26416]] && window[b[31328]] > 0x0 && (o$xbnh[b[26416]][b[115]](b[31336]) != -0x1 || o$xbnh[b[26416]][b[115]](b[31337]) != -0x1 || o$xbnh[b[26416]][b[115]](b[31338]) != -0x1 || o$xbnh[b[26416]][b[115]](b[31339]) != -0x1 || o$xbnh[b[26416]][b[115]](b[31340]) != -0x1 || o$xbnh[b[26416]][b[115]](b[31341]) != -0x1) ? (window[b[31328]]--, esnw0o[b[30707]](this[b[31330]][b[74]](this))) : (window[b[31282]](0x1, b[31342] + eb$h + b[31343] + (o$xbnh ? o$xbnh[b[26416]] : '')), window[b[31295]](b[31344], JSON[b[4075]]({
        'status': eb$h,
        'data': o$xbnh
    })), window[b[31259]](b[31345] + (o$xbnh && o$xbnh[b[26416]] ? '，' + o$xbnh[b[26416]] : '')));
}, window[b[31335]] = function (xe9pb) {
    if (!xe9pb) {
        window[b[31282]](0x2, b[31346]), window[b[31295]](b[31347], b[31348]), window[b[31259]](b[31349]);
        return;
    }
    if (xe9pb[b[1255]] != b[9618]) {
        window[b[31282]](0x2, b[31350] + xe9pb[b[1255]]), window[b[31295]](b[31347], JSON[b[4075]](xe9pb)), window[b[31259]](b[31351] + xe9pb[b[1255]]);
        return;
    }
    if (xe9pb[b[31352]] == 0x1) {
        window[b[31259]](b[31353]);
        return;
    }
    e16E[b[19272]] = String(xe9pb[b[26220]]), e16E[b[26220]] = String(xe9pb[b[26220]]), e16E[b[26182]] = String(xe9pb[b[26182]]), e16E[b[26219]] = String(xe9pb[b[26182]]), e16E[b[26222]] = String(xe9pb[b[26222]]), e16E[b[31354]] = String(xe9pb[b[11299]]), e16E[b[31355]] = String(xe9pb[b[892]]), e16E[b[11299]] = '';
    var x9epb$ = this;
    e1F6VE({ 'title': b[31356] });
    var j6qt37 = localStorage[b[485]](b[31357] + e16E[b[26221]] + e16E[b[26220]]);
    if (j6qt37 && j6qt37 != '') {
        var dns0w = Number(j6qt37);
        x9epb$[b[31358]](dns0w);
    } else x9epb$[b[31359]]();
}, window[b[31359]] = function () {
    var ohxbwn = this;
    sendApi(e16E[b[31227]], b[31360], {
        'partner_id': e16E[b[24284]],
        'uid': e16E[b[26220]],
        'version': e16E[b[4902]],
        'game_pkg': e16E[b[26221]],
        'device': e16E[b[26223]]
    }, ohxbwn[b[31361]][b[74]](ohxbwn), e1VE6, e1EF);
}, window[b[31361]] = function (l3tj76) {
    if (!l3tj76) {
        window[b[31282]](0x3, b[31362]), window[b[31259]](b[31362]);
        return;
    }
    if (l3tj76[b[1255]] != b[9618]) {
        window[b[31282]](0x3, b[31363] + l3tj76[b[1255]]), window[b[31259]](b[31363] + l3tj76[b[1255]]);
        return;
    }
    if (!l3tj76[b[11]] || l3tj76[b[11]][b[13]] == 0x0) {
        window[b[31282]](0x3, b[31364]), window[b[31259]](b[31365]);
        return;
    }
    this[b[31366]](l3tj76);
}, window[b[31358]] = function (ry8u2v) {
    var lj763 = this;
    sendApi(e16E[b[31227]], b[31367], {
        'server_id': ry8u2v,
        'time': Date[b[83]]() / 0x3e8
    }, lj763[b[31368]][b[74]](lj763), e1VE6, e1EF);
}, window[b[31368]] = function (pbx$9) {
    if (!pbx$9) {
        window[b[31282]](0x4, b[31369]), this[b[31359]]();
        return;
    }
    if (pbx$9[b[1255]] != b[9618]) {
        window[b[31282]](0x4, b[31370] + pbx$9[b[1255]]), this[b[31359]]();
        return;
    }
    if (!pbx$9[b[11]] || pbx$9[b[11]][b[13]] == 0x0) {
        window[b[31282]](0x4, b[31371]), this[b[31359]]();
        return;
    }
    this[b[31366]](pbx$9), window[b[31269]] && window[b[31269]][b[148]][b[31372]] && window[b[31269]][b[148]][b[31372]](sdkInitRes[b[31373]], sdkInitRes[b[31374]], sdkInitRes[b[31375]], sdkInitRes[b[31376]], sdkInitRes[b[31377]]);
}, window[b[31366]] = function (q14ja) {
    e16E[b[665]] = q14ja[b[31378]] != undefined ? q14ja[b[31378]] : 0x0, e16E[b[26215]] = {
        'server_id': String(q14ja[b[11]][0x0][b[11316]]),
        'server_name': String(q14ja[b[11]][0x0][b[31379]]),
        'entry_ip': q14ja[b[11]][0x0][b[26243]],
        'entry_port': parseInt(q14ja[b[11]][0x0][b[26244]]),
        'status': e16VF(q14ja[b[11]][0x0]),
        'start_time': q14ja[b[11]][0x0][b[31380]],
        'maintain_time': q14ja[b[11]][0x0][b[31381]] ? q14ja[b[11]][0x0][b[31381]] : '',
        'cdn': e16E[b[4089]]
    }, this[b[31382]]();
}, window[b[31382]] = function () {
    if (e16E[b[665]] == 0x1) {
        var wdgsi0 = e16E[b[26215]][b[106]];
        if (wdgsi0 === -0x1 || wdgsi0 === 0x0) {
            window[b[31282]](0xf, b[31383] + e16E[b[26215]]['id'] + b[31384] + e16E[b[26215]][b[106]]), window[b[31259]](wdgsi0 === -0x1 ? b[31385] : b[31386]);
            return;
        }
        e1EFV6(0x0, e16E[b[26215]][b[11316]]), window[b[31269]][b[148]][b[31387]](e16E[b[665]]);
    } else window[b[31269]][b[148]][b[31388]](), e1F6EV();
    window[b[31252]] = !![], window[b[31389]](), window[b[31390]]();
}, window[b[31326]] = function () {
    sendApi(e16E[b[31227]], b[31391], {
        'game_pkg': e16E[b[26221]],
        'version_name': e16E[b[31321]]
    }, this[b[31392]][b[74]](this), e1VE6, e1EF);
}, window[b[31392]] = function (ndws0i) {
    if (!ndws0i) {
        window[b[31282]](0x5, b[31393]), window[b[31259]](b[31393]);
        return;
    }
    if (ndws0i[b[1255]] != b[9618]) {
        window[b[31282]](0x5, b[31394] + ndws0i[b[1255]]), window[b[31259]](b[31394] + ndws0i[b[1255]]);
        return;
    }
    if (!ndws0i[b[11]] || !ndws0i[b[11]][b[4902]]) {
        window[b[31282]](0x5, b[31395] + (ndws0i[b[11]] && ndws0i[b[11]][b[4902]])), window[b[31259]](b[31395] + (ndws0i[b[11]] && ndws0i[b[11]][b[4902]]));
        return;
    }
    ndws0i[b[11]][b[31396]] && ndws0i[b[11]][b[31396]][b[13]] > 0xa && (e16E[b[31397]] = ndws0i[b[11]][b[31396]], e16E[b[4089]] = ndws0i[b[11]][b[31396]]), ndws0i[b[11]][b[4902]] && (e16E[b[101]] = ndws0i[b[11]][b[4902]]), console[b[78]](b[26356] + e16E[b[101]] + b[31398] + e16E[b[31321]]), window[b[31250]] = !![], window[b[31389]](), window[b[31390]]();
}, window[b[31399]], window[b[31327]] = function () {
    sendApi(e16E[b[31227]], b[31400], { 'game_pkg': e16E[b[26221]] }, this[b[31401]][b[74]](this), e1VE6, e1EF);
}, window[b[31401]] = function (hnb$xo) {
    if (hnb$xo && hnb$xo[b[1255]] === b[9618] && hnb$xo[b[11]]) {
        window[b[31399]] = hnb$xo[b[11]];
        for (var hwnxs in hnb$xo[b[11]]) {
            e16E[hwnxs] = hnb$xo[b[11]][hwnxs];
        }
    } else window[b[31282]](0xb, b[31402]), console[b[78]](b[31403] + hnb$xo[b[1255]]);
    window[b[31251]] = !![], window[b[31390]]();
}, window[b[31404]] = function (uvl8r, aj41kq, fa91e, n$boh, vyu8r, efp9_$, _ef$9, f$_9ep, k1f4_a, bxe9) {
    vyu8r = String(vyu8r);
    var tj7kq = _ef$9,
        xbwn = f$_9ep;
    e16E[b[31222]][vyu8r] = {
        'productid': vyu8r,
        'productname': tj7kq,
        'productdesc': xbwn,
        'roleid': uvl8r,
        'rolename': aj41kq,
        'rolelevel': fa91e,
        'price': efp9_$,
        'callback': k1f4_a
    }, sendApi(e16E[b[31231]], b[31405], {
        'game_pkg': e16E[b[26221]],
        'server_id': e16E[b[26215]][b[11316]],
        'server_name': e16E[b[26215]][b[31379]],
        'level': fa91e,
        'uid': e16E[b[26220]],
        'role_id': uvl8r,
        'role_name': aj41kq,
        'product_id': vyu8r,
        'product_name': tj7kq,
        'product_desc': xbwn,
        'money': efp9_$,
        'partner_id': e16E[b[24284]]
    }, toPayCallBack, e1VE6, e1EF);
}, window[b[31406]] = function (v83u) {
    if (v83u && (v83u[b[31407]] === 0xc8 || v83u[b[1255]] == b[9618])) {
        var b$nhx = e16E[b[31222]][String(v83u[b[31408]])];
        if (b$nhx[b[334]]) b$nhx[b[334]](v83u[b[31408]], v83u[b[31409]], -0x1);
        esnw0o[b[30745]]({
            'cpbill': v83u[b[31409]],
            'productid': v83u[b[31408]],
            'productname': b$nhx[b[31410]],
            'productdesc': b$nhx[b[31411]],
            'serverid': e16E[b[26215]][b[11316]],
            'servername': e16E[b[26215]][b[31379]],
            'roleid': b$nhx[b[31412]],
            'rolename': b$nhx[b[31413]],
            'rolelevel': b$nhx[b[31414]],
            'price': b$nhx[b[28058]],
            'extension': JSON[b[4075]]({ 'cp_order_id': v83u[b[31409]] })
        }, function (jq63t, xonhws) {
            b$nhx[b[334]] && jq63t == 0x0 && b$nhx[b[334]](v83u[b[31408]], v83u[b[31409]], jq63t);
            console[b[78]](JSON[b[4075]]({
                'type': b[31415],
                'status': jq63t,
                'data': v83u,
                'role_name': b$nhx[b[31413]]
            }));
            if (jq63t === 0x0) {} else {
                if (jq63t === 0x1) {} else {
                    if (jq63t === 0x2) {}
                }
            }
        });
    } else {
        var bphe$x = v83u ? b[31416] + v83u[b[31407]] + b[31417] + v83u[b[1255]] + b[31418] + v83u[b[78]] : b[31419];
        window[b[31282]](0xd, b[31420] + bphe$x), alert(bphe$x);
    }
}, window[b[31421]] = function () {}, window[b[31422]] = function (u2vzy8, fe9_a1, vy82uz, a9ef_1, t6jl7) {
    esnw0o[b[30774]](e16E[b[26215]][b[11316]], e16E[b[26215]][b[31379]] || e16E[b[26215]][b[11316]], u2vzy8, fe9_a1, vy82uz), sendApi(e16E[b[31227]], b[31423], {
        'game_pkg': e16E[b[26221]],
        'server_id': e16E[b[26215]][b[11316]],
        'role_id': u2vzy8,
        'uid': e16E[b[26220]],
        'role_name': fe9_a1,
        'role_type': a9ef_1,
        'level': vy82uz
    });
}, window[b[31424]] = function (po, ihson, akq4j7, gsd0wi, v3ru8, $ohxb, x$9be, lru83v, igm50d, k4_q) {
    e16E[b[31285]] = po, e16E[b[4213]] = ihson, e16E[b[31286]] = akq4j7, esnw0o[b[30775]](e16E[b[26215]][b[11316]], e16E[b[26215]][b[31379]] || e16E[b[26215]][b[11316]], po, ihson, akq4j7), sendApi(e16E[b[31227]], b[31425], {
        'game_pkg': e16E[b[26221]],
        'server_id': e16E[b[26215]][b[11316]],
        'role_id': po,
        'uid': e16E[b[26220]],
        'role_name': ihson,
        'role_type': gsd0wi,
        'level': akq4j7,
        'evolution': v3ru8
    });
}, window[b[31426]] = function (dsw, o$nb, p9$be, lt7j3, m5i0dg, u38l6r, jk6q7, wdsni0, l76r3, di5s0g) {
    e16E[b[31285]] = dsw, e16E[b[4213]] = o$nb, e16E[b[31286]] = p9$be, esnw0o[b[30776]](e16E[b[26215]][b[11316]], e16E[b[26215]][b[31379]] || e16E[b[26215]][b[11316]], dsw, o$nb, p9$be), sendApi(e16E[b[31227]], b[31425], {
        'game_pkg': e16E[b[26221]],
        'server_id': e16E[b[26215]][b[11316]],
        'role_id': dsw,
        'uid': e16E[b[26220]],
        'role_name': o$nb,
        'role_type': lt7j3,
        'level': p9$be,
        'evolution': m5i0dg
    });
}, window[b[31427]] = function (s0oi) {}, window[b[31428]] = function (f9$pe, r86l3) {
    esnw0o[b[30728]](b[30728], { 'activity_id': r86l3 }, function (qt736) {
        f9$pe && f9$pe(qt736);
    });
}, window[b[24282]] = function () {
    esnw0o[b[24282]]();
}, window[b[31429]] = function () {
    esnw0o[b[24161]]();
}, window[b[31430]] = function (rtl683, vr3lu8, ef9$, yr2vu8, p9$xeb, _f1ak4, onxwh, j6t3q) {
    j6t3q = j6t3q || e16E[b[26215]][b[11316]], sendApi(e16E[b[31227]], b[31431], {
        'phone': rtl683,
        'role_id': vr3lu8,
        'uid': e16E[b[26220]],
        'game_pkg': e16E[b[26221]],
        'partner_id': e16E[b[24284]],
        'server_id': j6t3q
    }, onxwh, 0x2, null, function () {
        return !![];
    });
}, window[b[10631]] = function (x$e9p) {
    window[b[31432]] = x$e9p, window[b[31432]] && window[b[31433]] && (console[b[78]](b[31434] + window[b[31433]][b[817]]), window[b[31432]](window[b[31433]]), window[b[31433]] = null);
}, window[b[31435]] = function (aj4kq7, v2cy, hpbox, s0gd) {
    window[b[22]](b[31436], {
        'game_pkg': window[b[31220]][b[26221]],
        'role_id': v2cy,
        'server_id': hpbox
    }, s0gd);
}, window[b[31437]] = function (lvu8r, in0dsw, wig0d) {
    function yvru2(niwh) {
        var $bonx = [],
            l7rt6 = [],
            kja1q = wig0d || window[b[562]][b[31438]];
        for (var j3q7 in kja1q) {
            var nhsowi = Number(j3q7);
            (!lvu8r || !lvu8r[b[13]] || lvu8r[b[115]](nhsowi) != -0x1) && (l7rt6[b[29]](kja1q[j3q7]), $bonx[b[29]]([nhsowi, 0x3]));
        }
        window['e1$VEF6'](window[b[31439]], b[31440]) >= 0x0 ? (console[b[487]](b[31441]), esnw0o[b[30771]] && esnw0o[b[30771]](l7rt6, function (nhwosi) {
            console[b[487]](b[31442]), console[b[487]](nhwosi);
            if (nhwosi && nhwosi[b[26416]] == b[31443]) for (var wi0dsg in kja1q) {
                if (nhwosi[kja1q[wi0dsg]] == b[31444]) {
                    var l7tr6 = Number(wi0dsg);
                    for (var b$xnho = 0x0; b$xnho < $bonx[b[13]]; b$xnho++) {
                        if ($bonx[b$xnho][0x0] == l7tr6) {
                            $bonx[b$xnho][0x1] = 0x1;
                            break;
                        }
                    }
                }
            }
            window['e1$VEF6'](window[b[31439]], b[31445]) >= 0x0 ? wx[b[31446]]({
                'withSubscriptions': !![],
                'success': function (jq7a4k) {
                    var rlv = jq7a4k[b[31447]][b[31448]];
                    if (rlv) {
                        console[b[487]](b[31449]), console[b[487]](rlv);
                        for (var isndw in kja1q) {
                            if (rlv[kja1q[isndw]] == b[31444]) {
                                var hoxnsw = Number(isndw);
                                for (var ph$obx = 0x0; ph$obx < $bonx[b[13]]; ph$obx++) {
                                    if ($bonx[ph$obx][0x0] == hoxnsw) {
                                        $bonx[ph$obx][0x1] = 0x2;
                                        break;
                                    }
                                }
                            }
                        }
                        console[b[487]]($bonx), in0dsw && in0dsw($bonx);
                    } else console[b[487]](b[31450]), console[b[487]](jq7a4k), console[b[487]]($bonx), in0dsw && in0dsw($bonx);
                },
                'fail': function () {
                    console[b[487]](b[31451]), console[b[487]]($bonx), in0dsw && in0dsw($bonx);
                }
            }) : (console[b[487]](b[31452] + window[b[31439]]), console[b[487]]($bonx), in0dsw && in0dsw($bonx));
        })) : (console[b[487]](b[31453] + window[b[31439]]), console[b[487]]($bonx), in0dsw && in0dsw($bonx)), wx[b[31454]](yvru2);
    }
    wx[b[31455]](yvru2);
}, window[b[31456]] = {
    'isSuccess': ![],
    'level': b[31457],
    'isCharging': ![]
}, window[b[13241]] = function (k1q4ja) {
    wx[b[31458]]({
        'success': function (rl3v8) {
            var o$hp = window[b[31456]];
            o$hp[b[31459]] = !![], o$hp[b[4189]] = Number(rl3v8[b[4189]])[b[3807]](0x0), o$hp[b[31460]] = rl3v8[b[31460]], k1q4ja && k1q4ja(o$hp[b[31459]], o$hp[b[4189]], o$hp[b[31460]]);
        },
        'fail': function (w0gsi) {
            console[b[487]](b[31461], w0gsi[b[26416]]);
            var nw0s = window[b[31456]];
            k1q4ja && k1q4ja(nw0s[b[31459]], nw0s[b[4189]], nw0s[b[31460]]);
        }
    });
}, window[b[11697]] = function (isohwn) {
    wx[b[11697]]({
        'success': function (b9px) {
            isohwn && isohwn(!![], b9px);
        },
        'fail': function (b$pe9) {
            isohwn && isohwn(![], b$pe9);
        }
    });
}, window[b[11699]] = function (pef9$) {
    if (pef9$) wx[b[11699]](pef9$);
}, window[b[25896]] = function (sid0wg) {
    wx[b[25896]](sid0wg);
}, window[b[22]] = function (fa1_4, q4k1ja, lt3r68, _f94, ka14f, q47jk, yv8ru2, sig05d) {
    if (_f94 == undefined) _f94 = 0x1;
    wx[b[482]]({
        'url': fa1_4,
        'method': yv8ru2 || b[26098],
        'responseType': b[3992],
        'data': q4k1ja,
        'header': { 'content-type': sig05d || b[31300] },
        'success': function (qjka74) {
            DEBUG && console[b[487]](b[31462], fa1_4, info, qjka74);
            if (qjka74 && qjka74[b[26486]] == 0xc8) {
                var hxebp = qjka74[b[11]];
                !q47jk || q47jk(hxebp) ? lt3r68 && lt3r68(hxebp) : window[b[31463]](fa1_4, q4k1ja, lt3r68, _f94, ka14f, q47jk, qjka74);
            } else window[b[31463]](fa1_4, q4k1ja, lt3r68, _f94, ka14f, q47jk, qjka74);
        },
        'fail': function (fe$pb9) {
            DEBUG && console[b[487]](b[31464], fa1_4, info, fe$pb9), window[b[31463]](fa1_4, q4k1ja, lt3r68, _f94, ka14f, q47jk, fe$pb9);
        },
        'complete': function () {}
    });
}, window[b[31463]] = function (k41jq, a_f491, epbx9$, l36r7t, xbnwho, qtj, kj4a7q) {
    l36r7t - 0x1 > 0x0 ? setTimeout(function () {
        window[b[22]](k41jq, a_f491, epbx9$, l36r7t - 0x1, xbnwho, qtj);
    }, 0x3e8) : xbnwho && xbnwho(JSON[b[4075]]({
        'url': k41jq,
        'response': kj4a7q
    }));
}, window[b[31465]] = function (v2zu8, yz8uv, k6j7q, shxn, czuv, $nxhb, e9xbp$) {
    !k6j7q && (k6j7q = {});
    var akj7q = Math[b[118]](Date[b[83]]() / 0x3e8);
    k6j7q[b[892]] = akj7q, k6j7q[b[31466]] = yz8uv;
    var j3q67t = Object[b[262]](k6j7q)[b[1120]](),
        v8yrl = '',
        i0sdn = '';
    for (var gm0di5 = 0x0; gm0di5 < j3q67t[b[13]]; gm0di5++) {
        v8yrl = v8yrl + (gm0di5 == 0x0 ? '' : '&') + j3q67t[gm0di5] + k6j7q[j3q67t[gm0di5]], i0sdn = i0sdn + (gm0di5 == 0x0 ? '' : '&') + j3q67t[gm0di5] + '=' + encodeURIComponent(k6j7q[j3q67t[gm0di5]]);
    }
    v8yrl = v8yrl + e16E[b[31233]];
    var xnob = b[31467] + md5(v8yrl);
    send(v2zu8 + '?' + i0sdn + (i0sdn == '' ? '' : '&') + xnob, null, shxn, czuv, $nxhb, e9xbp$ || function (sxnowh) {
        return sxnowh[b[1255]] == b[9618];
    }, null, b[30717]);
}, window[b[31468]] = function (ka74j, $bepx) {
    var sniwoh = 0x0;
    e16E[b[26215]] && (sniwoh = e16E[b[26215]][b[11316]]), sendApi(e16E[b[31229]], b[31469], {
        'partnerId': e16E[b[24284]],
        'gamePkg': e16E[b[26221]],
        'logTime': Math[b[118]](Date[b[83]]() / 0x3e8),
        'platformUid': e16E[b[26222]],
        'type': ka74j,
        'serverId': sniwoh
    }, null, 0x2, null, function () {
        return !![];
    });
}, window[b[31470]] = function (p1_) {
    sendApi(e16E[b[31227]], b[31471], {
        'partner_id': e16E[b[24284]],
        'uid': e16E[b[26220]],
        'version': e16E[b[4902]],
        'game_pkg': e16E[b[26221]],
        'device': e16E[b[26223]]
    }, e16EVF, e1VE6, e1EF);
}, window[b[31472]] = function (bf$ep9) {
    if (bf$ep9 && bf$ep9[b[1255]] === b[9618] && bf$ep9[b[11]]) {
        bf$ep9[b[11]][b[5096]]({
            'id': -0x2,
            'name': b[31473]
        }), bf$ep9[b[11]][b[5096]]({
            'id': -0x1,
            'name': b[31474]
        }), e16E[b[31475]] = bf$ep9[b[11]];
        if (window[b[12296]]) window[b[12296]][b[31476]]();
    } else {
        e16E[b[31477]] = ![];
        var sdwin = bf$ep9 ? bf$ep9[b[1255]] : '';
        window[b[31282]](0x7, b[31478] + sdwin), window[b[31259]](b[31479] + sdwin);
    }
}, window[b[31480]] = function (a91f4) {
    sendApi(e16E[b[31227]], b[31481], {
        'partner_id': e16E[b[24284]],
        'uid': e16E[b[26220]],
        'version': e16E[b[4902]],
        'game_pkg': e16E[b[26221]],
        'device': e16E[b[26223]]
    }, e1F6V, e1VE6, e1EF);
}, window[b[31482]] = function (hobnx$) {
    e16E[b[31483]] = ![];
    if (hobnx$ && hobnx$[b[1255]] === b[9618] && hobnx$[b[11]]) {
        for (var q3jt6 = 0x0; q3jt6 < hobnx$[b[11]][b[13]]; q3jt6++) {
            hobnx$[b[11]][q3jt6][b[106]] = e16VF(hobnx$[b[11]][q3jt6]);
        }
        e16E[b[31236]][-0x1] = window[b[31484]](hobnx$[b[11]]), window[b[12296]][b[31485]](-0x1);
    } else {
        var ids5g0 = hobnx$ ? hobnx$[b[1255]] : '';
        window[b[31282]](0x8, b[31486] + ids5g0), window[b[31259]](b[31487] + ids5g0);
    }
}, window[b[31488]] = function (kqa_1) {
    sendApi(e16E[b[31227]], b[31481], {
        'partner_id': e16E[b[24284]],
        'uid': e16E[b[26220]],
        'version': e16E[b[4902]],
        'game_pkg': e16E[b[26221]],
        'device': e16E[b[26223]]
    }, kqa_1, e1VE6, e1EF);
}, window[b[31489]] = function (ury8lv, f9$e_) {
    sendApi(e16E[b[31227]], b[31490], {
        'partner_id': e16E[b[24284]],
        'uid': e16E[b[26220]],
        'version': e16E[b[4902]],
        'game_pkg': e16E[b[26221]],
        'device': e16E[b[26223]],
        'server_group_id': f9$e_
    }, e1V6F, e1VE6, e1EF);
}, window[b[31491]] = function (feb9$) {
    e16E[b[31483]] = ![];
    if (feb9$ && feb9$[b[1255]] === b[9618] && feb9$[b[11]] && feb9$[b[11]][b[11]]) {
        var kaq_41 = feb9$[b[11]][b[31492]],
            owhb = [];
        for (var $xbohn = 0x0; $xbohn < feb9$[b[11]][b[11]][b[13]]; $xbohn++) {
            feb9$[b[11]][b[11]][$xbohn][b[106]] = e16VF(feb9$[b[11]][b[11]][$xbohn]), (owhb[b[13]] == 0x0 || feb9$[b[11]][b[11]][$xbohn][b[106]] != 0x0) && (owhb[owhb[b[13]]] = feb9$[b[11]][b[11]][$xbohn]);
        }
        e16E[b[31236]][kaq_41] = window[b[31484]](owhb), window[b[12296]][b[31485]](kaq_41);
    } else {
        var uvr82y = feb9$ ? feb9$[b[1255]] : '';
        window[b[31282]](0x9, b[31493] + uvr82y), window[b[31259]](b[31494] + uvr82y);
    }
}, window['e1$VE6'] = function (im0dg) {
    sendApi(e16E[b[31227]], b[31495], {
        'partner_id': e16E[b[24284]],
        'uid': e16E[b[26220]],
        'version': e16E[b[4902]],
        'game_pkg': e16E[b[26221]],
        'device': e16E[b[26223]]
    }, reqServerRecommendCallBack, e1VE6, e1EF);
}, window[b[31496]] = function ($p9_f) {
    e16E[b[31483]] = ![];
    if ($p9_f && $p9_f[b[1255]] === b[9618] && $p9_f[b[11]]) {
        for (var ruy8l = 0x0; ruy8l < $p9_f[b[11]][b[13]]; ruy8l++) {
            $p9_f[b[11]][ruy8l][b[106]] = e16VF($p9_f[b[11]][ruy8l]);
        }
        e16E[b[31236]][-0x2] = window[b[31484]]($p9_f[b[11]]), window[b[12296]][b[31485]](-0x2);
    } else {
        var dg0i = $p9_f ? $p9_f[b[1255]] : '';
        window[b[31282]](0xa, b[31497] + dg0i), alert(b[31498] + dg0i);
    }
}, window[b[31484]] = function (bxhon$) {
    return bxhon$;
}, window[b[31499]] = function (w0isn, di5gm0) {
    w0isn = w0isn || e16E[b[26215]][b[11316]], sendApi(e16E[b[31227]], b[31500], {
        'type': '4',
        'game_pkg': e16E[b[26221]],
        'server_id': w0isn
    }, di5gm0);
}, window[b[31501]] = function ($ep9bf, ndi, tjl736, xn$hob) {
    tjl736 = tjl736 || e16E[b[26215]][b[11316]], sendApi(e16E[b[31227]], b[31502], {
        'type': $ep9bf,
        'game_pkg': ndi,
        'server_id': tjl736
    }, xn$hob);
}, window[b[31503]] = function (ihwno, r73t) {
    sendApi(e16E[b[31227]], b[31504], { 'game_pkg': ihwno }, r73t);
}, window[b[31505]] = function (xwbnho) {
    if (xwbnho) {
        if (xwbnho[b[106]] == 0x1) {
            if (xwbnho[b[31506]] == 0x1) return 0x2;else return 0x1;
        } else return xwbnho[b[106]] == 0x0 ? 0x0 : -0x1;
    }
    return -0x1;
}, window[b[31507]] = function (nohxws, $9fpbe) {
    e16E[b[31508]] = {
        'step': nohxws,
        'server_id': $9fpbe
    };
    var t3lr = this;
    e1F6VE({ 'title': b[31509] }), sendApi(e16E[b[31227]], b[31510], {
        'partner_id': e16E[b[24284]],
        'uid': e16E[b[26220]],
        'game_pkg': e16E[b[26221]],
        'server_id': $9fpbe,
        'platform': e16E[b[26182]],
        'platform_uid': e16E[b[26222]],
        'check_login_time': e16E[b[31355]],
        'check_login_sign': e16E[b[31354]],
        'version_name': e16E[b[31321]]
    }, e1EF6V, e1VE6, e1EF, function (d0i5mg) {
        return d0i5mg[b[1255]] == b[9618] || d0i5mg[b[78]] == b[31511] || d0i5mg[b[78]] == b[31512];
    });
}, window[b[31513]] = function (bpxhe$) {
    var urly8 = this;
    if (bpxhe$ && bpxhe$[b[1255]] === b[9618] && bpxhe$[b[11]]) {
        var $9fbep = e16E[b[26215]];
        $9fbep[b[31514]] = e16E[b[31237]], $9fbep[b[11299]] = String(bpxhe$[b[11]][b[31515]]), $9fbep[b[26184]] = parseInt(bpxhe$[b[11]][b[892]]);
        if (bpxhe$[b[11]][b[26183]]) $9fbep[b[26183]] = parseInt(bpxhe$[b[11]][b[26183]]);else $9fbep[b[26183]] = parseInt(bpxhe$[b[11]][b[11316]]);
        $9fbep[b[31516]] = 0x0, $9fbep[b[4089]] = e16E[b[31397]], $9fbep[b[31517]] = bpxhe$[b[11]][b[31518]], $9fbep[b[31519]] = bpxhe$[b[11]][b[31519]];
        if (bpxhe$[b[11]][b[26187]]) $9fbep[b[26187]] = parseInt(bpxhe$[b[11]][b[26187]]);
        console[b[487]](b[31520] + JSON[b[4075]]($9fbep[b[31519]])), e16E[b[665]] == 0x1 && $9fbep[b[31519]] && $9fbep[b[31519]][b[31521]] == 0x1 && (e16E[b[31522]] = 0x1, window[b[31269]][b[148]]['e1$E6']()), e1EVF6();
    } else {
        if (e16E[b[31508]][b[6692]] >= 0x3) {
            var p_91e = bpxhe$ ? bpxhe$[b[1255]] : '';
            window[b[31282]](0xc, b[31523] + p_91e), e1EF(JSON[b[4075]](bpxhe$)), window[b[31259]](b[31524] + p_91e);
        } else sendApi(e16E[b[31227]], b[31333], {
            'platform': e16E[b[31225]],
            'partner_id': e16E[b[24284]],
            'token': e16E[b[31331]],
            'game_pkg': e16E[b[26221]],
            'deviceId': e16E[b[26223]],
            'scene': b[31334] + e16E[b[31235]]
        }, function (q4a1k) {
            if (!q4a1k || q4a1k[b[1255]] != b[9618]) {
                window[b[31259]](b[31351] + q4a1k && q4a1k[b[1255]]);
                return;
            }
            e16E[b[31354]] = String(q4a1k[b[11299]]), e16E[b[31355]] = String(q4a1k[b[892]]), setTimeout(function () {
                e1EFV6(e16E[b[31508]][b[6692]] + 0x1, e16E[b[31508]][b[11316]]);
            }, 0x5dc);
        }, e1VE6, e1EF, function (ru836l) {
            return ru836l[b[1255]] == b[9618] || ru836l[b[1255]] == b[26564];
        });
    }
}, window[b[31525]] = function () {
    ServerLoading[b[148]][b[31387]](e16E[b[665]]), window[b[31245]] = !![], window[b[31390]]();
}, window[b[31389]] = function () {
    if (window[b[31246]] && window[b[31247]] && window[b[31248]] && window[b[31249]] && window[b[31250]] && window[b[31252]]) {
        if (!window[b[30694]][b[148]]) {
            console[b[487]](b[31526] + window[b[30694]][b[148]]);
            var e_f1a = wx[b[25882]](),
                ephb$x = e_f1a[b[817]] ? e_f1a[b[817]] : 0x0,
                _fae19 = {
                'cdn': window[b[31220]][b[4089]],
                'spareCdn': window[b[31220]][b[25901]],
                'newRegister': window[b[31220]][b[665]],
                'wxPC': window[b[31220]][b[25904]],
                'wxIOS': window[b[31220]][b[1116]],
                'wxAndroid': window[b[31220]][b[11140]],
                'wxParam': {
                    'limitLoad': window[b[31220]]['e1$FVE6'],
                    'benchmarkLevel': window[b[31220]]['e1$F6VE'],
                    'wxFrom': window[b[562]][b[30799]] == b[31527] ? 0x1 : 0x0,
                    'wxSDKVersion': window[b[31439]]
                },
                'configType': window[b[31220]][b[11842]],
                'exposeType': window[b[31220]][b[755]],
                'scene': ephb$x
            };
            new window[b[30694]](_fae19, window[b[31220]][b[101]], window['e1$FV6E']);
        }
    }
}, window[b[31390]] = function () {
    if (window[b[31246]] && window[b[31247]] && window[b[31248]] && window[b[31249]] && window[b[31250]] && window[b[31252]] && window[b[31245]] && window[b[31251]]) {
        e1F6EV();
        if (!e1EV6) {
            e1EV6 = !![];
            if (!window[b[30694]][b[148]]) window[b[31389]]();
            var vyuzc2 = 0x0,
                pe = wx[b[31528]]();
            pe && (window[b[31220]][b[31529]] && (vyuzc2 = pe[b[322]]), console[b[78]](b[31530] + pe[b[322]] + b[31531] + pe[b[1275]] + b[31532] + pe[b[1277]] + b[31533] + pe[b[1276]] + b[31534] + pe[b[178]] + b[31535] + pe[b[179]]));
            var mgi5 = {};
            for (const v28uyz in e16E[b[26215]]) {
                mgi5[v28uyz] = e16E[b[26215]][v28uyz];
            }
            var lyu = {
                'channel': window[b[31220]][b[26219]],
                'account': window[b[31220]][b[26220]],
                'userId': window[b[31220]][b[19272]],
                'cdn': window[b[31220]][b[4089]],
                'data': window[b[31220]][b[11]],
                'package': window[b[31220]][b[25902]],
                'newRegister': window[b[31220]][b[665]],
                'pkgName': window[b[31220]][b[26221]],
                'partnerId': window[b[31220]][b[24284]],
                'platform_uid': window[b[31220]][b[26222]],
                'deviceId': window[b[31220]][b[26223]],
                'selectedServer': mgi5,
                'configType': window[b[31220]][b[11842]],
                'exposeType': window[b[31220]][b[755]],
                'debugUsers': window[b[31220]][b[12249]],
                'wxMenuTop': vyuzc2,
                'wxShield': window[b[31220]][b[779]],
                'wx_channel': window[b[31220]][b[26359]]
            };
            if (window[b[31399]]) for (var qa1j4k in window[b[31399]]) {
                lyu[qa1j4k] = window[b[31399]][qa1j4k];
            }
            window[b[30694]][b[148]]['e1E6$'](lyu);
            if (e16E[b[26215]] && e16E[b[26215]][b[11316]]) localStorage[b[490]](b[31357] + e16E[b[26221]] + e16E[b[26220]], e16E[b[26215]][b[11316]]);
        }
    } else console[b[78]](b[31536] + window[b[31246]] + b[31537] + window[b[31247]] + b[31538] + window[b[31248]] + b[31539] + window[b[31249]] + b[31540] + window[b[31250]] + b[31541] + window[b[31252]] + b[31542] + window[b[31245]] + b[31543] + window[b[31251]]);
};