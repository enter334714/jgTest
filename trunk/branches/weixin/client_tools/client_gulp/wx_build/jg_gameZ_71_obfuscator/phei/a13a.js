var f = wx.$B;
function Stxla() {}
function Suxt8o(j0n9, qfdkr, vems$, n5tu, pemwb) {
    function r5y9n0(pb3ze) {
        if (pb3ze > 0xffff) {
            pb3ze -= 0x10000;
            var $wevms = 0xd800 + (pb3ze >> 0xa),
                i6hv$1 = 0xdc00 + (0x3ff & pb3ze);
            return String['fromCharCode']($wevms, i6hv$1);
        }
        return String['fromCharCode'](pb3ze);
    }
    function y05nu9(sv6) {
        var qjdfk = sv6['slice'](0x1, -0x1);
        return qjdfk in vems$ ? vems$[qjdfk] : '#' === qjdfk['charAt'](0x0) ? r5y9n0(parseInt(qjdfk['substr'](0x1)['replace']('x', '0x'))) : (pemwb['error']('entity not found:' + sv6), sv6);
    }
    function txluo8(ebvswm) {
        if (ebvswm > no5lu) {
            var tlaox8 = j0n9['substring'](no5lu, ebvswm)['replace'](/&#?\w+;/g, y05nu9);
            rkjfqd && i6a1gh(no5lu), n5tu['characters'](tlaox8, 0x0, ebvswm - no5lu), no5lu = ebvswm;
        }
    }
    function i6a1gh($wvsme, outx8) {
        for (; $wvsme >= m6w$sv && (outx8 = tu8xl['exec'](j0n9));) o5lnt = outx8['index'], m6w$sv = o5lnt + outx8[0x0]['length'], rkjfqd['lineNumber']++;
        rkjfqd['columnNumber'] = $wvsme - o5lnt + 0x1;
    }
    for (var o5lnt = 0x0, m6w$sv = 0x0, tu8xl = /.*(?:\r\n?|\n)|.*$/g, rkjfqd = n5tu['locator'], vh1i$ = [{ 'currentNSMap': qfdkr }], ebvwms = {}, no5lu = 0x0;;) {
        try {
            var tyno5u = j0n9['indexOf']('<', no5lu);
            if (0x0 > tyno5u) {
                if (!j0n9['substr'](no5lu)['match'](/^\s*$/)) {
                    var s$61h = n5tu['doc'],
                        we$svm = s$61h['createTextNode'](j0n9['substr'](no5lu));
                    s$61h['appendChild'](we$svm), n5tu['currentElement'] = we$svm;
                }
                return;
            }
            switch (tyno5u > no5lu && txluo8(tyno5u), j0n9['charAt'](tyno5u + 0x1)) {
                case '/':
                    var n905uy = j0n9['indexOf']('>', tyno5u + 0x3),
                        swev$ = j0n9['substring'](tyno5u + 0x2, n905uy),
                        ewsmv$ = vh1i$['pop']();
                    0x0 > n905uy ? (swev$ = j0n9['substring'](tyno5u + 0x2)['replace'](/[\s<].*/, ''), pemwb['error']('end tag name: ' + swev$ + ' is not complete:' + ewsmv$['tagName']), n905uy = tyno5u + 0x1 + swev$['length']) : swev$['match'](/\s</) && (swev$ = swev$['replace'](/[\s<].*/, ''), pemwb['error']('end tag name: ' + swev$ + ' maybe not complete'), n905uy = tyno5u + 0x1 + swev$['length']);
                    var jdfr = ewsmv$['localNSMap'],
                        _7p = ewsmv$['tagName'] == swev$,
                        x1ga = _7p || ewsmv$['tagName'] && ewsmv$['tagName']['toLowerCase']() == swev$['toLowerCase']();
                    if (x1ga) {
                        if (n5tu['endElement'](ewsmv$['uri'], ewsmv$['localName'], swev$), jdfr) {
                            for (var zb72p3 in jdfr) n5tu['endPrefixMapping'](zb72p3);
                        }
                        _7p || pemwb['fatalError']('end tag name: ' + swev$ + ' is not match the current start tagName:' + ewsmv$['tagName']);
                    } else vh1i$['push'](ewsmv$);
                    n905uy++;
                    break;
                case '?':
                    rkjfqd && i6a1gh(tyno5u), n905uy = Sv$w6(j0n9, tyno5u, n5tu);
                    break;
                case '!':
                    rkjfqd && i6a1gh(tyno5u), n905uy = Sax1i(j0n9, tyno5u, n5tu, pemwb);
                    break;
                default:
                    rkjfqd && i6a1gh(tyno5u);
                    var xl8ota = new Sebms2(),
                        t8la = vh1i$[vh1i$['length'] - 0x1]['currentNSMap'],
                        n905uy = Szp72_(j0n9, tyno5u, xl8ota, t8la, y05nu9, pemwb),
                        xut8l = xl8ota['length'];
                    if (!xl8ota['closed'] && Shw$v6(j0n9, n905uy, xl8ota['tagName'], ebvwms) && (xl8ota['closed'] = !0x0, vems$['nbsp'] || pemwb['warning']('unclosed xml attribute')), rkjfqd && xut8l) {
                        for (var $g1h = Sy9j0(rkjfqd, {}), bp3z2e = 0x0; xut8l > bp3z2e; bp3z2e++) {
                            var ou0 = xl8ota[bp3z2e];
                            i6a1gh(ou0['offset']), ou0['locator'] = Sy9j0(rkjfqd, {});
                        }
                        n5tu['locator'] = $g1h, Sia1hg8(xl8ota, n5tu, t8la) && vh1i$['push'](xl8ota), n5tu['locator'] = rkjfqd;
                    } else Sia1hg8(xl8ota, n5tu, t8la) && vh1i$['push'](xl8ota);
                    'http://www.w3.org/1999/xhtml' !== xl8ota['uri'] || xl8ota['closed'] ? n905uy++ : n905uy = S$6h1vi(j0n9, n905uy, xl8ota['tagName'], y05nu9, n5tu);
            }
        } catch (m$6) {
            pemwb['error']('element parse error: ' + m$6), n905uy = -0x1;
        }
        n905uy > no5lu ? no5lu = n905uy : txluo8(Math['max'](tyno5u, no5lu) + 0x1);
    }
}
function Sy9j0(z3p_27, la8txg) {
    return la8txg['lineNumber'] = z3p_27['lineNumber'], la8txg['columnNumber'] = z3p_27['columnNumber'], la8txg;
}
function Szp72_(y0j9kr, on5uy0, i1ahg, n0j9y, ih61v$, ga16) {
    for (var ouxt5l, u5ltno, j9rkqd = ++on5uy0, jrkd90 = Sbe2p3m;;) {
        var $msv6 = y0j9kr['charAt'](j9rkqd);
        switch ($msv6) {
            case '=':
                if (jrkd90 === Sd0jkr) ouxt5l = y0j9kr['slice'](on5uy0, j9rkqd), jrkd90 = Swem2bs;else {
                    if (jrkd90 !== Sn9yjr0) throw new Error('attribute equal must after attrName');
                    jrkd90 = Swem2bs;
                }
                break;
            case '\x27':
            case '\x22':
                if (jrkd90 === Swem2bs || jrkd90 === Sd0jkr) {
                    if (jrkd90 === Sd0jkr && (ga16['warning']('attribute value must after "="'), ouxt5l = y0j9kr['slice'](on5uy0, j9rkqd)), on5uy0 = j9rkqd + 0x1, j9rkqd = y0j9kr['indexOf']($msv6, on5uy0), !(j9rkqd > 0x0)) throw new Error('attribute value no end \'' + $msv6 + '\' match');
                    u5ltno = y0j9kr['slice'](on5uy0, j9rkqd)['replace'](/&#?\w+;/g, ih61v$), i1ahg['add'](ouxt5l, u5ltno, on5uy0 - 0x1), jrkd90 = Ss61vh;
                } else {
                    if (jrkd90 != Shia1g6) throw new Error('attribute value must after "="');
                    u5ltno = y0j9kr['slice'](on5uy0, j9rkqd)['replace'](/&#?\w+;/g, ih61v$), i1ahg['add'](ouxt5l, u5ltno, on5uy0), ga16['warning']('attribute "' + ouxt5l + '" missed start quot(' + $msv6 + ')!!'), on5uy0 = j9rkqd + 0x1, jrkd90 = Ss61vh;
                }
                break;
            case '/':
                switch (jrkd90) {
                    case Sbe2p3m:
                        i1ahg['setTagName'](y0j9kr['slice'](on5uy0, j9rkqd));
                    case Ss61vh:
                    case Snul5:
                    case Sult8x:
                        jrkd90 = Sult8x, i1ahg['closed'] = !0x0;
                    case Shia1g6:
                    case Sd0jkr:
                    case Sn9yjr0:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return ga16['error']('unexpected end of input'), jrkd90 == Sbe2p3m && i1ahg['setTagName'](y0j9kr['slice'](on5uy0, j9rkqd)), j9rkqd;
            case '>':
                switch (jrkd90) {
                    case Sbe2p3m:
                        i1ahg['setTagName'](y0j9kr['slice'](on5uy0, j9rkqd));
                    case Ss61vh:
                    case Snul5:
                    case Sult8x:
                        break;
                    case Shia1g6:
                    case Sd0jkr:
                        u5ltno = y0j9kr['slice'](on5uy0, j9rkqd), '/' === u5ltno['slice'](-0x1) && (i1ahg['closed'] = !0x0, u5ltno = u5ltno['slice'](0x0, -0x1));
                    case Sn9yjr0:
                        jrkd90 === Sn9yjr0 && (u5ltno = ouxt5l), jrkd90 == Shia1g6 ? (ga16['warning']('attribute "' + u5ltno + '" missed quot(")!!'), i1ahg['add'](ouxt5l, u5ltno['replace'](/&#?\w+;/g, ih61v$), on5uy0)) : ('http://www.w3.org/1999/xhtml' === n0j9y[''] && u5ltno['match'](/^(?:disabled|checked|selected)$/i) || ga16['warning']('attribute "' + u5ltno + '" missed value!! "' + u5ltno + '" instead!!'), i1ahg['add'](u5ltno, u5ltno, on5uy0));
                        break;
                    case Swem2bs:
                        throw new Error('attribute value missed!!');
                }
                return j9rkqd;
            case '\u0080':
                $msv6 = '\x20';
            default:
                if ('\x20' >= $msv6) switch (jrkd90) {
                    case Sbe2p3m:
                        i1ahg['setTagName'](y0j9kr['slice'](on5uy0, j9rkqd)), jrkd90 = Snul5;
                        break;
                    case Sd0jkr:
                        ouxt5l = y0j9kr['slice'](on5uy0, j9rkqd), jrkd90 = Sn9yjr0;
                        break;
                    case Shia1g6:
                        var u5ltno = y0j9kr['slice'](on5uy0, j9rkqd)['replace'](/&#?\w+;/g, ih61v$);
                        ga16['warning']('attribute "' + u5ltno + '" missed quot(")!!'), i1ahg['add'](ouxt5l, u5ltno, on5uy0);
                    case Ss61vh:
                        jrkd90 = Snul5;
                } else switch (jrkd90) {
                    case Sn9yjr0:
                        {
                            i1ahg['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === n0j9y[''] && ouxt5l['match'](/^(?:disabled|checked|selected)$/i) || ga16['warning']('attribute "' + ouxt5l + '" missed value!! "' + ouxt5l + '" instead2!!'), i1ahg['add'](ouxt5l, ouxt5l, on5uy0), on5uy0 = j9rkqd, jrkd90 = Sd0jkr;
                        break;
                    case Ss61vh:
                        ga16['warning']('attribute space is required"' + ouxt5l + '\x22!!');
                    case Snul5:
                        jrkd90 = Sd0jkr, on5uy0 = j9rkqd;
                        break;
                    case Swem2bs:
                        jrkd90 = Shia1g6, on5uy0 = j9rkqd;
                        break;
                    case Sult8x:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        j9rkqd++;
    }
}
function Sia1hg8(z2be, y0r5, yn9jr0) {
    for (var b2em3p = z2be['tagName'], uto5nl = null, ems2wb = z2be['length']; ems2wb--;) {
        var axt8gl = z2be[ems2wb],
            n9y0r5 = axt8gl['qName'],
            yu5o = axt8gl['value'],
            v6s$1h = n9y0r5['indexOf'](':');
        if (v6s$1h > 0x0) var j0y9nr = axt8gl['prefix'] = n9y0r5['slice'](0x0, v6s$1h),
            s$h61v = n9y0r5['slice'](v6s$1h + 0x1),
            smw$v = 'xmlns' === j0y9nr && s$h61v;else s$h61v = n9y0r5, j0y9nr = null, smw$v = 'xmlns' === n9y0r5 && '';
        axt8gl['localName'] = s$h61v, smw$v !== !0x1 && (null == uto5nl && (uto5nl = {}, Sy5notu(yn9jr0, yn9jr0 = {})), yn9jr0[smw$v] = uto5nl[smw$v] = yu5o, axt8gl['uri'] = 'http://www.w3.org/2000/xmlns/', y0r5['startPrefixMapping'](smw$v, yu5o));
    }
    for (var ems2wb = z2be['length']; ems2wb--;) {
        axt8gl = z2be[ems2wb];
        var j0y9nr = axt8gl['prefix'];
        j0y9nr && ('xml' === j0y9nr && (axt8gl['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== j0y9nr && (axt8gl['uri'] = yn9jr0[j0y9nr || '']));
    }
    var v6s$1h = b2em3p['indexOf'](':');
    v6s$1h > 0x0 ? (j0y9nr = z2be['prefix'] = b2em3p['slice'](0x0, v6s$1h), s$h61v = z2be['localName'] = b2em3p['slice'](v6s$1h + 0x1)) : (j0y9nr = null, s$h61v = z2be['localName'] = b2em3p);
    var zeb3p = z2be['uri'] = yn9jr0[j0y9nr || ''];
    if (y0r5['startElement'](zeb3p, s$h61v, b2em3p, z2be), !z2be['closed']) return z2be['currentNSMap'] = yn9jr0, z2be['localNSMap'] = uto5nl, !0x0;
    if (y0r5['endElement'](zeb3p, s$h61v, b2em3p), uto5nl) {
        for (j0y9nr in uto5nl) y0r5['endPrefixMapping'](j0y9nr);
    }
}
function S$6h1vi(r0y9j, ig18xa, tu5o, m2wpb, dkj0) {
    if (/^(?:script|textarea)$/i['test'](tu5o)) {
        var yu059 = r0y9j['indexOf']('</' + tu5o + '>', ig18xa),
            uoltx = r0y9j['substring'](ig18xa + 0x1, yu059);
        if (/[&<]/['test'](uoltx)) return (/^script$/i['test'](tu5o) ? (dkj0['characters'](uoltx, 0x0, uoltx['length']), yu059) : (uoltx = uoltx['replace'](/&#?\w+;/g, m2wpb), dkj0['characters'](uoltx, 0x0, uoltx['length']), yu059)
        );
    }
    return ig18xa + 0x1;
}
function Shw$v6(ty5, ax8gl, mbeswv, hgi8) {
    var m2webs = hgi8[mbeswv];
    return null == m2webs && (m2webs = ty5['lastIndexOf']('</' + mbeswv + '>'), ax8gl > m2webs && (m2webs = ty5['lastIndexOf']('</' + mbeswv)), hgi8[mbeswv] = m2webs), ax8gl > m2webs;
}
function Sy5notu(sevm, vmw6) {
    for (var n5y9u0 in sevm) vmw6[n5y9u0] = sevm[n5y9u0];
}
function Sax1i(y950nu, bvwmse, ih1$v6, a8ig1h) {
    var i16$hg = y950nu['charAt'](bvwmse + 0x2);
    switch (i16$hg) {
        case '-':
            if ('-' === y950nu['charAt'](bvwmse + 0x3)) {
                var wvsme$ = y950nu['indexOf']('-->', bvwmse + 0x4);
                return wvsme$ > bvwmse ? (ih1$v6['comment'](y950nu, bvwmse + 0x4, wvsme$ - bvwmse - 0x4), wvsme$ + 0x3) : (a8ig1h['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == y950nu['substr'](bvwmse + 0x3, 0x6)) {
                var wvsme$ = y950nu['indexOf'](']]>', bvwmse + 0x9);
                return ih1$v6['startCDATA'](), ih1$v6['characters'](y950nu, bvwmse + 0x9, wvsme$ - bvwmse - 0x9), ih1$v6['endCDATA'](), wvsme$ + 0x3;
            }
            var qkfjd = Sr9ky0(y950nu, bvwmse),
                b2ewmp = qkfjd['length'];
            if (b2ewmp > 0x1 && /!doctype/i['test'](qkfjd[0x0][0x0])) {
                var yj9r0 = qkfjd[0x1][0x0],
                    i18hg = b2ewmp > 0x3 && /^public$/i['test'](qkfjd[0x2][0x0]) && qkfjd[0x3][0x0],
                    lxga = b2ewmp > 0x4 && qkfjd[0x4][0x0],
                    i1xga = qkfjd[b2ewmp - 0x1];
                return ih1$v6['startDTD'](yj9r0, i18hg && i18hg['replace'](/^(['"])(.*?)\1$/, '$2'), lxga && lxga['replace'](/^(['"])(.*?)\1$/, '$2')), ih1$v6['endDTD'](), i1xga['index'] + i1xga[0x0]['length'];
            }
    }
    return -0x1;
}
function Sv$w6(_z37p2, rkfdj, smbew2) {
    var y9jnr0 = _z37p2['indexOf']('?>', rkfdj);
    if (y9jnr0) {
        var hi18g = _z37p2['substring'](rkfdj, y9jnr0)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (hi18g) {
            {
                hi18g[0x0]['length'];
            }
            return smbew2['processingInstruction'](hi18g[0x1], hi18g[0x2]), y9jnr0 + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function Sebms2() {}
function Si1hag8(qrfkj, i8a) {
    return qrfkj['__proto__'] = i8a, qrfkj;
}
function Sr9ky0(qkrf, bwvse) {
    var tlaxo,
        gxtl8 = [],
        mws$ve = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (mws$ve['lastIndex'] = bwvse, mws$ve['exec'](qkrf); tlaxo = mws$ve['exec'](qkrf);) if (gxtl8['push'](tlaxo), tlaxo[0x1]) return gxtl8;
}
var Svws6m$ = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    Sr5y9n = new RegExp('[\\-\\.0-9' + Svws6m$['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    Sxlt8a = new RegExp('^' + Svws6m$['source'] + Sr5y9n['source'] + '*(?::' + Svws6m$['source'] + Sr5y9n['source'] + '*)?$'),
    Sbe2p3m = 0x0,
    Sd0jkr = 0x1,
    Sn9yjr0 = 0x2,
    Swem2bs = 0x3,
    Shia1g6 = 0x4,
    Ss61vh = 0x5,
    Snul5 = 0x6,
    Sult8x = 0x7;
Stxla['prototype'] = {
    'parse': function (oxt5u, besw, oun5) {
        var dkf = this['domBuilder'];
        dkf['startDocument'](), Sy5notu(besw, besw = {}), Suxt8o(oxt5u, besw, oun5, dkf, this['errorHandler']), dkf['endDocument']();
    }
}, Sebms2['prototype'] = {
    'setTagName': function (iv$1h) {
        if (!Sxlt8a['test'](iv$1h)) throw new Error('invalid tagName:' + iv$1h);
        this['tagName'] = iv$1h;
    },
    'add': function (x8tuo, ta8xlo, ntl5uo) {
        if (!Sxlt8a['test'](x8tuo)) throw new Error('invalid attribute:' + x8tuo);
        this[this['length']++] = {
            'qName': x8tuo,
            'value': ta8xlo,
            'offset': ntl5uo
        };
    },
    'length': 0x0,
    'getLocalName': function (h6s$1) {
        return this[h6s$1]['localName'];
    },
    'getLocator': function (jqkd9r) {
        return this[jqkd9r]['locator'];
    },
    'getQName': function (y0oun) {
        return this[y0oun]['qName'];
    },
    'getURI': function (mvse$w) {
        return this[mvse$w]['uri'];
    },
    'getValue': function (pz_743) {
        return this[pz_743]['value'];
    }
}, Si1hag8({}, Si1hag8['prototype']) instanceof Si1hag8 || (Si1hag8 = function (y9k0r, vws$6h) {
    function $6s1hv() {}
    $6s1hv['prototype'] = vws$6h, $6s1hv = new $6s1hv();
    for (vws$6h in y9k0r) $6s1hv[vws$6h] = y9k0r[vws$6h];
    return $6s1hv;
}), exports['XMLReader'] = Stxla;