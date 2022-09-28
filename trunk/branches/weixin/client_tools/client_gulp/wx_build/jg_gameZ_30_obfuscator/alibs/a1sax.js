var c = wx.$a;
function go4u_we() {}
function gzkh6dq(jvshzn, fj12xs, h6nkz, _euw2g, la9$b) {
    function _we2($lyb0c) {
        if ($lyb0c > 0xffff) {
            $lyb0c -= 0x10000;
            var nsfv = 0xd800 + ($lyb0c >> 0xa),
                jsxhn = 0xdc00 + (0x3ff & $lyb0c);
            return String['fromCharCode'](nsfv, jsxhn);
        }
        return String['fromCharCode']($lyb0c);
    }
    function sj1fxn(ow4e0_) {
        var owe04_ = ow4e0_['slice'](0x1, -0x1);
        return owe04_ in h6nkz ? h6nkz[owe04_] : '#' === owe04_['charAt'](0x0) ? _we2(parseInt(owe04_['substr'](0x1)['replace']('x', '0x'))) : (la9$b['error']('entity not found:' + ow4e0_), ow4e0_);
    }
    function hkzjvn(r3pi57) {
        if (r3pi57 > qtrd) {
            var mb9al$ = jvshzn['substring'](qtrd, r3pi57)['replace'](/&#?\w+;/g, sj1fxn);
            c_4y && khqz6d(qtrd), _euw2g['characters'](mb9al$, 0x0, r3pi57 - qtrd), qtrd = r3pi57;
        }
    }
    function khqz6d(zvd6hk, $0cybl) {
        for (; zvd6hk >= c$alm && ($0cybl = k6t8d['exec'](jvshzn));) dk6zhq = $0cybl['index'], c$alm = dk6zhq + $0cybl[0x0]['length'], c_4y['lineNumber']++;
        c_4y['columnNumber'] = zvd6hk - dk6zhq + 0x1;
    }
    for (var dk6zhq = 0x0, c$alm = 0x0, k6t8d = /.*(?:\r\n?|\n)|.*$/g, c_4y = _euw2g['locator'], t8r375 = [{ 'currentNSMap': fj12xs }], w1e2ug = {}, qtrd = 0x0;;) {
        try {
            var g4_we = jvshzn['indexOf']('<', qtrd);
            if (0x0 > g4_we) {
                if (!jvshzn['substr'](qtrd)['match'](/^\s*$/)) {
                    var wguf2 = _euw2g['doc'],
                        t37p5 = wguf2['createTextNode'](jvshzn['substr'](qtrd));
                    wguf2['appendChild'](t37p5), _euw2g['currentElement'] = t37p5;
                }
                return;
            }
            switch (g4_we > qtrd && hkzjvn(g4_we), jvshzn['charAt'](g4_we + 0x1)) {
                case '/':
                    var bcy4 = jvshzn['indexOf']('>', g4_we + 0x3),
                        fnsj = jvshzn['substring'](g4_we + 0x2, bcy4),
                        cb$myl = t8r375['pop']();
                    0x0 > bcy4 ? (fnsj = jvshzn['substring'](g4_we + 0x2)['replace'](/[\s<].*/, ''), la9$b['error']('end tag name: ' + fnsj + ' is not complete:' + cb$myl['tagName']), bcy4 = g4_we + 0x1 + fnsj['length']) : fnsj['match'](/\s</) && (fnsj = fnsj['replace'](/[\s<].*/, ''), la9$b['error']('end tag name: ' + fnsj + ' maybe not complete'), bcy4 = g4_we + 0x1 + fnsj['length']);
                    var w4euo = cb$myl['localNSMap'],
                        sfxjv = cb$myl['tagName'] == fnsj,
                        $l9am = sfxjv || cb$myl['tagName'] && cb$myl['tagName']['toLowerCase']() == fnsj['toLowerCase']();
                    if ($l9am) {
                        if (_euw2g['endElement'](cb$myl['uri'], cb$myl['localName'], fnsj), w4euo) {
                            for (var xsj1nf in w4euo) _euw2g['endPrefixMapping'](xsj1nf);
                        }
                        sfxjv || la9$b['fatalError']('end tag name: ' + fnsj + ' is not match the current start tagName:' + cb$myl['tagName']);
                    } else t8r375['push'](cb$myl);
                    bcy4++;
                    break;
                case '?':
                    c_4y && khqz6d(g4_we), bcy4 = gq7t5r8(jvshzn, g4_we, _euw2g);
                    break;
                case '!':
                    c_4y && khqz6d(g4_we), bcy4 = gyo0bc4(jvshzn, g4_we, _euw2g, la9$b);
                    break;
                default:
                    c_4y && khqz6d(g4_we);
                    var jxsfn = new g$mcyb(),
                        eu_w4g = t8r375[t8r375['length'] - 0x1]['currentNSMap'],
                        bcy4 = gjnhsvx(jvshzn, g4_we, jxsfn, eu_w4g, sj1fxn, la9$b),
                        bc0$y = jxsfn['length'];
                    if (!jxsfn['closed'] && g_wug2(jvshzn, bcy4, jxsfn['tagName'], w1e2ug) && (jxsfn['closed'] = !0x0, h6nkz['nbsp'] || la9$b['warning']('unclosed xml attribute')), c_4y && bc0$y) {
                        for (var dt86qr = gc0ly$(c_4y, {}), kt8d6q = 0x0; bc0$y > kt8d6q; kt8d6q++) {
                            var qdhk = jxsfn[kt8d6q];
                            khqz6d(qdhk['offset']), qdhk['locator'] = gc0ly$(c_4y, {});
                        }
                        _euw2g['locator'] = dt86qr, gnxsfvj(jxsfn, _euw2g, eu_w4g) && t8r375['push'](jxsfn), _euw2g['locator'] = c_4y;
                    } else gnxsfvj(jxsfn, _euw2g, eu_w4g) && t8r375['push'](jxsfn);
                    'http://www.w3.org/1999/xhtml' !== jxsfn['uri'] || jxsfn['closed'] ? bcy4++ : bcy4 = gjx1fs(jvshzn, bcy4, jxsfn['tagName'], sj1fxn, _euw2g);
            }
        } catch (g2) {
            la9$b['error']('element parse error: ' + g2), bcy4 = -0x1;
        }
        bcy4 > qtrd ? qtrd = bcy4 : hkzjvn(Math['max'](g4_we, qtrd) + 0x1);
    }
}
function gc0ly$(fsnvx, g4u_ew) {
    return g4u_ew['lineNumber'] = fsnvx['lineNumber'], g4u_ew['columnNumber'] = fsnvx['columnNumber'], g4u_ew;
}
function gjnhsvx(g1fsx, w4_uge, wu4_, t7rq85, gs1x2, dk6t8q) {
    for (var bo0c$, p5r37, nzjkvh = ++w4_uge, _ueg = gw_oe4u;;) {
        var y_co = g1fsx['charAt'](nzjkvh);
        switch (y_co) {
            case '=':
                if (_ueg === g_0y4oc) bo0c$ = g1fsx['slice'](w4_uge, nzjkvh), _ueg = gznkh;else {
                    if (_ueg !== gq5drt) throw new Error('attribute equal must after attrName');
                    _ueg = gznkh;
                }
                break;
            case '\x27':
            case '\x22':
                if (_ueg === gznkh || _ueg === g_0y4oc) {
                    if (_ueg === g_0y4oc && (dk6t8q['warning']('attribute value must after "="'), bo0c$ = g1fsx['slice'](w4_uge, nzjkvh)), w4_uge = nzjkvh + 0x1, nzjkvh = g1fsx['indexOf'](y_co, w4_uge), !(nzjkvh > 0x0)) throw new Error('attribute value no end \'' + y_co + '\' match');
                    p5r37 = g1fsx['slice'](w4_uge, nzjkvh)['replace'](/&#?\w+;/g, gs1x2), wu4_['add'](bo0c$, p5r37, w4_uge - 0x1), _ueg = gbl0y$;
                } else {
                    if (_ueg != gg_u2w) throw new Error('attribute value must after "="');
                    p5r37 = g1fsx['slice'](w4_uge, nzjkvh)['replace'](/&#?\w+;/g, gs1x2), wu4_['add'](bo0c$, p5r37, w4_uge), dk6t8q['warning']('attribute "' + bo0c$ + '" missed start quot(' + y_co + ')!!'), w4_uge = nzjkvh + 0x1, _ueg = gbl0y$;
                }
                break;
            case '/':
                switch (_ueg) {
                    case gw_oe4u:
                        wu4_['setTagName'](g1fsx['slice'](w4_uge, nzjkvh));
                    case gbl0y$:
                    case gu1f2gx:
                    case gb$y0:
                        _ueg = gb$y0, wu4_['closed'] = !0x0;
                    case gg_u2w:
                    case g_0y4oc:
                    case gq5drt:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return dk6t8q['error']('unexpected end of input'), _ueg == gw_oe4u && wu4_['setTagName'](g1fsx['slice'](w4_uge, nzjkvh)), nzjkvh;
            case '>':
                switch (_ueg) {
                    case gw_oe4u:
                        wu4_['setTagName'](g1fsx['slice'](w4_uge, nzjkvh));
                    case gbl0y$:
                    case gu1f2gx:
                    case gb$y0:
                        break;
                    case gg_u2w:
                    case g_0y4oc:
                        p5r37 = g1fsx['slice'](w4_uge, nzjkvh), '/' === p5r37['slice'](-0x1) && (wu4_['closed'] = !0x0, p5r37 = p5r37['slice'](0x0, -0x1));
                    case gq5drt:
                        _ueg === gq5drt && (p5r37 = bo0c$), _ueg == gg_u2w ? (dk6t8q['warning']('attribute "' + p5r37 + '" missed quot(")!!'), wu4_['add'](bo0c$, p5r37['replace'](/&#?\w+;/g, gs1x2), w4_uge)) : ('http://www.w3.org/1999/xhtml' === t7rq85[''] && p5r37['match'](/^(?:disabled|checked|selected)$/i) || dk6t8q['warning']('attribute "' + p5r37 + '" missed value!! "' + p5r37 + '" instead!!'), wu4_['add'](p5r37, p5r37, w4_uge));
                        break;
                    case gznkh:
                        throw new Error('attribute value missed!!');
                }
                return nzjkvh;
            case '\u0080':
                y_co = '\x20';
            default:
                if ('\x20' >= y_co) switch (_ueg) {
                    case gw_oe4u:
                        wu4_['setTagName'](g1fsx['slice'](w4_uge, nzjkvh)), _ueg = gu1f2gx;
                        break;
                    case g_0y4oc:
                        bo0c$ = g1fsx['slice'](w4_uge, nzjkvh), _ueg = gq5drt;
                        break;
                    case gg_u2w:
                        var p5r37 = g1fsx['slice'](w4_uge, nzjkvh)['replace'](/&#?\w+;/g, gs1x2);
                        dk6t8q['warning']('attribute "' + p5r37 + '" missed quot(")!!'), wu4_['add'](bo0c$, p5r37, w4_uge);
                    case gbl0y$:
                        _ueg = gu1f2gx;
                } else switch (_ueg) {
                    case gq5drt:
                        {
                            wu4_['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === t7rq85[''] && bo0c$['match'](/^(?:disabled|checked|selected)$/i) || dk6t8q['warning']('attribute "' + bo0c$ + '" missed value!! "' + bo0c$ + '" instead2!!'), wu4_['add'](bo0c$, bo0c$, w4_uge), w4_uge = nzjkvh, _ueg = g_0y4oc;
                        break;
                    case gbl0y$:
                        dk6t8q['warning']('attribute space is required"' + bo0c$ + '\x22!!');
                    case gu1f2gx:
                        _ueg = g_0y4oc, w4_uge = nzjkvh;
                        break;
                    case gznkh:
                        _ueg = gg_u2w, w4_uge = nzjkvh;
                        break;
                    case gb$y0:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        nzjkvh++;
    }
}
function gnxsfvj(nzvjhk, lcb$a, dvhkz) {
    for (var hnsjv = nzvjhk['tagName'], vzh6nk = null, h6qdzk = nzvjhk['length']; h6qdzk--;) {
        var ew4_ug = nzvjhk[h6qdzk],
            ybcm = ew4_ug['qName'],
            z8qkd = ew4_ug['value'],
            jznvhk = ybcm['indexOf'](':');
        if (jznvhk > 0x0) var _w4ge = ew4_ug['prefix'] = ybcm['slice'](0x0, jznvhk),
            eu4w_g = ybcm['slice'](jznvhk + 0x1),
            kzvnjh = 'xmlns' === _w4ge && eu4w_g;else eu4w_g = ybcm, _w4ge = null, kzvnjh = 'xmlns' === ybcm && '';
        ew4_ug['localName'] = eu4w_g, kzvnjh !== !0x1 && (null == vzh6nk && (vzh6nk = {}, gr58(dvhkz, dvhkz = {})), dvhkz[kzvnjh] = vzh6nk[kzvnjh] = z8qkd, ew4_ug['uri'] = 'http://www.w3.org/2000/xmlns/', lcb$a['startPrefixMapping'](kzvnjh, z8qkd));
    }
    for (var h6qdzk = nzvjhk['length']; h6qdzk--;) {
        ew4_ug = nzvjhk[h6qdzk];
        var _w4ge = ew4_ug['prefix'];
        _w4ge && ('xml' === _w4ge && (ew4_ug['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== _w4ge && (ew4_ug['uri'] = dvhkz[_w4ge || '']));
    }
    var jznvhk = hnsjv['indexOf'](':');
    jznvhk > 0x0 ? (_w4ge = nzvjhk['prefix'] = hnsjv['slice'](0x0, jznvhk), eu4w_g = nzvjhk['localName'] = hnsjv['slice'](jznvhk + 0x1)) : (_w4ge = null, eu4w_g = nzvjhk['localName'] = hnsjv);
    var pir37 = nzvjhk['uri'] = dvhkz[_w4ge || ''];
    if (lcb$a['startElement'](pir37, eu4w_g, hnsjv, nzvjhk), !nzvjhk['closed']) return nzvjhk['currentNSMap'] = dvhkz, nzvjhk['localNSMap'] = vzh6nk, !0x0;
    if (lcb$a['endElement'](pir37, eu4w_g, hnsjv), vzh6nk) {
        for (_w4ge in vzh6nk) lcb$a['endPrefixMapping'](_w4ge);
    }
}
function gjx1fs(zhvjns, e4u, zsvnhj, k6dqh, rp7t3) {
    if (/^(?:script|textarea)$/i['test'](zsvnhj)) {
        var yo_e = zhvjns['indexOf']('</' + zsvnhj + '>', e4u),
            ri57p = zhvjns['substring'](e4u + 0x1, yo_e);
        if (/[&<]/['test'](ri57p)) return (/^script$/i['test'](zsvnhj) ? (rp7t3['characters'](ri57p, 0x0, ri57p['length']), yo_e) : (ri57p = ri57p['replace'](/&#?\w+;/g, k6dqh), rp7t3['characters'](ri57p, 0x0, ri57p['length']), yo_e)
        );
    }
    return e4u + 0x1;
}
function g_wug2(ycbo$0, eo4y_, nfsx, k6zvhd) {
    var nhvsjz = k6zvhd[nfsx];
    return null == nhvsjz && (nhvsjz = ycbo$0['lastIndexOf']('</' + nfsx + '>'), eo4y_ > nhvsjz && (nhvsjz = ycbo$0['lastIndexOf']('</' + nfsx)), k6zvhd[nfsx] = nhvsjz), eo4y_ > nhvsjz;
}
function gr58(vzkjnh, dvk6hz) {
    for (var r5t in vzkjnh) dvk6hz[r5t] = vzkjnh[r5t];
}
function gyo0bc4(m$lab9, szjvhn, kt68qd, f12xgs) {
    var cybo04 = m$lab9['charAt'](szjvhn + 0x2);
    switch (cybo04) {
        case '-':
            if ('-' === m$lab9['charAt'](szjvhn + 0x3)) {
                var g1u2 = m$lab9['indexOf']('-->', szjvhn + 0x4);
                return g1u2 > szjvhn ? (kt68qd['comment'](m$lab9, szjvhn + 0x4, g1u2 - szjvhn - 0x4), g1u2 + 0x3) : (f12xgs['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == m$lab9['substr'](szjvhn + 0x3, 0x6)) {
                var g1u2 = m$lab9['indexOf'](']]>', szjvhn + 0x9);
                return kt68qd['startCDATA'](), kt68qd['characters'](m$lab9, szjvhn + 0x9, g1u2 - szjvhn - 0x9), kt68qd['endCDATA'](), g1u2 + 0x3;
            }
            var uwg4 = gjnvzh(m$lab9, szjvhn),
                u4ew = uwg4['length'];
            if (u4ew > 0x1 && /!doctype/i['test'](uwg4[0x0][0x0])) {
                var eu_gw4 = uwg4[0x1][0x0],
                    u12fwg = u4ew > 0x3 && /^public$/i['test'](uwg4[0x2][0x0]) && uwg4[0x3][0x0],
                    bacm$ = u4ew > 0x4 && uwg4[0x4][0x0],
                    jzvhnk = uwg4[u4ew - 0x1];
                return kt68qd['startDTD'](eu_gw4, u12fwg && u12fwg['replace'](/^(['"])(.*?)\1$/, '$2'), bacm$ && bacm$['replace'](/^(['"])(.*?)\1$/, '$2')), kt68qd['endDTD'](), jzvhnk['index'] + jzvhnk[0x0]['length'];
            }
    }
    return -0x1;
}
function gq7t5r8(sjfxn1, oyc, yb$lc0) {
    var $alb9m = sjfxn1['indexOf']('?>', oyc);
    if ($alb9m) {
        var kqt86 = sjfxn1['substring'](oyc, $alb9m)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (kqt86) {
            {
                kqt86[0x0]['length'];
            }
            return yb$lc0['processingInstruction'](kqt86[0x1], kqt86[0x2]), $alb9m + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function g$mcyb() {}
function gvsjnz(zhqk6, vzkn6h) {
    return zhqk6['__proto__'] = vzkn6h, zhqk6;
}
function gjnvzh(d86zqk, weo40) {
    var oc$yb0,
        hsvxj = [],
        balm$c = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (balm$c['lastIndex'] = weo40, balm$c['exec'](d86zqk); oc$yb0 = balm$c['exec'](d86zqk);) if (hsvxj['push'](oc$yb0), oc$yb0[0x1]) return hsvxj;
}
var gsvnhj = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    ggf21uw = new RegExp('[\\-\\.0-9' + gsvnhj['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    gdzkvh = new RegExp('^' + gsvnhj['source'] + ggf21uw['source'] + '*(?::' + gsvnhj['source'] + ggf21uw['source'] + '*)?$'),
    gw_oe4u = 0x0,
    g_0y4oc = 0x1,
    gq5drt = 0x2,
    gznkh = 0x3,
    gg_u2w = 0x4,
    gbl0y$ = 0x5,
    gu1f2gx = 0x6,
    gb$y0 = 0x7;
go4u_we['prototype'] = {
    'parse': function (a9$bl, hzq6dk, o0cy_) {
        var fsg12x = this['domBuilder'];
        fsg12x['startDocument'](), gr58(hzq6dk, hzq6dk = {}), gzkh6dq(a9$bl, hzq6dk, o0cy_, fsg12x, this['errorHandler']), fsg12x['endDocument']();
    }
}, g$mcyb['prototype'] = {
    'setTagName': function (jnhvxs) {
        if (!gdzkvh['test'](jnhvxs)) throw new Error('invalid tagName:' + jnhvxs);
        this['tagName'] = jnhvxs;
    },
    'add': function (t537r8, $0ybo, b$yco) {
        if (!gdzkvh['test'](t537r8)) throw new Error('invalid attribute:' + t537r8);
        this[this['length']++] = {
            'qName': t537r8,
            'value': $0ybo,
            'offset': b$yco
        };
    },
    'length': 0x0,
    'getLocalName': function (zvjhn) {
        return this[zvjhn]['localName'];
    },
    'getLocator': function (hd6zqk) {
        return this[hd6zqk]['locator'];
    },
    'getQName': function (q6dr8t) {
        return this[q6dr8t]['qName'];
    },
    'getURI': function (e2_gu) {
        return this[e2_gu]['uri'];
    },
    'getValue': function (vjszh) {
        return this[vjszh]['value'];
    }
}, gvsjnz({}, gvsjnz['prototype']) instanceof gvsjnz || (gvsjnz = function (vhz6n, t8dq) {
    function _o04yc() {}
    _o04yc['prototype'] = t8dq, _o04yc = new _o04yc();
    for (t8dq in vhz6n) _o04yc[t8dq] = vhz6n[t8dq];
    return _o04yc;
}), exports['XMLReader'] = go4u_we;