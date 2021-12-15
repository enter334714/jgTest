var o = wx.$U;
function uzdg7w9() {}function uzt59d2(xmlo, up43f, qlxgw, _snkav, suenf) {
  function k_acr(ijoqhm) {
    if (ijoqhm > 0xffff) {
      ijoqhm -= 0x10000;var y0br18 = 0xd800 + (ijoqhm >> 0xa),
          gxz9w = 0xdc00 + (0x3ff & ijoqhm);return String['fromCharCode'](y0br18, gxz9w);
    }return String['fromCharCode'](ijoqhm);
  }function xqmli(jh43m) {
    var a6r8c0 = jh43m['slice'](0x1, -0x1);return a6r8c0 in qlxgw ? qlxgw[a6r8c0] : '#' === a6r8c0['charAt'](0x0) ? k_acr(parseInt(a6r8c0['substr'](0x1)['replace']('x', '0x'))) : (suenf['error']('entity not found:' + jh43m), jh43m);
  }function wd79z(va_skn) {
    if (va_skn > hm4ji3) {
      var pu3fj4 = xmlo['substring'](hm4ji3, va_skn)['replace'](/&#?\w+;/g, xqmli);une$v && c_v6k(hm4ji3), _snkav['characters'](pu3fj4, 0x0, va_skn - hm4ji3), hm4ji3 = va_skn;
    }
  }function c_v6k(loihmq, moqlih) {
    for (; loihmq >= liox7q && (moqlih = $evns['exec'](xmlo));) up4f$e = moqlih['index'], liox7q = up4f$e + moqlih[0x0]['length'], une$v['lineNumber']++;une$v['columnNumber'] = loihmq - up4f$e + 0x1;
  }for (var up4f$e = 0x0, liox7q = 0x0, $evns = /.*(?:\r\n?|\n)|.*$/g, une$v = _snkav['locator'], kc_6va = [{ 'currentNSMap': up43f }], vn6_a = {}, hm4ji3 = 0x0;;) {
    try {
      var p3hm4 = xmlo['indexOf']('<', hm4ji3);if (0x0 > p3hm4) {
        if (!xmlo['substr'](hm4ji3)['match'](/^\s*$/)) {
          var esn = _snkav['doc'],
              rb8y0 = esn['createTextNode'](xmlo['substr'](hm4ji3));esn['appendChild'](rb8y0), _snkav['currentElement'] = rb8y0;
        }return;
      }switch (p3hm4 > hm4ji3 && wd79z(p3hm4), xmlo['charAt'](p3hm4 + 0x1)) {case '/':
          var cr60 = xmlo['indexOf']('>', p3hm4 + 0x3),
              loi7q = xmlo['substring'](p3hm4 + 0x2, cr60),
              mh34i = kc_6va['pop']();0x0 > cr60 ? (loi7q = xmlo['substring'](p3hm4 + 0x2)['replace'](/[\s<].*/, ''), suenf['error']('end tag name: ' + loi7q + ' is not complete:' + mh34i['tagName']), cr60 = p3hm4 + 0x1 + loi7q['length']) : loi7q['match'](/\s</) && (loi7q = loi7q['replace'](/[\s<].*/, ''), suenf['error']('end tag name: ' + loi7q + ' maybe not complete'), cr60 = p3hm4 + 0x1 + loi7q['length']);var skn$_v = mh34i['localNSMap'],
              him4j = mh34i['tagName'] == loi7q,
              $fesun = him4j || mh34i['tagName'] && mh34i['tagName']['toLowerCase']() == loi7q['toLowerCase']();if ($fesun) {
            if (_snkav['endElement'](mh34i['uri'], mh34i['localName'], loi7q), skn$_v) {
              for (var wgz9d5 in skn$_v) _snkav['endPrefixMapping'](wgz9d5);
            }him4j || suenf['fatalError']('end tag name: ' + loi7q + ' is not match the current start tagName:' + mh34i['tagName']);
          } else kc_6va['push'](mh34i);cr60++;break;case '?':
          une$v && c_v6k(p3hm4), cr60 = ur6ca_k(xmlo, p3hm4, _snkav);break;case '!':
          une$v && c_v6k(p3hm4), cr60 = uoqlih(xmlo, p3hm4, _snkav, suenf);break;default:
          une$v && c_v6k(p3hm4);var ven$ = new unves_$(),
              vs_ka = kc_6va[kc_6va['length'] - 0x1]['currentNSMap'],
              cr60 = uqxwo7(xmlo, p3hm4, ven$, vs_ka, xqmli, suenf),
              n_skav = ven$['length'];if (!ven$['closed'] && uues$f(xmlo, cr60, ven$['tagName'], vn6_a) && (ven$['closed'] = !0x0, qlxgw['nbsp'] || suenf['warning']('unclosed xml attribute')), une$v && n_skav) {
            for (var iomj3h = u$fsn(une$v, {}), yb18 = 0x0; n_skav > yb18; yb18++) {
              var vseu = ven$[yb18];c_v6k(vseu['offset']), vseu['locator'] = u$fsn(une$v, {});
            }_snkav['locator'] = iomj3h, umlohiq(ven$, _snkav, vs_ka) && kc_6va['push'](ven$), _snkav['locator'] = une$v;
          } else umlohiq(ven$, _snkav, vs_ka) && kc_6va['push'](ven$);'http://www.w3.org/1999/xhtml' !== ven$['uri'] || ven$['closed'] ? cr60++ : cr60 = uqmiox(xmlo, cr60, ven$['tagName'], xqmli, _snkav);}
    } catch (qmohli) {
      suenf['error']('element parse error: ' + qmohli), cr60 = -0x1;
    }cr60 > hm4ji3 ? hm4ji3 = cr60 : wd79z(Math['max'](p3hm4, hm4ji3) + 0x1);
  }
}function u$fsn(d9g5tz, vnak_) {
  return vnak_['lineNumber'] = d9g5tz['lineNumber'], vnak_['columnNumber'] = d9g5tz['columnNumber'], vnak_;
}function uqxwo7(f3eup4, r8a06c, rka6_, xgwl7q, $ufps, gz5t) {
  for (var vna6_k, bc8r, i3j4hm = ++r8a06c, olmiqx = unka_sv;;) {
    var loxq7w = f3eup4['charAt'](i3j4hm);switch (loxq7w) {case '=':
        if (olmiqx === ua_6kvc) vna6_k = f3eup4['slice'](r8a06c, i3j4hm), olmiqx = ur1yb0;else {
          if (olmiqx !== uj3phf4) throw new Error('attribute equal must after attrName');olmiqx = ur1yb0;
        }break;case '\x27':case '\x22':
        if (olmiqx === ur1yb0 || olmiqx === ua_6kvc) {
          if (olmiqx === ua_6kvc && (gz5t['warning']('attribute value must after "="'), vna6_k = f3eup4['slice'](r8a06c, i3j4hm)), r8a06c = i3j4hm + 0x1, i3j4hm = f3eup4['indexOf'](loxq7w, r8a06c), !(i3j4hm > 0x0)) throw new Error('attribute value no end \'' + loxq7w + '\' match');bc8r = f3eup4['slice'](r8a06c, i3j4hm)['replace'](/&#?\w+;/g, $ufps), rka6_['add'](vna6_k, bc8r, r8a06c - 0x1), olmiqx = uh3jfp;
        } else {
          if (olmiqx != ulxg79w) throw new Error('attribute value must after "="');bc8r = f3eup4['slice'](r8a06c, i3j4hm)['replace'](/&#?\w+;/g, $ufps), rka6_['add'](vna6_k, bc8r, r8a06c), gz5t['warning']('attribute "' + vna6_k + '" missed start quot(' + loxq7w + ')!!'), r8a06c = i3j4hm + 0x1, olmiqx = uh3jfp;
        }break;case '/':
        switch (olmiqx) {case unka_sv:
            rka6_['setTagName'](f3eup4['slice'](r8a06c, i3j4hm));case uh3jfp:case uu4jf:case use$fun:
            olmiqx = use$fun, rka6_['closed'] = !0x0;case ulxg79w:case ua_6kvc:case uj3phf4:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return gz5t['error']('unexpected end of input'), olmiqx == unka_sv && rka6_['setTagName'](f3eup4['slice'](r8a06c, i3j4hm)), i3j4hm;case '>':
        switch (olmiqx) {case unka_sv:
            rka6_['setTagName'](f3eup4['slice'](r8a06c, i3j4hm));case uh3jfp:case uu4jf:case use$fun:
            break;case ulxg79w:case ua_6kvc:
            bc8r = f3eup4['slice'](r8a06c, i3j4hm), '/' === bc8r['slice'](-0x1) && (rka6_['closed'] = !0x0, bc8r = bc8r['slice'](0x0, -0x1));case uj3phf4:
            olmiqx === uj3phf4 && (bc8r = vna6_k), olmiqx == ulxg79w ? (gz5t['warning']('attribute "' + bc8r + '" missed quot(")!!'), rka6_['add'](vna6_k, bc8r['replace'](/&#?\w+;/g, $ufps), r8a06c)) : ('http://www.w3.org/1999/xhtml' === xgwl7q[''] && bc8r['match'](/^(?:disabled|checked|selected)$/i) || gz5t['warning']('attribute "' + bc8r + '" missed value!! "' + bc8r + '" instead!!'), rka6_['add'](bc8r, bc8r, r8a06c));break;case ur1yb0:
            throw new Error('attribute value missed!!');}return i3j4hm;case '\u0080':
        loxq7w = '\x20';default:
        if ('\x20' >= loxq7w) switch (olmiqx) {case unka_sv:
            rka6_['setTagName'](f3eup4['slice'](r8a06c, i3j4hm)), olmiqx = uu4jf;break;case ua_6kvc:
            vna6_k = f3eup4['slice'](r8a06c, i3j4hm), olmiqx = uj3phf4;break;case ulxg79w:
            var bc8r = f3eup4['slice'](r8a06c, i3j4hm)['replace'](/&#?\w+;/g, $ufps);gz5t['warning']('attribute "' + bc8r + '" missed quot(")!!'), rka6_['add'](vna6_k, bc8r, r8a06c);case uh3jfp:
            olmiqx = uu4jf;} else switch (olmiqx) {case uj3phf4:
            {
              rka6_['tagName'];
            }'http://www.w3.org/1999/xhtml' === xgwl7q[''] && vna6_k['match'](/^(?:disabled|checked|selected)$/i) || gz5t['warning']('attribute "' + vna6_k + '" missed value!! "' + vna6_k + '" instead2!!'), rka6_['add'](vna6_k, vna6_k, r8a06c), r8a06c = i3j4hm, olmiqx = ua_6kvc;break;case uh3jfp:
            gz5t['warning']('attribute space is required"' + vna6_k + '\x22!!');case uu4jf:
            olmiqx = ua_6kvc, r8a06c = i3j4hm;break;case ur1yb0:
            olmiqx = ulxg79w, r8a06c = i3j4hm;break;case use$fun:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}i3j4hm++;
  }
}function umlohiq(u$fsep, lmhqi, ck6a_) {
  for (var loh = u$fsep['tagName'], jf43pu = null, o7li = u$fsep['length']; o7li--;) {
    var fusp = u$fsep[o7li],
        o7qilx = fusp['qName'],
        mliqx = fusp['value'],
        jiqoh = o7qilx['indexOf'](':');if (jiqoh > 0x0) var hfjp4 = fusp['prefix'] = o7qilx['slice'](0x0, jiqoh),
        fep43 = o7qilx['slice'](jiqoh + 0x1),
        qhlim = 'xmlns' === hfjp4 && fep43;else fep43 = o7qilx, hfjp4 = null, qhlim = 'xmlns' === o7qilx && '';fusp['localName'] = fep43, qhlim !== !0x1 && (null == jf43pu && (jf43pu = {}, uvsnu$(ck6a_, ck6a_ = {})), ck6a_[qhlim] = jf43pu[qhlim] = mliqx, fusp['uri'] = 'http://www.w3.org/2000/xmlns/', lmhqi['startPrefixMapping'](qhlim, mliqx));
  }for (var o7li = u$fsep['length']; o7li--;) {
    fusp = u$fsep[o7li];var hfjp4 = fusp['prefix'];hfjp4 && ('xml' === hfjp4 && (fusp['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== hfjp4 && (fusp['uri'] = ck6a_[hfjp4 || '']));
  }var jiqoh = loh['indexOf'](':');jiqoh > 0x0 ? (hfjp4 = u$fsep['prefix'] = loh['slice'](0x0, jiqoh), fep43 = u$fsep['localName'] = loh['slice'](jiqoh + 0x1)) : (hfjp4 = null, fep43 = u$fsep['localName'] = loh);var ioxqm = u$fsep['uri'] = ck6a_[hfjp4 || ''];if (lmhqi['startElement'](ioxqm, fep43, loh, u$fsep), !u$fsep['closed']) return u$fsep['currentNSMap'] = ck6a_, u$fsep['localNSMap'] = jf43pu, !0x0;if (lmhqi['endElement'](ioxqm, fep43, loh), jf43pu) {
    for (hfjp4 in jf43pu) lmhqi['endPrefixMapping'](hfjp4);
  }
}function uqmiox(f$epus, $upsef, mhjio3, b18r0, gwdz5) {
  if (/^(?:script|textarea)$/i['test'](mhjio3)) {
    var fu4 = f$epus['indexOf']('</' + mhjio3 + '>', $upsef),
        av6k = f$epus['substring']($upsef + 0x1, fu4);if (/[&<]/['test'](av6k)) return (/^script$/i['test'](mhjio3) ? (gwdz5['characters'](av6k, 0x0, av6k['length']), fu4) : (av6k = av6k['replace'](/&#?\w+;/g, b18r0), gwdz5['characters'](av6k, 0x0, av6k['length']), fu4)
    );
  }return $upsef + 0x1;
}function uues$f(cv6, fp43, b108rc, moqlh) {
  var hoqilm = moqlh[b108rc];return null == hoqilm && (hoqilm = cv6['lastIndexOf']('</' + b108rc + '>'), fp43 > hoqilm && (hoqilm = cv6['lastIndexOf']('</' + b108rc)), moqlh[b108rc] = hoqilm), fp43 > hoqilm;
}function uvsnu$(e3fu4, dw5z) {
  for (var vn_ksa in e3fu4) dw5z[vn_ksa] = e3fu4[vn_ksa];
}function uoqlih(s$en_v, r0a86, p$4e, a6vc) {
  var rb108 = s$en_v['charAt'](r0a86 + 0x2);switch (rb108) {case '-':
      if ('-' === s$en_v['charAt'](r0a86 + 0x3)) {
        var dz592 = s$en_v['indexOf']('-->', r0a86 + 0x4);return dz592 > r0a86 ? (p$4e['comment'](s$en_v, r0a86 + 0x4, dz592 - r0a86 - 0x4), dz592 + 0x3) : (a6vc['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == s$en_v['substr'](r0a86 + 0x3, 0x6)) {
        var dz592 = s$en_v['indexOf'](']]>', r0a86 + 0x9);return p$4e['startCDATA'](), p$4e['characters'](s$en_v, r0a86 + 0x9, dz592 - r0a86 - 0x9), p$4e['endCDATA'](), dz592 + 0x3;
      }var p34e = usven$u(s$en_v, r0a86),
          ka0r6 = p34e['length'];if (ka0r6 > 0x1 && /!doctype/i['test'](p34e[0x0][0x0])) {
        var oxi7ql = p34e[0x1][0x0],
            ef$sun = ka0r6 > 0x3 && /^public$/i['test'](p34e[0x2][0x0]) && p34e[0x3][0x0],
            akcr_ = ka0r6 > 0x4 && p34e[0x4][0x0],
            mhi3oj = p34e[ka0r6 - 0x1];return p$4e['startDTD'](oxi7ql, ef$sun && ef$sun['replace'](/^(['"])(.*?)\1$/, '$2'), akcr_ && akcr_['replace'](/^(['"])(.*?)\1$/, '$2')), p$4e['endDTD'](), mhi3oj['index'] + mhi3oj[0x0]['length'];
      }}return -0x1;
}function ur6ca_k(ne$uf, _nvs$e, pe3f4) {
  var p$u4 = ne$uf['indexOf']('?>', _nvs$e);if (p$u4) {
    var ijmhq = ne$uf['substring'](_nvs$e, p$u4)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (ijmhq) {
      {
        ijmhq[0x0]['length'];
      }return pe3f4['processingInstruction'](ijmhq[0x1], ijmhq[0x2]), p$u4 + 0x2;
    }return -0x1;
  }return -0x1;
}function unves_$() {}function uqlxwg(w59gdz, _va6c) {
  return w59gdz['__proto__'] = _va6c, w59gdz;
}function usven$u(fu$ens, j4mi) {
  var jhoim,
      qoxm = [],
      imj43h = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (imj43h['lastIndex'] = j4mi, imj43h['exec'](fu$ens); jhoim = imj43h['exec'](fu$ens);) if (qoxm['push'](jhoim), jhoim[0x1]) return qoxm;
}var uesnu$ = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    uhjomq = new RegExp('[\\-\\.0-9' + uesnu$['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    uf$spu = new RegExp('^' + uesnu$['source'] + uhjomq['source'] + '*(?::' + uesnu$['source'] + uhjomq['source'] + '*)?$'),
    unka_sv = 0x0,
    ua_6kvc = 0x1,
    uj3phf4 = 0x2,
    ur1yb0 = 0x3,
    ulxg79w = 0x4,
    uh3jfp = 0x5,
    uu4jf = 0x6,
    use$fun = 0x7;uzdg7w9['prototype'] = { 'parse': function (g7lqx, fu4jp3, _vk6a) {
    var na6vk_ = this['domBuilder'];na6vk_['startDocument'](), uvsnu$(fu4jp3, fu4jp3 = {}), uzt59d2(g7lqx, fu4jp3, _vk6a, na6vk_, this['errorHandler']), na6vk_['endDocument']();
  } }, unves_$['prototype'] = { 'setTagName': function (h3joi) {
    if (!uf$spu['test'](h3joi)) throw new Error('invalid tagName:' + h3joi);this['tagName'] = h3joi;
  }, 'add': function (ac_k6, hlmio, i4j) {
    if (!uf$spu['test'](ac_k6)) throw new Error('invalid attribute:' + ac_k6);this[this['length']++] = { 'qName': ac_k6, 'value': hlmio, 'offset': i4j };
  }, 'length': 0x0, 'getLocalName': function (euns$f) {
    return this[euns$f]['localName'];
  }, 'getLocator': function (_vakn) {
    return this[_vakn]['locator'];
  }, 'getQName': function (qomhji) {
    return this[qomhji]['qName'];
  }, 'getURI': function (hojqm) {
    return this[hojqm]['uri'];
  }, 'getValue': function (zd79w) {
    return this[zd79w]['value'];
  } }, uqlxwg({}, uqlxwg['prototype']) instanceof uqlxwg || (uqlxwg = function (f$peus, ak_vsn) {
  function vka() {}vka['prototype'] = ak_vsn, vka = new vka();for (ak_vsn in f$peus) vka[ak_vsn] = f$peus[ak_vsn];return vka;
}), exports['XMLReader'] = uzdg7w9;