var b = wx.$e;
function ezltrhy() {}
function eq9knus(bsu, v74_af, kbs69, _74yf, pa7moc) {
    function vy_47f(m_7ca4) {
        if (m_7ca4 > 0xffff) {
            m_7ca4 -= 0x10000;
            var ryl = 0xd800 + (m_7ca4 >> 0xa),
                xtjgi = 0xdc00 + (0x3ff & m_7ca4);
            return String['fromCharCode'](ryl, xtjgi);
        }
        return String['fromCharCode'](m_7ca4);
    }
    function w58b(rzhlg) {
        var q3iuj = rzhlg['slice'](0x1, -0x1);
        return q3iuj in kbs69 ? kbs69[q3iuj] : '#' === q3iuj['charAt'](0x0) ? vy_47f(parseInt(q3iuj['substr'](0x1)['replace']('x', '0x'))) : (pa7moc['error']('entity not found:' + rzhlg), rzhlg);
    }
    function s6nku9(hylrt) {
        if (hylrt > nk9us6) {
            var i3$qj = bsu['substring'](nk9us6, hylrt)['replace'](/&#?\w+;/g, w58b);
            ukbs9 && bd0k6(nk9us6), _74yf['characters'](i3$qj, 0x0, hylrt - nk9us6), nk9us6 = hylrt;
        }
    }
    function bd0k6(lhtrgx, fv_4a7) {
        for (; lhtrgx >= g$lxt && (fv_4a7 = qn$ij['exec'](bsu));) _7a4mv = fv_4a7['index'], g$lxt = _7a4mv + fv_4a7[0x0]['length'], ukbs9['lineNumber']++;
        ukbs9['columnNumber'] = lhtrgx - _7a4mv + 0x1;
    }
    for (var _7a4mv = 0x0, g$lxt = 0x0, qn$ij = /.*(?:\r\n?|\n)|.*$/g, ukbs9 = _74yf['locator'], ac4 = [{ 'currentNSMap': v74_af }], kn9uq = {}, nk9us6 = 0x0;;) {
        try {
            var yhlt = bsu['indexOf']('<', nk9us6);
            if (0x0 > yhlt) {
                if (!bsu['substr'](nk9us6)['match'](/^\s*$/)) {
                    var yvzfr4 = _74yf['doc'],
                        iuj3q = yvzfr4['createTextNode'](bsu['substr'](nk9us6));
                    yvzfr4['appendChild'](iuj3q), _74yf['currentElement'] = iuj3q;
                }
                return;
            }
            switch (yhlt > nk9us6 && s6nku9(yhlt), bsu['charAt'](yhlt + 0x1)) {
                case '/':
                    var b506d = bsu['indexOf']('>', yhlt + 0x3),
                        vrh = bsu['substring'](yhlt + 0x2, b506d),
                        zflyh = ac4['pop']();
                    0x0 > b506d ? (vrh = bsu['substring'](yhlt + 0x2)['replace'](/[\s<].*/, ''), pa7moc['error']('end tag name: ' + vrh + ' is not complete:' + zflyh['tagName']), b506d = yhlt + 0x1 + vrh['length']) : vrh['match'](/\s</) && (vrh = vrh['replace'](/[\s<].*/, ''), pa7moc['error']('end tag name: ' + vrh + ' maybe not complete'), b506d = yhlt + 0x1 + vrh['length']);
                    var c4m7 = zflyh['localNSMap'],
                        yf4zv_ = zflyh['tagName'] == vrh,
                        ocpma7 = yf4zv_ || zflyh['tagName'] && zflyh['tagName']['toLowerCase']() == vrh['toLowerCase']();
                    if (ocpma7) {
                        if (_74yf['endElement'](zflyh['uri'], zflyh['localName'], vrh), c4m7) {
                            for (var hvyz in c4m7) _74yf['endPrefixMapping'](hvyz);
                        }
                        yf4zv_ || pa7moc['fatalError']('end tag name: ' + vrh + ' is not match the current start tagName:' + zflyh['tagName']);
                    } else ac4['push'](zflyh);
                    b506d++;
                    break;
                case '?':
                    ukbs9 && bd0k6(yhlt), b506d = equn3sj(bsu, yhlt, _74yf);
                    break;
                case '!':
                    ukbs9 && bd0k6(yhlt), b506d = ekd09(bsu, yhlt, _74yf, pa7moc);
                    break;
                default:
                    ukbs9 && bd0k6(yhlt);
                    var acem = new e$htxlg(),
                        af4v7 = ac4[ac4['length'] - 0x1]['currentNSMap'],
                        b506d = eku96sb(bsu, yhlt, acem, af4v7, w58b, pa7moc),
                        ma47 = acem['length'];
                    if (!acem['closed'] && e_cao7m(bsu, b506d, acem['tagName'], kn9uq) && (acem['closed'] = !0x0, kbs69['nbsp'] || pa7moc['warning']('unclosed xml attribute')), ukbs9 && ma47) {
                        for (var rlhyzt = eb9su(ukbs9, {}), a74fv = 0x0; ma47 > a74fv; a74fv++) {
                            var zrfyvh = acem[a74fv];
                            bd0k6(zrfyvh['offset']), zrfyvh['locator'] = eb9su(ukbs9, {});
                        }
                        _74yf['locator'] = rlhyzt, ec_o7ma(acem, _74yf, af4v7) && ac4['push'](acem), _74yf['locator'] = ukbs9;
                    } else ec_o7ma(acem, _74yf, af4v7) && ac4['push'](acem);
                    'http://www.w3.org/1999/xhtml' !== acem['uri'] || acem['closed'] ? b506d++ : b506d = emv4_(bsu, b506d, acem['tagName'], w58b, _74yf);
            }
        } catch (xjq3$i) {
            pa7moc['error']('element parse error: ' + xjq3$i), b506d = -0x1;
        }
        b506d > nk9us6 ? nk9us6 = b506d : s6nku9(Math['max'](yhlt, nk9us6) + 0x1);
    }
}
function eb9su(n6kus9, f_7y) {
    return f_7y['lineNumber'] = n6kus9['lineNumber'], f_7y['columnNumber'] = n6kus9['columnNumber'], f_7y;
}
function eku96sb(xl$ght, tlghz, glrzt, db805, ujs3n, d21w58) {
    for (var lxg$it, nsu9k, bk9u6s = ++tlghz, trgz = egxij$;;) {
        var q9snk = xl$ght['charAt'](bk9u6s);
        switch (q9snk) {
            case '=':
                if (trgz === eji$qn3) lxg$it = xl$ght['slice'](tlghz, bk9u6s), trgz = eixg3;else {
                    if (trgz !== exlhg) throw new Error('attribute equal must after attrName');
                    trgz = eixg3;
                }
                break;
            case '\x27':
            case '\x22':
                if (trgz === eixg3 || trgz === eji$qn3) {
                    if (trgz === eji$qn3 && (d21w58['warning']('attribute value must after "="'), lxg$it = xl$ght['slice'](tlghz, bk9u6s)), tlghz = bk9u6s + 0x1, bk9u6s = xl$ght['indexOf'](q9snk, tlghz), !(bk9u6s > 0x0)) throw new Error('attribute value no end \'' + q9snk + '\' match');
                    nsu9k = xl$ght['slice'](tlghz, bk9u6s)['replace'](/&#?\w+;/g, ujs3n), glrzt['add'](lxg$it, nsu9k, tlghz - 0x1), trgz = eltgix;
                } else {
                    if (trgz != efrlhz) throw new Error('attribute value must after "="');
                    nsu9k = xl$ght['slice'](tlghz, bk9u6s)['replace'](/&#?\w+;/g, ujs3n), glrzt['add'](lxg$it, nsu9k, tlghz), d21w58['warning']('attribute "' + lxg$it + '" missed start quot(' + q9snk + ')!!'), tlghz = bk9u6s + 0x1, trgz = eltgix;
                }
                break;
            case '/':
                switch (trgz) {
                    case egxij$:
                        glrzt['setTagName'](xl$ght['slice'](tlghz, bk9u6s));
                    case eltgix:
                    case efyzh:
                    case etxlg$i:
                        trgz = etxlg$i, glrzt['closed'] = !0x0;
                    case efrlhz:
                    case eji$qn3:
                    case exlhg:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return d21w58['error']('unexpected end of input'), trgz == egxij$ && glrzt['setTagName'](xl$ght['slice'](tlghz, bk9u6s)), bk9u6s;
            case '>':
                switch (trgz) {
                    case egxij$:
                        glrzt['setTagName'](xl$ght['slice'](tlghz, bk9u6s));
                    case eltgix:
                    case efyzh:
                    case etxlg$i:
                        break;
                    case efrlhz:
                    case eji$qn3:
                        nsu9k = xl$ght['slice'](tlghz, bk9u6s), '/' === nsu9k['slice'](-0x1) && (glrzt['closed'] = !0x0, nsu9k = nsu9k['slice'](0x0, -0x1));
                    case exlhg:
                        trgz === exlhg && (nsu9k = lxg$it), trgz == efrlhz ? (d21w58['warning']('attribute "' + nsu9k + '" missed quot(")!!'), glrzt['add'](lxg$it, nsu9k['replace'](/&#?\w+;/g, ujs3n), tlghz)) : ('http://www.w3.org/1999/xhtml' === db805[''] && nsu9k['match'](/^(?:disabled|checked|selected)$/i) || d21w58['warning']('attribute "' + nsu9k + '" missed value!! "' + nsu9k + '" instead!!'), glrzt['add'](nsu9k, nsu9k, tlghz));
                        break;
                    case eixg3:
                        throw new Error('attribute value missed!!');
                }
                return bk9u6s;
            case '\u0080':
                q9snk = '\x20';
            default:
                if ('\x20' >= q9snk) switch (trgz) {
                    case egxij$:
                        glrzt['setTagName'](xl$ght['slice'](tlghz, bk9u6s)), trgz = efyzh;
                        break;
                    case eji$qn3:
                        lxg$it = xl$ght['slice'](tlghz, bk9u6s), trgz = exlhg;
                        break;
                    case efrlhz:
                        var nsu9k = xl$ght['slice'](tlghz, bk9u6s)['replace'](/&#?\w+;/g, ujs3n);
                        d21w58['warning']('attribute "' + nsu9k + '" missed quot(")!!'), glrzt['add'](lxg$it, nsu9k, tlghz);
                    case eltgix:
                        trgz = efyzh;
                } else switch (trgz) {
                    case exlhg:
                        {
                            glrzt['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === db805[''] && lxg$it['match'](/^(?:disabled|checked|selected)$/i) || d21w58['warning']('attribute "' + lxg$it + '" missed value!! "' + lxg$it + '" instead2!!'), glrzt['add'](lxg$it, lxg$it, tlghz), tlghz = bk9u6s, trgz = eji$qn3;
                        break;
                    case eltgix:
                        d21w58['warning']('attribute space is required"' + lxg$it + '\x22!!');
                    case efyzh:
                        trgz = eji$qn3, tlghz = bk9u6s;
                        break;
                    case eixg3:
                        trgz = efrlhz, tlghz = bk9u6s;
                        break;
                    case etxlg$i:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        bk9u6s++;
    }
}
function ec_o7ma(_7vf4y, aocepm, hrfyl) {
    for (var q$3jx = _7vf4y['tagName'], xrlh = null, jxi3 = _7vf4y['length']; jxi3--;) {
        var fzyhv = _7vf4y[jxi3],
            a_v7 = fzyhv['qName'],
            af7v = fzyhv['value'],
            nuq9 = a_v7['indexOf'](':');
        if (nuq9 > 0x0) var yhzf = fzyhv['prefix'] = a_v7['slice'](0x0, nuq9),
            vryzf4 = a_v7['slice'](nuq9 + 0x1),
            nk9u = 'xmlns' === yhzf && vryzf4;else vryzf4 = a_v7, yhzf = null, nk9u = 'xmlns' === a_v7 && '';
        fzyhv['localName'] = vryzf4, nk9u !== !0x1 && (null == xrlh && (xrlh = {}, exj3gi(hrfyl, hrfyl = {})), hrfyl[nk9u] = xrlh[nk9u] = af7v, fzyhv['uri'] = 'http://www.w3.org/2000/xmlns/', aocepm['startPrefixMapping'](nk9u, af7v));
    }
    for (var jxi3 = _7vf4y['length']; jxi3--;) {
        fzyhv = _7vf4y[jxi3];
        var yhzf = fzyhv['prefix'];
        yhzf && ('xml' === yhzf && (fzyhv['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== yhzf && (fzyhv['uri'] = hrfyl[yhzf || '']));
    }
    var nuq9 = q$3jx['indexOf'](':');
    nuq9 > 0x0 ? (yhzf = _7vf4y['prefix'] = q$3jx['slice'](0x0, nuq9), vryzf4 = _7vf4y['localName'] = q$3jx['slice'](nuq9 + 0x1)) : (yhzf = null, vryzf4 = _7vf4y['localName'] = q$3jx);
    var v_yz4f = _7vf4y['uri'] = hrfyl[yhzf || ''];
    if (aocepm['startElement'](v_yz4f, vryzf4, q$3jx, _7vf4y), !_7vf4y['closed']) return _7vf4y['currentNSMap'] = hrfyl, _7vf4y['localNSMap'] = xrlh, !0x0;
    if (aocepm['endElement'](v_yz4f, vryzf4, q$3jx), xrlh) {
        for (yhzf in xrlh) aocepm['endPrefixMapping'](yhzf);
    }
}
function emv4_(nj$qi, tyzlrh, uksq9n, xtg$ji, uksb6) {
    if (/^(?:script|textarea)$/i['test'](uksq9n)) {
        var wd805 = nj$qi['indexOf']('</' + uksq9n + '>', tyzlrh),
            a_oc7 = nj$qi['substring'](tyzlrh + 0x1, wd805);
        if (/[&<]/['test'](a_oc7)) return (/^script$/i['test'](uksq9n) ? (uksb6['characters'](a_oc7, 0x0, a_oc7['length']), wd805) : (a_oc7 = a_oc7['replace'](/&#?\w+;/g, xtg$ji), uksb6['characters'](a_oc7, 0x0, a_oc7['length']), wd805)
        );
    }
    return tyzlrh + 0x1;
}
function e_cao7m(nus3qj, _74vma, _oc7am, d506b8) {
    var yr4vzf = d506b8[_oc7am];
    return null == yr4vzf && (yr4vzf = nus3qj['lastIndexOf']('</' + _oc7am + '>'), _74vma > yr4vzf && (yr4vzf = nus3qj['lastIndexOf']('</' + _oc7am)), d506b8[_oc7am] = yr4vzf), _74vma > yr4vzf;
}
function exj3gi(xqi$3, _v47yf) {
    for (var hlrtgz in xqi$3) _v47yf[hlrtgz] = xqi$3[hlrtgz];
}
function ekd09(zyvrfh, rgltz, kdb690, x$jg3) {
    var txl = zyvrfh['charAt'](rgltz + 0x2);
    switch (txl) {
        case '-':
            if ('-' === zyvrfh['charAt'](rgltz + 0x3)) {
                var av4m7 = zyvrfh['indexOf']('-->', rgltz + 0x4);
                return av4m7 > rgltz ? (kdb690['comment'](zyvrfh, rgltz + 0x4, av4m7 - rgltz - 0x4), av4m7 + 0x3) : (x$jg3['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == zyvrfh['substr'](rgltz + 0x3, 0x6)) {
                var av4m7 = zyvrfh['indexOf'](']]>', rgltz + 0x9);
                return kdb690['startCDATA'](), kdb690['characters'](zyvrfh, rgltz + 0x9, av4m7 - rgltz - 0x9), kdb690['endCDATA'](), av4m7 + 0x3;
            }
            var x3jig$ = esqnj3(zyvrfh, rgltz),
                uqn39s = x3jig$['length'];
            if (uqn39s > 0x1 && /!doctype/i['test'](x3jig$[0x0][0x0])) {
                var amo_c = x3jig$[0x1][0x0],
                    k6db = uqn39s > 0x3 && /^public$/i['test'](x3jig$[0x2][0x0]) && x3jig$[0x3][0x0],
                    vaf47_ = uqn39s > 0x4 && x3jig$[0x4][0x0],
                    _47acm = x3jig$[uqn39s - 0x1];
                return kdb690['startDTD'](amo_c, k6db && k6db['replace'](/^(['"])(.*?)\1$/, '$2'), vaf47_ && vaf47_['replace'](/^(['"])(.*?)\1$/, '$2')), kdb690['endDTD'](), _47acm['index'] + _47acm[0x0]['length'];
            }
    }
    return -0x1;
}
function equn3sj(lg$th, hlyfr, bk96) {
    var zfy4r = lg$th['indexOf']('?>', hlyfr);
    if (zfy4r) {
        var db58 = lg$th['substring'](hlyfr, zfy4r)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (db58) {
            {
                db58[0x0]['length'];
            }
            return bk96['processingInstruction'](db58[0x1], db58[0x2]), zfy4r + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function e$htxlg() {}
function ec7o(mpca7o, kbsu69) {
    return mpca7o['__proto__'] = kbsu69, mpca7o;
}
function esqnj3(_af4, lrh) {
    var snu3q9,
        sq9ukn = [],
        $iqnj3 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for ($iqnj3['lastIndex'] = lrh, $iqnj3['exec'](_af4); snu3q9 = $iqnj3['exec'](_af4);) if (sq9ukn['push'](snu3q9), snu3q9[0x1]) return sq9ukn;
}
var eam4_c = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    eb6dk50 = new RegExp('[\\-\\.0-9' + eam4_c['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    exit$jg = new RegExp('^' + eam4_c['source'] + eb6dk50['source'] + '*(?::' + eam4_c['source'] + eb6dk50['source'] + '*)?$'),
    egxij$ = 0x0,
    eji$qn3 = 0x1,
    exlhg = 0x2,
    eixg3 = 0x3,
    efrlhz = 0x4,
    eltgix = 0x5,
    efyzh = 0x6,
    etxlg$i = 0x7;
ezltrhy['prototype'] = {
    'parse': function (yvf_47, ltyz, su93nq) {
        var jtgi = this['domBuilder'];
        jtgi['startDocument'](), exj3gi(ltyz, ltyz = {}), eq9knus(yvf_47, ltyz, su93nq, jtgi, this['errorHandler']), jtgi['endDocument']();
    }
}, e$htxlg['prototype'] = {
    'setTagName': function (ku9b) {
        if (!exit$jg['test'](ku9b)) throw new Error('invalid tagName:' + ku9b);
        this['tagName'] = ku9b;
    },
    'add': function (nq3j$, uin, lgt$) {
        if (!exit$jg['test'](nq3j$)) throw new Error('invalid attribute:' + nq3j$);
        this[this['length']++] = {
            'qName': nq3j$,
            'value': uin,
            'offset': lgt$
        };
    },
    'length': 0x0,
    'getLocalName': function (eoampc) {
        return this[eoampc]['localName'];
    },
    'getLocator': function (fylz) {
        return this[fylz]['locator'];
    },
    'getQName': function (ythlzr) {
        return this[ythlzr]['qName'];
    },
    'getURI': function (skn9uq) {
        return this[skn9uq]['uri'];
    },
    'getValue': function (_fyz) {
        return this[_fyz]['value'];
    }
}, ec7o({}, ec7o['prototype']) instanceof ec7o || (ec7o = function (rzvy4, xji$) {
    function d512w8() {}
    d512w8['prototype'] = xji$, d512w8 = new d512w8();
    for (xji$ in rzvy4) d512w8[xji$] = rzvy4[xji$];
    return d512w8;
}), exports['XMLReader'] = ezltrhy;