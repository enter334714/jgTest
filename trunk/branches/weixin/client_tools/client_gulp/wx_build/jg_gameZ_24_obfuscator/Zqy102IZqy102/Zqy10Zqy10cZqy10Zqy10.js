var J = wx.h$;
function gqg50bk() {}
function g_w2fp(f_9wp2, rqy5, qk0ob5, d80kg6, f_$2w9) {
    function ws9$2(h86czt) {
        if (h86czt > 0xffff) {
            h86czt -= 0x10000;
            var ok = 0xd800 + (h86czt >> 0xa),
                pezcth = 0xdc00 + (0x3ff & h86czt);
            return String['fromCharCode'](ok, pezcth);
        }
        return String['fromCharCode'](h86czt);
    }
    function a1n3u(n714xi) {
        var thpcze = n714xi['slice'](0x1, -0x1);
        return thpcze in qk0ob5 ? qk0ob5[thpcze] : '#' === thpcze['charAt'](0x0) ? ws9$2(parseInt(thpcze['substr'](0x1)['replace']('x', '0x'))) : (f_$2w9['error']('entity not found:' + n714xi), n714xi);
    }
    function o05yq(iv7jx) {
        if (iv7jx > lamu3) {
            var n74i1 = f_9wp2['substring'](lamu3, iv7jx)['replace'](/&#?\w+;/g, a1n3u);
            i14u && i1x(lamu3), d80kg6['characters'](n74i1, 0x0, iv7jx - lamu3), lamu3 = iv7jx;
        }
    }
    function i1x(ivjr7, d6c8t) {
        for (; ivjr7 >= r7ixv && (d6c8t = tchp['exec'](f_9wp2));) irvj7 = d6c8t['index'], r7ixv = irvj7 + d6c8t[0x0]['length'], i14u['lineNumber']++;
        i14u['columnNumber'] = ivjr7 - irvj7 + 0x1;
    }
    for (var irvj7 = 0x0, r7ixv = 0x0, tchp = /.*(?:\r\n?|\n)|.*$/g, i14u = d80kg6['locator'], k5b0g = [{ 'currentNSMap': rqy5 }], wsf2$9 = {}, lamu3 = 0x0;;) {
        try {
            var ualm34 = f_9wp2['indexOf']('<', lamu3);
            if (0x0 > ualm34) {
                if (!f_9wp2['substr'](lamu3)['match'](/^\s*$/)) {
                    var n413x = d80kg6['doc'],
                        pe2z_h = n413x['createTextNode'](f_9wp2['substr'](lamu3));
                    n413x['appendChild'](pe2z_h), d80kg6['currentElement'] = pe2z_h;
                }
                return;
            }
            switch (ualm34 > lamu3 && o05yq(ualm34), f_9wp2['charAt'](ualm34 + 0x1)) {
                case '/':
                    var chezp = f_9wp2['indexOf']('>', ualm34 + 0x3),
                        bo50yq = f_9wp2['substring'](ualm34 + 0x2, chezp),
                        m4a3u = k5b0g['pop']();
                    0x0 > chezp ? (bo50yq = f_9wp2['substring'](ualm34 + 0x2)['replace'](/[\s<].*/, ''), f_$2w9['error']('end tag name: ' + bo50yq + ' is not complete:' + m4a3u['tagName']), chezp = ualm34 + 0x1 + bo50yq['length']) : bo50yq['match'](/\s</) && (bo50yq = bo50yq['replace'](/[\s<].*/, ''), f_$2w9['error']('end tag name: ' + bo50yq + ' maybe not complete'), chezp = ualm34 + 0x1 + bo50yq['length']);
                    var oqv5ry = m4a3u['localNSMap'],
                        j7irxv = m4a3u['tagName'] == bo50yq,
                        o5q0 = j7irxv || m4a3u['tagName'] && m4a3u['tagName']['toLowerCase']() == bo50yq['toLowerCase']();
                    if (o5q0) {
                        if (d80kg6['endElement'](m4a3u['uri'], m4a3u['localName'], bo50yq), oqv5ry) {
                            for (var v5yjor in oqv5ry) d80kg6['endPrefixMapping'](v5yjor);
                        }
                        j7irxv || f_$2w9['fatalError']('end tag name: ' + bo50yq + ' is not match the current start tagName:' + m4a3u['tagName']);
                    } else k5b0g['push'](m4a3u);
                    chezp++;
                    break;
                case '?':
                    i14u && i1x(ualm34), chezp = gm34(f_9wp2, ualm34, d80kg6);
                    break;
                case '!':
                    i14u && i1x(ualm34), chezp = gojyv5r(f_9wp2, ualm34, d80kg6, f_$2w9);
                    break;
                default:
                    i14u && i1x(ualm34);
                    var nx13i = new goy5brq(),
                        bq0k5 = k5b0g[k5b0g['length'] - 0x1]['currentNSMap'],
                        chezp = gn4a3(f_9wp2, ualm34, nx13i, bq0k5, a1n3u, f_$2w9),
                        boq5 = nx13i['length'];
                    if (!nx13i['closed'] && gjnvix(f_9wp2, chezp, nx13i['tagName'], wsf2$9) && (nx13i['closed'] = !0x0, qk0ob5['nbsp'] || f_$2w9['warning']('unclosed xml attribute')), i14u && boq5) {
                        for (var zt8hc = gu341l(i14u, {}), q5g0 = 0x0; boq5 > q5g0; q5g0++) {
                            var _9$f2w = nx13i[q5g0];
                            i1x(_9$f2w['offset']), _9$f2w['locator'] = gu341l(i14u, {});
                        }
                        d80kg6['locator'] = zt8hc, gdbg0kq(nx13i, d80kg6, bq0k5) && k5b0g['push'](nx13i), d80kg6['locator'] = i14u;
                    } else gdbg0kq(nx13i, d80kg6, bq0k5) && k5b0g['push'](nx13i);
                    'http://www.w3.org/1999/xhtml' !== nx13i['uri'] || nx13i['closed'] ? chezp++ : chezp = gxni17j(f_9wp2, chezp, nx13i['tagName'], a1n3u, d80kg6);
            }
        } catch (kgd60b) {
            f_$2w9['error']('element parse error: ' + kgd60b), chezp = -0x1;
        }
        chezp > lamu3 ? lamu3 = chezp : o05yq(Math['max'](ualm34, lamu3) + 0x1);
    }
}
function gu341l(dbk6g0, u1in4) {
    return u1in4['lineNumber'] = dbk6g0['lineNumber'], u1in4['columnNumber'] = dbk6g0['columnNumber'], u1in4;
}
function gn4a3(f2sw$, qovy, xn4i7, gk0dbq, tchz86, x1ni) {
    for (var qboy, xvyr, yo5vjr = ++qovy, ixjnv = glu3a4m;;) {
        var xr7yjv = f2sw$['charAt'](yo5vjr);
        switch (xr7yjv) {
            case '=':
                if (ixjnv === gixn17j) qboy = f2sw$['slice'](qovy, yo5vjr), ixjnv = ggkd86c;else {
                    if (ixjnv !== gt8cg6d) throw new Error('attribute equal must after attrName');
                    ixjnv = ggkd86c;
                }
                break;
            case '\x27':
            case '\x22':
                if (ixjnv === ggkd86c || ixjnv === gixn17j) {
                    if (ixjnv === gixn17j && (x1ni['warning']('attribute value must after "="'), qboy = f2sw$['slice'](qovy, yo5vjr)), qovy = yo5vjr + 0x1, yo5vjr = f2sw$['indexOf'](xr7yjv, qovy), !(yo5vjr > 0x0)) throw new Error('attribute value no end \'' + xr7yjv + '\' match');
                    xvyr = f2sw$['slice'](qovy, yo5vjr)['replace'](/&#?\w+;/g, tchz86), xn4i7['add'](qboy, xvyr, qovy - 0x1), ixjnv = gu3a4l1;
                } else {
                    if (ixjnv != g_hzet) throw new Error('attribute value must after "="');
                    xvyr = f2sw$['slice'](qovy, yo5vjr)['replace'](/&#?\w+;/g, tchz86), xn4i7['add'](qboy, xvyr, qovy), x1ni['warning']('attribute "' + qboy + '" missed start quot(' + xr7yjv + ')!!'), qovy = yo5vjr + 0x1, ixjnv = gu3a4l1;
                }
                break;
            case '/':
                switch (ixjnv) {
                    case glu3a4m:
                        xn4i7['setTagName'](f2sw$['slice'](qovy, yo5vjr));
                    case gu3a4l1:
                    case gp29e_w:
                    case gqorb5:
                        ixjnv = gqorb5, xn4i7['closed'] = !0x0;
                    case g_hzet:
                    case gixn17j:
                    case gt8cg6d:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return x1ni['error']('unexpected end of input'), ixjnv == glu3a4m && xn4i7['setTagName'](f2sw$['slice'](qovy, yo5vjr)), yo5vjr;
            case '>':
                switch (ixjnv) {
                    case glu3a4m:
                        xn4i7['setTagName'](f2sw$['slice'](qovy, yo5vjr));
                    case gu3a4l1:
                    case gp29e_w:
                    case gqorb5:
                        break;
                    case g_hzet:
                    case gixn17j:
                        xvyr = f2sw$['slice'](qovy, yo5vjr), '/' === xvyr['slice'](-0x1) && (xn4i7['closed'] = !0x0, xvyr = xvyr['slice'](0x0, -0x1));
                    case gt8cg6d:
                        ixjnv === gt8cg6d && (xvyr = qboy), ixjnv == g_hzet ? (x1ni['warning']('attribute "' + xvyr + '" missed quot(")!!'), xn4i7['add'](qboy, xvyr['replace'](/&#?\w+;/g, tchz86), qovy)) : ('http://www.w3.org/1999/xhtml' === gk0dbq[''] && xvyr['match'](/^(?:disabled|checked|selected)$/i) || x1ni['warning']('attribute "' + xvyr + '" missed value!! "' + xvyr + '" instead!!'), xn4i7['add'](xvyr, xvyr, qovy));
                        break;
                    case ggkd86c:
                        throw new Error('attribute value missed!!');
                }
                return yo5vjr;
            case '\u0080':
                xr7yjv = '\x20';
            default:
                if ('\x20' >= xr7yjv) switch (ixjnv) {
                    case glu3a4m:
                        xn4i7['setTagName'](f2sw$['slice'](qovy, yo5vjr)), ixjnv = gp29e_w;
                        break;
                    case gixn17j:
                        qboy = f2sw$['slice'](qovy, yo5vjr), ixjnv = gt8cg6d;
                        break;
                    case g_hzet:
                        var xvyr = f2sw$['slice'](qovy, yo5vjr)['replace'](/&#?\w+;/g, tchz86);
                        x1ni['warning']('attribute "' + xvyr + '" missed quot(")!!'), xn4i7['add'](qboy, xvyr, qovy);
                    case gu3a4l1:
                        ixjnv = gp29e_w;
                } else switch (ixjnv) {
                    case gt8cg6d:
                        {
                            xn4i7['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === gk0dbq[''] && qboy['match'](/^(?:disabled|checked|selected)$/i) || x1ni['warning']('attribute "' + qboy + '" missed value!! "' + qboy + '" instead2!!'), xn4i7['add'](qboy, qboy, qovy), qovy = yo5vjr, ixjnv = gixn17j;
                        break;
                    case gu3a4l1:
                        x1ni['warning']('attribute space is required"' + qboy + '\x22!!');
                    case gp29e_w:
                        ixjnv = gixn17j, qovy = yo5vjr;
                        break;
                    case ggkd86c:
                        ixjnv = g_hzet, qovy = yo5vjr;
                        break;
                    case gqorb5:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        yo5vjr++;
    }
}
function gdbg0kq(u1n, ji7xn, bg06dk) {
    for (var gc6dk = u1n['tagName'], phztc = null, cz68h = u1n['length']; cz68h--;) {
        var w$2fs9 = u1n[cz68h],
            byoq50 = w$2fs9['qName'],
            _9w2ep = w$2fs9['value'],
            in7j1 = byoq50['indexOf'](':');
        if (in7j1 > 0x0) var vjn7x = w$2fs9['prefix'] = byoq50['slice'](0x0, in7j1),
            xn47i = byoq50['slice'](in7j1 + 0x1),
            j7nix1 = 'xmlns' === vjn7x && xn47i;else xn47i = byoq50, vjn7x = null, j7nix1 = 'xmlns' === byoq50 && '';
        w$2fs9['localName'] = xn47i, j7nix1 !== !0x1 && (null == phztc && (phztc = {}, gzcthe8(bg06dk, bg06dk = {})), bg06dk[j7nix1] = phztc[j7nix1] = _9w2ep, w$2fs9['uri'] = 'http://www.w3.org/2000/xmlns/', ji7xn['startPrefixMapping'](j7nix1, _9w2ep));
    }
    for (var cz68h = u1n['length']; cz68h--;) {
        w$2fs9 = u1n[cz68h];
        var vjn7x = w$2fs9['prefix'];
        vjn7x && ('xml' === vjn7x && (w$2fs9['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== vjn7x && (w$2fs9['uri'] = bg06dk[vjn7x || '']));
    }
    var in7j1 = gc6dk['indexOf'](':');
    in7j1 > 0x0 ? (vjn7x = u1n['prefix'] = gc6dk['slice'](0x0, in7j1), xn47i = u1n['localName'] = gc6dk['slice'](in7j1 + 0x1)) : (vjn7x = null, xn47i = u1n['localName'] = gc6dk);
    var yr7jvo = u1n['uri'] = bg06dk[vjn7x || ''];
    if (ji7xn['startElement'](yr7jvo, xn47i, gc6dk, u1n), !u1n['closed']) return u1n['currentNSMap'] = bg06dk, u1n['localNSMap'] = phztc, !0x0;
    if (ji7xn['endElement'](yr7jvo, xn47i, gc6dk), phztc) {
        for (vjn7x in phztc) ji7xn['endPrefixMapping'](vjn7x);
    }
}
function gxni17j(_e9w, oby5qr, f2sw9, $wsf29, cg8td) {
    if (/^(?:script|textarea)$/i['test'](f2sw9)) {
        var d6kg08 = _e9w['indexOf']('</' + f2sw9 + '>', oby5qr),
            tc8d = _e9w['substring'](oby5qr + 0x1, d6kg08);
        if (/[&<]/['test'](tc8d)) return (/^script$/i['test'](f2sw9) ? (cg8td['characters'](tc8d, 0x0, tc8d['length']), d6kg08) : (tc8d = tc8d['replace'](/&#?\w+;/g, $wsf29), cg8td['characters'](tc8d, 0x0, tc8d['length']), d6kg08)
        );
    }
    return oby5qr + 0x1;
}
function gjnvix(f29wp, c68tz, k60gd8, yq5rob) {
    var g08dk6 = yq5rob[k60gd8];
    return null == g08dk6 && (g08dk6 = f29wp['lastIndexOf']('</' + k60gd8 + '>'), c68tz > g08dk6 && (g08dk6 = f29wp['lastIndexOf']('</' + k60gd8)), yq5rob[k60gd8] = g08dk6), c68tz > g08dk6;
}
function gzcthe8(vjr7x, yj5vo) {
    for (var ual14 in vjr7x) yj5vo[ual14] = vjr7x[ual14];
}
function gojyv5r(ectz8h, h8cez, vjoy7, xri7jv) {
    var f_2w9p = ectz8h['charAt'](h8cez + 0x2);
    switch (f_2w9p) {
        case '-':
            if ('-' === ectz8h['charAt'](h8cez + 0x3)) {
                var or5vq = ectz8h['indexOf']('-->', h8cez + 0x4);
                return or5vq > h8cez ? (vjoy7['comment'](ectz8h, h8cez + 0x4, or5vq - h8cez - 0x4), or5vq + 0x3) : (xri7jv['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == ectz8h['substr'](h8cez + 0x3, 0x6)) {
                var or5vq = ectz8h['indexOf'](']]>', h8cez + 0x9);
                return vjoy7['startCDATA'](), vjoy7['characters'](ectz8h, h8cez + 0x9, or5vq - h8cez - 0x9), vjoy7['endCDATA'](), or5vq + 0x3;
            }
            var jyro7 = gpetzh_(ectz8h, h8cez),
                v5rqo = jyro7['length'];
            if (v5rqo > 0x1 && /!doctype/i['test'](jyro7[0x0][0x0])) {
                var g086dk = jyro7[0x1][0x0],
                    thce = v5rqo > 0x3 && /^public$/i['test'](jyro7[0x2][0x0]) && jyro7[0x3][0x0],
                    cztehp = v5rqo > 0x4 && jyro7[0x4][0x0],
                    cd68h = jyro7[v5rqo - 0x1];
                return vjoy7['startDTD'](g086dk, thce && thce['replace'](/^(['"])(.*?)\1$/, '$2'), cztehp && cztehp['replace'](/^(['"])(.*?)\1$/, '$2')), vjoy7['endDTD'](), cd68h['index'] + cd68h[0x0]['length'];
            }
    }
    return -0x1;
}
function gm34(jx7irv, dbgq0k, f$_2w) {
    var a143un = jx7irv['indexOf']('?>', dbgq0k);
    if (a143un) {
        var z_hpt = jx7irv['substring'](dbgq0k, a143un)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (z_hpt) {
            {
                z_hpt[0x0]['length'];
            }
            return f$_2w['processingInstruction'](z_hpt[0x1], z_hpt[0x2]), a143un + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function goy5brq() {}
function gdth86c(dctg8, iu4n13) {
    return dctg8['__proto__'] = iu4n13, dctg8;
}
function gpetzh_(b05oqk, $29wfs) {
    var u1n3a4,
        gbdkq0 = [],
        xirv = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (xirv['lastIndex'] = $29wfs, xirv['exec'](b05oqk); u1n3a4 = xirv['exec'](b05oqk);) if (gbdkq0['push'](u1n3a4), u1n3a4[0x1]) return gbdkq0;
}
var gvy7ro = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    ge2hp = new RegExp('[\\-\\.0-9' + gvy7ro['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    g$2sfw = new RegExp('^' + gvy7ro['source'] + ge2hp['source'] + '*(?::' + gvy7ro['source'] + ge2hp['source'] + '*)?$'),
    glu3a4m = 0x0,
    gixn17j = 0x1,
    gt8cg6d = 0x2,
    ggkd86c = 0x3,
    g_hzet = 0x4,
    gu3a4l1 = 0x5,
    gp29e_w = 0x6,
    gqorb5 = 0x7;
gqg50bk['prototype'] = {
    'parse': function (s9w$, z2pw_e, nu14a) {
        var h68dtc = this['domBuilder'];
        h68dtc['startDocument'](), gzcthe8(z2pw_e, z2pw_e = {}), g_w2fp(s9w$, z2pw_e, nu14a, h68dtc, this['errorHandler']), h68dtc['endDocument']();
    }
}, goy5brq['prototype'] = {
    'setTagName': function (bo50) {
        if (!g$2sfw['test'](bo50)) throw new Error('invalid tagName:' + bo50);
        this['tagName'] = bo50;
    },
    'add': function (jxy7v, in34, h6dtc) {
        if (!g$2sfw['test'](jxy7v)) throw new Error('invalid attribute:' + jxy7v);
        this[this['length']++] = {
            'qName': jxy7v,
            'value': in34,
            'offset': h6dtc
        };
    },
    'length': 0x0,
    'getLocalName': function (pw9f2_) {
        return this[pw9f2_]['localName'];
    },
    'getLocator': function (tehpcz) {
        return this[tehpcz]['locator'];
    },
    'getQName': function (l1a3u) {
        return this[l1a3u]['qName'];
    },
    'getURI': function (zct) {
        return this[zct]['uri'];
    },
    'getValue': function (gdkqb0) {
        return this[gdkqb0]['value'];
    }
}, gdth86c({}, gdth86c['prototype']) instanceof gdth86c || (gdth86c = function (h8tzce, qryob) {
    function h6cz() {}
    h6cz['prototype'] = qryob, h6cz = new h6cz();
    for (qryob in h8tzce) h6cz[qryob] = h8tzce[qryob];
    return h6cz;
}), exports['XMLReader'] = gqg50bk;