var Z = wx.$L;
function l1gnq5() {}
function l1_hjoy2(kga$7, _ojb1, $dlek7, nsqa5, y8dec) {
    function m9bi(lkg7$) {
        if (lkg7$ > 0xffff) {
            lkg7$ -= 0x10000;
            var dey8 = 0xd800 + (lkg7$ >> 0xa),
                zwtuf = 0xdc00 + (0x3ff & lkg7$);
            return String['fromCharCode'](dey8, zwtuf);
        }
        return String['fromCharCode'](lkg7$);
    }
    function qa$sg5(mboi1_) {
        var hjo2y_ = mboi1_['slice'](0x1, -0x1);
        return hjo2y_ in $dlek7 ? $dlek7[hjo2y_] : '#' === hjo2y_['charAt'](0x0) ? m9bi(parseInt(hjo2y_['substr'](0x1)['replace']('x', '0x'))) : (y8dec['error']('entity not found:' + mboi1_), mboi1_);
    }
    function z6x0r9(j2oh8y) {
        if (j2oh8y > e8dcl) {
            var xzuwt = kga$7['substring'](e8dcl, j2oh8y)['replace'](/&#?\w+;/g, qa$sg5);
            dkc7e && p0r9(e8dcl), nsqa5['characters'](xzuwt, 0x0, j2oh8y - e8dcl), e8dcl = j2oh8y;
        }
    }
    function p0r9(xtwrz, uzwtx6) {
        for (; xtwrz >= $ld && (uzwtx6 = rx906p['exec'](kga$7));) t0zrx6 = uzwtx6['index'], $ld = t0zrx6 + uzwtx6[0x0]['length'], dkc7e['lineNumber']++;
        dkc7e['columnNumber'] = xtwrz - t0zrx6 + 0x1;
    }
    for (var t0zrx6 = 0x0, $ld = 0x0, rx906p = /.*(?:\r\n?|\n)|.*$/g, dkc7e = nsqa5['locator'], fxzwut = [{ 'currentNSMap': _ojb1 }], zf3ut = {}, e8dcl = 0x0;;) {
        try {
            var fwu3 = kga$7['indexOf']('<', e8dcl);
            if (0x0 > fwu3) {
                if (!kga$7['substr'](e8dcl)['match'](/^\s*$/)) {
                    var twz6ux = nsqa5['doc'],
                        j2c = twz6ux['createTextNode'](kga$7['substr'](e8dcl));
                    twz6ux['appendChild'](j2c), nsqa5['currentElement'] = j2c;
                }
                return;
            }
            switch (fwu3 > e8dcl && z6x0r9(fwu3), kga$7['charAt'](fwu3 + 0x1)) {
                case '/':
                    var rip0 = kga$7['indexOf']('>', fwu3 + 0x3),
                        g7lak = kga$7['substring'](fwu3 + 0x2, rip0),
                        txz6u = fxzwut['pop']();
                    0x0 > rip0 ? (g7lak = kga$7['substring'](fwu3 + 0x2)['replace'](/[\s<].*/, ''), y8dec['error']('end tag name: ' + g7lak + ' is not complete:' + txz6u['tagName']), rip0 = fwu3 + 0x1 + g7lak['length']) : g7lak['match'](/\s</) && (g7lak = g7lak['replace'](/[\s<].*/, ''), y8dec['error']('end tag name: ' + g7lak + ' maybe not complete'), rip0 = fwu3 + 0x1 + g7lak['length']);
                    var d8ecl = txz6u['localNSMap'],
                        uw3ztf = txz6u['tagName'] == g7lak,
                        o_1b2j = uw3ztf || txz6u['tagName'] && txz6u['tagName']['toLowerCase']() == g7lak['toLowerCase']();
                    if (o_1b2j) {
                        if (nsqa5['endElement'](txz6u['uri'], txz6u['localName'], g7lak), d8ecl) {
                            for (var $k7dle in d8ecl) nsqa5['endPrefixMapping']($k7dle);
                        }
                        uw3ztf || y8dec['fatalError']('end tag name: ' + g7lak + ' is not match the current start tagName:' + txz6u['tagName']);
                    } else fxzwut['push'](txz6u);
                    rip0++;
                    break;
                case '?':
                    dkc7e && p0r9(fwu3), rip0 = l1yjoh28(kga$7, fwu3, nsqa5);
                    break;
                case '!':
                    dkc7e && p0r9(fwu3), rip0 = l1n5aqgs(kga$7, fwu3, nsqa5, y8dec);
                    break;
                default:
                    dkc7e && p0r9(fwu3);
                    var boj12 = new l1sa5$gq(),
                        sqn5ag = fxzwut[fxzwut['length'] - 0x1]['currentNSMap'],
                        rip0 = l1zutx6w(kga$7, fwu3, boj12, sqn5ag, qa$sg5, y8dec),
                        uxtfwz = boj12['length'];
                    if (!boj12['closed'] && l1wtz3f(kga$7, rip0, boj12['tagName'], zf3ut) && (boj12['closed'] = !0x0, $dlek7['nbsp'] || y8dec['warning']('unclosed xml attribute')), dkc7e && uxtfwz) {
                        for (var tfxzw = l1ib_1o(dkc7e, {}), d2y8 = 0x0; uxtfwz > d2y8; d2y8++) {
                            var $a5ks = boj12[d2y8];
                            p0r9($a5ks['offset']), $a5ks['locator'] = l1ib_1o(dkc7e, {});
                        }
                        nsqa5['locator'] = tfxzw, l1chjy8(boj12, nsqa5, sqn5ag) && fxzwut['push'](boj12), nsqa5['locator'] = dkc7e;
                    } else l1chjy8(boj12, nsqa5, sqn5ag) && fxzwut['push'](boj12);
                    'http://www.w3.org/1999/xhtml' !== boj12['uri'] || boj12['closed'] ? rip0++ : rip0 = l1m1ib9p(kga$7, rip0, boj12['tagName'], qa$sg5, nsqa5);
            }
        } catch (lked) {
            y8dec['error']('element parse error: ' + lked), rip0 = -0x1;
        }
        rip0 > e8dcl ? e8dcl = rip0 : z6x0r9(Math['max'](fwu3, e8dcl) + 0x1);
    }
}
function l1ib_1o(hdc8el, xzt60) {
    return xzt60['lineNumber'] = hdc8el['lineNumber'], xzt60['columnNumber'] = hdc8el['columnNumber'], xzt60;
}
function l1zutx6w(m9, oy2hj8, ag$5q, yh8j2c, c2y8, dc87e) {
    for (var _pbi, ed$lk, lhecd8 = ++oy2hj8, lec7d8 = l1$lae;;) {
        var y28d = m9['charAt'](lhecd8);
        switch (y28d) {
            case '=':
                if (lec7d8 === l1$kg57) _pbi = m9['slice'](oy2hj8, lhecd8), lec7d8 = l1h8ye;else {
                    if (lec7d8 !== l1hoj28y) throw new Error('attribute equal must after attrName');
                    lec7d8 = l1h8ye;
                }
                break;
            case '\x27':
            case '\x22':
                if (lec7d8 === l1h8ye || lec7d8 === l1$kg57) {
                    if (lec7d8 === l1$kg57 && (dc87e['warning']('attribute value must after "="'), _pbi = m9['slice'](oy2hj8, lhecd8)), oy2hj8 = lhecd8 + 0x1, lhecd8 = m9['indexOf'](y28d, oy2hj8), !(lhecd8 > 0x0)) throw new Error('attribute value no end \'' + y28d + '\' match');
                    ed$lk = m9['slice'](oy2hj8, lhecd8)['replace'](/&#?\w+;/g, c2y8), ag$5q['add'](_pbi, ed$lk, oy2hj8 - 0x1), lec7d8 = l1kga$l;
                } else {
                    if (lec7d8 != l1qvns5g) throw new Error('attribute value must after "="');
                    ed$lk = m9['slice'](oy2hj8, lhecd8)['replace'](/&#?\w+;/g, c2y8), ag$5q['add'](_pbi, ed$lk, oy2hj8), dc87e['warning']('attribute "' + _pbi + '" missed start quot(' + y28d + ')!!'), oy2hj8 = lhecd8 + 0x1, lec7d8 = l1kga$l;
                }
                break;
            case '/':
                switch (lec7d8) {
                    case l1$lae:
                        ag$5q['setTagName'](m9['slice'](oy2hj8, lhecd8));
                    case l1kga$l:
                    case l1gask:
                    case l1ledck:
                        lec7d8 = l1ledck, ag$5q['closed'] = !0x0;
                    case l1qvns5g:
                    case l1$kg57:
                    case l1hoj28y:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return dc87e['error']('unexpected end of input'), lec7d8 == l1$lae && ag$5q['setTagName'](m9['slice'](oy2hj8, lhecd8)), lhecd8;
            case '>':
                switch (lec7d8) {
                    case l1$lae:
                        ag$5q['setTagName'](m9['slice'](oy2hj8, lhecd8));
                    case l1kga$l:
                    case l1gask:
                    case l1ledck:
                        break;
                    case l1qvns5g:
                    case l1$kg57:
                        ed$lk = m9['slice'](oy2hj8, lhecd8), '/' === ed$lk['slice'](-0x1) && (ag$5q['closed'] = !0x0, ed$lk = ed$lk['slice'](0x0, -0x1));
                    case l1hoj28y:
                        lec7d8 === l1hoj28y && (ed$lk = _pbi), lec7d8 == l1qvns5g ? (dc87e['warning']('attribute "' + ed$lk + '" missed quot(")!!'), ag$5q['add'](_pbi, ed$lk['replace'](/&#?\w+;/g, c2y8), oy2hj8)) : ('http://www.w3.org/1999/xhtml' === yh8j2c[''] && ed$lk['match'](/^(?:disabled|checked|selected)$/i) || dc87e['warning']('attribute "' + ed$lk + '" missed value!! "' + ed$lk + '" instead!!'), ag$5q['add'](ed$lk, ed$lk, oy2hj8));
                        break;
                    case l1h8ye:
                        throw new Error('attribute value missed!!');
                }
                return lhecd8;
            case '\u0080':
                y28d = '\x20';
            default:
                if ('\x20' >= y28d) switch (lec7d8) {
                    case l1$lae:
                        ag$5q['setTagName'](m9['slice'](oy2hj8, lhecd8)), lec7d8 = l1gask;
                        break;
                    case l1$kg57:
                        _pbi = m9['slice'](oy2hj8, lhecd8), lec7d8 = l1hoj28y;
                        break;
                    case l1qvns5g:
                        var ed$lk = m9['slice'](oy2hj8, lhecd8)['replace'](/&#?\w+;/g, c2y8);
                        dc87e['warning']('attribute "' + ed$lk + '" missed quot(")!!'), ag$5q['add'](_pbi, ed$lk, oy2hj8);
                    case l1kga$l:
                        lec7d8 = l1gask;
                } else switch (lec7d8) {
                    case l1hoj28y:
                        {
                            ag$5q['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === yh8j2c[''] && _pbi['match'](/^(?:disabled|checked|selected)$/i) || dc87e['warning']('attribute "' + _pbi + '" missed value!! "' + _pbi + '" instead2!!'), ag$5q['add'](_pbi, _pbi, oy2hj8), oy2hj8 = lhecd8, lec7d8 = l1$kg57;
                        break;
                    case l1kga$l:
                        dc87e['warning']('attribute space is required"' + _pbi + '\x22!!');
                    case l1gask:
                        lec7d8 = l1$kg57, oy2hj8 = lhecd8;
                        break;
                    case l1h8ye:
                        lec7d8 = l1qvns5g, oy2hj8 = lhecd8;
                        break;
                    case l1ledck:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        lhecd8++;
    }
}
function l1chjy8(m1i_b, del8ch, bm_1p) {
    for (var p0i6 = m1i_b['tagName'], cd8l7 = null, twz3fu = m1i_b['length']; twz3fu--;) {
        var rwt = m1i_b[twz3fu],
            i9mpb1 = rwt['qName'],
            dych8 = rwt['value'],
            n5qsa = i9mpb1['indexOf'](':');
        if (n5qsa > 0x0) var _bimo1 = rwt['prefix'] = i9mpb1['slice'](0x0, n5qsa),
            bmp1i9 = i9mpb1['slice'](n5qsa + 0x1),
            wuxz6 = 'xmlns' === _bimo1 && bmp1i9;else bmp1i9 = i9mpb1, _bimo1 = null, wuxz6 = 'xmlns' === i9mpb1 && '';
        rwt['localName'] = bmp1i9, wuxz6 !== !0x1 && (null == cd8l7 && (cd8l7 = {}, l1$7klde(bm_1p, bm_1p = {})), bm_1p[wuxz6] = cd8l7[wuxz6] = dych8, rwt['uri'] = 'http://www.w3.org/2000/xmlns/', del8ch['startPrefixMapping'](wuxz6, dych8));
    }
    for (var twz3fu = m1i_b['length']; twz3fu--;) {
        rwt = m1i_b[twz3fu];
        var _bimo1 = rwt['prefix'];
        _bimo1 && ('xml' === _bimo1 && (rwt['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== _bimo1 && (rwt['uri'] = bm_1p[_bimo1 || '']));
    }
    var n5qsa = p0i6['indexOf'](':');
    n5qsa > 0x0 ? (_bimo1 = m1i_b['prefix'] = p0i6['slice'](0x0, n5qsa), bmp1i9 = m1i_b['localName'] = p0i6['slice'](n5qsa + 0x1)) : (_bimo1 = null, bmp1i9 = m1i_b['localName'] = p0i6);
    var sq5a$ = m1i_b['uri'] = bm_1p[_bimo1 || ''];
    if (del8ch['startElement'](sq5a$, bmp1i9, p0i6, m1i_b), !m1i_b['closed']) return m1i_b['currentNSMap'] = bm_1p, m1i_b['localNSMap'] = cd8l7, !0x0;
    if (del8ch['endElement'](sq5a$, bmp1i9, p0i6), cd8l7) {
        for (_bimo1 in cd8l7) del8ch['endPrefixMapping'](_bimo1);
    }
}
function l1m1ib9p(pm_1bi, hedcy8, bj12o_, ztw6x, ripm90) {
    if (/^(?:script|textarea)$/i['test'](bj12o_)) {
        var agqn5s = pm_1bi['indexOf']('</' + bj12o_ + '>', hedcy8),
            uw3t = pm_1bi['substring'](hedcy8 + 0x1, agqn5s);
        if (/[&<]/['test'](uw3t)) return (/^script$/i['test'](bj12o_) ? (ripm90['characters'](uw3t, 0x0, uw3t['length']), agqn5s) : (uw3t = uw3t['replace'](/&#?\w+;/g, ztw6x), ripm90['characters'](uw3t, 0x0, uw3t['length']), agqn5s)
        );
    }
    return hedcy8 + 0x1;
}
function l1wtz3f(q$5ags, m90irp, w6rtxz, _yo12j) {
    var b9m1i = _yo12j[w6rtxz];
    return null == b9m1i && (b9m1i = q$5ags['lastIndexOf']('</' + w6rtxz + '>'), m90irp > b9m1i && (b9m1i = q$5ags['lastIndexOf']('</' + w6rtxz)), _yo12j[w6rtxz] = b9m1i), m90irp > b9m1i;
}
function l1$7klde(n5sq4, l7de$k) {
    for (var j12ob_ in n5sq4) l7de$k[j12ob_] = n5sq4[j12ob_];
}
function l1n5aqgs(dlek7$, yo28h, vs5qng, gqs$5) {
    var pri = dlek7$['charAt'](yo28h + 0x2);
    switch (pri) {
        case '-':
            if ('-' === dlek7$['charAt'](yo28h + 0x3)) {
                var pb1_m = dlek7$['indexOf']('-->', yo28h + 0x4);
                return pb1_m > yo28h ? (vs5qng['comment'](dlek7$, yo28h + 0x4, pb1_m - yo28h - 0x4), pb1_m + 0x3) : (gqs$5['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == dlek7$['substr'](yo28h + 0x3, 0x6)) {
                var pb1_m = dlek7$['indexOf'](']]>', yo28h + 0x9);
                return vs5qng['startCDATA'](), vs5qng['characters'](dlek7$, yo28h + 0x9, pb1_m - yo28h - 0x9), vs5qng['endCDATA'](), pb1_m + 0x3;
            }
            var $7agk = l1prx90(dlek7$, yo28h),
                ztx6w = $7agk['length'];
            if (ztx6w > 0x1 && /!doctype/i['test']($7agk[0x0][0x0])) {
                var oj2y1 = $7agk[0x1][0x0],
                    oh2j8y = ztx6w > 0x3 && /^public$/i['test']($7agk[0x2][0x0]) && $7agk[0x3][0x0],
                    j2h8o = ztx6w > 0x4 && $7agk[0x4][0x0],
                    n4q = $7agk[ztx6w - 0x1];
                return vs5qng['startDTD'](oj2y1, oh2j8y && oh2j8y['replace'](/^(['"])(.*?)\1$/, '$2'), j2h8o && j2h8o['replace'](/^(['"])(.*?)\1$/, '$2')), vs5qng['endDTD'](), n4q['index'] + n4q[0x0]['length'];
            }
    }
    return -0x1;
}
function l1yjoh28(j2y_oh, z960xr, bm9i) {
    var k7ga$l = j2y_oh['indexOf']('?>', z960xr);
    if (k7ga$l) {
        var p1mi = j2y_oh['substring'](z960xr, k7ga$l)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (p1mi) {
            {
                p1mi[0x0]['length'];
            }
            return bm9i['processingInstruction'](p1mi[0x1], p1mi[0x2]), k7ga$l + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function l1sa5$gq() {}
function l1b2oj1_(qg$sa, h28yoj) {
    return qg$sa['__proto__'] = h28yoj, qg$sa;
}
function l1prx90(k7, zuwtx) {
    var l7ec8d,
        a$qg5 = [],
        na5qsg = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (na5qsg['lastIndex'] = zuwtx, na5qsg['exec'](k7); l7ec8d = na5qsg['exec'](k7);) if (a$qg5['push'](l7ec8d), l7ec8d[0x1]) return a$qg5;
}
var l1o12b_j = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    l1cyjh82 = new RegExp('[\\-\\.0-9' + l1o12b_j['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    l1ibp91 = new RegExp('^' + l1o12b_j['source'] + l1cyjh82['source'] + '*(?::' + l1o12b_j['source'] + l1cyjh82['source'] + '*)?$'),
    l1$lae = 0x0,
    l1$kg57 = 0x1,
    l1hoj28y = 0x2,
    l1h8ye = 0x3,
    l1qvns5g = 0x4,
    l1kga$l = 0x5,
    l1gask = 0x6,
    l1ledck = 0x7;
l1gnq5['prototype'] = {
    'parse': function (kl$ed7, $le7dk, g$5sq) {
        var dlkc = this['domBuilder'];
        dlkc['startDocument'](), l1$7klde($le7dk, $le7dk = {}), l1_hjoy2(kl$ed7, $le7dk, g$5sq, dlkc, this['errorHandler']), dlkc['endDocument']();
    }
}, l1sa5$gq['prototype'] = {
    'setTagName': function ($7lga) {
        if (!l1ibp91['test']($7lga)) throw new Error('invalid tagName:' + $7lga);
        this['tagName'] = $7lga;
    },
    'add': function (xwtuz, bi1mo, x60rp9) {
        if (!l1ibp91['test'](xwtuz)) throw new Error('invalid attribute:' + xwtuz);
        this[this['length']++] = {
            'qName': xwtuz,
            'value': bi1mo,
            'offset': x60rp9
        };
    },
    'length': 0x0,
    'getLocalName': function (xztr60) {
        return this[xztr60]['localName'];
    },
    'getLocator': function (a5$gk) {
        return this[a5$gk]['locator'];
    },
    'getQName': function ($as5q) {
        return this[$as5q]['qName'];
    },
    'getURI': function (g75ka$) {
        return this[g75ka$]['uri'];
    },
    'getValue': function (n5sgqv) {
        return this[n5sgqv]['value'];
    }
}, l1b2oj1_({}, l1b2oj1_['prototype']) instanceof l1b2oj1_ || (l1b2oj1_ = function (x6rp0, hojy_) {
    function hycde() {}
    hycde['prototype'] = hojy_, hycde = new hycde();
    for (hojy_ in x6rp0) hycde[hojy_] = x6rp0[hojy_];
    return hycde;
}), exports['XMLReader'] = l1gnq5;