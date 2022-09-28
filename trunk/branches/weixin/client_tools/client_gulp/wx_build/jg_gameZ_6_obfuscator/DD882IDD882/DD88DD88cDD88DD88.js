var G = wx.$E;
function Evar8qw() {}
function Ev7wm(p9ugh, mb47c, fm78b4, auphg, wv87f) {
    function h9yupg(pghua) {
        if (pghua > 0xffff) {
            pghua -= 0x10000;
            var $j5dk6 = 0xd800 + (pghua >> 0xa),
                rwauv = 0xdc00 + (0x3ff & pghua);
            return String['fromCharCode']($j5dk6, rwauv);
        }
        return String['fromCharCode'](pghua);
    }
    function j1i_dt(b6ck4) {
        var _t213s = b6ck4['slice'](0x1, -0x1);
        return _t213s in fm78b4 ? fm78b4[_t213s] : '#' === _t213s['charAt'](0x0) ? h9yupg(parseInt(_t213s['substr'](0x1)['replace']('x', '0x'))) : (wv87f['error']('entity not found:' + b6ck4), b6ck4);
    }
    function bw8f(it_1d) {
        if (it_1d > gup9) {
            var $jkc5 = p9ugh['substring'](gup9, it_1d)['replace'](/&#?\w+;/g, j1i_dt);
            di6jk && s0_23(gup9), auphg['characters']($jkc5, 0x0, it_1d - gup9), gup9 = it_1d;
        }
    }
    function s0_23(lpnghy, t1s_d) {
        for (; lpnghy >= cmbk4 && (t1s_d = gaqhu9['exec'](p9ugh));) $m7c = t1s_d['index'], cmbk4 = $m7c + t1s_d[0x0]['length'], di6jk['lineNumber']++;
        di6jk['columnNumber'] = lpnghy - $m7c + 0x1;
    }
    for (var $m7c = 0x0, cmbk4 = 0x0, gaqhu9 = /.*(?:\r\n?|\n)|.*$/g, di6jk = auphg['locator'], q8vfr = [{ 'currentNSMap': mb47c }], j561i = {}, gup9 = 0x0;;) {
        try {
            var s23z0 = p9ugh['indexOf']('<', gup9);
            if (0x0 > s23z0) {
                if (!p9ugh['substr'](gup9)['match'](/^\s*$/)) {
                    var rhaq9u = auphg['doc'],
                        t320zs = rhaq9u['createTextNode'](p9ugh['substr'](gup9));
                    rhaq9u['appendChild'](t320zs), auphg['currentElement'] = t320zs;
                }
                return;
            }
            switch (s23z0 > gup9 && bw8f(s23z0), p9ugh['charAt'](s23z0 + 0x1)) {
                case '/':
                    var f8r7w = p9ugh['indexOf']('>', s23z0 + 0x3),
                        aphug9 = p9ugh['substring'](s23z0 + 0x2, f8r7w),
                        aqhu9g = q8vfr['pop']();
                    0x0 > f8r7w ? (aphug9 = p9ugh['substring'](s23z0 + 0x2)['replace'](/[\s<].*/, ''), wv87f['error']('end tag name: ' + aphug9 + ' is not complete:' + aqhu9g['tagName']), f8r7w = s23z0 + 0x1 + aphug9['length']) : aphug9['match'](/\s</) && (aphug9 = aphug9['replace'](/[\s<].*/, ''), wv87f['error']('end tag name: ' + aphug9 + ' maybe not complete'), f8r7w = s23z0 + 0x1 + aphug9['length']);
                    var j65di1 = aqhu9g['localNSMap'],
                        frq8wv = aqhu9g['tagName'] == aphug9,
                        nypxg = frq8wv || aqhu9g['tagName'] && aqhu9g['tagName']['toLowerCase']() == aphug9['toLowerCase']();
                    if (nypxg) {
                        if (auphg['endElement'](aqhu9g['uri'], aqhu9g['localName'], aphug9), j65di1) {
                            for (var vm8wf in j65di1) auphg['endPrefixMapping'](vm8wf);
                        }
                        frq8wv || wv87f['fatalError']('end tag name: ' + aphug9 + ' is not match the current start tagName:' + aqhu9g['tagName']);
                    } else q8vfr['push'](aqhu9g);
                    f8r7w++;
                    break;
                case '?':
                    di6jk && s0_23(s23z0), f8r7w = Ehpgua(p9ugh, s23z0, auphg);
                    break;
                case '!':
                    di6jk && s0_23(s23z0), f8r7w = En9ypgh(p9ugh, s23z0, auphg, wv87f);
                    break;
                default:
                    di6jk && s0_23(s23z0);
                    var jd_1t = new Eruw(),
                        k$645 = q8vfr[q8vfr['length'] - 0x1]['currentNSMap'],
                        f8r7w = Eplyonx(p9ugh, s23z0, jd_1t, k$645, j1i_dt, wv87f),
                        qv9ura = jd_1t['length'];
                    if (!jd_1t['closed'] && Ev8rwqa(p9ugh, f8r7w, jd_1t['tagName'], j561i) && (jd_1t['closed'] = !0x0, fm78b4['nbsp'] || wv87f['warning']('unclosed xml attribute')), di6jk && qv9ura) {
                        for (var uwaqr = Ez03st2(di6jk, {}), yp9hn = 0x0; qv9ura > yp9hn; yp9hn++) {
                            var b74fcm = jd_1t[yp9hn];
                            s0_23(b74fcm['offset']), b74fcm['locator'] = Ez03st2(di6jk, {});
                        }
                        auphg['locator'] = uwaqr, Eb4m87(jd_1t, auphg, k$645) && q8vfr['push'](jd_1t), auphg['locator'] = di6jk;
                    } else Eb4m87(jd_1t, auphg, k$645) && q8vfr['push'](jd_1t);
                    'http://www.w3.org/1999/xhtml' !== jd_1t['uri'] || jd_1t['closed'] ? f8r7w++ : f8r7w = Ed56ij1(p9ugh, f8r7w, jd_1t['tagName'], j1i_dt, auphg);
            }
        } catch (mw7bf) {
            wv87f['error']('element parse error: ' + mw7bf), f8r7w = -0x1;
        }
        f8r7w > gup9 ? gup9 = f8r7w : bw8f(Math['max'](s23z0, gup9) + 0x1);
    }
}
function Ez03st2(k$dj, $6k4cb) {
    return $6k4cb['lineNumber'] = k$dj['lineNumber'], $6k4cb['columnNumber'] = k$dj['columnNumber'], $6k4cb;
}
function Eplyonx(i_s2t, xylopn, b7cmf4, mfb48, jti1d_, wf8b7m) {
    for (var w87bm, gn9p, k5$6c4 = ++xylopn, i6dj15 = Eghua9;;) {
        var f8wb7 = i_s2t['charAt'](k5$6c4);
        switch (f8wb7) {
            case '=':
                if (i6dj15 === E_st21i) w87bm = i_s2t['slice'](xylopn, k5$6c4), i6dj15 = Erhaqu9;else {
                    if (i6dj15 !== Eu9ravq) throw new Error('attribute equal must after attrName');
                    i6dj15 = Erhaqu9;
                }
                break;
            case '\x27':
            case '\x22':
                if (i6dj15 === Erhaqu9 || i6dj15 === E_st21i) {
                    if (i6dj15 === E_st21i && (wf8b7m['warning']('attribute value must after "="'), w87bm = i_s2t['slice'](xylopn, k5$6c4)), xylopn = k5$6c4 + 0x1, k5$6c4 = i_s2t['indexOf'](f8wb7, xylopn), !(k5$6c4 > 0x0)) throw new Error('attribute value no end \'' + f8wb7 + '\' match');
                    gn9p = i_s2t['slice'](xylopn, k5$6c4)['replace'](/&#?\w+;/g, jti1d_), b7cmf4['add'](w87bm, gn9p, xylopn - 0x1), i6dj15 = Egqu;
                } else {
                    if (i6dj15 != Euqa9r) throw new Error('attribute value must after "="');
                    gn9p = i_s2t['slice'](xylopn, k5$6c4)['replace'](/&#?\w+;/g, jti1d_), b7cmf4['add'](w87bm, gn9p, xylopn), wf8b7m['warning']('attribute "' + w87bm + '" missed start quot(' + f8wb7 + ')!!'), xylopn = k5$6c4 + 0x1, i6dj15 = Egqu;
                }
                break;
            case '/':
                switch (i6dj15) {
                    case Eghua9:
                        b7cmf4['setTagName'](i_s2t['slice'](xylopn, k5$6c4));
                    case Egqu:
                    case Efv8w7m:
                    case Ebm4c$7:
                        i6dj15 = Ebm4c$7, b7cmf4['closed'] = !0x0;
                    case Euqa9r:
                    case E_st21i:
                    case Eu9ravq:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return wf8b7m['error']('unexpected end of input'), i6dj15 == Eghua9 && b7cmf4['setTagName'](i_s2t['slice'](xylopn, k5$6c4)), k5$6c4;
            case '>':
                switch (i6dj15) {
                    case Eghua9:
                        b7cmf4['setTagName'](i_s2t['slice'](xylopn, k5$6c4));
                    case Egqu:
                    case Efv8w7m:
                    case Ebm4c$7:
                        break;
                    case Euqa9r:
                    case E_st21i:
                        gn9p = i_s2t['slice'](xylopn, k5$6c4), '/' === gn9p['slice'](-0x1) && (b7cmf4['closed'] = !0x0, gn9p = gn9p['slice'](0x0, -0x1));
                    case Eu9ravq:
                        i6dj15 === Eu9ravq && (gn9p = w87bm), i6dj15 == Euqa9r ? (wf8b7m['warning']('attribute "' + gn9p + '" missed quot(")!!'), b7cmf4['add'](w87bm, gn9p['replace'](/&#?\w+;/g, jti1d_), xylopn)) : ('http://www.w3.org/1999/xhtml' === mfb48[''] && gn9p['match'](/^(?:disabled|checked|selected)$/i) || wf8b7m['warning']('attribute "' + gn9p + '" missed value!! "' + gn9p + '" instead!!'), b7cmf4['add'](gn9p, gn9p, xylopn));
                        break;
                    case Erhaqu9:
                        throw new Error('attribute value missed!!');
                }
                return k5$6c4;
            case '\u0080':
                f8wb7 = '\x20';
            default:
                if ('\x20' >= f8wb7) switch (i6dj15) {
                    case Eghua9:
                        b7cmf4['setTagName'](i_s2t['slice'](xylopn, k5$6c4)), i6dj15 = Efv8w7m;
                        break;
                    case E_st21i:
                        w87bm = i_s2t['slice'](xylopn, k5$6c4), i6dj15 = Eu9ravq;
                        break;
                    case Euqa9r:
                        var gn9p = i_s2t['slice'](xylopn, k5$6c4)['replace'](/&#?\w+;/g, jti1d_);
                        wf8b7m['warning']('attribute "' + gn9p + '" missed quot(")!!'), b7cmf4['add'](w87bm, gn9p, xylopn);
                    case Egqu:
                        i6dj15 = Efv8w7m;
                } else switch (i6dj15) {
                    case Eu9ravq:
                        {
                            b7cmf4['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === mfb48[''] && w87bm['match'](/^(?:disabled|checked|selected)$/i) || wf8b7m['warning']('attribute "' + w87bm + '" missed value!! "' + w87bm + '" instead2!!'), b7cmf4['add'](w87bm, w87bm, xylopn), xylopn = k5$6c4, i6dj15 = E_st21i;
                        break;
                    case Egqu:
                        wf8b7m['warning']('attribute space is required"' + w87bm + '\x22!!');
                    case Efv8w7m:
                        i6dj15 = E_st21i, xylopn = k5$6c4;
                        break;
                    case Erhaqu9:
                        i6dj15 = Euqa9r, xylopn = k5$6c4;
                        break;
                    case Ebm4c$7:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        k5$6c4++;
    }
}
function Eb4m87(u9qva, m4b$, _1id5j) {
    for (var pnl = u9qva['tagName'], wq8vfr = null, vrfqw8 = u9qva['length']; vrfqw8--;) {
        var i1jd5_ = u9qva[vrfqw8],
            lxnpyo = i1jd5_['qName'],
            c5k$ = i1jd5_['value'],
            vur9 = lxnpyo['indexOf'](':');
        if (vur9 > 0x0) var mb$k4 = i1jd5_['prefix'] = lxnpyo['slice'](0x0, vur9),
            hny9 = lxnpyo['slice'](vur9 + 0x1),
            h9augq = 'xmlns' === mb$k4 && hny9;else hny9 = lxnpyo, mb$k4 = null, h9augq = 'xmlns' === lxnpyo && '';
        i1jd5_['localName'] = hny9, h9augq !== !0x1 && (null == wq8vfr && (wq8vfr = {}, Eqha9r(_1id5j, _1id5j = {})), _1id5j[h9augq] = wq8vfr[h9augq] = c5k$, i1jd5_['uri'] = 'http://www.w3.org/2000/xmlns/', m4b$['startPrefixMapping'](h9augq, c5k$));
    }
    for (var vrfqw8 = u9qva['length']; vrfqw8--;) {
        i1jd5_ = u9qva[vrfqw8];
        var mb$k4 = i1jd5_['prefix'];
        mb$k4 && ('xml' === mb$k4 && (i1jd5_['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== mb$k4 && (i1jd5_['uri'] = _1id5j[mb$k4 || '']));
    }
    var vur9 = pnl['indexOf'](':');
    vur9 > 0x0 ? (mb$k4 = u9qva['prefix'] = pnl['slice'](0x0, vur9), hny9 = u9qva['localName'] = pnl['slice'](vur9 + 0x1)) : (mb$k4 = null, hny9 = u9qva['localName'] = pnl);
    var w8rqf = u9qva['uri'] = _1id5j[mb$k4 || ''];
    if (m4b$['startElement'](w8rqf, hny9, pnl, u9qva), !u9qva['closed']) return u9qva['currentNSMap'] = _1id5j, u9qva['localNSMap'] = wq8vfr, !0x0;
    if (m4b$['endElement'](w8rqf, hny9, pnl), wq8vfr) {
        for (mb$k4 in wq8vfr) m4b$['endPrefixMapping'](mb$k4);
    }
}
function Ed56ij1(kcj6$5, dj1_, q9rhu, t3_0, c7f) {
    if (/^(?:script|textarea)$/i['test'](q9rhu)) {
        var puag = kcj6$5['indexOf']('</' + q9rhu + '>', dj1_),
            vfqr = kcj6$5['substring'](dj1_ + 0x1, puag);
        if (/[&<]/['test'](vfqr)) return (/^script$/i['test'](q9rhu) ? (c7f['characters'](vfqr, 0x0, vfqr['length']), puag) : (vfqr = vfqr['replace'](/&#?\w+;/g, t3_0), c7f['characters'](vfqr, 0x0, vfqr['length']), puag)
        );
    }
    return dj1_ + 0x1;
}
function Ev8rwqa(a9rqvu, bmw7, d_i51, c$5k) {
    var qwua = c$5k[d_i51];
    return null == qwua && (qwua = a9rqvu['lastIndexOf']('</' + d_i51 + '>'), bmw7 > qwua && (qwua = a9rqvu['lastIndexOf']('</' + d_i51)), c$5k[d_i51] = qwua), bmw7 > qwua;
}
function Eqha9r(id1_5, jd56i) {
    for (var v7wfr in id1_5) jd56i[v7wfr] = id1_5[v7wfr];
}
function En9ypgh(hraq, _i1st2, vqa8w, frw7v) {
    var nxlygp = hraq['charAt'](_i1st2 + 0x2);
    switch (nxlygp) {
        case '-':
            if ('-' === hraq['charAt'](_i1st2 + 0x3)) {
                var i_12ts = hraq['indexOf']('-->', _i1st2 + 0x4);
                return i_12ts > _i1st2 ? (vqa8w['comment'](hraq, _i1st2 + 0x4, i_12ts - _i1st2 - 0x4), i_12ts + 0x3) : (frw7v['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == hraq['substr'](_i1st2 + 0x3, 0x6)) {
                var i_12ts = hraq['indexOf'](']]>', _i1st2 + 0x9);
                return vqa8w['startCDATA'](), vqa8w['characters'](hraq, _i1st2 + 0x9, i_12ts - _i1st2 - 0x9), vqa8w['endCDATA'](), i_12ts + 0x3;
            }
            var vwm8f7 = E_it1(hraq, _i1st2),
                mwf87b = vwm8f7['length'];
            if (mwf87b > 0x1 && /!doctype/i['test'](vwm8f7[0x0][0x0])) {
                var wrqa8v = vwm8f7[0x1][0x0],
                    uaqvr9 = mwf87b > 0x3 && /^public$/i['test'](vwm8f7[0x2][0x0]) && vwm8f7[0x3][0x0],
                    t02s_ = mwf87b > 0x4 && vwm8f7[0x4][0x0],
                    vrwaqu = vwm8f7[mwf87b - 0x1];
                return vqa8w['startDTD'](wrqa8v, uaqvr9 && uaqvr9['replace'](/^(['"])(.*?)\1$/, '$2'), t02s_ && t02s_['replace'](/^(['"])(.*?)\1$/, '$2')), vqa8w['endDTD'](), vrwaqu['index'] + vrwaqu[0x0]['length'];
            }
    }
    return -0x1;
}
function Ehpgua(v8w, dk6$j, $b4m7) {
    var j6$5kc = v8w['indexOf']('?>', dk6$j);
    if (j6$5kc) {
        var t_sdi = v8w['substring'](dk6$j, j6$5kc)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (t_sdi) {
            {
                t_sdi[0x0]['length'];
            }
            return $b4m7['processingInstruction'](t_sdi[0x1], t_sdi[0x2]), j6$5kc + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function Eruw() {}
function Ejt_di1(hy9, wv8frq) {
    return hy9['__proto__'] = wv8frq, hy9;
}
function E_it1(plhgy, w8vf7r) {
    var uvwq,
        ag9hqu = [],
        _2st1 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (_2st1['lastIndex'] = w8vf7r, _2st1['exec'](plhgy); uvwq = _2st1['exec'](plhgy);) if (ag9hqu['push'](uvwq), uvwq[0x1]) return ag9hqu;
}
var Eti1dj = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    Evr8wf7 = new RegExp('[\\-\\.0-9' + Eti1dj['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    Eu9qarv = new RegExp('^' + Eti1dj['source'] + Evr8wf7['source'] + '*(?::' + Eti1dj['source'] + Evr8wf7['source'] + '*)?$'),
    Eghua9 = 0x0,
    E_st21i = 0x1,
    Eu9ravq = 0x2,
    Erhaqu9 = 0x3,
    Euqa9r = 0x4,
    Egqu = 0x5,
    Efv8w7m = 0x6,
    Ebm4c$7 = 0x7;
Evar8qw['prototype'] = {
    'parse': function (m$kcb, a9qrh, v8qrfw) {
        var agp = this['domBuilder'];
        agp['startDocument'](), Eqha9r(a9qrh, a9qrh = {}), Ev7wm(m$kcb, a9qrh, v8qrfw, agp, this['errorHandler']), agp['endDocument']();
    }
}, Eruw['prototype'] = {
    'setTagName': function (c465) {
        if (!Eu9qarv['test'](c465)) throw new Error('invalid tagName:' + c465);
        this['tagName'] = c465;
    },
    'add': function (uwqvra, c$k4mb, nhp9) {
        if (!Eu9qarv['test'](uwqvra)) throw new Error('invalid attribute:' + uwqvra);
        this[this['length']++] = {
            'qName': uwqvra,
            'value': c$k4mb,
            'offset': nhp9
        };
    },
    'length': 0x0,
    'getLocalName': function (m$b7c) {
        return this[m$b7c]['localName'];
    },
    'getLocator': function (_t30s) {
        return this[_t30s]['locator'];
    },
    'getQName': function (pgnlh) {
        return this[pgnlh]['qName'];
    },
    'getURI': function (kcbm) {
        return this[kcbm]['uri'];
    },
    'getValue': function (_jit) {
        return this[_jit]['value'];
    }
}, Ejt_di1({}, Ejt_di1['prototype']) instanceof Ejt_di1 || (Ejt_di1 = function (ypxlgn, yopxn) {
    function gu9hyp() {}
    gu9hyp['prototype'] = yopxn, gu9hyp = new gu9hyp();
    for (yopxn in ypxlgn) gu9hyp[yopxn] = ypxlgn[yopxn];
    return gu9hyp;
}), exports['XMLReader'] = Evar8qw;