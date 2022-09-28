var c = wx.$a;
function gug12e() {}function gzvhjs(t8d6qr, yc_o40, jvkhzn, qtr8d5, hd6zk) {
  function wuf1g2(sjnvfx) {
    if (sjnvfx > 0xffff) {
      sjnvfx -= 0x10000;var rq578t = 0xd800 + (sjnvfx >> 0xa),
          zdh6 = 0xdc00 + (0x3ff & sjnvfx);return String['fromCharCode'](rq578t, zdh6);
    }return String['fromCharCode'](sjnvfx);
  }function wu21eg(qdtr) {
    var geu_4w = qdtr['slice'](0x1, -0x1);return geu_4w in jvkhzn ? jvkhzn[geu_4w] : '#' === geu_4w['charAt'](0x0) ? wuf1g2(parseInt(geu_4w['substr'](0x1)['replace']('x', '0x'))) : (hd6zk['error']('entity not found:' + qdtr), qdtr);
  }function dr6t8(cl$bmy) {
    if (cl$bmy > vkhjn) {
      var x12sg = t8d6qr['substring'](vkhjn, cl$bmy)['replace'](/&#?\w+;/g, wu21eg);vd6z && e_wou4(vkhjn), qtr8d5['characters'](x12sg, 0x0, cl$bmy - vkhjn), vkhjn = cl$bmy;
    }
  }function e_wou4(ew_u2g, pt35r) {
    for (; ew_u2g >= co$by0 && (pt35r = rt85qd['exec'](t8d6qr));) njxvh = pt35r['index'], co$by0 = njxvh + pt35r[0x0]['length'], vd6z['lineNumber']++;vd6z['columnNumber'] = ew_u2g - njxvh + 0x1;
  }for (var njxvh = 0x0, co$by0 = 0x0, rt85qd = /.*(?:\r\n?|\n)|.*$/g, vd6z = qtr8d5['locator'], f2gu = [{ 'currentNSMap': yc_o40 }], dtq58r = {}, vkhjn = 0x0;;) {
    try {
      var hnjsxv = t8d6qr['indexOf']('<', vkhjn);if (0x0 > hnjsxv) {
        if (!t8d6qr['substr'](vkhjn)['match'](/^\s*$/)) {
          var cyb$o = qtr8d5['doc'],
              _we2gu = cyb$o['createTextNode'](t8d6qr['substr'](vkhjn));cyb$o['appendChild'](_we2gu), qtr8d5['currentElement'] = _we2gu;
        }return;
      }switch (hnjsxv > vkhjn && dr6t8(hnjsxv), t8d6qr['charAt'](hnjsxv + 0x1)) {case '/':
          var p3t75r = t8d6qr['indexOf']('>', hnjsxv + 0x3),
              tqd8k = t8d6qr['substring'](hnjsxv + 0x2, p3t75r),
              uwg2f1 = f2gu['pop']();0x0 > p3t75r ? (tqd8k = t8d6qr['substring'](hnjsxv + 0x2)['replace'](/[\s<].*/, ''), hd6zk['error']('end tag name: ' + tqd8k + ' is not complete:' + uwg2f1['tagName']), p3t75r = hnjsxv + 0x1 + tqd8k['length']) : tqd8k['match'](/\s</) && (tqd8k = tqd8k['replace'](/[\s<].*/, ''), hd6zk['error']('end tag name: ' + tqd8k + ' maybe not complete'), p3t75r = hnjsxv + 0x1 + tqd8k['length']);var r5q8td = uwg2f1['localNSMap'],
              q86zk = uwg2f1['tagName'] == tqd8k,
              bcyo = q86zk || uwg2f1['tagName'] && uwg2f1['tagName']['toLowerCase']() == tqd8k['toLowerCase']();if (bcyo) {
            if (qtr8d5['endElement'](uwg2f1['uri'], uwg2f1['localName'], tqd8k), r5q8td) {
              for (var cby40o in r5q8td) qtr8d5['endPrefixMapping'](cby40o);
            }q86zk || hd6zk['fatalError']('end tag name: ' + tqd8k + ' is not match the current start tagName:' + uwg2f1['tagName']);
          } else f2gu['push'](uwg2f1);p3t75r++;break;case '?':
          vd6z && e_wou4(hnjsxv), p3t75r = gsfj12x(t8d6qr, hnjsxv, qtr8d5);break;case '!':
          vd6z && e_wou4(hnjsxv), p3t75r = gby$0cl(t8d6qr, hnjsxv, qtr8d5, hd6zk);break;default:
          vd6z && e_wou4(hnjsxv);var eug2_w = new g$c0boy(),
              lca = f2gu[f2gu['length'] - 0x1]['currentNSMap'],
              p3t75r = gwe_g(t8d6qr, hnjsxv, eug2_w, lca, wu21eg, hd6zk),
              x1s2 = eug2_w['length'];if (!eug2_w['closed'] && goe_0w(t8d6qr, p3t75r, eug2_w['tagName'], dtq58r) && (eug2_w['closed'] = !0x0, jvkhzn['nbsp'] || hd6zk['warning']('unclosed xml attribute')), vd6z && x1s2) {
            for (var u4ew_g = gb0l$yc(vd6z, {}), vkzhn = 0x0; x1s2 > vkzhn; vkzhn++) {
              var m$lc = eug2_w[vkzhn];e_wou4(m$lc['offset']), m$lc['locator'] = gb0l$yc(vd6z, {});
            }qtr8d5['locator'] = u4ew_g, gxuf2g(eug2_w, qtr8d5, lca) && f2gu['push'](eug2_w), qtr8d5['locator'] = vd6z;
          } else gxuf2g(eug2_w, qtr8d5, lca) && f2gu['push'](eug2_w);'http://www.w3.org/1999/xhtml' !== eug2_w['uri'] || eug2_w['closed'] ? p3t75r++ : p3t75r = gw0_oe(t8d6qr, p3t75r, eug2_w['tagName'], wu21eg, qtr8d5);}
    } catch (bcy0$) {
      hd6zk['error']('element parse error: ' + bcy0$), p3t75r = -0x1;
    }p3t75r > vkhjn ? vkhjn = p3t75r : dr6t8(Math['max'](hnjsxv, vkhjn) + 0x1);
  }
}function gb0l$yc(zhvk6n, bc0ly$) {
  return bc0ly$['lineNumber'] = zhvk6n['lineNumber'], bc0ly$['columnNumber'] = zhvk6n['columnNumber'], bc0ly$;
}function gwe_g(dhzkq, zd6h, jsnxvh, vn6hzk, kjhnvz, mbcl$) {
  for (var wu4e_o, szjhvn, nvszhj = ++zd6h, ug2fw = gxf1s2j;;) {
    var c_4o0y = dhzkq['charAt'](nvszhj);switch (c_4o0y) {case '=':
        if (ug2fw === gvdhz6) wu4e_o = dhzkq['slice'](zd6h, nvszhj), ug2fw = gwg12u;else {
          if (ug2fw !== gvdhk6) throw new Error('attribute equal must after attrName');ug2fw = gwg12u;
        }break;case '\x27':case '\x22':
        if (ug2fw === gwg12u || ug2fw === gvdhz6) {
          if (ug2fw === gvdhz6 && (mbcl$['warning']('attribute value must after "="'), wu4e_o = dhzkq['slice'](zd6h, nvszhj)), zd6h = nvszhj + 0x1, nvszhj = dhzkq['indexOf'](c_4o0y, zd6h), !(nvszhj > 0x0)) throw new Error('attribute value no end \'' + c_4o0y + '\' match');szjhvn = dhzkq['slice'](zd6h, nvszhj)['replace'](/&#?\w+;/g, kjhnvz), jsnxvh['add'](wu4e_o, szjhvn, zd6h - 0x1), ug2fw = gu2w1gf;
        } else {
          if (ug2fw != grpt35) throw new Error('attribute value must after "="');szjhvn = dhzkq['slice'](zd6h, nvszhj)['replace'](/&#?\w+;/g, kjhnvz), jsnxvh['add'](wu4e_o, szjhvn, zd6h), mbcl$['warning']('attribute "' + wu4e_o + '" missed start quot(' + c_4o0y + ')!!'), zd6h = nvszhj + 0x1, ug2fw = gu2w1gf;
        }break;case '/':
        switch (ug2fw) {case gxf1s2j:
            jsnxvh['setTagName'](dhzkq['slice'](zd6h, nvszhj));case gu2w1gf:case gqkd8:case glcb0y:
            ug2fw = glcb0y, jsnxvh['closed'] = !0x0;case grpt35:case gvdhz6:case gvdhk6:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return mbcl$['error']('unexpected end of input'), ug2fw == gxf1s2j && jsnxvh['setTagName'](dhzkq['slice'](zd6h, nvszhj)), nvszhj;case '>':
        switch (ug2fw) {case gxf1s2j:
            jsnxvh['setTagName'](dhzkq['slice'](zd6h, nvszhj));case gu2w1gf:case gqkd8:case glcb0y:
            break;case grpt35:case gvdhz6:
            szjhvn = dhzkq['slice'](zd6h, nvszhj), '/' === szjhvn['slice'](-0x1) && (jsnxvh['closed'] = !0x0, szjhvn = szjhvn['slice'](0x0, -0x1));case gvdhk6:
            ug2fw === gvdhk6 && (szjhvn = wu4e_o), ug2fw == grpt35 ? (mbcl$['warning']('attribute "' + szjhvn + '" missed quot(")!!'), jsnxvh['add'](wu4e_o, szjhvn['replace'](/&#?\w+;/g, kjhnvz), zd6h)) : ('http://www.w3.org/1999/xhtml' === vn6hzk[''] && szjhvn['match'](/^(?:disabled|checked|selected)$/i) || mbcl$['warning']('attribute "' + szjhvn + '" missed value!! "' + szjhvn + '" instead!!'), jsnxvh['add'](szjhvn, szjhvn, zd6h));break;case gwg12u:
            throw new Error('attribute value missed!!');}return nvszhj;case '\u0080':
        c_4o0y = '\x20';default:
        if ('\x20' >= c_4o0y) switch (ug2fw) {case gxf1s2j:
            jsnxvh['setTagName'](dhzkq['slice'](zd6h, nvszhj)), ug2fw = gqkd8;break;case gvdhz6:
            wu4e_o = dhzkq['slice'](zd6h, nvszhj), ug2fw = gvdhk6;break;case grpt35:
            var szjhvn = dhzkq['slice'](zd6h, nvszhj)['replace'](/&#?\w+;/g, kjhnvz);mbcl$['warning']('attribute "' + szjhvn + '" missed quot(")!!'), jsnxvh['add'](wu4e_o, szjhvn, zd6h);case gu2w1gf:
            ug2fw = gqkd8;} else switch (ug2fw) {case gvdhk6:
            {
              jsnxvh['tagName'];
            }'http://www.w3.org/1999/xhtml' === vn6hzk[''] && wu4e_o['match'](/^(?:disabled|checked|selected)$/i) || mbcl$['warning']('attribute "' + wu4e_o + '" missed value!! "' + wu4e_o + '" instead2!!'), jsnxvh['add'](wu4e_o, wu4e_o, zd6h), zd6h = nvszhj, ug2fw = gvdhz6;break;case gu2w1gf:
            mbcl$['warning']('attribute space is required"' + wu4e_o + '\x22!!');case gqkd8:
            ug2fw = gvdhz6, zd6h = nvszhj;break;case gwg12u:
            ug2fw = grpt35, zd6h = nvszhj;break;case glcb0y:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}nvszhj++;
  }
}function gxuf2g(bm$lc, ri73p5, kn6hz) {
  for (var _uw4 = bm$lc['tagName'], w4uoe = null, f21xs = bm$lc['length']; f21xs--;) {
    var eo_w40 = bm$lc[f21xs],
        we40 = eo_w40['qName'],
        ge2_uw = eo_w40['value'],
        fjnv = we40['indexOf'](':');if (fjnv > 0x0) var gu2e_w = eo_w40['prefix'] = we40['slice'](0x0, fjnv),
        gsf = we40['slice'](fjnv + 0x1),
        trdq = 'xmlns' === gu2e_w && gsf;else gsf = we40, gu2e_w = null, trdq = 'xmlns' === we40 && '';eo_w40['localName'] = gsf, trdq !== !0x1 && (null == w4uoe && (w4uoe = {}, gwu2ge(kn6hz, kn6hz = {})), kn6hz[trdq] = w4uoe[trdq] = ge2_uw, eo_w40['uri'] = 'http://www.w3.org/2000/xmlns/', ri73p5['startPrefixMapping'](trdq, ge2_uw));
  }for (var f21xs = bm$lc['length']; f21xs--;) {
    eo_w40 = bm$lc[f21xs];var gu2e_w = eo_w40['prefix'];gu2e_w && ('xml' === gu2e_w && (eo_w40['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== gu2e_w && (eo_w40['uri'] = kn6hz[gu2e_w || '']));
  }var fjnv = _uw4['indexOf'](':');fjnv > 0x0 ? (gu2e_w = bm$lc['prefix'] = _uw4['slice'](0x0, fjnv), gsf = bm$lc['localName'] = _uw4['slice'](fjnv + 0x1)) : (gu2e_w = null, gsf = bm$lc['localName'] = _uw4);var boy0$c = bm$lc['uri'] = kn6hz[gu2e_w || ''];if (ri73p5['startElement'](boy0$c, gsf, _uw4, bm$lc), !bm$lc['closed']) return bm$lc['currentNSMap'] = kn6hz, bm$lc['localNSMap'] = w4uoe, !0x0;if (ri73p5['endElement'](boy0$c, gsf, _uw4), w4uoe) {
    for (gu2e_w in w4uoe) ri73p5['endPrefixMapping'](gu2e_w);
  }
}function gw0_oe(_w2geu, hjxns, xsnh, cm$ly, tdqk6) {
  if (/^(?:script|textarea)$/i['test'](xsnh)) {
    var c4y_o0 = _w2geu['indexOf']('</' + xsnh + '>', hjxns),
        sjvznh = _w2geu['substring'](hjxns + 0x1, c4y_o0);if (/[&<]/['test'](sjvznh)) return (/^script$/i['test'](xsnh) ? (tdqk6['characters'](sjvznh, 0x0, sjvznh['length']), c4y_o0) : (sjvznh = sjvznh['replace'](/&#?\w+;/g, cm$ly), tdqk6['characters'](sjvznh, 0x0, sjvznh['length']), c4y_o0)
    );
  }return hjxns + 0x1;
}function goe_0w(c0y4bo, gwe21u, _yo0e, o_y40e) {
  var ybo4c0 = o_y40e[_yo0e];return null == ybo4c0 && (ybo4c0 = c0y4bo['lastIndexOf']('</' + _yo0e + '>'), gwe21u > ybo4c0 && (ybo4c0 = c0y4bo['lastIndexOf']('</' + _yo0e)), o_y40e[_yo0e] = ybo4c0), gwe21u > ybo4c0;
}function gwu2ge(tpr5, dkt68q) {
  for (var kz6hvd in tpr5) dkt68q[kz6hvd] = tpr5[kz6hvd];
}function gby$0cl($ybco0, r7p53t, uw1e, y4_oe) {
  var gxfu12 = $ybco0['charAt'](r7p53t + 0x2);switch (gxfu12) {case '-':
      if ('-' === $ybco0['charAt'](r7p53t + 0x3)) {
        var mcabl$ = $ybco0['indexOf']('-->', r7p53t + 0x4);return mcabl$ > r7p53t ? (uw1e['comment']($ybco0, r7p53t + 0x4, mcabl$ - r7p53t - 0x4), mcabl$ + 0x3) : (y4_oe['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == $ybco0['substr'](r7p53t + 0x3, 0x6)) {
        var mcabl$ = $ybco0['indexOf'](']]>', r7p53t + 0x9);return uw1e['startCDATA'](), uw1e['characters']($ybco0, r7p53t + 0x9, mcabl$ - r7p53t - 0x9), uw1e['endCDATA'](), mcabl$ + 0x3;
      }var fw12u = go0e4_($ybco0, r7p53t),
          jsx2f = fw12u['length'];if (jsx2f > 0x1 && /!doctype/i['test'](fw12u[0x0][0x0])) {
        var $bcm = fw12u[0x1][0x0],
            ew_4uo = jsx2f > 0x3 && /^public$/i['test'](fw12u[0x2][0x0]) && fw12u[0x3][0x0],
            b$lcma = jsx2f > 0x4 && fw12u[0x4][0x0],
            d6tqr = fw12u[jsx2f - 0x1];return uw1e['startDTD']($bcm, ew_4uo && ew_4uo['replace'](/^(['"])(.*?)\1$/, '$2'), b$lcma && b$lcma['replace'](/^(['"])(.*?)\1$/, '$2')), uw1e['endDTD'](), d6tqr['index'] + d6tqr[0x0]['length'];
      }}return -0x1;
}function gsfj12x(al$9m, t3r78, $c0) {
  var $mlc = al$9m['indexOf']('?>', t3r78);if ($mlc) {
    var u1g2f = al$9m['substring'](t3r78, $mlc)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (u1g2f) {
      {
        u1g2f[0x0]['length'];
      }return $c0['processingInstruction'](u1g2f[0x1], u1g2f[0x2]), $mlc + 0x2;
    }return -0x1;
  }return -0x1;
}function g$c0boy() {}function gq8kd(jsxhv, l9mba) {
  return jsxhv['__proto__'] = l9mba, jsxhv;
}function go0e4_(z6dq, oy_0e4) {
  var x2jsf1,
      m$9a = [],
      _0eow = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (_0eow['lastIndex'] = oy_0e4, _0eow['exec'](z6dq); x2jsf1 = _0eow['exec'](z6dq);) if (m$9a['push'](x2jsf1), x2jsf1[0x1]) return m$9a;
}var gn6kzvh = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    guw_ge2 = new RegExp('[\\-\\.0-9' + gn6kzvh['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    g$lcyb0 = new RegExp('^' + gn6kzvh['source'] + guw_ge2['source'] + '*(?::' + gn6kzvh['source'] + guw_ge2['source'] + '*)?$'),
    gxf1s2j = 0x0,
    gvdhz6 = 0x1,
    gvdhk6 = 0x2,
    gwg12u = 0x3,
    grpt35 = 0x4,
    gu2w1gf = 0x5,
    gqkd8 = 0x6,
    glcb0y = 0x7;gug12e['prototype'] = { 'parse': function (xhjns, vsjzh, hzknvj) {
    var gu4ew = this['domBuilder'];gu4ew['startDocument'](), gwu2ge(vsjzh, vsjzh = {}), gzvhjs(xhjns, vsjzh, hzknvj, gu4ew, this['errorHandler']), gu4ew['endDocument']();
  } }, g$c0boy['prototype'] = { 'setTagName': function (y0bo4) {
    if (!g$lcyb0['test'](y0bo4)) throw new Error('invalid tagName:' + y0bo4);this['tagName'] = y0bo4;
  }, 'add': function (l$ycb0, k8q6td, sn1f) {
    if (!g$lcyb0['test'](l$ycb0)) throw new Error('invalid attribute:' + l$ycb0);this[this['length']++] = { 'qName': l$ycb0, 'value': k8q6td, 'offset': sn1f };
  }, 'length': 0x0, 'getLocalName': function (nsf1jx) {
    return this[nsf1jx]['localName'];
  }, 'getLocator': function (dz8k) {
    return this[dz8k]['locator'];
  }, 'getQName': function (nzvhsj) {
    return this[nzvhsj]['qName'];
  }, 'getURI': function (c$0lby) {
    return this[c$0lby]['uri'];
  }, 'getValue': function ($ylcm) {
    return this[$ylcm]['value'];
  } }, gq8kd({}, gq8kd['prototype']) instanceof gq8kd || (gq8kd = function (co, rdt85q) {
  function zqd86k() {}zqd86k['prototype'] = rdt85q, zqd86k = new zqd86k();for (rdt85q in co) zqd86k[rdt85q] = co[rdt85q];return zqd86k;
}), exports['XMLReader'] = gug12e;