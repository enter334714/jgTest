var P = wx.$y;
function Tj9e01() {}
function Tm4bi(tpkwf2, v0e16, yg_qxs, $kpfw2, bm4r37) {
    function r47m3(bmrc3) {
        if (bmrc3 > 0xffff) {
            bmrc3 -= 0x10000;
            var tvpe6 = 0xd800 + (bmrc3 >> 0xa),
                e901 = 0xdc00 + (0x3ff & bmrc3);
            return String['fromCharCode'](tvpe6, e901);
        }
        return String['fromCharCode'](bmrc3);
    }
    function ng8xqy(z6tpwe) {
        var okfd$2 = z6tpwe['slice'](0x1, -0x1);
        return okfd$2 in yg_qxs ? yg_qxs[okfd$2] : '#' === okfd$2['charAt'](0x0) ? r47m3(parseInt(okfd$2['substr'](0x1)['replace']('x', '0x'))) : (bm4r37['error']('entity not found:' + z6tpwe), z6tpwe);
    }
    function d8f$ko(slcyr_) {
        if (slcyr_ > odng8) {
            var ft2zp = tpkwf2['substring'](odng8, slcyr_)['replace'](/&#?\w+;/g, ng8xqy);
            bmi743 && odx8(odng8), $kpfw2['characters'](ft2zp, 0x0, slcyr_ - odng8), odng8 = slcyr_;
        }
    }
    function odx8(dq8nx, f2wpzt) {
        for (; dq8nx >= qg8y && (f2wpzt = ok$2wf['exec'](tpkwf2));) fdo$2k = f2wpzt['index'], qg8y = fdo$2k + f2wpzt[0x0]['length'], bmi743['lineNumber']++;
        bmi743['columnNumber'] = dq8nx - fdo$2k + 0x1;
    }
    for (var fdo$2k = 0x0, qg8y = 0x0, ok$2wf = /.*(?:\r\n?|\n)|.*$/g, bmi743 = $kpfw2['locator'], zv6te = [{ 'currentNSMap': v0e16 }], vh1j90 = {}, odng8 = 0x0;;) {
        try {
            var ft2wkp = tpkwf2['indexOf']('<', odng8);
            if (0x0 > ft2wkp) {
                if (!tpkwf2['substr'](odng8)['match'](/^\s*$/)) {
                    var $2pfkw = $kpfw2['doc'],
                        bc3mr7 = $2pfkw['createTextNode'](tpkwf2['substr'](odng8));
                    $2pfkw['appendChild'](bc3mr7), $kpfw2['currentElement'] = bc3mr7;
                }
                return;
            }
            switch (ft2wkp > odng8 && d8f$ko(ft2wkp), tpkwf2['charAt'](ft2wkp + 0x1)) {
                case '/':
                    var cmb3r = tpkwf2['indexOf']('>', ft2wkp + 0x3),
                        ofk2 = tpkwf2['substring'](ft2wkp + 0x2, cmb3r),
                        wf2tpk = zv6te['pop']();
                    0x0 > cmb3r ? (ofk2 = tpkwf2['substring'](ft2wkp + 0x2)['replace'](/[\s<].*/, ''), bm4r37['error']('end tag name: ' + ofk2 + ' is not complete:' + wf2tpk['tagName']), cmb3r = ft2wkp + 0x1 + ofk2['length']) : ofk2['match'](/\s</) && (ofk2 = ofk2['replace'](/[\s<].*/, ''), bm4r37['error']('end tag name: ' + ofk2 + ' maybe not complete'), cmb3r = ft2wkp + 0x1 + ofk2['length']);
                    var ptz2w = wf2tpk['localNSMap'],
                        evz610 = wf2tpk['tagName'] == ofk2,
                        ygq_s = evz610 || wf2tpk['tagName'] && wf2tpk['tagName']['toLowerCase']() == ofk2['toLowerCase']();
                    if (ygq_s) {
                        if ($kpfw2['endElement'](wf2tpk['uri'], wf2tpk['localName'], ofk2), ptz2w) {
                            for (var pkftw2 in ptz2w) $kpfw2['endPrefixMapping'](pkftw2);
                        }
                        evz610 || bm4r37['fatalError']('end tag name: ' + ofk2 + ' is not match the current start tagName:' + wf2tpk['tagName']);
                    } else zv6te['push'](wf2tpk);
                    cmb3r++;
                    break;
                case '?':
                    bmi743 && odx8(ft2wkp), cmb3r = Tygq_(tpkwf2, ft2wkp, $kpfw2);
                    break;
                case '!':
                    bmi743 && odx8(ft2wkp), cmb3r = Tbc7ml(tpkwf2, ft2wkp, $kpfw2, bm4r37);
                    break;
                default:
                    bmi743 && odx8(ft2wkp);
                    var rs_cl = new Tok8$n(),
                        fo8k = zv6te[zv6te['length'] - 0x1]['currentNSMap'],
                        cmb3r = Tn8ogx(tpkwf2, ft2wkp, rs_cl, fo8k, ng8xqy, bm4r37),
                        _mlsc = rs_cl['length'];
                    if (!rs_cl['closed'] && Tf2$wkp(tpkwf2, cmb3r, rs_cl['tagName'], vh1j90) && (rs_cl['closed'] = !0x0, yg_qxs['nbsp'] || bm4r37['warning']('unclosed xml attribute')), bmi743 && _mlsc) {
                        for (var bm34 = Tlcbrm(bmi743, {}), xod8 = 0x0; _mlsc > xod8; xod8++) {
                            var fw2pk$ = rs_cl[xod8];
                            odx8(fw2pk$['offset']), fw2pk$['locator'] = Tlcbrm(bmi743, {});
                        }
                        $kpfw2['locator'] = bm34, Tyxqg_(rs_cl, $kpfw2, fo8k) && zv6te['push'](rs_cl), $kpfw2['locator'] = bmi743;
                    } else Tyxqg_(rs_cl, $kpfw2, fo8k) && zv6te['push'](rs_cl);
                    'http://www.w3.org/1999/xhtml' !== rs_cl['uri'] || rs_cl['closed'] ? cmb3r++ : cmb3r = Tqy_gsx(tpkwf2, cmb3r, rs_cl['tagName'], ng8xqy, $kpfw2);
            }
        } catch (zfp2) {
            bm4r37['error']('element parse error: ' + zfp2), cmb3r = -0x1;
        }
        cmb3r > odng8 ? odng8 = cmb3r : d8f$ko(Math['max'](ft2wkp, odng8) + 0x1);
    }
}
function Tlcbrm(c_slmr, b47) {
    return b47['lineNumber'] = c_slmr['lineNumber'], b47['columnNumber'] = c_slmr['columnNumber'], b47;
}
function Tn8ogx(ez10v6, twfk, cr7mb3, dnk8o$, cb7rm, d8gxo) {
    for (var gys_lq, _gxysq, qgy_ = ++twfk, ve910 = Tdf2k$o;;) {
        var nkdo$ = ez10v6['charAt'](qgy_);
        switch (nkdo$) {
            case '=':
                if (ve910 === Tfk8$do) gys_lq = ez10v6['slice'](twfk, qgy_), ve910 = Txn8qdg;else {
                    if (ve910 !== Tptw2fk) throw new Error('attribute equal must after attrName');
                    ve910 = Txn8qdg;
                }
                break;
            case '\x27':
            case '\x22':
                if (ve910 === Txn8qdg || ve910 === Tfk8$do) {
                    if (ve910 === Tfk8$do && (d8gxo['warning']('attribute value must after "="'), gys_lq = ez10v6['slice'](twfk, qgy_)), twfk = qgy_ + 0x1, qgy_ = ez10v6['indexOf'](nkdo$, twfk), !(qgy_ > 0x0)) throw new Error('attribute value no end \'' + nkdo$ + '\' match');
                    _gxysq = ez10v6['slice'](twfk, qgy_)['replace'](/&#?\w+;/g, cb7rm), cr7mb3['add'](gys_lq, _gxysq, twfk - 0x1), ve910 = Tr3b74;
                } else {
                    if (ve910 != Tl_sq) throw new Error('attribute value must after "="');
                    _gxysq = ez10v6['slice'](twfk, qgy_)['replace'](/&#?\w+;/g, cb7rm), cr7mb3['add'](gys_lq, _gxysq, twfk), d8gxo['warning']('attribute "' + gys_lq + '" missed start quot(' + nkdo$ + ')!!'), twfk = qgy_ + 0x1, ve910 = Tr3b74;
                }
                break;
            case '/':
                switch (ve910) {
                    case Tdf2k$o:
                        cr7mb3['setTagName'](ez10v6['slice'](twfk, qgy_));
                    case Tr3b74:
                    case Tsm7rlc:
                    case Tp6wz2t:
                        ve910 = Tp6wz2t, cr7mb3['closed'] = !0x0;
                    case Tl_sq:
                    case Tfk8$do:
                    case Tptw2fk:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return d8gxo['error']('unexpected end of input'), ve910 == Tdf2k$o && cr7mb3['setTagName'](ez10v6['slice'](twfk, qgy_)), qgy_;
            case '>':
                switch (ve910) {
                    case Tdf2k$o:
                        cr7mb3['setTagName'](ez10v6['slice'](twfk, qgy_));
                    case Tr3b74:
                    case Tsm7rlc:
                    case Tp6wz2t:
                        break;
                    case Tl_sq:
                    case Tfk8$do:
                        _gxysq = ez10v6['slice'](twfk, qgy_), '/' === _gxysq['slice'](-0x1) && (cr7mb3['closed'] = !0x0, _gxysq = _gxysq['slice'](0x0, -0x1));
                    case Tptw2fk:
                        ve910 === Tptw2fk && (_gxysq = gys_lq), ve910 == Tl_sq ? (d8gxo['warning']('attribute "' + _gxysq + '" missed quot(")!!'), cr7mb3['add'](gys_lq, _gxysq['replace'](/&#?\w+;/g, cb7rm), twfk)) : ('http://www.w3.org/1999/xhtml' === dnk8o$[''] && _gxysq['match'](/^(?:disabled|checked|selected)$/i) || d8gxo['warning']('attribute "' + _gxysq + '" missed value!! "' + _gxysq + '" instead!!'), cr7mb3['add'](_gxysq, _gxysq, twfk));
                        break;
                    case Txn8qdg:
                        throw new Error('attribute value missed!!');
                }
                return qgy_;
            case '\u0080':
                nkdo$ = '\x20';
            default:
                if ('\x20' >= nkdo$) switch (ve910) {
                    case Tdf2k$o:
                        cr7mb3['setTagName'](ez10v6['slice'](twfk, qgy_)), ve910 = Tsm7rlc;
                        break;
                    case Tfk8$do:
                        gys_lq = ez10v6['slice'](twfk, qgy_), ve910 = Tptw2fk;
                        break;
                    case Tl_sq:
                        var _gxysq = ez10v6['slice'](twfk, qgy_)['replace'](/&#?\w+;/g, cb7rm);
                        d8gxo['warning']('attribute "' + _gxysq + '" missed quot(")!!'), cr7mb3['add'](gys_lq, _gxysq, twfk);
                    case Tr3b74:
                        ve910 = Tsm7rlc;
                } else switch (ve910) {
                    case Tptw2fk:
                        {
                            cr7mb3['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === dnk8o$[''] && gys_lq['match'](/^(?:disabled|checked|selected)$/i) || d8gxo['warning']('attribute "' + gys_lq + '" missed value!! "' + gys_lq + '" instead2!!'), cr7mb3['add'](gys_lq, gys_lq, twfk), twfk = qgy_, ve910 = Tfk8$do;
                        break;
                    case Tr3b74:
                        d8gxo['warning']('attribute space is required"' + gys_lq + '\x22!!');
                    case Tsm7rlc:
                        ve910 = Tfk8$do, twfk = qgy_;
                        break;
                    case Txn8qdg:
                        ve910 = Tl_sq, twfk = qgy_;
                        break;
                    case Tp6wz2t:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        qgy_++;
    }
}
function Tyxqg_(d8no$x, okdn8$, $wkfp2) {
    for (var n$xo8d = d8no$x['tagName'], z0ev = null, pevt6 = d8no$x['length']; pevt6--;) {
        var ngqy = d8no$x[pevt6],
            etv = ngqy['qName'],
            lycrs = ngqy['value'],
            tpkfw = etv['indexOf'](':');
        if (tpkfw > 0x0) var vz01e = ngqy['prefix'] = etv['slice'](0x0, tpkfw),
            _csyl = etv['slice'](tpkfw + 0x1),
            m7brc = 'xmlns' === vz01e && _csyl;else _csyl = etv, vz01e = null, m7brc = 'xmlns' === etv && '';
        ngqy['localName'] = _csyl, m7brc !== !0x1 && (null == z0ev && (z0ev = {}, Txdng8($wkfp2, $wkfp2 = {})), $wkfp2[m7brc] = z0ev[m7brc] = lycrs, ngqy['uri'] = 'http://www.w3.org/2000/xmlns/', okdn8$['startPrefixMapping'](m7brc, lycrs));
    }
    for (var pevt6 = d8no$x['length']; pevt6--;) {
        ngqy = d8no$x[pevt6];
        var vz01e = ngqy['prefix'];
        vz01e && ('xml' === vz01e && (ngqy['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== vz01e && (ngqy['uri'] = $wkfp2[vz01e || '']));
    }
    var tpkfw = n$xo8d['indexOf'](':');
    tpkfw > 0x0 ? (vz01e = d8no$x['prefix'] = n$xo8d['slice'](0x0, tpkfw), _csyl = d8no$x['localName'] = n$xo8d['slice'](tpkfw + 0x1)) : (vz01e = null, _csyl = d8no$x['localName'] = n$xo8d);
    var z16ev0 = d8no$x['uri'] = $wkfp2[vz01e || ''];
    if (okdn8$['startElement'](z16ev0, _csyl, n$xo8d, d8no$x), !d8no$x['closed']) return d8no$x['currentNSMap'] = $wkfp2, d8no$x['localNSMap'] = z0ev, !0x0;
    if (okdn8$['endElement'](z16ev0, _csyl, n$xo8d), z0ev) {
        for (vz01e in z0ev) okdn8$['endPrefixMapping'](vz01e);
    }
}
function Tqy_gsx(ztpw26, j0e9v, wkpt, _qly, s_ygqx) {
    if (/^(?:script|textarea)$/i['test'](wkpt)) {
        var dgxn8o = ztpw26['indexOf']('</' + wkpt + '>', j0e9v),
            cs_ryl = ztpw26['substring'](j0e9v + 0x1, dgxn8o);
        if (/[&<]/['test'](cs_ryl)) return (/^script$/i['test'](wkpt) ? (s_ygqx['characters'](cs_ryl, 0x0, cs_ryl['length']), dgxn8o) : (cs_ryl = cs_ryl['replace'](/&#?\w+;/g, _qly), s_ygqx['characters'](cs_ryl, 0x0, cs_ryl['length']), dgxn8o)
        );
    }
    return j0e9v + 0x1;
}
function Tf2$wkp(v6etz, _lrms, cr7msl, fkpwt) {
    var on8kd = fkpwt[cr7msl];
    return null == on8kd && (on8kd = v6etz['lastIndexOf']('</' + cr7msl + '>'), _lrms > on8kd && (on8kd = v6etz['lastIndexOf']('</' + cr7msl)), fkpwt[cr7msl] = on8kd), _lrms > on8kd;
}
function Txdng8($8oxn, ba34iu) {
    for (var g8dno in $8oxn) ba34iu[g8dno] = $8oxn[g8dno];
}
function Tbc7ml(wezt6, i4bua, iau4, k2df$o) {
    var p2tfz = wezt6['charAt'](i4bua + 0x2);
    switch (p2tfz) {
        case '-':
            if ('-' === wezt6['charAt'](i4bua + 0x3)) {
                var e1z60v = wezt6['indexOf']('-->', i4bua + 0x4);
                return e1z60v > i4bua ? (iau4['comment'](wezt6, i4bua + 0x4, e1z60v - i4bua - 0x4), e1z60v + 0x3) : (k2df$o['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == wezt6['substr'](i4bua + 0x3, 0x6)) {
                var e1z60v = wezt6['indexOf'](']]>', i4bua + 0x9);
                return iau4['startCDATA'](), iau4['characters'](wezt6, i4bua + 0x9, e1z60v - i4bua - 0x9), iau4['endCDATA'](), e1z60v + 0x3;
            }
            var $kofd = Tnx8gq(wezt6, i4bua),
                i7mb43 = $kofd['length'];
            if (i7mb43 > 0x1 && /!doctype/i['test']($kofd[0x0][0x0])) {
                var z6tv1 = $kofd[0x1][0x0],
                    mbr = i7mb43 > 0x3 && /^public$/i['test']($kofd[0x2][0x0]) && $kofd[0x3][0x0],
                    clrs_m = i7mb43 > 0x4 && $kofd[0x4][0x0],
                    ve910j = $kofd[i7mb43 - 0x1];
                return iau4['startDTD'](z6tv1, mbr && mbr['replace'](/^(['"])(.*?)\1$/, '$2'), clrs_m && clrs_m['replace'](/^(['"])(.*?)\1$/, '$2')), iau4['endDTD'](), ve910j['index'] + ve910j[0x0]['length'];
            }
    }
    return -0x1;
}
function Tygq_(w26ptz, qgny_x, t6pev) {
    var zte61 = w26ptz['indexOf']('?>', qgny_x);
    if (zte61) {
        var d$o8nk = w26ptz['substring'](qgny_x, zte61)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (d$o8nk) {
            {
                d$o8nk[0x0]['length'];
            }
            return t6pev['processingInstruction'](d$o8nk[0x1], d$o8nk[0x2]), zte61 + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function Tok8$n() {}
function Tsmcl_(ve1j90, k$wf2p) {
    return ve1j90['__proto__'] = k$wf2p, ve1j90;
}
function Tnx8gq(iu47b, pwz2f) {
    var yx_qgn,
        ztw2pf = [],
        r7b4m = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (r7b4m['lastIndex'] = pwz2f, r7b4m['exec'](iu47b); yx_qgn = r7b4m['exec'](iu47b);) if (ztw2pf['push'](yx_qgn), yx_qgn[0x1]) return ztw2pf;
}
var Td8kon$ = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    Tcr7mbl = new RegExp('[\\-\\.0-9' + Td8kon$['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    Tbm7lr = new RegExp('^' + Td8kon$['source'] + Tcr7mbl['source'] + '*(?::' + Td8kon$['source'] + Tcr7mbl['source'] + '*)?$'),
    Tdf2k$o = 0x0,
    Tfk8$do = 0x1,
    Tptw2fk = 0x2,
    Txn8qdg = 0x3,
    Tl_sq = 0x4,
    Tr3b74 = 0x5,
    Tsm7rlc = 0x6,
    Tp6wz2t = 0x7;
Tj9e01['prototype'] = {
    'parse': function (b34ui7, v9ej, hv10) {
        var e016jv = this['domBuilder'];
        e016jv['startDocument'](), Txdng8(v9ej, v9ej = {}), Tm4bi(b34ui7, v9ej, hv10, e016jv, this['errorHandler']), e016jv['endDocument']();
    }
}, Tok8$n['prototype'] = {
    'setTagName': function (w2pfz) {
        if (!Tbm7lr['test'](w2pfz)) throw new Error('invalid tagName:' + w2pfz);
        this['tagName'] = w2pfz;
    },
    'add': function (ev910, b3im47, q_yl) {
        if (!Tbm7lr['test'](ev910)) throw new Error('invalid attribute:' + ev910);
        this[this['length']++] = {
            'qName': ev910,
            'value': b3im47,
            'offset': q_yl
        };
    },
    'length': 0x0,
    'getLocalName': function (m7crls) {
        return this[m7crls]['localName'];
    },
    'getLocator': function (j05h19) {
        return this[j05h19]['locator'];
    },
    'getQName': function (o$df2) {
        return this[o$df2]['qName'];
    },
    'getURI': function (zftw2) {
        return this[zftw2]['uri'];
    },
    'getValue': function (rbcm3) {
        return this[rbcm3]['value'];
    }
}, Tsmcl_({}, Tsmcl_['prototype']) instanceof Tsmcl_ || (Tsmcl_ = function (o$kfd8, p2wtz6) {
    function rsl7cm() {}
    rsl7cm['prototype'] = p2wtz6, rsl7cm = new rsl7cm();
    for (p2wtz6 in o$kfd8) rsl7cm[p2wtz6] = o$kfd8[p2wtz6];
    return rsl7cm;
}), exports['XMLReader'] = Tj9e01;