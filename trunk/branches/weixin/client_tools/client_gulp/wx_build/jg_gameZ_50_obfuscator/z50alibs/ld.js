var b = wx.$e;
function edk1yw() {}
function eu7c(mx0j, hlt84g, dyfw1o, _6sr0$, wdky1o) {
    function tp5ix(xmijp) {
        if (xmijp > 0xffff) {
            xmijp -= 0x10000;
            var k1oq = 0xd800 + (xmijp >> 0xa),
                efo1yd = 0xdc00 + (0x3ff & xmijp);
            return String['fromCharCode'](k1oq, efo1yd);
        }
        return String['fromCharCode'](xmijp);
    }
    function nu8l9(lt5g4) {
        var bcu7v2 = lt5g4['slice'](0x1, -0x1);
        return bcu7v2 in dyfw1o ? dyfw1o[bcu7v2] : '#' === bcu7v2['charAt'](0x0) ? tp5ix(parseInt(bcu7v2['substr'](0x1)['replace']('x', '0x'))) : (wdky1o['error']('entity not found:' + lt5g4), lt5g4);
    }
    function ykwod1(ykoq1) {
        if (ykoq1 > ajmix$) {
            var gitap5 = mx0j['substring'](ajmix$, ykoq1)['replace'](/&#?\w+;/g, nu8l9);
            hun98 && gl4h(ajmix$), _6sr0$['characters'](gitap5, 0x0, ykoq1 - ajmix$), ajmix$ = ykoq1;
        }
    }
    function gl4h(cb92u, vn2u9c) {
        for (; cb92u >= apji5 && (vn2u9c = bz7q3['exec'](mx0j));) ma_$x = vn2u9c['index'], apji5 = ma_$x + vn2u9c[0x0]['length'], hun98['lineNumber']++;
        hun98['columnNumber'] = cb92u - ma_$x + 0x1;
    }
    for (var ma_$x = 0x0, apji5 = 0x0, bz7q3 = /.*(?:\r\n?|\n)|.*$/g, hun98 = _6sr0$['locator'], zkb = [{ 'currentNSMap': hlt84g }], _r$m06 = {}, ajmix$ = 0x0;;) {
        try {
            var ipx = mx0j['indexOf']('<', ajmix$);
            if (0x0 > ipx) {
                if (!mx0j['substr'](ajmix$)['match'](/^\s*$/)) {
                    var qw1kyo = _6sr0$['doc'],
                        jxma$ = qw1kyo['createTextNode'](mx0j['substr'](ajmix$));
                    qw1kyo['appendChild'](jxma$), _6sr0$['currentElement'] = jxma$;
                }
                return;
            }
            switch (ipx > ajmix$ && ykwod1(ipx), mx0j['charAt'](ipx + 0x1)) {
                case '/':
                    var wk1o = mx0j['indexOf']('>', ipx + 0x3),
                        pmij = mx0j['substring'](ipx + 0x2, wk1o),
                        _axm$ = zkb['pop']();
                    0x0 > wk1o ? (pmij = mx0j['substring'](ipx + 0x2)['replace'](/[\s<].*/, ''), wdky1o['error']('end tag name: ' + pmij + ' is not complete:' + _axm$['tagName']), wk1o = ipx + 0x1 + pmij['length']) : pmij['match'](/\s</) && (pmij = pmij['replace'](/[\s<].*/, ''), wdky1o['error']('end tag name: ' + pmij + ' maybe not complete'), wk1o = ipx + 0x1 + pmij['length']);
                    var qk7w3 = _axm$['localNSMap'],
                        yow1 = _axm$['tagName'] == pmij,
                        kbq7z3 = yow1 || _axm$['tagName'] && _axm$['tagName']['toLowerCase']() == pmij['toLowerCase']();
                    if (kbq7z3) {
                        if (_6sr0$['endElement'](_axm$['uri'], _axm$['localName'], pmij), qk7w3) {
                            for (var z3qkw1 in qk7w3) _6sr0$['endPrefixMapping'](z3qkw1);
                        }
                        yow1 || wdky1o['fatalError']('end tag name: ' + pmij + ' is not match the current start tagName:' + _axm$['tagName']);
                    } else zkb['push'](_axm$);
                    wk1o++;
                    break;
                case '?':
                    hun98 && gl4h(ipx), wk1o = ew1yqk(mx0j, ipx, _6sr0$);
                    break;
                case '!':
                    hun98 && gl4h(ipx), wk1o = eh984(mx0j, ipx, _6sr0$, wdky1o);
                    break;
                default:
                    hun98 && gl4h(ipx);
                    var zk1q = new ekq(),
                        m$6r_ = zkb[zkb['length'] - 0x1]['currentNSMap'],
                        wk1o = edo1eyf(mx0j, ipx, zk1q, m$6r_, nu8l9, wdky1o),
                        zqk13w = zk1q['length'];
                    if (!zk1q['closed'] && e_x0jm$(mx0j, wk1o, zk1q['tagName'], _r$m06) && (zk1q['closed'] = !0x0, dyfw1o['nbsp'] || wdky1o['warning']('unclosed xml attribute')), hun98 && zqk13w) {
                        for (var hun29 = eaij$m(hun98, {}), c7v2zb = 0x0; zqk13w > c7v2zb; c7v2zb++) {
                            var $r6_0 = zk1q[c7v2zb];
                            gl4h($r6_0['offset']), $r6_0['locator'] = eaij$m(hun98, {});
                        }
                        _6sr0$['locator'] = hun29, ekq73w(zk1q, _6sr0$, m$6r_) && zkb['push'](zk1q), _6sr0$['locator'] = hun98;
                    } else ekq73w(zk1q, _6sr0$, m$6r_) && zkb['push'](zk1q);
                    'http://www.w3.org/1999/xhtml' !== zk1q['uri'] || zk1q['closed'] ? wk1o++ : wk1o = em6$r0_(mx0j, wk1o, zk1q['tagName'], nu8l9, _6sr0$);
            }
        } catch (p5atxi) {
            wdky1o['error']('element parse error: ' + p5atxi), wk1o = -0x1;
        }
        wk1o > ajmix$ ? ajmix$ = wk1o : ykwod1(Math['max'](ipx, ajmix$) + 0x1);
    }
}
function eaij$m(dey1f, nu9hvl) {
    return nu9hvl['lineNumber'] = dey1f['lineNumber'], nu9hvl['columnNumber'] = dey1f['columnNumber'], nu9hvl;
}
function edo1eyf(lh8un, jxaimp, r6m0_$, owyd1f, nhl9vu, l9hnv) {
    for (var a$m_, l94n8, yeo1fd = ++jxaimp, pj5xai = e$ijmx;;) {
        var un8lh9 = lh8un['charAt'](yeo1fd);
        switch (un8lh9) {
            case '=':
                if (pj5xai === ezw1kq3) a$m_ = lh8un['slice'](jxaimp, yeo1fd), pj5xai = eqko13;else {
                    if (pj5xai !== exitpa) throw new Error('attribute equal must after attrName');
                    pj5xai = eqko13;
                }
                break;
            case '\x27':
            case '\x22':
                if (pj5xai === eqko13 || pj5xai === ezw1kq3) {
                    if (pj5xai === ezw1kq3 && (l9hnv['warning']('attribute value must after "="'), a$m_ = lh8un['slice'](jxaimp, yeo1fd)), jxaimp = yeo1fd + 0x1, yeo1fd = lh8un['indexOf'](un8lh9, jxaimp), !(yeo1fd > 0x0)) throw new Error('attribute value no end \'' + un8lh9 + '\' match');
                    l94n8 = lh8un['slice'](jxaimp, yeo1fd)['replace'](/&#?\w+;/g, nhl9vu), r6m0_$['add'](a$m_, l94n8, jxaimp - 0x1), pj5xai = epxai;
                } else {
                    if (pj5xai != eed) throw new Error('attribute value must after "="');
                    l94n8 = lh8un['slice'](jxaimp, yeo1fd)['replace'](/&#?\w+;/g, nhl9vu), r6m0_$['add'](a$m_, l94n8, jxaimp), l9hnv['warning']('attribute "' + a$m_ + '" missed start quot(' + un8lh9 + ')!!'), jxaimp = yeo1fd + 0x1, pj5xai = epxai;
                }
                break;
            case '/':
                switch (pj5xai) {
                    case e$ijmx:
                        r6m0_$['setTagName'](lh8un['slice'](jxaimp, yeo1fd));
                    case epxai:
                    case egat5pi:
                    case e_60m:
                        pj5xai = e_60m, r6m0_$['closed'] = !0x0;
                    case eed:
                    case ezw1kq3:
                    case exitpa:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return l9hnv['error']('unexpected end of input'), pj5xai == e$ijmx && r6m0_$['setTagName'](lh8un['slice'](jxaimp, yeo1fd)), yeo1fd;
            case '>':
                switch (pj5xai) {
                    case e$ijmx:
                        r6m0_$['setTagName'](lh8un['slice'](jxaimp, yeo1fd));
                    case epxai:
                    case egat5pi:
                    case e_60m:
                        break;
                    case eed:
                    case ezw1kq3:
                        l94n8 = lh8un['slice'](jxaimp, yeo1fd), '/' === l94n8['slice'](-0x1) && (r6m0_$['closed'] = !0x0, l94n8 = l94n8['slice'](0x0, -0x1));
                    case exitpa:
                        pj5xai === exitpa && (l94n8 = a$m_), pj5xai == eed ? (l9hnv['warning']('attribute "' + l94n8 + '" missed quot(")!!'), r6m0_$['add'](a$m_, l94n8['replace'](/&#?\w+;/g, nhl9vu), jxaimp)) : ('http://www.w3.org/1999/xhtml' === owyd1f[''] && l94n8['match'](/^(?:disabled|checked|selected)$/i) || l9hnv['warning']('attribute "' + l94n8 + '" missed value!! "' + l94n8 + '" instead!!'), r6m0_$['add'](l94n8, l94n8, jxaimp));
                        break;
                    case eqko13:
                        throw new Error('attribute value missed!!');
                }
                return yeo1fd;
            case '\u0080':
                un8lh9 = '\x20';
            default:
                if ('\x20' >= un8lh9) switch (pj5xai) {
                    case e$ijmx:
                        r6m0_$['setTagName'](lh8un['slice'](jxaimp, yeo1fd)), pj5xai = egat5pi;
                        break;
                    case ezw1kq3:
                        a$m_ = lh8un['slice'](jxaimp, yeo1fd), pj5xai = exitpa;
                        break;
                    case eed:
                        var l94n8 = lh8un['slice'](jxaimp, yeo1fd)['replace'](/&#?\w+;/g, nhl9vu);
                        l9hnv['warning']('attribute "' + l94n8 + '" missed quot(")!!'), r6m0_$['add'](a$m_, l94n8, jxaimp);
                    case epxai:
                        pj5xai = egat5pi;
                } else switch (pj5xai) {
                    case exitpa:
                        {
                            r6m0_$['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === owyd1f[''] && a$m_['match'](/^(?:disabled|checked|selected)$/i) || l9hnv['warning']('attribute "' + a$m_ + '" missed value!! "' + a$m_ + '" instead2!!'), r6m0_$['add'](a$m_, a$m_, jxaimp), jxaimp = yeo1fd, pj5xai = ezw1kq3;
                        break;
                    case epxai:
                        l9hnv['warning']('attribute space is required"' + a$m_ + '\x22!!');
                    case egat5pi:
                        pj5xai = ezw1kq3, jxaimp = yeo1fd;
                        break;
                    case eqko13:
                        pj5xai = eed, jxaimp = yeo1fd;
                        break;
                    case e_60m:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        yeo1fd++;
    }
}
function ekq73w(owd1y, owdfy1, $mj0r) {
    for (var $mxj_a = owd1y['tagName'], aipg5t = null, mjx0$_ = owd1y['length']; mjx0$_--;) {
        var mxip = owd1y[mjx0$_],
            mxapji = mxip['qName'],
            b7vzc2 = mxip['value'],
            _06r$m = mxapji['indexOf'](':');
        if (_06r$m > 0x0) var i5tpg = mxip['prefix'] = mxapji['slice'](0x0, _06r$m),
            ip5atg = mxapji['slice'](_06r$m + 0x1),
            ow1kyq = 'xmlns' === i5tpg && ip5atg;else ip5atg = mxapji, i5tpg = null, ow1kyq = 'xmlns' === mxapji && '';
        mxip['localName'] = ip5atg, ow1kyq !== !0x1 && (null == aipg5t && (aipg5t = {}, e_mr60$($mj0r, $mj0r = {})), $mj0r[ow1kyq] = aipg5t[ow1kyq] = b7vzc2, mxip['uri'] = 'http://www.w3.org/2000/xmlns/', owdfy1['startPrefixMapping'](ow1kyq, b7vzc2));
    }
    for (var mjx0$_ = owd1y['length']; mjx0$_--;) {
        mxip = owd1y[mjx0$_];
        var i5tpg = mxip['prefix'];
        i5tpg && ('xml' === i5tpg && (mxip['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== i5tpg && (mxip['uri'] = $mj0r[i5tpg || '']));
    }
    var _06r$m = $mxj_a['indexOf'](':');
    _06r$m > 0x0 ? (i5tpg = owd1y['prefix'] = $mxj_a['slice'](0x0, _06r$m), ip5atg = owd1y['localName'] = $mxj_a['slice'](_06r$m + 0x1)) : (i5tpg = null, ip5atg = owd1y['localName'] = $mxj_a);
    var v9buc = owd1y['uri'] = $mj0r[i5tpg || ''];
    if (owdfy1['startElement'](v9buc, ip5atg, $mxj_a, owd1y), !owd1y['closed']) return owd1y['currentNSMap'] = $mj0r, owd1y['localNSMap'] = aipg5t, !0x0;
    if (owdfy1['endElement'](v9buc, ip5atg, $mxj_a), aipg5t) {
        for (i5tpg in aipg5t) owdfy1['endPrefixMapping'](i5tpg);
    }
}
function em6$r0_(wdoyk, k3wz7q, c27v, fo1y, vbcz) {
    if (/^(?:script|textarea)$/i['test'](c27v)) {
        var txap5i = wdoyk['indexOf']('</' + c27v + '>', k3wz7q),
            fdey1 = wdoyk['substring'](k3wz7q + 0x1, txap5i);
        if (/[&<]/['test'](fdey1)) return (/^script$/i['test'](c27v) ? (vbcz['characters'](fdey1, 0x0, fdey1['length']), txap5i) : (fdey1 = fdey1['replace'](/&#?\w+;/g, fo1y), vbcz['characters'](fdey1, 0x0, fdey1['length']), txap5i)
        );
    }
    return k3wz7q + 0x1;
}
function e_x0jm$(am_$x, jampxi, qbkz7, tiag5) {
    var yqwok1 = tiag5[qbkz7];
    return null == yqwok1 && (yqwok1 = am_$x['lastIndexOf']('</' + qbkz7 + '>'), jampxi > yqwok1 && (yqwok1 = am_$x['lastIndexOf']('</' + qbkz7)), tiag5[qbkz7] = yqwok1), jampxi > yqwok1;
}
function e_mr60$($_sr0, $maxj_) {
    for (var z7kqw in $_sr0) $maxj_[z7kqw] = $_sr0[z7kqw];
}
function eh984(cqb3z, ximapj, luhvn9, wqyk1o) {
    var hn92v = cqb3z['charAt'](ximapj + 0x2);
    switch (hn92v) {
        case '-':
            if ('-' === cqb3z['charAt'](ximapj + 0x3)) {
                var nuh98l = cqb3z['indexOf']('-->', ximapj + 0x4);
                return nuh98l > ximapj ? (luhvn9['comment'](cqb3z, ximapj + 0x4, nuh98l - ximapj - 0x4), nuh98l + 0x3) : (wqyk1o['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == cqb3z['substr'](ximapj + 0x3, 0x6)) {
                var nuh98l = cqb3z['indexOf'](']]>', ximapj + 0x9);
                return luhvn9['startCDATA'](), luhvn9['characters'](cqb3z, ximapj + 0x9, nuh98l - ximapj - 0x9), luhvn9['endCDATA'](), nuh98l + 0x3;
            }
            var $0rs_ = ek7zw(cqb3z, ximapj),
                ig5tap = $0rs_['length'];
            if (ig5tap > 0x1 && /!doctype/i['test']($0rs_[0x0][0x0])) {
                var z7vc2b = $0rs_[0x1][0x0],
                    b7qzk = ig5tap > 0x3 && /^public$/i['test']($0rs_[0x2][0x0]) && $0rs_[0x3][0x0],
                    odefy1 = ig5tap > 0x4 && $0rs_[0x4][0x0],
                    i$mxja = $0rs_[ig5tap - 0x1];
                return luhvn9['startDTD'](z7vc2b, b7qzk && b7qzk['replace'](/^(['"])(.*?)\1$/, '$2'), odefy1 && odefy1['replace'](/^(['"])(.*?)\1$/, '$2')), luhvn9['endDTD'](), i$mxja['index'] + i$mxja[0x0]['length'];
            }
    }
    return -0x1;
}
function ew1yqk(l9nv, mjx0_, vcub27) {
    var jr0$_m = l9nv['indexOf']('?>', mjx0_);
    if (jr0$_m) {
        var wk1zq = l9nv['substring'](mjx0_, jr0$_m)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (wk1zq) {
            {
                wk1zq[0x0]['length'];
            }
            return vcub27['processingInstruction'](wk1zq[0x1], wk1zq[0x2]), jr0$_m + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function ekq() {}
function el48n9h(p8t4g5, pamji) {
    return p8t4g5['__proto__'] = pamji, p8t4g5;
}
function ek7zw(kbzq73, ydfow) {
    var mxpjai,
        $mx_a = [],
        gl85t = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (gl85t['lastIndex'] = ydfow, gl85t['exec'](kbzq73); mxpjai = gl85t['exec'](kbzq73);) if ($mx_a['push'](mxpjai), mxpjai[0x1]) return $mx_a;
}
var ecv2ub7 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    ef1oye = new RegExp('[\\-\\.0-9' + ecv2ub7['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    ez7bv2 = new RegExp('^' + ecv2ub7['source'] + ef1oye['source'] + '*(?::' + ecv2ub7['source'] + ef1oye['source'] + '*)?$'),
    e$ijmx = 0x0,
    ezw1kq3 = 0x1,
    exitpa = 0x2,
    eqko13 = 0x3,
    eed = 0x4,
    epxai = 0x5,
    egat5pi = 0x6,
    e_60m = 0x7;
edk1yw['prototype'] = {
    'parse': function (bvc2, h9l4n, rmj0_) {
        var y1dof = this['domBuilder'];
        y1dof['startDocument'](), e_mr60$(h9l4n, h9l4n = {}), eu7c(bvc2, h9l4n, rmj0_, y1dof, this['errorHandler']), y1dof['endDocument']();
    }
}, ekq['prototype'] = {
    'setTagName': function (l548t) {
        if (!ez7bv2['test'](l548t)) throw new Error('invalid tagName:' + l548t);
        this['tagName'] = l548t;
    },
    'add': function (w3q1o, ipmj, g8hnl4) {
        if (!ez7bv2['test'](w3q1o)) throw new Error('invalid attribute:' + w3q1o);
        this[this['length']++] = {
            'qName': w3q1o,
            'value': ipmj,
            'offset': g8hnl4
        };
    },
    'length': 0x0,
    'getLocalName': function (gtl458) {
        return this[gtl458]['localName'];
    },
    'getLocator': function (bc7z3) {
        return this[bc7z3]['locator'];
    },
    'getQName': function (_6m0$r) {
        return this[_6m0$r]['qName'];
    },
    'getURI': function (xaj5p) {
        return this[xaj5p]['uri'];
    },
    'getValue': function (g4lt8h) {
        return this[g4lt8h]['value'];
    }
}, el48n9h({}, el48n9h['prototype']) instanceof el48n9h || (el48n9h = function (k3b7, fwdoy) {
    function c2vu() {}
    c2vu['prototype'] = fwdoy, c2vu = new c2vu();
    for (fwdoy in k3b7) c2vu[fwdoy] = k3b7[fwdoy];
    return c2vu;
}), exports['XMLReader'] = edk1yw;