var G = wx.$E;
function Es12i_() {}
function Ebm748(c6j$k, d51i, glx, b4k6c, i1_jtd) {
    function rfwq8v(hpny9g) {
        if (hpny9g > 0xffff) {
            hpny9g -= 0x10000;
            var t1idj = 0xd800 + (hpny9g >> 0xa),
                si1td = 0xdc00 + (0x3ff & hpny9g);
            return String['fromCharCode'](t1idj, si1td);
        }
        return String['fromCharCode'](hpny9g);
    }
    function jikd6(qua9rh) {
        var d56$ = qua9rh['slice'](0x1, -0x1);
        return d56$ in glx ? glx[d56$] : '#' === d56$['charAt'](0x0) ? rfwq8v(parseInt(d56$['substr'](0x1)['replace']('x', '0x'))) : (i1_jtd['error']('entity not found:' + qua9rh), qua9rh);
    }
    function pxnloy(vaqw8) {
        if (vaqw8 > z032ts) {
            var t1_3s = c6j$k['substring'](z032ts, vaqw8)['replace'](/&#?\w+;/g, jikd6);
            awqr8v && k$56d(z032ts), b4k6c['characters'](t1_3s, 0x0, vaqw8 - z032ts), z032ts = vaqw8;
        }
    }
    function k$56d(sdt1_, plyhn) {
        for (; sdt1_ >= avqrw && (plyhn = wfv7['exec'](c6j$k));) f78w = plyhn['index'], avqrw = f78w + plyhn[0x0]['length'], awqr8v['lineNumber']++;
        awqr8v['columnNumber'] = sdt1_ - f78w + 0x1;
    }
    for (var f78w = 0x0, avqrw = 0x0, wfv7 = /.*(?:\r\n?|\n)|.*$/g, awqr8v = b4k6c['locator'], dj_1t = [{ 'currentNSMap': d51i }], ij_d51 = {}, z032ts = 0x0;;) {
        try {
            var xolnp = c6j$k['indexOf']('<', z032ts);
            if (0x0 > xolnp) {
                if (!c6j$k['substr'](z032ts)['match'](/^\s*$/)) {
                    var qaw = b4k6c['doc'],
                        pyonl = qaw['createTextNode'](c6j$k['substr'](z032ts));
                    qaw['appendChild'](pyonl), b4k6c['currentElement'] = pyonl;
                }
                return;
            }
            switch (xolnp > z032ts && pxnloy(xolnp), c6j$k['charAt'](xolnp + 0x1)) {
                case '/':
                    var t1_2s3 = c6j$k['indexOf']('>', xolnp + 0x3),
                        hq9ar = c6j$k['substring'](xolnp + 0x2, t1_2s3),
                        hau9q = dj_1t['pop']();
                    0x0 > t1_2s3 ? (hq9ar = c6j$k['substring'](xolnp + 0x2)['replace'](/[\s<].*/, ''), i1_jtd['error']('end tag name: ' + hq9ar + ' is not complete:' + hau9q['tagName']), t1_2s3 = xolnp + 0x1 + hq9ar['length']) : hq9ar['match'](/\s</) && (hq9ar = hq9ar['replace'](/[\s<].*/, ''), i1_jtd['error']('end tag name: ' + hq9ar + ' maybe not complete'), t1_2s3 = xolnp + 0x1 + hq9ar['length']);
                    var wvq8rf = hau9q['localNSMap'],
                        npyhlg = hau9q['tagName'] == hq9ar,
                        ghpua = npyhlg || hau9q['tagName'] && hau9q['tagName']['toLowerCase']() == hq9ar['toLowerCase']();
                    if (ghpua) {
                        if (b4k6c['endElement'](hau9q['uri'], hau9q['localName'], hq9ar), wvq8rf) {
                            for (var b$cm4 in wvq8rf) b4k6c['endPrefixMapping'](b$cm4);
                        }
                        npyhlg || i1_jtd['fatalError']('end tag name: ' + hq9ar + ' is not match the current start tagName:' + hau9q['tagName']);
                    } else dj_1t['push'](hau9q);
                    t1_2s3++;
                    break;
                case '?':
                    awqr8v && k$56d(xolnp), t1_2s3 = Eb7m4c$(c6j$k, xolnp, b4k6c);
                    break;
                case '!':
                    awqr8v && k$56d(xolnp), t1_2s3 = Eqru9av(c6j$k, xolnp, b4k6c, i1_jtd);
                    break;
                default:
                    awqr8v && k$56d(xolnp);
                    var ploxyn = new Em$4kcb(),
                        c$bm4 = dj_1t[dj_1t['length'] - 0x1]['currentNSMap'],
                        t1_2s3 = Etdij1(c6j$k, xolnp, ploxyn, c$bm4, jikd6, i1_jtd),
                        warqvu = ploxyn['length'];
                    if (!ploxyn['closed'] && Ev7r8fw(c6j$k, t1_2s3, ploxyn['tagName'], ij_d51) && (ploxyn['closed'] = !0x0, glx['nbsp'] || i1_jtd['warning']('unclosed xml attribute')), awqr8v && warqvu) {
                        for (var u9har = Ed_t(awqr8v, {}), gy9np = 0x0; warqvu > gy9np; gy9np++) {
                            var wvrfq = ploxyn[gy9np];
                            k$56d(wvrfq['offset']), wvrfq['locator'] = Ed_t(awqr8v, {});
                        }
                        b4k6c['locator'] = u9har, Egxlnyp(ploxyn, b4k6c, c$bm4) && dj_1t['push'](ploxyn), b4k6c['locator'] = awqr8v;
                    } else Egxlnyp(ploxyn, b4k6c, c$bm4) && dj_1t['push'](ploxyn);
                    'http://www.w3.org/1999/xhtml' !== ploxyn['uri'] || ploxyn['closed'] ? t1_2s3++ : t1_2s3 = Ed5jk$6(c6j$k, t1_2s3, ploxyn['tagName'], jikd6, b4k6c);
            }
        } catch (c$k6j5) {
            i1_jtd['error']('element parse error: ' + c$k6j5), t1_2s3 = -0x1;
        }
        t1_2s3 > z032ts ? z032ts = t1_2s3 : pxnloy(Math['max'](xolnp, z032ts) + 0x1);
    }
}
function Ed_t(uahgp9, qvf8wr) {
    return qvf8wr['lineNumber'] = uahgp9['lineNumber'], qvf8wr['columnNumber'] = uahgp9['columnNumber'], qvf8wr;
}
function Etdij1(s23z0t, t_1i2, dit_, jd1_i5, vqwfr8, wavr8) {
    for (var y9hpg, _stid1, wb78mf = ++t_1i2, t0z2s = Ec47bmf;;) {
        var glnyph = s23z0t['charAt'](wb78mf);
        switch (glnyph) {
            case '=':
                if (t0z2s === Egx) y9hpg = s23z0t['slice'](t_1i2, wb78mf), t0z2s = Ezt2s03;else {
                    if (t0z2s !== Efm78) throw new Error('attribute equal must after attrName');
                    t0z2s = Ezt2s03;
                }
                break;
            case '\x27':
            case '\x22':
                if (t0z2s === Ezt2s03 || t0z2s === Egx) {
                    if (t0z2s === Egx && (wavr8['warning']('attribute value must after "="'), y9hpg = s23z0t['slice'](t_1i2, wb78mf)), t_1i2 = wb78mf + 0x1, wb78mf = s23z0t['indexOf'](glnyph, t_1i2), !(wb78mf > 0x0)) throw new Error('attribute value no end \'' + glnyph + '\' match');
                    _stid1 = s23z0t['slice'](t_1i2, wb78mf)['replace'](/&#?\w+;/g, vqwfr8), dit_['add'](y9hpg, _stid1, t_1i2 - 0x1), t0z2s = Ei1d5j;
                } else {
                    if (t0z2s != Enyhp9) throw new Error('attribute value must after "="');
                    _stid1 = s23z0t['slice'](t_1i2, wb78mf)['replace'](/&#?\w+;/g, vqwfr8), dit_['add'](y9hpg, _stid1, t_1i2), wavr8['warning']('attribute "' + y9hpg + '" missed start quot(' + glnyph + ')!!'), t_1i2 = wb78mf + 0x1, t0z2s = Ei1d5j;
                }
                break;
            case '/':
                switch (t0z2s) {
                    case Ec47bmf:
                        dit_['setTagName'](s23z0t['slice'](t_1i2, wb78mf));
                    case Ei1d5j:
                    case Eb46ck:
                    case Eauqhg:
                        t0z2s = Eauqhg, dit_['closed'] = !0x0;
                    case Enyhp9:
                    case Egx:
                    case Efm78:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return wavr8['error']('unexpected end of input'), t0z2s == Ec47bmf && dit_['setTagName'](s23z0t['slice'](t_1i2, wb78mf)), wb78mf;
            case '>':
                switch (t0z2s) {
                    case Ec47bmf:
                        dit_['setTagName'](s23z0t['slice'](t_1i2, wb78mf));
                    case Ei1d5j:
                    case Eb46ck:
                    case Eauqhg:
                        break;
                    case Enyhp9:
                    case Egx:
                        _stid1 = s23z0t['slice'](t_1i2, wb78mf), '/' === _stid1['slice'](-0x1) && (dit_['closed'] = !0x0, _stid1 = _stid1['slice'](0x0, -0x1));
                    case Efm78:
                        t0z2s === Efm78 && (_stid1 = y9hpg), t0z2s == Enyhp9 ? (wavr8['warning']('attribute "' + _stid1 + '" missed quot(")!!'), dit_['add'](y9hpg, _stid1['replace'](/&#?\w+;/g, vqwfr8), t_1i2)) : ('http://www.w3.org/1999/xhtml' === jd1_i5[''] && _stid1['match'](/^(?:disabled|checked|selected)$/i) || wavr8['warning']('attribute "' + _stid1 + '" missed value!! "' + _stid1 + '" instead!!'), dit_['add'](_stid1, _stid1, t_1i2));
                        break;
                    case Ezt2s03:
                        throw new Error('attribute value missed!!');
                }
                return wb78mf;
            case '\u0080':
                glnyph = '\x20';
            default:
                if ('\x20' >= glnyph) switch (t0z2s) {
                    case Ec47bmf:
                        dit_['setTagName'](s23z0t['slice'](t_1i2, wb78mf)), t0z2s = Eb46ck;
                        break;
                    case Egx:
                        y9hpg = s23z0t['slice'](t_1i2, wb78mf), t0z2s = Efm78;
                        break;
                    case Enyhp9:
                        var _stid1 = s23z0t['slice'](t_1i2, wb78mf)['replace'](/&#?\w+;/g, vqwfr8);
                        wavr8['warning']('attribute "' + _stid1 + '" missed quot(")!!'), dit_['add'](y9hpg, _stid1, t_1i2);
                    case Ei1d5j:
                        t0z2s = Eb46ck;
                } else switch (t0z2s) {
                    case Efm78:
                        {
                            dit_['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === jd1_i5[''] && y9hpg['match'](/^(?:disabled|checked|selected)$/i) || wavr8['warning']('attribute "' + y9hpg + '" missed value!! "' + y9hpg + '" instead2!!'), dit_['add'](y9hpg, y9hpg, t_1i2), t_1i2 = wb78mf, t0z2s = Egx;
                        break;
                    case Ei1d5j:
                        wavr8['warning']('attribute space is required"' + y9hpg + '\x22!!');
                    case Eb46ck:
                        t0z2s = Egx, t_1i2 = wb78mf;
                        break;
                    case Ezt2s03:
                        t0z2s = Enyhp9, t_1i2 = wb78mf;
                        break;
                    case Eauqhg:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        wb78mf++;
    }
}
function Egxlnyp(hp9, m8wb7, w7mf8v) {
    for (var fb487 = hp9['tagName'], uha9r = null, ghu9aq = hp9['length']; ghu9aq--;) {
        var ynhg9p = hp9[ghu9aq],
            f4b8m = ynhg9p['qName'],
            tdis1 = ynhg9p['value'],
            nxpol = f4b8m['indexOf'](':');
        if (nxpol > 0x0) var idj6k5 = ynhg9p['prefix'] = f4b8m['slice'](0x0, nxpol),
            z03st = f4b8m['slice'](nxpol + 0x1),
            qhu9ra = 'xmlns' === idj6k5 && z03st;else z03st = f4b8m, idj6k5 = null, qhu9ra = 'xmlns' === f4b8m && '';
        ynhg9p['localName'] = z03st, qhu9ra !== !0x1 && (null == uha9r && (uha9r = {}, Exnylg(w7mf8v, w7mf8v = {})), w7mf8v[qhu9ra] = uha9r[qhu9ra] = tdis1, ynhg9p['uri'] = 'http://www.w3.org/2000/xmlns/', m8wb7['startPrefixMapping'](qhu9ra, tdis1));
    }
    for (var ghu9aq = hp9['length']; ghu9aq--;) {
        ynhg9p = hp9[ghu9aq];
        var idj6k5 = ynhg9p['prefix'];
        idj6k5 && ('xml' === idj6k5 && (ynhg9p['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== idj6k5 && (ynhg9p['uri'] = w7mf8v[idj6k5 || '']));
    }
    var nxpol = fb487['indexOf'](':');
    nxpol > 0x0 ? (idj6k5 = hp9['prefix'] = fb487['slice'](0x0, nxpol), z03st = hp9['localName'] = fb487['slice'](nxpol + 0x1)) : (idj6k5 = null, z03st = hp9['localName'] = fb487);
    var jc$5 = hp9['uri'] = w7mf8v[idj6k5 || ''];
    if (m8wb7['startElement'](jc$5, z03st, fb487, hp9), !hp9['closed']) return hp9['currentNSMap'] = w7mf8v, hp9['localNSMap'] = uha9r, !0x0;
    if (m8wb7['endElement'](jc$5, z03st, fb487), uha9r) {
        for (idj6k5 in uha9r) m8wb7['endPrefixMapping'](idj6k5);
    }
}
function Ed5jk$6(b8m7f4, yxlpon, s20z, gahu9p, vrqw8f) {
    if (/^(?:script|textarea)$/i['test'](s20z)) {
        var k65jd$ = b8m7f4['indexOf']('</' + s20z + '>', yxlpon),
            f4c7 = b8m7f4['substring'](yxlpon + 0x1, k65jd$);
        if (/[&<]/['test'](f4c7)) return (/^script$/i['test'](s20z) ? (vrqw8f['characters'](f4c7, 0x0, f4c7['length']), k65jd$) : (f4c7 = f4c7['replace'](/&#?\w+;/g, gahu9p), vrqw8f['characters'](f4c7, 0x0, f4c7['length']), k65jd$)
        );
    }
    return yxlpon + 0x1;
}
function Ev7r8fw(t_s2i, u9ygh, rwvua, idt1j_) {
    var hypg9u = idt1j_[rwvua];
    return null == hypg9u && (hypg9u = t_s2i['lastIndexOf']('</' + rwvua + '>'), u9ygh > hypg9u && (hypg9u = t_s2i['lastIndexOf']('</' + rwvua)), idt1j_[rwvua] = hypg9u), u9ygh > hypg9u;
}
function Exnylg(lpxon, ylnpxo) {
    for (var _0s32t in lpxon) ylnpxo[_0s32t] = lpxon[_0s32t];
}
function Eqru9av(m7cfb4, _ij1, pghuy9, _dij) {
    var bf8wm7 = m7cfb4['charAt'](_ij1 + 0x2);
    switch (bf8wm7) {
        case '-':
            if ('-' === m7cfb4['charAt'](_ij1 + 0x3)) {
                var dj_t1 = m7cfb4['indexOf']('-->', _ij1 + 0x4);
                return dj_t1 > _ij1 ? (pghuy9['comment'](m7cfb4, _ij1 + 0x4, dj_t1 - _ij1 - 0x4), dj_t1 + 0x3) : (_dij['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == m7cfb4['substr'](_ij1 + 0x3, 0x6)) {
                var dj_t1 = m7cfb4['indexOf'](']]>', _ij1 + 0x9);
                return pghuy9['startCDATA'](), pghuy9['characters'](m7cfb4, _ij1 + 0x9, dj_t1 - _ij1 - 0x9), pghuy9['endCDATA'](), dj_t1 + 0x3;
            }
            var f4m7c = Ei5j_d(m7cfb4, _ij1),
                yngxlp = f4m7c['length'];
            if (yngxlp > 0x1 && /!doctype/i['test'](f4m7c[0x0][0x0])) {
                var bwm78 = f4m7c[0x1][0x0],
                    b7f4m8 = yngxlp > 0x3 && /^public$/i['test'](f4m7c[0x2][0x0]) && f4m7c[0x3][0x0],
                    gauh = yngxlp > 0x4 && f4m7c[0x4][0x0],
                    gl = f4m7c[yngxlp - 0x1];
                return pghuy9['startDTD'](bwm78, b7f4m8 && b7f4m8['replace'](/^(['"])(.*?)\1$/, '$2'), gauh && gauh['replace'](/^(['"])(.*?)\1$/, '$2')), pghuy9['endDTD'](), gl['index'] + gl[0x0]['length'];
            }
    }
    return -0x1;
}
function Eb7m4c$(q9urva, auqh9r, ynplo) {
    var vmw7 = q9urva['indexOf']('?>', auqh9r);
    if (vmw7) {
        var dj_1i = q9urva['substring'](auqh9r, vmw7)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (dj_1i) {
            {
                dj_1i[0x0]['length'];
            }
            return ynplo['processingInstruction'](dj_1i[0x1], dj_1i[0x2]), vmw7 + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function Em$4kcb() {}
function Et2z($kd6j, $bmck4) {
    return $kd6j['__proto__'] = $bmck4, $kd6j;
}
function Ei5j_d(st1i_, $k64cb) {
    var k$j65c,
        gpah9 = [],
        u9hqg = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (u9hqg['lastIndex'] = $k64cb, u9hqg['exec'](st1i_); k$j65c = u9hqg['exec'](st1i_);) if (gpah9['push'](k$j65c), k$j65c[0x1]) return gpah9;
}
var Enpxoly = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    E$k5jc6 = new RegExp('[\\-\\.0-9' + Enpxoly['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    Edjt1 = new RegExp('^' + Enpxoly['source'] + E$k5jc6['source'] + '*(?::' + Enpxoly['source'] + E$k5jc6['source'] + '*)?$'),
    Ec47bmf = 0x0,
    Egx = 0x1,
    Efm78 = 0x2,
    Ezt2s03 = 0x3,
    Enyhp9 = 0x4,
    Ei1d5j = 0x5,
    Eb46ck = 0x6,
    Eauqhg = 0x7;
Es12i_['prototype'] = {
    'parse': function (kcb6$, wvfrq, d_) {
        var mfvw7 = this['domBuilder'];
        mfvw7['startDocument'](), Exnylg(wvfrq, wvfrq = {}), Ebm748(kcb6$, wvfrq, d_, mfvw7, this['errorHandler']), mfvw7['endDocument']();
    }
}, Em$4kcb['prototype'] = {
    'setTagName': function (k$c65j) {
        if (!Edjt1['test'](k$c65j)) throw new Error('invalid tagName:' + k$c65j);
        this['tagName'] = k$c65j;
    },
    'add': function (_st12i, vwruqa, i_1j5d) {
        if (!Edjt1['test'](_st12i)) throw new Error('invalid attribute:' + _st12i);
        this[this['length']++] = {
            'qName': _st12i,
            'value': vwruqa,
            'offset': i_1j5d
        };
    },
    'length': 0x0,
    'getLocalName': function (pnyhg9) {
        return this[pnyhg9]['localName'];
    },
    'getLocator': function (vqrf8) {
        return this[vqrf8]['locator'];
    },
    'getQName': function (b78f) {
        return this[b78f]['qName'];
    },
    'getURI': function (cb7m$4) {
        return this[cb7m$4]['uri'];
    },
    'getValue': function (c$k6) {
        return this[c$k6]['value'];
    }
}, Et2z({}, Et2z['prototype']) instanceof Et2z || (Et2z = function (ylngx, i615jd) {
    function w7fm8v() {}
    w7fm8v['prototype'] = i615jd, w7fm8v = new w7fm8v();
    for (i615jd in ylngx) w7fm8v[i615jd] = ylngx[i615jd];
    return w7fm8v;
}), exports['XMLReader'] = Es12i_;