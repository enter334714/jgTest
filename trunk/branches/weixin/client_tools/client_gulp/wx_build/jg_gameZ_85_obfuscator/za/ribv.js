var q1 = wx.f$;
function _xkw061() {}
function _xkwm16(vjg2ia, i9j, l43u_z, rh$xo, k5061q) {
    function mkt6w(l4_3zt) {
        if (l4_3zt > 0xffff) {
            l4_3zt -= 0x10000;
            var u2_j = 0xd800 + (l4_3zt >> 0xa),
                btlzwm = 0xdc00 + (0x3ff & l4_3zt);
            return String['fromCharCode'](u2_j, btlzwm);
        }
        return String['fromCharCode'](l4_3zt);
    }
    function jai2vg(rfhp) {
        var fox$c = rfhp['slice'](0x1, -0x1);
        return fox$c in l43u_z ? l43u_z[fox$c] : '#' === fox$c['charAt'](0x0) ? mkt6w(parseInt(fox$c['substr'](0x1)['replace']('x', '0x'))) : (k5061q['error']('entity not found:' + rfhp), rfhp);
    }
    function b6mlw(j_2au4) {
        if (j_2au4 > j2u4_a) {
            var kwb60 = vjg2ia['substring'](j2u4_a, j_2au4)['replace'](/&#?\w+;/g, jai2vg);
            bkw106 && wl3ztm(j2u4_a), rh$xo['characters'](kwb60, 0x0, j_2au4 - j2u4_a), j2u4_a = j_2au4;
        }
    }
    function wl3ztm(tl3w, ocxn7) {
        for (; tl3w >= phxor && (ocxn7 = sdnc87['exec'](vjg2ia));) v9gyei = ocxn7['index'], phxor = v9gyei + ocxn7[0x0]['length'], bkw106['lineNumber']++;
        bkw106['columnNumber'] = tl3w - v9gyei + 0x1;
    }
    for (var v9gyei = 0x0, phxor = 0x0, sdnc87 = /.*(?:\r\n?|\n)|.*$/g, bkw106 = rh$xo['locator'], no$7s = [{ 'currentNSMap': i9j }], wmlbt = {}, j2u4_a = 0x0;;) {
        try {
            var o7xc$h = vjg2ia['indexOf']('<', j2u4_a);
            if (0x0 > o7xc$h) {
                if (!vjg2ia['substr'](j2u4_a)['match'](/^\s*$/)) {
                    var nc78d = rh$xo['doc'],
                        a_uj2 = nc78d['createTextNode'](vjg2ia['substr'](j2u4_a));
                    nc78d['appendChild'](a_uj2), rh$xo['currentElement'] = a_uj2;
                }
                return;
            }
            switch (o7xc$h > j2u4_a && b6mlw(o7xc$h), vjg2ia['charAt'](o7xc$h + 0x1)) {
                case '/':
                    var tlz34 = vjg2ia['indexOf']('>', o7xc$h + 0x3),
                        eygvi = vjg2ia['substring'](o7xc$h + 0x2, tlz34),
                        poxf = no$7s['pop']();
                    0x0 > tlz34 ? (eygvi = vjg2ia['substring'](o7xc$h + 0x2)['replace'](/[\s<].*/, ''), k5061q['error']('end tag name: ' + eygvi + ' is not complete:' + poxf['tagName']), tlz34 = o7xc$h + 0x1 + eygvi['length']) : eygvi['match'](/\s</) && (eygvi = eygvi['replace'](/[\s<].*/, ''), k5061q['error']('end tag name: ' + eygvi + ' maybe not complete'), tlz34 = o7xc$h + 0x1 + eygvi['length']);
                    var fp0r5q = poxf['localNSMap'],
                        h7c$x = poxf['tagName'] == eygvi,
                        _2ju4 = h7c$x || poxf['tagName'] && poxf['tagName']['toLowerCase']() == eygvi['toLowerCase']();
                    if (_2ju4) {
                        if (rh$xo['endElement'](poxf['uri'], poxf['localName'], eygvi), fp0r5q) {
                            for (var kq1560 in fp0r5q) rh$xo['endPrefixMapping'](kq1560);
                        }
                        h7c$x || k5061q['fatalError']('end tag name: ' + eygvi + ' is not match the current start tagName:' + poxf['tagName']);
                    } else no$7s['push'](poxf);
                    tlz34++;
                    break;
                case '?':
                    bkw106 && wl3ztm(o7xc$h), tlz34 = _xievgy(vjg2ia, o7xc$h, rh$xo);
                    break;
                case '!':
                    bkw106 && wl3ztm(o7xc$h), tlz34 = _xtb6lwm(vjg2ia, o7xc$h, rh$xo, k5061q);
                    break;
                default:
                    bkw106 && wl3ztm(o7xc$h);
                    var iyge9 = new _xq1p0r(),
                        sncd8 = no$7s[no$7s['length'] - 0x1]['currentNSMap'],
                        tlz34 = _xdcs7n8(vjg2ia, o7xc$h, iyge9, sncd8, jai2vg, k5061q),
                        fhxr$o = iyge9['length'];
                    if (!iyge9['closed'] && _xoxrf$h(vjg2ia, tlz34, iyge9['tagName'], wmlbt) && (iyge9['closed'] = !0x0, l43u_z['nbsp'] || k5061q['warning']('unclosed xml attribute')), bkw106 && fhxr$o) {
                        for (var rq510 = _xlt_(bkw106, {}), x7nco = 0x0; fhxr$o > x7nco; x7nco++) {
                            var rpqf5h = iyge9[x7nco];
                            wl3ztm(rpqf5h['offset']), rpqf5h['locator'] = _xlt_(bkw106, {});
                        }
                        rh$xo['locator'] = rq510, _xg2vi(iyge9, rh$xo, sncd8) && no$7s['push'](iyge9), rh$xo['locator'] = bkw106;
                    } else _xg2vi(iyge9, rh$xo, sncd8) && no$7s['push'](iyge9);
                    'http://www.w3.org/1999/xhtml' !== iyge9['uri'] || iyge9['closed'] ? tlz34++ : tlz34 = _xu2aj4_(vjg2ia, tlz34, iyge9['tagName'], jai2vg, rh$xo);
            }
        } catch (gv9iej) {
            k5061q['error']('element parse error: ' + gv9iej), tlz34 = -0x1;
        }
        tlz34 > j2u4_a ? j2u4_a = tlz34 : b6mlw(Math['max'](o7xc$h, j2u4_a) + 0x1);
    }
}
function _xlt_(on7cs, zwbltm) {
    return zwbltm['lineNumber'] = on7cs['lineNumber'], zwbltm['columnNumber'] = on7cs['columnNumber'], zwbltm;
}
function _xdcs7n8(zu43, h$cx7, b60k1w, r0pfq, v2jia, ij92) {
    for (var xohf$r, r5fhp, xc$on7 = ++h$cx7, iagjv = _xbw6k1m;;) {
        var n7$x = zu43['charAt'](xc$on7);
        switch (n7$x) {
            case '=':
                if (iagjv === _x$hofcx) xohf$r = zu43['slice'](h$cx7, xc$on7), iagjv = _xmkbw6t;else {
                    if (iagjv !== _xvyeg) throw new Error('attribute equal must after attrName');
                    iagjv = _xmkbw6t;
                }
                break;
            case '\x27':
            case '\x22':
                if (iagjv === _xmkbw6t || iagjv === _x$hofcx) {
                    if (iagjv === _x$hofcx && (ij92['warning']('attribute value must after "="'), xohf$r = zu43['slice'](h$cx7, xc$on7)), h$cx7 = xc$on7 + 0x1, xc$on7 = zu43['indexOf'](n7$x, h$cx7), !(xc$on7 > 0x0)) throw new Error('attribute value no end \'' + n7$x + '\' match');
                    r5fhp = zu43['slice'](h$cx7, xc$on7)['replace'](/&#?\w+;/g, v2jia), b60k1w['add'](xohf$r, r5fhp, h$cx7 - 0x1), iagjv = _xtwzlbm;
                } else {
                    if (iagjv != _xrq1p50) throw new Error('attribute value must after "="');
                    r5fhp = zu43['slice'](h$cx7, xc$on7)['replace'](/&#?\w+;/g, v2jia), b60k1w['add'](xohf$r, r5fhp, h$cx7), ij92['warning']('attribute "' + xohf$r + '" missed start quot(' + n7$x + ')!!'), h$cx7 = xc$on7 + 0x1, iagjv = _xtwzlbm;
                }
                break;
            case '/':
                switch (iagjv) {
                    case _xbw6k1m:
                        b60k1w['setTagName'](zu43['slice'](h$cx7, xc$on7));
                    case _xtwzlbm:
                    case _xmltb6:
                    case _xwk61mb:
                        iagjv = _xwk61mb, b60k1w['closed'] = !0x0;
                    case _xrq1p50:
                    case _x$hofcx:
                    case _xvyeg:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return ij92['error']('unexpected end of input'), iagjv == _xbw6k1m && b60k1w['setTagName'](zu43['slice'](h$cx7, xc$on7)), xc$on7;
            case '>':
                switch (iagjv) {
                    case _xbw6k1m:
                        b60k1w['setTagName'](zu43['slice'](h$cx7, xc$on7));
                    case _xtwzlbm:
                    case _xmltb6:
                    case _xwk61mb:
                        break;
                    case _xrq1p50:
                    case _x$hofcx:
                        r5fhp = zu43['slice'](h$cx7, xc$on7), '/' === r5fhp['slice'](-0x1) && (b60k1w['closed'] = !0x0, r5fhp = r5fhp['slice'](0x0, -0x1));
                    case _xvyeg:
                        iagjv === _xvyeg && (r5fhp = xohf$r), iagjv == _xrq1p50 ? (ij92['warning']('attribute "' + r5fhp + '" missed quot(")!!'), b60k1w['add'](xohf$r, r5fhp['replace'](/&#?\w+;/g, v2jia), h$cx7)) : ('http://www.w3.org/1999/xhtml' === r0pfq[''] && r5fhp['match'](/^(?:disabled|checked|selected)$/i) || ij92['warning']('attribute "' + r5fhp + '" missed value!! "' + r5fhp + '" instead!!'), b60k1w['add'](r5fhp, r5fhp, h$cx7));
                        break;
                    case _xmkbw6t:
                        throw new Error('attribute value missed!!');
                }
                return xc$on7;
            case '\u0080':
                n7$x = '\x20';
            default:
                if ('\x20' >= n7$x) switch (iagjv) {
                    case _xbw6k1m:
                        b60k1w['setTagName'](zu43['slice'](h$cx7, xc$on7)), iagjv = _xmltb6;
                        break;
                    case _x$hofcx:
                        xohf$r = zu43['slice'](h$cx7, xc$on7), iagjv = _xvyeg;
                        break;
                    case _xrq1p50:
                        var r5fhp = zu43['slice'](h$cx7, xc$on7)['replace'](/&#?\w+;/g, v2jia);
                        ij92['warning']('attribute "' + r5fhp + '" missed quot(")!!'), b60k1w['add'](xohf$r, r5fhp, h$cx7);
                    case _xtwzlbm:
                        iagjv = _xmltb6;
                } else switch (iagjv) {
                    case _xvyeg:
                        {
                            b60k1w['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === r0pfq[''] && xohf$r['match'](/^(?:disabled|checked|selected)$/i) || ij92['warning']('attribute "' + xohf$r + '" missed value!! "' + xohf$r + '" instead2!!'), b60k1w['add'](xohf$r, xohf$r, h$cx7), h$cx7 = xc$on7, iagjv = _x$hofcx;
                        break;
                    case _xtwzlbm:
                        ij92['warning']('attribute space is required"' + xohf$r + '\x22!!');
                    case _xmltb6:
                        iagjv = _x$hofcx, h$cx7 = xc$on7;
                        break;
                    case _xmkbw6t:
                        iagjv = _xrq1p50, h$cx7 = xc$on7;
                        break;
                    case _xwk61mb:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        xc$on7++;
    }
}
function _xg2vi(k6mtwb, jg29v, rqp015) {
    for (var jv9ig2 = k6mtwb['tagName'], z_3lu4 = null, f$rh = k6mtwb['length']; f$rh--;) {
        var n7osc = k6mtwb[f$rh],
            prho = n7osc['qName'],
            fxrh5p = n7osc['value'],
            xc$7on = prho['indexOf'](':');
        if (xc$7on > 0x0) var n7co$x = n7osc['prefix'] = prho['slice'](0x0, xc$7on),
            co$x7 = prho['slice'](xc$7on + 0x1),
            xh5fpr = 'xmlns' === n7co$x && co$x7;else co$x7 = prho, n7co$x = null, xh5fpr = 'xmlns' === prho && '';
        n7osc['localName'] = co$x7, xh5fpr !== !0x1 && (null == z_3lu4 && (z_3lu4 = {}, _xj2_4au(rqp015, rqp015 = {})), rqp015[xh5fpr] = z_3lu4[xh5fpr] = fxrh5p, n7osc['uri'] = 'http://www.w3.org/2000/xmlns/', jg29v['startPrefixMapping'](xh5fpr, fxrh5p));
    }
    for (var f$rh = k6mtwb['length']; f$rh--;) {
        n7osc = k6mtwb[f$rh];
        var n7co$x = n7osc['prefix'];
        n7co$x && ('xml' === n7co$x && (n7osc['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== n7co$x && (n7osc['uri'] = rqp015[n7co$x || '']));
    }
    var xc$7on = jv9ig2['indexOf'](':');
    xc$7on > 0x0 ? (n7co$x = k6mtwb['prefix'] = jv9ig2['slice'](0x0, xc$7on), co$x7 = k6mtwb['localName'] = jv9ig2['slice'](xc$7on + 0x1)) : (n7co$x = null, co$x7 = k6mtwb['localName'] = jv9ig2);
    var zlwm = k6mtwb['uri'] = rqp015[n7co$x || ''];
    if (jg29v['startElement'](zlwm, co$x7, jv9ig2, k6mtwb), !k6mtwb['closed']) return k6mtwb['currentNSMap'] = rqp015, k6mtwb['localNSMap'] = z_3lu4, !0x0;
    if (jg29v['endElement'](zlwm, co$x7, jv9ig2), z_3lu4) {
        for (n7co$x in z_3lu4) jg29v['endPrefixMapping'](n7co$x);
    }
}
function _xu2aj4_(rph5fq, osn$c7, ajv2gi, fqp0, tw3) {
    if (/^(?:script|textarea)$/i['test'](ajv2gi)) {
        var rxo$hf = rph5fq['indexOf']('</' + ajv2gi + '>', osn$c7),
            mt3z4l = rph5fq['substring'](osn$c7 + 0x1, rxo$hf);
        if (/[&<]/['test'](mt3z4l)) return (/^script$/i['test'](ajv2gi) ? (tw3['characters'](mt3z4l, 0x0, mt3z4l['length']), rxo$hf) : (mt3z4l = mt3z4l['replace'](/&#?\w+;/g, fqp0), tw3['characters'](mt3z4l, 0x0, mt3z4l['length']), rxo$hf)
        );
    }
    return osn$c7 + 0x1;
}
function _xoxrf$h(zm3t4, $oxc7, jau2iv, jiegv) {
    var p0qrf5 = jiegv[jau2iv];
    return null == p0qrf5 && (p0qrf5 = zm3t4['lastIndexOf']('</' + jau2iv + '>'), $oxc7 > p0qrf5 && (p0qrf5 = zm3t4['lastIndexOf']('</' + jau2iv)), jiegv[jau2iv] = p0qrf5), $oxc7 > p0qrf5;
}
function _xj2_4au(c7n$s, sdn7) {
    for (var ztw in c7n$s) sdn7[ztw] = c7n$s[ztw];
}
function _xtb6lwm(c87dn, prqfh5, yi9e, _3uaz4) {
    var vai = c87dn['charAt'](prqfh5 + 0x2);
    switch (vai) {
        case '-':
            if ('-' === c87dn['charAt'](prqfh5 + 0x3)) {
                var jviau = c87dn['indexOf']('-->', prqfh5 + 0x4);
                return jviau > prqfh5 ? (yi9e['comment'](c87dn, prqfh5 + 0x4, jviau - prqfh5 - 0x4), jviau + 0x3) : (_3uaz4['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == c87dn['substr'](prqfh5 + 0x3, 0x6)) {
                var jviau = c87dn['indexOf'](']]>', prqfh5 + 0x9);
                return yi9e['startCDATA'](), yi9e['characters'](c87dn, prqfh5 + 0x9, jviau - prqfh5 - 0x9), yi9e['endCDATA'](), jviau + 0x3;
            }
            var pq10r5 = _xmz34tl(c87dn, prqfh5),
                mt3wlz = pq10r5['length'];
            if (mt3wlz > 0x1 && /!doctype/i['test'](pq10r5[0x0][0x0])) {
                var bmk = pq10r5[0x1][0x0],
                    u4j2 = mt3wlz > 0x3 && /^public$/i['test'](pq10r5[0x2][0x0]) && pq10r5[0x3][0x0],
                    x$och7 = mt3wlz > 0x4 && pq10r5[0x4][0x0],
                    hrfp5 = pq10r5[mt3wlz - 0x1];
                return yi9e['startDTD'](bmk, u4j2 && u4j2['replace'](/^(['"])(.*?)\1$/, '$2'), x$och7 && x$och7['replace'](/^(['"])(.*?)\1$/, '$2')), yi9e['endDTD'](), hrfp5['index'] + hrfp5[0x0]['length'];
            }
    }
    return -0x1;
}
function _xievgy(o7chx, uj4_a, xfo$h) {
    var wk1b60 = o7chx['indexOf']('?>', uj4_a);
    if (wk1b60) {
        var g9ij2v = o7chx['substring'](uj4_a, wk1b60)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (g9ij2v) {
            {
                g9ij2v[0x0]['length'];
            }
            return xfo$h['processingInstruction'](g9ij2v[0x1], g9ij2v[0x2]), wk1b60 + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function _xq1p0r() {}
function _xf5xphr(zlmwt3, sn$co7) {
    return zlmwt3['__proto__'] = sn$co7, zlmwt3;
}
function _xmz34tl(hxf$ro, _423) {
    var evyg9i,
        e9vgij = [],
        $coh = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for ($coh['lastIndex'] = _423, $coh['exec'](hxf$ro); evyg9i = $coh['exec'](hxf$ro);) if (e9vgij['push'](evyg9i), evyg9i[0x1]) return e9vgij;
}
var _xcf$ = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    _xv2au = new RegExp('[\\-\\.0-9' + _xcf$['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    _xcx$o = new RegExp('^' + _xcf$['source'] + _xv2au['source'] + '*(?::' + _xcf$['source'] + _xv2au['source'] + '*)?$'),
    _xbw6k1m = 0x0,
    _x$hofcx = 0x1,
    _xvyeg = 0x2,
    _xmkbw6t = 0x3,
    _xrq1p50 = 0x4,
    _xtwzlbm = 0x5,
    _xmltb6 = 0x6,
    _xwk61mb = 0x7;
_xkw061['prototype'] = {
    'parse': function (lm34tz, f$oxc, ztwl) {
        var ktw6bm = this['domBuilder'];
        ktw6bm['startDocument'](), _xj2_4au(f$oxc, f$oxc = {}), _xkwm16(lm34tz, f$oxc, ztwl, ktw6bm, this['errorHandler']), ktw6bm['endDocument']();
    }
}, _xq1p0r['prototype'] = {
    'setTagName': function (u2_ai) {
        if (!_xcx$o['test'](u2_ai)) throw new Error('invalid tagName:' + u2_ai);
        this['tagName'] = u2_ai;
    },
    'add': function (gjavi, nd7sc, i2vuaj) {
        if (!_xcx$o['test'](gjavi)) throw new Error('invalid attribute:' + gjavi);
        this[this['length']++] = {
            'qName': gjavi,
            'value': nd7sc,
            'offset': i2vuaj
        };
    },
    'length': 0x0,
    'getLocalName': function (rfhop) {
        return this[rfhop]['localName'];
    },
    'getLocator': function (sc8n) {
        return this[sc8n]['locator'];
    },
    'getQName': function (hxpfr) {
        return this[hxpfr]['qName'];
    },
    'getURI': function (h5rfxp) {
        return this[h5rfxp]['uri'];
    },
    'getValue': function (bkmw61) {
        return this[bkmw61]['value'];
    }
}, _xf5xphr({}, _xf5xphr['prototype']) instanceof _xf5xphr || (_xf5xphr = function (twzlmb, bw16mk) {
    function k60qb() {}
    k60qb['prototype'] = bw16mk, k60qb = new k60qb();
    for (bw16mk in twzlmb) k60qb[bw16mk] = twzlmb[bw16mk];
    return k60qb;
}), exports['XMLReader'] = _xkw061;