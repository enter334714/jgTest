var f = wx.$B;
function Shf() {}
function S$numh2(eizs3a, lbkrq, aezti, kqpr8, p8kr) {
    function isvto4(zsie) {
        if (zsie > 0xffff) {
            zsie -= 0x10000;
            var gbqw = 0xd800 + (zsie >> 0xa),
                w6lgb_ = 0xdc00 + (0x3ff & zsie);
            return String['fromCharCode'](gbqw, w6lgb_);
        }
        return String['fromCharCode'](zsie);
    }
    function kbrxg(wbqkl) {
        var qgbrlk = wbqkl['slice'](0x1, -0x1);
        return qgbrlk in aezti ? aezti[qgbrlk] : '#' === qgbrlk['charAt'](0x0) ? isvto4(parseInt(qgbrlk['substr'](0x1)['replace']('x', '0x'))) : (p8kr['error']('entity not found:' + wbqkl), wbqkl);
    }
    function $f7329(jy0p8d) {
        if (jy0p8d > wo_56) {
            var wlb_6g = eizs3a['substring'](wo_56, jy0p8d)['replace'](/&#?\w+;/g, kbrxg);
            f3a7e9 && o4vs1t(wo_56), kqpr8['characters'](wlb_6g, 0x0, jy0p8d - wo_56), wo_56 = jy0p8d;
        }
    }
    function o4vs1t(rklgqb, glwb_6) {
        for (; rklgqb >= o45 && (glwb_6 = kqrxb['exec'](eizs3a));) f2397 = glwb_6['index'], o45 = f2397 + glwb_6[0x0]['length'], f3a7e9['lineNumber']++;
        f3a7e9['columnNumber'] = rklgqb - f2397 + 0x1;
    }
    for (var f2397 = 0x0, o45 = 0x0, kqrxb = /.*(?:\r\n?|\n)|.*$/g, f3a7e9 = kqpr8['locator'], tsazi = [{ 'currentNSMap': lbkrq }], za37ei = {}, wo_56 = 0x0;;) {
        try {
            var vot415 = eizs3a['indexOf']('<', wo_56);
            if (0x0 > vot415) {
                if (!eizs3a['substr'](wo_56)['match'](/^\s*$/)) {
                    var z9a3 = kqpr8['doc'],
                        rlqkbg = z9a3['createTextNode'](eizs3a['substr'](wo_56));
                    z9a3['appendChild'](rlqkbg), kqpr8['currentElement'] = rlqkbg;
                }
                return;
            }
            switch (vot415 > wo_56 && $f7329(vot415), eizs3a['charAt'](vot415 + 0x1)) {
                case '/':
                    var bwqlgk = eizs3a['indexOf']('>', vot415 + 0x3),
                        qbwglk = eizs3a['substring'](vot415 + 0x2, bwqlgk),
                        e79z3a = tsazi['pop']();
                    0x0 > bwqlgk ? (qbwglk = eizs3a['substring'](vot415 + 0x2)['replace'](/[\s<].*/, ''), p8kr['error']('end tag name: ' + qbwglk + ' is not complete:' + e79z3a['tagName']), bwqlgk = vot415 + 0x1 + qbwglk['length']) : qbwglk['match'](/\s</) && (qbwglk = qbwglk['replace'](/[\s<].*/, ''), p8kr['error']('end tag name: ' + qbwglk + ' maybe not complete'), bwqlgk = vot415 + 0x1 + qbwglk['length']);
                    var h$2umn = e79z3a['localNSMap'],
                        _4516 = e79z3a['tagName'] == qbwglk,
                        g_65wl = _4516 || e79z3a['tagName'] && e79z3a['tagName']['toLowerCase']() == qbwglk['toLowerCase']();
                    if (g_65wl) {
                        if (kqpr8['endElement'](e79z3a['uri'], e79z3a['localName'], qbwglk), h$2umn) {
                            for (var qxrpk in h$2umn) kqpr8['endPrefixMapping'](qxrpk);
                        }
                        _4516 || p8kr['fatalError']('end tag name: ' + qbwglk + ' is not match the current start tagName:' + e79z3a['tagName']);
                    } else tsazi['push'](e79z3a);
                    bwqlgk++;
                    break;
                case '?':
                    f3a7e9 && o4vs1t(vot415), bwqlgk = Svzatsi(eizs3a, vot415, kqpr8);
                    break;
                case '!':
                    f3a7e9 && o4vs1t(vot415), bwqlgk = Sl5wg(eizs3a, vot415, kqpr8, p8kr);
                    break;
                default:
                    f3a7e9 && o4vs1t(vot415);
                    var os4t1v = new Ssiezta(),
                        _wgl5 = tsazi[tsazi['length'] - 0x1]['currentNSMap'],
                        bwqlgk = Shf9(eizs3a, vot415, os4t1v, _wgl5, kbrxg, p8kr),
                        zeia37 = os4t1v['length'];
                    if (!os4t1v['closed'] && Sz37iae(eizs3a, bwqlgk, os4t1v['tagName'], za37ei) && (os4t1v['closed'] = !0x0, aezti['nbsp'] || p8kr['warning']('unclosed xml attribute')), f3a7e9 && zeia37) {
                        for (var wbkgl6 = Sw6kblg(f3a7e9, {}), z39 = 0x0; zeia37 > z39; z39++) {
                            var pjd0 = os4t1v[z39];
                            o4vs1t(pjd0['offset']), pjd0['locator'] = Sw6kblg(f3a7e9, {});
                        }
                        kqpr8['locator'] = wbkgl6, Sesiaz3(os4t1v, kqpr8, _wgl5) && tsazi['push'](os4t1v), kqpr8['locator'] = f3a7e9;
                    } else Sesiaz3(os4t1v, kqpr8, _wgl5) && tsazi['push'](os4t1v);
                    'http://www.w3.org/1999/xhtml' !== os4t1v['uri'] || os4t1v['closed'] ? bwqlgk++ : bwqlgk = Srpxk(eizs3a, bwqlgk, os4t1v['tagName'], kbrxg, kqpr8);
            }
        } catch (v45ot1) {
            p8kr['error']('element parse error: ' + v45ot1), bwqlgk = -0x1;
        }
        bwqlgk > wo_56 ? wo_56 = bwqlgk : $f7329(Math['max'](vot415, wo_56) + 0x1);
    }
}
function Sw6kblg(e3z9a, si4vot) {
    return si4vot['lineNumber'] = e3z9a['lineNumber'], si4vot['columnNumber'] = e3z9a['columnNumber'], si4vot;
}
function Shf9(iz4ts, grxk, l1_5w6, rqx0p8, za973, blgwq) {
    for (var qkrp8x, f$h9, bqxk = ++grxk, is3e = Skq8r;;) {
        var ost = iz4ts['charAt'](bqxk);
        switch (ost) {
            case '=':
                if (is3e === Sh$2mu) qkrp8x = iz4ts['slice'](grxk, bqxk), is3e = Sl15w_;else {
                    if (is3e !== Sbk8qr) throw new Error('attribute equal must after attrName');
                    is3e = Sl15w_;
                }
                break;
            case '\x27':
            case '\x22':
                if (is3e === Sl15w_ || is3e === Sh$2mu) {
                    if (is3e === Sh$2mu && (blgwq['warning']('attribute value must after "="'), qkrp8x = iz4ts['slice'](grxk, bqxk)), grxk = bqxk + 0x1, bqxk = iz4ts['indexOf'](ost, grxk), !(bqxk > 0x0)) throw new Error('attribute value no end \'' + ost + '\' match');
                    f$h9 = iz4ts['slice'](grxk, bqxk)['replace'](/&#?\w+;/g, za973), l1_5w6['add'](qkrp8x, f$h9, grxk - 0x1), is3e = S$27fh;
                } else {
                    if (is3e != Shun$f) throw new Error('attribute value must after "="');
                    f$h9 = iz4ts['slice'](grxk, bqxk)['replace'](/&#?\w+;/g, za973), l1_5w6['add'](qkrp8x, f$h9, grxk), blgwq['warning']('attribute "' + qkrp8x + '" missed start quot(' + ost + ')!!'), grxk = bqxk + 0x1, is3e = S$27fh;
                }
                break;
            case '/':
                switch (is3e) {
                    case Skq8r:
                        l1_5w6['setTagName'](iz4ts['slice'](grxk, bqxk));
                    case S$27fh:
                    case Sh$u2:
                    case Sl_561w:
                        is3e = Sl_561w, l1_5w6['closed'] = !0x0;
                    case Shun$f:
                    case Sh$2mu:
                    case Sbk8qr:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return blgwq['error']('unexpected end of input'), is3e == Skq8r && l1_5w6['setTagName'](iz4ts['slice'](grxk, bqxk)), bqxk;
            case '>':
                switch (is3e) {
                    case Skq8r:
                        l1_5w6['setTagName'](iz4ts['slice'](grxk, bqxk));
                    case S$27fh:
                    case Sh$u2:
                    case Sl_561w:
                        break;
                    case Shun$f:
                    case Sh$2mu:
                        f$h9 = iz4ts['slice'](grxk, bqxk), '/' === f$h9['slice'](-0x1) && (l1_5w6['closed'] = !0x0, f$h9 = f$h9['slice'](0x0, -0x1));
                    case Sbk8qr:
                        is3e === Sbk8qr && (f$h9 = qkrp8x), is3e == Shun$f ? (blgwq['warning']('attribute "' + f$h9 + '" missed quot(")!!'), l1_5w6['add'](qkrp8x, f$h9['replace'](/&#?\w+;/g, za973), grxk)) : ('http://www.w3.org/1999/xhtml' === rqx0p8[''] && f$h9['match'](/^(?:disabled|checked|selected)$/i) || blgwq['warning']('attribute "' + f$h9 + '" missed value!! "' + f$h9 + '" instead!!'), l1_5w6['add'](f$h9, f$h9, grxk));
                        break;
                    case Sl15w_:
                        throw new Error('attribute value missed!!');
                }
                return bqxk;
            case '\u0080':
                ost = '\x20';
            default:
                if ('\x20' >= ost) switch (is3e) {
                    case Skq8r:
                        l1_5w6['setTagName'](iz4ts['slice'](grxk, bqxk)), is3e = Sh$u2;
                        break;
                    case Sh$2mu:
                        qkrp8x = iz4ts['slice'](grxk, bqxk), is3e = Sbk8qr;
                        break;
                    case Shun$f:
                        var f$h9 = iz4ts['slice'](grxk, bqxk)['replace'](/&#?\w+;/g, za973);
                        blgwq['warning']('attribute "' + f$h9 + '" missed quot(")!!'), l1_5w6['add'](qkrp8x, f$h9, grxk);
                    case S$27fh:
                        is3e = Sh$u2;
                } else switch (is3e) {
                    case Sbk8qr:
                        {
                            l1_5w6['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === rqx0p8[''] && qkrp8x['match'](/^(?:disabled|checked|selected)$/i) || blgwq['warning']('attribute "' + qkrp8x + '" missed value!! "' + qkrp8x + '" instead2!!'), l1_5w6['add'](qkrp8x, qkrp8x, grxk), grxk = bqxk, is3e = Sh$2mu;
                        break;
                    case S$27fh:
                        blgwq['warning']('attribute space is required"' + qkrp8x + '\x22!!');
                    case Sh$u2:
                        is3e = Sh$2mu, grxk = bqxk;
                        break;
                    case Sl15w_:
                        is3e = Shun$f, grxk = bqxk;
                        break;
                    case Sl_561w:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        bqxk++;
    }
}
function Sesiaz3(r80q, x80qrp, t1svo) {
    for (var xqpk8r = r80q['tagName'], f97e3a = null, y0j8p = r80q['length']; y0j8p--;) {
        var tzi = r80q[y0j8p],
            _lbw6g = tzi['qName'],
            ow_1 = tzi['value'],
            bqrk8 = _lbw6g['indexOf'](':');
        if (bqrk8 > 0x0) var ivtso = tzi['prefix'] = _lbw6g['slice'](0x0, bqrk8),
            bkgwql = _lbw6g['slice'](bqrk8 + 0x1),
            d0xpy8 = 'xmlns' === ivtso && bkgwql;else bkgwql = _lbw6g, ivtso = null, d0xpy8 = 'xmlns' === _lbw6g && '';
        tzi['localName'] = bkgwql, d0xpy8 !== !0x1 && (null == f97e3a && (f97e3a = {}, Stsvz(t1svo, t1svo = {})), t1svo[d0xpy8] = f97e3a[d0xpy8] = ow_1, tzi['uri'] = 'http://www.w3.org/2000/xmlns/', x80qrp['startPrefixMapping'](d0xpy8, ow_1));
    }
    for (var y0j8p = r80q['length']; y0j8p--;) {
        tzi = r80q[y0j8p];
        var ivtso = tzi['prefix'];
        ivtso && ('xml' === ivtso && (tzi['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== ivtso && (tzi['uri'] = t1svo[ivtso || '']));
    }
    var bqrk8 = xqpk8r['indexOf'](':');
    bqrk8 > 0x0 ? (ivtso = r80q['prefix'] = xqpk8r['slice'](0x0, bqrk8), bkgwql = r80q['localName'] = xqpk8r['slice'](bqrk8 + 0x1)) : (ivtso = null, bkgwql = r80q['localName'] = xqpk8r);
    var ov1s4 = r80q['uri'] = t1svo[ivtso || ''];
    if (x80qrp['startElement'](ov1s4, bkgwql, xqpk8r, r80q), !r80q['closed']) return r80q['currentNSMap'] = t1svo, r80q['localNSMap'] = f97e3a, !0x0;
    if (x80qrp['endElement'](ov1s4, bkgwql, xqpk8r), f97e3a) {
        for (ivtso in f97e3a) x80qrp['endPrefixMapping'](ivtso);
    }
}
function Srpxk(ovi4t, zsvt, svz4i, wlb6, fa7e9) {
    if (/^(?:script|textarea)$/i['test'](svz4i)) {
        var kw6blg = ovi4t['indexOf']('</' + svz4i + '>', zsvt),
            to1 = ovi4t['substring'](zsvt + 0x1, kw6blg);
        if (/[&<]/['test'](to1)) return (/^script$/i['test'](svz4i) ? (fa7e9['characters'](to1, 0x0, to1['length']), kw6blg) : (to1 = to1['replace'](/&#?\w+;/g, wlb6), fa7e9['characters'](to1, 0x0, to1['length']), kw6blg)
        );
    }
    return zsvt + 0x1;
}
function Sz37iae(kpr, taiszv, xpq80r, aeitzs) {
    var $f2h7 = aeitzs[xpq80r];
    return null == $f2h7 && ($f2h7 = kpr['lastIndexOf']('</' + xpq80r + '>'), taiszv > $f2h7 && ($f2h7 = kpr['lastIndexOf']('</' + xpq80r)), aeitzs[xpq80r] = $f2h7), taiszv > $f2h7;
}
function Stsvz(f29e, rxq8p0) {
    for (var f392e in f29e) rxq8p0[f392e] = f29e[f392e];
}
function Sl5wg(mhu2, grxbqk, pd8, qbr8xk) {
    var az9e73 = mhu2['charAt'](grxbqk + 0x2);
    switch (az9e73) {
        case '-':
            if ('-' === mhu2['charAt'](grxbqk + 0x3)) {
                var rp0y8 = mhu2['indexOf']('-->', grxbqk + 0x4);
                return rp0y8 > grxbqk ? (pd8['comment'](mhu2, grxbqk + 0x4, rp0y8 - grxbqk - 0x4), rp0y8 + 0x3) : (qbr8xk['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == mhu2['substr'](grxbqk + 0x3, 0x6)) {
                var rp0y8 = mhu2['indexOf'](']]>', grxbqk + 0x9);
                return pd8['startCDATA'](), pd8['characters'](mhu2, grxbqk + 0x9, rp0y8 - grxbqk - 0x9), pd8['endCDATA'](), rp0y8 + 0x3;
            }
            var zs4it = Seiz7a(mhu2, grxbqk),
                nm$2u = zs4it['length'];
            if (nm$2u > 0x1 && /!doctype/i['test'](zs4it[0x0][0x0])) {
                var f73ea9 = zs4it[0x1][0x0],
                    eisatz = nm$2u > 0x3 && /^public$/i['test'](zs4it[0x2][0x0]) && zs4it[0x3][0x0],
                    v54o1 = nm$2u > 0x4 && zs4it[0x4][0x0],
                    ae3z7i = zs4it[nm$2u - 0x1];
                return pd8['startDTD'](f73ea9, eisatz && eisatz['replace'](/^(['"])(.*?)\1$/, '$2'), v54o1 && v54o1['replace'](/^(['"])(.*?)\1$/, '$2')), pd8['endDTD'](), ae3z7i['index'] + ae3z7i[0x0]['length'];
            }
    }
    return -0x1;
}
function Svzatsi(zti4sv, o4v15_, sa3ez) {
    var klqg = zti4sv['indexOf']('?>', o4v15_);
    if (klqg) {
        var rpxq08 = zti4sv['substring'](o4v15_, klqg)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (rpxq08) {
            {
                rpxq08[0x0]['length'];
            }
            return sa3ez['processingInstruction'](rpxq08[0x1], rpxq08[0x2]), klqg + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function Ssiezta() {}
function Skqrxg(itzea, seai3z) {
    return itzea['__proto__'] = seai3z, itzea;
}
function Seiz7a(unh2f$, wlg_b) {
    var wl_615,
        d0j8py = [],
        qxr0p = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (qxr0p['lastIndex'] = wlg_b, qxr0p['exec'](unh2f$); wl_615 = qxr0p['exec'](unh2f$);) if (d0j8py['push'](wl_615), wl_615[0x1]) return d0j8py;
}
var Snhmu$2 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    Swg6lk = new RegExp('[\\-\\.0-9' + Snhmu$2['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    So5_61w = new RegExp('^' + Snhmu$2['source'] + Swg6lk['source'] + '*(?::' + Snhmu$2['source'] + Swg6lk['source'] + '*)?$'),
    Skq8r = 0x0,
    Sh$2mu = 0x1,
    Sbk8qr = 0x2,
    Sl15w_ = 0x3,
    Shun$f = 0x4,
    S$27fh = 0x5,
    Sh$u2 = 0x6,
    Sl_561w = 0x7;
Shf['prototype'] = {
    'parse': function (wqb, vst4o, gwk6bl) {
        var h$2n = this['domBuilder'];
        h$2n['startDocument'](), Stsvz(vst4o, vst4o = {}), S$numh2(wqb, vst4o, gwk6bl, h$2n, this['errorHandler']), h$2n['endDocument']();
    }
}, Ssiezta['prototype'] = {
    'setTagName': function (_5614) {
        if (!So5_61w['test'](_5614)) throw new Error('invalid tagName:' + _5614);
        this['tagName'] = _5614;
    },
    'add': function (fh72, siv, f7h29) {
        if (!So5_61w['test'](fh72)) throw new Error('invalid attribute:' + fh72);
        this[this['length']++] = {
            'qName': fh72,
            'value': siv,
            'offset': f7h29
        };
    },
    'length': 0x0,
    'getLocalName': function (rbkgxq) {
        return this[rbkgxq]['localName'];
    },
    'getLocator': function (rxyp80) {
        return this[rxyp80]['locator'];
    },
    'getQName': function (mn$2h) {
        return this[mn$2h]['qName'];
    },
    'getURI': function (e7z) {
        return this[e7z]['uri'];
    },
    'getValue': function (p8y0j) {
        return this[p8y0j]['value'];
    }
}, Skqrxg({}, Skqrxg['prototype']) instanceof Skqrxg || (Skqrxg = function (ostv, nhu) {
    function e972f3() {}
    e972f3['prototype'] = nhu, e972f3 = new e972f3();
    for (nhu in ostv) e972f3[nhu] = ostv[nhu];
    return e972f3;
}), exports['XMLReader'] = Shf;