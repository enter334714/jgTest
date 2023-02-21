var m = wx.$g;
function g_f0t34(akh1x, vgsc7) {
    for (var a15hxi in akh1x) vgsc7[a15hxi] = akh1x[a15hxi];
}
function gpf4t0($u2jr6, d2r6) {
    function _f43ot() {}
    var v7kywe = $u2jr6['prototype'];
    if (Object['create']) {
        var kvw7 = Object['create'](d2r6['prototype']);
        v7kywe['__proto__'] = kvw7;
    }
    v7kywe instanceof d2r6 || (_f43ot['prototype'] = d2r6['prototype'], _f43ot = new _f43ot(), g_f0t34(v7kywe, _f43ot), $u2jr6['prototype'] = v7kywe = _f43ot), v7kywe['constructor'] != $u2jr6 && ('function' != typeof $u2jr6 && console['error']('unknow Class:' + $u2jr6), v7kywe['constructor'] = $u2jr6);
}
function gaix5(_ip0b5, qgvs7c) {
    if (qgvs7c instanceof Error) var hbaxi = qgvs7c;else hbaxi = this, Error['call'](this, gi_0pb[_ip0b5]), this['message'] = gi_0pb[_ip0b5], Error['captureStackTrace'] && Error['captureStackTrace'](this, gaix5);
    return hbaxi['code'] = _ip0b5, qgvs7c && (this['message'] = this['message'] + ':\x20' + qgvs7c), hbaxi;
}
function gbp5i0_() {}
function ggcls89(xak1w, qecg7) {
    this['_node'] = xak1w, this['_refresh'] = qecg7, gj2r6u(this);
}
function gj2r6u(jr6u$m) {
    var a5bixp = jr6u$m['_node']['_inc'] || jr6u$m['_node']['ownerDocument']['_inc'];
    if (jr6u$m['_inc'] != a5bixp) {
        var pbi = jr6u$m['_refresh'](jr6u$m['_node']);
        gp5fb0_(jr6u$m, 'length', pbi['length']), g_f0t34(pbi, jr6u$m), jr6u$m['_inc'] = a5bixp;
    }
}
function gihx15a() {}
function gjr26u$(r26uj$, kvwye7) {
    for (var b_fp = r26uj$['length']; b_fp--;) if (r26uj$[b_fp] === kvwye7) return b_fp;
}
function gy7gve(ew1hyk, p_t4f, hk1w, a1hix5) {
    if (a1hix5 ? p_t4f[gjr26u$(p_t4f, a1hix5)] = hk1w : p_t4f[p_t4f['length']++] = hk1w, ew1hyk) {
        hk1w['ownerElement'] = ew1hyk;
        var y1whxk = ew1hyk['ownerDocument'];
        y1whxk && (a1hix5 && gwkxha1(y1whxk, ew1hyk, a1hix5), gs9lgc(y1whxk, ew1hyk, hk1w));
    }
}
function gglcsq(f3t_4, ftpb0, i5bxap) {
    var why1xk = gjr26u$(ftpb0, i5bxap);
    if (!(why1xk >= 0x0)) throw gaix5(gwyeqv, new Error(f3t_4['tagName'] + '@' + i5bxap));
    for (var oz42 = ftpb0['length'] - 0x1; oz42 > why1xk;) ftpb0[why1xk] = ftpb0[++why1xk];
    if (ftpb0['length'] = oz42, f3t_4) {
        var bip5a0 = f3t_4['ownerDocument'];
        bip5a0 && (gwkxha1(bip5a0, f3t_4, i5bxap), i5bxap['ownerElement'] = null);
    }
}
function gjdr26(vyq7ew) {
    if (this['_features'] = {}, vyq7ew) {
        for (var xh1k in vyq7ew) this['_features'] = vyq7ew[xh1k];
    }
}
function gvsgq7c() {}
function gc7sg8q(d2z6ro) {
    return '<' == d2z6ro && '&lt;' || '>' == d2z6ro && '&gt;' || '&' == d2z6ro && '&amp;' || '\x22' == d2z6ro && '&quot;' || '&#' + d2z6ro['charCodeAt']() + ';';
}
function gyevgq7(qyv7, sl8cgq) {
    if (sl8cgq(qyv7)) return !0x0;
    if (qyv7 = qyv7['firstChild']) {
        do if (gyevgq7(qyv7, sl8cgq)) return !0x0; while (qyv7 = qyv7['nextSibling']);
    }
}
function ghyx1kw() {}
function gs9lgc(r$62z, ki1ha, bi5p_) {
    r$62z && r$62z['_inc']++;
    var z432o = bi5p_['namespaceURI'];
    'http://www.w3.org/2000/xmlns/' == z432o && (ki1ha['_nsMap'][bi5p_['prefix'] ? bi5p_['localName'] : ''] = bi5p_['value']);
}
function gwkxha1(ew7vyk, jz6r2, _b0f5) {
    ew7vyk && ew7vyk['_inc']++;
    var o3zd2 = _b0f5['namespaceURI'];
    'http://www.w3.org/2000/xmlns/' == o3zd2 && delete jz6r2['_nsMap'][_b0f5['prefix'] ? _b0f5['localName'] : ''];
}
function go6dz2r(rdz2o6, o3df, e7vwyq) {
    if (rdz2o6 && rdz2o6['_inc']) {
        rdz2o6['_inc']++;
        var ewyvq = o3df['childNodes'];
        if (e7vwyq) ewyvq[ewyvq['length']++] = e7vwyq;else {
            for (var iap = o3df['firstChild'], jm6$ = 0x0; iap;) ewyvq[jm6$++] = iap, iap = iap['nextSibling'];
            ewyvq['length'] = jm6$;
        }
    }
}
function gg8qlc(ecvgq7, q7gcv) {
    var v7kew = q7gcv['previousSibling'],
        q7evy = q7gcv['nextSibling'];
    return v7kew ? v7kew['nextSibling'] = q7evy : ecvgq7['firstChild'] = q7evy, q7evy ? q7evy['previousSibling'] = v7kew : ecvgq7['lastChild'] = v7kew, go6dz2r(ecvgq7['ownerDocument'], ecvgq7), q7gcv;
}
function ghk1ye(z2rod6, vk7e, t3dz4) {
    var hix5ab = vk7e['parentNode'];
    if (hix5ab && hix5ab['removeChild'](vk7e), vk7e['nodeType'] === gpfb05_) {
        var ftd3o = vk7e['firstChild'];
        if (null == ftd3o) return vk7e;
        var ib05_ = vk7e['lastChild'];
    } else ftd3o = ib05_ = vk7e;
    var khixa1 = t3dz4 ? t3dz4['previousSibling'] : z2rod6['lastChild'];
    ftd3o['previousSibling'] = khixa1, ib05_['nextSibling'] = t3dz4, khixa1 ? khixa1['nextSibling'] = ftd3o : z2rod6['firstChild'] = ftd3o, null == t3dz4 ? z2rod6['lastChild'] = ib05_ : t3dz4['previousSibling'] = ib05_;
    do ftd3o['parentNode'] = z2rod6; while (ftd3o !== ib05_ && (ftd3o = ftd3o['nextSibling']));
    return go6dz2r(z2rod6['ownerDocument'] || z2rod6, z2rod6), vk7e['nodeType'] == gpfb05_ && (vk7e['firstChild'] = vk7e['lastChild'] = null), vk7e;
}
function ge1whk(xa1, ih15xa) {
    var kxh1yw = ih15xa['parentNode'];
    if (kxh1yw) {
        var qe7ywv = xa1['lastChild'];
        kxh1yw['removeChild'](ih15xa);
        var qe7ywv = xa1['lastChild'];
    }
    var qe7ywv = xa1['lastChild'];
    return ih15xa['parentNode'] = xa1, ih15xa['previousSibling'] = qe7ywv, ih15xa['nextSibling'] = null, qe7ywv ? qe7ywv['nextSibling'] = ih15xa : xa1['firstChild'] = ih15xa, xa1['lastChild'] = ih15xa, go6dz2r(xa1['ownerDocument'], xa1, ih15xa), ih15xa;
}
function gapxb5() {
    this['_nsMap'] = {};
}
function gscg87q() {}
function ga1ix5h() {}
function gbax5p() {}
function gyvw7ek() {}
function go2z4d() {}
function gpt40_() {}
function gxhkw1() {}
function gyqevw7() {}
function gqevw() {}
function gi_5bp() {}
function ghaibx5() {}
function g_pbi5() {}
function gu$rm6j(fdot, ec7) {
    var h1x5i = [],
        sg7cv = 0x9 == this['nodeType'] ? this['documentElement'] : this,
        drj2z6 = sg7cv['prefix'],
        ur$j6m = sg7cv['namespaceURI'];
    if (ur$j6m && null == drj2z6) {
        var drj2z6 = sg7cv['lookupPrefix'](ur$j6m);
        if (null == drj2z6) var i1xah5 = [{
            'namespace': ur$j6m,
            'prefix': null
        }];
    }
    return gdz62o3(this, h1x5i, fdot, ec7, i1xah5), h1x5i['join']('');
}
function gq78gs(xpa5b, zr6o2d, g7vyeq) {
    var gls98c = xpa5b['prefix'] || '',
        pf5b_0 = xpa5b['namespaceURI'];
    if (!gls98c && !pf5b_0) return !0x1;
    if ('xml' === gls98c && 'http://www.w3.org/XML/1998/namespace' === pf5b_0 || 'http://www.w3.org/2000/xmlns/' == pf5b_0) return !0x1;
    for (var gcqs87 = g7vyeq['length']; gcqs87--;) {
        var f4t3d = g7vyeq[gcqs87];
        if (f4t3d['prefix'] == gls98c) return f4t3d['namespace'] != pf5b_0;
    }
    return !0x0;
}
function gdz62o3(_bftp, bixp, wkyv7, z2j6dr, f5b0) {
    if (z2j6dr) {
        if (_bftp = z2j6dr(_bftp), !_bftp) return;
        if ('string' == typeof _bftp) return bixp['push'](_bftp), void 0x0;
    }
    switch (_bftp['nodeType']) {
        case gf_tpb0:
            f5b0 || (f5b0 = []);
            var of3t4 = (f5b0['length'], _bftp['attributes']),
                p_bt0f = of3t4['length'],
                kv1 = _bftp['firstChild'],
                vy1w = _bftp['tagName'];
            wkyv7 = gtf0_bp === _bftp['namespaceURI'] || wkyv7, bixp['push']('<', vy1w);
            for (var r6z$2j = 0x0; p_bt0f > r6z$2j; r6z$2j++) {
                var bai5p = of3t4['item'](r6z$2j);
                'xmlns' == bai5p['prefix'] ? f5b0['push']({
                    'prefix': bai5p['localName'],
                    'namespace': bai5p['value']
                }) : 'xmlns' == bai5p['nodeName'] && f5b0['push']({
                    'prefix': '',
                    'namespace': bai5p['value']
                });
            }
            for (var r6z$2j = 0x0; p_bt0f > r6z$2j; r6z$2j++) {
                var bai5p = of3t4['item'](r6z$2j);
                if (gq78gs(bai5p, wkyv7, f5b0)) {
                    var pbt0 = bai5p['prefix'] || '',
                        wh1yk = bai5p['namespaceURI'],
                        m6$ru = pbt0 ? ' xmlns:' + pbt0 : ' xmlns';
                    bixp['push'](m6$ru, '=\x22', wh1yk, '\x22'), f5b0['push']({
                        'prefix': pbt0,
                        'namespace': wh1yk
                    });
                }
                gdz62o3(bai5p, bixp, wkyv7, z2j6dr, f5b0);
            }
            if (gq78gs(_bftp, wkyv7, f5b0)) {
                var pbt0 = _bftp['prefix'] || '',
                    wh1yk = _bftp['namespaceURI'],
                    m6$ru = pbt0 ? ' xmlns:' + pbt0 : ' xmlns';
                bixp['push'](m6$ru, '=\x22', wh1yk, '\x22'), f5b0['push']({
                    'prefix': pbt0,
                    'namespace': wh1yk
                });
            }
            if (kv1 || wkyv7 && !/^(?:meta|link|img|br|hr|input)$/i['test'](vy1w)) {
                if (bixp['push']('>'), wkyv7 && /^script$/i['test'](vy1w)) {
                    for (; kv1;) kv1['data'] ? bixp['push'](kv1['data']) : gdz62o3(kv1, bixp, wkyv7, z2j6dr, f5b0), kv1 = kv1['nextSibling'];
                } else {
                    for (; kv1;) gdz62o3(kv1, bixp, wkyv7, z2j6dr, f5b0), kv1 = kv1['nextSibling'];
                }
                bixp['push']('</', vy1w, '>');
            } else bixp['push']('/>');
            return;
        case gtfb0p_:
        case gpfb05_:
            for (var kv1 = _bftp['firstChild']; kv1;) gdz62o3(kv1, bixp, wkyv7, z2j6dr, f5b0), kv1 = kv1['nextSibling'];
            return;
        case gs7gcq8:
            return bixp['push']('\x20', _bftp['name'], '=\x22', _bftp['value']['replace'](/[<&"]/g, gc7sg8q), '\x22');
        case gbi5ap0:
            return bixp['push'](_bftp['data']['replace'](/[<&]/g, gc7sg8q));
        case gbpxai:
            return bixp['push']('<![CDATA[', _bftp['data'], ']]>');
        case gyev7k:
            return bixp['push']('<!--', _bftp['data'], '-->');
        case gzd6r2j:
            var _f4p0 = _bftp['publicId'],
                yk7ew = _bftp['systemId'];
            if (bixp['push']('<!DOCTYPE ', _bftp['name']), _f4p0) bixp['push'](' PUBLIC "', _f4p0), yk7ew && '.' != yk7ew && bixp['push']('\x22\x20\x22', yk7ew), bixp['push']('\x22>');else {
                if (yk7ew && '.' != yk7ew) bixp['push'](' SYSTEM "', yk7ew, '\x22>');else {
                    var _ft0 = _bftp['internalSubset'];
                    _ft0 && bixp['push']('\x20[', _ft0, ']'), bixp['push']('>');
                }
            }
            return;
        case gft04p_:
            return bixp['push']('<?', _bftp['target'], '\x20', _bftp['data'], '?>');
        case g_40t:
            return bixp['push']('&', _bftp['nodeName'], ';');
        default:
            bixp['push']('??', _bftp['nodeName']);
    }
}
function gz3tod(svg7cq, ozrd62, y1whek) {
    var kvy1;
    switch (ozrd62['nodeType']) {
        case gf_tpb0:
            kvy1 = ozrd62['cloneNode'](!0x1), kvy1['ownerDocument'] = svg7cq;
        case gpfb05_:
            break;
        case gs7gcq8:
            y1whek = !0x0;
    }
    if (kvy1 || (kvy1 = ozrd62['cloneNode'](!0x1)), kvy1['ownerDocument'] = svg7cq, kvy1['parentNode'] = null, y1whek) {
        for (var kye1h = ozrd62['firstChild']; kye1h;) kvy1['appendChild'](gz3tod(svg7cq, kye1h, y1whek)), kye1h = kye1h['nextSibling'];
    }
    return kvy1;
}
function gvw1yek(ehyw1, _f5p0, ax5i1) {
    var _5pi0b = new _f5p0['constructor']();
    for (var d62o3 in _f5p0) {
        var h1ixa = _f5p0[d62o3];
        'object' != typeof h1ixa && h1ixa != _5pi0b[d62o3] && (_5pi0b[d62o3] = h1ixa);
    }
    switch (_f5p0['childNodes'] && (_5pi0b['childNodes'] = new gbp5i0_()), _5pi0b['ownerDocument'] = ehyw1, _5pi0b['nodeType']) {
        case gf_tpb0:
            var v7sq = _f5p0['attributes'],
                vec = _5pi0b['attributes'] = new gihx15a(),
                gevy7 = v7sq['length'];
            vec['_ownerElement'] = _5pi0b;
            for (var ywekv1 = 0x0; gevy7 > ywekv1; ywekv1++) _5pi0b['setAttributeNode'](gvw1yek(ehyw1, v7sq['item'](ywekv1), !0x0));
            break;
        case gs7gcq8:
            ax5i1 = !0x0;
    }
    if (ax5i1) {
        for (var rz2dj6 = _f5p0['firstChild']; rz2dj6;) _5pi0b['appendChild'](gvw1yek(ehyw1, rz2dj6, ax5i1)), rz2dj6 = rz2dj6['nextSibling'];
    }
    return _5pi0b;
}
function gp5fb0_(ixpab, y1ev, _bp0f) {
    ixpab[y1ev] = _bp0f;
}
function gfo3_t4(wkehy1) {
    switch (wkehy1['nodeType']) {
        case gf_tpb0:
        case gpfb05_:
            var od23z4 = [];
            for (wkehy1 = wkehy1['firstChild']; wkehy1;) 0x7 !== wkehy1['nodeType'] && 0x8 !== wkehy1['nodeType'] && od23z4['push'](gfo3_t4(wkehy1)), wkehy1 = wkehy1['nextSibling'];
            return od23z4['join']('');
        default:
            return wkehy1['nodeValue'];
    }
}
var gtf0_bp = 'http://www.w3.org/1999/xhtml',
    gc8lq = {},
    gf_tpb0 = gc8lq['ELEMENT_NODE'] = 0x1,
    gs7gcq8 = gc8lq['ATTRIBUTE_NODE'] = 0x2,
    gbi5ap0 = gc8lq['TEXT_NODE'] = 0x3,
    gbpxai = gc8lq['CDATA_SECTION_NODE'] = 0x4,
    g_40t = gc8lq['ENTITY_REFERENCE_NODE'] = 0x5,
    gy1hkxw = gc8lq['ENTITY_NODE'] = 0x6,
    gft04p_ = gc8lq['PROCESSING_INSTRUCTION_NODE'] = 0x7,
    gyev7k = gc8lq['COMMENT_NODE'] = 0x8,
    gtfb0p_ = gc8lq['DOCUMENT_NODE'] = 0x9,
    gzd6r2j = gc8lq['DOCUMENT_TYPE_NODE'] = 0xa,
    gpfb05_ = gc8lq['DOCUMENT_FRAGMENT_NODE'] = 0xb,
    gi5xabh = gc8lq['NOTATION_NODE'] = 0xc,
    gdz42o3 = {},
    gi_0pb = {},
    g_f50p = gdz42o3['INDEX_SIZE_ERR'] = (gi_0pb[0x1] = 'Index size error', 0x1),
    gwyve7 = gdz42o3['DOMSTRING_SIZE_ERR'] = (gi_0pb[0x2] = 'DOMString size error', 0x2),
    gqv7wey = gdz42o3['HIERARCHY_REQUEST_ERR'] = (gi_0pb[0x3] = 'Hierarchy request error', 0x3),
    gevqg7y = gdz42o3['WRONG_DOCUMENT_ERR'] = (gi_0pb[0x4] = 'Wrong document', 0x4),
    gkyev1 = gdz42o3['INVALID_CHARACTER_ERR'] = (gi_0pb[0x5] = 'Invalid character', 0x5),
    gd4z23o = gdz42o3['NO_DATA_ALLOWED_ERR'] = (gi_0pb[0x6] = 'No data allowed', 0x6),
    ggv7eqc = gdz42o3['NO_MODIFICATION_ALLOWED_ERR'] = (gi_0pb[0x7] = 'No modification allowed', 0x7),
    gwyeqv = gdz42o3['NOT_FOUND_ERR'] = (gi_0pb[0x8] = 'Not found', 0x8),
    gqgl8c = gdz42o3['NOT_SUPPORTED_ERR'] = (gi_0pb[0x9] = 'Not supported', 0x9),
    gveyk7w = gdz42o3['INUSE_ATTRIBUTE_ERR'] = (gi_0pb[0xa] = 'Attribute in use', 0xa),
    gzdo623 = gdz42o3['INVALID_STATE_ERR'] = (gi_0pb[0xb] = 'Invalid state', 0xb),
    gv7wqye = gdz42o3['SYNTAX_ERR'] = (gi_0pb[0xc] = 'Syntax error', 0xc),
    ggs7qc = gdz42o3['INVALID_MODIFICATION_ERR'] = (gi_0pb[0xd] = 'Invalid modification', 0xd),
    gxk1ahw = gdz42o3['NAMESPACE_ERR'] = (gi_0pb[0xe] = 'Invalid namespace', 0xe),
    gkweyv = gdz42o3['INVALID_ACCESS_ERR'] = (gi_0pb[0xf] = 'Invalid access', 0xf);
gaix5['prototype'] = Error['prototype'], g_f0t34(gdz42o3, gaix5), gbp5i0_['prototype'] = {
    'length': 0x0,
    'item': function (cs7v) {
        return this[cs7v] || null;
    },
    'toString': function (qwev, b_p) {
        for (var qs8gl = [], g89ls = 0x0; g89ls < this['length']; g89ls++) gdz62o3(this[g89ls], qs8gl, qwev, b_p);
        return qs8gl['join']('');
    }
}, ggcls89['prototype']['item'] = function (z$r2j6) {
    return gj2r6u(this), this[z$r2j6];
}, gpf4t0(ggcls89, gbp5i0_), gihx15a['prototype'] = {
    'length': 0x0,
    'item': gbp5i0_['prototype']['item'],
    'getNamedItem': function (wahx1k) {
        for (var ip5ab = this['length']; ip5ab--;) {
            var dr2oz = this[ip5ab];
            if (dr2oz['nodeName'] == wahx1k) return dr2oz;
        }
    },
    'setNamedItem': function (hx1wak) {
        var wye1 = hx1wak['ownerElement'];
        if (wye1 && wye1 != this['_ownerElement']) throw new gaix5(gveyk7w);
        var _i0bp = this['getNamedItem'](hx1wak['nodeName']);
        return gy7gve(this['_ownerElement'], this, hx1wak, _i0bp), _i0bp;
    },
    'setNamedItemNS': function (y7geq) {
        var q7yeg,
            qslc = y7geq['ownerElement'];
        if (qslc && qslc != this['_ownerElement']) throw new gaix5(gveyk7w);
        return q7yeg = this['getNamedItemNS'](y7geq['namespaceURI'], y7geq['localName']), gy7gve(this['_ownerElement'], this, y7geq, q7yeg), q7yeg;
    },
    'removeNamedItem': function (jzd26r) {
        var c7vgqs = this['getNamedItem'](jzd26r);
        return gglcsq(this['_ownerElement'], this, c7vgqs), c7vgqs;
    },
    'removeNamedItemNS': function (wvk7ye, yv7q) {
        var ke1hwy = this['getNamedItemNS'](wvk7ye, yv7q);
        return gglcsq(this['_ownerElement'], this, ke1hwy), ke1hwy;
    },
    'getNamedItemNS': function (s7vgcq, v1kew) {
        for (var xi1ka = this['length']; xi1ka--;) {
            var eqv7 = this[xi1ka];
            if (eqv7['localName'] == v1kew && eqv7['namespaceURI'] == s7vgcq) return eqv7;
        }
        return null;
    }
}, gjdr26['prototype'] = {
    'hasFeature': function (jz$r26, o234dz) {
        var wk1h = this['_features'][jz$r26['toLowerCase']()];
        return wk1h && (!o234dz || o234dz in wk1h) ? !0x0 : !0x1;
    },
    'createDocument': function (r2u6j$, f0_p4t, t4_03f) {
        var xkhi1 = new ghyx1kw();
        if (xkhi1['implementation'] = this, xkhi1['childNodes'] = new gbp5i0_(), xkhi1['doctype'] = t4_03f, t4_03f && xkhi1['appendChild'](t4_03f), f0_p4t) {
            var $6u2r = xkhi1['createElementNS'](r2u6j$, f0_p4t);
            xkhi1['appendChild']($6u2r);
        }
        return xkhi1;
    },
    'createDocumentType': function (qscgv, ai50, p5bi0_) {
        var whka1x = new gpt40_();
        return whka1x['name'] = qscgv, whka1x['nodeName'] = qscgv, whka1x['publicId'] = ai50, whka1x['systemId'] = p5bi0_, whka1x;
    }
}, gvsgq7c['prototype'] = {
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
    'insertBefore': function (h5xa, gslq8c) {
        return ghk1ye(this, h5xa, gslq8c);
    },
    'replaceChild': function (tod3, hxba) {
        this['insertBefore'](tod3, hxba), hxba && this['removeChild'](hxba);
    },
    'removeChild': function (z$62) {
        return gg8qlc(this, z$62);
    },
    'appendChild': function (tf34_) {
        return this['insertBefore'](tf34_, null);
    },
    'hasChildNodes': function () {
        return null != this['firstChild'];
    },
    'cloneNode': function (hx1kyw) {
        return gvw1yek(this['ownerDocument'] || this, this, hx1kyw);
    },
    'normalize': function () {
        for (var $jr6 = this['firstChild']; $jr6;) {
            var ba5p0 = $jr6['nextSibling'];
            ba5p0 && ba5p0['nodeType'] == gbi5ap0 && $jr6['nodeType'] == gbi5ap0 ? (this['removeChild'](ba5p0), $jr6['appendData'](ba5p0['data'])) : ($jr6['normalize'](), $jr6 = ba5p0);
        }
    },
    'isSupported': function (oz4d, ka1) {
        return this['ownerDocument']['implementation']['hasFeature'](oz4d, ka1);
    },
    'hasAttributes': function () {
        return this['attributes']['length'] > 0x0;
    },
    'lookupPrefix': function (tz3d4) {
        for (var bf05p_ = this; bf05p_;) {
            var xbia5p = bf05p_['_nsMap'];
            if (xbia5p) {
                for (var i_5bp0 in xbia5p) if (xbia5p[i_5bp0] == tz3d4) return i_5bp0;
            }
            bf05p_ = bf05p_['nodeType'] == gs7gcq8 ? bf05p_['ownerDocument'] : bf05p_['parentNode'];
        }
        return null;
    },
    'lookupNamespaceURI': function (clsg89) {
        for (var hxwak = this; hxwak;) {
            var c7gqs8 = hxwak['_nsMap'];
            if (c7gqs8 && clsg89 in c7gqs8) return c7gqs8[clsg89];
            hxwak = hxwak['nodeType'] == gs7gcq8 ? hxwak['ownerDocument'] : hxwak['parentNode'];
        }
        return null;
    },
    'isDefaultNamespace': function (b5aix) {
        var tdof = this['lookupPrefix'](b5aix);
        return null == tdof;
    }
}, g_f0t34(gc8lq, gvsgq7c), g_f0t34(gc8lq, gvsgq7c['prototype']), ghyx1kw['prototype'] = {
    'nodeName': '#document',
    'nodeType': gtfb0p_,
    'doctype': null,
    'documentElement': null,
    '_inc': 0x1,
    'insertBefore': function (eqv7yw, h1kwy) {
        if (eqv7yw['nodeType'] == gpfb05_) {
            for (var p5_0b = eqv7yw['firstChild']; p5_0b;) {
                var jur2$6 = p5_0b['nextSibling'];
                this['insertBefore'](p5_0b, h1kwy), p5_0b = jur2$6;
            }
            return eqv7yw;
        }
        return null == this['documentElement'] && eqv7yw['nodeType'] == gf_tpb0 && (this['documentElement'] = eqv7yw), ghk1ye(this, eqv7yw, h1kwy), eqv7yw['ownerDocument'] = this, eqv7yw;
    },
    'removeChild': function (cg7vqe) {
        return this['documentElement'] == cg7vqe && (this['documentElement'] = null), gg8qlc(this, cg7vqe);
    },
    'importNode': function (wkhe1, ft43do) {
        return gz3tod(this, wkhe1, ft43do);
    },
    'getElementById': function (z2$jr6) {
        var h1kye = null;
        return gyevgq7(this['documentElement'], function (t4o3f_) {
            return t4o3f_['nodeType'] == gf_tpb0 && t4o3f_['getAttribute']('id') == z2$jr6 ? (h1kye = t4o3f_, !0x0) : void 0x0;
        }), h1kye;
    },
    'createElement': function (jr26z$) {
        var l8qscg = new gapxb5();
        l8qscg['ownerDocument'] = this, l8qscg['nodeName'] = jr26z$, l8qscg['tagName'] = jr26z$, l8qscg['childNodes'] = new gbp5i0_();
        var hxbi5a = l8qscg['attributes'] = new gihx15a();
        return hxbi5a['_ownerElement'] = l8qscg, l8qscg;
    },
    'createDocumentFragment': function () {
        var $6mur = new gi_5bp();
        return $6mur['ownerDocument'] = this, $6mur['childNodes'] = new gbp5i0_(), $6mur;
    },
    'createTextNode': function (c8s) {
        var pba05 = new gbax5p();
        return pba05['ownerDocument'] = this, pba05['appendData'](c8s), pba05;
    },
    'createComment': function (lsc8g9) {
        var u26jr = new gyvw7ek();
        return u26jr['ownerDocument'] = this, u26jr['appendData'](lsc8g9), u26jr;
    },
    'createCDATASection': function (i5ha) {
        var gv7e = new go2z4d();
        return gv7e['ownerDocument'] = this, gv7e['appendData'](i5ha), gv7e;
    },
    'createProcessingInstruction': function (a5xi, x1yhkw) {
        var d2ro = new ghaibx5();
        return d2ro['ownerDocument'] = this, d2ro['tagName'] = d2ro['target'] = a5xi, d2ro['nodeValue'] = d2ro['data'] = x1yhkw, d2ro;
    },
    'createAttribute': function (gc7veq) {
        var xh1awk = new gscg87q();
        return xh1awk['ownerDocument'] = this, xh1awk['name'] = gc7veq, xh1awk['nodeName'] = gc7veq, xh1awk['localName'] = gc7veq, xh1awk['specified'] = !0x0, xh1awk;
    },
    'createEntityReference': function (f0_tb) {
        var z2$6r = new gqevw();
        return z2$6r['ownerDocument'] = this, z2$6r['nodeName'] = f0_tb, z2$6r;
    },
    'createElementNS': function (yekwv, t0_b) {
        var xhaki = new gapxb5(),
            g9lsc8 = t0_b['split'](':'),
            ax1ihk = xhaki['attributes'] = new gihx15a();
        return xhaki['childNodes'] = new gbp5i0_(), xhaki['ownerDocument'] = this, xhaki['nodeName'] = t0_b, xhaki['tagName'] = t0_b, xhaki['namespaceURI'] = yekwv, 0x2 == g9lsc8['length'] ? (xhaki['prefix'] = g9lsc8[0x0], xhaki['localName'] = g9lsc8[0x1]) : xhaki['localName'] = t0_b, ax1ihk['_ownerElement'] = xhaki, xhaki;
    },
    'createAttributeNS': function (qcve7g, r6oz) {
        var ia5x = new gscg87q(),
            p0i = r6oz['split'](':');
        return ia5x['ownerDocument'] = this, ia5x['nodeName'] = r6oz, ia5x['name'] = r6oz, ia5x['namespaceURI'] = qcve7g, ia5x['specified'] = !0x0, 0x2 == p0i['length'] ? (ia5x['prefix'] = p0i[0x0], ia5x['localName'] = p0i[0x1]) : ia5x['localName'] = r6oz, ia5x;
    }
}, gpf4t0(ghyx1kw, gvsgq7c), gapxb5['prototype'] = {
    'nodeType': gf_tpb0,
    'hasAttribute': function (do42z3) {
        return null != this['getAttributeNode'](do42z3);
    },
    'getAttribute': function (sqglc) {
        var vsg7 = this['getAttributeNode'](sqglc);
        return vsg7 && vsg7['value'] || '';
    },
    'getAttributeNode': function (rz26o) {
        return this['attributes']['getNamedItem'](rz26o);
    },
    'setAttribute': function (ahi1x5, $rj) {
        var d43fot = this['ownerDocument']['createAttribute'](ahi1x5);
        d43fot['value'] = d43fot['nodeValue'] = '' + $rj, this['setAttributeNode'](d43fot);
    },
    'removeAttribute': function (vgyq7) {
        var h5ix1a = this['getAttributeNode'](vgyq7);
        h5ix1a && this['removeAttributeNode'](h5ix1a);
    },
    'appendChild': function (qsv) {
        return qsv['nodeType'] === gpfb05_ ? this['insertBefore'](qsv, null) : ge1whk(this, qsv);
    },
    'setAttributeNode': function (t4_p0) {
        return this['attributes']['setNamedItem'](t4_p0);
    },
    'setAttributeNodeNS': function (cvqsg7) {
        return this['attributes']['setNamedItemNS'](cvqsg7);
    },
    'removeAttributeNode': function (vkey7) {
        return this['attributes']['removeNamedItem'](vkey7['nodeName']);
    },
    'removeAttributeNS': function (_fpt4, ia5pxb) {
        var qgvs = this['getAttributeNodeNS'](_fpt4, ia5pxb);
        qgvs && this['removeAttributeNode'](qgvs);
    },
    'hasAttributeNS': function (t3ozd4, j$rm6) {
        return null != this['getAttributeNodeNS'](t3ozd4, j$rm6);
    },
    'getAttributeNS': function (zjrd2, bpia) {
        var _t3f0 = this['getAttributeNodeNS'](zjrd2, bpia);
        return _t3f0 && _t3f0['value'] || '';
    },
    'setAttributeNS': function (c8sg7, bxapi5, b5ai0) {
        var qvceg7 = this['ownerDocument']['createAttributeNS'](c8sg7, bxapi5);
        qvceg7['value'] = qvceg7['nodeValue'] = '' + b5ai0, this['setAttributeNode'](qvceg7);
    },
    'getAttributeNodeNS': function (ahk1i, eqg7c) {
        return this['attributes']['getNamedItemNS'](ahk1i, eqg7c);
    },
    'getElementsByTagName': function (bhia5) {
        return new ggcls89(this, function (gcl98s) {
            var rzd6 = [];
            return gyevgq7(gcl98s, function (gyve) {
                gyve === gcl98s || gyve['nodeType'] != gf_tpb0 || '*' !== bhia5 && gyve['tagName'] != bhia5 || rzd6['push'](gyve);
            }), rzd6;
        });
    },
    'getElementsByTagNameNS': function (k1xyhw, ywkhe) {
        return new ggcls89(this, function (t4o3_f) {
            var q7gvc = [];
            return gyevgq7(t4o3_f, function (ew7vky) {
                ew7vky === t4o3_f || ew7vky['nodeType'] !== gf_tpb0 || '*' !== k1xyhw && ew7vky['namespaceURI'] !== k1xyhw || '*' !== ywkhe && ew7vky['localName'] != ywkhe || q7gvc['push'](ew7vky);
            }), q7gvc;
        });
    }
}, ghyx1kw['prototype']['getElementsByTagName'] = gapxb5['prototype']['getElementsByTagName'], ghyx1kw['prototype']['getElementsByTagNameNS'] = gapxb5['prototype']['getElementsByTagNameNS'], gpf4t0(gapxb5, gvsgq7c), gscg87q['prototype']['nodeType'] = gs7gcq8, gpf4t0(gscg87q, gvsgq7c), ga1ix5h['prototype'] = {
    'data': '',
    'substringData': function (lg8qc, _p0tf4) {
        return this['data']['substring'](lg8qc, lg8qc + _p0tf4);
    },
    'appendData': function (gvsc7) {
        gvsc7 = this['data'] + gvsc7, this['nodeValue'] = this['data'] = gvsc7, this['length'] = gvsc7['length'];
    },
    'insertData': function (ihk1, ipx5ab) {
        this['replaceData'](ihk1, 0x0, ipx5ab);
    },
    'appendChild': function () {
        throw new Error(gi_0pb[gqv7wey]);
    },
    'deleteData': function (ft_0p4, r$2z6j) {
        this['replaceData'](ft_0p4, r$2z6j, '');
    },
    'replaceData': function (t34f, cl9g8s, tf03) {
        var kevw1y = this['data']['substring'](0x0, t34f),
            hykwe1 = this['data']['substring'](t34f + cl9g8s);
        tf03 = kevw1y + tf03 + hykwe1, this['nodeValue'] = this['data'] = tf03, this['length'] = tf03['length'];
    }
}, gpf4t0(ga1ix5h, gvsgq7c), gbax5p['prototype'] = {
    'nodeName': '#text',
    'nodeType': gbi5ap0,
    'splitText': function (w1kyeh) {
        var odz36 = this['data'],
            ke1y = odz36['substring'](w1kyeh);
        odz36 = odz36['substring'](0x0, w1kyeh), this['data'] = this['nodeValue'] = odz36, this['length'] = odz36['length'];
        var ik1hxa = this['ownerDocument']['createTextNode'](ke1y);
        return this['parentNode'] && this['parentNode']['insertBefore'](ik1hxa, this['nextSibling']), ik1hxa;
    }
}, gpf4t0(gbax5p, ga1ix5h), gyvw7ek['prototype'] = {
    'nodeName': '#comment',
    'nodeType': gyev7k
}, gpf4t0(gyvw7ek, ga1ix5h), go2z4d['prototype'] = {
    'nodeName': '#cdata-section',
    'nodeType': gbpxai
}, gpf4t0(go2z4d, ga1ix5h), gpt40_['prototype']['nodeType'] = gzd6r2j, gpf4t0(gpt40_, gvsgq7c), gxhkw1['prototype']['nodeType'] = gi5xabh, gpf4t0(gxhkw1, gvsgq7c), gyqevw7['prototype']['nodeType'] = gy1hkxw, gpf4t0(gyqevw7, gvsgq7c), gqevw['prototype']['nodeType'] = g_40t, gpf4t0(gqevw, gvsgq7c), gi_5bp['prototype']['nodeName'] = '#document-fragment', gi_5bp['prototype']['nodeType'] = gpfb05_, gpf4t0(gi_5bp, gvsgq7c), ghaibx5['prototype']['nodeType'] = gft04p_, gpf4t0(ghaibx5, gvsgq7c), g_pbi5['prototype']['serializeToString'] = function (dj62zr, v7gyqe, evq7g) {
    return gu$rm6j['call'](dj62zr, v7gyqe, evq7g);
}, gvsgq7c['prototype']['toString'] = gu$rm6j;
try {
    Object['defineProperty'] && (Object['defineProperty'](ggcls89['prototype'], 'length', {
        'get': function () {
            return gj2r6u(this), this['$$length'];
        }
    }), Object['defineProperty'](gvsgq7c['prototype'], 'textContent', {
        'get': function () {
            return gfo3_t4(this);
        },
        'set': function (r26$j) {
            switch (this['nodeType']) {
                case gf_tpb0:
                case gpfb05_:
                    for (; this['firstChild'];) this['removeChild'](this['firstChild']);
                    (r26$j || String(r26$j)) && this['appendChild'](this['ownerDocument']['createTextNode'](r26$j));
                    break;
                default:
                    this['data'] = r26$j, this['value'] = r26$j, this['nodeValue'] = r26$j;
            }
        }
    }), gp5fb0_ = function (hib5x, akw1hx, wve1ky) {
        hib5x['$$' + akw1hx] = wve1ky;
    });
} catch (g_f3t) {}
exports['DOMImplementation'] = gjdr26, exports['XMLSerializer'] = g_pbi5;