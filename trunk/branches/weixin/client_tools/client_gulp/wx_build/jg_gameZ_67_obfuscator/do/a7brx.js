function gdmeck_() {}
function g_kceod(j$ly6, l46j, nbr280, n02hr, kcd_) {
    function q02b1(hs7z) {
        if (hs7z > 0xffff) {
            hs7z -= 0x10000;
            var m59cpd = 0xd800 + (hs7z >> 0xa),
                pft5g9 = 0xdc00 + (0x3ff & hs7z);
            return String['fromCharCode'](m59cpd, pft5g9);
        }
        return String['fromCharCode'](hs7z);
    }
    function ly46fg(mcdp9) {
        var t65g9 = mcdp9['slice'](0x1, -0x1);
        return t65g9 in nbr280 ? nbr280[t65g9] : '#' === t65g9['charAt'](0x0) ? q02b1(parseInt(t65g9['substr'](0x1)['replace']('x', '0x'))) : (kcd_['error']('entity not found:' + mcdp9), mcdp9);
    }
    function rb12(n3802) {
        if (n3802 > qaeo) {
            var k_eaq = j$ly6['substring'](qaeo, n3802)['replace'](/&#?\w+;/g, ly46fg);
            vw$j4 && nr208b(qaeo), n02hr['characters'](k_eaq, 0x0, n3802 - qaeo), qaeo = n3802;
        }
    }
    function nr208b(u2h8n, w4jy$) {
        for (; u2h8n >= zh3s && (w4jy$ = ush8n3['exec'](j$ly6));) gf65t = w4jy$['index'], zh3s = gf65t + w4jy$[0x0]['length'], vw$j4['lineNumber']++;
        vw$j4['columnNumber'] = u2h8n - gf65t + 0x1;
    }
    for (var gf65t = 0x0, zh3s = 0x0, ush8n3 = /.*(?:\r\n?|\n)|.*$/g, vw$j4 = n02hr['locator'], q_aok = [{ 'currentNSMap': l46j }], t6fgyl = {}, qaeo = 0x0;;) {
        try {
            var p5d9 = j$ly6['indexOf']('<', qaeo);
            if (0x0 > p5d9) {
                if (!j$ly6['substr'](qaeo)['match'](/^\s*$/)) {
                    var _oekd = n02hr['doc'],
                        u3hn2 = _oekd['createTextNode'](j$ly6['substr'](qaeo));
                    _oekd['appendChild'](u3hn2), n02hr['currentElement'] = u3hn2;
                }
                return;
            }
            switch (p5d9 > qaeo && rb12(p5d9), j$ly6['charAt'](p5d9 + 0x1)) {
                case '/':
                    var kcoae = j$ly6['indexOf']('>', p5d9 + 0x3),
                        ns3hu = j$ly6['substring'](p5d9 + 0x2, kcoae),
                        bo1q = q_aok['pop']();
                    0x0 > kcoae ? (ns3hu = j$ly6['substring'](p5d9 + 0x2)['replace'](/[\s<].*/, ''), kcd_['error']('end tag name: ' + ns3hu + ' is not complete:' + bo1q['tagName']), kcoae = p5d9 + 0x1 + ns3hu['length']) : ns3hu['match'](/\s</) && (ns3hu = ns3hu['replace'](/[\s<].*/, ''), kcd_['error']('end tag name: ' + ns3hu + ' maybe not complete'), kcoae = p5d9 + 0x1 + ns3hu['length']);
                    var x3z7s = bo1q['localNSMap'],
                        wjvi$4 = bo1q['tagName'] == ns3hu,
                        su3hzn = wjvi$4 || bo1q['tagName'] && bo1q['tagName']['toLowerCase']() == ns3hu['toLowerCase']();
                    if (su3hzn) {
                        if (n02hr['endElement'](bo1q['uri'], bo1q['localName'], ns3hu), x3z7s) {
                            for (var m9pe in x3z7s) n02hr['endPrefixMapping'](m9pe);
                        }
                        wjvi$4 || kcd_['fatalError']('end tag name: ' + ns3hu + ' is not match the current start tagName:' + bo1q['tagName']);
                    } else q_aok['push'](bo1q);
                    kcoae++;
                    break;
                case '?':
                    vw$j4 && nr208b(p5d9), kcoae = gcpe9m(j$ly6, p5d9, n02hr);
                    break;
                case '!':
                    vw$j4 && nr208b(p5d9), kcoae = goqak1(j$ly6, p5d9, n02hr, kcd_);
                    break;
                default:
                    vw$j4 && nr208b(p5d9);
                    var u7h = new grb2n8(),
                        y$l6j = q_aok[q_aok['length'] - 0x1]['currentNSMap'],
                        kcoae = gko1a_q(j$ly6, p5d9, u7h, y$l6j, ly46fg, kcd_),
                        uh3ns = u7h['length'];
                    if (!u7h['closed'] && gy4jfl(j$ly6, kcoae, u7h['tagName'], t6fgyl) && (u7h['closed'] = !0x0, nbr280['nbsp'] || kcd_['warning']('unclosed xml attribute')), vw$j4 && uh3ns) {
                        for (var f695gt = gbr0n(vw$j4, {}), coke = 0x0; uh3ns > coke; coke++) {
                            var f4j6 = u7h[coke];
                            nr208b(f4j6['offset']), f4j6['locator'] = gbr0n(vw$j4, {});
                        }
                        n02hr['locator'] = f695gt, gr0b821(u7h, n02hr, y$l6j) && q_aok['push'](u7h), n02hr['locator'] = vw$j4;
                    } else gr0b821(u7h, n02hr, y$l6j) && q_aok['push'](u7h);
                    'http://www.w3.org/1999/xhtml' !== u7h['uri'] || u7h['closed'] ? kcoae++ : kcoae = gp9g5f(j$ly6, kcoae, u7h['tagName'], ly46fg, n02hr);
            }
        } catch (b1aro) {
            kcd_['error']('element parse error: ' + b1aro), kcoae = -0x1;
        }
        kcoae > qaeo ? qaeo = kcoae : rb12(Math['max'](p5d9, qaeo) + 0x1);
    }
}
function gbr0n(edmp, g5m) {
    return g5m['lineNumber'] = edmp['lineNumber'], g5m['columnNumber'] = edmp['columnNumber'], g5m;
}
function gko1a_q(_1oak, mp5dt9, b1arq, g5pt9m, epcmd_, ked_m) {
    for (var w$jl4i, b1280r, j4lf6 = ++mp5dt9, _cmd = ga10bq;;) {
        var qaorb = _1oak['charAt'](j4lf6);
        switch (qaorb) {
            case '=':
                if (_cmd === gg6f5) w$jl4i = _1oak['slice'](mp5dt9, j4lf6), _cmd = gqr01b2;else {
                    if (_cmd !== gtm5dp9) throw new Error('attribute equal must after attrName');
                    _cmd = gqr01b2;
                }
                break;
            case '\x27':
            case '\x22':
                if (_cmd === gqr01b2 || _cmd === gg6f5) {
                    if (_cmd === gg6f5 && (ked_m['warning']('attribute value must after "="'), w$jl4i = _1oak['slice'](mp5dt9, j4lf6)), mp5dt9 = j4lf6 + 0x1, j4lf6 = _1oak['indexOf'](qaorb, mp5dt9), !(j4lf6 > 0x0)) throw new Error('attribute value no end \'' + qaorb + '\' match');
                    b1280r = _1oak['slice'](mp5dt9, j4lf6)['replace'](/&#?\w+;/g, epcmd_), b1arq['add'](w$jl4i, b1280r, mp5dt9 - 0x1), _cmd = gqboak1;
                } else {
                    if (_cmd != gmp59cd) throw new Error('attribute value must after "="');
                    b1280r = _1oak['slice'](mp5dt9, j4lf6)['replace'](/&#?\w+;/g, epcmd_), b1arq['add'](w$jl4i, b1280r, mp5dt9), ked_m['warning']('attribute "' + w$jl4i + '" missed start quot(' + qaorb + ')!!'), mp5dt9 = j4lf6 + 0x1, _cmd = gqboak1;
                }
                break;
            case '/':
                switch (_cmd) {
                    case ga10bq:
                        b1arq['setTagName'](_1oak['slice'](mp5dt9, j4lf6));
                    case gqboak1:
                    case gtfy56:
                    case g_aeko:
                        _cmd = g_aeko, b1arq['closed'] = !0x0;
                    case gmp59cd:
                    case gg6f5:
                    case gtm5dp9:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return ked_m['error']('unexpected end of input'), _cmd == ga10bq && b1arq['setTagName'](_1oak['slice'](mp5dt9, j4lf6)), j4lf6;
            case '>':
                switch (_cmd) {
                    case ga10bq:
                        b1arq['setTagName'](_1oak['slice'](mp5dt9, j4lf6));
                    case gqboak1:
                    case gtfy56:
                    case g_aeko:
                        break;
                    case gmp59cd:
                    case gg6f5:
                        b1280r = _1oak['slice'](mp5dt9, j4lf6), '/' === b1280r['slice'](-0x1) && (b1arq['closed'] = !0x0, b1280r = b1280r['slice'](0x0, -0x1));
                    case gtm5dp9:
                        _cmd === gtm5dp9 && (b1280r = w$jl4i), _cmd == gmp59cd ? (ked_m['warning']('attribute "' + b1280r + '" missed quot(")!!'), b1arq['add'](w$jl4i, b1280r['replace'](/&#?\w+;/g, epcmd_), mp5dt9)) : ('http://www.w3.org/1999/xhtml' === g5pt9m[''] && b1280r['match'](/^(?:disabled|checked|selected)$/i) || ked_m['warning']('attribute "' + b1280r + '" missed value!! "' + b1280r + '" instead!!'), b1arq['add'](b1280r, b1280r, mp5dt9));
                        break;
                    case gqr01b2:
                        throw new Error('attribute value missed!!');
                }
                return j4lf6;
            case '\u0080':
                qaorb = '\x20';
            default:
                if ('\x20' >= qaorb) switch (_cmd) {
                    case ga10bq:
                        b1arq['setTagName'](_1oak['slice'](mp5dt9, j4lf6)), _cmd = gtfy56;
                        break;
                    case gg6f5:
                        w$jl4i = _1oak['slice'](mp5dt9, j4lf6), _cmd = gtm5dp9;
                        break;
                    case gmp59cd:
                        var b1280r = _1oak['slice'](mp5dt9, j4lf6)['replace'](/&#?\w+;/g, epcmd_);
                        ked_m['warning']('attribute "' + b1280r + '" missed quot(")!!'), b1arq['add'](w$jl4i, b1280r, mp5dt9);
                    case gqboak1:
                        _cmd = gtfy56;
                } else switch (_cmd) {
                    case gtm5dp9:
                        {
                            b1arq['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === g5pt9m[''] && w$jl4i['match'](/^(?:disabled|checked|selected)$/i) || ked_m['warning']('attribute "' + w$jl4i + '" missed value!! "' + w$jl4i + '" instead2!!'), b1arq['add'](w$jl4i, w$jl4i, mp5dt9), mp5dt9 = j4lf6, _cmd = gg6f5;
                        break;
                    case gqboak1:
                        ked_m['warning']('attribute space is required"' + w$jl4i + '\x22!!');
                    case gtfy56:
                        _cmd = gg6f5, mp5dt9 = j4lf6;
                        break;
                    case gqr01b2:
                        _cmd = gmp59cd, mp5dt9 = j4lf6;
                        break;
                    case g_aeko:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        j4lf6++;
    }
}
function gr0b821(_aeock, koe_d, pft) {
    for (var pdmc_e = _aeock['tagName'], jiwl4 = null, mdkc_ = _aeock['length']; mdkc_--;) {
        var nb20r8 = _aeock[mdkc_],
            lygf4 = nb20r8['qName'],
            ft9 = nb20r8['value'],
            sn3u8h = lygf4['indexOf'](':');
        if (sn3u8h > 0x0) var m_pedc = nb20r8['prefix'] = lygf4['slice'](0x0, sn3u8h),
            _dkm = lygf4['slice'](sn3u8h + 0x1),
            a_eq = 'xmlns' === m_pedc && _dkm;else _dkm = lygf4, m_pedc = null, a_eq = 'xmlns' === lygf4 && '';
        nb20r8['localName'] = _dkm, a_eq !== !0x1 && (null == jiwl4 && (jiwl4 = {}, gdp9c5(pft, pft = {})), pft[a_eq] = jiwl4[a_eq] = ft9, nb20r8['uri'] = 'http://www.w3.org/2000/xmlns/', koe_d['startPrefixMapping'](a_eq, ft9));
    }
    for (var mdkc_ = _aeock['length']; mdkc_--;) {
        nb20r8 = _aeock[mdkc_];
        var m_pedc = nb20r8['prefix'];
        m_pedc && ('xml' === m_pedc && (nb20r8['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== m_pedc && (nb20r8['uri'] = pft[m_pedc || '']));
    }
    var sn3u8h = pdmc_e['indexOf'](':');
    sn3u8h > 0x0 ? (m_pedc = _aeock['prefix'] = pdmc_e['slice'](0x0, sn3u8h), _dkm = _aeock['localName'] = pdmc_e['slice'](sn3u8h + 0x1)) : (m_pedc = null, _dkm = _aeock['localName'] = pdmc_e);
    var us8h3n = _aeock['uri'] = pft[m_pedc || ''];
    if (koe_d['startElement'](us8h3n, _dkm, pdmc_e, _aeock), !_aeock['closed']) return _aeock['currentNSMap'] = pft, _aeock['localNSMap'] = jiwl4, !0x0;
    if (koe_d['endElement'](us8h3n, _dkm, pdmc_e), jiwl4) {
        for (m_pedc in jiwl4) koe_d['endPrefixMapping'](m_pedc);
    }
}
function gp9g5f(gtf59, shnuz, pgtf5, q021rb, q1r02) {
    if (/^(?:script|textarea)$/i['test'](pgtf5)) {
        var g5yt = gtf59['indexOf']('</' + pgtf5 + '>', shnuz),
            iw4l$j = gtf59['substring'](shnuz + 0x1, g5yt);
        if (/[&<]/['test'](iw4l$j)) return (/^script$/i['test'](pgtf5) ? (q1r02['characters'](iw4l$j, 0x0, iw4l$j['length']), g5yt) : (iw4l$j = iw4l$j['replace'](/&#?\w+;/g, q021rb), q1r02['characters'](iw4l$j, 0x0, iw4l$j['length']), g5yt)
        );
    }
    return shnuz + 0x1;
}
function gy4jfl(eaoq_k, qa_koe, jf4y6, d_epm) {
    var oekcd = d_epm[jf4y6];
    return null == oekcd && (oekcd = eaoq_k['lastIndexOf']('</' + jf4y6 + '>'), qa_koe > oekcd && (oekcd = eaoq_k['lastIndexOf']('</' + jf4y6)), d_epm[jf4y6] = oekcd), qa_koe > oekcd;
}
function gdp9c5(nus83, tlyfg6) {
    for (var oqk1b in nus83) tlyfg6[oqk1b] = nus83[oqk1b];
}
function goqak1($4jvi, dcme9p, f6y4jl, r8h) {
    var dm9pce = $4jvi['charAt'](dcme9p + 0x2);
    switch (dm9pce) {
        case '-':
            if ('-' === $4jvi['charAt'](dcme9p + 0x3)) {
                var roba1q = $4jvi['indexOf']('-->', dcme9p + 0x4);
                return roba1q > dcme9p ? (f6y4jl['comment']($4jvi, dcme9p + 0x4, roba1q - dcme9p - 0x4), roba1q + 0x3) : (r8h['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == $4jvi['substr'](dcme9p + 0x3, 0x6)) {
                var roba1q = $4jvi['indexOf'](']]>', dcme9p + 0x9);
                return f6y4jl['startCDATA'](), f6y4jl['characters']($4jvi, dcme9p + 0x9, roba1q - dcme9p - 0x9), f6y4jl['endCDATA'](), roba1q + 0x3;
            }
            var uz73sh = gs8hun3($4jvi, dcme9p),
                ptf9 = uz73sh['length'];
            if (ptf9 > 0x1 && /!doctype/i['test'](uz73sh[0x0][0x0])) {
                var dp5c = uz73sh[0x1][0x0],
                    bk1qoa = ptf9 > 0x3 && /^public$/i['test'](uz73sh[0x2][0x0]) && uz73sh[0x3][0x0],
                    j6l$y4 = ptf9 > 0x4 && uz73sh[0x4][0x0],
                    uznh3 = uz73sh[ptf9 - 0x1];
                return f6y4jl['startDTD'](dp5c, bk1qoa && bk1qoa['replace'](/^(['"])(.*?)\1$/, '$2'), j6l$y4 && j6l$y4['replace'](/^(['"])(.*?)\1$/, '$2')), f6y4jl['endDTD'](), uznh3['index'] + uznh3[0x0]['length'];
            }
    }
    return -0x1;
}
function gcpe9m(v$i4j, lf6gy4, u7zh3s) {
    var u7s3hz = v$i4j['indexOf']('?>', lf6gy4);
    if (u7s3hz) {
        var zusn3h = v$i4j['substring'](lf6gy4, u7s3hz)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (zusn3h) {
            {
                zusn3h[0x0]['length'];
            }
            return u7zh3s['processingInstruction'](zusn3h[0x1], zusn3h[0x2]), u7s3hz + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function grb2n8() {}
function g_cake(gm9p5t, a_1q) {
    return gm9p5t['__proto__'] = a_1q, gm9p5t;
}
function gs8hun3(lg64yf, nh308) {
    var uzsh3,
        k_aq1 = [],
        kboa1q = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (kboa1q['lastIndex'] = nh308, kboa1q['exec'](lg64yf); uzsh3 = kboa1q['exec'](lg64yf);) if (k_aq1['push'](uzsh3), uzsh3[0x1]) return k_aq1;
}
var g_pdcm = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    gj$wy4l = new RegExp('[\\-\\.0-9' + g_pdcm['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    gb20rq1 = new RegExp('^' + g_pdcm['source'] + gj$wy4l['source'] + '*(?::' + g_pdcm['source'] + gj$wy4l['source'] + '*)?$'),
    ga10bq = 0x0,
    gg6f5 = 0x1,
    gtm5dp9 = 0x2,
    gqr01b2 = 0x3,
    gmp59cd = 0x4,
    gqboak1 = 0x5,
    gtfy56 = 0x6,
    g_aeko = 0x7;
gdmeck_['prototype'] = {
    'parse': function (mc_dek, mp5c9, _kca) {
        var em_dpc = this['domBuilder'];
        em_dpc['startDocument'](), gdp9c5(mp5c9, mp5c9 = {}), g_kceod(mc_dek, mp5c9, _kca, em_dpc, this['errorHandler']), em_dpc['endDocument']();
    }
}, grb2n8['prototype'] = {
    'setTagName': function (dcko_e) {
        if (!gb20rq1['test'](dcko_e)) throw new Error('invalid tagName:' + dcko_e);
        this['tagName'] = dcko_e;
    },
    'add': function (aqok1b, edc_, ylf4) {
        if (!gb20rq1['test'](aqok1b)) throw new Error('invalid attribute:' + aqok1b);
        this[this['length']++] = {
            'qName': aqok1b,
            'value': edc_,
            'offset': ylf4
        };
    },
    'length': 0x0,
    'getLocalName': function (p9ec) {
        return this[p9ec]['localName'];
    },
    'getLocator': function (fytgl) {
        return this[fytgl]['locator'];
    },
    'getQName': function ($wyjl4) {
        return this[$wyjl4]['qName'];
    },
    'getURI': function (tg59f6) {
        return this[tg59f6]['uri'];
    },
    'getValue': function (b1aqor) {
        return this[b1aqor]['value'];
    }
}, g_cake({}, g_cake['prototype']) instanceof g_cake || (g_cake = function (d95p, gtf6y5) {
    function iljw4$() {}
    iljw4$['prototype'] = gtf6y5, iljw4$ = new iljw4$();
    for (gtf6y5 in d95p) iljw4$[gtf6y5] = d95p[gtf6y5];
    return iljw4$;
}), exports['XMLReader'] = gdmeck_;