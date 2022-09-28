var O = wx.$C;
function h_n8dsbi() {}
function h_bjdn8(wp972, tm$eq1, me27t$, gpof0, o_ghxy) {
    function z3lck(kc3z6u) {
        if (kc3z6u > 0xffff) {
            kc3z6u -= 0x10000;
            var m$27 = 0xd800 + (kc3z6u >> 0xa),
                nj8qs = 0xdc00 + (0x3ff & kc3z6u);
            return String['fromCharCode'](m$27, nj8qs);
        }
        return String['fromCharCode'](kc3z6u);
    }
    function n8dsb(jre1s) {
        var yf0o = jre1s['slice'](0x1, -0x1);
        return yf0o in me27t$ ? me27t$[yf0o] : '#' === yf0o['charAt'](0x0) ? z3lck(parseInt(yf0o['substr'](0x1)['replace']('x', '0x'))) : (o_ghxy['error']('entity not found:' + jre1s), jre1s);
    }
    function yp0go(fap2w9) {
        if (fap2w9 > tjrqe) {
            var qr1jsn = wp972['substring'](tjrqe, fap2w9)['replace'](/&#?\w+;/g, n8dsb);
            w7a9p2 && tm1e$q(tjrqe), gpof0['characters'](qr1jsn, 0x0, fap2w9 - tjrqe), tjrqe = fap2w9;
        }
    }
    function tm1e$q(nq1jr, jq8rns) {
        for (; nq1jr >= jrq && (jq8rns = x_vhoy['exec'](wp972));) a$72w9 = jq8rns['index'], jrq = a$72w9 + jq8rns[0x0]['length'], w7a9p2['lineNumber']++;
        w7a9p2['columnNumber'] = nq1jr - a$72w9 + 0x1;
    }
    for (var a$72w9 = 0x0, jrq = 0x0, x_vhoy = /.*(?:\r\n?|\n)|.*$/g, w7a9p2 = gpof0['locator'], f0ygox = [{ 'currentNSMap': tm$eq1 }], jse1rq = {}, tjrqe = 0x0;;) {
        try {
            var ck35zu = wp972['indexOf']('<', tjrqe);
            if (0x0 > ck35zu) {
                if (!wp972['substr'](tjrqe)['match'](/^\s*$/)) {
                    var z6uc = gpof0['doc'],
                        fo0xgy = z6uc['createTextNode'](wp972['substr'](tjrqe));
                    z6uc['appendChild'](fo0xgy), gpof0['currentElement'] = fo0xgy;
                }
                return;
            }
            switch (ck35zu > tjrqe && yp0go(ck35zu), wp972['charAt'](ck35zu + 0x1)) {
                case '/':
                    var ejqs = wp972['indexOf']('>', ck35zu + 0x3),
                        cziud5 = wp972['substring'](ck35zu + 0x2, ejqs),
                        qr1j = f0ygox['pop']();
                    0x0 > ejqs ? (cziud5 = wp972['substring'](ck35zu + 0x2)['replace'](/[\s<].*/, ''), o_ghxy['error']('end tag name: ' + cziud5 + ' is not complete:' + qr1j['tagName']), ejqs = ck35zu + 0x1 + cziud5['length']) : cziud5['match'](/\s</) && (cziud5 = cziud5['replace'](/[\s<].*/, ''), o_ghxy['error']('end tag name: ' + cziud5 + ' maybe not complete'), ejqs = ck35zu + 0x1 + cziud5['length']);
                    var sr8bn = qr1j['localNSMap'],
                        qem1t$ = qr1j['tagName'] == cziud5,
                        t7e1 = qem1t$ || qr1j['tagName'] && qr1j['tagName']['toLowerCase']() == cziud5['toLowerCase']();
                    if (t7e1) {
                        if (gpof0['endElement'](qr1j['uri'], qr1j['localName'], cziud5), sr8bn) {
                            for (var s8bjnr in sr8bn) gpof0['endPrefixMapping'](s8bjnr);
                        }
                        qem1t$ || o_ghxy['fatalError']('end tag name: ' + cziud5 + ' is not match the current start tagName:' + qr1j['tagName']);
                    } else f0ygox['push'](qr1j);
                    ejqs++;
                    break;
                case '?':
                    w7a9p2 && tm1e$q(ck35zu), ejqs = h_s8rbn(wp972, ck35zu, gpof0);
                    break;
                case '!':
                    w7a9p2 && tm1e$q(ck35zu), ejqs = h_mtqre(wp972, ck35zu, gpof0, o_ghxy);
                    break;
                default:
                    w7a9p2 && tm1e$q(ck35zu);
                    var k3z6lc = new h_hxyo(),
                        gohxy = f0ygox[f0ygox['length'] - 0x1]['currentNSMap'],
                        ejqs = h_t7m$2e(wp972, ck35zu, k3z6lc, gohxy, n8dsb, o_ghxy),
                        kc3z5u = k3z6lc['length'];
                    if (!k3z6lc['closed'] && h_yf0g(wp972, ejqs, k3z6lc['tagName'], jse1rq) && (k3z6lc['closed'] = !0x0, me27t$['nbsp'] || o_ghxy['warning']('unclosed xml attribute')), w7a9p2 && kc3z5u) {
                        for (var njsrq1 = h_sjbn(w7a9p2, {}), trqme1 = 0x0; kc3z5u > trqme1; trqme1++) {
                            var qr8jsn = k3z6lc[trqme1];
                            tm1e$q(qr8jsn['offset']), qr8jsn['locator'] = h_sjbn(w7a9p2, {});
                        }
                        gpof0['locator'] = njsrq1, h_biudc(k3z6lc, gpof0, gohxy) && f0ygox['push'](k3z6lc), gpof0['locator'] = w7a9p2;
                    } else h_biudc(k3z6lc, gpof0, gohxy) && f0ygox['push'](k3z6lc);
                    'http://www.w3.org/1999/xhtml' !== k3z6lc['uri'] || k3z6lc['closed'] ? ejqs++ : ejqs = h_bin58(wp972, ejqs, k3z6lc['tagName'], n8dsb, gpof0);
            }
        } catch (z5cud) {
            o_ghxy['error']('element parse error: ' + z5cud), ejqs = -0x1;
        }
        ejqs > tjrqe ? tjrqe = ejqs : yp0go(Math['max'](ck35zu, tjrqe) + 0x1);
    }
}
function h_sjbn(o0_g, qrsjn8) {
    return qrsjn8['lineNumber'] = o0_g['lineNumber'], qrsjn8['columnNumber'] = o0_g['columnNumber'], qrsjn8;
}
function h_t7m$2e(wf0a, _gxoyh, z6kcu3, tqje, kc5uzi, jrnb8s) {
    for (var gap0f9, s1nqrj, b8jd = ++_gxoyh, bidu85 = h_pw9a72;;) {
        var iduc = wf0a['charAt'](b8jd);
        switch (iduc) {
            case '=':
                if (bidu85 === h_uk5z3c) gap0f9 = wf0a['slice'](_gxoyh, b8jd), bidu85 = h_oyfgx0;else {
                    if (bidu85 !== h_f9a2p) throw new Error('attribute equal must after attrName');
                    bidu85 = h_oyfgx0;
                }
                break;
            case '\x27':
            case '\x22':
                if (bidu85 === h_oyfgx0 || bidu85 === h_uk5z3c) {
                    if (bidu85 === h_uk5z3c && (jrnb8s['warning']('attribute value must after "="'), gap0f9 = wf0a['slice'](_gxoyh, b8jd)), _gxoyh = b8jd + 0x1, b8jd = wf0a['indexOf'](iduc, _gxoyh), !(b8jd > 0x0)) throw new Error('attribute value no end \'' + iduc + '\' match');
                    s1nqrj = wf0a['slice'](_gxoyh, b8jd)['replace'](/&#?\w+;/g, kc5uzi), z6kcu3['add'](gap0f9, s1nqrj, _gxoyh - 0x1), bidu85 = h_pwfa09;
                } else {
                    if (bidu85 != h_u5id8) throw new Error('attribute value must after "="');
                    s1nqrj = wf0a['slice'](_gxoyh, b8jd)['replace'](/&#?\w+;/g, kc5uzi), z6kcu3['add'](gap0f9, s1nqrj, _gxoyh), jrnb8s['warning']('attribute "' + gap0f9 + '" missed start quot(' + iduc + ')!!'), _gxoyh = b8jd + 0x1, bidu85 = h_pwfa09;
                }
                break;
            case '/':
                switch (bidu85) {
                    case h_pw9a72:
                        z6kcu3['setTagName'](wf0a['slice'](_gxoyh, b8jd));
                    case h_pwfa09:
                    case h_u3k6:
                    case h_xo0_gy:
                        bidu85 = h_xo0_gy, z6kcu3['closed'] = !0x0;
                    case h_u5id8:
                    case h_uk5z3c:
                    case h_f9a2p:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return jrnb8s['error']('unexpected end of input'), bidu85 == h_pw9a72 && z6kcu3['setTagName'](wf0a['slice'](_gxoyh, b8jd)), b8jd;
            case '>':
                switch (bidu85) {
                    case h_pw9a72:
                        z6kcu3['setTagName'](wf0a['slice'](_gxoyh, b8jd));
                    case h_pwfa09:
                    case h_u3k6:
                    case h_xo0_gy:
                        break;
                    case h_u5id8:
                    case h_uk5z3c:
                        s1nqrj = wf0a['slice'](_gxoyh, b8jd), '/' === s1nqrj['slice'](-0x1) && (z6kcu3['closed'] = !0x0, s1nqrj = s1nqrj['slice'](0x0, -0x1));
                    case h_f9a2p:
                        bidu85 === h_f9a2p && (s1nqrj = gap0f9), bidu85 == h_u5id8 ? (jrnb8s['warning']('attribute "' + s1nqrj + '" missed quot(")!!'), z6kcu3['add'](gap0f9, s1nqrj['replace'](/&#?\w+;/g, kc5uzi), _gxoyh)) : ('http://www.w3.org/1999/xhtml' === tqje[''] && s1nqrj['match'](/^(?:disabled|checked|selected)$/i) || jrnb8s['warning']('attribute "' + s1nqrj + '" missed value!! "' + s1nqrj + '" instead!!'), z6kcu3['add'](s1nqrj, s1nqrj, _gxoyh));
                        break;
                    case h_oyfgx0:
                        throw new Error('attribute value missed!!');
                }
                return b8jd;
            case '\u0080':
                iduc = '\x20';
            default:
                if ('\x20' >= iduc) switch (bidu85) {
                    case h_pw9a72:
                        z6kcu3['setTagName'](wf0a['slice'](_gxoyh, b8jd)), bidu85 = h_u3k6;
                        break;
                    case h_uk5z3c:
                        gap0f9 = wf0a['slice'](_gxoyh, b8jd), bidu85 = h_f9a2p;
                        break;
                    case h_u5id8:
                        var s1nqrj = wf0a['slice'](_gxoyh, b8jd)['replace'](/&#?\w+;/g, kc5uzi);
                        jrnb8s['warning']('attribute "' + s1nqrj + '" missed quot(")!!'), z6kcu3['add'](gap0f9, s1nqrj, _gxoyh);
                    case h_pwfa09:
                        bidu85 = h_u3k6;
                } else switch (bidu85) {
                    case h_f9a2p:
                        {
                            z6kcu3['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === tqje[''] && gap0f9['match'](/^(?:disabled|checked|selected)$/i) || jrnb8s['warning']('attribute "' + gap0f9 + '" missed value!! "' + gap0f9 + '" instead2!!'), z6kcu3['add'](gap0f9, gap0f9, _gxoyh), _gxoyh = b8jd, bidu85 = h_uk5z3c;
                        break;
                    case h_pwfa09:
                        jrnb8s['warning']('attribute space is required"' + gap0f9 + '\x22!!');
                    case h_u3k6:
                        bidu85 = h_uk5z3c, _gxoyh = b8jd;
                        break;
                    case h_oyfgx0:
                        bidu85 = h_u5id8, _gxoyh = b8jd;
                        break;
                    case h_xo0_gy:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        b8jd++;
    }
}
function h_biudc($7a92, ao0, m72$et) {
    for (var rsb8jn = $7a92['tagName'], f92pwa = null, yh_xov = $7a92['length']; yh_xov--;) {
        var g0oyx_ = $7a92[yh_xov],
            sn8jdb = g0oyx_['qName'],
            qrnj1s = g0oyx_['value'],
            jesq1r = sn8jdb['indexOf'](':');
        if (jesq1r > 0x0) var aw0p9 = g0oyx_['prefix'] = sn8jdb['slice'](0x0, jesq1r),
            tr = sn8jdb['slice'](jesq1r + 0x1),
            a0pwf = 'xmlns' === aw0p9 && tr;else tr = sn8jdb, aw0p9 = null, a0pwf = 'xmlns' === sn8jdb && '';
        g0oyx_['localName'] = tr, a0pwf !== !0x1 && (null == f92pwa && (f92pwa = {}, h_y_vxho(m72$et, m72$et = {})), m72$et[a0pwf] = f92pwa[a0pwf] = qrnj1s, g0oyx_['uri'] = 'http://www.w3.org/2000/xmlns/', ao0['startPrefixMapping'](a0pwf, qrnj1s));
    }
    for (var yh_xov = $7a92['length']; yh_xov--;) {
        g0oyx_ = $7a92[yh_xov];
        var aw0p9 = g0oyx_['prefix'];
        aw0p9 && ('xml' === aw0p9 && (g0oyx_['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== aw0p9 && (g0oyx_['uri'] = m72$et[aw0p9 || '']));
    }
    var jesq1r = rsb8jn['indexOf'](':');
    jesq1r > 0x0 ? (aw0p9 = $7a92['prefix'] = rsb8jn['slice'](0x0, jesq1r), tr = $7a92['localName'] = rsb8jn['slice'](jesq1r + 0x1)) : (aw0p9 = null, tr = $7a92['localName'] = rsb8jn);
    var rqjn1 = $7a92['uri'] = m72$et[aw0p9 || ''];
    if (ao0['startElement'](rqjn1, tr, rsb8jn, $7a92), !$7a92['closed']) return $7a92['currentNSMap'] = m72$et, $7a92['localNSMap'] = f92pwa, !0x0;
    if (ao0['endElement'](rqjn1, tr, rsb8jn), f92pwa) {
        for (aw0p9 in f92pwa) ao0['endPrefixMapping'](aw0p9);
    }
}
function h_bin58(snd8bj, a9wp2f, i8sdn, hoxv_, idnb) {
    if (/^(?:script|textarea)$/i['test'](i8sdn)) {
        var m$7et = snd8bj['indexOf']('</' + i8sdn + '>', a9wp2f),
            x_0ogy = snd8bj['substring'](a9wp2f + 0x1, m$7et);
        if (/[&<]/['test'](x_0ogy)) return (/^script$/i['test'](i8sdn) ? (idnb['characters'](x_0ogy, 0x0, x_0ogy['length']), m$7et) : (x_0ogy = x_0ogy['replace'](/&#?\w+;/g, hoxv_), idnb['characters'](x_0ogy, 0x0, x_0ogy['length']), m$7et)
        );
    }
    return a9wp2f + 0x1;
}
function h_yf0g(eqmt1$, i5dn8, snjbd, bdsj8) {
    var z6kl3 = bdsj8[snjbd];
    return null == z6kl3 && (z6kl3 = eqmt1$['lastIndexOf']('</' + snjbd + '>'), i5dn8 > z6kl3 && (z6kl3 = eqmt1$['lastIndexOf']('</' + snjbd)), bdsj8[snjbd] = z6kl3), i5dn8 > z6kl3;
}
function h_y_vxho(nrjb8s, zidu5) {
    for (var zkl43 in nrjb8s) zidu5[zkl43] = nrjb8s[zkl43];
}
function h_mtqre(yf0pgo, pa0ogf, sib8, yfopg) {
    var bd5cui = yf0pgo['charAt'](pa0ogf + 0x2);
    switch (bd5cui) {
        case '-':
            if ('-' === yf0pgo['charAt'](pa0ogf + 0x3)) {
                var m72$9 = yf0pgo['indexOf']('-->', pa0ogf + 0x4);
                return m72$9 > pa0ogf ? (sib8['comment'](yf0pgo, pa0ogf + 0x4, m72$9 - pa0ogf - 0x4), m72$9 + 0x3) : (yfopg['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == yf0pgo['substr'](pa0ogf + 0x3, 0x6)) {
                var m72$9 = yf0pgo['indexOf'](']]>', pa0ogf + 0x9);
                return sib8['startCDATA'](), sib8['characters'](yf0pgo, pa0ogf + 0x9, m72$9 - pa0ogf - 0x9), sib8['endCDATA'](), m72$9 + 0x3;
            }
            var $1tq = h_izku5(yf0pgo, pa0ogf),
                jsrn = $1tq['length'];
            if (jsrn > 0x1 && /!doctype/i['test']($1tq[0x0][0x0])) {
                var p972aw = $1tq[0x1][0x0],
                    a90g = jsrn > 0x3 && /^public$/i['test']($1tq[0x2][0x0]) && $1tq[0x3][0x0],
                    qte1r = jsrn > 0x4 && $1tq[0x4][0x0],
                    x_ohy = $1tq[jsrn - 0x1];
                return sib8['startDTD'](p972aw, a90g && a90g['replace'](/^(['"])(.*?)\1$/, '$2'), qte1r && qte1r['replace'](/^(['"])(.*?)\1$/, '$2')), sib8['endDTD'](), x_ohy['index'] + x_ohy[0x0]['length'];
            }
    }
    return -0x1;
}
function h_s8rbn(qrjt1, gf0a9, pafg0o) {
    var t71e$ = qrjt1['indexOf']('?>', gf0a9);
    if (t71e$) {
        var e1trq = qrjt1['substring'](gf0a9, t71e$)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (e1trq) {
            {
                e1trq[0x0]['length'];
            }
            return pafg0o['processingInstruction'](e1trq[0x1], e1trq[0x2]), t71e$ + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function h_hxyo() {}
function h_lkz3c6(vhxy_, jq1re) {
    return vhxy_['__proto__'] = jq1re, vhxy_;
}
function h_izku5(d58inb, xyg0f) {
    var ck3u5z,
        ga0po = [],
        rbs8n = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (rbs8n['lastIndex'] = xyg0f, rbs8n['exec'](d58inb); ck3u5z = rbs8n['exec'](d58inb);) if (ga0po['push'](ck3u5z), ck3u5z[0x1]) return ga0po;
}
var h_t$2w7 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    h_j8nsqr = new RegExp('[\\-\\.0-9' + h_t$2w7['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    h_r8n = new RegExp('^' + h_t$2w7['source'] + h_j8nsqr['source'] + '*(?::' + h_t$2w7['source'] + h_j8nsqr['source'] + '*)?$'),
    h_pw9a72 = 0x0,
    h_uk5z3c = 0x1,
    h_f9a2p = 0x2,
    h_oyfgx0 = 0x3,
    h_u5id8 = 0x4,
    h_pwfa09 = 0x5,
    h_u3k6 = 0x6,
    h_xo0_gy = 0x7;
h_n8dsbi['prototype'] = {
    'parse': function (k3c5z, pf92aw, db8js) {
        var t7$2w = this['domBuilder'];
        t7$2w['startDocument'](), h_y_vxho(pf92aw, pf92aw = {}), h_bjdn8(k3c5z, pf92aw, db8js, t7$2w, this['errorHandler']), t7$2w['endDocument']();
    }
}, h_hxyo['prototype'] = {
    'setTagName': function (e$71m) {
        if (!h_r8n['test'](e$71m)) throw new Error('invalid tagName:' + e$71m);
        this['tagName'] = e$71m;
    },
    'add': function (q8s, $7mw29, z4l3k) {
        if (!h_r8n['test'](q8s)) throw new Error('invalid attribute:' + q8s);
        this[this['length']++] = {
            'qName': q8s,
            'value': $7mw29,
            'offset': z4l3k
        };
    },
    'length': 0x0,
    'getLocalName': function (paf9g0) {
        return this[paf9g0]['localName'];
    },
    'getLocator': function (og0yx) {
        return this[og0yx]['locator'];
    },
    'getQName': function (bind5) {
        return this[bind5]['qName'];
    },
    'getURI': function (rsj1nq) {
        return this[rsj1nq]['uri'];
    },
    'getValue': function (a0pof) {
        return this[a0pof]['value'];
    }
}, h_lkz3c6({}, h_lkz3c6['prototype']) instanceof h_lkz3c6 || (h_lkz3c6 = function (q$mt, xo_g0y) {
    function w9a2p7() {}
    w9a2p7['prototype'] = xo_g0y, w9a2p7 = new w9a2p7();
    for (xo_g0y in q$mt) w9a2p7[xo_g0y] = q$mt[xo_g0y];
    return w9a2p7;
}), exports['XMLReader'] = h_n8dsbi;