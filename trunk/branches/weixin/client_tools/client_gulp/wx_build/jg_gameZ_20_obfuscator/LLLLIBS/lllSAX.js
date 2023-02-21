var W = wx.$l;
function L9ce7nr() {}
function L9u8fbil(qas54p, ot0h$m, z_v32k, lub8i, necj7) {
    function fudbl(cw7ynk) {
        if (cw7ynk > 0xffff) {
            cw7ynk -= 0x10000;
            var bdul8 = 0xd800 + (cw7ynk >> 0xa),
                f9xau = 0xdc00 + (0x3ff & cw7ynk);
            return String['fromCharCode'](bdul8, f9xau);
        }
        return String['fromCharCode'](cw7ynk);
    }
    function jce7(i81_) {
        var _2zk3v = i81_['slice'](0x1, -0x1);
        return _2zk3v in z_v32k ? z_v32k[_2zk3v] : '#' === _2zk3v['charAt'](0x0) ? fudbl(parseInt(_2zk3v['substr'](0x1)['replace']('x', '0x'))) : (necj7['error']('entity not found:' + i81_), i81_);
    }
    function p5aqs(kwyzv3) {
        if (kwyzv3 > b1i8l6) {
            var opq0h = qas54p['substring'](b1i8l6, kwyzv3)['replace'](/&#?\w+;/g, jce7);
            b8fld && h5psq(b1i8l6), lub8i['characters'](opq0h, 0x0, kwyzv3 - b1i8l6), b1i8l6 = kwyzv3;
        }
    }
    function h5psq(bi168, n7ywec) {
        for (; bi168 >= zky3cw && (n7ywec = ec7nr['exec'](qas54p));) dxa9f = n7ywec['index'], zky3cw = dxa9f + n7ywec[0x0]['length'], b8fld['lineNumber']++;
        b8fld['columnNumber'] = bi168 - dxa9f + 0x1;
    }
    for (var dxa9f = 0x0, zky3cw = 0x0, ec7nr = /.*(?:\r\n?|\n)|.*$/g, b8fld = lub8i['locator'], w7ncye = [{ 'currentNSMap': ot0h$m }], q0moh4 = {}, b1i8l6 = 0x0;;) {
        try {
            var hm$to0 = qas54p['indexOf']('<', b1i8l6);
            if (0x0 > hm$to0) {
                if (!qas54p['substr'](b1i8l6)['match'](/^\s*$/)) {
                    var mtoh0 = lub8i['doc'],
                        dbl8 = mtoh0['createTextNode'](qas54p['substr'](b1i8l6));
                    mtoh0['appendChild'](dbl8), lub8i['currentElement'] = dbl8;
                }
                return;
            }
            switch (hm$to0 > b1i8l6 && p5aqs(hm$to0), qas54p['charAt'](hm$to0 + 0x1)) {
                case '/':
                    var z3wk = qas54p['indexOf']('>', hm$to0 + 0x3),
                        d95ua = qas54p['substring'](hm$to0 + 0x2, z3wk),
                        gm$0o = w7ncye['pop']();
                    0x0 > z3wk ? (d95ua = qas54p['substring'](hm$to0 + 0x2)['replace'](/[\s<].*/, ''), necj7['error']('end tag name: ' + d95ua + ' is not complete:' + gm$0o['tagName']), z3wk = hm$to0 + 0x1 + d95ua['length']) : d95ua['match'](/\s</) && (d95ua = d95ua['replace'](/[\s<].*/, ''), necj7['error']('end tag name: ' + d95ua + ' maybe not complete'), z3wk = hm$to0 + 0x1 + d95ua['length']);
                    var dxul9f = gm$0o['localNSMap'],
                        yc73k = gm$0o['tagName'] == d95ua,
                        ey7cn = yc73k || gm$0o['tagName'] && gm$0o['tagName']['toLowerCase']() == d95ua['toLowerCase']();
                    if (ey7cn) {
                        if (lub8i['endElement'](gm$0o['uri'], gm$0o['localName'], d95ua), dxul9f) {
                            for (var _i816b in dxul9f) lub8i['endPrefixMapping'](_i816b);
                        }
                        yc73k || necj7['fatalError']('end tag name: ' + d95ua + ' is not match the current start tagName:' + gm$0o['tagName']);
                    } else w7ncye['push'](gm$0o);
                    z3wk++;
                    break;
                case '?':
                    b8fld && h5psq(hm$to0), z3wk = L9d59a(qas54p, hm$to0, lub8i);
                    break;
                case '!':
                    b8fld && h5psq(hm$to0), z3wk = L9wnr7ec(qas54p, hm$to0, lub8i, necj7);
                    break;
                default:
                    b8fld && h5psq(hm$to0);
                    var pqs45h = new L9ph4osq(),
                        yzw3c = w7ncye[w7ncye['length'] - 0x1]['currentNSMap'],
                        z3wk = L9a9xs(qas54p, hm$to0, pqs45h, yzw3c, jce7, necj7),
                        rce7n = pqs45h['length'];
                    if (!pqs45h['closed'] && L9wcnye(qas54p, z3wk, pqs45h['tagName'], q0moh4) && (pqs45h['closed'] = !0x0, z_v32k['nbsp'] || necj7['warning']('unclosed xml attribute')), b8fld && rce7n) {
                        for (var b_i816 = L9xp95sa(b8fld, {}), lfdx = 0x0; rce7n > lfdx; lfdx++) {
                            var i6b81 = pqs45h[lfdx];
                            h5psq(i6b81['offset']), i6b81['locator'] = L9xp95sa(b8fld, {});
                        }
                        lub8i['locator'] = b_i816, L9dlxu9(pqs45h, lub8i, yzw3c) && w7ncye['push'](pqs45h), lub8i['locator'] = b8fld;
                    } else L9dlxu9(pqs45h, lub8i, yzw3c) && w7ncye['push'](pqs45h);
                    'http://www.w3.org/1999/xhtml' !== pqs45h['uri'] || pqs45h['closed'] ? z3wk++ : z3wk = L9jnrc(qas54p, z3wk, pqs45h['tagName'], jce7, lub8i);
            }
        } catch (a5sq) {
            necj7['error']('element parse error: ' + a5sq), z3wk = -0x1;
        }
        z3wk > b1i8l6 ? b1i8l6 = z3wk : p5aqs(Math['max'](hm$to0, b1i8l6) + 0x1);
    }
}
function L9xp95sa(kvz23y, k_2v3z) {
    return k_2v3z['lineNumber'] = kvz23y['lineNumber'], k_2v3z['columnNumber'] = kvz23y['columnNumber'], k_2v3z;
}
function L9a9xs(enwy7c, k3yz2, kzy3c, pasx45, u8ilbf, wy7cn) {
    for (var go0$mt, il1b, vz32ky = ++k3yz2, flxu9 = L9ld8bf;;) {
        var dux5 = enwy7c['charAt'](vz32ky);
        switch (dux5) {
            case '=':
                if (flxu9 === L9r7ne) go0$mt = enwy7c['slice'](k3yz2, vz32ky), flxu9 = L9_v12i6;else {
                    if (flxu9 !== L9k32vyz) throw new Error('attribute equal must after attrName');
                    flxu9 = L9_v12i6;
                }
                break;
            case '\x27':
            case '\x22':
                if (flxu9 === L9_v12i6 || flxu9 === L9r7ne) {
                    if (flxu9 === L9r7ne && (wy7cn['warning']('attribute value must after "="'), go0$mt = enwy7c['slice'](k3yz2, vz32ky)), k3yz2 = vz32ky + 0x1, vz32ky = enwy7c['indexOf'](dux5, k3yz2), !(vz32ky > 0x0)) throw new Error('attribute value no end \'' + dux5 + '\' match');
                    il1b = enwy7c['slice'](k3yz2, vz32ky)['replace'](/&#?\w+;/g, u8ilbf), kzy3c['add'](go0$mt, il1b, k3yz2 - 0x1), flxu9 = L9lu9fdx;
                } else {
                    if (flxu9 != L9m$) throw new Error('attribute value must after "="');
                    il1b = enwy7c['slice'](k3yz2, vz32ky)['replace'](/&#?\w+;/g, u8ilbf), kzy3c['add'](go0$mt, il1b, k3yz2), wy7cn['warning']('attribute "' + go0$mt + '" missed start quot(' + dux5 + ')!!'), k3yz2 = vz32ky + 0x1, flxu9 = L9lu9fdx;
                }
                break;
            case '/':
                switch (flxu9) {
                    case L9ld8bf:
                        kzy3c['setTagName'](enwy7c['slice'](k3yz2, vz32ky));
                    case L9lu9fdx:
                    case L9ht0o:
                    case L9v326z_:
                        flxu9 = L9v326z_, kzy3c['closed'] = !0x0;
                    case L9m$:
                    case L9r7ne:
                    case L9k32vyz:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return wy7cn['error']('unexpected end of input'), flxu9 == L9ld8bf && kzy3c['setTagName'](enwy7c['slice'](k3yz2, vz32ky)), vz32ky;
            case '>':
                switch (flxu9) {
                    case L9ld8bf:
                        kzy3c['setTagName'](enwy7c['slice'](k3yz2, vz32ky));
                    case L9lu9fdx:
                    case L9ht0o:
                    case L9v326z_:
                        break;
                    case L9m$:
                    case L9r7ne:
                        il1b = enwy7c['slice'](k3yz2, vz32ky), '/' === il1b['slice'](-0x1) && (kzy3c['closed'] = !0x0, il1b = il1b['slice'](0x0, -0x1));
                    case L9k32vyz:
                        flxu9 === L9k32vyz && (il1b = go0$mt), flxu9 == L9m$ ? (wy7cn['warning']('attribute "' + il1b + '" missed quot(")!!'), kzy3c['add'](go0$mt, il1b['replace'](/&#?\w+;/g, u8ilbf), k3yz2)) : ('http://www.w3.org/1999/xhtml' === pasx45[''] && il1b['match'](/^(?:disabled|checked|selected)$/i) || wy7cn['warning']('attribute "' + il1b + '" missed value!! "' + il1b + '" instead!!'), kzy3c['add'](il1b, il1b, k3yz2));
                        break;
                    case L9_v12i6:
                        throw new Error('attribute value missed!!');
                }
                return vz32ky;
            case '\u0080':
                dux5 = '\x20';
            default:
                if ('\x20' >= dux5) switch (flxu9) {
                    case L9ld8bf:
                        kzy3c['setTagName'](enwy7c['slice'](k3yz2, vz32ky)), flxu9 = L9ht0o;
                        break;
                    case L9r7ne:
                        go0$mt = enwy7c['slice'](k3yz2, vz32ky), flxu9 = L9k32vyz;
                        break;
                    case L9m$:
                        var il1b = enwy7c['slice'](k3yz2, vz32ky)['replace'](/&#?\w+;/g, u8ilbf);
                        wy7cn['warning']('attribute "' + il1b + '" missed quot(")!!'), kzy3c['add'](go0$mt, il1b, k3yz2);
                    case L9lu9fdx:
                        flxu9 = L9ht0o;
                } else switch (flxu9) {
                    case L9k32vyz:
                        {
                            kzy3c['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === pasx45[''] && go0$mt['match'](/^(?:disabled|checked|selected)$/i) || wy7cn['warning']('attribute "' + go0$mt + '" missed value!! "' + go0$mt + '" instead2!!'), kzy3c['add'](go0$mt, go0$mt, k3yz2), k3yz2 = vz32ky, flxu9 = L9r7ne;
                        break;
                    case L9lu9fdx:
                        wy7cn['warning']('attribute space is required"' + go0$mt + '\x22!!');
                    case L9ht0o:
                        flxu9 = L9r7ne, k3yz2 = vz32ky;
                        break;
                    case L9_v12i6:
                        flxu9 = L9m$, k3yz2 = vz32ky;
                        break;
                    case L9v326z_:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        vz32ky++;
    }
}
function L9dlxu9(wc7nre, dlux, i81_26) {
    for (var ycnk7w = wc7nre['tagName'], y7w3kc = null, $0omq = wc7nre['length']; $0omq--;) {
        var $mht0 = wc7nre[$0omq],
            xfu9l = $mht0['qName'],
            v3wzk = $mht0['value'],
            ds5x = xfu9l['indexOf'](':');
        if (ds5x > 0x0) var q5s4p = $mht0['prefix'] = xfu9l['slice'](0x0, ds5x),
            c3wky = xfu9l['slice'](ds5x + 0x1),
            p4o0h = 'xmlns' === q5s4p && c3wky;else c3wky = xfu9l, q5s4p = null, p4o0h = 'xmlns' === xfu9l && '';
        $mht0['localName'] = c3wky, p4o0h !== !0x1 && (null == y7w3kc && (y7w3kc = {}, L9posh(i81_26, i81_26 = {})), i81_26[p4o0h] = y7w3kc[p4o0h] = v3wzk, $mht0['uri'] = 'http://www.w3.org/2000/xmlns/', dlux['startPrefixMapping'](p4o0h, v3wzk));
    }
    for (var $0omq = wc7nre['length']; $0omq--;) {
        $mht0 = wc7nre[$0omq];
        var q5s4p = $mht0['prefix'];
        q5s4p && ('xml' === q5s4p && ($mht0['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== q5s4p && ($mht0['uri'] = i81_26[q5s4p || '']));
    }
    var ds5x = ycnk7w['indexOf'](':');
    ds5x > 0x0 ? (q5s4p = wc7nre['prefix'] = ycnk7w['slice'](0x0, ds5x), c3wky = wc7nre['localName'] = ycnk7w['slice'](ds5x + 0x1)) : (q5s4p = null, c3wky = wc7nre['localName'] = ycnk7w);
    var saq45 = wc7nre['uri'] = i81_26[q5s4p || ''];
    if (dlux['startElement'](saq45, c3wky, ycnk7w, wc7nre), !wc7nre['closed']) return wc7nre['currentNSMap'] = i81_26, wc7nre['localNSMap'] = y7w3kc, !0x0;
    if (dlux['endElement'](saq45, c3wky, ycnk7w), y7w3kc) {
        for (q5s4p in y7w3kc) dlux['endPrefixMapping'](q5s4p);
    }
}
function L9jnrc(k7ncwy, p4qh5s, k3z, qpos4, kcwz3y) {
    if (/^(?:script|textarea)$/i['test'](k3z)) {
        var fuldx9 = k7ncwy['indexOf']('</' + k3z + '>', p4qh5s),
            sx5a9d = k7ncwy['substring'](p4qh5s + 0x1, fuldx9);
        if (/[&<]/['test'](sx5a9d)) return (/^script$/i['test'](k3z) ? (kcwz3y['characters'](sx5a9d, 0x0, sx5a9d['length']), fuldx9) : (sx5a9d = sx5a9d['replace'](/&#?\w+;/g, qpos4), kcwz3y['characters'](sx5a9d, 0x0, sx5a9d['length']), fuldx9)
        );
    }
    return p4qh5s + 0x1;
}
function L9wcnye(_86i1b, _kvz2, _6i821, wyv3z) {
    var z61_v = wyv3z[_6i821];
    return null == z61_v && (z61_v = _86i1b['lastIndexOf']('</' + _6i821 + '>'), _kvz2 > z61_v && (z61_v = _86i1b['lastIndexOf']('</' + _6i821)), wyv3z[_6i821] = z61_v), _kvz2 > z61_v;
}
function L9posh(k3v_z2, p04hoq) {
    for (var ckzwy3 in k3v_z2) p04hoq[ckzwy3] = k3v_z2[ckzwy3];
}
function L9wnr7ec($tmho, _6i82, renwc7, z3kwyv) {
    var hq45s = $tmho['charAt'](_6i82 + 0x2);
    switch (hq45s) {
        case '-':
            if ('-' === $tmho['charAt'](_6i82 + 0x3)) {
                var ufbd9l = $tmho['indexOf']('-->', _6i82 + 0x4);
                return ufbd9l > _6i82 ? (renwc7['comment']($tmho, _6i82 + 0x4, ufbd9l - _6i82 - 0x4), ufbd9l + 0x3) : (z3kwyv['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == $tmho['substr'](_6i82 + 0x3, 0x6)) {
                var ufbd9l = $tmho['indexOf'](']]>', _6i82 + 0x9);
                return renwc7['startCDATA'](), renwc7['characters']($tmho, _6i82 + 0x9, ufbd9l - _6i82 - 0x9), renwc7['endCDATA'](), ufbd9l + 0x3;
            }
            var ax5u9 = L9b61i_($tmho, _6i82),
                cwzy3 = ax5u9['length'];
            if (cwzy3 > 0x1 && /!doctype/i['test'](ax5u9[0x0][0x0])) {
                var vz263_ = ax5u9[0x1][0x0],
                    sx9da5 = cwzy3 > 0x3 && /^public$/i['test'](ax5u9[0x2][0x0]) && ax5u9[0x3][0x0],
                    z3_kv2 = cwzy3 > 0x4 && ax5u9[0x4][0x0],
                    $mtgo = ax5u9[cwzy3 - 0x1];
                return renwc7['startDTD'](vz263_, sx9da5 && sx9da5['replace'](/^(['"])(.*?)\1$/, '$2'), z3_kv2 && z3_kv2['replace'](/^(['"])(.*?)\1$/, '$2')), renwc7['endDTD'](), $mtgo['index'] + $mtgo[0x0]['length'];
            }
    }
    return -0x1;
}
function L9d59a(dxa5s, x9df, ldufb9) {
    var _3zv26 = dxa5s['indexOf']('?>', x9df);
    if (_3zv26) {
        var v2z3_6 = dxa5s['substring'](x9df, _3zv26)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (v2z3_6) {
            {
                v2z3_6[0x0]['length'];
            }
            return ldufb9['processingInstruction'](v2z3_6[0x1], v2z3_6[0x2]), _3zv26 + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function L9ph4osq() {}
function L9axd9uf(ho0p, zvky3) {
    return ho0p['__proto__'] = zvky3, ho0p;
}
function L9b61i_(cjen7r, v_16z) {
    var axdu9f,
        qsp4oh = [],
        qpo = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (qpo['lastIndex'] = v_16z, qpo['exec'](cjen7r); axdu9f = qpo['exec'](cjen7r);) if (qsp4oh['push'](axdu9f), axdu9f[0x1]) return qsp4oh;
}
var L9nwcr = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    L9ecn7rj = new RegExp('[\\-\\.0-9' + L9nwcr['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    L9gmot0 = new RegExp('^' + L9nwcr['source'] + L9ecn7rj['source'] + '*(?::' + L9nwcr['source'] + L9ecn7rj['source'] + '*)?$'),
    L9ld8bf = 0x0,
    L9r7ne = 0x1,
    L9k32vyz = 0x2,
    L9_v12i6 = 0x3,
    L9m$ = 0x4,
    L9lu9fdx = 0x5,
    L9ht0o = 0x6,
    L9v326z_ = 0x7;
L9ce7nr['prototype'] = {
    'parse': function (nk7yc, zv3k_2, qsoh4) {
        var zk3yv = this['domBuilder'];
        zk3yv['startDocument'](), L9posh(zv3k_2, zv3k_2 = {}), L9u8fbil(nk7yc, zv3k_2, qsoh4, zk3yv, this['errorHandler']), zk3yv['endDocument']();
    }
}, L9ph4osq['prototype'] = {
    'setTagName': function (xu9adf) {
        if (!L9gmot0['test'](xu9adf)) throw new Error('invalid tagName:' + xu9adf);
        this['tagName'] = xu9adf;
    },
    'add': function (bl9ufd, luf8, hq$0mo) {
        if (!L9gmot0['test'](bl9ufd)) throw new Error('invalid attribute:' + bl9ufd);
        this[this['length']++] = {
            'qName': bl9ufd,
            'value': luf8,
            'offset': hq$0mo
        };
    },
    'length': 0x0,
    'getLocalName': function (ecrj7) {
        return this[ecrj7]['localName'];
    },
    'getLocator': function (wynce7) {
        return this[wynce7]['locator'];
    },
    'getQName': function (_i812) {
        return this[_i812]['qName'];
    },
    'getURI': function (op0hq4) {
        return this[op0hq4]['uri'];
    },
    'getValue': function (b8_6) {
        return this[b8_6]['value'];
    }
}, L9axd9uf({}, L9axd9uf['prototype']) instanceof L9axd9uf || (L9axd9uf = function (ho4pq, qs4pa) {
    function ufd9bl() {}
    ufd9bl['prototype'] = qs4pa, ufd9bl = new ufd9bl();
    for (qs4pa in ho4pq) ufd9bl[qs4pa] = ho4pq[qs4pa];
    return ufd9bl;
}), exports['XMLReader'] = L9ce7nr;