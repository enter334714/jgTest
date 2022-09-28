var J = wx.h$;
function go5bq0y() {}
function gechz8(xni417, l13ua4, n417xi, z86t, ix1n4) {
    function n1au(_hptez) {
        if (_hptez > 0xffff) {
            _hptez -= 0x10000;
            var yj5vro = 0xd800 + (_hptez >> 0xa),
                ez8c = 0xdc00 + (0x3ff & _hptez);
            return String['fromCharCode'](yj5vro, ez8c);
        }
        return String['fromCharCode'](_hptez);
    }
    function bdq0gk(ry5vo) {
        var _w9$ = ry5vo['slice'](0x1, -0x1);
        return _w9$ in n417xi ? n417xi[_w9$] : '#' === _w9$['charAt'](0x0) ? n1au(parseInt(_w9$['substr'](0x1)['replace']('x', '0x'))) : (ix1n4['error']('entity not found:' + ry5vo), ry5vo);
    }
    function w2ep(yxr7jv) {
        if (yxr7jv > qbo0y) {
            var xyjv = xni417['substring'](qbo0y, yxr7jv)['replace'](/&#?\w+;/g, bdq0gk);
            x17ij && zc6ht8(qbo0y), z86t['characters'](xyjv, 0x0, yxr7jv - qbo0y), qbo0y = yxr7jv;
        }
    }
    function zc6ht8(ht6cd8, tgcd8) {
        for (; ht6cd8 >= oby5q && (tgcd8 = s9$w['exec'](xni417));) h6t8cd = tgcd8['index'], oby5q = h6t8cd + tgcd8[0x0]['length'], x17ij['lineNumber']++;
        x17ij['columnNumber'] = ht6cd8 - h6t8cd + 0x1;
    }
    for (var h6t8cd = 0x0, oby5q = 0x0, s9$w = /.*(?:\r\n?|\n)|.*$/g, x17ij = z86t['locator'], f9w_$ = [{ 'currentNSMap': l13ua4 }], bdqkg = {}, qbo0y = 0x0;;) {
        try {
            var tche = xni417['indexOf']('<', qbo0y);
            if (0x0 > tche) {
                if (!xni417['substr'](qbo0y)['match'](/^\s*$/)) {
                    var zp_et = z86t['doc'],
                        jv7ryx = zp_et['createTextNode'](xni417['substr'](qbo0y));
                    zp_et['appendChild'](jv7ryx), z86t['currentElement'] = jv7ryx;
                }
                return;
            }
            switch (tche > qbo0y && w2ep(tche), xni417['charAt'](tche + 0x1)) {
                case '/':
                    var e_hp = xni417['indexOf']('>', tche + 0x3),
                        k6gd8 = xni417['substring'](tche + 0x2, e_hp),
                        teph_z = f9w_$['pop']();
                    0x0 > e_hp ? (k6gd8 = xni417['substring'](tche + 0x2)['replace'](/[\s<].*/, ''), ix1n4['error']('end tag name: ' + k6gd8 + ' is not complete:' + teph_z['tagName']), e_hp = tche + 0x1 + k6gd8['length']) : k6gd8['match'](/\s</) && (k6gd8 = k6gd8['replace'](/[\s<].*/, ''), ix1n4['error']('end tag name: ' + k6gd8 + ' maybe not complete'), e_hp = tche + 0x1 + k6gd8['length']);
                    var rvojy5 = teph_z['localNSMap'],
                        we92 = teph_z['tagName'] == k6gd8,
                        ji1n7 = we92 || teph_z['tagName'] && teph_z['tagName']['toLowerCase']() == k6gd8['toLowerCase']();
                    if (ji1n7) {
                        if (z86t['endElement'](teph_z['uri'], teph_z['localName'], k6gd8), rvojy5) {
                            for (var pcze in rvojy5) z86t['endPrefixMapping'](pcze);
                        }
                        we92 || ix1n4['fatalError']('end tag name: ' + k6gd8 + ' is not match the current start tagName:' + teph_z['tagName']);
                    } else f9w_$['push'](teph_z);
                    e_hp++;
                    break;
                case '?':
                    x17ij && zc6ht8(tche), e_hp = gtg6cd(xni417, tche, z86t);
                    break;
                case '!':
                    x17ij && zc6ht8(tche), e_hp = gnjxiv7(xni417, tche, z86t, ix1n4);
                    break;
                default:
                    x17ij && zc6ht8(tche);
                    var _fw$ = new gqyor5(),
                        cg8td = f9w_$[f9w_$['length'] - 0x1]['currentNSMap'],
                        e_hp = ggq0b(xni417, tche, _fw$, cg8td, bdq0gk, ix1n4),
                        f2pw_ = _fw$['length'];
                    if (!_fw$['closed'] && gc8he(xni417, e_hp, _fw$['tagName'], bdqkg) && (_fw$['closed'] = !0x0, n417xi['nbsp'] || ix1n4['warning']('unclosed xml attribute')), x17ij && f2pw_) {
                        for (var kb5oq = gaum(x17ij, {}), ctehzp = 0x0; f2pw_ > ctehzp; ctehzp++) {
                            var a431l = _fw$[ctehzp];
                            zc6ht8(a431l['offset']), a431l['locator'] = gaum(x17ij, {});
                        }
                        z86t['locator'] = kb5oq, grjvxi7(_fw$, z86t, cg8td) && f9w_$['push'](_fw$), z86t['locator'] = x17ij;
                    } else grjvxi7(_fw$, z86t, cg8td) && f9w_$['push'](_fw$);
                    'http://www.w3.org/1999/xhtml' !== _fw$['uri'] || _fw$['closed'] ? e_hp++ : e_hp = gu34an(xni417, e_hp, _fw$['tagName'], bdq0gk, z86t);
            }
        } catch (u34i1n) {
            ix1n4['error']('element parse error: ' + u34i1n), e_hp = -0x1;
        }
        e_hp > qbo0y ? qbo0y = e_hp : w2ep(Math['max'](tche, qbo0y) + 0x1);
    }
}
function gaum(ht6z8c, wze_2) {
    return wze_2['lineNumber'] = ht6z8c['lineNumber'], wze_2['columnNumber'] = ht6z8c['columnNumber'], wze_2;
}
function ggq0b(ok0qb5, xrv7ji, dg60k, xiv7, y7jrvo, hetz_) {
    for (var i13nx, nv7i, nui314 = ++xrv7ji, xvr7y = gn13ui;;) {
        var ob50yq = ok0qb5['charAt'](nui314);
        switch (ob50yq) {
            case '=':
                if (xvr7y === gam3l4) i13nx = ok0qb5['slice'](xrv7ji, nui314), xvr7y = gu4al3m;else {
                    if (xvr7y !== ggbk50q) throw new Error('attribute equal must after attrName');
                    xvr7y = gu4al3m;
                }
                break;
            case '\x27':
            case '\x22':
                if (xvr7y === gu4al3m || xvr7y === gam3l4) {
                    if (xvr7y === gam3l4 && (hetz_['warning']('attribute value must after "="'), i13nx = ok0qb5['slice'](xrv7ji, nui314)), xrv7ji = nui314 + 0x1, nui314 = ok0qb5['indexOf'](ob50yq, xrv7ji), !(nui314 > 0x0)) throw new Error('attribute value no end \'' + ob50yq + '\' match');
                    nv7i = ok0qb5['slice'](xrv7ji, nui314)['replace'](/&#?\w+;/g, y7jrvo), dg60k['add'](i13nx, nv7i, xrv7ji - 0x1), xvr7y = gr5vyq;
                } else {
                    if (xvr7y != g_p2he) throw new Error('attribute value must after "="');
                    nv7i = ok0qb5['slice'](xrv7ji, nui314)['replace'](/&#?\w+;/g, y7jrvo), dg60k['add'](i13nx, nv7i, xrv7ji), hetz_['warning']('attribute "' + i13nx + '" missed start quot(' + ob50yq + ')!!'), xrv7ji = nui314 + 0x1, xvr7y = gr5vyq;
                }
                break;
            case '/':
                switch (xvr7y) {
                    case gn13ui:
                        dg60k['setTagName'](ok0qb5['slice'](xrv7ji, nui314));
                    case gr5vyq:
                    case gy5oq:
                    case grvyjo:
                        xvr7y = grvyjo, dg60k['closed'] = !0x0;
                    case g_p2he:
                    case gam3l4:
                    case ggbk50q:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return hetz_['error']('unexpected end of input'), xvr7y == gn13ui && dg60k['setTagName'](ok0qb5['slice'](xrv7ji, nui314)), nui314;
            case '>':
                switch (xvr7y) {
                    case gn13ui:
                        dg60k['setTagName'](ok0qb5['slice'](xrv7ji, nui314));
                    case gr5vyq:
                    case gy5oq:
                    case grvyjo:
                        break;
                    case g_p2he:
                    case gam3l4:
                        nv7i = ok0qb5['slice'](xrv7ji, nui314), '/' === nv7i['slice'](-0x1) && (dg60k['closed'] = !0x0, nv7i = nv7i['slice'](0x0, -0x1));
                    case ggbk50q:
                        xvr7y === ggbk50q && (nv7i = i13nx), xvr7y == g_p2he ? (hetz_['warning']('attribute "' + nv7i + '" missed quot(")!!'), dg60k['add'](i13nx, nv7i['replace'](/&#?\w+;/g, y7jrvo), xrv7ji)) : ('http://www.w3.org/1999/xhtml' === xiv7[''] && nv7i['match'](/^(?:disabled|checked|selected)$/i) || hetz_['warning']('attribute "' + nv7i + '" missed value!! "' + nv7i + '" instead!!'), dg60k['add'](nv7i, nv7i, xrv7ji));
                        break;
                    case gu4al3m:
                        throw new Error('attribute value missed!!');
                }
                return nui314;
            case '\u0080':
                ob50yq = '\x20';
            default:
                if ('\x20' >= ob50yq) switch (xvr7y) {
                    case gn13ui:
                        dg60k['setTagName'](ok0qb5['slice'](xrv7ji, nui314)), xvr7y = gy5oq;
                        break;
                    case gam3l4:
                        i13nx = ok0qb5['slice'](xrv7ji, nui314), xvr7y = ggbk50q;
                        break;
                    case g_p2he:
                        var nv7i = ok0qb5['slice'](xrv7ji, nui314)['replace'](/&#?\w+;/g, y7jrvo);
                        hetz_['warning']('attribute "' + nv7i + '" missed quot(")!!'), dg60k['add'](i13nx, nv7i, xrv7ji);
                    case gr5vyq:
                        xvr7y = gy5oq;
                } else switch (xvr7y) {
                    case ggbk50q:
                        {
                            dg60k['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === xiv7[''] && i13nx['match'](/^(?:disabled|checked|selected)$/i) || hetz_['warning']('attribute "' + i13nx + '" missed value!! "' + i13nx + '" instead2!!'), dg60k['add'](i13nx, i13nx, xrv7ji), xrv7ji = nui314, xvr7y = gam3l4;
                        break;
                    case gr5vyq:
                        hetz_['warning']('attribute space is required"' + i13nx + '\x22!!');
                    case gy5oq:
                        xvr7y = gam3l4, xrv7ji = nui314;
                        break;
                    case gu4al3m:
                        xvr7y = g_p2he, xrv7ji = nui314;
                        break;
                    case grvyjo:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        nui314++;
    }
}
function grjvxi7(rv7yj, injxv, kb0gqd) {
    for (var kg0qd = rv7yj['tagName'], pf_ = null, ztepc = rv7yj['length']; ztepc--;) {
        var ni134 = rv7yj[ztepc],
            hczpte = ni134['qName'],
            e_zw = ni134['value'],
            g6dt8c = hczpte['indexOf'](':');
        if (g6dt8c > 0x0) var zcpthe = ni134['prefix'] = hczpte['slice'](0x0, g6dt8c),
            u1i4n3 = hczpte['slice'](g6dt8c + 0x1),
            pez_ = 'xmlns' === zcpthe && u1i4n3;else u1i4n3 = hczpte, zcpthe = null, pez_ = 'xmlns' === hczpte && '';
        ni134['localName'] = u1i4n3, pez_ !== !0x1 && (null == pf_ && (pf_ = {}, gzct68h(kb0gqd, kb0gqd = {})), kb0gqd[pez_] = pf_[pez_] = e_zw, ni134['uri'] = 'http://www.w3.org/2000/xmlns/', injxv['startPrefixMapping'](pez_, e_zw));
    }
    for (var ztepc = rv7yj['length']; ztepc--;) {
        ni134 = rv7yj[ztepc];
        var zcpthe = ni134['prefix'];
        zcpthe && ('xml' === zcpthe && (ni134['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== zcpthe && (ni134['uri'] = kb0gqd[zcpthe || '']));
    }
    var g6dt8c = kg0qd['indexOf'](':');
    g6dt8c > 0x0 ? (zcpthe = rv7yj['prefix'] = kg0qd['slice'](0x0, g6dt8c), u1i4n3 = rv7yj['localName'] = kg0qd['slice'](g6dt8c + 0x1)) : (zcpthe = null, u1i4n3 = rv7yj['localName'] = kg0qd);
    var roq5by = rv7yj['uri'] = kb0gqd[zcpthe || ''];
    if (injxv['startElement'](roq5by, u1i4n3, kg0qd, rv7yj), !rv7yj['closed']) return rv7yj['currentNSMap'] = kb0gqd, rv7yj['localNSMap'] = pf_, !0x0;
    if (injxv['endElement'](roq5by, u1i4n3, kg0qd), pf_) {
        for (zcpthe in pf_) injxv['endPrefixMapping'](zcpthe);
    }
}
function gu34an(yvxrj7, i3n1x4, ijxvn7, $2w9f_, t8zch6) {
    if (/^(?:script|textarea)$/i['test'](ijxvn7)) {
        var f9_2$ = yvxrj7['indexOf']('</' + ijxvn7 + '>', i3n1x4),
            jrv7i = yvxrj7['substring'](i3n1x4 + 0x1, f9_2$);
        if (/[&<]/['test'](jrv7i)) return (/^script$/i['test'](ijxvn7) ? (t8zch6['characters'](jrv7i, 0x0, jrv7i['length']), f9_2$) : (jrv7i = jrv7i['replace'](/&#?\w+;/g, $2w9f_), t8zch6['characters'](jrv7i, 0x0, jrv7i['length']), f9_2$)
        );
    }
    return i3n1x4 + 0x1;
}
function gc8he(ephct, la41u, r7xiv, _w92) {
    var jxin7v = _w92[r7xiv];
    return null == jxin7v && (jxin7v = ephct['lastIndexOf']('</' + r7xiv + '>'), la41u > jxin7v && (jxin7v = ephct['lastIndexOf']('</' + r7xiv)), _w92[r7xiv] = jxin7v), la41u > jxin7v;
}
function gzct68h(cptehz, ez_hp2) {
    for (var i4n3x1 in cptehz) ez_hp2[i4n3x1] = cptehz[i4n3x1];
}
function gnjxiv7(d68kcg, d8tch, i31x4n, d86tgc) {
    var al4um = d68kcg['charAt'](d8tch + 0x2);
    switch (al4um) {
        case '-':
            if ('-' === d68kcg['charAt'](d8tch + 0x3)) {
                var i4xn17 = d68kcg['indexOf']('-->', d8tch + 0x4);
                return i4xn17 > d8tch ? (i31x4n['comment'](d68kcg, d8tch + 0x4, i4xn17 - d8tch - 0x4), i4xn17 + 0x3) : (d86tgc['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == d68kcg['substr'](d8tch + 0x3, 0x6)) {
                var i4xn17 = d68kcg['indexOf'](']]>', d8tch + 0x9);
                return i31x4n['startCDATA'](), i31x4n['characters'](d68kcg, d8tch + 0x9, i4xn17 - d8tch - 0x9), i31x4n['endCDATA'](), i4xn17 + 0x3;
            }
            var jyv7xr = gua41(d68kcg, d8tch),
                d806 = jyv7xr['length'];
            if (d806 > 0x1 && /!doctype/i['test'](jyv7xr[0x0][0x0])) {
                var p9fw = jyv7xr[0x1][0x0],
                    h6t8cz = d806 > 0x3 && /^public$/i['test'](jyv7xr[0x2][0x0]) && jyv7xr[0x3][0x0],
                    r7yjxv = d806 > 0x4 && jyv7xr[0x4][0x0],
                    zwpe2_ = jyv7xr[d806 - 0x1];
                return i31x4n['startDTD'](p9fw, h6t8cz && h6t8cz['replace'](/^(['"])(.*?)\1$/, '$2'), r7yjxv && r7yjxv['replace'](/^(['"])(.*?)\1$/, '$2')), i31x4n['endDTD'](), zwpe2_['index'] + zwpe2_[0x0]['length'];
            }
    }
    return -0x1;
}
function gtg6cd(w_92pe, x7vrij, tecz8h) {
    var _f9w2 = w_92pe['indexOf']('?>', x7vrij);
    if (_f9w2) {
        var xvjy7 = w_92pe['substring'](x7vrij, _f9w2)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (xvjy7) {
            {
                xvjy7[0x0]['length'];
            }
            return tecz8h['processingInstruction'](xvjy7[0x1], xvjy7[0x2]), _f9w2 + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function gqyor5() {}
function gojv5y(oy5rb, e92_pw) {
    return oy5rb['__proto__'] = e92_pw, oy5rb;
}
function gua41($ws29, z6cth8) {
    var g50b,
        htc6 = [],
        ixn1j = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (ixn1j['lastIndex'] = z6cth8, ixn1j['exec']($ws29); g50b = ixn1j['exec']($ws29);) if (htc6['push'](g50b), g50b[0x1]) return htc6;
}
var gbryo5 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    gx4ni7 = new RegExp('[\\-\\.0-9' + gbryo5['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    gthecp = new RegExp('^' + gbryo5['source'] + gx4ni7['source'] + '*(?::' + gbryo5['source'] + gx4ni7['source'] + '*)?$'),
    gn13ui = 0x0,
    gam3l4 = 0x1,
    ggbk50q = 0x2,
    gu4al3m = 0x3,
    g_p2he = 0x4,
    gr5vyq = 0x5,
    gy5oq = 0x6,
    grvyjo = 0x7;
go5bq0y['prototype'] = {
    'parse': function (l3m4ua, _2p9fw, i7xn4) {
        var k05boq = this['domBuilder'];
        k05boq['startDocument'](), gzct68h(_2p9fw, _2p9fw = {}), gechz8(l3m4ua, _2p9fw, i7xn4, k05boq, this['errorHandler']), k05boq['endDocument']();
    }
}, gqyor5['prototype'] = {
    'setTagName': function (jnx7i) {
        if (!gthecp['test'](jnx7i)) throw new Error('invalid tagName:' + jnx7i);
        this['tagName'] = jnx7i;
    },
    'add': function (bk50o, cgdk, g0dk) {
        if (!gthecp['test'](bk50o)) throw new Error('invalid attribute:' + bk50o);
        this[this['length']++] = {
            'qName': bk50o,
            'value': cgdk,
            'offset': g0dk
        };
    },
    'length': 0x0,
    'getLocalName': function (_zphet) {
        return this[_zphet]['localName'];
    },
    'getLocator': function (phezc) {
        return this[phezc]['locator'];
    },
    'getQName': function (jn1xi) {
        return this[jn1xi]['qName'];
    },
    'getURI': function (_zethp) {
        return this[_zethp]['uri'];
    },
    'getValue': function (g0b6kd) {
        return this[g0b6kd]['value'];
    }
}, gojv5y({}, gojv5y['prototype']) instanceof gojv5y || (gojv5y = function (vjro7, f$ws92) {
    function xniv7() {}
    xniv7['prototype'] = f$ws92, xniv7 = new xniv7();
    for (f$ws92 in vjro7) xniv7[f$ws92] = vjro7[f$ws92];
    return xniv7;
}), exports['XMLReader'] = go5bq0y;