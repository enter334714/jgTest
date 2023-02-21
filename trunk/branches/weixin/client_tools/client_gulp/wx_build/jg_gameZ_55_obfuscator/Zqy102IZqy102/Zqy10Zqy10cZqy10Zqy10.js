var J = wx.h$;
function gcovi() {}
function g_ef8s(zp7t, _hfe, hf_d8e, ql0$gx, $kvx0) {
    function mtaw76(_3sh8f) {
        if (_3sh8f > 0xffff) {
            _3sh8f -= 0x10000;
            var hdue5 = 0xd800 + (_3sh8f >> 0xa),
                r23w8 = 0xdc00 + (0x3ff & _3sh8f);
            return String['fromCharCode'](hdue5, r23w8);
        }
        return String['fromCharCode'](_3sh8f);
    }
    function fdhe(ivnko) {
        var tmw7a6 = ivnko['slice'](0x1, -0x1);
        return tmw7a6 in hf_d8e ? hf_d8e[tmw7a6] : '#' === tmw7a6['charAt'](0x0) ? mtaw76(parseInt(tmw7a6['substr'](0x1)['replace']('x', '0x'))) : ($kvx0['error']('entity not found:' + ivnko), ivnko);
    }
    function _dfh(w72at) {
        if (w72at > e4fh_d) {
            var lpz19y = zp7t['substring'](e4fh_d, w72at)['replace'](/&#?\w+;/g, fdhe);
            jnoic && _sh8(e4fh_d), ql0$gx['characters'](lpz19y, 0x0, w72at - e4fh_d), e4fh_d = w72at;
        }
    }
    function _sh8($xkqg, eubd) {
        for (; $xkqg >= ypz169 && (eubd = q1yl9['exec'](zp7t));) mzt1p = eubd['index'], ypz169 = mzt1p + eubd[0x0]['length'], jnoic['lineNumber']++;
        jnoic['columnNumber'] = $xkqg - mzt1p + 0x1;
    }
    for (var mzt1p = 0x0, ypz169 = 0x0, q1yl9 = /.*(?:\r\n?|\n)|.*$/g, jnoic = ql0$gx['locator'], y61p9z = [{ 'currentNSMap': _hfe }], gqxly = {}, e4fh_d = 0x0;;) {
        try {
            var yq9l1g = zp7t['indexOf']('<', e4fh_d);
            if (0x0 > yq9l1g) {
                if (!zp7t['substr'](e4fh_d)['match'](/^\s*$/)) {
                    var eu45d = ql0$gx['doc'],
                        g9l$y = eu45d['createTextNode'](zp7t['substr'](e4fh_d));
                    eu45d['appendChild'](g9l$y), ql0$gx['currentElement'] = g9l$y;
                }
                return;
            }
            switch (yq9l1g > e4fh_d && _dfh(yq9l1g), zp7t['charAt'](yq9l1g + 0x1)) {
                case '/':
                    var gv$0x = zp7t['indexOf']('>', yq9l1g + 0x3),
                        gvkx0$ = zp7t['substring'](yq9l1g + 0x2, gv$0x),
                        war2 = y61p9z['pop']();
                    0x0 > gv$0x ? (gvkx0$ = zp7t['substring'](yq9l1g + 0x2)['replace'](/[\s<].*/, ''), $kvx0['error']('end tag name: ' + gvkx0$ + ' is not complete:' + war2['tagName']), gv$0x = yq9l1g + 0x1 + gvkx0$['length']) : gvkx0$['match'](/\s</) && (gvkx0$ = gvkx0$['replace'](/[\s<].*/, ''), $kvx0['error']('end tag name: ' + gvkx0$ + ' maybe not complete'), gv$0x = yq9l1g + 0x1 + gvkx0$['length']);
                    var tm2 = war2['localNSMap'],
                        qy9lz1 = war2['tagName'] == gvkx0$,
                        x$qgl = qy9lz1 || war2['tagName'] && war2['tagName']['toLowerCase']() == gvkx0$['toLowerCase']();
                    if (x$qgl) {
                        if (ql0$gx['endElement'](war2['uri'], war2['localName'], gvkx0$), tm2) {
                            for (var w27ma in tm2) ql0$gx['endPrefixMapping'](w27ma);
                        }
                        qy9lz1 || $kvx0['fatalError']('end tag name: ' + gvkx0$ + ' is not match the current start tagName:' + war2['tagName']);
                    } else y61p9z['push'](war2);
                    gv$0x++;
                    break;
                case '?':
                    jnoic && _sh8(yq9l1g), gv$0x = ga72wtm(zp7t, yq9l1g, ql0$gx);
                    break;
                case '!':
                    jnoic && _sh8(yq9l1g), gv$0x = ga6wm7t(zp7t, yq9l1g, ql0$gx, $kvx0);
                    break;
                default:
                    jnoic && _sh8(yq9l1g);
                    var lq9g = new gs3w28r(),
                        f8_d = y61p9z[y61p9z['length'] - 0x1]['currentNSMap'],
                        gv$0x = ge_s(zp7t, yq9l1g, lq9g, f8_d, fdhe, $kvx0),
                        be4 = lq9g['length'];
                    if (!lq9g['closed'] && g$0xv(zp7t, gv$0x, lq9g['tagName'], gqxly) && (lq9g['closed'] = !0x0, hf_d8e['nbsp'] || $kvx0['warning']('unclosed xml attribute')), jnoic && be4) {
                        for (var uh4fde = gt16pz9(jnoic, {}), xik0v = 0x0; be4 > xik0v; xik0v++) {
                            var h_efs = lq9g[xik0v];
                            _sh8(h_efs['offset']), h_efs['locator'] = gt16pz9(jnoic, {});
                        }
                        ql0$gx['locator'] = uh4fde, ggqxk0$(lq9g, ql0$gx, f8_d) && y61p9z['push'](lq9g), ql0$gx['locator'] = jnoic;
                    } else ggqxk0$(lq9g, ql0$gx, f8_d) && y61p9z['push'](lq9g);
                    'http://www.w3.org/1999/xhtml' !== lq9g['uri'] || lq9g['closed'] ? gv$0x++ : gv$0x = gtzp691(zp7t, gv$0x, lq9g['tagName'], fdhe, ql0$gx);
            }
        } catch (qy9z1l) {
            $kvx0['error']('element parse error: ' + qy9z1l), gv$0x = -0x1;
        }
        gv$0x > e4fh_d ? e4fh_d = gv$0x : _dfh(Math['max'](yq9l1g, e4fh_d) + 0x1);
    }
}
function gt16pz9(rs32wa, s8r2w) {
    return s8r2w['lineNumber'] = rs32wa['lineNumber'], s8r2w['columnNumber'] = rs32wa['columnNumber'], s8r2w;
}
function ge_s(l19zyq, _8ehdf, ue4b5, pmtz16, r7a2m, vk0oni) {
    for (var y91p, _eh4f, ocjv = ++_8ehdf, ojnvic = gyzlp;;) {
        var heu5 = l19zyq['charAt'](ocjv);
        switch (heu5) {
            case '=':
                if (ojnvic === gocivn) y91p = l19zyq['slice'](_8ehdf, ocjv), ojnvic = gbde5u4;else {
                    if (ojnvic !== gpz9) throw new Error('attribute equal must after attrName');
                    ojnvic = gbde5u4;
                }
                break;
            case '\x27':
            case '\x22':
                if (ojnvic === gbde5u4 || ojnvic === gocivn) {
                    if (ojnvic === gocivn && (vk0oni['warning']('attribute value must after "="'), y91p = l19zyq['slice'](_8ehdf, ocjv)), _8ehdf = ocjv + 0x1, ocjv = l19zyq['indexOf'](heu5, _8ehdf), !(ocjv > 0x0)) throw new Error('attribute value no end \'' + heu5 + '\' match');
                    _eh4f = l19zyq['slice'](_8ehdf, ocjv)['replace'](/&#?\w+;/g, r7a2m), ue4b5['add'](y91p, _eh4f, _8ehdf - 0x1), ojnvic = gzyp19;
                } else {
                    if (ojnvic != gawrm7) throw new Error('attribute value must after "="');
                    _eh4f = l19zyq['slice'](_8ehdf, ocjv)['replace'](/&#?\w+;/g, r7a2m), ue4b5['add'](y91p, _eh4f, _8ehdf), vk0oni['warning']('attribute "' + y91p + '" missed start quot(' + heu5 + ')!!'), _8ehdf = ocjv + 0x1, ojnvic = gzyp19;
                }
                break;
            case '/':
                switch (ojnvic) {
                    case gyzlp:
                        ue4b5['setTagName'](l19zyq['slice'](_8ehdf, ocjv));
                    case gzyp19:
                    case gw73r2:
                    case gzp9l1:
                        ojnvic = gzp9l1, ue4b5['closed'] = !0x0;
                    case gawrm7:
                    case gocivn:
                    case gpz9:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return vk0oni['error']('unexpected end of input'), ojnvic == gyzlp && ue4b5['setTagName'](l19zyq['slice'](_8ehdf, ocjv)), ocjv;
            case '>':
                switch (ojnvic) {
                    case gyzlp:
                        ue4b5['setTagName'](l19zyq['slice'](_8ehdf, ocjv));
                    case gzyp19:
                    case gw73r2:
                    case gzp9l1:
                        break;
                    case gawrm7:
                    case gocivn:
                        _eh4f = l19zyq['slice'](_8ehdf, ocjv), '/' === _eh4f['slice'](-0x1) && (ue4b5['closed'] = !0x0, _eh4f = _eh4f['slice'](0x0, -0x1));
                    case gpz9:
                        ojnvic === gpz9 && (_eh4f = y91p), ojnvic == gawrm7 ? (vk0oni['warning']('attribute "' + _eh4f + '" missed quot(")!!'), ue4b5['add'](y91p, _eh4f['replace'](/&#?\w+;/g, r7a2m), _8ehdf)) : ('http://www.w3.org/1999/xhtml' === pmtz16[''] && _eh4f['match'](/^(?:disabled|checked|selected)$/i) || vk0oni['warning']('attribute "' + _eh4f + '" missed value!! "' + _eh4f + '" instead!!'), ue4b5['add'](_eh4f, _eh4f, _8ehdf));
                        break;
                    case gbde5u4:
                        throw new Error('attribute value missed!!');
                }
                return ocjv;
            case '\u0080':
                heu5 = '\x20';
            default:
                if ('\x20' >= heu5) switch (ojnvic) {
                    case gyzlp:
                        ue4b5['setTagName'](l19zyq['slice'](_8ehdf, ocjv)), ojnvic = gw73r2;
                        break;
                    case gocivn:
                        y91p = l19zyq['slice'](_8ehdf, ocjv), ojnvic = gpz9;
                        break;
                    case gawrm7:
                        var _eh4f = l19zyq['slice'](_8ehdf, ocjv)['replace'](/&#?\w+;/g, r7a2m);
                        vk0oni['warning']('attribute "' + _eh4f + '" missed quot(")!!'), ue4b5['add'](y91p, _eh4f, _8ehdf);
                    case gzyp19:
                        ojnvic = gw73r2;
                } else switch (ojnvic) {
                    case gpz9:
                        {
                            ue4b5['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === pmtz16[''] && y91p['match'](/^(?:disabled|checked|selected)$/i) || vk0oni['warning']('attribute "' + y91p + '" missed value!! "' + y91p + '" instead2!!'), ue4b5['add'](y91p, y91p, _8ehdf), _8ehdf = ocjv, ojnvic = gocivn;
                        break;
                    case gzyp19:
                        vk0oni['warning']('attribute space is required"' + y91p + '\x22!!');
                    case gw73r2:
                        ojnvic = gocivn, _8ehdf = ocjv;
                        break;
                    case gbde5u4:
                        ojnvic = gawrm7, _8ehdf = ocjv;
                        break;
                    case gzp9l1:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        ocjv++;
    }
}
function ggqxk0$(wm76a, xqgyl, ivonc) {
    for (var wta2m7 = wm76a['tagName'], e4dfu = null, g$q0xl = wm76a['length']; g$q0xl--;) {
        var xgkq0 = wm76a[g$q0xl],
            xi0 = xgkq0['qName'],
            x0v$k = xgkq0['value'],
            ly9$ = xi0['indexOf'](':');
        if (ly9$ > 0x0) var z91t = xgkq0['prefix'] = xi0['slice'](0x0, ly9$),
            atpm7 = xi0['slice'](ly9$ + 0x1),
            zy19p6 = 'xmlns' === z91t && atpm7;else atpm7 = xi0, z91t = null, zy19p6 = 'xmlns' === xi0 && '';
        xgkq0['localName'] = atpm7, zy19p6 !== !0x1 && (null == e4dfu && (e4dfu = {}, gl1z9q(ivonc, ivonc = {})), ivonc[zy19p6] = e4dfu[zy19p6] = x0v$k, xgkq0['uri'] = 'http://www.w3.org/2000/xmlns/', xqgyl['startPrefixMapping'](zy19p6, x0v$k));
    }
    for (var g$q0xl = wm76a['length']; g$q0xl--;) {
        xgkq0 = wm76a[g$q0xl];
        var z91t = xgkq0['prefix'];
        z91t && ('xml' === z91t && (xgkq0['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== z91t && (xgkq0['uri'] = ivonc[z91t || '']));
    }
    var ly9$ = wta2m7['indexOf'](':');
    ly9$ > 0x0 ? (z91t = wm76a['prefix'] = wta2m7['slice'](0x0, ly9$), atpm7 = wm76a['localName'] = wta2m7['slice'](ly9$ + 0x1)) : (z91t = null, atpm7 = wm76a['localName'] = wta2m7);
    var yq91gl = wm76a['uri'] = ivonc[z91t || ''];
    if (xqgyl['startElement'](yq91gl, atpm7, wta2m7, wm76a), !wm76a['closed']) return wm76a['currentNSMap'] = ivonc, wm76a['localNSMap'] = e4dfu, !0x0;
    if (xqgyl['endElement'](yq91gl, atpm7, wta2m7), e4dfu) {
        for (z91t in e4dfu) xqgyl['endPrefixMapping'](z91t);
    }
}
function gtzp691(r8_32, k$v0g, aw7tm6, f4euhd, vio0n) {
    if (/^(?:script|textarea)$/i['test'](aw7tm6)) {
        var fe_4hd = r8_32['indexOf']('</' + aw7tm6 + '>', k$v0g),
            conikv = r8_32['substring'](k$v0g + 0x1, fe_4hd);
        if (/[&<]/['test'](conikv)) return (/^script$/i['test'](aw7tm6) ? (vio0n['characters'](conikv, 0x0, conikv['length']), fe_4hd) : (conikv = conikv['replace'](/&#?\w+;/g, f4euhd), vio0n['characters'](conikv, 0x0, conikv['length']), fe_4hd)
        );
    }
    return k$v0g + 0x1;
}
function g$0xv(cnovj, $kqg, $0gl, _32r8) {
    var qy$g9l = _32r8[$0gl];
    return null == qy$g9l && (qy$g9l = cnovj['lastIndexOf']('</' + $0gl + '>'), $kqg > qy$g9l && (qy$g9l = cnovj['lastIndexOf']('</' + $0gl)), _32r8[$0gl] = qy$g9l), $kqg > qy$g9l;
}
function gl1z9q(ylq, kvni0o) {
    for (var h4_fe in ylq) kvni0o[h4_fe] = ylq[h4_fe];
}
function ga6wm7t(heuf4, qg$yl9, _r2s83, patm) {
    var zpt6 = heuf4['charAt'](qg$yl9 + 0x2);
    switch (zpt6) {
        case '-':
            if ('-' === heuf4['charAt'](qg$yl9 + 0x3)) {
                var ygl$9q = heuf4['indexOf']('-->', qg$yl9 + 0x4);
                return ygl$9q > qg$yl9 ? (_r2s83['comment'](heuf4, qg$yl9 + 0x4, ygl$9q - qg$yl9 - 0x4), ygl$9q + 0x3) : (patm['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == heuf4['substr'](qg$yl9 + 0x3, 0x6)) {
                var ygl$9q = heuf4['indexOf'](']]>', qg$yl9 + 0x9);
                return _r2s83['startCDATA'](), _r2s83['characters'](heuf4, qg$yl9 + 0x9, ygl$9q - qg$yl9 - 0x9), _r2s83['endCDATA'](), ygl$9q + 0x3;
            }
            var warm7 = gr3s2a(heuf4, qg$yl9),
                mw7 = warm7['length'];
            if (mw7 > 0x1 && /!doctype/i['test'](warm7[0x0][0x0])) {
                var fs3_h8 = warm7[0x1][0x0],
                    fs8he_ = mw7 > 0x3 && /^public$/i['test'](warm7[0x2][0x0]) && warm7[0x3][0x0],
                    q1ylz = mw7 > 0x4 && warm7[0x4][0x0],
                    vxo0ik = warm7[mw7 - 0x1];
                return _r2s83['startDTD'](fs3_h8, fs8he_ && fs8he_['replace'](/^(['"])(.*?)\1$/, '$2'), q1ylz && q1ylz['replace'](/^(['"])(.*?)\1$/, '$2')), _r2s83['endDTD'](), vxo0ik['index'] + vxo0ik[0x0]['length'];
            }
    }
    return -0x1;
}
function ga72wtm(x0v$ki, fhdue, _hd8) {
    var mz7pt = x0v$ki['indexOf']('?>', fhdue);
    if (mz7pt) {
        var _r3f8s = x0v$ki['substring'](fhdue, mz7pt)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (_r3f8s) {
            {
                _r3f8s[0x0]['length'];
            }
            return _hd8['processingInstruction'](_r3f8s[0x1], _r3f8s[0x2]), mz7pt + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function gs3w28r() {}
function gg$9lqy(wt27am, wa72mt) {
    return wt27am['__proto__'] = wa72mt, wt27am;
}
function gr3s2a(f_se8, r3a27w) {
    var _f3sr,
        bu5d4e = [],
        se_8h = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (se_8h['lastIndex'] = r3a27w, se_8h['exec'](f_se8); _f3sr = se_8h['exec'](f_se8);) if (bu5d4e['push'](_f3sr), _f3sr[0x1]) return bu5d4e;
}
var gijvonc = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    gs2wra = new RegExp('[\\-\\.0-9' + gijvonc['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    gr37wa2 = new RegExp('^' + gijvonc['source'] + gs2wra['source'] + '*(?::' + gijvonc['source'] + gs2wra['source'] + '*)?$'),
    gyzlp = 0x0,
    gocivn = 0x1,
    gpz9 = 0x2,
    gbde5u4 = 0x3,
    gawrm7 = 0x4,
    gzyp19 = 0x5,
    gw73r2 = 0x6,
    gzp9l1 = 0x7;
gcovi['prototype'] = {
    'parse': function (t6a7pm, fde4_h, yqlgx) {
        var ylzp1 = this['domBuilder'];
        ylzp1['startDocument'](), gl1z9q(fde4_h, fde4_h = {}), g_ef8s(t6a7pm, fde4_h, yqlgx, ylzp1, this['errorHandler']), ylzp1['endDocument']();
    }
}, gs3w28r['prototype'] = {
    'setTagName': function (vixko) {
        if (!gr37wa2['test'](vixko)) throw new Error('invalid tagName:' + vixko);
        this['tagName'] = vixko;
    },
    'add': function (nicjov, twma67, sfh8_e) {
        if (!gr37wa2['test'](nicjov)) throw new Error('invalid attribute:' + nicjov);
        this[this['length']++] = {
            'qName': nicjov,
            'value': twma67,
            'offset': sfh8_e
        };
    },
    'length': 0x0,
    'getLocalName': function (f_es8h) {
        return this[f_es8h]['localName'];
    },
    'getLocator': function (pzt76) {
        return this[pzt76]['locator'];
    },
    'getQName': function (l0$qxg) {
        return this[l0$qxg]['qName'];
    },
    'getURI': function (g0xqk) {
        return this[g0xqk]['uri'];
    },
    'getValue': function (ixk$0) {
        return this[ixk$0]['value'];
    }
}, gg$9lqy({}, gg$9lqy['prototype']) instanceof gg$9lqy || (gg$9lqy = function (pz9l, b5e) {
    function inocjv() {}
    inocjv['prototype'] = b5e, inocjv = new inocjv();
    for (b5e in pz9l) inocjv[b5e] = pz9l[b5e];
    return inocjv;
}), exports['XMLReader'] = gcovi;