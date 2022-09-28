var s1 = wx.l$;
function _xig2yx() {}
function _xd0$8tb(lsf65p, sfe5l, el, r9_ck, wv0tj) {
    function ozum7p(crk_n9) {
        if (crk_n9 > 0xffff) {
            crk_n9 -= 0x10000;
            var sfzp7 = 0xd800 + (crk_n9 >> 0xa),
                x5esy = 0xdc00 + (0x3ff & crk_n9);
            return String['fromCharCode'](sfzp7, x5esy);
        }
        return String['fromCharCode'](crk_n9);
    }
    function k_arcq(vknj9w) {
        var qk_ar = vknj9w['slice'](0x1, -0x1);
        return qk_ar in el ? el[qk_ar] : '#' === qk_ar['charAt'](0x0) ? ozum7p(parseInt(qk_ar['substr'](0x1)['replace']('x', '0x'))) : (wv0tj['error']('entity not found:' + vknj9w), vknj9w);
    }
    function _n9k(eys) {
        if (eys > hi1g2) {
            var bt$v0w = lsf65p['substring'](hi1g2, eys)['replace'](/&#?\w+;/g, k_arcq);
            vnw9kj && jnw$(hi1g2), r9_ck['characters'](bt$v0w, 0x0, eys - hi1g2), hi1g2 = eys;
        }
    }
    function jnw$(_9nrc, ig2y) {
        for (; _9nrc >= qoam7 && (ig2y = yg4i2['exec'](lsf65p));) qao_rm = ig2y['index'], qoam7 = qao_rm + ig2y[0x0]['length'], vnw9kj['lineNumber']++;
        vnw9kj['columnNumber'] = _9nrc - qao_rm + 0x1;
    }
    for (var qao_rm = 0x0, qoam7 = 0x0, yg4i2 = /.*(?:\r\n?|\n)|.*$/g, vnw9kj = r9_ck['locator'], fsle65 = [{ 'currentNSMap': sfe5l }], aumoqr = {}, hi1g2 = 0x0;;) {
        try {
            var wt$0d = lsf65p['indexOf']('<', hi1g2);
            if (0x0 > wt$0d) {
                if (!lsf65p['substr'](hi1g2)['match'](/^\s*$/)) {
                    var nc9jv = r9_ck['doc'],
                        z7fup = nc9jv['createTextNode'](lsf65p['substr'](hi1g2));
                    nc9jv['appendChild'](z7fup), r9_ck['currentElement'] = z7fup;
                }
                return;
            }
            switch (wt$0d > hi1g2 && _n9k(wt$0d), lsf65p['charAt'](wt$0d + 0x1)) {
                case '/':
                    var yi2g4 = lsf65p['indexOf']('>', wt$0d + 0x3),
                        ulm7z = lsf65p['substring'](wt$0d + 0x2, yi2g4),
                        hy = fsle65['pop']();
                    0x0 > yi2g4 ? (ulm7z = lsf65p['substring'](wt$0d + 0x2)['replace'](/[\s<].*/, ''), wv0tj['error']('end tag name: ' + ulm7z + ' is not complete:' + hy['tagName']), yi2g4 = wt$0d + 0x1 + ulm7z['length']) : ulm7z['match'](/\s</) && (ulm7z = ulm7z['replace'](/[\s<].*/, ''), wv0tj['error']('end tag name: ' + ulm7z + ' maybe not complete'), yi2g4 = wt$0d + 0x1 + ulm7z['length']);
                    var nr9c_k = hy['localNSMap'],
                        w$d0bt = hy['tagName'] == ulm7z,
                        moqra = w$d0bt || hy['tagName'] && hy['tagName']['toLowerCase']() == ulm7z['toLowerCase']();
                    if (moqra) {
                        if (r9_ck['endElement'](hy['uri'], hy['localName'], ulm7z), nr9c_k) {
                            for (var gx4ie in nr9c_k) r9_ck['endPrefixMapping'](gx4ie);
                        }
                        w$d0bt || wv0tj['fatalError']('end tag name: ' + ulm7z + ' is not match the current start tagName:' + hy['tagName']);
                    } else fsle65['push'](hy);
                    yi2g4++;
                    break;
                case '?':
                    vnw9kj && jnw$(wt$0d), yi2g4 = _xighy(lsf65p, wt$0d, r9_ck);
                    break;
                case '!':
                    vnw9kj && jnw$(wt$0d), yi2g4 = _xr_aocq(lsf65p, wt$0d, r9_ck, wv0tj);
                    break;
                default:
                    vnw9kj && jnw$(wt$0d);
                    var e56sf = new _x$v9n(),
                        h41g = fsle65[fsle65['length'] - 0x1]['currentNSMap'],
                        yi2g4 = _xuoa(lsf65p, wt$0d, e56sf, h41g, k_arcq, wv0tj),
                        g2h314 = e56sf['length'];
                    if (!e56sf['closed'] && _xzplfs7(lsf65p, yi2g4, e56sf['tagName'], aumoqr) && (e56sf['closed'] = !0x0, el['nbsp'] || wv0tj['warning']('unclosed xml attribute')), vnw9kj && g2h314) {
                        for (var ig214 = _xbtd$w0(vnw9kj, {}), _qrn = 0x0; g2h314 > _qrn; _qrn++) {
                            var k_rnc = e56sf[_qrn];
                            jnw$(k_rnc['offset']), k_rnc['locator'] = _xbtd$w0(vnw9kj, {});
                        }
                        r9_ck['locator'] = ig214, _xexys65(e56sf, r9_ck, h41g) && fsle65['push'](e56sf), r9_ck['locator'] = vnw9kj;
                    } else _xexys65(e56sf, r9_ck, h41g) && fsle65['push'](e56sf);
                    'http://www.w3.org/1999/xhtml' !== e56sf['uri'] || e56sf['closed'] ? yi2g4++ : yi2g4 = _xl7psfz(lsf65p, yi2g4, e56sf['tagName'], k_arcq, r9_ck);
            }
        } catch (vkj9c) {
            wv0tj['error']('element parse error: ' + vkj9c), yi2g4 = -0x1;
        }
        yi2g4 > hi1g2 ? hi1g2 = yi2g4 : _n9k(Math['max'](wt$0d, hi1g2) + 0x1);
    }
}
function _xbtd$w0(exyig4, n_kr) {
    return n_kr['lineNumber'] = exyig4['lineNumber'], n_kr['columnNumber'] = exyig4['columnNumber'], n_kr;
}
function _xuoa(ysx6, kj_c9n, aoqumr, nkjw, kqacr, p6fs5l) {
    for (var sf5e6l, c9rn_, tw0bv$ = ++kj_c9n, btdw$ = _xvkc;;) {
        var p7flz = ysx6['charAt'](tw0bv$);
        switch (p7flz) {
            case '=':
                if (btdw$ === _xc_qoa) sf5e6l = ysx6['slice'](kj_c9n, tw0bv$), btdw$ = _xg1h2i4;else {
                    if (btdw$ !== _xjn9v$w) throw new Error('attribute equal must after attrName');
                    btdw$ = _xg1h2i4;
                }
                break;
            case '\x27':
            case '\x22':
                if (btdw$ === _xg1h2i4 || btdw$ === _xc_qoa) {
                    if (btdw$ === _xc_qoa && (p6fs5l['warning']('attribute value must after "="'), sf5e6l = ysx6['slice'](kj_c9n, tw0bv$)), kj_c9n = tw0bv$ + 0x1, tw0bv$ = ysx6['indexOf'](p7flz, kj_c9n), !(tw0bv$ > 0x0)) throw new Error('attribute value no end \'' + p7flz + '\' match');
                    c9rn_ = ysx6['slice'](kj_c9n, tw0bv$)['replace'](/&#?\w+;/g, kqacr), aoqumr['add'](sf5e6l, c9rn_, kj_c9n - 0x1), btdw$ = _xpsf5l;
                } else {
                    if (btdw$ != _xi42h1) throw new Error('attribute value must after "="');
                    c9rn_ = ysx6['slice'](kj_c9n, tw0bv$)['replace'](/&#?\w+;/g, kqacr), aoqumr['add'](sf5e6l, c9rn_, kj_c9n), p6fs5l['warning']('attribute "' + sf5e6l + '" missed start quot(' + p7flz + ')!!'), kj_c9n = tw0bv$ + 0x1, btdw$ = _xpsf5l;
                }
                break;
            case '/':
                switch (btdw$) {
                    case _xvkc:
                        aoqumr['setTagName'](ysx6['slice'](kj_c9n, tw0bv$));
                    case _xpsf5l:
                    case _xck_rn9:
                    case _xaoqmu7:
                        btdw$ = _xaoqmu7, aoqumr['closed'] = !0x0;
                    case _xi42h1:
                    case _xc_qoa:
                    case _xjn9v$w:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return p6fs5l['error']('unexpected end of input'), btdw$ == _xvkc && aoqumr['setTagName'](ysx6['slice'](kj_c9n, tw0bv$)), tw0bv$;
            case '>':
                switch (btdw$) {
                    case _xvkc:
                        aoqumr['setTagName'](ysx6['slice'](kj_c9n, tw0bv$));
                    case _xpsf5l:
                    case _xck_rn9:
                    case _xaoqmu7:
                        break;
                    case _xi42h1:
                    case _xc_qoa:
                        c9rn_ = ysx6['slice'](kj_c9n, tw0bv$), '/' === c9rn_['slice'](-0x1) && (aoqumr['closed'] = !0x0, c9rn_ = c9rn_['slice'](0x0, -0x1));
                    case _xjn9v$w:
                        btdw$ === _xjn9v$w && (c9rn_ = sf5e6l), btdw$ == _xi42h1 ? (p6fs5l['warning']('attribute "' + c9rn_ + '" missed quot(")!!'), aoqumr['add'](sf5e6l, c9rn_['replace'](/&#?\w+;/g, kqacr), kj_c9n)) : ('http://www.w3.org/1999/xhtml' === nkjw[''] && c9rn_['match'](/^(?:disabled|checked|selected)$/i) || p6fs5l['warning']('attribute "' + c9rn_ + '" missed value!! "' + c9rn_ + '" instead!!'), aoqumr['add'](c9rn_, c9rn_, kj_c9n));
                        break;
                    case _xg1h2i4:
                        throw new Error('attribute value missed!!');
                }
                return tw0bv$;
            case '\u0080':
                p7flz = '\x20';
            default:
                if ('\x20' >= p7flz) switch (btdw$) {
                    case _xvkc:
                        aoqumr['setTagName'](ysx6['slice'](kj_c9n, tw0bv$)), btdw$ = _xck_rn9;
                        break;
                    case _xc_qoa:
                        sf5e6l = ysx6['slice'](kj_c9n, tw0bv$), btdw$ = _xjn9v$w;
                        break;
                    case _xi42h1:
                        var c9rn_ = ysx6['slice'](kj_c9n, tw0bv$)['replace'](/&#?\w+;/g, kqacr);
                        p6fs5l['warning']('attribute "' + c9rn_ + '" missed quot(")!!'), aoqumr['add'](sf5e6l, c9rn_, kj_c9n);
                    case _xpsf5l:
                        btdw$ = _xck_rn9;
                } else switch (btdw$) {
                    case _xjn9v$w:
                        {
                            aoqumr['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === nkjw[''] && sf5e6l['match'](/^(?:disabled|checked|selected)$/i) || p6fs5l['warning']('attribute "' + sf5e6l + '" missed value!! "' + sf5e6l + '" instead2!!'), aoqumr['add'](sf5e6l, sf5e6l, kj_c9n), kj_c9n = tw0bv$, btdw$ = _xc_qoa;
                        break;
                    case _xpsf5l:
                        p6fs5l['warning']('attribute space is required"' + sf5e6l + '\x22!!');
                    case _xck_rn9:
                        btdw$ = _xc_qoa, kj_c9n = tw0bv$;
                        break;
                    case _xg1h2i4:
                        btdw$ = _xi42h1, kj_c9n = tw0bv$;
                        break;
                    case _xaoqmu7:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        tw0bv$++;
    }
}
function _xexys65(qrouma, pz7lm, oqa7u) {
    for (var jcvnk9 = qrouma['tagName'], zlspf5 = null, xsy56e = qrouma['length']; xsy56e--;) {
        var ckjn9v = qrouma[xsy56e],
            uqoam7 = ckjn9v['qName'],
            ncj = ckjn9v['value'],
            e6ys = uqoam7['indexOf'](':');
        if (e6ys > 0x0) var oquma7 = ckjn9v['prefix'] = uqoam7['slice'](0x0, e6ys),
            xsf = uqoam7['slice'](e6ys + 0x1),
            b8d$0 = 'xmlns' === oquma7 && xsf;else xsf = uqoam7, oquma7 = null, b8d$0 = 'xmlns' === uqoam7 && '';
        ckjn9v['localName'] = xsf, b8d$0 !== !0x1 && (null == zlspf5 && (zlspf5 = {}, _xi4x2g(oqa7u, oqa7u = {})), oqa7u[b8d$0] = zlspf5[b8d$0] = ncj, ckjn9v['uri'] = 'http://www.w3.org/2000/xmlns/', pz7lm['startPrefixMapping'](b8d$0, ncj));
    }
    for (var xsy56e = qrouma['length']; xsy56e--;) {
        ckjn9v = qrouma[xsy56e];
        var oquma7 = ckjn9v['prefix'];
        oquma7 && ('xml' === oquma7 && (ckjn9v['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== oquma7 && (ckjn9v['uri'] = oqa7u[oquma7 || '']));
    }
    var e6ys = jcvnk9['indexOf'](':');
    e6ys > 0x0 ? (oquma7 = qrouma['prefix'] = jcvnk9['slice'](0x0, e6ys), xsf = qrouma['localName'] = jcvnk9['slice'](e6ys + 0x1)) : (oquma7 = null, xsf = qrouma['localName'] = jcvnk9);
    var jn_k9 = qrouma['uri'] = oqa7u[oquma7 || ''];
    if (pz7lm['startElement'](jn_k9, xsf, jcvnk9, qrouma), !qrouma['closed']) return qrouma['currentNSMap'] = oqa7u, qrouma['localNSMap'] = zlspf5, !0x0;
    if (pz7lm['endElement'](jn_k9, xsf, jcvnk9), zlspf5) {
        for (oquma7 in zlspf5) pz7lm['endPrefixMapping'](oquma7);
    }
}
function _xl7psfz(u7p, amorq, $9, fsl5e, upf7zl) {
    if (/^(?:script|textarea)$/i['test']($9)) {
        var ckaqr_ = u7p['indexOf']('</' + $9 + '>', amorq),
            ig6xye = u7p['substring'](amorq + 0x1, ckaqr_);
        if (/[&<]/['test'](ig6xye)) return (/^script$/i['test']($9) ? (upf7zl['characters'](ig6xye, 0x0, ig6xye['length']), ckaqr_) : (ig6xye = ig6xye['replace'](/&#?\w+;/g, fsl5e), upf7zl['characters'](ig6xye, 0x0, ig6xye['length']), ckaqr_)
        );
    }
    return amorq + 0x1;
}
function _xzplfs7(z7moau, yg6ie, ys6x5e, yi2x) {
    var yh42ig = yi2x[ys6x5e];
    return null == yh42ig && (yh42ig = z7moau['lastIndexOf']('</' + ys6x5e + '>'), yg6ie > yh42ig && (yh42ig = z7moau['lastIndexOf']('</' + ys6x5e)), yi2x[ys6x5e] = yh42ig), yg6ie > yh42ig;
}
function _xi4x2g(td80, p7sfl) {
    for (var muoaq in td80) p7sfl[muoaq] = td80[muoaq];
}
function _xr_aocq(jkc9_, g4ix, lsf, psz5f) {
    var x2ig4 = jkc9_['charAt'](g4ix + 0x2);
    switch (x2ig4) {
        case '-':
            if ('-' === jkc9_['charAt'](g4ix + 0x3)) {
                var zo7am = jkc9_['indexOf']('-->', g4ix + 0x4);
                return zo7am > g4ix ? (lsf['comment'](jkc9_, g4ix + 0x4, zo7am - g4ix - 0x4), zo7am + 0x3) : (psz5f['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == jkc9_['substr'](g4ix + 0x3, 0x6)) {
                var zo7am = jkc9_['indexOf'](']]>', g4ix + 0x9);
                return lsf['startCDATA'](), lsf['characters'](jkc9_, g4ix + 0x9, zo7am - g4ix - 0x9), lsf['endCDATA'](), zo7am + 0x3;
            }
            var flz7u = _xgyxe4i(jkc9_, g4ix),
                $0b8td = flz7u['length'];
            if ($0b8td > 0x1 && /!doctype/i['test'](flz7u[0x0][0x0])) {
                var kqa = flz7u[0x1][0x0],
                    sf5xe = $0b8td > 0x3 && /^public$/i['test'](flz7u[0x2][0x0]) && flz7u[0x3][0x0],
                    qoa_r = $0b8td > 0x4 && flz7u[0x4][0x0],
                    oa_qr = flz7u[$0b8td - 0x1];
                return lsf['startDTD'](kqa, sf5xe && sf5xe['replace'](/^(['"])(.*?)\1$/, '$2'), qoa_r && qoa_r['replace'](/^(['"])(.*?)\1$/, '$2')), lsf['endDTD'](), oa_qr['index'] + oa_qr[0x0]['length'];
            }
    }
    return -0x1;
}
function _xighy(vnk9jc, dtb, $vj9wn) {
    var wj9nvk = vnk9jc['indexOf']('?>', dtb);
    if (wj9nvk) {
        var m_qora = vnk9jc['substring'](dtb, wj9nvk)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (m_qora) {
            {
                m_qora[0x0]['length'];
            }
            return $vj9wn['processingInstruction'](m_qora[0x1], m_qora[0x2]), wj9nvk + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function _x$v9n() {}
function _xc9j_k(rck_qn, x4yeg) {
    return rck_qn['__proto__'] = x4yeg, rck_qn;
}
function _xgyxe4i(pslf, ouz7a) {
    var w0bt,
        yex6g = [],
        ix4g2y = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (ix4g2y['lastIndex'] = ouz7a, ix4g2y['exec'](pslf); w0bt = ix4g2y['exec'](pslf);) if (yex6g['push'](w0bt), w0bt[0x1]) return yex6g;
}
var _xv$jn = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    _xlp5sz = new RegExp('[\\-\\.0-9' + _xv$jn['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    _xc_kar = new RegExp('^' + _xv$jn['source'] + _xlp5sz['source'] + '*(?::' + _xv$jn['source'] + _xlp5sz['source'] + '*)?$'),
    _xvkc = 0x0,
    _xc_qoa = 0x1,
    _xjn9v$w = 0x2,
    _xg1h2i4 = 0x3,
    _xi42h1 = 0x4,
    _xpsf5l = 0x5,
    _xck_rn9 = 0x6,
    _xaoqmu7 = 0x7;
_xig2yx['prototype'] = {
    'parse': function (g6xeiy, wvj$, vjc9nk) {
        var eyg4xi = this['domBuilder'];
        eyg4xi['startDocument'](), _xi4x2g(wvj$, wvj$ = {}), _xd0$8tb(g6xeiy, wvj$, vjc9nk, eyg4xi, this['errorHandler']), eyg4xi['endDocument']();
    }
}, _x$v9n['prototype'] = {
    'setTagName': function (aq_kr) {
        if (!_xc_kar['test'](aq_kr)) throw new Error('invalid tagName:' + aq_kr);
        this['tagName'] = aq_kr;
    },
    'add': function (z5fl, zp7lfu, _crqa) {
        if (!_xc_kar['test'](z5fl)) throw new Error('invalid attribute:' + z5fl);
        this[this['length']++] = {
            'qName': z5fl,
            'value': zp7lfu,
            'offset': _crqa
        };
    },
    'length': 0x0,
    'getLocalName': function (_c9knj) {
        return this[_c9knj]['localName'];
    },
    'getLocator': function (mazu7o) {
        return this[mazu7o]['locator'];
    },
    'getQName': function (rkcnq) {
        return this[rkcnq]['qName'];
    },
    'getURI': function ($tw0jv) {
        return this[$tw0jv]['uri'];
    },
    'getValue': function (caq_kr) {
        return this[caq_kr]['value'];
    }
}, _xc9j_k({}, _xc9j_k['prototype']) instanceof _xc9j_k || (_xc9j_k = function (j0w$tv, sz5pfl) {
    function $9jtwv() {}
    $9jtwv['prototype'] = sz5pfl, $9jtwv = new $9jtwv();
    for (sz5pfl in j0w$tv) $9jtwv[sz5pfl] = j0w$tv[sz5pfl];
    return $9jtwv;
}), exports['XMLReader'] = _xig2yx;