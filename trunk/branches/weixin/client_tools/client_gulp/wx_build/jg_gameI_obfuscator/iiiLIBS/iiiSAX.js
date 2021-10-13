var Q = wx.$I;
function i_xq$gv4() {}function i_ijb6pl(oljh6, ukacrw, gxqf7$, sk7r8f, sf7) {
  function xq$v4(ruwka) {
    var ra8k7s = ruwka['slice'](0x1, -0x1);return ra8k7s in gxqf7$ ? gxqf7$[ra8k7s] : '#' === ra8k7s['charAt'](0x0) ? 0xffff < (ra8k7s = parseInt(ra8k7s['substr'](0x1)['replace']('x', '0x'))) ? (ra8k7s -= 0x10000, String['fromCharCode'](0xd800 + (ra8k7s >> 0xa), 0xdc00 + (0x3ff & ra8k7s))) : String['fromCharCode'](ra8k7s) : (sf7['error']('entity not found:' + ruwka), ruwka);
  }function gx7sf$(jypbi9) {
    var jib6;fs7$x < jypbi9 && (jib6 = oljh6['substring'](fs7$x, jypbi9)['replace'](/&#?\w+;/g, xq$v4), sf$x && h6jiel(fs7$x), sk7r8f['characters'](jib6, 0x0, jypbi9 - fs7$x), fs7$x = jypbi9);
  }function h6jiel(ztwc, gxv4$) {
    for (; fx7$s <= ztwc && (gxv4$ = bpij9['exec'](oljh6));) qv$fgx = gxv4$['index'], fx7$s = qv$fgx + gxv4$[0x0]['length'], sf$x['lineNumber']++;sf$x['columnNumber'] = ztwc - qv$fgx + 0x1;
  }for (var qv$fgx = 0x0, fx7$s = 0x0, bpij9 = /.*(?:\r\n?|\n)|.*$/g, sf$x = sk7r8f['locator'], b_np9y = [{ 'currentNSMap': ukacrw }], ji9l = {}, fs7$x = 0x0;;) {
    try {
      var yn_5m9 = oljh6['indexOf']('<', fs7$x),
          q$7xfg,
          y9nm5;if (yn_5m9 < 0x0) return void (oljh6['substr'](fs7$x)['match'](/^\s*$/) || (y9nm5 = (q$7xfg = sk7r8f['doc'])['createTextNode'](oljh6['substr'](fs7$x)), q$7xfg['appendChild'](y9nm5), sk7r8f['currentElement'] = y9nm5));switch (fs7$x < yn_5m9 && gx7sf$(yn_5m9), oljh6['charAt'](yn_5m9 + 0x1)) {case '/':
          var m2t50 = oljh6['indexOf']('>', yn_5m9 + 0x3),
              jehl6o = oljh6['substring'](yn_5m9 + 0x2, m2t50),
              cwuka = b_np9y['pop']();m2t50 < 0x0 ? (jehl6o = oljh6['substring'](yn_5m9 + 0x2)['replace'](/[\s<].*/, ''), sf7['error']('end tag name: ' + jehl6o + ' is not complete:' + cwuka['tagName']), m2t50 = yn_5m9 + 0x1 + jehl6o['length']) : jehl6o['match'](/\s</) && (jehl6o = jehl6o['replace'](/[\s<].*/, ''), sf7['error']('end tag name: ' + jehl6o + ' maybe not complete'), m2t50 = yn_5m9 + 0x1 + jehl6o['length']);var ilj9pb = cwuka['localNSMap'],
              xk78sf = cwuka['tagName'] == jehl6o;if (xk78sf || cwuka['tagName'] && cwuka['tagName']['toLowerCase']() == jehl6o['toLowerCase']()) {
            if (sk7r8f['endElement'](cwuka['uri'], cwuka['localName'], jehl6o), ilj9pb) {
              for (var ckwrau in ilj9pb) sk7r8f['endPrefixMapping'](ckwrau);
            }xk78sf || sf7['fatalError']('end tag name: ' + jehl6o + ' is not match the current start tagName:' + cwuka['tagName']);
          } else b_np9y['push'](cwuka);m2t50++;break;case '?':
          sf$x && h6jiel(yn_5m9), m2t50 = i_fs87$x(oljh6, yn_5m9, sk7r8f);break;case '!':
          sf$x && h6jiel(yn_5m9), m2t50 = i_hd(oljh6, yn_5m9, sk7r8f, sf7);break;default:
          sf$x && h6jiel(yn_5m9);var uwz0ac = new i_hi6lje(),
              vfgqx$ = b_np9y[b_np9y['length'] - 0x1]['currentNSMap'],
              m2t50 = i_li6hj(oljh6, yn_5m9, uwz0ac, vfgqx$, xq$v4, sf7),
              cuwakr = uwz0ac['length'];if (!uwz0ac['closed'] && i_fx$g7(oljh6, m2t50, uwz0ac['tagName'], ji9l) && (uwz0ac['closed'] = !0x0, gxqf7$['nbsp'] || sf7['warning']('unclosed xml attribute')), sf$x && cuwakr) {
            for (var k8r7sf = i_eb6(sf$x, {}), m0512 = 0x0; m0512 < cuwakr; m0512++) {
              var xqvf = uwz0ac[m0512];h6jiel(xqvf['offset']), xqvf['locator'] = i_eb6(sf$x, {});
            }sk7r8f['locator'] = k8r7sf, i_y_ibp(uwz0ac, sk7r8f, vfgqx$) && b_np9y['push'](uwz0ac), sk7r8f['locator'] = sf$x;
          } else i_y_ibp(uwz0ac, sk7r8f, vfgqx$) && b_np9y['push'](uwz0ac);'http://www.w3.org/1999/xhtml' !== uwz0ac['uri'] || uwz0ac['closed'] ? m2t50++ : m2t50 = i_py9ib(oljh6, m2t50, uwz0ac['tagName'], xq$v4, sk7r8f);}
    } catch (l6ehij) {
      sf7['error']('element parse error: ' + l6ehij), m2t50 = -0x1;
    }fs7$x < m2t50 ? fs7$x = m2t50 : gx7sf$(Math['max'](yn_5m9, fs7$x) + 0x1);
  }
}function i_eb6(p5n_9y, h3eo6) {
  return h3eo6['lineNumber'] = p5n_9y['lineNumber'], h3eo6['columnNumber'] = p5n_9y['columnNumber'], h3eo6;
}function i_li6hj(ihjle6, gv4q$, i6jlpb, xfvqg$, ks8ar, o6hje) {
  for (var acrwku, hl6eji = ++gv4q$, ucrkaw = i_pbli9j;;) {
    var u8kra = ihjle6['charAt'](hl6eji);switch (u8kra) {case '=':
        if (ucrkaw === i_iyjb9) acrwku = ihjle6['slice'](gv4q$, hl6eji), ucrkaw = i_czauw;else {
          if (ucrkaw !== i_q4gxv) throw new Error('attribute equal must after attrName');ucrkaw = i_czauw;
        }break;case '\x27':case '\x22':
        if (ucrkaw === i_czauw || ucrkaw === i_iyjb9) {
          if (ucrkaw === i_iyjb9 && (o6hje['warning']('attribute value must after "="'), acrwku = ihjle6['slice'](gv4q$, hl6eji)), !(0x0 < (hl6eji = ihjle6['indexOf'](u8kra, gv4q$ = hl6eji + 0x1)))) throw new Error('attribute value no end \'' + u8kra + '\' match');_ipb9 = ihjle6['slice'](gv4q$, hl6eji)['replace'](/&#?\w+;/g, ks8ar), i6jlpb['add'](acrwku, _ipb9, gv4q$ - 0x1), ucrkaw = i_ucrazw;
        } else {
          if (ucrkaw != i_n1m_25) throw new Error('attribute value must after "="');_ipb9 = ihjle6['slice'](gv4q$, hl6eji)['replace'](/&#?\w+;/g, ks8ar), i6jlpb['add'](acrwku, _ipb9, gv4q$), o6hje['warning']('attribute "' + acrwku + '" missed start quot(' + u8kra + ')!!'), gv4q$ = hl6eji + 0x1, ucrkaw = i_ucrazw;
        }break;case '/':
        switch (ucrkaw) {case i_pbli9j:
            i6jlpb['setTagName'](ihjle6['slice'](gv4q$, hl6eji));case i_ucrazw:case i_ckwr:case i_yj9i:
            ucrkaw = i_yj9i, i6jlpb['closed'] = !0x0;case i_n1m_25:case i_iyjb9:case i_q4gxv:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return o6hje['error']('unexpected end of input'), ucrkaw == i_pbli9j && i6jlpb['setTagName'](ihjle6['slice'](gv4q$, hl6eji)), hl6eji;case '>':
        switch (ucrkaw) {case i_pbli9j:
            i6jlpb['setTagName'](ihjle6['slice'](gv4q$, hl6eji));case i_ucrazw:case i_ckwr:case i_yj9i:
            break;case i_n1m_25:case i_iyjb9:
            '/' === (_ipb9 = ihjle6['slice'](gv4q$, hl6eji))['slice'](-0x1) && (i6jlpb['closed'] = !0x0, _ipb9 = _ipb9['slice'](0x0, -0x1));case i_q4gxv:
            ucrkaw === i_q4gxv && (_ipb9 = acrwku), ucrkaw == i_n1m_25 ? (o6hje['warning']('attribute "' + _ipb9 + '" missed quot(")!!'), i6jlpb['add'](acrwku, _ipb9['replace'](/&#?\w+;/g, ks8ar), gv4q$)) : ('http://www.w3.org/1999/xhtml' === xfvqg$[''] && _ipb9['match'](/^(?:disabled|checked|selected)$/i) || o6hje['warning']('attribute "' + _ipb9 + '" missed value!! "' + _ipb9 + '" instead!!'), i6jlpb['add'](_ipb9, _ipb9, gv4q$));break;case i_czauw:
            throw new Error('attribute value missed!!');}return hl6eji;case '\u0080':
        u8kra = '\x20';default:
        if (u8kra <= '\x20') switch (ucrkaw) {case i_pbli9j:
            i6jlpb['setTagName'](ihjle6['slice'](gv4q$, hl6eji)), ucrkaw = i_ckwr;break;case i_iyjb9:
            acrwku = ihjle6['slice'](gv4q$, hl6eji), ucrkaw = i_q4gxv;break;case i_n1m_25:
            var _ipb9 = ihjle6['slice'](gv4q$, hl6eji)['replace'](/&#?\w+;/g, ks8ar);o6hje['warning']('attribute "' + _ipb9 + '" missed quot(")!!'), i6jlpb['add'](acrwku, _ipb9, gv4q$);case i_ucrazw:
            ucrkaw = i_ckwr;} else switch (ucrkaw) {case i_q4gxv:
            i6jlpb['tagName'], 'http://www.w3.org/1999/xhtml' === xfvqg$[''] && acrwku['match'](/^(?:disabled|checked|selected)$/i) || o6hje['warning']('attribute "' + acrwku + '" missed value!! "' + acrwku + '" instead2!!'), i6jlpb['add'](acrwku, acrwku, gv4q$), gv4q$ = hl6eji, ucrkaw = i_iyjb9;break;case i_ucrazw:
            o6hje['warning']('attribute space is required"' + acrwku + '\x22!!');case i_ckwr:
            ucrkaw = i_iyjb9, gv4q$ = hl6eji;break;case i_czauw:
            ucrkaw = i_n1m_25, gv4q$ = hl6eji;break;case i_yj9i:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}hl6eji++;
  }
}function i_y_ibp(kcu, xg4$q, uc0zaw) {
  for (var rucw = kcu['tagName'], elojh6 = null, q$gvxf = kcu['length']; q$gvxf--;) {
    var kr8s7f = kcu[q$gvxf],
        awuz0 = kr8s7f['qName'],
        d3eh6o = kr8s7f['value'],
        fxk;awuz0 = 0x0 < (deo63 = awuz0['indexOf'](':')) ? (o63ehd = kr8s7f['prefix'] = awuz0['slice'](0x0, deo63), fxk = awuz0['slice'](deo63 + 0x1), 'xmlns' === o63ehd && fxk) : (o63ehd = null, 'xmlns' === (fxk = awuz0) && ''), kr8s7f['localName'] = fxk, !0x1 !== awuz0 && (null == elojh6 && (elojh6 = {}, i_xgf$v(uc0zaw, uc0zaw = {})), uc0zaw[awuz0] = elojh6[awuz0] = d3eh6o, kr8s7f['uri'] = 'http://www.w3.org/2000/xmlns/', xg4$q['startPrefixMapping'](awuz0, d3eh6o));
  }for (q$gvxf = kcu['length']; q$gvxf--;) (o63ehd = (kr8s7f = kcu[q$gvxf])['prefix']) && ('xml' === o63ehd && (kr8s7f['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== o63ehd && (kr8s7f['uri'] = uc0zaw[o63ehd || '']));var deo63;fxk = 0x0 < (deo63 = rucw['indexOf'](':')) ? (o63ehd = kcu['prefix'] = rucw['slice'](0x0, deo63), kcu['localName'] = rucw['slice'](deo63 + 0x1)) : (o63ehd = null, kcu['localName'] = rucw);var $qgxf = kcu['uri'] = uc0zaw[o63ehd || ''];if (xg4$q['startElement']($qgxf, fxk, rucw, kcu), !kcu['closed']) return kcu['currentNSMap'] = uc0zaw, kcu['localNSMap'] = elojh6, !0x0;if (xg4$q['endElement']($qgxf, fxk, rucw), elojh6) {
    for (var o63ehd in elojh6) xg4$q['endPrefixMapping'](o63ehd);
  }
}function i_py9ib(pn9y, bp_9, dh3e6, $s78x, lipb9j) {
  if (/^(?:script|textarea)$/i['test'](dh3e6)) {
    var bjy9pi = pn9y['indexOf']('</' + dh3e6 + '>', bp_9),
        pn9y = pn9y['substring'](bp_9 + 0x1, bjy9pi);if (/[&<]/['test'](pn9y)) return (/^script$/i['test'](dh3e6) || (pn9y = pn9y['replace'](/&#?\w+;/g, $s78x)), lipb9j['characters'](pn9y, 0x0, pn9y['length']), bjy9pi
    );
  }return bp_9 + 0x1;
}function i_fx$g7(xqf7g, npyb, cz2t0, ihj) {
  var askw8r = ihj[cz2t0];return null == askw8r && ((askw8r = xqf7g['lastIndexOf']('</' + cz2t0 + '>')) < npyb && (askw8r = xqf7g['lastIndexOf']('</' + cz2t0)), ihj[cz2t0] = askw8r), askw8r < npyb;
}function i_xgf$v(kcaw, k7rsa) {
  for (var t0cz2u in kcaw) k7rsa[t0cz2u] = kcaw[t0cz2u];
}function i_hd(ol36h, n9_y5, acuzwr, ib_9p) {
  var $xvgqf = ol36h['charAt'](n9_y5 + 0x2);if ('-' === $xvgqf) return '-' !== ol36h['charAt'](n9_y5 + 0x3) ? -0x1 : n9_y5 < (rczawu = ol36h['indexOf']('-->', n9_y5 + 0x4)) ? (acuzwr['comment'](ol36h, n9_y5 + 0x4, rczawu - n9_y5 - 0x4), rczawu + 0x3) : (ib_9p['error']('Unclosed comment'), -0x1);if ('CDATA[' == ol36h['substr'](n9_y5 + 0x3, 0x6)) {
    var rczawu = ol36h['indexOf'](']]>', n9_y5 + 0x9);return acuzwr['startCDATA'](), acuzwr['characters'](ol36h, n9_y5 + 0x9, rczawu - n9_y5 - 0x9), acuzwr['endCDATA'](), rczawu + 0x3;
  }$xvgqf = i_pl9ibj(ol36h, n9_y5), ib_9p = $xvgqf['length'];if (0x1 < ib_9p && /!doctype/i['test']($xvgqf[0x0][0x0])) return rczawu = $xvgqf[0x1][0x0], ol36h = 0x3 < ib_9p && /^public$/i['test']($xvgqf[0x2][0x0]) && $xvgqf[0x3][0x0], n9_y5 = 0x4 < ib_9p && $xvgqf[0x4][0x0], ib_9p = $xvgqf[ib_9p - 0x1], (acuzwr['startDTD'](rczawu, ol36h && ol36h['replace'](/^(['"])(.*?)\1$/, '$2'), n9_y5 && n9_y5['replace'](/^(['"])(.*?)\1$/, '$2')), acuzwr['endDTD'](), ib_9p['index'] + ib_9p[0x0]['length']);return -0x1;
}function i_fs87$x(ut02zc, byij, $fqgv) {
  var frs7 = ut02zc['indexOf']('?>', byij);if (frs7) return byij = ut02zc['substring'](byij, frs7)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), byij ? (byij[0x0]['length'], $fqgv['processingInstruction'](byij[0x1], byij[0x2]), frs7 + 0x2) : -0x1;return -0x1;
}function i_hi6lje() {}function i_k8wa(s7r8ka, py5n_9) {
  return s7r8ka['__proto__'] = py5n_9, s7r8ka;
}function i_pl9ibj(wsra8k, vxq$g4) {
  var h6l,
      pjiby9 = [],
      l6eibj = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (l6eibj['lastIndex'] = vxq$g4, l6eibj['exec'](wsra8k); h6l = l6eibj['exec'](wsra8k);) if (pjiby9['push'](h6l), h6l[0x1]) return pjiby9;
}var i_zrwu = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    i_eol6j = new RegExp('[\\-\\.0-9' + i_zrwu['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    i_elho63 = new RegExp('^' + i_zrwu['source'] + i_eol6j['source'] + '*(?::' + i_zrwu['source'] + i_eol6j['source'] + '*)?$'),
    i_pbli9j = 0x0,
    i_iyjb9 = 0x1,
    i_q4gxv = 0x2,
    i_czauw = 0x3,
    i_n1m_25 = 0x4,
    i_ucrazw = 0x5,
    i_ckwr = 0x6,
    i_yj9i = 0x7;i_xq$gv4['prototype'] = { 'parse': function (wzcur, uacrwz, _n15ym) {
    var m5y_n = this['domBuilder'];m5y_n['startDocument'](), i_xgf$v(uacrwz, uacrwz = {}), i_ijb6pl(wzcur, uacrwz, _n15ym, m5y_n, this['errorHandler']), m5y_n['endDocument']();
  } }, i_hi6lje['prototype'] = { 'setTagName': function (ijp6l) {
    if (!i_elho63['test'](ijp6l)) throw new Error('invalid tagName:' + ijp6l);this['tagName'] = ijp6l;
  }, 'add': function (krwacu, ybip9_, n9) {
    if (!i_elho63['test'](krwacu)) throw new Error('invalid attribute:' + krwacu);this[this['length']++] = { 'qName': krwacu, 'value': ybip9_, 'offset': n9 };
  }, 'length': 0x0, 'getLocalName': function (n5m) {
    return this[n5m]['localName'];
  }, 'getLocator': function (fqx) {
    return this[fqx]['locator'];
  }, 'getQName': function (do3he) {
    return this[do3he]['qName'];
  }, 'getURI': function (pi6lj) {
    return this[pi6lj]['uri'];
  }, 'getValue': function (sgx$7f) {
    return this[sgx$7f]['value'];
  } }, i_k8wa({}, i_k8wa['prototype']) instanceof i_k8wa || (i_k8wa = function (x$v4, m052t) {
  function kfxs() {}for (m052t in kfxs['prototype'] = m052t, kfxs = new kfxs(), x$v4) kfxs[m052t] = x$v4[m052t];return kfxs;
}), exports['XMLReader'] = i_xq$gv4;