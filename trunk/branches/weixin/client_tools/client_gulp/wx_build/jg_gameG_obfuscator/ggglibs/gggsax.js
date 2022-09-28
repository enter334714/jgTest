var m = wx.$g;
function gh1yew() {}
function gevw7ky(kh1xwa, qgs8lc, gs9cl, q7gcev, t3ozd4) {
    function p0fbt(zo6dr2) {
        if (zo6dr2 > 0xffff) {
            zo6dr2 -= 0x10000;
            var kwy = 0xd800 + (zo6dr2 >> 0xa),
                xaib5p = 0xdc00 + (0x3ff & zo6dr2);
            return String['fromCharCode'](kwy, xaib5p);
        }
        return String['fromCharCode'](zo6dr2);
    }
    function zod3t4(od26zr) {
        var qgevy7 = od26zr['slice'](0x1, -0x1);
        return qgevy7 in gs9cl ? gs9cl[qgevy7] : '#' === qgevy7['charAt'](0x0) ? p0fbt(parseInt(qgevy7['substr'](0x1)['replace']('x', '0x'))) : (t3ozd4['error']('entity not found:' + od26zr), od26zr);
    }
    function ur62j$(wh1xy) {
        if (wh1xy > ixh15) {
            var _0p5f = kh1xwa['substring'](ixh15, wh1xy)['replace'](/&#?\w+;/g, zod3t4);
            l8gc && i15ah(ixh15), q7gcev['characters'](_0p5f, 0x0, wh1xy - ixh15), ixh15 = wh1xy;
        }
    }
    function i15ah(whxk1y, p_5f0) {
        for (; whxk1y >= wk7ev && (p_5f0 = qg7ev['exec'](kh1xwa));) zd6o = p_5f0['index'], wk7ev = zd6o + p_5f0[0x0]['length'], l8gc['lineNumber']++;
        l8gc['columnNumber'] = whxk1y - zd6o + 0x1;
    }
    for (var zd6o = 0x0, wk7ev = 0x0, qg7ev = /.*(?:\r\n?|\n)|.*$/g, l8gc = q7gcev['locator'], ip0ab = [{ 'currentNSMap': qgs8lc }], d4zo = {}, ixh15 = 0x0;;) {
        try {
            var m$u = kh1xwa['indexOf']('<', ixh15);
            if (0x0 > m$u) {
                if (!kh1xwa['substr'](ixh15)['match'](/^\s*$/)) {
                    var ky1wv = q7gcev['doc'],
                        gecvq = ky1wv['createTextNode'](kh1xwa['substr'](ixh15));
                    ky1wv['appendChild'](gecvq), q7gcev['currentElement'] = gecvq;
                }
                return;
            }
            switch (m$u > ixh15 && ur62j$(m$u), kh1xwa['charAt'](m$u + 0x1)) {
                case '/':
                    var cg7 = kh1xwa['indexOf']('>', m$u + 0x3),
                        j$um = kh1xwa['substring'](m$u + 0x2, cg7),
                        tp0f_4 = ip0ab['pop']();
                    0x0 > cg7 ? (j$um = kh1xwa['substring'](m$u + 0x2)['replace'](/[\s<].*/, ''), t3ozd4['error']('end tag name: ' + j$um + ' is not complete:' + tp0f_4['tagName']), cg7 = m$u + 0x1 + j$um['length']) : j$um['match'](/\s</) && (j$um = j$um['replace'](/[\s<].*/, ''), t3ozd4['error']('end tag name: ' + j$um + ' maybe not complete'), cg7 = m$u + 0x1 + j$um['length']);
                    var vew7y = tp0f_4['localNSMap'],
                        cg7q = tp0f_4['tagName'] == j$um,
                        qc8lg = cg7q || tp0f_4['tagName'] && tp0f_4['tagName']['toLowerCase']() == j$um['toLowerCase']();
                    if (qc8lg) {
                        if (q7gcev['endElement'](tp0f_4['uri'], tp0f_4['localName'], j$um), vew7y) {
                            for (var geyq7 in vew7y) q7gcev['endPrefixMapping'](geyq7);
                        }
                        cg7q || t3ozd4['fatalError']('end tag name: ' + j$um + ' is not match the current start tagName:' + tp0f_4['tagName']);
                    } else ip0ab['push'](tp0f_4);
                    cg7++;
                    break;
                case '?':
                    l8gc && i15ah(m$u), cg7 = gcg9sl(kh1xwa, m$u, q7gcev);
                    break;
                case '!':
                    l8gc && i15ah(m$u), cg7 = gm6(kh1xwa, m$u, q7gcev, t3ozd4);
                    break;
                default:
                    l8gc && i15ah(m$u);
                    var bihax = new gls8qcg(),
                        _bip5 = ip0ab[ip0ab['length'] - 0x1]['currentNSMap'],
                        cg7 = gakhi(kh1xwa, m$u, bihax, _bip5, zod3t4, t3ozd4),
                        do43t = bihax['length'];
                    if (!bihax['closed'] && gzdo234(kh1xwa, cg7, bihax['tagName'], d4zo) && (bihax['closed'] = !0x0, gs9cl['nbsp'] || t3ozd4['warning']('unclosed xml attribute')), l8gc && do43t) {
                        for (var h5i1xa = gi05b_(l8gc, {}), a5pb0 = 0x0; do43t > a5pb0; a5pb0++) {
                            var qg8lc = bihax[a5pb0];
                            i15ah(qg8lc['offset']), qg8lc['locator'] = gi05b_(l8gc, {});
                        }
                        q7gcev['locator'] = h5i1xa, gqvcg7(bihax, q7gcev, _bip5) && ip0ab['push'](bihax), q7gcev['locator'] = l8gc;
                    } else gqvcg7(bihax, q7gcev, _bip5) && ip0ab['push'](bihax);
                    'http://www.w3.org/1999/xhtml' !== bihax['uri'] || bihax['closed'] ? cg7++ : cg7 = gf0t4_(kh1xwa, cg7, bihax['tagName'], zod3t4, q7gcev);
            }
        } catch (lg9sc8) {
            t3ozd4['error']('element parse error: ' + lg9sc8), cg7 = -0x1;
        }
        cg7 > ixh15 ? ixh15 = cg7 : ur62j$(Math['max'](m$u, ixh15) + 0x1);
    }
}
function gi05b_(ap0, slc98g) {
    return slc98g['lineNumber'] = ap0['lineNumber'], slc98g['columnNumber'] = ap0['columnNumber'], slc98g;
}
function gakhi(pt_0f, rd26zo, t3dof4, xwa1hk, jr$6u2, hxa1k) {
    for (var tb_pf, dfo4t3, h51ix = ++rd26zo, dj62 = gahi;;) {
        var xb5pai = pt_0f['charAt'](h51ix);
        switch (xb5pai) {
            case '=':
                if (dj62 === gb05i_) tb_pf = pt_0f['slice'](rd26zo, h51ix), dj62 = g_4ft;else {
                    if (dj62 !== gi5b_0) throw new Error('attribute equal must after attrName');
                    dj62 = g_4ft;
                }
                break;
            case '\x27':
            case '\x22':
                if (dj62 === g_4ft || dj62 === gb05i_) {
                    if (dj62 === gb05i_ && (hxa1k['warning']('attribute value must after "="'), tb_pf = pt_0f['slice'](rd26zo, h51ix)), rd26zo = h51ix + 0x1, h51ix = pt_0f['indexOf'](xb5pai, rd26zo), !(h51ix > 0x0)) throw new Error('attribute value no end \'' + xb5pai + '\' match');
                    dfo4t3 = pt_0f['slice'](rd26zo, h51ix)['replace'](/&#?\w+;/g, jr$6u2), t3dof4['add'](tb_pf, dfo4t3, rd26zo - 0x1), dj62 = gz6r2do;
                } else {
                    if (dj62 != gh1ikxa) throw new Error('attribute value must after "="');
                    dfo4t3 = pt_0f['slice'](rd26zo, h51ix)['replace'](/&#?\w+;/g, jr$6u2), t3dof4['add'](tb_pf, dfo4t3, rd26zo), hxa1k['warning']('attribute "' + tb_pf + '" missed start quot(' + xb5pai + ')!!'), rd26zo = h51ix + 0x1, dj62 = gz6r2do;
                }
                break;
            case '/':
                switch (dj62) {
                    case gahi:
                        t3dof4['setTagName'](pt_0f['slice'](rd26zo, h51ix));
                    case gz6r2do:
                    case gclqg:
                    case gvcsg:
                        dj62 = gvcsg, t3dof4['closed'] = !0x0;
                    case gh1ikxa:
                    case gb05i_:
                    case gi5b_0:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return hxa1k['error']('unexpected end of input'), dj62 == gahi && t3dof4['setTagName'](pt_0f['slice'](rd26zo, h51ix)), h51ix;
            case '>':
                switch (dj62) {
                    case gahi:
                        t3dof4['setTagName'](pt_0f['slice'](rd26zo, h51ix));
                    case gz6r2do:
                    case gclqg:
                    case gvcsg:
                        break;
                    case gh1ikxa:
                    case gb05i_:
                        dfo4t3 = pt_0f['slice'](rd26zo, h51ix), '/' === dfo4t3['slice'](-0x1) && (t3dof4['closed'] = !0x0, dfo4t3 = dfo4t3['slice'](0x0, -0x1));
                    case gi5b_0:
                        dj62 === gi5b_0 && (dfo4t3 = tb_pf), dj62 == gh1ikxa ? (hxa1k['warning']('attribute "' + dfo4t3 + '" missed quot(")!!'), t3dof4['add'](tb_pf, dfo4t3['replace'](/&#?\w+;/g, jr$6u2), rd26zo)) : ('http://www.w3.org/1999/xhtml' === xwa1hk[''] && dfo4t3['match'](/^(?:disabled|checked|selected)$/i) || hxa1k['warning']('attribute "' + dfo4t3 + '" missed value!! "' + dfo4t3 + '" instead!!'), t3dof4['add'](dfo4t3, dfo4t3, rd26zo));
                        break;
                    case g_4ft:
                        throw new Error('attribute value missed!!');
                }
                return h51ix;
            case '\u0080':
                xb5pai = '\x20';
            default:
                if ('\x20' >= xb5pai) switch (dj62) {
                    case gahi:
                        t3dof4['setTagName'](pt_0f['slice'](rd26zo, h51ix)), dj62 = gclqg;
                        break;
                    case gb05i_:
                        tb_pf = pt_0f['slice'](rd26zo, h51ix), dj62 = gi5b_0;
                        break;
                    case gh1ikxa:
                        var dfo4t3 = pt_0f['slice'](rd26zo, h51ix)['replace'](/&#?\w+;/g, jr$6u2);
                        hxa1k['warning']('attribute "' + dfo4t3 + '" missed quot(")!!'), t3dof4['add'](tb_pf, dfo4t3, rd26zo);
                    case gz6r2do:
                        dj62 = gclqg;
                } else switch (dj62) {
                    case gi5b_0:
                        {
                            t3dof4['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === xwa1hk[''] && tb_pf['match'](/^(?:disabled|checked|selected)$/i) || hxa1k['warning']('attribute "' + tb_pf + '" missed value!! "' + tb_pf + '" instead2!!'), t3dof4['add'](tb_pf, tb_pf, rd26zo), rd26zo = h51ix, dj62 = gb05i_;
                        break;
                    case gz6r2do:
                        hxa1k['warning']('attribute space is required"' + tb_pf + '\x22!!');
                    case gclqg:
                        dj62 = gb05i_, rd26zo = h51ix;
                        break;
                    case g_4ft:
                        dj62 = gh1ikxa, rd26zo = h51ix;
                        break;
                    case gvcsg:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        h51ix++;
    }
}
function gqvcg7(d2z63o, d43of, biap0) {
    for (var eywk1 = d2z63o['tagName'], h1kye = null, df34 = d2z63o['length']; df34--;) {
        var l8scg9 = d2z63o[df34],
            hkxa1i = l8scg9['qName'],
            f_0btp = l8scg9['value'],
            evw7qy = hkxa1i['indexOf'](':');
        if (evw7qy > 0x0) var qgcvs7 = l8scg9['prefix'] = hkxa1i['slice'](0x0, evw7qy),
            sgcl98 = hkxa1i['slice'](evw7qy + 0x1),
            d2jz = 'xmlns' === qgcvs7 && sgcl98;else sgcl98 = hkxa1i, qgcvs7 = null, d2jz = 'xmlns' === hkxa1i && '';
        l8scg9['localName'] = sgcl98, d2jz !== !0x1 && (null == h1kye && (h1kye = {}, gdot34z(biap0, biap0 = {})), biap0[d2jz] = h1kye[d2jz] = f_0btp, l8scg9['uri'] = 'http://www.w3.org/2000/xmlns/', d43of['startPrefixMapping'](d2jz, f_0btp));
    }
    for (var df34 = d2z63o['length']; df34--;) {
        l8scg9 = d2z63o[df34];
        var qgcvs7 = l8scg9['prefix'];
        qgcvs7 && ('xml' === qgcvs7 && (l8scg9['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== qgcvs7 && (l8scg9['uri'] = biap0[qgcvs7 || '']));
    }
    var evw7qy = eywk1['indexOf'](':');
    evw7qy > 0x0 ? (qgcvs7 = d2z63o['prefix'] = eywk1['slice'](0x0, evw7qy), sgcl98 = d2z63o['localName'] = eywk1['slice'](evw7qy + 0x1)) : (qgcvs7 = null, sgcl98 = d2z63o['localName'] = eywk1);
    var eg7qy = d2z63o['uri'] = biap0[qgcvs7 || ''];
    if (d43of['startElement'](eg7qy, sgcl98, eywk1, d2z63o), !d2z63o['closed']) return d2z63o['currentNSMap'] = biap0, d2z63o['localNSMap'] = h1kye, !0x0;
    if (d43of['endElement'](eg7qy, sgcl98, eywk1), h1kye) {
        for (qgcvs7 in h1kye) d43of['endPrefixMapping'](qgcvs7);
    }
}
function gf0t4_(a5hi, f0pt_4, ai5bxp, _5b0, i5ah1) {
    if (/^(?:script|textarea)$/i['test'](ai5bxp)) {
        var sl9g = a5hi['indexOf']('</' + ai5bxp + '>', f0pt_4),
            a1kxh = a5hi['substring'](f0pt_4 + 0x1, sl9g);
        if (/[&<]/['test'](a1kxh)) return (/^script$/i['test'](ai5bxp) ? (i5ah1['characters'](a1kxh, 0x0, a1kxh['length']), sl9g) : (a1kxh = a1kxh['replace'](/&#?\w+;/g, _5b0), i5ah1['characters'](a1kxh, 0x0, a1kxh['length']), sl9g)
        );
    }
    return f0pt_4 + 0x1;
}
function gzdo234(cqs7g, xiahb5, z43o2, ax1wh) {
    var b0pf = ax1wh[z43o2];
    return null == b0pf && (b0pf = cqs7g['lastIndexOf']('</' + z43o2 + '>'), xiahb5 > b0pf && (b0pf = cqs7g['lastIndexOf']('</' + z43o2)), ax1wh[z43o2] = b0pf), xiahb5 > b0pf;
}
function gdot34z(o24dz3, f4tdo3) {
    for (var khaxi in o24dz3) f4tdo3[khaxi] = o24dz3[khaxi];
}
function gm6(cq8, qc7gev, d23oz4, d4of3) {
    var v1yewk = cq8['charAt'](qc7gev + 0x2);
    switch (v1yewk) {
        case '-':
            if ('-' === cq8['charAt'](qc7gev + 0x3)) {
                var gec7q = cq8['indexOf']('-->', qc7gev + 0x4);
                return gec7q > qc7gev ? (d23oz4['comment'](cq8, qc7gev + 0x4, gec7q - qc7gev - 0x4), gec7q + 0x3) : (d4of3['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == cq8['substr'](qc7gev + 0x3, 0x6)) {
                var gec7q = cq8['indexOf'](']]>', qc7gev + 0x9);
                return d23oz4['startCDATA'](), d23oz4['characters'](cq8, qc7gev + 0x9, gec7q - qc7gev - 0x9), d23oz4['endCDATA'](), gec7q + 0x3;
            }
            var $zrj6 = gveqgy7(cq8, qc7gev),
                hwy1kx = $zrj6['length'];
            if (hwy1kx > 0x1 && /!doctype/i['test']($zrj6[0x0][0x0])) {
                var vyweq7 = $zrj6[0x1][0x0],
                    $jr6mu = hwy1kx > 0x3 && /^public$/i['test']($zrj6[0x2][0x0]) && $zrj6[0x3][0x0],
                    f40pt_ = hwy1kx > 0x4 && $zrj6[0x4][0x0],
                    b5ix = $zrj6[hwy1kx - 0x1];
                return d23oz4['startDTD'](vyweq7, $jr6mu && $jr6mu['replace'](/^(['"])(.*?)\1$/, '$2'), f40pt_ && f40pt_['replace'](/^(['"])(.*?)\1$/, '$2')), d23oz4['endDTD'](), b5ix['index'] + b5ix[0x0]['length'];
            }
    }
    return -0x1;
}
function gcg9sl(ru2j6$, pb0ai5, _o43f) {
    var qvsgc7 = ru2j6$['indexOf']('?>', pb0ai5);
    if (qvsgc7) {
        var d43z = ru2j6$['substring'](pb0ai5, qvsgc7)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (d43z) {
            {
                d43z[0x0]['length'];
            }
            return _o43f['processingInstruction'](d43z[0x1], d43z[0x2]), qvsgc7 + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function gls8qcg() {}
function gumj6r$($6zj2r, dzot4) {
    return $6zj2r['__proto__'] = dzot4, $6zj2r;
}
function gveqgy7(z2djr6, r62$) {
    var wk1v,
        doz2 = [],
        $j6m = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for ($j6m['lastIndex'] = r62$, $j6m['exec'](z2djr6); wk1v = $j6m['exec'](z2djr6);) if (doz2['push'](wk1v), wk1v[0x1]) return doz2;
}
var gcv = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    gvqc7 = new RegExp('[\\-\\.0-9' + gcv['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    g$ujmr6 = new RegExp('^' + gcv['source'] + gvqc7['source'] + '*(?::' + gcv['source'] + gvqc7['source'] + '*)?$'),
    gahi = 0x0,
    gb05i_ = 0x1,
    gi5b_0 = 0x2,
    g_4ft = 0x3,
    gh1ikxa = 0x4,
    gz6r2do = 0x5,
    gclqg = 0x6,
    gvcsg = 0x7;
gh1yew['prototype'] = {
    'parse': function (odz2r, kwevy1, r$u2j6) {
        var s9l8c = this['domBuilder'];
        s9l8c['startDocument'](), gdot34z(kwevy1, kwevy1 = {}), gevw7ky(odz2r, kwevy1, r$u2j6, s9l8c, this['errorHandler']), s9l8c['endDocument']();
    }
}, gls8qcg['prototype'] = {
    'setTagName': function (jrz$) {
        if (!g$ujmr6['test'](jrz$)) throw new Error('invalid tagName:' + jrz$);
        this['tagName'] = jrz$;
    },
    'add': function (f_ot34, y7egq, bip5a0) {
        if (!g$ujmr6['test'](f_ot34)) throw new Error('invalid attribute:' + f_ot34);
        this[this['length']++] = {
            'qName': f_ot34,
            'value': y7egq,
            'offset': bip5a0
        };
    },
    'length': 0x0,
    'getLocalName': function (gcqls8) {
        return this[gcqls8]['localName'];
    },
    'getLocator': function (abp05) {
        return this[abp05]['locator'];
    },
    'getQName': function (r26$zj) {
        return this[r26$zj]['qName'];
    },
    'getURI': function (r6$2z) {
        return this[r6$2z]['uri'];
    },
    'getValue': function (f_4tp) {
        return this[f_4tp]['value'];
    }
}, gumj6r$({}, gumj6r$['prototype']) instanceof gumj6r$ || (gumj6r$ = function (qye7w, a5hx) {
    function qv7w() {}
    qv7w['prototype'] = a5hx, qv7w = new qv7w();
    for (a5hx in qye7w) qv7w[a5hx] = qye7w[a5hx];
    return qv7w;
}), exports['XMLReader'] = gh1yew;