var u = wx.$x;
function xya1dve() {}
function xa1dyve(mcgt65, p0s7w, y1da7v, lqo8b_, w7s$0p) {
    function x3ctg5(r3kufz) {
        if (r3kufz > 0xffff) {
            r3kufz -= 0x10000;
            var wvp7ys = 0xd800 + (r3kufz >> 0xa),
                xctg = 0xdc00 + (0x3ff & r3kufz);
            return String['fromCharCode'](wvp7ys, xctg);
        }
        return String['fromCharCode'](r3kufz);
    }
    function s$w07(hdea1) {
        var k_u2 = hdea1['slice'](0x1, -0x1);
        return k_u2 in y1da7v ? y1da7v[k_u2] : '#' === k_u2['charAt'](0x0) ? x3ctg5(parseInt(k_u2['substr'](0x1)['replace']('x', '0x'))) : (w7s$0p['error']('entity not found:' + hdea1), hdea1);
    }
    function mtxcg(ou) {
        if (ou > c0mt5) {
            var s$7wp = mcgt65['substring'](c0mt5, ou)['replace'](/&#?\w+;/g, s$w07);
            urfk2_ && gm5ct6(c0mt5), lqo8b_['characters'](s$7wp, 0x0, ou - c0mt5), c0mt5 = ou;
        }
    }
    function gm5ct6(av41d, ev41a) {
        for (; av41d >= oq_8bl && (ev41a = dev41['exec'](mcgt65));) zgx3r = ev41a['index'], oq_8bl = zgx3r + ev41a[0x0]['length'], urfk2_['lineNumber']++;
        urfk2_['columnNumber'] = av41d - zgx3r + 0x1;
    }
    for (var zgx3r = 0x0, oq_8bl = 0x0, dev41 = /.*(?:\r\n?|\n)|.*$/g, urfk2_ = lqo8b_['locator'], dva7wy = [{ 'currentNSMap': p0s7w }], w7vyad = {}, c0mt5 = 0x0;;) {
        try {
            var urk3f = mcgt65['indexOf']('<', c0mt5);
            if (0x0 > urk3f) {
                if (!mcgt65['substr'](c0mt5)['match'](/^\s*$/)) {
                    var gz3ck = lqo8b_['doc'],
                        zfxkr = gz3ck['createTextNode'](mcgt65['substr'](c0mt5));
                    gz3ck['appendChild'](zfxkr), lqo8b_['currentElement'] = zfxkr;
                }
                return;
            }
            switch (urk3f > c0mt5 && mtxcg(urk3f), mcgt65['charAt'](urk3f + 0x1)) {
                case '/':
                    var lqo28_ = mcgt65['indexOf']('>', urk3f + 0x3),
                        c3gxzk = mcgt65['substring'](urk3f + 0x2, lqo28_),
                        $w7p0s = dva7wy['pop']();
                    0x0 > lqo28_ ? (c3gxzk = mcgt65['substring'](urk3f + 0x2)['replace'](/[\s<].*/, ''), w7s$0p['error']('end tag name: ' + c3gxzk + ' is not complete:' + $w7p0s['tagName']), lqo28_ = urk3f + 0x1 + c3gxzk['length']) : c3gxzk['match'](/\s</) && (c3gxzk = c3gxzk['replace'](/[\s<].*/, ''), w7s$0p['error']('end tag name: ' + c3gxzk + ' maybe not complete'), lqo28_ = urk3f + 0x1 + c3gxzk['length']);
                    var kz2rfu = $w7p0s['localNSMap'],
                        z53gxc = $w7p0s['tagName'] == c3gxzk,
                        eda1y = z53gxc || $w7p0s['tagName'] && $w7p0s['tagName']['toLowerCase']() == c3gxzk['toLowerCase']();
                    if (eda1y) {
                        if (lqo8b_['endElement']($w7p0s['uri'], $w7p0s['localName'], c3gxzk), kz2rfu) {
                            for (var _2ol8 in kz2rfu) lqo8b_['endPrefixMapping'](_2ol8);
                        }
                        z53gxc || w7s$0p['fatalError']('end tag name: ' + c3gxzk + ' is not match the current start tagName:' + $w7p0s['tagName']);
                    } else dva7wy['push']($w7p0s);
                    lqo28_++;
                    break;
                case '?':
                    urfk2_ && gm5ct6(urk3f), lqo28_ = xds(mcgt65, urk3f, lqo8b_);
                    break;
                case '!':
                    urfk2_ && gm5ct6(urk3f), lqo28_ = xw7p(mcgt65, urk3f, lqo8b_, w7s$0p);
                    break;
                default:
                    urfk2_ && gm5ct6(urk3f);
                    var tm$065 = new xp$ws7y(),
                        xtcgm5 = dva7wy[dva7wy['length'] - 0x1]['currentNSMap'],
                        lqo28_ = xo2_f(mcgt65, urk3f, tm$065, xtcgm5, s$w07, w7s$0p),
                        veyad1 = tm$065['length'];
                    if (!tm$065['closed'] && xfruk3z(mcgt65, lqo28_, tm$065['tagName'], w7vyad) && (tm$065['closed'] = !0x0, y1da7v['nbsp'] || w7s$0p['warning']('unclosed xml attribute')), urfk2_ && veyad1) {
                        for (var j8qolb = xed1vya(urfk2_, {}), s$p7y = 0x0; veyad1 > s$p7y; s$p7y++) {
                            var kfz3 = tm$065[s$p7y];
                            gm5ct6(kfz3['offset']), kfz3['locator'] = xed1vya(urfk2_, {});
                        }
                        lqo8b_['locator'] = j8qolb, xs7$p(tm$065, lqo8b_, xtcgm5) && dva7wy['push'](tm$065), lqo8b_['locator'] = urfk2_;
                    } else xs7$p(tm$065, lqo8b_, xtcgm5) && dva7wy['push'](tm$065);
                    'http://www.w3.org/1999/xhtml' !== tm$065['uri'] || tm$065['closed'] ? lqo28_++ : lqo28_ = xl8obq_(mcgt65, lqo28_, tm$065['tagName'], s$w07, lqo8b_);
            }
        } catch (m$056) {
            w7s$0p['error']('element parse error: ' + m$056), lqo28_ = -0x1;
        }
        lqo28_ > c0mt5 ? c0mt5 = lqo28_ : mtxcg(Math['max'](urk3f, c0mt5) + 0x1);
    }
}
function xed1vya(v17day, fk3xrz) {
    return fk3xrz['lineNumber'] = v17day['lineNumber'], fk3xrz['columnNumber'] = v17day['columnNumber'], fk3xrz;
}
function xo2_f(u8f_o, ihen4, sdywv, c3xkgz, p$06ws, i4he19) {
    for (var l28o_q, x5tg3, ur8f = ++ihen4, xr3gkz = xhi419e;;) {
        var j8olb = u8f_o['charAt'](ur8f);
        switch (j8olb) {
            case '=':
                if (xr3gkz === xdyea1v) l28o_q = u8f_o['slice'](ihen4, ur8f), xr3gkz = xwy7ds;else {
                    if (xr3gkz !== xzrukf3) throw new Error('attribute equal must after attrName');
                    xr3gkz = xwy7ds;
                }
                break;
            case '\x27':
            case '\x22':
                if (xr3gkz === xwy7ds || xr3gkz === xdyea1v) {
                    if (xr3gkz === xdyea1v && (i4he19['warning']('attribute value must after "="'), l28o_q = u8f_o['slice'](ihen4, ur8f)), ihen4 = ur8f + 0x1, ur8f = u8f_o['indexOf'](j8olb, ihen4), !(ur8f > 0x0)) throw new Error('attribute value no end \'' + j8olb + '\' match');
                    x5tg3 = u8f_o['slice'](ihen4, ur8f)['replace'](/&#?\w+;/g, p$06ws), sdywv['add'](l28o_q, x5tg3, ihen4 - 0x1), xr3gkz = xt50c6;
                } else {
                    if (xr3gkz != xcxt3g5) throw new Error('attribute value must after "="');
                    x5tg3 = u8f_o['slice'](ihen4, ur8f)['replace'](/&#?\w+;/g, p$06ws), sdywv['add'](l28o_q, x5tg3, ihen4), i4he19['warning']('attribute "' + l28o_q + '" missed start quot(' + j8olb + ')!!'), ihen4 = ur8f + 0x1, xr3gkz = xt50c6;
                }
                break;
            case '/':
                switch (xr3gkz) {
                    case xhi419e:
                        sdywv['setTagName'](u8f_o['slice'](ihen4, ur8f));
                    case xt50c6:
                    case xu2rfk:
                    case xxcz3k:
                        xr3gkz = xxcz3k, sdywv['closed'] = !0x0;
                    case xcxt3g5:
                    case xdyea1v:
                    case xzrukf3:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return i4he19['error']('unexpected end of input'), xr3gkz == xhi419e && sdywv['setTagName'](u8f_o['slice'](ihen4, ur8f)), ur8f;
            case '>':
                switch (xr3gkz) {
                    case xhi419e:
                        sdywv['setTagName'](u8f_o['slice'](ihen4, ur8f));
                    case xt50c6:
                    case xu2rfk:
                    case xxcz3k:
                        break;
                    case xcxt3g5:
                    case xdyea1v:
                        x5tg3 = u8f_o['slice'](ihen4, ur8f), '/' === x5tg3['slice'](-0x1) && (sdywv['closed'] = !0x0, x5tg3 = x5tg3['slice'](0x0, -0x1));
                    case xzrukf3:
                        xr3gkz === xzrukf3 && (x5tg3 = l28o_q), xr3gkz == xcxt3g5 ? (i4he19['warning']('attribute "' + x5tg3 + '" missed quot(")!!'), sdywv['add'](l28o_q, x5tg3['replace'](/&#?\w+;/g, p$06ws), ihen4)) : ('http://www.w3.org/1999/xhtml' === c3xkgz[''] && x5tg3['match'](/^(?:disabled|checked|selected)$/i) || i4he19['warning']('attribute "' + x5tg3 + '" missed value!! "' + x5tg3 + '" instead!!'), sdywv['add'](x5tg3, x5tg3, ihen4));
                        break;
                    case xwy7ds:
                        throw new Error('attribute value missed!!');
                }
                return ur8f;
            case '\u0080':
                j8olb = '\x20';
            default:
                if ('\x20' >= j8olb) switch (xr3gkz) {
                    case xhi419e:
                        sdywv['setTagName'](u8f_o['slice'](ihen4, ur8f)), xr3gkz = xu2rfk;
                        break;
                    case xdyea1v:
                        l28o_q = u8f_o['slice'](ihen4, ur8f), xr3gkz = xzrukf3;
                        break;
                    case xcxt3g5:
                        var x5tg3 = u8f_o['slice'](ihen4, ur8f)['replace'](/&#?\w+;/g, p$06ws);
                        i4he19['warning']('attribute "' + x5tg3 + '" missed quot(")!!'), sdywv['add'](l28o_q, x5tg3, ihen4);
                    case xt50c6:
                        xr3gkz = xu2rfk;
                } else switch (xr3gkz) {
                    case xzrukf3:
                        {
                            sdywv['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === c3xkgz[''] && l28o_q['match'](/^(?:disabled|checked|selected)$/i) || i4he19['warning']('attribute "' + l28o_q + '" missed value!! "' + l28o_q + '" instead2!!'), sdywv['add'](l28o_q, l28o_q, ihen4), ihen4 = ur8f, xr3gkz = xdyea1v;
                        break;
                    case xt50c6:
                        i4he19['warning']('attribute space is required"' + l28o_q + '\x22!!');
                    case xu2rfk:
                        xr3gkz = xdyea1v, ihen4 = ur8f;
                        break;
                    case xwy7ds:
                        xr3gkz = xcxt3g5, ihen4 = ur8f;
                        break;
                    case xxcz3k:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        ur8f++;
    }
}
function xs7$p(qo_8u, w0p$7, y$ps7) {
    for (var t56m$0 = qo_8u['tagName'], spwy7v = null, eh94i = qo_8u['length']; eh94i--;) {
        var gxzk = qo_8u[eh94i],
            ed4v1a = gxzk['qName'],
            kfxrz = gxzk['value'],
            _2qlo8 = ed4v1a['indexOf'](':');
        if (_2qlo8 > 0x0) var y7adwv = gxzk['prefix'] = ed4v1a['slice'](0x0, _2qlo8),
            v7aydw = ed4v1a['slice'](_2qlo8 + 0x1),
            xgr3z = 'xmlns' === y7adwv && v7aydw;else v7aydw = ed4v1a, y7adwv = null, xgr3z = 'xmlns' === ed4v1a && '';
        gxzk['localName'] = v7aydw, xgr3z !== !0x1 && (null == spwy7v && (spwy7v = {}, x$wps06(y$ps7, y$ps7 = {})), y$ps7[xgr3z] = spwy7v[xgr3z] = kfxrz, gxzk['uri'] = 'http://www.w3.org/2000/xmlns/', w0p$7['startPrefixMapping'](xgr3z, kfxrz));
    }
    for (var eh94i = qo_8u['length']; eh94i--;) {
        gxzk = qo_8u[eh94i];
        var y7adwv = gxzk['prefix'];
        y7adwv && ('xml' === y7adwv && (gxzk['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== y7adwv && (gxzk['uri'] = y$ps7[y7adwv || '']));
    }
    var _2qlo8 = t56m$0['indexOf'](':');
    _2qlo8 > 0x0 ? (y7adwv = qo_8u['prefix'] = t56m$0['slice'](0x0, _2qlo8), v7aydw = qo_8u['localName'] = t56m$0['slice'](_2qlo8 + 0x1)) : (y7adwv = null, v7aydw = qo_8u['localName'] = t56m$0);
    var t6gm5c = qo_8u['uri'] = y$ps7[y7adwv || ''];
    if (w0p$7['startElement'](t6gm5c, v7aydw, t56m$0, qo_8u), !qo_8u['closed']) return qo_8u['currentNSMap'] = y$ps7, qo_8u['localNSMap'] = spwy7v, !0x0;
    if (w0p$7['endElement'](t6gm5c, v7aydw, t56m$0), spwy7v) {
        for (y7adwv in spwy7v) w0p$7['endPrefixMapping'](y7adwv);
    }
}
function xl8obq_(pw0s7, he49i, kzr3u, dy7av1, m6$50) {
    if (/^(?:script|textarea)$/i['test'](kzr3u)) {
        var frzkx3 = pw0s7['indexOf']('</' + kzr3u + '>', he49i),
            y7swvp = pw0s7['substring'](he49i + 0x1, frzkx3);
        if (/[&<]/['test'](y7swvp)) return (/^script$/i['test'](kzr3u) ? (m6$50['characters'](y7swvp, 0x0, y7swvp['length']), frzkx3) : (y7swvp = y7swvp['replace'](/&#?\w+;/g, dy7av1), m6$50['characters'](y7swvp, 0x0, y7swvp['length']), frzkx3)
        );
    }
    return he49i + 0x1;
}
function xfruk3z(g6c5tm, wyspv, ckgxz, ay71d) {
    var lj8oq = ay71d[ckgxz];
    return null == lj8oq && (lj8oq = g6c5tm['lastIndexOf']('</' + ckgxz + '>'), wyspv > lj8oq && (lj8oq = g6c5tm['lastIndexOf']('</' + ckgxz)), ay71d[ckgxz] = lj8oq), wyspv > lj8oq;
}
function x$wps06(w7y$p, hi94ne) {
    for (var g35tcx in w7y$p) hi94ne[g35tcx] = w7y$p[g35tcx];
}
function xw7p(m6s$0p, _l2qo8, krzu2, swd) {
    var $w7sy = m6s$0p['charAt'](_l2qo8 + 0x2);
    switch ($w7sy) {
        case '-':
            if ('-' === m6s$0p['charAt'](_l2qo8 + 0x3)) {
                var zkgx3 = m6s$0p['indexOf']('-->', _l2qo8 + 0x4);
                return zkgx3 > _l2qo8 ? (krzu2['comment'](m6s$0p, _l2qo8 + 0x4, zkgx3 - _l2qo8 - 0x4), zkgx3 + 0x3) : (swd['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == m6s$0p['substr'](_l2qo8 + 0x3, 0x6)) {
                var zkgx3 = m6s$0p['indexOf'](']]>', _l2qo8 + 0x9);
                return krzu2['startCDATA'](), krzu2['characters'](m6s$0p, _l2qo8 + 0x9, zkgx3 - _l2qo8 - 0x9), krzu2['endCDATA'](), zkgx3 + 0x3;
            }
            var w0$7ps = xvd7y1a(m6s$0p, _l2qo8),
                gkxc3 = w0$7ps['length'];
            if (gkxc3 > 0x1 && /!doctype/i['test'](w0$7ps[0x0][0x0])) {
                var rg3 = w0$7ps[0x1][0x0],
                    kgxrz = gkxc3 > 0x3 && /^public$/i['test'](w0$7ps[0x2][0x0]) && w0$7ps[0x3][0x0],
                    a14ved = gkxc3 > 0x4 && w0$7ps[0x4][0x0],
                    lojb8 = w0$7ps[gkxc3 - 0x1];
                return krzu2['startDTD'](rg3, kgxrz && kgxrz['replace'](/^(['"])(.*?)\1$/, '$2'), a14ved && a14ved['replace'](/^(['"])(.*?)\1$/, '$2')), krzu2['endDTD'](), lojb8['index'] + lojb8[0x0]['length'];
            }
    }
    return -0x1;
}
function xds(ae1hd4, ayved, aye1v) {
    var eadh1 = ae1hd4['indexOf']('?>', ayved);
    if (eadh1) {
        var deva1y = ae1hd4['substring'](ayved, eadh1)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (deva1y) {
            {
                deva1y[0x0]['length'];
            }
            return aye1v['processingInstruction'](deva1y[0x1], deva1y[0x2]), eadh1 + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function xp$ws7y() {}
function x_o2(fx3rzk, w7psvy) {
    return fx3rzk['__proto__'] = w7psvy, fx3rzk;
}
function xvd7y1a(o8qljb, wvsy7d) {
    var i94he,
        rkf2u_ = [],
        s7ywdv = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (s7ywdv['lastIndex'] = wvsy7d, s7ywdv['exec'](o8qljb); i94he = s7ywdv['exec'](o8qljb);) if (rkf2u_['push'](i94he), i94he[0x1]) return rkf2u_;
}
var xsp$06m = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    xm$ps60 = new RegExp('[\\-\\.0-9' + xsp$06m['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    xyvd1a = new RegExp('^' + xsp$06m['source'] + xm$ps60['source'] + '*(?::' + xsp$06m['source'] + xm$ps60['source'] + '*)?$'),
    xhi419e = 0x0,
    xdyea1v = 0x1,
    xzrukf3 = 0x2,
    xwy7ds = 0x3,
    xcxt3g5 = 0x4,
    xt50c6 = 0x5,
    xu2rfk = 0x6,
    xxcz3k = 0x7;
xya1dve['prototype'] = {
    'parse': function (uoq2, lo2_8q, bolq) {
        var s6pw$0 = this['domBuilder'];
        s6pw$0['startDocument'](), x$wps06(lo2_8q, lo2_8q = {}), xa1dyve(uoq2, lo2_8q, bolq, s6pw$0, this['errorHandler']), s6pw$0['endDocument']();
    }
}, xp$ws7y['prototype'] = {
    'setTagName': function (p06t$m) {
        if (!xyvd1a['test'](p06t$m)) throw new Error('invalid tagName:' + p06t$m);
        this['tagName'] = p06t$m;
    },
    'add': function (yws7d, qojbl, a4dhe1) {
        if (!xyvd1a['test'](yws7d)) throw new Error('invalid attribute:' + yws7d);
        this[this['length']++] = {
            'qName': yws7d,
            'value': qojbl,
            'offset': a4dhe1
        };
    },
    'length': 0x0,
    'getLocalName': function (xfkz) {
        return this[xfkz]['localName'];
    },
    'getLocator': function (zcg35) {
        return this[zcg35]['locator'];
    },
    'getQName': function (vad71y) {
        return this[vad71y]['qName'];
    },
    'getURI': function (cg3x) {
        return this[cg3x]['uri'];
    },
    'getValue': function (hai41) {
        return this[hai41]['value'];
    }
}, x_o2({}, x_o2['prototype']) instanceof x_o2 || (x_o2 = function (o8q2_u, m6$ps) {
    function vs7pyw() {}
    vs7pyw['prototype'] = m6$ps, vs7pyw = new vs7pyw();
    for (m6$ps in o8q2_u) vs7pyw[m6$ps] = o8q2_u[m6$ps];
    return vs7pyw;
}), exports['XMLReader'] = xya1dve;