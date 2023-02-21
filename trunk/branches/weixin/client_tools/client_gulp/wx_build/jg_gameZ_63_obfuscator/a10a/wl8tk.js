var f = wx.$B;
function Sbdv3() {}
function Si8_x$p(fgvd2, yh096m, ujoqm, bf4sd, au1joq) {
    function ni$px(g2fvb) {
        if (g2fvb > 0xffff) {
            g2fvb -= 0x10000;
            var aoujmq = 0xd800 + (g2fvb >> 0xa),
                ulqoj1 = 0xdc00 + (0x3ff & g2fvb);
            return String['fromCharCode'](aoujmq, ulqoj1);
        }
        return String['fromCharCode'](g2fvb);
    }
    function b2fgv(k7rts4) {
        var r$78t = k7rts4['slice'](0x1, -0x1);
        return r$78t in ujoqm ? ujoqm[r$78t] : '#' === r$78t['charAt'](0x0) ? ni$px(parseInt(r$78t['substr'](0x1)['replace']('x', '0x'))) : (au1joq['error']('entity not found:' + k7rts4), k7rts4);
    }
    function y6mha9(zeo1q) {
        if (zeo1q > ajomq) {
            var kg4bd = fgvd2['substring'](ajomq, zeo1q)['replace'](/&#?\w+;/g, b2fgv);
            ajouy && l1zq5(ajomq), bf4sd['characters'](kg4bd, 0x0, zeo1q - ajomq), ajomq = zeo1q;
        }
    }
    function l1zq5(dbfg2, g2fk) {
        for (; dbfg2 >= bgv20 && (g2fk = tr7w8['exec'](fgvd2));) r7tk = g2fk['index'], bgv20 = r7tk + g2fk[0x0]['length'], ajouy['lineNumber']++;
        ajouy['columnNumber'] = dbfg2 - r7tk + 0x1;
    }
    for (var r7tk = 0x0, bgv20 = 0x0, tr7w8 = /.*(?:\r\n?|\n)|.*$/g, ajouy = bf4sd['locator'], gv23h0 = [{ 'currentNSMap': yh096m }], t4ksf7 = {}, ajomq = 0x0;;) {
        try {
            var uojq1l = fgvd2['indexOf']('<', ajomq);
            if (0x0 > uojq1l) {
                if (!fgvd2['substr'](ajomq)['match'](/^\s*$/)) {
                    var jmu = bf4sd['doc'],
                        v203g = jmu['createTextNode'](fgvd2['substr'](ajomq));
                    jmu['appendChild'](v203g), bf4sd['currentElement'] = v203g;
                }
                return;
            }
            switch (uojq1l > ajomq && y6mha9(uojq1l), fgvd2['charAt'](uojq1l + 0x1)) {
                case '/':
                    var xw8$tr = fgvd2['indexOf']('>', uojq1l + 0x3),
                        zqelo1 = fgvd2['substring'](uojq1l + 0x2, xw8$tr),
                        zjql1 = gv23h0['pop']();
                    0x0 > xw8$tr ? (zqelo1 = fgvd2['substring'](uojq1l + 0x2)['replace'](/[\s<].*/, ''), au1joq['error']('end tag name: ' + zqelo1 + ' is not complete:' + zjql1['tagName']), xw8$tr = uojq1l + 0x1 + zqelo1['length']) : zqelo1['match'](/\s</) && (zqelo1 = zqelo1['replace'](/[\s<].*/, ''), au1joq['error']('end tag name: ' + zqelo1 + ' maybe not complete'), xw8$tr = uojq1l + 0x1 + zqelo1['length']);
                    var uoajmq = zjql1['localNSMap'],
                        yojua = zjql1['tagName'] == zqelo1,
                        h69may = yojua || zjql1['tagName'] && zjql1['tagName']['toLowerCase']() == zqelo1['toLowerCase']();
                    if (h69may) {
                        if (bf4sd['endElement'](zjql1['uri'], zjql1['localName'], zqelo1), uoajmq) {
                            for (var ajuoym in uoajmq) bf4sd['endPrefixMapping'](ajuoym);
                        }
                        yojua || au1joq['fatalError']('end tag name: ' + zqelo1 + ' is not match the current start tagName:' + zjql1['tagName']);
                    } else gv23h0['push'](zjql1);
                    xw8$tr++;
                    break;
                case '?':
                    ajouy && l1zq5(uojq1l), xw8$tr = Symuoaj(fgvd2, uojq1l, bf4sd);
                    break;
                case '!':
                    ajouy && l1zq5(uojq1l), xw8$tr = Sst4rk7(fgvd2, uojq1l, bf4sd, au1joq);
                    break;
                default:
                    ajouy && l1zq5(uojq1l);
                    var fgd2 = new Spx8i_$(),
                        lqjuo1 = gv23h0[gv23h0['length'] - 0x1]['currentNSMap'],
                        xw8$tr = Sy06h93(fgvd2, uojq1l, fgd2, lqjuo1, b2fgv, au1joq),
                        i_p$n = fgd2['length'];
                    if (!fgd2['closed'] && Ss7d4fk(fgvd2, xw8$tr, fgd2['tagName'], t4ksf7) && (fgd2['closed'] = !0x0, ujoqm['nbsp'] || au1joq['warning']('unclosed xml attribute')), ajouy && i_p$n) {
                        for (var bvfg = Sfkdbg2(ajouy, {}), uoqjm = 0x0; i_p$n > uoqjm; uoqjm++) {
                            var kbsfd = fgd2[uoqjm];
                            l1zq5(kbsfd['offset']), kbsfd['locator'] = Sfkdbg2(ajouy, {});
                        }
                        bf4sd['locator'] = bvfg, Ss4f(fgd2, bf4sd, lqjuo1) && gv23h0['push'](fgd2), bf4sd['locator'] = ajouy;
                    } else Ss4f(fgd2, bf4sd, lqjuo1) && gv23h0['push'](fgd2);
                    'http://www.w3.org/1999/xhtml' !== fgd2['uri'] || fgd2['closed'] ? xw8$tr++ : xw8$tr = Sq5ezl1(fgvd2, xw8$tr, fgd2['tagName'], b2fgv, bf4sd);
            }
        } catch (moajyu) {
            au1joq['error']('element parse error: ' + moajyu), xw8$tr = -0x1;
        }
        xw8$tr > ajomq ? ajomq = xw8$tr : y6mha9(Math['max'](uojq1l, ajomq) + 0x1);
    }
}
function Sfkdbg2(st4, $x8wtr) {
    return $x8wtr['lineNumber'] = st4['lineNumber'], $x8wtr['columnNumber'] = st4['columnNumber'], $x8wtr;
}
function Sy06h93(k47fsd, lo1qzj, kfdbs4, jqolu, au6ym, sfb4kd) {
    for (var x$nip, wr8x$i, gdvb2f = ++lo1qzj, w$r78t = St47skf;;) {
        var _xip$n = k47fsd['charAt'](gdvb2f);
        switch (_xip$n) {
            case '=':
                if (w$r78t === Sxrw$8t) x$nip = k47fsd['slice'](lo1qzj, gdvb2f), w$r78t = Sgv3h;else {
                    if (w$r78t !== Smuoq) throw new Error('attribute equal must after attrName');
                    w$r78t = Sgv3h;
                }
                break;
            case '\x27':
            case '\x22':
                if (w$r78t === Sgv3h || w$r78t === Sxrw$8t) {
                    if (w$r78t === Sxrw$8t && (sfb4kd['warning']('attribute value must after "="'), x$nip = k47fsd['slice'](lo1qzj, gdvb2f)), lo1qzj = gdvb2f + 0x1, gdvb2f = k47fsd['indexOf'](_xip$n, lo1qzj), !(gdvb2f > 0x0)) throw new Error('attribute value no end \'' + _xip$n + '\' match');
                    wr8x$i = k47fsd['slice'](lo1qzj, gdvb2f)['replace'](/&#?\w+;/g, au6ym), kfdbs4['add'](x$nip, wr8x$i, lo1qzj - 0x1), w$r78t = Sipx8_$;
                } else {
                    if (w$r78t != Sb2gdfk) throw new Error('attribute value must after "="');
                    wr8x$i = k47fsd['slice'](lo1qzj, gdvb2f)['replace'](/&#?\w+;/g, au6ym), kfdbs4['add'](x$nip, wr8x$i, lo1qzj), sfb4kd['warning']('attribute "' + x$nip + '" missed start quot(' + _xip$n + ')!!'), lo1qzj = gdvb2f + 0x1, w$r78t = Sipx8_$;
                }
                break;
            case '/':
                switch (w$r78t) {
                    case St47skf:
                        kfdbs4['setTagName'](k47fsd['slice'](lo1qzj, gdvb2f));
                    case Sipx8_$:
                    case Sdvgf2:
                    case Sbd4fks:
                        w$r78t = Sbd4fks, kfdbs4['closed'] = !0x0;
                    case Sb2gdfk:
                    case Sxrw$8t:
                    case Smuoq:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return sfb4kd['error']('unexpected end of input'), w$r78t == St47skf && kfdbs4['setTagName'](k47fsd['slice'](lo1qzj, gdvb2f)), gdvb2f;
            case '>':
                switch (w$r78t) {
                    case St47skf:
                        kfdbs4['setTagName'](k47fsd['slice'](lo1qzj, gdvb2f));
                    case Sipx8_$:
                    case Sdvgf2:
                    case Sbd4fks:
                        break;
                    case Sb2gdfk:
                    case Sxrw$8t:
                        wr8x$i = k47fsd['slice'](lo1qzj, gdvb2f), '/' === wr8x$i['slice'](-0x1) && (kfdbs4['closed'] = !0x0, wr8x$i = wr8x$i['slice'](0x0, -0x1));
                    case Smuoq:
                        w$r78t === Smuoq && (wr8x$i = x$nip), w$r78t == Sb2gdfk ? (sfb4kd['warning']('attribute "' + wr8x$i + '" missed quot(")!!'), kfdbs4['add'](x$nip, wr8x$i['replace'](/&#?\w+;/g, au6ym), lo1qzj)) : ('http://www.w3.org/1999/xhtml' === jqolu[''] && wr8x$i['match'](/^(?:disabled|checked|selected)$/i) || sfb4kd['warning']('attribute "' + wr8x$i + '" missed value!! "' + wr8x$i + '" instead!!'), kfdbs4['add'](wr8x$i, wr8x$i, lo1qzj));
                        break;
                    case Sgv3h:
                        throw new Error('attribute value missed!!');
                }
                return gdvb2f;
            case '\u0080':
                _xip$n = '\x20';
            default:
                if ('\x20' >= _xip$n) switch (w$r78t) {
                    case St47skf:
                        kfdbs4['setTagName'](k47fsd['slice'](lo1qzj, gdvb2f)), w$r78t = Sdvgf2;
                        break;
                    case Sxrw$8t:
                        x$nip = k47fsd['slice'](lo1qzj, gdvb2f), w$r78t = Smuoq;
                        break;
                    case Sb2gdfk:
                        var wr8x$i = k47fsd['slice'](lo1qzj, gdvb2f)['replace'](/&#?\w+;/g, au6ym);
                        sfb4kd['warning']('attribute "' + wr8x$i + '" missed quot(")!!'), kfdbs4['add'](x$nip, wr8x$i, lo1qzj);
                    case Sipx8_$:
                        w$r78t = Sdvgf2;
                } else switch (w$r78t) {
                    case Smuoq:
                        {
                            kfdbs4['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === jqolu[''] && x$nip['match'](/^(?:disabled|checked|selected)$/i) || sfb4kd['warning']('attribute "' + x$nip + '" missed value!! "' + x$nip + '" instead2!!'), kfdbs4['add'](x$nip, x$nip, lo1qzj), lo1qzj = gdvb2f, w$r78t = Sxrw$8t;
                        break;
                    case Sipx8_$:
                        sfb4kd['warning']('attribute space is required"' + x$nip + '\x22!!');
                    case Sdvgf2:
                        w$r78t = Sxrw$8t, lo1qzj = gdvb2f;
                        break;
                    case Sgv3h:
                        w$r78t = Sb2gdfk, lo1qzj = gdvb2f;
                        break;
                    case Sbd4fks:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        gdvb2f++;
    }
}
function Ss4f(qju1, swrt7, t$rxw8) {
    for (var bd23 = qju1['tagName'], fs4db = null, yh039 = qju1['length']; yh039--;) {
        var xw8pi = qju1[yh039],
            i_8p$x = xw8pi['qName'],
            yujoma = xw8pi['value'],
            amuj6 = i_8p$x['indexOf'](':');
        if (amuj6 > 0x0) var gfk4d = xw8pi['prefix'] = i_8p$x['slice'](0x0, amuj6),
            x8$_ = i_8p$x['slice'](amuj6 + 0x1),
            t7rw8s = 'xmlns' === gfk4d && x8$_;else x8$_ = i_8p$x, gfk4d = null, t7rw8s = 'xmlns' === i_8p$x && '';
        xw8pi['localName'] = x8$_, t7rw8s !== !0x1 && (null == fs4db && (fs4db = {}, Sst8wr7(t$rxw8, t$rxw8 = {})), t$rxw8[t7rw8s] = fs4db[t7rw8s] = yujoma, xw8pi['uri'] = 'http://www.w3.org/2000/xmlns/', swrt7['startPrefixMapping'](t7rw8s, yujoma));
    }
    for (var yh039 = qju1['length']; yh039--;) {
        xw8pi = qju1[yh039];
        var gfk4d = xw8pi['prefix'];
        gfk4d && ('xml' === gfk4d && (xw8pi['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== gfk4d && (xw8pi['uri'] = t$rxw8[gfk4d || '']));
    }
    var amuj6 = bd23['indexOf'](':');
    amuj6 > 0x0 ? (gfk4d = qju1['prefix'] = bd23['slice'](0x0, amuj6), x8$_ = qju1['localName'] = bd23['slice'](amuj6 + 0x1)) : (gfk4d = null, x8$_ = qju1['localName'] = bd23);
    var $i8rw = qju1['uri'] = t$rxw8[gfk4d || ''];
    if (swrt7['startElement']($i8rw, x8$_, bd23, qju1), !qju1['closed']) return qju1['currentNSMap'] = t$rxw8, qju1['localNSMap'] = fs4db, !0x0;
    if (swrt7['endElement']($i8rw, x8$_, bd23), fs4db) {
        for (gfk4d in fs4db) swrt7['endPrefixMapping'](gfk4d);
    }
}
function Sq5ezl1(myah9, zle51q, jayuom, gdfbk2, $_p8) {
    if (/^(?:script|textarea)$/i['test'](jayuom)) {
        var rkts = myah9['indexOf']('</' + jayuom + '>', zle51q),
            tr7s8 = myah9['substring'](zle51q + 0x1, rkts);
        if (/[&<]/['test'](tr7s8)) return (/^script$/i['test'](jayuom) ? ($_p8['characters'](tr7s8, 0x0, tr7s8['length']), rkts) : (tr7s8 = tr7s8['replace'](/&#?\w+;/g, gdfbk2), $_p8['characters'](tr7s8, 0x0, tr7s8['length']), rkts)
        );
    }
    return zle51q + 0x1;
}
function Ss7d4fk(ksf4d, myj6, dks74f, bg4kdf) {
    var u6mjya = bg4kdf[dks74f];
    return null == u6mjya && (u6mjya = ksf4d['lastIndexOf']('</' + dks74f + '>'), myj6 > u6mjya && (u6mjya = ksf4d['lastIndexOf']('</' + dks74f)), bg4kdf[dks74f] = u6mjya), myj6 > u6mjya;
}
function Sst8wr7(m69hya, fd47s) {
    for (var wsrt74 in m69hya) fd47s[wsrt74] = m69hya[wsrt74];
}
function Sst4rk7(zl1qj, yuaojm, n_x$p, kbf4g) {
    var s4t7f = zl1qj['charAt'](yuaojm + 0x2);
    switch (s4t7f) {
        case '-':
            if ('-' === zl1qj['charAt'](yuaojm + 0x3)) {
                var gv2h0 = zl1qj['indexOf']('-->', yuaojm + 0x4);
                return gv2h0 > yuaojm ? (n_x$p['comment'](zl1qj, yuaojm + 0x4, gv2h0 - yuaojm - 0x4), gv2h0 + 0x3) : (kbf4g['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == zl1qj['substr'](yuaojm + 0x3, 0x6)) {
                var gv2h0 = zl1qj['indexOf'](']]>', yuaojm + 0x9);
                return n_x$p['startCDATA'](), n_x$p['characters'](zl1qj, yuaojm + 0x9, gv2h0 - yuaojm - 0x9), n_x$p['endCDATA'](), gv2h0 + 0x3;
            }
            var in_x = Sgbdv32(zl1qj, yuaojm),
                oqjlu1 = in_x['length'];
            if (oqjlu1 > 0x1 && /!doctype/i['test'](in_x[0x0][0x0])) {
                var $wpix = in_x[0x1][0x0],
                    w$r87t = oqjlu1 > 0x3 && /^public$/i['test'](in_x[0x2][0x0]) && in_x[0x3][0x0],
                    gvdf2 = oqjlu1 > 0x4 && in_x[0x4][0x0],
                    vbfg = in_x[oqjlu1 - 0x1];
                return n_x$p['startDTD']($wpix, w$r87t && w$r87t['replace'](/^(['"])(.*?)\1$/, '$2'), gvdf2 && gvdf2['replace'](/^(['"])(.*?)\1$/, '$2')), n_x$p['endDTD'](), vbfg['index'] + vbfg[0x0]['length'];
            }
    }
    return -0x1;
}
function Symuoaj(olzjq, q5z1e, zqe1o) {
    var ah6y9 = olzjq['indexOf']('?>', q5z1e);
    if (ah6y9) {
        var nx_i = olzjq['substring'](q5z1e, ah6y9)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (nx_i) {
            {
                nx_i[0x0]['length'];
            }
            return zqe1o['processingInstruction'](nx_i[0x1], nx_i[0x2]), ah6y9 + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function Spx8i_$() {}
function Ssk4f7d(b32gd, st4fk) {
    return b32gd['__proto__'] = st4fk, b32gd;
}
function Sgbdv32(wp$8x, d2bkfg) {
    var ksf7d4,
        lj1zoq = [],
        jao = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (jao['lastIndex'] = d2bkfg, jao['exec'](wp$8x); ksf7d4 = jao['exec'](wp$8x);) if (lj1zoq['push'](ksf7d4), ksf7d4[0x1]) return lj1zoq;
}
var Sym069h = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    Skg = new RegExp('[\\-\\.0-9' + Sym069h['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    Sqe1zol = new RegExp('^' + Sym069h['source'] + Skg['source'] + '*(?::' + Sym069h['source'] + Skg['source'] + '*)?$'),
    St47skf = 0x0,
    Sxrw$8t = 0x1,
    Smuoq = 0x2,
    Sgv3h = 0x3,
    Sb2gdfk = 0x4,
    Sipx8_$ = 0x5,
    Sdvgf2 = 0x6,
    Sbd4fks = 0x7;
Sbdv3['prototype'] = {
    'parse': function (bfg4dk, sf7tk4, bdvg) {
        var fbgvd = this['domBuilder'];
        fbgvd['startDocument'](), Sst8wr7(sf7tk4, sf7tk4 = {}), Si8_x$p(bfg4dk, sf7tk4, bdvg, fbgvd, this['errorHandler']), fbgvd['endDocument']();
    }
}, Spx8i_$['prototype'] = {
    'setTagName': function (bdkf2) {
        if (!Sqe1zol['test'](bdkf2)) throw new Error('invalid tagName:' + bdkf2);
        this['tagName'] = bdkf2;
    },
    'add': function (jmuaoq, trw8x$, t4rk) {
        if (!Sqe1zol['test'](jmuaoq)) throw new Error('invalid attribute:' + jmuaoq);
        this[this['length']++] = {
            'qName': jmuaoq,
            'value': trw8x$,
            'offset': t4rk
        };
    },
    'length': 0x0,
    'getLocalName': function (z1leq) {
        return this[z1leq]['localName'];
    },
    'getLocator': function (u6) {
        return this[u6]['locator'];
    },
    'getQName': function (p_n$i) {
        return this[p_n$i]['qName'];
    },
    'getURI': function (v03bg) {
        return this[v03bg]['uri'];
    },
    'getValue': function (rw$8xt) {
        return this[rw$8xt]['value'];
    }
}, Ssk4f7d({}, Ssk4f7d['prototype']) instanceof Ssk4f7d || (Ssk4f7d = function (gdkb4, jl1qu) {
    function kfd2gb() {}
    kfd2gb['prototype'] = jl1qu, kfd2gb = new kfd2gb();
    for (jl1qu in gdkb4) kfd2gb[jl1qu] = gdkb4[jl1qu];
    return kfd2gb;
}), exports['XMLReader'] = Sbdv3;