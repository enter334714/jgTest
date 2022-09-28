var f = wx.$B;
function Sxrwt$8() {}
function Sjlz1(k7t4s, yh369, jz1loq, aj1ou, ajomyu) {
    function v03gb2(fkgb4) {
        if (fkgb4 > 0xffff) {
            fkgb4 -= 0x10000;
            var jouqm = 0xd800 + (fkgb4 >> 0xa),
                $_xpni = 0xdc00 + (0x3ff & fkgb4);
            return String['fromCharCode'](jouqm, $_xpni);
        }
        return String['fromCharCode'](fkgb4);
    }
    function kf4t(aq1ujo) {
        var v2390h = aq1ujo['slice'](0x1, -0x1);
        return v2390h in jz1loq ? jz1loq[v2390h] : '#' === v2390h['charAt'](0x0) ? v03gb2(parseInt(v2390h['substr'](0x1)['replace']('x', '0x'))) : (ajomyu['error']('entity not found:' + aq1ujo), aq1ujo);
    }
    function px$iw8(tw78r$) {
        if (tw78r$ > mqju) {
            var z1eo = k7t4s['substring'](mqju, tw78r$)['replace'](/&#?\w+;/g, kf4t);
            quamjo && s8w7(mqju), aj1ou['characters'](z1eo, 0x0, tw78r$ - mqju), mqju = tw78r$;
        }
    }
    function s8w7(lz15qe, qzl15e) {
        for (; lz15qe >= y9hm6a && (qzl15e = joqlz1['exec'](k7t4s));) joqa1u = qzl15e['index'], y9hm6a = joqa1u + qzl15e[0x0]['length'], quamjo['lineNumber']++;
        quamjo['columnNumber'] = lz15qe - joqa1u + 0x1;
    }
    for (var joqa1u = 0x0, y9hm6a = 0x0, joqlz1 = /.*(?:\r\n?|\n)|.*$/g, quamjo = aj1ou['locator'], rx8$i = [{ 'currentNSMap': yh369 }], n_pxi = {}, mqju = 0x0;;) {
        try {
            var p_i$n = k7t4s['indexOf']('<', mqju);
            if (0x0 > p_i$n) {
                if (!k7t4s['substr'](mqju)['match'](/^\s*$/)) {
                    var w8ix$r = aj1ou['doc'],
                        l1ojz = w8ix$r['createTextNode'](k7t4s['substr'](mqju));
                    w8ix$r['appendChild'](l1ojz), aj1ou['currentElement'] = l1ojz;
                }
                return;
            }
            switch (p_i$n > mqju && px$iw8(p_i$n), k7t4s['charAt'](p_i$n + 0x1)) {
                case '/':
                    var qjzl = k7t4s['indexOf']('>', p_i$n + 0x3),
                        nip_$ = k7t4s['substring'](p_i$n + 0x2, qjzl),
                        g2b30 = rx8$i['pop']();
                    0x0 > qjzl ? (nip_$ = k7t4s['substring'](p_i$n + 0x2)['replace'](/[\s<].*/, ''), ajomyu['error']('end tag name: ' + nip_$ + ' is not complete:' + g2b30['tagName']), qjzl = p_i$n + 0x1 + nip_$['length']) : nip_$['match'](/\s</) && (nip_$ = nip_$['replace'](/[\s<].*/, ''), ajomyu['error']('end tag name: ' + nip_$ + ' maybe not complete'), qjzl = p_i$n + 0x1 + nip_$['length']);
                    var jaoqum = g2b30['localNSMap'],
                        quo1j = g2b30['tagName'] == nip_$,
                        x$p_8 = quo1j || g2b30['tagName'] && g2b30['tagName']['toLowerCase']() == nip_$['toLowerCase']();
                    if (x$p_8) {
                        if (aj1ou['endElement'](g2b30['uri'], g2b30['localName'], nip_$), jaoqum) {
                            for (var tw4rs in jaoqum) aj1ou['endPrefixMapping'](tw4rs);
                        }
                        quo1j || ajomyu['fatalError']('end tag name: ' + nip_$ + ' is not match the current start tagName:' + g2b30['tagName']);
                    } else rx8$i['push'](g2b30);
                    qjzl++;
                    break;
                case '?':
                    quamjo && s8w7(p_i$n), qjzl = Skg2dfb(k7t4s, p_i$n, aj1ou);
                    break;
                case '!':
                    quamjo && s8w7(p_i$n), qjzl = Sbdgf(k7t4s, p_i$n, aj1ou, ajomyu);
                    break;
                default:
                    quamjo && s8w7(p_i$n);
                    var $ni = new Sx$iwp8(),
                        $xt8w = rx8$i[rx8$i['length'] - 0x1]['currentNSMap'],
                        qjzl = Sb4kdsf(k7t4s, p_i$n, $ni, $xt8w, kf4t, ajomyu),
                        jluo1q = $ni['length'];
                    if (!$ni['closed'] && Sdfgk2(k7t4s, qjzl, $ni['tagName'], n_pxi) && ($ni['closed'] = !0x0, jz1loq['nbsp'] || ajomyu['warning']('unclosed xml attribute')), quamjo && jluo1q) {
                        for (var kst47r = Sw7rst4(quamjo, {}), g3vb2d = 0x0; jluo1q > g3vb2d; g3vb2d++) {
                            var a1uj = $ni[g3vb2d];
                            s8w7(a1uj['offset']), a1uj['locator'] = Sw7rst4(quamjo, {});
                        }
                        aj1ou['locator'] = kst47r, Slq15($ni, aj1ou, $xt8w) && rx8$i['push']($ni), aj1ou['locator'] = quamjo;
                    } else Slq15($ni, aj1ou, $xt8w) && rx8$i['push']($ni);
                    'http://www.w3.org/1999/xhtml' !== $ni['uri'] || $ni['closed'] ? qjzl++ : qjzl = Sxw8$r(k7t4s, qjzl, $ni['tagName'], kf4t, aj1ou);
            }
        } catch (xiw8p$) {
            ajomyu['error']('element parse error: ' + xiw8p$), qjzl = -0x1;
        }
        qjzl > mqju ? mqju = qjzl : px$iw8(Math['max'](p_i$n, mqju) + 0x1);
    }
}
function Sw7rst4(y93h60, uomya) {
    return uomya['lineNumber'] = y93h60['lineNumber'], uomya['columnNumber'] = y93h60['columnNumber'], uomya;
}
function Sb4kdsf(y06h3, mh69ay, qzle, ma69yh, n_x$, aoqjum) {
    for (var h60v39, j1lqzo, v0h6 = ++mh69ay, rwt7 = S$ir8;;) {
        var kr47 = y06h3['charAt'](v0h6);
        switch (kr47) {
            case '=':
                if (rwt7 === Srwix$) h60v39 = y06h3['slice'](mh69ay, v0h6), rwt7 = Sljuo1q;else {
                    if (rwt7 !== Skf4bsd) throw new Error('attribute equal must after attrName');
                    rwt7 = Sljuo1q;
                }
                break;
            case '\x27':
            case '\x22':
                if (rwt7 === Sljuo1q || rwt7 === Srwix$) {
                    if (rwt7 === Srwix$ && (aoqjum['warning']('attribute value must after "="'), h60v39 = y06h3['slice'](mh69ay, v0h6)), mh69ay = v0h6 + 0x1, v0h6 = y06h3['indexOf'](kr47, mh69ay), !(v0h6 > 0x0)) throw new Error('attribute value no end \'' + kr47 + '\' match');
                    j1lqzo = y06h3['slice'](mh69ay, v0h6)['replace'](/&#?\w+;/g, n_x$), qzle['add'](h60v39, j1lqzo, mh69ay - 0x1), rwt7 = S_pi$x;
                } else {
                    if (rwt7 != Souaj) throw new Error('attribute value must after "="');
                    j1lqzo = y06h3['slice'](mh69ay, v0h6)['replace'](/&#?\w+;/g, n_x$), qzle['add'](h60v39, j1lqzo, mh69ay), aoqjum['warning']('attribute "' + h60v39 + '" missed start quot(' + kr47 + ')!!'), mh69ay = v0h6 + 0x1, rwt7 = S_pi$x;
                }
                break;
            case '/':
                switch (rwt7) {
                    case S$ir8:
                        qzle['setTagName'](y06h3['slice'](mh69ay, v0h6));
                    case S_pi$x:
                    case Slquj1:
                    case S$rt78w:
                        rwt7 = S$rt78w, qzle['closed'] = !0x0;
                    case Souaj:
                    case Srwix$:
                    case Skf4bsd:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return aoqjum['error']('unexpected end of input'), rwt7 == S$ir8 && qzle['setTagName'](y06h3['slice'](mh69ay, v0h6)), v0h6;
            case '>':
                switch (rwt7) {
                    case S$ir8:
                        qzle['setTagName'](y06h3['slice'](mh69ay, v0h6));
                    case S_pi$x:
                    case Slquj1:
                    case S$rt78w:
                        break;
                    case Souaj:
                    case Srwix$:
                        j1lqzo = y06h3['slice'](mh69ay, v0h6), '/' === j1lqzo['slice'](-0x1) && (qzle['closed'] = !0x0, j1lqzo = j1lqzo['slice'](0x0, -0x1));
                    case Skf4bsd:
                        rwt7 === Skf4bsd && (j1lqzo = h60v39), rwt7 == Souaj ? (aoqjum['warning']('attribute "' + j1lqzo + '" missed quot(")!!'), qzle['add'](h60v39, j1lqzo['replace'](/&#?\w+;/g, n_x$), mh69ay)) : ('http://www.w3.org/1999/xhtml' === ma69yh[''] && j1lqzo['match'](/^(?:disabled|checked|selected)$/i) || aoqjum['warning']('attribute "' + j1lqzo + '" missed value!! "' + j1lqzo + '" instead!!'), qzle['add'](j1lqzo, j1lqzo, mh69ay));
                        break;
                    case Sljuo1q:
                        throw new Error('attribute value missed!!');
                }
                return v0h6;
            case '\u0080':
                kr47 = '\x20';
            default:
                if ('\x20' >= kr47) switch (rwt7) {
                    case S$ir8:
                        qzle['setTagName'](y06h3['slice'](mh69ay, v0h6)), rwt7 = Slquj1;
                        break;
                    case Srwix$:
                        h60v39 = y06h3['slice'](mh69ay, v0h6), rwt7 = Skf4bsd;
                        break;
                    case Souaj:
                        var j1lqzo = y06h3['slice'](mh69ay, v0h6)['replace'](/&#?\w+;/g, n_x$);
                        aoqjum['warning']('attribute "' + j1lqzo + '" missed quot(")!!'), qzle['add'](h60v39, j1lqzo, mh69ay);
                    case S_pi$x:
                        rwt7 = Slquj1;
                } else switch (rwt7) {
                    case Skf4bsd:
                        {
                            qzle['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === ma69yh[''] && h60v39['match'](/^(?:disabled|checked|selected)$/i) || aoqjum['warning']('attribute "' + h60v39 + '" missed value!! "' + h60v39 + '" instead2!!'), qzle['add'](h60v39, h60v39, mh69ay), mh69ay = v0h6, rwt7 = Srwix$;
                        break;
                    case S_pi$x:
                        aoqjum['warning']('attribute space is required"' + h60v39 + '\x22!!');
                    case Slquj1:
                        rwt7 = Srwix$, mh69ay = v0h6;
                        break;
                    case Sljuo1q:
                        rwt7 = Souaj, mh69ay = v0h6;
                        break;
                    case S$rt78w:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        v0h6++;
    }
}
function Slq15(f47skt, qzole, bfgk2) {
    for (var bdvfg2 = f47skt['tagName'], t$w7r = null, u6m = f47skt['length']; u6m--;) {
        var ya6hm = f47skt[u6m],
            uam9y = ya6hm['qName'],
            sb4f = ya6hm['value'],
            m0y96h = uam9y['indexOf'](':');
        if (m0y96h > 0x0) var gfkb2d = ya6hm['prefix'] = uam9y['slice'](0x0, m0y96h),
            g2dbfv = uam9y['slice'](m0y96h + 0x1),
            r47ks = 'xmlns' === gfkb2d && g2dbfv;else g2dbfv = uam9y, gfkb2d = null, r47ks = 'xmlns' === uam9y && '';
        ya6hm['localName'] = g2dbfv, r47ks !== !0x1 && (null == t$w7r && (t$w7r = {}, Smoaj(bfgk2, bfgk2 = {})), bfgk2[r47ks] = t$w7r[r47ks] = sb4f, ya6hm['uri'] = 'http://www.w3.org/2000/xmlns/', qzole['startPrefixMapping'](r47ks, sb4f));
    }
    for (var u6m = f47skt['length']; u6m--;) {
        ya6hm = f47skt[u6m];
        var gfkb2d = ya6hm['prefix'];
        gfkb2d && ('xml' === gfkb2d && (ya6hm['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== gfkb2d && (ya6hm['uri'] = bfgk2[gfkb2d || '']));
    }
    var m0y96h = bdvfg2['indexOf'](':');
    m0y96h > 0x0 ? (gfkb2d = f47skt['prefix'] = bdvfg2['slice'](0x0, m0y96h), g2dbfv = f47skt['localName'] = bdvfg2['slice'](m0y96h + 0x1)) : (gfkb2d = null, g2dbfv = f47skt['localName'] = bdvfg2);
    var sktf = f47skt['uri'] = bfgk2[gfkb2d || ''];
    if (qzole['startElement'](sktf, g2dbfv, bdvfg2, f47skt), !f47skt['closed']) return f47skt['currentNSMap'] = bfgk2, f47skt['localNSMap'] = t$w7r, !0x0;
    if (qzole['endElement'](sktf, g2dbfv, bdvfg2), t$w7r) {
        for (gfkb2d in t$w7r) qzole['endPrefixMapping'](gfkb2d);
    }
}
function Sxw8$r(ks74, m0yh96, r4ws, tkr7s4, s7r8t) {
    if (/^(?:script|textarea)$/i['test'](r4ws)) {
        var rk7s4 = ks74['indexOf']('</' + r4ws + '>', m0yh96),
            qua1 = ks74['substring'](m0yh96 + 0x1, rk7s4);
        if (/[&<]/['test'](qua1)) return (/^script$/i['test'](r4ws) ? (s7r8t['characters'](qua1, 0x0, qua1['length']), rk7s4) : (qua1 = qua1['replace'](/&#?\w+;/g, tkr7s4), s7r8t['characters'](qua1, 0x0, qua1['length']), rk7s4)
        );
    }
    return m0yh96 + 0x1;
}
function Sdfgk2(dfvgb, tks, qzl1j, b4sk) {
    var fbs4dk = b4sk[qzl1j];
    return null == fbs4dk && (fbs4dk = dfvgb['lastIndexOf']('</' + qzl1j + '>'), tks > fbs4dk && (fbs4dk = dfvgb['lastIndexOf']('</' + qzl1j)), b4sk[qzl1j] = fbs4dk), tks > fbs4dk;
}
function Smoaj(oz1lq, $in_px) {
    for (var juoya in oz1lq) $in_px[juoya] = oz1lq[juoya];
}
function Sbdgf(ktr74s, bv2gdf, oja, qjl1uo) {
    var qjou1l = ktr74s['charAt'](bv2gdf + 0x2);
    switch (qjou1l) {
        case '-':
            if ('-' === ktr74s['charAt'](bv2gdf + 0x3)) {
                var g20hv3 = ktr74s['indexOf']('-->', bv2gdf + 0x4);
                return g20hv3 > bv2gdf ? (oja['comment'](ktr74s, bv2gdf + 0x4, g20hv3 - bv2gdf - 0x4), g20hv3 + 0x3) : (qjl1uo['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == ktr74s['substr'](bv2gdf + 0x3, 0x6)) {
                var g20hv3 = ktr74s['indexOf'](']]>', bv2gdf + 0x9);
                return oja['startCDATA'](), oja['characters'](ktr74s, bv2gdf + 0x9, g20hv3 - bv2gdf - 0x9), oja['endCDATA'](), g20hv3 + 0x3;
            }
            var xp_i8$ = Sleqz15(ktr74s, bv2gdf),
                irx8w = xp_i8$['length'];
            if (irx8w > 0x1 && /!doctype/i['test'](xp_i8$[0x0][0x0])) {
                var w8p$xi = xp_i8$[0x1][0x0],
                    ksd74 = irx8w > 0x3 && /^public$/i['test'](xp_i8$[0x2][0x0]) && xp_i8$[0x3][0x0],
                    f7k4d = irx8w > 0x4 && xp_i8$[0x4][0x0],
                    gbdf4 = xp_i8$[irx8w - 0x1];
                return oja['startDTD'](w8p$xi, ksd74 && ksd74['replace'](/^(['"])(.*?)\1$/, '$2'), f7k4d && f7k4d['replace'](/^(['"])(.*?)\1$/, '$2')), oja['endDTD'](), gbdf4['index'] + gbdf4[0x0]['length'];
            }
    }
    return -0x1;
}
function Skg2dfb(fks4t7, yua6j, uq1ajo) {
    var oaqj1 = fks4t7['indexOf']('?>', yua6j);
    if (oaqj1) {
        var xt$w = fks4t7['substring'](yua6j, oaqj1)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (xt$w) {
            {
                xt$w[0x0]['length'];
            }
            return uq1ajo['processingInstruction'](xt$w[0x1], xt$w[0x2]), oaqj1 + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function Sx$iwp8() {}
function Sg0hv3(z1qo, ip_xn) {
    return z1qo['__proto__'] = ip_xn, z1qo;
}
function Sleqz15(h69y0, gdbf4k) {
    var $xwpi8,
        oyamju = [],
        aumyoj = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (aumyoj['lastIndex'] = gdbf4k, aumyoj['exec'](h69y0); $xwpi8 = aumyoj['exec'](h69y0);) if (oyamju['push']($xwpi8), $xwpi8[0x1]) return oyamju;
}
var Sf7stk = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    Sx$pw = new RegExp('[\\-\\.0-9' + Sf7stk['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    Sdv2fgb = new RegExp('^' + Sf7stk['source'] + Sx$pw['source'] + '*(?::' + Sf7stk['source'] + Sx$pw['source'] + '*)?$'),
    S$ir8 = 0x0,
    Srwix$ = 0x1,
    Skf4bsd = 0x2,
    Sljuo1q = 0x3,
    Souaj = 0x4,
    S_pi$x = 0x5,
    Slquj1 = 0x6,
    S$rt78w = 0x7;
Sxrwt$8['prototype'] = {
    'parse': function (mouqja, omaqj, bsfd4) {
        var uajmoy = this['domBuilder'];
        uajmoy['startDocument'](), Smoaj(omaqj, omaqj = {}), Sjlz1(mouqja, omaqj, bsfd4, uajmoy, this['errorHandler']), uajmoy['endDocument']();
    }
}, Sx$iwp8['prototype'] = {
    'setTagName': function (qmouaj) {
        if (!Sdv2fgb['test'](qmouaj)) throw new Error('invalid tagName:' + qmouaj);
        this['tagName'] = qmouaj;
    },
    'add': function (bv32g0, g2b3vd, xipw$8) {
        if (!Sdv2fgb['test'](bv32g0)) throw new Error('invalid attribute:' + bv32g0);
        this[this['length']++] = {
            'qName': bv32g0,
            'value': g2b3vd,
            'offset': xipw$8
        };
    },
    'length': 0x0,
    'getLocalName': function (pin_$) {
        return this[pin_$]['localName'];
    },
    'getLocator': function (yh6m9) {
        return this[yh6m9]['locator'];
    },
    'getQName': function (ks74tf) {
        return this[ks74tf]['qName'];
    },
    'getURI': function (_ix8$p) {
        return this[_ix8$p]['uri'];
    },
    'getValue': function (h230v9) {
        return this[h230v9]['value'];
    }
}, Sg0hv3({}, Sg0hv3['prototype']) instanceof Sg0hv3 || (Sg0hv3 = function (l5zeq1, bd2fgv) {
    function np_ix() {}
    np_ix['prototype'] = bd2fgv, np_ix = new np_ix();
    for (bd2fgv in l5zeq1) np_ix[bd2fgv] = l5zeq1[bd2fgv];
    return np_ix;
}), exports['XMLReader'] = Sxrwt$8;