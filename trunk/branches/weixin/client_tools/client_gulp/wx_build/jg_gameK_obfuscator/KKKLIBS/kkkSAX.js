var U = wx.$k;
function K1_tjehi() {}function K1_hijet(c35fgp, nq8012, xawubz, ithe76, s6kieh) {
  function h96ke(mje7i) {
    if (mje7i > 0xffff) {
      mje7i -= 0x10000;var qon1v = 0xd800 + (mje7i >> 0xa),
          p_r5d = 0xdc00 + (0x3ff & mje7i);return String['fromCharCode'](qon1v, p_r5d);
    }return String['fromCharCode'](mje7i);
  }function _r3pg(sh9) {
    var bvxz = sh9['slice'](0x1, -0x1);return bvxz in xawubz ? xawubz[bvxz] : '#' === bvxz['charAt'](0x0) ? h96ke(parseInt(bvxz['substr'](0x1)['replace']('x', '0x'))) : (s6kieh['error']('entity not found:' + sh9), sh9);
  }function heitj7(vo01qn) {
    if (vo01qn > wnob1) {
      var keis = c35fgp['substring'](wnob1, vo01qn)['replace'](/&#?\w+;/g, _r3pg);drl_p$ && $luxaz(wnob1), ithe76['characters'](keis, 0x0, vo01qn - wnob1), wnob1 = vo01qn;
    }
  }function $luxaz(thei7j, s6k9he) {
    for (; thei7j >= du$l && (s6k9he = xwabz['exec'](c35fgp));) iesh6k = s6k9he['index'], du$l = iesh6k + s6k9he[0x0]['length'], drl_p$['lineNumber']++;drl_p$['columnNumber'] = thei7j - iesh6k + 0x1;
  }for (var iesh6k = 0x0, du$l = 0x0, xwabz = /.*(?:\r\n?|\n)|.*$/g, drl_p$ = ithe76['locator'], v1z = [{ 'currentNSMap': nq8012 }], jmit4 = {}, wnob1 = 0x0;;) {
    try {
      var y3 = c35fgp['indexOf']('<', wnob1);if (0x0 > y3) {
        if (!c35fgp['substr'](wnob1)['match'](/^\s*$/)) {
          var v01o = ithe76['doc'],
              obx = v01o['createTextNode'](c35fgp['substr'](wnob1));v01o['appendChild'](obx), ithe76['currentElement'] = obx;
        }return;
      }switch (y3 > wnob1 && heitj7(y3), c35fgp['charAt'](y3 + 0x1)) {case '/':
          var bozx = c35fgp['indexOf']('>', y3 + 0x3),
              abwzx = c35fgp['substring'](y3 + 0x2, bozx),
              nq02 = v1z['pop']();0x0 > bozx ? (abwzx = c35fgp['substring'](y3 + 0x2)['replace'](/[\s<].*/, ''), s6kieh['error']('end tag name: ' + abwzx + ' is not complete:' + nq02['tagName']), bozx = y3 + 0x1 + abwzx['length']) : abwzx['match'](/\s</) && (abwzx = abwzx['replace'](/[\s<].*/, ''), s6kieh['error']('end tag name: ' + abwzx + ' maybe not complete'), bozx = y3 + 0x1 + abwzx['length']);var r3p_5 = nq02['localNSMap'],
              pf3gr = nq02['tagName'] == abwzx,
              nq081v = pf3gr || nq02['tagName'] && nq02['tagName']['toLowerCase']() == abwzx['toLowerCase']();if (nq081v) {
            if (ithe76['endElement'](nq02['uri'], nq02['localName'], abwzx), r3p_5) {
              for (var p_g53r in r3p_5) ithe76['endPrefixMapping'](p_g53r);
            }pf3gr || s6kieh['fatalError']('end tag name: ' + abwzx + ' is not match the current start tagName:' + nq02['tagName']);
          } else v1z['push'](nq02);bozx++;break;case '?':
          drl_p$ && $luxaz(y3), bozx = K1_rl_$(c35fgp, y3, ithe76);break;case '!':
          drl_p$ && $luxaz(y3), bozx = K1_ike6s(c35fgp, y3, ithe76, s6kieh);break;default:
          drl_p$ && $luxaz(y3);var $xuald = new K1_da_$(),
              r_gp3 = v1z[v1z['length'] - 0x1]['currentNSMap'],
              bozx = K1_n1v0q(c35fgp, y3, $xuald, r_gp3, _r3pg, s6kieh),
              d_pl = $xuald['length'];if (!$xuald['closed'] && K1_xaluz$(c35fgp, bozx, $xuald['tagName'], jmit4) && ($xuald['closed'] = !0x0, xawubz['nbsp'] || s6kieh['warning']('unclosed xml attribute')), drl_p$ && d_pl) {
            for (var aubl = K1_zvb1ow(drl_p$, {}), z1vwbo = 0x0; d_pl > z1vwbo; z1vwbo++) {
              var tihje7 = $xuald[z1vwbo];$luxaz(tihje7['offset']), tihje7['locator'] = K1_zvb1ow(drl_p$, {});
            }ithe76['locator'] = aubl, K1_bxzao($xuald, ithe76, r_gp3) && v1z['push']($xuald), ithe76['locator'] = drl_p$;
          } else K1_bxzao($xuald, ithe76, r_gp3) && v1z['push']($xuald);'http://www.w3.org/1999/xhtml' !== $xuald['uri'] || $xuald['closed'] ? bozx++ : bozx = K1_gcyf53(c35fgp, bozx, $xuald['tagName'], _r3pg, ithe76);}
    } catch (ul$xad) {
      s6kieh['error']('element parse error: ' + ul$xad), bozx = -0x1;
    }bozx > wnob1 ? wnob1 = bozx : heitj7(Math['max'](y3, wnob1) + 0x1);
  }
}function K1_zvb1ow(zalbu, ket) {
  return ket['lineNumber'] = zalbu['lineNumber'], ket['columnNumber'] = zalbu['columnNumber'], ket;
}function K1_n1v0q(ji4m7, ula$d_, d$axu, onw, ekh69s, rdp$5_) {
  for (var jmt47i, qs, eh69 = ++ula$d_, g35pfr = K1_et6hi;;) {
    var gpfc35 = ji4m7['charAt'](eh69);switch (gpfc35) {case '=':
        if (g35pfr === K1_yc5gf) jmt47i = ji4m7['slice'](ula$d_, eh69), g35pfr = K1_jt7mi4;else {
          if (g35pfr !== K1_oqv1n0) throw new Error('attribute equal must after attrName');g35pfr = K1_jt7mi4;
        }break;case '\x27':case '\x22':
        if (g35pfr === K1_jt7mi4 || g35pfr === K1_yc5gf) {
          if (g35pfr === K1_yc5gf && (rdp$5_['warning']('attribute value must after "="'), jmt47i = ji4m7['slice'](ula$d_, eh69)), ula$d_ = eh69 + 0x1, eh69 = ji4m7['indexOf'](gpfc35, ula$d_), !(eh69 > 0x0)) throw new Error('attribute value no end \'' + gpfc35 + '\' match');qs = ji4m7['slice'](ula$d_, eh69)['replace'](/&#?\w+;/g, ekh69s), d$axu['add'](jmt47i, qs, ula$d_ - 0x1), g35pfr = K1_e7tjhi;
        } else {
          if (g35pfr != K1__$a) throw new Error('attribute value must after "="');qs = ji4m7['slice'](ula$d_, eh69)['replace'](/&#?\w+;/g, ekh69s), d$axu['add'](jmt47i, qs, ula$d_), rdp$5_['warning']('attribute "' + jmt47i + '" missed start quot(' + gpfc35 + ')!!'), ula$d_ = eh69 + 0x1, g35pfr = K1_e7tjhi;
        }break;case '/':
        switch (g35pfr) {case K1_et6hi:
            d$axu['setTagName'](ji4m7['slice'](ula$d_, eh69));case K1_e7tjhi:case K1_c3gpf5:case K1__dau:
            g35pfr = K1__dau, d$axu['closed'] = !0x0;case K1__$a:case K1_yc5gf:case K1_oqv1n0:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return rdp$5_['error']('unexpected end of input'), g35pfr == K1_et6hi && d$axu['setTagName'](ji4m7['slice'](ula$d_, eh69)), eh69;case '>':
        switch (g35pfr) {case K1_et6hi:
            d$axu['setTagName'](ji4m7['slice'](ula$d_, eh69));case K1_e7tjhi:case K1_c3gpf5:case K1__dau:
            break;case K1__$a:case K1_yc5gf:
            qs = ji4m7['slice'](ula$d_, eh69), '/' === qs['slice'](-0x1) && (d$axu['closed'] = !0x0, qs = qs['slice'](0x0, -0x1));case K1_oqv1n0:
            g35pfr === K1_oqv1n0 && (qs = jmt47i), g35pfr == K1__$a ? (rdp$5_['warning']('attribute "' + qs + '" missed quot(")!!'), d$axu['add'](jmt47i, qs['replace'](/&#?\w+;/g, ekh69s), ula$d_)) : ('http://www.w3.org/1999/xhtml' === onw[''] && qs['match'](/^(?:disabled|checked|selected)$/i) || rdp$5_['warning']('attribute "' + qs + '" missed value!! "' + qs + '" instead!!'), d$axu['add'](qs, qs, ula$d_));break;case K1_jt7mi4:
            throw new Error('attribute value missed!!');}return eh69;case '\u0080':
        gpfc35 = '\x20';default:
        if ('\x20' >= gpfc35) switch (g35pfr) {case K1_et6hi:
            d$axu['setTagName'](ji4m7['slice'](ula$d_, eh69)), g35pfr = K1_c3gpf5;break;case K1_yc5gf:
            jmt47i = ji4m7['slice'](ula$d_, eh69), g35pfr = K1_oqv1n0;break;case K1__$a:
            var qs = ji4m7['slice'](ula$d_, eh69)['replace'](/&#?\w+;/g, ekh69s);rdp$5_['warning']('attribute "' + qs + '" missed quot(")!!'), d$axu['add'](jmt47i, qs, ula$d_);case K1_e7tjhi:
            g35pfr = K1_c3gpf5;} else switch (g35pfr) {case K1_oqv1n0:
            {
              d$axu['tagName'];
            }'http://www.w3.org/1999/xhtml' === onw[''] && jmt47i['match'](/^(?:disabled|checked|selected)$/i) || rdp$5_['warning']('attribute "' + jmt47i + '" missed value!! "' + jmt47i + '" instead2!!'), d$axu['add'](jmt47i, jmt47i, ula$d_), ula$d_ = eh69, g35pfr = K1_yc5gf;break;case K1_e7tjhi:
            rdp$5_['warning']('attribute space is required"' + jmt47i + '\x22!!');case K1_c3gpf5:
            g35pfr = K1_yc5gf, ula$d_ = eh69;break;case K1_jt7mi4:
            g35pfr = K1__$a, ula$d_ = eh69;break;case K1__dau:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}eh69++;
  }
}function K1_bxzao(n02q98, temj, $d5p) {
  for (var ikshe6 = n02q98['tagName'], p3r5d_ = null, ownqv = n02q98['length']; ownqv--;) {
    var qow1n = n02q98[ownqv],
        ksh9e = qow1n['qName'],
        zwux = qow1n['value'],
        sk08 = ksh9e['indexOf'](':');if (sk08 > 0x0) var q982s0 = qow1n['prefix'] = ksh9e['slice'](0x0, sk08),
        qv1o = ksh9e['slice'](sk08 + 0x1),
        s82q09 = 'xmlns' === q982s0 && qv1o;else qv1o = ksh9e, q982s0 = null, s82q09 = 'xmlns' === ksh9e && '';qow1n['localName'] = qv1o, s82q09 !== !0x1 && (null == p3r5d_ && (p3r5d_ = {}, K1_axuzl($d5p, $d5p = {})), $d5p[s82q09] = p3r5d_[s82q09] = zwux, qow1n['uri'] = 'http://www.w3.org/2000/xmlns/', temj['startPrefixMapping'](s82q09, zwux));
  }for (var ownqv = n02q98['length']; ownqv--;) {
    qow1n = n02q98[ownqv];var q982s0 = qow1n['prefix'];q982s0 && ('xml' === q982s0 && (qow1n['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== q982s0 && (qow1n['uri'] = $d5p[q982s0 || '']));
  }var sk08 = ikshe6['indexOf'](':');sk08 > 0x0 ? (q982s0 = n02q98['prefix'] = ikshe6['slice'](0x0, sk08), qv1o = n02q98['localName'] = ikshe6['slice'](sk08 + 0x1)) : (q982s0 = null, qv1o = n02q98['localName'] = ikshe6);var $uxz = n02q98['uri'] = $d5p[q982s0 || ''];if (temj['startElement']($uxz, qv1o, ikshe6, n02q98), !n02q98['closed']) return n02q98['currentNSMap'] = $d5p, n02q98['localNSMap'] = p3r5d_, !0x0;if (temj['endElement']($uxz, qv1o, ikshe6), p3r5d_) {
    for (q982s0 in p3r5d_) temj['endPrefixMapping'](q982s0);
  }
}function K1_gcyf53($l_dau, ht6, qn2, f3g5, qno01) {
  if (/^(?:script|textarea)$/i['test'](qn2)) {
    var xublaz = $l_dau['indexOf']('</' + qn2 + '>', ht6),
        teihj = $l_dau['substring'](ht6 + 0x1, xublaz);if (/[&<]/['test'](teihj)) return (/^script$/i['test'](qn2) ? (qno01['characters'](teihj, 0x0, teihj['length']), xublaz) : (teihj = teihj['replace'](/&#?\w+;/g, f3g5), qno01['characters'](teihj, 0x0, teihj['length']), xublaz)
    );
  }return ht6 + 0x1;
}function K1_xaluz$(h6etki, bawuxz, balxu, gyc53f) {
  var y35gc = gyc53f[balxu];return null == y35gc && (y35gc = h6etki['lastIndexOf']('</' + balxu + '>'), bawuxz > y35gc && (y35gc = h6etki['lastIndexOf']('</' + balxu)), gyc53f[balxu] = y35gc), bawuxz > y35gc;
}function K1_axuzl(hj7tie, jhet7) {
  for (var w1nqo in hj7tie) jhet7[w1nqo] = hj7tie[w1nqo];
}function K1_ike6s(r3d5_, r_d53p, _dr5p$, e6h) {
  var uxawzb = r3d5_['charAt'](r_d53p + 0x2);switch (uxawzb) {case '-':
      if ('-' === r3d5_['charAt'](r_d53p + 0x3)) {
        var x$auld = r3d5_['indexOf']('-->', r_d53p + 0x4);return x$auld > r_d53p ? (_dr5p$['comment'](r3d5_, r_d53p + 0x4, x$auld - r_d53p - 0x4), x$auld + 0x3) : (e6h['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == r3d5_['substr'](r_d53p + 0x3, 0x6)) {
        var x$auld = r3d5_['indexOf'](']]>', r_d53p + 0x9);return _dr5p$['startCDATA'](), _dr5p$['characters'](r3d5_, r_d53p + 0x9, x$auld - r_d53p - 0x9), _dr5p$['endCDATA'](), x$auld + 0x3;
      }var zvwo1b = K1_k0289s(r3d5_, r_d53p),
          jte7ih = zvwo1b['length'];if (jte7ih > 0x1 && /!doctype/i['test'](zvwo1b[0x0][0x0])) {
        var xaobw = zvwo1b[0x1][0x0],
            jtime7 = jte7ih > 0x3 && /^public$/i['test'](zvwo1b[0x2][0x0]) && zvwo1b[0x3][0x0],
            d5pr_$ = jte7ih > 0x4 && zvwo1b[0x4][0x0],
            dp$ = zvwo1b[jte7ih - 0x1];return _dr5p$['startDTD'](xaobw, jtime7 && jtime7['replace'](/^(['"])(.*?)\1$/, '$2'), d5pr_$ && d5pr_$['replace'](/^(['"])(.*?)\1$/, '$2')), _dr5p$['endDTD'](), dp$['index'] + dp$[0x0]['length'];
      }}return -0x1;
}function K1_rl_$(gf5pr3, boazw, xoazbw) {
  var pr53d = gf5pr3['indexOf']('?>', boazw);if (pr53d) {
    var la$u = gf5pr3['substring'](boazw, pr53d)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (la$u) {
      {
        la$u[0x0]['length'];
      }return xoazbw['processingInstruction'](la$u[0x1], la$u[0x2]), pr53d + 0x2;
    }return -0x1;
  }return -0x1;
}function K1_da_$() {}function K1_k26h9(g53cyf, ek9h6s) {
  return g53cyf['__proto__'] = ek9h6s, g53cyf;
}function K1_k0289s(h6seki, q10nvo) {
  var n18qv0,
      lurd_$ = [],
      qvow1 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (qvow1['lastIndex'] = q10nvo, qvow1['exec'](h6seki); n18qv0 = qvow1['exec'](h6seki);) if (lurd_$['push'](n18qv0), n18qv0[0x1]) return lurd_$;
}var K1_g3rp5_ = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    K1_luda = new RegExp('[\\-\\.0-9' + K1_g3rp5_['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    K1__dlrp = new RegExp('^' + K1_g3rp5_['source'] + K1_luda['source'] + '*(?::' + K1_g3rp5_['source'] + K1_luda['source'] + '*)?$'),
    K1_et6hi = 0x0,
    K1_yc5gf = 0x1,
    K1_oqv1n0 = 0x2,
    K1_jt7mi4 = 0x3,
    K1__$a = 0x4,
    K1_e7tjhi = 0x5,
    K1_c3gpf5 = 0x6,
    K1__dau = 0x7;K1_tjehi['prototype'] = { 'parse': function (k9s682, g3_rp5, rg_p) {
    var $p_d = this['domBuilder'];$p_d['startDocument'](), K1_axuzl(g3_rp5, g3_rp5 = {}), K1_hijet(k9s682, g3_rp5, rg_p, $p_d, this['errorHandler']), $p_d['endDocument']();
  } }, K1_da_$['prototype'] = { 'setTagName': function ($laud_) {
    if (!K1__dlrp['test']($laud_)) throw new Error('invalid tagName:' + $laud_);this['tagName'] = $laud_;
  }, 'add': function (tm7i, $uaz, zubxal) {
    if (!K1__dlrp['test'](tm7i)) throw new Error('invalid attribute:' + tm7i);this[this['length']++] = { 'qName': tm7i, 'value': $uaz, 'offset': zubxal };
  }, 'length': 0x0, 'getLocalName': function (q10vn8) {
    return this[q10vn8]['localName'];
  }, 'getLocator': function (bvno1w) {
    return this[bvno1w]['locator'];
  }, 'getQName': function (dl$r_p) {
    return this[dl$r_p]['qName'];
  }, 'getURI': function (dla$) {
    return this[dla$]['uri'];
  }, 'getValue': function (item7j) {
    return this[item7j]['value'];
  } }, K1_k26h9({}, K1_k26h9['prototype']) instanceof K1_k26h9 || (K1_k26h9 = function (vnwq1o, eksh6) {
  function wv1bno() {}wv1bno['prototype'] = eksh6, wv1bno = new wv1bno();for (eksh6 in vnwq1o) wv1bno[eksh6] = vnwq1o[eksh6];return wv1bno;
}), exports['XMLReader'] = K1_tjehi;