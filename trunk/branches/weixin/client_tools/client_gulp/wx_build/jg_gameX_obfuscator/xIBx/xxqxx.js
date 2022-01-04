var u = wx.$x;
function xms4gx() {}function xew0kbh(ekbwh0, o2zt56, ot5z6, jn9lc, g4sxm) {
  function hpbk0(ujvf) {
    if (ujvf > 0xffff) {
      ujvf -= 0x10000;var bw3k = 0xd800 + (ujvf >> 0xa),
          y987l = 0xdc00 + (0x3ff & ujvf);return String['fromCharCode'](bw3k, y987l);
    }return String['fromCharCode'](ujvf);
  }function eh_paq(cfnlj) {
    var sd4xig = cfnlj['slice'](0x1, -0x1);return sd4xig in ot5z6 ? ot5z6[sd4xig] : '#' === sd4xig['charAt'](0x0) ? hpbk0(parseInt(sd4xig['substr'](0x1)['replace']('x', '0x'))) : (g4sxm['error']('entity not found:' + cfnlj), cfnlj);
  }function c7lf9(ui4gdv) {
    if (ui4gdv > fcujn) {
      var p0bkeh = ekbwh0['substring'](fcujn, ui4gdv)['replace'](/&#?\w+;/g, eh_paq);z2t5 && gmi4s(fcujn), jn9lc['characters'](p0bkeh, 0x0, ui4gdv - fcujn), fcujn = ui4gdv;
    }
  }function gmi4s(h0pbea, b0wehk) {
    for (; h0pbea >= bk0he && (b0wehk = l89f7c['exec'](ekbwh0));) w0ekbh = b0wehk['index'], bk0he = w0ekbh + b0wehk[0x0]['length'], z2t5['lineNumber']++;z2t5['columnNumber'] = h0pbea - w0ekbh + 0x1;
  }for (var w0ekbh = 0x0, bk0he = 0x0, l89f7c = /.*(?:\r\n?|\n)|.*$/g, z2t5 = jn9lc['locator'], vidx = [{ 'currentNSMap': o2zt56 }], l7f9c = {}, fcujn = 0x0;;) {
    try {
      var wkbh0e = ekbwh0['indexOf']('<', fcujn);if (0x0 > wkbh0e) {
        if (!ekbwh0['substr'](fcujn)['match'](/^\s*$/)) {
          var h_qep = jn9lc['doc'],
              xvig = h_qep['createTextNode'](ekbwh0['substr'](fcujn));h_qep['appendChild'](xvig), jn9lc['currentElement'] = xvig;
        }return;
      }switch (wkbh0e > fcujn && c7lf9(wkbh0e), ekbwh0['charAt'](wkbh0e + 0x1)) {case '/':
          var wbtk1 = ekbwh0['indexOf']('>', wkbh0e + 0x3),
              bephk = ekbwh0['substring'](wkbh0e + 0x2, wbtk1),
              ph0kb = vidx['pop']();0x0 > wbtk1 ? (bephk = ekbwh0['substring'](wkbh0e + 0x2)['replace'](/[\s<].*/, ''), g4sxm['error']('end tag name: ' + bephk + ' is not complete:' + ph0kb['tagName']), wbtk1 = wkbh0e + 0x1 + bephk['length']) : bephk['match'](/\s</) && (bephk = bephk['replace'](/[\s<].*/, ''), g4sxm['error']('end tag name: ' + bephk + ' maybe not complete'), wbtk1 = wkbh0e + 0x1 + bephk['length']);var hwk = ph0kb['localNSMap'],
              is4xd = ph0kb['tagName'] == bephk,
              ids4gx = is4xd || ph0kb['tagName'] && ph0kb['tagName']['toLowerCase']() == bephk['toLowerCase']();if (ids4gx) {
            if (jn9lc['endElement'](ph0kb['uri'], ph0kb['localName'], bephk), hwk) {
              for (var mo2z6 in hwk) jn9lc['endPrefixMapping'](mo2z6);
            }is4xd || g4sxm['fatalError']('end tag name: ' + bephk + ' is not match the current start tagName:' + ph0kb['tagName']);
          } else vidx['push'](ph0kb);wbtk1++;break;case '?':
          z2t5 && gmi4s(wkbh0e), wbtk1 = xiuvg(ekbwh0, wkbh0e, jn9lc);break;case '!':
          z2t5 && gmi4s(wkbh0e), wbtk1 = xp0ekhb(ekbwh0, wkbh0e, jn9lc, g4sxm);break;default:
          z2t5 && gmi4s(wkbh0e);var cudnjv = new xvufjcn(),
              h0pb = vidx[vidx['length'] - 0x1]['currentNSMap'],
              wbtk1 = xxvi4gd(ekbwh0, wkbh0e, cudnjv, h0pb, eh_paq, g4sxm),
              jcn9fu = cudnjv['length'];if (!cudnjv['closed'] && xhe0bp(ekbwh0, wbtk1, cudnjv['tagName'], l7f9c) && (cudnjv['closed'] = !0x0, ot5z6['nbsp'] || g4sxm['warning']('unclosed xml attribute')), z2t5 && jcn9fu) {
            for (var cjl7f9 = xndjugv(z2t5, {}), bktw13 = 0x0; jcn9fu > bktw13; bktw13++) {
              var o26zm = cudnjv[bktw13];gmi4s(o26zm['offset']), o26zm['locator'] = xndjugv(z2t5, {});
            }jn9lc['locator'] = cjl7f9, xndguv4(cudnjv, jn9lc, h0pb) && vidx['push'](cudnjv), jn9lc['locator'] = z2t5;
          } else xndguv4(cudnjv, jn9lc, h0pb) && vidx['push'](cudnjv);'http://www.w3.org/1999/xhtml' !== cudnjv['uri'] || cudnjv['closed'] ? wbtk1++ : wbtk1 = xbk301(ekbwh0, wbtk1, cudnjv['tagName'], eh_paq, jn9lc);}
    } catch (m562z) {
      g4sxm['error']('element parse error: ' + m562z), wbtk1 = -0x1;
    }wbtk1 > fcujn ? fcujn = wbtk1 : c7lf9(Math['max'](wkbh0e, fcujn) + 0x1);
  }
}function xndjugv(gdunvj, xmo4) {
  return xmo4['lineNumber'] = gdunvj['lineNumber'], xmo4['columnNumber'] = gdunvj['columnNumber'], xmo4;
}function xxvi4gd(w0k3b1, pa_hqe, bw1tk, cl97j, bhwke, l98cf) {
  for (var xgd4si, o2, arqh_p = ++pa_hqe, rhpq = xzt5326;;) {
    var idvx4 = w0k3b1['charAt'](arqh_p);switch (idvx4) {case '=':
        if (rhpq === xsm4xg) xgd4si = w0k3b1['slice'](pa_hqe, arqh_p), rhpq = xlc9nf;else {
          if (rhpq !== xbw10k3) throw new Error('attribute equal must after attrName');rhpq = xlc9nf;
        }break;case '\x27':case '\x22':
        if (rhpq === xlc9nf || rhpq === xsm4xg) {
          if (rhpq === xsm4xg && (l98cf['warning']('attribute value must after "="'), xgd4si = w0k3b1['slice'](pa_hqe, arqh_p)), pa_hqe = arqh_p + 0x1, arqh_p = w0k3b1['indexOf'](idvx4, pa_hqe), !(arqh_p > 0x0)) throw new Error('attribute value no end \'' + idvx4 + '\' match');o2 = w0k3b1['slice'](pa_hqe, arqh_p)['replace'](/&#?\w+;/g, bhwke), bw1tk['add'](xgd4si, o2, pa_hqe - 0x1), rhpq = xuj9fn;
        } else {
          if (rhpq != xwt136k) throw new Error('attribute value must after "="');o2 = w0k3b1['slice'](pa_hqe, arqh_p)['replace'](/&#?\w+;/g, bhwke), bw1tk['add'](xgd4si, o2, pa_hqe), l98cf['warning']('attribute "' + xgd4si + '" missed start quot(' + idvx4 + ')!!'), pa_hqe = arqh_p + 0x1, rhpq = xuj9fn;
        }break;case '/':
        switch (rhpq) {case xzt5326:
            bw1tk['setTagName'](w0k3b1['slice'](pa_hqe, arqh_p));case xuj9fn:case xcjf9:case xsix4mo:
            rhpq = xsix4mo, bw1tk['closed'] = !0x0;case xwt136k:case xsm4xg:case xbw10k3:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return l98cf['error']('unexpected end of input'), rhpq == xzt5326 && bw1tk['setTagName'](w0k3b1['slice'](pa_hqe, arqh_p)), arqh_p;case '>':
        switch (rhpq) {case xzt5326:
            bw1tk['setTagName'](w0k3b1['slice'](pa_hqe, arqh_p));case xuj9fn:case xcjf9:case xsix4mo:
            break;case xwt136k:case xsm4xg:
            o2 = w0k3b1['slice'](pa_hqe, arqh_p), '/' === o2['slice'](-0x1) && (bw1tk['closed'] = !0x0, o2 = o2['slice'](0x0, -0x1));case xbw10k3:
            rhpq === xbw10k3 && (o2 = xgd4si), rhpq == xwt136k ? (l98cf['warning']('attribute "' + o2 + '" missed quot(")!!'), bw1tk['add'](xgd4si, o2['replace'](/&#?\w+;/g, bhwke), pa_hqe)) : ('http://www.w3.org/1999/xhtml' === cl97j[''] && o2['match'](/^(?:disabled|checked|selected)$/i) || l98cf['warning']('attribute "' + o2 + '" missed value!! "' + o2 + '" instead!!'), bw1tk['add'](o2, o2, pa_hqe));break;case xlc9nf:
            throw new Error('attribute value missed!!');}return arqh_p;case '\u0080':
        idvx4 = '\x20';default:
        if ('\x20' >= idvx4) switch (rhpq) {case xzt5326:
            bw1tk['setTagName'](w0k3b1['slice'](pa_hqe, arqh_p)), rhpq = xcjf9;break;case xsm4xg:
            xgd4si = w0k3b1['slice'](pa_hqe, arqh_p), rhpq = xbw10k3;break;case xwt136k:
            var o2 = w0k3b1['slice'](pa_hqe, arqh_p)['replace'](/&#?\w+;/g, bhwke);l98cf['warning']('attribute "' + o2 + '" missed quot(")!!'), bw1tk['add'](xgd4si, o2, pa_hqe);case xuj9fn:
            rhpq = xcjf9;} else switch (rhpq) {case xbw10k3:
            {
              bw1tk['tagName'];
            }'http://www.w3.org/1999/xhtml' === cl97j[''] && xgd4si['match'](/^(?:disabled|checked|selected)$/i) || l98cf['warning']('attribute "' + xgd4si + '" missed value!! "' + xgd4si + '" instead2!!'), bw1tk['add'](xgd4si, xgd4si, pa_hqe), pa_hqe = arqh_p, rhpq = xsm4xg;break;case xuj9fn:
            l98cf['warning']('attribute space is required"' + xgd4si + '\x22!!');case xcjf9:
            rhpq = xsm4xg, pa_hqe = arqh_p;break;case xlc9nf:
            rhpq = xwt136k, pa_hqe = arqh_p;break;case xsix4mo:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}arqh_p++;
  }
}function xndguv4(qaph0, kt63w, oxsizm) {
  for (var y9l7f8 = qaph0['tagName'], _qepha = null, isx4d = qaph0['length']; isx4d--;) {
    var fncu9 = qaph0[isx4d],
        oz5mxs = fncu9['qName'],
        hebk0w = fncu9['value'],
        givdx = oz5mxs['indexOf'](':');if (givdx > 0x0) var o5sxz = fncu9['prefix'] = oz5mxs['slice'](0x0, givdx),
        kw31b0 = oz5mxs['slice'](givdx + 0x1),
        gud = 'xmlns' === o5sxz && kw31b0;else kw31b0 = oz5mxs, o5sxz = null, gud = 'xmlns' === oz5mxs && '';fncu9['localName'] = kw31b0, gud !== !0x1 && (null == _qepha && (_qepha = {}, xh0q(oxsizm, oxsizm = {})), oxsizm[gud] = _qepha[gud] = hebk0w, fncu9['uri'] = 'http://www.w3.org/2000/xmlns/', kt63w['startPrefixMapping'](gud, hebk0w));
  }for (var isx4d = qaph0['length']; isx4d--;) {
    fncu9 = qaph0[isx4d];var o5sxz = fncu9['prefix'];o5sxz && ('xml' === o5sxz && (fncu9['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== o5sxz && (fncu9['uri'] = oxsizm[o5sxz || '']));
  }var givdx = y9l7f8['indexOf'](':');givdx > 0x0 ? (o5sxz = qaph0['prefix'] = y9l7f8['slice'](0x0, givdx), kw31b0 = qaph0['localName'] = y9l7f8['slice'](givdx + 0x1)) : (o5sxz = null, kw31b0 = qaph0['localName'] = y9l7f8);var mzs52o = qaph0['uri'] = oxsizm[o5sxz || ''];if (kt63w['startElement'](mzs52o, kw31b0, y9l7f8, qaph0), !qaph0['closed']) return qaph0['currentNSMap'] = oxsizm, qaph0['localNSMap'] = _qepha, !0x0;if (kt63w['endElement'](mzs52o, kw31b0, y9l7f8), _qepha) {
    for (o5sxz in _qepha) kt63w['endPrefixMapping'](o5sxz);
  }
}function xbk301(vjdug, nvcju, vg4xd, djnugv, mxsg4i) {
  if (/^(?:script|textarea)$/i['test'](vg4xd)) {
    var w623t = vjdug['indexOf']('</' + vg4xd + '>', nvcju),
        hpae = vjdug['substring'](nvcju + 0x1, w623t);if (/[&<]/['test'](hpae)) return (/^script$/i['test'](vg4xd) ? (mxsg4i['characters'](hpae, 0x0, hpae['length']), w623t) : (hpae = hpae['replace'](/&#?\w+;/g, djnugv), mxsg4i['characters'](hpae, 0x0, hpae['length']), w623t)
    );
  }return nvcju + 0x1;
}function xhe0bp(i4moxs, s4xd, b10, n9lcf) {
  var xszo5 = n9lcf[b10];return null == xszo5 && (xszo5 = i4moxs['lastIndexOf']('</' + b10 + '>'), s4xd > xszo5 && (xszo5 = i4moxs['lastIndexOf']('</' + b10)), n9lcf[b10] = xszo5), s4xd > xszo5;
}function xh0q(ungv4, a0ehbp) {
  for (var x4msgi in ungv4) a0ehbp[x4msgi] = ungv4[x4msgi];
}function xp0ekhb(lfjnc9, e0bk1, x5zsom, isxd) {
  var hap0be = lfjnc9['charAt'](e0bk1 + 0x2);switch (hap0be) {case '-':
      if ('-' === lfjnc9['charAt'](e0bk1 + 0x3)) {
        var hqar_ = lfjnc9['indexOf']('-->', e0bk1 + 0x4);return hqar_ > e0bk1 ? (x5zsom['comment'](lfjnc9, e0bk1 + 0x4, hqar_ - e0bk1 - 0x4), hqar_ + 0x3) : (isxd['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == lfjnc9['substr'](e0bk1 + 0x3, 0x6)) {
        var hqar_ = lfjnc9['indexOf'](']]>', e0bk1 + 0x9);return x5zsom['startCDATA'](), x5zsom['characters'](lfjnc9, e0bk1 + 0x9, hqar_ - e0bk1 - 0x9), x5zsom['endCDATA'](), hqar_ + 0x3;
      }var z6325 = xpa_h(lfjnc9, e0bk1),
          z5mos2 = z6325['length'];if (z5mos2 > 0x1 && /!doctype/i['test'](z6325[0x0][0x0])) {
        var wkb10e = z6325[0x1][0x0],
            t3wkb = z5mos2 > 0x3 && /^public$/i['test'](z6325[0x2][0x0]) && z6325[0x3][0x0],
            ujgvn = z5mos2 > 0x4 && z6325[0x4][0x0],
            w1263t = z6325[z5mos2 - 0x1];return x5zsom['startDTD'](wkb10e, t3wkb && t3wkb['replace'](/^(['"])(.*?)\1$/, '$2'), ujgvn && ujgvn['replace'](/^(['"])(.*?)\1$/, '$2')), x5zsom['endDTD'](), w1263t['index'] + w1263t[0x0]['length'];
      }}return -0x1;
}function xiuvg(gvud4n, nfl9cj, l97fc) {
  var xsziom = gvud4n['indexOf']('?>', nfl9cj);if (xsziom) {
    var lyf798 = gvud4n['substring'](nfl9cj, xsziom)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (lyf798) {
      {
        lyf798[0x0]['length'];
      }return l97fc['processingInstruction'](lyf798[0x1], lyf798[0x2]), xsziom + 0x2;
    }return -0x1;
  }return -0x1;
}function xvufjcn() {}function xjf9nuc(l987$y, t5613) {
  return l987$y['__proto__'] = t5613, l987$y;
}function xpa_h(nujvcf, xv4g) {
  var vncfuj,
      i4dgxv = [],
      whkb = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (whkb['lastIndex'] = xv4g, whkb['exec'](nujvcf); vncfuj = whkb['exec'](nujvcf);) if (i4dgxv['push'](vncfuj), vncfuj[0x1]) return i4dgxv;
}var xb3k1tw = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    xdvnucj = new RegExp('[\\-\\.0-9' + xb3k1tw['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    xe0qpa = new RegExp('^' + xb3k1tw['source'] + xdvnucj['source'] + '*(?::' + xb3k1tw['source'] + xdvnucj['source'] + '*)?$'),
    xzt5326 = 0x0,
    xsm4xg = 0x1,
    xbw10k3 = 0x2,
    xlc9nf = 0x3,
    xwt136k = 0x4,
    xuj9fn = 0x5,
    xcjf9 = 0x6,
    xsix4mo = 0x7;xms4gx['prototype'] = { 'parse': function (cjnfl, f9jcnu, u9njfc) {
    var haqr = this['domBuilder'];haqr['startDocument'](), xh0q(f9jcnu, f9jcnu = {}), xew0kbh(cjnfl, f9jcnu, u9njfc, haqr, this['errorHandler']), haqr['endDocument']();
  } }, xvufjcn['prototype'] = { 'setTagName': function (uvfjn) {
    if (!xe0qpa['test'](uvfjn)) throw new Error('invalid tagName:' + uvfjn);this['tagName'] = uvfjn;
  }, 'add': function (eahpb0, tbk3w1, pha_qr) {
    if (!xe0qpa['test'](eahpb0)) throw new Error('invalid attribute:' + eahpb0);this[this['length']++] = { 'qName': eahpb0, 'value': tbk3w1, 'offset': pha_qr };
  }, 'length': 0x0, 'getLocalName': function (tw6321) {
    return this[tw6321]['localName'];
  }, 'getLocator': function (c9fl7j) {
    return this[c9fl7j]['locator'];
  }, 'getQName': function (g4iduv) {
    return this[g4iduv]['qName'];
  }, 'getURI': function (j79c) {
    return this[j79c]['uri'];
  }, 'getValue': function (b03k1w) {
    return this[b03k1w]['value'];
  } }, xjf9nuc({}, xjf9nuc['prototype']) instanceof xjf9nuc || (xjf9nuc = function (p0heq, ljf79c) {
  function m265zo() {}m265zo['prototype'] = ljf79c, m265zo = new m265zo();for (ljf79c in p0heq) m265zo[ljf79c] = p0heq[ljf79c];return m265zo;
}), exports['XMLReader'] = xms4gx;