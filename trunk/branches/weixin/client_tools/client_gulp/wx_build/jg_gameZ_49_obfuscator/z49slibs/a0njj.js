var b = wx.$e;
function esqj352() {}
function eg9f_0(ta$ew, vrwt8, at$iew, g9omxf, n2qu5h) {
    function a_0$ki(zcrd7b) {
        if (zcrd7b > 0xffff) {
            zcrd7b -= 0x10000;
            var e_k$ai = 0xd800 + (zcrd7b >> 0xa),
                snjq52 = 0xdc00 + (0x3ff & zcrd7b);
            return String['fromCharCode'](e_k$ai, snjq52);
        }
        return String['fromCharCode'](zcrd7b);
    }
    function f_0aki(zd76c) {
        var b74dr = zd76c['slice'](0x1, -0x1);
        return b74dr in at$iew ? at$iew[b74dr] : '#' === b74dr['charAt'](0x0) ? a_0$ki(parseInt(b74dr['substr'](0x1)['replace']('x', '0x'))) : (n2qu5h['error']('entity not found:' + zd76c), zd76c);
    }
    function s3x1(ak$i0) {
        if (ak$i0 > o3xgj1) {
            var unqs5 = ta$ew['substring'](o3xgj1, ak$i0)['replace'](/&#?\w+;/g, f_0aki);
            cr7dz && r4dw8(o3xgj1), g9omxf['characters'](unqs5, 0x0, ak$i0 - o3xgj1), o3xgj1 = ak$i0;
        }
    }
    function r4dw8(b4dz7, ewt8) {
        for (; b4dz7 >= ogxmf9 && (ewt8 = _iak$e['exec'](ta$ew));) jqsn = ewt8['index'], ogxmf9 = jqsn + ewt8[0x0]['length'], cr7dz['lineNumber']++;
        cr7dz['columnNumber'] = b4dz7 - jqsn + 0x1;
    }
    for (var jqsn = 0x0, ogxmf9 = 0x0, _iak$e = /.*(?:\r\n?|\n)|.*$/g, cr7dz = g9omxf['locator'], i0f_9k = [{ 'currentNSMap': vrwt8 }], qu2lhn = {}, o3xgj1 = 0x0;;) {
        try {
            var f90km = ta$ew['indexOf']('<', o3xgj1);
            if (0x0 > f90km) {
                if (!ta$ew['substr'](o3xgj1)['match'](/^\s*$/)) {
                    var e$wit = g9omxf['doc'],
                        tv$eaw = e$wit['createTextNode'](ta$ew['substr'](o3xgj1));
                    e$wit['appendChild'](tv$eaw), g9omxf['currentElement'] = tv$eaw;
                }
                return;
            }
            switch (f90km > o3xgj1 && s3x1(f90km), ta$ew['charAt'](f90km + 0x1)) {
                case '/':
                    var nu52qs = ta$ew['indexOf']('>', f90km + 0x3),
                        vrd8z = ta$ew['substring'](f90km + 0x2, nu52qs),
                        wrv8t = i0f_9k['pop']();
                    0x0 > nu52qs ? (vrd8z = ta$ew['substring'](f90km + 0x2)['replace'](/[\s<].*/, ''), n2qu5h['error']('end tag name: ' + vrd8z + ' is not complete:' + wrv8t['tagName']), nu52qs = f90km + 0x1 + vrd8z['length']) : vrd8z['match'](/\s</) && (vrd8z = vrd8z['replace'](/[\s<].*/, ''), n2qu5h['error']('end tag name: ' + vrd8z + ' maybe not complete'), nu52qs = f90km + 0x1 + vrd8z['length']);
                    var j5nsq2 = wrv8t['localNSMap'],
                        un5q2 = wrv8t['tagName'] == vrd8z,
                        _09if = un5q2 || wrv8t['tagName'] && wrv8t['tagName']['toLowerCase']() == vrd8z['toLowerCase']();
                    if (_09if) {
                        if (g9omxf['endElement'](wrv8t['uri'], wrv8t['localName'], vrd8z), j5nsq2) {
                            for (var g_90f in j5nsq2) g9omxf['endPrefixMapping'](g_90f);
                        }
                        un5q2 || n2qu5h['fatalError']('end tag name: ' + vrd8z + ' is not match the current start tagName:' + wrv8t['tagName']);
                    } else i0f_9k['push'](wrv8t);
                    nu52qs++;
                    break;
                case '?':
                    cr7dz && r4dw8(f90km), nu52qs = ej5s1q(ta$ew, f90km, g9omxf);
                    break;
                case '!':
                    cr7dz && r4dw8(f90km), nu52qs = ehu2yl(ta$ew, f90km, g9omxf, n2qu5h);
                    break;
                default:
                    cr7dz && r4dw8(f90km);
                    var nh2qul = new e_90fi(),
                        z7d4 = i0f_9k[i0f_9k['length'] - 0x1]['currentNSMap'],
                        nu52qs = eetaiw(ta$ew, f90km, nh2qul, z7d4, f_0aki, n2qu5h),
                        s52q3j = nh2qul['length'];
                    if (!nh2qul['closed'] && ed4vr(ta$ew, nu52qs, nh2qul['tagName'], qu2lhn) && (nh2qul['closed'] = !0x0, at$iew['nbsp'] || n2qu5h['warning']('unclosed xml attribute')), cr7dz && s52q3j) {
                        for (var g9mf = ete8v$(cr7dz, {}), hylun = 0x0; s52q3j > hylun; hylun++) {
                            var rbdz7c = nh2qul[hylun];
                            r4dw8(rbdz7c['offset']), rbdz7c['locator'] = ete8v$(cr7dz, {});
                        }
                        g9omxf['locator'] = g9mf, es5qj13(nh2qul, g9omxf, z7d4) && i0f_9k['push'](nh2qul), g9omxf['locator'] = cr7dz;
                    } else es5qj13(nh2qul, g9omxf, z7d4) && i0f_9k['push'](nh2qul);
                    'http://www.w3.org/1999/xhtml' !== nh2qul['uri'] || nh2qul['closed'] ? nu52qs++ : nu52qs = eia_ek(ta$ew, nu52qs, nh2qul['tagName'], f_0aki, g9omxf);
            }
        } catch (u25nhq) {
            n2qu5h['error']('element parse error: ' + u25nhq), nu52qs = -0x1;
        }
        nu52qs > o3xgj1 ? o3xgj1 = nu52qs : s3x1(Math['max'](f90km, o3xgj1) + 0x1);
    }
}
function ete8v$(o91gmx, u5q2) {
    return u5q2['lineNumber'] = o91gmx['lineNumber'], u5q2['columnNumber'] = o91gmx['columnNumber'], u5q2;
}
function eetaiw(t8we, mx9of, wv4rd8, j52q3s, j3ox1, qn2h5u) {
    for (var r4bz7d, te4v8, r8vz4 = ++mx9of, dr74z = efmg_;;) {
        var xgfo = t8we['charAt'](r8vz4);
        switch (xgfo) {
            case '=':
                if (dr74z === eox3j1g) r4bz7d = t8we['slice'](mx9of, r8vz4), dr74z = ep7z6b;else {
                    if (dr74z !== etwi$) throw new Error('attribute equal must after attrName');
                    dr74z = ep7z6b;
                }
                break;
            case '\x27':
            case '\x22':
                if (dr74z === ep7z6b || dr74z === eox3j1g) {
                    if (dr74z === eox3j1g && (qn2h5u['warning']('attribute value must after "="'), r4bz7d = t8we['slice'](mx9of, r8vz4)), mx9of = r8vz4 + 0x1, r8vz4 = t8we['indexOf'](xgfo, mx9of), !(r8vz4 > 0x0)) throw new Error('attribute value no end \'' + xgfo + '\' match');
                    te4v8 = t8we['slice'](mx9of, r8vz4)['replace'](/&#?\w+;/g, j3ox1), wv4rd8['add'](r4bz7d, te4v8, mx9of - 0x1), dr74z = enhu5;
                } else {
                    if (dr74z != e_aiek$) throw new Error('attribute value must after "="');
                    te4v8 = t8we['slice'](mx9of, r8vz4)['replace'](/&#?\w+;/g, j3ox1), wv4rd8['add'](r4bz7d, te4v8, mx9of), qn2h5u['warning']('attribute "' + r4bz7d + '" missed start quot(' + xgfo + ')!!'), mx9of = r8vz4 + 0x1, dr74z = enhu5;
                }
                break;
            case '/':
                switch (dr74z) {
                    case efmg_:
                        wv4rd8['setTagName'](t8we['slice'](mx9of, r8vz4));
                    case enhu5:
                    case ezb4d7r:
                    case em_9g:
                        dr74z = em_9g, wv4rd8['closed'] = !0x0;
                    case e_aiek$:
                    case eox3j1g:
                    case etwi$:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return qn2h5u['error']('unexpected end of input'), dr74z == efmg_ && wv4rd8['setTagName'](t8we['slice'](mx9of, r8vz4)), r8vz4;
            case '>':
                switch (dr74z) {
                    case efmg_:
                        wv4rd8['setTagName'](t8we['slice'](mx9of, r8vz4));
                    case enhu5:
                    case ezb4d7r:
                    case em_9g:
                        break;
                    case e_aiek$:
                    case eox3j1g:
                        te4v8 = t8we['slice'](mx9of, r8vz4), '/' === te4v8['slice'](-0x1) && (wv4rd8['closed'] = !0x0, te4v8 = te4v8['slice'](0x0, -0x1));
                    case etwi$:
                        dr74z === etwi$ && (te4v8 = r4bz7d), dr74z == e_aiek$ ? (qn2h5u['warning']('attribute "' + te4v8 + '" missed quot(")!!'), wv4rd8['add'](r4bz7d, te4v8['replace'](/&#?\w+;/g, j3ox1), mx9of)) : ('http://www.w3.org/1999/xhtml' === j52q3s[''] && te4v8['match'](/^(?:disabled|checked|selected)$/i) || qn2h5u['warning']('attribute "' + te4v8 + '" missed value!! "' + te4v8 + '" instead!!'), wv4rd8['add'](te4v8, te4v8, mx9of));
                        break;
                    case ep7z6b:
                        throw new Error('attribute value missed!!');
                }
                return r8vz4;
            case '\u0080':
                xgfo = '\x20';
            default:
                if ('\x20' >= xgfo) switch (dr74z) {
                    case efmg_:
                        wv4rd8['setTagName'](t8we['slice'](mx9of, r8vz4)), dr74z = ezb4d7r;
                        break;
                    case eox3j1g:
                        r4bz7d = t8we['slice'](mx9of, r8vz4), dr74z = etwi$;
                        break;
                    case e_aiek$:
                        var te4v8 = t8we['slice'](mx9of, r8vz4)['replace'](/&#?\w+;/g, j3ox1);
                        qn2h5u['warning']('attribute "' + te4v8 + '" missed quot(")!!'), wv4rd8['add'](r4bz7d, te4v8, mx9of);
                    case enhu5:
                        dr74z = ezb4d7r;
                } else switch (dr74z) {
                    case etwi$:
                        {
                            wv4rd8['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === j52q3s[''] && r4bz7d['match'](/^(?:disabled|checked|selected)$/i) || qn2h5u['warning']('attribute "' + r4bz7d + '" missed value!! "' + r4bz7d + '" instead2!!'), wv4rd8['add'](r4bz7d, r4bz7d, mx9of), mx9of = r8vz4, dr74z = eox3j1g;
                        break;
                    case enhu5:
                        qn2h5u['warning']('attribute space is required"' + r4bz7d + '\x22!!');
                    case ezb4d7r:
                        dr74z = eox3j1g, mx9of = r8vz4;
                        break;
                    case ep7z6b:
                        dr74z = e_aiek$, mx9of = r8vz4;
                        break;
                    case em_9g:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        r8vz4++;
    }
}
function es5qj13(sj235q, xj1go, ewti$a) {
    for (var t8w4rv = sj235q['tagName'], mfo9xg = null, qsj235 = sj235q['length']; qsj235--;) {
        var f9m0_ = sj235q[qsj235],
            mg = f9m0_['qName'],
            j5s2nq = f9m0_['value'],
            ylu = mg['indexOf'](':');
        if (ylu > 0x0) var jqs5 = f9m0_['prefix'] = mg['slice'](0x0, ylu),
            pzcb7 = mg['slice'](ylu + 0x1),
            rzv84d = 'xmlns' === jqs5 && pzcb7;else pzcb7 = mg, jqs5 = null, rzv84d = 'xmlns' === mg && '';
        f9m0_['localName'] = pzcb7, rzv84d !== !0x1 && (null == mfo9xg && (mfo9xg = {}, eh2uynl(ewti$a, ewti$a = {})), ewti$a[rzv84d] = mfo9xg[rzv84d] = j5s2nq, f9m0_['uri'] = 'http://www.w3.org/2000/xmlns/', xj1go['startPrefixMapping'](rzv84d, j5s2nq));
    }
    for (var qsj235 = sj235q['length']; qsj235--;) {
        f9m0_ = sj235q[qsj235];
        var jqs5 = f9m0_['prefix'];
        jqs5 && ('xml' === jqs5 && (f9m0_['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== jqs5 && (f9m0_['uri'] = ewti$a[jqs5 || '']));
    }
    var ylu = t8w4rv['indexOf'](':');
    ylu > 0x0 ? (jqs5 = sj235q['prefix'] = t8w4rv['slice'](0x0, ylu), pzcb7 = sj235q['localName'] = t8w4rv['slice'](ylu + 0x1)) : (jqs5 = null, pzcb7 = sj235q['localName'] = t8w4rv);
    var qj5s1 = sj235q['uri'] = ewti$a[jqs5 || ''];
    if (xj1go['startElement'](qj5s1, pzcb7, t8w4rv, sj235q), !sj235q['closed']) return sj235q['currentNSMap'] = ewti$a, sj235q['localNSMap'] = mfo9xg, !0x0;
    if (xj1go['endElement'](qj5s1, pzcb7, t8w4rv), mfo9xg) {
        for (jqs5 in mfo9xg) xj1go['endPrefixMapping'](jqs5);
    }
}
function eia_ek(x3mg, j5nsq, ogmf, dcb67z, q2s5nu) {
    if (/^(?:script|textarea)$/i['test'](ogmf)) {
        var fm_0g9 = x3mg['indexOf']('</' + ogmf + '>', j5nsq),
            iw$eta = x3mg['substring'](j5nsq + 0x1, fm_0g9);
        if (/[&<]/['test'](iw$eta)) return (/^script$/i['test'](ogmf) ? (q2s5nu['characters'](iw$eta, 0x0, iw$eta['length']), fm_0g9) : (iw$eta = iw$eta['replace'](/&#?\w+;/g, dcb67z), q2s5nu['characters'](iw$eta, 0x0, iw$eta['length']), fm_0g9)
        );
    }
    return j5nsq + 0x1;
}
function ed4vr(s23qj, lhu2nq, s5q13j, w$ate) {
    var e$v8t = w$ate[s5q13j];
    return null == e$v8t && (e$v8t = s23qj['lastIndexOf']('</' + s5q13j + '>'), lhu2nq > e$v8t && (e$v8t = s23qj['lastIndexOf']('</' + s5q13j)), w$ate[s5q13j] = e$v8t), lhu2nq > e$v8t;
}
function eh2uynl(drz4v, jo1s3x) {
    for (var w$avet in drz4v) jo1s3x[w$avet] = drz4v[w$avet];
}
function ehu2yl(yluh2, af_0ik, wtvr84, c7p) {
    var we$tva = yluh2['charAt'](af_0ik + 0x2);
    switch (we$tva) {
        case '-':
            if ('-' === yluh2['charAt'](af_0ik + 0x3)) {
                var tawv$e = yluh2['indexOf']('-->', af_0ik + 0x4);
                return tawv$e > af_0ik ? (wtvr84['comment'](yluh2, af_0ik + 0x4, tawv$e - af_0ik - 0x4), tawv$e + 0x3) : (c7p['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == yluh2['substr'](af_0ik + 0x3, 0x6)) {
                var tawv$e = yluh2['indexOf'](']]>', af_0ik + 0x9);
                return wtvr84['startCDATA'](), wtvr84['characters'](yluh2, af_0ik + 0x9, tawv$e - af_0ik - 0x9), wtvr84['endCDATA'](), tawv$e + 0x3;
            }
            var hql2nu = eg90mfo(yluh2, af_0ik),
                zdbr4 = hql2nu['length'];
            if (zdbr4 > 0x1 && /!doctype/i['test'](hql2nu[0x0][0x0])) {
                var e8v4w = hql2nu[0x1][0x0],
                    zc7drb = zdbr4 > 0x3 && /^public$/i['test'](hql2nu[0x2][0x0]) && hql2nu[0x3][0x0],
                    mkf0_ = zdbr4 > 0x4 && hql2nu[0x4][0x0],
                    $ai_ek = hql2nu[zdbr4 - 0x1];
                return wtvr84['startDTD'](e8v4w, zc7drb && zc7drb['replace'](/^(['"])(.*?)\1$/, '$2'), mkf0_ && mkf0_['replace'](/^(['"])(.*?)\1$/, '$2')), wtvr84['endDTD'](), $ai_ek['index'] + $ai_ek[0x0]['length'];
            }
    }
    return -0x1;
}
function ej5s1q(e_i$k, og9xfm, nly2) {
    var uh2q = e_i$k['indexOf']('?>', og9xfm);
    if (uh2q) {
        var k_fm9 = e_i$k['substring'](og9xfm, uh2q)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (k_fm9) {
            {
                k_fm9[0x0]['length'];
            }
            return nly2['processingInstruction'](k_fm9[0x1], k_fm9[0x2]), uh2q + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function e_90fi() {}
function euhy(ik$e_a, zr7db4) {
    return ik$e_a['__proto__'] = zr7db4, ik$e_a;
}
function eg90mfo(_gfm90, cpb67z) {
    var i09,
        w$vt8e = [],
        rzb7cd = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (rzb7cd['lastIndex'] = cpb67z, rzb7cd['exec'](_gfm90); i09 = rzb7cd['exec'](_gfm90);) if (w$vt8e['push'](i09), i09[0x1]) return w$vt8e;
}
var e$ia_0 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    emf9k_0 = new RegExp('[\\-\\.0-9' + e$ia_0['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    eb6zdc7 = new RegExp('^' + e$ia_0['source'] + emf9k_0['source'] + '*(?::' + e$ia_0['source'] + emf9k_0['source'] + '*)?$'),
    efmg_ = 0x0,
    eox3j1g = 0x1,
    etwi$ = 0x2,
    ep7z6b = 0x3,
    e_aiek$ = 0x4,
    enhu5 = 0x5,
    ezb4d7r = 0x6,
    em_9g = 0x7;
esqj352['prototype'] = {
    'parse': function (jns5, $8wvet, _kif) {
        var iwtea$ = this['domBuilder'];
        iwtea$['startDocument'](), eh2uynl($8wvet, $8wvet = {}), eg9f_0(jns5, $8wvet, _kif, iwtea$, this['errorHandler']), iwtea$['endDocument']();
    }
}, e_90fi['prototype'] = {
    'setTagName': function (t$kaei) {
        if (!eb6zdc7['test'](t$kaei)) throw new Error('invalid tagName:' + t$kaei);
        this['tagName'] = t$kaei;
    },
    'add': function (bcp76, h5qnu, ik9f_) {
        if (!eb6zdc7['test'](bcp76)) throw new Error('invalid attribute:' + bcp76);
        this[this['length']++] = {
            'qName': bcp76,
            'value': h5qnu,
            'offset': ik9f_
        };
    },
    'length': 0x0,
    'getLocalName': function (nlhqu) {
        return this[nlhqu]['localName'];
    },
    'getLocator': function (kia$e_) {
        return this[kia$e_]['locator'];
    },
    'getQName': function (jgx) {
        return this[jgx]['qName'];
    },
    'getURI': function (usn5q2) {
        return this[usn5q2]['uri'];
    },
    'getValue': function (wi$ta) {
        return this[wi$ta]['value'];
    }
}, euhy({}, euhy['prototype']) instanceof euhy || (euhy = function (atie$w, usn2q) {
    function iae() {}
    iae['prototype'] = usn2q, iae = new iae();
    for (usn2q in atie$w) iae[usn2q] = atie$w[usn2q];
    return iae;
}), exports['XMLReader'] = esqj352;