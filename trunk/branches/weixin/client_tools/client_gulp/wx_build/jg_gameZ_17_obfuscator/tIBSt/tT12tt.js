var g = wx.u$;
function _du29b5v() {}
function _dox4(z9bl, ft3d, $bloz7, u59vb2, wken8) {
    function gp4xc(w_nyk) {
        if (w_nyk > 0xffff) {
            w_nyk -= 0x10000;
            var q2uv59 = 0xd800 + (w_nyk >> 0xa),
                kyjw_ = 0xdc00 + (0x3ff & w_nyk);
            return String['fromCharCode'](q2uv59, kyjw_);
        }
        return String['fromCharCode'](w_nyk);
    }
    function ozl7$(ykj_wn) {
        var _knwj = ykj_wn['slice'](0x1, -0x1);
        return _knwj in $bloz7 ? $bloz7[_knwj] : '#' === _knwj['charAt'](0x0) ? gp4xc(parseInt(_knwj['substr'](0x1)['replace']('x', '0x'))) : (wken8['error']('entity not found:' + ykj_wn), ykj_wn);
    }
    function rt16f(ipcg4x) {
        if (ipcg4x > udvqf) {
            var $2vu9b = z9bl['substring'](udvqf, ipcg4x)['replace'](/&#?\w+;/g, ozl7$);
            $7bl92 && polm(udvqf), u59vb2['characters']($2vu9b, 0x0, ipcg4x - udvqf), udvqf = ipcg4x;
        }
    }
    function polm(xzmpc, pomxc) {
        for (; xzmpc >= l7bz$ && (pomxc = b5vu9['exec'](z9bl));) x4icmp = pomxc['index'], l7bz$ = x4icmp + pomxc[0x0]['length'], $7bl92['lineNumber']++;
        $7bl92['columnNumber'] = xzmpc - x4icmp + 0x1;
    }
    for (var x4icmp = 0x0, l7bz$ = 0x0, b5vu9 = /.*(?:\r\n?|\n)|.*$/g, $7bl92 = u59vb2['locator'], ol7m = [{ 'currentNSMap': ft3d }], ijgny4 = {}, udvqf = 0x0;;) {
        try {
            var g4njy = z9bl['indexOf']('<', udvqf);
            if (0x0 > g4njy) {
                if (!z9bl['substr'](udvqf)['match'](/^\s*$/)) {
                    var nj_ky = u59vb2['doc'],
                        r3fdt = nj_ky['createTextNode'](z9bl['substr'](udvqf));
                    nj_ky['appendChild'](r3fdt), u59vb2['currentElement'] = r3fdt;
                }
                return;
            }
            switch (g4njy > udvqf && rt16f(g4njy), z9bl['charAt'](g4njy + 0x1)) {
                case '/':
                    var f163tr = z9bl['indexOf']('>', g4njy + 0x3),
                        kgn_jy = z9bl['substring'](g4njy + 0x2, f163tr),
                        hase08 = ol7m['pop']();
                    0x0 > f163tr ? (kgn_jy = z9bl['substring'](g4njy + 0x2)['replace'](/[\s<].*/, ''), wken8['error']('end tag name: ' + kgn_jy + ' is not complete:' + hase08['tagName']), f163tr = g4njy + 0x1 + kgn_jy['length']) : kgn_jy['match'](/\s</) && (kgn_jy = kgn_jy['replace'](/[\s<].*/, ''), wken8['error']('end tag name: ' + kgn_jy + ' maybe not complete'), f163tr = g4njy + 0x1 + kgn_jy['length']);
                    var fq6rdt = hase08['localNSMap'],
                        rt3f6d = hase08['tagName'] == kgn_jy,
                        gijy4n = rt3f6d || hase08['tagName'] && hase08['tagName']['toLowerCase']() == kgn_jy['toLowerCase']();
                    if (gijy4n) {
                        if (u59vb2['endElement'](hase08['uri'], hase08['localName'], kgn_jy), fq6rdt) {
                            for (var n_kwje in fq6rdt) u59vb2['endPrefixMapping'](n_kwje);
                        }
                        rt3f6d || wken8['fatalError']('end tag name: ' + kgn_jy + ' is not match the current start tagName:' + hase08['tagName']);
                    } else ol7m['push'](hase08);
                    f163tr++;
                    break;
                case '?':
                    $7bl92 && polm(g4njy), f163tr = _deha08(z9bl, g4njy, u59vb2);
                    break;
                case '!':
                    $7bl92 && polm(g4njy), f163tr = _denj_k(z9bl, g4njy, u59vb2, wken8);
                    break;
                default:
                    $7bl92 && polm(g4njy);
                    var ixjy4g = new _dudqv25(),
                        dvuqf = ol7m[ol7m['length'] - 0x1]['currentNSMap'],
                        f163tr = _docxzmp(z9bl, g4njy, ixjy4g, dvuqf, ozl7$, wken8),
                        $7lbz = ixjy4g['length'];
                    if (!ixjy4g['closed'] && _db92vu$(z9bl, f163tr, ixjy4g['tagName'], ijgny4) && (ixjy4g['closed'] = !0x0, $bloz7['nbsp'] || wken8['warning']('unclosed xml attribute')), $7bl92 && $7lbz) {
                        for (var gjny_k = _dnwky_($7bl92, {}), j_wkny = 0x0; $7lbz > j_wkny; j_wkny++) {
                            var gypix = ixjy4g[j_wkny];
                            polm(gypix['offset']), gypix['locator'] = _dnwky_($7bl92, {});
                        }
                        u59vb2['locator'] = gjny_k, _ddf56q(ixjy4g, u59vb2, dvuqf) && ol7m['push'](ixjy4g), u59vb2['locator'] = $7bl92;
                    } else _ddf56q(ixjy4g, u59vb2, dvuqf) && ol7m['push'](ixjy4g);
                    'http://www.w3.org/1999/xhtml' !== ixjy4g['uri'] || ixjy4g['closed'] ? f163tr++ : f163tr = _dhe8kw(z9bl, f163tr, ixjy4g['tagName'], ozl7$, u59vb2);
            }
        } catch (_knwe8) {
            wken8['error']('element parse error: ' + _knwe8), f163tr = -0x1;
        }
        f163tr > udvqf ? udvqf = f163tr : rt16f(Math['max'](g4njy, udvqf) + 0x1);
    }
}
function _dnwky_($l72b, dqu25v) {
    return dqu25v['lineNumber'] = $l72b['lineNumber'], dqu25v['columnNumber'] = $l72b['columnNumber'], dqu25v;
}
function _docxzmp(xzcpmo, qufd56, swea8h, u$vb92, v5ub92, c4x) {
    for (var wn_k8, tqr6d, u2vq5 = ++qufd56, gipcx4 = _dcol7;;) {
        var seh8aw = xzcpmo['charAt'](u2vq5);
        switch (seh8aw) {
            case '=':
                if (gipcx4 === _dtdfq) wn_k8 = xzcpmo['slice'](qufd56, u2vq5), gipcx4 = _dr3fd6;else {
                    if (gipcx4 !== _dy_nk) throw new Error('attribute equal must after attrName');
                    gipcx4 = _dr3fd6;
                }
                break;
            case '\x27':
            case '\x22':
                if (gipcx4 === _dr3fd6 || gipcx4 === _dtdfq) {
                    if (gipcx4 === _dtdfq && (c4x['warning']('attribute value must after "="'), wn_k8 = xzcpmo['slice'](qufd56, u2vq5)), qufd56 = u2vq5 + 0x1, u2vq5 = xzcpmo['indexOf'](seh8aw, qufd56), !(u2vq5 > 0x0)) throw new Error('attribute value no end \'' + seh8aw + '\' match');
                    tqr6d = xzcpmo['slice'](qufd56, u2vq5)['replace'](/&#?\w+;/g, v5ub92), swea8h['add'](wn_k8, tqr6d, qufd56 - 0x1), gipcx4 = _dykijg;
                } else {
                    if (gipcx4 != _dnek_w) throw new Error('attribute value must after "="');
                    tqr6d = xzcpmo['slice'](qufd56, u2vq5)['replace'](/&#?\w+;/g, v5ub92), swea8h['add'](wn_k8, tqr6d, qufd56), c4x['warning']('attribute "' + wn_k8 + '" missed start quot(' + seh8aw + ')!!'), qufd56 = u2vq5 + 0x1, gipcx4 = _dykijg;
                }
                break;
            case '/':
                switch (gipcx4) {
                    case _dcol7:
                        swea8h['setTagName'](xzcpmo['slice'](qufd56, u2vq5));
                    case _dykijg:
                    case _di4gcpx:
                    case _dgcxpi:
                        gipcx4 = _dgcxpi, swea8h['closed'] = !0x0;
                    case _dnek_w:
                    case _dtdfq:
                    case _dy_nk:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return c4x['error']('unexpected end of input'), gipcx4 == _dcol7 && swea8h['setTagName'](xzcpmo['slice'](qufd56, u2vq5)), u2vq5;
            case '>':
                switch (gipcx4) {
                    case _dcol7:
                        swea8h['setTagName'](xzcpmo['slice'](qufd56, u2vq5));
                    case _dykijg:
                    case _di4gcpx:
                    case _dgcxpi:
                        break;
                    case _dnek_w:
                    case _dtdfq:
                        tqr6d = xzcpmo['slice'](qufd56, u2vq5), '/' === tqr6d['slice'](-0x1) && (swea8h['closed'] = !0x0, tqr6d = tqr6d['slice'](0x0, -0x1));
                    case _dy_nk:
                        gipcx4 === _dy_nk && (tqr6d = wn_k8), gipcx4 == _dnek_w ? (c4x['warning']('attribute "' + tqr6d + '" missed quot(")!!'), swea8h['add'](wn_k8, tqr6d['replace'](/&#?\w+;/g, v5ub92), qufd56)) : ('http://www.w3.org/1999/xhtml' === u$vb92[''] && tqr6d['match'](/^(?:disabled|checked|selected)$/i) || c4x['warning']('attribute "' + tqr6d + '" missed value!! "' + tqr6d + '" instead!!'), swea8h['add'](tqr6d, tqr6d, qufd56));
                        break;
                    case _dr3fd6:
                        throw new Error('attribute value missed!!');
                }
                return u2vq5;
            case '\u0080':
                seh8aw = '\x20';
            default:
                if ('\x20' >= seh8aw) switch (gipcx4) {
                    case _dcol7:
                        swea8h['setTagName'](xzcpmo['slice'](qufd56, u2vq5)), gipcx4 = _di4gcpx;
                        break;
                    case _dtdfq:
                        wn_k8 = xzcpmo['slice'](qufd56, u2vq5), gipcx4 = _dy_nk;
                        break;
                    case _dnek_w:
                        var tqr6d = xzcpmo['slice'](qufd56, u2vq5)['replace'](/&#?\w+;/g, v5ub92);
                        c4x['warning']('attribute "' + tqr6d + '" missed quot(")!!'), swea8h['add'](wn_k8, tqr6d, qufd56);
                    case _dykijg:
                        gipcx4 = _di4gcpx;
                } else switch (gipcx4) {
                    case _dy_nk:
                        {
                            swea8h['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === u$vb92[''] && wn_k8['match'](/^(?:disabled|checked|selected)$/i) || c4x['warning']('attribute "' + wn_k8 + '" missed value!! "' + wn_k8 + '" instead2!!'), swea8h['add'](wn_k8, wn_k8, qufd56), qufd56 = u2vq5, gipcx4 = _dtdfq;
                        break;
                    case _dykijg:
                        c4x['warning']('attribute space is required"' + wn_k8 + '\x22!!');
                    case _di4gcpx:
                        gipcx4 = _dtdfq, qufd56 = u2vq5;
                        break;
                    case _dr3fd6:
                        gipcx4 = _dnek_w, qufd56 = u2vq5;
                        break;
                    case _dgcxpi:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        u2vq5++;
    }
}
function _ddf56q(ypig4x, m7ol, yijkgn) {
    for (var gxjy4 = ypig4x['tagName'], fdr5 = null, ken_8 = ypig4x['length']; ken_8--;) {
        var sh_we8 = ypig4x[ken_8],
            ubv29 = sh_we8['qName'],
            xgi4j = sh_we8['value'],
            lm$ = ubv29['indexOf'](':');
        if (lm$ > 0x0) var $9z7lb = sh_we8['prefix'] = ubv29['slice'](0x0, lm$),
            gcxpi4 = ubv29['slice'](lm$ + 0x1),
            vud5q2 = 'xmlns' === $9z7lb && gcxpi4;else gcxpi4 = ubv29, $9z7lb = null, vud5q2 = 'xmlns' === ubv29 && '';
        sh_we8['localName'] = gcxpi4, vud5q2 !== !0x1 && (null == fdr5 && (fdr5 = {}, _des_8w(yijkgn, yijkgn = {})), yijkgn[vud5q2] = fdr5[vud5q2] = xgi4j, sh_we8['uri'] = 'http://www.w3.org/2000/xmlns/', m7ol['startPrefixMapping'](vud5q2, xgi4j));
    }
    for (var ken_8 = ypig4x['length']; ken_8--;) {
        sh_we8 = ypig4x[ken_8];
        var $9z7lb = sh_we8['prefix'];
        $9z7lb && ('xml' === $9z7lb && (sh_we8['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== $9z7lb && (sh_we8['uri'] = yijkgn[$9z7lb || '']));
    }
    var lm$ = gxjy4['indexOf'](':');
    lm$ > 0x0 ? ($9z7lb = ypig4x['prefix'] = gxjy4['slice'](0x0, lm$), gcxpi4 = ypig4x['localName'] = gxjy4['slice'](lm$ + 0x1)) : ($9z7lb = null, gcxpi4 = ypig4x['localName'] = gxjy4);
    var gixcp4 = ypig4x['uri'] = yijkgn[$9z7lb || ''];
    if (m7ol['startElement'](gixcp4, gcxpi4, gxjy4, ypig4x), !ypig4x['closed']) return ypig4x['currentNSMap'] = yijkgn, ypig4x['localNSMap'] = fdr5, !0x0;
    if (m7ol['endElement'](gixcp4, gcxpi4, gxjy4), fdr5) {
        for ($9z7lb in fdr5) m7ol['endPrefixMapping']($9z7lb);
    }
}
function _dhe8kw(wyk_jn, nywkj_, xp4gc, l2b$7, df5u) {
    if (/^(?:script|textarea)$/i['test'](xp4gc)) {
        var ijg4yn = wyk_jn['indexOf']('</' + xp4gc + '>', nywkj_),
            cimpx4 = wyk_jn['substring'](nywkj_ + 0x1, ijg4yn);
        if (/[&<]/['test'](cimpx4)) return (/^script$/i['test'](xp4gc) ? (df5u['characters'](cimpx4, 0x0, cimpx4['length']), ijg4yn) : (cimpx4 = cimpx4['replace'](/&#?\w+;/g, l2b$7), df5u['characters'](cimpx4, 0x0, cimpx4['length']), ijg4yn)
        );
    }
    return nywkj_ + 0x1;
}
function _db92vu$(t6dqf, pmo4c, bv2$, oxzmpc) {
    var lb792 = oxzmpc[bv2$];
    return null == lb792 && (lb792 = t6dqf['lastIndexOf']('</' + bv2$ + '>'), pmo4c > lb792 && (lb792 = t6dqf['lastIndexOf']('</' + bv2$)), oxzmpc[bv2$] = lb792), pmo4c > lb792;
}
function _des_8w(iygn4j, gxiy4p) {
    for (var hsa08e in iygn4j) gxiy4p[hsa08e] = iygn4j[hsa08e];
}
function _denj_k(ozxpcm, b5u29, d6r5fq, l$7z) {
    var gk_ynj = ozxpcm['charAt'](b5u29 + 0x2);
    switch (gk_ynj) {
        case '-':
            if ('-' === ozxpcm['charAt'](b5u29 + 0x3)) {
                var qv592u = ozxpcm['indexOf']('-->', b5u29 + 0x4);
                return qv592u > b5u29 ? (d6r5fq['comment'](ozxpcm, b5u29 + 0x4, qv592u - b5u29 - 0x4), qv592u + 0x3) : (l$7z['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == ozxpcm['substr'](b5u29 + 0x3, 0x6)) {
                var qv592u = ozxpcm['indexOf'](']]>', b5u29 + 0x9);
                return d6r5fq['startCDATA'](), d6r5fq['characters'](ozxpcm, b5u29 + 0x9, qv592u - b5u29 - 0x9), d6r5fq['endCDATA'](), qv592u + 0x3;
            }
            var yg4inj = _dfu65(ozxpcm, b5u29),
                $7ozlm = yg4inj['length'];
            if ($7ozlm > 0x1 && /!doctype/i['test'](yg4inj[0x0][0x0])) {
                var aesh08 = yg4inj[0x1][0x0],
                    _nkjyg = $7ozlm > 0x3 && /^public$/i['test'](yg4inj[0x2][0x0]) && yg4inj[0x3][0x0],
                    xpm4i = $7ozlm > 0x4 && yg4inj[0x4][0x0],
                    p4giyx = yg4inj[$7ozlm - 0x1];
                return d6r5fq['startDTD'](aesh08, _nkjyg && _nkjyg['replace'](/^(['"])(.*?)\1$/, '$2'), xpm4i && xpm4i['replace'](/^(['"])(.*?)\1$/, '$2')), d6r5fq['endDTD'](), p4giyx['index'] + p4giyx[0x0]['length'];
            }
    }
    return -0x1;
}
function _deha08(kwnjy, seh8_w, pcg4) {
    var hek8_w = kwnjy['indexOf']('?>', seh8_w);
    if (hek8_w) {
        var z7o$lm = kwnjy['substring'](seh8_w, hek8_w)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (z7o$lm) {
            {
                z7o$lm[0x0]['length'];
            }
            return pcg4['processingInstruction'](z7o$lm[0x1], z7o$lm[0x2]), hek8_w + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function _dudqv25() {}
function _d$l7bzo(nyj_, opcxzm) {
    return nyj_['__proto__'] = opcxzm, nyj_;
}
function _dfu65(f65q, ompczl) {
    var cip4,
        ywjk_ = [],
        fud5vq = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (fud5vq['lastIndex'] = ompczl, fud5vq['exec'](f65q); cip4 = fud5vq['exec'](f65q);) if (ywjk_['push'](cip4), cip4[0x1]) return ywjk_;
}
var _do7mlz = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    _dqdtr = new RegExp('[\\-\\.0-9' + _do7mlz['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    _dehs80a = new RegExp('^' + _do7mlz['source'] + _dqdtr['source'] + '*(?::' + _do7mlz['source'] + _dqdtr['source'] + '*)?$'),
    _dcol7 = 0x0,
    _dtdfq = 0x1,
    _dy_nk = 0x2,
    _dr3fd6 = 0x3,
    _dnek_w = 0x4,
    _dykijg = 0x5,
    _di4gcpx = 0x6,
    _dgcxpi = 0x7;
_du29b5v['prototype'] = {
    'parse': function ($97bz, vu$b29, r631) {
        var xgpci = this['domBuilder'];
        xgpci['startDocument'](), _des_8w(vu$b29, vu$b29 = {}), _dox4($97bz, vu$b29, r631, xgpci, this['errorHandler']), xgpci['endDocument']();
    }
}, _dudqv25['prototype'] = {
    'setTagName': function (d5qufv) {
        if (!_dehs80a['test'](d5qufv)) throw new Error('invalid tagName:' + d5qufv);
        this['tagName'] = d5qufv;
    },
    'add': function (dquf5, wn_e8k, tf63rd) {
        if (!_dehs80a['test'](dquf5)) throw new Error('invalid attribute:' + dquf5);
        this[this['length']++] = {
            'qName': dquf5,
            'value': wn_e8k,
            'offset': tf63rd
        };
    },
    'length': 0x0,
    'getLocalName': function (jyix) {
        return this[jyix]['localName'];
    },
    'getLocator': function (uvdq2) {
        return this[uvdq2]['locator'];
    },
    'getQName': function ($7zml) {
        return this[$7zml]['qName'];
    },
    'getURI': function ($om7z) {
        return this[$om7z]['uri'];
    },
    'getValue': function (x4po) {
        return this[x4po]['value'];
    }
}, _d$l7bzo({}, _d$l7bzo['prototype']) instanceof _d$l7bzo || (_d$l7bzo = function ($ub29, f65uqd) {
    function r6t13() {}
    r6t13['prototype'] = f65uqd, r6t13 = new r6t13();
    for (f65uqd in $ub29) r6t13[f65uqd] = $ub29[f65uqd];
    return r6t13;
}), exports['XMLReader'] = _du29b5v;