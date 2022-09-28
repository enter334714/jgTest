var S = wx.$J;
function j1_q1mdfr() {}
function j1_s6ygok(yk76so, xzh9a$, p4bnue, l0oc, l0cg4u) {
    function m1rf6(ep4bul) {
        if (ep4bul > 0xffff) {
            ep4bul -= 0x10000;
            var q8idx2 = 0xd800 + (ep4bul >> 0xa),
                md8q2 = 0xdc00 + (0x3ff & ep4bul);
            return String['fromCharCode'](q8idx2, md8q2);
        }
        return String['fromCharCode'](ep4bul);
    }
    function kfr(qfr1d) {
        var oygk6s = qfr1d['slice'](0x1, -0x1);
        return oygk6s in p4bnue ? p4bnue[oygk6s] : '#' === oygk6s['charAt'](0x0) ? m1rf6(parseInt(oygk6s['substr'](0x1)['replace']('x', '0x'))) : (l0cg4u['error']('entity not found:' + qfr1d), qfr1d);
    }
    function sr6y7k(sgo0) {
        if (sgo0 > m2d8q1) {
            var rk6y7s = yk76so['substring'](m2d8q1, sgo0)['replace'](/&#?\w+;/g, kfr);
            kys6o && ky6sg(m2d8q1), l0oc['characters'](rk6y7s, 0x0, sgo0 - m2d8q1), m2d8q1 = sgo0;
        }
    }
    function ky6sg(i9ax8, id8q12) {
        for (; i9ax8 >= lucb0 && (id8q12 = d9i82x['exec'](yk76so));) xi28d = id8q12['index'], lucb0 = xi28d + id8q12[0x0]['length'], kys6o['lineNumber']++;
        kys6o['columnNumber'] = i9ax8 - xi28d + 0x1;
    }
    for (var xi28d = 0x0, lucb0 = 0x0, d9i82x = /.*(?:\r\n?|\n)|.*$/g, kys6o = l0oc['locator'], cylg0o = [{ 'currentNSMap': xzh9a$ }], o0glcy = {}, m2d8q1 = 0x0;;) {
        try {
            var mrf7k6 = yk76so['indexOf']('<', m2d8q1);
            if (0x0 > mrf7k6) {
                if (!yk76so['substr'](m2d8q1)['match'](/^\s*$/)) {
                    var bluc0 = l0oc['doc'],
                        m6r7fk = bluc0['createTextNode'](yk76so['substr'](m2d8q1));
                    bluc0['appendChild'](m6r7fk), l0oc['currentElement'] = m6r7fk;
                }
                return;
            }
            switch (mrf7k6 > m2d8q1 && sr6y7k(mrf7k6), yk76so['charAt'](mrf7k6 + 0x1)) {
                case '/':
                    var cglo0 = yk76so['indexOf']('>', mrf7k6 + 0x3),
                        neb45 = yk76so['substring'](mrf7k6 + 0x2, cglo0),
                        y0gcl = cylg0o['pop']();
                    0x0 > cglo0 ? (neb45 = yk76so['substring'](mrf7k6 + 0x2)['replace'](/[\s<].*/, ''), l0cg4u['error']('end tag name: ' + neb45 + ' is not complete:' + y0gcl['tagName']), cglo0 = mrf7k6 + 0x1 + neb45['length']) : neb45['match'](/\s</) && (neb45 = neb45['replace'](/[\s<].*/, ''), l0cg4u['error']('end tag name: ' + neb45 + ' maybe not complete'), cglo0 = mrf7k6 + 0x1 + neb45['length']);
                    var np3e = y0gcl['localNSMap'],
                        rf71 = y0gcl['tagName'] == neb45,
                        bep54n = rf71 || y0gcl['tagName'] && y0gcl['tagName']['toLowerCase']() == neb45['toLowerCase']();
                    if (bep54n) {
                        if (l0oc['endElement'](y0gcl['uri'], y0gcl['localName'], neb45), np3e) {
                            for (var ulce4b in np3e) l0oc['endPrefixMapping'](ulce4b);
                        }
                        rf71 || l0cg4u['fatalError']('end tag name: ' + neb45 + ' is not match the current start tagName:' + y0gcl['tagName']);
                    } else cylg0o['push'](y0gcl);
                    cglo0++;
                    break;
                case '?':
                    kys6o && ky6sg(mrf7k6), cglo0 = j1_kmf76(yk76so, mrf7k6, l0oc);
                    break;
                case '!':
                    kys6o && ky6sg(mrf7k6), cglo0 = j1_q12m(yk76so, mrf7k6, l0oc, l0cg4u);
                    break;
                default:
                    kys6o && ky6sg(mrf7k6);
                    var pj5n3 = new j1_rfd1mq(),
                        lg0c4 = cylg0o[cylg0o['length'] - 0x1]['currentNSMap'],
                        cglo0 = j1_bpe5nj(yk76so, mrf7k6, pj5n3, lg0c4, kfr, l0cg4u),
                        ks6ygo = pj5n3['length'];
                    if (!pj5n3['closed'] && j1_lu0c(yk76so, cglo0, pj5n3['tagName'], o0glcy) && (pj5n3['closed'] = !0x0, p4bnue['nbsp'] || l0cg4u['warning']('unclosed xml attribute')), kys6o && ks6ygo) {
                        for (var o6ksy7 = j1_vj3n(kys6o, {}), kysr6 = 0x0; ks6ygo > kysr6; kysr6++) {
                            var s76f = pj5n3[kysr6];
                            ky6sg(s76f['offset']), s76f['locator'] = j1_vj3n(kys6o, {});
                        }
                        l0oc['locator'] = o6ksy7, j1_e5jpn3(pj5n3, l0oc, lg0c4) && cylg0o['push'](pj5n3), l0oc['locator'] = kys6o;
                    } else j1_e5jpn3(pj5n3, l0oc, lg0c4) && cylg0o['push'](pj5n3);
                    'http://www.w3.org/1999/xhtml' !== pj5n3['uri'] || pj5n3['closed'] ? cglo0++ : cglo0 = j1_a9$h(yk76so, cglo0, pj5n3['tagName'], kfr, l0oc);
            }
        } catch (p4en5b) {
            l0cg4u['error']('element parse error: ' + p4en5b), cglo0 = -0x1;
        }
        cglo0 > m2d8q1 ? m2d8q1 = cglo0 : sr6y7k(Math['max'](mrf7k6, m2d8q1) + 0x1);
    }
}
function j1_vj3n(skog6y, bucl04) {
    return bucl04['lineNumber'] = skog6y['lineNumber'], bucl04['columnNumber'] = skog6y['columnNumber'], bucl04;
}
function j1_bpe5nj(drq1fm, ug0cl, ben45, zx28i9, dx92, d21i) {
    for (var cgoy, ysr6k, wnj3p = ++ug0cl, lbc0 = j1_ai98xz;;) {
        var f12qmd = drq1fm['charAt'](wnj3p);
        switch (f12qmd) {
            case '=':
                if (lbc0 === j1_goscy0) cgoy = drq1fm['slice'](ug0cl, wnj3p), lbc0 = j1_e53pj;else {
                    if (lbc0 !== j1_d1fmrq) throw new Error('attribute equal must after attrName');
                    lbc0 = j1_e53pj;
                }
                break;
            case '\x27':
            case '\x22':
                if (lbc0 === j1_e53pj || lbc0 === j1_goscy0) {
                    if (lbc0 === j1_goscy0 && (d21i['warning']('attribute value must after "="'), cgoy = drq1fm['slice'](ug0cl, wnj3p)), ug0cl = wnj3p + 0x1, wnj3p = drq1fm['indexOf'](f12qmd, ug0cl), !(wnj3p > 0x0)) throw new Error('attribute value no end \'' + f12qmd + '\' match');
                    ysr6k = drq1fm['slice'](ug0cl, wnj3p)['replace'](/&#?\w+;/g, dx92), ben45['add'](cgoy, ysr6k, ug0cl - 0x1), lbc0 = j1_cyso;
                } else {
                    if (lbc0 != j1_pne45b) throw new Error('attribute value must after "="');
                    ysr6k = drq1fm['slice'](ug0cl, wnj3p)['replace'](/&#?\w+;/g, dx92), ben45['add'](cgoy, ysr6k, ug0cl), d21i['warning']('attribute "' + cgoy + '" missed start quot(' + f12qmd + ')!!'), ug0cl = wnj3p + 0x1, lbc0 = j1_cyso;
                }
                break;
            case '/':
                switch (lbc0) {
                    case j1_ai98xz:
                        ben45['setTagName'](drq1fm['slice'](ug0cl, wnj3p));
                    case j1_cyso:
                    case j1_ix82d:
                    case j1_eub4pn:
                        lbc0 = j1_eub4pn, ben45['closed'] = !0x0;
                    case j1_pne45b:
                    case j1_goscy0:
                    case j1_d1fmrq:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return d21i['error']('unexpected end of input'), lbc0 == j1_ai98xz && ben45['setTagName'](drq1fm['slice'](ug0cl, wnj3p)), wnj3p;
            case '>':
                switch (lbc0) {
                    case j1_ai98xz:
                        ben45['setTagName'](drq1fm['slice'](ug0cl, wnj3p));
                    case j1_cyso:
                    case j1_ix82d:
                    case j1_eub4pn:
                        break;
                    case j1_pne45b:
                    case j1_goscy0:
                        ysr6k = drq1fm['slice'](ug0cl, wnj3p), '/' === ysr6k['slice'](-0x1) && (ben45['closed'] = !0x0, ysr6k = ysr6k['slice'](0x0, -0x1));
                    case j1_d1fmrq:
                        lbc0 === j1_d1fmrq && (ysr6k = cgoy), lbc0 == j1_pne45b ? (d21i['warning']('attribute "' + ysr6k + '" missed quot(")!!'), ben45['add'](cgoy, ysr6k['replace'](/&#?\w+;/g, dx92), ug0cl)) : ('http://www.w3.org/1999/xhtml' === zx28i9[''] && ysr6k['match'](/^(?:disabled|checked|selected)$/i) || d21i['warning']('attribute "' + ysr6k + '" missed value!! "' + ysr6k + '" instead!!'), ben45['add'](ysr6k, ysr6k, ug0cl));
                        break;
                    case j1_e53pj:
                        throw new Error('attribute value missed!!');
                }
                return wnj3p;
            case '\u0080':
                f12qmd = '\x20';
            default:
                if ('\x20' >= f12qmd) switch (lbc0) {
                    case j1_ai98xz:
                        ben45['setTagName'](drq1fm['slice'](ug0cl, wnj3p)), lbc0 = j1_ix82d;
                        break;
                    case j1_goscy0:
                        cgoy = drq1fm['slice'](ug0cl, wnj3p), lbc0 = j1_d1fmrq;
                        break;
                    case j1_pne45b:
                        var ysr6k = drq1fm['slice'](ug0cl, wnj3p)['replace'](/&#?\w+;/g, dx92);
                        d21i['warning']('attribute "' + ysr6k + '" missed quot(")!!'), ben45['add'](cgoy, ysr6k, ug0cl);
                    case j1_cyso:
                        lbc0 = j1_ix82d;
                } else switch (lbc0) {
                    case j1_d1fmrq:
                        {
                            ben45['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === zx28i9[''] && cgoy['match'](/^(?:disabled|checked|selected)$/i) || d21i['warning']('attribute "' + cgoy + '" missed value!! "' + cgoy + '" instead2!!'), ben45['add'](cgoy, cgoy, ug0cl), ug0cl = wnj3p, lbc0 = j1_goscy0;
                        break;
                    case j1_cyso:
                        d21i['warning']('attribute space is required"' + cgoy + '\x22!!');
                    case j1_ix82d:
                        lbc0 = j1_goscy0, ug0cl = wnj3p;
                        break;
                    case j1_e53pj:
                        lbc0 = j1_pne45b, ug0cl = wnj3p;
                        break;
                    case j1_eub4pn:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        wnj3p++;
    }
}
function j1_e5jpn3(w3v5n, epnb4u, g4uc0) {
    for (var wjnp3 = w3v5n['tagName'], a89zxi = null, kys67r = w3v5n['length']; kys67r--;) {
        var dqx28 = w3v5n[kys67r],
            yso6g = dqx28['qName'],
            ne4p5b = dqx28['value'],
            krf6m7 = yso6g['indexOf'](':');
        if (krf6m7 > 0x0) var m1fq7 = dqx28['prefix'] = yso6g['slice'](0x0, krf6m7),
            q1m82d = yso6g['slice'](krf6m7 + 0x1),
            dmr = 'xmlns' === m1fq7 && q1m82d;else q1m82d = yso6g, m1fq7 = null, dmr = 'xmlns' === yso6g && '';
        dqx28['localName'] = q1m82d, dmr !== !0x1 && (null == a89zxi && (a89zxi = {}, j1_xiazh9(g4uc0, g4uc0 = {})), g4uc0[dmr] = a89zxi[dmr] = ne4p5b, dqx28['uri'] = 'http://www.w3.org/2000/xmlns/', epnb4u['startPrefixMapping'](dmr, ne4p5b));
    }
    for (var kys67r = w3v5n['length']; kys67r--;) {
        dqx28 = w3v5n[kys67r];
        var m1fq7 = dqx28['prefix'];
        m1fq7 && ('xml' === m1fq7 && (dqx28['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== m1fq7 && (dqx28['uri'] = g4uc0[m1fq7 || '']));
    }
    var krf6m7 = wjnp3['indexOf'](':');
    krf6m7 > 0x0 ? (m1fq7 = w3v5n['prefix'] = wjnp3['slice'](0x0, krf6m7), q1m82d = w3v5n['localName'] = wjnp3['slice'](krf6m7 + 0x1)) : (m1fq7 = null, q1m82d = w3v5n['localName'] = wjnp3);
    var cl40ug = w3v5n['uri'] = g4uc0[m1fq7 || ''];
    if (epnb4u['startElement'](cl40ug, q1m82d, wjnp3, w3v5n), !w3v5n['closed']) return w3v5n['currentNSMap'] = g4uc0, w3v5n['localNSMap'] = a89zxi, !0x0;
    if (epnb4u['endElement'](cl40ug, q1m82d, wjnp3), a89zxi) {
        for (m1fq7 in a89zxi) epnb4u['endPrefixMapping'](m1fq7);
    }
}
function j1_a9$h(dm2f1q, rf7s, zhi9xa, n3jv5w, lgyc0) {
    if (/^(?:script|textarea)$/i['test'](zhi9xa)) {
        var xiz982 = dm2f1q['indexOf']('</' + zhi9xa + '>', rf7s),
            ycog = dm2f1q['substring'](rf7s + 0x1, xiz982);
        if (/[&<]/['test'](ycog)) return (/^script$/i['test'](zhi9xa) ? (lgyc0['characters'](ycog, 0x0, ycog['length']), xiz982) : (ycog = ycog['replace'](/&#?\w+;/g, n3jv5w), lgyc0['characters'](ycog, 0x0, ycog['length']), xiz982)
        );
    }
    return rf7s + 0x1;
}
function j1_lu0c(i9a8, jen53, xi8za9, pjneb) {
    var n45ep = pjneb[xi8za9];
    return null == n45ep && (n45ep = i9a8['lastIndexOf']('</' + xi8za9 + '>'), jen53 > n45ep && (n45ep = i9a8['lastIndexOf']('</' + xi8za9)), pjneb[xi8za9] = n45ep), jen53 > n45ep;
}
function j1_xiazh9(ksr67, benpu4) {
    for (var clu0og in ksr67) benpu4[clu0og] = ksr67[clu0og];
}
function j1_q12m(fm7r16, olgc0y, so6ygk, rmk67) {
    var mqd1f2 = fm7r16['charAt'](olgc0y + 0x2);
    switch (mqd1f2) {
        case '-':
            if ('-' === fm7r16['charAt'](olgc0y + 0x3)) {
                var m7f6r = fm7r16['indexOf']('-->', olgc0y + 0x4);
                return m7f6r > olgc0y ? (so6ygk['comment'](fm7r16, olgc0y + 0x4, m7f6r - olgc0y - 0x4), m7f6r + 0x3) : (rmk67['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == fm7r16['substr'](olgc0y + 0x3, 0x6)) {
                var m7f6r = fm7r16['indexOf'](']]>', olgc0y + 0x9);
                return so6ygk['startCDATA'](), so6ygk['characters'](fm7r16, olgc0y + 0x9, m7f6r - olgc0y - 0x9), so6ygk['endCDATA'](), m7f6r + 0x3;
            }
            var f61r7 = j1_logyc0(fm7r16, olgc0y),
                oyc0sg = f61r7['length'];
            if (oyc0sg > 0x1 && /!doctype/i['test'](f61r7[0x0][0x0])) {
                var neu4 = f61r7[0x1][0x0],
                    nepj5b = oyc0sg > 0x3 && /^public$/i['test'](f61r7[0x2][0x0]) && f61r7[0x3][0x0],
                    ysgok0 = oyc0sg > 0x4 && f61r7[0x4][0x0],
                    q1md28 = f61r7[oyc0sg - 0x1];
                return so6ygk['startDTD'](neu4, nepj5b && nepj5b['replace'](/^(['"])(.*?)\1$/, '$2'), ysgok0 && ysgok0['replace'](/^(['"])(.*?)\1$/, '$2')), so6ygk['endDTD'](), q1md28['index'] + q1md28[0x0]['length'];
            }
    }
    return -0x1;
}
function j1_kmf76(kosg6y, mqfrd, iqdx) {
    var m7rf1q = kosg6y['indexOf']('?>', mqfrd);
    if (m7rf1q) {
        var clo0yg = kosg6y['substring'](mqfrd, m7rf1q)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (clo0yg) {
            {
                clo0yg[0x0]['length'];
            }
            return iqdx['processingInstruction'](clo0yg[0x1], clo0yg[0x2]), m7rf1q + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function j1_rfd1mq() {}
function j1_kf6s(qmf12d, njp35e) {
    return qmf12d['__proto__'] = njp35e, qmf12d;
}
function j1_logyc0(jpnw5, j3v5nw) {
    var iahx9,
        njb = [],
        e4cu = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (e4cu['lastIndex'] = j3v5nw, e4cu['exec'](jpnw5); iahx9 = e4cu['exec'](jpnw5);) if (njb['push'](iahx9), iahx9[0x1]) return njb;
}
var j1_q1id8 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    j1_y0sgok = new RegExp('[\\-\\.0-9' + j1_q1id8['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    j1_sg6o = new RegExp('^' + j1_q1id8['source'] + j1_y0sgok['source'] + '*(?::' + j1_q1id8['source'] + j1_y0sgok['source'] + '*)?$'),
    j1_ai98xz = 0x0,
    j1_goscy0 = 0x1,
    j1_d1fmrq = 0x2,
    j1_e53pj = 0x3,
    j1_pne45b = 0x4,
    j1_cyso = 0x5,
    j1_ix82d = 0x6,
    j1_eub4pn = 0x7;
j1_q1mdfr['prototype'] = {
    'parse': function (ogy0, xi9d, yc0gos) {
        var kys67o = this['domBuilder'];
        kys67o['startDocument'](), j1_xiazh9(xi9d, xi9d = {}), j1_s6ygok(ogy0, xi9d, yc0gos, kys67o, this['errorHandler']), kys67o['endDocument']();
    }
}, j1_rfd1mq['prototype'] = {
    'setTagName': function (fdqmr1) {
        if (!j1_sg6o['test'](fdqmr1)) throw new Error('invalid tagName:' + fdqmr1);
        this['tagName'] = fdqmr1;
    },
    'add': function (xqdi, u0golc, m28dq) {
        if (!j1_sg6o['test'](xqdi)) throw new Error('invalid attribute:' + xqdi);
        this[this['length']++] = {
            'qName': xqdi,
            'value': u0golc,
            'offset': m28dq
        };
    },
    'length': 0x0,
    'getLocalName': function (f6ks7r) {
        return this[f6ks7r]['localName'];
    },
    'getLocator': function (m7k6r) {
        return this[m7k6r]['locator'];
    },
    'getQName': function (r67kfs) {
        return this[r67kfs]['qName'];
    },
    'getURI': function (z29ix8) {
        return this[z29ix8]['uri'];
    },
    'getValue': function (ia9z) {
        return this[ia9z]['value'];
    }
}, j1_kf6s({}, j1_kf6s['prototype']) instanceof j1_kf6s || (j1_kf6s = function (p3n5e, cyol0g) {
    function r7f6ks() {}
    r7f6ks['prototype'] = cyol0g, r7f6ks = new r7f6ks();
    for (cyol0g in p3n5e) r7f6ks[cyol0g] = p3n5e[cyol0g];
    return r7f6ks;
}), exports['XMLReader'] = j1_q1mdfr;