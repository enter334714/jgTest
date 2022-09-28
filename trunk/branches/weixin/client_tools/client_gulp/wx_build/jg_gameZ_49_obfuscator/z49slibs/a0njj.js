var b = wx.$e;
function ex13mgo() {}
function ekfi_a(gmo9f, cdr7bz, qjs3, x3os, v$wtae) {
    function ojx31s(sq1j3) {
        if (sq1j3 > 0xffff) {
            sq1j3 -= 0x10000;
            var v4dw8r = 0xd800 + (sq1j3 >> 0xa),
                wia$et = 0xdc00 + (0x3ff & sq1j3);
            return String['fromCharCode'](v4dw8r, wia$et);
        }
        return String['fromCharCode'](sq1j3);
    }
    function akfi_(oxg31m) {
        var gm9o0f = oxg31m['slice'](0x1, -0x1);
        return gm9o0f in qjs3 ? qjs3[gm9o0f] : '#' === gm9o0f['charAt'](0x0) ? ojx31s(parseInt(gm9o0f['substr'](0x1)['replace']('x', '0x'))) : (v$wtae['error']('entity not found:' + oxg31m), oxg31m);
    }
    function js153x(drwv48) {
        if (drwv48 > _ki09f) {
            var v4wrd = gmo9f['substring'](_ki09f, drwv48)['replace'](/&#?\w+;/g, akfi_);
            mo1x3g && ogf9m(_ki09f), x3os['characters'](v4wrd, 0x0, drwv48 - _ki09f), _ki09f = drwv48;
        }
    }
    function ogf9m(v4we, jn5s2) {
        for (; v4we >= j13xs5 && (jn5s2 = x1og3j['exec'](gmo9f));) atie = jn5s2['index'], j13xs5 = atie + jn5s2[0x0]['length'], mo1x3g['lineNumber']++;
        mo1x3g['columnNumber'] = v4we - atie + 0x1;
    }
    for (var atie = 0x0, j13xs5 = 0x0, x1og3j = /.*(?:\r\n?|\n)|.*$/g, mo1x3g = x3os['locator'], n2uq5h = [{ 'currentNSMap': cdr7bz }], m9gx = {}, _ki09f = 0x0;;) {
        try {
            var n5hq = gmo9f['indexOf']('<', _ki09f);
            if (0x0 > n5hq) {
                if (!gmo9f['substr'](_ki09f)['match'](/^\s*$/)) {
                    var ei$t = x3os['doc'],
                        xj1g3o = ei$t['createTextNode'](gmo9f['substr'](_ki09f));
                    ei$t['appendChild'](xj1g3o), x3os['currentElement'] = xj1g3o;
                }
                return;
            }
            switch (n5hq > _ki09f && js153x(n5hq), gmo9f['charAt'](n5hq + 0x1)) {
                case '/':
                    var m_gf = gmo9f['indexOf']('>', n5hq + 0x3),
                        pcb67z = gmo9f['substring'](n5hq + 0x2, m_gf),
                        d7b6zc = n2uq5h['pop']();
                    0x0 > m_gf ? (pcb67z = gmo9f['substring'](n5hq + 0x2)['replace'](/[\s<].*/, ''), v$wtae['error']('end tag name: ' + pcb67z + ' is not complete:' + d7b6zc['tagName']), m_gf = n5hq + 0x1 + pcb67z['length']) : pcb67z['match'](/\s</) && (pcb67z = pcb67z['replace'](/[\s<].*/, ''), v$wtae['error']('end tag name: ' + pcb67z + ' maybe not complete'), m_gf = n5hq + 0x1 + pcb67z['length']);
                    var avte$ = d7b6zc['localNSMap'],
                        _9if0 = d7b6zc['tagName'] == pcb67z,
                        wr8v4t = _9if0 || d7b6zc['tagName'] && d7b6zc['tagName']['toLowerCase']() == pcb67z['toLowerCase']();
                    if (wr8v4t) {
                        if (x3os['endElement'](d7b6zc['uri'], d7b6zc['localName'], pcb67z), avte$) {
                            for (var $witae in avte$) x3os['endPrefixMapping']($witae);
                        }
                        _9if0 || v$wtae['fatalError']('end tag name: ' + pcb67z + ' is not match the current start tagName:' + d7b6zc['tagName']);
                    } else n2uq5h['push'](d7b6zc);
                    m_gf++;
                    break;
                case '?':
                    mo1x3g && ogf9m(n5hq), m_gf = eqn2hlu(gmo9f, n5hq, x3os);
                    break;
                case '!':
                    mo1x3g && ogf9m(n5hq), m_gf = en5sq(gmo9f, n5hq, x3os, v$wtae);
                    break;
                default:
                    mo1x3g && ogf9m(n5hq);
                    var x1g9m = new ecr7dz(),
                        z6cb7d = n2uq5h[n2uq5h['length'] - 0x1]['currentNSMap'],
                        m_gf = er8t4v(gmo9f, n5hq, x1g9m, z6cb7d, akfi_, v$wtae),
                        sj315x = x1g9m['length'];
                    if (!x1g9m['closed'] && enq2s(gmo9f, m_gf, x1g9m['tagName'], m9gx) && (x1g9m['closed'] = !0x0, qjs3['nbsp'] || v$wtae['warning']('unclosed xml attribute')), mo1x3g && sj315x) {
                        for (var ea_$ki = et4wv8(mo1x3g, {}), hlunq = 0x0; sj315x > hlunq; hlunq++) {
                            var wt$ia = x1g9m[hlunq];
                            ogf9m(wt$ia['offset']), wt$ia['locator'] = et4wv8(mo1x3g, {});
                        }
                        x3os['locator'] = ea_$ki, eeiw$a(x1g9m, x3os, z6cb7d) && n2uq5h['push'](x1g9m), x3os['locator'] = mo1x3g;
                    } else eeiw$a(x1g9m, x3os, z6cb7d) && n2uq5h['push'](x1g9m);
                    'http://www.w3.org/1999/xhtml' !== x1g9m['uri'] || x1g9m['closed'] ? m_gf++ : m_gf = et$akie(gmo9f, m_gf, x1g9m['tagName'], akfi_, x3os);
            }
        } catch (te$8) {
            v$wtae['error']('element parse error: ' + te$8), m_gf = -0x1;
        }
        m_gf > _ki09f ? _ki09f = m_gf : js153x(Math['max'](n5hq, _ki09f) + 0x1);
    }
}
function et4wv8(ak0fi_, $e_ki) {
    return $e_ki['lineNumber'] = ak0fi_['lineNumber'], $e_ki['columnNumber'] = ak0fi_['columnNumber'], $e_ki;
}
function er8t4v(fm0g9_, v4zdr8, hn2u5q, dcz7rb, j5q1, $a0k) {
    for (var m9o1gx, $etvwa, s351x = ++v4zdr8, t4w8e = ehl2uy;;) {
        var s1jx53 = fm0g9_['charAt'](s351x);
        switch (s1jx53) {
            case '=':
                if (t4w8e === ei$ek_) m9o1gx = fm0g9_['slice'](v4zdr8, s351x), t4w8e = eetw4;else {
                    if (t4w8e !== elyn2hu) throw new Error('attribute equal must after attrName');
                    t4w8e = eetw4;
                }
                break;
            case '\x27':
            case '\x22':
                if (t4w8e === eetw4 || t4w8e === ei$ek_) {
                    if (t4w8e === ei$ek_ && ($a0k['warning']('attribute value must after "="'), m9o1gx = fm0g9_['slice'](v4zdr8, s351x)), v4zdr8 = s351x + 0x1, s351x = fm0g9_['indexOf'](s1jx53, v4zdr8), !(s351x > 0x0)) throw new Error('attribute value no end \'' + s1jx53 + '\' match');
                    $etvwa = fm0g9_['slice'](v4zdr8, s351x)['replace'](/&#?\w+;/g, j5q1), hn2u5q['add'](m9o1gx, $etvwa, v4zdr8 - 0x1), t4w8e = eq2hnu5;
                } else {
                    if (t4w8e != ewt8e) throw new Error('attribute value must after "="');
                    $etvwa = fm0g9_['slice'](v4zdr8, s351x)['replace'](/&#?\w+;/g, j5q1), hn2u5q['add'](m9o1gx, $etvwa, v4zdr8), $a0k['warning']('attribute "' + m9o1gx + '" missed start quot(' + s1jx53 + ')!!'), v4zdr8 = s351x + 0x1, t4w8e = eq2hnu5;
                }
                break;
            case '/':
                switch (t4w8e) {
                    case ehl2uy:
                        hn2u5q['setTagName'](fm0g9_['slice'](v4zdr8, s351x));
                    case eq2hnu5:
                    case e$teaik:
                    case eo13gm:
                        t4w8e = eo13gm, hn2u5q['closed'] = !0x0;
                    case ewt8e:
                    case ei$ek_:
                    case elyn2hu:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return $a0k['error']('unexpected end of input'), t4w8e == ehl2uy && hn2u5q['setTagName'](fm0g9_['slice'](v4zdr8, s351x)), s351x;
            case '>':
                switch (t4w8e) {
                    case ehl2uy:
                        hn2u5q['setTagName'](fm0g9_['slice'](v4zdr8, s351x));
                    case eq2hnu5:
                    case e$teaik:
                    case eo13gm:
                        break;
                    case ewt8e:
                    case ei$ek_:
                        $etvwa = fm0g9_['slice'](v4zdr8, s351x), '/' === $etvwa['slice'](-0x1) && (hn2u5q['closed'] = !0x0, $etvwa = $etvwa['slice'](0x0, -0x1));
                    case elyn2hu:
                        t4w8e === elyn2hu && ($etvwa = m9o1gx), t4w8e == ewt8e ? ($a0k['warning']('attribute "' + $etvwa + '" missed quot(")!!'), hn2u5q['add'](m9o1gx, $etvwa['replace'](/&#?\w+;/g, j5q1), v4zdr8)) : ('http://www.w3.org/1999/xhtml' === dcz7rb[''] && $etvwa['match'](/^(?:disabled|checked|selected)$/i) || $a0k['warning']('attribute "' + $etvwa + '" missed value!! "' + $etvwa + '" instead!!'), hn2u5q['add']($etvwa, $etvwa, v4zdr8));
                        break;
                    case eetw4:
                        throw new Error('attribute value missed!!');
                }
                return s351x;
            case '\u0080':
                s1jx53 = '\x20';
            default:
                if ('\x20' >= s1jx53) switch (t4w8e) {
                    case ehl2uy:
                        hn2u5q['setTagName'](fm0g9_['slice'](v4zdr8, s351x)), t4w8e = e$teaik;
                        break;
                    case ei$ek_:
                        m9o1gx = fm0g9_['slice'](v4zdr8, s351x), t4w8e = elyn2hu;
                        break;
                    case ewt8e:
                        var $etvwa = fm0g9_['slice'](v4zdr8, s351x)['replace'](/&#?\w+;/g, j5q1);
                        $a0k['warning']('attribute "' + $etvwa + '" missed quot(")!!'), hn2u5q['add'](m9o1gx, $etvwa, v4zdr8);
                    case eq2hnu5:
                        t4w8e = e$teaik;
                } else switch (t4w8e) {
                    case elyn2hu:
                        {
                            hn2u5q['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === dcz7rb[''] && m9o1gx['match'](/^(?:disabled|checked|selected)$/i) || $a0k['warning']('attribute "' + m9o1gx + '" missed value!! "' + m9o1gx + '" instead2!!'), hn2u5q['add'](m9o1gx, m9o1gx, v4zdr8), v4zdr8 = s351x, t4w8e = ei$ek_;
                        break;
                    case eq2hnu5:
                        $a0k['warning']('attribute space is required"' + m9o1gx + '\x22!!');
                    case e$teaik:
                        t4w8e = ei$ek_, v4zdr8 = s351x;
                        break;
                    case eetw4:
                        t4w8e = ewt8e, v4zdr8 = s351x;
                        break;
                    case eo13gm:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        s351x++;
    }
}
function eeiw$a(bczd, drzc, xg1o3) {
    for (var e8w4t = bczd['tagName'], aike$t = null, yuh = bczd['length']; yuh--;) {
        var mx9ogf = bczd[yuh],
            nlqu2h = mx9ogf['qName'],
            bpc6 = mx9ogf['value'],
            og3jx1 = nlqu2h['indexOf'](':');
        if (og3jx1 > 0x0) var $taeik = mx9ogf['prefix'] = nlqu2h['slice'](0x0, og3jx1),
            bcp = nlqu2h['slice'](og3jx1 + 0x1),
            o0mgf = 'xmlns' === $taeik && bcp;else bcp = nlqu2h, $taeik = null, o0mgf = 'xmlns' === nlqu2h && '';
        mx9ogf['localName'] = bcp, o0mgf !== !0x1 && (null == aike$t && (aike$t = {}, egm3ox1(xg1o3, xg1o3 = {})), xg1o3[o0mgf] = aike$t[o0mgf] = bpc6, mx9ogf['uri'] = 'http://www.w3.org/2000/xmlns/', drzc['startPrefixMapping'](o0mgf, bpc6));
    }
    for (var yuh = bczd['length']; yuh--;) {
        mx9ogf = bczd[yuh];
        var $taeik = mx9ogf['prefix'];
        $taeik && ('xml' === $taeik && (mx9ogf['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== $taeik && (mx9ogf['uri'] = xg1o3[$taeik || '']));
    }
    var og3jx1 = e8w4t['indexOf'](':');
    og3jx1 > 0x0 ? ($taeik = bczd['prefix'] = e8w4t['slice'](0x0, og3jx1), bcp = bczd['localName'] = e8w4t['slice'](og3jx1 + 0x1)) : ($taeik = null, bcp = bczd['localName'] = e8w4t);
    var nly2u = bczd['uri'] = xg1o3[$taeik || ''];
    if (drzc['startElement'](nly2u, bcp, e8w4t, bczd), !bczd['closed']) return bczd['currentNSMap'] = xg1o3, bczd['localNSMap'] = aike$t, !0x0;
    if (drzc['endElement'](nly2u, bcp, e8w4t), aike$t) {
        for ($taeik in aike$t) drzc['endPrefixMapping']($taeik);
    }
}
function et$akie(v8z4d, $kieta, m9gxf, zbp, sx1j35) {
    if (/^(?:script|textarea)$/i['test'](m9gxf)) {
        var m13gxo = v8z4d['indexOf']('</' + m9gxf + '>', $kieta),
            _ak0i = v8z4d['substring']($kieta + 0x1, m13gxo);
        if (/[&<]/['test'](_ak0i)) return (/^script$/i['test'](m9gxf) ? (sx1j35['characters'](_ak0i, 0x0, _ak0i['length']), m13gxo) : (_ak0i = _ak0i['replace'](/&#?\w+;/g, zbp), sx1j35['characters'](_ak0i, 0x0, _ak0i['length']), m13gxo)
        );
    }
    return $kieta + 0x1;
}
function enq2s(zbr74, tewva, nuhq2l, x153js) {
    var nluq = x153js[nuhq2l];
    return null == nluq && (nluq = zbr74['lastIndexOf']('</' + nuhq2l + '>'), tewva > nluq && (nluq = zbr74['lastIndexOf']('</' + nuhq2l)), x153js[nuhq2l] = nluq), tewva > nluq;
}
function egm3ox1(n5hu2, rd847) {
    for (var v48rt in n5hu2) rd847[v48rt] = n5hu2[v48rt];
}
function en5sq(dwr, cz76d, rtv, p7bcz) {
    var qul2h = dwr['charAt'](cz76d + 0x2);
    switch (qul2h) {
        case '-':
            if ('-' === dwr['charAt'](cz76d + 0x3)) {
                var xofgm9 = dwr['indexOf']('-->', cz76d + 0x4);
                return xofgm9 > cz76d ? (rtv['comment'](dwr, cz76d + 0x4, xofgm9 - cz76d - 0x4), xofgm9 + 0x3) : (p7bcz['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == dwr['substr'](cz76d + 0x3, 0x6)) {
                var xofgm9 = dwr['indexOf'](']]>', cz76d + 0x9);
                return rtv['startCDATA'](), rtv['characters'](dwr, cz76d + 0x9, xofgm9 - cz76d - 0x9), rtv['endCDATA'](), xofgm9 + 0x3;
            }
            var ewtv8$ = ez4drb7(dwr, cz76d),
                s51q3 = ewtv8$['length'];
            if (s51q3 > 0x1 && /!doctype/i['test'](ewtv8$[0x0][0x0])) {
                var s5x1j = ewtv8$[0x1][0x0],
                    n5qjs = s51q3 > 0x3 && /^public$/i['test'](ewtv8$[0x2][0x0]) && ewtv8$[0x3][0x0],
                    d84zv = s51q3 > 0x4 && ewtv8$[0x4][0x0],
                    mgof0 = ewtv8$[s51q3 - 0x1];
                return rtv['startDTD'](s5x1j, n5qjs && n5qjs['replace'](/^(['"])(.*?)\1$/, '$2'), d84zv && d84zv['replace'](/^(['"])(.*?)\1$/, '$2')), rtv['endDTD'](), mgof0['index'] + mgof0[0x0]['length'];
            }
    }
    return -0x1;
}
function eqn2hlu(dcr7zb, bzcdr7, g91xo) {
    var k0a_ = dcr7zb['indexOf']('?>', bzcdr7);
    if (k0a_) {
        var k0ia_ = dcr7zb['substring'](bzcdr7, k0a_)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (k0ia_) {
            {
                k0ia_[0x0]['length'];
            }
            return g91xo['processingInstruction'](k0ia_[0x1], k0ia_[0x2]), k0a_ + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function ecr7dz() {}
function ewt4ve(dzc6b, _09mk) {
    return dzc6b['__proto__'] = _09mk, dzc6b;
}
function ez4drb7(ai_$k0, m90_g) {
    var _9fkm0,
        v4rt8w = [],
        i_af = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (i_af['lastIndex'] = m90_g, i_af['exec'](ai_$k0); _9fkm0 = i_af['exec'](ai_$k0);) if (v4rt8w['push'](_9fkm0), _9fkm0[0x1]) return v4rt8w;
}
var exos1j3 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    er8zd4 = new RegExp('[\\-\\.0-9' + exos1j3['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    ej53s2q = new RegExp('^' + exos1j3['source'] + er8zd4['source'] + '*(?::' + exos1j3['source'] + er8zd4['source'] + '*)?$'),
    ehl2uy = 0x0,
    ei$ek_ = 0x1,
    elyn2hu = 0x2,
    eetw4 = 0x3,
    ewt8e = 0x4,
    eq2hnu5 = 0x5,
    e$teaik = 0x6,
    eo13gm = 0x7;
ex13mgo['prototype'] = {
    'parse': function (gm0_f, fmg90_, hl2qun) {
        var a$wiet = this['domBuilder'];
        a$wiet['startDocument'](), egm3ox1(fmg90_, fmg90_ = {}), ekfi_a(gm0_f, fmg90_, hl2qun, a$wiet, this['errorHandler']), a$wiet['endDocument']();
    }
}, ecr7dz['prototype'] = {
    'setTagName': function (js1ox) {
        if (!ej53s2q['test'](js1ox)) throw new Error('invalid tagName:' + js1ox);
        this['tagName'] = js1ox;
    },
    'add': function (ewt48v, eitwa$, qs31) {
        if (!ej53s2q['test'](ewt48v)) throw new Error('invalid attribute:' + ewt48v);
        this[this['length']++] = {
            'qName': ewt48v,
            'value': eitwa$,
            'offset': qs31
        };
    },
    'length': 0x0,
    'getLocalName': function (c7dzb) {
        return this[c7dzb]['localName'];
    },
    'getLocator': function (pz7c6) {
        return this[pz7c6]['locator'];
    },
    'getQName': function (xfm9) {
        return this[xfm9]['qName'];
    },
    'getURI': function (p6zb7) {
        return this[p6zb7]['uri'];
    },
    'getValue': function (_90fm) {
        return this[_90fm]['value'];
    }
}, ewt4ve({}, ewt4ve['prototype']) instanceof ewt4ve || (ewt4ve = function (lhq, xfomg) {
    function nsuq5() {}
    nsuq5['prototype'] = xfomg, nsuq5 = new nsuq5();
    for (xfomg in lhq) nsuq5[xfomg] = lhq[xfomg];
    return nsuq5;
}), exports['XMLReader'] = ex13mgo;