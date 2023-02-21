var f = wx.$B;
function Sjyp8() {}
function Sesizat(is4vot, bwlqg, ov41_5, rp08xq, rqk8px) {
    function $9hfn(vzt4i) {
        if (vzt4i > 0xffff) {
            vzt4i -= 0x10000;
            var h92$fn = 0xd800 + (vzt4i >> 0xa),
                t4sivo = 0xdc00 + (0x3ff & vzt4i);
            return String['fromCharCode'](h92$fn, t4sivo);
        }
        return String['fromCharCode'](vzt4i);
    }
    function rqxg(tsoiv) {
        var ot541 = tsoiv['slice'](0x1, -0x1);
        return ot541 in ov41_5 ? ov41_5[ot541] : '#' === ot541['charAt'](0x0) ? $9hfn(parseInt(ot541['substr'](0x1)['replace']('x', '0x'))) : (rqk8px['error']('entity not found:' + tsoiv), tsoiv);
    }
    function b6_g(z4tivs) {
        if (z4tivs > _5614) {
            var ow1_6 = is4vot['substring'](_5614, z4tivs)['replace'](/&#?\w+;/g, rqxg);
            xg && wlkbg(_5614), rp08xq['characters'](ow1_6, 0x0, z4tivs - _5614), _5614 = z4tivs;
        }
    }
    function wlkbg($mhnu, w6gl) {
        for (; $mhnu >= eza3 && (w6gl = e3z97['exec'](is4vot));) szivta = w6gl['index'], eza3 = szivta + w6gl[0x0]['length'], xg['lineNumber']++;
        xg['columnNumber'] = $mhnu - szivta + 0x1;
    }
    for (var szivta = 0x0, eza3 = 0x0, e3z97 = /.*(?:\r\n?|\n)|.*$/g, xg = rp08xq['locator'], to54 = [{ 'currentNSMap': bwlqg }], sivza = {}, _5614 = 0x0;;) {
        try {
            var tiov4 = is4vot['indexOf']('<', _5614);
            if (0x0 > tiov4) {
                if (!is4vot['substr'](_5614)['match'](/^\s*$/)) {
                    var h$279f = rp08xq['doc'],
                        gxrbkq = h$279f['createTextNode'](is4vot['substr'](_5614));
                    h$279f['appendChild'](gxrbkq), rp08xq['currentElement'] = gxrbkq;
                }
                return;
            }
            switch (tiov4 > _5614 && b6_g(tiov4), is4vot['charAt'](tiov4 + 0x1)) {
                case '/':
                    var kgl = is4vot['indexOf']('>', tiov4 + 0x3),
                        vsio = is4vot['substring'](tiov4 + 0x2, kgl),
                        gblwqk = to54['pop']();
                    0x0 > kgl ? (vsio = is4vot['substring'](tiov4 + 0x2)['replace'](/[\s<].*/, ''), rqk8px['error']('end tag name: ' + vsio + ' is not complete:' + gblwqk['tagName']), kgl = tiov4 + 0x1 + vsio['length']) : vsio['match'](/\s</) && (vsio = vsio['replace'](/[\s<].*/, ''), rqk8px['error']('end tag name: ' + vsio + ' maybe not complete'), kgl = tiov4 + 0x1 + vsio['length']);
                    var stvi4 = gblwqk['localNSMap'],
                        _w5lg6 = gblwqk['tagName'] == vsio,
                        num$2 = _w5lg6 || gblwqk['tagName'] && gblwqk['tagName']['toLowerCase']() == vsio['toLowerCase']();
                    if (num$2) {
                        if (rp08xq['endElement'](gblwqk['uri'], gblwqk['localName'], vsio), stvi4) {
                            for (var o61_54 in stvi4) rp08xq['endPrefixMapping'](o61_54);
                        }
                        _w5lg6 || rqk8px['fatalError']('end tag name: ' + vsio + ' is not match the current start tagName:' + gblwqk['tagName']);
                    } else to54['push'](gblwqk);
                    kgl++;
                    break;
                case '?':
                    xg && wlkbg(tiov4), kgl = Sostv14(is4vot, tiov4, rp08xq);
                    break;
                case '!':
                    xg && wlkbg(tiov4), kgl = Sprkx8(is4vot, tiov4, rp08xq, rqk8px);
                    break;
                default:
                    xg && wlkbg(tiov4);
                    var yd08px = new Sjd0y(),
                        blk6g = to54[to54['length'] - 0x1]['currentNSMap'],
                        kgl = Sqrgbkl(is4vot, tiov4, yd08px, blk6g, rqxg, rqk8px),
                        glkwb6 = yd08px['length'];
                    if (!yd08px['closed'] && Sgbrkq(is4vot, kgl, yd08px['tagName'], sivza) && (yd08px['closed'] = !0x0, ov41_5['nbsp'] || rqk8px['warning']('unclosed xml attribute')), xg && glkwb6) {
                        for (var rbxkgq = Shf$92(xg, {}), tiszv4 = 0x0; glkwb6 > tiszv4; tiszv4++) {
                            var k8rqxb = yd08px[tiszv4];
                            wlkbg(k8rqxb['offset']), k8rqxb['locator'] = Shf$92(xg, {});
                        }
                        rp08xq['locator'] = rbxkgq, Sxy8pd0(yd08px, rp08xq, blk6g) && to54['push'](yd08px), rp08xq['locator'] = xg;
                    } else Sxy8pd0(yd08px, rp08xq, blk6g) && to54['push'](yd08px);
                    'http://www.w3.org/1999/xhtml' !== yd08px['uri'] || yd08px['closed'] ? kgl++ : kgl = Slkbrgq(is4vot, kgl, yd08px['tagName'], rqxg, rp08xq);
            }
        } catch (t5v14o) {
            rqk8px['error']('element parse error: ' + t5v14o), kgl = -0x1;
        }
        kgl > _5614 ? _5614 = kgl : b6_g(Math['max'](tiov4, _5614) + 0x1);
    }
}
function Shf$92(_wg6, tazsv) {
    return tazsv['lineNumber'] = _wg6['lineNumber'], tazsv['columnNumber'] = _wg6['columnNumber'], tazsv;
}
function Sqrgbkl(vts4, ist4v, w51_o, _wl5g6, $739, q0p8x) {
    for (var xb, qrbkgl, _6lw5 = ++ist4v, f$h9 = Sglwbqk;;) {
        var vt4iz = vts4['charAt'](_6lw5);
        switch (vt4iz) {
            case '=':
                if (f$h9 === Sk6bl) xb = vts4['slice'](ist4v, _6lw5), f$h9 = Sztieas;else {
                    if (f$h9 !== Se239f7) throw new Error('attribute equal must after attrName');
                    f$h9 = Sztieas;
                }
                break;
            case '\x27':
            case '\x22':
                if (f$h9 === Sztieas || f$h9 === Sk6bl) {
                    if (f$h9 === Sk6bl && (q0p8x['warning']('attribute value must after "="'), xb = vts4['slice'](ist4v, _6lw5)), ist4v = _6lw5 + 0x1, _6lw5 = vts4['indexOf'](vt4iz, ist4v), !(_6lw5 > 0x0)) throw new Error('attribute value no end \'' + vt4iz + '\' match');
                    qrbkgl = vts4['slice'](ist4v, _6lw5)['replace'](/&#?\w+;/g, $739), w51_o['add'](xb, qrbkgl, ist4v - 0x1), f$h9 = S$ufh;
                } else {
                    if (f$h9 != Seza7i) throw new Error('attribute value must after "="');
                    qrbkgl = vts4['slice'](ist4v, _6lw5)['replace'](/&#?\w+;/g, $739), w51_o['add'](xb, qrbkgl, ist4v), q0p8x['warning']('attribute "' + xb + '" missed start quot(' + vt4iz + ')!!'), ist4v = _6lw5 + 0x1, f$h9 = S$ufh;
                }
                break;
            case '/':
                switch (f$h9) {
                    case Sglwbqk:
                        w51_o['setTagName'](vts4['slice'](ist4v, _6lw5));
                    case S$ufh:
                    case Sisze3a:
                    case Swb_g6l:
                        f$h9 = Swb_g6l, w51_o['closed'] = !0x0;
                    case Seza7i:
                    case Sk6bl:
                    case Se239f7:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return q0p8x['error']('unexpected end of input'), f$h9 == Sglwbqk && w51_o['setTagName'](vts4['slice'](ist4v, _6lw5)), _6lw5;
            case '>':
                switch (f$h9) {
                    case Sglwbqk:
                        w51_o['setTagName'](vts4['slice'](ist4v, _6lw5));
                    case S$ufh:
                    case Sisze3a:
                    case Swb_g6l:
                        break;
                    case Seza7i:
                    case Sk6bl:
                        qrbkgl = vts4['slice'](ist4v, _6lw5), '/' === qrbkgl['slice'](-0x1) && (w51_o['closed'] = !0x0, qrbkgl = qrbkgl['slice'](0x0, -0x1));
                    case Se239f7:
                        f$h9 === Se239f7 && (qrbkgl = xb), f$h9 == Seza7i ? (q0p8x['warning']('attribute "' + qrbkgl + '" missed quot(")!!'), w51_o['add'](xb, qrbkgl['replace'](/&#?\w+;/g, $739), ist4v)) : ('http://www.w3.org/1999/xhtml' === _wl5g6[''] && qrbkgl['match'](/^(?:disabled|checked|selected)$/i) || q0p8x['warning']('attribute "' + qrbkgl + '" missed value!! "' + qrbkgl + '" instead!!'), w51_o['add'](qrbkgl, qrbkgl, ist4v));
                        break;
                    case Sztieas:
                        throw new Error('attribute value missed!!');
                }
                return _6lw5;
            case '\u0080':
                vt4iz = '\x20';
            default:
                if ('\x20' >= vt4iz) switch (f$h9) {
                    case Sglwbqk:
                        w51_o['setTagName'](vts4['slice'](ist4v, _6lw5)), f$h9 = Sisze3a;
                        break;
                    case Sk6bl:
                        xb = vts4['slice'](ist4v, _6lw5), f$h9 = Se239f7;
                        break;
                    case Seza7i:
                        var qrbkgl = vts4['slice'](ist4v, _6lw5)['replace'](/&#?\w+;/g, $739);
                        q0p8x['warning']('attribute "' + qrbkgl + '" missed quot(")!!'), w51_o['add'](xb, qrbkgl, ist4v);
                    case S$ufh:
                        f$h9 = Sisze3a;
                } else switch (f$h9) {
                    case Se239f7:
                        {
                            w51_o['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === _wl5g6[''] && xb['match'](/^(?:disabled|checked|selected)$/i) || q0p8x['warning']('attribute "' + xb + '" missed value!! "' + xb + '" instead2!!'), w51_o['add'](xb, xb, ist4v), ist4v = _6lw5, f$h9 = Sk6bl;
                        break;
                    case S$ufh:
                        q0p8x['warning']('attribute space is required"' + xb + '\x22!!');
                    case Sisze3a:
                        f$h9 = Sk6bl, ist4v = _6lw5;
                        break;
                    case Sztieas:
                        f$h9 = Seza7i, ist4v = _6lw5;
                        break;
                    case Swb_g6l:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        _6lw5++;
    }
}
function Sxy8pd0(o_164, bg_w6, wkgql) {
    for (var t4siv = o_164['tagName'], g6kwbl = null, bwgkql = o_164['length']; bwgkql--;) {
        var g6wbkl = o_164[bwgkql],
            $2n9f = g6wbkl['qName'],
            ovt541 = g6wbkl['value'],
            m2$ = $2n9f['indexOf'](':');
        if (m2$ > 0x0) var f2n$uh = g6wbkl['prefix'] = $2n9f['slice'](0x0, m2$),
            wb_l = $2n9f['slice'](m2$ + 0x1),
            muh$ = 'xmlns' === f2n$uh && wb_l;else wb_l = $2n9f, f2n$uh = null, muh$ = 'xmlns' === $2n9f && '';
        g6wbkl['localName'] = wb_l, muh$ !== !0x1 && (null == g6kwbl && (g6kwbl = {}, Smnh$u2(wkgql, wkgql = {})), wkgql[muh$] = g6kwbl[muh$] = ovt541, g6wbkl['uri'] = 'http://www.w3.org/2000/xmlns/', bg_w6['startPrefixMapping'](muh$, ovt541));
    }
    for (var bwgkql = o_164['length']; bwgkql--;) {
        g6wbkl = o_164[bwgkql];
        var f2n$uh = g6wbkl['prefix'];
        f2n$uh && ('xml' === f2n$uh && (g6wbkl['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== f2n$uh && (g6wbkl['uri'] = wkgql[f2n$uh || '']));
    }
    var m2$ = t4siv['indexOf'](':');
    m2$ > 0x0 ? (f2n$uh = o_164['prefix'] = t4siv['slice'](0x0, m2$), wb_l = o_164['localName'] = t4siv['slice'](m2$ + 0x1)) : (f2n$uh = null, wb_l = o_164['localName'] = t4siv);
    var qpx = o_164['uri'] = wkgql[f2n$uh || ''];
    if (bg_w6['startElement'](qpx, wb_l, t4siv, o_164), !o_164['closed']) return o_164['currentNSMap'] = wkgql, o_164['localNSMap'] = g6kwbl, !0x0;
    if (bg_w6['endElement'](qpx, wb_l, t4siv), g6kwbl) {
        for (f2n$uh in g6kwbl) bg_w6['endPrefixMapping'](f2n$uh);
    }
}
function Slkbrgq(wbg_l, gwklqb, rp0x8, _l6g5, aiez7) {
    if (/^(?:script|textarea)$/i['test'](rp0x8)) {
        var glw6b = wbg_l['indexOf']('</' + rp0x8 + '>', gwklqb),
            ez9a73 = wbg_l['substring'](gwklqb + 0x1, glw6b);
        if (/[&<]/['test'](ez9a73)) return (/^script$/i['test'](rp0x8) ? (aiez7['characters'](ez9a73, 0x0, ez9a73['length']), glw6b) : (ez9a73 = ez9a73['replace'](/&#?\w+;/g, _l6g5), aiez7['characters'](ez9a73, 0x0, ez9a73['length']), glw6b)
        );
    }
    return gwklqb + 0x1;
}
function Sgbrkq(l65wg, f2hn$9, grbxq, o1vt) {
    var brglk = o1vt[grbxq];
    return null == brglk && (brglk = l65wg['lastIndexOf']('</' + grbxq + '>'), f2hn$9 > brglk && (brglk = l65wg['lastIndexOf']('</' + grbxq)), o1vt[grbxq] = brglk), f2hn$9 > brglk;
}
function Smnh$u2(_gl56, stvaiz) {
    for (var kwqg in _gl56) stvaiz[kwqg] = _gl56[kwqg];
}
function Sprkx8(zvsia, r0qp8, lgb_6w, j0p8d) {
    var rqx08p = zvsia['charAt'](r0qp8 + 0x2);
    switch (rqx08p) {
        case '-':
            if ('-' === zvsia['charAt'](r0qp8 + 0x3)) {
                var pxq08 = zvsia['indexOf']('-->', r0qp8 + 0x4);
                return pxq08 > r0qp8 ? (lgb_6w['comment'](zvsia, r0qp8 + 0x4, pxq08 - r0qp8 - 0x4), pxq08 + 0x3) : (j0p8d['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == zvsia['substr'](r0qp8 + 0x3, 0x6)) {
                var pxq08 = zvsia['indexOf'](']]>', r0qp8 + 0x9);
                return lgb_6w['startCDATA'](), lgb_6w['characters'](zvsia, r0qp8 + 0x9, pxq08 - r0qp8 - 0x9), lgb_6w['endCDATA'](), pxq08 + 0x3;
            }
            var wo1 = Sovts4(zvsia, r0qp8),
                votsi4 = wo1['length'];
            if (votsi4 > 0x1 && /!doctype/i['test'](wo1[0x0][0x0])) {
                var f23$7 = wo1[0x1][0x0],
                    f9$32 = votsi4 > 0x3 && /^public$/i['test'](wo1[0x2][0x0]) && wo1[0x3][0x0],
                    qxr0 = votsi4 > 0x4 && wo1[0x4][0x0],
                    tv45o = wo1[votsi4 - 0x1];
                return lgb_6w['startDTD'](f23$7, f9$32 && f9$32['replace'](/^(['"])(.*?)\1$/, '$2'), qxr0 && qxr0['replace'](/^(['"])(.*?)\1$/, '$2')), lgb_6w['endDTD'](), tv45o['index'] + tv45o[0x0]['length'];
            }
    }
    return -0x1;
}
function Sostv14(kp8xrq, l_6b, e923f7) {
    var sztv4 = kp8xrq['indexOf']('?>', l_6b);
    if (sztv4) {
        var $h2ufn = kp8xrq['substring'](l_6b, sztv4)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if ($h2ufn) {
            {
                $h2ufn[0x0]['length'];
            }
            return e923f7['processingInstruction']($h2ufn[0x1], $h2ufn[0x2]), sztv4 + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function Sjd0y() {}
function Sasei(i37ez, d80jp) {
    return i37ez['__proto__'] = d80jp, i37ez;
}
function Sovts4(kxprq, zi3aes) {
    var teaizs,
        tis4zv = [],
        gbxqr = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (gbxqr['lastIndex'] = zi3aes, gbxqr['exec'](kxprq); teaizs = gbxqr['exec'](kxprq);) if (tis4zv['push'](teaizs), teaizs[0x1]) return tis4zv;
}
var Sl_156w = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    Sbrgxqk = new RegExp('[\\-\\.0-9' + Sl_156w['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    Sa3z79 = new RegExp('^' + Sl_156w['source'] + Sbrgxqk['source'] + '*(?::' + Sl_156w['source'] + Sbrgxqk['source'] + '*)?$'),
    Sglwbqk = 0x0,
    Sk6bl = 0x1,
    Se239f7 = 0x2,
    Sztieas = 0x3,
    Seza7i = 0x4,
    S$ufh = 0x5,
    Sisze3a = 0x6,
    Swb_g6l = 0x7;
Sjyp8['prototype'] = {
    'parse': function (vo1t5, vzia, pyxd) {
        var dyp80j = this['domBuilder'];
        dyp80j['startDocument'](), Smnh$u2(vzia, vzia = {}), Sesizat(vo1t5, vzia, pyxd, dyp80j, this['errorHandler']), dyp80j['endDocument']();
    }
}, Sjd0y['prototype'] = {
    'setTagName': function (l_wgb6) {
        if (!Sa3z79['test'](l_wgb6)) throw new Error('invalid tagName:' + l_wgb6);
        this['tagName'] = l_wgb6;
    },
    'add': function (jypd08, _l5w6g, tsiez) {
        if (!Sa3z79['test'](jypd08)) throw new Error('invalid attribute:' + jypd08);
        this[this['length']++] = {
            'qName': jypd08,
            'value': _l5w6g,
            'offset': tsiez
        };
    },
    'length': 0x0,
    'getLocalName': function (blgqk) {
        return this[blgqk]['localName'];
    },
    'getLocator': function (qklbrg) {
        return this[qklbrg]['locator'];
    },
    'getQName': function (to154) {
        return this[to154]['qName'];
    },
    'getURI': function (nh$f) {
        return this[nh$f]['uri'];
    },
    'getValue': function (o4vit) {
        return this[o4vit]['value'];
    }
}, Sasei({}, Sasei['prototype']) instanceof Sasei || (Sasei = function (lbrkqg, v5o1_) {
    function n2mhu() {}
    n2mhu['prototype'] = v5o1_, n2mhu = new n2mhu();
    for (v5o1_ in lbrkqg) n2mhu[v5o1_] = lbrkqg[v5o1_];
    return n2mhu;
}), exports['XMLReader'] = Sjyp8;