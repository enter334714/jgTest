var c = wx.$a;
function gzq86d() {}
function gjhnzv(b4c0o, c4y0b, uo_e4w, zhjsv, oe40_w) {
    function p3r5t(xhsjnv) {
        if (xhsjnv > 0xffff) {
            xhsjnv -= 0x10000;
            var p7t35 = 0xd800 + (xhsjnv >> 0xa),
                jfx1n = 0xdc00 + (0x3ff & xhsjnv);
            return String['fromCharCode'](p7t35, jfx1n);
        }
        return String['fromCharCode'](xhsjnv);
    }
    function g21wu(td8r5) {
        var y0b4co = td8r5['slice'](0x1, -0x1);
        return y0b4co in uo_e4w ? uo_e4w[y0b4co] : '#' === y0b4co['charAt'](0x0) ? p3r5t(parseInt(y0b4co['substr'](0x1)['replace']('x', '0x'))) : (oe40_w['error']('entity not found:' + td8r5), td8r5);
    }
    function xsgf1(fsjxnv) {
        if (fsjxnv > hvjnsz) {
            var p7 = b4c0o['substring'](hvjnsz, fsjxnv)['replace'](/&#?\w+;/g, g21wu);
            b$o0c && d68t(hvjnsz), zhjsv['characters'](p7, 0x0, fsjxnv - hvjnsz), hvjnsz = fsjxnv;
        }
    }
    function d68t(by$co, zvhd) {
        for (; by$co >= $ylcb0 && (zvhd = hvknz6['exec'](b4c0o));) _oy = zvhd['index'], $ylcb0 = _oy + zvhd[0x0]['length'], b$o0c['lineNumber']++;
        b$o0c['columnNumber'] = by$co - _oy + 0x1;
    }
    for (var _oy = 0x0, $ylcb0 = 0x0, hvknz6 = /.*(?:\r\n?|\n)|.*$/g, b$o0c = zhjsv['locator'], lby$ = [{ 'currentNSMap': c4y0b }], zjhsnv = {}, hvjnsz = 0x0;;) {
        try {
            var u_we4g = b4c0o['indexOf']('<', hvjnsz);
            if (0x0 > u_we4g) {
                if (!b4c0o['substr'](hvjnsz)['match'](/^\s*$/)) {
                    var cblam = zhjsv['doc'],
                        yc$bo0 = cblam['createTextNode'](b4c0o['substr'](hvjnsz));
                    cblam['appendChild'](yc$bo0), zhjsv['currentElement'] = yc$bo0;
                }
                return;
            }
            switch (u_we4g > hvjnsz && xsgf1(u_we4g), b4c0o['charAt'](u_we4g + 0x1)) {
                case '/':
                    var m$b9 = b4c0o['indexOf']('>', u_we4g + 0x3),
                        cy$o0 = b4c0o['substring'](u_we4g + 0x2, m$b9),
                        g2xfs = lby$['pop']();
                    0x0 > m$b9 ? (cy$o0 = b4c0o['substring'](u_we4g + 0x2)['replace'](/[\s<].*/, ''), oe40_w['error']('end tag name: ' + cy$o0 + ' is not complete:' + g2xfs['tagName']), m$b9 = u_we4g + 0x1 + cy$o0['length']) : cy$o0['match'](/\s</) && (cy$o0 = cy$o0['replace'](/[\s<].*/, ''), oe40_w['error']('end tag name: ' + cy$o0 + ' maybe not complete'), m$b9 = u_we4g + 0x1 + cy$o0['length']);
                    var hnvjzs = g2xfs['localNSMap'],
                        xsfj12 = g2xfs['tagName'] == cy$o0,
                        jsnvhx = xsfj12 || g2xfs['tagName'] && g2xfs['tagName']['toLowerCase']() == cy$o0['toLowerCase']();
                    if (jsnvhx) {
                        if (zhjsv['endElement'](g2xfs['uri'], g2xfs['localName'], cy$o0), hnvjzs) {
                            for (var myblc$ in hnvjzs) zhjsv['endPrefixMapping'](myblc$);
                        }
                        xsfj12 || oe40_w['fatalError']('end tag name: ' + cy$o0 + ' is not match the current start tagName:' + g2xfs['tagName']);
                    } else lby$['push'](g2xfs);
                    m$b9++;
                    break;
                case '?':
                    b$o0c && d68t(u_we4g), m$b9 = gr5t37p(b4c0o, u_we4g, zhjsv);
                    break;
                case '!':
                    b$o0c && d68t(u_we4g), m$b9 = gw1gu2(b4c0o, u_we4g, zhjsv, oe40_w);
                    break;
                default:
                    b$o0c && d68t(u_we4g);
                    var w_e2u = new gbam$9l(),
                        gx1s2f = lby$[lby$['length'] - 0x1]['currentNSMap'],
                        m$b9 = gxsj21f(b4c0o, u_we4g, w_e2u, gx1s2f, g21wu, oe40_w),
                        o0y4e = w_e2u['length'];
                    if (!w_e2u['closed'] && gt8qr6(b4c0o, m$b9, w_e2u['tagName'], zjhsnv) && (w_e2u['closed'] = !0x0, uo_e4w['nbsp'] || oe40_w['warning']('unclosed xml attribute')), b$o0c && o0y4e) {
                        for (var kn6h = gnsjvf(b$o0c, {}), w4ug_ = 0x0; o0y4e > w4ug_; w4ug_++) {
                            var svjxnf = w_e2u[w4ug_];
                            d68t(svjxnf['offset']), svjxnf['locator'] = gnsjvf(b$o0c, {});
                        }
                        zhjsv['locator'] = kn6h, gg2ufx1(w_e2u, zhjsv, gx1s2f) && lby$['push'](w_e2u), zhjsv['locator'] = b$o0c;
                    } else gg2ufx1(w_e2u, zhjsv, gx1s2f) && lby$['push'](w_e2u);
                    'http://www.w3.org/1999/xhtml' !== w_e2u['uri'] || w_e2u['closed'] ? m$b9++ : m$b9 = gu4_wg(b4c0o, m$b9, w_e2u['tagName'], g21wu, zhjsv);
            }
        } catch (dkh6zv) {
            oe40_w['error']('element parse error: ' + dkh6zv), m$b9 = -0x1;
        }
        m$b9 > hvjnsz ? hvjnsz = m$b9 : xsgf1(Math['max'](u_we4g, hvjnsz) + 0x1);
    }
}
function gnsjvf(b0oy4, hqdkz6) {
    return hqdkz6['lineNumber'] = b0oy4['lineNumber'], hqdkz6['columnNumber'] = b0oy4['columnNumber'], hqdkz6;
}
function gxsj21f(s1xf2j, lcy$, jsvnxf, zkqd8, mlcab$, q57t8r) {
    for (var wo04_, oybc0$, u_ge2 = ++lcy$, fxns = gkdzh6;;) {
        var gue21w = s1xf2j['charAt'](u_ge2);
        switch (gue21w) {
            case '=':
                if (fxns === ghzjnv) wo04_ = s1xf2j['slice'](lcy$, u_ge2), fxns = gvkhzd;else {
                    if (fxns !== gsvjz) throw new Error('attribute equal must after attrName');
                    fxns = gvkhzd;
                }
                break;
            case '\x27':
            case '\x22':
                if (fxns === gvkhzd || fxns === ghzjnv) {
                    if (fxns === ghzjnv && (q57t8r['warning']('attribute value must after "="'), wo04_ = s1xf2j['slice'](lcy$, u_ge2)), lcy$ = u_ge2 + 0x1, u_ge2 = s1xf2j['indexOf'](gue21w, lcy$), !(u_ge2 > 0x0)) throw new Error('attribute value no end \'' + gue21w + '\' match');
                    oybc0$ = s1xf2j['slice'](lcy$, u_ge2)['replace'](/&#?\w+;/g, mlcab$), jsvnxf['add'](wo04_, oybc0$, lcy$ - 0x1), fxns = gfw21;
                } else {
                    if (fxns != gu4_gw) throw new Error('attribute value must after "="');
                    oybc0$ = s1xf2j['slice'](lcy$, u_ge2)['replace'](/&#?\w+;/g, mlcab$), jsvnxf['add'](wo04_, oybc0$, lcy$), q57t8r['warning']('attribute "' + wo04_ + '" missed start quot(' + gue21w + ')!!'), lcy$ = u_ge2 + 0x1, fxns = gfw21;
                }
                break;
            case '/':
                switch (fxns) {
                    case gkdzh6:
                        jsvnxf['setTagName'](s1xf2j['slice'](lcy$, u_ge2));
                    case gfw21:
                    case gvsnhxj:
                    case gx21fug:
                        fxns = gx21fug, jsvnxf['closed'] = !0x0;
                    case gu4_gw:
                    case ghzjnv:
                    case gsvjz:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return q57t8r['error']('unexpected end of input'), fxns == gkdzh6 && jsvnxf['setTagName'](s1xf2j['slice'](lcy$, u_ge2)), u_ge2;
            case '>':
                switch (fxns) {
                    case gkdzh6:
                        jsvnxf['setTagName'](s1xf2j['slice'](lcy$, u_ge2));
                    case gfw21:
                    case gvsnhxj:
                    case gx21fug:
                        break;
                    case gu4_gw:
                    case ghzjnv:
                        oybc0$ = s1xf2j['slice'](lcy$, u_ge2), '/' === oybc0$['slice'](-0x1) && (jsvnxf['closed'] = !0x0, oybc0$ = oybc0$['slice'](0x0, -0x1));
                    case gsvjz:
                        fxns === gsvjz && (oybc0$ = wo04_), fxns == gu4_gw ? (q57t8r['warning']('attribute "' + oybc0$ + '" missed quot(")!!'), jsvnxf['add'](wo04_, oybc0$['replace'](/&#?\w+;/g, mlcab$), lcy$)) : ('http://www.w3.org/1999/xhtml' === zkqd8[''] && oybc0$['match'](/^(?:disabled|checked|selected)$/i) || q57t8r['warning']('attribute "' + oybc0$ + '" missed value!! "' + oybc0$ + '" instead!!'), jsvnxf['add'](oybc0$, oybc0$, lcy$));
                        break;
                    case gvkhzd:
                        throw new Error('attribute value missed!!');
                }
                return u_ge2;
            case '\u0080':
                gue21w = '\x20';
            default:
                if ('\x20' >= gue21w) switch (fxns) {
                    case gkdzh6:
                        jsvnxf['setTagName'](s1xf2j['slice'](lcy$, u_ge2)), fxns = gvsnhxj;
                        break;
                    case ghzjnv:
                        wo04_ = s1xf2j['slice'](lcy$, u_ge2), fxns = gsvjz;
                        break;
                    case gu4_gw:
                        var oybc0$ = s1xf2j['slice'](lcy$, u_ge2)['replace'](/&#?\w+;/g, mlcab$);
                        q57t8r['warning']('attribute "' + oybc0$ + '" missed quot(")!!'), jsvnxf['add'](wo04_, oybc0$, lcy$);
                    case gfw21:
                        fxns = gvsnhxj;
                } else switch (fxns) {
                    case gsvjz:
                        {
                            jsvnxf['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === zkqd8[''] && wo04_['match'](/^(?:disabled|checked|selected)$/i) || q57t8r['warning']('attribute "' + wo04_ + '" missed value!! "' + wo04_ + '" instead2!!'), jsvnxf['add'](wo04_, wo04_, lcy$), lcy$ = u_ge2, fxns = ghzjnv;
                        break;
                    case gfw21:
                        q57t8r['warning']('attribute space is required"' + wo04_ + '\x22!!');
                    case gvsnhxj:
                        fxns = ghzjnv, lcy$ = u_ge2;
                        break;
                    case gvkhzd:
                        fxns = gu4_gw, lcy$ = u_ge2;
                        break;
                    case gx21fug:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        u_ge2++;
    }
}
function gg2ufx1(q68td, jnhvsz, r5dtq) {
    for (var nxjvh = q68td['tagName'], e_wo4u = null, xfsvjn = q68td['length']; xfsvjn--;) {
        var pri57 = q68td[xfsvjn],
            jfvsxn = pri57['qName'],
            xjvnfs = pri57['value'],
            o0cy$b = jfvsxn['indexOf'](':');
        if (o0cy$b > 0x0) var zqk6d = pri57['prefix'] = jfvsxn['slice'](0x0, o0cy$b),
            vk6hn = jfvsxn['slice'](o0cy$b + 0x1),
            t53r7p = 'xmlns' === zqk6d && vk6hn;else vk6hn = jfvsxn, zqk6d = null, t53r7p = 'xmlns' === jfvsxn && '';
        pri57['localName'] = vk6hn, t53r7p !== !0x1 && (null == e_wo4u && (e_wo4u = {}, gwu2g1(r5dtq, r5dtq = {})), r5dtq[t53r7p] = e_wo4u[t53r7p] = xjvnfs, pri57['uri'] = 'http://www.w3.org/2000/xmlns/', jnhvsz['startPrefixMapping'](t53r7p, xjvnfs));
    }
    for (var xfsvjn = q68td['length']; xfsvjn--;) {
        pri57 = q68td[xfsvjn];
        var zqk6d = pri57['prefix'];
        zqk6d && ('xml' === zqk6d && (pri57['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== zqk6d && (pri57['uri'] = r5dtq[zqk6d || '']));
    }
    var o0cy$b = nxjvh['indexOf'](':');
    o0cy$b > 0x0 ? (zqk6d = q68td['prefix'] = nxjvh['slice'](0x0, o0cy$b), vk6hn = q68td['localName'] = nxjvh['slice'](o0cy$b + 0x1)) : (zqk6d = null, vk6hn = q68td['localName'] = nxjvh);
    var c$yo = q68td['uri'] = r5dtq[zqk6d || ''];
    if (jnhvsz['startElement'](c$yo, vk6hn, nxjvh, q68td), !q68td['closed']) return q68td['currentNSMap'] = r5dtq, q68td['localNSMap'] = e_wo4u, !0x0;
    if (jnhvsz['endElement'](c$yo, vk6hn, nxjvh), e_wo4u) {
        for (zqk6d in e_wo4u) jnhvsz['endPrefixMapping'](zqk6d);
    }
}
function gu4_wg(f1jns, _o4w0, vnhk, svzhjn, hzsn) {
    if (/^(?:script|textarea)$/i['test'](vnhk)) {
        var dq68r = f1jns['indexOf']('</' + vnhk + '>', _o4w0),
            f1u2g = f1jns['substring'](_o4w0 + 0x1, dq68r);
        if (/[&<]/['test'](f1u2g)) return (/^script$/i['test'](vnhk) ? (hzsn['characters'](f1u2g, 0x0, f1u2g['length']), dq68r) : (f1u2g = f1u2g['replace'](/&#?\w+;/g, svzhjn), hzsn['characters'](f1u2g, 0x0, f1u2g['length']), dq68r)
        );
    }
    return _o4w0 + 0x1;
}
function gt8qr6(dq8tr, cyb0$o, g2e_uw, kdhqz6) {
    var ir537 = kdhqz6[g2e_uw];
    return null == ir537 && (ir537 = dq8tr['lastIndexOf']('</' + g2e_uw + '>'), cyb0$o > ir537 && (ir537 = dq8tr['lastIndexOf']('</' + g2e_uw)), kdhqz6[g2e_uw] = ir537), cyb0$o > ir537;
}
function gwu2g1(ab9l$, o0byc$) {
    for (var gwue_4 in ab9l$) o0byc$[gwue_4] = ab9l$[gwue_4];
}
function gw1gu2(w_u2, wug12f, xsfjn1, cyml) {
    var tdqk8 = w_u2['charAt'](wug12f + 0x2);
    switch (tdqk8) {
        case '-':
            if ('-' === w_u2['charAt'](wug12f + 0x3)) {
                var svnfx = w_u2['indexOf']('-->', wug12f + 0x4);
                return svnfx > wug12f ? (xsfjn1['comment'](w_u2, wug12f + 0x4, svnfx - wug12f - 0x4), svnfx + 0x3) : (cyml['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == w_u2['substr'](wug12f + 0x3, 0x6)) {
                var svnfx = w_u2['indexOf'](']]>', wug12f + 0x9);
                return xsfjn1['startCDATA'](), xsfjn1['characters'](w_u2, wug12f + 0x9, svnfx - wug12f - 0x9), xsfjn1['endCDATA'](), svnfx + 0x3;
            }
            var ktdq6 = grd8q(w_u2, wug12f),
                tq85dr = ktdq6['length'];
            if (tq85dr > 0x1 && /!doctype/i['test'](ktdq6[0x0][0x0])) {
                var sx2fj = ktdq6[0x1][0x0],
                    fsnjx = tq85dr > 0x3 && /^public$/i['test'](ktdq6[0x2][0x0]) && ktdq6[0x3][0x0],
                    vkznjh = tq85dr > 0x4 && ktdq6[0x4][0x0],
                    hknvzj = ktdq6[tq85dr - 0x1];
                return xsfjn1['startDTD'](sx2fj, fsnjx && fsnjx['replace'](/^(['"])(.*?)\1$/, '$2'), vkznjh && vkznjh['replace'](/^(['"])(.*?)\1$/, '$2')), xsfjn1['endDTD'](), hknvzj['index'] + hknvzj[0x0]['length'];
            }
    }
    return -0x1;
}
function gr5t37p(l$a9, khzv, hvzd6k) {
    var p3ri75 = l$a9['indexOf']('?>', khzv);
    if (p3ri75) {
        var bal9m = l$a9['substring'](khzv, p3ri75)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (bal9m) {
            {
                bal9m[0x0]['length'];
            }
            return hvzd6k['processingInstruction'](bal9m[0x1], bal9m[0x2]), p3ri75 + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function gbam$9l() {}
function gvh6nz(xs1jnf, jnvsxf) {
    return xs1jnf['__proto__'] = jnvsxf, xs1jnf;
}
function grd8q(rt57p, p3t7) {
    var z6kqd8,
        qtr85d = [],
        gwf2u1 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (gwf2u1['lastIndex'] = p3t7, gwf2u1['exec'](rt57p); z6kqd8 = gwf2u1['exec'](rt57p);) if (qtr85d['push'](z6kqd8), z6kqd8[0x1]) return qtr85d;
}
var g$blcmy = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    ge4g_u = new RegExp('[\\-\\.0-9' + g$blcmy['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    gjxf = new RegExp('^' + g$blcmy['source'] + ge4g_u['source'] + '*(?::' + g$blcmy['source'] + ge4g_u['source'] + '*)?$'),
    gkdzh6 = 0x0,
    ghzjnv = 0x1,
    gsvjz = 0x2,
    gvkhzd = 0x3,
    gu4_gw = 0x4,
    gfw21 = 0x5,
    gvsnhxj = 0x6,
    gx21fug = 0x7;
gzq86d['prototype'] = {
    'parse': function (dhvz6k, vhn, jvszhn) {
        var fvxs = this['domBuilder'];
        fvxs['startDocument'](), gwu2g1(vhn, vhn = {}), gjhnzv(dhvz6k, vhn, jvszhn, fvxs, this['errorHandler']), fvxs['endDocument']();
    }
}, gbam$9l['prototype'] = {
    'setTagName': function (dtq5r) {
        if (!gjxf['test'](dtq5r)) throw new Error('invalid tagName:' + dtq5r);
        this['tagName'] = dtq5r;
    },
    'add': function (uxg1f, jvhknz, _uw4e) {
        if (!gjxf['test'](uxg1f)) throw new Error('invalid attribute:' + uxg1f);
        this[this['length']++] = {
            'qName': uxg1f,
            'value': jvhknz,
            'offset': _uw4e
        };
    },
    'length': 0x0,
    'getLocalName': function (hsnjvz) {
        return this[hsnjvz]['localName'];
    },
    'getLocator': function (b$oy) {
        return this[b$oy]['locator'];
    },
    'getQName': function ($yob0) {
        return this[$yob0]['qName'];
    },
    'getURI': function ($alcm) {
        return this[$alcm]['uri'];
    },
    'getValue': function (xsf21g) {
        return this[xsf21g]['value'];
    }
}, gvh6nz({}, gvh6nz['prototype']) instanceof gvh6nz || (gvh6nz = function (e_4wgu, hjxvns) {
    function zvh6kd() {}
    zvh6kd['prototype'] = hjxvns, zvh6kd = new zvh6kd();
    for (hjxvns in e_4wgu) zvh6kd[hjxvns] = e_4wgu[hjxvns];
    return zvh6kd;
}), exports['XMLReader'] = gzq86d;