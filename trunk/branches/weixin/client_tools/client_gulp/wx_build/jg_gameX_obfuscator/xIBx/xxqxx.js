var u = wx.$x;
function xyl97$8() {}
function xtk6w13(ugdvnj, vngjud, gsimx4, xm4, jlc7f) {
    function h_epqa(cjf9l7) {
        if (cjf9l7 > 0xffff) {
            cjf9l7 -= 0x10000;
            var k6w3t = 0xd800 + (cjf9l7 >> 0xa),
                fv = 0xdc00 + (0x3ff & cjf9l7);
            return String['fromCharCode'](k6w3t, fv);
        }
        return String['fromCharCode'](cjf9l7);
    }
    function aq_he(kw1eb0) {
        var apeq0 = kw1eb0['slice'](0x1, -0x1);
        return apeq0 in gsimx4 ? gsimx4[apeq0] : '#' === apeq0['charAt'](0x0) ? h_epqa(parseInt(apeq0['substr'](0x1)['replace']('x', '0x'))) : (jlc7f['error']('entity not found:' + kw1eb0), kw1eb0);
    }
    function mioxz(k16t3) {
        if (k16t3 > nfcl9) {
            var miszox = ugdvnj['substring'](nfcl9, k16t3)['replace'](/&#?\w+;/g, aq_he);
            idgu4v && s4omx(nfcl9), xm4['characters'](miszox, 0x0, k16t3 - nfcl9), nfcl9 = k16t3;
        }
    }
    function s4omx(b0e1w, l9nfj) {
        for (; b0e1w >= ahq && (l9nfj = p_rhq['exec'](ugdvnj));) osxzmi = l9nfj['index'], ahq = osxzmi + l9nfj[0x0]['length'], idgu4v['lineNumber']++;
        idgu4v['columnNumber'] = b0e1w - osxzmi + 0x1;
    }
    for (var osxzmi = 0x0, ahq = 0x0, p_rhq = /.*(?:\r\n?|\n)|.*$/g, idgu4v = xm4['locator'], zo265m = [{ 'currentNSMap': vngjud }], xsm4i = {}, nfcl9 = 0x0;;) {
        try {
            var smoix4 = ugdvnj['indexOf']('<', nfcl9);
            if (0x0 > smoix4) {
                if (!ugdvnj['substr'](nfcl9)['match'](/^\s*$/)) {
                    var bph0ae = xm4['doc'],
                        w631k = bph0ae['createTextNode'](ugdvnj['substr'](nfcl9));
                    bph0ae['appendChild'](w631k), xm4['currentElement'] = w631k;
                }
                return;
            }
            switch (smoix4 > nfcl9 && mioxz(smoix4), ugdvnj['charAt'](smoix4 + 0x1)) {
                case '/':
                    var z3t26 = ugdvnj['indexOf']('>', smoix4 + 0x3),
                        hkebw = ugdvnj['substring'](smoix4 + 0x2, z3t26),
                        fnvj = zo265m['pop']();
                    0x0 > z3t26 ? (hkebw = ugdvnj['substring'](smoix4 + 0x2)['replace'](/[\s<].*/, ''), jlc7f['error']('end tag name: ' + hkebw + ' is not complete:' + fnvj['tagName']), z3t26 = smoix4 + 0x1 + hkebw['length']) : hkebw['match'](/\s</) && (hkebw = hkebw['replace'](/[\s<].*/, ''), jlc7f['error']('end tag name: ' + hkebw + ' maybe not complete'), z3t26 = smoix4 + 0x1 + hkebw['length']);
                    var hpe_ = fnvj['localNSMap'],
                        v4gud = fnvj['tagName'] == hkebw,
                        fjun9 = v4gud || fnvj['tagName'] && fnvj['tagName']['toLowerCase']() == hkebw['toLowerCase']();
                    if (fjun9) {
                        if (xm4['endElement'](fnvj['uri'], fnvj['localName'], hkebw), hpe_) {
                            for (var mzoxsi in hpe_) xm4['endPrefixMapping'](mzoxsi);
                        }
                        v4gud || jlc7f['fatalError']('end tag name: ' + hkebw + ' is not match the current start tagName:' + fnvj['tagName']);
                    } else zo265m['push'](fnvj);
                    z3t26++;
                    break;
                case '?':
                    idgu4v && s4omx(smoix4), z3t26 = xdgv(ugdvnj, smoix4, xm4);
                    break;
                case '!':
                    idgu4v && s4omx(smoix4), z3t26 = xf87yl9(ugdvnj, smoix4, xm4, jlc7f);
                    break;
                default:
                    idgu4v && s4omx(smoix4);
                    var k1bt3 = new xmz5o26(),
                        ufvcnj = zo265m[zo265m['length'] - 0x1]['currentNSMap'],
                        z3t26 = xwb1tk(ugdvnj, smoix4, k1bt3, ufvcnj, aq_he, jlc7f),
                        gi4duv = k1bt3['length'];
                    if (!k1bt3['closed'] && xiso4(ugdvnj, z3t26, k1bt3['tagName'], xsm4i) && (k1bt3['closed'] = !0x0, gsimx4['nbsp'] || jlc7f['warning']('unclosed xml attribute')), idgu4v && gi4duv) {
                        for (var dixs = xnlcf9(idgu4v, {}), y87f = 0x0; gi4duv > y87f; y87f++) {
                            var cfl978 = k1bt3[y87f];
                            s4omx(cfl978['offset']), cfl978['locator'] = xnlcf9(idgu4v, {});
                        }
                        xm4['locator'] = dixs, xekbh0(k1bt3, xm4, ufvcnj) && zo265m['push'](k1bt3), xm4['locator'] = idgu4v;
                    } else xekbh0(k1bt3, xm4, ufvcnj) && zo265m['push'](k1bt3);
                    'http://www.w3.org/1999/xhtml' !== k1bt3['uri'] || k1bt3['closed'] ? z3t26++ : z3t26 = xz632(ugdvnj, z3t26, k1bt3['tagName'], aq_he, xm4);
            }
        } catch (iosxzm) {
            jlc7f['error']('element parse error: ' + iosxzm), z3t26 = -0x1;
        }
        z3t26 > nfcl9 ? nfcl9 = z3t26 : mioxz(Math['max'](smoix4, nfcl9) + 0x1);
    }
}
function xnlcf9(d4igxv, tk3bw1) {
    return tk3bw1['lineNumber'] = d4igxv['lineNumber'], tk3bw1['columnNumber'] = d4igxv['columnNumber'], tk3bw1;
}
function xwb1tk(b0ek1w, e1bk0w, ekbp0h, i4vxdg, b031k, djuv) {
    for (var jfnu, ngvdu, h0bepk = ++e1bk0w, pr = xkw013b;;) {
        var sxo4m = b0ek1w['charAt'](h0bepk);
        switch (sxo4m) {
            case '=':
                if (pr === xa_ep) jfnu = b0ek1w['slice'](e1bk0w, h0bepk), pr = xunfjc9;else {
                    if (pr !== xb0ekh) throw new Error('attribute equal must after attrName');
                    pr = xunfjc9;
                }
                break;
            case '\x27':
            case '\x22':
                if (pr === xunfjc9 || pr === xa_ep) {
                    if (pr === xa_ep && (djuv['warning']('attribute value must after "="'), jfnu = b0ek1w['slice'](e1bk0w, h0bepk)), e1bk0w = h0bepk + 0x1, h0bepk = b0ek1w['indexOf'](sxo4m, e1bk0w), !(h0bepk > 0x0)) throw new Error('attribute value no end \'' + sxo4m + '\' match');
                    ngvdu = b0ek1w['slice'](e1bk0w, h0bepk)['replace'](/&#?\w+;/g, b031k), ekbp0h['add'](jfnu, ngvdu, e1bk0w - 0x1), pr = xtw263;
                } else {
                    if (pr != xe0pbk) throw new Error('attribute value must after "="');
                    ngvdu = b0ek1w['slice'](e1bk0w, h0bepk)['replace'](/&#?\w+;/g, b031k), ekbp0h['add'](jfnu, ngvdu, e1bk0w), djuv['warning']('attribute "' + jfnu + '" missed start quot(' + sxo4m + ')!!'), e1bk0w = h0bepk + 0x1, pr = xtw263;
                }
                break;
            case '/':
                switch (pr) {
                    case xkw013b:
                        ekbp0h['setTagName'](b0ek1w['slice'](e1bk0w, h0bepk));
                    case xtw263:
                    case xi4vgud:
                    case xzo25ms:
                        pr = xzo25ms, ekbp0h['closed'] = !0x0;
                    case xe0pbk:
                    case xa_ep:
                    case xb0ekh:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return djuv['error']('unexpected end of input'), pr == xkw013b && ekbp0h['setTagName'](b0ek1w['slice'](e1bk0w, h0bepk)), h0bepk;
            case '>':
                switch (pr) {
                    case xkw013b:
                        ekbp0h['setTagName'](b0ek1w['slice'](e1bk0w, h0bepk));
                    case xtw263:
                    case xi4vgud:
                    case xzo25ms:
                        break;
                    case xe0pbk:
                    case xa_ep:
                        ngvdu = b0ek1w['slice'](e1bk0w, h0bepk), '/' === ngvdu['slice'](-0x1) && (ekbp0h['closed'] = !0x0, ngvdu = ngvdu['slice'](0x0, -0x1));
                    case xb0ekh:
                        pr === xb0ekh && (ngvdu = jfnu), pr == xe0pbk ? (djuv['warning']('attribute "' + ngvdu + '" missed quot(")!!'), ekbp0h['add'](jfnu, ngvdu['replace'](/&#?\w+;/g, b031k), e1bk0w)) : ('http://www.w3.org/1999/xhtml' === i4vxdg[''] && ngvdu['match'](/^(?:disabled|checked|selected)$/i) || djuv['warning']('attribute "' + ngvdu + '" missed value!! "' + ngvdu + '" instead!!'), ekbp0h['add'](ngvdu, ngvdu, e1bk0w));
                        break;
                    case xunfjc9:
                        throw new Error('attribute value missed!!');
                }
                return h0bepk;
            case '\u0080':
                sxo4m = '\x20';
            default:
                if ('\x20' >= sxo4m) switch (pr) {
                    case xkw013b:
                        ekbp0h['setTagName'](b0ek1w['slice'](e1bk0w, h0bepk)), pr = xi4vgud;
                        break;
                    case xa_ep:
                        jfnu = b0ek1w['slice'](e1bk0w, h0bepk), pr = xb0ekh;
                        break;
                    case xe0pbk:
                        var ngvdu = b0ek1w['slice'](e1bk0w, h0bepk)['replace'](/&#?\w+;/g, b031k);
                        djuv['warning']('attribute "' + ngvdu + '" missed quot(")!!'), ekbp0h['add'](jfnu, ngvdu, e1bk0w);
                    case xtw263:
                        pr = xi4vgud;
                } else switch (pr) {
                    case xb0ekh:
                        {
                            ekbp0h['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === i4vxdg[''] && jfnu['match'](/^(?:disabled|checked|selected)$/i) || djuv['warning']('attribute "' + jfnu + '" missed value!! "' + jfnu + '" instead2!!'), ekbp0h['add'](jfnu, jfnu, e1bk0w), e1bk0w = h0bepk, pr = xa_ep;
                        break;
                    case xtw263:
                        djuv['warning']('attribute space is required"' + jfnu + '\x22!!');
                    case xi4vgud:
                        pr = xa_ep, e1bk0w = h0bepk;
                        break;
                    case xunfjc9:
                        pr = xe0pbk, e1bk0w = h0bepk;
                        break;
                    case xzo25ms:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        h0bepk++;
    }
}
function xekbh0(qph0ea, x5osmz, eqp) {
    for (var ixzmo = qph0ea['tagName'], xdisg = null, _pahe = qph0ea['length']; _pahe--;) {
        var b130wk = qph0ea[_pahe],
            ktb3w1 = b130wk['qName'],
            dgisx = b130wk['value'],
            p_rah = ktb3w1['indexOf'](':');
        if (p_rah > 0x0) var hpk = b130wk['prefix'] = ktb3w1['slice'](0x0, p_rah),
            duiv4 = ktb3w1['slice'](p_rah + 0x1),
            fcjun = 'xmlns' === hpk && duiv4;else duiv4 = ktb3w1, hpk = null, fcjun = 'xmlns' === ktb3w1 && '';
        b130wk['localName'] = duiv4, fcjun !== !0x1 && (null == xdisg && (xdisg = {}, xuvcjfn(eqp, eqp = {})), eqp[fcjun] = xdisg[fcjun] = dgisx, b130wk['uri'] = 'http://www.w3.org/2000/xmlns/', x5osmz['startPrefixMapping'](fcjun, dgisx));
    }
    for (var _pahe = qph0ea['length']; _pahe--;) {
        b130wk = qph0ea[_pahe];
        var hpk = b130wk['prefix'];
        hpk && ('xml' === hpk && (b130wk['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== hpk && (b130wk['uri'] = eqp[hpk || '']));
    }
    var p_rah = ixzmo['indexOf'](':');
    p_rah > 0x0 ? (hpk = qph0ea['prefix'] = ixzmo['slice'](0x0, p_rah), duiv4 = qph0ea['localName'] = ixzmo['slice'](p_rah + 0x1)) : (hpk = null, duiv4 = qph0ea['localName'] = ixzmo);
    var l7y$ = qph0ea['uri'] = eqp[hpk || ''];
    if (x5osmz['startElement'](l7y$, duiv4, ixzmo, qph0ea), !qph0ea['closed']) return qph0ea['currentNSMap'] = eqp, qph0ea['localNSMap'] = xdisg, !0x0;
    if (x5osmz['endElement'](l7y$, duiv4, ixzmo), xdisg) {
        for (hpk in xdisg) x5osmz['endPrefixMapping'](hpk);
    }
}
function xz632(f7j9l, epqha_, igd, bk01ew, z35) {
    if (/^(?:script|textarea)$/i['test'](igd)) {
        var gd4nv = f7j9l['indexOf']('</' + igd + '>', epqha_),
            ozm52 = f7j9l['substring'](epqha_ + 0x1, gd4nv);
        if (/[&<]/['test'](ozm52)) return (/^script$/i['test'](igd) ? (z35['characters'](ozm52, 0x0, ozm52['length']), gd4nv) : (ozm52 = ozm52['replace'](/&#?\w+;/g, bk01ew), z35['characters'](ozm52, 0x0, ozm52['length']), gd4nv)
        );
    }
    return epqha_ + 0x1;
}
function xiso4(dvgn4u, fjn9, ke1bw, xgism4) {
    var t136wk = xgism4[ke1bw];
    return null == t136wk && (t136wk = dvgn4u['lastIndexOf']('</' + ke1bw + '>'), fjn9 > t136wk && (t136wk = dvgn4u['lastIndexOf']('</' + ke1bw)), xgism4[ke1bw] = t136wk), fjn9 > t136wk;
}
function xuvcjfn(bwh0, bw031k) {
    for (var tk1b in bwh0) bw031k[tk1b] = bwh0[tk1b];
}
function xf87yl9(s5zxm, _hepqa, w1kt3b, dgx4v) {
    var xgsm4i = s5zxm['charAt'](_hepqa + 0x2);
    switch (xgsm4i) {
        case '-':
            if ('-' === s5zxm['charAt'](_hepqa + 0x3)) {
                var jdungv = s5zxm['indexOf']('-->', _hepqa + 0x4);
                return jdungv > _hepqa ? (w1kt3b['comment'](s5zxm, _hepqa + 0x4, jdungv - _hepqa - 0x4), jdungv + 0x3) : (dgx4v['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == s5zxm['substr'](_hepqa + 0x3, 0x6)) {
                var jdungv = s5zxm['indexOf'](']]>', _hepqa + 0x9);
                return w1kt3b['startCDATA'](), w1kt3b['characters'](s5zxm, _hepqa + 0x9, jdungv - _hepqa - 0x9), w1kt3b['endCDATA'](), jdungv + 0x3;
            }
            var nvduj = xj9f7c(s5zxm, _hepqa),
                bhap = nvduj['length'];
            if (bhap > 0x1 && /!doctype/i['test'](nvduj[0x0][0x0])) {
                var o2 = nvduj[0x1][0x0],
                    jvcunf = bhap > 0x3 && /^public$/i['test'](nvduj[0x2][0x0]) && nvduj[0x3][0x0],
                    si4xdg = bhap > 0x4 && nvduj[0x4][0x0],
                    l8fc9 = nvduj[bhap - 0x1];
                return w1kt3b['startDTD'](o2, jvcunf && jvcunf['replace'](/^(['"])(.*?)\1$/, '$2'), si4xdg && si4xdg['replace'](/^(['"])(.*?)\1$/, '$2')), w1kt3b['endDTD'](), l8fc9['index'] + l8fc9[0x0]['length'];
            }
    }
    return -0x1;
}
function xdgv(a0bpeh, fl879, eq0pa) {
    var fcjn = a0bpeh['indexOf']('?>', fl879);
    if (fcjn) {
        var z2o56m = a0bpeh['substring'](fl879, fcjn)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (z2o56m) {
            {
                z2o56m[0x0]['length'];
            }
            return eq0pa['processingInstruction'](z2o56m[0x1], z2o56m[0x2]), fcjn + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function xmz5o26() {}
function xxg4div(apbhe0, iomz) {
    return apbhe0['__proto__'] = iomz, apbhe0;
}
function xj9f7c(a_rh, gix4sd) {
    var wbkeh,
        y98f7l = [],
        j9lcf7 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (j9lcf7['lastIndex'] = gix4sd, j9lcf7['exec'](a_rh); wbkeh = j9lcf7['exec'](a_rh);) if (y98f7l['push'](wbkeh), wbkeh[0x1]) return y98f7l;
}
var xh_aqe = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    xundv4g = new RegExp('[\\-\\.0-9' + xh_aqe['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    xm5zxso = new RegExp('^' + xh_aqe['source'] + xundv4g['source'] + '*(?::' + xh_aqe['source'] + xundv4g['source'] + '*)?$'),
    xkw013b = 0x0,
    xa_ep = 0x1,
    xb0ekh = 0x2,
    xunfjc9 = 0x3,
    xe0pbk = 0x4,
    xtw263 = 0x5,
    xi4vgud = 0x6,
    xzo25ms = 0x7;
xyl97$8['prototype'] = {
    'parse': function (o652m, _qphra, ek0w1) {
        var to25z6 = this['domBuilder'];
        to25z6['startDocument'](), xuvcjfn(_qphra, _qphra = {}), xtk6w13(o652m, _qphra, ek0w1, to25z6, this['errorHandler']), to25z6['endDocument']();
    }
}, xmz5o26['prototype'] = {
    'setTagName': function (fy798) {
        if (!xm5zxso['test'](fy798)) throw new Error('invalid tagName:' + fy798);
        this['tagName'] = fy798;
    },
    'add': function (u9njc, juvngd, y8f9l) {
        if (!xm5zxso['test'](u9njc)) throw new Error('invalid attribute:' + u9njc);
        this[this['length']++] = {
            'qName': u9njc,
            'value': juvngd,
            'offset': y8f9l
        };
    },
    'length': 0x0,
    'getLocalName': function (fn9lcj) {
        return this[fn9lcj]['localName'];
    },
    'getLocator': function (clf9n) {
        return this[clf9n]['locator'];
    },
    'getQName': function (wk631) {
        return this[wk631]['qName'];
    },
    'getURI': function (ucjnfv) {
        return this[ucjnfv]['uri'];
    },
    'getValue': function (whbe) {
        return this[whbe]['value'];
    }
}, xxg4div({}, xxg4div['prototype']) instanceof xxg4div || (xxg4div = function (ios4mx, xm5) {
    function ehq0p() {}
    ehq0p['prototype'] = xm5, ehq0p = new ehq0p();
    for (xm5 in ios4mx) ehq0p[xm5] = ios4mx[xm5];
    return ehq0p;
}), exports['XMLReader'] = xyl97$8;