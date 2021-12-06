var o = wx.$U;
function uf43pe() {}function umhoij(unes$, vs$k_, ixlm, f3u4j, kn$v_) {
  function b1ry0(h43pjf) {
    if (h43pjf > 0xffff) {
      h43pjf -= 0x10000;var _e$sv = 0xd800 + (h43pjf >> 0xa),
          $spf = 0xdc00 + (0x3ff & h43pjf);return String['fromCharCode'](_e$sv, $spf);
    }return String['fromCharCode'](h43pjf);
  }function hilom(vsu$e) {
    var iqoxml = vsu$e['slice'](0x1, -0x1);return iqoxml in ixlm ? ixlm[iqoxml] : '#' === iqoxml['charAt'](0x0) ? b1ry0(parseInt(iqoxml['substr'](0x1)['replace']('x', '0x'))) : (kn$v_['error']('entity not found:' + vsu$e), vsu$e);
  }function dgw7(gz9xw7) {
    if (gz9xw7 > qlxo7) {
      var r1yb80 = unes$['substring'](qlxo7, gz9xw7)['replace'](/&#?\w+;/g, hilom);_ns$kv && epf4u3(qlxo7), f3u4j['characters'](r1yb80, 0x0, gz9xw7 - qlxo7), qlxo7 = gz9xw7;
    }
  }function epf4u3(oqmhil, jqoh) {
    for (; oqmhil >= f4j3p && (jqoh = nks_$['exec'](unes$));) akn_ = jqoh['index'], f4j3p = akn_ + jqoh[0x0]['length'], _ns$kv['lineNumber']++;_ns$kv['columnNumber'] = oqmhil - akn_ + 0x1;
  }for (var akn_ = 0x0, f4j3p = 0x0, nks_$ = /.*(?:\r\n?|\n)|.*$/g, _ns$kv = f3u4j['locator'], omilhq = [{ 'currentNSMap': vs$k_ }], gzt95 = {}, qlxo7 = 0x0;;) {
    try {
      var x7wzg9 = unes$['indexOf']('<', qlxo7);if (0x0 > x7wzg9) {
        if (!unes$['substr'](qlxo7)['match'](/^\s*$/)) {
          var y108br = f3u4j['doc'],
              oimqlh = y108br['createTextNode'](unes$['substr'](qlxo7));y108br['appendChild'](oimqlh), f3u4j['currentElement'] = oimqlh;
        }return;
      }switch (x7wzg9 > qlxo7 && dgw7(x7wzg9), unes$['charAt'](x7wzg9 + 0x1)) {case '/':
          var r6 = unes$['indexOf']('>', x7wzg9 + 0x3),
              ns$ev = unes$['substring'](x7wzg9 + 0x2, r6),
              oqxw7l = omilhq['pop']();0x0 > r6 ? (ns$ev = unes$['substring'](x7wzg9 + 0x2)['replace'](/[\s<].*/, ''), kn$v_['error']('end tag name: ' + ns$ev + ' is not complete:' + oqxw7l['tagName']), r6 = x7wzg9 + 0x1 + ns$ev['length']) : ns$ev['match'](/\s</) && (ns$ev = ns$ev['replace'](/[\s<].*/, ''), kn$v_['error']('end tag name: ' + ns$ev + ' maybe not complete'), r6 = x7wzg9 + 0x1 + ns$ev['length']);var b0r8c1 = oqxw7l['localNSMap'],
              qxol7 = oqxw7l['tagName'] == ns$ev,
              moqihl = qxol7 || oqxw7l['tagName'] && oqxw7l['tagName']['toLowerCase']() == ns$ev['toLowerCase']();if (moqihl) {
            if (f3u4j['endElement'](oqxw7l['uri'], oqxw7l['localName'], ns$ev), b0r8c1) {
              for (var fh4j3 in b0r8c1) f3u4j['endPrefixMapping'](fh4j3);
            }qxol7 || kn$v_['fatalError']('end tag name: ' + ns$ev + ' is not match the current start tagName:' + oqxw7l['tagName']);
          } else omilhq['push'](oqxw7l);r6++;break;case '?':
          _ns$kv && epf4u3(x7wzg9), r6 = uup4fe(unes$, x7wzg9, f3u4j);break;case '!':
          _ns$kv && epf4u3(x7wzg9), r6 = u$4euf(unes$, x7wzg9, f3u4j, kn$v_);break;default:
          _ns$kv && epf4u3(x7wzg9);var ojmihq = new uzx9wg(),
              ql7oix = omilhq[omilhq['length'] - 0x1]['currentNSMap'],
              r6 = ur6_ak(unes$, x7wzg9, ojmihq, ql7oix, hilom, kn$v_),
              f$us = ojmihq['length'];if (!ojmihq['closed'] && uu43jp(unes$, r6, ojmihq['tagName'], gzt95) && (ojmihq['closed'] = !0x0, ixlm['nbsp'] || kn$v_['warning']('unclosed xml attribute')), _ns$kv && f$us) {
            for (var k_na6v = umqlioh(_ns$kv, {}), nvus$ = 0x0; f$us > nvus$; nvus$++) {
              var w95zg = ojmihq[nvus$];epf4u3(w95zg['offset']), w95zg['locator'] = umqlioh(_ns$kv, {});
            }f3u4j['locator'] = k_na6v, un6_kv(ojmihq, f3u4j, ql7oix) && omilhq['push'](ojmihq), f3u4j['locator'] = _ns$kv;
          } else un6_kv(ojmihq, f3u4j, ql7oix) && omilhq['push'](ojmihq);'http://www.w3.org/1999/xhtml' !== ojmihq['uri'] || ojmihq['closed'] ? r6++ : r6 = uv6_k(unes$, r6, ojmihq['tagName'], hilom, f3u4j);}
    } catch (f$sune) {
      kn$v_['error']('element parse error: ' + f$sune), r6 = -0x1;
    }r6 > qlxo7 ? qlxo7 = r6 : dgw7(Math['max'](x7wzg9, qlxo7) + 0x1);
  }
}function umqlioh(yrb10, fujp43) {
  return fujp43['lineNumber'] = yrb10['lineNumber'], fujp43['columnNumber'] = yrb10['columnNumber'], fujp43;
}function ur6_ak(zgdw79, cr018, joqih, f4jpu, oijmhq, ujp34f) {
  for (var xo7wql, iqomh, wg7zd9 = ++cr018, ioqjhm = uyb0r81;;) {
    var n$esuf = zgdw79['charAt'](wg7zd9);switch (n$esuf) {case '=':
        if (ioqjhm === uu$fns) xo7wql = zgdw79['slice'](cr018, wg7zd9), ioqjhm = uxlwgq7;else {
          if (ioqjhm !== urc0ka) throw new Error('attribute equal must after attrName');ioqjhm = uxlwgq7;
        }break;case '\x27':case '\x22':
        if (ioqjhm === uxlwgq7 || ioqjhm === uu$fns) {
          if (ioqjhm === uu$fns && (ujp34f['warning']('attribute value must after "="'), xo7wql = zgdw79['slice'](cr018, wg7zd9)), cr018 = wg7zd9 + 0x1, wg7zd9 = zgdw79['indexOf'](n$esuf, cr018), !(wg7zd9 > 0x0)) throw new Error('attribute value no end \'' + n$esuf + '\' match');iqomh = zgdw79['slice'](cr018, wg7zd9)['replace'](/&#?\w+;/g, oijmhq), joqih['add'](xo7wql, iqomh, cr018 - 0x1), ioqjhm = uzwd5g9;
        } else {
          if (ioqjhm != ur68a0) throw new Error('attribute value must after "="');iqomh = zgdw79['slice'](cr018, wg7zd9)['replace'](/&#?\w+;/g, oijmhq), joqih['add'](xo7wql, iqomh, cr018), ujp34f['warning']('attribute "' + xo7wql + '" missed start quot(' + n$esuf + ')!!'), cr018 = wg7zd9 + 0x1, ioqjhm = uzwd5g9;
        }break;case '/':
        switch (ioqjhm) {case uyb0r81:
            joqih['setTagName'](zgdw79['slice'](cr018, wg7zd9));case uzwd5g9:case umhql:case uwd7g9:
            ioqjhm = uwd7g9, joqih['closed'] = !0x0;case ur68a0:case uu$fns:case urc0ka:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return ujp34f['error']('unexpected end of input'), ioqjhm == uyb0r81 && joqih['setTagName'](zgdw79['slice'](cr018, wg7zd9)), wg7zd9;case '>':
        switch (ioqjhm) {case uyb0r81:
            joqih['setTagName'](zgdw79['slice'](cr018, wg7zd9));case uzwd5g9:case umhql:case uwd7g9:
            break;case ur68a0:case uu$fns:
            iqomh = zgdw79['slice'](cr018, wg7zd9), '/' === iqomh['slice'](-0x1) && (joqih['closed'] = !0x0, iqomh = iqomh['slice'](0x0, -0x1));case urc0ka:
            ioqjhm === urc0ka && (iqomh = xo7wql), ioqjhm == ur68a0 ? (ujp34f['warning']('attribute "' + iqomh + '" missed quot(")!!'), joqih['add'](xo7wql, iqomh['replace'](/&#?\w+;/g, oijmhq), cr018)) : ('http://www.w3.org/1999/xhtml' === f4jpu[''] && iqomh['match'](/^(?:disabled|checked|selected)$/i) || ujp34f['warning']('attribute "' + iqomh + '" missed value!! "' + iqomh + '" instead!!'), joqih['add'](iqomh, iqomh, cr018));break;case uxlwgq7:
            throw new Error('attribute value missed!!');}return wg7zd9;case '\u0080':
        n$esuf = '\x20';default:
        if ('\x20' >= n$esuf) switch (ioqjhm) {case uyb0r81:
            joqih['setTagName'](zgdw79['slice'](cr018, wg7zd9)), ioqjhm = umhql;break;case uu$fns:
            xo7wql = zgdw79['slice'](cr018, wg7zd9), ioqjhm = urc0ka;break;case ur68a0:
            var iqomh = zgdw79['slice'](cr018, wg7zd9)['replace'](/&#?\w+;/g, oijmhq);ujp34f['warning']('attribute "' + iqomh + '" missed quot(")!!'), joqih['add'](xo7wql, iqomh, cr018);case uzwd5g9:
            ioqjhm = umhql;} else switch (ioqjhm) {case urc0ka:
            {
              joqih['tagName'];
            }'http://www.w3.org/1999/xhtml' === f4jpu[''] && xo7wql['match'](/^(?:disabled|checked|selected)$/i) || ujp34f['warning']('attribute "' + xo7wql + '" missed value!! "' + xo7wql + '" instead2!!'), joqih['add'](xo7wql, xo7wql, cr018), cr018 = wg7zd9, ioqjhm = uu$fns;break;case uzwd5g9:
            ujp34f['warning']('attribute space is required"' + xo7wql + '\x22!!');case umhql:
            ioqjhm = uu$fns, cr018 = wg7zd9;break;case uxlwgq7:
            ioqjhm = ur68a0, cr018 = wg7zd9;break;case uwd7g9:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}wg7zd9++;
  }
}function un6_kv(pfe4, wolq, gxw) {
  for (var io7qxl = pfe4['tagName'], c6k_ra = null, dt2z = pfe4['length']; dt2z--;) {
    var uf$esn = pfe4[dt2z],
        vs$_e = uf$esn['qName'],
        n$efus = uf$esn['value'],
        mh3j4i = vs$_e['indexOf'](':');if (mh3j4i > 0x0) var $upe = uf$esn['prefix'] = vs$_e['slice'](0x0, mh3j4i),
        _s$kn = vs$_e['slice'](mh3j4i + 0x1),
        cr_a6k = 'xmlns' === $upe && _s$kn;else _s$kn = vs$_e, $upe = null, cr_a6k = 'xmlns' === vs$_e && '';uf$esn['localName'] = _s$kn, cr_a6k !== !0x1 && (null == c6k_ra && (c6k_ra = {}, ufspe(gxw, gxw = {})), gxw[cr_a6k] = c6k_ra[cr_a6k] = n$efus, uf$esn['uri'] = 'http://www.w3.org/2000/xmlns/', wolq['startPrefixMapping'](cr_a6k, n$efus));
  }for (var dt2z = pfe4['length']; dt2z--;) {
    uf$esn = pfe4[dt2z];var $upe = uf$esn['prefix'];$upe && ('xml' === $upe && (uf$esn['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== $upe && (uf$esn['uri'] = gxw[$upe || '']));
  }var mh3j4i = io7qxl['indexOf'](':');mh3j4i > 0x0 ? ($upe = pfe4['prefix'] = io7qxl['slice'](0x0, mh3j4i), _s$kn = pfe4['localName'] = io7qxl['slice'](mh3j4i + 0x1)) : ($upe = null, _s$kn = pfe4['localName'] = io7qxl);var p4u = pfe4['uri'] = gxw[$upe || ''];if (wolq['startElement'](p4u, _s$kn, io7qxl, pfe4), !pfe4['closed']) return pfe4['currentNSMap'] = gxw, pfe4['localNSMap'] = c6k_ra, !0x0;if (wolq['endElement'](p4u, _s$kn, io7qxl), c6k_ra) {
    for ($upe in c6k_ra) wolq['endPrefixMapping']($upe);
  }
}function uv6_k(qmix, a_nsv, f3pjh4, ohqmli, r60ka) {
  if (/^(?:script|textarea)$/i['test'](f3pjh4)) {
    var gzw7d9 = qmix['indexOf']('</' + f3pjh4 + '>', a_nsv),
        v_kac = qmix['substring'](a_nsv + 0x1, gzw7d9);if (/[&<]/['test'](v_kac)) return (/^script$/i['test'](f3pjh4) ? (r60ka['characters'](v_kac, 0x0, v_kac['length']), gzw7d9) : (v_kac = v_kac['replace'](/&#?\w+;/g, ohqmli), r60ka['characters'](v_kac, 0x0, v_kac['length']), gzw7d9)
    );
  }return a_nsv + 0x1;
}function uu43jp(a08r6c, ka6c_v, xlw97, m4jp3h) {
  var dz9w7 = m4jp3h[xlw97];return null == dz9w7 && (dz9w7 = a08r6c['lastIndexOf']('</' + xlw97 + '>'), ka6c_v > dz9w7 && (dz9w7 = a08r6c['lastIndexOf']('</' + xlw97)), m4jp3h[xlw97] = dz9w7), ka6c_v > dz9w7;
}function ufspe(i3mhj, fp34ju) {
  for (var ks_nav in i3mhj) fp34ju[ks_nav] = i3mhj[ks_nav];
}function u$4euf(oimhl, kva6_n, qowl7x, homj) {
  var pm34j = oimhl['charAt'](kva6_n + 0x2);switch (pm34j) {case '-':
      if ('-' === oimhl['charAt'](kva6_n + 0x3)) {
        var zdw79g = oimhl['indexOf']('-->', kva6_n + 0x4);return zdw79g > kva6_n ? (qowl7x['comment'](oimhl, kva6_n + 0x4, zdw79g - kva6_n - 0x4), zdw79g + 0x3) : (homj['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == oimhl['substr'](kva6_n + 0x3, 0x6)) {
        var zdw79g = oimhl['indexOf'](']]>', kva6_n + 0x9);return qowl7x['startCDATA'](), qowl7x['characters'](oimhl, kva6_n + 0x9, zdw79g - kva6_n - 0x9), qowl7x['endCDATA'](), zdw79g + 0x3;
      }var im3jo = uio7ql(oimhl, kva6_n),
          g5td9z = im3jo['length'];if (g5td9z > 0x1 && /!doctype/i['test'](im3jo[0x0][0x0])) {
        var ox7qw = im3jo[0x1][0x0],
            a_ckv = g5td9z > 0x3 && /^public$/i['test'](im3jo[0x2][0x0]) && im3jo[0x3][0x0],
            w9dgz = g5td9z > 0x4 && im3jo[0x4][0x0],
            c0861r = im3jo[g5td9z - 0x1];return qowl7x['startDTD'](ox7qw, a_ckv && a_ckv['replace'](/^(['"])(.*?)\1$/, '$2'), w9dgz && w9dgz['replace'](/^(['"])(.*?)\1$/, '$2')), qowl7x['endDTD'](), c0861r['index'] + c0861r[0x0]['length'];
      }}return -0x1;
}function uup4fe(m34jp, $_e, $ensfu) {
  var fu$es = m34jp['indexOf']('?>', $_e);if (fu$es) {
    var $vsen = m34jp['substring']($_e, fu$es)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if ($vsen) {
      {
        $vsen[0x0]['length'];
      }return $ensfu['processingInstruction']($vsen[0x1], $vsen[0x2]), fu$es + 0x2;
    }return -0x1;
  }return -0x1;
}function uzx9wg() {}function uuf4e$($s, lihqo) {
  return $s['__proto__'] = lihqo, $s;
}function uio7ql(w7xg9, y1r80b) {
  var a6rk_c,
      ar0 = [],
      $e4p = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for ($e4p['lastIndex'] = y1r80b, $e4p['exec'](w7xg9); a6rk_c = $e4p['exec'](w7xg9);) if (ar0['push'](a6rk_c), a6rk_c[0x1]) return ar0;
}var uwg97dz = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    u$svneu = new RegExp('[\\-\\.0-9' + uwg97dz['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    uskva = new RegExp('^' + uwg97dz['source'] + u$svneu['source'] + '*(?::' + uwg97dz['source'] + u$svneu['source'] + '*)?$'),
    uyb0r81 = 0x0,
    uu$fns = 0x1,
    urc0ka = 0x2,
    uxlwgq7 = 0x3,
    ur68a0 = 0x4,
    uzwd5g9 = 0x5,
    umhql = 0x6,
    uwd7g9 = 0x7;uf43pe['prototype'] = { 'parse': function (hmji34, qmixlo, upj34f) {
    var qhimjo = this['domBuilder'];qhimjo['startDocument'](), ufspe(qmixlo, qmixlo = {}), umhoij(hmji34, qmixlo, upj34f, qhimjo, this['errorHandler']), qhimjo['endDocument']();
  } }, uzx9wg['prototype'] = { 'setTagName': function (c068ar) {
    if (!uskva['test'](c068ar)) throw new Error('invalid tagName:' + c068ar);this['tagName'] = c068ar;
  }, 'add': function (wdg59z, jmoih3, a_v6kn) {
    if (!uskva['test'](wdg59z)) throw new Error('invalid attribute:' + wdg59z);this[this['length']++] = { 'qName': wdg59z, 'value': jmoih3, 'offset': a_v6kn };
  }, 'length': 0x0, 'getLocalName': function ($snef) {
    return this[$snef]['localName'];
  }, 'getLocator': function ($uf4e) {
    return this[$uf4e]['locator'];
  }, 'getQName': function (av6nk_) {
    return this[av6nk_]['qName'];
  }, 'getURI': function (ql) {
    return this[ql]['uri'];
  }, 'getValue': function (jiom3h) {
    return this[jiom3h]['value'];
  } }, uuf4e$({}, uuf4e$['prototype']) instanceof uuf4e$ || (uuf4e$ = function (c6_r, $ufns) {
  function qmoijh() {}qmoijh['prototype'] = $ufns, qmoijh = new qmoijh();for ($ufns in c6_r) qmoijh[$ufns] = c6_r[$ufns];return qmoijh;
}), exports['XMLReader'] = uf43pe;