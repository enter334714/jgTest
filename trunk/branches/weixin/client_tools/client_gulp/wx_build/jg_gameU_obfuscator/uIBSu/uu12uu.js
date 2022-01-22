var o = wx.$U;
function ua6_ckv() {}function uu3pj(jih3, vsu, o7q, fens, r06ck) {
  function $nsfe(joqihm) {
    if (joqihm > 0xffff) {
      joqihm -= 0x10000;var ioh = 0xd800 + (joqihm >> 0xa),
          jfu3 = 0xdc00 + (0x3ff & joqihm);return String['fromCharCode'](ioh, jfu3);
    }return String['fromCharCode'](joqihm);
  }function efup4$(ilxq7) {
    var pf$us = ilxq7['slice'](0x1, -0x1);return pf$us in o7q ? o7q[pf$us] : '#' === pf$us['charAt'](0x0) ? $nsfe(parseInt(pf$us['substr'](0x1)['replace']('x', '0x'))) : (r06ck['error']('entity not found:' + ilxq7), ilxq7);
  }function d29tz5($uvnes) {
    if ($uvnes > nak_6v) {
      var fp4e3 = jih3['substring'](nak_6v, $uvnes)['replace'](/&#?\w+;/g, efup4$);xlwg79 && jfu4(nak_6v), fens['characters'](fp4e3, 0x0, $uvnes - nak_6v), nak_6v = $uvnes;
    }
  }function jfu4(h4i3jm, ohjm) {
    for (; h4i3jm >= u$sn && (ohjm = e34u['exec'](jih3));) ol7xiq = ohjm['index'], u$sn = ol7xiq + ohjm[0x0]['length'], xlwg79['lineNumber']++;xlwg79['columnNumber'] = h4i3jm - ol7xiq + 0x1;
  }for (var ol7xiq = 0x0, u$sn = 0x0, e34u = /.*(?:\r\n?|\n)|.*$/g, xlwg79 = fens['locator'], uespf = [{ 'currentNSMap': vsu }], qhmli = {}, nak_6v = 0x0;;) {
    try {
      var rc0k6a = jih3['indexOf']('<', nak_6v);if (0x0 > rc0k6a) {
        if (!jih3['substr'](nak_6v)['match'](/^\s*$/)) {
          var ep4f3u = fens['doc'],
              ilmxq = ep4f3u['createTextNode'](jih3['substr'](nak_6v));ep4f3u['appendChild'](ilmxq), fens['currentElement'] = ilmxq;
        }return;
      }switch (rc0k6a > nak_6v && d29tz5(rc0k6a), jih3['charAt'](rc0k6a + 0x1)) {case '/':
          var vansk_ = jih3['indexOf']('>', rc0k6a + 0x3),
              jf4u3p = jih3['substring'](rc0k6a + 0x2, vansk_),
              dzgw79 = uespf['pop']();0x0 > vansk_ ? (jf4u3p = jih3['substring'](rc0k6a + 0x2)['replace'](/[\s<].*/, ''), r06ck['error']('end tag name: ' + jf4u3p + ' is not complete:' + dzgw79['tagName']), vansk_ = rc0k6a + 0x1 + jf4u3p['length']) : jf4u3p['match'](/\s</) && (jf4u3p = jf4u3p['replace'](/[\s<].*/, ''), r06ck['error']('end tag name: ' + jf4u3p + ' maybe not complete'), vansk_ = rc0k6a + 0x1 + jf4u3p['length']);var fu3e4p = dzgw79['localNSMap'],
              mxoliq = dzgw79['tagName'] == jf4u3p,
              xw7qgl = mxoliq || dzgw79['tagName'] && dzgw79['tagName']['toLowerCase']() == jf4u3p['toLowerCase']();if (xw7qgl) {
            if (fens['endElement'](dzgw79['uri'], dzgw79['localName'], jf4u3p), fu3e4p) {
              for (var pu3ef in fu3e4p) fens['endPrefixMapping'](pu3ef);
            }mxoliq || r06ck['fatalError']('end tag name: ' + jf4u3p + ' is not match the current start tagName:' + dzgw79['tagName']);
          } else uespf['push'](dzgw79);vansk_++;break;case '?':
          xlwg79 && jfu4(rc0k6a), vansk_ = ua_vn(jih3, rc0k6a, fens);break;case '!':
          xlwg79 && jfu4(rc0k6a), vansk_ = uu$snef(jih3, rc0k6a, fens, r06ck);break;default:
          xlwg79 && jfu4(rc0k6a);var d5tzg9 = new uoixql(),
              sev_n$ = uespf[uespf['length'] - 0x1]['currentNSMap'],
              vansk_ = ud59zg(jih3, rc0k6a, d5tzg9, sev_n$, efup4$, r06ck),
              x97wl = d5tzg9['length'];if (!d5tzg9['closed'] && ufh3j4p(jih3, vansk_, d5tzg9['tagName'], qhmli) && (d5tzg9['closed'] = !0x0, o7q['nbsp'] || r06ck['warning']('unclosed xml attribute')), xlwg79 && x97wl) {
            for (var f3uj = ucr018(xlwg79, {}), g7zw9d = 0x0; x97wl > g7zw9d; g7zw9d++) {
              var ioxq = d5tzg9[g7zw9d];jfu4(ioxq['offset']), ioxq['locator'] = ucr018(xlwg79, {});
            }fens['locator'] = f3uj, usp$efu(d5tzg9, fens, sev_n$) && uespf['push'](d5tzg9), fens['locator'] = xlwg79;
          } else usp$efu(d5tzg9, fens, sev_n$) && uespf['push'](d5tzg9);'http://www.w3.org/1999/xhtml' !== d5tzg9['uri'] || d5tzg9['closed'] ? vansk_++ : vansk_ = uf4pu3e(jih3, vansk_, d5tzg9['tagName'], efup4$, fens);}
    } catch (pe4u3) {
      r06ck['error']('element parse error: ' + pe4u3), vansk_ = -0x1;
    }vansk_ > nak_6v ? nak_6v = vansk_ : d29tz5(Math['max'](rc0k6a, nak_6v) + 0x1);
  }
}function ucr018(t95dz2, oihmj3) {
  return oihmj3['lineNumber'] = t95dz2['lineNumber'], oihmj3['columnNumber'] = t95dz2['columnNumber'], oihmj3;
}function ud59zg(as_kvn, r0b8, im3j, xloim, fj43hp, hjoqi) {
  for (var jp3fu, $_vskn, tzd259 = ++r0b8, anks_ = unk_vs$;;) {
    var lmiqh = as_kvn['charAt'](tzd259);switch (lmiqh) {case '=':
        if (anks_ === upsufe) jp3fu = as_kvn['slice'](r0b8, tzd259), anks_ = uz2d9;else {
          if (anks_ !== u$nk_vs) throw new Error('attribute equal must after attrName');anks_ = uz2d9;
        }break;case '\x27':case '\x22':
        if (anks_ === uz2d9 || anks_ === upsufe) {
          if (anks_ === upsufe && (hjoqi['warning']('attribute value must after "="'), jp3fu = as_kvn['slice'](r0b8, tzd259)), r0b8 = tzd259 + 0x1, tzd259 = as_kvn['indexOf'](lmiqh, r0b8), !(tzd259 > 0x0)) throw new Error('attribute value no end \'' + lmiqh + '\' match');$_vskn = as_kvn['slice'](r0b8, tzd259)['replace'](/&#?\w+;/g, fj43hp), im3j['add'](jp3fu, $_vskn, r0b8 - 0x1), anks_ = uk6v_n;
        } else {
          if (anks_ != uavc6_k) throw new Error('attribute value must after "="');$_vskn = as_kvn['slice'](r0b8, tzd259)['replace'](/&#?\w+;/g, fj43hp), im3j['add'](jp3fu, $_vskn, r0b8), hjoqi['warning']('attribute "' + jp3fu + '" missed start quot(' + lmiqh + ')!!'), r0b8 = tzd259 + 0x1, anks_ = uk6v_n;
        }break;case '/':
        switch (anks_) {case unk_vs$:
            im3j['setTagName'](as_kvn['slice'](r0b8, tzd259));case uk6v_n:case u_a6rc:case ur18bc0:
            anks_ = ur18bc0, im3j['closed'] = !0x0;case uavc6_k:case upsufe:case u$nk_vs:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return hjoqi['error']('unexpected end of input'), anks_ == unk_vs$ && im3j['setTagName'](as_kvn['slice'](r0b8, tzd259)), tzd259;case '>':
        switch (anks_) {case unk_vs$:
            im3j['setTagName'](as_kvn['slice'](r0b8, tzd259));case uk6v_n:case u_a6rc:case ur18bc0:
            break;case uavc6_k:case upsufe:
            $_vskn = as_kvn['slice'](r0b8, tzd259), '/' === $_vskn['slice'](-0x1) && (im3j['closed'] = !0x0, $_vskn = $_vskn['slice'](0x0, -0x1));case u$nk_vs:
            anks_ === u$nk_vs && ($_vskn = jp3fu), anks_ == uavc6_k ? (hjoqi['warning']('attribute "' + $_vskn + '" missed quot(")!!'), im3j['add'](jp3fu, $_vskn['replace'](/&#?\w+;/g, fj43hp), r0b8)) : ('http://www.w3.org/1999/xhtml' === xloim[''] && $_vskn['match'](/^(?:disabled|checked|selected)$/i) || hjoqi['warning']('attribute "' + $_vskn + '" missed value!! "' + $_vskn + '" instead!!'), im3j['add']($_vskn, $_vskn, r0b8));break;case uz2d9:
            throw new Error('attribute value missed!!');}return tzd259;case '\u0080':
        lmiqh = '\x20';default:
        if ('\x20' >= lmiqh) switch (anks_) {case unk_vs$:
            im3j['setTagName'](as_kvn['slice'](r0b8, tzd259)), anks_ = u_a6rc;break;case upsufe:
            jp3fu = as_kvn['slice'](r0b8, tzd259), anks_ = u$nk_vs;break;case uavc6_k:
            var $_vskn = as_kvn['slice'](r0b8, tzd259)['replace'](/&#?\w+;/g, fj43hp);hjoqi['warning']('attribute "' + $_vskn + '" missed quot(")!!'), im3j['add'](jp3fu, $_vskn, r0b8);case uk6v_n:
            anks_ = u_a6rc;} else switch (anks_) {case u$nk_vs:
            {
              im3j['tagName'];
            }'http://www.w3.org/1999/xhtml' === xloim[''] && jp3fu['match'](/^(?:disabled|checked|selected)$/i) || hjoqi['warning']('attribute "' + jp3fu + '" missed value!! "' + jp3fu + '" instead2!!'), im3j['add'](jp3fu, jp3fu, r0b8), r0b8 = tzd259, anks_ = upsufe;break;case uk6v_n:
            hjoqi['warning']('attribute space is required"' + jp3fu + '\x22!!');case u_a6rc:
            anks_ = upsufe, r0b8 = tzd259;break;case uz2d9:
            anks_ = uavc6_k, r0b8 = tzd259;break;case ur18bc0:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}tzd259++;
  }
}function usp$efu(cbr801, lxwo7q, ep43fu) {
  for (var a8c = cbr801['tagName'], z925dt = null, rac_6 = cbr801['length']; rac_6--;) {
    var qjhmio = cbr801[rac_6],
        e_ns$ = qjhmio['qName'],
        dt5zg = qjhmio['value'],
        mj3hi4 = e_ns$['indexOf'](':');if (mj3hi4 > 0x0) var c_ra6k = qjhmio['prefix'] = e_ns$['slice'](0x0, mj3hi4),
        oqw7lx = e_ns$['slice'](mj3hi4 + 0x1),
        uep4 = 'xmlns' === c_ra6k && oqw7lx;else oqw7lx = e_ns$, c_ra6k = null, uep4 = 'xmlns' === e_ns$ && '';qjhmio['localName'] = oqw7lx, uep4 !== !0x1 && (null == z925dt && (z925dt = {}, uoxmiql(ep43fu, ep43fu = {})), ep43fu[uep4] = z925dt[uep4] = dt5zg, qjhmio['uri'] = 'http://www.w3.org/2000/xmlns/', lxwo7q['startPrefixMapping'](uep4, dt5zg));
  }for (var rac_6 = cbr801['length']; rac_6--;) {
    qjhmio = cbr801[rac_6];var c_ra6k = qjhmio['prefix'];c_ra6k && ('xml' === c_ra6k && (qjhmio['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== c_ra6k && (qjhmio['uri'] = ep43fu[c_ra6k || '']));
  }var mj3hi4 = a8c['indexOf'](':');mj3hi4 > 0x0 ? (c_ra6k = cbr801['prefix'] = a8c['slice'](0x0, mj3hi4), oqw7lx = cbr801['localName'] = a8c['slice'](mj3hi4 + 0x1)) : (c_ra6k = null, oqw7lx = cbr801['localName'] = a8c);var f$esun = cbr801['uri'] = ep43fu[c_ra6k || ''];if (lxwo7q['startElement'](f$esun, oqw7lx, a8c, cbr801), !cbr801['closed']) return cbr801['currentNSMap'] = ep43fu, cbr801['localNSMap'] = z925dt, !0x0;if (lxwo7q['endElement'](f$esun, oqw7lx, a8c), z925dt) {
    for (c_ra6k in z925dt) lxwo7q['endPrefixMapping'](c_ra6k);
  }
}function uf4pu3e(wgxlq7, iqhlo, lhmio, ck06ar, usnef) {
  if (/^(?:script|textarea)$/i['test'](lhmio)) {
    var jf3h = wgxlq7['indexOf']('</' + lhmio + '>', iqhlo),
        xgw79z = wgxlq7['substring'](iqhlo + 0x1, jf3h);if (/[&<]/['test'](xgw79z)) return (/^script$/i['test'](lhmio) ? (usnef['characters'](xgw79z, 0x0, xgw79z['length']), jf3h) : (xgw79z = xgw79z['replace'](/&#?\w+;/g, ck06ar), usnef['characters'](xgw79z, 0x0, xgw79z['length']), jf3h)
    );
  }return iqhlo + 0x1;
}function ufh3j4p(peu43, lmoxi, pufe$4, w5dg9) {
  var fusp$ = w5dg9[pufe$4];return null == fusp$ && (fusp$ = peu43['lastIndexOf']('</' + pufe$4 + '>'), lmoxi > fusp$ && (fusp$ = peu43['lastIndexOf']('</' + pufe$4)), w5dg9[pufe$4] = fusp$), lmoxi > fusp$;
}function uoxmiql(vkc_6a, us$nfe) {
  for (var loq7x in vkc_6a) us$nfe[loq7x] = vkc_6a[loq7x];
}function uu$snef(acv_6k, dt, $uns, d9tg) {
  var w7gxl9 = acv_6k['charAt'](dt + 0x2);switch (w7gxl9) {case '-':
      if ('-' === acv_6k['charAt'](dt + 0x3)) {
        var lqxi = acv_6k['indexOf']('-->', dt + 0x4);return lqxi > dt ? ($uns['comment'](acv_6k, dt + 0x4, lqxi - dt - 0x4), lqxi + 0x3) : (d9tg['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == acv_6k['substr'](dt + 0x3, 0x6)) {
        var lqxi = acv_6k['indexOf'](']]>', dt + 0x9);return $uns['startCDATA'](), $uns['characters'](acv_6k, dt + 0x9, lqxi - dt - 0x9), $uns['endCDATA'](), lqxi + 0x3;
      }var _c6kav = uhji3m(acv_6k, dt),
          d5g9wz = _c6kav['length'];if (d5g9wz > 0x1 && /!doctype/i['test'](_c6kav[0x0][0x0])) {
        var im3h = _c6kav[0x1][0x0],
            jfp4 = d5g9wz > 0x3 && /^public$/i['test'](_c6kav[0x2][0x0]) && _c6kav[0x3][0x0],
            qolmh = d5g9wz > 0x4 && _c6kav[0x4][0x0],
            gtz9d5 = _c6kav[d5g9wz - 0x1];return $uns['startDTD'](im3h, jfp4 && jfp4['replace'](/^(['"])(.*?)\1$/, '$2'), qolmh && qolmh['replace'](/^(['"])(.*?)\1$/, '$2')), $uns['endDTD'](), gtz9d5['index'] + gtz9d5[0x0]['length'];
      }}return -0x1;
}function ua_vn(r6c0k, n_es$v, d59gwz) {
  var fuj43p = r6c0k['indexOf']('?>', n_es$v);if (fuj43p) {
    var jim34 = r6c0k['substring'](n_es$v, fuj43p)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (jim34) {
      {
        jim34[0x0]['length'];
      }return d59gwz['processingInstruction'](jim34[0x1], jim34[0x2]), fuj43p + 0x2;
    }return -0x1;
  }return -0x1;
}function uoixql() {}function uxio7lq(b0y81, sn_$) {
  return b0y81['__proto__'] = sn_$, b0y81;
}function uhji3m(i3ho, $4pe) {
  var qmiolh,
      vs_nk = [],
      jq = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (jq['lastIndex'] = $4pe, jq['exec'](i3ho); qmiolh = jq['exec'](i3ho);) if (vs_nk['push'](qmiolh), qmiolh[0x1]) return vs_nk;
}var ua6_cr = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    uijmhqo = new RegExp('[\\-\\.0-9' + ua6_cr['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    ugw97 = new RegExp('^' + ua6_cr['source'] + uijmhqo['source'] + '*(?::' + ua6_cr['source'] + uijmhqo['source'] + '*)?$'),
    unk_vs$ = 0x0,
    upsufe = 0x1,
    u$nk_vs = 0x2,
    uz2d9 = 0x3,
    uavc6_k = 0x4,
    uk6v_n = 0x5,
    u_a6rc = 0x6,
    ur18bc0 = 0x7;ua6_ckv['prototype'] = { 'parse': function (nakv_, ilx7o, kc60ra) {
    var nusf$ = this['domBuilder'];nusf$['startDocument'](), uoxmiql(ilx7o, ilx7o = {}), uu3pj(nakv_, ilx7o, kc60ra, nusf$, this['errorHandler']), nusf$['endDocument']();
  } }, uoixql['prototype'] = { 'setTagName': function (senv$) {
    if (!ugw97['test'](senv$)) throw new Error('invalid tagName:' + senv$);this['tagName'] = senv$;
  }, 'add': function (rac6_, ztdg5, d79gzw) {
    if (!ugw97['test'](rac6_)) throw new Error('invalid attribute:' + rac6_);this[this['length']++] = { 'qName': rac6_, 'value': ztdg5, 'offset': d79gzw };
  }, 'length': 0x0, 'getLocalName': function (c6_va) {
    return this[c6_va]['localName'];
  }, 'getLocator': function (pue43f) {
    return this[pue43f]['locator'];
  }, 'getQName': function (i3mh4j) {
    return this[i3mh4j]['qName'];
  }, 'getURI': function (mqih) {
    return this[mqih]['uri'];
  }, 'getValue': function (e4pfu) {
    return this[e4pfu]['value'];
  } }, uxio7lq({}, uxio7lq['prototype']) instanceof uxio7lq || (uxio7lq = function (r60kc, rcka) {
  function wz5() {}wz5['prototype'] = rcka, wz5 = new wz5();for (rcka in r60kc) wz5[rcka] = r60kc[rcka];return wz5;
}), exports['XMLReader'] = ua6_ckv;