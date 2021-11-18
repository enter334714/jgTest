var u = wx.$x;
function xujdng() {}function xsi4dx(zo25ms, o4simx, gxvid4, b3t, xio4sm) {
  function f98ly7(hapqe) {
    if (hapqe > 0xffff) {
      hapqe -= 0x10000;var gdu = 0xd800 + (hapqe >> 0xa),
          omzxi = 0xdc00 + (0x3ff & hapqe);return String['fromCharCode'](gdu, omzxi);
    }return String['fromCharCode'](hapqe);
  }function c9jufn(vcnujf) {
    var hwe0 = vcnujf['slice'](0x1, -0x1);return hwe0 in gxvid4 ? gxvid4[hwe0] : '#' === hwe0['charAt'](0x0) ? f98ly7(parseInt(hwe0['substr'](0x1)['replace']('x', '0x'))) : (xio4sm['error']('entity not found:' + vcnujf), vcnujf);
  }function fcjnu(zo2sm5) {
    if (zo2sm5 > o6z25) {
      var k1w0b = zo25ms['substring'](o6z25, zo2sm5)['replace'](/&#?\w+;/g, c9jufn);mgx4s && he0pkb(o6z25), b3t['characters'](k1w0b, 0x0, zo2sm5 - o6z25), o6z25 = zo2sm5;
    }
  }function he0pkb(eh0ba, h0bpek) {
    for (; eh0ba >= z56mo && (h0bpek = k03b['exec'](zo25ms));) mxiozs = h0bpek['index'], z56mo = mxiozs + h0bpek[0x0]['length'], mgx4s['lineNumber']++;mgx4s['columnNumber'] = eh0ba - mxiozs + 0x1;
  }for (var mxiozs = 0x0, z56mo = 0x0, k03b = /.*(?:\r\n?|\n)|.*$/g, mgx4s = b3t['locator'], t62531 = [{ 'currentNSMap': o4simx }], diuv = {}, o6z25 = 0x0;;) {
    try {
      var d4vn = zo25ms['indexOf']('<', o6z25);if (0x0 > d4vn) {
        if (!zo25ms['substr'](o6z25)['match'](/^\s*$/)) {
          var os5zm = b3t['doc'],
              f9c7 = os5zm['createTextNode'](zo25ms['substr'](o6z25));os5zm['appendChild'](f9c7), b3t['currentElement'] = f9c7;
        }return;
      }switch (d4vn > o6z25 && fcjnu(d4vn), zo25ms['charAt'](d4vn + 0x1)) {case '/':
          var nvujc = zo25ms['indexOf']('>', d4vn + 0x3),
              nu4vgd = zo25ms['substring'](d4vn + 0x2, nvujc),
              e0bph = t62531['pop']();0x0 > nvujc ? (nu4vgd = zo25ms['substring'](d4vn + 0x2)['replace'](/[\s<].*/, ''), xio4sm['error']('end tag name: ' + nu4vgd + ' is not complete:' + e0bph['tagName']), nvujc = d4vn + 0x1 + nu4vgd['length']) : nu4vgd['match'](/\s</) && (nu4vgd = nu4vgd['replace'](/[\s<].*/, ''), xio4sm['error']('end tag name: ' + nu4vgd + ' maybe not complete'), nvujc = d4vn + 0x1 + nu4vgd['length']);var tkwb = e0bph['localNSMap'],
              qehpa_ = e0bph['tagName'] == nu4vgd,
              si4xo = qehpa_ || e0bph['tagName'] && e0bph['tagName']['toLowerCase']() == nu4vgd['toLowerCase']();if (si4xo) {
            if (b3t['endElement'](e0bph['uri'], e0bph['localName'], nu4vgd), tkwb) {
              for (var msioxz in tkwb) b3t['endPrefixMapping'](msioxz);
            }qehpa_ || xio4sm['fatalError']('end tag name: ' + nu4vgd + ' is not match the current start tagName:' + e0bph['tagName']);
          } else t62531['push'](e0bph);nvujc++;break;case '?':
          mgx4s && he0pkb(d4vn), nvujc = xjncu(zo25ms, d4vn, b3t);break;case '!':
          mgx4s && he0pkb(d4vn), nvujc = xw21t6(zo25ms, d4vn, b3t, xio4sm);break;default:
          mgx4s && he0pkb(d4vn);var g4xism = new xidv4(),
              h0ek = t62531[t62531['length'] - 0x1]['currentNSMap'],
              nvujc = xso2m5z(zo25ms, d4vn, g4xism, h0ek, c9jufn, xio4sm),
              msoi4 = g4xism['length'];if (!g4xism['closed'] && xgnjvd(zo25ms, nvujc, g4xism['tagName'], diuv) && (g4xism['closed'] = !0x0, gxvid4['nbsp'] || xio4sm['warning']('unclosed xml attribute')), mgx4s && msoi4) {
            for (var e01w = xigd4xs(mgx4s, {}), nuj9 = 0x0; msoi4 > nuj9; nuj9++) {
              var _eqha = g4xism[nuj9];he0pkb(_eqha['offset']), _eqha['locator'] = xigd4xs(mgx4s, {});
            }b3t['locator'] = e01w, xcfjl9(g4xism, b3t, h0ek) && t62531['push'](g4xism), b3t['locator'] = mgx4s;
          } else xcfjl9(g4xism, b3t, h0ek) && t62531['push'](g4xism);'http://www.w3.org/1999/xhtml' !== g4xism['uri'] || g4xism['closed'] ? nvujc++ : nvujc = xw01ek(zo25ms, nvujc, g4xism['tagName'], c9jufn, b3t);}
    } catch (zs5mo) {
      xio4sm['error']('element parse error: ' + zs5mo), nvujc = -0x1;
    }nvujc > o6z25 ? o6z25 = nvujc : fcjnu(Math['max'](d4vn, o6z25) + 0x1);
  }
}function xigd4xs(zo2t, unvjdc) {
  return unvjdc['lineNumber'] = zo2t['lineNumber'], unvjdc['columnNumber'] = zo2t['columnNumber'], unvjdc;
}function xso2m5z(i4vxdg, vjnf, div4ug, ylf879, jgnvud, nufvcj) {
  for (var eqph_a, mx5oz, wbt3k = ++vjnf, _apqhe = xly98f;;) {
    var bew0k = i4vxdg['charAt'](wbt3k);switch (bew0k) {case '=':
        if (_apqhe === xphke0) eqph_a = i4vxdg['slice'](vjnf, wbt3k), _apqhe = xujcvnf;else {
          if (_apqhe !== xe01b) throw new Error('attribute equal must after attrName');_apqhe = xujcvnf;
        }break;case '\x27':case '\x22':
        if (_apqhe === xujcvnf || _apqhe === xphke0) {
          if (_apqhe === xphke0 && (nufvcj['warning']('attribute value must after "="'), eqph_a = i4vxdg['slice'](vjnf, wbt3k)), vjnf = wbt3k + 0x1, wbt3k = i4vxdg['indexOf'](bew0k, vjnf), !(wbt3k > 0x0)) throw new Error('attribute value no end \'' + bew0k + '\' match');mx5oz = i4vxdg['slice'](vjnf, wbt3k)['replace'](/&#?\w+;/g, jgnvud), div4ug['add'](eqph_a, mx5oz, vjnf - 0x1), _apqhe = xhwkeb0;
        } else {
          if (_apqhe != xrha_) throw new Error('attribute value must after "="');mx5oz = i4vxdg['slice'](vjnf, wbt3k)['replace'](/&#?\w+;/g, jgnvud), div4ug['add'](eqph_a, mx5oz, vjnf), nufvcj['warning']('attribute "' + eqph_a + '" missed start quot(' + bew0k + ')!!'), vjnf = wbt3k + 0x1, _apqhe = xhwkeb0;
        }break;case '/':
        switch (_apqhe) {case xly98f:
            div4ug['setTagName'](i4vxdg['slice'](vjnf, wbt3k));case xhwkeb0:case xxivd4:case xdvgn:
            _apqhe = xdvgn, div4ug['closed'] = !0x0;case xrha_:case xphke0:case xe01b:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return nufvcj['error']('unexpected end of input'), _apqhe == xly98f && div4ug['setTagName'](i4vxdg['slice'](vjnf, wbt3k)), wbt3k;case '>':
        switch (_apqhe) {case xly98f:
            div4ug['setTagName'](i4vxdg['slice'](vjnf, wbt3k));case xhwkeb0:case xxivd4:case xdvgn:
            break;case xrha_:case xphke0:
            mx5oz = i4vxdg['slice'](vjnf, wbt3k), '/' === mx5oz['slice'](-0x1) && (div4ug['closed'] = !0x0, mx5oz = mx5oz['slice'](0x0, -0x1));case xe01b:
            _apqhe === xe01b && (mx5oz = eqph_a), _apqhe == xrha_ ? (nufvcj['warning']('attribute "' + mx5oz + '" missed quot(")!!'), div4ug['add'](eqph_a, mx5oz['replace'](/&#?\w+;/g, jgnvud), vjnf)) : ('http://www.w3.org/1999/xhtml' === ylf879[''] && mx5oz['match'](/^(?:disabled|checked|selected)$/i) || nufvcj['warning']('attribute "' + mx5oz + '" missed value!! "' + mx5oz + '" instead!!'), div4ug['add'](mx5oz, mx5oz, vjnf));break;case xujcvnf:
            throw new Error('attribute value missed!!');}return wbt3k;case '\u0080':
        bew0k = '\x20';default:
        if ('\x20' >= bew0k) switch (_apqhe) {case xly98f:
            div4ug['setTagName'](i4vxdg['slice'](vjnf, wbt3k)), _apqhe = xxivd4;break;case xphke0:
            eqph_a = i4vxdg['slice'](vjnf, wbt3k), _apqhe = xe01b;break;case xrha_:
            var mx5oz = i4vxdg['slice'](vjnf, wbt3k)['replace'](/&#?\w+;/g, jgnvud);nufvcj['warning']('attribute "' + mx5oz + '" missed quot(")!!'), div4ug['add'](eqph_a, mx5oz, vjnf);case xhwkeb0:
            _apqhe = xxivd4;} else switch (_apqhe) {case xe01b:
            {
              div4ug['tagName'];
            }'http://www.w3.org/1999/xhtml' === ylf879[''] && eqph_a['match'](/^(?:disabled|checked|selected)$/i) || nufvcj['warning']('attribute "' + eqph_a + '" missed value!! "' + eqph_a + '" instead2!!'), div4ug['add'](eqph_a, eqph_a, vjnf), vjnf = wbt3k, _apqhe = xphke0;break;case xhwkeb0:
            nufvcj['warning']('attribute space is required"' + eqph_a + '\x22!!');case xxivd4:
            _apqhe = xphke0, vjnf = wbt3k;break;case xujcvnf:
            _apqhe = xrha_, vjnf = wbt3k;break;case xdvgn:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}wbt3k++;
  }
}function xcfjl9(kbe10, ae0pb, _rpqa) {
  for (var p0hb = kbe10['tagName'], q_pahr = null, k10we = kbe10['length']; k10we--;) {
    var hrpa_ = kbe10[k10we],
        vgx = hrpa_['qName'],
        ismo4 = hrpa_['value'],
        ozxms5 = vgx['indexOf'](':');if (ozxms5 > 0x0) var xosmz = hrpa_['prefix'] = vgx['slice'](0x0, ozxms5),
        fnvc = vgx['slice'](ozxms5 + 0x1),
        msx5zo = 'xmlns' === xosmz && fnvc;else fnvc = vgx, xosmz = null, msx5zo = 'xmlns' === vgx && '';hrpa_['localName'] = fnvc, msx5zo !== !0x1 && (null == q_pahr && (q_pahr = {}, xt625o(_rpqa, _rpqa = {})), _rpqa[msx5zo] = q_pahr[msx5zo] = ismo4, hrpa_['uri'] = 'http://www.w3.org/2000/xmlns/', ae0pb['startPrefixMapping'](msx5zo, ismo4));
  }for (var k10we = kbe10['length']; k10we--;) {
    hrpa_ = kbe10[k10we];var xosmz = hrpa_['prefix'];xosmz && ('xml' === xosmz && (hrpa_['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== xosmz && (hrpa_['uri'] = _rpqa[xosmz || '']));
  }var ozxms5 = p0hb['indexOf'](':');ozxms5 > 0x0 ? (xosmz = kbe10['prefix'] = p0hb['slice'](0x0, ozxms5), fnvc = kbe10['localName'] = p0hb['slice'](ozxms5 + 0x1)) : (xosmz = null, fnvc = kbe10['localName'] = p0hb);var uvgdn = kbe10['uri'] = _rpqa[xosmz || ''];if (ae0pb['startElement'](uvgdn, fnvc, p0hb, kbe10), !kbe10['closed']) return kbe10['currentNSMap'] = _rpqa, kbe10['localNSMap'] = q_pahr, !0x0;if (ae0pb['endElement'](uvgdn, fnvc, p0hb), q_pahr) {
    for (xosmz in q_pahr) ae0pb['endPrefixMapping'](xosmz);
  }
}function xw01ek(cufv, v4gud, ixvg4d, eph_a, t5o2) {
  if (/^(?:script|textarea)$/i['test'](ixvg4d)) {
    var jlcf7 = cufv['indexOf']('</' + ixvg4d + '>', v4gud),
        peb0k = cufv['substring'](v4gud + 0x1, jlcf7);if (/[&<]/['test'](peb0k)) return (/^script$/i['test'](ixvg4d) ? (t5o2['characters'](peb0k, 0x0, peb0k['length']), jlcf7) : (peb0k = peb0k['replace'](/&#?\w+;/g, eph_a), t5o2['characters'](peb0k, 0x0, peb0k['length']), jlcf7)
    );
  }return v4gud + 0x1;
}function xgnjvd(tk613w, lcj79, cnfuj, hq_arp) {
  var h0qea = hq_arp[cnfuj];return null == h0qea && (h0qea = tk613w['lastIndexOf']('</' + cnfuj + '>'), lcj79 > h0qea && (h0qea = tk613w['lastIndexOf']('</' + cnfuj)), hq_arp[cnfuj] = h0qea), lcj79 > h0qea;
}function xt625o(vgdjnu, w03b) {
  for (var pa0ehq in vgdjnu) w03b[pa0ehq] = vgdjnu[pa0ehq];
}function xw21t6(k3wb10, n9cjlf, k1e0b, vgixd4) {
  var qe_pha = k3wb10['charAt'](n9cjlf + 0x2);switch (qe_pha) {case '-':
      if ('-' === k3wb10['charAt'](n9cjlf + 0x3)) {
        var gndujv = k3wb10['indexOf']('-->', n9cjlf + 0x4);return gndujv > n9cjlf ? (k1e0b['comment'](k3wb10, n9cjlf + 0x4, gndujv - n9cjlf - 0x4), gndujv + 0x3) : (vgixd4['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == k3wb10['substr'](n9cjlf + 0x3, 0x6)) {
        var gndujv = k3wb10['indexOf'](']]>', n9cjlf + 0x9);return k1e0b['startCDATA'](), k1e0b['characters'](k3wb10, n9cjlf + 0x9, gndujv - n9cjlf - 0x9), k1e0b['endCDATA'](), gndujv + 0x3;
      }var x4idgs = xdxv4i(k3wb10, n9cjlf),
          k0hew = x4idgs['length'];if (k0hew > 0x1 && /!doctype/i['test'](x4idgs[0x0][0x0])) {
        var t63z25 = x4idgs[0x1][0x0],
            t356z2 = k0hew > 0x3 && /^public$/i['test'](x4idgs[0x2][0x0]) && x4idgs[0x3][0x0],
            c79l8f = k0hew > 0x4 && x4idgs[0x4][0x0],
            omsixz = x4idgs[k0hew - 0x1];return k1e0b['startDTD'](t63z25, t356z2 && t356z2['replace'](/^(['"])(.*?)\1$/, '$2'), c79l8f && c79l8f['replace'](/^(['"])(.*?)\1$/, '$2')), k1e0b['endDTD'](), omsixz['index'] + omsixz[0x0]['length'];
      }}return -0x1;
}function xjncu(igsxm4, zm526o, fjuvn) {
  var idxg4 = igsxm4['indexOf']('?>', zm526o);if (idxg4) {
    var r_qap = igsxm4['substring'](zm526o, idxg4)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (r_qap) {
      {
        r_qap[0x0]['length'];
      }return fjuvn['processingInstruction'](r_qap[0x1], r_qap[0x2]), idxg4 + 0x2;
    }return -0x1;
  }return -0x1;
}function xidv4() {}function xducjvn(d4nvu, smo52) {
  return d4nvu['__proto__'] = smo52, d4nvu;
}function xdxv4i($9l7, t253z) {
  var c879,
      gidvx = [],
      xzs5om = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (xzs5om['lastIndex'] = t253z, xzs5om['exec']($9l7); c879 = xzs5om['exec']($9l7);) if (gidvx['push'](c879), c879[0x1]) return gidvx;
}var xm4oix = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    xdgujnv = new RegExp('[\\-\\.0-9' + xm4oix['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    xo4sxim = new RegExp('^' + xm4oix['source'] + xdgujnv['source'] + '*(?::' + xm4oix['source'] + xdgujnv['source'] + '*)?$'),
    xly98f = 0x0,
    xphke0 = 0x1,
    xe01b = 0x2,
    xujcvnf = 0x3,
    xrha_ = 0x4,
    xhwkeb0 = 0x5,
    xxivd4 = 0x6,
    xdvgn = 0x7;xujdng['prototype'] = { 'parse': function (w263t, pqa0, h_praq) {
    var nucjfv = this['domBuilder'];nucjfv['startDocument'](), xt625o(pqa0, pqa0 = {}), xsi4dx(w263t, pqa0, h_praq, nucjfv, this['errorHandler']), nucjfv['endDocument']();
  } }, xidv4['prototype'] = { 'setTagName': function (bhw) {
    if (!xo4sxim['test'](bhw)) throw new Error('invalid tagName:' + bhw);this['tagName'] = bhw;
  }, 'add': function (jcnuvd, xmiso, c89f7) {
    if (!xo4sxim['test'](jcnuvd)) throw new Error('invalid attribute:' + jcnuvd);this[this['length']++] = { 'qName': jcnuvd, 'value': xmiso, 'offset': c89f7 };
  }, 'length': 0x0, 'getLocalName': function (zioxs) {
    return this[zioxs]['localName'];
  }, 'getLocator': function (gv4nd) {
    return this[gv4nd]['locator'];
  }, 'getQName': function (ujvnfc) {
    return this[ujvnfc]['qName'];
  }, 'getURI': function (x4oism) {
    return this[x4oism]['uri'];
  }, 'getValue': function (dugnjv) {
    return this[dugnjv]['value'];
  } }, xducjvn({}, xducjvn['prototype']) instanceof xducjvn || (xducjvn = function (id4gvx, wb0k) {
  function khpbe0() {}khpbe0['prototype'] = wb0k, khpbe0 = new khpbe0();for (wb0k in id4gvx) khpbe0[wb0k] = id4gvx[wb0k];return khpbe0;
}), exports['XMLReader'] = xujdng;