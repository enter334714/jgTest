var W = wx.$l;
function L9psh45q() {}
function L9vywkz3(yecn7w, x5s9ad, ny7ckw, px4a5, vz3w) {
    function to0hm$(aqs4p) {
        if (aqs4p > 0xffff) {
            aqs4p -= 0x10000;
            var psq4h5 = 0xd800 + (aqs4p >> 0xa),
                e7jr = 0xdc00 + (0x3ff & aqs4p);
            return String['fromCharCode'](psq4h5, e7jr);
        }
        return String['fromCharCode'](aqs4p);
    }
    function ad95ux(k3_v2z) {
        var s54apq = k3_v2z['slice'](0x1, -0x1);
        return s54apq in ny7ckw ? ny7ckw[s54apq] : '#' === s54apq['charAt'](0x0) ? to0hm$(parseInt(s54apq['substr'](0x1)['replace']('x', '0x'))) : (vz3w['error']('entity not found:' + k3_v2z), k3_v2z);
    }
    function yzkwc(lb1fi) {
        if (lb1fi > h4pos) {
            var vw3zk = yecn7w['substring'](h4pos, lb1fi)['replace'](/&#?\w+;/g, ad95ux);
            k2yv3z && hqo(h4pos), px4a5['characters'](vw3zk, 0x0, lb1fi - h4pos), h4pos = lb1fi;
        }
    }
    function hqo(yw3ck, xafu) {
        for (; yw3ck >= i16l8b && (xafu = kwycn7['exec'](yecn7w));) _i61v = xafu['index'], i16l8b = _i61v + xafu[0x0]['length'], k2yv3z['lineNumber']++;
        k2yv3z['columnNumber'] = yw3ck - _i61v + 0x1;
    }
    for (var _i61v = 0x0, i16l8b = 0x0, kwycn7 = /.*(?:\r\n?|\n)|.*$/g, k2yv3z = px4a5['locator'], xflud = [{ 'currentNSMap': x5s9ad }], i816_2 = {}, h4pos = 0x0;;) {
        try {
            var xp45 = yecn7w['indexOf']('<', h4pos);
            if (0x0 > xp45) {
                if (!yecn7w['substr'](h4pos)['match'](/^\s*$/)) {
                    var th0om = px4a5['doc'],
                        hqo40m = th0om['createTextNode'](yecn7w['substr'](h4pos));
                    th0om['appendChild'](hqo40m), px4a5['currentElement'] = hqo40m;
                }
                return;
            }
            switch (xp45 > h4pos && yzkwc(xp45), yecn7w['charAt'](xp45 + 0x1)) {
                case '/':
                    var blfi1 = yecn7w['indexOf']('>', xp45 + 0x3),
                        a5udx = yecn7w['substring'](xp45 + 0x2, blfi1),
                        ib618 = xflud['pop']();
                    0x0 > blfi1 ? (a5udx = yecn7w['substring'](xp45 + 0x2)['replace'](/[\s<].*/, ''), vz3w['error']('end tag name: ' + a5udx + ' is not complete:' + ib618['tagName']), blfi1 = xp45 + 0x1 + a5udx['length']) : a5udx['match'](/\s</) && (a5udx = a5udx['replace'](/[\s<].*/, ''), vz3w['error']('end tag name: ' + a5udx + ' maybe not complete'), blfi1 = xp45 + 0x1 + a5udx['length']);
                    var _632 = ib618['localNSMap'],
                        sd5a9 = ib618['tagName'] == a5udx,
                        spxa45 = sd5a9 || ib618['tagName'] && ib618['tagName']['toLowerCase']() == a5udx['toLowerCase']();
                    if (spxa45) {
                        if (px4a5['endElement'](ib618['uri'], ib618['localName'], a5udx), _632) {
                            for (var bi6l8 in _632) px4a5['endPrefixMapping'](bi6l8);
                        }
                        sd5a9 || vz3w['fatalError']('end tag name: ' + a5udx + ' is not match the current start tagName:' + ib618['tagName']);
                    } else xflud['push'](ib618);
                    blfi1++;
                    break;
                case '?':
                    k2yv3z && hqo(xp45), blfi1 = L9iful(yecn7w, xp45, px4a5);
                    break;
                case '!':
                    k2yv3z && hqo(xp45), blfi1 = L9u9bf(yecn7w, xp45, px4a5, vz3w);
                    break;
                default:
                    k2yv3z && hqo(xp45);
                    var axd9u = new L9z_2v6(),
                        dxa5 = xflud[xflud['length'] - 0x1]['currentNSMap'],
                        blfi1 = L9sph5(yecn7w, xp45, axd9u, dxa5, ad95ux, vz3w),
                        hqp4o = axd9u['length'];
                    if (!axd9u['closed'] && L9zv_2k3(yecn7w, blfi1, axd9u['tagName'], i816_2) && (axd9u['closed'] = !0x0, ny7ckw['nbsp'] || vz3w['warning']('unclosed xml attribute')), k2yv3z && hqp4o) {
                        for (var ycnew = L9dflu8b(k2yv3z, {}), n7erj = 0x0; hqp4o > n7erj; n7erj++) {
                            var dub9 = axd9u[n7erj];
                            hqo(dub9['offset']), dub9['locator'] = L9dflu8b(k2yv3z, {});
                        }
                        px4a5['locator'] = ycnew, L9v_126(axd9u, px4a5, dxa5) && xflud['push'](axd9u), px4a5['locator'] = k2yv3z;
                    } else L9v_126(axd9u, px4a5, dxa5) && xflud['push'](axd9u);
                    'http://www.w3.org/1999/xhtml' !== axd9u['uri'] || axd9u['closed'] ? blfi1++ : blfi1 = L9qpoh4(yecn7w, blfi1, axd9u['tagName'], ad95ux, px4a5);
            }
        } catch (bl8ifu) {
            vz3w['error']('element parse error: ' + bl8ifu), blfi1 = -0x1;
        }
        blfi1 > h4pos ? h4pos = blfi1 : yzkwc(Math['max'](xp45, h4pos) + 0x1);
    }
}
function L9dflu8b(new7yc, en7wy) {
    return en7wy['lineNumber'] = new7yc['lineNumber'], en7wy['columnNumber'] = new7yc['columnNumber'], en7wy;
}
function L9sph5(c7rjne, b8lfiu, q$ohm0, ew, z3wkcy, mht$o0) {
    for (var v2z_61, wcr, m4qh0o = ++b8lfiu, u9xad = L9yk2z3v;;) {
        var _z3v2 = c7rjne['charAt'](m4qh0o);
        switch (_z3v2) {
            case '=':
                if (u9xad === L9ps54h) v2z_61 = c7rjne['slice'](b8lfiu, m4qh0o), u9xad = L9i2816;else {
                    if (u9xad !== L9b186il) throw new Error('attribute equal must after attrName');
                    u9xad = L9i2816;
                }
                break;
            case '\x27':
            case '\x22':
                if (u9xad === L9i2816 || u9xad === L9ps54h) {
                    if (u9xad === L9ps54h && (mht$o0['warning']('attribute value must after "="'), v2z_61 = c7rjne['slice'](b8lfiu, m4qh0o)), b8lfiu = m4qh0o + 0x1, m4qh0o = c7rjne['indexOf'](_z3v2, b8lfiu), !(m4qh0o > 0x0)) throw new Error('attribute value no end \'' + _z3v2 + '\' match');
                    wcr = c7rjne['slice'](b8lfiu, m4qh0o)['replace'](/&#?\w+;/g, z3wkcy), q$ohm0['add'](v2z_61, wcr, b8lfiu - 0x1), u9xad = L9ecjr;
                } else {
                    if (u9xad != L9ud9lb) throw new Error('attribute value must after "="');
                    wcr = c7rjne['slice'](b8lfiu, m4qh0o)['replace'](/&#?\w+;/g, z3wkcy), q$ohm0['add'](v2z_61, wcr, b8lfiu), mht$o0['warning']('attribute "' + v2z_61 + '" missed start quot(' + _z3v2 + ')!!'), b8lfiu = m4qh0o + 0x1, u9xad = L9ecjr;
                }
                break;
            case '/':
                switch (u9xad) {
                    case L9yk2z3v:
                        q$ohm0['setTagName'](c7rjne['slice'](b8lfiu, m4qh0o));
                    case L9ecjr:
                    case L9kv32:
                    case L9i_8261:
                        u9xad = L9i_8261, q$ohm0['closed'] = !0x0;
                    case L9ud9lb:
                    case L9ps54h:
                    case L9b186il:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return mht$o0['error']('unexpected end of input'), u9xad == L9yk2z3v && q$ohm0['setTagName'](c7rjne['slice'](b8lfiu, m4qh0o)), m4qh0o;
            case '>':
                switch (u9xad) {
                    case L9yk2z3v:
                        q$ohm0['setTagName'](c7rjne['slice'](b8lfiu, m4qh0o));
                    case L9ecjr:
                    case L9kv32:
                    case L9i_8261:
                        break;
                    case L9ud9lb:
                    case L9ps54h:
                        wcr = c7rjne['slice'](b8lfiu, m4qh0o), '/' === wcr['slice'](-0x1) && (q$ohm0['closed'] = !0x0, wcr = wcr['slice'](0x0, -0x1));
                    case L9b186il:
                        u9xad === L9b186il && (wcr = v2z_61), u9xad == L9ud9lb ? (mht$o0['warning']('attribute "' + wcr + '" missed quot(")!!'), q$ohm0['add'](v2z_61, wcr['replace'](/&#?\w+;/g, z3wkcy), b8lfiu)) : ('http://www.w3.org/1999/xhtml' === ew[''] && wcr['match'](/^(?:disabled|checked|selected)$/i) || mht$o0['warning']('attribute "' + wcr + '" missed value!! "' + wcr + '" instead!!'), q$ohm0['add'](wcr, wcr, b8lfiu));
                        break;
                    case L9i2816:
                        throw new Error('attribute value missed!!');
                }
                return m4qh0o;
            case '\u0080':
                _z3v2 = '\x20';
            default:
                if ('\x20' >= _z3v2) switch (u9xad) {
                    case L9yk2z3v:
                        q$ohm0['setTagName'](c7rjne['slice'](b8lfiu, m4qh0o)), u9xad = L9kv32;
                        break;
                    case L9ps54h:
                        v2z_61 = c7rjne['slice'](b8lfiu, m4qh0o), u9xad = L9b186il;
                        break;
                    case L9ud9lb:
                        var wcr = c7rjne['slice'](b8lfiu, m4qh0o)['replace'](/&#?\w+;/g, z3wkcy);
                        mht$o0['warning']('attribute "' + wcr + '" missed quot(")!!'), q$ohm0['add'](v2z_61, wcr, b8lfiu);
                    case L9ecjr:
                        u9xad = L9kv32;
                } else switch (u9xad) {
                    case L9b186il:
                        {
                            q$ohm0['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === ew[''] && v2z_61['match'](/^(?:disabled|checked|selected)$/i) || mht$o0['warning']('attribute "' + v2z_61 + '" missed value!! "' + v2z_61 + '" instead2!!'), q$ohm0['add'](v2z_61, v2z_61, b8lfiu), b8lfiu = m4qh0o, u9xad = L9ps54h;
                        break;
                    case L9ecjr:
                        mht$o0['warning']('attribute space is required"' + v2z_61 + '\x22!!');
                    case L9kv32:
                        u9xad = L9ps54h, b8lfiu = m4qh0o;
                        break;
                    case L9i2816:
                        u9xad = L9ud9lb, b8lfiu = m4qh0o;
                        break;
                    case L9i_8261:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        m4qh0o++;
    }
}
function L9v_126(y73wkc, ps4ax5, knyc7) {
    for (var v3wkyz = y73wkc['tagName'], q5ps = null, ufdl9 = y73wkc['length']; ufdl9--;) {
        var ua9x5d = y73wkc[ufdl9],
            qs5p4 = ua9x5d['qName'],
            v_z23k = ua9x5d['value'],
            cr7ejn = qs5p4['indexOf'](':');
        if (cr7ejn > 0x0) var $tg = ua9x5d['prefix'] = qs5p4['slice'](0x0, cr7ejn),
            wv3kz = qs5p4['slice'](cr7ejn + 0x1),
            hs5pq = 'xmlns' === $tg && wv3kz;else wv3kz = qs5p4, $tg = null, hs5pq = 'xmlns' === qs5p4 && '';
        ua9x5d['localName'] = wv3kz, hs5pq !== !0x1 && (null == q5ps && (q5ps = {}, L9e7cnyw(knyc7, knyc7 = {})), knyc7[hs5pq] = q5ps[hs5pq] = v_z23k, ua9x5d['uri'] = 'http://www.w3.org/2000/xmlns/', ps4ax5['startPrefixMapping'](hs5pq, v_z23k));
    }
    for (var ufdl9 = y73wkc['length']; ufdl9--;) {
        ua9x5d = y73wkc[ufdl9];
        var $tg = ua9x5d['prefix'];
        $tg && ('xml' === $tg && (ua9x5d['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== $tg && (ua9x5d['uri'] = knyc7[$tg || '']));
    }
    var cr7ejn = v3wkyz['indexOf'](':');
    cr7ejn > 0x0 ? ($tg = y73wkc['prefix'] = v3wkyz['slice'](0x0, cr7ejn), wv3kz = y73wkc['localName'] = v3wkyz['slice'](cr7ejn + 0x1)) : ($tg = null, wv3kz = y73wkc['localName'] = v3wkyz);
    var o0$hmq = y73wkc['uri'] = knyc7[$tg || ''];
    if (ps4ax5['startElement'](o0$hmq, wv3kz, v3wkyz, y73wkc), !y73wkc['closed']) return y73wkc['currentNSMap'] = knyc7, y73wkc['localNSMap'] = q5ps, !0x0;
    if (ps4ax5['endElement'](o0$hmq, wv3kz, v3wkyz), q5ps) {
        for ($tg in q5ps) ps4ax5['endPrefixMapping']($tg);
    }
}
function L9qpoh4(h4poq0, j7ne, qom$0, ck7ny, z3k_2) {
    if (/^(?:script|textarea)$/i['test'](qom$0)) {
        var s4qpa = h4poq0['indexOf']('</' + qom$0 + '>', j7ne),
            phq4s = h4poq0['substring'](j7ne + 0x1, s4qpa);
        if (/[&<]/['test'](phq4s)) return (/^script$/i['test'](qom$0) ? (z3k_2['characters'](phq4s, 0x0, phq4s['length']), s4qpa) : (phq4s = phq4s['replace'](/&#?\w+;/g, ck7ny), z3k_2['characters'](phq4s, 0x0, phq4s['length']), s4qpa)
        );
    }
    return j7ne + 0x1;
}
function L9zv_2k3(vkz2_3, yvzwk3, enr7cj, sp5a) {
    var z3yckw = sp5a[enr7cj];
    return null == z3yckw && (z3yckw = vkz2_3['lastIndexOf']('</' + enr7cj + '>'), yvzwk3 > z3yckw && (z3yckw = vkz2_3['lastIndexOf']('</' + enr7cj)), sp5a[enr7cj] = z3yckw), yvzwk3 > z3yckw;
}
function L9e7cnyw(zvw3, ld9buf) {
    for (var ul8ibf in zvw3) ld9buf[ul8ibf] = zvw3[ul8ibf];
}
function L9u9bf(w3kc, fa9uxd, nwey, ufbi) {
    var q45a = w3kc['charAt'](fa9uxd + 0x2);
    switch (q45a) {
        case '-':
            if ('-' === w3kc['charAt'](fa9uxd + 0x3)) {
                var ldxuf = w3kc['indexOf']('-->', fa9uxd + 0x4);
                return ldxuf > fa9uxd ? (nwey['comment'](w3kc, fa9uxd + 0x4, ldxuf - fa9uxd - 0x4), ldxuf + 0x3) : (ufbi['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == w3kc['substr'](fa9uxd + 0x3, 0x6)) {
                var ldxuf = w3kc['indexOf'](']]>', fa9uxd + 0x9);
                return nwey['startCDATA'](), nwey['characters'](w3kc, fa9uxd + 0x9, ldxuf - fa9uxd - 0x9), nwey['endCDATA'](), ldxuf + 0x3;
            }
            var o4q = L9ewncr(w3kc, fa9uxd),
                zv6_3 = o4q['length'];
            if (zv6_3 > 0x1 && /!doctype/i['test'](o4q[0x0][0x0])) {
                var ul9bd = o4q[0x1][0x0],
                    d5uxa = zv6_3 > 0x3 && /^public$/i['test'](o4q[0x2][0x0]) && o4q[0x3][0x0],
                    xd5ua = zv6_3 > 0x4 && o4q[0x4][0x0],
                    sa5 = o4q[zv6_3 - 0x1];
                return nwey['startDTD'](ul9bd, d5uxa && d5uxa['replace'](/^(['"])(.*?)\1$/, '$2'), xd5ua && xd5ua['replace'](/^(['"])(.*?)\1$/, '$2')), nwey['endDTD'](), sa5['index'] + sa5[0x0]['length'];
            }
    }
    return -0x1;
}
function L9iful(u8lfbi, fu9l, m0t$g) {
    var qps = u8lfbi['indexOf']('?>', fu9l);
    if (qps) {
        var q$ho0m = u8lfbi['substring'](fu9l, qps)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (q$ho0m) {
            {
                q$ho0m[0x0]['length'];
            }
            return m0t$g['processingInstruction'](q$ho0m[0x1], q$ho0m[0x2]), qps + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function L9z_2v6() {}
function L9sq4ap(ax9uf, otm$g0) {
    return ax9uf['__proto__'] = otm$g0, ax9uf;
}
function L9ewncr(_bi1, lb6i18) {
    var nrcw7,
        pqh40 = [],
        _zv6 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (_zv6['lastIndex'] = lb6i18, _zv6['exec'](_bi1); nrcw7 = _zv6['exec'](_bi1);) if (pqh40['push'](nrcw7), nrcw7[0x1]) return pqh40;
}
var L9bdlu = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    L9daxf9 = new RegExp('[\\-\\.0-9' + L9bdlu['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    L9vz6_3 = new RegExp('^' + L9bdlu['source'] + L9daxf9['source'] + '*(?::' + L9bdlu['source'] + L9daxf9['source'] + '*)?$'),
    L9yk2z3v = 0x0,
    L9ps54h = 0x1,
    L9b186il = 0x2,
    L9i2816 = 0x3,
    L9ud9lb = 0x4,
    L9ecjr = 0x5,
    L9kv32 = 0x6,
    L9i_8261 = 0x7;
L9psh45q['prototype'] = {
    'parse': function (tom$0h, kcy3w, ewny) {
        var a5dxs9 = this['domBuilder'];
        a5dxs9['startDocument'](), L9e7cnyw(kcy3w, kcy3w = {}), L9vywkz3(tom$0h, kcy3w, ewny, a5dxs9, this['errorHandler']), a5dxs9['endDocument']();
    }
}, L9z_2v6['prototype'] = {
    'setTagName': function (f8ib1l) {
        if (!L9vz6_3['test'](f8ib1l)) throw new Error('invalid tagName:' + f8ib1l);
        this['tagName'] = f8ib1l;
    },
    'add': function (apsx5, wny7k, zkvyw) {
        if (!L9vz6_3['test'](apsx5)) throw new Error('invalid attribute:' + apsx5);
        this[this['length']++] = {
            'qName': apsx5,
            'value': wny7k,
            'offset': zkvyw
        };
    },
    'length': 0x0,
    'getLocalName': function (nejrc7) {
        return this[nejrc7]['localName'];
    },
    'getLocator': function (iv26) {
        return this[iv26]['locator'];
    },
    'getQName': function (p5a4s) {
        return this[p5a4s]['qName'];
    },
    'getURI': function (lbfdu8) {
        return this[lbfdu8]['uri'];
    },
    'getValue': function (hm$) {
        return this[hm$]['value'];
    }
}, L9sq4ap({}, L9sq4ap['prototype']) instanceof L9sq4ap || (L9sq4ap = function (b_68, dxuf9) {
    function _26i1v() {}
    _26i1v['prototype'] = dxuf9, _26i1v = new _26i1v();
    for (dxuf9 in b_68) _26i1v[dxuf9] = b_68[dxuf9];
    return _26i1v;
}), exports['XMLReader'] = L9psh45q;