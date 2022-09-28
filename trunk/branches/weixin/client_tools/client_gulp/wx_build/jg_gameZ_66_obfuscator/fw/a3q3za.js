var f = wx.$B;
function Sozvgij() {}
function Smt9h(x9fht, iyrejo, v6zb7g, xt19h, pqmw8s) {
    function tswmq8(h9txs1) {
        if (h9txs1 > 0xffff) {
            h9txs1 -= 0x10000;
            var f91xth = 0xd800 + (h9txs1 >> 0xa),
                r_l$d = 0xdc00 + (0x3ff & h9txs1);
            return String['fromCharCode'](f91xth, r_l$d);
        }
        return String['fromCharCode'](h9txs1);
    }
    function x51f02(hxt91) {
        var oed = hxt91['slice'](0x1, -0x1);
        return oed in v6zb7g ? v6zb7g[oed] : '#' === oed['charAt'](0x0) ? tswmq8(parseInt(oed['substr'](0x1)['replace']('x', '0x'))) : (pqmw8s['error']('entity not found:' + hxt91), hxt91);
    }
    function rd3le(nuap4k) {
        if (nuap4k > oevg) {
            var bvz67 = x9fht['substring'](oevg, nuap4k)['replace'](/&#?\w+;/g, x51f02);
            jveigo && pank4(oevg), xt19h['characters'](bvz67, 0x0, nuap4k - oevg), oevg = nuap4k;
        }
    }
    function pank4(whmtsq, x6502) {
        for (; whmtsq >= sqh91 && (x6502 = edyjr['exec'](x9fht));) yd = x6502['index'], sqh91 = yd + x6502[0x0]['length'], jveigo['lineNumber']++;
        jveigo['columnNumber'] = whmtsq - yd + 0x1;
    }
    for (var yd = 0x0, sqh91 = 0x0, edyjr = /.*(?:\r\n?|\n)|.*$/g, jveigo = xt19h['locator'], z7vi = [{ 'currentNSMap': iyrejo }], b25f6 = {}, oevg = 0x0;;) {
        try {
            var gzvji = x9fht['indexOf']('<', oevg);
            if (0x0 > gzvji) {
                if (!x9fht['substr'](oevg)['match'](/^\s*$/)) {
                    var ht1x9 = xt19h['doc'],
                        ft19 = ht1x9['createTextNode'](x9fht['substr'](oevg));
                    ht1x9['appendChild'](ft19), xt19h['currentElement'] = ft19;
                }
                return;
            }
            switch (gzvji > oevg && rd3le(gzvji), x9fht['charAt'](gzvji + 0x1)) {
                case '/':
                    var hsqwtm = x9fht['indexOf']('>', gzvji + 0x3),
                        k4nap = x9fht['substring'](gzvji + 0x2, hsqwtm),
                        yre3ld = z7vi['pop']();
                    0x0 > hsqwtm ? (k4nap = x9fht['substring'](gzvji + 0x2)['replace'](/[\s<].*/, ''), pqmw8s['error']('end tag name: ' + k4nap + ' is not complete:' + yre3ld['tagName']), hsqwtm = gzvji + 0x1 + k4nap['length']) : k4nap['match'](/\s</) && (k4nap = k4nap['replace'](/[\s<].*/, ''), pqmw8s['error']('end tag name: ' + k4nap + ' maybe not complete'), hsqwtm = gzvji + 0x1 + k4nap['length']);
                    var a8wmp = yre3ld['localNSMap'],
                        v7ibgz = yre3ld['tagName'] == k4nap,
                        q19th = v7ibgz || yre3ld['tagName'] && yre3ld['tagName']['toLowerCase']() == k4nap['toLowerCase']();
                    if (q19th) {
                        if (xt19h['endElement'](yre3ld['uri'], yre3ld['localName'], k4nap), a8wmp) {
                            for (var zbvg7i in a8wmp) xt19h['endPrefixMapping'](zbvg7i);
                        }
                        v7ibgz || pqmw8s['fatalError']('end tag name: ' + k4nap + ' is not match the current start tagName:' + yre3ld['tagName']);
                    } else z7vi['push'](yre3ld);
                    hsqwtm++;
                    break;
                case '?':
                    jveigo && pank4(gzvji), hsqwtm = Sjriyoe(x9fht, gzvji, xt19h);
                    break;
                case '!':
                    jveigo && pank4(gzvji), hsqwtm = Sieogyj(x9fht, gzvji, xt19h, pqmw8s);
                    break;
                default:
                    jveigo && pank4(gzvji);
                    var $l_3 = new Srd3l_(),
                        hx0f19 = z7vi[z7vi['length'] - 0x1]['currentNSMap'],
                        hsqwtm = Sxf1095(x9fht, gzvji, $l_3, hx0f19, x51f02, pqmw8s),
                        ku4anp = $l_3['length'];
                    if (!$l_3['closed'] && Srd$_3l(x9fht, hsqwtm, $l_3['tagName'], b25f6) && ($l_3['closed'] = !0x0, v6zb7g['nbsp'] || pqmw8s['warning']('unclosed xml attribute')), jveigo && ku4anp) {
                        for (var b26z7v = Ssmqt8(jveigo, {}), f51x9 = 0x0; ku4anp > f51x9; f51x9++) {
                            var h9tqs1 = $l_3[f51x9];
                            pank4(h9tqs1['offset']), h9tqs1['locator'] = Ssmqt8(jveigo, {});
                        }
                        xt19h['locator'] = b26z7v, Sw8tsm($l_3, xt19h, hx0f19) && z7vi['push']($l_3), xt19h['locator'] = jveigo;
                    } else Sw8tsm($l_3, xt19h, hx0f19) && z7vi['push']($l_3);
                    'http://www.w3.org/1999/xhtml' !== $l_3['uri'] || $l_3['closed'] ? hsqwtm++ : hsqwtm = Spw4a(x9fht, hsqwtm, $l_3['tagName'], x51f02, xt19h);
            }
        } catch (tqs9) {
            pqmw8s['error']('element parse error: ' + tqs9), hsqwtm = -0x1;
        }
        hsqwtm > oevg ? oevg = hsqwtm : rd3le(Math['max'](gzvji, oevg) + 0x1);
    }
}
function Ssmqt8(zjo, b60572) {
    return b60572['lineNumber'] = zjo['lineNumber'], b60572['columnNumber'] = zjo['columnNumber'], b60572;
}
function Sxf1095(wnpa4, htqwm, ivgoje, d3orey, or3ye, oerjy) {
    for (var psmw8, thq9m, fb5026 = ++htqwm, erioy = Sryejdo;;) {
        var q4m = wnpa4['charAt'](fb5026);
        switch (q4m) {
            case '=':
                if (erioy === Soijz) psmw8 = wnpa4['slice'](htqwm, fb5026), erioy = Sz25;else {
                    if (erioy !== Sjoegiv) throw new Error('attribute equal must after attrName');
                    erioy = Sz25;
                }
                break;
            case '\x27':
            case '\x22':
                if (erioy === Sz25 || erioy === Soijz) {
                    if (erioy === Soijz && (oerjy['warning']('attribute value must after "="'), psmw8 = wnpa4['slice'](htqwm, fb5026)), htqwm = fb5026 + 0x1, fb5026 = wnpa4['indexOf'](q4m, htqwm), !(fb5026 > 0x0)) throw new Error('attribute value no end \'' + q4m + '\' match');
                    thq9m = wnpa4['slice'](htqwm, fb5026)['replace'](/&#?\w+;/g, or3ye), ivgoje['add'](psmw8, thq9m, htqwm - 0x1), erioy = Serjyi;
                } else {
                    if (erioy != Svgijoe) throw new Error('attribute value must after "="');
                    thq9m = wnpa4['slice'](htqwm, fb5026)['replace'](/&#?\w+;/g, or3ye), ivgoje['add'](psmw8, thq9m, htqwm), oerjy['warning']('attribute "' + psmw8 + '" missed start quot(' + q4m + ')!!'), htqwm = fb5026 + 0x1, erioy = Serjyi;
                }
                break;
            case '/':
                switch (erioy) {
                    case Sryejdo:
                        ivgoje['setTagName'](wnpa4['slice'](htqwm, fb5026));
                    case Serjyi:
                    case Snkua4p:
                    case Slryd3$:
                        erioy = Slryd3$, ivgoje['closed'] = !0x0;
                    case Svgijoe:
                    case Soijz:
                    case Sjoegiv:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return oerjy['error']('unexpected end of input'), erioy == Sryejdo && ivgoje['setTagName'](wnpa4['slice'](htqwm, fb5026)), fb5026;
            case '>':
                switch (erioy) {
                    case Sryejdo:
                        ivgoje['setTagName'](wnpa4['slice'](htqwm, fb5026));
                    case Serjyi:
                    case Snkua4p:
                    case Slryd3$:
                        break;
                    case Svgijoe:
                    case Soijz:
                        thq9m = wnpa4['slice'](htqwm, fb5026), '/' === thq9m['slice'](-0x1) && (ivgoje['closed'] = !0x0, thq9m = thq9m['slice'](0x0, -0x1));
                    case Sjoegiv:
                        erioy === Sjoegiv && (thq9m = psmw8), erioy == Svgijoe ? (oerjy['warning']('attribute "' + thq9m + '" missed quot(")!!'), ivgoje['add'](psmw8, thq9m['replace'](/&#?\w+;/g, or3ye), htqwm)) : ('http://www.w3.org/1999/xhtml' === d3orey[''] && thq9m['match'](/^(?:disabled|checked|selected)$/i) || oerjy['warning']('attribute "' + thq9m + '" missed value!! "' + thq9m + '" instead!!'), ivgoje['add'](thq9m, thq9m, htqwm));
                        break;
                    case Sz25:
                        throw new Error('attribute value missed!!');
                }
                return fb5026;
            case '\u0080':
                q4m = '\x20';
            default:
                if ('\x20' >= q4m) switch (erioy) {
                    case Sryejdo:
                        ivgoje['setTagName'](wnpa4['slice'](htqwm, fb5026)), erioy = Snkua4p;
                        break;
                    case Soijz:
                        psmw8 = wnpa4['slice'](htqwm, fb5026), erioy = Sjoegiv;
                        break;
                    case Svgijoe:
                        var thq9m = wnpa4['slice'](htqwm, fb5026)['replace'](/&#?\w+;/g, or3ye);
                        oerjy['warning']('attribute "' + thq9m + '" missed quot(")!!'), ivgoje['add'](psmw8, thq9m, htqwm);
                    case Serjyi:
                        erioy = Snkua4p;
                } else switch (erioy) {
                    case Sjoegiv:
                        {
                            ivgoje['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === d3orey[''] && psmw8['match'](/^(?:disabled|checked|selected)$/i) || oerjy['warning']('attribute "' + psmw8 + '" missed value!! "' + psmw8 + '" instead2!!'), ivgoje['add'](psmw8, psmw8, htqwm), htqwm = fb5026, erioy = Soijz;
                        break;
                    case Serjyi:
                        oerjy['warning']('attribute space is required"' + psmw8 + '\x22!!');
                    case Snkua4p:
                        erioy = Soijz, htqwm = fb5026;
                        break;
                    case Sz25:
                        erioy = Svgijoe, htqwm = fb5026;
                        break;
                    case Slryd3$:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        fb5026++;
    }
}
function Sw8tsm(ojir, ejdyro, gijove) {
    for (var f1tx = ojir['tagName'], tswmhq = null, ryl3$ = ojir['length']; ryl3$--;) {
        var fx9t1h = ojir[ryl3$],
            led = fx9t1h['qName'],
            unk = fx9t1h['value'],
            r$_l3d = led['indexOf'](':');
        if (r$_l3d > 0x0) var m8qp4 = fx9t1h['prefix'] = led['slice'](0x0, r$_l3d),
            oeijv = led['slice'](r$_l3d + 0x1),
            tsmqw = 'xmlns' === m8qp4 && oeijv;else oeijv = led, m8qp4 = null, tsmqw = 'xmlns' === led && '';
        fx9t1h['localName'] = oeijv, tsmqw !== !0x1 && (null == tswmhq && (tswmhq = {}, Sjzv7(gijove, gijove = {})), gijove[tsmqw] = tswmhq[tsmqw] = unk, fx9t1h['uri'] = 'http://www.w3.org/2000/xmlns/', ejdyro['startPrefixMapping'](tsmqw, unk));
    }
    for (var ryl3$ = ojir['length']; ryl3$--;) {
        fx9t1h = ojir[ryl3$];
        var m8qp4 = fx9t1h['prefix'];
        m8qp4 && ('xml' === m8qp4 && (fx9t1h['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== m8qp4 && (fx9t1h['uri'] = gijove[m8qp4 || '']));
    }
    var r$_l3d = f1tx['indexOf'](':');
    r$_l3d > 0x0 ? (m8qp4 = ojir['prefix'] = f1tx['slice'](0x0, r$_l3d), oeijv = ojir['localName'] = f1tx['slice'](r$_l3d + 0x1)) : (m8qp4 = null, oeijv = ojir['localName'] = f1tx);
    var p8a4wm = ojir['uri'] = gijove[m8qp4 || ''];
    if (ejdyro['startElement'](p8a4wm, oeijv, f1tx, ojir), !ojir['closed']) return ojir['currentNSMap'] = gijove, ojir['localNSMap'] = tswmhq, !0x0;
    if (ejdyro['endElement'](p8a4wm, oeijv, f1tx), tswmhq) {
        for (m8qp4 in tswmhq) ejdyro['endPrefixMapping'](m8qp4);
    }
}
function Spw4a(yijo, z76v2b, ojviz, y3led, yo3ed) {
    if (/^(?:script|textarea)$/i['test'](ojviz)) {
        var o3ryed = yijo['indexOf']('</' + ojviz + '>', z76v2b),
            gvioe = yijo['substring'](z76v2b + 0x1, o3ryed);
        if (/[&<]/['test'](gvioe)) return (/^script$/i['test'](ojviz) ? (yo3ed['characters'](gvioe, 0x0, gvioe['length']), o3ryed) : (gvioe = gvioe['replace'](/&#?\w+;/g, y3led), yo3ed['characters'](gvioe, 0x0, gvioe['length']), o3ryed)
        );
    }
    return z76v2b + 0x1;
}
function Srd$_3l(yedj, red3, ijgeov, swqmp8) {
    var ojveig = swqmp8[ijgeov];
    return null == ojveig && (ojveig = yedj['lastIndexOf']('</' + ijgeov + '>'), red3 > ojveig && (ojveig = yedj['lastIndexOf']('</' + ijgeov)), swqmp8[ijgeov] = ojveig), red3 > ojveig;
}
function Sjzv7(zjvg, ivzog) {
    for (var qtsh91 in zjvg) ivzog[qtsh91] = zjvg[qtsh91];
}
function Sieogyj(sth1x9, h19sxt, naup48, izjgov) {
    var mp8w4a = sth1x9['charAt'](h19sxt + 0x2);
    switch (mp8w4a) {
        case '-':
            if ('-' === sth1x9['charAt'](h19sxt + 0x3)) {
                var b7v6g = sth1x9['indexOf']('-->', h19sxt + 0x4);
                return b7v6g > h19sxt ? (naup48['comment'](sth1x9, h19sxt + 0x4, b7v6g - h19sxt - 0x4), b7v6g + 0x3) : (izjgov['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == sth1x9['substr'](h19sxt + 0x3, 0x6)) {
                var b7v6g = sth1x9['indexOf'](']]>', h19sxt + 0x9);
                return naup48['startCDATA'](), naup48['characters'](sth1x9, h19sxt + 0x9, b7v6g - h19sxt - 0x9), naup48['endCDATA'](), b7v6g + 0x3;
            }
            var h9qstm = Sx1f9h(sth1x9, h19sxt),
                z2b6v7 = h9qstm['length'];
            if (z2b6v7 > 0x1 && /!doctype/i['test'](h9qstm[0x0][0x0])) {
                var joige = h9qstm[0x1][0x0],
                    amw4 = z2b6v7 > 0x3 && /^public$/i['test'](h9qstm[0x2][0x0]) && h9qstm[0x3][0x0],
                    rl_3d = z2b6v7 > 0x4 && h9qstm[0x4][0x0],
                    zvoji = h9qstm[z2b6v7 - 0x1];
                return naup48['startDTD'](joige, amw4 && amw4['replace'](/^(['"])(.*?)\1$/, '$2'), rl_3d && rl_3d['replace'](/^(['"])(.*?)\1$/, '$2')), naup48['endDTD'](), zvoji['index'] + zvoji[0x0]['length'];
            }
    }
    return -0x1;
}
function Sjriyoe(pa4nw8, yiroej, yjrode) {
    var dr$l_3 = pa4nw8['indexOf']('?>', yiroej);
    if (dr$l_3) {
        var v72 = pa4nw8['substring'](yiroej, dr$l_3)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (v72) {
            {
                v72[0x0]['length'];
            }
            return yjrode['processingInstruction'](v72[0x1], v72[0x2]), dr$l_3 + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function Srd3l_() {}
function S$ylrd(awm4, tsq8mw) {
    return awm4['__proto__'] = tsq8mw, awm4;
}
function Sx1f9h(yiojg, mhts9q) {
    var hft1x,
        d$3y = [],
        s9thq = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (s9thq['lastIndex'] = mhts9q, s9thq['exec'](yiojg); hft1x = s9thq['exec'](yiojg);) if (d$3y['push'](hft1x), hft1x[0x1]) return d$3y;
}
var Sqst9h1 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    Serjo = new RegExp('[\\-\\.0-9' + Sqst9h1['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    Sunap84 = new RegExp('^' + Sqst9h1['source'] + Serjo['source'] + '*(?::' + Sqst9h1['source'] + Serjo['source'] + '*)?$'),
    Sryejdo = 0x0,
    Soijz = 0x1,
    Sjoegiv = 0x2,
    Sz25 = 0x3,
    Svgijoe = 0x4,
    Serjyi = 0x5,
    Snkua4p = 0x6,
    Slryd3$ = 0x7;
Sozvgij['prototype'] = {
    'parse': function (tshqwm, na8wp4, a4pwn8) {
        var w8a4pm = this['domBuilder'];
        w8a4pm['startDocument'](), Sjzv7(na8wp4, na8wp4 = {}), Smt9h(tshqwm, na8wp4, a4pwn8, w8a4pm, this['errorHandler']), w8a4pm['endDocument']();
    }
}, Srd3l_['prototype'] = {
    'setTagName': function (lre3y) {
        if (!Sunap84['test'](lre3y)) throw new Error('invalid tagName:' + lre3y);
        this['tagName'] = lre3y;
    },
    'add': function (sqtw8, qwm48p, eriyo) {
        if (!Sunap84['test'](sqtw8)) throw new Error('invalid attribute:' + sqtw8);
        this[this['length']++] = {
            'qName': sqtw8,
            'value': qwm48p,
            'offset': eriyo
        };
    },
    'length': 0x0,
    'getLocalName': function (qtms9) {
        return this[qtms9]['localName'];
    },
    'getLocator': function (h1ft9x) {
        return this[h1ft9x]['locator'];
    },
    'getQName': function (deory) {
        return this[deory]['qName'];
    },
    'getURI': function (pna8u) {
        return this[pna8u]['uri'];
    },
    'getValue': function (rjdo) {
        return this[rjdo]['value'];
    }
}, S$ylrd({}, S$ylrd['prototype']) instanceof S$ylrd || (S$ylrd = function (vzb72, z7ijgv) {
    function ryl3e() {}
    ryl3e['prototype'] = z7ijgv, ryl3e = new ryl3e();
    for (z7ijgv in vzb72) ryl3e[z7ijgv] = vzb72[z7ijgv];
    return ryl3e;
}), exports['XMLReader'] = Sozvgij;