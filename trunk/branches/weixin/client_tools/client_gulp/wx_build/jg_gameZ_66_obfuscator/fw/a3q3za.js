var f1 = wx.f$;
function _zhqswm() {}
function _zwq8mps(f206x, goiz, v27b, a48nwp, oejgci) {
    function _$rl3d(m8wa4) {
        if (m8wa4 > 0xffff) {
            m8wa4 -= 0x10000;
            var iecjog = 0xd800 + (m8wa4 >> 0xa),
                dlr_3 = 0xdc00 + (0x3ff & m8wa4);
            return String['fromCharCode'](iecjog, dlr_3);
        }
        return String['fromCharCode'](m8wa4);
    }
    function wp84q(gijzov) {
        var p4wmq8 = gijzov['slice'](0x1, -0x1);
        return p4wmq8 in v27b ? v27b[p4wmq8] : '#' === p4wmq8['charAt'](0x0) ? _$rl3d(parseInt(p4wmq8['substr'](0x1)['replace']('x', '0x'))) : (oejgci['error']('entity not found:' + gijzov), gijzov);
    }
    function drl3$(jzig7v) {
        if (jzig7v > qmwp48) {
            var ivgzo = f206x['substring'](qmwp48, jzig7v)['replace'](/&#?\w+;/g, wp84q);
            oijecy && q8p4mw(qmwp48), a48nwp['characters'](ivgzo, 0x0, jzig7v - qmwp48), qmwp48 = jzig7v;
        }
    }
    function q8p4mw(p4qwm8, $dr_l) {
        for (; p4qwm8 >= z7265 && ($dr_l = thqm9['exec'](f206x));) pamw8 = $dr_l['index'], z7265 = pamw8 + $dr_l[0x0]['length'], oijecy['lineNumber']++;
        oijecy['columnNumber'] = p4qwm8 - pamw8 + 0x1;
    }
    for (var pamw8 = 0x0, z7265 = 0x0, thqm9 = /.*(?:\r\n?|\n)|.*$/g, oijecy = a48nwp['locator'], w8pqs = [{ 'currentNSMap': goiz }], dcyore = {}, qmwp48 = 0x0;;) {
        try {
            var oejry = f206x['indexOf']('<', qmwp48);
            if (0x0 > oejry) {
                if (!f206x['substr'](qmwp48)['match'](/^\s*$/)) {
                    var d3rycl = a48nwp['doc'],
                        biz = d3rycl['createTextNode'](f206x['substr'](qmwp48));
                    d3rycl['appendChild'](biz), a48nwp['currentElement'] = biz;
                }
                return;
            }
            switch (oejry > qmwp48 && drl3$(oejry), f206x['charAt'](oejry + 0x1)) {
                case '/':
                    var oyce = f206x['indexOf']('>', oejry + 0x3),
                        b62f05 = f206x['substring'](oejry + 0x2, oyce),
                        wnap = w8pqs['pop']();
                    0x0 > oyce ? (b62f05 = f206x['substring'](oejry + 0x2)['replace'](/[\s<].*/, ''), oejgci['error']('end tag name: ' + b62f05 + ' is not complete:' + wnap['tagName']), oyce = oejry + 0x1 + b62f05['length']) : b62f05['match'](/\s</) && (b62f05 = b62f05['replace'](/[\s<].*/, ''), oejgci['error']('end tag name: ' + b62f05 + ' maybe not complete'), oyce = oejry + 0x1 + b62f05['length']);
                    var l$d3r = wnap['localNSMap'],
                        joy = wnap['tagName'] == b62f05,
                        l_d3$r = joy || wnap['tagName'] && wnap['tagName']['toLowerCase']() == b62f05['toLowerCase']();
                    if (l_d3$r) {
                        if (a48nwp['endElement'](wnap['uri'], wnap['localName'], b62f05), l$d3r) {
                            for (var p4knau in l$d3r) a48nwp['endPrefixMapping'](p4knau);
                        }
                        joy || oejgci['fatalError']('end tag name: ' + b62f05 + ' is not match the current start tagName:' + wnap['tagName']);
                    } else w8pqs['push'](wnap);
                    oyce++;
                    break;
                case '?':
                    oijecy && q8p4mw(oejry), oyce = _zzj7gvi(f206x, oejry, a48nwp);
                    break;
                case '!':
                    oijecy && q8p4mw(oejry), oyce = _zb5z67(f206x, oejry, a48nwp, oejgci);
                    break;
                default:
                    oijecy && q8p4mw(oejry);
                    var zg7b = new _zapwm84(),
                        m4wpa8 = w8pqs[w8pqs['length'] - 0x1]['currentNSMap'],
                        oyce = _ziogej(f206x, oejry, zg7b, m4wpa8, wp84q, oejgci),
                        pnk4ua = zg7b['length'];
                    if (!zg7b['closed'] && _zyd3rce(f206x, oyce, zg7b['tagName'], dcyore) && (zg7b['closed'] = !0x0, v27b['nbsp'] || oejgci['warning']('unclosed xml attribute')), oijecy && pnk4ua) {
                        for (var xh1t9 = _zvbg(oijecy, {}), r3ly$ = 0x0; pnk4ua > r3ly$; r3ly$++) {
                            var mqwps8 = zg7b[r3ly$];
                            q8p4mw(mqwps8['offset']), mqwps8['locator'] = _zvbg(oijecy, {});
                        }
                        a48nwp['locator'] = xh1t9, _zh109f(zg7b, a48nwp, m4wpa8) && w8pqs['push'](zg7b), a48nwp['locator'] = oijecy;
                    } else _zh109f(zg7b, a48nwp, m4wpa8) && w8pqs['push'](zg7b);
                    'http://www.w3.org/1999/xhtml' !== zg7b['uri'] || zg7b['closed'] ? oyce++ : oyce = _zoyicj(f206x, oyce, zg7b['tagName'], wp84q, a48nwp);
            }
        } catch (up4a) {
            oejgci['error']('element parse error: ' + up4a), oyce = -0x1;
        }
        oyce > qmwp48 ? qmwp48 = oyce : drl3$(Math['max'](oejry, qmwp48) + 0x1);
    }
}
function _zvbg(cdrl, yroec) {
    return yroec['lineNumber'] = cdrl['lineNumber'], yroec['columnNumber'] = cdrl['columnNumber'], yroec;
}
function _ziogej(jeovig, sx91t, tfx19h, htwmqs, f206x5, vojieg) {
    for (var q8wtms, v6g7, zv6b7g = ++sx91t, r3d_$ = _ztx19hs;;) {
        var ercj = jeovig['charAt'](zv6b7g);
        switch (ercj) {
            case '=':
                if (r3d_$ === _zh9ft) q8wtms = jeovig['slice'](sx91t, zv6b7g), r3d_$ = _zsx91;else {
                    if (r3d_$ !== _zhtq91s) throw new Error('attribute equal must after attrName');
                    r3d_$ = _zsx91;
                }
                break;
            case '\x27':
            case '\x22':
                if (r3d_$ === _zsx91 || r3d_$ === _zh9ft) {
                    if (r3d_$ === _zh9ft && (vojieg['warning']('attribute value must after "="'), q8wtms = jeovig['slice'](sx91t, zv6b7g)), sx91t = zv6b7g + 0x1, zv6b7g = jeovig['indexOf'](ercj, sx91t), !(zv6b7g > 0x0)) throw new Error('attribute value no end \'' + ercj + '\' match');
                    v6g7 = jeovig['slice'](sx91t, zv6b7g)['replace'](/&#?\w+;/g, f206x5), tfx19h['add'](q8wtms, v6g7, sx91t - 0x1), r3d_$ = _zceryoj;
                } else {
                    if (r3d_$ != _zu4akp) throw new Error('attribute value must after "="');
                    v6g7 = jeovig['slice'](sx91t, zv6b7g)['replace'](/&#?\w+;/g, f206x5), tfx19h['add'](q8wtms, v6g7, sx91t), vojieg['warning']('attribute "' + q8wtms + '" missed start quot(' + ercj + ')!!'), sx91t = zv6b7g + 0x1, r3d_$ = _zceryoj;
                }
                break;
            case '/':
                switch (r3d_$) {
                    case _ztx19hs:
                        tfx19h['setTagName'](jeovig['slice'](sx91t, zv6b7g));
                    case _zceryoj:
                    case _zojeyc:
                    case _zx9st:
                        r3d_$ = _zx9st, tfx19h['closed'] = !0x0;
                    case _zu4akp:
                    case _zh9ft:
                    case _zhtq91s:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return vojieg['error']('unexpected end of input'), r3d_$ == _ztx19hs && tfx19h['setTagName'](jeovig['slice'](sx91t, zv6b7g)), zv6b7g;
            case '>':
                switch (r3d_$) {
                    case _ztx19hs:
                        tfx19h['setTagName'](jeovig['slice'](sx91t, zv6b7g));
                    case _zceryoj:
                    case _zojeyc:
                    case _zx9st:
                        break;
                    case _zu4akp:
                    case _zh9ft:
                        v6g7 = jeovig['slice'](sx91t, zv6b7g), '/' === v6g7['slice'](-0x1) && (tfx19h['closed'] = !0x0, v6g7 = v6g7['slice'](0x0, -0x1));
                    case _zhtq91s:
                        r3d_$ === _zhtq91s && (v6g7 = q8wtms), r3d_$ == _zu4akp ? (vojieg['warning']('attribute "' + v6g7 + '" missed quot(")!!'), tfx19h['add'](q8wtms, v6g7['replace'](/&#?\w+;/g, f206x5), sx91t)) : ('http://www.w3.org/1999/xhtml' === htwmqs[''] && v6g7['match'](/^(?:disabled|checked|selected)$/i) || vojieg['warning']('attribute "' + v6g7 + '" missed value!! "' + v6g7 + '" instead!!'), tfx19h['add'](v6g7, v6g7, sx91t));
                        break;
                    case _zsx91:
                        throw new Error('attribute value missed!!');
                }
                return zv6b7g;
            case '\u0080':
                ercj = '\x20';
            default:
                if ('\x20' >= ercj) switch (r3d_$) {
                    case _ztx19hs:
                        tfx19h['setTagName'](jeovig['slice'](sx91t, zv6b7g)), r3d_$ = _zojeyc;
                        break;
                    case _zh9ft:
                        q8wtms = jeovig['slice'](sx91t, zv6b7g), r3d_$ = _zhtq91s;
                        break;
                    case _zu4akp:
                        var v6g7 = jeovig['slice'](sx91t, zv6b7g)['replace'](/&#?\w+;/g, f206x5);
                        vojieg['warning']('attribute "' + v6g7 + '" missed quot(")!!'), tfx19h['add'](q8wtms, v6g7, sx91t);
                    case _zceryoj:
                        r3d_$ = _zojeyc;
                } else switch (r3d_$) {
                    case _zhtq91s:
                        {
                            tfx19h['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === htwmqs[''] && q8wtms['match'](/^(?:disabled|checked|selected)$/i) || vojieg['warning']('attribute "' + q8wtms + '" missed value!! "' + q8wtms + '" instead2!!'), tfx19h['add'](q8wtms, q8wtms, sx91t), sx91t = zv6b7g, r3d_$ = _zh9ft;
                        break;
                    case _zceryoj:
                        vojieg['warning']('attribute space is required"' + q8wtms + '\x22!!');
                    case _zojeyc:
                        r3d_$ = _zh9ft, sx91t = zv6b7g;
                        break;
                    case _zsx91:
                        r3d_$ = _zu4akp, sx91t = zv6b7g;
                        break;
                    case _zx9st:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        zv6b7g++;
    }
}
function _zh109f(pw4m8q, eryoj, msq8wp) {
    for (var oyjre = pw4m8q['tagName'], ry3cde = null, yeodc = pw4m8q['length']; yeodc--;) {
        var ojcry = pw4m8q[yeodc],
            sp8qw = ojcry['qName'],
            tqh9ms = ojcry['value'],
            b72v6z = sp8qw['indexOf'](':');
        if (b72v6z > 0x0) var s1xt9 = ojcry['prefix'] = sp8qw['slice'](0x0, b72v6z),
            m8sqw = sp8qw['slice'](b72v6z + 0x1),
            jgozvi = 'xmlns' === s1xt9 && m8sqw;else m8sqw = sp8qw, s1xt9 = null, jgozvi = 'xmlns' === sp8qw && '';
        ojcry['localName'] = m8sqw, jgozvi !== !0x1 && (null == ry3cde && (ry3cde = {}, _zf062x5(msq8wp, msq8wp = {})), msq8wp[jgozvi] = ry3cde[jgozvi] = tqh9ms, ojcry['uri'] = 'http://www.w3.org/2000/xmlns/', eryoj['startPrefixMapping'](jgozvi, tqh9ms));
    }
    for (var yeodc = pw4m8q['length']; yeodc--;) {
        ojcry = pw4m8q[yeodc];
        var s1xt9 = ojcry['prefix'];
        s1xt9 && ('xml' === s1xt9 && (ojcry['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== s1xt9 && (ojcry['uri'] = msq8wp[s1xt9 || '']));
    }
    var b72v6z = oyjre['indexOf'](':');
    b72v6z > 0x0 ? (s1xt9 = pw4m8q['prefix'] = oyjre['slice'](0x0, b72v6z), m8sqw = pw4m8q['localName'] = oyjre['slice'](b72v6z + 0x1)) : (s1xt9 = null, m8sqw = pw4m8q['localName'] = oyjre);
    var ogj = pw4m8q['uri'] = msq8wp[s1xt9 || ''];
    if (eryoj['startElement'](ogj, m8sqw, oyjre, pw4m8q), !pw4m8q['closed']) return pw4m8q['currentNSMap'] = msq8wp, pw4m8q['localNSMap'] = ry3cde, !0x0;
    if (eryoj['endElement'](ogj, m8sqw, oyjre), ry3cde) {
        for (s1xt9 in ry3cde) eryoj['endPrefixMapping'](s1xt9);
    }
}
function _zoyicj(yecj, vbg6, oijecg, t1, apm48) {
    if (/^(?:script|textarea)$/i['test'](oijecg)) {
        var vjozi = yecj['indexOf']('</' + oijecg + '>', vbg6),
            st91q = yecj['substring'](vbg6 + 0x1, vjozi);
        if (/[&<]/['test'](st91q)) return (/^script$/i['test'](oijecg) ? (apm48['characters'](st91q, 0x0, st91q['length']), vjozi) : (st91q = st91q['replace'](/&#?\w+;/g, t1), apm48['characters'](st91q, 0x0, st91q['length']), vjozi)
        );
    }
    return vbg6 + 0x1;
}
function _zyd3rce(zb2v7, v7bzg, q4, cgjoi) {
    var $d_lr = cgjoi[q4];
    return null == $d_lr && ($d_lr = zb2v7['lastIndexOf']('</' + q4 + '>'), v7bzg > $d_lr && ($d_lr = zb2v7['lastIndexOf']('</' + q4)), cgjoi[q4] = $d_lr), v7bzg > $d_lr;
}
function _zf062x5(d$_3l, bgz67v) {
    for (var ydrl3 in d$_3l) bgz67v[ydrl3] = d$_3l[ydrl3];
}
function _zb5z67(veigj, ejgi, pswm8q, lcy3dr) {
    var wp4q = veigj['charAt'](ejgi + 0x2);
    switch (wp4q) {
        case '-':
            if ('-' === veigj['charAt'](ejgi + 0x3)) {
                var igeov = veigj['indexOf']('-->', ejgi + 0x4);
                return igeov > ejgi ? (pswm8q['comment'](veigj, ejgi + 0x4, igeov - ejgi - 0x4), igeov + 0x3) : (lcy3dr['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == veigj['substr'](ejgi + 0x3, 0x6)) {
                var igeov = veigj['indexOf'](']]>', ejgi + 0x9);
                return pswm8q['startCDATA'](), pswm8q['characters'](veigj, ejgi + 0x9, igeov - ejgi - 0x9), pswm8q['endCDATA'](), igeov + 0x3;
            }
            var zojig = _zht91sx(veigj, ejgi),
                y3lrdc = zojig['length'];
            if (y3lrdc > 0x1 && /!doctype/i['test'](zojig[0x0][0x0])) {
                var wpa84 = zojig[0x1][0x0],
                    j7zgiv = y3lrdc > 0x3 && /^public$/i['test'](zojig[0x2][0x0]) && zojig[0x3][0x0],
                    qt91sh = y3lrdc > 0x4 && zojig[0x4][0x0],
                    x1st = zojig[y3lrdc - 0x1];
                return pswm8q['startDTD'](wpa84, j7zgiv && j7zgiv['replace'](/^(['"])(.*?)\1$/, '$2'), qt91sh && qt91sh['replace'](/^(['"])(.*?)\1$/, '$2')), pswm8q['endDTD'](), x1st['index'] + x1st[0x0]['length'];
            }
    }
    return -0x1;
}
function _zzj7gvi(pwa4m8, wpq8ms, stmqhw) {
    var iogvz = pwa4m8['indexOf']('?>', wpq8ms);
    if (iogvz) {
        var fb6520 = pwa4m8['substring'](wpq8ms, iogvz)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (fb6520) {
            {
                fb6520[0x0]['length'];
            }
            return stmqhw['processingInstruction'](fb6520[0x1], fb6520[0x2]), iogvz + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function _zapwm84() {}
function _zre3ydc(smpqw, sqtwm) {
    return smpqw['__proto__'] = sqtwm, smpqw;
}
function _zht91sx(qht9m, zv2b) {
    var qms8wt,
        l3d_$ = [],
        fx091h = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (fx091h['lastIndex'] = zv2b, fx091h['exec'](qht9m); qms8wt = fx091h['exec'](qht9m);) if (l3d_$['push'](qms8wt), qms8wt[0x1]) return l3d_$;
}
var _zjevoig = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    _zqhswm = new RegExp('[\\-\\.0-9' + _zjevoig['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    _ztwqshm = new RegExp('^' + _zjevoig['source'] + _zqhswm['source'] + '*(?::' + _zjevoig['source'] + _zqhswm['source'] + '*)?$'),
    _ztx19hs = 0x0,
    _zh9ft = 0x1,
    _zhtq91s = 0x2,
    _zsx91 = 0x3,
    _zu4akp = 0x4,
    _zceryoj = 0x5,
    _zojeyc = 0x6,
    _zx9st = 0x7;
_zhqswm['prototype'] = {
    'parse': function (ma8pw4, npw8a4, upnka4) {
        var gcoeij = this['domBuilder'];
        gcoeij['startDocument'](), _zf062x5(npw8a4, npw8a4 = {}), _zwq8mps(ma8pw4, npw8a4, upnka4, gcoeij, this['errorHandler']), gcoeij['endDocument']();
    }
}, _zapwm84['prototype'] = {
    'setTagName': function (jiec) {
        if (!_ztwqshm['test'](jiec)) throw new Error('invalid tagName:' + jiec);
        this['tagName'] = jiec;
    },
    'add': function (joiv, vz7gji, upnak) {
        if (!_ztwqshm['test'](joiv)) throw new Error('invalid attribute:' + joiv);
        this[this['length']++] = {
            'qName': joiv,
            'value': vz7gji,
            'offset': upnak
        };
    },
    'length': 0x0,
    'getLocalName': function (r3$dy) {
        return this[r3$dy]['localName'];
    },
    'getLocator': function (nkau4) {
        return this[nkau4]['locator'];
    },
    'getQName': function (yedo) {
        return this[yedo]['qName'];
    },
    'getURI': function (tmwq) {
        return this[tmwq]['uri'];
    },
    'getValue': function (ejgc) {
        return this[ejgc]['value'];
    }
}, _zre3ydc({}, _zre3ydc['prototype']) instanceof _zre3ydc || (_zre3ydc = function (wn4a, ceor) {
    function rjcoe() {}
    rjcoe['prototype'] = ceor, rjcoe = new rjcoe();
    for (ceor in wn4a) rjcoe[ceor] = wn4a[ceor];
    return rjcoe;
}), exports['XMLReader'] = _zhqswm;