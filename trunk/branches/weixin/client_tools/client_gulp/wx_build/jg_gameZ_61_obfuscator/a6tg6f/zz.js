var f = wx.$B;
function Shwbgv3() {}
function St8jm(u46y7a, md$j81, pfst8k, hbl59v, _y6w4u) {
    function mt$8kd(onq0xe) {
        if (onq0xe > 0xffff) {
            onq0xe -= 0x10000;
            var noxua = 0xd800 + (onq0xe >> 0xa),
                q0one = 0xdc00 + (0x3ff & onq0xe);
            return String['fromCharCode'](noxua, q0one);
        }
        return String['fromCharCode'](onq0xe);
    }
    function u6_4ay(pkt8s) {
        var $ktdf = pkt8s['slice'](0x1, -0x1);
        return $ktdf in pfst8k ? pfst8k[$ktdf] : '#' === $ktdf['charAt'](0x0) ? mt$8kd(parseInt($ktdf['substr'](0x1)['replace']('x', '0x'))) : (_y6w4u['error']('entity not found:' + pkt8s), pkt8s);
    }
    function qxe7on(vb3h) {
        if (vb3h > no6u7a) {
            var sfitp = u46y7a['substring'](no6u7a, vb3h)['replace'](/&#?\w+;/g, u6_4ay);
            g3bwh_ && ou6n7(no6u7a), hbl59v['characters'](sfitp, 0x0, vb3h - no6u7a), no6u7a = vb3h;
        }
    }
    function ou6n7(wy4_u, auxno7) {
        for (; wy4_u >= zdm21 && (auxno7 = itpfsk['exec'](u46y7a));) xea7on = auxno7['index'], zdm21 = xea7on + auxno7[0x0]['length'], g3bwh_['lineNumber']++;
        g3bwh_['columnNumber'] = wy4_u - xea7on + 0x1;
    }
    for (var xea7on = 0x0, zdm21 = 0x0, itpfsk = /.*(?:\r\n?|\n)|.*$/g, g3bwh_ = hbl59v['locator'], lh59b = [{ 'currentNSMap': md$j81 }], w6_4gy = {}, no6u7a = 0x0;;) {
        try {
            var eqx7 = u46y7a['indexOf']('<', no6u7a);
            if (0x0 > eqx7) {
                if (!u46y7a['substr'](no6u7a)['match'](/^\s*$/)) {
                    var mdk8$t = hbl59v['doc'],
                        xen7qo = mdk8$t['createTextNode'](u46y7a['substr'](no6u7a));
                    mdk8$t['appendChild'](xen7qo), hbl59v['currentElement'] = xen7qo;
                }
                return;
            }
            switch (eqx7 > no6u7a && qxe7on(eqx7), u46y7a['charAt'](eqx7 + 0x1)) {
                case '/':
                    var md8t$ = u46y7a['indexOf']('>', eqx7 + 0x3),
                        hv3bwg = u46y7a['substring'](eqx7 + 0x2, md8t$),
                        $dj81m = lh59b['pop']();
                    0x0 > md8t$ ? (hv3bwg = u46y7a['substring'](eqx7 + 0x2)['replace'](/[\s<].*/, ''), _y6w4u['error']('end tag name: ' + hv3bwg + ' is not complete:' + $dj81m['tagName']), md8t$ = eqx7 + 0x1 + hv3bwg['length']) : hv3bwg['match'](/\s</) && (hv3bwg = hv3bwg['replace'](/[\s<].*/, ''), _y6w4u['error']('end tag name: ' + hv3bwg + ' maybe not complete'), md8t$ = eqx7 + 0x1 + hv3bwg['length']);
                    var au47y = $dj81m['localNSMap'],
                        h_wg3 = $dj81m['tagName'] == hv3bwg,
                        kt8df$ = h_wg3 || $dj81m['tagName'] && $dj81m['tagName']['toLowerCase']() == hv3bwg['toLowerCase']();
                    if (kt8df$) {
                        if (hbl59v['endElement']($dj81m['uri'], $dj81m['localName'], hv3bwg), au47y) {
                            for (var o7ax in au47y) hbl59v['endPrefixMapping'](o7ax);
                        }
                        h_wg3 || _y6w4u['fatalError']('end tag name: ' + hv3bwg + ' is not match the current start tagName:' + $dj81m['tagName']);
                    } else lh59b['push']($dj81m);
                    md8t$++;
                    break;
                case '?':
                    g3bwh_ && ou6n7(eqx7), md8t$ = Sp$8kf(u46y7a, eqx7, hbl59v);
                    break;
                case '!':
                    g3bwh_ && ou6n7(eqx7), md8t$ = Slzj1(u46y7a, eqx7, hbl59v, _y6w4u);
                    break;
                default:
                    g3bwh_ && ou6n7(eqx7);
                    var p8$kt = new Srxoqe(),
                        jd1z2m = lh59b[lh59b['length'] - 0x1]['currentNSMap'],
                        md8t$ = Sh95z(u46y7a, eqx7, p8$kt, jd1z2m, u6_4ay, _y6w4u),
                        spktif = p8$kt['length'];
                    if (!p8$kt['closed'] && Sg3vw(u46y7a, md8t$, p8$kt['tagName'], w6_4gy) && (p8$kt['closed'] = !0x0, pfst8k['nbsp'] || _y6w4u['warning']('unclosed xml attribute')), g3bwh_ && spktif) {
                        for (var lvz952 = Sl9j12z(g3bwh_, {}), oq0nxe = 0x0; spktif > oq0nxe; oq0nxe++) {
                            var $1dj8m = p8$kt[oq0nxe];
                            ou6n7($1dj8m['offset']), $1dj8m['locator'] = Sl9j12z(g3bwh_, {});
                        }
                        hbl59v['locator'] = lvz952, Sy_6w4(p8$kt, hbl59v, jd1z2m) && lh59b['push'](p8$kt), hbl59v['locator'] = g3bwh_;
                    } else Sy_6w4(p8$kt, hbl59v, jd1z2m) && lh59b['push'](p8$kt);
                    'http://www.w3.org/1999/xhtml' !== p8$kt['uri'] || p8$kt['closed'] ? md8t$++ : md8t$ = S$d8tmk(u46y7a, md8t$, p8$kt['tagName'], u6_4ay, hbl59v);
            }
        } catch (vgh3) {
            _y6w4u['error']('element parse error: ' + vgh3), md8t$ = -0x1;
        }
        md8t$ > no6u7a ? no6u7a = md8t$ : qxe7on(Math['max'](eqx7, no6u7a) + 0x1);
    }
}
function Sl9j12z(g_bhw, dj18m$) {
    return dj18m$['lineNumber'] = g_bhw['lineNumber'], dj18m$['columnNumber'] = g_bhw['columnNumber'], dj18m$;
}
function Sh95z(a7on, tf8dk$, hlv9b, t8$fpk, a6u4y_, y4u_w6) {
    for (var zvlh5, qor0ex, k8dm$ = ++tf8dk$, z5hv9 = S$8dtmj;;) {
        var ne0x = a7on['charAt'](k8dm$);
        switch (ne0x) {
            case '=':
                if (z5hv9 === Shvzl) zvlh5 = a7on['slice'](tf8dk$, k8dm$), z5hv9 = Sau7n64;else {
                    if (z5hv9 !== Sd$8mj) throw new Error('attribute equal must after attrName');
                    z5hv9 = Sau7n64;
                }
                break;
            case '\x27':
            case '\x22':
                if (z5hv9 === Sau7n64 || z5hv9 === Shvzl) {
                    if (z5hv9 === Shvzl && (y4u_w6['warning']('attribute value must after "="'), zvlh5 = a7on['slice'](tf8dk$, k8dm$)), tf8dk$ = k8dm$ + 0x1, k8dm$ = a7on['indexOf'](ne0x, tf8dk$), !(k8dm$ > 0x0)) throw new Error('attribute value no end \'' + ne0x + '\' match');
                    qor0ex = a7on['slice'](tf8dk$, k8dm$)['replace'](/&#?\w+;/g, a6u4y_), hlv9b['add'](zvlh5, qor0ex, tf8dk$ - 0x1), z5hv9 = Sux7an;
                } else {
                    if (z5hv9 != Sh_g3w) throw new Error('attribute value must after "="');
                    qor0ex = a7on['slice'](tf8dk$, k8dm$)['replace'](/&#?\w+;/g, a6u4y_), hlv9b['add'](zvlh5, qor0ex, tf8dk$), y4u_w6['warning']('attribute "' + zvlh5 + '" missed start quot(' + ne0x + ')!!'), tf8dk$ = k8dm$ + 0x1, z5hv9 = Sux7an;
                }
                break;
            case '/':
                switch (z5hv9) {
                    case S$8dtmj:
                        hlv9b['setTagName'](a7on['slice'](tf8dk$, k8dm$));
                    case Sux7an:
                    case Svl259:
                    case S_g3bw:
                        z5hv9 = S_g3bw, hlv9b['closed'] = !0x0;
                    case Sh_g3w:
                    case Shvzl:
                    case Sd$8mj:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return y4u_w6['error']('unexpected end of input'), z5hv9 == S$8dtmj && hlv9b['setTagName'](a7on['slice'](tf8dk$, k8dm$)), k8dm$;
            case '>':
                switch (z5hv9) {
                    case S$8dtmj:
                        hlv9b['setTagName'](a7on['slice'](tf8dk$, k8dm$));
                    case Sux7an:
                    case Svl259:
                    case S_g3bw:
                        break;
                    case Sh_g3w:
                    case Shvzl:
                        qor0ex = a7on['slice'](tf8dk$, k8dm$), '/' === qor0ex['slice'](-0x1) && (hlv9b['closed'] = !0x0, qor0ex = qor0ex['slice'](0x0, -0x1));
                    case Sd$8mj:
                        z5hv9 === Sd$8mj && (qor0ex = zvlh5), z5hv9 == Sh_g3w ? (y4u_w6['warning']('attribute "' + qor0ex + '" missed quot(")!!'), hlv9b['add'](zvlh5, qor0ex['replace'](/&#?\w+;/g, a6u4y_), tf8dk$)) : ('http://www.w3.org/1999/xhtml' === t8$fpk[''] && qor0ex['match'](/^(?:disabled|checked|selected)$/i) || y4u_w6['warning']('attribute "' + qor0ex + '" missed value!! "' + qor0ex + '" instead!!'), hlv9b['add'](qor0ex, qor0ex, tf8dk$));
                        break;
                    case Sau7n64:
                        throw new Error('attribute value missed!!');
                }
                return k8dm$;
            case '\u0080':
                ne0x = '\x20';
            default:
                if ('\x20' >= ne0x) switch (z5hv9) {
                    case S$8dtmj:
                        hlv9b['setTagName'](a7on['slice'](tf8dk$, k8dm$)), z5hv9 = Svl259;
                        break;
                    case Shvzl:
                        zvlh5 = a7on['slice'](tf8dk$, k8dm$), z5hv9 = Sd$8mj;
                        break;
                    case Sh_g3w:
                        var qor0ex = a7on['slice'](tf8dk$, k8dm$)['replace'](/&#?\w+;/g, a6u4y_);
                        y4u_w6['warning']('attribute "' + qor0ex + '" missed quot(")!!'), hlv9b['add'](zvlh5, qor0ex, tf8dk$);
                    case Sux7an:
                        z5hv9 = Svl259;
                } else switch (z5hv9) {
                    case Sd$8mj:
                        {
                            hlv9b['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === t8$fpk[''] && zvlh5['match'](/^(?:disabled|checked|selected)$/i) || y4u_w6['warning']('attribute "' + zvlh5 + '" missed value!! "' + zvlh5 + '" instead2!!'), hlv9b['add'](zvlh5, zvlh5, tf8dk$), tf8dk$ = k8dm$, z5hv9 = Shvzl;
                        break;
                    case Sux7an:
                        y4u_w6['warning']('attribute space is required"' + zvlh5 + '\x22!!');
                    case Svl259:
                        z5hv9 = Shvzl, tf8dk$ = k8dm$;
                        break;
                    case Sau7n64:
                        z5hv9 = Sh_g3w, tf8dk$ = k8dm$;
                        break;
                    case S_g3bw:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        k8dm$++;
    }
}
function Sy_6w4(oxaun7, fkistp, y6a_4) {
    for (var dt$8j = oxaun7['tagName'], oa7xen = null, gwy = oxaun7['length']; gwy--;) {
        var z91l2j = oxaun7[gwy],
            p8fks = z91l2j['qName'],
            onau7x = z91l2j['value'],
            y46_uw = p8fks['indexOf'](':');
        if (y46_uw > 0x0) var skf8 = z91l2j['prefix'] = p8fks['slice'](0x0, y46_uw),
            kpits = p8fks['slice'](y46_uw + 0x1),
            ti = 'xmlns' === skf8 && kpits;else kpits = p8fks, skf8 = null, ti = 'xmlns' === p8fks && '';
        z91l2j['localName'] = kpits, ti !== !0x1 && (null == oa7xen && (oa7xen = {}, Smz1lj2(y6a_4, y6a_4 = {})), y6a_4[ti] = oa7xen[ti] = onau7x, z91l2j['uri'] = 'http://www.w3.org/2000/xmlns/', fkistp['startPrefixMapping'](ti, onau7x));
    }
    for (var gwy = oxaun7['length']; gwy--;) {
        z91l2j = oxaun7[gwy];
        var skf8 = z91l2j['prefix'];
        skf8 && ('xml' === skf8 && (z91l2j['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== skf8 && (z91l2j['uri'] = y6a_4[skf8 || '']));
    }
    var y46_uw = dt$8j['indexOf'](':');
    y46_uw > 0x0 ? (skf8 = oxaun7['prefix'] = dt$8j['slice'](0x0, y46_uw), kpits = oxaun7['localName'] = dt$8j['slice'](y46_uw + 0x1)) : (skf8 = null, kpits = oxaun7['localName'] = dt$8j);
    var pt8s = oxaun7['uri'] = y6a_4[skf8 || ''];
    if (fkistp['startElement'](pt8s, kpits, dt$8j, oxaun7), !oxaun7['closed']) return oxaun7['currentNSMap'] = y6a_4, oxaun7['localNSMap'] = oa7xen, !0x0;
    if (fkistp['endElement'](pt8s, kpits, dt$8j), oa7xen) {
        for (skf8 in oa7xen) fkistp['endPrefixMapping'](skf8);
    }
}
function S$d8tmk(blvh9, m$t8j, pft$k, hl9bv5, j$d81m) {
    if (/^(?:script|textarea)$/i['test'](pft$k)) {
        var fkd8$t = blvh9['indexOf']('</' + pft$k + '>', m$t8j),
            nqxo7e = blvh9['substring'](m$t8j + 0x1, fkd8$t);
        if (/[&<]/['test'](nqxo7e)) return (/^script$/i['test'](pft$k) ? (j$d81m['characters'](nqxo7e, 0x0, nqxo7e['length']), fkd8$t) : (nqxo7e = nqxo7e['replace'](/&#?\w+;/g, hl9bv5), j$d81m['characters'](nqxo7e, 0x0, nqxo7e['length']), fkd8$t)
        );
    }
    return m$t8j + 0x1;
}
function Sg3vw(fdk$t8, bh3g_, _gyw43, n67u4) {
    var xona7u = n67u4[_gyw43];
    return null == xona7u && (xona7u = fdk$t8['lastIndexOf']('</' + _gyw43 + '>'), bh3g_ > xona7u && (xona7u = fdk$t8['lastIndexOf']('</' + _gyw43)), n67u4[_gyw43] = xona7u), bh3g_ > xona7u;
}
function Smz1lj2(_64wu, gb_yw3) {
    for (var y47au in _64wu) gb_yw3[y47au] = _64wu[y47au];
}
function Slzj1(dmj1$2, _4wg, auy4_6, bl9hv5) {
    var vz2l5 = dmj1$2['charAt'](_4wg + 0x2);
    switch (vz2l5) {
        case '-':
            if ('-' === dmj1$2['charAt'](_4wg + 0x3)) {
                var aoxu7 = dmj1$2['indexOf']('-->', _4wg + 0x4);
                return aoxu7 > _4wg ? (auy4_6['comment'](dmj1$2, _4wg + 0x4, aoxu7 - _4wg - 0x4), aoxu7 + 0x3) : (bl9hv5['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == dmj1$2['substr'](_4wg + 0x3, 0x6)) {
                var aoxu7 = dmj1$2['indexOf'](']]>', _4wg + 0x9);
                return auy4_6['startCDATA'](), auy4_6['characters'](dmj1$2, _4wg + 0x9, aoxu7 - _4wg - 0x9), auy4_6['endCDATA'](), aoxu7 + 0x3;
            }
            var oxqn0 = Sd12z(dmj1$2, _4wg),
                kd$f8t = oxqn0['length'];
            if (kd$f8t > 0x1 && /!doctype/i['test'](oxqn0[0x0][0x0])) {
                var skfipt = oxqn0[0x1][0x0],
                    z2lv5 = kd$f8t > 0x3 && /^public$/i['test'](oxqn0[0x2][0x0]) && oxqn0[0x3][0x0],
                    qeo0rx = kd$f8t > 0x4 && oxqn0[0x4][0x0],
                    nou7a = oxqn0[kd$f8t - 0x1];
                return auy4_6['startDTD'](skfipt, z2lv5 && z2lv5['replace'](/^(['"])(.*?)\1$/, '$2'), qeo0rx && qeo0rx['replace'](/^(['"])(.*?)\1$/, '$2')), auy4_6['endDTD'](), nou7a['index'] + nou7a[0x0]['length'];
            }
    }
    return -0x1;
}
function Sp$8kf(e7oxq, v359, kdtm$8) {
    var ay4_ = e7oxq['indexOf']('?>', v359);
    if (ay4_) {
        var ptk = e7oxq['substring'](v359, ay4_)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (ptk) {
            {
                ptk[0x0]['length'];
            }
            return kdtm$8['processingInstruction'](ptk[0x1], ptk[0x2]), ay4_ + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function Srxoqe() {}
function Srexqo0(vh5zl, l1z25) {
    return vh5zl['__proto__'] = l1z25, vh5zl;
}
function Sd12z(d$ktm8, qx0one) {
    var u67noa,
        lv2z95 = [],
        x0qneo = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (x0qneo['lastIndex'] = qx0one, x0qneo['exec'](d$ktm8); u67noa = x0qneo['exec'](d$ktm8);) if (lv2z95['push'](u67noa), u67noa[0x1]) return lv2z95;
}
var Sitfp = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    Skp8stf = new RegExp('[\\-\\.0-9' + Sitfp['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    Sj9zl = new RegExp('^' + Sitfp['source'] + Skp8stf['source'] + '*(?::' + Sitfp['source'] + Skp8stf['source'] + '*)?$'),
    S$8dtmj = 0x0,
    Shvzl = 0x1,
    Sd$8mj = 0x2,
    Sau7n64 = 0x3,
    Sh_g3w = 0x4,
    Sux7an = 0x5,
    Svl259 = 0x6,
    S_g3bw = 0x7;
Shwbgv3['prototype'] = {
    'parse': function (skpf, lhv59z, l92z51) {
        var fptisk = this['domBuilder'];
        fptisk['startDocument'](), Smz1lj2(lhv59z, lhv59z = {}), St8jm(skpf, lhv59z, l92z51, fptisk, this['errorHandler']), fptisk['endDocument']();
    }
}, Srxoqe['prototype'] = {
    'setTagName': function (m81j) {
        if (!Sj9zl['test'](m81j)) throw new Error('invalid tagName:' + m81j);
        this['tagName'] = m81j;
    },
    'add': function (jz1l9, n7axe, p8fsk) {
        if (!Sj9zl['test'](jz1l9)) throw new Error('invalid attribute:' + jz1l9);
        this[this['length']++] = {
            'qName': jz1l9,
            'value': n7axe,
            'offset': p8fsk
        };
    },
    'length': 0x0,
    'getLocalName': function (vlb9h5) {
        return this[vlb9h5]['localName'];
    },
    'getLocator': function (yb_3g) {
        return this[yb_3g]['locator'];
    },
    'getQName': function (qxeon0) {
        return this[qxeon0]['qName'];
    },
    'getURI': function (l9bv) {
        return this[l9bv]['uri'];
    },
    'getValue': function (wy3g4_) {
        return this[wy3g4_]['value'];
    }
}, Srexqo0({}, Srexqo0['prototype']) instanceof Srexqo0 || (Srexqo0 = function (hg_, df8$) {
    function b3hwgv() {}
    b3hwgv['prototype'] = df8$, b3hwgv = new b3hwgv();
    for (df8$ in hg_) b3hwgv[df8$] = hg_[df8$];
    return b3hwgv;
}), exports['XMLReader'] = Shwbgv3;