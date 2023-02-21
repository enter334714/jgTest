var b = wx.$e;
function egjfk4() {}
function etj$kgf(lqvish, hi, p9omzd, sqihlv, h08s) {
    function x$omp2(q38) {
        if (q38 > 0xffff) {
            q38 -= 0x10000;
            var tawk = 0xd800 + (q38 >> 0xa),
                gtawe = 0xdc00 + (0x3ff & q38);
            return String['fromCharCode'](tawk, gtawe);
        }
        return String['fromCharCode'](q38);
    }
    function gewat(m$o2p) {
        var ql8sh6 = m$o2p['slice'](0x1, -0x1);
        return ql8sh6 in p9omzd ? p9omzd[ql8sh6] : '#' === ql8sh6['charAt'](0x0) ? x$omp2(parseInt(ql8sh6['substr'](0x1)['replace']('x', '0x'))) : (h08s['error']('entity not found:' + m$o2p), m$o2p);
    }
    function m2p$o(vweb4a) {
        if (vweb4a > tkf) {
            var c075y = lqvish['substring'](tkf, vweb4a)['replace'](/&#?\w+;/g, gewat);
            gwae4t && leviqb(tkf), sqihlv['characters'](c075y, 0x0, vweb4a - tkf), tkf = vweb4a;
        }
    }
    function leviqb(x2j$, k4wa) {
        for (; x2j$ >= z1od && (k4wa = le['exec'](lqvish));) ncyr7 = k4wa['index'], z1od = ncyr7 + k4wa[0x0]['length'], gwae4t['lineNumber']++;
        gwae4t['columnNumber'] = x2j$ - ncyr7 + 0x1;
    }
    for (var ncyr7 = 0x0, z1od = 0x0, le = /.*(?:\r\n?|\n)|.*$/g, gwae4t = sqihlv['locator'], gkfj4t = [{ 'currentNSMap': hi }], poxj2 = {}, tkf = 0x0;;) {
        try {
            var eivabw = lqvish['indexOf']('<', tkf);
            if (0x0 > eivabw) {
                if (!lqvish['substr'](tkf)['match'](/^\s*$/)) {
                    var q836sh = sqihlv['doc'],
                        belv = q836sh['createTextNode'](lqvish['substr'](tkf));
                    q836sh['appendChild'](belv), sqihlv['currentElement'] = belv;
                }
                return;
            }
            switch (eivabw > tkf && m2p$o(eivabw), lqvish['charAt'](eivabw + 0x1)) {
                case '/':
                    var mzodx = lqvish['indexOf']('>', eivabw + 0x3),
                        k$fgt = lqvish['substring'](eivabw + 0x2, mzodx),
                        wivbel = gkfj4t['pop']();
                    0x0 > mzodx ? (k$fgt = lqvish['substring'](eivabw + 0x2)['replace'](/[\s<].*/, ''), h08s['error']('end tag name: ' + k$fgt + ' is not complete:' + wivbel['tagName']), mzodx = eivabw + 0x1 + k$fgt['length']) : k$fgt['match'](/\s</) && (k$fgt = k$fgt['replace'](/[\s<].*/, ''), h08s['error']('end tag name: ' + k$fgt + ' maybe not complete'), mzodx = eivabw + 0x1 + k$fgt['length']);
                    var _7y5nc = wivbel['localNSMap'],
                        t4kgjf = wivbel['tagName'] == k$fgt,
                        wkga = t4kgjf || wivbel['tagName'] && wivbel['tagName']['toLowerCase']() == k$fgt['toLowerCase']();
                    if (wkga) {
                        if (sqihlv['endElement'](wivbel['uri'], wivbel['localName'], k$fgt), _7y5nc) {
                            for (var vlshi in _7y5nc) sqihlv['endPrefixMapping'](vlshi);
                        }
                        t4kgjf || h08s['fatalError']('end tag name: ' + k$fgt + ' is not match the current start tagName:' + wivbel['tagName']);
                    } else gkfj4t['push'](wivbel);
                    mzodx++;
                    break;
                case '?':
                    gwae4t && leviqb(eivabw), mzodx = eqlvs(lqvish, eivabw, sqihlv);
                    break;
                case '!':
                    gwae4t && leviqb(eivabw), mzodx = epxoz2m(lqvish, eivabw, sqihlv, h08s);
                    break;
                default:
                    gwae4t && leviqb(eivabw);
                    var kaf = new eqhvil(),
                        ozmd9 = gkfj4t[gkfj4t['length'] - 0x1]['currentNSMap'],
                        mzodx = eaeb4wv(lqvish, eivabw, kaf, ozmd9, gewat, h08s),
                        tkfj$2 = kaf['length'];
                    if (!kaf['closed'] && eh8s6lq(lqvish, mzodx, kaf['tagName'], poxj2) && (kaf['closed'] = !0x0, p9omzd['nbsp'] || h08s['warning']('unclosed xml attribute')), gwae4t && tkfj$2) {
                        for (var jgt$ = eomx2$p(gwae4t, {}), $pjf2x = 0x0; tkfj$2 > $pjf2x; $pjf2x++) {
                            var fx2pj$ = kaf[$pjf2x];
                            leviqb(fx2pj$['offset']), fx2pj$['locator'] = eomx2$p(gwae4t, {});
                        }
                        sqihlv['locator'] = jgt$, eyn7c_5(kaf, sqihlv, ozmd9) && gkfj4t['push'](kaf), sqihlv['locator'] = gwae4t;
                    } else eyn7c_5(kaf, sqihlv, ozmd9) && gkfj4t['push'](kaf);
                    'http://www.w3.org/1999/xhtml' !== kaf['uri'] || kaf['closed'] ? mzodx++ : mzodx = eyr087(lqvish, mzodx, kaf['tagName'], gewat, sqihlv);
            }
        } catch (ibvelw) {
            h08s['error']('element parse error: ' + ibvelw), mzodx = -0x1;
        }
        mzodx > tkf ? tkf = mzodx : m2p$o(Math['max'](eivabw, tkf) + 0x1);
    }
}
function eomx2$p(gweba, moz) {
    return moz['lineNumber'] = gweba['lineNumber'], moz['columnNumber'] = gweba['columnNumber'], moz;
}
function eaeb4wv(iblvew, oxzdmp, $jop2x, h63s08, wae4vb, n_75y) {
    for (var _7nc, omzd, e4watg = ++oxzdmp, ynr75 = ex2jp$f;;) {
        var blhi = iblvew['charAt'](e4watg);
        switch (blhi) {
            case '=':
                if (ynr75 === ejxf$2) _7nc = iblvew['slice'](oxzdmp, e4watg), ynr75 = eevli;else {
                    if (ynr75 !== e$x2pj) throw new Error('attribute equal must after attrName');
                    ynr75 = eevli;
                }
                break;
            case '\x27':
            case '\x22':
                if (ynr75 === eevli || ynr75 === ejxf$2) {
                    if (ynr75 === ejxf$2 && (n_75y['warning']('attribute value must after "="'), _7nc = iblvew['slice'](oxzdmp, e4watg)), oxzdmp = e4watg + 0x1, e4watg = iblvew['indexOf'](blhi, oxzdmp), !(e4watg > 0x0)) throw new Error('attribute value no end \'' + blhi + '\' match');
                    omzd = iblvew['slice'](oxzdmp, e4watg)['replace'](/&#?\w+;/g, wae4vb), $jop2x['add'](_7nc, omzd, oxzdmp - 0x1), ynr75 = e_y7n5c;
                } else {
                    if (ynr75 != epxmodz) throw new Error('attribute value must after "="');
                    omzd = iblvew['slice'](oxzdmp, e4watg)['replace'](/&#?\w+;/g, wae4vb), $jop2x['add'](_7nc, omzd, oxzdmp), n_75y['warning']('attribute "' + _7nc + '" missed start quot(' + blhi + ')!!'), oxzdmp = e4watg + 0x1, ynr75 = e_y7n5c;
                }
                break;
            case '/':
                switch (ynr75) {
                    case ex2jp$f:
                        $jop2x['setTagName'](iblvew['slice'](oxzdmp, e4watg));
                    case e_y7n5c:
                    case er07yc5:
                    case ezo2mp:
                        ynr75 = ezo2mp, $jop2x['closed'] = !0x0;
                    case epxmodz:
                    case ejxf$2:
                    case e$x2pj:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return n_75y['error']('unexpected end of input'), ynr75 == ex2jp$f && $jop2x['setTagName'](iblvew['slice'](oxzdmp, e4watg)), e4watg;
            case '>':
                switch (ynr75) {
                    case ex2jp$f:
                        $jop2x['setTagName'](iblvew['slice'](oxzdmp, e4watg));
                    case e_y7n5c:
                    case er07yc5:
                    case ezo2mp:
                        break;
                    case epxmodz:
                    case ejxf$2:
                        omzd = iblvew['slice'](oxzdmp, e4watg), '/' === omzd['slice'](-0x1) && ($jop2x['closed'] = !0x0, omzd = omzd['slice'](0x0, -0x1));
                    case e$x2pj:
                        ynr75 === e$x2pj && (omzd = _7nc), ynr75 == epxmodz ? (n_75y['warning']('attribute "' + omzd + '" missed quot(")!!'), $jop2x['add'](_7nc, omzd['replace'](/&#?\w+;/g, wae4vb), oxzdmp)) : ('http://www.w3.org/1999/xhtml' === h63s08[''] && omzd['match'](/^(?:disabled|checked|selected)$/i) || n_75y['warning']('attribute "' + omzd + '" missed value!! "' + omzd + '" instead!!'), $jop2x['add'](omzd, omzd, oxzdmp));
                        break;
                    case eevli:
                        throw new Error('attribute value missed!!');
                }
                return e4watg;
            case '\u0080':
                blhi = '\x20';
            default:
                if ('\x20' >= blhi) switch (ynr75) {
                    case ex2jp$f:
                        $jop2x['setTagName'](iblvew['slice'](oxzdmp, e4watg)), ynr75 = er07yc5;
                        break;
                    case ejxf$2:
                        _7nc = iblvew['slice'](oxzdmp, e4watg), ynr75 = e$x2pj;
                        break;
                    case epxmodz:
                        var omzd = iblvew['slice'](oxzdmp, e4watg)['replace'](/&#?\w+;/g, wae4vb);
                        n_75y['warning']('attribute "' + omzd + '" missed quot(")!!'), $jop2x['add'](_7nc, omzd, oxzdmp);
                    case e_y7n5c:
                        ynr75 = er07yc5;
                } else switch (ynr75) {
                    case e$x2pj:
                        {
                            $jop2x['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === h63s08[''] && _7nc['match'](/^(?:disabled|checked|selected)$/i) || n_75y['warning']('attribute "' + _7nc + '" missed value!! "' + _7nc + '" instead2!!'), $jop2x['add'](_7nc, _7nc, oxzdmp), oxzdmp = e4watg, ynr75 = ejxf$2;
                        break;
                    case e_y7n5c:
                        n_75y['warning']('attribute space is required"' + _7nc + '\x22!!');
                    case er07yc5:
                        ynr75 = ejxf$2, oxzdmp = e4watg;
                        break;
                    case eevli:
                        ynr75 = epxmodz, oxzdmp = e4watg;
                        break;
                    case ezo2mp:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        e4watg++;
    }
}
function eyn7c_5(ewvi, kfga, opj$) {
    for (var qli6sh = ewvi['tagName'], o9mzd = null, l6hs8q = ewvi['length']; l6hs8q--;) {
        var r08s = ewvi[l6hs8q],
            y7r3 = r08s['qName'],
            ta4kfg = r08s['value'],
            a4wveb = y7r3['indexOf'](':');
        if (a4wveb > 0x0) var mzo2 = r08s['prefix'] = y7r3['slice'](0x0, a4wveb),
            bvwa = y7r3['slice'](a4wveb + 0x1),
            lvhbi = 'xmlns' === mzo2 && bvwa;else bvwa = y7r3, mzo2 = null, lvhbi = 'xmlns' === y7r3 && '';
        r08s['localName'] = bvwa, lvhbi !== !0x1 && (null == o9mzd && (o9mzd = {}, esqhl68(opj$, opj$ = {})), opj$[lvhbi] = o9mzd[lvhbi] = ta4kfg, r08s['uri'] = 'http://www.w3.org/2000/xmlns/', kfga['startPrefixMapping'](lvhbi, ta4kfg));
    }
    for (var l6hs8q = ewvi['length']; l6hs8q--;) {
        r08s = ewvi[l6hs8q];
        var mzo2 = r08s['prefix'];
        mzo2 && ('xml' === mzo2 && (r08s['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== mzo2 && (r08s['uri'] = opj$[mzo2 || '']));
    }
    var a4wveb = qli6sh['indexOf'](':');
    a4wveb > 0x0 ? (mzo2 = ewvi['prefix'] = qli6sh['slice'](0x0, a4wveb), bvwa = ewvi['localName'] = qli6sh['slice'](a4wveb + 0x1)) : (mzo2 = null, bvwa = ewvi['localName'] = qli6sh);
    var kaf4t = ewvi['uri'] = opj$[mzo2 || ''];
    if (kfga['startElement'](kaf4t, bvwa, qli6sh, ewvi), !ewvi['closed']) return ewvi['currentNSMap'] = opj$, ewvi['localNSMap'] = o9mzd, !0x0;
    if (kfga['endElement'](kaf4t, bvwa, qli6sh), o9mzd) {
        for (mzo2 in o9mzd) kfga['endPrefixMapping'](mzo2);
    }
}
function eyr087(eba4vw, a4tgkw, p9mdzo, zp2ox, qvbeli) {
    if (/^(?:script|textarea)$/i['test'](p9mdzo)) {
        var s3h8 = eba4vw['indexOf']('</' + p9mdzo + '>', a4tgkw),
            fx$pj2 = eba4vw['substring'](a4tgkw + 0x1, s3h8);
        if (/[&<]/['test'](fx$pj2)) return (/^script$/i['test'](p9mdzo) ? (qvbeli['characters'](fx$pj2, 0x0, fx$pj2['length']), s3h8) : (fx$pj2 = fx$pj2['replace'](/&#?\w+;/g, zp2ox), qvbeli['characters'](fx$pj2, 0x0, fx$pj2['length']), s3h8)
        );
    }
    return a4tgkw + 0x1;
}
function eh8s6lq(zudm, r8306s, du9zm1, h6s8) {
    var wag4b = h6s8[du9zm1];
    return null == wag4b && (wag4b = zudm['lastIndexOf']('</' + du9zm1 + '>'), r8306s > wag4b && (wag4b = zudm['lastIndexOf']('</' + du9zm1)), h6s8[du9zm1] = wag4b), r8306s > wag4b;
}
function esqhl68(dzo9mp, akwt) {
    for (var gt4ea in dzo9mp) akwt[gt4ea] = dzo9mp[gt4ea];
}
function epxoz2m(yc7_, hqb, po2zxm, bvei) {
    var wagbe4 = yc7_['charAt'](hqb + 0x2);
    switch (wagbe4) {
        case '-':
            if ('-' === yc7_['charAt'](hqb + 0x3)) {
                var leibqv = yc7_['indexOf']('-->', hqb + 0x4);
                return leibqv > hqb ? (po2zxm['comment'](yc7_, hqb + 0x4, leibqv - hqb - 0x4), leibqv + 0x3) : (bvei['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == yc7_['substr'](hqb + 0x3, 0x6)) {
                var leibqv = yc7_['indexOf'](']]>', hqb + 0x9);
                return po2zxm['startCDATA'](), po2zxm['characters'](yc7_, hqb + 0x9, leibqv - hqb - 0x9), po2zxm['endCDATA'](), leibqv + 0x3;
            }
            var tjk2$f = er637(yc7_, hqb),
                h3s068 = tjk2$f['length'];
            if (h3s068 > 0x1 && /!doctype/i['test'](tjk2$f[0x0][0x0])) {
                var ihsvlq = tjk2$f[0x1][0x0],
                    qlbev = h3s068 > 0x3 && /^public$/i['test'](tjk2$f[0x2][0x0]) && tjk2$f[0x3][0x0],
                    jgk4t = h3s068 > 0x4 && tjk2$f[0x4][0x0],
                    nyc7r = tjk2$f[h3s068 - 0x1];
                return po2zxm['startDTD'](ihsvlq, qlbev && qlbev['replace'](/^(['"])(.*?)\1$/, '$2'), jgk4t && jgk4t['replace'](/^(['"])(.*?)\1$/, '$2')), po2zxm['endDTD'](), nyc7r['index'] + nyc7r[0x0]['length'];
            }
    }
    return -0x1;
}
function eqlvs(f$kjt, shlvi, qlvish) {
    var domxpz = f$kjt['indexOf']('?>', shlvi);
    if (domxpz) {
        var vlhqbi = f$kjt['substring'](shlvi, domxpz)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (vlhqbi) {
            {
                vlhqbi[0x0]['length'];
            }
            return qlvish['processingInstruction'](vlhqbi[0x1], vlhqbi[0x2]), domxpz + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function eqhvil() {}
function etwaeg(f2x$p, r0y7c5) {
    return f2x$p['__proto__'] = r0y7c5, f2x$p;
}
function er637(ievqbl, pjx$) {
    var xmzpo,
        pzxo2m = [],
        eiavb = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (eiavb['lastIndex'] = pjx$, eiavb['exec'](ievqbl); xmzpo = eiavb['exec'](ievqbl);) if (pzxo2m['push'](xmzpo), xmzpo[0x1]) return pzxo2m;
}
var eyc05r7 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    eabvi = new RegExp('[\\-\\.0-9' + eyc05r7['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    eodxpmz = new RegExp('^' + eyc05r7['source'] + eabvi['source'] + '*(?::' + eyc05r7['source'] + eabvi['source'] + '*)?$'),
    ex2jp$f = 0x0,
    ejxf$2 = 0x1,
    e$x2pj = 0x2,
    eevli = 0x3,
    epxmodz = 0x4,
    e_y7n5c = 0x5,
    er07yc5 = 0x6,
    ezo2mp = 0x7;
egjfk4['prototype'] = {
    'parse': function (zm1, zum9d, gw4atk) {
        var om19 = this['domBuilder'];
        om19['startDocument'](), esqhl68(zum9d, zum9d = {}), etj$kgf(zm1, zum9d, gw4atk, om19, this['errorHandler']), om19['endDocument']();
    }
}, eqhvil['prototype'] = {
    'setTagName': function (ozmd1) {
        if (!eodxpmz['test'](ozmd1)) throw new Error('invalid tagName:' + ozmd1);
        this['tagName'] = ozmd1;
    },
    'add': function (eilvw, wlvi, cy5r7n) {
        if (!eodxpmz['test'](eilvw)) throw new Error('invalid attribute:' + eilvw);
        this[this['length']++] = {
            'qName': eilvw,
            'value': wlvi,
            'offset': cy5r7n
        };
    },
    'length': 0x0,
    'getLocalName': function (eilv) {
        return this[eilv]['localName'];
    },
    'getLocator': function (ga4we) {
        return this[ga4we]['locator'];
    },
    'getQName': function (y3r087) {
        return this[y3r087]['qName'];
    },
    'getURI': function (evbiq) {
        return this[evbiq]['uri'];
    },
    'getValue': function (wbea4) {
        return this[wbea4]['value'];
    }
}, etwaeg({}, etwaeg['prototype']) instanceof etwaeg || (etwaeg = function (fgtk4, hq6s8l) {
    function pozdx() {}
    pozdx['prototype'] = hq6s8l, pozdx = new pozdx();
    for (hq6s8l in fgtk4) pozdx[hq6s8l] = fgtk4[hq6s8l];
    return pozdx;
}), exports['XMLReader'] = egjfk4;