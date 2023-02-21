var P = wx.$y;
function T_xnyqg() {}
function Todn8gx(d$okf2, mb73rc, xognd, vtpze6, etpz) {
    function _gxnq(l_ysq) {
        if (l_ysq > 0xffff) {
            l_ysq -= 0x10000;
            var e16z0 = 0xd800 + (l_ysq >> 0xa),
                tpz = 0xdc00 + (0x3ff & l_ysq);
            return String['fromCharCode'](e16z0, tpz);
        }
        return String['fromCharCode'](l_ysq);
    }
    function hj5(j150) {
        var lrc_m = j150['slice'](0x1, -0x1);
        return lrc_m in xognd ? xognd[lrc_m] : '#' === lrc_m['charAt'](0x0) ? _gxnq(parseInt(lrc_m['substr'](0x1)['replace']('x', '0x'))) : (etpz['error']('entity not found:' + j150), j150);
    }
    function d2kof$(b37i4) {
        if (b37i4 > ve1) {
            var _rlscy = d$okf2['substring'](ve1, b37i4)['replace'](/&#?\w+;/g, hj5);
            f$o8 && u73i4b(ve1), vtpze6['characters'](_rlscy, 0x0, b37i4 - ve1), ve1 = b37i4;
        }
    }
    function u73i4b(msr7, m37br) {
        for (; msr7 >= s_cqy && (m37br = t16vze['exec'](d$okf2));) ve160 = m37br['index'], s_cqy = ve160 + m37br[0x0]['length'], f$o8['lineNumber']++;
        f$o8['columnNumber'] = msr7 - ve160 + 0x1;
    }
    for (var ve160 = 0x0, s_cqy = 0x0, t16vze = /.*(?:\r\n?|\n)|.*$/g, f$o8 = vtpze6['locator'], gxq_sy = [{ 'currentNSMap': mb73rc }], cb3mr = {}, ve1 = 0x0;;) {
        try {
            var ia3bu4 = d$okf2['indexOf']('<', ve1);
            if (0x0 > ia3bu4) {
                if (!d$okf2['substr'](ve1)['match'](/^\s*$/)) {
                    var wp6z2t = vtpze6['doc'],
                        p2wt = wp6z2t['createTextNode'](d$okf2['substr'](ve1));
                    wp6z2t['appendChild'](p2wt), vtpze6['currentElement'] = p2wt;
                }
                return;
            }
            switch (ia3bu4 > ve1 && d2kof$(ia3bu4), d$okf2['charAt'](ia3bu4 + 0x1)) {
                case '/':
                    var ev16 = d$okf2['indexOf']('>', ia3bu4 + 0x3),
                        $p2fkw = d$okf2['substring'](ia3bu4 + 0x2, ev16),
                        cr_sy = gxq_sy['pop']();
                    0x0 > ev16 ? ($p2fkw = d$okf2['substring'](ia3bu4 + 0x2)['replace'](/[\s<].*/, ''), etpz['error']('end tag name: ' + $p2fkw + ' is not complete:' + cr_sy['tagName']), ev16 = ia3bu4 + 0x1 + $p2fkw['length']) : $p2fkw['match'](/\s</) && ($p2fkw = $p2fkw['replace'](/[\s<].*/, ''), etpz['error']('end tag name: ' + $p2fkw + ' maybe not complete'), ev16 = ia3bu4 + 0x1 + $p2fkw['length']);
                    var _ycq = cr_sy['localNSMap'],
                        v610j = cr_sy['tagName'] == $p2fkw,
                        gond8 = v610j || cr_sy['tagName'] && cr_sy['tagName']['toLowerCase']() == $p2fkw['toLowerCase']();
                    if (gond8) {
                        if (vtpze6['endElement'](cr_sy['uri'], cr_sy['localName'], $p2fkw), _ycq) {
                            for (var hv190j in _ycq) vtpze6['endPrefixMapping'](hv190j);
                        }
                        v610j || etpz['fatalError']('end tag name: ' + $p2fkw + ' is not match the current start tagName:' + cr_sy['tagName']);
                    } else gxq_sy['push'](cr_sy);
                    ev16++;
                    break;
                case '?':
                    f$o8 && u73i4b(ia3bu4), ev16 = Tlyrcs_(d$okf2, ia3bu4, vtpze6);
                    break;
                case '!':
                    f$o8 && u73i4b(ia3bu4), ev16 = Tmlr_c(d$okf2, ia3bu4, vtpze6, etpz);
                    break;
                default:
                    f$o8 && u73i4b(ia3bu4);
                    var cqsly_ = new Tjh091v(),
                        jv106e = gxq_sy[gxq_sy['length'] - 0x1]['currentNSMap'],
                        ev16 = Tyn8qxg(d$okf2, ia3bu4, cqsly_, jv106e, hj5, etpz),
                        d$8fk = cqsly_['length'];
                    if (!cqsly_['closed'] && Tl_cyrs(d$okf2, ev16, cqsly_['tagName'], cb3mr) && (cqsly_['closed'] = !0x0, xognd['nbsp'] || etpz['warning']('unclosed xml attribute')), f$o8 && d$8fk) {
                        for (var mrcsl_ = Tlcs7rm(f$o8, {}), gqx = 0x0; d$8fk > gqx; gqx++) {
                            var q8gxd = cqsly_[gqx];
                            u73i4b(q8gxd['offset']), q8gxd['locator'] = Tlcs7rm(f$o8, {});
                        }
                        vtpze6['locator'] = mrcsl_, Tm73r(cqsly_, vtpze6, jv106e) && gxq_sy['push'](cqsly_), vtpze6['locator'] = f$o8;
                    } else Tm73r(cqsly_, vtpze6, jv106e) && gxq_sy['push'](cqsly_);
                    'http://www.w3.org/1999/xhtml' !== cqsly_['uri'] || cqsly_['closed'] ? ev16++ : ev16 = T$w2kfp(d$okf2, ev16, cqsly_['tagName'], hj5, vtpze6);
            }
        } catch (i43b7m) {
            etpz['error']('element parse error: ' + i43b7m), ev16 = -0x1;
        }
        ev16 > ve1 ? ve1 = ev16 : d2kof$(Math['max'](ia3bu4, ve1) + 0x1);
    }
}
function Tlcs7rm(noxg8d, wzpt2f) {
    return wzpt2f['lineNumber'] = noxg8d['lineNumber'], wzpt2f['columnNumber'] = noxg8d['columnNumber'], wzpt2f;
}
function Tyn8qxg(fowk, gqlys, slrm_c, ubi4, _qcs, xsyg) {
    for (var z06ev1, j1h509, tve1 = ++gqlys, gsylq = Tl7bmc;;) {
        var vze6p = fowk['charAt'](tve1);
        switch (vze6p) {
            case '=':
                if (gsylq === Trsyl) z06ev1 = fowk['slice'](gqlys, tve1), gsylq = Tc7rslm;else {
                    if (gsylq !== Tcmrl7) throw new Error('attribute equal must after attrName');
                    gsylq = Tc7rslm;
                }
                break;
            case '\x27':
            case '\x22':
                if (gsylq === Tc7rslm || gsylq === Trsyl) {
                    if (gsylq === Trsyl && (xsyg['warning']('attribute value must after "="'), z06ev1 = fowk['slice'](gqlys, tve1)), gqlys = tve1 + 0x1, tve1 = fowk['indexOf'](vze6p, gqlys), !(tve1 > 0x0)) throw new Error('attribute value no end \'' + vze6p + '\' match');
                    j1h509 = fowk['slice'](gqlys, tve1)['replace'](/&#?\w+;/g, _qcs), slrm_c['add'](z06ev1, j1h509, gqlys - 0x1), gsylq = Tq8gndx;
                } else {
                    if (gsylq != Te0z6v1) throw new Error('attribute value must after "="');
                    j1h509 = fowk['slice'](gqlys, tve1)['replace'](/&#?\w+;/g, _qcs), slrm_c['add'](z06ev1, j1h509, gqlys), xsyg['warning']('attribute "' + z06ev1 + '" missed start quot(' + vze6p + ')!!'), gqlys = tve1 + 0x1, gsylq = Tq8gndx;
                }
                break;
            case '/':
                switch (gsylq) {
                    case Tl7bmc:
                        slrm_c['setTagName'](fowk['slice'](gqlys, tve1));
                    case Tq8gndx:
                    case Tb7cr:
                    case T$2kod:
                        gsylq = T$2kod, slrm_c['closed'] = !0x0;
                    case Te0z6v1:
                    case Trsyl:
                    case Tcmrl7:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return xsyg['error']('unexpected end of input'), gsylq == Tl7bmc && slrm_c['setTagName'](fowk['slice'](gqlys, tve1)), tve1;
            case '>':
                switch (gsylq) {
                    case Tl7bmc:
                        slrm_c['setTagName'](fowk['slice'](gqlys, tve1));
                    case Tq8gndx:
                    case Tb7cr:
                    case T$2kod:
                        break;
                    case Te0z6v1:
                    case Trsyl:
                        j1h509 = fowk['slice'](gqlys, tve1), '/' === j1h509['slice'](-0x1) && (slrm_c['closed'] = !0x0, j1h509 = j1h509['slice'](0x0, -0x1));
                    case Tcmrl7:
                        gsylq === Tcmrl7 && (j1h509 = z06ev1), gsylq == Te0z6v1 ? (xsyg['warning']('attribute "' + j1h509 + '" missed quot(")!!'), slrm_c['add'](z06ev1, j1h509['replace'](/&#?\w+;/g, _qcs), gqlys)) : ('http://www.w3.org/1999/xhtml' === ubi4[''] && j1h509['match'](/^(?:disabled|checked|selected)$/i) || xsyg['warning']('attribute "' + j1h509 + '" missed value!! "' + j1h509 + '" instead!!'), slrm_c['add'](j1h509, j1h509, gqlys));
                        break;
                    case Tc7rslm:
                        throw new Error('attribute value missed!!');
                }
                return tve1;
            case '\u0080':
                vze6p = '\x20';
            default:
                if ('\x20' >= vze6p) switch (gsylq) {
                    case Tl7bmc:
                        slrm_c['setTagName'](fowk['slice'](gqlys, tve1)), gsylq = Tb7cr;
                        break;
                    case Trsyl:
                        z06ev1 = fowk['slice'](gqlys, tve1), gsylq = Tcmrl7;
                        break;
                    case Te0z6v1:
                        var j1h509 = fowk['slice'](gqlys, tve1)['replace'](/&#?\w+;/g, _qcs);
                        xsyg['warning']('attribute "' + j1h509 + '" missed quot(")!!'), slrm_c['add'](z06ev1, j1h509, gqlys);
                    case Tq8gndx:
                        gsylq = Tb7cr;
                } else switch (gsylq) {
                    case Tcmrl7:
                        {
                            slrm_c['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === ubi4[''] && z06ev1['match'](/^(?:disabled|checked|selected)$/i) || xsyg['warning']('attribute "' + z06ev1 + '" missed value!! "' + z06ev1 + '" instead2!!'), slrm_c['add'](z06ev1, z06ev1, gqlys), gqlys = tve1, gsylq = Trsyl;
                        break;
                    case Tq8gndx:
                        xsyg['warning']('attribute space is required"' + z06ev1 + '\x22!!');
                    case Tb7cr:
                        gsylq = Trsyl, gqlys = tve1;
                        break;
                    case Tc7rslm:
                        gsylq = Te0z6v1, gqlys = tve1;
                        break;
                    case T$2kod:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        tve1++;
    }
}
function Tm73r(lsmrc7, kodf$8, okd8$) {
    for (var bm37 = lsmrc7['tagName'], $fd8ko = null, vz6te1 = lsmrc7['length']; vz6te1--;) {
        var kwfo$2 = lsmrc7[vz6te1],
            m4i37 = kwfo$2['qName'],
            do8gn = kwfo$2['value'],
            rs_cl = m4i37['indexOf'](':');
        if (rs_cl > 0x0) var ok$8n = kwfo$2['prefix'] = m4i37['slice'](0x0, rs_cl),
            _nyxg = m4i37['slice'](rs_cl + 0x1),
            v0e1j6 = 'xmlns' === ok$8n && _nyxg;else _nyxg = m4i37, ok$8n = null, v0e1j6 = 'xmlns' === m4i37 && '';
        kwfo$2['localName'] = _nyxg, v0e1j6 !== !0x1 && (null == $fd8ko && ($fd8ko = {}, Ttez6pv(okd8$, okd8$ = {})), okd8$[v0e1j6] = $fd8ko[v0e1j6] = do8gn, kwfo$2['uri'] = 'http://www.w3.org/2000/xmlns/', kodf$8['startPrefixMapping'](v0e1j6, do8gn));
    }
    for (var vz6te1 = lsmrc7['length']; vz6te1--;) {
        kwfo$2 = lsmrc7[vz6te1];
        var ok$8n = kwfo$2['prefix'];
        ok$8n && ('xml' === ok$8n && (kwfo$2['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== ok$8n && (kwfo$2['uri'] = okd8$[ok$8n || '']));
    }
    var rs_cl = bm37['indexOf'](':');
    rs_cl > 0x0 ? (ok$8n = lsmrc7['prefix'] = bm37['slice'](0x0, rs_cl), _nyxg = lsmrc7['localName'] = bm37['slice'](rs_cl + 0x1)) : (ok$8n = null, _nyxg = lsmrc7['localName'] = bm37);
    var _yxngq = lsmrc7['uri'] = okd8$[ok$8n || ''];
    if (kodf$8['startElement'](_yxngq, _nyxg, bm37, lsmrc7), !lsmrc7['closed']) return lsmrc7['currentNSMap'] = okd8$, lsmrc7['localNSMap'] = $fd8ko, !0x0;
    if (kodf$8['endElement'](_yxngq, _nyxg, bm37), $fd8ko) {
        for (ok$8n in $fd8ko) kodf$8['endPrefixMapping'](ok$8n);
    }
}
function T$w2kfp(bui3, fp2twk, kf$od2, l7crms, cmbl7) {
    if (/^(?:script|textarea)$/i['test'](kf$od2)) {
        var r73m4 = bui3['indexOf']('</' + kf$od2 + '>', fp2twk),
            _lgqys = bui3['substring'](fp2twk + 0x1, r73m4);
        if (/[&<]/['test'](_lgqys)) return (/^script$/i['test'](kf$od2) ? (cmbl7['characters'](_lgqys, 0x0, _lgqys['length']), r73m4) : (_lgqys = _lgqys['replace'](/&#?\w+;/g, l7crms), cmbl7['characters'](_lgqys, 0x0, _lgqys['length']), r73m4)
        );
    }
    return fp2twk + 0x1;
}
function Tl_cyrs(mlbr7c, sg_ly, q_lsg, t2zw6p) {
    var $2wpk = t2zw6p[q_lsg];
    return null == $2wpk && ($2wpk = mlbr7c['lastIndexOf']('</' + q_lsg + '>'), sg_ly > $2wpk && ($2wpk = mlbr7c['lastIndexOf']('</' + q_lsg)), t2zw6p[q_lsg] = $2wpk), sg_ly > $2wpk;
}
function Ttez6pv(fdk8$, c_y) {
    for (var f2$wk in fdk8$) c_y[f2$wk] = fdk8$[f2$wk];
}
function Tmlr_c(gnq_x, srm7c, k$fo2d, f$k2od) {
    var dgx8nq = gnq_x['charAt'](srm7c + 0x2);
    switch (dgx8nq) {
        case '-':
            if ('-' === gnq_x['charAt'](srm7c + 0x3)) {
                var zt6wpe = gnq_x['indexOf']('-->', srm7c + 0x4);
                return zt6wpe > srm7c ? (k$fo2d['comment'](gnq_x, srm7c + 0x4, zt6wpe - srm7c - 0x4), zt6wpe + 0x3) : (f$k2od['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == gnq_x['substr'](srm7c + 0x3, 0x6)) {
                var zt6wpe = gnq_x['indexOf'](']]>', srm7c + 0x9);
                return k$fo2d['startCDATA'](), k$fo2d['characters'](gnq_x, srm7c + 0x9, zt6wpe - srm7c - 0x9), k$fo2d['endCDATA'](), zt6wpe + 0x3;
            }
            var pevt = T$kwpf2(gnq_x, srm7c),
                $fkp2w = pevt['length'];
            if ($fkp2w > 0x1 && /!doctype/i['test'](pevt[0x0][0x0])) {
                var dx8gnq = pevt[0x1][0x0],
                    qgysl = $fkp2w > 0x3 && /^public$/i['test'](pevt[0x2][0x0]) && pevt[0x3][0x0],
                    yngqx8 = $fkp2w > 0x4 && pevt[0x4][0x0],
                    wt6pz2 = pevt[$fkp2w - 0x1];
                return k$fo2d['startDTD'](dx8gnq, qgysl && qgysl['replace'](/^(['"])(.*?)\1$/, '$2'), yngqx8 && yngqx8['replace'](/^(['"])(.*?)\1$/, '$2')), k$fo2d['endDTD'](), wt6pz2['index'] + wt6pz2[0x0]['length'];
            }
    }
    return -0x1;
}
function Tlyrcs_(ftpw2z, ub4i3a, e6vz1) {
    var $d8nk = ftpw2z['indexOf']('?>', ub4i3a);
    if ($d8nk) {
        var lsyq_g = ftpw2z['substring'](ub4i3a, $d8nk)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (lsyq_g) {
            {
                lsyq_g[0x0]['length'];
            }
            return e6vz1['processingInstruction'](lsyq_g[0x1], lsyq_g[0x2]), $d8nk + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function Tjh091v() {}
function Tngdo8(fk2w$p, uib4a3) {
    return fk2w$p['__proto__'] = uib4a3, fk2w$p;
}
function T$kwpf2(q_lsgy, r_mlsc) {
    var brclm7,
        xqsg_ = [],
        _gysqx = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (_gysqx['lastIndex'] = r_mlsc, _gysqx['exec'](q_lsgy); brclm7 = _gysqx['exec'](q_lsgy);) if (xqsg_['push'](brclm7), brclm7[0x1]) return xqsg_;
}
var Tmc7rbl = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    Tlq_c = new RegExp('[\\-\\.0-9' + Tmc7rbl['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    Tsqyc_l = new RegExp('^' + Tmc7rbl['source'] + Tlq_c['source'] + '*(?::' + Tmc7rbl['source'] + Tlq_c['source'] + '*)?$'),
    Tl7bmc = 0x0,
    Trsyl = 0x1,
    Tcmrl7 = 0x2,
    Tc7rslm = 0x3,
    Te0z6v1 = 0x4,
    Tq8gndx = 0x5,
    Tb7cr = 0x6,
    T$2kod = 0x7;
T_xnyqg['prototype'] = {
    'parse': function (_scyl, pvez, $o8ndx) {
        var xgo = this['domBuilder'];
        xgo['startDocument'](), Ttez6pv(pvez, pvez = {}), Todn8gx(_scyl, pvez, $o8ndx, xgo, this['errorHandler']), xgo['endDocument']();
    }
}, Tjh091v['prototype'] = {
    'setTagName': function (b4ia3) {
        if (!Tsqyc_l['test'](b4ia3)) throw new Error('invalid tagName:' + b4ia3);
        this['tagName'] = b4ia3;
    },
    'add': function (eztv, vz061, ua4bi) {
        if (!Tsqyc_l['test'](eztv)) throw new Error('invalid attribute:' + eztv);
        this[this['length']++] = {
            'qName': eztv,
            'value': vz061,
            'offset': ua4bi
        };
    },
    'length': 0x0,
    'getLocalName': function (p2tzfw) {
        return this[p2tzfw]['localName'];
    },
    'getLocator': function (vtp6) {
        return this[vtp6]['locator'];
    },
    'getQName': function (k$wfo) {
        return this[k$wfo]['qName'];
    },
    'getURI': function (jh950) {
        return this[jh950]['uri'];
    },
    'getValue': function (gq_xn) {
        return this[gq_xn]['value'];
    }
}, Tngdo8({}, Tngdo8['prototype']) instanceof Tngdo8 || (Tngdo8 = function (gyqxn, w6etpz) {
    function b37ui() {}
    b37ui['prototype'] = w6etpz, b37ui = new b37ui();
    for (w6etpz in gyqxn) b37ui[w6etpz] = gyqxn[w6etpz];
    return b37ui;
}), exports['XMLReader'] = T_xnyqg;