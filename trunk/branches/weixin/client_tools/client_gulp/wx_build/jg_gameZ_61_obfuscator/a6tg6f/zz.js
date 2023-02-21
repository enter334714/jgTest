var f = wx.$B;
function Sd$j8m() {}
function Sh3wbgv($dktm8, $j2m1d, y3_wg4, g4_y6w, bv53hg) {
    function a7u(tks8f) {
        if (tks8f > 0xffff) {
            tks8f -= 0x10000;
            var $pkt8f = 0xd800 + (tks8f >> 0xa),
                tsikpf = 0xdc00 + (0x3ff & tks8f);
            return String['fromCharCode']($pkt8f, tsikpf);
        }
        return String['fromCharCode'](tks8f);
    }
    function f8d$kt(p8$f) {
        var $dj81m = p8$f['slice'](0x1, -0x1);
        return $dj81m in y3_wg4 ? y3_wg4[$dj81m] : '#' === $dj81m['charAt'](0x0) ? a7u(parseInt($dj81m['substr'](0x1)['replace']('x', '0x'))) : (bv53hg['error']('entity not found:' + p8$f), p8$f);
    }
    function jd$m21(e7xq) {
        if (e7xq > tkfis) {
            var uw4y6 = $dktm8['substring'](tkfis, e7xq)['replace'](/&#?\w+;/g, f8d$kt);
            exqo0n && tfdk8(tkfis), g4_y6w['characters'](uw4y6, 0x0, e7xq - tkfis), tkfis = e7xq;
        }
    }
    function tfdk8(j8m$dt, wy_4g3) {
        for (; j8m$dt >= vw3hbg && (wy_4g3 = m1jd2z['exec']($dktm8));) qn0 = wy_4g3['index'], vw3hbg = qn0 + wy_4g3[0x0]['length'], exqo0n['lineNumber']++;
        exqo0n['columnNumber'] = j8m$dt - qn0 + 0x1;
    }
    for (var qn0 = 0x0, vw3hbg = 0x0, m1jd2z = /.*(?:\r\n?|\n)|.*$/g, exqo0n = g4_y6w['locator'], m8kdt = [{ 'currentNSMap': $j2m1d }], t8kd$ = {}, tkfis = 0x0;;) {
        try {
            var j2md1 = $dktm8['indexOf']('<', tkfis);
            if (0x0 > j2md1) {
                if (!$dktm8['substr'](tkfis)['match'](/^\s*$/)) {
                    var oanxu = g4_y6w['doc'],
                        md$t = oanxu['createTextNode']($dktm8['substr'](tkfis));
                    oanxu['appendChild'](md$t), g4_y6w['currentElement'] = md$t;
                }
                return;
            }
            switch (j2md1 > tkfis && jd$m21(j2md1), $dktm8['charAt'](j2md1 + 0x1)) {
                case '/':
                    var zl12jm = $dktm8['indexOf']('>', j2md1 + 0x3),
                        z15l92 = $dktm8['substring'](j2md1 + 0x2, zl12jm),
                        y_a64u = m8kdt['pop']();
                    0x0 > zl12jm ? (z15l92 = $dktm8['substring'](j2md1 + 0x2)['replace'](/[\s<].*/, ''), bv53hg['error']('end tag name: ' + z15l92 + ' is not complete:' + y_a64u['tagName']), zl12jm = j2md1 + 0x1 + z15l92['length']) : z15l92['match'](/\s</) && (z15l92 = z15l92['replace'](/[\s<].*/, ''), bv53hg['error']('end tag name: ' + z15l92 + ' maybe not complete'), zl12jm = j2md1 + 0x1 + z15l92['length']);
                    var d$jtm8 = y_a64u['localNSMap'],
                        u64wy = y_a64u['tagName'] == z15l92,
                        v59hl = u64wy || y_a64u['tagName'] && y_a64u['tagName']['toLowerCase']() == z15l92['toLowerCase']();
                    if (v59hl) {
                        if (g4_y6w['endElement'](y_a64u['uri'], y_a64u['localName'], z15l92), d$jtm8) {
                            for (var b3vh5g in d$jtm8) g4_y6w['endPrefixMapping'](b3vh5g);
                        }
                        u64wy || bv53hg['fatalError']('end tag name: ' + z15l92 + ' is not match the current start tagName:' + y_a64u['tagName']);
                    } else m8kdt['push'](y_a64u);
                    zl12jm++;
                    break;
                case '?':
                    exqo0n && tfdk8(j2md1), zl12jm = Sftkp8($dktm8, j2md1, g4_y6w);
                    break;
                case '!':
                    exqo0n && tfdk8(j2md1), zl12jm = Stp8fs($dktm8, j2md1, g4_y6w, bv53hg);
                    break;
                default:
                    exqo0n && tfdk8(j2md1);
                    var yw4u6_ = new Sdm$tj(),
                        u6an7o = m8kdt[m8kdt['length'] - 0x1]['currentNSMap'],
                        zl12jm = Sa7uo6($dktm8, j2md1, yw4u6_, u6an7o, f8d$kt, bv53hg),
                        _gw4 = yw4u6_['length'];
                    if (!yw4u6_['closed'] && Snu47a6($dktm8, zl12jm, yw4u6_['tagName'], t8kd$) && (yw4u6_['closed'] = !0x0, y3_wg4['nbsp'] || bv53hg['warning']('unclosed xml attribute')), exqo0n && _gw4) {
                        for (var tp$f8 = Sgw43_y(exqo0n, {}), ptf$8 = 0x0; _gw4 > ptf$8; ptf$8++) {
                            var tp8k$f = yw4u6_[ptf$8];
                            tfdk8(tp8k$f['offset']), tp8k$f['locator'] = Sgw43_y(exqo0n, {});
                        }
                        g4_y6w['locator'] = tp$f8, Sz12(yw4u6_, g4_y6w, u6an7o) && m8kdt['push'](yw4u6_), g4_y6w['locator'] = exqo0n;
                    } else Sz12(yw4u6_, g4_y6w, u6an7o) && m8kdt['push'](yw4u6_);
                    'http://www.w3.org/1999/xhtml' !== yw4u6_['uri'] || yw4u6_['closed'] ? zl12jm++ : zl12jm = Sghb3_($dktm8, zl12jm, yw4u6_['tagName'], f8d$kt, g4_y6w);
            }
        } catch (d$2j1m) {
            bv53hg['error']('element parse error: ' + d$2j1m), zl12jm = -0x1;
        }
        zl12jm > tkfis ? tkfis = zl12jm : jd$m21(Math['max'](j2md1, tkfis) + 0x1);
    }
}
function Sgw43_y(vbl5h, noa7u) {
    return noa7u['lineNumber'] = vbl5h['lineNumber'], noa7u['columnNumber'] = vbl5h['columnNumber'], noa7u;
}
function Sa7uo6(v25zl, skptf8, g_w3by, md2z, k8dm$t, m1d$8j) {
    for (var hv3wgb, oqxe0n, zm2jd1 = ++skptf8, ktf8sp = Su_6y4w;;) {
        var g_wb3h = v25zl['charAt'](zm2jd1);
        switch (g_wb3h) {
            case '=':
                if (ktf8sp === Sf8pstk) hv3wgb = v25zl['slice'](skptf8, zm2jd1), ktf8sp = Sg64w_;else {
                    if (ktf8sp !== Skp$t) throw new Error('attribute equal must after attrName');
                    ktf8sp = Sg64w_;
                }
                break;
            case '\x27':
            case '\x22':
                if (ktf8sp === Sg64w_ || ktf8sp === Sf8pstk) {
                    if (ktf8sp === Sf8pstk && (m1d$8j['warning']('attribute value must after "="'), hv3wgb = v25zl['slice'](skptf8, zm2jd1)), skptf8 = zm2jd1 + 0x1, zm2jd1 = v25zl['indexOf'](g_wb3h, skptf8), !(zm2jd1 > 0x0)) throw new Error('attribute value no end \'' + g_wb3h + '\' match');
                    oqxe0n = v25zl['slice'](skptf8, zm2jd1)['replace'](/&#?\w+;/g, k8dm$t), g_w3by['add'](hv3wgb, oqxe0n, skptf8 - 0x1), ktf8sp = Spt$fk;
                } else {
                    if (ktf8sp != Sa6un) throw new Error('attribute value must after "="');
                    oqxe0n = v25zl['slice'](skptf8, zm2jd1)['replace'](/&#?\w+;/g, k8dm$t), g_w3by['add'](hv3wgb, oqxe0n, skptf8), m1d$8j['warning']('attribute "' + hv3wgb + '" missed start quot(' + g_wb3h + ')!!'), skptf8 = zm2jd1 + 0x1, ktf8sp = Spt$fk;
                }
                break;
            case '/':
                switch (ktf8sp) {
                    case Su_6y4w:
                        g_w3by['setTagName'](v25zl['slice'](skptf8, zm2jd1));
                    case Spt$fk:
                    case Skft8sp:
                    case Suya467:
                        ktf8sp = Suya467, g_w3by['closed'] = !0x0;
                    case Sa6un:
                    case Sf8pstk:
                    case Skp$t:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return m1d$8j['error']('unexpected end of input'), ktf8sp == Su_6y4w && g_w3by['setTagName'](v25zl['slice'](skptf8, zm2jd1)), zm2jd1;
            case '>':
                switch (ktf8sp) {
                    case Su_6y4w:
                        g_w3by['setTagName'](v25zl['slice'](skptf8, zm2jd1));
                    case Spt$fk:
                    case Skft8sp:
                    case Suya467:
                        break;
                    case Sa6un:
                    case Sf8pstk:
                        oqxe0n = v25zl['slice'](skptf8, zm2jd1), '/' === oqxe0n['slice'](-0x1) && (g_w3by['closed'] = !0x0, oqxe0n = oqxe0n['slice'](0x0, -0x1));
                    case Skp$t:
                        ktf8sp === Skp$t && (oqxe0n = hv3wgb), ktf8sp == Sa6un ? (m1d$8j['warning']('attribute "' + oqxe0n + '" missed quot(")!!'), g_w3by['add'](hv3wgb, oqxe0n['replace'](/&#?\w+;/g, k8dm$t), skptf8)) : ('http://www.w3.org/1999/xhtml' === md2z[''] && oqxe0n['match'](/^(?:disabled|checked|selected)$/i) || m1d$8j['warning']('attribute "' + oqxe0n + '" missed value!! "' + oqxe0n + '" instead!!'), g_w3by['add'](oqxe0n, oqxe0n, skptf8));
                        break;
                    case Sg64w_:
                        throw new Error('attribute value missed!!');
                }
                return zm2jd1;
            case '\u0080':
                g_wb3h = '\x20';
            default:
                if ('\x20' >= g_wb3h) switch (ktf8sp) {
                    case Su_6y4w:
                        g_w3by['setTagName'](v25zl['slice'](skptf8, zm2jd1)), ktf8sp = Skft8sp;
                        break;
                    case Sf8pstk:
                        hv3wgb = v25zl['slice'](skptf8, zm2jd1), ktf8sp = Skp$t;
                        break;
                    case Sa6un:
                        var oqxe0n = v25zl['slice'](skptf8, zm2jd1)['replace'](/&#?\w+;/g, k8dm$t);
                        m1d$8j['warning']('attribute "' + oqxe0n + '" missed quot(")!!'), g_w3by['add'](hv3wgb, oqxe0n, skptf8);
                    case Spt$fk:
                        ktf8sp = Skft8sp;
                } else switch (ktf8sp) {
                    case Skp$t:
                        {
                            g_w3by['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === md2z[''] && hv3wgb['match'](/^(?:disabled|checked|selected)$/i) || m1d$8j['warning']('attribute "' + hv3wgb + '" missed value!! "' + hv3wgb + '" instead2!!'), g_w3by['add'](hv3wgb, hv3wgb, skptf8), skptf8 = zm2jd1, ktf8sp = Sf8pstk;
                        break;
                    case Spt$fk:
                        m1d$8j['warning']('attribute space is required"' + hv3wgb + '\x22!!');
                    case Skft8sp:
                        ktf8sp = Sf8pstk, skptf8 = zm2jd1;
                        break;
                    case Sg64w_:
                        ktf8sp = Sa6un, skptf8 = zm2jd1;
                        break;
                    case Suya467:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        zm2jd1++;
    }
}
function Sz12(iktfs, oun7a, tkd8$) {
    for (var jz1l2m = iktfs['tagName'], $8dkm = null, ywgb3 = iktfs['length']; ywgb3--;) {
        var ts8fp = iktfs[ywgb3],
            kp8stf = ts8fp['qName'],
            a4n76 = ts8fp['value'],
            qxe7n = kp8stf['indexOf'](':');
        if (qxe7n > 0x0) var gh3vb5 = ts8fp['prefix'] = kp8stf['slice'](0x0, qxe7n),
            ygw34_ = kp8stf['slice'](qxe7n + 0x1),
            hlvb = 'xmlns' === gh3vb5 && ygw34_;else ygw34_ = kp8stf, gh3vb5 = null, hlvb = 'xmlns' === kp8stf && '';
        ts8fp['localName'] = ygw34_, hlvb !== !0x1 && (null == $8dkm && ($8dkm = {}, Sjmzd1(tkd8$, tkd8$ = {})), tkd8$[hlvb] = $8dkm[hlvb] = a4n76, ts8fp['uri'] = 'http://www.w3.org/2000/xmlns/', oun7a['startPrefixMapping'](hlvb, a4n76));
    }
    for (var ywgb3 = iktfs['length']; ywgb3--;) {
        ts8fp = iktfs[ywgb3];
        var gh3vb5 = ts8fp['prefix'];
        gh3vb5 && ('xml' === gh3vb5 && (ts8fp['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== gh3vb5 && (ts8fp['uri'] = tkd8$[gh3vb5 || '']));
    }
    var qxe7n = jz1l2m['indexOf'](':');
    qxe7n > 0x0 ? (gh3vb5 = iktfs['prefix'] = jz1l2m['slice'](0x0, qxe7n), ygw34_ = iktfs['localName'] = jz1l2m['slice'](qxe7n + 0x1)) : (gh3vb5 = null, ygw34_ = iktfs['localName'] = jz1l2m);
    var ua6y_4 = iktfs['uri'] = tkd8$[gh3vb5 || ''];
    if (oun7a['startElement'](ua6y_4, ygw34_, jz1l2m, iktfs), !iktfs['closed']) return iktfs['currentNSMap'] = tkd8$, iktfs['localNSMap'] = $8dkm, !0x0;
    if (oun7a['endElement'](ua6y_4, ygw34_, jz1l2m), $8dkm) {
        for (gh3vb5 in $8dkm) oun7a['endPrefixMapping'](gh3vb5);
    }
}
function Sghb3_($kt8md, j2$d, v9bh, mjd$t8, vb539h) {
    if (/^(?:script|textarea)$/i['test'](v9bh)) {
        var zlv295 = $kt8md['indexOf']('</' + v9bh + '>', j2$d),
            e0orxq = $kt8md['substring'](j2$d + 0x1, zlv295);
        if (/[&<]/['test'](e0orxq)) return (/^script$/i['test'](v9bh) ? (vb539h['characters'](e0orxq, 0x0, e0orxq['length']), zlv295) : (e0orxq = e0orxq['replace'](/&#?\w+;/g, mjd$t8), vb539h['characters'](e0orxq, 0x0, e0orxq['length']), zlv295)
        );
    }
    return j2$d + 0x1;
}
function Snu47a6(kdft, _hgwb3, l92vz5, y4u67a) {
    var m$djt8 = y4u67a[l92vz5];
    return null == m$djt8 && (m$djt8 = kdft['lastIndexOf']('</' + l92vz5 + '>'), _hgwb3 > m$djt8 && (m$djt8 = kdft['lastIndexOf']('</' + l92vz5)), y4u67a[l92vz5] = m$djt8), _hgwb3 > m$djt8;
}
function Sjmzd1(_yw4, aonex) {
    for (var one0xq in _yw4) aonex[one0xq] = _yw4[one0xq];
}
function Stp8fs(n4u67a, gbw3_h, jl921z, uy674a) {
    var hb53v9 = n4u67a['charAt'](gbw3_h + 0x2);
    switch (hb53v9) {
        case '-':
            if ('-' === n4u67a['charAt'](gbw3_h + 0x3)) {
                var nqe = n4u67a['indexOf']('-->', gbw3_h + 0x4);
                return nqe > gbw3_h ? (jl921z['comment'](n4u67a, gbw3_h + 0x4, nqe - gbw3_h - 0x4), nqe + 0x3) : (uy674a['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == n4u67a['substr'](gbw3_h + 0x3, 0x6)) {
                var nqe = n4u67a['indexOf'](']]>', gbw3_h + 0x9);
                return jl921z['startCDATA'](), jl921z['characters'](n4u67a, gbw3_h + 0x9, nqe - gbw3_h - 0x9), jl921z['endCDATA'](), nqe + 0x3;
            }
            var gy3_ = Sjz21ml(n4u67a, gbw3_h),
                xqo0r = gy3_['length'];
            if (xqo0r > 0x1 && /!doctype/i['test'](gy3_[0x0][0x0])) {
                var d1m = gy3_[0x1][0x0],
                    zl25v = xqo0r > 0x3 && /^public$/i['test'](gy3_[0x2][0x0]) && gy3_[0x3][0x0],
                    g34w = xqo0r > 0x4 && gy3_[0x4][0x0],
                    ptf8 = gy3_[xqo0r - 0x1];
                return jl921z['startDTD'](d1m, zl25v && zl25v['replace'](/^(['"])(.*?)\1$/, '$2'), g34w && g34w['replace'](/^(['"])(.*?)\1$/, '$2')), jl921z['endDTD'](), ptf8['index'] + ptf8[0x0]['length'];
            }
    }
    return -0x1;
}
function Sftkp8(onqxe, yu7a46, j1) {
    var onae = onqxe['indexOf']('?>', yu7a46);
    if (onae) {
        var d1zmj = onqxe['substring'](yu7a46, onae)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (d1zmj) {
            {
                d1zmj[0x0]['length'];
            }
            return j1['processingInstruction'](d1zmj[0x1], d1zmj[0x2]), onae + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function Sdm$tj() {}
function Svz9h(hw3bv, vz59) {
    return hw3bv['__proto__'] = vz59, hw3bv;
}
function Sjz21ml(wg6, oex7nq) {
    var dktf,
        b9vh5 = [],
        ro0xeq = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (ro0xeq['lastIndex'] = oex7nq, ro0xeq['exec'](wg6); dktf = ro0xeq['exec'](wg6);) if (b9vh5['push'](dktf), dktf[0x1]) return b9vh5;
}
var Seorxq = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    Stmd8k$ = new RegExp('[\\-\\.0-9' + Seorxq['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    Sh3gv5b = new RegExp('^' + Seorxq['source'] + Stmd8k$['source'] + '*(?::' + Seorxq['source'] + Stmd8k$['source'] + '*)?$'),
    Su_6y4w = 0x0,
    Sf8pstk = 0x1,
    Skp$t = 0x2,
    Sg64w_ = 0x3,
    Sa6un = 0x4,
    Spt$fk = 0x5,
    Skft8sp = 0x6,
    Suya467 = 0x7;
Sd$j8m['prototype'] = {
    'parse': function (o7xqn, tfk8$, z2l5v9) {
        var fitps = this['domBuilder'];
        fitps['startDocument'](), Sjmzd1(tfk8$, tfk8$ = {}), Sh3wbgv(o7xqn, tfk8$, z2l5v9, fitps, this['errorHandler']), fitps['endDocument']();
    }
}, Sdm$tj['prototype'] = {
    'setTagName': function (_b3g) {
        if (!Sh3gv5b['test'](_b3g)) throw new Error('invalid tagName:' + _b3g);
        this['tagName'] = _b3g;
    },
    'add': function (u_y46w, mj, a4n6u) {
        if (!Sh3gv5b['test'](u_y46w)) throw new Error('invalid attribute:' + u_y46w);
        this[this['length']++] = {
            'qName': u_y46w,
            'value': mj,
            'offset': a4n6u
        };
    },
    'length': 0x0,
    'getLocalName': function (_ybw3) {
        return this[_ybw3]['localName'];
    },
    'getLocator': function (m$kd) {
        return this[m$kd]['locator'];
    },
    'getQName': function (y46u7) {
        return this[y46u7]['qName'];
    },
    'getURI': function (bh_) {
        return this[bh_]['uri'];
    },
    'getValue': function (gw4y_3) {
        return this[gw4y_3]['value'];
    }
}, Svz9h({}, Svz9h['prototype']) instanceof Svz9h || (Svz9h = function (orx0eq, t8fsp) {
    function hvl9z() {}
    hvl9z['prototype'] = t8fsp, hvl9z = new hvl9z();
    for (t8fsp in orx0eq) hvl9z[t8fsp] = orx0eq[t8fsp];
    return hvl9z;
}), exports['XMLReader'] = Sd$j8m;