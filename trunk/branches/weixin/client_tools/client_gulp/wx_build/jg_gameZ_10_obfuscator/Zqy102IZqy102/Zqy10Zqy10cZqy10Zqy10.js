var J = wx.h$;
function gqbok5() {}
function ggbdk60($w9sf, zhet_p, jnx7vi, ws9f$2, dt68g) {
    function f2w9_$(um34l) {
        if (um34l > 0xffff) {
            um34l -= 0x10000;
            var gbqk = 0xd800 + (um34l >> 0xa),
                ep_z2h = 0xdc00 + (0x3ff & um34l);
            return String['fromCharCode'](gbqk, ep_z2h);
        }
        return String['fromCharCode'](um34l);
    }
    function rxyv7j(_zhe) {
        var yqo05b = _zhe['slice'](0x1, -0x1);
        return yqo05b in jnx7vi ? jnx7vi[yqo05b] : '#' === yqo05b['charAt'](0x0) ? f2w9_$(parseInt(yqo05b['substr'](0x1)['replace']('x', '0x'))) : (dt68g['error']('entity not found:' + _zhe), _zhe);
    }
    function n4u1a(_ehtp) {
        if (_ehtp > una34) {
            var db6g0k = $w9sf['substring'](una34, _ehtp)['replace'](/&#?\w+;/g, rxyv7j);
            vrx7ji && an3u4(una34), ws9f$2['characters'](db6g0k, 0x0, _ehtp - una34), una34 = _ehtp;
        }
    }
    function an3u4(_ezhp2, i7vrj) {
        for (; _ezhp2 >= iu31n && (i7vrj = kbg0dq['exec']($w9sf));) dtcg = i7vrj['index'], iu31n = dtcg + i7vrj[0x0]['length'], vrx7ji['lineNumber']++;
        vrx7ji['columnNumber'] = _ezhp2 - dtcg + 0x1;
    }
    for (var dtcg = 0x0, iu31n = 0x0, kbg0dq = /.*(?:\r\n?|\n)|.*$/g, vrx7ji = ws9f$2['locator'], vjix7r = [{ 'currentNSMap': zhet_p }], yvqr5 = {}, una34 = 0x0;;) {
        try {
            var w_92$ = $w9sf['indexOf']('<', una34);
            if (0x0 > w_92$) {
                if (!$w9sf['substr'](una34)['match'](/^\s*$/)) {
                    var jx7ryv = ws9f$2['doc'],
                        _ph = jx7ryv['createTextNode']($w9sf['substr'](una34));
                    jx7ryv['appendChild'](_ph), ws9f$2['currentElement'] = _ph;
                }
                return;
            }
            switch (w_92$ > una34 && n4u1a(w_92$), $w9sf['charAt'](w_92$ + 0x1)) {
                case '/':
                    var zc6ht = $w9sf['indexOf']('>', w_92$ + 0x3),
                        s$w92f = $w9sf['substring'](w_92$ + 0x2, zc6ht),
                        v7ixrj = vjix7r['pop']();
                    0x0 > zc6ht ? (s$w92f = $w9sf['substring'](w_92$ + 0x2)['replace'](/[\s<].*/, ''), dt68g['error']('end tag name: ' + s$w92f + ' is not complete:' + v7ixrj['tagName']), zc6ht = w_92$ + 0x1 + s$w92f['length']) : s$w92f['match'](/\s</) && (s$w92f = s$w92f['replace'](/[\s<].*/, ''), dt68g['error']('end tag name: ' + s$w92f + ' maybe not complete'), zc6ht = w_92$ + 0x1 + s$w92f['length']);
                    var z8htec = v7ixrj['localNSMap'],
                        _tpezh = v7ixrj['tagName'] == s$w92f,
                        rjvx7 = _tpezh || v7ixrj['tagName'] && v7ixrj['tagName']['toLowerCase']() == s$w92f['toLowerCase']();
                    if (rjvx7) {
                        if (ws9f$2['endElement'](v7ixrj['uri'], v7ixrj['localName'], s$w92f), z8htec) {
                            for (var vxr7j in z8htec) ws9f$2['endPrefixMapping'](vxr7j);
                        }
                        _tpezh || dt68g['fatalError']('end tag name: ' + s$w92f + ' is not match the current start tagName:' + v7ixrj['tagName']);
                    } else vjix7r['push'](v7ixrj);
                    zc6ht++;
                    break;
                case '?':
                    vrx7ji && an3u4(w_92$), zc6ht = glm43ua($w9sf, w_92$, ws9f$2);
                    break;
                case '!':
                    vrx7ji && an3u4(w_92$), zc6ht = gj7ixv($w9sf, w_92$, ws9f$2, dt68g);
                    break;
                default:
                    vrx7ji && an3u4(w_92$);
                    var thc8d6 = new gzpht_e(),
                        i7nx4 = vjix7r[vjix7r['length'] - 0x1]['currentNSMap'],
                        zc6ht = goqyb50($w9sf, w_92$, thc8d6, i7nx4, rxyv7j, dt68g),
                        w$fs = thc8d6['length'];
                    if (!thc8d6['closed'] && gt8zh($w9sf, zc6ht, thc8d6['tagName'], yvqr5) && (thc8d6['closed'] = !0x0, jnx7vi['nbsp'] || dt68g['warning']('unclosed xml attribute')), vrx7ji && w$fs) {
                        for (var orvj5y = gb0gd6(vrx7ji, {}), y50bo = 0x0; w$fs > y50bo; y50bo++) {
                            var _e92 = thc8d6[y50bo];
                            an3u4(_e92['offset']), _e92['locator'] = gb0gd6(vrx7ji, {});
                        }
                        ws9f$2['locator'] = orvj5y, gxjiv7r(thc8d6, ws9f$2, i7nx4) && vjix7r['push'](thc8d6), ws9f$2['locator'] = vrx7ji;
                    } else gxjiv7r(thc8d6, ws9f$2, i7nx4) && vjix7r['push'](thc8d6);
                    'http://www.w3.org/1999/xhtml' !== thc8d6['uri'] || thc8d6['closed'] ? zc6ht++ : zc6ht = gz6cht8($w9sf, zc6ht, thc8d6['tagName'], rxyv7j, ws9f$2);
            }
        } catch (au31) {
            dt68g['error']('element parse error: ' + au31), zc6ht = -0x1;
        }
        zc6ht > una34 ? una34 = zc6ht : n4u1a(Math['max'](w_92$, una34) + 0x1);
    }
}
function gb0gd6(n3iu1, s29$f) {
    return s29$f['lineNumber'] = n3iu1['lineNumber'], s29$f['columnNumber'] = n3iu1['columnNumber'], s29$f;
}
function goqyb50(kb0q5g, bqk50o, $9f_2w, h2e_z, p2h_z, vjxry7) {
    for (var qbok50, am34ul, by05o = ++bqk50o, e_9p2 = gcptez;;) {
        var qry5 = kb0q5g['charAt'](by05o);
        switch (qry5) {
            case '=':
                if (e_9p2 === g_ez2) qbok50 = kb0q5g['slice'](bqk50o, by05o), e_9p2 = gtecpz;else {
                    if (e_9p2 !== gu3i14n) throw new Error('attribute equal must after attrName');
                    e_9p2 = gtecpz;
                }
                break;
            case '\x27':
            case '\x22':
                if (e_9p2 === gtecpz || e_9p2 === g_ez2) {
                    if (e_9p2 === g_ez2 && (vjxry7['warning']('attribute value must after "="'), qbok50 = kb0q5g['slice'](bqk50o, by05o)), bqk50o = by05o + 0x1, by05o = kb0q5g['indexOf'](qry5, bqk50o), !(by05o > 0x0)) throw new Error('attribute value no end \'' + qry5 + '\' match');
                    am34ul = kb0q5g['slice'](bqk50o, by05o)['replace'](/&#?\w+;/g, p2h_z), $9f_2w['add'](qbok50, am34ul, bqk50o - 0x1), e_9p2 = gjyx7rv;
                } else {
                    if (e_9p2 != ga413u) throw new Error('attribute value must after "="');
                    am34ul = kb0q5g['slice'](bqk50o, by05o)['replace'](/&#?\w+;/g, p2h_z), $9f_2w['add'](qbok50, am34ul, bqk50o), vjxry7['warning']('attribute "' + qbok50 + '" missed start quot(' + qry5 + ')!!'), bqk50o = by05o + 0x1, e_9p2 = gjyx7rv;
                }
                break;
            case '/':
                switch (e_9p2) {
                    case gcptez:
                        $9f_2w['setTagName'](kb0q5g['slice'](bqk50o, by05o));
                    case gjyx7rv:
                    case gkgd068:
                    case gck68g:
                        e_9p2 = gck68g, $9f_2w['closed'] = !0x0;
                    case ga413u:
                    case g_ez2:
                    case gu3i14n:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return vjxry7['error']('unexpected end of input'), e_9p2 == gcptez && $9f_2w['setTagName'](kb0q5g['slice'](bqk50o, by05o)), by05o;
            case '>':
                switch (e_9p2) {
                    case gcptez:
                        $9f_2w['setTagName'](kb0q5g['slice'](bqk50o, by05o));
                    case gjyx7rv:
                    case gkgd068:
                    case gck68g:
                        break;
                    case ga413u:
                    case g_ez2:
                        am34ul = kb0q5g['slice'](bqk50o, by05o), '/' === am34ul['slice'](-0x1) && ($9f_2w['closed'] = !0x0, am34ul = am34ul['slice'](0x0, -0x1));
                    case gu3i14n:
                        e_9p2 === gu3i14n && (am34ul = qbok50), e_9p2 == ga413u ? (vjxry7['warning']('attribute "' + am34ul + '" missed quot(")!!'), $9f_2w['add'](qbok50, am34ul['replace'](/&#?\w+;/g, p2h_z), bqk50o)) : ('http://www.w3.org/1999/xhtml' === h2e_z[''] && am34ul['match'](/^(?:disabled|checked|selected)$/i) || vjxry7['warning']('attribute "' + am34ul + '" missed value!! "' + am34ul + '" instead!!'), $9f_2w['add'](am34ul, am34ul, bqk50o));
                        break;
                    case gtecpz:
                        throw new Error('attribute value missed!!');
                }
                return by05o;
            case '\u0080':
                qry5 = '\x20';
            default:
                if ('\x20' >= qry5) switch (e_9p2) {
                    case gcptez:
                        $9f_2w['setTagName'](kb0q5g['slice'](bqk50o, by05o)), e_9p2 = gkgd068;
                        break;
                    case g_ez2:
                        qbok50 = kb0q5g['slice'](bqk50o, by05o), e_9p2 = gu3i14n;
                        break;
                    case ga413u:
                        var am34ul = kb0q5g['slice'](bqk50o, by05o)['replace'](/&#?\w+;/g, p2h_z);
                        vjxry7['warning']('attribute "' + am34ul + '" missed quot(")!!'), $9f_2w['add'](qbok50, am34ul, bqk50o);
                    case gjyx7rv:
                        e_9p2 = gkgd068;
                } else switch (e_9p2) {
                    case gu3i14n:
                        {
                            $9f_2w['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === h2e_z[''] && qbok50['match'](/^(?:disabled|checked|selected)$/i) || vjxry7['warning']('attribute "' + qbok50 + '" missed value!! "' + qbok50 + '" instead2!!'), $9f_2w['add'](qbok50, qbok50, bqk50o), bqk50o = by05o, e_9p2 = g_ez2;
                        break;
                    case gjyx7rv:
                        vjxry7['warning']('attribute space is required"' + qbok50 + '\x22!!');
                    case gkgd068:
                        e_9p2 = g_ez2, bqk50o = by05o;
                        break;
                    case gtecpz:
                        e_9p2 = ga413u, bqk50o = by05o;
                        break;
                    case gck68g:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        by05o++;
    }
}
function gxjiv7r(s$9, q0bdk, jxin71) {
    for (var j7rvi = s$9['tagName'], dtg = null, xijvr = s$9['length']; xijvr--;) {
        var d6hct8 = s$9[xijvr],
            dg6ct = d6hct8['qName'],
            ixn7 = d6hct8['value'],
            _9wp2 = dg6ct['indexOf'](':');
        if (_9wp2 > 0x0) var fw9$_2 = d6hct8['prefix'] = dg6ct['slice'](0x0, _9wp2),
            sf$9w2 = dg6ct['slice'](_9wp2 + 0x1),
            bkgq50 = 'xmlns' === fw9$_2 && sf$9w2;else sf$9w2 = dg6ct, fw9$_2 = null, bkgq50 = 'xmlns' === dg6ct && '';
        d6hct8['localName'] = sf$9w2, bkgq50 !== !0x1 && (null == dtg && (dtg = {}, gryvjo5(jxin71, jxin71 = {})), jxin71[bkgq50] = dtg[bkgq50] = ixn7, d6hct8['uri'] = 'http://www.w3.org/2000/xmlns/', q0bdk['startPrefixMapping'](bkgq50, ixn7));
    }
    for (var xijvr = s$9['length']; xijvr--;) {
        d6hct8 = s$9[xijvr];
        var fw9$_2 = d6hct8['prefix'];
        fw9$_2 && ('xml' === fw9$_2 && (d6hct8['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== fw9$_2 && (d6hct8['uri'] = jxin71[fw9$_2 || '']));
    }
    var _9wp2 = j7rvi['indexOf'](':');
    _9wp2 > 0x0 ? (fw9$_2 = s$9['prefix'] = j7rvi['slice'](0x0, _9wp2), sf$9w2 = s$9['localName'] = j7rvi['slice'](_9wp2 + 0x1)) : (fw9$_2 = null, sf$9w2 = s$9['localName'] = j7rvi);
    var h_2ep = s$9['uri'] = jxin71[fw9$_2 || ''];
    if (q0bdk['startElement'](h_2ep, sf$9w2, j7rvi, s$9), !s$9['closed']) return s$9['currentNSMap'] = jxin71, s$9['localNSMap'] = dtg, !0x0;
    if (q0bdk['endElement'](h_2ep, sf$9w2, j7rvi), dtg) {
        for (fw9$_2 in dtg) q0bdk['endPrefixMapping'](fw9$_2);
    }
}
function gz6cht8(pe2zh, ua43lm, q5, oq50b, x1n4i7) {
    if (/^(?:script|textarea)$/i['test'](q5)) {
        var _9p2w = pe2zh['indexOf']('</' + q5 + '>', ua43lm),
            n43a1 = pe2zh['substring'](ua43lm + 0x1, _9p2w);
        if (/[&<]/['test'](n43a1)) return (/^script$/i['test'](q5) ? (x1n4i7['characters'](n43a1, 0x0, n43a1['length']), _9p2w) : (n43a1 = n43a1['replace'](/&#?\w+;/g, oq50b), x1n4i7['characters'](n43a1, 0x0, n43a1['length']), _9p2w)
        );
    }
    return ua43lm + 0x1;
}
function gt8zh(ryqb, th86cz, w2z_e, $2fs) {
    var d8t6h = $2fs[w2z_e];
    return null == d8t6h && (d8t6h = ryqb['lastIndexOf']('</' + w2z_e + '>'), th86cz > d8t6h && (d8t6h = ryqb['lastIndexOf']('</' + w2z_e)), $2fs[w2z_e] = d8t6h), th86cz > d8t6h;
}
function gryvjo5(kgb0dq, u3mal4) {
    for (var ezpth in kgb0dq) u3mal4[ezpth] = kgb0dq[ezpth];
}
function gj7ixv(c86htd, yrq5ob, k6g8d0, xi7j1) {
    var y5qbo = c86htd['charAt'](yrq5ob + 0x2);
    switch (y5qbo) {
        case '-':
            if ('-' === c86htd['charAt'](yrq5ob + 0x3)) {
                var i1u43 = c86htd['indexOf']('-->', yrq5ob + 0x4);
                return i1u43 > yrq5ob ? (k6g8d0['comment'](c86htd, yrq5ob + 0x4, i1u43 - yrq5ob - 0x4), i1u43 + 0x3) : (xi7j1['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == c86htd['substr'](yrq5ob + 0x3, 0x6)) {
                var i1u43 = c86htd['indexOf'](']]>', yrq5ob + 0x9);
                return k6g8d0['startCDATA'](), k6g8d0['characters'](c86htd, yrq5ob + 0x9, i1u43 - yrq5ob - 0x9), k6g8d0['endCDATA'](), i1u43 + 0x3;
            }
            var czph = gfpw29(c86htd, yrq5ob),
                ezpht_ = czph['length'];
            if (ezpht_ > 0x1 && /!doctype/i['test'](czph[0x0][0x0])) {
                var ws2$f = czph[0x1][0x0],
                    k0b6g = ezpht_ > 0x3 && /^public$/i['test'](czph[0x2][0x0]) && czph[0x3][0x0],
                    lum34a = ezpht_ > 0x4 && czph[0x4][0x0],
                    ji17n = czph[ezpht_ - 0x1];
                return k6g8d0['startDTD'](ws2$f, k0b6g && k0b6g['replace'](/^(['"])(.*?)\1$/, '$2'), lum34a && lum34a['replace'](/^(['"])(.*?)\1$/, '$2')), k6g8d0['endDTD'](), ji17n['index'] + ji17n[0x0]['length'];
            }
    }
    return -0x1;
}
function glm43ua(d6k8c, et8czh, i34n) {
    var _wf2p = d6k8c['indexOf']('?>', et8czh);
    if (_wf2p) {
        var fwp = d6k8c['substring'](et8czh, _wf2p)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (fwp) {
            {
                fwp[0x0]['length'];
            }
            return i34n['processingInstruction'](fwp[0x1], fwp[0x2]), _wf2p + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function gzpht_e() {}
function g_pw92e(rxj7vi, $f29w) {
    return rxj7vi['__proto__'] = $f29w, rxj7vi;
}
function gfpw29(fp9w2_, _h) {
    var dk8g60,
        _zht = [],
        t86dc = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (t86dc['lastIndex'] = _h, t86dc['exec'](fp9w2_); dk8g60 = t86dc['exec'](fp9w2_);) if (_zht['push'](dk8g60), dk8g60[0x1]) return _zht;
}
var gz8h = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    gz8cth = new RegExp('[\\-\\.0-9' + gz8h['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    groyj5 = new RegExp('^' + gz8h['source'] + gz8cth['source'] + '*(?::' + gz8h['source'] + gz8cth['source'] + '*)?$'),
    gcptez = 0x0,
    g_ez2 = 0x1,
    gu3i14n = 0x2,
    gtecpz = 0x3,
    ga413u = 0x4,
    gjyx7rv = 0x5,
    gkgd068 = 0x6,
    gck68g = 0x7;
gqbok5['prototype'] = {
    'parse': function (dhc6t8, dt8g6, jyr7vo) {
        var p9_fw = this['domBuilder'];
        p9_fw['startDocument'](), gryvjo5(dt8g6, dt8g6 = {}), ggbdk60(dhc6t8, dt8g6, jyr7vo, p9_fw, this['errorHandler']), p9_fw['endDocument']();
    }
}, gzpht_e['prototype'] = {
    'setTagName': function (obk5) {
        if (!groyj5['test'](obk5)) throw new Error('invalid tagName:' + obk5);
        this['tagName'] = obk5;
    },
    'add': function (rvo5yq, _pez, yq5vro) {
        if (!groyj5['test'](rvo5yq)) throw new Error('invalid attribute:' + rvo5yq);
        this[this['length']++] = {
            'qName': rvo5yq,
            'value': _pez,
            'offset': yq5vro
        };
    },
    'length': 0x0,
    'getLocalName': function (yv5jo) {
        return this[yv5jo]['localName'];
    },
    'getLocator': function (q0kbo) {
        return this[q0kbo]['locator'];
    },
    'getQName': function (q50gk) {
        return this[q50gk]['qName'];
    },
    'getURI': function (nu34a) {
        return this[nu34a]['uri'];
    },
    'getValue': function (f$9w2s) {
        return this[f$9w2s]['value'];
    }
}, g_pw92e({}, g_pw92e['prototype']) instanceof g_pw92e || (g_pw92e = function (qob5, qo0k) {
    function iu14n3() {}
    iu14n3['prototype'] = qo0k, iu14n3 = new iu14n3();
    for (qo0k in qob5) iu14n3[qo0k] = qob5[qo0k];
    return iu14n3;
}), exports['XMLReader'] = gqbok5;