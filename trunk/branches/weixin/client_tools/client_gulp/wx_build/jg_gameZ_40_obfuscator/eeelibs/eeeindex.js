var b = wx.$e;
import ejix$t from '../eeeesdk/eeesdk.js';
window[b[31993]] = { 'wxVersion': window[b[591]][b[31877]] }, window[b[31994]] = ![], window[b[31995]] = 0x1, window[b[31996]] = 0x1, window[b[31997]] = !![], window[b[31998]] = !![], window[b[31999]] = '', window[b[32000]] = ![], window[b[31882]] = {
    'base_cdn': b[32001],
    'cdn': b[32001]
}, e1U0[b[32002]] = {}, e1U0[b[26156]] = '0', e1U0[b[5070]] = window[b[31993]][b[32003]], e1U0[b[31963]] = '', e1U0['os'] = '1', e1U0[b[32004]] = b[32005], e1U0[b[32006]] = b[32007], e1U0[b[32008]] = b[32009], e1U0[b[32010]] = b[32011], e1U0[b[32012]] = b[32013], e1U0[b[12299]] = '1', e1U0[b[26479]] = '', e1U0[b[26481]] = '', e1U0[b[32014]] = 0x0, e1U0[b[32015]] = {}, e1U0[b[32016]] = parseInt(e1U0[b[12299]]), e1U0[b[12308]] = e1U0[b[12299]], e1U0[b[26473]] = {}, e1U0[b[31888]] = b[32017], e1U0[b[32018]] = ![], e1U0[b[12434]] = b[32019], e1U0[b[26442]] = Date[b[85]](), e1U0[b[12015]] = b[32020], e1U0[b[785]] = '_a', e1U0[b[32021]] = 0x2, e1U0[b[107]] = 0x7c1, e1U0[b[32003]] = window[b[31993]][b[32003]], e1U0[b[809]] = ![], e1U0[b[1149]] = ![], e1U0[b[11313]] = ![], e1U0[b[26159]] = ![], window[b[32022]] = 0x5, window[b[32023]] = ![], window[b[31918]] = ![], window[b[31926]] = ![], window[b[32024]] = ![], window[b[32025]] = ![], window[b[32026]] = ![], window[b[32027]] = ![], window[b[32028]] = ![], window[b[32029]] = ![], window[b[32030]] = null, window[b[685]] = function (xlit) {
    console[b[515]](b[685], xlit), wx[b[4590]]({}), wx[b[31906]]({
        'title': b[5794],
        'content': xlit,
        'success'(lrhyfz) {
            if (lrhyfz[b[32031]]) console[b[515]](b[32032]);else lrhyfz[b[587]] && console[b[515]](b[32033]);
        }
    });
}, window[b[32034]] = function (nqiu3) {
    console[b[515]](b[32035], nqiu3), e11U0G(), wx[b[31906]]({
        'title': b[5794],
        'content': nqiu3,
        'confirmText': b[32036],
        'cancelText': b[19104],
        'success'(t$g) {
            if (t$g[b[32031]]) window[b[31932]]();else t$g[b[587]] && (console[b[515]](b[32037]), wx[b[26154]]({}));
        }
    });
}, window[b[32038]] = function (skub9) {
    console[b[515]](b[32038], skub9), wx[b[31906]]({
        'title': b[5794],
        'content': skub9,
        'confirmText': b[26610],
        'showCancel': ![],
        'complete'($gthl) {
            console[b[515]](b[32037]), wx[b[26154]]({});
        }
    });
}, window[b[32039]] = ![], window[b[32040]] = function (sk60b9) {
    window[b[32039]] = !![], wx[b[4589]](sk60b9);
}, window[b[32041]] = function () {
    window[b[32039]] && (window[b[32039]] = ![], wx[b[4590]]({}));
}, window[b[32042]] = function (d09bk) {
    window[b[31894]][b[164]][b[32042]](d09bk);
}, window[b[12309]] = function (b586d, hzyvfr) {
    ejix$t[b[12309]](b586d, function (f4_zvy) {
        f4_zvy && f4_zvy[b[12]] ? f4_zvy[b[12]][b[1341]] == 0x1 ? hzyvfr(!![]) : (hzyvfr(![]), console[b[80]](b[32043] + f4_zvy[b[12]][b[32044]])) : console[b[515]](b[12309], f4_zvy);
    });
}, window[b[32045]] = function (ht$gl) {
    console[b[515]](b[32046], ht$gl);
}, window[b[32047]] = function (j$3xq) {}, window[b[32048]] = function (xth$g, yzfv, mca7p) {}, window[b[32049]] = function ($nq3) {
    console[b[515]](b[32050], $nq3), window[b[31894]][b[164]][b[32051]](), window[b[31894]][b[164]][b[32052]](), window[b[31894]][b[164]][b[32053]]();
}, window[b[32054]] = function (zltryh) {
    window[b[32055]](0xe, b[32056] + zltryh), window[b[32034]](b[32057]);
    var rxht = {
        'id': window[b[31882]][b[31883]],
        'role': window[b[31882]][b[4381]],
        'level': window[b[31882]][b[31884]],
        'account': window[b[31882]][b[26477]],
        'version': window[b[31882]][b[107]],
        'cdn': window[b[31882]][b[4257]],
        'pkgName': window[b[31882]][b[26479]],
        'gamever': window[b[591]][b[31877]],
        'serverid': window[b[31882]][b[26473]] ? window[b[31882]][b[26473]][b[11489]] : 0x0,
        'systemInfo': window[b[31885]],
        'error': b[32058],
        'stack': zltryh ? zltryh : b[32057]
    },
        s96kb = JSON[b[4243]](rxht);
    console[b[141]](b[32059] + s96kb), window[b[31888]](s96kb);
}, window[b[32055]] = function (gx$, _m7ac) {
    sendApi(e1U0[b[32008]], b[32060], {
        'game_pkg': e1U0[b[26479]],
        'partner_id': e1U0[b[12299]],
        'server_id': e1U0[b[26473]] && e1U0[b[26473]][b[11489]] > 0x0 ? e1U0[b[26473]][b[11489]] : 0x0,
        'uid': e1U0[b[26477]] > 0x0 ? e1U0[b[26477]] : 0x0,
        'type': gx$,
        'info': _m7ac
    });
}, window[b[32061]] = function (n9ksu) {
    var zrhyl = JSON[b[559]](n9ksu);
    zrhyl[b[32062]] = window[b[591]][b[31877]], zrhyl[b[32063]] = window[b[31882]][b[26473]] ? window[b[31882]][b[26473]][b[11489]] : 0x0, zrhyl[b[31885]] = window[b[31885]];
    var n6us9 = JSON[b[4243]](zrhyl);
    console[b[141]](b[32064] + n6us9), window[b[31888]](n6us9);
}, window[b[31933]] = function (j$qi, d0685b) {
    var w85d02 = {
        'id': window[b[31882]][b[31883]],
        'role': window[b[31882]][b[4381]],
        'level': window[b[31882]][b[31884]],
        'account': window[b[31882]][b[26477]],
        'version': window[b[31882]][b[107]],
        'cdn': window[b[31882]][b[4257]],
        'pkgName': window[b[31882]][b[26479]],
        'gamever': window[b[591]][b[31877]],
        'serverid': window[b[31882]][b[26473]] ? window[b[31882]][b[26473]][b[11489]] : 0x0,
        'systemInfo': window[b[31885]],
        'error': j$qi,
        'stack': d0685b
    },
        _c7o = JSON[b[4243]](w85d02);
    console[b[100]](b[32065] + _c7o), window[b[31888]](_c7o);
}, window[b[31888]] = function (dw2580) {
    if (window[b[31882]][b[31964]] == b[32066]) return;
    var g3j$i = e1U0[b[31888]] + b[32067] + e1U0[b[26477]];
    wx[b[510]]({
        'url': g3j$i,
        'method': b[31806],
        'data': dw2580,
        'header': {
            'content-type': b[32068],
            'cache-control': b[32069]
        },
        'success': function (rfyvzh) {
            DEBUG && console[b[515]](b[32070], g3j$i, dw2580, rfyvzh);
        },
        'fail': function (ghl) {
            DEBUG && console[b[515]](b[32070], g3j$i, dw2580, ghl);
        },
        'complete': function () {}
    });
}, window[b[32071]] = function () {
    function ks69n() {
        return ((0x1 + Math[b[128]]()) * 0x10000 | 0x0)[b[288]](0x10)[b[530]](0x1);
    }
    return ks69n() + ks69n() + '-' + ks69n() + '-' + ks69n() + '-' + ks69n() + '+' + ks69n() + ks69n() + ks69n();
}, window[b[31932]] = function () {
    console[b[515]](b[32072]);
    var lxt$gi = ejix$t[b[32073]]();
    e1U0[b[12308]] = lxt$gi[b[32074]], e1U0[b[32016]] = lxt$gi[b[32074]], e1U0[b[12299]] = lxt$gi[b[32074]], e1U0[b[26479]] = lxt$gi[b[32075]];
    var rxlg = { 'game_ver': e1U0[b[5070]] };
    e1U0[b[26481]] = this[b[32071]](), e11UG0({ 'title': b[32076] }), ejix$t[b[395]](rxlg, this[b[32077]][b[76]](this));
}, window[b[32077]] = function (xg3i$) {
    var ao7pm = xg3i$[b[32078]];
    sdkInitRes = xg3i$, console[b[515]](b[32079] + ao7pm + b[32080] + (ao7pm == 0x1) + b[32081] + xg3i$[b[31877]] + b[32082] + window[b[31993]][b[32003]] + b[32083] + xg3i$[b[32084]]);
    if (!xg3i$[b[31877]] || window[b[31897]](window[b[31993]][b[32003]], xg3i$[b[31877]]) < 0x0) console[b[515]](b[32085]), e1U0[b[32006]] = b[32086], e1U0[b[32008]] = b[32087], e1U0[b[32010]] = b[32088], e1U0[b[4257]] = b[32089], e1U0[b[26155]] = b[32090], e1U0[b[32084]] = xg3i$[b[32084]], e1U0[b[809]] = ![];else window[b[31897]](window[b[31993]][b[32003]], xg3i$[b[31877]]) == 0x0 ? (console[b[515]](b[32091]), e1U0[b[32006]] = b[32007], e1U0[b[32008]] = b[32009], e1U0[b[32010]] = b[32011], e1U0[b[4257]] = b[32092], e1U0[b[26155]] = b[32090], e1U0[b[32084]] = b[32093], e1U0[b[809]] = !![]) : (console[b[515]](b[32094]), e1U0[b[32006]] = b[32007], e1U0[b[32008]] = b[32009], e1U0[b[32010]] = b[32011], e1U0[b[4257]] = b[32092], e1U0[b[26155]] = b[32090], e1U0[b[32084]] = b[32093], e1U0[b[809]] = ![]);
    e1U0[b[32014]] = config[b[31668]] ? config[b[31668]] : 0x0, this[b[32095]](), this[b[32096]](), window[b[32097]] = 0x5, e11UG0({ 'title': b[32098] }), ejix$t[b[31798]](this[b[32099]][b[76]](this));
}, window[b[32097]] = 0x5, window[b[32099]] = function (_fz4v, m7cpo) {
    if (_fz4v == 0x0 && m7cpo && m7cpo[b[31760]]) {
        e1U0[b[32100]] = m7cpo[b[31760]], e1U0[b[26620]] = m7cpo[b[26620]];
        var pomea = this;
        e11UG0({ 'title': b[32101] }), sendApi(e1U0[b[32006]], b[32102], {
            'platform': e1U0[b[32004]],
            'partner_id': e1U0[b[12299]],
            'token': m7cpo[b[31760]],
            'game_pkg': e1U0[b[26479]],
            'deviceId': e1U0[b[26481]],
            'scene': b[32103] + e1U0[b[32014]]
        }, this[b[32104]][b[76]](this), e1G0U, e101);
    } else m7cpo && m7cpo[b[26677]] && window[b[32097]] > 0x0 && (m7cpo[b[26677]][b[122]](b[32105]) != -0x1 || m7cpo[b[26677]][b[122]](b[32106]) != -0x1 || m7cpo[b[26677]][b[122]](b[32107]) != -0x1 || m7cpo[b[26677]][b[122]](b[32108]) != -0x1 || m7cpo[b[26677]][b[122]](b[32109]) != -0x1 || m7cpo[b[26677]][b[122]](b[32110]) != -0x1) ? (window[b[32097]]--, ejix$t[b[31798]](this[b[32099]][b[76]](this))) : (window[b[32055]](0x1, b[32111] + _fz4v + b[32112] + (m7cpo ? m7cpo[b[26677]] : '')), window[b[31933]](b[32113], JSON[b[4243]]({
        'status': _fz4v,
        'data': m7cpo
    })), window[b[32034]](b[32114] + (m7cpo && m7cpo[b[26677]] ? '，' + m7cpo[b[26677]] : '')));
}, window[b[32104]] = function (sq39nu) {
    if (!sq39nu) {
        window[b[32055]](0x2, b[32115]), window[b[31933]](b[32116], b[32117]), window[b[32034]](b[32118]);
        return;
    }
    if (sq39nu[b[1341]] != b[9791]) {
        window[b[32055]](0x2, b[32119] + sq39nu[b[1341]]), window[b[31933]](b[32116], JSON[b[4243]](sq39nu)), window[b[32034]](b[32120] + sq39nu[b[1341]]);
        return;
    }
    if (sq39nu[b[32121]] == 0x1) {
        window[b[32034]](b[32122]);
        return;
    }
    e1U0[b[12297]] = String(sq39nu[b[26477]]), e1U0[b[26477]] = String(sq39nu[b[26477]]), e1U0[b[26440]] = String(sq39nu[b[26440]]), e1U0[b[12308]] = String(sq39nu[b[26440]]), e1U0[b[26480]] = String(sq39nu[b[26480]]), e1U0[b[32123]] = String(sq39nu[b[11472]]), e1U0[b[32124]] = String(sq39nu[b[922]]), e1U0[b[11472]] = '';
    var yv_ = this;
    e11UG0({ 'title': b[32125] });
    var l$gh = localStorage[b[513]](b[32126] + e1U0[b[26479]] + e1U0[b[26477]]);
    if (l$gh && l$gh != '') {
        var xt$hgl = Number(l$gh);
        yv_[b[32127]](xt$hgl);
    } else yv_[b[32128]]();
}, window[b[32128]] = function () {
    var ghxtlr = this;
    sendApi(e1U0[b[32006]], b[32129], {
        'partner_id': e1U0[b[12299]],
        'uid': e1U0[b[26477]],
        'version': e1U0[b[5070]],
        'game_pkg': e1U0[b[26479]],
        'device': e1U0[b[26481]]
    }, ghxtlr[b[32130]][b[76]](ghxtlr), e1G0U, e101);
}, window[b[32130]] = function (m_4c7a) {
    if (!m_4c7a) {
        window[b[32055]](0x3, b[32131]), window[b[32034]](b[32131]);
        return;
    }
    if (m_4c7a[b[1341]] != b[9791]) {
        window[b[32055]](0x3, b[32132] + m_4c7a[b[1341]]), window[b[32034]](b[32132] + m_4c7a[b[1341]]);
        return;
    }
    if (!m_4c7a[b[12]] || m_4c7a[b[12]][b[14]] == 0x0) {
        window[b[32055]](0x3, b[32133]), window[b[32034]](b[32134]);
        return;
    }
    this[b[32135]](m_4c7a);
}, window[b[32127]] = function (gthrlz) {
    var m7a_o = this;
    sendApi(e1U0[b[32006]], b[32136], {
        'server_id': gthrlz,
        'time': Date[b[85]]() / 0x3e8
    }, m7a_o[b[32137]][b[76]](m7a_o), e1G0U, e101);
}, window[b[32137]] = function (hlyrf) {
    if (!hlyrf) {
        window[b[32055]](0x4, b[32138]), this[b[32128]]();
        return;
    }
    if (hlyrf[b[1341]] != b[9791]) {
        window[b[32055]](0x4, b[32139] + hlyrf[b[1341]]), this[b[32128]]();
        return;
    }
    if (!hlyrf[b[12]] || hlyrf[b[12]][b[14]] == 0x0) {
        window[b[32055]](0x4, b[32140]), this[b[32128]]();
        return;
    }
    this[b[32135]](hlyrf);
}, window[b[32135]] = function (igxtj$) {
    e1U0[b[695]] = igxtj$[b[32141]] != undefined ? igxtj$[b[32141]] : 0x0, e1U0[b[26473]] = {
        'server_id': String(igxtj$[b[12]][0x0][b[11489]]),
        'server_name': String(igxtj$[b[12]][0x0][b[26478]]),
        'entry_ip': igxtj$[b[12]][0x0][b[26503]],
        'entry_port': parseInt(igxtj$[b[12]][0x0][b[26504]]),
        'status': e1UG1(igxtj$[b[12]][0x0]),
        'start_time': igxtj$[b[12]][0x0][b[32142]],
        'maintain_time': igxtj$[b[12]][0x0][b[32143]] ? igxtj$[b[12]][0x0][b[32143]] : '',
        'is_recommend': igxtj$[b[12]][0x0][b[32144]],
        'cdn': e1U0[b[4257]]
    }, this[b[32145]](), window[b[31894]] && window[b[31894]][b[164]][b[32146]] && window[b[31894]][b[164]][b[32146]](sdkInitRes[b[32147]], sdkInitRes[b[32148]], sdkInitRes[b[32149]], sdkInitRes[b[32150]], sdkInitRes[b[32151]]);
}, window[b[32152]] = null, window[b[32145]] = function () {
    var trxhgl = this;
    ejix$t[b[31871]](function (nsqku9) {
        console[b[515]](b[32153] + JSON[b[4243]](nsqku9)), youYiCofig = nsqku9;
        window[b[32152]][b[32154]] == 0x1 && (e1U0[b[695]] = 0x0);
        if (e1U0[b[695]] == 0x1) {
            var pomcea = e1U0[b[26473]][b[113]];
            if (pomcea === -0x1 || pomcea === 0x0) {
                window[b[32055]](0xf, b[32155] + e1U0[b[26473]]['id'] + b[32156] + e1U0[b[26473]][b[113]]), window[b[32034]](pomcea === -0x1 ? b[32157] : b[32158]);
                return;
            }
            e101GU(0x0, e1U0[b[26473]][b[11489]]), window[b[31894]][b[164]][b[32159]](e1U0[b[695]]);
        } else window[b[31894]][b[164]][b[32160]](() => {
            var mcopea = window[b[32152]][b[32161]],
                sjun3 = window[b[32152]][b[32154]] == 0x1;
            sjun3 && window[b[31894]][b[164]][b[32162]](b[32163], mcopea, b[31816]);
        }, trxhgl), e11U0G();
        window[b[32028]] = !![], window[b[31919]](), window[b[31920]]();
    });
}, window[b[32164]] = function () {
    ejix$t[b[31872]](function (us39qn) {
        console[b[515]](b[32165] + JSON[b[4243]](us39qn));
    });
}, window[b[32095]] = function () {
    sendApi(e1U0[b[32006]], b[32166], {
        'game_pkg': e1U0[b[26479]],
        'version_name': e1U0[b[32084]]
    }, this[b[32167]][b[76]](this), e1G0U, e101);
}, window[b[32167]] = function (qukns) {
    if (!qukns) {
        window[b[32055]](0x5, b[32168]), window[b[32034]](b[32168]);
        return;
    }
    if (qukns[b[1341]] != b[9791]) {
        window[b[32055]](0x5, b[32169] + qukns[b[1341]]), window[b[32034]](b[32169] + qukns[b[1341]]);
        return;
    }
    if (!qukns[b[12]] || !qukns[b[12]][b[5070]]) {
        window[b[32055]](0x5, b[32170] + (qukns[b[12]] && qukns[b[12]][b[5070]])), window[b[32034]](b[32170] + (qukns[b[12]] && qukns[b[12]][b[5070]]));
        return;
    }
    qukns[b[12]][b[32171]] && qukns[b[12]][b[32171]][b[14]] > 0xa && (e1U0[b[32172]] = qukns[b[12]][b[32171]], e1U0[b[4257]] = qukns[b[12]][b[32171]]), qukns[b[12]][b[5070]] && (e1U0[b[107]] = qukns[b[12]][b[5070]]), console[b[80]](b[26617] + e1U0[b[107]] + b[32173] + e1U0[b[32084]]), window[b[32026]] = !![], window[b[31919]](), window[b[31920]]();
}, window[b[32174]], window[b[32096]] = function () {
    sendApi(e1U0[b[32006]], b[32175], { 'game_pkg': e1U0[b[26479]] }, this[b[32176]][b[76]](this), e1G0U, e101);
}, window[b[32176]] = function (mac7_) {
    if (mac7_ && mac7_[b[1341]] === b[9791] && mac7_[b[12]]) {
        window[b[32174]] = mac7_[b[12]];
        for (var yv47_f in mac7_[b[12]]) {
            e1U0[yv47_f] = mac7_[b[12]][yv47_f];
        }
        window[b[32177]]();
    } else window[b[32055]](0xb, b[32178]), console[b[80]](b[32179] + mac7_[b[1341]]);
    window[b[32027]] = !![], window[b[31920]]();
}, window[b[32177]] = function () {
    var lgztr = e1U0[b[809]] || e1U0[b[26369]] && e1U0[b[26369]] > 0x0;
    if (lgztr) {
        var n9ksuq = e1U0[b[26370]],
            acm47 = n9ksuq && n9ksuq[b[14]] == 0x9;
        acm47 && (window[b[28933]] = n9ksuq);
        var rxhglt = e1U0[b[26371]],
            inquj3 = rxhglt && rxhglt[b[16]]('#')[b[14]] == 0x4;
        inquj3 && (window[b[12117]] = rxhglt);
    }
}, window[b[32180]] = function (c_oma7, b50d68, usnq39, knsu, gixl$t, xgr, us3n, n6ks9, d2w058, rhzfyl) {
    gixl$t = String(gixl$t);
    var vryzf = us3n,
        ltrhz = n6ks9;
    e1U0[b[32002]][gixl$t] = {
        'productid': gixl$t,
        'productname': vryzf,
        'productdesc': ltrhz,
        'roleid': c_oma7,
        'rolename': b50d68,
        'rolelevel': usnq39,
        'price': xgr,
        'callback': d2w058
    }, sendApi(e1U0[b[32010]], b[32181], {
        'game_pkg': e1U0[b[26479]],
        'server_id': e1U0[b[26473]][b[11489]],
        'server_name': e1U0[b[26473]][b[26478]],
        'level': usnq39,
        'uid': e1U0[b[26477]],
        'role_id': c_oma7,
        'role_name': b50d68,
        'product_id': gixl$t,
        'product_name': vryzf,
        'product_desc': ltrhz,
        'money': xgr,
        'partner_id': e1U0[b[12299]]
    }, toPayCallBack, e1G0U, e101);
}, window[b[32182]] = function (k96bsu) {
    if (k96bsu && (k96bsu[b[32183]] === 0xc8 || k96bsu[b[1341]] == b[9791])) {
        var a4_m = e1U0[b[32002]][String(k96bsu[b[32184]])];
        if (a4_m[b[361]]) a4_m[b[361]](k96bsu[b[32184]], k96bsu[b[32185]], -0x1);
        ejix$t[b[31835]]({
            'cpbill': k96bsu[b[32185]],
            'productid': k96bsu[b[32184]],
            'productname': a4_m[b[32186]],
            'productdesc': a4_m[b[32187]],
            'serverid': e1U0[b[26473]][b[11489]],
            'servername': e1U0[b[26473]][b[26478]],
            'roleid': a4_m[b[12303]],
            'rolename': a4_m[b[12304]],
            'rolelevel': a4_m[b[32188]],
            'price': a4_m[b[28324]],
            'extension': JSON[b[4243]]({ 'cp_order_id': k96bsu[b[32185]] })
        }, function (b685d0, xlg$h) {
            a4_m[b[361]] && b685d0 == 0x0 && a4_m[b[361]](k96bsu[b[32184]], k96bsu[b[32185]], b685d0);
            console[b[80]](JSON[b[4243]]({
                'type': b[32189],
                'status': b685d0,
                'data': k96bsu,
                'role_name': a4_m[b[12304]]
            }));
            if (b685d0 === 0x0) {} else {
                if (b685d0 === 0x1) {} else {
                    if (b685d0 === 0x2) {}
                }
            }
        });
    } else {
        var y_v4 = k96bsu ? b[32190] + k96bsu[b[32183]] + b[32191] + k96bsu[b[1341]] + b[32192] + k96bsu[b[80]] : b[32193];
        window[b[32055]](0xd, b[32194] + y_v4), alert(y_v4);
    }
}, window[b[32195]] = function () {}, window[b[32196]] = function (s3, pcam7, rtghz, d0, j3nui) {
    ejix$t[b[31867]](e1U0[b[26473]][b[11489]], e1U0[b[26473]][b[26478]] || e1U0[b[26473]][b[11489]], s3, pcam7, rtghz), sendApi(e1U0[b[32006]], b[32197], {
        'game_pkg': e1U0[b[26479]],
        'server_id': e1U0[b[26473]][b[11489]],
        'role_id': s3,
        'uid': e1U0[b[26477]],
        'role_name': pcam7,
        'role_type': d0,
        'level': rtghz
    });
}, window[b[32198]] = function (iqunj3, gjt$i, a7pocm, usjn3q, d825w, _acm, aop7cm, jx3g$i, n69su, pa) {
    e1U0[b[31883]] = iqunj3, e1U0[b[4381]] = gjt$i, e1U0[b[31884]] = a7pocm, ejix$t[b[31868]](e1U0[b[26473]][b[11489]], e1U0[b[26473]][b[26478]] || e1U0[b[26473]][b[11489]], iqunj3, gjt$i, a7pocm), sendApi(e1U0[b[32006]], b[32199], {
        'game_pkg': e1U0[b[26479]],
        'server_id': e1U0[b[26473]][b[11489]],
        'role_id': iqunj3,
        'uid': e1U0[b[26477]],
        'role_name': gjt$i,
        'role_type': usjn3q,
        'level': a7pocm,
        'evolution': d825w
    });
}, window[b[32200]] = function (kus, kq9u, ocema, meapoc, uk9nsq, hlg$xt, rfhl, rlght, qnus93, vz_f) {
    e1U0[b[31883]] = kus, e1U0[b[4381]] = kq9u, e1U0[b[31884]] = ocema, ejix$t[b[31869]](e1U0[b[26473]][b[11489]], e1U0[b[26473]][b[26478]] || e1U0[b[26473]][b[11489]], kus, kq9u, ocema), sendApi(e1U0[b[32006]], b[32199], {
        'game_pkg': e1U0[b[26479]],
        'server_id': e1U0[b[26473]][b[11489]],
        'role_id': kus,
        'uid': e1U0[b[26477]],
        'role_name': kq9u,
        'role_type': meapoc,
        'level': ocema,
        'evolution': uk9nsq
    });
}, window[b[32201]] = function (xhrglt) {}, window[b[32202]] = function (c4a7_, $txgji) {
    ejix$t[b[31818]](b[31818], { 'activity_id': $txgji }, function ($x3gj) {
        c4a7_ && c4a7_($x3gj);
    });
}, window[b[24499]] = function () {
    ejix$t[b[24499]]();
}, window[b[32203]] = function () {
    ejix$t[b[24378]]();
}, window[b[32204]] = function (fvhryz, n3iju, xg$til, d5bk0, iq3j$, k9sbu6, mcpoa7, $qij3x) {
    $qij3x = $qij3x || e1U0[b[26473]][b[11489]], sendApi(e1U0[b[32006]], b[32205], {
        'phone': fvhryz,
        'role_id': n3iju,
        'uid': e1U0[b[26477]],
        'game_pkg': e1U0[b[26479]],
        'partner_id': e1U0[b[12299]],
        'server_id': $qij3x
    }, mcpoa7, 0x2, null, function () {
        return !![];
    });
}, window[b[10804]] = function (lyhtz) {
    window[b[31983]] = lyhtz, window[b[31983]] && window[b[31982]] && (console[b[80]](b[31984] + window[b[31982]][b[847]]), window[b[31983]](window[b[31982]]), window[b[31982]] = null);
}, window[b[32206]] = function (zlhy, gxli$, yz_vf, gxhrlt) {
    window[b[24]](b[32207], {
        'game_pkg': window[b[31882]][b[26479]],
        'role_id': gxli$,
        'server_id': yz_vf
    }, gxhrlt);
}, window[b[32208]] = function (flyhzr, g$jxi, vzrf4) {
    function h$xlgt(xijg$) {
        var fa4v7_ = [],
            $xth = [],
            gj$ti = vzrf4 || window[b[591]][b[32209]];
        for (var m47_c in gj$ti) {
            var peaocm = Number(m47_c);
            (!flyhzr || !flyhzr[b[14]] || flyhzr[b[122]](peaocm) != -0x1) && ($xth[b[31]](gj$ti[m47_c]), fa4v7_[b[31]]([peaocm, 0x3]));
        }
        window[b[31897]](window[b[31898]], b[32210]) >= 0x0 ? (console[b[515]](b[32211]), ejix$t[b[31864]] && ejix$t[b[31864]]($xth, function (us3n9q) {
            console[b[515]](b[32212]), console[b[515]](us3n9q);
            if (us3n9q && us3n9q[b[26677]] == b[32213]) for (var b96dk0 in gj$ti) {
                if (us3n9q[gj$ti[b96dk0]] == b[32214]) {
                    var b09s6 = Number(b96dk0);
                    for (var fyzv4 = 0x0; fyzv4 < fa4v7_[b[14]]; fyzv4++) {
                        if (fa4v7_[fyzv4][0x0] == b09s6) {
                            fa4v7_[fyzv4][0x1] = 0x1;
                            break;
                        }
                    }
                }
            }
            window[b[31897]](window[b[31898]], b[32215]) >= 0x0 ? wx[b[32216]]({
                'withSubscriptions': !![],
                'success': function (lyzfr) {
                    var _47mc = lyzfr[b[32217]][b[32218]];
                    if (_47mc) {
                        console[b[515]](b[32219]), console[b[515]](_47mc);
                        for (var $j3n in gj$ti) {
                            if (_47mc[gj$ti[$j3n]] == b[32214]) {
                                var $hxgl = Number($j3n);
                                for (var db8560 = 0x0; db8560 < fa4v7_[b[14]]; db8560++) {
                                    if (fa4v7_[db8560][0x0] == $hxgl) {
                                        fa4v7_[db8560][0x1] = 0x2;
                                        break;
                                    }
                                }
                            }
                        }
                        console[b[515]](fa4v7_), g$jxi && g$jxi(fa4v7_);
                    } else console[b[515]](b[32220]), console[b[515]](lyzfr), console[b[515]](fa4v7_), g$jxi && g$jxi(fa4v7_);
                },
                'fail': function () {
                    console[b[515]](b[32221]), console[b[515]](fa4v7_), g$jxi && g$jxi(fa4v7_);
                }
            }) : (console[b[515]](b[32222] + window[b[31898]]), console[b[515]](fa4v7_), g$jxi && g$jxi(fa4v7_));
        })) : (console[b[515]](b[32223] + window[b[31898]]), console[b[515]](fa4v7_), g$jxi && g$jxi(fa4v7_)), wx[b[32224]](h$xlgt);
    }
    wx[b[32225]](h$xlgt);
}, window[b[32226]] = {
    'isSuccess': ![],
    'level': b[32227],
    'isCharging': ![]
}, window[b[13451]] = function (o7apc) {
    wx[b[31974]]({
        'success': function (rtyzlh) {
            var m74a_c = window[b[32226]];
            m74a_c[b[32228]] = !![], m74a_c[b[4357]] = Number(rtyzlh[b[4357]])[b[3974]](0x0), m74a_c[b[31977]] = rtyzlh[b[31977]], o7apc && o7apc(m74a_c[b[32228]], m74a_c[b[4357]], m74a_c[b[31977]]);
        },
        'fail': function (snu3jq) {
            console[b[515]](b[32229], snu3jq[b[26677]]);
            var sjunq3 = window[b[32226]];
            o7apc && o7apc(sjunq3[b[32228]], sjunq3[b[4357]], sjunq3[b[31977]]);
        }
    });
}, window[b[11870]] = function (ksb609) {
    wx[b[11870]]({
        'success': function (_4f7y) {
            ksb609 && ksb609(!![], _4f7y);
        },
        'fail': function (r4yvf) {
            ksb609 && ksb609(![], r4yvf);
        }
    });
}, window[b[11872]] = function (lyfhz) {
    if (lyfhz) wx[b[11872]](lyfhz);
}, window[b[26150]] = function (xq$i3) {
    wx[b[26150]](xq$i3);
}, window[b[24]] = function (b0685, s96kb0, lfryz, igj$3, kb69su, i3jqn$, dk5, snuj3) {
    if (igj$3 == undefined) igj$3 = 0x1;
    wx[b[510]]({
        'url': b0685,
        'method': dk5 || b[26353],
        'responseType': b[4160],
        'data': s96kb0,
        'header': { 'content-type': snuj3 || b[32068] },
        'success': function (unjs) {
            DEBUG && console[b[515]](b[32230], b0685, info, unjs);
            if (unjs && unjs[b[26747]] == 0xc8) {
                var nji$q3 = unjs[b[12]];
                !i3jqn$ || i3jqn$(nji$q3) ? lfryz && lfryz(nji$q3) : window[b[32231]](b0685, s96kb0, lfryz, igj$3, kb69su, i3jqn$, unjs);
            } else window[b[32231]](b0685, s96kb0, lfryz, igj$3, kb69su, i3jqn$, unjs);
        },
        'fail': function (peo) {
            DEBUG && console[b[515]](b[32232], b0685, info, peo), window[b[32231]](b0685, s96kb0, lfryz, igj$3, kb69su, i3jqn$, peo);
        },
        'complete': function () {}
    });
}, window[b[32231]] = function (u6kn9, ji3, w8d5, u6bsk9, kd065, kbd09, j3q$in) {
    u6bsk9 - 0x1 > 0x0 ? setTimeout(function () {
        window[b[24]](u6kn9, ji3, w8d5, u6bsk9 - 0x1, kd065, kbd09);
    }, 0x3e8) : kd065 && kd065(JSON[b[4243]]({
        'url': u6kn9,
        'response': j3q$in
    }));
}, window[b[32233]] = function (n6s9u, rltgh, uj3ns, hrfzyv, t$xl, sn3jq, ocmpa7) {
    !uj3ns && (uj3ns = {});
    var jq$ix3 = Math[b[127]](Date[b[85]]() / 0x3e8);
    uj3ns[b[922]] = jq$ix3, uj3ns[b[32234]] = rltgh;
    var m4 = Object[b[279]](uj3ns)[b[1154]](),
        b0dk69 = '',
        unk6s = '';
    for (var _mc74a = 0x0; _mc74a < m4[b[14]]; _mc74a++) {
        b0dk69 = b0dk69 + (_mc74a == 0x0 ? '' : '&') + m4[_mc74a] + uj3ns[m4[_mc74a]], unk6s = unk6s + (_mc74a == 0x0 ? '' : '&') + m4[_mc74a] + '=' + encodeURIComponent(uj3ns[m4[_mc74a]]);
    }
    b0dk69 = b0dk69 + e1U0[b[32012]];
    var wd2508 = b[32235] + md5(b0dk69);
    send(n6s9u + '?' + unk6s + (unk6s == '' ? '' : '&') + wd2508, null, hrfzyv, t$xl, sn3jq, ocmpa7 || function (x$gh) {
        return x$gh[b[1341]] == b[9791];
    }, null, b[31807]);
}, window[b[32236]] = function (itjg, rlyfz) {
    var glh$tx = 0x0;
    e1U0[b[26473]] && (glh$tx = e1U0[b[26473]][b[11489]]), sendApi(e1U0[b[32008]], b[32237], {
        'partnerId': e1U0[b[12299]],
        'gamePkg': e1U0[b[26479]],
        'logTime': Math[b[127]](Date[b[85]]() / 0x3e8),
        'platformUid': e1U0[b[26480]],
        'type': itjg,
        'serverId': glh$tx
    }, null, 0x2, null, function () {
        return !![];
    });
}, window[b[32238]] = function (uqjns3) {
    sendApi(e1U0[b[32006]], b[32239], {
        'partner_id': e1U0[b[12299]],
        'uid': e1U0[b[26477]],
        'version': e1U0[b[5070]],
        'game_pkg': e1U0[b[26479]],
        'device': e1U0[b[26481]]
    }, e1U0G1, e1G0U, e101);
}, window[b[32240]] = function (ni$q) {
    if (ni$q && ni$q[b[1341]] === b[9791] && ni$q[b[12]]) {
        ni$q[b[12]][b[5270]]({
            'id': -0x2,
            'name': b[32241]
        }), ni$q[b[12]][b[5270]]({
            'id': -0x1,
            'name': b[32242]
        }), e1U0[b[32243]] = ni$q[b[12]];
        if (window[b[12481]]) window[b[12481]][b[32244]]();
    } else {
        e1U0[b[32245]] = ![];
        var iqjn3u = ni$q ? ni$q[b[1341]] : '';
        window[b[32055]](0x7, b[32246] + iqjn3u), window[b[32034]](b[32247] + iqjn3u);
    }
}, window[b[32248]] = function (yltzh) {
    sendApi(e1U0[b[32006]], b[32249], {
        'partner_id': e1U0[b[12299]],
        'uid': e1U0[b[26477]],
        'version': e1U0[b[5070]],
        'game_pkg': e1U0[b[26479]],
        'device': e1U0[b[26481]]
    }, e11UG, e1G0U, e101);
}, window[b[32250]] = function ($xq3j) {
    e1U0[b[32251]] = ![];
    if ($xq3j && $xq3j[b[1341]] === b[9791] && $xq3j[b[12]]) {
        for (var tlzrgh = 0x0; tlzrgh < $xq3j[b[12]][b[14]]; tlzrgh++) {
            $xq3j[b[12]][tlzrgh][b[113]] = e1UG1($xq3j[b[12]][tlzrgh]);
        }
        e1U0[b[32015]][-0x1] = window[b[32252]]($xq3j[b[12]]), window[b[12481]][b[32253]](-0x1);
    } else {
        var xhrlt = $xq3j ? $xq3j[b[1341]] : '';
        window[b[32055]](0x8, b[32254] + xhrlt), window[b[32034]](b[32255] + xhrlt);
    }
}, window[b[32256]] = function (vfz_4y) {
    sendApi(e1U0[b[32006]], b[32249], {
        'partner_id': e1U0[b[12299]],
        'uid': e1U0[b[26477]],
        'version': e1U0[b[5070]],
        'game_pkg': e1U0[b[26479]],
        'device': e1U0[b[26481]]
    }, vfz_4y, e1G0U, e101);
}, window[b[32257]] = function (w02d5, f4vr) {
    sendApi(e1U0[b[32006]], b[32258], {
        'partner_id': e1U0[b[12299]],
        'uid': e1U0[b[26477]],
        'version': e1U0[b[5070]],
        'game_pkg': e1U0[b[26479]],
        'device': e1U0[b[26481]],
        'server_group_id': f4vr
    }, e1GU1, e1G0U, e101);
}, window[b[32259]] = function (r4fzyv) {
    e1U0[b[32251]] = ![];
    if (r4fzyv && r4fzyv[b[1341]] === b[9791] && r4fzyv[b[12]] && r4fzyv[b[12]][b[12]]) {
        var hzfyv = r4fzyv[b[12]][b[32260]],
            jnqi3$ = [];
        for (var usnq93 = 0x0; usnq93 < r4fzyv[b[12]][b[12]][b[14]]; usnq93++) {
            r4fzyv[b[12]][b[12]][usnq93][b[113]] = e1UG1(r4fzyv[b[12]][b[12]][usnq93]), (jnqi3$[b[14]] == 0x0 || r4fzyv[b[12]][b[12]][usnq93][b[113]] != 0x0) && (jnqi3$[jnqi3$[b[14]]] = r4fzyv[b[12]][b[12]][usnq93]);
        }
        e1U0[b[32015]][hzfyv] = window[b[32252]](jnqi3$), window[b[12481]][b[32253]](hzfyv);
    } else {
        var qn3i$j = r4fzyv ? r4fzyv[b[1341]] : '';
        window[b[32055]](0x9, b[32261] + qn3i$j), window[b[32034]](b[32262] + qn3i$j);
    }
}, window[b[32263]] = function (ilxtg$) {
    sendApi(e1U0[b[32006]], b[32264], {
        'partner_id': e1U0[b[12299]],
        'uid': e1U0[b[26477]],
        'version': e1U0[b[5070]],
        'game_pkg': e1U0[b[26479]],
        'device': e1U0[b[26481]]
    }, reqServerRecommendCallBack, e1G0U, e101);
}, window[b[32265]] = function (bd0685) {
    e1U0[b[32251]] = ![];
    if (bd0685 && bd0685[b[1341]] === b[9791] && bd0685[b[12]]) {
        for (var amc7_ = 0x0; amc7_ < bd0685[b[12]][b[14]]; amc7_++) {
            bd0685[b[12]][amc7_][b[113]] = e1UG1(bd0685[b[12]][amc7_]);
        }
        e1U0[b[32015]][-0x2] = window[b[32252]](bd0685[b[12]]), window[b[12481]][b[32253]](-0x2);
    } else {
        var gx3j = bd0685 ? bd0685[b[1341]] : '';
        window[b[32055]](0xa, b[32266] + gx3j), alert(b[32267] + gx3j);
    }
}, window[b[32252]] = function (b50w8d) {
    return b50w8d;
}, window[b[32268]] = function (grlzh, _v4af) {
    grlzh = grlzh || e1U0[b[26473]][b[11489]], sendApi(e1U0[b[32006]], b[32269], {
        'type': '4',
        'game_pkg': e1U0[b[26479]],
        'server_id': grlzh
    }, _v4af);
}, window[b[32270]] = function (_ocm7a, ns9ku, ghxtrl, w05b) {
    ghxtrl = ghxtrl || e1U0[b[26473]][b[11489]], sendApi(e1U0[b[32006]], b[32271], {
        'type': _ocm7a,
        'game_pkg': ns9ku,
        'server_id': ghxtrl
    }, w05b);
}, window[b[32272]] = function (itg$jx, q9u) {
    sendApi(e1U0[b[32006]], b[32273], { 'game_pkg': itg$jx }, q9u);
}, window[b[32274]] = function (hzrlty) {
    if (hzrlty) {
        if (hzrlty[b[113]] == 0x1) {
            if (hzrlty[b[32275]] == 0x3) return 0x3;else return hzrlty[b[32275]] == 0x1 ? 0x2 : 0x1;
        } else return hzrlty[b[113]] == 0x0 ? 0x0 : -0x1;
    }
    return -0x1;
}, window[b[32276]] = function (_cm47, d5bw08) {
    var j$gx3 = window[b[32152]][b[32154]] == 0x1;
    if (j$gx3) {
        var jinqu3 = window[b[32152]][b[32161]],
            j$gx3 = window[b[32152]][b[32154]] == 0x1;
        window[b[31894]][b[164]][b[32162]](b[32163], jinqu3, b[31816]);
        return;
    }
    e1U0[b[32277]] = {
        'step': _cm47,
        'server_id': d5bw08
    };
    var wd285 = this;
    e11UG0({ 'title': b[32278] }), sendApi(e1U0[b[32006]], b[32279], {
        'partner_id': e1U0[b[12299]],
        'uid': e1U0[b[26477]],
        'game_pkg': e1U0[b[26479]],
        'server_id': d5bw08,
        'platform': e1U0[b[26440]],
        'platform_uid': e1U0[b[26480]],
        'check_login_time': e1U0[b[32124]],
        'check_login_sign': e1U0[b[32123]],
        'version_name': e1U0[b[32084]]
    }, e101UG, e1G0U, e101, function (zv4fry) {
        return zv4fry[b[1341]] == b[9791] || zv4fry[b[80]] == b[32280] || zv4fry[b[80]] == b[32281];
    });
}, window[b[32282]] = function ($3jgi) {
    var ks9u6 = this;
    if ($3jgi && $3jgi[b[1341]] === b[9791] && $3jgi[b[12]]) {
        var bk5d0 = e1U0[b[26473]];
        bk5d0[b[32283]] = e1U0[b[32016]], bk5d0[b[11472]] = String($3jgi[b[12]][b[32284]]), bk5d0[b[26442]] = parseInt($3jgi[b[12]][b[922]]);
        if ($3jgi[b[12]][b[26441]]) bk5d0[b[26441]] = parseInt($3jgi[b[12]][b[26441]]);else bk5d0[b[26441]] = parseInt($3jgi[b[12]][b[11489]]);
        bk5d0[b[32285]] = 0x0, bk5d0[b[4257]] = e1U0[b[32172]], bk5d0[b[32286]] = $3jgi[b[12]][b[32287]], bk5d0[b[32288]] = $3jgi[b[12]][b[32288]];
        if ($3jgi[b[12]][b[26445]]) bk5d0[b[26445]] = parseInt($3jgi[b[12]][b[26445]]);
        console[b[515]](b[32289] + JSON[b[4243]](bk5d0[b[32288]])), e1U0[b[695]] == 0x1 && bk5d0[b[32288]] && bk5d0[b[32288]][b[32290]] == 0x1 && (e1U0[b[32291]] = 0x1, window[b[31894]][b[164]][b[32292]]()), e10G1U();
    } else {
        if (e1U0[b[32277]][b[6865]] >= 0x3) {
            var jiu = $3jgi ? $3jgi[b[1341]] : '';
            window[b[32055]](0xc, b[32293] + jiu), e101(JSON[b[4243]]($3jgi)), window[b[32034]](b[32294] + jiu);
        } else sendApi(e1U0[b[32006]], b[32102], {
            'platform': e1U0[b[32004]],
            'partner_id': e1U0[b[12299]],
            'token': e1U0[b[32100]],
            'game_pkg': e1U0[b[26479]],
            'deviceId': e1U0[b[26481]],
            'scene': b[32103] + e1U0[b[32014]]
        }, function (ksn6) {
            if (!ksn6 || ksn6[b[1341]] != b[9791]) {
                window[b[32034]](b[32120] + ksn6 && ksn6[b[1341]]);
                return;
            }
            e1U0[b[32123]] = String(ksn6[b[11472]]), e1U0[b[32124]] = String(ksn6[b[922]]), setTimeout(function () {
                e101GU(e1U0[b[32277]][b[6865]] + 0x1, e1U0[b[32277]][b[11489]]);
            }, 0x5dc);
        }, e1G0U, e101, function (iqn3ju) {
            return iqn3ju[b[1341]] == b[9791] || iqn3ju[b[1341]] == b[26825];
        });
    }
}, window[b[32295]] = function () {
    ServerLoading[b[164]][b[32159]](e1U0[b[695]]), window[b[32023]] = !![], window[b[31920]]();
}, window[b[31919]] = function () {
    if (window[b[31918]] && window[b[31926]] && window[b[32024]] && window[b[32025]] && window[b[32026]] && window[b[32028]]) {
        if (!window[b[31354]][b[164]]) {
            console[b[515]](b[32296] + window[b[31354]][b[164]]);
            var yf4_v = wx[b[26136]](),
                yhzvfr = yf4_v[b[847]] ? yf4_v[b[847]] : 0x0,
                qknu9s = {
                'cdn': window[b[31882]][b[4257]],
                'spareCdn': window[b[31882]][b[26155]],
                'newRegister': window[b[31882]][b[695]],
                'wxPC': window[b[31882]][b[26159]],
                'wxIOS': window[b[31882]][b[1149]],
                'wxAndroid': window[b[31882]][b[11313]],
                'wxParam': {
                    'limitLoad': window[b[31882]][b[31965]],
                    'benchmarkLevel': window[b[31882]][b[31966]],
                    'wxFrom': window[b[591]][b[31668]] == b[32297] ? 0x1 : 0x0,
                    'wxSDKVersion': window[b[31898]]
                },
                'configType': window[b[31882]][b[12015]],
                'exposeType': window[b[31882]][b[785]],
                'scene': yhzvfr
            };
            new window[b[31354]](qknu9s, window[b[31882]][b[107]], window[b[31999]]);
        }
    }
}, window[b[31920]] = function () {
    if (window[b[31918]] && window[b[31926]] && window[b[32024]] && window[b[32025]] && window[b[32026]] && window[b[32028]] && window[b[32023]] && window[b[32027]]) {
        e11U0G();
        if (!e10GU) {
            e10GU = !![];
            if (!window[b[31354]][b[164]]) window[b[31919]]();
            var njq3$i = 0x0,
                k96sb = wx[b[32298]]();
            k96sb && (window[b[31882]][b[31961]] && (njq3$i = k96sb[b[345]]), console[b[80]](b[32299] + k96sb[b[345]] + b[32300] + k96sb[b[1368]] + b[32301] + k96sb[b[1370]] + b[32302] + k96sb[b[1369]] + b[32303] + k96sb[b[195]] + b[32304] + k96sb[b[196]]));
            var tli$gx = {};
            for (const b8wd in e1U0[b[26473]]) {
                tli$gx[b8wd] = e1U0[b[26473]][b8wd];
            }
            var zhyrvf = {
                'channel': window[b[31882]][b[12308]],
                'account': window[b[31882]][b[26477]],
                'userId': window[b[31882]][b[12297]],
                'cdn': window[b[31882]][b[4257]],
                'data': window[b[31882]][b[12]],
                'package': window[b[31882]][b[26156]],
                'newRegister': window[b[31882]][b[695]],
                'pkgName': window[b[31882]][b[26479]],
                'partnerId': window[b[31882]][b[12299]],
                'platform_uid': window[b[31882]][b[26480]],
                'deviceId': window[b[31882]][b[26481]],
                'selectedServer': tli$gx,
                'configType': window[b[31882]][b[12015]],
                'exposeType': window[b[31882]][b[785]],
                'debugUsers': window[b[31882]][b[12434]],
                'wxMenuTop': njq3$i,
                'wxShield': window[b[31882]][b[809]],
                'wx_channel': window[b[31882]][b[26620]]
            };
            if (window[b[32174]]) for (var uksn9 in window[b[32174]]) {
                zhyrvf[uksn9] = window[b[32174]][uksn9];
            }
            window[b[31354]][b[164]][b[26495]](zhyrvf);
            if (e1U0[b[26473]] && e1U0[b[26473]][b[11489]]) localStorage[b[518]](b[32126] + e1U0[b[26479]] + e1U0[b[26477]], e1U0[b[26473]][b[11489]]);
        }
    } else console[b[80]](b[32305] + window[b[31918]] + b[32306] + window[b[31926]] + b[32307] + window[b[32024]] + b[32308] + window[b[32025]] + b[32309] + window[b[32026]] + b[32310] + window[b[32028]] + b[32311] + window[b[32023]] + b[32312] + window[b[32027]]);
}, window[b[32313]] = function (kb9su) {
    if (!window[b[12148]]) {
        console[b[141]](b[32314]);
        return;
    }
    var unksq = kb9su[b[372]];
    unksq == 0x1 ? window[b[12148]][b[67]](0x2327, kb9su) : window[b[12148]][b[83]](0x2327);
};