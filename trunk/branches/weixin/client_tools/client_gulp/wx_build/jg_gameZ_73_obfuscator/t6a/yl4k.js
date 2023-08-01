var z1 = wx.Z$;
function _yico4ap() {}
function _ys6eydj(xd6y7, j8eqb6, $z3w09, fhk5gn, opaic) {
    function es86qj(vpi4) {
        if (vpi4 > 0xffff) {
            vpi4 -= 0x10000;
            var k5fl = 0xd800 + (vpi4 >> 0xa),
                b8uej = 0xdc00 + (0x3ff & vpi4);
            return String['fromCharCode'](k5fl, b8uej);
        }
        return String['fromCharCode'](vpi4);
    }
    function wr023(r30z$) {
        var z9n3 = r30z$['slice'](0x1, -0x1);
        return z9n3 in $z3w09 ? $z3w09[z9n3] : '#' === z9n3['charAt'](0x0) ? es86qj(parseInt(z9n3['substr'](0x1)['replace']('x', '0x'))) : (opaic['error']('entity not found:' + r30z$), r30z$);
    }
    function fg_t(_mtap) {
        if (_mtap > y127x) {
            var a_ptc = xd6y7['substring'](y127x, _mtap)['replace'](/&#?\w+;/g, wr023);
            gfmhlt && x7$21r(y127x), fhk5gn['characters'](a_ptc, 0x0, _mtap - y127x), y127x = _mtap;
        }
    }
    function x7$21r(tgl_fm, pi_at) {
        for (; tgl_fm >= gnkh && (pi_at = poaci4['exec'](xd6y7));) sdy6x = pi_at['index'], gnkh = sdy6x + pi_at[0x0]['length'], gfmhlt['lineNumber']++;
        gfmhlt['columnNumber'] = tgl_fm - sdy6x + 0x1;
    }
    for (var sdy6x = 0x0, gnkh = 0x0, poaci4 = /.*(?:\r\n?|\n)|.*$/g, gfmhlt = fhk5gn['locator'], cp_oai = [{ 'currentNSMap': j8eqb6 }], w03z$ = {}, y127x = 0x0;;) {
        try {
            var sq68j = xd6y7['indexOf']('<', y127x);
            if (0x0 > sq68j) {
                if (!xd6y7['substr'](y127x)['match'](/^\s*$/)) {
                    var va4oip = fhk5gn['doc'],
                        s6ed = va4oip['createTextNode'](xd6y7['substr'](y127x));
                    va4oip['appendChild'](s6ed), fhk5gn['currentElement'] = s6ed;
                }
                return;
            }
            switch (sq68j > y127x && fg_t(sq68j), xd6y7['charAt'](sq68j + 0x1)) {
                case '/':
                    var tgflhm = xd6y7['indexOf']('>', sq68j + 0x3),
                        $302rw = xd6y7['substring'](sq68j + 0x2, tgflhm),
                        y21x7d = cp_oai['pop']();
                    0x0 > tgflhm ? ($302rw = xd6y7['substring'](sq68j + 0x2)['replace'](/[\s<].*/, ''), opaic['error']('end tag name: ' + $302rw + ' is not complete:' + y21x7d['tagName']), tgflhm = sq68j + 0x1 + $302rw['length']) : $302rw['match'](/\s</) && ($302rw = $302rw['replace'](/[\s<].*/, ''), opaic['error']('end tag name: ' + $302rw + ' maybe not complete'), tgflhm = sq68j + 0x1 + $302rw['length']);
                    var pai = y21x7d['localNSMap'],
                        n95z3w = y21x7d['tagName'] == $302rw,
                        nw5z9 = n95z3w || y21x7d['tagName'] && y21x7d['tagName']['toLowerCase']() == $302rw['toLowerCase']();
                    if (nw5z9) {
                        if (fhk5gn['endElement'](y21x7d['uri'], y21x7d['localName'], $302rw), pai) {
                            for (var sy7dx6 in pai) fhk5gn['endPrefixMapping'](sy7dx6);
                        }
                        n95z3w || opaic['fatalError']('end tag name: ' + $302rw + ' is not match the current start tagName:' + y21x7d['tagName']);
                    } else cp_oai['push'](y21x7d);
                    tgflhm++;
                    break;
                case '?':
                    gfmhlt && x7$21r(sq68j), tgflhm = _ymfl(xd6y7, sq68j, fhk5gn);
                    break;
                case '!':
                    gfmhlt && x7$21r(sq68j), tgflhm = _yr2x10$(xd6y7, sq68j, fhk5gn, opaic);
                    break;
                default:
                    gfmhlt && x7$21r(sq68j);
                    var jqb86 = new _yi4ca(),
                        mlatc = cp_oai[cp_oai['length'] - 0x1]['currentNSMap'],
                        tgflhm = _yhlf5kg(xd6y7, sq68j, jqb86, mlatc, wr023, opaic),
                        jye6 = jqb86['length'];
                    if (!jqb86['closed'] && _yapoi4(xd6y7, tgflhm, jqb86['tagName'], w03z$) && (jqb86['closed'] = !0x0, $z3w09['nbsp'] || opaic['warning']('unclosed xml attribute')), gfmhlt && jye6) {
                        for (var pc_mat = _yj6s8qe(gfmhlt, {}), fhtm = 0x0; jye6 > fhtm; fhtm++) {
                            var yj6sd7 = jqb86[fhtm];
                            x7$21r(yj6sd7['offset']), yj6sd7['locator'] = _yj6s8qe(gfmhlt, {});
                        }
                        fhk5gn['locator'] = pc_mat, _yhltg(jqb86, fhk5gn, mlatc) && cp_oai['push'](jqb86), fhk5gn['locator'] = gfmhlt;
                    } else _yhltg(jqb86, fhk5gn, mlatc) && cp_oai['push'](jqb86);
                    'http://www.w3.org/1999/xhtml' !== jqb86['uri'] || jqb86['closed'] ? tgflhm++ : tgflhm = _yxs67dy(xd6y7, tgflhm, jqb86['tagName'], wr023, fhk5gn);
            }
        } catch (ioc_p) {
            opaic['error']('element parse error: ' + ioc_p), tgflhm = -0x1;
        }
        tgflhm > y127x ? y127x = tgflhm : fg_t(Math['max'](sq68j, y127x) + 0x1);
    }
}
function _yj6s8qe($x12r0, tmfcl_) {
    return tmfcl_['lineNumber'] = $x12r0['lineNumber'], tmfcl_['columnNumber'] = $x12r0['columnNumber'], tmfcl_;
}
function _yhlf5kg(i_c, k9n5z3, ghlfk5, j7dsy6, r230w$, iop4c) {
    for (var wz09n3, aio4v, nw93z = ++k9n5z3, z039$w = _yoipva4;;) {
        var eb8jq = i_c['charAt'](nw93z);
        switch (eb8jq) {
            case '=':
                if (z039$w === _ydx12y) wz09n3 = i_c['slice'](k9n5z3, nw93z), z039$w = _yglhmfk;else {
                    if (z039$w !== _y_patc) throw new Error('attribute equal must after attrName');
                    z039$w = _yglhmfk;
                }
                break;
            case '\x27':
            case '\x22':
                if (z039$w === _yglhmfk || z039$w === _ydx12y) {
                    if (z039$w === _ydx12y && (iop4c['warning']('attribute value must after "="'), wz09n3 = i_c['slice'](k9n5z3, nw93z)), k9n5z3 = nw93z + 0x1, nw93z = i_c['indexOf'](eb8jq, k9n5z3), !(nw93z > 0x0)) throw new Error('attribute value no end \'' + eb8jq + '\' match');
                    aio4v = i_c['slice'](k9n5z3, nw93z)['replace'](/&#?\w+;/g, r230w$), ghlfk5['add'](wz09n3, aio4v, k9n5z3 - 0x1), z039$w = _ymlct_a;
                } else {
                    if (z039$w != _ypvai4) throw new Error('attribute value must after "="');
                    aio4v = i_c['slice'](k9n5z3, nw93z)['replace'](/&#?\w+;/g, r230w$), ghlfk5['add'](wz09n3, aio4v, k9n5z3), iop4c['warning']('attribute "' + wz09n3 + '" missed start quot(' + eb8jq + ')!!'), k9n5z3 = nw93z + 0x1, z039$w = _ymlct_a;
                }
                break;
            case '/':
                switch (z039$w) {
                    case _yoipva4:
                        ghlfk5['setTagName'](i_c['slice'](k9n5z3, nw93z));
                    case _ymlct_a:
                    case _ydyjse:
                    case _y$r0w2:
                        z039$w = _y$r0w2, ghlfk5['closed'] = !0x0;
                    case _ypvai4:
                    case _ydx12y:
                    case _y_patc:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return iop4c['error']('unexpected end of input'), z039$w == _yoipva4 && ghlfk5['setTagName'](i_c['slice'](k9n5z3, nw93z)), nw93z;
            case '>':
                switch (z039$w) {
                    case _yoipva4:
                        ghlfk5['setTagName'](i_c['slice'](k9n5z3, nw93z));
                    case _ymlct_a:
                    case _ydyjse:
                    case _y$r0w2:
                        break;
                    case _ypvai4:
                    case _ydx12y:
                        aio4v = i_c['slice'](k9n5z3, nw93z), '/' === aio4v['slice'](-0x1) && (ghlfk5['closed'] = !0x0, aio4v = aio4v['slice'](0x0, -0x1));
                    case _y_patc:
                        z039$w === _y_patc && (aio4v = wz09n3), z039$w == _ypvai4 ? (iop4c['warning']('attribute "' + aio4v + '" missed quot(")!!'), ghlfk5['add'](wz09n3, aio4v['replace'](/&#?\w+;/g, r230w$), k9n5z3)) : ('http://www.w3.org/1999/xhtml' === j7dsy6[''] && aio4v['match'](/^(?:disabled|checked|selected)$/i) || iop4c['warning']('attribute "' + aio4v + '" missed value!! "' + aio4v + '" instead!!'), ghlfk5['add'](aio4v, aio4v, k9n5z3));
                        break;
                    case _yglhmfk:
                        throw new Error('attribute value missed!!');
                }
                return nw93z;
            case '\u0080':
                eb8jq = '\x20';
            default:
                if ('\x20' >= eb8jq) switch (z039$w) {
                    case _yoipva4:
                        ghlfk5['setTagName'](i_c['slice'](k9n5z3, nw93z)), z039$w = _ydyjse;
                        break;
                    case _ydx12y:
                        wz09n3 = i_c['slice'](k9n5z3, nw93z), z039$w = _y_patc;
                        break;
                    case _ypvai4:
                        var aio4v = i_c['slice'](k9n5z3, nw93z)['replace'](/&#?\w+;/g, r230w$);
                        iop4c['warning']('attribute "' + aio4v + '" missed quot(")!!'), ghlfk5['add'](wz09n3, aio4v, k9n5z3);
                    case _ymlct_a:
                        z039$w = _ydyjse;
                } else switch (z039$w) {
                    case _y_patc:
                        {
                            ghlfk5['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === j7dsy6[''] && wz09n3['match'](/^(?:disabled|checked|selected)$/i) || iop4c['warning']('attribute "' + wz09n3 + '" missed value!! "' + wz09n3 + '" instead2!!'), ghlfk5['add'](wz09n3, wz09n3, k9n5z3), k9n5z3 = nw93z, z039$w = _ydx12y;
                        break;
                    case _ymlct_a:
                        iop4c['warning']('attribute space is required"' + wz09n3 + '\x22!!');
                    case _ydyjse:
                        z039$w = _ydx12y, k9n5z3 = nw93z;
                        break;
                    case _yglhmfk:
                        z039$w = _ypvai4, k9n5z3 = nw93z;
                        break;
                    case _y$r0w2:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        nw93z++;
    }
}
function _yhltg(n3z, xr20$1, y72dx1) {
    for (var yje6ds = n3z['tagName'], jy7sd = null, w90$3z = n3z['length']; w90$3z--;) {
        var w$320r = n3z[w90$3z],
            rw1 = w$320r['qName'],
            _mtflg = w$320r['value'],
            f_tc = rw1['indexOf'](':');
        if (f_tc > 0x0) var xrd712 = w$320r['prefix'] = rw1['slice'](0x0, f_tc),
            pamct_ = rw1['slice'](f_tc + 0x1),
            n39zw5 = 'xmlns' === xrd712 && pamct_;else pamct_ = rw1, xrd712 = null, n39zw5 = 'xmlns' === rw1 && '';
        w$320r['localName'] = pamct_, n39zw5 !== !0x1 && (null == jy7sd && (jy7sd = {}, _yi_tpac(y72dx1, y72dx1 = {})), y72dx1[n39zw5] = jy7sd[n39zw5] = _mtflg, w$320r['uri'] = 'http://www.w3.org/2000/xmlns/', xr20$1['startPrefixMapping'](n39zw5, _mtflg));
    }
    for (var w90$3z = n3z['length']; w90$3z--;) {
        w$320r = n3z[w90$3z];
        var xrd712 = w$320r['prefix'];
        xrd712 && ('xml' === xrd712 && (w$320r['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== xrd712 && (w$320r['uri'] = y72dx1[xrd712 || '']));
    }
    var f_tc = yje6ds['indexOf'](':');
    f_tc > 0x0 ? (xrd712 = n3z['prefix'] = yje6ds['slice'](0x0, f_tc), pamct_ = n3z['localName'] = yje6ds['slice'](f_tc + 0x1)) : (xrd712 = null, pamct_ = n3z['localName'] = yje6ds);
    var u8qbe = n3z['uri'] = y72dx1[xrd712 || ''];
    if (xr20$1['startElement'](u8qbe, pamct_, yje6ds, n3z), !n3z['closed']) return n3z['currentNSMap'] = y72dx1, n3z['localNSMap'] = jy7sd, !0x0;
    if (xr20$1['endElement'](u8qbe, pamct_, yje6ds), jy7sd) {
        for (xrd712 in jy7sd) xr20$1['endPrefixMapping'](xrd712);
    }
}
function _yxs67dy(w9nz03, yje68, tlhgm, hn9kz5, nzk5h) {
    if (/^(?:script|textarea)$/i['test'](tlhgm)) {
        var wz03$r = w9nz03['indexOf']('</' + tlhgm + '>', yje68),
            acm_tp = w9nz03['substring'](yje68 + 0x1, wz03$r);
        if (/[&<]/['test'](acm_tp)) return (/^script$/i['test'](tlhgm) ? (nzk5h['characters'](acm_tp, 0x0, acm_tp['length']), wz03$r) : (acm_tp = acm_tp['replace'](/&#?\w+;/g, hn9kz5), nzk5h['characters'](acm_tp, 0x0, acm_tp['length']), wz03$r)
        );
    }
    return yje68 + 0x1;
}
function _yapoi4(euq8, c_iao, m_pat, knh95g) {
    var tpam_ = knh95g[m_pat];
    return null == tpam_ && (tpam_ = euq8['lastIndexOf']('</' + m_pat + '>'), c_iao > tpam_ && (tpam_ = euq8['lastIndexOf']('</' + m_pat)), knh95g[m_pat] = tpam_), c_iao > tpam_;
}
function _yi_tpac(fhgk5n, yd17xs) {
    for (var uej8q in fhgk5n) yd17xs[uej8q] = fhgk5n[uej8q];
}
function _yr2x10$(jsy8e6, eyjs86, rdx1, esyj68) {
    var _lftcm = jsy8e6['charAt'](eyjs86 + 0x2);
    switch (_lftcm) {
        case '-':
            if ('-' === jsy8e6['charAt'](eyjs86 + 0x3)) {
                var mlatc_ = jsy8e6['indexOf']('-->', eyjs86 + 0x4);
                return mlatc_ > eyjs86 ? (rdx1['comment'](jsy8e6, eyjs86 + 0x4, mlatc_ - eyjs86 - 0x4), mlatc_ + 0x3) : (esyj68['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == jsy8e6['substr'](eyjs86 + 0x3, 0x6)) {
                var mlatc_ = jsy8e6['indexOf'](']]>', eyjs86 + 0x9);
                return rdx1['startCDATA'](), rdx1['characters'](jsy8e6, eyjs86 + 0x9, mlatc_ - eyjs86 - 0x9), rdx1['endCDATA'](), mlatc_ + 0x3;
            }
            var ait_cp = _yo4iav(jsy8e6, eyjs86),
                ta_cml = ait_cp['length'];
            if (ta_cml > 0x1 && /!doctype/i['test'](ait_cp[0x0][0x0])) {
                var gf_lmt = ait_cp[0x1][0x0],
                    w2$r3 = ta_cml > 0x3 && /^public$/i['test'](ait_cp[0x2][0x0]) && ait_cp[0x3][0x0],
                    fc_ltm = ta_cml > 0x4 && ait_cp[0x4][0x0],
                    tmf_g = ait_cp[ta_cml - 0x1];
                return rdx1['startDTD'](gf_lmt, w2$r3 && w2$r3['replace'](/^(['"])(.*?)\1$/, '$2'), fc_ltm && fc_ltm['replace'](/^(['"])(.*?)\1$/, '$2')), rdx1['endDTD'](), tmf_g['index'] + tmf_g[0x0]['length'];
            }
    }
    return -0x1;
}
function _ymfl(mclft, ju8beq, x7r2$) {
    var m_la = mclft['indexOf']('?>', ju8beq);
    if (m_la) {
        var g95nk = mclft['substring'](ju8beq, m_la)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (g95nk) {
            {
                g95nk[0x0]['length'];
            }
            return x7r2$['processingInstruction'](g95nk[0x1], g95nk[0x2]), m_la + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function _yi4ca() {}
function _yqujeb(l_ctm, $r17x) {
    return l_ctm['__proto__'] = $r17x, l_ctm;
}
function _yo4iav(mtcp_, ysej8) {
    var ioc_ap,
        tla_m = [],
        sje8q6 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (sje8q6['lastIndex'] = ysej8, sje8q6['exec'](mtcp_); ioc_ap = sje8q6['exec'](mtcp_);) if (tla_m['push'](ioc_ap), ioc_ap[0x1]) return tla_m;
}
var _ylcm_a = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    _ydyjs7 = new RegExp('[\\-\\.0-9' + _ylcm_a['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    _yr7x12$ = new RegExp('^' + _ylcm_a['source'] + _ydyjs7['source'] + '*(?::' + _ylcm_a['source'] + _ydyjs7['source'] + '*)?$'),
    _yoipva4 = 0x0,
    _ydx12y = 0x1,
    _y_patc = 0x2,
    _yglhmfk = 0x3,
    _ypvai4 = 0x4,
    _ymlct_a = 0x5,
    _ydyjse = 0x6,
    _y$r0w2 = 0x7;
_yico4ap['prototype'] = {
    'parse': function (dr21x, lmtc, s6dyje) {
        var zn0w93 = this['domBuilder'];
        zn0w93['startDocument'](), _yi_tpac(lmtc, lmtc = {}), _ys6eydj(dr21x, lmtc, s6dyje, zn0w93, this['errorHandler']), zn0w93['endDocument']();
    }
}, _yi4ca['prototype'] = {
    'setTagName': function (hlgfkm) {
        if (!_yr7x12$['test'](hlgfkm)) throw new Error('invalid tagName:' + hlgfkm);
        this['tagName'] = hlgfkm;
    },
    'add': function (p4vi, tfl_gm, lfk5) {
        if (!_yr7x12$['test'](p4vi)) throw new Error('invalid attribute:' + p4vi);
        this[this['length']++] = {
            'qName': p4vi,
            'value': tfl_gm,
            'offset': lfk5
        };
    },
    'length': 0x0,
    'getLocalName': function (r$0zw3) {
        return this[r$0zw3]['localName'];
    },
    'getLocator': function (ct_i) {
        return this[ct_i]['locator'];
    },
    'getQName': function (js7d6y) {
        return this[js7d6y]['qName'];
    },
    'getURI': function (lfmc) {
        return this[lfmc]['uri'];
    },
    'getValue': function (tm_pac) {
        return this[tm_pac]['value'];
    }
}, _yqujeb({}, _yqujeb['prototype']) instanceof _yqujeb || (_yqujeb = function (hflmgk, d7xsy) {
    function pc4oa() {}
    pc4oa['prototype'] = d7xsy, pc4oa = new pc4oa();
    for (d7xsy in hflmgk) pc4oa[d7xsy] = hflmgk[d7xsy];
    return pc4oa;
}), exports['XMLReader'] = _yico4ap;