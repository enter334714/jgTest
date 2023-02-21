var u = wx.$x;
function x$0sp6() {}
function xu2frk(krzx3g, o_82fu, u_of, $m065, nh4e9) {
    function fr3(kz3r) {
        if (kz3r > 0xffff) {
            kz3r -= 0x10000;
            var mxc5tg = 0xd800 + (kz3r >> 0xa),
                vyde = 0xdc00 + (0x3ff & kz3r);
            return String['fromCharCode'](mxc5tg, vyde);
        }
        return String['fromCharCode'](kz3r);
    }
    function kzrxf(tmp0$6) {
        var hi9e14 = tmp0$6['slice'](0x1, -0x1);
        return hi9e14 in u_of ? u_of[hi9e14] : '#' === hi9e14['charAt'](0x0) ? fr3(parseInt(hi9e14['substr'](0x1)['replace']('x', '0x'))) : (nh4e9['error']('entity not found:' + tmp0$6), tmp0$6);
    }
    function p$m6t(x5z3cg) {
        if (x5z3cg > e1i4a) {
            var y1edv = krzx3g['substring'](e1i4a, x5z3cg)['replace'](/&#?\w+;/g, kzrxf);
            _ob && tm56c0(e1i4a), $m065['characters'](y1edv, 0x0, x5z3cg - e1i4a), e1i4a = x5z3cg;
        }
    }
    function tm56c0($wp7y, ahei14) {
        for (; $wp7y >= h41e9 && (ahei14 = rkufz3['exec'](krzx3g));) evda = ahei14['index'], h41e9 = evda + ahei14[0x0]['length'], _ob['lineNumber']++;
        _ob['columnNumber'] = $wp7y - evda + 0x1;
    }
    for (var evda = 0x0, h41e9 = 0x0, rkufz3 = /.*(?:\r\n?|\n)|.*$/g, _ob = $m065['locator'], rfz2 = [{ 'currentNSMap': o_82fu }], u8of_2 = {}, e1i4a = 0x0;;) {
        try {
            var bloj = krzx3g['indexOf']('<', e1i4a);
            if (0x0 > bloj) {
                if (!krzx3g['substr'](e1i4a)['match'](/^\s*$/)) {
                    var ah14ed = $m065['doc'],
                        xct3 = ah14ed['createTextNode'](krzx3g['substr'](e1i4a));
                    ah14ed['appendChild'](xct3), $m065['currentElement'] = xct3;
                }
                return;
            }
            switch (bloj > e1i4a && p$m6t(bloj), krzx3g['charAt'](bloj + 0x1)) {
                case '/':
                    var t65$m = krzx3g['indexOf']('>', bloj + 0x3),
                        p7ys$w = krzx3g['substring'](bloj + 0x2, t65$m),
                        ys$wp = rfz2['pop']();
                    0x0 > t65$m ? (p7ys$w = krzx3g['substring'](bloj + 0x2)['replace'](/[\s<].*/, ''), nh4e9['error']('end tag name: ' + p7ys$w + ' is not complete:' + ys$wp['tagName']), t65$m = bloj + 0x1 + p7ys$w['length']) : p7ys$w['match'](/\s</) && (p7ys$w = p7ys$w['replace'](/[\s<].*/, ''), nh4e9['error']('end tag name: ' + p7ys$w + ' maybe not complete'), t65$m = bloj + 0x1 + p7ys$w['length']);
                    var z5x = ys$wp['localNSMap'],
                        zf3k = ys$wp['tagName'] == p7ys$w,
                        rx3 = zf3k || ys$wp['tagName'] && ys$wp['tagName']['toLowerCase']() == p7ys$w['toLowerCase']();
                    if (rx3) {
                        if ($m065['endElement'](ys$wp['uri'], ys$wp['localName'], p7ys$w), z5x) {
                            for (var v7wdy in z5x) $m065['endPrefixMapping'](v7wdy);
                        }
                        zf3k || nh4e9['fatalError']('end tag name: ' + p7ys$w + ' is not match the current start tagName:' + ys$wp['tagName']);
                    } else rfz2['push'](ys$wp);
                    t65$m++;
                    break;
                case '?':
                    _ob && tm56c0(bloj), t65$m = xi9e41h(krzx3g, bloj, $m065);
                    break;
                case '!':
                    _ob && tm56c0(bloj), t65$m = xi149e(krzx3g, bloj, $m065, nh4e9);
                    break;
                default:
                    _ob && tm56c0(bloj);
                    var ct53g = new xz53c(),
                        q8j = rfz2[rfz2['length'] - 0x1]['currentNSMap'],
                        t65$m = xtgmc56(krzx3g, bloj, ct53g, q8j, kzrxf, nh4e9),
                        vwd7sy = ct53g['length'];
                    if (!ct53g['closed'] && xt6p$(krzx3g, t65$m, ct53g['tagName'], u8of_2) && (ct53g['closed'] = !0x0, u_of['nbsp'] || nh4e9['warning']('unclosed xml attribute')), _ob && vwd7sy) {
                        for (var c5m6gt = xt506cm(_ob, {}), rkzuf2 = 0x0; vwd7sy > rkzuf2; rkzuf2++) {
                            var s7ywv = ct53g[rkzuf2];
                            tm56c0(s7ywv['offset']), s7ywv['locator'] = xt506cm(_ob, {});
                        }
                        $m065['locator'] = c5m6gt, xkzgxr(ct53g, $m065, q8j) && rfz2['push'](ct53g), $m065['locator'] = _ob;
                    } else xkzgxr(ct53g, $m065, q8j) && rfz2['push'](ct53g);
                    'http://www.w3.org/1999/xhtml' !== ct53g['uri'] || ct53g['closed'] ? t65$m++ : t65$m = xzcg53x(krzx3g, t65$m, ct53g['tagName'], kzrxf, $m065);
            }
        } catch (t0$p6) {
            nh4e9['error']('element parse error: ' + t0$p6), t65$m = -0x1;
        }
        t65$m > e1i4a ? e1i4a = t65$m : p$m6t(Math['max'](bloj, e1i4a) + 0x1);
    }
}
function xt506cm(n4ieh9, ufk3zr) {
    return ufk3zr['lineNumber'] = n4ieh9['lineNumber'], ufk3zr['columnNumber'] = n4ieh9['columnNumber'], ufk3zr;
}
function xtgmc56(t$m06, zk3r, d7wsyv, wv7ay, wavyd7, uk2f) {
    for (var sdvy, xgtmc5, i4eh9n = ++zk3r, dvaye = xfo2_8u;;) {
        var zk3xg = t$m06['charAt'](i4eh9n);
        switch (zk3xg) {
            case '=':
                if (dvaye === xf2_rku) sdvy = t$m06['slice'](zk3r, i4eh9n), dvaye = x_ou2;else {
                    if (dvaye !== xdyav17) throw new Error('attribute equal must after attrName');
                    dvaye = x_ou2;
                }
                break;
            case '\x27':
            case '\x22':
                if (dvaye === x_ou2 || dvaye === xf2_rku) {
                    if (dvaye === xf2_rku && (uk2f['warning']('attribute value must after "="'), sdvy = t$m06['slice'](zk3r, i4eh9n)), zk3r = i4eh9n + 0x1, i4eh9n = t$m06['indexOf'](zk3xg, zk3r), !(i4eh9n > 0x0)) throw new Error('attribute value no end \'' + zk3xg + '\' match');
                    xgtmc5 = t$m06['slice'](zk3r, i4eh9n)['replace'](/&#?\w+;/g, wavyd7), d7wsyv['add'](sdvy, xgtmc5, zk3r - 0x1), dvaye = xqbl_o8;
                } else {
                    if (dvaye != xlo_bq) throw new Error('attribute value must after "="');
                    xgtmc5 = t$m06['slice'](zk3r, i4eh9n)['replace'](/&#?\w+;/g, wavyd7), d7wsyv['add'](sdvy, xgtmc5, zk3r), uk2f['warning']('attribute "' + sdvy + '" missed start quot(' + zk3xg + ')!!'), zk3r = i4eh9n + 0x1, dvaye = xqbl_o8;
                }
                break;
            case '/':
                switch (dvaye) {
                    case xfo2_8u:
                        d7wsyv['setTagName'](t$m06['slice'](zk3r, i4eh9n));
                    case xqbl_o8:
                    case xgc5mxt:
                    case xs7w0p:
                        dvaye = xs7w0p, d7wsyv['closed'] = !0x0;
                    case xlo_bq:
                    case xf2_rku:
                    case xdyav17:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return uk2f['error']('unexpected end of input'), dvaye == xfo2_8u && d7wsyv['setTagName'](t$m06['slice'](zk3r, i4eh9n)), i4eh9n;
            case '>':
                switch (dvaye) {
                    case xfo2_8u:
                        d7wsyv['setTagName'](t$m06['slice'](zk3r, i4eh9n));
                    case xqbl_o8:
                    case xgc5mxt:
                    case xs7w0p:
                        break;
                    case xlo_bq:
                    case xf2_rku:
                        xgtmc5 = t$m06['slice'](zk3r, i4eh9n), '/' === xgtmc5['slice'](-0x1) && (d7wsyv['closed'] = !0x0, xgtmc5 = xgtmc5['slice'](0x0, -0x1));
                    case xdyav17:
                        dvaye === xdyav17 && (xgtmc5 = sdvy), dvaye == xlo_bq ? (uk2f['warning']('attribute "' + xgtmc5 + '" missed quot(")!!'), d7wsyv['add'](sdvy, xgtmc5['replace'](/&#?\w+;/g, wavyd7), zk3r)) : ('http://www.w3.org/1999/xhtml' === wv7ay[''] && xgtmc5['match'](/^(?:disabled|checked|selected)$/i) || uk2f['warning']('attribute "' + xgtmc5 + '" missed value!! "' + xgtmc5 + '" instead!!'), d7wsyv['add'](xgtmc5, xgtmc5, zk3r));
                        break;
                    case x_ou2:
                        throw new Error('attribute value missed!!');
                }
                return i4eh9n;
            case '\u0080':
                zk3xg = '\x20';
            default:
                if ('\x20' >= zk3xg) switch (dvaye) {
                    case xfo2_8u:
                        d7wsyv['setTagName'](t$m06['slice'](zk3r, i4eh9n)), dvaye = xgc5mxt;
                        break;
                    case xf2_rku:
                        sdvy = t$m06['slice'](zk3r, i4eh9n), dvaye = xdyav17;
                        break;
                    case xlo_bq:
                        var xgtmc5 = t$m06['slice'](zk3r, i4eh9n)['replace'](/&#?\w+;/g, wavyd7);
                        uk2f['warning']('attribute "' + xgtmc5 + '" missed quot(")!!'), d7wsyv['add'](sdvy, xgtmc5, zk3r);
                    case xqbl_o8:
                        dvaye = xgc5mxt;
                } else switch (dvaye) {
                    case xdyav17:
                        {
                            d7wsyv['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === wv7ay[''] && sdvy['match'](/^(?:disabled|checked|selected)$/i) || uk2f['warning']('attribute "' + sdvy + '" missed value!! "' + sdvy + '" instead2!!'), d7wsyv['add'](sdvy, sdvy, zk3r), zk3r = i4eh9n, dvaye = xf2_rku;
                        break;
                    case xqbl_o8:
                        uk2f['warning']('attribute space is required"' + sdvy + '\x22!!');
                    case xgc5mxt:
                        dvaye = xf2_rku, zk3r = i4eh9n;
                        break;
                    case x_ou2:
                        dvaye = xlo_bq, zk3r = i4eh9n;
                        break;
                    case xs7w0p:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        i4eh9n++;
    }
}
function xkzgxr(d7yaw, t5c06m, zrkf2u) {
    for (var v71ad = d7yaw['tagName'], _8fu2r = null, $pw06s = d7yaw['length']; $pw06s--;) {
        var kf3ruz = d7yaw[$pw06s],
            da1yev = kf3ruz['qName'],
            f2rzu = kf3ruz['value'],
            zxgk3r = da1yev['indexOf'](':');
        if (zxgk3r > 0x0) var mctx5g = kf3ruz['prefix'] = da1yev['slice'](0x0, zxgk3r),
            eavd1y = da1yev['slice'](zxgk3r + 0x1),
            sp60m$ = 'xmlns' === mctx5g && eavd1y;else eavd1y = da1yev, mctx5g = null, sp60m$ = 'xmlns' === da1yev && '';
        kf3ruz['localName'] = eavd1y, sp60m$ !== !0x1 && (null == _8fu2r && (_8fu2r = {}, xgzkx3(zrkf2u, zrkf2u = {})), zrkf2u[sp60m$] = _8fu2r[sp60m$] = f2rzu, kf3ruz['uri'] = 'http://www.w3.org/2000/xmlns/', t5c06m['startPrefixMapping'](sp60m$, f2rzu));
    }
    for (var $pw06s = d7yaw['length']; $pw06s--;) {
        kf3ruz = d7yaw[$pw06s];
        var mctx5g = kf3ruz['prefix'];
        mctx5g && ('xml' === mctx5g && (kf3ruz['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== mctx5g && (kf3ruz['uri'] = zrkf2u[mctx5g || '']));
    }
    var zxgk3r = v71ad['indexOf'](':');
    zxgk3r > 0x0 ? (mctx5g = d7yaw['prefix'] = v71ad['slice'](0x0, zxgk3r), eavd1y = d7yaw['localName'] = v71ad['slice'](zxgk3r + 0x1)) : (mctx5g = null, eavd1y = d7yaw['localName'] = v71ad);
    var hi4e91 = d7yaw['uri'] = zrkf2u[mctx5g || ''];
    if (t5c06m['startElement'](hi4e91, eavd1y, v71ad, d7yaw), !d7yaw['closed']) return d7yaw['currentNSMap'] = zrkf2u, d7yaw['localNSMap'] = _8fu2r, !0x0;
    if (t5c06m['endElement'](hi4e91, eavd1y, v71ad), _8fu2r) {
        for (mctx5g in _8fu2r) t5c06m['endPrefixMapping'](mctx5g);
    }
}
function xzcg53x(w7p0s, hdae, c3tg, xcg5tm, e1d4ah) {
    if (/^(?:script|textarea)$/i['test'](c3tg)) {
        var _f28o = w7p0s['indexOf']('</' + c3tg + '>', hdae),
            ev1ad = w7p0s['substring'](hdae + 0x1, _f28o);
        if (/[&<]/['test'](ev1ad)) return (/^script$/i['test'](c3tg) ? (e1d4ah['characters'](ev1ad, 0x0, ev1ad['length']), _f28o) : (ev1ad = ev1ad['replace'](/&#?\w+;/g, xcg5tm), e1d4ah['characters'](ev1ad, 0x0, ev1ad['length']), _f28o)
        );
    }
    return hdae + 0x1;
}
function xt6p$(z2urkf, lbjqo8, qbo_8, qo_l82) {
    var boj8q = qo_l82[qbo_8];
    return null == boj8q && (boj8q = z2urkf['lastIndexOf']('</' + qbo_8 + '>'), lbjqo8 > boj8q && (boj8q = z2urkf['lastIndexOf']('</' + qbo_8)), qo_l82[qbo_8] = boj8q), lbjqo8 > boj8q;
}
function xgzkx3(c3g5, c5gt6m) {
    for (var krz3x in c3g5) c5gt6m[krz3x] = c3g5[krz3x];
}
function xi149e(v71d, g3cxz5, vpysw7, rfk2uz) {
    var ypws$7 = v71d['charAt'](g3cxz5 + 0x2);
    switch (ypws$7) {
        case '-':
            if ('-' === v71d['charAt'](g3cxz5 + 0x3)) {
                var $7sywp = v71d['indexOf']('-->', g3cxz5 + 0x4);
                return $7sywp > g3cxz5 ? (vpysw7['comment'](v71d, g3cxz5 + 0x4, $7sywp - g3cxz5 - 0x4), $7sywp + 0x3) : (rfk2uz['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == v71d['substr'](g3cxz5 + 0x3, 0x6)) {
                var $7sywp = v71d['indexOf'](']]>', g3cxz5 + 0x9);
                return vpysw7['startCDATA'](), vpysw7['characters'](v71d, g3cxz5 + 0x9, $7sywp - g3cxz5 - 0x9), vpysw7['endCDATA'](), $7sywp + 0x3;
            }
            var ayd1 = xzg3(v71d, g3cxz5),
                fu8r_ = ayd1['length'];
            if (fu8r_ > 0x1 && /!doctype/i['test'](ayd1[0x0][0x0])) {
                var $pm06 = ayd1[0x1][0x0],
                    r3gkxz = fu8r_ > 0x3 && /^public$/i['test'](ayd1[0x2][0x0]) && ayd1[0x3][0x0],
                    p0$s6m = fu8r_ > 0x4 && ayd1[0x4][0x0],
                    g6m5c = ayd1[fu8r_ - 0x1];
                return vpysw7['startDTD']($pm06, r3gkxz && r3gkxz['replace'](/^(['"])(.*?)\1$/, '$2'), p0$s6m && p0$s6m['replace'](/^(['"])(.*?)\1$/, '$2')), vpysw7['endDTD'](), g6m5c['index'] + g6m5c[0x0]['length'];
            }
    }
    return -0x1;
}
function xi9e41h(y1vd7a, tm0$6, svy7dw) {
    var aeyv = y1vd7a['indexOf']('?>', tm0$6);
    if (aeyv) {
        var t$mp06 = y1vd7a['substring'](tm0$6, aeyv)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (t$mp06) {
            {
                t$mp06[0x0]['length'];
            }
            return svy7dw['processingInstruction'](t$mp06[0x1], t$mp06[0x2]), aeyv + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function xz53c() {}
function x$t560(c5xzg3, y7vswd) {
    return c5xzg3['__proto__'] = y7vswd, c5xzg3;
}
function xzg3(lob_q8, ljq8ob) {
    var tc065m,
        fk3zu = [],
        sp06$w = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (sp06$w['lastIndex'] = ljq8ob, sp06$w['exec'](lob_q8); tc065m = sp06$w['exec'](lob_q8);) if (fk3zu['push'](tc065m), tc065m[0x1]) return fk3zu;
}
var xhdae41 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    xeayd = new RegExp('[\\-\\.0-9' + xhdae41['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    xgzxck = new RegExp('^' + xhdae41['source'] + xeayd['source'] + '*(?::' + xhdae41['source'] + xeayd['source'] + '*)?$'),
    xfo2_8u = 0x0,
    xf2_rku = 0x1,
    xdyav17 = 0x2,
    x_ou2 = 0x3,
    xlo_bq = 0x4,
    xqbl_o8 = 0x5,
    xgc5mxt = 0x6,
    xs7w0p = 0x7;
x$0sp6['prototype'] = {
    'parse': function (i9hen, yv7da, dv7swy) {
        var wadyv = this['domBuilder'];
        wadyv['startDocument'](), xgzkx3(yv7da, yv7da = {}), xu2frk(i9hen, yv7da, dv7swy, wadyv, this['errorHandler']), wadyv['endDocument']();
    }
}, xz53c['prototype'] = {
    'setTagName': function (h1eai4) {
        if (!xgzxck['test'](h1eai4)) throw new Error('invalid tagName:' + h1eai4);
        this['tagName'] = h1eai4;
    },
    'add': function (k3zx, gtmcx, ya7vdw) {
        if (!xgzxck['test'](k3zx)) throw new Error('invalid attribute:' + k3zx);
        this[this['length']++] = {
            'qName': k3zx,
            'value': gtmcx,
            'offset': ya7vdw
        };
    },
    'length': 0x0,
    'getLocalName': function (e14ih) {
        return this[e14ih]['localName'];
    },
    'getLocator': function (vyae1d) {
        return this[vyae1d]['locator'];
    },
    'getQName': function (m065) {
        return this[m065]['qName'];
    },
    'getURI': function (psm$6) {
        return this[psm$6]['uri'];
    },
    'getValue': function (rzu3fk) {
        return this[rzu3fk]['value'];
    }
}, x$t560({}, x$t560['prototype']) instanceof x$t560 || (x$t560 = function (p$70w, yspw$) {
    function u3fkzr() {}
    u3fkzr['prototype'] = yspw$, u3fkzr = new u3fkzr();
    for (yspw$ in p$70w) u3fkzr[yspw$] = p$70w[yspw$];
    return u3fkzr;
}), exports['XMLReader'] = x$0sp6;