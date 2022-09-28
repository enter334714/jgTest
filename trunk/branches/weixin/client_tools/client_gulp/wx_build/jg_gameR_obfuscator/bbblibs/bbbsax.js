var _ = wx.y$;
function _dbpgn7() {}
function _dye42(ro093, iy2e4, sq6ohz, plw7ds, b42ei) {
    function zhoqs(i2e4) {
        if (i2e4 > 0xffff) {
            i2e4 -= 0x10000;
            var wpl7d = 0xd800 + (i2e4 >> 0xa),
                e5yju = 0xdc00 + (0x3ff & i2e4);
            return String['fromCharCode'](wpl7d, e5yju);
        }
        return String['fromCharCode'](i2e4);
    }
    function eiju5(zsh) {
        var o6szhq = zsh['slice'](0x1, -0x1);
        return o6szhq in sq6ohz ? sq6ohz[o6szhq] : '#' === o6szhq['charAt'](0x0) ? zhoqs(parseInt(o6szhq['substr'](0x1)['replace']('x', '0x'))) : (b42ei['error']('entity not found:' + zsh), zsh);
    }
    function lwdqs(glnd7) {
        if (glnd7 > ngbp4) {
            var np7ld = ro093['substring'](ngbp4, glnd7)['replace'](/&#?\w+;/g, eiju5);
            amvf && j5yeui(ngbp4), plw7ds['characters'](np7ld, 0x0, glnd7 - ngbp4), ngbp4 = glnd7;
        }
    }
    function j5yeui(n4b2yi, hz0q6o) {
        for (; n4b2yi >= ls76w && (hz0q6o = yei4['exec'](ro093));) mca_8x = hz0q6o['index'], ls76w = mca_8x + hz0q6o[0x0]['length'], amvf['lineNumber']++;
        amvf['columnNumber'] = n4b2yi - mca_8x + 0x1;
    }
    for (var mca_8x = 0x0, ls76w = 0x0, yei4 = /.*(?:\r\n?|\n)|.*$/g, amvf = plw7ds['locator'], bje4y = [{ 'currentNSMap': iy2e4 }], lsd7w6 = {}, ngbp4 = 0x0;;) {
        try {
            var p2b7n = ro093['indexOf']('<', ngbp4);
            if (0x0 > p2b7n) {
                if (!ro093['substr'](ngbp4)['match'](/^\s*$/)) {
                    var dlgw = plw7ds['doc'],
                        gwld7p = dlgw['createTextNode'](ro093['substr'](ngbp4));
                    dlgw['appendChild'](gwld7p), plw7ds['currentElement'] = gwld7p;
                }
                return;
            }
            switch (p2b7n > ngbp4 && lwdqs(p2b7n), ro093['charAt'](p2b7n + 0x1)) {
                case '/':
                    var rhzqo0 = ro093['indexOf']('>', p2b7n + 0x3),
                        hz6sq = ro093['substring'](p2b7n + 0x2, rhzqo0),
                        fvk9m$ = bje4y['pop']();
                    0x0 > rhzqo0 ? (hz6sq = ro093['substring'](p2b7n + 0x2)['replace'](/[\s<].*/, ''), b42ei['error']('end tag name: ' + hz6sq + ' is not complete:' + fvk9m$['tagName']), rhzqo0 = p2b7n + 0x1 + hz6sq['length']) : hz6sq['match'](/\s</) && (hz6sq = hz6sq['replace'](/[\s<].*/, ''), b42ei['error']('end tag name: ' + hz6sq + ' maybe not complete'), rhzqo0 = p2b7n + 0x1 + hz6sq['length']);
                    var vmc = fvk9m$['localNSMap'],
                        zh06oq = fvk9m$['tagName'] == hz6sq,
                        lp7s = zh06oq || fvk9m$['tagName'] && fvk9m$['tagName']['toLowerCase']() == hz6sq['toLowerCase']();
                    if (lp7s) {
                        if (plw7ds['endElement'](fvk9m$['uri'], fvk9m$['localName'], hz6sq), vmc) {
                            for (var qo60 in vmc) plw7ds['endPrefixMapping'](qo60);
                        }
                        zh06oq || b42ei['fatalError']('end tag name: ' + hz6sq + ' is not match the current start tagName:' + fvk9m$['tagName']);
                    } else bje4y['push'](fvk9m$);
                    rhzqo0++;
                    break;
                case '?':
                    amvf && j5yeui(p2b7n), rhzqo0 = _dejt15u(ro093, p2b7n, plw7ds);
                    break;
                case '!':
                    amvf && j5yeui(p2b7n), rhzqo0 = _dei42yb(ro093, p2b7n, plw7ds, b42ei);
                    break;
                default:
                    amvf && j5yeui(p2b7n);
                    var _avk = new _dye4ib2(),
                        pwlg = bje4y[bje4y['length'] - 0x1]['currentNSMap'],
                        rhzqo0 = _dvkmc_(ro093, p2b7n, _avk, pwlg, eiju5, b42ei),
                        d6sqwl = _avk['length'];
                    if (!_avk['closed'] && _de15jut(ro093, rhzqo0, _avk['tagName'], lsd7w6) && (_avk['closed'] = !0x0, sq6ohz['nbsp'] || b42ei['warning']('unclosed xml attribute')), amvf && d6sqwl) {
                        for (var r9o3z0 = _dwhqs(amvf, {}), je4ui = 0x0; d6sqwl > je4ui; je4ui++) {
                            var or03$ = _avk[je4ui];
                            j5yeui(or03$['offset']), or03$['locator'] = _dwhqs(amvf, {});
                        }
                        plw7ds['locator'] = r9o3z0, _dmacv_k(_avk, plw7ds, pwlg) && bje4y['push'](_avk), plw7ds['locator'] = amvf;
                    } else _dmacv_k(_avk, plw7ds, pwlg) && bje4y['push'](_avk);
                    'http://www.w3.org/1999/xhtml' !== _avk['uri'] || _avk['closed'] ? rhzqo0++ : rhzqo0 = _d$r039f(ro093, rhzqo0, _avk['tagName'], eiju5, plw7ds);
            }
        } catch (h6wdq) {
            b42ei['error']('element parse error: ' + h6wdq), rhzqo0 = -0x1;
        }
        rhzqo0 > ngbp4 ? ngbp4 = rhzqo0 : lwdqs(Math['max'](p2b7n, ngbp4) + 0x1);
    }
}
function _dwhqs(i2yb4n, z30orh) {
    return z30orh['lineNumber'] = i2yb4n['lineNumber'], z30orh['columnNumber'] = i2yb4n['columnNumber'], z30orh;
}
function _dvkmc_(z3ro90, qwshz6, dq6wls, l2pg, km9$vf, z60) {
    for (var b7gp2n, s6qhdw, byj4 = ++qwshz6, ynib2 = _dbniy24;;) {
        var yn4ib2 = z3ro90['charAt'](byj4);
        switch (yn4ib2) {
            case '=':
                if (ynib2 === _dqwh6sz) b7gp2n = z3ro90['slice'](qwshz6, byj4), ynib2 = _dmfkv$a;else {
                    if (ynib2 !== _db2n4g) throw new Error('attribute equal must after attrName');
                    ynib2 = _dmfkv$a;
                }
                break;
            case '\x27':
            case '\x22':
                if (ynib2 === _dmfkv$a || ynib2 === _dqwh6sz) {
                    if (ynib2 === _dqwh6sz && (z60['warning']('attribute value must after "="'), b7gp2n = z3ro90['slice'](qwshz6, byj4)), qwshz6 = byj4 + 0x1, byj4 = z3ro90['indexOf'](yn4ib2, qwshz6), !(byj4 > 0x0)) throw new Error('attribute value no end \'' + yn4ib2 + '\' match');
                    s6qhdw = z3ro90['slice'](qwshz6, byj4)['replace'](/&#?\w+;/g, km9$vf), dq6wls['add'](b7gp2n, s6qhdw, qwshz6 - 0x1), ynib2 = _dyb4ni2;
                } else {
                    if (ynib2 != _dhws6) throw new Error('attribute value must after "="');
                    s6qhdw = z3ro90['slice'](qwshz6, byj4)['replace'](/&#?\w+;/g, km9$vf), dq6wls['add'](b7gp2n, s6qhdw, qwshz6), z60['warning']('attribute "' + b7gp2n + '" missed start quot(' + yn4ib2 + ')!!'), qwshz6 = byj4 + 0x1, ynib2 = _dyb4ni2;
                }
                break;
            case '/':
                switch (ynib2) {
                    case _dbniy24:
                        dq6wls['setTagName'](z3ro90['slice'](qwshz6, byj4));
                    case _dyb4ni2:
                    case _dsql6w:
                    case _dldq6w:
                        ynib2 = _dldq6w, dq6wls['closed'] = !0x0;
                    case _dhws6:
                    case _dqwh6sz:
                    case _db2n4g:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return z60['error']('unexpected end of input'), ynib2 == _dbniy24 && dq6wls['setTagName'](z3ro90['slice'](qwshz6, byj4)), byj4;
            case '>':
                switch (ynib2) {
                    case _dbniy24:
                        dq6wls['setTagName'](z3ro90['slice'](qwshz6, byj4));
                    case _dyb4ni2:
                    case _dsql6w:
                    case _dldq6w:
                        break;
                    case _dhws6:
                    case _dqwh6sz:
                        s6qhdw = z3ro90['slice'](qwshz6, byj4), '/' === s6qhdw['slice'](-0x1) && (dq6wls['closed'] = !0x0, s6qhdw = s6qhdw['slice'](0x0, -0x1));
                    case _db2n4g:
                        ynib2 === _db2n4g && (s6qhdw = b7gp2n), ynib2 == _dhws6 ? (z60['warning']('attribute "' + s6qhdw + '" missed quot(")!!'), dq6wls['add'](b7gp2n, s6qhdw['replace'](/&#?\w+;/g, km9$vf), qwshz6)) : ('http://www.w3.org/1999/xhtml' === l2pg[''] && s6qhdw['match'](/^(?:disabled|checked|selected)$/i) || z60['warning']('attribute "' + s6qhdw + '" missed value!! "' + s6qhdw + '" instead!!'), dq6wls['add'](s6qhdw, s6qhdw, qwshz6));
                        break;
                    case _dmfkv$a:
                        throw new Error('attribute value missed!!');
                }
                return byj4;
            case '\u0080':
                yn4ib2 = '\x20';
            default:
                if ('\x20' >= yn4ib2) switch (ynib2) {
                    case _dbniy24:
                        dq6wls['setTagName'](z3ro90['slice'](qwshz6, byj4)), ynib2 = _dsql6w;
                        break;
                    case _dqwh6sz:
                        b7gp2n = z3ro90['slice'](qwshz6, byj4), ynib2 = _db2n4g;
                        break;
                    case _dhws6:
                        var s6qhdw = z3ro90['slice'](qwshz6, byj4)['replace'](/&#?\w+;/g, km9$vf);
                        z60['warning']('attribute "' + s6qhdw + '" missed quot(")!!'), dq6wls['add'](b7gp2n, s6qhdw, qwshz6);
                    case _dyb4ni2:
                        ynib2 = _dsql6w;
                } else switch (ynib2) {
                    case _db2n4g:
                        {
                            dq6wls['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === l2pg[''] && b7gp2n['match'](/^(?:disabled|checked|selected)$/i) || z60['warning']('attribute "' + b7gp2n + '" missed value!! "' + b7gp2n + '" instead2!!'), dq6wls['add'](b7gp2n, b7gp2n, qwshz6), qwshz6 = byj4, ynib2 = _dqwh6sz;
                        break;
                    case _dyb4ni2:
                        z60['warning']('attribute space is required"' + b7gp2n + '\x22!!');
                    case _dsql6w:
                        ynib2 = _dqwh6sz, qwshz6 = byj4;
                        break;
                    case _dmfkv$a:
                        ynib2 = _dhws6, qwshz6 = byj4;
                        break;
                    case _dldq6w:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        byj4++;
    }
}
function _dmacv_k(o6q0z, mcvx_a, dgl7p) {
    for (var eij5t = o6q0z['tagName'], k9rf3 = null, d7pslw = o6q0z['length']; d7pslw--;) {
        var pls7 = o6q0z[d7pslw],
            uj1t5e = pls7['qName'],
            i5jue = pls7['value'],
            hszo6q = uj1t5e['indexOf'](':');
        if (hszo6q > 0x0) var l7sd6 = pls7['prefix'] = uj1t5e['slice'](0x0, hszo6q),
            n27lg = uj1t5e['slice'](hszo6q + 0x1),
            $m9kvf = 'xmlns' === l7sd6 && n27lg;else n27lg = uj1t5e, l7sd6 = null, $m9kvf = 'xmlns' === uj1t5e && '';
        pls7['localName'] = n27lg, $m9kvf !== !0x1 && (null == k9rf3 && (k9rf3 = {}, _dyie5ju(dgl7p, dgl7p = {})), dgl7p[$m9kvf] = k9rf3[$m9kvf] = i5jue, pls7['uri'] = 'http://www.w3.org/2000/xmlns/', mcvx_a['startPrefixMapping']($m9kvf, i5jue));
    }
    for (var d7pslw = o6q0z['length']; d7pslw--;) {
        pls7 = o6q0z[d7pslw];
        var l7sd6 = pls7['prefix'];
        l7sd6 && ('xml' === l7sd6 && (pls7['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== l7sd6 && (pls7['uri'] = dgl7p[l7sd6 || '']));
    }
    var hszo6q = eij5t['indexOf'](':');
    hszo6q > 0x0 ? (l7sd6 = o6q0z['prefix'] = eij5t['slice'](0x0, hszo6q), n27lg = o6q0z['localName'] = eij5t['slice'](hszo6q + 0x1)) : (l7sd6 = null, n27lg = o6q0z['localName'] = eij5t);
    var lpwdg7 = o6q0z['uri'] = dgl7p[l7sd6 || ''];
    if (mcvx_a['startElement'](lpwdg7, n27lg, eij5t, o6q0z), !o6q0z['closed']) return o6q0z['currentNSMap'] = dgl7p, o6q0z['localNSMap'] = k9rf3, !0x0;
    if (mcvx_a['endElement'](lpwdg7, n27lg, eij5t), k9rf3) {
        for (l7sd6 in k9rf3) mcvx_a['endPrefixMapping'](l7sd6);
    }
}
function _d$r039f($fv39k, wl6dq, juit5e, jyu5i, ro$09) {
    if (/^(?:script|textarea)$/i['test'](juit5e)) {
        var k_amvf = $fv39k['indexOf']('</' + juit5e + '>', wl6dq),
            pl7gn = $fv39k['substring'](wl6dq + 0x1, k_amvf);
        if (/[&<]/['test'](pl7gn)) return (/^script$/i['test'](juit5e) ? (ro$09['characters'](pl7gn, 0x0, pl7gn['length']), k_amvf) : (pl7gn = pl7gn['replace'](/&#?\w+;/g, jyu5i), ro$09['characters'](pl7gn, 0x0, pl7gn['length']), k_amvf)
        );
    }
    return wl6dq + 0x1;
}
function _de15jut(g2b4n, qdw, $vmkf9, kmf_v) {
    var $f3v9 = kmf_v[$vmkf9];
    return null == $f3v9 && ($f3v9 = g2b4n['lastIndexOf']('</' + $vmkf9 + '>'), qdw > $f3v9 && ($f3v9 = g2b4n['lastIndexOf']('</' + $vmkf9)), kmf_v[$vmkf9] = $f3v9), qdw > $f3v9;
}
function _dyie5ju(ro$390, amxc8) {
    for (var fv93$ in ro$390) amxc8[fv93$] = ro$390[fv93$];
}
function _dei42yb(ck_va, g2bn4y, q0z6ho, zq6ws) {
    var b4ey2i = ck_va['charAt'](g2bn4y + 0x2);
    switch (b4ey2i) {
        case '-':
            if ('-' === ck_va['charAt'](g2bn4y + 0x3)) {
                var z6soqh = ck_va['indexOf']('-->', g2bn4y + 0x4);
                return z6soqh > g2bn4y ? (q0z6ho['comment'](ck_va, g2bn4y + 0x4, z6soqh - g2bn4y - 0x4), z6soqh + 0x3) : (zq6ws['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == ck_va['substr'](g2bn4y + 0x3, 0x6)) {
                var z6soqh = ck_va['indexOf'](']]>', g2bn4y + 0x9);
                return q0z6ho['startCDATA'](), q0z6ho['characters'](ck_va, g2bn4y + 0x9, z6soqh - g2bn4y - 0x9), q0z6ho['endCDATA'](), z6soqh + 0x3;
            }
            var yi4uj = _dh6qwds(ck_va, g2bn4y),
                vkf3$ = yi4uj['length'];
            if (vkf3$ > 0x1 && /!doctype/i['test'](yi4uj[0x0][0x0])) {
                var r3f = yi4uj[0x1][0x0],
                    f3r9$k = vkf3$ > 0x3 && /^public$/i['test'](yi4uj[0x2][0x0]) && yi4uj[0x3][0x0],
                    z9r30 = vkf3$ > 0x4 && yi4uj[0x4][0x0],
                    ql6sw = yi4uj[vkf3$ - 0x1];
                return q0z6ho['startDTD'](r3f, f3r9$k && f3r9$k['replace'](/^(['"])(.*?)\1$/, '$2'), z9r30 && z9r30['replace'](/^(['"])(.*?)\1$/, '$2')), q0z6ho['endDTD'](), ql6sw['index'] + ql6sw[0x0]['length'];
            }
    }
    return -0x1;
}
function _dejt15u(yi2n4, eijuy4, ng24by) {
    var jue5t1 = yi2n4['indexOf']('?>', eijuy4);
    if (jue5t1) {
        var f9kv$ = yi2n4['substring'](eijuy4, jue5t1)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (f9kv$) {
            {
                f9kv$[0x0]['length'];
            }
            return ng24by['processingInstruction'](f9kv$[0x1], f9kv$[0x2]), jue5t1 + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function _dye4ib2() {}
function _deji5(m9fkv$, sdw7) {
    return m9fkv$['__proto__'] = sdw7, m9fkv$;
}
function _dh6qwds(qlwd6, b4) {
    var sldw7p,
        zoq6h = [],
        rk$ = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (rk$['lastIndex'] = b4, rk$['exec'](qlwd6); sldw7p = rk$['exec'](qlwd6);) if (zoq6h['push'](sldw7p), sldw7p[0x1]) return zoq6h;
}
var _d$kmafv = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    _damv_xc = new RegExp('[\\-\\.0-9' + _d$kmafv['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    _dbnpg = new RegExp('^' + _d$kmafv['source'] + _damv_xc['source'] + '*(?::' + _d$kmafv['source'] + _damv_xc['source'] + '*)?$'),
    _dbniy24 = 0x0,
    _dqwh6sz = 0x1,
    _db2n4g = 0x2,
    _dmfkv$a = 0x3,
    _dhws6 = 0x4,
    _dyb4ni2 = 0x5,
    _dsql6w = 0x6,
    _dldq6w = 0x7;
_dbpgn7['prototype'] = {
    'parse': function (dp7wgl, bey4, rohz) {
        var o$r3 = this['domBuilder'];
        o$r3['startDocument'](), _dyie5ju(bey4, bey4 = {}), _dye42(dp7wgl, bey4, rohz, o$r3, this['errorHandler']), o$r3['endDocument']();
    }
}, _dye4ib2['prototype'] = {
    'setTagName': function (zo0q6h) {
        if (!_dbnpg['test'](zo0q6h)) throw new Error('invalid tagName:' + zo0q6h);
        this['tagName'] = zo0q6h;
    },
    'add': function (yjeiu4, pn7g, d6hs) {
        if (!_dbnpg['test'](yjeiu4)) throw new Error('invalid attribute:' + yjeiu4);
        this[this['length']++] = {
            'qName': yjeiu4,
            'value': pn7g,
            'offset': d6hs
        };
    },
    'length': 0x0,
    'getLocalName': function (wzqs) {
        return this[wzqs]['localName'];
    },
    'getLocator': function (cxv_ma) {
        return this[cxv_ma]['locator'];
    },
    'getQName': function (bg27) {
        return this[bg27]['qName'];
    },
    'getURI': function (i42yeb) {
        return this[i42yeb]['uri'];
    },
    'getValue': function (a_xv) {
        return this[a_xv]['value'];
    }
}, _deji5({}, _deji5['prototype']) instanceof _deji5 || (_deji5 = function (g2pnl7, jibye) {
    function fka$vm() {}
    fka$vm['prototype'] = jibye, fka$vm = new fka$vm();
    for (jibye in g2pnl7) fka$vm[jibye] = g2pnl7[jibye];
    return fka$vm;
}), exports['XMLReader'] = _dbpgn7;