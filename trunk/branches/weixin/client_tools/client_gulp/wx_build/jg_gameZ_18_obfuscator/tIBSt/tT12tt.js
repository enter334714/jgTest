var v = wx.$d;
function zvm6$j() {}
function zxjvm6p(m$6vx, bne0, x7f9_, xv9j$, y3hlu) {
    function qo2d8(m06p) {
        if (m06p > 0xffff) {
            m06p -= 0x10000;
            var d4qc28 = 0xd800 + (m06p >> 0xa),
                utly = 0xdc00 + (0x3ff & m06p);
            return String['fromCharCode'](d4qc28, utly);
        }
        return String['fromCharCode'](m06p);
    }
    function pm6va0(eibng0) {
        var y1rztk = eibng0['slice'](0x1, -0x1);
        return y1rztk in x7f9_ ? x7f9_[y1rztk] : '#' === y1rztk['charAt'](0x0) ? qo2d8(parseInt(y1rztk['substr'](0x1)['replace']('x', '0x'))) : (y3hlu['error']('entity not found:' + eibng0), eibng0);
    }
    function jx$97v($6xmj) {
        if ($6xmj > lhyutk) {
            var a0bne = m$6vx['substring'](lhyutk, $6xmj)['replace'](/&#?\w+;/g, pm6va0);
            cq82ow && _rfz(lhyutk), xv9j$['characters'](a0bne, 0x0, $6xmj - lhyutk), lhyutk = $6xmj;
        }
    }
    function _rfz(gea, a0gneb) {
        for (; gea >= lrktyu && (a0gneb = j6$vx9['exec'](m$6vx));) y5z1r = a0gneb['index'], lrktyu = y5z1r + a0gneb[0x0]['length'], cq82ow['lineNumber']++;
        cq82ow['columnNumber'] = gea - y5z1r + 0x1;
    }
    for (var y5z1r = 0x0, lrktyu = 0x0, j6$vx9 = /.*(?:\r\n?|\n)|.*$/g, cq82ow = xv9j$['locator'], ry15z = [{ 'currentNSMap': bne0 }], mxvj = {}, lhyutk = 0x0;;) {
        try {
            var ganpb = m$6vx['indexOf']('<', lhyutk);
            if (0x0 > ganpb) {
                if (!m$6vx['substr'](lhyutk)['match'](/^\s*$/)) {
                    var p6nam0 = xv9j$['doc'],
                        _j$9 = p6nam0['createTextNode'](m$6vx['substr'](lhyutk));
                    p6nam0['appendChild'](_j$9), xv9j$['currentElement'] = _j$9;
                }
                return;
            }
            switch (ganpb > lhyutk && jx$97v(ganpb), m$6vx['charAt'](ganpb + 0x1)) {
                case '/':
                    var q2d8 = m$6vx['indexOf']('>', ganpb + 0x3),
                        _9f175 = m$6vx['substring'](ganpb + 0x2, q2d8),
                        $97fx_ = ry15z['pop']();
                    0x0 > q2d8 ? (_9f175 = m$6vx['substring'](ganpb + 0x2)['replace'](/[\s<].*/, ''), y3hlu['error']('end tag name: ' + _9f175 + ' is not complete:' + $97fx_['tagName']), q2d8 = ganpb + 0x1 + _9f175['length']) : _9f175['match'](/\s</) && (_9f175 = _9f175['replace'](/[\s<].*/, ''), y3hlu['error']('end tag name: ' + _9f175 + ' maybe not complete'), q2d8 = ganpb + 0x1 + _9f175['length']);
                    var zuyktr = $97fx_['localNSMap'],
                        ryt1z5 = $97fx_['tagName'] == _9f175,
                        tkzuy = ryt1z5 || $97fx_['tagName'] && $97fx_['tagName']['toLowerCase']() == _9f175['toLowerCase']();
                    if (tkzuy) {
                        if (xv9j$['endElement']($97fx_['uri'], $97fx_['localName'], _9f175), zuyktr) {
                            for (var d2h3 in zuyktr) xv9j$['endPrefixMapping'](d2h3);
                        }
                        ryt1z5 || y3hlu['fatalError']('end tag name: ' + _9f175 + ' is not match the current start tagName:' + $97fx_['tagName']);
                    } else ry15z['push']($97fx_);
                    q2d8++;
                    break;
                case '?':
                    cq82ow && _rfz(ganpb), q2d8 = zmj(m$6vx, ganpb, xv9j$);
                    break;
                case '!':
                    cq82ow && _rfz(ganpb), q2d8 = zc2843d(m$6vx, ganpb, xv9j$, y3hlu);
                    break;
                default:
                    cq82ow && _rfz(ganpb);
                    var d482cq = new zdluh(),
                        _j9x7$ = ry15z[ry15z['length'] - 0x1]['currentNSMap'],
                        q2d8 = zvjp6xm(m$6vx, ganpb, d482cq, _j9x7$, pm6va0, y3hlu),
                        x9_$7f = d482cq['length'];
                    if (!d482cq['closed'] && zocd82(m$6vx, q2d8, d482cq['tagName'], mxvj) && (d482cq['closed'] = !0x0, x7f9_['nbsp'] || y3hlu['warning']('unclosed xml attribute')), cq82ow && x9_$7f) {
                        for (var c8odq2 = zrktyl(cq82ow, {}), kuthl = 0x0; x9_$7f > kuthl; kuthl++) {
                            var x$97 = d482cq[kuthl];
                            _rfz(x$97['offset']), x$97['locator'] = zrktyl(cq82ow, {});
                        }
                        xv9j$['locator'] = c8odq2, zyzr51(d482cq, xv9j$, _j9x7$) && ry15z['push'](d482cq), xv9j$['locator'] = cq82ow;
                    } else zyzr51(d482cq, xv9j$, _j9x7$) && ry15z['push'](d482cq);
                    'http://www.w3.org/1999/xhtml' !== d482cq['uri'] || d482cq['closed'] ? q2d8++ : q2d8 = z$x79f_(m$6vx, q2d8, d482cq['tagName'], pm6va0, xv9j$);
            }
        } catch (h34d) {
            y3hlu['error']('element parse error: ' + h34d), q2d8 = -0x1;
        }
        q2d8 > lhyutk ? lhyutk = q2d8 : jx$97v(Math['max'](ganpb, lhyutk) + 0x1);
    }
}
function zrktyl(q28wo, ztf) {
    return ztf['lineNumber'] = q28wo['lineNumber'], ztf['columnNumber'] = q28wo['columnNumber'], ztf;
}
function zvjp6xm(kruy, q24d, cqdo, lud3h, l4ku, r1ytk) {
    for (var ytkhul, rz1_, kryltu = ++q24d, dlh83 = z$mjx6;;) {
        var rtzf5 = kruy['charAt'](kryltu);
        switch (rtzf5) {
            case '=':
                if (dlh83 === zav06) ytkhul = kruy['slice'](q24d, kryltu), dlh83 = zl3hku4;else {
                    if (dlh83 !== zh4) throw new Error('attribute equal must after attrName');
                    dlh83 = zl3hku4;
                }
                break;
            case '\x27':
            case '\x22':
                if (dlh83 === zl3hku4 || dlh83 === zav06) {
                    if (dlh83 === zav06 && (r1ytk['warning']('attribute value must after "="'), ytkhul = kruy['slice'](q24d, kryltu)), q24d = kryltu + 0x1, kryltu = kruy['indexOf'](rtzf5, q24d), !(kryltu > 0x0)) throw new Error('attribute value no end \'' + rtzf5 + '\' match');
                    rz1_ = kruy['slice'](q24d, kryltu)['replace'](/&#?\w+;/g, l4ku), cqdo['add'](ytkhul, rz1_, q24d - 0x1), dlh83 = zx7$9f;
                } else {
                    if (dlh83 != zeb0i) throw new Error('attribute value must after "="');
                    rz1_ = kruy['slice'](q24d, kryltu)['replace'](/&#?\w+;/g, l4ku), cqdo['add'](ytkhul, rz1_, q24d), r1ytk['warning']('attribute "' + ytkhul + '" missed start quot(' + rtzf5 + ')!!'), q24d = kryltu + 0x1, dlh83 = zx7$9f;
                }
                break;
            case '/':
                switch (dlh83) {
                    case z$mjx6:
                        cqdo['setTagName'](kruy['slice'](q24d, kryltu));
                    case zx7$9f:
                    case zajvm6:
                    case zylr:
                        dlh83 = zylr, cqdo['closed'] = !0x0;
                    case zeb0i:
                    case zav06:
                    case zh4:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return r1ytk['error']('unexpected end of input'), dlh83 == z$mjx6 && cqdo['setTagName'](kruy['slice'](q24d, kryltu)), kryltu;
            case '>':
                switch (dlh83) {
                    case z$mjx6:
                        cqdo['setTagName'](kruy['slice'](q24d, kryltu));
                    case zx7$9f:
                    case zajvm6:
                    case zylr:
                        break;
                    case zeb0i:
                    case zav06:
                        rz1_ = kruy['slice'](q24d, kryltu), '/' === rz1_['slice'](-0x1) && (cqdo['closed'] = !0x0, rz1_ = rz1_['slice'](0x0, -0x1));
                    case zh4:
                        dlh83 === zh4 && (rz1_ = ytkhul), dlh83 == zeb0i ? (r1ytk['warning']('attribute "' + rz1_ + '" missed quot(")!!'), cqdo['add'](ytkhul, rz1_['replace'](/&#?\w+;/g, l4ku), q24d)) : ('http://www.w3.org/1999/xhtml' === lud3h[''] && rz1_['match'](/^(?:disabled|checked|selected)$/i) || r1ytk['warning']('attribute "' + rz1_ + '" missed value!! "' + rz1_ + '" instead!!'), cqdo['add'](rz1_, rz1_, q24d));
                        break;
                    case zl3hku4:
                        throw new Error('attribute value missed!!');
                }
                return kryltu;
            case '\u0080':
                rtzf5 = '\x20';
            default:
                if ('\x20' >= rtzf5) switch (dlh83) {
                    case z$mjx6:
                        cqdo['setTagName'](kruy['slice'](q24d, kryltu)), dlh83 = zajvm6;
                        break;
                    case zav06:
                        ytkhul = kruy['slice'](q24d, kryltu), dlh83 = zh4;
                        break;
                    case zeb0i:
                        var rz1_ = kruy['slice'](q24d, kryltu)['replace'](/&#?\w+;/g, l4ku);
                        r1ytk['warning']('attribute "' + rz1_ + '" missed quot(")!!'), cqdo['add'](ytkhul, rz1_, q24d);
                    case zx7$9f:
                        dlh83 = zajvm6;
                } else switch (dlh83) {
                    case zh4:
                        {
                            cqdo['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === lud3h[''] && ytkhul['match'](/^(?:disabled|checked|selected)$/i) || r1ytk['warning']('attribute "' + ytkhul + '" missed value!! "' + ytkhul + '" instead2!!'), cqdo['add'](ytkhul, ytkhul, q24d), q24d = kryltu, dlh83 = zav06;
                        break;
                    case zx7$9f:
                        r1ytk['warning']('attribute space is required"' + ytkhul + '\x22!!');
                    case zajvm6:
                        dlh83 = zav06, q24d = kryltu;
                        break;
                    case zl3hku4:
                        dlh83 = zeb0i, q24d = kryltu;
                        break;
                    case zylr:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        kryltu++;
    }
}
function zyzr51(x$_7f9, x97j$, kyltru) {
    for (var xj7$9_ = x$_7f9['tagName'], utykh = null, d4h8l = x$_7f9['length']; d4h8l--;) {
        var hdl4 = x$_7f9[d4h8l],
            uhl4d = hdl4['qName'],
            hlyu3k = hdl4['value'],
            t1frz = uhl4d['indexOf'](':');
        if (t1frz > 0x0) var c4q2d = hdl4['prefix'] = uhl4d['slice'](0x0, t1frz),
            x97j_$ = uhl4d['slice'](t1frz + 0x1),
            apbnm0 = 'xmlns' === c4q2d && x97j_$;else x97j_$ = uhl4d, c4q2d = null, apbnm0 = 'xmlns' === uhl4d && '';
        hdl4['localName'] = x97j_$, apbnm0 !== !0x1 && (null == utykh && (utykh = {}, zdq8o(kyltru, kyltru = {})), kyltru[apbnm0] = utykh[apbnm0] = hlyu3k, hdl4['uri'] = 'http://www.w3.org/2000/xmlns/', x97j$['startPrefixMapping'](apbnm0, hlyu3k));
    }
    for (var d4h8l = x$_7f9['length']; d4h8l--;) {
        hdl4 = x$_7f9[d4h8l];
        var c4q2d = hdl4['prefix'];
        c4q2d && ('xml' === c4q2d && (hdl4['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== c4q2d && (hdl4['uri'] = kyltru[c4q2d || '']));
    }
    var t1frz = xj7$9_['indexOf'](':');
    t1frz > 0x0 ? (c4q2d = x$_7f9['prefix'] = xj7$9_['slice'](0x0, t1frz), x97j_$ = x$_7f9['localName'] = xj7$9_['slice'](t1frz + 0x1)) : (c4q2d = null, x97j_$ = x$_7f9['localName'] = xj7$9_);
    var f1_r5z = x$_7f9['uri'] = kyltru[c4q2d || ''];
    if (x97j$['startElement'](f1_r5z, x97j_$, xj7$9_, x$_7f9), !x$_7f9['closed']) return x$_7f9['currentNSMap'] = kyltru, x$_7f9['localNSMap'] = utykh, !0x0;
    if (x97j$['endElement'](f1_r5z, x97j_$, xj7$9_), utykh) {
        for (c4q2d in utykh) x97j$['endPrefixMapping'](c4q2d);
    }
}
function z$x79f_(ukyh3, bnie0, xj$9v, $_j9x, naeg0b) {
    if (/^(?:script|textarea)$/i['test'](xj$9v)) {
        var lhuy = ukyh3['indexOf']('</' + xj$9v + '>', bnie0),
            mp06an = ukyh3['substring'](bnie0 + 0x1, lhuy);
        if (/[&<]/['test'](mp06an)) return (/^script$/i['test'](xj$9v) ? (naeg0b['characters'](mp06an, 0x0, mp06an['length']), lhuy) : (mp06an = mp06an['replace'](/&#?\w+;/g, $_j9x), naeg0b['characters'](mp06an, 0x0, mp06an['length']), lhuy)
        );
    }
    return bnie0 + 0x1;
}
function zocd82(uy, uhlk34, u4d3, c8wo2q) {
    var uhdl = c8wo2q[u4d3];
    return null == uhdl && (uhdl = uy['lastIndexOf']('</' + u4d3 + '>'), uhlk34 > uhdl && (uhdl = uy['lastIndexOf']('</' + u4d3)), c8wo2q[u4d3] = uhdl), uhlk34 > uhdl;
}
function zdq8o(anp0m, $_79x) {
    for (var mx6vj$ in anp0m) $_79x[mx6vj$] = anp0m[mx6vj$];
}
function zc2843d(lrtuyk, lh83d4, zfr15t, j9v$6) {
    var _zf75 = lrtuyk['charAt'](lh83d4 + 0x2);
    switch (_zf75) {
        case '-':
            if ('-' === lrtuyk['charAt'](lh83d4 + 0x3)) {
                var yutrz = lrtuyk['indexOf']('-->', lh83d4 + 0x4);
                return yutrz > lh83d4 ? (zfr15t['comment'](lrtuyk, lh83d4 + 0x4, yutrz - lh83d4 - 0x4), yutrz + 0x3) : (j9v$6['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == lrtuyk['substr'](lh83d4 + 0x3, 0x6)) {
                var yutrz = lrtuyk['indexOf'](']]>', lh83d4 + 0x9);
                return zfr15t['startCDATA'](), zfr15t['characters'](lrtuyk, lh83d4 + 0x9, yutrz - lh83d4 - 0x9), zfr15t['endCDATA'](), yutrz + 0x3;
            }
            var tkz1y = zdc428(lrtuyk, lh83d4),
                d384l = tkz1y['length'];
            if (d384l > 0x1 && /!doctype/i['test'](tkz1y[0x0][0x0])) {
                var nma6 = tkz1y[0x1][0x0],
                    nmpa0 = d384l > 0x3 && /^public$/i['test'](tkz1y[0x2][0x0]) && tkz1y[0x3][0x0],
                    f$_59 = d384l > 0x4 && tkz1y[0x4][0x0],
                    kulr = tkz1y[d384l - 0x1];
                return zfr15t['startDTD'](nma6, nmpa0 && nmpa0['replace'](/^(['"])(.*?)\1$/, '$2'), f$_59 && f$_59['replace'](/^(['"])(.*?)\1$/, '$2')), zfr15t['endDTD'](), kulr['index'] + kulr[0x0]['length'];
            }
    }
    return -0x1;
}
function zmj($f_75, $759_, f_7$59) {
    var dc482 = $f_75['indexOf']('?>', $759_);
    if (dc482) {
        var x9f_$7 = $f_75['substring']($759_, dc482)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (x9f_$7) {
            {
                x9f_$7[0x0]['length'];
            }
            return f_7$59['processingInstruction'](x9f_$7[0x1], x9f_$7[0x2]), dc482 + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function zdluh() {}
function zdq8c2(h23d, ebg0a) {
    return h23d['__proto__'] = ebg0a, h23d;
}
function zdc428(f195_, hky3lu) {
    var abge0,
        h8d42 = [],
        k4lu3h = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (k4lu3h['lastIndex'] = hky3lu, k4lu3h['exec'](f195_); abge0 = k4lu3h['exec'](f195_);) if (h8d42['push'](abge0), abge0[0x1]) return h8d42;
}
var zn60pam = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    z_579$f = new RegExp('[\\-\\.0-9' + zn60pam['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    zna6pm = new RegExp('^' + zn60pam['source'] + z_579$f['source'] + '*(?::' + zn60pam['source'] + z_579$f['source'] + '*)?$'),
    z$mjx6 = 0x0,
    zav06 = 0x1,
    zh4 = 0x2,
    zl3hku4 = 0x3,
    zeb0i = 0x4,
    zx7$9f = 0x5,
    zajvm6 = 0x6,
    zylr = 0x7;
zvm6$j['prototype'] = {
    'parse': function (jv$69, gba0p, tyk1z) {
        var anp0mb = this['domBuilder'];
        anp0mb['startDocument'](), zdq8o(gba0p, gba0p = {}), zxjvm6p(jv$69, gba0p, tyk1z, anp0mb, this['errorHandler']), anp0mb['endDocument']();
    }
}, zdluh['prototype'] = {
    'setTagName': function (wo82cq) {
        if (!zna6pm['test'](wo82cq)) throw new Error('invalid tagName:' + wo82cq);
        this['tagName'] = wo82cq;
    },
    'add': function (co82qw, yh3kl, $6jvx9) {
        if (!zna6pm['test'](co82qw)) throw new Error('invalid attribute:' + co82qw);
        this[this['length']++] = {
            'qName': co82qw,
            'value': yh3kl,
            'offset': $6jvx9
        };
    },
    'length': 0x0,
    'getLocalName': function (cqo2d) {
        return this[cqo2d]['localName'];
    },
    'getLocator': function (c48d2q) {
        return this[c48d2q]['locator'];
    },
    'getQName': function (ltruk) {
        return this[ltruk]['qName'];
    },
    'getURI': function (enig0b) {
        return this[enig0b]['uri'];
    },
    'getValue': function (np6am) {
        return this[np6am]['value'];
    }
}, zdq8c2({}, zdq8c2['prototype']) instanceof zdq8c2 || (zdq8c2 = function (utkyhl, tryulk) {
    function j96$vx() {}
    j96$vx['prototype'] = tryulk, j96$vx = new j96$vx();
    for (tryulk in utkyhl) j96$vx[tryulk] = utkyhl[tryulk];
    return j96$vx;
}), exports['XMLReader'] = zvm6$j;