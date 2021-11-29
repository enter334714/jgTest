var o = wx.$U;
function ud59tz2() {}function uxwqol7(qxlmo, vka_c, mj3hp, a_nk, k_6vca) {
  function ohim3j(upj3f) {
    if (upj3f > 0xffff) {
      upj3f -= 0x10000;var p$f4ue = 0xd800 + (upj3f >> 0xa),
          g7dw = 0xdc00 + (0x3ff & upj3f);return String['fromCharCode'](p$f4ue, g7dw);
    }return String['fromCharCode'](upj3f);
  }function nv6ka(qhmjio) {
    var l97g = qhmjio['slice'](0x1, -0x1);return l97g in mj3hp ? mj3hp[l97g] : '#' === l97g['charAt'](0x0) ? ohim3j(parseInt(l97g['substr'](0x1)['replace']('x', '0x'))) : (k_6vca['error']('entity not found:' + qhmjio), qhmjio);
  }function ox7li(rkc_a6) {
    if (rkc_a6 > g9dz5) {
      var olxmi = qxlmo['substring'](g9dz5, rkc_a6)['replace'](/&#?\w+;/g, nv6ka);kv$s_ && w7qolx(g9dz5), a_nk['characters'](olxmi, 0x0, rkc_a6 - g9dz5), g9dz5 = rkc_a6;
    }
  }function w7qolx(r_ack, karc) {
    for (; r_ack >= xq7wlg && (karc = f$esn['exec'](qxlmo));) wz97gx = karc['index'], xq7wlg = wz97gx + karc[0x0]['length'], kv$s_['lineNumber']++;kv$s_['columnNumber'] = r_ack - wz97gx + 0x1;
  }for (var wz97gx = 0x0, xq7wlg = 0x0, f$esn = /.*(?:\r\n?|\n)|.*$/g, kv$s_ = a_nk['locator'], omji3h = [{ 'currentNSMap': vka_c }], mioqh = {}, g9dz5 = 0x0;;) {
    try {
      var n_ska = qxlmo['indexOf']('<', g9dz5);if (0x0 > n_ska) {
        if (!qxlmo['substr'](g9dz5)['match'](/^\s*$/)) {
          var b8y10r = a_nk['doc'],
              ju4p = b8y10r['createTextNode'](qxlmo['substr'](g9dz5));b8y10r['appendChild'](ju4p), a_nk['currentElement'] = ju4p;
        }return;
      }switch (n_ska > g9dz5 && ox7li(n_ska), qxlmo['charAt'](n_ska + 0x1)) {case '/':
          var i4h = qxlmo['indexOf']('>', n_ska + 0x3),
              vn_e = qxlmo['substring'](n_ska + 0x2, i4h),
              hiqmol = omji3h['pop']();0x0 > i4h ? (vn_e = qxlmo['substring'](n_ska + 0x2)['replace'](/[\s<].*/, ''), k_6vca['error']('end tag name: ' + vn_e + ' is not complete:' + hiqmol['tagName']), i4h = n_ska + 0x1 + vn_e['length']) : vn_e['match'](/\s</) && (vn_e = vn_e['replace'](/[\s<].*/, ''), k_6vca['error']('end tag name: ' + vn_e + ' maybe not complete'), i4h = n_ska + 0x1 + vn_e['length']);var xqloi = hiqmol['localNSMap'],
              mlqoih = hiqmol['tagName'] == vn_e,
              wlgx97 = mlqoih || hiqmol['tagName'] && hiqmol['tagName']['toLowerCase']() == vn_e['toLowerCase']();if (wlgx97) {
            if (a_nk['endElement'](hiqmol['uri'], hiqmol['localName'], vn_e), xqloi) {
              for (var f3jp4 in xqloi) a_nk['endPrefixMapping'](f3jp4);
            }mlqoih || k_6vca['fatalError']('end tag name: ' + vn_e + ' is not match the current start tagName:' + hiqmol['tagName']);
          } else omji3h['push'](hiqmol);i4h++;break;case '?':
          kv$s_ && w7qolx(n_ska), i4h = uvk_6an(qxlmo, n_ska, a_nk);break;case '!':
          kv$s_ && w7qolx(n_ska), i4h = ui7qx(qxlmo, n_ska, a_nk, k_6vca);break;default:
          kv$s_ && w7qolx(n_ska);var jf3u4 = new ue4$puf(),
              ev_$sn = omji3h[omji3h['length'] - 0x1]['currentNSMap'],
              i4h = uacr06(qxlmo, n_ska, jf3u4, ev_$sn, nv6ka, k_6vca),
              fjpu34 = jf3u4['length'];if (!jf3u4['closed'] && ukrac_6(qxlmo, i4h, jf3u4['tagName'], mioqh) && (jf3u4['closed'] = !0x0, mj3hp['nbsp'] || k_6vca['warning']('unclosed xml attribute')), kv$s_ && fjpu34) {
            for (var hoqm = uac6r(kv$s_, {}), kc_v6a = 0x0; fjpu34 > kc_v6a; kc_v6a++) {
              var nsk$ = jf3u4[kc_v6a];w7qolx(nsk$['offset']), nsk$['locator'] = uac6r(kv$s_, {});
            }a_nk['locator'] = hoqm, uwgxz(jf3u4, a_nk, ev_$sn) && omji3h['push'](jf3u4), a_nk['locator'] = kv$s_;
          } else uwgxz(jf3u4, a_nk, ev_$sn) && omji3h['push'](jf3u4);'http://www.w3.org/1999/xhtml' !== jf3u4['uri'] || jf3u4['closed'] ? i4h++ : i4h = uw7d9gz(qxlmo, i4h, jf3u4['tagName'], nv6ka, a_nk);}
    } catch (d9gz5) {
      k_6vca['error']('element parse error: ' + d9gz5), i4h = -0x1;
    }i4h > g9dz5 ? g9dz5 = i4h : ox7li(Math['max'](n_ska, g9dz5) + 0x1);
  }
}function uac6r(c0rb18, eufns) {
  return eufns['lineNumber'] = c0rb18['lineNumber'], eufns['columnNumber'] = c0rb18['columnNumber'], eufns;
}function uacr06(ef34, xi7q, p$efs, xliqm, y08br1, xo7qwl) {
  for (var mihqj, xlgq, c18 = ++xi7q, h4imj3 = ujomh3;;) {
    var _se$n = ef34['charAt'](c18);switch (_se$n) {case '=':
        if (h4imj3 === uh4fpj3) mihqj = ef34['slice'](xi7q, c18), h4imj3 = uyr0b18;else {
          if (h4imj3 !== ut9dg5z) throw new Error('attribute equal must after attrName');h4imj3 = uyr0b18;
        }break;case '\x27':case '\x22':
        if (h4imj3 === uyr0b18 || h4imj3 === uh4fpj3) {
          if (h4imj3 === uh4fpj3 && (xo7qwl['warning']('attribute value must after "="'), mihqj = ef34['slice'](xi7q, c18)), xi7q = c18 + 0x1, c18 = ef34['indexOf'](_se$n, xi7q), !(c18 > 0x0)) throw new Error('attribute value no end \'' + _se$n + '\' match');xlgq = ef34['slice'](xi7q, c18)['replace'](/&#?\w+;/g, y08br1), p$efs['add'](mihqj, xlgq, xi7q - 0x1), h4imj3 = uq7gw;
        } else {
          if (h4imj3 != uusnve$) throw new Error('attribute value must after "="');xlgq = ef34['slice'](xi7q, c18)['replace'](/&#?\w+;/g, y08br1), p$efs['add'](mihqj, xlgq, xi7q), xo7qwl['warning']('attribute "' + mihqj + '" missed start quot(' + _se$n + ')!!'), xi7q = c18 + 0x1, h4imj3 = uq7gw;
        }break;case '/':
        switch (h4imj3) {case ujomh3:
            p$efs['setTagName'](ef34['slice'](xi7q, c18));case uq7gw:case ulmiqoh:case uv6kn_a:
            h4imj3 = uv6kn_a, p$efs['closed'] = !0x0;case uusnve$:case uh4fpj3:case ut9dg5z:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return xo7qwl['error']('unexpected end of input'), h4imj3 == ujomh3 && p$efs['setTagName'](ef34['slice'](xi7q, c18)), c18;case '>':
        switch (h4imj3) {case ujomh3:
            p$efs['setTagName'](ef34['slice'](xi7q, c18));case uq7gw:case ulmiqoh:case uv6kn_a:
            break;case uusnve$:case uh4fpj3:
            xlgq = ef34['slice'](xi7q, c18), '/' === xlgq['slice'](-0x1) && (p$efs['closed'] = !0x0, xlgq = xlgq['slice'](0x0, -0x1));case ut9dg5z:
            h4imj3 === ut9dg5z && (xlgq = mihqj), h4imj3 == uusnve$ ? (xo7qwl['warning']('attribute "' + xlgq + '" missed quot(")!!'), p$efs['add'](mihqj, xlgq['replace'](/&#?\w+;/g, y08br1), xi7q)) : ('http://www.w3.org/1999/xhtml' === xliqm[''] && xlgq['match'](/^(?:disabled|checked|selected)$/i) || xo7qwl['warning']('attribute "' + xlgq + '" missed value!! "' + xlgq + '" instead!!'), p$efs['add'](xlgq, xlgq, xi7q));break;case uyr0b18:
            throw new Error('attribute value missed!!');}return c18;case '\u0080':
        _se$n = '\x20';default:
        if ('\x20' >= _se$n) switch (h4imj3) {case ujomh3:
            p$efs['setTagName'](ef34['slice'](xi7q, c18)), h4imj3 = ulmiqoh;break;case uh4fpj3:
            mihqj = ef34['slice'](xi7q, c18), h4imj3 = ut9dg5z;break;case uusnve$:
            var xlgq = ef34['slice'](xi7q, c18)['replace'](/&#?\w+;/g, y08br1);xo7qwl['warning']('attribute "' + xlgq + '" missed quot(")!!'), p$efs['add'](mihqj, xlgq, xi7q);case uq7gw:
            h4imj3 = ulmiqoh;} else switch (h4imj3) {case ut9dg5z:
            {
              p$efs['tagName'];
            }'http://www.w3.org/1999/xhtml' === xliqm[''] && mihqj['match'](/^(?:disabled|checked|selected)$/i) || xo7qwl['warning']('attribute "' + mihqj + '" missed value!! "' + mihqj + '" instead2!!'), p$efs['add'](mihqj, mihqj, xi7q), xi7q = c18, h4imj3 = uh4fpj3;break;case uq7gw:
            xo7qwl['warning']('attribute space is required"' + mihqj + '\x22!!');case ulmiqoh:
            h4imj3 = uh4fpj3, xi7q = c18;break;case uyr0b18:
            h4imj3 = uusnve$, xi7q = c18;break;case uv6kn_a:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}c18++;
  }
}function uwgxz(g7wz, peu$fs, l7w9x) {
  for (var mhjioq = g7wz['tagName'], $pfeu = null, evsu$n = g7wz['length']; evsu$n--;) {
    var $pf4u = g7wz[evsu$n],
        a0c68 = $pf4u['qName'],
        jmh34i = $pf4u['value'],
        up43 = a0c68['indexOf'](':');if (up43 > 0x0) var acr0 = $pf4u['prefix'] = a0c68['slice'](0x0, up43),
        nv_k$ = a0c68['slice'](up43 + 0x1),
        g7lxw9 = 'xmlns' === acr0 && nv_k$;else nv_k$ = a0c68, acr0 = null, g7lxw9 = 'xmlns' === a0c68 && '';$pf4u['localName'] = nv_k$, g7lxw9 !== !0x1 && (null == $pfeu && ($pfeu = {}, uhpj4f(l7w9x, l7w9x = {})), l7w9x[g7lxw9] = $pfeu[g7lxw9] = jmh34i, $pf4u['uri'] = 'http://www.w3.org/2000/xmlns/', peu$fs['startPrefixMapping'](g7lxw9, jmh34i));
  }for (var evsu$n = g7wz['length']; evsu$n--;) {
    $pf4u = g7wz[evsu$n];var acr0 = $pf4u['prefix'];acr0 && ('xml' === acr0 && ($pf4u['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== acr0 && ($pf4u['uri'] = l7w9x[acr0 || '']));
  }var up43 = mhjioq['indexOf'](':');up43 > 0x0 ? (acr0 = g7wz['prefix'] = mhjioq['slice'](0x0, up43), nv_k$ = g7wz['localName'] = mhjioq['slice'](up43 + 0x1)) : (acr0 = null, nv_k$ = g7wz['localName'] = mhjioq);var nuse$ = g7wz['uri'] = l7w9x[acr0 || ''];if (peu$fs['startElement'](nuse$, nv_k$, mhjioq, g7wz), !g7wz['closed']) return g7wz['currentNSMap'] = l7w9x, g7wz['localNSMap'] = $pfeu, !0x0;if (peu$fs['endElement'](nuse$, nv_k$, mhjioq), $pfeu) {
    for (acr0 in $pfeu) peu$fs['endPrefixMapping'](acr0);
  }
}function uw7d9gz(a6cvk_, lxiq, wg97x, oxq7i, _n$se) {
  if (/^(?:script|textarea)$/i['test'](wg97x)) {
    var c610r8 = a6cvk_['indexOf']('</' + wg97x + '>', lxiq),
        gx79z = a6cvk_['substring'](lxiq + 0x1, c610r8);if (/[&<]/['test'](gx79z)) return (/^script$/i['test'](wg97x) ? (_n$se['characters'](gx79z, 0x0, gx79z['length']), c610r8) : (gx79z = gx79z['replace'](/&#?\w+;/g, oxq7i), _n$se['characters'](gx79z, 0x0, gx79z['length']), c610r8)
    );
  }return lxiq + 0x1;
}function ukrac_6(wgq7l, pe$suf, jf3u, jmqoih) {
  var feu$sp = jmqoih[jf3u];return null == feu$sp && (feu$sp = wgq7l['lastIndexOf']('</' + jf3u + '>'), pe$suf > feu$sp && (feu$sp = wgq7l['lastIndexOf']('</' + jf3u)), jmqoih[jf3u] = feu$sp), pe$suf > feu$sp;
}function uhpj4f(loix7, y810) {
  for (var acrk06 in loix7) y810[acrk06] = loix7[acrk06];
}function ui7qx(sv$_k, akv_ns, _nksv$, hfp4j3) {
  var loixq = sv$_k['charAt'](akv_ns + 0x2);switch (loixq) {case '-':
      if ('-' === sv$_k['charAt'](akv_ns + 0x3)) {
        var _6nkav = sv$_k['indexOf']('-->', akv_ns + 0x4);return _6nkav > akv_ns ? (_nksv$['comment'](sv$_k, akv_ns + 0x4, _6nkav - akv_ns - 0x4), _6nkav + 0x3) : (hfp4j3['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == sv$_k['substr'](akv_ns + 0x3, 0x6)) {
        var _6nkav = sv$_k['indexOf'](']]>', akv_ns + 0x9);return _nksv$['startCDATA'](), _nksv$['characters'](sv$_k, akv_ns + 0x9, _6nkav - akv_ns - 0x9), _nksv$['endCDATA'](), _6nkav + 0x3;
      }var fjpu43 = ul7xioq(sv$_k, akv_ns),
          v6ank = fjpu43['length'];if (v6ank > 0x1 && /!doctype/i['test'](fjpu43[0x0][0x0])) {
        var fsn$u = fjpu43[0x1][0x0],
            l7oxq = v6ank > 0x3 && /^public$/i['test'](fjpu43[0x2][0x0]) && fjpu43[0x3][0x0],
            f$eup = v6ank > 0x4 && fjpu43[0x4][0x0],
            c0r816 = fjpu43[v6ank - 0x1];return _nksv$['startDTD'](fsn$u, l7oxq && l7oxq['replace'](/^(['"])(.*?)\1$/, '$2'), f$eup && f$eup['replace'](/^(['"])(.*?)\1$/, '$2')), _nksv$['endDTD'](), c0r816['index'] + c0r816[0x0]['length'];
      }}return -0x1;
}function uvk_6an(jiqhmo, jm3ph4, c1b8r0) {
  var hqomij = jiqhmo['indexOf']('?>', jm3ph4);if (hqomij) {
    var qlw7g = jiqhmo['substring'](jm3ph4, hqomij)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (qlw7g) {
      {
        qlw7g[0x0]['length'];
      }return c1b8r0['processingInstruction'](qlw7g[0x1], qlw7g[0x2]), hqomij + 0x2;
    }return -0x1;
  }return -0x1;
}function ue4$puf() {}function ud952z(tz592, xwl7q) {
  return tz592['__proto__'] = xwl7q, tz592;
}function ul7xioq(_snvk$, hjo3m) {
  var omjh,
      $_sve = [],
      dzw95 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (dzw95['lastIndex'] = hjo3m, dzw95['exec'](_snvk$); omjh = dzw95['exec'](_snvk$);) if ($_sve['push'](omjh), omjh[0x1]) return $_sve;
}var ur1by0 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    upesfu$ = new RegExp('[\\-\\.0-9' + ur1by0['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    uz7dg9 = new RegExp('^' + ur1by0['source'] + upesfu$['source'] + '*(?::' + ur1by0['source'] + upesfu$['source'] + '*)?$'),
    ujomh3 = 0x0,
    uh4fpj3 = 0x1,
    ut9dg5z = 0x2,
    uyr0b18 = 0x3,
    uusnve$ = 0x4,
    uq7gw = 0x5,
    ulmiqoh = 0x6,
    uv6kn_a = 0x7;ud59tz2['prototype'] = { 'parse': function (enfus, sunv$, iqx7ol) {
    var vsna_k = this['domBuilder'];vsna_k['startDocument'](), uhpj4f(sunv$, sunv$ = {}), uxwqol7(enfus, sunv$, iqx7ol, vsna_k, this['errorHandler']), vsna_k['endDocument']();
  } }, ue4$puf['prototype'] = { 'setTagName': function (ca6k_v) {
    if (!uz7dg9['test'](ca6k_v)) throw new Error('invalid tagName:' + ca6k_v);this['tagName'] = ca6k_v;
  }, 'add': function (cak_6, v_$nsk, kv_n) {
    if (!uz7dg9['test'](cak_6)) throw new Error('invalid attribute:' + cak_6);this[this['length']++] = { 'qName': cak_6, 'value': v_$nsk, 'offset': kv_n };
  }, 'length': 0x0, 'getLocalName': function (_$env) {
    return this[_$env]['localName'];
  }, 'getLocator': function (esu) {
    return this[esu]['locator'];
  }, 'getQName': function (nk6_av) {
    return this[nk6_av]['qName'];
  }, 'getURI': function (qmioh) {
    return this[qmioh]['uri'];
  }, 'getValue': function ($sunfe) {
    return this[$sunfe]['value'];
  } }, ud952z({}, ud952z['prototype']) instanceof ud952z || (ud952z = function (m4pjh3, eu4f$p) {
  function ev_ns() {}ev_ns['prototype'] = eu4f$p, ev_ns = new ev_ns();for (eu4f$p in m4pjh3) ev_ns[eu4f$p] = m4pjh3[eu4f$p];return ev_ns;
}), exports['XMLReader'] = ud59tz2;