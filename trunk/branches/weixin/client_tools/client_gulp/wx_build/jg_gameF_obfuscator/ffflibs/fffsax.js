var k = wx.$f;
function fhfmtq0() {}function fugvb91(hqtk05, ra7y3$, mfibtv, im0th, itbf) {
  function $3p7ya(en8xw) {
    if (en8xw > 0xffff) {
      en8xw -= 0x10000;var mivbu1 = 0xd800 + (en8xw >> 0xa),
          cwsdn = 0xdc00 + (0x3ff & en8xw);return String['fromCharCode'](mivbu1, cwsdn);
    }return String['fromCharCode'](en8xw);
  }function o6cj(gvu9) {
    var u1vbim = gvu9['slice'](0x1, -0x1);return u1vbim in mfibtv ? mfibtv[u1vbim] : '#' === u1vbim['charAt'](0x0) ? $3p7ya(parseInt(u1vbim['substr'](0x1)['replace']('x', '0x'))) : (itbf['error']('entity not found:' + gvu9), gvu9);
  }function _qk45(t0hi) {
    if (t0hi > hqt5f0) {
      var co46 = hqtk05['substring'](hqt5f0, t0hi)['replace'](/&#?\w+;/g, o6cj);i19uvb && fhqt(hqt5f0), im0th['characters'](co46, 0x0, t0hi - hqt5f0), hqt5f0 = t0hi;
    }
  }function fhqt(r8$y, c426o_) {
    for (; r8$y >= xre7 && (c426o_ = bfihtm['exec'](hqtk05));) xwnj = c426o_['index'], xre7 = xwnj + c426o_[0x0]['length'], i19uvb['lineNumber']++;i19uvb['columnNumber'] = r8$y - xwnj + 0x1;
  }for (var xwnj = 0x0, xre7 = 0x0, bfihtm = /.*(?:\r\n?|\n)|.*$/g, i19uvb = im0th['locator'], jc = [{ 'currentNSMap': ra7y3$ }], uvg19b = {}, hqt5f0 = 0x0;;) {
    try {
      var ndcjws = hqtk05['indexOf']('<', hqt5f0);if (0x0 > ndcjws) {
        if (!hqtk05['substr'](hqt5f0)['match'](/^\s*$/)) {
          var cjo246 = im0th['doc'],
              q5f0ht = cjo246['createTextNode'](hqtk05['substr'](hqt5f0));cjo246['appendChild'](q5f0ht), im0th['currentElement'] = q5f0ht;
        }return;
      }switch (ndcjws > hqt5f0 && _qk45(ndcjws), hqtk05['charAt'](ndcjws + 0x1)) {case '/':
          var hbfim = hqtk05['indexOf']('>', ndcjws + 0x3),
              vfubm = hqtk05['substring'](ndcjws + 0x2, hbfim),
              c26_4o = jc['pop']();0x0 > hbfim ? (vfubm = hqtk05['substring'](ndcjws + 0x2)['replace'](/[\s<].*/, ''), itbf['error']('end tag name: ' + vfubm + ' is not complete:' + c26_4o['tagName']), hbfim = ndcjws + 0x1 + vfubm['length']) : vfubm['match'](/\s</) && (vfubm = vfubm['replace'](/[\s<].*/, ''), itbf['error']('end tag name: ' + vfubm + ' maybe not complete'), hbfim = ndcjws + 0x1 + vfubm['length']);var esnzw = c26_4o['localNSMap'],
              ufvbim = c26_4o['tagName'] == vfubm,
              p7y = ufvbim || c26_4o['tagName'] && c26_4o['tagName']['toLowerCase']() == vfubm['toLowerCase']();if (p7y) {
            if (im0th['endElement'](c26_4o['uri'], c26_4o['localName'], vfubm), esnzw) {
              for (var iumvfb in esnzw) im0th['endPrefixMapping'](iumvfb);
            }ufvbim || itbf['fatalError']('end tag name: ' + vfubm + ' is not match the current start tagName:' + c26_4o['tagName']);
          } else jc['push'](c26_4o);hbfim++;break;case '?':
          i19uvb && fhqt(ndcjws), hbfim = fxe8n(hqtk05, ndcjws, im0th);break;case '!':
          i19uvb && fhqt(ndcjws), hbfim = fezwsxn(hqtk05, ndcjws, im0th, itbf);break;default:
          i19uvb && fhqt(ndcjws);var bhiftm = new f$ez7r(),
              c6od2 = jc[jc['length'] - 0x1]['currentNSMap'],
              hbfim = ferx8zn(hqtk05, ndcjws, bhiftm, c6od2, o6cj, itbf),
              osdw = bhiftm['length'];if (!bhiftm['closed'] && fu9ibv1(hqtk05, hbfim, bhiftm['tagName'], uvg19b) && (bhiftm['closed'] = !0x0, mfibtv['nbsp'] || itbf['warning']('unclosed xml attribute')), i19uvb && osdw) {
            for (var sxedn = fjdsnwc(i19uvb, {}), q_52 = 0x0; osdw > q_52; q_52++) {
              var k5_0q4 = bhiftm[q_52];fhqt(k5_0q4['offset']), k5_0q4['locator'] = fjdsnwc(i19uvb, {});
            }im0th['locator'] = sxedn, fexzr(bhiftm, im0th, c6od2) && jc['push'](bhiftm), im0th['locator'] = i19uvb;
          } else fexzr(bhiftm, im0th, c6od2) && jc['push'](bhiftm);'http://www.w3.org/1999/xhtml' !== bhiftm['uri'] || bhiftm['closed'] ? hbfim++ : hbfim = fxzr78(hqtk05, hbfim, bhiftm['tagName'], o6cj, im0th);}
    } catch (o6sjdc) {
      itbf['error']('element parse error: ' + o6sjdc), hbfim = -0x1;
    }hbfim > hqt5f0 ? hqt5f0 = hbfim : _qk45(Math['max'](ndcjws, hqt5f0) + 0x1);
  }
}function fjdsnwc(xzer87, ar3y7$) {
  return ar3y7$['lineNumber'] = xzer87['lineNumber'], ar3y7$['columnNumber'] = xzer87['columnNumber'], ar3y7$;
}function ferx8zn($ry387, q54k0_, zensw, dxj, xnjwds, d6jcos) {
  for (var k26, c62, nwdjc = ++q54k0_, d6soc = fscjn;;) {
    var wjcs = $ry387['charAt'](nwdjc);switch (wjcs) {case '=':
        if (d6soc === fk_q50) k26 = $ry387['slice'](q54k0_, nwdjc), d6soc = fmt0qh;else {
          if (d6soc !== focsjwd) throw new Error('attribute equal must after attrName');d6soc = fmt0qh;
        }break;case '\x27':case '\x22':
        if (d6soc === fmt0qh || d6soc === fk_q50) {
          if (d6soc === fk_q50 && (d6jcos['warning']('attribute value must after "="'), k26 = $ry387['slice'](q54k0_, nwdjc)), q54k0_ = nwdjc + 0x1, nwdjc = $ry387['indexOf'](wjcs, q54k0_), !(nwdjc > 0x0)) throw new Error('attribute value no end \'' + wjcs + '\' match');c62 = $ry387['slice'](q54k0_, nwdjc)['replace'](/&#?\w+;/g, xnjwds), zensw['add'](k26, c62, q54k0_ - 0x1), d6soc = f$7z8e;
        } else {
          if (d6soc != fk462_o) throw new Error('attribute value must after "="');c62 = $ry387['slice'](q54k0_, nwdjc)['replace'](/&#?\w+;/g, xnjwds), zensw['add'](k26, c62, q54k0_), d6jcos['warning']('attribute "' + k26 + '" missed start quot(' + wjcs + ')!!'), q54k0_ = nwdjc + 0x1, d6soc = f$7z8e;
        }break;case '/':
        switch (d6soc) {case fscjn:
            zensw['setTagName']($ry387['slice'](q54k0_, nwdjc));case f$7z8e:case ftivfmb:case fodj6c2:
            d6soc = fodj6c2, zensw['closed'] = !0x0;case fk462_o:case fk_q50:case focsjwd:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return d6jcos['error']('unexpected end of input'), d6soc == fscjn && zensw['setTagName']($ry387['slice'](q54k0_, nwdjc)), nwdjc;case '>':
        switch (d6soc) {case fscjn:
            zensw['setTagName']($ry387['slice'](q54k0_, nwdjc));case f$7z8e:case ftivfmb:case fodj6c2:
            break;case fk462_o:case fk_q50:
            c62 = $ry387['slice'](q54k0_, nwdjc), '/' === c62['slice'](-0x1) && (zensw['closed'] = !0x0, c62 = c62['slice'](0x0, -0x1));case focsjwd:
            d6soc === focsjwd && (c62 = k26), d6soc == fk462_o ? (d6jcos['warning']('attribute "' + c62 + '" missed quot(")!!'), zensw['add'](k26, c62['replace'](/&#?\w+;/g, xnjwds), q54k0_)) : ('http://www.w3.org/1999/xhtml' === dxj[''] && c62['match'](/^(?:disabled|checked|selected)$/i) || d6jcos['warning']('attribute "' + c62 + '" missed value!! "' + c62 + '" instead!!'), zensw['add'](c62, c62, q54k0_));break;case fmt0qh:
            throw new Error('attribute value missed!!');}return nwdjc;case '\u0080':
        wjcs = '\x20';default:
        if ('\x20' >= wjcs) switch (d6soc) {case fscjn:
            zensw['setTagName']($ry387['slice'](q54k0_, nwdjc)), d6soc = ftivfmb;break;case fk_q50:
            k26 = $ry387['slice'](q54k0_, nwdjc), d6soc = focsjwd;break;case fk462_o:
            var c62 = $ry387['slice'](q54k0_, nwdjc)['replace'](/&#?\w+;/g, xnjwds);d6jcos['warning']('attribute "' + c62 + '" missed quot(")!!'), zensw['add'](k26, c62, q54k0_);case f$7z8e:
            d6soc = ftivfmb;} else switch (d6soc) {case focsjwd:
            {
              zensw['tagName'];
            }'http://www.w3.org/1999/xhtml' === dxj[''] && k26['match'](/^(?:disabled|checked|selected)$/i) || d6jcos['warning']('attribute "' + k26 + '" missed value!! "' + k26 + '" instead2!!'), zensw['add'](k26, k26, q54k0_), q54k0_ = nwdjc, d6soc = fk_q50;break;case f$7z8e:
            d6jcos['warning']('attribute space is required"' + k26 + '\x22!!');case ftivfmb:
            d6soc = fk_q50, q54k0_ = nwdjc;break;case fmt0qh:
            d6soc = fk462_o, q54k0_ = nwdjc;break;case fodj6c2:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}nwdjc++;
  }
}function fexzr(tfhm0i, tfmb, r3z) {
  for (var x8erz = tfhm0i['tagName'], a3y$ = null, tbfivm = tfhm0i['length']; tbfivm--;) {
    var jsxnw = tfhm0i[tbfivm],
        h0k5q_ = jsxnw['qName'],
        sdjn = jsxnw['value'],
        r8zex = h0k5q_['indexOf'](':');if (r8zex > 0x0) var _6ko2 = jsxnw['prefix'] = h0k5q_['slice'](0x0, r8zex),
        eznsw = h0k5q_['slice'](r8zex + 0x1),
        bmfiv = 'xmlns' === _6ko2 && eznsw;else eznsw = h0k5q_, _6ko2 = null, bmfiv = 'xmlns' === h0k5q_ && '';jsxnw['localName'] = eznsw, bmfiv !== !0x1 && (null == a3y$ && (a3y$ = {}, f$3y87(r3z, r3z = {})), r3z[bmfiv] = a3y$[bmfiv] = sdjn, jsxnw['uri'] = 'http://www.w3.org/2000/xmlns/', tfmb['startPrefixMapping'](bmfiv, sdjn));
  }for (var tbfivm = tfhm0i['length']; tbfivm--;) {
    jsxnw = tfhm0i[tbfivm];var _6ko2 = jsxnw['prefix'];_6ko2 && ('xml' === _6ko2 && (jsxnw['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== _6ko2 && (jsxnw['uri'] = r3z[_6ko2 || '']));
  }var r8zex = x8erz['indexOf'](':');r8zex > 0x0 ? (_6ko2 = tfhm0i['prefix'] = x8erz['slice'](0x0, r8zex), eznsw = tfhm0i['localName'] = x8erz['slice'](r8zex + 0x1)) : (_6ko2 = null, eznsw = tfhm0i['localName'] = x8erz);var fuimb = tfhm0i['uri'] = r3z[_6ko2 || ''];if (tfmb['startElement'](fuimb, eznsw, x8erz, tfhm0i), !tfhm0i['closed']) return tfhm0i['currentNSMap'] = r3z, tfhm0i['localNSMap'] = a3y$, !0x0;if (tfmb['endElement'](fuimb, eznsw, x8erz), a3y$) {
    for (_6ko2 in a3y$) tfmb['endPrefixMapping'](_6ko2);
  }
}function fxzr78(q5k2_4, $zre87, vfu, k6_542, bmft) {
  if (/^(?:script|textarea)$/i['test'](vfu)) {
    var fqmth0 = q5k2_4['indexOf']('</' + vfu + '>', $zre87),
        osd6j = q5k2_4['substring']($zre87 + 0x1, fqmth0);if (/[&<]/['test'](osd6j)) return (/^script$/i['test'](vfu) ? (bmft['characters'](osd6j, 0x0, osd6j['length']), fqmth0) : (osd6j = osd6j['replace'](/&#?\w+;/g, k6_542), bmft['characters'](osd6j, 0x0, osd6j['length']), fqmth0)
    );
  }return $zre87 + 0x1;
}function fu9ibv1(hqk_, ivb9u1, j2o46c, $7z8re) {
  var h05k = $7z8re[j2o46c];return null == h05k && (h05k = hqk_['lastIndexOf']('</' + j2o46c + '>'), ivb9u1 > h05k && (h05k = hqk_['lastIndexOf']('</' + j2o46c)), $7z8re[j2o46c] = h05k), ivb9u1 > h05k;
}function f$3y87(sdow, vuib1m) {
  for (var vfmtb in sdow) vuib1m[vfmtb] = sdow[vfmtb];
}function fezwsxn(xeswd, k4_65, nwsxze, z7exr) {
  var q5_kh0 = xeswd['charAt'](k4_65 + 0x2);switch (q5_kh0) {case '-':
      if ('-' === xeswd['charAt'](k4_65 + 0x3)) {
        var jdnc = xeswd['indexOf']('-->', k4_65 + 0x4);return jdnc > k4_65 ? (nwsxze['comment'](xeswd, k4_65 + 0x4, jdnc - k4_65 - 0x4), jdnc + 0x3) : (z7exr['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == xeswd['substr'](k4_65 + 0x3, 0x6)) {
        var jdnc = xeswd['indexOf'](']]>', k4_65 + 0x9);return nwsxze['startCDATA'](), nwsxze['characters'](xeswd, k4_65 + 0x9, jdnc - k4_65 - 0x9), nwsxze['endCDATA'](), jdnc + 0x3;
      }var tqhf = fdcnwsj(xeswd, k4_65),
          h0fmit = tqhf['length'];if (h0fmit > 0x1 && /!doctype/i['test'](tqhf[0x0][0x0])) {
        var gb1uv9 = tqhf[0x1][0x0],
            ftbmh = h0fmit > 0x3 && /^public$/i['test'](tqhf[0x2][0x0]) && tqhf[0x3][0x0],
            cswo = h0fmit > 0x4 && tqhf[0x4][0x0],
            _ko42 = tqhf[h0fmit - 0x1];return nwsxze['startDTD'](gb1uv9, ftbmh && ftbmh['replace'](/^(['"])(.*?)\1$/, '$2'), cswo && cswo['replace'](/^(['"])(.*?)\1$/, '$2')), nwsxze['endDTD'](), _ko42['index'] + _ko42[0x0]['length'];
      }}return -0x1;
}function fxe8n(qhk50, wnxde, c4oj62) {
  var c2jdo = qhk50['indexOf']('?>', wnxde);if (c2jdo) {
    var fmhbti = qhk50['substring'](wnxde, c2jdo)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (fmhbti) {
      {
        fmhbti[0x0]['length'];
      }return c4oj62['processingInstruction'](fmhbti[0x1], fmhbti[0x2]), c2jdo + 0x2;
    }return -0x1;
  }return -0x1;
}function f$ez7r() {}function fr7ex8z(nezw, a37yr) {
  return nezw['__proto__'] = a37yr, nezw;
}function fdcnwsj(sxdewn, sw) {
  var zxswen,
      jocds = [],
      mbhit = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (mbhit['lastIndex'] = sw, mbhit['exec'](sxdewn); zxswen = mbhit['exec'](sxdewn);) if (jocds['push'](zxswen), zxswen[0x1]) return jocds;
}var ftbfih = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    fcjod62 = new RegExp('[\\-\\.0-9' + ftbfih['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    fexnd = new RegExp('^' + ftbfih['source'] + fcjod62['source'] + '*(?::' + ftbfih['source'] + fcjod62['source'] + '*)?$'),
    fscjn = 0x0,
    fk_q50 = 0x1,
    focsjwd = 0x2,
    fmt0qh = 0x3,
    fk462_o = 0x4,
    f$7z8e = 0x5,
    ftivfmb = 0x6,
    fodj6c2 = 0x7;fhfmtq0['prototype'] = { 'parse': function (ibmuvf, r8e7zx, ubg9) {
    var tfhibm = this['domBuilder'];tfhibm['startDocument'](), f$3y87(r8e7zx, r8e7zx = {}), fugvb91(ibmuvf, r8e7zx, ubg9, tfhibm, this['errorHandler']), tfhibm['endDocument']();
  } }, f$ez7r['prototype'] = { 'setTagName': function (bmtvf) {
    if (!fexnd['test'](bmtvf)) throw new Error('invalid tagName:' + bmtvf);this['tagName'] = bmtvf;
  }, 'add': function (b1mivu, h50t, j6ds) {
    if (!fexnd['test'](b1mivu)) throw new Error('invalid attribute:' + b1mivu);this[this['length']++] = { 'qName': b1mivu, 'value': h50t, 'offset': j6ds };
  }, 'length': 0x0, 'getLocalName': function (im1vb) {
    return this[im1vb]['localName'];
  }, 'getLocator': function (ibmht) {
    return this[ibmht]['locator'];
  }, 'getQName': function (ndxsj) {
    return this[ndxsj]['qName'];
  }, 'getURI': function (_2k4o6) {
    return this[_2k4o6]['uri'];
  }, 'getValue': function (_04k5) {
    return this[_04k5]['value'];
  } }, fr7ex8z({}, fr7ex8z['prototype']) instanceof fr7ex8z || (fr7ex8z = function (w8exnz, q0tf) {
  function y$3ar() {}y$3ar['prototype'] = q0tf, y$3ar = new y$3ar();for (q0tf in w8exnz) y$3ar[q0tf] = w8exnz[q0tf];return y$3ar;
}), exports['XMLReader'] = fhfmtq0;