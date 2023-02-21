var c = wx.$a;
function gqtk6d(l$a9bm, j12sxf) {
    for (var k8z6qd in l$a9bm) j12sxf[k8z6qd] = l$a9bm[k8z6qd];
}
function glb$c0(hzd6kq, gwe21) {
    function cybo04() {}
    var p753ri = hzd6kq['prototype'];
    if (Object['create']) {
        var hqkzd6 = Object['create'](gwe21['prototype']);
        p753ri['__proto__'] = hqkzd6;
    }
    p753ri instanceof gwe21 || (cybo04['prototype'] = gwe21['prototype'], cybo04 = new cybo04(), gqtk6d(p753ri, cybo04), hzd6kq['prototype'] = p753ri = cybo04), p753ri['constructor'] != hzd6kq && ('function' != typeof hzd6kq && console['error']('unknow Class:' + hzd6kq), p753ri['constructor'] = hzd6kq);
}
function gkzhnj(j2sf, zk6hdq) {
    if (zk6hdq instanceof Error) var xnvfjs = zk6hdq;else xnvfjs = this, Error['call'](this, gqhzk6[j2sf]), this['message'] = gqhzk6[j2sf], Error['captureStackTrace'] && Error['captureStackTrace'](this, gkzhnj);
    return xnvfjs['code'] = j2sf, zk6hdq && (this['message'] = this['message'] + ':\x20' + zk6hdq), xnvfjs;
}
function gcbl0y() {}
function gzhkvj(t5pr3, mb$l9a) {
    this['_node'] = t5pr3, this['_refresh'] = mb$l9a, gyc04(this);
}
function gyc04(eouw) {
    var kzvn6h = eouw['_node']['_inc'] || eouw['_node']['ownerDocument']['_inc'];
    if (eouw['_inc'] != kzvn6h) {
        var q6hzk = eouw['_refresh'](eouw['_node']);
        gdhzk6q(eouw, 'length', q6hzk['length']), gqtk6d(q6hzk, eouw), eouw['_inc'] = kzvn6h;
    }
}
function gyc4o_0() {}
function gc4by0o($blym, tqr7) {
    for (var gf1uw = $blym['length']; gf1uw--;) if ($blym[gf1uw] === tqr7) return gf1uw;
}
function g_wg2u(drt, b$lym, $0cboy, lb$9a) {
    if (lb$9a ? b$lym[gc4by0o(b$lym, lb$9a)] = $0cboy : b$lym[b$lym['length']++] = $0cboy, drt) {
        $0cboy['ownerElement'] = drt;
        var c0l$yb = drt['ownerDocument'];
        c0l$yb && (lb$9a && gweug1(c0l$yb, drt, lb$9a), glmbcy(c0l$yb, drt, $0cboy));
    }
}
function ghkzvj(p7ir, eu4o, ge1wu2) {
    var $cmab = gc4by0o(eu4o, ge1wu2);
    if (!($cmab >= 0x0)) throw gkzhnj(gvsnhx, new Error(p7ir['tagName'] + '@' + ge1wu2));
    for (var hkq6zd = eu4o['length'] - 0x1; hkq6zd > $cmab;) eu4o[$cmab] = eu4o[++$cmab];
    if (eu4o['length'] = hkq6zd, p7ir) {
        var $mlb9 = p7ir['ownerDocument'];
        $mlb9 && (gweug1($mlb9, p7ir, ge1wu2), ge1wu2['ownerElement'] = null);
    }
}
function gdq68k(p753t) {
    if (this['_features'] = {}, p753t) {
        for (var ufg12w in p753t) this['_features'] = p753t[ufg12w];
    }
}
function gc0_4() {}
function gx2fs1(mcyb) {
    return '<' == mcyb && '&lt;' || '>' == mcyb && '&gt;' || '&' == mcyb && '&amp;' || '\x22' == mcyb && '&quot;' || '&#' + mcyb['charCodeAt']() + ';';
}
function gzhknjv(hdz6kq, woe4_u) {
    if (woe4_u(hdz6kq)) return !0x0;
    if (hdz6kq = hdz6kq['firstChild']) {
        do if (gzhknjv(hdz6kq, woe4_u)) return !0x0; while (hdz6kq = hdz6kq['nextSibling']);
    }
}
function gfu1w() {}
function glmbcy(qdr58, fug2w, albc$) {
    qdr58 && qdr58['_inc']++;
    var _o4uw = albc$['namespaceURI'];
    'http://www.w3.org/2000/xmlns/' == _o4uw && (fug2w['_nsMap'][albc$['prefix'] ? albc$['localName'] : ''] = albc$['value']);
}
function gweug1(hzjnkv, kh6vzd, e1u) {
    hzjnkv && hzjnkv['_inc']++;
    var mblac = e1u['namespaceURI'];
    'http://www.w3.org/2000/xmlns/' == mblac && delete kh6vzd['_nsMap'][e1u['prefix'] ? e1u['localName'] : ''];
}
function glbc$ma(qd6t8, t3r78, snxfjv) {
    if (qd6t8 && qd6t8['_inc']) {
        qd6t8['_inc']++;
        var s1fxn = t3r78['childNodes'];
        if (snxfjv) s1fxn[s1fxn['length']++] = snxfjv;else {
            for (var jxsfn = t3r78['firstChild'], w2e = 0x0; jxsfn;) s1fxn[w2e++] = jxsfn, jxsfn = jxsfn['nextSibling'];
            s1fxn['length'] = w2e;
        }
    }
}
function gknvjh(u12wgf, trq758) {
    var uwgf2 = trq758['previousSibling'],
        vnkh6z = trq758['nextSibling'];
    return uwgf2 ? uwgf2['nextSibling'] = vnkh6z : u12wgf['firstChild'] = vnkh6z, vnkh6z ? vnkh6z['previousSibling'] = uwgf2 : u12wgf['lastChild'] = uwgf2, glbc$ma(u12wgf['ownerDocument'], u12wgf), trq758;
}
function gzn6k(cly$0, ey4_o0, qd8t6) {
    var y4eo0_ = ey4_o0['parentNode'];
    if (y4eo0_ && y4eo0_['removeChild'](ey4_o0), ey4_o0['nodeType'] === gdv6k) {
        var fsnvj = ey4_o0['firstChild'];
        if (null == fsnvj) return ey4_o0;
        var z6d8qk = ey4_o0['lastChild'];
    } else fsnvj = z6d8qk = ey4_o0;
    var vz6kdh = qd8t6 ? qd8t6['previousSibling'] : cly$0['lastChild'];
    fsnvj['previousSibling'] = vz6kdh, z6d8qk['nextSibling'] = qd8t6, vz6kdh ? vz6kdh['nextSibling'] = fsnvj : cly$0['firstChild'] = fsnvj, null == qd8t6 ? cly$0['lastChild'] = z6d8qk : qd8t6['previousSibling'] = z6d8qk;
    do fsnvj['parentNode'] = cly$0; while (fsnvj !== z6d8qk && (fsnvj = fsnvj['nextSibling']));
    return glbc$ma(cly$0['ownerDocument'] || cly$0, cly$0), ey4_o0['nodeType'] == gdv6k && (ey4_o0['firstChild'] = ey4_o0['lastChild'] = null), ey4_o0;
}
function gxjsfn1(vknhz6, xf12sg) {
    var cm$ylb = xf12sg['parentNode'];
    if (cm$ylb) {
        var d6qr8t = vknhz6['lastChild'];
        cm$ylb['removeChild'](xf12sg);
        var d6qr8t = vknhz6['lastChild'];
    }
    var d6qr8t = vknhz6['lastChild'];
    return xf12sg['parentNode'] = vknhz6, xf12sg['previousSibling'] = d6qr8t, xf12sg['nextSibling'] = null, d6qr8t ? d6qr8t['nextSibling'] = xf12sg : vknhz6['firstChild'] = xf12sg, vknhz6['lastChild'] = xf12sg, glbc$ma(vknhz6['ownerDocument'], vknhz6, xf12sg), xf12sg;
}
function gfxs1g() {
    this['_nsMap'] = {};
}
function ghsnv() {}
function gbm$l9a() {}
function geo04_y() {}
function gcbl0$() {}
function gzhnk6() {}
function gbcy0() {}
function gsx1f2j() {}
function gd8kq6z() {}
function ge_0yo() {}
function gu1wge() {}
function ggue_2() {}
function ggxu1() {}
function g_y04oe(ew_u4o, _gwu) {
    var s1nxfj = [],
        cby0l = 0x9 == this['nodeType'] ? this['documentElement'] : this,
        $bcy0o = cby0l['prefix'],
        zv6kh = cby0l['namespaceURI'];
    if (zv6kh && null == $bcy0o) {
        var $bcy0o = cby0l['lookupPrefix'](zv6kh);
        if (null == $bcy0o) var njvsx = [{
            'namespace': zv6kh,
            'prefix': null
        }];
    }
    return gtd8qr6(this, s1nxfj, ew_u4o, _gwu, njvsx), s1nxfj['join']('');
}
function gc0b4y(yb0c, sxfvn, hd6kvz) {
    var vxjs = yb0c['prefix'] || '',
        q6hkz = yb0c['namespaceURI'];
    if (!vxjs && !q6hkz) return !0x1;
    if ('xml' === vxjs && 'http://www.w3.org/XML/1998/namespace' === q6hkz || 'http://www.w3.org/2000/xmlns/' == q6hkz) return !0x1;
    for (var d8tr = hd6kvz['length']; d8tr--;) {
        var r357p = hd6kvz[d8tr];
        if (r357p['prefix'] == vxjs) return r357p['namespace'] != q6hkz;
    }
    return !0x0;
}
function gtd8qr6(b0yoc, tqr, $o0byc, e1g2u, g_e4wu) {
    if (e1g2u) {
        if (b0yoc = e1g2u(b0yoc), !b0yoc) return;
        if ('string' == typeof b0yoc) return tqr['push'](b0yoc), void 0x0;
    }
    switch (b0yoc['nodeType']) {
        case gtq78r:
            g_e4wu || (g_e4wu = []);
            var m$ycl = (g_e4wu['length'], b0yoc['attributes']),
                b9la$m = m$ycl['length'],
                r5t783 = b0yoc['firstChild'],
                vzjnh = b0yoc['tagName'];
            $o0byc = gkhjzn === b0yoc['namespaceURI'] || $o0byc, tqr['push']('<', vzjnh);
            for (var jhsv = 0x0; b9la$m > jhsv; jhsv++) {
                var t85qr7 = m$ycl['item'](jhsv);
                'xmlns' == t85qr7['prefix'] ? g_e4wu['push']({
                    'prefix': t85qr7['localName'],
                    'namespace': t85qr7['value']
                }) : 'xmlns' == t85qr7['nodeName'] && g_e4wu['push']({
                    'prefix': '',
                    'namespace': t85qr7['value']
                });
            }
            for (var jhsv = 0x0; b9la$m > jhsv; jhsv++) {
                var t85qr7 = m$ycl['item'](jhsv);
                if (gc0b4y(t85qr7, $o0byc, g_e4wu)) {
                    var s21j = t85qr7['prefix'] || '',
                        y_0c4 = t85qr7['namespaceURI'],
                        $0ybco = s21j ? ' xmlns:' + s21j : ' xmlns';
                    tqr['push']($0ybco, '=\x22', y_0c4, '\x22'), g_e4wu['push']({
                        'prefix': s21j,
                        'namespace': y_0c4
                    });
                }
                gtd8qr6(t85qr7, tqr, $o0byc, e1g2u, g_e4wu);
            }
            if (gc0b4y(b0yoc, $o0byc, g_e4wu)) {
                var s21j = b0yoc['prefix'] || '',
                    y_0c4 = b0yoc['namespaceURI'],
                    $0ybco = s21j ? ' xmlns:' + s21j : ' xmlns';
                tqr['push']($0ybco, '=\x22', y_0c4, '\x22'), g_e4wu['push']({
                    'prefix': s21j,
                    'namespace': y_0c4
                });
            }
            if (r5t783 || $o0byc && !/^(?:meta|link|img|br|hr|input)$/i['test'](vzjnh)) {
                if (tqr['push']('>'), $o0byc && /^script$/i['test'](vzjnh)) {
                    for (; r5t783;) r5t783['data'] ? tqr['push'](r5t783['data']) : gtd8qr6(r5t783, tqr, $o0byc, e1g2u, g_e4wu), r5t783 = r5t783['nextSibling'];
                } else {
                    for (; r5t783;) gtd8qr6(r5t783, tqr, $o0byc, e1g2u, g_e4wu), r5t783 = r5t783['nextSibling'];
                }
                tqr['push']('</', vzjnh, '>');
            } else tqr['push']('/>');
            return;
        case glbycm:
        case gdv6k:
            for (var r5t783 = b0yoc['firstChild']; r5t783;) gtd8qr6(r5t783, tqr, $o0byc, e1g2u, g_e4wu), r5t783 = r5t783['nextSibling'];
            return;
        case gi537rp:
            return tqr['push']('\x20', b0yoc['name'], '=\x22', b0yoc['value']['replace'](/[<&"]/g, gx2fs1), '\x22');
        case guw_o4e:
            return tqr['push'](b0yoc['data']['replace'](/[<&]/g, gx2fs1));
        case gzvk6hd:
            return tqr['push']('<![CDATA[', b0yoc['data'], ']]>');
        case gamb$c:
            return tqr['push']('<!--', b0yoc['data'], '-->');
        case gwo4e0:
            var g2_uwe = b0yoc['publicId'],
                fnxjsv = b0yoc['systemId'];
            if (tqr['push']('<!DOCTYPE ', b0yoc['name']), g2_uwe) tqr['push'](' PUBLIC "', g2_uwe), fnxjsv && '.' != fnxjsv && tqr['push']('\x22\x20\x22', fnxjsv), tqr['push']('\x22>');else {
                if (fnxjsv && '.' != fnxjsv) tqr['push'](' SYSTEM "', fnxjsv, '\x22>');else {
                    var bycl$m = b0yoc['internalSubset'];
                    bycl$m && tqr['push']('\x20[', bycl$m, ']'), tqr['push']('>');
                }
            }
            return;
        case gp3ir57:
            return tqr['push']('<?', b0yoc['target'], '\x20', b0yoc['data'], '?>');
        case gq85r7t:
            return tqr['push']('&', b0yoc['nodeName'], ';');
        default:
            tqr['push']('??', b0yoc['nodeName']);
    }
}
function gd86qtk(abl$, cob4, kd6q8t) {
    var sxvh;
    switch (cob4['nodeType']) {
        case gtq78r:
            sxvh = cob4['cloneNode'](!0x1), sxvh['ownerDocument'] = abl$;
        case gdv6k:
            break;
        case gi537rp:
            kd6q8t = !0x0;
    }
    if (sxvh || (sxvh = cob4['cloneNode'](!0x1)), sxvh['ownerDocument'] = abl$, sxvh['parentNode'] = null, kd6q8t) {
        for (var znvjsh = cob4['firstChild']; znvjsh;) sxvh['appendChild'](gd86qtk(abl$, znvjsh, kd6q8t)), znvjsh = znvjsh['nextSibling'];
    }
    return sxvh;
}
function gy_e4o(y$lmc, j2fs, cyl$mb) {
    var yo4_e = new j2fs['constructor']();
    for (var $lbm in j2fs) {
        var vsjnz = j2fs[$lbm];
        'object' != typeof vsjnz && vsjnz != yo4_e[$lbm] && (yo4_e[$lbm] = vsjnz);
    }
    switch (j2fs['childNodes'] && (yo4_e['childNodes'] = new gcbl0y()), yo4_e['ownerDocument'] = y$lmc, yo4_e['nodeType']) {
        case gtq78r:
            var _0oy = j2fs['attributes'],
                b0oc4 = yo4_e['attributes'] = new gyc4o_0(),
                uwe_4o = _0oy['length'];
            b0oc4['_ownerElement'] = yo4_e;
            for (var fnvsx = 0x0; uwe_4o > fnvsx; fnvsx++) yo4_e['setAttributeNode'](gy_e4o(y$lmc, _0oy['item'](fnvsx), !0x0));
            break;
        case gi537rp:
            cyl$mb = !0x0;
    }
    if (cyl$mb) {
        for (var w1fg = j2fs['firstChild']; w1fg;) yo4_e['appendChild'](gy_e4o(y$lmc, w1fg, cyl$mb)), w1fg = w1fg['nextSibling'];
    }
    return yo4_e;
}
function gdhzk6q(fs1x, tqrd5, kq8z) {
    fs1x[tqrd5] = kq8z;
}
function g_40ow(_gweu2) {
    switch (_gweu2['nodeType']) {
        case gtq78r:
        case gdv6k:
            var s1gxf2 = [];
            for (_gweu2 = _gweu2['firstChild']; _gweu2;) 0x7 !== _gweu2['nodeType'] && 0x8 !== _gweu2['nodeType'] && s1gxf2['push'](g_40ow(_gweu2)), _gweu2 = _gweu2['nextSibling'];
            return s1gxf2['join']('');
        default:
            return _gweu2['nodeValue'];
    }
}
var gkhjzn = 'http://www.w3.org/1999/xhtml',
    gcmy$b = {},
    gtq78r = gcmy$b['ELEMENT_NODE'] = 0x1,
    gi537rp = gcmy$b['ATTRIBUTE_NODE'] = 0x2,
    guw_o4e = gcmy$b['TEXT_NODE'] = 0x3,
    gzvk6hd = gcmy$b['CDATA_SECTION_NODE'] = 0x4,
    gq85r7t = gcmy$b['ENTITY_REFERENCE_NODE'] = 0x5,
    ghzkdv6 = gcmy$b['ENTITY_NODE'] = 0x6,
    gp3ir57 = gcmy$b['PROCESSING_INSTRUCTION_NODE'] = 0x7,
    gamb$c = gcmy$b['COMMENT_NODE'] = 0x8,
    glbycm = gcmy$b['DOCUMENT_NODE'] = 0x9,
    gwo4e0 = gcmy$b['DOCUMENT_TYPE_NODE'] = 0xa,
    gdv6k = gcmy$b['DOCUMENT_FRAGMENT_NODE'] = 0xb,
    gzjnvkh = gcmy$b['NOTATION_NODE'] = 0xc,
    g_4ouwe = {},
    gqhzk6 = {},
    ghzsnj = g_4ouwe['INDEX_SIZE_ERR'] = (gqhzk6[0x1] = 'Index size error', 0x1),
    gw2eg_ = g_4ouwe['DOMSTRING_SIZE_ERR'] = (gqhzk6[0x2] = 'DOMString size error', 0x2),
    gq6kzd = g_4ouwe['HIERARCHY_REQUEST_ERR'] = (gqhzk6[0x3] = 'Hierarchy request error', 0x3),
    gey4_0 = g_4ouwe['WRONG_DOCUMENT_ERR'] = (gqhzk6[0x4] = 'Wrong document', 0x4),
    gtp35r = g_4ouwe['INVALID_CHARACTER_ERR'] = (gqhzk6[0x5] = 'Invalid character', 0x5),
    ggw4_ue = g_4ouwe['NO_DATA_ALLOWED_ERR'] = (gqhzk6[0x6] = 'No data allowed', 0x6),
    gt8rd = g_4ouwe['NO_MODIFICATION_ALLOWED_ERR'] = (gqhzk6[0x7] = 'No modification allowed', 0x7),
    gvsnhx = g_4ouwe['NOT_FOUND_ERR'] = (gqhzk6[0x8] = 'Not found', 0x8),
    gkvz6dh = g_4ouwe['NOT_SUPPORTED_ERR'] = (gqhzk6[0x9] = 'Not supported', 0x9),
    gd6kvh = g_4ouwe['INUSE_ATTRIBUTE_ERR'] = (gqhzk6[0xa] = 'Attribute in use', 0xa),
    go_uwe = g_4ouwe['INVALID_STATE_ERR'] = (gqhzk6[0xb] = 'Invalid state', 0xb),
    gi35rp = g_4ouwe['SYNTAX_ERR'] = (gqhzk6[0xc] = 'Syntax error', 0xc),
    g_4ew = g_4ouwe['INVALID_MODIFICATION_ERR'] = (gqhzk6[0xd] = 'Invalid modification', 0xd),
    gb$ml = g_4ouwe['NAMESPACE_ERR'] = (gqhzk6[0xe] = 'Invalid namespace', 0xe),
    gbcmyl$ = g_4ouwe['INVALID_ACCESS_ERR'] = (gqhzk6[0xf] = 'Invalid access', 0xf);
gkzhnj['prototype'] = Error['prototype'], gqtk6d(g_4ouwe, gkzhnj), gcbl0y['prototype'] = {
    'length': 0x0,
    'item': function (w2gue1) {
        return this[w2gue1] || null;
    },
    'toString': function (y$blc0, dzhk) {
        for (var lyc$ = [], zv6k = 0x0; zv6k < this['length']; zv6k++) gtd8qr6(this[zv6k], lyc$, y$blc0, dzhk);
        return lyc$['join']('');
    }
}, gzhkvj['prototype']['item'] = function (nfvx) {
    return gyc04(this), this[nfvx];
}, glb$c0(gzhkvj, gcbl0y), gyc4o_0['prototype'] = {
    'length': 0x0,
    'item': gcbl0y['prototype']['item'],
    'getNamedItem': function (k68qd) {
        for (var p375t = this['length']; p375t--;) {
            var w4uoe = this[p375t];
            if (w4uoe['nodeName'] == k68qd) return w4uoe;
        }
    },
    'setNamedItem': function (td8q6k) {
        var _co0y4 = td8q6k['ownerElement'];
        if (_co0y4 && _co0y4 != this['_ownerElement']) throw new gkzhnj(gd6kvh);
        var h6dzv = this['getNamedItem'](td8q6k['nodeName']);
        return g_wg2u(this['_ownerElement'], this, td8q6k, h6dzv), h6dzv;
    },
    'setNamedItemNS': function (l9a) {
        var zdhk6,
            q86dtr = l9a['ownerElement'];
        if (q86dtr && q86dtr != this['_ownerElement']) throw new gkzhnj(gd6kvh);
        return zdhk6 = this['getNamedItemNS'](l9a['namespaceURI'], l9a['localName']), g_wg2u(this['_ownerElement'], this, l9a, zdhk6), zdhk6;
    },
    'removeNamedItem': function (fx1sn) {
        var kzvhjn = this['getNamedItem'](fx1sn);
        return ghkzvj(this['_ownerElement'], this, kzvhjn), kzvhjn;
    },
    'removeNamedItemNS': function (kz86qd, d5trq) {
        var xfs12g = this['getNamedItemNS'](kz86qd, d5trq);
        return ghkzvj(this['_ownerElement'], this, xfs12g), xfs12g;
    },
    'getNamedItemNS': function (xj2s1, sjvnzh) {
        for (var ob$c0y = this['length']; ob$c0y--;) {
            var jzvkn = this[ob$c0y];
            if (jzvkn['localName'] == sjvnzh && jzvkn['namespaceURI'] == xj2s1) return jzvkn;
        }
        return null;
    }
}, gdq68k['prototype'] = {
    'hasFeature': function (e_uow, r73pt5) {
        var fj1xns = this['_features'][e_uow['toLowerCase']()];
        return fj1xns && (!r73pt5 || r73pt5 in fj1xns) ? !0x0 : !0x1;
    },
    'createDocument': function (x2s1jf, h6zdk, jxfs2) {
        var c_04o = new gfu1w();
        if (c_04o['implementation'] = this, c_04o['childNodes'] = new gcbl0y(), c_04o['doctype'] = jxfs2, jxfs2 && c_04o['appendChild'](jxfs2), h6zdk) {
            var vzjnhs = c_04o['createElementNS'](x2s1jf, h6zdk);
            c_04o['appendChild'](vzjnhs);
        }
        return c_04o;
    },
    'createDocumentType': function (fgw21, pr3t5, _0yco) {
        var njhxs = new gbcy0();
        return njhxs['name'] = fgw21, njhxs['nodeName'] = fgw21, njhxs['publicId'] = pr3t5, njhxs['systemId'] = _0yco, njhxs;
    }
}, gc0_4['prototype'] = {
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
    'insertBefore': function (zk6vh, xjshv) {
        return gzn6k(this, zk6vh, xjshv);
    },
    'replaceChild': function (hnjvz, oy4_0) {
        this['insertBefore'](hnjvz, oy4_0), oy4_0 && this['removeChild'](oy4_0);
    },
    'removeChild': function (rp53) {
        return gknvjh(this, rp53);
    },
    'appendChild': function (c$l0yb) {
        return this['insertBefore'](c$l0yb, null);
    },
    'hasChildNodes': function () {
        return null != this['firstChild'];
    },
    'cloneNode': function (snhj) {
        return gy_e4o(this['ownerDocument'] || this, this, snhj);
    },
    'normalize': function () {
        for (var ylcmb$ = this['firstChild']; ylcmb$;) {
            var i3rp57 = ylcmb$['nextSibling'];
            i3rp57 && i3rp57['nodeType'] == guw_o4e && ylcmb$['nodeType'] == guw_o4e ? (this['removeChild'](i3rp57), ylcmb$['appendData'](i3rp57['data'])) : (ylcmb$['normalize'](), ylcmb$ = i3rp57);
        }
    },
    'isSupported': function (eu4_g, mcb$) {
        return this['ownerDocument']['implementation']['hasFeature'](eu4_g, mcb$);
    },
    'hasAttributes': function () {
        return this['attributes']['length'] > 0x0;
    },
    'lookupPrefix': function (vhzjsn) {
        for (var khd6 = this; khd6;) {
            var eg2w_ = khd6['_nsMap'];
            if (eg2w_) {
                for (var zjsh in eg2w_) if (eg2w_[zjsh] == vhzjsn) return zjsh;
            }
            khd6 = khd6['nodeType'] == gi537rp ? khd6['ownerDocument'] : khd6['parentNode'];
        }
        return null;
    },
    'lookupNamespaceURI': function (gu21w) {
        for (var ugwe_4 = this; ugwe_4;) {
            var jsxfn = ugwe_4['_nsMap'];
            if (jsxfn && gu21w in jsxfn) return jsxfn[gu21w];
            ugwe_4 = ugwe_4['nodeType'] == gi537rp ? ugwe_4['ownerDocument'] : ugwe_4['parentNode'];
        }
        return null;
    },
    'isDefaultNamespace': function (yc$o) {
        var ob4cy0 = this['lookupPrefix'](yc$o);
        return null == ob4cy0;
    }
}, gqtk6d(gcmy$b, gc0_4), gqtk6d(gcmy$b, gc0_4['prototype']), gfu1w['prototype'] = {
    'nodeName': '#document',
    'nodeType': glbycm,
    'doctype': null,
    'documentElement': null,
    '_inc': 0x1,
    'insertBefore': function (_w4oue, d8tr5) {
        if (_w4oue['nodeType'] == gdv6k) {
            for (var g2x1uf = _w4oue['firstChild']; g2x1uf;) {
                var $abml9 = g2x1uf['nextSibling'];
                this['insertBefore'](g2x1uf, d8tr5), g2x1uf = $abml9;
            }
            return _w4oue;
        }
        return null == this['documentElement'] && _w4oue['nodeType'] == gtq78r && (this['documentElement'] = _w4oue), gzn6k(this, _w4oue, d8tr5), _w4oue['ownerDocument'] = this, _w4oue;
    },
    'removeChild': function (mcb) {
        return this['documentElement'] == mcb && (this['documentElement'] = null), gknvjh(this, mcb);
    },
    'importNode': function (nsx1j, b9mal) {
        return gd86qtk(this, nsx1j, b9mal);
    },
    'getElementById': function (rp753) {
        var $aml9b = null;
        return gzhknjv(this['documentElement'], function (zdk68) {
            return zdk68['nodeType'] == gtq78r && zdk68['getAttribute']('id') == rp753 ? ($aml9b = zdk68, !0x0) : void 0x0;
        }), $aml9b;
    },
    'createElement': function (_y04co) {
        var tqd58r = new gfxs1g();
        tqd58r['ownerDocument'] = this, tqd58r['nodeName'] = _y04co, tqd58r['tagName'] = _y04co, tqd58r['childNodes'] = new gcbl0y();
        var yl0 = tqd58r['attributes'] = new gyc4o_0();
        return yl0['_ownerElement'] = tqd58r, tqd58r;
    },
    'createDocumentFragment': function () {
        var guw_2 = new gu1wge();
        return guw_2['ownerDocument'] = this, guw_2['childNodes'] = new gcbl0y(), guw_2;
    },
    'createTextNode': function (fsg2x) {
        var xvsn = new geo04_y();
        return xvsn['ownerDocument'] = this, xvsn['appendData'](fsg2x), xvsn;
    },
    'createComment': function (_wgue4) {
        var ouwe4_ = new gcbl0$();
        return ouwe4_['ownerDocument'] = this, ouwe4_['appendData'](_wgue4), ouwe4_;
    },
    'createCDATASection': function (u_o4we) {
        var oweu_ = new gzhnk6();
        return oweu_['ownerDocument'] = this, oweu_['appendData'](u_o4we), oweu_;
    },
    'createProcessingInstruction': function (_oy, rp7i3) {
        var t85rd = new ggue_2();
        return t85rd['ownerDocument'] = this, t85rd['tagName'] = t85rd['target'] = _oy, t85rd['nodeValue'] = t85rd['data'] = rp7i3, t85rd;
    },
    'createAttribute': function (hvzn) {
        var bcly$ = new ghsnv();
        return bcly$['ownerDocument'] = this, bcly$['name'] = hvzn, bcly$['nodeName'] = hvzn, bcly$['localName'] = hvzn, bcly$['specified'] = !0x0, bcly$;
    },
    'createEntityReference': function (h6dk) {
        var wu_eo = new ge_0yo();
        return wu_eo['ownerDocument'] = this, wu_eo['nodeName'] = h6dk, wu_eo;
    },
    'createElementNS': function (ue_4o, zjkhv) {
        var jx1fsn = new gfxs1g(),
            dq6khz = zjkhv['split'](':'),
            rp73i = jx1fsn['attributes'] = new gyc4o_0();
        return jx1fsn['childNodes'] = new gcbl0y(), jx1fsn['ownerDocument'] = this, jx1fsn['nodeName'] = zjkhv, jx1fsn['tagName'] = zjkhv, jx1fsn['namespaceURI'] = ue_4o, 0x2 == dq6khz['length'] ? (jx1fsn['prefix'] = dq6khz[0x0], jx1fsn['localName'] = dq6khz[0x1]) : jx1fsn['localName'] = zjkhv, rp73i['_ownerElement'] = jx1fsn, jx1fsn;
    },
    'createAttributeNS': function (lba9$, cbm$yl) {
        var jxvsh = new ghsnv(),
            i3r57p = cbm$yl['split'](':');
        return jxvsh['ownerDocument'] = this, jxvsh['nodeName'] = cbm$yl, jxvsh['name'] = cbm$yl, jxvsh['namespaceURI'] = lba9$, jxvsh['specified'] = !0x0, 0x2 == i3r57p['length'] ? (jxvsh['prefix'] = i3r57p[0x0], jxvsh['localName'] = i3r57p[0x1]) : jxvsh['localName'] = cbm$yl, jxvsh;
    }
}, glb$c0(gfu1w, gc0_4), gfxs1g['prototype'] = {
    'nodeType': gtq78r,
    'hasAttribute': function (wo_eu) {
        return null != this['getAttributeNode'](wo_eu);
    },
    'getAttribute': function (ybl0c) {
        var dr68qt = this['getAttributeNode'](ybl0c);
        return dr68qt && dr68qt['value'] || '';
    },
    'getAttributeNode': function (nvh6) {
        return this['attributes']['getNamedItem'](nvh6);
    },
    'setAttribute': function (q8d, lc$bm) {
        var dr5q8t = this['ownerDocument']['createAttribute'](q8d);
        dr5q8t['value'] = dr5q8t['nodeValue'] = '' + lc$bm, this['setAttributeNode'](dr5q8t);
    },
    'removeAttribute': function (mca) {
        var mbl$9 = this['getAttributeNode'](mca);
        mbl$9 && this['removeAttributeNode'](mbl$9);
    },
    'appendChild': function (ue2w_g) {
        return ue2w_g['nodeType'] === gdv6k ? this['insertBefore'](ue2w_g, null) : gxjsfn1(this, ue2w_g);
    },
    'setAttributeNode': function (t7rq5) {
        return this['attributes']['setNamedItem'](t7rq5);
    },
    'setAttributeNodeNS': function (s1) {
        return this['attributes']['setNamedItemNS'](s1);
    },
    'removeAttributeNode': function (_04ocy) {
        return this['attributes']['removeNamedItem'](_04ocy['nodeName']);
    },
    'removeAttributeNS': function (jkzvn, gf2wu1) {
        var e_wo4u = this['getAttributeNodeNS'](jkzvn, gf2wu1);
        e_wo4u && this['removeAttributeNode'](e_wo4u);
    },
    'hasAttributeNS': function (x1jnfs, k6qzd8) {
        return null != this['getAttributeNodeNS'](x1jnfs, k6qzd8);
    },
    'getAttributeNS': function (fg21xs, vhjsxn) {
        var snjf1 = this['getAttributeNodeNS'](fg21xs, vhjsxn);
        return snjf1 && snjf1['value'] || '';
    },
    'setAttributeNS': function (hnzv6k, qdk8, e1w2g) {
        var jkvnzh = this['ownerDocument']['createAttributeNS'](hnzv6k, qdk8);
        jkvnzh['value'] = jkvnzh['nodeValue'] = '' + e1w2g, this['setAttributeNode'](jkvnzh);
    },
    'getAttributeNodeNS': function (q8td6k, $oy0) {
        return this['attributes']['getNamedItemNS'](q8td6k, $oy0);
    },
    'getElementsByTagName': function (blc$y0) {
        return new gzhkvj(this, function (_4gu) {
            var vnjhxs = [];
            return gzhknjv(_4gu, function (ugwe_2) {
                ugwe_2 === _4gu || ugwe_2['nodeType'] != gtq78r || '*' !== blc$y0 && ugwe_2['tagName'] != blc$y0 || vnjhxs['push'](ugwe_2);
            }), vnjhxs;
        });
    },
    'getElementsByTagNameNS': function (ptr57, vhnxjs) {
        return new gzhkvj(this, function (oc$y0b) {
            var xf2ug = [];
            return gzhknjv(oc$y0b, function (l9m$ba) {
                l9m$ba === oc$y0b || l9m$ba['nodeType'] !== gtq78r || '*' !== ptr57 && l9m$ba['namespaceURI'] !== ptr57 || '*' !== vhnxjs && l9m$ba['localName'] != vhnxjs || xf2ug['push'](l9m$ba);
            }), xf2ug;
        });
    }
}, gfu1w['prototype']['getElementsByTagName'] = gfxs1g['prototype']['getElementsByTagName'], gfu1w['prototype']['getElementsByTagNameNS'] = gfxs1g['prototype']['getElementsByTagNameNS'], glb$c0(gfxs1g, gc0_4), ghsnv['prototype']['nodeType'] = gi537rp, glb$c0(ghsnv, gc0_4), gbm$l9a['prototype'] = {
    'data': '',
    'substringData': function (r5783, o_y4c0) {
        return this['data']['substring'](r5783, r5783 + o_y4c0);
    },
    'appendData': function (uoe_w) {
        uoe_w = this['data'] + uoe_w, this['nodeValue'] = this['data'] = uoe_w, this['length'] = uoe_w['length'];
    },
    'insertData': function (fux2, $mcal) {
        this['replaceData'](fux2, 0x0, $mcal);
    },
    'appendChild': function () {
        throw new Error(gqhzk6[gq6kzd]);
    },
    'deleteData': function (hxsj, svhjnz) {
        this['replaceData'](hxsj, svhjnz, '');
    },
    'replaceData': function (x1fgs, t853r7, g2_wu) {
        var fnjsv = this['data']['substring'](0x0, x1fgs),
            q6trd = this['data']['substring'](x1fgs + t853r7);
        g2_wu = fnjsv + g2_wu + q6trd, this['nodeValue'] = this['data'] = g2_wu, this['length'] = g2_wu['length'];
    }
}, glb$c0(gbm$l9a, gc0_4), geo04_y['prototype'] = {
    'nodeName': '#text',
    'nodeType': guw_o4e,
    'splitText': function (jxn1sf) {
        var vnkz6 = this['data'],
            b9a$ml = vnkz6['substring'](jxn1sf);
        vnkz6 = vnkz6['substring'](0x0, jxn1sf), this['data'] = this['nodeValue'] = vnkz6, this['length'] = vnkz6['length'];
        var wu2g = this['ownerDocument']['createTextNode'](b9a$ml);
        return this['parentNode'] && this['parentNode']['insertBefore'](wu2g, this['nextSibling']), wu2g;
    }
}, glb$c0(geo04_y, gbm$l9a), gcbl0$['prototype'] = {
    'nodeName': '#comment',
    'nodeType': gamb$c
}, glb$c0(gcbl0$, gbm$l9a), gzhnk6['prototype'] = {
    'nodeName': '#cdata-section',
    'nodeType': gzvk6hd
}, glb$c0(gzhnk6, gbm$l9a), gbcy0['prototype']['nodeType'] = gwo4e0, glb$c0(gbcy0, gc0_4), gsx1f2j['prototype']['nodeType'] = gzjnvkh, glb$c0(gsx1f2j, gc0_4), gd8kq6z['prototype']['nodeType'] = ghzkdv6, glb$c0(gd8kq6z, gc0_4), ge_0yo['prototype']['nodeType'] = gq85r7t, glb$c0(ge_0yo, gc0_4), gu1wge['prototype']['nodeName'] = '#document-fragment', gu1wge['prototype']['nodeType'] = gdv6k, glb$c0(gu1wge, gc0_4), ggue_2['prototype']['nodeType'] = gp3ir57, glb$c0(ggue_2, gc0_4), ggxu1['prototype']['serializeToString'] = function ($mcb, jnfvx, sf1n) {
    return g_y04oe['call']($mcb, jnfvx, sf1n);
}, gc0_4['prototype']['toString'] = g_y04oe;
try {
    Object['defineProperty'] && (Object['defineProperty'](gzhkvj['prototype'], 'length', {
        'get': function () {
            return gyc04(this), this['$$length'];
        }
    }), Object['defineProperty'](gc0_4['prototype'], 'textContent', {
        'get': function () {
            return g_40ow(this);
        },
        'set': function (z6dq8k) {
            switch (this['nodeType']) {
                case gtq78r:
                case gdv6k:
                    for (; this['firstChild'];) this['removeChild'](this['firstChild']);
                    (z6dq8k || String(z6dq8k)) && this['appendChild'](this['ownerDocument']['createTextNode'](z6dq8k));
                    break;
                default:
                    this['data'] = z6dq8k, this['value'] = z6dq8k, this['nodeValue'] = z6dq8k;
            }
        }
    }), gdhzk6q = function (ca$b, guf2x, c0$ybl) {
        ca$b['$$' + guf2x] = c0$ybl;
    });
} catch (gxf12gs) {}
exports['DOMImplementation'] = gdq68k, exports['XMLSerializer'] = ggxu1;