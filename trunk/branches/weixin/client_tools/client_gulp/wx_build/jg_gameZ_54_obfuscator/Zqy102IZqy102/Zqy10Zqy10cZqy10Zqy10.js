var J = wx.h$;
function gct6gd8() {}
function gdgk6b(_w9pe, vjin7x, o5yv, tze_h, boqr5) {
    function n17jxi(yqorb5) {
        if (yqorb5 > 0xffff) {
            yqorb5 -= 0x10000;
            var dgc6t8 = 0xd800 + (yqorb5 >> 0xa),
                zhtc8e = 0xdc00 + (0x3ff & yqorb5);
            return String['fromCharCode'](dgc6t8, zhtc8e);
        }
        return String['fromCharCode'](yqorb5);
    }
    function q0dbgk(inx471) {
        var kbq5 = inx471['slice'](0x1, -0x1);
        return kbq5 in o5yv ? o5yv[kbq5] : '#' === kbq5['charAt'](0x0) ? n17jxi(parseInt(kbq5['substr'](0x1)['replace']('x', '0x'))) : (boqr5['error']('entity not found:' + inx471), inx471);
    }
    function qo5by(o05yb) {
        if (o05yb > j7ixr) {
            var lam3u = _w9pe['substring'](j7ixr, o05yb)['replace'](/&#?\w+;/g, q0dbgk);
            w92e_ && vroy(j7ixr), tze_h['characters'](lam3u, 0x0, o05yb - j7ixr), j7ixr = o05yb;
        }
    }
    function vroy(h6zct8, gb6kd0) {
        for (; h6zct8 >= l4a && (gb6kd0 = jvy5['exec'](_w9pe));) $_9w2 = gb6kd0['index'], l4a = $_9w2 + gb6kd0[0x0]['length'], w92e_['lineNumber']++;
        w92e_['columnNumber'] = h6zct8 - $_9w2 + 0x1;
    }
    for (var $_9w2 = 0x0, l4a = 0x0, jvy5 = /.*(?:\r\n?|\n)|.*$/g, w92e_ = tze_h['locator'], eh_z2p = [{ 'currentNSMap': vjin7x }], ez_tp = {}, j7ixr = 0x0;;) {
        try {
            var tehc8z = _w9pe['indexOf']('<', j7ixr);
            if (0x0 > tehc8z) {
                if (!_w9pe['substr'](j7ixr)['match'](/^\s*$/)) {
                    var ch8dt6 = tze_h['doc'],
                        n431a = ch8dt6['createTextNode'](_w9pe['substr'](j7ixr));
                    ch8dt6['appendChild'](n431a), tze_h['currentElement'] = n431a;
                }
                return;
            }
            switch (tehc8z > j7ixr && qo5by(tehc8z), _w9pe['charAt'](tehc8z + 0x1)) {
                case '/':
                    var w9pf = _w9pe['indexOf']('>', tehc8z + 0x3),
                        $92_fw = _w9pe['substring'](tehc8z + 0x2, w9pf),
                        echtpz = eh_z2p['pop']();
                    0x0 > w9pf ? ($92_fw = _w9pe['substring'](tehc8z + 0x2)['replace'](/[\s<].*/, ''), boqr5['error']('end tag name: ' + $92_fw + ' is not complete:' + echtpz['tagName']), w9pf = tehc8z + 0x1 + $92_fw['length']) : $92_fw['match'](/\s</) && ($92_fw = $92_fw['replace'](/[\s<].*/, ''), boqr5['error']('end tag name: ' + $92_fw + ' maybe not complete'), w9pf = tehc8z + 0x1 + $92_fw['length']);
                    var het_p = echtpz['localNSMap'],
                        ual3m4 = echtpz['tagName'] == $92_fw,
                        oyrqv5 = ual3m4 || echtpz['tagName'] && echtpz['tagName']['toLowerCase']() == $92_fw['toLowerCase']();
                    if (oyrqv5) {
                        if (tze_h['endElement'](echtpz['uri'], echtpz['localName'], $92_fw), het_p) {
                            for (var p_h2e in het_p) tze_h['endPrefixMapping'](p_h2e);
                        }
                        ual3m4 || boqr5['fatalError']('end tag name: ' + $92_fw + ' is not match the current start tagName:' + echtpz['tagName']);
                    } else eh_z2p['push'](echtpz);
                    w9pf++;
                    break;
                case '?':
                    w92e_ && vroy(tehc8z), w9pf = ggqb(_w9pe, tehc8z, tze_h);
                    break;
                case '!':
                    w92e_ && vroy(tehc8z), w9pf = gjixrv7(_w9pe, tehc8z, tze_h, boqr5);
                    break;
                default:
                    w92e_ && vroy(tehc8z);
                    var an13u = new gqbd0g(),
                        _hzet = eh_z2p[eh_z2p['length'] - 0x1]['currentNSMap'],
                        w9pf = ghczt(_w9pe, tehc8z, an13u, _hzet, q0dbgk, boqr5),
                        ct6dh = an13u['length'];
                    if (!an13u['closed'] && gal34u(_w9pe, w9pf, an13u['tagName'], ez_tp) && (an13u['closed'] = !0x0, o5yv['nbsp'] || boqr5['warning']('unclosed xml attribute')), w92e_ && ct6dh) {
                        for (var pe2z = gn413ua(w92e_, {}), b50g = 0x0; ct6dh > b50g; b50g++) {
                            var alu4 = an13u[b50g];
                            vroy(alu4['offset']), alu4['locator'] = gn413ua(w92e_, {});
                        }
                        tze_h['locator'] = pe2z, gvyxjr7(an13u, tze_h, _hzet) && eh_z2p['push'](an13u), tze_h['locator'] = w92e_;
                    } else gvyxjr7(an13u, tze_h, _hzet) && eh_z2p['push'](an13u);
                    'http://www.w3.org/1999/xhtml' !== an13u['uri'] || an13u['closed'] ? w9pf++ : w9pf = gyo5bqr(_w9pe, w9pf, an13u['tagName'], q0dbgk, tze_h);
            }
        } catch (kgq0b) {
            boqr5['error']('element parse error: ' + kgq0b), w9pf = -0x1;
        }
        w9pf > j7ixr ? j7ixr = w9pf : qo5by(Math['max'](tehc8z, j7ixr) + 0x1);
    }
}
function gn413ua(k5bqg, qgd0bk) {
    return qgd0bk['lineNumber'] = k5bqg['lineNumber'], qgd0bk['columnNumber'] = k5bqg['columnNumber'], qgd0bk;
}
function ghczt(t68zc, ctz86h, p_29wf, or7jyv, yjor7, hdct86) {
    for (var epw2, gb0dk, thcz68 = ++ctz86h, bg50k = gz6cth;;) {
        var rj7ov = t68zc['charAt'](thcz68);
        switch (rj7ov) {
            case '=':
                if (bg50k === gj5yrov) epw2 = t68zc['slice'](ctz86h, thcz68), bg50k = gcd68gt;else {
                    if (bg50k !== grxij7) throw new Error('attribute equal must after attrName');
                    bg50k = gcd68gt;
                }
                break;
            case '\x27':
            case '\x22':
                if (bg50k === gcd68gt || bg50k === gj5yrov) {
                    if (bg50k === gj5yrov && (hdct86['warning']('attribute value must after "="'), epw2 = t68zc['slice'](ctz86h, thcz68)), ctz86h = thcz68 + 0x1, thcz68 = t68zc['indexOf'](rj7ov, ctz86h), !(thcz68 > 0x0)) throw new Error('attribute value no end \'' + rj7ov + '\' match');
                    gb0dk = t68zc['slice'](ctz86h, thcz68)['replace'](/&#?\w+;/g, yjor7), p_29wf['add'](epw2, gb0dk, ctz86h - 0x1), bg50k = gyxrvj7;
                } else {
                    if (bg50k != gy50qob) throw new Error('attribute value must after "="');
                    gb0dk = t68zc['slice'](ctz86h, thcz68)['replace'](/&#?\w+;/g, yjor7), p_29wf['add'](epw2, gb0dk, ctz86h), hdct86['warning']('attribute "' + epw2 + '" missed start quot(' + rj7ov + ')!!'), ctz86h = thcz68 + 0x1, bg50k = gyxrvj7;
                }
                break;
            case '/':
                switch (bg50k) {
                    case gz6cth:
                        p_29wf['setTagName'](t68zc['slice'](ctz86h, thcz68));
                    case gyxrvj7:
                    case gjn7v:
                    case gi174n:
                        bg50k = gi174n, p_29wf['closed'] = !0x0;
                    case gy50qob:
                    case gj5yrov:
                    case grxij7:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return hdct86['error']('unexpected end of input'), bg50k == gz6cth && p_29wf['setTagName'](t68zc['slice'](ctz86h, thcz68)), thcz68;
            case '>':
                switch (bg50k) {
                    case gz6cth:
                        p_29wf['setTagName'](t68zc['slice'](ctz86h, thcz68));
                    case gyxrvj7:
                    case gjn7v:
                    case gi174n:
                        break;
                    case gy50qob:
                    case gj5yrov:
                        gb0dk = t68zc['slice'](ctz86h, thcz68), '/' === gb0dk['slice'](-0x1) && (p_29wf['closed'] = !0x0, gb0dk = gb0dk['slice'](0x0, -0x1));
                    case grxij7:
                        bg50k === grxij7 && (gb0dk = epw2), bg50k == gy50qob ? (hdct86['warning']('attribute "' + gb0dk + '" missed quot(")!!'), p_29wf['add'](epw2, gb0dk['replace'](/&#?\w+;/g, yjor7), ctz86h)) : ('http://www.w3.org/1999/xhtml' === or7jyv[''] && gb0dk['match'](/^(?:disabled|checked|selected)$/i) || hdct86['warning']('attribute "' + gb0dk + '" missed value!! "' + gb0dk + '" instead!!'), p_29wf['add'](gb0dk, gb0dk, ctz86h));
                        break;
                    case gcd68gt:
                        throw new Error('attribute value missed!!');
                }
                return thcz68;
            case '\u0080':
                rj7ov = '\x20';
            default:
                if ('\x20' >= rj7ov) switch (bg50k) {
                    case gz6cth:
                        p_29wf['setTagName'](t68zc['slice'](ctz86h, thcz68)), bg50k = gjn7v;
                        break;
                    case gj5yrov:
                        epw2 = t68zc['slice'](ctz86h, thcz68), bg50k = grxij7;
                        break;
                    case gy50qob:
                        var gb0dk = t68zc['slice'](ctz86h, thcz68)['replace'](/&#?\w+;/g, yjor7);
                        hdct86['warning']('attribute "' + gb0dk + '" missed quot(")!!'), p_29wf['add'](epw2, gb0dk, ctz86h);
                    case gyxrvj7:
                        bg50k = gjn7v;
                } else switch (bg50k) {
                    case grxij7:
                        {
                            p_29wf['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === or7jyv[''] && epw2['match'](/^(?:disabled|checked|selected)$/i) || hdct86['warning']('attribute "' + epw2 + '" missed value!! "' + epw2 + '" instead2!!'), p_29wf['add'](epw2, epw2, ctz86h), ctz86h = thcz68, bg50k = gj5yrov;
                        break;
                    case gyxrvj7:
                        hdct86['warning']('attribute space is required"' + epw2 + '\x22!!');
                    case gjn7v:
                        bg50k = gj5yrov, ctz86h = thcz68;
                        break;
                    case gcd68gt:
                        bg50k = gy50qob, ctz86h = thcz68;
                        break;
                    case gi174n:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        thcz68++;
    }
}
function gvyxjr7(bdgk60, aum, un1a4) {
    for (var w92_e = bdgk60['tagName'], zphtc = null, ij1nx7 = bdgk60['length']; ij1nx7--;) {
        var rq5oy = bdgk60[ij1nx7],
            qyb05o = rq5oy['qName'],
            ckg6d8 = rq5oy['value'],
            ix17 = qyb05o['indexOf'](':');
        if (ix17 > 0x0) var f2$w9_ = rq5oy['prefix'] = qyb05o['slice'](0x0, ix17),
            xiv7nj = qyb05o['slice'](ix17 + 0x1),
            n34au1 = 'xmlns' === f2$w9_ && xiv7nj;else xiv7nj = qyb05o, f2$w9_ = null, n34au1 = 'xmlns' === qyb05o && '';
        rq5oy['localName'] = xiv7nj, n34au1 !== !0x1 && (null == zphtc && (zphtc = {}, grvji7(un1a4, un1a4 = {})), un1a4[n34au1] = zphtc[n34au1] = ckg6d8, rq5oy['uri'] = 'http://www.w3.org/2000/xmlns/', aum['startPrefixMapping'](n34au1, ckg6d8));
    }
    for (var ij1nx7 = bdgk60['length']; ij1nx7--;) {
        rq5oy = bdgk60[ij1nx7];
        var f2$w9_ = rq5oy['prefix'];
        f2$w9_ && ('xml' === f2$w9_ && (rq5oy['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== f2$w9_ && (rq5oy['uri'] = un1a4[f2$w9_ || '']));
    }
    var ix17 = w92_e['indexOf'](':');
    ix17 > 0x0 ? (f2$w9_ = bdgk60['prefix'] = w92_e['slice'](0x0, ix17), xiv7nj = bdgk60['localName'] = w92_e['slice'](ix17 + 0x1)) : (f2$w9_ = null, xiv7nj = bdgk60['localName'] = w92_e);
    var v5roq = bdgk60['uri'] = un1a4[f2$w9_ || ''];
    if (aum['startElement'](v5roq, xiv7nj, w92_e, bdgk60), !bdgk60['closed']) return bdgk60['currentNSMap'] = un1a4, bdgk60['localNSMap'] = zphtc, !0x0;
    if (aum['endElement'](v5roq, xiv7nj, w92_e), zphtc) {
        for (f2$w9_ in zphtc) aum['endPrefixMapping'](f2$w9_);
    }
}
function gyo5bqr(pzt_he, d8cgt, rxvi, vo5qyr, k08g6) {
    if (/^(?:script|textarea)$/i['test'](rxvi)) {
        var _2epzw = pzt_he['indexOf']('</' + rxvi + '>', d8cgt),
            r5vyo = pzt_he['substring'](d8cgt + 0x1, _2epzw);
        if (/[&<]/['test'](r5vyo)) return (/^script$/i['test'](rxvi) ? (k08g6['characters'](r5vyo, 0x0, r5vyo['length']), _2epzw) : (r5vyo = r5vyo['replace'](/&#?\w+;/g, vo5qyr), k08g6['characters'](r5vyo, 0x0, r5vyo['length']), _2epzw)
        );
    }
    return d8cgt + 0x1;
}
function gal34u(yvo5qr, qb5yr, ua13n, irvj7x) {
    var hd86tc = irvj7x[ua13n];
    return null == hd86tc && (hd86tc = yvo5qr['lastIndexOf']('</' + ua13n + '>'), qb5yr > hd86tc && (hd86tc = yvo5qr['lastIndexOf']('</' + ua13n)), irvj7x[ua13n] = hd86tc), qb5yr > hd86tc;
}
function grvji7(f_w2p9, _2fwp) {
    for (var ovr7j in f_w2p9) _2fwp[ovr7j] = f_w2p9[ovr7j];
}
function gjixrv7(ez2hp_, qb5ok0, d8g06k, f2w9$) {
    var ix4n71 = ez2hp_['charAt'](qb5ok0 + 0x2);
    switch (ix4n71) {
        case '-':
            if ('-' === ez2hp_['charAt'](qb5ok0 + 0x3)) {
                var zt6ch = ez2hp_['indexOf']('-->', qb5ok0 + 0x4);
                return zt6ch > qb5ok0 ? (d8g06k['comment'](ez2hp_, qb5ok0 + 0x4, zt6ch - qb5ok0 - 0x4), zt6ch + 0x3) : (f2w9$['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == ez2hp_['substr'](qb5ok0 + 0x3, 0x6)) {
                var zt6ch = ez2hp_['indexOf'](']]>', qb5ok0 + 0x9);
                return d8g06k['startCDATA'](), d8g06k['characters'](ez2hp_, qb5ok0 + 0x9, zt6ch - qb5ok0 - 0x9), d8g06k['endCDATA'](), zt6ch + 0x3;
            }
            var vxjry7 = gb06dg(ez2hp_, qb5ok0),
                ephtcz = vxjry7['length'];
            if (ephtcz > 0x1 && /!doctype/i['test'](vxjry7[0x0][0x0])) {
                var wf$29 = vxjry7[0x1][0x0],
                    gc6k8d = ephtcz > 0x3 && /^public$/i['test'](vxjry7[0x2][0x0]) && vxjry7[0x3][0x0],
                    bgkq = ephtcz > 0x4 && vxjry7[0x4][0x0],
                    rjvy7x = vxjry7[ephtcz - 0x1];
                return d8g06k['startDTD'](wf$29, gc6k8d && gc6k8d['replace'](/^(['"])(.*?)\1$/, '$2'), bgkq && bgkq['replace'](/^(['"])(.*?)\1$/, '$2')), d8g06k['endDTD'](), rjvy7x['index'] + rjvy7x[0x0]['length'];
            }
    }
    return -0x1;
}
function ggqb(c8het, jy7rxv, r5yqv) {
    var pz2e = c8het['indexOf']('?>', jy7rxv);
    if (pz2e) {
        var nvj7ix = c8het['substring'](jy7rxv, pz2e)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (nvj7ix) {
            {
                nvj7ix[0x0]['length'];
            }
            return r5yqv['processingInstruction'](nvj7ix[0x1], nvj7ix[0x2]), pz2e + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function gqbd0g() {}
function gyvq5ro(qb5g, bqk) {
    return qb5g['__proto__'] = bqk, qb5g;
}
function gb06dg(fw9_$, cphetz) {
    var orqv5y,
        cez8 = [],
        peztch = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (peztch['lastIndex'] = cphetz, peztch['exec'](fw9_$); orqv5y = peztch['exec'](fw9_$);) if (cez8['push'](orqv5y), orqv5y[0x1]) return cez8;
}
var gzphet = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    gq05kg = new RegExp('[\\-\\.0-9' + gzphet['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    ggdc = new RegExp('^' + gzphet['source'] + gq05kg['source'] + '*(?::' + gzphet['source'] + gq05kg['source'] + '*)?$'),
    gz6cth = 0x0,
    gj5yrov = 0x1,
    grxij7 = 0x2,
    gcd68gt = 0x3,
    gy50qob = 0x4,
    gyxrvj7 = 0x5,
    gjn7v = 0x6,
    gi174n = 0x7;
gct6gd8['prototype'] = {
    'parse': function (phet_z, vr7jxi, g8t) {
        var oyr7 = this['domBuilder'];
        oyr7['startDocument'](), grvji7(vr7jxi, vr7jxi = {}), gdgk6b(phet_z, vr7jxi, g8t, oyr7, this['errorHandler']), oyr7['endDocument']();
    }
}, gqbd0g['prototype'] = {
    'setTagName': function (i1nx34) {
        if (!ggdc['test'](i1nx34)) throw new Error('invalid tagName:' + i1nx34);
        this['tagName'] = i1nx34;
    },
    'add': function (gkdc68, hc6zt8, vxir7j) {
        if (!ggdc['test'](gkdc68)) throw new Error('invalid attribute:' + gkdc68);
        this[this['length']++] = {
            'qName': gkdc68,
            'value': hc6zt8,
            'offset': vxir7j
        };
    },
    'length': 0x0,
    'getLocalName': function (_hez) {
        return this[_hez]['localName'];
    },
    'getLocator': function (d68ch) {
        return this[d68ch]['locator'];
    },
    'getQName': function (koq05b) {
        return this[koq05b]['qName'];
    },
    'getURI': function (k5oq0) {
        return this[k5oq0]['uri'];
    },
    'getValue': function (tz6h) {
        return this[tz6h]['value'];
    }
}, gyvq5ro({}, gyvq5ro['prototype']) instanceof gyvq5ro || (gyvq5ro = function (wfp9_, kdg0bq) {
    function gtc86d() {}
    gtc86d['prototype'] = kdg0bq, gtc86d = new gtc86d();
    for (kdg0bq in wfp9_) gtc86d[kdg0bq] = wfp9_[kdg0bq];
    return gtc86d;
}), exports['XMLReader'] = gct6gd8;