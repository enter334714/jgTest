var m = wx.$g;
function gt_o3f4(b0ap5i, rj26$u) {
    for (var xiak in b0ap5i) rj26$u[xiak] = b0ap5i[xiak];
}
function gwqve7y(pf_05b, yk1ew) {
    function b0p_5() {}
    var pa5xi = pf_05b['prototype'];
    if (Object['create']) {
        var zdo24 = Object['create'](yk1ew['prototype']);
        pa5xi['__proto__'] = zdo24;
    }
    pa5xi instanceof yk1ew || (b0p_5['prototype'] = yk1ew['prototype'], b0p_5 = new b0p_5(), gt_o3f4(pa5xi, b0p_5), pf_05b['prototype'] = pa5xi = b0p_5), pa5xi['constructor'] != pf_05b && ('function' != typeof pf_05b && console['error']('unknow Class:' + pf_05b), pa5xi['constructor'] = pf_05b);
}
function ghxi1k(t0_43, aikhx1) {
    if (aikhx1 instanceof Error) var tf_40 = aikhx1;else tf_40 = this, Error['call'](this, gumj6r$[t0_43]), this['message'] = gumj6r$[t0_43], Error['captureStackTrace'] && Error['captureStackTrace'](this, ghxi1k);
    return tf_40['code'] = t0_43, aikhx1 && (this['message'] = this['message'] + ':\x20' + aikhx1), tf_40;
}
function gapb0i5() {}
function ghxik1(w7vqey, drj62) {
    this['_node'] = w7vqey, this['_refresh'] = drj62, gmr$j6u(this);
}
function gmr$j6u(cqs7vg) {
    var pf5_0b = cqs7vg['_node']['_inc'] || cqs7vg['_node']['ownerDocument']['_inc'];
    if (cqs7vg['_inc'] != pf5_0b) {
        var vg7eyq = cqs7vg['_refresh'](cqs7vg['_node']);
        gd36o2(cqs7vg, 'length', vg7eyq['length']), gt_o3f4(vg7eyq, cqs7vg), cqs7vg['_inc'] = pf5_0b;
    }
}
function gq7g8sc() {}
function gh1aix5(kahw1, $m) {
    for (var zo2rd6 = kahw1['length']; zo2rd6--;) if (kahw1[zo2rd6] === $m) return zo2rd6;
}
function gj6ur2$(vy7wek, h1wax, tz4od, v7cqeg) {
    if (v7cqeg ? h1wax[gh1aix5(h1wax, v7cqeg)] = tz4od : h1wax[h1wax['length']++] = tz4od, vy7wek) {
        tz4od['ownerElement'] = vy7wek;
        var ix5ab = vy7wek['ownerDocument'];
        ix5ab && (v7cqeg && gwk1xh(ix5ab, vy7wek, v7cqeg), gf_40t3(ix5ab, vy7wek, tz4od));
    }
}
function gslqg8c(yhekw, d6r2oz, cgq8sl) {
    var h5abx = gh1aix5(d6r2oz, cgq8sl);
    if (!(h5abx >= 0x0)) throw ghxi1k(gr6$2zj, new Error(yhekw['tagName'] + '@' + cgq8sl));
    for (var abxi = d6r2oz['length'] - 0x1; abxi > h5abx;) d6r2oz[h5abx] = d6r2oz[++h5abx];
    if (d6r2oz['length'] = abxi, yhekw) {
        var ur2j6 = yhekw['ownerDocument'];
        ur2j6 && (gwk1xh(ur2j6, yhekw, cgq8sl), cgq8sl['ownerElement'] = null);
    }
}
function gof3_t4(_fto34) {
    if (this['_features'] = {}, _fto34) {
        for (var ev7wky in _fto34) this['_features'] = _fto34[ev7wky];
    }
}
function gm$uj() {}
function gmru$j6(v7gqsc) {
    return '<' == v7gqsc && '&lt;' || '>' == v7gqsc && '&gt;' || '&' == v7gqsc && '&amp;' || '\x22' == v7gqsc && '&quot;' || '&#' + v7gqsc['charCodeAt']() + ';';
}
function gg8sc9l(r6u$m, yvwe7) {
    if (yvwe7(r6u$m)) return !0x0;
    if (r6u$m = r6u$m['firstChild']) {
        do if (gg8sc9l(r6u$m, yvwe7)) return !0x0; while (r6u$m = r6u$m['nextSibling']);
    }
}
function gp_0tf4() {}
function gf_40t3(m6$urj, j2$u6r, r$jmu) {
    m6$urj && m6$urj['_inc']++;
    var rju2$ = r$jmu['namespaceURI'];
    'http://www.w3.org/2000/xmlns/' == rju2$ && (j2$u6r['_nsMap'][r$jmu['prefix'] ? r$jmu['localName'] : ''] = r$jmu['value']);
}
function gwk1xh(v7yqew, vg7eq, tb_0pf) {
    v7yqew && v7yqew['_inc']++;
    var gqev7 = tb_0pf['namespaceURI'];
    'http://www.w3.org/2000/xmlns/' == gqev7 && delete vg7eq['_nsMap'][tb_0pf['prefix'] ? tb_0pf['localName'] : ''];
}
function gp5ixa(v7eywq, zr26od, f_403t) {
    if (v7eywq && v7eywq['_inc']) {
        v7eywq['_inc']++;
        var csg8l = zr26od['childNodes'];
        if (f_403t) csg8l[csg8l['length']++] = f_403t;else {
            for (var scg9l8 = zr26od['firstChild'], veq7cg = 0x0; scg9l8;) csg8l[veq7cg++] = scg9l8, scg9l8 = scg9l8['nextSibling'];
            csg8l['length'] = veq7cg;
        }
    }
}
function gls8g9c(z62d3, o34td) {
    var r26dzj = o34td['previousSibling'],
        zod23 = o34td['nextSibling'];
    return r26dzj ? r26dzj['nextSibling'] = zod23 : z62d3['firstChild'] = zod23, zod23 ? zod23['previousSibling'] = r26dzj : z62d3['lastChild'] = r26dzj, gp5ixa(z62d3['ownerDocument'], z62d3), o34td;
}
function giapxb5(fdot34, wev7ky, oz62) {
    var zrjd62 = wev7ky['parentNode'];
    if (zrjd62 && zrjd62['removeChild'](wev7ky), wev7ky['nodeType'] === gm6u$r) {
        var k1ewhy = wev7ky['firstChild'];
        if (null == k1ewhy) return wev7ky;
        var yhw1kx = wev7ky['lastChild'];
    } else k1ewhy = yhw1kx = wev7ky;
    var qv7ew = oz62 ? oz62['previousSibling'] : fdot34['lastChild'];
    k1ewhy['previousSibling'] = qv7ew, yhw1kx['nextSibling'] = oz62, qv7ew ? qv7ew['nextSibling'] = k1ewhy : fdot34['firstChild'] = k1ewhy, null == oz62 ? fdot34['lastChild'] = yhw1kx : oz62['previousSibling'] = yhw1kx;
    do k1ewhy['parentNode'] = fdot34; while (k1ewhy !== yhw1kx && (k1ewhy = k1ewhy['nextSibling']));
    return gp5ixa(fdot34['ownerDocument'] || fdot34, fdot34), wev7ky['nodeType'] == gm6u$r && (wev7ky['firstChild'] = wev7ky['lastChild'] = null), wev7ky;
}
function gq7evc(vegcq, baxi5h) {
    var mu = baxi5h['parentNode'];
    if (mu) {
        var ky7 = vegcq['lastChild'];
        mu['removeChild'](baxi5h);
        var ky7 = vegcq['lastChild'];
    }
    var ky7 = vegcq['lastChild'];
    return baxi5h['parentNode'] = vegcq, baxi5h['previousSibling'] = ky7, baxi5h['nextSibling'] = null, ky7 ? ky7['nextSibling'] = baxi5h : vegcq['firstChild'] = baxi5h, vegcq['lastChild'] = baxi5h, gp5ixa(vegcq['ownerDocument'], vegcq, baxi5h), baxi5h;
}
function gsq87g() {
    this['_nsMap'] = {};
}
function gpxbai() {}
function gh1kix() {}
function gk1xwy() {}
function ghxk1ia() {}
function gvkywe1() {}
function gd2orz6() {}
function gwv7yek() {}
function gy1vwk() {}
function g_05bip() {}
function gixhak() {}
function gd623() {}
function gp0bft() {}
function gh1xw(otd4z3, f430_) {
    var qgyve = [],
        q78sg = 0x9 == this['nodeType'] ? this['documentElement'] : this,
        t430 = q78sg['prefix'],
        cl8s9g = q78sg['namespaceURI'];
    if (cl8s9g && null == t430) {
        var t430 = q78sg['lookupPrefix'](cl8s9g);
        if (null == t430) var vgeqy7 = [{
            'namespace': cl8s9g,
            'prefix': null
        }];
    }
    return gw7vkey(this, qgyve, otd4z3, f430_, vgeqy7), qgyve['join']('');
}
function gjr$um(zo63d, ibapx5, yvw7ke) {
    var z6d2 = zo63d['prefix'] || '',
        ju$r2 = zo63d['namespaceURI'];
    if (!z6d2 && !ju$r2) return !0x1;
    if ('xml' === z6d2 && 'http://www.w3.org/XML/1998/namespace' === ju$r2 || 'http://www.w3.org/2000/xmlns/' == ju$r2) return !0x1;
    for (var gqcsv7 = yvw7ke['length']; gqcsv7--;) {
        var b0fpt_ = yvw7ke[gqcsv7];
        if (b0fpt_['prefix'] == z6d2) return b0fpt_['namespace'] != ju$r2;
    }
    return !0x0;
}
function gw7vkey(tf0pb_, ibxap, qs8cl, gqsvc7, jz6r2$) {
    if (gqsvc7) {
        if (tf0pb_ = gqsvc7(tf0pb_), !tf0pb_) return;
        if ('string' == typeof tf0pb_) return ibxap['push'](tf0pb_), void 0x0;
    }
    switch (tf0pb_['nodeType']) {
        case gi1xa5:
            jz6r2$ || (jz6r2$ = []);
            var o34tz = (jz6r2$['length'], tf0pb_['attributes']),
                u$r62 = o34tz['length'],
                x5ipa = tf0pb_['firstChild'],
                m6$ru = tf0pb_['tagName'];
            qs8cl = gtp4_0 === tf0pb_['namespaceURI'] || qs8cl, ibxap['push']('<', m6$ru);
            for (var to_4 = 0x0; u$r62 > to_4; to_4++) {
                var rdz62j = o34tz['item'](to_4);
                'xmlns' == rdz62j['prefix'] ? jz6r2$['push']({
                    'prefix': rdz62j['localName'],
                    'namespace': rdz62j['value']
                }) : 'xmlns' == rdz62j['nodeName'] && jz6r2$['push']({
                    'prefix': '',
                    'namespace': rdz62j['value']
                });
            }
            for (var to_4 = 0x0; u$r62 > to_4; to_4++) {
                var rdz62j = o34tz['item'](to_4);
                if (gjr$um(rdz62j, qs8cl, jz6r2$)) {
                    var to4df = rdz62j['prefix'] || '',
                        x15ah = rdz62j['namespaceURI'],
                        c9sl = to4df ? ' xmlns:' + to4df : ' xmlns';
                    ibxap['push'](c9sl, '=\x22', x15ah, '\x22'), jz6r2$['push']({
                        'prefix': to4df,
                        'namespace': x15ah
                    });
                }
                gw7vkey(rdz62j, ibxap, qs8cl, gqsvc7, jz6r2$);
            }
            if (gjr$um(tf0pb_, qs8cl, jz6r2$)) {
                var to4df = tf0pb_['prefix'] || '',
                    x15ah = tf0pb_['namespaceURI'],
                    c9sl = to4df ? ' xmlns:' + to4df : ' xmlns';
                ibxap['push'](c9sl, '=\x22', x15ah, '\x22'), jz6r2$['push']({
                    'prefix': to4df,
                    'namespace': x15ah
                });
            }
            if (x5ipa || qs8cl && !/^(?:meta|link|img|br|hr|input)$/i['test'](m6$ru)) {
                if (ibxap['push']('>'), qs8cl && /^script$/i['test'](m6$ru)) {
                    for (; x5ipa;) x5ipa['data'] ? ibxap['push'](x5ipa['data']) : gw7vkey(x5ipa, ibxap, qs8cl, gqsvc7, jz6r2$), x5ipa = x5ipa['nextSibling'];
                } else {
                    for (; x5ipa;) gw7vkey(x5ipa, ibxap, qs8cl, gqsvc7, jz6r2$), x5ipa = x5ipa['nextSibling'];
                }
                ibxap['push']('</', m6$ru, '>');
            } else ibxap['push']('/>');
            return;
        case gp0ft_:
        case gm6u$r:
            for (var x5ipa = tf0pb_['firstChild']; x5ipa;) gw7vkey(x5ipa, ibxap, qs8cl, gqsvc7, jz6r2$), x5ipa = x5ipa['nextSibling'];
            return;
        case gkweh1:
            return ibxap['push']('\x20', tf0pb_['name'], '=\x22', tf0pb_['value']['replace'](/[<&"]/g, gmru$j6), '\x22');
        case g_04fpt:
            return ibxap['push'](tf0pb_['data']['replace'](/[<&]/g, gmru$j6));
        case g_pf0bt:
            return ibxap['push']('<![CDATA[', tf0pb_['data'], ']]>');
        case gb5ia:
            return ibxap['push']('<!--', tf0pb_['data'], '-->');
        case gcsgq7:
            var kyx1w = tf0pb_['publicId'],
                _34tof = tf0pb_['systemId'];
            if (ibxap['push']('<!DOCTYPE ', tf0pb_['name']), kyx1w) ibxap['push'](' PUBLIC "', kyx1w), _34tof && '.' != _34tof && ibxap['push']('\x22\x20\x22', _34tof), ibxap['push']('\x22>');else {
                if (_34tof && '.' != _34tof) ibxap['push'](' SYSTEM "', _34tof, '\x22>');else {
                    var tf0p_4 = tf0pb_['internalSubset'];
                    tf0p_4 && ibxap['push']('\x20[', tf0p_4, ']'), ibxap['push']('>');
                }
            }
            return;
        case gx5abp:
            return ibxap['push']('<?', tf0pb_['target'], '\x20', tf0pb_['data'], '?>');
        case ggc7qvs:
            return ibxap['push']('&', tf0pb_['nodeName'], ';');
        default:
            ibxap['push']('??', tf0pb_['nodeName']);
    }
}
function gkxia1h(tof43d, sqgc78, x5ia) {
    var yvke;
    switch (sqgc78['nodeType']) {
        case gi1xa5:
            yvke = sqgc78['cloneNode'](!0x1), yvke['ownerDocument'] = tof43d;
        case gm6u$r:
            break;
        case gkweh1:
            x5ia = !0x0;
    }
    if (yvke || (yvke = sqgc78['cloneNode'](!0x1)), yvke['ownerDocument'] = tof43d, yvke['parentNode'] = null, x5ia) {
        for (var v7scqg = sqgc78['firstChild']; v7scqg;) yvke['appendChild'](gkxia1h(tof43d, v7scqg, x5ia)), v7scqg = v7scqg['nextSibling'];
    }
    return yvke;
}
function gkw1ve(t0fp4_, tf3od4, khyx1) {
    var hakx = new tf3od4['constructor']();
    for (var yvkew1 in tf3od4) {
        var eqw = tf3od4[yvkew1];
        'object' != typeof eqw && eqw != hakx[yvkew1] && (hakx[yvkew1] = eqw);
    }
    switch (tf3od4['childNodes'] && (hakx['childNodes'] = new gapb0i5()), hakx['ownerDocument'] = t0fp4_, hakx['nodeType']) {
        case gi1xa5:
            var scvq7g = tf3od4['attributes'],
                ixb5 = hakx['attributes'] = new gq7g8sc(),
                b5p0ia = scvq7g['length'];
            ixb5['_ownerElement'] = hakx;
            for (var q7g8cs = 0x0; b5p0ia > q7g8cs; q7g8cs++) hakx['setAttributeNode'](gkw1ve(t0fp4_, scvq7g['item'](q7g8cs), !0x0));
            break;
        case gkweh1:
            khyx1 = !0x0;
    }
    if (khyx1) {
        for (var o6drz2 = tf3od4['firstChild']; o6drz2;) hakx['appendChild'](gkw1ve(t0fp4_, o6drz2, khyx1)), o6drz2 = o6drz2['nextSibling'];
    }
    return hakx;
}
function gd36o2(hyx1, mr$ju, td3of4) {
    hyx1[mr$ju] = td3of4;
}
function gu26r$(zo6d23) {
    switch (zo6d23['nodeType']) {
        case gi1xa5:
        case gm6u$r:
            var w1keh = [];
            for (zo6d23 = zo6d23['firstChild']; zo6d23;) 0x7 !== zo6d23['nodeType'] && 0x8 !== zo6d23['nodeType'] && w1keh['push'](gu26r$(zo6d23)), zo6d23 = zo6d23['nextSibling'];
            return w1keh['join']('');
        default:
            return zo6d23['nodeValue'];
    }
}
var gtp4_0 = 'http://www.w3.org/1999/xhtml',
    ggslc8q = {},
    gi1xa5 = ggslc8q['ELEMENT_NODE'] = 0x1,
    gkweh1 = ggslc8q['ATTRIBUTE_NODE'] = 0x2,
    g_04fpt = ggslc8q['TEXT_NODE'] = 0x3,
    g_pf0bt = ggslc8q['CDATA_SECTION_NODE'] = 0x4,
    ggc7qvs = ggslc8q['ENTITY_REFERENCE_NODE'] = 0x5,
    gax5p = ggslc8q['ENTITY_NODE'] = 0x6,
    gx5abp = ggslc8q['PROCESSING_INSTRUCTION_NODE'] = 0x7,
    gb5ia = ggslc8q['COMMENT_NODE'] = 0x8,
    gp0ft_ = ggslc8q['DOCUMENT_NODE'] = 0x9,
    gcsgq7 = ggslc8q['DOCUMENT_TYPE_NODE'] = 0xa,
    gm6u$r = ggslc8q['DOCUMENT_FRAGMENT_NODE'] = 0xb,
    g_tfb0p = ggslc8q['NOTATION_NODE'] = 0xc,
    gpfb = {},
    gumj6r$ = {},
    gxw1yhk = gpfb['INDEX_SIZE_ERR'] = (gumj6r$[0x1] = 'Index size error', 0x1),
    gx5ibha = gpfb['DOMSTRING_SIZE_ERR'] = (gumj6r$[0x2] = 'DOMString size error', 0x2),
    g_30f4t = gpfb['HIERARCHY_REQUEST_ERR'] = (gumj6r$[0x3] = 'Hierarchy request error', 0x3),
    gt3ofd = gpfb['WRONG_DOCUMENT_ERR'] = (gumj6r$[0x4] = 'Wrong document', 0x4),
    gy1ehw = gpfb['INVALID_CHARACTER_ERR'] = (gumj6r$[0x5] = 'Invalid character', 0x5),
    ggv7eqy = gpfb['NO_DATA_ALLOWED_ERR'] = (gumj6r$[0x6] = 'No data allowed', 0x6),
    gi15xh = gpfb['NO_MODIFICATION_ALLOWED_ERR'] = (gumj6r$[0x7] = 'No modification allowed', 0x7),
    gr6$2zj = gpfb['NOT_FOUND_ERR'] = (gumj6r$[0x8] = 'Not found', 0x8),
    gr6doz = gpfb['NOT_SUPPORTED_ERR'] = (gumj6r$[0x9] = 'Not supported', 0x9),
    gkyw7ev = gpfb['INUSE_ATTRIBUTE_ERR'] = (gumj6r$[0xa] = 'Attribute in use', 0xa),
    g_b0i5p = gpfb['INVALID_STATE_ERR'] = (gumj6r$[0xb] = 'Invalid state', 0xb),
    gt_4f0p = gpfb['SYNTAX_ERR'] = (gumj6r$[0xc] = 'Syntax error', 0xc),
    go2d6z3 = gpfb['INVALID_MODIFICATION_ERR'] = (gumj6r$[0xd] = 'Invalid modification', 0xd),
    glsq8 = gpfb['NAMESPACE_ERR'] = (gumj6r$[0xe] = 'Invalid namespace', 0xe),
    gvgcq7e = gpfb['INVALID_ACCESS_ERR'] = (gumj6r$[0xf] = 'Invalid access', 0xf);
ghxi1k['prototype'] = Error['prototype'], gt_o3f4(gpfb, ghxi1k), gapb0i5['prototype'] = {
    'length': 0x0,
    'item': function (j$rmu6) {
        return this[j$rmu6] || null;
    },
    'toString': function (of4_, $26r) {
        for (var d324zo = [], sq8g7c = 0x0; sq8g7c < this['length']; sq8g7c++) gw7vkey(this[sq8g7c], d324zo, of4_, $26r);
        return d324zo['join']('');
    }
}, ghxik1['prototype']['item'] = function (gc8qsl) {
    return gmr$j6u(this), this[gc8qsl];
}, gwqve7y(ghxik1, gapb0i5), gq7g8sc['prototype'] = {
    'length': 0x0,
    'item': gapb0i5['prototype']['item'],
    'getNamedItem': function (sqc87g) {
        for (var of43td = this['length']; of43td--;) {
            var lg9 = this[of43td];
            if (lg9['nodeName'] == sqc87g) return lg9;
        }
    },
    'setNamedItem': function (kxwy) {
        var l89sg = kxwy['ownerElement'];
        if (l89sg && l89sg != this['_ownerElement']) throw new ghxi1k(gkyw7ev);
        var t04_ = this['getNamedItem'](kxwy['nodeName']);
        return gj6ur2$(this['_ownerElement'], this, kxwy, t04_), t04_;
    },
    'setNamedItemNS': function (djz) {
        var o3t,
            f_p0bt = djz['ownerElement'];
        if (f_p0bt && f_p0bt != this['_ownerElement']) throw new ghxi1k(gkyw7ev);
        return o3t = this['getNamedItemNS'](djz['namespaceURI'], djz['localName']), gj6ur2$(this['_ownerElement'], this, djz, o3t), o3t;
    },
    'removeNamedItem': function (lcs9) {
        var r26uj$ = this['getNamedItem'](lcs9);
        return gslqg8c(this['_ownerElement'], this, r26uj$), r26uj$;
    },
    'removeNamedItemNS': function (_043f, xba5pi) {
        var w1hxk = this['getNamedItemNS'](_043f, xba5pi);
        return gslqg8c(this['_ownerElement'], this, w1hxk), w1hxk;
    },
    'getNamedItemNS': function (dtfo, mur6$j) {
        for (var lcs8g9 = this['length']; lcs8g9--;) {
            var x1whyk = this[lcs8g9];
            if (x1whyk['localName'] == mur6$j && x1whyk['namespaceURI'] == dtfo) return x1whyk;
        }
        return null;
    }
}, gof3_t4['prototype'] = {
    'hasFeature': function (_40t3, d43fot) {
        var f5_pb0 = this['_features'][_40t3['toLowerCase']()];
        return f5_pb0 && (!d43fot || d43fot in f5_pb0) ? !0x0 : !0x1;
    },
    'createDocument': function (o4dz23, y1hxkw, kxwah) {
        var tz4d = new gp_0tf4();
        if (tz4d['implementation'] = this, tz4d['childNodes'] = new gapb0i5(), tz4d['doctype'] = kxwah, kxwah && tz4d['appendChild'](kxwah), y1hxkw) {
            var s8q7g = tz4d['createElementNS'](o4dz23, y1hxkw);
            tz4d['appendChild'](s8q7g);
        }
        return tz4d;
    },
    'createDocumentType': function (w7vq, eygqv7, qg8sl) {
        var odz6 = new gd2orz6();
        return odz6['name'] = w7vq, odz6['nodeName'] = w7vq, odz6['publicId'] = eygqv7, odz6['systemId'] = qg8sl, odz6;
    }
}, gm$uj['prototype'] = {
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
    'insertBefore': function (z2d4o3, wkeh) {
        return giapxb5(this, z2d4o3, wkeh);
    },
    'replaceChild': function (jmr6u$, v7yekw) {
        this['insertBefore'](jmr6u$, v7yekw), v7yekw && this['removeChild'](v7yekw);
    },
    'removeChild': function (to3fd4) {
        return gls8g9c(this, to3fd4);
    },
    'appendChild': function (dfo4t3) {
        return this['insertBefore'](dfo4t3, null);
    },
    'hasChildNodes': function () {
        return null != this['firstChild'];
    },
    'cloneNode': function (hx1i5) {
        return gkw1ve(this['ownerDocument'] || this, this, hx1i5);
    },
    'normalize': function () {
        for (var ve1 = this['firstChild']; ve1;) {
            var ofd4t3 = ve1['nextSibling'];
            ofd4t3 && ofd4t3['nodeType'] == g_04fpt && ve1['nodeType'] == g_04fpt ? (this['removeChild'](ofd4t3), ve1['appendData'](ofd4t3['data'])) : (ve1['normalize'](), ve1 = ofd4t3);
        }
    },
    'isSupported': function (to4f, xaip) {
        return this['ownerDocument']['implementation']['hasFeature'](to4f, xaip);
    },
    'hasAttributes': function () {
        return this['attributes']['length'] > 0x0;
    },
    'lookupPrefix': function (cge7vq) {
        for (var yq7v = this; yq7v;) {
            var jrd2z = yq7v['_nsMap'];
            if (jrd2z) {
                for (var c8qlg in jrd2z) if (jrd2z[c8qlg] == cge7vq) return c8qlg;
            }
            yq7v = yq7v['nodeType'] == gkweh1 ? yq7v['ownerDocument'] : yq7v['parentNode'];
        }
        return null;
    },
    'lookupNamespaceURI': function (q7vgcs) {
        for (var wkax1h = this; wkax1h;) {
            var pb05a = wkax1h['_nsMap'];
            if (pb05a && q7vgcs in pb05a) return pb05a[q7vgcs];
            wkax1h = wkax1h['nodeType'] == gkweh1 ? wkax1h['ownerDocument'] : wkax1h['parentNode'];
        }
        return null;
    },
    'isDefaultNamespace': function (doz34t) {
        var l9gs8c = this['lookupPrefix'](doz34t);
        return null == l9gs8c;
    }
}, gt_o3f4(ggslc8q, gm$uj), gt_o3f4(ggslc8q, gm$uj['prototype']), gp_0tf4['prototype'] = {
    'nodeName': '#document',
    'nodeType': gp0ft_,
    'doctype': null,
    'documentElement': null,
    '_inc': 0x1,
    'insertBefore': function (q7scvg, c7v) {
        if (q7scvg['nodeType'] == gm6u$r) {
            for (var yxhk1 = q7scvg['firstChild']; yxhk1;) {
                var ax5bih = yxhk1['nextSibling'];
                this['insertBefore'](yxhk1, c7v), yxhk1 = ax5bih;
            }
            return q7scvg;
        }
        return null == this['documentElement'] && q7scvg['nodeType'] == gi1xa5 && (this['documentElement'] = q7scvg), giapxb5(this, q7scvg, c7v), q7scvg['ownerDocument'] = this, q7scvg;
    },
    'removeChild': function (_p0bi5) {
        return this['documentElement'] == _p0bi5 && (this['documentElement'] = null), gls8g9c(this, _p0bi5);
    },
    'importNode': function (w1kxhy, oz2d6r) {
        return gkxia1h(this, w1kxhy, oz2d6r);
    },
    'getElementById': function (ywkhx) {
        var $u62 = null;
        return gg8sc9l(this['documentElement'], function (cgq87s) {
            return cgq87s['nodeType'] == gi1xa5 && cgq87s['getAttribute']('id') == ywkhx ? ($u62 = cgq87s, !0x0) : void 0x0;
        }), $u62;
    },
    'createElement': function (tb0fp) {
        var i0ap5 = new gsq87g();
        i0ap5['ownerDocument'] = this, i0ap5['nodeName'] = tb0fp, i0ap5['tagName'] = tb0fp, i0ap5['childNodes'] = new gapb0i5();
        var r2o6d = i0ap5['attributes'] = new gq7g8sc();
        return r2o6d['_ownerElement'] = i0ap5, i0ap5;
    },
    'createDocumentFragment': function () {
        var o3f4_t = new gixhak();
        return o3f4_t['ownerDocument'] = this, o3f4_t['childNodes'] = new gapb0i5(), o3f4_t;
    },
    'createTextNode': function (ha51) {
        var sqvc7g = new gk1xwy();
        return sqvc7g['ownerDocument'] = this, sqvc7g['appendData'](ha51), sqvc7g;
    },
    'createComment': function (p4f_t) {
        var bxa5ih = new ghxk1ia();
        return bxa5ih['ownerDocument'] = this, bxa5ih['appendData'](p4f_t), bxa5ih;
    },
    'createCDATASection': function (h1ki) {
        var gscl98 = new gvkywe1();
        return gscl98['ownerDocument'] = this, gscl98['appendData'](h1ki), gscl98;
    },
    'createProcessingInstruction': function (qsvgc7, m6jru) {
        var _0t34 = new gd623();
        return _0t34['ownerDocument'] = this, _0t34['tagName'] = _0t34['target'] = qsvgc7, _0t34['nodeValue'] = _0t34['data'] = m6jru, _0t34;
    },
    'createAttribute': function (e1) {
        var pt_f0 = new gpxbai();
        return pt_f0['ownerDocument'] = this, pt_f0['name'] = e1, pt_f0['nodeName'] = e1, pt_f0['localName'] = e1, pt_f0['specified'] = !0x0, pt_f0;
    },
    'createEntityReference': function (sgq87) {
        var vqyg7 = new g_05bip();
        return vqyg7['ownerDocument'] = this, vqyg7['nodeName'] = sgq87, vqyg7;
    },
    'createElementNS': function (jd6z2r, a1ikx) {
        var p_i5b = new gsq87g(),
            $jzr6 = a1ikx['split'](':'),
            ql8sg = p_i5b['attributes'] = new gq7g8sc();
        return p_i5b['childNodes'] = new gapb0i5(), p_i5b['ownerDocument'] = this, p_i5b['nodeName'] = a1ikx, p_i5b['tagName'] = a1ikx, p_i5b['namespaceURI'] = jd6z2r, 0x2 == $jzr6['length'] ? (p_i5b['prefix'] = $jzr6[0x0], p_i5b['localName'] = $jzr6[0x1]) : p_i5b['localName'] = a1ikx, ql8sg['_ownerElement'] = p_i5b, p_i5b;
    },
    'createAttributeNS': function (axi5hb, sg87) {
        var vqywe = new gpxbai(),
            ai5b0 = sg87['split'](':');
        return vqywe['ownerDocument'] = this, vqywe['nodeName'] = sg87, vqywe['name'] = sg87, vqywe['namespaceURI'] = axi5hb, vqywe['specified'] = !0x0, 0x2 == ai5b0['length'] ? (vqywe['prefix'] = ai5b0[0x0], vqywe['localName'] = ai5b0[0x1]) : vqywe['localName'] = sg87, vqywe;
    }
}, gwqve7y(gp_0tf4, gm$uj), gsq87g['prototype'] = {
    'nodeType': gi1xa5,
    'hasAttribute': function (sqvgc) {
        return null != this['getAttributeNode'](sqvgc);
    },
    'getAttribute': function (scqgl8) {
        var xih1a5 = this['getAttributeNode'](scqgl8);
        return xih1a5 && xih1a5['value'] || '';
    },
    'getAttributeNode': function (_t3of) {
        return this['attributes']['getNamedItem'](_t3of);
    },
    'setAttribute': function (hew1y, j$6ur) {
        var lcqsg8 = this['ownerDocument']['createAttribute'](hew1y);
        lcqsg8['value'] = lcqsg8['nodeValue'] = '' + j$6ur, this['setAttributeNode'](lcqsg8);
    },
    'removeAttribute': function (o263dz) {
        var xh5b = this['getAttributeNode'](o263dz);
        xh5b && this['removeAttributeNode'](xh5b);
    },
    'appendChild': function (qc7gv) {
        return qc7gv['nodeType'] === gm6u$r ? this['insertBefore'](qc7gv, null) : gq7evc(this, qc7gv);
    },
    'setAttributeNode': function (dzrj26) {
        return this['attributes']['setNamedItem'](dzrj26);
    },
    'setAttributeNodeNS': function (keyv7) {
        return this['attributes']['setNamedItemNS'](keyv7);
    },
    'removeAttributeNode': function (i5ahbx) {
        return this['attributes']['removeNamedItem'](i5ahbx['nodeName']);
    },
    'removeAttributeNS': function (cq8gls, qlsg) {
        var yxkw = this['getAttributeNodeNS'](cq8gls, qlsg);
        yxkw && this['removeAttributeNode'](yxkw);
    },
    'hasAttributeNS': function (b5f0, r2j$z) {
        return null != this['getAttributeNodeNS'](b5f0, r2j$z);
    },
    'getAttributeNS': function (pax5b, $u26j) {
        var ru$6j2 = this['getAttributeNodeNS'](pax5b, $u26j);
        return ru$6j2 && ru$6j2['value'] || '';
    },
    'setAttributeNS': function (kawh, slgqc8, ahx51i) {
        var lcq8 = this['ownerDocument']['createAttributeNS'](kawh, slgqc8);
        lcq8['value'] = lcq8['nodeValue'] = '' + ahx51i, this['setAttributeNode'](lcq8);
    },
    'getAttributeNodeNS': function (x1khia, b0tp) {
        return this['attributes']['getNamedItemNS'](x1khia, b0tp);
    },
    'getElementsByTagName': function (cgev7) {
        return new ghxik1(this, function (dr6j2) {
            var o6d3z = [];
            return gg8sc9l(dr6j2, function (yekvw7) {
                yekvw7 === dr6j2 || yekvw7['nodeType'] != gi1xa5 || '*' !== cgev7 && yekvw7['tagName'] != cgev7 || o6d3z['push'](yekvw7);
            }), o6d3z;
        });
    },
    'getElementsByTagNameNS': function (q8cgls, orzd62) {
        return new ghxik1(this, function (_p40t) {
            var d2ozr6 = [];
            return gg8sc9l(_p40t, function (f0p_bt) {
                f0p_bt === _p40t || f0p_bt['nodeType'] !== gi1xa5 || '*' !== q8cgls && f0p_bt['namespaceURI'] !== q8cgls || '*' !== orzd62 && f0p_bt['localName'] != orzd62 || d2ozr6['push'](f0p_bt);
            }), d2ozr6;
        });
    }
}, gp_0tf4['prototype']['getElementsByTagName'] = gsq87g['prototype']['getElementsByTagName'], gp_0tf4['prototype']['getElementsByTagNameNS'] = gsq87g['prototype']['getElementsByTagNameNS'], gwqve7y(gsq87g, gm$uj), gpxbai['prototype']['nodeType'] = gkweh1, gwqve7y(gpxbai, gm$uj), gh1kix['prototype'] = {
    'data': '',
    'substringData': function (we1hk, zo3t4) {
        return this['data']['substring'](we1hk, we1hk + zo3t4);
    },
    'appendData': function (d2rz) {
        d2rz = this['data'] + d2rz, this['nodeValue'] = this['data'] = d2rz, this['length'] = d2rz['length'];
    },
    'insertData': function (l8q, gqsv7) {
        this['replaceData'](l8q, 0x0, gqsv7);
    },
    'appendChild': function () {
        throw new Error(gumj6r$[g_30f4t]);
    },
    'deleteData': function (sc9g8, wv7eqy) {
        this['replaceData'](sc9g8, wv7eqy, '');
    },
    'replaceData': function (gsc7, tf3_o, b50f_p) {
        var yvek1 = this['data']['substring'](0x0, gsc7),
            gsclq = this['data']['substring'](gsc7 + tf3_o);
        b50f_p = yvek1 + b50f_p + gsclq, this['nodeValue'] = this['data'] = b50f_p, this['length'] = b50f_p['length'];
    }
}, gwqve7y(gh1kix, gm$uj), gk1xwy['prototype'] = {
    'nodeName': '#text',
    'nodeType': g_04fpt,
    'splitText': function (_430) {
        var xkhai = this['data'],
            vwe1 = xkhai['substring'](_430);
        xkhai = xkhai['substring'](0x0, _430), this['data'] = this['nodeValue'] = xkhai, this['length'] = xkhai['length'];
        var gl8csq = this['ownerDocument']['createTextNode'](vwe1);
        return this['parentNode'] && this['parentNode']['insertBefore'](gl8csq, this['nextSibling']), gl8csq;
    }
}, gwqve7y(gk1xwy, gh1kix), ghxk1ia['prototype'] = {
    'nodeName': '#comment',
    'nodeType': gb5ia
}, gwqve7y(ghxk1ia, gh1kix), gvkywe1['prototype'] = {
    'nodeName': '#cdata-section',
    'nodeType': g_pf0bt
}, gwqve7y(gvkywe1, gh1kix), gd2orz6['prototype']['nodeType'] = gcsgq7, gwqve7y(gd2orz6, gm$uj), gwv7yek['prototype']['nodeType'] = g_tfb0p, gwqve7y(gwv7yek, gm$uj), gy1vwk['prototype']['nodeType'] = gax5p, gwqve7y(gy1vwk, gm$uj), g_05bip['prototype']['nodeType'] = ggc7qvs, gwqve7y(g_05bip, gm$uj), gixhak['prototype']['nodeName'] = '#document-fragment', gixhak['prototype']['nodeType'] = gm6u$r, gwqve7y(gixhak, gm$uj), gd623['prototype']['nodeType'] = gx5abp, gwqve7y(gd623, gm$uj), gp0bft['prototype']['serializeToString'] = function (gvcq7e, d243zo, eqyv) {
    return gh1xw['call'](gvcq7e, d243zo, eqyv);
}, gm$uj['prototype']['toString'] = gh1xw;
try {
    Object['defineProperty'] && (Object['defineProperty'](ghxik1['prototype'], 'length', {
        'get': function () {
            return gmr$j6u(this), this['$$length'];
        }
    }), Object['defineProperty'](gm$uj['prototype'], 'textContent', {
        'get': function () {
            return gu26r$(this);
        },
        'set': function (ywe1kv) {
            switch (this['nodeType']) {
                case gi1xa5:
                case gm6u$r:
                    for (; this['firstChild'];) this['removeChild'](this['firstChild']);
                    (ywe1kv || String(ywe1kv)) && this['appendChild'](this['ownerDocument']['createTextNode'](ywe1kv));
                    break;
                default:
                    this['data'] = ywe1kv, this['value'] = ywe1kv, this['nodeValue'] = ywe1kv;
            }
        }
    }), gd36o2 = function (eykw1v, a5ipx, $6jmr) {
        eykw1v['$$' + a5ipx] = $6jmr;
    });
} catch (gbxa5h) {}
exports['DOMImplementation'] = gof3_t4, exports['XMLSerializer'] = gp0bft;