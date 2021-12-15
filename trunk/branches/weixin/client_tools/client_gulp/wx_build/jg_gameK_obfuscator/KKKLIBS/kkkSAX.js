var U = wx.$k;
function K1_cp() {}function K1_k6hei(bvnw, du$lax, jtem, _dl$, g5fp) {
  function rdp$5(xwabzo) {
    if (xwabzo > 0xffff) {
      xwabzo -= 0x10000;var _d5rp3 = 0xd800 + (xwabzo >> 0xa),
          wqov1n = 0xdc00 + (0x3ff & xwabzo);return String['fromCharCode'](_d5rp3, wqov1n);
    }return String['fromCharCode'](xwabzo);
  }function rd_$pl(vxbzo) {
    var gpr_ = vxbzo['slice'](0x1, -0x1);return gpr_ in jtem ? jtem[gpr_] : '#' === gpr_['charAt'](0x0) ? rdp$5(parseInt(gpr_['substr'](0x1)['replace']('x', '0x'))) : (g5fp['error']('entity not found:' + vxbzo), vxbzo);
  }function u_$la(tehi7j) {
    if (tehi7j > uldx$a) {
      var lubxaz = bvnw['substring'](uldx$a, tehi7j)['replace'](/&#?\w+;/g, rd_$pl);cf5p3 && sihe(uldx$a), _dl$['characters'](lubxaz, 0x0, tehi7j - uldx$a), uldx$a = tehi7j;
    }
  }function sihe(alzbux, _uld) {
    for (; alzbux >= ht6kie && (_uld = luda$x['exec'](bvnw));) ygf = _uld['index'], ht6kie = ygf + _uld[0x0]['length'], cf5p3['lineNumber']++;cf5p3['columnNumber'] = alzbux - ygf + 0x1;
  }for (var ygf = 0x0, ht6kie = 0x0, luda$x = /.*(?:\r\n?|\n)|.*$/g, cf5p3 = _dl$['locator'], da_$l = [{ 'currentNSMap': du$lax }], cp5g3 = {}, uldx$a = 0x0;;) {
    try {
      var tiem = bvnw['indexOf']('<', uldx$a);if (0x0 > tiem) {
        if (!bvnw['substr'](uldx$a)['match'](/^\s*$/)) {
          var aoxbzw = _dl$['doc'],
              hjtie = aoxbzw['createTextNode'](bvnw['substr'](uldx$a));aoxbzw['appendChild'](hjtie), _dl$['currentElement'] = hjtie;
        }return;
      }switch (tiem > uldx$a && u_$la(tiem), bvnw['charAt'](tiem + 0x1)) {case '/':
          var time = bvnw['indexOf']('>', tiem + 0x3),
              lp = bvnw['substring'](tiem + 0x2, time),
              $ud_l = da_$l['pop']();0x0 > time ? (lp = bvnw['substring'](tiem + 0x2)['replace'](/[\s<].*/, ''), g5fp['error']('end tag name: ' + lp + ' is not complete:' + $ud_l['tagName']), time = tiem + 0x1 + lp['length']) : lp['match'](/\s</) && (lp = lp['replace'](/[\s<].*/, ''), g5fp['error']('end tag name: ' + lp + ' maybe not complete'), time = tiem + 0x1 + lp['length']);var s028k9 = $ud_l['localNSMap'],
              kteh6 = $ud_l['tagName'] == lp,
              _rl = kteh6 || $ud_l['tagName'] && $ud_l['tagName']['toLowerCase']() == lp['toLowerCase']();if (_rl) {
            if (_dl$['endElement']($ud_l['uri'], $ud_l['localName'], lp), s028k9) {
              for (var ikeh6t in s028k9) _dl$['endPrefixMapping'](ikeh6t);
            }kteh6 || g5fp['fatalError']('end tag name: ' + lp + ' is not match the current start tagName:' + $ud_l['tagName']);
          } else da_$l['push']($ud_l);time++;break;case '?':
          cf5p3 && sihe(tiem), time = K1_oxbvz(bvnw, tiem, _dl$);break;case '!':
          cf5p3 && sihe(tiem), time = K1_ksih(bvnw, tiem, _dl$, g5fp);break;default:
          cf5p3 && sihe(tiem);var uabxlz = new K1__3pr(),
              h6ite = da_$l[da_$l['length'] - 0x1]['currentNSMap'],
              time = K1_zovx(bvnw, tiem, uabxlz, h6ite, rd_$pl, g5fp),
              jehit7 = uabxlz['length'];if (!uabxlz['closed'] && K1_au_$ld(bvnw, time, uabxlz['tagName'], cp5g3) && (uabxlz['closed'] = !0x0, jtem['nbsp'] || g5fp['warning']('unclosed xml attribute')), cf5p3 && jehit7) {
            for (var xaulbz = K1_wbxovz(cf5p3, {}), l_$adu = 0x0; jehit7 > l_$adu; l_$adu++) {
              var xazuwb = uabxlz[l_$adu];sihe(xazuwb['offset']), xazuwb['locator'] = K1_wbxovz(cf5p3, {});
            }_dl$['locator'] = xaulbz, K1__rpd5(uabxlz, _dl$, h6ite) && da_$l['push'](uabxlz), _dl$['locator'] = cf5p3;
          } else K1__rpd5(uabxlz, _dl$, h6ite) && da_$l['push'](uabxlz);'http://www.w3.org/1999/xhtml' !== uabxlz['uri'] || uabxlz['closed'] ? time++ : time = K1_ke6thi(bvnw, time, uabxlz['tagName'], rd_$pl, _dl$);}
    } catch (a$ludx) {
      g5fp['error']('element parse error: ' + a$ludx), time = -0x1;
    }time > uldx$a ? uldx$a = time : u_$la(Math['max'](tiem, uldx$a) + 0x1);
  }
}function K1_wbxovz(uxzla, $r_dl) {
  return $r_dl['lineNumber'] = uxzla['lineNumber'], $r_dl['columnNumber'] = uxzla['columnNumber'], $r_dl;
}function K1_zovx(v1ownb, _d5$pr, zxuwa, shk692, $xuzl, xzoba) {
  for (var ld_$p, q810vn, he7ti6 = ++_d5$pr, ulbaz = K1_g_r3p5;;) {
    var _$dl = v1ownb['charAt'](he7ti6);switch (_$dl) {case '=':
        if (ulbaz === K1_n209) ld_$p = v1ownb['slice'](_d5$pr, he7ti6), ulbaz = K1_m74;else {
          if (ulbaz !== K1_$drp_) throw new Error('attribute equal must after attrName');ulbaz = K1_m74;
        }break;case '\x27':case '\x22':
        if (ulbaz === K1_m74 || ulbaz === K1_n209) {
          if (ulbaz === K1_n209 && (xzoba['warning']('attribute value must after "="'), ld_$p = v1ownb['slice'](_d5$pr, he7ti6)), _d5$pr = he7ti6 + 0x1, he7ti6 = v1ownb['indexOf'](_$dl, _d5$pr), !(he7ti6 > 0x0)) throw new Error('attribute value no end \'' + _$dl + '\' match');q810vn = v1ownb['slice'](_d5$pr, he7ti6)['replace'](/&#?\w+;/g, $xuzl), zxuwa['add'](ld_$p, q810vn, _d5$pr - 0x1), ulbaz = K1_k6sh2;
        } else {
          if (ulbaz != K1_hisek) throw new Error('attribute value must after "="');q810vn = v1ownb['slice'](_d5$pr, he7ti6)['replace'](/&#?\w+;/g, $xuzl), zxuwa['add'](ld_$p, q810vn, _d5$pr), xzoba['warning']('attribute "' + ld_$p + '" missed start quot(' + _$dl + ')!!'), _d5$pr = he7ti6 + 0x1, ulbaz = K1_k6sh2;
        }break;case '/':
        switch (ulbaz) {case K1_g_r3p5:
            zxuwa['setTagName'](v1ownb['slice'](_d5$pr, he7ti6));case K1_k6sh2:case K1_$du_r:case K1_vzbow:
            ulbaz = K1_vzbow, zxuwa['closed'] = !0x0;case K1_hisek:case K1_n209:case K1_$drp_:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return xzoba['error']('unexpected end of input'), ulbaz == K1_g_r3p5 && zxuwa['setTagName'](v1ownb['slice'](_d5$pr, he7ti6)), he7ti6;case '>':
        switch (ulbaz) {case K1_g_r3p5:
            zxuwa['setTagName'](v1ownb['slice'](_d5$pr, he7ti6));case K1_k6sh2:case K1_$du_r:case K1_vzbow:
            break;case K1_hisek:case K1_n209:
            q810vn = v1ownb['slice'](_d5$pr, he7ti6), '/' === q810vn['slice'](-0x1) && (zxuwa['closed'] = !0x0, q810vn = q810vn['slice'](0x0, -0x1));case K1_$drp_:
            ulbaz === K1_$drp_ && (q810vn = ld_$p), ulbaz == K1_hisek ? (xzoba['warning']('attribute "' + q810vn + '" missed quot(")!!'), zxuwa['add'](ld_$p, q810vn['replace'](/&#?\w+;/g, $xuzl), _d5$pr)) : ('http://www.w3.org/1999/xhtml' === shk692[''] && q810vn['match'](/^(?:disabled|checked|selected)$/i) || xzoba['warning']('attribute "' + q810vn + '" missed value!! "' + q810vn + '" instead!!'), zxuwa['add'](q810vn, q810vn, _d5$pr));break;case K1_m74:
            throw new Error('attribute value missed!!');}return he7ti6;case '\u0080':
        _$dl = '\x20';default:
        if ('\x20' >= _$dl) switch (ulbaz) {case K1_g_r3p5:
            zxuwa['setTagName'](v1ownb['slice'](_d5$pr, he7ti6)), ulbaz = K1_$du_r;break;case K1_n209:
            ld_$p = v1ownb['slice'](_d5$pr, he7ti6), ulbaz = K1_$drp_;break;case K1_hisek:
            var q810vn = v1ownb['slice'](_d5$pr, he7ti6)['replace'](/&#?\w+;/g, $xuzl);xzoba['warning']('attribute "' + q810vn + '" missed quot(")!!'), zxuwa['add'](ld_$p, q810vn, _d5$pr);case K1_k6sh2:
            ulbaz = K1_$du_r;} else switch (ulbaz) {case K1_$drp_:
            {
              zxuwa['tagName'];
            }'http://www.w3.org/1999/xhtml' === shk692[''] && ld_$p['match'](/^(?:disabled|checked|selected)$/i) || xzoba['warning']('attribute "' + ld_$p + '" missed value!! "' + ld_$p + '" instead2!!'), zxuwa['add'](ld_$p, ld_$p, _d5$pr), _d5$pr = he7ti6, ulbaz = K1_n209;break;case K1_k6sh2:
            xzoba['warning']('attribute space is required"' + ld_$p + '\x22!!');case K1_$du_r:
            ulbaz = K1_n209, _d5$pr = he7ti6;break;case K1_m74:
            ulbaz = K1_hisek, _d5$pr = he7ti6;break;case K1_vzbow:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}he7ti6++;
  }
}function K1__rpd5(sq90, sie6k, etij) {
  for (var wbuazx = sq90['tagName'], hesk6 = null, gfp3c5 = sq90['length']; gfp3c5--;) {
    var nqvow = sq90[gfp3c5],
        l$r = nqvow['qName'],
        sk986 = nqvow['value'],
        dl_rp = l$r['indexOf'](':');if (dl_rp > 0x0) var q9280 = nqvow['prefix'] = l$r['slice'](0x0, dl_rp),
        qv0n81 = l$r['slice'](dl_rp + 0x1),
        zwubxa = 'xmlns' === q9280 && qv0n81;else qv0n81 = l$r, q9280 = null, zwubxa = 'xmlns' === l$r && '';nqvow['localName'] = qv0n81, zwubxa !== !0x1 && (null == hesk6 && (hesk6 = {}, K1_prdl(etij, etij = {})), etij[zwubxa] = hesk6[zwubxa] = sk986, nqvow['uri'] = 'http://www.w3.org/2000/xmlns/', sie6k['startPrefixMapping'](zwubxa, sk986));
  }for (var gfp3c5 = sq90['length']; gfp3c5--;) {
    nqvow = sq90[gfp3c5];var q9280 = nqvow['prefix'];q9280 && ('xml' === q9280 && (nqvow['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== q9280 && (nqvow['uri'] = etij[q9280 || '']));
  }var dl_rp = wbuazx['indexOf'](':');dl_rp > 0x0 ? (q9280 = sq90['prefix'] = wbuazx['slice'](0x0, dl_rp), qv0n81 = sq90['localName'] = wbuazx['slice'](dl_rp + 0x1)) : (q9280 = null, qv0n81 = sq90['localName'] = wbuazx);var gyf35 = sq90['uri'] = etij[q9280 || ''];if (sie6k['startElement'](gyf35, qv0n81, wbuazx, sq90), !sq90['closed']) return sq90['currentNSMap'] = etij, sq90['localNSMap'] = hesk6, !0x0;if (sie6k['endElement'](gyf35, qv0n81, wbuazx), hesk6) {
    for (q9280 in hesk6) sie6k['endPrefixMapping'](q9280);
  }
}function K1_ke6thi(ithe6k, vn81, balxu, k6hs9e, $pdlr_) {
  if (/^(?:script|textarea)$/i['test'](balxu)) {
    var h9kse = ithe6k['indexOf']('</' + balxu + '>', vn81),
        rdl_$u = ithe6k['substring'](vn81 + 0x1, h9kse);if (/[&<]/['test'](rdl_$u)) return (/^script$/i['test'](balxu) ? ($pdlr_['characters'](rdl_$u, 0x0, rdl_$u['length']), h9kse) : (rdl_$u = rdl_$u['replace'](/&#?\w+;/g, k6hs9e), $pdlr_['characters'](rdl_$u, 0x0, rdl_$u['length']), h9kse)
    );
  }return vn81 + 0x1;
}function K1_au_$ld(hetji, e6ikht, xzbl, sk8692) {
  var yfg35 = sk8692[xzbl];return null == yfg35 && (yfg35 = hetji['lastIndexOf']('</' + xzbl + '>'), e6ikht > yfg35 && (yfg35 = hetji['lastIndexOf']('</' + xzbl)), sk8692[xzbl] = yfg35), e6ikht > yfg35;
}function K1_prdl(zxbowa, l$u) {
  for (var e9khs6 in zxbowa) l$u[e9khs6] = zxbowa[e9khs6];
}function K1_ksih(gpf53, h9e6s, pf3c5g, hs2k9) {
  var jit7m4 = gpf53['charAt'](h9e6s + 0x2);switch (jit7m4) {case '-':
      if ('-' === gpf53['charAt'](h9e6s + 0x3)) {
        var s6eih = gpf53['indexOf']('-->', h9e6s + 0x4);return s6eih > h9e6s ? (pf3c5g['comment'](gpf53, h9e6s + 0x4, s6eih - h9e6s - 0x4), s6eih + 0x3) : (hs2k9['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == gpf53['substr'](h9e6s + 0x3, 0x6)) {
        var s6eih = gpf53['indexOf'](']]>', h9e6s + 0x9);return pf3c5g['startCDATA'](), pf3c5g['characters'](gpf53, h9e6s + 0x9, s6eih - h9e6s - 0x9), pf3c5g['endCDATA'](), s6eih + 0x3;
      }var bxul = K1_$5p_(gpf53, h9e6s),
          r_d = bxul['length'];if (r_d > 0x1 && /!doctype/i['test'](bxul[0x0][0x0])) {
        var fp3 = bxul[0x1][0x0],
            qn0v1 = r_d > 0x3 && /^public$/i['test'](bxul[0x2][0x0]) && bxul[0x3][0x0],
            ks2698 = r_d > 0x4 && bxul[0x4][0x0],
            _lua = bxul[r_d - 0x1];return pf3c5g['startDTD'](fp3, qn0v1 && qn0v1['replace'](/^(['"])(.*?)\1$/, '$2'), ks2698 && ks2698['replace'](/^(['"])(.*?)\1$/, '$2')), pf3c5g['endDTD'](), _lua['index'] + _lua[0x0]['length'];
      }}return -0x1;
}function K1_oxbvz(wozbxa, zlbuax, aud$x) {
  var _$rlpd = wozbxa['indexOf']('?>', zlbuax);if (_$rlpd) {
    var tme7i = wozbxa['substring'](zlbuax, _$rlpd)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (tme7i) {
      {
        tme7i[0x0]['length'];
      }return aud$x['processingInstruction'](tme7i[0x1], tme7i[0x2]), _$rlpd + 0x2;
    }return -0x1;
  }return -0x1;
}function K1__3pr() {}function K1_b1wzo(pr_$dl, hie7j) {
  return pr_$dl['__proto__'] = hie7j, pr_$dl;
}function K1_$5p_($5_drp, hs2k96) {
  var xzl$a,
      h7jie = [],
      r_3gp = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (r_3gp['lastIndex'] = hs2k96, r_3gp['exec']($5_drp); xzl$a = r_3gp['exec']($5_drp);) if (h7jie['push'](xzl$a), xzl$a[0x1]) return h7jie;
}var K1_axlz$u = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    K1_d5_r$ = new RegExp('[\\-\\.0-9' + K1_axlz$u['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    K1_uzlxab = new RegExp('^' + K1_axlz$u['source'] + K1_d5_r$['source'] + '*(?::' + K1_axlz$u['source'] + K1_d5_r$['source'] + '*)?$'),
    K1_g_r3p5 = 0x0,
    K1_n209 = 0x1,
    K1_$drp_ = 0x2,
    K1_m74 = 0x3,
    K1_hisek = 0x4,
    K1_k6sh2 = 0x5,
    K1_$du_r = 0x6,
    K1_vzbow = 0x7;K1_cp['prototype'] = { 'parse': function (xobazw, n0o1q, dxl$a) {
    var h76tei = this['domBuilder'];h76tei['startDocument'](), K1_prdl(n0o1q, n0o1q = {}), K1_k6hei(xobazw, n0o1q, dxl$a, h76tei, this['errorHandler']), h76tei['endDocument']();
  } }, K1__3pr['prototype'] = { 'setTagName': function (q80s29) {
    if (!K1_uzlxab['test'](q80s29)) throw new Error('invalid tagName:' + q80s29);this['tagName'] = q80s29;
  }, 'add': function (tjih, _lur$, xdlu$a) {
    if (!K1_uzlxab['test'](tjih)) throw new Error('invalid attribute:' + tjih);this[this['length']++] = { 'qName': tjih, 'value': _lur$, 'offset': xdlu$a };
  }, 'length': 0x0, 'getLocalName': function (d3_p5) {
    return this[d3_p5]['localName'];
  }, 'getLocator': function (n9820) {
    return this[n9820]['locator'];
  }, 'getQName': function (mjiet) {
    return this[mjiet]['qName'];
  }, 'getURI': function (tk6ihe) {
    return this[tk6ihe]['uri'];
  }, 'getValue': function (fg3r) {
    return this[fg3r]['value'];
  } }, K1_b1wzo({}, K1_b1wzo['prototype']) instanceof K1_b1wzo || (K1_b1wzo = function (s92, prg35_) {
  function htji7e() {}htji7e['prototype'] = prg35_, htji7e = new htji7e();for (prg35_ in s92) htji7e[prg35_] = s92[prg35_];return htji7e;
}), exports['XMLReader'] = K1_cp;