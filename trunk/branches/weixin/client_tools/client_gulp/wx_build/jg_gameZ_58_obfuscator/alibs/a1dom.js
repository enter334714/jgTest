var c = wx.$a;
function gq8t75(vhzk6, k6zq8d) {
    for (var x1f in vhzk6) k6zq8d[x1f] = vhzk6[x1f];
}
function gqdk6(ug_w2, d68qrt) {
    function _ey04() {}
    var nhs = ug_w2['prototype'];
    if (Object['create']) {
        var p537i = Object['create'](d68qrt['prototype']);
        nhs['__proto__'] = p537i;
    }
    nhs instanceof d68qrt || (_ey04['prototype'] = d68qrt['prototype'], _ey04 = new _ey04(), gq8t75(nhs, _ey04), ug_w2['prototype'] = nhs = _ey04), nhs['constructor'] != ug_w2 && ('function' != typeof ug_w2 && console['error']('unknow Class:' + ug_w2), nhs['constructor'] = ug_w2);
}
function g_ew4u(y0_c, d6zkvh) {
    if (d6zkvh instanceof Error) var kqz6h = d6zkvh;else kqz6h = this, Error['call'](this, go4uw_[y0_c]), this['message'] = go4uw_[y0_c], Error['captureStackTrace'] && Error['captureStackTrace'](this, g_ew4u);
    return kqz6h['code'] = y0_c, d6zkvh && (this['message'] = this['message'] + ':\x20' + d6zkvh), kqz6h;
}
function gdt6qr8() {}
function ga$ml9(clma$b, sjfxn) {
    this['_node'] = clma$b, this['_refresh'] = sjfxn, gw_4o(this);
}
function gw_4o(jnfsvx) {
    var ylb$cm = jnfsvx['_node']['_inc'] || jnfsvx['_node']['ownerDocument']['_inc'];
    if (jnfsvx['_inc'] != ylb$cm) {
        var x2gf1u = jnfsvx['_refresh'](jnfsvx['_node']);
        gvfsx(jnfsvx, 'length', x2gf1u['length']), gq8t75(x2gf1u, jnfsvx), jnfsvx['_inc'] = ylb$cm;
    }
}
function gfsn1() {}
function gt58r3(b$cm, bam$lc) {
    for (var kdhq = b$cm['length']; kdhq--;) if (b$cm[kdhq] === bam$lc) return kdhq;
}
function gml9$(k6qdhz, k6hzqd, r85t, xjs1) {
    if (xjs1 ? k6hzqd[gt58r3(k6hzqd, xjs1)] = r85t : k6hzqd[k6hzqd['length']++] = r85t, k6qdhz) {
        r85t['ownerElement'] = k6qdhz;
        var ouwe_4 = k6qdhz['ownerDocument'];
        ouwe_4 && (xjs1 && gge4_(ouwe_4, k6qdhz, xjs1), gdtq8r(ouwe_4, k6qdhz, r85t));
    }
}
function gq58dtr(zhvjsn, _e0oy4, hnxv) {
    var $bm = gt58r3(_e0oy4, hnxv);
    if (!($bm >= 0x0)) throw g_ew4u(gxf1ns, new Error(zhvjsn['tagName'] + '@' + hnxv));
    for (var p5r7i3 = _e0oy4['length'] - 0x1; p5r7i3 > $bm;) _e0oy4[$bm] = _e0oy4[++$bm];
    if (_e0oy4['length'] = p5r7i3, zhvjsn) {
        var tpr3 = zhvjsn['ownerDocument'];
        tpr3 && (gge4_(tpr3, zhvjsn, hnxv), hnxv['ownerElement'] = null);
    }
}
function g$o0c(l$macb) {
    if (this['_features'] = {}, l$macb) {
        for (var $abml in l$macb) this['_features'] = l$macb[$abml];
    }
}
function ggx2s1f() {}
function gr8t3(tr7q85) {
    return '<' == tr7q85 && '&lt;' || '>' == tr7q85 && '&gt;' || '&' == tr7q85 && '&amp;' || '\x22' == tr7q85 && '&quot;' || '&#' + tr7q85['charCodeAt']() + ';';
}
function gs1f2(dzqkh6, vfnjx) {
    if (vfnjx(dzqkh6)) return !0x0;
    if (dzqkh6 = dzqkh6['firstChild']) {
        do if (gs1f2(dzqkh6, vfnjx)) return !0x0; while (dzqkh6 = dzqkh6['nextSibling']);
    }
}
function gc04ybo() {}
function gdtq8r(r6dtq, byc40o, tdr8q) {
    r6dtq && r6dtq['_inc']++;
    var ow4e0_ = tdr8q['namespaceURI'];
    'http://www.w3.org/2000/xmlns/' == ow4e0_ && (byc40o['_nsMap'][tdr8q['prefix'] ? tdr8q['localName'] : ''] = tdr8q['value']);
}
function gge4_(zvkh, khjzn, b9ma$l) {
    zvkh && zvkh['_inc']++;
    var u2fgx1 = b9ma$l['namespaceURI'];
    'http://www.w3.org/2000/xmlns/' == u2fgx1 && delete khjzn['_nsMap'][b9ma$l['prefix'] ? b9ma$l['localName'] : ''];
}
function gd6zq8k(jxhnv, _ewo4, cbylm$) {
    if (jxhnv && jxhnv['_inc']) {
        jxhnv['_inc']++;
        var knhv6z = _ewo4['childNodes'];
        if (cbylm$) knhv6z[knhv6z['length']++] = cbylm$;else {
            for (var dtr5q = _ewo4['firstChild'], b$coy0 = 0x0; dtr5q;) knhv6z[b$coy0++] = dtr5q, dtr5q = dtr5q['nextSibling'];
            knhv6z['length'] = b$coy0;
        }
    }
}
function grt87q(uwge_, vd6zh) {
    var vjnszh = vd6zh['previousSibling'],
        td5qr = vd6zh['nextSibling'];
    return vjnszh ? vjnszh['nextSibling'] = td5qr : uwge_['firstChild'] = td5qr, td5qr ? td5qr['previousSibling'] = vjnszh : uwge_['lastChild'] = vjnszh, gd6zq8k(uwge_['ownerDocument'], uwge_), vd6zh;
}
function ggu1f2(e_owu, q6dtk, d5tqr) {
    var d5qr8 = q6dtk['parentNode'];
    if (d5qr8 && d5qr8['removeChild'](q6dtk), q6dtk['nodeType'] === gjnhzv) {
        var egu_ = q6dtk['firstChild'];
        if (null == egu_) return q6dtk;
        var kt86dq = q6dtk['lastChild'];
    } else egu_ = kt86dq = q6dtk;
    var i3p57 = d5tqr ? d5tqr['previousSibling'] : e_owu['lastChild'];
    egu_['previousSibling'] = i3p57, kt86dq['nextSibling'] = d5tqr, i3p57 ? i3p57['nextSibling'] = egu_ : e_owu['firstChild'] = egu_, null == d5tqr ? e_owu['lastChild'] = kt86dq : d5tqr['previousSibling'] = kt86dq;
    do egu_['parentNode'] = e_owu; while (egu_ !== kt86dq && (egu_ = egu_['nextSibling']));
    return gd6zq8k(e_owu['ownerDocument'] || e_owu, e_owu), q6dtk['nodeType'] == gjnhzv && (q6dtk['firstChild'] = q6dtk['lastChild'] = null), q6dtk;
}
function gg4_ewu(kdq86t, labm9) {
    var g1fx = labm9['parentNode'];
    if (g1fx) {
        var fnjsvx = kdq86t['lastChild'];
        g1fx['removeChild'](labm9);
        var fnjsvx = kdq86t['lastChild'];
    }
    var fnjsvx = kdq86t['lastChild'];
    return labm9['parentNode'] = kdq86t, labm9['previousSibling'] = fnjsvx, labm9['nextSibling'] = null, fnjsvx ? fnjsvx['nextSibling'] = labm9 : kdq86t['firstChild'] = labm9, kdq86t['lastChild'] = labm9, gd6zq8k(kdq86t['ownerDocument'], kdq86t, labm9), labm9;
}
function gc$malb() {
    this['_nsMap'] = {};
}
function ghxvjs() {}
function ghnjvx() {}
function gr5q8d() {}
function gm$l9ba() {}
function ghdkqz6() {}
function gylcm() {}
function galbmc() {}
function gq5rt7() {}
function gqtdr86() {}
function gzhnjs() {}
function ge2w1g() {}
function gnzjhvk() {}
function gz6dvhk(szvnjh, u1xfg2) {
    var mblac$ = [],
        uf2g1 = 0x9 == this['nodeType'] ? this['documentElement'] : this,
        jsnvfx = uf2g1['prefix'],
        xvhjs = uf2g1['namespaceURI'];
    if (xvhjs && null == jsnvfx) {
        var jsnvfx = uf2g1['lookupPrefix'](xvhjs);
        if (null == jsnvfx) var cam$ = [{
            'namespace': xvhjs,
            'prefix': null
        }];
    }
    return gzkvn6(this, mblac$, szvnjh, u1xfg2, cam$), mblac$['join']('');
}
function gdk8t($bla9, kqzd68, vjkzhn) {
    var r75tp = $bla9['prefix'] || '',
        l0cyb$ = $bla9['namespaceURI'];
    if (!r75tp && !l0cyb$) return !0x1;
    if ('xml' === r75tp && 'http://www.w3.org/XML/1998/namespace' === l0cyb$ || 'http://www.w3.org/2000/xmlns/' == l0cyb$) return !0x1;
    for (var ge4uw = vjkzhn['length']; ge4uw--;) {
        var d8t5qr = vjkzhn[ge4uw];
        if (d8t5qr['prefix'] == r75tp) return d8t5qr['namespace'] != l0cyb$;
    }
    return !0x0;
}
function gzkvn6(fu2gx1, s12gf, yocb$0, ybcl, qt8dr) {
    if (ybcl) {
        if (fu2gx1 = ybcl(fu2gx1), !fu2gx1) return;
        if ('string' == typeof fu2gx1) return s12gf['push'](fu2gx1), void 0x0;
    }
    switch (fu2gx1['nodeType']) {
        case g_yo40:
            qt8dr || (qt8dr = []);
            var sj1 = (qt8dr['length'], fu2gx1['attributes']),
                u2f1g = sj1['length'],
                zh6knv = fu2gx1['firstChild'],
                kvz6h = fu2gx1['tagName'];
            yocb$0 = gjnkhz === fu2gx1['namespaceURI'] || yocb$0, s12gf['push']('<', kvz6h);
            for (var gwu_e2 = 0x0; u2f1g > gwu_e2; gwu_e2++) {
                var eu12gw = sj1['item'](gwu_e2);
                'xmlns' == eu12gw['prefix'] ? qt8dr['push']({
                    'prefix': eu12gw['localName'],
                    'namespace': eu12gw['value']
                }) : 'xmlns' == eu12gw['nodeName'] && qt8dr['push']({
                    'prefix': '',
                    'namespace': eu12gw['value']
                });
            }
            for (var gwu_e2 = 0x0; u2f1g > gwu_e2; gwu_e2++) {
                var eu12gw = sj1['item'](gwu_e2);
                if (gdk8t(eu12gw, yocb$0, qt8dr)) {
                    var xjhsv = eu12gw['prefix'] || '',
                        byl$0c = eu12gw['namespaceURI'],
                        by0lc = xjhsv ? ' xmlns:' + xjhsv : ' xmlns';
                    s12gf['push'](by0lc, '=\x22', byl$0c, '\x22'), qt8dr['push']({
                        'prefix': xjhsv,
                        'namespace': byl$0c
                    });
                }
                gzkvn6(eu12gw, s12gf, yocb$0, ybcl, qt8dr);
            }
            if (gdk8t(fu2gx1, yocb$0, qt8dr)) {
                var xjhsv = fu2gx1['prefix'] || '',
                    byl$0c = fu2gx1['namespaceURI'],
                    by0lc = xjhsv ? ' xmlns:' + xjhsv : ' xmlns';
                s12gf['push'](by0lc, '=\x22', byl$0c, '\x22'), qt8dr['push']({
                    'prefix': xjhsv,
                    'namespace': byl$0c
                });
            }
            if (zh6knv || yocb$0 && !/^(?:meta|link|img|br|hr|input)$/i['test'](kvz6h)) {
                if (s12gf['push']('>'), yocb$0 && /^script$/i['test'](kvz6h)) {
                    for (; zh6knv;) zh6knv['data'] ? s12gf['push'](zh6knv['data']) : gzkvn6(zh6knv, s12gf, yocb$0, ybcl, qt8dr), zh6knv = zh6knv['nextSibling'];
                } else {
                    for (; zh6knv;) gzkvn6(zh6knv, s12gf, yocb$0, ybcl, qt8dr), zh6knv = zh6knv['nextSibling'];
                }
                s12gf['push']('</', kvz6h, '>');
            } else s12gf['push']('/>');
            return;
        case gnkhvz6:
        case gjnhzv:
            for (var zh6knv = fu2gx1['firstChild']; zh6knv;) gzkvn6(zh6knv, s12gf, yocb$0, ybcl, qt8dr), zh6knv = zh6knv['nextSibling'];
            return;
        case ghzjsvn:
            return s12gf['push']('\x20', fu2gx1['name'], '=\x22', fu2gx1['value']['replace'](/[<&"]/g, gr8t3), '\x22');
        case ga9$b:
            return s12gf['push'](fu2gx1['data']['replace'](/[<&]/g, gr8t3));
        case ghnkjvz:
            return s12gf['push']('<![CDATA[', fu2gx1['data'], ']]>');
        case gybc4:
            return s12gf['push']('<!--', fu2gx1['data'], '-->');
        case gtrq:
            var o0b$y = fu2gx1['publicId'],
                hzqdk6 = fu2gx1['systemId'];
            if (s12gf['push']('<!DOCTYPE ', fu2gx1['name']), o0b$y) s12gf['push'](' PUBLIC "', o0b$y), hzqdk6 && '.' != hzqdk6 && s12gf['push']('\x22\x20\x22', hzqdk6), s12gf['push']('\x22>');else {
                if (hzqdk6 && '.' != hzqdk6) s12gf['push'](' SYSTEM "', hzqdk6, '\x22>');else {
                    var vsjxnf = fu2gx1['internalSubset'];
                    vsjxnf && s12gf['push']('\x20[', vsjxnf, ']'), s12gf['push']('>');
                }
            }
            return;
        case gvnz6k:
            return s12gf['push']('<?', fu2gx1['target'], '\x20', fu2gx1['data'], '?>');
        case gsfvj:
            return s12gf['push']('&', fu2gx1['nodeName'], ';');
        default:
            s12gf['push']('??', fu2gx1['nodeName']);
    }
}
function gr5d(u2f, dzk6h, bca$ml) {
    var r3pi75;
    switch (dzk6h['nodeType']) {
        case g_yo40:
            r3pi75 = dzk6h['cloneNode'](!0x1), r3pi75['ownerDocument'] = u2f;
        case gjnhzv:
            break;
        case ghzjsvn:
            bca$ml = !0x0;
    }
    if (r3pi75 || (r3pi75 = dzk6h['cloneNode'](!0x1)), r3pi75['ownerDocument'] = u2f, r3pi75['parentNode'] = null, bca$ml) {
        for (var my$cb = dzk6h['firstChild']; my$cb;) r3pi75['appendChild'](gr5d(u2f, my$cb, bca$ml)), my$cb = my$cb['nextSibling'];
    }
    return r3pi75;
}
function g_gw(kq6hdz, yc4, n6zkv) {
    var dv6 = new yc4['constructor']();
    for (var oby0c$ in yc4) {
        var xf2gs = yc4[oby0c$];
        'object' != typeof xf2gs && xf2gs != dv6[oby0c$] && (dv6[oby0c$] = xf2gs);
    }
    switch (yc4['childNodes'] && (dv6['childNodes'] = new gdt6qr8()), dv6['ownerDocument'] = kq6hdz, dv6['nodeType']) {
        case g_yo40:
            var dzk6q8 = yc4['attributes'],
                clab$m = dv6['attributes'] = new gfsn1(),
                t68dk = dzk6q8['length'];
            clab$m['_ownerElement'] = dv6;
            for (var nhx = 0x0; t68dk > nhx; nhx++) dv6['setAttributeNode'](g_gw(kq6hdz, dzk6q8['item'](nhx), !0x0));
            break;
        case ghzjsvn:
            n6zkv = !0x0;
    }
    if (n6zkv) {
        for (var y_o40 = yc4['firstChild']; y_o40;) dv6['appendChild'](g_gw(kq6hdz, y_o40, n6zkv)), y_o40 = y_o40['nextSibling'];
    }
    return dv6;
}
function gvfsx(by$c0o, wf1u, $mlbcy) {
    by$c0o[wf1u] = $mlbcy;
}
function gdvkz($lmba) {
    switch ($lmba['nodeType']) {
        case g_yo40:
        case gjnhzv:
            var k6zdqh = [];
            for ($lmba = $lmba['firstChild']; $lmba;) 0x7 !== $lmba['nodeType'] && 0x8 !== $lmba['nodeType'] && k6zdqh['push'](gdvkz($lmba)), $lmba = $lmba['nextSibling'];
            return k6zdqh['join']('');
        default:
            return $lmba['nodeValue'];
    }
}
var gjnkhz = 'http://www.w3.org/1999/xhtml',
    gnjsfv = {},
    g_yo40 = gnjsfv['ELEMENT_NODE'] = 0x1,
    ghzjsvn = gnjsfv['ATTRIBUTE_NODE'] = 0x2,
    ga9$b = gnjsfv['TEXT_NODE'] = 0x3,
    ghnkjvz = gnjsfv['CDATA_SECTION_NODE'] = 0x4,
    gsfvj = gnjsfv['ENTITY_REFERENCE_NODE'] = 0x5,
    gyo04e = gnjsfv['ENTITY_NODE'] = 0x6,
    gvnz6k = gnjsfv['PROCESSING_INSTRUCTION_NODE'] = 0x7,
    gybc4 = gnjsfv['COMMENT_NODE'] = 0x8,
    gnkhvz6 = gnjsfv['DOCUMENT_NODE'] = 0x9,
    gtrq = gnjsfv['DOCUMENT_TYPE_NODE'] = 0xa,
    gjnhzv = gnjsfv['DOCUMENT_FRAGMENT_NODE'] = 0xb,
    gkqt6d = gnjsfv['NOTATION_NODE'] = 0xc,
    gvsnxj = {},
    go4uw_ = {},
    gbalcm$ = gvsnxj['INDEX_SIZE_ERR'] = (go4uw_[0x1] = 'Index size error', 0x1),
    gugwf1 = gvsnxj['DOMSTRING_SIZE_ERR'] = (go4uw_[0x2] = 'DOMString size error', 0x2),
    gxvnfj = gvsnxj['HIERARCHY_REQUEST_ERR'] = (go4uw_[0x3] = 'Hierarchy request error', 0x3),
    ggwue_2 = gvsnxj['WRONG_DOCUMENT_ERR'] = (go4uw_[0x4] = 'Wrong document', 0x4),
    gmcbly = gvsnxj['INVALID_CHARACTER_ERR'] = (go4uw_[0x5] = 'Invalid character', 0x5),
    gdqt6r = gvsnxj['NO_DATA_ALLOWED_ERR'] = (go4uw_[0x6] = 'No data allowed', 0x6),
    gr753pt = gvsnxj['NO_MODIFICATION_ALLOWED_ERR'] = (go4uw_[0x7] = 'No modification allowed', 0x7),
    gxf1ns = gvsnxj['NOT_FOUND_ERR'] = (go4uw_[0x8] = 'Not found', 0x8),
    ghk6zd = gvsnxj['NOT_SUPPORTED_ERR'] = (go4uw_[0x9] = 'Not supported', 0x9),
    guw_o4e = gvsnxj['INUSE_ATTRIBUTE_ERR'] = (go4uw_[0xa] = 'Attribute in use', 0xa),
    gy0o4e = gvsnxj['INVALID_STATE_ERR'] = (go4uw_[0xb] = 'Invalid state', 0xb),
    gd5rtq = gvsnxj['SYNTAX_ERR'] = (go4uw_[0xc] = 'Syntax error', 0xc),
    gzvk6hd = gvsnxj['INVALID_MODIFICATION_ERR'] = (go4uw_[0xd] = 'Invalid modification', 0xd),
    g_0yoc = gvsnxj['NAMESPACE_ERR'] = (go4uw_[0xe] = 'Invalid namespace', 0xe),
    gweu4 = gvsnxj['INVALID_ACCESS_ERR'] = (go4uw_[0xf] = 'Invalid access', 0xf);
g_ew4u['prototype'] = Error['prototype'], gq8t75(gvsnxj, g_ew4u), gdt6qr8['prototype'] = {
    'length': 0x0,
    'item': function (l$ymb) {
        return this[l$ymb] || null;
    },
    'toString': function (fnjsx, xfsj12) {
        for (var _c4oy0 = [], vzkjh = 0x0; vzkjh < this['length']; vzkjh++) gzkvn6(this[vzkjh], _c4oy0, fnjsx, xfsj12);
        return _c4oy0['join']('');
    }
}, ga$ml9['prototype']['item'] = function (zvd6h) {
    return gw_4o(this), this[zvd6h];
}, gqdk6(ga$ml9, gdt6qr8), gfsn1['prototype'] = {
    'length': 0x0,
    'item': gdt6qr8['prototype']['item'],
    'getNamedItem': function (hnzvjs) {
        for (var d6khv = this['length']; d6khv--;) {
            var r37t58 = this[d6khv];
            if (r37t58['nodeName'] == hnzvjs) return r37t58;
        }
    },
    'setNamedItem': function (cyblm$) {
        var t8q6kd = cyblm$['ownerElement'];
        if (t8q6kd && t8q6kd != this['_ownerElement']) throw new g_ew4u(guw_o4e);
        var ri7p3 = this['getNamedItem'](cyblm$['nodeName']);
        return gml9$(this['_ownerElement'], this, cyblm$, ri7p3), ri7p3;
    },
    'setNamedItemNS': function (a$cmb) {
        var knzhv6,
            b0lyc = a$cmb['ownerElement'];
        if (b0lyc && b0lyc != this['_ownerElement']) throw new g_ew4u(guw_o4e);
        return knzhv6 = this['getNamedItemNS'](a$cmb['namespaceURI'], a$cmb['localName']), gml9$(this['_ownerElement'], this, a$cmb, knzhv6), knzhv6;
    },
    'removeNamedItem': function (fu21gx) {
        var bycm$ = this['getNamedItem'](fu21gx);
        return gq58dtr(this['_ownerElement'], this, bycm$), bycm$;
    },
    'removeNamedItemNS': function (rt875, vsn) {
        var jnsfvx = this['getNamedItemNS'](rt875, vsn);
        return gq58dtr(this['_ownerElement'], this, jnsfvx), jnsfvx;
    },
    'getNamedItemNS': function (cmalb$, $alcm) {
        for (var nzhv6k = this['length']; nzhv6k--;) {
            var by04co = this[nzhv6k];
            if (by04co['localName'] == $alcm && by04co['namespaceURI'] == cmalb$) return by04co;
        }
        return null;
    }
}, g$o0c['prototype'] = {
    'hasFeature': function (c0yb4, kzqd6h) {
        var dqzkh6 = this['_features'][c0yb4['toLowerCase']()];
        return dqzkh6 && (!kzqd6h || kzqd6h in dqzkh6) ? !0x0 : !0x1;
    },
    'createDocument': function (hsvnx, oc4y0_, c_40y) {
        var ge_4 = new gc04ybo();
        if (ge_4['implementation'] = this, ge_4['childNodes'] = new gdt6qr8(), ge_4['doctype'] = c_40y, c_40y && ge_4['appendChild'](c_40y), oc4y0_) {
            var al$bc = ge_4['createElementNS'](hsvnx, oc4y0_);
            ge_4['appendChild'](al$bc);
        }
        return ge_4;
    },
    'createDocumentType': function (x1sg2, jnkvz, ycmb) {
        var rip375 = new gylcm();
        return rip375['name'] = x1sg2, rip375['nodeName'] = x1sg2, rip375['publicId'] = jnkvz, rip375['systemId'] = ycmb, rip375;
    }
}, ggx2s1f['prototype'] = {
    'firstChild': null,
    'lastChild': null,
    'previousSibling': null,
    'nextSibling': null,
    'attributes': null,
    'parentNode': null,
    'childNodes': null,
    'ownerDocument': null,
    'nodeValue': null,
    'namespaceURI': null,
    'prefix': null,
    'localName': null,
    'insertBefore': function (hzvdk6, $ml9b) {
        return ggu1f2(this, hzvdk6, $ml9b);
    },
    'replaceChild': function (l$cby, co4_y0) {
        this['insertBefore'](l$cby, co4_y0), co4_y0 && this['removeChild'](co4_y0);
    },
    'removeChild': function (ns1xfj) {
        return grt87q(this, ns1xfj);
    },
    'appendChild': function (zhvjk) {
        return this['insertBefore'](zhvjk, null);
    },
    'hasChildNodes': function () {
        return null != this['firstChild'];
    },
    'cloneNode': function (g1fu) {
        return g_gw(this['ownerDocument'] || this, this, g1fu);
    },
    'normalize': function () {
        for (var $o0by = this['firstChild']; $o0by;) {
            var nsvjhx = $o0by['nextSibling'];
            nsvjhx && nsvjhx['nodeType'] == ga9$b && $o0by['nodeType'] == ga9$b ? (this['removeChild'](nsvjhx), $o0by['appendData'](nsvjhx['data'])) : ($o0by['normalize'](), $o0by = nsvjhx);
        }
    },
    'isSupported': function (u_g, xvnjf) {
        return this['ownerDocument']['implementation']['hasFeature'](u_g, xvnjf);
    },
    'hasAttributes': function () {
        return this['attributes']['length'] > 0x0;
    },
    'lookupPrefix': function (cb$y0l) {
        for (var bam$c = this; bam$c;) {
            var co40y_ = bam$c['_nsMap'];
            if (co40y_) {
                for (var $labmc in co40y_) if (co40y_[$labmc] == cb$y0l) return $labmc;
            }
            bam$c = bam$c['nodeType'] == ghzjsvn ? bam$c['ownerDocument'] : bam$c['parentNode'];
        }
        return null;
    },
    'lookupNamespaceURI': function (b0$cy) {
        for (var lcm$ab = this; lcm$ab;) {
            var w2fu = lcm$ab['_nsMap'];
            if (w2fu && b0$cy in w2fu) return w2fu[b0$cy];
            lcm$ab = lcm$ab['nodeType'] == ghzjsvn ? lcm$ab['ownerDocument'] : lcm$ab['parentNode'];
        }
        return null;
    },
    'isDefaultNamespace': function (khzq) {
        var sf1g2 = this['lookupPrefix'](khzq);
        return null == sf1g2;
    }
}, gq8t75(gnjsfv, ggx2s1f), gq8t75(gnjsfv, ggx2s1f['prototype']), gc04ybo['prototype'] = {
    'nodeName': '#document',
    'nodeType': gnkhvz6,
    'doctype': null,
    'documentElement': null,
    '_inc': 0x1,
    'insertBefore': function (i75r3p, _ewug) {
        if (i75r3p['nodeType'] == gjnhzv) {
            for (var zqh6k = i75r3p['firstChild']; zqh6k;) {
                var obc0$ = zqh6k['nextSibling'];
                this['insertBefore'](zqh6k, _ewug), zqh6k = obc0$;
            }
            return i75r3p;
        }
        return null == this['documentElement'] && i75r3p['nodeType'] == g_yo40 && (this['documentElement'] = i75r3p), ggu1f2(this, i75r3p, _ewug), i75r3p['ownerDocument'] = this, i75r3p;
    },
    'removeChild': function (wg2e) {
        return this['documentElement'] == wg2e && (this['documentElement'] = null), grt87q(this, wg2e);
    },
    'importNode': function (wg4e_u, ew4_gu) {
        return gr5d(this, wg4e_u, ew4_gu);
    },
    'getElementById': function (vxjhs) {
        var u2_wg = null;
        return gs1f2(this['documentElement'], function (hsnz) {
            return hsnz['nodeType'] == g_yo40 && hsnz['getAttribute']('id') == vxjhs ? (u2_wg = hsnz, !0x0) : void 0x0;
        }), u2_wg;
    },
    'createElement': function (dkh6zv) {
        var l0cb = new gc$malb();
        l0cb['ownerDocument'] = this, l0cb['nodeName'] = dkh6zv, l0cb['tagName'] = dkh6zv, l0cb['childNodes'] = new gdt6qr8();
        var snx1jf = l0cb['attributes'] = new gfsn1();
        return snx1jf['_ownerElement'] = l0cb, l0cb;
    },
    'createDocumentFragment': function () {
        var ouew_ = new gzhnjs();
        return ouew_['ownerDocument'] = this, ouew_['childNodes'] = new gdt6qr8(), ouew_;
    },
    'createTextNode': function (ba$cm) {
        var zhqd6 = new gr5q8d();
        return zhqd6['ownerDocument'] = this, zhqd6['appendData'](ba$cm), zhqd6;
    },
    'createComment': function (ou_e4) {
        var pr5t3 = new gm$l9ba();
        return pr5t3['ownerDocument'] = this, pr5t3['appendData'](ou_e4), pr5t3;
    },
    'createCDATASection': function ($almc) {
        var yc0bo = new ghdkqz6();
        return yc0bo['ownerDocument'] = this, yc0bo['appendData']($almc), yc0bo;
    },
    'createProcessingInstruction': function (c4yo, d6zq) {
        var fxns = new ge2w1g();
        return fxns['ownerDocument'] = this, fxns['tagName'] = fxns['target'] = c4yo, fxns['nodeValue'] = fxns['data'] = d6zq, fxns;
    },
    'createAttribute': function (bmyl) {
        var boc0 = new ghxvjs();
        return boc0['ownerDocument'] = this, boc0['name'] = bmyl, boc0['nodeName'] = bmyl, boc0['localName'] = bmyl, boc0['specified'] = !0x0, boc0;
    },
    'createEntityReference': function (kvjzn) {
        var ew2ug = new gqtdr86();
        return ew2ug['ownerDocument'] = this, ew2ug['nodeName'] = kvjzn, ew2ug;
    },
    'createElementNS': function (o4_ew, cy$bm) {
        var qtdr = new gc$malb(),
            dhv6k = cy$bm['split'](':'),
            hvkjz = qtdr['attributes'] = new gfsn1();
        return qtdr['childNodes'] = new gdt6qr8(), qtdr['ownerDocument'] = this, qtdr['nodeName'] = cy$bm, qtdr['tagName'] = cy$bm, qtdr['namespaceURI'] = o4_ew, 0x2 == dhv6k['length'] ? (qtdr['prefix'] = dhv6k[0x0], qtdr['localName'] = dhv6k[0x1]) : qtdr['localName'] = cy$bm, hvkjz['_ownerElement'] = qtdr, qtdr;
    },
    'createAttributeNS': function (xjsvnf, u21xg) {
        var eo_w4u = new ghxvjs(),
            t75rp = u21xg['split'](':');
        return eo_w4u['ownerDocument'] = this, eo_w4u['nodeName'] = u21xg, eo_w4u['name'] = u21xg, eo_w4u['namespaceURI'] = xjsvnf, eo_w4u['specified'] = !0x0, 0x2 == t75rp['length'] ? (eo_w4u['prefix'] = t75rp[0x0], eo_w4u['localName'] = t75rp[0x1]) : eo_w4u['localName'] = u21xg, eo_w4u;
    }
}, gqdk6(gc04ybo, ggx2s1f), gc$malb['prototype'] = {
    'nodeType': g_yo40,
    'hasAttribute': function (r68dt) {
        return null != this['getAttributeNode'](r68dt);
    },
    'getAttribute': function (hvz) {
        var $clamb = this['getAttributeNode'](hvz);
        return $clamb && $clamb['value'] || '';
    },
    'getAttributeNode': function (weu4g_) {
        return this['attributes']['getNamedItem'](weu4g_);
    },
    'setAttribute': function (oye04, ip73) {
        var o_e04 = this['ownerDocument']['createAttribute'](oye04);
        o_e04['value'] = o_e04['nodeValue'] = '' + ip73, this['setAttributeNode'](o_e04);
    },
    'removeAttribute': function (b0$ocy) {
        var bac$ml = this['getAttributeNode'](b0$ocy);
        bac$ml && this['removeAttributeNode'](bac$ml);
    },
    'appendChild': function ($yocb0) {
        return $yocb0['nodeType'] === gjnhzv ? this['insertBefore']($yocb0, null) : gg4_ewu(this, $yocb0);
    },
    'setAttributeNode': function (r5i73) {
        return this['attributes']['setNamedItem'](r5i73);
    },
    'setAttributeNodeNS': function (dzqk6h) {
        return this['attributes']['setNamedItemNS'](dzqk6h);
    },
    'removeAttributeNode': function (tq8d5r) {
        return this['attributes']['removeNamedItem'](tq8d5r['nodeName']);
    },
    'removeAttributeNS': function (cby$l, g_e4wu) {
        var woe4 = this['getAttributeNodeNS'](cby$l, g_e4wu);
        woe4 && this['removeAttributeNode'](woe4);
    },
    'hasAttributeNS': function (f21js, $bcalm) {
        return null != this['getAttributeNodeNS'](f21js, $bcalm);
    },
    'getAttributeNS': function (jvxhs, jkhznv) {
        var khz6v = this['getAttributeNodeNS'](jvxhs, jkhznv);
        return khz6v && khz6v['value'] || '';
    },
    'setAttributeNS': function (eow40, y_0o4c, lyc0b$) {
        var y4o0bc = this['ownerDocument']['createAttributeNS'](eow40, y_0o4c);
        y4o0bc['value'] = y4o0bc['nodeValue'] = '' + lyc0b$, this['setAttributeNode'](y4o0bc);
    },
    'getAttributeNodeNS': function (jsxv, $0y) {
        return this['attributes']['getNamedItemNS'](jsxv, $0y);
    },
    'getElementsByTagName': function (r3p75i) {
        return new ga$ml9(this, function (fs2jx1) {
            var r3ip75 = [];
            return gs1f2(fs2jx1, function (njvhk) {
                njvhk === fs2jx1 || njvhk['nodeType'] != g_yo40 || '*' !== r3p75i && njvhk['tagName'] != r3p75i || r3ip75['push'](njvhk);
            }), r3ip75;
        });
    },
    'getElementsByTagNameNS': function (cbyo0, t8rd6) {
        return new ga$ml9(this, function (zhvkd6) {
            var we2_gu = [];
            return gs1f2(zhvkd6, function (gfux2) {
                gfux2 === zhvkd6 || gfux2['nodeType'] !== g_yo40 || '*' !== cbyo0 && gfux2['namespaceURI'] !== cbyo0 || '*' !== t8rd6 && gfux2['localName'] != t8rd6 || we2_gu['push'](gfux2);
            }), we2_gu;
        });
    }
}, gc04ybo['prototype']['getElementsByTagName'] = gc$malb['prototype']['getElementsByTagName'], gc04ybo['prototype']['getElementsByTagNameNS'] = gc$malb['prototype']['getElementsByTagNameNS'], gqdk6(gc$malb, ggx2s1f), ghxvjs['prototype']['nodeType'] = ghzjsvn, gqdk6(ghxvjs, ggx2s1f), ghnjvx['prototype'] = {
    'data': '',
    'substringData': function (sj2, zsvjh) {
        return this['data']['substring'](sj2, sj2 + zsvjh);
    },
    'appendData': function (y_c40) {
        y_c40 = this['data'] + y_c40, this['nodeValue'] = this['data'] = y_c40, this['length'] = y_c40['length'];
    },
    'insertData': function (oy4c_0, pr537t) {
        this['replaceData'](oy4c_0, 0x0, pr537t);
    },
    'appendChild': function () {
        throw new Error(go4uw_[gxvnfj]);
    },
    'deleteData': function (q6drt, qdhkz) {
        this['replaceData'](q6drt, qdhkz, '');
    },
    'replaceData': function (f1xj2s, o0by4c, h6zdv) {
        var b$cmyl = this['data']['substring'](0x0, f1xj2s),
            wgu21e = this['data']['substring'](f1xj2s + o0by4c);
        h6zdv = b$cmyl + h6zdv + wgu21e, this['nodeValue'] = this['data'] = h6zdv, this['length'] = h6zdv['length'];
    }
}, gqdk6(ghnjvx, ggx2s1f), gr5q8d['prototype'] = {
    'nodeName': '#text',
    'nodeType': ga9$b,
    'splitText': function (gfx1) {
        var ow_4eu = this['data'],
            xshnj = ow_4eu['substring'](gfx1);
        ow_4eu = ow_4eu['substring'](0x0, gfx1), this['data'] = this['nodeValue'] = ow_4eu, this['length'] = ow_4eu['length'];
        var shxjn = this['ownerDocument']['createTextNode'](xshnj);
        return this['parentNode'] && this['parentNode']['insertBefore'](shxjn, this['nextSibling']), shxjn;
    }
}, gqdk6(gr5q8d, ghnjvx), gm$l9ba['prototype'] = {
    'nodeName': '#comment',
    'nodeType': gybc4
}, gqdk6(gm$l9ba, ghnjvx), ghdkqz6['prototype'] = {
    'nodeName': '#cdata-section',
    'nodeType': ghnkjvz
}, gqdk6(ghdkqz6, ghnjvx), gylcm['prototype']['nodeType'] = gtrq, gqdk6(gylcm, ggx2s1f), galbmc['prototype']['nodeType'] = gkqt6d, gqdk6(galbmc, ggx2s1f), gq5rt7['prototype']['nodeType'] = gyo04e, gqdk6(gq5rt7, ggx2s1f), gqtdr86['prototype']['nodeType'] = gsfvj, gqdk6(gqtdr86, ggx2s1f), gzhnjs['prototype']['nodeName'] = '#document-fragment', gzhnjs['prototype']['nodeType'] = gjnhzv, gqdk6(gzhnjs, ggx2s1f), ge2w1g['prototype']['nodeType'] = gvnz6k, gqdk6(ge2w1g, ggx2s1f), gnzjhvk['prototype']['serializeToString'] = function (b40yo, d6hzv, qtr85d) {
    return gz6dvhk['call'](b40yo, d6hzv, qtr85d);
}, ggx2s1f['prototype']['toString'] = gz6dvhk;
try {
    Object['defineProperty'] && (Object['defineProperty'](ga$ml9['prototype'], 'length', {
        'get': function () {
            return gw_4o(this), this['$$length'];
        }
    }), Object['defineProperty'](ggx2s1f['prototype'], 'textContent', {
        'get': function () {
            return gdvkz(this);
        },
        'set': function (mblac) {
            switch (this['nodeType']) {
                case g_yo40:
                case gjnhzv:
                    for (; this['firstChild'];) this['removeChild'](this['firstChild']);
                    (mblac || String(mblac)) && this['appendChild'](this['ownerDocument']['createTextNode'](mblac));
                    break;
                default:
                    this['data'] = mblac, this['value'] = mblac, this['nodeValue'] = mblac;
            }
        }
    }), gvfsx = function (y4c_o0, o$cy, c_0yo) {
        y4c_o0['$$' + o$cy] = c_0yo;
    });
} catch (gqhdkz) {}
exports['DOMImplementation'] = g$o0c, exports['XMLSerializer'] = gnzjhvk;