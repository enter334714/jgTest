var W = wx.$l;
function L9bdav5z() {}
function L9uj1vdb(s27wk, i4n0m, kxce9_, rin08, fs$7w2) {
    function gpty3(n80i) {
        if (n80i > 0xffff) {
            n80i -= 0x10000;
            var qy$sl3 = 0xd800 + (n80i >> 0xa),
                ni0m = 0xdc00 + (0x3ff & n80i);
            return String['fromCharCode'](qy$sl3, ni0m);
        }
        return String['fromCharCode'](n80i);
    }
    function zan4b(vjdub) {
        var w2ck = vjdub['slice'](0x1, -0x1);
        return w2ck in kxce9_ ? kxce9_[w2ck] : '#' === w2ck['charAt'](0x0) ? gpty3(parseInt(w2ck['substr'](0x1)['replace']('x', '0x'))) : (fs$7w2['error']('entity not found:' + vjdub), vjdub);
    }
    function yg6p3(avbd5) {
        if (avbd5 > z4dab) {
            var a5n40 = s27wk['substring'](z4dab, avbd5)['replace'](/&#?\w+;/g, zan4b);
            plt36 && qpyt3(z4dab), rin08['characters'](a5n40, 0x0, avbd5 - z4dab), z4dab = avbd5;
        }
    }
    function qpyt3(_9exkc, mr8) {
        for (; _9exkc >= _kc9e && (mr8 = rog8['exec'](s27wk));) davbz = mr8['index'], _kc9e = davbz + mr8[0x0]['length'], plt36['lineNumber']++;
        plt36['columnNumber'] = _9exkc - davbz + 0x1;
    }
    for (var davbz = 0x0, _kc9e = 0x0, rog8 = /.*(?:\r\n?|\n)|.*$/g, plt36 = rin08['locator'], tg68p = [{ 'currentNSMap': i4n0m }], ke7cw_ = {}, z4dab = 0x0;;) {
        try {
            var io86 = s27wk['indexOf']('<', z4dab);
            if (0x0 > io86) {
                if (!s27wk['substr'](z4dab)['match'](/^\s*$/)) {
                    var qypl3 = rin08['doc'],
                        ab = qypl3['createTextNode'](s27wk['substr'](z4dab));
                    qypl3['appendChild'](ab), rin08['currentElement'] = ab;
                }
                return;
            }
            switch (io86 > z4dab && yg6p3(io86), s27wk['charAt'](io86 + 0x1)) {
                case '/':
                    var q32$sl = s27wk['indexOf']('>', io86 + 0x3),
                        r86go = s27wk['substring'](io86 + 0x2, q32$sl),
                        y6t3 = tg68p['pop']();
                    0x0 > q32$sl ? (r86go = s27wk['substring'](io86 + 0x2)['replace'](/[\s<].*/, ''), fs$7w2['error']('end tag name: ' + r86go + ' is not complete:' + y6t3['tagName']), q32$sl = io86 + 0x1 + r86go['length']) : r86go['match'](/\s</) && (r86go = r86go['replace'](/[\s<].*/, ''), fs$7w2['error']('end tag name: ' + r86go + ' maybe not complete'), q32$sl = io86 + 0x1 + r86go['length']);
                    var rgm8io = y6t3['localNSMap'],
                        u1vhdj = y6t3['tagName'] == r86go,
                        eck_9x = u1vhdj || y6t3['tagName'] && y6t3['tagName']['toLowerCase']() == r86go['toLowerCase']();
                    if (eck_9x) {
                        if (rin08['endElement'](y6t3['uri'], y6t3['localName'], r86go), rgm8io) {
                            for (var $py3 in rgm8io) rin08['endPrefixMapping']($py3);
                        }
                        u1vhdj || fs$7w2['fatalError']('end tag name: ' + r86go + ' is not match the current start tagName:' + y6t3['tagName']);
                    } else tg68p['push'](y6t3);
                    q32$sl++;
                    break;
                case '?':
                    plt36 && qpyt3(io86), q32$sl = L9wsfk(s27wk, io86, rin08);
                    break;
                case '!':
                    plt36 && qpyt3(io86), q32$sl = L9c7kw(s27wk, io86, rin08, fs$7w2);
                    break;
                default:
                    plt36 && qpyt3(io86);
                    var ls$y = new L9cf7kw(),
                        e_kxc9 = tg68p[tg68p['length'] - 0x1]['currentNSMap'],
                        q32$sl = L9g6tyo(s27wk, io86, ls$y, e_kxc9, zan4b, fs$7w2),
                        qfs$72 = ls$y['length'];
                    if (!ls$y['closed'] && L9ecw_(s27wk, q32$sl, ls$y['tagName'], ke7cw_) && (ls$y['closed'] = !0x0, kxce9_['nbsp'] || fs$7w2['warning']('unclosed xml attribute')), plt36 && qfs$72) {
                        for (var nim80r = L9yqtlp3(plt36, {}), yotgp6 = 0x0; qfs$72 > yotgp6; yotgp6++) {
                            var cek9 = ls$y[yotgp6];
                            qpyt3(cek9['offset']), cek9['locator'] = L9yqtlp3(plt36, {});
                        }
                        rin08['locator'] = nim80r, L9mgor(ls$y, rin08, e_kxc9) && tg68p['push'](ls$y), rin08['locator'] = plt36;
                    } else L9mgor(ls$y, rin08, e_kxc9) && tg68p['push'](ls$y);
                    'http://www.w3.org/1999/xhtml' !== ls$y['uri'] || ls$y['closed'] ? q32$sl++ : q32$sl = L9vu1djh(s27wk, q32$sl, ls$y['tagName'], zan4b, rin08);
            }
        } catch (w$s2f) {
            fs$7w2['error']('element parse error: ' + w$s2f), q32$sl = -0x1;
        }
        q32$sl > z4dab ? z4dab = q32$sl : yg6p3(Math['max'](io86, z4dab) + 0x1);
    }
}
function L9yqtlp3(y3$qls, a04nm5) {
    return a04nm5['lineNumber'] = y3$qls['lineNumber'], a04nm5['columnNumber'] = y3$qls['columnNumber'], a04nm5;
}
function L9g6tyo(to68, _ec9x, pl3tyq, vz1djb, gp6ot8, hvjud) {
    for (var h1u, pqlt3y, $lsf2q = ++_ec9x, $2sfw7 = L9sf72;;) {
        var ri8gm = to68['charAt']($lsf2q);
        switch (ri8gm) {
            case '=':
                if ($2sfw7 === L9dz1b) h1u = to68['slice'](_ec9x, $lsf2q), $2sfw7 = L9dbv1za;else {
                    if ($2sfw7 !== L9zvd) throw new Error('attribute equal must after attrName');
                    $2sfw7 = L9dbv1za;
                }
                break;
            case '\x27':
            case '\x22':
                if ($2sfw7 === L9dbv1za || $2sfw7 === L9dz1b) {
                    if ($2sfw7 === L9dz1b && (hvjud['warning']('attribute value must after "="'), h1u = to68['slice'](_ec9x, $lsf2q)), _ec9x = $lsf2q + 0x1, $lsf2q = to68['indexOf'](ri8gm, _ec9x), !($lsf2q > 0x0)) throw new Error('attribute value no end \'' + ri8gm + '\' match');
                    pqlt3y = to68['slice'](_ec9x, $lsf2q)['replace'](/&#?\w+;/g, gp6ot8), pl3tyq['add'](h1u, pqlt3y, _ec9x - 0x1), $2sfw7 = L9fc2k7w;
                } else {
                    if ($2sfw7 != L9jzd1bv) throw new Error('attribute value must after "="');
                    pqlt3y = to68['slice'](_ec9x, $lsf2q)['replace'](/&#?\w+;/g, gp6ot8), pl3tyq['add'](h1u, pqlt3y, _ec9x), hvjud['warning']('attribute "' + h1u + '" missed start quot(' + ri8gm + ')!!'), _ec9x = $lsf2q + 0x1, $2sfw7 = L9fc2k7w;
                }
                break;
            case '/':
                switch ($2sfw7) {
                    case L9sf72:
                        pl3tyq['setTagName'](to68['slice'](_ec9x, $lsf2q));
                    case L9fc2k7w:
                    case L9qp3t:
                    case L9ecxk_:
                        $2sfw7 = L9ecxk_, pl3tyq['closed'] = !0x0;
                    case L9jzd1bv:
                    case L9dz1b:
                    case L9zvd:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return hvjud['error']('unexpected end of input'), $2sfw7 == L9sf72 && pl3tyq['setTagName'](to68['slice'](_ec9x, $lsf2q)), $lsf2q;
            case '>':
                switch ($2sfw7) {
                    case L9sf72:
                        pl3tyq['setTagName'](to68['slice'](_ec9x, $lsf2q));
                    case L9fc2k7w:
                    case L9qp3t:
                    case L9ecxk_:
                        break;
                    case L9jzd1bv:
                    case L9dz1b:
                        pqlt3y = to68['slice'](_ec9x, $lsf2q), '/' === pqlt3y['slice'](-0x1) && (pl3tyq['closed'] = !0x0, pqlt3y = pqlt3y['slice'](0x0, -0x1));
                    case L9zvd:
                        $2sfw7 === L9zvd && (pqlt3y = h1u), $2sfw7 == L9jzd1bv ? (hvjud['warning']('attribute "' + pqlt3y + '" missed quot(")!!'), pl3tyq['add'](h1u, pqlt3y['replace'](/&#?\w+;/g, gp6ot8), _ec9x)) : ('http://www.w3.org/1999/xhtml' === vz1djb[''] && pqlt3y['match'](/^(?:disabled|checked|selected)$/i) || hvjud['warning']('attribute "' + pqlt3y + '" missed value!! "' + pqlt3y + '" instead!!'), pl3tyq['add'](pqlt3y, pqlt3y, _ec9x));
                        break;
                    case L9dbv1za:
                        throw new Error('attribute value missed!!');
                }
                return $lsf2q;
            case '\u0080':
                ri8gm = '\x20';
            default:
                if ('\x20' >= ri8gm) switch ($2sfw7) {
                    case L9sf72:
                        pl3tyq['setTagName'](to68['slice'](_ec9x, $lsf2q)), $2sfw7 = L9qp3t;
                        break;
                    case L9dz1b:
                        h1u = to68['slice'](_ec9x, $lsf2q), $2sfw7 = L9zvd;
                        break;
                    case L9jzd1bv:
                        var pqlt3y = to68['slice'](_ec9x, $lsf2q)['replace'](/&#?\w+;/g, gp6ot8);
                        hvjud['warning']('attribute "' + pqlt3y + '" missed quot(")!!'), pl3tyq['add'](h1u, pqlt3y, _ec9x);
                    case L9fc2k7w:
                        $2sfw7 = L9qp3t;
                } else switch ($2sfw7) {
                    case L9zvd:
                        {
                            pl3tyq['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === vz1djb[''] && h1u['match'](/^(?:disabled|checked|selected)$/i) || hvjud['warning']('attribute "' + h1u + '" missed value!! "' + h1u + '" instead2!!'), pl3tyq['add'](h1u, h1u, _ec9x), _ec9x = $lsf2q, $2sfw7 = L9dz1b;
                        break;
                    case L9fc2k7w:
                        hvjud['warning']('attribute space is required"' + h1u + '\x22!!');
                    case L9qp3t:
                        $2sfw7 = L9dz1b, _ec9x = $lsf2q;
                        break;
                    case L9dbv1za:
                        $2sfw7 = L9jzd1bv, _ec9x = $lsf2q;
                        break;
                    case L9ecxk_:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        $lsf2q++;
    }
}
function L9mgor(kc9_e, $f7qs, g6oi) {
    for (var vzab = kc9_e['tagName'], l3s2q$ = null, cfk27 = kc9_e['length']; cfk27--;) {
        var a1zdvb = kc9_e[cfk27],
            gyt3 = a1zdvb['qName'],
            w7f2sk = a1zdvb['value'],
            dzvb1a = gyt3['indexOf'](':');
        if (dzvb1a > 0x0) var ex9c = a1zdvb['prefix'] = gyt3['slice'](0x0, dzvb1a),
            s7$w = gyt3['slice'](dzvb1a + 0x1),
            a5n4z = 'xmlns' === ex9c && s7$w;else s7$w = gyt3, ex9c = null, a5n4z = 'xmlns' === gyt3 && '';
        a1zdvb['localName'] = s7$w, a5n4z !== !0x1 && (null == l3s2q$ && (l3s2q$ = {}, L9q$l3(g6oi, g6oi = {})), g6oi[a5n4z] = l3s2q$[a5n4z] = w7f2sk, a1zdvb['uri'] = 'http://www.w3.org/2000/xmlns/', $f7qs['startPrefixMapping'](a5n4z, w7f2sk));
    }
    for (var cfk27 = kc9_e['length']; cfk27--;) {
        a1zdvb = kc9_e[cfk27];
        var ex9c = a1zdvb['prefix'];
        ex9c && ('xml' === ex9c && (a1zdvb['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== ex9c && (a1zdvb['uri'] = g6oi[ex9c || '']));
    }
    var dzvb1a = vzab['indexOf'](':');
    dzvb1a > 0x0 ? (ex9c = kc9_e['prefix'] = vzab['slice'](0x0, dzvb1a), s7$w = kc9_e['localName'] = vzab['slice'](dzvb1a + 0x1)) : (ex9c = null, s7$w = kc9_e['localName'] = vzab);
    var v1 = kc9_e['uri'] = g6oi[ex9c || ''];
    if ($f7qs['startElement'](v1, s7$w, vzab, kc9_e), !kc9_e['closed']) return kc9_e['currentNSMap'] = g6oi, kc9_e['localNSMap'] = l3s2q$, !0x0;
    if ($f7qs['endElement'](v1, s7$w, vzab), l3s2q$) {
        for (ex9c in l3s2q$) $f7qs['endPrefixMapping'](ex9c);
    }
}
function L9vu1djh(i0n8, lp6yt3, n0z5a, s7$w2, ri68g) {
    if (/^(?:script|textarea)$/i['test'](n0z5a)) {
        var mn80ir = i0n8['indexOf']('</' + n0z5a + '>', lp6yt3),
            og8r6t = i0n8['substring'](lp6yt3 + 0x1, mn80ir);
        if (/[&<]/['test'](og8r6t)) return (/^script$/i['test'](n0z5a) ? (ri68g['characters'](og8r6t, 0x0, og8r6t['length']), mn80ir) : (og8r6t = og8r6t['replace'](/&#?\w+;/g, s7$w2), ri68g['characters'](og8r6t, 0x0, og8r6t['length']), mn80ir)
        );
    }
    return lp6yt3 + 0x1;
}
function L9ecw_(ri0n, m4n50i, n0za, u1dbv) {
    var za45n = u1dbv[n0za];
    return null == za45n && (za45n = ri0n['lastIndexOf']('</' + n0za + '>'), m4n50i > za45n && (za45n = ri0n['lastIndexOf']('</' + n0za)), u1dbv[n0za] = za45n), m4n50i > za45n;
}
function L9q$l3(vb5daz, p3tyql) {
    for (var ck_wex in vb5daz) p3tyql[ck_wex] = vb5daz[ck_wex];
}
function L9c7kw(q$3py, fsk7, a4n50z, wexk_) {
    var mrin0 = q$3py['charAt'](fsk7 + 0x2);
    switch (mrin0) {
        case '-':
            if ('-' === q$3py['charAt'](fsk7 + 0x3)) {
                var zna540 = q$3py['indexOf']('-->', fsk7 + 0x4);
                return zna540 > fsk7 ? (a4n50z['comment'](q$3py, fsk7 + 0x4, zna540 - fsk7 - 0x4), zna540 + 0x3) : (wexk_['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == q$3py['substr'](fsk7 + 0x3, 0x6)) {
                var zna540 = q$3py['indexOf'](']]>', fsk7 + 0x9);
                return a4n50z['startCDATA'](), a4n50z['characters'](q$3py, fsk7 + 0x9, zna540 - fsk7 - 0x9), a4n50z['endCDATA'](), zna540 + 0x3;
            }
            var _xe = L9m0a(q$3py, fsk7),
                lq3sy$ = _xe['length'];
            if (lq3sy$ > 0x1 && /!doctype/i['test'](_xe[0x0][0x0])) {
                var yptl63 = _xe[0x1][0x0],
                    vj1dub = lq3sy$ > 0x3 && /^public$/i['test'](_xe[0x2][0x0]) && _xe[0x3][0x0],
                    i0rnm4 = lq3sy$ > 0x4 && _xe[0x4][0x0],
                    l$qfs2 = _xe[lq3sy$ - 0x1];
                return a4n50z['startDTD'](yptl63, vj1dub && vj1dub['replace'](/^(['"])(.*?)\1$/, '$2'), i0rnm4 && i0rnm4['replace'](/^(['"])(.*?)\1$/, '$2')), a4n50z['endDTD'](), l$qfs2['index'] + l$qfs2[0x0]['length'];
            }
    }
    return -0x1;
}
function L9wsfk(a4nb, kce7_, kce9_) {
    var mn08ir = a4nb['indexOf']('?>', kce7_);
    if (mn08ir) {
        var sw$f2 = a4nb['substring'](kce7_, mn08ir)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (sw$f2) {
            {
                sw$f2[0x0]['length'];
            }
            return kce9_['processingInstruction'](sw$f2[0x1], sw$f2[0x2]), mn08ir + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function L9cf7kw() {}
function L9a54mn(bad1vz, imo8) {
    return bad1vz['__proto__'] = imo8, bad1vz;
}
function L9m0a(za5nb4, lfsq$) {
    var ri8g6o,
        vdbjz = [],
        skw2f7 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (skw2f7['lastIndex'] = lfsq$, skw2f7['exec'](za5nb4); ri8g6o = skw2f7['exec'](za5nb4);) if (vdbjz['push'](ri8g6o), ri8g6o[0x1]) return vdbjz;
}
var L9a4d5z = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    L9nim0r8 = new RegExp('[\\-\\.0-9' + L9a4d5z['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    L9f$7sw = new RegExp('^' + L9a4d5z['source'] + L9nim0r8['source'] + '*(?::' + L9a4d5z['source'] + L9nim0r8['source'] + '*)?$'),
    L9sf72 = 0x0,
    L9dz1b = 0x1,
    L9zvd = 0x2,
    L9dbv1za = 0x3,
    L9jzd1bv = 0x4,
    L9fc2k7w = 0x5,
    L9qp3t = 0x6,
    L9ecxk_ = 0x7;
L9bdav5z['prototype'] = {
    'parse': function (vu1jh, duvjh1, ypgto) {
        var r04mn = this['domBuilder'];
        r04mn['startDocument'](), L9q$l3(duvjh1, duvjh1 = {}), L9uj1vdb(vu1jh, duvjh1, ypgto, r04mn, this['errorHandler']), r04mn['endDocument']();
    }
}, L9cf7kw['prototype'] = {
    'setTagName': function (ot8g6) {
        if (!L9f$7sw['test'](ot8g6)) throw new Error('invalid tagName:' + ot8g6);
        this['tagName'] = ot8g6;
    },
    'add': function (_we7kc, lytqp3, z54nba) {
        if (!L9f$7sw['test'](_we7kc)) throw new Error('invalid attribute:' + _we7kc);
        this[this['length']++] = {
            'qName': _we7kc,
            'value': lytqp3,
            'offset': z54nba
        };
    },
    'length': 0x0,
    'getLocalName': function (f2ql) {
        return this[f2ql]['localName'];
    },
    'getLocator': function (xc9k_e) {
        return this[xc9k_e]['locator'];
    },
    'getQName': function (cw7_e) {
        return this[cw7_e]['qName'];
    },
    'getURI': function (s$q3) {
        return this[s$q3]['uri'];
    },
    'getValue': function (e_k7wc) {
        return this[e_k7wc]['value'];
    }
}, L9a54mn({}, L9a54mn['prototype']) instanceof L9a54mn || (L9a54mn = function (lqp$3y, yplq3$) {
    function w72$() {}
    w72$['prototype'] = yplq3$, w72$ = new w72$();
    for (yplq3$ in lqp$3y) w72$[yplq3$] = lqp$3y[yplq3$];
    return w72$;
}), exports['XMLReader'] = L9bdav5z;