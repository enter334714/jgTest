var G = wx.$E;
function Eis() {}
function Egxyp(_02t3, wm7bf, uwqra, quv, wrv87) {
    function dji1(z2st0) {
        if (z2st0 > 0xffff) {
            z2st0 -= 0x10000;
            var gahp = 0xd800 + (z2st0 >> 0xa),
                kjd$ = 0xdc00 + (0x3ff & z2st0);
            return String['fromCharCode'](gahp, kjd$);
        }
        return String['fromCharCode'](z2st0);
    }
    function id65kj(ti1d_j) {
        var yhpgn = ti1d_j['slice'](0x1, -0x1);
        return yhpgn in uwqra ? uwqra[yhpgn] : '#' === yhpgn['charAt'](0x0) ? dji1(parseInt(yhpgn['substr'](0x1)['replace']('x', '0x'))) : (wrv87['error']('entity not found:' + ti1d_j), ti1d_j);
    }
    function yng9h(f7b4cm) {
        if (f7b4cm > ijd15) {
            var _td1 = _02t3['substring'](ijd15, f7b4cm)['replace'](/&#?\w+;/g, id65kj);
            jd15i_ && $ck456(ijd15), quv['characters'](_td1, 0x0, f7b4cm - ijd15), ijd15 = f7b4cm;
        }
    }
    function $ck456($c6b, rqf8wv) {
        for (; $c6b >= uhp9ag && (rqf8wv = olxyp['exec'](_02t3));) ugph = rqf8wv['index'], uhp9ag = ugph + rqf8wv[0x0]['length'], jd15i_['lineNumber']++;
        jd15i_['columnNumber'] = $c6b - ugph + 0x1;
    }
    for (var ugph = 0x0, uhp9ag = 0x0, olxyp = /.*(?:\r\n?|\n)|.*$/g, jd15i_ = quv['locator'], y9hng = [{ 'currentNSMap': wm7bf }], dit1j = {}, ijd15 = 0x0;;) {
        try {
            var v9qau = _02t3['indexOf']('<', ijd15);
            if (0x0 > v9qau) {
                if (!_02t3['substr'](ijd15)['match'](/^\s*$/)) {
                    var d6j1 = quv['doc'],
                        dt_i1j = d6j1['createTextNode'](_02t3['substr'](ijd15));
                    d6j1['appendChild'](dt_i1j), quv['currentElement'] = dt_i1j;
                }
                return;
            }
            switch (v9qau > ijd15 && yng9h(v9qau), _02t3['charAt'](v9qau + 0x1)) {
                case '/':
                    var vquarw = _02t3['indexOf']('>', v9qau + 0x3),
                        a8rwq = _02t3['substring'](v9qau + 0x2, vquarw),
                        zt02 = y9hng['pop']();
                    0x0 > vquarw ? (a8rwq = _02t3['substring'](v9qau + 0x2)['replace'](/[\s<].*/, ''), wrv87['error']('end tag name: ' + a8rwq + ' is not complete:' + zt02['tagName']), vquarw = v9qau + 0x1 + a8rwq['length']) : a8rwq['match'](/\s</) && (a8rwq = a8rwq['replace'](/[\s<].*/, ''), wrv87['error']('end tag name: ' + a8rwq + ' maybe not complete'), vquarw = v9qau + 0x1 + a8rwq['length']);
                    var f8rqwv = zt02['localNSMap'],
                        glyxnp = zt02['tagName'] == a8rwq,
                        w8mfb = glyxnp || zt02['tagName'] && zt02['tagName']['toLowerCase']() == a8rwq['toLowerCase']();
                    if (w8mfb) {
                        if (quv['endElement'](zt02['uri'], zt02['localName'], a8rwq), f8rqwv) {
                            for (var $6d5k in f8rqwv) quv['endPrefixMapping']($6d5k);
                        }
                        glyxnp || wrv87['fatalError']('end tag name: ' + a8rwq + ' is not match the current start tagName:' + zt02['tagName']);
                    } else y9hng['push'](zt02);
                    vquarw++;
                    break;
                case '?':
                    jd15i_ && $ck456(v9qau), vquarw = Eqwrv8a(_02t3, v9qau, quv);
                    break;
                case '!':
                    jd15i_ && $ck456(v9qau), vquarw = E$56jkc(_02t3, v9qau, quv, wrv87);
                    break;
                default:
                    jd15i_ && $ck456(v9qau);
                    var $46ck5 = new Edj5k$(),
                        c4b6$ = y9hng[y9hng['length'] - 0x1]['currentNSMap'],
                        vquarw = Eolxnyp(_02t3, v9qau, $46ck5, c4b6$, id65kj, wrv87),
                        m7$4c = $46ck5['length'];
                    if (!$46ck5['closed'] && Evr8fwq(_02t3, vquarw, $46ck5['tagName'], dit1j) && ($46ck5['closed'] = !0x0, uwqra['nbsp'] || wrv87['warning']('unclosed xml attribute')), jd15i_ && m7$4c) {
                        for (var gquah9 = Evwfr(jd15i_, {}), nhy9gp = 0x0; m7$4c > nhy9gp; nhy9gp++) {
                            var fbm8 = $46ck5[nhy9gp];
                            $ck456(fbm8['offset']), fbm8['locator'] = Evwfr(jd15i_, {});
                        }
                        quv['locator'] = gquah9, Eti1j_d($46ck5, quv, c4b6$) && y9hng['push']($46ck5), quv['locator'] = jd15i_;
                    } else Eti1j_d($46ck5, quv, c4b6$) && y9hng['push']($46ck5);
                    'http://www.w3.org/1999/xhtml' !== $46ck5['uri'] || $46ck5['closed'] ? vquarw++ : vquarw = Epx(_02t3, vquarw, $46ck5['tagName'], id65kj, quv);
            }
        } catch (v8wrqa) {
            wrv87['error']('element parse error: ' + v8wrqa), vquarw = -0x1;
        }
        vquarw > ijd15 ? ijd15 = vquarw : yng9h(Math['max'](v9qau, ijd15) + 0x1);
    }
}
function Evwfr(aqvurw, bf4c) {
    return bf4c['lineNumber'] = aqvurw['lineNumber'], bf4c['columnNumber'] = aqvurw['columnNumber'], bf4c;
}
function Eolxnyp(fq8rw, aquh9, z0t, qrauh9, k56d$, i6d5k) {
    for (var v8wra, loyxp, qw8va = ++aquh9, d6jki = Ewaqrvu;;) {
        var xpynlg = fq8rw['charAt'](qw8va);
        switch (xpynlg) {
            case '=':
                if (d6jki === Ewf8mb) v8wra = fq8rw['slice'](aquh9, qw8va), d6jki = Ez2ts03;else {
                    if (d6jki !== Emb4ck$) throw new Error('attribute equal must after attrName');
                    d6jki = Ez2ts03;
                }
                break;
            case '\x27':
            case '\x22':
                if (d6jki === Ez2ts03 || d6jki === Ewf8mb) {
                    if (d6jki === Ewf8mb && (i6d5k['warning']('attribute value must after "="'), v8wra = fq8rw['slice'](aquh9, qw8va)), aquh9 = qw8va + 0x1, qw8va = fq8rw['indexOf'](xpynlg, aquh9), !(qw8va > 0x0)) throw new Error('attribute value no end \'' + xpynlg + '\' match');
                    loyxp = fq8rw['slice'](aquh9, qw8va)['replace'](/&#?\w+;/g, k56d$), z0t['add'](v8wra, loyxp, aquh9 - 0x1), d6jki = Eahu9gp;
                } else {
                    if (d6jki != Ek$4c5) throw new Error('attribute value must after "="');
                    loyxp = fq8rw['slice'](aquh9, qw8va)['replace'](/&#?\w+;/g, k56d$), z0t['add'](v8wra, loyxp, aquh9), i6d5k['warning']('attribute "' + v8wra + '" missed start quot(' + xpynlg + ')!!'), aquh9 = qw8va + 0x1, d6jki = Eahu9gp;
                }
                break;
            case '/':
                switch (d6jki) {
                    case Ewaqrvu:
                        z0t['setTagName'](fq8rw['slice'](aquh9, qw8va));
                    case Eahu9gp:
                    case Ewv8mf7:
                    case E_jdit1:
                        d6jki = E_jdit1, z0t['closed'] = !0x0;
                    case Ek$4c5:
                    case Ewf8mb:
                    case Emb4ck$:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return i6d5k['error']('unexpected end of input'), d6jki == Ewaqrvu && z0t['setTagName'](fq8rw['slice'](aquh9, qw8va)), qw8va;
            case '>':
                switch (d6jki) {
                    case Ewaqrvu:
                        z0t['setTagName'](fq8rw['slice'](aquh9, qw8va));
                    case Eahu9gp:
                    case Ewv8mf7:
                    case E_jdit1:
                        break;
                    case Ek$4c5:
                    case Ewf8mb:
                        loyxp = fq8rw['slice'](aquh9, qw8va), '/' === loyxp['slice'](-0x1) && (z0t['closed'] = !0x0, loyxp = loyxp['slice'](0x0, -0x1));
                    case Emb4ck$:
                        d6jki === Emb4ck$ && (loyxp = v8wra), d6jki == Ek$4c5 ? (i6d5k['warning']('attribute "' + loyxp + '" missed quot(")!!'), z0t['add'](v8wra, loyxp['replace'](/&#?\w+;/g, k56d$), aquh9)) : ('http://www.w3.org/1999/xhtml' === qrauh9[''] && loyxp['match'](/^(?:disabled|checked|selected)$/i) || i6d5k['warning']('attribute "' + loyxp + '" missed value!! "' + loyxp + '" instead!!'), z0t['add'](loyxp, loyxp, aquh9));
                        break;
                    case Ez2ts03:
                        throw new Error('attribute value missed!!');
                }
                return qw8va;
            case '\u0080':
                xpynlg = '\x20';
            default:
                if ('\x20' >= xpynlg) switch (d6jki) {
                    case Ewaqrvu:
                        z0t['setTagName'](fq8rw['slice'](aquh9, qw8va)), d6jki = Ewv8mf7;
                        break;
                    case Ewf8mb:
                        v8wra = fq8rw['slice'](aquh9, qw8va), d6jki = Emb4ck$;
                        break;
                    case Ek$4c5:
                        var loyxp = fq8rw['slice'](aquh9, qw8va)['replace'](/&#?\w+;/g, k56d$);
                        i6d5k['warning']('attribute "' + loyxp + '" missed quot(")!!'), z0t['add'](v8wra, loyxp, aquh9);
                    case Eahu9gp:
                        d6jki = Ewv8mf7;
                } else switch (d6jki) {
                    case Emb4ck$:
                        {
                            z0t['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === qrauh9[''] && v8wra['match'](/^(?:disabled|checked|selected)$/i) || i6d5k['warning']('attribute "' + v8wra + '" missed value!! "' + v8wra + '" instead2!!'), z0t['add'](v8wra, v8wra, aquh9), aquh9 = qw8va, d6jki = Ewf8mb;
                        break;
                    case Eahu9gp:
                        i6d5k['warning']('attribute space is required"' + v8wra + '\x22!!');
                    case Ewv8mf7:
                        d6jki = Ewf8mb, aquh9 = qw8va;
                        break;
                    case Ez2ts03:
                        d6jki = Ek$4c5, aquh9 = qw8va;
                        break;
                    case E_jdit1:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        qw8va++;
    }
}
function Eti1j_d(m4f8b, bm4f8, puygh) {
    for (var guq9ah = m4f8b['tagName'], j_5d1i = null, ur9h = m4f8b['length']; ur9h--;) {
        var t20s = m4f8b[ur9h],
            s3_t21 = t20s['qName'],
            n9ghy = t20s['value'],
            c6$k4b = s3_t21['indexOf'](':');
        if (c6$k4b > 0x0) var qr8vfw = t20s['prefix'] = s3_t21['slice'](0x0, c6$k4b),
            pxlyn = s3_t21['slice'](c6$k4b + 0x1),
            uv9q = 'xmlns' === qr8vfw && pxlyn;else pxlyn = s3_t21, qr8vfw = null, uv9q = 'xmlns' === s3_t21 && '';
        t20s['localName'] = pxlyn, uv9q !== !0x1 && (null == j_5d1i && (j_5d1i = {}, Ec56$j(puygh, puygh = {})), puygh[uv9q] = j_5d1i[uv9q] = n9ghy, t20s['uri'] = 'http://www.w3.org/2000/xmlns/', bm4f8['startPrefixMapping'](uv9q, n9ghy));
    }
    for (var ur9h = m4f8b['length']; ur9h--;) {
        t20s = m4f8b[ur9h];
        var qr8vfw = t20s['prefix'];
        qr8vfw && ('xml' === qr8vfw && (t20s['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== qr8vfw && (t20s['uri'] = puygh[qr8vfw || '']));
    }
    var c6$k4b = guq9ah['indexOf'](':');
    c6$k4b > 0x0 ? (qr8vfw = m4f8b['prefix'] = guq9ah['slice'](0x0, c6$k4b), pxlyn = m4f8b['localName'] = guq9ah['slice'](c6$k4b + 0x1)) : (qr8vfw = null, pxlyn = m4f8b['localName'] = guq9ah);
    var s_di1 = m4f8b['uri'] = puygh[qr8vfw || ''];
    if (bm4f8['startElement'](s_di1, pxlyn, guq9ah, m4f8b), !m4f8b['closed']) return m4f8b['currentNSMap'] = puygh, m4f8b['localNSMap'] = j_5d1i, !0x0;
    if (bm4f8['endElement'](s_di1, pxlyn, guq9ah), j_5d1i) {
        for (qr8vfw in j_5d1i) bm4f8['endPrefixMapping'](qr8vfw);
    }
}
function Epx(i6jd1, _d1sit, hynp, qvw8a, gxyn) {
    if (/^(?:script|textarea)$/i['test'](hynp)) {
        var c7bmf = i6jd1['indexOf']('</' + hynp + '>', _d1sit),
            wf7mb = i6jd1['substring'](_d1sit + 0x1, c7bmf);
        if (/[&<]/['test'](wf7mb)) return (/^script$/i['test'](hynp) ? (gxyn['characters'](wf7mb, 0x0, wf7mb['length']), c7bmf) : (wf7mb = wf7mb['replace'](/&#?\w+;/g, qvw8a), gxyn['characters'](wf7mb, 0x0, wf7mb['length']), c7bmf)
        );
    }
    return _d1sit + 0x1;
}
function Evr8fwq(oynlp, rvqua9, frvwq8, mc4) {
    var wqfr8 = mc4[frvwq8];
    return null == wqfr8 && (wqfr8 = oynlp['lastIndexOf']('</' + frvwq8 + '>'), rvqua9 > wqfr8 && (wqfr8 = oynlp['lastIndexOf']('</' + frvwq8)), mc4[frvwq8] = wqfr8), rvqua9 > wqfr8;
}
function Ec56$j(qu9hr, kj$56c) {
    for (var jkd6$5 in qu9hr) kj$56c[jkd6$5] = qu9hr[jkd6$5];
}
function E$56jkc(_dti1s, ts2z30, _t02s3, m7f84b) {
    var lnpo = _dti1s['charAt'](ts2z30 + 0x2);
    switch (lnpo) {
        case '-':
            if ('-' === _dti1s['charAt'](ts2z30 + 0x3)) {
                var ti1j_ = _dti1s['indexOf']('-->', ts2z30 + 0x4);
                return ti1j_ > ts2z30 ? (_t02s3['comment'](_dti1s, ts2z30 + 0x4, ti1j_ - ts2z30 - 0x4), ti1j_ + 0x3) : (m7f84b['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == _dti1s['substr'](ts2z30 + 0x3, 0x6)) {
                var ti1j_ = _dti1s['indexOf'](']]>', ts2z30 + 0x9);
                return _t02s3['startCDATA'](), _t02s3['characters'](_dti1s, ts2z30 + 0x9, ti1j_ - ts2z30 - 0x9), _t02s3['endCDATA'](), ti1j_ + 0x3;
            }
            var avrqwu = Ei156dj(_dti1s, ts2z30),
                guaph9 = avrqwu['length'];
            if (guaph9 > 0x1 && /!doctype/i['test'](avrqwu[0x0][0x0])) {
                var ruqavw = avrqwu[0x1][0x0],
                    mk4b = guaph9 > 0x3 && /^public$/i['test'](avrqwu[0x2][0x0]) && avrqwu[0x3][0x0],
                    c4fbm = guaph9 > 0x4 && avrqwu[0x4][0x0],
                    jk56i = avrqwu[guaph9 - 0x1];
                return _t02s3['startDTD'](ruqavw, mk4b && mk4b['replace'](/^(['"])(.*?)\1$/, '$2'), c4fbm && c4fbm['replace'](/^(['"])(.*?)\1$/, '$2')), _t02s3['endDTD'](), jk56i['index'] + jk56i[0x0]['length'];
            }
    }
    return -0x1;
}
function Eqwrv8a(k64cb, $k6b4c, tz2s3) {
    var uraq9h = k64cb['indexOf']('?>', $k6b4c);
    if (uraq9h) {
        var ravq9 = k64cb['substring']($k6b4c, uraq9h)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (ravq9) {
            {
                ravq9[0x0]['length'];
            }
            return tz2s3['processingInstruction'](ravq9[0x1], ravq9[0x2]), uraq9h + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function Edj5k$() {}
function Ebc$47(q8frwv, qr8vwa) {
    return q8frwv['__proto__'] = qr8vwa, q8frwv;
}
function Ei156dj(qvrf8, kcj65$) {
    var p9ghyu,
        yphg9n = [],
        _23t = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (_23t['lastIndex'] = kcj65$, _23t['exec'](qvrf8); p9ghyu = _23t['exec'](qvrf8);) if (yphg9n['push'](p9ghyu), p9ghyu[0x1]) return yphg9n;
}
var Eypng9h = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    Ec7bmf4 = new RegExp('[\\-\\.0-9' + Eypng9h['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    Ewuqvar = new RegExp('^' + Eypng9h['source'] + Ec7bmf4['source'] + '*(?::' + Eypng9h['source'] + Ec7bmf4['source'] + '*)?$'),
    Ewaqrvu = 0x0,
    Ewf8mb = 0x1,
    Emb4ck$ = 0x2,
    Ez2ts03 = 0x3,
    Ek$4c5 = 0x4,
    Eahu9gp = 0x5,
    Ewv8mf7 = 0x6,
    E_jdit1 = 0x7;
Eis['prototype'] = {
    'parse': function (c$564, lxopn, m$b7c) {
        var mkb$ = this['domBuilder'];
        mkb$['startDocument'](), Ec56$j(lxopn, lxopn = {}), Egxyp(c$564, lxopn, m$b7c, mkb$, this['errorHandler']), mkb$['endDocument']();
    }
}, Edj5k$['prototype'] = {
    'setTagName': function (vuar9q) {
        if (!Ewuqvar['test'](vuar9q)) throw new Error('invalid tagName:' + vuar9q);
        this['tagName'] = vuar9q;
    },
    'add': function (sz23t, nlgyx, vqa8wr) {
        if (!Ewuqvar['test'](sz23t)) throw new Error('invalid attribute:' + sz23t);
        this[this['length']++] = {
            'qName': sz23t,
            'value': nlgyx,
            'offset': vqa8wr
        };
    },
    'length': 0x0,
    'getLocalName': function (vrawq) {
        return this[vrawq]['localName'];
    },
    'getLocator': function (v8qrwf) {
        return this[v8qrwf]['locator'];
    },
    'getQName': function (kdi5j6) {
        return this[kdi5j6]['qName'];
    },
    'getURI': function (yplxgn) {
        return this[yplxgn]['uri'];
    },
    'getValue': function (mbc74) {
        return this[mbc74]['value'];
    }
}, Ebc$47({}, Ebc$47['prototype']) instanceof Ebc$47 || (Ebc$47 = function (ua9gh, gq9ua) {
    function f7cmb() {}
    f7cmb['prototype'] = gq9ua, f7cmb = new f7cmb();
    for (gq9ua in ua9gh) f7cmb[gq9ua] = ua9gh[gq9ua];
    return f7cmb;
}), exports['XMLReader'] = Eis;