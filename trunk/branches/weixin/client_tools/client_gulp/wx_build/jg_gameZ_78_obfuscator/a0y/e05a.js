var s1 = wx.l$;
function _xa_coqr() {}
function _xl56fps(_qro, ey4xgi, x6sey, lzp7uf, _cqrn) {
    function x2g(oq_rca) {
        if (oq_rca > 0xffff) {
            oq_rca -= 0x10000;
            var ac_kr = 0xd800 + (oq_rca >> 0xa),
                w$0dbt = 0xdc00 + (0x3ff & oq_rca);
            return String['fromCharCode'](ac_kr, w$0dbt);
        }
        return String['fromCharCode'](oq_rca);
    }
    function k_9rnc(xigey) {
        var nj_c9 = xigey['slice'](0x1, -0x1);
        return nj_c9 in x6sey ? x6sey[nj_c9] : '#' === nj_c9['charAt'](0x0) ? x2g(parseInt(nj_c9['substr'](0x1)['replace']('x', '0x'))) : (_cqrn['error']('entity not found:' + xigey), xigey);
    }
    function exf65s(w0bdt$) {
        if (w0bdt$ > zupm) {
            var iyg6ex = _qro['substring'](zupm, w0bdt$)['replace'](/&#?\w+;/g, k_9rnc);
            q7uma && i6e5yx(zupm), lzp7uf['characters'](iyg6ex, 0x0, w0bdt$ - zupm), zupm = w0bdt$;
        }
    }
    function i6e5yx(vt0jw$, vnj9c) {
        for (; vt0jw$ >= plfzu7 && (vnj9c = cao_['exec'](_qro));) xy2g4i = vnj9c['index'], plfzu7 = xy2g4i + vnj9c[0x0]['length'], q7uma['lineNumber']++;
        q7uma['columnNumber'] = vt0jw$ - xy2g4i + 0x1;
    }
    for (var xy2g4i = 0x0, plfzu7 = 0x0, cao_ = /.*(?:\r\n?|\n)|.*$/g, q7uma = lzp7uf['locator'], wj0vt = [{ 'currentNSMap': ey4xgi }], c_j9k = {}, zupm = 0x0;;) {
        try {
            var ou7qm = _qro['indexOf']('<', zupm);
            if (0x0 > ou7qm) {
                if (!_qro['substr'](zupm)['match'](/^\s*$/)) {
                    var aumqro = lzp7uf['doc'],
                        $v0jt = aumqro['createTextNode'](_qro['substr'](zupm));
                    aumqro['appendChild']($v0jt), lzp7uf['currentElement'] = $v0jt;
                }
                return;
            }
            switch (ou7qm > zupm && exf65s(ou7qm), _qro['charAt'](ou7qm + 0x1)) {
                case '/':
                    var esf65 = _qro['indexOf']('>', ou7qm + 0x3),
                        u7qao = _qro['substring'](ou7qm + 0x2, esf65),
                        f56p = wj0vt['pop']();
                    0x0 > esf65 ? (u7qao = _qro['substring'](ou7qm + 0x2)['replace'](/[\s<].*/, ''), _cqrn['error']('end tag name: ' + u7qao + ' is not complete:' + f56p['tagName']), esf65 = ou7qm + 0x1 + u7qao['length']) : u7qao['match'](/\s</) && (u7qao = u7qao['replace'](/[\s<].*/, ''), _cqrn['error']('end tag name: ' + u7qao + ' maybe not complete'), esf65 = ou7qm + 0x1 + u7qao['length']);
                    var rqm_o = f56p['localNSMap'],
                        j0$tv = f56p['tagName'] == u7qao,
                        mulzp = j0$tv || f56p['tagName'] && f56p['tagName']['toLowerCase']() == u7qao['toLowerCase']();
                    if (mulzp) {
                        if (lzp7uf['endElement'](f56p['uri'], f56p['localName'], u7qao), rqm_o) {
                            for (var ulf7zp in rqm_o) lzp7uf['endPrefixMapping'](ulf7zp);
                        }
                        j0$tv || _cqrn['fatalError']('end tag name: ' + u7qao + ' is not match the current start tagName:' + f56p['tagName']);
                    } else wj0vt['push'](f56p);
                    esf65++;
                    break;
                case '?':
                    q7uma && i6e5yx(ou7qm), esf65 = _xs65flp(_qro, ou7qm, lzp7uf);
                    break;
                case '!':
                    q7uma && i6e5yx(ou7qm), esf65 = _xfp5l6s(_qro, ou7qm, lzp7uf, _cqrn);
                    break;
                default:
                    q7uma && i6e5yx(ou7qm);
                    var _cj9kn = new _xarmuoq(),
                        ex6s5 = wj0vt[wj0vt['length'] - 0x1]['currentNSMap'],
                        esf65 = _xk_9nc(_qro, ou7qm, _cj9kn, ex6s5, k_9rnc, _cqrn),
                        vw$0b = _cj9kn['length'];
                    if (!_cj9kn['closed'] && _xu7pzmo(_qro, esf65, _cj9kn['tagName'], c_j9k) && (_cj9kn['closed'] = !0x0, x6sey['nbsp'] || _cqrn['warning']('unclosed xml attribute')), q7uma && vw$0b) {
                        for (var qoma = _xwt0(q7uma, {}), c9kr_ = 0x0; vw$0b > c9kr_; c9kr_++) {
                            var aorq_ = _cj9kn[c9kr_];
                            i6e5yx(aorq_['offset']), aorq_['locator'] = _xwt0(q7uma, {});
                        }
                        lzp7uf['locator'] = qoma, _x$jtw9(_cj9kn, lzp7uf, ex6s5) && wj0vt['push'](_cj9kn), lzp7uf['locator'] = q7uma;
                    } else _x$jtw9(_cj9kn, lzp7uf, ex6s5) && wj0vt['push'](_cj9kn);
                    'http://www.w3.org/1999/xhtml' !== _cj9kn['uri'] || _cj9kn['closed'] ? esf65++ : esf65 = _xuao7m(_qro, esf65, _cj9kn['tagName'], k_9rnc, lzp7uf);
            }
        } catch (vk9njw) {
            _cqrn['error']('element parse error: ' + vk9njw), esf65 = -0x1;
        }
        esf65 > zupm ? zupm = esf65 : exf65s(Math['max'](ou7qm, zupm) + 0x1);
    }
}
function _xwt0(jwv9t$, spl6f5) {
    return spl6f5['lineNumber'] = jwv9t$['lineNumber'], spl6f5['columnNumber'] = jwv9t$['columnNumber'], spl6f5;
}
function _xk_9nc(wtj0, kj_nc, v$0t, k9wnvj, rq_mao, lp7m) {
    for (var jcn_k, kr_qa, xs6ef = ++kj_nc, u7lzm = _xuzo7m;;) {
        var n$v = wtj0['charAt'](xs6ef);
        switch (n$v) {
            case '=':
                if (u7lzm === _xfs5lpz) jcn_k = wtj0['slice'](kj_nc, xs6ef), u7lzm = _xs6elf5;else {
                    if (u7lzm !== _xuam) throw new Error('attribute equal must after attrName');
                    u7lzm = _xs6elf5;
                }
                break;
            case '\x27':
            case '\x22':
                if (u7lzm === _xs6elf5 || u7lzm === _xfs5lpz) {
                    if (u7lzm === _xfs5lpz && (lp7m['warning']('attribute value must after "="'), jcn_k = wtj0['slice'](kj_nc, xs6ef)), kj_nc = xs6ef + 0x1, xs6ef = wtj0['indexOf'](n$v, kj_nc), !(xs6ef > 0x0)) throw new Error('attribute value no end \'' + n$v + '\' match');
                    kr_qa = wtj0['slice'](kj_nc, xs6ef)['replace'](/&#?\w+;/g, rq_mao), v$0t['add'](jcn_k, kr_qa, kj_nc - 0x1), u7lzm = _xn_rkqc;
                } else {
                    if (u7lzm != _xmp7ozu) throw new Error('attribute value must after "="');
                    kr_qa = wtj0['slice'](kj_nc, xs6ef)['replace'](/&#?\w+;/g, rq_mao), v$0t['add'](jcn_k, kr_qa, kj_nc), lp7m['warning']('attribute "' + jcn_k + '" missed start quot(' + n$v + ')!!'), kj_nc = xs6ef + 0x1, u7lzm = _xn_rkqc;
                }
                break;
            case '/':
                switch (u7lzm) {
                    case _xuzo7m:
                        v$0t['setTagName'](wtj0['slice'](kj_nc, xs6ef));
                    case _xn_rkqc:
                    case _xocrqa_:
                    case _xknqrc:
                        u7lzm = _xknqrc, v$0t['closed'] = !0x0;
                    case _xmp7ozu:
                    case _xfs5lpz:
                    case _xuam:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return lp7m['error']('unexpected end of input'), u7lzm == _xuzo7m && v$0t['setTagName'](wtj0['slice'](kj_nc, xs6ef)), xs6ef;
            case '>':
                switch (u7lzm) {
                    case _xuzo7m:
                        v$0t['setTagName'](wtj0['slice'](kj_nc, xs6ef));
                    case _xn_rkqc:
                    case _xocrqa_:
                    case _xknqrc:
                        break;
                    case _xmp7ozu:
                    case _xfs5lpz:
                        kr_qa = wtj0['slice'](kj_nc, xs6ef), '/' === kr_qa['slice'](-0x1) && (v$0t['closed'] = !0x0, kr_qa = kr_qa['slice'](0x0, -0x1));
                    case _xuam:
                        u7lzm === _xuam && (kr_qa = jcn_k), u7lzm == _xmp7ozu ? (lp7m['warning']('attribute "' + kr_qa + '" missed quot(")!!'), v$0t['add'](jcn_k, kr_qa['replace'](/&#?\w+;/g, rq_mao), kj_nc)) : ('http://www.w3.org/1999/xhtml' === k9wnvj[''] && kr_qa['match'](/^(?:disabled|checked|selected)$/i) || lp7m['warning']('attribute "' + kr_qa + '" missed value!! "' + kr_qa + '" instead!!'), v$0t['add'](kr_qa, kr_qa, kj_nc));
                        break;
                    case _xs6elf5:
                        throw new Error('attribute value missed!!');
                }
                return xs6ef;
            case '\u0080':
                n$v = '\x20';
            default:
                if ('\x20' >= n$v) switch (u7lzm) {
                    case _xuzo7m:
                        v$0t['setTagName'](wtj0['slice'](kj_nc, xs6ef)), u7lzm = _xocrqa_;
                        break;
                    case _xfs5lpz:
                        jcn_k = wtj0['slice'](kj_nc, xs6ef), u7lzm = _xuam;
                        break;
                    case _xmp7ozu:
                        var kr_qa = wtj0['slice'](kj_nc, xs6ef)['replace'](/&#?\w+;/g, rq_mao);
                        lp7m['warning']('attribute "' + kr_qa + '" missed quot(")!!'), v$0t['add'](jcn_k, kr_qa, kj_nc);
                    case _xn_rkqc:
                        u7lzm = _xocrqa_;
                } else switch (u7lzm) {
                    case _xuam:
                        {
                            v$0t['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === k9wnvj[''] && jcn_k['match'](/^(?:disabled|checked|selected)$/i) || lp7m['warning']('attribute "' + jcn_k + '" missed value!! "' + jcn_k + '" instead2!!'), v$0t['add'](jcn_k, jcn_k, kj_nc), kj_nc = xs6ef, u7lzm = _xfs5lpz;
                        break;
                    case _xn_rkqc:
                        lp7m['warning']('attribute space is required"' + jcn_k + '\x22!!');
                    case _xocrqa_:
                        u7lzm = _xfs5lpz, kj_nc = xs6ef;
                        break;
                    case _xs6elf5:
                        u7lzm = _xmp7ozu, kj_nc = xs6ef;
                        break;
                    case _xknqrc:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        xs6ef++;
    }
}
function _x$jtw9(g21h4, k9jvn, raomuq) {
    for (var cnrk_ = g21h4['tagName'], y6s5xe = null, po7zmu = g21h4['length']; po7zmu--;) {
        var umaqr = g21h4[po7zmu],
            fz5s = umaqr['qName'],
            kar_cq = umaqr['value'],
            tvw0b$ = fz5s['indexOf'](':');
        if (tvw0b$ > 0x0) var v9t$wj = umaqr['prefix'] = fz5s['slice'](0x0, tvw0b$),
            _9nkcr = fz5s['slice'](tvw0b$ + 0x1),
            pslf7z = 'xmlns' === v9t$wj && _9nkcr;else _9nkcr = fz5s, v9t$wj = null, pslf7z = 'xmlns' === fz5s && '';
        umaqr['localName'] = _9nkcr, pslf7z !== !0x1 && (null == y6s5xe && (y6s5xe = {}, _xuaozm(raomuq, raomuq = {})), raomuq[pslf7z] = y6s5xe[pslf7z] = kar_cq, umaqr['uri'] = 'http://www.w3.org/2000/xmlns/', k9jvn['startPrefixMapping'](pslf7z, kar_cq));
    }
    for (var po7zmu = g21h4['length']; po7zmu--;) {
        umaqr = g21h4[po7zmu];
        var v9t$wj = umaqr['prefix'];
        v9t$wj && ('xml' === v9t$wj && (umaqr['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== v9t$wj && (umaqr['uri'] = raomuq[v9t$wj || '']));
    }
    var tvw0b$ = cnrk_['indexOf'](':');
    tvw0b$ > 0x0 ? (v9t$wj = g21h4['prefix'] = cnrk_['slice'](0x0, tvw0b$), _9nkcr = g21h4['localName'] = cnrk_['slice'](tvw0b$ + 0x1)) : (v9t$wj = null, _9nkcr = g21h4['localName'] = cnrk_);
    var qknrc = g21h4['uri'] = raomuq[v9t$wj || ''];
    if (k9jvn['startElement'](qknrc, _9nkcr, cnrk_, g21h4), !g21h4['closed']) return g21h4['currentNSMap'] = raomuq, g21h4['localNSMap'] = y6s5xe, !0x0;
    if (k9jvn['endElement'](qknrc, _9nkcr, cnrk_), y6s5xe) {
        for (v9t$wj in y6s5xe) k9jvn['endPrefixMapping'](v9t$wj);
    }
}
function _xuao7m(yei56x, fz7lp, bd8t, o7umpz, eslf) {
    if (/^(?:script|textarea)$/i['test'](bd8t)) {
        var umqoa = yei56x['indexOf']('</' + bd8t + '>', fz7lp),
            _qcnrk = yei56x['substring'](fz7lp + 0x1, umqoa);
        if (/[&<]/['test'](_qcnrk)) return (/^script$/i['test'](bd8t) ? (eslf['characters'](_qcnrk, 0x0, _qcnrk['length']), umqoa) : (_qcnrk = _qcnrk['replace'](/&#?\w+;/g, o7umpz), eslf['characters'](_qcnrk, 0x0, _qcnrk['length']), umqoa)
        );
    }
    return fz7lp + 0x1;
}
function _xu7pzmo(b8$0, $0vwjt, _cro, lpuzm7) {
    var mouz = lpuzm7[_cro];
    return null == mouz && (mouz = b8$0['lastIndexOf']('</' + _cro + '>'), $0vwjt > mouz && (mouz = b8$0['lastIndexOf']('</' + _cro)), lpuzm7[_cro] = mouz), $0vwjt > mouz;
}
function _xuaozm(a_oq, nkrqc_) {
    for (var q_crnk in a_oq) nkrqc_[q_crnk] = a_oq[q_crnk];
}
function _xfp5l6s(roac_, igxy6e, _qaroc, cr) {
    var aorqu = roac_['charAt'](igxy6e + 0x2);
    switch (aorqu) {
        case '-':
            if ('-' === roac_['charAt'](igxy6e + 0x3)) {
                var j9nvwk = roac_['indexOf']('-->', igxy6e + 0x4);
                return j9nvwk > igxy6e ? (_qaroc['comment'](roac_, igxy6e + 0x4, j9nvwk - igxy6e - 0x4), j9nvwk + 0x3) : (cr['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == roac_['substr'](igxy6e + 0x3, 0x6)) {
                var j9nvwk = roac_['indexOf'](']]>', igxy6e + 0x9);
                return _qaroc['startCDATA'](), _qaroc['characters'](roac_, igxy6e + 0x9, j9nvwk - igxy6e - 0x9), _qaroc['endCDATA'](), j9nvwk + 0x3;
            }
            var sz7lf = _xv9nwj$(roac_, igxy6e),
                fszl5p = sz7lf['length'];
            if (fszl5p > 0x1 && /!doctype/i['test'](sz7lf[0x0][0x0])) {
                var fz5sl = sz7lf[0x1][0x0],
                    mauz7 = fszl5p > 0x3 && /^public$/i['test'](sz7lf[0x2][0x0]) && sz7lf[0x3][0x0],
                    wb0tv$ = fszl5p > 0x4 && sz7lf[0x4][0x0],
                    n$v9j = sz7lf[fszl5p - 0x1];
                return _qaroc['startDTD'](fz5sl, mauz7 && mauz7['replace'](/^(['"])(.*?)\1$/, '$2'), wb0tv$ && wb0tv$['replace'](/^(['"])(.*?)\1$/, '$2')), _qaroc['endDTD'](), n$v9j['index'] + n$v9j[0x0]['length'];
            }
    }
    return -0x1;
}
function _xs65flp($vw0j, qkr_cn, tv9jw) {
    var yxeg6 = $vw0j['indexOf']('?>', qkr_cn);
    if (yxeg6) {
        var zf7p = $vw0j['substring'](qkr_cn, yxeg6)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (zf7p) {
            {
                zf7p[0x0]['length'];
            }
            return tv9jw['processingInstruction'](zf7p[0x1], zf7p[0x2]), yxeg6 + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function _xarmuoq() {}
function _xj9wv$n(cn9v, f6xes) {
    return cn9v['__proto__'] = f6xes, cn9v;
}
function _xv9nwj$(rou, ye6igx) {
    var v$jw9,
        b0$wvt = [],
        c_9knj = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (c_9knj['lastIndex'] = ye6igx, c_9knj['exec'](rou); v$jw9 = c_9knj['exec'](rou);) if (b0$wvt['push'](v$jw9), v$jw9[0x1]) return b0$wvt;
}
var _xuqro = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    _xk9c_rn = new RegExp('[\\-\\.0-9' + _xuqro['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    _xg3h142 = new RegExp('^' + _xuqro['source'] + _xk9c_rn['source'] + '*(?::' + _xuqro['source'] + _xk9c_rn['source'] + '*)?$'),
    _xuzo7m = 0x0,
    _xfs5lpz = 0x1,
    _xuam = 0x2,
    _xs6elf5 = 0x3,
    _xmp7ozu = 0x4,
    _xn_rkqc = 0x5,
    _xocrqa_ = 0x6,
    _xknqrc = 0x7;
_xa_coqr['prototype'] = {
    'parse': function (n_ckqr, yxe, db0w$) {
        var vwb0t = this['domBuilder'];
        vwb0t['startDocument'](), _xuaozm(yxe, yxe = {}), _xl56fps(n_ckqr, yxe, db0w$, vwb0t, this['errorHandler']), vwb0t['endDocument']();
    }
}, _xarmuoq['prototype'] = {
    'setTagName': function ($wt) {
        if (!_xg3h142['test']($wt)) throw new Error('invalid tagName:' + $wt);
        this['tagName'] = $wt;
    },
    'add': function (nj9kvw, jc9v, j9kw) {
        if (!_xg3h142['test'](nj9kvw)) throw new Error('invalid attribute:' + nj9kvw);
        this[this['length']++] = {
            'qName': nj9kvw,
            'value': jc9v,
            'offset': j9kw
        };
    },
    'length': 0x0,
    'getLocalName': function (jn9wv$) {
        return this[jn9wv$]['localName'];
    },
    'getLocator': function (jc9k_n) {
        return this[jc9k_n]['locator'];
    },
    'getQName': function (eyg4i) {
        return this[eyg4i]['qName'];
    },
    'getURI': function (qa7ou) {
        return this[qa7ou]['uri'];
    },
    'getValue': function (nck_9j) {
        return this[nck_9j]['value'];
    }
}, _xj9wv$n({}, _xj9wv$n['prototype']) instanceof _xj9wv$n || (_xj9wv$n = function (xes5f6, fszl) {
    function t0$wb() {}
    t0$wb['prototype'] = fszl, t0$wb = new t0$wb();
    for (fszl in xes5f6) t0$wb[fszl] = xes5f6[fszl];
    return t0$wb;
}), exports['XMLReader'] = _xa_coqr;