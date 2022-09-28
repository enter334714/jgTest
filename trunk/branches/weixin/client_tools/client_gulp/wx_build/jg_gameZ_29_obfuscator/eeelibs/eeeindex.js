var b = wx.$e;
import evfz_ from '../eeeesdk/eeesdk.js';
window[b[31997]] = { 'wxVersion': window[b[591]][b[31881]] }, window[b[31998]] = ![], window[b[31999]] = 0x1, window[b[32000]] = 0x1, window[b[32001]] = !![], window[b[32002]] = !![], window[b[32003]] = '', window[b[32004]] = ![], window[b[31886]] = {
    'base_cdn': b[32005],
    'cdn': b[32005]
}, e1U0[b[32006]] = {}, e1U0[b[26156]] = '0', e1U0[b[5070]] = window[b[31997]][b[32007]], e1U0[b[31967]] = '', e1U0['os'] = '1', e1U0[b[32008]] = b[32009], e1U0[b[32010]] = b[32011], e1U0[b[32012]] = b[32013], e1U0[b[32014]] = b[32015], e1U0[b[32016]] = b[32017], e1U0[b[12299]] = '1', e1U0[b[26479]] = '', e1U0[b[26481]] = '', e1U0[b[32018]] = 0x0, e1U0[b[32019]] = {}, e1U0[b[32020]] = parseInt(e1U0[b[12299]]), e1U0[b[12308]] = e1U0[b[12299]], e1U0[b[26473]] = {}, e1U0[b[31892]] = b[32021], e1U0[b[32022]] = ![], e1U0[b[12434]] = b[32023], e1U0[b[26442]] = Date[b[85]](), e1U0[b[12015]] = b[32024], e1U0[b[785]] = '_a', e1U0[b[32025]] = 0x2, e1U0[b[107]] = 0x7c1, e1U0[b[32007]] = window[b[31997]][b[32007]], e1U0[b[809]] = ![], e1U0[b[1149]] = ![], e1U0[b[11313]] = ![], e1U0[b[26159]] = ![], window[b[32026]] = 0x5, window[b[32027]] = ![], window[b[31922]] = ![], window[b[31930]] = ![], window[b[32028]] = ![], window[b[32029]] = ![], window[b[32030]] = ![], window[b[32031]] = ![], window[b[32032]] = ![], window[b[32033]] = ![], window[b[32034]] = null, window[b[685]] = function (lht$x) {
    console[b[515]](b[685], lht$x), wx[b[4590]]({}), wx[b[31910]]({
        'title': b[5794],
        'content': lht$x,
        'success'(su9b6k) {
            if (su9b6k[b[32035]]) console[b[515]](b[32036]);else su9b6k[b[587]] && console[b[515]](b[32037]);
        }
    });
}, window[b[32038]] = function (t$ilx) {
    console[b[515]](b[32039], t$ilx), e11U0G(), wx[b[31910]]({
        'title': b[5794],
        'content': t$ilx,
        'confirmText': b[32040],
        'cancelText': b[19104],
        'success'(nu9qks) {
            if (nu9qks[b[32035]]) window[b[31936]]();else nu9qks[b[587]] && (console[b[515]](b[32041]), wx[b[26154]]({}));
        }
    });
}, window[b[32042]] = function (peco) {
    console[b[515]](b[32042], peco), wx[b[31910]]({
        'title': b[5794],
        'content': peco,
        'confirmText': b[26610],
        'showCancel': ![],
        'complete'(oa7mc) {
            console[b[515]](b[32041]), wx[b[26154]]({});
        }
    });
}, window[b[32043]] = ![], window[b[32044]] = function (xlt$h) {
    window[b[32043]] = !![], wx[b[4589]](xlt$h);
}, window[b[32045]] = function () {
    window[b[32043]] && (window[b[32043]] = ![], wx[b[4590]]({}));
}, window[b[32046]] = function (jt$xg) {
    window[b[31898]][b[164]][b[32046]](jt$xg);
}, window[b[12309]] = function (zvy4f_, qsjn) {
    evfz_[b[12309]](zvy4f_, function (qin$) {
        qin$ && qin$[b[12]] ? qin$[b[12]][b[1341]] == 0x1 ? qsjn(!![]) : (qsjn(![]), console[b[80]](b[32047] + qin$[b[12]][b[32048]])) : console[b[515]](b[12309], qin$);
    });
}, window[b[32049]] = function (_zy) {
    console[b[515]](b[32050], _zy);
}, window[b[32051]] = function (bk) {}, window[b[32052]] = function (d0w, acmp7, xig3j) {}, window[b[32053]] = function (uqk9) {
    console[b[515]](b[32054], uqk9), window[b[31898]][b[164]][b[32055]](), window[b[31898]][b[164]][b[32056]](), window[b[31898]][b[164]][b[32057]]();
}, window[b[32058]] = function (cam) {
    window[b[32059]](0xe, b[32060] + cam), window[b[32038]](b[32061]);
    var itx$l = {
        'id': window[b[31886]][b[31887]],
        'role': window[b[31886]][b[4381]],
        'level': window[b[31886]][b[31888]],
        'account': window[b[31886]][b[26477]],
        'version': window[b[31886]][b[107]],
        'cdn': window[b[31886]][b[4257]],
        'pkgName': window[b[31886]][b[26479]],
        'gamever': window[b[591]][b[31881]],
        'serverid': window[b[31886]][b[26473]] ? window[b[31886]][b[26473]][b[11489]] : 0x0,
        'systemInfo': window[b[31889]],
        'error': b[32062],
        'stack': cam ? cam : b[32061]
    },
        lxgt$i = JSON[b[4243]](itx$l);
    console[b[141]](b[32063] + lxgt$i), window[b[31892]](lxgt$i);
}, window[b[32059]] = function (db0w85, ujq) {
    sendApi(e1U0[b[32012]], b[32064], {
        'game_pkg': e1U0[b[26479]],
        'partner_id': e1U0[b[12299]],
        'server_id': e1U0[b[26473]] && e1U0[b[26473]][b[11489]] > 0x0 ? e1U0[b[26473]][b[11489]] : 0x0,
        'uid': e1U0[b[26477]] > 0x0 ? e1U0[b[26477]] : 0x0,
        'type': db0w85,
        'info': ujq
    });
}, window[b[32065]] = function (pcome) {
    var fyv_4 = JSON[b[559]](pcome);
    fyv_4[b[32066]] = window[b[591]][b[31881]], fyv_4[b[32067]] = window[b[31886]][b[26473]] ? window[b[31886]][b[26473]][b[11489]] : 0x0, fyv_4[b[31889]] = window[b[31889]];
    var dbk096 = JSON[b[4243]](fyv_4);
    console[b[141]](b[32068] + dbk096), window[b[31892]](dbk096);
}, window[b[31937]] = function ($tx, qxi$3) {
    var hrltzg = {
        'id': window[b[31886]][b[31887]],
        'role': window[b[31886]][b[4381]],
        'level': window[b[31886]][b[31888]],
        'account': window[b[31886]][b[26477]],
        'version': window[b[31886]][b[107]],
        'cdn': window[b[31886]][b[4257]],
        'pkgName': window[b[31886]][b[26479]],
        'gamever': window[b[591]][b[31881]],
        'serverid': window[b[31886]][b[26473]] ? window[b[31886]][b[26473]][b[11489]] : 0x0,
        'systemInfo': window[b[31889]],
        'error': $tx,
        'stack': qxi$3
    },
        q93nus = JSON[b[4243]](hrltzg);
    console[b[100]](b[32069] + q93nus), window[b[31892]](q93nus);
}, window[b[31892]] = function (ilxt$) {
    if (window[b[31886]][b[31968]] == b[32070]) return;
    var flhrz = e1U0[b[31892]] + b[32071] + e1U0[b[26477]];
    wx[b[510]]({
        'url': flhrz,
        'method': b[31377],
        'data': ilxt$,
        'header': {
            'content-type': b[32072],
            'cache-control': b[32073]
        },
        'success': function (inquj3) {
            DEBUG && console[b[515]](b[32074], flhrz, ilxt$, inquj3);
        },
        'fail': function (usknq9) {
            DEBUG && console[b[515]](b[32074], flhrz, ilxt$, usknq9);
        },
        'complete': function () {}
    });
}, window[b[32075]] = function () {
    function t$gxil() {
        return ((0x1 + Math[b[128]]()) * 0x10000 | 0x0)[b[288]](0x10)[b[530]](0x1);
    }
    return t$gxil() + t$gxil() + '-' + t$gxil() + '-' + t$gxil() + '-' + t$gxil() + '+' + t$gxil() + t$gxil() + t$gxil();
}, window[b[31936]] = function () {
    console[b[515]](b[32076]);
    var tgrh = evfz_[b[32077]]();
    e1U0[b[12308]] = tgrh[b[32078]], e1U0[b[32020]] = tgrh[b[32078]], e1U0[b[12299]] = tgrh[b[32078]], e1U0[b[26479]] = tgrh[b[32079]];
    var rhz = { 'game_ver': e1U0[b[5070]] };
    e1U0[b[26481]] = this[b[32075]](), e11UG0({ 'title': b[32080] }), evfz_[b[395]](rhz, this[b[32081]][b[76]](this));
}, window[b[32081]] = function (amcp7o) {
    var w5b8d = amcp7o[b[32082]];
    sdkInitRes = amcp7o, console[b[515]](b[32083] + w5b8d + b[32084] + (w5b8d == 0x1) + b[32085] + amcp7o[b[31881]] + b[32086] + window[b[31997]][b[32007]]);
    if (!amcp7o[b[31881]] || window[b[31901]](window[b[31997]][b[32007]], amcp7o[b[31881]]) < 0x0) console[b[515]](b[32087]), e1U0[b[32010]] = b[32088], e1U0[b[32012]] = b[32089], e1U0[b[32014]] = b[32090], e1U0[b[4257]] = b[32091], e1U0[b[26155]] = b[32092], e1U0[b[32093]] = 'fj', e1U0[b[809]] = ![];else window[b[31901]](window[b[31997]][b[32007]], amcp7o[b[31881]]) == 0x0 ? (console[b[515]](b[32094]), e1U0[b[32010]] = b[32011], e1U0[b[32012]] = b[32013], e1U0[b[32014]] = b[32015], e1U0[b[4257]] = b[32095], e1U0[b[26155]] = b[32092], e1U0[b[32093]] = b[32096], e1U0[b[809]] = !![]) : (console[b[515]](b[32097]), e1U0[b[32010]] = b[32011], e1U0[b[32012]] = b[32013], e1U0[b[32014]] = b[32015], e1U0[b[4257]] = b[32095], e1U0[b[26155]] = b[32092], e1U0[b[32093]] = b[32096], e1U0[b[809]] = ![]);
    e1U0[b[32018]] = config[b[31761]] ? config[b[31761]] : 0x0, this[b[32098]](), this[b[32099]](), window[b[32100]] = 0x5, e11UG0({ 'title': b[32101] }), evfz_[b[31368]](this[b[32102]][b[76]](this));
}, window[b[32100]] = 0x5, window[b[32102]] = function (yf4vzr, $gtji) {
    if (yf4vzr == 0x0 && $gtji && $gtji[b[31852]]) {
        e1U0[b[32103]] = $gtji[b[31852]], e1U0[b[26620]] = $gtji[b[26620]];
        var n$3qji = this;
        e11UG0({ 'title': b[32104] }), sendApi(e1U0[b[32010]], b[32105], {
            'platform': e1U0[b[32008]],
            'partner_id': e1U0[b[12299]],
            'token': $gtji[b[31852]],
            'game_pkg': e1U0[b[26479]],
            'deviceId': e1U0[b[26481]],
            'scene': b[32106] + e1U0[b[32018]]
        }, this[b[32107]][b[76]](this), e1G0U, e101);
    } else $gtji && $gtji[b[26677]] && window[b[32100]] > 0x0 && ($gtji[b[26677]][b[122]](b[32108]) != -0x1 || $gtji[b[26677]][b[122]](b[32109]) != -0x1 || $gtji[b[26677]][b[122]](b[32110]) != -0x1 || $gtji[b[26677]][b[122]](b[32111]) != -0x1 || $gtji[b[26677]][b[122]](b[32112]) != -0x1 || $gtji[b[26677]][b[122]](b[32113]) != -0x1) ? (window[b[32100]]--, evfz_[b[31368]](this[b[32102]][b[76]](this))) : (window[b[32059]](0x1, b[32114] + yf4vzr + b[32115] + ($gtji ? $gtji[b[26677]] : '')), window[b[31937]](b[32116], JSON[b[4243]]({
        'status': yf4vzr,
        'data': $gtji
    })), window[b[32038]](b[32117] + ($gtji && $gtji[b[26677]] ? '，' + $gtji[b[26677]] : '')));
}, window[b[32107]] = function (x$tlgh) {
    if (!x$tlgh) {
        window[b[32059]](0x2, b[32118]), window[b[31937]](b[32119], b[32120]), window[b[32038]](b[32121]);
        return;
    }
    if (x$tlgh[b[1341]] != b[9791]) {
        window[b[32059]](0x2, b[32122] + x$tlgh[b[1341]]), window[b[31937]](b[32119], JSON[b[4243]](x$tlgh)), window[b[32038]](b[32123] + x$tlgh[b[1341]]);
        return;
    }
    if (x$tlgh[b[32124]] == 0x1) {
        window[b[32038]](b[32125]);
        return;
    }
    e1U0[b[12297]] = String(x$tlgh[b[26477]]), e1U0[b[26477]] = String(x$tlgh[b[26477]]), e1U0[b[26440]] = String(x$tlgh[b[26440]]), e1U0[b[12308]] = String(x$tlgh[b[26440]]), e1U0[b[26480]] = String(x$tlgh[b[26480]]), e1U0[b[32126]] = String(x$tlgh[b[11472]]), e1U0[b[32127]] = String(x$tlgh[b[922]]), e1U0[b[11472]] = '';
    var zhfvry = this;
    e11UG0({ 'title': b[32128] });
    var xjq3i = localStorage[b[513]](b[32129] + e1U0[b[26479]] + e1U0[b[26477]]);
    if (xjq3i && xjq3i != '') {
        var skb90 = Number(xjq3i);
        zhfvry[b[32130]](skb90);
    } else zhfvry[b[32131]]();
}, window[b[32131]] = function () {
    var w8d502 = this;
    sendApi(e1U0[b[32010]], b[32132], {
        'partner_id': e1U0[b[12299]],
        'uid': e1U0[b[26477]],
        'version': e1U0[b[5070]],
        'game_pkg': e1U0[b[26479]],
        'device': e1U0[b[26481]]
    }, w8d502[b[32133]][b[76]](w8d502), e1G0U, e101);
}, window[b[32133]] = function (tghl$) {
    if (!tghl$) {
        window[b[32059]](0x3, b[32134]), window[b[32038]](b[32134]);
        return;
    }
    if (tghl$[b[1341]] != b[9791]) {
        window[b[32059]](0x3, b[32135] + tghl$[b[1341]]), window[b[32038]](b[32135] + tghl$[b[1341]]);
        return;
    }
    if (!tghl$[b[12]] || tghl$[b[12]][b[14]] == 0x0) {
        window[b[32059]](0x3, b[32136]), window[b[32038]](b[32137]);
        return;
    }
    this[b[32138]](tghl$);
}, window[b[32130]] = function (tx$lhg) {
    var d0568b = this;
    sendApi(e1U0[b[32010]], b[32139], {
        'server_id': tx$lhg,
        'time': Date[b[85]]() / 0x3e8
    }, d0568b[b[32140]][b[76]](d0568b), e1G0U, e101);
}, window[b[32140]] = function (x3qij$) {
    if (!x3qij$) {
        window[b[32059]](0x4, b[32141]), this[b[32131]]();
        return;
    }
    if (x3qij$[b[1341]] != b[9791]) {
        window[b[32059]](0x4, b[32142] + x3qij$[b[1341]]), this[b[32131]]();
        return;
    }
    if (!x3qij$[b[12]] || x3qij$[b[12]][b[14]] == 0x0) {
        window[b[32059]](0x4, b[32143]), this[b[32131]]();
        return;
    }
    this[b[32138]](x3qij$);
}, window[b[32138]] = function (k0s9b6) {
    e1U0[b[695]] = k0s9b6[b[32144]] != undefined ? k0s9b6[b[32144]] : 0x0, e1U0[b[26473]] = {
        'server_id': String(k0s9b6[b[12]][0x0][b[11489]]),
        'server_name': String(k0s9b6[b[12]][0x0][b[26478]]),
        'entry_ip': k0s9b6[b[12]][0x0][b[26503]],
        'entry_port': parseInt(k0s9b6[b[12]][0x0][b[26504]]),
        'status': e1UG1(k0s9b6[b[12]][0x0]),
        'start_time': k0s9b6[b[12]][0x0][b[32145]],
        'maintain_time': k0s9b6[b[12]][0x0][b[32146]] ? k0s9b6[b[12]][0x0][b[32146]] : '',
        'is_recommend': k0s9b6[b[12]][0x0][b[32147]],
        'cdn': e1U0[b[4257]]
    }, this[b[32148]](), window[b[31898]] && window[b[31898]][b[164]][b[32149]] && window[b[31898]][b[164]][b[32149]](sdkInitRes[b[32150]], sdkInitRes[b[32151]], sdkInitRes[b[32152]], sdkInitRes[b[32153]], sdkInitRes[b[32154]]);
}, window[b[32155]] = null, window[b[32148]] = function () {
    var m_ac7 = this;
    evfz_[b[31445]](function (uq9sn) {
        console[b[515]](b[32156] + JSON[b[4243]](uq9sn)), youYiCofig = uq9sn;
        window[b[32155]][b[32157]] == 0x1 && (e1U0[b[695]] = 0x0);
        if (e1U0[b[695]] == 0x1) {
            var tijx$g = e1U0[b[26473]][b[113]];
            if (tijx$g === -0x1 || tijx$g === 0x0) {
                window[b[32059]](0xf, b[32158] + e1U0[b[26473]]['id'] + b[32159] + e1U0[b[26473]][b[113]]), window[b[32038]](tijx$g === -0x1 ? b[32160] : b[32161]);
                return;
            }
            e101GU(0x0, e1U0[b[26473]][b[11489]]), window[b[31898]][b[164]][b[32162]](e1U0[b[695]]);
        } else window[b[31898]][b[164]][b[32163]](() => {
            var d8251 = window[b[32155]][b[32164]],
                sqk9u = window[b[32155]][b[32157]] == 0x1;
            sqk9u && window[b[31898]][b[164]][b[32165]](b[32166], d8251, b[31387]);
        }, m_ac7), e11U0G();
        window[b[32032]] = !![], window[b[31923]](), window[b[31924]]();
    });
}, window[b[32167]] = function () {
    evfz_[b[31446]](function (oa_cm) {
        console[b[515]](b[32168] + JSON[b[4243]](oa_cm));
    });
}, window[b[32098]] = function () {
    sendApi(e1U0[b[32010]], b[32169], {
        'game_pkg': e1U0[b[26479]],
        'version_name': e1U0[b[32093]]
    }, this[b[32170]][b[76]](this), e1G0U, e101);
}, window[b[32170]] = function (hzlfry) {
    if (!hzlfry) {
        window[b[32059]](0x5, b[32171]), window[b[32038]](b[32171]);
        return;
    }
    if (hzlfry[b[1341]] != b[9791]) {
        window[b[32059]](0x5, b[32172] + hzlfry[b[1341]]), window[b[32038]](b[32172] + hzlfry[b[1341]]);
        return;
    }
    if (!hzlfry[b[12]] || !hzlfry[b[12]][b[5070]]) {
        window[b[32059]](0x5, b[32173] + (hzlfry[b[12]] && hzlfry[b[12]][b[5070]])), window[b[32038]](b[32173] + (hzlfry[b[12]] && hzlfry[b[12]][b[5070]]));
        return;
    }
    hzlfry[b[12]][b[32174]] && hzlfry[b[12]][b[32174]][b[14]] > 0xa && (e1U0[b[32175]] = hzlfry[b[12]][b[32174]], e1U0[b[4257]] = hzlfry[b[12]][b[32174]]), hzlfry[b[12]][b[5070]] && (e1U0[b[107]] = hzlfry[b[12]][b[5070]]), console[b[80]](b[26617] + e1U0[b[107]] + b[32176] + e1U0[b[32093]]), window[b[32030]] = !![], window[b[31923]](), window[b[31924]]();
}, window[b[32177]], window[b[32099]] = function () {
    sendApi(e1U0[b[32010]], b[32178], { 'game_pkg': e1U0[b[26479]] }, this[b[32179]][b[76]](this), e1G0U, e101);
}, window[b[32179]] = function (qu3i) {
    if (qu3i && qu3i[b[1341]] === b[9791] && qu3i[b[12]]) {
        window[b[32177]] = qu3i[b[12]];
        for (var g$lixt in qu3i[b[12]]) {
            e1U0[g$lixt] = qu3i[b[12]][g$lixt];
        }
        window[b[32180]]();
    } else window[b[32059]](0xb, b[32181]), console[b[80]](b[32182] + qu3i[b[1341]]);
    window[b[32031]] = !![], window[b[31924]]();
}, window[b[32180]] = function () {
    var igx$l = e1U0[b[809]] || e1U0[b[26369]] && e1U0[b[26369]] > 0x0;
    if (igx$l) {
        var rhgtlx = e1U0[b[26370]],
            xij$3g = rhgtlx && rhgtlx[b[14]] == 0x9;
        xij$3g && (window[b[28933]] = rhgtlx);
        var aoecmp = e1U0[b[26371]],
            f4av7 = aoecmp && aoecmp[b[16]]('#')[b[14]] == 0x4;
        f4av7 && (window[b[12117]] = aoecmp);
    }
}, window[b[32183]] = function (u96kn, v_4zfy, yzrhfv, v_a74, ti$gxj, bu9sk6, xlgi$t, _fv4a7, kd09b6, q3jnus) {
    ti$gxj = String(ti$gxj);
    var lhxgr = xlgi$t,
        qji$x = _fv4a7;
    e1U0[b[32006]][ti$gxj] = {
        'productid': ti$gxj,
        'productname': lhxgr,
        'productdesc': qji$x,
        'roleid': u96kn,
        'rolename': v_4zfy,
        'rolelevel': yzrhfv,
        'price': bu9sk6,
        'callback': kd09b6
    }, sendApi(e1U0[b[32014]], b[32184], {
        'game_pkg': e1U0[b[26479]],
        'server_id': e1U0[b[26473]][b[11489]],
        'server_name': e1U0[b[26473]][b[26478]],
        'level': yzrhfv,
        'uid': e1U0[b[26477]],
        'role_id': u96kn,
        'role_name': v_4zfy,
        'product_id': ti$gxj,
        'product_name': lhxgr,
        'product_desc': qji$x,
        'money': bu9sk6,
        'partner_id': e1U0[b[12299]]
    }, toPayCallBack, e1G0U, e101);
}, window[b[32185]] = function (v4_af7) {
    if (v4_af7 && (v4_af7[b[32186]] === 0xc8 || v4_af7[b[1341]] == b[9791])) {
        var mpoe = e1U0[b[32006]][String(v4_af7[b[32187]])];
        if (mpoe[b[361]]) mpoe[b[361]](v4_af7[b[32187]], v4_af7[b[32188]], -0x1);
        evfz_[b[31406]]({
            'cpbill': v4_af7[b[32188]],
            'productid': v4_af7[b[32187]],
            'productname': mpoe[b[32189]],
            'productdesc': mpoe[b[32190]],
            'serverid': e1U0[b[26473]][b[11489]],
            'servername': e1U0[b[26473]][b[26478]],
            'roleid': mpoe[b[12303]],
            'rolename': mpoe[b[12304]],
            'rolelevel': mpoe[b[32191]],
            'price': mpoe[b[28324]],
            'extension': JSON[b[4243]]({ 'cp_order_id': v4_af7[b[32188]] })
        }, function (lxgt, b9ks6) {
            mpoe[b[361]] && lxgt == 0x0 && mpoe[b[361]](v4_af7[b[32187]], v4_af7[b[32188]], lxgt);
            console[b[80]](JSON[b[4243]]({
                'type': b[32192],
                'status': lxgt,
                'data': v4_af7,
                'role_name': mpoe[b[12304]]
            }));
            if (lxgt === 0x0) {} else {
                if (lxgt === 0x1) {} else {
                    if (lxgt === 0x2) {}
                }
            }
        });
    } else {
        var hzfryv = v4_af7 ? b[32193] + v4_af7[b[32186]] + b[32194] + v4_af7[b[1341]] + b[32195] + v4_af7[b[80]] : b[32196];
        window[b[32059]](0xd, b[32197] + hzfryv), alert(hzfryv);
    }
}, window[b[32198]] = function () {}, window[b[32199]] = function (gtl$i, n3jusq, zgltrh, rvyfz4, $xjqi3) {
    evfz_[b[31441]](e1U0[b[26473]][b[11489]], e1U0[b[26473]][b[26478]] || e1U0[b[26473]][b[11489]], gtl$i, n3jusq, zgltrh), sendApi(e1U0[b[32010]], b[32200], {
        'game_pkg': e1U0[b[26479]],
        'server_id': e1U0[b[26473]][b[11489]],
        'role_id': gtl$i,
        'uid': e1U0[b[26477]],
        'role_name': n3jusq,
        'role_type': rvyfz4,
        'level': zgltrh
    });
}, window[b[32201]] = function (vyhfz, hzlytr, yv4_f7, va4_, jg$3x, _ac4m7, m_7a4c, m_a4, zrflh, nijqu3) {
    e1U0[b[31887]] = vyhfz, e1U0[b[4381]] = hzlytr, e1U0[b[31888]] = yv4_f7, evfz_[b[31442]](e1U0[b[26473]][b[11489]], e1U0[b[26473]][b[26478]] || e1U0[b[26473]][b[11489]], vyhfz, hzlytr, yv4_f7), sendApi(e1U0[b[32010]], b[32202], {
        'game_pkg': e1U0[b[26479]],
        'server_id': e1U0[b[26473]][b[11489]],
        'role_id': vyhfz,
        'uid': e1U0[b[26477]],
        'role_name': hzlytr,
        'role_type': va4_,
        'level': yv4_f7,
        'evolution': jg$3x
    });
}, window[b[32203]] = function (acm47_, tlgxh$, lrhxg, mpaco7, k50db, inuq, yvfz4_, c4m_7, v_74a, $3jniq) {
    e1U0[b[31887]] = acm47_, e1U0[b[4381]] = tlgxh$, e1U0[b[31888]] = lrhxg, evfz_[b[31443]](e1U0[b[26473]][b[11489]], e1U0[b[26473]][b[26478]] || e1U0[b[26473]][b[11489]], acm47_, tlgxh$, lrhxg), sendApi(e1U0[b[32010]], b[32202], {
        'game_pkg': e1U0[b[26479]],
        'server_id': e1U0[b[26473]][b[11489]],
        'role_id': acm47_,
        'uid': e1U0[b[26477]],
        'role_name': tlgxh$,
        'role_type': mpaco7,
        'level': lrhxg,
        'evolution': k50db
    });
}, window[b[32204]] = function (k0d69b) {}, window[b[32205]] = function (lx$ig, n9su3q) {
    evfz_[b[31389]](b[31389], { 'activity_id': n9su3q }, function (un3qij) {
        lx$ig && lx$ig(un3qij);
    });
}, window[b[24499]] = function () {
    evfz_[b[24499]]();
}, window[b[32206]] = function () {
    evfz_[b[24378]]();
}, window[b[32207]] = function (qjs3nu, o_ca7, ltgxi$, lx$gth, op7m, qu3nj, zrhyvf, tzlrhy) {
    tzlrhy = tzlrhy || e1U0[b[26473]][b[11489]], sendApi(e1U0[b[32010]], b[32208], {
        'phone': qjs3nu,
        'role_id': o_ca7,
        'uid': e1U0[b[26477]],
        'game_pkg': e1U0[b[26479]],
        'partner_id': e1U0[b[12299]],
        'server_id': tzlrhy
    }, zrhyvf, 0x2, null, function () {
        return !![];
    });
}, window[b[10804]] = function (gxji) {
    window[b[31987]] = gxji, window[b[31987]] && window[b[31986]] && (console[b[80]](b[31988] + window[b[31986]][b[847]]), window[b[31987]](window[b[31986]]), window[b[31986]] = null);
}, window[b[32209]] = function (lxgit, igx$j3, rthglz, k6d50b) {
    window[b[24]](b[32210], {
        'game_pkg': window[b[31886]][b[26479]],
        'role_id': igx$j3,
        'server_id': rthglz
    }, k6d50b);
}, window[b[32211]] = function ($xth, $txlig, g$xt) {
    function _z4(m4va) {
        var sqnj = [],
            yf74v_ = [],
            f_4zy = g$xt || window[b[591]][b[32212]];
        for (var w18d2 in f_4zy) {
            var s93nuq = Number(w18d2);
            (!$xth || !$xth[b[14]] || $xth[b[122]](s93nuq) != -0x1) && (yf74v_[b[31]](f_4zy[w18d2]), sqnj[b[31]]([s93nuq, 0x3]));
        }
        window[b[31901]](window[b[31902]], b[32213]) >= 0x0 ? (console[b[515]](b[32214]), evfz_[b[31438]] && evfz_[b[31438]](yf74v_, function (ytzlrh) {
            console[b[515]](b[32215]), console[b[515]](ytzlrh);
            if (ytzlrh && ytzlrh[b[26677]] == b[32216]) for (var q3xi$j in f_4zy) {
                if (ytzlrh[f_4zy[q3xi$j]] == b[32217]) {
                    var rglhtx = Number(q3xi$j);
                    for (var k9s6u = 0x0; k9s6u < sqnj[b[14]]; k9s6u++) {
                        if (sqnj[k9s6u][0x0] == rglhtx) {
                            sqnj[k9s6u][0x1] = 0x1;
                            break;
                        }
                    }
                }
            }
            window[b[31901]](window[b[31902]], b[32218]) >= 0x0 ? wx[b[32219]]({
                'withSubscriptions': !![],
                'success': function (hvfy) {
                    var av7m4_ = hvfy[b[32220]][b[32221]];
                    if (av7m4_) {
                        console[b[515]](b[32222]), console[b[515]](av7m4_);
                        for (var w82d05 in f_4zy) {
                            if (av7m4_[f_4zy[w82d05]] == b[32217]) {
                                var niuq3 = Number(w82d05);
                                for (var rzfvy4 = 0x0; rzfvy4 < sqnj[b[14]]; rzfvy4++) {
                                    if (sqnj[rzfvy4][0x0] == niuq3) {
                                        sqnj[rzfvy4][0x1] = 0x2;
                                        break;
                                    }
                                }
                            }
                        }
                        console[b[515]](sqnj), $txlig && $txlig(sqnj);
                    } else console[b[515]](b[32223]), console[b[515]](hvfy), console[b[515]](sqnj), $txlig && $txlig(sqnj);
                },
                'fail': function () {
                    console[b[515]](b[32224]), console[b[515]](sqnj), $txlig && $txlig(sqnj);
                }
            }) : (console[b[515]](b[32225] + window[b[31902]]), console[b[515]](sqnj), $txlig && $txlig(sqnj));
        })) : (console[b[515]](b[32226] + window[b[31902]]), console[b[515]](sqnj), $txlig && $txlig(sqnj)), wx[b[32227]](_z4);
    }
    wx[b[32228]](_z4);
}, window[b[32229]] = {
    'isSuccess': ![],
    'level': b[32230],
    'isCharging': ![]
}, window[b[13451]] = function (a4cm7_) {
    wx[b[31978]]({
        'success': function (k96sb) {
            var xqij = window[b[32229]];
            xqij[b[32231]] = !![], xqij[b[4357]] = Number(k96sb[b[4357]])[b[3974]](0x0), xqij[b[31981]] = k96sb[b[31981]], a4cm7_ && a4cm7_(xqij[b[32231]], xqij[b[4357]], xqij[b[31981]]);
        },
        'fail': function (xth$lg) {
            console[b[515]](b[32232], xth$lg[b[26677]]);
            var k6db5 = window[b[32229]];
            a4cm7_ && a4cm7_(k6db5[b[32231]], k6db5[b[4357]], k6db5[b[31981]]);
        }
    });
}, window[b[11870]] = function (kun9sq) {
    wx[b[11870]]({
        'success': function (m7c_a) {
            kun9sq && kun9sq(!![], m7c_a);
        },
        'fail': function (ylfrz) {
            kun9sq && kun9sq(![], ylfrz);
        }
    });
}, window[b[11872]] = function (_af74v) {
    if (_af74v) wx[b[11872]](_af74v);
}, window[b[26150]] = function (hrtxlg) {
    wx[b[26150]](hrtxlg);
}, window[b[24]] = function (zylrfh, ac7opm, hxlgr, rgzlh, g$t, a74m, ns6k, hrxlt) {
    if (rgzlh == undefined) rgzlh = 0x1;
    wx[b[510]]({
        'url': zylrfh,
        'method': ns6k || b[26353],
        'responseType': b[4160],
        'data': ac7opm,
        'header': { 'content-type': hrxlt || b[32072] },
        'success': function (pmo7) {
            DEBUG && console[b[515]](b[32233], zylrfh, info, pmo7);
            if (pmo7 && pmo7[b[26747]] == 0xc8) {
                var tj$ixg = pmo7[b[12]];
                !a74m || a74m(tj$ixg) ? hxlgr && hxlgr(tj$ixg) : window[b[32234]](zylrfh, ac7opm, hxlgr, rgzlh, g$t, a74m, pmo7);
            } else window[b[32234]](zylrfh, ac7opm, hxlgr, rgzlh, g$t, a74m, pmo7);
        },
        'fail': function (ytrl) {
            DEBUG && console[b[515]](b[32235], zylrfh, info, ytrl), window[b[32234]](zylrfh, ac7opm, hxlgr, rgzlh, g$t, a74m, ytrl);
        },
        'complete': function () {}
    });
}, window[b[32234]] = function (sk9nq, xlt$, wd2518, oac7mp, lthy, macop, lhz) {
    oac7mp - 0x1 > 0x0 ? setTimeout(function () {
        window[b[24]](sk9nq, xlt$, wd2518, oac7mp - 0x1, lthy, macop);
    }, 0x3e8) : lthy && lthy(JSON[b[4243]]({
        'url': sk9nq,
        'response': lhz
    }));
}, window[b[32236]] = function (xrlght, j$q, b0w8d, bkd560, x$qi3, $j3igx, gxi$l) {
    !b0w8d && (b0w8d = {});
    var uksn6 = Math[b[127]](Date[b[85]]() / 0x3e8);
    b0w8d[b[922]] = uksn6, b0w8d[b[32237]] = j$q;
    var k96sun = Object[b[279]](b0w8d)[b[1154]](),
        xlth$g = '',
        oapmc7 = '';
    for (var thx$l = 0x0; thx$l < k96sun[b[14]]; thx$l++) {
        xlth$g = xlth$g + (thx$l == 0x0 ? '' : '&') + k96sun[thx$l] + b0w8d[k96sun[thx$l]], oapmc7 = oapmc7 + (thx$l == 0x0 ? '' : '&') + k96sun[thx$l] + '=' + encodeURIComponent(b0w8d[k96sun[thx$l]]);
    }
    xlth$g = xlth$g + e1U0[b[32016]];
    var q3jinu = b[32238] + md5(xlth$g);
    send(xrlght + '?' + oapmc7 + (oapmc7 == '' ? '' : '&') + q3jinu, null, bkd560, x$qi3, $j3igx, gxi$l || function (yvfzr) {
        return yvfzr[b[1341]] == b[9791];
    }, null, b[31378]);
}, window[b[32239]] = function (yvfh, fylhrz) {
    var $xtgj = 0x0;
    e1U0[b[26473]] && ($xtgj = e1U0[b[26473]][b[11489]]), sendApi(e1U0[b[32012]], b[32240], {
        'partnerId': e1U0[b[12299]],
        'gamePkg': e1U0[b[26479]],
        'logTime': Math[b[127]](Date[b[85]]() / 0x3e8),
        'platformUid': e1U0[b[26480]],
        'type': yvfh,
        'serverId': $xtgj
    }, null, 0x2, null, function () {
        return !![];
    });
}, window[b[32241]] = function (uk9qn) {
    sendApi(e1U0[b[32010]], b[32242], {
        'partner_id': e1U0[b[12299]],
        'uid': e1U0[b[26477]],
        'version': e1U0[b[5070]],
        'game_pkg': e1U0[b[26479]],
        'device': e1U0[b[26481]]
    }, e1U0G1, e1G0U, e101);
}, window[b[32243]] = function (tjxi) {
    if (tjxi && tjxi[b[1341]] === b[9791] && tjxi[b[12]]) {
        tjxi[b[12]][b[5270]]({
            'id': -0x2,
            'name': b[32244]
        }), tjxi[b[12]][b[5270]]({
            'id': -0x1,
            'name': b[32245]
        }), e1U0[b[32246]] = tjxi[b[12]];
        if (window[b[12481]]) window[b[12481]][b[32247]]();
    } else {
        e1U0[b[32248]] = ![];
        var f4vr = tjxi ? tjxi[b[1341]] : '';
        window[b[32059]](0x7, b[32249] + f4vr), window[b[32038]](b[32250] + f4vr);
    }
}, window[b[32251]] = function (zhrfly) {
    sendApi(e1U0[b[32010]], b[32252], {
        'partner_id': e1U0[b[12299]],
        'uid': e1U0[b[26477]],
        'version': e1U0[b[5070]],
        'game_pkg': e1U0[b[26479]],
        'device': e1U0[b[26481]]
    }, e11UG, e1G0U, e101);
}, window[b[32253]] = function (hyfvrz) {
    e1U0[b[32254]] = ![];
    if (hyfvrz && hyfvrz[b[1341]] === b[9791] && hyfvrz[b[12]]) {
        for (var fvzy4r = 0x0; fvzy4r < hyfvrz[b[12]][b[14]]; fvzy4r++) {
            hyfvrz[b[12]][fvzy4r][b[113]] = e1UG1(hyfvrz[b[12]][fvzy4r]);
        }
        e1U0[b[32019]][-0x1] = window[b[32255]](hyfvrz[b[12]]), window[b[12481]][b[32256]](-0x1);
    } else {
        var j$3gi = hyfvrz ? hyfvrz[b[1341]] : '';
        window[b[32059]](0x8, b[32257] + j$3gi), window[b[32038]](b[32258] + j$3gi);
    }
}, window[b[32259]] = function (ma7_) {
    sendApi(e1U0[b[32010]], b[32252], {
        'partner_id': e1U0[b[12299]],
        'uid': e1U0[b[26477]],
        'version': e1U0[b[5070]],
        'game_pkg': e1U0[b[26479]],
        'device': e1U0[b[26481]]
    }, ma7_, e1G0U, e101);
}, window[b[32260]] = function (jitxg, _ca4) {
    sendApi(e1U0[b[32010]], b[32261], {
        'partner_id': e1U0[b[12299]],
        'uid': e1U0[b[26477]],
        'version': e1U0[b[5070]],
        'game_pkg': e1U0[b[26479]],
        'device': e1U0[b[26481]],
        'server_group_id': _ca4
    }, e1GU1, e1G0U, e101);
}, window[b[32262]] = function (cpo) {
    e1U0[b[32254]] = ![];
    if (cpo && cpo[b[1341]] === b[9791] && cpo[b[12]] && cpo[b[12]][b[12]]) {
        var hylz = cpo[b[12]][b[32263]],
            db58 = [];
        for (var ukbs96 = 0x0; ukbs96 < cpo[b[12]][b[12]][b[14]]; ukbs96++) {
            cpo[b[12]][b[12]][ukbs96][b[113]] = e1UG1(cpo[b[12]][b[12]][ukbs96]), (db58[b[14]] == 0x0 || cpo[b[12]][b[12]][ukbs96][b[113]] != 0x0) && (db58[db58[b[14]]] = cpo[b[12]][b[12]][ukbs96]);
        }
        e1U0[b[32019]][hylz] = window[b[32255]](db58), window[b[12481]][b[32256]](hylz);
    } else {
        var hr = cpo ? cpo[b[1341]] : '';
        window[b[32059]](0x9, b[32264] + hr), window[b[32038]](b[32265] + hr);
    }
}, window[b[32266]] = function (vhfz) {
    sendApi(e1U0[b[32010]], b[32267], {
        'partner_id': e1U0[b[12299]],
        'uid': e1U0[b[26477]],
        'version': e1U0[b[5070]],
        'game_pkg': e1U0[b[26479]],
        'device': e1U0[b[26481]]
    }, reqServerRecommendCallBack, e1G0U, e101);
}, window[b[32268]] = function (d56b) {
    e1U0[b[32254]] = ![];
    if (d56b && d56b[b[1341]] === b[9791] && d56b[b[12]]) {
        for (var tzylrh = 0x0; tzylrh < d56b[b[12]][b[14]]; tzylrh++) {
            d56b[b[12]][tzylrh][b[113]] = e1UG1(d56b[b[12]][tzylrh]);
        }
        e1U0[b[32019]][-0x2] = window[b[32255]](d56b[b[12]]), window[b[12481]][b[32256]](-0x2);
    } else {
        var v_yzf = d56b ? d56b[b[1341]] : '';
        window[b[32059]](0xa, b[32269] + v_yzf), alert(b[32270] + v_yzf);
    }
}, window[b[32255]] = function (zlgr) {
    return zlgr;
}, window[b[32271]] = function (hzfvy, itxlg) {
    hzfvy = hzfvy || e1U0[b[26473]][b[11489]], sendApi(e1U0[b[32010]], b[32272], {
        'type': '4',
        'game_pkg': e1U0[b[26479]],
        'server_id': hzfvy
    }, itxlg);
}, window[b[32273]] = function (vyfrz, t$ixj, qn3ij, zv4ry) {
    qn3ij = qn3ij || e1U0[b[26473]][b[11489]], sendApi(e1U0[b[32010]], b[32274], {
        'type': vyfrz,
        'game_pkg': t$ixj,
        'server_id': qn3ij
    }, zv4ry);
}, window[b[32275]] = function (b6k9d, i$gjx) {
    sendApi(e1U0[b[32010]], b[32276], { 'game_pkg': b6k9d }, i$gjx);
}, window[b[32277]] = function (nsuk) {
    if (nsuk) {
        if (nsuk[b[113]] == 0x1) {
            if (nsuk[b[32278]] == 0x3) return 0x3;else return nsuk[b[32278]] == 0x1 ? 0x2 : 0x1;
        } else return nsuk[b[113]] == 0x0 ? 0x0 : -0x1;
    }
    return -0x1;
}, window[b[32279]] = function (t$lixg, $ltgx) {
    var q3ix$j = window[b[32155]][b[32157]] == 0x1;
    if (q3ix$j) {
        var nu96k = window[b[32155]][b[32164]],
            q3ix$j = window[b[32155]][b[32157]] == 0x1;
        window[b[31898]][b[164]][b[32165]](b[32166], nu96k, b[31387]);
        return;
    }
    e1U0[b[32280]] = {
        'step': t$lixg,
        'server_id': $ltgx
    };
    var rltyzh = this;
    e11UG0({ 'title': b[32281] }), sendApi(e1U0[b[32010]], b[32282], {
        'partner_id': e1U0[b[12299]],
        'uid': e1U0[b[26477]],
        'game_pkg': e1U0[b[26479]],
        'server_id': $ltgx,
        'platform': e1U0[b[26440]],
        'platform_uid': e1U0[b[26480]],
        'check_login_time': e1U0[b[32127]],
        'check_login_sign': e1U0[b[32126]],
        'version_name': e1U0[b[32093]]
    }, e101UG, e1G0U, e101, function (omcp7) {
        return omcp7[b[1341]] == b[9791] || omcp7[b[80]] == b[32283] || omcp7[b[80]] == b[32284];
    });
}, window[b[32285]] = function ($jqin) {
    var $lgxht = this;
    if ($jqin && $jqin[b[1341]] === b[9791] && $jqin[b[12]]) {
        var fhrzl = e1U0[b[26473]];
        fhrzl[b[32286]] = e1U0[b[32020]], fhrzl[b[11472]] = String($jqin[b[12]][b[32287]]), fhrzl[b[26442]] = parseInt($jqin[b[12]][b[922]]);
        if ($jqin[b[12]][b[26441]]) fhrzl[b[26441]] = parseInt($jqin[b[12]][b[26441]]);else fhrzl[b[26441]] = parseInt($jqin[b[12]][b[11489]]);
        fhrzl[b[32288]] = 0x0, fhrzl[b[4257]] = e1U0[b[32175]], fhrzl[b[32289]] = $jqin[b[12]][b[32290]], fhrzl[b[32291]] = $jqin[b[12]][b[32291]];
        if ($jqin[b[12]][b[26445]]) fhrzl[b[26445]] = parseInt($jqin[b[12]][b[26445]]);
        console[b[515]](b[32292] + JSON[b[4243]](fhrzl[b[32291]])), e1U0[b[695]] == 0x1 && fhrzl[b[32291]] && fhrzl[b[32291]][b[32293]] == 0x1 && (e1U0[b[32294]] = 0x1, window[b[31898]][b[164]][b[32295]]()), e10G1U();
    } else {
        if (e1U0[b[32280]][b[6865]] >= 0x3) {
            var _v4a = $jqin ? $jqin[b[1341]] : '';
            window[b[32059]](0xc, b[32296] + _v4a), e101(JSON[b[4243]]($jqin)), window[b[32038]](b[32297] + _v4a);
        } else sendApi(e1U0[b[32010]], b[32105], {
            'platform': e1U0[b[32008]],
            'partner_id': e1U0[b[12299]],
            'token': e1U0[b[32103]],
            'game_pkg': e1U0[b[26479]],
            'deviceId': e1U0[b[26481]],
            'scene': b[32106] + e1U0[b[32018]]
        }, function (tglz) {
            if (!tglz || tglz[b[1341]] != b[9791]) {
                window[b[32038]](b[32123] + tglz && tglz[b[1341]]);
                return;
            }
            e1U0[b[32126]] = String(tglz[b[11472]]), e1U0[b[32127]] = String(tglz[b[922]]), setTimeout(function () {
                e101GU(e1U0[b[32280]][b[6865]] + 0x1, e1U0[b[32280]][b[11489]]);
            }, 0x5dc);
        }, e1G0U, e101, function (fv_yz) {
            return fv_yz[b[1341]] == b[9791] || fv_yz[b[1341]] == b[26825];
        });
    }
}, window[b[32298]] = function () {
    ServerLoading[b[164]][b[32162]](e1U0[b[695]]), window[b[32027]] = !![], window[b[31924]]();
}, window[b[31923]] = function () {
    if (window[b[31922]] && window[b[31930]] && window[b[32028]] && window[b[32029]] && window[b[32030]] && window[b[32032]]) {
        if (!window[b[31354]][b[164]]) {
            console[b[515]](b[32299] + window[b[31354]][b[164]]);
            var db5 = wx[b[26136]](),
                j3iq$x = db5[b[847]] ? db5[b[847]] : 0x0,
                sqkn9u = {
                'cdn': window[b[31886]][b[4257]],
                'spareCdn': window[b[31886]][b[26155]],
                'newRegister': window[b[31886]][b[695]],
                'wxPC': window[b[31886]][b[26159]],
                'wxIOS': window[b[31886]][b[1149]],
                'wxAndroid': window[b[31886]][b[11313]],
                'wxParam': {
                    'limitLoad': window[b[31886]][b[31969]],
                    'benchmarkLevel': window[b[31886]][b[31970]],
                    'wxFrom': window[b[591]][b[31761]] == b[32300] ? 0x1 : 0x0,
                    'wxSDKVersion': window[b[31902]]
                },
                'configType': window[b[31886]][b[12015]],
                'exposeType': window[b[31886]][b[785]],
                'scene': j3iq$x
            };
            new window[b[31354]](sqkn9u, window[b[31886]][b[107]], window[b[32003]]);
        }
    }
}, window[b[31924]] = function () {
    if (window[b[31922]] && window[b[31930]] && window[b[32028]] && window[b[32029]] && window[b[32030]] && window[b[32032]] && window[b[32027]] && window[b[32031]]) {
        e11U0G();
        if (!e10GU) {
            e10GU = !![];
            if (!window[b[31354]][b[164]]) window[b[31923]]();
            var avm47_ = 0x0,
                ac7o_ = wx[b[32301]]();
            ac7o_ && (window[b[31886]][b[31965]] && (avm47_ = ac7o_[b[345]]), console[b[80]](b[32302] + ac7o_[b[345]] + b[32303] + ac7o_[b[1368]] + b[32304] + ac7o_[b[1370]] + b[32305] + ac7o_[b[1369]] + b[32306] + ac7o_[b[195]] + b[32307] + ac7o_[b[196]]));
            var rtzlgh = {};
            for (const hrx in e1U0[b[26473]]) {
                rtzlgh[hrx] = e1U0[b[26473]][hrx];
            }
            var dw508 = {
                'channel': window[b[31886]][b[12308]],
                'account': window[b[31886]][b[26477]],
                'userId': window[b[31886]][b[12297]],
                'cdn': window[b[31886]][b[4257]],
                'data': window[b[31886]][b[12]],
                'package': window[b[31886]][b[26156]],
                'newRegister': window[b[31886]][b[695]],
                'pkgName': window[b[31886]][b[26479]],
                'partnerId': window[b[31886]][b[12299]],
                'platform_uid': window[b[31886]][b[26480]],
                'deviceId': window[b[31886]][b[26481]],
                'selectedServer': rtzlgh,
                'configType': window[b[31886]][b[12015]],
                'exposeType': window[b[31886]][b[785]],
                'debugUsers': window[b[31886]][b[12434]],
                'wxMenuTop': avm47_,
                'wxShield': window[b[31886]][b[809]],
                'wx_channel': window[b[31886]][b[26620]]
            };
            if (window[b[32177]]) for (var vf4_ in window[b[32177]]) {
                dw508[vf4_] = window[b[32177]][vf4_];
            }
            window[b[31354]][b[164]][b[26495]](dw508);
            if (e1U0[b[26473]] && e1U0[b[26473]][b[11489]]) localStorage[b[518]](b[32129] + e1U0[b[26479]] + e1U0[b[26477]], e1U0[b[26473]][b[11489]]);
        }
    } else console[b[80]](b[32308] + window[b[31922]] + b[32309] + window[b[31930]] + b[32310] + window[b[32028]] + b[32311] + window[b[32029]] + b[32312] + window[b[32030]] + b[32313] + window[b[32032]] + b[32314] + window[b[32027]] + b[32315] + window[b[32031]]);
};