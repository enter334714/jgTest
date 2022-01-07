var b = wx.$e;
function e_74avf() {}function ea7v_(_vfyz, unks6, g3jx$i, xq$ij, pma7oc) {
  function acm_47(v_74ma) {
    if (v_74ma > 0xffff) {
      v_74ma -= 0x10000;var d9k0b6 = 0xd800 + (v_74ma >> 0xa),
          nj$qi3 = 0xdc00 + (0x3ff & v_74ma);return String['fromCharCode'](d9k0b6, nj$qi3);
    }return String['fromCharCode'](v_74ma);
  }function ij$qx3(x$tlig) {
    var dk9b06 = x$tlig['slice'](0x1, -0x1);return dk9b06 in g3jx$i ? g3jx$i[dk9b06] : '#' === dk9b06['charAt'](0x0) ? acm_47(parseInt(dk9b06['substr'](0x1)['replace']('x', '0x'))) : (pma7oc['error']('entity not found:' + x$tlig), x$tlig);
  }function glzht(d90k6b) {
    if (d90k6b > $xq3ji) {
      var knuq9 = _vfyz['substring']($xq3ji, d90k6b)['replace'](/&#?\w+;/g, ij$qx3);j3$qxi && co_7am($xq3ji), xq$ij['characters'](knuq9, 0x0, d90k6b - $xq3ji), $xq3ji = d90k6b;
    }
  }function co_7am(tixg$j, lt$xgi) {
    for (; tixg$j >= th$xgl && (lt$xgi = lhrzt['exec'](_vfyz));) n3su9 = lt$xgi['index'], th$xgl = n3su9 + lt$xgi[0x0]['length'], j3$qxi['lineNumber']++;j3$qxi['columnNumber'] = tixg$j - n3su9 + 0x1;
  }for (var n3su9 = 0x0, th$xgl = 0x0, lhrzt = /.*(?:\r\n?|\n)|.*$/g, j3$qxi = xq$ij['locator'], zgrlt = [{ 'currentNSMap': unks6 }], it$gxl = {}, $xq3ji = 0x0;;) {
    try {
      var ig$lx = _vfyz['indexOf']('<', $xq3ji);if (0x0 > ig$lx) {
        if (!_vfyz['substr']($xq3ji)['match'](/^\s*$/)) {
          var lg$xt = xq$ij['doc'],
              htrl = lg$xt['createTextNode'](_vfyz['substr']($xq3ji));lg$xt['appendChild'](htrl), xq$ij['currentElement'] = htrl;
        }return;
      }switch (ig$lx > $xq3ji && glzht(ig$lx), _vfyz['charAt'](ig$lx + 0x1)) {case '/':
          var qus9kn = _vfyz['indexOf']('>', ig$lx + 0x3),
              a7_co = _vfyz['substring'](ig$lx + 0x2, qus9kn),
              rtlzh = zgrlt['pop']();0x0 > qus9kn ? (a7_co = _vfyz['substring'](ig$lx + 0x2)['replace'](/[\s<].*/, ''), pma7oc['error']('end tag name: ' + a7_co + ' is not complete:' + rtlzh['tagName']), qus9kn = ig$lx + 0x1 + a7_co['length']) : a7_co['match'](/\s</) && (a7_co = a7_co['replace'](/[\s<].*/, ''), pma7oc['error']('end tag name: ' + a7_co + ' maybe not complete'), qus9kn = ig$lx + 0x1 + a7_co['length']);var njiu3 = rtlzh['localNSMap'],
              fhzr = rtlzh['tagName'] == a7_co,
              mao7c = fhzr || rtlzh['tagName'] && rtlzh['tagName']['toLowerCase']() == a7_co['toLowerCase']();if (mao7c) {
            if (xq$ij['endElement'](rtlzh['uri'], rtlzh['localName'], a7_co), njiu3) {
              for (var glthrx in njiu3) xq$ij['endPrefixMapping'](glthrx);
            }fhzr || pma7oc['fatalError']('end tag name: ' + a7_co + ' is not match the current start tagName:' + rtlzh['tagName']);
          } else zgrlt['push'](rtlzh);qus9kn++;break;case '?':
          j3$qxi && co_7am(ig$lx), qus9kn = ez_4vfy(_vfyz, ig$lx, xq$ij);break;case '!':
          j3$qxi && co_7am(ig$lx), qus9kn = egj$xti(_vfyz, ig$lx, xq$ij, pma7oc);break;default:
          j3$qxi && co_7am(ig$lx);var cepoma = new ew0b5d(),
              ni$j3 = zgrlt[zgrlt['length'] - 0x1]['currentNSMap'],
              qus9kn = egtxil(_vfyz, ig$lx, cepoma, ni$j3, ij$qx3, pma7oc),
              bd86 = cepoma['length'];if (!cepoma['closed'] && em_47va(_vfyz, qus9kn, cepoma['tagName'], it$gxl) && (cepoma['closed'] = !0x0, g3jx$i['nbsp'] || pma7oc['warning']('unclosed xml attribute')), j3$qxi && bd86) {
            for (var zgtrlh = ecmp7oa(j3$qxi, {}), fyr4vz = 0x0; bd86 > fyr4vz; fyr4vz++) {
              var vf_a47 = cepoma[fyr4vz];co_7am(vf_a47['offset']), vf_a47['locator'] = ecmp7oa(j3$qxi, {});
            }xq$ij['locator'] = zgtrlh, ea4c7_m(cepoma, xq$ij, ni$j3) && zgrlt['push'](cepoma), xq$ij['locator'] = j3$qxi;
          } else ea4c7_m(cepoma, xq$ij, ni$j3) && zgrlt['push'](cepoma);'http://www.w3.org/1999/xhtml' !== cepoma['uri'] || cepoma['closed'] ? qus9kn++ : qus9kn = efylzrh(_vfyz, qus9kn, cepoma['tagName'], ij$qx3, xq$ij);}
    } catch (x$j3q) {
      pma7oc['error']('element parse error: ' + x$j3q), qus9kn = -0x1;
    }qus9kn > $xq3ji ? $xq3ji = qus9kn : glzht(Math['max'](ig$lx, $xq3ji) + 0x1);
  }
}function ecmp7oa(jgi$tx, c_oma7) {
  return c_oma7['lineNumber'] = jgi$tx['lineNumber'], c_oma7['columnNumber'] = jgi$tx['columnNumber'], c_oma7;
}function egtxil(vz4fr, zyf4r, sk9qnu, k09bs, ocempa, ijnuq3) {
  for (var hv, d580, v7fa4 = ++zyf4r, a47mv = eltyrh;;) {
    var mv4_a = vz4fr['charAt'](v7fa4);switch (mv4_a) {case '=':
        if (a47mv === eltrgh) hv = vz4fr['slice'](zyf4r, v7fa4), a47mv = etxglrh;else {
          if (a47mv !== euiq3) throw new Error('attribute equal must after attrName');a47mv = etxglrh;
        }break;case '\x27':case '\x22':
        if (a47mv === etxglrh || a47mv === eltrgh) {
          if (a47mv === eltrgh && (ijnuq3['warning']('attribute value must after "="'), hv = vz4fr['slice'](zyf4r, v7fa4)), zyf4r = v7fa4 + 0x1, v7fa4 = vz4fr['indexOf'](mv4_a, zyf4r), !(v7fa4 > 0x0)) throw new Error('attribute value no end \'' + mv4_a + '\' match');d580 = vz4fr['slice'](zyf4r, v7fa4)['replace'](/&#?\w+;/g, ocempa), sk9qnu['add'](hv, d580, zyf4r - 0x1), a47mv = ezyhtr;
        } else {
          if (a47mv != ej$x3gi) throw new Error('attribute value must after "="');d580 = vz4fr['slice'](zyf4r, v7fa4)['replace'](/&#?\w+;/g, ocempa), sk9qnu['add'](hv, d580, zyf4r), ijnuq3['warning']('attribute "' + hv + '" missed start quot(' + mv4_a + ')!!'), zyf4r = v7fa4 + 0x1, a47mv = ezyhtr;
        }break;case '/':
        switch (a47mv) {case eltyrh:
            sk9qnu['setTagName'](vz4fr['slice'](zyf4r, v7fa4));case ezyhtr:case em_coa:case eglt$x:
            a47mv = eglt$x, sk9qnu['closed'] = !0x0;case ej$x3gi:case eltrgh:case euiq3:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return ijnuq3['error']('unexpected end of input'), a47mv == eltyrh && sk9qnu['setTagName'](vz4fr['slice'](zyf4r, v7fa4)), v7fa4;case '>':
        switch (a47mv) {case eltyrh:
            sk9qnu['setTagName'](vz4fr['slice'](zyf4r, v7fa4));case ezyhtr:case em_coa:case eglt$x:
            break;case ej$x3gi:case eltrgh:
            d580 = vz4fr['slice'](zyf4r, v7fa4), '/' === d580['slice'](-0x1) && (sk9qnu['closed'] = !0x0, d580 = d580['slice'](0x0, -0x1));case euiq3:
            a47mv === euiq3 && (d580 = hv), a47mv == ej$x3gi ? (ijnuq3['warning']('attribute "' + d580 + '" missed quot(")!!'), sk9qnu['add'](hv, d580['replace'](/&#?\w+;/g, ocempa), zyf4r)) : ('http://www.w3.org/1999/xhtml' === k09bs[''] && d580['match'](/^(?:disabled|checked|selected)$/i) || ijnuq3['warning']('attribute "' + d580 + '" missed value!! "' + d580 + '" instead!!'), sk9qnu['add'](d580, d580, zyf4r));break;case etxglrh:
            throw new Error('attribute value missed!!');}return v7fa4;case '\u0080':
        mv4_a = '\x20';default:
        if ('\x20' >= mv4_a) switch (a47mv) {case eltyrh:
            sk9qnu['setTagName'](vz4fr['slice'](zyf4r, v7fa4)), a47mv = em_coa;break;case eltrgh:
            hv = vz4fr['slice'](zyf4r, v7fa4), a47mv = euiq3;break;case ej$x3gi:
            var d580 = vz4fr['slice'](zyf4r, v7fa4)['replace'](/&#?\w+;/g, ocempa);ijnuq3['warning']('attribute "' + d580 + '" missed quot(")!!'), sk9qnu['add'](hv, d580, zyf4r);case ezyhtr:
            a47mv = em_coa;} else switch (a47mv) {case euiq3:
            {
              sk9qnu['tagName'];
            }'http://www.w3.org/1999/xhtml' === k09bs[''] && hv['match'](/^(?:disabled|checked|selected)$/i) || ijnuq3['warning']('attribute "' + hv + '" missed value!! "' + hv + '" instead2!!'), sk9qnu['add'](hv, hv, zyf4r), zyf4r = v7fa4, a47mv = eltrgh;break;case ezyhtr:
            ijnuq3['warning']('attribute space is required"' + hv + '\x22!!');case em_coa:
            a47mv = eltrgh, zyf4r = v7fa4;break;case etxglrh:
            a47mv = ej$x3gi, zyf4r = v7fa4;break;case eglt$x:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}v7fa4++;
  }
}function ea4c7_m(lhg$t, hrgtxl, bs960k) {
  for (var hyfzr = lhg$t['tagName'], grtlzh = null, o7_cm = lhg$t['length']; o7_cm--;) {
    var busk9 = lhg$t[o7_cm],
        fv4_7a = busk9['qName'],
        $igxj = busk9['value'],
        hvfrz = fv4_7a['indexOf'](':');if (hvfrz > 0x0) var db069 = busk9['prefix'] = fv4_7a['slice'](0x0, hvfrz),
        uk6ns = fv4_7a['slice'](hvfrz + 0x1),
        s3un9q = 'xmlns' === db069 && uk6ns;else uk6ns = fv4_7a, db069 = null, s3un9q = 'xmlns' === fv4_7a && '';busk9['localName'] = uk6ns, s3un9q !== !0x1 && (null == grtlzh && (grtlzh = {}, eva7_f(bs960k, bs960k = {})), bs960k[s3un9q] = grtlzh[s3un9q] = $igxj, busk9['uri'] = 'http://www.w3.org/2000/xmlns/', hrgtxl['startPrefixMapping'](s3un9q, $igxj));
  }for (var o7_cm = lhg$t['length']; o7_cm--;) {
    busk9 = lhg$t[o7_cm];var db069 = busk9['prefix'];db069 && ('xml' === db069 && (busk9['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== db069 && (busk9['uri'] = bs960k[db069 || '']));
  }var hvfrz = hyfzr['indexOf'](':');hvfrz > 0x0 ? (db069 = lhg$t['prefix'] = hyfzr['slice'](0x0, hvfrz), uk6ns = lhg$t['localName'] = hyfzr['slice'](hvfrz + 0x1)) : (db069 = null, uk6ns = lhg$t['localName'] = hyfzr);var vr4fy = lhg$t['uri'] = bs960k[db069 || ''];if (hrgtxl['startElement'](vr4fy, uk6ns, hyfzr, lhg$t), !lhg$t['closed']) return lhg$t['currentNSMap'] = bs960k, lhg$t['localNSMap'] = grtlzh, !0x0;if (hrgtxl['endElement'](vr4fy, uk6ns, hyfzr), grtlzh) {
    for (db069 in grtlzh) hrgtxl['endPrefixMapping'](db069);
  }
}function efylzrh(va4_7m, o7macp, d5w280, hfvr, _oc) {
  if (/^(?:script|textarea)$/i['test'](d5w280)) {
    var _m7a4 = va4_7m['indexOf']('</' + d5w280 + '>', o7macp),
        w8d = va4_7m['substring'](o7macp + 0x1, _m7a4);if (/[&<]/['test'](w8d)) return (/^script$/i['test'](d5w280) ? (_oc['characters'](w8d, 0x0, w8d['length']), _m7a4) : (w8d = w8d['replace'](/&#?\w+;/g, hfvr), _oc['characters'](w8d, 0x0, w8d['length']), _m7a4)
    );
  }return o7macp + 0x1;
}function em_47va(y4fzvr, pm7oa, jgtix, vyzfrh) {
  var $ijgtx = vyzfrh[jgtix];return null == $ijgtx && ($ijgtx = y4fzvr['lastIndexOf']('</' + jgtix + '>'), pm7oa > $ijgtx && ($ijgtx = y4fzvr['lastIndexOf']('</' + jgtix)), vyzfrh[jgtix] = $ijgtx), pm7oa > $ijgtx;
}function eva7_f(qjn$i3, m_) {
  for (var y4_vzf in qjn$i3) m_[y4_vzf] = qjn$i3[y4_vzf];
}function egj$xti(b096k, hgxlt$, hyrztl, xrhtg) {
  var coeam = b096k['charAt'](hgxlt$ + 0x2);switch (coeam) {case '-':
      if ('-' === b096k['charAt'](hgxlt$ + 0x3)) {
        var t$xijg = b096k['indexOf']('-->', hgxlt$ + 0x4);return t$xijg > hgxlt$ ? (hyrztl['comment'](b096k, hgxlt$ + 0x4, t$xijg - hgxlt$ - 0x4), t$xijg + 0x3) : (xrhtg['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == b096k['substr'](hgxlt$ + 0x3, 0x6)) {
        var t$xijg = b096k['indexOf'](']]>', hgxlt$ + 0x9);return hyrztl['startCDATA'](), hyrztl['characters'](b096k, hgxlt$ + 0x9, t$xijg - hgxlt$ - 0x9), hyrztl['endCDATA'](), t$xijg + 0x3;
      }var d850bw = emoecap(b096k, hgxlt$),
          ig$x3j = d850bw['length'];if (ig$x3j > 0x1 && /!doctype/i['test'](d850bw[0x0][0x0])) {
        var tyhlz = d850bw[0x1][0x0],
            _av74 = ig$x3j > 0x3 && /^public$/i['test'](d850bw[0x2][0x0]) && d850bw[0x3][0x0],
            n9qus3 = ig$x3j > 0x4 && d850bw[0x4][0x0],
            dw2850 = d850bw[ig$x3j - 0x1];return hyrztl['startDTD'](tyhlz, _av74 && _av74['replace'](/^(['"])(.*?)\1$/, '$2'), n9qus3 && n9qus3['replace'](/^(['"])(.*?)\1$/, '$2')), hyrztl['endDTD'](), dw2850['index'] + dw2850[0x0]['length'];
      }}return -0x1;
}function ez_4vfy(nijq3$, qi$3j, $qji) {
  var ma4_7c = nijq3$['indexOf']('?>', qi$3j);if (ma4_7c) {
    var gzrh = nijq3$['substring'](qi$3j, ma4_7c)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (gzrh) {
      {
        gzrh[0x0]['length'];
      }return $qji['processingInstruction'](gzrh[0x1], gzrh[0x2]), ma4_7c + 0x2;
    }return -0x1;
  }return -0x1;
}function ew0b5d() {}function ezyv(tjgx$, ks6ub9) {
  return tjgx$['__proto__'] = ks6ub9, tjgx$;
}function emoecap(hlytr, f4yvr) {
  var lrhtzg,
      $htgx = [],
      tx$ghl = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (tx$ghl['lastIndex'] = f4yvr, tx$ghl['exec'](hlytr); lrhtzg = tx$ghl['exec'](hlytr);) if ($htgx['push'](lrhtzg), lrhtzg[0x1]) return $htgx;
}var ei$xg3 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    eyhflz = new RegExp('[\\-\\.0-9' + ei$xg3['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    em_ca4 = new RegExp('^' + ei$xg3['source'] + eyhflz['source'] + '*(?::' + ei$xg3['source'] + eyhflz['source'] + '*)?$'),
    eltyrh = 0x0,
    eltrgh = 0x1,
    euiq3 = 0x2,
    etxglrh = 0x3,
    ej$x3gi = 0x4,
    ezyhtr = 0x5,
    em_coa = 0x6,
    eglt$x = 0x7;e_74avf['prototype'] = { 'parse': function (unj3qi, z4yf_v, x3ijg$) {
    var $xil = this['domBuilder'];$xil['startDocument'](), eva7_f(z4yf_v, z4yf_v = {}), ea7v_(unj3qi, z4yf_v, x3ijg$, $xil, this['errorHandler']), $xil['endDocument']();
  } }, ew0b5d['prototype'] = { 'setTagName': function (ac7_4) {
    if (!em_ca4['test'](ac7_4)) throw new Error('invalid tagName:' + ac7_4);this['tagName'] = ac7_4;
  }, 'add': function (t$xgi, hlxgrt, eocm) {
    if (!em_ca4['test'](t$xgi)) throw new Error('invalid attribute:' + t$xgi);this[this['length']++] = { 'qName': t$xgi, 'value': hlxgrt, 'offset': eocm };
  }, 'length': 0x0, 'getLocalName': function ($ijq3n) {
    return this[$ijq3n]['localName'];
  }, 'getLocator': function (yv_fz) {
    return this[yv_fz]['locator'];
  }, 'getQName': function (v4fa) {
    return this[v4fa]['qName'];
  }, 'getURI': function (uk6n) {
    return this[uk6n]['uri'];
  }, 'getValue': function (f4vz_) {
    return this[f4vz_]['value'];
  } }, ezyv({}, ezyv['prototype']) instanceof ezyv || (ezyv = function (snu39, ks9b06) {
  function zy_() {}zy_['prototype'] = ks9b06, zy_ = new zy_();for (ks9b06 in snu39) zy_[ks9b06] = snu39[ks9b06];return zy_;
}), exports['XMLReader'] = e_74avf;