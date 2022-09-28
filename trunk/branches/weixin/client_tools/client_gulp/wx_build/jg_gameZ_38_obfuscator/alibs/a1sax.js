var c = wx.$a;
function gh6dzk() {}
function gh6kqz(vkzhd, c$ambl, uw_e4, _0weo, rqt68) {
    function gs2fx(w4e_o0) {
        if (w4e_o0 > 0xffff) {
            w4e_o0 -= 0x10000;
            var b0cl = 0xd800 + (w4e_o0 >> 0xa),
                hjnsvx = 0xdc00 + (0x3ff & w4e_o0);
            return String['fromCharCode'](b0cl, hjnsvx);
        }
        return String['fromCharCode'](w4e_o0);
    }
    function e4u_wg(d6kzv) {
        var cy4ob0 = d6kzv['slice'](0x1, -0x1);
        return cy4ob0 in uw_e4 ? uw_e4[cy4ob0] : '#' === cy4ob0['charAt'](0x0) ? gs2fx(parseInt(cy4ob0['substr'](0x1)['replace']('x', '0x'))) : (rqt68['error']('entity not found:' + d6kzv), d6kzv);
    }
    function t875(zn6hvk) {
        if (zn6hvk > szhvn) {
            var vhsnjx = vkzhd['substring'](szhvn, zn6hvk)['replace'](/&#?\w+;/g, e4u_wg);
            td5qr8 && nhvzs(szhvn), _0weo['characters'](vhsnjx, 0x0, zn6hvk - szhvn), szhvn = zn6hvk;
        }
    }
    function nhvzs(nfj1sx, kqdz8) {
        for (; nfj1sx >= uw12ge && (kqdz8 = sxf2g['exec'](vkzhd));) p573 = kqdz8['index'], uw12ge = p573 + kqdz8[0x0]['length'], td5qr8['lineNumber']++;
        td5qr8['columnNumber'] = nfj1sx - p573 + 0x1;
    }
    for (var p573 = 0x0, uw12ge = 0x0, sxf2g = /.*(?:\r\n?|\n)|.*$/g, td5qr8 = _0weo['locator'], dh6vk = [{ 'currentNSMap': c$ambl }], szjvh = {}, szhvn = 0x0;;) {
        try {
            var sxf1j2 = vkzhd['indexOf']('<', szhvn);
            if (0x0 > sxf1j2) {
                if (!vkzhd['substr'](szhvn)['match'](/^\s*$/)) {
                    var $acmlb = _0weo['doc'],
                        jnsxhv = $acmlb['createTextNode'](vkzhd['substr'](szhvn));
                    $acmlb['appendChild'](jnsxhv), _0weo['currentElement'] = jnsxhv;
                }
                return;
            }
            switch (sxf1j2 > szhvn && t875(sxf1j2), vkzhd['charAt'](sxf1j2 + 0x1)) {
                case '/':
                    var r58t7q = vkzhd['indexOf']('>', sxf1j2 + 0x3),
                        vfjxs = vkzhd['substring'](sxf1j2 + 0x2, r58t7q),
                        d5tqr = dh6vk['pop']();
                    0x0 > r58t7q ? (vfjxs = vkzhd['substring'](sxf1j2 + 0x2)['replace'](/[\s<].*/, ''), rqt68['error']('end tag name: ' + vfjxs + ' is not complete:' + d5tqr['tagName']), r58t7q = sxf1j2 + 0x1 + vfjxs['length']) : vfjxs['match'](/\s</) && (vfjxs = vfjxs['replace'](/[\s<].*/, ''), rqt68['error']('end tag name: ' + vfjxs + ' maybe not complete'), r58t7q = sxf1j2 + 0x1 + vfjxs['length']);
                    var ycblm = d5tqr['localNSMap'],
                        hs = d5tqr['tagName'] == vfjxs,
                        qr875 = hs || d5tqr['tagName'] && d5tqr['tagName']['toLowerCase']() == vfjxs['toLowerCase']();
                    if (qr875) {
                        if (_0weo['endElement'](d5tqr['uri'], d5tqr['localName'], vfjxs), ycblm) {
                            for (var zsnvh in ycblm) _0weo['endPrefixMapping'](zsnvh);
                        }
                        hs || rqt68['fatalError']('end tag name: ' + vfjxs + ' is not match the current start tagName:' + d5tqr['tagName']);
                    } else dh6vk['push'](d5tqr);
                    r58t7q++;
                    break;
                case '?':
                    td5qr8 && nhvzs(sxf1j2), r58t7q = gow4_0e(vkzhd, sxf1j2, _0weo);
                    break;
                case '!':
                    td5qr8 && nhvzs(sxf1j2), r58t7q = gk6zdhv(vkzhd, sxf1j2, _0weo, rqt68);
                    break;
                default:
                    td5qr8 && nhvzs(sxf1j2);
                    var xsg12 = new gs12jfx(),
                        dzkq6h = dh6vk[dh6vk['length'] - 0x1]['currentNSMap'],
                        r58t7q = gcy0o$b(vkzhd, sxf1j2, xsg12, dzkq6h, e4u_wg, rqt68),
                        m$9bal = xsg12['length'];
                    if (!xsg12['closed'] && go4yc0_(vkzhd, r58t7q, xsg12['tagName'], szjvh) && (xsg12['closed'] = !0x0, uw_e4['nbsp'] || rqt68['warning']('unclosed xml attribute')), td5qr8 && m$9bal) {
                        for (var hsjzn = g_y04o(td5qr8, {}), g2sx = 0x0; m$9bal > g2sx; g2sx++) {
                            var j2x1sf = xsg12[g2sx];
                            nhvzs(j2x1sf['offset']), j2x1sf['locator'] = g_y04o(td5qr8, {});
                        }
                        _0weo['locator'] = hsjzn, gfjnxvs(xsg12, _0weo, dzkq6h) && dh6vk['push'](xsg12), _0weo['locator'] = td5qr8;
                    } else gfjnxvs(xsg12, _0weo, dzkq6h) && dh6vk['push'](xsg12);
                    'http://www.w3.org/1999/xhtml' !== xsg12['uri'] || xsg12['closed'] ? r58t7q++ : r58t7q = gnhj(vkzhd, r58t7q, xsg12['tagName'], e4u_wg, _0weo);
            }
        } catch (x1sg2) {
            rqt68['error']('element parse error: ' + x1sg2), r58t7q = -0x1;
        }
        r58t7q > szhvn ? szhvn = r58t7q : t875(Math['max'](sxf1j2, szhvn) + 0x1);
    }
}
function g_y04o(khzqd, dt8r6q) {
    return dt8r6q['lineNumber'] = khzqd['lineNumber'], dt8r6q['columnNumber'] = khzqd['columnNumber'], dt8r6q;
}
function gcy0o$b(u4we_o, dqr6t8, ugx, uo, gx12sf, o4cy) {
    for (var y_c0, zkd6qh, zvjhkn = ++dqr6t8, tq578 = gsfg1;;) {
        var i73pr = u4we_o['charAt'](zvjhkn);
        switch (i73pr) {
            case '=':
                if (tq578 === gtr3578) y_c0 = u4we_o['slice'](dqr6t8, zvjhkn), tq578 = gsj21f;else {
                    if (tq578 !== gm9b$) throw new Error('attribute equal must after attrName');
                    tq578 = gsj21f;
                }
                break;
            case '\x27':
            case '\x22':
                if (tq578 === gsj21f || tq578 === gtr3578) {
                    if (tq578 === gtr3578 && (o4cy['warning']('attribute value must after "="'), y_c0 = u4we_o['slice'](dqr6t8, zvjhkn)), dqr6t8 = zvjhkn + 0x1, zvjhkn = u4we_o['indexOf'](i73pr, dqr6t8), !(zvjhkn > 0x0)) throw new Error('attribute value no end \'' + i73pr + '\' match');
                    zkd6qh = u4we_o['slice'](dqr6t8, zvjhkn)['replace'](/&#?\w+;/g, gx12sf), ugx['add'](y_c0, zkd6qh, dqr6t8 - 0x1), tq578 = gvxnfsj;
                } else {
                    if (tq578 != gk6dhq) throw new Error('attribute value must after "="');
                    zkd6qh = u4we_o['slice'](dqr6t8, zvjhkn)['replace'](/&#?\w+;/g, gx12sf), ugx['add'](y_c0, zkd6qh, dqr6t8), o4cy['warning']('attribute "' + y_c0 + '" missed start quot(' + i73pr + ')!!'), dqr6t8 = zvjhkn + 0x1, tq578 = gvxnfsj;
                }
                break;
            case '/':
                switch (tq578) {
                    case gsfg1:
                        ugx['setTagName'](u4we_o['slice'](dqr6t8, zvjhkn));
                    case gvxnfsj:
                    case glmbcy:
                    case gqkz6:
                        tq578 = gqkz6, ugx['closed'] = !0x0;
                    case gk6dhq:
                    case gtr3578:
                    case gm9b$:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return o4cy['error']('unexpected end of input'), tq578 == gsfg1 && ugx['setTagName'](u4we_o['slice'](dqr6t8, zvjhkn)), zvjhkn;
            case '>':
                switch (tq578) {
                    case gsfg1:
                        ugx['setTagName'](u4we_o['slice'](dqr6t8, zvjhkn));
                    case gvxnfsj:
                    case glmbcy:
                    case gqkz6:
                        break;
                    case gk6dhq:
                    case gtr3578:
                        zkd6qh = u4we_o['slice'](dqr6t8, zvjhkn), '/' === zkd6qh['slice'](-0x1) && (ugx['closed'] = !0x0, zkd6qh = zkd6qh['slice'](0x0, -0x1));
                    case gm9b$:
                        tq578 === gm9b$ && (zkd6qh = y_c0), tq578 == gk6dhq ? (o4cy['warning']('attribute "' + zkd6qh + '" missed quot(")!!'), ugx['add'](y_c0, zkd6qh['replace'](/&#?\w+;/g, gx12sf), dqr6t8)) : ('http://www.w3.org/1999/xhtml' === uo[''] && zkd6qh['match'](/^(?:disabled|checked|selected)$/i) || o4cy['warning']('attribute "' + zkd6qh + '" missed value!! "' + zkd6qh + '" instead!!'), ugx['add'](zkd6qh, zkd6qh, dqr6t8));
                        break;
                    case gsj21f:
                        throw new Error('attribute value missed!!');
                }
                return zvjhkn;
            case '\u0080':
                i73pr = '\x20';
            default:
                if ('\x20' >= i73pr) switch (tq578) {
                    case gsfg1:
                        ugx['setTagName'](u4we_o['slice'](dqr6t8, zvjhkn)), tq578 = glmbcy;
                        break;
                    case gtr3578:
                        y_c0 = u4we_o['slice'](dqr6t8, zvjhkn), tq578 = gm9b$;
                        break;
                    case gk6dhq:
                        var zkd6qh = u4we_o['slice'](dqr6t8, zvjhkn)['replace'](/&#?\w+;/g, gx12sf);
                        o4cy['warning']('attribute "' + zkd6qh + '" missed quot(")!!'), ugx['add'](y_c0, zkd6qh, dqr6t8);
                    case gvxnfsj:
                        tq578 = glmbcy;
                } else switch (tq578) {
                    case gm9b$:
                        {
                            ugx['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === uo[''] && y_c0['match'](/^(?:disabled|checked|selected)$/i) || o4cy['warning']('attribute "' + y_c0 + '" missed value!! "' + y_c0 + '" instead2!!'), ugx['add'](y_c0, y_c0, dqr6t8), dqr6t8 = zvjhkn, tq578 = gtr3578;
                        break;
                    case gvxnfsj:
                        o4cy['warning']('attribute space is required"' + y_c0 + '\x22!!');
                    case glmbcy:
                        tq578 = gtr3578, dqr6t8 = zvjhkn;
                        break;
                    case gsj21f:
                        tq578 = gk6dhq, dqr6t8 = zvjhkn;
                        break;
                    case gqkz6:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        zvjhkn++;
    }
}
function gfjnxvs(jhzsvn, e4_wgu, $lmbac) {
    for (var hnzjkv = jhzsvn['tagName'], xhjv = null, p5t73r = jhzsvn['length']; p5t73r--;) {
        var k6hnzv = jhzsvn[p5t73r],
            o40_ = k6hnzv['qName'],
            oye0 = k6hnzv['value'],
            zqdh6k = o40_['indexOf'](':');
        if (zqdh6k > 0x0) var bacm$ = k6hnzv['prefix'] = o40_['slice'](0x0, zqdh6k),
            zjnkv = o40_['slice'](zqdh6k + 0x1),
            p735t = 'xmlns' === bacm$ && zjnkv;else zjnkv = o40_, bacm$ = null, p735t = 'xmlns' === o40_ && '';
        k6hnzv['localName'] = zjnkv, p735t !== !0x1 && (null == xhjv && (xhjv = {}, gq8d($lmbac, $lmbac = {})), $lmbac[p735t] = xhjv[p735t] = oye0, k6hnzv['uri'] = 'http://www.w3.org/2000/xmlns/', e4_wgu['startPrefixMapping'](p735t, oye0));
    }
    for (var p5t73r = jhzsvn['length']; p5t73r--;) {
        k6hnzv = jhzsvn[p5t73r];
        var bacm$ = k6hnzv['prefix'];
        bacm$ && ('xml' === bacm$ && (k6hnzv['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== bacm$ && (k6hnzv['uri'] = $lmbac[bacm$ || '']));
    }
    var zqdh6k = hnzjkv['indexOf'](':');
    zqdh6k > 0x0 ? (bacm$ = jhzsvn['prefix'] = hnzjkv['slice'](0x0, zqdh6k), zjnkv = jhzsvn['localName'] = hnzjkv['slice'](zqdh6k + 0x1)) : (bacm$ = null, zjnkv = jhzsvn['localName'] = hnzjkv);
    var egu12w = jhzsvn['uri'] = $lmbac[bacm$ || ''];
    if (e4_wgu['startElement'](egu12w, zjnkv, hnzjkv, jhzsvn), !jhzsvn['closed']) return jhzsvn['currentNSMap'] = $lmbac, jhzsvn['localNSMap'] = xhjv, !0x0;
    if (e4_wgu['endElement'](egu12w, zjnkv, hnzjkv), xhjv) {
        for (bacm$ in xhjv) e4_wgu['endPrefixMapping'](bacm$);
    }
}
function gnhj(oe_y40, svfxn, pr573, hsjvnz, zkq86) {
    if (/^(?:script|textarea)$/i['test'](pr573)) {
        var o04bcy = oe_y40['indexOf']('</' + pr573 + '>', svfxn),
            ybcl = oe_y40['substring'](svfxn + 0x1, o04bcy);
        if (/[&<]/['test'](ybcl)) return (/^script$/i['test'](pr573) ? (zkq86['characters'](ybcl, 0x0, ybcl['length']), o04bcy) : (ybcl = ybcl['replace'](/&#?\w+;/g, hsjvnz), zkq86['characters'](ybcl, 0x0, ybcl['length']), o04bcy)
        );
    }
    return svfxn + 0x1;
}
function go4yc0_(jsfnxv, cb0l$, cby$o0, t7rp35) {
    var fnxs1 = t7rp35[cby$o0];
    return null == fnxs1 && (fnxs1 = jsfnxv['lastIndexOf']('</' + cby$o0 + '>'), cb0l$ > fnxs1 && (fnxs1 = jsfnxv['lastIndexOf']('</' + cby$o0)), t7rp35[cby$o0] = fnxs1), cb0l$ > fnxs1;
}
function gq8d(nvjhsx, r5738t) {
    for (var lc$bm in nvjhsx) r5738t[lc$bm] = nvjhsx[lc$bm];
}
function gk6zdhv(ug_ew, fnj1, wg_2eu, k6dq8) {
    var f1uw = ug_ew['charAt'](fnj1 + 0x2);
    switch (f1uw) {
        case '-':
            if ('-' === ug_ew['charAt'](fnj1 + 0x3)) {
                var qt6kd = ug_ew['indexOf']('-->', fnj1 + 0x4);
                return qt6kd > fnj1 ? (wg_2eu['comment'](ug_ew, fnj1 + 0x4, qt6kd - fnj1 - 0x4), qt6kd + 0x3) : (k6dq8['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == ug_ew['substr'](fnj1 + 0x3, 0x6)) {
                var qt6kd = ug_ew['indexOf'](']]>', fnj1 + 0x9);
                return wg_2eu['startCDATA'](), wg_2eu['characters'](ug_ew, fnj1 + 0x9, qt6kd - fnj1 - 0x9), wg_2eu['endCDATA'](), qt6kd + 0x3;
            }
            var lm$yc = gnvsxf(ug_ew, fnj1),
                dk6vh = lm$yc['length'];
            if (dk6vh > 0x1 && /!doctype/i['test'](lm$yc[0x0][0x0])) {
                var xvfjn = lm$yc[0x1][0x0],
                    eu2g_ = dk6vh > 0x3 && /^public$/i['test'](lm$yc[0x2][0x0]) && lm$yc[0x3][0x0],
                    r8dq5t = dk6vh > 0x4 && lm$yc[0x4][0x0],
                    x1n = lm$yc[dk6vh - 0x1];
                return wg_2eu['startDTD'](xvfjn, eu2g_ && eu2g_['replace'](/^(['"])(.*?)\1$/, '$2'), r8dq5t && r8dq5t['replace'](/^(['"])(.*?)\1$/, '$2')), wg_2eu['endDTD'](), x1n['index'] + x1n[0x0]['length'];
            }
    }
    return -0x1;
}
function gow4_0e(m$cbyl, g2x1f, qdtk) {
    var p7r5 = m$cbyl['indexOf']('?>', g2x1f);
    if (p7r5) {
        var ux2gf = m$cbyl['substring'](g2x1f, p7r5)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (ux2gf) {
            {
                ux2gf[0x0]['length'];
            }
            return qdtk['processingInstruction'](ux2gf[0x1], ux2gf[0x2]), p7r5 + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function gs12jfx() {}
function gsxgf1(nzkhj, nfsxj) {
    return nzkhj['__proto__'] = nfsxj, nzkhj;
}
function gnvsxf(r7p3t5, sfjx21) {
    var sfvjxn,
        xfnjs1 = [],
        r5p = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (r5p['lastIndex'] = sfjx21, r5p['exec'](r7p3t5); sfvjxn = r5p['exec'](r7p3t5);) if (xfnjs1['push'](sfvjxn), sfvjxn[0x1]) return xfnjs1;
}
var gguw12f = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    gzkd8q = new RegExp('[\\-\\.0-9' + gguw12f['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    gcob0$ = new RegExp('^' + gguw12f['source'] + gzkd8q['source'] + '*(?::' + gguw12f['source'] + gzkd8q['source'] + '*)?$'),
    gsfg1 = 0x0,
    gtr3578 = 0x1,
    gm9b$ = 0x2,
    gsj21f = 0x3,
    gk6dhq = 0x4,
    gvxnfsj = 0x5,
    glmbcy = 0x6,
    gqkz6 = 0x7;
gh6dzk['prototype'] = {
    'parse': function (cl0by, lby$0, ybl$m) {
        var u4wg_ = this['domBuilder'];
        u4wg_['startDocument'](), gq8d(lby$0, lby$0 = {}), gh6kqz(cl0by, lby$0, ybl$m, u4wg_, this['errorHandler']), u4wg_['endDocument']();
    }
}, gs12jfx['prototype'] = {
    'setTagName': function (eo_y40) {
        if (!gcob0$['test'](eo_y40)) throw new Error('invalid tagName:' + eo_y40);
        this['tagName'] = eo_y40;
    },
    'add': function (dzk8, fu12wg, u1w2) {
        if (!gcob0$['test'](dzk8)) throw new Error('invalid attribute:' + dzk8);
        this[this['length']++] = {
            'qName': dzk8,
            'value': fu12wg,
            'offset': u1w2
        };
    },
    'length': 0x0,
    'getLocalName': function (ma$l9b) {
        return this[ma$l9b]['localName'];
    },
    'getLocator': function (oyb$c) {
        return this[oyb$c]['locator'];
    },
    'getQName': function (fxns1) {
        return this[fxns1]['qName'];
    },
    'getURI': function (b9$la) {
        return this[b9$la]['uri'];
    },
    'getValue': function (fsjx1) {
        return this[fsjx1]['value'];
    }
}, gsxgf1({}, gsxgf1['prototype']) instanceof gsxgf1 || (gsxgf1 = function (tr8735, abc) {
    function gu2wf() {}
    gu2wf['prototype'] = abc, gu2wf = new gu2wf();
    for (abc in tr8735) gu2wf[abc] = tr8735[abc];
    return gu2wf;
}), exports['XMLReader'] = gh6dzk;