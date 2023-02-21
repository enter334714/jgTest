var J = wx.h$;
function gn7ixj() {}
function g_ht(c8tgd, cpezh, una341, gk068d, tc68z) {
    function epc(fw$92) {
        if (fw$92 > 0xffff) {
            fw$92 -= 0x10000;
            var jr7iv = 0xd800 + (fw$92 >> 0xa),
                _e2p9 = 0xdc00 + (0x3ff & fw$92);
            return String['fromCharCode'](jr7iv, _e2p9);
        }
        return String['fromCharCode'](fw$92);
    }
    function vinxj7(vryq5o) {
        var rvj7y = vryq5o['slice'](0x1, -0x1);
        return rvj7y in una341 ? una341[rvj7y] : '#' === rvj7y['charAt'](0x0) ? epc(parseInt(rvj7y['substr'](0x1)['replace']('x', '0x'))) : (tc68z['error']('entity not found:' + vryq5o), vryq5o);
    }
    function yrj5vo(z_2pw) {
        if (z_2pw > oqk) {
            var ze2p_ = c8tgd['substring'](oqk, z_2pw)['replace'](/&#?\w+;/g, vinxj7);
            g06kd8 && cezpht(oqk), gk068d['characters'](ze2p_, 0x0, z_2pw - oqk), oqk = z_2pw;
        }
    }
    function cezpht(n4i31u, hepzct) {
        for (; n4i31u >= e_p2z && (hepzct = hctep['exec'](c8tgd));) n4a3 = hepzct['index'], e_p2z = n4a3 + hepzct[0x0]['length'], g06kd8['lineNumber']++;
        g06kd8['columnNumber'] = n4i31u - n4a3 + 0x1;
    }
    for (var n4a3 = 0x0, e_p2z = 0x0, hctep = /.*(?:\r\n?|\n)|.*$/g, g06kd8 = gk068d['locator'], hc8td = [{ 'currentNSMap': cpezh }], b5ry = {}, oqk = 0x0;;) {
        try {
            var b50kqo = c8tgd['indexOf']('<', oqk);
            if (0x0 > b50kqo) {
                if (!c8tgd['substr'](oqk)['match'](/^\s*$/)) {
                    var e_9pw2 = gk068d['doc'],
                        u4a3l = e_9pw2['createTextNode'](c8tgd['substr'](oqk));
                    e_9pw2['appendChild'](u4a3l), gk068d['currentElement'] = u4a3l;
                }
                return;
            }
            switch (b50kqo > oqk && yrj5vo(b50kqo), c8tgd['charAt'](b50kqo + 0x1)) {
                case '/':
                    var g8dt6c = c8tgd['indexOf']('>', b50kqo + 0x3),
                        _wz2pe = c8tgd['substring'](b50kqo + 0x2, g8dt6c),
                        r7vxy = hc8td['pop']();
                    0x0 > g8dt6c ? (_wz2pe = c8tgd['substring'](b50kqo + 0x2)['replace'](/[\s<].*/, ''), tc68z['error']('end tag name: ' + _wz2pe + ' is not complete:' + r7vxy['tagName']), g8dt6c = b50kqo + 0x1 + _wz2pe['length']) : _wz2pe['match'](/\s</) && (_wz2pe = _wz2pe['replace'](/[\s<].*/, ''), tc68z['error']('end tag name: ' + _wz2pe + ' maybe not complete'), g8dt6c = b50kqo + 0x1 + _wz2pe['length']);
                    var y0bq5o = r7vxy['localNSMap'],
                        gd68tc = r7vxy['tagName'] == _wz2pe,
                        gdtc6 = gd68tc || r7vxy['tagName'] && r7vxy['tagName']['toLowerCase']() == _wz2pe['toLowerCase']();
                    if (gdtc6) {
                        if (gk068d['endElement'](r7vxy['uri'], r7vxy['localName'], _wz2pe), y0bq5o) {
                            for (var s9$2fw in y0bq5o) gk068d['endPrefixMapping'](s9$2fw);
                        }
                        gd68tc || tc68z['fatalError']('end tag name: ' + _wz2pe + ' is not match the current start tagName:' + r7vxy['tagName']);
                    } else hc8td['push'](r7vxy);
                    g8dt6c++;
                    break;
                case '?':
                    g06kd8 && cezpht(b50kqo), g8dt6c = govyqr5(c8tgd, b50kqo, gk068d);
                    break;
                case '!':
                    g06kd8 && cezpht(b50kqo), g8dt6c = ghzp2(c8tgd, b50kqo, gk068d, tc68z);
                    break;
                default:
                    g06kd8 && cezpht(b50kqo);
                    var ezth_ = new gk0bg5(),
                        _ew2pz = hc8td[hc8td['length'] - 0x1]['currentNSMap'],
                        g8dt6c = gk0qgb(c8tgd, b50kqo, ezth_, _ew2pz, vinxj7, tc68z),
                        oqy50b = ezth_['length'];
                    if (!ezth_['closed'] && gl4am3u(c8tgd, g8dt6c, ezth_['tagName'], b5ry) && (ezth_['closed'] = !0x0, una341['nbsp'] || tc68z['warning']('unclosed xml attribute')), g06kd8 && oqy50b) {
                        for (var qr5vo = gqroyv(g06kd8, {}), w$s2f = 0x0; oqy50b > w$s2f; w$s2f++) {
                            var qb0kgd = ezth_[w$s2f];
                            cezpht(qb0kgd['offset']), qb0kgd['locator'] = gqroyv(g06kd8, {});
                        }
                        gk068d['locator'] = qr5vo, gtg8(ezth_, gk068d, _ew2pz) && hc8td['push'](ezth_), gk068d['locator'] = g06kd8;
                    } else gtg8(ezth_, gk068d, _ew2pz) && hc8td['push'](ezth_);
                    'http://www.w3.org/1999/xhtml' !== ezth_['uri'] || ezth_['closed'] ? g8dt6c++ : g8dt6c = gdgkqb(c8tgd, g8dt6c, ezth_['tagName'], vinxj7, gk068d);
            }
        } catch (oqvr5y) {
            tc68z['error']('element parse error: ' + oqvr5y), g8dt6c = -0x1;
        }
        g8dt6c > oqk ? oqk = g8dt6c : yrj5vo(Math['max'](b50kqo, oqk) + 0x1);
    }
}
function gqroyv(v5oyrj, wpze2) {
    return wpze2['lineNumber'] = v5oyrj['lineNumber'], wpze2['columnNumber'] = v5oyrj['columnNumber'], wpze2;
}
function gk0qgb(tc86dh, d8ch, swf$2, ul13a, r7vxji, dkg86) {
    for (var k6cg8, tz, _9epw = ++d8ch, hdt68c = gg6dk8c;;) {
        var wp92_e = tc86dh['charAt'](_9epw);
        switch (wp92_e) {
            case '=':
                if (hdt68c === gphe2z) k6cg8 = tc86dh['slice'](d8ch, _9epw), hdt68c = g$2sw9;else {
                    if (hdt68c !== go50ybq) throw new Error('attribute equal must after attrName');
                    hdt68c = g$2sw9;
                }
                break;
            case '\x27':
            case '\x22':
                if (hdt68c === g$2sw9 || hdt68c === gphe2z) {
                    if (hdt68c === gphe2z && (dkg86['warning']('attribute value must after "="'), k6cg8 = tc86dh['slice'](d8ch, _9epw)), d8ch = _9epw + 0x1, _9epw = tc86dh['indexOf'](wp92_e, d8ch), !(_9epw > 0x0)) throw new Error('attribute value no end \'' + wp92_e + '\' match');
                    tz = tc86dh['slice'](d8ch, _9epw)['replace'](/&#?\w+;/g, r7vxji), swf$2['add'](k6cg8, tz, d8ch - 0x1), hdt68c = gyro5j;
                } else {
                    if (hdt68c != gze2h_p) throw new Error('attribute value must after "="');
                    tz = tc86dh['slice'](d8ch, _9epw)['replace'](/&#?\w+;/g, r7vxji), swf$2['add'](k6cg8, tz, d8ch), dkg86['warning']('attribute "' + k6cg8 + '" missed start quot(' + wp92_e + ')!!'), d8ch = _9epw + 0x1, hdt68c = gyro5j;
                }
                break;
            case '/':
                switch (hdt68c) {
                    case gg6dk8c:
                        swf$2['setTagName'](tc86dh['slice'](d8ch, _9epw));
                    case gyro5j:
                    case ggq0b5k:
                    case gqkob50:
                        hdt68c = gqkob50, swf$2['closed'] = !0x0;
                    case gze2h_p:
                    case gphe2z:
                    case go50ybq:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return dkg86['error']('unexpected end of input'), hdt68c == gg6dk8c && swf$2['setTagName'](tc86dh['slice'](d8ch, _9epw)), _9epw;
            case '>':
                switch (hdt68c) {
                    case gg6dk8c:
                        swf$2['setTagName'](tc86dh['slice'](d8ch, _9epw));
                    case gyro5j:
                    case ggq0b5k:
                    case gqkob50:
                        break;
                    case gze2h_p:
                    case gphe2z:
                        tz = tc86dh['slice'](d8ch, _9epw), '/' === tz['slice'](-0x1) && (swf$2['closed'] = !0x0, tz = tz['slice'](0x0, -0x1));
                    case go50ybq:
                        hdt68c === go50ybq && (tz = k6cg8), hdt68c == gze2h_p ? (dkg86['warning']('attribute "' + tz + '" missed quot(")!!'), swf$2['add'](k6cg8, tz['replace'](/&#?\w+;/g, r7vxji), d8ch)) : ('http://www.w3.org/1999/xhtml' === ul13a[''] && tz['match'](/^(?:disabled|checked|selected)$/i) || dkg86['warning']('attribute "' + tz + '" missed value!! "' + tz + '" instead!!'), swf$2['add'](tz, tz, d8ch));
                        break;
                    case g$2sw9:
                        throw new Error('attribute value missed!!');
                }
                return _9epw;
            case '\u0080':
                wp92_e = '\x20';
            default:
                if ('\x20' >= wp92_e) switch (hdt68c) {
                    case gg6dk8c:
                        swf$2['setTagName'](tc86dh['slice'](d8ch, _9epw)), hdt68c = ggq0b5k;
                        break;
                    case gphe2z:
                        k6cg8 = tc86dh['slice'](d8ch, _9epw), hdt68c = go50ybq;
                        break;
                    case gze2h_p:
                        var tz = tc86dh['slice'](d8ch, _9epw)['replace'](/&#?\w+;/g, r7vxji);
                        dkg86['warning']('attribute "' + tz + '" missed quot(")!!'), swf$2['add'](k6cg8, tz, d8ch);
                    case gyro5j:
                        hdt68c = ggq0b5k;
                } else switch (hdt68c) {
                    case go50ybq:
                        {
                            swf$2['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === ul13a[''] && k6cg8['match'](/^(?:disabled|checked|selected)$/i) || dkg86['warning']('attribute "' + k6cg8 + '" missed value!! "' + k6cg8 + '" instead2!!'), swf$2['add'](k6cg8, k6cg8, d8ch), d8ch = _9epw, hdt68c = gphe2z;
                        break;
                    case gyro5j:
                        dkg86['warning']('attribute space is required"' + k6cg8 + '\x22!!');
                    case ggq0b5k:
                        hdt68c = gphe2z, d8ch = _9epw;
                        break;
                    case g$2sw9:
                        hdt68c = gze2h_p, d8ch = _9epw;
                        break;
                    case gqkob50:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        _9epw++;
    }
}
function gtg8(k6gbd, gb6, rj5) {
    for (var d80k6g = k6gbd['tagName'], o5vjry = null, p9f = k6gbd['length']; p9f--;) {
        var vi7xnj = k6gbd[p9f],
            voyr5q = vi7xnj['qName'],
            yr7vj = vi7xnj['value'],
            k0b6dg = voyr5q['indexOf'](':');
        if (k0b6dg > 0x0) var yvor5j = vi7xnj['prefix'] = voyr5q['slice'](0x0, k0b6dg),
            ixn3 = voyr5q['slice'](k0b6dg + 0x1),
            lam4u = 'xmlns' === yvor5j && ixn3;else ixn3 = voyr5q, yvor5j = null, lam4u = 'xmlns' === voyr5q && '';
        vi7xnj['localName'] = ixn3, lam4u !== !0x1 && (null == o5vjry && (o5vjry = {}, gp_het(rj5, rj5 = {})), rj5[lam4u] = o5vjry[lam4u] = yr7vj, vi7xnj['uri'] = 'http://www.w3.org/2000/xmlns/', gb6['startPrefixMapping'](lam4u, yr7vj));
    }
    for (var p9f = k6gbd['length']; p9f--;) {
        vi7xnj = k6gbd[p9f];
        var yvor5j = vi7xnj['prefix'];
        yvor5j && ('xml' === yvor5j && (vi7xnj['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== yvor5j && (vi7xnj['uri'] = rj5[yvor5j || '']));
    }
    var k0b6dg = d80k6g['indexOf'](':');
    k0b6dg > 0x0 ? (yvor5j = k6gbd['prefix'] = d80k6g['slice'](0x0, k0b6dg), ixn3 = k6gbd['localName'] = d80k6g['slice'](k0b6dg + 0x1)) : (yvor5j = null, ixn3 = k6gbd['localName'] = d80k6g);
    var zh2p_ = k6gbd['uri'] = rj5[yvor5j || ''];
    if (gb6['startElement'](zh2p_, ixn3, d80k6g, k6gbd), !k6gbd['closed']) return k6gbd['currentNSMap'] = rj5, k6gbd['localNSMap'] = o5vjry, !0x0;
    if (gb6['endElement'](zh2p_, ixn3, d80k6g), o5vjry) {
        for (yvor5j in o5vjry) gb6['endPrefixMapping'](yvor5j);
    }
}
function gdgkqb(yb5ro, hzc6, lu3a14, pf2w9, c8ht6d) {
    if (/^(?:script|textarea)$/i['test'](lu3a14)) {
        var _etphz = yb5ro['indexOf']('</' + lu3a14 + '>', hzc6),
            ezw_2p = yb5ro['substring'](hzc6 + 0x1, _etphz);
        if (/[&<]/['test'](ezw_2p)) return (/^script$/i['test'](lu3a14) ? (c8ht6d['characters'](ezw_2p, 0x0, ezw_2p['length']), _etphz) : (ezw_2p = ezw_2p['replace'](/&#?\w+;/g, pf2w9), c8ht6d['characters'](ezw_2p, 0x0, ezw_2p['length']), _etphz)
        );
    }
    return hzc6 + 0x1;
}
function gl4am3u(n71jxi, jx71n, b50qok, i1n3x) {
    var z_pw2 = i1n3x[b50qok];
    return null == z_pw2 && (z_pw2 = n71jxi['lastIndexOf']('</' + b50qok + '>'), jx71n > z_pw2 && (z_pw2 = n71jxi['lastIndexOf']('</' + b50qok)), i1n3x[b50qok] = z_pw2), jx71n > z_pw2;
}
function gp_het(_ez2w, p_e29) {
    for (var _petz in _ez2w) p_e29[_petz] = _ez2w[_petz];
}
function ghzp2(ehpz_2, epczt, tdc6h, thcz6) {
    var qgkb5 = ehpz_2['charAt'](epczt + 0x2);
    switch (qgkb5) {
        case '-':
            if ('-' === ehpz_2['charAt'](epczt + 0x3)) {
                var uni314 = ehpz_2['indexOf']('-->', epczt + 0x4);
                return uni314 > epczt ? (tdc6h['comment'](ehpz_2, epczt + 0x4, uni314 - epczt - 0x4), uni314 + 0x3) : (thcz6['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == ehpz_2['substr'](epczt + 0x3, 0x6)) {
                var uni314 = ehpz_2['indexOf'](']]>', epczt + 0x9);
                return tdc6h['startCDATA'](), tdc6h['characters'](ehpz_2, epczt + 0x9, uni314 - epczt - 0x9), tdc6h['endCDATA'](), uni314 + 0x3;
            }
            var xvj7 = g_pwze2(ehpz_2, epczt),
                nu1a = xvj7['length'];
            if (nu1a > 0x1 && /!doctype/i['test'](xvj7[0x0][0x0])) {
                var ul4m = xvj7[0x1][0x0],
                    kdb06g = nu1a > 0x3 && /^public$/i['test'](xvj7[0x2][0x0]) && xvj7[0x3][0x0],
                    pcthze = nu1a > 0x4 && xvj7[0x4][0x0],
                    voy5jr = xvj7[nu1a - 0x1];
                return tdc6h['startDTD'](ul4m, kdb06g && kdb06g['replace'](/^(['"])(.*?)\1$/, '$2'), pcthze && pcthze['replace'](/^(['"])(.*?)\1$/, '$2')), tdc6h['endDTD'](), voy5jr['index'] + voy5jr[0x0]['length'];
            }
    }
    return -0x1;
}
function govyqr5(yvrj5, n1i4u, una13) {
    var jry7o = yvrj5['indexOf']('?>', n1i4u);
    if (jry7o) {
        var $f92w_ = yvrj5['substring'](n1i4u, jry7o)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if ($f92w_) {
            {
                $f92w_[0x0]['length'];
            }
            return una13['processingInstruction']($f92w_[0x1], $f92w_[0x2]), jry7o + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function gk0bg5() {}
function gt8dcg(okqb5, cgd68) {
    return okqb5['__proto__'] = cgd68, okqb5;
}
function g_pwze2(sf$2, b05yo) {
    var epw9_,
        qob5 = [],
        ybrqo5 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (ybrqo5['lastIndex'] = b05yo, ybrqo5['exec'](sf$2); epw9_ = ybrqo5['exec'](sf$2);) if (qob5['push'](epw9_), epw9_[0x1]) return qob5;
}
var gct86dh = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    gl43mua = new RegExp('[\\-\\.0-9' + gct86dh['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    gcd = new RegExp('^' + gct86dh['source'] + gl43mua['source'] + '*(?::' + gct86dh['source'] + gl43mua['source'] + '*)?$'),
    gg6dk8c = 0x0,
    gphe2z = 0x1,
    go50ybq = 0x2,
    g$2sw9 = 0x3,
    gze2h_p = 0x4,
    gyro5j = 0x5,
    ggq0b5k = 0x6,
    gqkob50 = 0x7;
gn7ixj['prototype'] = {
    'parse': function (gd08k6, tz6ch8, j7yro) {
        var nxvj = this['domBuilder'];
        nxvj['startDocument'](), gp_het(tz6ch8, tz6ch8 = {}), g_ht(gd08k6, tz6ch8, j7yro, nxvj, this['errorHandler']), nxvj['endDocument']();
    }
}, gk0bg5['prototype'] = {
    'setTagName': function (p_9w2f) {
        if (!gcd['test'](p_9w2f)) throw new Error('invalid tagName:' + p_9w2f);
        this['tagName'] = p_9w2f;
    },
    'add': function (ij7rvx, n1ix7j, h8c6dt) {
        if (!gcd['test'](ij7rvx)) throw new Error('invalid attribute:' + ij7rvx);
        this[this['length']++] = {
            'qName': ij7rvx,
            'value': n1ix7j,
            'offset': h8c6dt
        };
    },
    'length': 0x0,
    'getLocalName': function (k0qg5b) {
        return this[k0qg5b]['localName'];
    },
    'getLocator': function (o5rvyj) {
        return this[o5rvyj]['locator'];
    },
    'getQName': function (xi7jr) {
        return this[xi7jr]['qName'];
    },
    'getURI': function (q5rovy) {
        return this[q5rovy]['uri'];
    },
    'getValue': function (xjy7rv) {
        return this[xjy7rv]['value'];
    }
}, gt8dcg({}, gt8dcg['prototype']) instanceof gt8dcg || (gt8dcg = function (pchzte, bgk60) {
    function vi7j() {}
    vi7j['prototype'] = bgk60, vi7j = new vi7j();
    for (bgk60 in pchzte) vi7j[bgk60] = pchzte[bgk60];
    return vi7j;
}), exports['XMLReader'] = gn7ixj;