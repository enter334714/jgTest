var W = wx.$l;
function L9c_7we() {}
function L9c2fk(bz4d5a, jbud1v, oigrm8, ql3yp, tygp36) {
    function n54m0(sfk27w) {
        if (sfk27w > 0xffff) {
            sfk27w -= 0x10000;
            var v5bad = 0xd800 + (sfk27w >> 0xa),
                m540ni = 0xdc00 + (0x3ff & sfk27w);
            return String['fromCharCode'](v5bad, m540ni);
        }
        return String['fromCharCode'](sfk27w);
    }
    function ir0n4($3pql) {
        var n0im4 = $3pql['slice'](0x1, -0x1);
        return n0im4 in oigrm8 ? oigrm8[n0im4] : '#' === n0im4['charAt'](0x0) ? n54m0(parseInt(n0im4['substr'](0x1)['replace']('x', '0x'))) : (tygp36['error']('entity not found:' + $3pql), $3pql);
    }
    function gy6t3(bna4z) {
        if (bna4z > bzva1) {
            var z4n5b = bz4d5a['substring'](bzva1, bna4z)['replace'](/&#?\w+;/g, ir0n4);
            ls$f2 && lq3ty(bzva1), ql3yp['characters'](z4n5b, 0x0, bna4z - bzva1), bzva1 = bna4z;
        }
    }
    function lq3ty(mro8ig, dvu1h) {
        for (; mro8ig >= w_cxk && (dvu1h = g6p3y['exec'](bz4d5a));) bdzj1v = dvu1h['index'], w_cxk = bdzj1v + dvu1h[0x0]['length'], ls$f2['lineNumber']++;
        ls$f2['columnNumber'] = mro8ig - bdzj1v + 0x1;
    }
    for (var bdzj1v = 0x0, w_cxk = 0x0, g6p3y = /.*(?:\r\n?|\n)|.*$/g, ls$f2 = ql3yp['locator'], romi08 = [{ 'currentNSMap': jbud1v }], ls$2 = {}, bzva1 = 0x0;;) {
        try {
            var ecw7f = bz4d5a['indexOf']('<', bzva1);
            if (0x0 > ecw7f) {
                if (!bz4d5a['substr'](bzva1)['match'](/^\s*$/)) {
                    var l3qp$y = ql3yp['doc'],
                        s$23 = l3qp$y['createTextNode'](bz4d5a['substr'](bzva1));
                    l3qp$y['appendChild'](s$23), ql3yp['currentElement'] = s$23;
                }
                return;
            }
            switch (ecw7f > bzva1 && gy6t3(ecw7f), bz4d5a['charAt'](ecw7f + 0x1)) {
                case '/':
                    var w7$f = bz4d5a['indexOf']('>', ecw7f + 0x3),
                        cwk_xe = bz4d5a['substring'](ecw7f + 0x2, w7$f),
                        z5nba4 = romi08['pop']();
                    0x0 > w7$f ? (cwk_xe = bz4d5a['substring'](ecw7f + 0x2)['replace'](/[\s<].*/, ''), tygp36['error']('end tag name: ' + cwk_xe + ' is not complete:' + z5nba4['tagName']), w7$f = ecw7f + 0x1 + cwk_xe['length']) : cwk_xe['match'](/\s</) && (cwk_xe = cwk_xe['replace'](/[\s<].*/, ''), tygp36['error']('end tag name: ' + cwk_xe + ' maybe not complete'), w7$f = ecw7f + 0x1 + cwk_xe['length']);
                    var r6og8t = z5nba4['localNSMap'],
                        x_ec9 = z5nba4['tagName'] == cwk_xe,
                        lq$s2 = x_ec9 || z5nba4['tagName'] && z5nba4['tagName']['toLowerCase']() == cwk_xe['toLowerCase']();
                    if (lq$s2) {
                        if (ql3yp['endElement'](z5nba4['uri'], z5nba4['localName'], cwk_xe), r6og8t) {
                            for (var vudjb in r6og8t) ql3yp['endPrefixMapping'](vudjb);
                        }
                        x_ec9 || tygp36['fatalError']('end tag name: ' + cwk_xe + ' is not match the current start tagName:' + z5nba4['tagName']);
                    } else romi08['push'](z5nba4);
                    w7$f++;
                    break;
                case '?':
                    ls$f2 && lq3ty(ecw7f), w7$f = L9g86to(bz4d5a, ecw7f, ql3yp);
                    break;
                case '!':
                    ls$f2 && lq3ty(ecw7f), w7$f = L9im80o(bz4d5a, ecw7f, ql3yp, tygp36);
                    break;
                default:
                    ls$f2 && lq3ty(ecw7f);
                    var bduj = new L9z40an(),
                        py3tq = romi08[romi08['length'] - 0x1]['currentNSMap'],
                        w7$f = L9n50(bz4d5a, ecw7f, bduj, py3tq, ir0n4, tygp36),
                        ogm8 = bduj['length'];
                    if (!bduj['closed'] && L9fewk7c(bz4d5a, w7$f, bduj['tagName'], ls$2) && (bduj['closed'] = !0x0, oigrm8['nbsp'] || tygp36['warning']('unclosed xml attribute')), ls$f2 && ogm8) {
                        for (var rgi8m = L9ro8t6(ls$f2, {}), zabv5d = 0x0; ogm8 > zabv5d; zabv5d++) {
                            var j1bdu = bduj[zabv5d];
                            lq3ty(j1bdu['offset']), j1bdu['locator'] = L9ro8t6(ls$f2, {});
                        }
                        ql3yp['locator'] = rgi8m, L9o68gir(bduj, ql3yp, py3tq) && romi08['push'](bduj), ql3yp['locator'] = ls$f2;
                    } else L9o68gir(bduj, ql3yp, py3tq) && romi08['push'](bduj);
                    'http://www.w3.org/1999/xhtml' !== bduj['uri'] || bduj['closed'] ? w7$f++ : w7$f = L9c7_ewk(bz4d5a, w7$f, bduj['tagName'], ir0n4, ql3yp);
            }
        } catch (y3p6gt) {
            tygp36['error']('element parse error: ' + y3p6gt), w7$f = -0x1;
        }
        w7$f > bzva1 ? bzva1 = w7$f : gy6t3(Math['max'](ecw7f, bzva1) + 0x1);
    }
}
function L9ro8t6(ylq3pt, l3pytq) {
    return l3pytq['lineNumber'] = ylq3pt['lineNumber'], l3pytq['columnNumber'] = ylq3pt['columnNumber'], l3pytq;
}
function L9n50(zabdv, ma0n45, l2$q3, d1vbza, yl3tp6, naz0) {
    for (var m8ogr, dzbj1v, x9ck_e = ++ma0n45, jbu1vd = L9w7f2$;;) {
        var ma45n0 = zabdv['charAt'](x9ck_e);
        switch (ma45n0) {
            case '=':
                if (jbu1vd === L9ys$lq) m8ogr = zabdv['slice'](ma0n45, x9ck_e), jbu1vd = L9udjb1v;else {
                    if (jbu1vd !== L9adz45) throw new Error('attribute equal must after attrName');
                    jbu1vd = L9udjb1v;
                }
                break;
            case '\x27':
            case '\x22':
                if (jbu1vd === L9udjb1v || jbu1vd === L9ys$lq) {
                    if (jbu1vd === L9ys$lq && (naz0['warning']('attribute value must after "="'), m8ogr = zabdv['slice'](ma0n45, x9ck_e)), ma0n45 = x9ck_e + 0x1, x9ck_e = zabdv['indexOf'](ma45n0, ma0n45), !(x9ck_e > 0x0)) throw new Error('attribute value no end \'' + ma45n0 + '\' match');
                    dzbj1v = zabdv['slice'](ma0n45, x9ck_e)['replace'](/&#?\w+;/g, yl3tp6), l2$q3['add'](m8ogr, dzbj1v, ma0n45 - 0x1), jbu1vd = L9ls$q23;
                } else {
                    if (jbu1vd != L9ekcxw_) throw new Error('attribute value must after "="');
                    dzbj1v = zabdv['slice'](ma0n45, x9ck_e)['replace'](/&#?\w+;/g, yl3tp6), l2$q3['add'](m8ogr, dzbj1v, ma0n45), naz0['warning']('attribute "' + m8ogr + '" missed start quot(' + ma45n0 + ')!!'), ma0n45 = x9ck_e + 0x1, jbu1vd = L9ls$q23;
                }
                break;
            case '/':
                switch (jbu1vd) {
                    case L9w7f2$:
                        l2$q3['setTagName'](zabdv['slice'](ma0n45, x9ck_e));
                    case L9ls$q23:
                    case L9a5bnz4:
                    case L9bvjdz:
                        jbu1vd = L9bvjdz, l2$q3['closed'] = !0x0;
                    case L9ekcxw_:
                    case L9ys$lq:
                    case L9adz45:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return naz0['error']('unexpected end of input'), jbu1vd == L9w7f2$ && l2$q3['setTagName'](zabdv['slice'](ma0n45, x9ck_e)), x9ck_e;
            case '>':
                switch (jbu1vd) {
                    case L9w7f2$:
                        l2$q3['setTagName'](zabdv['slice'](ma0n45, x9ck_e));
                    case L9ls$q23:
                    case L9a5bnz4:
                    case L9bvjdz:
                        break;
                    case L9ekcxw_:
                    case L9ys$lq:
                        dzbj1v = zabdv['slice'](ma0n45, x9ck_e), '/' === dzbj1v['slice'](-0x1) && (l2$q3['closed'] = !0x0, dzbj1v = dzbj1v['slice'](0x0, -0x1));
                    case L9adz45:
                        jbu1vd === L9adz45 && (dzbj1v = m8ogr), jbu1vd == L9ekcxw_ ? (naz0['warning']('attribute "' + dzbj1v + '" missed quot(")!!'), l2$q3['add'](m8ogr, dzbj1v['replace'](/&#?\w+;/g, yl3tp6), ma0n45)) : ('http://www.w3.org/1999/xhtml' === d1vbza[''] && dzbj1v['match'](/^(?:disabled|checked|selected)$/i) || naz0['warning']('attribute "' + dzbj1v + '" missed value!! "' + dzbj1v + '" instead!!'), l2$q3['add'](dzbj1v, dzbj1v, ma0n45));
                        break;
                    case L9udjb1v:
                        throw new Error('attribute value missed!!');
                }
                return x9ck_e;
            case '\u0080':
                ma45n0 = '\x20';
            default:
                if ('\x20' >= ma45n0) switch (jbu1vd) {
                    case L9w7f2$:
                        l2$q3['setTagName'](zabdv['slice'](ma0n45, x9ck_e)), jbu1vd = L9a5bnz4;
                        break;
                    case L9ys$lq:
                        m8ogr = zabdv['slice'](ma0n45, x9ck_e), jbu1vd = L9adz45;
                        break;
                    case L9ekcxw_:
                        var dzbj1v = zabdv['slice'](ma0n45, x9ck_e)['replace'](/&#?\w+;/g, yl3tp6);
                        naz0['warning']('attribute "' + dzbj1v + '" missed quot(")!!'), l2$q3['add'](m8ogr, dzbj1v, ma0n45);
                    case L9ls$q23:
                        jbu1vd = L9a5bnz4;
                } else switch (jbu1vd) {
                    case L9adz45:
                        {
                            l2$q3['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === d1vbza[''] && m8ogr['match'](/^(?:disabled|checked|selected)$/i) || naz0['warning']('attribute "' + m8ogr + '" missed value!! "' + m8ogr + '" instead2!!'), l2$q3['add'](m8ogr, m8ogr, ma0n45), ma0n45 = x9ck_e, jbu1vd = L9ys$lq;
                        break;
                    case L9ls$q23:
                        naz0['warning']('attribute space is required"' + m8ogr + '\x22!!');
                    case L9a5bnz4:
                        jbu1vd = L9ys$lq, ma0n45 = x9ck_e;
                        break;
                    case L9udjb1v:
                        jbu1vd = L9ekcxw_, ma0n45 = x9ck_e;
                        break;
                    case L9bvjdz:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        x9ck_e++;
    }
}
function L9o68gir(rog8t, sf7wk2, dvh1uj) {
    for (var wf7kc = rog8t['tagName'], q3pytl = null, _9kxce = rog8t['length']; _9kxce--;) {
        var s7f2kw = rog8t[_9kxce],
            b5d4z = s7f2kw['qName'],
            rgm8 = s7f2kw['value'],
            u1dj = b5d4z['indexOf'](':');
        if (u1dj > 0x0) var jh1 = s7f2kw['prefix'] = b5d4z['slice'](0x0, u1dj),
            t68go = b5d4z['slice'](u1dj + 0x1),
            nzb4 = 'xmlns' === jh1 && t68go;else t68go = b5d4z, jh1 = null, nzb4 = 'xmlns' === b5d4z && '';
        s7f2kw['localName'] = t68go, nzb4 !== !0x1 && (null == q3pytl && (q3pytl = {}, L9kc_7we(dvh1uj, dvh1uj = {})), dvh1uj[nzb4] = q3pytl[nzb4] = rgm8, s7f2kw['uri'] = 'http://www.w3.org/2000/xmlns/', sf7wk2['startPrefixMapping'](nzb4, rgm8));
    }
    for (var _9kxce = rog8t['length']; _9kxce--;) {
        s7f2kw = rog8t[_9kxce];
        var jh1 = s7f2kw['prefix'];
        jh1 && ('xml' === jh1 && (s7f2kw['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== jh1 && (s7f2kw['uri'] = dvh1uj[jh1 || '']));
    }
    var u1dj = wf7kc['indexOf'](':');
    u1dj > 0x0 ? (jh1 = rog8t['prefix'] = wf7kc['slice'](0x0, u1dj), t68go = rog8t['localName'] = wf7kc['slice'](u1dj + 0x1)) : (jh1 = null, t68go = rog8t['localName'] = wf7kc);
    var gt6p3y = rog8t['uri'] = dvh1uj[jh1 || ''];
    if (sf7wk2['startElement'](gt6p3y, t68go, wf7kc, rog8t), !rog8t['closed']) return rog8t['currentNSMap'] = dvh1uj, rog8t['localNSMap'] = q3pytl, !0x0;
    if (sf7wk2['endElement'](gt6p3y, t68go, wf7kc), q3pytl) {
        for (jh1 in q3pytl) sf7wk2['endPrefixMapping'](jh1);
    }
}
function L9c7_ewk(dj1uv, pyqt3, kf2ws, o0i8mr, ormig8) {
    if (/^(?:script|textarea)$/i['test'](kf2ws)) {
        var m0oi8 = dj1uv['indexOf']('</' + kf2ws + '>', pyqt3),
            m54in = dj1uv['substring'](pyqt3 + 0x1, m0oi8);
        if (/[&<]/['test'](m54in)) return (/^script$/i['test'](kf2ws) ? (ormig8['characters'](m54in, 0x0, m54in['length']), m0oi8) : (m54in = m54in['replace'](/&#?\w+;/g, o0i8mr), ormig8['characters'](m54in, 0x0, m54in['length']), m0oi8)
        );
    }
    return pyqt3 + 0x1;
}
function L9fewk7c(w7cekf, ogrt8, a4b, jhudv1) {
    var sfwk = jhudv1[a4b];
    return null == sfwk && (sfwk = w7cekf['lastIndexOf']('</' + a4b + '>'), ogrt8 > sfwk && (sfwk = w7cekf['lastIndexOf']('</' + a4b)), jhudv1[a4b] = sfwk), ogrt8 > sfwk;
}
function L9kc_7we(s3$l2, oi0m8r) {
    for (var sw$27 in s3$l2) oi0m8r[sw$27] = s3$l2[sw$27];
}
function L9im80o(ly3tp6, sl2$q, zbdj1v, opt6g) {
    var wf27kc = ly3tp6['charAt'](sl2$q + 0x2);
    switch (wf27kc) {
        case '-':
            if ('-' === ly3tp6['charAt'](sl2$q + 0x3)) {
                var pqt3yl = ly3tp6['indexOf']('-->', sl2$q + 0x4);
                return pqt3yl > sl2$q ? (zbdj1v['comment'](ly3tp6, sl2$q + 0x4, pqt3yl - sl2$q - 0x4), pqt3yl + 0x3) : (opt6g['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == ly3tp6['substr'](sl2$q + 0x3, 0x6)) {
                var pqt3yl = ly3tp6['indexOf'](']]>', sl2$q + 0x9);
                return zbdj1v['startCDATA'](), zbdj1v['characters'](ly3tp6, sl2$q + 0x9, pqt3yl - sl2$q - 0x9), zbdj1v['endCDATA'](), pqt3yl + 0x3;
            }
            var hjduv1 = L9xk_e9(ly3tp6, sl2$q),
                dvzb1j = hjduv1['length'];
            if (dvzb1j > 0x1 && /!doctype/i['test'](hjduv1[0x0][0x0])) {
                var dz1bav = hjduv1[0x1][0x0],
                    op6gt = dvzb1j > 0x3 && /^public$/i['test'](hjduv1[0x2][0x0]) && hjduv1[0x3][0x0],
                    p6t = dvzb1j > 0x4 && hjduv1[0x4][0x0],
                    ly6t = hjduv1[dvzb1j - 0x1];
                return zbdj1v['startDTD'](dz1bav, op6gt && op6gt['replace'](/^(['"])(.*?)\1$/, '$2'), p6t && p6t['replace'](/^(['"])(.*?)\1$/, '$2')), zbdj1v['endDTD'](), ly6t['index'] + ly6t[0x0]['length'];
            }
    }
    return -0x1;
}
function L9g86to(an5b4, f$slq, n4z0) {
    var b1avdz = an5b4['indexOf']('?>', f$slq);
    if (b1avdz) {
        var ab5z4n = an5b4['substring'](f$slq, b1avdz)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (ab5z4n) {
            {
                ab5z4n[0x0]['length'];
            }
            return n4z0['processingInstruction'](ab5z4n[0x1], ab5z4n[0x2]), b1avdz + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function L9z40an() {}
function L9nim0(yo6tg, ni0m) {
    return yo6tg['__proto__'] = ni0m, yo6tg;
}
function L9xk_e9(q3l$2s, d4ab5) {
    var gop8,
        abvd1z = [],
        fs2w = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (fs2w['lastIndex'] = d4ab5, fs2w['exec'](q3l$2s); gop8 = fs2w['exec'](q3l$2s);) if (abvd1z['push'](gop8), gop8[0x1]) return abvd1z;
}
var L9udvj = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    L9orgim = new RegExp('[\\-\\.0-9' + L9udvj['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    L9ir04mn = new RegExp('^' + L9udvj['source'] + L9orgim['source'] + '*(?::' + L9udvj['source'] + L9orgim['source'] + '*)?$'),
    L9w7f2$ = 0x0,
    L9ys$lq = 0x1,
    L9adz45 = 0x2,
    L9udjb1v = 0x3,
    L9ekcxw_ = 0x4,
    L9ls$q23 = 0x5,
    L9a5bnz4 = 0x6,
    L9bvjdz = 0x7;
L9c_7we['prototype'] = {
    'parse': function ($7qs, qsl2f, uvj1) {
        var tgpoy = this['domBuilder'];
        tgpoy['startDocument'](), L9kc_7we(qsl2f, qsl2f = {}), L9c2fk($7qs, qsl2f, uvj1, tgpoy, this['errorHandler']), tgpoy['endDocument']();
    }
}, L9z40an['prototype'] = {
    'setTagName': function (zd54) {
        if (!L9ir04mn['test'](zd54)) throw new Error('invalid tagName:' + zd54);
        this['tagName'] = zd54;
    },
    'add': function (ck27, a0n5, adzv5b) {
        if (!L9ir04mn['test'](ck27)) throw new Error('invalid attribute:' + ck27);
        this[this['length']++] = {
            'qName': ck27,
            'value': a0n5,
            'offset': adzv5b
        };
    },
    'length': 0x0,
    'getLocalName': function (j1ubdv) {
        return this[j1ubdv]['localName'];
    },
    'getLocator': function (or68) {
        return this[or68]['locator'];
    },
    'getQName': function (adzv1) {
        return this[adzv1]['qName'];
    },
    'getURI': function (inm0r4) {
        return this[inm0r4]['uri'];
    },
    'getValue': function (syql$3) {
        return this[syql$3]['value'];
    }
}, L9nim0({}, L9nim0['prototype']) instanceof L9nim0 || (L9nim0 = function (n5ab4z, $f2) {
    function anzb4() {}
    anzb4['prototype'] = $f2, anzb4 = new anzb4();
    for ($f2 in n5ab4z) anzb4[$f2] = n5ab4z[$f2];
    return anzb4;
}), exports['XMLReader'] = L9c_7we;