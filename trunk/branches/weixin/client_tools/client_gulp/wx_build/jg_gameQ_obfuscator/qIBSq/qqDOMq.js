var g = wx.$Q;
function q_tdrcz(jm481h, rdtz$) {
    for (var y30x2 in jm481h) rdtz$[y30x2] = jm481h[y30x2];
}
function q_lp2fx0(zer$, x30f) {
    function _r$ez9() {}
    var dz_c$r = zer$['prototype'];
    if (Object['create']) {
        var ty3k5x = Object['create'](x30f['prototype']);
        dz_c$r['__proto__'] = ty3k5x;
    }
    dz_c$r instanceof x30f || (_r$ez9['prototype'] = x30f['prototype'], _r$ez9 = new _r$ez9(), q_tdrcz(dz_c$r, _r$ez9), zer$['prototype'] = dz_c$r = _r$ez9), dz_c$r['constructor'] != zer$ && ('function' != typeof zer$ && console['error']('unknow Class:' + zer$), dz_c$r['constructor'] = zer$);
}
function q_no469m(pbfal, tzcdr$) {
    if (tzcdr$ instanceof Error) var pxl = tzcdr$;else pxl = this, Error['call'](this, q_r$_ed[pbfal]), this['message'] = q_r$_ed[pbfal], Error['captureStackTrace'] && Error['captureStackTrace'](this, q_no469m);
    return pxl['code'] = pbfal, tzcdr$ && (this['message'] = this['message'] + ':\x20' + tzcdr$), pxl;
}
function q_$oez() {}
function q__9o6n(gab, hsuw8j) {
    this['_node'] = gab, this['_refresh'] = hsuw8j, q_cdrtyk(this);
}
function q_cdrtyk(alg0) {
    var $9_ezr = alg0['_node']['_inc'] || alg0['_node']['ownerDocument']['_inc'];
    if (alg0['_inc'] != $9_ezr) {
        var l0fpa2 = alg0['_refresh'](alg0['_node']);
        q_palbg(alg0, 'length', l0fpa2['length']), q_tdrcz(l0fpa2, alg0), alg0['_inc'] = $9_ezr;
    }
}
function q_xp20f() {}
function q_xlf02p(palbf, f0pgl) {
    for (var hm8614 = palbf['length']; hm8614--;) if (palbf[hm8614] === f0pgl) return hm8614;
}
function q_mn61h4(l0gap, n96m, yc5kd, ct$drz) {
    if (ct$drz ? n96m[q_xlf02p(n96m, ct$drz)] = yc5kd : n96m[n96m['length']++] = yc5kd, l0gap) {
        yc5kd['ownerElement'] = l0gap;
        var ct5kdy = l0gap['ownerDocument'];
        ct5kdy && (ct$drz && q_a2fp0(ct5kdy, l0gap, ct$drz), q_rcztkd(ct5kdy, l0gap, yc5kd));
    }
}
function q_z9o$(mo69n4, $oz9e_, ytdck) {
    var r$c_dz = q_xlf02p($oz9e_, ytdck);
    if (!(r$c_dz >= 0x0)) throw q_no469m(q_bavig7, new Error(mo69n4['tagName'] + '@' + ytdck));
    for (var a2p0lf = $oz9e_['length'] - 0x1; a2p0lf > r$c_dz;) $oz9e_[r$c_dz] = $oz9e_[++r$c_dz];
    if ($oz9e_['length'] = a2p0lf, mo69n4) {
        var apglib = mo69n4['ownerDocument'];
        apglib && (q_a2fp0(apglib, mo69n4, ytdck), ytdck['ownerElement'] = null);
    }
}
function q_x0l2pf(pig) {
    if (this['_features'] = {}, pig) {
        for (var f0lpa2 in pig) this['_features'] = pig[f0lpa2];
    }
}
function q_dz_$c() {}
function q_o_e9$z(ze_$o) {
    return '<' == ze_$o && '&lt;' || '>' == ze_$o && '&gt;' || '&' == ze_$o && '&amp;' || '\x22' == ze_$o && '&quot;' || '&#' + ze_$o['charCodeAt']() + ';';
}
function q_tydc5(palgbf, liapb) {
    if (liapb(palgbf)) return !0x0;
    if (palgbf = palgbf['firstChild']) {
        do if (q_tydc5(palgbf, liapb)) return !0x0; while (palgbf = palgbf['nextSibling']);
    }
}
function q_ujh8s() {}
function q_rcztkd(x503f2, pl02fx, _zo$9) {
    x503f2 && x503f2['_inc']++;
    var m18hj = _zo$9['namespaceURI'];
    'http://www.w3.org/2000/xmlns/' == m18hj && (pl02fx['_nsMap'][_zo$9['prefix'] ? _zo$9['localName'] : ''] = _zo$9['value']);
}
function q_a2fp0(l2pf0x, js4h18, _9ne$) {
    l2pf0x && l2pf0x['_inc']++;
    var yk5ct = _9ne$['namespaceURI'];
    'http://www.w3.org/2000/xmlns/' == yk5ct && delete js4h18['_nsMap'][_9ne$['prefix'] ? _9ne$['localName'] : ''];
}
function q_cdkty5(yk25x3, o14m6, lgp0af) {
    if (yk25x3 && yk25x3['_inc']) {
        yk25x3['_inc']++;
        var kd5ytc = o14m6['childNodes'];
        if (lgp0af) kd5ytc[kd5ytc['length']++] = lgp0af;else {
            for (var _o9$ne = o14m6['firstChild'], vbg7ia = 0x0; _o9$ne;) kd5ytc[vbg7ia++] = _o9$ne, _o9$ne = _o9$ne['nextSibling'];
            kd5ytc['length'] = vbg7ia;
        }
    }
}
function q_cty5k3(gilpab, mh6n1) {
    var x25ky3 = mh6n1['previousSibling'],
        nm94 = mh6n1['nextSibling'];
    return x25ky3 ? x25ky3['nextSibling'] = nm94 : gilpab['firstChild'] = nm94, nm94 ? nm94['previousSibling'] = x25ky3 : gilpab['lastChild'] = x25ky3, q_cdkty5(gilpab['ownerDocument'], gilpab), mh6n1;
}
function q_m9noe(g7ba, sjqw8, $dc_r) {
    var c5kytd = sjqw8['parentNode'];
    if (c5kytd && c5kytd['removeChild'](sjqw8), sjqw8['nodeType'] === q_tkycrd) {
        var czrk = sjqw8['firstChild'];
        if (null == czrk) return sjqw8;
        var wujqs = sjqw8['lastChild'];
    } else czrk = wujqs = sjqw8;
    var jh41s8 = $dc_r ? $dc_r['previousSibling'] : g7ba['lastChild'];
    czrk['previousSibling'] = jh41s8, wujqs['nextSibling'] = $dc_r, jh41s8 ? jh41s8['nextSibling'] = czrk : g7ba['firstChild'] = czrk, null == $dc_r ? g7ba['lastChild'] = wujqs : $dc_r['previousSibling'] = wujqs;
    do czrk['parentNode'] = g7ba; while (czrk !== wujqs && (czrk = czrk['nextSibling']));
    return q_cdkty5(g7ba['ownerDocument'] || g7ba, g7ba), sjqw8['nodeType'] == q_tkycrd && (sjqw8['firstChild'] = sjqw8['lastChild'] = null), sjqw8;
}
function q_iablp(xlfp, bagv7) {
    var n164hm = bagv7['parentNode'];
    if (n164hm) {
        var h618m4 = xlfp['lastChild'];
        n164hm['removeChild'](bagv7);
        var h618m4 = xlfp['lastChild'];
    }
    var h618m4 = xlfp['lastChild'];
    return bagv7['parentNode'] = xlfp, bagv7['previousSibling'] = h618m4, bagv7['nextSibling'] = null, h618m4 ? h618m4['nextSibling'] = bagv7 : xlfp['firstChild'] = bagv7, xlfp['lastChild'] = bagv7, q_cdkty5(xlfp['ownerDocument'], xlfp, bagv7), bagv7;
}
function q_rezd() {
    this['_nsMap'] = {};
}
function q_e_n9$o() {}
function q_shju8() {}
function q_gpliab() {}
function q_drcztk() {}
function q_tr$dc() {}
function q_drz_e() {}
function q_bvlgi() {}
function q_$_cdr() {}
function q_om496() {}
function q_gpail() {}
function q_yt() {}
function q_om4n6() {}
function q_e$r_z(trc$, ctz) {
    var e9_zo$ = [],
        on_69 = 0x9 == this['nodeType'] ? this['documentElement'] : this,
        vailb = on_69['prefix'],
        avgib7 = on_69['namespaceURI'];
    if (avgib7 && null == vailb) {
        var vailb = on_69['lookupPrefix'](avgib7);
        if (null == vailb) var f0gpl = [{
            'namespace': avgib7,
            'prefix': null
        }];
    }
    return q_z$_9re(this, e9_zo$, trc$, ctz, f0gpl), e9_zo$['join']('');
}
function q_fp3(h416m8, pgl0, $erdz) {
    var ju8sq = h416m8['prefix'] || '',
        _ez$9r = h416m8['namespaceURI'];
    if (!ju8sq && !_ez$9r) return !0x1;
    if ('xml' === ju8sq && 'http://www.w3.org/XML/1998/namespace' === _ez$9r || 'http://www.w3.org/2000/xmlns/' == _ez$9r) return !0x1;
    for (var vgai7b = $erdz['length']; vgai7b--;) {
        var gaflpb = $erdz[vgai7b];
        if (gaflpb['prefix'] == ju8sq) return gaflpb['namespace'] != _ez$9r;
    }
    return !0x0;
}
function q_z$_9re(ctrzd$, h1jw8, zrcktd, wqj8us, s8wjuh) {
    if (wqj8us) {
        if (ctrzd$ = wqj8us(ctrzd$), !ctrzd$) return;
        if ('string' == typeof ctrzd$) return h1jw8['push'](ctrzd$), void 0x0;
    }
    switch (ctrzd$['nodeType']) {
        case q_y5x3kt:
            s8wjuh || (s8wjuh = []);
            var iav7bg = (s8wjuh['length'], ctrzd$['attributes']),
                eo9_n = iav7bg['length'],
                gaplb = ctrzd$['firstChild'],
                lgpfa0 = ctrzd$['tagName'];
            zrcktd = q_oe$n === ctrzd$['namespaceURI'] || zrcktd, h1jw8['push']('<', lgpfa0);
            for (var f5x02 = 0x0; eo9_n > f5x02; f5x02++) {
                var qs8wj = iav7bg['item'](f5x02);
                'xmlns' == qs8wj['prefix'] ? s8wjuh['push']({
                    'prefix': qs8wj['localName'],
                    'namespace': qs8wj['value']
                }) : 'xmlns' == qs8wj['nodeName'] && s8wjuh['push']({
                    'prefix': '',
                    'namespace': qs8wj['value']
                });
            }
            for (var f5x02 = 0x0; eo9_n > f5x02; f5x02++) {
                var qs8wj = iav7bg['item'](f5x02);
                if (q_fp3(qs8wj, zrcktd, s8wjuh)) {
                    var ap0lgf = qs8wj['prefix'] || '',
                        rtkcyd = qs8wj['namespaceURI'],
                        pa0f = ap0lgf ? ' xmlns:' + ap0lgf : ' xmlns';
                    h1jw8['push'](pa0f, '=\x22', rtkcyd, '\x22'), s8wjuh['push']({
                        'prefix': ap0lgf,
                        'namespace': rtkcyd
                    });
                }
                q_z$_9re(qs8wj, h1jw8, zrcktd, wqj8us, s8wjuh);
            }
            if (q_fp3(ctrzd$, zrcktd, s8wjuh)) {
                var ap0lgf = ctrzd$['prefix'] || '',
                    rtkcyd = ctrzd$['namespaceURI'],
                    pa0f = ap0lgf ? ' xmlns:' + ap0lgf : ' xmlns';
                h1jw8['push'](pa0f, '=\x22', rtkcyd, '\x22'), s8wjuh['push']({
                    'prefix': ap0lgf,
                    'namespace': rtkcyd
                });
            }
            if (gaplb || zrcktd && !/^(?:meta|link|img|br|hr|input)$/i['test'](lgpfa0)) {
                if (h1jw8['push']('>'), zrcktd && /^script$/i['test'](lgpfa0)) {
                    for (; gaplb;) gaplb['data'] ? h1jw8['push'](gaplb['data']) : q_z$_9re(gaplb, h1jw8, zrcktd, wqj8us, s8wjuh), gaplb = gaplb['nextSibling'];
                } else {
                    for (; gaplb;) q_z$_9re(gaplb, h1jw8, zrcktd, wqj8us, s8wjuh), gaplb = gaplb['nextSibling'];
                }
                h1jw8['push']('</', lgpfa0, '>');
            } else h1jw8['push']('/>');
            return;
        case q_w1hj:
        case q_tkycrd:
            for (var gaplb = ctrzd$['firstChild']; gaplb;) q_z$_9re(gaplb, h1jw8, zrcktd, wqj8us, s8wjuh), gaplb = gaplb['nextSibling'];
            return;
        case q_drctkz:
            return h1jw8['push']('\x20', ctrzd$['name'], '=\x22', ctrzd$['value']['replace'](/[<&"]/g, q_o_e9$z), '\x22');
        case q_c3k5t:
            return h1jw8['push'](ctrzd$['data']['replace'](/[<&]/g, q_o_e9$z));
        case q_gipla:
            return h1jw8['push']('<![CDATA[', ctrzd$['data'], ']]>');
        case q_m6o9e:
            return h1jw8['push']('<!--', ctrzd$['data'], '-->');
        case q_p0lx:
            var $9_neo = ctrzd$['publicId'],
                x052f3 = ctrzd$['systemId'];
            if (h1jw8['push']('<!DOCTYPE ', ctrzd$['name']), $9_neo) h1jw8['push'](' PUBLIC "', $9_neo), x052f3 && '.' != x052f3 && h1jw8['push']('\x22\x20\x22', x052f3), h1jw8['push']('\x22>');else {
                if (x052f3 && '.' != x052f3) h1jw8['push'](' SYSTEM "', x052f3, '\x22>');else {
                    var n164m = ctrzd$['internalSubset'];
                    n164m && h1jw8['push']('\x20[', n164m, ']'), h1jw8['push']('>');
                }
            }
            return;
        case q_w81sh:
            return h1jw8['push']('<?', ctrzd$['target'], '\x20', ctrzd$['data'], '?>');
        case q_rtzcdk:
            return h1jw8['push']('&', ctrzd$['nodeName'], ';');
        default:
            h1jw8['push']('??', ctrzd$['nodeName']);
    }
}
function q_no1m64(on9m, jm48h, p0aglf) {
    var o1mn64;
    switch (jm48h['nodeType']) {
        case q_y5x3kt:
            o1mn64 = jm48h['cloneNode'](!0x1), o1mn64['ownerDocument'] = on9m;
        case q_tkycrd:
            break;
        case q_drctkz:
            p0aglf = !0x0;
    }
    if (o1mn64 || (o1mn64 = jm48h['cloneNode'](!0x1)), o1mn64['ownerDocument'] = on9m, o1mn64['parentNode'] = null, p0aglf) {
        for (var no16m4 = jm48h['firstChild']; no16m4;) o1mn64['appendChild'](q_no1m64(on9m, no16m4, p0aglf)), no16m4 = no16m4['nextSibling'];
    }
    return o1mn64;
}
function q_yx2035(oen6, nm16, $dc_z) {
    var y2503 = new nm16['constructor']();
    for (var e$_n9o in nm16) {
        var tky53c = nm16[e$_n9o];
        'object' != typeof tky53c && tky53c != y2503[e$_n9o] && (y2503[e$_n9o] = tky53c);
    }
    switch (nm16['childNodes'] && (y2503['childNodes'] = new q_$oez()), y2503['ownerDocument'] = oen6, y2503['nodeType']) {
        case q_y5x3kt:
            var ctd$rz = nm16['attributes'],
                o9e_$ = y2503['attributes'] = new q_xp20f(),
                kcyt53 = ctd$rz['length'];
            o9e_$['_ownerElement'] = y2503;
            for (var x2p30 = 0x0; kcyt53 > x2p30; x2p30++) y2503['setAttributeNode'](q_yx2035(oen6, ctd$rz['item'](x2p30), !0x0));
            break;
        case q_drctkz:
            $dc_z = !0x0;
    }
    if ($dc_z) {
        for (var bapfgl = nm16['firstChild']; bapfgl;) y2503['appendChild'](q_yx2035(oen6, bapfgl, $dc_z)), bapfgl = bapfgl['nextSibling'];
    }
    return y2503;
}
function q_palbg($dr_c, cr$tdz, jw8hus) {
    $dr_c[cr$tdz] = jw8hus;
}
function q_rctdz$(y53xk2) {
    switch (y53xk2['nodeType']) {
        case q_y5x3kt:
        case q_tkycrd:
            var r$tdzc = [];
            for (y53xk2 = y53xk2['firstChild']; y53xk2;) 0x7 !== y53xk2['nodeType'] && 0x8 !== y53xk2['nodeType'] && r$tdzc['push'](q_rctdz$(y53xk2)), y53xk2 = y53xk2['nextSibling'];
            return r$tdzc['join']('');
        default:
            return y53xk2['nodeValue'];
    }
}
var q_oe$n = 'http://www.w3.org/1999/xhtml',
    q_qsju = {},
    q_y5x3kt = q_qsju['ELEMENT_NODE'] = 0x1,
    q_drctkz = q_qsju['ATTRIBUTE_NODE'] = 0x2,
    q_c3k5t = q_qsju['TEXT_NODE'] = 0x3,
    q_gipla = q_qsju['CDATA_SECTION_NODE'] = 0x4,
    q_rtzcdk = q_qsju['ENTITY_REFERENCE_NODE'] = 0x5,
    q_uj8qsw = q_qsju['ENTITY_NODE'] = 0x6,
    q_w81sh = q_qsju['PROCESSING_INSTRUCTION_NODE'] = 0x7,
    q_m6o9e = q_qsju['COMMENT_NODE'] = 0x8,
    q_w1hj = q_qsju['DOCUMENT_NODE'] = 0x9,
    q_p0lx = q_qsju['DOCUMENT_TYPE_NODE'] = 0xa,
    q_tkycrd = q_qsju['DOCUMENT_FRAGMENT_NODE'] = 0xb,
    q_h41m8 = q_qsju['NOTATION_NODE'] = 0xc,
    q_dky5t = {},
    q_r$_ed = {},
    q_z9_er = q_dky5t['INDEX_SIZE_ERR'] = (q_r$_ed[0x1] = 'Index size error', 0x1),
    q_bgia7 = q_dky5t['DOMSTRING_SIZE_ERR'] = (q_r$_ed[0x2] = 'DOMString size error', 0x2),
    q_o_$9en = q_dky5t['HIERARCHY_REQUEST_ERR'] = (q_r$_ed[0x3] = 'Hierarchy request error', 0x3),
    q_x52k3 = q_dky5t['WRONG_DOCUMENT_ERR'] = (q_r$_ed[0x4] = 'Wrong document', 0x4),
    q_kzrd = q_dky5t['INVALID_CHARACTER_ERR'] = (q_r$_ed[0x5] = 'Invalid character', 0x5),
    q_fal20 = q_dky5t['NO_DATA_ALLOWED_ERR'] = (q_r$_ed[0x6] = 'No data allowed', 0x6),
    q__$dz = q_dky5t['NO_MODIFICATION_ALLOWED_ERR'] = (q_r$_ed[0x7] = 'No modification allowed', 0x7),
    q_bavig7 = q_dky5t['NOT_FOUND_ERR'] = (q_r$_ed[0x8] = 'Not found', 0x8),
    q_x0flp2 = q_dky5t['NOT_SUPPORTED_ERR'] = (q_r$_ed[0x9] = 'Not supported', 0x9),
    q_n6mo49 = q_dky5t['INUSE_ATTRIBUTE_ERR'] = (q_r$_ed[0xa] = 'Attribute in use', 0xa),
    q_sujh = q_dky5t['INVALID_STATE_ERR'] = (q_r$_ed[0xb] = 'Invalid state', 0xb),
    q_hjw81s = q_dky5t['SYNTAX_ERR'] = (q_r$_ed[0xc] = 'Syntax error', 0xc),
    q_jh81w = q_dky5t['INVALID_MODIFICATION_ERR'] = (q_r$_ed[0xd] = 'Invalid modification', 0xd),
    q_krdty = q_dky5t['NAMESPACE_ERR'] = (q_r$_ed[0xe] = 'Invalid namespace', 0xe),
    q_y5xkt3 = q_dky5t['INVALID_ACCESS_ERR'] = (q_r$_ed[0xf] = 'Invalid access', 0xf);
q_no469m['prototype'] = Error['prototype'], q_tdrcz(q_dky5t, q_no469m), q_$oez['prototype'] = {
    'length': 0x0,
    'item': function (p02fla) {
        return this[p02fla] || null;
    },
    'toString': function (e96o_n, e$dz_r) {
        for (var on96 = [], alfpgb = 0x0; alfpgb < this['length']; alfpgb++) q_z$_9re(this[alfpgb], on96, e96o_n, e$dz_r);
        return on96['join']('');
    }
}, q__9o6n['prototype']['item'] = function (f3x2p0) {
    return q_cdrtyk(this), this[f3x2p0];
}, q_lp2fx0(q__9o6n, q_$oez), q_xp20f['prototype'] = {
    'length': 0x0,
    'item': q_$oez['prototype']['item'],
    'getNamedItem': function (n6meo9) {
        for (var jwsu = this['length']; jwsu--;) {
            var x02f5 = this[jwsu];
            if (x02f5['nodeName'] == n6meo9) return x02f5;
        }
    },
    'setNamedItem': function (lpf0a2) {
        var h61mn4 = lpf0a2['ownerElement'];
        if (h61mn4 && h61mn4 != this['_ownerElement']) throw new q_no469m(q_n6mo49);
        var er_$z9 = this['getNamedItem'](lpf0a2['nodeName']);
        return q_mn61h4(this['_ownerElement'], this, lpf0a2, er_$z9), er_$z9;
    },
    'setNamedItemNS': function (j4hs) {
        var kty3,
            l2f0ap = j4hs['ownerElement'];
        if (l2f0ap && l2f0ap != this['_ownerElement']) throw new q_no469m(q_n6mo49);
        return kty3 = this['getNamedItemNS'](j4hs['namespaceURI'], j4hs['localName']), q_mn61h4(this['_ownerElement'], this, j4hs, kty3), kty3;
    },
    'removeNamedItem': function (flpgb) {
        var j8hw = this['getNamedItem'](flpgb);
        return q_z9o$(this['_ownerElement'], this, j8hw), j8hw;
    },
    'removeNamedItemNS': function (m46on1, b7vai) {
        var m8h641 = this['getNamedItemNS'](m46on1, b7vai);
        return q_z9o$(this['_ownerElement'], this, m8h641), m8h641;
    },
    'getNamedItemNS': function (lvaig, sj18) {
        for (var krcyd = this['length']; krcyd--;) {
            var blpfa = this[krcyd];
            if (blpfa['localName'] == sj18 && blpfa['namespaceURI'] == lvaig) return blpfa;
        }
        return null;
    }
}, q_x0l2pf['prototype'] = {
    'hasFeature': function (ws8uqj, f20alp) {
        var p2flx = this['_features'][ws8uqj['toLowerCase']()];
        return p2flx && (!f20alp || f20alp in p2flx) ? !0x0 : !0x1;
    },
    'createDocument': function (sh841, lg0fpa, oe6mn9) {
        var vib = new q_ujh8s();
        if (vib['implementation'] = this, vib['childNodes'] = new q_$oez(), vib['doctype'] = oe6mn9, oe6mn9 && vib['appendChild'](oe6mn9), lg0fpa) {
            var e6o_9n = vib['createElementNS'](sh841, lg0fpa);
            vib['appendChild'](e6o_9n);
        }
        return vib;
    },
    'createDocumentType': function ($_edz, f03, ibvga) {
        var abpgli = new q_drz_e();
        return abpgli['name'] = $_edz, abpgli['nodeName'] = $_edz, abpgli['publicId'] = f03, abpgli['systemId'] = ibvga, abpgli;
    }
}, q_dz_$c['prototype'] = {
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
    'insertBefore': function (wshju8, en9m6o) {
        return q_m9noe(this, wshju8, en9m6o);
    },
    'replaceChild': function (j8wqu, abpigl) {
        this['insertBefore'](j8wqu, abpigl), abpigl && this['removeChild'](abpigl);
    },
    'removeChild': function (n16mh) {
        return q_cty5k3(this, n16mh);
    },
    'appendChild': function (y5x20) {
        return this['insertBefore'](y5x20, null);
    },
    'hasChildNodes': function () {
        return null != this['firstChild'];
    },
    'cloneNode': function (y05x23) {
        return q_yx2035(this['ownerDocument'] || this, this, y05x23);
    },
    'normalize': function () {
        for (var e_$o9 = this['firstChild']; e_$o9;) {
            var hm4168 = e_$o9['nextSibling'];
            hm4168 && hm4168['nodeType'] == q_c3k5t && e_$o9['nodeType'] == q_c3k5t ? (this['removeChild'](hm4168), e_$o9['appendData'](hm4168['data'])) : (e_$o9['normalize'](), e_$o9 = hm4168);
        }
    },
    'isSupported': function (juws, _$zcr) {
        return this['ownerDocument']['implementation']['hasFeature'](juws, _$zcr);
    },
    'hasAttributes': function () {
        return this['attributes']['length'] > 0x0;
    },
    'lookupPrefix': function (albiv) {
        for (var n614h = this; n614h;) {
            var zr_d$ = n614h['_nsMap'];
            if (zr_d$) {
                for (var $zdc in zr_d$) if (zr_d$[$zdc] == albiv) return $zdc;
            }
            n614h = n614h['nodeType'] == q_drctkz ? n614h['ownerDocument'] : n614h['parentNode'];
        }
        return null;
    },
    'lookupNamespaceURI': function (h81m4) {
        for (var d$zr_ = this; d$zr_;) {
            var y25k3 = d$zr_['_nsMap'];
            if (y25k3 && h81m4 in y25k3) return y25k3[h81m4];
            d$zr_ = d$zr_['nodeType'] == q_drctkz ? d$zr_['ownerDocument'] : d$zr_['parentNode'];
        }
        return null;
    },
    'isDefaultNamespace': function (eno69m) {
        var yk5x3 = this['lookupPrefix'](eno69m);
        return null == yk5x3;
    }
}, q_tdrcz(q_qsju, q_dz_$c), q_tdrcz(q_qsju, q_dz_$c['prototype']), q_ujh8s['prototype'] = {
    'nodeName': '#document',
    'nodeType': q_w1hj,
    'doctype': null,
    'documentElement': null,
    '_inc': 0x1,
    'insertBefore': function (fplga, qjuws) {
        if (fplga['nodeType'] == q_tkycrd) {
            for (var plabig = fplga['firstChild']; plabig;) {
                var y0523 = plabig['nextSibling'];
                this['insertBefore'](plabig, qjuws), plabig = y0523;
            }
            return fplga;
        }
        return null == this['documentElement'] && fplga['nodeType'] == q_y5x3kt && (this['documentElement'] = fplga), q_m9noe(this, fplga, qjuws), fplga['ownerDocument'] = this, fplga;
    },
    'removeChild': function (y0x35) {
        return this['documentElement'] == y0x35 && (this['documentElement'] = null), q_cty5k3(this, y0x35);
    },
    'importNode': function (fpgla0, y32kx5) {
        return q_no1m64(this, fpgla0, y32kx5);
    },
    'getElementById': function ($ez9r_) {
        var y5tx3 = null;
        return q_tydc5(this['documentElement'], function (x5y20) {
            return x5y20['nodeType'] == q_y5x3kt && x5y20['getAttribute']('id') == $ez9r_ ? (y5tx3 = x5y20, !0x0) : void 0x0;
        }), y5tx3;
    },
    'createElement': function (e9onm) {
        var usw8 = new q_rezd();
        usw8['ownerDocument'] = this, usw8['nodeName'] = e9onm, usw8['tagName'] = e9onm, usw8['childNodes'] = new q_$oez();
        var f5x03 = usw8['attributes'] = new q_xp20f();
        return f5x03['_ownerElement'] = usw8, usw8;
    },
    'createDocumentFragment': function () {
        var ckrdz = new q_gpail();
        return ckrdz['ownerDocument'] = this, ckrdz['childNodes'] = new q_$oez(), ckrdz;
    },
    'createTextNode': function (ckrz) {
        var ctzkdr = new q_gpliab();
        return ctzkdr['ownerDocument'] = this, ctzkdr['appendData'](ckrz), ctzkdr;
    },
    'createComment': function (jh1m8) {
        var e_$d = new q_drcztk();
        return e_$d['ownerDocument'] = this, e_$d['appendData'](jh1m8), e_$d;
    },
    'createCDATASection': function (ia7) {
        var _9e6n = new q_tr$dc();
        return _9e6n['ownerDocument'] = this, _9e6n['appendData'](ia7), _9e6n;
    },
    'createProcessingInstruction': function (afbl, a7ivb) {
        var jh1s4 = new q_yt();
        return jh1s4['ownerDocument'] = this, jh1s4['tagName'] = jh1s4['target'] = afbl, jh1s4['nodeValue'] = jh1s4['data'] = a7ivb, jh1s4;
    },
    'createAttribute': function (no_e69) {
        var _zrde$ = new q_e_n9$o();
        return _zrde$['ownerDocument'] = this, _zrde$['name'] = no_e69, _zrde$['nodeName'] = no_e69, _zrde$['localName'] = no_e69, _zrde$['specified'] = !0x0, _zrde$;
    },
    'createEntityReference': function (ed$rz_) {
        var xk3y52 = new q_om496();
        return xk3y52['ownerDocument'] = this, xk3y52['nodeName'] = ed$rz_, xk3y52;
    },
    'createElementNS': function (re_$dz, lp2af) {
        var y5tkc3 = new q_rezd(),
            $czdr_ = lp2af['split'](':'),
            bgiv = y5tkc3['attributes'] = new q_xp20f();
        return y5tkc3['childNodes'] = new q_$oez(), y5tkc3['ownerDocument'] = this, y5tkc3['nodeName'] = lp2af, y5tkc3['tagName'] = lp2af, y5tkc3['namespaceURI'] = re_$dz, 0x2 == $czdr_['length'] ? (y5tkc3['prefix'] = $czdr_[0x0], y5tkc3['localName'] = $czdr_[0x1]) : y5tkc3['localName'] = lp2af, bgiv['_ownerElement'] = y5tkc3, y5tkc3;
    },
    'createAttributeNS': function (gvliba, k5y3tc) {
        var mo614 = new q_e_n9$o(),
            vg7iba = k5y3tc['split'](':');
        return mo614['ownerDocument'] = this, mo614['nodeName'] = k5y3tc, mo614['name'] = k5y3tc, mo614['namespaceURI'] = gvliba, mo614['specified'] = !0x0, 0x2 == vg7iba['length'] ? (mo614['prefix'] = vg7iba[0x0], mo614['localName'] = vg7iba[0x1]) : mo614['localName'] = k5y3tc, mo614;
    }
}, q_lp2fx0(q_ujh8s, q_dz_$c), q_rezd['prototype'] = {
    'nodeType': q_y5x3kt,
    'hasAttribute': function (kty53x) {
        return null != this['getAttributeNode'](kty53x);
    },
    'getAttribute': function (eon_6) {
        var uq8jws = this['getAttributeNode'](eon_6);
        return uq8jws && uq8jws['value'] || '';
    },
    'getAttributeNode': function (juq8w) {
        return this['attributes']['getNamedItem'](juq8w);
    },
    'setAttribute': function (t3c, _z$oe9) {
        var k35yt = this['ownerDocument']['createAttribute'](t3c);
        k35yt['value'] = k35yt['nodeValue'] = '' + _z$oe9, this['setAttributeNode'](k35yt);
    },
    'removeAttribute': function (n_9$o) {
        var zdre_$ = this['getAttributeNode'](n_9$o);
        zdre_$ && this['removeAttributeNode'](zdre_$);
    },
    'appendChild': function (rtydck) {
        return rtydck['nodeType'] === q_tkycrd ? this['insertBefore'](rtydck, null) : q_iablp(this, rtydck);
    },
    'setAttributeNode': function (abg7iv) {
        return this['attributes']['setNamedItem'](abg7iv);
    },
    'setAttributeNodeNS': function (dcty5k) {
        return this['attributes']['setNamedItemNS'](dcty5k);
    },
    'removeAttributeNode': function (gapb) {
        return this['attributes']['removeNamedItem'](gapb['nodeName']);
    },
    'removeAttributeNS': function (z$crd_, d5ktyc) {
        var _edrz$ = this['getAttributeNodeNS'](z$crd_, d5ktyc);
        _edrz$ && this['removeAttributeNode'](_edrz$);
    },
    'hasAttributeNS': function (c$rtz, kx5ty3) {
        return null != this['getAttributeNodeNS'](c$rtz, kx5ty3);
    },
    'getAttributeNS': function (pagfl0, m46on) {
        var m1hn4 = this['getAttributeNodeNS'](pagfl0, m46on);
        return m1hn4 && m1hn4['value'] || '';
    },
    'setAttributeNS': function (vgia7b, p2fa0, fpbag) {
        var ivgabl = this['ownerDocument']['createAttributeNS'](vgia7b, p2fa0);
        ivgabl['value'] = ivgabl['nodeValue'] = '' + fpbag, this['setAttributeNode'](ivgabl);
    },
    'getAttributeNodeNS': function (n46o9, ykx2) {
        return this['attributes']['getNamedItemNS'](n46o9, ykx2);
    },
    'getElementsByTagName': function (pf0la) {
        return new q__9o6n(this, function (yx502) {
            var bgalvi = [];
            return q_tydc5(yx502, function (mh4618) {
                mh4618 === yx502 || mh4618['nodeType'] != q_y5x3kt || '*' !== pf0la && mh4618['tagName'] != pf0la || bgalvi['push'](mh4618);
            }), bgalvi;
        });
    },
    'getElementsByTagNameNS': function (y2305x, ipg) {
        return new q__9o6n(this, function (zre$_9) {
            var h684m = [];
            return q_tydc5(zre$_9, function (hsujw8) {
                hsujw8 === zre$_9 || hsujw8['nodeType'] !== q_y5x3kt || '*' !== y2305x && hsujw8['namespaceURI'] !== y2305x || '*' !== ipg && hsujw8['localName'] != ipg || h684m['push'](hsujw8);
            }), h684m;
        });
    }
}, q_ujh8s['prototype']['getElementsByTagName'] = q_rezd['prototype']['getElementsByTagName'], q_ujh8s['prototype']['getElementsByTagNameNS'] = q_rezd['prototype']['getElementsByTagNameNS'], q_lp2fx0(q_rezd, q_dz_$c), q_e_n9$o['prototype']['nodeType'] = q_drctkz, q_lp2fx0(q_e_n9$o, q_dz_$c), q_shju8['prototype'] = {
    'data': '',
    'substringData': function (bgiva, zcdr$_) {
        return this['data']['substring'](bgiva, bgiva + zcdr$_);
    },
    'appendData': function (plaf2) {
        plaf2 = this['data'] + plaf2, this['nodeValue'] = this['data'] = plaf2, this['length'] = plaf2['length'];
    },
    'insertData': function (gbp, x2lf) {
        this['replaceData'](gbp, 0x0, x2lf);
    },
    'appendChild': function () {
        throw new Error(q_r$_ed[q_o_$9en]);
    },
    'deleteData': function (la0fpg, e6o_9) {
        this['replaceData'](la0fpg, e6o_9, '');
    },
    'replaceData': function (tckd5y, pxf203, falbg) {
        var _rd$cz = this['data']['substring'](0x0, tckd5y),
            mo164n = this['data']['substring'](tckd5y + pxf203);
        falbg = _rd$cz + falbg + mo164n, this['nodeValue'] = this['data'] = falbg, this['length'] = falbg['length'];
    }
}, q_lp2fx0(q_shju8, q_dz_$c), q_gpliab['prototype'] = {
    'nodeName': '#text',
    'nodeType': q_c3k5t,
    'splitText': function (dkrctz) {
        var zeo9_ = this['data'],
            no9$ = zeo9_['substring'](dkrctz);
        zeo9_ = zeo9_['substring'](0x0, dkrctz), this['data'] = this['nodeValue'] = zeo9_, this['length'] = zeo9_['length'];
        var _9ezr$ = this['ownerDocument']['createTextNode'](no9$);
        return this['parentNode'] && this['parentNode']['insertBefore'](_9ezr$, this['nextSibling']), _9ezr$;
    }
}, q_lp2fx0(q_gpliab, q_shju8), q_drcztk['prototype'] = {
    'nodeName': '#comment',
    'nodeType': q_m6o9e
}, q_lp2fx0(q_drcztk, q_shju8), q_tr$dc['prototype'] = {
    'nodeName': '#cdata-section',
    'nodeType': q_gipla
}, q_lp2fx0(q_tr$dc, q_shju8), q_drz_e['prototype']['nodeType'] = q_p0lx, q_lp2fx0(q_drz_e, q_dz_$c), q_bvlgi['prototype']['nodeType'] = q_h41m8, q_lp2fx0(q_bvlgi, q_dz_$c), q_$_cdr['prototype']['nodeType'] = q_uj8qsw, q_lp2fx0(q_$_cdr, q_dz_$c), q_om496['prototype']['nodeType'] = q_rtzcdk, q_lp2fx0(q_om496, q_dz_$c), q_gpail['prototype']['nodeName'] = '#document-fragment', q_gpail['prototype']['nodeType'] = q_tkycrd, q_lp2fx0(q_gpail, q_dz_$c), q_yt['prototype']['nodeType'] = q_w81sh, q_lp2fx0(q_yt, q_dz_$c), q_om4n6['prototype']['serializeToString'] = function (fx5, $d_zre, kty35x) {
    return q_e$r_z['call'](fx5, $d_zre, kty35x);
}, q_dz_$c['prototype']['toString'] = q_e$r_z;
try {
    Object['defineProperty'] && (Object['defineProperty'](q__9o6n['prototype'], 'length', {
        'get': function () {
            return q_cdrtyk(this), this['$$length'];
        }
    }), Object['defineProperty'](q_dz_$c['prototype'], 'textContent', {
        'get': function () {
            return q_rctdz$(this);
        },
        'set': function (xk2y) {
            switch (this['nodeType']) {
                case q_y5x3kt:
                case q_tkycrd:
                    for (; this['firstChild'];) this['removeChild'](this['firstChild']);
                    (xk2y || String(xk2y)) && this['appendChild'](this['ownerDocument']['createTextNode'](xk2y));
                    break;
                default:
                    this['data'] = xk2y, this['value'] = xk2y, this['nodeValue'] = xk2y;
            }
        }
    }), q_palbg = function ($dtzrc, fag0l, neo$_) {
        $dtzrc['$$' + fag0l] = neo$_;
    });
} catch (q_m4jh8) {}
exports['DOMImplementation'] = q_x0l2pf, exports['XMLSerializer'] = q_om4n6;