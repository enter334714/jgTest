var J = wx.h$;
function gn143ix() {}
function gji1xn(q5yb0o, i71xn, ch6tz, nx17i4, i7jvr) {
    function zcpth(ztch8e) {
        if (ztch8e > 0xffff) {
            ztch8e -= 0x10000;
            var phczte = 0xd800 + (ztch8e >> 0xa),
                or7yjv = 0xdc00 + (0x3ff & ztch8e);
            return String['fromCharCode'](phczte, or7yjv);
        }
        return String['fromCharCode'](ztch8e);
    }
    function vrji(i43u) {
        var i7x14 = i43u['slice'](0x1, -0x1);
        return i7x14 in ch6tz ? ch6tz[i7x14] : '#' === i7x14['charAt'](0x0) ? zcpth(parseInt(i7x14['substr'](0x1)['replace']('x', '0x'))) : (i7jvr['error']('entity not found:' + i43u), i43u);
    }
    function qoryb(gdc68k) {
        if (gdc68k > sf9$2w) {
            var h8zt6c = q5yb0o['substring'](sf9$2w, gdc68k)['replace'](/&#?\w+;/g, vrji);
            ro5yq && hz6ct(sf9$2w), nx17i4['characters'](h8zt6c, 0x0, gdc68k - sf9$2w), sf9$2w = gdc68k;
        }
    }
    function hz6ct(kg5bq0, dqkb) {
        for (; kg5bq0 >= b0qdgk && (dqkb = _p9we2['exec'](q5yb0o));) gtcd86 = dqkb['index'], b0qdgk = gtcd86 + dqkb[0x0]['length'], ro5yq['lineNumber']++;
        ro5yq['columnNumber'] = kg5bq0 - gtcd86 + 0x1;
    }
    for (var gtcd86 = 0x0, b0qdgk = 0x0, _p9we2 = /.*(?:\r\n?|\n)|.*$/g, ro5yq = nx17i4['locator'], w2f9$_ = [{ 'currentNSMap': i71xn }], byo5q0 = {}, sf9$2w = 0x0;;) {
        try {
            var g6cd8 = q5yb0o['indexOf']('<', sf9$2w);
            if (0x0 > g6cd8) {
                if (!q5yb0o['substr'](sf9$2w)['match'](/^\s*$/)) {
                    var d680k = nx17i4['doc'],
                        vjxri = d680k['createTextNode'](q5yb0o['substr'](sf9$2w));
                    d680k['appendChild'](vjxri), nx17i4['currentElement'] = vjxri;
                }
                return;
            }
            switch (g6cd8 > sf9$2w && qoryb(g6cd8), q5yb0o['charAt'](g6cd8 + 0x1)) {
                case '/':
                    var qobk0 = q5yb0o['indexOf']('>', g6cd8 + 0x3),
                        nxij71 = q5yb0o['substring'](g6cd8 + 0x2, qobk0),
                        qo05yb = w2f9$_['pop']();
                    0x0 > qobk0 ? (nxij71 = q5yb0o['substring'](g6cd8 + 0x2)['replace'](/[\s<].*/, ''), i7jvr['error']('end tag name: ' + nxij71 + ' is not complete:' + qo05yb['tagName']), qobk0 = g6cd8 + 0x1 + nxij71['length']) : nxij71['match'](/\s</) && (nxij71 = nxij71['replace'](/[\s<].*/, ''), i7jvr['error']('end tag name: ' + nxij71 + ' maybe not complete'), qobk0 = g6cd8 + 0x1 + nxij71['length']);
                    var x1n3 = qo05yb['localNSMap'],
                        qo5ryb = qo05yb['tagName'] == nxij71,
                        bk05gq = qo5ryb || qo05yb['tagName'] && qo05yb['tagName']['toLowerCase']() == nxij71['toLowerCase']();
                    if (bk05gq) {
                        if (nx17i4['endElement'](qo05yb['uri'], qo05yb['localName'], nxij71), x1n3) {
                            for (var jxrvy7 in x1n3) nx17i4['endPrefixMapping'](jxrvy7);
                        }
                        qo5ryb || i7jvr['fatalError']('end tag name: ' + nxij71 + ' is not match the current start tagName:' + qo05yb['tagName']);
                    } else w2f9$_['push'](qo05yb);
                    qobk0++;
                    break;
                case '?':
                    ro5yq && hz6ct(g6cd8), qobk0 = gk5bqg(q5yb0o, g6cd8, nx17i4);
                    break;
                case '!':
                    ro5yq && hz6ct(g6cd8), qobk0 = gchzet8(q5yb0o, g6cd8, nx17i4, i7jvr);
                    break;
                default:
                    ro5yq && hz6ct(g6cd8);
                    var ixn34 = new gn3a41(),
                        _pht = w2f9$_[w2f9$_['length'] - 0x1]['currentNSMap'],
                        qobk0 = gfw_$29(q5yb0o, g6cd8, ixn34, _pht, vrji, i7jvr),
                        m4lu3 = ixn34['length'];
                    if (!ixn34['closed'] && gj5ovyr(q5yb0o, qobk0, ixn34['tagName'], byo5q0) && (ixn34['closed'] = !0x0, ch6tz['nbsp'] || i7jvr['warning']('unclosed xml attribute')), ro5yq && m4lu3) {
                        for (var f2w9p = gnx7j1(ro5yq, {}), we2p9 = 0x0; m4lu3 > we2p9; we2p9++) {
                            var jvn7 = ixn34[we2p9];
                            hz6ct(jvn7['offset']), jvn7['locator'] = gnx7j1(ro5yq, {});
                        }
                        nx17i4['locator'] = f2w9p, gcgt6d(ixn34, nx17i4, _pht) && w2f9$_['push'](ixn34), nx17i4['locator'] = ro5yq;
                    } else gcgt6d(ixn34, nx17i4, _pht) && w2f9$_['push'](ixn34);
                    'http://www.w3.org/1999/xhtml' !== ixn34['uri'] || ixn34['closed'] ? qobk0++ : qobk0 = gcte8z(q5yb0o, qobk0, ixn34['tagName'], vrji, nx17i4);
            }
        } catch (obkq) {
            i7jvr['error']('element parse error: ' + obkq), qobk0 = -0x1;
        }
        qobk0 > sf9$2w ? sf9$2w = qobk0 : qoryb(Math['max'](g6cd8, sf9$2w) + 0x1);
    }
}
function gnx7j1(heztcp, njx1i7) {
    return njx1i7['lineNumber'] = heztcp['lineNumber'], njx1i7['columnNumber'] = heztcp['columnNumber'], njx1i7;
}
function gfw_$29(x14n3, tc86dh, yv7xr, d6t8h, yoq50b, i17njx) {
    for (var jin7x1, in34u, y5vro = ++tc86dh, gqb5k0 = gzt_eh;;) {
        var w_9$ = x14n3['charAt'](y5vro);
        switch (w_9$) {
            case '=':
                if (gqb5k0 === grqbo5y) jin7x1 = x14n3['slice'](tc86dh, y5vro), gqb5k0 = g_9w$f2;else {
                    if (gqb5k0 !== gez8h) throw new Error('attribute equal must after attrName');
                    gqb5k0 = g_9w$f2;
                }
                break;
            case '\x27':
            case '\x22':
                if (gqb5k0 === g_9w$f2 || gqb5k0 === grqbo5y) {
                    if (gqb5k0 === grqbo5y && (i17njx['warning']('attribute value must after "="'), jin7x1 = x14n3['slice'](tc86dh, y5vro)), tc86dh = y5vro + 0x1, y5vro = x14n3['indexOf'](w_9$, tc86dh), !(y5vro > 0x0)) throw new Error('attribute value no end \'' + w_9$ + '\' match');
                    in34u = x14n3['slice'](tc86dh, y5vro)['replace'](/&#?\w+;/g, yoq50b), yv7xr['add'](jin7x1, in34u, tc86dh - 0x1), gqb5k0 = gdkb06g;
                } else {
                    if (gqb5k0 != gchtd68) throw new Error('attribute value must after "="');
                    in34u = x14n3['slice'](tc86dh, y5vro)['replace'](/&#?\w+;/g, yoq50b), yv7xr['add'](jin7x1, in34u, tc86dh), i17njx['warning']('attribute "' + jin7x1 + '" missed start quot(' + w_9$ + ')!!'), tc86dh = y5vro + 0x1, gqb5k0 = gdkb06g;
                }
                break;
            case '/':
                switch (gqb5k0) {
                    case gzt_eh:
                        yv7xr['setTagName'](x14n3['slice'](tc86dh, y5vro));
                    case gdkb06g:
                    case gijrxv:
                    case gzhp2:
                        gqb5k0 = gzhp2, yv7xr['closed'] = !0x0;
                    case gchtd68:
                    case grqbo5y:
                    case gez8h:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return i17njx['error']('unexpected end of input'), gqb5k0 == gzt_eh && yv7xr['setTagName'](x14n3['slice'](tc86dh, y5vro)), y5vro;
            case '>':
                switch (gqb5k0) {
                    case gzt_eh:
                        yv7xr['setTagName'](x14n3['slice'](tc86dh, y5vro));
                    case gdkb06g:
                    case gijrxv:
                    case gzhp2:
                        break;
                    case gchtd68:
                    case grqbo5y:
                        in34u = x14n3['slice'](tc86dh, y5vro), '/' === in34u['slice'](-0x1) && (yv7xr['closed'] = !0x0, in34u = in34u['slice'](0x0, -0x1));
                    case gez8h:
                        gqb5k0 === gez8h && (in34u = jin7x1), gqb5k0 == gchtd68 ? (i17njx['warning']('attribute "' + in34u + '" missed quot(")!!'), yv7xr['add'](jin7x1, in34u['replace'](/&#?\w+;/g, yoq50b), tc86dh)) : ('http://www.w3.org/1999/xhtml' === d6t8h[''] && in34u['match'](/^(?:disabled|checked|selected)$/i) || i17njx['warning']('attribute "' + in34u + '" missed value!! "' + in34u + '" instead!!'), yv7xr['add'](in34u, in34u, tc86dh));
                        break;
                    case g_9w$f2:
                        throw new Error('attribute value missed!!');
                }
                return y5vro;
            case '\u0080':
                w_9$ = '\x20';
            default:
                if ('\x20' >= w_9$) switch (gqb5k0) {
                    case gzt_eh:
                        yv7xr['setTagName'](x14n3['slice'](tc86dh, y5vro)), gqb5k0 = gijrxv;
                        break;
                    case grqbo5y:
                        jin7x1 = x14n3['slice'](tc86dh, y5vro), gqb5k0 = gez8h;
                        break;
                    case gchtd68:
                        var in34u = x14n3['slice'](tc86dh, y5vro)['replace'](/&#?\w+;/g, yoq50b);
                        i17njx['warning']('attribute "' + in34u + '" missed quot(")!!'), yv7xr['add'](jin7x1, in34u, tc86dh);
                    case gdkb06g:
                        gqb5k0 = gijrxv;
                } else switch (gqb5k0) {
                    case gez8h:
                        {
                            yv7xr['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === d6t8h[''] && jin7x1['match'](/^(?:disabled|checked|selected)$/i) || i17njx['warning']('attribute "' + jin7x1 + '" missed value!! "' + jin7x1 + '" instead2!!'), yv7xr['add'](jin7x1, jin7x1, tc86dh), tc86dh = y5vro, gqb5k0 = grqbo5y;
                        break;
                    case gdkb06g:
                        i17njx['warning']('attribute space is required"' + jin7x1 + '\x22!!');
                    case gijrxv:
                        gqb5k0 = grqbo5y, tc86dh = y5vro;
                        break;
                    case g_9w$f2:
                        gqb5k0 = gchtd68, tc86dh = y5vro;
                        break;
                    case gzhp2:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        y5vro++;
    }
}
function gcgt6d(vryjo7, m4al3u, x1nj7) {
    for (var au3n4 = vryjo7['tagName'], p_f92w = null, cd8g6 = vryjo7['length']; cd8g6--;) {
        var r7vjoy = vryjo7[cd8g6],
            w2fp9 = r7vjoy['qName'],
            $f_9w2 = r7vjoy['value'],
            mua = w2fp9['indexOf'](':');
        if (mua > 0x0) var c8thd6 = r7vjoy['prefix'] = w2fp9['slice'](0x0, mua),
            vrjxy7 = w2fp9['slice'](mua + 0x1),
            bqgk = 'xmlns' === c8thd6 && vrjxy7;else vrjxy7 = w2fp9, c8thd6 = null, bqgk = 'xmlns' === w2fp9 && '';
        r7vjoy['localName'] = vrjxy7, bqgk !== !0x1 && (null == p_f92w && (p_f92w = {}, gk8d6(x1nj7, x1nj7 = {})), x1nj7[bqgk] = p_f92w[bqgk] = $f_9w2, r7vjoy['uri'] = 'http://www.w3.org/2000/xmlns/', m4al3u['startPrefixMapping'](bqgk, $f_9w2));
    }
    for (var cd8g6 = vryjo7['length']; cd8g6--;) {
        r7vjoy = vryjo7[cd8g6];
        var c8thd6 = r7vjoy['prefix'];
        c8thd6 && ('xml' === c8thd6 && (r7vjoy['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== c8thd6 && (r7vjoy['uri'] = x1nj7[c8thd6 || '']));
    }
    var mua = au3n4['indexOf'](':');
    mua > 0x0 ? (c8thd6 = vryjo7['prefix'] = au3n4['slice'](0x0, mua), vrjxy7 = vryjo7['localName'] = au3n4['slice'](mua + 0x1)) : (c8thd6 = null, vrjxy7 = vryjo7['localName'] = au3n4);
    var f2_w$ = vryjo7['uri'] = x1nj7[c8thd6 || ''];
    if (m4al3u['startElement'](f2_w$, vrjxy7, au3n4, vryjo7), !vryjo7['closed']) return vryjo7['currentNSMap'] = x1nj7, vryjo7['localNSMap'] = p_f92w, !0x0;
    if (m4al3u['endElement'](f2_w$, vrjxy7, au3n4), p_f92w) {
        for (c8thd6 in p_f92w) m4al3u['endPrefixMapping'](c8thd6);
    }
}
function gcte8z(cdg, pthe_z, w29f$s, ni1x34, o5vrj) {
    if (/^(?:script|textarea)$/i['test'](w29f$s)) {
        var ph_et = cdg['indexOf']('</' + w29f$s + '>', pthe_z),
            bd6g0k = cdg['substring'](pthe_z + 0x1, ph_et);
        if (/[&<]/['test'](bd6g0k)) return (/^script$/i['test'](w29f$s) ? (o5vrj['characters'](bd6g0k, 0x0, bd6g0k['length']), ph_et) : (bd6g0k = bd6g0k['replace'](/&#?\w+;/g, ni1x34), o5vrj['characters'](bd6g0k, 0x0, bd6g0k['length']), ph_et)
        );
    }
    return pthe_z + 0x1;
}
function gj5ovyr(ijvx7n, n1u43i, o5yqv, z8t6ch) {
    var w9fs = z8t6ch[o5yqv];
    return null == w9fs && (w9fs = ijvx7n['lastIndexOf']('</' + o5yqv + '>'), n1u43i > w9fs && (w9fs = ijvx7n['lastIndexOf']('</' + o5yqv)), z8t6ch[o5yqv] = w9fs), n1u43i > w9fs;
}
function gk8d6(x413ni, db6kg0) {
    for (var gb0k in x413ni) db6kg0[gb0k] = x413ni[gb0k];
}
function gchzet8(oqb5k, k0d6bg, zteh8, aul341) {
    var w92pe = oqb5k['charAt'](k0d6bg + 0x2);
    switch (w92pe) {
        case '-':
            if ('-' === oqb5k['charAt'](k0d6bg + 0x3)) {
                var eztpch = oqb5k['indexOf']('-->', k0d6bg + 0x4);
                return eztpch > k0d6bg ? (zteh8['comment'](oqb5k, k0d6bg + 0x4, eztpch - k0d6bg - 0x4), eztpch + 0x3) : (aul341['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == oqb5k['substr'](k0d6bg + 0x3, 0x6)) {
                var eztpch = oqb5k['indexOf'](']]>', k0d6bg + 0x9);
                return zteh8['startCDATA'](), zteh8['characters'](oqb5k, k0d6bg + 0x9, eztpch - k0d6bg - 0x9), zteh8['endCDATA'](), eztpch + 0x3;
            }
            var yrv = ghd6ct(oqb5k, k0d6bg),
                e_hz = yrv['length'];
            if (e_hz > 0x1 && /!doctype/i['test'](yrv[0x0][0x0])) {
                var _e92 = yrv[0x1][0x0],
                    gbd60 = e_hz > 0x3 && /^public$/i['test'](yrv[0x2][0x0]) && yrv[0x3][0x0],
                    fp92_w = e_hz > 0x4 && yrv[0x4][0x0],
                    zth68 = yrv[e_hz - 0x1];
                return zteh8['startDTD'](_e92, gbd60 && gbd60['replace'](/^(['"])(.*?)\1$/, '$2'), fp92_w && fp92_w['replace'](/^(['"])(.*?)\1$/, '$2')), zteh8['endDTD'](), zth68['index'] + zth68[0x0]['length'];
            }
    }
    return -0x1;
}
function gk5bqg(k68c, f_9, qbo05) {
    var gdkb0q = k68c['indexOf']('?>', f_9);
    if (gdkb0q) {
        var w9sf$ = k68c['substring'](f_9, gdkb0q)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (w9sf$) {
            {
                w9sf$[0x0]['length'];
            }
            return qbo05['processingInstruction'](w9sf$[0x1], w9sf$[0x2]), gdkb0q + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function gn3a41() {}
function gtpzhc(p_2w9e, _p2f9w) {
    return p_2w9e['__proto__'] = _p2f9w, p_2w9e;
}
function ghd6ct(h8cz, r5yvo) {
    var rjo5vy,
        vxry = [],
        chz6t8 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (chz6t8['lastIndex'] = r5yvo, chz6t8['exec'](h8cz); rjo5vy = chz6t8['exec'](h8cz);) if (vxry['push'](rjo5vy), rjo5vy[0x1]) return vxry;
}
var gcthpez = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    gvnx = new RegExp('[\\-\\.0-9' + gcthpez['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    gwp2_ez = new RegExp('^' + gcthpez['source'] + gvnx['source'] + '*(?::' + gcthpez['source'] + gvnx['source'] + '*)?$'),
    gzt_eh = 0x0,
    grqbo5y = 0x1,
    gez8h = 0x2,
    g_9w$f2 = 0x3,
    gchtd68 = 0x4,
    gdkb06g = 0x5,
    gijrxv = 0x6,
    gzhp2 = 0x7;
gn143ix['prototype'] = {
    'parse': function (vqy5r, ov7yj, zh68ct) {
        var d0qbk = this['domBuilder'];
        d0qbk['startDocument'](), gk8d6(ov7yj, ov7yj = {}), gji1xn(vqy5r, ov7yj, zh68ct, d0qbk, this['errorHandler']), d0qbk['endDocument']();
    }
}, gn3a41['prototype'] = {
    'setTagName': function (dgkb6) {
        if (!gwp2_ez['test'](dgkb6)) throw new Error('invalid tagName:' + dgkb6);
        this['tagName'] = dgkb6;
    },
    'add': function (ep9w2_, vyoj5r, v7ijnx) {
        if (!gwp2_ez['test'](ep9w2_)) throw new Error('invalid attribute:' + ep9w2_);
        this[this['length']++] = {
            'qName': ep9w2_,
            'value': vyoj5r,
            'offset': v7ijnx
        };
    },
    'length': 0x0,
    'getLocalName': function ($f_29w) {
        return this[$f_29w]['localName'];
    },
    'getLocator': function (fp9w) {
        return this[fp9w]['locator'];
    },
    'getQName': function (m3u) {
        return this[m3u]['qName'];
    },
    'getURI': function (htd86c) {
        return this[htd86c]['uri'];
    },
    'getValue': function (p_f29) {
        return this[p_f29]['value'];
    }
}, gtpzhc({}, gtpzhc['prototype']) instanceof gtpzhc || (gtpzhc = function (zpthc, dkg8) {
    function xvr7j() {}
    xvr7j['prototype'] = dkg8, xvr7j = new xvr7j();
    for (dkg8 in zpthc) xvr7j[dkg8] = zpthc[dkg8];
    return xvr7j;
}), exports['XMLReader'] = gn143ix;