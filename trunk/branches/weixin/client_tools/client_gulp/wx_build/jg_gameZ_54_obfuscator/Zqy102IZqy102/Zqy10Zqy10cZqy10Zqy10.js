var J = wx.h$;
function gjv7ni() {}
function ga1l34u(sw2$9f, cgd6k, ybqr5o, u13l, tgd86) {
    function _f2wp9(bk50o) {
        if (bk50o > 0xffff) {
            bk50o -= 0x10000;
            var pze2w_ = 0xd800 + (bk50o >> 0xa),
                cd8t = 0xdc00 + (0x3ff & bk50o);
            return String['fromCharCode'](pze2w_, cd8t);
        }
        return String['fromCharCode'](bk50o);
    }
    function ov5rj(l3m) {
        var zet_hp = l3m['slice'](0x1, -0x1);
        return zet_hp in ybqr5o ? ybqr5o[zet_hp] : '#' === zet_hp['charAt'](0x0) ? _f2wp9(parseInt(zet_hp['substr'](0x1)['replace']('x', '0x'))) : (tgd86['error']('entity not found:' + l3m), l3m);
    }
    function o5jvy(n31ui4) {
        if (n31ui4 > i34x1n) {
            var zt8eh = sw2$9f['substring'](i34x1n, n31ui4)['replace'](/&#?\w+;/g, ov5rj);
            xjv7ry && bdk60(i34x1n), u13l['characters'](zt8eh, 0x0, n31ui4 - i34x1n), i34x1n = n31ui4;
        }
    }
    function bdk60(oy7vrj, yrvqo5) {
        for (; oy7vrj >= al31u4 && (yrvqo5 = jxvn7i['exec'](sw2$9f));) xn17i4 = yrvqo5['index'], al31u4 = xn17i4 + yrvqo5[0x0]['length'], xjv7ry['lineNumber']++;
        xjv7ry['columnNumber'] = oy7vrj - xn17i4 + 0x1;
    }
    for (var xn17i4 = 0x0, al31u4 = 0x0, jxvn7i = /.*(?:\r\n?|\n)|.*$/g, xjv7ry = u13l['locator'], ro7yjv = [{ 'currentNSMap': cgd6k }], pthec = {}, i34x1n = 0x0;;) {
        try {
            var vo5jr = sw2$9f['indexOf']('<', i34x1n);
            if (0x0 > vo5jr) {
                if (!sw2$9f['substr'](i34x1n)['match'](/^\s*$/)) {
                    var g60dk = u13l['doc'],
                        _pf9w = g60dk['createTextNode'](sw2$9f['substr'](i34x1n));
                    g60dk['appendChild'](_pf9w), u13l['currentElement'] = _pf9w;
                }
                return;
            }
            switch (vo5jr > i34x1n && o5jvy(vo5jr), sw2$9f['charAt'](vo5jr + 0x1)) {
                case '/':
                    var yoq5b = sw2$9f['indexOf']('>', vo5jr + 0x3),
                        njvx = sw2$9f['substring'](vo5jr + 0x2, yoq5b),
                        bk05q = ro7yjv['pop']();
                    0x0 > yoq5b ? (njvx = sw2$9f['substring'](vo5jr + 0x2)['replace'](/[\s<].*/, ''), tgd86['error']('end tag name: ' + njvx + ' is not complete:' + bk05q['tagName']), yoq5b = vo5jr + 0x1 + njvx['length']) : njvx['match'](/\s</) && (njvx = njvx['replace'](/[\s<].*/, ''), tgd86['error']('end tag name: ' + njvx + ' maybe not complete'), yoq5b = vo5jr + 0x1 + njvx['length']);
                    var j7xn1i = bk05q['localNSMap'],
                        yxvjr = bk05q['tagName'] == njvx,
                        n1au3 = yxvjr || bk05q['tagName'] && bk05q['tagName']['toLowerCase']() == njvx['toLowerCase']();
                    if (n1au3) {
                        if (u13l['endElement'](bk05q['uri'], bk05q['localName'], njvx), j7xn1i) {
                            for (var rovyq5 in j7xn1i) u13l['endPrefixMapping'](rovyq5);
                        }
                        yxvjr || tgd86['fatalError']('end tag name: ' + njvx + ' is not match the current start tagName:' + bk05q['tagName']);
                    } else ro7yjv['push'](bk05q);
                    yoq5b++;
                    break;
                case '?':
                    xjv7ry && bdk60(vo5jr), yoq5b = gz2_eh(sw2$9f, vo5jr, u13l);
                    break;
                case '!':
                    xjv7ry && bdk60(vo5jr), yoq5b = gch86td(sw2$9f, vo5jr, u13l, tgd86);
                    break;
                default:
                    xjv7ry && bdk60(vo5jr);
                    var _pehz2 = new gv5qyor(),
                        vxir7j = ro7yjv[ro7yjv['length'] - 0x1]['currentNSMap'],
                        yoq5b = gp29e_(sw2$9f, vo5jr, _pehz2, vxir7j, ov5rj, tgd86),
                        htz_e = _pehz2['length'];
                    if (!_pehz2['closed'] && gwf92_p(sw2$9f, yoq5b, _pehz2['tagName'], pthec) && (_pehz2['closed'] = !0x0, ybqr5o['nbsp'] || tgd86['warning']('unclosed xml attribute')), xjv7ry && htz_e) {
                        for (var yb5qor = gpe29w_(xjv7ry, {}), xin7j1 = 0x0; htz_e > xin7j1; xin7j1++) {
                            var hc8 = _pehz2[xin7j1];
                            bdk60(hc8['offset']), hc8['locator'] = gpe29w_(xjv7ry, {});
                        }
                        u13l['locator'] = yb5qor, gvrqy(_pehz2, u13l, vxir7j) && ro7yjv['push'](_pehz2), u13l['locator'] = xjv7ry;
                    } else gvrqy(_pehz2, u13l, vxir7j) && ro7yjv['push'](_pehz2);
                    'http://www.w3.org/1999/xhtml' !== _pehz2['uri'] || _pehz2['closed'] ? yoq5b++ : yoq5b = ggbqk(sw2$9f, yoq5b, _pehz2['tagName'], ov5rj, u13l);
            }
        } catch (a14u) {
            tgd86['error']('element parse error: ' + a14u), yoq5b = -0x1;
        }
        yoq5b > i34x1n ? i34x1n = yoq5b : o5jvy(Math['max'](vo5jr, i34x1n) + 0x1);
    }
}
function gpe29w_(tczph, d6bk0g) {
    return d6bk0g['lineNumber'] = tczph['lineNumber'], d6bk0g['columnNumber'] = tczph['columnNumber'], d6bk0g;
}
function gp29e_(jy5r, cg6d8k, d8kc, dg8t6, th_zep, bkd) {
    for (var chte8z, ob5rqy, niu3 = ++cg6d8k, rqoy5v = gg0b5;;) {
        var tzch6 = jy5r['charAt'](niu3);
        switch (tzch6) {
            case '=':
                if (rqoy5v === gzh_etp) chte8z = jy5r['slice'](cg6d8k, niu3), rqoy5v = gzhtc86;else {
                    if (rqoy5v !== gbkgdq) throw new Error('attribute equal must after attrName');
                    rqoy5v = gzhtc86;
                }
                break;
            case '\x27':
            case '\x22':
                if (rqoy5v === gzhtc86 || rqoy5v === gzh_etp) {
                    if (rqoy5v === gzh_etp && (bkd['warning']('attribute value must after "="'), chte8z = jy5r['slice'](cg6d8k, niu3)), cg6d8k = niu3 + 0x1, niu3 = jy5r['indexOf'](tzch6, cg6d8k), !(niu3 > 0x0)) throw new Error('attribute value no end \'' + tzch6 + '\' match');
                    ob5rqy = jy5r['slice'](cg6d8k, niu3)['replace'](/&#?\w+;/g, th_zep), d8kc['add'](chte8z, ob5rqy, cg6d8k - 0x1), rqoy5v = gn1ix43;
                } else {
                    if (rqoy5v != gj7xni1) throw new Error('attribute value must after "="');
                    ob5rqy = jy5r['slice'](cg6d8k, niu3)['replace'](/&#?\w+;/g, th_zep), d8kc['add'](chte8z, ob5rqy, cg6d8k), bkd['warning']('attribute "' + chte8z + '" missed start quot(' + tzch6 + ')!!'), cg6d8k = niu3 + 0x1, rqoy5v = gn1ix43;
                }
                break;
            case '/':
                switch (rqoy5v) {
                    case gg0b5:
                        d8kc['setTagName'](jy5r['slice'](cg6d8k, niu3));
                    case gn1ix43:
                    case gp_e29w:
                    case go0qb:
                        rqoy5v = go0qb, d8kc['closed'] = !0x0;
                    case gj7xni1:
                    case gzh_etp:
                    case gbkgdq:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return bkd['error']('unexpected end of input'), rqoy5v == gg0b5 && d8kc['setTagName'](jy5r['slice'](cg6d8k, niu3)), niu3;
            case '>':
                switch (rqoy5v) {
                    case gg0b5:
                        d8kc['setTagName'](jy5r['slice'](cg6d8k, niu3));
                    case gn1ix43:
                    case gp_e29w:
                    case go0qb:
                        break;
                    case gj7xni1:
                    case gzh_etp:
                        ob5rqy = jy5r['slice'](cg6d8k, niu3), '/' === ob5rqy['slice'](-0x1) && (d8kc['closed'] = !0x0, ob5rqy = ob5rqy['slice'](0x0, -0x1));
                    case gbkgdq:
                        rqoy5v === gbkgdq && (ob5rqy = chte8z), rqoy5v == gj7xni1 ? (bkd['warning']('attribute "' + ob5rqy + '" missed quot(")!!'), d8kc['add'](chte8z, ob5rqy['replace'](/&#?\w+;/g, th_zep), cg6d8k)) : ('http://www.w3.org/1999/xhtml' === dg8t6[''] && ob5rqy['match'](/^(?:disabled|checked|selected)$/i) || bkd['warning']('attribute "' + ob5rqy + '" missed value!! "' + ob5rqy + '" instead!!'), d8kc['add'](ob5rqy, ob5rqy, cg6d8k));
                        break;
                    case gzhtc86:
                        throw new Error('attribute value missed!!');
                }
                return niu3;
            case '\u0080':
                tzch6 = '\x20';
            default:
                if ('\x20' >= tzch6) switch (rqoy5v) {
                    case gg0b5:
                        d8kc['setTagName'](jy5r['slice'](cg6d8k, niu3)), rqoy5v = gp_e29w;
                        break;
                    case gzh_etp:
                        chte8z = jy5r['slice'](cg6d8k, niu3), rqoy5v = gbkgdq;
                        break;
                    case gj7xni1:
                        var ob5rqy = jy5r['slice'](cg6d8k, niu3)['replace'](/&#?\w+;/g, th_zep);
                        bkd['warning']('attribute "' + ob5rqy + '" missed quot(")!!'), d8kc['add'](chte8z, ob5rqy, cg6d8k);
                    case gn1ix43:
                        rqoy5v = gp_e29w;
                } else switch (rqoy5v) {
                    case gbkgdq:
                        {
                            d8kc['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === dg8t6[''] && chte8z['match'](/^(?:disabled|checked|selected)$/i) || bkd['warning']('attribute "' + chte8z + '" missed value!! "' + chte8z + '" instead2!!'), d8kc['add'](chte8z, chte8z, cg6d8k), cg6d8k = niu3, rqoy5v = gzh_etp;
                        break;
                    case gn1ix43:
                        bkd['warning']('attribute space is required"' + chte8z + '\x22!!');
                    case gp_e29w:
                        rqoy5v = gzh_etp, cg6d8k = niu3;
                        break;
                    case gzhtc86:
                        rqoy5v = gj7xni1, cg6d8k = niu3;
                        break;
                    case go0qb:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        niu3++;
    }
}
function gvrqy(xivj, g6kd8, he8zct) {
    for (var p_9we2 = xivj['tagName'], jr5yov = null, la41u3 = xivj['length']; la41u3--;) {
        var z8ecth = xivj[la41u3],
            qdbg = z8ecth['qName'],
            k0bqdg = z8ecth['value'],
            _wp92e = qdbg['indexOf'](':');
        if (_wp92e > 0x0) var p9fw = z8ecth['prefix'] = qdbg['slice'](0x0, _wp92e),
            cdt68h = qdbg['slice'](_wp92e + 0x1),
            bkq5 = 'xmlns' === p9fw && cdt68h;else cdt68h = qdbg, p9fw = null, bkq5 = 'xmlns' === qdbg && '';
        z8ecth['localName'] = cdt68h, bkq5 !== !0x1 && (null == jr5yov && (jr5yov = {}, ge_hzp(he8zct, he8zct = {})), he8zct[bkq5] = jr5yov[bkq5] = k0bqdg, z8ecth['uri'] = 'http://www.w3.org/2000/xmlns/', g6kd8['startPrefixMapping'](bkq5, k0bqdg));
    }
    for (var la41u3 = xivj['length']; la41u3--;) {
        z8ecth = xivj[la41u3];
        var p9fw = z8ecth['prefix'];
        p9fw && ('xml' === p9fw && (z8ecth['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== p9fw && (z8ecth['uri'] = he8zct[p9fw || '']));
    }
    var _wp92e = p_9we2['indexOf'](':');
    _wp92e > 0x0 ? (p9fw = xivj['prefix'] = p_9we2['slice'](0x0, _wp92e), cdt68h = xivj['localName'] = p_9we2['slice'](_wp92e + 0x1)) : (p9fw = null, cdt68h = xivj['localName'] = p_9we2);
    var dtcg68 = xivj['uri'] = he8zct[p9fw || ''];
    if (g6kd8['startElement'](dtcg68, cdt68h, p_9we2, xivj), !xivj['closed']) return xivj['currentNSMap'] = he8zct, xivj['localNSMap'] = jr5yov, !0x0;
    if (g6kd8['endElement'](dtcg68, cdt68h, p_9we2), jr5yov) {
        for (p9fw in jr5yov) g6kd8['endPrefixMapping'](p9fw);
    }
}
function ggbqk(echzt8, dgkb0, d8ct6g, vyjx7r, _pzh2e) {
    if (/^(?:script|textarea)$/i['test'](d8ct6g)) {
        var z_pew = echzt8['indexOf']('</' + d8ct6g + '>', dgkb0),
            ct6z8h = echzt8['substring'](dgkb0 + 0x1, z_pew);
        if (/[&<]/['test'](ct6z8h)) return (/^script$/i['test'](d8ct6g) ? (_pzh2e['characters'](ct6z8h, 0x0, ct6z8h['length']), z_pew) : (ct6z8h = ct6z8h['replace'](/&#?\w+;/g, vyjx7r), _pzh2e['characters'](ct6z8h, 0x0, ct6z8h['length']), z_pew)
        );
    }
    return dgkb0 + 0x1;
}
function gwf92_p(ojr5v, t8zche, hte_zp, i7njxv) {
    var alu431 = i7njxv[hte_zp];
    return null == alu431 && (alu431 = ojr5v['lastIndexOf']('</' + hte_zp + '>'), t8zche > alu431 && (alu431 = ojr5v['lastIndexOf']('</' + hte_zp)), i7njxv[hte_zp] = alu431), t8zche > alu431;
}
function ge_hzp(d68tgc, i7rxvj) {
    for (var e8hct in d68tgc) i7rxvj[e8hct] = d68tgc[e8hct];
}
function gch86td(vxin7j, hzt_e, h_zept, eczth) {
    var zphe2_ = vxin7j['charAt'](hzt_e + 0x2);
    switch (zphe2_) {
        case '-':
            if ('-' === vxin7j['charAt'](hzt_e + 0x3)) {
                var cpzeht = vxin7j['indexOf']('-->', hzt_e + 0x4);
                return cpzeht > hzt_e ? (h_zept['comment'](vxin7j, hzt_e + 0x4, cpzeht - hzt_e - 0x4), cpzeht + 0x3) : (eczth['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == vxin7j['substr'](hzt_e + 0x3, 0x6)) {
                var cpzeht = vxin7j['indexOf'](']]>', hzt_e + 0x9);
                return h_zept['startCDATA'](), h_zept['characters'](vxin7j, hzt_e + 0x9, cpzeht - hzt_e - 0x9), h_zept['endCDATA'](), cpzeht + 0x3;
            }
            var vxjry7 = ggb5qk(vxin7j, hzt_e),
                e_zpht = vxjry7['length'];
            if (e_zpht > 0x1 && /!doctype/i['test'](vxjry7[0x0][0x0])) {
                var t8zce = vxjry7[0x1][0x0],
                    x1j = e_zpht > 0x3 && /^public$/i['test'](vxjry7[0x2][0x0]) && vxjry7[0x3][0x0],
                    $_w92 = e_zpht > 0x4 && vxjry7[0x4][0x0],
                    dq0gkb = vxjry7[e_zpht - 0x1];
                return h_zept['startDTD'](t8zce, x1j && x1j['replace'](/^(['"])(.*?)\1$/, '$2'), $_w92 && $_w92['replace'](/^(['"])(.*?)\1$/, '$2')), h_zept['endDTD'](), dq0gkb['index'] + dq0gkb[0x0]['length'];
            }
    }
    return -0x1;
}
function gz2_eh(vqy5or, j5vr, l43) {
    var dk8g0 = vqy5or['indexOf']('?>', j5vr);
    if (dk8g0) {
        var cdgt8 = vqy5or['substring'](j5vr, dk8g0)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (cdgt8) {
            {
                cdgt8[0x0]['length'];
            }
            return l43['processingInstruction'](cdgt8[0x1], cdgt8[0x2]), dk8g0 + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function gv5qyor() {}
function gzect($w29f, yqrb5) {
    return $w29f['__proto__'] = yqrb5, $w29f;
}
function ggb5qk(orb5y, dct6) {
    var y7jrov,
        la413u = [],
        jy5ov = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (jy5ov['lastIndex'] = dct6, jy5ov['exec'](orb5y); y7jrov = jy5ov['exec'](orb5y);) if (la413u['push'](y7jrov), y7jrov[0x1]) return la413u;
}
var ghe_p2z = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    gy0qb5 = new RegExp('[\\-\\.0-9' + ghe_p2z['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    ggc6t = new RegExp('^' + ghe_p2z['source'] + gy0qb5['source'] + '*(?::' + ghe_p2z['source'] + gy0qb5['source'] + '*)?$'),
    gg0b5 = 0x0,
    gzh_etp = 0x1,
    gbkgdq = 0x2,
    gzhtc86 = 0x3,
    gj7xni1 = 0x4,
    gn1ix43 = 0x5,
    gp_e29w = 0x6,
    go0qb = 0x7;
gjv7ni['prototype'] = {
    'parse': function (rvyjx7, vxjy7r, xj7yrv) {
        var teph = this['domBuilder'];
        teph['startDocument'](), ge_hzp(vxjy7r, vxjy7r = {}), ga1l34u(rvyjx7, vxjy7r, xj7yrv, teph, this['errorHandler']), teph['endDocument']();
    }
}, gv5qyor['prototype'] = {
    'setTagName': function (i31nu4) {
        if (!ggc6t['test'](i31nu4)) throw new Error('invalid tagName:' + i31nu4);
        this['tagName'] = i31nu4;
    },
    'add': function (jr7oy, fs2w$9, ryvj7o) {
        if (!ggc6t['test'](jr7oy)) throw new Error('invalid attribute:' + jr7oy);
        this[this['length']++] = {
            'qName': jr7oy,
            'value': fs2w$9,
            'offset': ryvj7o
        };
    },
    'length': 0x0,
    'getLocalName': function (kgb50q) {
        return this[kgb50q]['localName'];
    },
    'getLocator': function (_9pe2w) {
        return this[_9pe2w]['locator'];
    },
    'getQName': function (s9fw2) {
        return this[s9fw2]['qName'];
    },
    'getURI': function (gdk086) {
        return this[gdk086]['uri'];
    },
    'getValue': function (_ptehz) {
        return this[_ptehz]['value'];
    }
}, gzect({}, gzect['prototype']) instanceof gzect || (gzect = function (dg0k, p2w_f) {
    function che8z() {}
    che8z['prototype'] = p2w_f, che8z = new che8z();
    for (p2w_f in dg0k) che8z[p2w_f] = dg0k[p2w_f];
    return che8z;
}), exports['XMLReader'] = gjv7ni;