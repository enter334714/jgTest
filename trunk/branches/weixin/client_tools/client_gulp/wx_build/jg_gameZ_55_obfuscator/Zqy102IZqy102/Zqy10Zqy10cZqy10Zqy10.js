var J = wx.h$;
function gt9z() {}
function gudfe4h(d4eh_, h4due, qlgxy, l$qgy, w72tm) {
    function yz9(ef_hs8) {
        if (ef_hs8 > 0xffff) {
            ef_hs8 -= 0x10000;
            var w237ar = 0xd800 + (ef_hs8 >> 0xa),
                nikvo0 = 0xdc00 + (0x3ff & ef_hs8);
            return String['fromCharCode'](w237ar, nikvo0);
        }
        return String['fromCharCode'](ef_hs8);
    }
    function pmzt67(ikx$) {
        var rw83s2 = ikx$['slice'](0x1, -0x1);
        return rw83s2 in qlgxy ? qlgxy[rw83s2] : '#' === rw83s2['charAt'](0x0) ? yz9(parseInt(rw83s2['substr'](0x1)['replace']('x', '0x'))) : (w72tm['error']('entity not found:' + ikx$), ikx$);
    }
    function q1y9z(he5ud) {
        if (he5ud > ik$x) {
            var u4dhe5 = d4eh_['substring'](ik$x, he5ud)['replace'](/&#?\w+;/g, pmzt67);
            amtp67 && dh4_e(ik$x), l$qgy['characters'](u4dhe5, 0x0, he5ud - ik$x), ik$x = he5ud;
        }
    }
    function dh4_e(mta67p, sr3_) {
        for (; mta67p >= fhde4u && (sr3_ = cnjoi['exec'](d4eh_));) ijcv = sr3_['index'], fhde4u = ijcv + sr3_[0x0]['length'], amtp67['lineNumber']++;
        amtp67['columnNumber'] = mta67p - ijcv + 0x1;
    }
    for (var ijcv = 0x0, fhde4u = 0x0, cnjoi = /.*(?:\r\n?|\n)|.*$/g, amtp67 = l$qgy['locator'], _h8f3 = [{ 'currentNSMap': h4due }], _r3fs = {}, ik$x = 0x0;;) {
        try {
            var hd4ef_ = d4eh_['indexOf']('<', ik$x);
            if (0x0 > hd4ef_) {
                if (!d4eh_['substr'](ik$x)['match'](/^\s*$/)) {
                    var _seh8f = l$qgy['doc'],
                        kqg$0x = _seh8f['createTextNode'](d4eh_['substr'](ik$x));
                    _seh8f['appendChild'](kqg$0x), l$qgy['currentElement'] = kqg$0x;
                }
                return;
            }
            switch (hd4ef_ > ik$x && q1y9z(hd4ef_), d4eh_['charAt'](hd4ef_ + 0x1)) {
                case '/':
                    var gx$kq = d4eh_['indexOf']('>', hd4ef_ + 0x3),
                        vnijo = d4eh_['substring'](hd4ef_ + 0x2, gx$kq),
                        _83fhs = _h8f3['pop']();
                    0x0 > gx$kq ? (vnijo = d4eh_['substring'](hd4ef_ + 0x2)['replace'](/[\s<].*/, ''), w72tm['error']('end tag name: ' + vnijo + ' is not complete:' + _83fhs['tagName']), gx$kq = hd4ef_ + 0x1 + vnijo['length']) : vnijo['match'](/\s</) && (vnijo = vnijo['replace'](/[\s<].*/, ''), w72tm['error']('end tag name: ' + vnijo + ' maybe not complete'), gx$kq = hd4ef_ + 0x1 + vnijo['length']);
                    var wra372 = _83fhs['localNSMap'],
                        efs = _83fhs['tagName'] == vnijo,
                        d_h8ef = efs || _83fhs['tagName'] && _83fhs['tagName']['toLowerCase']() == vnijo['toLowerCase']();
                    if (d_h8ef) {
                        if (l$qgy['endElement'](_83fhs['uri'], _83fhs['localName'], vnijo), wra372) {
                            for (var bd5ue4 in wra372) l$qgy['endPrefixMapping'](bd5ue4);
                        }
                        efs || w72tm['fatalError']('end tag name: ' + vnijo + ' is not match the current start tagName:' + _83fhs['tagName']);
                    } else _h8f3['push'](_83fhs);
                    gx$kq++;
                    break;
                case '?':
                    amtp67 && dh4_e(hd4ef_), gx$kq = gv0niko(d4eh_, hd4ef_, l$qgy);
                    break;
                case '!':
                    amtp67 && dh4_e(hd4ef_), gx$kq = ggq9l(d4eh_, hd4ef_, l$qgy, w72tm);
                    break;
                default:
                    amtp67 && dh4_e(hd4ef_);
                    var niov0 = new gglyq91(),
                        onvik = _h8f3[_h8f3['length'] - 0x1]['currentNSMap'],
                        gx$kq = gxkq0(d4eh_, hd4ef_, niov0, onvik, pmzt67, w72tm),
                        _de = niov0['length'];
                    if (!niov0['closed'] && gkiv0(d4eh_, gx$kq, niov0['tagName'], _r3fs) && (niov0['closed'] = !0x0, qlgxy['nbsp'] || w72tm['warning']('unclosed xml attribute')), amtp67 && _de) {
                        for (var a6mwt = goxk0(amtp67, {}), xv$i0 = 0x0; _de > xv$i0; xv$i0++) {
                            var kx0gq$ = niov0[xv$i0];
                            dh4_e(kx0gq$['offset']), kx0gq$['locator'] = goxk0(amtp67, {});
                        }
                        l$qgy['locator'] = a6mwt, gnvcij(niov0, l$qgy, onvik) && _h8f3['push'](niov0), l$qgy['locator'] = amtp67;
                    } else gnvcij(niov0, l$qgy, onvik) && _h8f3['push'](niov0);
                    'http://www.w3.org/1999/xhtml' !== niov0['uri'] || niov0['closed'] ? gx$kq++ : gx$kq = gm7ta6w(d4eh_, gx$kq, niov0['tagName'], pmzt67, l$qgy);
            }
        } catch (vjo) {
            w72tm['error']('element parse error: ' + vjo), gx$kq = -0x1;
        }
        gx$kq > ik$x ? ik$x = gx$kq : q1y9z(Math['max'](hd4ef_, ik$x) + 0x1);
    }
}
function goxk0(fed8h, s382_) {
    return s382_['lineNumber'] = fed8h['lineNumber'], s382_['columnNumber'] = fed8h['columnNumber'], s382_;
}
function gxkq0(cnjoiv, ampt76, $lygq, r_823s, y9q1z, ixvk$0) {
    for (var nvijo, ixk0v$, z1tm6p = ++ampt76, mr = gtpm67z;;) {
        var y61zp = cnjoiv['charAt'](z1tm6p);
        switch (y61zp) {
            case '=':
                if (mr === gt76wam) nvijo = cnjoiv['slice'](ampt76, z1tm6p), mr = gfd4uh;else {
                    if (mr !== gx0ovik) throw new Error('attribute equal must after attrName');
                    mr = gfd4uh;
                }
                break;
            case '\x27':
            case '\x22':
                if (mr === gfd4uh || mr === gt76wam) {
                    if (mr === gt76wam && (ixvk$0['warning']('attribute value must after "="'), nvijo = cnjoiv['slice'](ampt76, z1tm6p)), ampt76 = z1tm6p + 0x1, z1tm6p = cnjoiv['indexOf'](y61zp, ampt76), !(z1tm6p > 0x0)) throw new Error('attribute value no end \'' + y61zp + '\' match');
                    ixk0v$ = cnjoiv['slice'](ampt76, z1tm6p)['replace'](/&#?\w+;/g, y9q1z), $lygq['add'](nvijo, ixk0v$, ampt76 - 0x1), mr = g_4efhd;
                } else {
                    if (mr != gkoxv0i) throw new Error('attribute value must after "="');
                    ixk0v$ = cnjoiv['slice'](ampt76, z1tm6p)['replace'](/&#?\w+;/g, y9q1z), $lygq['add'](nvijo, ixk0v$, ampt76), ixvk$0['warning']('attribute "' + nvijo + '" missed start quot(' + y61zp + ')!!'), ampt76 = z1tm6p + 0x1, mr = g_4efhd;
                }
                break;
            case '/':
                switch (mr) {
                    case gtpm67z:
                        $lygq['setTagName'](cnjoiv['slice'](ampt76, z1tm6p));
                    case g_4efhd:
                    case gs_832:
                    case gsf8he:
                        mr = gsf8he, $lygq['closed'] = !0x0;
                    case gkoxv0i:
                    case gt76wam:
                    case gx0ovik:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return ixvk$0['error']('unexpected end of input'), mr == gtpm67z && $lygq['setTagName'](cnjoiv['slice'](ampt76, z1tm6p)), z1tm6p;
            case '>':
                switch (mr) {
                    case gtpm67z:
                        $lygq['setTagName'](cnjoiv['slice'](ampt76, z1tm6p));
                    case g_4efhd:
                    case gs_832:
                    case gsf8he:
                        break;
                    case gkoxv0i:
                    case gt76wam:
                        ixk0v$ = cnjoiv['slice'](ampt76, z1tm6p), '/' === ixk0v$['slice'](-0x1) && ($lygq['closed'] = !0x0, ixk0v$ = ixk0v$['slice'](0x0, -0x1));
                    case gx0ovik:
                        mr === gx0ovik && (ixk0v$ = nvijo), mr == gkoxv0i ? (ixvk$0['warning']('attribute "' + ixk0v$ + '" missed quot(")!!'), $lygq['add'](nvijo, ixk0v$['replace'](/&#?\w+;/g, y9q1z), ampt76)) : ('http://www.w3.org/1999/xhtml' === r_823s[''] && ixk0v$['match'](/^(?:disabled|checked|selected)$/i) || ixvk$0['warning']('attribute "' + ixk0v$ + '" missed value!! "' + ixk0v$ + '" instead!!'), $lygq['add'](ixk0v$, ixk0v$, ampt76));
                        break;
                    case gfd4uh:
                        throw new Error('attribute value missed!!');
                }
                return z1tm6p;
            case '\u0080':
                y61zp = '\x20';
            default:
                if ('\x20' >= y61zp) switch (mr) {
                    case gtpm67z:
                        $lygq['setTagName'](cnjoiv['slice'](ampt76, z1tm6p)), mr = gs_832;
                        break;
                    case gt76wam:
                        nvijo = cnjoiv['slice'](ampt76, z1tm6p), mr = gx0ovik;
                        break;
                    case gkoxv0i:
                        var ixk0v$ = cnjoiv['slice'](ampt76, z1tm6p)['replace'](/&#?\w+;/g, y9q1z);
                        ixvk$0['warning']('attribute "' + ixk0v$ + '" missed quot(")!!'), $lygq['add'](nvijo, ixk0v$, ampt76);
                    case g_4efhd:
                        mr = gs_832;
                } else switch (mr) {
                    case gx0ovik:
                        {
                            $lygq['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === r_823s[''] && nvijo['match'](/^(?:disabled|checked|selected)$/i) || ixvk$0['warning']('attribute "' + nvijo + '" missed value!! "' + nvijo + '" instead2!!'), $lygq['add'](nvijo, nvijo, ampt76), ampt76 = z1tm6p, mr = gt76wam;
                        break;
                    case g_4efhd:
                        ixvk$0['warning']('attribute space is required"' + nvijo + '\x22!!');
                    case gs_832:
                        mr = gt76wam, ampt76 = z1tm6p;
                        break;
                    case gfd4uh:
                        mr = gkoxv0i, ampt76 = z1tm6p;
                        break;
                    case gsf8he:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        z1tm6p++;
    }
}
function gnvcij(d4uhf, ikoxv, dueh) {
    for (var x$0vkg = d4uhf['tagName'], _sr8f = null, g$x0 = d4uhf['length']; g$x0--;) {
        var iv$0xk = d4uhf[g$x0],
            x0$kq = iv$0xk['qName'],
            ygl9$q = iv$0xk['value'],
            hfs_8 = x0$kq['indexOf'](':');
        if (hfs_8 > 0x0) var lz9qy1 = iv$0xk['prefix'] = x0$kq['slice'](0x0, hfs_8),
            dhf_8e = x0$kq['slice'](hfs_8 + 0x1),
            wtam76 = 'xmlns' === lz9qy1 && dhf_8e;else dhf_8e = x0$kq, lz9qy1 = null, wtam76 = 'xmlns' === x0$kq && '';
        iv$0xk['localName'] = dhf_8e, wtam76 !== !0x1 && (null == _sr8f && (_sr8f = {}, grsf_83(dueh, dueh = {})), dueh[wtam76] = _sr8f[wtam76] = ygl9$q, iv$0xk['uri'] = 'http://www.w3.org/2000/xmlns/', ikoxv['startPrefixMapping'](wtam76, ygl9$q));
    }
    for (var g$x0 = d4uhf['length']; g$x0--;) {
        iv$0xk = d4uhf[g$x0];
        var lz9qy1 = iv$0xk['prefix'];
        lz9qy1 && ('xml' === lz9qy1 && (iv$0xk['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== lz9qy1 && (iv$0xk['uri'] = dueh[lz9qy1 || '']));
    }
    var hfs_8 = x$0vkg['indexOf'](':');
    hfs_8 > 0x0 ? (lz9qy1 = d4uhf['prefix'] = x$0vkg['slice'](0x0, hfs_8), dhf_8e = d4uhf['localName'] = x$0vkg['slice'](hfs_8 + 0x1)) : (lz9qy1 = null, dhf_8e = d4uhf['localName'] = x$0vkg);
    var lyg9$ = d4uhf['uri'] = dueh[lz9qy1 || ''];
    if (ikoxv['startElement'](lyg9$, dhf_8e, x$0vkg, d4uhf), !d4uhf['closed']) return d4uhf['currentNSMap'] = dueh, d4uhf['localNSMap'] = _sr8f, !0x0;
    if (ikoxv['endElement'](lyg9$, dhf_8e, x$0vkg), _sr8f) {
        for (lz9qy1 in _sr8f) ikoxv['endPrefixMapping'](lz9qy1);
    }
}
function gm7ta6w(ehfs_8, lg$0x, a27mw, _df4e, onkivc) {
    if (/^(?:script|textarea)$/i['test'](a27mw)) {
        var rsa32 = ehfs_8['indexOf']('</' + a27mw + '>', lg$0x),
            hu54ed = ehfs_8['substring'](lg$0x + 0x1, rsa32);
        if (/[&<]/['test'](hu54ed)) return (/^script$/i['test'](a27mw) ? (onkivc['characters'](hu54ed, 0x0, hu54ed['length']), rsa32) : (hu54ed = hu54ed['replace'](/&#?\w+;/g, _df4e), onkivc['characters'](hu54ed, 0x0, hu54ed['length']), rsa32)
        );
    }
    return lg$0x + 0x1;
}
function gkiv0(ws2ar, pz619y, qylg91, s32r) {
    var v0kx$ = s32r[qylg91];
    return null == v0kx$ && (v0kx$ = ws2ar['lastIndexOf']('</' + qylg91 + '>'), pz619y > v0kx$ && (v0kx$ = ws2ar['lastIndexOf']('</' + qylg91)), s32r[qylg91] = v0kx$), pz619y > v0kx$;
}
function grsf_83(ar2mw7, z19ypl) {
    for (var lqy1 in ar2mw7) z19ypl[lqy1] = ar2mw7[lqy1];
}
function ggq9l(ly19qz, e_8d, kcio, s2wr8) {
    var kn = ly19qz['charAt'](e_8d + 0x2);
    switch (kn) {
        case '-':
            if ('-' === ly19qz['charAt'](e_8d + 0x3)) {
                var ncvoj = ly19qz['indexOf']('-->', e_8d + 0x4);
                return ncvoj > e_8d ? (kcio['comment'](ly19qz, e_8d + 0x4, ncvoj - e_8d - 0x4), ncvoj + 0x3) : (s2wr8['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == ly19qz['substr'](e_8d + 0x3, 0x6)) {
                var ncvoj = ly19qz['indexOf'](']]>', e_8d + 0x9);
                return kcio['startCDATA'](), kcio['characters'](ly19qz, e_8d + 0x9, ncvoj - e_8d - 0x9), kcio['endCDATA'](), ncvoj + 0x3;
            }
            var fs8_3h = guhd54e(ly19qz, e_8d),
                ixv$0 = fs8_3h['length'];
            if (ixv$0 > 0x1 && /!doctype/i['test'](fs8_3h[0x0][0x0])) {
                var $g9yl = fs8_3h[0x1][0x0],
                    rfs3 = ixv$0 > 0x3 && /^public$/i['test'](fs8_3h[0x2][0x0]) && fs8_3h[0x3][0x0],
                    gl$q0x = ixv$0 > 0x4 && fs8_3h[0x4][0x0],
                    hsfe_ = fs8_3h[ixv$0 - 0x1];
                return kcio['startDTD']($g9yl, rfs3 && rfs3['replace'](/^(['"])(.*?)\1$/, '$2'), gl$q0x && gl$q0x['replace'](/^(['"])(.*?)\1$/, '$2')), kcio['endDTD'](), hsfe_['index'] + hsfe_[0x0]['length'];
            }
    }
    return -0x1;
}
function gv0niko(zt619p, edfh4u, $0kgx) {
    var deh5 = zt619p['indexOf']('?>', edfh4u);
    if (deh5) {
        var lgqx = zt619p['substring'](edfh4u, deh5)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (lgqx) {
            {
                lgqx[0x0]['length'];
            }
            return $0kgx['processingInstruction'](lgqx[0x1], lgqx[0x2]), deh5 + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function gglyq91() {}
function gcvokn(jiovcn, r3) {
    return jiovcn['__proto__'] = r3, jiovcn;
}
function guhd54e(v$kg0x, ql9g1y) {
    var w7ra23,
        uhd4e5 = [],
        sw8r = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (sw8r['lastIndex'] = ql9g1y, sw8r['exec'](v$kg0x); w7ra23 = sw8r['exec'](v$kg0x);) if (uhd4e5['push'](w7ra23), w7ra23[0x1]) return uhd4e5;
}
var gly19gq = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    g$xk0q = new RegExp('[\\-\\.0-9' + gly19gq['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    gocjiv = new RegExp('^' + gly19gq['source'] + g$xk0q['source'] + '*(?::' + gly19gq['source'] + g$xk0q['source'] + '*)?$'),
    gtpm67z = 0x0,
    gt76wam = 0x1,
    gx0ovik = 0x2,
    gfd4uh = 0x3,
    gkoxv0i = 0x4,
    g_4efhd = 0x5,
    gs_832 = 0x6,
    gsf8he = 0x7;
gt9z['prototype'] = {
    'parse': function (k0viox, x0kv$g, _fs38) {
        var zm1t6p = this['domBuilder'];
        zm1t6p['startDocument'](), grsf_83(x0kv$g, x0kv$g = {}), gudfe4h(k0viox, x0kv$g, _fs38, zm1t6p, this['errorHandler']), zm1t6p['endDocument']();
    }
}, gglyq91['prototype'] = {
    'setTagName': function (gx0kv) {
        if (!gocjiv['test'](gx0kv)) throw new Error('invalid tagName:' + gx0kv);
        this['tagName'] = gx0kv;
    },
    'add': function (xg0$vk, iconk, ivkc) {
        if (!gocjiv['test'](xg0$vk)) throw new Error('invalid attribute:' + xg0$vk);
        this[this['length']++] = {
            'qName': xg0$vk,
            'value': iconk,
            'offset': ivkc
        };
    },
    'length': 0x0,
    'getLocalName': function (yl1pz9) {
        return this[yl1pz9]['localName'];
    },
    'getLocator': function (fhe4d_) {
        return this[fhe4d_]['locator'];
    },
    'getQName': function (vxio0k) {
        return this[vxio0k]['qName'];
    },
    'getURI': function (hde54) {
        return this[hde54]['uri'];
    },
    'getValue': function (s8_rf) {
        return this[s8_rf]['value'];
    }
}, gcvokn({}, gcvokn['prototype']) instanceof gcvokn || (gcvokn = function (tp691z, g$lx) {
    function jcnvi() {}
    jcnvi['prototype'] = g$lx, jcnvi = new jcnvi();
    for (g$lx in tp691z) jcnvi[g$lx] = tp691z[g$lx];
    return jcnvi;
}), exports['XMLReader'] = gt9z;