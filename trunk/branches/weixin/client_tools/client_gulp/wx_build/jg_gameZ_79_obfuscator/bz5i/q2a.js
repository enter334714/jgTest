var b = wx.e$;
function ef91ep_() {}
function edg50i(_a41fk, l6j73, r673l, ulr83v, lvruy8) {
    function mdig50(bhxno) {
        if (bhxno > 0xffff) {
            bhxno -= 0x10000;
            var xbhnow = 0xd800 + (bhxno >> 0xa),
                gsd0w = 0xdc00 + (0x3ff & bhxno);
            return String['fromCharCode'](xbhnow, gsd0w);
        }
        return String['fromCharCode'](bhxno);
    }
    function vzuc2y(a14f) {
        var b$n = a14f['slice'](0x1, -0x1);
        return b$n in r673l ? r673l[b$n] : '#' === b$n['charAt'](0x0) ? mdig50(parseInt(b$n['substr'](0x1)['replace']('x', '0x'))) : (lvruy8['error']('entity not found:' + a14f), a14f);
    }
    function hxonsw($phxbe) {
        if ($phxbe > whsxno) {
            var nswi0d = _a41fk['substring'](whsxno, $phxbe)['replace'](/&#?\w+;/g, vzuc2y);
            q1a4_k && g0wsd(whsxno), ulr83v['characters'](nswi0d, 0x0, $phxbe - whsxno), whsxno = $phxbe;
        }
    }
    function g0wsd(vr8l, ohiwn) {
        for (; vr8l >= wdn0 && (ohiwn = e$bx['exec'](_a41fk));) q7tjk4 = ohiwn['index'], wdn0 = q7tjk4 + ohiwn[0x0]['length'], q1a4_k['lineNumber']++;
        q1a4_k['columnNumber'] = vr8l - q7tjk4 + 0x1;
    }
    for (var q7tjk4 = 0x0, wdn0 = 0x0, e$bx = /.*(?:\r\n?|\n)|.*$/g, q1a4_k = ulr83v['locator'], ak7j4q = [{ 'currentNSMap': l6j73 }], onbhxw = {}, whsxno = 0x0;;) {
        try {
            var fe9_ = _a41fk['indexOf']('<', whsxno);
            if (0x0 > fe9_) {
                if (!_a41fk['substr'](whsxno)['match'](/^\s*$/)) {
                    var qt7j3 = ulr83v['doc'],
                        u8l = qt7j3['createTextNode'](_a41fk['substr'](whsxno));
                    qt7j3['appendChild'](u8l), ulr83v['currentElement'] = u8l;
                }
                return;
            }
            switch (fe9_ > whsxno && hxonsw(fe9_), _a41fk['charAt'](fe9_ + 0x1)) {
                case '/':
                    var t4j7qk = _a41fk['indexOf']('>', fe9_ + 0x3),
                        r3tl7 = _a41fk['substring'](fe9_ + 0x2, t4j7qk),
                        ulv3r = ak7j4q['pop']();
                    0x0 > t4j7qk ? (r3tl7 = _a41fk['substring'](fe9_ + 0x2)['replace'](/[\s<].*/, ''), lvruy8['error']('end tag name: ' + r3tl7 + ' is not complete:' + ulv3r['tagName']), t4j7qk = fe9_ + 0x1 + r3tl7['length']) : r3tl7['match'](/\s</) && (r3tl7 = r3tl7['replace'](/[\s<].*/, ''), lvruy8['error']('end tag name: ' + r3tl7 + ' maybe not complete'), t4j7qk = fe9_ + 0x1 + r3tl7['length']);
                    var i0dsnw = ulv3r['localNSMap'],
                        k6jt7 = ulv3r['tagName'] == r3tl7,
                        hebx = k6jt7 || ulv3r['tagName'] && ulv3r['tagName']['toLowerCase']() == r3tl7['toLowerCase']();
                    if (hebx) {
                        if (ulr83v['endElement'](ulv3r['uri'], ulv3r['localName'], r3tl7), i0dsnw) {
                            for (var j6q7kt in i0dsnw) ulr83v['endPrefixMapping'](j6q7kt);
                        }
                        k6jt7 || lvruy8['fatalError']('end tag name: ' + r3tl7 + ' is not match the current start tagName:' + ulv3r['tagName']);
                    } else ak7j4q['push'](ulv3r);
                    t4j7qk++;
                    break;
                case '?':
                    q1a4_k && g0wsd(fe9_), t4j7qk = euryl8v(_a41fk, fe9_, ulr83v);
                    break;
                case '!':
                    q1a4_k && g0wsd(fe9_), t4j7qk = ecuzvy2(_a41fk, fe9_, ulr83v, lvruy8);
                    break;
                default:
                    q1a4_k && g0wsd(fe9_);
                    var p9e$f = new e$9e_(),
                        n$xobh = ak7j4q[ak7j4q['length'] - 0x1]['currentNSMap'],
                        t4j7qk = eoxhpb(_a41fk, fe9_, p9e$f, n$xobh, vzuc2y, lvruy8),
                        j7t = p9e$f['length'];
                    if (!p9e$f['closed'] && ehxpe(_a41fk, t4j7qk, p9e$f['tagName'], onbhxw) && (p9e$f['closed'] = !0x0, r673l['nbsp'] || lvruy8['warning']('unclosed xml attribute')), q1a4_k && j7t) {
                        for (var ep9_$ = eq4ja(q1a4_k, {}), k4j1qa = 0x0; j7t > k4j1qa; k4j1qa++) {
                            var rtl863 = p9e$f[k4j1qa];
                            g0wsd(rtl863['offset']), rtl863['locator'] = eq4ja(q1a4_k, {});
                        }
                        ulr83v['locator'] = ep9_$, eonhx(p9e$f, ulr83v, n$xobh) && ak7j4q['push'](p9e$f), ulr83v['locator'] = q1a4_k;
                    } else eonhx(p9e$f, ulr83v, n$xobh) && ak7j4q['push'](p9e$f);
                    'http://www.w3.org/1999/xhtml' !== p9e$f['uri'] || p9e$f['closed'] ? t4j7qk++ : t4j7qk = ebefp9$(_a41fk, t4j7qk, p9e$f['tagName'], vzuc2y, ulr83v);
            }
        } catch (t76lj3) {
            lvruy8['error']('element parse error: ' + t76lj3), t4j7qk = -0x1;
        }
        t4j7qk > whsxno ? whsxno = t4j7qk : hxonsw(Math['max'](fe9_, whsxno) + 0x1);
    }
}
function eq4ja(i0s5dg, hxb$p) {
    return hxb$p['lineNumber'] = i0s5dg['lineNumber'], hxb$p['columnNumber'] = i0s5dg['columnNumber'], hxb$p;
}
function eoxhpb(t6kqj7, gi0md5, a41k_f, o$bxp, w0isdn, b$xhon) {
    for (var kqa74j, y28z, akq_41 = ++gi0md5, q7ka4j = ewsg;;) {
        var inw0ds = t6kqj7['charAt'](akq_41);
        switch (inw0ds) {
            case '=':
                if (q7ka4j === ev8lur) kqa74j = t6kqj7['slice'](gi0md5, akq_41), q7ka4j = ej6;else {
                    if (q7ka4j !== et6l38r) throw new Error('attribute equal must after attrName');
                    q7ka4j = ej6;
                }
                break;
            case '\x27':
            case '\x22':
                if (q7ka4j === ej6 || q7ka4j === ev8lur) {
                    if (q7ka4j === ev8lur && (b$xhon['warning']('attribute value must after "="'), kqa74j = t6kqj7['slice'](gi0md5, akq_41)), gi0md5 = akq_41 + 0x1, akq_41 = t6kqj7['indexOf'](inw0ds, gi0md5), !(akq_41 > 0x0)) throw new Error('attribute value no end \'' + inw0ds + '\' match');
                    y28z = t6kqj7['slice'](gi0md5, akq_41)['replace'](/&#?\w+;/g, w0isdn), a41k_f['add'](kqa74j, y28z, gi0md5 - 0x1), q7ka4j = ea4k1jq;
                } else {
                    if (q7ka4j != eqajk4) throw new Error('attribute value must after "="');
                    y28z = t6kqj7['slice'](gi0md5, akq_41)['replace'](/&#?\w+;/g, w0isdn), a41k_f['add'](kqa74j, y28z, gi0md5), b$xhon['warning']('attribute "' + kqa74j + '" missed start quot(' + inw0ds + ')!!'), gi0md5 = akq_41 + 0x1, q7ka4j = ea4k1jq;
                }
                break;
            case '/':
                switch (q7ka4j) {
                    case ewsg:
                        a41k_f['setTagName'](t6kqj7['slice'](gi0md5, akq_41));
                    case ea4k1jq:
                    case ei0gw:
                    case e_9fe1p:
                        q7ka4j = e_9fe1p, a41k_f['closed'] = !0x0;
                    case eqajk4:
                    case ev8lur:
                    case et6l38r:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return b$xhon['error']('unexpected end of input'), q7ka4j == ewsg && a41k_f['setTagName'](t6kqj7['slice'](gi0md5, akq_41)), akq_41;
            case '>':
                switch (q7ka4j) {
                    case ewsg:
                        a41k_f['setTagName'](t6kqj7['slice'](gi0md5, akq_41));
                    case ea4k1jq:
                    case ei0gw:
                    case e_9fe1p:
                        break;
                    case eqajk4:
                    case ev8lur:
                        y28z = t6kqj7['slice'](gi0md5, akq_41), '/' === y28z['slice'](-0x1) && (a41k_f['closed'] = !0x0, y28z = y28z['slice'](0x0, -0x1));
                    case et6l38r:
                        q7ka4j === et6l38r && (y28z = kqa74j), q7ka4j == eqajk4 ? (b$xhon['warning']('attribute "' + y28z + '" missed quot(")!!'), a41k_f['add'](kqa74j, y28z['replace'](/&#?\w+;/g, w0isdn), gi0md5)) : ('http://www.w3.org/1999/xhtml' === o$bxp[''] && y28z['match'](/^(?:disabled|checked|selected)$/i) || b$xhon['warning']('attribute "' + y28z + '" missed value!! "' + y28z + '" instead!!'), a41k_f['add'](y28z, y28z, gi0md5));
                        break;
                    case ej6:
                        throw new Error('attribute value missed!!');
                }
                return akq_41;
            case '\u0080':
                inw0ds = '\x20';
            default:
                if ('\x20' >= inw0ds) switch (q7ka4j) {
                    case ewsg:
                        a41k_f['setTagName'](t6kqj7['slice'](gi0md5, akq_41)), q7ka4j = ei0gw;
                        break;
                    case ev8lur:
                        kqa74j = t6kqj7['slice'](gi0md5, akq_41), q7ka4j = et6l38r;
                        break;
                    case eqajk4:
                        var y28z = t6kqj7['slice'](gi0md5, akq_41)['replace'](/&#?\w+;/g, w0isdn);
                        b$xhon['warning']('attribute "' + y28z + '" missed quot(")!!'), a41k_f['add'](kqa74j, y28z, gi0md5);
                    case ea4k1jq:
                        q7ka4j = ei0gw;
                } else switch (q7ka4j) {
                    case et6l38r:
                        {
                            a41k_f['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === o$bxp[''] && kqa74j['match'](/^(?:disabled|checked|selected)$/i) || b$xhon['warning']('attribute "' + kqa74j + '" missed value!! "' + kqa74j + '" instead2!!'), a41k_f['add'](kqa74j, kqa74j, gi0md5), gi0md5 = akq_41, q7ka4j = ev8lur;
                        break;
                    case ea4k1jq:
                        b$xhon['warning']('attribute space is required"' + kqa74j + '\x22!!');
                    case ei0gw:
                        q7ka4j = ev8lur, gi0md5 = akq_41;
                        break;
                    case ej6:
                        q7ka4j = eqajk4, gi0md5 = akq_41;
                        break;
                    case e_9fe1p:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        akq_41++;
    }
}
function eonhx(lyur8v, u2r8v, yuz2cv) {
    for (var s0dig = lyur8v['tagName'], wsi0 = null, l6t7j = lyur8v['length']; l6t7j--;) {
        var _efp$ = lyur8v[l6t7j],
            o0w = _efp$['qName'],
            u8vyz2 = _efp$['value'],
            jqak14 = o0w['indexOf'](':');
        if (jqak14 > 0x0) var u836l = _efp$['prefix'] = o0w['slice'](0x0, jqak14),
            j4qa1k = o0w['slice'](jqak14 + 0x1),
            p$hx = 'xmlns' === u836l && j4qa1k;else j4qa1k = o0w, u836l = null, p$hx = 'xmlns' === o0w && '';
        _efp$['localName'] = j4qa1k, p$hx !== !0x1 && (null == wsi0 && (wsi0 = {}, ewinoh(yuz2cv, yuz2cv = {})), yuz2cv[p$hx] = wsi0[p$hx] = u8vyz2, _efp$['uri'] = 'http://www.w3.org/2000/xmlns/', u2r8v['startPrefixMapping'](p$hx, u8vyz2));
    }
    for (var l6t7j = lyur8v['length']; l6t7j--;) {
        _efp$ = lyur8v[l6t7j];
        var u836l = _efp$['prefix'];
        u836l && ('xml' === u836l && (_efp$['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== u836l && (_efp$['uri'] = yuz2cv[u836l || '']));
    }
    var jqak14 = s0dig['indexOf'](':');
    jqak14 > 0x0 ? (u836l = lyur8v['prefix'] = s0dig['slice'](0x0, jqak14), j4qa1k = lyur8v['localName'] = s0dig['slice'](jqak14 + 0x1)) : (u836l = null, j4qa1k = lyur8v['localName'] = s0dig);
    var ns0owi = lyur8v['uri'] = yuz2cv[u836l || ''];
    if (u2r8v['startElement'](ns0owi, j4qa1k, s0dig, lyur8v), !lyur8v['closed']) return lyur8v['currentNSMap'] = yuz2cv, lyur8v['localNSMap'] = wsi0, !0x0;
    if (u2r8v['endElement'](ns0owi, j4qa1k, s0dig), wsi0) {
        for (u836l in wsi0) u2r8v['endPrefixMapping'](u836l);
    }
}
function ebefp9$(uy2v8z, i5s0gd, yvc2u, swn0id, siw0dg) {
    if (/^(?:script|textarea)$/i['test'](yvc2u)) {
        var vzc2yu = uy2v8z['indexOf']('</' + yvc2u + '>', i5s0gd),
            l63tj = uy2v8z['substring'](i5s0gd + 0x1, vzc2yu);
        if (/[&<]/['test'](l63tj)) return (/^script$/i['test'](yvc2u) ? (siw0dg['characters'](l63tj, 0x0, l63tj['length']), vzc2yu) : (l63tj = l63tj['replace'](/&#?\w+;/g, swn0id), siw0dg['characters'](l63tj, 0x0, l63tj['length']), vzc2yu)
        );
    }
    return i5s0gd + 0x1;
}
function ehxpe(jtl7, vzu2cy, f19_pe, owsin) {
    var a1kf4 = owsin[f19_pe];
    return null == a1kf4 && (a1kf4 = jtl7['lastIndexOf']('</' + f19_pe + '>'), vzu2cy > a1kf4 && (a1kf4 = jtl7['lastIndexOf']('</' + f19_pe)), owsin[f19_pe] = a1kf4), vzu2cy > a1kf4;
}
function ewinoh(iw0sno, whoxs) {
    for (var nhs in iw0sno) whoxs[nhs] = iw0sno[nhs];
}
function ecuzvy2(lry8v, isdn0w, qa41_, xohnb$) {
    var i0swg = lry8v['charAt'](isdn0w + 0x2);
    switch (i0swg) {
        case '-':
            if ('-' === lry8v['charAt'](isdn0w + 0x3)) {
                var xbpe9 = lry8v['indexOf']('-->', isdn0w + 0x4);
                return xbpe9 > isdn0w ? (qa41_['comment'](lry8v, isdn0w + 0x4, xbpe9 - isdn0w - 0x4), xbpe9 + 0x3) : (xohnb$['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == lry8v['substr'](isdn0w + 0x3, 0x6)) {
                var xbpe9 = lry8v['indexOf'](']]>', isdn0w + 0x9);
                return qa41_['startCDATA'](), qa41_['characters'](lry8v, isdn0w + 0x9, xbpe9 - isdn0w - 0x9), qa41_['endCDATA'](), xbpe9 + 0x3;
            }
            var ur836 = ez2yuvc(lry8v, isdn0w),
                xn$bho = ur836['length'];
            if (xn$bho > 0x1 && /!doctype/i['test'](ur836[0x0][0x0])) {
                var xonwbh = ur836[0x1][0x0],
                    fp9$be = xn$bho > 0x3 && /^public$/i['test'](ur836[0x2][0x0]) && ur836[0x3][0x0],
                    shxnow = xn$bho > 0x4 && ur836[0x4][0x0],
                    shoxwn = ur836[xn$bho - 0x1];
                return qa41_['startDTD'](xonwbh, fp9$be && fp9$be['replace'](/^(['"])(.*?)\1$/, '$2'), shxnow && shxnow['replace'](/^(['"])(.*?)\1$/, '$2')), qa41_['endDTD'](), shoxwn['index'] + shoxwn[0x0]['length'];
            }
    }
    return -0x1;
}
function euryl8v(d0snwi, xh$obn, iwson) {
    var t63r8 = d0snwi['indexOf']('?>', xh$obn);
    if (t63r8) {
        var s50gi = d0snwi['substring'](xh$obn, t63r8)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (s50gi) {
            {
                s50gi[0x0]['length'];
            }
            return iwson['processingInstruction'](s50gi[0x1], s50gi[0x2]), t63r8 + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function e$9e_() {}
function ei0wsno(nwobh, aqk47j) {
    return nwobh['__proto__'] = aqk47j, nwobh;
}
function ez2yuvc(l3uv, kj7a4q) {
    var niw0so,
        uz2cy = [],
        xo$nhb = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (xo$nhb['lastIndex'] = kj7a4q, xo$nhb['exec'](l3uv); niw0so = xo$nhb['exec'](l3uv);) if (uz2cy['push'](niw0so), niw0so[0x1]) return uz2cy;
}
var eq7tk = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    e$bxe9p = new RegExp('[\\-\\.0-9' + eq7tk['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    eryluv8 = new RegExp('^' + eq7tk['source'] + e$bxe9p['source'] + '*(?::' + eq7tk['source'] + e$bxe9p['source'] + '*)?$'),
    ewsg = 0x0,
    ev8lur = 0x1,
    et6l38r = 0x2,
    ej6 = 0x3,
    eqajk4 = 0x4,
    ea4k1jq = 0x5,
    ei0gw = 0x6,
    e_9fe1p = 0x7;
ef91ep_['prototype'] = {
    'parse': function (fe1a9_, f9a4_, e1_9pf) {
        var a_1k4 = this['domBuilder'];
        a_1k4['startDocument'](), ewinoh(f9a4_, f9a4_ = {}), edg50i(fe1a9_, f9a4_, e1_9pf, a_1k4, this['errorHandler']), a_1k4['endDocument']();
    }
}, e$9e_['prototype'] = {
    'setTagName': function (wnxhbo) {
        if (!eryluv8['test'](wnxhbo)) throw new Error('invalid tagName:' + wnxhbo);
        this['tagName'] = wnxhbo;
    },
    'add': function (xwnb, dswg, u8yvz2) {
        if (!eryluv8['test'](xwnb)) throw new Error('invalid attribute:' + xwnb);
        this[this['length']++] = {
            'qName': xwnb,
            'value': dswg,
            'offset': u8yvz2
        };
    },
    'length': 0x0,
    'getLocalName': function (aq_4) {
        return this[aq_4]['localName'];
    },
    'getLocator': function (vrlu8) {
        return this[vrlu8]['locator'];
    },
    'getQName': function (k47tq) {
        return this[k47tq]['qName'];
    },
    'getURI': function (cyzvu2) {
        return this[cyzvu2]['uri'];
    },
    'getValue': function (oh$nbx) {
        return this[oh$nbx]['value'];
    }
}, ei0wsno({}, ei0wsno['prototype']) instanceof ei0wsno || (ei0wsno = function (p_1e9, fe91_a) {
    function nbhxwo() {}
    nbhxwo['prototype'] = fe91_a, nbhxwo = new nbhxwo();
    for (fe91_a in p_1e9) nbhxwo[fe91_a] = p_1e9[fe91_a];
    return nbhxwo;
}), exports['XMLReader'] = ef91ep_;