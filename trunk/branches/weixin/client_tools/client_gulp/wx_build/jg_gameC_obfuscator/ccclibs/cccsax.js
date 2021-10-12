var p = wx.$h;
function a_o1wkc2() {}function a_qf21tp(bxdar5, lm0j8s, fjmpz, qpfztm, nx35i6) {
  function qtpz(ztf2pq) {
    var z8sm0 = ztf2pq['slice'](0x1, -0x1);return z8sm0 in fjmpz ? fjmpz[z8sm0] : '#' === z8sm0['charAt'](0x0) ? 0xffff < (z8sm0 = parseInt(z8sm0['substr'](0x1)['replace']('x', '0x'))) ? (z8sm0 -= 0x10000, String['fromCharCode'](0xd800 + (z8sm0 >> 0xa), 0xdc00 + (0x3ff & z8sm0))) : String['fromCharCode'](z8sm0) : (nx35i6['error']('entity not found:' + ztf2pq), ztf2pq);
  }function rx53da(bx5ad) {
    var qfmptz;mftpq < bx5ad && (qfmptz = bxdar5['substring'](mftpq, bx5ad)['replace'](/&#?\w+;/g, qtpz), kwt && yghec(mftpq), qpfztm['characters'](qfmptz, 0x0, bx5ad - mftpq), mftpq = bx5ad);
  }function yghec(zsmf8j, ade) {
    for (; fqzpt2 <= zsmf8j && (ade = abrve['exec'](bxdar5));) o1ckhw = ade['index'], fqzpt2 = o1ckhw + ade[0x0]['length'], kwt['lineNumber']++;kwt['columnNumber'] = zsmf8j - o1ckhw + 0x1;
  }for (var o1ckhw = 0x0, fqzpt2 = 0x0, abrve = /.*(?:\r\n?|\n)|.*$/g, kwt = qpfztm['locator'], kwc1o2 = [{ 'currentNSMap': lm0j8s }], g9vey = {}, mftpq = 0x0;;) {
    try {
      var o1hkcw = bxdar5['indexOf']('<', mftpq),
          okhwg,
          kw12co;if (o1hkcw < 0x0) return void (bxdar5['substr'](mftpq)['match'](/^\s*$/) || (kw12co = (okhwg = qpfztm['doc'])['createTextNode'](bxdar5['substr'](mftpq)), okhwg['appendChild'](kw12co), qpfztm['currentElement'] = kw12co));switch (mftpq < o1hkcw && rx53da(o1hkcw), bxdar5['charAt'](o1hkcw + 0x1)) {case '/':
          var n3aix5 = bxdar5['indexOf']('>', o1hkcw + 0x3),
              c1hwko = bxdar5['substring'](o1hkcw + 0x2, n3aix5),
              ixn5 = kwc1o2['pop']();n3aix5 < 0x0 ? (c1hwko = bxdar5['substring'](o1hkcw + 0x2)['replace'](/[\s<].*/, ''), nx35i6['error']('end tag name: ' + c1hwko + ' is not complete:' + ixn5['tagName']), n3aix5 = o1hkcw + 0x1 + c1hwko['length']) : c1hwko['match'](/\s</) && (c1hwko = c1hwko['replace'](/[\s<].*/, ''), nx35i6['error']('end tag name: ' + c1hwko + ' maybe not complete'), n3aix5 = o1hkcw + 0x1 + c1hwko['length']);var ot2kq = ixn5['localNSMap'],
              x5ni6 = ixn5['tagName'] == c1hwko;if (x5ni6 || ixn5['tagName'] && ixn5['tagName']['toLowerCase']() == c1hwko['toLowerCase']()) {
            if (qpfztm['endElement'](ixn5['uri'], ixn5['localName'], c1hwko), ot2kq) {
              for (var gvye in ot2kq) qpfztm['endPrefixMapping'](gvye);
            }x5ni6 || nx35i6['fatalError']('end tag name: ' + c1hwko + ' is not match the current start tagName:' + ixn5['tagName']);
          } else kwc1o2['push'](ixn5);n3aix5++;break;case '?':
          kwt && yghec(o1hkcw), n3aix5 = a_gce9y(bxdar5, o1hkcw, qpfztm);break;case '!':
          kwt && yghec(o1hkcw), n3aix5 = a_to1q2(bxdar5, o1hkcw, qpfztm, nx35i6);break;default:
          kwt && yghec(o1hkcw);var kwoc1 = new a__80l$7(),
              jspf = kwc1o2[kwc1o2['length'] - 0x1]['currentNSMap'],
              n3aix5 = a_edravb(bxdar5, o1hkcw, kwoc1, jspf, qtpz, nx35i6),
              hgc9 = kwoc1['length'];if (!kwoc1['closed'] && a_m8zfsj(bxdar5, n3aix5, kwoc1['tagName'], g9vey) && (kwoc1['closed'] = !0x0, fjmpz['nbsp'] || nx35i6['warning']('unclosed xml attribute')), kwt && hgc9) {
            for (var an53i = a_j0mls(kwt, {}), gyehc = 0x0; gyehc < hgc9; gyehc++) {
              var rxa53i = kwoc1[gyehc];yghec(rxa53i['offset']), rxa53i['locator'] = a_j0mls(kwt, {});
            }qpfztm['locator'] = an53i, a_gwhkoc(kwoc1, qpfztm, jspf) && kwc1o2['push'](kwoc1), qpfztm['locator'] = kwt;
          } else a_gwhkoc(kwoc1, qpfztm, jspf) && kwc1o2['push'](kwoc1);'http://www.w3.org/1999/xhtml' !== kwoc1['uri'] || kwoc1['closed'] ? n3aix5++ : n3aix5 = a_sj8$0(bxdar5, n3aix5, kwoc1['tagName'], qtpz, qpfztm);}
    } catch (hwogk) {
      nx35i6['error']('element parse error: ' + hwogk), n3aix5 = -0x1;
    }mftpq < n3aix5 ? mftpq = n3aix5 : rx53da(Math['max'](o1hkcw, mftpq) + 0x1);
  }
}function a_j0mls(ckwh1o, g9cwo) {
  return g9cwo['lineNumber'] = ckwh1o['lineNumber'], g9cwo['columnNumber'] = ckwh1o['columnNumber'], g9cwo;
}function a_edravb(fj8s, hgkc, l0jsm8, ybedvr, sj8lm, yeh9) {
  for (var axbdr5, n356x = ++hgkc, kt1p2q = a_axi3n5;;) {
    var cw = fj8s['charAt'](n356x);switch (cw) {case '=':
        if (kt1p2q === a_r5dav) axbdr5 = fj8s['slice'](hgkc, n356x), kt1p2q = a_pszj;else {
          if (kt1p2q !== a_d3xar5) throw new Error('attribute equal must after attrName');kt1p2q = a_pszj;
        }break;case '\x27':case '\x22':
        if (kt1p2q === a_pszj || kt1p2q === a_r5dav) {
          if (kt1p2q === a_r5dav && (yeh9['warning']('attribute value must after "="'), axbdr5 = fj8s['slice'](hgkc, n356x)), !(0x0 < (n356x = fj8s['indexOf'](cw, hgkc = n356x + 0x1)))) throw new Error('attribute value no end \'' + cw + '\' match');s08jlm = fj8s['slice'](hgkc, n356x)['replace'](/&#?\w+;/g, sj8lm), l0jsm8['add'](axbdr5, s08jlm, hgkc - 0x1), kt1p2q = a_zfj8sm;
        } else {
          if (kt1p2q != a_ixr35a) throw new Error('attribute value must after "="');s08jlm = fj8s['slice'](hgkc, n356x)['replace'](/&#?\w+;/g, sj8lm), l0jsm8['add'](axbdr5, s08jlm, hgkc), yeh9['warning']('attribute "' + axbdr5 + '" missed start quot(' + cw + ')!!'), hgkc = n356x + 0x1, kt1p2q = a_zfj8sm;
        }break;case '/':
        switch (kt1p2q) {case a_axi3n5:
            l0jsm8['setTagName'](fj8s['slice'](hgkc, n356x));case a_zfj8sm:case a_fjmzp:case a_s$8l7:
            kt1p2q = a_s$8l7, l0jsm8['closed'] = !0x0;case a_ixr35a:case a_r5dav:case a_d3xar5:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return yeh9['error']('unexpected end of input'), kt1p2q == a_axi3n5 && l0jsm8['setTagName'](fj8s['slice'](hgkc, n356x)), n356x;case '>':
        switch (kt1p2q) {case a_axi3n5:
            l0jsm8['setTagName'](fj8s['slice'](hgkc, n356x));case a_zfj8sm:case a_fjmzp:case a_s$8l7:
            break;case a_ixr35a:case a_r5dav:
            '/' === (s08jlm = fj8s['slice'](hgkc, n356x))['slice'](-0x1) && (l0jsm8['closed'] = !0x0, s08jlm = s08jlm['slice'](0x0, -0x1));case a_d3xar5:
            kt1p2q === a_d3xar5 && (s08jlm = axbdr5), kt1p2q == a_ixr35a ? (yeh9['warning']('attribute "' + s08jlm + '" missed quot(")!!'), l0jsm8['add'](axbdr5, s08jlm['replace'](/&#?\w+;/g, sj8lm), hgkc)) : ('http://www.w3.org/1999/xhtml' === ybedvr[''] && s08jlm['match'](/^(?:disabled|checked|selected)$/i) || yeh9['warning']('attribute "' + s08jlm + '" missed value!! "' + s08jlm + '" instead!!'), l0jsm8['add'](s08jlm, s08jlm, hgkc));break;case a_pszj:
            throw new Error('attribute value missed!!');}return n356x;case '\u0080':
        cw = '\x20';default:
        if (cw <= '\x20') switch (kt1p2q) {case a_axi3n5:
            l0jsm8['setTagName'](fj8s['slice'](hgkc, n356x)), kt1p2q = a_fjmzp;break;case a_r5dav:
            axbdr5 = fj8s['slice'](hgkc, n356x), kt1p2q = a_d3xar5;break;case a_ixr35a:
            var s08jlm = fj8s['slice'](hgkc, n356x)['replace'](/&#?\w+;/g, sj8lm);yeh9['warning']('attribute "' + s08jlm + '" missed quot(")!!'), l0jsm8['add'](axbdr5, s08jlm, hgkc);case a_zfj8sm:
            kt1p2q = a_fjmzp;} else switch (kt1p2q) {case a_d3xar5:
            l0jsm8['tagName'], 'http://www.w3.org/1999/xhtml' === ybedvr[''] && axbdr5['match'](/^(?:disabled|checked|selected)$/i) || yeh9['warning']('attribute "' + axbdr5 + '" missed value!! "' + axbdr5 + '" instead2!!'), l0jsm8['add'](axbdr5, axbdr5, hgkc), hgkc = n356x, kt1p2q = a_r5dav;break;case a_zfj8sm:
            yeh9['warning']('attribute space is required"' + axbdr5 + '\x22!!');case a_fjmzp:
            kt1p2q = a_r5dav, hgkc = n356x;break;case a_pszj:
            kt1p2q = a_ixr35a, hgkc = n356x;break;case a_s$8l7:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}n356x++;
  }
}function a_gwhkoc(gowkc, cghow9, mfjs8) {
  for (var k2q1o = gowkc['tagName'], qfp2z = null, gvyb = gowkc['length']; gvyb--;) {
    var pkq = gowkc[gvyb],
        qfmzjp = pkq['qName'],
        js8zmf = pkq['value'],
        dybevr;qfmzjp = 0x0 < (kq2t1o = qfmzjp['indexOf'](':')) ? (vyghe9 = pkq['prefix'] = qfmzjp['slice'](0x0, kq2t1o), dybevr = qfmzjp['slice'](kq2t1o + 0x1), 'xmlns' === vyghe9 && dybevr) : (vyghe9 = null, 'xmlns' === (dybevr = qfmzjp) && ''), pkq['localName'] = dybevr, !0x1 !== qfmzjp && (null == qfp2z && (qfp2z = {}, a_bedryv(mfjs8, mfjs8 = {})), mfjs8[qfmzjp] = qfp2z[qfmzjp] = js8zmf, pkq['uri'] = 'http://www.w3.org/2000/xmlns/', cghow9['startPrefixMapping'](qfmzjp, js8zmf));
  }for (gvyb = gowkc['length']; gvyb--;) (vyghe9 = (pkq = gowkc[gvyb])['prefix']) && ('xml' === vyghe9 && (pkq['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== vyghe9 && (pkq['uri'] = mfjs8[vyghe9 || '']));var kq2t1o;dybevr = 0x0 < (kq2t1o = k2q1o['indexOf'](':')) ? (vyghe9 = gowkc['prefix'] = k2q1o['slice'](0x0, kq2t1o), gowkc['localName'] = k2q1o['slice'](kq2t1o + 0x1)) : (vyghe9 = null, gowkc['localName'] = k2q1o);var r5xabd = gowkc['uri'] = mfjs8[vyghe9 || ''];if (cghow9['startElement'](r5xabd, dybevr, k2q1o, gowkc), !gowkc['closed']) return gowkc['currentNSMap'] = mfjs8, gowkc['localNSMap'] = qfp2z, !0x0;if (cghow9['endElement'](r5xabd, dybevr, k2q1o), qfp2z) {
    for (var vyghe9 in qfp2z) cghow9['endPrefixMapping'](vyghe9);
  }
}function a_sj8$0(l_$708, ecy9hg, tzq2f, o21cwk, i356n) {
  if (/^(?:script|textarea)$/i['test'](tzq2f)) {
    var b5daxr = l_$708['indexOf']('</' + tzq2f + '>', ecy9hg),
        l_$708 = l_$708['substring'](ecy9hg + 0x1, b5daxr);if (/[&<]/['test'](l_$708)) return (/^script$/i['test'](tzq2f) || (l_$708 = l_$708['replace'](/&#?\w+;/g, o21cwk)), i356n['characters'](l_$708, 0x0, l_$708['length']), b5daxr
    );
  }return ecy9hg + 0x1;
}function a_m8zfsj(ax5n3i, hk1c, mtf, p1qt) {
  var _0l$47 = p1qt[mtf];return null == _0l$47 && ((_0l$47 = ax5n3i['lastIndexOf']('</' + mtf + '>')) < hk1c && (_0l$47 = ax5n3i['lastIndexOf']('</' + mtf)), p1qt[mtf] = _0l$47), _0l$47 < hk1c;
}function a_bedryv(wkgco, w12ot) {
  for (var p12kq in wkgco) w12ot[p12kq] = wkgco[p12kq];
}function a_to1q2(jsmzf8, l0$_4, sjz8f, edrvab) {
  var gcye9h = jsmzf8['charAt'](l0$_4 + 0x2);if ('-' === gcye9h) return '-' !== jsmzf8['charAt'](l0$_4 + 0x3) ? -0x1 : l0$_4 < (bge9 = jsmzf8['indexOf']('-->', l0$_4 + 0x4)) ? (sjz8f['comment'](jsmzf8, l0$_4 + 0x4, bge9 - l0$_4 - 0x4), bge9 + 0x3) : (edrvab['error']('Unclosed comment'), -0x1);if ('CDATA[' == jsmzf8['substr'](l0$_4 + 0x3, 0x6)) {
    var bge9 = jsmzf8['indexOf'](']]>', l0$_4 + 0x9);return sjz8f['startCDATA'](), sjz8f['characters'](jsmzf8, l0$_4 + 0x9, bge9 - l0$_4 - 0x9), sjz8f['endCDATA'](), bge9 + 0x3;
  }gcye9h = a_pjqzfm(jsmzf8, l0$_4), edrvab = gcye9h['length'];if (0x1 < edrvab && /!doctype/i['test'](gcye9h[0x0][0x0])) return bge9 = gcye9h[0x1][0x0], jsmzf8 = 0x3 < edrvab && /^public$/i['test'](gcye9h[0x2][0x0]) && gcye9h[0x3][0x0], l0$_4 = 0x4 < edrvab && gcye9h[0x4][0x0], edrvab = gcye9h[edrvab - 0x1], (sjz8f['startDTD'](bge9, jsmzf8 && jsmzf8['replace'](/^(['"])(.*?)\1$/, '$2'), l0$_4 && l0$_4['replace'](/^(['"])(.*?)\1$/, '$2')), sjz8f['endDTD'](), edrvab['index'] + edrvab[0x0]['length']);return -0x1;
}function a_gce9y(vaed, m8ljs, _$087) {
  var abdevr = vaed['indexOf']('?>', m8ljs);if (abdevr) return m8ljs = vaed['substring'](m8ljs, abdevr)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), m8ljs ? (m8ljs[0x0]['length'], _$087['processingInstruction'](m8ljs[0x1], m8ljs[0x2]), abdevr + 0x2) : -0x1;return -0x1;
}function a__80l$7() {}function a_mfpzq($s8j, cehg9) {
  return $s8j['__proto__'] = cehg9, $s8j;
}function a_pjqzfm(xari3, l70_$) {
  var pjmsz,
      $s0l8j = [],
      fsjmz = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (fsjmz['lastIndex'] = l70_$, fsjmz['exec'](xari3); pjmsz = fsjmz['exec'](xari3);) if ($s0l8j['push'](pjmsz), pjmsz[0x1]) return $s0l8j;
}var a_vybge = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    a_qpzmt = new RegExp('[\\-\\.0-9' + a_vybge['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    a_sjpfmz = new RegExp('^' + a_vybge['source'] + a_qpzmt['source'] + '*(?::' + a_vybge['source'] + a_qpzmt['source'] + '*)?$'),
    a_axi3n5 = 0x0,
    a_r5dav = 0x1,
    a_d3xar5 = 0x2,
    a_pszj = 0x3,
    a_ixr35a = 0x4,
    a_zfj8sm = 0x5,
    a_fjmzp = 0x6,
    a_s$8l7 = 0x7;a_o1wkc2['prototype'] = { 'parse': function (kqp2t, tfpmzq, ye9gch) {
    var p1q2k = this['domBuilder'];p1q2k['startDocument'](), a_bedryv(tfpmzq, tfpmzq = {}), a_qf21tp(kqp2t, tfpmzq, ye9gch, p1q2k, this['errorHandler']), p1q2k['endDocument']();
  } }, a__80l$7['prototype'] = { 'setTagName': function (qmfztp) {
    if (!a_sjpfmz['test'](qmfztp)) throw new Error('invalid tagName:' + qmfztp);this['tagName'] = qmfztp;
  }, 'add': function (jmzs08, vebyr, ybv9g) {
    if (!a_sjpfmz['test'](jmzs08)) throw new Error('invalid attribute:' + jmzs08);this[this['length']++] = { 'qName': jmzs08, 'value': vebyr, 'offset': ybv9g };
  }, 'length': 0x0, 'getLocalName': function (vbyedr) {
    return this[vbyedr]['localName'];
  }, 'getLocator': function (whgoc9) {
    return this[whgoc9]['locator'];
  }, 'getQName': function (pqzmjf) {
    return this[pqzmjf]['qName'];
  }, 'getURI': function (cywg9h) {
    return this[cywg9h]['uri'];
  }, 'getValue': function (lmjs0) {
    return this[lmjs0]['value'];
  } }, a_mfpzq({}, a_mfpzq['prototype']) instanceof a_mfpzq || (a_mfpzq = function (_$70l8, msfzj) {
  function ehyv() {}for (msfzj in ehyv['prototype'] = msfzj, ehyv = new ehyv(), _$70l8) ehyv[msfzj] = _$70l8[msfzj];return ehyv;
}), exports['XMLReader'] = a_o1wkc2;