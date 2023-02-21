var m = wx.$g;
function gkv7y() {}
function gwhkx1a(ibx5ha, ipa5b, s7q8cg, o34fdt, o243d) {
    function j$ru6(o3t4df) {
        if (o3t4df > 0xffff) {
            o3t4df -= 0x10000;
            var xaih15 = 0xd800 + (o3t4df >> 0xa),
                ot3df4 = 0xdc00 + (0x3ff & o3t4df);
            return String['fromCharCode'](xaih15, ot3df4);
        }
        return String['fromCharCode'](o3t4df);
    }
    function od4zt(f_5pb0) {
        var xi5a1h = f_5pb0['slice'](0x1, -0x1);
        return xi5a1h in s7q8cg ? s7q8cg[xi5a1h] : '#' === xi5a1h['charAt'](0x0) ? j$ru6(parseInt(xi5a1h['substr'](0x1)['replace']('x', '0x'))) : (o243d['error']('entity not found:' + f_5pb0), f_5pb0);
    }
    function yv1kew(fo43_t) {
        if (fo43_t > e7qvg) {
            var m6$rju = ibx5ha['substring'](e7qvg, fo43_t)['replace'](/&#?\w+;/g, od4zt);
            hx5bia && _t0p4f(e7qvg), o34fdt['characters'](m6$rju, 0x0, fo43_t - e7qvg), e7qvg = fo43_t;
        }
    }
    function _t0p4f(oz36, evq7c) {
        for (; oz36 >= o2rdz6 && (evq7c = $r26z['exec'](ibx5ha));) pxbia = evq7c['index'], o2rdz6 = pxbia + evq7c[0x0]['length'], hx5bia['lineNumber']++;
        hx5bia['columnNumber'] = oz36 - pxbia + 0x1;
    }
    for (var pxbia = 0x0, o2rdz6 = 0x0, $r26z = /.*(?:\r\n?|\n)|.*$/g, hx5bia = o34fdt['locator'], ibx5pa = [{ 'currentNSMap': ipa5b }], qygv7e = {}, e7qvg = 0x0;;) {
        try {
            var kv7ey = ibx5ha['indexOf']('<', e7qvg);
            if (0x0 > kv7ey) {
                if (!ibx5ha['substr'](e7qvg)['match'](/^\s*$/)) {
                    var xi5ahb = o34fdt['doc'],
                        ru62 = xi5ahb['createTextNode'](ibx5ha['substr'](e7qvg));
                    xi5ahb['appendChild'](ru62), o34fdt['currentElement'] = ru62;
                }
                return;
            }
            switch (kv7ey > e7qvg && yv1kew(kv7ey), ibx5ha['charAt'](kv7ey + 0x1)) {
                case '/':
                    var wkxah = ibx5ha['indexOf']('>', kv7ey + 0x3),
                        xb5api = ibx5ha['substring'](kv7ey + 0x2, wkxah),
                        _f05pb = ibx5pa['pop']();
                    0x0 > wkxah ? (xb5api = ibx5ha['substring'](kv7ey + 0x2)['replace'](/[\s<].*/, ''), o243d['error']('end tag name: ' + xb5api + ' is not complete:' + _f05pb['tagName']), wkxah = kv7ey + 0x1 + xb5api['length']) : xb5api['match'](/\s</) && (xb5api = xb5api['replace'](/[\s<].*/, ''), o243d['error']('end tag name: ' + xb5api + ' maybe not complete'), wkxah = kv7ey + 0x1 + xb5api['length']);
                    var xpbia5 = _f05pb['localNSMap'],
                        lgs8cq = _f05pb['tagName'] == xb5api,
                        e7ygqv = lgs8cq || _f05pb['tagName'] && _f05pb['tagName']['toLowerCase']() == xb5api['toLowerCase']();
                    if (e7ygqv) {
                        if (o34fdt['endElement'](_f05pb['uri'], _f05pb['localName'], xb5api), xpbia5) {
                            for (var $j6u2 in xpbia5) o34fdt['endPrefixMapping']($j6u2);
                        }
                        lgs8cq || o243d['fatalError']('end tag name: ' + xb5api + ' is not match the current start tagName:' + _f05pb['tagName']);
                    } else ibx5pa['push'](_f05pb);
                    wkxah++;
                    break;
                case '?':
                    hx5bia && _t0p4f(kv7ey), wkxah = gpb_ft(ibx5ha, kv7ey, o34fdt);
                    break;
                case '!':
                    hx5bia && _t0p4f(kv7ey), wkxah = gd2zrj(ibx5ha, kv7ey, o34fdt, o243d);
                    break;
                default:
                    hx5bia && _t0p4f(kv7ey);
                    var r6$uj2 = new gtd4of(),
                        b5ip0a = ibx5pa[ibx5pa['length'] - 0x1]['currentNSMap'],
                        wkxah = g_tf403(ibx5ha, kv7ey, r6$uj2, b5ip0a, od4zt, o243d),
                        u2rj = r6$uj2['length'];
                    if (!r6$uj2['closed'] && gk1hiax(ibx5ha, wkxah, r6$uj2['tagName'], qygv7e) && (r6$uj2['closed'] = !0x0, s7q8cg['nbsp'] || o243d['warning']('unclosed xml attribute')), hx5bia && u2rj) {
                        for (var $u2j6r = gahkx1i(hx5bia, {}), qvgs7 = 0x0; u2rj > qvgs7; qvgs7++) {
                            var w7ekyv = r6$uj2[qvgs7];
                            _t0p4f(w7ekyv['offset']), w7ekyv['locator'] = gahkx1i(hx5bia, {});
                        }
                        o34fdt['locator'] = $u2j6r, gyvw7e(r6$uj2, o34fdt, b5ip0a) && ibx5pa['push'](r6$uj2), o34fdt['locator'] = hx5bia;
                    } else gyvw7e(r6$uj2, o34fdt, b5ip0a) && ibx5pa['push'](r6$uj2);
                    'http://www.w3.org/1999/xhtml' !== r6$uj2['uri'] || r6$uj2['closed'] ? wkxah++ : wkxah = gpbt0(ibx5ha, wkxah, r6$uj2['tagName'], od4zt, o34fdt);
            }
        } catch (ecvq) {
            o243d['error']('element parse error: ' + ecvq), wkxah = -0x1;
        }
        wkxah > e7qvg ? e7qvg = wkxah : yv1kew(Math['max'](kv7ey, e7qvg) + 0x1);
    }
}
function gahkx1i(vqw, b5iax) {
    return b5iax['lineNumber'] = vqw['lineNumber'], b5iax['columnNumber'] = vqw['columnNumber'], b5iax;
}
function g_tf403(b_p0f5, ju6$, yk1he, pf_b05, ey7gqv, sgcql) {
    for (var mujr$, ke7, v7qgsc = ++ju6$, c7qvge = gr62$jz;;) {
        var dr6jz2 = b_p0f5['charAt'](v7qgsc);
        switch (dr6jz2) {
            case '=':
                if (c7qvge === gaix1) mujr$ = b_p0f5['slice'](ju6$, v7qgsc), c7qvge = gib5_;else {
                    if (c7qvge !== gev1wky) throw new Error('attribute equal must after attrName');
                    c7qvge = gib5_;
                }
                break;
            case '\x27':
            case '\x22':
                if (c7qvge === gib5_ || c7qvge === gaix1) {
                    if (c7qvge === gaix1 && (sgcql['warning']('attribute value must after "="'), mujr$ = b_p0f5['slice'](ju6$, v7qgsc)), ju6$ = v7qgsc + 0x1, v7qgsc = b_p0f5['indexOf'](dr6jz2, ju6$), !(v7qgsc > 0x0)) throw new Error('attribute value no end \'' + dr6jz2 + '\' match');
                    ke7 = b_p0f5['slice'](ju6$, v7qgsc)['replace'](/&#?\w+;/g, ey7gqv), yk1he['add'](mujr$, ke7, ju6$ - 0x1), c7qvge = gdzjr;
                } else {
                    if (c7qvge != gcqge7) throw new Error('attribute value must after "="');
                    ke7 = b_p0f5['slice'](ju6$, v7qgsc)['replace'](/&#?\w+;/g, ey7gqv), yk1he['add'](mujr$, ke7, ju6$), sgcql['warning']('attribute "' + mujr$ + '" missed start quot(' + dr6jz2 + ')!!'), ju6$ = v7qgsc + 0x1, c7qvge = gdzjr;
                }
                break;
            case '/':
                switch (c7qvge) {
                    case gr62$jz:
                        yk1he['setTagName'](b_p0f5['slice'](ju6$, v7qgsc));
                    case gdzjr:
                    case gc78gqs:
                    case gqlsc:
                        c7qvge = gqlsc, yk1he['closed'] = !0x0;
                    case gcqge7:
                    case gaix1:
                    case gev1wky:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return sgcql['error']('unexpected end of input'), c7qvge == gr62$jz && yk1he['setTagName'](b_p0f5['slice'](ju6$, v7qgsc)), v7qgsc;
            case '>':
                switch (c7qvge) {
                    case gr62$jz:
                        yk1he['setTagName'](b_p0f5['slice'](ju6$, v7qgsc));
                    case gdzjr:
                    case gc78gqs:
                    case gqlsc:
                        break;
                    case gcqge7:
                    case gaix1:
                        ke7 = b_p0f5['slice'](ju6$, v7qgsc), '/' === ke7['slice'](-0x1) && (yk1he['closed'] = !0x0, ke7 = ke7['slice'](0x0, -0x1));
                    case gev1wky:
                        c7qvge === gev1wky && (ke7 = mujr$), c7qvge == gcqge7 ? (sgcql['warning']('attribute "' + ke7 + '" missed quot(")!!'), yk1he['add'](mujr$, ke7['replace'](/&#?\w+;/g, ey7gqv), ju6$)) : ('http://www.w3.org/1999/xhtml' === pf_b05[''] && ke7['match'](/^(?:disabled|checked|selected)$/i) || sgcql['warning']('attribute "' + ke7 + '" missed value!! "' + ke7 + '" instead!!'), yk1he['add'](ke7, ke7, ju6$));
                        break;
                    case gib5_:
                        throw new Error('attribute value missed!!');
                }
                return v7qgsc;
            case '\u0080':
                dr6jz2 = '\x20';
            default:
                if ('\x20' >= dr6jz2) switch (c7qvge) {
                    case gr62$jz:
                        yk1he['setTagName'](b_p0f5['slice'](ju6$, v7qgsc)), c7qvge = gc78gqs;
                        break;
                    case gaix1:
                        mujr$ = b_p0f5['slice'](ju6$, v7qgsc), c7qvge = gev1wky;
                        break;
                    case gcqge7:
                        var ke7 = b_p0f5['slice'](ju6$, v7qgsc)['replace'](/&#?\w+;/g, ey7gqv);
                        sgcql['warning']('attribute "' + ke7 + '" missed quot(")!!'), yk1he['add'](mujr$, ke7, ju6$);
                    case gdzjr:
                        c7qvge = gc78gqs;
                } else switch (c7qvge) {
                    case gev1wky:
                        {
                            yk1he['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === pf_b05[''] && mujr$['match'](/^(?:disabled|checked|selected)$/i) || sgcql['warning']('attribute "' + mujr$ + '" missed value!! "' + mujr$ + '" instead2!!'), yk1he['add'](mujr$, mujr$, ju6$), ju6$ = v7qgsc, c7qvge = gaix1;
                        break;
                    case gdzjr:
                        sgcql['warning']('attribute space is required"' + mujr$ + '\x22!!');
                    case gc78gqs:
                        c7qvge = gaix1, ju6$ = v7qgsc;
                        break;
                    case gib5_:
                        c7qvge = gcqge7, ju6$ = v7qgsc;
                        break;
                    case gqlsc:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        v7qgsc++;
    }
}
function gyvw7e(h1ika, d26rzj, ekvw1) {
    for (var vceq7 = h1ika['tagName'], wv7ky = null, rj2zd6 = h1ika['length']; rj2zd6--;) {
        var gcvs7q = h1ika[rj2zd6],
            i5baxp = gcvs7q['qName'],
            bp0_5i = gcvs7q['value'],
            v7y = i5baxp['indexOf'](':');
        if (v7y > 0x0) var eky1vw = gcvs7q['prefix'] = i5baxp['slice'](0x0, v7y),
            tfp0 = i5baxp['slice'](v7y + 0x1),
            sq8c = 'xmlns' === eky1vw && tfp0;else tfp0 = i5baxp, eky1vw = null, sq8c = 'xmlns' === i5baxp && '';
        gcvs7q['localName'] = tfp0, sq8c !== !0x1 && (null == wv7ky && (wv7ky = {}, gftd4(ekvw1, ekvw1 = {})), ekvw1[sq8c] = wv7ky[sq8c] = bp0_5i, gcvs7q['uri'] = 'http://www.w3.org/2000/xmlns/', d26rzj['startPrefixMapping'](sq8c, bp0_5i));
    }
    for (var rj2zd6 = h1ika['length']; rj2zd6--;) {
        gcvs7q = h1ika[rj2zd6];
        var eky1vw = gcvs7q['prefix'];
        eky1vw && ('xml' === eky1vw && (gcvs7q['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== eky1vw && (gcvs7q['uri'] = ekvw1[eky1vw || '']));
    }
    var v7y = vceq7['indexOf'](':');
    v7y > 0x0 ? (eky1vw = h1ika['prefix'] = vceq7['slice'](0x0, v7y), tfp0 = h1ika['localName'] = vceq7['slice'](v7y + 0x1)) : (eky1vw = null, tfp0 = h1ika['localName'] = vceq7);
    var o24z = h1ika['uri'] = ekvw1[eky1vw || ''];
    if (d26rzj['startElement'](o24z, tfp0, vceq7, h1ika), !h1ika['closed']) return h1ika['currentNSMap'] = ekvw1, h1ika['localNSMap'] = wv7ky, !0x0;
    if (d26rzj['endElement'](o24z, tfp0, vceq7), wv7ky) {
        for (eky1vw in wv7ky) d26rzj['endPrefixMapping'](eky1vw);
    }
}
function gpbt0(vykew, of34, g7sqcv, q7gvce, egy7v) {
    if (/^(?:script|textarea)$/i['test'](g7sqcv)) {
        var kyvw = vykew['indexOf']('</' + g7sqcv + '>', of34),
            t4ozd = vykew['substring'](of34 + 0x1, kyvw);
        if (/[&<]/['test'](t4ozd)) return (/^script$/i['test'](g7sqcv) ? (egy7v['characters'](t4ozd, 0x0, t4ozd['length']), kyvw) : (t4ozd = t4ozd['replace'](/&#?\w+;/g, q7gvce), egy7v['characters'](t4ozd, 0x0, t4ozd['length']), kyvw)
        );
    }
    return of34 + 0x1;
}
function gk1hiax(bpt_0, hywek, csgql, ur6jm) {
    var qcg8ls = ur6jm[csgql];
    return null == qcg8ls && (qcg8ls = bpt_0['lastIndexOf']('</' + csgql + '>'), hywek > qcg8ls && (qcg8ls = bpt_0['lastIndexOf']('</' + csgql)), ur6jm[csgql] = qcg8ls), hywek > qcg8ls;
}
function gftd4(_ip0b5, _t3fo4) {
    for (var bx5 in _ip0b5) _t3fo4[bx5] = _ip0b5[bx5];
}
function gd2zrj(yhkxw, hxi1k, gq87s, f_pb0t) {
    var ib0a5 = yhkxw['charAt'](hxi1k + 0x2);
    switch (ib0a5) {
        case '-':
            if ('-' === yhkxw['charAt'](hxi1k + 0x3)) {
                var hwe1 = yhkxw['indexOf']('-->', hxi1k + 0x4);
                return hwe1 > hxi1k ? (gq87s['comment'](yhkxw, hxi1k + 0x4, hwe1 - hxi1k - 0x4), hwe1 + 0x3) : (f_pb0t['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == yhkxw['substr'](hxi1k + 0x3, 0x6)) {
                var hwe1 = yhkxw['indexOf'](']]>', hxi1k + 0x9);
                return gq87s['startCDATA'](), gq87s['characters'](yhkxw, hxi1k + 0x9, hwe1 - hxi1k - 0x9), gq87s['endCDATA'](), hwe1 + 0x3;
            }
            var bai5xp = ggl9cs8(yhkxw, hxi1k),
                o43td = bai5xp['length'];
            if (o43td > 0x1 && /!doctype/i['test'](bai5xp[0x0][0x0])) {
                var bp0_5f = bai5xp[0x1][0x0],
                    qg7y = o43td > 0x3 && /^public$/i['test'](bai5xp[0x2][0x0]) && bai5xp[0x3][0x0],
                    ib5_0 = o43td > 0x4 && bai5xp[0x4][0x0],
                    d4oz23 = bai5xp[o43td - 0x1];
                return gq87s['startDTD'](bp0_5f, qg7y && qg7y['replace'](/^(['"])(.*?)\1$/, '$2'), ib5_0 && ib5_0['replace'](/^(['"])(.*?)\1$/, '$2')), gq87s['endDTD'](), d4oz23['index'] + d4oz23[0x0]['length'];
            }
    }
    return -0x1;
}
function gpb_ft(_04ft3, bi0p_5, z326) {
    var bai5xh = _04ft3['indexOf']('?>', bi0p_5);
    if (bai5xh) {
        var yv = _04ft3['substring'](bi0p_5, bai5xh)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (yv) {
            {
                yv[0x0]['length'];
            }
            return z326['processingInstruction'](yv[0x1], yv[0x2]), bai5xh + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function gtd4of() {}
function g_tp04f(xkaw, j2r$) {
    return xkaw['__proto__'] = j2r$, xkaw;
}
function ggl9cs8(yeq7vg, i1hakx) {
    var pib,
        q7cs8g = [],
        oz6r2d = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (oz6r2d['lastIndex'] = i1hakx, oz6r2d['exec'](yeq7vg); pib = oz6r2d['exec'](yeq7vg);) if (q7cs8g['push'](pib), pib[0x1]) return q7cs8g;
}
var g_f05 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    gapb0i = new RegExp('[\\-\\.0-9' + g_f05['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    gptf40_ = new RegExp('^' + g_f05['source'] + gapb0i['source'] + '*(?::' + g_f05['source'] + gapb0i['source'] + '*)?$'),
    gr62$jz = 0x0,
    gaix1 = 0x1,
    gev1wky = 0x2,
    gib5_ = 0x3,
    gcqge7 = 0x4,
    gdzjr = 0x5,
    gc78gqs = 0x6,
    gqlsc = 0x7;
gkv7y['prototype'] = {
    'parse': function (wkve, jr62$u, cv7eqg) {
        var yewkv1 = this['domBuilder'];
        yewkv1['startDocument'](), gftd4(jr62$u, jr62$u = {}), gwhkx1a(wkve, jr62$u, cv7eqg, yewkv1, this['errorHandler']), yewkv1['endDocument']();
    }
}, gtd4of['prototype'] = {
    'setTagName': function (dz26rj) {
        if (!gptf40_['test'](dz26rj)) throw new Error('invalid tagName:' + dz26rj);
        this['tagName'] = dz26rj;
    },
    'add': function (kw1yhe, _pfb5, xk1wa) {
        if (!gptf40_['test'](kw1yhe)) throw new Error('invalid attribute:' + kw1yhe);
        this[this['length']++] = {
            'qName': kw1yhe,
            'value': _pfb5,
            'offset': xk1wa
        };
    },
    'length': 0x0,
    'getLocalName': function (wv1) {
        return this[wv1]['localName'];
    },
    'getLocator': function (sg7q) {
        return this[sg7q]['locator'];
    },
    'getQName': function (dz3o42) {
        return this[dz3o42]['qName'];
    },
    'getURI': function (ftdo3) {
        return this[ftdo3]['uri'];
    },
    'getValue': function (sclg) {
        return this[sclg]['value'];
    }
}, g_tp04f({}, g_tp04f['prototype']) instanceof g_tp04f || (g_tp04f = function (zto3, d62zj) {
    function i5b_p0() {}
    i5b_p0['prototype'] = d62zj, i5b_p0 = new i5b_p0();
    for (d62zj in zto3) i5b_p0[d62zj] = zto3[d62zj];
    return i5b_p0;
}), exports['XMLReader'] = gkv7y;