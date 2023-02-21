var Q = wx.$v;
function vjqx8g() {}
function v$c1nui(_b6z5, unic, hy1mc, b692p, pbz_) {
    function y1$cm(ef_o57) {
        if (ef_o57 > 0xffff) {
            ef_o57 -= 0x10000;
            var f57eao = 0xd800 + (ef_o57 >> 0xa),
                _fz5ob = 0xdc00 + (0x3ff & ef_o57);
            return String['fromCharCode'](f57eao, _fz5ob);
        }
        return String['fromCharCode'](ef_o57);
    }
    function qtrk(jq8xrt) {
        var h$3ml = jq8xrt['slice'](0x1, -0x1);
        return h$3ml in hy1mc ? hy1mc[h$3ml] : '#' === h$3ml['charAt'](0x0) ? y1$cm(parseInt(h$3ml['substr'](0x1)['replace']('x', '0x'))) : (pbz_['error']('entity not found:' + jq8xrt), jq8xrt);
    }
    function lvrw3k(cm$lhy) {
        if (cm$lhy > myh$3l) {
            var iyc1$m = _b6z5['substring'](myh$3l, cm$lhy)['replace'](/&#?\w+;/g, qtrk);
            f7ao5e && jqrt8(myh$3l), b692p['characters'](iyc1$m, 0x0, cm$lhy - myh$3l), myh$3l = cm$lhy;
        }
    }
    function jqrt8(txkqrw, $iym1c) {
        for (; txkqrw >= myc$1i && ($iym1c = c1y$mi['exec'](_b6z5));) kwlv3h = $iym1c['index'], myc$1i = kwlv3h + $iym1c[0x0]['length'], f7ao5e['lineNumber']++;
        f7ao5e['columnNumber'] = txkqrw - kwlv3h + 0x1;
    }
    for (var kwlv3h = 0x0, myc$1i = 0x0, c1y$mi = /.*(?:\r\n?|\n)|.*$/g, f7ao5e = b692p['locator'], ych = [{ 'currentNSMap': unic }], kjrxq = {}, myh$3l = 0x0;;) {
        try {
            var ofb = _b6z5['indexOf']('<', myh$3l);
            if (0x0 > ofb) {
                if (!_b6z5['substr'](myh$3l)['match'](/^\s*$/)) {
                    var m$1yc = b692p['doc'],
                        qx8tjg = m$1yc['createTextNode'](_b6z5['substr'](myh$3l));
                    m$1yc['appendChild'](qx8tjg), b692p['currentElement'] = qx8tjg;
                }
                return;
            }
            switch (ofb > myh$3l && lvrw3k(ofb), _b6z5['charAt'](ofb + 0x1)) {
                case '/':
                    var rkxtq = _b6z5['indexOf']('>', ofb + 0x3),
                        xqjt8g = _b6z5['substring'](ofb + 0x2, rkxtq),
                        c1in0u = ych['pop']();
                    0x0 > rkxtq ? (xqjt8g = _b6z5['substring'](ofb + 0x2)['replace'](/[\s<].*/, ''), pbz_['error']('end tag name: ' + xqjt8g + ' is not complete:' + c1in0u['tagName']), rkxtq = ofb + 0x1 + xqjt8g['length']) : xqjt8g['match'](/\s</) && (xqjt8g = xqjt8g['replace'](/[\s<].*/, ''), pbz_['error']('end tag name: ' + xqjt8g + ' maybe not complete'), rkxtq = ofb + 0x1 + xqjt8g['length']);
                    var hym = c1in0u['localNSMap'],
                        w3l = c1in0u['tagName'] == xqjt8g,
                        nic$1u = w3l || c1in0u['tagName'] && c1in0u['tagName']['toLowerCase']() == xqjt8g['toLowerCase']();
                    if (nic$1u) {
                        if (b692p['endElement'](c1in0u['uri'], c1in0u['localName'], xqjt8g), hym) {
                            for (var pd0n2u in hym) b692p['endPrefixMapping'](pd0n2u);
                        }
                        w3l || pbz_['fatalError']('end tag name: ' + xqjt8g + ' is not match the current start tagName:' + c1in0u['tagName']);
                    } else ych['push'](c1in0u);
                    rkxtq++;
                    break;
                case '?':
                    f7ao5e && jqrt8(ofb), rkxtq = vdz9bp(_b6z5, ofb, b692p);
                    break;
                case '!':
                    f7ao5e && jqrt8(ofb), rkxtq = vin2d0u(_b6z5, ofb, b692p, pbz_);
                    break;
                default:
                    f7ao5e && jqrt8(ofb);
                    var tqrxkw = new vmvly3(),
                        qgjsx8 = ych[ych['length'] - 0x1]['currentNSMap'],
                        rkxtq = vi0u21n(_b6z5, ofb, tqrxkw, qgjsx8, qtrk, pbz_),
                        hlym3$ = tqrxkw['length'];
                    if (!tqrxkw['closed'] && vwqtr(_b6z5, rkxtq, tqrxkw['tagName'], kjrxq) && (tqrxkw['closed'] = !0x0, hy1mc['nbsp'] || pbz_['warning']('unclosed xml attribute')), f7ao5e && hlym3$) {
                        for (var txvrwk = vsx8gq(f7ao5e, {}), d2b69p = 0x0; hlym3$ > d2b69p; d2b69p++) {
                            var lkrv = tqrxkw[d2b69p];
                            jqrt8(lkrv['offset']), lkrv['locator'] = vsx8gq(f7ao5e, {});
                        }
                        b692p['locator'] = txvrwk, vkvrtw3(tqrxkw, b692p, qgjsx8) && ych['push'](tqrxkw), b692p['locator'] = f7ao5e;
                    } else vkvrtw3(tqrxkw, b692p, qgjsx8) && ych['push'](tqrxkw);
                    'http://www.w3.org/1999/xhtml' !== tqrxkw['uri'] || tqrxkw['closed'] ? rkxtq++ : rkxtq = vkqtxrj(_b6z5, rkxtq, tqrxkw['tagName'], qtrk, b692p);
            }
        } catch (b9zd6) {
            pbz_['error']('element parse error: ' + b9zd6), rkxtq = -0x1;
        }
        rkxtq > myh$3l ? myh$3l = rkxtq : lvrw3k(Math['max'](ofb, myh$3l) + 0x1);
    }
}
function vsx8gq(wl3rvk, xj8qgt) {
    return xj8qgt['lineNumber'] = wl3rvk['lineNumber'], xj8qgt['columnNumber'] = wl3rvk['columnNumber'], xj8qgt;
}
function vi0u21n(hcy1m$, wkt3r, h$my, $yicm, iun02d, tvk3w) {
    for (var gxjqt8, m$iy, j8xgs = ++wkt3r, aofe = vtxqkrj;;) {
        var trxkv = hcy1m$['charAt'](j8xgs);
        switch (trxkv) {
            case '=':
                if (aofe === vafe5o) gxjqt8 = hcy1m$['slice'](wkt3r, j8xgs), aofe = v_fb5;else {
                    if (aofe !== vhyml3) throw new Error('attribute equal must after attrName');
                    aofe = v_fb5;
                }
                break;
            case '\x27':
            case '\x22':
                if (aofe === v_fb5 || aofe === vafe5o) {
                    if (aofe === vafe5o && (tvk3w['warning']('attribute value must after "="'), gxjqt8 = hcy1m$['slice'](wkt3r, j8xgs)), wkt3r = j8xgs + 0x1, j8xgs = hcy1m$['indexOf'](trxkv, wkt3r), !(j8xgs > 0x0)) throw new Error('attribute value no end \'' + trxkv + '\' match');
                    m$iy = hcy1m$['slice'](wkt3r, j8xgs)['replace'](/&#?\w+;/g, iun02d), h$my['add'](gxjqt8, m$iy, wkt3r - 0x1), aofe = vn2upd;
                } else {
                    if (aofe != vjqgt8x) throw new Error('attribute value must after "="');
                    m$iy = hcy1m$['slice'](wkt3r, j8xgs)['replace'](/&#?\w+;/g, iun02d), h$my['add'](gxjqt8, m$iy, wkt3r), tvk3w['warning']('attribute "' + gxjqt8 + '" missed start quot(' + trxkv + ')!!'), wkt3r = j8xgs + 0x1, aofe = vn2upd;
                }
                break;
            case '/':
                switch (aofe) {
                    case vtxqkrj:
                        h$my['setTagName'](hcy1m$['slice'](wkt3r, j8xgs));
                    case vn2upd:
                    case ve7of:
                    case vr3tw:
                        aofe = vr3tw, h$my['closed'] = !0x0;
                    case vjqgt8x:
                    case vafe5o:
                    case vhyml3:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return tvk3w['error']('unexpected end of input'), aofe == vtxqkrj && h$my['setTagName'](hcy1m$['slice'](wkt3r, j8xgs)), j8xgs;
            case '>':
                switch (aofe) {
                    case vtxqkrj:
                        h$my['setTagName'](hcy1m$['slice'](wkt3r, j8xgs));
                    case vn2upd:
                    case ve7of:
                    case vr3tw:
                        break;
                    case vjqgt8x:
                    case vafe5o:
                        m$iy = hcy1m$['slice'](wkt3r, j8xgs), '/' === m$iy['slice'](-0x1) && (h$my['closed'] = !0x0, m$iy = m$iy['slice'](0x0, -0x1));
                    case vhyml3:
                        aofe === vhyml3 && (m$iy = gxjqt8), aofe == vjqgt8x ? (tvk3w['warning']('attribute "' + m$iy + '" missed quot(")!!'), h$my['add'](gxjqt8, m$iy['replace'](/&#?\w+;/g, iun02d), wkt3r)) : ('http://www.w3.org/1999/xhtml' === $yicm[''] && m$iy['match'](/^(?:disabled|checked|selected)$/i) || tvk3w['warning']('attribute "' + m$iy + '" missed value!! "' + m$iy + '" instead!!'), h$my['add'](m$iy, m$iy, wkt3r));
                        break;
                    case v_fb5:
                        throw new Error('attribute value missed!!');
                }
                return j8xgs;
            case '\u0080':
                trxkv = '\x20';
            default:
                if ('\x20' >= trxkv) switch (aofe) {
                    case vtxqkrj:
                        h$my['setTagName'](hcy1m$['slice'](wkt3r, j8xgs)), aofe = ve7of;
                        break;
                    case vafe5o:
                        gxjqt8 = hcy1m$['slice'](wkt3r, j8xgs), aofe = vhyml3;
                        break;
                    case vjqgt8x:
                        var m$iy = hcy1m$['slice'](wkt3r, j8xgs)['replace'](/&#?\w+;/g, iun02d);
                        tvk3w['warning']('attribute "' + m$iy + '" missed quot(")!!'), h$my['add'](gxjqt8, m$iy, wkt3r);
                    case vn2upd:
                        aofe = ve7of;
                } else switch (aofe) {
                    case vhyml3:
                        {
                            h$my['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === $yicm[''] && gxjqt8['match'](/^(?:disabled|checked|selected)$/i) || tvk3w['warning']('attribute "' + gxjqt8 + '" missed value!! "' + gxjqt8 + '" instead2!!'), h$my['add'](gxjqt8, gxjqt8, wkt3r), wkt3r = j8xgs, aofe = vafe5o;
                        break;
                    case vn2upd:
                        tvk3w['warning']('attribute space is required"' + gxjqt8 + '\x22!!');
                    case ve7of:
                        aofe = vafe5o, wkt3r = j8xgs;
                        break;
                    case v_fb5:
                        aofe = vjqgt8x, wkt3r = j8xgs;
                        break;
                    case vr3tw:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        j8xgs++;
    }
}
function vkvrtw3(wtxqr, wvrl, tkqjxr) {
    for (var b5_fzo = wtxqr['tagName'], pzb6_ = null, m$h3y = wtxqr['length']; m$h3y--;) {
        var y$l3hm = wtxqr[m$h3y],
            hyc$ml = y$l3hm['qName'],
            wklv3h = y$l3hm['value'],
            f7e5a4 = hyc$ml['indexOf'](':');
        if (f7e5a4 > 0x0) var kqrjxt = y$l3hm['prefix'] = hyc$ml['slice'](0x0, f7e5a4),
            f_ozb5 = hyc$ml['slice'](f7e5a4 + 0x1),
            iyc1 = 'xmlns' === kqrjxt && f_ozb5;else f_ozb5 = hyc$ml, kqrjxt = null, iyc1 = 'xmlns' === hyc$ml && '';
        y$l3hm['localName'] = f_ozb5, iyc1 !== !0x1 && (null == pzb6_ && (pzb6_ = {}, vm1y$c(tkqjxr, tkqjxr = {})), tkqjxr[iyc1] = pzb6_[iyc1] = wklv3h, y$l3hm['uri'] = 'http://www.w3.org/2000/xmlns/', wvrl['startPrefixMapping'](iyc1, wklv3h));
    }
    for (var m$h3y = wtxqr['length']; m$h3y--;) {
        y$l3hm = wtxqr[m$h3y];
        var kqrjxt = y$l3hm['prefix'];
        kqrjxt && ('xml' === kqrjxt && (y$l3hm['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== kqrjxt && (y$l3hm['uri'] = tkqjxr[kqrjxt || '']));
    }
    var f7e5a4 = b5_fzo['indexOf'](':');
    f7e5a4 > 0x0 ? (kqrjxt = wtxqr['prefix'] = b5_fzo['slice'](0x0, f7e5a4), f_ozb5 = wtxqr['localName'] = b5_fzo['slice'](f7e5a4 + 0x1)) : (kqrjxt = null, f_ozb5 = wtxqr['localName'] = b5_fzo);
    var yim$1 = wtxqr['uri'] = tkqjxr[kqrjxt || ''];
    if (wvrl['startElement'](yim$1, f_ozb5, b5_fzo, wtxqr), !wtxqr['closed']) return wtxqr['currentNSMap'] = tkqjxr, wtxqr['localNSMap'] = pzb6_, !0x0;
    if (wvrl['endElement'](yim$1, f_ozb5, b5_fzo), pzb6_) {
        for (kqrjxt in pzb6_) wvrl['endPrefixMapping'](kqrjxt);
    }
}
function vkqtxrj(kr3tvw, ni2u01, wtrkx, cn0iu, a7eo5) {
    if (/^(?:script|textarea)$/i['test'](wtrkx)) {
        var o6_b9 = kr3tvw['indexOf']('</' + wtrkx + '>', ni2u01),
            hlw3 = kr3tvw['substring'](ni2u01 + 0x1, o6_b9);
        if (/[&<]/['test'](hlw3)) return (/^script$/i['test'](wtrkx) ? (a7eo5['characters'](hlw3, 0x0, hlw3['length']), o6_b9) : (hlw3 = hlw3['replace'](/&#?\w+;/g, cn0iu), a7eo5['characters'](hlw3, 0x0, hlw3['length']), o6_b9)
        );
    }
    return ni2u01 + 0x1;
}
function vwqtr(gxtjq, i0nu2d, lvm3hy, bf_5z) {
    var qtwrk = bf_5z[lvm3hy];
    return null == qtwrk && (qtwrk = gxtjq['lastIndexOf']('</' + lvm3hy + '>'), i0nu2d > qtwrk && (qtwrk = gxtjq['lastIndexOf']('</' + lvm3hy)), bf_5z[lvm3hy] = qtwrk), i0nu2d > qtwrk;
}
function vm1y$c(jgxq8t, yc1mi) {
    for (var dpn2u0 in jgxq8t) yc1mi[dpn2u0] = jgxq8t[dpn2u0];
}
function vin2d0u(hm$1yc, zb6o9_, yuic1$, pbz9_6) {
    var up02nd = hm$1yc['charAt'](zb6o9_ + 0x2);
    switch (up02nd) {
        case '-':
            if ('-' === hm$1yc['charAt'](zb6o9_ + 0x3)) {
                var $i1ycm = hm$1yc['indexOf']('-->', zb6o9_ + 0x4);
                return $i1ycm > zb6o9_ ? (yuic1$['comment'](hm$1yc, zb6o9_ + 0x4, $i1ycm - zb6o9_ - 0x4), $i1ycm + 0x3) : (pbz9_6['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == hm$1yc['substr'](zb6o9_ + 0x3, 0x6)) {
                var $i1ycm = hm$1yc['indexOf'](']]>', zb6o9_ + 0x9);
                return yuic1$['startCDATA'](), yuic1$['characters'](hm$1yc, zb6o9_ + 0x9, $i1ycm - zb6o9_ - 0x9), yuic1$['endCDATA'](), $i1ycm + 0x3;
            }
            var diu02n = vi0du(hm$1yc, zb6o9_),
                oa5e = diu02n['length'];
            if (oa5e > 0x1 && /!doctype/i['test'](diu02n[0x0][0x0])) {
                var qj8txr = diu02n[0x1][0x0],
                    trjx = oa5e > 0x3 && /^public$/i['test'](diu02n[0x2][0x0]) && diu02n[0x3][0x0],
                    zbo65 = oa5e > 0x4 && diu02n[0x4][0x0],
                    vwrlk = diu02n[oa5e - 0x1];
                return yuic1$['startDTD'](qj8txr, trjx && trjx['replace'](/^(['"])(.*?)\1$/, '$2'), zbo65 && zbo65['replace'](/^(['"])(.*?)\1$/, '$2')), yuic1$['endDTD'](), vwrlk['index'] + vwrlk[0x0]['length'];
            }
    }
    return -0x1;
}
function vdz9bp(lmhv3, tr3vw, fo5_bz) {
    var pbz69d = lmhv3['indexOf']('?>', tr3vw);
    if (pbz69d) {
        var l3yvh = lmhv3['substring'](tr3vw, pbz69d)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (l3yvh) {
            {
                l3yvh[0x0]['length'];
            }
            return fo5_bz['processingInstruction'](l3yvh[0x1], l3yvh[0x2]), pbz69d + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function vmvly3() {}
function vi1ycu$(kv3rt, lm$) {
    return kv3rt['__proto__'] = lm$, kv3rt;
}
function vi0du(d9n02, b9z6d) {
    var y3lmh$,
        q8jrxt = [],
        r3lwk = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (r3lwk['lastIndex'] = b9z6d, r3lwk['exec'](d9n02); y3lmh$ = r3lwk['exec'](d9n02);) if (q8jrxt['push'](y3lmh$), y3lmh$[0x1]) return q8jrxt;
}
var vea4f75 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    vkv3tr = new RegExp('[\\-\\.0-9' + vea4f75['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    vchmy = new RegExp('^' + vea4f75['source'] + vkv3tr['source'] + '*(?::' + vea4f75['source'] + vkv3tr['source'] + '*)?$'),
    vtxqkrj = 0x0,
    vafe5o = 0x1,
    vhyml3 = 0x2,
    v_fb5 = 0x3,
    vjqgt8x = 0x4,
    vn2upd = 0x5,
    ve7of = 0x6,
    vr3tw = 0x7;
vjqx8g['prototype'] = {
    'parse': function (lymvh3, pb_6z9, bz_o96) {
        var l$3 = this['domBuilder'];
        l$3['startDocument'](), vm1y$c(pb_6z9, pb_6z9 = {}), v$c1nui(lymvh3, pb_6z9, bz_o96, l$3, this['errorHandler']), l$3['endDocument']();
    }
}, vmvly3['prototype'] = {
    'setTagName': function (kvxwtr) {
        if (!vchmy['test'](kvxwtr)) throw new Error('invalid tagName:' + kvxwtr);
        this['tagName'] = kvxwtr;
    },
    'add': function ($ymi1, m3h$, vkt3rw) {
        if (!vchmy['test']($ymi1)) throw new Error('invalid attribute:' + $ymi1);
        this[this['length']++] = {
            'qName': $ymi1,
            'value': m3h$,
            'offset': vkt3rw
        };
    },
    'length': 0x0,
    'getLocalName': function (k3wvh) {
        return this[k3wvh]['localName'];
    },
    'getLocator': function (gjxsq) {
        return this[gjxsq]['locator'];
    },
    'getQName': function (tvxrwk) {
        return this[tvxrwk]['qName'];
    },
    'getURI': function (vml3yh) {
        return this[vml3yh]['uri'];
    },
    'getValue': function (rtxjq8) {
        return this[rtxjq8]['value'];
    }
}, vi1ycu$({}, vi1ycu$['prototype']) instanceof vi1ycu$ || (vi1ycu$ = function (y$mi, zpb_96) {
    function kxrwv() {}
    kxrwv['prototype'] = zpb_96, kxrwv = new kxrwv();
    for (zpb_96 in y$mi) kxrwv[zpb_96] = y$mi[zpb_96];
    return kxrwv;
}), exports['XMLReader'] = vjqx8g;