var d = wx.$A;
function Ar_g7f() {}function Ad6z(p31ki, pyix, tx1y, djhsz6, v8$9) {
  function g74_rf(wj2lz) {
    if (wj2lz > 0xffff) {
      wj2lz -= 0x10000;var jlh2w = 0xd800 + (wj2lz >> 0xa),
          u8va = 0xdc00 + (0x3ff & wj2lz);return String['fromCharCode'](jlh2w, u8va);
    }return String['fromCharCode'](wj2lz);
  }function oq_tgb(g_ro4q) {
    var nse$ = g_ro4q['slice'](0x1, -0x1);return nse$ in tx1y ? tx1y[nse$] : '#' === nse$['charAt'](0x0) ? g74_rf(parseInt(nse$['substr'](0x1)['replace']('x', '0x'))) : (v8$9['error']('entity not found:' + g_ro4q), g_ro4q);
  }function p13uik(iykp) {
    if (iykp > _bxtq) {
      var _r47f = p31ki['substring'](_bxtq, iykp)['replace'](/&#?\w+;/g, oq_tgb);ip1u3k && f_rg(_bxtq), djhsz6['characters'](_r47f, 0x0, iykp - _bxtq), _bxtq = iykp;
    }
  }function f_rg(up1, rof_g) {
    for (; up1 >= to_qx && (rof_g = mdjsn['exec'](p31ki));) yiqxt = rof_g['index'], to_qx = yiqxt + rof_g[0x0]['length'], ip1u3k['lineNumber']++;ip1u3k['columnNumber'] = up1 - yiqxt + 0x1;
  }for (var yiqxt = 0x0, to_qx = 0x0, mdjsn = /.*(?:\r\n?|\n)|.*$/g, ip1u3k = djhsz6['locator'], snd6jh = [{ 'currentNSMap': pyix }], z2lw = {}, _bxtq = 0x0;;) {
    try {
      var gqo_b = p31ki['indexOf']('<', _bxtq);if (0x0 > gqo_b) {
        if (!p31ki['substr'](_bxtq)['match'](/^\s*$/)) {
          var yxtp = djhsz6['doc'],
              tibqx = yxtp['createTextNode'](p31ki['substr'](_bxtq));yxtp['appendChild'](tibqx), djhsz6['currentElement'] = tibqx;
        }return;
      }switch (gqo_b > _bxtq && p13uik(gqo_b), p31ki['charAt'](gqo_b + 0x1)) {case '/':
          var b_qtog = p31ki['indexOf']('>', gqo_b + 0x3),
              kxi1yp = p31ki['substring'](gqo_b + 0x2, b_qtog),
              sm6nd = snd6jh['pop']();0x0 > b_qtog ? (kxi1yp = p31ki['substring'](gqo_b + 0x2)['replace'](/[\s<].*/, ''), v8$9['error']('end tag name: ' + kxi1yp + ' is not complete:' + sm6nd['tagName']), b_qtog = gqo_b + 0x1 + kxi1yp['length']) : kxi1yp['match'](/\s</) && (kxi1yp = kxi1yp['replace'](/[\s<].*/, ''), v8$9['error']('end tag name: ' + kxi1yp + ' maybe not complete'), b_qtog = gqo_b + 0x1 + kxi1yp['length']);var ro_fg = sm6nd['localNSMap'],
              dnhsj6 = sm6nd['tagName'] == kxi1yp,
              x1pyt = dnhsj6 || sm6nd['tagName'] && sm6nd['tagName']['toLowerCase']() == kxi1yp['toLowerCase']();if (x1pyt) {
            if (djhsz6['endElement'](sm6nd['uri'], sm6nd['localName'], kxi1yp), ro_fg) {
              for (var fgo in ro_fg) djhsz6['endPrefixMapping'](fgo);
            }dnhsj6 || v8$9['fatalError']('end tag name: ' + kxi1yp + ' is not match the current start tagName:' + sm6nd['tagName']);
          } else snd6jh['push'](sm6nd);b_qtog++;break;case '?':
          ip1u3k && f_rg(gqo_b), b_qtog = Ajl2w(p31ki, gqo_b, djhsz6);break;case '!':
          ip1u3k && f_rg(gqo_b), b_qtog = Ashd6j(p31ki, gqo_b, djhsz6, v8$9);break;default:
          ip1u3k && f_rg(gqo_b);var n$a9e = new Adhzs6j(),
              xiyqb = snd6jh[snd6jh['length'] - 0x1]['currentNSMap'],
              b_qtog = Aqro_4(p31ki, gqo_b, n$a9e, xiyqb, oq_tgb, v8$9),
              fgro_4 = n$a9e['length'];if (!n$a9e['closed'] && Aauv83(p31ki, b_qtog, n$a9e['tagName'], z2lw) && (n$a9e['closed'] = !0x0, tx1y['nbsp'] || v8$9['warning']('unclosed xml attribute')), ip1u3k && fgro_4) {
            for (var o_tqbg = Ahljz6w(ip1u3k, {}), vk30u8 = 0x0; fgro_4 > vk30u8; vk30u8++) {
              var hsnd6j = n$a9e[vk30u8];f_rg(hsnd6j['offset']), hsnd6j['locator'] = Ahljz6w(ip1u3k, {});
            }djhsz6['locator'] = o_tqbg, Apxyti(n$a9e, djhsz6, xiyqb) && snd6jh['push'](n$a9e), djhsz6['locator'] = ip1u3k;
          } else Apxyti(n$a9e, djhsz6, xiyqb) && snd6jh['push'](n$a9e);'http://www.w3.org/1999/xhtml' !== n$a9e['uri'] || n$a9e['closed'] ? b_qtog++ : b_qtog = Auva830(p31ki, b_qtog, n$a9e['tagName'], oq_tgb, djhsz6);}
    } catch (rgf_47) {
      v8$9['error']('element parse error: ' + rgf_47), b_qtog = -0x1;
    }b_qtog > _bxtq ? _bxtq = b_qtog : p13uik(Math['max'](gqo_b, _bxtq) + 0x1);
  }
}function Ahljz6w(v0ea, or4_f) {
  return or4_f['lineNumber'] = v0ea['lineNumber'], or4_f['columnNumber'] = v0ea['columnNumber'], or4_f;
}function Aqro_4(oytxb, jnsdh6, rfg4_o, gf4ro_, med$n9, bo_qtx) {
  for (var a3vu08, qgor_, iqtyb = ++jnsdh6, aev9$m = Axip1;;) {
    var tqobg_ = oytxb['charAt'](iqtyb);switch (tqobg_) {case '=':
        if (aev9$m === Ayxp1ik) a3vu08 = oytxb['slice'](jnsdh6, iqtyb), aev9$m = Ap831u;else {
          if (aev9$m !== Ao4b_) throw new Error('attribute equal must after attrName');aev9$m = Ap831u;
        }break;case '\x27':case '\x22':
        if (aev9$m === Ap831u || aev9$m === Ayxp1ik) {
          if (aev9$m === Ayxp1ik && (bo_qtx['warning']('attribute value must after "="'), a3vu08 = oytxb['slice'](jnsdh6, iqtyb)), jnsdh6 = iqtyb + 0x1, iqtyb = oytxb['indexOf'](tqobg_, jnsdh6), !(iqtyb > 0x0)) throw new Error('attribute value no end \'' + tqobg_ + '\' match');qgor_ = oytxb['slice'](jnsdh6, iqtyb)['replace'](/&#?\w+;/g, med$n9), rfg4_o['add'](a3vu08, qgor_, jnsdh6 - 0x1), aev9$m = As6zhj;
        } else {
          if (aev9$m != Axik1y) throw new Error('attribute value must after "="');qgor_ = oytxb['slice'](jnsdh6, iqtyb)['replace'](/&#?\w+;/g, med$n9), rfg4_o['add'](a3vu08, qgor_, jnsdh6), bo_qtx['warning']('attribute "' + a3vu08 + '" missed start quot(' + tqobg_ + ')!!'), jnsdh6 = iqtyb + 0x1, aev9$m = As6zhj;
        }break;case '/':
        switch (aev9$m) {case Axip1:
            rfg4_o['setTagName'](oytxb['slice'](jnsdh6, iqtyb));case As6zhj:case Aav038:case Ahljw2:
            aev9$m = Ahljw2, rfg4_o['closed'] = !0x0;case Axik1y:case Ayxp1ik:case Ao4b_:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return bo_qtx['error']('unexpected end of input'), aev9$m == Axip1 && rfg4_o['setTagName'](oytxb['slice'](jnsdh6, iqtyb)), iqtyb;case '>':
        switch (aev9$m) {case Axip1:
            rfg4_o['setTagName'](oytxb['slice'](jnsdh6, iqtyb));case As6zhj:case Aav038:case Ahljw2:
            break;case Axik1y:case Ayxp1ik:
            qgor_ = oytxb['slice'](jnsdh6, iqtyb), '/' === qgor_['slice'](-0x1) && (rfg4_o['closed'] = !0x0, qgor_ = qgor_['slice'](0x0, -0x1));case Ao4b_:
            aev9$m === Ao4b_ && (qgor_ = a3vu08), aev9$m == Axik1y ? (bo_qtx['warning']('attribute "' + qgor_ + '" missed quot(")!!'), rfg4_o['add'](a3vu08, qgor_['replace'](/&#?\w+;/g, med$n9), jnsdh6)) : ('http://www.w3.org/1999/xhtml' === gf4ro_[''] && qgor_['match'](/^(?:disabled|checked|selected)$/i) || bo_qtx['warning']('attribute "' + qgor_ + '" missed value!! "' + qgor_ + '" instead!!'), rfg4_o['add'](qgor_, qgor_, jnsdh6));break;case Ap831u:
            throw new Error('attribute value missed!!');}return iqtyb;case '\u0080':
        tqobg_ = '\x20';default:
        if ('\x20' >= tqobg_) switch (aev9$m) {case Axip1:
            rfg4_o['setTagName'](oytxb['slice'](jnsdh6, iqtyb)), aev9$m = Aav038;break;case Ayxp1ik:
            a3vu08 = oytxb['slice'](jnsdh6, iqtyb), aev9$m = Ao4b_;break;case Axik1y:
            var qgor_ = oytxb['slice'](jnsdh6, iqtyb)['replace'](/&#?\w+;/g, med$n9);bo_qtx['warning']('attribute "' + qgor_ + '" missed quot(")!!'), rfg4_o['add'](a3vu08, qgor_, jnsdh6);case As6zhj:
            aev9$m = Aav038;} else switch (aev9$m) {case Ao4b_:
            {
              rfg4_o['tagName'];
            }'http://www.w3.org/1999/xhtml' === gf4ro_[''] && a3vu08['match'](/^(?:disabled|checked|selected)$/i) || bo_qtx['warning']('attribute "' + a3vu08 + '" missed value!! "' + a3vu08 + '" instead2!!'), rfg4_o['add'](a3vu08, a3vu08, jnsdh6), jnsdh6 = iqtyb, aev9$m = Ayxp1ik;break;case As6zhj:
            bo_qtx['warning']('attribute space is required"' + a3vu08 + '\x22!!');case Aav038:
            aev9$m = Ayxp1ik, jnsdh6 = iqtyb;break;case Ap831u:
            aev9$m = Axik1y, jnsdh6 = iqtyb;break;case Ahljw2:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}iqtyb++;
  }
}function Apxyti(pkix1, grq4_, v8u03) {
  for (var d$msn = pkix1['tagName'], j6ndsm = null, k1yix = pkix1['length']; k1yix--;) {
    var piybx = pkix1[k1yix],
        w6hzs = piybx['qName'],
        g4q_or = piybx['value'],
        b_qtxo = w6hzs['indexOf'](':');if (b_qtxo > 0x0) var _gbq4 = piybx['prefix'] = w6hzs['slice'](0x0, b_qtxo),
        nema9$ = w6hzs['slice'](b_qtxo + 0x1),
        nmeds = 'xmlns' === _gbq4 && nema9$;else nema9$ = w6hzs, _gbq4 = null, nmeds = 'xmlns' === w6hzs && '';piybx['localName'] = nema9$, nmeds !== !0x1 && (null == j6ndsm && (j6ndsm = {}, Aq_gbot(v8u03, v8u03 = {})), v8u03[nmeds] = j6ndsm[nmeds] = g4q_or, piybx['uri'] = 'http://www.w3.org/2000/xmlns/', grq4_['startPrefixMapping'](nmeds, g4q_or));
  }for (var k1yix = pkix1['length']; k1yix--;) {
    piybx = pkix1[k1yix];var _gbq4 = piybx['prefix'];_gbq4 && ('xml' === _gbq4 && (piybx['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== _gbq4 && (piybx['uri'] = v8u03[_gbq4 || '']));
  }var b_qtxo = d$msn['indexOf'](':');b_qtxo > 0x0 ? (_gbq4 = pkix1['prefix'] = d$msn['slice'](0x0, b_qtxo), nema9$ = pkix1['localName'] = d$msn['slice'](b_qtxo + 0x1)) : (_gbq4 = null, nema9$ = pkix1['localName'] = d$msn);var em$9nd = pkix1['uri'] = v8u03[_gbq4 || ''];if (grq4_['startElement'](em$9nd, nema9$, d$msn, pkix1), !pkix1['closed']) return pkix1['currentNSMap'] = v8u03, pkix1['localNSMap'] = j6ndsm, !0x0;if (grq4_['endElement'](em$9nd, nema9$, d$msn), j6ndsm) {
    for (_gbq4 in j6ndsm) grq4_['endPrefixMapping'](_gbq4);
  }
}function Auva830(m9aev$, dmns6j, a8u30, sm6den, lhw) {
  if (/^(?:script|textarea)$/i['test'](a8u30)) {
    var vua380 = m9aev$['indexOf']('</' + a8u30 + '>', dmns6j),
        va3u80 = m9aev$['substring'](dmns6j + 0x1, vua380);if (/[&<]/['test'](va3u80)) return (/^script$/i['test'](a8u30) ? (lhw['characters'](va3u80, 0x0, va3u80['length']), vua380) : (va3u80 = va3u80['replace'](/&#?\w+;/g, sm6den), lhw['characters'](va3u80, 0x0, va3u80['length']), vua380)
    );
  }return dmns6j + 0x1;
}function Aauv83($nm9ea, wh6jsz, xkiy, h6dzj) {
  var j6dzh = h6dzj[xkiy];return null == j6dzh && (j6dzh = $nm9ea['lastIndexOf']('</' + xkiy + '>'), wh6jsz > j6dzh && (j6dzh = $nm9ea['lastIndexOf']('</' + xkiy)), h6dzj[xkiy] = j6dzh), wh6jsz > j6dzh;
}function Aq_gbot(qo_tbg, edsn$m) {
  for (var jhlw6z in qo_tbg) edsn$m[jhlw6z] = qo_tbg[jhlw6z];
}function Ashd6j(ptyixb, $9eva0, btxiy, bxqto_) {
  var yqtob = ptyixb['charAt']($9eva0 + 0x2);switch (yqtob) {case '-':
      if ('-' === ptyixb['charAt']($9eva0 + 0x3)) {
        var aen$ = ptyixb['indexOf']('-->', $9eva0 + 0x4);return aen$ > $9eva0 ? (btxiy['comment'](ptyixb, $9eva0 + 0x4, aen$ - $9eva0 - 0x4), aen$ + 0x3) : (bxqto_['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == ptyixb['substr']($9eva0 + 0x3, 0x6)) {
        var aen$ = ptyixb['indexOf'](']]>', $9eva0 + 0x9);return btxiy['startCDATA'](), btxiy['characters'](ptyixb, $9eva0 + 0x9, aen$ - $9eva0 - 0x9), btxiy['endCDATA'](), aen$ + 0x3;
      }var _gf4ro = Arf_4og(ptyixb, $9eva0),
          oqgb_t = _gf4ro['length'];if (oqgb_t > 0x1 && /!doctype/i['test'](_gf4ro[0x0][0x0])) {
        var n6dshj = _gf4ro[0x1][0x0],
            e0v9$a = oqgb_t > 0x3 && /^public$/i['test'](_gf4ro[0x2][0x0]) && _gf4ro[0x3][0x0],
            tb_xo = oqgb_t > 0x4 && _gf4ro[0x4][0x0],
            xtqyib = _gf4ro[oqgb_t - 0x1];return btxiy['startDTD'](n6dshj, e0v9$a && e0v9$a['replace'](/^(['"])(.*?)\1$/, '$2'), tb_xo && tb_xo['replace'](/^(['"])(.*?)\1$/, '$2')), btxiy['endDTD'](), xtqyib['index'] + xtqyib[0x0]['length'];
      }}return -0x1;
}function Ajl2w(og_f4, a$9mve, jh2lwz) {
  var q_ogtb = og_f4['indexOf']('?>', a$9mve);if (q_ogtb) {
    var av = og_f4['substring'](a$9mve, q_ogtb)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (av) {
      {
        av[0x0]['length'];
      }return jh2lwz['processingInstruction'](av[0x1], av[0x2]), q_ogtb + 0x2;
    }return -0x1;
  }return -0x1;
}function Adhzs6j() {}function Ax_qtb(wzhj, o4q_gb) {
  return wzhj['__proto__'] = o4q_gb, wzhj;
}function Arf_4og(ob_gt, ofg_r) {
  var yxibqt,
      zws6jh = [],
      k1iuy = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (k1iuy['lastIndex'] = ofg_r, k1iuy['exec'](ob_gt); yxibqt = k1iuy['exec'](ob_gt);) if (zws6jh['push'](yxibqt), yxibqt[0x1]) return zws6jh;
}var Atypixb = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    Ahjlz6w = new RegExp('[\\-\\.0-9' + Atypixb['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    Au3pk18 = new RegExp('^' + Atypixb['source'] + Ahjlz6w['source'] + '*(?::' + Atypixb['source'] + Ahjlz6w['source'] + '*)?$'),
    Axip1 = 0x0,
    Ayxp1ik = 0x1,
    Ao4b_ = 0x2,
    Ap831u = 0x3,
    Axik1y = 0x4,
    As6zhj = 0x5,
    Aav038 = 0x6,
    Ahljw2 = 0x7;Ar_g7f['prototype'] = { 'parse': function (ipk31u, u30vk, ybqoxt) {
    var g4f57 = this['domBuilder'];g4f57['startDocument'](), Aq_gbot(u30vk, u30vk = {}), Ad6z(ipk31u, u30vk, ybqoxt, g4f57, this['errorHandler']), g4f57['endDocument']();
  } }, Adhzs6j['prototype'] = { 'setTagName': function (vuk80) {
    if (!Au3pk18['test'](vuk80)) throw new Error('invalid tagName:' + vuk80);this['tagName'] = vuk80;
  }, 'add': function (qobytx, xq_bot, bpx) {
    if (!Au3pk18['test'](qobytx)) throw new Error('invalid attribute:' + qobytx);this[this['length']++] = { 'qName': qobytx, 'value': xq_bot, 'offset': bpx };
  }, 'length': 0x0, 'getLocalName': function (g_f74) {
    return this[g_f74]['localName'];
  }, 'getLocator': function (gfo4_r) {
    return this[gfo4_r]['locator'];
  }, 'getQName': function (o4f_r) {
    return this[o4f_r]['qName'];
  }, 'getURI': function (frg_o4) {
    return this[frg_o4]['uri'];
  }, 'getValue': function (q_gr) {
    return this[q_gr]['value'];
  } }, Ax_qtb({}, Ax_qtb['prototype']) instanceof Ax_qtb || (Ax_qtb = function (u830, k1xiy) {
  function _qotgb() {}_qotgb['prototype'] = k1xiy, _qotgb = new _qotgb();for (k1xiy in u830) _qotgb[k1xiy] = u830[k1xiy];return _qotgb;
}), exports['XMLReader'] = Ar_g7f;