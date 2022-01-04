var o = wx.$U;
function ukanv() {}function uhqmlio(c_ak6v, a_snv, z5wg9, vknas_, oiql) {
  function fspu$(sp$efu) {
    if (sp$efu > 0xffff) {
      sp$efu -= 0x10000;var hpf3j4 = 0xd800 + (sp$efu >> 0xa),
          m3ojh = 0xdc00 + (0x3ff & sp$efu);return String['fromCharCode'](hpf3j4, m3ojh);
    }return String['fromCharCode'](sp$efu);
  }function ca6r08(mloqh) {
    var hp4m3j = mloqh['slice'](0x1, -0x1);return hp4m3j in z5wg9 ? z5wg9[hp4m3j] : '#' === hp4m3j['charAt'](0x0) ? fspu$(parseInt(hp4m3j['substr'](0x1)['replace']('x', '0x'))) : (oiql['error']('entity not found:' + mloqh), mloqh);
  }function k6rac0(d9zw5g) {
    if (d9zw5g > ue$f4p) {
      var jm4i = c_ak6v['substring'](ue$f4p, d9zw5g)['replace'](/&#?\w+;/g, ca6r08);k0rc6a && m4ph3j(ue$f4p), vknas_['characters'](jm4i, 0x0, d9zw5g - ue$f4p), ue$f4p = d9zw5g;
    }
  }function m4ph3j(g9xl7, mxqil) {
    for (; g9xl7 >= w7xl9g && (mxqil = mp3h['exec'](c_ak6v));) _c6ra = mxqil['index'], w7xl9g = _c6ra + mxqil[0x0]['length'], k0rc6a['lineNumber']++;k0rc6a['columnNumber'] = g9xl7 - _c6ra + 0x1;
  }for (var _c6ra = 0x0, w7xl9g = 0x0, mp3h = /.*(?:\r\n?|\n)|.*$/g, k0rc6a = vknas_['locator'], dtz5g9 = [{ 'currentNSMap': a_snv }], eusv$n = {}, ue$f4p = 0x0;;) {
    try {
      var pe$f = c_ak6v['indexOf']('<', ue$f4p);if (0x0 > pe$f) {
        if (!c_ak6v['substr'](ue$f4p)['match'](/^\s*$/)) {
          var e$fu4p = vknas_['doc'],
              vuens = e$fu4p['createTextNode'](c_ak6v['substr'](ue$f4p));e$fu4p['appendChild'](vuens), vknas_['currentElement'] = vuens;
        }return;
      }switch (pe$f > ue$f4p && k6rac0(pe$f), c_ak6v['charAt'](pe$f + 0x1)) {case '/':
          var cka_v6 = c_ak6v['indexOf']('>', pe$f + 0x3),
              a6c_kv = c_ak6v['substring'](pe$f + 0x2, cka_v6),
              ho = dtz5g9['pop']();0x0 > cka_v6 ? (a6c_kv = c_ak6v['substring'](pe$f + 0x2)['replace'](/[\s<].*/, ''), oiql['error']('end tag name: ' + a6c_kv + ' is not complete:' + ho['tagName']), cka_v6 = pe$f + 0x1 + a6c_kv['length']) : a6c_kv['match'](/\s</) && (a6c_kv = a6c_kv['replace'](/[\s<].*/, ''), oiql['error']('end tag name: ' + a6c_kv + ' maybe not complete'), cka_v6 = pe$f + 0x1 + a6c_kv['length']);var wg7lxq = ho['localNSMap'],
              e$ufn = ho['tagName'] == a6c_kv,
              n_kv$ = e$ufn || ho['tagName'] && ho['tagName']['toLowerCase']() == a6c_kv['toLowerCase']();if (n_kv$) {
            if (vknas_['endElement'](ho['uri'], ho['localName'], a6c_kv), wg7lxq) {
              for (var wlgx9 in wg7lxq) vknas_['endPrefixMapping'](wlgx9);
            }e$ufn || oiql['fatalError']('end tag name: ' + a6c_kv + ' is not match the current start tagName:' + ho['tagName']);
          } else dtz5g9['push'](ho);cka_v6++;break;case '?':
          k0rc6a && m4ph3j(pe$f), cka_v6 = uv6c_k(c_ak6v, pe$f, vknas_);break;case '!':
          k0rc6a && m4ph3j(pe$f), cka_v6 = uv$s_(c_ak6v, pe$f, vknas_, oiql);break;default:
          k0rc6a && m4ph3j(pe$f);var q7lwg = new ump43jh(),
              uv$n = dtz5g9[dtz5g9['length'] - 0x1]['currentNSMap'],
              cka_v6 = uoimlx(c_ak6v, pe$f, q7lwg, uv$n, ca6r08, oiql),
              ohijq = q7lwg['length'];if (!q7lwg['closed'] && uvkc_a6(c_ak6v, cka_v6, q7lwg['tagName'], eusv$n) && (q7lwg['closed'] = !0x0, z5wg9['nbsp'] || oiql['warning']('unclosed xml attribute')), k0rc6a && ohijq) {
            for (var y8br0 = uphm4j(k0rc6a, {}), nvk = 0x0; ohijq > nvk; nvk++) {
              var r6kca_ = q7lwg[nvk];m4ph3j(r6kca_['offset']), r6kca_['locator'] = uphm4j(k0rc6a, {});
            }vknas_['locator'] = y8br0, ui43jmh(q7lwg, vknas_, uv$n) && dtz5g9['push'](q7lwg), vknas_['locator'] = k0rc6a;
          } else ui43jmh(q7lwg, vknas_, uv$n) && dtz5g9['push'](q7lwg);'http://www.w3.org/1999/xhtml' !== q7lwg['uri'] || q7lwg['closed'] ? cka_v6++ : cka_v6 = uka6_n(c_ak6v, cka_v6, q7lwg['tagName'], ca6r08, vknas_);}
    } catch (up4$f) {
      oiql['error']('element parse error: ' + up4$f), cka_v6 = -0x1;
    }cka_v6 > ue$f4p ? ue$f4p = cka_v6 : k6rac0(Math['max'](pe$f, ue$f4p) + 0x1);
  }
}function uphm4j(joihm, ksn$v) {
  return ksn$v['lineNumber'] = joihm['lineNumber'], ksn$v['columnNumber'] = joihm['columnNumber'], ksn$v;
}function uoimlx(z79g, na_ks, wolx7q, snve$_, k6car_, r8c6a0) {
  for (var zg9t5, ihqmj, tz5d9g = ++na_ks, $pf4 = uskv_$n;;) {
    var ximloq = z79g['charAt'](tz5d9g);switch (ximloq) {case '=':
        if ($pf4 === usnve$u) zg9t5 = z79g['slice'](na_ks, tz5d9g), $pf4 = unf$ues;else {
          if ($pf4 !== ufe$nus) throw new Error('attribute equal must after attrName');$pf4 = unf$ues;
        }break;case '\x27':case '\x22':
        if ($pf4 === unf$ues || $pf4 === usnve$u) {
          if ($pf4 === usnve$u && (r8c6a0['warning']('attribute value must after "="'), zg9t5 = z79g['slice'](na_ks, tz5d9g)), na_ks = tz5d9g + 0x1, tz5d9g = z79g['indexOf'](ximloq, na_ks), !(tz5d9g > 0x0)) throw new Error('attribute value no end \'' + ximloq + '\' match');ihqmj = z79g['slice'](na_ks, tz5d9g)['replace'](/&#?\w+;/g, k6car_), wolx7q['add'](zg9t5, ihqmj, na_ks - 0x1), $pf4 = uimqoxl;
        } else {
          if ($pf4 != uqw7lg) throw new Error('attribute value must after "="');ihqmj = z79g['slice'](na_ks, tz5d9g)['replace'](/&#?\w+;/g, k6car_), wolx7q['add'](zg9t5, ihqmj, na_ks), r8c6a0['warning']('attribute "' + zg9t5 + '" missed start quot(' + ximloq + ')!!'), na_ks = tz5d9g + 0x1, $pf4 = uimqoxl;
        }break;case '/':
        switch ($pf4) {case uskv_$n:
            wolx7q['setTagName'](z79g['slice'](na_ks, tz5d9g));case uimqoxl:case uiolxq7:case uy1b8r:
            $pf4 = uy1b8r, wolx7q['closed'] = !0x0;case uqw7lg:case usnve$u:case ufe$nus:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return r8c6a0['error']('unexpected end of input'), $pf4 == uskv_$n && wolx7q['setTagName'](z79g['slice'](na_ks, tz5d9g)), tz5d9g;case '>':
        switch ($pf4) {case uskv_$n:
            wolx7q['setTagName'](z79g['slice'](na_ks, tz5d9g));case uimqoxl:case uiolxq7:case uy1b8r:
            break;case uqw7lg:case usnve$u:
            ihqmj = z79g['slice'](na_ks, tz5d9g), '/' === ihqmj['slice'](-0x1) && (wolx7q['closed'] = !0x0, ihqmj = ihqmj['slice'](0x0, -0x1));case ufe$nus:
            $pf4 === ufe$nus && (ihqmj = zg9t5), $pf4 == uqw7lg ? (r8c6a0['warning']('attribute "' + ihqmj + '" missed quot(")!!'), wolx7q['add'](zg9t5, ihqmj['replace'](/&#?\w+;/g, k6car_), na_ks)) : ('http://www.w3.org/1999/xhtml' === snve$_[''] && ihqmj['match'](/^(?:disabled|checked|selected)$/i) || r8c6a0['warning']('attribute "' + ihqmj + '" missed value!! "' + ihqmj + '" instead!!'), wolx7q['add'](ihqmj, ihqmj, na_ks));break;case unf$ues:
            throw new Error('attribute value missed!!');}return tz5d9g;case '\u0080':
        ximloq = '\x20';default:
        if ('\x20' >= ximloq) switch ($pf4) {case uskv_$n:
            wolx7q['setTagName'](z79g['slice'](na_ks, tz5d9g)), $pf4 = uiolxq7;break;case usnve$u:
            zg9t5 = z79g['slice'](na_ks, tz5d9g), $pf4 = ufe$nus;break;case uqw7lg:
            var ihqmj = z79g['slice'](na_ks, tz5d9g)['replace'](/&#?\w+;/g, k6car_);r8c6a0['warning']('attribute "' + ihqmj + '" missed quot(")!!'), wolx7q['add'](zg9t5, ihqmj, na_ks);case uimqoxl:
            $pf4 = uiolxq7;} else switch ($pf4) {case ufe$nus:
            {
              wolx7q['tagName'];
            }'http://www.w3.org/1999/xhtml' === snve$_[''] && zg9t5['match'](/^(?:disabled|checked|selected)$/i) || r8c6a0['warning']('attribute "' + zg9t5 + '" missed value!! "' + zg9t5 + '" instead2!!'), wolx7q['add'](zg9t5, zg9t5, na_ks), na_ks = tz5d9g, $pf4 = usnve$u;break;case uimqoxl:
            r8c6a0['warning']('attribute space is required"' + zg9t5 + '\x22!!');case uiolxq7:
            $pf4 = usnve$u, na_ks = tz5d9g;break;case unf$ues:
            $pf4 = uqw7lg, na_ks = tz5d9g;break;case uy1b8r:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}tz5d9g++;
  }
}function ui43jmh(suvn$, j3f4, oqwlx7) {
  for (var xoqm = suvn$['tagName'], mp3jh = null, $fp4e = suvn$['length']; $fp4e--;) {
    var sp$uf = suvn$[$fp4e],
        br108y = sp$uf['qName'],
        miol = sp$uf['value'],
        e$_snv = br108y['indexOf'](':');if (e$_snv > 0x0) var hij3om = sp$uf['prefix'] = br108y['slice'](0x0, e$_snv),
        e4pf$u = br108y['slice'](e$_snv + 0x1),
        oijhm = 'xmlns' === hij3om && e4pf$u;else e4pf$u = br108y, hij3om = null, oijhm = 'xmlns' === br108y && '';sp$uf['localName'] = e4pf$u, oijhm !== !0x1 && (null == mp3jh && (mp3jh = {}, usv_(oqwlx7, oqwlx7 = {})), oqwlx7[oijhm] = mp3jh[oijhm] = miol, sp$uf['uri'] = 'http://www.w3.org/2000/xmlns/', j3f4['startPrefixMapping'](oijhm, miol));
  }for (var $fp4e = suvn$['length']; $fp4e--;) {
    sp$uf = suvn$[$fp4e];var hij3om = sp$uf['prefix'];hij3om && ('xml' === hij3om && (sp$uf['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== hij3om && (sp$uf['uri'] = oqwlx7[hij3om || '']));
  }var e$_snv = xoqm['indexOf'](':');e$_snv > 0x0 ? (hij3om = suvn$['prefix'] = xoqm['slice'](0x0, e$_snv), e4pf$u = suvn$['localName'] = xoqm['slice'](e$_snv + 0x1)) : (hij3om = null, e4pf$u = suvn$['localName'] = xoqm);var jp34 = suvn$['uri'] = oqwlx7[hij3om || ''];if (j3f4['startElement'](jp34, e4pf$u, xoqm, suvn$), !suvn$['closed']) return suvn$['currentNSMap'] = oqwlx7, suvn$['localNSMap'] = mp3jh, !0x0;if (j3f4['endElement'](jp34, e4pf$u, xoqm), mp3jh) {
    for (hij3om in mp3jh) j3f4['endPrefixMapping'](hij3om);
  }
}function uka6_n(wd9z7, iqlom, io7xql, x97gl, j4p3fh) {
  if (/^(?:script|textarea)$/i['test'](io7xql)) {
    var y081b = wd9z7['indexOf']('</' + io7xql + '>', iqlom),
        tzdg9 = wd9z7['substring'](iqlom + 0x1, y081b);if (/[&<]/['test'](tzdg9)) return (/^script$/i['test'](io7xql) ? (j4p3fh['characters'](tzdg9, 0x0, tzdg9['length']), y081b) : (tzdg9 = tzdg9['replace'](/&#?\w+;/g, x97gl), j4p3fh['characters'](tzdg9, 0x0, tzdg9['length']), y081b)
    );
  }return iqlom + 0x1;
}function uvkc_a6(_avns, evns$, $euvns, v_nk$s) {
  var z9g7 = v_nk$s[$euvns];return null == z9g7 && (z9g7 = _avns['lastIndexOf']('</' + $euvns + '>'), evns$ > z9g7 && (z9g7 = _avns['lastIndexOf']('</' + $euvns)), v_nk$s[$euvns] = z9g7), evns$ > z9g7;
}function usv_(p34jmh, vkas_) {
  for (var ef$p in p34jmh) vkas_[ef$p] = p34jmh[ef$p];
}function uv$s_(p4mh3j, t9z2d5, wlq7ox, lxqomi) {
  var uep3f = p4mh3j['charAt'](t9z2d5 + 0x2);switch (uep3f) {case '-':
      if ('-' === p4mh3j['charAt'](t9z2d5 + 0x3)) {
        var fj3up = p4mh3j['indexOf']('-->', t9z2d5 + 0x4);return fj3up > t9z2d5 ? (wlq7ox['comment'](p4mh3j, t9z2d5 + 0x4, fj3up - t9z2d5 - 0x4), fj3up + 0x3) : (lxqomi['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == p4mh3j['substr'](t9z2d5 + 0x3, 0x6)) {
        var fj3up = p4mh3j['indexOf'](']]>', t9z2d5 + 0x9);return wlq7ox['startCDATA'](), wlq7ox['characters'](p4mh3j, t9z2d5 + 0x9, fj3up - t9z2d5 - 0x9), wlq7ox['endCDATA'](), fj3up + 0x3;
      }var neuf = ufu34e(p4mh3j, t9z2d5),
          c610r8 = neuf['length'];if (c610r8 > 0x1 && /!doctype/i['test'](neuf[0x0][0x0])) {
        var jfp43u = neuf[0x1][0x0],
            n$eusv = c610r8 > 0x3 && /^public$/i['test'](neuf[0x2][0x0]) && neuf[0x3][0x0],
            k6c_ra = c610r8 > 0x4 && neuf[0x4][0x0],
            ijmhoq = neuf[c610r8 - 0x1];return wlq7ox['startDTD'](jfp43u, n$eusv && n$eusv['replace'](/^(['"])(.*?)\1$/, '$2'), k6c_ra && k6c_ra['replace'](/^(['"])(.*?)\1$/, '$2')), wlq7ox['endDTD'](), ijmhoq['index'] + ijmhoq[0x0]['length'];
      }}return -0x1;
}function uv6c_k(h4ijm, mqoij, vk_ns) {
  var gzdt9 = h4ijm['indexOf']('?>', mqoij);if (gzdt9) {
    var c0b81 = h4ijm['substring'](mqoij, gzdt9)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (c0b81) {
      {
        c0b81[0x0]['length'];
      }return vk_ns['processingInstruction'](c0b81[0x1], c0b81[0x2]), gzdt9 + 0x2;
    }return -0x1;
  }return -0x1;
}function ump43jh() {}function uimjh3(j34pm, f$4e) {
  return j34pm['__proto__'] = f$4e, j34pm;
}function ufu34e(epus, h4j3f) {
  var x7loi,
      qlomh = [],
      ra6c_ = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (ra6c_['lastIndex'] = h4j3f, ra6c_['exec'](epus); x7loi = ra6c_['exec'](epus);) if (qlomh['push'](x7loi), x7loi[0x1]) return qlomh;
}var uakv6_ = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    useup = new RegExp('[\\-\\.0-9' + uakv6_['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    usv$eun = new RegExp('^' + uakv6_['source'] + useup['source'] + '*(?::' + uakv6_['source'] + useup['source'] + '*)?$'),
    uskv_$n = 0x0,
    usnve$u = 0x1,
    ufe$nus = 0x2,
    unf$ues = 0x3,
    uqw7lg = 0x4,
    uimqoxl = 0x5,
    uiolxq7 = 0x6,
    uy1b8r = 0x7;ukanv['prototype'] = { 'parse': function (wglq7, z9d5g, nvk6a_) {
    var e43p = this['domBuilder'];e43p['startDocument'](), usv_(z9d5g, z9d5g = {}), uhqmlio(wglq7, z9d5g, nvk6a_, e43p, this['errorHandler']), e43p['endDocument']();
  } }, ump43jh['prototype'] = { 'setTagName': function (qx7olw) {
    if (!usv$eun['test'](qx7olw)) throw new Error('invalid tagName:' + qx7olw);this['tagName'] = qx7olw;
  }, 'add': function (gq7l, b1rc80, h4jm3) {
    if (!usv$eun['test'](gq7l)) throw new Error('invalid attribute:' + gq7l);this[this['length']++] = { 'qName': gq7l, 'value': b1rc80, 'offset': h4jm3 };
  }, 'length': 0x0, 'getLocalName': function (akr0) {
    return this[akr0]['localName'];
  }, 'getLocator': function (c81r60) {
    return this[c81r60]['locator'];
  }, 'getQName': function (m4j3p) {
    return this[m4j3p]['qName'];
  }, 'getURI': function (c8b0r1) {
    return this[c8b0r1]['uri'];
  }, 'getValue': function (b18ry0) {
    return this[b18ry0]['value'];
  } }, uimjh3({}, uimjh3['prototype']) instanceof uimjh3 || (uimjh3 = function (sun$ev, jphm) {
  function _6nkva() {}_6nkva['prototype'] = jphm, _6nkva = new _6nkva();for (jphm in sun$ev) _6nkva[jphm] = sun$ev[jphm];return _6nkva;
}), exports['XMLReader'] = ukanv;