var I = wx.$R;
function r_oz2xji() {}function r_qgp7e(f65ncd, wyiok8, okjiy, gqer7p, ndqefp) {
  function cpn5d(eg7wm) {
    if (eg7wm > 0xffff) {
      eg7wm -= 0x10000;var okjy8 = 0xd800 + (eg7wm >> 0xa),
          qpnc = 0xdc00 + (0x3ff & eg7wm);return String['fromCharCode'](okjy8, qpnc);
    }return String['fromCharCode'](eg7wm);
  }function wioy8k(pegr7q) {
    var gmer = pegr7q['slice'](0x1, -0x1);return gmer in okjiy ? okjiy[gmer] : '#' === gmer['charAt'](0x0) ? cpn5d(parseInt(gmer['substr'](0x1)['replace']('x', '0x'))) : (ndqefp['error']('entity not found:' + pegr7q), pegr7q);
  }function i8xojy(d7egq) {
    if (d7egq > b$a1u) {
      var fdgeqp = f65ncd['substring'](b$a1u, d7egq)['replace'](/&#?\w+;/g, wioy8k);ztsx32 && zjsxt2(b$a1u), gqer7p['characters'](fdgeqp, 0x0, d7egq - b$a1u), b$a1u = d7egq;
    }
  }function zjsxt2(_5cn6, zs32tx) {
    for (; _5cn6 >= oymwk && (zs32tx = fedpg['exec'](f65ncd));) u_c5 = zs32tx['index'], oymwk = u_c5 + zs32tx[0x0]['length'], ztsx32['lineNumber']++;ztsx32['columnNumber'] = _5cn6 - u_c5 + 0x1;
  }for (var u_c5 = 0x0, oymwk = 0x0, fedpg = /.*(?:\r\n?|\n)|.*$/g, ztsx32 = gqer7p['locator'], wmger = [{ 'currentNSMap': wyiok8 }], z3lt2 = {}, b$a1u = 0x0;;) {
    try {
      var w7gkr = f65ncd['indexOf']('<', b$a1u);if (0x0 > w7gkr) {
        if (!f65ncd['substr'](b$a1u)['match'](/^\s*$/)) {
          var yw8mo = gqer7p['doc'],
              nh5f6 = yw8mo['createTextNode'](f65ncd['substr'](b$a1u));yw8mo['appendChild'](nh5f6), gqer7p['currentElement'] = nh5f6;
        }return;
      }switch (w7gkr > b$a1u && i8xojy(w7gkr), f65ncd['charAt'](w7gkr + 0x1)) {case '/':
          var yjox = f65ncd['indexOf']('>', w7gkr + 0x3),
              k8oywm = f65ncd['substring'](w7gkr + 0x2, yjox),
              nf65cd = wmger['pop']();0x0 > yjox ? (k8oywm = f65ncd['substring'](w7gkr + 0x2)['replace'](/[\s<].*/, ''), ndqefp['error']('end tag name: ' + k8oywm + ' is not complete:' + nf65cd['tagName']), yjox = w7gkr + 0x1 + k8oywm['length']) : k8oywm['match'](/\s</) && (k8oywm = k8oywm['replace'](/[\s<].*/, ''), ndqefp['error']('end tag name: ' + k8oywm + ' maybe not complete'), yjox = w7gkr + 0x1 + k8oywm['length']);var k8iy = nf65cd['localNSMap'],
              g7kmwr = nf65cd['tagName'] == k8oywm,
              isxz = g7kmwr || nf65cd['tagName'] && nf65cd['tagName']['toLowerCase']() == k8oywm['toLowerCase']();if (isxz) {
            if (gqer7p['endElement'](nf65cd['uri'], nf65cd['localName'], k8oywm), k8iy) {
              for (var _1b in k8iy) gqer7p['endPrefixMapping'](_1b);
            }g7kmwr || ndqefp['fatalError']('end tag name: ' + k8oywm + ' is not match the current start tagName:' + nf65cd['tagName']);
          } else wmger['push'](nf65cd);yjox++;break;case '?':
          ztsx32 && zjsxt2(w7gkr), yjox = r_pndf(f65ncd, w7gkr, gqer7p);break;case '!':
          ztsx32 && zjsxt2(w7gkr), yjox = r_yiojk8(f65ncd, w7gkr, gqer7p, ndqefp);break;default:
          ztsx32 && zjsxt2(w7gkr);var izxs2 = new r_fc5hn6(),
              joxy2i = wmger[wmger['length'] - 0x1]['currentNSMap'],
              yjox = r_mrg7e(f65ncd, w7gkr, izxs2, joxy2i, wioy8k, ndqefp),
              t3z = izxs2['length'];if (!izxs2['closed'] && r_wmko8y(f65ncd, yjox, izxs2['tagName'], z3lt2) && (izxs2['closed'] = !0x0, okjiy['nbsp'] || ndqefp['warning']('unclosed xml attribute')), ztsx32 && t3z) {
            for (var z3t2sx = r_npfcq(ztsx32, {}), fcd65n = 0x0; t3z > fcd65n; fcd65n++) {
              var dqepfn = izxs2[fcd65n];zjsxt2(dqepfn['offset']), dqepfn['locator'] = r_npfcq(ztsx32, {});
            }gqer7p['locator'] = z3t2sx, r_u_h5c(izxs2, gqer7p, joxy2i) && wmger['push'](izxs2), gqer7p['locator'] = ztsx32;
          } else r_u_h5c(izxs2, gqer7p, joxy2i) && wmger['push'](izxs2);'http://www.w3.org/1999/xhtml' !== izxs2['uri'] || izxs2['closed'] ? yjox++ : yjox = r_rkmw7g(f65ncd, yjox, izxs2['tagName'], wioy8k, gqer7p);}
    } catch (iszx2j) {
      ndqefp['error']('element parse error: ' + iszx2j), yjox = -0x1;
    }yjox > b$a1u ? b$a1u = yjox : i8xojy(Math['max'](w7gkr, b$a1u) + 0x1);
  }
}function r_npfcq(tjxz2s, yi8) {
  return yi8['lineNumber'] = tjxz2s['lineNumber'], yi8['columnNumber'] = tjxz2s['columnNumber'], yi8;
}function r_mrg7e(p7gqre, gfpqe, oxzji2, ikj8yo, pqef, eqpd7) {
  for (var kyo8mw, gqemr7, z3st2l = ++gfpqe, jisx = r_h_6u5c;;) {
    var dnfep = p7gqre['charAt'](z3st2l);switch (dnfep) {case '=':
        if (jisx === r_jkioy8) kyo8mw = p7gqre['slice'](gfpqe, z3st2l), jisx = r_p7gqer;else {
          if (jisx !== r_f6c5hn) throw new Error('attribute equal must after attrName');jisx = r_p7gqer;
        }break;case '\x27':case '\x22':
        if (jisx === r_p7gqer || jisx === r_jkioy8) {
          if (jisx === r_jkioy8 && (eqpd7['warning']('attribute value must after "="'), kyo8mw = p7gqre['slice'](gfpqe, z3st2l)), gfpqe = z3st2l + 0x1, z3st2l = p7gqre['indexOf'](dnfep, gfpqe), !(z3st2l > 0x0)) throw new Error('attribute value no end \'' + dnfep + '\' match');gqemr7 = p7gqre['slice'](gfpqe, z3st2l)['replace'](/&#?\w+;/g, pqef), oxzji2['add'](kyo8mw, gqemr7, gfpqe - 0x1), jisx = r_jioyx2;
        } else {
          if (jisx != r_s3tl) throw new Error('attribute value must after "="');gqemr7 = p7gqre['slice'](gfpqe, z3st2l)['replace'](/&#?\w+;/g, pqef), oxzji2['add'](kyo8mw, gqemr7, gfpqe), eqpd7['warning']('attribute "' + kyo8mw + '" missed start quot(' + dnfep + ')!!'), gfpqe = z3st2l + 0x1, jisx = r_jioyx2;
        }break;case '/':
        switch (jisx) {case r_h_6u5c:
            oxzji2['setTagName'](p7gqre['slice'](gfpqe, z3st2l));case r_jioyx2:case r_uc56_h:case r_hu_ba:
            jisx = r_hu_ba, oxzji2['closed'] = !0x0;case r_s3tl:case r_jkioy8:case r_f6c5hn:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return eqpd7['error']('unexpected end of input'), jisx == r_h_6u5c && oxzji2['setTagName'](p7gqre['slice'](gfpqe, z3st2l)), z3st2l;case '>':
        switch (jisx) {case r_h_6u5c:
            oxzji2['setTagName'](p7gqre['slice'](gfpqe, z3st2l));case r_jioyx2:case r_uc56_h:case r_hu_ba:
            break;case r_s3tl:case r_jkioy8:
            gqemr7 = p7gqre['slice'](gfpqe, z3st2l), '/' === gqemr7['slice'](-0x1) && (oxzji2['closed'] = !0x0, gqemr7 = gqemr7['slice'](0x0, -0x1));case r_f6c5hn:
            jisx === r_f6c5hn && (gqemr7 = kyo8mw), jisx == r_s3tl ? (eqpd7['warning']('attribute "' + gqemr7 + '" missed quot(")!!'), oxzji2['add'](kyo8mw, gqemr7['replace'](/&#?\w+;/g, pqef), gfpqe)) : ('http://www.w3.org/1999/xhtml' === ikj8yo[''] && gqemr7['match'](/^(?:disabled|checked|selected)$/i) || eqpd7['warning']('attribute "' + gqemr7 + '" missed value!! "' + gqemr7 + '" instead!!'), oxzji2['add'](gqemr7, gqemr7, gfpqe));break;case r_p7gqer:
            throw new Error('attribute value missed!!');}return z3st2l;case '\u0080':
        dnfep = '\x20';default:
        if ('\x20' >= dnfep) switch (jisx) {case r_h_6u5c:
            oxzji2['setTagName'](p7gqre['slice'](gfpqe, z3st2l)), jisx = r_uc56_h;break;case r_jkioy8:
            kyo8mw = p7gqre['slice'](gfpqe, z3st2l), jisx = r_f6c5hn;break;case r_s3tl:
            var gqemr7 = p7gqre['slice'](gfpqe, z3st2l)['replace'](/&#?\w+;/g, pqef);eqpd7['warning']('attribute "' + gqemr7 + '" missed quot(")!!'), oxzji2['add'](kyo8mw, gqemr7, gfpqe);case r_jioyx2:
            jisx = r_uc56_h;} else switch (jisx) {case r_f6c5hn:
            {
              oxzji2['tagName'];
            }'http://www.w3.org/1999/xhtml' === ikj8yo[''] && kyo8mw['match'](/^(?:disabled|checked|selected)$/i) || eqpd7['warning']('attribute "' + kyo8mw + '" missed value!! "' + kyo8mw + '" instead2!!'), oxzji2['add'](kyo8mw, kyo8mw, gfpqe), gfpqe = z3st2l, jisx = r_jkioy8;break;case r_jioyx2:
            eqpd7['warning']('attribute space is required"' + kyo8mw + '\x22!!');case r_uc56_h:
            jisx = r_jkioy8, gfpqe = z3st2l;break;case r_p7gqer:
            jisx = r_s3tl, gfpqe = z3st2l;break;case r_hu_ba:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}z3st2l++;
  }
}function r_u_h5c(_6ah1, xi8oj, w7mk8r) {
  for (var wrkm = _6ah1['tagName'], zvstl3 = null, fpned = _6ah1['length']; fpned--;) {
    var b1u$_a = _6ah1[fpned],
        y8ojk = b1u$_a['qName'],
        txj2 = b1u$_a['value'],
        chnf6 = y8ojk['indexOf'](':');if (chnf6 > 0x0) var pged = b1u$_a['prefix'] = y8ojk['slice'](0x0, chnf6),
        qregm = y8ojk['slice'](chnf6 + 0x1),
        s3lvt0 = 'xmlns' === pged && qregm;else qregm = y8ojk, pged = null, s3lvt0 = 'xmlns' === y8ojk && '';b1u$_a['localName'] = qregm, s3lvt0 !== !0x1 && (null == zvstl3 && (zvstl3 = {}, r__1$ba(w7mk8r, w7mk8r = {})), w7mk8r[s3lvt0] = zvstl3[s3lvt0] = txj2, b1u$_a['uri'] = 'http://www.w3.org/2000/xmlns/', xi8oj['startPrefixMapping'](s3lvt0, txj2));
  }for (var fpned = _6ah1['length']; fpned--;) {
    b1u$_a = _6ah1[fpned];var pged = b1u$_a['prefix'];pged && ('xml' === pged && (b1u$_a['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== pged && (b1u$_a['uri'] = w7mk8r[pged || '']));
  }var chnf6 = wrkm['indexOf'](':');chnf6 > 0x0 ? (pged = _6ah1['prefix'] = wrkm['slice'](0x0, chnf6), qregm = _6ah1['localName'] = wrkm['slice'](chnf6 + 0x1)) : (pged = null, qregm = _6ah1['localName'] = wrkm);var qfegp = _6ah1['uri'] = w7mk8r[pged || ''];if (xi8oj['startElement'](qfegp, qregm, wrkm, _6ah1), !_6ah1['closed']) return _6ah1['currentNSMap'] = w7mk8r, _6ah1['localNSMap'] = zvstl3, !0x0;if (xi8oj['endElement'](qfegp, qregm, wrkm), zvstl3) {
    for (pged in zvstl3) xi8oj['endPrefixMapping'](pged);
  }
}function r_rkmw7g(fepgdq, qdep7, preq, fgdqep, dfeqn) {
  if (/^(?:script|textarea)$/i['test'](preq)) {
    var bu_$a = fepgdq['indexOf']('</' + preq + '>', qdep7),
        dnf5p = fepgdq['substring'](qdep7 + 0x1, bu_$a);if (/[&<]/['test'](dnf5p)) return (/^script$/i['test'](preq) ? (dfeqn['characters'](dnf5p, 0x0, dnf5p['length']), bu_$a) : (dnf5p = dnf5p['replace'](/&#?\w+;/g, fgdqep), dfeqn['characters'](dnf5p, 0x0, dnf5p['length']), bu_$a)
    );
  }return qdep7 + 0x1;
}function r_wmko8y(t3lz2, cn_h6, qpge7r, y2xoi) {
  var df6cn = y2xoi[qpge7r];return null == df6cn && (df6cn = t3lz2['lastIndexOf']('</' + qpge7r + '>'), cn_h6 > df6cn && (df6cn = t3lz2['lastIndexOf']('</' + qpge7r)), y2xoi[qpge7r] = df6cn), cn_h6 > df6cn;
}function r__1$ba(iojk8, $_1a) {
  for (var j2oiyx in iojk8) $_1a[j2oiyx] = iojk8[j2oiyx];
}function r_yiojk8(yxjo, p5nf, ijky8o, g7edp) {
  var kw8ymr = yxjo['charAt'](p5nf + 0x2);switch (kw8ymr) {case '-':
      if ('-' === yxjo['charAt'](p5nf + 0x3)) {
        var uh1a_ = yxjo['indexOf']('-->', p5nf + 0x4);return uh1a_ > p5nf ? (ijky8o['comment'](yxjo, p5nf + 0x4, uh1a_ - p5nf - 0x4), uh1a_ + 0x3) : (g7edp['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == yxjo['substr'](p5nf + 0x3, 0x6)) {
        var uh1a_ = yxjo['indexOf'](']]>', p5nf + 0x9);return ijky8o['startCDATA'](), ijky8o['characters'](yxjo, p5nf + 0x9, uh1a_ - p5nf - 0x9), ijky8o['endCDATA'](), uh1a_ + 0x3;
      }var yoi8wk = r_mgr7w(yxjo, p5nf),
          yojx = yoi8wk['length'];if (yojx > 0x1 && /!doctype/i['test'](yoi8wk[0x0][0x0])) {
        var qre7gm = yoi8wk[0x1][0x0],
            pncqd = yojx > 0x3 && /^public$/i['test'](yoi8wk[0x2][0x0]) && yoi8wk[0x3][0x0],
            lvzst = yojx > 0x4 && yoi8wk[0x4][0x0],
            x2sizj = yoi8wk[yojx - 0x1];return ijky8o['startDTD'](qre7gm, pncqd && pncqd['replace'](/^(['"])(.*?)\1$/, '$2'), lvzst && lvzst['replace'](/^(['"])(.*?)\1$/, '$2')), ijky8o['endDTD'](), x2sizj['index'] + x2sizj[0x0]['length'];
      }}return -0x1;
}function r_pndf(huc_, t30l, grpqe) {
  var hu56_1 = huc_['indexOf']('?>', t30l);if (hu56_1) {
    var oyikj8 = huc_['substring'](t30l, hu56_1)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (oyikj8) {
      {
        oyikj8[0x0]['length'];
      }return grpqe['processingInstruction'](oyikj8[0x1], oyikj8[0x2]), hu56_1 + 0x2;
    }return -0x1;
  }return -0x1;
}function r_fc5hn6() {}function r_fqdcn(k7wrmg, yojik) {
  return k7wrmg['__proto__'] = yojik, k7wrmg;
}function r_mgr7w(h5uc_6, er7wmg) {
  var fdp5nc,
      rgkwm = [],
      $ba9u1 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for ($ba9u1['lastIndex'] = er7wmg, $ba9u1['exec'](h5uc_6); fdp5nc = $ba9u1['exec'](h5uc_6);) if (rgkwm['push'](fdp5nc), fdp5nc[0x1]) return rgkwm;
}var r_a_hu6 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    r_c6_5u = new RegExp('[\\-\\.0-9' + r_a_hu6['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    r_pqegr7 = new RegExp('^' + r_a_hu6['source'] + r_c6_5u['source'] + '*(?::' + r_a_hu6['source'] + r_c6_5u['source'] + '*)?$'),
    r_h_6u5c = 0x0,
    r_jkioy8 = 0x1,
    r_f6c5hn = 0x2,
    r_p7gqer = 0x3,
    r_s3tl = 0x4,
    r_jioyx2 = 0x5,
    r_uc56_h = 0x6,
    r_hu_ba = 0x7;r_oz2xji['prototype'] = { 'parse': function (dfn65, gpde7, omyw) {
    var _ua$b = this['domBuilder'];_ua$b['startDocument'](), r__1$ba(gpde7, gpde7 = {}), r_qgp7e(dfn65, gpde7, omyw, _ua$b, this['errorHandler']), _ua$b['endDocument']();
  } }, r_fc5hn6['prototype'] = { 'setTagName': function (s2zlt3) {
    if (!r_pqegr7['test'](s2zlt3)) throw new Error('invalid tagName:' + s2zlt3);this['tagName'] = s2zlt3;
  }, 'add': function (tz3l, _u, q7er) {
    if (!r_pqegr7['test'](tz3l)) throw new Error('invalid attribute:' + tz3l);this[this['length']++] = { 'qName': tz3l, 'value': _u, 'offset': q7er };
  }, 'length': 0x0, 'getLocalName': function (_6hnc) {
    return this[_6hnc]['localName'];
  }, 'getLocator': function (u_bh1a) {
    return this[u_bh1a]['locator'];
  }, 'getQName': function (wkrm7) {
    return this[wkrm7]['qName'];
  }, 'getURI': function (eqnfpd) {
    return this[eqnfpd]['uri'];
  }, 'getValue': function (kymo8w) {
    return this[kymo8w]['value'];
  } }, r_fqdcn({}, r_fqdcn['prototype']) instanceof r_fqdcn || (r_fqdcn = function (dfnq, x2sjzt) {
  function nqfdpe() {}nqfdpe['prototype'] = x2sjzt, nqfdpe = new nqfdpe();for (x2sjzt in dfnq) nqfdpe[x2sjzt] = dfnq[x2sjzt];return nqfdpe;
}), exports['XMLReader'] = r_oz2xji;