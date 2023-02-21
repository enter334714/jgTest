var G = wx.$E;
function E$kc5j6() {}
function Ekc6(r9vqau, $bm7c4, c5k$6, wfb7, ygp9h) {
    function qvaru(wfr8q) {
        if (wfr8q > 0xffff) {
            wfr8q -= 0x10000;
            var gynlpx = 0xd800 + (wfr8q >> 0xa),
                hg9pua = 0xdc00 + (0x3ff & wfr8q);
            return String['fromCharCode'](gynlpx, hg9pua);
        }
        return String['fromCharCode'](wfr8q);
    }
    function $djk6($cjk65) {
        var ha9uq = $cjk65['slice'](0x1, -0x1);
        return ha9uq in c5k$6 ? c5k$6[ha9uq] : '#' === ha9uq['charAt'](0x0) ? qvaru(parseInt(ha9uq['substr'](0x1)['replace']('x', '0x'))) : (ygp9h['error']('entity not found:' + $cjk65), $cjk65);
    }
    function uyg9h(rwvf78) {
        if (rwvf78 > mf748b) {
            var r7fwv8 = r9vqau['substring'](mf748b, rwvf78)['replace'](/&#?\w+;/g, $djk6);
            t13s_2 && phnl(mf748b), wfb7['characters'](r7fwv8, 0x0, rwvf78 - mf748b), mf748b = rwvf78;
        }
    }
    function phnl(ru9qh, ua9hqg) {
        for (; ru9qh >= npygxl && (ua9hqg = yup9h['exec'](r9vqau));) j$k6 = ua9hqg['index'], npygxl = j$k6 + ua9hqg[0x0]['length'], t13s_2['lineNumber']++;
        t13s_2['columnNumber'] = ru9qh - j$k6 + 0x1;
    }
    for (var j$k6 = 0x0, npygxl = 0x0, yup9h = /.*(?:\r\n?|\n)|.*$/g, t13s_2 = wfb7['locator'], ruqavw = [{ 'currentNSMap': $bm7c4 }], s302t_ = {}, mf748b = 0x0;;) {
        try {
            var g9quah = r9vqau['indexOf']('<', mf748b);
            if (0x0 > g9quah) {
                if (!r9vqau['substr'](mf748b)['match'](/^\s*$/)) {
                    var xlynpg = wfb7['doc'],
                        k5d6 = xlynpg['createTextNode'](r9vqau['substr'](mf748b));
                    xlynpg['appendChild'](k5d6), wfb7['currentElement'] = k5d6;
                }
                return;
            }
            switch (g9quah > mf748b && uyg9h(g9quah), r9vqau['charAt'](g9quah + 0x1)) {
                case '/':
                    var ygnhpl = r9vqau['indexOf']('>', g9quah + 0x3),
                        m4f7bc = r9vqau['substring'](g9quah + 0x2, ygnhpl),
                        qrwv8 = ruqavw['pop']();
                    0x0 > ygnhpl ? (m4f7bc = r9vqau['substring'](g9quah + 0x2)['replace'](/[\s<].*/, ''), ygp9h['error']('end tag name: ' + m4f7bc + ' is not complete:' + qrwv8['tagName']), ygnhpl = g9quah + 0x1 + m4f7bc['length']) : m4f7bc['match'](/\s</) && (m4f7bc = m4f7bc['replace'](/[\s<].*/, ''), ygp9h['error']('end tag name: ' + m4f7bc + ' maybe not complete'), ygnhpl = g9quah + 0x1 + m4f7bc['length']);
                    var qar9vu = qrwv8['localNSMap'],
                        raq9hu = qrwv8['tagName'] == m4f7bc,
                        yxnopl = raq9hu || qrwv8['tagName'] && qrwv8['tagName']['toLowerCase']() == m4f7bc['toLowerCase']();
                    if (yxnopl) {
                        if (wfb7['endElement'](qrwv8['uri'], qrwv8['localName'], m4f7bc), qar9vu) {
                            for (var nlpoxy in qar9vu) wfb7['endPrefixMapping'](nlpoxy);
                        }
                        raq9hu || ygp9h['fatalError']('end tag name: ' + m4f7bc + ' is not match the current start tagName:' + qrwv8['tagName']);
                    } else ruqavw['push'](qrwv8);
                    ygnhpl++;
                    break;
                case '?':
                    t13s_2 && phnl(g9quah), ygnhpl = Euaqr(r9vqau, g9quah, wfb7);
                    break;
                case '!':
                    t13s_2 && phnl(g9quah), ygnhpl = Euhg9yp(r9vqau, g9quah, wfb7, ygp9h);
                    break;
                default:
                    t13s_2 && phnl(g9quah);
                    var a8q = new Eg9hpa(),
                        ur9hq = ruqavw[ruqavw['length'] - 0x1]['currentNSMap'],
                        ygnhpl = Enpxyg(r9vqau, g9quah, a8q, ur9hq, $djk6, ygp9h),
                        hapg9u = a8q['length'];
                    if (!a8q['closed'] && Eit_j1d(r9vqau, ygnhpl, a8q['tagName'], s302t_) && (a8q['closed'] = !0x0, c5k$6['nbsp'] || ygp9h['warning']('unclosed xml attribute')), t13s_2 && hapg9u) {
                        for (var $4mkbc = Equrav9(t13s_2, {}), t02s_ = 0x0; hapg9u > t02s_; t02s_++) {
                            var _d1ijt = a8q[t02s_];
                            phnl(_d1ijt['offset']), _d1ijt['locator'] = Equrav9(t13s_2, {});
                        }
                        wfb7['locator'] = $4mkbc, Ebfc7m(a8q, wfb7, ur9hq) && ruqavw['push'](a8q), wfb7['locator'] = t13s_2;
                    } else Ebfc7m(a8q, wfb7, ur9hq) && ruqavw['push'](a8q);
                    'http://www.w3.org/1999/xhtml' !== a8q['uri'] || a8q['closed'] ? ygnhpl++ : ygnhpl = Erw78(r9vqau, ygnhpl, a8q['tagName'], $djk6, wfb7);
            }
        } catch (_st132) {
            ygp9h['error']('element parse error: ' + _st132), ygnhpl = -0x1;
        }
        ygnhpl > mf748b ? mf748b = ygnhpl : uyg9h(Math['max'](g9quah, mf748b) + 0x1);
    }
}
function Equrav9(lnhy, ughpa9) {
    return ughpa9['lineNumber'] = lnhy['lineNumber'], ughpa9['columnNumber'] = lnhy['columnNumber'], ughpa9;
}
function Enpxyg(f8vqwr, z30st2, f8qvw, vq8, arw8, b8m4f) {
    for (var vuaqr9, k5di6, kj5 = ++z30st2, m74fb8 = Eruqvw;;) {
        var tid_j1 = f8vqwr['charAt'](kj5);
        switch (tid_j1) {
            case '=':
                if (m74fb8 === Exolyp) vuaqr9 = f8vqwr['slice'](z30st2, kj5), m74fb8 = Efwvm87;else {
                    if (m74fb8 !== Enlhpgy) throw new Error('attribute equal must after attrName');
                    m74fb8 = Efwvm87;
                }
                break;
            case '\x27':
            case '\x22':
                if (m74fb8 === Efwvm87 || m74fb8 === Exolyp) {
                    if (m74fb8 === Exolyp && (b8m4f['warning']('attribute value must after "="'), vuaqr9 = f8vqwr['slice'](z30st2, kj5)), z30st2 = kj5 + 0x1, kj5 = f8vqwr['indexOf'](tid_j1, z30st2), !(kj5 > 0x0)) throw new Error('attribute value no end \'' + tid_j1 + '\' match');
                    k5di6 = f8vqwr['slice'](z30st2, kj5)['replace'](/&#?\w+;/g, arw8), f8qvw['add'](vuaqr9, k5di6, z30st2 - 0x1), m74fb8 = Eygu9hp;
                } else {
                    if (m74fb8 != E_1d5i) throw new Error('attribute value must after "="');
                    k5di6 = f8vqwr['slice'](z30st2, kj5)['replace'](/&#?\w+;/g, arw8), f8qvw['add'](vuaqr9, k5di6, z30st2), b8m4f['warning']('attribute "' + vuaqr9 + '" missed start quot(' + tid_j1 + ')!!'), z30st2 = kj5 + 0x1, m74fb8 = Eygu9hp;
                }
                break;
            case '/':
                switch (m74fb8) {
                    case Eruqvw:
                        f8qvw['setTagName'](f8vqwr['slice'](z30st2, kj5));
                    case Eygu9hp:
                    case Ehuap:
                    case Eid1t_:
                        m74fb8 = Eid1t_, f8qvw['closed'] = !0x0;
                    case E_1d5i:
                    case Exolyp:
                    case Enlhpgy:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return b8m4f['error']('unexpected end of input'), m74fb8 == Eruqvw && f8qvw['setTagName'](f8vqwr['slice'](z30st2, kj5)), kj5;
            case '>':
                switch (m74fb8) {
                    case Eruqvw:
                        f8qvw['setTagName'](f8vqwr['slice'](z30st2, kj5));
                    case Eygu9hp:
                    case Ehuap:
                    case Eid1t_:
                        break;
                    case E_1d5i:
                    case Exolyp:
                        k5di6 = f8vqwr['slice'](z30st2, kj5), '/' === k5di6['slice'](-0x1) && (f8qvw['closed'] = !0x0, k5di6 = k5di6['slice'](0x0, -0x1));
                    case Enlhpgy:
                        m74fb8 === Enlhpgy && (k5di6 = vuaqr9), m74fb8 == E_1d5i ? (b8m4f['warning']('attribute "' + k5di6 + '" missed quot(")!!'), f8qvw['add'](vuaqr9, k5di6['replace'](/&#?\w+;/g, arw8), z30st2)) : ('http://www.w3.org/1999/xhtml' === vq8[''] && k5di6['match'](/^(?:disabled|checked|selected)$/i) || b8m4f['warning']('attribute "' + k5di6 + '" missed value!! "' + k5di6 + '" instead!!'), f8qvw['add'](k5di6, k5di6, z30st2));
                        break;
                    case Efwvm87:
                        throw new Error('attribute value missed!!');
                }
                return kj5;
            case '\u0080':
                tid_j1 = '\x20';
            default:
                if ('\x20' >= tid_j1) switch (m74fb8) {
                    case Eruqvw:
                        f8qvw['setTagName'](f8vqwr['slice'](z30st2, kj5)), m74fb8 = Ehuap;
                        break;
                    case Exolyp:
                        vuaqr9 = f8vqwr['slice'](z30st2, kj5), m74fb8 = Enlhpgy;
                        break;
                    case E_1d5i:
                        var k5di6 = f8vqwr['slice'](z30st2, kj5)['replace'](/&#?\w+;/g, arw8);
                        b8m4f['warning']('attribute "' + k5di6 + '" missed quot(")!!'), f8qvw['add'](vuaqr9, k5di6, z30st2);
                    case Eygu9hp:
                        m74fb8 = Ehuap;
                } else switch (m74fb8) {
                    case Enlhpgy:
                        {
                            f8qvw['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === vq8[''] && vuaqr9['match'](/^(?:disabled|checked|selected)$/i) || b8m4f['warning']('attribute "' + vuaqr9 + '" missed value!! "' + vuaqr9 + '" instead2!!'), f8qvw['add'](vuaqr9, vuaqr9, z30st2), z30st2 = kj5, m74fb8 = Exolyp;
                        break;
                    case Eygu9hp:
                        b8m4f['warning']('attribute space is required"' + vuaqr9 + '\x22!!');
                    case Ehuap:
                        m74fb8 = Exolyp, z30st2 = kj5;
                        break;
                    case Efwvm87:
                        m74fb8 = E_1d5i, z30st2 = kj5;
                        break;
                    case Eid1t_:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        kj5++;
    }
}
function Ebfc7m(j6i51, mfvw8, bmw7f8) {
    for (var rv8fq = j6i51['tagName'], qa9rhu = null, ngpyh = j6i51['length']; ngpyh--;) {
        var lxypng = j6i51[ngpyh],
            rw8vaq = lxypng['qName'],
            vw78m = lxypng['value'],
            d5$6j = rw8vaq['indexOf'](':');
        if (d5$6j > 0x0) var fqwv = lxypng['prefix'] = rw8vaq['slice'](0x0, d5$6j),
            s20zt = rw8vaq['slice'](d5$6j + 0x1),
            p9hgy = 'xmlns' === fqwv && s20zt;else s20zt = rw8vaq, fqwv = null, p9hgy = 'xmlns' === rw8vaq && '';
        lxypng['localName'] = s20zt, p9hgy !== !0x1 && (null == qa9rhu && (qa9rhu = {}, Eapu9hg(bmw7f8, bmw7f8 = {})), bmw7f8[p9hgy] = qa9rhu[p9hgy] = vw78m, lxypng['uri'] = 'http://www.w3.org/2000/xmlns/', mfvw8['startPrefixMapping'](p9hgy, vw78m));
    }
    for (var ngpyh = j6i51['length']; ngpyh--;) {
        lxypng = j6i51[ngpyh];
        var fqwv = lxypng['prefix'];
        fqwv && ('xml' === fqwv && (lxypng['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== fqwv && (lxypng['uri'] = bmw7f8[fqwv || '']));
    }
    var d5$6j = rv8fq['indexOf'](':');
    d5$6j > 0x0 ? (fqwv = j6i51['prefix'] = rv8fq['slice'](0x0, d5$6j), s20zt = j6i51['localName'] = rv8fq['slice'](d5$6j + 0x1)) : (fqwv = null, s20zt = j6i51['localName'] = rv8fq);
    var c$m = j6i51['uri'] = bmw7f8[fqwv || ''];
    if (mfvw8['startElement'](c$m, s20zt, rv8fq, j6i51), !j6i51['closed']) return j6i51['currentNSMap'] = bmw7f8, j6i51['localNSMap'] = qa9rhu, !0x0;
    if (mfvw8['endElement'](c$m, s20zt, rv8fq), qa9rhu) {
        for (fqwv in qa9rhu) mfvw8['endPrefixMapping'](fqwv);
    }
}
function Erw78(plynox, glny, mvfw87, cm4b$k, hgn9py) {
    if (/^(?:script|textarea)$/i['test'](mvfw87)) {
        var pn9gyh = plynox['indexOf']('</' + mvfw87 + '>', glny),
            hqrua9 = plynox['substring'](glny + 0x1, pn9gyh);
        if (/[&<]/['test'](hqrua9)) return (/^script$/i['test'](mvfw87) ? (hgn9py['characters'](hqrua9, 0x0, hqrua9['length']), pn9gyh) : (hqrua9 = hqrua9['replace'](/&#?\w+;/g, cm4b$k), hgn9py['characters'](hqrua9, 0x0, hqrua9['length']), pn9gyh)
        );
    }
    return glny + 0x1;
}
function Eit_j1d(r9vuqa, s3tz0, u9gaqh, km4$) {
    var b4m$ck = km4$[u9gaqh];
    return null == b4m$ck && (b4m$ck = r9vuqa['lastIndexOf']('</' + u9gaqh + '>'), s3tz0 > b4m$ck && (b4m$ck = r9vuqa['lastIndexOf']('</' + u9gaqh)), km4$[u9gaqh] = b4m$ck), s3tz0 > b4m$ck;
}
function Eapu9hg(j5di_1, wrqa8) {
    for (var haq9ur in j5di_1) wrqa8[haq9ur] = j5di_1[haq9ur];
}
function Euhg9yp(kc$65, jkc$65, mb847f, bfw) {
    var qavwur = kc$65['charAt'](jkc$65 + 0x2);
    switch (qavwur) {
        case '-':
            if ('-' === kc$65['charAt'](jkc$65 + 0x3)) {
                var $kb4c = kc$65['indexOf']('-->', jkc$65 + 0x4);
                return $kb4c > jkc$65 ? (mb847f['comment'](kc$65, jkc$65 + 0x4, $kb4c - jkc$65 - 0x4), $kb4c + 0x3) : (bfw['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == kc$65['substr'](jkc$65 + 0x3, 0x6)) {
                var $kb4c = kc$65['indexOf'](']]>', jkc$65 + 0x9);
                return mb847f['startCDATA'](), mb847f['characters'](kc$65, jkc$65 + 0x9, $kb4c - jkc$65 - 0x9), mb847f['endCDATA'](), $kb4c + 0x3;
            }
            var m$7c4 = Ephu9ag(kc$65, jkc$65),
                rwfvq8 = m$7c4['length'];
            if (rwfvq8 > 0x1 && /!doctype/i['test'](m$7c4[0x0][0x0])) {
                var yolpxn = m$7c4[0x1][0x0],
                    loxy = rwfvq8 > 0x3 && /^public$/i['test'](m$7c4[0x2][0x0]) && m$7c4[0x3][0x0],
                    f7b4c = rwfvq8 > 0x4 && m$7c4[0x4][0x0],
                    gy9pu = m$7c4[rwfvq8 - 0x1];
                return mb847f['startDTD'](yolpxn, loxy && loxy['replace'](/^(['"])(.*?)\1$/, '$2'), f7b4c && f7b4c['replace'](/^(['"])(.*?)\1$/, '$2')), mb847f['endDTD'](), gy9pu['index'] + gy9pu[0x0]['length'];
            }
    }
    return -0x1;
}
function Euaqr(i1d5_j, di1st, hg9ap) {
    var di5j6 = i1d5_j['indexOf']('?>', di1st);
    if (di5j6) {
        var jd$6 = i1d5_j['substring'](di1st, di5j6)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (jd$6) {
            {
                jd$6[0x0]['length'];
            }
            return hg9ap['processingInstruction'](jd$6[0x1], jd$6[0x2]), di5j6 + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function Eg9hpa() {}
function Eynph9(c$5j6, td_s1i) {
    return c$5j6['__proto__'] = td_s1i, c$5j6;
}
function Ephu9ag(s1ti_2, lpyghn) {
    var _30s2,
        ypghu9 = [],
        vqw8a = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (vqw8a['lastIndex'] = lpyghn, vqw8a['exec'](s1ti_2); _30s2 = vqw8a['exec'](s1ti_2);) if (ypghu9['push'](_30s2), _30s2[0x1]) return ypghu9;
}
var Edi1_ = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    Ear8vwq = new RegExp('[\\-\\.0-9' + Edi1_['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    E$dk6j = new RegExp('^' + Edi1_['source'] + Ear8vwq['source'] + '*(?::' + Edi1_['source'] + Ear8vwq['source'] + '*)?$'),
    Eruqvw = 0x0,
    Exolyp = 0x1,
    Enlhpgy = 0x2,
    Efwvm87 = 0x3,
    E_1d5i = 0x4,
    Eygu9hp = 0x5,
    Ehuap = 0x6,
    Eid1t_ = 0x7;
E$kc5j6['prototype'] = {
    'parse': function (f7wvr, wf8vqr, _1i2ts) {
        var ij15d6 = this['domBuilder'];
        ij15d6['startDocument'](), Eapu9hg(wf8vqr, wf8vqr = {}), Ekc6(f7wvr, wf8vqr, _1i2ts, ij15d6, this['errorHandler']), ij15d6['endDocument']();
    }
}, Eg9hpa['prototype'] = {
    'setTagName': function (vf8qw) {
        if (!E$dk6j['test'](vf8qw)) throw new Error('invalid tagName:' + vf8qw);
        this['tagName'] = vf8qw;
    },
    'add': function ($c47, b7$4mc, mwb87f) {
        if (!E$dk6j['test']($c47)) throw new Error('invalid attribute:' + $c47);
        this[this['length']++] = {
            'qName': $c47,
            'value': b7$4mc,
            'offset': mwb87f
        };
    },
    'length': 0x0,
    'getLocalName': function (gahu) {
        return this[gahu]['localName'];
    },
    'getLocator': function (id1j5) {
        return this[id1j5]['locator'];
    },
    'getQName': function (t3s_1) {
        return this[t3s_1]['qName'];
    },
    'getURI': function (qwvur) {
        return this[qwvur]['uri'];
    },
    'getValue': function (_123t) {
        return this[_123t]['value'];
    }
}, Eynph9({}, Eynph9['prototype']) instanceof Eynph9 || (Eynph9 = function (b7c4m$, sti_12) {
    function rvf7w() {}
    rvf7w['prototype'] = sti_12, rvf7w = new rvf7w();
    for (sti_12 in b7c4m$) rvf7w[sti_12] = b7c4m$[sti_12];
    return rvf7w;
}), exports['XMLReader'] = E$kc5j6;