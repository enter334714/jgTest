var b = wx.$e;
function emc7a_o() {}
function eu39qs(ilg$tx, zfrlhy, q3$ni, zlth, rzy4f) {
    function m7_coa(zlyhfr) {
        if (zlyhfr > 0xffff) {
            zlyhfr -= 0x10000;
            var rz4 = 0xd800 + (zlyhfr >> 0xa),
                jg$ti = 0xdc00 + (0x3ff & zlyhfr);
            return String['fromCharCode'](rz4, jg$ti);
        }
        return String['fromCharCode'](zlyhfr);
    }
    function $xqj3(zy4f) {
        var n6k9 = zy4f['slice'](0x1, -0x1);
        return n6k9 in q3$ni ? q3$ni[n6k9] : '#' === n6k9['charAt'](0x0) ? m7_coa(parseInt(n6k9['substr'](0x1)['replace']('x', '0x'))) : (rzy4f['error']('entity not found:' + zy4f), zy4f);
    }
    function itglx(d852) {
        if (d852 > jg$xti) {
            var yzrhtl = ilg$tx['substring'](jg$xti, d852)['replace'](/&#?\w+;/g, $xqj3);
            d5b860 && gt$xli(jg$xti), zlth['characters'](yzrhtl, 0x0, d852 - jg$xti), jg$xti = d852;
        }
    }
    function gt$xli(rfhzy, rhzlty) {
        for (; rfhzy >= hvzfyr && (rhzlty = zlthry['exec'](ilg$tx));) txghl = rhzlty['index'], hvzfyr = txghl + rhzlty[0x0]['length'], d5b860['lineNumber']++;
        d5b860['columnNumber'] = rfhzy - txghl + 0x1;
    }
    for (var txghl = 0x0, hvzfyr = 0x0, zlthry = /.*(?:\r\n?|\n)|.*$/g, d5b860 = zlth['locator'], ca7mop = [{ 'currentNSMap': zfrlhy }], y4zf_v = {}, jg$xti = 0x0;;) {
        try {
            var zy4v = ilg$tx['indexOf']('<', jg$xti);
            if (0x0 > zy4v) {
                if (!ilg$tx['substr'](jg$xti)['match'](/^\s*$/)) {
                    var n93us = zlth['doc'],
                        grhlz = n93us['createTextNode'](ilg$tx['substr'](jg$xti));
                    n93us['appendChild'](grhlz), zlth['currentElement'] = grhlz;
                }
                return;
            }
            switch (zy4v > jg$xti && itglx(zy4v), ilg$tx['charAt'](zy4v + 0x1)) {
                case '/':
                    var ltrhz = ilg$tx['indexOf']('>', zy4v + 0x3),
                        k0bd56 = ilg$tx['substring'](zy4v + 0x2, ltrhz),
                        vfzy4 = ca7mop['pop']();
                    0x0 > ltrhz ? (k0bd56 = ilg$tx['substring'](zy4v + 0x2)['replace'](/[\s<].*/, ''), rzy4f['error']('end tag name: ' + k0bd56 + ' is not complete:' + vfzy4['tagName']), ltrhz = zy4v + 0x1 + k0bd56['length']) : k0bd56['match'](/\s</) && (k0bd56 = k0bd56['replace'](/[\s<].*/, ''), rzy4f['error']('end tag name: ' + k0bd56 + ' maybe not complete'), ltrhz = zy4v + 0x1 + k0bd56['length']);
                    var inj3$q = vfzy4['localNSMap'],
                        $j3 = vfzy4['tagName'] == k0bd56,
                        v_47fy = $j3 || vfzy4['tagName'] && vfzy4['tagName']['toLowerCase']() == k0bd56['toLowerCase']();
                    if (v_47fy) {
                        if (zlth['endElement'](vfzy4['uri'], vfzy4['localName'], k0bd56), inj3$q) {
                            for (var lfrhz in inj3$q) zlth['endPrefixMapping'](lfrhz);
                        }
                        $j3 || rzy4f['fatalError']('end tag name: ' + k0bd56 + ' is not match the current start tagName:' + vfzy4['tagName']);
                    } else ca7mop['push'](vfzy4);
                    ltrhz++;
                    break;
                case '?':
                    d5b860 && gt$xli(zy4v), ltrhz = evf4y_(ilg$tx, zy4v, zlth);
                    break;
                case '!':
                    d5b860 && gt$xli(zy4v), ltrhz = eo7am_(ilg$tx, zy4v, zlth, rzy4f);
                    break;
                default:
                    d5b860 && gt$xli(zy4v);
                    var q3usnj = new elhgxr(),
                        $gilx = ca7mop[ca7mop['length'] - 0x1]['currentNSMap'],
                        ltrhz = ecpmaeo(ilg$tx, zy4v, q3usnj, $gilx, $xqj3, rzy4f),
                        ztlgrh = q3usnj['length'];
                    if (!q3usnj['closed'] && ery(ilg$tx, ltrhz, q3usnj['tagName'], y4zf_v) && (q3usnj['closed'] = !0x0, q3$ni['nbsp'] || rzy4f['warning']('unclosed xml attribute')), d5b860 && ztlgrh) {
                        for (var uk96sn = eb90ks6(d5b860, {}), tgrhzl = 0x0; ztlgrh > tgrhzl; tgrhzl++) {
                            var rhgltx = q3usnj[tgrhzl];
                            gt$xli(rhgltx['offset']), rhgltx['locator'] = eb90ks6(d5b860, {});
                        }
                        zlth['locator'] = uk96sn, e$jgixt(q3usnj, zlth, $gilx) && ca7mop['push'](q3usnj), zlth['locator'] = d5b860;
                    } else e$jgixt(q3usnj, zlth, $gilx) && ca7mop['push'](q3usnj);
                    'http://www.w3.org/1999/xhtml' !== q3usnj['uri'] || q3usnj['closed'] ? ltrhz++ : ltrhz = ejxgi3(ilg$tx, ltrhz, q3usnj['tagName'], $xqj3, zlth);
            }
        } catch (d906bk) {
            rzy4f['error']('element parse error: ' + d906bk), ltrhz = -0x1;
        }
        ltrhz > jg$xti ? jg$xti = ltrhz : itglx(Math['max'](zy4v, jg$xti) + 0x1);
    }
}
function eb90ks6(v4fry, snk9) {
    return snk9['lineNumber'] = v4fry['lineNumber'], snk9['columnNumber'] = v4fry['columnNumber'], snk9;
}
function ecpmaeo(cma7o_, f_4v7y, dkb56, iu3qnj, xthrg, tyzrh) {
    for (var f4vy, a4_vf, ghltz = ++f_4v7y, _amv4 = eo7a_;;) {
        var i3$xjq = cma7o_['charAt'](ghltz);
        switch (i3$xjq) {
            case '=':
                if (_amv4 === eq$xj3) f4vy = cma7o_['slice'](f_4v7y, ghltz), _amv4 = eix$jtg;else {
                    if (_amv4 !== esnj3uq) throw new Error('attribute equal must after attrName');
                    _amv4 = eix$jtg;
                }
                break;
            case '\x27':
            case '\x22':
                if (_amv4 === eix$jtg || _amv4 === eq$xj3) {
                    if (_amv4 === eq$xj3 && (tyzrh['warning']('attribute value must after "="'), f4vy = cma7o_['slice'](f_4v7y, ghltz)), f_4v7y = ghltz + 0x1, ghltz = cma7o_['indexOf'](i3$xjq, f_4v7y), !(ghltz > 0x0)) throw new Error('attribute value no end \'' + i3$xjq + '\' match');
                    a4_vf = cma7o_['slice'](f_4v7y, ghltz)['replace'](/&#?\w+;/g, xthrg), dkb56['add'](f4vy, a4_vf, f_4v7y - 0x1), _amv4 = equn3i;
                } else {
                    if (_amv4 != e_m7oac) throw new Error('attribute value must after "="');
                    a4_vf = cma7o_['slice'](f_4v7y, ghltz)['replace'](/&#?\w+;/g, xthrg), dkb56['add'](f4vy, a4_vf, f_4v7y), tyzrh['warning']('attribute "' + f4vy + '" missed start quot(' + i3$xjq + ')!!'), f_4v7y = ghltz + 0x1, _amv4 = equn3i;
                }
                break;
            case '/':
                switch (_amv4) {
                    case eo7a_:
                        dkb56['setTagName'](cma7o_['slice'](f_4v7y, ghltz));
                    case equn3i:
                    case ekd50b6:
                    case equ93n:
                        _amv4 = equ93n, dkb56['closed'] = !0x0;
                    case e_m7oac:
                    case eq$xj3:
                    case esnj3uq:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return tyzrh['error']('unexpected end of input'), _amv4 == eo7a_ && dkb56['setTagName'](cma7o_['slice'](f_4v7y, ghltz)), ghltz;
            case '>':
                switch (_amv4) {
                    case eo7a_:
                        dkb56['setTagName'](cma7o_['slice'](f_4v7y, ghltz));
                    case equn3i:
                    case ekd50b6:
                    case equ93n:
                        break;
                    case e_m7oac:
                    case eq$xj3:
                        a4_vf = cma7o_['slice'](f_4v7y, ghltz), '/' === a4_vf['slice'](-0x1) && (dkb56['closed'] = !0x0, a4_vf = a4_vf['slice'](0x0, -0x1));
                    case esnj3uq:
                        _amv4 === esnj3uq && (a4_vf = f4vy), _amv4 == e_m7oac ? (tyzrh['warning']('attribute "' + a4_vf + '" missed quot(")!!'), dkb56['add'](f4vy, a4_vf['replace'](/&#?\w+;/g, xthrg), f_4v7y)) : ('http://www.w3.org/1999/xhtml' === iu3qnj[''] && a4_vf['match'](/^(?:disabled|checked|selected)$/i) || tyzrh['warning']('attribute "' + a4_vf + '" missed value!! "' + a4_vf + '" instead!!'), dkb56['add'](a4_vf, a4_vf, f_4v7y));
                        break;
                    case eix$jtg:
                        throw new Error('attribute value missed!!');
                }
                return ghltz;
            case '\u0080':
                i3$xjq = '\x20';
            default:
                if ('\x20' >= i3$xjq) switch (_amv4) {
                    case eo7a_:
                        dkb56['setTagName'](cma7o_['slice'](f_4v7y, ghltz)), _amv4 = ekd50b6;
                        break;
                    case eq$xj3:
                        f4vy = cma7o_['slice'](f_4v7y, ghltz), _amv4 = esnj3uq;
                        break;
                    case e_m7oac:
                        var a4_vf = cma7o_['slice'](f_4v7y, ghltz)['replace'](/&#?\w+;/g, xthrg);
                        tyzrh['warning']('attribute "' + a4_vf + '" missed quot(")!!'), dkb56['add'](f4vy, a4_vf, f_4v7y);
                    case equn3i:
                        _amv4 = ekd50b6;
                } else switch (_amv4) {
                    case esnj3uq:
                        {
                            dkb56['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === iu3qnj[''] && f4vy['match'](/^(?:disabled|checked|selected)$/i) || tyzrh['warning']('attribute "' + f4vy + '" missed value!! "' + f4vy + '" instead2!!'), dkb56['add'](f4vy, f4vy, f_4v7y), f_4v7y = ghltz, _amv4 = eq$xj3;
                        break;
                    case equn3i:
                        tyzrh['warning']('attribute space is required"' + f4vy + '\x22!!');
                    case ekd50b6:
                        _amv4 = eq$xj3, f_4v7y = ghltz;
                        break;
                    case eix$jtg:
                        _amv4 = e_m7oac, f_4v7y = ghltz;
                        break;
                    case equ93n:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        ghltz++;
    }
}
function e$jgixt(q$i, lgt, tzlg) {
    for (var n3iq = q$i['tagName'], qi$ = null, u3iqj = q$i['length']; u3iqj--;) {
        var yhtlrz = q$i[u3iqj],
            b09kd6 = yhtlrz['qName'],
            lgtxh = yhtlrz['value'],
            fvry4z = b09kd6['indexOf'](':');
        if (fvry4z > 0x0) var j3i$nq = yhtlrz['prefix'] = b09kd6['slice'](0x0, fvry4z),
            bk6d50 = b09kd6['slice'](fvry4z + 0x1),
            w5281d = 'xmlns' === j3i$nq && bk6d50;else bk6d50 = b09kd6, j3i$nq = null, w5281d = 'xmlns' === b09kd6 && '';
        yhtlrz['localName'] = bk6d50, w5281d !== !0x1 && (null == qi$ && (qi$ = {}, emopce(tzlg, tzlg = {})), tzlg[w5281d] = qi$[w5281d] = lgtxh, yhtlrz['uri'] = 'http://www.w3.org/2000/xmlns/', lgt['startPrefixMapping'](w5281d, lgtxh));
    }
    for (var u3iqj = q$i['length']; u3iqj--;) {
        yhtlrz = q$i[u3iqj];
        var j3i$nq = yhtlrz['prefix'];
        j3i$nq && ('xml' === j3i$nq && (yhtlrz['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== j3i$nq && (yhtlrz['uri'] = tzlg[j3i$nq || '']));
    }
    var fvry4z = n3iq['indexOf'](':');
    fvry4z > 0x0 ? (j3i$nq = q$i['prefix'] = n3iq['slice'](0x0, fvry4z), bk6d50 = q$i['localName'] = n3iq['slice'](fvry4z + 0x1)) : (j3i$nq = null, bk6d50 = q$i['localName'] = n3iq);
    var lthx = q$i['uri'] = tzlg[j3i$nq || ''];
    if (lgt['startElement'](lthx, bk6d50, n3iq, q$i), !q$i['closed']) return q$i['currentNSMap'] = tzlg, q$i['localNSMap'] = qi$, !0x0;
    if (lgt['endElement'](lthx, bk6d50, n3iq), qi$) {
        for (j3i$nq in qi$) lgt['endPrefixMapping'](j3i$nq);
    }
}
function ejxgi3(b5068, mapo7, vfyhz, quj3ns, bd085w) {
    if (/^(?:script|textarea)$/i['test'](vfyhz)) {
        var hytlzr = b5068['indexOf']('</' + vfyhz + '>', mapo7),
            b60k9 = b5068['substring'](mapo7 + 0x1, hytlzr);
        if (/[&<]/['test'](b60k9)) return (/^script$/i['test'](vfyhz) ? (bd085w['characters'](b60k9, 0x0, b60k9['length']), hytlzr) : (b60k9 = b60k9['replace'](/&#?\w+;/g, quj3ns), bd085w['characters'](b60k9, 0x0, b60k9['length']), hytlzr)
        );
    }
    return mapo7 + 0x1;
}
function ery(gxtlh, hzyfvr, xrht, ma4_v) {
    var _v74y = ma4_v[xrht];
    return null == _v74y && (_v74y = gxtlh['lastIndexOf']('</' + xrht + '>'), hzyfvr > _v74y && (_v74y = gxtlh['lastIndexOf']('</' + xrht)), ma4_v[xrht] = _v74y), hzyfvr > _v74y;
}
function emopce(v_a7m4, g$xj3) {
    for (var qs in v_a7m4) g$xj3[qs] = v_a7m4[qs];
}
function eo7am_(k09bd, rzyvf4, $lixg, qij3x$) {
    var q3u9ns = k09bd['charAt'](rzyvf4 + 0x2);
    switch (q3u9ns) {
        case '-':
            if ('-' === k09bd['charAt'](rzyvf4 + 0x3)) {
                var d508w = k09bd['indexOf']('-->', rzyvf4 + 0x4);
                return d508w > rzyvf4 ? ($lixg['comment'](k09bd, rzyvf4 + 0x4, d508w - rzyvf4 - 0x4), d508w + 0x3) : (qij3x$['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == k09bd['substr'](rzyvf4 + 0x3, 0x6)) {
                var d508w = k09bd['indexOf'](']]>', rzyvf4 + 0x9);
                return $lixg['startCDATA'](), $lixg['characters'](k09bd, rzyvf4 + 0x9, d508w - rzyvf4 - 0x9), $lixg['endCDATA'](), d508w + 0x3;
            }
            var xg3$ij = eemcoa(k09bd, rzyvf4),
                gjx$i3 = xg3$ij['length'];
            if (gjx$i3 > 0x1 && /!doctype/i['test'](xg3$ij[0x0][0x0])) {
                var $3jnqi = xg3$ij[0x1][0x0],
                    ryz = gjx$i3 > 0x3 && /^public$/i['test'](xg3$ij[0x2][0x0]) && xg3$ij[0x3][0x0],
                    yhzrf = gjx$i3 > 0x4 && xg3$ij[0x4][0x0],
                    u6kns = xg3$ij[gjx$i3 - 0x1];
                return $lixg['startDTD']($3jnqi, ryz && ryz['replace'](/^(['"])(.*?)\1$/, '$2'), yhzrf && yhzrf['replace'](/^(['"])(.*?)\1$/, '$2')), $lixg['endDTD'](), u6kns['index'] + u6kns[0x0]['length'];
            }
    }
    return -0x1;
}
function evf4y_(qujn3s, ap7cmo, lgt$i) {
    var opeca = qujn3s['indexOf']('?>', ap7cmo);
    if (opeca) {
        var $gjix3 = qujn3s['substring'](ap7cmo, opeca)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if ($gjix3) {
            {
                $gjix3[0x0]['length'];
            }
            return lgt$i['processingInstruction']($gjix3[0x1], $gjix3[0x2]), opeca + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function elhgxr() {}
function erfzhl(db0k9, s9unq) {
    return db0k9['__proto__'] = s9unq, db0k9;
}
function eemcoa(tjxi, q9kus) {
    var kns6u,
        trxg = [],
        inq = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (inq['lastIndex'] = q9kus, inq['exec'](tjxi); kns6u = inq['exec'](tjxi);) if (trxg['push'](kns6u), kns6u[0x1]) return trxg;
}
var eg$i3xj = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    ehztyl = new RegExp('[\\-\\.0-9' + eg$i3xj['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    elrhx = new RegExp('^' + eg$i3xj['source'] + ehztyl['source'] + '*(?::' + eg$i3xj['source'] + ehztyl['source'] + '*)?$'),
    eo7a_ = 0x0,
    eq$xj3 = 0x1,
    esnj3uq = 0x2,
    eix$jtg = 0x3,
    e_m7oac = 0x4,
    equn3i = 0x5,
    ekd50b6 = 0x6,
    equ93n = 0x7;
emc7a_o['prototype'] = {
    'parse': function (d51w8, thryzl, rglhz) {
        var va4m = this['domBuilder'];
        va4m['startDocument'](), emopce(thryzl, thryzl = {}), eu39qs(d51w8, thryzl, rglhz, va4m, this['errorHandler']), va4m['endDocument']();
    }
}, elhgxr['prototype'] = {
    'setTagName': function (zgrhlt) {
        if (!elrhx['test'](zgrhlt)) throw new Error('invalid tagName:' + zgrhlt);
        this['tagName'] = zgrhlt;
    },
    'add': function (t$ilgx, v7y_f, yfvr) {
        if (!elrhx['test'](t$ilgx)) throw new Error('invalid attribute:' + t$ilgx);
        this[this['length']++] = {
            'qName': t$ilgx,
            'value': v7y_f,
            'offset': yfvr
        };
    },
    'length': 0x0,
    'getLocalName': function (yfhzlr) {
        return this[yfhzlr]['localName'];
    },
    'getLocator': function (f_4vyz) {
        return this[f_4vyz]['locator'];
    },
    'getQName': function (lztrhg) {
        return this[lztrhg]['qName'];
    },
    'getURI': function ($gxt) {
        return this[$gxt]['uri'];
    },
    'getValue': function (zyrhlf) {
        return this[zyrhlf]['value'];
    }
}, erfzhl({}, erfzhl['prototype']) instanceof erfzhl || (erfzhl = function (wd1258, ltgx$) {
    function ix$jt() {}
    ix$jt['prototype'] = ltgx$, ix$jt = new ix$jt();
    for (ltgx$ in wd1258) ix$jt[ltgx$] = wd1258[ltgx$];
    return ix$jt;
}), exports['XMLReader'] = emc7a_o;