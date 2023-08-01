var _j = wx.n$;
function _qfpwi2r() {}
function _qtins(q2wfi, f26rp0, kj9ga, om30_, kcau) {
    function j5xyhe(qrsfwi) {
        if (qrsfwi > 0xffff) {
            qrsfwi -= 0x10000;
            var u9gka = 0xd800 + (qrsfwi >> 0xa),
                p0632f = 0xdc00 + (0x3ff & qrsfwi);
            return String['fromCharCode'](u9gka, p0632f);
        }
        return String['fromCharCode'](qrsfwi);
    }
    function tbisw(guav9) {
        var b1ntl8 = guav9['slice'](0x1, -0x1);
        return b1ntl8 in kj9ga ? kj9ga[b1ntl8] : '#' === b1ntl8['charAt'](0x0) ? j5xyhe(parseInt(b1ntl8['substr'](0x1)['replace']('x', '0x'))) : (kcau['error']('entity not found:' + guav9), guav9);
    }
    function sqnt1b(om_c7v) {
        if (om_c7v > jghky) {
            var tnlb = q2wfi['substring'](jghky, om_c7v)['replace'](/&#?\w+;/g, tbisw);
            ouc9mv && ndt18l(jghky), om30_['characters'](tnlb, 0x0, om_c7v - jghky), jghky = om_c7v;
        }
    }
    function ndt18l(mv_7, mvc) {
        for (; mv_7 >= risqf && (mvc = ukag9['exec'](q2wfi));) p0r62 = mvc['index'], risqf = p0r62 + mvc[0x0]['length'], ouc9mv['lineNumber']++;
        ouc9mv['columnNumber'] = mv_7 - p0r62 + 0x1;
    }
    for (var p0r62 = 0x0, risqf = 0x0, ukag9 = /.*(?:\r\n?|\n)|.*$/g, ouc9mv = om30_['locator'], ehz5$ = [{ 'currentNSMap': f26rp0 }], gj5kh = {}, jghky = 0x0;;) {
        try {
            var ak9guv = q2wfi['indexOf']('<', jghky);
            if (0x0 > ak9guv) {
                if (!q2wfi['substr'](jghky)['match'](/^\s*$/)) {
                    var cv_m9o = om30_['doc'],
                        hkj5gy = cv_m9o['createTextNode'](q2wfi['substr'](jghky));
                    cv_m9o['appendChild'](hkj5gy), om30_['currentElement'] = hkj5gy;
                }
                return;
            }
            switch (ak9guv > jghky && sqnt1b(ak9guv), q2wfi['charAt'](ak9guv + 0x1)) {
                case '/':
                    var mv_o7 = q2wfi['indexOf']('>', ak9guv + 0x3),
                        qtins = q2wfi['substring'](ak9guv + 0x2, mv_o7),
                        khygaj = ehz5$['pop']();
                    0x0 > mv_o7 ? (qtins = q2wfi['substring'](ak9guv + 0x2)['replace'](/[\s<].*/, ''), kcau['error']('end tag name: ' + qtins + ' is not complete:' + khygaj['tagName']), mv_o7 = ak9guv + 0x1 + qtins['length']) : qtins['match'](/\s</) && (qtins = qtins['replace'](/[\s<].*/, ''), kcau['error']('end tag name: ' + qtins + ' maybe not complete'), mv_o7 = ak9guv + 0x1 + qtins['length']);
                    var sqrf = khygaj['localNSMap'],
                        gejh = khygaj['tagName'] == qtins,
                        kgj = gejh || khygaj['tagName'] && khygaj['tagName']['toLowerCase']() == qtins['toLowerCase']();
                    if (kgj) {
                        if (om30_['endElement'](khygaj['uri'], khygaj['localName'], qtins), sqrf) {
                            for (var $x5z in sqrf) om30_['endPrefixMapping']($x5z);
                        }
                        gejh || kcau['fatalError']('end tag name: ' + qtins + ' is not match the current start tagName:' + khygaj['tagName']);
                    } else ehz5$['push'](khygaj);
                    mv_o7++;
                    break;
                case '?':
                    ouc9mv && ndt18l(ak9guv), mv_o7 = _qrwip2(q2wfi, ak9guv, om30_);
                    break;
                case '!':
                    ouc9mv && ndt18l(ak9guv), mv_o7 = _qvmau(q2wfi, ak9guv, om30_, kcau);
                    break;
                default:
                    ouc9mv && ndt18l(ak9guv);
                    var fwq = new _qiswrb(),
                        sqibw = ehz5$[ehz5$['length'] - 0x1]['currentNSMap'],
                        mv_o7 = _qnbsitq(q2wfi, ak9guv, fwq, sqibw, tbisw, kcau),
                        qswbti = fwq['length'];
                    if (!fwq['closed'] && _qnbtl(q2wfi, mv_o7, fwq['tagName'], gj5kh) && (fwq['closed'] = !0x0, kj9ga['nbsp'] || kcau['warning']('unclosed xml attribute')), ouc9mv && qswbti) {
                        for (var isrqwf = _qeh5z(ouc9mv, {}), akguv = 0x0; qswbti > akguv; akguv++) {
                            var p_307 = fwq[akguv];
                            ndt18l(p_307['offset']), p_307['locator'] = _qeh5z(ouc9mv, {});
                        }
                        om30_['locator'] = isrqwf, _qxe$z5h(fwq, om30_, sqibw) && ehz5$['push'](fwq), om30_['locator'] = ouc9mv;
                    } else _qxe$z5h(fwq, om30_, sqibw) && ehz5$['push'](fwq);
                    'http://www.w3.org/1999/xhtml' !== fwq['uri'] || fwq['closed'] ? mv_o7++ : mv_o7 = _qjuag(q2wfi, mv_o7, fwq['tagName'], tbisw, om30_);
            }
        } catch (o630_) {
            kcau['error']('element parse error: ' + o630_), mv_o7 = -0x1;
        }
        mv_o7 > jghky ? jghky = mv_o7 : sqnt1b(Math['max'](ak9guv, jghky) + 0x1);
    }
}
function _qeh5z(kg9uav, om9c_v) {
    return om9c_v['lineNumber'] = kg9uav['lineNumber'], om9c_v['columnNumber'] = kg9uav['columnNumber'], om9c_v;
}
function _qnbsitq(cmvuo9, z$5e4x, p703_, $ze5h, hgjyka, iqfrw) {
    for (var fp2wi, sq1nb, xe5zyh = ++z$5e4x, akcv9u = _qgkhyj;;) {
        var iq2wf = cmvuo9['charAt'](xe5zyh);
        switch (iq2wf) {
            case '=':
                if (akcv9u === _qo7m30_) fp2wi = cmvuo9['slice'](z$5e4x, xe5zyh), akcv9u = _qhyx5je;else {
                    if (akcv9u !== _qm3c_o7) throw new Error('attribute equal must after attrName');
                    akcv9u = _qhyx5je;
                }
                break;
            case '\x27':
            case '\x22':
                if (akcv9u === _qhyx5je || akcv9u === _qo7m30_) {
                    if (akcv9u === _qo7m30_ && (iqfrw['warning']('attribute value must after "="'), fp2wi = cmvuo9['slice'](z$5e4x, xe5zyh)), z$5e4x = xe5zyh + 0x1, xe5zyh = cmvuo9['indexOf'](iq2wf, z$5e4x), !(xe5zyh > 0x0)) throw new Error('attribute value no end \'' + iq2wf + '\' match');
                    sq1nb = cmvuo9['slice'](z$5e4x, xe5zyh)['replace'](/&#?\w+;/g, hgjyka), p703_['add'](fp2wi, sq1nb, z$5e4x - 0x1), akcv9u = _qj5ehyg;
                } else {
                    if (akcv9u != _qmc9vo) throw new Error('attribute value must after "="');
                    sq1nb = cmvuo9['slice'](z$5e4x, xe5zyh)['replace'](/&#?\w+;/g, hgjyka), p703_['add'](fp2wi, sq1nb, z$5e4x), iqfrw['warning']('attribute "' + fp2wi + '" missed start quot(' + iq2wf + ')!!'), z$5e4x = xe5zyh + 0x1, akcv9u = _qj5ehyg;
                }
                break;
            case '/':
                switch (akcv9u) {
                    case _qgkhyj:
                        p703_['setTagName'](cmvuo9['slice'](z$5e4x, xe5zyh));
                    case _qj5ehyg:
                    case _qhgaykj:
                    case _qsqwbt:
                        akcv9u = _qsqwbt, p703_['closed'] = !0x0;
                    case _qmc9vo:
                    case _qo7m30_:
                    case _qm3c_o7:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return iqfrw['error']('unexpected end of input'), akcv9u == _qgkhyj && p703_['setTagName'](cmvuo9['slice'](z$5e4x, xe5zyh)), xe5zyh;
            case '>':
                switch (akcv9u) {
                    case _qgkhyj:
                        p703_['setTagName'](cmvuo9['slice'](z$5e4x, xe5zyh));
                    case _qj5ehyg:
                    case _qhgaykj:
                    case _qsqwbt:
                        break;
                    case _qmc9vo:
                    case _qo7m30_:
                        sq1nb = cmvuo9['slice'](z$5e4x, xe5zyh), '/' === sq1nb['slice'](-0x1) && (p703_['closed'] = !0x0, sq1nb = sq1nb['slice'](0x0, -0x1));
                    case _qm3c_o7:
                        akcv9u === _qm3c_o7 && (sq1nb = fp2wi), akcv9u == _qmc9vo ? (iqfrw['warning']('attribute "' + sq1nb + '" missed quot(")!!'), p703_['add'](fp2wi, sq1nb['replace'](/&#?\w+;/g, hgjyka), z$5e4x)) : ('http://www.w3.org/1999/xhtml' === $ze5h[''] && sq1nb['match'](/^(?:disabled|checked|selected)$/i) || iqfrw['warning']('attribute "' + sq1nb + '" missed value!! "' + sq1nb + '" instead!!'), p703_['add'](sq1nb, sq1nb, z$5e4x));
                        break;
                    case _qhyx5je:
                        throw new Error('attribute value missed!!');
                }
                return xe5zyh;
            case '\u0080':
                iq2wf = '\x20';
            default:
                if ('\x20' >= iq2wf) switch (akcv9u) {
                    case _qgkhyj:
                        p703_['setTagName'](cmvuo9['slice'](z$5e4x, xe5zyh)), akcv9u = _qhgaykj;
                        break;
                    case _qo7m30_:
                        fp2wi = cmvuo9['slice'](z$5e4x, xe5zyh), akcv9u = _qm3c_o7;
                        break;
                    case _qmc9vo:
                        var sq1nb = cmvuo9['slice'](z$5e4x, xe5zyh)['replace'](/&#?\w+;/g, hgjyka);
                        iqfrw['warning']('attribute "' + sq1nb + '" missed quot(")!!'), p703_['add'](fp2wi, sq1nb, z$5e4x);
                    case _qj5ehyg:
                        akcv9u = _qhgaykj;
                } else switch (akcv9u) {
                    case _qm3c_o7:
                        {
                            p703_['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === $ze5h[''] && fp2wi['match'](/^(?:disabled|checked|selected)$/i) || iqfrw['warning']('attribute "' + fp2wi + '" missed value!! "' + fp2wi + '" instead2!!'), p703_['add'](fp2wi, fp2wi, z$5e4x), z$5e4x = xe5zyh, akcv9u = _qo7m30_;
                        break;
                    case _qj5ehyg:
                        iqfrw['warning']('attribute space is required"' + fp2wi + '\x22!!');
                    case _qhgaykj:
                        akcv9u = _qo7m30_, z$5e4x = xe5zyh;
                        break;
                    case _qhyx5je:
                        akcv9u = _qmc9vo, z$5e4x = xe5zyh;
                        break;
                    case _qsqwbt:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        xe5zyh++;
    }
}
function _qxe$z5h(z5e$xh, fiwqr2, yuajkg) {
    for (var gjah = z5e$xh['tagName'], om073_ = null, zhx5$ = z5e$xh['length']; zhx5$--;) {
        var xe$45 = z5e$xh[zhx5$],
            mac = xe$45['qName'],
            lbn81t = xe$45['value'],
            tnsbq = mac['indexOf'](':');
        if (tnsbq > 0x0) var t8l1n = xe$45['prefix'] = mac['slice'](0x0, tnsbq),
            p07_3 = mac['slice'](tnsbq + 0x1),
            gu9kav = 'xmlns' === t8l1n && p07_3;else p07_3 = mac, t8l1n = null, gu9kav = 'xmlns' === mac && '';
        xe$45['localName'] = p07_3, gu9kav !== !0x1 && (null == om073_ && (om073_ = {}, _qhyag(yuajkg, yuajkg = {})), yuajkg[gu9kav] = om073_[gu9kav] = lbn81t, xe$45['uri'] = 'http://www.w3.org/2000/xmlns/', fiwqr2['startPrefixMapping'](gu9kav, lbn81t));
    }
    for (var zhx5$ = z5e$xh['length']; zhx5$--;) {
        xe$45 = z5e$xh[zhx5$];
        var t8l1n = xe$45['prefix'];
        t8l1n && ('xml' === t8l1n && (xe$45['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== t8l1n && (xe$45['uri'] = yuajkg[t8l1n || '']));
    }
    var tnsbq = gjah['indexOf'](':');
    tnsbq > 0x0 ? (t8l1n = z5e$xh['prefix'] = gjah['slice'](0x0, tnsbq), p07_3 = z5e$xh['localName'] = gjah['slice'](tnsbq + 0x1)) : (t8l1n = null, p07_3 = z5e$xh['localName'] = gjah);
    var gkay = z5e$xh['uri'] = yuajkg[t8l1n || ''];
    if (fiwqr2['startElement'](gkay, p07_3, gjah, z5e$xh), !z5e$xh['closed']) return z5e$xh['currentNSMap'] = yuajkg, z5e$xh['localNSMap'] = om073_, !0x0;
    if (fiwqr2['endElement'](gkay, p07_3, gjah), om073_) {
        for (t8l1n in om073_) fiwqr2['endPrefixMapping'](t8l1n);
    }
}
function _qjuag(x5yeh, v_co7, _mc37o, gjuaky, p7630) {
    if (/^(?:script|textarea)$/i['test'](_mc37o)) {
        var kvaug = x5yeh['indexOf']('</' + _mc37o + '>', v_co7),
            x5he$ = x5yeh['substring'](v_co7 + 0x1, kvaug);
        if (/[&<]/['test'](x5he$)) return (/^script$/i['test'](_mc37o) ? (p7630['characters'](x5he$, 0x0, x5he$['length']), kvaug) : (x5he$ = x5he$['replace'](/&#?\w+;/g, gjuaky), p7630['characters'](x5he$, 0x0, x5he$['length']), kvaug)
        );
    }
    return v_co7 + 0x1;
}
function _qnbtl(c_vo, r6f2p0, $ex4z, bt81) {
    var x$zeh5 = bt81[$ex4z];
    return null == x$zeh5 && (x$zeh5 = c_vo['lastIndexOf']('</' + $ex4z + '>'), r6f2p0 > x$zeh5 && (x$zeh5 = c_vo['lastIndexOf']('</' + $ex4z)), bt81[$ex4z] = x$zeh5), r6f2p0 > x$zeh5;
}
function _qhyag(kauygj, qbts) {
    for (var sqtn in kauygj) qbts[sqtn] = kauygj[sqtn];
}
function _qvmau(xyhze, r2wpf, vm_o7c, xyeh) {
    var vu9oc = xyhze['charAt'](r2wpf + 0x2);
    switch (vu9oc) {
        case '-':
            if ('-' === xyhze['charAt'](r2wpf + 0x3)) {
                var c_9om = xyhze['indexOf']('-->', r2wpf + 0x4);
                return c_9om > r2wpf ? (vm_o7c['comment'](xyhze, r2wpf + 0x4, c_9om - r2wpf - 0x4), c_9om + 0x3) : (xyeh['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == xyhze['substr'](r2wpf + 0x3, 0x6)) {
                var c_9om = xyhze['indexOf'](']]>', r2wpf + 0x9);
                return vm_o7c['startCDATA'](), vm_o7c['characters'](xyhze, r2wpf + 0x9, c_9om - r2wpf - 0x9), vm_o7c['endCDATA'](), c_9om + 0x3;
            }
            var o670 = _qgk9jua(xyhze, r2wpf),
                sbnt1 = o670['length'];
            if (sbnt1 > 0x1 && /!doctype/i['test'](o670[0x0][0x0])) {
                var mv9c_ = o670[0x1][0x0],
                    ze45$ = sbnt1 > 0x3 && /^public$/i['test'](o670[0x2][0x0]) && o670[0x3][0x0],
                    yhx5ej = sbnt1 > 0x4 && o670[0x4][0x0],
                    kyj5gh = o670[sbnt1 - 0x1];
                return vm_o7c['startDTD'](mv9c_, ze45$ && ze45$['replace'](/^(['"])(.*?)\1$/, '$2'), yhx5ej && yhx5ej['replace'](/^(['"])(.*?)\1$/, '$2')), vm_o7c['endDTD'](), kyj5gh['index'] + kyj5gh[0x0]['length'];
            }
    }
    return -0x1;
}
function _qrwip2(fpirw2, wsrbq, yk5gjh) {
    var kg5hj = fpirw2['indexOf']('?>', wsrbq);
    if (kg5hj) {
        var _omv7c = fpirw2['substring'](wsrbq, kg5hj)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (_omv7c) {
            {
                _omv7c[0x0]['length'];
            }
            return yk5gjh['processingInstruction'](_omv7c[0x1], _omv7c[0x2]), kg5hj + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function _qiswrb() {}
function _qntiqsb(_0p367, _vmc7o) {
    return _0p367['__proto__'] = _vmc7o, _0p367;
}
function _qgk9jua(fwr26, sbt18n) {
    var ey5jhx,
        agjkhy = [],
        hajky = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (hajky['lastIndex'] = sbt18n, hajky['exec'](fwr26); ey5jhx = hajky['exec'](fwr26);) if (agjkhy['push'](ey5jhx), ey5jhx[0x1]) return agjkhy;
}
var _qkg9u = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    _qk9acvu = new RegExp('[\\-\\.0-9' + _qkg9u['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    _qjkgayh = new RegExp('^' + _qkg9u['source'] + _qk9acvu['source'] + '*(?::' + _qkg9u['source'] + _qk9acvu['source'] + '*)?$'),
    _qgkhyj = 0x0,
    _qo7m30_ = 0x1,
    _qm3c_o7 = 0x2,
    _qhyx5je = 0x3,
    _qmc9vo = 0x4,
    _qj5ehyg = 0x5,
    _qhgaykj = 0x6,
    _qsqwbt = 0x7;
_qfpwi2r['prototype'] = {
    'parse': function (jh5xy, vmc9o, f0r2p) {
        var u9vgak = this['domBuilder'];
        u9vgak['startDocument'](), _qhyag(vmc9o, vmc9o = {}), _qtins(jh5xy, vmc9o, f0r2p, u9vgak, this['errorHandler']), u9vgak['endDocument']();
    }
}, _qiswrb['prototype'] = {
    'setTagName': function (c_mvo7) {
        if (!_qjkgayh['test'](c_mvo7)) throw new Error('invalid tagName:' + c_mvo7);
        this['tagName'] = c_mvo7;
    },
    'add': function (ri2fp, t1lnd8, mc9avu) {
        if (!_qjkgayh['test'](ri2fp)) throw new Error('invalid attribute:' + ri2fp);
        this[this['length']++] = {
            'qName': ri2fp,
            'value': t1lnd8,
            'offset': mc9avu
        };
    },
    'length': 0x0,
    'getLocalName': function (jh5kgy) {
        return this[jh5kgy]['localName'];
    },
    'getLocator': function (jyx5h) {
        return this[jyx5h]['locator'];
    },
    'getQName': function (mv9oc) {
        return this[mv9oc]['qName'];
    },
    'getURI': function (friqw2) {
        return this[friqw2]['uri'];
    },
    'getValue': function (tsnbq) {
        return this[tsnbq]['value'];
    }
}, _qntiqsb({}, _qntiqsb['prototype']) instanceof _qntiqsb || (_qntiqsb = function (c_9mo, ts8bn) {
    function ints() {}
    ints['prototype'] = ts8bn, ints = new ints();
    for (ts8bn in c_9mo) ints[ts8bn] = c_9mo[ts8bn];
    return ints;
}), exports['XMLReader'] = _qfpwi2r;