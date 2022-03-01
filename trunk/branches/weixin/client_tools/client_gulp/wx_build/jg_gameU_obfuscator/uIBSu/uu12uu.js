var o = wx.$U;
function urc81b0() {}function uv_nksa(hij3, w7g9xz, wqo, skavn_, iqmohj) {
  function pfuse$(hlqmoi) {
    if (hlqmoi > 0xffff) {
      hlqmoi -= 0x10000;var g9d = 0xd800 + (hlqmoi >> 0xa),
          s$_v = 0xdc00 + (0x3ff & hlqmoi);return String['fromCharCode'](g9d, s$_v);
    }return String['fromCharCode'](hlqmoi);
  }function fupe4$(ilhom) {
    var zgdw9 = ilhom['slice'](0x1, -0x1);return zgdw9 in wqo ? wqo[zgdw9] : '#' === zgdw9['charAt'](0x0) ? pfuse$(parseInt(zgdw9['substr'](0x1)['replace']('x', '0x'))) : (iqmohj['error']('entity not found:' + ilhom), ilhom);
  }function n6vka_(fsue$p) {
    if (fsue$p > an_vs) {
      var crk_6 = hij3['substring'](an_vs, fsue$p)['replace'](/&#?\w+;/g, fupe4$);oxlq7 && e3puf4(an_vs), skavn_['characters'](crk_6, 0x0, fsue$p - an_vs), an_vs = fsue$p;
    }
  }function e3puf4(ck06, pmj3h4) {
    for (; ck06 >= neu$sf && (pmj3h4 = yr18['exec'](hij3));) fnse$u = pmj3h4['index'], neu$sf = fnse$u + pmj3h4[0x0]['length'], oxlq7['lineNumber']++;oxlq7['columnNumber'] = ck06 - fnse$u + 0x1;
  }for (var fnse$u = 0x0, neu$sf = 0x0, yr18 = /.*(?:\r\n?|\n)|.*$/g, oxlq7 = skavn_['locator'], _krca6 = [{ 'currentNSMap': w7g9xz }], gxq7wl = {}, an_vs = 0x0;;) {
    try {
      var vn6ka = hij3['indexOf']('<', an_vs);if (0x0 > vn6ka) {
        if (!hij3['substr'](an_vs)['match'](/^\s*$/)) {
          var uf4pe$ = skavn_['doc'],
              mhoi3j = uf4pe$['createTextNode'](hij3['substr'](an_vs));uf4pe$['appendChild'](mhoi3j), skavn_['currentElement'] = mhoi3j;
        }return;
      }switch (vn6ka > an_vs && n6vka_(vn6ka), hij3['charAt'](vn6ka + 0x1)) {case '/':
          var rc08a = hij3['indexOf']('>', vn6ka + 0x3),
              p4j3uf = hij3['substring'](vn6ka + 0x2, rc08a),
              w7xoq = _krca6['pop']();0x0 > rc08a ? (p4j3uf = hij3['substring'](vn6ka + 0x2)['replace'](/[\s<].*/, ''), iqmohj['error']('end tag name: ' + p4j3uf + ' is not complete:' + w7xoq['tagName']), rc08a = vn6ka + 0x1 + p4j3uf['length']) : p4j3uf['match'](/\s</) && (p4j3uf = p4j3uf['replace'](/[\s<].*/, ''), iqmohj['error']('end tag name: ' + p4j3uf + ' maybe not complete'), rc08a = vn6ka + 0x1 + p4j3uf['length']);var uj3 = w7xoq['localNSMap'],
              x7qlio = w7xoq['tagName'] == p4j3uf,
              hj3p4f = x7qlio || w7xoq['tagName'] && w7xoq['tagName']['toLowerCase']() == p4j3uf['toLowerCase']();if (hj3p4f) {
            if (skavn_['endElement'](w7xoq['uri'], w7xoq['localName'], p4j3uf), uj3) {
              for (var d95wz in uj3) skavn_['endPrefixMapping'](d95wz);
            }x7qlio || iqmohj['fatalError']('end tag name: ' + p4j3uf + ' is not match the current start tagName:' + w7xoq['tagName']);
          } else _krca6['push'](w7xoq);rc08a++;break;case '?':
          oxlq7 && e3puf4(vn6ka), rc08a = u$sk_v(hij3, vn6ka, skavn_);break;case '!':
          oxlq7 && e3puf4(vn6ka), rc08a = uefus(hij3, vn6ka, skavn_, iqmohj);break;default:
          oxlq7 && e3puf4(vn6ka);var iloqh = new us$nuv(),
              gd79 = _krca6[_krca6['length'] - 0x1]['currentNSMap'],
              rc08a = uh4m(hij3, vn6ka, iloqh, gd79, fupe4$, iqmohj),
              g7zwd9 = iloqh['length'];if (!iloqh['closed'] && uihoqjm(hij3, rc08a, iloqh['tagName'], gxq7wl) && (iloqh['closed'] = !0x0, wqo['nbsp'] || iqmohj['warning']('unclosed xml attribute')), oxlq7 && g7zwd9) {
            for (var cvk_ = ues$ufn(oxlq7, {}), l7xiq = 0x0; g7zwd9 > l7xiq; l7xiq++) {
              var ijhm3 = iloqh[l7xiq];e3puf4(ijhm3['offset']), ijhm3['locator'] = ues$ufn(oxlq7, {});
            }skavn_['locator'] = cvk_, utzd9(iloqh, skavn_, gd79) && _krca6['push'](iloqh), skavn_['locator'] = oxlq7;
          } else utzd9(iloqh, skavn_, gd79) && _krca6['push'](iloqh);'http://www.w3.org/1999/xhtml' !== iloqh['uri'] || iloqh['closed'] ? rc08a++ : rc08a = usvka_(hij3, rc08a, iloqh['tagName'], fupe4$, skavn_);}
    } catch (wgqxl) {
      iqmohj['error']('element parse error: ' + wgqxl), rc08a = -0x1;
    }rc08a > an_vs ? an_vs = rc08a : n6vka_(Math['max'](vn6ka, an_vs) + 0x1);
  }
}function ues$ufn(yb18r, c6a08r) {
  return c6a08r['lineNumber'] = yb18r['lineNumber'], c6a08r['columnNumber'] = yb18r['columnNumber'], c6a08r;
}function uh4m(x7oqlw, sfup$, qwoxl, $ksvn, f4upj3, evs_$n) {
  for (var ijmo3h, ohmiqj, c6v_ka = ++sfup$, $nkv_s = uqlx;;) {
    var k_6vca = x7oqlw['charAt'](c6v_ka);switch (k_6vca) {case '=':
        if ($nkv_s === u$vusen) ijmo3h = x7oqlw['slice'](sfup$, c6v_ka), $nkv_s = up3jh4m;else {
          if ($nkv_s !== umjioh3) throw new Error('attribute equal must after attrName');$nkv_s = up3jh4m;
        }break;case '\x27':case '\x22':
        if ($nkv_s === up3jh4m || $nkv_s === u$vusen) {
          if ($nkv_s === u$vusen && (evs_$n['warning']('attribute value must after "="'), ijmo3h = x7oqlw['slice'](sfup$, c6v_ka)), sfup$ = c6v_ka + 0x1, c6v_ka = x7oqlw['indexOf'](k_6vca, sfup$), !(c6v_ka > 0x0)) throw new Error('attribute value no end \'' + k_6vca + '\' match');ohmiqj = x7oqlw['slice'](sfup$, c6v_ka)['replace'](/&#?\w+;/g, f4upj3), qwoxl['add'](ijmo3h, ohmiqj, sfup$ - 0x1), $nkv_s = uc6ra80;
        } else {
          if ($nkv_s != u$psue) throw new Error('attribute value must after "="');ohmiqj = x7oqlw['slice'](sfup$, c6v_ka)['replace'](/&#?\w+;/g, f4upj3), qwoxl['add'](ijmo3h, ohmiqj, sfup$), evs_$n['warning']('attribute "' + ijmo3h + '" missed start quot(' + k_6vca + ')!!'), sfup$ = c6v_ka + 0x1, $nkv_s = uc6ra80;
        }break;case '/':
        switch ($nkv_s) {case uqlx:
            qwoxl['setTagName'](x7oqlw['slice'](sfup$, c6v_ka));case uc6ra80:case ucr0ak6:case ufu4e$:
            $nkv_s = ufu4e$, qwoxl['closed'] = !0x0;case u$psue:case u$vusen:case umjioh3:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return evs_$n['error']('unexpected end of input'), $nkv_s == uqlx && qwoxl['setTagName'](x7oqlw['slice'](sfup$, c6v_ka)), c6v_ka;case '>':
        switch ($nkv_s) {case uqlx:
            qwoxl['setTagName'](x7oqlw['slice'](sfup$, c6v_ka));case uc6ra80:case ucr0ak6:case ufu4e$:
            break;case u$psue:case u$vusen:
            ohmiqj = x7oqlw['slice'](sfup$, c6v_ka), '/' === ohmiqj['slice'](-0x1) && (qwoxl['closed'] = !0x0, ohmiqj = ohmiqj['slice'](0x0, -0x1));case umjioh3:
            $nkv_s === umjioh3 && (ohmiqj = ijmo3h), $nkv_s == u$psue ? (evs_$n['warning']('attribute "' + ohmiqj + '" missed quot(")!!'), qwoxl['add'](ijmo3h, ohmiqj['replace'](/&#?\w+;/g, f4upj3), sfup$)) : ('http://www.w3.org/1999/xhtml' === $ksvn[''] && ohmiqj['match'](/^(?:disabled|checked|selected)$/i) || evs_$n['warning']('attribute "' + ohmiqj + '" missed value!! "' + ohmiqj + '" instead!!'), qwoxl['add'](ohmiqj, ohmiqj, sfup$));break;case up3jh4m:
            throw new Error('attribute value missed!!');}return c6v_ka;case '\u0080':
        k_6vca = '\x20';default:
        if ('\x20' >= k_6vca) switch ($nkv_s) {case uqlx:
            qwoxl['setTagName'](x7oqlw['slice'](sfup$, c6v_ka)), $nkv_s = ucr0ak6;break;case u$vusen:
            ijmo3h = x7oqlw['slice'](sfup$, c6v_ka), $nkv_s = umjioh3;break;case u$psue:
            var ohmiqj = x7oqlw['slice'](sfup$, c6v_ka)['replace'](/&#?\w+;/g, f4upj3);evs_$n['warning']('attribute "' + ohmiqj + '" missed quot(")!!'), qwoxl['add'](ijmo3h, ohmiqj, sfup$);case uc6ra80:
            $nkv_s = ucr0ak6;} else switch ($nkv_s) {case umjioh3:
            {
              qwoxl['tagName'];
            }'http://www.w3.org/1999/xhtml' === $ksvn[''] && ijmo3h['match'](/^(?:disabled|checked|selected)$/i) || evs_$n['warning']('attribute "' + ijmo3h + '" missed value!! "' + ijmo3h + '" instead2!!'), qwoxl['add'](ijmo3h, ijmo3h, sfup$), sfup$ = c6v_ka, $nkv_s = u$vusen;break;case uc6ra80:
            evs_$n['warning']('attribute space is required"' + ijmo3h + '\x22!!');case ucr0ak6:
            $nkv_s = u$vusen, sfup$ = c6v_ka;break;case up3jh4m:
            $nkv_s = u$psue, sfup$ = c6v_ka;break;case ufu4e$:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}c6v_ka++;
  }
}function utzd9(dw5zg, $sufep, puj34f) {
  for (var j3hmio = dw5zg['tagName'], qiojmh = null, vak_c6 = dw5zg['length']; vak_c6--;) {
    var ohlmi = dw5zg[vak_c6],
        tz59g = ohlmi['qName'],
        g9xw7z = ohlmi['value'],
        xqi7l = tz59g['indexOf'](':');if (xqi7l > 0x0) var $_ksnv = ohlmi['prefix'] = tz59g['slice'](0x0, xqi7l),
        g9zw5 = tz59g['slice'](xqi7l + 0x1),
        m3ji4h = 'xmlns' === $_ksnv && g9zw5;else g9zw5 = tz59g, $_ksnv = null, m3ji4h = 'xmlns' === tz59g && '';ohlmi['localName'] = g9zw5, m3ji4h !== !0x1 && (null == qiojmh && (qiojmh = {}, uzgw7x9(puj34f, puj34f = {})), puj34f[m3ji4h] = qiojmh[m3ji4h] = g9xw7z, ohlmi['uri'] = 'http://www.w3.org/2000/xmlns/', $sufep['startPrefixMapping'](m3ji4h, g9xw7z));
  }for (var vak_c6 = dw5zg['length']; vak_c6--;) {
    ohlmi = dw5zg[vak_c6];var $_ksnv = ohlmi['prefix'];$_ksnv && ('xml' === $_ksnv && (ohlmi['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== $_ksnv && (ohlmi['uri'] = puj34f[$_ksnv || '']));
  }var xqi7l = j3hmio['indexOf'](':');xqi7l > 0x0 ? ($_ksnv = dw5zg['prefix'] = j3hmio['slice'](0x0, xqi7l), g9zw5 = dw5zg['localName'] = j3hmio['slice'](xqi7l + 0x1)) : ($_ksnv = null, g9zw5 = dw5zg['localName'] = j3hmio);var f43ep = dw5zg['uri'] = puj34f[$_ksnv || ''];if ($sufep['startElement'](f43ep, g9zw5, j3hmio, dw5zg), !dw5zg['closed']) return dw5zg['currentNSMap'] = puj34f, dw5zg['localNSMap'] = qiojmh, !0x0;if ($sufep['endElement'](f43ep, g9zw5, j3hmio), qiojmh) {
    for ($_ksnv in qiojmh) $sufep['endPrefixMapping']($_ksnv);
  }
}function usvka_($svnk_, nk$s_v, zwg7d9, n6va_k, oilx7q) {
  if (/^(?:script|textarea)$/i['test'](zwg7d9)) {
    var e4fup3 = $svnk_['indexOf']('</' + zwg7d9 + '>', nk$s_v),
        d59gzt = $svnk_['substring'](nk$s_v + 0x1, e4fup3);if (/[&<]/['test'](d59gzt)) return (/^script$/i['test'](zwg7d9) ? (oilx7q['characters'](d59gzt, 0x0, d59gzt['length']), e4fup3) : (d59gzt = d59gzt['replace'](/&#?\w+;/g, n6va_k), oilx7q['characters'](d59gzt, 0x0, d59gzt['length']), e4fup3)
    );
  }return nk$s_v + 0x1;
}function uihoqjm(moji3h, t92, hjiom3, n_vk$) {
  var vs_ = n_vk$[hjiom3];return null == vs_ && (vs_ = moji3h['lastIndexOf']('</' + hjiom3 + '>'), t92 > vs_ && (vs_ = moji3h['lastIndexOf']('</' + hjiom3)), n_vk$[hjiom3] = vs_), t92 > vs_;
}function uzgw7x9(t9gz5d, fju4p) {
  for (var k$ns_ in t9gz5d) fju4p[k$ns_] = t9gz5d[k$ns_];
}function uefus(xmiqol, z59td2, w9dz7g, kn_$s) {
  var avkn6_ = xmiqol['charAt'](z59td2 + 0x2);switch (avkn6_) {case '-':
      if ('-' === xmiqol['charAt'](z59td2 + 0x3)) {
        var k6_va = xmiqol['indexOf']('-->', z59td2 + 0x4);return k6_va > z59td2 ? (w9dz7g['comment'](xmiqol, z59td2 + 0x4, k6_va - z59td2 - 0x4), k6_va + 0x3) : (kn_$s['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == xmiqol['substr'](z59td2 + 0x3, 0x6)) {
        var k6_va = xmiqol['indexOf'](']]>', z59td2 + 0x9);return w9dz7g['startCDATA'](), w9dz7g['characters'](xmiqol, z59td2 + 0x9, k6_va - z59td2 - 0x9), w9dz7g['endCDATA'](), k6_va + 0x3;
      }var wlqxo = umji43h(xmiqol, z59td2),
          un$ = wlqxo['length'];if (un$ > 0x1 && /!doctype/i['test'](wlqxo[0x0][0x0])) {
        var x9gz7w = wlqxo[0x1][0x0],
            hjmqo = un$ > 0x3 && /^public$/i['test'](wlqxo[0x2][0x0]) && wlqxo[0x3][0x0],
            _ckva6 = un$ > 0x4 && wlqxo[0x4][0x0],
            ioj = wlqxo[un$ - 0x1];return w9dz7g['startDTD'](x9gz7w, hjmqo && hjmqo['replace'](/^(['"])(.*?)\1$/, '$2'), _ckva6 && _ckva6['replace'](/^(['"])(.*?)\1$/, '$2')), w9dz7g['endDTD'](), ioj['index'] + ioj[0x0]['length'];
      }}return -0x1;
}function u$sk_v(ak6cv, u$fep, hm3ji) {
  var qmoixl = ak6cv['indexOf']('?>', u$fep);if (qmoixl) {
    var p3fj4h = ak6cv['substring'](u$fep, qmoixl)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (p3fj4h) {
      {
        p3fj4h[0x0]['length'];
      }return hm3ji['processingInstruction'](p3fj4h[0x1], p3fj4h[0x2]), qmoixl + 0x2;
    }return -0x1;
  }return -0x1;
}function us$nuv() {}function uz5g9wd(a_c6v, r6ca08) {
  return a_c6v['__proto__'] = r6ca08, a_c6v;
}function umji43h(oj3mih, mxlo) {
  var o3imhj,
      zwg79d = [],
      c6r8a = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (c6r8a['lastIndex'] = mxlo, c6r8a['exec'](oj3mih); o3imhj = c6r8a['exec'](oj3mih);) if (zwg79d['push'](o3imhj), o3imhj[0x1]) return zwg79d;
}var uxgq7wl = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    ug9l7x = new RegExp('[\\-\\.0-9' + uxgq7wl['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    uufns$ = new RegExp('^' + uxgq7wl['source'] + ug9l7x['source'] + '*(?::' + uxgq7wl['source'] + ug9l7x['source'] + '*)?$'),
    uqlx = 0x0,
    u$vusen = 0x1,
    umjioh3 = 0x2,
    up3jh4m = 0x3,
    u$psue = 0x4,
    uc6ra80 = 0x5,
    ucr0ak6 = 0x6,
    ufu4e$ = 0x7;urc81b0['prototype'] = { 'parse': function (ilmq, k_v6ca, xomqli) {
    var an_kv6 = this['domBuilder'];an_kv6['startDocument'](), uzgw7x9(k_v6ca, k_v6ca = {}), uv_nksa(ilmq, k_v6ca, xomqli, an_kv6, this['errorHandler']), an_kv6['endDocument']();
  } }, us$nuv['prototype'] = { 'setTagName': function (pf$us) {
    if (!uufns$['test'](pf$us)) throw new Error('invalid tagName:' + pf$us);this['tagName'] = pf$us;
  }, 'add': function (xw7qol, vnas_, vn_ska) {
    if (!uufns$['test'](xw7qol)) throw new Error('invalid attribute:' + xw7qol);this[this['length']++] = { 'qName': xw7qol, 'value': vnas_, 'offset': vn_ska };
  }, 'length': 0x0, 'getLocalName': function ($ep4) {
    return this[$ep4]['localName'];
  }, 'getLocator': function (c0r168) {
    return this[c0r168]['locator'];
  }, 'getQName': function (crk6_) {
    return this[crk6_]['qName'];
  }, 'getURI': function (gdt59z) {
    return this[gdt59z]['uri'];
  }, 'getValue': function (dtz9) {
    return this[dtz9]['value'];
  } }, uz5g9wd({}, uz5g9wd['prototype']) instanceof uz5g9wd || (uz5g9wd = function ($ne_vs, ix7olq) {
  function car068() {}car068['prototype'] = ix7olq, car068 = new car068();for (ix7olq in $ne_vs) car068[ix7olq] = $ne_vs[ix7olq];return car068;
}), exports['XMLReader'] = urc81b0;