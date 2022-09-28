var b = wx.$e;
function egrlthz() {}
function e_4cam7(zrlhtg, gl$hxt, $jtgx, d18w52, squn9) {
    function hgztr(lgi$tx) {
        if (lgi$tx > 0xffff) {
            lgi$tx -= 0x10000;
            var tghlrz = 0xd800 + (lgi$tx >> 0xa),
                ltzyh = 0xdc00 + (0x3ff & lgi$tx);
            return String['fromCharCode'](tghlrz, ltzyh);
        }
        return String['fromCharCode'](lgi$tx);
    }
    function cm_7a4(n3qji$) {
        var xtgji = n3qji$['slice'](0x1, -0x1);
        return xtgji in $jtgx ? $jtgx[xtgji] : '#' === xtgji['charAt'](0x0) ? hgztr(parseInt(xtgji['substr'](0x1)['replace']('x', '0x'))) : (squn9['error']('entity not found:' + n3qji$), n3qji$);
    }
    function b0w85(lzh) {
        if (lzh > pecoma) {
            var u6s9nk = zrlhtg['substring'](pecoma, lzh)['replace'](/&#?\w+;/g, cm_7a4);
            fvzy4r && w5d(pecoma), d18w52['characters'](u6s9nk, 0x0, lzh - pecoma), pecoma = lzh;
        }
    }
    function w5d(s3qu9n, n3uqsj) {
        for (; s3qu9n >= _4vy7f && (n3uqsj = $tghlx['exec'](zrlhtg));) fv4y_7 = n3uqsj['index'], _4vy7f = fv4y_7 + n3uqsj[0x0]['length'], fvzy4r['lineNumber']++;
        fvzy4r['columnNumber'] = s3qu9n - fv4y_7 + 0x1;
    }
    for (var fv4y_7 = 0x0, _4vy7f = 0x0, $tghlx = /.*(?:\r\n?|\n)|.*$/g, fvzy4r = d18w52['locator'], a_7mv = [{ 'currentNSMap': gl$hxt }], k6s9b0 = {}, pecoma = 0x0;;) {
        try {
            var bw5 = zrlhtg['indexOf']('<', pecoma);
            if (0x0 > bw5) {
                if (!zrlhtg['substr'](pecoma)['match'](/^\s*$/)) {
                    var i$x3 = d18w52['doc'],
                        zrv4 = i$x3['createTextNode'](zrlhtg['substr'](pecoma));
                    i$x3['appendChild'](zrv4), d18w52['currentElement'] = zrv4;
                }
                return;
            }
            switch (bw5 > pecoma && b0w85(bw5), zrlhtg['charAt'](bw5 + 0x1)) {
                case '/':
                    var $lgxit = zrlhtg['indexOf']('>', bw5 + 0x3),
                        zrylh = zrlhtg['substring'](bw5 + 0x2, $lgxit),
                        n3juqi = a_7mv['pop']();
                    0x0 > $lgxit ? (zrylh = zrlhtg['substring'](bw5 + 0x2)['replace'](/[\s<].*/, ''), squn9['error']('end tag name: ' + zrylh + ' is not complete:' + n3juqi['tagName']), $lgxit = bw5 + 0x1 + zrylh['length']) : zrylh['match'](/\s</) && (zrylh = zrylh['replace'](/[\s<].*/, ''), squn9['error']('end tag name: ' + zrylh + ' maybe not complete'), $lgxit = bw5 + 0x1 + zrylh['length']);
                    var hvzfr = n3juqi['localNSMap'],
                        fz4yv_ = n3juqi['tagName'] == zrylh,
                        ztgl = fz4yv_ || n3juqi['tagName'] && n3juqi['tagName']['toLowerCase']() == zrylh['toLowerCase']();
                    if (ztgl) {
                        if (d18w52['endElement'](n3juqi['uri'], n3juqi['localName'], zrylh), hvzfr) {
                            for (var jqusn3 in hvzfr) d18w52['endPrefixMapping'](jqusn3);
                        }
                        fz4yv_ || squn9['fatalError']('end tag name: ' + zrylh + ' is not match the current start tagName:' + n3juqi['tagName']);
                    } else a_7mv['push'](n3juqi);
                    $lgxit++;
                    break;
                case '?':
                    fvzy4r && w5d(bw5), $lgxit = eijxgt(zrlhtg, bw5, d18w52);
                    break;
                case '!':
                    fvzy4r && w5d(bw5), $lgxit = eqnu3j(zrlhtg, bw5, d18w52, squn9);
                    break;
                default:
                    fvzy4r && w5d(bw5);
                    var db850w = new elrthgz(),
                        dw5b08 = a_7mv[a_7mv['length'] - 0x1]['currentNSMap'],
                        $lgxit = etxl$hg(zrlhtg, bw5, db850w, dw5b08, cm_7a4, squn9),
                        xilt = db850w['length'];
                    if (!db850w['closed'] && eni3$q(zrlhtg, $lgxit, db850w['tagName'], k6s9b0) && (db850w['closed'] = !0x0, $jtgx['nbsp'] || squn9['warning']('unclosed xml attribute')), fvzy4r && xilt) {
                        for (var fzryvh = enj$qi3(fvzy4r, {}), _4zfv = 0x0; xilt > _4zfv; _4zfv++) {
                            var sq9nu = db850w[_4zfv];
                            w5d(sq9nu['offset']), sq9nu['locator'] = enj$qi3(fvzy4r, {});
                        }
                        d18w52['locator'] = fzryvh, erz4y(db850w, d18w52, dw5b08) && a_7mv['push'](db850w), d18w52['locator'] = fvzy4r;
                    } else erz4y(db850w, d18w52, dw5b08) && a_7mv['push'](db850w);
                    'http://www.w3.org/1999/xhtml' !== db850w['uri'] || db850w['closed'] ? $lgxit++ : $lgxit = e$q3ijx(zrlhtg, $lgxit, db850w['tagName'], cm_7a4, d18w52);
            }
        } catch (gxj$) {
            squn9['error']('element parse error: ' + gxj$), $lgxit = -0x1;
        }
        $lgxit > pecoma ? pecoma = $lgxit : b0w85(Math['max'](bw5, pecoma) + 0x1);
    }
}
function enj$qi3(n6u9s, kn6us9) {
    return kn6us9['lineNumber'] = n6u9s['lineNumber'], kn6us9['columnNumber'] = n6u9s['columnNumber'], kn6us9;
}
function etxl$hg(rfhvyz, y_f7v, uk9n6, nku6s, litx, sk60) {
    for (var txhg$l, fy4zrv, d820w5 = ++y_f7v, n3qij$ = ej3nuqi;;) {
        var d2w851 = rfhvyz['charAt'](d820w5);
        switch (d2w851) {
            case '=':
                if (n3qij$ === euqk9sn) txhg$l = rfhvyz['slice'](y_f7v, d820w5), n3qij$ = egij$3x;else {
                    if (n3qij$ !== eyvrfhz) throw new Error('attribute equal must after attrName');
                    n3qij$ = egij$3x;
                }
                break;
            case '\x27':
            case '\x22':
                if (n3qij$ === egij$3x || n3qij$ === euqk9sn) {
                    if (n3qij$ === euqk9sn && (sk60['warning']('attribute value must after "="'), txhg$l = rfhvyz['slice'](y_f7v, d820w5)), y_f7v = d820w5 + 0x1, d820w5 = rfhvyz['indexOf'](d2w851, y_f7v), !(d820w5 > 0x0)) throw new Error('attribute value no end \'' + d2w851 + '\' match');
                    fy4zrv = rfhvyz['slice'](y_f7v, d820w5)['replace'](/&#?\w+;/g, litx), uk9n6['add'](txhg$l, fy4zrv, y_f7v - 0x1), n3qij$ = etgx;
                } else {
                    if (n3qij$ != eijun3) throw new Error('attribute value must after "="');
                    fy4zrv = rfhvyz['slice'](y_f7v, d820w5)['replace'](/&#?\w+;/g, litx), uk9n6['add'](txhg$l, fy4zrv, y_f7v), sk60['warning']('attribute "' + txhg$l + '" missed start quot(' + d2w851 + ')!!'), y_f7v = d820w5 + 0x1, n3qij$ = etgx;
                }
                break;
            case '/':
                switch (n3qij$) {
                    case ej3nuqi:
                        uk9n6['setTagName'](rfhvyz['slice'](y_f7v, d820w5));
                    case etgx:
                    case eks0:
                    case e$xthgl:
                        n3qij$ = e$xthgl, uk9n6['closed'] = !0x0;
                    case eijun3:
                    case euqk9sn:
                    case eyvrfhz:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return sk60['error']('unexpected end of input'), n3qij$ == ej3nuqi && uk9n6['setTagName'](rfhvyz['slice'](y_f7v, d820w5)), d820w5;
            case '>':
                switch (n3qij$) {
                    case ej3nuqi:
                        uk9n6['setTagName'](rfhvyz['slice'](y_f7v, d820w5));
                    case etgx:
                    case eks0:
                    case e$xthgl:
                        break;
                    case eijun3:
                    case euqk9sn:
                        fy4zrv = rfhvyz['slice'](y_f7v, d820w5), '/' === fy4zrv['slice'](-0x1) && (uk9n6['closed'] = !0x0, fy4zrv = fy4zrv['slice'](0x0, -0x1));
                    case eyvrfhz:
                        n3qij$ === eyvrfhz && (fy4zrv = txhg$l), n3qij$ == eijun3 ? (sk60['warning']('attribute "' + fy4zrv + '" missed quot(")!!'), uk9n6['add'](txhg$l, fy4zrv['replace'](/&#?\w+;/g, litx), y_f7v)) : ('http://www.w3.org/1999/xhtml' === nku6s[''] && fy4zrv['match'](/^(?:disabled|checked|selected)$/i) || sk60['warning']('attribute "' + fy4zrv + '" missed value!! "' + fy4zrv + '" instead!!'), uk9n6['add'](fy4zrv, fy4zrv, y_f7v));
                        break;
                    case egij$3x:
                        throw new Error('attribute value missed!!');
                }
                return d820w5;
            case '\u0080':
                d2w851 = '\x20';
            default:
                if ('\x20' >= d2w851) switch (n3qij$) {
                    case ej3nuqi:
                        uk9n6['setTagName'](rfhvyz['slice'](y_f7v, d820w5)), n3qij$ = eks0;
                        break;
                    case euqk9sn:
                        txhg$l = rfhvyz['slice'](y_f7v, d820w5), n3qij$ = eyvrfhz;
                        break;
                    case eijun3:
                        var fy4zrv = rfhvyz['slice'](y_f7v, d820w5)['replace'](/&#?\w+;/g, litx);
                        sk60['warning']('attribute "' + fy4zrv + '" missed quot(")!!'), uk9n6['add'](txhg$l, fy4zrv, y_f7v);
                    case etgx:
                        n3qij$ = eks0;
                } else switch (n3qij$) {
                    case eyvrfhz:
                        {
                            uk9n6['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === nku6s[''] && txhg$l['match'](/^(?:disabled|checked|selected)$/i) || sk60['warning']('attribute "' + txhg$l + '" missed value!! "' + txhg$l + '" instead2!!'), uk9n6['add'](txhg$l, txhg$l, y_f7v), y_f7v = d820w5, n3qij$ = euqk9sn;
                        break;
                    case etgx:
                        sk60['warning']('attribute space is required"' + txhg$l + '\x22!!');
                    case eks0:
                        n3qij$ = euqk9sn, y_f7v = d820w5;
                        break;
                    case egij$3x:
                        n3qij$ = eijun3, y_f7v = d820w5;
                        break;
                    case e$xthgl:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        d820w5++;
    }
}
function erz4y(xtlrg, a4_7, av7_m) {
    for (var trzhgl = xtlrg['tagName'], jqs3 = null, _v47y = xtlrg['length']; _v47y--;) {
        var xqji = xtlrg[_v47y],
            y4fv_z = xqji['qName'],
            i3g$xj = xqji['value'],
            w2581 = y4fv_z['indexOf'](':');
        if (w2581 > 0x0) var jix$3 = xqji['prefix'] = y4fv_z['slice'](0x0, w2581),
            yrz = y4fv_z['slice'](w2581 + 0x1),
            _f47v = 'xmlns' === jix$3 && yrz;else yrz = y4fv_z, jix$3 = null, _f47v = 'xmlns' === y4fv_z && '';
        xqji['localName'] = yrz, _f47v !== !0x1 && (null == jqs3 && (jqs3 = {}, ef_vz4y(av7_m, av7_m = {})), av7_m[_f47v] = jqs3[_f47v] = i3g$xj, xqji['uri'] = 'http://www.w3.org/2000/xmlns/', a4_7['startPrefixMapping'](_f47v, i3g$xj));
    }
    for (var _v47y = xtlrg['length']; _v47y--;) {
        xqji = xtlrg[_v47y];
        var jix$3 = xqji['prefix'];
        jix$3 && ('xml' === jix$3 && (xqji['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== jix$3 && (xqji['uri'] = av7_m[jix$3 || '']));
    }
    var w2581 = trzhgl['indexOf'](':');
    w2581 > 0x0 ? (jix$3 = xtlrg['prefix'] = trzhgl['slice'](0x0, w2581), yrz = xtlrg['localName'] = trzhgl['slice'](w2581 + 0x1)) : (jix$3 = null, yrz = xtlrg['localName'] = trzhgl);
    var n3sq = xtlrg['uri'] = av7_m[jix$3 || ''];
    if (a4_7['startElement'](n3sq, yrz, trzhgl, xtlrg), !xtlrg['closed']) return xtlrg['currentNSMap'] = av7_m, xtlrg['localNSMap'] = jqs3, !0x0;
    if (a4_7['endElement'](n3sq, yrz, trzhgl), jqs3) {
        for (jix$3 in jqs3) a4_7['endPrefixMapping'](jix$3);
    }
}
function e$q3ijx(kbsu, avf4_7, n9q3s, thlyrz, b8605d) {
    if (/^(?:script|textarea)$/i['test'](n9q3s)) {
        var $gxi = kbsu['indexOf']('</' + n9q3s + '>', avf4_7),
            jqi = kbsu['substring'](avf4_7 + 0x1, $gxi);
        if (/[&<]/['test'](jqi)) return (/^script$/i['test'](n9q3s) ? (b8605d['characters'](jqi, 0x0, jqi['length']), $gxi) : (jqi = jqi['replace'](/&#?\w+;/g, thlyrz), b8605d['characters'](jqi, 0x0, jqi['length']), $gxi)
        );
    }
    return avf4_7 + 0x1;
}
function eni3$q(zlthr, s3qn9, q9nks, zfry4v) {
    var ij$x = zfry4v[q9nks];
    return null == ij$x && (ij$x = zlthr['lastIndexOf']('</' + q9nks + '>'), s3qn9 > ij$x && (ij$x = zlthr['lastIndexOf']('</' + q9nks)), zfry4v[q9nks] = ij$x), s3qn9 > ij$x;
}
function ef_vz4y(d20w, ltg$) {
    for (var sb60 in d20w) ltg$[sb60] = d20w[sb60];
}
function eqnu3j(bsu69k, omc7pa, w20d85, b60d85) {
    var n6ksu = bsu69k['charAt'](omc7pa + 0x2);
    switch (n6ksu) {
        case '-':
            if ('-' === bsu69k['charAt'](omc7pa + 0x3)) {
                var trlzh = bsu69k['indexOf']('-->', omc7pa + 0x4);
                return trlzh > omc7pa ? (w20d85['comment'](bsu69k, omc7pa + 0x4, trlzh - omc7pa - 0x4), trlzh + 0x3) : (b60d85['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == bsu69k['substr'](omc7pa + 0x3, 0x6)) {
                var trlzh = bsu69k['indexOf'](']]>', omc7pa + 0x9);
                return w20d85['startCDATA'](), w20d85['characters'](bsu69k, omc7pa + 0x9, trlzh - omc7pa - 0x9), w20d85['endCDATA'](), trlzh + 0x3;
            }
            var vy_zf4 = etxg$j(bsu69k, omc7pa),
                u3sjn = vy_zf4['length'];
            if (u3sjn > 0x1 && /!doctype/i['test'](vy_zf4[0x0][0x0])) {
                var $jig3x = vy_zf4[0x1][0x0],
                    ixlt = u3sjn > 0x3 && /^public$/i['test'](vy_zf4[0x2][0x0]) && vy_zf4[0x3][0x0],
                    il = u3sjn > 0x4 && vy_zf4[0x4][0x0],
                    b58d0w = vy_zf4[u3sjn - 0x1];
                return w20d85['startDTD']($jig3x, ixlt && ixlt['replace'](/^(['"])(.*?)\1$/, '$2'), il && il['replace'](/^(['"])(.*?)\1$/, '$2')), w20d85['endDTD'](), b58d0w['index'] + b58d0w[0x0]['length'];
            }
    }
    return -0x1;
}
function eijxgt(va4m_, yhlzr, sb9ku) {
    var $xlig = va4m_['indexOf']('?>', yhlzr);
    if ($xlig) {
        var omec = va4m_['substring'](yhlzr, $xlig)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (omec) {
            {
                omec[0x0]['length'];
            }
            return sb9ku['processingInstruction'](omec[0x1], omec[0x2]), $xlig + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function elrthgz() {}
function etgli$(xg$il, z4vfr) {
    return xg$il['__proto__'] = z4vfr, xg$il;
}
function etxg$j(tlyhz, jsn3q) {
    var rxhtl,
        jnus = [],
        hfryz = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (hfryz['lastIndex'] = jsn3q, hfryz['exec'](tlyhz); rxhtl = hfryz['exec'](tlyhz);) if (jnus['push'](rxhtl), rxhtl[0x1]) return jnus;
}
var ema_4v = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    exilt$g = new RegExp('[\\-\\.0-9' + ema_4v['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    elzrfyh = new RegExp('^' + ema_4v['source'] + exilt$g['source'] + '*(?::' + ema_4v['source'] + exilt$g['source'] + '*)?$'),
    ej3nuqi = 0x0,
    euqk9sn = 0x1,
    eyvrfhz = 0x2,
    egij$3x = 0x3,
    eijun3 = 0x4,
    etgx = 0x5,
    eks0 = 0x6,
    e$xthgl = 0x7;
egrlthz['prototype'] = {
    'parse': function (qxj3, hlrt, s9unkq) {
        var txhg = this['domBuilder'];
        txhg['startDocument'](), ef_vz4y(hlrt, hlrt = {}), e_4cam7(qxj3, hlrt, s9unkq, txhg, this['errorHandler']), txhg['endDocument']();
    }
}, elrthgz['prototype'] = {
    'setTagName': function (sbku) {
        if (!elzrfyh['test'](sbku)) throw new Error('invalid tagName:' + sbku);
        this['tagName'] = sbku;
    },
    'add': function (un3q9, zrfhly, s9nk6) {
        if (!elzrfyh['test'](un3q9)) throw new Error('invalid attribute:' + un3q9);
        this[this['length']++] = {
            'qName': un3q9,
            'value': zrfhly,
            'offset': s9nk6
        };
    },
    'length': 0x0,
    'getLocalName': function (tglxhr) {
        return this[tglxhr]['localName'];
    },
    'getLocator': function (sn9qku) {
        return this[sn9qku]['locator'];
    },
    'getQName': function (su9knq) {
        return this[su9knq]['qName'];
    },
    'getURI': function (v74_y) {
        return this[v74_y]['uri'];
    },
    'getValue': function (gi$) {
        return this[gi$]['value'];
    }
}, etgli$({}, etgli$['prototype']) instanceof etgli$ || (etgli$ = function (_fv47y, fzvrh) {
    function k9su() {}
    k9su['prototype'] = fzvrh, k9su = new k9su();
    for (fzvrh in _fv47y) k9su[fzvrh] = _fv47y[fzvrh];
    return k9su;
}), exports['XMLReader'] = egrlthz;