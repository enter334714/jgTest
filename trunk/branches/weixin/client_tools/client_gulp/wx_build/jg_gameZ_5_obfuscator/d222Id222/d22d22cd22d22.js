var F = wx.$D;
function D_5liom() {}
function Dmaog5j(fub7p, mzio_, n1hz, cevs, swv) {
    function a6wkx(uf9b7) {
        if (uf9b7 > 0xffff) {
            uf9b7 -= 0x10000;
            var l2r_i = 0xd800 + (uf9b7 >> 0xa),
                jxkaw = 0xdc00 + (0x3ff & uf9b7);
            return String['fromCharCode'](l2r_i, jxkaw);
        }
        return String['fromCharCode'](uf9b7);
    }
    function o_zlim(g5jam) {
        var i_5mo = g5jam['slice'](0x1, -0x1);
        return i_5mo in n1hz ? n1hz[i_5mo] : '#' === i_5mo['charAt'](0x0) ? a6wkx(parseInt(i_5mo['substr'](0x1)['replace']('x', '0x'))) : (swv['error']('entity not found:' + g5jam), g5jam);
    }
    function wsvqte(p03c) {
        if (p03c > lmago) {
            var og5l_ = fub7p['substring'](lmago, p03c)['replace'](/&#?\w+;/g, o_zlim);
            akgx6 && _zrh2(lmago), cevs['characters'](og5l_, 0x0, p03c - lmago), lmago = p03c;
        }
    }
    function _zrh2(mloi_z, hr1n2) {
        for (; mloi_z >= loim_z && (hr1n2 = yn1h['exec'](fub7p));) xjwka = hr1n2['index'], loim_z = xjwka + hr1n2[0x0]['length'], akgx6['lineNumber']++;
        akgx6['columnNumber'] = mloi_z - xjwka + 0x1;
    }
    for (var xjwka = 0x0, loim_z = 0x0, yn1h = /.*(?:\r\n?|\n)|.*$/g, akgx6 = cevs['locator'], ktwqvs = [{ 'currentNSMap': mzio_ }], zr21hi = {}, lmago = 0x0;;) {
        try {
            var wvqtk = fub7p['indexOf']('<', lmago);
            if (0x0 > wvqtk) {
                if (!fub7p['substr'](lmago)['match'](/^\s*$/)) {
                    var upb39 = cevs['doc'],
                        gaxj = upb39['createTextNode'](fub7p['substr'](lmago));
                    upb39['appendChild'](gaxj), cevs['currentElement'] = gaxj;
                }
                return;
            }
            switch (wvqtk > lmago && wsvqte(wvqtk), fub7p['charAt'](wvqtk + 0x1)) {
                case '/':
                    var pubf97 = fub7p['indexOf']('>', wvqtk + 0x3),
                        vcs0et = fub7p['substring'](wvqtk + 0x2, pubf97),
                        zi_lm = ktwqvs['pop']();
                    0x0 > pubf97 ? (vcs0et = fub7p['substring'](wvqtk + 0x2)['replace'](/[\s<].*/, ''), swv['error']('end tag name: ' + vcs0et + ' is not complete:' + zi_lm['tagName']), pubf97 = wvqtk + 0x1 + vcs0et['length']) : vcs0et['match'](/\s</) && (vcs0et = vcs0et['replace'](/[\s<].*/, ''), swv['error']('end tag name: ' + vcs0et + ' maybe not complete'), pubf97 = wvqtk + 0x1 + vcs0et['length']);
                    var axmj = zi_lm['localNSMap'],
                        b4fp9 = zi_lm['tagName'] == vcs0et,
                        x6akg = b4fp9 || zi_lm['tagName'] && zi_lm['tagName']['toLowerCase']() == vcs0et['toLowerCase']();
                    if (x6akg) {
                        if (cevs['endElement'](zi_lm['uri'], zi_lm['localName'], vcs0et), axmj) {
                            for (var _h2ri in axmj) cevs['endPrefixMapping'](_h2ri);
                        }
                        b4fp9 || swv['fatalError']('end tag name: ' + vcs0et + ' is not match the current start tagName:' + zi_lm['tagName']);
                    } else ktwqvs['push'](zi_lm);
                    pubf97++;
                    break;
                case '?':
                    akgx6 && _zrh2(wvqtk), pubf97 = Dhn$y(fub7p, wvqtk, cevs);
                    break;
                case '!':
                    akgx6 && _zrh2(wvqtk), pubf97 = Dz1hi2r(fub7p, wvqtk, cevs, swv);
                    break;
                default:
                    akgx6 && _zrh2(wvqtk);
                    var rzi1h2 = new Dvkqxw6(),
                        nh$y = ktwqvs[ktwqvs['length'] - 0x1]['currentNSMap'],
                        pubf97 = Ds3et0(fub7p, wvqtk, rzi1h2, nh$y, o_zlim, swv),
                        jkg6ax = rzi1h2['length'];
                    if (!rzi1h2['closed'] && D_2izl(fub7p, pubf97, rzi1h2['tagName'], zr21hi) && (rzi1h2['closed'] = !0x0, n1hz['nbsp'] || swv['warning']('unclosed xml attribute')), akgx6 && jkg6ax) {
                        for (var j6qxkw = Dp3ufb(akgx6, {}), ceus03 = 0x0; jkg6ax > ceus03; ceus03++) {
                            var i_zro = rzi1h2[ceus03];
                            _zrh2(i_zro['offset']), i_zro['locator'] = Dp3ufb(akgx6, {});
                        }
                        cevs['locator'] = j6qxkw, Df3bp(rzi1h2, cevs, nh$y) && ktwqvs['push'](rzi1h2), cevs['locator'] = akgx6;
                    } else Df3bp(rzi1h2, cevs, nh$y) && ktwqvs['push'](rzi1h2);
                    'http://www.w3.org/1999/xhtml' !== rzi1h2['uri'] || rzi1h2['closed'] ? pubf97++ : pubf97 = Dp794f(fub7p, pubf97, rzi1h2['tagName'], o_zlim, cevs);
            }
        } catch (aglm5) {
            swv['error']('element parse error: ' + aglm5), pubf97 = -0x1;
        }
        pubf97 > lmago ? lmago = pubf97 : wsvqte(Math['max'](wvqtk, lmago) + 0x1);
    }
}
function Dp3ufb(il5mo_, lri_z) {
    return lri_z['lineNumber'] = il5mo_['lineNumber'], lri_z['columnNumber'] = il5mo_['columnNumber'], lri_z;
}
function Ds3et0(y$8h1n, mzi_lo, ste0q, q6xv, sc0et, twqkvs) {
    for (var om5_, r2zli_, b47pf = ++mzi_lo, l5om_i = Dst30c;;) {
        var bc30u = y$8h1n['charAt'](b47pf);
        switch (bc30u) {
            case '=':
                if (l5om_i === Db7fup9) om5_ = y$8h1n['slice'](mzi_lo, b47pf), l5om_i = Df39bp;else {
                    if (l5om_i !== Devst) throw new Error('attribute equal must after attrName');
                    l5om_i = Df39bp;
                }
                break;
            case '\x27':
            case '\x22':
                if (l5om_i === Df39bp || l5om_i === Db7fup9) {
                    if (l5om_i === Db7fup9 && (twqkvs['warning']('attribute value must after "="'), om5_ = y$8h1n['slice'](mzi_lo, b47pf)), mzi_lo = b47pf + 0x1, b47pf = y$8h1n['indexOf'](bc30u, mzi_lo), !(b47pf > 0x0)) throw new Error('attribute value no end \'' + bc30u + '\' match');
                    r2zli_ = y$8h1n['slice'](mzi_lo, b47pf)['replace'](/&#?\w+;/g, sc0et), ste0q['add'](om5_, r2zli_, mzi_lo - 0x1), l5om_i = Dw6xjak;
                } else {
                    if (l5om_i != D_5) throw new Error('attribute value must after "="');
                    r2zli_ = y$8h1n['slice'](mzi_lo, b47pf)['replace'](/&#?\w+;/g, sc0et), ste0q['add'](om5_, r2zli_, mzi_lo), twqkvs['warning']('attribute "' + om5_ + '" missed start quot(' + bc30u + ')!!'), mzi_lo = b47pf + 0x1, l5om_i = Dw6xjak;
                }
                break;
            case '/':
                switch (l5om_i) {
                    case Dst30c:
                        ste0q['setTagName'](y$8h1n['slice'](mzi_lo, b47pf));
                    case Dw6xjak:
                    case Dw6tqvk:
                    case Dwtvqsk:
                        l5om_i = Dwtvqsk, ste0q['closed'] = !0x0;
                    case D_5:
                    case Db7fup9:
                    case Devst:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return twqkvs['error']('unexpected end of input'), l5om_i == Dst30c && ste0q['setTagName'](y$8h1n['slice'](mzi_lo, b47pf)), b47pf;
            case '>':
                switch (l5om_i) {
                    case Dst30c:
                        ste0q['setTagName'](y$8h1n['slice'](mzi_lo, b47pf));
                    case Dw6xjak:
                    case Dw6tqvk:
                    case Dwtvqsk:
                        break;
                    case D_5:
                    case Db7fup9:
                        r2zli_ = y$8h1n['slice'](mzi_lo, b47pf), '/' === r2zli_['slice'](-0x1) && (ste0q['closed'] = !0x0, r2zli_ = r2zli_['slice'](0x0, -0x1));
                    case Devst:
                        l5om_i === Devst && (r2zli_ = om5_), l5om_i == D_5 ? (twqkvs['warning']('attribute "' + r2zli_ + '" missed quot(")!!'), ste0q['add'](om5_, r2zli_['replace'](/&#?\w+;/g, sc0et), mzi_lo)) : ('http://www.w3.org/1999/xhtml' === q6xv[''] && r2zli_['match'](/^(?:disabled|checked|selected)$/i) || twqkvs['warning']('attribute "' + r2zli_ + '" missed value!! "' + r2zli_ + '" instead!!'), ste0q['add'](r2zli_, r2zli_, mzi_lo));
                        break;
                    case Df39bp:
                        throw new Error('attribute value missed!!');
                }
                return b47pf;
            case '\u0080':
                bc30u = '\x20';
            default:
                if ('\x20' >= bc30u) switch (l5om_i) {
                    case Dst30c:
                        ste0q['setTagName'](y$8h1n['slice'](mzi_lo, b47pf)), l5om_i = Dw6tqvk;
                        break;
                    case Db7fup9:
                        om5_ = y$8h1n['slice'](mzi_lo, b47pf), l5om_i = Devst;
                        break;
                    case D_5:
                        var r2zli_ = y$8h1n['slice'](mzi_lo, b47pf)['replace'](/&#?\w+;/g, sc0et);
                        twqkvs['warning']('attribute "' + r2zli_ + '" missed quot(")!!'), ste0q['add'](om5_, r2zli_, mzi_lo);
                    case Dw6xjak:
                        l5om_i = Dw6tqvk;
                } else switch (l5om_i) {
                    case Devst:
                        {
                            ste0q['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === q6xv[''] && om5_['match'](/^(?:disabled|checked|selected)$/i) || twqkvs['warning']('attribute "' + om5_ + '" missed value!! "' + om5_ + '" instead2!!'), ste0q['add'](om5_, om5_, mzi_lo), mzi_lo = b47pf, l5om_i = Db7fup9;
                        break;
                    case Dw6xjak:
                        twqkvs['warning']('attribute space is required"' + om5_ + '\x22!!');
                    case Dw6tqvk:
                        l5om_i = Db7fup9, mzi_lo = b47pf;
                        break;
                    case Df39bp:
                        l5om_i = D_5, mzi_lo = b47pf;
                        break;
                    case Dwtvqsk:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        b47pf++;
    }
}
function Df3bp(tkwqsv, vetsq, _r2ih) {
    for (var fb93 = tkwqsv['tagName'], lr2_ = null, xjwa6k = tkwqsv['length']; xjwa6k--;) {
        var vqs0e = tkwqsv[xjwa6k],
            ewqtvs = vqs0e['qName'],
            hr81 = vqs0e['value'],
            mzl = ewqtvs['indexOf'](':');
        if (mzl > 0x0) var wvkstq = vqs0e['prefix'] = ewqtvs['slice'](0x0, mzl),
            ri21h = ewqtvs['slice'](mzl + 0x1),
            ao5j = 'xmlns' === wvkstq && ri21h;else ri21h = ewqtvs, wvkstq = null, ao5j = 'xmlns' === ewqtvs && '';
        vqs0e['localName'] = ri21h, ao5j !== !0x1 && (null == lr2_ && (lr2_ = {}, Dizr_2h(_r2ih, _r2ih = {})), _r2ih[ao5j] = lr2_[ao5j] = hr81, vqs0e['uri'] = 'http://www.w3.org/2000/xmlns/', vetsq['startPrefixMapping'](ao5j, hr81));
    }
    for (var xjwa6k = tkwqsv['length']; xjwa6k--;) {
        vqs0e = tkwqsv[xjwa6k];
        var wvkstq = vqs0e['prefix'];
        wvkstq && ('xml' === wvkstq && (vqs0e['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== wvkstq && (vqs0e['uri'] = _r2ih[wvkstq || '']));
    }
    var mzl = fb93['indexOf'](':');
    mzl > 0x0 ? (wvkstq = tkwqsv['prefix'] = fb93['slice'](0x0, mzl), ri21h = tkwqsv['localName'] = fb93['slice'](mzl + 0x1)) : (wvkstq = null, ri21h = tkwqsv['localName'] = fb93);
    var kqtwv = tkwqsv['uri'] = _r2ih[wvkstq || ''];
    if (vetsq['startElement'](kqtwv, ri21h, fb93, tkwqsv), !tkwqsv['closed']) return tkwqsv['currentNSMap'] = _r2ih, tkwqsv['localNSMap'] = lr2_, !0x0;
    if (vetsq['endElement'](kqtwv, ri21h, fb93), lr2_) {
        for (wvkstq in lr2_) vetsq['endPrefixMapping'](wvkstq);
    }
}
function Dp794f(gxamj5, esc0u3, jo5gam, twskqv, bf749p) {
    if (/^(?:script|textarea)$/i['test'](jo5gam)) {
        var ktwsv = gxamj5['indexOf']('</' + jo5gam + '>', esc0u3),
            sqewt = gxamj5['substring'](esc0u3 + 0x1, ktwsv);
        if (/[&<]/['test'](sqewt)) return (/^script$/i['test'](jo5gam) ? (bf749p['characters'](sqewt, 0x0, sqewt['length']), ktwsv) : (sqewt = sqewt['replace'](/&#?\w+;/g, twskqv), bf749p['characters'](sqewt, 0x0, sqewt['length']), ktwsv)
        );
    }
    return esc0u3 + 0x1;
}
function D_2izl(r1h2iz, b79f4, hizr_, liz_r) {
    var mogl = liz_r[hizr_];
    return null == mogl && (mogl = r1h2iz['lastIndexOf']('</' + hizr_ + '>'), b79f4 > mogl && (mogl = r1h2iz['lastIndexOf']('</' + hizr_)), liz_r[hizr_] = mogl), b79f4 > mogl;
}
function Dizr_2h(etsq0, hrzi1) {
    for (var n8h1y$ in etsq0) hrzi1[n8h1y$] = etsq0[n8h1y$];
}
function Dz1hi2r(w6k, ec3s0, h1n8y$, zmlio) {
    var b9u7pf = w6k['charAt'](ec3s0 + 0x2);
    switch (b9u7pf) {
        case '-':
            if ('-' === w6k['charAt'](ec3s0 + 0x3)) {
                var etsvw = w6k['indexOf']('-->', ec3s0 + 0x4);
                return etsvw > ec3s0 ? (h1n8y$['comment'](w6k, ec3s0 + 0x4, etsvw - ec3s0 - 0x4), etsvw + 0x3) : (zmlio['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == w6k['substr'](ec3s0 + 0x3, 0x6)) {
                var etsvw = w6k['indexOf'](']]>', ec3s0 + 0x9);
                return h1n8y$['startCDATA'](), h1n8y$['characters'](w6k, ec3s0 + 0x9, etsvw - ec3s0 - 0x9), h1n8y$['endCDATA'](), etsvw + 0x3;
            }
            var s0teqv = Dstweq(w6k, ec3s0),
                vt0sqe = s0teqv['length'];
            if (vt0sqe > 0x1 && /!doctype/i['test'](s0teqv[0x0][0x0])) {
                var sqtw = s0teqv[0x1][0x0],
                    k6xja = vt0sqe > 0x3 && /^public$/i['test'](s0teqv[0x2][0x0]) && s0teqv[0x3][0x0],
                    bpcu30 = vt0sqe > 0x4 && s0teqv[0x4][0x0],
                    v0eqts = s0teqv[vt0sqe - 0x1];
                return h1n8y$['startDTD'](sqtw, k6xja && k6xja['replace'](/^(['"])(.*?)\1$/, '$2'), bpcu30 && bpcu30['replace'](/^(['"])(.*?)\1$/, '$2')), h1n8y$['endDTD'](), v0eqts['index'] + v0eqts[0x0]['length'];
            }
    }
    return -0x1;
}
function Dhn$y(izr2h_, tv6wkq, _iolr) {
    var buf9p = izr2h_['indexOf']('?>', tv6wkq);
    if (buf9p) {
        var b3pc0u = izr2h_['substring'](tv6wkq, buf9p)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (b3pc0u) {
            {
                b3pc0u[0x0]['length'];
            }
            return _iolr['processingInstruction'](b3pc0u[0x1], b3pc0u[0x2]), buf9p + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function Dvkqxw6() {}
function De0vstc(zo_lm, h_r2i) {
    return zo_lm['__proto__'] = h_r2i, zo_lm;
}
function Dstweq(lmo5g, gkj6xa) {
    var h21irz,
        euc3p0 = [],
        qtwves = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (qtwves['lastIndex'] = gkj6xa, qtwves['exec'](lmo5g); h21irz = qtwves['exec'](lmo5g);) if (euc3p0['push'](h21irz), h21irz[0x1]) return euc3p0;
}
var Dm5i_ = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    Dbu39pf = new RegExp('[\\-\\.0-9' + Dm5i_['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    Dfp3 = new RegExp('^' + Dm5i_['source'] + Dbu39pf['source'] + '*(?::' + Dm5i_['source'] + Dbu39pf['source'] + '*)?$'),
    Dst30c = 0x0,
    Db7fup9 = 0x1,
    Devst = 0x2,
    Df39bp = 0x3,
    D_5 = 0x4,
    Dw6xjak = 0x5,
    Dw6tqvk = 0x6,
    Dwtvqsk = 0x7;
D_5liom['prototype'] = {
    'parse': function (mxa5gj, t0qesv, nr1h82) {
        var u3pe0 = this['domBuilder'];
        u3pe0['startDocument'](), Dizr_2h(t0qesv, t0qesv = {}), Dmaog5j(mxa5gj, t0qesv, nr1h82, u3pe0, this['errorHandler']), u3pe0['endDocument']();
    }
}, Dvkqxw6['prototype'] = {
    'setTagName': function (f39pub) {
        if (!Dfp3['test'](f39pub)) throw new Error('invalid tagName:' + f39pub);
        this['tagName'] = f39pub;
    },
    'add': function ($hn281, tvqsw, $82h) {
        if (!Dfp3['test']($hn281)) throw new Error('invalid attribute:' + $hn281);
        this[this['length']++] = {
            'qName': $hn281,
            'value': tvqsw,
            'offset': $82h
        };
    },
    'length': 0x0,
    'getLocalName': function (r_oli) {
        return this[r_oli]['localName'];
    },
    'getLocator': function (tes3) {
        return this[tes3]['locator'];
    },
    'getQName': function (x65) {
        return this[x65]['qName'];
    },
    'getURI': function (ihz2r_) {
        return this[ihz2r_]['uri'];
    },
    'getValue': function (ajkgx6) {
        return this[ajkgx6]['value'];
    }
}, De0vstc({}, De0vstc['prototype']) instanceof De0vstc || (De0vstc = function (e0u3s, tv0esq) {
    function _zil2r() {}
    _zil2r['prototype'] = tv0esq, _zil2r = new _zil2r();
    for (tv0esq in e0u3s) _zil2r[tv0esq] = e0u3s[tv0esq];
    return _zil2r;
}), exports['XMLReader'] = D_5liom;