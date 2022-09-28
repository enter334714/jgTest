var b = wx.$e;
function e$nqij() {}
function em7_4(hzt, xrglth, y4zvfr, rtgzh, d5b6k0) {
    function gtlx$h(lzhrfy) {
        if (lzhrfy > 0xffff) {
            lzhrfy -= 0x10000;
            var sunkq9 = 0xd800 + (lzhrfy >> 0xa),
                hrtlgx = 0xdc00 + (0x3ff & lzhrfy);
            return String['fromCharCode'](sunkq9, hrtlgx);
        }
        return String['fromCharCode'](lzhrfy);
    }
    function qnjs3(aocm_7) {
        var t$xijg = aocm_7['slice'](0x1, -0x1);
        return t$xijg in y4zvfr ? y4zvfr[t$xijg] : '#' === t$xijg['charAt'](0x0) ? gtlx$h(parseInt(t$xijg['substr'](0x1)['replace']('x', '0x'))) : (d5b6k0['error']('entity not found:' + aocm_7), aocm_7);
    }
    function vy74_f(yz_vf4) {
        if (yz_vf4 > _c4m7a) {
            var t$xhlg = hzt['substring'](_c4m7a, yz_vf4)['replace'](/&#?\w+;/g, qnjs3);
            sk6n && yf74v_(_c4m7a), rtgzh['characters'](t$xhlg, 0x0, yz_vf4 - _c4m7a), _c4m7a = yz_vf4;
        }
    }
    function yf74v_(xlig$, u9qsk) {
        for (; xlig$ >= gxhlt && (u9qsk = vryfz['exec'](hzt));) mcoaep = u9qsk['index'], gxhlt = mcoaep + u9qsk[0x0]['length'], sk6n['lineNumber']++;
        sk6n['columnNumber'] = xlig$ - mcoaep + 0x1;
    }
    for (var mcoaep = 0x0, gxhlt = 0x0, vryfz = /.*(?:\r\n?|\n)|.*$/g, sk6n = rtgzh['locator'], o7c_a = [{ 'currentNSMap': xrglth }], glxi = {}, _c4m7a = 0x0;;) {
        try {
            var yhlz = hzt['indexOf']('<', _c4m7a);
            if (0x0 > yhlz) {
                if (!hzt['substr'](_c4m7a)['match'](/^\s*$/)) {
                    var epacmo = rtgzh['doc'],
                        kubs = epacmo['createTextNode'](hzt['substr'](_c4m7a));
                    epacmo['appendChild'](kubs), rtgzh['currentElement'] = kubs;
                }
                return;
            }
            switch (yhlz > _c4m7a && vy74_f(yhlz), hzt['charAt'](yhlz + 0x1)) {
                case '/':
                    var rhytlz = hzt['indexOf']('>', yhlz + 0x3),
                        gtx$lh = hzt['substring'](yhlz + 0x2, rhytlz),
                        q3usn9 = o7c_a['pop']();
                    0x0 > rhytlz ? (gtx$lh = hzt['substring'](yhlz + 0x2)['replace'](/[\s<].*/, ''), d5b6k0['error']('end tag name: ' + gtx$lh + ' is not complete:' + q3usn9['tagName']), rhytlz = yhlz + 0x1 + gtx$lh['length']) : gtx$lh['match'](/\s</) && (gtx$lh = gtx$lh['replace'](/[\s<].*/, ''), d5b6k0['error']('end tag name: ' + gtx$lh + ' maybe not complete'), rhytlz = yhlz + 0x1 + gtx$lh['length']);
                    var i3$n = q3usn9['localNSMap'],
                        xg$tj = q3usn9['tagName'] == gtx$lh,
                        u96sb = xg$tj || q3usn9['tagName'] && q3usn9['tagName']['toLowerCase']() == gtx$lh['toLowerCase']();
                    if (u96sb) {
                        if (rtgzh['endElement'](q3usn9['uri'], q3usn9['localName'], gtx$lh), i3$n) {
                            for (var b9kd in i3$n) rtgzh['endPrefixMapping'](b9kd);
                        }
                        xg$tj || d5b6k0['fatalError']('end tag name: ' + gtx$lh + ' is not match the current start tagName:' + q3usn9['tagName']);
                    } else o7c_a['push'](q3usn9);
                    rhytlz++;
                    break;
                case '?':
                    sk6n && yf74v_(yhlz), rhytlz = eyrlzhf(hzt, yhlz, rtgzh);
                    break;
                case '!':
                    sk6n && yf74v_(yhlz), rhytlz = epcea(hzt, yhlz, rtgzh, d5b6k0);
                    break;
                default:
                    sk6n && yf74v_(yhlz);
                    var _v4yf7 = new ecmaope(),
                        qun3i = o7c_a[o7c_a['length'] - 0x1]['currentNSMap'],
                        rhytlz = em_7v(hzt, yhlz, _v4yf7, qun3i, qnjs3, d5b6k0),
                        zvfyr = _v4yf7['length'];
                    if (!_v4yf7['closed'] && egzhrt(hzt, rhytlz, _v4yf7['tagName'], glxi) && (_v4yf7['closed'] = !0x0, y4zvfr['nbsp'] || d5b6k0['warning']('unclosed xml attribute')), sk6n && zvfyr) {
                        for (var o7_cma = etg$xli(sk6n, {}), a_7c4 = 0x0; zvfyr > a_7c4; a_7c4++) {
                            var d0b = _v4yf7[a_7c4];
                            yf74v_(d0b['offset']), d0b['locator'] = etg$xli(sk6n, {});
                        }
                        rtgzh['locator'] = o7_cma, eampeoc(_v4yf7, rtgzh, qun3i) && o7c_a['push'](_v4yf7), rtgzh['locator'] = sk6n;
                    } else eampeoc(_v4yf7, rtgzh, qun3i) && o7c_a['push'](_v4yf7);
                    'http://www.w3.org/1999/xhtml' !== _v4yf7['uri'] || _v4yf7['closed'] ? rhytlz++ : rhytlz = eoapmec(hzt, rhytlz, _v4yf7['tagName'], qnjs3, rtgzh);
            }
        } catch (j3xg) {
            d5b6k0['error']('element parse error: ' + j3xg), rhytlz = -0x1;
        }
        rhytlz > _c4m7a ? _c4m7a = rhytlz : vy74_f(Math['max'](yhlz, _c4m7a) + 0x1);
    }
}
function etg$xli(hyfzr, yrhtz) {
    return yrhtz['lineNumber'] = hyfzr['lineNumber'], yrhtz['columnNumber'] = hyfzr['columnNumber'], yrhtz;
}
function em_7v(yf4vr, zfyvr4, j$3n, rhfvzy, k9nsu6, ampec) {
    for (var oca7mp, l$igxt, xi$jgt = ++zfyvr4, y4_fvz = ethzr;;) {
        var d5b8w0 = yf4vr['charAt'](xi$jgt);
        switch (d5b8w0) {
            case '=':
                if (y4_fvz === eva_47f) oca7mp = yf4vr['slice'](zfyvr4, xi$jgt), y4_fvz = e$ixtjg;else {
                    if (y4_fvz !== ensj3u) throw new Error('attribute equal must after attrName');
                    y4_fvz = e$ixtjg;
                }
                break;
            case '\x27':
            case '\x22':
                if (y4_fvz === e$ixtjg || y4_fvz === eva_47f) {
                    if (y4_fvz === eva_47f && (ampec['warning']('attribute value must after "="'), oca7mp = yf4vr['slice'](zfyvr4, xi$jgt)), zfyvr4 = xi$jgt + 0x1, xi$jgt = yf4vr['indexOf'](d5b8w0, zfyvr4), !(xi$jgt > 0x0)) throw new Error('attribute value no end \'' + d5b8w0 + '\' match');
                    l$igxt = yf4vr['slice'](zfyvr4, xi$jgt)['replace'](/&#?\w+;/g, k9nsu6), j$3n['add'](oca7mp, l$igxt, zfyvr4 - 0x1), y4_fvz = eunq3j;
                } else {
                    if (y4_fvz != el$txgi) throw new Error('attribute value must after "="');
                    l$igxt = yf4vr['slice'](zfyvr4, xi$jgt)['replace'](/&#?\w+;/g, k9nsu6), j$3n['add'](oca7mp, l$igxt, zfyvr4), ampec['warning']('attribute "' + oca7mp + '" missed start quot(' + d5b8w0 + ')!!'), zfyvr4 = xi$jgt + 0x1, y4_fvz = eunq3j;
                }
                break;
            case '/':
                switch (y4_fvz) {
                    case ethzr:
                        j$3n['setTagName'](yf4vr['slice'](zfyvr4, xi$jgt));
                    case eunq3j:
                    case ex$htg:
                    case ev4a:
                        y4_fvz = ev4a, j$3n['closed'] = !0x0;
                    case el$txgi:
                    case eva_47f:
                    case ensj3u:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return ampec['error']('unexpected end of input'), y4_fvz == ethzr && j$3n['setTagName'](yf4vr['slice'](zfyvr4, xi$jgt)), xi$jgt;
            case '>':
                switch (y4_fvz) {
                    case ethzr:
                        j$3n['setTagName'](yf4vr['slice'](zfyvr4, xi$jgt));
                    case eunq3j:
                    case ex$htg:
                    case ev4a:
                        break;
                    case el$txgi:
                    case eva_47f:
                        l$igxt = yf4vr['slice'](zfyvr4, xi$jgt), '/' === l$igxt['slice'](-0x1) && (j$3n['closed'] = !0x0, l$igxt = l$igxt['slice'](0x0, -0x1));
                    case ensj3u:
                        y4_fvz === ensj3u && (l$igxt = oca7mp), y4_fvz == el$txgi ? (ampec['warning']('attribute "' + l$igxt + '" missed quot(")!!'), j$3n['add'](oca7mp, l$igxt['replace'](/&#?\w+;/g, k9nsu6), zfyvr4)) : ('http://www.w3.org/1999/xhtml' === rhfvzy[''] && l$igxt['match'](/^(?:disabled|checked|selected)$/i) || ampec['warning']('attribute "' + l$igxt + '" missed value!! "' + l$igxt + '" instead!!'), j$3n['add'](l$igxt, l$igxt, zfyvr4));
                        break;
                    case e$ixtjg:
                        throw new Error('attribute value missed!!');
                }
                return xi$jgt;
            case '\u0080':
                d5b8w0 = '\x20';
            default:
                if ('\x20' >= d5b8w0) switch (y4_fvz) {
                    case ethzr:
                        j$3n['setTagName'](yf4vr['slice'](zfyvr4, xi$jgt)), y4_fvz = ex$htg;
                        break;
                    case eva_47f:
                        oca7mp = yf4vr['slice'](zfyvr4, xi$jgt), y4_fvz = ensj3u;
                        break;
                    case el$txgi:
                        var l$igxt = yf4vr['slice'](zfyvr4, xi$jgt)['replace'](/&#?\w+;/g, k9nsu6);
                        ampec['warning']('attribute "' + l$igxt + '" missed quot(")!!'), j$3n['add'](oca7mp, l$igxt, zfyvr4);
                    case eunq3j:
                        y4_fvz = ex$htg;
                } else switch (y4_fvz) {
                    case ensj3u:
                        {
                            j$3n['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === rhfvzy[''] && oca7mp['match'](/^(?:disabled|checked|selected)$/i) || ampec['warning']('attribute "' + oca7mp + '" missed value!! "' + oca7mp + '" instead2!!'), j$3n['add'](oca7mp, oca7mp, zfyvr4), zfyvr4 = xi$jgt, y4_fvz = eva_47f;
                        break;
                    case eunq3j:
                        ampec['warning']('attribute space is required"' + oca7mp + '\x22!!');
                    case ex$htg:
                        y4_fvz = eva_47f, zfyvr4 = xi$jgt;
                        break;
                    case e$ixtjg:
                        y4_fvz = el$txgi, zfyvr4 = xi$jgt;
                        break;
                    case ev4a:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        xi$jgt++;
    }
}
function eampeoc(d6k9b, njiu3q, c7apmo) {
    for (var b9sk = d6k9b['tagName'], mac4_7 = null, ompeca = d6k9b['length']; ompeca--;) {
        var tzyl = d6k9b[ompeca],
            vfrhz = tzyl['qName'],
            d0w8 = tzyl['value'],
            d5k6b0 = vfrhz['indexOf'](':');
        if (d5k6b0 > 0x0) var y4v_ = tzyl['prefix'] = vfrhz['slice'](0x0, d5k6b0),
            b58d0w = vfrhz['slice'](d5k6b0 + 0x1),
            jt$g = 'xmlns' === y4v_ && b58d0w;else b58d0w = vfrhz, y4v_ = null, jt$g = 'xmlns' === vfrhz && '';
        tzyl['localName'] = b58d0w, jt$g !== !0x1 && (null == mac4_7 && (mac4_7 = {}, eo7pmac(c7apmo, c7apmo = {})), c7apmo[jt$g] = mac4_7[jt$g] = d0w8, tzyl['uri'] = 'http://www.w3.org/2000/xmlns/', njiu3q['startPrefixMapping'](jt$g, d0w8));
    }
    for (var ompeca = d6k9b['length']; ompeca--;) {
        tzyl = d6k9b[ompeca];
        var y4v_ = tzyl['prefix'];
        y4v_ && ('xml' === y4v_ && (tzyl['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== y4v_ && (tzyl['uri'] = c7apmo[y4v_ || '']));
    }
    var d5k6b0 = b9sk['indexOf'](':');
    d5k6b0 > 0x0 ? (y4v_ = d6k9b['prefix'] = b9sk['slice'](0x0, d5k6b0), b58d0w = d6k9b['localName'] = b9sk['slice'](d5k6b0 + 0x1)) : (y4v_ = null, b58d0w = d6k9b['localName'] = b9sk);
    var $jq3n = d6k9b['uri'] = c7apmo[y4v_ || ''];
    if (njiu3q['startElement']($jq3n, b58d0w, b9sk, d6k9b), !d6k9b['closed']) return d6k9b['currentNSMap'] = c7apmo, d6k9b['localNSMap'] = mac4_7, !0x0;
    if (njiu3q['endElement']($jq3n, b58d0w, b9sk), mac4_7) {
        for (y4v_ in mac4_7) njiu3q['endPrefixMapping'](y4v_);
    }
}
function eoapmec(hrtlgz, i3qujn, zv_y, kuq9sn, jnus) {
    if (/^(?:script|textarea)$/i['test'](zv_y)) {
        var tlx = hrtlgz['indexOf']('</' + zv_y + '>', i3qujn),
            xgj$it = hrtlgz['substring'](i3qujn + 0x1, tlx);
        if (/[&<]/['test'](xgj$it)) return (/^script$/i['test'](zv_y) ? (jnus['characters'](xgj$it, 0x0, xgj$it['length']), tlx) : (xgj$it = xgj$it['replace'](/&#?\w+;/g, kuq9sn), jnus['characters'](xgj$it, 0x0, xgj$it['length']), tlx)
        );
    }
    return i3qujn + 0x1;
}
function egzhrt(_c7a, j3squ, zlhrf, xhltr) {
    var mac4 = xhltr[zlhrf];
    return null == mac4 && (mac4 = _c7a['lastIndexOf']('</' + zlhrf + '>'), j3squ > mac4 && (mac4 = _c7a['lastIndexOf']('</' + zlhrf)), xhltr[zlhrf] = mac4), j3squ > mac4;
}
function eo7pmac(iqun3j, rgtlx) {
    for (var d0285 in iqun3j) rgtlx[d0285] = iqun3j[d0285];
}
function epcea(s09k6, vyf4z, iqnju3, rgthzl) {
    var rzvhf = s09k6['charAt'](vyf4z + 0x2);
    switch (rzvhf) {
        case '-':
            if ('-' === s09k6['charAt'](vyf4z + 0x3)) {
                var epamc = s09k6['indexOf']('-->', vyf4z + 0x4);
                return epamc > vyf4z ? (iqnju3['comment'](s09k6, vyf4z + 0x4, epamc - vyf4z - 0x4), epamc + 0x3) : (rgthzl['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == s09k6['substr'](vyf4z + 0x3, 0x6)) {
                var epamc = s09k6['indexOf'](']]>', vyf4z + 0x9);
                return iqnju3['startCDATA'](), iqnju3['characters'](s09k6, vyf4z + 0x9, epamc - vyf4z - 0x9), iqnju3['endCDATA'](), epamc + 0x3;
            }
            var t$j = eyv4frz(s09k6, vyf4z),
                $ilxtg = t$j['length'];
            if ($ilxtg > 0x1 && /!doctype/i['test'](t$j[0x0][0x0])) {
                var yvf47 = t$j[0x1][0x0],
                    c7oa_ = $ilxtg > 0x3 && /^public$/i['test'](t$j[0x2][0x0]) && t$j[0x3][0x0],
                    y_4fz = $ilxtg > 0x4 && t$j[0x4][0x0],
                    qkus9n = t$j[$ilxtg - 0x1];
                return iqnju3['startDTD'](yvf47, c7oa_ && c7oa_['replace'](/^(['"])(.*?)\1$/, '$2'), y_4fz && y_4fz['replace'](/^(['"])(.*?)\1$/, '$2')), iqnju3['endDTD'](), qkus9n['index'] + qkus9n[0x0]['length'];
            }
    }
    return -0x1;
}
function eyrlzhf(rhxlgt, cma7_4, jtx$ig) {
    var lyhtzr = rhxlgt['indexOf']('?>', cma7_4);
    if (lyhtzr) {
        var ukb69s = rhxlgt['substring'](cma7_4, lyhtzr)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (ukb69s) {
            {
                ukb69s[0x0]['length'];
            }
            return jtx$ig['processingInstruction'](ukb69s[0x1], ukb69s[0x2]), lyhtzr + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function ecmaope() {}
function elhrgtz(yrhztl, f_v7y4) {
    return yrhztl['__proto__'] = f_v7y4, yrhztl;
}
function eyv4frz(nqsj3u, qjni$3) {
    var frzhl,
        vyfz_ = [],
        qusnj = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (qusnj['lastIndex'] = qjni$3, qusnj['exec'](nqsj3u); frzhl = qusnj['exec'](nqsj3u);) if (vyfz_['push'](frzhl), frzhl[0x1]) return vyfz_;
}
var eus6 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    ebs9uk6 = new RegExp('[\\-\\.0-9' + eus6['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    erlyt = new RegExp('^' + eus6['source'] + ebs9uk6['source'] + '*(?::' + eus6['source'] + ebs9uk6['source'] + '*)?$'),
    ethzr = 0x0,
    eva_47f = 0x1,
    ensj3u = 0x2,
    e$ixtjg = 0x3,
    el$txgi = 0x4,
    eunq3j = 0x5,
    ex$htg = 0x6,
    ev4a = 0x7;
e$nqij['prototype'] = {
    'parse': function (ltzr, yfhzl, q$x) {
        var vfrzhy = this['domBuilder'];
        vfrzhy['startDocument'](), eo7pmac(yfhzl, yfhzl = {}), em7_4(ltzr, yfhzl, q$x, vfrzhy, this['errorHandler']), vfrzhy['endDocument']();
    }
}, ecmaope['prototype'] = {
    'setTagName': function (poamec) {
        if (!erlyt['test'](poamec)) throw new Error('invalid tagName:' + poamec);
        this['tagName'] = poamec;
    },
    'add': function (suq3jn, l$gixt, ltxig) {
        if (!erlyt['test'](suq3jn)) throw new Error('invalid attribute:' + suq3jn);
        this[this['length']++] = {
            'qName': suq3jn,
            'value': l$gixt,
            'offset': ltxig
        };
    },
    'length': 0x0,
    'getLocalName': function (yzfhrv) {
        return this[yzfhrv]['localName'];
    },
    'getLocator': function (jnqi3$) {
        return this[jnqi3$]['locator'];
    },
    'getQName': function (yvhzfr) {
        return this[yvhzfr]['qName'];
    },
    'getURI': function (quks9n) {
        return this[quks9n]['uri'];
    },
    'getValue': function (fy4vzr) {
        return this[fy4vzr]['value'];
    }
}, elhrgtz({}, elhrgtz['prototype']) instanceof elhrgtz || (elhrgtz = function (aocpm7, _m47a) {
    function ij$tgx() {}
    ij$tgx['prototype'] = _m47a, ij$tgx = new ij$tgx();
    for (_m47a in aocpm7) ij$tgx[_m47a] = aocpm7[_m47a];
    return ij$tgx;
}), exports['XMLReader'] = e$nqij;