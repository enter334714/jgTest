var B = wx.$z;
function znzmw0h() {}
function zou7sri(_anqh, qna_he, subi, p8x136, i5ub7y) {
    function j_org($t52by) {
        if ($t52by > 0xffff) {
            $t52by -= 0x10000;
            var mqan = 0xd800 + ($t52by >> 0xa),
                ha0nmq = 0xdc00 + (0x3ff & $t52by);
            return String['fromCharCode'](mqan, ha0nmq);
        }
        return String['fromCharCode']($t52by);
    }
    function tyl$2v(eorg_) {
        var amhnq0 = eorg_['slice'](0x1, -0x1);
        return amhnq0 in subi ? subi[amhnq0] : '#' === amhnq0['charAt'](0x0) ? j_org(parseInt(amhnq0['substr'](0x1)['replace']('x', '0x'))) : (i5ub7y['error']('entity not found:' + eorg_), eorg_);
    }
    function zfmdw(u7rs) {
        if (u7rs > jager) {
            var _qanhe = _anqh['substring'](jager, u7rs)['replace'](/&#?\w+;/g, tyl$2v);
            ojrge && h0qn_a(jager), p8x136['characters'](_qanhe, 0x0, u7rs - jager), jager = u7rs;
        }
    }
    function h0qn_a(m0naqh, nmq0wh) {
        for (; m0naqh >= ijsour && (nmq0wh = d9fz['exec'](_anqh));) j_erag = nmq0wh['index'], ijsour = j_erag + nmq0wh[0x0]['length'], ojrge['lineNumber']++;
        ojrge['columnNumber'] = m0naqh - j_erag + 0x1;
    }
    for (var j_erag = 0x0, ijsour = 0x0, d9fz = /.*(?:\r\n?|\n)|.*$/g, ojrge = p8x136['locator'], rjoesg = [{ 'currentNSMap': qna_he }], zwfd9m = {}, jager = 0x0;;) {
        try {
            var i7u5yb = _anqh['indexOf']('<', jager);
            if (0x0 > i7u5yb) {
                if (!_anqh['substr'](jager)['match'](/^\s*$/)) {
                    var o_jr = p8x136['doc'],
                        l52$ = o_jr['createTextNode'](_anqh['substr'](jager));
                    o_jr['appendChild'](l52$), p8x136['currentElement'] = l52$;
                }
                return;
            }
            switch (i7u5yb > jager && zfmdw(i7u5yb), _anqh['charAt'](i7u5yb + 0x1)) {
                case '/':
                    var jir = _anqh['indexOf']('>', i7u5yb + 0x3),
                        i7ousr = _anqh['substring'](i7u5yb + 0x2, jir),
                        eg_jra = rjoesg['pop']();
                    0x0 > jir ? (i7ousr = _anqh['substring'](i7u5yb + 0x2)['replace'](/[\s<].*/, ''), i5ub7y['error']('end tag name: ' + i7ousr + ' is not complete:' + eg_jra['tagName']), jir = i7u5yb + 0x1 + i7ousr['length']) : i7ousr['match'](/\s</) && (i7ousr = i7ousr['replace'](/[\s<].*/, ''), i5ub7y['error']('end tag name: ' + i7ousr + ' maybe not complete'), jir = i7u5yb + 0x1 + i7ousr['length']);
                    var fzw90m = eg_jra['localNSMap'],
                        d16f39 = eg_jra['tagName'] == i7ousr,
                        _nqega = d16f39 || eg_jra['tagName'] && eg_jra['tagName']['toLowerCase']() == i7ousr['toLowerCase']();
                    if (_nqega) {
                        if (p8x136['endElement'](eg_jra['uri'], eg_jra['localName'], i7ousr), fzw90m) {
                            for (var ejosg in fzw90m) p8x136['endPrefixMapping'](ejosg);
                        }
                        d16f39 || i5ub7y['fatalError']('end tag name: ' + i7ousr + ' is not match the current start tagName:' + eg_jra['tagName']);
                    } else rjoesg['push'](eg_jra);
                    jir++;
                    break;
                case '?':
                    ojrge && h0qn_a(i7u5yb), jir = zur7s(_anqh, i7u5yb, p8x136);
                    break;
                case '!':
                    ojrge && h0qn_a(i7u5yb), jir = zi5buy(_anqh, i7u5yb, p8x136, i5ub7y);
                    break;
                default:
                    ojrge && h0qn_a(i7u5yb);
                    var x368d = new zrge_oj(),
                        lv$2ty = rjoesg[rjoesg['length'] - 0x1]['currentNSMap'],
                        jir = zib7y(_anqh, i7u5yb, x368d, lv$2ty, tyl$2v, i5ub7y),
                        ybt$52 = x368d['length'];
                    if (!x368d['closed'] && zosbi7u(_anqh, jir, x368d['tagName'], zwfd9m) && (x368d['closed'] = !0x0, subi['nbsp'] || i5ub7y['warning']('unclosed xml attribute')), ojrge && ybt$52) {
                        for (var xp13 = zzfhmw(ojrge, {}), wqmhn = 0x0; ybt$52 > wqmhn; wqmhn++) {
                            var pk841x = x368d[wqmhn];
                            h0qn_a(pk841x['offset']), pk841x['locator'] = zzfhmw(ojrge, {});
                        }
                        p8x136['locator'] = xp13, zeqg_j(x368d, p8x136, lv$2ty) && rjoesg['push'](x368d), p8x136['locator'] = ojrge;
                    } else zeqg_j(x368d, p8x136, lv$2ty) && rjoesg['push'](x368d);
                    'http://www.w3.org/1999/xhtml' !== x368d['uri'] || x368d['closed'] ? jir++ : jir = zeojgrs(_anqh, jir, x368d['tagName'], tyl$2v, p8x136);
            }
        } catch (wqn) {
            i5ub7y['error']('element parse error: ' + wqn), jir = -0x1;
        }
        jir > jager ? jager = jir : zfmdw(Math['max'](i7u5yb, jager) + 0x1);
    }
}
function zzfhmw(haqm0n, siojr) {
    return siojr['lineNumber'] = haqm0n['lineNumber'], siojr['columnNumber'] = haqm0n['columnNumber'], siojr;
}
function zib7y(fd9zwm, ly25$t, qegan, aq_hn, ub7s, pkx4) {
    for (var uoij, i7bsou, p3x861 = ++ly25$t, iu75 = ze_qjg;;) {
        var sor7 = fd9zwm['charAt'](p3x861);
        switch (sor7) {
            case '=':
                if (iu75 === zt$y2l) uoij = fd9zwm['slice'](ly25$t, p3x861), iu75 = zqnmh0a;else {
                    if (iu75 !== zdf9) throw new Error('attribute equal must after attrName');
                    iu75 = zqnmh0a;
                }
                break;
            case '\x27':
            case '\x22':
                if (iu75 === zqnmh0a || iu75 === zt$y2l) {
                    if (iu75 === zt$y2l && (pkx4['warning']('attribute value must after "="'), uoij = fd9zwm['slice'](ly25$t, p3x861)), ly25$t = p3x861 + 0x1, p3x861 = fd9zwm['indexOf'](sor7, ly25$t), !(p3x861 > 0x0)) throw new Error('attribute value no end \'' + sor7 + '\' match');
                    i7bsou = fd9zwm['slice'](ly25$t, p3x861)['replace'](/&#?\w+;/g, ub7s), qegan['add'](uoij, i7bsou, ly25$t - 0x1), iu75 = zn_hq0a;
                } else {
                    if (iu75 != zegar_j) throw new Error('attribute value must after "="');
                    i7bsou = fd9zwm['slice'](ly25$t, p3x861)['replace'](/&#?\w+;/g, ub7s), qegan['add'](uoij, i7bsou, ly25$t), pkx4['warning']('attribute "' + uoij + '" missed start quot(' + sor7 + ')!!'), ly25$t = p3x861 + 0x1, iu75 = zn_hq0a;
                }
                break;
            case '/':
                switch (iu75) {
                    case ze_qjg:
                        qegan['setTagName'](fd9zwm['slice'](ly25$t, p3x861));
                    case zn_hq0a:
                    case zybiu57:
                    case zz6d93:
                        iu75 = zz6d93, qegan['closed'] = !0x0;
                    case zegar_j:
                    case zt$y2l:
                    case zdf9:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return pkx4['error']('unexpected end of input'), iu75 == ze_qjg && qegan['setTagName'](fd9zwm['slice'](ly25$t, p3x861)), p3x861;
            case '>':
                switch (iu75) {
                    case ze_qjg:
                        qegan['setTagName'](fd9zwm['slice'](ly25$t, p3x861));
                    case zn_hq0a:
                    case zybiu57:
                    case zz6d93:
                        break;
                    case zegar_j:
                    case zt$y2l:
                        i7bsou = fd9zwm['slice'](ly25$t, p3x861), '/' === i7bsou['slice'](-0x1) && (qegan['closed'] = !0x0, i7bsou = i7bsou['slice'](0x0, -0x1));
                    case zdf9:
                        iu75 === zdf9 && (i7bsou = uoij), iu75 == zegar_j ? (pkx4['warning']('attribute "' + i7bsou + '" missed quot(")!!'), qegan['add'](uoij, i7bsou['replace'](/&#?\w+;/g, ub7s), ly25$t)) : ('http://www.w3.org/1999/xhtml' === aq_hn[''] && i7bsou['match'](/^(?:disabled|checked|selected)$/i) || pkx4['warning']('attribute "' + i7bsou + '" missed value!! "' + i7bsou + '" instead!!'), qegan['add'](i7bsou, i7bsou, ly25$t));
                        break;
                    case zqnmh0a:
                        throw new Error('attribute value missed!!');
                }
                return p3x861;
            case '\u0080':
                sor7 = '\x20';
            default:
                if ('\x20' >= sor7) switch (iu75) {
                    case ze_qjg:
                        qegan['setTagName'](fd9zwm['slice'](ly25$t, p3x861)), iu75 = zybiu57;
                        break;
                    case zt$y2l:
                        uoij = fd9zwm['slice'](ly25$t, p3x861), iu75 = zdf9;
                        break;
                    case zegar_j:
                        var i7bsou = fd9zwm['slice'](ly25$t, p3x861)['replace'](/&#?\w+;/g, ub7s);
                        pkx4['warning']('attribute "' + i7bsou + '" missed quot(")!!'), qegan['add'](uoij, i7bsou, ly25$t);
                    case zn_hq0a:
                        iu75 = zybiu57;
                } else switch (iu75) {
                    case zdf9:
                        {
                            qegan['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === aq_hn[''] && uoij['match'](/^(?:disabled|checked|selected)$/i) || pkx4['warning']('attribute "' + uoij + '" missed value!! "' + uoij + '" instead2!!'), qegan['add'](uoij, uoij, ly25$t), ly25$t = p3x861, iu75 = zt$y2l;
                        break;
                    case zn_hq0a:
                        pkx4['warning']('attribute space is required"' + uoij + '\x22!!');
                    case zybiu57:
                        iu75 = zt$y2l, ly25$t = p3x861;
                        break;
                    case zqnmh0a:
                        iu75 = zegar_j, ly25$t = p3x861;
                        break;
                    case zz6d93:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        p3x861++;
    }
}
function zeqg_j(iruo7s, o7sr, ea_hqn) {
    for (var xk8p14 = iruo7s['tagName'], iy7b25 = null, zf0h = iruo7s['length']; zf0h--;) {
        var gen_qa = iruo7s[zf0h],
            us5 = gen_qa['qName'],
            nah0 = gen_qa['value'],
            kxp48 = us5['indexOf'](':');
        if (kxp48 > 0x0) var m9zwdf = gen_qa['prefix'] = us5['slice'](0x0, kxp48),
            srugjo = us5['slice'](kxp48 + 0x1),
            zn = 'xmlns' === m9zwdf && srugjo;else srugjo = us5, m9zwdf = null, zn = 'xmlns' === us5 && '';
        gen_qa['localName'] = srugjo, zn !== !0x1 && (null == iy7b25 && (iy7b25 = {}, zjsreg(ea_hqn, ea_hqn = {})), ea_hqn[zn] = iy7b25[zn] = nah0, gen_qa['uri'] = 'http://www.w3.org/2000/xmlns/', o7sr['startPrefixMapping'](zn, nah0));
    }
    for (var zf0h = iruo7s['length']; zf0h--;) {
        gen_qa = iruo7s[zf0h];
        var m9zwdf = gen_qa['prefix'];
        m9zwdf && ('xml' === m9zwdf && (gen_qa['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== m9zwdf && (gen_qa['uri'] = ea_hqn[m9zwdf || '']));
    }
    var kxp48 = xk8p14['indexOf'](':');
    kxp48 > 0x0 ? (m9zwdf = iruo7s['prefix'] = xk8p14['slice'](0x0, kxp48), srugjo = iruo7s['localName'] = xk8p14['slice'](kxp48 + 0x1)) : (m9zwdf = null, srugjo = iruo7s['localName'] = xk8p14);
    var biy25 = iruo7s['uri'] = ea_hqn[m9zwdf || ''];
    if (o7sr['startElement'](biy25, srugjo, xk8p14, iruo7s), !iruo7s['closed']) return iruo7s['currentNSMap'] = ea_hqn, iruo7s['localNSMap'] = iy7b25, !0x0;
    if (o7sr['endElement'](biy25, srugjo, xk8p14), iy7b25) {
        for (m9zwdf in iy7b25) o7sr['endPrefixMapping'](m9zwdf);
    }
}
function zeojgrs(f3d9z6, x614p8, ngae_q, hmfzw, _qjea) {
    if (/^(?:script|textarea)$/i['test'](ngae_q)) {
        var jgro_ = f3d9z6['indexOf']('</' + ngae_q + '>', x614p8),
            _hnqa = f3d9z6['substring'](x614p8 + 0x1, jgro_);
        if (/[&<]/['test'](_hnqa)) return (/^script$/i['test'](ngae_q) ? (_qjea['characters'](_hnqa, 0x0, _hnqa['length']), jgro_) : (_hnqa = _hnqa['replace'](/&#?\w+;/g, hmfzw), _qjea['characters'](_hnqa, 0x0, _hnqa['length']), jgro_)
        );
    }
    return x614p8 + 0x1;
}
function zosbi7u(mhwf0, sui7or, uobi, ous) {
    var e_hqa = ous[uobi];
    return null == e_hqa && (e_hqa = mhwf0['lastIndexOf']('</' + uobi + '>'), sui7or > e_hqa && (e_hqa = mhwf0['lastIndexOf']('</' + uobi)), ous[uobi] = e_hqa), sui7or > e_hqa;
}
function zjsreg(wz9fd, rsjgeo) {
    for (var aq_nh0 in wz9fd) rsjgeo[aq_nh0] = wz9fd[aq_nh0];
}
function zi5buy(qn_g, yu5i7b, rejog_, tlv2$) {
    var _jeag = qn_g['charAt'](yu5i7b + 0x2);
    switch (_jeag) {
        case '-':
            if ('-' === qn_g['charAt'](yu5i7b + 0x3)) {
                var u7irso = qn_g['indexOf']('-->', yu5i7b + 0x4);
                return u7irso > yu5i7b ? (rejog_['comment'](qn_g, yu5i7b + 0x4, u7irso - yu5i7b - 0x4), u7irso + 0x3) : (tlv2$['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == qn_g['substr'](yu5i7b + 0x3, 0x6)) {
                var u7irso = qn_g['indexOf'](']]>', yu5i7b + 0x9);
                return rejog_['startCDATA'](), rejog_['characters'](qn_g, yu5i7b + 0x9, u7irso - yu5i7b - 0x9), rejog_['endCDATA'](), u7irso + 0x3;
            }
            var nm0ah = ze_hqn(qn_g, yu5i7b),
                f6d3 = nm0ah['length'];
            if (f6d3 > 0x1 && /!doctype/i['test'](nm0ah[0x0][0x0])) {
                var roegj_ = nm0ah[0x1][0x0],
                    wn0qhm = f6d3 > 0x3 && /^public$/i['test'](nm0ah[0x2][0x0]) && nm0ah[0x3][0x0],
                    mwfzh0 = f6d3 > 0x4 && nm0ah[0x4][0x0],
                    _gorj = nm0ah[f6d3 - 0x1];
                return rejog_['startDTD'](roegj_, wn0qhm && wn0qhm['replace'](/^(['"])(.*?)\1$/, '$2'), mwfzh0 && mwfzh0['replace'](/^(['"])(.*?)\1$/, '$2')), rejog_['endDTD'](), _gorj['index'] + _gorj[0x0]['length'];
            }
    }
    return -0x1;
}
function zur7s(j_reog, zm0f9, iorju) {
    var rjsoeg = j_reog['indexOf']('?>', zm0f9);
    if (rjsoeg) {
        var mwhn0q = j_reog['substring'](zm0f9, rjsoeg)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (mwhn0q) {
            {
                mwhn0q[0x0]['length'];
            }
            return iorju['processingInstruction'](mwhn0q[0x1], mwhn0q[0x2]), rjsoeg + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function zrge_oj() {}
function zujir(f916d, _ra) {
    return f916d['__proto__'] = _ra, f916d;
}
function ze_hqn(b57i, a_jg) {
    var hm0wq,
        nwm0qh = [],
        qhn_a0 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (qhn_a0['lastIndex'] = a_jg, qhn_a0['exec'](b57i); hm0wq = qhn_a0['exec'](b57i);) if (nwm0qh['push'](hm0wq), hm0wq[0x1]) return nwm0qh;
}
var zu57i = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    zi57uyb = new RegExp('[\\-\\.0-9' + zu57i['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    zjero_g = new RegExp('^' + zu57i['source'] + zi57uyb['source'] + '*(?::' + zu57i['source'] + zi57uyb['source'] + '*)?$'),
    ze_qjg = 0x0,
    zt$y2l = 0x1,
    zdf9 = 0x2,
    zqnmh0a = 0x3,
    zegar_j = 0x4,
    zn_hq0a = 0x5,
    zybiu57 = 0x6,
    zz6d93 = 0x7;
znzmw0h['prototype'] = {
    'parse': function (z9fwm0, _ojerg, eqna_g) {
        var ujrsoi = this['domBuilder'];
        ujrsoi['startDocument'](), zjsreg(_ojerg, _ojerg = {}), zou7sri(z9fwm0, _ojerg, eqna_g, ujrsoi, this['errorHandler']), ujrsoi['endDocument']();
    }
}, zrge_oj['prototype'] = {
    'setTagName': function (bty7) {
        if (!zjero_g['test'](bty7)) throw new Error('invalid tagName:' + bty7);
        this['tagName'] = bty7;
    },
    'add': function (wf9dzm, l5y, d9f36) {
        if (!zjero_g['test'](wf9dzm)) throw new Error('invalid attribute:' + wf9dzm);
        this[this['length']++] = {
            'qName': wf9dzm,
            'value': l5y,
            'offset': d9f36
        };
    },
    'length': 0x0,
    'getLocalName': function (wdf) {
        return this[wdf]['localName'];
    },
    'getLocator': function (w39zdf) {
        return this[w39zdf]['locator'];
    },
    'getQName': function (q_aje) {
        return this[q_aje]['qName'];
    },
    'getURI': function ($2vt) {
        return this[$2vt]['uri'];
    },
    'getValue': function (lvt$2y) {
        return this[lvt$2y]['value'];
    }
}, zujir({}, zujir['prototype']) instanceof zujir || (zujir = function (ly2, a_hq) {
    function mzf0wh() {}
    mzf0wh['prototype'] = a_hq, mzf0wh = new mzf0wh();
    for (a_hq in ly2) mzf0wh[a_hq] = ly2[a_hq];
    return mzf0wh;
}), exports['XMLReader'] = znzmw0h;