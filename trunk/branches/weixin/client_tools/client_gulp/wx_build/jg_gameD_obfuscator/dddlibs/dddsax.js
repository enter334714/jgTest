var v = wx.$d;
function zo35() {}
function zgutki(fkqz0g, bar18x, c593, itfukd, gzqka0) {
    function n_4h9j(fudti) {
        if (fudti > 0xffff) {
            fudti -= 0x10000;
            var tiemd = 0xd800 + (fudti >> 0xa),
                tfgku = 0xdc00 + (0x3ff & fudti);
            return String['fromCharCode'](tiemd, tfgku);
        }
        return String['fromCharCode'](fudti);
    }
    function tdium(r1$) {
        var v1p$w = r1$['slice'](0x1, -0x1);
        return v1p$w in c593 ? c593[v1p$w] : '#' === v1p$w['charAt'](0x0) ? n_4h9j(parseInt(v1p$w['substr'](0x1)['replace']('x', '0x'))) : (gzqka0['error']('entity not found:' + r1$), r1$);
    }
    function $vwpr7(mhed6j) {
        if (mhed6j > ly$v) {
            var fgtquk = fkqz0g['substring'](ly$v, mhed6j)['replace'](/&#?\w+;/g, tdium);
            w18rb && hie6(ly$v), itfukd['characters'](fgtquk, 0x0, mhed6j - ly$v), ly$v = mhed6j;
        }
    }
    function hie6(xw$r81, zqa0gk) {
        for (; xw$r81 >= qgkz0f && (zqa0gk = a80z['exec'](fkqz0g));) r$vw1 = zqa0gk['index'], qgkz0f = r$vw1 + zqa0gk[0x0]['length'], w18rb['lineNumber']++;
        w18rb['columnNumber'] = xw$r81 - r$vw1 + 0x1;
    }
    for (var r$vw1 = 0x0, qgkz0f = 0x0, a80z = /.*(?:\r\n?|\n)|.*$/g, w18rb = itfukd['locator'], gukfqt = [{ 'currentNSMap': bar18x }], nehm6 = {}, ly$v = 0x0;;) {
        try {
            var itmue = fkqz0g['indexOf']('<', ly$v);
            if (0x0 > itmue) {
                if (!fkqz0g['substr'](ly$v)['match'](/^\s*$/)) {
                    var imhed = itfukd['doc'],
                        iutedf = imhed['createTextNode'](fkqz0g['substr'](ly$v));
                    imhed['appendChild'](iutedf), itfukd['currentElement'] = iutedf;
                }
                return;
            }
            switch (itmue > ly$v && $vwpr7(itmue), fkqz0g['charAt'](itmue + 0x1)) {
                case '/':
                    var hjnm64 = fkqz0g['indexOf']('>', itmue + 0x3),
                        pv$wr1 = fkqz0g['substring'](itmue + 0x2, hjnm64),
                        r1xwb = gukfqt['pop']();
                    0x0 > hjnm64 ? (pv$wr1 = fkqz0g['substring'](itmue + 0x2)['replace'](/[\s<].*/, ''), gzqka0['error']('end tag name: ' + pv$wr1 + ' is not complete:' + r1xwb['tagName']), hjnm64 = itmue + 0x1 + pv$wr1['length']) : pv$wr1['match'](/\s</) && (pv$wr1 = pv$wr1['replace'](/[\s<].*/, ''), gzqka0['error']('end tag name: ' + pv$wr1 + ' maybe not complete'), hjnm64 = itmue + 0x1 + pv$wr1['length']);
                    var h_9j4n = r1xwb['localNSMap'],
                        ab1z = r1xwb['tagName'] == pv$wr1,
                        gfktiu = ab1z || r1xwb['tagName'] && r1xwb['tagName']['toLowerCase']() == pv$wr1['toLowerCase']();
                    if (gfktiu) {
                        if (itfukd['endElement'](r1xwb['uri'], r1xwb['localName'], pv$wr1), h_9j4n) {
                            for (var ei6h in h_9j4n) itfukd['endPrefixMapping'](ei6h);
                        }
                        ab1z || gzqka0['fatalError']('end tag name: ' + pv$wr1 + ' is not match the current start tagName:' + r1xwb['tagName']);
                    } else gukfqt['push'](r1xwb);
                    hjnm64++;
                    break;
                case '?':
                    w18rb && hie6(itmue), hjnm64 = zhm46(fkqz0g, itmue, itfukd);
                    break;
                case '!':
                    w18rb && hie6(itmue), hjnm64 = za8zx0(fkqz0g, itmue, itfukd, gzqka0);
                    break;
                default:
                    w18rb && hie6(itmue);
                    var j4n = new z_nj493(),
                        c9n43_ = gukfqt[gukfqt['length'] - 0x1]['currentNSMap'],
                        hjnm64 = zeifu(fkqz0g, itmue, j4n, c9n43_, tdium, gzqka0),
                        jm6h4 = j4n['length'];
                    if (!j4n['closed'] && zpw81r$(fkqz0g, hjnm64, j4n['tagName'], nehm6) && (j4n['closed'] = !0x0, c593['nbsp'] || gzqka0['warning']('unclosed xml attribute')), w18rb && jm6h4) {
                        for (var kgzqa = z_hnj64(w18rb, {}), kifudt = 0x0; jm6h4 > kifudt; kifudt++) {
                            var rwb = j4n[kifudt];
                            hie6(rwb['offset']), rwb['locator'] = z_hnj64(w18rb, {});
                        }
                        itfukd['locator'] = kgzqa, zhdj6em(j4n, itfukd, c9n43_) && gukfqt['push'](j4n), itfukd['locator'] = w18rb;
                    } else zhdj6em(j4n, itfukd, c9n43_) && gukfqt['push'](j4n);
                    'http://www.w3.org/1999/xhtml' !== j4n['uri'] || j4n['closed'] ? hjnm64++ : hjnm64 = zemd6j(fkqz0g, hjnm64, j4n['tagName'], tdium, itfukd);
            }
        } catch (co3259) {
            gzqka0['error']('element parse error: ' + co3259), hjnm64 = -0x1;
        }
        hjnm64 > ly$v ? ly$v = hjnm64 : $vwpr7(Math['max'](itmue, ly$v) + 0x1);
    }
}
function z_hnj64(_39nj, a1r) {
    return a1r['lineNumber'] = _39nj['lineNumber'], a1r['columnNumber'] = _39nj['columnNumber'], a1r;
}
function zeifu(demh6i, dfeti, uftide, mhn4j, p7v$l, tdukf) {
    for (var tudie, z08abx, azx0b = ++dfeti, rwbx8 = zxz1b;;) {
        var br8xw = demh6i['charAt'](azx0b);
        switch (br8xw) {
            case '=':
                if (rwbx8 === z$wv7py) tudie = demh6i['slice'](dfeti, azx0b), rwbx8 = zeuidmt;else {
                    if (rwbx8 !== zguqkt) throw new Error('attribute equal must after attrName');
                    rwbx8 = zeuidmt;
                }
                break;
            case '\x27':
            case '\x22':
                if (rwbx8 === zeuidmt || rwbx8 === z$wv7py) {
                    if (rwbx8 === z$wv7py && (tdukf['warning']('attribute value must after "="'), tudie = demh6i['slice'](dfeti, azx0b)), dfeti = azx0b + 0x1, azx0b = demh6i['indexOf'](br8xw, dfeti), !(azx0b > 0x0)) throw new Error('attribute value no end \'' + br8xw + '\' match');
                    z08abx = demh6i['slice'](dfeti, azx0b)['replace'](/&#?\w+;/g, p7v$l), uftide['add'](tudie, z08abx, dfeti - 0x1), rwbx8 = zbxz8a1;
                } else {
                    if (rwbx8 != zxb1za8) throw new Error('attribute value must after "="');
                    z08abx = demh6i['slice'](dfeti, azx0b)['replace'](/&#?\w+;/g, p7v$l), uftide['add'](tudie, z08abx, dfeti), tdukf['warning']('attribute "' + tudie + '" missed start quot(' + br8xw + ')!!'), dfeti = azx0b + 0x1, rwbx8 = zbxz8a1;
                }
                break;
            case '/':
                switch (rwbx8) {
                    case zxz1b:
                        uftide['setTagName'](demh6i['slice'](dfeti, azx0b));
                    case zbxz8a1:
                    case zc5o9_3:
                    case zenj:
                        rwbx8 = zenj, uftide['closed'] = !0x0;
                    case zxb1za8:
                    case z$wv7py:
                    case zguqkt:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return tdukf['error']('unexpected end of input'), rwbx8 == zxz1b && uftide['setTagName'](demh6i['slice'](dfeti, azx0b)), azx0b;
            case '>':
                switch (rwbx8) {
                    case zxz1b:
                        uftide['setTagName'](demh6i['slice'](dfeti, azx0b));
                    case zbxz8a1:
                    case zc5o9_3:
                    case zenj:
                        break;
                    case zxb1za8:
                    case z$wv7py:
                        z08abx = demh6i['slice'](dfeti, azx0b), '/' === z08abx['slice'](-0x1) && (uftide['closed'] = !0x0, z08abx = z08abx['slice'](0x0, -0x1));
                    case zguqkt:
                        rwbx8 === zguqkt && (z08abx = tudie), rwbx8 == zxb1za8 ? (tdukf['warning']('attribute "' + z08abx + '" missed quot(")!!'), uftide['add'](tudie, z08abx['replace'](/&#?\w+;/g, p7v$l), dfeti)) : ('http://www.w3.org/1999/xhtml' === mhn4j[''] && z08abx['match'](/^(?:disabled|checked|selected)$/i) || tdukf['warning']('attribute "' + z08abx + '" missed value!! "' + z08abx + '" instead!!'), uftide['add'](z08abx, z08abx, dfeti));
                        break;
                    case zeuidmt:
                        throw new Error('attribute value missed!!');
                }
                return azx0b;
            case '\u0080':
                br8xw = '\x20';
            default:
                if ('\x20' >= br8xw) switch (rwbx8) {
                    case zxz1b:
                        uftide['setTagName'](demh6i['slice'](dfeti, azx0b)), rwbx8 = zc5o9_3;
                        break;
                    case z$wv7py:
                        tudie = demh6i['slice'](dfeti, azx0b), rwbx8 = zguqkt;
                        break;
                    case zxb1za8:
                        var z08abx = demh6i['slice'](dfeti, azx0b)['replace'](/&#?\w+;/g, p7v$l);
                        tdukf['warning']('attribute "' + z08abx + '" missed quot(")!!'), uftide['add'](tudie, z08abx, dfeti);
                    case zbxz8a1:
                        rwbx8 = zc5o9_3;
                } else switch (rwbx8) {
                    case zguqkt:
                        {
                            uftide['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === mhn4j[''] && tudie['match'](/^(?:disabled|checked|selected)$/i) || tdukf['warning']('attribute "' + tudie + '" missed value!! "' + tudie + '" instead2!!'), uftide['add'](tudie, tudie, dfeti), dfeti = azx0b, rwbx8 = z$wv7py;
                        break;
                    case zbxz8a1:
                        tdukf['warning']('attribute space is required"' + tudie + '\x22!!');
                    case zc5o9_3:
                        rwbx8 = z$wv7py, dfeti = azx0b;
                        break;
                    case zeuidmt:
                        rwbx8 = zxb1za8, dfeti = azx0b;
                        break;
                    case zenj:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        azx0b++;
    }
}
function zhdj6em(x1$, hnj_46, qgab) {
    for (var p7$rv = x1$['tagName'], kf0qt = null, pwr$v1 = x1$['length']; pwr$v1--;) {
        var fkz0q = x1$[pwr$v1],
            za08b = fkz0q['qName'],
            $8r1xw = fkz0q['value'],
            nmj = za08b['indexOf'](':');
        if (nmj > 0x0) var djhe6m = fkz0q['prefix'] = za08b['slice'](0x0, nmj),
            etfd = za08b['slice'](nmj + 0x1),
            $1x8r = 'xmlns' === djhe6m && etfd;else etfd = za08b, djhe6m = null, $1x8r = 'xmlns' === za08b && '';
        fkz0q['localName'] = etfd, $1x8r !== !0x1 && (null == kf0qt && (kf0qt = {}, zv7$rpw(qgab, qgab = {})), qgab[$1x8r] = kf0qt[$1x8r] = $8r1xw, fkz0q['uri'] = 'http://www.w3.org/2000/xmlns/', hnj_46['startPrefixMapping']($1x8r, $8r1xw));
    }
    for (var pwr$v1 = x1$['length']; pwr$v1--;) {
        fkz0q = x1$[pwr$v1];
        var djhe6m = fkz0q['prefix'];
        djhe6m && ('xml' === djhe6m && (fkz0q['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== djhe6m && (fkz0q['uri'] = qgab[djhe6m || '']));
    }
    var nmj = p7$rv['indexOf'](':');
    nmj > 0x0 ? (djhe6m = x1$['prefix'] = p7$rv['slice'](0x0, nmj), etfd = x1$['localName'] = p7$rv['slice'](nmj + 0x1)) : (djhe6m = null, etfd = x1$['localName'] = p7$rv);
    var qfug = x1$['uri'] = qgab[djhe6m || ''];
    if (hnj_46['startElement'](qfug, etfd, p7$rv, x1$), !x1$['closed']) return x1$['currentNSMap'] = qgab, x1$['localNSMap'] = kf0qt, !0x0;
    if (hnj_46['endElement'](qfug, etfd, p7$rv), kf0qt) {
        for (djhe6m in kf0qt) hnj_46['endPrefixMapping'](djhe6m);
    }
}
function zemd6j(iufktd, eu6dm, m6ehdi, akzq0g, dhmej6) {
    if (/^(?:script|textarea)$/i['test'](m6ehdi)) {
        var ftiedu = iufktd['indexOf']('</' + m6ehdi + '>', eu6dm),
            hmejd6 = iufktd['substring'](eu6dm + 0x1, ftiedu);
        if (/[&<]/['test'](hmejd6)) return (/^script$/i['test'](m6ehdi) ? (dhmej6['characters'](hmejd6, 0x0, hmejd6['length']), ftiedu) : (hmejd6 = hmejd6['replace'](/&#?\w+;/g, akzq0g), dhmej6['characters'](hmejd6, 0x0, hmejd6['length']), ftiedu)
        );
    }
    return eu6dm + 0x1;
}
function zpw81r$(qgbaz0, kftqg0, fqgutk, _njh) {
    var fieutd = _njh[fqgutk];
    return null == fieutd && (fieutd = qgbaz0['lastIndexOf']('</' + fqgutk + '>'), kftqg0 > fieutd && (fieutd = qgbaz0['lastIndexOf']('</' + fqgutk)), _njh[fqgutk] = fieutd), kftqg0 > fieutd;
}
function zv7$rpw(n394_c, z0qkgf) {
    for (var a8z1 in n394_c) z0qkgf[a8z1] = n394_c[a8z1];
}
function za8zx0(tium, kfitgu, r1b, ftigku) {
    var x8r1 = tium['charAt'](kfitgu + 0x2);
    switch (x8r1) {
        case '-':
            if ('-' === tium['charAt'](kfitgu + 0x3)) {
                var lp$yv = tium['indexOf']('-->', kfitgu + 0x4);
                return lp$yv > kfitgu ? (r1b['comment'](tium, kfitgu + 0x4, lp$yv - kfitgu - 0x4), lp$yv + 0x3) : (ftigku['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == tium['substr'](kfitgu + 0x3, 0x6)) {
                var lp$yv = tium['indexOf'](']]>', kfitgu + 0x9);
                return r1b['startCDATA'](), r1b['characters'](tium, kfitgu + 0x9, lp$yv - kfitgu - 0x9), r1b['endCDATA'](), lp$yv + 0x3;
            }
            var wy$v7p = za80bx(tium, kfitgu),
                w$r1vp = wy$v7p['length'];
            if (w$r1vp > 0x1 && /!doctype/i['test'](wy$v7p[0x0][0x0])) {
                var fgtkq0 = wy$v7p[0x1][0x0],
                    demiu6 = w$r1vp > 0x3 && /^public$/i['test'](wy$v7p[0x2][0x0]) && wy$v7p[0x3][0x0],
                    $p81 = w$r1vp > 0x4 && wy$v7p[0x4][0x0],
                    qag0b = wy$v7p[w$r1vp - 0x1];
                return r1b['startDTD'](fgtkq0, demiu6 && demiu6['replace'](/^(['"])(.*?)\1$/, '$2'), $p81 && $p81['replace'](/^(['"])(.*?)\1$/, '$2')), r1b['endDTD'](), qag0b['index'] + qag0b[0x0]['length'];
            }
    }
    return -0x1;
}
function zhm46(iuftkd, _jh9, o395) {
    var gukqtf = iuftkd['indexOf']('?>', _jh9);
    if (gukqtf) {
        var n6hmej = iuftkd['substring'](_jh9, gukqtf)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (n6hmej) {
            {
                n6hmej[0x0]['length'];
            }
            return o395['processingInstruction'](n6hmej[0x1], n6hmej[0x2]), gukqtf + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function z_nj493() {}
function zx8b1a(e6mnhj, bx8w1r) {
    return e6mnhj['__proto__'] = bx8w1r, e6mnhj;
}
function za80bx(bzax0q, v1wp) {
    var nh_9j,
        qutkg = [],
        njh6_4 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (njh6_4['lastIndex'] = v1wp, njh6_4['exec'](bzax0q); nh_9j = njh6_4['exec'](bzax0q);) if (qutkg['push'](nh_9j), nh_9j[0x1]) return qutkg;
}
var zh6nm4 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    zxr8$w1 = new RegExp('[\\-\\.0-9' + zh6nm4['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    zakz0gq = new RegExp('^' + zh6nm4['source'] + zxr8$w1['source'] + '*(?::' + zh6nm4['source'] + zxr8$w1['source'] + '*)?$'),
    zxz1b = 0x0,
    z$wv7py = 0x1,
    zguqkt = 0x2,
    zeuidmt = 0x3,
    zxb1za8 = 0x4,
    zbxz8a1 = 0x5,
    zc5o9_3 = 0x6,
    zenj = 0x7;
zo35['prototype'] = {
    'parse': function (brxw, rv1$wp, j34n_) {
        var tufikg = this['domBuilder'];
        tufikg['startDocument'](), zv7$rpw(rv1$wp, rv1$wp = {}), zgutki(brxw, rv1$wp, j34n_, tufikg, this['errorHandler']), tufikg['endDocument']();
    }
}, z_nj493['prototype'] = {
    'setTagName': function (uikdf) {
        if (!zakz0gq['test'](uikdf)) throw new Error('invalid tagName:' + uikdf);
        this['tagName'] = uikdf;
    },
    'add': function (p1wr$v, etfdi, qtf0gk) {
        if (!zakz0gq['test'](p1wr$v)) throw new Error('invalid attribute:' + p1wr$v);
        this[this['length']++] = {
            'qName': p1wr$v,
            'value': etfdi,
            'offset': qtf0gk
        };
    },
    'length': 0x0,
    'getLocalName': function (kiutfg) {
        return this[kiutfg]['localName'];
    },
    'getLocator': function (ukifg) {
        return this[ukifg]['locator'];
    },
    'getQName': function (tukqfg) {
        return this[tukqfg]['qName'];
    },
    'getURI': function (co592) {
        return this[co592]['uri'];
    },
    'getValue': function (p$w7y) {
        return this[p$w7y]['value'];
    }
}, zx8b1a({}, zx8b1a['prototype']) instanceof zx8b1a || (zx8b1a = function (p$7ywv, _9n3j4) {
    function uifde() {}
    uifde['prototype'] = _9n3j4, uifde = new uifde();
    for (_9n3j4 in p$7ywv) uifde[_9n3j4] = p$7ywv[_9n3j4];
    return uifde;
}), exports['XMLReader'] = zo35;