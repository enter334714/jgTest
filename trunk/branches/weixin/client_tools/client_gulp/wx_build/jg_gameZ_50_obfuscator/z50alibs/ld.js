var b = wx.$e;
function euro9x8() {}
function etgfb5k(fbvtg, ox9, rux9, m4$c3, swh62) {
    function l$_mc0(ku5or) {
        if (ku5or > 0xffff) {
            ku5or -= 0x10000;
            var d89x_ = 0xd800 + (ku5or >> 0xa),
                ewn1h = 0xdc00 + (0x3ff & ku5or);
            return String['fromCharCode'](d89x_, ewn1h);
        }
        return String['fromCharCode'](ku5or);
    }
    function yw26sh(vgfbj) {
        var $i_c = vgfbj['slice'](0x1, -0x1);
        return $i_c in rux9 ? rux9[$i_c] : '#' === $i_c['charAt'](0x0) ? l$_mc0(parseInt($i_c['substr'](0x1)['replace']('x', '0x'))) : (swh62['error']('entity not found:' + vgfbj), vgfbj);
    }
    function l_9d08(syh6w2) {
        if (syh6w2 > g2vaj) {
            var v2jysa = fbvtg['substring'](g2vaj, syh6w2)['replace'](/&#?\w+;/g, yw26sh);
            hw1ze && im34c(g2vaj), m4$c3['characters'](v2jysa, 0x0, syh6w2 - g2vaj), g2vaj = syh6w2;
        }
    }
    function im34c(m0l_c$, vas2y) {
        for (; m0l_c$ >= o8r9 && (vas2y = xdu9['exec'](fbvtg));) orkt57 = vas2y['index'], o8r9 = orkt57 + vas2y[0x0]['length'], hw1ze['lineNumber']++;
        hw1ze['columnNumber'] = m0l_c$ - orkt57 + 0x1;
    }
    for (var orkt57 = 0x0, o8r9 = 0x0, xdu9 = /.*(?:\r\n?|\n)|.*$/g, hw1ze = m4$c3['locator'], dl098_ = [{ 'currentNSMap': ox9 }], l_9$0 = {}, g2vaj = 0x0;;) {
        try {
            var x9_ = fbvtg['indexOf']('<', g2vaj);
            if (0x0 > x9_) {
                if (!fbvtg['substr'](g2vaj)['match'](/^\s*$/)) {
                    var hezn6w = m4$c3['doc'],
                        ux9r8o = hezn6w['createTextNode'](fbvtg['substr'](g2vaj));
                    hezn6w['appendChild'](ux9r8o), m4$c3['currentElement'] = ux9r8o;
                }
                return;
            }
            switch (x9_ > g2vaj && l_9d08(x9_), fbvtg['charAt'](x9_ + 0x1)) {
                case '/':
                    var r5o7ux = fbvtg['indexOf']('>', x9_ + 0x3),
                        bgfvj = fbvtg['substring'](x9_ + 0x2, r5o7ux),
                        or87x = dl098_['pop']();
                    0x0 > r5o7ux ? (bgfvj = fbvtg['substring'](x9_ + 0x2)['replace'](/[\s<].*/, ''), swh62['error']('end tag name: ' + bgfvj + ' is not complete:' + or87x['tagName']), r5o7ux = x9_ + 0x1 + bgfvj['length']) : bgfvj['match'](/\s</) && (bgfvj = bgfvj['replace'](/[\s<].*/, ''), swh62['error']('end tag name: ' + bgfvj + ' maybe not complete'), r5o7ux = x9_ + 0x1 + bgfvj['length']);
                    var agjfv = or87x['localNSMap'],
                        y6s2ja = or87x['tagName'] == bgfvj,
                        kbgf5 = y6s2ja || or87x['tagName'] && or87x['tagName']['toLowerCase']() == bgfvj['toLowerCase']();
                    if (kbgf5) {
                        if (m4$c3['endElement'](or87x['uri'], or87x['localName'], bgfvj), agjfv) {
                            for (var yjgv in agjfv) m4$c3['endPrefixMapping'](yjgv);
                        }
                        y6s2ja || swh62['fatalError']('end tag name: ' + bgfvj + ' is not match the current start tagName:' + or87x['tagName']);
                    } else dl098_['push'](or87x);
                    r5o7ux++;
                    break;
                case '?':
                    hw1ze && im34c(x9_), r5o7ux = egfvjay(fbvtg, x9_, m4$c3);
                    break;
                case '!':
                    hw1ze && im34c(x9_), r5o7ux = el$cm0(fbvtg, x9_, m4$c3, swh62);
                    break;
                default:
                    hw1ze && im34c(x9_);
                    var yagvjf = new efvbaj(),
                        ep1hzn = dl098_[dl098_['length'] - 0x1]['currentNSMap'],
                        r5o7ux = e_dlm(fbvtg, x9_, yagvjf, ep1hzn, yw26sh, swh62),
                        yh2sw6 = yagvjf['length'];
                    if (!yagvjf['closed'] && eayvs2(fbvtg, r5o7ux, yagvjf['tagName'], l_9$0) && (yagvjf['closed'] = !0x0, rux9['nbsp'] || swh62['warning']('unclosed xml attribute')), hw1ze && yh2sw6) {
                        for (var nhz1e = eshwzn(hw1ze, {}), nw1e = 0x0; yh2sw6 > nw1e; nw1e++) {
                            var k5bf7t = yagvjf[nw1e];
                            im34c(k5bf7t['offset']), k5bf7t['locator'] = eshwzn(hw1ze, {});
                        }
                        m4$c3['locator'] = nhz1e, epz1(yagvjf, m4$c3, ep1hzn) && dl098_['push'](yagvjf), m4$c3['locator'] = hw1ze;
                    } else epz1(yagvjf, m4$c3, ep1hzn) && dl098_['push'](yagvjf);
                    'http://www.w3.org/1999/xhtml' !== yagvjf['uri'] || yagvjf['closed'] ? r5o7ux++ : r5o7ux = es6h2y(fbvtg, r5o7ux, yagvjf['tagName'], yw26sh, m4$c3);
            }
        } catch (sznh6) {
            swh62['error']('element parse error: ' + sznh6), r5o7ux = -0x1;
        }
        r5o7ux > g2vaj ? g2vaj = r5o7ux : l_9d08(Math['max'](x9_, g2vaj) + 0x1);
    }
}
function eshwzn(x80d_, r7k5o) {
    return r7k5o['lineNumber'] = x80d_['lineNumber'], r7k5o['columnNumber'] = x80d_['columnNumber'], r7k5o;
}
function e_dlm(cl0, xuor98, ygja, sa6jy, ys2w6h, ehn1p) {
    for (var mcl_i$, hzws6, i$c3m4 = ++xuor98, hz6wen = ey2vag;;) {
        var zsn6hw = cl0['charAt'](i$c3m4);
        switch (zsn6hw) {
            case '=':
                if (hz6wen === eml0$d_) mcl_i$ = cl0['slice'](xuor98, i$c3m4), hz6wen = eo5kt;else {
                    if (hz6wen !== es62ay) throw new Error('attribute equal must after attrName');
                    hz6wen = eo5kt;
                }
                break;
            case '\x27':
            case '\x22':
                if (hz6wen === eo5kt || hz6wen === eml0$d_) {
                    if (hz6wen === eml0$d_ && (ehn1p['warning']('attribute value must after "="'), mcl_i$ = cl0['slice'](xuor98, i$c3m4)), xuor98 = i$c3m4 + 0x1, i$c3m4 = cl0['indexOf'](zsn6hw, xuor98), !(i$c3m4 > 0x0)) throw new Error('attribute value no end \'' + zsn6hw + '\' match');
                    hzws6 = cl0['slice'](xuor98, i$c3m4)['replace'](/&#?\w+;/g, ys2w6h), ygja['add'](mcl_i$, hzws6, xuor98 - 0x1), hz6wen = ektvfbg;
                } else {
                    if (hz6wen != ewehnz6) throw new Error('attribute value must after "="');
                    hzws6 = cl0['slice'](xuor98, i$c3m4)['replace'](/&#?\w+;/g, ys2w6h), ygja['add'](mcl_i$, hzws6, xuor98), ehn1p['warning']('attribute "' + mcl_i$ + '" missed start quot(' + zsn6hw + ')!!'), xuor98 = i$c3m4 + 0x1, hz6wen = ektvfbg;
                }
                break;
            case '/':
                switch (hz6wen) {
                    case ey2vag:
                        ygja['setTagName'](cl0['slice'](xuor98, i$c3m4));
                    case ektvfbg:
                    case ey6w2h:
                    case el4$mic:
                        hz6wen = el4$mic, ygja['closed'] = !0x0;
                    case ewehnz6:
                    case eml0$d_:
                    case es62ay:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return ehn1p['error']('unexpected end of input'), hz6wen == ey2vag && ygja['setTagName'](cl0['slice'](xuor98, i$c3m4)), i$c3m4;
            case '>':
                switch (hz6wen) {
                    case ey2vag:
                        ygja['setTagName'](cl0['slice'](xuor98, i$c3m4));
                    case ektvfbg:
                    case ey6w2h:
                    case el4$mic:
                        break;
                    case ewehnz6:
                    case eml0$d_:
                        hzws6 = cl0['slice'](xuor98, i$c3m4), '/' === hzws6['slice'](-0x1) && (ygja['closed'] = !0x0, hzws6 = hzws6['slice'](0x0, -0x1));
                    case es62ay:
                        hz6wen === es62ay && (hzws6 = mcl_i$), hz6wen == ewehnz6 ? (ehn1p['warning']('attribute "' + hzws6 + '" missed quot(")!!'), ygja['add'](mcl_i$, hzws6['replace'](/&#?\w+;/g, ys2w6h), xuor98)) : ('http://www.w3.org/1999/xhtml' === sa6jy[''] && hzws6['match'](/^(?:disabled|checked|selected)$/i) || ehn1p['warning']('attribute "' + hzws6 + '" missed value!! "' + hzws6 + '" instead!!'), ygja['add'](hzws6, hzws6, xuor98));
                        break;
                    case eo5kt:
                        throw new Error('attribute value missed!!');
                }
                return i$c3m4;
            case '\u0080':
                zsn6hw = '\x20';
            default:
                if ('\x20' >= zsn6hw) switch (hz6wen) {
                    case ey2vag:
                        ygja['setTagName'](cl0['slice'](xuor98, i$c3m4)), hz6wen = ey6w2h;
                        break;
                    case eml0$d_:
                        mcl_i$ = cl0['slice'](xuor98, i$c3m4), hz6wen = es62ay;
                        break;
                    case ewehnz6:
                        var hzws6 = cl0['slice'](xuor98, i$c3m4)['replace'](/&#?\w+;/g, ys2w6h);
                        ehn1p['warning']('attribute "' + hzws6 + '" missed quot(")!!'), ygja['add'](mcl_i$, hzws6, xuor98);
                    case ektvfbg:
                        hz6wen = ey6w2h;
                } else switch (hz6wen) {
                    case es62ay:
                        {
                            ygja['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === sa6jy[''] && mcl_i$['match'](/^(?:disabled|checked|selected)$/i) || ehn1p['warning']('attribute "' + mcl_i$ + '" missed value!! "' + mcl_i$ + '" instead2!!'), ygja['add'](mcl_i$, mcl_i$, xuor98), xuor98 = i$c3m4, hz6wen = eml0$d_;
                        break;
                    case ektvfbg:
                        ehn1p['warning']('attribute space is required"' + mcl_i$ + '\x22!!');
                    case ey6w2h:
                        hz6wen = eml0$d_, xuor98 = i$c3m4;
                        break;
                    case eo5kt:
                        hz6wen = ewehnz6, xuor98 = i$c3m4;
                        break;
                    case el4$mic:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        i$c3m4++;
    }
}
function epz1(ayvj2s, _890ld, bkvt) {
    for (var sy6wh2 = ayvj2s['tagName'], _cl$i = null, w6zn = ayvj2s['length']; w6zn--;) {
        var nwez1h = ayvj2s[w6zn],
            qcm4i = nwez1h['qName'],
            mq3ci = nwez1h['value'],
            wns = qcm4i['indexOf'](':');
        if (wns > 0x0) var cqi = nwez1h['prefix'] = qcm4i['slice'](0x0, wns),
            whns62 = qcm4i['slice'](wns + 0x1),
            uxor = 'xmlns' === cqi && whns62;else whns62 = qcm4i, cqi = null, uxor = 'xmlns' === qcm4i && '';
        nwez1h['localName'] = whns62, uxor !== !0x1 && (null == _cl$i && (_cl$i = {}, eox9ur8(bkvt, bkvt = {})), bkvt[uxor] = _cl$i[uxor] = mq3ci, nwez1h['uri'] = 'http://www.w3.org/2000/xmlns/', _890ld['startPrefixMapping'](uxor, mq3ci));
    }
    for (var w6zn = ayvj2s['length']; w6zn--;) {
        nwez1h = ayvj2s[w6zn];
        var cqi = nwez1h['prefix'];
        cqi && ('xml' === cqi && (nwez1h['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== cqi && (nwez1h['uri'] = bkvt[cqi || '']));
    }
    var wns = sy6wh2['indexOf'](':');
    wns > 0x0 ? (cqi = ayvj2s['prefix'] = sy6wh2['slice'](0x0, wns), whns62 = ayvj2s['localName'] = sy6wh2['slice'](wns + 0x1)) : (cqi = null, whns62 = ayvj2s['localName'] = sy6wh2);
    var h2wsy = ayvj2s['uri'] = bkvt[cqi || ''];
    if (_890ld['startElement'](h2wsy, whns62, sy6wh2, ayvj2s), !ayvj2s['closed']) return ayvj2s['currentNSMap'] = bkvt, ayvj2s['localNSMap'] = _cl$i, !0x0;
    if (_890ld['endElement'](h2wsy, whns62, sy6wh2), _cl$i) {
        for (cqi in _cl$i) _890ld['endPrefixMapping'](cqi);
    }
}
function es6h2y(nhw26, hsw2y, fjyvga, drx, tgk5bf) {
    if (/^(?:script|textarea)$/i['test'](fjyvga)) {
        var bo75kt = nhw26['indexOf']('</' + fjyvga + '>', hsw2y),
            d8_90x = nhw26['substring'](hsw2y + 0x1, bo75kt);
        if (/[&<]/['test'](d8_90x)) return (/^script$/i['test'](fjyvga) ? (tgk5bf['characters'](d8_90x, 0x0, d8_90x['length']), bo75kt) : (d8_90x = d8_90x['replace'](/&#?\w+;/g, drx), tgk5bf['characters'](d8_90x, 0x0, d8_90x['length']), bo75kt)
        );
    }
    return hsw2y + 0x1;
}
function eayvs2(fbtavg, o8ru7x, k57tob, n1zpe) {
    var jsy6a2 = n1zpe[k57tob];
    return null == jsy6a2 && (jsy6a2 = fbtavg['lastIndexOf']('</' + k57tob + '>'), o8ru7x > jsy6a2 && (jsy6a2 = fbtavg['lastIndexOf']('</' + k57tob)), n1zpe[k57tob] = jsy6a2), o8ru7x > jsy6a2;
}
function eox9ur8(vftgab, vbfjga) {
    for (var tbgvkf in vftgab) vbfjga[tbgvkf] = vftgab[tbgvkf];
}
function el$cm0(n26hsw, gfyjv, ld9$_0, zswhn) {
    var udr8x9 = n26hsw['charAt'](gfyjv + 0x2);
    switch (udr8x9) {
        case '-':
            if ('-' === n26hsw['charAt'](gfyjv + 0x3)) {
                var c$l0_ = n26hsw['indexOf']('-->', gfyjv + 0x4);
                return c$l0_ > gfyjv ? (ld9$_0['comment'](n26hsw, gfyjv + 0x4, c$l0_ - gfyjv - 0x4), c$l0_ + 0x3) : (zswhn['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == n26hsw['substr'](gfyjv + 0x3, 0x6)) {
                var c$l0_ = n26hsw['indexOf'](']]>', gfyjv + 0x9);
                return ld9$_0['startCDATA'](), ld9$_0['characters'](n26hsw, gfyjv + 0x9, c$l0_ - gfyjv - 0x9), ld9$_0['endCDATA'](), c$l0_ + 0x3;
            }
            var n6h2 = ebvgktf(n26hsw, gfyjv),
                ux08 = n6h2['length'];
            if (ux08 > 0x1 && /!doctype/i['test'](n6h2[0x0][0x0])) {
                var jvafyg = n6h2[0x1][0x0],
                    vgfajy = ux08 > 0x3 && /^public$/i['test'](n6h2[0x2][0x0]) && n6h2[0x3][0x0],
                    ic3$ = ux08 > 0x4 && n6h2[0x4][0x0],
                    i4cq3m = n6h2[ux08 - 0x1];
                return ld9$_0['startDTD'](jvafyg, vgfajy && vgfajy['replace'](/^(['"])(.*?)\1$/, '$2'), ic3$ && ic3$['replace'](/^(['"])(.*?)\1$/, '$2')), ld9$_0['endDTD'](), i4cq3m['index'] + i4cq3m[0x0]['length'];
            }
    }
    return -0x1;
}
function egfvjay(u7oxr, phenz1, oru5) {
    var gabvfj = u7oxr['indexOf']('?>', phenz1);
    if (gabvfj) {
        var d$0ml_ = u7oxr['substring'](phenz1, gabvfj)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (d$0ml_) {
            {
                d$0ml_[0x0]['length'];
            }
            return oru5['processingInstruction'](d$0ml_[0x1], d$0ml_[0x2]), gabvfj + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function efvbaj() {}
function enhwze1(b75ok, pzen1) {
    return b75ok['__proto__'] = pzen1, b75ok;
}
function ebvgktf(s2w6hy, bagfvt) {
    var lm_d,
        w2jys6 = [],
        wez1n = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (wez1n['lastIndex'] = bagfvt, wez1n['exec'](s2w6hy); lm_d = wez1n['exec'](s2w6hy);) if (w2jys6['push'](lm_d), lm_d[0x1]) return w2jys6;
}
var egvyafj = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    eabvtgf = new RegExp('[\\-\\.0-9' + egvyafj['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    e$_m0l = new RegExp('^' + egvyafj['source'] + eabvtgf['source'] + '*(?::' + egvyafj['source'] + eabvtgf['source'] + '*)?$'),
    ey2vag = 0x0,
    eml0$d_ = 0x1,
    es62ay = 0x2,
    eo5kt = 0x3,
    ewehnz6 = 0x4,
    ektvfbg = 0x5,
    ey6w2h = 0x6,
    el4$mic = 0x7;
euro9x8['prototype'] = {
    'parse': function (ysva2, ysvj2, w2s6j) {
        var jyvag2 = this['domBuilder'];
        jyvag2['startDocument'](), eox9ur8(ysvj2, ysvj2 = {}), etgfb5k(ysva2, ysvj2, w2s6j, jyvag2, this['errorHandler']), jyvag2['endDocument']();
    }
}, efvbaj['prototype'] = {
    'setTagName': function (d8xru) {
        if (!e$_m0l['test'](d8xru)) throw new Error('invalid tagName:' + d8xru);
        this['tagName'] = d8xru;
    },
    'add': function (phe1zn, $09dl_, ftbva) {
        if (!e$_m0l['test'](phe1zn)) throw new Error('invalid attribute:' + phe1zn);
        this[this['length']++] = {
            'qName': phe1zn,
            'value': $09dl_,
            'offset': ftbva
        };
    },
    'length': 0x0,
    'getLocalName': function (svja2) {
        return this[svja2]['localName'];
    },
    'getLocator': function (c_ml$) {
        return this[c_ml$]['locator'];
    },
    'getQName': function (vgajy) {
        return this[vgajy]['qName'];
    },
    'getURI': function (vjfgba) {
        return this[vjfgba]['uri'];
    },
    'getValue': function (imq43c) {
        return this[imq43c]['value'];
    }
}, enhwze1({}, enhwze1['prototype']) instanceof enhwze1 || (enhwze1 = function (n1hp, i$lcm4) {
    function ruo87() {}
    ruo87['prototype'] = i$lcm4, ruo87 = new ruo87();
    for (i$lcm4 in n1hp) ruo87[i$lcm4] = n1hp[i$lcm4];
    return ruo87;
}), exports['XMLReader'] = euro9x8;