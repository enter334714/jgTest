var b = wx.$e;
function evf7() {}
function ed608b(yfv47_, $jtigx, k9b60, z_f4y, xghr) {
    function yhzvf(a7vf4) {
        if (a7vf4 > 0xffff) {
            a7vf4 -= 0x10000;
            var ku9bs = 0xd800 + (a7vf4 >> 0xa),
                tzyhl = 0xdc00 + (0x3ff & a7vf4);
            return String['fromCharCode'](ku9bs, tzyhl);
        }
        return String['fromCharCode'](a7vf4);
    }
    function lzrgh(mcoa7p) {
        var s3uqn9 = mcoa7p['slice'](0x1, -0x1);
        return s3uqn9 in k9b60 ? k9b60[s3uqn9] : '#' === s3uqn9['charAt'](0x0) ? yhzvf(parseInt(s3uqn9['substr'](0x1)['replace']('x', '0x'))) : (xghr['error']('entity not found:' + mcoa7p), mcoa7p);
    }
    function vf7_y(x$lgt) {
        if (x$lgt > v47_m) {
            var pcamoe = yfv47_['substring'](v47_m, x$lgt)['replace'](/&#?\w+;/g, lzrgh);
            txi$j && tigl$(v47_m), z_f4y['characters'](pcamoe, 0x0, x$lgt - v47_m), v47_m = x$lgt;
        }
    }
    function tigl$($gjtx, k650bd) {
        for (; $gjtx >= xtrg && (k650bd = s609b['exec'](yfv47_));) yrflhz = k650bd['index'], xtrg = yrflhz + k650bd[0x0]['length'], txi$j['lineNumber']++;
        txi$j['columnNumber'] = $gjtx - yrflhz + 0x1;
    }
    for (var yrflhz = 0x0, xtrg = 0x0, s609b = /.*(?:\r\n?|\n)|.*$/g, txi$j = z_f4y['locator'], zy4_v = [{ 'currentNSMap': $jtigx }], d80w2 = {}, v47_m = 0x0;;) {
        try {
            var hvyfzr = yfv47_['indexOf']('<', v47_m);
            if (0x0 > hvyfzr) {
                if (!yfv47_['substr'](v47_m)['match'](/^\s*$/)) {
                    var mco7pa = z_f4y['doc'],
                        w2d85 = mco7pa['createTextNode'](yfv47_['substr'](v47_m));
                    mco7pa['appendChild'](w2d85), z_f4y['currentElement'] = w2d85;
                }
                return;
            }
            switch (hvyfzr > v47_m && vf7_y(hvyfzr), yfv47_['charAt'](hvyfzr + 0x1)) {
                case '/':
                    var d1258 = yfv47_['indexOf']('>', hvyfzr + 0x3),
                        xq$ij3 = yfv47_['substring'](hvyfzr + 0x2, d1258),
                        aemc = zy4_v['pop']();
                    0x0 > d1258 ? (xq$ij3 = yfv47_['substring'](hvyfzr + 0x2)['replace'](/[\s<].*/, ''), xghr['error']('end tag name: ' + xq$ij3 + ' is not complete:' + aemc['tagName']), d1258 = hvyfzr + 0x1 + xq$ij3['length']) : xq$ij3['match'](/\s</) && (xq$ij3 = xq$ij3['replace'](/[\s<].*/, ''), xghr['error']('end tag name: ' + xq$ij3 + ' maybe not complete'), d1258 = hvyfzr + 0x1 + xq$ij3['length']);
                    var uns9q3 = aemc['localNSMap'],
                        tlh$g = aemc['tagName'] == xq$ij3,
                        su3q9n = tlh$g || aemc['tagName'] && aemc['tagName']['toLowerCase']() == xq$ij3['toLowerCase']();
                    if (su3q9n) {
                        if (z_f4y['endElement'](aemc['uri'], aemc['localName'], xq$ij3), uns9q3) {
                            for (var rtxglh in uns9q3) z_f4y['endPrefixMapping'](rtxglh);
                        }
                        tlh$g || xghr['fatalError']('end tag name: ' + xq$ij3 + ' is not match the current start tagName:' + aemc['tagName']);
                    } else zy4_v['push'](aemc);
                    d1258++;
                    break;
                case '?':
                    txi$j && tigl$(hvyfzr), d1258 = evfz4ry(yfv47_, hvyfzr, z_f4y);
                    break;
                case '!':
                    txi$j && tigl$(hvyfzr), d1258 = ebdk05(yfv47_, hvyfzr, z_f4y, xghr);
                    break;
                default:
                    txi$j && tigl$(hvyfzr);
                    var c7apom = new ex$gi3j(),
                        vy4zf = zy4_v[zy4_v['length'] - 0x1]['currentNSMap'],
                        d1258 = eylrfhz(yfv47_, hvyfzr, c7apom, vy4zf, lzrgh, xghr),
                        o_7c = c7apom['length'];
                    if (!c7apom['closed'] && eyvrzf(yfv47_, d1258, c7apom['tagName'], d80w2) && (c7apom['closed'] = !0x0, k9b60['nbsp'] || xghr['warning']('unclosed xml attribute')), txi$j && o_7c) {
                        for (var qjn3 = es6b90(txi$j, {}), pomcae = 0x0; o_7c > pomcae; pomcae++) {
                            var vf_7a = c7apom[pomcae];
                            tigl$(vf_7a['offset']), vf_7a['locator'] = es6b90(txi$j, {});
                        }
                        z_f4y['locator'] = qjn3, evhzfr(c7apom, z_f4y, vy4zf) && zy4_v['push'](c7apom), z_f4y['locator'] = txi$j;
                    } else evhzfr(c7apom, z_f4y, vy4zf) && zy4_v['push'](c7apom);
                    'http://www.w3.org/1999/xhtml' !== c7apom['uri'] || c7apom['closed'] ? d1258++ : d1258 = eaempoc(yfv47_, d1258, c7apom['tagName'], lzrgh, z_f4y);
            }
        } catch (rtzhlg) {
            xghr['error']('element parse error: ' + rtzhlg), d1258 = -0x1;
        }
        d1258 > v47_m ? v47_m = d1258 : vf7_y(Math['max'](hvyfzr, v47_m) + 0x1);
    }
}
function es6b90(pco, mo7a_) {
    return mo7a_['lineNumber'] = pco['lineNumber'], mo7a_['columnNumber'] = pco['columnNumber'], mo7a_;
}
function eylrfhz(nqusk, tx$gil, j3x$gi, gxt$li, i$xtl, _zyfv4) {
    for (var paocm, y7fv, skb609 = ++tx$gil, fz_v = eil$xt;;) {
        var d6k0b9 = nqusk['charAt'](skb609);
        switch (d6k0b9) {
            case '=':
                if (fz_v === ef4v7_y) paocm = nqusk['slice'](tx$gil, skb609), fz_v = ebd90k;else {
                    if (fz_v !== ed1w852) throw new Error('attribute equal must after attrName');
                    fz_v = ebd90k;
                }
                break;
            case '\x27':
            case '\x22':
                if (fz_v === ebd90k || fz_v === ef4v7_y) {
                    if (fz_v === ef4v7_y && (_zyfv4['warning']('attribute value must after "="'), paocm = nqusk['slice'](tx$gil, skb609)), tx$gil = skb609 + 0x1, skb609 = nqusk['indexOf'](d6k0b9, tx$gil), !(skb609 > 0x0)) throw new Error('attribute value no end \'' + d6k0b9 + '\' match');
                    y7fv = nqusk['slice'](tx$gil, skb609)['replace'](/&#?\w+;/g, i$xtl), j3x$gi['add'](paocm, y7fv, tx$gil - 0x1), fz_v = efz4_vy;
                } else {
                    if (fz_v != eampeo) throw new Error('attribute value must after "="');
                    y7fv = nqusk['slice'](tx$gil, skb609)['replace'](/&#?\w+;/g, i$xtl), j3x$gi['add'](paocm, y7fv, tx$gil), _zyfv4['warning']('attribute "' + paocm + '" missed start quot(' + d6k0b9 + ')!!'), tx$gil = skb609 + 0x1, fz_v = efz4_vy;
                }
                break;
            case '/':
                switch (fz_v) {
                    case eil$xt:
                        j3x$gi['setTagName'](nqusk['slice'](tx$gil, skb609));
                    case efz4_vy:
                    case ekdb50:
                    case eyvrf4:
                        fz_v = eyvrf4, j3x$gi['closed'] = !0x0;
                    case eampeo:
                    case ef4v7_y:
                    case ed1w852:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return _zyfv4['error']('unexpected end of input'), fz_v == eil$xt && j3x$gi['setTagName'](nqusk['slice'](tx$gil, skb609)), skb609;
            case '>':
                switch (fz_v) {
                    case eil$xt:
                        j3x$gi['setTagName'](nqusk['slice'](tx$gil, skb609));
                    case efz4_vy:
                    case ekdb50:
                    case eyvrf4:
                        break;
                    case eampeo:
                    case ef4v7_y:
                        y7fv = nqusk['slice'](tx$gil, skb609), '/' === y7fv['slice'](-0x1) && (j3x$gi['closed'] = !0x0, y7fv = y7fv['slice'](0x0, -0x1));
                    case ed1w852:
                        fz_v === ed1w852 && (y7fv = paocm), fz_v == eampeo ? (_zyfv4['warning']('attribute "' + y7fv + '" missed quot(")!!'), j3x$gi['add'](paocm, y7fv['replace'](/&#?\w+;/g, i$xtl), tx$gil)) : ('http://www.w3.org/1999/xhtml' === gxt$li[''] && y7fv['match'](/^(?:disabled|checked|selected)$/i) || _zyfv4['warning']('attribute "' + y7fv + '" missed value!! "' + y7fv + '" instead!!'), j3x$gi['add'](y7fv, y7fv, tx$gil));
                        break;
                    case ebd90k:
                        throw new Error('attribute value missed!!');
                }
                return skb609;
            case '\u0080':
                d6k0b9 = '\x20';
            default:
                if ('\x20' >= d6k0b9) switch (fz_v) {
                    case eil$xt:
                        j3x$gi['setTagName'](nqusk['slice'](tx$gil, skb609)), fz_v = ekdb50;
                        break;
                    case ef4v7_y:
                        paocm = nqusk['slice'](tx$gil, skb609), fz_v = ed1w852;
                        break;
                    case eampeo:
                        var y7fv = nqusk['slice'](tx$gil, skb609)['replace'](/&#?\w+;/g, i$xtl);
                        _zyfv4['warning']('attribute "' + y7fv + '" missed quot(")!!'), j3x$gi['add'](paocm, y7fv, tx$gil);
                    case efz4_vy:
                        fz_v = ekdb50;
                } else switch (fz_v) {
                    case ed1w852:
                        {
                            j3x$gi['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === gxt$li[''] && paocm['match'](/^(?:disabled|checked|selected)$/i) || _zyfv4['warning']('attribute "' + paocm + '" missed value!! "' + paocm + '" instead2!!'), j3x$gi['add'](paocm, paocm, tx$gil), tx$gil = skb609, fz_v = ef4v7_y;
                        break;
                    case efz4_vy:
                        _zyfv4['warning']('attribute space is required"' + paocm + '\x22!!');
                    case ekdb50:
                        fz_v = ef4v7_y, tx$gil = skb609;
                        break;
                    case ebd90k:
                        fz_v = eampeo, tx$gil = skb609;
                        break;
                    case eyvrf4:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        skb609++;
    }
}
function evhzfr(g3j$xi, c_4m, xgi$lt) {
    for (var q9s3nu = g3j$xi['tagName'], hflry = null, vzf_y = g3j$xi['length']; vzf_y--;) {
        var mpca = g3j$xi[vzf_y],
            j3qs = mpca['qName'],
            am7_c4 = mpca['value'],
            f47_yv = j3qs['indexOf'](':');
        if (f47_yv > 0x0) var j3un = mpca['prefix'] = j3qs['slice'](0x0, f47_yv),
            igtlx$ = j3qs['slice'](f47_yv + 0x1),
            xjt = 'xmlns' === j3un && igtlx$;else igtlx$ = j3qs, j3un = null, xjt = 'xmlns' === j3qs && '';
        mpca['localName'] = igtlx$, xjt !== !0x1 && (null == hflry && (hflry = {}, euksn9(xgi$lt, xgi$lt = {})), xgi$lt[xjt] = hflry[xjt] = am7_c4, mpca['uri'] = 'http://www.w3.org/2000/xmlns/', c_4m['startPrefixMapping'](xjt, am7_c4));
    }
    for (var vzf_y = g3j$xi['length']; vzf_y--;) {
        mpca = g3j$xi[vzf_y];
        var j3un = mpca['prefix'];
        j3un && ('xml' === j3un && (mpca['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== j3un && (mpca['uri'] = xgi$lt[j3un || '']));
    }
    var f47_yv = q9s3nu['indexOf'](':');
    f47_yv > 0x0 ? (j3un = g3j$xi['prefix'] = q9s3nu['slice'](0x0, f47_yv), igtlx$ = g3j$xi['localName'] = q9s3nu['slice'](f47_yv + 0x1)) : (j3un = null, igtlx$ = g3j$xi['localName'] = q9s3nu);
    var $tgixl = g3j$xi['uri'] = xgi$lt[j3un || ''];
    if (c_4m['startElement']($tgixl, igtlx$, q9s3nu, g3j$xi), !g3j$xi['closed']) return g3j$xi['currentNSMap'] = xgi$lt, g3j$xi['localNSMap'] = hflry, !0x0;
    if (c_4m['endElement']($tgixl, igtlx$, q9s3nu), hflry) {
        for (j3un in hflry) c_4m['endPrefixMapping'](j3un);
    }
}
function eaempoc(tig$xj, dwb850, ythl, fz4vr, bd8w) {
    if (/^(?:script|textarea)$/i['test'](ythl)) {
        var yhzr = tig$xj['indexOf']('</' + ythl + '>', dwb850),
            jqns3u = tig$xj['substring'](dwb850 + 0x1, yhzr);
        if (/[&<]/['test'](jqns3u)) return (/^script$/i['test'](ythl) ? (bd8w['characters'](jqns3u, 0x0, jqns3u['length']), yhzr) : (jqns3u = jqns3u['replace'](/&#?\w+;/g, fz4vr), bd8w['characters'](jqns3u, 0x0, jqns3u['length']), yhzr)
        );
    }
    return dwb850 + 0x1;
}
function eyvrzf(xg3$i, rvf4, b60d85, bd60k9) {
    var w508db = bd60k9[b60d85];
    return null == w508db && (w508db = xg3$i['lastIndexOf']('</' + b60d85 + '>'), rvf4 > w508db && (w508db = xg3$i['lastIndexOf']('</' + b60d85)), bd60k9[b60d85] = w508db), rvf4 > w508db;
}
function euksn9(rtlgh, n9sku6) {
    for (var nuq9ks in rtlgh) n9sku6[nuq9ks] = rtlgh[nuq9ks];
}
function ebdk05(grzlht, ni3jq, zyrf4, m7pcao) {
    var kuqn9 = grzlht['charAt'](ni3jq + 0x2);
    switch (kuqn9) {
        case '-':
            if ('-' === grzlht['charAt'](ni3jq + 0x3)) {
                var _coam = grzlht['indexOf']('-->', ni3jq + 0x4);
                return _coam > ni3jq ? (zyrf4['comment'](grzlht, ni3jq + 0x4, _coam - ni3jq - 0x4), _coam + 0x3) : (m7pcao['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == grzlht['substr'](ni3jq + 0x3, 0x6)) {
                var _coam = grzlht['indexOf'](']]>', ni3jq + 0x9);
                return zyrf4['startCDATA'](), zyrf4['characters'](grzlht, ni3jq + 0x9, _coam - ni3jq - 0x9), zyrf4['endCDATA'](), _coam + 0x3;
            }
            var skn96u = es3nqj(grzlht, ni3jq),
                jqi$3x = skn96u['length'];
            if (jqi$3x > 0x1 && /!doctype/i['test'](skn96u[0x0][0x0])) {
                var yf_vz = skn96u[0x1][0x0],
                    ti$jxg = jqi$3x > 0x3 && /^public$/i['test'](skn96u[0x2][0x0]) && skn96u[0x3][0x0],
                    c_74am = jqi$3x > 0x4 && skn96u[0x4][0x0],
                    ixg3 = skn96u[jqi$3x - 0x1];
                return zyrf4['startDTD'](yf_vz, ti$jxg && ti$jxg['replace'](/^(['"])(.*?)\1$/, '$2'), c_74am && c_74am['replace'](/^(['"])(.*?)\1$/, '$2')), zyrf4['endDTD'](), ixg3['index'] + ixg3[0x0]['length'];
            }
    }
    return -0x1;
}
function evfz4ry(nsu3, cm_4a, cpmao) {
    var q$ji = nsu3['indexOf']('?>', cm_4a);
    if (q$ji) {
        var ht$ = nsu3['substring'](cm_4a, q$ji)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (ht$) {
            {
                ht$[0x0]['length'];
            }
            return cpmao['processingInstruction'](ht$[0x1], ht$[0x2]), q$ji + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function ex$gi3j() {}
function es69unk(rlfyhz, hrzt) {
    return rlfyhz['__proto__'] = hrzt, rlfyhz;
}
function es3nqj(ecaom, zhgtrl) {
    var xgtij,
        fvyrz = [],
        fzhryv = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (fzhryv['lastIndex'] = zhgtrl, fzhryv['exec'](ecaom); xgtij = fzhryv['exec'](ecaom);) if (fvyrz['push'](xgtij), xgtij[0x1]) return fvyrz;
}
var eylthrz = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    eao_7 = new RegExp('[\\-\\.0-9' + eylthrz['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    ehtlgzr = new RegExp('^' + eylthrz['source'] + eao_7['source'] + '*(?::' + eylthrz['source'] + eao_7['source'] + '*)?$'),
    eil$xt = 0x0,
    ef4v7_y = 0x1,
    ed1w852 = 0x2,
    ebd90k = 0x3,
    eampeo = 0x4,
    efz4_vy = 0x5,
    ekdb50 = 0x6,
    eyvrf4 = 0x7;
evf7['prototype'] = {
    'parse': function (c7amo, hlxtrg, j3nqu) {
        var _zfv4y = this['domBuilder'];
        _zfv4y['startDocument'](), euksn9(hlxtrg, hlxtrg = {}), ed608b(c7amo, hlxtrg, j3nqu, _zfv4y, this['errorHandler']), _zfv4y['endDocument']();
    }
}, ex$gi3j['prototype'] = {
    'setTagName': function (kn96u) {
        if (!ehtlgzr['test'](kn96u)) throw new Error('invalid tagName:' + kn96u);
        this['tagName'] = kn96u;
    },
    'add': function (wb50, j$i3q, x3gi$) {
        if (!ehtlgzr['test'](wb50)) throw new Error('invalid attribute:' + wb50);
        this[this['length']++] = {
            'qName': wb50,
            'value': j$i3q,
            'offset': x3gi$
        };
    },
    'length': 0x0,
    'getLocalName': function (uqjn) {
        return this[uqjn]['localName'];
    },
    'getLocator': function (wd0b85) {
        return this[wd0b85]['locator'];
    },
    'getQName': function (yflrz) {
        return this[yflrz]['qName'];
    },
    'getURI': function ($xitg) {
        return this[$xitg]['uri'];
    },
    'getValue': function (eopcm) {
        return this[eopcm]['value'];
    }
}, es69unk({}, es69unk['prototype']) instanceof es69unk || (es69unk = function (yf4zv_, lgrzt) {
    function w8052() {}
    w8052['prototype'] = lgrzt, w8052 = new w8052();
    for (lgrzt in yf4zv_) w8052[lgrzt] = yf4zv_[lgrzt];
    return w8052;
}), exports['XMLReader'] = evf7;