var b = wx.$e;
function epaoe() {}
function ei$xglt($gthxl, c_7mao, cp7mao, mv7a, tlhrg) {
    function va4_7m(cm74_a) {
        if (cm74_a > 0xffff) {
            cm74_a -= 0x10000;
            var nk96s = 0xd800 + (cm74_a >> 0xa),
                s9u3nq = 0xdc00 + (0x3ff & cm74_a);
            return String['fromCharCode'](nk96s, s9u3nq);
        }
        return String['fromCharCode'](cm74_a);
    }
    function k0bd96(subk) {
        var _4amc7 = subk['slice'](0x1, -0x1);
        return _4amc7 in cp7mao ? cp7mao[_4amc7] : '#' === _4amc7['charAt'](0x0) ? va4_7m(parseInt(_4amc7['substr'](0x1)['replace']('x', '0x'))) : (tlhrg['error']('entity not found:' + subk), subk);
    }
    function ytzh(wdb05) {
        if (wdb05 > jixtg) {
            var bk9su = $gthxl['substring'](jixtg, wdb05)['replace'](/&#?\w+;/g, k0bd96);
            wd5820 && gixtl$(jixtg), mv7a['characters'](bk9su, 0x0, wdb05 - jixtg), jixtg = wdb05;
        }
    }
    function gixtl$(d285, xlrgh) {
        for (; d285 >= yf_4zv && (xlrgh = fvyzr['exec']($gthxl));) zlhtgr = xlrgh['index'], yf_4zv = zlhtgr + xlrgh[0x0]['length'], wd5820['lineNumber']++;
        wd5820['columnNumber'] = d285 - zlhtgr + 0x1;
    }
    for (var zlhtgr = 0x0, yf_4zv = 0x0, fvyzr = /.*(?:\r\n?|\n)|.*$/g, wd5820 = mv7a['locator'], n39us = [{ 'currentNSMap': c_7mao }], $lxthg = {}, jixtg = 0x0;;) {
        try {
            var copmea = $gthxl['indexOf']('<', jixtg);
            if (0x0 > copmea) {
                if (!$gthxl['substr'](jixtg)['match'](/^\s*$/)) {
                    var yfz4_v = mv7a['doc'],
                        njui = yfz4_v['createTextNode']($gthxl['substr'](jixtg));
                    yfz4_v['appendChild'](njui), mv7a['currentElement'] = njui;
                }
                return;
            }
            switch (copmea > jixtg && ytzh(copmea), $gthxl['charAt'](copmea + 0x1)) {
                case '/':
                    var usj3 = $gthxl['indexOf']('>', copmea + 0x3),
                        d520w = $gthxl['substring'](copmea + 0x2, usj3),
                        u3snq = n39us['pop']();
                    0x0 > usj3 ? (d520w = $gthxl['substring'](copmea + 0x2)['replace'](/[\s<].*/, ''), tlhrg['error']('end tag name: ' + d520w + ' is not complete:' + u3snq['tagName']), usj3 = copmea + 0x1 + d520w['length']) : d520w['match'](/\s</) && (d520w = d520w['replace'](/[\s<].*/, ''), tlhrg['error']('end tag name: ' + d520w + ' maybe not complete'), usj3 = copmea + 0x1 + d520w['length']);
                    var q3snuj = u3snq['localNSMap'],
                        lh$t = u3snq['tagName'] == d520w,
                        aocpm7 = lh$t || u3snq['tagName'] && u3snq['tagName']['toLowerCase']() == d520w['toLowerCase']();
                    if (aocpm7) {
                        if (mv7a['endElement'](u3snq['uri'], u3snq['localName'], d520w), q3snuj) {
                            for (var sk9b6 in q3snuj) mv7a['endPrefixMapping'](sk9b6);
                        }
                        lh$t || tlhrg['fatalError']('end tag name: ' + d520w + ' is not match the current start tagName:' + u3snq['tagName']);
                    } else n39us['push'](u3snq);
                    usj3++;
                    break;
                case '?':
                    wd5820 && gixtl$(copmea), usj3 = ecma_47($gthxl, copmea, mv7a);
                    break;
                case '!':
                    wd5820 && gixtl$(copmea), usj3 = erfy4z($gthxl, copmea, mv7a, tlhrg);
                    break;
                default:
                    wd5820 && gixtl$(copmea);
                    var lyrf = new eyhtrzl(),
                        sn = n39us[n39us['length'] - 0x1]['currentNSMap'],
                        usj3 = eyhztrl($gthxl, copmea, lyrf, sn, k0bd96, tlhrg),
                        vf_z4 = lyrf['length'];
                    if (!lyrf['closed'] && e_mc7oa($gthxl, usj3, lyrf['tagName'], $lxthg) && (lyrf['closed'] = !0x0, cp7mao['nbsp'] || tlhrg['warning']('unclosed xml attribute')), wd5820 && vf_z4) {
                        for (var _4vfy7 = ehrglt(wd5820, {}), zylrht = 0x0; vf_z4 > zylrht; zylrht++) {
                            var hzryfl = lyrf[zylrht];
                            gixtl$(hzryfl['offset']), hzryfl['locator'] = ehrglt(wd5820, {});
                        }
                        mv7a['locator'] = _4vfy7, enqiu(lyrf, mv7a, sn) && n39us['push'](lyrf), mv7a['locator'] = wd5820;
                    } else enqiu(lyrf, mv7a, sn) && n39us['push'](lyrf);
                    'http://www.w3.org/1999/xhtml' !== lyrf['uri'] || lyrf['closed'] ? usj3++ : usj3 = eukn9sq($gthxl, usj3, lyrf['tagName'], k0bd96, mv7a);
            }
        } catch (oacemp) {
            tlhrg['error']('element parse error: ' + oacemp), usj3 = -0x1;
        }
        usj3 > jixtg ? jixtg = usj3 : ytzh(Math['max'](copmea, jixtg) + 0x1);
    }
}
function ehrglt(yv7_4, ace) {
    return ace['lineNumber'] = yv7_4['lineNumber'], ace['columnNumber'] = yv7_4['columnNumber'], ace;
}
function eyhztrl(b56d08, j3qn, d6b9, _y4v, qunij, tx$lg) {
    for (var lxth$, hrylf, va_74 = ++j3qn, bus6k9 = eqnsu3;;) {
        var $hxlgt = b56d08['charAt'](va_74);
        switch ($hxlgt) {
            case '=':
                if (bus6k9 === eaomcp) lxth$ = b56d08['slice'](j3qn, va_74), bus6k9 = ew05;else {
                    if (bus6k9 !== ehx$lg) throw new Error('attribute equal must after attrName');
                    bus6k9 = ew05;
                }
                break;
            case '\x27':
            case '\x22':
                if (bus6k9 === ew05 || bus6k9 === eaomcp) {
                    if (bus6k9 === eaomcp && (tx$lg['warning']('attribute value must after "="'), lxth$ = b56d08['slice'](j3qn, va_74)), j3qn = va_74 + 0x1, va_74 = b56d08['indexOf']($hxlgt, j3qn), !(va_74 > 0x0)) throw new Error('attribute value no end \'' + $hxlgt + '\' match');
                    hrylf = b56d08['slice'](j3qn, va_74)['replace'](/&#?\w+;/g, qunij), d6b9['add'](lxth$, hrylf, j3qn - 0x1), bus6k9 = eyrvh;
                } else {
                    if (bus6k9 != ejxit$) throw new Error('attribute value must after "="');
                    hrylf = b56d08['slice'](j3qn, va_74)['replace'](/&#?\w+;/g, qunij), d6b9['add'](lxth$, hrylf, j3qn), tx$lg['warning']('attribute "' + lxth$ + '" missed start quot(' + $hxlgt + ')!!'), j3qn = va_74 + 0x1, bus6k9 = eyrvh;
                }
                break;
            case '/':
                switch (bus6k9) {
                    case eqnsu3:
                        d6b9['setTagName'](b56d08['slice'](j3qn, va_74));
                    case eyrvh:
                    case ergtlx:
                    case en9qs:
                        bus6k9 = en9qs, d6b9['closed'] = !0x0;
                    case ejxit$:
                    case eaomcp:
                    case ehx$lg:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return tx$lg['error']('unexpected end of input'), bus6k9 == eqnsu3 && d6b9['setTagName'](b56d08['slice'](j3qn, va_74)), va_74;
            case '>':
                switch (bus6k9) {
                    case eqnsu3:
                        d6b9['setTagName'](b56d08['slice'](j3qn, va_74));
                    case eyrvh:
                    case ergtlx:
                    case en9qs:
                        break;
                    case ejxit$:
                    case eaomcp:
                        hrylf = b56d08['slice'](j3qn, va_74), '/' === hrylf['slice'](-0x1) && (d6b9['closed'] = !0x0, hrylf = hrylf['slice'](0x0, -0x1));
                    case ehx$lg:
                        bus6k9 === ehx$lg && (hrylf = lxth$), bus6k9 == ejxit$ ? (tx$lg['warning']('attribute "' + hrylf + '" missed quot(")!!'), d6b9['add'](lxth$, hrylf['replace'](/&#?\w+;/g, qunij), j3qn)) : ('http://www.w3.org/1999/xhtml' === _y4v[''] && hrylf['match'](/^(?:disabled|checked|selected)$/i) || tx$lg['warning']('attribute "' + hrylf + '" missed value!! "' + hrylf + '" instead!!'), d6b9['add'](hrylf, hrylf, j3qn));
                        break;
                    case ew05:
                        throw new Error('attribute value missed!!');
                }
                return va_74;
            case '\u0080':
                $hxlgt = '\x20';
            default:
                if ('\x20' >= $hxlgt) switch (bus6k9) {
                    case eqnsu3:
                        d6b9['setTagName'](b56d08['slice'](j3qn, va_74)), bus6k9 = ergtlx;
                        break;
                    case eaomcp:
                        lxth$ = b56d08['slice'](j3qn, va_74), bus6k9 = ehx$lg;
                        break;
                    case ejxit$:
                        var hrylf = b56d08['slice'](j3qn, va_74)['replace'](/&#?\w+;/g, qunij);
                        tx$lg['warning']('attribute "' + hrylf + '" missed quot(")!!'), d6b9['add'](lxth$, hrylf, j3qn);
                    case eyrvh:
                        bus6k9 = ergtlx;
                } else switch (bus6k9) {
                    case ehx$lg:
                        {
                            d6b9['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === _y4v[''] && lxth$['match'](/^(?:disabled|checked|selected)$/i) || tx$lg['warning']('attribute "' + lxth$ + '" missed value!! "' + lxth$ + '" instead2!!'), d6b9['add'](lxth$, lxth$, j3qn), j3qn = va_74, bus6k9 = eaomcp;
                        break;
                    case eyrvh:
                        tx$lg['warning']('attribute space is required"' + lxth$ + '\x22!!');
                    case ergtlx:
                        bus6k9 = eaomcp, j3qn = va_74;
                        break;
                    case ew05:
                        bus6k9 = ejxit$, j3qn = va_74;
                        break;
                    case en9qs:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        va_74++;
    }
}
function enqiu(xqi3, x$qij3, qj3n$i) {
    for (var tglhz = xqi3['tagName'], d5bk60 = null, am7_4 = xqi3['length']; am7_4--;) {
        var _cmao7 = xqi3[am7_4],
            thlryz = _cmao7['qName'],
            xtlh$ = _cmao7['value'],
            u3qin = thlryz['indexOf'](':');
        if (u3qin > 0x0) var hzryl = _cmao7['prefix'] = thlryz['slice'](0x0, u3qin),
            gxlti = thlryz['slice'](u3qin + 0x1),
            $lgix = 'xmlns' === hzryl && gxlti;else gxlti = thlryz, hzryl = null, $lgix = 'xmlns' === thlryz && '';
        _cmao7['localName'] = gxlti, $lgix !== !0x1 && (null == d5bk60 && (d5bk60 = {}, exgti$j(qj3n$i, qj3n$i = {})), qj3n$i[$lgix] = d5bk60[$lgix] = xtlh$, _cmao7['uri'] = 'http://www.w3.org/2000/xmlns/', x$qij3['startPrefixMapping']($lgix, xtlh$));
    }
    for (var am7_4 = xqi3['length']; am7_4--;) {
        _cmao7 = xqi3[am7_4];
        var hzryl = _cmao7['prefix'];
        hzryl && ('xml' === hzryl && (_cmao7['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== hzryl && (_cmao7['uri'] = qj3n$i[hzryl || '']));
    }
    var u3qin = tglhz['indexOf'](':');
    u3qin > 0x0 ? (hzryl = xqi3['prefix'] = tglhz['slice'](0x0, u3qin), gxlti = xqi3['localName'] = tglhz['slice'](u3qin + 0x1)) : (hzryl = null, gxlti = xqi3['localName'] = tglhz);
    var zyfvhr = xqi3['uri'] = qj3n$i[hzryl || ''];
    if (x$qij3['startElement'](zyfvhr, gxlti, tglhz, xqi3), !xqi3['closed']) return xqi3['currentNSMap'] = qj3n$i, xqi3['localNSMap'] = d5bk60, !0x0;
    if (x$qij3['endElement'](zyfvhr, gxlti, tglhz), d5bk60) {
        for (hzryl in d5bk60) x$qij3['endPrefixMapping'](hzryl);
    }
}
function eukn9sq(lgit$x, vfa4, unjq3, ocap, jtxg) {
    if (/^(?:script|textarea)$/i['test'](unjq3)) {
        var ks609 = lgit$x['indexOf']('</' + unjq3 + '>', vfa4),
            nuqs9k = lgit$x['substring'](vfa4 + 0x1, ks609);
        if (/[&<]/['test'](nuqs9k)) return (/^script$/i['test'](unjq3) ? (jtxg['characters'](nuqs9k, 0x0, nuqs9k['length']), ks609) : (nuqs9k = nuqs9k['replace'](/&#?\w+;/g, ocap), jtxg['characters'](nuqs9k, 0x0, nuqs9k['length']), ks609)
        );
    }
    return vfa4 + 0x1;
}
function e_mc7oa(hgl$, b5086, d50w82, m_ca) {
    var _amc = m_ca[d50w82];
    return null == _amc && (_amc = hgl$['lastIndexOf']('</' + d50w82 + '>'), b5086 > _amc && (_amc = hgl$['lastIndexOf']('</' + d50w82)), m_ca[d50w82] = _amc), b5086 > _amc;
}
function exgti$j(uskn9, _f4va7) {
    for (var kns9q in uskn9) _f4va7[kns9q] = uskn9[kns9q];
}
function erfy4z(b69ku, _7acm, i3$jqx, $tig) {
    var jniqu3 = b69ku['charAt'](_7acm + 0x2);
    switch (jniqu3) {
        case '-':
            if ('-' === b69ku['charAt'](_7acm + 0x3)) {
                var $nq = b69ku['indexOf']('-->', _7acm + 0x4);
                return $nq > _7acm ? (i3$jqx['comment'](b69ku, _7acm + 0x4, $nq - _7acm - 0x4), $nq + 0x3) : ($tig['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == b69ku['substr'](_7acm + 0x3, 0x6)) {
                var $nq = b69ku['indexOf'](']]>', _7acm + 0x9);
                return i3$jqx['startCDATA'](), i3$jqx['characters'](b69ku, _7acm + 0x9, $nq - _7acm - 0x9), i3$jqx['endCDATA'](), $nq + 0x3;
            }
            var sn3jq = e_fa(b69ku, _7acm),
                z_vfy = sn3jq['length'];
            if (z_vfy > 0x1 && /!doctype/i['test'](sn3jq[0x0][0x0])) {
                var iqnu3 = sn3jq[0x1][0x0],
                    u69ks = z_vfy > 0x3 && /^public$/i['test'](sn3jq[0x2][0x0]) && sn3jq[0x3][0x0],
                    ilgt = z_vfy > 0x4 && sn3jq[0x4][0x0],
                    gxji$3 = sn3jq[z_vfy - 0x1];
                return i3$jqx['startDTD'](iqnu3, u69ks && u69ks['replace'](/^(['"])(.*?)\1$/, '$2'), ilgt && ilgt['replace'](/^(['"])(.*?)\1$/, '$2')), i3$jqx['endDTD'](), gxji$3['index'] + gxji$3[0x0]['length'];
            }
    }
    return -0x1;
}
function ecma_47(zvy4r, cmoa, yv4f_z) {
    var j3nsqu = zvy4r['indexOf']('?>', cmoa);
    if (j3nsqu) {
        var usn6k9 = zvy4r['substring'](cmoa, j3nsqu)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (usn6k9) {
            {
                usn6k9[0x0]['length'];
            }
            return yv4f_z['processingInstruction'](usn6k9[0x1], usn6k9[0x2]), j3nsqu + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function eyhtrzl() {}
function enq$i3(r4z, wbd58) {
    return r4z['__proto__'] = wbd58, r4z;
}
function e_fa(xi3jg$, yrhzfv) {
    var b06d9k,
        ltgxh$ = [],
        glhz = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (glhz['lastIndex'] = yrhzfv, glhz['exec'](xi3jg$); b06d9k = glhz['exec'](xi3jg$);) if (ltgxh$['push'](b06d9k), b06d9k[0x1]) return ltgxh$;
}
var eunqk9 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    eqi$3xj = new RegExp('[\\-\\.0-9' + eunqk9['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    evyzr4f = new RegExp('^' + eunqk9['source'] + eqi$3xj['source'] + '*(?::' + eunqk9['source'] + eqi$3xj['source'] + '*)?$'),
    eqnsu3 = 0x0,
    eaomcp = 0x1,
    ehx$lg = 0x2,
    ew05 = 0x3,
    ejxit$ = 0x4,
    eyrvh = 0x5,
    ergtlx = 0x6,
    en9qs = 0x7;
epaoe['prototype'] = {
    'parse': function (pomaec, fav7, rhtlzg) {
        var yrtzlh = this['domBuilder'];
        yrtzlh['startDocument'](), exgti$j(fav7, fav7 = {}), ei$xglt(pomaec, fav7, rhtlzg, yrtzlh, this['errorHandler']), yrtzlh['endDocument']();
    }
}, eyhtrzl['prototype'] = {
    'setTagName': function (vhfzry) {
        if (!evyzr4f['test'](vhfzry)) throw new Error('invalid tagName:' + vhfzry);
        this['tagName'] = vhfzry;
    },
    'add': function (k690s, moec, htrlyz) {
        if (!evyzr4f['test'](k690s)) throw new Error('invalid attribute:' + k690s);
        this[this['length']++] = {
            'qName': k690s,
            'value': moec,
            'offset': htrlyz
        };
    },
    'length': 0x0,
    'getLocalName': function ($q3i) {
        return this[$q3i]['localName'];
    },
    'getLocator': function (d5b0k) {
        return this[d5b0k]['locator'];
    },
    'getQName': function (yrz) {
        return this[yrz]['qName'];
    },
    'getURI': function (_f4vy7) {
        return this[_f4vy7]['uri'];
    },
    'getValue': function (_ao) {
        return this[_ao]['value'];
    }
}, enq$i3({}, enq$i3['prototype']) instanceof enq$i3 || (enq$i3 = function (hfvyr, q3x) {
    function sj3uqn() {}
    sj3uqn['prototype'] = q3x, sj3uqn = new sj3uqn();
    for (q3x in hfvyr) sj3uqn[q3x] = hfvyr[q3x];
    return sj3uqn;
}), exports['XMLReader'] = epaoe;