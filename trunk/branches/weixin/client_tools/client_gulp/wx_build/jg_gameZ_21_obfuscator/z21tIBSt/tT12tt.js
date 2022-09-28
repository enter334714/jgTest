var v = wx.$d;
function zfub8() {}
function zomtg0$(uaf9d, y3kzc, c7yk3w, m0q$h, k7wycn) {
    function vz3kw($0htmo) {
        if ($0htmo > 0xffff) {
            $0htmo -= 0x10000;
            var oq40h = 0xd800 + ($0htmo >> 0xa),
                k3wvz = 0xdc00 + (0x3ff & $0htmo);
            return String['fromCharCode'](oq40h, k3wvz);
        }
        return String['fromCharCode']($0htmo);
    }
    function oq0h(k3v2y) {
        var _6i8b = k3v2y['slice'](0x1, -0x1);
        return _6i8b in c7yk3w ? c7yk3w[_6i8b] : '#' === _6i8b['charAt'](0x0) ? vz3kw(parseInt(_6i8b['substr'](0x1)['replace']('x', '0x'))) : (k7wycn['error']('entity not found:' + k3v2y), k3v2y);
    }
    function rejcn(_2zv) {
        if (_2zv > czwyk) {
            var zk3wcy = uaf9d['substring'](czwyk, _2zv)['replace'](/&#?\w+;/g, oq0h);
            _32 && x4pa95(czwyk), m0q$h['characters'](zk3wcy, 0x0, _2zv - czwyk), czwyk = _2zv;
        }
    }
    function x4pa95(c7wynk, pd9ax5) {
        for (; c7wynk >= _3vz2 && (pd9ax5 = lbfud9['exec'](uaf9d));) moqh04 = pd9ax5['index'], _3vz2 = moqh04 + pd9ax5[0x0]['length'], _32['lineNumber']++;
        _32['columnNumber'] = c7wynk - moqh04 + 0x1;
    }
    for (var moqh04 = 0x0, _3vz2 = 0x0, lbfud9 = /.*(?:\r\n?|\n)|.*$/g, _32 = m0q$h['locator'], a5px = [{ 'currentNSMap': y3kzc }], bi8f1 = {}, czwyk = 0x0;;) {
        try {
            var encr7w = uaf9d['indexOf']('<', czwyk);
            if (0x0 > encr7w) {
                if (!uaf9d['substr'](czwyk)['match'](/^\s*$/)) {
                    var enwy7 = m0q$h['doc'],
                        z6v_2 = enwy7['createTextNode'](uaf9d['substr'](czwyk));
                    enwy7['appendChild'](z6v_2), m0q$h['currentElement'] = z6v_2;
                }
                return;
            }
            switch (encr7w > czwyk && rejcn(encr7w), uaf9d['charAt'](encr7w + 0x1)) {
                case '/':
                    var pq4o0 = uaf9d['indexOf']('>', encr7w + 0x3),
                        w7yn = uaf9d['substring'](encr7w + 0x2, pq4o0),
                        v2i61 = a5px['pop']();
                    0x0 > pq4o0 ? (w7yn = uaf9d['substring'](encr7w + 0x2)['replace'](/[\s<].*/, ''), k7wycn['error']('end tag name: ' + w7yn + ' is not complete:' + v2i61['tagName']), pq4o0 = encr7w + 0x1 + w7yn['length']) : w7yn['match'](/\s</) && (w7yn = w7yn['replace'](/[\s<].*/, ''), k7wycn['error']('end tag name: ' + w7yn + ' maybe not complete'), pq4o0 = encr7w + 0x1 + w7yn['length']);
                    var nky7w = v2i61['localNSMap'],
                        cz3wky = v2i61['tagName'] == w7yn,
                        zky3vw = cz3wky || v2i61['tagName'] && v2i61['tagName']['toLowerCase']() == w7yn['toLowerCase']();
                    if (zky3vw) {
                        if (m0q$h['endElement'](v2i61['uri'], v2i61['localName'], w7yn), nky7w) {
                            for (var hq0o4m in nky7w) m0q$h['endPrefixMapping'](hq0o4m);
                        }
                        cz3wky || k7wycn['fatalError']('end tag name: ' + w7yn + ' is not match the current start tagName:' + v2i61['tagName']);
                    } else a5px['push'](v2i61);
                    pq4o0++;
                    break;
                case '?':
                    _32 && x4pa95(encr7w), pq4o0 = zom0qh$(uaf9d, encr7w, m0q$h);
                    break;
                case '!':
                    _32 && x4pa95(encr7w), pq4o0 = zl9xfu(uaf9d, encr7w, m0q$h, k7wycn);
                    break;
                default:
                    _32 && x4pa95(encr7w);
                    var otg0$m = new zxul9fd(),
                        q0$mho = a5px[a5px['length'] - 0x1]['currentNSMap'],
                        pq4o0 = z$othm(uaf9d, encr7w, otg0$m, q0$mho, oq0h, k7wycn),
                        _k2vz = otg0$m['length'];
                    if (!otg0$m['closed'] && zknyw7c(uaf9d, pq4o0, otg0$m['tagName'], bi8f1) && (otg0$m['closed'] = !0x0, c7yk3w['nbsp'] || k7wycn['warning']('unclosed xml attribute')), _32 && _k2vz) {
                        for (var z2_61v = z$m0hq(_32, {}), wrcen7 = 0x0; _k2vz > wrcen7; wrcen7++) {
                            var ho$m = otg0$m[wrcen7];
                            x4pa95(ho$m['offset']), ho$m['locator'] = z$m0hq(_32, {});
                        }
                        m0q$h['locator'] = z2_61v, zckz(otg0$m, m0q$h, q0$mho) && a5px['push'](otg0$m), m0q$h['locator'] = _32;
                    } else zckz(otg0$m, m0q$h, q0$mho) && a5px['push'](otg0$m);
                    'http://www.w3.org/1999/xhtml' !== otg0$m['uri'] || otg0$m['closed'] ? pq4o0++ : pq4o0 = zwcyz(uaf9d, pq4o0, otg0$m['tagName'], oq0h, m0q$h);
            }
        } catch (c3wky7) {
            k7wycn['error']('element parse error: ' + c3wky7), pq4o0 = -0x1;
        }
        pq4o0 > czwyk ? czwyk = pq4o0 : rejcn(Math['max'](encr7w, czwyk) + 0x1);
    }
}
function z$m0hq(th0mo, _v263) {
    return _v263['lineNumber'] = th0mo['lineNumber'], _v263['columnNumber'] = th0mo['columnNumber'], _v263;
}
function z$othm(_1b86i, om40qh, q0ohm, b_8i6, bf8lui, ib_61) {
    for (var kywcz3, oh4q, pq4ah = ++om40qh, wk3yzv = zfbd9l;;) {
        var v6 = _1b86i['charAt'](pq4ah);
        switch (v6) {
            case '=':
                if (wk3yzv === zz_1v6) kywcz3 = _1b86i['slice'](om40qh, pq4ah), wk3yzv = z_3z6v2;else {
                    if (wk3yzv !== zlu8fdb) throw new Error('attribute equal must after attrName');
                    wk3yzv = z_3z6v2;
                }
                break;
            case '\x27':
            case '\x22':
                if (wk3yzv === z_3z6v2 || wk3yzv === zz_1v6) {
                    if (wk3yzv === zz_1v6 && (ib_61['warning']('attribute value must after "="'), kywcz3 = _1b86i['slice'](om40qh, pq4ah)), om40qh = pq4ah + 0x1, pq4ah = _1b86i['indexOf'](v6, om40qh), !(pq4ah > 0x0)) throw new Error('attribute value no end \'' + v6 + '\' match');
                    oh4q = _1b86i['slice'](om40qh, pq4ah)['replace'](/&#?\w+;/g, bf8lui), q0ohm['add'](kywcz3, oh4q, om40qh - 0x1), wk3yzv = znw7cre;
                } else {
                    if (wk3yzv != zib8lf1) throw new Error('attribute value must after "="');
                    oh4q = _1b86i['slice'](om40qh, pq4ah)['replace'](/&#?\w+;/g, bf8lui), q0ohm['add'](kywcz3, oh4q, om40qh), ib_61['warning']('attribute "' + kywcz3 + '" missed start quot(' + v6 + ')!!'), om40qh = pq4ah + 0x1, wk3yzv = znw7cre;
                }
                break;
            case '/':
                switch (wk3yzv) {
                    case zfbd9l:
                        q0ohm['setTagName'](_1b86i['slice'](om40qh, pq4ah));
                    case znw7cre:
                    case zv_6z12:
                    case zhqo$0m:
                        wk3yzv = zhqo$0m, q0ohm['closed'] = !0x0;
                    case zib8lf1:
                    case zz_1v6:
                    case zlu8fdb:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return ib_61['error']('unexpected end of input'), wk3yzv == zfbd9l && q0ohm['setTagName'](_1b86i['slice'](om40qh, pq4ah)), pq4ah;
            case '>':
                switch (wk3yzv) {
                    case zfbd9l:
                        q0ohm['setTagName'](_1b86i['slice'](om40qh, pq4ah));
                    case znw7cre:
                    case zv_6z12:
                    case zhqo$0m:
                        break;
                    case zib8lf1:
                    case zz_1v6:
                        oh4q = _1b86i['slice'](om40qh, pq4ah), '/' === oh4q['slice'](-0x1) && (q0ohm['closed'] = !0x0, oh4q = oh4q['slice'](0x0, -0x1));
                    case zlu8fdb:
                        wk3yzv === zlu8fdb && (oh4q = kywcz3), wk3yzv == zib8lf1 ? (ib_61['warning']('attribute "' + oh4q + '" missed quot(")!!'), q0ohm['add'](kywcz3, oh4q['replace'](/&#?\w+;/g, bf8lui), om40qh)) : ('http://www.w3.org/1999/xhtml' === b_8i6[''] && oh4q['match'](/^(?:disabled|checked|selected)$/i) || ib_61['warning']('attribute "' + oh4q + '" missed value!! "' + oh4q + '" instead!!'), q0ohm['add'](oh4q, oh4q, om40qh));
                        break;
                    case z_3z6v2:
                        throw new Error('attribute value missed!!');
                }
                return pq4ah;
            case '\u0080':
                v6 = '\x20';
            default:
                if ('\x20' >= v6) switch (wk3yzv) {
                    case zfbd9l:
                        q0ohm['setTagName'](_1b86i['slice'](om40qh, pq4ah)), wk3yzv = zv_6z12;
                        break;
                    case zz_1v6:
                        kywcz3 = _1b86i['slice'](om40qh, pq4ah), wk3yzv = zlu8fdb;
                        break;
                    case zib8lf1:
                        var oh4q = _1b86i['slice'](om40qh, pq4ah)['replace'](/&#?\w+;/g, bf8lui);
                        ib_61['warning']('attribute "' + oh4q + '" missed quot(")!!'), q0ohm['add'](kywcz3, oh4q, om40qh);
                    case znw7cre:
                        wk3yzv = zv_6z12;
                } else switch (wk3yzv) {
                    case zlu8fdb:
                        {
                            q0ohm['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === b_8i6[''] && kywcz3['match'](/^(?:disabled|checked|selected)$/i) || ib_61['warning']('attribute "' + kywcz3 + '" missed value!! "' + kywcz3 + '" instead2!!'), q0ohm['add'](kywcz3, kywcz3, om40qh), om40qh = pq4ah, wk3yzv = zz_1v6;
                        break;
                    case znw7cre:
                        ib_61['warning']('attribute space is required"' + kywcz3 + '\x22!!');
                    case zv_6z12:
                        wk3yzv = zz_1v6, om40qh = pq4ah;
                        break;
                    case z_3z6v2:
                        wk3yzv = zib8lf1, om40qh = pq4ah;
                        break;
                    case zhqo$0m:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        pq4ah++;
    }
}
function zckz(lib8f1, ad9px, jn7erc) {
    for (var k3y2z = lib8f1['tagName'], a5du9x = null, b_61i8 = lib8f1['length']; b_61i8--;) {
        var axqp = lib8f1[b_61i8],
            ht$mo = axqp['qName'],
            a5dxp = axqp['value'],
            bil8f = ht$mo['indexOf'](':');
        if (bil8f > 0x0) var c7rjn = axqp['prefix'] = ht$mo['slice'](0x0, bil8f),
            nrwec7 = ht$mo['slice'](bil8f + 0x1),
            ad9x = 'xmlns' === c7rjn && nrwec7;else nrwec7 = ht$mo, c7rjn = null, ad9x = 'xmlns' === ht$mo && '';
        axqp['localName'] = nrwec7, ad9x !== !0x1 && (null == a5du9x && (a5du9x = {}, zom0q4(jn7erc, jn7erc = {})), jn7erc[ad9x] = a5du9x[ad9x] = a5dxp, axqp['uri'] = 'http://www.w3.org/2000/xmlns/', ad9px['startPrefixMapping'](ad9x, a5dxp));
    }
    for (var b_61i8 = lib8f1['length']; b_61i8--;) {
        axqp = lib8f1[b_61i8];
        var c7rjn = axqp['prefix'];
        c7rjn && ('xml' === c7rjn && (axqp['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== c7rjn && (axqp['uri'] = jn7erc[c7rjn || '']));
    }
    var bil8f = k3y2z['indexOf'](':');
    bil8f > 0x0 ? (c7rjn = lib8f1['prefix'] = k3y2z['slice'](0x0, bil8f), nrwec7 = lib8f1['localName'] = k3y2z['slice'](bil8f + 0x1)) : (c7rjn = null, nrwec7 = lib8f1['localName'] = k3y2z);
    var m0qo$h = lib8f1['uri'] = jn7erc[c7rjn || ''];
    if (ad9px['startElement'](m0qo$h, nrwec7, k3y2z, lib8f1), !lib8f1['closed']) return lib8f1['currentNSMap'] = jn7erc, lib8f1['localNSMap'] = a5du9x, !0x0;
    if (ad9px['endElement'](m0qo$h, nrwec7, k3y2z), a5du9x) {
        for (c7rjn in a5du9x) ad9px['endPrefixMapping'](c7rjn);
    }
}
function zwcyz(yn7wck, if81b, zv_12, ohqm04, jn7ce) {
    if (/^(?:script|textarea)$/i['test'](zv_12)) {
        var hm0o4q = yn7wck['indexOf']('</' + zv_12 + '>', if81b),
            tm0ho$ = yn7wck['substring'](if81b + 0x1, hm0o4q);
        if (/[&<]/['test'](tm0ho$)) return (/^script$/i['test'](zv_12) ? (jn7ce['characters'](tm0ho$, 0x0, tm0ho$['length']), hm0o4q) : (tm0ho$ = tm0ho$['replace'](/&#?\w+;/g, ohqm04), jn7ce['characters'](tm0ho$, 0x0, tm0ho$['length']), hm0o4q)
        );
    }
    return if81b + 0x1;
}
function zknyw7c(i6b8l1, $go0tm, u9fxl, ldbu8f) {
    var u9fxad = ldbu8f[u9fxl];
    return null == u9fxad && (u9fxad = i6b8l1['lastIndexOf']('</' + u9fxl + '>'), $go0tm > u9fxad && (u9fxad = i6b8l1['lastIndexOf']('</' + u9fxl)), ldbu8f[u9fxl] = u9fxad), $go0tm > u9fxad;
}
function zom0q4(mtog, wr7ce) {
    for (var _b1i68 in mtog) wr7ce[_b1i68] = mtog[_b1i68];
}
function zl9xfu(bulfd9, vwkyz3, nrwc, o04qp) {
    var v_k3z2 = bulfd9['charAt'](vwkyz3 + 0x2);
    switch (v_k3z2) {
        case '-':
            if ('-' === bulfd9['charAt'](vwkyz3 + 0x3)) {
                var nrcj = bulfd9['indexOf']('-->', vwkyz3 + 0x4);
                return nrcj > vwkyz3 ? (nrwc['comment'](bulfd9, vwkyz3 + 0x4, nrcj - vwkyz3 - 0x4), nrcj + 0x3) : (o04qp['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == bulfd9['substr'](vwkyz3 + 0x3, 0x6)) {
                var nrcj = bulfd9['indexOf'](']]>', vwkyz3 + 0x9);
                return nrwc['startCDATA'](), nrwc['characters'](bulfd9, vwkyz3 + 0x9, nrcj - vwkyz3 - 0x9), nrwc['endCDATA'](), nrcj + 0x3;
            }
            var f1ibl8 = zb68i_1(bulfd9, vwkyz3),
                f8uilb = f1ibl8['length'];
            if (f8uilb > 0x1 && /!doctype/i['test'](f1ibl8[0x0][0x0])) {
                var ykwzc = f1ibl8[0x1][0x0],
                    mot0$h = f8uilb > 0x3 && /^public$/i['test'](f1ibl8[0x2][0x0]) && f1ibl8[0x3][0x0],
                    y7wkn = f8uilb > 0x4 && f1ibl8[0x4][0x0],
                    kywc = f1ibl8[f8uilb - 0x1];
                return nrwc['startDTD'](ykwzc, mot0$h && mot0$h['replace'](/^(['"])(.*?)\1$/, '$2'), y7wkn && y7wkn['replace'](/^(['"])(.*?)\1$/, '$2')), nrwc['endDTD'](), kywc['index'] + kywc[0x0]['length'];
            }
    }
    return -0x1;
}
function zom0qh$(d5uxa, ubd9fl, kcyzw3) {
    var lui8bf = d5uxa['indexOf']('?>', ubd9fl);
    if (lui8bf) {
        var t$0gom = d5uxa['substring'](ubd9fl, lui8bf)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (t$0gom) {
            {
                t$0gom[0x0]['length'];
            }
            return kcyzw3['processingInstruction'](t$0gom[0x1], t$0gom[0x2]), lui8bf + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function zxul9fd() {}
function zp04qo($o0mth, bi618_) {
    return $o0mth['__proto__'] = bi618_, $o0mth;
}
function zb68i_1(wney7, b8d) {
    var _3vz62,
        w3yzc = [],
        wckyz = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (wckyz['lastIndex'] = b8d, wckyz['exec'](wney7); _3vz62 = wckyz['exec'](wney7);) if (w3yzc['push'](_3vz62), _3vz62[0x1]) return w3yzc;
}
var zf9ldux = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    zm$to = new RegExp('[\\-\\.0-9' + zf9ldux['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    zluf8d = new RegExp('^' + zf9ldux['source'] + zm$to['source'] + '*(?::' + zf9ldux['source'] + zm$to['source'] + '*)?$'),
    zfbd9l = 0x0,
    zz_1v6 = 0x1,
    zlu8fdb = 0x2,
    z_3z6v2 = 0x3,
    zib8lf1 = 0x4,
    znw7cre = 0x5,
    zv_6z12 = 0x6,
    zhqo$0m = 0x7;
zfub8['prototype'] = {
    'parse': function (da9u5x, rcwn, v_16i2) {
        var mh4oq = this['domBuilder'];
        mh4oq['startDocument'](), zom0q4(rcwn, rcwn = {}), zomtg0$(da9u5x, rcwn, v_16i2, mh4oq, this['errorHandler']), mh4oq['endDocument']();
    }
}, zxul9fd['prototype'] = {
    'setTagName': function (o4qh0m) {
        if (!zluf8d['test'](o4qh0m)) throw new Error('invalid tagName:' + o4qh0m);
        this['tagName'] = o4qh0m;
    },
    'add': function (h4qop0, h0qo4m, xpda5) {
        if (!zluf8d['test'](h4qop0)) throw new Error('invalid attribute:' + h4qop0);
        this[this['length']++] = {
            'qName': h4qop0,
            'value': h0qo4m,
            'offset': xpda5
        };
    },
    'length': 0x0,
    'getLocalName': function (nckyw7) {
        return this[nckyw7]['localName'];
    },
    'getLocator': function (b1_i8) {
        return this[b1_i8]['locator'];
    },
    'getQName': function (m0ohq$) {
        return this[m0ohq$]['qName'];
    },
    'getURI': function (ub9fld) {
        return this[ub9fld]['uri'];
    },
    'getValue': function (v2_3zk) {
        return this[v2_3zk]['value'];
    }
}, zp04qo({}, zp04qo['prototype']) instanceof zp04qo || (zp04qo = function (lbf9u, t0m) {
    function flxud9() {}
    flxud9['prototype'] = t0m, flxud9 = new flxud9();
    for (t0m in lbf9u) flxud9[t0m] = lbf9u[t0m];
    return flxud9;
}), exports['XMLReader'] = zfub8;