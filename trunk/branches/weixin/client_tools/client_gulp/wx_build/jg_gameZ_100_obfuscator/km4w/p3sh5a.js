var f = wx.$B;
function Szjymp() {}
function Sn$m1jp(hdfub6, yehqu6, _sxak9, uyzeq, ypnzqe) {
    function f6bhdu($2gl3) {
        if ($2gl3 > 0xffff) {
            $2gl3 -= 0x10000;
            var q6fe = 0xd800 + ($2gl3 >> 0xa),
                gvl2o = 0xdc00 + (0x3ff & $2gl3);
            return String['fromCharCode'](q6fe, gvl2o);
        }
        return String['fromCharCode']($2gl3);
    }
    function tw405r(w4785r) {
        var fdabs9 = w4785r['slice'](0x1, -0x1);
        return fdabs9 in _sxak9 ? _sxak9[fdabs9] : '#' === fdabs9['charAt'](0x0) ? f6bhdu(parseInt(fdabs9['substr'](0x1)['replace']('x', '0x'))) : (ypnzqe['error']('entity not found:' + w4785r), w4785r);
    }
    function d6huf(a9kd_s) {
        if (a9kd_s > g2v3o) {
            var k_xa09 = hdfub6['substring'](g2v3o, a9kd_s)['replace'](/&#?\w+;/g, tw405r);
            om1$lj && _xksa9(g2v3o), uyzeq['characters'](k_xa09, 0x0, a9kd_s - g2v3o), g2v3o = a9kd_s;
        }
    }
    function _xksa9(a_xsk, x5t04_) {
        for (; a_xsk >= o3g2v && (x5t04_ = sd_k['exec'](hdfub6));) nzpyeq = x5t04_['index'], o3g2v = nzpyeq + x5t04_[0x0]['length'], om1$lj['lineNumber']++;
        om1$lj['columnNumber'] = a_xsk - nzpyeq + 0x1;
    }
    for (var nzpyeq = 0x0, o3g2v = 0x0, sd_k = /.*(?:\r\n?|\n)|.*$/g, om1$lj = uyzeq['locator'], befhu = [{ 'currentNSMap': yehqu6 }], tx5k0 = {}, g2v3o = 0x0;;) {
        try {
            var b6ufs = hdfub6['indexOf']('<', g2v3o);
            if (0x0 > b6ufs) {
                if (!hdfub6['substr'](g2v3o)['match'](/^\s*$/)) {
                    var a9_kxs = uyzeq['doc'],
                        _ds9k = a9_kxs['createTextNode'](hdfub6['substr'](g2v3o));
                    a9_kxs['appendChild'](_ds9k), uyzeq['currentElement'] = _ds9k;
                }
                return;
            }
            switch (b6ufs > g2v3o && d6huf(b6ufs), hdfub6['charAt'](b6ufs + 0x1)) {
                case '/':
                    var lom$j = hdfub6['indexOf']('>', b6ufs + 0x3),
                        nqyz = hdfub6['substring'](b6ufs + 0x2, lom$j),
                        oj1m$ = befhu['pop']();
                    0x0 > lom$j ? (nqyz = hdfub6['substring'](b6ufs + 0x2)['replace'](/[\s<].*/, ''), ypnzqe['error']('end tag name: ' + nqyz + ' is not complete:' + oj1m$['tagName']), lom$j = b6ufs + 0x1 + nqyz['length']) : nqyz['match'](/\s</) && (nqyz = nqyz['replace'](/[\s<].*/, ''), ypnzqe['error']('end tag name: ' + nqyz + ' maybe not complete'), lom$j = b6ufs + 0x1 + nqyz['length']);
                    var bsad6 = oj1m$['localNSMap'],
                        r0t45w = oj1m$['tagName'] == nqyz,
                        ehyzq = r0t45w || oj1m$['tagName'] && oj1m$['tagName']['toLowerCase']() == nqyz['toLowerCase']();
                    if (ehyzq) {
                        if (uyzeq['endElement'](oj1m$['uri'], oj1m$['localName'], nqyz), bsad6) {
                            for (var vl3i in bsad6) uyzeq['endPrefixMapping'](vl3i);
                        }
                        r0t45w || ypnzqe['fatalError']('end tag name: ' + nqyz + ' is not match the current start tagName:' + oj1m$['tagName']);
                    } else befhu['push'](oj1m$);
                    lom$j++;
                    break;
                case '?':
                    om1$lj && _xksa9(b6ufs), lom$j = S_txk5(hdfub6, b6ufs, uyzeq);
                    break;
                case '!':
                    om1$lj && _xksa9(b6ufs), lom$j = Sda9f(hdfub6, b6ufs, uyzeq, ypnzqe);
                    break;
                default:
                    om1$lj && _xksa9(b6ufs);
                    var d6af = new Shy6qu(),
                        sbuf6d = befhu[befhu['length'] - 0x1]['currentNSMap'],
                        lom$j = S_x0t9(hdfub6, b6ufs, d6af, sbuf6d, tw405r, ypnzqe),
                        fhd6ub = d6af['length'];
                    if (!d6af['closed'] && Sgvi32l(hdfub6, lom$j, d6af['tagName'], tx5k0) && (d6af['closed'] = !0x0, _sxak9['nbsp'] || ypnzqe['warning']('unclosed xml attribute')), om1$lj && fhd6ub) {
                        for (var ypqm = Seh6bf(om1$lj, {}), x_0ak9 = 0x0; fhd6ub > x_0ak9; x_0ak9++) {
                            var sa9dkb = d6af[x_0ak9];
                            _xksa9(sa9dkb['offset']), sa9dkb['locator'] = Seh6bf(om1$lj, {});
                        }
                        uyzeq['locator'] = ypqm, Sd_sk9a(d6af, uyzeq, sbuf6d) && befhu['push'](d6af), uyzeq['locator'] = om1$lj;
                    } else Sd_sk9a(d6af, uyzeq, sbuf6d) && befhu['push'](d6af);
                    'http://www.w3.org/1999/xhtml' !== d6af['uri'] || d6af['closed'] ? lom$j++ : lom$j = Sx_a9(hdfub6, lom$j, d6af['tagName'], tw405r, uyzeq);
            }
        } catch (bsfad9) {
            ypnzqe['error']('element parse error: ' + bsfad9), lom$j = -0x1;
        }
        lom$j > g2v3o ? g2v3o = lom$j : d6huf(Math['max'](b6ufs, g2v3o) + 0x1);
    }
}
function Seh6bf(bdasf6, xt504_) {
    return xt504_['lineNumber'] = bdasf6['lineNumber'], xt504_['columnNumber'] = bdasf6['columnNumber'], xt504_;
}
function S_x0t9(dabsf9, jnom, j1onm, k05, ube6, yjnzpm) {
    for (var ax_k90, hyu6e, epyqhz = ++jnom, t48wr5 = Sasd9;;) {
        var liv3g2 = dabsf9['charAt'](epyqhz);
        switch (liv3g2) {
            case '=':
                if (t48wr5 === Sbfd6a) ax_k90 = dabsf9['slice'](jnom, epyqhz), t48wr5 = Sudbsf6;else {
                    if (t48wr5 !== Sr4x0t) throw new Error('attribute equal must after attrName');
                    t48wr5 = Sudbsf6;
                }
                break;
            case '\x27':
            case '\x22':
                if (t48wr5 === Sudbsf6 || t48wr5 === Sbfd6a) {
                    if (t48wr5 === Sbfd6a && (yjnzpm['warning']('attribute value must after "="'), ax_k90 = dabsf9['slice'](jnom, epyqhz)), jnom = epyqhz + 0x1, epyqhz = dabsf9['indexOf'](liv3g2, jnom), !(epyqhz > 0x0)) throw new Error('attribute value no end \'' + liv3g2 + '\' match');
                    hyu6e = dabsf9['slice'](jnom, epyqhz)['replace'](/&#?\w+;/g, ube6), j1onm['add'](ax_k90, hyu6e, jnom - 0x1), t48wr5 = Snpjm1;
                } else {
                    if (t48wr5 != Squefh6) throw new Error('attribute value must after "="');
                    hyu6e = dabsf9['slice'](jnom, epyqhz)['replace'](/&#?\w+;/g, ube6), j1onm['add'](ax_k90, hyu6e, jnom), yjnzpm['warning']('attribute "' + ax_k90 + '" missed start quot(' + liv3g2 + ')!!'), jnom = epyqhz + 0x1, t48wr5 = Snpjm1;
                }
                break;
            case '/':
                switch (t48wr5) {
                    case Sasd9:
                        j1onm['setTagName'](dabsf9['slice'](jnom, epyqhz));
                    case Snpjm1:
                    case S_xa90k:
                    case Sqyhzep:
                        t48wr5 = Sqyhzep, j1onm['closed'] = !0x0;
                    case Squefh6:
                    case Sbfd6a:
                    case Sr4x0t:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return yjnzpm['error']('unexpected end of input'), t48wr5 == Sasd9 && j1onm['setTagName'](dabsf9['slice'](jnom, epyqhz)), epyqhz;
            case '>':
                switch (t48wr5) {
                    case Sasd9:
                        j1onm['setTagName'](dabsf9['slice'](jnom, epyqhz));
                    case Snpjm1:
                    case S_xa90k:
                    case Sqyhzep:
                        break;
                    case Squefh6:
                    case Sbfd6a:
                        hyu6e = dabsf9['slice'](jnom, epyqhz), '/' === hyu6e['slice'](-0x1) && (j1onm['closed'] = !0x0, hyu6e = hyu6e['slice'](0x0, -0x1));
                    case Sr4x0t:
                        t48wr5 === Sr4x0t && (hyu6e = ax_k90), t48wr5 == Squefh6 ? (yjnzpm['warning']('attribute "' + hyu6e + '" missed quot(")!!'), j1onm['add'](ax_k90, hyu6e['replace'](/&#?\w+;/g, ube6), jnom)) : ('http://www.w3.org/1999/xhtml' === k05[''] && hyu6e['match'](/^(?:disabled|checked|selected)$/i) || yjnzpm['warning']('attribute "' + hyu6e + '" missed value!! "' + hyu6e + '" instead!!'), j1onm['add'](hyu6e, hyu6e, jnom));
                        break;
                    case Sudbsf6:
                        throw new Error('attribute value missed!!');
                }
                return epyqhz;
            case '\u0080':
                liv3g2 = '\x20';
            default:
                if ('\x20' >= liv3g2) switch (t48wr5) {
                    case Sasd9:
                        j1onm['setTagName'](dabsf9['slice'](jnom, epyqhz)), t48wr5 = S_xa90k;
                        break;
                    case Sbfd6a:
                        ax_k90 = dabsf9['slice'](jnom, epyqhz), t48wr5 = Sr4x0t;
                        break;
                    case Squefh6:
                        var hyu6e = dabsf9['slice'](jnom, epyqhz)['replace'](/&#?\w+;/g, ube6);
                        yjnzpm['warning']('attribute "' + hyu6e + '" missed quot(")!!'), j1onm['add'](ax_k90, hyu6e, jnom);
                    case Snpjm1:
                        t48wr5 = S_xa90k;
                } else switch (t48wr5) {
                    case Sr4x0t:
                        {
                            j1onm['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === k05[''] && ax_k90['match'](/^(?:disabled|checked|selected)$/i) || yjnzpm['warning']('attribute "' + ax_k90 + '" missed value!! "' + ax_k90 + '" instead2!!'), j1onm['add'](ax_k90, ax_k90, jnom), jnom = epyqhz, t48wr5 = Sbfd6a;
                        break;
                    case Snpjm1:
                        yjnzpm['warning']('attribute space is required"' + ax_k90 + '\x22!!');
                    case S_xa90k:
                        t48wr5 = Sbfd6a, jnom = epyqhz;
                        break;
                    case Sudbsf6:
                        t48wr5 = Squefh6, jnom = epyqhz;
                        break;
                    case Sqyhzep:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        epyqhz++;
    }
}
function Sd_sk9a(jm1n, lvi3g, qenyzp) {
    for (var _dsk = jm1n['tagName'], hub6e = null, ak_s = jm1n['length']; ak_s--;) {
        var $1om = jm1n[ak_s],
            zenpy = $1om['qName'],
            ad9s_k = $1om['value'],
            g23vlo = zenpy['indexOf'](':');
        if (g23vlo > 0x0) var huyq6e = $1om['prefix'] = zenpy['slice'](0x0, g23vlo),
            uyq6e = zenpy['slice'](g23vlo + 0x1),
            ktx5_ = 'xmlns' === huyq6e && uyq6e;else uyq6e = zenpy, huyq6e = null, ktx5_ = 'xmlns' === zenpy && '';
        $1om['localName'] = uyq6e, ktx5_ !== !0x1 && (null == hub6e && (hub6e = {}, S$jl12(qenyzp, qenyzp = {})), qenyzp[ktx5_] = hub6e[ktx5_] = ad9s_k, $1om['uri'] = 'http://www.w3.org/2000/xmlns/', lvi3g['startPrefixMapping'](ktx5_, ad9s_k));
    }
    for (var ak_s = jm1n['length']; ak_s--;) {
        $1om = jm1n[ak_s];
        var huyq6e = $1om['prefix'];
        huyq6e && ('xml' === huyq6e && ($1om['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== huyq6e && ($1om['uri'] = qenyzp[huyq6e || '']));
    }
    var g23vlo = _dsk['indexOf'](':');
    g23vlo > 0x0 ? (huyq6e = jm1n['prefix'] = _dsk['slice'](0x0, g23vlo), uyq6e = jm1n['localName'] = _dsk['slice'](g23vlo + 0x1)) : (huyq6e = null, uyq6e = jm1n['localName'] = _dsk);
    var akx_09 = jm1n['uri'] = qenyzp[huyq6e || ''];
    if (lvi3g['startElement'](akx_09, uyq6e, _dsk, jm1n), !jm1n['closed']) return jm1n['currentNSMap'] = qenyzp, jm1n['localNSMap'] = hub6e, !0x0;
    if (lvi3g['endElement'](akx_09, uyq6e, _dsk), hub6e) {
        for (huyq6e in hub6e) lvi3g['endPrefixMapping'](huyq6e);
    }
}
function Sx_a9(fhbu6d, e6uqfh, jn$1pm, d9fsab, quefh) {
    if (/^(?:script|textarea)$/i['test'](jn$1pm)) {
        var s9akd = fhbu6d['indexOf']('</' + jn$1pm + '>', e6uqfh),
            phzqye = fhbu6d['substring'](e6uqfh + 0x1, s9akd);
        if (/[&<]/['test'](phzqye)) return (/^script$/i['test'](jn$1pm) ? (quefh['characters'](phzqye, 0x0, phzqye['length']), s9akd) : (phzqye = phzqye['replace'](/&#?\w+;/g, d9fsab), quefh['characters'](phzqye, 0x0, phzqye['length']), s9akd)
        );
    }
    return e6uqfh + 0x1;
}
function Sgvi32l($olj1m, hzqpy, w5t48r, lgo2$3) {
    var s9xa_k = lgo2$3[w5t48r];
    return null == s9xa_k && (s9xa_k = $olj1m['lastIndexOf']('</' + w5t48r + '>'), hzqpy > s9xa_k && (s9xa_k = $olj1m['lastIndexOf']('</' + w5t48r)), lgo2$3[w5t48r] = s9xa_k), hzqpy > s9xa_k;
}
function S$jl12(hepyq, heuyz) {
    for (var l3ivg in hepyq) heuyz[l3ivg] = hepyq[l3ivg];
}
function Sda9f(o$n1j, skx9_, _9d, ypez) {
    var xt5_ = o$n1j['charAt'](skx9_ + 0x2);
    switch (xt5_) {
        case '-':
            if ('-' === o$n1j['charAt'](skx9_ + 0x3)) {
                var o$m1n = o$n1j['indexOf']('-->', skx9_ + 0x4);
                return o$m1n > skx9_ ? (_9d['comment'](o$n1j, skx9_ + 0x4, o$m1n - skx9_ - 0x4), o$m1n + 0x3) : (ypez['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == o$n1j['substr'](skx9_ + 0x3, 0x6)) {
                var o$m1n = o$n1j['indexOf'](']]>', skx9_ + 0x9);
                return _9d['startCDATA'](), _9d['characters'](o$n1j, skx9_ + 0x9, o$m1n - skx9_ - 0x9), _9d['endCDATA'](), o$m1n + 0x3;
            }
            var igv23l = Ssa_(o$n1j, skx9_),
                mjo1n = igv23l['length'];
            if (mjo1n > 0x1 && /!doctype/i['test'](igv23l[0x0][0x0])) {
                var zjnpm1 = igv23l[0x1][0x0],
                    g3o2v = mjo1n > 0x3 && /^public$/i['test'](igv23l[0x2][0x0]) && igv23l[0x3][0x0],
                    g$3lo = mjo1n > 0x4 && igv23l[0x4][0x0],
                    rw5t8 = igv23l[mjo1n - 0x1];
                return _9d['startDTD'](zjnpm1, g3o2v && g3o2v['replace'](/^(['"])(.*?)\1$/, '$2'), g$3lo && g$3lo['replace'](/^(['"])(.*?)\1$/, '$2')), _9d['endDTD'](), rw5t8['index'] + rw5t8[0x0]['length'];
            }
    }
    return -0x1;
}
function S_txk5($21ojl, s9a_kx, t_0x9) {
    var uefhb6 = $21ojl['indexOf']('?>', s9a_kx);
    if (uefhb6) {
        var j$mn1p = $21ojl['substring'](s9a_kx, uefhb6)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (j$mn1p) {
            {
                j$mn1p[0x0]['length'];
            }
            return t_0x9['processingInstruction'](j$mn1p[0x1], j$mn1p[0x2]), uefhb6 + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function Shy6qu() {}
function S_t0x45(d9sak, ufb6dh) {
    return d9sak['__proto__'] = ufb6dh, d9sak;
}
function Ssa_(o$1njm, bsa6df) {
    var tk0x_,
        o1$mn = [],
        qzpyeh = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (qzpyeh['lastIndex'] = bsa6df, qzpyeh['exec'](o$1njm); tk0x_ = qzpyeh['exec'](o$1njm);) if (o1$mn['push'](tk0x_), tk0x_[0x1]) return o1$mn;
}
var Sbehfu6 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    Sqhepz = new RegExp('[\\-\\.0-9' + Sbehfu6['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    Seqhyp = new RegExp('^' + Sbehfu6['source'] + Sqhepz['source'] + '*(?::' + Sbehfu6['source'] + Sqhepz['source'] + '*)?$'),
    Sasd9 = 0x0,
    Sbfd6a = 0x1,
    Sr4x0t = 0x2,
    Sudbsf6 = 0x3,
    Squefh6 = 0x4,
    Snpjm1 = 0x5,
    S_xa90k = 0x6,
    Sqyhzep = 0x7;
Szjymp['prototype'] = {
    'parse': function (pnj$m, txk0, pz1nmj) {
        var n1mjp$ = this['domBuilder'];
        n1mjp$['startDocument'](), S$jl12(txk0, txk0 = {}), Sn$m1jp(pnj$m, txk0, pz1nmj, n1mjp$, this['errorHandler']), n1mjp$['endDocument']();
    }
}, Shy6qu['prototype'] = {
    'setTagName': function (zphyq) {
        if (!Seqhyp['test'](zphyq)) throw new Error('invalid tagName:' + zphyq);
        this['tagName'] = zphyq;
    },
    'add': function (ba9sd, rt845w, hu6bef) {
        if (!Seqhyp['test'](ba9sd)) throw new Error('invalid attribute:' + ba9sd);
        this[this['length']++] = {
            'qName': ba9sd,
            'value': rt845w,
            'offset': hu6bef
        };
    },
    'length': 0x0,
    'getLocalName': function (bs6af) {
        return this[bs6af]['localName'];
    },
    'getLocator': function (_9tk0x) {
        return this[_9tk0x]['locator'];
    },
    'getQName': function (x0t5_4) {
        return this[x0t5_4]['qName'];
    },
    'getURI': function (oj$l1) {
        return this[oj$l1]['uri'];
    },
    'getValue': function (mpn$) {
        return this[mpn$]['value'];
    }
}, S_t0x45({}, S_t0x45['prototype']) instanceof S_t0x45 || (S_t0x45 = function (hfbu6e, $3o12l) {
    function dasb9f() {}
    dasb9f['prototype'] = $3o12l, dasb9f = new dasb9f();
    for ($3o12l in hfbu6e) dasb9f[$3o12l] = hfbu6e[$3o12l];
    return dasb9f;
}), exports['XMLReader'] = Szjymp;