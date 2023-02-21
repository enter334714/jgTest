var b = wx.$e;
import eoa_m7 from '../eeeesdk/eeesdk.js';
window[b[27599]] = { 'wxVersion': window[b[1082]][b[35058]] }, window[b[35172]] = ![], window[b[35173]] = 0x1, window[b[35174]] = 0x1, window[b[35175]] = !![], window[b[35176]] = !![], window[b[35177]] = '', window[b[35178]] = ![], window[b[5021]] = {
    'base_cdn': b[35179],
    'cdn': b[35179]
}, e1U0[b[35180]] = {}, e1U0[b[492]] = '0', e1U0[b[5848]] = window[b[27599]][b[35181]], e1U0[b[35142]] = '', e1U0['os'] = '1', e1U0[b[35182]] = b[35183], e1U0[b[35184]] = b[35185], e1U0[b[35186]] = b[35187], e1U0[b[35188]] = b[35189], e1U0[b[35190]] = b[35191], e1U0[b[13265]] = '1', e1U0[b[27988]] = '', e1U0[b[27990]] = '', e1U0[b[35192]] = 0x0, e1U0[b[35193]] = {}, e1U0[b[35194]] = parseInt(e1U0[b[13265]]), e1U0[b[13274]] = e1U0[b[13265]], e1U0[b[27982]] = {}, e1U0[b[35068]] = b[35195], e1U0[b[35196]] = ![], e1U0[b[13412]] = b[35197], e1U0[b[27942]] = Date[b[616]](), e1U0[b[5020]] = b[35198], e1U0[b[1271]] = '_a', e1U0[b[28140]] = '', e1U0[b[35199]] = 0x2, e1U0[b[633]] = 0x7c1, e1U0[b[35181]] = window[b[27599]][b[35181]], e1U0[b[1293]] = ![], e1U0[b[1646]] = ![], e1U0[b[12209]] = ![], e1U0[b[27633]] = ![], window[b[35200]] = 0x5, window[b[35201]] = ![], window[b[35098]] = ![], window[b[35106]] = ![], window[b[35202]] = ![], window[b[35203]] = ![], window[b[35204]] = ![], window[b[35205]] = ![], window[b[35206]] = ![], window[b[35207]] = ![], window[b[35208]] = null, window[b[1174]] = function (db5608) {
    console[b[456]](b[1174], db5608), wx[b[5361]]({}), wx[b[35086]]({
        'title': b[6599],
        'content': db5608,
        'success'(nujiq) {
            if (nujiq[b[35209]]) console[b[456]](b[35210]);else nujiq[b[1078]] && console[b[456]](b[35211]);
        }
    });
}, window[b[35212]] = function (x$hl) {
    console[b[456]](b[35213], x$hl), e11U0G(), wx[b[35086]]({
        'title': b[6599],
        'content': x$hl,
        'confirmText': b[35214],
        'cancelText': b[20312],
        'success'(sn39) {
            if (sn39[b[35209]]) window[b[35112]]();else sn39[b[1078]] && (console[b[456]](b[35215]), wx[b[27630]]({}));
        }
    });
}, window[b[35216]] = function (_z) {
    console[b[456]](b[35216], _z), wx[b[35086]]({
        'title': b[6599],
        'content': _z,
        'confirmText': b[28124],
        'showCancel': ![],
        'complete'(d06kb5) {
            console[b[456]](b[35215]), wx[b[27630]]({});
        }
    });
}, window[b[35217]] = ![], window[b[35218]] = function (tzrgl) {
    window[b[35217]] = !![], wx[b[5360]](tzrgl);
}, window[b[35219]] = function () {
    window[b[35217]] && (window[b[35217]] = ![], wx[b[5361]]({}));
}, window[b[35220]] = function (j3x$q) {
    window[b[35074]][b[679]][b[35220]](j3x$q);
}, window[b[13281]] = function (rhtyz, ns6k9) {
    eoa_m7[b[13281]](rhtyz, function (zlh) {
        zlh && zlh[b[501]] ? zlh[b[501]][b[1885]] == 0x1 ? ns6k9(!![]) : (ns6k9(![]), console[b[611]](b[35221] + zlh[b[501]][b[35222]])) : console[b[456]](b[13281], zlh);
    });
}, window[b[35223]] = function (xi$q) {
    console[b[456]](b[35224], xi$q);
}, window[b[35225]] = function (xji$) {}, window[b[35226]] = function (hxg$t, zv4_yf, lhtyr) {}, window[b[35227]] = function (knu) {
    console[b[456]](b[35228], knu), window[b[35074]][b[679]][b[35229]](), window[b[35074]][b[679]][b[35230]](), window[b[35074]][b[679]][b[35231]](), window[b[35232]]();
}, window[b[35233]] = function (rglzth) {
    window[b[35234]](0xe, b[35235] + rglzth), window[b[35212]](b[35236]);
    var opam7 = {
        'id': window[b[5021]][b[35063]],
        'role': window[b[5021]][b[5150]],
        'level': window[b[5021]][b[35064]],
        'account': window[b[5021]][b[27986]],
        'version': window[b[5021]][b[633]],
        'cdn': window[b[5021]][b[5018]],
        'pkgName': window[b[5021]][b[27988]],
        'gamever': window[b[1082]][b[35058]],
        'serverid': window[b[5021]][b[27982]] ? window[b[5021]][b[27982]][b[12381]] : 0x0,
        'systemInfo': window[b[35065]],
        'error': b[35237],
        'stack': rglzth ? rglzth : b[35236]
    },
        trhz = JSON[b[5004]](opam7);
    console[b[499]](b[35238] + trhz), window[b[35068]](trhz);
}, window[b[35234]] = function (xqj$3i, zrlthy) {
    sendApi(e1U0[b[35186]], b[35239], {
        'game_pkg': e1U0[b[27988]],
        'partner_id': e1U0[b[13265]],
        'server_id': e1U0[b[27982]] && e1U0[b[27982]][b[12381]] > 0x0 ? e1U0[b[27982]][b[12381]] : 0x0,
        'uid': e1U0[b[27986]] > 0x0 ? e1U0[b[27986]] : 0x0,
        'type': xqj$3i,
        'info': zrlthy
    });
}, window[b[35240]] = function (frvhy) {
    var ltyhrz = JSON[b[455]](frvhy);
    ltyhrz[b[35241]] = window[b[1082]][b[35058]], ltyhrz[b[35242]] = window[b[5021]][b[27982]] ? window[b[5021]][b[27982]][b[12381]] : 0x0, ltyhrz[b[35065]] = window[b[35065]];
    var gthzrl = JSON[b[5004]](ltyhrz);
    console[b[499]](b[35243] + gthzrl), window[b[35068]](gthzrl);
}, window[b[35113]] = function (zhltgr, oc7ma) {
    var gtrhl = {
        'id': window[b[5021]][b[35063]],
        'role': window[b[5021]][b[5150]],
        'level': window[b[5021]][b[35064]],
        'account': window[b[5021]][b[27986]],
        'version': window[b[5021]][b[633]],
        'cdn': window[b[5021]][b[5018]],
        'pkgName': window[b[5021]][b[27988]],
        'gamever': window[b[1082]][b[35058]],
        'serverid': window[b[5021]][b[27982]] ? window[b[5021]][b[27982]][b[12381]] : 0x0,
        'systemInfo': window[b[35065]],
        'error': zhltgr,
        'stack': oc7ma
    },
        hrgtz = JSON[b[5004]](gtrhl);
    console[b[513]](b[35244] + hrgtz), window[b[35068]](hrgtz);
}, window[b[35068]] = function (a_mc74) {
    if (window[b[5021]][b[35143]] == b[35245]) return;
    var va_f = e1U0[b[35068]] + b[35246] + e1U0[b[27986]];
    wx[b[1006]]({
        'url': va_f,
        'method': b[34987],
        'data': a_mc74,
        'header': {
            'content-type': b[35247],
            'cache-control': b[35248]
        },
        'success': function (m4a7) {
            DEBUG && console[b[456]](b[35249], va_f, a_mc74, m4a7);
        },
        'fail': function (oc7a_m) {
            DEBUG && console[b[456]](b[35249], va_f, a_mc74, oc7a_m);
        },
        'complete': function () {}
    });
}, window[b[35250]] = function () {
    function nus3q9() {
        return ((0x1 + Math[b[648]]()) * 0x10000 | 0x0)[b[341]](0x10)[b[462]](0x1);
    }
    return nus3q9() + nus3q9() + '-' + nus3q9() + '-' + nus3q9() + '-' + nus3q9() + '+' + nus3q9() + nus3q9() + nus3q9();
}, window[b[35112]] = function () {
    console[b[456]](b[35251]);
    var tyhrzl = eoa_m7[b[33498]]();
    e1U0[b[13274]] = tyhrzl[b[35252]], e1U0[b[35194]] = tyhrzl[b[35252]], e1U0[b[13265]] = tyhrzl[b[35252]], e1U0[b[27988]] = tyhrzl[b[35253]];
    var f4vy_ = { 'game_ver': e1U0[b[5848]] };
    e1U0[b[27990]] = this[b[35250]](), e11UG0({ 'title': b[35254] }), eoa_m7[b[896]](f4vy_, this[b[35255]][b[311]](this));
}, window[b[35255]] = function (su6kb9) {
    var mac_47 = su6kb9[b[35256]];
    sdkInitRes = su6kb9, console[b[456]](b[35257] + mac_47 + b[35258] + (mac_47 == 0x1) + b[35259] + su6kb9[b[35058]] + b[35260] + window[b[27599]][b[35181]] + b[35261] + su6kb9[b[5022]]);
    if (!su6kb9[b[35058]] || window[b[35077]](window[b[27599]][b[35181]], su6kb9[b[35058]]) < 0x0) console[b[456]](b[35262]), e1U0[b[35184]] = b[35263], e1U0[b[35186]] = b[35264], e1U0[b[35188]] = b[35265], e1U0[b[5018]] = b[35266], e1U0[b[27631]] = b[35267], e1U0[b[5022]] = su6kb9[b[5022]], e1U0[b[1293]] = ![];else window[b[35077]](window[b[27599]][b[35181]], su6kb9[b[35058]]) == 0x0 ? (console[b[456]](b[35268]), e1U0[b[35184]] = b[35185], e1U0[b[35186]] = b[35187], e1U0[b[35188]] = b[35189], e1U0[b[5018]] = b[35269], e1U0[b[27631]] = b[35267], e1U0[b[5022]] = b[35270], e1U0[b[1293]] = !![]) : (console[b[456]](b[35271]), e1U0[b[35184]] = b[35185], e1U0[b[35186]] = b[35187], e1U0[b[35188]] = b[35189], e1U0[b[5018]] = b[35269], e1U0[b[27631]] = b[35267], e1U0[b[5022]] = b[35270], e1U0[b[1293]] = ![]);
    e1U0[b[35192]] = config[b[336]] ? config[b[336]] : 0x0, this[b[35272]](), this[b[35273]](), window[b[35274]] = 0x5, e11UG0({ 'title': b[35275] }), eoa_m7[b[34979]](this[b[35276]][b[311]](this));
}, window[b[35274]] = 0x5, window[b[35276]] = function (x3$ig, jxq$3) {
    if (x3$ig == 0x0 && jxq$3 && jxq$3[b[487]]) {
        e1U0[b[35277]] = jxq$3[b[487]], e1U0[b[28138]] = jxq$3[b[28138]], e1U0[b[28133]] = jxq$3[b[28133]], e1U0[b[28139]] = jxq$3[b[28139]], e1U0[b[28132]] = jxq$3[b[28132]];
        var tjig = this;
        e11UG0({ 'title': b[35278] }), sendApi(e1U0[b[35184]], b[35279], {
            'platform': e1U0[b[35182]],
            'partner_id': e1U0[b[13265]],
            'token': jxq$3[b[487]],
            'game_pkg': e1U0[b[27988]],
            'deviceId': e1U0[b[27990]],
            'scene': b[35280] + e1U0[b[35192]]
        }, this[b[35281]][b[311]](this), e1G0U, e101);
    } else jxq$3 && jxq$3[b[28195]] && window[b[35274]] > 0x0 && (jxq$3[b[28195]][b[404]](b[35282]) != -0x1 || jxq$3[b[28195]][b[404]](b[35283]) != -0x1 || jxq$3[b[28195]][b[404]](b[35284]) != -0x1 || jxq$3[b[28195]][b[404]](b[35285]) != -0x1 || jxq$3[b[28195]][b[404]](b[35286]) != -0x1 || jxq$3[b[28195]][b[404]](b[35287]) != -0x1) ? (window[b[35274]]--, eoa_m7[b[34979]](this[b[35276]][b[311]](this))) : (window[b[35234]](0x1, b[35288] + x3$ig + b[35289] + (jxq$3 ? jxq$3[b[28195]] : '')), window[b[35113]](b[35290], JSON[b[5004]]({
        'status': x3$ig,
        'data': jxq$3
    })), window[b[35212]](b[35291] + (jxq$3 && jxq$3[b[28195]] ? '，' + jxq$3[b[28195]] : '')));
}, window[b[35281]] = function (kd96) {
    if (!kd96) {
        window[b[35234]](0x2, b[35292]), window[b[35113]](b[35293], b[35294]), window[b[35212]](b[35295]);
        return;
    }
    if (kd96[b[1885]] != b[10692]) {
        window[b[35234]](0x2, b[35296] + kd96[b[1885]]), window[b[35113]](b[35293], JSON[b[5004]](kd96)), window[b[35212]](b[35297] + kd96[b[1885]]);
        return;
    }
    if (kd96[b[35298]] == 0x1) {
        window[b[35212]](b[35299]);
        return;
    }
    e1U0[b[13263]] = String(kd96[b[27986]]), e1U0[b[27986]] = String(kd96[b[27986]]), e1U0[b[27940]] = String(kd96[b[27940]]), e1U0[b[13274]] = String(kd96[b[27940]]), e1U0[b[27989]] = String(kd96[b[27989]]), e1U0[b[35300]] = String(kd96[b[12364]]), e1U0[b[35301]] = String(kd96[b[1423]]), e1U0[b[12364]] = '';
    var nks96u = this;
    e11UG0({ 'title': b[35302] });
    var zyhlrt = localStorage[b[1009]](b[35303] + e1U0[b[27988]] + e1U0[b[27986]]);
    if (zyhlrt && zyhlrt != '') {
        var sun9qk = Number(zyhlrt);
        nks96u[b[35304]](sun9qk);
    } else nks96u[b[35305]]();
}, window[b[35305]] = function () {
    var $xgjt = this;
    sendApi(e1U0[b[35184]], b[35306], {
        'partner_id': e1U0[b[13265]],
        'uid': e1U0[b[27986]],
        'version': e1U0[b[5848]],
        'game_pkg': e1U0[b[27988]],
        'device': e1U0[b[27990]]
    }, $xgjt[b[35307]][b[311]]($xgjt), e1G0U, e101);
}, window[b[35307]] = function (fva7_4) {
    if (!fva7_4) {
        window[b[35234]](0x3, b[35308]), window[b[35212]](b[35308]);
        return;
    }
    if (fva7_4[b[1885]] != b[10692]) {
        window[b[35234]](0x3, b[35309] + fva7_4[b[1885]]), window[b[35212]](b[35309] + fva7_4[b[1885]]);
        return;
    }
    if (!fva7_4[b[501]] || fva7_4[b[501]][b[322]] == 0x0) {
        window[b[35234]](0x3, b[35310]), window[b[35212]](b[35311]);
        return;
    }
    this[b[35312]](fva7_4);
}, window[b[35304]] = function (ns9kq) {
    var rtyhz = this;
    sendApi(e1U0[b[35184]], b[35313], {
        'server_id': ns9kq,
        'time': Date[b[616]]() / 0x3e8
    }, rtyhz[b[35314]][b[311]](rtyhz), e1G0U, e101);
}, window[b[35314]] = function (acpmeo) {
    if (!acpmeo) {
        window[b[35234]](0x4, b[35315]), this[b[35305]]();
        return;
    }
    if (acpmeo[b[1885]] != b[10692]) {
        window[b[35234]](0x4, b[35316] + acpmeo[b[1885]]), this[b[35305]]();
        return;
    }
    if (!acpmeo[b[501]] || acpmeo[b[501]][b[322]] == 0x0) {
        window[b[35234]](0x4, b[35317]), this[b[35305]]();
        return;
    }
    this[b[35312]](acpmeo);
}, window[b[35312]] = function (_74vma) {
    e1U0[b[1185]] = _74vma[b[35318]] != undefined ? _74vma[b[35318]] : 0x0, e1U0[b[27982]] = {
        'server_id': String(_74vma[b[501]][0x0][b[12381]]),
        'server_name': String(_74vma[b[501]][0x0][b[27987]]),
        'entry_ip': _74vma[b[501]][0x0][b[28012]],
        'entry_port': parseInt(_74vma[b[501]][0x0][b[28013]]),
        'status': e1UG1(_74vma[b[501]][0x0]),
        'start_time': _74vma[b[501]][0x0][b[35319]],
        'maintain_time': _74vma[b[501]][0x0][b[35320]] ? _74vma[b[501]][0x0][b[35320]] : '',
        'is_recommend': _74vma[b[501]][0x0][b[35321]],
        'cdn': e1U0[b[5018]]
    }, this[b[35322]](), window[b[35074]] && window[b[35074]][b[679]][b[35323]] && window[b[35074]][b[679]][b[35323]](sdkInitRes[b[35324]], sdkInitRes[b[35325]], sdkInitRes[b[35326]], sdkInitRes[b[35327]], sdkInitRes[b[35328]]);
}, window[b[35329]] = null, window[b[35322]] = function () {
    var yfhl = this;
    eoa_m7[b[35052]](function (z4y) {
        console[b[456]](b[35330] + JSON[b[5004]](z4y)), youYiCofig = z4y;
        window[b[35329]][b[35331]] == 0x1 && (e1U0[b[1185]] = 0x0);
        if (e1U0[b[1185]] == 0x1) {
            var jg3ix = e1U0[b[27982]][b[638]];
            if (jg3ix === -0x1 || jg3ix === 0x0) {
                window[b[35234]](0xf, b[35332] + e1U0[b[27982]]['id'] + b[35333] + e1U0[b[27982]][b[638]]), window[b[35212]](jg3ix === -0x1 ? b[35334] : b[35335]);
                return;
            }
            e101GU(0x0, e1U0[b[27982]][b[12381]]), window[b[35074]][b[679]][b[35336]](e1U0[b[1185]]);
        } else window[b[35074]][b[679]][b[35337]](() => {
            var b6kus9 = window[b[35329]][b[35338]],
                _47fa = window[b[35329]][b[35331]] == 0x1;
            _47fa && window[b[35074]][b[679]][b[35339]](b[35340], b6kus9, b[34997]);
        }, yfhl), e11U0G();
        window[b[35206]] = !![], window[b[35341]](), window[b[35099]](), window[b[35100]]();
    });
}, window[b[35342]] = function () {
    eoa_m7[b[35053]](function (y7_4vf) {
        console[b[456]](b[35343] + JSON[b[5004]](y7_4vf));
    });
}, window[b[35272]] = function () {
    sendApi(e1U0[b[35184]], b[35344], {
        'game_pkg': e1U0[b[27988]],
        'version_name': e1U0[b[5022]]
    }, this[b[35345]][b[311]](this), e1G0U, e101);
}, window[b[35345]] = function (v4rzy) {
    if (!v4rzy) {
        window[b[35234]](0x5, b[35346]), window[b[35212]](b[35346]);
        return;
    }
    if (v4rzy[b[1885]] != b[10692]) {
        window[b[35234]](0x5, b[35347] + v4rzy[b[1885]]), window[b[35212]](b[35347] + v4rzy[b[1885]]);
        return;
    }
    if (!v4rzy[b[501]] || !v4rzy[b[501]][b[5848]]) {
        window[b[35234]](0x5, b[35348] + (v4rzy[b[501]] && v4rzy[b[501]][b[5848]])), window[b[35212]](b[35348] + (v4rzy[b[501]] && v4rzy[b[501]][b[5848]]));
        return;
    }
    v4rzy[b[501]][b[35349]] && v4rzy[b[501]][b[35349]][b[322]] > 0xa && (e1U0[b[35350]] = v4rzy[b[501]][b[35349]], e1U0[b[5018]] = v4rzy[b[501]][b[35349]]), v4rzy[b[501]][b[5848]] && (e1U0[b[633]] = v4rzy[b[501]][b[5848]]), console[b[611]](b[28135] + e1U0[b[633]] + b[35351] + e1U0[b[5022]]), window[b[35204]] = !![], window[b[35099]](), window[b[35100]]();
}, window[b[35352]], window[b[35273]] = function () {
    sendApi(e1U0[b[35184]], b[35353], { 'game_pkg': e1U0[b[27988]] }, this[b[35354]][b[311]](this), e1G0U, e101);
}, window[b[35354]] = function (ixjq3) {
    if (ixjq3 && ixjq3[b[1885]] === b[10692] && ixjq3[b[501]]) {
        window[b[35352]] = ixjq3[b[501]];
        for (var v74_a in ixjq3[b[501]]) {
            e1U0[v74_a] = ixjq3[b[501]][v74_a];
        }
    } else window[b[35234]](0xb, b[35355]), console[b[611]](b[35356] + ixjq3[b[1885]]);
    window[b[35205]] = !![], window[b[35341]](), window[b[35100]]();
}, window[b[35341]] = function () {
    if (!window[b[35206]] || !window[b[35205]]) return;
    var poem = e1U0[b[1185]] == 0x1,
        ig$xtj = e1U0[b[1293]],
        $xitg = e1U0[b[27867]] && e1U0[b[27867]] > 0x0;
    if (ig$xtj || poem && $xitg) {
        var q$ij3n = e1U0[b[27868]],
            nukq9s = q$ij3n && q$ij3n[b[322]] == 0x9;
        nukq9s && (window[b[30560]] = q$ij3n);
        var qjnu3i = e1U0[b[27869]],
            rzhfvy = qjnu3i && qjnu3i[b[444]]('#')[b[322]] == 0x4;
        rzhfvy && (window[b[30561]] = qjnu3i);
    }
}, window[b[35232]] = function () {
    window[b[30560]] = null, window[b[30561]] = null;
}, window[b[35357]] = function (yvf_z4, ijn$, p7oa, rf4yz, jq3ui, b8w50, $jq3ix, j$itx, ghxlr, fzy4_v) {
    jq3ui = String(jq3ui);
    var skqnu9 = $jq3ix,
        nkuq = j$itx;
    e1U0[b[35180]][jq3ui] = {
        'productid': jq3ui,
        'productname': skqnu9,
        'productdesc': nkuq,
        'roleid': yvf_z4,
        'rolename': ijn$,
        'rolelevel': p7oa,
        'price': b8w50,
        'callback': ghxlr
    }, sendApi(e1U0[b[35188]], b[35358], {
        'game_pkg': e1U0[b[27988]],
        'server_id': e1U0[b[27982]][b[12381]],
        'server_name': e1U0[b[27982]][b[27987]],
        'level': p7oa,
        'uid': e1U0[b[27986]],
        'role_id': yvf_z4,
        'role_name': ijn$,
        'product_id': jq3ui,
        'product_name': skqnu9,
        'product_desc': nkuq,
        'money': b8w50,
        'partner_id': e1U0[b[13265]]
    }, toPayCallBack, e1G0U, e101);
}, window[b[35359]] = function (b56d08) {
    if (b56d08 && (b56d08[b[35360]] === 0xc8 || b56d08[b[1885]] == b[10692])) {
        var qn$i3j = e1U0[b[35180]][String(b56d08[b[35361]])];
        if (qn$i3j[b[861]]) qn$i3j[b[861]](b56d08[b[35361]], b56d08[b[35362]], -0x1);
        eoa_m7[b[35016]]({
            'cpbill': b56d08[b[35362]],
            'productid': b56d08[b[35361]],
            'productname': qn$i3j[b[35363]],
            'productdesc': qn$i3j[b[35364]],
            'serverid': e1U0[b[27982]][b[12381]],
            'servername': e1U0[b[27982]][b[27987]],
            'roleid': qn$i3j[b[13269]],
            'rolename': qn$i3j[b[13270]],
            'rolelevel': qn$i3j[b[35365]],
            'price': qn$i3j[b[29959]],
            'extension': JSON[b[5004]]({ 'cp_order_id': b56d08[b[35362]] })
        }, function (mac7po, wd2805) {
            qn$i3j[b[861]] && mac7po == 0x0 && qn$i3j[b[861]](b56d08[b[35361]], b56d08[b[35362]], mac7po);
            console[b[611]](JSON[b[5004]]({
                'type': b[35366],
                'status': mac7po,
                'data': b56d08,
                'role_name': qn$i3j[b[13270]]
            }));
            if (mac7po === 0x0) {} else {
                if (mac7po === 0x1) {} else {
                    if (mac7po === 0x2) {}
                }
            }
        });
    } else {
        var g3j$ix = b56d08 ? b[35367] + b56d08[b[35360]] + b[35368] + b56d08[b[1885]] + b[35369] + b56d08[b[611]] : b[35370];
        window[b[35234]](0xd, b[35371] + g3j$ix), alert(g3j$ix);
    }
}, window[b[35372]] = function () {}, window[b[35373]] = function (n93suq, zlty, k560b, cm7_o, zhlfy) {
    eoa_m7[b[35048]](e1U0[b[27982]][b[12381]], e1U0[b[27982]][b[27987]] || e1U0[b[27982]][b[12381]], n93suq, zlty, k560b), sendApi(e1U0[b[35184]], b[35374], {
        'game_pkg': e1U0[b[27988]],
        'server_id': e1U0[b[27982]][b[12381]],
        'role_id': n93suq,
        'uid': e1U0[b[27986]],
        'role_name': zlty,
        'role_type': cm7_o,
        'level': k560b
    });
}, window[b[35375]] = function (lg$xit, usn3qj, m_v7a4, iqj$n, yzfrhv, d1285w, oapme, yrfzv, gh$xt, emacop) {
    e1U0[b[35063]] = lg$xit, e1U0[b[5150]] = usn3qj, e1U0[b[35064]] = m_v7a4, eoa_m7[b[35049]](e1U0[b[27982]][b[12381]], e1U0[b[27982]][b[27987]] || e1U0[b[27982]][b[12381]], lg$xit, usn3qj, m_v7a4), sendApi(e1U0[b[35184]], b[35376], {
        'game_pkg': e1U0[b[27988]],
        'server_id': e1U0[b[27982]][b[12381]],
        'role_id': lg$xit,
        'uid': e1U0[b[27986]],
        'role_name': usn3qj,
        'role_type': iqj$n,
        'level': m_v7a4,
        'evolution': yzfrhv
    });
}, window[b[35377]] = function (jqn$i, yfhlzr, jqns3u, oe, xi$tlg, d82w50, lt$i, c47a, b085wd, vrz4y) {
    e1U0[b[35063]] = jqn$i, e1U0[b[5150]] = yfhlzr, e1U0[b[35064]] = jqns3u, eoa_m7[b[35050]](e1U0[b[27982]][b[12381]], e1U0[b[27982]][b[27987]] || e1U0[b[27982]][b[12381]], jqn$i, yfhlzr, jqns3u), sendApi(e1U0[b[35184]], b[35376], {
        'game_pkg': e1U0[b[27988]],
        'server_id': e1U0[b[27982]][b[12381]],
        'role_id': jqn$i,
        'uid': e1U0[b[27986]],
        'role_name': yfhlzr,
        'role_type': oe,
        'level': jqns3u,
        'evolution': xi$tlg
    });
}, window[b[35378]] = function (lfhyzr) {}, window[b[35379]] = function (fv4a_, ijqu) {
    eoa_m7[b[34999]](b[34999], { 'activity_id': ijqu }, function (y4zvrf) {
        fv4a_ && fv4a_(y4zvrf);
    });
}, window[b[25791]] = function () {
    eoa_m7[b[25791]]();
}, window[b[35380]] = function () {
    eoa_m7[b[25667]]();
}, window[b[35381]] = function (ht$gl, txg$li, nuk69, ks6u9b, skbu96, htzrly, q9sn3, vaf47_) {
    vaf47_ = vaf47_ || e1U0[b[27982]][b[12381]], sendApi(e1U0[b[35184]], b[35382], {
        'phone': ht$gl,
        'role_id': txg$li,
        'uid': e1U0[b[27986]],
        'game_pkg': e1U0[b[27988]],
        'partner_id': e1U0[b[13265]],
        'server_id': vaf47_
    }, q9sn3, 0x2, null, function () {
        return !![];
    });
}, window[b[11701]] = function (_7a4fv) {
    window[b[35162]] = _7a4fv, window[b[35162]] && window[b[35161]] && (console[b[611]](b[35163] + window[b[35161]][b[1349]]), window[b[35162]](window[b[35161]]), window[b[35161]] = null);
}, window[b[35383]] = function (qs9u, gtxi, fv7_y, xt) {
    window[b[561]](b[35384], {
        'game_pkg': window[b[5021]][b[27988]],
        'role_id': gtxi,
        'server_id': fv7_y
    }, xt);
}, window[b[35385]] = function ($jqx, qxj3i, ks9b6) {
    function fvy4z_(zhyvrf) {
        var $jigx = [],
            a4_7m = [],
            tgzlhr = ks9b6 || window[b[1082]][b[35386]];
        for (var nui3qj in tgzlhr) {
            var jig3x = Number(nui3qj);
            (!$jqx || !$jqx[b[322]] || $jqx[b[404]](jig3x) != -0x1) && (a4_7m[b[344]](tgzlhr[nui3qj]), $jigx[b[344]]([jig3x, 0x3]));
        }
        window[b[35077]](window[b[35078]], b[35387]) >= 0x0 ? (console[b[456]](b[35388]), eoa_m7[b[35045]] && eoa_m7[b[35045]](a4_7m, function (d96k0b) {
            console[b[456]](b[35389]), console[b[456]](d96k0b);
            if (d96k0b && d96k0b[b[28195]] == b[35390]) for (var rtgx in tgzlhr) {
                if (d96k0b[tgzlhr[rtgx]] == b[35391]) {
                    var usjn3q = Number(rtgx);
                    for (var zhgltr = 0x0; zhgltr < $jigx[b[322]]; zhgltr++) {
                        if ($jigx[zhgltr][0x0] == usjn3q) {
                            $jigx[zhgltr][0x1] = 0x1;
                            break;
                        }
                    }
                }
            }
            window[b[35077]](window[b[35078]], b[35392]) >= 0x0 ? wx[b[35393]]({
                'withSubscriptions': !![],
                'success': function (paecom) {
                    var vf_7y = paecom[b[35394]][b[35395]];
                    if (vf_7y) {
                        console[b[456]](b[35396]), console[b[456]](vf_7y);
                        for (var z4_yf in tgzlhr) {
                            if (vf_7y[tgzlhr[z4_yf]] == b[35391]) {
                                var _a7mc4 = Number(z4_yf);
                                for (var apo7m = 0x0; apo7m < $jigx[b[322]]; apo7m++) {
                                    if ($jigx[apo7m][0x0] == _a7mc4) {
                                        $jigx[apo7m][0x1] = 0x2;
                                        break;
                                    }
                                }
                            }
                        }
                        console[b[456]]($jigx), qxj3i && qxj3i($jigx);
                    } else console[b[456]](b[35397]), console[b[456]](paecom), console[b[456]]($jigx), qxj3i && qxj3i($jigx);
                },
                'fail': function () {
                    console[b[456]](b[35398]), console[b[456]]($jigx), qxj3i && qxj3i($jigx);
                }
            }) : (console[b[456]](b[35399] + window[b[35078]]), console[b[456]]($jigx), qxj3i && qxj3i($jigx));
        })) : (console[b[456]](b[35400] + window[b[35078]]), console[b[456]]($jigx), qxj3i && qxj3i($jigx)), wx[b[35401]](fvy4z_);
    }
    wx[b[35402]](fvy4z_);
}, window[b[35403]] = {
    'isSuccess': ![],
    'level': b[31649],
    'isCharging': ![]
}, window[b[14593]] = function (acoem) {
    wx[b[35153]]({
        'success': function (o_mac) {
            var suq9 = window[b[35403]];
            suq9[b[35404]] = !![], suq9[b[5126]] = Number(o_mac[b[5126]])[b[4711]](0x0), suq9[b[35156]] = o_mac[b[35156]], acoem && acoem(suq9[b[35404]], suq9[b[5126]], suq9[b[35156]]);
        },
        'fail': function (fyhlrz) {
            console[b[456]](b[35405], fyhlrz[b[28195]]);
            var ni3qju = window[b[35403]];
            acoem && acoem(ni3qju[b[35404]], ni3qju[b[5126]], ni3qju[b[35156]]);
        }
    });
}, window[b[12762]] = function (ix$3jq) {
    wx[b[12762]]({
        'success': function (t$ilg) {
            ix$3jq && ix$3jq(!![], t$ilg);
        },
        'fail': function (hfrlz) {
            ix$3jq && ix$3jq(![], hfrlz);
        }
    });
}, window[b[12764]] = function (_fv47) {
    if (_fv47) wx[b[12764]](_fv47);
}, window[b[27626]] = function (sk69n) {
    wx[b[27626]](sk69n);
}, window[b[561]] = function (lhxt$g, usnj, hxt$l, v47_, tx$lh, coa7m, kn9s6u, m7ac) {
    if (v47_ == undefined) v47_ = 0x1;
    wx[b[1006]]({
        'url': lhxt$g,
        'method': kn9s6u || b[27851],
        'responseType': b[4914],
        'data': usnj,
        'header': { 'content-type': m7ac || b[35247] },
        'success': function (w0b8) {
            DEBUG && console[b[456]](b[35406], lhxt$g, info, w0b8);
            if (w0b8 && w0b8[b[28263]] == 0xc8) {
                var q$in3 = w0b8[b[501]];
                !coa7m || coa7m(q$in3) ? hxt$l && hxt$l(q$in3) : window[b[35407]](lhxt$g, usnj, hxt$l, v47_, tx$lh, coa7m, w0b8);
            } else window[b[35407]](lhxt$g, usnj, hxt$l, v47_, tx$lh, coa7m, w0b8);
        },
        'fail': function (rfyh) {
            DEBUG && console[b[456]](b[35408], lhxt$g, info, rfyh), window[b[35407]](lhxt$g, usnj, hxt$l, v47_, tx$lh, coa7m, rfyh);
        },
        'complete': function () {}
    });
}, window[b[35407]] = function (uk96n, bd0w8, q3inj, j3niqu, nj3q$, qji3$n, $3xijg) {
    j3niqu - 0x1 > 0x0 ? setTimeout(function () {
        window[b[561]](uk96n, bd0w8, q3inj, j3niqu - 0x1, nj3q$, qji3$n);
    }, 0x3e8) : nj3q$ && nj3q$(JSON[b[5004]]({
        'url': uk96n,
        'response': $3xijg
    }));
}, window[b[35409]] = function (ju3q, hzyfvr, uskb6, jt$x, zyrtlh, ghtxrl, lfzh) {
    !uskb6 && (uskb6 = {});
    var $ghlxt = Math[b[349]](Date[b[616]]() / 0x3e8);
    uskb6[b[1423]] = $ghlxt, uskb6[b[35410]] = hzyfvr;
    var xlghtr = Object[b[321]](uskb6)[b[512]](),
        bks0 = '',
        ztrhlg = '';
    for (var z4vf_y = 0x0; z4vf_y < xlghtr[b[322]]; z4vf_y++) {
        bks0 = bks0 + (z4vf_y == 0x0 ? '' : '&') + xlghtr[z4vf_y] + uskb6[xlghtr[z4vf_y]], ztrhlg = ztrhlg + (z4vf_y == 0x0 ? '' : '&') + xlghtr[z4vf_y] + '=' + encodeURIComponent(uskb6[xlghtr[z4vf_y]]);
    }
    bks0 = bks0 + e1U0[b[35190]];
    var n9ks6 = b[35411] + md5(bks0);
    send(ju3q + '?' + ztrhlg + (ztrhlg == '' ? '' : '&') + n9ks6, null, jt$x, zyrtlh, ghtxrl, lfzh || function (fhylz) {
        return fhylz[b[1885]] == b[10692];
    }, null, b[34988]);
}, window[b[35412]] = function (u6k9ns, ytrzlh) {
    var dw182 = 0x0;
    e1U0[b[27982]] && (dw182 = e1U0[b[27982]][b[12381]]), sendApi(e1U0[b[35186]], b[35413], {
        'partnerId': e1U0[b[13265]],
        'gamePkg': e1U0[b[27988]],
        'logTime': Math[b[349]](Date[b[616]]() / 0x3e8),
        'platformUid': e1U0[b[27989]],
        'type': u6k9ns,
        'serverId': dw182
    }, null, 0x2, null, function () {
        return !![];
    });
}, window[b[35414]] = function (lty) {
    sendApi(e1U0[b[35184]], b[35415], {
        'partner_id': e1U0[b[13265]],
        'uid': e1U0[b[27986]],
        'version': e1U0[b[5848]],
        'game_pkg': e1U0[b[27988]],
        'device': e1U0[b[27990]]
    }, e1U0G1, e1G0U, e101);
}, window[b[35416]] = function (lt$hxg) {
    if (lt$hxg && lt$hxg[b[1885]] === b[10692] && lt$hxg[b[501]]) {
        lt$hxg[b[501]][b[427]]({
            'id': -0x2,
            'name': b[35417]
        }), lt$hxg[b[501]][b[427]]({
            'id': -0x1,
            'name': b[35418]
        }), e1U0[b[35419]] = lt$hxg[b[501]];
        if (window[b[13459]]) window[b[13459]][b[35420]]();
    } else {
        e1U0[b[35421]] = ![];
        var b5k0d = lt$hxg ? lt$hxg[b[1885]] : '';
        window[b[35234]](0x7, b[35422] + b5k0d), window[b[35212]](b[35423] + b5k0d);
    }
}, window[b[35424]] = function (hrlxt) {
    sendApi(e1U0[b[35184]], b[35425], {
        'partner_id': e1U0[b[13265]],
        'uid': e1U0[b[27986]],
        'version': e1U0[b[5848]],
        'game_pkg': e1U0[b[27988]],
        'device': e1U0[b[27990]]
    }, e11UG, e1G0U, e101);
}, window[b[35426]] = function (d06b58) {
    e1U0[b[35427]] = ![];
    if (d06b58 && d06b58[b[1885]] === b[10692] && d06b58[b[501]]) {
        for (var b69suk = 0x0; b69suk < d06b58[b[501]][b[322]]; b69suk++) {
            d06b58[b[501]][b69suk][b[638]] = e1UG1(d06b58[b[501]][b69suk]);
        }
        e1U0[b[35193]][-0x1] = window[b[35428]](d06b58[b[501]]), window[b[13459]][b[35429]](-0x1);
    } else {
        var s3uq9n = d06b58 ? d06b58[b[1885]] : '';
        window[b[35234]](0x8, b[35430] + s3uq9n), window[b[35212]](b[35431] + s3uq9n);
    }
}, window[b[35432]] = function (d20w5) {
    sendApi(e1U0[b[35184]], b[35425], {
        'partner_id': e1U0[b[13265]],
        'uid': e1U0[b[27986]],
        'version': e1U0[b[5848]],
        'game_pkg': e1U0[b[27988]],
        'device': e1U0[b[27990]]
    }, d20w5, e1G0U, e101);
}, window[b[35433]] = function (yhlfzr, oapm7c) {
    sendApi(e1U0[b[35184]], b[35434], {
        'partner_id': e1U0[b[13265]],
        'uid': e1U0[b[27986]],
        'version': e1U0[b[5848]],
        'game_pkg': e1U0[b[27988]],
        'device': e1U0[b[27990]],
        'server_group_id': oapm7c
    }, e1GU1, e1G0U, e101);
}, window[b[35435]] = function (kqsn) {
    e1U0[b[35427]] = ![];
    if (kqsn && kqsn[b[1885]] === b[10692] && kqsn[b[501]] && kqsn[b[501]][b[501]]) {
        var b06k9s = kqsn[b[501]][b[35436]],
            qnsuj = [];
        for (var rhzlty = 0x0; rhzlty < kqsn[b[501]][b[501]][b[322]]; rhzlty++) {
            kqsn[b[501]][b[501]][rhzlty][b[638]] = e1UG1(kqsn[b[501]][b[501]][rhzlty]), (qnsuj[b[322]] == 0x0 || kqsn[b[501]][b[501]][rhzlty][b[638]] != 0x0) && (qnsuj[qnsuj[b[322]]] = kqsn[b[501]][b[501]][rhzlty]);
        }
        e1U0[b[35193]][b06k9s] = window[b[35428]](qnsuj), window[b[13459]][b[35429]](b06k9s);
    } else {
        var unji3q = kqsn ? kqsn[b[1885]] : '';
        window[b[35234]](0x9, b[35437] + unji3q), window[b[35212]](b[35438] + unji3q);
    }
}, window[b[35439]] = function (yrzhvf) {
    sendApi(e1U0[b[35184]], b[35440], {
        'partner_id': e1U0[b[13265]],
        'uid': e1U0[b[27986]],
        'version': e1U0[b[5848]],
        'game_pkg': e1U0[b[27988]],
        'device': e1U0[b[27990]]
    }, reqServerRecommendCallBack, e1G0U, e101);
}, window[b[35441]] = function (rlgxth) {
    e1U0[b[35427]] = ![];
    if (rlgxth && rlgxth[b[1885]] === b[10692] && rlgxth[b[501]]) {
        for (var eop = 0x0; eop < rlgxth[b[501]][b[322]]; eop++) {
            rlgxth[b[501]][eop][b[638]] = e1UG1(rlgxth[b[501]][eop]);
        }
        e1U0[b[35193]][-0x2] = window[b[35428]](rlgxth[b[501]]), window[b[13459]][b[35429]](-0x2);
    } else {
        var b69sk = rlgxth ? rlgxth[b[1885]] : '';
        window[b[35234]](0xa, b[35442] + b69sk), alert(b[35443] + b69sk);
    }
}, window[b[35428]] = function (juqsn3) {
    return juqsn3;
}, window[b[35444]] = function (tx$gji, hgx$lt) {
    tx$gji = tx$gji || e1U0[b[27982]][b[12381]], sendApi(e1U0[b[35184]], b[35445], {
        'type': '4',
        'game_pkg': e1U0[b[27988]],
        'server_id': tx$gji
    }, hgx$lt);
}, window[b[35446]] = function (g$lht, d52w80, gtzlhr, zlfr) {
    gtzlhr = gtzlhr || e1U0[b[27982]][b[12381]], sendApi(e1U0[b[35184]], b[35447], {
        'type': g$lht,
        'game_pkg': d52w80,
        'server_id': gtzlhr
    }, zlfr);
}, window[b[35448]] = function (y47vf, $q3xi) {
    sendApi(e1U0[b[35184]], b[35449], { 'game_pkg': y47vf }, $q3xi);
}, window[b[35450]] = function (t$gxl) {
    if (t$gxl) {
        if (t$gxl[b[638]] == 0x1) {
            if (t$gxl[b[35451]] == 0x3) return 0x3;else return t$gxl[b[35451]] == 0x1 ? 0x2 : 0x1;
        } else return t$gxl[b[638]] == 0x0 ? 0x0 : -0x1;
    }
    return -0x1;
}, window[b[35452]] = function (b0w85, vfyz4_) {
    var skun96 = window[b[35329]][b[35331]] == 0x1;
    if (skun96) {
        var _y4fvz = window[b[35329]][b[35338]],
            skun96 = window[b[35329]][b[35331]] == 0x1;
        window[b[35074]][b[679]][b[35339]](b[35340], _y4fvz, b[34997]);
        return;
    }
    e1U0[b[35453]] = {
        'step': b0w85,
        'server_id': vfyz4_
    };
    var $gtlh = this;
    e11UG0({ 'title': b[35454] }), sendApi(e1U0[b[35184]], b[35455], {
        'partner_id': e1U0[b[13265]],
        'uid': e1U0[b[27986]],
        'game_pkg': e1U0[b[27988]],
        'server_id': vfyz4_,
        'platform': e1U0[b[27940]],
        'platform_uid': e1U0[b[27989]],
        'check_login_time': e1U0[b[35301]],
        'check_login_sign': e1U0[b[35300]],
        'version_name': e1U0[b[5022]]
    }, e101UG, e1G0U, e101, function (w5d281) {
        return w5d281[b[1885]] == b[10692] || w5d281[b[611]] == b[35456] || w5d281[b[611]] == b[35457];
    });
}, window[b[35458]] = function (rzfyl) {
    var l$gixt = this;
    if (rzfyl && rzfyl[b[1885]] === b[10692] && rzfyl[b[501]]) {
        var jq3iu = e1U0[b[27982]];
        jq3iu[b[35459]] = e1U0[b[35194]], jq3iu[b[12364]] = String(rzfyl[b[501]][b[35460]]), jq3iu[b[27942]] = parseInt(rzfyl[b[501]][b[1423]]);
        if (rzfyl[b[501]][b[27941]]) jq3iu[b[27941]] = parseInt(rzfyl[b[501]][b[27941]]);else jq3iu[b[27941]] = parseInt(rzfyl[b[501]][b[12381]]);
        jq3iu[b[35461]] = 0x0, jq3iu[b[5018]] = e1U0[b[35350]], jq3iu[b[35462]] = rzfyl[b[501]][b[35463]], jq3iu[b[35464]] = rzfyl[b[501]][b[35464]];
        if (rzfyl[b[501]][b[27946]]) jq3iu[b[27946]] = parseInt(rzfyl[b[501]][b[27946]]);
        console[b[456]](b[35465] + JSON[b[5004]](jq3iu[b[35464]])), e1U0[b[1185]] == 0x1 && jq3iu[b[35464]] && jq3iu[b[35464]][b[35466]] == 0x1 && (e1U0[b[35467]] = 0x1, window[b[35074]][b[679]][b[35468]]()), e10G1U();
    } else {
        if (e1U0[b[35453]][b[7646]] >= 0x3) {
            var ns3qju = rzfyl ? rzfyl[b[1885]] : '';
            window[b[35234]](0xc, b[35469] + ns3qju), e101(JSON[b[5004]](rzfyl)), window[b[35212]](b[35470] + ns3qju);
        } else sendApi(e1U0[b[35184]], b[35279], {
            'platform': e1U0[b[35182]],
            'partner_id': e1U0[b[13265]],
            'token': e1U0[b[35277]],
            'game_pkg': e1U0[b[27988]],
            'deviceId': e1U0[b[27990]],
            'scene': b[35280] + e1U0[b[35192]]
        }, function (n3ij$q) {
            if (!n3ij$q || n3ij$q[b[1885]] != b[10692]) {
                window[b[35212]](b[35297] + n3ij$q && n3ij$q[b[1885]]);
                return;
            }
            e1U0[b[35300]] = String(n3ij$q[b[12364]]), e1U0[b[35301]] = String(n3ij$q[b[1423]]), setTimeout(function () {
                e101GU(e1U0[b[35453]][b[7646]] + 0x1, e1U0[b[35453]][b[12381]]);
            }, 0x5dc);
        }, e1G0U, e101, function (xrlh) {
            return xrlh[b[1885]] == b[10692] || xrlh[b[1885]] == b[28339];
        });
    }
}, window[b[35471]] = function () {
    ServerLoading[b[679]][b[35336]](e1U0[b[1185]]), window[b[35201]] = !![], window[b[35100]]();
}, window[b[35099]] = function () {
    if (window[b[35098]] && window[b[35106]] && window[b[35202]] && window[b[35203]] && window[b[35204]] && window[b[35206]]) {
        if (!window[b[34966]][b[679]]) {
            console[b[456]](b[35472] + window[b[34966]][b[679]]);
            var gitxj$ = wx[b[27609]](),
                $txlhg = gitxj$[b[1349]] ? gitxj$[b[1349]] : 0x0,
                s96k0 = {
                'cdn': window[b[5021]][b[5018]],
                'spareCdn': window[b[5021]][b[27631]],
                'newRegister': window[b[5021]][b[1185]],
                'wxPC': window[b[5021]][b[27633]],
                'wxIOS': window[b[5021]][b[1646]],
                'wxAndroid': window[b[5021]][b[12209]],
                'wxParam': {
                    'limitLoad': window[b[5021]][b[35144]],
                    'benchmarkLevel': window[b[5021]][b[35145]],
                    'wxFrom': window[b[1082]][b[336]] == b[35473] ? 0x1 : 0x0,
                    'wxSDKVersion': window[b[35078]],
                    'qudao': b[35474]
                },
                'configType': window[b[5021]][b[5020]],
                'exposeType': window[b[5021]][b[1271]],
                'scene': $txlhg,
                'video_type': window[b[5021]][b[28133]],
                'ad_flag': window[b[5021]][b[28132]]
            };
            if (window[b[35352]]) for (var lrgzth in window[b[35352]]) {
                if (!s96k0[lrgzth]) s96k0[lrgzth] = window[b[35352]][lrgzth];
            }
            new window[b[34966]](s96k0, window[b[5021]][b[633]], window[b[35177]]);
        }
    }
}, window[b[35100]] = function () {
    if (window[b[35098]] && window[b[35106]] && window[b[35202]] && window[b[35203]] && window[b[35204]] && window[b[35206]] && window[b[35201]] && window[b[35205]]) {
        e11U0G();
        if (!e10GU) {
            e10GU = !![];
            if (!window[b[34966]][b[679]]) window[b[35099]]();
            var iu3jnq = 0x0,
                w815d2 = wx[b[35475]]();
            w815d2 && (window[b[5021]][b[35140]] && (iu3jnq = w815d2[b[846]]), console[b[611]](b[35476] + w815d2[b[846]] + b[35477] + w815d2[b[1911]] + b[35478] + w815d2[b[1913]] + b[35479] + w815d2[b[1912]] + b[35480] + w815d2[b[709]] + b[35481] + w815d2[b[710]]));
            var $3inq = {};
            for (const ijunq3 in e1U0[b[27982]]) {
                $3inq[ijunq3] = e1U0[b[27982]][ijunq3];
            }
            var kusn96 = {
                'channel': window[b[5021]][b[13274]],
                'account': window[b[5021]][b[27986]],
                'userId': window[b[5021]][b[13263]],
                'cdn': window[b[5021]][b[5018]],
                'data': window[b[5021]][b[501]],
                'package': window[b[5021]][b[492]],
                'newRegister': window[b[5021]][b[1185]],
                'pkgName': window[b[5021]][b[27988]],
                'partnerId': window[b[5021]][b[13265]],
                'platform_uid': window[b[5021]][b[27989]],
                'deviceId': window[b[5021]][b[27990]],
                'selectedServer': $3inq,
                'configType': window[b[5021]][b[5020]],
                'exposeType': window[b[5021]][b[1271]],
                'debugUsers': window[b[5021]][b[13412]],
                'wxMenuTop': iu3jnq,
                'wxShield': window[b[5021]][b[1293]],
                'encryptParam': window[b[5021]][b[28140]],
                'wx_channel': window[b[5021]][b[28138]],
                'zsy_tp_state': window[b[5021]][b[28139]]
            };
            if (window[b[35352]]) for (var oa7mc_ in window[b[35352]]) {
                kusn96[oa7mc_] = window[b[35352]][oa7mc_];
            }
            window[b[34966]][b[679]][b[28004]](kusn96);
            if (e1U0[b[27982]] && e1U0[b[27982]][b[12381]]) localStorage[b[1013]](b[35303] + e1U0[b[27988]] + e1U0[b[27986]], e1U0[b[27982]][b[12381]]);
        }
    } else console[b[611]](b[35482] + window[b[35098]] + b[35483] + window[b[35106]] + b[35484] + window[b[35202]] + b[35485] + window[b[35203]] + b[35486] + window[b[35204]] + b[35487] + window[b[35206]] + b[35488] + window[b[35201]] + b[35489] + window[b[35205]]);
}, window[b[35490]] = function (t$gx) {
    if (!window[b[13115]]) {
        console[b[499]](b[35491]);
        return;
    }
    var z4f_vy = t$gx[b[872]];
    z4f_vy == 0x1 ? window[b[13115]][b[599]](0x2327, t$gx) : window[b[13115]][b[614]](0x2327);
};