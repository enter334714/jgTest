var f = wx.$B;
function Sxoglw() {}
function Swi1xl3(sq28v, yvsq8, oihx, _nbfr, hxpmgo) {
    function xogwl(nf$_zr) {
        if (nf$_zr > 0xffff) {
            nf$_zr -= 0x10000;
            var pomhx = 0xd800 + (nf$_zr >> 0xa),
                j$79n4 = 0xdc00 + (0x3ff & nf$_zr);
            return String['fromCharCode'](pomhx, j$79n4);
        }
        return String['fromCharCode'](nf$_zr);
    }
    function b_dzfr(i31l5) {
        var s6au35 = i31l5['slice'](0x1, -0x1);
        return s6au35 in oihx ? oihx[s6au35] : '#' === s6au35['charAt'](0x0) ? xogwl(parseInt(s6au35['substr'](0x1)['replace']('x', '0x'))) : (hxpmgo['error']('entity not found:' + i31l5), i31l5);
    }
    function $79j4(iwoxl) {
        if (iwoxl > qsav82) {
            var vsa8 = sq28v['substring'](qsav82, iwoxl)['replace'](/&#?\w+;/g, b_dzfr);
            su && himgx(qsav82), _nbfr['characters'](vsa8, 0x0, iwoxl - qsav82), qsav82 = iwoxl;
        }
    }
    function himgx(oixlw, x1lwio) {
        for (; oixlw >= q2vsa8 && (x1lwio = il5w3['exec'](sq28v));) su6a8q = x1lwio['index'], q2vsa8 = su6a8q + x1lwio[0x0]['length'], su['lineNumber']++;
        su['columnNumber'] = oixlw - su6a8q + 0x1;
    }
    for (var su6a8q = 0x0, q2vsa8 = 0x0, il5w3 = /.*(?:\r\n?|\n)|.*$/g, su = _nbfr['locator'], wm = [{ 'currentNSMap': yvsq8 }], k74j = {}, qsav82 = 0x0;;) {
        try {
            var e7kj = sq28v['indexOf']('<', qsav82);
            if (0x0 > e7kj) {
                if (!sq28v['substr'](qsav82)['match'](/^\s*$/)) {
                    var pekt94 = _nbfr['doc'],
                        oxmi = pekt94['createTextNode'](sq28v['substr'](qsav82));
                    pekt94['appendChild'](oxmi), _nbfr['currentElement'] = oxmi;
                }
                return;
            }
            switch (e7kj > qsav82 && $79j4(e7kj), sq28v['charAt'](e7kj + 0x1)) {
                case '/':
                    var tmpgho = sq28v['indexOf']('>', e7kj + 0x3),
                        nr$7j = sq28v['substring'](e7kj + 0x2, tmpgho),
                        xgow = wm['pop']();
                    0x0 > tmpgho ? (nr$7j = sq28v['substring'](e7kj + 0x2)['replace'](/[\s<].*/, ''), hxpmgo['error']('end tag name: ' + nr$7j + ' is not complete:' + xgow['tagName']), tmpgho = e7kj + 0x1 + nr$7j['length']) : nr$7j['match'](/\s</) && (nr$7j = nr$7j['replace'](/[\s<].*/, ''), hxpmgo['error']('end tag name: ' + nr$7j + ' maybe not complete'), tmpgho = e7kj + 0x1 + nr$7j['length']);
                    var mhkpg = xgow['localNSMap'],
                        lw1ix3 = xgow['tagName'] == nr$7j,
                        ixgom = lw1ix3 || xgow['tagName'] && xgow['tagName']['toLowerCase']() == nr$7j['toLowerCase']();
                    if (ixgom) {
                        if (_nbfr['endElement'](xgow['uri'], xgow['localName'], nr$7j), mhkpg) {
                            for (var mhopgx in mhkpg) _nbfr['endPrefixMapping'](mhopgx);
                        }
                        lw1ix3 || hxpmgo['fatalError']('end tag name: ' + nr$7j + ' is not match the current start tagName:' + xgow['tagName']);
                    } else wm['push'](xgow);
                    tmpgho++;
                    break;
                case '?':
                    su && himgx(e7kj), tmpgho = Sj7n4$9(sq28v, e7kj, _nbfr);
                    break;
                case '!':
                    su && himgx(e7kj), tmpgho = Sixowgm(sq28v, e7kj, _nbfr, hxpmgo);
                    break;
                default:
                    su && himgx(e7kj);
                    var gxpom = new Smohgp(),
                        j94ke7 = wm[wm['length'] - 0x1]['currentNSMap'],
                        tmpgho = Si1xlo(sq28v, e7kj, gxpom, j94ke7, b_dzfr, hxpmgo),
                        jt4ek = gxpom['length'];
                    if (!gxpom['closed'] && Sehptk4(sq28v, tmpgho, gxpom['tagName'], k74j) && (gxpom['closed'] = !0x0, oihx['nbsp'] || hxpmgo['warning']('unclosed xml attribute')), su && jt4ek) {
                        for (var jek = Sqyv02(su, {}), kj49 = 0x0; jt4ek > kj49; kj49++) {
                            var w3xi1l = gxpom[kj49];
                            himgx(w3xi1l['offset']), w3xi1l['locator'] = Sqyv02(su, {});
                        }
                        _nbfr['locator'] = jek, Srdbfz(gxpom, _nbfr, j94ke7) && wm['push'](gxpom), _nbfr['locator'] = su;
                    } else Srdbfz(gxpom, _nbfr, j94ke7) && wm['push'](gxpom);
                    'http://www.w3.org/1999/xhtml' !== gxpom['uri'] || gxpom['closed'] ? tmpgho++ : tmpgho = Sfrz_b(sq28v, tmpgho, gxpom['tagName'], b_dzfr, _nbfr);
            }
        } catch (tkehmp) {
            hxpmgo['error']('element parse error: ' + tkehmp), tmpgho = -0x1;
        }
        tmpgho > qsav82 ? qsav82 = tmpgho : $79j4(Math['max'](e7kj, qsav82) + 0x1);
    }
}
function Sqyv02(et49j, hgo) {
    return hgo['lineNumber'] = et49j['lineNumber'], hgo['columnNumber'] = et49j['columnNumber'], hgo;
}
function Si1xlo(xmogih, w356l1, z_$nfr, fbnzr, hpg, aq6su) {
    for (var n$7z_r, dzr_, rn7j = ++w356l1, $frz = Sq8v;;) {
        var $9je47 = xmogih['charAt'](rn7j);
        switch ($9je47) {
            case '=':
                if ($frz === S$r7_j) n$7z_r = xmogih['slice'](w356l1, rn7j), $frz = Sysv2q;else {
                    if ($frz !== Sa8q2s) throw new Error('attribute equal must after attrName');
                    $frz = Sysv2q;
                }
                break;
            case '\x27':
            case '\x22':
                if ($frz === Sysv2q || $frz === S$r7_j) {
                    if ($frz === S$r7_j && (aq6su['warning']('attribute value must after "="'), n$7z_r = xmogih['slice'](w356l1, rn7j)), w356l1 = rn7j + 0x1, rn7j = xmogih['indexOf']($9je47, w356l1), !(rn7j > 0x0)) throw new Error('attribute value no end \'' + $9je47 + '\' match');
                    dzr_ = xmogih['slice'](w356l1, rn7j)['replace'](/&#?\w+;/g, hpg), z_$nfr['add'](n$7z_r, dzr_, w356l1 - 0x1), $frz = Sgpktm;
                } else {
                    if ($frz != Sl5w31) throw new Error('attribute value must after "="');
                    dzr_ = xmogih['slice'](w356l1, rn7j)['replace'](/&#?\w+;/g, hpg), z_$nfr['add'](n$7z_r, dzr_, w356l1), aq6su['warning']('attribute "' + n$7z_r + '" missed start quot(' + $9je47 + ')!!'), w356l1 = rn7j + 0x1, $frz = Sgpktm;
                }
                break;
            case '/':
                switch ($frz) {
                    case Sq8v:
                        z_$nfr['setTagName'](xmogih['slice'](w356l1, rn7j));
                    case Sgpktm:
                    case Sgpomx:
                    case Svs82aq:
                        $frz = Svs82aq, z_$nfr['closed'] = !0x0;
                    case Sl5w31:
                    case S$r7_j:
                    case Sa8q2s:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return aq6su['error']('unexpected end of input'), $frz == Sq8v && z_$nfr['setTagName'](xmogih['slice'](w356l1, rn7j)), rn7j;
            case '>':
                switch ($frz) {
                    case Sq8v:
                        z_$nfr['setTagName'](xmogih['slice'](w356l1, rn7j));
                    case Sgpktm:
                    case Sgpomx:
                    case Svs82aq:
                        break;
                    case Sl5w31:
                    case S$r7_j:
                        dzr_ = xmogih['slice'](w356l1, rn7j), '/' === dzr_['slice'](-0x1) && (z_$nfr['closed'] = !0x0, dzr_ = dzr_['slice'](0x0, -0x1));
                    case Sa8q2s:
                        $frz === Sa8q2s && (dzr_ = n$7z_r), $frz == Sl5w31 ? (aq6su['warning']('attribute "' + dzr_ + '" missed quot(")!!'), z_$nfr['add'](n$7z_r, dzr_['replace'](/&#?\w+;/g, hpg), w356l1)) : ('http://www.w3.org/1999/xhtml' === fbnzr[''] && dzr_['match'](/^(?:disabled|checked|selected)$/i) || aq6su['warning']('attribute "' + dzr_ + '" missed value!! "' + dzr_ + '" instead!!'), z_$nfr['add'](dzr_, dzr_, w356l1));
                        break;
                    case Sysv2q:
                        throw new Error('attribute value missed!!');
                }
                return rn7j;
            case '\u0080':
                $9je47 = '\x20';
            default:
                if ('\x20' >= $9je47) switch ($frz) {
                    case Sq8v:
                        z_$nfr['setTagName'](xmogih['slice'](w356l1, rn7j)), $frz = Sgpomx;
                        break;
                    case S$r7_j:
                        n$7z_r = xmogih['slice'](w356l1, rn7j), $frz = Sa8q2s;
                        break;
                    case Sl5w31:
                        var dzr_ = xmogih['slice'](w356l1, rn7j)['replace'](/&#?\w+;/g, hpg);
                        aq6su['warning']('attribute "' + dzr_ + '" missed quot(")!!'), z_$nfr['add'](n$7z_r, dzr_, w356l1);
                    case Sgpktm:
                        $frz = Sgpomx;
                } else switch ($frz) {
                    case Sa8q2s:
                        {
                            z_$nfr['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === fbnzr[''] && n$7z_r['match'](/^(?:disabled|checked|selected)$/i) || aq6su['warning']('attribute "' + n$7z_r + '" missed value!! "' + n$7z_r + '" instead2!!'), z_$nfr['add'](n$7z_r, n$7z_r, w356l1), w356l1 = rn7j, $frz = S$r7_j;
                        break;
                    case Sgpktm:
                        aq6su['warning']('attribute space is required"' + n$7z_r + '\x22!!');
                    case Sgpomx:
                        $frz = S$r7_j, w356l1 = rn7j;
                        break;
                    case Sysv2q:
                        $frz = Sl5w31, w356l1 = rn7j;
                        break;
                    case Svs82aq:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        rn7j++;
    }
}
function Srdbfz(w5i3, nfb_zr, htekp4) {
    for (var a86squ = w5i3['tagName'], u8aqs2 = null, r9j$7 = w5i3['length']; r9j$7--;) {
        var fr = w5i3[r9j$7],
            y0qv28 = fr['qName'],
            khtme = fr['value'],
            lu5631 = y0qv28['indexOf'](':');
        if (lu5631 > 0x0) var mhpx = fr['prefix'] = y0qv28['slice'](0x0, lu5631),
            pt4hek = y0qv28['slice'](lu5631 + 0x1),
            mhpgxo = 'xmlns' === mhpx && pt4hek;else pt4hek = y0qv28, mhpx = null, mhpgxo = 'xmlns' === y0qv28 && '';
        fr['localName'] = pt4hek, mhpgxo !== !0x1 && (null == u8aqs2 && (u8aqs2 = {}, Su56as8(htekp4, htekp4 = {})), htekp4[mhpgxo] = u8aqs2[mhpgxo] = khtme, fr['uri'] = 'http://www.w3.org/2000/xmlns/', nfb_zr['startPrefixMapping'](mhpgxo, khtme));
    }
    for (var r9j$7 = w5i3['length']; r9j$7--;) {
        fr = w5i3[r9j$7];
        var mhpx = fr['prefix'];
        mhpx && ('xml' === mhpx && (fr['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== mhpx && (fr['uri'] = htekp4[mhpx || '']));
    }
    var lu5631 = a86squ['indexOf'](':');
    lu5631 > 0x0 ? (mhpx = w5i3['prefix'] = a86squ['slice'](0x0, lu5631), pt4hek = w5i3['localName'] = a86squ['slice'](lu5631 + 0x1)) : (mhpx = null, pt4hek = w5i3['localName'] = a86squ);
    var rdf_zb = w5i3['uri'] = htekp4[mhpx || ''];
    if (nfb_zr['startElement'](rdf_zb, pt4hek, a86squ, w5i3), !w5i3['closed']) return w5i3['currentNSMap'] = htekp4, w5i3['localNSMap'] = u8aqs2, !0x0;
    if (nfb_zr['endElement'](rdf_zb, pt4hek, a86squ), u8aqs2) {
        for (mhpx in u8aqs2) nfb_zr['endPrefixMapping'](mhpx);
    }
}
function Sfrz_b(wl1x3i, l653u, kgphtm, j4$7e9, ua53s6) {
    if (/^(?:script|textarea)$/i['test'](kgphtm)) {
        var w316l5 = wl1x3i['indexOf']('</' + kgphtm + '>', l653u),
            thmpe = wl1x3i['substring'](l653u + 0x1, w316l5);
        if (/[&<]/['test'](thmpe)) return (/^script$/i['test'](kgphtm) ? (ua53s6['characters'](thmpe, 0x0, thmpe['length']), w316l5) : (thmpe = thmpe['replace'](/&#?\w+;/g, j4$7e9), ua53s6['characters'](thmpe, 0x0, thmpe['length']), w316l5)
        );
    }
    return l653u + 0x1;
}
function Sehptk4(rfn_b, zn$7_r, hoigxm, nzb_f) {
    var l6u315 = nzb_f[hoigxm];
    return null == l6u315 && (l6u315 = rfn_b['lastIndexOf']('</' + hoigxm + '>'), zn$7_r > l6u315 && (l6u315 = rfn_b['lastIndexOf']('</' + hoigxm)), nzb_f[hoigxm] = l6u315), zn$7_r > l6u315;
}
function Su56as8(e7j9k, e749) {
    for (var brznf in e7j9k) e749[brznf] = e7j9k[brznf];
}
function Sixowgm(tmohpg, ximg, nrj, zfrd) {
    var gxmwio = tmohpg['charAt'](ximg + 0x2);
    switch (gxmwio) {
        case '-':
            if ('-' === tmohpg['charAt'](ximg + 0x3)) {
                var s8yqv2 = tmohpg['indexOf']('-->', ximg + 0x4);
                return s8yqv2 > ximg ? (nrj['comment'](tmohpg, ximg + 0x4, s8yqv2 - ximg - 0x4), s8yqv2 + 0x3) : (zfrd['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == tmohpg['substr'](ximg + 0x3, 0x6)) {
                var s8yqv2 = tmohpg['indexOf'](']]>', ximg + 0x9);
                return nrj['startCDATA'](), nrj['characters'](tmohpg, ximg + 0x9, s8yqv2 - ximg - 0x9), nrj['endCDATA'](), s8yqv2 + 0x3;
            }
            var wl3xi = Sogxmph(tmohpg, ximg),
                r7_n = wl3xi['length'];
            if (r7_n > 0x1 && /!doctype/i['test'](wl3xi[0x0][0x0])) {
                var ihomgx = wl3xi[0x1][0x0],
                    zrdf_ = r7_n > 0x3 && /^public$/i['test'](wl3xi[0x2][0x0]) && wl3xi[0x3][0x0],
                    tohmgp = r7_n > 0x4 && wl3xi[0x4][0x0],
                    n7j9r$ = wl3xi[r7_n - 0x1];
                return nrj['startDTD'](ihomgx, zrdf_ && zrdf_['replace'](/^(['"])(.*?)\1$/, '$2'), tohmgp && tohmgp['replace'](/^(['"])(.*?)\1$/, '$2')), nrj['endDTD'](), n7j9r$['index'] + n7j9r$[0x0]['length'];
            }
    }
    return -0x1;
}
function Sj7n4$9(omixwg, au156, k4eph) {
    var l5361u = omixwg['indexOf']('?>', au156);
    if (l5361u) {
        var _drz = omixwg['substring'](au156, l5361u)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (_drz) {
            {
                _drz[0x0]['length'];
            }
            return k4eph['processingInstruction'](_drz[0x1], _drz[0x2]), l5361u + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function Smohgp() {}
function Sxlio1w(f_brd, q82s) {
    return f_brd['__proto__'] = q82s, f_brd;
}
function Sogxmph(nbrfz_, j94$7n) {
    var imox,
        $74e9 = [],
        mkep = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (mkep['lastIndex'] = j94$7n, mkep['exec'](nbrfz_); imox = mkep['exec'](nbrfz_);) if ($74e9['push'](imox), imox[0x1]) return $74e9;
}
var Sj7n_$ = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    Se47j9$ = new RegExp('[\\-\\.0-9' + Sj7n_$['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    Sbzr_f = new RegExp('^' + Sj7n_$['source'] + Se47j9$['source'] + '*(?::' + Sj7n_$['source'] + Se47j9$['source'] + '*)?$'),
    Sq8v = 0x0,
    S$r7_j = 0x1,
    Sa8q2s = 0x2,
    Sysv2q = 0x3,
    Sl5w31 = 0x4,
    Sgpktm = 0x5,
    Sgpomx = 0x6,
    Svs82aq = 0x7;
Sxoglw['prototype'] = {
    'parse': function (n$zfr, l1ixwo, mhpkg) {
        var xl1iwo = this['domBuilder'];
        xl1iwo['startDocument'](), Su56as8(l1ixwo, l1ixwo = {}), Swi1xl3(n$zfr, l1ixwo, mhpkg, xl1iwo, this['errorHandler']), xl1iwo['endDocument']();
    }
}, Smohgp['prototype'] = {
    'setTagName': function (r7_z$n) {
        if (!Sbzr_f['test'](r7_z$n)) throw new Error('invalid tagName:' + r7_z$n);
        this['tagName'] = r7_z$n;
    },
    'add': function (pmehkt, kmhe, nj) {
        if (!Sbzr_f['test'](pmehkt)) throw new Error('invalid attribute:' + pmehkt);
        this[this['length']++] = {
            'qName': pmehkt,
            'value': kmhe,
            'offset': nj
        };
    },
    'length': 0x0,
    'getLocalName': function (ej794$) {
        return this[ej794$]['localName'];
    },
    'getLocator': function (t9p4) {
        return this[t9p4]['locator'];
    },
    'getQName': function (khtpmg) {
        return this[khtpmg]['qName'];
    },
    'getURI': function (v2qs8) {
        return this[v2qs8]['uri'];
    },
    'getValue': function (bd_frz) {
        return this[bd_frz]['value'];
    }
}, Sxlio1w({}, Sxlio1w['prototype']) instanceof Sxlio1w || (Sxlio1w = function (oixlwg, u28q) {
    function qa82v() {}
    qa82v['prototype'] = u28q, qa82v = new qa82v();
    for (u28q in oixlwg) qa82v[u28q] = oixlwg[u28q];
    return qa82v;
}), exports['XMLReader'] = Sxoglw;