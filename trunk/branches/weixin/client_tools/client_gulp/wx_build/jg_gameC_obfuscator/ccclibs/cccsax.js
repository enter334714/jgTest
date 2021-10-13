var p = wx.$h;
function a_kvo9ex() {}function a_q0lcw(e982, lzfcqw, f5iza, x8ohe9, m$1j7) {
  function ov5i9(wlc3q) {
    var v5akio = wlc3q['slice'](0x1, -0x1);return v5akio in f5iza ? f5iza[v5akio] : '#' === v5akio['charAt'](0x0) ? 0xffff < (v5akio = parseInt(v5akio['substr'](0x1)['replace']('x', '0x'))) ? (v5akio -= 0x10000, String['fromCharCode'](0xd800 + (v5akio >> 0xa), 0xdc00 + (0x3ff & v5akio))) : String['fromCharCode'](v5akio) : (m$1j7['error']('entity not found:' + wlc3q), wlc3q);
  }function z5cfa(ai5o) {
    var m1_4jy;q0wp < ai5o && (m1_4jy = e982['substring'](q0wp, ai5o)['replace'](/&#?\w+;/g, ov5i9), n_d$t && _t$j7(q0wp), x8ohe9['characters'](m1_4jy, 0x0, ai5o - q0wp), q0wp = ai5o);
  }function _t$j7(m4_yj1, wc3lq0) {
    for (; f5bi <= m4_yj1 && (wc3lq0 = xk9o['exec'](e982));) vko59 = wc3lq0['index'], f5bi = vko59 + wc3lq0[0x0]['length'], n_d$t['lineNumber']++;n_d$t['columnNumber'] = m4_yj1 - vko59 + 0x1;
  }for (var vko59 = 0x0, f5bi = 0x0, xk9o = /.*(?:\r\n?|\n)|.*$/g, n_d$t = x8ohe9['locator'], wqczb = [{ 'currentNSMap': lzfcqw }], my4_1 = {}, q0wp = 0x0;;) {
    try {
      var ibvk5a = e982['indexOf']('<', q0wp),
          kievo9,
          d$_t7;if (ibvk5a < 0x0) return void (e982['substr'](q0wp)['match'](/^\s*$/) || (d$_t7 = (kievo9 = x8ohe9['doc'])['createTextNode'](e982['substr'](q0wp)), kievo9['appendChild'](d$_t7), x8ohe9['currentElement'] = d$_t7));switch (q0wp < ibvk5a && z5cfa(ibvk5a), e982['charAt'](ibvk5a + 0x1)) {case '/':
          var ik5ov9 = e982['indexOf']('>', ibvk5a + 0x3),
              yp0lw3 = e982['substring'](ibvk5a + 0x2, ik5ov9),
              qbwzcf = wqczb['pop']();ik5ov9 < 0x0 ? (yp0lw3 = e982['substring'](ibvk5a + 0x2)['replace'](/[\s<].*/, ''), m$1j7['error']('end tag name: ' + yp0lw3 + ' is not complete:' + qbwzcf['tagName']), ik5ov9 = ibvk5a + 0x1 + yp0lw3['length']) : yp0lw3['match'](/\s</) && (yp0lw3 = yp0lw3['replace'](/[\s<].*/, ''), m$1j7['error']('end tag name: ' + yp0lw3 + ' maybe not complete'), ik5ov9 = ibvk5a + 0x1 + yp0lw3['length']);var fiazb = qbwzcf['localNSMap'],
              a5iv = qbwzcf['tagName'] == yp0lw3;if (a5iv || qbwzcf['tagName'] && qbwzcf['tagName']['toLowerCase']() == yp0lw3['toLowerCase']()) {
            if (x8ohe9['endElement'](qbwzcf['uri'], qbwzcf['localName'], yp0lw3), fiazb) {
              for (var x28 in fiazb) x8ohe9['endPrefixMapping'](x28);
            }a5iv || m$1j7['fatalError']('end tag name: ' + yp0lw3 + ' is not match the current start tagName:' + qbwzcf['tagName']);
          } else wqczb['push'](qbwzcf);ik5ov9++;break;case '?':
          n_d$t && _t$j7(ibvk5a), ik5ov9 = a_hr8x(e982, ibvk5a, x8ohe9);break;case '!':
          n_d$t && _t$j7(ibvk5a), ik5ov9 = a_oke9v(e982, ibvk5a, x8ohe9, m$1j7);break;default:
          n_d$t && _t$j7(ibvk5a);var o9keiv = new a_qw3lf(),
              d7tn = wqczb[wqczb['length'] - 0x1]['currentNSMap'],
              ik5ov9 = a_wq03c(e982, ibvk5a, o9keiv, d7tn, ov5i9, m$1j7),
              _td7$n = o9keiv['length'];if (!o9keiv['closed'] && a_zcqfwl(e982, ik5ov9, o9keiv['tagName'], my4_1) && (o9keiv['closed'] = !0x0, f5iza['nbsp'] || m$1j7['warning']('unclosed xml attribute')), n_d$t && _td7$n) {
            for (var tj71_ = a_h82ex9(n_d$t, {}), ym_1j = 0x0; ym_1j < _td7$n; ym_1j++) {
              var h8x2e = o9keiv[ym_1j];_t$j7(h8x2e['offset']), h8x2e['locator'] = a_h82ex9(n_d$t, {});
            }x8ohe9['locator'] = tj71_, a_l3pq0w(o9keiv, x8ohe9, d7tn) && wqczb['push'](o9keiv), x8ohe9['locator'] = n_d$t;
          } else a_l3pq0w(o9keiv, x8ohe9, d7tn) && wqczb['push'](o9keiv);'http://www.w3.org/1999/xhtml' !== o9keiv['uri'] || o9keiv['closed'] ? ik5ov9++ : ik5ov9 = a_iv5oka(e982, ik5ov9, o9keiv['tagName'], ov5i9, x8ohe9);}
    } catch (v89eox) {
      m$1j7['error']('element parse error: ' + v89eox), ik5ov9 = -0x1;
    }q0wp < ik5ov9 ? q0wp = ik5ov9 : z5cfa(Math['max'](ibvk5a, q0wp) + 0x1);
  }
}function a_h82ex9(ehx829, qcbfa) {
  return qcbfa['lineNumber'] = ehx829['lineNumber'], qcbfa['columnNumber'] = ehx829['columnNumber'], qcbfa;
}function a_wq03c(zkb5ia, $1t7, qcwflz, izfa, xh82e, ev98) {
  for (var g68r2, h2ex8 = ++$1t7, bafzi5 = a_p4y10m;;) {
    var abi5zk = zkb5ia['charAt'](h2ex8);switch (abi5zk) {case '=':
        if (bafzi5 === a_fcwzb) g68r2 = zkb5ia['slice']($1t7, h2ex8), bafzi5 = a_okve;else {
          if (bafzi5 !== a_d_n7) throw new Error('attribute equal must after attrName');bafzi5 = a_okve;
        }break;case '\x27':case '\x22':
        if (bafzi5 === a_okve || bafzi5 === a_fcwzb) {
          if (bafzi5 === a_fcwzb && (ev98['warning']('attribute value must after "="'), g68r2 = zkb5ia['slice']($1t7, h2ex8)), !(0x0 < (h2ex8 = zkb5ia['indexOf'](abi5zk, $1t7 = h2ex8 + 0x1)))) throw new Error('attribute value no end \'' + abi5zk + '\' match');y4pm0 = zkb5ia['slice']($1t7, h2ex8)['replace'](/&#?\w+;/g, xh82e), qcwflz['add'](g68r2, y4pm0, $1t7 - 0x1), bafzi5 = a_fi;
        } else {
          if (bafzi5 != a_hxe86) throw new Error('attribute value must after "="');y4pm0 = zkb5ia['slice']($1t7, h2ex8)['replace'](/&#?\w+;/g, xh82e), qcwflz['add'](g68r2, y4pm0, $1t7), ev98['warning']('attribute "' + g68r2 + '" missed start quot(' + abi5zk + ')!!'), $1t7 = h2ex8 + 0x1, bafzi5 = a_fi;
        }break;case '/':
        switch (bafzi5) {case a_p4y10m:
            qcwflz['setTagName'](zkb5ia['slice']($1t7, h2ex8));case a_fi:case a_r8g2:case a__yj4:
            bafzi5 = a__yj4, qcwflz['closed'] = !0x0;case a_hxe86:case a_fcwzb:case a_d_n7:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return ev98['error']('unexpected end of input'), bafzi5 == a_p4y10m && qcwflz['setTagName'](zkb5ia['slice']($1t7, h2ex8)), h2ex8;case '>':
        switch (bafzi5) {case a_p4y10m:
            qcwflz['setTagName'](zkb5ia['slice']($1t7, h2ex8));case a_fi:case a_r8g2:case a__yj4:
            break;case a_hxe86:case a_fcwzb:
            '/' === (y4pm0 = zkb5ia['slice']($1t7, h2ex8))['slice'](-0x1) && (qcwflz['closed'] = !0x0, y4pm0 = y4pm0['slice'](0x0, -0x1));case a_d_n7:
            bafzi5 === a_d_n7 && (y4pm0 = g68r2), bafzi5 == a_hxe86 ? (ev98['warning']('attribute "' + y4pm0 + '" missed quot(")!!'), qcwflz['add'](g68r2, y4pm0['replace'](/&#?\w+;/g, xh82e), $1t7)) : ('http://www.w3.org/1999/xhtml' === izfa[''] && y4pm0['match'](/^(?:disabled|checked|selected)$/i) || ev98['warning']('attribute "' + y4pm0 + '" missed value!! "' + y4pm0 + '" instead!!'), qcwflz['add'](y4pm0, y4pm0, $1t7));break;case a_okve:
            throw new Error('attribute value missed!!');}return h2ex8;case '\u0080':
        abi5zk = '\x20';default:
        if (abi5zk <= '\x20') switch (bafzi5) {case a_p4y10m:
            qcwflz['setTagName'](zkb5ia['slice']($1t7, h2ex8)), bafzi5 = a_r8g2;break;case a_fcwzb:
            g68r2 = zkb5ia['slice']($1t7, h2ex8), bafzi5 = a_d_n7;break;case a_hxe86:
            var y4pm0 = zkb5ia['slice']($1t7, h2ex8)['replace'](/&#?\w+;/g, xh82e);ev98['warning']('attribute "' + y4pm0 + '" missed quot(")!!'), qcwflz['add'](g68r2, y4pm0, $1t7);case a_fi:
            bafzi5 = a_r8g2;} else switch (bafzi5) {case a_d_n7:
            qcwflz['tagName'], 'http://www.w3.org/1999/xhtml' === izfa[''] && g68r2['match'](/^(?:disabled|checked|selected)$/i) || ev98['warning']('attribute "' + g68r2 + '" missed value!! "' + g68r2 + '" instead2!!'), qcwflz['add'](g68r2, g68r2, $1t7), $1t7 = h2ex8, bafzi5 = a_fcwzb;break;case a_fi:
            ev98['warning']('attribute space is required"' + g68r2 + '\x22!!');case a_r8g2:
            bafzi5 = a_fcwzb, $1t7 = h2ex8;break;case a_okve:
            bafzi5 = a_hxe86, $1t7 = h2ex8;break;case a__yj4:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}h2ex8++;
  }
}function a_l3pq0w(bi5av, wqlz, e9v8x) {
  for (var _jy4m1 = bi5av['tagName'], wqfzb = null, e8x92 = bi5av['length']; e8x92--;) {
    var eho8x9 = bi5av[e8x92],
        a5kbiv = eho8x9['qName'],
        fcb5az = eho8x9['value'],
        w0lpy;a5kbiv = 0x0 < (_7m41 = a5kbiv['indexOf'](':')) ? (x26rh8 = eho8x9['prefix'] = a5kbiv['slice'](0x0, _7m41), w0lpy = a5kbiv['slice'](_7m41 + 0x1), 'xmlns' === x26rh8 && w0lpy) : (x26rh8 = null, 'xmlns' === (w0lpy = a5kbiv) && ''), eho8x9['localName'] = w0lpy, !0x1 !== a5kbiv && (null == wqfzb && (wqfzb = {}, a_aqfbzc(e9v8x, e9v8x = {})), e9v8x[a5kbiv] = wqfzb[a5kbiv] = fcb5az, eho8x9['uri'] = 'http://www.w3.org/2000/xmlns/', wqlz['startPrefixMapping'](a5kbiv, fcb5az));
  }for (e8x92 = bi5av['length']; e8x92--;) (x26rh8 = (eho8x9 = bi5av[e8x92])['prefix']) && ('xml' === x26rh8 && (eho8x9['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== x26rh8 && (eho8x9['uri'] = e9v8x[x26rh8 || '']));var _7m41;w0lpy = 0x0 < (_7m41 = _jy4m1['indexOf'](':')) ? (x26rh8 = bi5av['prefix'] = _jy4m1['slice'](0x0, _7m41), bi5av['localName'] = _jy4m1['slice'](_7m41 + 0x1)) : (x26rh8 = null, bi5av['localName'] = _jy4m1);var y43lp0 = bi5av['uri'] = e9v8x[x26rh8 || ''];if (wqlz['startElement'](y43lp0, w0lpy, _jy4m1, bi5av), !bi5av['closed']) return bi5av['currentNSMap'] = e9v8x, bi5av['localNSMap'] = wqfzb, !0x0;if (wqlz['endElement'](y43lp0, w0lpy, _jy4m1), wqfzb) {
    for (var x26rh8 in wqfzb) wqlz['endPrefixMapping'](x26rh8);
  }
}function a_iv5oka(qzacbf, y3p0m4, abzik, wcq3l0, t$_7n) {
  if (/^(?:script|textarea)$/i['test'](abzik)) {
    var czwf = qzacbf['indexOf']('</' + abzik + '>', y3p0m4),
        qzacbf = qzacbf['substring'](y3p0m4 + 0x1, czwf);if (/[&<]/['test'](qzacbf)) return (/^script$/i['test'](abzik) || (qzacbf = qzacbf['replace'](/&#?\w+;/g, wcq3l0)), t$_7n['characters'](qzacbf, 0x0, qzacbf['length']), czwf
    );
  }return y3p0m4 + 0x1;
}function a_zcqfwl($_tj7n, oikav5, akivo, vioa5) {
  var lw30yp = vioa5[akivo];return null == lw30yp && ((lw30yp = $_tj7n['lastIndexOf']('</' + akivo + '>')) < oikav5 && (lw30yp = $_tj7n['lastIndexOf']('</' + akivo)), vioa5[akivo] = lw30yp), lw30yp < oikav5;
}function a_aqfbzc(ba5zf, py4m1j) {
  for (var pmy140 in ba5zf) py4m1j[pmy140] = ba5zf[pmy140];
}function a_oke9v(kibav, hx2, pwql0, k9vei) {
  var zaibf = kibav['charAt'](hx2 + 0x2);if ('-' === zaibf) return '-' !== kibav['charAt'](hx2 + 0x3) ? -0x1 : hx2 < (ypj4 = kibav['indexOf']('-->', hx2 + 0x4)) ? (pwql0['comment'](kibav, hx2 + 0x4, ypj4 - hx2 - 0x4), ypj4 + 0x3) : (k9vei['error']('Unclosed comment'), -0x1);if ('CDATA[' == kibav['substr'](hx2 + 0x3, 0x6)) {
    var ypj4 = kibav['indexOf'](']]>', hx2 + 0x9);return pwql0['startCDATA'](), pwql0['characters'](kibav, hx2 + 0x9, ypj4 - hx2 - 0x9), pwql0['endCDATA'](), ypj4 + 0x3;
  }zaibf = a_pm41j(kibav, hx2), k9vei = zaibf['length'];if (0x1 < k9vei && /!doctype/i['test'](zaibf[0x0][0x0])) return ypj4 = zaibf[0x1][0x0], kibav = 0x3 < k9vei && /^public$/i['test'](zaibf[0x2][0x0]) && zaibf[0x3][0x0], hx2 = 0x4 < k9vei && zaibf[0x4][0x0], k9vei = zaibf[k9vei - 0x1], (pwql0['startDTD'](ypj4, kibav && kibav['replace'](/^(['"])(.*?)\1$/, '$2'), hx2 && hx2['replace'](/^(['"])(.*?)\1$/, '$2')), pwql0['endDTD'](), k9vei['index'] + k9vei[0x0]['length']);return -0x1;
}function a_hr8x(cfzbqa, j_741, wlcfqz) {
  var my4p1 = cfzbqa['indexOf']('?>', j_741);if (my4p1) return j_741 = cfzbqa['substring'](j_741, my4p1)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), j_741 ? (j_741[0x0]['length'], wlcfqz['processingInstruction'](j_741[0x1], j_741[0x2]), my4p1 + 0x2) : -0x1;return -0x1;
}function a_qw3lf() {}function a_xeh86(avkio5, cbfza5) {
  return avkio5['__proto__'] = cbfza5, avkio5;
}function a_pm41j($1tj, ev9kxo) {
  var $nj_7,
      lwqc3 = [],
      vi9ok5 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (vi9ok5['lastIndex'] = ev9kxo, vi9ok5['exec']($1tj); $nj_7 = vi9ok5['exec']($1tj);) if (lwqc3['push']($nj_7), $nj_7[0x1]) return lwqc3;
}var a_abizf = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    a_oh98ex = new RegExp('[\\-\\.0-9' + a_abizf['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    a_zia5f = new RegExp('^' + a_abizf['source'] + a_oh98ex['source'] + '*(?::' + a_abizf['source'] + a_oh98ex['source'] + '*)?$'),
    a_p4y10m = 0x0,
    a_fcwzb = 0x1,
    a_d_n7 = 0x2,
    a_okve = 0x3,
    a_hxe86 = 0x4,
    a_fi = 0x5,
    a_r8g2 = 0x6,
    a__yj4 = 0x7;a_kvo9ex['prototype'] = { 'parse': function (bkz5, m104, zafbc5) {
    var dn7$st = this['domBuilder'];dn7$st['startDocument'](), a_aqfbzc(m104, m104 = {}), a_q0lcw(bkz5, m104, zafbc5, dn7$st, this['errorHandler']), dn7$st['endDocument']();
  } }, a_qw3lf['prototype'] = { 'setTagName': function (qczwl) {
    if (!a_zia5f['test'](qczwl)) throw new Error('invalid tagName:' + qczwl);this['tagName'] = qczwl;
  }, 'add': function (j7_m1$, qp3l, _4j71) {
    if (!a_zia5f['test'](j7_m1$)) throw new Error('invalid attribute:' + j7_m1$);this[this['length']++] = { 'qName': j7_m1$, 'value': qp3l, 'offset': _4j71 };
  }, 'length': 0x0, 'getLocalName': function (ym0p4) {
    return this[ym0p4]['localName'];
  }, 'getLocator': function (e9vox) {
    return this[e9vox]['locator'];
  }, 'getQName': function (q3wc0) {
    return this[q3wc0]['qName'];
  }, 'getURI': function (iaz5) {
    return this[iaz5]['uri'];
  }, 'getValue': function (aki) {
    return this[aki]['value'];
  } }, a_xeh86({}, a_xeh86['prototype']) instanceof a_xeh86 || (a_xeh86 = function (kiavo5, bvk5) {
  function clqw0() {}for (bvk5 in clqw0['prototype'] = bvk5, clqw0 = new clqw0(), kiavo5) clqw0[bvk5] = kiavo5[bvk5];return clqw0;
}), exports['XMLReader'] = a_kvo9ex;