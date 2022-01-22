var J = wx.h$;
function gn4i1u() {}function gepw_92(k6gc8d, j7inx1, qryv, orvjy7, v7in) {
  function zthc86(a4mu) {
    if (a4mu > 0xffff) {
      a4mu -= 0x10000;var p_tehz = 0xd800 + (a4mu >> 0xa),
          p_hez2 = 0xdc00 + (0x3ff & a4mu);return String['fromCharCode'](p_tehz, p_hez2);
    }return String['fromCharCode'](a4mu);
  }function lum4(epw9_2) {
    var gkb0q = epw9_2['slice'](0x1, -0x1);return gkb0q in qryv ? qryv[gkb0q] : '#' === gkb0q['charAt'](0x0) ? zthc86(parseInt(gkb0q['substr'](0x1)['replace']('x', '0x'))) : (v7in['error']('entity not found:' + epw9_2), epw9_2);
  }function bk50(p2_f9) {
    if (p2_f9 > j1i) {
      var qdbk0g = k6gc8d['substring'](j1i, p2_f9)['replace'](/&#?\w+;/g, lum4);ryj7 && yov5jr(j1i), orvjy7['characters'](qdbk0g, 0x0, p2_f9 - j1i), j1i = p2_f9;
    }
  }function yov5jr(vjoyr7, ws2$) {
    for (; vjoyr7 >= kc6dg && (ws2$ = ixvjn['exec'](k6gc8d));) _pw29f = ws2$['index'], kc6dg = _pw29f + ws2$[0x0]['length'], ryj7['lineNumber']++;ryj7['columnNumber'] = vjoyr7 - _pw29f + 0x1;
  }for (var _pw29f = 0x0, kc6dg = 0x0, ixvjn = /.*(?:\r\n?|\n)|.*$/g, ryj7 = orvjy7['locator'], b5g0qk = [{ 'currentNSMap': j7inx1 }], tz8c6h = {}, j1i = 0x0;;) {
    try {
      var yrb = k6gc8d['indexOf']('<', j1i);if (0x0 > yrb) {
        if (!k6gc8d['substr'](j1i)['match'](/^\s*$/)) {
          var laum34 = orvjy7['doc'],
              cet8zh = laum34['createTextNode'](k6gc8d['substr'](j1i));laum34['appendChild'](cet8zh), orvjy7['currentElement'] = cet8zh;
        }return;
      }switch (yrb > j1i && bk50(yrb), k6gc8d['charAt'](yrb + 0x1)) {case '/':
          var kcd6g8 = k6gc8d['indexOf']('>', yrb + 0x3),
              hp_e = k6gc8d['substring'](yrb + 0x2, kcd6g8),
              nx7vij = b5g0qk['pop']();0x0 > kcd6g8 ? (hp_e = k6gc8d['substring'](yrb + 0x2)['replace'](/[\s<].*/, ''), v7in['error']('end tag name: ' + hp_e + ' is not complete:' + nx7vij['tagName']), kcd6g8 = yrb + 0x1 + hp_e['length']) : hp_e['match'](/\s</) && (hp_e = hp_e['replace'](/[\s<].*/, ''), v7in['error']('end tag name: ' + hp_e + ' maybe not complete'), kcd6g8 = yrb + 0x1 + hp_e['length']);var zht_ep = nx7vij['localNSMap'],
              wp9_e = nx7vij['tagName'] == hp_e,
              fs2$ = wp9_e || nx7vij['tagName'] && nx7vij['tagName']['toLowerCase']() == hp_e['toLowerCase']();if (fs2$) {
            if (orvjy7['endElement'](nx7vij['uri'], nx7vij['localName'], hp_e), zht_ep) {
              for (var etch8 in zht_ep) orvjy7['endPrefixMapping'](etch8);
            }wp9_e || v7in['fatalError']('end tag name: ' + hp_e + ' is not match the current start tagName:' + nx7vij['tagName']);
          } else b5g0qk['push'](nx7vij);kcd6g8++;break;case '?':
          ryj7 && yov5jr(yrb), kcd6g8 = ge2p_hz(k6gc8d, yrb, orvjy7);break;case '!':
          ryj7 && yov5jr(yrb), kcd6g8 = gxi71j(k6gc8d, yrb, orvjy7, v7in);break;default:
          ryj7 && yov5jr(yrb);var riv7j = new gxjrvy(),
              yjxv7r = b5g0qk[b5g0qk['length'] - 0x1]['currentNSMap'],
              kcd6g8 = gk08d6(k6gc8d, yrb, riv7j, yjxv7r, lum4, v7in),
              w9fp = riv7j['length'];if (!riv7j['closed'] && ginx17(k6gc8d, kcd6g8, riv7j['tagName'], tz8c6h) && (riv7j['closed'] = !0x0, qryv['nbsp'] || v7in['warning']('unclosed xml attribute')), ryj7 && w9fp) {
            for (var b5yo0q = goq5b0(ryj7, {}), x7inj = 0x0; w9fp > x7inj; x7inj++) {
              var z_2epw = riv7j[x7inj];yov5jr(z_2epw['offset']), z_2epw['locator'] = goq5b0(ryj7, {});
            }orvjy7['locator'] = b5yo0q, gck6d8(riv7j, orvjy7, yjxv7r) && b5g0qk['push'](riv7j), orvjy7['locator'] = ryj7;
          } else gck6d8(riv7j, orvjy7, yjxv7r) && b5g0qk['push'](riv7j);'http://www.w3.org/1999/xhtml' !== riv7j['uri'] || riv7j['closed'] ? kcd6g8++ : kcd6g8 = gzhp_t(k6gc8d, kcd6g8, riv7j['tagName'], lum4, orvjy7);}
    } catch (i7xn1j) {
      v7in['error']('element parse error: ' + i7xn1j), kcd6g8 = -0x1;
    }kcd6g8 > j1i ? j1i = kcd6g8 : bk50(Math['max'](yrb, j1i) + 0x1);
  }
}function goq5b0(f9p2_w, d6bk0g) {
  return d6bk0g['lineNumber'] = f9p2_w['lineNumber'], d6bk0g['columnNumber'] = f9p2_w['columnNumber'], d6bk0g;
}function gk08d6(pt_e, pctehz, tpz_, a13, htd8c6, p9_e2w) {
  for (var orv7jy, qk0gdb, yvjo7 = ++pctehz, dcg8k6 = gulma3;;) {
    var rxyvj = pt_e['charAt'](yvjo7);switch (rxyvj) {case '=':
        if (dcg8k6 === gzh6ct8) orv7jy = pt_e['slice'](pctehz, yvjo7), dcg8k6 = gua4;else {
          if (dcg8k6 !== gij1xn) throw new Error('attribute equal must after attrName');dcg8k6 = gua4;
        }break;case '\x27':case '\x22':
        if (dcg8k6 === gua4 || dcg8k6 === gzh6ct8) {
          if (dcg8k6 === gzh6ct8 && (p9_e2w['warning']('attribute value must after "="'), orv7jy = pt_e['slice'](pctehz, yvjo7)), pctehz = yvjo7 + 0x1, yvjo7 = pt_e['indexOf'](rxyvj, pctehz), !(yvjo7 > 0x0)) throw new Error('attribute value no end \'' + rxyvj + '\' match');qk0gdb = pt_e['slice'](pctehz, yvjo7)['replace'](/&#?\w+;/g, htd8c6), tpz_['add'](orv7jy, qk0gdb, pctehz - 0x1), dcg8k6 = gz_wp;
        } else {
          if (dcg8k6 != gjixv) throw new Error('attribute value must after "="');qk0gdb = pt_e['slice'](pctehz, yvjo7)['replace'](/&#?\w+;/g, htd8c6), tpz_['add'](orv7jy, qk0gdb, pctehz), p9_e2w['warning']('attribute "' + orv7jy + '" missed start quot(' + rxyvj + ')!!'), pctehz = yvjo7 + 0x1, dcg8k6 = gz_wp;
        }break;case '/':
        switch (dcg8k6) {case gulma3:
            tpz_['setTagName'](pt_e['slice'](pctehz, yvjo7));case gz_wp:case ge8htcz:case gzecht8:
            dcg8k6 = gzecht8, tpz_['closed'] = !0x0;case gjixv:case gzh6ct8:case gij1xn:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return p9_e2w['error']('unexpected end of input'), dcg8k6 == gulma3 && tpz_['setTagName'](pt_e['slice'](pctehz, yvjo7)), yvjo7;case '>':
        switch (dcg8k6) {case gulma3:
            tpz_['setTagName'](pt_e['slice'](pctehz, yvjo7));case gz_wp:case ge8htcz:case gzecht8:
            break;case gjixv:case gzh6ct8:
            qk0gdb = pt_e['slice'](pctehz, yvjo7), '/' === qk0gdb['slice'](-0x1) && (tpz_['closed'] = !0x0, qk0gdb = qk0gdb['slice'](0x0, -0x1));case gij1xn:
            dcg8k6 === gij1xn && (qk0gdb = orv7jy), dcg8k6 == gjixv ? (p9_e2w['warning']('attribute "' + qk0gdb + '" missed quot(")!!'), tpz_['add'](orv7jy, qk0gdb['replace'](/&#?\w+;/g, htd8c6), pctehz)) : ('http://www.w3.org/1999/xhtml' === a13[''] && qk0gdb['match'](/^(?:disabled|checked|selected)$/i) || p9_e2w['warning']('attribute "' + qk0gdb + '" missed value!! "' + qk0gdb + '" instead!!'), tpz_['add'](qk0gdb, qk0gdb, pctehz));break;case gua4:
            throw new Error('attribute value missed!!');}return yvjo7;case '\u0080':
        rxyvj = '\x20';default:
        if ('\x20' >= rxyvj) switch (dcg8k6) {case gulma3:
            tpz_['setTagName'](pt_e['slice'](pctehz, yvjo7)), dcg8k6 = ge8htcz;break;case gzh6ct8:
            orv7jy = pt_e['slice'](pctehz, yvjo7), dcg8k6 = gij1xn;break;case gjixv:
            var qk0gdb = pt_e['slice'](pctehz, yvjo7)['replace'](/&#?\w+;/g, htd8c6);p9_e2w['warning']('attribute "' + qk0gdb + '" missed quot(")!!'), tpz_['add'](orv7jy, qk0gdb, pctehz);case gz_wp:
            dcg8k6 = ge8htcz;} else switch (dcg8k6) {case gij1xn:
            {
              tpz_['tagName'];
            }'http://www.w3.org/1999/xhtml' === a13[''] && orv7jy['match'](/^(?:disabled|checked|selected)$/i) || p9_e2w['warning']('attribute "' + orv7jy + '" missed value!! "' + orv7jy + '" instead2!!'), tpz_['add'](orv7jy, orv7jy, pctehz), pctehz = yvjo7, dcg8k6 = gzh6ct8;break;case gz_wp:
            p9_e2w['warning']('attribute space is required"' + orv7jy + '\x22!!');case ge8htcz:
            dcg8k6 = gzh6ct8, pctehz = yvjo7;break;case gua4:
            dcg8k6 = gjixv, pctehz = yvjo7;break;case gzecht8:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}yvjo7++;
  }
}function gck6d8(hztp_, qg0kb, d08k6) {
  for (var wep9_ = hztp_['tagName'], d8gc = null, eh_2zp = hztp_['length']; eh_2zp--;) {
    var d6gct = hztp_[eh_2zp],
        um3l4a = d6gct['qName'],
        wz2_ep = d6gct['value'],
        qko0 = um3l4a['indexOf'](':');if (qko0 > 0x0) var ri = d6gct['prefix'] = um3l4a['slice'](0x0, qko0),
        v7xjni = um3l4a['slice'](qko0 + 0x1),
        ml43u = 'xmlns' === ri && v7xjni;else v7xjni = um3l4a, ri = null, ml43u = 'xmlns' === um3l4a && '';d6gct['localName'] = v7xjni, ml43u !== !0x1 && (null == d8gc && (d8gc = {}, gsw2f9$(d08k6, d08k6 = {})), d08k6[ml43u] = d8gc[ml43u] = wz2_ep, d6gct['uri'] = 'http://www.w3.org/2000/xmlns/', qg0kb['startPrefixMapping'](ml43u, wz2_ep));
  }for (var eh_2zp = hztp_['length']; eh_2zp--;) {
    d6gct = hztp_[eh_2zp];var ri = d6gct['prefix'];ri && ('xml' === ri && (d6gct['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== ri && (d6gct['uri'] = d08k6[ri || '']));
  }var qko0 = wep9_['indexOf'](':');qko0 > 0x0 ? (ri = hztp_['prefix'] = wep9_['slice'](0x0, qko0), v7xjni = hztp_['localName'] = wep9_['slice'](qko0 + 0x1)) : (ri = null, v7xjni = hztp_['localName'] = wep9_);var i7n1x4 = hztp_['uri'] = d08k6[ri || ''];if (qg0kb['startElement'](i7n1x4, v7xjni, wep9_, hztp_), !hztp_['closed']) return hztp_['currentNSMap'] = d08k6, hztp_['localNSMap'] = d8gc, !0x0;if (qg0kb['endElement'](i7n1x4, v7xjni, wep9_), d8gc) {
    for (ri in d8gc) qg0kb['endPrefixMapping'](ri);
  }
}function gzhp_t(tchz86, g86cdk, ht_epz, rb5q, i7xjnv) {
  if (/^(?:script|textarea)$/i['test'](ht_epz)) {
    var dkq0g = tchz86['indexOf']('</' + ht_epz + '>', g86cdk),
        t86czh = tchz86['substring'](g86cdk + 0x1, dkq0g);if (/[&<]/['test'](t86czh)) return (/^script$/i['test'](ht_epz) ? (i7xjnv['characters'](t86czh, 0x0, t86czh['length']), dkq0g) : (t86czh = t86czh['replace'](/&#?\w+;/g, rb5q), i7xjnv['characters'](t86czh, 0x0, t86czh['length']), dkq0g)
    );
  }return g86cdk + 0x1;
}function ginx17(_29f$w, dh6tc, n7jv, c8dtg6) {
  var k0gq5 = c8dtg6[n7jv];return null == k0gq5 && (k0gq5 = _29f$w['lastIndexOf']('</' + n7jv + '>'), dh6tc > k0gq5 && (k0gq5 = _29f$w['lastIndexOf']('</' + n7jv)), c8dtg6[n7jv] = k0gq5), dh6tc > k0gq5;
}function gsw2f9$(vqy5or, bd6gk0) {
  for (var z2_he in vqy5or) bd6gk0[z2_he] = vqy5or[z2_he];
}function gxi71j(_hezp, g5qkb, qo5ryb, i7v) {
  var zt68 = _hezp['charAt'](g5qkb + 0x2);switch (zt68) {case '-':
      if ('-' === _hezp['charAt'](g5qkb + 0x3)) {
        var k80g = _hezp['indexOf']('-->', g5qkb + 0x4);return k80g > g5qkb ? (qo5ryb['comment'](_hezp, g5qkb + 0x4, k80g - g5qkb - 0x4), k80g + 0x3) : (i7v['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == _hezp['substr'](g5qkb + 0x3, 0x6)) {
        var k80g = _hezp['indexOf'](']]>', g5qkb + 0x9);return qo5ryb['startCDATA'](), qo5ryb['characters'](_hezp, g5qkb + 0x9, k80g - g5qkb - 0x9), qo5ryb['endCDATA'](), k80g + 0x3;
      }var vy5orj = gl3a41(_hezp, g5qkb),
          w_pz = vy5orj['length'];if (w_pz > 0x1 && /!doctype/i['test'](vy5orj[0x0][0x0])) {
        var qb0ko = vy5orj[0x1][0x0],
            q5by = w_pz > 0x3 && /^public$/i['test'](vy5orj[0x2][0x0]) && vy5orj[0x3][0x0],
            tecph = w_pz > 0x4 && vy5orj[0x4][0x0],
            l4m3ua = vy5orj[w_pz - 0x1];return qo5ryb['startDTD'](qb0ko, q5by && q5by['replace'](/^(['"])(.*?)\1$/, '$2'), tecph && tecph['replace'](/^(['"])(.*?)\1$/, '$2')), qo5ryb['endDTD'](), l4m3ua['index'] + l4m3ua[0x0]['length'];
      }}return -0x1;
}function ge2p_hz($w2f9_, oqb50, czte8h) {
  var i7jvn = $w2f9_['indexOf']('?>', oqb50);if (i7jvn) {
    var pw_9e = $w2f9_['substring'](oqb50, i7jvn)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (pw_9e) {
      {
        pw_9e[0x0]['length'];
      }return czte8h['processingInstruction'](pw_9e[0x1], pw_9e[0x2]), i7jvn + 0x2;
    }return -0x1;
  }return -0x1;
}function gxjrvy() {}function ga4u1l3(pt_ehz, zt6c8) {
  return pt_ehz['__proto__'] = zt6c8, pt_ehz;
}function gl3a41(rjx7vy, htze) {
  var $92s,
      tz86hc = [],
      we2p_z = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (we2p_z['lastIndex'] = htze, we2p_z['exec'](rjx7vy); $92s = we2p_z['exec'](rjx7vy);) if (tz86hc['push']($92s), $92s[0x1]) return tz86hc;
}var gn7jx = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    g_zp2w = new RegExp('[\\-\\.0-9' + gn7jx['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    gkb0g5 = new RegExp('^' + gn7jx['source'] + g_zp2w['source'] + '*(?::' + gn7jx['source'] + g_zp2w['source'] + '*)?$'),
    gulma3 = 0x0,
    gzh6ct8 = 0x1,
    gij1xn = 0x2,
    gua4 = 0x3,
    gjixv = 0x4,
    gz_wp = 0x5,
    ge8htcz = 0x6,
    gzecht8 = 0x7;gn4i1u['prototype'] = { 'parse': function (jxn7i, w29sf, ch8z) {
    var r5bqyo = this['domBuilder'];r5bqyo['startDocument'](), gsw2f9$(w29sf, w29sf = {}), gepw_92(jxn7i, w29sf, ch8z, r5bqyo, this['errorHandler']), r5bqyo['endDocument']();
  } }, gxjrvy['prototype'] = { 'setTagName': function (voyrj7) {
    if (!gkb0g5['test'](voyrj7)) throw new Error('invalid tagName:' + voyrj7);this['tagName'] = voyrj7;
  }, 'add': function (jov7yr, n7xi14, oy5qbr) {
    if (!gkb0g5['test'](jov7yr)) throw new Error('invalid attribute:' + jov7yr);this[this['length']++] = { 'qName': jov7yr, 'value': n7xi14, 'offset': oy5qbr };
  }, 'length': 0x0, 'getLocalName': function (s2wf9) {
    return this[s2wf9]['localName'];
  }, 'getLocator': function (kc6gd) {
    return this[kc6gd]['locator'];
  }, 'getQName': function (k6b0gd) {
    return this[k6b0gd]['qName'];
  }, 'getURI': function (tdh86c) {
    return this[tdh86c]['uri'];
  }, 'getValue': function (dgb0) {
    return this[dgb0]['value'];
  } }, ga4u1l3({}, ga4u1l3['prototype']) instanceof ga4u1l3 || (ga4u1l3 = function (l34um, cphez) {
  function gdc6k() {}gdc6k['prototype'] = cphez, gdc6k = new gdc6k();for (cphez in l34um) gdc6k[cphez] = l34um[cphez];return gdc6k;
}), exports['XMLReader'] = gn4i1u;