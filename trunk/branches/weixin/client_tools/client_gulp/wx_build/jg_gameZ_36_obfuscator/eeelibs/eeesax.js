var b = wx.$e;
function euk96() {}
function eoepm(m7a_v, ltxg$, qsn93u, f7_v4a, hx$t) {
    function j$3gx(u39ns) {
        if (u39ns > 0xffff) {
            u39ns -= 0x10000;
            var p7aoc = 0xd800 + (u39ns >> 0xa),
                aomp7c = 0xdc00 + (0x3ff & u39ns);
            return String['fromCharCode'](p7aoc, aomp7c);
        }
        return String['fromCharCode'](u39ns);
    }
    function kb56d(w128d5) {
        var zlhrf = w128d5['slice'](0x1, -0x1);
        return zlhrf in qsn93u ? qsn93u[zlhrf] : '#' === zlhrf['charAt'](0x0) ? j$3gx(parseInt(zlhrf['substr'](0x1)['replace']('x', '0x'))) : (hx$t['error']('entity not found:' + w128d5), w128d5);
    }
    function gxhrtl(ztrlhy) {
        if (ztrlhy > d518w2) {
            var txil = m7a_v['substring'](d518w2, ztrlhy)['replace'](/&#?\w+;/g, kb56d);
            dk90b6 && nsk9u6(d518w2), f7_v4a['characters'](txil, 0x0, ztrlhy - d518w2), d518w2 = ztrlhy;
        }
    }
    function nsk9u6(yzvhfr, oa7pm) {
        for (; yzvhfr >= xglt$i && (oa7pm = ub69ks['exec'](m7a_v));) jn$q3 = oa7pm['index'], xglt$i = jn$q3 + oa7pm[0x0]['length'], dk90b6['lineNumber']++;
        dk90b6['columnNumber'] = yzvhfr - jn$q3 + 0x1;
    }
    for (var jn$q3 = 0x0, xglt$i = 0x0, ub69ks = /.*(?:\r\n?|\n)|.*$/g, dk90b6 = f7_v4a['locator'], nqusj3 = [{ 'currentNSMap': ltxg$ }], d158w = {}, d518w2 = 0x0;;) {
        try {
            var acm47 = m7a_v['indexOf']('<', d518w2);
            if (0x0 > acm47) {
                if (!m7a_v['substr'](d518w2)['match'](/^\s*$/)) {
                    var ylrfhz = f7_v4a['doc'],
                        njqs3u = ylrfhz['createTextNode'](m7a_v['substr'](d518w2));
                    ylrfhz['appendChild'](njqs3u), f7_v4a['currentElement'] = njqs3u;
                }
                return;
            }
            switch (acm47 > d518w2 && gxhrtl(acm47), m7a_v['charAt'](acm47 + 0x1)) {
                case '/':
                    var s3uj = m7a_v['indexOf']('>', acm47 + 0x3),
                        qn39s = m7a_v['substring'](acm47 + 0x2, s3uj),
                        vyrzh = nqusj3['pop']();
                    0x0 > s3uj ? (qn39s = m7a_v['substring'](acm47 + 0x2)['replace'](/[\s<].*/, ''), hx$t['error']('end tag name: ' + qn39s + ' is not complete:' + vyrzh['tagName']), s3uj = acm47 + 0x1 + qn39s['length']) : qn39s['match'](/\s</) && (qn39s = qn39s['replace'](/[\s<].*/, ''), hx$t['error']('end tag name: ' + qn39s + ' maybe not complete'), s3uj = acm47 + 0x1 + qn39s['length']);
                    var mca_o7 = vyrzh['localNSMap'],
                        zlyt = vyrzh['tagName'] == qn39s,
                        _4fa7v = zlyt || vyrzh['tagName'] && vyrzh['tagName']['toLowerCase']() == qn39s['toLowerCase']();
                    if (_4fa7v) {
                        if (f7_v4a['endElement'](vyrzh['uri'], vyrzh['localName'], qn39s), mca_o7) {
                            for (var $3qnij in mca_o7) f7_v4a['endPrefixMapping']($3qnij);
                        }
                        zlyt || hx$t['fatalError']('end tag name: ' + qn39s + ' is not match the current start tagName:' + vyrzh['tagName']);
                    } else nqusj3['push'](vyrzh);
                    s3uj++;
                    break;
                case '?':
                    dk90b6 && nsk9u6(acm47), s3uj = ezhrg(m7a_v, acm47, f7_v4a);
                    break;
                case '!':
                    dk90b6 && nsk9u6(acm47), s3uj = esb096k(m7a_v, acm47, f7_v4a, hx$t);
                    break;
                default:
                    dk90b6 && nsk9u6(acm47);
                    var j3xi$g = new euqnsk(),
                        j3uqn = nqusj3[nqusj3['length'] - 0x1]['currentNSMap'],
                        s3uj = ehvrzf(m7a_v, acm47, j3xi$g, j3uqn, kb56d, hx$t),
                        ca7pom = j3xi$g['length'];
                    if (!j3xi$g['closed'] && ebd56(m7a_v, s3uj, j3xi$g['tagName'], d158w) && (j3xi$g['closed'] = !0x0, qsn93u['nbsp'] || hx$t['warning']('unclosed xml attribute')), dk90b6 && ca7pom) {
                        for (var rzyl = eg$tij(dk90b6, {}), d81w52 = 0x0; ca7pom > d81w52; d81w52++) {
                            var d518 = j3xi$g[d81w52];
                            nsk9u6(d518['offset']), d518['locator'] = eg$tij(dk90b6, {});
                        }
                        f7_v4a['locator'] = rzyl, esjq3n(j3xi$g, f7_v4a, j3uqn) && nqusj3['push'](j3xi$g), f7_v4a['locator'] = dk90b6;
                    } else esjq3n(j3xi$g, f7_v4a, j3uqn) && nqusj3['push'](j3xi$g);
                    'http://www.w3.org/1999/xhtml' !== j3xi$g['uri'] || j3xi$g['closed'] ? s3uj++ : s3uj = etxgl(m7a_v, s3uj, j3xi$g['tagName'], kb56d, f7_v4a);
            }
        } catch (ryz4f) {
            hx$t['error']('element parse error: ' + ryz4f), s3uj = -0x1;
        }
        s3uj > d518w2 ? d518w2 = s3uj : gxhrtl(Math['max'](acm47, d518w2) + 0x1);
    }
}
function eg$tij($ltxg, rvz4fy) {
    return rvz4fy['lineNumber'] = $ltxg['lineNumber'], rvz4fy['columnNumber'] = $ltxg['columnNumber'], rvz4fy;
}
function ehvrzf(ryhzlf, ujnq3i, $ij3gx, w520d8, $htx, rzyhlf) {
    for (var ztlyrh, hlxt$, $gitl = ++ujnq3i, zhfyr = euqi3nj;;) {
        var t$hlx = ryhzlf['charAt']($gitl);
        switch (t$hlx) {
            case '=':
                if (zhfyr === ek5d0) ztlyrh = ryhzlf['slice'](ujnq3i, $gitl), zhfyr = enu96sk;else {
                    if (zhfyr !== e$3q) throw new Error('attribute equal must after attrName');
                    zhfyr = enu96sk;
                }
                break;
            case '\x27':
            case '\x22':
                if (zhfyr === enu96sk || zhfyr === ek5d0) {
                    if (zhfyr === ek5d0 && (rzyhlf['warning']('attribute value must after "="'), ztlyrh = ryhzlf['slice'](ujnq3i, $gitl)), ujnq3i = $gitl + 0x1, $gitl = ryhzlf['indexOf'](t$hlx, ujnq3i), !($gitl > 0x0)) throw new Error('attribute value no end \'' + t$hlx + '\' match');
                    hlxt$ = ryhzlf['slice'](ujnq3i, $gitl)['replace'](/&#?\w+;/g, $htx), $ij3gx['add'](ztlyrh, hlxt$, ujnq3i - 0x1), zhfyr = extlg$;
                } else {
                    if (zhfyr != ei$q3n) throw new Error('attribute value must after "="');
                    hlxt$ = ryhzlf['slice'](ujnq3i, $gitl)['replace'](/&#?\w+;/g, $htx), $ij3gx['add'](ztlyrh, hlxt$, ujnq3i), rzyhlf['warning']('attribute "' + ztlyrh + '" missed start quot(' + t$hlx + ')!!'), ujnq3i = $gitl + 0x1, zhfyr = extlg$;
                }
                break;
            case '/':
                switch (zhfyr) {
                    case euqi3nj:
                        $ij3gx['setTagName'](ryhzlf['slice'](ujnq3i, $gitl));
                    case extlg$:
                    case en6usk:
                    case em_7aco:
                        zhfyr = em_7aco, $ij3gx['closed'] = !0x0;
                    case ei$q3n:
                    case ek5d0:
                    case e$3q:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return rzyhlf['error']('unexpected end of input'), zhfyr == euqi3nj && $ij3gx['setTagName'](ryhzlf['slice'](ujnq3i, $gitl)), $gitl;
            case '>':
                switch (zhfyr) {
                    case euqi3nj:
                        $ij3gx['setTagName'](ryhzlf['slice'](ujnq3i, $gitl));
                    case extlg$:
                    case en6usk:
                    case em_7aco:
                        break;
                    case ei$q3n:
                    case ek5d0:
                        hlxt$ = ryhzlf['slice'](ujnq3i, $gitl), '/' === hlxt$['slice'](-0x1) && ($ij3gx['closed'] = !0x0, hlxt$ = hlxt$['slice'](0x0, -0x1));
                    case e$3q:
                        zhfyr === e$3q && (hlxt$ = ztlyrh), zhfyr == ei$q3n ? (rzyhlf['warning']('attribute "' + hlxt$ + '" missed quot(")!!'), $ij3gx['add'](ztlyrh, hlxt$['replace'](/&#?\w+;/g, $htx), ujnq3i)) : ('http://www.w3.org/1999/xhtml' === w520d8[''] && hlxt$['match'](/^(?:disabled|checked|selected)$/i) || rzyhlf['warning']('attribute "' + hlxt$ + '" missed value!! "' + hlxt$ + '" instead!!'), $ij3gx['add'](hlxt$, hlxt$, ujnq3i));
                        break;
                    case enu96sk:
                        throw new Error('attribute value missed!!');
                }
                return $gitl;
            case '\u0080':
                t$hlx = '\x20';
            default:
                if ('\x20' >= t$hlx) switch (zhfyr) {
                    case euqi3nj:
                        $ij3gx['setTagName'](ryhzlf['slice'](ujnq3i, $gitl)), zhfyr = en6usk;
                        break;
                    case ek5d0:
                        ztlyrh = ryhzlf['slice'](ujnq3i, $gitl), zhfyr = e$3q;
                        break;
                    case ei$q3n:
                        var hlxt$ = ryhzlf['slice'](ujnq3i, $gitl)['replace'](/&#?\w+;/g, $htx);
                        rzyhlf['warning']('attribute "' + hlxt$ + '" missed quot(")!!'), $ij3gx['add'](ztlyrh, hlxt$, ujnq3i);
                    case extlg$:
                        zhfyr = en6usk;
                } else switch (zhfyr) {
                    case e$3q:
                        {
                            $ij3gx['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === w520d8[''] && ztlyrh['match'](/^(?:disabled|checked|selected)$/i) || rzyhlf['warning']('attribute "' + ztlyrh + '" missed value!! "' + ztlyrh + '" instead2!!'), $ij3gx['add'](ztlyrh, ztlyrh, ujnq3i), ujnq3i = $gitl, zhfyr = ek5d0;
                        break;
                    case extlg$:
                        rzyhlf['warning']('attribute space is required"' + ztlyrh + '\x22!!');
                    case en6usk:
                        zhfyr = ek5d0, ujnq3i = $gitl;
                        break;
                    case enu96sk:
                        zhfyr = ei$q3n, ujnq3i = $gitl;
                        break;
                    case em_7aco:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        $gitl++;
    }
}
function esjq3n(k90d, ijt$x, zhrfl) {
    for (var unq3ji = k90d['tagName'], k96bs0 = null, k0bd = k90d['length']; k0bd--;) {
        var zv4yf = k90d[k0bd],
            thrlzy = zv4yf['qName'],
            l$gxi = zv4yf['value'],
            igxl$t = thrlzy['indexOf'](':');
        if (igxl$t > 0x0) var t$jxgi = zv4yf['prefix'] = thrlzy['slice'](0x0, igxl$t),
            a7_oc = thrlzy['slice'](igxl$t + 0x1),
            u3snjq = 'xmlns' === t$jxgi && a7_oc;else a7_oc = thrlzy, t$jxgi = null, u3snjq = 'xmlns' === thrlzy && '';
        zv4yf['localName'] = a7_oc, u3snjq !== !0x1 && (null == k96bs0 && (k96bs0 = {}, ehylf(zhrfl, zhrfl = {})), zhrfl[u3snjq] = k96bs0[u3snjq] = l$gxi, zv4yf['uri'] = 'http://www.w3.org/2000/xmlns/', ijt$x['startPrefixMapping'](u3snjq, l$gxi));
    }
    for (var k0bd = k90d['length']; k0bd--;) {
        zv4yf = k90d[k0bd];
        var t$jxgi = zv4yf['prefix'];
        t$jxgi && ('xml' === t$jxgi && (zv4yf['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== t$jxgi && (zv4yf['uri'] = zhrfl[t$jxgi || '']));
    }
    var igxl$t = unq3ji['indexOf'](':');
    igxl$t > 0x0 ? (t$jxgi = k90d['prefix'] = unq3ji['slice'](0x0, igxl$t), a7_oc = k90d['localName'] = unq3ji['slice'](igxl$t + 0x1)) : (t$jxgi = null, a7_oc = k90d['localName'] = unq3ji);
    var gxt$l = k90d['uri'] = zhrfl[t$jxgi || ''];
    if (ijt$x['startElement'](gxt$l, a7_oc, unq3ji, k90d), !k90d['closed']) return k90d['currentNSMap'] = zhrfl, k90d['localNSMap'] = k96bs0, !0x0;
    if (ijt$x['endElement'](gxt$l, a7_oc, unq3ji), k96bs0) {
        for (t$jxgi in k96bs0) ijt$x['endPrefixMapping'](t$jxgi);
    }
}
function etxgl(va7_m4, w218, lxtgh$, v_zyf, thzglr) {
    if (/^(?:script|textarea)$/i['test'](lxtgh$)) {
        var rlzhyt = va7_m4['indexOf']('</' + lxtgh$ + '>', w218),
            thglx = va7_m4['substring'](w218 + 0x1, rlzhyt);
        if (/[&<]/['test'](thglx)) return (/^script$/i['test'](lxtgh$) ? (thzglr['characters'](thglx, 0x0, thglx['length']), rlzhyt) : (thglx = thglx['replace'](/&#?\w+;/g, v_zyf), thzglr['characters'](thglx, 0x0, thglx['length']), rlzhyt)
        );
    }
    return w218 + 0x1;
}
function ebd56(c_mao, oa7c, _47af, m_4va) {
    var igtlx$ = m_4va[_47af];
    return null == igtlx$ && (igtlx$ = c_mao['lastIndexOf']('</' + _47af + '>'), oa7c > igtlx$ && (igtlx$ = c_mao['lastIndexOf']('</' + _47af)), m_4va[_47af] = igtlx$), oa7c > igtlx$;
}
function ehylf(lrfhz, yrzhlt) {
    for (var ks6nu in lrfhz) yrzhlt[ks6nu] = lrfhz[ks6nu];
}
function esb096k(nquj3s, glhxtr, _amv74, in3j$q) {
    var b6uks9 = nquj3s['charAt'](glhxtr + 0x2);
    switch (b6uks9) {
        case '-':
            if ('-' === nquj3s['charAt'](glhxtr + 0x3)) {
                var uq3sjn = nquj3s['indexOf']('-->', glhxtr + 0x4);
                return uq3sjn > glhxtr ? (_amv74['comment'](nquj3s, glhxtr + 0x4, uq3sjn - glhxtr - 0x4), uq3sjn + 0x3) : (in3j$q['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == nquj3s['substr'](glhxtr + 0x3, 0x6)) {
                var uq3sjn = nquj3s['indexOf'](']]>', glhxtr + 0x9);
                return _amv74['startCDATA'](), _amv74['characters'](nquj3s, glhxtr + 0x9, uq3sjn - glhxtr - 0x9), _amv74['endCDATA'](), uq3sjn + 0x3;
            }
            var ku96sn = etgx$li(nquj3s, glhxtr),
                us9k6b = ku96sn['length'];
            if (us9k6b > 0x1 && /!doctype/i['test'](ku96sn[0x0][0x0])) {
                var iqx3j = ku96sn[0x1][0x0],
                    d06 = us9k6b > 0x3 && /^public$/i['test'](ku96sn[0x2][0x0]) && ku96sn[0x3][0x0],
                    v4af7_ = us9k6b > 0x4 && ku96sn[0x4][0x0],
                    k9n6 = ku96sn[us9k6b - 0x1];
                return _amv74['startDTD'](iqx3j, d06 && d06['replace'](/^(['"])(.*?)\1$/, '$2'), v4af7_ && v4af7_['replace'](/^(['"])(.*?)\1$/, '$2')), _amv74['endDTD'](), k9n6['index'] + k9n6[0x0]['length'];
            }
    }
    return -0x1;
}
function ezhrg(qi3$jx, qun39, qnu39) {
    var hvrfyz = qi3$jx['indexOf']('?>', qun39);
    if (hvrfyz) {
        var $qij3 = qi3$jx['substring'](qun39, hvrfyz)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if ($qij3) {
            {
                $qij3[0x0]['length'];
            }
            return qnu39['processingInstruction']($qij3[0x1], $qij3[0x2]), hvrfyz + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function euqnsk() {}
function ezrtlhy(x$3, om_c7a) {
    return x$3['__proto__'] = om_c7a, x$3;
}
function etgx$li(k9ns6, sunj3) {
    var ztlgrh,
        oepac = [],
        lzr = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (lzr['lastIndex'] = sunj3, lzr['exec'](k9ns6); ztlgrh = lzr['exec'](k9ns6);) if (oepac['push'](ztlgrh), ztlgrh[0x1]) return oepac;
}
var e$jgi = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    ema_co7 = new RegExp('[\\-\\.0-9' + e$jgi['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    eq3ji = new RegExp('^' + e$jgi['source'] + ema_co7['source'] + '*(?::' + e$jgi['source'] + ema_co7['source'] + '*)?$'),
    euqi3nj = 0x0,
    ek5d0 = 0x1,
    e$3q = 0x2,
    enu96sk = 0x3,
    ei$q3n = 0x4,
    extlg$ = 0x5,
    en6usk = 0x6,
    em_7aco = 0x7;
euk96['prototype'] = {
    'parse': function (hvyrzf, moa, d6bk5) {
        var f_7yv4 = this['domBuilder'];
        f_7yv4['startDocument'](), ehylf(moa, moa = {}), eoepm(hvyrzf, moa, d6bk5, f_7yv4, this['errorHandler']), f_7yv4['endDocument']();
    }
}, euqnsk['prototype'] = {
    'setTagName': function (nq3$ij) {
        if (!eq3ji['test'](nq3$ij)) throw new Error('invalid tagName:' + nq3$ij);
        this['tagName'] = nq3$ij;
    },
    'add': function (v4_y7f, k6nu, gx$i3j) {
        if (!eq3ji['test'](v4_y7f)) throw new Error('invalid attribute:' + v4_y7f);
        this[this['length']++] = {
            'qName': v4_y7f,
            'value': k6nu,
            'offset': gx$i3j
        };
    },
    'length': 0x0,
    'getLocalName': function (ijunq) {
        return this[ijunq]['localName'];
    },
    'getLocator': function (mc74a_) {
        return this[mc74a_]['locator'];
    },
    'getQName': function (j3gix) {
        return this[j3gix]['qName'];
    },
    'getURI': function (o7ap) {
        return this[o7ap]['uri'];
    },
    'getValue': function (rhtlzy) {
        return this[rhtlzy]['value'];
    }
}, ezrtlhy({}, ezrtlhy['prototype']) instanceof ezrtlhy || (ezrtlhy = function (i3jn$q, db90) {
    function $gijt() {}
    $gijt['prototype'] = db90, $gijt = new $gijt();
    for (db90 in i3jn$q) $gijt[db90] = i3jn$q[db90];
    return $gijt;
}), exports['XMLReader'] = euk96;