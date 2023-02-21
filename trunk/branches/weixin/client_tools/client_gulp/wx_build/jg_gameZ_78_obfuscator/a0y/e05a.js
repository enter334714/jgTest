var s1 = wx.l$;
function _xb$8d() {}
function _xomauz(acrk_q, w0v$t, ncq, ig6yx, lmu7z) {
    function x5ie(wkvnj9) {
        if (wkvnj9 > 0xffff) {
            wkvnj9 -= 0x10000;
            var mqauo7 = 0xd800 + (wkvnj9 >> 0xa),
                qrao = 0xdc00 + (0x3ff & wkvnj9);
            return String['fromCharCode'](mqauo7, qrao);
        }
        return String['fromCharCode'](wkvnj9);
    }
    function bt0$d(ora_mq) {
        var nv9kc = ora_mq['slice'](0x1, -0x1);
        return nv9kc in ncq ? ncq[nv9kc] : '#' === nv9kc['charAt'](0x0) ? x5ie(parseInt(nv9kc['substr'](0x1)['replace']('x', '0x'))) : (lmu7z['error']('entity not found:' + ora_mq), ora_mq);
    }
    function bwvt(eyg4ix) {
        if (eyg4ix > f7upzl) {
            var r_amq = acrk_q['substring'](f7upzl, eyg4ix)['replace'](/&#?\w+;/g, bt0$d);
            x4gyi && b$dw0t(f7upzl), ig6yx['characters'](r_amq, 0x0, eyg4ix - f7upzl), f7upzl = eyg4ix;
        }
    }
    function b$dw0t(karc, aqmur) {
        for (; karc >= lzps5 && (aqmur = v0$wtj['exec'](acrk_q));) l65fe = aqmur['index'], lzps5 = l65fe + aqmur[0x0]['length'], x4gyi['lineNumber']++;
        x4gyi['columnNumber'] = karc - l65fe + 0x1;
    }
    for (var l65fe = 0x0, lzps5 = 0x0, v0$wtj = /.*(?:\r\n?|\n)|.*$/g, x4gyi = ig6yx['locator'], upzl7 = [{ 'currentNSMap': w0v$t }], zl7u = {}, f7upzl = 0x0;;) {
        try {
            var cra_ = acrk_q['indexOf']('<', f7upzl);
            if (0x0 > cra_) {
                if (!acrk_q['substr'](f7upzl)['match'](/^\s*$/)) {
                    var nq_c = ig6yx['doc'],
                        hig1 = nq_c['createTextNode'](acrk_q['substr'](f7upzl));
                    nq_c['appendChild'](hig1), ig6yx['currentElement'] = hig1;
                }
                return;
            }
            switch (cra_ > f7upzl && bwvt(cra_), acrk_q['charAt'](cra_ + 0x1)) {
                case '/':
                    var n$v9 = acrk_q['indexOf']('>', cra_ + 0x3),
                        w$vn9 = acrk_q['substring'](cra_ + 0x2, n$v9),
                        e5sf = upzl7['pop']();
                    0x0 > n$v9 ? (w$vn9 = acrk_q['substring'](cra_ + 0x2)['replace'](/[\s<].*/, ''), lmu7z['error']('end tag name: ' + w$vn9 + ' is not complete:' + e5sf['tagName']), n$v9 = cra_ + 0x1 + w$vn9['length']) : w$vn9['match'](/\s</) && (w$vn9 = w$vn9['replace'](/[\s<].*/, ''), lmu7z['error']('end tag name: ' + w$vn9 + ' maybe not complete'), n$v9 = cra_ + 0x1 + w$vn9['length']);
                    var zf5sl = e5sf['localNSMap'],
                        $wbvt = e5sf['tagName'] == w$vn9,
                        wj$9tv = $wbvt || e5sf['tagName'] && e5sf['tagName']['toLowerCase']() == w$vn9['toLowerCase']();
                    if (wj$9tv) {
                        if (ig6yx['endElement'](e5sf['uri'], e5sf['localName'], w$vn9), zf5sl) {
                            for (var rq_c in zf5sl) ig6yx['endPrefixMapping'](rq_c);
                        }
                        $wbvt || lmu7z['fatalError']('end tag name: ' + w$vn9 + ' is not match the current start tagName:' + e5sf['tagName']);
                    } else upzl7['push'](e5sf);
                    n$v9++;
                    break;
                case '?':
                    x4gyi && b$dw0t(cra_), n$v9 = _xih24g1(acrk_q, cra_, ig6yx);
                    break;
                case '!':
                    x4gyi && b$dw0t(cra_), n$v9 = _xauo7q(acrk_q, cra_, ig6yx, lmu7z);
                    break;
                default:
                    x4gyi && b$dw0t(cra_);
                    var rck_qn = new _xuorm(),
                        hg4213 = upzl7[upzl7['length'] - 0x1]['currentNSMap'],
                        n$v9 = _xj9vkcn(acrk_q, cra_, rck_qn, hg4213, bt0$d, lmu7z),
                        kj_c = rck_qn['length'];
                    if (!rck_qn['closed'] && _xoza7(acrk_q, n$v9, rck_qn['tagName'], zl7u) && (rck_qn['closed'] = !0x0, ncq['nbsp'] || lmu7z['warning']('unclosed xml attribute')), x4gyi && kj_c) {
                        for (var cr_kqn = _xzup7lm(x4gyi, {}), yegx = 0x0; kj_c > yegx; yegx++) {
                            var y4g2hi = rck_qn[yegx];
                            b$dw0t(y4g2hi['offset']), y4g2hi['locator'] = _xzup7lm(x4gyi, {});
                        }
                        ig6yx['locator'] = cr_kqn, _xigy4h(rck_qn, ig6yx, hg4213) && upzl7['push'](rck_qn), ig6yx['locator'] = x4gyi;
                    } else _xigy4h(rck_qn, ig6yx, hg4213) && upzl7['push'](rck_qn);
                    'http://www.w3.org/1999/xhtml' !== rck_qn['uri'] || rck_qn['closed'] ? n$v9++ : n$v9 = _x_karq(acrk_q, n$v9, rck_qn['tagName'], bt0$d, ig6yx);
            }
        } catch (roq_ca) {
            lmu7z['error']('element parse error: ' + roq_ca), n$v9 = -0x1;
        }
        n$v9 > f7upzl ? f7upzl = n$v9 : bwvt(Math['max'](cra_, f7upzl) + 0x1);
    }
}
function _xzup7lm(luz7mp, _nrc) {
    return _nrc['lineNumber'] = luz7mp['lineNumber'], _nrc['columnNumber'] = luz7mp['columnNumber'], _nrc;
}
function _xj9vkcn(flz5ps, $dwt0b, zulp7, b0td$, eyx6ig, yix4e) {
    for (var vwjn9$, oam, p7umoz = ++$dwt0b, amqru = _xpl5zsf;;) {
        var i4yegx = flz5ps['charAt'](p7umoz);
        switch (i4yegx) {
            case '=':
                if (amqru === _xs5fzp) vwjn9$ = flz5ps['slice']($dwt0b, p7umoz), amqru = _xei6x;else {
                    if (amqru !== _xnw9v$) throw new Error('attribute equal must after attrName');
                    amqru = _xei6x;
                }
                break;
            case '\x27':
            case '\x22':
                if (amqru === _xei6x || amqru === _xs5fzp) {
                    if (amqru === _xs5fzp && (yix4e['warning']('attribute value must after "="'), vwjn9$ = flz5ps['slice']($dwt0b, p7umoz)), $dwt0b = p7umoz + 0x1, p7umoz = flz5ps['indexOf'](i4yegx, $dwt0b), !(p7umoz > 0x0)) throw new Error('attribute value no end \'' + i4yegx + '\' match');
                    oam = flz5ps['slice']($dwt0b, p7umoz)['replace'](/&#?\w+;/g, eyx6ig), zulp7['add'](vwjn9$, oam, $dwt0b - 0x1), amqru = _xk9jwv;
                } else {
                    if (amqru != _xqa_) throw new Error('attribute value must after "="');
                    oam = flz5ps['slice']($dwt0b, p7umoz)['replace'](/&#?\w+;/g, eyx6ig), zulp7['add'](vwjn9$, oam, $dwt0b), yix4e['warning']('attribute "' + vwjn9$ + '" missed start quot(' + i4yegx + ')!!'), $dwt0b = p7umoz + 0x1, amqru = _xk9jwv;
                }
                break;
            case '/':
                switch (amqru) {
                    case _xpl5zsf:
                        zulp7['setTagName'](flz5ps['slice']($dwt0b, p7umoz));
                    case _xk9jwv:
                    case _xqmra_o:
                    case _xesf6x5:
                        amqru = _xesf6x5, zulp7['closed'] = !0x0;
                    case _xqa_:
                    case _xs5fzp:
                    case _xnw9v$:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return yix4e['error']('unexpected end of input'), amqru == _xpl5zsf && zulp7['setTagName'](flz5ps['slice']($dwt0b, p7umoz)), p7umoz;
            case '>':
                switch (amqru) {
                    case _xpl5zsf:
                        zulp7['setTagName'](flz5ps['slice']($dwt0b, p7umoz));
                    case _xk9jwv:
                    case _xqmra_o:
                    case _xesf6x5:
                        break;
                    case _xqa_:
                    case _xs5fzp:
                        oam = flz5ps['slice']($dwt0b, p7umoz), '/' === oam['slice'](-0x1) && (zulp7['closed'] = !0x0, oam = oam['slice'](0x0, -0x1));
                    case _xnw9v$:
                        amqru === _xnw9v$ && (oam = vwjn9$), amqru == _xqa_ ? (yix4e['warning']('attribute "' + oam + '" missed quot(")!!'), zulp7['add'](vwjn9$, oam['replace'](/&#?\w+;/g, eyx6ig), $dwt0b)) : ('http://www.w3.org/1999/xhtml' === b0td$[''] && oam['match'](/^(?:disabled|checked|selected)$/i) || yix4e['warning']('attribute "' + oam + '" missed value!! "' + oam + '" instead!!'), zulp7['add'](oam, oam, $dwt0b));
                        break;
                    case _xei6x:
                        throw new Error('attribute value missed!!');
                }
                return p7umoz;
            case '\u0080':
                i4yegx = '\x20';
            default:
                if ('\x20' >= i4yegx) switch (amqru) {
                    case _xpl5zsf:
                        zulp7['setTagName'](flz5ps['slice']($dwt0b, p7umoz)), amqru = _xqmra_o;
                        break;
                    case _xs5fzp:
                        vwjn9$ = flz5ps['slice']($dwt0b, p7umoz), amqru = _xnw9v$;
                        break;
                    case _xqa_:
                        var oam = flz5ps['slice']($dwt0b, p7umoz)['replace'](/&#?\w+;/g, eyx6ig);
                        yix4e['warning']('attribute "' + oam + '" missed quot(")!!'), zulp7['add'](vwjn9$, oam, $dwt0b);
                    case _xk9jwv:
                        amqru = _xqmra_o;
                } else switch (amqru) {
                    case _xnw9v$:
                        {
                            zulp7['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === b0td$[''] && vwjn9$['match'](/^(?:disabled|checked|selected)$/i) || yix4e['warning']('attribute "' + vwjn9$ + '" missed value!! "' + vwjn9$ + '" instead2!!'), zulp7['add'](vwjn9$, vwjn9$, $dwt0b), $dwt0b = p7umoz, amqru = _xs5fzp;
                        break;
                    case _xk9jwv:
                        yix4e['warning']('attribute space is required"' + vwjn9$ + '\x22!!');
                    case _xqmra_o:
                        amqru = _xs5fzp, $dwt0b = p7umoz;
                        break;
                    case _xei6x:
                        amqru = _xqa_, $dwt0b = p7umoz;
                        break;
                    case _xesf6x5:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        p7umoz++;
    }
}
function _xigy4h(aqom_r, om_q, yeixg4) {
    for (var m7uaq = aqom_r['tagName'], g6xyie = null, jwvnk = aqom_r['length']; jwvnk--;) {
        var xf6se = aqom_r[jwvnk],
            omqu7a = xf6se['qName'],
            d$0wtb = xf6se['value'],
            zmopu = omqu7a['indexOf'](':');
        if (zmopu > 0x0) var e65ls = xf6se['prefix'] = omqu7a['slice'](0x0, zmopu),
            sz5pl = omqu7a['slice'](zmopu + 0x1),
            $wd0bt = 'xmlns' === e65ls && sz5pl;else sz5pl = omqu7a, e65ls = null, $wd0bt = 'xmlns' === omqu7a && '';
        xf6se['localName'] = sz5pl, $wd0bt !== !0x1 && (null == g6xyie && (g6xyie = {}, _xnrkcq_(yeixg4, yeixg4 = {})), yeixg4[$wd0bt] = g6xyie[$wd0bt] = d$0wtb, xf6se['uri'] = 'http://www.w3.org/2000/xmlns/', om_q['startPrefixMapping']($wd0bt, d$0wtb));
    }
    for (var jwvnk = aqom_r['length']; jwvnk--;) {
        xf6se = aqom_r[jwvnk];
        var e65ls = xf6se['prefix'];
        e65ls && ('xml' === e65ls && (xf6se['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== e65ls && (xf6se['uri'] = yeixg4[e65ls || '']));
    }
    var zmopu = m7uaq['indexOf'](':');
    zmopu > 0x0 ? (e65ls = aqom_r['prefix'] = m7uaq['slice'](0x0, zmopu), sz5pl = aqom_r['localName'] = m7uaq['slice'](zmopu + 0x1)) : (e65ls = null, sz5pl = aqom_r['localName'] = m7uaq);
    var n$wvj = aqom_r['uri'] = yeixg4[e65ls || ''];
    if (om_q['startElement'](n$wvj, sz5pl, m7uaq, aqom_r), !aqom_r['closed']) return aqom_r['currentNSMap'] = yeixg4, aqom_r['localNSMap'] = g6xyie, !0x0;
    if (om_q['endElement'](n$wvj, sz5pl, m7uaq), g6xyie) {
        for (e65ls in g6xyie) om_q['endPrefixMapping'](e65ls);
    }
}
function _x_karq(tv9w$, g6xyi, oaqm_r, rmqa_o, op7m) {
    if (/^(?:script|textarea)$/i['test'](oaqm_r)) {
        var gixye4 = tv9w$['indexOf']('</' + oaqm_r + '>', g6xyi),
            arkqc_ = tv9w$['substring'](g6xyi + 0x1, gixye4);
        if (/[&<]/['test'](arkqc_)) return (/^script$/i['test'](oaqm_r) ? (op7m['characters'](arkqc_, 0x0, arkqc_['length']), gixye4) : (arkqc_ = arkqc_['replace'](/&#?\w+;/g, rmqa_o), op7m['characters'](arkqc_, 0x0, arkqc_['length']), gixye4)
        );
    }
    return g6xyi + 0x1;
}
function _xoza7(or_qc, _cnk, jnk9vc, jn$v9w) {
    var tbd0$8 = jn$v9w[jnk9vc];
    return null == tbd0$8 && (tbd0$8 = or_qc['lastIndexOf']('</' + jnk9vc + '>'), _cnk > tbd0$8 && (tbd0$8 = or_qc['lastIndexOf']('</' + jnk9vc)), jn$v9w[jnk9vc] = tbd0$8), _cnk > tbd0$8;
}
function _xnrkcq_(f6s5e, umz7o) {
    for (var _ckrn in f6s5e) umz7o[_ckrn] = f6s5e[_ckrn];
}
function _xauo7q(fslzp, b0wv, pf56s, flzpu7) {
    var tj0vw = fslzp['charAt'](b0wv + 0x2);
    switch (tj0vw) {
        case '-':
            if ('-' === fslzp['charAt'](b0wv + 0x3)) {
                var efs65 = fslzp['indexOf']('-->', b0wv + 0x4);
                return efs65 > b0wv ? (pf56s['comment'](fslzp, b0wv + 0x4, efs65 - b0wv - 0x4), efs65 + 0x3) : (flzpu7['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == fslzp['substr'](b0wv + 0x3, 0x6)) {
                var efs65 = fslzp['indexOf'](']]>', b0wv + 0x9);
                return pf56s['startCDATA'](), pf56s['characters'](fslzp, b0wv + 0x9, efs65 - b0wv - 0x9), pf56s['endCDATA'](), efs65 + 0x3;
            }
            var oqur = _xp5l6fs(fslzp, b0wv),
                vt$wb0 = oqur['length'];
            if (vt$wb0 > 0x1 && /!doctype/i['test'](oqur[0x0][0x0])) {
                var _nkr9c = oqur[0x1][0x0],
                    cn9kjv = vt$wb0 > 0x3 && /^public$/i['test'](oqur[0x2][0x0]) && oqur[0x3][0x0],
                    _racq = vt$wb0 > 0x4 && oqur[0x4][0x0],
                    $twvj = oqur[vt$wb0 - 0x1];
                return pf56s['startDTD'](_nkr9c, cn9kjv && cn9kjv['replace'](/^(['"])(.*?)\1$/, '$2'), _racq && _racq['replace'](/^(['"])(.*?)\1$/, '$2')), pf56s['endDTD'](), $twvj['index'] + $twvj[0x0]['length'];
            }
    }
    return -0x1;
}
function _xih24g1(uzp7fl, wbt0, y6xegi) {
    var bd80$t = uzp7fl['indexOf']('?>', wbt0);
    if (bd80$t) {
        var nr_ = uzp7fl['substring'](wbt0, bd80$t)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (nr_) {
            {
                nr_[0x0]['length'];
            }
            return y6xegi['processingInstruction'](nr_[0x1], nr_[0x2]), bd80$t + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function _xuorm() {}
function _xkvnj(kqc_rn, xi4eyg) {
    return kqc_rn['__proto__'] = xi4eyg, kqc_rn;
}
function _xp5l6fs(_co, c_qnk) {
    var h4ig12,
        maqo_r = [],
        i5y6 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (i5y6['lastIndex'] = c_qnk, i5y6['exec'](_co); h4ig12 = i5y6['exec'](_co);) if (maqo_r['push'](h4ig12), h4ig12[0x1]) return maqo_r;
}
var _xzpuom = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    _xj_c9kn = new RegExp('[\\-\\.0-9' + _xzpuom['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    _xvjnk = new RegExp('^' + _xzpuom['source'] + _xj_c9kn['source'] + '*(?::' + _xzpuom['source'] + _xj_c9kn['source'] + '*)?$'),
    _xpl5zsf = 0x0,
    _xs5fzp = 0x1,
    _xnw9v$ = 0x2,
    _xei6x = 0x3,
    _xqa_ = 0x4,
    _xk9jwv = 0x5,
    _xqmra_o = 0x6,
    _xesf6x5 = 0x7;
_xb$8d['prototype'] = {
    'parse': function (yi6gex, bt0$wv, egy4xi) {
        var up7zl = this['domBuilder'];
        up7zl['startDocument'](), _xnrkcq_(bt0$wv, bt0$wv = {}), _xomauz(yi6gex, bt0$wv, egy4xi, up7zl, this['errorHandler']), up7zl['endDocument']();
    }
}, _xuorm['prototype'] = {
    'setTagName': function (j9kcnv) {
        if (!_xvjnk['test'](j9kcnv)) throw new Error('invalid tagName:' + j9kcnv);
        this['tagName'] = j9kcnv;
    },
    'add': function (ufpl7z, flzps, _9jcn) {
        if (!_xvjnk['test'](ufpl7z)) throw new Error('invalid attribute:' + ufpl7z);
        this[this['length']++] = {
            'qName': ufpl7z,
            'value': flzps,
            'offset': _9jcn
        };
    },
    'length': 0x0,
    'getLocalName': function (es5fx) {
        return this[es5fx]['localName'];
    },
    'getLocator': function (kjnw9) {
        return this[kjnw9]['locator'];
    },
    'getQName': function (xgyi6e) {
        return this[xgyi6e]['qName'];
    },
    'getURI': function (s6p5f) {
        return this[s6p5f]['uri'];
    },
    'getValue': function (vj0) {
        return this[vj0]['value'];
    }
}, _xkvnj({}, _xkvnj['prototype']) instanceof _xkvnj || (_xkvnj = function (_oa, tbw0$v) {
    function xey5i() {}
    xey5i['prototype'] = tbw0$v, xey5i = new xey5i();
    for (tbw0$v in _oa) xey5i[tbw0$v] = _oa[tbw0$v];
    return xey5i;
}), exports['XMLReader'] = _xb$8d;