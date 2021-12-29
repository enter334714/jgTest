var M = wx.$T;
function tip$vd9() {}function tci9t24(iv92t, l2c4it, yoxq0e, c$vd, $pdf9) {
  function xq_0ey(vpdi9) {
    if (vpdi9 > 0xffff) {
      vpdi9 -= 0x10000;var pv9i$d = 0xd800 + (vpdi9 >> 0xa),
          m_h = 0xdc00 + (0x3ff & vpdi9);return String['fromCharCode'](pv9i$d, m_h);
    }return String['fromCharCode'](vpdi9);
  }function v9dip(civt) {
    var bjuak = civt['slice'](0x1, -0x1);return bjuak in yoxq0e ? yoxq0e[bjuak] : '#' === bjuak['charAt'](0x0) ? xq_0ey(parseInt(bjuak['substr'](0x1)['replace']('x', '0x'))) : ($pdf9['error']('entity not found:' + civt), civt);
  }function l2itc4(w_5hm6) {
    if (w_5hm6 > j3brn) {
      var q_my = iv92t['substring'](j3brn, w_5hm6)['replace'](/&#?\w+;/g, v9dip);cv9i2t && kubsa(j3brn), c$vd['characters'](q_my, 0x0, w_5hm6 - j3brn), j3brn = w_5hm6;
    }
  }function kubsa(r3bgjn, vfdp9) {
    for (; r3bgjn >= n86g31 && (vfdp9 = ywh_['exec'](iv92t));) m_hy = vfdp9['index'], n86g31 = m_hy + vfdp9[0x0]['length'], cv9i2t['lineNumber']++;cv9i2t['columnNumber'] = r3bgjn - m_hy + 0x1;
  }for (var m_hy = 0x0, n86g31 = 0x0, ywh_ = /.*(?:\r\n?|\n)|.*$/g, cv9i2t = c$vd['locator'], w5mh1 = [{ 'currentNSMap': l2c4it }], sjbak = {}, j3brn = 0x0;;) {
    try {
      var eo0xq7 = iv92t['indexOf']('<', j3brn);if (0x0 > eo0xq7) {
        if (!iv92t['substr'](j3brn)['match'](/^\s*$/)) {
          var h851w = c$vd['doc'],
              o7q0xe = h851w['createTextNode'](iv92t['substr'](j3brn));h851w['appendChild'](o7q0xe), c$vd['currentElement'] = o7q0xe;
        }return;
      }switch (eo0xq7 > j3brn && l2itc4(eo0xq7), iv92t['charAt'](eo0xq7 + 0x1)) {case '/':
          var _xhym = iv92t['indexOf']('>', eo0xq7 + 0x3),
              gn1836 = iv92t['substring'](eo0xq7 + 0x2, _xhym),
              pz$vfd = w5mh1['pop']();0x0 > _xhym ? (gn1836 = iv92t['substring'](eo0xq7 + 0x2)['replace'](/[\s<].*/, ''), $pdf9['error']('end tag name: ' + gn1836 + ' is not complete:' + pz$vfd['tagName']), _xhym = eo0xq7 + 0x1 + gn1836['length']) : gn1836['match'](/\s</) && (gn1836 = gn1836['replace'](/[\s<].*/, ''), $pdf9['error']('end tag name: ' + gn1836 + ' maybe not complete'), _xhym = eo0xq7 + 0x1 + gn1836['length']);var sakrjb = pz$vfd['localNSMap'],
              jng8r3 = pz$vfd['tagName'] == gn1836,
              r3jgbn = jng8r3 || pz$vfd['tagName'] && pz$vfd['tagName']['toLowerCase']() == gn1836['toLowerCase']();if (r3jgbn) {
            if (c$vd['endElement'](pz$vfd['uri'], pz$vfd['localName'], gn1836), sakrjb) {
              for (var n8r1g in sakrjb) c$vd['endPrefixMapping'](n8r1g);
            }jng8r3 || $pdf9['fatalError']('end tag name: ' + gn1836 + ' is not match the current start tagName:' + pz$vfd['tagName']);
          } else w5mh1['push'](pz$vfd);_xhym++;break;case '?':
          cv9i2t && kubsa(eo0xq7), _xhym = tp$9fd(iv92t, eo0xq7, c$vd);break;case '!':
          cv9i2t && kubsa(eo0xq7), _xhym = t_xmyq(iv92t, eo0xq7, c$vd, $pdf9);break;default:
          cv9i2t && kubsa(eo0xq7);var ubajs = new te0xo7q(),
              basju = w5mh1[w5mh1['length'] - 0x1]['currentNSMap'],
              _xhym = twmy_x(iv92t, eo0xq7, ubajs, basju, v9dip, $pdf9),
              _mhx0y = ubajs['length'];if (!ubajs['closed'] && tfeoz7p(iv92t, _xhym, ubajs['tagName'], sjbak) && (ubajs['closed'] = !0x0, yoxq0e['nbsp'] || $pdf9['warning']('unclosed xml attribute')), cv9i2t && _mhx0y) {
            for (var oeq70z = tsabk(cv9i2t, {}), dp9v$ = 0x0; _mhx0y > dp9v$; dp9v$++) {
              var bjrnag = ubajs[dp9v$];kubsa(bjrnag['offset']), bjrnag['locator'] = tsabk(cv9i2t, {});
            }c$vd['locator'] = oeq70z, thmy_5w(ubajs, c$vd, basju) && w5mh1['push'](ubajs), c$vd['locator'] = cv9i2t;
          } else thmy_5w(ubajs, c$vd, basju) && w5mh1['push'](ubajs);'http://www.w3.org/1999/xhtml' !== ubajs['uri'] || ubajs['closed'] ? _xhym++ : _xhym = tbksaj(iv92t, _xhym, ubajs['tagName'], v9dip, c$vd);}
    } catch (abkgj) {
      $pdf9['error']('element parse error: ' + abkgj), _xhym = -0x1;
    }_xhym > j3brn ? j3brn = _xhym : l2itc4(Math['max'](eo0xq7, j3brn) + 0x1);
  }
}function tsabk(w386, mxhy_) {
  return mxhy_['lineNumber'] = w386['lineNumber'], mxhy_['columnNumber'] = w386['columnNumber'], mxhy_;
}function twmy_x(h1w586, pid$, ymw_, gbajr, ci9d$, bsak) {
  for (var akjr, oqex07, f7q = ++pid$, c9idv = tmhy_5;;) {
    var jusk = h1w586['charAt'](f7q);switch (jusk) {case '=':
        if (c9idv === tfv$) akjr = h1w586['slice'](pid$, f7q), c9idv = th65_wm;else {
          if (c9idv !== tym0xq) throw new Error('attribute equal must after attrName');c9idv = th65_wm;
        }break;case '\x27':case '\x22':
        if (c9idv === th65_wm || c9idv === tfv$) {
          if (c9idv === tfv$ && (bsak['warning']('attribute value must after "="'), akjr = h1w586['slice'](pid$, f7q)), pid$ = f7q + 0x1, f7q = h1w586['indexOf'](jusk, pid$), !(f7q > 0x0)) throw new Error('attribute value no end \'' + jusk + '\' match');oqex07 = h1w586['slice'](pid$, f7q)['replace'](/&#?\w+;/g, ci9d$), ymw_['add'](akjr, oqex07, pid$ - 0x1), c9idv = tpzfo7d;
        } else {
          if (c9idv != tfq7o) throw new Error('attribute value must after "="');oqex07 = h1w586['slice'](pid$, f7q)['replace'](/&#?\w+;/g, ci9d$), ymw_['add'](akjr, oqex07, pid$), bsak['warning']('attribute "' + akjr + '" missed start quot(' + jusk + ')!!'), pid$ = f7q + 0x1, c9idv = tpzfo7d;
        }break;case '/':
        switch (c9idv) {case tmhy_5:
            ymw_['setTagName'](h1w586['slice'](pid$, f7q));case tpzfo7d:case ti2l4tc:case tyxe0qo:
            c9idv = tyxe0qo, ymw_['closed'] = !0x0;case tfq7o:case tfv$:case tym0xq:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return bsak['error']('unexpected end of input'), c9idv == tmhy_5 && ymw_['setTagName'](h1w586['slice'](pid$, f7q)), f7q;case '>':
        switch (c9idv) {case tmhy_5:
            ymw_['setTagName'](h1w586['slice'](pid$, f7q));case tpzfo7d:case ti2l4tc:case tyxe0qo:
            break;case tfq7o:case tfv$:
            oqex07 = h1w586['slice'](pid$, f7q), '/' === oqex07['slice'](-0x1) && (ymw_['closed'] = !0x0, oqex07 = oqex07['slice'](0x0, -0x1));case tym0xq:
            c9idv === tym0xq && (oqex07 = akjr), c9idv == tfq7o ? (bsak['warning']('attribute "' + oqex07 + '" missed quot(")!!'), ymw_['add'](akjr, oqex07['replace'](/&#?\w+;/g, ci9d$), pid$)) : ('http://www.w3.org/1999/xhtml' === gbajr[''] && oqex07['match'](/^(?:disabled|checked|selected)$/i) || bsak['warning']('attribute "' + oqex07 + '" missed value!! "' + oqex07 + '" instead!!'), ymw_['add'](oqex07, oqex07, pid$));break;case th65_wm:
            throw new Error('attribute value missed!!');}return f7q;case '\u0080':
        jusk = '\x20';default:
        if ('\x20' >= jusk) switch (c9idv) {case tmhy_5:
            ymw_['setTagName'](h1w586['slice'](pid$, f7q)), c9idv = ti2l4tc;break;case tfv$:
            akjr = h1w586['slice'](pid$, f7q), c9idv = tym0xq;break;case tfq7o:
            var oqex07 = h1w586['slice'](pid$, f7q)['replace'](/&#?\w+;/g, ci9d$);bsak['warning']('attribute "' + oqex07 + '" missed quot(")!!'), ymw_['add'](akjr, oqex07, pid$);case tpzfo7d:
            c9idv = ti2l4tc;} else switch (c9idv) {case tym0xq:
            {
              ymw_['tagName'];
            }'http://www.w3.org/1999/xhtml' === gbajr[''] && akjr['match'](/^(?:disabled|checked|selected)$/i) || bsak['warning']('attribute "' + akjr + '" missed value!! "' + akjr + '" instead2!!'), ymw_['add'](akjr, akjr, pid$), pid$ = f7q, c9idv = tfv$;break;case tpzfo7d:
            bsak['warning']('attribute space is required"' + akjr + '\x22!!');case ti2l4tc:
            c9idv = tfv$, pid$ = f7q;break;case th65_wm:
            c9idv = tfq7o, pid$ = f7q;break;case tyxe0qo:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}f7q++;
  }
}function thmy_5w(jnargb, pzdv$f, srbak) {
  for (var exqoy = jnargb['tagName'], h518 = null, pi9dv = jnargb['length']; pi9dv--;) {
    var jn3r8 = jnargb[pi9dv],
        f$z = jn3r8['qName'],
        fz7p = jn3r8['value'],
        bjnrg3 = f$z['indexOf'](':');if (bjnrg3 > 0x0) var f$dz = jn3r8['prefix'] = f$z['slice'](0x0, bjnrg3),
        vd9p$ = f$z['slice'](bjnrg3 + 0x1),
        ajukb = 'xmlns' === f$dz && vd9p$;else vd9p$ = f$z, f$dz = null, ajukb = 'xmlns' === f$z && '';jn3r8['localName'] = vd9p$, ajukb !== !0x1 && (null == h518 && (h518 = {}, td7fzp$(srbak, srbak = {})), srbak[ajukb] = h518[ajukb] = fz7p, jn3r8['uri'] = 'http://www.w3.org/2000/xmlns/', pzdv$f['startPrefixMapping'](ajukb, fz7p));
  }for (var pi9dv = jnargb['length']; pi9dv--;) {
    jn3r8 = jnargb[pi9dv];var f$dz = jn3r8['prefix'];f$dz && ('xml' === f$dz && (jn3r8['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== f$dz && (jn3r8['uri'] = srbak[f$dz || '']));
  }var bjnrg3 = exqoy['indexOf'](':');bjnrg3 > 0x0 ? (f$dz = jnargb['prefix'] = exqoy['slice'](0x0, bjnrg3), vd9p$ = jnargb['localName'] = exqoy['slice'](bjnrg3 + 0x1)) : (f$dz = null, vd9p$ = jnargb['localName'] = exqoy);var jb3nrg = jnargb['uri'] = srbak[f$dz || ''];if (pzdv$f['startElement'](jb3nrg, vd9p$, exqoy, jnargb), !jnargb['closed']) return jnargb['currentNSMap'] = srbak, jnargb['localNSMap'] = h518, !0x0;if (pzdv$f['endElement'](jb3nrg, vd9p$, exqoy), h518) {
    for (f$dz in h518) pzdv$f['endPrefixMapping'](f$dz);
  }
}function tbksaj(mhw6_, qe0xo, g613n, jak, jangb) {
  if (/^(?:script|textarea)$/i['test'](g613n)) {
    var bskra = mhw6_['indexOf']('</' + g613n + '>', qe0xo),
        pfvzd = mhw6_['substring'](qe0xo + 0x1, bskra);if (/[&<]/['test'](pfvzd)) return (/^script$/i['test'](g613n) ? (jangb['characters'](pfvzd, 0x0, pfvzd['length']), bskra) : (pfvzd = pfvzd['replace'](/&#?\w+;/g, jak), jangb['characters'](pfvzd, 0x0, pfvzd['length']), bskra)
    );
  }return qe0xo + 0x1;
}function tfeoz7p(h15w6m, q07xo, _eyx, jksab) {
  var gn38jr = jksab[_eyx];return null == gn38jr && (gn38jr = h15w6m['lastIndexOf']('</' + _eyx + '>'), q07xo > gn38jr && (gn38jr = h15w6m['lastIndexOf']('</' + _eyx)), jksab[_eyx] = gn38jr), q07xo > gn38jr;
}function td7fzp$(dp9f, zfqo7e) {
  for (var _mxq0 in dp9f) zfqo7e[_mxq0] = dp9f[_mxq0];
}function t_xmyq(vitc9$, j3rngb, qx7eo, n83rgj) {
  var i9vp$d = vitc9$['charAt'](j3rngb + 0x2);switch (i9vp$d) {case '-':
      if ('-' === vitc9$['charAt'](j3rngb + 0x3)) {
        var pe7oz = vitc9$['indexOf']('-->', j3rngb + 0x4);return pe7oz > j3rngb ? (qx7eo['comment'](vitc9$, j3rngb + 0x4, pe7oz - j3rngb - 0x4), pe7oz + 0x3) : (n83rgj['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == vitc9$['substr'](j3rngb + 0x3, 0x6)) {
        var pe7oz = vitc9$['indexOf'](']]>', j3rngb + 0x9);return qx7eo['startCDATA'](), qx7eo['characters'](vitc9$, j3rngb + 0x9, pe7oz - j3rngb - 0x9), qx7eo['endCDATA'](), pe7oz + 0x3;
      }var foz = tc9t$iv(vitc9$, j3rngb),
          yh0xm_ = foz['length'];if (yh0xm_ > 0x1 && /!doctype/i['test'](foz[0x0][0x0])) {
        var vpd9i$ = foz[0x1][0x0],
            grbka = yh0xm_ > 0x3 && /^public$/i['test'](foz[0x2][0x0]) && foz[0x3][0x0],
            rngaj = yh0xm_ > 0x4 && foz[0x4][0x0],
            t4ci = foz[yh0xm_ - 0x1];return qx7eo['startDTD'](vpd9i$, grbka && grbka['replace'](/^(['"])(.*?)\1$/, '$2'), rngaj && rngaj['replace'](/^(['"])(.*?)\1$/, '$2')), qx7eo['endDTD'](), t4ci['index'] + t4ci[0x0]['length'];
      }}return -0x1;
}function tp$9fd(xwhym, z7pdfo, mhyw_x) {
  var q_0eyx = xwhym['indexOf']('?>', z7pdfo);if (q_0eyx) {
    var mw65h1 = xwhym['substring'](z7pdfo, q_0eyx)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (mw65h1) {
      {
        mw65h1[0x0]['length'];
      }return mhyw_x['processingInstruction'](mw65h1[0x1], mw65h1[0x2]), q_0eyx + 0x2;
    }return -0x1;
  }return -0x1;
}function te0xo7q() {}function tnjr3(d$vpfz, rn3gjb) {
  return d$vpfz['__proto__'] = rn3gjb, d$vpfz;
}function tc9t$iv(i2cvt9, akjbsr) {
  var mwy_hx,
      w18563 = [],
      vic92 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (vic92['lastIndex'] = akjbsr, vic92['exec'](i2cvt9); mwy_hx = vic92['exec'](i2cvt9);) if (w18563['push'](mwy_hx), mwy_hx[0x1]) return w18563;
}var th156wm = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    t$pdvi = new RegExp('[\\-\\.0-9' + th156wm['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    tze7qf = new RegExp('^' + th156wm['source'] + t$pdvi['source'] + '*(?::' + th156wm['source'] + t$pdvi['source'] + '*)?$'),
    tmhy_5 = 0x0,
    tfv$ = 0x1,
    tym0xq = 0x2,
    th65_wm = 0x3,
    tfq7o = 0x4,
    tpzfo7d = 0x5,
    ti2l4tc = 0x6,
    tyxe0qo = 0x7;tip$vd9['prototype'] = { 'parse': function (e7foqz, r1g3n8, o7q) {
    var efqoz = this['domBuilder'];efqoz['startDocument'](), td7fzp$(r1g3n8, r1g3n8 = {}), tci9t24(e7foqz, r1g3n8, o7q, efqoz, this['errorHandler']), efqoz['endDocument']();
  } }, te0xo7q['prototype'] = { 'setTagName': function (gjrban) {
    if (!tze7qf['test'](gjrban)) throw new Error('invalid tagName:' + gjrban);this['tagName'] = gjrban;
  }, 'add': function (pozdf, w56m, n658) {
    if (!tze7qf['test'](pozdf)) throw new Error('invalid attribute:' + pozdf);this[this['length']++] = { 'qName': pozdf, 'value': w56m, 'offset': n658 };
  }, 'length': 0x0, 'getLocalName': function (jrkga) {
    return this[jrkga]['localName'];
  }, 'getLocator': function (h_mw) {
    return this[h_mw]['locator'];
  }, 'getQName': function (h16w8) {
    return this[h16w8]['qName'];
  }, 'getURI': function (pd7$) {
    return this[pd7$]['uri'];
  }, 'getValue': function (rng13) {
    return this[rng13]['value'];
  } }, tnjr3({}, tnjr3['prototype']) instanceof tnjr3 || (tnjr3 = function (oqxey0, jgrakb) {
  function v9pdi() {}v9pdi['prototype'] = jgrakb, v9pdi = new v9pdi();for (jgrakb in oqxey0) v9pdi[jgrakb] = oqxey0[jgrakb];return v9pdi;
}), exports['XMLReader'] = tip$vd9;