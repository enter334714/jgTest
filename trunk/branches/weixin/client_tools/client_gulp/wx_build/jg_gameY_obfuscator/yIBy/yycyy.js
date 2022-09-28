var a = wx.$y;
function yv0z3ry() {}
function y$gqn2i(j78f, q2gi, htwd14, xyzrv, lcks89) {
    function ngq$(qpi$) {
        if (qpi$ > 0xffff) {
            qpi$ -= 0x10000;
            var jo4_h = 0xd800 + (qpi$ >> 0xa),
                _jfho7 = 0xdc00 + (0x3ff & qpi$);
            return String['fromCharCode'](jo4_h, _jfho7);
        }
        return String['fromCharCode'](qpi$);
    }
    function v3y0zr(k2cs) {
        var tu15m = k2cs['slice'](0x1, -0x1);
        return tu15m in htwd14 ? htwd14[tu15m] : '#' === tu15m['charAt'](0x0) ? ngq$(parseInt(tu15m['substr'](0x1)['replace']('x', '0x'))) : (lcks89['error']('entity not found:' + k2cs), k2cs);
    }
    function dau15m(mu1wdt) {
        if (mu1wdt > h_f) {
            var fh7_ = j78f['substring'](h_f, mu1wdt)['replace'](/&#?\w+;/g, v3y0zr);
            t15 && zyrv0x(h_f), xyzrv['characters'](fh7_, 0x0, mu1wdt - h_f), h_f = mu1wdt;
        }
    }
    function zyrv0x(wmt1ud, l89s) {
        for (; wmt1ud >= o_7f8l && (l89s = hwtoj4['exec'](j78f));) v35am = l89s['index'], o_7f8l = v35am + l89s[0x0]['length'], t15['lineNumber']++;
        t15['columnNumber'] = wmt1ud - v35am + 0x1;
    }
    for (var v35am = 0x0, o_7f8l = 0x0, hwtoj4 = /.*(?:\r\n?|\n)|.*$/g, t15 = xyzrv['locator'], v3y0a6 = [{ 'currentNSMap': q2gi }], wt1hd = {}, h_f = 0x0;;) {
        try {
            var q2nig$ = j78f['indexOf']('<', h_f);
            if (0x0 > q2nig$) {
                if (!j78f['substr'](h_f)['match'](/^\s*$/)) {
                    var zr0e = xyzrv['doc'],
                        nc92 = zr0e['createTextNode'](j78f['substr'](h_f));
                    zr0e['appendChild'](nc92), xyzrv['currentElement'] = nc92;
                }
                return;
            }
            switch (q2nig$ > h_f && dau15m(q2nig$), j78f['charAt'](q2nig$ + 0x1)) {
                case '/':
                    var slk2 = j78f['indexOf']('>', q2nig$ + 0x3),
                        fsl_87 = j78f['substring'](q2nig$ + 0x2, slk2),
                        k$ngi2 = v3y0a6['pop']();
                    0x0 > slk2 ? (fsl_87 = j78f['substring'](q2nig$ + 0x2)['replace'](/[\s<].*/, ''), lcks89['error']('end tag name: ' + fsl_87 + ' is not complete:' + k$ngi2['tagName']), slk2 = q2nig$ + 0x1 + fsl_87['length']) : fsl_87['match'](/\s</) && (fsl_87 = fsl_87['replace'](/[\s<].*/, ''), lcks89['error']('end tag name: ' + fsl_87 + ' maybe not complete'), slk2 = q2nig$ + 0x1 + fsl_87['length']);
                    var m15 = k$ngi2['localNSMap'],
                        m1tu5 = k$ngi2['tagName'] == fsl_87,
                        l8_s7c = m1tu5 || k$ngi2['tagName'] && k$ngi2['tagName']['toLowerCase']() == fsl_87['toLowerCase']();
                    if (l8_s7c) {
                        if (xyzrv['endElement'](k$ngi2['uri'], k$ngi2['localName'], fsl_87), m15) {
                            for (var a0y3 in m15) xyzrv['endPrefixMapping'](a0y3);
                        }
                        m1tu5 || lcks89['fatalError']('end tag name: ' + fsl_87 + ' is not match the current start tagName:' + k$ngi2['tagName']);
                    } else v3y0a6['push'](k$ngi2);
                    slk2++;
                    break;
                case '?':
                    t15 && zyrv0x(q2nig$), slk2 = yqni2$g(j78f, q2nig$, xyzrv);
                    break;
                case '!':
                    t15 && zyrv0x(q2nig$), slk2 = ya6u51m(j78f, q2nig$, xyzrv, lcks89);
                    break;
                default:
                    t15 && zyrv0x(q2nig$);
                    var _8of = new yr036(),
                        z0yvx = v3y0a6[v3y0a6['length'] - 0x1]['currentNSMap'],
                        slk2 = ylf_8o(j78f, q2nig$, _8of, z0yvx, v3y0zr, lcks89),
                        d15amu = _8of['length'];
                    if (!_8of['closed'] && yl789c(j78f, slk2, _8of['tagName'], wt1hd) && (_8of['closed'] = !0x0, htwd14['nbsp'] || lcks89['warning']('unclosed xml attribute')), t15 && d15amu) {
                        for (var rzv3y = ya35um(t15, {}), $n2kc9 = 0x0; d15amu > $n2kc9; $n2kc9++) {
                            var $ni = _8of[$n2kc9];
                            zyrv0x($ni['offset']), $ni['locator'] = ya35um(t15, {});
                        }
                        xyzrv['locator'] = rzv3y, ynkig2$(_8of, xyzrv, z0yvx) && v3y0a6['push'](_8of), xyzrv['locator'] = t15;
                    } else ynkig2$(_8of, xyzrv, z0yvx) && v3y0a6['push'](_8of);
                    'http://www.w3.org/1999/xhtml' !== _8of['uri'] || _8of['closed'] ? slk2++ : slk2 = yhfwj4o(j78f, slk2, _8of['tagName'], v3y0zr, xyzrv);
            }
        } catch (hofw4j) {
            lcks89['error']('element parse error: ' + hofw4j), slk2 = -0x1;
        }
        slk2 > h_f ? h_f = slk2 : dau15m(Math['max'](q2nig$, h_f) + 0x1);
    }
}
function ya35um(o7jf_h, sl798) {
    return sl798['lineNumber'] = o7jf_h['lineNumber'], sl798['columnNumber'] = o7jf_h['columnNumber'], sl798;
}
function ylf_8o(du15tm, lc978, i$qg, a1u65m, cl8s_, x0vrzy) {
    for (var x0ezy, $pqi, umd1t = ++lc978, vy65a = yl7f8o;;) {
        var pqi$g = du15tm['charAt'](umd1t);
        switch (pqi$g) {
            case '=':
                if (vy65a === y_hfjo4) x0ezy = du15tm['slice'](lc978, umd1t), vy65a = yojfh7_;else {
                    if (vy65a !== yn29k$c) throw new Error('attribute equal must after attrName');
                    vy65a = yojfh7_;
                }
                break;
            case '\x27':
            case '\x22':
                if (vy65a === yojfh7_ || vy65a === y_hfjo4) {
                    if (vy65a === y_hfjo4 && (x0vrzy['warning']('attribute value must after "="'), x0ezy = du15tm['slice'](lc978, umd1t)), lc978 = umd1t + 0x1, umd1t = du15tm['indexOf'](pqi$g, lc978), !(umd1t > 0x0)) throw new Error('attribute value no end \'' + pqi$g + '\' match');
                    $pqi = du15tm['slice'](lc978, umd1t)['replace'](/&#?\w+;/g, cl8s_), i$qg['add'](x0ezy, $pqi, lc978 - 0x1), vy65a = yg$k2in;
                } else {
                    if (vy65a != yhtd41) throw new Error('attribute value must after "="');
                    $pqi = du15tm['slice'](lc978, umd1t)['replace'](/&#?\w+;/g, cl8s_), i$qg['add'](x0ezy, $pqi, lc978), x0vrzy['warning']('attribute "' + x0ezy + '" missed start quot(' + pqi$g + ')!!'), lc978 = umd1t + 0x1, vy65a = yg$k2in;
                }
                break;
            case '/':
                switch (vy65a) {
                    case yl7f8o:
                        i$qg['setTagName'](du15tm['slice'](lc978, umd1t));
                    case yg$k2in:
                    case ya5m1ud:
                    case y_of8j7:
                        vy65a = y_of8j7, i$qg['closed'] = !0x0;
                    case yhtd41:
                    case y_hfjo4:
                    case yn29k$c:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return x0vrzy['error']('unexpected end of input'), vy65a == yl7f8o && i$qg['setTagName'](du15tm['slice'](lc978, umd1t)), umd1t;
            case '>':
                switch (vy65a) {
                    case yl7f8o:
                        i$qg['setTagName'](du15tm['slice'](lc978, umd1t));
                    case yg$k2in:
                    case ya5m1ud:
                    case y_of8j7:
                        break;
                    case yhtd41:
                    case y_hfjo4:
                        $pqi = du15tm['slice'](lc978, umd1t), '/' === $pqi['slice'](-0x1) && (i$qg['closed'] = !0x0, $pqi = $pqi['slice'](0x0, -0x1));
                    case yn29k$c:
                        vy65a === yn29k$c && ($pqi = x0ezy), vy65a == yhtd41 ? (x0vrzy['warning']('attribute "' + $pqi + '" missed quot(")!!'), i$qg['add'](x0ezy, $pqi['replace'](/&#?\w+;/g, cl8s_), lc978)) : ('http://www.w3.org/1999/xhtml' === a1u65m[''] && $pqi['match'](/^(?:disabled|checked|selected)$/i) || x0vrzy['warning']('attribute "' + $pqi + '" missed value!! "' + $pqi + '" instead!!'), i$qg['add']($pqi, $pqi, lc978));
                        break;
                    case yojfh7_:
                        throw new Error('attribute value missed!!');
                }
                return umd1t;
            case '\u0080':
                pqi$g = '\x20';
            default:
                if ('\x20' >= pqi$g) switch (vy65a) {
                    case yl7f8o:
                        i$qg['setTagName'](du15tm['slice'](lc978, umd1t)), vy65a = ya5m1ud;
                        break;
                    case y_hfjo4:
                        x0ezy = du15tm['slice'](lc978, umd1t), vy65a = yn29k$c;
                        break;
                    case yhtd41:
                        var $pqi = du15tm['slice'](lc978, umd1t)['replace'](/&#?\w+;/g, cl8s_);
                        x0vrzy['warning']('attribute "' + $pqi + '" missed quot(")!!'), i$qg['add'](x0ezy, $pqi, lc978);
                    case yg$k2in:
                        vy65a = ya5m1ud;
                } else switch (vy65a) {
                    case yn29k$c:
                        {
                            i$qg['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === a1u65m[''] && x0ezy['match'](/^(?:disabled|checked|selected)$/i) || x0vrzy['warning']('attribute "' + x0ezy + '" missed value!! "' + x0ezy + '" instead2!!'), i$qg['add'](x0ezy, x0ezy, lc978), lc978 = umd1t, vy65a = y_hfjo4;
                        break;
                    case yg$k2in:
                        x0vrzy['warning']('attribute space is required"' + x0ezy + '\x22!!');
                    case ya5m1ud:
                        vy65a = y_hfjo4, lc978 = umd1t;
                        break;
                    case yojfh7_:
                        vy65a = yhtd41, lc978 = umd1t;
                        break;
                    case y_of8j7:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        umd1t++;
    }
}
function ynkig2$(wudt41, w4dtjh, j_f7oh) {
    for (var da5 = wudt41['tagName'], _f7ol8 = null, adu5 = wudt41['length']; adu5--;) {
        var sl87 = wudt41[adu5],
            n2g$9k = sl87['qName'],
            utwm1 = sl87['value'],
            nc$92 = n2g$9k['indexOf'](':');
        if (nc$92 > 0x0) var o4wfh = sl87['prefix'] = n2g$9k['slice'](0x0, nc$92),
            a6m5v = n2g$9k['slice'](nc$92 + 0x1),
            _78lcs = 'xmlns' === o4wfh && a6m5v;else a6m5v = n2g$9k, o4wfh = null, _78lcs = 'xmlns' === n2g$9k && '';
        sl87['localName'] = a6m5v, _78lcs !== !0x1 && (null == _f7ol8 && (_f7ol8 = {}, ycks9n2(j_f7oh, j_f7oh = {})), j_f7oh[_78lcs] = _f7ol8[_78lcs] = utwm1, sl87['uri'] = 'http://www.w3.org/2000/xmlns/', w4dtjh['startPrefixMapping'](_78lcs, utwm1));
    }
    for (var adu5 = wudt41['length']; adu5--;) {
        sl87 = wudt41[adu5];
        var o4wfh = sl87['prefix'];
        o4wfh && ('xml' === o4wfh && (sl87['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== o4wfh && (sl87['uri'] = j_f7oh[o4wfh || '']));
    }
    var nc$92 = da5['indexOf'](':');
    nc$92 > 0x0 ? (o4wfh = wudt41['prefix'] = da5['slice'](0x0, nc$92), a6m5v = wudt41['localName'] = da5['slice'](nc$92 + 0x1)) : (o4wfh = null, a6m5v = wudt41['localName'] = da5);
    var uwt1m = wudt41['uri'] = j_f7oh[o4wfh || ''];
    if (w4dtjh['startElement'](uwt1m, a6m5v, da5, wudt41), !wudt41['closed']) return wudt41['currentNSMap'] = j_f7oh, wudt41['localNSMap'] = _f7ol8, !0x0;
    if (w4dtjh['endElement'](uwt1m, a6m5v, da5), _f7ol8) {
        for (o4wfh in _f7ol8) w4dtjh['endPrefixMapping'](o4wfh);
    }
}
function yhfwj4o(kcsn, mwtu, how, $gpn, n2ks9) {
    if (/^(?:script|textarea)$/i['test'](how)) {
        var d5t1um = kcsn['indexOf']('</' + how + '>', mwtu),
            c7l_ = kcsn['substring'](mwtu + 0x1, d5t1um);
        if (/[&<]/['test'](c7l_)) return (/^script$/i['test'](how) ? (n2ks9['characters'](c7l_, 0x0, c7l_['length']), d5t1um) : (c7l_ = c7l_['replace'](/&#?\w+;/g, $gpn), n2ks9['characters'](c7l_, 0x0, c7l_['length']), d5t1um)
        );
    }
    return mwtu + 0x1;
}
function yl789c(r0xeyz, c7s8l, _j, ofhj4) {
    var jwd4t = ofhj4[_j];
    return null == jwd4t && (jwd4t = r0xeyz['lastIndexOf']('</' + _j + '>'), c7s8l > jwd4t && (jwd4t = r0xeyz['lastIndexOf']('</' + _j)), ofhj4[_j] = jwd4t), c7s8l > jwd4t;
}
function ycks9n2(xvy0r, t1hw4d) {
    for (var y36v0 in xvy0r) t1hw4d[y36v0] = xvy0r[y36v0];
}
function ya6u51m(y0vr3, k2n$c9, vz30ry, lsc92) {
    var jf7o8 = y0vr3['charAt'](k2n$c9 + 0x2);
    switch (jf7o8) {
        case '-':
            if ('-' === y0vr3['charAt'](k2n$c9 + 0x3)) {
                var r603v = y0vr3['indexOf']('-->', k2n$c9 + 0x4);
                return r603v > k2n$c9 ? (vz30ry['comment'](y0vr3, k2n$c9 + 0x4, r603v - k2n$c9 - 0x4), r603v + 0x3) : (lsc92['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == y0vr3['substr'](k2n$c9 + 0x3, 0x6)) {
                var r603v = y0vr3['indexOf'](']]>', k2n$c9 + 0x9);
                return vz30ry['startCDATA'](), vz30ry['characters'](y0vr3, k2n$c9 + 0x9, r603v - k2n$c9 - 0x9), vz30ry['endCDATA'](), r603v + 0x3;
            }
            var w4th1 = ym6v(y0vr3, k2n$c9),
                g$nipq = w4th1['length'];
            if (g$nipq > 0x1 && /!doctype/i['test'](w4th1[0x0][0x0])) {
                var tu1 = w4th1[0x1][0x0],
                    kg2$9 = g$nipq > 0x3 && /^public$/i['test'](w4th1[0x2][0x0]) && w4th1[0x3][0x0],
                    m6u5a1 = g$nipq > 0x4 && w4th1[0x4][0x0],
                    wtu = w4th1[g$nipq - 0x1];
                return vz30ry['startDTD'](tu1, kg2$9 && kg2$9['replace'](/^(['"])(.*?)\1$/, '$2'), m6u5a1 && m6u5a1['replace'](/^(['"])(.*?)\1$/, '$2')), vz30ry['endDTD'](), wtu['index'] + wtu[0x0]['length'];
            }
    }
    return -0x1;
}
function yqni2$g(fs87_, z0erxy, a3vm56) {
    var wh4t1 = fs87_['indexOf']('?>', z0erxy);
    if (wh4t1) {
        var a6um1 = fs87_['substring'](z0erxy, wh4t1)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (a6um1) {
            {
                a6um1[0x0]['length'];
            }
            return a3vm56['processingInstruction'](a6um1[0x1], a6um1[0x2]), wh4t1 + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function yr036() {}
function yl97cs(u536a, y0ezr) {
    return u536a['__proto__'] = y0ezr, u536a;
}
function ym6v(csk98l, fo4_hj) {
    var y0xzrv,
        a3v5m6 = [],
        nqi$gp = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (nqi$gp['lastIndex'] = fo4_hj, nqi$gp['exec'](csk98l); y0xzrv = nqi$gp['exec'](csk98l);) if (a3v5m6['push'](y0xzrv), y0xzrv[0x1]) return a3v5m6;
}
var ymwdut1 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    ynigk$ = new RegExp('[\\-\\.0-9' + ymwdut1['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    y_ofj4h = new RegExp('^' + ymwdut1['source'] + ynigk$['source'] + '*(?::' + ymwdut1['source'] + ynigk$['source'] + '*)?$'),
    yl7f8o = 0x0,
    y_hfjo4 = 0x1,
    yn29k$c = 0x2,
    yojfh7_ = 0x3,
    yhtd41 = 0x4,
    yg$k2in = 0x5,
    ya5m1ud = 0x6,
    y_of8j7 = 0x7;
yv0z3ry['prototype'] = {
    'parse': function (wutdm, o7fl_, $ki2ng) {
        var _hoj7 = this['domBuilder'];
        _hoj7['startDocument'](), ycks9n2(o7fl_, o7fl_ = {}), y$gqn2i(wutdm, o7fl_, $ki2ng, _hoj7, this['errorHandler']), _hoj7['endDocument']();
    }
}, yr036['prototype'] = {
    'setTagName': function (yzer) {
        if (!y_ofj4h['test'](yzer)) throw new Error('invalid tagName:' + yzer);
        this['tagName'] = yzer;
    },
    'add': function (dtjw, $kign, y0a36v) {
        if (!y_ofj4h['test'](dtjw)) throw new Error('invalid attribute:' + dtjw);
        this[this['length']++] = {
            'qName': dtjw,
            'value': $kign,
            'offset': y0a36v
        };
    },
    'length': 0x0,
    'getLocalName': function ($2gqi) {
        return this[$2gqi]['localName'];
    },
    'getLocator': function (ya536v) {
        return this[ya536v]['locator'];
    },
    'getQName': function (_ol78f) {
        return this[_ol78f]['qName'];
    },
    'getURI': function (wj4oth) {
        return this[wj4oth]['uri'];
    },
    'getValue': function (d4tjw) {
        return this[d4tjw]['value'];
    }
}, yl97cs({}, yl97cs['prototype']) instanceof yl97cs || (yl97cs = function (r0yvz3, ng$qp) {
    function n$kc() {}
    n$kc['prototype'] = ng$qp, n$kc = new n$kc();
    for (ng$qp in r0yvz3) n$kc[ng$qp] = r0yvz3[ng$qp];
    return n$kc;
}), exports['XMLReader'] = yv0z3ry;