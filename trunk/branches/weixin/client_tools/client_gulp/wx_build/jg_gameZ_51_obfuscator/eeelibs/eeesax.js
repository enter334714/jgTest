var b = wx.$e;
function ezhtrly() {}
function elixg$t(aopmc7, ryhtl, _fy4, mpao, ao_c) {
    function su9(gji) {
        if (gji > 0xffff) {
            gji -= 0x10000;
            var ecaomp = 0xd800 + (gji >> 0xa),
                hxlgt = 0xdc00 + (0x3ff & gji);
            return String['fromCharCode'](ecaomp, hxlgt);
        }
        return String['fromCharCode'](gji);
    }
    function kub(snu6) {
        var c74am = snu6['slice'](0x1, -0x1);
        return c74am in _fy4 ? _fy4[c74am] : '#' === c74am['charAt'](0x0) ? su9(parseInt(c74am['substr'](0x1)['replace']('x', '0x'))) : (ao_c['error']('entity not found:' + snu6), snu6);
    }
    function d205w8(gt$ij) {
        if (gt$ij > $xlhtg) {
            var d0kb = aopmc7['substring']($xlhtg, gt$ij)['replace'](/&#?\w+;/g, kub);
            xglr && uj3nqi($xlhtg), mpao['characters'](d0kb, 0x0, gt$ij - $xlhtg), $xlhtg = gt$ij;
        }
    }
    function uj3nqi(tlh$xg, fv_74) {
        for (; tlh$xg >= $jqni && (fv_74 = nuk9q['exec'](aopmc7));) qi$jn = fv_74['index'], $jqni = qi$jn + fv_74[0x0]['length'], xglr['lineNumber']++;
        xglr['columnNumber'] = tlh$xg - qi$jn + 0x1;
    }
    for (var qi$jn = 0x0, $jqni = 0x0, nuk9q = /.*(?:\r\n?|\n)|.*$/g, xglr = mpao['locator'], zghltr = [{ 'currentNSMap': ryhtl }], xgi = {}, $xlhtg = 0x0;;) {
        try {
            var fy7_v = aopmc7['indexOf']('<', $xlhtg);
            if (0x0 > fy7_v) {
                if (!aopmc7['substr']($xlhtg)['match'](/^\s*$/)) {
                    var hztlgr = mpao['doc'],
                        c7op = hztlgr['createTextNode'](aopmc7['substr']($xlhtg));
                    hztlgr['appendChild'](c7op), mpao['currentElement'] = c7op;
                }
                return;
            }
            switch (fy7_v > $xlhtg && d205w8(fy7_v), aopmc7['charAt'](fy7_v + 0x1)) {
                case '/':
                    var qij3x$ = aopmc7['indexOf']('>', fy7_v + 0x3),
                        yv4f = aopmc7['substring'](fy7_v + 0x2, qij3x$),
                        s69kub = zghltr['pop']();
                    0x0 > qij3x$ ? (yv4f = aopmc7['substring'](fy7_v + 0x2)['replace'](/[\s<].*/, ''), ao_c['error']('end tag name: ' + yv4f + ' is not complete:' + s69kub['tagName']), qij3x$ = fy7_v + 0x1 + yv4f['length']) : yv4f['match'](/\s</) && (yv4f = yv4f['replace'](/[\s<].*/, ''), ao_c['error']('end tag name: ' + yv4f + ' maybe not complete'), qij3x$ = fy7_v + 0x1 + yv4f['length']);
                    var v7a = s69kub['localNSMap'],
                        a7m4c_ = s69kub['tagName'] == yv4f,
                        ryzflh = a7m4c_ || s69kub['tagName'] && s69kub['tagName']['toLowerCase']() == yv4f['toLowerCase']();
                    if (ryzflh) {
                        if (mpao['endElement'](s69kub['uri'], s69kub['localName'], yv4f), v7a) {
                            for (var moc_7a in v7a) mpao['endPrefixMapping'](moc_7a);
                        }
                        a7m4c_ || ao_c['fatalError']('end tag name: ' + yv4f + ' is not match the current start tagName:' + s69kub['tagName']);
                    } else zghltr['push'](s69kub);
                    qij3x$++;
                    break;
                case '?':
                    xglr && uj3nqi(fy7_v), qij3x$ = ek9nsu6(aopmc7, fy7_v, mpao);
                    break;
                case '!':
                    xglr && uj3nqi(fy7_v), qij3x$ = erghztl(aopmc7, fy7_v, mpao, ao_c);
                    break;
                default:
                    xglr && uj3nqi(fy7_v);
                    var zrfly = new enqj3i(),
                        qi$xj = zghltr[zghltr['length'] - 0x1]['currentNSMap'],
                        qij3x$ = erhtx(aopmc7, fy7_v, zrfly, qi$xj, kub, ao_c),
                        kqs = zrfly['length'];
                    if (!zrfly['closed'] && eu3jsnq(aopmc7, qij3x$, zrfly['tagName'], xgi) && (zrfly['closed'] = !0x0, _fy4['nbsp'] || ao_c['warning']('unclosed xml attribute')), xglr && kqs) {
                        for (var lhxtg = ey_f74(xglr, {}), a7_mco = 0x0; kqs > a7_mco; a7_mco++) {
                            var kn6us9 = zrfly[a7_mco];
                            uj3nqi(kn6us9['offset']), kn6us9['locator'] = ey_f74(xglr, {});
                        }
                        mpao['locator'] = lhxtg, e$niqj3(zrfly, mpao, qi$xj) && zghltr['push'](zrfly), mpao['locator'] = xglr;
                    } else e$niqj3(zrfly, mpao, qi$xj) && zghltr['push'](zrfly);
                    'http://www.w3.org/1999/xhtml' !== zrfly['uri'] || zrfly['closed'] ? qij3x$++ : qij3x$ = eijg$t(aopmc7, qij3x$, zrfly['tagName'], kub, mpao);
            }
        } catch (ztglh) {
            ao_c['error']('element parse error: ' + ztglh), qij3x$ = -0x1;
        }
        qij3x$ > $xlhtg ? $xlhtg = qij3x$ : d205w8(Math['max'](fy7_v, $xlhtg) + 0x1);
    }
}
function ey_f74(fzhvyr, nqu3sj) {
    return nqu3sj['lineNumber'] = fzhvyr['lineNumber'], nqu3sj['columnNumber'] = fzhvyr['columnNumber'], nqu3sj;
}
function erhtx(s9b6u, $3xig, tlzyh, ns3qju, ztyr, _z4fy) {
    for (var mapeoc, uk9b6s, vm_a = ++$3xig, q3$jix = ejq$in3;;) {
        var gtli = s9b6u['charAt'](vm_a);
        switch (gtli) {
            case '=':
                if (q3$jix === eytz) mapeoc = s9b6u['slice']($3xig, vm_a), q3$jix = eit$xgj;else {
                    if (q3$jix !== esnu69) throw new Error('attribute equal must after attrName');
                    q3$jix = eit$xgj;
                }
                break;
            case '\x27':
            case '\x22':
                if (q3$jix === eit$xgj || q3$jix === eytz) {
                    if (q3$jix === eytz && (_z4fy['warning']('attribute value must after "="'), mapeoc = s9b6u['slice']($3xig, vm_a)), $3xig = vm_a + 0x1, vm_a = s9b6u['indexOf'](gtli, $3xig), !(vm_a > 0x0)) throw new Error('attribute value no end \'' + gtli + '\' match');
                    uk9b6s = s9b6u['slice']($3xig, vm_a)['replace'](/&#?\w+;/g, ztyr), tlzyh['add'](mapeoc, uk9b6s, $3xig - 0x1), q3$jix = etjgix;
                } else {
                    if (q3$jix != emco7a) throw new Error('attribute value must after "="');
                    uk9b6s = s9b6u['slice']($3xig, vm_a)['replace'](/&#?\w+;/g, ztyr), tlzyh['add'](mapeoc, uk9b6s, $3xig), _z4fy['warning']('attribute "' + mapeoc + '" missed start quot(' + gtli + ')!!'), $3xig = vm_a + 0x1, q3$jix = etjgix;
                }
                break;
            case '/':
                switch (q3$jix) {
                    case ejq$in3:
                        tlzyh['setTagName'](s9b6u['slice']($3xig, vm_a));
                    case etjgix:
                    case e_7vaf4:
                    case eamo7:
                        q3$jix = eamo7, tlzyh['closed'] = !0x0;
                    case emco7a:
                    case eytz:
                    case esnu69:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return _z4fy['error']('unexpected end of input'), q3$jix == ejq$in3 && tlzyh['setTagName'](s9b6u['slice']($3xig, vm_a)), vm_a;
            case '>':
                switch (q3$jix) {
                    case ejq$in3:
                        tlzyh['setTagName'](s9b6u['slice']($3xig, vm_a));
                    case etjgix:
                    case e_7vaf4:
                    case eamo7:
                        break;
                    case emco7a:
                    case eytz:
                        uk9b6s = s9b6u['slice']($3xig, vm_a), '/' === uk9b6s['slice'](-0x1) && (tlzyh['closed'] = !0x0, uk9b6s = uk9b6s['slice'](0x0, -0x1));
                    case esnu69:
                        q3$jix === esnu69 && (uk9b6s = mapeoc), q3$jix == emco7a ? (_z4fy['warning']('attribute "' + uk9b6s + '" missed quot(")!!'), tlzyh['add'](mapeoc, uk9b6s['replace'](/&#?\w+;/g, ztyr), $3xig)) : ('http://www.w3.org/1999/xhtml' === ns3qju[''] && uk9b6s['match'](/^(?:disabled|checked|selected)$/i) || _z4fy['warning']('attribute "' + uk9b6s + '" missed value!! "' + uk9b6s + '" instead!!'), tlzyh['add'](uk9b6s, uk9b6s, $3xig));
                        break;
                    case eit$xgj:
                        throw new Error('attribute value missed!!');
                }
                return vm_a;
            case '\u0080':
                gtli = '\x20';
            default:
                if ('\x20' >= gtli) switch (q3$jix) {
                    case ejq$in3:
                        tlzyh['setTagName'](s9b6u['slice']($3xig, vm_a)), q3$jix = e_7vaf4;
                        break;
                    case eytz:
                        mapeoc = s9b6u['slice']($3xig, vm_a), q3$jix = esnu69;
                        break;
                    case emco7a:
                        var uk9b6s = s9b6u['slice']($3xig, vm_a)['replace'](/&#?\w+;/g, ztyr);
                        _z4fy['warning']('attribute "' + uk9b6s + '" missed quot(")!!'), tlzyh['add'](mapeoc, uk9b6s, $3xig);
                    case etjgix:
                        q3$jix = e_7vaf4;
                } else switch (q3$jix) {
                    case esnu69:
                        {
                            tlzyh['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === ns3qju[''] && mapeoc['match'](/^(?:disabled|checked|selected)$/i) || _z4fy['warning']('attribute "' + mapeoc + '" missed value!! "' + mapeoc + '" instead2!!'), tlzyh['add'](mapeoc, mapeoc, $3xig), $3xig = vm_a, q3$jix = eytz;
                        break;
                    case etjgix:
                        _z4fy['warning']('attribute space is required"' + mapeoc + '\x22!!');
                    case e_7vaf4:
                        q3$jix = eytz, $3xig = vm_a;
                        break;
                    case eit$xgj:
                        q3$jix = emco7a, $3xig = vm_a;
                        break;
                    case eamo7:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        vm_a++;
    }
}
function e$niqj3(rvz4y, qni3j, fyz4_) {
    for (var c7_am = rvz4y['tagName'], ti$j = null, flzh = rvz4y['length']; flzh--;) {
        var vyhzr = rvz4y[flzh],
            unj3i = vyhzr['qName'],
            rgtxlh = vyhzr['value'],
            xtgj$i = unj3i['indexOf'](':');
        if (xtgj$i > 0x0) var b05d = vyhzr['prefix'] = unj3i['slice'](0x0, xtgj$i),
            $3qnji = unj3i['slice'](xtgj$i + 0x1),
            lzhryf = 'xmlns' === b05d && $3qnji;else $3qnji = unj3i, b05d = null, lzhryf = 'xmlns' === unj3i && '';
        vyhzr['localName'] = $3qnji, lzhryf !== !0x1 && (null == ti$j && (ti$j = {}, e_4vaf(fyz4_, fyz4_ = {})), fyz4_[lzhryf] = ti$j[lzhryf] = rgtxlh, vyhzr['uri'] = 'http://www.w3.org/2000/xmlns/', qni3j['startPrefixMapping'](lzhryf, rgtxlh));
    }
    for (var flzh = rvz4y['length']; flzh--;) {
        vyhzr = rvz4y[flzh];
        var b05d = vyhzr['prefix'];
        b05d && ('xml' === b05d && (vyhzr['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== b05d && (vyhzr['uri'] = fyz4_[b05d || '']));
    }
    var xtgj$i = c7_am['indexOf'](':');
    xtgj$i > 0x0 ? (b05d = rvz4y['prefix'] = c7_am['slice'](0x0, xtgj$i), $3qnji = rvz4y['localName'] = c7_am['slice'](xtgj$i + 0x1)) : (b05d = null, $3qnji = rvz4y['localName'] = c7_am);
    var d50bw = rvz4y['uri'] = fyz4_[b05d || ''];
    if (qni3j['startElement'](d50bw, $3qnji, c7_am, rvz4y), !rvz4y['closed']) return rvz4y['currentNSMap'] = fyz4_, rvz4y['localNSMap'] = ti$j, !0x0;
    if (qni3j['endElement'](d50bw, $3qnji, c7_am), ti$j) {
        for (b05d in ti$j) qni3j['endPrefixMapping'](b05d);
    }
}
function eijg$t(_4vyfz, lthyzr, pacom, gx$i3, q3jni) {
    if (/^(?:script|textarea)$/i['test'](pacom)) {
        var htrgzl = _4vyfz['indexOf']('</' + pacom + '>', lthyzr),
            mpoea = _4vyfz['substring'](lthyzr + 0x1, htrgzl);
        if (/[&<]/['test'](mpoea)) return (/^script$/i['test'](pacom) ? (q3jni['characters'](mpoea, 0x0, mpoea['length']), htrgzl) : (mpoea = mpoea['replace'](/&#?\w+;/g, gx$i3), q3jni['characters'](mpoea, 0x0, mpoea['length']), htrgzl)
        );
    }
    return lthyzr + 0x1;
}
function eu3jsnq(cpm7, yfz4v_, m74a_, z4) {
    var htrxlg = z4[m74a_];
    return null == htrxlg && (htrxlg = cpm7['lastIndexOf']('</' + m74a_ + '>'), yfz4v_ > htrxlg && (htrxlg = cpm7['lastIndexOf']('</' + m74a_)), z4[m74a_] = htrxlg), yfz4v_ > htrxlg;
}
function e_4vaf(jxt$i, yhrvzf) {
    for (var zthgl in jxt$i) yhrvzf[zthgl] = jxt$i[zthgl];
}
function erghztl(x3iqj, qnsuj, lrhyt, zy_) {
    var z_vy4 = x3iqj['charAt'](qnsuj + 0x2);
    switch (z_vy4) {
        case '-':
            if ('-' === x3iqj['charAt'](qnsuj + 0x3)) {
                var d8wb0 = x3iqj['indexOf']('-->', qnsuj + 0x4);
                return d8wb0 > qnsuj ? (lrhyt['comment'](x3iqj, qnsuj + 0x4, d8wb0 - qnsuj - 0x4), d8wb0 + 0x3) : (zy_['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == x3iqj['substr'](qnsuj + 0x3, 0x6)) {
                var d8wb0 = x3iqj['indexOf'](']]>', qnsuj + 0x9);
                return lrhyt['startCDATA'](), lrhyt['characters'](x3iqj, qnsuj + 0x9, d8wb0 - qnsuj - 0x9), lrhyt['endCDATA'](), d8wb0 + 0x3;
            }
            var ksb690 = e_4v7ma(x3iqj, qnsuj),
                $x3iq = ksb690['length'];
            if ($x3iq > 0x1 && /!doctype/i['test'](ksb690[0x0][0x0])) {
                var lgrt = ksb690[0x1][0x0],
                    htlxrg = $x3iq > 0x3 && /^public$/i['test'](ksb690[0x2][0x0]) && ksb690[0x3][0x0],
                    xl$th = $x3iq > 0x4 && ksb690[0x4][0x0],
                    poc7ma = ksb690[$x3iq - 0x1];
                return lrhyt['startDTD'](lgrt, htlxrg && htlxrg['replace'](/^(['"])(.*?)\1$/, '$2'), xl$th && xl$th['replace'](/^(['"])(.*?)\1$/, '$2')), lrhyt['endDTD'](), poc7ma['index'] + poc7ma[0x0]['length'];
            }
    }
    return -0x1;
}
function ek9nsu6(b6580, lgtrzh, u3sjq) {
    var zvyfrh = b6580['indexOf']('?>', lgtrzh);
    if (zvyfrh) {
        var squ3n9 = b6580['substring'](lgtrzh, zvyfrh)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (squ3n9) {
            {
                squ3n9[0x0]['length'];
            }
            return u3sjq['processingInstruction'](squ3n9[0x1], squ3n9[0x2]), zvyfrh + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function enqj3i() {}
function efrhzl(lhx$gt, ocmap7) {
    return lhx$gt['__proto__'] = ocmap7, lhx$gt;
}
function e_4v7ma(bw805d, jxi$q) {
    var qxi$j,
        cm7a4 = [],
        ig$tl = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (ig$tl['lastIndex'] = jxi$q, ig$tl['exec'](bw805d); qxi$j = ig$tl['exec'](bw805d);) if (cm7a4['push'](qxi$j), qxi$j[0x1]) return cm7a4;
}
var ed285 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    e_m7av4 = new RegExp('[\\-\\.0-9' + ed285['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    ezylfr = new RegExp('^' + ed285['source'] + e_m7av4['source'] + '*(?::' + ed285['source'] + e_m7av4['source'] + '*)?$'),
    ejq$in3 = 0x0,
    eytz = 0x1,
    esnu69 = 0x2,
    eit$xgj = 0x3,
    emco7a = 0x4,
    etjgix = 0x5,
    e_7vaf4 = 0x6,
    eamo7 = 0x7;
ezhtrly['prototype'] = {
    'parse': function (ti$xg, k0d56, zhylr) {
        var nqj$i3 = this['domBuilder'];
        nqj$i3['startDocument'](), e_4vaf(k0d56, k0d56 = {}), elixg$t(ti$xg, k0d56, zhylr, nqj$i3, this['errorHandler']), nqj$i3['endDocument']();
    }
}, enqj3i['prototype'] = {
    'setTagName': function (f4vz) {
        if (!ezylfr['test'](f4vz)) throw new Error('invalid tagName:' + f4vz);
        this['tagName'] = f4vz;
    },
    'add': function (skun6, nu3jsq, n3jsq) {
        if (!ezylfr['test'](skun6)) throw new Error('invalid attribute:' + skun6);
        this[this['length']++] = {
            'qName': skun6,
            'value': nu3jsq,
            'offset': n3jsq
        };
    },
    'length': 0x0,
    'getLocalName': function (xl$ti) {
        return this[xl$ti]['localName'];
    },
    'getLocator': function (xhtrl) {
        return this[xhtrl]['locator'];
    },
    'getQName': function (ui3jqn) {
        return this[ui3jqn]['qName'];
    },
    'getURI': function (_a4v) {
        return this[_a4v]['uri'];
    },
    'getValue': function (fhyzv) {
        return this[fhyzv]['value'];
    }
}, efrhzl({}, efrhzl['prototype']) instanceof efrhzl || (efrhzl = function (zvfry, ixg$t) {
    function r4vyfz() {}
    r4vyfz['prototype'] = ixg$t, r4vyfz = new r4vyfz();
    for (ixg$t in zvfry) r4vyfz[ixg$t] = zvfry[ixg$t];
    return r4vyfz;
}), exports['XMLReader'] = ezhtrly;