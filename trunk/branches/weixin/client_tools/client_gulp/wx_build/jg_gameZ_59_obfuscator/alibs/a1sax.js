var c = wx.$a;
function gq8dkt6() {}
function gz6qd8k(t6r8qd, $byl0c, cbyl$0, lc$bma, lm$bc) {
    function cmalb$(vzkhnj) {
        if (vzkhnj > 0xffff) {
            vzkhnj -= 0x10000;
            var ug2 = 0xd800 + (vzkhnj >> 0xa),
                xns1jf = 0xdc00 + (0x3ff & vzkhnj);
            return String['fromCharCode'](ug2, xns1jf);
        }
        return String['fromCharCode'](vzkhnj);
    }
    function kt8q(xns1j) {
        var sf1gx = xns1j['slice'](0x1, -0x1);
        return sf1gx in cbyl$0 ? cbyl$0[sf1gx] : '#' === sf1gx['charAt'](0x0) ? cmalb$(parseInt(sf1gx['substr'](0x1)['replace']('x', '0x'))) : (lm$bc['error']('entity not found:' + xns1j), xns1j);
    }
    function t3p5r(xgsf2) {
        if (xgsf2 > gsf1x) {
            var vshnj = t6r8qd['substring'](gsf1x, xgsf2)['replace'](/&#?\w+;/g, kt8q);
            nvzhkj && p3i57r(gsf1x), lc$bma['characters'](vshnj, 0x0, xgsf2 - gsf1x), gsf1x = xgsf2;
        }
    }
    function p3i57r(o0e_4, f1u2g) {
        for (; o0e_4 >= sxjn1 && (f1u2g = oyc0$b['exec'](t6r8qd));) c_o0y4 = f1u2g['index'], sxjn1 = c_o0y4 + f1u2g[0x0]['length'], nvzhkj['lineNumber']++;
        nvzhkj['columnNumber'] = o0e_4 - c_o0y4 + 0x1;
    }
    for (var c_o0y4 = 0x0, sxjn1 = 0x0, oyc0$b = /.*(?:\r\n?|\n)|.*$/g, nvzhkj = lc$bma['locator'], p73i = [{ 'currentNSMap': $byl0c }], xg21sf = {}, gsf1x = 0x0;;) {
        try {
            var ouwe_ = t6r8qd['indexOf']('<', gsf1x);
            if (0x0 > ouwe_) {
                if (!t6r8qd['substr'](gsf1x)['match'](/^\s*$/)) {
                    var dzvh6k = lc$bma['doc'],
                        w0_4oe = dzvh6k['createTextNode'](t6r8qd['substr'](gsf1x));
                    dzvh6k['appendChild'](w0_4oe), lc$bma['currentElement'] = w0_4oe;
                }
                return;
            }
            switch (ouwe_ > gsf1x && t3p5r(ouwe_), t6r8qd['charAt'](ouwe_ + 0x1)) {
                case '/':
                    var snfvjx = t6r8qd['indexOf']('>', ouwe_ + 0x3),
                        mby$lc = t6r8qd['substring'](ouwe_ + 0x2, snfvjx),
                        gfxu12 = p73i['pop']();
                    0x0 > snfvjx ? (mby$lc = t6r8qd['substring'](ouwe_ + 0x2)['replace'](/[\s<].*/, ''), lm$bc['error']('end tag name: ' + mby$lc + ' is not complete:' + gfxu12['tagName']), snfvjx = ouwe_ + 0x1 + mby$lc['length']) : mby$lc['match'](/\s</) && (mby$lc = mby$lc['replace'](/[\s<].*/, ''), lm$bc['error']('end tag name: ' + mby$lc + ' maybe not complete'), snfvjx = ouwe_ + 0x1 + mby$lc['length']);
                    var q8k6z = gfxu12['localNSMap'],
                        guew4 = gfxu12['tagName'] == mby$lc,
                        tq86k = guew4 || gfxu12['tagName'] && gfxu12['tagName']['toLowerCase']() == mby$lc['toLowerCase']();
                    if (tq86k) {
                        if (lc$bma['endElement'](gfxu12['uri'], gfxu12['localName'], mby$lc), q8k6z) {
                            for (var b0ly$ in q8k6z) lc$bma['endPrefixMapping'](b0ly$);
                        }
                        guew4 || lm$bc['fatalError']('end tag name: ' + mby$lc + ' is not match the current start tagName:' + gfxu12['tagName']);
                    } else p73i['push'](gfxu12);
                    snfvjx++;
                    break;
                case '?':
                    nvzhkj && p3i57r(ouwe_), snfvjx = gewu(t6r8qd, ouwe_, lc$bma);
                    break;
                case '!':
                    nvzhkj && p3i57r(ouwe_), snfvjx = gk8tq(t6r8qd, ouwe_, lc$bma, lm$bc);
                    break;
                default:
                    nvzhkj && p3i57r(ouwe_);
                    var b$9la = new gvhsxjn(),
                        camlb$ = p73i[p73i['length'] - 0x1]['currentNSMap'],
                        snfvjx = ggw4e_u(t6r8qd, ouwe_, b$9la, camlb$, kt8q, lm$bc),
                        e_u4 = b$9la['length'];
                    if (!b$9la['closed'] && gxf21gu(t6r8qd, snfvjx, b$9la['tagName'], xg21sf) && (b$9la['closed'] = !0x0, cbyl$0['nbsp'] || lm$bc['warning']('unclosed xml attribute')), nvzhkj && e_u4) {
                        for (var _4yo0c = ghvz6nk(nvzhkj, {}), lam$c = 0x0; e_u4 > lam$c; lam$c++) {
                            var f1x2s = b$9la[lam$c];
                            p3i57r(f1x2s['offset']), f1x2s['locator'] = ghvz6nk(nvzhkj, {});
                        }
                        lc$bma['locator'] = _4yo0c, grd58tq(b$9la, lc$bma, camlb$) && p73i['push'](b$9la), lc$bma['locator'] = nvzhkj;
                    } else grd58tq(b$9la, lc$bma, camlb$) && p73i['push'](b$9la);
                    'http://www.w3.org/1999/xhtml' !== b$9la['uri'] || b$9la['closed'] ? snfvjx++ : snfvjx = gjvsznh(t6r8qd, snfvjx, b$9la['tagName'], kt8q, lc$bma);
            }
        } catch (bo0c4) {
            lm$bc['error']('element parse error: ' + bo0c4), snfvjx = -0x1;
        }
        snfvjx > gsf1x ? gsf1x = snfvjx : t3p5r(Math['max'](ouwe_, gsf1x) + 0x1);
    }
}
function ghvz6nk(fxjvs, lamc) {
    return lamc['lineNumber'] = fxjvs['lineNumber'], lamc['columnNumber'] = fxjvs['columnNumber'], lamc;
}
function ggw4e_u(fnxvsj, bm$a9l, z86dk, my$bl, d8k6qt, hzv6kd) {
    for (var xfj12, f2wg1, _o0yc4 = ++bm$a9l, qdt68r = gcb$a;;) {
        var _4cy0 = fnxvsj['charAt'](_o0yc4);
        switch (_4cy0) {
            case '=':
                if (qdt68r === g_y0o4c) xfj12 = fnxvsj['slice'](bm$a9l, _o0yc4), qdt68r = gdq8r6t;else {
                    if (qdt68r !== gw_4egu) throw new Error('attribute equal must after attrName');
                    qdt68r = gdq8r6t;
                }
                break;
            case '\x27':
            case '\x22':
                if (qdt68r === gdq8r6t || qdt68r === g_y0o4c) {
                    if (qdt68r === g_y0o4c && (hzv6kd['warning']('attribute value must after "="'), xfj12 = fnxvsj['slice'](bm$a9l, _o0yc4)), bm$a9l = _o0yc4 + 0x1, _o0yc4 = fnxvsj['indexOf'](_4cy0, bm$a9l), !(_o0yc4 > 0x0)) throw new Error('attribute value no end \'' + _4cy0 + '\' match');
                    f2wg1 = fnxvsj['slice'](bm$a9l, _o0yc4)['replace'](/&#?\w+;/g, d8k6qt), z86dk['add'](xfj12, f2wg1, bm$a9l - 0x1), qdt68r = g_2w;
                } else {
                    if (qdt68r != gfgs2) throw new Error('attribute value must after "="');
                    f2wg1 = fnxvsj['slice'](bm$a9l, _o0yc4)['replace'](/&#?\w+;/g, d8k6qt), z86dk['add'](xfj12, f2wg1, bm$a9l), hzv6kd['warning']('attribute "' + xfj12 + '" missed start quot(' + _4cy0 + ')!!'), bm$a9l = _o0yc4 + 0x1, qdt68r = g_2w;
                }
                break;
            case '/':
                switch (qdt68r) {
                    case gcb$a:
                        z86dk['setTagName'](fnxvsj['slice'](bm$a9l, _o0yc4));
                    case g_2w:
                    case gd6zvkh:
                    case g$yc0b:
                        qdt68r = g$yc0b, z86dk['closed'] = !0x0;
                    case gfgs2:
                    case g_y0o4c:
                    case gw_4egu:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return hzv6kd['error']('unexpected end of input'), qdt68r == gcb$a && z86dk['setTagName'](fnxvsj['slice'](bm$a9l, _o0yc4)), _o0yc4;
            case '>':
                switch (qdt68r) {
                    case gcb$a:
                        z86dk['setTagName'](fnxvsj['slice'](bm$a9l, _o0yc4));
                    case g_2w:
                    case gd6zvkh:
                    case g$yc0b:
                        break;
                    case gfgs2:
                    case g_y0o4c:
                        f2wg1 = fnxvsj['slice'](bm$a9l, _o0yc4), '/' === f2wg1['slice'](-0x1) && (z86dk['closed'] = !0x0, f2wg1 = f2wg1['slice'](0x0, -0x1));
                    case gw_4egu:
                        qdt68r === gw_4egu && (f2wg1 = xfj12), qdt68r == gfgs2 ? (hzv6kd['warning']('attribute "' + f2wg1 + '" missed quot(")!!'), z86dk['add'](xfj12, f2wg1['replace'](/&#?\w+;/g, d8k6qt), bm$a9l)) : ('http://www.w3.org/1999/xhtml' === my$bl[''] && f2wg1['match'](/^(?:disabled|checked|selected)$/i) || hzv6kd['warning']('attribute "' + f2wg1 + '" missed value!! "' + f2wg1 + '" instead!!'), z86dk['add'](f2wg1, f2wg1, bm$a9l));
                        break;
                    case gdq8r6t:
                        throw new Error('attribute value missed!!');
                }
                return _o0yc4;
            case '\u0080':
                _4cy0 = '\x20';
            default:
                if ('\x20' >= _4cy0) switch (qdt68r) {
                    case gcb$a:
                        z86dk['setTagName'](fnxvsj['slice'](bm$a9l, _o0yc4)), qdt68r = gd6zvkh;
                        break;
                    case g_y0o4c:
                        xfj12 = fnxvsj['slice'](bm$a9l, _o0yc4), qdt68r = gw_4egu;
                        break;
                    case gfgs2:
                        var f2wg1 = fnxvsj['slice'](bm$a9l, _o0yc4)['replace'](/&#?\w+;/g, d8k6qt);
                        hzv6kd['warning']('attribute "' + f2wg1 + '" missed quot(")!!'), z86dk['add'](xfj12, f2wg1, bm$a9l);
                    case g_2w:
                        qdt68r = gd6zvkh;
                } else switch (qdt68r) {
                    case gw_4egu:
                        {
                            z86dk['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === my$bl[''] && xfj12['match'](/^(?:disabled|checked|selected)$/i) || hzv6kd['warning']('attribute "' + xfj12 + '" missed value!! "' + xfj12 + '" instead2!!'), z86dk['add'](xfj12, xfj12, bm$a9l), bm$a9l = _o0yc4, qdt68r = g_y0o4c;
                        break;
                    case g_2w:
                        hzv6kd['warning']('attribute space is required"' + xfj12 + '\x22!!');
                    case gd6zvkh:
                        qdt68r = g_y0o4c, bm$a9l = _o0yc4;
                        break;
                    case gdq8r6t:
                        qdt68r = gfgs2, bm$a9l = _o0yc4;
                        break;
                    case g$yc0b:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        _o0yc4++;
    }
}
function grd58tq(zqk6hd, blcm$y, nsxjf1) {
    for (var fg21xu = zqk6hd['tagName'], u2gx = null, bcl$a = zqk6hd['length']; bcl$a--;) {
        var ablcm$ = zqk6hd[bcl$a],
            yb$0o = ablcm$['qName'],
            njzhsv = ablcm$['value'],
            ew1u2 = yb$0o['indexOf'](':');
        if (ew1u2 > 0x0) var ue1wg2 = ablcm$['prefix'] = yb$0o['slice'](0x0, ew1u2),
            s2fg = yb$0o['slice'](ew1u2 + 0x1),
            $bocy = 'xmlns' === ue1wg2 && s2fg;else s2fg = yb$0o, ue1wg2 = null, $bocy = 'xmlns' === yb$0o && '';
        ablcm$['localName'] = s2fg, $bocy !== !0x1 && (null == u2gx && (u2gx = {}, ge4wu_o(nsxjf1, nsxjf1 = {})), nsxjf1[$bocy] = u2gx[$bocy] = njzhsv, ablcm$['uri'] = 'http://www.w3.org/2000/xmlns/', blcm$y['startPrefixMapping']($bocy, njzhsv));
    }
    for (var bcl$a = zqk6hd['length']; bcl$a--;) {
        ablcm$ = zqk6hd[bcl$a];
        var ue1wg2 = ablcm$['prefix'];
        ue1wg2 && ('xml' === ue1wg2 && (ablcm$['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== ue1wg2 && (ablcm$['uri'] = nsxjf1[ue1wg2 || '']));
    }
    var ew1u2 = fg21xu['indexOf'](':');
    ew1u2 > 0x0 ? (ue1wg2 = zqk6hd['prefix'] = fg21xu['slice'](0x0, ew1u2), s2fg = zqk6hd['localName'] = fg21xu['slice'](ew1u2 + 0x1)) : (ue1wg2 = null, s2fg = zqk6hd['localName'] = fg21xu);
    var gxu2f1 = zqk6hd['uri'] = nsxjf1[ue1wg2 || ''];
    if (blcm$y['startElement'](gxu2f1, s2fg, fg21xu, zqk6hd), !zqk6hd['closed']) return zqk6hd['currentNSMap'] = nsxjf1, zqk6hd['localNSMap'] = u2gx, !0x0;
    if (blcm$y['endElement'](gxu2f1, s2fg, fg21xu), u2gx) {
        for (ue1wg2 in u2gx) blcm$y['endPrefixMapping'](ue1wg2);
    }
}
function gjvsznh(vkjznh, kqhzd6, sxnf, zhkvn, xsfg) {
    if (/^(?:script|textarea)$/i['test'](sxnf)) {
        var sfx2 = vkjznh['indexOf']('</' + sxnf + '>', kqhzd6),
            $b0lyc = vkjznh['substring'](kqhzd6 + 0x1, sfx2);
        if (/[&<]/['test']($b0lyc)) return (/^script$/i['test'](sxnf) ? (xsfg['characters']($b0lyc, 0x0, $b0lyc['length']), sfx2) : ($b0lyc = $b0lyc['replace'](/&#?\w+;/g, zhkvn), xsfg['characters']($b0lyc, 0x0, $b0lyc['length']), sfx2)
        );
    }
    return kqhzd6 + 0x1;
}
function gxf21gu(kjzh, kjhnv, hnvkj, j12s) {
    var i357 = j12s[hnvkj];
    return null == i357 && (i357 = kjzh['lastIndexOf']('</' + hnvkj + '>'), kjhnv > i357 && (i357 = kjzh['lastIndexOf']('</' + hnvkj)), j12s[hnvkj] = i357), kjhnv > i357;
}
function ge4wu_o(shnv, zhjnv) {
    for (var zkqh6 in shnv) zhjnv[zkqh6] = shnv[zkqh6];
}
function gk8tq(oe04, bcalm$, zqdk68, k6vdh) {
    var jsx1f2 = oe04['charAt'](bcalm$ + 0x2);
    switch (jsx1f2) {
        case '-':
            if ('-' === oe04['charAt'](bcalm$ + 0x3)) {
                var dh6zv = oe04['indexOf']('-->', bcalm$ + 0x4);
                return dh6zv > bcalm$ ? (zqdk68['comment'](oe04, bcalm$ + 0x4, dh6zv - bcalm$ - 0x4), dh6zv + 0x3) : (k6vdh['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == oe04['substr'](bcalm$ + 0x3, 0x6)) {
                var dh6zv = oe04['indexOf'](']]>', bcalm$ + 0x9);
                return zqdk68['startCDATA'](), zqdk68['characters'](oe04, bcalm$ + 0x9, dh6zv - bcalm$ - 0x9), zqdk68['endCDATA'](), dh6zv + 0x3;
            }
            var uwgf2 = gqzdk8(oe04, bcalm$),
                uegw2_ = uwgf2['length'];
            if (uegw2_ > 0x1 && /!doctype/i['test'](uwgf2[0x0][0x0])) {
                var q86zk = uwgf2[0x1][0x0],
                    kv6 = uegw2_ > 0x3 && /^public$/i['test'](uwgf2[0x2][0x0]) && uwgf2[0x3][0x0],
                    g2uw1e = uegw2_ > 0x4 && uwgf2[0x4][0x0],
                    b9$am = uwgf2[uegw2_ - 0x1];
                return zqdk68['startDTD'](q86zk, kv6 && kv6['replace'](/^(['"])(.*?)\1$/, '$2'), g2uw1e && g2uw1e['replace'](/^(['"])(.*?)\1$/, '$2')), zqdk68['endDTD'](), b9$am['index'] + b9$am[0x0]['length'];
            }
    }
    return -0x1;
}
function gewu(oey4_0, s1xf, al$9) {
    var y0$cl = oey4_0['indexOf']('?>', s1xf);
    if (y0$cl) {
        var t5rdq8 = oey4_0['substring'](s1xf, y0$cl)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (t5rdq8) {
            {
                t5rdq8[0x0]['length'];
            }
            return al$9['processingInstruction'](t5rdq8[0x1], t5rdq8[0x2]), y0$cl + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function gvhsxjn() {}
function gqtdr6(d6zhqk, _0y) {
    return d6zhqk['__proto__'] = _0y, d6zhqk;
}
function gqzdk8(by$c0, jnkvhz) {
    var fu1w,
        y40e_ = [],
        m$aclb = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (m$aclb['lastIndex'] = jnkvhz, m$aclb['exec'](by$c0); fu1w = m$aclb['exec'](by$c0);) if (y40e_['push'](fu1w), fu1w[0x1]) return y40e_;
}
var gbco$y0 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    gc_4yo0 = new RegExp('[\\-\\.0-9' + gbco$y0['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    guewo_4 = new RegExp('^' + gbco$y0['source'] + gc_4yo0['source'] + '*(?::' + gbco$y0['source'] + gc_4yo0['source'] + '*)?$'),
    gcb$a = 0x0,
    g_y0o4c = 0x1,
    gw_4egu = 0x2,
    gdq8r6t = 0x3,
    gfgs2 = 0x4,
    g_2w = 0x5,
    gd6zvkh = 0x6,
    g$yc0b = 0x7;
gq8dkt6['prototype'] = {
    'parse': function (lb9$m, xg1sf2, ue_2wg) {
        var nxvj = this['domBuilder'];
        nxvj['startDocument'](), ge4wu_o(xg1sf2, xg1sf2 = {}), gz6qd8k(lb9$m, xg1sf2, ue_2wg, nxvj, this['errorHandler']), nxvj['endDocument']();
    }
}, gvhsxjn['prototype'] = {
    'setTagName': function (eu_ow4) {
        if (!guewo_4['test'](eu_ow4)) throw new Error('invalid tagName:' + eu_ow4);
        this['tagName'] = eu_ow4;
    },
    'add': function (cblym, rt8q, cbmla) {
        if (!guewo_4['test'](cblym)) throw new Error('invalid attribute:' + cblym);
        this[this['length']++] = {
            'qName': cblym,
            'value': rt8q,
            'offset': cbmla
        };
    },
    'length': 0x0,
    'getLocalName': function (jznv) {
        return this[jznv]['localName'];
    },
    'getLocator': function (balcm$) {
        return this[balcm$]['locator'];
    },
    'getQName': function (shxvnj) {
        return this[shxvnj]['qName'];
    },
    'getURI': function (v6dkz) {
        return this[v6dkz]['uri'];
    },
    'getValue': function (d8r6tq) {
        return this[d8r6tq]['value'];
    }
}, gqtdr6({}, gqtdr6['prototype']) instanceof gqtdr6 || (gqtdr6 = function (khq, w_o4e0) {
    function g12ufw() {}
    g12ufw['prototype'] = w_o4e0, g12ufw = new g12ufw();
    for (w_o4e0 in khq) g12ufw[w_o4e0] = khq[w_o4e0];
    return g12ufw;
}), exports['XMLReader'] = gq8dkt6;