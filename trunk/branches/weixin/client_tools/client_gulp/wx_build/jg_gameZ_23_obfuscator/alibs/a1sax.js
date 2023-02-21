var c = wx.$a;
function gjxfns1() {}
function gjf12x(znvh, zvkd, d8qkz6, macl$, sf21x) {
    function mc$lby(jfvnx) {
        if (jfvnx > 0xffff) {
            jfvnx -= 0x10000;
            var hk6vnz = 0xd800 + (jfvnx >> 0xa),
                gwe4 = 0xdc00 + (0x3ff & jfvnx);
            return String['fromCharCode'](hk6vnz, gwe4);
        }
        return String['fromCharCode'](jfvnx);
    }
    function kzvnj(n1fxjs) {
        var _yc0o = n1fxjs['slice'](0x1, -0x1);
        return _yc0o in d8qkz6 ? d8qkz6[_yc0o] : '#' === _yc0o['charAt'](0x0) ? mc$lby(parseInt(_yc0o['substr'](0x1)['replace']('x', '0x'))) : (sf21x['error']('entity not found:' + n1fxjs), n1fxjs);
    }
    function zh6vd(r5dt8) {
        if (r5dt8 > zshj) {
            var vhxn = znvh['substring'](zshj, r5dt8)['replace'](/&#?\w+;/g, kzvnj);
            wu4o && b4o0(zshj), macl$['characters'](vhxn, 0x0, r5dt8 - zshj), zshj = r5dt8;
        }
    }
    function b4o0(yc40b, ugew4) {
        for (; yc40b >= xguf && (ugew4 = u_eg['exec'](znvh));) gw1ue = ugew4['index'], xguf = gw1ue + ugew4[0x0]['length'], wu4o['lineNumber']++;
        wu4o['columnNumber'] = yc40b - gw1ue + 0x1;
    }
    for (var gw1ue = 0x0, xguf = 0x0, u_eg = /.*(?:\r\n?|\n)|.*$/g, wu4o = macl$['locator'], guw_e2 = [{ 'currentNSMap': zvkd }], f21 = {}, zshj = 0x0;;) {
        try {
            var e4uo = znvh['indexOf']('<', zshj);
            if (0x0 > e4uo) {
                if (!znvh['substr'](zshj)['match'](/^\s*$/)) {
                    var yc4bo0 = macl$['doc'],
                        u_gew2 = yc4bo0['createTextNode'](znvh['substr'](zshj));
                    yc4bo0['appendChild'](u_gew2), macl$['currentElement'] = u_gew2;
                }
                return;
            }
            switch (e4uo > zshj && zh6vd(e4uo), znvh['charAt'](e4uo + 0x1)) {
                case '/':
                    var i753pr = znvh['indexOf']('>', e4uo + 0x3),
                        o4u = znvh['substring'](e4uo + 0x2, i753pr),
                        _co4 = guw_e2['pop']();
                    0x0 > i753pr ? (o4u = znvh['substring'](e4uo + 0x2)['replace'](/[\s<].*/, ''), sf21x['error']('end tag name: ' + o4u + ' is not complete:' + _co4['tagName']), i753pr = e4uo + 0x1 + o4u['length']) : o4u['match'](/\s</) && (o4u = o4u['replace'](/[\s<].*/, ''), sf21x['error']('end tag name: ' + o4u + ' maybe not complete'), i753pr = e4uo + 0x1 + o4u['length']);
                    var f21j = _co4['localNSMap'],
                        fnj1sx = _co4['tagName'] == o4u,
                        vxsjhn = fnj1sx || _co4['tagName'] && _co4['tagName']['toLowerCase']() == o4u['toLowerCase']();
                    if (vxsjhn) {
                        if (macl$['endElement'](_co4['uri'], _co4['localName'], o4u), f21j) {
                            for (var c$by0o in f21j) macl$['endPrefixMapping'](c$by0o);
                        }
                        fnj1sx || sf21x['fatalError']('end tag name: ' + o4u + ' is not match the current start tagName:' + _co4['tagName']);
                    } else guw_e2['push'](_co4);
                    i753pr++;
                    break;
                case '?':
                    wu4o && b4o0(e4uo), i753pr = gc40yb(znvh, e4uo, macl$);
                    break;
                case '!':
                    wu4o && b4o0(e4uo), i753pr = gxsfg2(znvh, e4uo, macl$, sf21x);
                    break;
                default:
                    wu4o && b4o0(e4uo);
                    var o0$ybc = new gq8dz(),
                        bcm$al = guw_e2[guw_e2['length'] - 0x1]['currentNSMap'],
                        i753pr = gnjfxs(znvh, e4uo, o0$ybc, bcm$al, kzvnj, sf21x),
                        i37r = o0$ybc['length'];
                    if (!o0$ybc['closed'] && gd8kq6z(znvh, i753pr, o0$ybc['tagName'], f21) && (o0$ybc['closed'] = !0x0, d8qkz6['nbsp'] || sf21x['warning']('unclosed xml attribute')), wu4o && i37r) {
                        for (var i3rp7 = gx12gfs(wu4o, {}), zkhv6 = 0x0; i37r > zkhv6; zkhv6++) {
                            var kqt8d6 = o0$ybc[zkhv6];
                            b4o0(kqt8d6['offset']), kqt8d6['locator'] = gx12gfs(wu4o, {});
                        }
                        macl$['locator'] = i3rp7, goyc$0(o0$ybc, macl$, bcm$al) && guw_e2['push'](o0$ybc), macl$['locator'] = wu4o;
                    } else goyc$0(o0$ybc, macl$, bcm$al) && guw_e2['push'](o0$ybc);
                    'http://www.w3.org/1999/xhtml' !== o0$ybc['uri'] || o0$ybc['closed'] ? i753pr++ : i753pr = gdzh6qk(znvh, i753pr, o0$ybc['tagName'], kzvnj, macl$);
            }
        } catch (wfu2g) {
            sf21x['error']('element parse error: ' + wfu2g), i753pr = -0x1;
        }
        i753pr > zshj ? zshj = i753pr : zh6vd(Math['max'](e4uo, zshj) + 0x1);
    }
}
function gx12gfs(rtq758, qt58r7) {
    return qt58r7['lineNumber'] = rtq758['lineNumber'], qt58r7['columnNumber'] = rtq758['columnNumber'], qt58r7;
}
function gnjfxs(e_uow, hnjvk, l0y$, bm$ycl, s1fx2g, nzjshv) {
    for (var wg2u1, r3t57p, v6hkn = ++hnjvk, d6kt8 = gxs2f;;) {
        var d8zkq6 = e_uow['charAt'](v6hkn);
        switch (d8zkq6) {
            case '=':
                if (d6kt8 === gugwe4_) wg2u1 = e_uow['slice'](hnjvk, v6hkn), d6kt8 = glc$bym;else {
                    if (d6kt8 !== gugw4) throw new Error('attribute equal must after attrName');
                    d6kt8 = glc$bym;
                }
                break;
            case '\x27':
            case '\x22':
                if (d6kt8 === glc$bym || d6kt8 === gugwe4_) {
                    if (d6kt8 === gugwe4_ && (nzjshv['warning']('attribute value must after "="'), wg2u1 = e_uow['slice'](hnjvk, v6hkn)), hnjvk = v6hkn + 0x1, v6hkn = e_uow['indexOf'](d8zkq6, hnjvk), !(v6hkn > 0x0)) throw new Error('attribute value no end \'' + d8zkq6 + '\' match');
                    r3t57p = e_uow['slice'](hnjvk, v6hkn)['replace'](/&#?\w+;/g, s1fx2g), l0y$['add'](wg2u1, r3t57p, hnjvk - 0x1), d6kt8 = gmc$y;
                } else {
                    if (d6kt8 != gwug21f) throw new Error('attribute value must after "="');
                    r3t57p = e_uow['slice'](hnjvk, v6hkn)['replace'](/&#?\w+;/g, s1fx2g), l0y$['add'](wg2u1, r3t57p, hnjvk), nzjshv['warning']('attribute "' + wg2u1 + '" missed start quot(' + d8zkq6 + ')!!'), hnjvk = v6hkn + 0x1, d6kt8 = gmc$y;
                }
                break;
            case '/':
                switch (d6kt8) {
                    case gxs2f:
                        l0y$['setTagName'](e_uow['slice'](hnjvk, v6hkn));
                    case gmc$y:
                    case ggwu1e:
                    case go4y_0e:
                        d6kt8 = go4y_0e, l0y$['closed'] = !0x0;
                    case gwug21f:
                    case gugwe4_:
                    case gugw4:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return nzjshv['error']('unexpected end of input'), d6kt8 == gxs2f && l0y$['setTagName'](e_uow['slice'](hnjvk, v6hkn)), v6hkn;
            case '>':
                switch (d6kt8) {
                    case gxs2f:
                        l0y$['setTagName'](e_uow['slice'](hnjvk, v6hkn));
                    case gmc$y:
                    case ggwu1e:
                    case go4y_0e:
                        break;
                    case gwug21f:
                    case gugwe4_:
                        r3t57p = e_uow['slice'](hnjvk, v6hkn), '/' === r3t57p['slice'](-0x1) && (l0y$['closed'] = !0x0, r3t57p = r3t57p['slice'](0x0, -0x1));
                    case gugw4:
                        d6kt8 === gugw4 && (r3t57p = wg2u1), d6kt8 == gwug21f ? (nzjshv['warning']('attribute "' + r3t57p + '" missed quot(")!!'), l0y$['add'](wg2u1, r3t57p['replace'](/&#?\w+;/g, s1fx2g), hnjvk)) : ('http://www.w3.org/1999/xhtml' === bm$ycl[''] && r3t57p['match'](/^(?:disabled|checked|selected)$/i) || nzjshv['warning']('attribute "' + r3t57p + '" missed value!! "' + r3t57p + '" instead!!'), l0y$['add'](r3t57p, r3t57p, hnjvk));
                        break;
                    case glc$bym:
                        throw new Error('attribute value missed!!');
                }
                return v6hkn;
            case '\u0080':
                d8zkq6 = '\x20';
            default:
                if ('\x20' >= d8zkq6) switch (d6kt8) {
                    case gxs2f:
                        l0y$['setTagName'](e_uow['slice'](hnjvk, v6hkn)), d6kt8 = ggwu1e;
                        break;
                    case gugwe4_:
                        wg2u1 = e_uow['slice'](hnjvk, v6hkn), d6kt8 = gugw4;
                        break;
                    case gwug21f:
                        var r3t57p = e_uow['slice'](hnjvk, v6hkn)['replace'](/&#?\w+;/g, s1fx2g);
                        nzjshv['warning']('attribute "' + r3t57p + '" missed quot(")!!'), l0y$['add'](wg2u1, r3t57p, hnjvk);
                    case gmc$y:
                        d6kt8 = ggwu1e;
                } else switch (d6kt8) {
                    case gugw4:
                        {
                            l0y$['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === bm$ycl[''] && wg2u1['match'](/^(?:disabled|checked|selected)$/i) || nzjshv['warning']('attribute "' + wg2u1 + '" missed value!! "' + wg2u1 + '" instead2!!'), l0y$['add'](wg2u1, wg2u1, hnjvk), hnjvk = v6hkn, d6kt8 = gugwe4_;
                        break;
                    case gmc$y:
                        nzjshv['warning']('attribute space is required"' + wg2u1 + '\x22!!');
                    case ggwu1e:
                        d6kt8 = gugwe4_, hnjvk = v6hkn;
                        break;
                    case glc$bym:
                        d6kt8 = gwug21f, hnjvk = v6hkn;
                        break;
                    case go4y_0e:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        v6hkn++;
    }
}
function goyc$0(t5p7, e4wou_, eyo_40) {
    for (var sf1j2x = t5p7['tagName'], bcam = null, o0w4 = t5p7['length']; o0w4--;) {
        var $bcy0l = t5p7[o0w4],
            byl$ = $bcy0l['qName'],
            vhjsx = $bcy0l['value'],
            oc40y = byl$['indexOf'](':');
        if (oc40y > 0x0) var zjnvkh = $bcy0l['prefix'] = byl$['slice'](0x0, oc40y),
            xug2 = byl$['slice'](oc40y + 0x1),
            xsjnf1 = 'xmlns' === zjnvkh && xug2;else xug2 = byl$, zjnvkh = null, xsjnf1 = 'xmlns' === byl$ && '';
        $bcy0l['localName'] = xug2, xsjnf1 !== !0x1 && (null == bcam && (bcam = {}, gf1sj2(eyo_40, eyo_40 = {})), eyo_40[xsjnf1] = bcam[xsjnf1] = vhjsx, $bcy0l['uri'] = 'http://www.w3.org/2000/xmlns/', e4wou_['startPrefixMapping'](xsjnf1, vhjsx));
    }
    for (var o0w4 = t5p7['length']; o0w4--;) {
        $bcy0l = t5p7[o0w4];
        var zjnvkh = $bcy0l['prefix'];
        zjnvkh && ('xml' === zjnvkh && ($bcy0l['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== zjnvkh && ($bcy0l['uri'] = eyo_40[zjnvkh || '']));
    }
    var oc40y = sf1j2x['indexOf'](':');
    oc40y > 0x0 ? (zjnvkh = t5p7['prefix'] = sf1j2x['slice'](0x0, oc40y), xug2 = t5p7['localName'] = sf1j2x['slice'](oc40y + 0x1)) : (zjnvkh = null, xug2 = t5p7['localName'] = sf1j2x);
    var svnhx = t5p7['uri'] = eyo_40[zjnvkh || ''];
    if (e4wou_['startElement'](svnhx, xug2, sf1j2x, t5p7), !t5p7['closed']) return t5p7['currentNSMap'] = eyo_40, t5p7['localNSMap'] = bcam, !0x0;
    if (e4wou_['endElement'](svnhx, xug2, sf1j2x), bcam) {
        for (zjnvkh in bcam) e4wou_['endPrefixMapping'](zjnvkh);
    }
}
function gdzh6qk(jfsnx, z86dkq, fwu21g, o0y4_e, uo4we) {
    if (/^(?:script|textarea)$/i['test'](fwu21g)) {
        var hn6vz = jfsnx['indexOf']('</' + fwu21g + '>', z86dkq),
            kvhjzn = jfsnx['substring'](z86dkq + 0x1, hn6vz);
        if (/[&<]/['test'](kvhjzn)) return (/^script$/i['test'](fwu21g) ? (uo4we['characters'](kvhjzn, 0x0, kvhjzn['length']), hn6vz) : (kvhjzn = kvhjzn['replace'](/&#?\w+;/g, o0y4_e), uo4we['characters'](kvhjzn, 0x0, kvhjzn['length']), hn6vz)
        );
    }
    return z86dkq + 0x1;
}
function gd8kq6z(dt8r6, fs2gx1, z6vnh, oweu_) {
    var amlb9$ = oweu_[z6vnh];
    return null == amlb9$ && (amlb9$ = dt8r6['lastIndexOf']('</' + z6vnh + '>'), fs2gx1 > amlb9$ && (amlb9$ = dt8r6['lastIndexOf']('</' + z6vnh)), oweu_[z6vnh] = amlb9$), fs2gx1 > amlb9$;
}
function gf1sj2(eyo_0, x1fsn) {
    for (var qzkdh in eyo_0) x1fsn[qzkdh] = eyo_0[qzkdh];
}
function gxsfg2(clba$m, ue4_o, k6d8qt, drq8t5) {
    var f1sxj2 = clba$m['charAt'](ue4_o + 0x2);
    switch (f1sxj2) {
        case '-':
            if ('-' === clba$m['charAt'](ue4_o + 0x3)) {
                var mlb$a = clba$m['indexOf']('-->', ue4_o + 0x4);
                return mlb$a > ue4_o ? (k6d8qt['comment'](clba$m, ue4_o + 0x4, mlb$a - ue4_o - 0x4), mlb$a + 0x3) : (drq8t5['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == clba$m['substr'](ue4_o + 0x3, 0x6)) {
                var mlb$a = clba$m['indexOf'](']]>', ue4_o + 0x9);
                return k6d8qt['startCDATA'](), k6d8qt['characters'](clba$m, ue4_o + 0x9, mlb$a - ue4_o - 0x9), k6d8qt['endCDATA'](), mlb$a + 0x3;
            }
            var kdv6h = glb9$a(clba$m, ue4_o),
                lbmc$ = kdv6h['length'];
            if (lbmc$ > 0x1 && /!doctype/i['test'](kdv6h[0x0][0x0])) {
                var c$mba = kdv6h[0x1][0x0],
                    m9lb$a = lbmc$ > 0x3 && /^public$/i['test'](kdv6h[0x2][0x0]) && kdv6h[0x3][0x0],
                    xfsnvj = lbmc$ > 0x4 && kdv6h[0x4][0x0],
                    ylc = kdv6h[lbmc$ - 0x1];
                return k6d8qt['startDTD'](c$mba, m9lb$a && m9lb$a['replace'](/^(['"])(.*?)\1$/, '$2'), xfsnvj && xfsnvj['replace'](/^(['"])(.*?)\1$/, '$2')), k6d8qt['endDTD'](), ylc['index'] + ylc[0x0]['length'];
            }
    }
    return -0x1;
}
function gc40yb(nsxhjv, gw4e_, t7r3) {
    var p73i = nsxhjv['indexOf']('?>', gw4e_);
    if (p73i) {
        var tqr857 = nsxhjv['substring'](gw4e_, p73i)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (tqr857) {
            {
                tqr857[0x0]['length'];
            }
            return t7r3['processingInstruction'](tqr857[0x1], tqr857[0x2]), p73i + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function gq8dz() {}
function ggfu12x(qdzk68, xnvhjs) {
    return qdzk68['__proto__'] = xnvhjs, qdzk68;
}
function glb9$a(rq5td, tr75p3) {
    var s1gf2x,
        t7r853 = [],
        w4e_0 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (w4e_0['lastIndex'] = tr75p3, w4e_0['exec'](rq5td); s1gf2x = w4e_0['exec'](rq5td);) if (t7r853['push'](s1gf2x), s1gf2x[0x1]) return t7r853;
}
var gyb4 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    g$lbcy = new RegExp('[\\-\\.0-9' + gyb4['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    g_ug2 = new RegExp('^' + gyb4['source'] + g$lbcy['source'] + '*(?::' + gyb4['source'] + g$lbcy['source'] + '*)?$'),
    gxs2f = 0x0,
    gugwe4_ = 0x1,
    gugw4 = 0x2,
    glc$bym = 0x3,
    gwug21f = 0x4,
    gmc$y = 0x5,
    ggwu1e = 0x6,
    go4y_0e = 0x7;
gjxfns1['prototype'] = {
    'parse': function (n1fj, hdzq6, s1f2x) {
        var _g4wu = this['domBuilder'];
        _g4wu['startDocument'](), gf1sj2(hdzq6, hdzq6 = {}), gjf12x(n1fj, hdzq6, s1f2x, _g4wu, this['errorHandler']), _g4wu['endDocument']();
    }
}, gq8dz['prototype'] = {
    'setTagName': function (kq6t8d) {
        if (!g_ug2['test'](kq6t8d)) throw new Error('invalid tagName:' + kq6t8d);
        this['tagName'] = kq6t8d;
    },
    'add': function (qrd8t, qzk6, jfvn) {
        if (!g_ug2['test'](qrd8t)) throw new Error('invalid attribute:' + qrd8t);
        this[this['length']++] = {
            'qName': qrd8t,
            'value': qzk6,
            'offset': jfvn
        };
    },
    'length': 0x0,
    'getLocalName': function (zhn6) {
        return this[zhn6]['localName'];
    },
    'getLocator': function (wf2g1u) {
        return this[wf2g1u]['locator'];
    },
    'getQName': function (sn1fx) {
        return this[sn1fx]['qName'];
    },
    'getURI': function (oy4e_0) {
        return this[oy4e_0]['uri'];
    },
    'getValue': function (ugw12e) {
        return this[ugw12e]['value'];
    }
}, ggfu12x({}, ggfu12x['prototype']) instanceof ggfu12x || (ggfu12x = function (sg2xf1, mybcl$) {
    function gx2sf() {}
    gx2sf['prototype'] = mybcl$, gx2sf = new gx2sf();
    for (mybcl$ in sg2xf1) gx2sf[mybcl$] = sg2xf1[mybcl$];
    return gx2sf;
}), exports['XMLReader'] = gjxfns1;