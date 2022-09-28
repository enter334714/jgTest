var B = wx.$z;
function zyv2$l() {}
function zrj_age(qahne, isub, aq_eng, usor7, _aqgje) {
    function maqn0(jog_r) {
        if (jog_r > 0xffff) {
            jog_r -= 0x10000;
            var z639fd = 0xd800 + (jog_r >> 0xa),
                $25yt = 0xdc00 + (0x3ff & jog_r);
            return String['fromCharCode'](z639fd, $25yt);
        }
        return String['fromCharCode'](jog_r);
    }
    function geo_(ui7ob) {
        var e_rgj = ui7ob['slice'](0x1, -0x1);
        return e_rgj in aq_eng ? aq_eng[e_rgj] : '#' === e_rgj['charAt'](0x0) ? maqn0(parseInt(e_rgj['substr'](0x1)['replace']('x', '0x'))) : (_aqgje['error']('entity not found:' + ui7ob), ui7ob);
    }
    function u7ors(busi7o) {
        if (busi7o > wzfmh) {
            var s5ubi = qahne['substring'](wzfmh, busi7o)['replace'](/&#?\w+;/g, geo_);
            nq0_ah && mnaq0h(wzfmh), usor7['characters'](s5ubi, 0x0, busi7o - wzfmh), wzfmh = busi7o;
        }
    }
    function mnaq0h(_qang, sbui57) {
        for (; _qang >= p4861x && (sbui57 = bis7u5['exec'](qahne));) wm90zf = sbui57['index'], p4861x = wm90zf + sbui57[0x0]['length'], nq0_ah['lineNumber']++;
        nq0_ah['columnNumber'] = _qang - wm90zf + 0x1;
    }
    for (var wm90zf = 0x0, p4861x = 0x0, bis7u5 = /.*(?:\r\n?|\n)|.*$/g, nq0_ah = usor7['locator'], znh0wm = [{ 'currentNSMap': isub }], rs7u = {}, wzfmh = 0x0;;) {
        try {
            var hmw0nq = qahne['indexOf']('<', wzfmh);
            if (0x0 > hmw0nq) {
                if (!qahne['substr'](wzfmh)['match'](/^\s*$/)) {
                    var wq0mhn = usor7['doc'],
                        d136x8 = wq0mhn['createTextNode'](qahne['substr'](wzfmh));
                    wq0mhn['appendChild'](d136x8), usor7['currentElement'] = d136x8;
                }
                return;
            }
            switch (hmw0nq > wzfmh && u7ors(hmw0nq), qahne['charAt'](hmw0nq + 0x1)) {
                case '/':
                    var wfm9zd = qahne['indexOf']('>', hmw0nq + 0x3),
                        aneq_ = qahne['substring'](hmw0nq + 0x2, wfm9zd),
                        hm0wfz = znh0wm['pop']();
                    0x0 > wfm9zd ? (aneq_ = qahne['substring'](hmw0nq + 0x2)['replace'](/[\s<].*/, ''), _aqgje['error']('end tag name: ' + aneq_ + ' is not complete:' + hm0wfz['tagName']), wfm9zd = hmw0nq + 0x1 + aneq_['length']) : aneq_['match'](/\s</) && (aneq_ = aneq_['replace'](/[\s<].*/, ''), _aqgje['error']('end tag name: ' + aneq_ + ' maybe not complete'), wfm9zd = hmw0nq + 0x1 + aneq_['length']);
                    var dz9f63 = hm0wfz['localNSMap'],
                        haqm0n = hm0wfz['tagName'] == aneq_,
                        oer = haqm0n || hm0wfz['tagName'] && hm0wfz['tagName']['toLowerCase']() == aneq_['toLowerCase']();
                    if (oer) {
                        if (usor7['endElement'](hm0wfz['uri'], hm0wfz['localName'], aneq_), dz9f63) {
                            for (var b7u5 in dz9f63) usor7['endPrefixMapping'](b7u5);
                        }
                        haqm0n || _aqgje['fatalError']('end tag name: ' + aneq_ + ' is not match the current start tagName:' + hm0wfz['tagName']);
                    } else znh0wm['push'](hm0wfz);
                    wfm9zd++;
                    break;
                case '?':
                    nq0_ah && mnaq0h(hmw0nq), wfm9zd = zlyt2$5(qahne, hmw0nq, usor7);
                    break;
                case '!':
                    nq0_ah && mnaq0h(hmw0nq), wfm9zd = zogujsr(qahne, hmw0nq, usor7, _aqgje);
                    break;
                default:
                    nq0_ah && mnaq0h(hmw0nq);
                    var w0qhmn = new zusjr(),
                        sorui7 = znh0wm[znh0wm['length'] - 0x1]['currentNSMap'],
                        wfm9zd = zy7bt25(qahne, hmw0nq, w0qhmn, sorui7, geo_, _aqgje),
                        ogjusr = w0qhmn['length'];
                    if (!w0qhmn['closed'] && zq_aneg(qahne, wfm9zd, w0qhmn['tagName'], rs7u) && (w0qhmn['closed'] = !0x0, aq_eng['nbsp'] || _aqgje['warning']('unclosed xml attribute')), nq0_ah && ogjusr) {
                        for (var x68d31 = zty5$2l(nq0_ah, {}), nzm0h = 0x0; ogjusr > nzm0h; nzm0h++) {
                            var fd9wm = w0qhmn[nzm0h];
                            mnaq0h(fd9wm['offset']), fd9wm['locator'] = zty5$2l(nq0_ah, {});
                        }
                        usor7['locator'] = x68d31, zougrsj(w0qhmn, usor7, sorui7) && znh0wm['push'](w0qhmn), usor7['locator'] = nq0_ah;
                    } else zougrsj(w0qhmn, usor7, sorui7) && znh0wm['push'](w0qhmn);
                    'http://www.w3.org/1999/xhtml' !== w0qhmn['uri'] || w0qhmn['closed'] ? wfm9zd++ : wfm9zd = zh0wfz(qahne, wfm9zd, w0qhmn['tagName'], geo_, usor7);
            }
        } catch (d189) {
            _aqgje['error']('element parse error: ' + d189), wfm9zd = -0x1;
        }
        wfm9zd > wzfmh ? wzfmh = wfm9zd : u7ors(Math['max'](hmw0nq, wzfmh) + 0x1);
    }
}
function zty5$2l(tl25, n_0q) {
    return n_0q['lineNumber'] = tl25['lineNumber'], n_0q['columnNumber'] = tl25['columnNumber'], n_0q;
}
function zy7bt25(b527, qeh_, vtl$y, hzfwm0, ujsori, x8p61) {
    for (var m0zwn, soegjr, aeq_gn = ++qeh_, fzw9md = zb7soui;;) {
        var gres = b527['charAt'](aeq_gn);
        switch (gres) {
            case '=':
                if (fzw9md === zboiu7) m0zwn = b527['slice'](qeh_, aeq_gn), fzw9md = zi57bsu;else {
                    if (fzw9md !== zwqmnh0) throw new Error('attribute equal must after attrName');
                    fzw9md = zi57bsu;
                }
                break;
            case '\x27':
            case '\x22':
                if (fzw9md === zi57bsu || fzw9md === zboiu7) {
                    if (fzw9md === zboiu7 && (x8p61['warning']('attribute value must after "="'), m0zwn = b527['slice'](qeh_, aeq_gn)), qeh_ = aeq_gn + 0x1, aeq_gn = b527['indexOf'](gres, qeh_), !(aeq_gn > 0x0)) throw new Error('attribute value no end \'' + gres + '\' match');
                    soegjr = b527['slice'](qeh_, aeq_gn)['replace'](/&#?\w+;/g, ujsori), vtl$y['add'](m0zwn, soegjr, qeh_ - 0x1), fzw9md = zq_egn;
                } else {
                    if (fzw9md != zrogsj) throw new Error('attribute value must after "="');
                    soegjr = b527['slice'](qeh_, aeq_gn)['replace'](/&#?\w+;/g, ujsori), vtl$y['add'](m0zwn, soegjr, qeh_), x8p61['warning']('attribute "' + m0zwn + '" missed start quot(' + gres + ')!!'), qeh_ = aeq_gn + 0x1, fzw9md = zq_egn;
                }
                break;
            case '/':
                switch (fzw9md) {
                    case zb7soui:
                        vtl$y['setTagName'](b527['slice'](qeh_, aeq_gn));
                    case zq_egn:
                    case zsgjru:
                    case zt2$vyl:
                        fzw9md = zt2$vyl, vtl$y['closed'] = !0x0;
                    case zrogsj:
                    case zboiu7:
                    case zwqmnh0:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return x8p61['error']('unexpected end of input'), fzw9md == zb7soui && vtl$y['setTagName'](b527['slice'](qeh_, aeq_gn)), aeq_gn;
            case '>':
                switch (fzw9md) {
                    case zb7soui:
                        vtl$y['setTagName'](b527['slice'](qeh_, aeq_gn));
                    case zq_egn:
                    case zsgjru:
                    case zt2$vyl:
                        break;
                    case zrogsj:
                    case zboiu7:
                        soegjr = b527['slice'](qeh_, aeq_gn), '/' === soegjr['slice'](-0x1) && (vtl$y['closed'] = !0x0, soegjr = soegjr['slice'](0x0, -0x1));
                    case zwqmnh0:
                        fzw9md === zwqmnh0 && (soegjr = m0zwn), fzw9md == zrogsj ? (x8p61['warning']('attribute "' + soegjr + '" missed quot(")!!'), vtl$y['add'](m0zwn, soegjr['replace'](/&#?\w+;/g, ujsori), qeh_)) : ('http://www.w3.org/1999/xhtml' === hzfwm0[''] && soegjr['match'](/^(?:disabled|checked|selected)$/i) || x8p61['warning']('attribute "' + soegjr + '" missed value!! "' + soegjr + '" instead!!'), vtl$y['add'](soegjr, soegjr, qeh_));
                        break;
                    case zi57bsu:
                        throw new Error('attribute value missed!!');
                }
                return aeq_gn;
            case '\u0080':
                gres = '\x20';
            default:
                if ('\x20' >= gres) switch (fzw9md) {
                    case zb7soui:
                        vtl$y['setTagName'](b527['slice'](qeh_, aeq_gn)), fzw9md = zsgjru;
                        break;
                    case zboiu7:
                        m0zwn = b527['slice'](qeh_, aeq_gn), fzw9md = zwqmnh0;
                        break;
                    case zrogsj:
                        var soegjr = b527['slice'](qeh_, aeq_gn)['replace'](/&#?\w+;/g, ujsori);
                        x8p61['warning']('attribute "' + soegjr + '" missed quot(")!!'), vtl$y['add'](m0zwn, soegjr, qeh_);
                    case zq_egn:
                        fzw9md = zsgjru;
                } else switch (fzw9md) {
                    case zwqmnh0:
                        {
                            vtl$y['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === hzfwm0[''] && m0zwn['match'](/^(?:disabled|checked|selected)$/i) || x8p61['warning']('attribute "' + m0zwn + '" missed value!! "' + m0zwn + '" instead2!!'), vtl$y['add'](m0zwn, m0zwn, qeh_), qeh_ = aeq_gn, fzw9md = zboiu7;
                        break;
                    case zq_egn:
                        x8p61['warning']('attribute space is required"' + m0zwn + '\x22!!');
                    case zsgjru:
                        fzw9md = zboiu7, qeh_ = aeq_gn;
                        break;
                    case zi57bsu:
                        fzw9md = zrogsj, qeh_ = aeq_gn;
                        break;
                    case zt2$vyl:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        aeq_gn++;
    }
}
function zougrsj(r_aj, zmwfh, gorej_) {
    for (var x164 = r_aj['tagName'], uojrs = null, b5t7y2 = r_aj['length']; b5t7y2--;) {
        var tv2ly$ = r_aj[b5t7y2],
            s7iruo = tv2ly$['qName'],
            eajqg_ = tv2ly$['value'],
            dz93wf = s7iruo['indexOf'](':');
        if (dz93wf > 0x0) var g_ra = tv2ly$['prefix'] = s7iruo['slice'](0x0, dz93wf),
            su7ori = s7iruo['slice'](dz93wf + 0x1),
            uiso7r = 'xmlns' === g_ra && su7ori;else su7ori = s7iruo, g_ra = null, uiso7r = 'xmlns' === s7iruo && '';
        tv2ly$['localName'] = su7ori, uiso7r !== !0x1 && (null == uojrs && (uojrs = {}, zqhmnw(gorej_, gorej_ = {})), gorej_[uiso7r] = uojrs[uiso7r] = eajqg_, tv2ly$['uri'] = 'http://www.w3.org/2000/xmlns/', zmwfh['startPrefixMapping'](uiso7r, eajqg_));
    }
    for (var b5t7y2 = r_aj['length']; b5t7y2--;) {
        tv2ly$ = r_aj[b5t7y2];
        var g_ra = tv2ly$['prefix'];
        g_ra && ('xml' === g_ra && (tv2ly$['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== g_ra && (tv2ly$['uri'] = gorej_[g_ra || '']));
    }
    var dz93wf = x164['indexOf'](':');
    dz93wf > 0x0 ? (g_ra = r_aj['prefix'] = x164['slice'](0x0, dz93wf), su7ori = r_aj['localName'] = x164['slice'](dz93wf + 0x1)) : (g_ra = null, su7ori = r_aj['localName'] = x164);
    var nmwzh = r_aj['uri'] = gorej_[g_ra || ''];
    if (zmwfh['startElement'](nmwzh, su7ori, x164, r_aj), !r_aj['closed']) return r_aj['currentNSMap'] = gorej_, r_aj['localNSMap'] = uojrs, !0x0;
    if (zmwfh['endElement'](nmwzh, su7ori, x164), uojrs) {
        for (g_ra in uojrs) zmwfh['endPrefixMapping'](g_ra);
    }
}
function zh0wfz(ibs7uo, gej_r, $b52, fm, orej_g) {
    if (/^(?:script|textarea)$/i['test']($b52)) {
        var ou7isb = ibs7uo['indexOf']('</' + $b52 + '>', gej_r),
            gqja_ = ibs7uo['substring'](gej_r + 0x1, ou7isb);
        if (/[&<]/['test'](gqja_)) return (/^script$/i['test']($b52) ? (orej_g['characters'](gqja_, 0x0, gqja_['length']), ou7isb) : (gqja_ = gqja_['replace'](/&#?\w+;/g, fm), orej_g['characters'](gqja_, 0x0, gqja_['length']), ou7isb)
        );
    }
    return gej_r + 0x1;
}
function zq_aneg(fd69z, ja, $byt52, ja_qeg) {
    var l5t$ = ja_qeg[$byt52];
    return null == l5t$ && (l5t$ = fd69z['lastIndexOf']('</' + $byt52 + '>'), ja > l5t$ && (l5t$ = fd69z['lastIndexOf']('</' + $byt52)), ja_qeg[$byt52] = l5t$), ja > l5t$;
}
function zqhmnw(osirj, f93d6z) {
    for (var fdzmw in osirj) f93d6z[fdzmw] = osirj[fdzmw];
}
function zogujsr(eg_jar, n0wzm, qh, uy7bi) {
    var ujg = eg_jar['charAt'](n0wzm + 0x2);
    switch (ujg) {
        case '-':
            if ('-' === eg_jar['charAt'](n0wzm + 0x3)) {
                var na_geq = eg_jar['indexOf']('-->', n0wzm + 0x4);
                return na_geq > n0wzm ? (qh['comment'](eg_jar, n0wzm + 0x4, na_geq - n0wzm - 0x4), na_geq + 0x3) : (uy7bi['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == eg_jar['substr'](n0wzm + 0x3, 0x6)) {
                var na_geq = eg_jar['indexOf'](']]>', n0wzm + 0x9);
                return qh['startCDATA'](), qh['characters'](eg_jar, n0wzm + 0x9, na_geq - n0wzm - 0x9), qh['endCDATA'](), na_geq + 0x3;
            }
            var k8x41 = zisobu(eg_jar, n0wzm),
                $lt2y = k8x41['length'];
            if ($lt2y > 0x1 && /!doctype/i['test'](k8x41[0x0][0x0])) {
                var uosbi7 = k8x41[0x1][0x0],
                    fz0m9 = $lt2y > 0x3 && /^public$/i['test'](k8x41[0x2][0x0]) && k8x41[0x3][0x0],
                    w9fzd3 = $lt2y > 0x4 && k8x41[0x4][0x0],
                    jsiuo = k8x41[$lt2y - 0x1];
                return qh['startDTD'](uosbi7, fz0m9 && fz0m9['replace'](/^(['"])(.*?)\1$/, '$2'), w9fzd3 && w9fzd3['replace'](/^(['"])(.*?)\1$/, '$2')), qh['endDTD'](), jsiuo['index'] + jsiuo[0x0]['length'];
            }
    }
    return -0x1;
}
function zlyt2$5(vl2yt, ly$t2, w3zf9) {
    var z9f0mw = vl2yt['indexOf']('?>', ly$t2);
    if (z9f0mw) {
        var i7buso = vl2yt['substring'](ly$t2, z9f0mw)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (i7buso) {
            {
                i7buso[0x0]['length'];
            }
            return w3zf9['processingInstruction'](i7buso[0x1], i7buso[0x2]), z9f0mw + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function zusjr() {}
function z_eaqg(usjori, $25tl) {
    return usjori['__proto__'] = $25tl, usjori;
}
function zisobu(w0hzmf, s7iru) {
    var $l5t2y,
        zfhw0 = [],
        eaqjg = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (eaqjg['lastIndex'] = s7iru, eaqjg['exec'](w0hzmf); $l5t2y = eaqjg['exec'](w0hzmf);) if (zfhw0['push']($l5t2y), $l5t2y[0x1]) return zfhw0;
}
var zfdw = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    zhmnw = new RegExp('[\\-\\.0-9' + zfdw['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    zwz9md = new RegExp('^' + zfdw['source'] + zhmnw['source'] + '*(?::' + zfdw['source'] + zhmnw['source'] + '*)?$'),
    zb7soui = 0x0,
    zboiu7 = 0x1,
    zwqmnh0 = 0x2,
    zi57bsu = 0x3,
    zrogsj = 0x4,
    zq_egn = 0x5,
    zsgjru = 0x6,
    zt2$vyl = 0x7;
zyv2$l['prototype'] = {
    'parse': function (obsi7, ty2v$l, _hn0aq) {
        var orius7 = this['domBuilder'];
        orius7['startDocument'](), zqhmnw(ty2v$l, ty2v$l = {}), zrj_age(obsi7, ty2v$l, _hn0aq, orius7, this['errorHandler']), orius7['endDocument']();
    }
}, zusjr['prototype'] = {
    'setTagName': function (hm0f) {
        if (!zwz9md['test'](hm0f)) throw new Error('invalid tagName:' + hm0f);
        this['tagName'] = hm0f;
    },
    'add': function (fwdz, q0nwmh, gaej_r) {
        if (!zwz9md['test'](fwdz)) throw new Error('invalid attribute:' + fwdz);
        this[this['length']++] = {
            'qName': fwdz,
            'value': q0nwmh,
            'offset': gaej_r
        };
    },
    'length': 0x0,
    'getLocalName': function (i75buy) {
        return this[i75buy]['localName'];
    },
    'getLocator': function (i7y5ub) {
        return this[i7y5ub]['locator'];
    },
    'getQName': function (_a0qhn) {
        return this[_a0qhn]['qName'];
    },
    'getURI': function (naqm) {
        return this[naqm]['uri'];
    },
    'getValue': function (uyi7b5) {
        return this[uyi7b5]['value'];
    }
}, z_eaqg({}, z_eaqg['prototype']) instanceof z_eaqg || (z_eaqg = function (guj, h0nz) {
    function m0zf9() {}
    m0zf9['prototype'] = h0nz, m0zf9 = new m0zf9();
    for (h0nz in guj) m0zf9[h0nz] = guj[h0nz];
    return m0zf9;
}), exports['XMLReader'] = zyv2$l;