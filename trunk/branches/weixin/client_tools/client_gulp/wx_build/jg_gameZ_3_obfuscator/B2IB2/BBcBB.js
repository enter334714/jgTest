var D = wx.$b;
function bh2pvw() {}function bv1hpc(muz0yi, _892, ym0uz, w1czm, j40in) {
  function x73qk(r_v29) {
    if (r_v29 > 0xffff) {
      r_v29 -= 0x10000;var kqo7 = 0xd800 + (r_v29 >> 0xa),
          n54ja = 0xdc00 + (0x3ff & r_v29);return String['fromCharCode'](kqo7, n54ja);
    }return String['fromCharCode'](r_v29);
  }function v1w_(cmtp) {
    var iu4j = cmtp['slice'](0x1, -0x1);return iu4j in ym0uz ? ym0uz[iu4j] : '#' === iu4j['charAt'](0x0) ? x73qk(parseInt(iu4j['substr'](0x1)['replace']('x', '0x'))) : (j40in['error']('entity not found:' + cmtp), cmtp);
  }function v9h_2(c1mzty) {
    if (c1mzty > h2v_9) {
      var t1cyzm = muz0yi['substring'](h2v_9, c1mzty)['replace'](/&#?\w+;/g, v1w_);hwvc1p && e$54f(h2v_9), w1czm['characters'](t1cyzm, 0x0, c1mzty - h2v_9), h2v_9 = c1mzty;
    }
  }function e$54f(yinz, ctm1z) {
    for (; yinz >= i0u && (ctm1z = ztui['exec'](muz0yi));) dlxok6 = ctm1z['index'], i0u = dlxok6 + ctm1z[0x0]['length'], hwvc1p['lineNumber']++;hwvc1p['columnNumber'] = yinz - dlxok6 + 0x1;
  }for (var dlxok6 = 0x0, i0u = 0x0, ztui = /.*(?:\r\n?|\n)|.*$/g, hwvc1p = w1czm['locator'], ytmzcu = [{ 'currentNSMap': _892 }], x7qgkl = {}, h2v_9 = 0x0;;) {
    try {
      var kxl6d = muz0yi['indexOf']('<', h2v_9);if (0x0 > kxl6d) {
        if (!muz0yi['substr'](h2v_9)['match'](/^\s*$/)) {
          var utz = w1czm['doc'],
              vp1c = utz['createTextNode'](muz0yi['substr'](h2v_9));utz['appendChild'](vp1c), w1czm['currentElement'] = vp1c;
        }return;
      }switch (kxl6d > h2v_9 && v9h_2(kxl6d), muz0yi['charAt'](kxl6d + 0x1)) {case '/':
          var lx67o = muz0yi['indexOf']('>', kxl6d + 0x3),
              o7xkl6 = muz0yi['substring'](kxl6d + 0x2, lx67o),
              l7kg = ytmzcu['pop']();0x0 > lx67o ? (o7xkl6 = muz0yi['substring'](kxl6d + 0x2)['replace'](/[\s<].*/, ''), j40in['error']('end tag name: ' + o7xkl6 + ' is not complete:' + l7kg['tagName']), lx67o = kxl6d + 0x1 + o7xkl6['length']) : o7xkl6['match'](/\s</) && (o7xkl6 = o7xkl6['replace'](/[\s<].*/, ''), j40in['error']('end tag name: ' + o7xkl6 + ' maybe not complete'), lx67o = kxl6d + 0x1 + o7xkl6['length']);var muzcy = l7kg['localNSMap'],
              j40iun = l7kg['tagName'] == o7xkl6,
              tz1mw = j40iun || l7kg['tagName'] && l7kg['tagName']['toLowerCase']() == o7xkl6['toLowerCase']();if (tz1mw) {
            if (w1czm['endElement'](l7kg['uri'], l7kg['localName'], o7xkl6), muzcy) {
              for (var nj$4 in muzcy) w1czm['endPrefixMapping'](nj$4);
            }j40iun || j40in['fatalError']('end tag name: ' + o7xkl6 + ' is not match the current start tagName:' + l7kg['tagName']);
          } else ytmzcu['push'](l7kg);lx67o++;break;case '?':
          hwvc1p && e$54f(kxl6d), lx67o = bcp1hvw(muz0yi, kxl6d, w1czm);break;case '!':
          hwvc1p && e$54f(kxl6d), lx67o = binu0j4(muz0yi, kxl6d, w1czm, j40in);break;default:
          hwvc1p && e$54f(kxl6d);var r_9h2v = new bhvw2(),
              xqk7o = ytmzcu[ytmzcu['length'] - 0x1]['currentNSMap'],
              lx67o = bu0myzi(muz0yi, kxl6d, r_9h2v, xqk7o, v1w_, j40in),
              w1vh = r_9h2v['length'];if (!r_9h2v['closed'] && bx7lko6(muz0yi, lx67o, r_9h2v['tagName'], x7qgkl) && (r_9h2v['closed'] = !0x0, ym0uz['nbsp'] || j40in['warning']('unclosed xml attribute')), hwvc1p && w1vh) {
            for (var ok7lqx = b_hpwv1(hwvc1p, {}), k86ldo = 0x0; w1vh > k86ldo; k86ldo++) {
              var kqol = r_9h2v[k86ldo];e$54f(kqol['offset']), kqol['locator'] = b_hpwv1(hwvc1p, {});
            }w1czm['locator'] = ok7lqx, bp1vc(r_9h2v, w1czm, xqk7o) && ytmzcu['push'](r_9h2v), w1czm['locator'] = hwvc1p;
          } else bp1vc(r_9h2v, w1czm, xqk7o) && ytmzcu['push'](r_9h2v);'http://www.w3.org/1999/xhtml' !== r_9h2v['uri'] || r_9h2v['closed'] ? lx67o++ : lx67o = bwc1tz(muz0yi, lx67o, r_9h2v['tagName'], v1w_, w1czm);}
    } catch (n4iu) {
      j40in['error']('element parse error: ' + n4iu), lx67o = -0x1;
    }lx67o > h2v_9 ? h2v_9 = lx67o : v9h_2(Math['max'](kxl6d, h2v_9) + 0x1);
  }
}function b_hpwv1(ct1pw, $fa5) {
  return $fa5['lineNumber'] = ct1pw['lineNumber'], $fa5['columnNumber'] = ct1pw['columnNumber'], $fa5;
}function bu0myzi(kld8o6, muzty, jyin0, ytuczm, r6d98, v_w1ph) {
  for (var hp_, lgkxq7, x7g3k = ++muzty, ctw1mp = byucmtz;;) {
    var ji0u = kld8o6['charAt'](x7g3k);switch (ji0u) {case '=':
        if (ctw1mp === bwm1cp) hp_ = kld8o6['slice'](muzty, x7g3k), ctw1mp = bmt1pw;else {
          if (ctw1mp !== bhv_pw2) throw new Error('attribute equal must after attrName');ctw1mp = bmt1pw;
        }break;case '\x27':case '\x22':
        if (ctw1mp === bmt1pw || ctw1mp === bwm1cp) {
          if (ctw1mp === bwm1cp && (v_w1ph['warning']('attribute value must after "="'), hp_ = kld8o6['slice'](muzty, x7g3k)), muzty = x7g3k + 0x1, x7g3k = kld8o6['indexOf'](ji0u, muzty), !(x7g3k > 0x0)) throw new Error('attribute value no end \'' + ji0u + '\' match');lgkxq7 = kld8o6['slice'](muzty, x7g3k)['replace'](/&#?\w+;/g, r6d98), jyin0['add'](hp_, lgkxq7, muzty - 0x1), ctw1mp = btzumcy;
        } else {
          if (ctw1mp != binuyz) throw new Error('attribute value must after "="');lgkxq7 = kld8o6['slice'](muzty, x7g3k)['replace'](/&#?\w+;/g, r6d98), jyin0['add'](hp_, lgkxq7, muzty), v_w1ph['warning']('attribute "' + hp_ + '" missed start quot(' + ji0u + ')!!'), muzty = x7g3k + 0x1, ctw1mp = btzumcy;
        }break;case '/':
        switch (ctw1mp) {case byucmtz:
            jyin0['setTagName'](kld8o6['slice'](muzty, x7g3k));case btzumcy:case bxkl7q:case br9_s82:
            ctw1mp = br9_s82, jyin0['closed'] = !0x0;case binuyz:case bwm1cp:case bhv_pw2:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return v_w1ph['error']('unexpected end of input'), ctw1mp == byucmtz && jyin0['setTagName'](kld8o6['slice'](muzty, x7g3k)), x7g3k;case '>':
        switch (ctw1mp) {case byucmtz:
            jyin0['setTagName'](kld8o6['slice'](muzty, x7g3k));case btzumcy:case bxkl7q:case br9_s82:
            break;case binuyz:case bwm1cp:
            lgkxq7 = kld8o6['slice'](muzty, x7g3k), '/' === lgkxq7['slice'](-0x1) && (jyin0['closed'] = !0x0, lgkxq7 = lgkxq7['slice'](0x0, -0x1));case bhv_pw2:
            ctw1mp === bhv_pw2 && (lgkxq7 = hp_), ctw1mp == binuyz ? (v_w1ph['warning']('attribute "' + lgkxq7 + '" missed quot(")!!'), jyin0['add'](hp_, lgkxq7['replace'](/&#?\w+;/g, r6d98), muzty)) : ('http://www.w3.org/1999/xhtml' === ytuczm[''] && lgkxq7['match'](/^(?:disabled|checked|selected)$/i) || v_w1ph['warning']('attribute "' + lgkxq7 + '" missed value!! "' + lgkxq7 + '" instead!!'), jyin0['add'](lgkxq7, lgkxq7, muzty));break;case bmt1pw:
            throw new Error('attribute value missed!!');}return x7g3k;case '\u0080':
        ji0u = '\x20';default:
        if ('\x20' >= ji0u) switch (ctw1mp) {case byucmtz:
            jyin0['setTagName'](kld8o6['slice'](muzty, x7g3k)), ctw1mp = bxkl7q;break;case bwm1cp:
            hp_ = kld8o6['slice'](muzty, x7g3k), ctw1mp = bhv_pw2;break;case binuyz:
            var lgkxq7 = kld8o6['slice'](muzty, x7g3k)['replace'](/&#?\w+;/g, r6d98);v_w1ph['warning']('attribute "' + lgkxq7 + '" missed quot(")!!'), jyin0['add'](hp_, lgkxq7, muzty);case btzumcy:
            ctw1mp = bxkl7q;} else switch (ctw1mp) {case bhv_pw2:
            {
              jyin0['tagName'];
            }'http://www.w3.org/1999/xhtml' === ytuczm[''] && hp_['match'](/^(?:disabled|checked|selected)$/i) || v_w1ph['warning']('attribute "' + hp_ + '" missed value!! "' + hp_ + '" instead2!!'), jyin0['add'](hp_, hp_, muzty), muzty = x7g3k, ctw1mp = bwm1cp;break;case btzumcy:
            v_w1ph['warning']('attribute space is required"' + hp_ + '\x22!!');case bxkl7q:
            ctw1mp = bwm1cp, muzty = x7g3k;break;case bmt1pw:
            ctw1mp = binuyz, muzty = x7g3k;break;case br9_s82:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}x7g3k++;
  }
}function bp1vc(unj4i, yinj0, v1h) {
  for (var zu0ni = unj4i['tagName'], cmwp1 = null, _rp2hv = unj4i['length']; _rp2hv--;) {
    var h2prv_ = unj4i[_rp2hv],
        ztiuym = h2prv_['qName'],
        w1pc = h2prv_['value'],
        _8rs9 = ztiuym['indexOf'](':');if (_8rs9 > 0x0) var ztmc1 = h2prv_['prefix'] = ztiuym['slice'](0x0, _8rs9),
        a$e4 = ztiuym['slice'](_8rs9 + 0x1),
        _rs92 = 'xmlns' === ztmc1 && a$e4;else a$e4 = ztiuym, ztmc1 = null, _rs92 = 'xmlns' === ztiuym && '';h2prv_['localName'] = a$e4, _rs92 !== !0x1 && (null == cmwp1 && (cmwp1 = {}, bjn0$(v1h, v1h = {})), v1h[_rs92] = cmwp1[_rs92] = w1pc, h2prv_['uri'] = 'http://www.w3.org/2000/xmlns/', yinj0['startPrefixMapping'](_rs92, w1pc));
  }for (var _rp2hv = unj4i['length']; _rp2hv--;) {
    h2prv_ = unj4i[_rp2hv];var ztmc1 = h2prv_['prefix'];ztmc1 && ('xml' === ztmc1 && (h2prv_['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== ztmc1 && (h2prv_['uri'] = v1h[ztmc1 || '']));
  }var _8rs9 = zu0ni['indexOf'](':');_8rs9 > 0x0 ? (ztmc1 = unj4i['prefix'] = zu0ni['slice'](0x0, _8rs9), a$e4 = unj4i['localName'] = zu0ni['slice'](_8rs9 + 0x1)) : (ztmc1 = null, a$e4 = unj4i['localName'] = zu0ni);var f5j4 = unj4i['uri'] = v1h[ztmc1 || ''];if (yinj0['startElement'](f5j4, a$e4, zu0ni, unj4i), !unj4i['closed']) return unj4i['currentNSMap'] = v1h, unj4i['localNSMap'] = cmwp1, !0x0;if (yinj0['endElement'](f5j4, a$e4, zu0ni), cmwp1) {
    for (ztmc1 in cmwp1) yinj0['endPrefixMapping'](ztmc1);
  }
}function bwc1tz(ja5$4n, tp1cmw, $f5ja, zycumt, u40n) {
  if (/^(?:script|textarea)$/i['test']($f5ja)) {
    var twvp = ja5$4n['indexOf']('</' + $f5ja + '>', tp1cmw),
        ox6dl = ja5$4n['substring'](tp1cmw + 0x1, twvp);if (/[&<]/['test'](ox6dl)) return (/^script$/i['test']($f5ja) ? (u40n['characters'](ox6dl, 0x0, ox6dl['length']), twvp) : (ox6dl = ox6dl['replace'](/&#?\w+;/g, zycumt), u40n['characters'](ox6dl, 0x0, ox6dl['length']), twvp)
    );
  }return tp1cmw + 0x1;
}function bx7lko6(imzuty, h1vwpc, ph_r2, cuzmyt) {
  var yi0muz = cuzmyt[ph_r2];return null == yi0muz && (yi0muz = imzuty['lastIndexOf']('</' + ph_r2 + '>'), h1vwpc > yi0muz && (yi0muz = imzuty['lastIndexOf']('</' + ph_r2)), cuzmyt[ph_r2] = yi0muz), h1vwpc > yi0muz;
}function bjn0$(ynji, x6lo7k) {
  for (var vp_h2r in ynji) x6lo7k[vp_h2r] = ynji[vp_h2r];
}function binu0j4(ztmcuy, q3gx7, a$j45f, r9v) {
  var m1wtcp = ztmcuy['charAt'](q3gx7 + 0x2);switch (m1wtcp) {case '-':
      if ('-' === ztmcuy['charAt'](q3gx7 + 0x3)) {
        var i05n4j = ztmcuy['indexOf']('-->', q3gx7 + 0x4);return i05n4j > q3gx7 ? (a$j45f['comment'](ztmcuy, q3gx7 + 0x4, i05n4j - q3gx7 - 0x4), i05n4j + 0x3) : (r9v['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == ztmcuy['substr'](q3gx7 + 0x3, 0x6)) {
        var i05n4j = ztmcuy['indexOf'](']]>', q3gx7 + 0x9);return a$j45f['startCDATA'](), a$j45f['characters'](ztmcuy, q3gx7 + 0x9, i05n4j - q3gx7 - 0x9), a$j45f['endCDATA'](), i05n4j + 0x3;
      }var q7kxgl = b$504n(ztmcuy, q3gx7),
          ptwv1c = q7kxgl['length'];if (ptwv1c > 0x1 && /!doctype/i['test'](q7kxgl[0x0][0x0])) {
        var cwph1 = q7kxgl[0x1][0x0],
            a5nj = ptwv1c > 0x3 && /^public$/i['test'](q7kxgl[0x2][0x0]) && q7kxgl[0x3][0x0],
            iunj0 = ptwv1c > 0x4 && q7kxgl[0x4][0x0],
            xdkl6o = q7kxgl[ptwv1c - 0x1];return a$j45f['startDTD'](cwph1, a5nj && a5nj['replace'](/^(['"])(.*?)\1$/, '$2'), iunj0 && iunj0['replace'](/^(['"])(.*?)\1$/, '$2')), a$j45f['endDTD'](), xdkl6o['index'] + xdkl6o[0x0]['length'];
      }}return -0x1;
}function bcp1hvw(q3x7kg, cm1wtz, xol7) {
  var $40n5j = q3x7kg['indexOf']('?>', cm1wtz);if ($40n5j) {
    var sr68d9 = q3x7kg['substring'](cm1wtz, $40n5j)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (sr68d9) {
      {
        sr68d9[0x0]['length'];
      }return xol7['processingInstruction'](sr68d9[0x1], sr68d9[0x2]), $40n5j + 0x2;
    }return -0x1;
  }return -0x1;
}function bhvw2() {}function btyzumc(v_phw2, cwvh1p) {
  return v_phw2['__proto__'] = cwvh1p, v_phw2;
}function b$504n(imzt, o896d) {
  var fja5,
      e5a$f4 = [],
      myz0 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (myz0['lastIndex'] = o896d, myz0['exec'](imzt); fja5 = myz0['exec'](imzt);) if (e5a$f4['push'](fja5), fja5[0x1]) return e5a$f4;
}var bin0zuy = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    bna$45 = new RegExp('[\\-\\.0-9' + bin0zuy['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    br92h_v = new RegExp('^' + bin0zuy['source'] + bna$45['source'] + '*(?::' + bin0zuy['source'] + bna$45['source'] + '*)?$'),
    byucmtz = 0x0,
    bwm1cp = 0x1,
    bhv_pw2 = 0x2,
    bmt1pw = 0x3,
    binuyz = 0x4,
    btzumcy = 0x5,
    bxkl7q = 0x6,
    br9_s82 = 0x7;bh2pvw['prototype'] = { 'parse': function ($n45a, zutmi, ja4$f5) {
    var gk73 = this['domBuilder'];gk73['startDocument'](), bjn0$(zutmi, zutmi = {}), bv1hpc($n45a, zutmi, ja4$f5, gk73, this['errorHandler']), gk73['endDocument']();
  } }, bhvw2['prototype'] = { 'setTagName': function (k7gxq) {
    if (!br92h_v['test'](k7gxq)) throw new Error('invalid tagName:' + k7gxq);this['tagName'] = k7gxq;
  }, 'add': function (_rs8, wv_2hp, uimzty) {
    if (!br92h_v['test'](_rs8)) throw new Error('invalid attribute:' + _rs8);this[this['length']++] = { 'qName': _rs8, 'value': wv_2hp, 'offset': uimzty };
  }, 'length': 0x0, 'getLocalName': function (i0yznu) {
    return this[i0yznu]['localName'];
  }, 'getLocator': function (zy1) {
    return this[zy1]['locator'];
  }, 'getQName': function (ds68l) {
    return this[ds68l]['qName'];
  }, 'getURI': function (ch1vw) {
    return this[ch1vw]['uri'];
  }, 'getValue': function (v92h_) {
    return this[v92h_]['value'];
  } }, btyzumc({}, btyzumc['prototype']) instanceof btyzumc || (btyzumc = function (xkodl, i0n4) {
  function ym1zct() {}ym1zct['prototype'] = i0n4, ym1zct = new ym1zct();for (i0n4 in xkodl) ym1zct[i0n4] = xkodl[i0n4];return ym1zct;
}), exports['XMLReader'] = bh2pvw;