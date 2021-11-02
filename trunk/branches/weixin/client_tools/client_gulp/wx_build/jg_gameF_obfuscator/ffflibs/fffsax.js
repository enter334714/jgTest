var k = wx.$f;
function fmbfivu() {}function fjod62c(dncwj, $ayr37, fbhmt, ocws, re$87) {
  function mtqh0f(pa37$) {
    if (pa37$ > 0xffff) {
      pa37$ -= 0x10000;var $7a3p = 0xd800 + (pa37$ >> 0xa),
          h0t5qk = 0xdc00 + (0x3ff & pa37$);return String['fromCharCode']($7a3p, h0t5qk);
    }return String['fromCharCode'](pa37$);
  }function tmi0fh(cdsnw) {
    var zxr8e = cdsnw['slice'](0x1, -0x1);return zxr8e in fbhmt ? fbhmt[zxr8e] : '#' === zxr8e['charAt'](0x0) ? mtqh0f(parseInt(zxr8e['substr'](0x1)['replace']('x', '0x'))) : (re$87['error']('entity not found:' + cdsnw), cdsnw);
  }function yp3a(c4o62) {
    if (c4o62 > jdoc26) {
      var mvbu1i = dncwj['substring'](jdoc26, c4o62)['replace'](/&#?\w+;/g, tmi0fh);dwnexs && ncdjws(jdoc26), ocws['characters'](mvbu1i, 0x0, c4o62 - jdoc26), jdoc26 = c4o62;
    }
  }function ncdjws(mivbfu, y7r$) {
    for (; mivbfu >= dj6co && (y7r$ = qf5h0['exec'](dncwj));) w8z = y7r$['index'], dj6co = w8z + y7r$[0x0]['length'], dwnexs['lineNumber']++;dwnexs['columnNumber'] = mivbfu - w8z + 0x1;
  }for (var w8z = 0x0, dj6co = 0x0, qf5h0 = /.*(?:\r\n?|\n)|.*$/g, dwnexs = ocws['locator'], k_42q5 = [{ 'currentNSMap': $ayr37 }], b1ug9v = {}, jdoc26 = 0x0;;) {
    try {
      var z8nrxe = dncwj['indexOf']('<', jdoc26);if (0x0 > z8nrxe) {
        if (!dncwj['substr'](jdoc26)['match'](/^\s*$/)) {
          var cdjos6 = ocws['doc'],
              xrze87 = cdjos6['createTextNode'](dncwj['substr'](jdoc26));cdjos6['appendChild'](xrze87), ocws['currentElement'] = xrze87;
        }return;
      }switch (z8nrxe > jdoc26 && yp3a(z8nrxe), dncwj['charAt'](z8nrxe + 0x1)) {case '/':
          var mbfih = dncwj['indexOf']('>', z8nrxe + 0x3),
              iuvm1 = dncwj['substring'](z8nrxe + 0x2, mbfih),
              uvg19 = k_42q5['pop']();0x0 > mbfih ? (iuvm1 = dncwj['substring'](z8nrxe + 0x2)['replace'](/[\s<].*/, ''), re$87['error']('end tag name: ' + iuvm1 + ' is not complete:' + uvg19['tagName']), mbfih = z8nrxe + 0x1 + iuvm1['length']) : iuvm1['match'](/\s</) && (iuvm1 = iuvm1['replace'](/[\s<].*/, ''), re$87['error']('end tag name: ' + iuvm1 + ' maybe not complete'), mbfih = z8nrxe + 0x1 + iuvm1['length']);var hift = uvg19['localNSMap'],
              $8y = uvg19['tagName'] == iuvm1,
              h0qk_5 = $8y || uvg19['tagName'] && uvg19['tagName']['toLowerCase']() == iuvm1['toLowerCase']();if (h0qk_5) {
            if (ocws['endElement'](uvg19['uri'], uvg19['localName'], iuvm1), hift) {
              for (var ibmh in hift) ocws['endPrefixMapping'](ibmh);
            }$8y || re$87['fatalError']('end tag name: ' + iuvm1 + ' is not match the current start tagName:' + uvg19['tagName']);
          } else k_42q5['push'](uvg19);mbfih++;break;case '?':
          dwnexs && ncdjws(z8nrxe), mbfih = fyr37$(dncwj, z8nrxe, ocws);break;case '!':
          dwnexs && ncdjws(z8nrxe), mbfih = fe7xzr(dncwj, z8nrxe, ocws, re$87);break;default:
          dwnexs && ncdjws(z8nrxe);var hmftbi = new fq52_k(),
              hm0ti = k_42q5[k_42q5['length'] - 0x1]['currentNSMap'],
              mbfih = fjcos6(dncwj, z8nrxe, hmftbi, hm0ti, tmi0fh, re$87),
              njxd = hmftbi['length'];if (!hmftbi['closed'] && fxnewz(dncwj, mbfih, hmftbi['tagName'], b1ug9v) && (hmftbi['closed'] = !0x0, fbhmt['nbsp'] || re$87['warning']('unclosed xml attribute')), dwnexs && njxd) {
            for (var bvmfit = f_625k4(dwnexs, {}), swzexn = 0x0; njxd > swzexn; swzexn++) {
              var a7y3$p = hmftbi[swzexn];ncdjws(a7y3$p['offset']), a7y3$p['locator'] = f_625k4(dwnexs, {});
            }ocws['locator'] = bvmfit, f$7ya3p(hmftbi, ocws, hm0ti) && k_42q5['push'](hmftbi), ocws['locator'] = dwnexs;
          } else f$7ya3p(hmftbi, ocws, hm0ti) && k_42q5['push'](hmftbi);'http://www.w3.org/1999/xhtml' !== hmftbi['uri'] || hmftbi['closed'] ? mbfih++ : mbfih = f$e7r(dncwj, mbfih, hmftbi['tagName'], tmi0fh, ocws);}
    } catch (imh) {
      re$87['error']('element parse error: ' + imh), mbfih = -0x1;
    }mbfih > jdoc26 ? jdoc26 = mbfih : yp3a(Math['max'](z8nrxe, jdoc26) + 0x1);
  }
}function f_625k4(u91gbv, y$78) {
  return y$78['lineNumber'] = u91gbv['lineNumber'], y$78['columnNumber'] = u91gbv['columnNumber'], y$78;
}function fjcos6(vg1b9u, sjdoc6, mfiuvb, enszx, r$7e, z3$87) {
  for (var cj2o4, tmfbvi, o2cj = ++sjdoc6, djocs = ftifhm;;) {
    var cd26o = vg1b9u['charAt'](o2cj);switch (cd26o) {case '=':
        if (djocs === ffhitb) cj2o4 = vg1b9u['slice'](sjdoc6, o2cj), djocs = fuv9b;else {
          if (djocs !== fjodwcs) throw new Error('attribute equal must after attrName');djocs = fuv9b;
        }break;case '\x27':case '\x22':
        if (djocs === fuv9b || djocs === ffhitb) {
          if (djocs === ffhitb && (z3$87['warning']('attribute value must after "="'), cj2o4 = vg1b9u['slice'](sjdoc6, o2cj)), sjdoc6 = o2cj + 0x1, o2cj = vg1b9u['indexOf'](cd26o, sjdoc6), !(o2cj > 0x0)) throw new Error('attribute value no end \'' + cd26o + '\' match');tmfbvi = vg1b9u['slice'](sjdoc6, o2cj)['replace'](/&#?\w+;/g, r$7e), mfiuvb['add'](cj2o4, tmfbvi, sjdoc6 - 0x1), djocs = fv19ub;
        } else {
          if (djocs != f_k426o) throw new Error('attribute value must after "="');tmfbvi = vg1b9u['slice'](sjdoc6, o2cj)['replace'](/&#?\w+;/g, r$7e), mfiuvb['add'](cj2o4, tmfbvi, sjdoc6), z3$87['warning']('attribute "' + cj2o4 + '" missed start quot(' + cd26o + ')!!'), sjdoc6 = o2cj + 0x1, djocs = fv19ub;
        }break;case '/':
        switch (djocs) {case ftifhm:
            mfiuvb['setTagName'](vg1b9u['slice'](sjdoc6, o2cj));case fv19ub:case fjdsoc6:case fufmivb:
            djocs = fufmivb, mfiuvb['closed'] = !0x0;case f_k426o:case ffhitb:case fjodwcs:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return z3$87['error']('unexpected end of input'), djocs == ftifhm && mfiuvb['setTagName'](vg1b9u['slice'](sjdoc6, o2cj)), o2cj;case '>':
        switch (djocs) {case ftifhm:
            mfiuvb['setTagName'](vg1b9u['slice'](sjdoc6, o2cj));case fv19ub:case fjdsoc6:case fufmivb:
            break;case f_k426o:case ffhitb:
            tmfbvi = vg1b9u['slice'](sjdoc6, o2cj), '/' === tmfbvi['slice'](-0x1) && (mfiuvb['closed'] = !0x0, tmfbvi = tmfbvi['slice'](0x0, -0x1));case fjodwcs:
            djocs === fjodwcs && (tmfbvi = cj2o4), djocs == f_k426o ? (z3$87['warning']('attribute "' + tmfbvi + '" missed quot(")!!'), mfiuvb['add'](cj2o4, tmfbvi['replace'](/&#?\w+;/g, r$7e), sjdoc6)) : ('http://www.w3.org/1999/xhtml' === enszx[''] && tmfbvi['match'](/^(?:disabled|checked|selected)$/i) || z3$87['warning']('attribute "' + tmfbvi + '" missed value!! "' + tmfbvi + '" instead!!'), mfiuvb['add'](tmfbvi, tmfbvi, sjdoc6));break;case fuv9b:
            throw new Error('attribute value missed!!');}return o2cj;case '\u0080':
        cd26o = '\x20';default:
        if ('\x20' >= cd26o) switch (djocs) {case ftifhm:
            mfiuvb['setTagName'](vg1b9u['slice'](sjdoc6, o2cj)), djocs = fjdsoc6;break;case ffhitb:
            cj2o4 = vg1b9u['slice'](sjdoc6, o2cj), djocs = fjodwcs;break;case f_k426o:
            var tmfbvi = vg1b9u['slice'](sjdoc6, o2cj)['replace'](/&#?\w+;/g, r$7e);z3$87['warning']('attribute "' + tmfbvi + '" missed quot(")!!'), mfiuvb['add'](cj2o4, tmfbvi, sjdoc6);case fv19ub:
            djocs = fjdsoc6;} else switch (djocs) {case fjodwcs:
            {
              mfiuvb['tagName'];
            }'http://www.w3.org/1999/xhtml' === enszx[''] && cj2o4['match'](/^(?:disabled|checked|selected)$/i) || z3$87['warning']('attribute "' + cj2o4 + '" missed value!! "' + cj2o4 + '" instead2!!'), mfiuvb['add'](cj2o4, cj2o4, sjdoc6), sjdoc6 = o2cj, djocs = ffhitb;break;case fv19ub:
            z3$87['warning']('attribute space is required"' + cj2o4 + '\x22!!');case fjdsoc6:
            djocs = ffhitb, sjdoc6 = o2cj;break;case fuv9b:
            djocs = f_k426o, sjdoc6 = o2cj;break;case fufmivb:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}o2cj++;
  }
}function f$7ya3p(o6dcjs, edxnw, a3y$p) {
  for (var dnscjw = o6dcjs['tagName'], x8ez7r = null, mi1bv = o6dcjs['length']; mi1bv--;) {
    var vbufim = o6dcjs[mi1bv],
        q5_kh = vbufim['qName'],
        ewzx8n = vbufim['value'],
        k524q_ = q5_kh['indexOf'](':');if (k524q_ > 0x0) var qfmt0 = vbufim['prefix'] = q5_kh['slice'](0x0, k524q_),
        jod6c = q5_kh['slice'](k524q_ + 0x1),
        h0mfit = 'xmlns' === qfmt0 && jod6c;else jod6c = q5_kh, qfmt0 = null, h0mfit = 'xmlns' === q5_kh && '';vbufim['localName'] = jod6c, h0mfit !== !0x1 && (null == x8ez7r && (x8ez7r = {}, fwensd(a3y$p, a3y$p = {})), a3y$p[h0mfit] = x8ez7r[h0mfit] = ewzx8n, vbufim['uri'] = 'http://www.w3.org/2000/xmlns/', edxnw['startPrefixMapping'](h0mfit, ewzx8n));
  }for (var mi1bv = o6dcjs['length']; mi1bv--;) {
    vbufim = o6dcjs[mi1bv];var qfmt0 = vbufim['prefix'];qfmt0 && ('xml' === qfmt0 && (vbufim['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== qfmt0 && (vbufim['uri'] = a3y$p[qfmt0 || '']));
  }var k524q_ = dnscjw['indexOf'](':');k524q_ > 0x0 ? (qfmt0 = o6dcjs['prefix'] = dnscjw['slice'](0x0, k524q_), jod6c = o6dcjs['localName'] = dnscjw['slice'](k524q_ + 0x1)) : (qfmt0 = null, jod6c = o6dcjs['localName'] = dnscjw);var znw8 = o6dcjs['uri'] = a3y$p[qfmt0 || ''];if (edxnw['startElement'](znw8, jod6c, dnscjw, o6dcjs), !o6dcjs['closed']) return o6dcjs['currentNSMap'] = a3y$p, o6dcjs['localNSMap'] = x8ez7r, !0x0;if (edxnw['endElement'](znw8, jod6c, dnscjw), x8ez7r) {
    for (qfmt0 in x8ez7r) edxnw['endPrefixMapping'](qfmt0);
  }
}function f$e7r(ewnzxs, i19bu, d2jco6, _2564, _246c) {
  if (/^(?:script|textarea)$/i['test'](d2jco6)) {
    var fh0tmi = ewnzxs['indexOf']('</' + d2jco6 + '>', i19bu),
        exz8n = ewnzxs['substring'](i19bu + 0x1, fh0tmi);if (/[&<]/['test'](exz8n)) return (/^script$/i['test'](d2jco6) ? (_246c['characters'](exz8n, 0x0, exz8n['length']), fh0tmi) : (exz8n = exz8n['replace'](/&#?\w+;/g, _2564), _246c['characters'](exz8n, 0x0, exz8n['length']), fh0tmi)
    );
  }return i19bu + 0x1;
}function fxnewz(mvifb, r8x7z, xner, sdow) {
  var wdjosc = sdow[xner];return null == wdjosc && (wdjosc = mvifb['lastIndexOf']('</' + xner + '>'), r8x7z > wdjosc && (wdjosc = mvifb['lastIndexOf']('</' + xner)), sdow[xner] = wdjosc), r8x7z > wdjosc;
}function fwensd(ftmvib, fmthq) {
  for (var k_5h0 in ftmvib) fmthq[k_5h0] = ftmvib[k_5h0];
}function fe7xzr(ibv1u9, h0mit, ednx, q5f0th) {
  var ay$73p = ibv1u9['charAt'](h0mit + 0x2);switch (ay$73p) {case '-':
      if ('-' === ibv1u9['charAt'](h0mit + 0x3)) {
        var $3yap = ibv1u9['indexOf']('-->', h0mit + 0x4);return $3yap > h0mit ? (ednx['comment'](ibv1u9, h0mit + 0x4, $3yap - h0mit - 0x4), $3yap + 0x3) : (q5f0th['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == ibv1u9['substr'](h0mit + 0x3, 0x6)) {
        var $3yap = ibv1u9['indexOf'](']]>', h0mit + 0x9);return ednx['startCDATA'](), ednx['characters'](ibv1u9, h0mit + 0x9, $3yap - h0mit - 0x9), ednx['endCDATA'](), $3yap + 0x3;
      }var $y3r = fwnxez8(ibv1u9, h0mit),
          rz8$7 = $y3r['length'];if (rz8$7 > 0x1 && /!doctype/i['test']($y3r[0x0][0x0])) {
        var o2_4k = $y3r[0x1][0x0],
            bvi1 = rz8$7 > 0x3 && /^public$/i['test']($y3r[0x2][0x0]) && $y3r[0x3][0x0],
            k0q4_5 = rz8$7 > 0x4 && $y3r[0x4][0x0],
            qh05k = $y3r[rz8$7 - 0x1];return ednx['startDTD'](o2_4k, bvi1 && bvi1['replace'](/^(['"])(.*?)\1$/, '$2'), k0q4_5 && k0q4_5['replace'](/^(['"])(.*?)\1$/, '$2')), ednx['endDTD'](), qh05k['index'] + qh05k[0x0]['length'];
      }}return -0x1;
}function fyr37$(thbim, _ok62, $zr783) {
  var uiv1b = thbim['indexOf']('?>', _ok62);if (uiv1b) {
    var c2oj46 = thbim['substring'](_ok62, uiv1b)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (c2oj46) {
      {
        c2oj46[0x0]['length'];
      }return $zr783['processingInstruction'](c2oj46[0x1], c2oj46[0x2]), uiv1b + 0x2;
    }return -0x1;
  }return -0x1;
}function fq52_k() {}function fy3r87$(jcdwsn, so6jc) {
  return jcdwsn['__proto__'] = so6jc, jcdwsn;
}function fwnxez8(bvm1ui, z8$e) {
  var g1v9u,
      a7y$r = [],
      mq0thf = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (mq0thf['lastIndex'] = z8$e, mq0thf['exec'](bvm1ui); g1v9u = mq0thf['exec'](bvm1ui);) if (a7y$r['push'](g1v9u), g1v9u[0x1]) return a7y$r;
}var fzrx87 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    fuv1i9b = new RegExp('[\\-\\.0-9' + fzrx87['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    fufbvim = new RegExp('^' + fzrx87['source'] + fuv1i9b['source'] + '*(?::' + fzrx87['source'] + fuv1i9b['source'] + '*)?$'),
    ftifhm = 0x0,
    ffhitb = 0x1,
    fjodwcs = 0x2,
    fuv9b = 0x3,
    f_k426o = 0x4,
    fv19ub = 0x5,
    fjdsoc6 = 0x6,
    fufmivb = 0x7;fmbfivu['prototype'] = { 'parse': function (nzws, r83$y, c6o2j4) {
    var bimft = this['domBuilder'];bimft['startDocument'](), fwensd(r83$y, r83$y = {}), fjod62c(nzws, r83$y, c6o2j4, bimft, this['errorHandler']), bimft['endDocument']();
  } }, fq52_k['prototype'] = { 'setTagName': function (bim1u) {
    if (!fufbvim['test'](bim1u)) throw new Error('invalid tagName:' + bim1u);this['tagName'] = bim1u;
  }, 'add': function (njdw, vb1iu9, hbi) {
    if (!fufbvim['test'](njdw)) throw new Error('invalid attribute:' + njdw);this[this['length']++] = { 'qName': njdw, 'value': vb1iu9, 'offset': hbi };
  }, 'length': 0x0, 'getLocalName': function (ya7$) {
    return this[ya7$]['localName'];
  }, 'getLocator': function (k540) {
    return this[k540]['locator'];
  }, 'getQName': function (vfibu) {
    return this[vfibu]['qName'];
  }, 'getURI': function (iftm0) {
    return this[iftm0]['uri'];
  }, 'getValue': function ($3yp) {
    return this[$3yp]['value'];
  } }, fy3r87$({}, fy3r87$['prototype']) instanceof fy3r87$ || (fy3r87$ = function (hmfit, wsxze) {
  function o4c6_() {}o4c6_['prototype'] = wsxze, o4c6_ = new o4c6_();for (wsxze in hmfit) o4c6_[wsxze] = hmfit[wsxze];return o4c6_;
}), exports['XMLReader'] = fmbfivu;