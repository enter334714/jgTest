var g = wx.u$;
function _dfrtd36() {}
function _dvb29u$($79z, hwe8k_, $l972, yjk, w_jky) {
    function v5udq(cmixp) {
        if (cmixp > 0xffff) {
            cmixp -= 0x10000;
            var wsah = 0xd800 + (cmixp >> 0xa),
                fdvu5 = 0xdc00 + (0x3ff & cmixp);
            return String['fromCharCode'](wsah, fdvu5);
        }
        return String['fromCharCode'](cmixp);
    }
    function f6rd(u9bv52) {
        var uv9b52 = u9bv52['slice'](0x1, -0x1);
        return uv9b52 in $l972 ? $l972[uv9b52] : '#' === uv9b52['charAt'](0x0) ? v5udq(parseInt(uv9b52['substr'](0x1)['replace']('x', '0x'))) : (w_jky['error']('entity not found:' + u9bv52), u9bv52);
    }
    function ub5v2(z9l$b) {
        if (z9l$b > ek_8wn) {
            var clomz7 = $79z['substring'](ek_8wn, z9l$b)['replace'](/&#?\w+;/g, f6rd);
            v95u2q && uvqd5f(ek_8wn), yjk['characters'](clomz7, 0x0, z9l$b - ek_8wn), ek_8wn = z9l$b;
        }
    }
    function uvqd5f(td6qfr, f6r3t) {
        for (; td6qfr >= pyxig && (f6r3t = zol7mc['exec']($79z));) fdt3r6 = f6r3t['index'], pyxig = fdt3r6 + f6r3t[0x0]['length'], v95u2q['lineNumber']++;
        v95u2q['columnNumber'] = td6qfr - fdt3r6 + 0x1;
    }
    for (var fdt3r6 = 0x0, pyxig = 0x0, zol7mc = /.*(?:\r\n?|\n)|.*$/g, v95u2q = yjk['locator'], bl79$ = [{ 'currentNSMap': hwe8k_ }], ek = {}, ek_8wn = 0x0;;) {
        try {
            var frd3t6 = $79z['indexOf']('<', ek_8wn);
            if (0x0 > frd3t6) {
                if (!$79z['substr'](ek_8wn)['match'](/^\s*$/)) {
                    var rfqtd = yjk['doc'],
                        lmz7 = rfqtd['createTextNode']($79z['substr'](ek_8wn));
                    rfqtd['appendChild'](lmz7), yjk['currentElement'] = lmz7;
                }
                return;
            }
            switch (frd3t6 > ek_8wn && ub5v2(frd3t6), $79z['charAt'](frd3t6 + 0x1)) {
                case '/':
                    var gcixp = $79z['indexOf']('>', frd3t6 + 0x3),
                        knyw_ = $79z['substring'](frd3t6 + 0x2, gcixp),
                        v$b792 = bl79$['pop']();
                    0x0 > gcixp ? (knyw_ = $79z['substring'](frd3t6 + 0x2)['replace'](/[\s<].*/, ''), w_jky['error']('end tag name: ' + knyw_ + ' is not complete:' + v$b792['tagName']), gcixp = frd3t6 + 0x1 + knyw_['length']) : knyw_['match'](/\s</) && (knyw_ = knyw_['replace'](/[\s<].*/, ''), w_jky['error']('end tag name: ' + knyw_ + ' maybe not complete'), gcixp = frd3t6 + 0x1 + knyw_['length']);
                    var a8ews = v$b792['localNSMap'],
                        ne_kjw = v$b792['tagName'] == knyw_,
                        u$bv2 = ne_kjw || v$b792['tagName'] && v$b792['tagName']['toLowerCase']() == knyw_['toLowerCase']();
                    if (u$bv2) {
                        if (yjk['endElement'](v$b792['uri'], v$b792['localName'], knyw_), a8ews) {
                            for (var m4ipx in a8ews) yjk['endPrefixMapping'](m4ipx);
                        }
                        ne_kjw || w_jky['fatalError']('end tag name: ' + knyw_ + ' is not match the current start tagName:' + v$b792['tagName']);
                    } else bl79$['push'](v$b792);
                    gcixp++;
                    break;
                case '?':
                    v95u2q && uvqd5f(frd3t6), gcixp = _dmp($79z, frd3t6, yjk);
                    break;
                case '!':
                    v95u2q && uvqd5f(frd3t6), gcixp = _ddfqv5($79z, frd3t6, yjk, w_jky);
                    break;
                default:
                    v95u2q && uvqd5f(frd3t6);
                    var e8_khw = new _dbo7z$l(),
                        pxi4gc = bl79$[bl79$['length'] - 0x1]['currentNSMap'],
                        gcixp = _dkwnje_($79z, frd3t6, e8_khw, pxi4gc, f6rd, w_jky),
                        $7v9b = e8_khw['length'];
                    if (!e8_khw['closed'] && _df5qr6($79z, gcixp, e8_khw['tagName'], ek) && (e8_khw['closed'] = !0x0, $l972['nbsp'] || w_jky['warning']('unclosed xml attribute')), v95u2q && $7v9b) {
                        for (var ea8h = _dl$oz7m(v95u2q, {}), m4xpci = 0x0; $7v9b > m4xpci; m4xpci++) {
                            var _h8sew = e8_khw[m4xpci];
                            uvqd5f(_h8sew['offset']), _h8sew['locator'] = _dl$oz7m(v95u2q, {});
                        }
                        yjk['locator'] = ea8h, _dj_gnky(e8_khw, yjk, pxi4gc) && bl79$['push'](e8_khw), yjk['locator'] = v95u2q;
                    } else _dj_gnky(e8_khw, yjk, pxi4gc) && bl79$['push'](e8_khw);
                    'http://www.w3.org/1999/xhtml' !== e8_khw['uri'] || e8_khw['closed'] ? gcixp++ : gcixp = _dn_jyw($79z, gcixp, e8_khw['tagName'], f6rd, yjk);
            }
        } catch (jkg_y) {
            w_jky['error']('element parse error: ' + jkg_y), gcixp = -0x1;
        }
        gcixp > ek_8wn ? ek_8wn = gcixp : ub5v2(Math['max'](frd3t6, ek_8wn) + 0x1);
    }
}
function _dl$oz7m(mcx4i, c4pgx) {
    return c4pgx['lineNumber'] = mcx4i['lineNumber'], c4pgx['columnNumber'] = mcx4i['columnNumber'], c4pgx;
}
function _dkwnje_(lo7zm, qd25vu, l$m7oz, zmocx, dvq2u, zopcl) {
    for (var mlo$7, igjky, jynki = ++qd25vu, mcxi4p = _dft3d;;) {
        var uqv59 = lo7zm['charAt'](jynki);
        switch (uqv59) {
            case '=':
                if (mcxi4p === _dgyjxi) mlo$7 = lo7zm['slice'](qd25vu, jynki), mcxi4p = _dvud25;else {
                    if (mcxi4p !== _dxjy4ig) throw new Error('attribute equal must after attrName');
                    mcxi4p = _dvud25;
                }
                break;
            case '\x27':
            case '\x22':
                if (mcxi4p === _dvud25 || mcxi4p === _dgyjxi) {
                    if (mcxi4p === _dgyjxi && (zopcl['warning']('attribute value must after "="'), mlo$7 = lo7zm['slice'](qd25vu, jynki)), qd25vu = jynki + 0x1, jynki = lo7zm['indexOf'](uqv59, qd25vu), !(jynki > 0x0)) throw new Error('attribute value no end \'' + uqv59 + '\' match');
                    igjky = lo7zm['slice'](qd25vu, jynki)['replace'](/&#?\w+;/g, dvq2u), l$m7oz['add'](mlo$7, igjky, qd25vu - 0x1), mcxi4p = _df63r;
                } else {
                    if (mcxi4p != _dnew_k8) throw new Error('attribute value must after "="');
                    igjky = lo7zm['slice'](qd25vu, jynki)['replace'](/&#?\w+;/g, dvq2u), l$m7oz['add'](mlo$7, igjky, qd25vu), zopcl['warning']('attribute "' + mlo$7 + '" missed start quot(' + uqv59 + ')!!'), qd25vu = jynki + 0x1, mcxi4p = _df63r;
                }
                break;
            case '/':
                switch (mcxi4p) {
                    case _dft3d:
                        l$m7oz['setTagName'](lo7zm['slice'](qd25vu, jynki));
                    case _df63r:
                    case _dniyjg:
                    case _d$l9z7b:
                        mcxi4p = _d$l9z7b, l$m7oz['closed'] = !0x0;
                    case _dnew_k8:
                    case _dgyjxi:
                    case _dxjy4ig:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return zopcl['error']('unexpected end of input'), mcxi4p == _dft3d && l$m7oz['setTagName'](lo7zm['slice'](qd25vu, jynki)), jynki;
            case '>':
                switch (mcxi4p) {
                    case _dft3d:
                        l$m7oz['setTagName'](lo7zm['slice'](qd25vu, jynki));
                    case _df63r:
                    case _dniyjg:
                    case _d$l9z7b:
                        break;
                    case _dnew_k8:
                    case _dgyjxi:
                        igjky = lo7zm['slice'](qd25vu, jynki), '/' === igjky['slice'](-0x1) && (l$m7oz['closed'] = !0x0, igjky = igjky['slice'](0x0, -0x1));
                    case _dxjy4ig:
                        mcxi4p === _dxjy4ig && (igjky = mlo$7), mcxi4p == _dnew_k8 ? (zopcl['warning']('attribute "' + igjky + '" missed quot(")!!'), l$m7oz['add'](mlo$7, igjky['replace'](/&#?\w+;/g, dvq2u), qd25vu)) : ('http://www.w3.org/1999/xhtml' === zmocx[''] && igjky['match'](/^(?:disabled|checked|selected)$/i) || zopcl['warning']('attribute "' + igjky + '" missed value!! "' + igjky + '" instead!!'), l$m7oz['add'](igjky, igjky, qd25vu));
                        break;
                    case _dvud25:
                        throw new Error('attribute value missed!!');
                }
                return jynki;
            case '\u0080':
                uqv59 = '\x20';
            default:
                if ('\x20' >= uqv59) switch (mcxi4p) {
                    case _dft3d:
                        l$m7oz['setTagName'](lo7zm['slice'](qd25vu, jynki)), mcxi4p = _dniyjg;
                        break;
                    case _dgyjxi:
                        mlo$7 = lo7zm['slice'](qd25vu, jynki), mcxi4p = _dxjy4ig;
                        break;
                    case _dnew_k8:
                        var igjky = lo7zm['slice'](qd25vu, jynki)['replace'](/&#?\w+;/g, dvq2u);
                        zopcl['warning']('attribute "' + igjky + '" missed quot(")!!'), l$m7oz['add'](mlo$7, igjky, qd25vu);
                    case _df63r:
                        mcxi4p = _dniyjg;
                } else switch (mcxi4p) {
                    case _dxjy4ig:
                        {
                            l$m7oz['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === zmocx[''] && mlo$7['match'](/^(?:disabled|checked|selected)$/i) || zopcl['warning']('attribute "' + mlo$7 + '" missed value!! "' + mlo$7 + '" instead2!!'), l$m7oz['add'](mlo$7, mlo$7, qd25vu), qd25vu = jynki, mcxi4p = _dgyjxi;
                        break;
                    case _df63r:
                        zopcl['warning']('attribute space is required"' + mlo$7 + '\x22!!');
                    case _dniyjg:
                        mcxi4p = _dgyjxi, qd25vu = jynki;
                        break;
                    case _dvud25:
                        mcxi4p = _dnew_k8, qd25vu = jynki;
                        break;
                    case _d$l9z7b:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        jynki++;
    }
}
function _dj_gnky(mcix4p, m$loz7, _kh8ew) {
    for (var jgni = mcix4p['tagName'], olmz$7 = null, o7ml = mcix4p['length']; o7ml--;) {
        var $ml7 = mcix4p[o7ml],
            ji4gyx = $ml7['qName'],
            udqf56 = $ml7['value'],
            $9u2bv = ji4gyx['indexOf'](':');
        if ($9u2bv > 0x0) var b95u = $ml7['prefix'] = ji4gyx['slice'](0x0, $9u2bv),
            $lozm = ji4gyx['slice']($9u2bv + 0x1),
            tfdq6r = 'xmlns' === b95u && $lozm;else $lozm = ji4gyx, b95u = null, tfdq6r = 'xmlns' === ji4gyx && '';
        $ml7['localName'] = $lozm, tfdq6r !== !0x1 && (null == olmz$7 && (olmz$7 = {}, _di4xyg(_kh8ew, _kh8ew = {})), _kh8ew[tfdq6r] = olmz$7[tfdq6r] = udqf56, $ml7['uri'] = 'http://www.w3.org/2000/xmlns/', m$loz7['startPrefixMapping'](tfdq6r, udqf56));
    }
    for (var o7ml = mcix4p['length']; o7ml--;) {
        $ml7 = mcix4p[o7ml];
        var b95u = $ml7['prefix'];
        b95u && ('xml' === b95u && ($ml7['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== b95u && ($ml7['uri'] = _kh8ew[b95u || '']));
    }
    var $9u2bv = jgni['indexOf'](':');
    $9u2bv > 0x0 ? (b95u = mcix4p['prefix'] = jgni['slice'](0x0, $9u2bv), $lozm = mcix4p['localName'] = jgni['slice']($9u2bv + 0x1)) : (b95u = null, $lozm = mcix4p['localName'] = jgni);
    var d5u6q = mcix4p['uri'] = _kh8ew[b95u || ''];
    if (m$loz7['startElement'](d5u6q, $lozm, jgni, mcix4p), !mcix4p['closed']) return mcix4p['currentNSMap'] = _kh8ew, mcix4p['localNSMap'] = olmz$7, !0x0;
    if (m$loz7['endElement'](d5u6q, $lozm, jgni), olmz$7) {
        for (b95u in olmz$7) m$loz7['endPrefixMapping'](b95u);
    }
}
function _dn_jyw($7l29, yikg, _kynw, uq295, vu5d) {
    if (/^(?:script|textarea)$/i['test'](_kynw)) {
        var ip4yg = $7l29['indexOf']('</' + _kynw + '>', yikg),
            cx4pi = $7l29['substring'](yikg + 0x1, ip4yg);
        if (/[&<]/['test'](cx4pi)) return (/^script$/i['test'](_kynw) ? (vu5d['characters'](cx4pi, 0x0, cx4pi['length']), ip4yg) : (cx4pi = cx4pi['replace'](/&#?\w+;/g, uq295), vu5d['characters'](cx4pi, 0x0, cx4pi['length']), ip4yg)
        );
    }
    return yikg + 0x1;
}
function _df5qr6(gnkj_y, sw8aeh, ud6f, knig) {
    var i4pmx = knig[ud6f];
    return null == i4pmx && (i4pmx = gnkj_y['lastIndexOf']('</' + ud6f + '>'), sw8aeh > i4pmx && (i4pmx = gnkj_y['lastIndexOf']('</' + ud6f)), knig[ud6f] = i4pmx), sw8aeh > i4pmx;
}
function _di4xyg(jwken, o7$lz) {
    for (var jynk_g in jwken) o7$lz[jynk_g] = jwken[jynk_g];
}
function _ddfqv5(dr3tf, mcix4, i4xc, dqfr) {
    var lb2$ = dr3tf['charAt'](mcix4 + 0x2);
    switch (lb2$) {
        case '-':
            if ('-' === dr3tf['charAt'](mcix4 + 0x3)) {
                var _8nwek = dr3tf['indexOf']('-->', mcix4 + 0x4);
                return _8nwek > mcix4 ? (i4xc['comment'](dr3tf, mcix4 + 0x4, _8nwek - mcix4 - 0x4), _8nwek + 0x3) : (dqfr['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == dr3tf['substr'](mcix4 + 0x3, 0x6)) {
                var _8nwek = dr3tf['indexOf'](']]>', mcix4 + 0x9);
                return i4xc['startCDATA'](), i4xc['characters'](dr3tf, mcix4 + 0x9, _8nwek - mcix4 - 0x9), i4xc['endCDATA'](), _8nwek + 0x3;
            }
            var knjyg_ = _dxcpmi(dr3tf, mcix4),
                wase8h = knjyg_['length'];
            if (wase8h > 0x1 && /!doctype/i['test'](knjyg_[0x0][0x0])) {
                var c4oxpm = knjyg_[0x1][0x0],
                    r5dfq = wase8h > 0x3 && /^public$/i['test'](knjyg_[0x2][0x0]) && knjyg_[0x3][0x0],
                    es8ahw = wase8h > 0x4 && knjyg_[0x4][0x0],
                    t61r = knjyg_[wase8h - 0x1];
                return i4xc['startDTD'](c4oxpm, r5dfq && r5dfq['replace'](/^(['"])(.*?)\1$/, '$2'), es8ahw && es8ahw['replace'](/^(['"])(.*?)\1$/, '$2')), i4xc['endDTD'](), t61r['index'] + t61r[0x0]['length'];
            }
    }
    return -0x1;
}
function _dmp(ew8h_k, jewn_, pm4xc) {
    var n8_kew = ew8h_k['indexOf']('?>', jewn_);
    if (n8_kew) {
        var ing4 = ew8h_k['substring'](jewn_, n8_kew)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (ing4) {
            {
                ing4[0x0]['length'];
            }
            return pm4xc['processingInstruction'](ing4[0x1], ing4[0x2]), n8_kew + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function _dbo7z$l() {}
function _dcm7zo(zmplc, qv295u) {
    return zmplc['__proto__'] = qv295u, zmplc;
}
function _dxcpmi(xpgci, h_swe8) {
    var iyp4xg,
        qv5f = [],
        e_8hk = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (e_8hk['lastIndex'] = h_swe8, e_8hk['exec'](xpgci); iyp4xg = e_8hk['exec'](xpgci);) if (qv5f['push'](iyp4xg), iyp4xg[0x1]) return qv5f;
}
var _doblz7 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    _dc4xg = new RegExp('[\\-\\.0-9' + _doblz7['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    _dj_kyng = new RegExp('^' + _doblz7['source'] + _dc4xg['source'] + '*(?::' + _doblz7['source'] + _dc4xg['source'] + '*)?$'),
    _dft3d = 0x0,
    _dgyjxi = 0x1,
    _dxjy4ig = 0x2,
    _dvud25 = 0x3,
    _dnew_k8 = 0x4,
    _df63r = 0x5,
    _dniyjg = 0x6,
    _d$l9z7b = 0x7;
_dfrtd36['prototype'] = {
    'parse': function (ek_wh, k_n8ew, zolcpm) {
        var yjngi = this['domBuilder'];
        yjngi['startDocument'](), _di4xyg(k_n8ew, k_n8ew = {}), _dvb29u$(ek_wh, k_n8ew, zolcpm, yjngi, this['errorHandler']), yjngi['endDocument']();
    }
}, _dbo7z$l['prototype'] = {
    'setTagName': function (kne_jw) {
        if (!_dj_kyng['test'](kne_jw)) throw new Error('invalid tagName:' + kne_jw);
        this['tagName'] = kne_jw;
    },
    'add': function (vq529u, wesa8h, b7v2$) {
        if (!_dj_kyng['test'](vq529u)) throw new Error('invalid attribute:' + vq529u);
        this[this['length']++] = {
            'qName': vq529u,
            'value': wesa8h,
            'offset': b7v2$
        };
    },
    'length': 0x0,
    'getLocalName': function (pmix) {
        return this[pmix]['localName'];
    },
    'getLocator': function (im4) {
        return this[im4]['locator'];
    },
    'getQName': function (ehw_s8) {
        return this[ehw_s8]['qName'];
    },
    'getURI': function (rdqtf6) {
        return this[rdqtf6]['uri'];
    },
    'getValue': function (h_ew) {
        return this[h_ew]['value'];
    }
}, _dcm7zo({}, _dcm7zo['prototype']) instanceof _dcm7zo || (_dcm7zo = function (we8_, he8_ws) {
    function kn_yg() {}
    kn_yg['prototype'] = he8_ws, kn_yg = new kn_yg();
    for (he8_ws in we8_) kn_yg[he8_ws] = we8_[he8_ws];
    return kn_yg;
}), exports['XMLReader'] = _dfrtd36;