var u = wx.$x;
function xnzm_sr() {}
function xu109w(sr_mz$, r_qs$e, tyi2x, gw910p, l38e$q) {
    function r$m_z(serq) {
        if (serq > 0xffff) {
            serq -= 0x10000;
            var ka75v6 = 0xd800 + (serq >> 0xa),
                k5fdo = 0xdc00 + (0x3ff & serq);
            return String['fromCharCode'](ka75v6, k5fdo);
        }
        return String['fromCharCode'](serq);
    }
    function mnz_s(l7va8) {
        var uw0o1d = l7va8['slice'](0x1, -0x1);
        return uw0o1d in tyi2x ? tyi2x[uw0o1d] : '#' === uw0o1d['charAt'](0x0) ? r$m_z(parseInt(uw0o1d['substr'](0x1)['replace']('x', '0x'))) : (l38e$q['error']('entity not found:' + l7va8), l7va8);
    }
    function g10p9w(p90w1u) {
        if (p90w1u > nmbzx) {
            var e8l6 = sr_mz$['substring'](nmbzx, p90w1u)['replace'](/&#?\w+;/g, mnz_s);
            bxzmn && sr_nzm(nmbzx), gw910p['characters'](e8l6, 0x0, p90w1u - nmbzx), nmbzx = p90w1u;
        }
    }
    function sr_nzm(xntz, ji) {
        for (; xntz >= ql86 && (ji = nmzrsb['exec'](sr_mz$));) v5kaf = ji['index'], ql86 = v5kaf + ji[0x0]['length'], bxzmn['lineNumber']++;
        bxzmn['columnNumber'] = xntz - v5kaf + 0x1;
    }
    for (var v5kaf = 0x0, ql86 = 0x0, nmzrsb = /.*(?:\r\n?|\n)|.*$/g, bxzmn = gw910p['locator'], vaf7k5 = [{ 'currentNSMap': r_qs$e }], tsmnzb = {}, nmbzx = 0x0;;) {
        try {
            var $el3q = sr_mz$['indexOf']('<', nmbzx);
            if (0x0 > $el3q) {
                if (!sr_mz$['substr'](nmbzx)['match'](/^\s*$/)) {
                    var _r$mzs = gw910p['doc'],
                        ixynb = _r$mzs['createTextNode'](sr_mz$['substr'](nmbzx));
                    _r$mzs['appendChild'](ixynb), gw910p['currentElement'] = ixynb;
                }
                return;
            }
            switch ($el3q > nmbzx && g10p9w($el3q), sr_mz$['charAt']($el3q + 0x1)) {
                case '/':
                    var z$rms = sr_mz$['indexOf']('>', $el3q + 0x3),
                        tsb = sr_mz$['substring']($el3q + 0x2, z$rms),
                        uodw = vaf7k5['pop']();
                    0x0 > z$rms ? (tsb = sr_mz$['substring']($el3q + 0x2)['replace'](/[\s<].*/, ''), l38e$q['error']('end tag name: ' + tsb + ' is not complete:' + uodw['tagName']), z$rms = $el3q + 0x1 + tsb['length']) : tsb['match'](/\s</) && (tsb = tsb['replace'](/[\s<].*/, ''), l38e$q['error']('end tag name: ' + tsb + ' maybe not complete'), z$rms = $el3q + 0x1 + tsb['length']);
                    var g91w = uodw['localNSMap'],
                        jcyi2 = uodw['tagName'] == tsb,
                        uw4do1 = jcyi2 || uodw['tagName'] && uodw['tagName']['toLowerCase']() == tsb['toLowerCase']();
                    if (uw4do1) {
                        if (gw910p['endElement'](uodw['uri'], uodw['localName'], tsb), g91w) {
                            for (var s$qe in g91w) gw910p['endPrefixMapping'](s$qe);
                        }
                        jcyi2 || l38e$q['fatalError']('end tag name: ' + tsb + ' is not match the current start tagName:' + uodw['tagName']);
                    } else vaf7k5['push'](uodw);
                    z$rms++;
                    break;
                case '?':
                    bxzmn && sr_nzm($el3q), z$rms = xf4ud5o(sr_mz$, $el3q, gw910p);
                    break;
                case '!':
                    bxzmn && sr_nzm($el3q), z$rms = xyx2chi(sr_mz$, $el3q, gw910p, l38e$q);
                    break;
                default:
                    bxzmn && sr_nzm($el3q);
                    var nbitx = new xtmszb(),
                        q3el = vaf7k5[vaf7k5['length'] - 0x1]['currentNSMap'],
                        z$rms = xht2yi(sr_mz$, $el3q, nbitx, q3el, mnz_s, l38e$q),
                        er$_sm = nbitx['length'];
                    if (!nbitx['closed'] && x_3re(sr_mz$, z$rms, nbitx['tagName'], tsmnzb) && (nbitx['closed'] = !0x0, tyi2x['nbsp'] || l38e$q['warning']('unclosed xml attribute')), bxzmn && er$_sm) {
                        for (var v6 = xd5a(bxzmn, {}), e_mrs$ = 0x0; er$_sm > e_mrs$; e_mrs$++) {
                            var nztmbx = nbitx[e_mrs$];
                            sr_nzm(nztmbx['offset']), nztmbx['locator'] = xd5a(bxzmn, {});
                        }
                        gw910p['locator'] = v6, xiytx2(nbitx, gw910p, q3el) && vaf7k5['push'](nbitx), gw910p['locator'] = bxzmn;
                    } else xiytx2(nbitx, gw910p, q3el) && vaf7k5['push'](nbitx);
                    'http://www.w3.org/1999/xhtml' !== nbitx['uri'] || nbitx['closed'] ? z$rms++ : z$rms = xhxi2c(sr_mz$, z$rms, nbitx['tagName'], mnz_s, gw910p);
            }
        } catch (e$rq_) {
            l38e$q['error']('element parse error: ' + e$rq_), z$rms = -0x1;
        }
        z$rms > nmbzx ? nmbzx = z$rms : g10p9w(Math['max']($el3q, nmbzx) + 0x1);
    }
}
function xd5a(s_nr, xity2) {
    return xity2['lineNumber'] = s_nr['lineNumber'], xity2['columnNumber'] = s_nr['columnNumber'], xity2;
}
function xht2yi(eq_$r3, u45fd, rns_m, tinbyx, du10w, rmbnsz) {
    for (var pu019w, mxbtz, thbix = ++u45fd, wuo10d = xxnbi;;) {
        var $rzms_ = eq_$r3['charAt'](thbix);
        switch ($rzms_) {
            case '=':
                if (wuo10d === xxmtbn) pu019w = eq_$r3['slice'](u45fd, thbix), wuo10d = xkv45fa;else {
                    if (wuo10d !== xp1o0wu) throw new Error('attribute equal must after attrName');
                    wuo10d = xkv45fa;
                }
                break;
            case '\x27':
            case '\x22':
                if (wuo10d === xkv45fa || wuo10d === xxmtbn) {
                    if (wuo10d === xxmtbn && (rmbnsz['warning']('attribute value must after "="'), pu019w = eq_$r3['slice'](u45fd, thbix)), u45fd = thbix + 0x1, thbix = eq_$r3['indexOf']($rzms_, u45fd), !(thbix > 0x0)) throw new Error('attribute value no end \'' + $rzms_ + '\' match');
                    mxbtz = eq_$r3['slice'](u45fd, thbix)['replace'](/&#?\w+;/g, du10w), rns_m['add'](pu019w, mxbtz, u45fd - 0x1), wuo10d = xntbxzi;
                } else {
                    if (wuo10d != xkd4f5o) throw new Error('attribute value must after "="');
                    mxbtz = eq_$r3['slice'](u45fd, thbix)['replace'](/&#?\w+;/g, du10w), rns_m['add'](pu019w, mxbtz, u45fd), rmbnsz['warning']('attribute "' + pu019w + '" missed start quot(' + $rzms_ + ')!!'), u45fd = thbix + 0x1, wuo10d = xntbxzi;
                }
                break;
            case '/':
                switch (wuo10d) {
                    case xxnbi:
                        rns_m['setTagName'](eq_$r3['slice'](u45fd, thbix));
                    case xntbxzi:
                    case xemr$s_:
                    case xrmbz:
                        wuo10d = xrmbz, rns_m['closed'] = !0x0;
                    case xkd4f5o:
                    case xxmtbn:
                    case xp1o0wu:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return rmbnsz['error']('unexpected end of input'), wuo10d == xxnbi && rns_m['setTagName'](eq_$r3['slice'](u45fd, thbix)), thbix;
            case '>':
                switch (wuo10d) {
                    case xxnbi:
                        rns_m['setTagName'](eq_$r3['slice'](u45fd, thbix));
                    case xntbxzi:
                    case xemr$s_:
                    case xrmbz:
                        break;
                    case xkd4f5o:
                    case xxmtbn:
                        mxbtz = eq_$r3['slice'](u45fd, thbix), '/' === mxbtz['slice'](-0x1) && (rns_m['closed'] = !0x0, mxbtz = mxbtz['slice'](0x0, -0x1));
                    case xp1o0wu:
                        wuo10d === xp1o0wu && (mxbtz = pu019w), wuo10d == xkd4f5o ? (rmbnsz['warning']('attribute "' + mxbtz + '" missed quot(")!!'), rns_m['add'](pu019w, mxbtz['replace'](/&#?\w+;/g, du10w), u45fd)) : ('http://www.w3.org/1999/xhtml' === tinbyx[''] && mxbtz['match'](/^(?:disabled|checked|selected)$/i) || rmbnsz['warning']('attribute "' + mxbtz + '" missed value!! "' + mxbtz + '" instead!!'), rns_m['add'](mxbtz, mxbtz, u45fd));
                        break;
                    case xkv45fa:
                        throw new Error('attribute value missed!!');
                }
                return thbix;
            case '\u0080':
                $rzms_ = '\x20';
            default:
                if ('\x20' >= $rzms_) switch (wuo10d) {
                    case xxnbi:
                        rns_m['setTagName'](eq_$r3['slice'](u45fd, thbix)), wuo10d = xemr$s_;
                        break;
                    case xxmtbn:
                        pu019w = eq_$r3['slice'](u45fd, thbix), wuo10d = xp1o0wu;
                        break;
                    case xkd4f5o:
                        var mxbtz = eq_$r3['slice'](u45fd, thbix)['replace'](/&#?\w+;/g, du10w);
                        rmbnsz['warning']('attribute "' + mxbtz + '" missed quot(")!!'), rns_m['add'](pu019w, mxbtz, u45fd);
                    case xntbxzi:
                        wuo10d = xemr$s_;
                } else switch (wuo10d) {
                    case xp1o0wu:
                        {
                            rns_m['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === tinbyx[''] && pu019w['match'](/^(?:disabled|checked|selected)$/i) || rmbnsz['warning']('attribute "' + pu019w + '" missed value!! "' + pu019w + '" instead2!!'), rns_m['add'](pu019w, pu019w, u45fd), u45fd = thbix, wuo10d = xxmtbn;
                        break;
                    case xntbxzi:
                        rmbnsz['warning']('attribute space is required"' + pu019w + '\x22!!');
                    case xemr$s_:
                        wuo10d = xxmtbn, u45fd = thbix;
                        break;
                    case xkv45fa:
                        wuo10d = xkd4f5o, u45fd = thbix;
                        break;
                    case xrmbz:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        thbix++;
    }
}
function xiytx2(w0p91g, zbnxit, odkf45) {
    for (var $lqe = w0p91g['tagName'], gp901w = null, d5a4fk = w0p91g['length']; d5a4fk--;) {
        var fok4 = w0p91g[d5a4fk],
            w91gp0 = fok4['qName'],
            o41ufd = fok4['value'],
            zmrbns = w91gp0['indexOf'](':');
        if (zmrbns > 0x0) var cx2h = fok4['prefix'] = w91gp0['slice'](0x0, zmrbns),
            uw1o4d = w91gp0['slice'](zmrbns + 0x1),
            fk54av = 'xmlns' === cx2h && uw1o4d;else uw1o4d = w91gp0, cx2h = null, fk54av = 'xmlns' === w91gp0 && '';
        fok4['localName'] = uw1o4d, fk54av !== !0x1 && (null == gp901w && (gp901w = {}, xs_rmz$(odkf45, odkf45 = {})), odkf45[fk54av] = gp901w[fk54av] = o41ufd, fok4['uri'] = 'http://www.w3.org/2000/xmlns/', zbnxit['startPrefixMapping'](fk54av, o41ufd));
    }
    for (var d5a4fk = w0p91g['length']; d5a4fk--;) {
        fok4 = w0p91g[d5a4fk];
        var cx2h = fok4['prefix'];
        cx2h && ('xml' === cx2h && (fok4['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== cx2h && (fok4['uri'] = odkf45[cx2h || '']));
    }
    var zmrbns = $lqe['indexOf'](':');
    zmrbns > 0x0 ? (cx2h = w0p91g['prefix'] = $lqe['slice'](0x0, zmrbns), uw1o4d = w0p91g['localName'] = $lqe['slice'](zmrbns + 0x1)) : (cx2h = null, uw1o4d = w0p91g['localName'] = $lqe);
    var $eqrs_ = w0p91g['uri'] = odkf45[cx2h || ''];
    if (zbnxit['startElement']($eqrs_, uw1o4d, $lqe, w0p91g), !w0p91g['closed']) return w0p91g['currentNSMap'] = odkf45, w0p91g['localNSMap'] = gp901w, !0x0;
    if (zbnxit['endElement']($eqrs_, uw1o4d, $lqe), gp901w) {
        for (cx2h in gp901w) zbnxit['endPrefixMapping'](cx2h);
    }
}
function xhxi2c(smnzbt, jyi2ch, hcy2ix, hxic2y, v7akl6) {
    if (/^(?:script|textarea)$/i['test'](hcy2ix)) {
        var hj2cyi = smnzbt['indexOf']('</' + hcy2ix + '>', jyi2ch),
            k5o4fd = smnzbt['substring'](jyi2ch + 0x1, hj2cyi);
        if (/[&<]/['test'](k5o4fd)) return (/^script$/i['test'](hcy2ix) ? (v7akl6['characters'](k5o4fd, 0x0, k5o4fd['length']), hj2cyi) : (k5o4fd = k5o4fd['replace'](/&#?\w+;/g, hxic2y), v7akl6['characters'](k5o4fd, 0x0, k5o4fd['length']), hj2cyi)
        );
    }
    return jyi2ch + 0x1;
}
function x_3re(hxy, jh2ci, ybti, u01wop) {
    var k54 = u01wop[ybti];
    return null == k54 && (k54 = hxy['lastIndexOf']('</' + ybti + '>'), jh2ci > k54 && (k54 = hxy['lastIndexOf']('</' + ybti)), u01wop[ybti] = k54), jh2ci > k54;
}
function xs_rmz$(w1od, tsnzm) {
    for (var r$_smz in w1od) tsnzm[r$_smz] = w1od[r$_smz];
}
function xyx2chi(a5k6v7, v8l63, msbzrn, w14d) {
    var i2cjyh = a5k6v7['charAt'](v8l63 + 0x2);
    switch (i2cjyh) {
        case '-':
            if ('-' === a5k6v7['charAt'](v8l63 + 0x3)) {
                var nbsr = a5k6v7['indexOf']('-->', v8l63 + 0x4);
                return nbsr > v8l63 ? (msbzrn['comment'](a5k6v7, v8l63 + 0x4, nbsr - v8l63 - 0x4), nbsr + 0x3) : (w14d['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == a5k6v7['substr'](v8l63 + 0x3, 0x6)) {
                var nbsr = a5k6v7['indexOf'](']]>', v8l63 + 0x9);
                return msbzrn['startCDATA'](), msbzrn['characters'](a5k6v7, v8l63 + 0x9, nbsr - v8l63 - 0x9), msbzrn['endCDATA'](), nbsr + 0x3;
            }
            var lq$3e = xal6v7k(a5k6v7, v8l63),
                u14o = lq$3e['length'];
            if (u14o > 0x1 && /!doctype/i['test'](lq$3e[0x0][0x0])) {
                var a7lkv = lq$3e[0x1][0x0],
                    e36 = u14o > 0x3 && /^public$/i['test'](lq$3e[0x2][0x0]) && lq$3e[0x3][0x0],
                    mr = u14o > 0x4 && lq$3e[0x4][0x0],
                    k7avf = lq$3e[u14o - 0x1];
                return msbzrn['startDTD'](a7lkv, e36 && e36['replace'](/^(['"])(.*?)\1$/, '$2'), mr && mr['replace'](/^(['"])(.*?)\1$/, '$2')), msbzrn['endDTD'](), k7avf['index'] + k7avf[0x0]['length'];
            }
    }
    return -0x1;
}
function xf4ud5o(chx2y, fdo14, zinbt) {
    var avkf7 = chx2y['indexOf']('?>', fdo14);
    if (avkf7) {
        var puw190 = chx2y['substring'](fdo14, avkf7)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (puw190) {
            {
                puw190[0x0]['length'];
            }
            return zinbt['processingInstruction'](puw190[0x1], puw190[0x2]), avkf7 + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function xtmszb() {}
function xq867(_$3e8, f4duo5) {
    return _$3e8['__proto__'] = f4duo5, _$3e8;
}
function xal6v7k(r_$mzs, o4d) {
    var zbxni,
        smr$_ = [],
        kfda = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (kfda['lastIndex'] = o4d, kfda['exec'](r_$mzs); zbxni = kfda['exec'](r_$mzs);) if (smr$_['push'](zbxni), zbxni[0x1]) return smr$_;
}
var xzbxti = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    xl637v8 = new RegExp('[\\-\\.0-9' + xzbxti['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    x_8$q3e = new RegExp('^' + xzbxti['source'] + xl637v8['source'] + '*(?::' + xzbxti['source'] + xl637v8['source'] + '*)?$'),
    xxnbi = 0x0,
    xxmtbn = 0x1,
    xp1o0wu = 0x2,
    xkv45fa = 0x3,
    xkd4f5o = 0x4,
    xntbxzi = 0x5,
    xemr$s_ = 0x6,
    xrmbz = 0x7;
xnzm_sr['prototype'] = {
    'parse': function (q6el8, zrnsb, k57a6v) {
        var zsr$ = this['domBuilder'];
        zsr$['startDocument'](), xs_rmz$(zrnsb, zrnsb = {}), xu109w(q6el8, zrnsb, k57a6v, zsr$, this['errorHandler']), zsr$['endDocument']();
    }
}, xtmszb['prototype'] = {
    'setTagName': function (qer_s) {
        if (!x_8$q3e['test'](qer_s)) throw new Error('invalid tagName:' + qer_s);
        this['tagName'] = qer_s;
    },
    'add': function (_$zms, xtzib, qe$r_s) {
        if (!x_8$q3e['test'](_$zms)) throw new Error('invalid attribute:' + _$zms);
        this[this['length']++] = {
            'qName': _$zms,
            'value': xtzib,
            'offset': qe$r_s
        };
    },
    'length': 0x0,
    'getLocalName': function (k57fva) {
        return this[k57fva]['localName'];
    },
    'getLocator': function (bxnizt) {
        return this[bxnizt]['locator'];
    },
    'getQName': function (ufo45d) {
        return this[ufo45d]['qName'];
    },
    'getURI': function (ql6837) {
        return this[ql6837]['uri'];
    },
    'getValue': function (fad5k4) {
        return this[fad5k4]['value'];
    }
}, xq867({}, xq867['prototype']) instanceof xq867 || (xq867 = function (va56k, rnm_zs) {
    function ou5fd4() {}
    ou5fd4['prototype'] = rnm_zs, ou5fd4 = new ou5fd4();
    for (rnm_zs in va56k) ou5fd4[rnm_zs] = va56k[rnm_zs];
    return ou5fd4;
}), exports['XMLReader'] = xnzm_sr;