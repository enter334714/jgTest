var f = wx.$B;
function Swpoxaq() {}
function Sodwa0(gleur, vsk$6m, glr9, yx5wp, hk6si) {
    function dwaqx(ihs4k$) {
        if (ihs4k$ > 0xffff) {
            ihs4k$ -= 0x10000;
            var v2d0m6 = 0xd800 + (ihs4k$ >> 0xa),
                hji38 = 0xdc00 + (0x3ff & ihs4k$);
            return String['fromCharCode'](v2d0m6, hji38);
        }
        return String['fromCharCode'](ihs4k$);
    }
    function greul(mv0k26) {
        var j8437h = mv0k26['slice'](0x1, -0x1);
        return j8437h in glr9 ? glr9[j8437h] : '#' === j8437h['charAt'](0x0) ? dwaqx(parseInt(j8437h['substr'](0x1)['replace']('x', '0x'))) : (hk6si['error']('entity not found:' + mv0k26), mv0k26);
    }
    function u1efg(py_z5x) {
        if (py_z5x > v$6m) {
            var j4h87 = gleur['substring'](v$6m, py_z5x)['replace'](/&#?\w+;/g, greul);
            xwaq && a2vm0(v$6m), yx5wp['characters'](j4h87, 0x0, py_z5x - v$6m), v$6m = py_z5x;
        }
    }
    function a2vm0(rge789, zbpy5_) {
        for (; rge789 >= xdow && (zbpy5_ = qdm20['exec'](gleur));) oxdaq = zbpy5_['index'], xdow = oxdaq + zbpy5_[0x0]['length'], xwaq['lineNumber']++;
        xwaq['columnNumber'] = rge789 - oxdaq + 0x1;
    }
    for (var oxdaq = 0x0, xdow = 0x0, qdm20 = /.*(?:\r\n?|\n)|.*$/g, xwaq = yx5wp['locator'], axdw = [{ 'currentNSMap': vsk$6m }], ft1l = {}, v$6m = 0x0;;) {
        try {
            var k$2m6v = gleur['indexOf']('<', v$6m);
            if (0x0 > k$2m6v) {
                if (!gleur['substr'](v$6m)['match'](/^\s*$/)) {
                    var ger879 = yx5wp['doc'],
                        wyzp5 = ger879['createTextNode'](gleur['substr'](v$6m));
                    ger879['appendChild'](wyzp5), yx5wp['currentElement'] = wyzp5;
                }
                return;
            }
            switch (k$2m6v > v$6m && u1efg(k$2m6v), gleur['charAt'](k$2m6v + 0x1)) {
                case '/':
                    var $khs6i = gleur['indexOf']('>', k$2m6v + 0x3),
                        j4ish3 = gleur['substring'](k$2m6v + 0x2, $khs6i),
                        j8r397 = axdw['pop']();
                    0x0 > $khs6i ? (j4ish3 = gleur['substring'](k$2m6v + 0x2)['replace'](/[\s<].*/, ''), hk6si['error']('end tag name: ' + j4ish3 + ' is not complete:' + j8r397['tagName']), $khs6i = k$2m6v + 0x1 + j4ish3['length']) : j4ish3['match'](/\s</) && (j4ish3 = j4ish3['replace'](/[\s<].*/, ''), hk6si['error']('end tag name: ' + j4ish3 + ' maybe not complete'), $khs6i = k$2m6v + 0x1 + j4ish3['length']);
                    var ao02qd = j8r397['localNSMap'],
                        j8ih3 = j8r397['tagName'] == j4ish3,
                        g9eru7 = j8ih3 || j8r397['tagName'] && j8r397['tagName']['toLowerCase']() == j4ish3['toLowerCase']();
                    if (g9eru7) {
                        if (yx5wp['endElement'](j8r397['uri'], j8r397['localName'], j4ish3), ao02qd) {
                            for (var eg1lru in ao02qd) yx5wp['endPrefixMapping'](eg1lru);
                        }
                        j8ih3 || hk6si['fatalError']('end tag name: ' + j4ish3 + ' is not match the current start tagName:' + j8r397['tagName']);
                    } else axdw['push'](j8r397);
                    $khs6i++;
                    break;
                case '?':
                    xwaq && a2vm0(k$2m6v), $khs6i = Sowap(gleur, k$2m6v, yx5wp);
                    break;
                case '!':
                    xwaq && a2vm0(k$2m6v), $khs6i = Slefg1u(gleur, k$2m6v, yx5wp, hk6si);
                    break;
                default:
                    xwaq && a2vm0(k$2m6v);
                    var ywpox5 = new Sje(),
                        si34h = axdw[axdw['length'] - 0x1]['currentNSMap'],
                        $khs6i = Sh4j3i8(gleur, k$2m6v, ywpox5, si34h, greul, hk6si),
                        tfu1gl = ywpox5['length'];
                    if (!ywpox5['closed'] && Sl1fuge(gleur, $khs6i, ywpox5['tagName'], ft1l) && (ywpox5['closed'] = !0x0, glr9['nbsp'] || hk6si['warning']('unclosed xml attribute')), xwaq && tfu1gl) {
                        for (var _yxp5z = Szxp5_(xwaq, {}), mdv260 = 0x0; tfu1gl > mdv260; mdv260++) {
                            var $43his = ywpox5[mdv260];
                            a2vm0($43his['offset']), $43his['locator'] = Szxp5_(xwaq, {});
                        }
                        yx5wp['locator'] = _yxp5z, Sa0m2dq(ywpox5, yx5wp, si34h) && axdw['push'](ywpox5), yx5wp['locator'] = xwaq;
                    } else Sa0m2dq(ywpox5, yx5wp, si34h) && axdw['push'](ywpox5);
                    'http://www.w3.org/1999/xhtml' !== ywpox5['uri'] || ywpox5['closed'] ? $khs6i++ : $khs6i = Sm2k06(gleur, $khs6i, ywpox5['tagName'], greul, yx5wp);
            }
        } catch (qxywp) {
            hk6si['error']('element parse error: ' + qxywp), $khs6i = -0x1;
        }
        $khs6i > v$6m ? v$6m = $khs6i : u1efg(Math['max'](k$2m6v, v$6m) + 0x1);
    }
}
function Szxp5_(h7j43, qxyo) {
    return qxyo['lineNumber'] = h7j43['lineNumber'], qxyo['columnNumber'] = h7j43['columnNumber'], qxyo;
}
function Sh4j3i8(mq20da, qxowy, oyqwpx, sihj4, qaxowp, t1lfgu) {
    for (var ih348j, uer1g, _px5y = ++qxowy, z5_by = Sk2;;) {
        var egu7r9 = mq20da['charAt'](_px5y);
        switch (egu7r9) {
            case '=':
                if (z5_by === Sk62m) ih348j = mq20da['slice'](qxowy, _px5y), z5_by = S$ivk6;else {
                    if (z5_by !== Ssikv$) throw new Error('attribute equal must after attrName');
                    z5_by = S$ivk6;
                }
                break;
            case '\x27':
            case '\x22':
                if (z5_by === S$ivk6 || z5_by === Sk62m) {
                    if (z5_by === Sk62m && (t1lfgu['warning']('attribute value must after "="'), ih348j = mq20da['slice'](qxowy, _px5y)), qxowy = _px5y + 0x1, _px5y = mq20da['indexOf'](egu7r9, qxowy), !(_px5y > 0x0)) throw new Error('attribute value no end \'' + egu7r9 + '\' match');
                    uer1g = mq20da['slice'](qxowy, _px5y)['replace'](/&#?\w+;/g, qaxowp), oyqwpx['add'](ih348j, uer1g, qxowy - 0x1), z5_by = S_y5p;
                } else {
                    if (z5_by != Spwox5y) throw new Error('attribute value must after "="');
                    uer1g = mq20da['slice'](qxowy, _px5y)['replace'](/&#?\w+;/g, qaxowp), oyqwpx['add'](ih348j, uer1g, qxowy), t1lfgu['warning']('attribute "' + ih348j + '" missed start quot(' + egu7r9 + ')!!'), qxowy = _px5y + 0x1, z5_by = S_y5p;
                }
                break;
            case '/':
                switch (z5_by) {
                    case Sk2:
                        oyqwpx['setTagName'](mq20da['slice'](qxowy, _px5y));
                    case S_y5p:
                    case Sod20aq:
                    case Sh38j47:
                        z5_by = Sh38j47, oyqwpx['closed'] = !0x0;
                    case Spwox5y:
                    case Sk62m:
                    case Ssikv$:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return t1lfgu['error']('unexpected end of input'), z5_by == Sk2 && oyqwpx['setTagName'](mq20da['slice'](qxowy, _px5y)), _px5y;
            case '>':
                switch (z5_by) {
                    case Sk2:
                        oyqwpx['setTagName'](mq20da['slice'](qxowy, _px5y));
                    case S_y5p:
                    case Sod20aq:
                    case Sh38j47:
                        break;
                    case Spwox5y:
                    case Sk62m:
                        uer1g = mq20da['slice'](qxowy, _px5y), '/' === uer1g['slice'](-0x1) && (oyqwpx['closed'] = !0x0, uer1g = uer1g['slice'](0x0, -0x1));
                    case Ssikv$:
                        z5_by === Ssikv$ && (uer1g = ih348j), z5_by == Spwox5y ? (t1lfgu['warning']('attribute "' + uer1g + '" missed quot(")!!'), oyqwpx['add'](ih348j, uer1g['replace'](/&#?\w+;/g, qaxowp), qxowy)) : ('http://www.w3.org/1999/xhtml' === sihj4[''] && uer1g['match'](/^(?:disabled|checked|selected)$/i) || t1lfgu['warning']('attribute "' + uer1g + '" missed value!! "' + uer1g + '" instead!!'), oyqwpx['add'](uer1g, uer1g, qxowy));
                        break;
                    case S$ivk6:
                        throw new Error('attribute value missed!!');
                }
                return _px5y;
            case '\u0080':
                egu7r9 = '\x20';
            default:
                if ('\x20' >= egu7r9) switch (z5_by) {
                    case Sk2:
                        oyqwpx['setTagName'](mq20da['slice'](qxowy, _px5y)), z5_by = Sod20aq;
                        break;
                    case Sk62m:
                        ih348j = mq20da['slice'](qxowy, _px5y), z5_by = Ssikv$;
                        break;
                    case Spwox5y:
                        var uer1g = mq20da['slice'](qxowy, _px5y)['replace'](/&#?\w+;/g, qaxowp);
                        t1lfgu['warning']('attribute "' + uer1g + '" missed quot(")!!'), oyqwpx['add'](ih348j, uer1g, qxowy);
                    case S_y5p:
                        z5_by = Sod20aq;
                } else switch (z5_by) {
                    case Ssikv$:
                        {
                            oyqwpx['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === sihj4[''] && ih348j['match'](/^(?:disabled|checked|selected)$/i) || t1lfgu['warning']('attribute "' + ih348j + '" missed value!! "' + ih348j + '" instead2!!'), oyqwpx['add'](ih348j, ih348j, qxowy), qxowy = _px5y, z5_by = Sk62m;
                        break;
                    case S_y5p:
                        t1lfgu['warning']('attribute space is required"' + ih348j + '\x22!!');
                    case Sod20aq:
                        z5_by = Sk62m, qxowy = _px5y;
                        break;
                    case S$ivk6:
                        z5_by = Spwox5y, qxowy = _px5y;
                        break;
                    case Sh38j47:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        _px5y++;
    }
}
function Sa0m2dq(v06m2, ik$4, h3j84i) {
    for (var e9g87r = v06m2['tagName'], k260vm = null, gtulf1 = v06m2['length']; gtulf1--;) {
        var gf1ltu = v06m2[gtulf1],
            efl1u = gf1ltu['qName'],
            $svik6 = gf1ltu['value'],
            hsk4i$ = efl1u['indexOf'](':');
        if (hsk4i$ > 0x0) var $3si4 = gf1ltu['prefix'] = efl1u['slice'](0x0, hsk4i$),
            h473 = efl1u['slice'](hsk4i$ + 0x1),
            xwzp = 'xmlns' === $3si4 && h473;else h473 = efl1u, $3si4 = null, xwzp = 'xmlns' === efl1u && '';
        gf1ltu['localName'] = h473, xwzp !== !0x1 && (null == k260vm && (k260vm = {}, Srg78(h3j84i, h3j84i = {})), h3j84i[xwzp] = k260vm[xwzp] = $svik6, gf1ltu['uri'] = 'http://www.w3.org/2000/xmlns/', ik$4['startPrefixMapping'](xwzp, $svik6));
    }
    for (var gtulf1 = v06m2['length']; gtulf1--;) {
        gf1ltu = v06m2[gtulf1];
        var $3si4 = gf1ltu['prefix'];
        $3si4 && ('xml' === $3si4 && (gf1ltu['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== $3si4 && (gf1ltu['uri'] = h3j84i[$3si4 || '']));
    }
    var hsk4i$ = e9g87r['indexOf'](':');
    hsk4i$ > 0x0 ? ($3si4 = v06m2['prefix'] = e9g87r['slice'](0x0, hsk4i$), h473 = v06m2['localName'] = e9g87r['slice'](hsk4i$ + 0x1)) : ($3si4 = null, h473 = v06m2['localName'] = e9g87r);
    var hj8374 = v06m2['uri'] = h3j84i[$3si4 || ''];
    if (ik$4['startElement'](hj8374, h473, e9g87r, v06m2), !v06m2['closed']) return v06m2['currentNSMap'] = h3j84i, v06m2['localNSMap'] = k260vm, !0x0;
    if (ik$4['endElement'](hj8374, h473, e9g87r), k260vm) {
        for ($3si4 in k260vm) ik$4['endPrefixMapping']($3si4);
    }
}
function Sm2k06(ulef, lreu, $s6vki, mvk$, mks6$) {
    if (/^(?:script|textarea)$/i['test']($s6vki)) {
        var lgr1eu = ulef['indexOf']('</' + $s6vki + '>', lreu),
            l1reg = ulef['substring'](lreu + 0x1, lgr1eu);
        if (/[&<]/['test'](l1reg)) return (/^script$/i['test']($s6vki) ? (mks6$['characters'](l1reg, 0x0, l1reg['length']), lgr1eu) : (l1reg = l1reg['replace'](/&#?\w+;/g, mvk$), mks6$['characters'](l1reg, 0x0, l1reg['length']), lgr1eu)
        );
    }
    return lreu + 0x1;
}
function Sl1fuge(re1gu, v6sk$, si4, geur79) {
    var qao2d0 = geur79[si4];
    return null == qao2d0 && (qao2d0 = re1gu['lastIndexOf']('</' + si4 + '>'), v6sk$ > qao2d0 && (qao2d0 = re1gu['lastIndexOf']('</' + si4)), geur79[si4] = qao2d0), v6sk$ > qao2d0;
}
function Srg78(k6$his, legu1f) {
    for (var qd02 in k6$his) legu1f[qd02] = k6$his[qd02];
}
function Slefg1u(le1fgu, hs4i$k, opxqaw, kvsm$6) {
    var oadxw = le1fgu['charAt'](hs4i$k + 0x2);
    switch (oadxw) {
        case '-':
            if ('-' === le1fgu['charAt'](hs4i$k + 0x3)) {
                var $6mskv = le1fgu['indexOf']('-->', hs4i$k + 0x4);
                return $6mskv > hs4i$k ? (opxqaw['comment'](le1fgu, hs4i$k + 0x4, $6mskv - hs4i$k - 0x4), $6mskv + 0x3) : (kvsm$6['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == le1fgu['substr'](hs4i$k + 0x3, 0x6)) {
                var $6mskv = le1fgu['indexOf'](']]>', hs4i$k + 0x9);
                return opxqaw['startCDATA'](), opxqaw['characters'](le1fgu, hs4i$k + 0x9, $6mskv - hs4i$k - 0x9), opxqaw['endCDATA'](), $6mskv + 0x3;
            }
            var v2ad0m = Sxywz5(le1fgu, hs4i$k),
                ynbz5_ = v2ad0m['length'];
            if (ynbz5_ > 0x1 && /!doctype/i['test'](v2ad0m[0x0][0x0])) {
                var wpzyx = v2ad0m[0x1][0x0],
                    gue9r = ynbz5_ > 0x3 && /^public$/i['test'](v2ad0m[0x2][0x0]) && v2ad0m[0x3][0x0],
                    qwyop = ynbz5_ > 0x4 && v2ad0m[0x4][0x0],
                    _5xpz = v2ad0m[ynbz5_ - 0x1];
                return opxqaw['startDTD'](wpzyx, gue9r && gue9r['replace'](/^(['"])(.*?)\1$/, '$2'), qwyop && qwyop['replace'](/^(['"])(.*?)\1$/, '$2')), opxqaw['endDTD'](), _5xpz['index'] + _5xpz[0x0]['length'];
            }
    }
    return -0x1;
}
function Sowap(r398, tu1l, wdqoa) {
    var dox = r398['indexOf']('?>', tu1l);
    if (dox) {
        var isk$h6 = r398['substring'](tu1l, dox)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (isk$h6) {
            {
                isk$h6[0x0]['length'];
            }
            return wdqoa['processingInstruction'](isk$h6[0x1], isk$h6[0x2]), dox + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function Sje() {}
function Skis4$h(v6sm$, rg7) {
    return v6sm$['__proto__'] = rg7, v6sm$;
}
function Sxywz5($iskv, g8e97r) {
    var u1gtf,
        qaox = [],
        a0v2m = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (a0v2m['lastIndex'] = g8e97r, a0v2m['exec']($iskv); u1gtf = a0v2m['exec']($iskv);) if (qaox['push'](u1gtf), u1gtf[0x1]) return qaox;
}
var Spxoqw = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    Sx5wpzy = new RegExp('[\\-\\.0-9' + Spxoqw['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    Sik$h4 = new RegExp('^' + Spxoqw['source'] + Sx5wpzy['source'] + '*(?::' + Spxoqw['source'] + Sx5wpzy['source'] + '*)?$'),
    Sk2 = 0x0,
    Sk62m = 0x1,
    Ssikv$ = 0x2,
    S$ivk6 = 0x3,
    Spwox5y = 0x4,
    S_y5p = 0x5,
    Sod20aq = 0x6,
    Sh38j47 = 0x7;
Swpoxaq['prototype'] = {
    'parse': function (jh4i3, h8ij43, v$ik6s) {
        var glfue1 = this['domBuilder'];
        glfue1['startDocument'](), Srg78(h8ij43, h8ij43 = {}), Sodwa0(jh4i3, h8ij43, v$ik6s, glfue1, this['errorHandler']), glfue1['endDocument']();
    }
}, Sje['prototype'] = {
    'setTagName': function (lg1fe) {
        if (!Sik$h4['test'](lg1fe)) throw new Error('invalid tagName:' + lg1fe);
        this['tagName'] = lg1fe;
    },
    'add': function (t1uflg, apxow, egur97) {
        if (!Sik$h4['test'](t1uflg)) throw new Error('invalid attribute:' + t1uflg);
        this[this['length']++] = {
            'qName': t1uflg,
            'value': apxow,
            'offset': egur97
        };
    },
    'length': 0x0,
    'getLocalName': function (rej79) {
        return this[rej79]['localName'];
    },
    'getLocator': function (aqwop) {
        return this[aqwop]['locator'];
    },
    'getQName': function ($4si3h) {
        return this[$4si3h]['qName'];
    },
    'getURI': function (utfgl1) {
        return this[utfgl1]['uri'];
    },
    'getValue': function (r9gel) {
        return this[r9gel]['value'];
    }
}, Skis4$h({}, Skis4$h['prototype']) instanceof Skis4$h || (Skis4$h = function (utlfg1, pwyxz5) {
    function d0am2v() {}
    d0am2v['prototype'] = pwyxz5, d0am2v = new d0am2v();
    for (pwyxz5 in utlfg1) d0am2v[pwyxz5] = utlfg1[pwyxz5];
    return d0am2v;
}), exports['XMLReader'] = Swpoxaq;