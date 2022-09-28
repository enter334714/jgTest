var g = wx.$Q;
function q_lgapf() {}
function q_n6o9_e(vibga, rzt$, bi7gav, alfp, e_no6) {
    function kdyrc(whu8) {
        if (whu8 > 0xffff) {
            whu8 -= 0x10000;
            var n6_9oe = 0xd800 + (whu8 >> 0xa),
                _z9 = 0xdc00 + (0x3ff & whu8);
            return String['fromCharCode'](n6_9oe, _z9);
        }
        return String['fromCharCode'](whu8);
    }
    function plia(n4o69m) {
        var r$tdz = n4o69m['slice'](0x1, -0x1);
        return r$tdz in bi7gav ? bi7gav[r$tdz] : '#' === r$tdz['charAt'](0x0) ? kdyrc(parseInt(r$tdz['substr'](0x1)['replace']('x', '0x'))) : (e_no6['error']('entity not found:' + n4o69m), n4o69m);
    }
    function blpgai(yk3c) {
        if (yk3c > sw8jh1) {
            var aiv7gb = vibga['substring'](sw8jh1, yk3c)['replace'](/&#?\w+;/g, plia);
            td5 && zkdrct(sw8jh1), alfp['characters'](aiv7gb, 0x0, yk3c - sw8jh1), sw8jh1 = yk3c;
        }
    }
    function zkdrct(iplgb, m4h8) {
        for (; iplgb >= t5yxk3 && (m4h8 = no1m['exec'](vibga));) g0fal = m4h8['index'], t5yxk3 = g0fal + m4h8[0x0]['length'], td5['lineNumber']++;
        td5['columnNumber'] = iplgb - g0fal + 0x1;
    }
    for (var g0fal = 0x0, t5yxk3 = 0x0, no1m = /.*(?:\r\n?|\n)|.*$/g, td5 = alfp['locator'], yxt53k = [{ 'currentNSMap': rzt$ }], x0f3 = {}, sw8jh1 = 0x0;;) {
        try {
            var x53y2 = vibga['indexOf']('<', sw8jh1);
            if (0x0 > x53y2) {
                if (!vibga['substr'](sw8jh1)['match'](/^\s*$/)) {
                    var xt3 = alfp['doc'],
                        lbagfp = xt3['createTextNode'](vibga['substr'](sw8jh1));
                    xt3['appendChild'](lbagfp), alfp['currentElement'] = lbagfp;
                }
                return;
            }
            switch (x53y2 > sw8jh1 && blpgai(x53y2), vibga['charAt'](x53y2 + 0x1)) {
                case '/':
                    var i7gba = vibga['indexOf']('>', x53y2 + 0x3),
                        y52xk = vibga['substring'](x53y2 + 0x2, i7gba),
                        k3c5y = yxt53k['pop']();
                    0x0 > i7gba ? (y52xk = vibga['substring'](x53y2 + 0x2)['replace'](/[\s<].*/, ''), e_no6['error']('end tag name: ' + y52xk + ' is not complete:' + k3c5y['tagName']), i7gba = x53y2 + 0x1 + y52xk['length']) : y52xk['match'](/\s</) && (y52xk = y52xk['replace'](/[\s<].*/, ''), e_no6['error']('end tag name: ' + y52xk + ' maybe not complete'), i7gba = x53y2 + 0x1 + y52xk['length']);
                    var moe6n9 = k3c5y['localNSMap'],
                        en9$ = k3c5y['tagName'] == y52xk,
                        krtcyd = en9$ || k3c5y['tagName'] && k3c5y['tagName']['toLowerCase']() == y52xk['toLowerCase']();
                    if (krtcyd) {
                        if (alfp['endElement'](k3c5y['uri'], k3c5y['localName'], y52xk), moe6n9) {
                            for (var xlfp02 in moe6n9) alfp['endPrefixMapping'](xlfp02);
                        }
                        en9$ || e_no6['fatalError']('end tag name: ' + y52xk + ' is not match the current start tagName:' + k3c5y['tagName']);
                    } else yxt53k['push'](k3c5y);
                    i7gba++;
                    break;
                case '?':
                    td5 && zkdrct(x53y2), i7gba = q_fp0al(vibga, x53y2, alfp);
                    break;
                case '!':
                    td5 && zkdrct(x53y2), i7gba = q_j41hm8(vibga, x53y2, alfp, e_no6);
                    break;
                default:
                    td5 && zkdrct(x53y2);
                    var glbpfa = new q_h14s8(),
                        h8uswj = yxt53k[yxt53k['length'] - 0x1]['currentNSMap'],
                        i7gba = q_ibvga7(vibga, x53y2, glbpfa, h8uswj, plia, e_no6),
                        g7vbi = glbpfa['length'];
                    if (!glbpfa['closed'] && q_k3t5yx(vibga, i7gba, glbpfa['tagName'], x0f3) && (glbpfa['closed'] = !0x0, bi7gav['nbsp'] || e_no6['warning']('unclosed xml attribute')), td5 && g7vbi) {
                        for (var ycdrt = q_fpaglb(td5, {}), e9$n_o = 0x0; g7vbi > e9$n_o; e9$n_o++) {
                            var x5yk2 = glbpfa[e9$n_o];
                            zkdrct(x5yk2['offset']), x5yk2['locator'] = q_fpaglb(td5, {});
                        }
                        alfp['locator'] = ycdrt, q_$ezr_(glbpfa, alfp, h8uswj) && yxt53k['push'](glbpfa), alfp['locator'] = td5;
                    } else q_$ezr_(glbpfa, alfp, h8uswj) && yxt53k['push'](glbpfa);
                    'http://www.w3.org/1999/xhtml' !== glbpfa['uri'] || glbpfa['closed'] ? i7gba++ : i7gba = q_ct5k3y(vibga, i7gba, glbpfa['tagName'], plia, alfp);
            }
        } catch (om9n64) {
            e_no6['error']('element parse error: ' + om9n64), i7gba = -0x1;
        }
        i7gba > sw8jh1 ? sw8jh1 = i7gba : blpgai(Math['max'](x53y2, sw8jh1) + 0x1);
    }
}
function q_fpaglb(z$e_o9, oz_) {
    return oz_['lineNumber'] = z$e_o9['lineNumber'], oz_['columnNumber'] = z$e_o9['columnNumber'], oz_;
}
function q_ibvga7(f0x2lp, paibl, m69on, tc$zdr, _n9oe$, y23kx5) {
    for (var wjhs, whsj81, lx2f0 = ++paibl, fblpag = q_rdt$cz;;) {
        var ablvgi = f0x2lp['charAt'](lx2f0);
        switch (ablvgi) {
            case '=':
                if (fblpag === q_$r_ze) wjhs = f0x2lp['slice'](paibl, lx2f0), fblpag = q_ktyd5c;else {
                    if (fblpag !== q_rez_$9) throw new Error('attribute equal must after attrName');
                    fblpag = q_ktyd5c;
                }
                break;
            case '\x27':
            case '\x22':
                if (fblpag === q_ktyd5c || fblpag === q_$r_ze) {
                    if (fblpag === q_$r_ze && (y23kx5['warning']('attribute value must after "="'), wjhs = f0x2lp['slice'](paibl, lx2f0)), paibl = lx2f0 + 0x1, lx2f0 = f0x2lp['indexOf'](ablvgi, paibl), !(lx2f0 > 0x0)) throw new Error('attribute value no end \'' + ablvgi + '\' match');
                    whsj81 = f0x2lp['slice'](paibl, lx2f0)['replace'](/&#?\w+;/g, _n9oe$), m69on['add'](wjhs, whsj81, paibl - 0x1), fblpag = q_wh1sj;
                } else {
                    if (fblpag != q_o1nm46) throw new Error('attribute value must after "="');
                    whsj81 = f0x2lp['slice'](paibl, lx2f0)['replace'](/&#?\w+;/g, _n9oe$), m69on['add'](wjhs, whsj81, paibl), y23kx5['warning']('attribute "' + wjhs + '" missed start quot(' + ablvgi + ')!!'), paibl = lx2f0 + 0x1, fblpag = q_wh1sj;
                }
                break;
            case '/':
                switch (fblpag) {
                    case q_rdt$cz:
                        m69on['setTagName'](f0x2lp['slice'](paibl, lx2f0));
                    case q_wh1sj:
                    case q_s1h8w:
                    case q_j8h1:
                        fblpag = q_j8h1, m69on['closed'] = !0x0;
                    case q_o1nm46:
                    case q_$r_ze:
                    case q_rez_$9:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return y23kx5['error']('unexpected end of input'), fblpag == q_rdt$cz && m69on['setTagName'](f0x2lp['slice'](paibl, lx2f0)), lx2f0;
            case '>':
                switch (fblpag) {
                    case q_rdt$cz:
                        m69on['setTagName'](f0x2lp['slice'](paibl, lx2f0));
                    case q_wh1sj:
                    case q_s1h8w:
                    case q_j8h1:
                        break;
                    case q_o1nm46:
                    case q_$r_ze:
                        whsj81 = f0x2lp['slice'](paibl, lx2f0), '/' === whsj81['slice'](-0x1) && (m69on['closed'] = !0x0, whsj81 = whsj81['slice'](0x0, -0x1));
                    case q_rez_$9:
                        fblpag === q_rez_$9 && (whsj81 = wjhs), fblpag == q_o1nm46 ? (y23kx5['warning']('attribute "' + whsj81 + '" missed quot(")!!'), m69on['add'](wjhs, whsj81['replace'](/&#?\w+;/g, _n9oe$), paibl)) : ('http://www.w3.org/1999/xhtml' === tc$zdr[''] && whsj81['match'](/^(?:disabled|checked|selected)$/i) || y23kx5['warning']('attribute "' + whsj81 + '" missed value!! "' + whsj81 + '" instead!!'), m69on['add'](whsj81, whsj81, paibl));
                        break;
                    case q_ktyd5c:
                        throw new Error('attribute value missed!!');
                }
                return lx2f0;
            case '\u0080':
                ablvgi = '\x20';
            default:
                if ('\x20' >= ablvgi) switch (fblpag) {
                    case q_rdt$cz:
                        m69on['setTagName'](f0x2lp['slice'](paibl, lx2f0)), fblpag = q_s1h8w;
                        break;
                    case q_$r_ze:
                        wjhs = f0x2lp['slice'](paibl, lx2f0), fblpag = q_rez_$9;
                        break;
                    case q_o1nm46:
                        var whsj81 = f0x2lp['slice'](paibl, lx2f0)['replace'](/&#?\w+;/g, _n9oe$);
                        y23kx5['warning']('attribute "' + whsj81 + '" missed quot(")!!'), m69on['add'](wjhs, whsj81, paibl);
                    case q_wh1sj:
                        fblpag = q_s1h8w;
                } else switch (fblpag) {
                    case q_rez_$9:
                        {
                            m69on['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === tc$zdr[''] && wjhs['match'](/^(?:disabled|checked|selected)$/i) || y23kx5['warning']('attribute "' + wjhs + '" missed value!! "' + wjhs + '" instead2!!'), m69on['add'](wjhs, wjhs, paibl), paibl = lx2f0, fblpag = q_$r_ze;
                        break;
                    case q_wh1sj:
                        y23kx5['warning']('attribute space is required"' + wjhs + '\x22!!');
                    case q_s1h8w:
                        fblpag = q_$r_ze, paibl = lx2f0;
                        break;
                    case q_ktyd5c:
                        fblpag = q_o1nm46, paibl = lx2f0;
                        break;
                    case q_j8h1:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        lx2f0++;
    }
}
function q_$ezr_(_on$, plfab, k3tcy5) {
    for (var tkcrdz = _on$['tagName'], oen = null, o946m = _on$['length']; o946m--;) {
        var ckrtz = _on$[o946m],
            shw18 = ckrtz['qName'],
            n64m1 = ckrtz['value'],
            t$zd = shw18['indexOf'](':');
        if (t$zd > 0x0) var _o$ze9 = ckrtz['prefix'] = shw18['slice'](0x0, t$zd),
            kydt5c = shw18['slice'](t$zd + 0x1),
            albpgi = 'xmlns' === _o$ze9 && kydt5c;else kydt5c = shw18, _o$ze9 = null, albpgi = 'xmlns' === shw18 && '';
        ckrtz['localName'] = kydt5c, albpgi !== !0x1 && (null == oen && (oen = {}, q_h14m8j(k3tcy5, k3tcy5 = {})), k3tcy5[albpgi] = oen[albpgi] = n64m1, ckrtz['uri'] = 'http://www.w3.org/2000/xmlns/', plfab['startPrefixMapping'](albpgi, n64m1));
    }
    for (var o946m = _on$['length']; o946m--;) {
        ckrtz = _on$[o946m];
        var _o$ze9 = ckrtz['prefix'];
        _o$ze9 && ('xml' === _o$ze9 && (ckrtz['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== _o$ze9 && (ckrtz['uri'] = k3tcy5[_o$ze9 || '']));
    }
    var t$zd = tkcrdz['indexOf'](':');
    t$zd > 0x0 ? (_o$ze9 = _on$['prefix'] = tkcrdz['slice'](0x0, t$zd), kydt5c = _on$['localName'] = tkcrdz['slice'](t$zd + 0x1)) : (_o$ze9 = null, kydt5c = _on$['localName'] = tkcrdz);
    var j8h = _on$['uri'] = k3tcy5[_o$ze9 || ''];
    if (plfab['startElement'](j8h, kydt5c, tkcrdz, _on$), !_on$['closed']) return _on$['currentNSMap'] = k3tcy5, _on$['localNSMap'] = oen, !0x0;
    if (plfab['endElement'](j8h, kydt5c, tkcrdz), oen) {
        for (_o$ze9 in oen) plfab['endPrefixMapping'](_o$ze9);
    }
}
function q_ct5k3y(lgap0f, en69o, kc35t, dz$_, w8js) {
    if (/^(?:script|textarea)$/i['test'](kc35t)) {
        var z_c$d = lgap0f['indexOf']('</' + kc35t + '>', en69o),
            $rd_c = lgap0f['substring'](en69o + 0x1, z_c$d);
        if (/[&<]/['test']($rd_c)) return (/^script$/i['test'](kc35t) ? (w8js['characters']($rd_c, 0x0, $rd_c['length']), z_c$d) : ($rd_c = $rd_c['replace'](/&#?\w+;/g, dz$_), w8js['characters']($rd_c, 0x0, $rd_c['length']), z_c$d)
        );
    }
    return en69o + 0x1;
}
function q_k3t5yx(jwuh, kx35y2, o1m4, no6m9e) {
    var _cdr$ = no6m9e[o1m4];
    return null == _cdr$ && (_cdr$ = jwuh['lastIndexOf']('</' + o1m4 + '>'), kx35y2 > _cdr$ && (_cdr$ = jwuh['lastIndexOf']('</' + o1m4)), no6m9e[o1m4] = _cdr$), kx35y2 > _cdr$;
}
function q_h14m8j(rtcdkz, vilb) {
    for (var trcd$ in rtcdkz) vilb[trcd$] = rtcdkz[trcd$];
}
function q_j41hm8(rct$z, yk5xt, lvaigb, zo$_9) {
    var o9e_n = rct$z['charAt'](yk5xt + 0x2);
    switch (o9e_n) {
        case '-':
            if ('-' === rct$z['charAt'](yk5xt + 0x3)) {
                var h618m = rct$z['indexOf']('-->', yk5xt + 0x4);
                return h618m > yk5xt ? (lvaigb['comment'](rct$z, yk5xt + 0x4, h618m - yk5xt - 0x4), h618m + 0x3) : (zo$_9['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == rct$z['substr'](yk5xt + 0x3, 0x6)) {
                var h618m = rct$z['indexOf'](']]>', yk5xt + 0x9);
                return lvaigb['startCDATA'](), lvaigb['characters'](rct$z, yk5xt + 0x9, h618m - yk5xt - 0x9), lvaigb['endCDATA'](), h618m + 0x3;
            }
            var uwh8j = q__dr$c(rct$z, yk5xt),
                us8h = uwh8j['length'];
            if (us8h > 0x1 && /!doctype/i['test'](uwh8j[0x0][0x0])) {
                var kr = uwh8j[0x1][0x0],
                    s4h8j1 = us8h > 0x3 && /^public$/i['test'](uwh8j[0x2][0x0]) && uwh8j[0x3][0x0],
                    vib = us8h > 0x4 && uwh8j[0x4][0x0],
                    j18s = uwh8j[us8h - 0x1];
                return lvaigb['startDTD'](kr, s4h8j1 && s4h8j1['replace'](/^(['"])(.*?)\1$/, '$2'), vib && vib['replace'](/^(['"])(.*?)\1$/, '$2')), lvaigb['endDTD'](), j18s['index'] + j18s[0x0]['length'];
            }
    }
    return -0x1;
}
function q_fp0al(o_$en, m4j18, y5tckd) {
    var _$9zo = o_$en['indexOf']('?>', m4j18);
    if (_$9zo) {
        var _rczd$ = o_$en['substring'](m4j18, _$9zo)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (_rczd$) {
            {
                _rczd$[0x0]['length'];
            }
            return y5tckd['processingInstruction'](_rczd$[0x1], _rczd$[0x2]), _$9zo + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function q_h14s8() {}
function q_cdrkt(zed_r, a7vgb) {
    return zed_r['__proto__'] = a7vgb, zed_r;
}
function q__dr$c(p2f30x, agv7) {
    var trzckd,
        _ez$ = [],
        dr_cz = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (dr_cz['lastIndex'] = agv7, dr_cz['exec'](p2f30x); trzckd = dr_cz['exec'](p2f30x);) if (_ez$['push'](trzckd), trzckd[0x1]) return _ez$;
}
var q_oz_9$ = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    q_dt$rcz = new RegExp('[\\-\\.0-9' + q_oz_9$['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    q_dtcz$ = new RegExp('^' + q_oz_9$['source'] + q_dt$rcz['source'] + '*(?::' + q_oz_9$['source'] + q_dt$rcz['source'] + '*)?$'),
    q_rdt$cz = 0x0,
    q_$r_ze = 0x1,
    q_rez_$9 = 0x2,
    q_ktyd5c = 0x3,
    q_o1nm46 = 0x4,
    q_wh1sj = 0x5,
    q_s1h8w = 0x6,
    q_j8h1 = 0x7;
q_lgapf['prototype'] = {
    'parse': function (zrc$, jm841h, zdre$_) {
        var zer_9 = this['domBuilder'];
        zer_9['startDocument'](), q_h14m8j(jm841h, jm841h = {}), q_n6o9_e(zrc$, jm841h, zdre$_, zer_9, this['errorHandler']), zer_9['endDocument']();
    }
}, q_h14s8['prototype'] = {
    'setTagName': function (j4mh81) {
        if (!q_dtcz$['test'](j4mh81)) throw new Error('invalid tagName:' + j4mh81);
        this['tagName'] = j4mh81;
    },
    'add': function (e9o$z, xtyk3, f203px) {
        if (!q_dtcz$['test'](e9o$z)) throw new Error('invalid attribute:' + e9o$z);
        this[this['length']++] = {
            'qName': e9o$z,
            'value': xtyk3,
            'offset': f203px
        };
    },
    'length': 0x0,
    'getLocalName': function (u8qw) {
        return this[u8qw]['localName'];
    },
    'getLocator': function (plg) {
        return this[plg]['locator'];
    },
    'getQName': function (pfgb) {
        return this[pfgb]['qName'];
    },
    'getURI': function (y03x5) {
        return this[y03x5]['uri'];
    },
    'getValue': function (lgiv) {
        return this[lgiv]['value'];
    }
}, q_cdrkt({}, q_cdrkt['prototype']) instanceof q_cdrkt || (q_cdrkt = function (noe$_, x3f5) {
    function cd$r() {}
    cd$r['prototype'] = x3f5, cd$r = new cd$r();
    for (x3f5 in noe$_) cd$r[x3f5] = noe$_[x3f5];
    return cd$r;
}), exports['XMLReader'] = q_lgapf;