var _ = wx.y$;
function _df7moh() {}
function _dz36a(zr396x, d4s0, tohfm, qvkj2_, jyk_) {
    function z96r3x(db9zra) {
        if (db9zra > 0xffff) {
            db9zra -= 0x10000;
            var f7homp = 0xd800 + (db9zra >> 0xa),
                z36a9 = 0xdc00 + (0x3ff & db9zra);
            return String['fromCharCode'](f7homp, z36a9);
        }
        return String['fromCharCode'](db9zra);
    }
    function mpu7hf(_i8vj) {
        var e8gl1n = _i8vj['slice'](0x1, -0x1);
        return e8gl1n in tohfm ? tohfm[e8gl1n] : '#' === e8gl1n['charAt'](0x0) ? z96r3x(parseInt(e8gl1n['substr'](0x1)['replace']('x', '0x'))) : (jyk_['error']('entity not found:' + _i8vj), _i8vj);
    }
    function i1gev(w1gl) {
        if (w1gl > mh7pfu) {
            var mth = zr396x['substring'](mh7pfu, w1gl)['replace'](/&#?\w+;/g, mpu7hf);
            omt5f && r3z9x6(mh7pfu), qvkj2_['characters'](mth, 0x0, w1gl - mh7pfu), mh7pfu = w1gl;
        }
    }
    function r3z9x6(igen1, $othm) {
        for (; igen1 >= k2_qvj && ($othm = p7y2cu['exec'](zr396x));) hmcu7 = $othm['index'], k2_qvj = hmcu7 + $othm[0x0]['length'], omt5f['lineNumber']++;
        omt5f['columnNumber'] = igen1 - hmcu7 + 0x1;
    }
    for (var hmcu7 = 0x0, k2_qvj = 0x0, p7y2cu = /.*(?:\r\n?|\n)|.*$/g, omt5f = qvkj2_['locator'], k2y = [{ 'currentNSMap': d4s0 }], hcyup7 = {}, mh7pfu = 0x0;;) {
        try {
            var i8ve1_ = zr396x['indexOf']('<', mh7pfu);
            if (0x0 > i8ve1_) {
                if (!zr396x['substr'](mh7pfu)['match'](/^\s*$/)) {
                    var m$fhot = qvkj2_['doc'],
                        kyucp = m$fhot['createTextNode'](zr396x['substr'](mh7pfu));
                    m$fhot['appendChild'](kyucp), qvkj2_['currentElement'] = kyucp;
                }
                return;
            }
            switch (i8ve1_ > mh7pfu && i1gev(i8ve1_), zr396x['charAt'](i8ve1_ + 0x1)) {
                case '/':
                    var muhpf = zr396x['indexOf']('>', i8ve1_ + 0x3),
                        i8qv = zr396x['substring'](i8ve1_ + 0x2, muhpf),
                        yc2kj = k2y['pop']();
                    0x0 > muhpf ? (i8qv = zr396x['substring'](i8ve1_ + 0x2)['replace'](/[\s<].*/, ''), jyk_['error']('end tag name: ' + i8qv + ' is not complete:' + yc2kj['tagName']), muhpf = i8ve1_ + 0x1 + i8qv['length']) : i8qv['match'](/\s</) && (i8qv = i8qv['replace'](/[\s<].*/, ''), jyk_['error']('end tag name: ' + i8qv + ' maybe not complete'), muhpf = i8ve1_ + 0x1 + i8qv['length']);
                    var z9ard = yc2kj['localNSMap'],
                        ph7om = yc2kj['tagName'] == i8qv,
                        y_kqj = ph7om || yc2kj['tagName'] && yc2kj['tagName']['toLowerCase']() == i8qv['toLowerCase']();
                    if (y_kqj) {
                        if (qvkj2_['endElement'](yc2kj['uri'], yc2kj['localName'], i8qv), z9ard) {
                            for (var nl1eg in z9ard) qvkj2_['endPrefixMapping'](nl1eg);
                        }
                        ph7om || jyk_['fatalError']('end tag name: ' + i8qv + ' is not match the current start tagName:' + yc2kj['tagName']);
                    } else k2y['push'](yc2kj);
                    muhpf++;
                    break;
                case '?':
                    omt5f && r3z9x6(i8ve1_), muhpf = _dd40ab(zr396x, i8ve1_, qvkj2_);
                    break;
                case '!':
                    omt5f && r3z9x6(i8ve1_), muhpf = _dszad9(zr396x, i8ve1_, qvkj2_, jyk_);
                    break;
                default:
                    omt5f && r3z9x6(i8ve1_);
                    var jy2q_ = new _da93z6(),
                        iv1g8e = k2y[k2y['length'] - 0x1]['currentNSMap'],
                        muhpf = _d_vk(zr396x, i8ve1_, jy2q_, iv1g8e, mpu7hf, jyk_),
                        eng81 = jy2q_['length'];
                    if (!jy2q_['closed'] && _dkqyj2(zr396x, muhpf, jy2q_['tagName'], hcyup7) && (jy2q_['closed'] = !0x0, tohfm['nbsp'] || jyk_['warning']('unclosed xml attribute')), omt5f && eng81) {
                        for (var hf7ot = _da0db4s(omt5f, {}), z9d3 = 0x0; eng81 > z9d3; z9d3++) {
                            var $tm5 = jy2q_[z9d3];
                            r3z9x6($tm5['offset']), $tm5['locator'] = _da0db4s(omt5f, {});
                        }
                        qvkj2_['locator'] = hf7ot, _ducyp27(jy2q_, qvkj2_, iv1g8e) && k2y['push'](jy2q_), qvkj2_['locator'] = omt5f;
                    } else _ducyp27(jy2q_, qvkj2_, iv1g8e) && k2y['push'](jy2q_);
                    'http://www.w3.org/1999/xhtml' !== jy2q_['uri'] || jy2q_['closed'] ? muhpf++ : muhpf = _djqkyc(zr396x, muhpf, jy2q_['tagName'], mpu7hf, qvkj2_);
            }
        } catch (jcy2q) {
            jyk_['error']('element parse error: ' + jcy2q), muhpf = -0x1;
        }
        muhpf > mh7pfu ? mh7pfu = muhpf : i1gev(Math['max'](i8ve1_, mh7pfu) + 0x1);
    }
}
function _da0db4s(r693z, kvqji) {
    return kvqji['lineNumber'] = r693z['lineNumber'], kvqji['columnNumber'] = r693z['columnNumber'], kvqji;
}
function _d_vk(s54bd, cm, o5f$t4, l18gn, yjkcq2, oht$mf) {
    for (var hcpuy7, of45$t, sbza = ++cm, i18evg = _dq_k;;) {
        var bs0 = s54bd['charAt'](sbza);
        switch (bs0) {
            case '=':
                if (i18evg === _deqiv8) hcpuy7 = s54bd['slice'](cm, sbza), i18evg = _dm$5o;else {
                    if (i18evg !== _dard3z) throw new Error('attribute equal must after attrName');
                    i18evg = _dm$5o;
                }
                break;
            case '\x27':
            case '\x22':
                if (i18evg === _dm$5o || i18evg === _deqiv8) {
                    if (i18evg === _deqiv8 && (oht$mf['warning']('attribute value must after "="'), hcpuy7 = s54bd['slice'](cm, sbza)), cm = sbza + 0x1, sbza = s54bd['indexOf'](bs0, cm), !(sbza > 0x0)) throw new Error('attribute value no end \'' + bs0 + '\' match');
                    of45$t = s54bd['slice'](cm, sbza)['replace'](/&#?\w+;/g, yjkcq2), o5f$t4['add'](hcpuy7, of45$t, cm - 0x1), i18evg = _dyp72u;
                } else {
                    if (i18evg != _dge1nw) throw new Error('attribute value must after "="');
                    of45$t = s54bd['slice'](cm, sbza)['replace'](/&#?\w+;/g, yjkcq2), o5f$t4['add'](hcpuy7, of45$t, cm), oht$mf['warning']('attribute "' + hcpuy7 + '" missed start quot(' + bs0 + ')!!'), cm = sbza + 0x1, i18evg = _dyp72u;
                }
                break;
            case '/':
                switch (i18evg) {
                    case _dq_k:
                        o5f$t4['setTagName'](s54bd['slice'](cm, sbza));
                    case _dyp72u:
                    case _dcpu7h:
                    case _dyuh7cp:
                        i18evg = _dyuh7cp, o5f$t4['closed'] = !0x0;
                    case _dge1nw:
                    case _deqiv8:
                    case _dard3z:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return oht$mf['error']('unexpected end of input'), i18evg == _dq_k && o5f$t4['setTagName'](s54bd['slice'](cm, sbza)), sbza;
            case '>':
                switch (i18evg) {
                    case _dq_k:
                        o5f$t4['setTagName'](s54bd['slice'](cm, sbza));
                    case _dyp72u:
                    case _dcpu7h:
                    case _dyuh7cp:
                        break;
                    case _dge1nw:
                    case _deqiv8:
                        of45$t = s54bd['slice'](cm, sbza), '/' === of45$t['slice'](-0x1) && (o5f$t4['closed'] = !0x0, of45$t = of45$t['slice'](0x0, -0x1));
                    case _dard3z:
                        i18evg === _dard3z && (of45$t = hcpuy7), i18evg == _dge1nw ? (oht$mf['warning']('attribute "' + of45$t + '" missed quot(")!!'), o5f$t4['add'](hcpuy7, of45$t['replace'](/&#?\w+;/g, yjkcq2), cm)) : ('http://www.w3.org/1999/xhtml' === l18gn[''] && of45$t['match'](/^(?:disabled|checked|selected)$/i) || oht$mf['warning']('attribute "' + of45$t + '" missed value!! "' + of45$t + '" instead!!'), o5f$t4['add'](of45$t, of45$t, cm));
                        break;
                    case _dm$5o:
                        throw new Error('attribute value missed!!');
                }
                return sbza;
            case '\u0080':
                bs0 = '\x20';
            default:
                if ('\x20' >= bs0) switch (i18evg) {
                    case _dq_k:
                        o5f$t4['setTagName'](s54bd['slice'](cm, sbza)), i18evg = _dcpu7h;
                        break;
                    case _deqiv8:
                        hcpuy7 = s54bd['slice'](cm, sbza), i18evg = _dard3z;
                        break;
                    case _dge1nw:
                        var of45$t = s54bd['slice'](cm, sbza)['replace'](/&#?\w+;/g, yjkcq2);
                        oht$mf['warning']('attribute "' + of45$t + '" missed quot(")!!'), o5f$t4['add'](hcpuy7, of45$t, cm);
                    case _dyp72u:
                        i18evg = _dcpu7h;
                } else switch (i18evg) {
                    case _dard3z:
                        {
                            o5f$t4['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === l18gn[''] && hcpuy7['match'](/^(?:disabled|checked|selected)$/i) || oht$mf['warning']('attribute "' + hcpuy7 + '" missed value!! "' + hcpuy7 + '" instead2!!'), o5f$t4['add'](hcpuy7, hcpuy7, cm), cm = sbza, i18evg = _deqiv8;
                        break;
                    case _dyp72u:
                        oht$mf['warning']('attribute space is required"' + hcpuy7 + '\x22!!');
                    case _dcpu7h:
                        i18evg = _deqiv8, cm = sbza;
                        break;
                    case _dm$5o:
                        i18evg = _dge1nw, cm = sbza;
                        break;
                    case _dyuh7cp:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        sbza++;
    }
}
function _ducyp27(z9adr, igne, cy7hp) {
    for (var v8gi = z9adr['tagName'], hmpcu7 = null, yjqc2 = z9adr['length']; yjqc2--;) {
        var sab04d = z9adr[yjqc2],
            t7oh = sab04d['qName'],
            ofm7t = sab04d['value'],
            mfh7u = t7oh['indexOf'](':');
        if (mfh7u > 0x0) var pf7mho = sab04d['prefix'] = t7oh['slice'](0x0, mfh7u),
            $054b = t7oh['slice'](mfh7u + 0x1),
            z9x6r3 = 'xmlns' === pf7mho && $054b;else $054b = t7oh, pf7mho = null, z9x6r3 = 'xmlns' === t7oh && '';
        sab04d['localName'] = $054b, z9x6r3 !== !0x1 && (null == hmpcu7 && (hmpcu7 = {}, _dq2kjyc(cy7hp, cy7hp = {})), cy7hp[z9x6r3] = hmpcu7[z9x6r3] = ofm7t, sab04d['uri'] = 'http://www.w3.org/2000/xmlns/', igne['startPrefixMapping'](z9x6r3, ofm7t));
    }
    for (var yjqc2 = z9adr['length']; yjqc2--;) {
        sab04d = z9adr[yjqc2];
        var pf7mho = sab04d['prefix'];
        pf7mho && ('xml' === pf7mho && (sab04d['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== pf7mho && (sab04d['uri'] = cy7hp[pf7mho || '']));
    }
    var mfh7u = v8gi['indexOf'](':');
    mfh7u > 0x0 ? (pf7mho = z9adr['prefix'] = v8gi['slice'](0x0, mfh7u), $054b = z9adr['localName'] = v8gi['slice'](mfh7u + 0x1)) : (pf7mho = null, $054b = z9adr['localName'] = v8gi);
    var az9r = z9adr['uri'] = cy7hp[pf7mho || ''];
    if (igne['startElement'](az9r, $054b, v8gi, z9adr), !z9adr['closed']) return z9adr['currentNSMap'] = cy7hp, z9adr['localNSMap'] = hmpcu7, !0x0;
    if (igne['endElement'](az9r, $054b, v8gi), hmpcu7) {
        for (pf7mho in hmpcu7) igne['endPrefixMapping'](pf7mho);
    }
}
function _djqkyc(_ie18, dsa40b, dab9rz, n8ge, d3zar) {
    if (/^(?:script|textarea)$/i['test'](dab9rz)) {
        var phomf7 = _ie18['indexOf']('</' + dab9rz + '>', dsa40b),
            jivqk = _ie18['substring'](dsa40b + 0x1, phomf7);
        if (/[&<]/['test'](jivqk)) return (/^script$/i['test'](dab9rz) ? (d3zar['characters'](jivqk, 0x0, jivqk['length']), phomf7) : (jivqk = jivqk['replace'](/&#?\w+;/g, n8ge), d3zar['characters'](jivqk, 0x0, jivqk['length']), phomf7)
        );
    }
    return dsa40b + 0x1;
}
function _dkqyj2(xz3r69, adrbz9, h7cmup, o05$t) {
    var zx36 = o05$t[h7cmup];
    return null == zx36 && (zx36 = xz3r69['lastIndexOf']('</' + h7cmup + '>'), adrbz9 > zx36 && (zx36 = xz3r69['lastIndexOf']('</' + h7cmup)), o05$t[h7cmup] = zx36), adrbz9 > zx36;
}
function _dq2kjyc(ky2_qj, kucj2) {
    for (var k2up in ky2_qj) kucj2[k2up] = ky2_qj[k2up];
}
function _dszad9(d93ar, jkv2_q, cy7p, yjckq2) {
    var bd4a0 = d93ar['charAt'](jkv2_q + 0x2);
    switch (bd4a0) {
        case '-':
            if ('-' === d93ar['charAt'](jkv2_q + 0x3)) {
                var uyp = d93ar['indexOf']('-->', jkv2_q + 0x4);
                return uyp > jkv2_q ? (cy7p['comment'](d93ar, jkv2_q + 0x4, uyp - jkv2_q - 0x4), uyp + 0x3) : (yjckq2['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == d93ar['substr'](jkv2_q + 0x3, 0x6)) {
                var uyp = d93ar['indexOf'](']]>', jkv2_q + 0x9);
                return cy7p['startCDATA'](), cy7p['characters'](d93ar, jkv2_q + 0x9, uyp - jkv2_q - 0x9), cy7p['endCDATA'](), uyp + 0x3;
            }
            var zad93 = _dtohf7m(d93ar, jkv2_q),
                z0 = zad93['length'];
            if (z0 > 0x1 && /!doctype/i['test'](zad93[0x0][0x0])) {
                var e_1vi = zad93[0x1][0x0],
                    as04d = z0 > 0x3 && /^public$/i['test'](zad93[0x2][0x0]) && zad93[0x3][0x0],
                    ykqj2_ = z0 > 0x4 && zad93[0x4][0x0],
                    omtf = zad93[z0 - 0x1];
                return cy7p['startDTD'](e_1vi, as04d && as04d['replace'](/^(['"])(.*?)\1$/, '$2'), ykqj2_ && ykqj2_['replace'](/^(['"])(.*?)\1$/, '$2')), cy7p['endDTD'](), omtf['index'] + omtf[0x0]['length'];
            }
    }
    return -0x1;
}
function _dd40ab(i_eqv, m5tfo, u7) {
    var h$tmfo = i_eqv['indexOf']('?>', m5tfo);
    if (h$tmfo) {
        var v1g8ie = i_eqv['substring'](m5tfo, h$tmfo)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (v1g8ie) {
            {
                v1g8ie[0x0]['length'];
            }
            return u7['processingInstruction'](v1g8ie[0x1], v1g8ie[0x2]), h$tmfo + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function _da93z6() {}
function _dzd9ra(i_v8qj, m$ohft) {
    return i_v8qj['__proto__'] = m$ohft, i_v8qj;
}
function _dtohf7m(qkyj2_, om5f) {
    var fo4t5$,
        fm$tho = [],
        evg1i8 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (evg1i8['lastIndex'] = om5f, evg1i8['exec'](qkyj2_); fo4t5$ = evg1i8['exec'](qkyj2_);) if (fm$tho['push'](fo4t5$), fo4t5$[0x1]) return fm$tho;
}
var _dohmt$f = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    _dup2kc = new RegExp('[\\-\\.0-9' + _dohmt$f['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    _dfot5$ = new RegExp('^' + _dohmt$f['source'] + _dup2kc['source'] + '*(?::' + _dohmt$f['source'] + _dup2kc['source'] + '*)?$'),
    _dq_k = 0x0,
    _deqiv8 = 0x1,
    _dard3z = 0x2,
    _dm$5o = 0x3,
    _dge1nw = 0x4,
    _dyp72u = 0x5,
    _dcpu7h = 0x6,
    _dyuh7cp = 0x7;
_df7moh['prototype'] = {
    'parse': function (v_qk2, x63z, ju2yk) {
        var bd4 = this['domBuilder'];
        bd4['startDocument'](), _dq2kjyc(x63z, x63z = {}), _dz36a(v_qk2, x63z, ju2yk, bd4, this['errorHandler']), bd4['endDocument']();
    }
}, _da93z6['prototype'] = {
    'setTagName': function (yu7ph) {
        if (!_dfot5$['test'](yu7ph)) throw new Error('invalid tagName:' + yu7ph);
        this['tagName'] = yu7ph;
    },
    'add': function (x6z93r, u7pmch, iq_e8) {
        if (!_dfot5$['test'](x6z93r)) throw new Error('invalid attribute:' + x6z93r);
        this[this['length']++] = {
            'qName': x6z93r,
            'value': u7pmch,
            'offset': iq_e8
        };
    },
    'length': 0x0,
    'getLocalName': function (gvei81) {
        return this[gvei81]['localName'];
    },
    'getLocator': function (zb0d) {
        return this[zb0d]['locator'];
    },
    'getQName': function (w1gel) {
        return this[w1gel]['qName'];
    },
    'getURI': function (tof$5) {
        return this[tof$5]['uri'];
    },
    'getValue': function ($5tmf) {
        return this[$5tmf]['value'];
    }
}, _dzd9ra({}, _dzd9ra['prototype']) instanceof _dzd9ra || (_dzd9ra = function (fu7mp, _1i8ev) {
    function p7uhyc() {}
    p7uhyc['prototype'] = _1i8ev, p7uhyc = new p7uhyc();
    for (_1i8ev in fu7mp) p7uhyc[_1i8ev] = fu7mp[_1i8ev];
    return p7uhyc;
}), exports['XMLReader'] = _df7moh;