var S = wx.$J;
function j1_e8o_() {}function j1_pmlb(inz$1, _438tf, cy69, jha2, ajisw) {
  function f13nz7(iajshw) {
    var whd0ja = iajshw['slice'](0x1, -0x1);return whd0ja in cy69 ? cy69[whd0ja] : '#' === whd0ja['charAt'](0x0) ? 0xffff < (whd0ja = parseInt(whd0ja['substr'](0x1)['replace']('x', '0x'))) ? (whd0ja -= 0x10000, String['fromCharCode'](0xd800 + (whd0ja >> 0xa), 0xdc00 + (0x3ff & whd0ja))) : String['fromCharCode'](whd0ja) : (ajisw['error']('entity not found:' + iajshw), iajshw);
  }function t4f38(zin1$s) {
    var asi$h;az$s < zin1$s && (asi$h = inz$1['substring'](az$s, zin1$s)['replace'](/&#?\w+;/g, f13nz7), gy965q && f38t(az$s), jha2['characters'](asi$h, 0x0, zin1$s - az$s), az$s = zin1$s);
  }function f38t(aj0ih, z1s$7n) {
    for (; mclpy <= aj0ih && (z1s$7n = jdw0['exec'](inz$1));) e8ork_ = z1s$7n['index'], mclpy = e8ork_ + z1s$7n[0x0]['length'], gy965q['lineNumber']++;gy965q['columnNumber'] = aj0ih - e8ork_ + 0x1;
  }for (var e8ork_ = 0x0, mclpy = 0x0, jdw0 = /.*(?:\r\n?|\n)|.*$/g, gy965q = jha2['locator'], f437_ = [{ 'currentNSMap': _438tf }], $iwhas = {}, az$s = 0x0;;) {
    try {
      var s71n$z = inz$1['indexOf']('<', az$s),
          z7$1fn,
          si1z;if (s71n$z < 0x0) return void (inz$1['substr'](az$s)['match'](/^\s*$/) || (si1z = (z7$1fn = jha2['doc'])['createTextNode'](inz$1['substr'](az$s)), z7$1fn['appendChild'](si1z), jha2['currentElement'] = si1z));switch (az$s < s71n$z && t4f38(s71n$z), inz$1['charAt'](s71n$z + 0x1)) {case '/':
          var n4f137 = inz$1['indexOf']('>', s71n$z + 0x3),
              f371 = inz$1['substring'](s71n$z + 0x2, n4f137),
              cpl6ym = f437_['pop']();n4f137 < 0x0 ? (f371 = inz$1['substring'](s71n$z + 0x2)['replace'](/[\s<].*/, ''), ajisw['error']('end tag name: ' + f371 + ' is not complete:' + cpl6ym['tagName']), n4f137 = s71n$z + 0x1 + f371['length']) : f371['match'](/\s</) && (f371 = f371['replace'](/[\s<].*/, ''), ajisw['error']('end tag name: ' + f371 + ' maybe not complete'), n4f137 = s71n$z + 0x1 + f371['length']);var j2a0h = cpl6ym['localNSMap'],
              lpmby = cpl6ym['tagName'] == f371;if (lpmby || cpl6ym['tagName'] && cpl6ym['tagName']['toLowerCase']() == f371['toLowerCase']()) {
            if (jha2['endElement'](cpl6ym['uri'], cpl6ym['localName'], f371), j2a0h) {
              for (var z7$ns in j2a0h) jha2['endPrefixMapping'](z7$ns);
            }lpmby || ajisw['fatalError']('end tag name: ' + f371 + ' is not match the current start tagName:' + cpl6ym['tagName']);
          } else f437_['push'](cpl6ym);n4f137++;break;case '?':
          gy965q && f38t(s71n$z), n4f137 = j1_j0aih(inz$1, s71n$z, jha2);break;case '!':
          gy965q && f38t(s71n$z), n4f137 = j1_c6qp9y(inz$1, s71n$z, jha2, ajisw);break;default:
          gy965q && f38t(s71n$z);var tr8k_4 = new j1_vbpml(),
              $17nzf = f437_[f437_['length'] - 0x1]['currentNSMap'],
              n4f137 = j1_gd0j2(inz$1, s71n$z, tr8k_4, $17nzf, f13nz7, ajisw),
              c6py = tr8k_4['length'];if (!tr8k_4['closed'] && j1_f374t_(inz$1, n4f137, tr8k_4['tagName'], $iwhas) && (tr8k_4['closed'] = !0x0, cy69['nbsp'] || ajisw['warning']('unclosed xml attribute')), gy965q && c6py) {
            for (var d0a2 = j1_q6cp9(gy965q, {}), mbpc = 0x0; mbpc < c6py; mbpc++) {
              var cyplq6 = tr8k_4[mbpc];f38t(cyplq6['offset']), cyplq6['locator'] = j1_q6cp9(gy965q, {});
            }jha2['locator'] = d0a2, j1_h0jdw(tr8k_4, jha2, $17nzf) && f437_['push'](tr8k_4), jha2['locator'] = gy965q;
          } else j1_h0jdw(tr8k_4, jha2, $17nzf) && f437_['push'](tr8k_4);'http://www.w3.org/1999/xhtml' !== tr8k_4['uri'] || tr8k_4['closed'] ? n4f137++ : n4f137 = j1_t_374f(inz$1, n4f137, tr8k_4['tagName'], f13nz7, jha2);}
    } catch (g6529) {
      ajisw['error']('element parse error: ' + g6529), n4f137 = -0x1;
    }az$s < n4f137 ? az$s = n4f137 : t4f38(Math['max'](s71n$z, az$s) + 0x1);
  }
}function j1_q6cp9(clypm, j0aiw) {
  return j0aiw['lineNumber'] = clypm['lineNumber'], j0aiw['columnNumber'] = clypm['columnNumber'], j0aiw;
}function j1_gd0j2(hajsw, wiha$s, wdja0, eurok, yqlp, ruk8eo) {
  for (var y96pqg, h52j0 = ++wiha$s, cblmyp = j1_zsniw;;) {
    var znw$is = hajsw['charAt'](h52j0);switch (znw$is) {case '=':
        if (cblmyp === j1_wizas) y96pqg = hajsw['slice'](wiha$s, h52j0), cblmyp = j1_y96g;else {
          if (cblmyp !== j1_$7ns1) throw new Error('attribute equal must after attrName');cblmyp = j1_y96g;
        }break;case '\x27':case '\x22':
        if (cblmyp === j1_y96g || cblmyp === j1_wizas) {
          if (cblmyp === j1_wizas && (ruk8eo['warning']('attribute value must after "="'), y96pqg = hajsw['slice'](wiha$s, h52j0)), !(0x0 < (h52j0 = hajsw['indexOf'](znw$is, wiha$s = h52j0 + 0x1)))) throw new Error('attribute value no end \'' + znw$is + '\' match');rkex = hajsw['slice'](wiha$s, h52j0)['replace'](/&#?\w+;/g, yqlp), wdja0['add'](y96pqg, rkex, wiha$s - 0x1), cblmyp = j1_siawjh;
        } else {
          if (cblmyp != j1_n1sz$i) throw new Error('attribute value must after "="');rkex = hajsw['slice'](wiha$s, h52j0)['replace'](/&#?\w+;/g, yqlp), wdja0['add'](y96pqg, rkex, wiha$s), ruk8eo['warning']('attribute "' + y96pqg + '" missed start quot(' + znw$is + ')!!'), wiha$s = h52j0 + 0x1, cblmyp = j1_siawjh;
        }break;case '/':
        switch (cblmyp) {case j1_zsniw:
            wdja0['setTagName'](hajsw['slice'](wiha$s, h52j0));case j1_siawjh:case j1_g9y6pq:case j1_z7fn1:
            cblmyp = j1_z7fn1, wdja0['closed'] = !0x0;case j1_n1sz$i:case j1_wizas:case j1_$7ns1:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return ruk8eo['error']('unexpected end of input'), cblmyp == j1_zsniw && wdja0['setTagName'](hajsw['slice'](wiha$s, h52j0)), h52j0;case '>':
        switch (cblmyp) {case j1_zsniw:
            wdja0['setTagName'](hajsw['slice'](wiha$s, h52j0));case j1_siawjh:case j1_g9y6pq:case j1_z7fn1:
            break;case j1_n1sz$i:case j1_wizas:
            '/' === (rkex = hajsw['slice'](wiha$s, h52j0))['slice'](-0x1) && (wdja0['closed'] = !0x0, rkex = rkex['slice'](0x0, -0x1));case j1_$7ns1:
            cblmyp === j1_$7ns1 && (rkex = y96pqg), cblmyp == j1_n1sz$i ? (ruk8eo['warning']('attribute "' + rkex + '" missed quot(")!!'), wdja0['add'](y96pqg, rkex['replace'](/&#?\w+;/g, yqlp), wiha$s)) : ('http://www.w3.org/1999/xhtml' === eurok[''] && rkex['match'](/^(?:disabled|checked|selected)$/i) || ruk8eo['warning']('attribute "' + rkex + '" missed value!! "' + rkex + '" instead!!'), wdja0['add'](rkex, rkex, wiha$s));break;case j1_y96g:
            throw new Error('attribute value missed!!');}return h52j0;case '\u0080':
        znw$is = '\x20';default:
        if (znw$is <= '\x20') switch (cblmyp) {case j1_zsniw:
            wdja0['setTagName'](hajsw['slice'](wiha$s, h52j0)), cblmyp = j1_g9y6pq;break;case j1_wizas:
            y96pqg = hajsw['slice'](wiha$s, h52j0), cblmyp = j1_$7ns1;break;case j1_n1sz$i:
            var rkex = hajsw['slice'](wiha$s, h52j0)['replace'](/&#?\w+;/g, yqlp);ruk8eo['warning']('attribute "' + rkex + '" missed quot(")!!'), wdja0['add'](y96pqg, rkex, wiha$s);case j1_siawjh:
            cblmyp = j1_g9y6pq;} else switch (cblmyp) {case j1_$7ns1:
            wdja0['tagName'], 'http://www.w3.org/1999/xhtml' === eurok[''] && y96pqg['match'](/^(?:disabled|checked|selected)$/i) || ruk8eo['warning']('attribute "' + y96pqg + '" missed value!! "' + y96pqg + '" instead2!!'), wdja0['add'](y96pqg, y96pqg, wiha$s), wiha$s = h52j0, cblmyp = j1_wizas;break;case j1_siawjh:
            ruk8eo['warning']('attribute space is required"' + y96pqg + '\x22!!');case j1_g9y6pq:
            cblmyp = j1_wizas, wiha$s = h52j0;break;case j1_y96g:
            cblmyp = j1_n1sz$i, wiha$s = h52j0;break;case j1_z7fn1:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}h52j0++;
  }
}function j1_h0jdw(yqc69, u8eok, g20d95) {
  for (var plq6yc = yqc69['tagName'], z$nisw = null, vpmlcb = yqc69['length']; vpmlcb--;) {
    var xuko = yqc69[vpmlcb],
        blpmy = xuko['qName'],
        f_t347 = xuko['value'],
        sz1n$i;blpmy = 0x0 < (tr43_ = blpmy['indexOf'](':')) ? (jawi0 = xuko['prefix'] = blpmy['slice'](0x0, tr43_), sz1n$i = blpmy['slice'](tr43_ + 0x1), 'xmlns' === jawi0 && sz1n$i) : (jawi0 = null, 'xmlns' === (sz1n$i = blpmy) && ''), xuko['localName'] = sz1n$i, !0x1 !== blpmy && (null == z$nisw && (z$nisw = {}, j1_nzs1$i(g20d95, g20d95 = {})), g20d95[blpmy] = z$nisw[blpmy] = f_t347, xuko['uri'] = 'http://www.w3.org/2000/xmlns/', u8eok['startPrefixMapping'](blpmy, f_t347));
  }for (vpmlcb = yqc69['length']; vpmlcb--;) (jawi0 = (xuko = yqc69[vpmlcb])['prefix']) && ('xml' === jawi0 && (xuko['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== jawi0 && (xuko['uri'] = g20d95[jawi0 || '']));var tr43_;sz1n$i = 0x0 < (tr43_ = plq6yc['indexOf'](':')) ? (jawi0 = yqc69['prefix'] = plq6yc['slice'](0x0, tr43_), yqc69['localName'] = plq6yc['slice'](tr43_ + 0x1)) : (jawi0 = null, yqc69['localName'] = plq6yc);var e_krt = yqc69['uri'] = g20d95[jawi0 || ''];if (u8eok['startElement'](e_krt, sz1n$i, plq6yc, yqc69), !yqc69['closed']) return yqc69['currentNSMap'] = g20d95, yqc69['localNSMap'] = z$nisw, !0x0;if (u8eok['endElement'](e_krt, sz1n$i, plq6yc), z$nisw) {
    for (var jawi0 in z$nisw) u8eok['endPrefixMapping'](jawi0);
  }
}function j1_t_374f(rt8_3, wsia, jhw0ad, te_8r, $zf17) {
  if (/^(?:script|textarea)$/i['test'](jhw0ad)) {
    var vlmb = rt8_3['indexOf']('</' + jhw0ad + '>', wsia),
        rt8_3 = rt8_3['substring'](wsia + 0x1, vlmb);if (/[&<]/['test'](rt8_3)) return (/^script$/i['test'](jhw0ad) || (rt8_3 = rt8_3['replace'](/&#?\w+;/g, te_8r)), $zf17['characters'](rt8_3, 0x0, rt8_3['length']), vlmb
    );
  }return wsia + 0x1;
}function j1_f374t_(retk, pc69, l6yqpc, plym6) {
  var z7n1f3 = plym6[l6yqpc];return null == z7n1f3 && ((z7n1f3 = retk['lastIndexOf']('</' + l6yqpc + '>')) < pc69 && (z7n1f3 = retk['lastIndexOf']('</' + l6yqpc)), plym6[l6yqpc] = z7n1f3), z7n1f3 < pc69;
}function j1_nzs1$i(h5, er_k8) {
  for (var uek8 in h5) er_k8[uek8] = h5[uek8];
}function j1_c6qp9y(mpclvb, dw0ah, pq9g, ymblcp) {
  var mpcvbl = mpclvb['charAt'](dw0ah + 0x2);if ('-' === mpcvbl) return '-' !== mpclvb['charAt'](dw0ah + 0x3) ? -0x1 : dw0ah < (d50 = mpclvb['indexOf']('-->', dw0ah + 0x4)) ? (pq9g['comment'](mpclvb, dw0ah + 0x4, d50 - dw0ah - 0x4), d50 + 0x3) : (ymblcp['error']('Unclosed comment'), -0x1);if ('CDATA[' == mpclvb['substr'](dw0ah + 0x3, 0x6)) {
    var d50 = mpclvb['indexOf'](']]>', dw0ah + 0x9);return pq9g['startCDATA'](), pq9g['characters'](mpclvb, dw0ah + 0x9, d50 - dw0ah - 0x9), pq9g['endCDATA'](), d50 + 0x3;
  }mpcvbl = j1_sw$ih(mpclvb, dw0ah), ymblcp = mpcvbl['length'];if (0x1 < ymblcp && /!doctype/i['test'](mpcvbl[0x0][0x0])) return d50 = mpcvbl[0x1][0x0], mpclvb = 0x3 < ymblcp && /^public$/i['test'](mpcvbl[0x2][0x0]) && mpcvbl[0x3][0x0], dw0ah = 0x4 < ymblcp && mpcvbl[0x4][0x0], ymblcp = mpcvbl[ymblcp - 0x1], (pq9g['startDTD'](d50, mpclvb && mpclvb['replace'](/^(['"])(.*?)\1$/, '$2'), dw0ah && dw0ah['replace'](/^(['"])(.*?)\1$/, '$2')), pq9g['endDTD'](), ymblcp['index'] + ymblcp[0x0]['length']);return -0x1;
}function j1_j0aih(isnw, sajiwh, n713) {
  var w$izns = isnw['indexOf']('?>', sajiwh);if (w$izns) return sajiwh = isnw['substring'](sajiwh, w$izns)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), sajiwh ? (sajiwh[0x0]['length'], n713['processingInstruction'](sajiwh[0x1], sajiwh[0x2]), w$izns + 0x2) : -0x1;return -0x1;
}function j1_vbpml() {}function j1_gq6925(dh50, ahsi$w) {
  return dh50['__proto__'] = ahsi$w, dh50;
}function j1_sw$ih(q625, _k8rte) {
  var gd0259,
      haiws$ = [],
      roe8u = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (roe8u['lastIndex'] = _k8rte, roe8u['exec'](q625); gd0259 = roe8u['exec'](q625);) if (haiws$['push'](gd0259), gd0259[0x1]) return haiws$;
}var j1_f_3t84 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    j1_pvmlcb = new RegExp('[\\-\\.0-9' + j1_f_3t84['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    j1_d250g9 = new RegExp('^' + j1_f_3t84['source'] + j1_pvmlcb['source'] + '*(?::' + j1_f_3t84['source'] + j1_pvmlcb['source'] + '*)?$'),
    j1_zsniw = 0x0,
    j1_wizas = 0x1,
    j1_$7ns1 = 0x2,
    j1_y96g = 0x3,
    j1_n1sz$i = 0x4,
    j1_siawjh = 0x5,
    j1_g9y6pq = 0x6,
    j1_z7fn1 = 0x7;j1_e8o_['prototype'] = { 'parse': function (iahswj, mply, ygp96q) {
    var ku8ore = this['domBuilder'];ku8ore['startDocument'](), j1_nzs1$i(mply, mply = {}), j1_pmlb(iahswj, mply, ygp96q, ku8ore, this['errorHandler']), ku8ore['endDocument']();
  } }, j1_vbpml['prototype'] = { 'setTagName': function (p6g9yq) {
    if (!j1_d250g9['test'](p6g9yq)) throw new Error('invalid tagName:' + p6g9yq);this['tagName'] = p6g9yq;
  }, 'add': function (g69yqp, _4tr, n47f) {
    if (!j1_d250g9['test'](g69yqp)) throw new Error('invalid attribute:' + g69yqp);this[this['length']++] = { 'qName': g69yqp, 'value': _4tr, 'offset': n47f };
  }, 'length': 0x0, 'getLocalName': function (ekuro8) {
    return this[ekuro8]['localName'];
  }, 'getLocator': function (yq596g) {
    return this[yq596g]['locator'];
  }, 'getQName': function (ia0h) {
    return this[ia0h]['qName'];
  }, 'getURI': function (j025h) {
    return this[j025h]['uri'];
  }, 'getValue': function (jda0h2) {
    return this[jda0h2]['value'];
  } }, j1_gq6925({}, j1_gq6925['prototype']) instanceof j1_gq6925 || (j1_gq6925 = function (qg952, a$wiz) {
  function re_8o() {}for (a$wiz in re_8o['prototype'] = a$wiz, re_8o = new re_8o(), qg952) re_8o[a$wiz] = qg952[a$wiz];return re_8o;
}), exports['XMLReader'] = j1_e8o_;