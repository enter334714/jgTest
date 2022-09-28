var f = wx.$B;
function Sxa1i() {}
function Sih1$6(i81axg, svmw$, p7z_43, y0jr9, r0j) {
    function latx(jqdrk) {
        if (jqdrk > 0xffff) {
            jqdrk -= 0x10000;
            var kjdqrf = 0xd800 + (jqdrk >> 0xa),
                nr90yj = 0xdc00 + (0x3ff & jqdrk);
            return String['fromCharCode'](kjdqrf, nr90yj);
        }
        return String['fromCharCode'](jqdrk);
    }
    function ou5l(_723p) {
        var rj9qkd = _723p['slice'](0x1, -0x1);
        return rj9qkd in p7z_43 ? p7z_43[rj9qkd] : '#' === rj9qkd['charAt'](0x0) ? latx(parseInt(rj9qkd['substr'](0x1)['replace']('x', '0x'))) : (r0j['error']('entity not found:' + _723p), _723p);
    }
    function otx5l(vemsw$) {
        if (vemsw$ > $s16h) {
            var n0yr9j = i81axg['substring']($s16h, vemsw$)['replace'](/&#?\w+;/g, ou5l);
            $smev && xlaot($s16h), y0jr9['characters'](n0yr9j, 0x0, vemsw$ - $s16h), $s16h = vemsw$;
        }
    }
    function xlaot(svw$me, iag8h1) {
        for (; svw$me >= kdjqrf && (iag8h1 = ryj0k9['exec'](i81axg));) u8lxt = iag8h1['index'], kdjqrf = u8lxt + iag8h1[0x0]['length'], $smev['lineNumber']++;
        $smev['columnNumber'] = svw$me - u8lxt + 0x1;
    }
    for (var u8lxt = 0x0, kdjqrf = 0x0, ryj0k9 = /.*(?:\r\n?|\n)|.*$/g, $smev = y0jr9['locator'], b2pe3z = [{ 'currentNSMap': svmw$ }], bemw2 = {}, $s16h = 0x0;;) {
        try {
            var $mwe = i81axg['indexOf']('<', $s16h);
            if (0x0 > $mwe) {
                if (!i81axg['substr']($s16h)['match'](/^\s*$/)) {
                    var r5n = y0jr9['doc'],
                        ry0kj = r5n['createTextNode'](i81axg['substr']($s16h));
                    r5n['appendChild'](ry0kj), y0jr9['currentElement'] = ry0kj;
                }
                return;
            }
            switch ($mwe > $s16h && otx5l($mwe), i81axg['charAt']($mwe + 0x1)) {
                case '/':
                    var ag81hi = i81axg['indexOf']('>', $mwe + 0x3),
                        $wv6sh = i81axg['substring']($mwe + 0x2, ag81hi),
                        kqjdr = b2pe3z['pop']();
                    0x0 > ag81hi ? ($wv6sh = i81axg['substring']($mwe + 0x2)['replace'](/[\s<].*/, ''), r0j['error']('end tag name: ' + $wv6sh + ' is not complete:' + kqjdr['tagName']), ag81hi = $mwe + 0x1 + $wv6sh['length']) : $wv6sh['match'](/\s</) && ($wv6sh = $wv6sh['replace'](/[\s<].*/, ''), r0j['error']('end tag name: ' + $wv6sh + ' maybe not complete'), ag81hi = $mwe + 0x1 + $wv6sh['length']);
                    var oxltu5 = kqjdr['localNSMap'],
                        vmbes = kqjdr['tagName'] == $wv6sh,
                        p473_ = vmbes || kqjdr['tagName'] && kqjdr['tagName']['toLowerCase']() == $wv6sh['toLowerCase']();
                    if (p473_) {
                        if (y0jr9['endElement'](kqjdr['uri'], kqjdr['localName'], $wv6sh), oxltu5) {
                            for (var v6hi$ in oxltu5) y0jr9['endPrefixMapping'](v6hi$);
                        }
                        vmbes || r0j['fatalError']('end tag name: ' + $wv6sh + ' is not match the current start tagName:' + kqjdr['tagName']);
                    } else b2pe3z['push'](kqjdr);
                    ag81hi++;
                    break;
                case '?':
                    $smev && xlaot($mwe), ag81hi = Sez23bp(i81axg, $mwe, y0jr9);
                    break;
                case '!':
                    $smev && xlaot($mwe), ag81hi = Sfjqrd(i81axg, $mwe, y0jr9, r0j);
                    break;
                default:
                    $smev && xlaot($mwe);
                    var ihg18 = new Srj9qd(),
                        e2pmb3 = b2pe3z[b2pe3z['length'] - 0x1]['currentNSMap'],
                        ag81hi = Stx8al(i81axg, $mwe, ihg18, e2pmb3, ou5l, r0j),
                        yr0j = ihg18['length'];
                    if (!ihg18['closed'] && Smev$s(i81axg, ag81hi, ihg18['tagName'], bemw2) && (ihg18['closed'] = !0x0, p7z_43['nbsp'] || r0j['warning']('unclosed xml attribute')), $smev && yr0j) {
                        for (var svbwm = S$h6s1($smev, {}), n5tlou = 0x0; yr0j > n5tlou; n5tlou++) {
                            var axtol8 = ihg18[n5tlou];
                            xlaot(axtol8['offset']), axtol8['locator'] = S$h6s1($smev, {});
                        }
                        y0jr9['locator'] = svbwm, Sqjfrk(ihg18, y0jr9, e2pmb3) && b2pe3z['push'](ihg18), y0jr9['locator'] = $smev;
                    } else Sqjfrk(ihg18, y0jr9, e2pmb3) && b2pe3z['push'](ihg18);
                    'http://www.w3.org/1999/xhtml' !== ihg18['uri'] || ihg18['closed'] ? ag81hi++ : ag81hi = Syj90rn(i81axg, ag81hi, ihg18['tagName'], ou5l, y0jr9);
            }
        } catch (n5ty) {
            r0j['error']('element parse error: ' + n5ty), ag81hi = -0x1;
        }
        ag81hi > $s16h ? $s16h = ag81hi : otx5l(Math['max']($mwe, $s16h) + 0x1);
    }
}
function S$h6s1(g8xai, $h61iv) {
    return $h61iv['lineNumber'] = g8xai['lineNumber'], $h61iv['columnNumber'] = g8xai['columnNumber'], $h61iv;
}
function Stx8al(xuotl, h6v$s, swbe2, ntoyu, djq9rk, gx8tla) {
    for (var n5yuto, bmw2, dk9q = ++h6v$s, kjqd = Sn095u;;) {
        var ltaxo = xuotl['charAt'](dk9q);
        switch (ltaxo) {
            case '=':
                if (kjqd === S$1gih) n5yuto = xuotl['slice'](h6v$s, dk9q), kjqd = Shi8ag;else {
                    if (kjqd !== Seb2ws) throw new Error('attribute equal must after attrName');
                    kjqd = Shi8ag;
                }
                break;
            case '\x27':
            case '\x22':
                if (kjqd === Shi8ag || kjqd === S$1gih) {
                    if (kjqd === S$1gih && (gx8tla['warning']('attribute value must after "="'), n5yuto = xuotl['slice'](h6v$s, dk9q)), h6v$s = dk9q + 0x1, dk9q = xuotl['indexOf'](ltaxo, h6v$s), !(dk9q > 0x0)) throw new Error('attribute value no end \'' + ltaxo + '\' match');
                    bmw2 = xuotl['slice'](h6v$s, dk9q)['replace'](/&#?\w+;/g, djq9rk), swbe2['add'](n5yuto, bmw2, h6v$s - 0x1), kjqd = Sunolt5;
                } else {
                    if (kjqd != S$wsm) throw new Error('attribute value must after "="');
                    bmw2 = xuotl['slice'](h6v$s, dk9q)['replace'](/&#?\w+;/g, djq9rk), swbe2['add'](n5yuto, bmw2, h6v$s), gx8tla['warning']('attribute "' + n5yuto + '" missed start quot(' + ltaxo + ')!!'), h6v$s = dk9q + 0x1, kjqd = Sunolt5;
                }
                break;
            case '/':
                switch (kjqd) {
                    case Sn095u:
                        swbe2['setTagName'](xuotl['slice'](h6v$s, dk9q));
                    case Sunolt5:
                    case Su09y:
                    case Sb7z32:
                        kjqd = Sb7z32, swbe2['closed'] = !0x0;
                    case S$wsm:
                    case S$1gih:
                    case Seb2ws:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return gx8tla['error']('unexpected end of input'), kjqd == Sn095u && swbe2['setTagName'](xuotl['slice'](h6v$s, dk9q)), dk9q;
            case '>':
                switch (kjqd) {
                    case Sn095u:
                        swbe2['setTagName'](xuotl['slice'](h6v$s, dk9q));
                    case Sunolt5:
                    case Su09y:
                    case Sb7z32:
                        break;
                    case S$wsm:
                    case S$1gih:
                        bmw2 = xuotl['slice'](h6v$s, dk9q), '/' === bmw2['slice'](-0x1) && (swbe2['closed'] = !0x0, bmw2 = bmw2['slice'](0x0, -0x1));
                    case Seb2ws:
                        kjqd === Seb2ws && (bmw2 = n5yuto), kjqd == S$wsm ? (gx8tla['warning']('attribute "' + bmw2 + '" missed quot(")!!'), swbe2['add'](n5yuto, bmw2['replace'](/&#?\w+;/g, djq9rk), h6v$s)) : ('http://www.w3.org/1999/xhtml' === ntoyu[''] && bmw2['match'](/^(?:disabled|checked|selected)$/i) || gx8tla['warning']('attribute "' + bmw2 + '" missed value!! "' + bmw2 + '" instead!!'), swbe2['add'](bmw2, bmw2, h6v$s));
                        break;
                    case Shi8ag:
                        throw new Error('attribute value missed!!');
                }
                return dk9q;
            case '\u0080':
                ltaxo = '\x20';
            default:
                if ('\x20' >= ltaxo) switch (kjqd) {
                    case Sn095u:
                        swbe2['setTagName'](xuotl['slice'](h6v$s, dk9q)), kjqd = Su09y;
                        break;
                    case S$1gih:
                        n5yuto = xuotl['slice'](h6v$s, dk9q), kjqd = Seb2ws;
                        break;
                    case S$wsm:
                        var bmw2 = xuotl['slice'](h6v$s, dk9q)['replace'](/&#?\w+;/g, djq9rk);
                        gx8tla['warning']('attribute "' + bmw2 + '" missed quot(")!!'), swbe2['add'](n5yuto, bmw2, h6v$s);
                    case Sunolt5:
                        kjqd = Su09y;
                } else switch (kjqd) {
                    case Seb2ws:
                        {
                            swbe2['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === ntoyu[''] && n5yuto['match'](/^(?:disabled|checked|selected)$/i) || gx8tla['warning']('attribute "' + n5yuto + '" missed value!! "' + n5yuto + '" instead2!!'), swbe2['add'](n5yuto, n5yuto, h6v$s), h6v$s = dk9q, kjqd = S$1gih;
                        break;
                    case Sunolt5:
                        gx8tla['warning']('attribute space is required"' + n5yuto + '\x22!!');
                    case Su09y:
                        kjqd = S$1gih, h6v$s = dk9q;
                        break;
                    case Shi8ag:
                        kjqd = S$wsm, h6v$s = dk9q;
                        break;
                    case Sb7z32:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        dk9q++;
    }
}
function Sqjfrk($61ghi, l8gi, tnu5oy) {
    for (var tuo5n = $61ghi['tagName'], kr0yj = null, $hgi6 = $61ghi['length']; $hgi6--;) {
        var k09dr = $61ghi[$hgi6],
            gh18 = k09dr['qName'],
            o8ltax = k09dr['value'],
            lox8u = gh18['indexOf'](':');
        if (lox8u > 0x0) var v1sh6$ = k09dr['prefix'] = gh18['slice'](0x0, lox8u),
            yrkj = gh18['slice'](lox8u + 0x1),
            a1hig6 = 'xmlns' === v1sh6$ && yrkj;else yrkj = gh18, v1sh6$ = null, a1hig6 = 'xmlns' === gh18 && '';
        k09dr['localName'] = yrkj, a1hig6 !== !0x1 && (null == kr0yj && (kr0yj = {}, Sxtl8ou(tnu5oy, tnu5oy = {})), tnu5oy[a1hig6] = kr0yj[a1hig6] = o8ltax, k09dr['uri'] = 'http://www.w3.org/2000/xmlns/', l8gi['startPrefixMapping'](a1hig6, o8ltax));
    }
    for (var $hgi6 = $61ghi['length']; $hgi6--;) {
        k09dr = $61ghi[$hgi6];
        var v1sh6$ = k09dr['prefix'];
        v1sh6$ && ('xml' === v1sh6$ && (k09dr['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== v1sh6$ && (k09dr['uri'] = tnu5oy[v1sh6$ || '']));
    }
    var lox8u = tuo5n['indexOf'](':');
    lox8u > 0x0 ? (v1sh6$ = $61ghi['prefix'] = tuo5n['slice'](0x0, lox8u), yrkj = $61ghi['localName'] = tuo5n['slice'](lox8u + 0x1)) : (v1sh6$ = null, yrkj = $61ghi['localName'] = tuo5n);
    var ems$vw = $61ghi['uri'] = tnu5oy[v1sh6$ || ''];
    if (l8gi['startElement'](ems$vw, yrkj, tuo5n, $61ghi), !$61ghi['closed']) return $61ghi['currentNSMap'] = tnu5oy, $61ghi['localNSMap'] = kr0yj, !0x0;
    if (l8gi['endElement'](ems$vw, yrkj, tuo5n), kr0yj) {
        for (v1sh6$ in kr0yj) l8gi['endPrefixMapping'](v1sh6$);
    }
}
function Syj90rn(ux5otl, $ig, jr9dk, hia61g, v16$s) {
    if (/^(?:script|textarea)$/i['test'](jr9dk)) {
        var vh1$6s = ux5otl['indexOf']('</' + jr9dk + '>', $ig),
            bwpe2m = ux5otl['substring']($ig + 0x1, vh1$6s);
        if (/[&<]/['test'](bwpe2m)) return (/^script$/i['test'](jr9dk) ? (v16$s['characters'](bwpe2m, 0x0, bwpe2m['length']), vh1$6s) : (bwpe2m = bwpe2m['replace'](/&#?\w+;/g, hia61g), v16$s['characters'](bwpe2m, 0x0, bwpe2m['length']), vh1$6s)
        );
    }
    return $ig + 0x1;
}
function Smev$s(e3z2p, h$vi16, jrdk9, ox8lta) {
    var ialxg = ox8lta[jrdk9];
    return null == ialxg && (ialxg = e3z2p['lastIndexOf']('</' + jrdk9 + '>'), h$vi16 > ialxg && (ialxg = e3z2p['lastIndexOf']('</' + jrdk9)), ox8lta[jrdk9] = ialxg), h$vi16 > ialxg;
}
function Sxtl8ou(a1g8hi, e$m) {
    for (var gi6$h1 in a1g8hi) e$m[gi6$h1] = a1g8hi[gi6$h1];
}
function Sfjqrd(ws$6v, z372_p, $svh6w, djkfrq) {
    var krdq9j = ws$6v['charAt'](z372_p + 0x2);
    switch (krdq9j) {
        case '-':
            if ('-' === ws$6v['charAt'](z372_p + 0x3)) {
                var ulxo8 = ws$6v['indexOf']('-->', z372_p + 0x4);
                return ulxo8 > z372_p ? ($svh6w['comment'](ws$6v, z372_p + 0x4, ulxo8 - z372_p - 0x4), ulxo8 + 0x3) : (djkfrq['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == ws$6v['substr'](z372_p + 0x3, 0x6)) {
                var ulxo8 = ws$6v['indexOf'](']]>', z372_p + 0x9);
                return $svh6w['startCDATA'](), $svh6w['characters'](ws$6v, z372_p + 0x9, ulxo8 - z372_p - 0x9), $svh6w['endCDATA'](), ulxo8 + 0x3;
            }
            var bw2epm = Sunlo(ws$6v, z372_p),
                emb3p2 = bw2epm['length'];
            if (emb3p2 > 0x1 && /!doctype/i['test'](bw2epm[0x0][0x0])) {
                var e3bmp = bw2epm[0x1][0x0],
                    wvbesm = emb3p2 > 0x3 && /^public$/i['test'](bw2epm[0x2][0x0]) && bw2epm[0x3][0x0],
                    onlu5t = emb3p2 > 0x4 && bw2epm[0x4][0x0],
                    vshw$6 = bw2epm[emb3p2 - 0x1];
                return $svh6w['startDTD'](e3bmp, wvbesm && wvbesm['replace'](/^(['"])(.*?)\1$/, '$2'), onlu5t && onlu5t['replace'](/^(['"])(.*?)\1$/, '$2')), $svh6w['endDTD'](), vshw$6['index'] + vshw$6[0x0]['length'];
            }
    }
    return -0x1;
}
function Sez23bp(p23be, wmsev$, k90jyr) {
    var y950un = p23be['indexOf']('?>', wmsev$);
    if (y950un) {
        var yn05r9 = p23be['substring'](wmsev$, y950un)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (yn05r9) {
            {
                yn05r9[0x0]['length'];
            }
            return k90jyr['processingInstruction'](yn05r9[0x1], yn05r9[0x2]), y950un + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function Srj9qd() {}
function Saig1x(oaxtl, _3z27p) {
    return oaxtl['__proto__'] = _3z27p, oaxtl;
}
function Sunlo(_3p27, frdjq) {
    var q9rkjd,
        tno5yu = [],
        v$w6h = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (v$w6h['lastIndex'] = frdjq, v$w6h['exec'](_3p27); q9rkjd = v$w6h['exec'](_3p27);) if (tno5yu['push'](q9rkjd), q9rkjd[0x1]) return tno5yu;
}
var Swm$v6 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    Sqd9rjk = new RegExp('[\\-\\.0-9' + Swm$v6['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    Sdjr09k = new RegExp('^' + Swm$v6['source'] + Sqd9rjk['source'] + '*(?::' + Swm$v6['source'] + Sqd9rjk['source'] + '*)?$'),
    Sn095u = 0x0,
    S$1gih = 0x1,
    Seb2ws = 0x2,
    Shi8ag = 0x3,
    S$wsm = 0x4,
    Sunolt5 = 0x5,
    Su09y = 0x6,
    Sb7z32 = 0x7;
Sxa1i['prototype'] = {
    'parse': function (xgt8al, v1ih6, wv6ms) {
        var pb3em = this['domBuilder'];
        pb3em['startDocument'](), Sxtl8ou(v1ih6, v1ih6 = {}), Sih1$6(xgt8al, v1ih6, wv6ms, pb3em, this['errorHandler']), pb3em['endDocument']();
    }
}, Srj9qd['prototype'] = {
    'setTagName': function (smbwe2) {
        if (!Sdjr09k['test'](smbwe2)) throw new Error('invalid tagName:' + smbwe2);
        this['tagName'] = smbwe2;
    },
    'add': function (smev$w, $v6ws, v$1hi6) {
        if (!Sdjr09k['test'](smev$w)) throw new Error('invalid attribute:' + smev$w);
        this[this['length']++] = {
            'qName': smev$w,
            'value': $v6ws,
            'offset': v$1hi6
        };
    },
    'length': 0x0,
    'getLocalName': function (alig8x) {
        return this[alig8x]['localName'];
    },
    'getLocator': function (p37_4z) {
        return this[p37_4z]['locator'];
    },
    'getQName': function (s1$v) {
        return this[s1$v]['qName'];
    },
    'getURI': function (bmsvew) {
        return this[bmsvew]['uri'];
    },
    'getValue': function (vwm6s$) {
        return this[vwm6s$]['value'];
    }
}, Saig1x({}, Saig1x['prototype']) instanceof Saig1x || (Saig1x = function (evs$m, h6i$v1) {
    function oln5t() {}
    oln5t['prototype'] = h6i$v1, oln5t = new oln5t();
    for (h6i$v1 in evs$m) oln5t[h6i$v1] = evs$m[h6i$v1];
    return oln5t;
}), exports['XMLReader'] = Sxa1i;