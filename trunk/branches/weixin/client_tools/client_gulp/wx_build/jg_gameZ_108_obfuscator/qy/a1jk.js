var _j = wx.n$;
function _qnlbt81() {}
function _qykgj5(siwbr, ucka9, pwf62r, kjy, $x5) {
    function a9vkg(nq1bst) {
        if (nq1bst > 0xffff) {
            nq1bst -= 0x10000;
            var k9uva = 0xd800 + (nq1bst >> 0xa),
                fpw6r2 = 0xdc00 + (0x3ff & nq1bst);
            return String['fromCharCode'](k9uva, fpw6r2);
        }
        return String['fromCharCode'](nq1bst);
    }
    function ayhgk(y5gjk) {
        var _mc7vo = y5gjk['slice'](0x1, -0x1);
        return _mc7vo in pwf62r ? pwf62r[_mc7vo] : '#' === _mc7vo['charAt'](0x0) ? a9vkg(parseInt(_mc7vo['substr'](0x1)['replace']('x', '0x'))) : ($x5['error']('entity not found:' + y5gjk), y5gjk);
    }
    function _70p36(yxzhe) {
        if (yxzhe > bnq1t) {
            var sirbqw = siwbr['substring'](bnq1t, yxzhe)['replace'](/&#?\w+;/g, ayhgk);
            yghkja && ln1b(bnq1t), kjy['characters'](sirbqw, 0x0, yxzhe - bnq1t), bnq1t = yxzhe;
        }
    }
    function ln1b(irswf, bqnti) {
        for (; irswf >= k5gyh && (bqnti = kgjua9['exec'](siwbr));) p027 = bqnti['index'], k5gyh = p027 + bqnti[0x0]['length'], yghkja['lineNumber']++;
        yghkja['columnNumber'] = irswf - p027 + 0x1;
    }
    for (var p027 = 0x0, k5gyh = 0x0, kgjua9 = /.*(?:\r\n?|\n)|.*$/g, yghkja = kjy['locator'], st1bnq = [{ 'currentNSMap': ucka9 }], s81nb = {}, bnq1t = 0x0;;) {
        try {
            var h5jexy = siwbr['indexOf']('<', bnq1t);
            if (0x0 > h5jexy) {
                if (!siwbr['substr'](bnq1t)['match'](/^\s*$/)) {
                    var bisqr = kjy['doc'],
                        wr26p = bisqr['createTextNode'](siwbr['substr'](bnq1t));
                    bisqr['appendChild'](wr26p), kjy['currentElement'] = wr26p;
                }
                return;
            }
            switch (h5jexy > bnq1t && _70p36(h5jexy), siwbr['charAt'](h5jexy + 0x1)) {
                case '/':
                    var fwpri2 = siwbr['indexOf']('>', h5jexy + 0x3),
                        qsbwt = siwbr['substring'](h5jexy + 0x2, fwpri2),
                        geh = st1bnq['pop']();
                    0x0 > fwpri2 ? (qsbwt = siwbr['substring'](h5jexy + 0x2)['replace'](/[\s<].*/, ''), $x5['error']('end tag name: ' + qsbwt + ' is not complete:' + geh['tagName']), fwpri2 = h5jexy + 0x1 + qsbwt['length']) : qsbwt['match'](/\s</) && (qsbwt = qsbwt['replace'](/[\s<].*/, ''), $x5['error']('end tag name: ' + qsbwt + ' maybe not complete'), fwpri2 = h5jexy + 0x1 + qsbwt['length']);
                    var o_cm9 = geh['localNSMap'],
                        he5jg = geh['tagName'] == qsbwt,
                        va9ugk = he5jg || geh['tagName'] && geh['tagName']['toLowerCase']() == qsbwt['toLowerCase']();
                    if (va9ugk) {
                        if (kjy['endElement'](geh['uri'], geh['localName'], qsbwt), o_cm9) {
                            for (var n1dt in o_cm9) kjy['endPrefixMapping'](n1dt);
                        }
                        he5jg || $x5['fatalError']('end tag name: ' + qsbwt + ' is not match the current start tagName:' + geh['tagName']);
                    } else st1bnq['push'](geh);
                    fwpri2++;
                    break;
                case '?':
                    yghkja && ln1b(h5jexy), fwpri2 = _qgj9kua(siwbr, h5jexy, kjy);
                    break;
                case '!':
                    yghkja && ln1b(h5jexy), fwpri2 = _qbtsiwq(siwbr, h5jexy, kjy, $x5);
                    break;
                default:
                    yghkja && ln1b(h5jexy);
                    var hge5 = new _qu9oc(),
                        b81ntl = st1bnq[st1bnq['length'] - 0x1]['currentNSMap'],
                        fwpri2 = _qwf2p6(siwbr, h5jexy, hge5, b81ntl, ayhgk, $x5),
                        p7302 = hge5['length'];
                    if (!hge5['closed'] && _qgkuaj9(siwbr, fwpri2, hge5['tagName'], s81nb) && (hge5['closed'] = !0x0, pwf62r['nbsp'] || $x5['warning']('unclosed xml attribute')), yghkja && p7302) {
                        for (var u9mvoc = _qj9uak(yghkja, {}), _630 = 0x0; p7302 > _630; _630++) {
                            var siwbqt = hge5[_630];
                            ln1b(siwbqt['offset']), siwbqt['locator'] = _qj9uak(yghkja, {});
                        }
                        kjy['locator'] = u9mvoc, _qfq2ri(hge5, kjy, b81ntl) && st1bnq['push'](hge5), kjy['locator'] = yghkja;
                    } else _qfq2ri(hge5, kjy, b81ntl) && st1bnq['push'](hge5);
                    'http://www.w3.org/1999/xhtml' !== hge5['uri'] || hge5['closed'] ? fwpri2++ : fwpri2 = _qkuagyj(siwbr, fwpri2, hge5['tagName'], ayhgk, kjy);
            }
        } catch (uvcm9o) {
            $x5['error']('element parse error: ' + uvcm9o), fwpri2 = -0x1;
        }
        fwpri2 > bnq1t ? bnq1t = fwpri2 : _70p36(Math['max'](h5jexy, bnq1t) + 0x1);
    }
}
function _qj9uak(kja9, ahjkgy) {
    return ahjkgy['lineNumber'] = kja9['lineNumber'], ahjkgy['columnNumber'] = kja9['columnNumber'], ahjkgy;
}
function _qwf2p6(iwsrq, qwfris, fiq2, p3026, yajhkg, siqfw) {
    for (var z5e4x, e5xhy, uom9v = ++qwfris, ocmv_9 = _qintb;;) {
        var xe4 = iwsrq['charAt'](uom9v);
        switch (xe4) {
            case '=':
                if (ocmv_9 === _qyjkhag) z5e4x = iwsrq['slice'](qwfris, uom9v), ocmv_9 = _qp_60;else {
                    if (ocmv_9 !== _qiqntbs) throw new Error('attribute equal must after attrName');
                    ocmv_9 = _qp_60;
                }
                break;
            case '\x27':
            case '\x22':
                if (ocmv_9 === _qp_60 || ocmv_9 === _qyjkhag) {
                    if (ocmv_9 === _qyjkhag && (siqfw['warning']('attribute value must after "="'), z5e4x = iwsrq['slice'](qwfris, uom9v)), qwfris = uom9v + 0x1, uom9v = iwsrq['indexOf'](xe4, qwfris), !(uom9v > 0x0)) throw new Error('attribute value no end \'' + xe4 + '\' match');
                    e5xhy = iwsrq['slice'](qwfris, uom9v)['replace'](/&#?\w+;/g, yajhkg), fiq2['add'](z5e4x, e5xhy, qwfris - 0x1), ocmv_9 = _qk5h;
                } else {
                    if (ocmv_9 != _qc9avum) throw new Error('attribute value must after "="');
                    e5xhy = iwsrq['slice'](qwfris, uom9v)['replace'](/&#?\w+;/g, yajhkg), fiq2['add'](z5e4x, e5xhy, qwfris), siqfw['warning']('attribute "' + z5e4x + '" missed start quot(' + xe4 + ')!!'), qwfris = uom9v + 0x1, ocmv_9 = _qk5h;
                }
                break;
            case '/':
                switch (ocmv_9) {
                    case _qintb:
                        fiq2['setTagName'](iwsrq['slice'](qwfris, uom9v));
                    case _qk5h:
                    case _qk9jgau:
                    case _qg9uavk:
                        ocmv_9 = _qg9uavk, fiq2['closed'] = !0x0;
                    case _qc9avum:
                    case _qyjkhag:
                    case _qiqntbs:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return siqfw['error']('unexpected end of input'), ocmv_9 == _qintb && fiq2['setTagName'](iwsrq['slice'](qwfris, uom9v)), uom9v;
            case '>':
                switch (ocmv_9) {
                    case _qintb:
                        fiq2['setTagName'](iwsrq['slice'](qwfris, uom9v));
                    case _qk5h:
                    case _qk9jgau:
                    case _qg9uavk:
                        break;
                    case _qc9avum:
                    case _qyjkhag:
                        e5xhy = iwsrq['slice'](qwfris, uom9v), '/' === e5xhy['slice'](-0x1) && (fiq2['closed'] = !0x0, e5xhy = e5xhy['slice'](0x0, -0x1));
                    case _qiqntbs:
                        ocmv_9 === _qiqntbs && (e5xhy = z5e4x), ocmv_9 == _qc9avum ? (siqfw['warning']('attribute "' + e5xhy + '" missed quot(")!!'), fiq2['add'](z5e4x, e5xhy['replace'](/&#?\w+;/g, yajhkg), qwfris)) : ('http://www.w3.org/1999/xhtml' === p3026[''] && e5xhy['match'](/^(?:disabled|checked|selected)$/i) || siqfw['warning']('attribute "' + e5xhy + '" missed value!! "' + e5xhy + '" instead!!'), fiq2['add'](e5xhy, e5xhy, qwfris));
                        break;
                    case _qp_60:
                        throw new Error('attribute value missed!!');
                }
                return uom9v;
            case '\u0080':
                xe4 = '\x20';
            default:
                if ('\x20' >= xe4) switch (ocmv_9) {
                    case _qintb:
                        fiq2['setTagName'](iwsrq['slice'](qwfris, uom9v)), ocmv_9 = _qk9jgau;
                        break;
                    case _qyjkhag:
                        z5e4x = iwsrq['slice'](qwfris, uom9v), ocmv_9 = _qiqntbs;
                        break;
                    case _qc9avum:
                        var e5xhy = iwsrq['slice'](qwfris, uom9v)['replace'](/&#?\w+;/g, yajhkg);
                        siqfw['warning']('attribute "' + e5xhy + '" missed quot(")!!'), fiq2['add'](z5e4x, e5xhy, qwfris);
                    case _qk5h:
                        ocmv_9 = _qk9jgau;
                } else switch (ocmv_9) {
                    case _qiqntbs:
                        {
                            fiq2['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === p3026[''] && z5e4x['match'](/^(?:disabled|checked|selected)$/i) || siqfw['warning']('attribute "' + z5e4x + '" missed value!! "' + z5e4x + '" instead2!!'), fiq2['add'](z5e4x, z5e4x, qwfris), qwfris = uom9v, ocmv_9 = _qyjkhag;
                        break;
                    case _qk5h:
                        siqfw['warning']('attribute space is required"' + z5e4x + '\x22!!');
                    case _qk9jgau:
                        ocmv_9 = _qyjkhag, qwfris = uom9v;
                        break;
                    case _qp_60:
                        ocmv_9 = _qc9avum, qwfris = uom9v;
                        break;
                    case _qg9uavk:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        uom9v++;
    }
}
function _qfq2ri(wfr2qi, wfp26r, rqi2wf) {
    for (var cu9ovm = wfr2qi['tagName'], b18st = null, b1ts = wfr2qi['length']; b1ts--;) {
        var moc9_ = wfr2qi[b1ts],
            tbl18 = moc9_['qName'],
            t1dln8 = moc9_['value'],
            sqrfw = tbl18['indexOf'](':');
        if (sqrfw > 0x0) var p3_6 = moc9_['prefix'] = tbl18['slice'](0x0, sqrfw),
            m9ovc_ = tbl18['slice'](sqrfw + 0x1),
            m_o370 = 'xmlns' === p3_6 && m9ovc_;else m9ovc_ = tbl18, p3_6 = null, m_o370 = 'xmlns' === tbl18 && '';
        moc9_['localName'] = m9ovc_, m_o370 !== !0x1 && (null == b18st && (b18st = {}, _qbqirsw(rqi2wf, rqi2wf = {})), rqi2wf[m_o370] = b18st[m_o370] = t1dln8, moc9_['uri'] = 'http://www.w3.org/2000/xmlns/', wfp26r['startPrefixMapping'](m_o370, t1dln8));
    }
    for (var b1ts = wfr2qi['length']; b1ts--;) {
        moc9_ = wfr2qi[b1ts];
        var p3_6 = moc9_['prefix'];
        p3_6 && ('xml' === p3_6 && (moc9_['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== p3_6 && (moc9_['uri'] = rqi2wf[p3_6 || '']));
    }
    var sqrfw = cu9ovm['indexOf'](':');
    sqrfw > 0x0 ? (p3_6 = wfr2qi['prefix'] = cu9ovm['slice'](0x0, sqrfw), m9ovc_ = wfr2qi['localName'] = cu9ovm['slice'](sqrfw + 0x1)) : (p3_6 = null, m9ovc_ = wfr2qi['localName'] = cu9ovm);
    var uk9vg = wfr2qi['uri'] = rqi2wf[p3_6 || ''];
    if (wfp26r['startElement'](uk9vg, m9ovc_, cu9ovm, wfr2qi), !wfr2qi['closed']) return wfr2qi['currentNSMap'] = rqi2wf, wfr2qi['localNSMap'] = b18st, !0x0;
    if (wfp26r['endElement'](uk9vg, m9ovc_, cu9ovm), b18st) {
        for (p3_6 in b18st) wfp26r['endPrefixMapping'](p3_6);
    }
}
function _qkuagyj(vomc, ykg5hj, kjg9u, y5hxze, jykh) {
    if (/^(?:script|textarea)$/i['test'](kjg9u)) {
        var hgjy5 = vomc['indexOf']('</' + kjg9u + '>', ykg5hj),
            c_om7v = vomc['substring'](ykg5hj + 0x1, hgjy5);
        if (/[&<]/['test'](c_om7v)) return (/^script$/i['test'](kjg9u) ? (jykh['characters'](c_om7v, 0x0, c_om7v['length']), hgjy5) : (c_om7v = c_om7v['replace'](/&#?\w+;/g, y5hxze), jykh['characters'](c_om7v, 0x0, c_om7v['length']), hgjy5)
        );
    }
    return ykg5hj + 0x1;
}
function _qgkuaj9(kyh, biqsnt, f2063p, z$xe5) {
    var vom_9c = z$xe5[f2063p];
    return null == vom_9c && (vom_9c = kyh['lastIndexOf']('</' + f2063p + '>'), biqsnt > vom_9c && (vom_9c = kyh['lastIndexOf']('</' + f2063p)), z$xe5[f2063p] = vom_9c), biqsnt > vom_9c;
}
function _qbqirsw(d1l8n, wirfp2) {
    for (var voc9_ in d1l8n) wirfp2[voc9_] = d1l8n[voc9_];
}
function _qbtsiwq(xh5yz, itsbqn, p76_3, vm9co) {
    var jh = xh5yz['charAt'](itsbqn + 0x2);
    switch (jh) {
        case '-':
            if ('-' === xh5yz['charAt'](itsbqn + 0x3)) {
                var $h5zx = xh5yz['indexOf']('-->', itsbqn + 0x4);
                return $h5zx > itsbqn ? (p76_3['comment'](xh5yz, itsbqn + 0x4, $h5zx - itsbqn - 0x4), $h5zx + 0x3) : (vm9co['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == xh5yz['substr'](itsbqn + 0x3, 0x6)) {
                var $h5zx = xh5yz['indexOf'](']]>', itsbqn + 0x9);
                return p76_3['startCDATA'](), p76_3['characters'](xh5yz, itsbqn + 0x9, $h5zx - itsbqn - 0x9), p76_3['endCDATA'](), $h5zx + 0x3;
            }
            var v7c_ = _qntld8(xh5yz, itsbqn),
                istnbq = v7c_['length'];
            if (istnbq > 0x1 && /!doctype/i['test'](v7c_[0x0][0x0])) {
                var o_mcv = v7c_[0x1][0x0],
                    yjkhga = istnbq > 0x3 && /^public$/i['test'](v7c_[0x2][0x0]) && v7c_[0x3][0x0],
                    wqf2r = istnbq > 0x4 && v7c_[0x4][0x0],
                    g9ukva = v7c_[istnbq - 0x1];
                return p76_3['startDTD'](o_mcv, yjkhga && yjkhga['replace'](/^(['"])(.*?)\1$/, '$2'), wqf2r && wqf2r['replace'](/^(['"])(.*?)\1$/, '$2')), p76_3['endDTD'](), g9ukva['index'] + g9ukva[0x0]['length'];
            }
    }
    return -0x1;
}
function _qgj9kua(p0f62, m730o_, o9_mc) {
    var n81ltd = p0f62['indexOf']('?>', m730o_);
    if (n81ltd) {
        var nt1 = p0f62['substring'](m730o_, n81ltd)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (nt1) {
            {
                nt1[0x0]['length'];
            }
            return o9_mc['processingInstruction'](nt1[0x1], nt1[0x2]), n81ltd + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function _qu9oc() {}
function _qc_o9mv(moc_7v, tsqbwi) {
    return moc_7v['__proto__'] = tsqbwi, moc_7v;
}
function _qntld8(rqwsb, _3706) {
    var mo37c,
        cvm9uo = [],
        uoc = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (uoc['lastIndex'] = _3706, uoc['exec'](rqwsb); mo37c = uoc['exec'](rqwsb);) if (cvm9uo['push'](mo37c), mo37c[0x1]) return cvm9uo;
}
var _qc_vmo7 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    _qugkv9a = new RegExp('[\\-\\.0-9' + _qc_vmo7['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    _qfi2wqr = new RegExp('^' + _qc_vmo7['source'] + _qugkv9a['source'] + '*(?::' + _qc_vmo7['source'] + _qugkv9a['source'] + '*)?$'),
    _qintb = 0x0,
    _qyjkhag = 0x1,
    _qiqntbs = 0x2,
    _qp_60 = 0x3,
    _qc9avum = 0x4,
    _qk5h = 0x5,
    _qk9jgau = 0x6,
    _qg9uavk = 0x7;
_qnlbt81['prototype'] = {
    'parse': function (mac9vu, ezx45$, o7_3m) {
        var rq2fwi = this['domBuilder'];
        rq2fwi['startDocument'](), _qbqirsw(ezx45$, ezx45$ = {}), _qykgj5(mac9vu, ezx45$, o7_3m, rq2fwi, this['errorHandler']), rq2fwi['endDocument']();
    }
}, _qu9oc['prototype'] = {
    'setTagName': function (v_omc7) {
        if (!_qfi2wqr['test'](v_omc7)) throw new Error('invalid tagName:' + v_omc7);
        this['tagName'] = v_omc7;
    },
    'add': function (c_m3, kyj5gh, gjyhe5) {
        if (!_qfi2wqr['test'](c_m3)) throw new Error('invalid attribute:' + c_m3);
        this[this['length']++] = {
            'qName': c_m3,
            'value': kyj5gh,
            'offset': gjyhe5
        };
    },
    'length': 0x0,
    'getLocalName': function (yzx5h) {
        return this[yzx5h]['localName'];
    },
    'getLocator': function (akugv9) {
        return this[akugv9]['locator'];
    },
    'getQName': function (hx$ze) {
        return this[hx$ze]['qName'];
    },
    'getURI': function (cvu) {
        return this[cvu]['uri'];
    },
    'getValue': function (auk9gv) {
        return this[auk9gv]['value'];
    }
}, _qc_o9mv({}, _qc_o9mv['prototype']) instanceof _qc_o9mv || (_qc_o9mv = function (_mvc, zy5xeh) {
    function cuamv() {}
    cuamv['prototype'] = zy5xeh, cuamv = new cuamv();
    for (zy5xeh in _mvc) cuamv[zy5xeh] = _mvc[zy5xeh];
    return cuamv;
}), exports['XMLReader'] = _qnlbt81;