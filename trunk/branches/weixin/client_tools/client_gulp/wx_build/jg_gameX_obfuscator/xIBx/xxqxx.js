var u = wx.$x;
function xvngu() {}
function xnuvjg(fucj9, s5m, imo4x, b3twk1, behk0w) {
    function c9fjun(dju) {
        if (dju > 0xffff) {
            dju -= 0x10000;
            var qphea0 = 0xd800 + (dju >> 0xa),
                vndjc = 0xdc00 + (0x3ff & dju);
            return String['fromCharCode'](qphea0, vndjc);
        }
        return String['fromCharCode'](dju);
    }
    function k61t3(ugdn4) {
        var cn9 = ugdn4['slice'](0x1, -0x1);
        return cn9 in imo4x ? imo4x[cn9] : '#' === cn9['charAt'](0x0) ? c9fjun(parseInt(cn9['substr'](0x1)['replace']('x', '0x'))) : (behk0w['error']('entity not found:' + ugdn4), ugdn4);
    }
    function e1w0k(_haqep) {
        if (_haqep > dnuvgj) {
            var xo = fucj9['substring'](dnuvgj, _haqep)['replace'](/&#?\w+;/g, k61t3);
            idsx4 && os5mzx(dnuvgj), b3twk1['characters'](xo, 0x0, _haqep - dnuvgj), dnuvgj = _haqep;
        }
    }
    function os5mzx(mszoxi, xdsg4i) {
        for (; mszoxi >= p0hkbe && (xdsg4i = l87['exec'](fucj9));) w3kb1t = xdsg4i['index'], p0hkbe = w3kb1t + xdsg4i[0x0]['length'], idsx4['lineNumber']++;
        idsx4['columnNumber'] = mszoxi - w3kb1t + 0x1;
    }
    for (var w3kb1t = 0x0, p0hkbe = 0x0, l87 = /.*(?:\r\n?|\n)|.*$/g, idsx4 = b3twk1['locator'], e0bhp = [{ 'currentNSMap': s5m }], vudg4i = {}, dnuvgj = 0x0;;) {
        try {
            var l89y$7 = fucj9['indexOf']('<', dnuvgj);
            if (0x0 > l89y$7) {
                if (!fucj9['substr'](dnuvgj)['match'](/^\s*$/)) {
                    var wtk1b = b3twk1['doc'],
                        hkeb = wtk1b['createTextNode'](fucj9['substr'](dnuvgj));
                    wtk1b['appendChild'](hkeb), b3twk1['currentElement'] = hkeb;
                }
                return;
            }
            switch (l89y$7 > dnuvgj && e1w0k(l89y$7), fucj9['charAt'](l89y$7 + 0x1)) {
                case '/':
                    var osm2 = fucj9['indexOf']('>', l89y$7 + 0x3),
                        zt52o6 = fucj9['substring'](l89y$7 + 0x2, osm2),
                        oxsm5z = e0bhp['pop']();
                    0x0 > osm2 ? (zt52o6 = fucj9['substring'](l89y$7 + 0x2)['replace'](/[\s<].*/, ''), behk0w['error']('end tag name: ' + zt52o6 + ' is not complete:' + oxsm5z['tagName']), osm2 = l89y$7 + 0x1 + zt52o6['length']) : zt52o6['match'](/\s</) && (zt52o6 = zt52o6['replace'](/[\s<].*/, ''), behk0w['error']('end tag name: ' + zt52o6 + ' maybe not complete'), osm2 = l89y$7 + 0x1 + zt52o6['length']);
                    var sim4o = oxsm5z['localNSMap'],
                        kbehw = oxsm5z['tagName'] == zt52o6,
                        t35z = kbehw || oxsm5z['tagName'] && oxsm5z['tagName']['toLowerCase']() == zt52o6['toLowerCase']();
                    if (t35z) {
                        if (b3twk1['endElement'](oxsm5z['uri'], oxsm5z['localName'], zt52o6), sim4o) {
                            for (var cnvdj in sim4o) b3twk1['endPrefixMapping'](cnvdj);
                        }
                        kbehw || behk0w['fatalError']('end tag name: ' + zt52o6 + ' is not match the current start tagName:' + oxsm5z['tagName']);
                    } else e0bhp['push'](oxsm5z);
                    osm2++;
                    break;
                case '?':
                    idsx4 && os5mzx(l89y$7), osm2 = xehaqp0(fucj9, l89y$7, b3twk1);
                    break;
                case '!':
                    idsx4 && os5mzx(l89y$7), osm2 = xtwb31k(fucj9, l89y$7, b3twk1, behk0w);
                    break;
                default:
                    idsx4 && os5mzx(l89y$7);
                    var whkbe = new xt5z6(),
                        w32t61 = e0bhp[e0bhp['length'] - 0x1]['currentNSMap'],
                        osm2 = xtk6w31(fucj9, l89y$7, whkbe, w32t61, k61t3, behk0w),
                        m2zso = whkbe['length'];
                    if (!whkbe['closed'] && xfy9l87(fucj9, osm2, whkbe['tagName'], vudg4i) && (whkbe['closed'] = !0x0, imo4x['nbsp'] || behk0w['warning']('unclosed xml attribute')), idsx4 && m2zso) {
                        for (var s2mo = xxoims4(idsx4, {}), t2oz65 = 0x0; m2zso > t2oz65; t2oz65++) {
                            var f9ly7 = whkbe[t2oz65];
                            os5mzx(f9ly7['offset']), f9ly7['locator'] = xxoims4(idsx4, {});
                        }
                        b3twk1['locator'] = s2mo, xdu4vg(whkbe, b3twk1, w32t61) && e0bhp['push'](whkbe), b3twk1['locator'] = idsx4;
                    } else xdu4vg(whkbe, b3twk1, w32t61) && e0bhp['push'](whkbe);
                    'http://www.w3.org/1999/xhtml' !== whkbe['uri'] || whkbe['closed'] ? osm2++ : osm2 = xpa0eb(fucj9, osm2, whkbe['tagName'], k61t3, b3twk1);
            }
        } catch (cf8l9) {
            behk0w['error']('element parse error: ' + cf8l9), osm2 = -0x1;
        }
        osm2 > dnuvgj ? dnuvgj = osm2 : e1w0k(Math['max'](l89y$7, dnuvgj) + 0x1);
    }
}
function xxoims4(pa0hqe, qp_aeh) {
    return qp_aeh['lineNumber'] = pa0hqe['lineNumber'], qp_aeh['columnNumber'] = pa0hqe['columnNumber'], qp_aeh;
}
function xtk6w31(u9njf, t1wbk3, gidv4x, phe_, t362w1, ndgujv) {
    for (var cfjvu, yfl897, nvdjgu = ++t1wbk3, kw13bt = xn4gd;;) {
        var cfjln9 = u9njf['charAt'](nvdjgu);
        switch (cfjln9) {
            case '=':
                if (kw13bt === xsidg) cfjvu = u9njf['slice'](t1wbk3, nvdjgu), kw13bt = xzsmo5;else {
                    if (kw13bt !== xu4gndv) throw new Error('attribute equal must after attrName');
                    kw13bt = xzsmo5;
                }
                break;
            case '\x27':
            case '\x22':
                if (kw13bt === xzsmo5 || kw13bt === xsidg) {
                    if (kw13bt === xsidg && (ndgujv['warning']('attribute value must after "="'), cfjvu = u9njf['slice'](t1wbk3, nvdjgu)), t1wbk3 = nvdjgu + 0x1, nvdjgu = u9njf['indexOf'](cfjln9, t1wbk3), !(nvdjgu > 0x0)) throw new Error('attribute value no end \'' + cfjln9 + '\' match');
                    yfl897 = u9njf['slice'](t1wbk3, nvdjgu)['replace'](/&#?\w+;/g, t362w1), gidv4x['add'](cfjvu, yfl897, t1wbk3 - 0x1), kw13bt = xw1tbk;
                } else {
                    if (kw13bt != xsdxgi) throw new Error('attribute value must after "="');
                    yfl897 = u9njf['slice'](t1wbk3, nvdjgu)['replace'](/&#?\w+;/g, t362w1), gidv4x['add'](cfjvu, yfl897, t1wbk3), ndgujv['warning']('attribute "' + cfjvu + '" missed start quot(' + cfjln9 + ')!!'), t1wbk3 = nvdjgu + 0x1, kw13bt = xw1tbk;
                }
                break;
            case '/':
                switch (kw13bt) {
                    case xn4gd:
                        gidv4x['setTagName'](u9njf['slice'](t1wbk3, nvdjgu));
                    case xw1tbk:
                    case xcjnvu:
                    case xuvjdnc:
                        kw13bt = xuvjdnc, gidv4x['closed'] = !0x0;
                    case xsdxgi:
                    case xsidg:
                    case xu4gndv:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return ndgujv['error']('unexpected end of input'), kw13bt == xn4gd && gidv4x['setTagName'](u9njf['slice'](t1wbk3, nvdjgu)), nvdjgu;
            case '>':
                switch (kw13bt) {
                    case xn4gd:
                        gidv4x['setTagName'](u9njf['slice'](t1wbk3, nvdjgu));
                    case xw1tbk:
                    case xcjnvu:
                    case xuvjdnc:
                        break;
                    case xsdxgi:
                    case xsidg:
                        yfl897 = u9njf['slice'](t1wbk3, nvdjgu), '/' === yfl897['slice'](-0x1) && (gidv4x['closed'] = !0x0, yfl897 = yfl897['slice'](0x0, -0x1));
                    case xu4gndv:
                        kw13bt === xu4gndv && (yfl897 = cfjvu), kw13bt == xsdxgi ? (ndgujv['warning']('attribute "' + yfl897 + '" missed quot(")!!'), gidv4x['add'](cfjvu, yfl897['replace'](/&#?\w+;/g, t362w1), t1wbk3)) : ('http://www.w3.org/1999/xhtml' === phe_[''] && yfl897['match'](/^(?:disabled|checked|selected)$/i) || ndgujv['warning']('attribute "' + yfl897 + '" missed value!! "' + yfl897 + '" instead!!'), gidv4x['add'](yfl897, yfl897, t1wbk3));
                        break;
                    case xzsmo5:
                        throw new Error('attribute value missed!!');
                }
                return nvdjgu;
            case '\u0080':
                cfjln9 = '\x20';
            default:
                if ('\x20' >= cfjln9) switch (kw13bt) {
                    case xn4gd:
                        gidv4x['setTagName'](u9njf['slice'](t1wbk3, nvdjgu)), kw13bt = xcjnvu;
                        break;
                    case xsidg:
                        cfjvu = u9njf['slice'](t1wbk3, nvdjgu), kw13bt = xu4gndv;
                        break;
                    case xsdxgi:
                        var yfl897 = u9njf['slice'](t1wbk3, nvdjgu)['replace'](/&#?\w+;/g, t362w1);
                        ndgujv['warning']('attribute "' + yfl897 + '" missed quot(")!!'), gidv4x['add'](cfjvu, yfl897, t1wbk3);
                    case xw1tbk:
                        kw13bt = xcjnvu;
                } else switch (kw13bt) {
                    case xu4gndv:
                        {
                            gidv4x['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === phe_[''] && cfjvu['match'](/^(?:disabled|checked|selected)$/i) || ndgujv['warning']('attribute "' + cfjvu + '" missed value!! "' + cfjvu + '" instead2!!'), gidv4x['add'](cfjvu, cfjvu, t1wbk3), t1wbk3 = nvdjgu, kw13bt = xsidg;
                        break;
                    case xw1tbk:
                        ndgujv['warning']('attribute space is required"' + cfjvu + '\x22!!');
                    case xcjnvu:
                        kw13bt = xsidg, t1wbk3 = nvdjgu;
                        break;
                    case xzsmo5:
                        kw13bt = xsdxgi, t1wbk3 = nvdjgu;
                        break;
                    case xuvjdnc:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        nvdjgu++;
    }
}
function xdu4vg(iv4gu, i4vug, vgd4n) {
    for (var kt36w1 = iv4gu['tagName'], uivgd = null, n4uvd = iv4gu['length']; n4uvd--;) {
        var wek0hb = iv4gu[n4uvd],
            sx4io = wek0hb['qName'],
            kebh = wek0hb['value'],
            iv4gxd = sx4io['indexOf'](':');
        if (iv4gxd > 0x0) var duvn4 = wek0hb['prefix'] = sx4io['slice'](0x0, iv4gxd),
            sd4 = sx4io['slice'](iv4gxd + 0x1),
            i4dguv = 'xmlns' === duvn4 && sd4;else sd4 = sx4io, duvn4 = null, i4dguv = 'xmlns' === sx4io && '';
        wek0hb['localName'] = sd4, i4dguv !== !0x1 && (null == uivgd && (uivgd = {}, xk1w0b3(vgd4n, vgd4n = {})), vgd4n[i4dguv] = uivgd[i4dguv] = kebh, wek0hb['uri'] = 'http://www.w3.org/2000/xmlns/', i4vug['startPrefixMapping'](i4dguv, kebh));
    }
    for (var n4uvd = iv4gu['length']; n4uvd--;) {
        wek0hb = iv4gu[n4uvd];
        var duvn4 = wek0hb['prefix'];
        duvn4 && ('xml' === duvn4 && (wek0hb['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== duvn4 && (wek0hb['uri'] = vgd4n[duvn4 || '']));
    }
    var iv4gxd = kt36w1['indexOf'](':');
    iv4gxd > 0x0 ? (duvn4 = iv4gu['prefix'] = kt36w1['slice'](0x0, iv4gxd), sd4 = iv4gu['localName'] = kt36w1['slice'](iv4gxd + 0x1)) : (duvn4 = null, sd4 = iv4gu['localName'] = kt36w1);
    var os5mx = iv4gu['uri'] = vgd4n[duvn4 || ''];
    if (i4vug['startElement'](os5mx, sd4, kt36w1, iv4gu), !iv4gu['closed']) return iv4gu['currentNSMap'] = vgd4n, iv4gu['localNSMap'] = uivgd, !0x0;
    if (i4vug['endElement'](os5mx, sd4, kt36w1), uivgd) {
        for (duvn4 in uivgd) i4vug['endPrefixMapping'](duvn4);
    }
}
function xpa0eb(aq_ehp, j9cufn, cvjdu, m526o, zso5) {
    if (/^(?:script|textarea)$/i['test'](cvjdu)) {
        var w1ktb = aq_ehp['indexOf']('</' + cvjdu + '>', j9cufn),
            gv4dix = aq_ehp['substring'](j9cufn + 0x1, w1ktb);
        if (/[&<]/['test'](gv4dix)) return (/^script$/i['test'](cvjdu) ? (zso5['characters'](gv4dix, 0x0, gv4dix['length']), w1ktb) : (gv4dix = gv4dix['replace'](/&#?\w+;/g, m526o), zso5['characters'](gv4dix, 0x0, gv4dix['length']), w1ktb)
        );
    }
    return j9cufn + 0x1;
}
function xfy9l87(njvu, mosx, hqepa0, jvufc) {
    var zt5623 = jvufc[hqepa0];
    return null == zt5623 && (zt5623 = njvu['lastIndexOf']('</' + hqepa0 + '>'), mosx > zt5623 && (zt5623 = njvu['lastIndexOf']('</' + hqepa0)), jvufc[hqepa0] = zt5623), mosx > zt5623;
}
function xk1w0b3(p0aq, w6k13) {
    for (var t15326 in p0aq) w6k13[t15326] = p0aq[t15326];
}
function xtwb31k(w6t321, dvjnuc, m5o2z6, ln) {
    var ungvd4 = w6t321['charAt'](dvjnuc + 0x2);
    switch (ungvd4) {
        case '-':
            if ('-' === w6t321['charAt'](dvjnuc + 0x3)) {
                var t3k1w = w6t321['indexOf']('-->', dvjnuc + 0x4);
                return t3k1w > dvjnuc ? (m5o2z6['comment'](w6t321, dvjnuc + 0x4, t3k1w - dvjnuc - 0x4), t3k1w + 0x3) : (ln['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == w6t321['substr'](dvjnuc + 0x3, 0x6)) {
                var t3k1w = w6t321['indexOf'](']]>', dvjnuc + 0x9);
                return m5o2z6['startCDATA'](), m5o2z6['characters'](w6t321, dvjnuc + 0x9, t3k1w - dvjnuc - 0x9), m5o2z6['endCDATA'](), t3k1w + 0x3;
            }
            var o26zm = xot625z(w6t321, dvjnuc),
                ljf9c = o26zm['length'];
            if (ljf9c > 0x1 && /!doctype/i['test'](o26zm[0x0][0x0])) {
                var di4sg = o26zm[0x1][0x0],
                    jn9cf = ljf9c > 0x3 && /^public$/i['test'](o26zm[0x2][0x0]) && o26zm[0x3][0x0],
                    wkt61 = ljf9c > 0x4 && o26zm[0x4][0x0],
                    _hapq = o26zm[ljf9c - 0x1];
                return m5o2z6['startDTD'](di4sg, jn9cf && jn9cf['replace'](/^(['"])(.*?)\1$/, '$2'), wkt61 && wkt61['replace'](/^(['"])(.*?)\1$/, '$2')), m5o2z6['endDTD'](), _hapq['index'] + _hapq[0x0]['length'];
            }
    }
    return -0x1;
}
function xehaqp0(epah, flj9c7, zso52) {
    var btw31k = epah['indexOf']('?>', flj9c7);
    if (btw31k) {
        var sd4xgi = epah['substring'](flj9c7, btw31k)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (sd4xgi) {
            {
                sd4xgi[0x0]['length'];
            }
            return zso52['processingInstruction'](sd4xgi[0x1], sd4xgi[0x2]), btw31k + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function xt5z6() {}
function xdgun4(ehap, q_ep) {
    return ehap['__proto__'] = q_ep, ehap;
}
function xot625z(b0aep, zxmois) {
    var dcunjv,
        ae0qp = [],
        w1ktb3 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (w1ktb3['lastIndex'] = zxmois, w1ktb3['exec'](b0aep); dcunjv = w1ktb3['exec'](b0aep);) if (ae0qp['push'](dcunjv), dcunjv[0x1]) return ae0qp;
}
var xaq_rhp = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    xdu4gvi = new RegExp('[\\-\\.0-9' + xaq_rhp['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    xgn4vdu = new RegExp('^' + xaq_rhp['source'] + xdu4gvi['source'] + '*(?::' + xaq_rhp['source'] + xdu4gvi['source'] + '*)?$'),
    xn4gd = 0x0,
    xsidg = 0x1,
    xu4gndv = 0x2,
    xzsmo5 = 0x3,
    xsdxgi = 0x4,
    xw1tbk = 0x5,
    xcjnvu = 0x6,
    xuvjdnc = 0x7;
xvngu['prototype'] = {
    'parse': function (x5szmo, cvfnu, vfujcn) {
        var t16w23 = this['domBuilder'];
        t16w23['startDocument'](), xk1w0b3(cvfnu, cvfnu = {}), xnuvjg(x5szmo, cvfnu, vfujcn, t16w23, this['errorHandler']), t16w23['endDocument']();
    }
}, xt5z6['prototype'] = {
    'setTagName': function (kh0ewb) {
        if (!xgn4vdu['test'](kh0ewb)) throw new Error('invalid tagName:' + kh0ewb);
        this['tagName'] = kh0ewb;
    },
    'add': function (n9jlf, xg4m, f978yl) {
        if (!xgn4vdu['test'](n9jlf)) throw new Error('invalid attribute:' + n9jlf);
        this[this['length']++] = {
            'qName': n9jlf,
            'value': xg4m,
            'offset': f978yl
        };
    },
    'length': 0x0,
    'getLocalName': function (hbpe) {
        return this[hbpe]['localName'];
    },
    'getLocator': function (bw03) {
        return this[bw03]['locator'];
    },
    'getQName': function (e0pa) {
        return this[e0pa]['qName'];
    },
    'getURI': function (e10k) {
        return this[e10k]['uri'];
    },
    'getValue': function (jc7f) {
        return this[jc7f]['value'];
    }
}, xdgun4({}, xdgun4['prototype']) instanceof xdgun4 || (xdgun4 = function (ehaqp_, l78c9) {
    function jcf79() {}
    jcf79['prototype'] = l78c9, jcf79 = new jcf79();
    for (l78c9 in ehaqp_) jcf79[l78c9] = ehaqp_[l78c9];
    return jcf79;
}), exports['XMLReader'] = xvngu;