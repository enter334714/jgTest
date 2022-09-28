var B = wx.$z;
function zsxh9a1() {}
function zzetao(r5_w, s19hx, uw_50, xatzs, i7nm3l) {
    function odykbt(inml) {
        if (inml > 0xffff) {
            inml -= 0x10000;
            var inml7v = 0xd800 + (inml >> 0xa),
                atzeod = 0xdc00 + (0x3ff & inml);
            return String['fromCharCode'](inml7v, atzeod);
        }
        return String['fromCharCode'](inml);
    }
    function odzaet(_8b5r) {
        var bkr8y = _8b5r['slice'](0x1, -0x1);
        return bkr8y in uw_50 ? uw_50[bkr8y] : '#' === bkr8y['charAt'](0x0) ? odykbt(parseInt(bkr8y['substr'](0x1)['replace']('x', '0x'))) : (i7nm3l['error']('entity not found:' + _8b5r), _8b5r);
    }
    function gfhp6(xah1) {
        if (xah1 > inmq7) {
            var ybotkd = r5_w['substring'](inmq7, xah1)['replace'](/&#?\w+;/g, odzaet);
            as9zxe && v4lgf6(inmq7), xatzs['characters'](ybotkd, 0x0, xah1 - inmq7), inmq7 = xah1;
        }
    }
    function v4lgf6(h41g6p, ji3m$) {
        for (; h41g6p >= xahs19 && (ji3m$ = l7mvni['exec'](r5_w));) edyo = ji3m$['index'], xahs19 = edyo + ji3m$[0x0]['length'], as9zxe['lineNumber']++;
        as9zxe['columnNumber'] = h41g6p - edyo + 0x1;
    }
    for (var edyo = 0x0, xahs19 = 0x0, l7mvni = /.*(?:\r\n?|\n)|.*$/g, as9zxe = xatzs['locator'], fh6gp4 = [{ 'currentNSMap': s19hx }], lmvi = {}, inmq7 = 0x0;;) {
        try {
            var p1hgx = r5_w['indexOf']('<', inmq7);
            if (0x0 > p1hgx) {
                if (!r5_w['substr'](inmq7)['match'](/^\s*$/)) {
                    var in7lfv = xatzs['doc'],
                        vmi7 = in7lfv['createTextNode'](r5_w['substr'](inmq7));
                    in7lfv['appendChild'](vmi7), xatzs['currentElement'] = vmi7;
                }
                return;
            }
            switch (p1hgx > inmq7 && gfhp6(p1hgx), r5_w['charAt'](p1hgx + 0x1)) {
                case '/':
                    var oadzt = r5_w['indexOf']('>', p1hgx + 0x3),
                        tybod = r5_w['substring'](p1hgx + 0x2, oadzt),
                        e1x9as = fh6gp4['pop']();
                    0x0 > oadzt ? (tybod = r5_w['substring'](p1hgx + 0x2)['replace'](/[\s<].*/, ''), i7nm3l['error']('end tag name: ' + tybod + ' is not complete:' + e1x9as['tagName']), oadzt = p1hgx + 0x1 + tybod['length']) : tybod['match'](/\s</) && (tybod = tybod['replace'](/[\s<].*/, ''), i7nm3l['error']('end tag name: ' + tybod + ' maybe not complete'), oadzt = p1hgx + 0x1 + tybod['length']);
                    var u2_8 = e1x9as['localNSMap'],
                        h1x9as = e1x9as['tagName'] == tybod,
                        u5_wr = h1x9as || e1x9as['tagName'] && e1x9as['tagName']['toLowerCase']() == tybod['toLowerCase']();
                    if (u5_wr) {
                        if (xatzs['endElement'](e1x9as['uri'], e1x9as['localName'], tybod), u2_8) {
                            for (var ln7vf6 in u2_8) xatzs['endPrefixMapping'](ln7vf6);
                        }
                        h1x9as || i7nm3l['fatalError']('end tag name: ' + tybod + ' is not match the current start tagName:' + e1x9as['tagName']);
                    } else fh6gp4['push'](e1x9as);
                    oadzt++;
                    break;
                case '?':
                    as9zxe && v4lgf6(p1hgx), oadzt = zlnf46(r5_w, p1hgx, xatzs);
                    break;
                case '!':
                    as9zxe && v4lgf6(p1hgx), oadzt = zbydrk(r5_w, p1hgx, xatzs, i7nm3l);
                    break;
                default:
                    as9zxe && v4lgf6(p1hgx);
                    var h14g9p = new zbky8(),
                        r58b_2 = fh6gp4[fh6gp4['length'] - 0x1]['currentNSMap'],
                        oadzt = zkzyodt(r5_w, p1hgx, h14g9p, r58b_2, odzaet, i7nm3l),
                        zdao = h14g9p['length'];
                    if (!h14g9p['closed'] && znv46f(r5_w, oadzt, h14g9p['tagName'], lmvi) && (h14g9p['closed'] = !0x0, uw_50['nbsp'] || i7nm3l['warning']('unclosed xml attribute')), as9zxe && zdao) {
                        for (var b8r = z_yr(as9zxe, {}), h491 = 0x0; zdao > h491; h491++) {
                            var pf6hg = h14g9p[h491];
                            v4lgf6(pf6hg['offset']), pf6hg['locator'] = z_yr(as9zxe, {});
                        }
                        xatzs['locator'] = b8r, zlf4g6(h14g9p, xatzs, r58b_2) && fh6gp4['push'](h14g9p), xatzs['locator'] = as9zxe;
                    } else zlf4g6(h14g9p, xatzs, r58b_2) && fh6gp4['push'](h14g9p);
                    'http://www.w3.org/1999/xhtml' !== h14g9p['uri'] || h14g9p['closed'] ? oadzt++ : oadzt = zlmv7i(r5_w, oadzt, h14g9p['tagName'], odzaet, xatzs);
            }
        } catch (rb825_) {
            i7nm3l['error']('element parse error: ' + rb825_), oadzt = -0x1;
        }
        oadzt > inmq7 ? inmq7 = oadzt : gfhp6(Math['max'](p1hgx, inmq7) + 0x1);
    }
}
function z_yr(a1sh9, xesat) {
    return xesat['lineNumber'] = a1sh9['lineNumber'], xesat['columnNumber'] = a1sh9['columnNumber'], xesat;
}
function zkzyodt(dkyt, tadoze, gfh64, xgph9, jm$3, tesoaz) {
    for (var nlim7v, bkr85, bkotdy = ++tadoze, dezto = zae9szx;;) {
        var urw25_ = dkyt['charAt'](bkotdy);
        switch (urw25_) {
            case '=':
                if (dezto === zvfnl64) nlim7v = dkyt['slice'](tadoze, bkotdy), dezto = zu52;else {
                    if (dezto !== zxae) throw new Error('attribute equal must after attrName');
                    dezto = zu52;
                }
                break;
            case '\x27':
            case '\x22':
                if (dezto === zu52 || dezto === zvfnl64) {
                    if (dezto === zvfnl64 && (tesoaz['warning']('attribute value must after "="'), nlim7v = dkyt['slice'](tadoze, bkotdy)), tadoze = bkotdy + 0x1, bkotdy = dkyt['indexOf'](urw25_, tadoze), !(bkotdy > 0x0)) throw new Error('attribute value no end \'' + urw25_ + '\' match');
                    bkr85 = dkyt['slice'](tadoze, bkotdy)['replace'](/&#?\w+;/g, jm$3), gfh64['add'](nlim7v, bkr85, tadoze - 0x1), dezto = zzsaex9;
                } else {
                    if (dezto != zr2u58_) throw new Error('attribute value must after "="');
                    bkr85 = dkyt['slice'](tadoze, bkotdy)['replace'](/&#?\w+;/g, jm$3), gfh64['add'](nlim7v, bkr85, tadoze), tesoaz['warning']('attribute "' + nlim7v + '" missed start quot(' + urw25_ + ')!!'), tadoze = bkotdy + 0x1, dezto = zzsaex9;
                }
                break;
            case '/':
                switch (dezto) {
                    case zae9szx:
                        gfh64['setTagName'](dkyt['slice'](tadoze, bkotdy));
                    case zzsaex9:
                    case zsezto:
                    case zi3nl7m:
                        dezto = zi3nl7m, gfh64['closed'] = !0x0;
                    case zr2u58_:
                    case zvfnl64:
                    case zxae:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return tesoaz['error']('unexpected end of input'), dezto == zae9szx && gfh64['setTagName'](dkyt['slice'](tadoze, bkotdy)), bkotdy;
            case '>':
                switch (dezto) {
                    case zae9szx:
                        gfh64['setTagName'](dkyt['slice'](tadoze, bkotdy));
                    case zzsaex9:
                    case zsezto:
                    case zi3nl7m:
                        break;
                    case zr2u58_:
                    case zvfnl64:
                        bkr85 = dkyt['slice'](tadoze, bkotdy), '/' === bkr85['slice'](-0x1) && (gfh64['closed'] = !0x0, bkr85 = bkr85['slice'](0x0, -0x1));
                    case zxae:
                        dezto === zxae && (bkr85 = nlim7v), dezto == zr2u58_ ? (tesoaz['warning']('attribute "' + bkr85 + '" missed quot(")!!'), gfh64['add'](nlim7v, bkr85['replace'](/&#?\w+;/g, jm$3), tadoze)) : ('http://www.w3.org/1999/xhtml' === xgph9[''] && bkr85['match'](/^(?:disabled|checked|selected)$/i) || tesoaz['warning']('attribute "' + bkr85 + '" missed value!! "' + bkr85 + '" instead!!'), gfh64['add'](bkr85, bkr85, tadoze));
                        break;
                    case zu52:
                        throw new Error('attribute value missed!!');
                }
                return bkotdy;
            case '\u0080':
                urw25_ = '\x20';
            default:
                if ('\x20' >= urw25_) switch (dezto) {
                    case zae9szx:
                        gfh64['setTagName'](dkyt['slice'](tadoze, bkotdy)), dezto = zsezto;
                        break;
                    case zvfnl64:
                        nlim7v = dkyt['slice'](tadoze, bkotdy), dezto = zxae;
                        break;
                    case zr2u58_:
                        var bkr85 = dkyt['slice'](tadoze, bkotdy)['replace'](/&#?\w+;/g, jm$3);
                        tesoaz['warning']('attribute "' + bkr85 + '" missed quot(")!!'), gfh64['add'](nlim7v, bkr85, tadoze);
                    case zzsaex9:
                        dezto = zsezto;
                } else switch (dezto) {
                    case zxae:
                        {
                            gfh64['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === xgph9[''] && nlim7v['match'](/^(?:disabled|checked|selected)$/i) || tesoaz['warning']('attribute "' + nlim7v + '" missed value!! "' + nlim7v + '" instead2!!'), gfh64['add'](nlim7v, nlim7v, tadoze), tadoze = bkotdy, dezto = zvfnl64;
                        break;
                    case zzsaex9:
                        tesoaz['warning']('attribute space is required"' + nlim7v + '\x22!!');
                    case zsezto:
                        dezto = zvfnl64, tadoze = bkotdy;
                        break;
                    case zu52:
                        dezto = zr2u58_, tadoze = bkotdy;
                        break;
                    case zi3nl7m:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        bkotdy++;
    }
}
function zlf4g6(ykbodt, kybdot, $mj3iq) {
    for (var vf64nl = ykbodt['tagName'], etsoza = null, gp19h = ykbodt['length']; gp19h--;) {
        var m3nq7 = ykbodt[gp19h],
            u2_r5 = m3nq7['qName'],
            saeto = m3nq7['value'],
            gp9xh = u2_r5['indexOf'](':');
        if (gp9xh > 0x0) var etzasx = m3nq7['prefix'] = u2_r5['slice'](0x0, gp9xh),
            mn7q = u2_r5['slice'](gp9xh + 0x1),
            r_b5 = 'xmlns' === etzasx && mn7q;else mn7q = u2_r5, etzasx = null, r_b5 = 'xmlns' === u2_r5 && '';
        m3nq7['localName'] = mn7q, r_b5 !== !0x1 && (null == etsoza && (etsoza = {}, zsxz9ae($mj3iq, $mj3iq = {})), $mj3iq[r_b5] = etsoza[r_b5] = saeto, m3nq7['uri'] = 'http://www.w3.org/2000/xmlns/', kybdot['startPrefixMapping'](r_b5, saeto));
    }
    for (var gp19h = ykbodt['length']; gp19h--;) {
        m3nq7 = ykbodt[gp19h];
        var etzasx = m3nq7['prefix'];
        etzasx && ('xml' === etzasx && (m3nq7['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== etzasx && (m3nq7['uri'] = $mj3iq[etzasx || '']));
    }
    var gp9xh = vf64nl['indexOf'](':');
    gp9xh > 0x0 ? (etzasx = ykbodt['prefix'] = vf64nl['slice'](0x0, gp9xh), mn7q = ykbodt['localName'] = vf64nl['slice'](gp9xh + 0x1)) : (etzasx = null, mn7q = ykbodt['localName'] = vf64nl);
    var vi7fnl = ykbodt['uri'] = $mj3iq[etzasx || ''];
    if (kybdot['startElement'](vi7fnl, mn7q, vf64nl, ykbodt), !ykbodt['closed']) return ykbodt['currentNSMap'] = $mj3iq, ykbodt['localNSMap'] = etsoza, !0x0;
    if (kybdot['endElement'](vi7fnl, mn7q, vf64nl), etsoza) {
        for (etzasx in etsoza) kybdot['endPrefixMapping'](etzasx);
    }
}
function zlmv7i(bo8kdy, _2wu0, qmi73$, kb_5r, jqm$3) {
    if (/^(?:script|textarea)$/i['test'](qmi73$)) {
        var daeot = bo8kdy['indexOf']('</' + qmi73$ + '>', _2wu0),
            w_5u0 = bo8kdy['substring'](_2wu0 + 0x1, daeot);
        if (/[&<]/['test'](w_5u0)) return (/^script$/i['test'](qmi73$) ? (jqm$3['characters'](w_5u0, 0x0, w_5u0['length']), daeot) : (w_5u0 = w_5u0['replace'](/&#?\w+;/g, kb_5r), jqm$3['characters'](w_5u0, 0x0, w_5u0['length']), daeot)
        );
    }
    return _2wu0 + 0x1;
}
function znv46f(q37$mi, edtzy, vg4fp6, rb8_2) {
    var oestz = rb8_2[vg4fp6];
    return null == oestz && (oestz = q37$mi['lastIndexOf']('</' + vg4fp6 + '>'), edtzy > oestz && (oestz = q37$mi['lastIndexOf']('</' + vg4fp6)), rb8_2[vg4fp6] = oestz), edtzy > oestz;
}
function zsxz9ae(m3j, _5kbr8) {
    for (var ghxp19 in m3j) _5kbr8[ghxp19] = m3j[ghxp19];
}
function zbydrk(ydokb, fi7nvl, f6gp4, _8bk) {
    var hp41 = ydokb['charAt'](fi7nvl + 0x2);
    switch (hp41) {
        case '-':
            if ('-' === ydokb['charAt'](fi7nvl + 0x3)) {
                var tydokb = ydokb['indexOf']('-->', fi7nvl + 0x4);
                return tydokb > fi7nvl ? (f6gp4['comment'](ydokb, fi7nvl + 0x4, tydokb - fi7nvl - 0x4), tydokb + 0x3) : (_8bk['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == ydokb['substr'](fi7nvl + 0x3, 0x6)) {
                var tydokb = ydokb['indexOf'](']]>', fi7nvl + 0x9);
                return f6gp4['startCDATA'](), f6gp4['characters'](ydokb, fi7nvl + 0x9, tydokb - fi7nvl - 0x9), f6gp4['endCDATA'](), tydokb + 0x3;
            }
            var b528r_ = ztkdyo(ydokb, fi7nvl),
                a19sxh = b528r_['length'];
            if (a19sxh > 0x1 && /!doctype/i['test'](b528r_[0x0][0x0])) {
                var n64vlf = b528r_[0x1][0x0],
                    pgh6f = a19sxh > 0x3 && /^public$/i['test'](b528r_[0x2][0x0]) && b528r_[0x3][0x0],
                    saze9x = a19sxh > 0x4 && b528r_[0x4][0x0],
                    otyedz = b528r_[a19sxh - 0x1];
                return f6gp4['startDTD'](n64vlf, pgh6f && pgh6f['replace'](/^(['"])(.*?)\1$/, '$2'), saze9x && saze9x['replace'](/^(['"])(.*?)\1$/, '$2')), f6gp4['endDTD'](), otyedz['index'] + otyedz[0x0]['length'];
            }
    }
    return -0x1;
}
function zlnf46(y8kbr_, eas19, n3q) {
    var sa9h1 = y8kbr_['indexOf']('?>', eas19);
    if (sa9h1) {
        var f6h = y8kbr_['substring'](eas19, sa9h1)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (f6h) {
            {
                f6h[0x0]['length'];
            }
            return n3q['processingInstruction'](f6h[0x1], f6h[0x2]), sa9h1 + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function zbky8() {}
function zlf7nvi(zsoaet, dozyet) {
    return zsoaet['__proto__'] = dozyet, zsoaet;
}
function ztkdyo(dzkyot, odytkb) {
    var adet,
        tdyezo = [],
        _u25rw = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (_u25rw['lastIndex'] = odytkb, _u25rw['exec'](dzkyot); adet = _u25rw['exec'](dzkyot);) if (tdyezo['push'](adet), adet[0x1]) return tdyezo;
}
var ztoezas = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    zx9as1e = new RegExp('[\\-\\.0-9' + ztoezas['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    zn7im3 = new RegExp('^' + ztoezas['source'] + zx9as1e['source'] + '*(?::' + ztoezas['source'] + zx9as1e['source'] + '*)?$'),
    zae9szx = 0x0,
    zvfnl64 = 0x1,
    zxae = 0x2,
    zu52 = 0x3,
    zr2u58_ = 0x4,
    zzsaex9 = 0x5,
    zsezto = 0x6,
    zi3nl7m = 0x7;
zsxh9a1['prototype'] = {
    'parse': function (q$73im, qim$37, p4fv) {
        var b_5r8k = this['domBuilder'];
        b_5r8k['startDocument'](), zsxz9ae(qim$37, qim$37 = {}), zzetao(q$73im, qim$37, p4fv, b_5r8k, this['errorHandler']), b_5r8k['endDocument']();
    }
}, zbky8['prototype'] = {
    'setTagName': function (zexast) {
        if (!zn7im3['test'](zexast)) throw new Error('invalid tagName:' + zexast);
        this['tagName'] = zexast;
    },
    'add': function (yzodet, l7mni3, atzes) {
        if (!zn7im3['test'](yzodet)) throw new Error('invalid attribute:' + yzodet);
        this[this['length']++] = {
            'qName': yzodet,
            'value': l7mni3,
            'offset': atzes
        };
    },
    'length': 0x0,
    'getLocalName': function (_u25r) {
        return this[_u25r]['localName'];
    },
    'getLocator': function (pgx1h9) {
        return this[pgx1h9]['locator'];
    },
    'getQName': function (oeastz) {
        return this[oeastz]['qName'];
    },
    'getURI': function (b_k8r) {
        return this[b_k8r]['uri'];
    },
    'getValue': function (dyoktz) {
        return this[dyoktz]['value'];
    }
}, zlf7nvi({}, zlf7nvi['prototype']) instanceof zlf7nvi || (zlf7nvi = function (otaes, as19ex) {
    function dtoey() {}
    dtoey['prototype'] = as19ex, dtoey = new dtoey();
    for (as19ex in otaes) dtoey[as19ex] = otaes[as19ex];
    return dtoey;
}), exports['XMLReader'] = zsxh9a1;