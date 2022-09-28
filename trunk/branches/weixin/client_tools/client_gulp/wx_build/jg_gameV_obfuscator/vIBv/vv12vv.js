var Q = wx.$v;
function vpb_9z() {}
function vd0926p(qgjs8x, wrvkx, d6b29, pd6920, fz_7o) {
    function r3vkwt(qjtg8) {
        if (qjtg8 > 0xffff) {
            qjtg8 -= 0x10000;
            var c$iun1 = 0xd800 + (qjtg8 >> 0xa),
                jxgq8t = 0xdc00 + (0x3ff & qjtg8);
            return String['fromCharCode'](c$iun1, jxgq8t);
        }
        return String['fromCharCode'](qjtg8);
    }
    function lm$hcy(b2p9) {
        var jxqs8g = b2p9['slice'](0x1, -0x1);
        return jxqs8g in d6b29 ? d6b29[jxqs8g] : '#' === jxqs8g['charAt'](0x0) ? r3vkwt(parseInt(jxqs8g['substr'](0x1)['replace']('x', '0x'))) : (fz_7o['error']('entity not found:' + b2p9), b2p9);
    }
    function uci1$y(iund0) {
        if (iund0 > i1nu0c) {
            var m1yc = qgjs8x['substring'](i1nu0c, iund0)['replace'](/&#?\w+;/g, lm$hcy);
            foz_5b && h3my$(i1nu0c), pd6920['characters'](m1yc, 0x0, iund0 - i1nu0c), i1nu0c = iund0;
        }
    }
    function h3my$(_75efo, txrqk) {
        for (; _75efo >= y1imc$ && (txrqk = wkv3h['exec'](qgjs8x));) z69_ = txrqk['index'], y1imc$ = z69_ + txrqk[0x0]['length'], foz_5b['lineNumber']++;
        foz_5b['columnNumber'] = _75efo - z69_ + 0x1;
    }
    for (var z69_ = 0x0, y1imc$ = 0x0, wkv3h = /.*(?:\r\n?|\n)|.*$/g, foz_5b = pd6920['locator'], $l3hmy = [{ 'currentNSMap': wrvkx }], u$i1n = {}, i1nu0c = 0x0;;) {
        try {
            var wkvtx = qgjs8x['indexOf']('<', i1nu0c);
            if (0x0 > wkvtx) {
                if (!qgjs8x['substr'](i1nu0c)['match'](/^\s*$/)) {
                    var l3yvmh = pd6920['doc'],
                        cin0 = l3yvmh['createTextNode'](qgjs8x['substr'](i1nu0c));
                    l3yvmh['appendChild'](cin0), pd6920['currentElement'] = cin0;
                }
                return;
            }
            switch (wkvtx > i1nu0c && uci1$y(wkvtx), qgjs8x['charAt'](wkvtx + 0x1)) {
                case '/':
                    var rqjtxk = qgjs8x['indexOf']('>', wkvtx + 0x3),
                        $yl3hm = qgjs8x['substring'](wkvtx + 0x2, rqjtxk),
                        d96p2 = $l3hmy['pop']();
                    0x0 > rqjtxk ? ($yl3hm = qgjs8x['substring'](wkvtx + 0x2)['replace'](/[\s<].*/, ''), fz_7o['error']('end tag name: ' + $yl3hm + ' is not complete:' + d96p2['tagName']), rqjtxk = wkvtx + 0x1 + $yl3hm['length']) : $yl3hm['match'](/\s</) && ($yl3hm = $yl3hm['replace'](/[\s<].*/, ''), fz_7o['error']('end tag name: ' + $yl3hm + ' maybe not complete'), rqjtxk = wkvtx + 0x1 + $yl3hm['length']);
                    var d0un2 = d96p2['localNSMap'],
                        ycu$1 = d96p2['tagName'] == $yl3hm,
                        ymi = ycu$1 || d96p2['tagName'] && d96p2['tagName']['toLowerCase']() == $yl3hm['toLowerCase']();
                    if (ymi) {
                        if (pd6920['endElement'](d96p2['uri'], d96p2['localName'], $yl3hm), d0un2) {
                            for (var kl3wr in d0un2) pd6920['endPrefixMapping'](kl3wr);
                        }
                        ycu$1 || fz_7o['fatalError']('end tag name: ' + $yl3hm + ' is not match the current start tagName:' + d96p2['tagName']);
                    } else $l3hmy['push'](d96p2);
                    rqjtxk++;
                    break;
                case '?':
                    foz_5b && h3my$(wkvtx), rqjtxk = vkrxwtq(qgjs8x, wkvtx, pd6920);
                    break;
                case '!':
                    foz_5b && h3my$(wkvtx), rqjtxk = vpbd96z(qgjs8x, wkvtx, pd6920, fz_7o);
                    break;
                default:
                    foz_5b && h3my$(wkvtx);
                    var gjsx8q = new voe5f7a(),
                        $ymcl = $l3hmy[$l3hmy['length'] - 0x1]['currentNSMap'],
                        rqjtxk = vrxtkwq(qgjs8x, wkvtx, gjsx8q, $ymcl, lm$hcy, fz_7o),
                        bpz6d9 = gjsx8q['length'];
                    if (!gjsx8q['closed'] && vvy3hlm(qgjs8x, rqjtxk, gjsx8q['tagName'], u$i1n) && (gjsx8q['closed'] = !0x0, d6b29['nbsp'] || fz_7o['warning']('unclosed xml attribute')), foz_5b && bpz6d9) {
                        for (var xj8gqt = vaef75(foz_5b, {}), pd62b9 = 0x0; bpz6d9 > pd62b9; pd62b9++) {
                            var x8qsj = gjsx8q[pd62b9];
                            h3my$(x8qsj['offset']), x8qsj['locator'] = vaef75(foz_5b, {});
                        }
                        pd6920['locator'] = xj8gqt, vsg8qx(gjsx8q, pd6920, $ymcl) && $l3hmy['push'](gjsx8q), pd6920['locator'] = foz_5b;
                    } else vsg8qx(gjsx8q, pd6920, $ymcl) && $l3hmy['push'](gjsx8q);
                    'http://www.w3.org/1999/xhtml' !== gjsx8q['uri'] || gjsx8q['closed'] ? rqjtxk++ : rqjtxk = vu12i0n(qgjs8x, rqjtxk, gjsx8q['tagName'], lm$hcy, pd6920);
            }
        } catch (nu01i) {
            fz_7o['error']('element parse error: ' + nu01i), rqjtxk = -0x1;
        }
        rqjtxk > i1nu0c ? i1nu0c = rqjtxk : uci1$y(Math['max'](wkvtx, i1nu0c) + 0x1);
    }
}
function vaef75(cu$i1, xqjsg) {
    return xqjsg['lineNumber'] = cu$i1['lineNumber'], xqjsg['columnNumber'] = cu$i1['columnNumber'], xqjsg;
}
function vrxtkwq($cymh, vt3wkr, t8rxj, b6z5_, c$iym, h$y1m) {
    for (var yh1cm, xqrtj8, l3yvhm = ++vt3wkr, vwtrkx = vaf57eo;;) {
        var dpu2n = $cymh['charAt'](l3yvhm);
        switch (dpu2n) {
            case '=':
                if (vwtrkx === vzo6_9b) yh1cm = $cymh['slice'](vt3wkr, l3yvhm), vwtrkx = vy$1cm;else {
                    if (vwtrkx !== vqsgjx8) throw new Error('attribute equal must after attrName');
                    vwtrkx = vy$1cm;
                }
                break;
            case '\x27':
            case '\x22':
                if (vwtrkx === vy$1cm || vwtrkx === vzo6_9b) {
                    if (vwtrkx === vzo6_9b && (h$y1m['warning']('attribute value must after "="'), yh1cm = $cymh['slice'](vt3wkr, l3yvhm)), vt3wkr = l3yvhm + 0x1, l3yvhm = $cymh['indexOf'](dpu2n, vt3wkr), !(l3yvhm > 0x0)) throw new Error('attribute value no end \'' + dpu2n + '\' match');
                    xqrtj8 = $cymh['slice'](vt3wkr, l3yvhm)['replace'](/&#?\w+;/g, c$iym), t8rxj['add'](yh1cm, xqrtj8, vt3wkr - 0x1), vwtrkx = vuc1y$;
                } else {
                    if (vwtrkx != veao5f7) throw new Error('attribute value must after "="');
                    xqrtj8 = $cymh['slice'](vt3wkr, l3yvhm)['replace'](/&#?\w+;/g, c$iym), t8rxj['add'](yh1cm, xqrtj8, vt3wkr), h$y1m['warning']('attribute "' + yh1cm + '" missed start quot(' + dpu2n + ')!!'), vt3wkr = l3yvhm + 0x1, vwtrkx = vuc1y$;
                }
                break;
            case '/':
                switch (vwtrkx) {
                    case vaf57eo:
                        t8rxj['setTagName']($cymh['slice'](vt3wkr, l3yvhm));
                    case vuc1y$:
                    case vn10ci:
                    case vof7z:
                        vwtrkx = vof7z, t8rxj['closed'] = !0x0;
                    case veao5f7:
                    case vzo6_9b:
                    case vqsgjx8:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return h$y1m['error']('unexpected end of input'), vwtrkx == vaf57eo && t8rxj['setTagName']($cymh['slice'](vt3wkr, l3yvhm)), l3yvhm;
            case '>':
                switch (vwtrkx) {
                    case vaf57eo:
                        t8rxj['setTagName']($cymh['slice'](vt3wkr, l3yvhm));
                    case vuc1y$:
                    case vn10ci:
                    case vof7z:
                        break;
                    case veao5f7:
                    case vzo6_9b:
                        xqrtj8 = $cymh['slice'](vt3wkr, l3yvhm), '/' === xqrtj8['slice'](-0x1) && (t8rxj['closed'] = !0x0, xqrtj8 = xqrtj8['slice'](0x0, -0x1));
                    case vqsgjx8:
                        vwtrkx === vqsgjx8 && (xqrtj8 = yh1cm), vwtrkx == veao5f7 ? (h$y1m['warning']('attribute "' + xqrtj8 + '" missed quot(")!!'), t8rxj['add'](yh1cm, xqrtj8['replace'](/&#?\w+;/g, c$iym), vt3wkr)) : ('http://www.w3.org/1999/xhtml' === b6z5_[''] && xqrtj8['match'](/^(?:disabled|checked|selected)$/i) || h$y1m['warning']('attribute "' + xqrtj8 + '" missed value!! "' + xqrtj8 + '" instead!!'), t8rxj['add'](xqrtj8, xqrtj8, vt3wkr));
                        break;
                    case vy$1cm:
                        throw new Error('attribute value missed!!');
                }
                return l3yvhm;
            case '\u0080':
                dpu2n = '\x20';
            default:
                if ('\x20' >= dpu2n) switch (vwtrkx) {
                    case vaf57eo:
                        t8rxj['setTagName']($cymh['slice'](vt3wkr, l3yvhm)), vwtrkx = vn10ci;
                        break;
                    case vzo6_9b:
                        yh1cm = $cymh['slice'](vt3wkr, l3yvhm), vwtrkx = vqsgjx8;
                        break;
                    case veao5f7:
                        var xqrtj8 = $cymh['slice'](vt3wkr, l3yvhm)['replace'](/&#?\w+;/g, c$iym);
                        h$y1m['warning']('attribute "' + xqrtj8 + '" missed quot(")!!'), t8rxj['add'](yh1cm, xqrtj8, vt3wkr);
                    case vuc1y$:
                        vwtrkx = vn10ci;
                } else switch (vwtrkx) {
                    case vqsgjx8:
                        {
                            t8rxj['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === b6z5_[''] && yh1cm['match'](/^(?:disabled|checked|selected)$/i) || h$y1m['warning']('attribute "' + yh1cm + '" missed value!! "' + yh1cm + '" instead2!!'), t8rxj['add'](yh1cm, yh1cm, vt3wkr), vt3wkr = l3yvhm, vwtrkx = vzo6_9b;
                        break;
                    case vuc1y$:
                        h$y1m['warning']('attribute space is required"' + yh1cm + '\x22!!');
                    case vn10ci:
                        vwtrkx = vzo6_9b, vt3wkr = l3yvhm;
                        break;
                    case vy$1cm:
                        vwtrkx = veao5f7, vt3wkr = l3yvhm;
                        break;
                    case vof7z:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        l3yvhm++;
    }
}
function vsg8qx(p0n2u, ozb56_, cu$n1i) {
    for (var bp692 = p0n2u['tagName'], xjqt8r = null, a75e = p0n2u['length']; a75e--;) {
        var p6zb_9 = p0n2u[a75e],
            gt8jq = p6zb_9['qName'],
            aeo75f = p6zb_9['value'],
            vtwr3 = gt8jq['indexOf'](':');
        if (vtwr3 > 0x0) var wl3m = p6zb_9['prefix'] = gt8jq['slice'](0x0, vtwr3),
            qj8gsx = gt8jq['slice'](vtwr3 + 0x1),
            p6b2 = 'xmlns' === wl3m && qj8gsx;else qj8gsx = gt8jq, wl3m = null, p6b2 = 'xmlns' === gt8jq && '';
        p6zb_9['localName'] = qj8gsx, p6b2 !== !0x1 && (null == xjqt8r && (xjqt8r = {}, va5fo(cu$n1i, cu$n1i = {})), cu$n1i[p6b2] = xjqt8r[p6b2] = aeo75f, p6zb_9['uri'] = 'http://www.w3.org/2000/xmlns/', ozb56_['startPrefixMapping'](p6b2, aeo75f));
    }
    for (var a75e = p0n2u['length']; a75e--;) {
        p6zb_9 = p0n2u[a75e];
        var wl3m = p6zb_9['prefix'];
        wl3m && ('xml' === wl3m && (p6zb_9['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== wl3m && (p6zb_9['uri'] = cu$n1i[wl3m || '']));
    }
    var vtwr3 = bp692['indexOf'](':');
    vtwr3 > 0x0 ? (wl3m = p0n2u['prefix'] = bp692['slice'](0x0, vtwr3), qj8gsx = p0n2u['localName'] = bp692['slice'](vtwr3 + 0x1)) : (wl3m = null, qj8gsx = p0n2u['localName'] = bp692);
    var jqtr8x = p0n2u['uri'] = cu$n1i[wl3m || ''];
    if (ozb56_['startElement'](jqtr8x, qj8gsx, bp692, p0n2u), !p0n2u['closed']) return p0n2u['currentNSMap'] = cu$n1i, p0n2u['localNSMap'] = xjqt8r, !0x0;
    if (ozb56_['endElement'](jqtr8x, qj8gsx, bp692), xjqt8r) {
        for (wl3m in xjqt8r) ozb56_['endPrefixMapping'](wl3m);
    }
}
function vu12i0n(upn2d0, fe57_, zob5_, lym, cn01iu) {
    if (/^(?:script|textarea)$/i['test'](zob5_)) {
        var _zbf = upn2d0['indexOf']('</' + zob5_ + '>', fe57_),
            nd02iu = upn2d0['substring'](fe57_ + 0x1, _zbf);
        if (/[&<]/['test'](nd02iu)) return (/^script$/i['test'](zob5_) ? (cn01iu['characters'](nd02iu, 0x0, nd02iu['length']), _zbf) : (nd02iu = nd02iu['replace'](/&#?\w+;/g, lym), cn01iu['characters'](nd02iu, 0x0, nd02iu['length']), _zbf)
        );
    }
    return fe57_ + 0x1;
}
function vvy3hlm(kwtqx, _zo57f, rxktvw, $cuin1) {
    var p9bd6z = $cuin1[rxktvw];
    return null == p9bd6z && (p9bd6z = kwtqx['lastIndexOf']('</' + rxktvw + '>'), _zo57f > p9bd6z && (p9bd6z = kwtqx['lastIndexOf']('</' + rxktvw)), $cuin1[rxktvw] = p9bd6z), _zo57f > p9bd6z;
}
function va5fo(rwl, hy3l$m) {
    for (var h3ly in rwl) hy3l$m[h3ly] = rwl[h3ly];
}
function vpbd96z(iy$uc, d2bp69, gjsq8x, udnp20) {
    var cyh$ml = iy$uc['charAt'](d2bp69 + 0x2);
    switch (cyh$ml) {
        case '-':
            if ('-' === iy$uc['charAt'](d2bp69 + 0x3)) {
                var sx8qgj = iy$uc['indexOf']('-->', d2bp69 + 0x4);
                return sx8qgj > d2bp69 ? (gjsq8x['comment'](iy$uc, d2bp69 + 0x4, sx8qgj - d2bp69 - 0x4), sx8qgj + 0x3) : (udnp20['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == iy$uc['substr'](d2bp69 + 0x3, 0x6)) {
                var sx8qgj = iy$uc['indexOf'](']]>', d2bp69 + 0x9);
                return gjsq8x['startCDATA'](), gjsq8x['characters'](iy$uc, d2bp69 + 0x9, sx8qgj - d2bp69 - 0x9), gjsq8x['endCDATA'](), sx8qgj + 0x3;
            }
            var o5b = vmh$yl(iy$uc, d2bp69),
                lyhcm = o5b['length'];
            if (lyhcm > 0x1 && /!doctype/i['test'](o5b[0x0][0x0])) {
                var hm$c1y = o5b[0x1][0x0],
                    bf_o5z = lyhcm > 0x3 && /^public$/i['test'](o5b[0x2][0x0]) && o5b[0x3][0x0],
                    icu$n1 = lyhcm > 0x4 && o5b[0x4][0x0],
                    rwvt3k = o5b[lyhcm - 0x1];
                return gjsq8x['startDTD'](hm$c1y, bf_o5z && bf_o5z['replace'](/^(['"])(.*?)\1$/, '$2'), icu$n1 && icu$n1['replace'](/^(['"])(.*?)\1$/, '$2')), gjsq8x['endDTD'](), rwvt3k['index'] + rwvt3k[0x0]['length'];
            }
    }
    return -0x1;
}
function vkrxwtq(ui2d0, whk3vl, kvlh3) {
    var $cmhyl = ui2d0['indexOf']('?>', whk3vl);
    if ($cmhyl) {
        var hv3k = ui2d0['substring'](whk3vl, $cmhyl)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (hv3k) {
            {
                hv3k[0x0]['length'];
            }
            return kvlh3['processingInstruction'](hv3k[0x1], hv3k[0x2]), $cmhyl + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function voe5f7a() {}
function vx8tq(_bz96, iucn01) {
    return _bz96['__proto__'] = iucn01, _bz96;
}
function vmh$yl(wvh, _6b9zp) {
    var d9p20n,
        p2d = [],
        uyi1c$ = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (uyi1c$['lastIndex'] = _6b9zp, uyi1c$['exec'](wvh); d9p20n = uyi1c$['exec'](wvh);) if (p2d['push'](d9p20n), d9p20n[0x1]) return p2d;
}
var vyhm3l = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    vp_b6z9 = new RegExp('[\\-\\.0-9' + vyhm3l['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    vk3lwv = new RegExp('^' + vyhm3l['source'] + vp_b6z9['source'] + '*(?::' + vyhm3l['source'] + vp_b6z9['source'] + '*)?$'),
    vaf57eo = 0x0,
    vzo6_9b = 0x1,
    vqsgjx8 = 0x2,
    vy$1cm = 0x3,
    veao5f7 = 0x4,
    vuc1y$ = 0x5,
    vn10ci = 0x6,
    vof7z = 0x7;
vpb_9z['prototype'] = {
    'parse': function (gjs8, k3rvwl, oaef57) {
        var zbd = this['domBuilder'];
        zbd['startDocument'](), va5fo(k3rvwl, k3rvwl = {}), vd0926p(gjs8, k3rvwl, oaef57, zbd, this['errorHandler']), zbd['endDocument']();
    }
}, voe5f7a['prototype'] = {
    'setTagName': function (db96zp) {
        if (!vk3lwv['test'](db96zp)) throw new Error('invalid tagName:' + db96zp);
        this['tagName'] = db96zp;
    },
    'add': function (hc1$my, z6b_p, xsgjq8) {
        if (!vk3lwv['test'](hc1$my)) throw new Error('invalid attribute:' + hc1$my);
        this[this['length']++] = {
            'qName': hc1$my,
            'value': z6b_p,
            'offset': xsgjq8
        };
    },
    'length': 0x0,
    'getLocalName': function (n0i12) {
        return this[n0i12]['localName'];
    },
    'getLocator': function (wtxqk) {
        return this[wtxqk]['locator'];
    },
    'getQName': function (_69o) {
        return this[_69o]['qName'];
    },
    'getURI': function (tvkrx) {
        return this[tvkrx]['uri'];
    },
    'getValue': function (yh3v) {
        return this[yh3v]['value'];
    }
}, vx8tq({}, vx8tq['prototype']) instanceof vx8tq || (vx8tq = function (z5_o6b, trvwk) {
    function m$hc() {}
    m$hc['prototype'] = trvwk, m$hc = new m$hc();
    for (trvwk in z5_o6b) m$hc[trvwk] = z5_o6b[trvwk];
    return m$hc;
}), exports['XMLReader'] = vpb_9z;