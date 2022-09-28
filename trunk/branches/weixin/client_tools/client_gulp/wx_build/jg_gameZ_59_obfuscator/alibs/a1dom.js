var c = wx.$a;
function gf2gs1(_04coy, s2fxg1) {
    for (var ym$lcb in _04coy) s2fxg1[ym$lcb] = _04coy[ym$lcb];
}
function gacblm$(rq6t8d, mblc) {
    function $0lcyb() {}
    var kvh6zn = rq6t8d['prototype'];
    if (Object['create']) {
        var _oy4 = Object['create'](mblc['prototype']);
        kvh6zn['__proto__'] = _oy4;
    }
    kvh6zn instanceof mblc || ($0lcyb['prototype'] = mblc['prototype'], $0lcyb = new $0lcyb(), gf2gs1(kvh6zn, $0lcyb), rq6t8d['prototype'] = kvh6zn = $0lcyb), kvh6zn['constructor'] != rq6t8d && ('function' != typeof rq6t8d && console['error']('unknow Class:' + rq6t8d), kvh6zn['constructor'] = rq6t8d);
}
function gue4ow_(sxg12, y4_co0) {
    if (y4_co0 instanceof Error) var i35r = y4_co0;else i35r = this, Error['call'](this, geo_0y[sxg12]), this['message'] = geo_0y[sxg12], Error['captureStackTrace'] && Error['captureStackTrace'](this, gue4ow_);
    return i35r['code'] = sxg12, y4_co0 && (this['message'] = this['message'] + ':\x20' + y4_co0), i35r;
}
function glmb() {}
function g_0yeo(o_e4wu, g_2weu) {
    this['_node'] = o_e4wu, this['_refresh'] = g_2weu, gq68trd(this);
}
function gq68trd(jfsx21) {
    var jhsnv = jfsx21['_node']['_inc'] || jfsx21['_node']['ownerDocument']['_inc'];
    if (jfsx21['_inc'] != jhsnv) {
        var hzsvj = jfsx21['_refresh'](jfsx21['_node']);
        gj1xfs(jfsx21, 'length', hzsvj['length']), gf2gs1(hzsvj, jfsx21), jfsx21['_inc'] = jhsnv;
    }
}
function g$acb() {}
function gt35r78(o0c$b, n6) {
    for (var oe0y4 = o0c$b['length']; oe0y4--;) if (o0c$b[oe0y4] === n6) return oe0y4;
}
function gy04bco(_u2g, l$mybc, o$bcy, woue) {
    if (woue ? l$mybc[gt35r78(l$mybc, woue)] = o$bcy : l$mybc[l$mybc['length']++] = o$bcy, _u2g) {
        o$bcy['ownerElement'] = _u2g;
        var dkt6 = _u2g['ownerDocument'];
        dkt6 && (woue && gl$cyb0(dkt6, _u2g, woue), gx1njf(dkt6, _u2g, o$bcy));
    }
}
function gk6hdqz(jszhvn, jxvsfn, bm9$l) {
    var kd6vzh = gt35r78(jxvsfn, bm9$l);
    if (!(kd6vzh >= 0x0)) throw gue4ow_(gsg2fx1, new Error(jszhvn['tagName'] + '@' + bm9$l));
    for (var $mybc = jxvsfn['length'] - 0x1; $mybc > kd6vzh;) jxvsfn[kd6vzh] = jxvsfn[++kd6vzh];
    if (jxvsfn['length'] = $mybc, jszhvn) {
        var bm9 = jszhvn['ownerDocument'];
        bm9 && (gl$cyb0(bm9, jszhvn, bm9$l), bm9$l['ownerElement'] = null);
    }
}
function gmlb9$a(sjvh) {
    if (this['_features'] = {}, sjvh) {
        for (var kdqhz6 in sjvh) this['_features'] = sjvh[kdqhz6];
    }
}
function gr378t() {}
function gp75tr3(y0b) {
    return '<' == y0b && '&lt;' || '>' == y0b && '&gt;' || '&' == y0b && '&amp;' || '\x22' == y0b && '&quot;' || '&#' + y0b['charCodeAt']() + ';';
}
function gyco$0(u4e_wg, $la9) {
    if ($la9(u4e_wg)) return !0x0;
    if (u4e_wg = u4e_wg['firstChild']) {
        do if (gyco$0(u4e_wg, $la9)) return !0x0; while (u4e_wg = u4e_wg['nextSibling']);
    }
}
function gqhkz6d() {}
function gx1njf(eg2wu, g1uw, qdzk) {
    eg2wu && eg2wu['_inc']++;
    var _oy04e = qdzk['namespaceURI'];
    'http://www.w3.org/2000/xmlns/' == _oy04e && (g1uw['_nsMap'][qdzk['prefix'] ? qdzk['localName'] : ''] = qdzk['value']);
}
function gl$cyb0(abl$mc, uf21g, jnshv) {
    abl$mc && abl$mc['_inc']++;
    var y0$l = jnshv['namespaceURI'];
    'http://www.w3.org/2000/xmlns/' == y0$l && delete uf21g['_nsMap'][jnshv['prefix'] ? jnshv['localName'] : ''];
}
function ge_4o0(_ow, byc40o, dzkhv6) {
    if (_ow && _ow['_inc']) {
        _ow['_inc']++;
        var w4ge_u = byc40o['childNodes'];
        if (dzkhv6) w4ge_u[w4ge_u['length']++] = dzkhv6;else {
            for (var ob$0y = byc40o['firstChild'], q758rt = 0x0; ob$0y;) w4ge_u[q758rt++] = ob$0y, ob$0y = ob$0y['nextSibling'];
            w4ge_u['length'] = q758rt;
        }
    }
}
function gkzh6dq(f1js2x, k86td) {
    var dr5t8q = k86td['previousSibling'],
        t6rqd = k86td['nextSibling'];
    return dr5t8q ? dr5t8q['nextSibling'] = t6rqd : f1js2x['firstChild'] = t6rqd, t6rqd ? t6rqd['previousSibling'] = dr5t8q : f1js2x['lastChild'] = dr5t8q, ge_4o0(f1js2x['ownerDocument'], f1js2x), k86td;
}
function gd8qt5(wf1gu, $9lma, z6qhk) {
    var xnvjfs = $9lma['parentNode'];
    if (xnvjfs && xnvjfs['removeChild']($9lma), $9lma['nodeType'] === gnjhzs) {
        var l$bca = $9lma['firstChild'];
        if (null == l$bca) return $9lma;
        var shzvnj = $9lma['lastChild'];
    } else l$bca = shzvnj = $9lma;
    var vk6zhn = z6qhk ? z6qhk['previousSibling'] : wf1gu['lastChild'];
    l$bca['previousSibling'] = vk6zhn, shzvnj['nextSibling'] = z6qhk, vk6zhn ? vk6zhn['nextSibling'] = l$bca : wf1gu['firstChild'] = l$bca, null == z6qhk ? wf1gu['lastChild'] = shzvnj : z6qhk['previousSibling'] = shzvnj;
    do l$bca['parentNode'] = wf1gu; while (l$bca !== shzvnj && (l$bca = l$bca['nextSibling']));
    return ge_4o0(wf1gu['ownerDocument'] || wf1gu, wf1gu), $9lma['nodeType'] == gnjhzs && ($9lma['firstChild'] = $9lma['lastChild'] = null), $9lma;
}
function gvfjnsx(knzh, dhq6zk) {
    var k8zd = dhq6zk['parentNode'];
    if (k8zd) {
        var c$bo0 = knzh['lastChild'];
        k8zd['removeChild'](dhq6zk);
        var c$bo0 = knzh['lastChild'];
    }
    var c$bo0 = knzh['lastChild'];
    return dhq6zk['parentNode'] = knzh, dhq6zk['previousSibling'] = c$bo0, dhq6zk['nextSibling'] = null, c$bo0 ? c$bo0['nextSibling'] = dhq6zk : knzh['firstChild'] = dhq6zk, knzh['lastChild'] = dhq6zk, ge_4o0(knzh['ownerDocument'], knzh, dhq6zk), dhq6zk;
}
function gxsjfv() {
    this['_nsMap'] = {};
}
function gx1fsjn() {}
function gd6kvhz() {}
function g_gu4e() {}
function g_weg() {}
function gqd6kzh() {}
function gc0yl$b() {}
function goe_4y0() {}
function ggu1fx2() {}
function gbla$9() {}
function ggsx21f() {}
function geoy4_0() {}
function ggfuw() {}
function gx2sg(r78t5, nvhzs) {
    var td58qr = [],
        hnzvj = 0x9 == this['nodeType'] ? this['documentElement'] : this,
        kzhvd = hnzvj['prefix'],
        v6zdkh = hnzvj['namespaceURI'];
    if (v6zdkh && null == kzhvd) {
        var kzhvd = hnzvj['lookupPrefix'](v6zdkh);
        if (null == kzhvd) var acb$m = [{
            'namespace': v6zdkh,
            'prefix': null
        }];
    }
    return gfsn1x(this, td58qr, r78t5, nvhzs, acb$m), td58qr['join']('');
}
function gshnjvx(d8tqr5, kqzdh6, cb$oy) {
    var xsvjf = d8tqr5['prefix'] || '',
        wu4o = d8tqr5['namespaceURI'];
    if (!xsvjf && !wu4o) return !0x1;
    if ('xml' === xsvjf && 'http://www.w3.org/XML/1998/namespace' === wu4o || 'http://www.w3.org/2000/xmlns/' == wu4o) return !0x1;
    for (var yo_4c = cb$oy['length']; yo_4c--;) {
        var sf1jn = cb$oy[yo_4c];
        if (sf1jn['prefix'] == xsvjf) return sf1jn['namespace'] != wu4o;
    }
    return !0x0;
}
function gfsn1x(c$byo0, r85t, _eyo4, qdt8r, u2e1wg) {
    if (qdt8r) {
        if (c$byo0 = qdt8r(c$byo0), !c$byo0) return;
        if ('string' == typeof c$byo0) return r85t['push'](c$byo0), void 0x0;
    }
    switch (c$byo0['nodeType']) {
        case gvhkznj:
            u2e1wg || (u2e1wg = []);
            var q8r5t7 = (u2e1wg['length'], c$byo0['attributes']),
                sxnvhj = q8r5t7['length'],
                e04_w = c$byo0['firstChild'],
                b40oc = c$byo0['tagName'];
            _eyo4 = gqdkh6z === c$byo0['namespaceURI'] || _eyo4, r85t['push']('<', b40oc);
            for (var c$mabl = 0x0; sxnvhj > c$mabl; c$mabl++) {
                var m$bac = q8r5t7['item'](c$mabl);
                'xmlns' == m$bac['prefix'] ? u2e1wg['push']({
                    'prefix': m$bac['localName'],
                    'namespace': m$bac['value']
                }) : 'xmlns' == m$bac['nodeName'] && u2e1wg['push']({
                    'prefix': '',
                    'namespace': m$bac['value']
                });
            }
            for (var c$mabl = 0x0; sxnvhj > c$mabl; c$mabl++) {
                var m$bac = q8r5t7['item'](c$mabl);
                if (gshnjvx(m$bac, _eyo4, u2e1wg)) {
                    var rip753 = m$bac['prefix'] || '',
                        a$cmbl = m$bac['namespaceURI'],
                        ycbm = rip753 ? ' xmlns:' + rip753 : ' xmlns';
                    r85t['push'](ycbm, '=\x22', a$cmbl, '\x22'), u2e1wg['push']({
                        'prefix': rip753,
                        'namespace': a$cmbl
                    });
                }
                gfsn1x(m$bac, r85t, _eyo4, qdt8r, u2e1wg);
            }
            if (gshnjvx(c$byo0, _eyo4, u2e1wg)) {
                var rip753 = c$byo0['prefix'] || '',
                    a$cmbl = c$byo0['namespaceURI'],
                    ycbm = rip753 ? ' xmlns:' + rip753 : ' xmlns';
                r85t['push'](ycbm, '=\x22', a$cmbl, '\x22'), u2e1wg['push']({
                    'prefix': rip753,
                    'namespace': a$cmbl
                });
            }
            if (e04_w || _eyo4 && !/^(?:meta|link|img|br|hr|input)$/i['test'](b40oc)) {
                if (r85t['push']('>'), _eyo4 && /^script$/i['test'](b40oc)) {
                    for (; e04_w;) e04_w['data'] ? r85t['push'](e04_w['data']) : gfsn1x(e04_w, r85t, _eyo4, qdt8r, u2e1wg), e04_w = e04_w['nextSibling'];
                } else {
                    for (; e04_w;) gfsn1x(e04_w, r85t, _eyo4, qdt8r, u2e1wg), e04_w = e04_w['nextSibling'];
                }
                r85t['push']('</', b40oc, '>');
            } else r85t['push']('/>');
            return;
        case gjvnxhs:
        case gnjhzs:
            for (var e04_w = c$byo0['firstChild']; e04_w;) gfsn1x(e04_w, r85t, _eyo4, qdt8r, u2e1wg), e04_w = e04_w['nextSibling'];
            return;
        case gge_wu:
            return r85t['push']('\x20', c$byo0['name'], '=\x22', c$byo0['value']['replace'](/[<&"]/g, gp75tr3), '\x22');
        case gboc$:
            return r85t['push'](c$byo0['data']['replace'](/[<&]/g, gp75tr3));
        case gzjkvh:
            return r85t['push']('<![CDATA[', c$byo0['data'], ']]>');
        case gu1fx:
            return r85t['push']('<!--', c$byo0['data'], '-->');
        case gc_4o:
            var sjnf1x = c$byo0['publicId'],
                fgw1u2 = c$byo0['systemId'];
            if (r85t['push']('<!DOCTYPE ', c$byo0['name']), sjnf1x) r85t['push'](' PUBLIC "', sjnf1x), fgw1u2 && '.' != fgw1u2 && r85t['push']('\x22\x20\x22', fgw1u2), r85t['push']('\x22>');else {
                if (fgw1u2 && '.' != fgw1u2) r85t['push'](' SYSTEM "', fgw1u2, '\x22>');else {
                    var cmbyl$ = c$byo0['internalSubset'];
                    cmbyl$ && r85t['push']('\x20[', cmbyl$, ']'), r85t['push']('>');
                }
            }
            return;
        case gy0lc$:
            return r85t['push']('<?', c$byo0['target'], '\x20', c$byo0['data'], '?>');
        case gtr853:
            return r85t['push']('&', c$byo0['nodeName'], ';');
        default:
            r85t['push']('??', c$byo0['nodeName']);
    }
}
function gkhq6z(c0$ylb, obc0$, hzkdv) {
    var oy0_c4;
    switch (obc0$['nodeType']) {
        case gvhkznj:
            oy0_c4 = obc0$['cloneNode'](!0x1), oy0_c4['ownerDocument'] = c0$ylb;
        case gnjhzs:
            break;
        case gge_wu:
            hzkdv = !0x0;
    }
    if (oy0_c4 || (oy0_c4 = obc0$['cloneNode'](!0x1)), oy0_c4['ownerDocument'] = c0$ylb, oy0_c4['parentNode'] = null, hzkdv) {
        for (var f1j2x = obc0$['firstChild']; f1j2x;) oy0_c4['appendChild'](gkhq6z(c0$ylb, f1j2x, hzkdv)), f1j2x = f1j2x['nextSibling'];
    }
    return oy0_c4;
}
function gf1x2gu(m9$ab, wuo4e_, woeu_) {
    var w_eug2 = new wuo4e_['constructor']();
    for (var shnzv in wuo4e_) {
        var d86rq = wuo4e_[shnzv];
        'object' != typeof d86rq && d86rq != w_eug2[shnzv] && (w_eug2[shnzv] = d86rq);
    }
    switch (wuo4e_['childNodes'] && (w_eug2['childNodes'] = new glmb()), w_eug2['ownerDocument'] = m9$ab, w_eug2['nodeType']) {
        case gvhkznj:
            var vx = wuo4e_['attributes'],
                euo4 = w_eug2['attributes'] = new g$acb(),
                c04yo = vx['length'];
            euo4['_ownerElement'] = w_eug2;
            for (var nzhvjs = 0x0; c04yo > nzhvjs; nzhvjs++) w_eug2['setAttributeNode'](gf1x2gu(m9$ab, vx['item'](nzhvjs), !0x0));
            break;
        case gge_wu:
            woeu_ = !0x0;
    }
    if (woeu_) {
        for (var t38r5 = wuo4e_['firstChild']; t38r5;) w_eug2['appendChild'](gf1x2gu(m9$ab, t38r5, woeu_)), t38r5 = t38r5['nextSibling'];
    }
    return w_eug2;
}
function gj1xfs(qtrd85, tq85rd, gxf2u1) {
    qtrd85[tq85rd] = gxf2u1;
}
function gkjnhvz(kz86) {
    switch (kz86['nodeType']) {
        case gvhkznj:
        case gnjhzs:
            var xnfvj = [];
            for (kz86 = kz86['firstChild']; kz86;) 0x7 !== kz86['nodeType'] && 0x8 !== kz86['nodeType'] && xnfvj['push'](gkjnhvz(kz86)), kz86 = kz86['nextSibling'];
            return xnfvj['join']('');
        default:
            return kz86['nodeValue'];
    }
}
var gqdkh6z = 'http://www.w3.org/1999/xhtml',
    gcmy = {},
    gvhkznj = gcmy['ELEMENT_NODE'] = 0x1,
    gge_wu = gcmy['ATTRIBUTE_NODE'] = 0x2,
    gboc$ = gcmy['TEXT_NODE'] = 0x3,
    gzjkvh = gcmy['CDATA_SECTION_NODE'] = 0x4,
    gtr853 = gcmy['ENTITY_REFERENCE_NODE'] = 0x5,
    gc$0ob = gcmy['ENTITY_NODE'] = 0x6,
    gy0lc$ = gcmy['PROCESSING_INSTRUCTION_NODE'] = 0x7,
    gu1fx = gcmy['COMMENT_NODE'] = 0x8,
    gjvnxhs = gcmy['DOCUMENT_NODE'] = 0x9,
    gc_4o = gcmy['DOCUMENT_TYPE_NODE'] = 0xa,
    gnjhzs = gcmy['DOCUMENT_FRAGMENT_NODE'] = 0xb,
    grq8t6d = gcmy['NOTATION_NODE'] = 0xc,
    gcoy4b = {},
    geo_0y = {},
    gt8q6k = gcoy4b['INDEX_SIZE_ERR'] = (geo_0y[0x1] = 'Index size error', 0x1),
    g_4w0e = gcoy4b['DOMSTRING_SIZE_ERR'] = (geo_0y[0x2] = 'DOMString size error', 0x2),
    gtk6d8q = gcoy4b['HIERARCHY_REQUEST_ERR'] = (geo_0y[0x3] = 'Hierarchy request error', 0x3),
    gzjn = gcoy4b['WRONG_DOCUMENT_ERR'] = (geo_0y[0x4] = 'Wrong document', 0x4),
    ghknz6 = gcoy4b['INVALID_CHARACTER_ERR'] = (geo_0y[0x5] = 'Invalid character', 0x5),
    gew2_gu = gcoy4b['NO_DATA_ALLOWED_ERR'] = (geo_0y[0x6] = 'No data allowed', 0x6),
    ghvjnkz = gcoy4b['NO_MODIFICATION_ALLOWED_ERR'] = (geo_0y[0x7] = 'No modification allowed', 0x7),
    gsg2fx1 = gcoy4b['NOT_FOUND_ERR'] = (geo_0y[0x8] = 'Not found', 0x8),
    gtdq68 = gcoy4b['NOT_SUPPORTED_ERR'] = (geo_0y[0x9] = 'Not supported', 0x9),
    gfvsnjx = gcoy4b['INUSE_ATTRIBUTE_ERR'] = (geo_0y[0xa] = 'Attribute in use', 0xa),
    gjxvf = gcoy4b['INVALID_STATE_ERR'] = (geo_0y[0xb] = 'Invalid state', 0xb),
    g$lmba = gcoy4b['SYNTAX_ERR'] = (geo_0y[0xc] = 'Syntax error', 0xc),
    gvkhzjn = gcoy4b['INVALID_MODIFICATION_ERR'] = (geo_0y[0xd] = 'Invalid modification', 0xd),
    g$cbmal = gcoy4b['NAMESPACE_ERR'] = (geo_0y[0xe] = 'Invalid namespace', 0xe),
    gjzvnkh = gcoy4b['INVALID_ACCESS_ERR'] = (geo_0y[0xf] = 'Invalid access', 0xf);
gue4ow_['prototype'] = Error['prototype'], gf2gs1(gcoy4b, gue4ow_), glmb['prototype'] = {
    'length': 0x0,
    'item': function (dzhvk) {
        return this[dzhvk] || null;
    },
    'toString': function (uwg12e, vfnjs) {
        for (var f12ug = [], x1g = 0x0; x1g < this['length']; x1g++) gfsn1x(this[x1g], f12ug, uwg12e, vfnjs);
        return f12ug['join']('');
    }
}, g_0yeo['prototype']['item'] = function (jvsxnf) {
    return gq68trd(this), this[jvsxnf];
}, gacblm$(g_0yeo, glmb), g$acb['prototype'] = {
    'length': 0x0,
    'item': glmb['prototype']['item'],
    'getNamedItem': function (w_e0o) {
        for (var k6zn = this['length']; k6zn--;) {
            var eg2w_ = this[k6zn];
            if (eg2w_['nodeName'] == w_e0o) return eg2w_;
        }
    },
    'setNamedItem': function (jsx21f) {
        var o_4e0 = jsx21f['ownerElement'];
        if (o_4e0 && o_4e0 != this['_ownerElement']) throw new gue4ow_(gfvsnjx);
        var nvx = this['getNamedItem'](jsx21f['nodeName']);
        return gy04bco(this['_ownerElement'], this, jsx21f, nvx), nvx;
    },
    'setNamedItemNS': function (oc_) {
        var hv6z,
            ow4u_ = oc_['ownerElement'];
        if (ow4u_ && ow4u_ != this['_ownerElement']) throw new gue4ow_(gfvsnjx);
        return hv6z = this['getNamedItemNS'](oc_['namespaceURI'], oc_['localName']), gy04bco(this['_ownerElement'], this, oc_, hv6z), hv6z;
    },
    'removeNamedItem': function ($mybl) {
        var vnkzj = this['getNamedItem']($mybl);
        return gk6hdqz(this['_ownerElement'], this, vnkzj), vnkzj;
    },
    'removeNamedItemNS': function (mycl$b, fu1g2) {
        var tr8q = this['getNamedItemNS'](mycl$b, fu1g2);
        return gk6hdqz(this['_ownerElement'], this, tr8q), tr8q;
    },
    'getNamedItemNS': function (sjvhnx, qrt587) {
        for (var qd8 = this['length']; qd8--;) {
            var y_4e0 = this[qd8];
            if (y_4e0['localName'] == qrt587 && y_4e0['namespaceURI'] == sjvhnx) return y_4e0;
        }
        return null;
    }
}, gmlb9$a['prototype'] = {
    'hasFeature': function (_4weg, njsxf1) {
        var geu12w = this['_features'][_4weg['toLowerCase']()];
        return geu12w && (!njsxf1 || njsxf1 in geu12w) ? !0x0 : !0x1;
    },
    'createDocument': function (j1fx2, ewu2g, jsnx) {
        var ybc$0l = new gqhkz6d();
        if (ybc$0l['implementation'] = this, ybc$0l['childNodes'] = new glmb(), ybc$0l['doctype'] = jsnx, jsnx && ybc$0l['appendChild'](jsnx), ewu2g) {
            var y04co = ybc$0l['createElementNS'](j1fx2, ewu2g);
            ybc$0l['appendChild'](y04co);
        }
        return ybc$0l;
    },
    'createDocumentType': function (r3pt5, svhznj, dq5t8) {
        var nfvjs = new gc0yl$b();
        return nfvjs['name'] = r3pt5, nfvjs['nodeName'] = r3pt5, nfvjs['publicId'] = svhznj, nfvjs['systemId'] = dq5t8, nfvjs;
    }
}, gr378t['prototype'] = {
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
    'insertBefore': function (nhkzvj, hq6zk) {
        return gd8qt5(this, nhkzvj, hq6zk);
    },
    'replaceChild': function (k6z8d, fvxj) {
        this['insertBefore'](k6z8d, fvxj), fvxj && this['removeChild'](fvxj);
    },
    'removeChild': function (rd85q) {
        return gkzh6dq(this, rd85q);
    },
    'appendChild': function (wug1f) {
        return this['insertBefore'](wug1f, null);
    },
    'hasChildNodes': function () {
        return null != this['firstChild'];
    },
    'cloneNode': function (ir75p3) {
        return gf1x2gu(this['ownerDocument'] || this, this, ir75p3);
    },
    'normalize': function () {
        for (var e2wu = this['firstChild']; e2wu;) {
            var eo_ = e2wu['nextSibling'];
            eo_ && eo_['nodeType'] == gboc$ && e2wu['nodeType'] == gboc$ ? (this['removeChild'](eo_), e2wu['appendData'](eo_['data'])) : (e2wu['normalize'](), e2wu = eo_);
        }
    },
    'isSupported': function (k6dzqh, dh6qz) {
        return this['ownerDocument']['implementation']['hasFeature'](k6dzqh, dh6qz);
    },
    'hasAttributes': function () {
        return this['attributes']['length'] > 0x0;
    },
    'lookupPrefix': function (r86q) {
        for (var e4_wuo = this; e4_wuo;) {
            var i735pr = e4_wuo['_nsMap'];
            if (i735pr) {
                for (var fwgu in i735pr) if (i735pr[fwgu] == r86q) return fwgu;
            }
            e4_wuo = e4_wuo['nodeType'] == gge_wu ? e4_wuo['ownerDocument'] : e4_wuo['parentNode'];
        }
        return null;
    },
    'lookupNamespaceURI': function (k6qtd8) {
        for (var t8d5qr = this; t8d5qr;) {
            var a9bm$ = t8d5qr['_nsMap'];
            if (a9bm$ && k6qtd8 in a9bm$) return a9bm$[k6qtd8];
            t8d5qr = t8d5qr['nodeType'] == gge_wu ? t8d5qr['ownerDocument'] : t8d5qr['parentNode'];
        }
        return null;
    },
    'isDefaultNamespace': function (r85t7q) {
        var vkh6z = this['lookupPrefix'](r85t7q);
        return null == vkh6z;
    }
}, gf2gs1(gcmy, gr378t), gf2gs1(gcmy, gr378t['prototype']), gqhkz6d['prototype'] = {
    'nodeName': '#document',
    'nodeType': gjvnxhs,
    'doctype': null,
    'documentElement': null,
    '_inc': 0x1,
    'insertBefore': function (oe40y, e2w_) {
        if (oe40y['nodeType'] == gnjhzs) {
            for (var zvknh6 = oe40y['firstChild']; zvknh6;) {
                var b$0yo = zvknh6['nextSibling'];
                this['insertBefore'](zvknh6, e2w_), zvknh6 = b$0yo;
            }
            return oe40y;
        }
        return null == this['documentElement'] && oe40y['nodeType'] == gvhkznj && (this['documentElement'] = oe40y), gd8qt5(this, oe40y, e2w_), oe40y['ownerDocument'] = this, oe40y;
    },
    'removeChild': function (ylc0b) {
        return this['documentElement'] == ylc0b && (this['documentElement'] = null), gkzh6dq(this, ylc0b);
    },
    'importNode': function (uegw21, dqrt68) {
        return gkhq6z(this, uegw21, dqrt68);
    },
    'getElementById': function (kvjz) {
        var snfjv = null;
        return gyco$0(this['documentElement'], function (bymlc) {
            return bymlc['nodeType'] == gvhkznj && bymlc['getAttribute']('id') == kvjz ? (snfjv = bymlc, !0x0) : void 0x0;
        }), snfjv;
    },
    'createElement': function (vkjnzh) {
        var ip3 = new gxsjfv();
        ip3['ownerDocument'] = this, ip3['nodeName'] = vkjnzh, ip3['tagName'] = vkjnzh, ip3['childNodes'] = new glmb();
        var _w2ueg = ip3['attributes'] = new g$acb();
        return _w2ueg['_ownerElement'] = ip3, ip3;
    },
    'createDocumentFragment': function () {
        var ug2e1w = new ggsx21f();
        return ug2e1w['ownerDocument'] = this, ug2e1w['childNodes'] = new glmb(), ug2e1w;
    },
    'createTextNode': function (vznk6) {
        var njvhz = new g_gu4e();
        return njvhz['ownerDocument'] = this, njvhz['appendData'](vznk6), njvhz;
    },
    'createComment': function (f1xu) {
        var w_2eug = new g_weg();
        return w_2eug['ownerDocument'] = this, w_2eug['appendData'](f1xu), w_2eug;
    },
    'createCDATASection': function (d6qz8) {
        var x1nfsj = new gqd6kzh();
        return x1nfsj['ownerDocument'] = this, x1nfsj['appendData'](d6qz8), x1nfsj;
    },
    'createProcessingInstruction': function (ybl$cm, q8trd6) {
        var kvhd6 = new geoy4_0();
        return kvhd6['ownerDocument'] = this, kvhd6['tagName'] = kvhd6['target'] = ybl$cm, kvhd6['nodeValue'] = kvhd6['data'] = q8trd6, kvhd6;
    },
    'createAttribute': function (o4y_c0) {
        var uo4_we = new gx1fsjn();
        return uo4_we['ownerDocument'] = this, uo4_we['name'] = o4y_c0, uo4_we['nodeName'] = o4y_c0, uo4_we['localName'] = o4y_c0, uo4_we['specified'] = !0x0, uo4_we;
    },
    'createEntityReference': function (vzjnh) {
        var ab$mcl = new gbla$9();
        return ab$mcl['ownerDocument'] = this, ab$mcl['nodeName'] = vzjnh, ab$mcl;
    },
    'createElementNS': function (hvjsx, weuo) {
        var t6kdq = new gxsjfv(),
            qtr78 = weuo['split'](':'),
            kz8dq = t6kdq['attributes'] = new g$acb();
        return t6kdq['childNodes'] = new glmb(), t6kdq['ownerDocument'] = this, t6kdq['nodeName'] = weuo, t6kdq['tagName'] = weuo, t6kdq['namespaceURI'] = hvjsx, 0x2 == qtr78['length'] ? (t6kdq['prefix'] = qtr78[0x0], t6kdq['localName'] = qtr78[0x1]) : t6kdq['localName'] = weuo, kz8dq['_ownerElement'] = t6kdq, t6kdq;
    },
    'createAttributeNS': function (qk8td6, fxvsj) {
        var svxfj = new gx1fsjn(),
            jznkv = fxvsj['split'](':');
        return svxfj['ownerDocument'] = this, svxfj['nodeName'] = fxvsj, svxfj['name'] = fxvsj, svxfj['namespaceURI'] = qk8td6, svxfj['specified'] = !0x0, 0x2 == jznkv['length'] ? (svxfj['prefix'] = jznkv[0x0], svxfj['localName'] = jznkv[0x1]) : svxfj['localName'] = fxvsj, svxfj;
    }
}, gacblm$(gqhkz6d, gr378t), gxsjfv['prototype'] = {
    'nodeType': gvhkznj,
    'hasAttribute': function (n6hkv) {
        return null != this['getAttributeNode'](n6hkv);
    },
    'getAttribute': function (t7rq5) {
        var dqt85r = this['getAttributeNode'](t7rq5);
        return dqt85r && dqt85r['value'] || '';
    },
    'getAttributeNode': function (cl$bm) {
        return this['attributes']['getNamedItem'](cl$bm);
    },
    'setAttribute': function (hvjknz, pr7t) {
        var $0coy = this['ownerDocument']['createAttribute'](hvjknz);
        $0coy['value'] = $0coy['nodeValue'] = '' + pr7t, this['setAttributeNode']($0coy);
    },
    'removeAttribute': function (fjxn) {
        var oyc4b0 = this['getAttributeNode'](fjxn);
        oyc4b0 && this['removeAttributeNode'](oyc4b0);
    },
    'appendChild': function (owue_) {
        return owue_['nodeType'] === gnjhzs ? this['insertBefore'](owue_, null) : gvfjnsx(this, owue_);
    },
    'setAttributeNode': function (ou4e_w) {
        return this['attributes']['setNamedItem'](ou4e_w);
    },
    'setAttributeNodeNS': function (co4) {
        return this['attributes']['setNamedItemNS'](co4);
    },
    'removeAttributeNode': function (t5rd8) {
        return this['attributes']['removeNamedItem'](t5rd8['nodeName']);
    },
    'removeAttributeNS': function (kjnhzv, vjnfxs) {
        var zk8 = this['getAttributeNodeNS'](kjnhzv, vjnfxs);
        zk8 && this['removeAttributeNode'](zk8);
    },
    'hasAttributeNS': function (d8t5qr, sxfg) {
        return null != this['getAttributeNodeNS'](d8t5qr, sxfg);
    },
    'getAttributeNS': function (lma$cb, sfvnx) {
        var sx1fnj = this['getAttributeNodeNS'](lma$cb, sfvnx);
        return sx1fnj && sx1fnj['value'] || '';
    },
    'setAttributeNS': function (ac$lb, w1gu2, dhv6) {
        var u2eg_ = this['ownerDocument']['createAttributeNS'](ac$lb, w1gu2);
        u2eg_['value'] = u2eg_['nodeValue'] = '' + dhv6, this['setAttributeNode'](u2eg_);
    },
    'getAttributeNodeNS': function (ktdq86, fjvxns) {
        return this['attributes']['getNamedItemNS'](ktdq86, fjvxns);
    },
    'getElementsByTagName': function ($cbyo0) {
        return new g_0yeo(this, function (rt85q7) {
            var jhzvkn = [];
            return gyco$0(rt85q7, function (l9$b) {
                l9$b === rt85q7 || l9$b['nodeType'] != gvhkznj || '*' !== $cbyo0 && l9$b['tagName'] != $cbyo0 || jhzvkn['push'](l9$b);
            }), jhzvkn;
        });
    },
    'getElementsByTagNameNS': function (r58d, yo4b) {
        return new g_0yeo(this, function (_0ye) {
            var bocy = [];
            return gyco$0(_0ye, function (ri3p7) {
                ri3p7 === _0ye || ri3p7['nodeType'] !== gvhkznj || '*' !== r58d && ri3p7['namespaceURI'] !== r58d || '*' !== yo4b && ri3p7['localName'] != yo4b || bocy['push'](ri3p7);
            }), bocy;
        });
    }
}, gqhkz6d['prototype']['getElementsByTagName'] = gxsjfv['prototype']['getElementsByTagName'], gqhkz6d['prototype']['getElementsByTagNameNS'] = gxsjfv['prototype']['getElementsByTagNameNS'], gacblm$(gxsjfv, gr378t), gx1fsjn['prototype']['nodeType'] = gge_wu, gacblm$(gx1fsjn, gr378t), gd6kvhz['prototype'] = {
    'data': '',
    'substringData': function (lbm$ac, fgu1x2) {
        return this['data']['substring'](lbm$ac, lbm$ac + fgu1x2);
    },
    'appendData': function (bym$cl) {
        bym$cl = this['data'] + bym$cl, this['nodeValue'] = this['data'] = bym$cl, this['length'] = bym$cl['length'];
    },
    'insertData': function (tr857q, xhsjnv) {
        this['replaceData'](tr857q, 0x0, xhsjnv);
    },
    'appendChild': function () {
        throw new Error(geo_0y[gtk6d8q]);
    },
    'deleteData': function (_yco0, fx1j) {
        this['replaceData'](_yco0, fx1j, '');
    },
    'replaceData': function (fg1u, vsjnz, fxj2s1) {
        var xuf = this['data']['substring'](0x0, fg1u),
            a$l9m = this['data']['substring'](fg1u + vsjnz);
        fxj2s1 = xuf + fxj2s1 + a$l9m, this['nodeValue'] = this['data'] = fxj2s1, this['length'] = fxj2s1['length'];
    }
}, gacblm$(gd6kvhz, gr378t), g_gu4e['prototype'] = {
    'nodeName': '#text',
    'nodeType': gboc$,
    'splitText': function (fs1n) {
        var _gw2u = this['data'],
            y_04c = _gw2u['substring'](fs1n);
        _gw2u = _gw2u['substring'](0x0, fs1n), this['data'] = this['nodeValue'] = _gw2u, this['length'] = _gw2u['length'];
        var yco4 = this['ownerDocument']['createTextNode'](y_04c);
        return this['parentNode'] && this['parentNode']['insertBefore'](yco4, this['nextSibling']), yco4;
    }
}, gacblm$(g_gu4e, gd6kvhz), g_weg['prototype'] = {
    'nodeName': '#comment',
    'nodeType': gu1fx
}, gacblm$(g_weg, gd6kvhz), gqd6kzh['prototype'] = {
    'nodeName': '#cdata-section',
    'nodeType': gzjkvh
}, gacblm$(gqd6kzh, gd6kvhz), gc0yl$b['prototype']['nodeType'] = gc_4o, gacblm$(gc0yl$b, gr378t), goe_4y0['prototype']['nodeType'] = grq8t6d, gacblm$(goe_4y0, gr378t), ggu1fx2['prototype']['nodeType'] = gc$0ob, gacblm$(ggu1fx2, gr378t), gbla$9['prototype']['nodeType'] = gtr853, gacblm$(gbla$9, gr378t), ggsx21f['prototype']['nodeName'] = '#document-fragment', ggsx21f['prototype']['nodeType'] = gnjhzs, gacblm$(ggsx21f, gr378t), geoy4_0['prototype']['nodeType'] = gy0lc$, gacblm$(geoy4_0, gr378t), ggfuw['prototype']['serializeToString'] = function (p537, o0y4cb, hv6dz) {
    return gx2sg['call'](p537, o0y4cb, hv6dz);
}, gr378t['prototype']['toString'] = gx2sg;
try {
    Object['defineProperty'] && (Object['defineProperty'](g_0yeo['prototype'], 'length', {
        'get': function () {
            return gq68trd(this), this['$$length'];
        }
    }), Object['defineProperty'](gr378t['prototype'], 'textContent', {
        'get': function () {
            return gkjnhvz(this);
        },
        'set': function (r58dt) {
            switch (this['nodeType']) {
                case gvhkznj:
                case gnjhzs:
                    for (; this['firstChild'];) this['removeChild'](this['firstChild']);
                    (r58dt || String(r58dt)) && this['appendChild'](this['ownerDocument']['createTextNode'](r58dt));
                    break;
                default:
                    this['data'] = r58dt, this['value'] = r58dt, this['nodeValue'] = r58dt;
            }
        }
    }), gj1xfs = function (zvdh, qt8kd, jf12) {
        zvdh['$$' + qt8kd] = jf12;
    });
} catch (gcml$y) {}
exports['DOMImplementation'] = gmlb9$a, exports['XMLSerializer'] = ggfuw;