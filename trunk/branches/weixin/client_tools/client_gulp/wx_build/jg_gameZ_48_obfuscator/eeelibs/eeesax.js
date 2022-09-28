var _ = wx.y$;
function _d$mhof() {}
function _dup2cyk(ykup, yu2k, e18gln, cmphu7, abz9) {
    function u7hpcy(y2kcpu) {
        if (y2kcpu > 0xffff) {
            y2kcpu -= 0x10000;
            var ot7hf = 0xd800 + (y2kcpu >> 0xa),
                r39zda = 0xdc00 + (0x3ff & y2kcpu);
            return String['fromCharCode'](ot7hf, r39zda);
        }
        return String['fromCharCode'](y2kcpu);
    }
    function pc2kyu(_q8) {
        var ts45 = _q8['slice'](0x1, -0x1);
        return ts45 in e18gln ? e18gln[ts45] : '#' === ts45['charAt'](0x0) ? u7hpcy(parseInt(ts45['substr'](0x1)['replace']('x', '0x'))) : (abz9['error']('entity not found:' + _q8), _q8);
    }
    function as0zbd(b40da) {
        if (b40da > c7muhp) {
            var to7fhm = ykup['substring'](c7muhp, b40da)['replace'](/&#?\w+;/g, pc2kyu);
            cpuy2 && nlgew1(c7muhp), cmphu7['characters'](to7fhm, 0x0, b40da - c7muhp), c7muhp = b40da;
        }
    }
    function nlgew1($4ot0, yp2) {
        for (; $4ot0 >= huy7c && (yp2 = j2kyuc['exec'](ykup));) d54s = yp2['index'], huy7c = d54s + yp2[0x0]['length'], cpuy2['lineNumber']++;
        cpuy2['columnNumber'] = $4ot0 - d54s + 0x1;
    }
    for (var d54s = 0x0, huy7c = 0x0, j2kyuc = /.*(?:\r\n?|\n)|.*$/g, cpuy2 = cmphu7['locator'], qivk = [{ 'currentNSMap': yu2k }], e_q = {}, c7muhp = 0x0;;) {
        try {
            var j2kq = ykup['indexOf']('<', c7muhp);
            if (0x0 > j2kq) {
                if (!ykup['substr'](c7muhp)['match'](/^\s*$/)) {
                    var hpum7c = cmphu7['doc'],
                        jv_iqk = hpum7c['createTextNode'](ykup['substr'](c7muhp));
                    hpum7c['appendChild'](jv_iqk), cmphu7['currentElement'] = jv_iqk;
                }
                return;
            }
            switch (j2kq > c7muhp && as0zbd(j2kq), ykup['charAt'](j2kq + 0x1)) {
                case '/':
                    var qvk2_ = ykup['indexOf']('>', j2kq + 0x3),
                        z9abd = ykup['substring'](j2kq + 0x2, qvk2_),
                        ewl1 = qivk['pop']();
                    0x0 > qvk2_ ? (z9abd = ykup['substring'](j2kq + 0x2)['replace'](/[\s<].*/, ''), abz9['error']('end tag name: ' + z9abd + ' is not complete:' + ewl1['tagName']), qvk2_ = j2kq + 0x1 + z9abd['length']) : z9abd['match'](/\s</) && (z9abd = z9abd['replace'](/[\s<].*/, ''), abz9['error']('end tag name: ' + z9abd + ' maybe not complete'), qvk2_ = j2kq + 0x1 + z9abd['length']);
                    var $s54t0 = ewl1['localNSMap'],
                        rab = ewl1['tagName'] == z9abd,
                        z63r9x = rab || ewl1['tagName'] && ewl1['tagName']['toLowerCase']() == z9abd['toLowerCase']();
                    if (z63r9x) {
                        if (cmphu7['endElement'](ewl1['uri'], ewl1['localName'], z9abd), $s54t0) {
                            for (var yuc2jk in $s54t0) cmphu7['endPrefixMapping'](yuc2jk);
                        }
                        rab || abz9['fatalError']('end tag name: ' + z9abd + ' is not match the current start tagName:' + ewl1['tagName']);
                    } else qivk['push'](ewl1);
                    qvk2_++;
                    break;
                case '?':
                    cpuy2 && nlgew1(j2kq), qvk2_ = _dmoft7(ykup, j2kq, cmphu7);
                    break;
                case '!':
                    cpuy2 && nlgew1(j2kq), qvk2_ = _dhf7omp(ykup, j2kq, cmphu7, abz9);
                    break;
                default:
                    cpuy2 && nlgew1(j2kq);
                    var iv8eq_ = new _dlew(),
                        pcyk = qivk[qivk['length'] - 0x1]['currentNSMap'],
                        qvk2_ = _db5ds(ykup, j2kq, iv8eq_, pcyk, pc2kyu, abz9),
                        mht$of = iv8eq_['length'];
                    if (!iv8eq_['closed'] && _dt$5fo4(ykup, qvk2_, iv8eq_['tagName'], e_q) && (iv8eq_['closed'] = !0x0, e18gln['nbsp'] || abz9['warning']('unclosed xml attribute')), cpuy2 && mht$of) {
                        for (var ypc27 = _dig8ev(cpuy2, {}), v2k_qj = 0x0; mht$of > v2k_qj; v2k_qj++) {
                            var pku2 = iv8eq_[v2k_qj];
                            nlgew1(pku2['offset']), pku2['locator'] = _dig8ev(cpuy2, {});
                        }
                        cmphu7['locator'] = ypc27, _dtom$(iv8eq_, cmphu7, pcyk) && qivk['push'](iv8eq_), cmphu7['locator'] = cpuy2;
                    } else _dtom$(iv8eq_, cmphu7, pcyk) && qivk['push'](iv8eq_);
                    'http://www.w3.org/1999/xhtml' !== iv8eq_['uri'] || iv8eq_['closed'] ? qvk2_++ : qvk2_ = _dg1evi(ykup, qvk2_, iv8eq_['tagName'], pc2kyu, cmphu7);
            }
        } catch (q8j_iv) {
            abz9['error']('element parse error: ' + q8j_iv), qvk2_ = -0x1;
        }
        qvk2_ > c7muhp ? c7muhp = qvk2_ : as0zbd(Math['max'](j2kq, c7muhp) + 0x1);
    }
}
function _dig8ev(yqk_, z0dsa) {
    return z0dsa['lineNumber'] = yqk_['lineNumber'], z0dsa['columnNumber'] = yqk_['columnNumber'], z0dsa;
}
function _db5ds(jqv_8, n1lew, o7mth, tf5$o4, z6r3x, tf$54) {
    for (var vkq, n1gewl, o4t05 = ++n1lew, fhtm$o = _ds5t$;;) {
        var ufhm7 = jqv_8['charAt'](o4t05);
        switch (ufhm7) {
            case '=':
                if (fhtm$o === _d$hof) vkq = jqv_8['slice'](n1lew, o4t05), fhtm$o = _da9rd;else {
                    if (fhtm$o !== _dcky2qj) throw new Error('attribute equal must after attrName');
                    fhtm$o = _da9rd;
                }
                break;
            case '\x27':
            case '\x22':
                if (fhtm$o === _da9rd || fhtm$o === _d$hof) {
                    if (fhtm$o === _d$hof && (tf$54['warning']('attribute value must after "="'), vkq = jqv_8['slice'](n1lew, o4t05)), n1lew = o4t05 + 0x1, o4t05 = jqv_8['indexOf'](ufhm7, n1lew), !(o4t05 > 0x0)) throw new Error('attribute value no end \'' + ufhm7 + '\' match');
                    n1gewl = jqv_8['slice'](n1lew, o4t05)['replace'](/&#?\w+;/g, z6r3x), o7mth['add'](vkq, n1gewl, n1lew - 0x1), fhtm$o = _du7cyph;
                } else {
                    if (fhtm$o != _dg1elw) throw new Error('attribute value must after "="');
                    n1gewl = jqv_8['slice'](n1lew, o4t05)['replace'](/&#?\w+;/g, z6r3x), o7mth['add'](vkq, n1gewl, n1lew), tf$54['warning']('attribute "' + vkq + '" missed start quot(' + ufhm7 + ')!!'), n1lew = o4t05 + 0x1, fhtm$o = _du7cyph;
                }
                break;
            case '/':
                switch (fhtm$o) {
                    case _ds5t$:
                        o7mth['setTagName'](jqv_8['slice'](n1lew, o4t05));
                    case _du7cyph:
                    case _di_81ve:
                    case _dtfmh7o:
                        fhtm$o = _dtfmh7o, o7mth['closed'] = !0x0;
                    case _dg1elw:
                    case _d$hof:
                    case _dcky2qj:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return tf$54['error']('unexpected end of input'), fhtm$o == _ds5t$ && o7mth['setTagName'](jqv_8['slice'](n1lew, o4t05)), o4t05;
            case '>':
                switch (fhtm$o) {
                    case _ds5t$:
                        o7mth['setTagName'](jqv_8['slice'](n1lew, o4t05));
                    case _du7cyph:
                    case _di_81ve:
                    case _dtfmh7o:
                        break;
                    case _dg1elw:
                    case _d$hof:
                        n1gewl = jqv_8['slice'](n1lew, o4t05), '/' === n1gewl['slice'](-0x1) && (o7mth['closed'] = !0x0, n1gewl = n1gewl['slice'](0x0, -0x1));
                    case _dcky2qj:
                        fhtm$o === _dcky2qj && (n1gewl = vkq), fhtm$o == _dg1elw ? (tf$54['warning']('attribute "' + n1gewl + '" missed quot(")!!'), o7mth['add'](vkq, n1gewl['replace'](/&#?\w+;/g, z6r3x), n1lew)) : ('http://www.w3.org/1999/xhtml' === tf5$o4[''] && n1gewl['match'](/^(?:disabled|checked|selected)$/i) || tf$54['warning']('attribute "' + n1gewl + '" missed value!! "' + n1gewl + '" instead!!'), o7mth['add'](n1gewl, n1gewl, n1lew));
                        break;
                    case _da9rd:
                        throw new Error('attribute value missed!!');
                }
                return o4t05;
            case '\u0080':
                ufhm7 = '\x20';
            default:
                if ('\x20' >= ufhm7) switch (fhtm$o) {
                    case _ds5t$:
                        o7mth['setTagName'](jqv_8['slice'](n1lew, o4t05)), fhtm$o = _di_81ve;
                        break;
                    case _d$hof:
                        vkq = jqv_8['slice'](n1lew, o4t05), fhtm$o = _dcky2qj;
                        break;
                    case _dg1elw:
                        var n1gewl = jqv_8['slice'](n1lew, o4t05)['replace'](/&#?\w+;/g, z6r3x);
                        tf$54['warning']('attribute "' + n1gewl + '" missed quot(")!!'), o7mth['add'](vkq, n1gewl, n1lew);
                    case _du7cyph:
                        fhtm$o = _di_81ve;
                } else switch (fhtm$o) {
                    case _dcky2qj:
                        {
                            o7mth['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === tf5$o4[''] && vkq['match'](/^(?:disabled|checked|selected)$/i) || tf$54['warning']('attribute "' + vkq + '" missed value!! "' + vkq + '" instead2!!'), o7mth['add'](vkq, vkq, n1lew), n1lew = o4t05, fhtm$o = _d$hof;
                        break;
                    case _du7cyph:
                        tf$54['warning']('attribute space is required"' + vkq + '\x22!!');
                    case _di_81ve:
                        fhtm$o = _d$hof, n1lew = o4t05;
                        break;
                    case _da9rd:
                        fhtm$o = _dg1elw, n1lew = o4t05;
                        break;
                    case _dtfmh7o:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        o4t05++;
    }
}
function _dtom$(_qkjv2, mfphu7, oft$4) {
    for (var d0b5 = _qkjv2['tagName'], za9dbr = null, kcjuy2 = _qkjv2['length']; kcjuy2--;) {
        var bzsad = _qkjv2[kcjuy2],
            _8vj = bzsad['qName'],
            zar36 = bzsad['value'],
            vge1 = _8vj['indexOf'](':');
        if (vge1 > 0x0) var um7chp = bzsad['prefix'] = _8vj['slice'](0x0, vge1),
            szb9da = _8vj['slice'](vge1 + 0x1),
            ineg = 'xmlns' === um7chp && szb9da;else szb9da = _8vj, um7chp = null, ineg = 'xmlns' === _8vj && '';
        bzsad['localName'] = szb9da, ineg !== !0x1 && (null == za9dbr && (za9dbr = {}, _dtf$5o(oft$4, oft$4 = {})), oft$4[ineg] = za9dbr[ineg] = zar36, bzsad['uri'] = 'http://www.w3.org/2000/xmlns/', mfphu7['startPrefixMapping'](ineg, zar36));
    }
    for (var kcjuy2 = _qkjv2['length']; kcjuy2--;) {
        bzsad = _qkjv2[kcjuy2];
        var um7chp = bzsad['prefix'];
        um7chp && ('xml' === um7chp && (bzsad['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== um7chp && (bzsad['uri'] = oft$4[um7chp || '']));
    }
    var vge1 = d0b5['indexOf'](':');
    vge1 > 0x0 ? (um7chp = _qkjv2['prefix'] = d0b5['slice'](0x0, vge1), szb9da = _qkjv2['localName'] = d0b5['slice'](vge1 + 0x1)) : (um7chp = null, szb9da = _qkjv2['localName'] = d0b5);
    var hupc = _qkjv2['uri'] = oft$4[um7chp || ''];
    if (mfphu7['startElement'](hupc, szb9da, d0b5, _qkjv2), !_qkjv2['closed']) return _qkjv2['currentNSMap'] = oft$4, _qkjv2['localNSMap'] = za9dbr, !0x0;
    if (mfphu7['endElement'](hupc, szb9da, d0b5), za9dbr) {
        for (um7chp in za9dbr) mfphu7['endPrefixMapping'](um7chp);
    }
}
function _dg1evi(sd054, u2cjyk, _qvj8i, eg8l, n8ie1) {
    if (/^(?:script|textarea)$/i['test'](_qvj8i)) {
        var eviq_ = sd054['indexOf']('</' + _qvj8i + '>', u2cjyk),
            bsa40d = sd054['substring'](u2cjyk + 0x1, eviq_);
        if (/[&<]/['test'](bsa40d)) return (/^script$/i['test'](_qvj8i) ? (n8ie1['characters'](bsa40d, 0x0, bsa40d['length']), eviq_) : (bsa40d = bsa40d['replace'](/&#?\w+;/g, eg8l), n8ie1['characters'](bsa40d, 0x0, bsa40d['length']), eviq_)
        );
    }
    return u2cjyk + 0x1;
}
function _dt$5fo4(iv_eq8, uhyc7, rda9z3, zxr39) {
    var g18el = zxr39[rda9z3];
    return null == g18el && (g18el = iv_eq8['lastIndexOf']('</' + rda9z3 + '>'), uhyc7 > g18el && (g18el = iv_eq8['lastIndexOf']('</' + rda9z3)), zxr39[rda9z3] = g18el), uhyc7 > g18el;
}
function _dtf$5o(zrbd9, _8qvei) {
    for (var umfp7 in zrbd9) _8qvei[umfp7] = zrbd9[umfp7];
}
function _dhf7omp(tmo$, l1e8gn, uc7yp, n18gel) {
    var uc7y2p = tmo$['charAt'](l1e8gn + 0x2);
    switch (uc7y2p) {
        case '-':
            if ('-' === tmo$['charAt'](l1e8gn + 0x3)) {
                var yc7pu2 = tmo$['indexOf']('-->', l1e8gn + 0x4);
                return yc7pu2 > l1e8gn ? (uc7yp['comment'](tmo$, l1e8gn + 0x4, yc7pu2 - l1e8gn - 0x4), yc7pu2 + 0x3) : (n18gel['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == tmo$['substr'](l1e8gn + 0x3, 0x6)) {
                var yc7pu2 = tmo$['indexOf'](']]>', l1e8gn + 0x9);
                return uc7yp['startCDATA'](), uc7yp['characters'](tmo$, l1e8gn + 0x9, yc7pu2 - l1e8gn - 0x9), uc7yp['endCDATA'](), yc7pu2 + 0x3;
            }
            var iqjv8_ = _dln81(tmo$, l1e8gn),
                s5$0t = iqjv8_['length'];
            if (s5$0t > 0x1 && /!doctype/i['test'](iqjv8_[0x0][0x0])) {
                var i81v_ = iqjv8_[0x1][0x0],
                    zb9ads = s5$0t > 0x3 && /^public$/i['test'](iqjv8_[0x2][0x0]) && iqjv8_[0x3][0x0],
                    t04$s5 = s5$0t > 0x4 && iqjv8_[0x4][0x0],
                    nlwe = iqjv8_[s5$0t - 0x1];
                return uc7yp['startDTD'](i81v_, zb9ads && zb9ads['replace'](/^(['"])(.*?)\1$/, '$2'), t04$s5 && t04$s5['replace'](/^(['"])(.*?)\1$/, '$2')), uc7yp['endDTD'](), nlwe['index'] + nlwe[0x0]['length'];
            }
    }
    return -0x1;
}
function _dmoft7(ts, kyc2ju, g1ne8) {
    var _kjqy2 = ts['indexOf']('?>', kyc2ju);
    if (_kjqy2) {
        var yukcp = ts['substring'](kyc2ju, _kjqy2)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (yukcp) {
            {
                yukcp[0x0]['length'];
            }
            return g1ne8['processingInstruction'](yukcp[0x1], yukcp[0x2]), _kjqy2 + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function _dlew() {}
function _djky2cu(z639xr, x396rz) {
    return z639xr['__proto__'] = x396rz, z639xr;
}
function _dln81(rz93d, i1ev8g) {
    var vq_j8i,
        o7fm = [],
        wgnl1e = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (wgnl1e['lastIndex'] = i1ev8g, wgnl1e['exec'](rz93d); vq_j8i = wgnl1e['exec'](rz93d);) if (o7fm['push'](vq_j8i), vq_j8i[0x1]) return o7fm;
}
var _dmo7tfh = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    _db4s5 = new RegExp('[\\-\\.0-9' + _dmo7tfh['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    _dop7mh = new RegExp('^' + _dmo7tfh['source'] + _db4s5['source'] + '*(?::' + _dmo7tfh['source'] + _db4s5['source'] + '*)?$'),
    _ds5t$ = 0x0,
    _d$hof = 0x1,
    _dcky2qj = 0x2,
    _da9rd = 0x3,
    _dg1elw = 0x4,
    _du7cyph = 0x5,
    _di_81ve = 0x6,
    _dtfmh7o = 0x7;
_d$mhof['prototype'] = {
    'parse': function (drz9b, dsbz9, nlg8e1) {
        var e8i_qv = this['domBuilder'];
        e8i_qv['startDocument'](), _dtf$5o(dsbz9, dsbz9 = {}), _dup2cyk(drz9b, dsbz9, nlg8e1, e8i_qv, this['errorHandler']), e8i_qv['endDocument']();
    }
}, _dlew['prototype'] = {
    'setTagName': function (b0zda) {
        if (!_dop7mh['test'](b0zda)) throw new Error('invalid tagName:' + b0zda);
        this['tagName'] = b0zda;
    },
    'add': function (bsd40a, sz9db, kv_jqi) {
        if (!_dop7mh['test'](bsd40a)) throw new Error('invalid attribute:' + bsd40a);
        this[this['length']++] = {
            'qName': bsd40a,
            'value': sz9db,
            'offset': kv_jqi
        };
    },
    'length': 0x0,
    'getLocalName': function (ukcyp) {
        return this[ukcyp]['localName'];
    },
    'getLocator': function (t045) {
        return this[t045]['locator'];
    },
    'getQName': function (mhu7pf) {
        return this[mhu7pf]['qName'];
    },
    'getURI': function (jy2_k) {
        return this[jy2_k]['uri'];
    },
    'getValue': function (uhp7cy) {
        return this[uhp7cy]['value'];
    }
}, _djky2cu({}, _djky2cu['prototype']) instanceof _djky2cu || (_djky2cu = function (b4d0a, $40t5s) {
    function t54o0() {}
    t54o0['prototype'] = $40t5s, t54o0 = new t54o0();
    for ($40t5s in b4d0a) t54o0[$40t5s] = b4d0a[$40t5s];
    return t54o0;
}), exports['XMLReader'] = _d$mhof;