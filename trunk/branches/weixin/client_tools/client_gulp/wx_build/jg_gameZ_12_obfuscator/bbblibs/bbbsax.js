var _ = wx.y$;
function _dnplomk() {}
function _drptosq(_y10, ywvxuz, tsprq, bgecfd, fcdg) {
    function y$zxvw(ihgedf) {
        if (ihgedf > 0xffff) {
            ihgedf -= 0x10000;
            var fjkhi = 0xd800 + (ihgedf >> 0xa),
                ompkl = 0xdc00 + (0x3ff & ihgedf);
            return String['fromCharCode'](fjkhi, ompkl);
        }
        return String['fromCharCode'](ihgedf);
    }
    function bdfegc(fghkij) {
        var ghfecd = fghkij['slice'](0x1, -0x1);
        return ghfecd in tsprq ? tsprq[ghfecd] : '#' === ghfecd['charAt'](0x0) ? y$zxvw(parseInt(ghfecd['substr'](0x1)['replace']('x', '0x'))) : (fcdg['error']('entity not found:' + fghkij), fghkij);
    }
    function _z$210(jhmil) {
        if (jhmil > vuxty) {
            var rpqsno = _y10['substring'](vuxty, jhmil)['replace'](/&#?\w+;/g, bdfegc);
            npqr && rpts(vuxty), bgecfd['characters'](rpqsno, 0x0, jhmil - vuxty), vuxty = jhmil;
        }
    }
    function rpts(mnkloj, ifgjk) {
        for (; mnkloj >= utxv && (ifgjk = tosqp['exec'](_y10));) jfgikh = ifgjk['index'], utxv = jfgikh + ifgjk[0x0]['length'], npqr['lineNumber']++;
        npqr['columnNumber'] = mnkloj - jfgikh + 0x1;
    }
    for (var jfgikh = 0x0, utxv = 0x0, tosqp = /.*(?:\r\n?|\n)|.*$/g, npqr = bgecfd['locator'], ikfhgj = [{ 'currentNSMap': ywvxuz }], hdief = {}, vuxty = 0x0;;) {
        try {
            var z_y01 = _y10['indexOf']('<', vuxty);
            if (0x0 > z_y01) {
                if (!_y10['substr'](vuxty)['match'](/^\s*$/)) {
                    var lmpo = bgecfd['doc'],
                        uxyzvw = lmpo['createTextNode'](_y10['substr'](vuxty));
                    lmpo['appendChild'](uxyzvw), bgecfd['currentElement'] = uxyzvw;
                }
                return;
            }
            switch (z_y01 > vuxty && _z$210(z_y01), _y10['charAt'](z_y01 + 0x1)) {
                case '/':
                    var wvyzux = _y10['indexOf']('>', z_y01 + 0x3),
                        kljmni = _y10['substring'](z_y01 + 0x2, wvyzux),
                        puq = ikfhgj['pop']();
                    0x0 > wvyzux ? (kljmni = _y10['substring'](z_y01 + 0x2)['replace'](/[\s<].*/, ''), fcdg['error']('end tag name: ' + kljmni + ' is not complete:' + puq['tagName']), wvyzux = z_y01 + 0x1 + kljmni['length']) : kljmni['match'](/\s</) && (kljmni = kljmni['replace'](/[\s<].*/, ''), fcdg['error']('end tag name: ' + kljmni + ' maybe not complete'), wvyzux = z_y01 + 0x1 + kljmni['length']);
                    var rqvs = puq['localNSMap'],
                        mljnk = puq['tagName'] == kljmni,
                        kmijn = mljnk || puq['tagName'] && puq['tagName']['toLowerCase']() == kljmni['toLowerCase']();
                    if (kmijn) {
                        if (bgecfd['endElement'](puq['uri'], puq['localName'], kljmni), rqvs) {
                            for (var cbaef in rqvs) bgecfd['endPrefixMapping'](cbaef);
                        }
                        mljnk || fcdg['fatalError']('end tag name: ' + kljmni + ' is not match the current start tagName:' + puq['tagName']);
                    } else ikfhgj['push'](puq);
                    wvyzux++;
                    break;
                case '?':
                    npqr && rpts(z_y01), wvyzux = _difegdh(_y10, z_y01, bgecfd);
                    break;
                case '!':
                    npqr && rpts(z_y01), wvyzux = _dstqpr(_y10, z_y01, bgecfd, fcdg);
                    break;
                default:
                    npqr && rpts(z_y01);
                    var mopnq = new _dikhlg(),
                        _y1$ = ikfhgj[ikfhgj['length'] - 0x1]['currentNSMap'],
                        wvyzux = _dtvxusw(_y10, z_y01, mopnq, _y1$, bdfegc, fcdg),
                        rnqop = mopnq['length'];
                    if (!mopnq['closed'] && _dfcabe(_y10, wvyzux, mopnq['tagName'], hdief) && (mopnq['closed'] = !0x0, tsprq['nbsp'] || fcdg['warning']('unclosed xml attribute')), npqr && rnqop) {
                        for (var srqv = _dqolpn(npqr, {}), tqvsru = 0x0; rnqop > tqvsru; tqvsru++) {
                            var vrtwus = mopnq[tqvsru];
                            rpts(vrtwus['offset']), vrtwus['locator'] = _dqolpn(npqr, {});
                        }
                        bgecfd['locator'] = srqv, _dxwzy$_(mopnq, bgecfd, _y1$) && ikfhgj['push'](mopnq), bgecfd['locator'] = npqr;
                    } else _dxwzy$_(mopnq, bgecfd, _y1$) && ikfhgj['push'](mopnq);
                    'http://www.w3.org/1999/xhtml' !== mopnq['uri'] || mopnq['closed'] ? wvyzux++ : wvyzux = _djgehif(_y10, wvyzux, mopnq['tagName'], bdfegc, bgecfd);
            }
        } catch (pnomkl) {
            fcdg['error']('element parse error: ' + pnomkl), wvyzux = -0x1;
        }
        wvyzux > vuxty ? vuxty = wvyzux : _z$210(Math['max'](z_y01, vuxty) + 0x1);
    }
}
function _dqolpn(qmorn, _yz1$) {
    return _yz1$['lineNumber'] = qmorn['lineNumber'], _yz1$['columnNumber'] = qmorn['columnNumber'], _yz1$;
}
function _dtvxusw(_1302$, ikfj, vts, omknl, sqpor, spruq) {
    for (var svutxw, fji, svwrut = ++ikfj, ljhkg = _duzvyxw;;) {
        var uxywz = _1302$['charAt'](svwrut);
        switch (uxywz) {
            case '=':
                if (ljhkg === _dnjlom) svutxw = _1302$['slice'](ikfj, svwrut), ljhkg = _dejgfhi;else {
                    if (ljhkg !== _dlkmhi) throw new Error('attribute equal must after attrName');
                    ljhkg = _dejgfhi;
                }
                break;
            case '\x27':
            case '\x22':
                if (ljhkg === _dejgfhi || ljhkg === _dnjlom) {
                    if (ljhkg === _dnjlom && (spruq['warning']('attribute value must after "="'), svutxw = _1302$['slice'](ikfj, svwrut)), ikfj = svwrut + 0x1, svwrut = _1302$['indexOf'](uxywz, ikfj), !(svwrut > 0x0)) throw new Error('attribute value no end \'' + uxywz + '\' match');
                    fji = _1302$['slice'](ikfj, svwrut)['replace'](/&#?\w+;/g, sqpor), vts['add'](svutxw, fji, ikfj - 0x1), ljhkg = _d$z10y_;
                } else {
                    if (ljhkg != _d$1_302) throw new Error('attribute value must after "="');
                    fji = _1302$['slice'](ikfj, svwrut)['replace'](/&#?\w+;/g, sqpor), vts['add'](svutxw, fji, ikfj), spruq['warning']('attribute "' + svutxw + '" missed start quot(' + uxywz + ')!!'), ikfj = svwrut + 0x1, ljhkg = _d$z10y_;
                }
                break;
            case '/':
                switch (ljhkg) {
                    case _duzvyxw:
                        vts['setTagName'](_1302$['slice'](ikfj, svwrut));
                    case _d$z10y_:
                    case _dqprnmo:
                    case _drvsqtu:
                        ljhkg = _drvsqtu, vts['closed'] = !0x0;
                    case _d$1_302:
                    case _dnjlom:
                    case _dlkmhi:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return spruq['error']('unexpected end of input'), ljhkg == _duzvyxw && vts['setTagName'](_1302$['slice'](ikfj, svwrut)), svwrut;
            case '>':
                switch (ljhkg) {
                    case _duzvyxw:
                        vts['setTagName'](_1302$['slice'](ikfj, svwrut));
                    case _d$z10y_:
                    case _dqprnmo:
                    case _drvsqtu:
                        break;
                    case _d$1_302:
                    case _dnjlom:
                        fji = _1302$['slice'](ikfj, svwrut), '/' === fji['slice'](-0x1) && (vts['closed'] = !0x0, fji = fji['slice'](0x0, -0x1));
                    case _dlkmhi:
                        ljhkg === _dlkmhi && (fji = svutxw), ljhkg == _d$1_302 ? (spruq['warning']('attribute "' + fji + '" missed quot(")!!'), vts['add'](svutxw, fji['replace'](/&#?\w+;/g, sqpor), ikfj)) : ('http://www.w3.org/1999/xhtml' === omknl[''] && fji['match'](/^(?:disabled|checked|selected)$/i) || spruq['warning']('attribute "' + fji + '" missed value!! "' + fji + '" instead!!'), vts['add'](fji, fji, ikfj));
                        break;
                    case _dejgfhi:
                        throw new Error('attribute value missed!!');
                }
                return svwrut;
            case '\u0080':
                uxywz = '\x20';
            default:
                if ('\x20' >= uxywz) switch (ljhkg) {
                    case _duzvyxw:
                        vts['setTagName'](_1302$['slice'](ikfj, svwrut)), ljhkg = _dqprnmo;
                        break;
                    case _dnjlom:
                        svutxw = _1302$['slice'](ikfj, svwrut), ljhkg = _dlkmhi;
                        break;
                    case _d$1_302:
                        var fji = _1302$['slice'](ikfj, svwrut)['replace'](/&#?\w+;/g, sqpor);
                        spruq['warning']('attribute "' + fji + '" missed quot(")!!'), vts['add'](svutxw, fji, ikfj);
                    case _d$z10y_:
                        ljhkg = _dqprnmo;
                } else switch (ljhkg) {
                    case _dlkmhi:
                        {
                            vts['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === omknl[''] && svutxw['match'](/^(?:disabled|checked|selected)$/i) || spruq['warning']('attribute "' + svutxw + '" missed value!! "' + svutxw + '" instead2!!'), vts['add'](svutxw, svutxw, ikfj), ikfj = svwrut, ljhkg = _dnjlom;
                        break;
                    case _d$z10y_:
                        spruq['warning']('attribute space is required"' + svutxw + '\x22!!');
                    case _dqprnmo:
                        ljhkg = _dnjlom, ikfj = svwrut;
                        break;
                    case _dejgfhi:
                        ljhkg = _d$1_302, ikfj = svwrut;
                        break;
                    case _drvsqtu:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        svwrut++;
    }
}
function _dxwzy$_(koplnm, echgdf, klmihj) {
    for (var sqvtu = koplnm['tagName'], stxuw = null, ikjhgl = koplnm['length']; ikjhgl--;) {
        var nmpoqr = koplnm[ikjhgl],
            xvuyt = nmpoqr['qName'],
            afbed = nmpoqr['value'],
            uwrsv = xvuyt['indexOf'](':');
        if (uwrsv > 0x0) var jkinm = nmpoqr['prefix'] = xvuyt['slice'](0x0, uwrsv),
            cedghf = xvuyt['slice'](uwrsv + 0x1),
            qsurpt = 'xmlns' === jkinm && cedghf;else cedghf = xvuyt, jkinm = null, qsurpt = 'xmlns' === xvuyt && '';
        nmpoqr['localName'] = cedghf, qsurpt !== !0x1 && (null == stxuw && (stxuw = {}, _d_2$z10(klmihj, klmihj = {})), klmihj[qsurpt] = stxuw[qsurpt] = afbed, nmpoqr['uri'] = 'http://www.w3.org/2000/xmlns/', echgdf['startPrefixMapping'](qsurpt, afbed));
    }
    for (var ikjhgl = koplnm['length']; ikjhgl--;) {
        nmpoqr = koplnm[ikjhgl];
        var jkinm = nmpoqr['prefix'];
        jkinm && ('xml' === jkinm && (nmpoqr['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== jkinm && (nmpoqr['uri'] = klmihj[jkinm || '']));
    }
    var uwrsv = sqvtu['indexOf'](':');
    uwrsv > 0x0 ? (jkinm = koplnm['prefix'] = sqvtu['slice'](0x0, uwrsv), cedghf = koplnm['localName'] = sqvtu['slice'](uwrsv + 0x1)) : (jkinm = null, cedghf = koplnm['localName'] = sqvtu);
    var $xzv = koplnm['uri'] = klmihj[jkinm || ''];
    if (echgdf['startElement']($xzv, cedghf, sqvtu, koplnm), !koplnm['closed']) return koplnm['currentNSMap'] = klmihj, koplnm['localNSMap'] = stxuw, !0x0;
    if (echgdf['endElement']($xzv, cedghf, sqvtu), stxuw) {
        for (jkinm in stxuw) echgdf['endPrefixMapping'](jkinm);
    }
}
function _djgehif(onplmk, yxzvwu, jfheig, qornps, hkilmj) {
    if (/^(?:script|textarea)$/i['test'](jfheig)) {
        var fhi = onplmk['indexOf']('</' + jfheig + '>', yxzvwu),
            hmk = onplmk['substring'](yxzvwu + 0x1, fhi);
        if (/[&<]/['test'](hmk)) return (/^script$/i['test'](jfheig) ? (hkilmj['characters'](hmk, 0x0, hmk['length']), fhi) : (hmk = hmk['replace'](/&#?\w+;/g, qornps), hkilmj['characters'](hmk, 0x0, hmk['length']), fhi)
        );
    }
    return yxzvwu + 0x1;
}
function _dfcabe(osrqtp, qsot, hfkj, sortp) {
    var xwzyv$ = sortp[hfkj];
    return null == xwzyv$ && (xwzyv$ = osrqtp['lastIndexOf']('</' + hfkj + '>'), qsot > xwzyv$ && (xwzyv$ = osrqtp['lastIndexOf']('</' + hfkj)), sortp[hfkj] = xwzyv$), qsot > xwzyv$;
}
function _d_2$z10(dbgec, adfbe) {
    for (var qrm in dbgec) adfbe[qrm] = dbgec[qrm];
}
function _dstqpr(_0zx$y, defbgc, y$xzwv, qmlnp) {
    var stvuq = _0zx$y['charAt'](defbgc + 0x2);
    switch (stvuq) {
        case '-':
            if ('-' === _0zx$y['charAt'](defbgc + 0x3)) {
                var qompln = _0zx$y['indexOf']('-->', defbgc + 0x4);
                return qompln > defbgc ? (y$xzwv['comment'](_0zx$y, defbgc + 0x4, qompln - defbgc - 0x4), qompln + 0x3) : (qmlnp['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == _0zx$y['substr'](defbgc + 0x3, 0x6)) {
                var qompln = _0zx$y['indexOf'](']]>', defbgc + 0x9);
                return y$xzwv['startCDATA'](), y$xzwv['characters'](_0zx$y, defbgc + 0x9, qompln - defbgc - 0x9), y$xzwv['endCDATA'](), qompln + 0x3;
            }
            var jieg = _dgkjhf(_0zx$y, defbgc),
                oknlmj = jieg['length'];
            if (oknlmj > 0x1 && /!doctype/i['test'](jieg[0x0][0x0])) {
                var lhgijk = jieg[0x1][0x0],
                    onkp = oknlmj > 0x3 && /^public$/i['test'](jieg[0x2][0x0]) && jieg[0x3][0x0],
                    khimj = oknlmj > 0x4 && jieg[0x4][0x0],
                    eihgd = jieg[oknlmj - 0x1];
                return y$xzwv['startDTD'](lhgijk, onkp && onkp['replace'](/^(['"])(.*?)\1$/, '$2'), khimj && khimj['replace'](/^(['"])(.*?)\1$/, '$2')), y$xzwv['endDTD'](), eihgd['index'] + eihgd[0x0]['length'];
            }
    }
    return -0x1;
}
function _difegdh(lnjm, hedgi, kihglj) {
    var ortqp = lnjm['indexOf']('?>', hedgi);
    if (ortqp) {
        var z0$_y = lnjm['substring'](hedgi, ortqp)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (z0$_y) {
            {
                z0$_y[0x0]['length'];
            }
            return kihglj['processingInstruction'](z0$_y[0x1], z0$_y[0x2]), ortqp + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function _dikhlg() {}
function _dihefgd(onqpl, jnilk) {
    return onqpl['__proto__'] = jnilk, onqpl;
}
function _dgkjhf(cefbgd, ikghl) {
    var y$xvzw,
        mnqpr = [],
        wvtyu = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (wvtyu['lastIndex'] = ikghl, wvtyu['exec'](cefbgd); y$xvzw = wvtyu['exec'](cefbgd);) if (mnqpr['push'](y$xvzw), y$xvzw[0x1]) return mnqpr;
}
var _dgbed = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    _dikgjhl = new RegExp('[\\-\\.0-9' + _dgbed['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    _dtsrqu = new RegExp('^' + _dgbed['source'] + _dikgjhl['source'] + '*(?::' + _dgbed['source'] + _dikgjhl['source'] + '*)?$'),
    _duzvyxw = 0x0,
    _dnjlom = 0x1,
    _dlkmhi = 0x2,
    _dejgfhi = 0x3,
    _d$1_302 = 0x4,
    _d$z10y_ = 0x5,
    _dqprnmo = 0x6,
    _drvsqtu = 0x7;
_dnplomk['prototype'] = {
    'parse': function (twuxvy, eifgdh, yuxwz) {
        var mjklih = this['domBuilder'];
        mjklih['startDocument'](), _d_2$z10(eifgdh, eifgdh = {}), _drptosq(twuxvy, eifgdh, yuxwz, mjklih, this['errorHandler']), mjklih['endDocument']();
    }
}, _dikhlg['prototype'] = {
    'setTagName': function (eijhf) {
        if (!_dtsrqu['test'](eijhf)) throw new Error('invalid tagName:' + eijhf);
        this['tagName'] = eijhf;
    },
    'add': function (tsqrup, nkplm, onklj) {
        if (!_dtsrqu['test'](tsqrup)) throw new Error('invalid attribute:' + tsqrup);
        this[this['length']++] = {
            'qName': tsqrup,
            'value': nkplm,
            'offset': onklj
        };
    },
    'length': 0x0,
    'getLocalName': function (yuxzv) {
        return this[yuxzv]['localName'];
    },
    'getLocator': function (rpsqot) {
        return this[rpsqot]['locator'];
    },
    'getQName': function (wzxy) {
        return this[wzxy]['qName'];
    },
    'getURI': function (swtvur) {
        return this[swtvur]['uri'];
    },
    'getValue': function (klijmn) {
        return this[klijmn]['value'];
    }
}, _dihefgd({}, _dihefgd['prototype']) instanceof _dihefgd || (_dihefgd = function (surt, nmqpol) {
    function noqsrp() {}
    noqsrp['prototype'] = nmqpol, noqsrp = new noqsrp();
    for (nmqpol in surt) noqsrp[nmqpol] = surt[nmqpol];
    return noqsrp;
}), exports['XMLReader'] = _dnplomk;