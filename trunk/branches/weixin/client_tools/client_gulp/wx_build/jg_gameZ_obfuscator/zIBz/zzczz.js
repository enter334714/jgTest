var B = wx.$z;
function zu_582r() {}
function zr28b(vgfp64, b52_r8, imq37, px19s, gh1) {
    function oetazd(ezdtao) {
        if (ezdtao > 0xffff) {
            ezdtao -= 0x10000;
            var kb8doy = 0xd800 + (ezdtao >> 0xa),
                w_5u2r = 0xdc00 + (0x3ff & ezdtao);
            return String['fromCharCode'](kb8doy, w_5u2r);
        }
        return String['fromCharCode'](ezdtao);
    }
    function p91xh(w5u_r2) {
        var okdb8y = w5u_r2['slice'](0x1, -0x1);
        return okdb8y in imq37 ? imq37[okdb8y] : '#' === okdb8y['charAt'](0x0) ? oetazd(parseInt(okdb8y['substr'](0x1)['replace']('x', '0x'))) : (gh1['error']('entity not found:' + w5u_r2), w5u_r2);
    }
    function lminv(k_85r) {
        if (k_85r > boydk) {
            var px1hs = vgfp64['substring'](boydk, k_85r)['replace'](/&#?\w+;/g, p91xh);
            pgf6v4 && _u852r(boydk), px19s['characters'](px1hs, 0x0, k_85r - boydk), boydk = k_85r;
        }
    }
    function _u852r(spx91, m7qni3) {
        for (; spx91 >= kytdo && (m7qni3 = p19xh['exec'](vgfp64));) _52b8r = m7qni3['index'], kytdo = _52b8r + m7qni3[0x0]['length'], pgf6v4['lineNumber']++;
        pgf6v4['columnNumber'] = spx91 - _52b8r + 0x1;
    }
    for (var _52b8r = 0x0, kytdo = 0x0, p19xh = /.*(?:\r\n?|\n)|.*$/g, pgf6v4 = px19s['locator'], okb8 = [{ 'currentNSMap': b52_r8 }], h16p4 = {}, boydk = 0x0;;) {
        try {
            var vnifl = vgfp64['indexOf']('<', boydk);
            if (0x0 > vnifl) {
                if (!vgfp64['substr'](boydk)['match'](/^\s*$/)) {
                    var lm37n = px19s['doc'],
                        in3lm7 = lm37n['createTextNode'](vgfp64['substr'](boydk));
                    lm37n['appendChild'](in3lm7), px19s['currentElement'] = in3lm7;
                }
                return;
            }
            switch (vnifl > boydk && lminv(vnifl), vgfp64['charAt'](vnifl + 0x1)) {
                case '/':
                    var tzad = vgfp64['indexOf']('>', vnifl + 0x3),
                        v4flg6 = vgfp64['substring'](vnifl + 0x2, tzad),
                        rk5_b8 = okb8['pop']();
                    0x0 > tzad ? (v4flg6 = vgfp64['substring'](vnifl + 0x2)['replace'](/[\s<].*/, ''), gh1['error']('end tag name: ' + v4flg6 + ' is not complete:' + rk5_b8['tagName']), tzad = vnifl + 0x1 + v4flg6['length']) : v4flg6['match'](/\s</) && (v4flg6 = v4flg6['replace'](/[\s<].*/, ''), gh1['error']('end tag name: ' + v4flg6 + ' maybe not complete'), tzad = vnifl + 0x1 + v4flg6['length']);
                    var nmli3 = rk5_b8['localNSMap'],
                        xtae = rk5_b8['tagName'] == v4flg6,
                        wur2 = xtae || rk5_b8['tagName'] && rk5_b8['tagName']['toLowerCase']() == v4flg6['toLowerCase']();
                    if (wur2) {
                        if (px19s['endElement'](rk5_b8['uri'], rk5_b8['localName'], v4flg6), nmli3) {
                            for (var _2ur58 in nmli3) px19s['endPrefixMapping'](_2ur58);
                        }
                        xtae || gh1['fatalError']('end tag name: ' + v4flg6 + ' is not match the current start tagName:' + rk5_b8['tagName']);
                    } else okb8['push'](rk5_b8);
                    tzad++;
                    break;
                case '?':
                    pgf6v4 && _u852r(vnifl), tzad = zfp6g4v(vgfp64, vnifl, px19s);
                    break;
                case '!':
                    pgf6v4 && _u852r(vnifl), tzad = zf4gv6l(vgfp64, vnifl, px19s, gh1);
                    break;
                default:
                    pgf6v4 && _u852r(vnifl);
                    var nim3q7 = new zgp91h4(),
                        eztaxs = okb8[okb8['length'] - 0x1]['currentNSMap'],
                        tzad = zeatod(vgfp64, vnifl, nim3q7, eztaxs, p91xh, gh1),
                        vp46 = nim3q7['length'];
                    if (!nim3q7['closed'] && za9zse(vgfp64, tzad, nim3q7['tagName'], h16p4) && (nim3q7['closed'] = !0x0, imq37['nbsp'] || gh1['warning']('unclosed xml attribute')), pgf6v4 && vp46) {
                        for (var $q3im7 = zn7mli3(pgf6v4, {}), g149hp = 0x0; vp46 > g149hp; g149hp++) {
                            var m3nil7 = nim3q7[g149hp];
                            _u852r(m3nil7['offset']), m3nil7['locator'] = zn7mli3(pgf6v4, {});
                        }
                        px19s['locator'] = $q3im7, zsex9za(nim3q7, px19s, eztaxs) && okb8['push'](nim3q7), px19s['locator'] = pgf6v4;
                    } else zsex9za(nim3q7, px19s, eztaxs) && okb8['push'](nim3q7);
                    'http://www.w3.org/1999/xhtml' !== nim3q7['uri'] || nim3q7['closed'] ? tzad++ : tzad = zea9s1(vgfp64, tzad, nim3q7['tagName'], p91xh, px19s);
            }
        } catch (_205w) {
            gh1['error']('element parse error: ' + _205w), tzad = -0x1;
        }
        tzad > boydk ? boydk = tzad : lminv(Math['max'](vnifl, boydk) + 0x1);
    }
}
function zn7mli3(yztkdo, x91es) {
    return x91es['lineNumber'] = yztkdo['lineNumber'], x91es['columnNumber'] = yztkdo['columnNumber'], x91es;
}
function zeatod(inm, yrkbd8, vfn4, u528, r_kby, _2w50) {
    for (var vi7fl, soze, rkb5_8 = ++yrkbd8, ky8r_ = z$3;;) {
        var ij3 = inm['charAt'](rkb5_8);
        switch (ij3) {
            case '=':
                if (ky8r_ === ztsoea) vi7fl = inm['slice'](yrkbd8, rkb5_8), ky8r_ = zdotky;else {
                    if (ky8r_ !== z$3m7qi) throw new Error('attribute equal must after attrName');
                    ky8r_ = zdotky;
                }
                break;
            case '\x27':
            case '\x22':
                if (ky8r_ === zdotky || ky8r_ === ztsoea) {
                    if (ky8r_ === ztsoea && (_2w50['warning']('attribute value must after "="'), vi7fl = inm['slice'](yrkbd8, rkb5_8)), yrkbd8 = rkb5_8 + 0x1, rkb5_8 = inm['indexOf'](ij3, yrkbd8), !(rkb5_8 > 0x0)) throw new Error('attribute value no end \'' + ij3 + '\' match');
                    soze = inm['slice'](yrkbd8, rkb5_8)['replace'](/&#?\w+;/g, r_kby), vfn4['add'](vi7fl, soze, yrkbd8 - 0x1), ky8r_ = zn76f;
                } else {
                    if (ky8r_ != zax19e) throw new Error('attribute value must after "="');
                    soze = inm['slice'](yrkbd8, rkb5_8)['replace'](/&#?\w+;/g, r_kby), vfn4['add'](vi7fl, soze, yrkbd8), _2w50['warning']('attribute "' + vi7fl + '" missed start quot(' + ij3 + ')!!'), yrkbd8 = rkb5_8 + 0x1, ky8r_ = zn76f;
                }
                break;
            case '/':
                switch (ky8r_) {
                    case z$3:
                        vfn4['setTagName'](inm['slice'](yrkbd8, rkb5_8));
                    case zn76f:
                    case zzexsat:
                    case zu25r_w:
                        ky8r_ = zu25r_w, vfn4['closed'] = !0x0;
                    case zax19e:
                    case ztsoea:
                    case z$3m7qi:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return _2w50['error']('unexpected end of input'), ky8r_ == z$3 && vfn4['setTagName'](inm['slice'](yrkbd8, rkb5_8)), rkb5_8;
            case '>':
                switch (ky8r_) {
                    case z$3:
                        vfn4['setTagName'](inm['slice'](yrkbd8, rkb5_8));
                    case zn76f:
                    case zzexsat:
                    case zu25r_w:
                        break;
                    case zax19e:
                    case ztsoea:
                        soze = inm['slice'](yrkbd8, rkb5_8), '/' === soze['slice'](-0x1) && (vfn4['closed'] = !0x0, soze = soze['slice'](0x0, -0x1));
                    case z$3m7qi:
                        ky8r_ === z$3m7qi && (soze = vi7fl), ky8r_ == zax19e ? (_2w50['warning']('attribute "' + soze + '" missed quot(")!!'), vfn4['add'](vi7fl, soze['replace'](/&#?\w+;/g, r_kby), yrkbd8)) : ('http://www.w3.org/1999/xhtml' === u528[''] && soze['match'](/^(?:disabled|checked|selected)$/i) || _2w50['warning']('attribute "' + soze + '" missed value!! "' + soze + '" instead!!'), vfn4['add'](soze, soze, yrkbd8));
                        break;
                    case zdotky:
                        throw new Error('attribute value missed!!');
                }
                return rkb5_8;
            case '\u0080':
                ij3 = '\x20';
            default:
                if ('\x20' >= ij3) switch (ky8r_) {
                    case z$3:
                        vfn4['setTagName'](inm['slice'](yrkbd8, rkb5_8)), ky8r_ = zzexsat;
                        break;
                    case ztsoea:
                        vi7fl = inm['slice'](yrkbd8, rkb5_8), ky8r_ = z$3m7qi;
                        break;
                    case zax19e:
                        var soze = inm['slice'](yrkbd8, rkb5_8)['replace'](/&#?\w+;/g, r_kby);
                        _2w50['warning']('attribute "' + soze + '" missed quot(")!!'), vfn4['add'](vi7fl, soze, yrkbd8);
                    case zn76f:
                        ky8r_ = zzexsat;
                } else switch (ky8r_) {
                    case z$3m7qi:
                        {
                            vfn4['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === u528[''] && vi7fl['match'](/^(?:disabled|checked|selected)$/i) || _2w50['warning']('attribute "' + vi7fl + '" missed value!! "' + vi7fl + '" instead2!!'), vfn4['add'](vi7fl, vi7fl, yrkbd8), yrkbd8 = rkb5_8, ky8r_ = ztsoea;
                        break;
                    case zn76f:
                        _2w50['warning']('attribute space is required"' + vi7fl + '\x22!!');
                    case zzexsat:
                        ky8r_ = ztsoea, yrkbd8 = rkb5_8;
                        break;
                    case zdotky:
                        ky8r_ = zax19e, yrkbd8 = rkb5_8;
                        break;
                    case zu25r_w:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        rkb5_8++;
    }
}
function zsex9za(dyokb8, _r5wu, teozad) {
    for (var b85k_ = dyokb8['tagName'], otyzdk = null, okdy = dyokb8['length']; okdy--;) {
        var teyzod = dyokb8[okdy],
            l4nfv = teyzod['qName'],
            vn6lf = teyzod['value'],
            v6gpf4 = l4nfv['indexOf'](':');
        if (v6gpf4 > 0x0) var i3$jqm = teyzod['prefix'] = l4nfv['slice'](0x0, v6gpf4),
            ztyod = l4nfv['slice'](v6gpf4 + 0x1),
            dbky8r = 'xmlns' === i3$jqm && ztyod;else ztyod = l4nfv, i3$jqm = null, dbky8r = 'xmlns' === l4nfv && '';
        teyzod['localName'] = ztyod, dbky8r !== !0x1 && (null == otyzdk && (otyzdk = {}, znvfl7i(teozad, teozad = {})), teozad[dbky8r] = otyzdk[dbky8r] = vn6lf, teyzod['uri'] = 'http://www.w3.org/2000/xmlns/', _r5wu['startPrefixMapping'](dbky8r, vn6lf));
    }
    for (var okdy = dyokb8['length']; okdy--;) {
        teyzod = dyokb8[okdy];
        var i3$jqm = teyzod['prefix'];
        i3$jqm && ('xml' === i3$jqm && (teyzod['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== i3$jqm && (teyzod['uri'] = teozad[i3$jqm || '']));
    }
    var v6gpf4 = b85k_['indexOf'](':');
    v6gpf4 > 0x0 ? (i3$jqm = dyokb8['prefix'] = b85k_['slice'](0x0, v6gpf4), ztyod = dyokb8['localName'] = b85k_['slice'](v6gpf4 + 0x1)) : (i3$jqm = null, ztyod = dyokb8['localName'] = b85k_);
    var r2u_58 = dyokb8['uri'] = teozad[i3$jqm || ''];
    if (_r5wu['startElement'](r2u_58, ztyod, b85k_, dyokb8), !dyokb8['closed']) return dyokb8['currentNSMap'] = teozad, dyokb8['localNSMap'] = otyzdk, !0x0;
    if (_r5wu['endElement'](r2u_58, ztyod, b85k_), otyzdk) {
        for (i3$jqm in otyzdk) _r5wu['endPrefixMapping'](i3$jqm);
    }
}
function zea9s1(i3nml7, s19ae, odzeat, v7fl, v6p4g) {
    if (/^(?:script|textarea)$/i['test'](odzeat)) {
        var oytze = i3nml7['indexOf']('</' + odzeat + '>', s19ae),
            doby8k = i3nml7['substring'](s19ae + 0x1, oytze);
        if (/[&<]/['test'](doby8k)) return (/^script$/i['test'](odzeat) ? (v6p4g['characters'](doby8k, 0x0, doby8k['length']), oytze) : (doby8k = doby8k['replace'](/&#?\w+;/g, v7fl), v6p4g['characters'](doby8k, 0x0, doby8k['length']), oytze)
        );
    }
    return s19ae + 0x1;
}
function za9zse(fn4v, w50u2_, aozed, i7nlvf) {
    var mji3 = i7nlvf[aozed];
    return null == mji3 && (mji3 = fn4v['lastIndexOf']('</' + aozed + '>'), w50u2_ > mji3 && (mji3 = fn4v['lastIndexOf']('</' + aozed)), i7nlvf[aozed] = mji3), w50u2_ > mji3;
}
function znvfl7i(esotaz, xezast) {
    for (var r_2u85 in esotaz) xezast[r_2u85] = esotaz[r_2u85];
}
function zf4gv6l(rwu25_, etsx, i7fv, eaot) {
    var im7l3 = rwu25_['charAt'](etsx + 0x2);
    switch (im7l3) {
        case '-':
            if ('-' === rwu25_['charAt'](etsx + 0x3)) {
                var n7flv6 = rwu25_['indexOf']('-->', etsx + 0x4);
                return n7flv6 > etsx ? (i7fv['comment'](rwu25_, etsx + 0x4, n7flv6 - etsx - 0x4), n7flv6 + 0x3) : (eaot['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == rwu25_['substr'](etsx + 0x3, 0x6)) {
                var n7flv6 = rwu25_['indexOf'](']]>', etsx + 0x9);
                return i7fv['startCDATA'](), i7fv['characters'](rwu25_, etsx + 0x9, n7flv6 - etsx - 0x9), i7fv['endCDATA'](), n7flv6 + 0x3;
            }
            var in3l7m = zq3m7$(rwu25_, etsx),
                _50w2u = in3l7m['length'];
            if (_50w2u > 0x1 && /!doctype/i['test'](in3l7m[0x0][0x0])) {
                var tbyodk = in3l7m[0x1][0x0],
                    tdeaz = _50w2u > 0x3 && /^public$/i['test'](in3l7m[0x2][0x0]) && in3l7m[0x3][0x0],
                    yzk = _50w2u > 0x4 && in3l7m[0x4][0x0],
                    i7q3n = in3l7m[_50w2u - 0x1];
                return i7fv['startDTD'](tbyodk, tdeaz && tdeaz['replace'](/^(['"])(.*?)\1$/, '$2'), yzk && yzk['replace'](/^(['"])(.*?)\1$/, '$2')), i7fv['endDTD'](), i7q3n['index'] + i7q3n[0x0]['length'];
            }
    }
    return -0x1;
}
function zfp6g4v(gphf6, etd, g4ph1) {
    var n7miv = gphf6['indexOf']('?>', etd);
    if (n7miv) {
        var sxetz = gphf6['substring'](etd, n7miv)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (sxetz) {
            {
                sxetz[0x0]['length'];
            }
            return g4ph1['processingInstruction'](sxetz[0x1], sxetz[0x2]), n7miv + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function zgp91h4() {}
function zryk_b(by_rk, kdoytb) {
    return by_rk['__proto__'] = kdoytb, by_rk;
}
function zq3m7$(esza9, h64pg1) {
    var hp91xg,
        $qm3ji = [],
        hg61p4 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (hg61p4['lastIndex'] = h64pg1, hg61p4['exec'](esza9); hp91xg = hg61p4['exec'](esza9);) if ($qm3ji['push'](hp91xg), hp91xg[0x1]) return $qm3ji;
}
var ztxesaz = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    zivnlm = new RegExp('[\\-\\.0-9' + ztxesaz['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    ztzedoy = new RegExp('^' + ztxesaz['source'] + zivnlm['source'] + '*(?::' + ztxesaz['source'] + zivnlm['source'] + '*)?$'),
    z$3 = 0x0,
    ztsoea = 0x1,
    z$3m7qi = 0x2,
    zdotky = 0x3,
    zax19e = 0x4,
    zn76f = 0x5,
    zzexsat = 0x6,
    zu25r_w = 0x7;
zu_582r['prototype'] = {
    'parse': function (azsx9e, _u2w5, zytode) {
        var dzeyto = this['domBuilder'];
        dzeyto['startDocument'](), znvfl7i(_u2w5, _u2w5 = {}), zr28b(azsx9e, _u2w5, zytode, dzeyto, this['errorHandler']), dzeyto['endDocument']();
    }
}, zgp91h4['prototype'] = {
    'setTagName': function (u58_r) {
        if (!ztzedoy['test'](u58_r)) throw new Error('invalid tagName:' + u58_r);
        this['tagName'] = u58_r;
    },
    'add': function (r8bdky, fp64vg, kb_y8) {
        if (!ztzedoy['test'](r8bdky)) throw new Error('invalid attribute:' + r8bdky);
        this[this['length']++] = {
            'qName': r8bdky,
            'value': fp64vg,
            'offset': kb_y8
        };
    },
    'length': 0x0,
    'getLocalName': function (exsa9z) {
        return this[exsa9z]['localName'];
    },
    'getLocator': function (b58kr_) {
        return this[b58kr_]['locator'];
    },
    'getQName': function (hsax19) {
        return this[hsax19]['qName'];
    },
    'getURI': function (_kb5r8) {
        return this[_kb5r8]['uri'];
    },
    'getValue': function (qim$3j) {
        return this[qim$3j]['value'];
    }
}, zryk_b({}, zryk_b['prototype']) instanceof zryk_b || (zryk_b = function (b5r, s19a) {
    function glvf() {}
    glvf['prototype'] = s19a, glvf = new glvf();
    for (s19a in b5r) glvf[s19a] = b5r[s19a];
    return glvf;
}), exports['XMLReader'] = zu_582r;