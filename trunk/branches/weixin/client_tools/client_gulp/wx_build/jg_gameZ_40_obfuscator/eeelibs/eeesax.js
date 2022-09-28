var b = wx.$e;
function epcmo7a() {}
function evzf4y(q3njiu, hrlzfy, qsu3n9, acop, niju3q) {
    function zrfvy(rfyhzl) {
        if (rfyhzl > 0xffff) {
            rfyhzl -= 0x10000;
            var $xiglt = 0xd800 + (rfyhzl >> 0xa),
                m4a7v = 0xdc00 + (0x3ff & rfyhzl);
            return String['fromCharCode']($xiglt, m4a7v);
        }
        return String['fromCharCode'](rfyhzl);
    }
    function zryfv(tixg$l) {
        var eoapc = tixg$l['slice'](0x1, -0x1);
        return eoapc in qsu3n9 ? qsu3n9[eoapc] : '#' === eoapc['charAt'](0x0) ? zrfvy(parseInt(eoapc['substr'](0x1)['replace']('x', '0x'))) : (niju3q['error']('entity not found:' + tixg$l), tixg$l);
    }
    function n6k9su(d52w18) {
        if (d52w18 > pca) {
            var ampec = q3njiu['substring'](pca, d52w18)['replace'](/&#?\w+;/g, zryfv);
            f4yv7 && eoac(pca), acop['characters'](ampec, 0x0, d52w18 - pca), pca = d52w18;
        }
    }
    function eoac(_yfv4, ryzthl) {
        for (; _yfv4 >= yhztrl && (ryzthl = vyzhfr['exec'](q3njiu));) _4zyvf = ryzthl['index'], yhztrl = _4zyvf + ryzthl[0x0]['length'], f4yv7['lineNumber']++;
        f4yv7['columnNumber'] = _yfv4 - _4zyvf + 0x1;
    }
    for (var _4zyvf = 0x0, yhztrl = 0x0, vyzhfr = /.*(?:\r\n?|\n)|.*$/g, f4yv7 = acop['locator'], dw50b = [{ 'currentNSMap': hrlzfy }], k69b = {}, pca = 0x0;;) {
        try {
            var oa_7c = q3njiu['indexOf']('<', pca);
            if (0x0 > oa_7c) {
                if (!q3njiu['substr'](pca)['match'](/^\s*$/)) {
                    var m_47c = acop['doc'],
                        lhyztr = m_47c['createTextNode'](q3njiu['substr'](pca));
                    m_47c['appendChild'](lhyztr), acop['currentElement'] = lhyztr;
                }
                return;
            }
            switch (oa_7c > pca && n6k9su(oa_7c), q3njiu['charAt'](oa_7c + 0x1)) {
                case '/':
                    var ijxq3 = q3njiu['indexOf']('>', oa_7c + 0x3),
                        a_7v4m = q3njiu['substring'](oa_7c + 0x2, ijxq3),
                        v7fy_4 = dw50b['pop']();
                    0x0 > ijxq3 ? (a_7v4m = q3njiu['substring'](oa_7c + 0x2)['replace'](/[\s<].*/, ''), niju3q['error']('end tag name: ' + a_7v4m + ' is not complete:' + v7fy_4['tagName']), ijxq3 = oa_7c + 0x1 + a_7v4m['length']) : a_7v4m['match'](/\s</) && (a_7v4m = a_7v4m['replace'](/[\s<].*/, ''), niju3q['error']('end tag name: ' + a_7v4m + ' maybe not complete'), ijxq3 = oa_7c + 0x1 + a_7v4m['length']);
                    var f4_v7a = v7fy_4['localNSMap'],
                        qu3n9 = v7fy_4['tagName'] == a_7v4m,
                        db5w08 = qu3n9 || v7fy_4['tagName'] && v7fy_4['tagName']['toLowerCase']() == a_7v4m['toLowerCase']();
                    if (db5w08) {
                        if (acop['endElement'](v7fy_4['uri'], v7fy_4['localName'], a_7v4m), f4_v7a) {
                            for (var tyzrhl in f4_v7a) acop['endPrefixMapping'](tyzrhl);
                        }
                        qu3n9 || niju3q['fatalError']('end tag name: ' + a_7v4m + ' is not match the current start tagName:' + v7fy_4['tagName']);
                    } else dw50b['push'](v7fy_4);
                    ijxq3++;
                    break;
                case '?':
                    f4yv7 && eoac(oa_7c), ijxq3 = ec4_am(q3njiu, oa_7c, acop);
                    break;
                case '!':
                    f4yv7 && eoac(oa_7c), ijxq3 = ecaom7(q3njiu, oa_7c, acop, niju3q);
                    break;
                default:
                    f4yv7 && eoac(oa_7c);
                    var qj3x = new ejg$ixt(),
                        fhvzyr = dw50b[dw50b['length'] - 0x1]['currentNSMap'],
                        ijxq3 = es9kqnu(q3njiu, oa_7c, qj3x, fhvzyr, zryfv, niju3q),
                        db96k = qj3x['length'];
                    if (!qj3x['closed'] && egtil$(q3njiu, ijxq3, qj3x['tagName'], k69b) && (qj3x['closed'] = !0x0, qsu3n9['nbsp'] || niju3q['warning']('unclosed xml attribute')), f4yv7 && db96k) {
                        for (var _moc7 = e$qji3(f4yv7, {}), s6ubk9 = 0x0; db96k > s6ubk9; s6ubk9++) {
                            var uq3nji = qj3x[s6ubk9];
                            eoac(uq3nji['offset']), uq3nji['locator'] = e$qji3(f4yv7, {});
                        }
                        acop['locator'] = _moc7, euk69sn(qj3x, acop, fhvzyr) && dw50b['push'](qj3x), acop['locator'] = f4yv7;
                    } else euk69sn(qj3x, acop, fhvzyr) && dw50b['push'](qj3x);
                    'http://www.w3.org/1999/xhtml' !== qj3x['uri'] || qj3x['closed'] ? ijxq3++ : ijxq3 = ek609sb(q3njiu, ijxq3, qj3x['tagName'], zryfv, acop);
            }
        } catch (cepmo) {
            niju3q['error']('element parse error: ' + cepmo), ijxq3 = -0x1;
        }
        ijxq3 > pca ? pca = ijxq3 : n6k9su(Math['max'](oa_7c, pca) + 0x1);
    }
}
function e$qji3(vr4zyf, d5) {
    return d5['lineNumber'] = vr4zyf['lineNumber'], d5['columnNumber'] = vr4zyf['columnNumber'], d5;
}
function es9kqnu(rhzyf, v_4a, fvy4_, zyvrh, qin3ju, htgxrl) {
    for (var w51d2, b8dw50, nu3iq = ++v_4a, yflzhr = ezght;;) {
        var n3uiqj = rhzyf['charAt'](nu3iq);
        switch (n3uiqj) {
            case '=':
                if (yflzhr === eb8d650) w51d2 = rhzyf['slice'](v_4a, nu3iq), yflzhr = eniujq3;else {
                    if (yflzhr !== e$gtlix) throw new Error('attribute equal must after attrName');
                    yflzhr = eniujq3;
                }
                break;
            case '\x27':
            case '\x22':
                if (yflzhr === eniujq3 || yflzhr === eb8d650) {
                    if (yflzhr === eb8d650 && (htgxrl['warning']('attribute value must after "="'), w51d2 = rhzyf['slice'](v_4a, nu3iq)), v_4a = nu3iq + 0x1, nu3iq = rhzyf['indexOf'](n3uiqj, v_4a), !(nu3iq > 0x0)) throw new Error('attribute value no end \'' + n3uiqj + '\' match');
                    b8dw50 = rhzyf['slice'](v_4a, nu3iq)['replace'](/&#?\w+;/g, qin3ju), fvy4_['add'](w51d2, b8dw50, v_4a - 0x1), yflzhr = em7ca;
                } else {
                    if (yflzhr != e$jig) throw new Error('attribute value must after "="');
                    b8dw50 = rhzyf['slice'](v_4a, nu3iq)['replace'](/&#?\w+;/g, qin3ju), fvy4_['add'](w51d2, b8dw50, v_4a), htgxrl['warning']('attribute "' + w51d2 + '" missed start quot(' + n3uiqj + ')!!'), v_4a = nu3iq + 0x1, yflzhr = em7ca;
                }
                break;
            case '/':
                switch (yflzhr) {
                    case ezght:
                        fvy4_['setTagName'](rhzyf['slice'](v_4a, nu3iq));
                    case em7ca:
                    case enj3q$:
                    case epecamo:
                        yflzhr = epecamo, fvy4_['closed'] = !0x0;
                    case e$jig:
                    case eb8d650:
                    case e$gtlix:
                        break;
                    default:
                        throw new Error('attribute invalid close char(\'/\')');
                }
                break;
            case '':
                return htgxrl['error']('unexpected end of input'), yflzhr == ezght && fvy4_['setTagName'](rhzyf['slice'](v_4a, nu3iq)), nu3iq;
            case '>':
                switch (yflzhr) {
                    case ezght:
                        fvy4_['setTagName'](rhzyf['slice'](v_4a, nu3iq));
                    case em7ca:
                    case enj3q$:
                    case epecamo:
                        break;
                    case e$jig:
                    case eb8d650:
                        b8dw50 = rhzyf['slice'](v_4a, nu3iq), '/' === b8dw50['slice'](-0x1) && (fvy4_['closed'] = !0x0, b8dw50 = b8dw50['slice'](0x0, -0x1));
                    case e$gtlix:
                        yflzhr === e$gtlix && (b8dw50 = w51d2), yflzhr == e$jig ? (htgxrl['warning']('attribute "' + b8dw50 + '" missed quot(")!!'), fvy4_['add'](w51d2, b8dw50['replace'](/&#?\w+;/g, qin3ju), v_4a)) : ('http://www.w3.org/1999/xhtml' === zyvrh[''] && b8dw50['match'](/^(?:disabled|checked|selected)$/i) || htgxrl['warning']('attribute "' + b8dw50 + '" missed value!! "' + b8dw50 + '" instead!!'), fvy4_['add'](b8dw50, b8dw50, v_4a));
                        break;
                    case eniujq3:
                        throw new Error('attribute value missed!!');
                }
                return nu3iq;
            case '\u0080':
                n3uiqj = '\x20';
            default:
                if ('\x20' >= n3uiqj) switch (yflzhr) {
                    case ezght:
                        fvy4_['setTagName'](rhzyf['slice'](v_4a, nu3iq)), yflzhr = enj3q$;
                        break;
                    case eb8d650:
                        w51d2 = rhzyf['slice'](v_4a, nu3iq), yflzhr = e$gtlix;
                        break;
                    case e$jig:
                        var b8dw50 = rhzyf['slice'](v_4a, nu3iq)['replace'](/&#?\w+;/g, qin3ju);
                        htgxrl['warning']('attribute "' + b8dw50 + '" missed quot(")!!'), fvy4_['add'](w51d2, b8dw50, v_4a);
                    case em7ca:
                        yflzhr = enj3q$;
                } else switch (yflzhr) {
                    case e$gtlix:
                        {
                            fvy4_['tagName'];
                        }
                        'http://www.w3.org/1999/xhtml' === zyvrh[''] && w51d2['match'](/^(?:disabled|checked|selected)$/i) || htgxrl['warning']('attribute "' + w51d2 + '" missed value!! "' + w51d2 + '" instead2!!'), fvy4_['add'](w51d2, w51d2, v_4a), v_4a = nu3iq, yflzhr = eb8d650;
                        break;
                    case em7ca:
                        htgxrl['warning']('attribute space is required"' + w51d2 + '\x22!!');
                    case enj3q$:
                        yflzhr = eb8d650, v_4a = nu3iq;
                        break;
                    case eniujq3:
                        yflzhr = e$jig, v_4a = nu3iq;
                        break;
                    case epecamo:
                        throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                }
        }
        nu3iq++;
    }
}
function euk69sn(g$x3j, b560, k6d9) {
    for (var qjuni3 = g$x3j['tagName'], u9ksn = null, ij3gx = g$x3j['length']; ij3gx--;) {
        var coeapm = g$x3j[ij3gx],
            oacmep = coeapm['qName'],
            $igx = coeapm['value'],
            gt$xli = oacmep['indexOf'](':');
        if (gt$xli > 0x0) var hxltgr = coeapm['prefix'] = oacmep['slice'](0x0, gt$xli),
            k609b = oacmep['slice'](gt$xli + 0x1),
            bk9us = 'xmlns' === hxltgr && k609b;else k609b = oacmep, hxltgr = null, bk9us = 'xmlns' === oacmep && '';
        coeapm['localName'] = k609b, bk9us !== !0x1 && (null == u9ksn && (u9ksn = {}, ejg$3x(k6d9, k6d9 = {})), k6d9[bk9us] = u9ksn[bk9us] = $igx, coeapm['uri'] = 'http://www.w3.org/2000/xmlns/', b560['startPrefixMapping'](bk9us, $igx));
    }
    for (var ij3gx = g$x3j['length']; ij3gx--;) {
        coeapm = g$x3j[ij3gx];
        var hxltgr = coeapm['prefix'];
        hxltgr && ('xml' === hxltgr && (coeapm['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== hxltgr && (coeapm['uri'] = k6d9[hxltgr || '']));
    }
    var gt$xli = qjuni3['indexOf'](':');
    gt$xli > 0x0 ? (hxltgr = g$x3j['prefix'] = qjuni3['slice'](0x0, gt$xli), k609b = g$x3j['localName'] = qjuni3['slice'](gt$xli + 0x1)) : (hxltgr = null, k609b = g$x3j['localName'] = qjuni3);
    var ao7m = g$x3j['uri'] = k6d9[hxltgr || ''];
    if (b560['startElement'](ao7m, k609b, qjuni3, g$x3j), !g$x3j['closed']) return g$x3j['currentNSMap'] = k6d9, g$x3j['localNSMap'] = u9ksn, !0x0;
    if (b560['endElement'](ao7m, k609b, qjuni3), u9ksn) {
        for (hxltgr in u9ksn) b560['endPrefixMapping'](hxltgr);
    }
}
function ek609sb(mc7a4_, s9uknq, v_7yf, w5082d, v_a74f) {
    if (/^(?:script|textarea)$/i['test'](v_7yf)) {
        var sku6n9 = mc7a4_['indexOf']('</' + v_7yf + '>', s9uknq),
            fvryh = mc7a4_['substring'](s9uknq + 0x1, sku6n9);
        if (/[&<]/['test'](fvryh)) return (/^script$/i['test'](v_7yf) ? (v_a74f['characters'](fvryh, 0x0, fvryh['length']), sku6n9) : (fvryh = fvryh['replace'](/&#?\w+;/g, w5082d), v_a74f['characters'](fvryh, 0x0, fvryh['length']), sku6n9)
        );
    }
    return s9uknq + 0x1;
}
function egtil$(a4mc_, jsu3n, rlz, wd08b) {
    var nj3i$q = wd08b[rlz];
    return null == nj3i$q && (nj3i$q = a4mc_['lastIndexOf']('</' + rlz + '>'), jsu3n > nj3i$q && (nj3i$q = a4mc_['lastIndexOf']('</' + rlz)), wd08b[rlz] = nj3i$q), jsu3n > nj3i$q;
}
function ejg$3x(zfryv4, sjn3uq) {
    for (var sk6b9 in zfryv4) sjn3uq[sk6b9] = zfryv4[sk6b9];
}
function ecaom7(vrzf4, sj3nqu, b50kd, kbd069) {
    var a_4mc7 = vrzf4['charAt'](sj3nqu + 0x2);
    switch (a_4mc7) {
        case '-':
            if ('-' === vrzf4['charAt'](sj3nqu + 0x3)) {
                var zy_4fv = vrzf4['indexOf']('-->', sj3nqu + 0x4);
                return zy_4fv > sj3nqu ? (b50kd['comment'](vrzf4, sj3nqu + 0x4, zy_4fv - sj3nqu - 0x4), zy_4fv + 0x3) : (kbd069['error']('Unclosed comment'), -0x1);
            }
            return -0x1;
        default:
            if ('CDATA[' == vrzf4['substr'](sj3nqu + 0x3, 0x6)) {
                var zy_4fv = vrzf4['indexOf'](']]>', sj3nqu + 0x9);
                return b50kd['startCDATA'](), b50kd['characters'](vrzf4, sj3nqu + 0x9, zy_4fv - sj3nqu - 0x9), b50kd['endCDATA'](), zy_4fv + 0x3;
            }
            var ns69u = emo7_ac(vrzf4, sj3nqu),
                d850w = ns69u['length'];
            if (d850w > 0x1 && /!doctype/i['test'](ns69u[0x0][0x0])) {
                var zyf_v4 = ns69u[0x1][0x0],
                    fyhlr = d850w > 0x3 && /^public$/i['test'](ns69u[0x2][0x0]) && ns69u[0x3][0x0],
                    $hgxtl = d850w > 0x4 && ns69u[0x4][0x0],
                    xj3q$i = ns69u[d850w - 0x1];
                return b50kd['startDTD'](zyf_v4, fyhlr && fyhlr['replace'](/^(['"])(.*?)\1$/, '$2'), $hgxtl && $hgxtl['replace'](/^(['"])(.*?)\1$/, '$2')), b50kd['endDTD'](), xj3q$i['index'] + xj3q$i[0x0]['length'];
            }
    }
    return -0x1;
}
function ec4_am(lgzrht, $x3ij, zfry4v) {
    var juqn3 = lgzrht['indexOf']('?>', $x3ij);
    if (juqn3) {
        var xq$ = lgzrht['substring']($x3ij, juqn3)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (xq$) {
            {
                xq$[0x0]['length'];
            }
            return zfry4v['processingInstruction'](xq$[0x1], xq$[0x2]), juqn3 + 0x2;
        }
        return -0x1;
    }
    return -0x1;
}
function ejg$ixt() {}
function ea_vf7(acmpoe, hltrzg) {
    return acmpoe['__proto__'] = hltrzg, acmpoe;
}
function emo7_ac(zr4v, ixtl$) {
    var $xgj,
        k69sb0 = [],
        qu3sjn = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (qu3sjn['lastIndex'] = ixtl$, qu3sjn['exec'](zr4v); $xgj = qu3sjn['exec'](zr4v);) if (k69sb0['push']($xgj), $xgj[0x1]) return k69sb0;
}
var eiunjq3 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    egjix$3 = new RegExp('[\\-\\.0-9' + eiunjq3['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    edk = new RegExp('^' + eiunjq3['source'] + egjix$3['source'] + '*(?::' + eiunjq3['source'] + egjix$3['source'] + '*)?$'),
    ezght = 0x0,
    eb8d650 = 0x1,
    e$gtlix = 0x2,
    eniujq3 = 0x3,
    e$jig = 0x4,
    em7ca = 0x5,
    enj3q$ = 0x6,
    epecamo = 0x7;
epcmo7a['prototype'] = {
    'parse': function ($3gxij, snuk6, lyrzf) {
        var b0kd69 = this['domBuilder'];
        b0kd69['startDocument'](), ejg$3x(snuk6, snuk6 = {}), evzf4y($3gxij, snuk6, lyrzf, b0kd69, this['errorHandler']), b0kd69['endDocument']();
    }
}, ejg$ixt['prototype'] = {
    'setTagName': function (in$q3j) {
        if (!edk['test'](in$q3j)) throw new Error('invalid tagName:' + in$q3j);
        this['tagName'] = in$q3j;
    },
    'add': function (op7acm, $litx, y4vf7) {
        if (!edk['test'](op7acm)) throw new Error('invalid attribute:' + op7acm);
        this[this['length']++] = {
            'qName': op7acm,
            'value': $litx,
            'offset': y4vf7
        };
    },
    'length': 0x0,
    'getLocalName': function (qjus) {
        return this[qjus]['localName'];
    },
    'getLocator': function ($xglit) {
        return this[$xglit]['locator'];
    },
    'getQName': function (q3xji$) {
        return this[q3xji$]['qName'];
    },
    'getURI': function (db0k) {
        return this[db0k]['uri'];
    },
    'getValue': function (_acm) {
        return this[_acm]['value'];
    }
}, ea_vf7({}, ea_vf7['prototype']) instanceof ea_vf7 || (ea_vf7 = function ($igxt, a7_om) {
    function i3jg() {}
    i3jg['prototype'] = a7_om, i3jg = new i3jg();
    for (a7_om in $igxt) i3jg[a7_om] = $igxt[a7_om];
    return i3jg;
}), exports['XMLReader'] = epcmo7a;