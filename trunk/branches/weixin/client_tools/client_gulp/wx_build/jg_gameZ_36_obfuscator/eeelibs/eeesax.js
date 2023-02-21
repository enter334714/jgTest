var b = wx.$e;
function e$qxji() {}
function eb0d85w(bd56k0, meaocp, itj$g, a7_cm, zfy4r) {
    function k0b6s9(gzrthl) {
        if (gzrthl > 0xffff) {
            gzrthl -= 0x10000;
            var b0k5 = 0xd800 + (gzrthl >> 0xa),
                iq$j3n = 0xdc00 + (0x3ff & gzrthl);
            return String['fromCharCode'](b0k5, iq$j3n);
        }
        return String['fromCharCode'](gzrthl);
    }
    function ca4m_7(un3s9) {
        var njqu3s = un3s9['slice'](0x1, -0x1);
        return njqu3s in itj$g ? itj$g[njqu3s] : '#' === njqu3s['charAt'](0x0) ? k0b6s9(parseInt(njqu3s['substr'](0x1)['replace']('x', '0x'))) : (zfy4r['error']('entity not found:' + un3s9), un3s9);
    }
    function _a74vf(am7c_o) {
        if (am7c_o > tzrg) {
            var dw580b = bd56k0['substring'](tzrg, am7c_o)['replace'](/&#?\w+;/g, ca4m_7);
            hflz && _a7v4(tzrg), a7_cm['characters'](dw580b, 0x0, am7c_o - tzrg), tzrg = am7c_o;
        }
    }
    function _a7v4(f74yv_, qusk9n) {
        for (; f74yv_ >= sk9n6 && (qusk9n = fvy74_['exec'](bd56k0));) d5218w = qusk9n['index'], sk9n6 = d5218w + qusk9n[0x0]['length'], hflz['lineNumber']++;
        hflz['columnNumber'] = f74yv_ - d5218w + 0x1;
    }
    for (var d5218w = 0x0, sk9n6 = 0x0, fvy74_ = /.*(?:\r\n?|\n)|.*$/g, hflz = a7_cm['locator'], kuqsn = [{ 'currentNSMap': meaocp }], ixg = {}, tzrg = 0x0;;) {
        try {
            var thxglr = bd56k0['indexOf']('<', tzrg);
            if (0x0 > thxglr) {
                if (!bd56k0['substr'](tzrg)['match'](/^\s*$/)) {
                    var i$n3jq = a7_cm['doc'],
                        emcpoa = i$n3jq['createTextNode'](bd56k0['substr'](tzrg));
                    i$n3jq['appendChild'](emcpoa), a7_cm['currentElement'] = emcpoa;
                }
                return;
            }
            switch (thxglr > tzrg && _a74vf(thxglr), bd56k0['charAt'](thxglr + 0x1)) {
                case '/':
                    var $xitlg = bd56k0['indexOf']('>', thxglr + 0x3),
                        tgjxi$ = bd56k0['substring'](thxglr + 0x2, $xitlg),
                        w2d05 = kuqsn['pop']();
                    0x0 > $xitlg ? (tgjxi$ = bd56k0['substring'](thxglr + 0x2)['replace'](/[\s<].*/, ''), zfy4r['error']('end tag name: ' + tgjxi$ + ' is not complete:' + w2d05['tagName']), $xitlg = thxglr + 0x1 + tgjxi$['length']) : tgjxi$['match'](/\s</) && (tgjxi$ = tgjxi$['replace'](/[\s<].*/, ''), zfy4r['error']('end tag name: ' + tgjxi$ + ' maybe not complete'), $xitlg = thxglr + 0x1 + tgjxi$['length']);
                    var aecom = w2d05['localNSMap'],
                        c7a_m4 = w2d05['tagName'] == tgjxi$,
                        m_74va = c7a_m4 || w2d05['tagName'] && w2d05['tagName']['toLowerCase']() == tgjxi$['toLowerCase']();
                    if (m_74va) {
                        if (a7_cm['endElement'](w2d05['uri'], w2d05['localName'], tgjxi$), aecom) {
                            for (var yv74_f in aecom) a7_cm['endPrefixMapping'](yv74_f);
                        }
                        c7a_m4 || zfy4r['fatalError']('end tag name: ' + tgjxi$ + ' is not match the current start tagName:' + w2d05['tagName']);
                    } else kuqsn['push'](w2d05);
                    $xitlg++;
                    break;
                case '?':
                    hflz && _a7v4(thxglr), $xitlg = ecaoem(bd56k0, thxglr, a7_cm);
                    break;
                case '!':
                    hflz && _a7v4(thxglr), $xitlg = eiglt$x(bd56k0, thxglr, a7_cm, zfy4r);
                    break;
                default:
                    hflz && _a7v4(thxglr);
                    var d8w251 = new enuq9k(),
                        $ig3xj = kuqsn[kuqsn['length'] - 0x1]['currentNSMap'],
                        $xitlg = elrtyhz(bd56k0, thxglr, d8w251, $ig3xj, ca4m_7, zfy4r),
                        xjt$i = d8w251['length'];
                    if (!d8w251['closed'] && ecmao(bd56k0, $xitlg, d8w251['tagName'], ixg) && (d8w251['closed'] = !0x0, itj$g['nbsp'] || zfy4r['warning']('unclosed xml attribute')), hflz && xjt$i) {
                        for (var squnj = eqiun3j(hflz, {}), f_vzy = 0x0; xjt$i > f_vzy; f_vzy++) {
                            var zy4vr = d8w251[f_vzy];
                            _a7v4(zy4vr['offset']), zy4vr['locator'] = eqiun3j(hflz, {});
                        }
                        a7_cm['locator'] = squnj, es9n6uk(d8w251, a7_cm, $ig3xj) && kuqsn['push'](d8w251), a7_cm['locator'] = hflz;
                    } else es9n6uk(d8w251, a7_cm, $ig3xj) && kuqsn['push'](d8w251);
                    'http://www.w3.org/1999/xhtml' !== d8w251['uri'] || d8w251['closed'] ? $xitlg++ : $xitlg = egh$xtl(bd56k0, $xitlg, d8w251['tagName'], ca4m_7, a7_cm);
            }
        } catch (x3q$ji) {
            zfy4r['error']('element parse error: ' + x3q$ji), $xitlg = -0x1;
        }
        $xitlg > tzrg ? tzrg = $xitlg : _a74vf(Math['max'](thxglr, tzrg) + 0x1);
    }
}
function eqiun3j(m7a_oc, trxlg) {
    return trxlg['lineNumber'] = m7a_oc['lineNumber'], trxlg['columnNumber'] = m7a_oc['columnNumber'], trxlg;
}
function elrtyhz(hglzr, _coam7, w5b08, ryzvf4, _fvy74, gjxi$t) {
    for (var j3sqn, yz_fv4, tlry = ++_coam7, ocpme = ewd1;;) {
        var yf_4 = hglzr['charAt'](tlry);
        switch (yf_4) {
            case '=':
                if (ocpme === eth$lg) j3sqn = hglzr['slice'](_coam7, tlry), ocpme = egij;else {
                    if (ocpme !== ey4zf) throw new Error('attribute equal must after attrName');
                    ocpme = egij;
                }
                break;
            case '\x27':
            case '\x22':
                if (ocpme === egij || ocpme === eth$lg) {
                    if (ocpme === eth$lg && (gjxi$t['warning']('attribute value must after "="'), j3sqn = hglzr['slice'](_coam7, tlry)), _coam7 = tlry + 0x1, tlry = hglzr['indexOf'](yf_4, _coam7), !(tlry > 0x0)) throw new Error('attribute value no end \'' + yf_4 + '\' match');
                    yz_fv4 = hglzr['slice'](_coam7, tlry)['replace'](/&#?\w+;/g, _fvy74), w5b08['add'](j3sqn, yz_fv4, _coam7 - 0x1), ocpme = e_vf74;
                } else {
                    if (ocpme != equ3nsj) throw new Error('attribute value must after "="');
                    yz_fv4 = hglzr['slice'](_coam7, tlry)['replace'](/&#?\w+;/g, _fvy74), w5b08['add'](j3sqn, yz_fv4, _coam7), gjxi$t['warning']('attribute "' + j3sqn + '" missed start quot(' + yf_4 + ')!!'), _coam7 = tlry + 0x1, ocpme = e_vf74;
                }
                break;
            case '/':
                switch (ocpme) {
                    case ewd1:
                        w5b08['setTagName'](hglzr['slice'](_coam7, tlry));
                    case e_vf74:
                    case ek096bs:
                    case eijx3q:
                        ocpme = eijx3q, w5b08['closed'] = !0x0;
                    case equ3nsj:
                    case eth$lg:
                    case ey4zf:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return gjxi$t['error']('unexpected end of input'), ocpme == ewd1 && w5b08['setTagName'](hglzr['slice'](_coam7, tlry)), tlry;
            case '>':
                switch (ocpme) {
                    case ewd1:
                        w5b08['setTagName'](hglzr['slice'](_coam7, tlry));
                    case e_vf74:
                    case ek096bs:
                    case eijx3q:
                        break;
                    case equ3nsj:
                    case eth$lg:
                        yz_fv4 = hglzr['slice'](_coam7, tlry), '/' === yz_fv4['slice'](-0x1) && (w5b08['closed'] = !0x0, yz_fv4 = yz_fv4['slice'](0x0, -0x1));
                    case ey4zf:
                        ocpme === ey4zf && (yz_fv4 = j3sqn), ocpme == equ3nsj ? (gjxi$t['warning']('attribute "' + yz_fv4 + '" missed quot(")!!'), w5b08['add'](j3sqn, yz_fv4['replace'](/&#?\w+;/g, _fvy74), _coam7)) : ('http://www.w3.org/1999/xhtml' === ryzvf4[''] && yz_fv4['match'](/^(?:disabled|checked|selected)$/i) || gjxi$t['warning']('attribute "' + yz_fv4 + '" missed value!! "' + yz_fv4 + '" instead!!'), w5b08['add'](yz_fv4, yz_fv4, _coam7));
                        break;
                    case egij:
                        throw new Error('attribute value missed!!');
                }
                return tlry;
            case '\u0080':
                yf_4 = '\x20';
            default:
                if ('\x20' >= yf_4) switch (ocpme) {
                    case ewd1:
                        w5b08['setTagName'](hglzr['slice'](_coam7, tlry)), ocpme = ek096bs;
                        break;
                    case eth$lg:
                        j3sqn = hglzr['slice'](_coam7, tlry), ocpme = ey4zf;
                        break;
                    case equ3nsj:
                        var yz_fv4 = hglzr['slice'](_coam7, tlry)['replace'](/&#?\w+;/g, _fvy74);
                        gjxi$t['warning']('attribute "' + yz_fv4 + '" missed quot(")!!'), w5b08['add'](j3sqn, yz_fv4, _coam7);
                    case e_vf74:
                        ocpme = ek096bs;
                } else switch (ocpme) {
                    case ey4zf:
                        {
                            w5b08['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === ryzvf4[''] && j3sqn['match'](/^(?:disabled|checked|selected)$/i) || gjxi$t['warning']('attribute "' + j3sqn + '" missed value!! "' + j3sqn + '" instead2!!'), w5b08['add'](j3sqn, j3sqn, _coam7), _coam7 = tlry, ocpme = eth$lg;
                        break;
                    case e_vf74:
                        gjxi$t['warning']('attribute space is required"' + j3sqn + '\x22!!');
                    case ek096bs:
                        ocpme = eth$lg, _coam7 = tlry;
                        break;
                    case egij:
                        ocpme = equ3nsj, _coam7 = tlry;
                        break;
                    case eijx3q:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        tlry++;
    }
}
function es9n6uk(t$xgij, yzhvfr, tgrxh) {
    for (var glit$ = t$xgij['tagName'], j3nuqs = null, j3usq = t$xgij['length']; j3usq--;) {
        var pomeac = t$xgij[j3usq],
            uksqn9 = pomeac['qName'],
            rhtgx = pomeac['value'],
            xgtl$h = uksqn9['indexOf'](':');
        if (xgtl$h > 0x0) var b85d06 = pomeac['prefix'] = uksqn9['slice'](0x0, xgtl$h),
            _avm74 = uksqn9['slice'](xgtl$h + 0x1),
            a_co = 'xmlns' === b85d06 && _avm74;else _avm74 = uksqn9, b85d06 = null, a_co = 'xmlns' === uksqn9 && '';
        pomeac['localName'] = _avm74, a_co !== !0x1 && (null == j3nuqs && (j3nuqs = {}, ec74am_(tgrxh, tgrxh = {})), tgrxh[a_co] = j3nuqs[a_co] = rhtgx, pomeac['uri'] = 'http://www.w3.org/2000/xmlns/', yzhvfr['startPrefixMapping'](a_co, rhtgx));
    }
    for (var j3usq = t$xgij['length']; j3usq--;) {
        pomeac = t$xgij[j3usq];
        var b85d06 = pomeac['prefix'];
        b85d06 && ('xml' === b85d06 && (pomeac['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== b85d06 && (pomeac['uri'] = tgrxh[b85d06 || '']));
    }
    var xgtl$h = glit$['indexOf'](':');
    xgtl$h > 0x0 ? (b85d06 = t$xgij['prefix'] = glit$['slice'](0x0, xgtl$h), _avm74 = t$xgij['localName'] = glit$['slice'](xgtl$h + 0x1)) : (b85d06 = null, _avm74 = t$xgij['localName'] = glit$);
    var $x3j = t$xgij['uri'] = tgrxh[b85d06 || ''];
    if (yzhvfr['startElement']($x3j, _avm74, glit$, t$xgij), !t$xgij['closed']) return t$xgij['currentNSMap'] = tgrxh, t$xgij['localNSMap'] = j3nuqs, !0x0;
    if (yzhvfr['endElement']($x3j, _avm74, glit$), j3nuqs) {
        for (b85d06 in j3nuqs) yzhvfr['endPrefixMapping'](b85d06);
    }
}
function egh$xtl(g$xi3, rvzhy, hvzfry, a_oc7, rtzlhy) {
    if (/^(?:script|textarea)$/i['test'](hvzfry)) {
        var yzv_ = g$xi3['indexOf']('</' + hvzfry + '>', rvzhy),
            lgtx$h = g$xi3['substring'](rvzhy + 0x1, yzv_);
        if (/[&<]/['test'](lgtx$h)) return (/^script$/i['test'](hvzfry) ? (rtzlhy['characters'](lgtx$h, 0x0, lgtx$h['length']), yzv_) : (lgtx$h = lgtx$h['replace'](/&#?\w+;/g, a_oc7), rtzlhy['characters'](lgtx$h, 0x0, lgtx$h['length']), yzv_)
        );
    }
    return rvzhy + 0x1;
}
function ecmao(hfylz, lgxrht, vaf4_7, ryzhlf) {
    var yfzl = ryzhlf[vaf4_7];
    return null == yfzl && (yfzl = hfylz['lastIndexOf']('</' + vaf4_7 + '>'), lgxrht > yfzl && (yfzl = hfylz['lastIndexOf']('</' + vaf4_7)), ryzhlf[vaf4_7] = yfzl), lgxrht > yfzl;
}
function ec74am_(ks69un, usk69) {
    for (var z4_yfv in ks69un) usk69[z4_yfv] = ks69un[z4_yfv];
}
function eiglt$x(gt$hx, fa74v, s06kb, hytlr) {
    var s6buk9 = gt$hx['charAt'](fa74v + 0x2);
    switch (s6buk9) {
        case '-':
            if ('-' === gt$hx['charAt'](fa74v + 0x3)) {
                var xtjg$i = gt$hx['indexOf']('-->', fa74v + 0x4);
                return xtjg$i > fa74v ? (s06kb['comment'](gt$hx, fa74v + 0x4, xtjg$i - fa74v - 0x4), xtjg$i + 0x3) : (hytlr['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == gt$hx['substr'](fa74v + 0x3, 0x6)) {
                var xtjg$i = gt$hx['indexOf'](']]>', fa74v + 0x9);
                return s06kb['startCDATA'](), s06kb['characters'](gt$hx, fa74v + 0x9, xtjg$i - fa74v - 0x9), s06kb['endCDATA'](), xtjg$i + 0x3;
            }
            var epacmo = ebk069(gt$hx, fa74v),
                htgxl$ = epacmo['length'];
            if (htgxl$ > 0x1 && /!doctype/i['test'](epacmo[0x0][0x0])) {
                var jq3n$i = epacmo[0x1][0x0],
                    qsju3n = htgxl$ > 0x3 && /^public$/i['test'](epacmo[0x2][0x0]) && epacmo[0x3][0x0],
                    lhgt = htgxl$ > 0x4 && epacmo[0x4][0x0],
                    ns93qu = epacmo[htgxl$ - 0x1];
                return s06kb['startDTD'](jq3n$i, qsju3n && qsju3n['replace'](/^(['"])(.*?)\1$/, '$2'), lhgt && lhgt['replace'](/^(['"])(.*?)\1$/, '$2')), s06kb['endDTD'](), ns93qu['index'] + ns93qu[0x0]['length'];
            }
    }
    return -0x1;
}
function ecaoem(iqn$, txrlgh, squj3n) {
    var mv7a_ = iqn$['indexOf']('?>', txrlgh);
    if (mv7a_) {
        var bwd85 = iqn$['substring'](txrlgh, mv7a_)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (bwd85) {
            {
                bwd85[0x0]['length'];
            }
            return squj3n['processingInstruction'](bwd85[0x1], bwd85[0x2]), mv7a_ + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function enuq9k() {}
function eyz4rfv(emcpao, v_a74m) {
    return emcpao['__proto__'] = v_a74m, emcpao;
}
function ebk069(j3gi$x, u3jqns) {
    var hyflz,
        jqusn = [],
        in3$qj = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (in3$qj['lastIndex'] = u3jqns, in3$qj['exec'](j3gi$x); hyflz = in3$qj['exec'](j3gi$x);) if (jqusn['push'](hyflz), hyflz[0x1]) return jqusn;
}
var efvrhy = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    ehyrvzf = new RegExp('[\\-\\.0-9' + efvrhy['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    eacp7mo = new RegExp('^' + efvrhy['source'] + ehyrvzf['source'] + '*(?::' + efvrhy['source'] + ehyrvzf['source'] + '*)?$'),
    ewd1 = 0x0,
    eth$lg = 0x1,
    ey4zf = 0x2,
    egij = 0x3,
    equ3nsj = 0x4,
    e_vf74 = 0x5,
    ek096bs = 0x6,
    eijx3q = 0x7;
e$qxji['prototype'] = {
    'parse': function (apemco, hztglr, k6s09) {
        var _4vam = this['domBuilder'];
        _4vam['startDocument'](), ec74am_(hztglr, hztglr = {}), eb0d85w(apemco, hztglr, k6s09, _4vam, this['errorHandler']), _4vam['endDocument']();
    }
}, enuq9k['prototype'] = {
    'setTagName': function (juqsn) {
        if (!eacp7mo['test'](juqsn)) throw new Error('invalid tagName:' + juqsn);
        this['tagName'] = juqsn;
    },
    'add': function (ocmp7a, acmo_, _7co) {
        if (!eacp7mo['test'](ocmp7a)) throw new Error('invalid attribute:' + ocmp7a);
        this[this['length']++] = {
            'qName': ocmp7a,
            'value': acmo_,
            'offset': _7co
        };
    },
    'length': 0x0,
    'getLocalName': function (pmoeca) {
        return this[pmoeca]['localName'];
    },
    'getLocator': function (ltrx) {
        return this[ltrx]['locator'];
    },
    'getQName': function (_4vf7y) {
        return this[_4vf7y]['qName'];
    },
    'getURI': function ($3qxj) {
        return this[$3qxj]['uri'];
    },
    'getValue': function (v_yf47) {
        return this[v_yf47]['value'];
    }
}, eyz4rfv({}, eyz4rfv['prototype']) instanceof eyz4rfv || (eyz4rfv = function (ji3$gx, ujniq3) {
    function jx$ti() {}
    jx$ti['prototype'] = ujniq3, jx$ti = new jx$ti();
    for (ujniq3 in ji3$gx) jx$ti[ujniq3] = ji3$gx[ujniq3];
    return jx$ti;
}), exports['XMLReader'] = e$qxji;