var J = wx.h$;
function g$4wyjl() {}
function gn802br(vi, lg4y6, dmp_c, mtgp5, z3xus) {
    function n32h(coe_dk) {
        if (coe_dk > 0xffff) {
            coe_dk -= 0x10000;
            var oeqak = 0xd800 + (coe_dk >> 0xa),
                _kdoce = 0xdc00 + (0x3ff & coe_dk);
            return String['fromCharCode'](oeqak, _kdoce);
        }
        return String['fromCharCode'](coe_dk);
    }
    function dco_(br81) {
        var jl$yw4 = br81['slice'](0x1, -0x1);
        return jl$yw4 in dmp_c ? dmp_c[jl$yw4] : '#' === jl$yw4['charAt'](0x0) ? n32h(parseInt(jl$yw4['substr'](0x1)['replace']('x', '0x'))) : (z3xus['error']('entity not found:' + br81), br81);
    }
    function wj4i$v(t5f9gp) {
        if (t5f9gp > s3zu7) {
            var ec_oak = vi['substring'](s3zu7, t5f9gp)['replace'](/&#?\w+;/g, dco_);
            dcmp59 && tfy65(s3zu7), mtgp5['characters'](ec_oak, 0x0, t5f9gp - s3zu7), s3zu7 = t5f9gp;
        }
    }
    function tfy65(a_kq1, rb80n) {
        for (; a_kq1 >= eoqk_ && (rb80n = n32hu['exec'](vi));) jyf6l4 = rb80n['index'], eoqk_ = jyf6l4 + rb80n[0x0]['length'], dcmp59['lineNumber']++;
        dcmp59['columnNumber'] = a_kq1 - jyf6l4 + 0x1;
    }
    for (var jyf6l4 = 0x0, eoqk_ = 0x0, n32hu = /.*(?:\r\n?|\n)|.*$/g, dcmp59 = mtgp5['locator'], qr0ba = [{ 'currentNSMap': lg4y6 }], qko1_a = {}, s3zu7 = 0x0;;) {
        try {
            var de9cp = vi['indexOf']('<', s3zu7);
            if (0x0 > de9cp) {
                if (!vi['substr'](s3zu7)['match'](/^\s*$/)) {
                    var mdpc = mtgp5['doc'],
                        c9pmd5 = mdpc['createTextNode'](vi['substr'](s3zu7));
                    mdpc['appendChild'](c9pmd5), mtgp5['currentElement'] = c9pmd5;
                }
                return;
            }
            switch (de9cp > s3zu7 && wj4i$v(de9cp), vi['charAt'](de9cp + 0x1)) {
                case '/':
                    var w$4vji = vi['indexOf']('>', de9cp + 0x3),
                        rb20 = vi['substring'](de9cp + 0x2, w$4vji),
                        n83suh = qr0ba['pop']();
                    0x0 > w$4vji ? (rb20 = vi['substring'](de9cp + 0x2)['replace'](/[\s<].*/, ''), z3xus['error']('end tag name: ' + rb20 + ' is not complete:' + n83suh['tagName']), w$4vji = de9cp + 0x1 + rb20['length']) : rb20['match'](/\s</) && (rb20 = rb20['replace'](/[\s<].*/, ''), z3xus['error']('end tag name: ' + rb20 + ' maybe not complete'), w$4vji = de9cp + 0x1 + rb20['length']);
                    var t6f59g = n83suh['localNSMap'],
                        dec_mk = n83suh['tagName'] == rb20,
                        o_dk = dec_mk || n83suh['tagName'] && n83suh['tagName']['toLowerCase']() == rb20['toLowerCase']();
                    if (o_dk) {
                        if (mtgp5['endElement'](n83suh['uri'], n83suh['localName'], rb20), t6f59g) {
                            for (var cmp95d in t6f59g) mtgp5['endPrefixMapping'](cmp95d);
                        }
                        dec_mk || z3xus['fatalError']('end tag name: ' + rb20 + ' is not match the current start tagName:' + n83suh['tagName']);
                    } else qr0ba['push'](n83suh);
                    w$4vji++;
                    break;
                case '?':
                    dcmp59 && tfy65(de9cp), w$4vji = gh8nr02(vi, de9cp, mtgp5);
                    break;
                case '!':
                    dcmp59 && tfy65(de9cp), w$4vji = glyf64j(vi, de9cp, mtgp5, z3xus);
                    break;
                default:
                    dcmp59 && tfy65(de9cp);
                    var qb12r = new gtdmp9(),
                        us3nz = qr0ba[qr0ba['length'] - 0x1]['currentNSMap'],
                        w$4vji = gb1oaqr(vi, de9cp, qb12r, us3nz, dco_, z3xus),
                        n32u8h = qb12r['length'];
                    if (!qb12r['closed'] && gqrao(vi, w$4vji, qb12r['tagName'], qko1_a) && (qb12r['closed'] = !0x0, dmp_c['nbsp'] || z3xus['warning']('unclosed xml attribute')), dcmp59 && n32u8h) {
                        for (var mt95dp = g_k1(dcmp59, {}), tg596f = 0x0; n32u8h > tg596f; tg596f++) {
                            var b012qr = qb12r[tg596f];
                            tfy65(b012qr['offset']), b012qr['locator'] = g_k1(dcmp59, {});
                        }
                        mtgp5['locator'] = mt95dp, gywlj$4(qb12r, mtgp5, us3nz) && qr0ba['push'](qb12r), mtgp5['locator'] = dcmp59;
                    } else gywlj$4(qb12r, mtgp5, us3nz) && qr0ba['push'](qb12r);
                    'http://www.w3.org/1999/xhtml' !== qb12r['uri'] || qb12r['closed'] ? w$4vji++ : w$4vji = gobaq1k(vi, w$4vji, qb12r['tagName'], dco_, mtgp5);
            }
        } catch (fytl6g) {
            z3xus['error']('element parse error: ' + fytl6g), w$4vji = -0x1;
        }
        w$4vji > s3zu7 ? s3zu7 = w$4vji : wj4i$v(Math['max'](de9cp, s3zu7) + 0x1);
    }
}
function g_k1(n8b0, de_pmc) {
    return de_pmc['lineNumber'] = n8b0['lineNumber'], de_pmc['columnNumber'] = n8b0['columnNumber'], de_pmc;
}
function gb1oaqr($jlw4i, yjf46l, _dpecm, tf6ly, yl46$, mdp9c) {
    for (var mcpd_e, d5m9cp, n28r0 = ++yjf46l, ltgfy = gglfy6t;;) {
        var _aqko1 = $jlw4i['charAt'](n28r0);
        switch (_aqko1) {
            case '=':
                if (ltgfy === gu23) mcpd_e = $jlw4i['slice'](yjf46l, n28r0), ltgfy = gjwl$y4;else {
                    if (ltgfy !== gepmd9) throw new Error('attribute equal must after attrName');
                    ltgfy = gjwl$y4;
                }
                break;
            case '\x27':
            case '\x22':
                if (ltgfy === gjwl$y4 || ltgfy === gu23) {
                    if (ltgfy === gu23 && (mdp9c['warning']('attribute value must after "="'), mcpd_e = $jlw4i['slice'](yjf46l, n28r0)), yjf46l = n28r0 + 0x1, n28r0 = $jlw4i['indexOf'](_aqko1, yjf46l), !(n28r0 > 0x0)) throw new Error('attribute value no end \'' + _aqko1 + '\' match');
                    d5m9cp = $jlw4i['slice'](yjf46l, n28r0)['replace'](/&#?\w+;/g, yl46$), _dpecm['add'](mcpd_e, d5m9cp, yjf46l - 0x1), ltgfy = gpm9g;
                } else {
                    if (ltgfy != gq2b1r) throw new Error('attribute value must after "="');
                    d5m9cp = $jlw4i['slice'](yjf46l, n28r0)['replace'](/&#?\w+;/g, yl46$), _dpecm['add'](mcpd_e, d5m9cp, yjf46l), mdp9c['warning']('attribute "' + mcpd_e + '" missed start quot(' + _aqko1 + ')!!'), yjf46l = n28r0 + 0x1, ltgfy = gpm9g;
                }
                break;
            case '/':
                switch (ltgfy) {
                    case gglfy6t:
                        _dpecm['setTagName']($jlw4i['slice'](yjf46l, n28r0));
                    case gpm9g:
                    case gjl$4iw:
                    case gt6gyl:
                        ltgfy = gt6gyl, _dpecm['closed'] = !0x0;
                    case gq2b1r:
                    case gu23:
                    case gepmd9:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return mdp9c['error']('unexpected end of input'), ltgfy == gglfy6t && _dpecm['setTagName']($jlw4i['slice'](yjf46l, n28r0)), n28r0;
            case '>':
                switch (ltgfy) {
                    case gglfy6t:
                        _dpecm['setTagName']($jlw4i['slice'](yjf46l, n28r0));
                    case gpm9g:
                    case gjl$4iw:
                    case gt6gyl:
                        break;
                    case gq2b1r:
                    case gu23:
                        d5m9cp = $jlw4i['slice'](yjf46l, n28r0), '/' === d5m9cp['slice'](-0x1) && (_dpecm['closed'] = !0x0, d5m9cp = d5m9cp['slice'](0x0, -0x1));
                    case gepmd9:
                        ltgfy === gepmd9 && (d5m9cp = mcpd_e), ltgfy == gq2b1r ? (mdp9c['warning']('attribute "' + d5m9cp + '" missed quot(")!!'), _dpecm['add'](mcpd_e, d5m9cp['replace'](/&#?\w+;/g, yl46$), yjf46l)) : ('http://www.w3.org/1999/xhtml' === tf6ly[''] && d5m9cp['match'](/^(?:disabled|checked|selected)$/i) || mdp9c['warning']('attribute "' + d5m9cp + '" missed value!! "' + d5m9cp + '" instead!!'), _dpecm['add'](d5m9cp, d5m9cp, yjf46l));
                        break;
                    case gjwl$y4:
                        throw new Error('attribute value missed!!');
                }
                return n28r0;
            case '\u0080':
                _aqko1 = '\x20';
            default:
                if ('\x20' >= _aqko1) switch (ltgfy) {
                    case gglfy6t:
                        _dpecm['setTagName']($jlw4i['slice'](yjf46l, n28r0)), ltgfy = gjl$4iw;
                        break;
                    case gu23:
                        mcpd_e = $jlw4i['slice'](yjf46l, n28r0), ltgfy = gepmd9;
                        break;
                    case gq2b1r:
                        var d5m9cp = $jlw4i['slice'](yjf46l, n28r0)['replace'](/&#?\w+;/g, yl46$);
                        mdp9c['warning']('attribute "' + d5m9cp + '" missed quot(")!!'), _dpecm['add'](mcpd_e, d5m9cp, yjf46l);
                    case gpm9g:
                        ltgfy = gjl$4iw;
                } else switch (ltgfy) {
                    case gepmd9:
                        {
                            _dpecm['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === tf6ly[''] && mcpd_e['match'](/^(?:disabled|checked|selected)$/i) || mdp9c['warning']('attribute "' + mcpd_e + '" missed value!! "' + mcpd_e + '" instead2!!'), _dpecm['add'](mcpd_e, mcpd_e, yjf46l), yjf46l = n28r0, ltgfy = gu23;
                        break;
                    case gpm9g:
                        mdp9c['warning']('attribute space is required"' + mcpd_e + '\x22!!');
                    case gjl$4iw:
                        ltgfy = gu23, yjf46l = n28r0;
                        break;
                    case gjwl$y4:
                        ltgfy = gq2b1r, yjf46l = n28r0;
                        break;
                    case gt6gyl:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        n28r0++;
    }
}
function gywlj$4(pg5ft, j$v, mgt5) {
    for (var w4vij = pg5ft['tagName'], q0a1br = null, ygltf = pg5ft['length']; ygltf--;) {
        var f6l4jy = pg5ft[ygltf],
            cpd_me = f6l4jy['qName'],
            y65gf = f6l4jy['value'],
            gfp59 = cpd_me['indexOf'](':');
        if (gfp59 > 0x0) var qaok_e = f6l4jy['prefix'] = cpd_me['slice'](0x0, gfp59),
            $ijl4 = cpd_me['slice'](gfp59 + 0x1),
            p9cdem = 'xmlns' === qaok_e && $ijl4;else $ijl4 = cpd_me, qaok_e = null, p9cdem = 'xmlns' === cpd_me && '';
        f6l4jy['localName'] = $ijl4, p9cdem !== !0x1 && (null == q0a1br && (q0a1br = {}, gak1oq(mgt5, mgt5 = {})), mgt5[p9cdem] = q0a1br[p9cdem] = y65gf, f6l4jy['uri'] = 'http://www.w3.org/2000/xmlns/', j$v['startPrefixMapping'](p9cdem, y65gf));
    }
    for (var ygltf = pg5ft['length']; ygltf--;) {
        f6l4jy = pg5ft[ygltf];
        var qaok_e = f6l4jy['prefix'];
        qaok_e && ('xml' === qaok_e && (f6l4jy['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== qaok_e && (f6l4jy['uri'] = mgt5[qaok_e || '']));
    }
    var gfp59 = w4vij['indexOf'](':');
    gfp59 > 0x0 ? (qaok_e = pg5ft['prefix'] = w4vij['slice'](0x0, gfp59), $ijl4 = pg5ft['localName'] = w4vij['slice'](gfp59 + 0x1)) : (qaok_e = null, $ijl4 = pg5ft['localName'] = w4vij);
    var d_cok = pg5ft['uri'] = mgt5[qaok_e || ''];
    if (j$v['startElement'](d_cok, $ijl4, w4vij, pg5ft), !pg5ft['closed']) return pg5ft['currentNSMap'] = mgt5, pg5ft['localNSMap'] = q0a1br, !0x0;
    if (j$v['endElement'](d_cok, $ijl4, w4vij), q0a1br) {
        for (qaok_e in q0a1br) j$v['endPrefixMapping'](qaok_e);
    }
}
function gobaq1k(gf4ly6, nh023, hn8su, n3u8s, cmd_) {
    if (/^(?:script|textarea)$/i['test'](hn8su)) {
        var bnr2 = gf4ly6['indexOf']('</' + hn8su + '>', nh023),
            pc_edm = gf4ly6['substring'](nh023 + 0x1, bnr2);
        if (/[&<]/['test'](pc_edm)) return (/^script$/i['test'](hn8su) ? (cmd_['characters'](pc_edm, 0x0, pc_edm['length']), bnr2) : (pc_edm = pc_edm['replace'](/&#?\w+;/g, n3u8s), cmd_['characters'](pc_edm, 0x0, pc_edm['length']), bnr2)
        );
    }
    return nh023 + 0x1;
}
function gqrao(mep_cd, r08n, pdmc9e, ty65f) {
    var liw4$j = ty65f[pdmc9e];
    return null == liw4$j && (liw4$j = mep_cd['lastIndexOf']('</' + pdmc9e + '>'), r08n > liw4$j && (liw4$j = mep_cd['lastIndexOf']('</' + pdmc9e)), ty65f[pdmc9e] = liw4$j), r08n > liw4$j;
}
function gak1oq(gm, $vi4) {
    for (var jyl4 in gm) $vi4[jyl4] = gm[jyl4];
}
function glyf64j(szuh3, hnu2, e_qoak, fy6t) {
    var y6lgft = szuh3['charAt'](hnu2 + 0x2);
    switch (y6lgft) {
        case '-':
            if ('-' === szuh3['charAt'](hnu2 + 0x3)) {
                var zx73s = szuh3['indexOf']('-->', hnu2 + 0x4);
                return zx73s > hnu2 ? (e_qoak['comment'](szuh3, hnu2 + 0x4, zx73s - hnu2 - 0x4), zx73s + 0x3) : (fy6t['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == szuh3['substr'](hnu2 + 0x3, 0x6)) {
                var zx73s = szuh3['indexOf'](']]>', hnu2 + 0x9);
                return e_qoak['startCDATA'](), e_qoak['characters'](szuh3, hnu2 + 0x9, zx73s - hnu2 - 0x9), e_qoak['endCDATA'](), zx73s + 0x3;
            }
            var i$v4j = gx37z(szuh3, hnu2),
                r28n0 = i$v4j['length'];
            if (r28n0 > 0x1 && /!doctype/i['test'](i$v4j[0x0][0x0])) {
                var _dmcke = i$v4j[0x1][0x0],
                    h382n0 = r28n0 > 0x3 && /^public$/i['test'](i$v4j[0x2][0x0]) && i$v4j[0x3][0x0],
                    md5p9c = r28n0 > 0x4 && i$v4j[0x4][0x0],
                    tm5pd9 = i$v4j[r28n0 - 0x1];
                return e_qoak['startDTD'](_dmcke, h382n0 && h382n0['replace'](/^(['"])(.*?)\1$/, '$2'), md5p9c && md5p9c['replace'](/^(['"])(.*?)\1$/, '$2')), e_qoak['endDTD'](), tm5pd9['index'] + tm5pd9[0x0]['length'];
            }
    }
    return -0x1;
}
function gh8nr02(pgtf5, y4l$wj, k_1aq) {
    var dpce9 = pgtf5['indexOf']('?>', y4l$wj);
    if (dpce9) {
        var emd_ = pgtf5['substring'](y4l$wj, dpce9)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (emd_) {
            {
                emd_[0x0]['length'];
            }
            return k_1aq['processingInstruction'](emd_[0x1], emd_[0x2]), dpce9 + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function gtdmp9() {}
function gijl$4(g5tpm, k_aq) {
    return g5tpm['__proto__'] = k_aq, g5tpm;
}
function gx37z(m9pdc5, n028br) {
    var gt59,
        sh7u = [],
        nh8s3 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (nh8s3['lastIndex'] = n028br, nh8s3['exec'](m9pdc5); gt59 = nh8s3['exec'](m9pdc5);) if (sh7u['push'](gt59), gt59[0x1]) return sh7u;
}
var gwj$ly4 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    grb1q2 = new RegExp('[\\-\\.0-9' + gwj$ly4['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    gu3h7s = new RegExp('^' + gwj$ly4['source'] + grb1q2['source'] + '*(?::' + gwj$ly4['source'] + grb1q2['source'] + '*)?$'),
    gglfy6t = 0x0,
    gu23 = 0x1,
    gepmd9 = 0x2,
    gjwl$y4 = 0x3,
    gq2b1r = 0x4,
    gpm9g = 0x5,
    gjl$4iw = 0x6,
    gt6gyl = 0x7;
g$4wyjl['prototype'] = {
    'parse': function (_dpe, e_ocka, rn20b) {
        var coak = this['domBuilder'];
        coak['startDocument'](), gak1oq(e_ocka, e_ocka = {}), gn802br(_dpe, e_ocka, rn20b, coak, this['errorHandler']), coak['endDocument']();
    }
}, gtdmp9['prototype'] = {
    'setTagName': function (jvi4$w) {
        if (!gu3h7s['test'](jvi4$w)) throw new Error('invalid tagName:' + jvi4$w);
        this['tagName'] = jvi4$w;
    },
    'add': function (_dmepc, bkao1q, xzsu73) {
        if (!gu3h7s['test'](_dmepc)) throw new Error('invalid attribute:' + _dmepc);
        this[this['length']++] = {
            'qName': _dmepc,
            'value': bkao1q,
            'offset': xzsu73
        };
    },
    'length': 0x0,
    'getLocalName': function (braoq) {
        return this[braoq]['localName'];
    },
    'getLocator': function (gt569) {
        return this[gt569]['locator'];
    },
    'getQName': function (u7zh3s) {
        return this[u7zh3s]['qName'];
    },
    'getURI': function (qroa1b) {
        return this[qroa1b]['uri'];
    },
    'getValue': function (keqao) {
        return this[keqao]['value'];
    }
}, gijl$4({}, gijl$4['prototype']) instanceof gijl$4 || (gijl$4 = function (kecd, g596ft) {
    function k1o_() {}
    k1o_['prototype'] = g596ft, k1o_ = new k1o_();
    for (g596ft in kecd) k1o_[g596ft] = kecd[g596ft];
    return k1o_;
}), exports['XMLReader'] = g$4wyjl;