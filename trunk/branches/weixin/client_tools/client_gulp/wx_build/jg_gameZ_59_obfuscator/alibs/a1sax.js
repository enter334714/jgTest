var c = wx.$a;
function glmb9$a() {}
function gvnhxsj(xvsfjn, b$ym, vjsnz, y0c4, zkhn6) {
    function zdv6hk(ow0e_) {
        if (ow0e_ > 0xffff) {
            ow0e_ -= 0x10000;
            var znkhj = 0xd800 + (ow0e_ >> 0xa),
                c$mbly = 0xdc00 + (0x3ff & ow0e_);
            return String['fromCharCode'](znkhj, c$mbly);
        }
        return String['fromCharCode'](ow0e_);
    }
    function qrd58(jhnvx) {
        var oy4c0 = jhnvx['slice'](0x1, -0x1);
        return oy4c0 in vjsnz ? vjsnz[oy4c0] : '#' === oy4c0['charAt'](0x0) ? zdv6hk(parseInt(oy4c0['substr'](0x1)['replace']('x', '0x'))) : (zkhn6['error']('entity not found:' + jhnvx), jhnvx);
    }
    function $lbmyc(u4eow_) {
        if (u4eow_ > jkvz) {
            var p73r5 = xvsfjn['substring'](jkvz, u4eow_)['replace'](/&#?\w+;/g, qrd58);
            vfjnxs && tr6dq(jkvz), y0c4['characters'](p73r5, 0x0, u4eow_ - jkvz), jkvz = u4eow_;
        }
    }
    function tr6dq(qdz6kh, g12s) {
        for (; qdz6kh >= vnshxj && (g12s = x1g2fs['exec'](xvsfjn));) guw_4e = g12s['index'], vnshxj = guw_4e + g12s[0x0]['length'], vfjnxs['lineNumber']++;
        vfjnxs['columnNumber'] = qdz6kh - guw_4e + 0x1;
    }
    for (var guw_4e = 0x0, vnshxj = 0x0, x1g2fs = /.*(?:\r\n?|\n)|.*$/g, vfjnxs = y0c4['locator'], c_04o = [{ 'currentNSMap': b$ym }], rd5tq = {}, jkvz = 0x0;;) {
        try {
            var b$amcl = xvsfjn['indexOf']('<', jkvz);
            if (0x0 > b$amcl) {
                if (!xvsfjn['substr'](jkvz)['match'](/^\s*$/)) {
                    var zhnvjk = y0c4['doc'],
                        euo4 = zhnvjk['createTextNode'](xvsfjn['substr'](jkvz));
                    zhnvjk['appendChild'](euo4), y0c4['currentElement'] = euo4;
                }
                return;
            }
            switch (b$amcl > jkvz && $lbmyc(b$amcl), xvsfjn['charAt'](b$amcl + 0x1)) {
                case '/':
                    var $cbo0 = xvsfjn['indexOf']('>', b$amcl + 0x3),
                        jkhnz = xvsfjn['substring'](b$amcl + 0x2, $cbo0),
                        td86qk = c_04o['pop']();
                    0x0 > $cbo0 ? (jkhnz = xvsfjn['substring'](b$amcl + 0x2)['replace'](/[\s<].*/, ''), zkhn6['error']('end tag name: ' + jkhnz + ' is not complete:' + td86qk['tagName']), $cbo0 = b$amcl + 0x1 + jkhnz['length']) : jkhnz['match'](/\s</) && (jkhnz = jkhnz['replace'](/[\s<].*/, ''), zkhn6['error']('end tag name: ' + jkhnz + ' maybe not complete'), $cbo0 = b$amcl + 0x1 + jkhnz['length']);
                    var we_4u = td86qk['localNSMap'],
                        qz68 = td86qk['tagName'] == jkhnz,
                        xnhjs = qz68 || td86qk['tagName'] && td86qk['tagName']['toLowerCase']() == jkhnz['toLowerCase']();
                    if (xnhjs) {
                        if (y0c4['endElement'](td86qk['uri'], td86qk['localName'], jkhnz), we_4u) {
                            for (var nk6vhz in we_4u) y0c4['endPrefixMapping'](nk6vhz);
                        }
                        qz68 || zkhn6['fatalError']('end tag name: ' + jkhnz + ' is not match the current start tagName:' + td86qk['tagName']);
                    } else c_04o['push'](td86qk);
                    $cbo0++;
                    break;
                case '?':
                    vfjnxs && tr6dq(b$amcl), $cbo0 = g_04coy(xvsfjn, b$amcl, y0c4);
                    break;
                case '!':
                    vfjnxs && tr6dq(b$amcl), $cbo0 = gsjxnfv(xvsfjn, b$amcl, y0c4, zkhn6);
                    break;
                default:
                    vfjnxs && tr6dq(b$amcl);
                    var xs1j = new g_o0w4e(),
                        kv6nz = c_04o[c_04o['length'] - 0x1]['currentNSMap'],
                        $cbo0 = gfvxnj(xvsfjn, b$amcl, xs1j, kv6nz, qrd58, zkhn6),
                        snxf1j = xs1j['length'];
                    if (!xs1j['closed'] && gq8kt(xvsfjn, $cbo0, xs1j['tagName'], rd5tq) && (xs1j['closed'] = !0x0, vjsnz['nbsp'] || zkhn6['warning']('unclosed xml attribute')), vfjnxs && snxf1j) {
                        for (var jvszn = g_4uegw(vfjnxs, {}), qdkhz6 = 0x0; snxf1j > qdkhz6; qdkhz6++) {
                            var svjxfn = xs1j[qdkhz6];
                            tr6dq(svjxfn['offset']), svjxfn['locator'] = g_4uegw(vfjnxs, {});
                        }
                        y0c4['locator'] = jvszn, gr8qd5(xs1j, y0c4, kv6nz) && c_04o['push'](xs1j), y0c4['locator'] = vfjnxs;
                    } else gr8qd5(xs1j, y0c4, kv6nz) && c_04o['push'](xs1j);
                    'http://www.w3.org/1999/xhtml' !== xs1j['uri'] || xs1j['closed'] ? $cbo0++ : $cbo0 = gjhsxn(xvsfjn, $cbo0, xs1j['tagName'], qrd58, y0c4);
            }
        } catch (qr785) {
            zkhn6['error']('element parse error: ' + qr785), $cbo0 = -0x1;
        }
        $cbo0 > jkvz ? jkvz = $cbo0 : $lbmyc(Math['max'](b$amcl, jkvz) + 0x1);
    }
}
function g_4uegw(d6r8, zqdkh) {
    return zqdkh['lineNumber'] = d6r8['lineNumber'], zqdkh['columnNumber'] = d6r8['columnNumber'], zqdkh;
}
function gfvxnj(yocb0, fx21gs, njvszh, hv6nk, zdvhk6, ri753) {
    for (var oyb$, alm$b, o0_w4 = ++fx21gs, zhvd6 = geow0;;) {
        var jfxs1 = yocb0['charAt'](o0_w4);
        switch (jfxs1) {
            case '=':
                if (zhvd6 === gjnxsh) oyb$ = yocb0['slice'](fx21gs, o0_w4), zhvd6 = gfxgu2;else {
                    if (zhvd6 !== gznjhs) throw new Error('attribute equal must after attrName');
                    zhvd6 = gfxgu2;
                }
                break;
            case '\x27':
            case '\x22':
                if (zhvd6 === gfxgu2 || zhvd6 === gjnxsh) {
                    if (zhvd6 === gjnxsh && (ri753['warning']('attribute value must after "="'), oyb$ = yocb0['slice'](fx21gs, o0_w4)), fx21gs = o0_w4 + 0x1, o0_w4 = yocb0['indexOf'](jfxs1, fx21gs), !(o0_w4 > 0x0)) throw new Error('attribute value no end \'' + jfxs1 + '\' match');
                    alm$b = yocb0['slice'](fx21gs, o0_w4)['replace'](/&#?\w+;/g, zdvhk6), njvszh['add'](oyb$, alm$b, fx21gs - 0x1), zhvd6 = gge;
                } else {
                    if (zhvd6 != gf1jxns) throw new Error('attribute value must after "="');
                    alm$b = yocb0['slice'](fx21gs, o0_w4)['replace'](/&#?\w+;/g, zdvhk6), njvszh['add'](oyb$, alm$b, fx21gs), ri753['warning']('attribute "' + oyb$ + '" missed start quot(' + jfxs1 + ')!!'), fx21gs = o0_w4 + 0x1, zhvd6 = gge;
                }
                break;
            case '/':
                switch (zhvd6) {
                    case geow0:
                        njvszh['setTagName'](yocb0['slice'](fx21gs, o0_w4));
                    case gge:
                    case goe0w4_:
                    case gkvjhnz:
                        zhvd6 = gkvjhnz, njvszh['closed'] = !0x0;
                    case gf1jxns:
                    case gjnxsh:
                    case gznjhs:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return ri753['error']('unexpected end of input'), zhvd6 == geow0 && njvszh['setTagName'](yocb0['slice'](fx21gs, o0_w4)), o0_w4;
            case '>':
                switch (zhvd6) {
                    case geow0:
                        njvszh['setTagName'](yocb0['slice'](fx21gs, o0_w4));
                    case gge:
                    case goe0w4_:
                    case gkvjhnz:
                        break;
                    case gf1jxns:
                    case gjnxsh:
                        alm$b = yocb0['slice'](fx21gs, o0_w4), '/' === alm$b['slice'](-0x1) && (njvszh['closed'] = !0x0, alm$b = alm$b['slice'](0x0, -0x1));
                    case gznjhs:
                        zhvd6 === gznjhs && (alm$b = oyb$), zhvd6 == gf1jxns ? (ri753['warning']('attribute "' + alm$b + '" missed quot(")!!'), njvszh['add'](oyb$, alm$b['replace'](/&#?\w+;/g, zdvhk6), fx21gs)) : ('http://www.w3.org/1999/xhtml' === hv6nk[''] && alm$b['match'](/^(?:disabled|checked|selected)$/i) || ri753['warning']('attribute "' + alm$b + '" missed value!! "' + alm$b + '" instead!!'), njvszh['add'](alm$b, alm$b, fx21gs));
                        break;
                    case gfxgu2:
                        throw new Error('attribute value missed!!');
                }
                return o0_w4;
            case '\u0080':
                jfxs1 = '\x20';
            default:
                if ('\x20' >= jfxs1) switch (zhvd6) {
                    case geow0:
                        njvszh['setTagName'](yocb0['slice'](fx21gs, o0_w4)), zhvd6 = goe0w4_;
                        break;
                    case gjnxsh:
                        oyb$ = yocb0['slice'](fx21gs, o0_w4), zhvd6 = gznjhs;
                        break;
                    case gf1jxns:
                        var alm$b = yocb0['slice'](fx21gs, o0_w4)['replace'](/&#?\w+;/g, zdvhk6);
                        ri753['warning']('attribute "' + alm$b + '" missed quot(")!!'), njvszh['add'](oyb$, alm$b, fx21gs);
                    case gge:
                        zhvd6 = goe0w4_;
                } else switch (zhvd6) {
                    case gznjhs:
                        {
                            njvszh['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === hv6nk[''] && oyb$['match'](/^(?:disabled|checked|selected)$/i) || ri753['warning']('attribute "' + oyb$ + '" missed value!! "' + oyb$ + '" instead2!!'), njvszh['add'](oyb$, oyb$, fx21gs), fx21gs = o0_w4, zhvd6 = gjnxsh;
                        break;
                    case gge:
                        ri753['warning']('attribute space is required"' + oyb$ + '\x22!!');
                    case goe0w4_:
                        zhvd6 = gjnxsh, fx21gs = o0_w4;
                        break;
                    case gfxgu2:
                        zhvd6 = gf1jxns, fx21gs = o0_w4;
                        break;
                    case gkvjhnz:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        o0_w4++;
    }
}
function gr8qd5(byc$0o, uwo_, x2fj) {
    for (var fxu1g = byc$0o['tagName'], albm9 = null, _o0we = byc$0o['length']; _o0we--;) {
        var t75p3r = byc$0o[_o0we],
            ux1 = t75p3r['qName'],
            w1uf2g = t75p3r['value'],
            snxfj = ux1['indexOf'](':');
        if (snxfj > 0x0) var znvh6k = t75p3r['prefix'] = ux1['slice'](0x0, snxfj),
            j1xsnf = ux1['slice'](snxfj + 0x1),
            d6zvhk = 'xmlns' === znvh6k && j1xsnf;else j1xsnf = ux1, znvh6k = null, d6zvhk = 'xmlns' === ux1 && '';
        t75p3r['localName'] = j1xsnf, d6zvhk !== !0x1 && (null == albm9 && (albm9 = {}, gc04y_(x2fj, x2fj = {})), x2fj[d6zvhk] = albm9[d6zvhk] = w1uf2g, t75p3r['uri'] = 'http://www.w3.org/2000/xmlns/', uwo_['startPrefixMapping'](d6zvhk, w1uf2g));
    }
    for (var _o0we = byc$0o['length']; _o0we--;) {
        t75p3r = byc$0o[_o0we];
        var znvh6k = t75p3r['prefix'];
        znvh6k && ('xml' === znvh6k && (t75p3r['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== znvh6k && (t75p3r['uri'] = x2fj[znvh6k || '']));
    }
    var snxfj = fxu1g['indexOf'](':');
    snxfj > 0x0 ? (znvh6k = byc$0o['prefix'] = fxu1g['slice'](0x0, snxfj), j1xsnf = byc$0o['localName'] = fxu1g['slice'](snxfj + 0x1)) : (znvh6k = null, j1xsnf = byc$0o['localName'] = fxu1g);
    var hkvdz6 = byc$0o['uri'] = x2fj[znvh6k || ''];
    if (uwo_['startElement'](hkvdz6, j1xsnf, fxu1g, byc$0o), !byc$0o['closed']) return byc$0o['currentNSMap'] = x2fj, byc$0o['localNSMap'] = albm9, !0x0;
    if (uwo_['endElement'](hkvdz6, j1xsnf, fxu1g), albm9) {
        for (znvh6k in albm9) uwo_['endPrefixMapping'](znvh6k);
    }
}
function gjhsxn(l9bm, trq85d, _wu2, jvhk, zh6vd) {
    if (/^(?:script|textarea)$/i['test'](_wu2)) {
        var $albm9 = l9bm['indexOf']('</' + _wu2 + '>', trq85d),
            u4gew = l9bm['substring'](trq85d + 0x1, $albm9);
        if (/[&<]/['test'](u4gew)) return (/^script$/i['test'](_wu2) ? (zh6vd['characters'](u4gew, 0x0, u4gew['length']), $albm9) : (u4gew = u4gew['replace'](/&#?\w+;/g, jvhk), zh6vd['characters'](u4gew, 0x0, u4gew['length']), $albm9)
        );
    }
    return trq85d + 0x1;
}
function gq8kt(dt8, e4wug_, tk6q, dkv) {
    var lc$0by = dkv[tk6q];
    return null == lc$0by && (lc$0by = dt8['lastIndexOf']('</' + tk6q + '>'), e4wug_ > lc$0by && (lc$0by = dt8['lastIndexOf']('</' + tk6q)), dkv[tk6q] = lc$0by), e4wug_ > lc$0by;
}
function gc04y_(xjsn, hkzjvn) {
    for (var yb0o4c in xjsn) hkzjvn[yb0o4c] = xjsn[yb0o4c];
}
function gsjxnfv(o0byc4, p7r53, kz6qd, b9$m) {
    var hznsjv = o0byc4['charAt'](p7r53 + 0x2);
    switch (hznsjv) {
        case '-':
            if ('-' === o0byc4['charAt'](p7r53 + 0x3)) {
                var b$mlcy = o0byc4['indexOf']('-->', p7r53 + 0x4);
                return b$mlcy > p7r53 ? (kz6qd['comment'](o0byc4, p7r53 + 0x4, b$mlcy - p7r53 - 0x4), b$mlcy + 0x3) : (b9$m['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == o0byc4['substr'](p7r53 + 0x3, 0x6)) {
                var b$mlcy = o0byc4['indexOf'](']]>', p7r53 + 0x9);
                return kz6qd['startCDATA'](), kz6qd['characters'](o0byc4, p7r53 + 0x9, b$mlcy - p7r53 - 0x9), kz6qd['endCDATA'](), b$mlcy + 0x3;
            }
            var r5873 = gk6dhqz(o0byc4, p7r53),
                nvz6hk = r5873['length'];
            if (nvz6hk > 0x1 && /!doctype/i['test'](r5873[0x0][0x0])) {
                var q5rd8 = r5873[0x1][0x0],
                    dr6qt8 = nvz6hk > 0x3 && /^public$/i['test'](r5873[0x2][0x0]) && r5873[0x3][0x0],
                    d8r5tq = nvz6hk > 0x4 && r5873[0x4][0x0],
                    sxhvn = r5873[nvz6hk - 0x1];
                return kz6qd['startDTD'](q5rd8, dr6qt8 && dr6qt8['replace'](/^(['"])(.*?)\1$/, '$2'), d8r5tq && d8r5tq['replace'](/^(['"])(.*?)\1$/, '$2')), kz6qd['endDTD'](), sxhvn['index'] + sxhvn[0x0]['length'];
            }
    }
    return -0x1;
}
function g_04coy(zk6q, hszv, cy$bl) {
    var nszhvj = zk6q['indexOf']('?>', hszv);
    if (nszhvj) {
        var y0$lcb = zk6q['substring'](hszv, nszhvj)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (y0$lcb) {
            {
                y0$lcb[0x0]['length'];
            }
            return cy$bl['processingInstruction'](y0$lcb[0x1], y0$lcb[0x2]), nszhvj + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function g_o0w4e() {}
function gd6vzk(by$o, w0_4oe) {
    return by$o['__proto__'] = w0_4oe, by$o;
}
function gk6dhqz(w4eu_g, x2j1s) {
    var ma$cbl,
        sjxnf = [],
        fwg2 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (fwg2['lastIndex'] = x2j1s, fwg2['exec'](w4eu_g); ma$cbl = fwg2['exec'](w4eu_g);) if (sjxnf['push'](ma$cbl), ma$cbl[0x1]) return sjxnf;
}
var gguw4e = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    gvxsjnh = new RegExp('[\\-\\.0-9' + gguw4e['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    gxnvjhs = new RegExp('^' + gguw4e['source'] + gvxsjnh['source'] + '*(?::' + gguw4e['source'] + gvxsjnh['source'] + '*)?$'),
    geow0 = 0x0,
    gjnxsh = 0x1,
    gznjhs = 0x2,
    gfxgu2 = 0x3,
    gf1jxns = 0x4,
    gge = 0x5,
    goe0w4_ = 0x6,
    gkvjhnz = 0x7;
glmb9$a['prototype'] = {
    'parse': function ($b0cl, w_2gue, w2g_) {
        var jf2sx1 = this['domBuilder'];
        jf2sx1['startDocument'](), gc04y_(w_2gue, w_2gue = {}), gvnhxsj($b0cl, w_2gue, w2g_, jf2sx1, this['errorHandler']), jf2sx1['endDocument']();
    }
}, g_o0w4e['prototype'] = {
    'setTagName': function (gw_u4e) {
        if (!gxnvjhs['test'](gw_u4e)) throw new Error('invalid tagName:' + gw_u4e);
        this['tagName'] = gw_u4e;
    },
    'add': function (jzhns, o_cy, k86zdq) {
        if (!gxnvjhs['test'](jzhns)) throw new Error('invalid attribute:' + jzhns);
        this[this['length']++] = {
            'qName': jzhns,
            'value': o_cy,
            'offset': k86zdq
        };
    },
    'length': 0x0,
    'getLocalName': function (mly$bc) {
        return this[mly$bc]['localName'];
    },
    'getLocator': function (nkvzh6) {
        return this[nkvzh6]['locator'];
    },
    'getQName': function (kz8d) {
        return this[kz8d]['qName'];
    },
    'getURI': function (nxvhj) {
        return this[nxvhj]['uri'];
    },
    'getValue': function (y40e_o) {
        return this[y40e_o]['value'];
    }
}, gd6vzk({}, gd6vzk['prototype']) instanceof gd6vzk || (gd6vzk = function (xsf1n, hvxn) {
    function kq6dh() {}
    kq6dh['prototype'] = hvxn, kq6dh = new kq6dh();
    for (hvxn in xsf1n) kq6dh[hvxn] = xsf1n[hvxn];
    return kq6dh;
}), exports['XMLReader'] = glmb9$a;