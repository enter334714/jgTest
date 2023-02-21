function gckdem(ar0q1b, r1bqa0) {
    for (var d_mpc in ar0q1b) r1bqa0[d_mpc] = ar0q1b[d_mpc];
}
function gaqok1_(a1qbr0, ek_oca) {
    function bn82() {}
    var jv$ = a1qbr0['prototype'];
    if (Object['create']) {
        var _qoke = Object['create'](ek_oca['prototype']);
        jv$['__proto__'] = _qoke;
    }
    jv$ instanceof ek_oca || (bn82['prototype'] = ek_oca['prototype'], bn82 = new bn82(), gckdem(jv$, bn82), a1qbr0['prototype'] = jv$ = bn82), jv$['constructor'] != a1qbr0 && ('function' != typeof a1qbr0 && console['error']('unknow Class:' + a1qbr0), jv$['constructor'] = a1qbr0);
}
function glf4y6g(kao1_, mpe_) {
    if (mpe_ instanceof Error) var r8b021 = mpe_;else r8b021 = this, Error['call'](this, gsuzh73[kao1_]), this['message'] = gsuzh73[kao1_], Error['captureStackTrace'] && Error['captureStackTrace'](this, glf4y6g);
    return r8b021['code'] = kao1_, mpe_ && (this['message'] = this['message'] + ':\x20' + mpe_), r8b021;
}
function gvw$4ji() {}
function gmtdp(_oecdk, suhzn3) {
    this['_node'] = _oecdk, this['_refresh'] = suhzn3, gh38n0(this);
}
function gh38n0(mpd9c) {
    var h7sz3 = mpd9c['_node']['_inc'] || mpd9c['_node']['ownerDocument']['_inc'];
    if (mpd9c['_inc'] != h7sz3) {
        var v4iw$j = mpd9c['_refresh'](mpd9c['_node']);
        gl6tgyf(mpd9c, 'length', v4iw$j['length']), gckdem(v4iw$j, mpd9c), mpd9c['_inc'] = h7sz3;
    }
}
function gkoa_() {}
function gk_eaqo(ce9pm, ab0r1) {
    for (var oab1rq = ce9pm['length']; oab1rq--;) if (ce9pm[oab1rq] === ab0r1) return oab1rq;
}
function gbq1ako(edo_k, n3s, bqoa1k, y46j) {
    if (y46j ? n3s[gk_eaqo(n3s, y46j)] = bqoa1k : n3s[n3s['length']++] = bqoa1k, edo_k) {
        bqoa1k['ownerElement'] = edo_k;
        var l6y4$ = edo_k['ownerDocument'];
        l6y4$ && (y46j && gkao1(l6y4$, edo_k, y46j), gu3szh(l6y4$, edo_k, bqoa1k));
    }
}
function gt59g6(dceo_k, g4fl, mpcd59) {
    var mt9 = gk_eaqo(g4fl, mpcd59);
    if (!(mt9 >= 0x0)) throw glf4y6g(gkcdoe, new Error(dceo_k['tagName'] + '@' + mpcd59));
    for (var o_aq = g4fl['length'] - 0x1; o_aq > mt9;) g4fl[mt9] = g4fl[++mt9];
    if (g4fl['length'] = o_aq, dceo_k) {
        var sn = dceo_k['ownerDocument'];
        sn && (gkao1(sn, dceo_k, mpcd59), mpcd59['ownerElement'] = null);
    }
}
function gaoqke(sx3uz7) {
    if (this['_features'] = {}, sx3uz7) {
        for (var hrn02 in sx3uz7) this['_features'] = sx3uz7[hrn02];
    }
}
function gbka1o() {}
function ghs73uz(wvj4$i) {
    return '<' == wvj4$i && '&lt;' || '>' == wvj4$i && '&gt;' || '&' == wvj4$i && '&amp;' || '\x22' == wvj4$i && '&quot;' || '&#' + wvj4$i['charCodeAt']() + ';';
}
function gjv4$(hu238, us3hn8) {
    if (us3hn8(hu238)) return !0x0;
    if (hu238 = hu238['firstChild']) {
        do if (gjv4$(hu238, us3hn8)) return !0x0; while (hu238 = hu238['nextSibling']);
    }
}
function goqa1r() {}
function gu3szh(jlf4y6, lwi4j, ka_o1) {
    jlf4y6 && jlf4y6['_inc']++;
    var hu3nzs = ka_o1['namespaceURI'];
    'http://www.w3.org/2000/xmlns/' == hu3nzs && (lwi4j['_nsMap'][ka_o1['prefix'] ? ka_o1['localName'] : ''] = ka_o1['value']);
}
function gkao1(baro, gy6f, ao1qr) {
    baro && baro['_inc']++;
    var gm9p = ao1qr['namespaceURI'];
    'http://www.w3.org/2000/xmlns/' == gm9p && delete gy6f['_nsMap'][ao1qr['prefix'] ? ao1qr['localName'] : ''];
}
function glwi4j$(h7su3, y4j6f, $ivw4j) {
    if (h7su3 && h7su3['_inc']) {
        h7su3['_inc']++;
        var xus7z = y4j6f['childNodes'];
        if ($ivw4j) xus7z[xus7z['length']++] = $ivw4j;else {
            for (var t965 = y4j6f['firstChild'], _odec = 0x0; t965;) xus7z[_odec++] = t965, t965 = t965['nextSibling'];
            xus7z['length'] = _odec;
        }
    }
}
function gbq1kao(wyj4$l, mg9tp5) {
    var ly$4j6 = mg9tp5['previousSibling'],
        g9mtp5 = mg9tp5['nextSibling'];
    return ly$4j6 ? ly$4j6['nextSibling'] = g9mtp5 : wyj4$l['firstChild'] = g9mtp5, g9mtp5 ? g9mtp5['previousSibling'] = ly$4j6 : wyj4$l['lastChild'] = ly$4j6, glwi4j$(wyj4$l['ownerDocument'], wyj4$l), mg9tp5;
}
function gm5cdp(oq1ba, lyj4w, h3s7) {
    var o1qar = lyj4w['parentNode'];
    if (o1qar && o1qar['removeChild'](lyj4w), lyj4w['nodeType'] === gfgty6) {
        var ptgf9 = lyj4w['firstChild'];
        if (null == ptgf9) return lyj4w;
        var t5gy6 = lyj4w['lastChild'];
    } else ptgf9 = t5gy6 = lyj4w;
    var uh37sz = h3s7 ? h3s7['previousSibling'] : oq1ba['lastChild'];
    ptgf9['previousSibling'] = uh37sz, t5gy6['nextSibling'] = h3s7, uh37sz ? uh37sz['nextSibling'] = ptgf9 : oq1ba['firstChild'] = ptgf9, null == h3s7 ? oq1ba['lastChild'] = t5gy6 : h3s7['previousSibling'] = t5gy6;
    do ptgf9['parentNode'] = oq1ba; while (ptgf9 !== t5gy6 && (ptgf9 = ptgf9['nextSibling']));
    return glwi4j$(oq1ba['ownerDocument'] || oq1ba, oq1ba), lyj4w['nodeType'] == gfgty6 && (lyj4w['firstChild'] = lyj4w['lastChild'] = null), lyj4w;
}
function gakc_e($ljy46, br1qa0) {
    var j$wly = br1qa0['parentNode'];
    if (j$wly) {
        var qbr102 = $ljy46['lastChild'];
        j$wly['removeChild'](br1qa0);
        var qbr102 = $ljy46['lastChild'];
    }
    var qbr102 = $ljy46['lastChild'];
    return br1qa0['parentNode'] = $ljy46, br1qa0['previousSibling'] = qbr102, br1qa0['nextSibling'] = null, qbr102 ? qbr102['nextSibling'] = br1qa0 : $ljy46['firstChild'] = br1qa0, $ljy46['lastChild'] = br1qa0, glwi4j$($ljy46['ownerDocument'], $ljy46, br1qa0), br1qa0;
}
function geqko_() {
    this['_nsMap'] = {};
}
function gzu37s() {}
function gy4w$() {}
function gl64$yj() {}
function gwl$j4i() {}
function gft6g59() {}
function g_qokae() {}
function gu3z7() {}
function ghsz() {}
function gw4$vj() {}
function g_km() {}
function gq0r1a() {}
function gvw4ji$() {}
function gl4yj6(_kcmed, dmc_p) {
    var g9pm = [],
        r20nh8 = 0x9 == this['nodeType'] ? this['documentElement'] : this,
        pmc5 = r20nh8['prefix'],
        _akec = r20nh8['namespaceURI'];
    if (_akec && null == pmc5) {
        var pmc5 = r20nh8['lookupPrefix'](_akec);
        if (null == pmc5) var fptg = [{
            'namespace': _akec,
            'prefix': null
        }];
    }
    return gdemc9p(this, g9pm, _kcmed, dmc_p, fptg), g9pm['join']('');
}
function gepcm(_cpm, s3xu7, pgt9m) {
    var huzs3 = _cpm['prefix'] || '',
        n3s8uh = _cpm['namespaceURI'];
    if (!huzs3 && !n3s8uh) return !0x1;
    if ('xml' === huzs3 && 'http://www.w3.org/XML/1998/namespace' === n3s8uh || 'http://www.w3.org/2000/xmlns/' == n3s8uh) return !0x1;
    for (var e_dmc = pgt9m['length']; e_dmc--;) {
        var aekoq = pgt9m[e_dmc];
        if (aekoq['prefix'] == huzs3) return aekoq['namespace'] != n3s8uh;
    }
    return !0x0;
}
function gdemc9p(n238h, qo1rab, ivj4$w, ygltf, eoka) {
    if (ygltf) {
        if (n238h = ygltf(n238h), !n238h) return;
        if ('string' == typeof n238h) return qo1rab['push'](n238h), void 0x0;
    }
    switch (n238h['nodeType']) {
        case gj64l$y:
            eoka || (eoka = []);
            var yl46fg = (eoka['length'], n238h['attributes']),
                eaoqk = yl46fg['length'],
                eqak = n238h['firstChild'],
                hz7s = n238h['tagName'];
            ivj4$w = gekm_c === n238h['namespaceURI'] || ivj4$w, qo1rab['push']('<', hz7s);
            for (var o_qa1 = 0x0; eaoqk > o_qa1; o_qa1++) {
                var bn0r = yl46fg['item'](o_qa1);
                'xmlns' == bn0r['prefix'] ? eoka['push']({
                    'prefix': bn0r['localName'],
                    'namespace': bn0r['value']
                }) : 'xmlns' == bn0r['nodeName'] && eoka['push']({
                    'prefix': '',
                    'namespace': bn0r['value']
                });
            }
            for (var o_qa1 = 0x0; eaoqk > o_qa1; o_qa1++) {
                var bn0r = yl46fg['item'](o_qa1);
                if (gepcm(bn0r, ivj4$w, eoka)) {
                    var o1qr = bn0r['prefix'] || '',
                        mcpd95 = bn0r['namespaceURI'],
                        x3uz7s = o1qr ? ' xmlns:' + o1qr : ' xmlns';
                    qo1rab['push'](x3uz7s, '=\x22', mcpd95, '\x22'), eoka['push']({
                        'prefix': o1qr,
                        'namespace': mcpd95
                    });
                }
                gdemc9p(bn0r, qo1rab, ivj4$w, ygltf, eoka);
            }
            if (gepcm(n238h, ivj4$w, eoka)) {
                var o1qr = n238h['prefix'] || '',
                    mcpd95 = n238h['namespaceURI'],
                    x3uz7s = o1qr ? ' xmlns:' + o1qr : ' xmlns';
                qo1rab['push'](x3uz7s, '=\x22', mcpd95, '\x22'), eoka['push']({
                    'prefix': o1qr,
                    'namespace': mcpd95
                });
            }
            if (eqak || ivj4$w && !/^(?:meta|link|img|br|hr|input)$/i['test'](hz7s)) {
                if (qo1rab['push']('>'), ivj4$w && /^script$/i['test'](hz7s)) {
                    for (; eqak;) eqak['data'] ? qo1rab['push'](eqak['data']) : gdemc9p(eqak, qo1rab, ivj4$w, ygltf, eoka), eqak = eqak['nextSibling'];
                } else {
                    for (; eqak;) gdemc9p(eqak, qo1rab, ivj4$w, ygltf, eoka), eqak = eqak['nextSibling'];
                }
                qo1rab['push']('</', hz7s, '>');
            } else qo1rab['push']('/>');
            return;
        case gdko_ce:
        case gfgty6:
            for (var eqak = n238h['firstChild']; eqak;) gdemc9p(eqak, qo1rab, ivj4$w, ygltf, eoka), eqak = eqak['nextSibling'];
            return;
        case gf4lyj:
            return qo1rab['push']('\x20', n238h['name'], '=\x22', n238h['value']['replace'](/[<&"]/g, ghs73uz), '\x22');
        case gj$4vi:
            return qo1rab['push'](n238h['data']['replace'](/[<&]/g, ghs73uz));
        case gg659ft:
            return qo1rab['push']('<![CDATA[', n238h['data'], ']]>');
        case gg95pmt:
            return qo1rab['push']('<!--', n238h['data'], '-->');
        case gakobq:
            var e_kco = n238h['publicId'],
                eck_md = n238h['systemId'];
            if (qo1rab['push']('<!DOCTYPE ', n238h['name']), e_kco) qo1rab['push'](' PUBLIC "', e_kco), eck_md && '.' != eck_md && qo1rab['push']('\x22\x20\x22', eck_md), qo1rab['push']('\x22>');else {
                if (eck_md && '.' != eck_md) qo1rab['push'](' SYSTEM "', eck_md, '\x22>');else {
                    var _1ko = n238h['internalSubset'];
                    _1ko && qo1rab['push']('\x20[', _1ko, ']'), qo1rab['push']('>');
                }
            }
            return;
        case gakco:
            return qo1rab['push']('<?', n238h['target'], '\x20', n238h['data'], '?>');
        case gw$l4yj:
            return qo1rab['push']('&', n238h['nodeName'], ';');
        default:
            qo1rab['push']('??', n238h['nodeName']);
    }
}
function gt6glfy(g4y6f, f4jl, mt9pg5) {
    var abr1o;
    switch (f4jl['nodeType']) {
        case gj64l$y:
            abr1o = f4jl['cloneNode'](!0x1), abr1o['ownerDocument'] = g4y6f;
        case gfgty6:
            break;
        case gf4lyj:
            mt9pg5 = !0x0;
    }
    if (abr1o || (abr1o = f4jl['cloneNode'](!0x1)), abr1o['ownerDocument'] = g4y6f, abr1o['parentNode'] = null, mt9pg5) {
        for (var orabq1 = f4jl['firstChild']; orabq1;) abr1o['appendChild'](gt6glfy(g4y6f, orabq1, mt9pg5)), orabq1 = orabq1['nextSibling'];
    }
    return abr1o;
}
function geacok_(g5yf6, ecdp, kd_eco) {
    var dec_m = new ecdp['constructor']();
    for (var kc_eo in ecdp) {
        var j46yl$ = ecdp[kc_eo];
        'object' != typeof j46yl$ && j46yl$ != dec_m[kc_eo] && (dec_m[kc_eo] = j46yl$);
    }
    switch (ecdp['childNodes'] && (dec_m['childNodes'] = new gvw$4ji()), dec_m['ownerDocument'] = g5yf6, dec_m['nodeType']) {
        case gj64l$y:
            var kme_ = ecdp['attributes'],
                g6t5f = dec_m['attributes'] = new gkoa_(),
                kceo_ = kme_['length'];
            g6t5f['_ownerElement'] = dec_m;
            for (var n802rb = 0x0; kceo_ > n802rb; n802rb++) dec_m['setAttributeNode'](geacok_(g5yf6, kme_['item'](n802rb), !0x0));
            break;
        case gf4lyj:
            kd_eco = !0x0;
    }
    if (kd_eco) {
        for (var shu38 = ecdp['firstChild']; shu38;) dec_m['appendChild'](geacok_(g5yf6, shu38, kd_eco)), shu38 = shu38['nextSibling'];
    }
    return dec_m;
}
function gl6tgyf(nrh0, _kcae, wli4j) {
    nrh0[_kcae] = wli4j;
}
function gmedpc(p9mdc5) {
    switch (p9mdc5['nodeType']) {
        case gj64l$y:
        case gfgty6:
            var o1_aq = [];
            for (p9mdc5 = p9mdc5['firstChild']; p9mdc5;) 0x7 !== p9mdc5['nodeType'] && 0x8 !== p9mdc5['nodeType'] && o1_aq['push'](gmedpc(p9mdc5)), p9mdc5 = p9mdc5['nextSibling'];
            return o1_aq['join']('');
        default:
            return p9mdc5['nodeValue'];
    }
}
var gekm_c = 'http://www.w3.org/1999/xhtml',
    gpe9cdm = {},
    gj64l$y = gpe9cdm['ELEMENT_NODE'] = 0x1,
    gf4lyj = gpe9cdm['ATTRIBUTE_NODE'] = 0x2,
    gj$4vi = gpe9cdm['TEXT_NODE'] = 0x3,
    gg659ft = gpe9cdm['CDATA_SECTION_NODE'] = 0x4,
    gw$l4yj = gpe9cdm['ENTITY_REFERENCE_NODE'] = 0x5,
    gsuh83 = gpe9cdm['ENTITY_NODE'] = 0x6,
    gakco = gpe9cdm['PROCESSING_INSTRUCTION_NODE'] = 0x7,
    gg95pmt = gpe9cdm['COMMENT_NODE'] = 0x8,
    gdko_ce = gpe9cdm['DOCUMENT_NODE'] = 0x9,
    gakobq = gpe9cdm['DOCUMENT_TYPE_NODE'] = 0xa,
    gfgty6 = gpe9cdm['DOCUMENT_FRAGMENT_NODE'] = 0xb,
    gy$j6l4 = gpe9cdm['NOTATION_NODE'] = 0xc,
    gfyg65 = {},
    gsuzh73 = {},
    grqa1o = gfyg65['INDEX_SIZE_ERR'] = (gsuzh73[0x1] = 'Index size error', 0x1),
    gl6g4yf = gfyg65['DOMSTRING_SIZE_ERR'] = (gsuzh73[0x2] = 'DOMString size error', 0x2),
    goabqr1 = gfyg65['HIERARCHY_REQUEST_ERR'] = (gsuzh73[0x3] = 'Hierarchy request error', 0x3),
    goake_ = gfyg65['WRONG_DOCUMENT_ERR'] = (gsuzh73[0x4] = 'Wrong document', 0x4),
    gp9dcem = gfyg65['INVALID_CHARACTER_ERR'] = (gsuzh73[0x5] = 'Invalid character', 0x5),
    g$vwj4i = gfyg65['NO_DATA_ALLOWED_ERR'] = (gsuzh73[0x6] = 'No data allowed', 0x6),
    gq1ao_ = gfyg65['NO_MODIFICATION_ALLOWED_ERR'] = (gsuzh73[0x7] = 'No modification allowed', 0x7),
    gkcdoe = gfyg65['NOT_FOUND_ERR'] = (gsuzh73[0x8] = 'Not found', 0x8),
    gcoed = gfyg65['NOT_SUPPORTED_ERR'] = (gsuzh73[0x9] = 'Not supported', 0x9),
    gbaorq = gfyg65['INUSE_ATTRIBUTE_ERR'] = (gsuzh73[0xa] = 'Attribute in use', 0xa),
    grnh082 = gfyg65['INVALID_STATE_ERR'] = (gsuzh73[0xb] = 'Invalid state', 0xb),
    gwlji$4 = gfyg65['SYNTAX_ERR'] = (gsuzh73[0xc] = 'Syntax error', 0xc),
    gz37hsu = gfyg65['INVALID_MODIFICATION_ERR'] = (gsuzh73[0xd] = 'Invalid modification', 0xd),
    g_ekaoq = gfyg65['NAMESPACE_ERR'] = (gsuzh73[0xe] = 'Invalid namespace', 0xe),
    gwi$vj4 = gfyg65['INVALID_ACCESS_ERR'] = (gsuzh73[0xf] = 'Invalid access', 0xf);
glf4y6g['prototype'] = Error['prototype'], gckdem(gfyg65, glf4y6g), gvw$4ji['prototype'] = {
    'length': 0x0,
    'item': function (oaqe_k) {
        return this[oaqe_k] || null;
    },
    'toString': function (lyf6j4, wl4j$y) {
        for (var r1028b = [], m9g5p = 0x0; m9g5p < this['length']; m9g5p++) gdemc9p(this[m9g5p], r1028b, lyf6j4, wl4j$y);
        return r1028b['join']('');
    }
}, gmtdp['prototype']['item'] = function (gy5ft6) {
    return gh38n0(this), this[gy5ft6];
}, gaqok1_(gmtdp, gvw$4ji), gkoa_['prototype'] = {
    'length': 0x0,
    'item': gvw$4ji['prototype']['item'],
    'getNamedItem': function (aq10br) {
        for (var ckdeo_ = this['length']; ckdeo_--;) {
            var g9 = this[ckdeo_];
            if (g9['nodeName'] == aq10br) return g9;
        }
    },
    'setNamedItem': function (aeokq_) {
        var y6gltf = aeokq_['ownerElement'];
        if (y6gltf && y6gltf != this['_ownerElement']) throw new glf4y6g(gbaorq);
        var mck_ed = this['getNamedItem'](aeokq_['nodeName']);
        return gbq1ako(this['_ownerElement'], this, aeokq_, mck_ed), mck_ed;
    },
    'setNamedItemNS': function (zx7u3s) {
        var okaec_,
            ko1a_ = zx7u3s['ownerElement'];
        if (ko1a_ && ko1a_ != this['_ownerElement']) throw new glf4y6g(gbaorq);
        return okaec_ = this['getNamedItemNS'](zx7u3s['namespaceURI'], zx7u3s['localName']), gbq1ako(this['_ownerElement'], this, zx7u3s, okaec_), okaec_;
    },
    'removeNamedItem': function (tfgy5) {
        var ekao_c = this['getNamedItem'](tfgy5);
        return gt59g6(this['_ownerElement'], this, ekao_c), ekao_c;
    },
    'removeNamedItemNS': function (odkce_, k_mdc) {
        var e_kod = this['getNamedItemNS'](odkce_, k_mdc);
        return gt59g6(this['_ownerElement'], this, e_kod), e_kod;
    },
    'getNamedItemNS': function (edkc, r10bq2) {
        for (var depm_c = this['length']; depm_c--;) {
            var hun83s = this[depm_c];
            if (hun83s['localName'] == r10bq2 && hun83s['namespaceURI'] == edkc) return hun83s;
        }
        return null;
    }
}, gaoqke['prototype'] = {
    'hasFeature': function (qak1b, hr8n0) {
        var yjf64 = this['_features'][qak1b['toLowerCase']()];
        return yjf64 && (!hr8n0 || hr8n0 in yjf64) ? !0x0 : !0x1;
    },
    'createDocument': function (yljw, m9de, _oce) {
        var l4jy$ = new goqa1r();
        if (l4jy$['implementation'] = this, l4jy$['childNodes'] = new gvw$4ji(), l4jy$['doctype'] = _oce, _oce && l4jy$['appendChild'](_oce), m9de) {
            var tp9md5 = l4jy$['createElementNS'](yljw, m9de);
            l4jy$['appendChild'](tp9md5);
        }
        return l4jy$;
    },
    'createDocumentType': function (i$v4, b2rn0, b20r81) {
        var g96f5t = new g_qokae();
        return g96f5t['name'] = i$v4, g96f5t['nodeName'] = i$v4, g96f5t['publicId'] = b2rn0, g96f5t['systemId'] = b20r81, g96f5t;
    }
}, gbka1o['prototype'] = {
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
    'insertBefore': function (hn8su, n28h0r) {
        return gm5cdp(this, hn8su, n28h0r);
    },
    'replaceChild': function (c9ep, hun382) {
        this['insertBefore'](c9ep, hun382), hun382 && this['removeChild'](hun382);
    },
    'removeChild': function (l4$wjy) {
        return gbq1kao(this, l4$wjy);
    },
    'appendChild': function (c_md) {
        return this['insertBefore'](c_md, null);
    },
    'hasChildNodes': function () {
        return null != this['firstChild'];
    },
    'cloneNode': function (b1oaqr) {
        return geacok_(this['ownerDocument'] || this, this, b1oaqr);
    },
    'normalize': function () {
        for (var p9dm5t = this['firstChild']; p9dm5t;) {
            var _oq1 = p9dm5t['nextSibling'];
            _oq1 && _oq1['nodeType'] == gj$4vi && p9dm5t['nodeType'] == gj$4vi ? (this['removeChild'](_oq1), p9dm5t['appendData'](_oq1['data'])) : (p9dm5t['normalize'](), p9dm5t = _oq1);
        }
    },
    'isSupported': function (jiw$, g46fy) {
        return this['ownerDocument']['implementation']['hasFeature'](jiw$, g46fy);
    },
    'hasAttributes': function () {
        return this['attributes']['length'] > 0x0;
    },
    'lookupPrefix': function (c9epdm) {
        for (var lj$4 = this; lj$4;) {
            var o_1k = lj$4['_nsMap'];
            if (o_1k) {
                for (var qkabo1 in o_1k) if (o_1k[qkabo1] == c9epdm) return qkabo1;
            }
            lj$4 = lj$4['nodeType'] == gf4lyj ? lj$4['ownerDocument'] : lj$4['parentNode'];
        }
        return null;
    },
    'lookupNamespaceURI': function (cdpm59) {
        for (var brqa01 = this; brqa01;) {
            var nrb280 = brqa01['_nsMap'];
            if (nrb280 && cdpm59 in nrb280) return nrb280[cdpm59];
            brqa01 = brqa01['nodeType'] == gf4lyj ? brqa01['ownerDocument'] : brqa01['parentNode'];
        }
        return null;
    },
    'isDefaultNamespace': function (q210br) {
        var pcme_d = this['lookupPrefix'](q210br);
        return null == pcme_d;
    }
}, gckdem(gpe9cdm, gbka1o), gckdem(gpe9cdm, gbka1o['prototype']), goqa1r['prototype'] = {
    'nodeName': '#document',
    'nodeType': gdko_ce,
    'doctype': null,
    'documentElement': null,
    '_inc': 0x1,
    'insertBefore': function (aeqok_, ckdo_e) {
        if (aeqok_['nodeType'] == gfgty6) {
            for (var sh73uz = aeqok_['firstChild']; sh73uz;) {
                var fl64jy = sh73uz['nextSibling'];
                this['insertBefore'](sh73uz, ckdo_e), sh73uz = fl64jy;
            }
            return aeqok_;
        }
        return null == this['documentElement'] && aeqok_['nodeType'] == gj64l$y && (this['documentElement'] = aeqok_), gm5cdp(this, aeqok_, ckdo_e), aeqok_['ownerDocument'] = this, aeqok_;
    },
    'removeChild': function (mt9dp) {
        return this['documentElement'] == mt9dp && (this['documentElement'] = null), gbq1kao(this, mt9dp);
    },
    'importNode': function (mpc_d, $w4yl) {
        return gt6glfy(this, mpc_d, $w4yl);
    },
    'getElementById': function (gfly46) {
        var raqbo = null;
        return gjv4$(this['documentElement'], function (ek_a) {
            return ek_a['nodeType'] == gj64l$y && ek_a['getAttribute']('id') == gfly46 ? (raqbo = ek_a, !0x0) : void 0x0;
        }), raqbo;
    },
    'createElement': function (sn3zu) {
        var g69f = new geqko_();
        g69f['ownerDocument'] = this, g69f['nodeName'] = sn3zu, g69f['tagName'] = sn3zu, g69f['childNodes'] = new gvw$4ji();
        var zhs73 = g69f['attributes'] = new gkoa_();
        return zhs73['_ownerElement'] = g69f, g69f;
    },
    'createDocumentFragment': function () {
        var j4iwv = new g_km();
        return j4iwv['ownerDocument'] = this, j4iwv['childNodes'] = new gvw$4ji(), j4iwv;
    },
    'createTextNode': function (qb01ra) {
        var pt5gm = new gl64$yj();
        return pt5gm['ownerDocument'] = this, pt5gm['appendData'](qb01ra), pt5gm;
    },
    'createComment': function (gtm) {
        var cd_m = new gwl$j4i();
        return cd_m['ownerDocument'] = this, cd_m['appendData'](gtm), cd_m;
    },
    'createCDATASection': function (f4yg6l) {
        var a0rqb = new gft6g59();
        return a0rqb['ownerDocument'] = this, a0rqb['appendData'](f4yg6l), a0rqb;
    },
    'createProcessingInstruction': function (l4g6fy, md59c) {
        var x7uzs3 = new gq0r1a();
        return x7uzs3['ownerDocument'] = this, x7uzs3['tagName'] = x7uzs3['target'] = l4g6fy, x7uzs3['nodeValue'] = x7uzs3['data'] = md59c, x7uzs3;
    },
    'createAttribute': function (keqo_a) {
        var ji = new gzu37s();
        return ji['ownerDocument'] = this, ji['name'] = keqo_a, ji['nodeName'] = keqo_a, ji['localName'] = keqo_a, ji['specified'] = !0x0, ji;
    },
    'createEntityReference': function (dokc) {
        var uzxs = new gw4$vj();
        return uzxs['ownerDocument'] = this, uzxs['nodeName'] = dokc, uzxs;
    },
    'createElementNS': function (pf59, un8s3h) {
        var q10abr = new geqko_(),
            zxu3 = un8s3h['split'](':'),
            tg65f = q10abr['attributes'] = new gkoa_();
        return q10abr['childNodes'] = new gvw$4ji(), q10abr['ownerDocument'] = this, q10abr['nodeName'] = un8s3h, q10abr['tagName'] = un8s3h, q10abr['namespaceURI'] = pf59, 0x2 == zxu3['length'] ? (q10abr['prefix'] = zxu3[0x0], q10abr['localName'] = zxu3[0x1]) : q10abr['localName'] = un8s3h, tg65f['_ownerElement'] = q10abr, q10abr;
    },
    'createAttributeNS': function (mdt9p5, z7hs) {
        var ke_cd = new gzu37s(),
            qabk1 = z7hs['split'](':');
        return ke_cd['ownerDocument'] = this, ke_cd['nodeName'] = z7hs, ke_cd['name'] = z7hs, ke_cd['namespaceURI'] = mdt9p5, ke_cd['specified'] = !0x0, 0x2 == qabk1['length'] ? (ke_cd['prefix'] = qabk1[0x0], ke_cd['localName'] = qabk1[0x1]) : ke_cd['localName'] = z7hs, ke_cd;
    }
}, gaqok1_(goqa1r, gbka1o), geqko_['prototype'] = {
    'nodeType': gj64l$y,
    'hasAttribute': function (suh38n) {
        return null != this['getAttributeNode'](suh38n);
    },
    'getAttribute': function (wj4yl$) {
        var xs7z3 = this['getAttributeNode'](wj4yl$);
        return xs7z3 && xs7z3['value'] || '';
    },
    'getAttributeNode': function ($4jlwy) {
        return this['attributes']['getNamedItem']($4jlwy);
    },
    'setAttribute': function (lg6yf, u2hn38) {
        var sx3 = this['ownerDocument']['createAttribute'](lg6yf);
        sx3['value'] = sx3['nodeValue'] = '' + u2hn38, this['setAttributeNode'](sx3);
    },
    'removeAttribute': function (t5d9pm) {
        var zhn3u = this['getAttributeNode'](t5d9pm);
        zhn3u && this['removeAttributeNode'](zhn3u);
    },
    'appendChild': function (pecdm_) {
        return pecdm_['nodeType'] === gfgty6 ? this['insertBefore'](pecdm_, null) : gakc_e(this, pecdm_);
    },
    'setAttributeNode': function (cmde_p) {
        return this['attributes']['setNamedItem'](cmde_p);
    },
    'setAttributeNodeNS': function (aoeq_) {
        return this['attributes']['setNamedItemNS'](aoeq_);
    },
    'removeAttributeNode': function (nb20) {
        return this['attributes']['removeNamedItem'](nb20['nodeName']);
    },
    'removeAttributeNS': function (ckao_e, oa_kq) {
        var a01rb = this['getAttributeNodeNS'](ckao_e, oa_kq);
        a01rb && this['removeAttributeNode'](a01rb);
    },
    'hasAttributeNS': function (kqo1_, dcm9pe) {
        return null != this['getAttributeNodeNS'](kqo1_, dcm9pe);
    },
    'getAttributeNS': function (j64ly$, qoe_) {
        var h3suzn = this['getAttributeNodeNS'](j64ly$, qoe_);
        return h3suzn && h3suzn['value'] || '';
    },
    'setAttributeNS': function (p9mt, fgt569, uhs3n) {
        var nhu3s8 = this['ownerDocument']['createAttributeNS'](p9mt, fgt569);
        nhu3s8['value'] = nhu3s8['nodeValue'] = '' + uhs3n, this['setAttributeNode'](nhu3s8);
    },
    'getAttributeNodeNS': function (jyl4, ty6fg5) {
        return this['attributes']['getNamedItemNS'](jyl4, ty6fg5);
    },
    'getElementsByTagName': function (y6lf4) {
        return new gmtdp(this, function (oc_kae) {
            var pe9cd = [];
            return gjv4$(oc_kae, function (jf6ly4) {
                jf6ly4 === oc_kae || jf6ly4['nodeType'] != gj64l$y || '*' !== y6lf4 && jf6ly4['tagName'] != y6lf4 || pe9cd['push'](jf6ly4);
            }), pe9cd;
        });
    },
    'getElementsByTagNameNS': function (a1or, mce9d) {
        return new gmtdp(this, function (o_kq1a) {
            var _mk = [];
            return gjv4$(o_kq1a, function (ijwv$) {
                ijwv$ === o_kq1a || ijwv$['nodeType'] !== gj64l$y || '*' !== a1or && ijwv$['namespaceURI'] !== a1or || '*' !== mce9d && ijwv$['localName'] != mce9d || _mk['push'](ijwv$);
            }), _mk;
        });
    }
}, goqa1r['prototype']['getElementsByTagName'] = geqko_['prototype']['getElementsByTagName'], goqa1r['prototype']['getElementsByTagNameNS'] = geqko_['prototype']['getElementsByTagNameNS'], gaqok1_(geqko_, gbka1o), gzu37s['prototype']['nodeType'] = gf4lyj, gaqok1_(gzu37s, gbka1o), gy4w$['prototype'] = {
    'data': '',
    'substringData': function (iw4v$, ecao_k) {
        return this['data']['substring'](iw4v$, iw4v$ + ecao_k);
    },
    'appendData': function (mtp59) {
        mtp59 = this['data'] + mtp59, this['nodeValue'] = this['data'] = mtp59, this['length'] = mtp59['length'];
    },
    'insertData': function (p_mcde, kem) {
        this['replaceData'](p_mcde, 0x0, kem);
    },
    'appendChild': function () {
        throw new Error(gsuzh73[goabqr1]);
    },
    'deleteData': function (w4ji, qae) {
        this['replaceData'](w4ji, qae, '');
    },
    'replaceData': function (codk, a_1oq, l$iw) {
        var aoqek = this['data']['substring'](0x0, codk),
            oa_kc = this['data']['substring'](codk + a_1oq);
        l$iw = aoqek + l$iw + oa_kc, this['nodeValue'] = this['data'] = l$iw, this['length'] = l$iw['length'];
    }
}, gaqok1_(gy4w$, gbka1o), gl64$yj['prototype'] = {
    'nodeName': '#text',
    'nodeType': gj$4vi,
    'splitText': function (coae) {
        var huzsn3 = this['data'],
            epmd_c = huzsn3['substring'](coae);
        huzsn3 = huzsn3['substring'](0x0, coae), this['data'] = this['nodeValue'] = huzsn3, this['length'] = huzsn3['length'];
        var h028r = this['ownerDocument']['createTextNode'](epmd_c);
        return this['parentNode'] && this['parentNode']['insertBefore'](h028r, this['nextSibling']), h028r;
    }
}, gaqok1_(gl64$yj, gy4w$), gwl$j4i['prototype'] = {
    'nodeName': '#comment',
    'nodeType': gg95pmt
}, gaqok1_(gwl$j4i, gy4w$), gft6g59['prototype'] = {
    'nodeName': '#cdata-section',
    'nodeType': gg659ft
}, gaqok1_(gft6g59, gy4w$), g_qokae['prototype']['nodeType'] = gakobq, gaqok1_(g_qokae, gbka1o), gu3z7['prototype']['nodeType'] = gy$j6l4, gaqok1_(gu3z7, gbka1o), ghsz['prototype']['nodeType'] = gsuh83, gaqok1_(ghsz, gbka1o), gw4$vj['prototype']['nodeType'] = gw$l4yj, gaqok1_(gw4$vj, gbka1o), g_km['prototype']['nodeName'] = '#document-fragment', g_km['prototype']['nodeType'] = gfgty6, gaqok1_(g_km, gbka1o), gq0r1a['prototype']['nodeType'] = gakco, gaqok1_(gq0r1a, gbka1o), gvw4ji$['prototype']['serializeToString'] = function (qokea_, dm95t, hr028n) {
    return gl4yj6['call'](qokea_, dm95t, hr028n);
}, gbka1o['prototype']['toString'] = gl4yj6;
try {
    Object['defineProperty'] && (Object['defineProperty'](gmtdp['prototype'], 'length', {
        'get': function () {
            return gh38n0(this), this['$$length'];
        }
    }), Object['defineProperty'](gbka1o['prototype'], 'textContent', {
        'get': function () {
            return gmedpc(this);
        },
        'set': function (r18) {
            switch (this['nodeType']) {
                case gj64l$y:
                case gfgty6:
                    for (; this['firstChild'];) this['removeChild'](this['firstChild']);
                    (r18 || String(r18)) && this['appendChild'](this['ownerDocument']['createTextNode'](r18));
                    break;
                default:
                    this['data'] = r18, this['value'] = r18, this['nodeValue'] = r18;
            }
        }
    }), gl6tgyf = function (r1oaqb, snzhu, tmg5p9) {
        r1oaqb['$$' + snzhu] = tmg5p9;
    });
} catch (geck) {}
exports['DOMImplementation'] = gaoqke, exports['XMLSerializer'] = gvw4ji$;