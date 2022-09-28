var c = wx.$a;
function grtd85q() {}
function gjn1fsx(gfwu, fs1jxn, qtd5r8, hjvsn, v6zhd) {
    function w4oeu_(xjfs) {
        if (xjfs > 0xffff) {
            xjfs -= 0x10000;
            var jx1f = 0xd800 + (xjfs >> 0xa),
                q6trd = 0xdc00 + (0x3ff & xjfs);
            return String['fromCharCode'](jx1f, q6trd);
        }
        return String['fromCharCode'](xjfs);
    }
    function lab9(uoe4_w) {
        var wo0_4e = uoe4_w['slice'](0x1, -0x1);
        return wo0_4e in qtd5r8 ? qtd5r8[wo0_4e] : '#' === wo0_4e['charAt'](0x0) ? w4oeu_(parseInt(wo0_4e['substr'](0x1)['replace']('x', '0x'))) : (v6zhd['error']('entity not found:' + uoe4_w), uoe4_w);
    }
    function wegu_2(_0ye) {
        if (_0ye > o0ye4_) {
            var cm$lab = gfwu['substring'](o0ye4_, _0ye)['replace'](/&#?\w+;/g, lab9);
            jhkzvn && ugw2_e(o0ye4_), hjvsn['characters'](cm$lab, 0x0, _0ye - o0ye4_), o0ye4_ = _0ye;
        }
    }
    function ugw2_e(ybo, c$ybml) {
        for (; ybo >= _40oe && (c$ybml = balm$9['exec'](gfwu));) sxhjnv = c$ybml['index'], _40oe = sxhjnv + c$ybml[0x0]['length'], jhkzvn['lineNumber']++;
        jhkzvn['columnNumber'] = ybo - sxhjnv + 0x1;
    }
    for (var sxhjnv = 0x0, _40oe = 0x0, balm$9 = /.*(?:\r\n?|\n)|.*$/g, jhkzvn = hjvsn['locator'], fs2x1 = [{ 'currentNSMap': fs1jxn }], r8735t = {}, o0ye4_ = 0x0;;) {
        try {
            var y0$c = gfwu['indexOf']('<', o0ye4_);
            if (0x0 > y0$c) {
                if (!gfwu['substr'](o0ye4_)['match'](/^\s*$/)) {
                    var vxhjsn = hjvsn['doc'],
                        xfnj = vxhjsn['createTextNode'](gfwu['substr'](o0ye4_));
                    vxhjsn['appendChild'](xfnj), hjvsn['currentElement'] = xfnj;
                }
                return;
            }
            switch (y0$c > o0ye4_ && wegu_2(y0$c), gfwu['charAt'](y0$c + 0x1)) {
                case '/':
                    var gu1f2x = gfwu['indexOf']('>', y0$c + 0x3),
                        y0oe4_ = gfwu['substring'](y0$c + 0x2, gu1f2x),
                        o_yc0 = fs2x1['pop']();
                    0x0 > gu1f2x ? (y0oe4_ = gfwu['substring'](y0$c + 0x2)['replace'](/[\s<].*/, ''), v6zhd['error']('end tag name: ' + y0oe4_ + ' is not complete:' + o_yc0['tagName']), gu1f2x = y0$c + 0x1 + y0oe4_['length']) : y0oe4_['match'](/\s</) && (y0oe4_ = y0oe4_['replace'](/[\s<].*/, ''), v6zhd['error']('end tag name: ' + y0oe4_ + ' maybe not complete'), gu1f2x = y0$c + 0x1 + y0oe4_['length']);
                    var wo_e40 = o_yc0['localNSMap'],
                        qtrd = o_yc0['tagName'] == y0oe4_,
                        rpt57 = qtrd || o_yc0['tagName'] && o_yc0['tagName']['toLowerCase']() == y0oe4_['toLowerCase']();
                    if (rpt57) {
                        if (hjvsn['endElement'](o_yc0['uri'], o_yc0['localName'], y0oe4_), wo_e40) {
                            for (var jvzns in wo_e40) hjvsn['endPrefixMapping'](jvzns);
                        }
                        qtrd || v6zhd['fatalError']('end tag name: ' + y0oe4_ + ' is not match the current start tagName:' + o_yc0['tagName']);
                    } else fs2x1['push'](o_yc0);
                    gu1f2x++;
                    break;
                case '?':
                    jhkzvn && ugw2_e(y0$c), gu1f2x = g$lac(gfwu, y0$c, hjvsn);
                    break;
                case '!':
                    jhkzvn && ugw2_e(y0$c), gu1f2x = gd8tk6(gfwu, y0$c, hjvsn, v6zhd);
                    break;
                default:
                    jhkzvn && ugw2_e(y0$c);
                    var kqz6hd = new gzvn6(),
                        k6qzd8 = fs2x1[fs2x1['length'] - 0x1]['currentNSMap'],
                        gu1f2x = gvshzj(gfwu, y0$c, kqz6hd, k6qzd8, lab9, v6zhd),
                        wf1u = kqz6hd['length'];
                    if (!kqz6hd['closed'] && ghkd6(gfwu, gu1f2x, kqz6hd['tagName'], r8735t) && (kqz6hd['closed'] = !0x0, qtd5r8['nbsp'] || v6zhd['warning']('unclosed xml attribute')), jhkzvn && wf1u) {
                        for (var jx1n = gu_oe4(jhkzvn, {}), oue4 = 0x0; wf1u > oue4; oue4++) {
                            var xvjs = kqz6hd[oue4];
                            ugw2_e(xvjs['offset']), xvjs['locator'] = gu_oe4(jhkzvn, {});
                        }
                        hjvsn['locator'] = jx1n, gzkj(kqz6hd, hjvsn, k6qzd8) && fs2x1['push'](kqz6hd), hjvsn['locator'] = jhkzvn;
                    } else gzkj(kqz6hd, hjvsn, k6qzd8) && fs2x1['push'](kqz6hd);
                    'http://www.w3.org/1999/xhtml' !== kqz6hd['uri'] || kqz6hd['closed'] ? gu1f2x++ : gu1f2x = gbyc$o0(gfwu, gu1f2x, kqz6hd['tagName'], lab9, hjvsn);
            }
        } catch (q8dz) {
            v6zhd['error']('element parse error: ' + q8dz), gu1f2x = -0x1;
        }
        gu1f2x > o0ye4_ ? o0ye4_ = gu1f2x : wegu_2(Math['max'](y0$c, o0ye4_) + 0x1);
    }
}
function gu_oe4(y_4eo, pr3) {
    return pr3['lineNumber'] = y_4eo['lineNumber'], pr3['columnNumber'] = y_4eo['columnNumber'], pr3;
}
function gvshzj(uwge_4, fjs21x, $clmyb, f1nsxj, b$m9al, w12ueg) {
    for (var b$lcy0, m$bl9, t38r = ++fjs21x, n6kv = gq5trd;;) {
        var $a9mb = uwge_4['charAt'](t38r);
        switch ($a9mb) {
            case '=':
                if (n6kv === ge_0oy4) b$lcy0 = uwge_4['slice'](fjs21x, t38r), n6kv = gw2_g;else {
                    if (n6kv !== gma$c) throw new Error('attribute equal must after attrName');
                    n6kv = gw2_g;
                }
                break;
            case '\x27':
            case '\x22':
                if (n6kv === gw2_g || n6kv === ge_0oy4) {
                    if (n6kv === ge_0oy4 && (w12ueg['warning']('attribute value must after "="'), b$lcy0 = uwge_4['slice'](fjs21x, t38r)), fjs21x = t38r + 0x1, t38r = uwge_4['indexOf']($a9mb, fjs21x), !(t38r > 0x0)) throw new Error('attribute value no end \'' + $a9mb + '\' match');
                    m$bl9 = uwge_4['slice'](fjs21x, t38r)['replace'](/&#?\w+;/g, b$m9al), $clmyb['add'](b$lcy0, m$bl9, fjs21x - 0x1), n6kv = gzqdk68;
                } else {
                    if (n6kv != gr3p57i) throw new Error('attribute value must after "="');
                    m$bl9 = uwge_4['slice'](fjs21x, t38r)['replace'](/&#?\w+;/g, b$m9al), $clmyb['add'](b$lcy0, m$bl9, fjs21x), w12ueg['warning']('attribute "' + b$lcy0 + '" missed start quot(' + $a9mb + ')!!'), fjs21x = t38r + 0x1, n6kv = gzqdk68;
                }
                break;
            case '/':
                switch (n6kv) {
                    case gq5trd:
                        $clmyb['setTagName'](uwge_4['slice'](fjs21x, t38r));
                    case gzqdk68:
                    case gm$9l:
                    case gfxsnj:
                        n6kv = gfxsnj, $clmyb['closed'] = !0x0;
                    case gr3p57i:
                    case ge_0oy4:
                    case gma$c:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return w12ueg['error']('unexpected end of input'), n6kv == gq5trd && $clmyb['setTagName'](uwge_4['slice'](fjs21x, t38r)), t38r;
            case '>':
                switch (n6kv) {
                    case gq5trd:
                        $clmyb['setTagName'](uwge_4['slice'](fjs21x, t38r));
                    case gzqdk68:
                    case gm$9l:
                    case gfxsnj:
                        break;
                    case gr3p57i:
                    case ge_0oy4:
                        m$bl9 = uwge_4['slice'](fjs21x, t38r), '/' === m$bl9['slice'](-0x1) && ($clmyb['closed'] = !0x0, m$bl9 = m$bl9['slice'](0x0, -0x1));
                    case gma$c:
                        n6kv === gma$c && (m$bl9 = b$lcy0), n6kv == gr3p57i ? (w12ueg['warning']('attribute "' + m$bl9 + '" missed quot(")!!'), $clmyb['add'](b$lcy0, m$bl9['replace'](/&#?\w+;/g, b$m9al), fjs21x)) : ('http://www.w3.org/1999/xhtml' === f1nsxj[''] && m$bl9['match'](/^(?:disabled|checked|selected)$/i) || w12ueg['warning']('attribute "' + m$bl9 + '" missed value!! "' + m$bl9 + '" instead!!'), $clmyb['add'](m$bl9, m$bl9, fjs21x));
                        break;
                    case gw2_g:
                        throw new Error('attribute value missed!!');
                }
                return t38r;
            case '\u0080':
                $a9mb = '\x20';
            default:
                if ('\x20' >= $a9mb) switch (n6kv) {
                    case gq5trd:
                        $clmyb['setTagName'](uwge_4['slice'](fjs21x, t38r)), n6kv = gm$9l;
                        break;
                    case ge_0oy4:
                        b$lcy0 = uwge_4['slice'](fjs21x, t38r), n6kv = gma$c;
                        break;
                    case gr3p57i:
                        var m$bl9 = uwge_4['slice'](fjs21x, t38r)['replace'](/&#?\w+;/g, b$m9al);
                        w12ueg['warning']('attribute "' + m$bl9 + '" missed quot(")!!'), $clmyb['add'](b$lcy0, m$bl9, fjs21x);
                    case gzqdk68:
                        n6kv = gm$9l;
                } else switch (n6kv) {
                    case gma$c:
                        {
                            $clmyb['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === f1nsxj[''] && b$lcy0['match'](/^(?:disabled|checked|selected)$/i) || w12ueg['warning']('attribute "' + b$lcy0 + '" missed value!! "' + b$lcy0 + '" instead2!!'), $clmyb['add'](b$lcy0, b$lcy0, fjs21x), fjs21x = t38r, n6kv = ge_0oy4;
                        break;
                    case gzqdk68:
                        w12ueg['warning']('attribute space is required"' + b$lcy0 + '\x22!!');
                    case gm$9l:
                        n6kv = ge_0oy4, fjs21x = t38r;
                        break;
                    case gw2_g:
                        n6kv = gr3p57i, fjs21x = t38r;
                        break;
                    case gfxsnj:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        t38r++;
    }
}
function gzkj(uw2ge_, ew4ou_, rtq785) {
    for (var t7r85q = uw2ge_['tagName'], u1e2g = null, q8td = uw2ge_['length']; q8td--;) {
        var r753p = uw2ge_[q8td],
            kvdzh = r753p['qName'],
            e1wgu2 = r753p['value'],
            g1ewu = kvdzh['indexOf'](':');
        if (g1ewu > 0x0) var $c0bo = r753p['prefix'] = kvdzh['slice'](0x0, g1ewu),
            w4_eu = kvdzh['slice'](g1ewu + 0x1),
            c$ma = 'xmlns' === $c0bo && w4_eu;else w4_eu = kvdzh, $c0bo = null, c$ma = 'xmlns' === kvdzh && '';
        r753p['localName'] = w4_eu, c$ma !== !0x1 && (null == u1e2g && (u1e2g = {}, g_2wg(rtq785, rtq785 = {})), rtq785[c$ma] = u1e2g[c$ma] = e1wgu2, r753p['uri'] = 'http://www.w3.org/2000/xmlns/', ew4ou_['startPrefixMapping'](c$ma, e1wgu2));
    }
    for (var q8td = uw2ge_['length']; q8td--;) {
        r753p = uw2ge_[q8td];
        var $c0bo = r753p['prefix'];
        $c0bo && ('xml' === $c0bo && (r753p['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== $c0bo && (r753p['uri'] = rtq785[$c0bo || '']));
    }
    var g1ewu = t7r85q['indexOf'](':');
    g1ewu > 0x0 ? ($c0bo = uw2ge_['prefix'] = t7r85q['slice'](0x0, g1ewu), w4_eu = uw2ge_['localName'] = t7r85q['slice'](g1ewu + 0x1)) : ($c0bo = null, w4_eu = uw2ge_['localName'] = t7r85q);
    var t83r = uw2ge_['uri'] = rtq785[$c0bo || ''];
    if (ew4ou_['startElement'](t83r, w4_eu, t7r85q, uw2ge_), !uw2ge_['closed']) return uw2ge_['currentNSMap'] = rtq785, uw2ge_['localNSMap'] = u1e2g, !0x0;
    if (ew4ou_['endElement'](t83r, w4_eu, t7r85q), u1e2g) {
        for ($c0bo in u1e2g) ew4ou_['endPrefixMapping']($c0bo);
    }
}
function gbyc$o0(hvsnx, x1njs, t7rp, nzvk, hjvs) {
    if (/^(?:script|textarea)$/i['test'](t7rp)) {
        var qt5d = hvsnx['indexOf']('</' + t7rp + '>', x1njs),
            bymc$l = hvsnx['substring'](x1njs + 0x1, qt5d);
        if (/[&<]/['test'](bymc$l)) return (/^script$/i['test'](t7rp) ? (hjvs['characters'](bymc$l, 0x0, bymc$l['length']), qt5d) : (bymc$l = bymc$l['replace'](/&#?\w+;/g, nzvk), hjvs['characters'](bymc$l, 0x0, bymc$l['length']), qt5d)
        );
    }
    return x1njs + 0x1;
}
function ghkd6(vzdkh, s2x1j, dktq8, js2x) {
    var d6kqt = js2x[dktq8];
    return null == d6kqt && (d6kqt = vzdkh['lastIndexOf']('</' + dktq8 + '>'), s2x1j > d6kqt && (d6kqt = vzdkh['lastIndexOf']('</' + dktq8)), js2x[dktq8] = d6kqt), s2x1j > d6kqt;
}
function g_2wg(snvxf, qrtd86) {
    for (var td6q8 in snvxf) qrtd86[td6q8] = snvxf[td6q8];
}
function gd8tk6(ou_we, hvxj, xhsv, f1snjx) {
    var lm$ybc = ou_we['charAt'](hvxj + 0x2);
    switch (lm$ybc) {
        case '-':
            if ('-' === ou_we['charAt'](hvxj + 0x3)) {
                var _0oc4y = ou_we['indexOf']('-->', hvxj + 0x4);
                return _0oc4y > hvxj ? (xhsv['comment'](ou_we, hvxj + 0x4, _0oc4y - hvxj - 0x4), _0oc4y + 0x3) : (f1snjx['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == ou_we['substr'](hvxj + 0x3, 0x6)) {
                var _0oc4y = ou_we['indexOf'](']]>', hvxj + 0x9);
                return xhsv['startCDATA'](), xhsv['characters'](ou_we, hvxj + 0x9, _0oc4y - hvxj - 0x9), xhsv['endCDATA'](), _0oc4y + 0x3;
            }
            var wue2g = gshnvzj(ou_we, hvxj),
                hzkdv = wue2g['length'];
            if (hzkdv > 0x1 && /!doctype/i['test'](wue2g[0x0][0x0])) {
                var y_eo0 = wue2g[0x1][0x0],
                    _co4y0 = hzkdv > 0x3 && /^public$/i['test'](wue2g[0x2][0x0]) && wue2g[0x3][0x0],
                    we4gu = hzkdv > 0x4 && wue2g[0x4][0x0],
                    h6nzvk = wue2g[hzkdv - 0x1];
                return xhsv['startDTD'](y_eo0, _co4y0 && _co4y0['replace'](/^(['"])(.*?)\1$/, '$2'), we4gu && we4gu['replace'](/^(['"])(.*?)\1$/, '$2')), xhsv['endDTD'](), h6nzvk['index'] + h6nzvk[0x0]['length'];
            }
    }
    return -0x1;
}
function g$lac(o$0bcy, $ycbm, xf1u2g) {
    var qr78 = o$0bcy['indexOf']('?>', $ycbm);
    if (qr78) {
        var t5p73r = o$0bcy['substring']($ycbm, qr78)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (t5p73r) {
            {
                t5p73r[0x0]['length'];
            }
            return xf1u2g['processingInstruction'](t5p73r[0x1], t5p73r[0x2]), qr78 + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function gzvn6() {}
function gvhxjs(w0e4o, cb$0oy) {
    return w0e4o['__proto__'] = cb$0oy, w0e4o;
}
function gshnvzj(_gweu4, rtd6q) {
    var mc$a,
        yob04c = [],
        pt73r5 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (pt73r5['lastIndex'] = rtd6q, pt73r5['exec'](_gweu4); mc$a = pt73r5['exec'](_gweu4);) if (yob04c['push'](mc$a), mc$a[0x1]) return yob04c;
}
var gw2fg1 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    gt8qr6d = new RegExp('[\\-\\.0-9' + gw2fg1['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    gtq857 = new RegExp('^' + gw2fg1['source'] + gt8qr6d['source'] + '*(?::' + gw2fg1['source'] + gt8qr6d['source'] + '*)?$'),
    gq5trd = 0x0,
    ge_0oy4 = 0x1,
    gma$c = 0x2,
    gw2_g = 0x3,
    gr3p57i = 0x4,
    gzqdk68 = 0x5,
    gm$9l = 0x6,
    gfxsnj = 0x7;
grtd85q['prototype'] = {
    'parse': function (cmalb$, bmlyc$, zd6k8q) {
        var tq5r7 = this['domBuilder'];
        tq5r7['startDocument'](), g_2wg(bmlyc$, bmlyc$ = {}), gjn1fsx(cmalb$, bmlyc$, zd6k8q, tq5r7, this['errorHandler']), tq5r7['endDocument']();
    }
}, gzvn6['prototype'] = {
    'setTagName': function (eo0y_4) {
        if (!gtq857['test'](eo0y_4)) throw new Error('invalid tagName:' + eo0y_4);
        this['tagName'] = eo0y_4;
    },
    'add': function (f12gxu, njs1f, egu2w_) {
        if (!gtq857['test'](f12gxu)) throw new Error('invalid attribute:' + f12gxu);
        this[this['length']++] = {
            'qName': f12gxu,
            'value': njs1f,
            'offset': egu2w_
        };
    },
    'length': 0x0,
    'getLocalName': function (nv6h) {
        return this[nv6h]['localName'];
    },
    'getLocator': function (c40y_o) {
        return this[c40y_o]['locator'];
    },
    'getQName': function (d86k) {
        return this[d86k]['qName'];
    },
    'getURI': function (zknjv) {
        return this[zknjv]['uri'];
    },
    'getValue': function (w_geu2) {
        return this[w_geu2]['value'];
    }
}, gvhxjs({}, gvhxjs['prototype']) instanceof gvhxjs || (gvhxjs = function (c$0bl, blc$m) {
    function w2guf1() {}
    w2guf1['prototype'] = blc$m, w2guf1 = new w2guf1();
    for (blc$m in c$0bl) w2guf1[blc$m] = c$0bl[blc$m];
    return w2guf1;
}), exports['XMLReader'] = grtd85q;