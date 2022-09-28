var f = wx.$B;
function Sms6k() {}
function Sr789e(s$vki6, woy5x, ule1f, ej978, qma20) {
    function zwpx5(egu1l) {
        if (egu1l > 0xffff) {
            egu1l -= 0x10000;
            var bzy_p = 0xd800 + (egu1l >> 0xa),
                rgule9 = 0xdc00 + (0x3ff & egu1l);
            return String['fromCharCode'](bzy_p, rgule9);
        }
        return String['fromCharCode'](egu1l);
    }
    function vm26k$(d06v) {
        var wqao0d = d06v['slice'](0x1, -0x1);
        return wqao0d in ule1f ? ule1f[wqao0d] : '#' === wqao0d['charAt'](0x0) ? zwpx5(parseInt(wqao0d['substr'](0x1)['replace']('x', '0x'))) : (qma20['error']('entity not found:' + d06v), d06v);
    }
    function py5wo(v2mk) {
        if (v2mk > ru7e9g) {
            var qado = s$vki6['substring'](ru7e9g, v2mk)['replace'](/&#?\w+;/g, vm26k$);
            $6his && awoxdq(ru7e9g), ej978['characters'](qado, 0x0, v2mk - ru7e9g), ru7e9g = v2mk;
        }
    }
    function awoxdq(smvk, rj798) {
        for (; smvk >= ej && (rj798 = h4$k['exec'](s$vki6));) vdm = rj798['index'], ej = vdm + rj798[0x0]['length'], $6his['lineNumber']++;
        $6his['columnNumber'] = smvk - vdm + 0x1;
    }
    for (var vdm = 0x0, ej = 0x0, h4$k = /.*(?:\r\n?|\n)|.*$/g, $6his = ej978['locator'], guelf1 = [{ 'currentNSMap': woy5x }], wpqoy = {}, ru7e9g = 0x0;;) {
        try {
            var l1gfeu = s$vki6['indexOf']('<', ru7e9g);
            if (0x0 > l1gfeu) {
                if (!s$vki6['substr'](ru7e9g)['match'](/^\s*$/)) {
                    var xwaqp = ej978['doc'],
                        aodwq = xwaqp['createTextNode'](s$vki6['substr'](ru7e9g));
                    xwaqp['appendChild'](aodwq), ej978['currentElement'] = aodwq;
                }
                return;
            }
            switch (l1gfeu > ru7e9g && py5wo(l1gfeu), s$vki6['charAt'](l1gfeu + 0x1)) {
                case '/':
                    var jhi348 = s$vki6['indexOf']('>', l1gfeu + 0x3),
                        eg1ulf = s$vki6['substring'](l1gfeu + 0x2, jhi348),
                        q0oda2 = guelf1['pop']();
                    0x0 > jhi348 ? (eg1ulf = s$vki6['substring'](l1gfeu + 0x2)['replace'](/[\s<].*/, ''), qma20['error']('end tag name: ' + eg1ulf + ' is not complete:' + q0oda2['tagName']), jhi348 = l1gfeu + 0x1 + eg1ulf['length']) : eg1ulf['match'](/\s</) && (eg1ulf = eg1ulf['replace'](/[\s<].*/, ''), qma20['error']('end tag name: ' + eg1ulf + ' maybe not complete'), jhi348 = l1gfeu + 0x1 + eg1ulf['length']);
                    var svi = q0oda2['localNSMap'],
                        i6$hs = q0oda2['tagName'] == eg1ulf,
                        uegl9 = i6$hs || q0oda2['tagName'] && q0oda2['tagName']['toLowerCase']() == eg1ulf['toLowerCase']();
                    if (uegl9) {
                        if (ej978['endElement'](q0oda2['uri'], q0oda2['localName'], eg1ulf), svi) {
                            for (var hi83j in svi) ej978['endPrefixMapping'](hi83j);
                        }
                        i6$hs || qma20['fatalError']('end tag name: ' + eg1ulf + ' is not match the current start tagName:' + q0oda2['tagName']);
                    } else guelf1['push'](q0oda2);
                    jhi348++;
                    break;
                case '?':
                    $6his && awoxdq(l1gfeu), jhi348 = Sr97e8j(s$vki6, l1gfeu, ej978);
                    break;
                case '!':
                    $6his && awoxdq(l1gfeu), jhi348 = S_bp(s$vki6, l1gfeu, ej978, qma20);
                    break;
                default:
                    $6his && awoxdq(l1gfeu);
                    var sv6$ki = new Sow0dqa(),
                        lgt1fu = guelf1[guelf1['length'] - 0x1]['currentNSMap'],
                        jhi348 = Spyoxw5(s$vki6, l1gfeu, sv6$ki, lgt1fu, vm26k$, qma20),
                        d6m0 = sv6$ki['length'];
                    if (!sv6$ki['closed'] && Sm0daq2(s$vki6, jhi348, sv6$ki['tagName'], wpqoy) && (sv6$ki['closed'] = !0x0, ule1f['nbsp'] || qma20['warning']('unclosed xml attribute')), $6his && d6m0) {
                        for (var lr1geu = Spwqa($6his, {}), e9r8 = 0x0; d6m0 > e9r8; e9r8++) {
                            var _zby5 = sv6$ki[e9r8];
                            awoxdq(_zby5['offset']), _zby5['locator'] = Spwqa($6his, {});
                        }
                        ej978['locator'] = lr1geu, Skv(sv6$ki, ej978, lgt1fu) && guelf1['push'](sv6$ki), ej978['locator'] = $6his;
                    } else Skv(sv6$ki, ej978, lgt1fu) && guelf1['push'](sv6$ki);
                    'http://www.w3.org/1999/xhtml' !== sv6$ki['uri'] || sv6$ki['closed'] ? jhi348++ : jhi348 = Swzp(s$vki6, jhi348, sv6$ki['tagName'], vm26k$, ej978);
            }
        } catch (u1lfe) {
            qma20['error']('element parse error: ' + u1lfe), jhi348 = -0x1;
        }
        jhi348 > ru7e9g ? ru7e9g = jhi348 : py5wo(Math['max'](l1gfeu, ru7e9g) + 0x1);
    }
}
function Spwqa(h$s6ki, j789re) {
    return j789re['lineNumber'] = h$s6ki['lineNumber'], j789re['columnNumber'] = h$s6ki['columnNumber'], j789re;
}
function Spyoxw5(i3h$4, fg1leu, kvm20, zp5xwy, lufge, pzb_) {
    for (var qxwy, axqowp, owqyx = ++fg1leu, h43$s = Sugrel9;;) {
        var shk$ = i3h$4['charAt'](owqyx);
        switch (shk$) {
            case '=':
                if (h43$s === Skhi$) qxwy = i3h$4['slice'](fg1leu, owqyx), h43$s = Sby5_p;else {
                    if (h43$s !== Sv0k) throw new Error('attribute equal must after attrName');
                    h43$s = Sby5_p;
                }
                break;
            case '\x27':
            case '\x22':
                if (h43$s === Sby5_p || h43$s === Skhi$) {
                    if (h43$s === Skhi$ && (pzb_['warning']('attribute value must after "="'), qxwy = i3h$4['slice'](fg1leu, owqyx)), fg1leu = owqyx + 0x1, owqyx = i3h$4['indexOf'](shk$, fg1leu), !(owqyx > 0x0)) throw new Error('attribute value no end \'' + shk$ + '\' match');
                    axqowp = i3h$4['slice'](fg1leu, owqyx)['replace'](/&#?\w+;/g, lufge), kvm20['add'](qxwy, axqowp, fg1leu - 0x1), h43$s = Saqwpx;
                } else {
                    if (h43$s != Sis3h) throw new Error('attribute value must after "="');
                    axqowp = i3h$4['slice'](fg1leu, owqyx)['replace'](/&#?\w+;/g, lufge), kvm20['add'](qxwy, axqowp, fg1leu), pzb_['warning']('attribute "' + qxwy + '" missed start quot(' + shk$ + ')!!'), fg1leu = owqyx + 0x1, h43$s = Saqwpx;
                }
                break;
            case '/':
                switch (h43$s) {
                    case Sugrel9:
                        kvm20['setTagName'](i3h$4['slice'](fg1leu, owqyx));
                    case Saqwpx:
                    case Swqypx:
                    case Sj8793r:
                        h43$s = Sj8793r, kvm20['closed'] = !0x0;
                    case Sis3h:
                    case Skhi$:
                    case Sv0k:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return pzb_['error']('unexpected end of input'), h43$s == Sugrel9 && kvm20['setTagName'](i3h$4['slice'](fg1leu, owqyx)), owqyx;
            case '>':
                switch (h43$s) {
                    case Sugrel9:
                        kvm20['setTagName'](i3h$4['slice'](fg1leu, owqyx));
                    case Saqwpx:
                    case Swqypx:
                    case Sj8793r:
                        break;
                    case Sis3h:
                    case Skhi$:
                        axqowp = i3h$4['slice'](fg1leu, owqyx), '/' === axqowp['slice'](-0x1) && (kvm20['closed'] = !0x0, axqowp = axqowp['slice'](0x0, -0x1));
                    case Sv0k:
                        h43$s === Sv0k && (axqowp = qxwy), h43$s == Sis3h ? (pzb_['warning']('attribute "' + axqowp + '" missed quot(")!!'), kvm20['add'](qxwy, axqowp['replace'](/&#?\w+;/g, lufge), fg1leu)) : ('http://www.w3.org/1999/xhtml' === zp5xwy[''] && axqowp['match'](/^(?:disabled|checked|selected)$/i) || pzb_['warning']('attribute "' + axqowp + '" missed value!! "' + axqowp + '" instead!!'), kvm20['add'](axqowp, axqowp, fg1leu));
                        break;
                    case Sby5_p:
                        throw new Error('attribute value missed!!');
                }
                return owqyx;
            case '\u0080':
                shk$ = '\x20';
            default:
                if ('\x20' >= shk$) switch (h43$s) {
                    case Sugrel9:
                        kvm20['setTagName'](i3h$4['slice'](fg1leu, owqyx)), h43$s = Swqypx;
                        break;
                    case Skhi$:
                        qxwy = i3h$4['slice'](fg1leu, owqyx), h43$s = Sv0k;
                        break;
                    case Sis3h:
                        var axqowp = i3h$4['slice'](fg1leu, owqyx)['replace'](/&#?\w+;/g, lufge);
                        pzb_['warning']('attribute "' + axqowp + '" missed quot(")!!'), kvm20['add'](qxwy, axqowp, fg1leu);
                    case Saqwpx:
                        h43$s = Swqypx;
                } else switch (h43$s) {
                    case Sv0k:
                        {
                            kvm20['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === zp5xwy[''] && qxwy['match'](/^(?:disabled|checked|selected)$/i) || pzb_['warning']('attribute "' + qxwy + '" missed value!! "' + qxwy + '" instead2!!'), kvm20['add'](qxwy, qxwy, fg1leu), fg1leu = owqyx, h43$s = Skhi$;
                        break;
                    case Saqwpx:
                        pzb_['warning']('attribute space is required"' + qxwy + '\x22!!');
                    case Swqypx:
                        h43$s = Skhi$, fg1leu = owqyx;
                        break;
                    case Sby5_p:
                        h43$s = Sis3h, fg1leu = owqyx;
                        break;
                    case Sj8793r:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        owqyx++;
    }
}
function Skv(s$i6v, kh6s, fgleu) {
    for (var d2m60v = s$i6v['tagName'], poyw = null, re8g97 = s$i6v['length']; re8g97--;) {
        var $2m6 = s$i6v[re8g97],
            f1geul = $2m6['qName'],
            v6m$2k = $2m6['value'],
            yowpxq = f1geul['indexOf'](':');
        if (yowpxq > 0x0) var j79er8 = $2m6['prefix'] = f1geul['slice'](0x0, yowpxq),
            uer9g7 = f1geul['slice'](yowpxq + 0x1),
            b_pz5y = 'xmlns' === j79er8 && uer9g7;else uer9g7 = f1geul, j79er8 = null, b_pz5y = 'xmlns' === f1geul && '';
        $2m6['localName'] = uer9g7, b_pz5y !== !0x1 && (null == poyw && (poyw = {}, Stl1u(fgleu, fgleu = {})), fgleu[b_pz5y] = poyw[b_pz5y] = v6m$2k, $2m6['uri'] = 'http://www.w3.org/2000/xmlns/', kh6s['startPrefixMapping'](b_pz5y, v6m$2k));
    }
    for (var re8g97 = s$i6v['length']; re8g97--;) {
        $2m6 = s$i6v[re8g97];
        var j79er8 = $2m6['prefix'];
        j79er8 && ('xml' === j79er8 && ($2m6['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== j79er8 && ($2m6['uri'] = fgleu[j79er8 || '']));
    }
    var yowpxq = d2m60v['indexOf'](':');
    yowpxq > 0x0 ? (j79er8 = s$i6v['prefix'] = d2m60v['slice'](0x0, yowpxq), uer9g7 = s$i6v['localName'] = d2m60v['slice'](yowpxq + 0x1)) : (j79er8 = null, uer9g7 = s$i6v['localName'] = d2m60v);
    var a0dmv2 = s$i6v['uri'] = fgleu[j79er8 || ''];
    if (kh6s['startElement'](a0dmv2, uer9g7, d2m60v, s$i6v), !s$i6v['closed']) return s$i6v['currentNSMap'] = fgleu, s$i6v['localNSMap'] = poyw, !0x0;
    if (kh6s['endElement'](a0dmv2, uer9g7, d2m60v), poyw) {
        for (j79er8 in poyw) kh6s['endPrefixMapping'](j79er8);
    }
}
function Swzp(adqoxw, xoypw5, oq2a0, ms6vk, $v6mk2) {
    if (/^(?:script|textarea)$/i['test'](oq2a0)) {
        var h4i$s = adqoxw['indexOf']('</' + oq2a0 + '>', xoypw5),
            hi38j4 = adqoxw['substring'](xoypw5 + 0x1, h4i$s);
        if (/[&<]/['test'](hi38j4)) return (/^script$/i['test'](oq2a0) ? ($v6mk2['characters'](hi38j4, 0x0, hi38j4['length']), h4i$s) : (hi38j4 = hi38j4['replace'](/&#?\w+;/g, ms6vk), $v6mk2['characters'](hi38j4, 0x0, hi38j4['length']), h4i$s)
        );
    }
    return xoypw5 + 0x1;
}
function Sm0daq2(j9r73, zx_5p, r9ej8, $shi4k) {
    var v$kms = $shi4k[r9ej8];
    return null == v$kms && (v$kms = j9r73['lastIndexOf']('</' + r9ej8 + '>'), zx_5p > v$kms && (v$kms = j9r73['lastIndexOf']('</' + r9ej8)), $shi4k[r9ej8] = v$kms), zx_5p > v$kms;
}
function Stl1u(s$ik4h, $k6hsi) {
    for (var lgur1 in s$ik4h) $k6hsi[lgur1] = s$ik4h[lgur1];
}
function S_bp(opax, pbzy_, eulrg9, y5opx) {
    var sik$6h = opax['charAt'](pbzy_ + 0x2);
    switch (sik$6h) {
        case '-':
            if ('-' === opax['charAt'](pbzy_ + 0x3)) {
                var o02daq = opax['indexOf']('-->', pbzy_ + 0x4);
                return o02daq > pbzy_ ? (eulrg9['comment'](opax, pbzy_ + 0x4, o02daq - pbzy_ - 0x4), o02daq + 0x3) : (y5opx['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == opax['substr'](pbzy_ + 0x3, 0x6)) {
                var o02daq = opax['indexOf'](']]>', pbzy_ + 0x9);
                return eulrg9['startCDATA'](), eulrg9['characters'](opax, pbzy_ + 0x9, o02daq - pbzy_ - 0x9), eulrg9['endCDATA'](), o02daq + 0x3;
            }
            var kih6$s = Sd02va(opax, pbzy_),
                m2kv$ = kih6$s['length'];
            if (m2kv$ > 0x1 && /!doctype/i['test'](kih6$s[0x0][0x0])) {
                var ksh6$i = kih6$s[0x1][0x0],
                    b_zn5 = m2kv$ > 0x3 && /^public$/i['test'](kih6$s[0x2][0x0]) && kih6$s[0x3][0x0],
                    zx_p5y = m2kv$ > 0x4 && kih6$s[0x4][0x0],
                    d6m0v2 = kih6$s[m2kv$ - 0x1];
                return eulrg9['startDTD'](ksh6$i, b_zn5 && b_zn5['replace'](/^(['"])(.*?)\1$/, '$2'), zx_p5y && zx_p5y['replace'](/^(['"])(.*?)\1$/, '$2')), eulrg9['endDTD'](), d6m0v2['index'] + d6m0v2[0x0]['length'];
            }
    }
    return -0x1;
}
function Sr97e8j(si43jh, le9ugr, km2v6$) {
    var k$m6 = si43jh['indexOf']('?>', le9ugr);
    if (k$m6) {
        var mq2a0d = si43jh['substring'](le9ugr, k$m6)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (mq2a0d) {
            {
                mq2a0d[0x0]['length'];
            }
            return km2v6$['processingInstruction'](mq2a0d[0x1], mq2a0d[0x2]), k$m6 + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function Sow0dqa() {}
function Sd0aq2o(jhi43, fel) {
    return jhi43['__proto__'] = fel, jhi43;
}
function Sd02va(ik$6h, zx5pwy) {
    var wyzp5,
        $m6kv2 = [],
        hs4i$3 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (hs4i$3['lastIndex'] = zx5pwy, hs4i$3['exec'](ik$6h); wyzp5 = hs4i$3['exec'](ik$6h);) if ($m6kv2['push'](wyzp5), wyzp5[0x1]) return $m6kv2;
}
var Sj473h8 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    Sdqxao = new RegExp('[\\-\\.0-9' + Sj473h8['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    Ssh6$ = new RegExp('^' + Sj473h8['source'] + Sdqxao['source'] + '*(?::' + Sj473h8['source'] + Sdqxao['source'] + '*)?$'),
    Sugrel9 = 0x0,
    Skhi$ = 0x1,
    Sv0k = 0x2,
    Sby5_p = 0x3,
    Sis3h = 0x4,
    Saqwpx = 0x5,
    Swqypx = 0x6,
    Sj8793r = 0x7;
Sms6k['prototype'] = {
    'parse': function (lgf1t, bzp5_y, wdaox) {
        var f1 = this['domBuilder'];
        f1['startDocument'](), Stl1u(bzp5_y, bzp5_y = {}), Sr789e(lgf1t, bzp5_y, wdaox, f1, this['errorHandler']), f1['endDocument']();
    }
}, Sow0dqa['prototype'] = {
    'setTagName': function (p5ow) {
        if (!Ssh6$['test'](p5ow)) throw new Error('invalid tagName:' + p5ow);
        this['tagName'] = p5ow;
    },
    'add': function (eu7, $mv, v20d) {
        if (!Ssh6$['test'](eu7)) throw new Error('invalid attribute:' + eu7);
        this[this['length']++] = {
            'qName': eu7,
            'value': $mv,
            'offset': v20d
        };
    },
    'length': 0x0,
    'getLocalName': function (y_b) {
        return this[y_b]['localName'];
    },
    'getLocator': function (yqxwo) {
        return this[yqxwo]['locator'];
    },
    'getQName': function (dm2q) {
        return this[dm2q]['qName'];
    },
    'getURI': function (xqpy) {
        return this[xqpy]['uri'];
    },
    'getValue': function (r97j8e) {
        return this[r97j8e]['value'];
    }
}, Sd0aq2o({}, Sd0aq2o['prototype']) instanceof Sd0aq2o || (Sd0aq2o = function (u7rge9, dvam20) {
    function e9lgr() {}
    e9lgr['prototype'] = dvam20, e9lgr = new e9lgr();
    for (dvam20 in u7rge9) e9lgr[dvam20] = u7rge9[dvam20];
    return e9lgr;
}), exports['XMLReader'] = Sms6k;