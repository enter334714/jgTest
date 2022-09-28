var J = wx.h$;
function gf9w_2p() {}
function gi3xn1(c6d8gt, c8kd, hcdt, qoy5b, qoy50) {
    function irvxj7(xjir) {
        if (xjir > 0xffff) {
            xjir -= 0x10000;
            var vix7j = 0xd800 + (xjir >> 0xa),
                bdkg = 0xdc00 + (0x3ff & xjir);
            return String['fromCharCode'](vix7j, bdkg);
        }
        return String['fromCharCode'](xjir);
    }
    function t6g8cd(_9e) {
        var pe2z_h = _9e['slice'](0x1, -0x1);
        return pe2z_h in hcdt ? hcdt[pe2z_h] : '#' === pe2z_h['charAt'](0x0) ? irvxj7(parseInt(pe2z_h['substr'](0x1)['replace']('x', '0x'))) : (qoy50['error']('entity not found:' + _9e), _9e);
    }
    function yrqbo(chztep) {
        if (chztep > _29f) {
            var gdq0kb = c6d8gt['substring'](_29f, chztep)['replace'](/&#?\w+;/g, t6g8cd);
            d8c6h && rb5yqo(_29f), qoy5b['characters'](gdq0kb, 0x0, chztep - _29f), _29f = chztep;
        }
    }
    function rb5yqo(vor7, chd68) {
        for (; vor7 >= f_$w9 && (chd68 = xijvn7['exec'](c6d8gt));) a14lu3 = chd68['index'], f_$w9 = a14lu3 + chd68[0x0]['length'], d8c6h['lineNumber']++;
        d8c6h['columnNumber'] = vor7 - a14lu3 + 0x1;
    }
    for (var a14lu3 = 0x0, f_$w9 = 0x0, xijvn7 = /.*(?:\r\n?|\n)|.*$/g, d8c6h = qoy5b['locator'], u1n34 = [{ 'currentNSMap': c8kd }], kq0bo = {}, _29f = 0x0;;) {
        try {
            var zp2h_ = c6d8gt['indexOf']('<', _29f);
            if (0x0 > zp2h_) {
                if (!c6d8gt['substr'](_29f)['match'](/^\s*$/)) {
                    var w2f_p = qoy5b['doc'],
                        y5jro = w2f_p['createTextNode'](c6d8gt['substr'](_29f));
                    w2f_p['appendChild'](y5jro), qoy5b['currentElement'] = y5jro;
                }
                return;
            }
            switch (zp2h_ > _29f && yrqbo(zp2h_), c6d8gt['charAt'](zp2h_ + 0x1)) {
                case '/':
                    var kd0b6g = c6d8gt['indexOf']('>', zp2h_ + 0x3),
                        wzep2_ = c6d8gt['substring'](zp2h_ + 0x2, kd0b6g),
                        bo0qy = u1n34['pop']();
                    0x0 > kd0b6g ? (wzep2_ = c6d8gt['substring'](zp2h_ + 0x2)['replace'](/[\s<].*/, ''), qoy50['error']('end tag name: ' + wzep2_ + ' is not complete:' + bo0qy['tagName']), kd0b6g = zp2h_ + 0x1 + wzep2_['length']) : wzep2_['match'](/\s</) && (wzep2_ = wzep2_['replace'](/[\s<].*/, ''), qoy50['error']('end tag name: ' + wzep2_ + ' maybe not complete'), kd0b6g = zp2h_ + 0x1 + wzep2_['length']);
                    var t6zch = bo0qy['localNSMap'],
                        w_p2f9 = bo0qy['tagName'] == wzep2_,
                        g0k8d = w_p2f9 || bo0qy['tagName'] && bo0qy['tagName']['toLowerCase']() == wzep2_['toLowerCase']();
                    if (g0k8d) {
                        if (qoy5b['endElement'](bo0qy['uri'], bo0qy['localName'], wzep2_), t6zch) {
                            for (var hdt6c in t6zch) qoy5b['endPrefixMapping'](hdt6c);
                        }
                        w_p2f9 || qoy50['fatalError']('end tag name: ' + wzep2_ + ' is not match the current start tagName:' + bo0qy['tagName']);
                    } else u1n34['push'](bo0qy);
                    kd0b6g++;
                    break;
                case '?':
                    d8c6h && rb5yqo(zp2h_), kd0b6g = gw2p9_f(c6d8gt, zp2h_, qoy5b);
                    break;
                case '!':
                    d8c6h && rb5yqo(zp2h_), kd0b6g = gzh6ct8(c6d8gt, zp2h_, qoy5b, qoy50);
                    break;
                default:
                    d8c6h && rb5yqo(zp2h_);
                    var injvx7 = new gxr7jvy(),
                        htepc = u1n34[u1n34['length'] - 0x1]['currentNSMap'],
                        kd0b6g = gyvro7j(c6d8gt, zp2h_, injvx7, htepc, t6g8cd, qoy50),
                        z_h2pe = injvx7['length'];
                    if (!injvx7['closed'] && gna314u(c6d8gt, kd0b6g, injvx7['tagName'], kq0bo) && (injvx7['closed'] = !0x0, hcdt['nbsp'] || qoy50['warning']('unclosed xml attribute')), d8c6h && z_h2pe) {
                        for (var ryj7ov = gjv5yr(d8c6h, {}), i7jvrx = 0x0; z_h2pe > i7jvrx; i7jvrx++) {
                            var qbo05k = injvx7[i7jvrx];
                            rb5yqo(qbo05k['offset']), qbo05k['locator'] = gjv5yr(d8c6h, {});
                        }
                        qoy5b['locator'] = ryj7ov, gtzhc(injvx7, qoy5b, htepc) && u1n34['push'](injvx7), qoy5b['locator'] = d8c6h;
                    } else gtzhc(injvx7, qoy5b, htepc) && u1n34['push'](injvx7);
                    'http://www.w3.org/1999/xhtml' !== injvx7['uri'] || injvx7['closed'] ? kd0b6g++ : kd0b6g = grxijv7(c6d8gt, kd0b6g, injvx7['tagName'], t6g8cd, qoy5b);
            }
        } catch (qbd0gk) {
            qoy50['error']('element parse error: ' + qbd0gk), kd0b6g = -0x1;
        }
        kd0b6g > _29f ? _29f = kd0b6g : yrqbo(Math['max'](zp2h_, _29f) + 0x1);
    }
}
function gjv5yr(aml, j7xivn) {
    return j7xivn['lineNumber'] = aml['lineNumber'], j7xivn['columnNumber'] = aml['columnNumber'], j7xivn;
}
function gyvro7j(dc6gk, c8etz, $2swf9, un1i3, oqb5ry, ct6dh8) {
    for (var ij17, tpe_h, z6h = ++c8etz, ew2pz_ = gr7ivxj;;) {
        var phzect = dc6gk['charAt'](z6h);
        switch (phzect) {
            case '=':
                if (ew2pz_ === gy7xrv) ij17 = dc6gk['slice'](c8etz, z6h), ew2pz_ = gyvroq5;else {
                    if (ew2pz_ !== ginvx7j) throw new Error('attribute equal must after attrName');
                    ew2pz_ = gyvroq5;
                }
                break;
            case '\x27':
            case '\x22':
                if (ew2pz_ === gyvroq5 || ew2pz_ === gy7xrv) {
                    if (ew2pz_ === gy7xrv && (ct6dh8['warning']('attribute value must after "="'), ij17 = dc6gk['slice'](c8etz, z6h)), c8etz = z6h + 0x1, z6h = dc6gk['indexOf'](phzect, c8etz), !(z6h > 0x0)) throw new Error('attribute value no end \'' + phzect + '\' match');
                    tpe_h = dc6gk['slice'](c8etz, z6h)['replace'](/&#?\w+;/g, oqb5ry), $2swf9['add'](ij17, tpe_h, c8etz - 0x1), ew2pz_ = gla31;
                } else {
                    if (ew2pz_ != gw2pe9) throw new Error('attribute value must after "="');
                    tpe_h = dc6gk['slice'](c8etz, z6h)['replace'](/&#?\w+;/g, oqb5ry), $2swf9['add'](ij17, tpe_h, c8etz), ct6dh8['warning']('attribute "' + ij17 + '" missed start quot(' + phzect + ')!!'), c8etz = z6h + 0x1, ew2pz_ = gla31;
                }
                break;
            case '/':
                switch (ew2pz_) {
                    case gr7ivxj:
                        $2swf9['setTagName'](dc6gk['slice'](c8etz, z6h));
                    case gla31:
                    case gez2pw_:
                    case gpf9_2:
                        ew2pz_ = gpf9_2, $2swf9['closed'] = !0x0;
                    case gw2pe9:
                    case gy7xrv:
                    case ginvx7j:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return ct6dh8['error']('unexpected end of input'), ew2pz_ == gr7ivxj && $2swf9['setTagName'](dc6gk['slice'](c8etz, z6h)), z6h;
            case '>':
                switch (ew2pz_) {
                    case gr7ivxj:
                        $2swf9['setTagName'](dc6gk['slice'](c8etz, z6h));
                    case gla31:
                    case gez2pw_:
                    case gpf9_2:
                        break;
                    case gw2pe9:
                    case gy7xrv:
                        tpe_h = dc6gk['slice'](c8etz, z6h), '/' === tpe_h['slice'](-0x1) && ($2swf9['closed'] = !0x0, tpe_h = tpe_h['slice'](0x0, -0x1));
                    case ginvx7j:
                        ew2pz_ === ginvx7j && (tpe_h = ij17), ew2pz_ == gw2pe9 ? (ct6dh8['warning']('attribute "' + tpe_h + '" missed quot(")!!'), $2swf9['add'](ij17, tpe_h['replace'](/&#?\w+;/g, oqb5ry), c8etz)) : ('http://www.w3.org/1999/xhtml' === un1i3[''] && tpe_h['match'](/^(?:disabled|checked|selected)$/i) || ct6dh8['warning']('attribute "' + tpe_h + '" missed value!! "' + tpe_h + '" instead!!'), $2swf9['add'](tpe_h, tpe_h, c8etz));
                        break;
                    case gyvroq5:
                        throw new Error('attribute value missed!!');
                }
                return z6h;
            case '\u0080':
                phzect = '\x20';
            default:
                if ('\x20' >= phzect) switch (ew2pz_) {
                    case gr7ivxj:
                        $2swf9['setTagName'](dc6gk['slice'](c8etz, z6h)), ew2pz_ = gez2pw_;
                        break;
                    case gy7xrv:
                        ij17 = dc6gk['slice'](c8etz, z6h), ew2pz_ = ginvx7j;
                        break;
                    case gw2pe9:
                        var tpe_h = dc6gk['slice'](c8etz, z6h)['replace'](/&#?\w+;/g, oqb5ry);
                        ct6dh8['warning']('attribute "' + tpe_h + '" missed quot(")!!'), $2swf9['add'](ij17, tpe_h, c8etz);
                    case gla31:
                        ew2pz_ = gez2pw_;
                } else switch (ew2pz_) {
                    case ginvx7j:
                        {
                            $2swf9['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === un1i3[''] && ij17['match'](/^(?:disabled|checked|selected)$/i) || ct6dh8['warning']('attribute "' + ij17 + '" missed value!! "' + ij17 + '" instead2!!'), $2swf9['add'](ij17, ij17, c8etz), c8etz = z6h, ew2pz_ = gy7xrv;
                        break;
                    case gla31:
                        ct6dh8['warning']('attribute space is required"' + ij17 + '\x22!!');
                    case gez2pw_:
                        ew2pz_ = gy7xrv, c8etz = z6h;
                        break;
                    case gyvroq5:
                        ew2pz_ = gw2pe9, c8etz = z6h;
                        break;
                    case gpf9_2:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        z6h++;
    }
}
function gtzhc(un14a3, u1n4a, htc6) {
    for (var u13a4 = un14a3['tagName'], y5orjv = null, bkg5 = un14a3['length']; bkg5--;) {
        var bq5y0 = un14a3[bkg5],
            _p2zeh = bq5y0['qName'],
            zt6h = bq5y0['value'],
            jrv7y = _p2zeh['indexOf'](':');
        if (jrv7y > 0x0) var pw29e = bq5y0['prefix'] = _p2zeh['slice'](0x0, jrv7y),
            cetzp = _p2zeh['slice'](jrv7y + 0x1),
            hz2_ = 'xmlns' === pw29e && cetzp;else cetzp = _p2zeh, pw29e = null, hz2_ = 'xmlns' === _p2zeh && '';
        bq5y0['localName'] = cetzp, hz2_ !== !0x1 && (null == y5orjv && (y5orjv = {}, gnu41a3(htc6, htc6 = {})), htc6[hz2_] = y5orjv[hz2_] = zt6h, bq5y0['uri'] = 'http://www.w3.org/2000/xmlns/', u1n4a['startPrefixMapping'](hz2_, zt6h));
    }
    for (var bkg5 = un14a3['length']; bkg5--;) {
        bq5y0 = un14a3[bkg5];
        var pw29e = bq5y0['prefix'];
        pw29e && ('xml' === pw29e && (bq5y0['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== pw29e && (bq5y0['uri'] = htc6[pw29e || '']));
    }
    var jrv7y = u13a4['indexOf'](':');
    jrv7y > 0x0 ? (pw29e = un14a3['prefix'] = u13a4['slice'](0x0, jrv7y), cetzp = un14a3['localName'] = u13a4['slice'](jrv7y + 0x1)) : (pw29e = null, cetzp = un14a3['localName'] = u13a4);
    var swf2$9 = un14a3['uri'] = htc6[pw29e || ''];
    if (u1n4a['startElement'](swf2$9, cetzp, u13a4, un14a3), !un14a3['closed']) return un14a3['currentNSMap'] = htc6, un14a3['localNSMap'] = y5orjv, !0x0;
    if (u1n4a['endElement'](swf2$9, cetzp, u13a4), y5orjv) {
        for (pw29e in y5orjv) u1n4a['endPrefixMapping'](pw29e);
    }
}
function grxijv7(tc8ze, jr7vyo, $2f9_w, i1njx, wf$9s2) {
    if (/^(?:script|textarea)$/i['test']($2f9_w)) {
        var yrjo = tc8ze['indexOf']('</' + $2f9_w + '>', jr7vyo),
            zhtce8 = tc8ze['substring'](jr7vyo + 0x1, yrjo);
        if (/[&<]/['test'](zhtce8)) return (/^script$/i['test']($2f9_w) ? (wf$9s2['characters'](zhtce8, 0x0, zhtce8['length']), yrjo) : (zhtce8 = zhtce8['replace'](/&#?\w+;/g, i1njx), wf$9s2['characters'](zhtce8, 0x0, zhtce8['length']), yrjo)
        );
    }
    return jr7vyo + 0x1;
}
function gna314u(bqg0k, e2p9w, ij7v, ko5) {
    var pzhe2_ = ko5[ij7v];
    return null == pzhe2_ && (pzhe2_ = bqg0k['lastIndexOf']('</' + ij7v + '>'), e2p9w > pzhe2_ && (pzhe2_ = bqg0k['lastIndexOf']('</' + ij7v)), ko5[ij7v] = pzhe2_), e2p9w > pzhe2_;
}
function gnu41a3(wzep2, gbdq0) {
    for (var r5jo in wzep2) gbdq0[r5jo] = wzep2[r5jo];
}
function gzh6ct8(e_htzp, x7vyjr, or7vy, p2_) {
    var ep92_w = e_htzp['charAt'](x7vyjr + 0x2);
    switch (ep92_w) {
        case '-':
            if ('-' === e_htzp['charAt'](x7vyjr + 0x3)) {
                var j5orvy = e_htzp['indexOf']('-->', x7vyjr + 0x4);
                return j5orvy > x7vyjr ? (or7vy['comment'](e_htzp, x7vyjr + 0x4, j5orvy - x7vyjr - 0x4), j5orvy + 0x3) : (p2_['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == e_htzp['substr'](x7vyjr + 0x3, 0x6)) {
                var j5orvy = e_htzp['indexOf'](']]>', x7vyjr + 0x9);
                return or7vy['startCDATA'](), or7vy['characters'](e_htzp, x7vyjr + 0x9, j5orvy - x7vyjr - 0x9), or7vy['endCDATA'](), j5orvy + 0x3;
            }
            var ryj7v = gjor5(e_htzp, x7vyjr),
                f$9_w = ryj7v['length'];
            if (f$9_w > 0x1 && /!doctype/i['test'](ryj7v[0x0][0x0])) {
                var oy5rv = ryj7v[0x1][0x0],
                    bg0k6d = f$9_w > 0x3 && /^public$/i['test'](ryj7v[0x2][0x0]) && ryj7v[0x3][0x0],
                    h8 = f$9_w > 0x4 && ryj7v[0x4][0x0],
                    e_phzt = ryj7v[f$9_w - 0x1];
                return or7vy['startDTD'](oy5rv, bg0k6d && bg0k6d['replace'](/^(['"])(.*?)\1$/, '$2'), h8 && h8['replace'](/^(['"])(.*?)\1$/, '$2')), or7vy['endDTD'](), e_phzt['index'] + e_phzt[0x0]['length'];
            }
    }
    return -0x1;
}
function gw2p9_f(m3u4l, jyx7vr, xin14) {
    var ixrjv = m3u4l['indexOf']('?>', jyx7vr);
    if (ixrjv) {
        var n431ua = m3u4l['substring'](jyx7vr, ixrjv)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (n431ua) {
            {
                n431ua[0x0]['length'];
            }
            return xin14['processingInstruction'](n431ua[0x1], n431ua[0x2]), ixrjv + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function gxr7jvy() {}
function gtc6zh8(qryo5b, c8z6t) {
    return qryo5b['__proto__'] = c8z6t, qryo5b;
}
function gjor5(e9pw_2, jr7ivx) {
    var b05qok,
        nu43 = [],
        pe9w2_ = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (pe9w2_['lastIndex'] = jr7ivx, pe9w2_['exec'](e9pw_2); b05qok = pe9w2_['exec'](e9pw_2);) if (nu43['push'](b05qok), b05qok[0x1]) return nu43;
}
var gbkqgd = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    ghtep = new RegExp('[\\-\\.0-9' + gbkqgd['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    gcdkg = new RegExp('^' + gbkqgd['source'] + ghtep['source'] + '*(?::' + gbkqgd['source'] + ghtep['source'] + '*)?$'),
    gr7ivxj = 0x0,
    gy7xrv = 0x1,
    ginvx7j = 0x2,
    gyvroq5 = 0x3,
    gw2pe9 = 0x4,
    gla31 = 0x5,
    gez2pw_ = 0x6,
    gpf9_2 = 0x7;
gf9w_2p['prototype'] = {
    'parse': function (tzc8he, in4u, czt6h8) {
        var kd8c = this['domBuilder'];
        kd8c['startDocument'](), gnu41a3(in4u, in4u = {}), gi3xn1(tzc8he, in4u, czt6h8, kd8c, this['errorHandler']), kd8c['endDocument']();
    }
}, gxr7jvy['prototype'] = {
    'setTagName': function (ovjyr5) {
        if (!gcdkg['test'](ovjyr5)) throw new Error('invalid tagName:' + ovjyr5);
        this['tagName'] = ovjyr5;
    },
    'add': function (hpecz, _$2f, cd86gk) {
        if (!gcdkg['test'](hpecz)) throw new Error('invalid attribute:' + hpecz);
        this[this['length']++] = {
            'qName': hpecz,
            'value': _$2f,
            'offset': cd86gk
        };
    },
    'length': 0x0,
    'getLocalName': function (wp_29) {
        return this[wp_29]['localName'];
    },
    'getLocator': function (wp_f9) {
        return this[wp_f9]['locator'];
    },
    'getQName': function (tzc86h) {
        return this[tzc86h]['qName'];
    },
    'getURI': function (jyx7) {
        return this[jyx7]['uri'];
    },
    'getValue': function (qkb50o) {
        return this[qkb50o]['value'];
    }
}, gtc6zh8({}, gtc6zh8['prototype']) instanceof gtc6zh8 || (gtc6zh8 = function (tcd86, kdc86g) {
    function kgdbq() {}
    kgdbq['prototype'] = kdc86g, kgdbq = new kgdbq();
    for (kdc86g in tcd86) kgdbq[kdc86g] = tcd86[kdc86g];
    return kgdbq;
}), exports['XMLReader'] = gf9w_2p;