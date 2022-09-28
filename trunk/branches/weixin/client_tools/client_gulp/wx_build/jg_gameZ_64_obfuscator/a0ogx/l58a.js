var f = wx.$B;
function Sbfzn() {}
function Sk4he(mohxpg, mxgwio, bzrdf_, y20q8v, pekht4) {
    function p4ket(a53s6) {
        if (a53s6 > 0xffff) {
            a53s6 -= 0x10000;
            var au86qs = 0xd800 + (a53s6 >> 0xa),
                xhgiom = 0xdc00 + (0x3ff & a53s6);
            return String['fromCharCode'](au86qs, xhgiom);
        }
        return String['fromCharCode'](a53s6);
    }
    function omgxp(wilgx) {
        var k9pt4 = wilgx['slice'](0x1, -0x1);
        return k9pt4 in bzrdf_ ? bzrdf_[k9pt4] : '#' === k9pt4['charAt'](0x0) ? p4ket(parseInt(k9pt4['substr'](0x1)['replace']('x', '0x'))) : (pekht4['error']('entity not found:' + wilgx), wilgx);
    }
    function r_bdfz($znfr) {
        if ($znfr > fnr$_) {
            var d_rzfb = mohxpg['substring'](fnr$_, $znfr)['replace'](/&#?\w+;/g, omgxp);
            nr && xgpo(fnr$_), y20q8v['characters'](d_rzfb, 0x0, $znfr - fnr$_), fnr$_ = $znfr;
        }
    }
    function xgpo(ua5613, z_rf$) {
        for (; ua5613 >= togm && (z_rf$ = mhtkpe['exec'](mohxpg));) k4epth = z_rf$['index'], togm = k4epth + z_rf$[0x0]['length'], nr['lineNumber']++;
        nr['columnNumber'] = ua5613 - k4epth + 0x1;
    }
    for (var k4epth = 0x0, togm = 0x0, mhtkpe = /.*(?:\r\n?|\n)|.*$/g, nr = y20q8v['locator'], j9n7$4 = [{ 'currentNSMap': mxgwio }], ilx1 = {}, fnr$_ = 0x0;;) {
        try {
            var u86sa5 = mohxpg['indexOf']('<', fnr$_);
            if (0x0 > u86sa5) {
                if (!mohxpg['substr'](fnr$_)['match'](/^\s*$/)) {
                    var w6l31 = y20q8v['doc'],
                        pmeh = w6l31['createTextNode'](mohxpg['substr'](fnr$_));
                    w6l31['appendChild'](pmeh), y20q8v['currentElement'] = pmeh;
                }
                return;
            }
            switch (u86sa5 > fnr$_ && r_bdfz(u86sa5), mohxpg['charAt'](u86sa5 + 0x1)) {
                case '/':
                    var tpomgh = mohxpg['indexOf']('>', u86sa5 + 0x3),
                        rnb_fz = mohxpg['substring'](u86sa5 + 0x2, tpomgh),
                        e$j = j9n7$4['pop']();
                    0x0 > tpomgh ? (rnb_fz = mohxpg['substring'](u86sa5 + 0x2)['replace'](/[\s<].*/, ''), pekht4['error']('end tag name: ' + rnb_fz + ' is not complete:' + e$j['tagName']), tpomgh = u86sa5 + 0x1 + rnb_fz['length']) : rnb_fz['match'](/\s</) && (rnb_fz = rnb_fz['replace'](/[\s<].*/, ''), pekht4['error']('end tag name: ' + rnb_fz + ' maybe not complete'), tpomgh = u86sa5 + 0x1 + rnb_fz['length']);
                    var $_nrzf = e$j['localNSMap'],
                        sq86 = e$j['tagName'] == rnb_fz,
                        xgmoh = sq86 || e$j['tagName'] && e$j['tagName']['toLowerCase']() == rnb_fz['toLowerCase']();
                    if (xgmoh) {
                        if (y20q8v['endElement'](e$j['uri'], e$j['localName'], rnb_fz), $_nrzf) {
                            for (var nzr7 in $_nrzf) y20q8v['endPrefixMapping'](nzr7);
                        }
                        sq86 || pekht4['fatalError']('end tag name: ' + rnb_fz + ' is not match the current start tagName:' + e$j['tagName']);
                    } else j9n7$4['push'](e$j);
                    tpomgh++;
                    break;
                case '?':
                    nr && xgpo(u86sa5), tpomgh = Sfbz_(mohxpg, u86sa5, y20q8v);
                    break;
                case '!':
                    nr && xgpo(u86sa5), tpomgh = Stp9ke4(mohxpg, u86sa5, y20q8v, pekht4);
                    break;
                default:
                    nr && xgpo(u86sa5);
                    var oilgw = new Se94k7j(),
                        ua68s5 = j9n7$4[j9n7$4['length'] - 0x1]['currentNSMap'],
                        tpomgh = Swgomi(mohxpg, u86sa5, oilgw, ua68s5, omgxp, pekht4),
                        ep4hk = oilgw['length'];
                    if (!oilgw['closed'] && Set9p4k(mohxpg, tpomgh, oilgw['tagName'], ilx1) && (oilgw['closed'] = !0x0, bzrdf_['nbsp'] || pekht4['warning']('unclosed xml attribute')), nr && ep4hk) {
                        for (var t9e4kj = Sj79$rn(nr, {}), $nf_z = 0x0; ep4hk > $nf_z; $nf_z++) {
                            var mhepk = oilgw[$nf_z];
                            xgpo(mhepk['offset']), mhepk['locator'] = Sj79$rn(nr, {});
                        }
                        y20q8v['locator'] = t9e4kj, Swgxmio(oilgw, y20q8v, ua68s5) && j9n7$4['push'](oilgw), y20q8v['locator'] = nr;
                    } else Swgxmio(oilgw, y20q8v, ua68s5) && j9n7$4['push'](oilgw);
                    'http://www.w3.org/1999/xhtml' !== oilgw['uri'] || oilgw['closed'] ? tpomgh++ : tpomgh = Ste4jk(mohxpg, tpomgh, oilgw['tagName'], omgxp, y20q8v);
            }
        } catch (as6u58) {
            pekht4['error']('element parse error: ' + as6u58), tpomgh = -0x1;
        }
        tpomgh > fnr$_ ? fnr$_ = tpomgh : r_bdfz(Math['max'](u86sa5, fnr$_) + 0x1);
    }
}
function Sj79$rn(h4pk, jke79) {
    return jke79['lineNumber'] = h4pk['lineNumber'], jke79['columnNumber'] = h4pk['columnNumber'], jke79;
}
function Swgomi(wi1ox, $7rn_j, nbf, jn$974, e97$4j, auqs8) {
    for (var mgioxw, avqs2, nr_zf$ = ++$7rn_j, e4j7k = Sxhom;;) {
        var rzfn_b = wi1ox['charAt'](nr_zf$);
        switch (rzfn_b) {
            case '=':
                if (e4j7k === Sep) mgioxw = wi1ox['slice']($7rn_j, nr_zf$), e4j7k = Skt4ej;else {
                    if (e4j7k !== Smogix) throw new Error('attribute equal must after attrName');
                    e4j7k = Skt4ej;
                }
                break;
            case '\x27':
            case '\x22':
                if (e4j7k === Skt4ej || e4j7k === Sep) {
                    if (e4j7k === Sep && (auqs8['warning']('attribute value must after "="'), mgioxw = wi1ox['slice']($7rn_j, nr_zf$)), $7rn_j = nr_zf$ + 0x1, nr_zf$ = wi1ox['indexOf'](rzfn_b, $7rn_j), !(nr_zf$ > 0x0)) throw new Error('attribute value no end \'' + rzfn_b + '\' match');
                    avqs2 = wi1ox['slice']($7rn_j, nr_zf$)['replace'](/&#?\w+;/g, e97$4j), nbf['add'](mgioxw, avqs2, $7rn_j - 0x1), e4j7k = Stmkghp;
                } else {
                    if (e4j7k != Skpteh4) throw new Error('attribute value must after "="');
                    avqs2 = wi1ox['slice']($7rn_j, nr_zf$)['replace'](/&#?\w+;/g, e97$4j), nbf['add'](mgioxw, avqs2, $7rn_j), auqs8['warning']('attribute "' + mgioxw + '" missed start quot(' + rzfn_b + ')!!'), $7rn_j = nr_zf$ + 0x1, e4j7k = Stmkghp;
                }
                break;
            case '/':
                switch (e4j7k) {
                    case Sxhom:
                        nbf['setTagName'](wi1ox['slice']($7rn_j, nr_zf$));
                    case Stmkghp:
                    case Sepkt94:
                    case Sgwoxl:
                        e4j7k = Sgwoxl, nbf['closed'] = !0x0;
                    case Skpteh4:
                    case Sep:
                    case Smogix:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return auqs8['error']('unexpected end of input'), e4j7k == Sxhom && nbf['setTagName'](wi1ox['slice']($7rn_j, nr_zf$)), nr_zf$;
            case '>':
                switch (e4j7k) {
                    case Sxhom:
                        nbf['setTagName'](wi1ox['slice']($7rn_j, nr_zf$));
                    case Stmkghp:
                    case Sepkt94:
                    case Sgwoxl:
                        break;
                    case Skpteh4:
                    case Sep:
                        avqs2 = wi1ox['slice']($7rn_j, nr_zf$), '/' === avqs2['slice'](-0x1) && (nbf['closed'] = !0x0, avqs2 = avqs2['slice'](0x0, -0x1));
                    case Smogix:
                        e4j7k === Smogix && (avqs2 = mgioxw), e4j7k == Skpteh4 ? (auqs8['warning']('attribute "' + avqs2 + '" missed quot(")!!'), nbf['add'](mgioxw, avqs2['replace'](/&#?\w+;/g, e97$4j), $7rn_j)) : ('http://www.w3.org/1999/xhtml' === jn$974[''] && avqs2['match'](/^(?:disabled|checked|selected)$/i) || auqs8['warning']('attribute "' + avqs2 + '" missed value!! "' + avqs2 + '" instead!!'), nbf['add'](avqs2, avqs2, $7rn_j));
                        break;
                    case Skt4ej:
                        throw new Error('attribute value missed!!');
                }
                return nr_zf$;
            case '\u0080':
                rzfn_b = '\x20';
            default:
                if ('\x20' >= rzfn_b) switch (e4j7k) {
                    case Sxhom:
                        nbf['setTagName'](wi1ox['slice']($7rn_j, nr_zf$)), e4j7k = Sepkt94;
                        break;
                    case Sep:
                        mgioxw = wi1ox['slice']($7rn_j, nr_zf$), e4j7k = Smogix;
                        break;
                    case Skpteh4:
                        var avqs2 = wi1ox['slice']($7rn_j, nr_zf$)['replace'](/&#?\w+;/g, e97$4j);
                        auqs8['warning']('attribute "' + avqs2 + '" missed quot(")!!'), nbf['add'](mgioxw, avqs2, $7rn_j);
                    case Stmkghp:
                        e4j7k = Sepkt94;
                } else switch (e4j7k) {
                    case Smogix:
                        {
                            nbf['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === jn$974[''] && mgioxw['match'](/^(?:disabled|checked|selected)$/i) || auqs8['warning']('attribute "' + mgioxw + '" missed value!! "' + mgioxw + '" instead2!!'), nbf['add'](mgioxw, mgioxw, $7rn_j), $7rn_j = nr_zf$, e4j7k = Sep;
                        break;
                    case Stmkghp:
                        auqs8['warning']('attribute space is required"' + mgioxw + '\x22!!');
                    case Sepkt94:
                        e4j7k = Sep, $7rn_j = nr_zf$;
                        break;
                    case Skt4ej:
                        e4j7k = Skpteh4, $7rn_j = nr_zf$;
                        break;
                    case Sgwoxl:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        nr_zf$++;
    }
}
function Swgxmio(u63l5, pgxmho, lw53i1) {
    for (var bf_rn = u63l5['tagName'], i531wl = null, olwgi = u63l5['length']; olwgi--;) {
        var brn_zf = u63l5[olwgi],
            ogh = brn_zf['qName'],
            $7z = brn_zf['value'],
            fbrn_z = ogh['indexOf'](':');
        if (fbrn_z > 0x0) var tk9je = brn_zf['prefix'] = ogh['slice'](0x0, fbrn_z),
            y820q = ogh['slice'](fbrn_z + 0x1),
            as8u65 = 'xmlns' === tk9je && y820q;else y820q = ogh, tk9je = null, as8u65 = 'xmlns' === ogh && '';
        brn_zf['localName'] = y820q, as8u65 !== !0x1 && (null == i531wl && (i531wl = {}, S$rz_nf(lw53i1, lw53i1 = {})), lw53i1[as8u65] = i531wl[as8u65] = $7z, brn_zf['uri'] = 'http://www.w3.org/2000/xmlns/', pgxmho['startPrefixMapping'](as8u65, $7z));
    }
    for (var olwgi = u63l5['length']; olwgi--;) {
        brn_zf = u63l5[olwgi];
        var tk9je = brn_zf['prefix'];
        tk9je && ('xml' === tk9je && (brn_zf['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== tk9je && (brn_zf['uri'] = lw53i1[tk9je || '']));
    }
    var fbrn_z = bf_rn['indexOf'](':');
    fbrn_z > 0x0 ? (tk9je = u63l5['prefix'] = bf_rn['slice'](0x0, fbrn_z), y820q = u63l5['localName'] = bf_rn['slice'](fbrn_z + 0x1)) : (tk9je = null, y820q = u63l5['localName'] = bf_rn);
    var i53l1w = u63l5['uri'] = lw53i1[tk9je || ''];
    if (pgxmho['startElement'](i53l1w, y820q, bf_rn, u63l5), !u63l5['closed']) return u63l5['currentNSMap'] = lw53i1, u63l5['localNSMap'] = i531wl, !0x0;
    if (pgxmho['endElement'](i53l1w, y820q, bf_rn), i531wl) {
        for (tk9je in i531wl) pgxmho['endPrefixMapping'](tk9je);
    }
}
function Ste4jk(l513iw, $r7j_n, s3a56, aqu6, wix1ol) {
    if (/^(?:script|textarea)$/i['test'](s3a56)) {
        var xoimgw = l513iw['indexOf']('</' + s3a56 + '>', $r7j_n),
            $n4j = l513iw['substring']($r7j_n + 0x1, xoimgw);
        if (/[&<]/['test']($n4j)) return (/^script$/i['test'](s3a56) ? (wix1ol['characters']($n4j, 0x0, $n4j['length']), xoimgw) : ($n4j = $n4j['replace'](/&#?\w+;/g, aqu6), wix1ol['characters']($n4j, 0x0, $n4j['length']), xoimgw)
        );
    }
    return $r7j_n + 0x1;
}
function Set9p4k(ej79$, tke4j, owilgx, $7ej) {
    var rj9n7$ = $7ej[owilgx];
    return null == rj9n7$ && (rj9n7$ = ej79$['lastIndexOf']('</' + owilgx + '>'), tke4j > rj9n7$ && (rj9n7$ = ej79$['lastIndexOf']('</' + owilgx)), $7ej[owilgx] = rj9n7$), tke4j > rj9n7$;
}
function S$rz_nf(wlx31i, lxi1wo) {
    for (var xhgomi in wlx31i) lxi1wo[xhgomi] = wlx31i[xhgomi];
}
function Stp9ke4(xolgiw, ul1, wgoim, bfdr) {
    var su86a5 = xolgiw['charAt'](ul1 + 0x2);
    switch (su86a5) {
        case '-':
            if ('-' === xolgiw['charAt'](ul1 + 0x3)) {
                var l3u156 = xolgiw['indexOf']('-->', ul1 + 0x4);
                return l3u156 > ul1 ? (wgoim['comment'](xolgiw, ul1 + 0x4, l3u156 - ul1 - 0x4), l3u156 + 0x3) : (bfdr['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == xolgiw['substr'](ul1 + 0x3, 0x6)) {
                var l3u156 = xolgiw['indexOf'](']]>', ul1 + 0x9);
                return wgoim['startCDATA'](), wgoim['characters'](xolgiw, ul1 + 0x9, l3u156 - ul1 - 0x9), wgoim['endCDATA'](), l3u156 + 0x3;
            }
            var fbdr = Sxolwgi(xolgiw, ul1),
                thp = fbdr['length'];
            if (thp > 0x1 && /!doctype/i['test'](fbdr[0x0][0x0])) {
                var ix31lw = fbdr[0x1][0x0],
                    ogmhxi = thp > 0x3 && /^public$/i['test'](fbdr[0x2][0x0]) && fbdr[0x3][0x0],
                    e9j4 = thp > 0x4 && fbdr[0x4][0x0],
                    v20q8y = fbdr[thp - 0x1];
                return wgoim['startDTD'](ix31lw, ogmhxi && ogmhxi['replace'](/^(['"])(.*?)\1$/, '$2'), e9j4 && e9j4['replace'](/^(['"])(.*?)\1$/, '$2')), wgoim['endDTD'](), v20q8y['index'] + v20q8y[0x0]['length'];
            }
    }
    return -0x1;
}
function Sfbz_(e49j7$, hgmox, tekp4) {
    var l5i1w = e49j7$['indexOf']('?>', hgmox);
    if (l5i1w) {
        var dfrb_z = e49j7$['substring'](hgmox, l5i1w)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (dfrb_z) {
            {
                dfrb_z[0x0]['length'];
            }
            return tekp4['processingInstruction'](dfrb_z[0x1], dfrb_z[0x2]), l5i1w + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function Se94k7j() {}
function S$n_rz(u6a3s5, mthep) {
    return u6a3s5['__proto__'] = mthep, u6a3s5;
}
function Sxolwgi(jn7r, brzdf) {
    var u8a6s5,
        n_j7 = [],
        pxoghm = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (pxoghm['lastIndex'] = brzdf, pxoghm['exec'](jn7r); u8a6s5 = pxoghm['exec'](jn7r);) if (n_j7['push'](u8a6s5), u8a6s5[0x1]) return n_j7;
}
var Step9k4 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    Svsa8 = new RegExp('[\\-\\.0-9' + Step9k4['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    St4epkh = new RegExp('^' + Step9k4['source'] + Svsa8['source'] + '*(?::' + Step9k4['source'] + Svsa8['source'] + '*)?$'),
    Sxhom = 0x0,
    Sep = 0x1,
    Smogix = 0x2,
    Skt4ej = 0x3,
    Skpteh4 = 0x4,
    Stmkghp = 0x5,
    Sepkt94 = 0x6,
    Sgwoxl = 0x7;
Sbfzn['prototype'] = {
    'parse': function (su8qa2, l15iw, l1356w) {
        var xoiwlg = this['domBuilder'];
        xoiwlg['startDocument'](), S$rz_nf(l15iw, l15iw = {}), Sk4he(su8qa2, l15iw, l1356w, xoiwlg, this['errorHandler']), xoiwlg['endDocument']();
    }
}, Se94k7j['prototype'] = {
    'setTagName': function (k49jt) {
        if (!St4epkh['test'](k49jt)) throw new Error('invalid tagName:' + k49jt);
        this['tagName'] = k49jt;
    },
    'add': function (a6uq, _bzdf, y2q8) {
        if (!St4epkh['test'](a6uq)) throw new Error('invalid attribute:' + a6uq);
        this[this['length']++] = {
            'qName': a6uq,
            'value': _bzdf,
            'offset': y2q8
        };
    },
    'length': 0x0,
    'getLocalName': function (b_nr) {
        return this[b_nr]['localName'];
    },
    'getLocator': function (y8vq20) {
        return this[y8vq20]['locator'];
    },
    'getQName': function (epkmh) {
        return this[epkmh]['qName'];
    },
    'getURI': function (phxgom) {
        return this[phxgom]['uri'];
    },
    'getValue': function (xmwgo) {
        return this[xmwgo]['value'];
    }
}, S$n_rz({}, S$n_rz['prototype']) instanceof S$n_rz || (S$n_rz = function (ejt94, q6a8su) {
    function tk94ej() {}
    tk94ej['prototype'] = q6a8su, tk94ej = new tk94ej();
    for (q6a8su in ejt94) tk94ej[q6a8su] = ejt94[q6a8su];
    return tk94ej;
}), exports['XMLReader'] = Sbfzn;