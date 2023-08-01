var b = wx.$e;
function eeibvl() {}
function efk2x$j(s386qh, jfx2k, dxmopz, q8sh3, ilq6) {
    function c_75ny(o2$pxj) {
        if (o2$pxj > 0xffff) {
            o2$pxj -= 0x10000;
            var xm2p = 0xd800 + (o2$pxj >> 0xa),
                mzod = 0xdc00 + (0x3ff & o2$pxj);
            return String['fromCharCode'](xm2p, mzod);
        }
        return String['fromCharCode'](o2$pxj);
    }
    function bv4wea(mzdpo) {
        var xo2mp = mzdpo['slice'](0x1, -0x1);
        return xo2mp in dxmopz ? dxmopz[xo2mp] : '#' === xo2mp['charAt'](0x0) ? c_75ny(parseInt(xo2mp['substr'](0x1)['replace']('x', '0x'))) : (ilq6['error']('entity not found:' + mzdpo), mzdpo);
    }
    function zopx2m(mzopxd) {
        if (mzopxd > bilqv) {
            var j4kfgt = s386qh['substring'](bilqv, mzopxd)['replace'](/&#?\w+;/g, bv4wea);
            zodmp9 && q3s6h8(bilqv), q8sh3['characters'](j4kfgt, 0x0, mzopxd - bilqv), bilqv = mzopxd;
        }
    }
    function q3s6h8(bwvei, gaf4) {
        for (; bwvei >= omx$p2 && (gaf4 = e4bwv['exec'](s386qh));) g4wtka = gaf4['index'], omx$p2 = g4wtka + gaf4[0x0]['length'], zodmp9['lineNumber']++;
        zodmp9['columnNumber'] = bwvei - g4wtka + 0x1;
    }
    for (var g4wtka = 0x0, omx$p2 = 0x0, e4bwv = /.*(?:\r\n?|\n)|.*$/g, zodmp9 = q8sh3['locator'], kjgft4 = [{ 'currentNSMap': jfx2k }], q3s8h6 = {}, bilqv = 0x0;;) {
        try {
            var hsliq6 = s386qh['indexOf']('<', bilqv);
            if (0x0 > hsliq6) {
                if (!s386qh['substr'](bilqv)['match'](/^\s*$/)) {
                    var tkfg4 = q8sh3['doc'],
                        ry738 = tkfg4['createTextNode'](s386qh['substr'](bilqv));
                    tkfg4['appendChild'](ry738), q8sh3['currentElement'] = ry738;
                }
                return;
            }
            switch (hsliq6 > bilqv && zopx2m(hsliq6), s386qh['charAt'](hsliq6 + 0x1)) {
                case '/':
                    var w4ktg = s386qh['indexOf']('>', hsliq6 + 0x3),
                        kga4f = s386qh['substring'](hsliq6 + 0x2, w4ktg),
                        sr308 = kjgft4['pop']();
                    0x0 > w4ktg ? (kga4f = s386qh['substring'](hsliq6 + 0x2)['replace'](/[\s<].*/, ''), ilq6['error']('end tag name: ' + kga4f + ' is not complete:' + sr308['tagName']), w4ktg = hsliq6 + 0x1 + kga4f['length']) : kga4f['match'](/\s</) && (kga4f = kga4f['replace'](/[\s<].*/, ''), ilq6['error']('end tag name: ' + kga4f + ' maybe not complete'), w4ktg = hsliq6 + 0x1 + kga4f['length']);
                    var s6r038 = sr308['localNSMap'],
                        r0y387 = sr308['tagName'] == kga4f,
                        dzu19 = r0y387 || sr308['tagName'] && sr308['tagName']['toLowerCase']() == kga4f['toLowerCase']();
                    if (dzu19) {
                        if (q8sh3['endElement'](sr308['uri'], sr308['localName'], kga4f), s6r038) {
                            for (var qi6hs in s6r038) q8sh3['endPrefixMapping'](qi6hs);
                        }
                        r0y387 || ilq6['fatalError']('end tag name: ' + kga4f + ' is not match the current start tagName:' + sr308['tagName']);
                    } else kjgft4['push'](sr308);
                    w4ktg++;
                    break;
                case '?':
                    zodmp9 && q3s6h8(hsliq6), w4ktg = ewilev(s386qh, hsliq6, q8sh3);
                    break;
                case '!':
                    zodmp9 && q3s6h8(hsliq6), w4ktg = egtfk$(s386qh, hsliq6, q8sh3, ilq6);
                    break;
                default:
                    zodmp9 && q3s6h8(hsliq6);
                    var rs63 = new ebg4e(),
                        wavb4e = kjgft4[kjgft4['length'] - 0x1]['currentNSMap'],
                        w4ktg = egt$fjk(s386qh, hsliq6, rs63, wavb4e, bv4wea, ilq6),
                        lebviw = rs63['length'];
                    if (!rs63['closed'] && ex2op$(s386qh, w4ktg, rs63['tagName'], q3s8h6) && (rs63['closed'] = !0x0, dxmopz['nbsp'] || ilq6['warning']('unclosed xml attribute')), zodmp9 && lebviw) {
                        for (var fjxp$2 = esqlh6(zodmp9, {}), qvblh = 0x0; lebviw > qvblh; qvblh++) {
                            var kjtg$ = rs63[qvblh];
                            q3s6h8(kjtg$['offset']), kjtg$['locator'] = esqlh6(zodmp9, {});
                        }
                        q8sh3['locator'] = fjxp$2, ezxpo2(rs63, q8sh3, wavb4e) && kjgft4['push'](rs63), q8sh3['locator'] = zodmp9;
                    } else ezxpo2(rs63, q8sh3, wavb4e) && kjgft4['push'](rs63);
                    'http://www.w3.org/1999/xhtml' !== rs63['uri'] || rs63['closed'] ? w4ktg++ : w4ktg = eweatg(s386qh, w4ktg, rs63['tagName'], bv4wea, q8sh3);
            }
        } catch (z9dmo) {
            ilq6['error']('element parse error: ' + z9dmo), w4ktg = -0x1;
        }
        w4ktg > bilqv ? bilqv = w4ktg : zopx2m(Math['max'](hsliq6, bilqv) + 0x1);
    }
}
function esqlh6(jx$fk, j$ftg) {
    return j$ftg['lineNumber'] = jx$fk['lineNumber'], j$ftg['columnNumber'] = jx$fk['columnNumber'], j$ftg;
}
function egt$fjk(podxz, y5cr, r5yc0, $jxp2o, t4gwa, wav4b) {
    for (var tw4ea, k$2jf, _nc7 = ++y5cr, $pxfj = ezpxo;;) {
        var lqvish = podxz['charAt'](_nc7);
        switch (lqvish) {
            case '=':
                if ($pxfj === edzmo19) tw4ea = podxz['slice'](y5cr, _nc7), $pxfj = eodpm;else {
                    if ($pxfj !== elbvieq) throw new Error('attribute equal must after attrName');
                    $pxfj = eodpm;
                }
                break;
            case '\x27':
            case '\x22':
                if ($pxfj === eodpm || $pxfj === edzmo19) {
                    if ($pxfj === edzmo19 && (wav4b['warning']('attribute value must after "="'), tw4ea = podxz['slice'](y5cr, _nc7)), y5cr = _nc7 + 0x1, _nc7 = podxz['indexOf'](lqvish, y5cr), !(_nc7 > 0x0)) throw new Error('attribute value no end \'' + lqvish + '\' match');
                    k$2jf = podxz['slice'](y5cr, _nc7)['replace'](/&#?\w+;/g, t4gwa), r5yc0['add'](tw4ea, k$2jf, y5cr - 0x1), $pxfj = eibewav;
                } else {
                    if ($pxfj != er07836) throw new Error('attribute value must after "="');
                    k$2jf = podxz['slice'](y5cr, _nc7)['replace'](/&#?\w+;/g, t4gwa), r5yc0['add'](tw4ea, k$2jf, y5cr), wav4b['warning']('attribute "' + tw4ea + '" missed start quot(' + lqvish + ')!!'), y5cr = _nc7 + 0x1, $pxfj = eibewav;
                }
                break;
            case '/':
                switch ($pxfj) {
                    case ezpxo:
                        r5yc0['setTagName'](podxz['slice'](y5cr, _nc7));
                    case eibewav:
                    case emdpozx:
                    case e$2pfjx:
                        $pxfj = e$2pfjx, r5yc0['closed'] = !0x0;
                    case er07836:
                    case edzmo19:
                    case elbvieq:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return wav4b['error']('unexpected end of input'), $pxfj == ezpxo && r5yc0['setTagName'](podxz['slice'](y5cr, _nc7)), _nc7;
            case '>':
                switch ($pxfj) {
                    case ezpxo:
                        r5yc0['setTagName'](podxz['slice'](y5cr, _nc7));
                    case eibewav:
                    case emdpozx:
                    case e$2pfjx:
                        break;
                    case er07836:
                    case edzmo19:
                        k$2jf = podxz['slice'](y5cr, _nc7), '/' === k$2jf['slice'](-0x1) && (r5yc0['closed'] = !0x0, k$2jf = k$2jf['slice'](0x0, -0x1));
                    case elbvieq:
                        $pxfj === elbvieq && (k$2jf = tw4ea), $pxfj == er07836 ? (wav4b['warning']('attribute "' + k$2jf + '" missed quot(")!!'), r5yc0['add'](tw4ea, k$2jf['replace'](/&#?\w+;/g, t4gwa), y5cr)) : ('http://www.w3.org/1999/xhtml' === $jxp2o[''] && k$2jf['match'](/^(?:disabled|checked|selected)$/i) || wav4b['warning']('attribute "' + k$2jf + '" missed value!! "' + k$2jf + '" instead!!'), r5yc0['add'](k$2jf, k$2jf, y5cr));
                        break;
                    case eodpm:
                        throw new Error('attribute value missed!!');
                }
                return _nc7;
            case '\u0080':
                lqvish = '\x20';
            default:
                if ('\x20' >= lqvish) switch ($pxfj) {
                    case ezpxo:
                        r5yc0['setTagName'](podxz['slice'](y5cr, _nc7)), $pxfj = emdpozx;
                        break;
                    case edzmo19:
                        tw4ea = podxz['slice'](y5cr, _nc7), $pxfj = elbvieq;
                        break;
                    case er07836:
                        var k$2jf = podxz['slice'](y5cr, _nc7)['replace'](/&#?\w+;/g, t4gwa);
                        wav4b['warning']('attribute "' + k$2jf + '" missed quot(")!!'), r5yc0['add'](tw4ea, k$2jf, y5cr);
                    case eibewav:
                        $pxfj = emdpozx;
                } else switch ($pxfj) {
                    case elbvieq:
                        {
                            r5yc0['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === $jxp2o[''] && tw4ea['match'](/^(?:disabled|checked|selected)$/i) || wav4b['warning']('attribute "' + tw4ea + '" missed value!! "' + tw4ea + '" instead2!!'), r5yc0['add'](tw4ea, tw4ea, y5cr), y5cr = _nc7, $pxfj = edzmo19;
                        break;
                    case eibewav:
                        wav4b['warning']('attribute space is required"' + tw4ea + '\x22!!');
                    case emdpozx:
                        $pxfj = edzmo19, y5cr = _nc7;
                        break;
                    case eodpm:
                        $pxfj = er07836, y5cr = _nc7;
                        break;
                    case e$2pfjx:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        _nc7++;
    }
}
function ezxpo2($jxf, lvbiqh, t4akg) {
    for (var hbvli = $jxf['tagName'], o2mzx = null, akg = $jxf['length']; akg--;) {
        var jg4t = $jxf[akg],
            ibvqle = jg4t['qName'],
            j$kf2x = jg4t['value'],
            wbe4ga = ibvqle['indexOf'](':');
        if (wbe4ga > 0x0) var avie = jg4t['prefix'] = ibvqle['slice'](0x0, wbe4ga),
            mpo2x = ibvqle['slice'](wbe4ga + 0x1),
            ftk4ag = 'xmlns' === avie && mpo2x;else mpo2x = ibvqle, avie = null, ftk4ag = 'xmlns' === ibvqle && '';
        jg4t['localName'] = mpo2x, ftk4ag !== !0x1 && (null == o2mzx && (o2mzx = {}, eqhliv(t4akg, t4akg = {})), t4akg[ftk4ag] = o2mzx[ftk4ag] = j$kf2x, jg4t['uri'] = 'http://www.w3.org/2000/xmlns/', lvbiqh['startPrefixMapping'](ftk4ag, j$kf2x));
    }
    for (var akg = $jxf['length']; akg--;) {
        jg4t = $jxf[akg];
        var avie = jg4t['prefix'];
        avie && ('xml' === avie && (jg4t['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== avie && (jg4t['uri'] = t4akg[avie || '']));
    }
    var wbe4ga = hbvli['indexOf'](':');
    wbe4ga > 0x0 ? (avie = $jxf['prefix'] = hbvli['slice'](0x0, wbe4ga), mpo2x = $jxf['localName'] = hbvli['slice'](wbe4ga + 0x1)) : (avie = null, mpo2x = $jxf['localName'] = hbvli);
    var fj$xk2 = $jxf['uri'] = t4akg[avie || ''];
    if (lvbiqh['startElement'](fj$xk2, mpo2x, hbvli, $jxf), !$jxf['closed']) return $jxf['currentNSMap'] = t4akg, $jxf['localNSMap'] = o2mzx, !0x0;
    if (lvbiqh['endElement'](fj$xk2, mpo2x, hbvli), o2mzx) {
        for (avie in o2mzx) lvbiqh['endPrefixMapping'](avie);
    }
}
function eweatg(tkg4j, hvbil, pzmxd, vae4bw, qh6ils) {
    if (/^(?:script|textarea)$/i['test'](pzmxd)) {
        var g4wkat = tkg4j['indexOf']('</' + pzmxd + '>', hvbil),
            dom9zp = tkg4j['substring'](hvbil + 0x1, g4wkat);
        if (/[&<]/['test'](dom9zp)) return (/^script$/i['test'](pzmxd) ? (qh6ils['characters'](dom9zp, 0x0, dom9zp['length']), g4wkat) : (dom9zp = dom9zp['replace'](/&#?\w+;/g, vae4bw), qh6ils['characters'](dom9zp, 0x0, dom9zp['length']), g4wkat)
        );
    }
    return hvbil + 0x1;
}
function ex2op$(rs806, $o2pj, wagte, wae4b) {
    var hliq = wae4b[wagte];
    return null == hliq && (hliq = rs806['lastIndexOf']('</' + wagte + '>'), $o2pj > hliq && (hliq = rs806['lastIndexOf']('</' + wagte)), wae4b[wagte] = hliq), $o2pj > hliq;
}
function eqhliv(o2$mpx, bliq) {
    for (var bwvae4 in o2$mpx) bliq[bwvae4] = o2$mpx[bwvae4];
}
function egtfk$(ktg4aw, tkfg4j, vis, jgt4fk) {
    var iwbvel = ktg4aw['charAt'](tkfg4j + 0x2);
    switch (iwbvel) {
        case '-':
            if ('-' === ktg4aw['charAt'](tkfg4j + 0x3)) {
                var j$o2p = ktg4aw['indexOf']('-->', tkfg4j + 0x4);
                return j$o2p > tkfg4j ? (vis['comment'](ktg4aw, tkfg4j + 0x4, j$o2p - tkfg4j - 0x4), j$o2p + 0x3) : (jgt4fk['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == ktg4aw['substr'](tkfg4j + 0x3, 0x6)) {
                var j$o2p = ktg4aw['indexOf'](']]>', tkfg4j + 0x9);
                return vis['startCDATA'](), vis['characters'](ktg4aw, tkfg4j + 0x9, j$o2p - tkfg4j - 0x9), vis['endCDATA'](), j$o2p + 0x3;
            }
            var ivlbwe = ekjgf4(ktg4aw, tkfg4j),
                t4akwg = ivlbwe['length'];
            if (t4akwg > 0x1 && /!doctype/i['test'](ivlbwe[0x0][0x0])) {
                var bwiev = ivlbwe[0x1][0x0],
                    u9m1 = t4akwg > 0x3 && /^public$/i['test'](ivlbwe[0x2][0x0]) && ivlbwe[0x3][0x0],
                    wkag = t4akwg > 0x4 && ivlbwe[0x4][0x0],
                    pj$o2 = ivlbwe[t4akwg - 0x1];
                return vis['startDTD'](bwiev, u9m1 && u9m1['replace'](/^(['"])(.*?)\1$/, '$2'), wkag && wkag['replace'](/^(['"])(.*?)\1$/, '$2')), vis['endDTD'](), pj$o2['index'] + pj$o2[0x0]['length'];
            }
    }
    return -0x1;
}
function ewilev(viebaw, c5ny_, mozd9) {
    var vbaewi = viebaw['indexOf']('?>', c5ny_);
    if (vbaewi) {
        var hblvi = viebaw['substring'](c5ny_, vbaewi)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (hblvi) {
            {
                hblvi[0x0]['length'];
            }
            return mozd9['processingInstruction'](hblvi[0x1], hblvi[0x2]), vbaewi + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function ebg4e() {}
function epmx$o2(lvbqie, pom2x) {
    return lvbqie['__proto__'] = pom2x, lvbqie;
}
function ekjgf4(hiql, eibva) {
    var mxpo,
        shqvil = [],
        xjp2$o = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (xjp2$o['lastIndex'] = eibva, xjp2$o['exec'](hiql); mxpo = xjp2$o['exec'](hiql);) if (shqvil['push'](mxpo), mxpo[0x1]) return shqvil;
}
var emzxd = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    eeab4v = new RegExp('[\\-\\.0-9' + emzxd['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    eopmz9 = new RegExp('^' + emzxd['source'] + eeab4v['source'] + '*(?::' + emzxd['source'] + eeab4v['source'] + '*)?$'),
    ezpxo = 0x0,
    edzmo19 = 0x1,
    elbvieq = 0x2,
    eodpm = 0x3,
    er07836 = 0x4,
    eibewav = 0x5,
    emdpozx = 0x6,
    e$2pfjx = 0x7;
eeibvl['prototype'] = {
    'parse': function (tj$f2, z9dom, y5nc7) {
        var jg4fkt = this['domBuilder'];
        jg4fkt['startDocument'](), eqhliv(z9dom, z9dom = {}), efk2x$j(tj$f2, z9dom, y5nc7, jg4fkt, this['errorHandler']), jg4fkt['endDocument']();
    }
}, ebg4e['prototype'] = {
    'setTagName': function (qslhv) {
        if (!eopmz9['test'](qslhv)) throw new Error('invalid tagName:' + qslhv);
        this['tagName'] = qslhv;
    },
    'add': function (bvlei, udm9z, wb4ag) {
        if (!eopmz9['test'](bvlei)) throw new Error('invalid attribute:' + bvlei);
        this[this['length']++] = {
            'qName': bvlei,
            'value': udm9z,
            'offset': wb4ag
        };
    },
    'length': 0x0,
    'getLocalName': function (_7y5c) {
        return this[_7y5c]['localName'];
    },
    'getLocator': function (wiabve) {
        return this[wiabve]['locator'];
    },
    'getQName': function (vlhis) {
        return this[vlhis]['qName'];
    },
    'getURI': function (_c7y5) {
        return this[_c7y5]['uri'];
    },
    'getValue': function (g4fkjt) {
        return this[g4fkjt]['value'];
    }
}, epmx$o2({}, epmx$o2['prototype']) instanceof epmx$o2 || (epmx$o2 = function (atw4eg, viwea) {
    function $2xpom() {}
    $2xpom['prototype'] = viwea, $2xpom = new $2xpom();
    for (viwea in atw4eg) $2xpom[viwea] = atw4eg[viwea];
    return $2xpom;
}), exports['XMLReader'] = eeibvl;