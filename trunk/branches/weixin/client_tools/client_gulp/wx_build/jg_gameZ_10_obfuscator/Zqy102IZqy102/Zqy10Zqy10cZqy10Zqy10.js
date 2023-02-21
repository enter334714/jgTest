var J = wx.h$;
function gjovyr5() {}
function gbr5qo(dgk0bq, _etph, anu143, gtcd6, s2wf9$) {
    function h6d8c(_2zhpe) {
        if (_2zhpe > 0xffff) {
            _2zhpe -= 0x10000;
            var ch8z6t = 0xd800 + (_2zhpe >> 0xa),
                ui31n4 = 0xdc00 + (0x3ff & _2zhpe);
            return String['fromCharCode'](ch8z6t, ui31n4);
        }
        return String['fromCharCode'](_2zhpe);
    }
    function z2ew(cpezth) {
        var yo7rv = cpezth['slice'](0x1, -0x1);
        return yo7rv in anu143 ? anu143[yo7rv] : '#' === yo7rv['charAt'](0x0) ? h6d8c(parseInt(yo7rv['substr'](0x1)['replace']('x', '0x'))) : (s2wf9$['error']('entity not found:' + cpezth), cpezth);
    }
    function ul4m3(q0o5kb) {
        if (q0o5kb > aul31) {
            var j7xrvy = dgk0bq['substring'](aul31, q0o5kb)['replace'](/&#?\w+;/g, z2ew);
            bryoq5 && n47ix1(aul31), gtcd6['characters'](j7xrvy, 0x0, q0o5kb - aul31), aul31 = q0o5kb;
        }
    }
    function n47ix1(s2$w, e2z_hp) {
        for (; s2$w >= w_2zep && (e2z_hp = y5or['exec'](dgk0bq));) e_2h = e2z_hp['index'], w_2zep = e_2h + e2z_hp[0x0]['length'], bryoq5['lineNumber']++;
        bryoq5['columnNumber'] = s2$w - e_2h + 0x1;
    }
    for (var e_2h = 0x0, w_2zep = 0x0, y5or = /.*(?:\r\n?|\n)|.*$/g, bryoq5 = gtcd6['locator'], qg5kb = [{ 'currentNSMap': _etph }], vyxj7 = {}, aul31 = 0x0;;) {
        try {
            var ck86gd = dgk0bq['indexOf']('<', aul31);
            if (0x0 > ck86gd) {
                if (!dgk0bq['substr'](aul31)['match'](/^\s*$/)) {
                    var ivjxr7 = gtcd6['doc'],
                        zth68 = ivjxr7['createTextNode'](dgk0bq['substr'](aul31));
                    ivjxr7['appendChild'](zth68), gtcd6['currentElement'] = zth68;
                }
                return;
            }
            switch (ck86gd > aul31 && ul4m3(ck86gd), dgk0bq['charAt'](ck86gd + 0x1)) {
                case '/':
                    var r7yov = dgk0bq['indexOf']('>', ck86gd + 0x3),
                        _p2fw9 = dgk0bq['substring'](ck86gd + 0x2, r7yov),
                        xj7y = qg5kb['pop']();
                    0x0 > r7yov ? (_p2fw9 = dgk0bq['substring'](ck86gd + 0x2)['replace'](/[\s<].*/, ''), s2wf9$['error']('end tag name: ' + _p2fw9 + ' is not complete:' + xj7y['tagName']), r7yov = ck86gd + 0x1 + _p2fw9['length']) : _p2fw9['match'](/\s</) && (_p2fw9 = _p2fw9['replace'](/[\s<].*/, ''), s2wf9$['error']('end tag name: ' + _p2fw9 + ' maybe not complete'), r7yov = ck86gd + 0x1 + _p2fw9['length']);
                    var p9_f2 = xj7y['localNSMap'],
                        hz2_ep = xj7y['tagName'] == _p2fw9,
                        t6zh8c = hz2_ep || xj7y['tagName'] && xj7y['tagName']['toLowerCase']() == _p2fw9['toLowerCase']();
                    if (t6zh8c) {
                        if (gtcd6['endElement'](xj7y['uri'], xj7y['localName'], _p2fw9), p9_f2) {
                            for (var oyqbr5 in p9_f2) gtcd6['endPrefixMapping'](oyqbr5);
                        }
                        hz2_ep || s2wf9$['fatalError']('end tag name: ' + _p2fw9 + ' is not match the current start tagName:' + xj7y['tagName']);
                    } else qg5kb['push'](xj7y);
                    r7yov++;
                    break;
                case '?':
                    bryoq5 && n47ix1(ck86gd), r7yov = g_fw2p9(dgk0bq, ck86gd, gtcd6);
                    break;
                case '!':
                    bryoq5 && n47ix1(ck86gd), r7yov = gd6kgc8(dgk0bq, ck86gd, gtcd6, s2wf9$);
                    break;
                default:
                    bryoq5 && n47ix1(ck86gd);
                    var i13xn4 = new gkdgq0(),
                        rv5yqo = qg5kb[qg5kb['length'] - 0x1]['currentNSMap'],
                        r7yov = gy0b(dgk0bq, ck86gd, i13xn4, rv5yqo, z2ew, s2wf9$),
                        bok0q5 = i13xn4['length'];
                    if (!i13xn4['closed'] && gq5bro(dgk0bq, r7yov, i13xn4['tagName'], vyxj7) && (i13xn4['closed'] = !0x0, anu143['nbsp'] || s2wf9$['warning']('unclosed xml attribute')), bryoq5 && bok0q5) {
                        for (var g0b5kq = ggc6d(bryoq5, {}), u31i4n = 0x0; bok0q5 > u31i4n; u31i4n++) {
                            var wpe9 = i13xn4[u31i4n];
                            n47ix1(wpe9['offset']), wpe9['locator'] = ggc6d(bryoq5, {});
                        }
                        gtcd6['locator'] = g0b5kq, gbk5q0o(i13xn4, gtcd6, rv5yqo) && qg5kb['push'](i13xn4), gtcd6['locator'] = bryoq5;
                    } else gbk5q0o(i13xn4, gtcd6, rv5yqo) && qg5kb['push'](i13xn4);
                    'http://www.w3.org/1999/xhtml' !== i13xn4['uri'] || i13xn4['closed'] ? r7yov++ : r7yov = gjvinx(dgk0bq, r7yov, i13xn4['tagName'], z2ew, gtcd6);
            }
        } catch (e_2zpw) {
            s2wf9$['error']('element parse error: ' + e_2zpw), r7yov = -0x1;
        }
        r7yov > aul31 ? aul31 = r7yov : ul4m3(Math['max'](ck86gd, aul31) + 0x1);
    }
}
function ggc6d(w2$_f, b0d6k) {
    return b0d6k['lineNumber'] = w2$_f['lineNumber'], b0d6k['columnNumber'] = w2$_f['columnNumber'], b0d6k;
}
function gy0b(u31a4, l3mu4, dkc68g, wp2_9, vro7jy, or5jvy) {
    for (var _92fw$, nixv7j, c6z8h = ++l3mu4, or7y = gp_zh2e;;) {
        var kgb = u31a4['charAt'](c6z8h);
        switch (kgb) {
            case '=':
                if (or7y === glma4u3) _92fw$ = u31a4['slice'](l3mu4, c6z8h), or7y = gbd0gq;else {
                    if (or7y !== gvor7j) throw new Error('attribute equal must after attrName');
                    or7y = gbd0gq;
                }
                break;
            case '\x27':
            case '\x22':
                if (or7y === gbd0gq || or7y === glma4u3) {
                    if (or7y === glma4u3 && (or5jvy['warning']('attribute value must after "="'), _92fw$ = u31a4['slice'](l3mu4, c6z8h)), l3mu4 = c6z8h + 0x1, c6z8h = u31a4['indexOf'](kgb, l3mu4), !(c6z8h > 0x0)) throw new Error('attribute value no end \'' + kgb + '\' match');
                    nixv7j = u31a4['slice'](l3mu4, c6z8h)['replace'](/&#?\w+;/g, vro7jy), dkc68g['add'](_92fw$, nixv7j, l3mu4 - 0x1), or7y = gni1x74;
                } else {
                    if (or7y != gko5q0) throw new Error('attribute value must after "="');
                    nixv7j = u31a4['slice'](l3mu4, c6z8h)['replace'](/&#?\w+;/g, vro7jy), dkc68g['add'](_92fw$, nixv7j, l3mu4), or5jvy['warning']('attribute "' + _92fw$ + '" missed start quot(' + kgb + ')!!'), l3mu4 = c6z8h + 0x1, or7y = gni1x74;
                }
                break;
            case '/':
                switch (or7y) {
                    case gp_zh2e:
                        dkc68g['setTagName'](u31a4['slice'](l3mu4, c6z8h));
                    case gni1x74:
                    case gn41ua:
                    case gw_92p:
                        or7y = gw_92p, dkc68g['closed'] = !0x0;
                    case gko5q0:
                    case glma4u3:
                    case gvor7j:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return or5jvy['error']('unexpected end of input'), or7y == gp_zh2e && dkc68g['setTagName'](u31a4['slice'](l3mu4, c6z8h)), c6z8h;
            case '>':
                switch (or7y) {
                    case gp_zh2e:
                        dkc68g['setTagName'](u31a4['slice'](l3mu4, c6z8h));
                    case gni1x74:
                    case gn41ua:
                    case gw_92p:
                        break;
                    case gko5q0:
                    case glma4u3:
                        nixv7j = u31a4['slice'](l3mu4, c6z8h), '/' === nixv7j['slice'](-0x1) && (dkc68g['closed'] = !0x0, nixv7j = nixv7j['slice'](0x0, -0x1));
                    case gvor7j:
                        or7y === gvor7j && (nixv7j = _92fw$), or7y == gko5q0 ? (or5jvy['warning']('attribute "' + nixv7j + '" missed quot(")!!'), dkc68g['add'](_92fw$, nixv7j['replace'](/&#?\w+;/g, vro7jy), l3mu4)) : ('http://www.w3.org/1999/xhtml' === wp2_9[''] && nixv7j['match'](/^(?:disabled|checked|selected)$/i) || or5jvy['warning']('attribute "' + nixv7j + '" missed value!! "' + nixv7j + '" instead!!'), dkc68g['add'](nixv7j, nixv7j, l3mu4));
                        break;
                    case gbd0gq:
                        throw new Error('attribute value missed!!');
                }
                return c6z8h;
            case '\u0080':
                kgb = '\x20';
            default:
                if ('\x20' >= kgb) switch (or7y) {
                    case gp_zh2e:
                        dkc68g['setTagName'](u31a4['slice'](l3mu4, c6z8h)), or7y = gn41ua;
                        break;
                    case glma4u3:
                        _92fw$ = u31a4['slice'](l3mu4, c6z8h), or7y = gvor7j;
                        break;
                    case gko5q0:
                        var nixv7j = u31a4['slice'](l3mu4, c6z8h)['replace'](/&#?\w+;/g, vro7jy);
                        or5jvy['warning']('attribute "' + nixv7j + '" missed quot(")!!'), dkc68g['add'](_92fw$, nixv7j, l3mu4);
                    case gni1x74:
                        or7y = gn41ua;
                } else switch (or7y) {
                    case gvor7j:
                        {
                            dkc68g['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === wp2_9[''] && _92fw$['match'](/^(?:disabled|checked|selected)$/i) || or5jvy['warning']('attribute "' + _92fw$ + '" missed value!! "' + _92fw$ + '" instead2!!'), dkc68g['add'](_92fw$, _92fw$, l3mu4), l3mu4 = c6z8h, or7y = glma4u3;
                        break;
                    case gni1x74:
                        or5jvy['warning']('attribute space is required"' + _92fw$ + '\x22!!');
                    case gn41ua:
                        or7y = glma4u3, l3mu4 = c6z8h;
                        break;
                    case gbd0gq:
                        or7y = gko5q0, l3mu4 = c6z8h;
                        break;
                    case gw_92p:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        c6z8h++;
    }
}
function gbk5q0o(dk086, techz, yoqrb) {
    for (var a4mul3 = dk086['tagName'], zp_w = null, ry7vj = dk086['length']; ry7vj--;) {
        var k0dgqb = dk086[ry7vj],
            v7jrxy = k0dgqb['qName'],
            ojyr5 = k0dgqb['value'],
            dc8t6 = v7jrxy['indexOf'](':');
        if (dc8t6 > 0x0) var te_zhp = k0dgqb['prefix'] = v7jrxy['slice'](0x0, dc8t6),
            f9$w2s = v7jrxy['slice'](dc8t6 + 0x1),
            ml43a = 'xmlns' === te_zhp && f9$w2s;else f9$w2s = v7jrxy, te_zhp = null, ml43a = 'xmlns' === v7jrxy && '';
        k0dgqb['localName'] = f9$w2s, ml43a !== !0x1 && (null == zp_w && (zp_w = {}, gd0g86(yoqrb, yoqrb = {})), yoqrb[ml43a] = zp_w[ml43a] = ojyr5, k0dgqb['uri'] = 'http://www.w3.org/2000/xmlns/', techz['startPrefixMapping'](ml43a, ojyr5));
    }
    for (var ry7vj = dk086['length']; ry7vj--;) {
        k0dgqb = dk086[ry7vj];
        var te_zhp = k0dgqb['prefix'];
        te_zhp && ('xml' === te_zhp && (k0dgqb['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== te_zhp && (k0dgqb['uri'] = yoqrb[te_zhp || '']));
    }
    var dc8t6 = a4mul3['indexOf'](':');
    dc8t6 > 0x0 ? (te_zhp = dk086['prefix'] = a4mul3['slice'](0x0, dc8t6), f9$w2s = dk086['localName'] = a4mul3['slice'](dc8t6 + 0x1)) : (te_zhp = null, f9$w2s = dk086['localName'] = a4mul3);
    var v7ry = dk086['uri'] = yoqrb[te_zhp || ''];
    if (techz['startElement'](v7ry, f9$w2s, a4mul3, dk086), !dk086['closed']) return dk086['currentNSMap'] = yoqrb, dk086['localNSMap'] = zp_w, !0x0;
    if (techz['endElement'](v7ry, f9$w2s, a4mul3), zp_w) {
        for (te_zhp in zp_w) techz['endPrefixMapping'](te_zhp);
    }
}
function gjvinx(thcze, q5ok0, n4a3, _fw2p, a1l4u3) {
    if (/^(?:script|textarea)$/i['test'](n4a3)) {
        var p_te = thcze['indexOf']('</' + n4a3 + '>', q5ok0),
            u3ni = thcze['substring'](q5ok0 + 0x1, p_te);
        if (/[&<]/['test'](u3ni)) return (/^script$/i['test'](n4a3) ? (a1l4u3['characters'](u3ni, 0x0, u3ni['length']), p_te) : (u3ni = u3ni['replace'](/&#?\w+;/g, _fw2p), a1l4u3['characters'](u3ni, 0x0, u3ni['length']), p_te)
        );
    }
    return q5ok0 + 0x1;
}
function gq5bro(i7jxvr, jry7ov, zphet_, gb6k0d) {
    var _peh = gb6k0d[zphet_];
    return null == _peh && (_peh = i7jxvr['lastIndexOf']('</' + zphet_ + '>'), jry7ov > _peh && (_peh = i7jxvr['lastIndexOf']('</' + zphet_)), gb6k0d[zphet_] = _peh), jry7ov > _peh;
}
function gd0g86(zph_2, v7orj) {
    for (var gbd6k0 in zph_2) v7orj[gbd6k0] = zph_2[gbd6k0];
}
function gd6kgc8(s92$wf, gb5, vrxij7, n47x) {
    var l43ua = s92$wf['charAt'](gb5 + 0x2);
    switch (l43ua) {
        case '-':
            if ('-' === s92$wf['charAt'](gb5 + 0x3)) {
                var ixn714 = s92$wf['indexOf']('-->', gb5 + 0x4);
                return ixn714 > gb5 ? (vrxij7['comment'](s92$wf, gb5 + 0x4, ixn714 - gb5 - 0x4), ixn714 + 0x3) : (n47x['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == s92$wf['substr'](gb5 + 0x3, 0x6)) {
                var ixn714 = s92$wf['indexOf'](']]>', gb5 + 0x9);
                return vrxij7['startCDATA'](), vrxij7['characters'](s92$wf, gb5 + 0x9, ixn714 - gb5 - 0x9), vrxij7['endCDATA'](), ixn714 + 0x3;
            }
            var xv7yr = ga31ul4(s92$wf, gb5),
                tczh8 = xv7yr['length'];
            if (tczh8 > 0x1 && /!doctype/i['test'](xv7yr[0x0][0x0])) {
                var xij1n7 = xv7yr[0x1][0x0],
                    g86d = tczh8 > 0x3 && /^public$/i['test'](xv7yr[0x2][0x0]) && xv7yr[0x3][0x0],
                    cdh = tczh8 > 0x4 && xv7yr[0x4][0x0],
                    la43 = xv7yr[tczh8 - 0x1];
                return vrxij7['startDTD'](xij1n7, g86d && g86d['replace'](/^(['"])(.*?)\1$/, '$2'), cdh && cdh['replace'](/^(['"])(.*?)\1$/, '$2')), vrxij7['endDTD'](), la43['index'] + la43[0x0]['length'];
            }
    }
    return -0x1;
}
function g_fw2p9(u3lm, rjovy, _$wf92) {
    var p92f_w = u3lm['indexOf']('?>', rjovy);
    if (p92f_w) {
        var s9w$f2 = u3lm['substring'](rjovy, p92f_w)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (s9w$f2) {
            {
                s9w$f2[0x0]['length'];
            }
            return _$wf92['processingInstruction'](s9w$f2[0x1], s9w$f2[0x2]), p92f_w + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function gkdgq0() {}
function gvrj5yo(_pzeth, p_wze) {
    return _pzeth['__proto__'] = p_wze, _pzeth;
}
function ga31ul4(i7nx4, n7xvij) {
    var d6k8g,
        y05obq = [],
        eczpth = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (eczpth['lastIndex'] = n7xvij, eczpth['exec'](i7nx4); d6k8g = eczpth['exec'](i7nx4);) if (y05obq['push'](d6k8g), d6k8g[0x1]) return y05obq;
}
var gin7xv = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    ghtec8z = new RegExp('[\\-\\.0-9' + gin7xv['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    g_2ezhp = new RegExp('^' + gin7xv['source'] + ghtec8z['source'] + '*(?::' + gin7xv['source'] + ghtec8z['source'] + '*)?$'),
    gp_zh2e = 0x0,
    glma4u3 = 0x1,
    gvor7j = 0x2,
    gbd0gq = 0x3,
    gko5q0 = 0x4,
    gni1x74 = 0x5,
    gn41ua = 0x6,
    gw_92p = 0x7;
gjovyr5['prototype'] = {
    'parse': function (nx31i, jn71, w2f$s9) {
        var td68 = this['domBuilder'];
        td68['startDocument'](), gd0g86(jn71, jn71 = {}), gbr5qo(nx31i, jn71, w2f$s9, td68, this['errorHandler']), td68['endDocument']();
    }
}, gkdgq0['prototype'] = {
    'setTagName': function (q0dg) {
        if (!g_2ezhp['test'](q0dg)) throw new Error('invalid tagName:' + q0dg);
        this['tagName'] = q0dg;
    },
    'add': function (j7i, i1x43n, v5jo) {
        if (!g_2ezhp['test'](j7i)) throw new Error('invalid attribute:' + j7i);
        this[this['length']++] = {
            'qName': j7i,
            'value': i1x43n,
            'offset': v5jo
        };
    },
    'length': 0x0,
    'getLocalName': function (zh68c) {
        return this[zh68c]['localName'];
    },
    'getLocator': function (xj7vin) {
        return this[xj7vin]['locator'];
    },
    'getQName': function (th_pez) {
        return this[th_pez]['qName'];
    },
    'getURI': function (al41) {
        return this[al41]['uri'];
    },
    'getValue': function (bqo5k0) {
        return this[bqo5k0]['value'];
    }
}, gvrj5yo({}, gvrj5yo['prototype']) instanceof gvrj5yo || (gvrj5yo = function (zt_ep, u3la14) {
    function xv7ry() {}
    xv7ry['prototype'] = u3la14, xv7ry = new xv7ry();
    for (u3la14 in zt_ep) xv7ry[u3la14] = zt_ep[u3la14];
    return xv7ry;
}), exports['XMLReader'] = gjovyr5;