var u = wx.$x;
function xh0ekb() {}function xj7flc(fl7c9, k1w6t3, mo2z5s, haeqp_, vcjufn) {
  function c89f7l(vugn) {
    if (vugn > 0xffff) {
      vugn -= 0x10000;var ae0qph = 0xd800 + (vugn >> 0xa),
          mszixo = 0xdc00 + (0x3ff & vugn);return String['fromCharCode'](ae0qph, mszixo);
    }return String['fromCharCode'](vugn);
  }function vgunjd(kw3t16) {
    var o5mxs = kw3t16['slice'](0x1, -0x1);return o5mxs in mo2z5s ? mo2z5s[o5mxs] : '#' === o5mxs['charAt'](0x0) ? c89f7l(parseInt(o5mxs['substr'](0x1)['replace']('x', '0x'))) : (vcjufn['error']('entity not found:' + kw3t16), kw3t16);
  }function iv4gxd(uvjnfc) {
    if (uvjnfc > dvigx) {
      var vugdi = fl7c9['substring'](dvigx, uvjnfc)['replace'](/&#?\w+;/g, vgunjd);ims4xg && b03(dvigx), haeqp_['characters'](vugdi, 0x0, uvjnfc - dvigx), dvigx = uvjnfc;
    }
  }function b03(_prhaq, gnv4) {
    for (; _prhaq >= hpe_qa && (gnv4 = u4vn['exec'](fl7c9));) lnfc9 = gnv4['index'], hpe_qa = lnfc9 + gnv4[0x0]['length'], ims4xg['lineNumber']++;ims4xg['columnNumber'] = _prhaq - lnfc9 + 0x1;
  }for (var lnfc9 = 0x0, hpe_qa = 0x0, u4vn = /.*(?:\r\n?|\n)|.*$/g, ims4xg = haeqp_['locator'], y9l8 = [{ 'currentNSMap': k1w6t3 }], wh0kb = {}, dvigx = 0x0;;) {
    try {
      var zom265 = fl7c9['indexOf']('<', dvigx);if (0x0 > zom265) {
        if (!fl7c9['substr'](dvigx)['match'](/^\s*$/)) {
          var z526om = haeqp_['doc'],
              ek0hbp = z526om['createTextNode'](fl7c9['substr'](dvigx));z526om['appendChild'](ek0hbp), haeqp_['currentElement'] = ek0hbp;
        }return;
      }switch (zom265 > dvigx && iv4gxd(zom265), fl7c9['charAt'](zom265 + 0x1)) {case '/':
          var bheap0 = fl7c9['indexOf']('>', zom265 + 0x3),
              f87c9l = fl7c9['substring'](zom265 + 0x2, bheap0),
              kewbh = y9l8['pop']();0x0 > bheap0 ? (f87c9l = fl7c9['substring'](zom265 + 0x2)['replace'](/[\s<].*/, ''), vcjufn['error']('end tag name: ' + f87c9l + ' is not complete:' + kewbh['tagName']), bheap0 = zom265 + 0x1 + f87c9l['length']) : f87c9l['match'](/\s</) && (f87c9l = f87c9l['replace'](/[\s<].*/, ''), vcjufn['error']('end tag name: ' + f87c9l + ' maybe not complete'), bheap0 = zom265 + 0x1 + f87c9l['length']);var cfjuvn = kewbh['localNSMap'],
              tk631w = kewbh['tagName'] == f87c9l,
              n9cj = tk631w || kewbh['tagName'] && kewbh['tagName']['toLowerCase']() == f87c9l['toLowerCase']();if (n9cj) {
            if (haeqp_['endElement'](kewbh['uri'], kewbh['localName'], f87c9l), cfjuvn) {
              for (var eb0hkw in cfjuvn) haeqp_['endPrefixMapping'](eb0hkw);
            }tk631w || vcjufn['fatalError']('end tag name: ' + f87c9l + ' is not match the current start tagName:' + kewbh['tagName']);
          } else y9l8['push'](kewbh);bheap0++;break;case '?':
          ims4xg && b03(zom265), bheap0 = xz6ot2(fl7c9, zom265, haeqp_);break;case '!':
          ims4xg && b03(zom265), bheap0 = xbhp0ae(fl7c9, zom265, haeqp_, vcjufn);break;default:
          ims4xg && b03(zom265);var jc79l = new xud4i(),
              eqh_ap = y9l8[y9l8['length'] - 0x1]['currentNSMap'],
              bheap0 = xb13wk0(fl7c9, zom265, jc79l, eqh_ap, vgunjd, vcjufn),
              lf79c8 = jc79l['length'];if (!jc79l['closed'] && xigd4s(fl7c9, bheap0, jc79l['tagName'], wh0kb) && (jc79l['closed'] = !0x0, mo2z5s['nbsp'] || vcjufn['warning']('unclosed xml attribute')), ims4xg && lf79c8) {
            for (var u4ngdv = xivg4(ims4xg, {}), k31wb0 = 0x0; lf79c8 > k31wb0; k31wb0++) {
              var oz5xs = jc79l[k31wb0];b03(oz5xs['offset']), oz5xs['locator'] = xivg4(ims4xg, {});
            }haeqp_['locator'] = u4ngdv, xlf987y(jc79l, haeqp_, eqh_ap) && y9l8['push'](jc79l), haeqp_['locator'] = ims4xg;
          } else xlf987y(jc79l, haeqp_, eqh_ap) && y9l8['push'](jc79l);'http://www.w3.org/1999/xhtml' !== jc79l['uri'] || jc79l['closed'] ? bheap0++ : bheap0 = xbpke0(fl7c9, bheap0, jc79l['tagName'], vgunjd, haeqp_);}
    } catch (fy9l78) {
      vcjufn['error']('element parse error: ' + fy9l78), bheap0 = -0x1;
    }bheap0 > dvigx ? dvigx = bheap0 : iv4gxd(Math['max'](zom265, dvigx) + 0x1);
  }
}function xivg4(t261w, gv4xi) {
  return gv4xi['lineNumber'] = t261w['lineNumber'], gv4xi['columnNumber'] = t261w['columnNumber'], gv4xi;
}function xb13wk0(x4igd, cf798, bktw1, t5126, n4ug, g4sim) {
  for (var $879ly, x4sgd, zxsmoi = ++cf798, hpb0a = xgudi4v;;) {
    var jvdnc = x4igd['charAt'](zxsmoi);switch (jvdnc) {case '=':
        if (hpb0a === xsmo52z) $879ly = x4igd['slice'](cf798, zxsmoi), hpb0a = xujvncd;else {
          if (hpb0a !== xo526t) throw new Error('attribute equal must after attrName');hpb0a = xujvncd;
        }break;case '\x27':case '\x22':
        if (hpb0a === xujvncd || hpb0a === xsmo52z) {
          if (hpb0a === xsmo52z && (g4sim['warning']('attribute value must after "="'), $879ly = x4igd['slice'](cf798, zxsmoi)), cf798 = zxsmoi + 0x1, zxsmoi = x4igd['indexOf'](jvdnc, cf798), !(zxsmoi > 0x0)) throw new Error('attribute value no end \'' + jvdnc + '\' match');x4sgd = x4igd['slice'](cf798, zxsmoi)['replace'](/&#?\w+;/g, n4ug), bktw1['add']($879ly, x4sgd, cf798 - 0x1), hpb0a = xehkp;
        } else {
          if (hpb0a != xq0heap) throw new Error('attribute value must after "="');x4sgd = x4igd['slice'](cf798, zxsmoi)['replace'](/&#?\w+;/g, n4ug), bktw1['add']($879ly, x4sgd, cf798), g4sim['warning']('attribute "' + $879ly + '" missed start quot(' + jvdnc + ')!!'), cf798 = zxsmoi + 0x1, hpb0a = xehkp;
        }break;case '/':
        switch (hpb0a) {case xgudi4v:
            bktw1['setTagName'](x4igd['slice'](cf798, zxsmoi));case xehkp:case xy78l$:case xq_hape:
            hpb0a = xq_hape, bktw1['closed'] = !0x0;case xq0heap:case xsmo52z:case xo526t:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return g4sim['error']('unexpected end of input'), hpb0a == xgudi4v && bktw1['setTagName'](x4igd['slice'](cf798, zxsmoi)), zxsmoi;case '>':
        switch (hpb0a) {case xgudi4v:
            bktw1['setTagName'](x4igd['slice'](cf798, zxsmoi));case xehkp:case xy78l$:case xq_hape:
            break;case xq0heap:case xsmo52z:
            x4sgd = x4igd['slice'](cf798, zxsmoi), '/' === x4sgd['slice'](-0x1) && (bktw1['closed'] = !0x0, x4sgd = x4sgd['slice'](0x0, -0x1));case xo526t:
            hpb0a === xo526t && (x4sgd = $879ly), hpb0a == xq0heap ? (g4sim['warning']('attribute "' + x4sgd + '" missed quot(")!!'), bktw1['add']($879ly, x4sgd['replace'](/&#?\w+;/g, n4ug), cf798)) : ('http://www.w3.org/1999/xhtml' === t5126[''] && x4sgd['match'](/^(?:disabled|checked|selected)$/i) || g4sim['warning']('attribute "' + x4sgd + '" missed value!! "' + x4sgd + '" instead!!'), bktw1['add'](x4sgd, x4sgd, cf798));break;case xujvncd:
            throw new Error('attribute value missed!!');}return zxsmoi;case '\u0080':
        jvdnc = '\x20';default:
        if ('\x20' >= jvdnc) switch (hpb0a) {case xgudi4v:
            bktw1['setTagName'](x4igd['slice'](cf798, zxsmoi)), hpb0a = xy78l$;break;case xsmo52z:
            $879ly = x4igd['slice'](cf798, zxsmoi), hpb0a = xo526t;break;case xq0heap:
            var x4sgd = x4igd['slice'](cf798, zxsmoi)['replace'](/&#?\w+;/g, n4ug);g4sim['warning']('attribute "' + x4sgd + '" missed quot(")!!'), bktw1['add']($879ly, x4sgd, cf798);case xehkp:
            hpb0a = xy78l$;} else switch (hpb0a) {case xo526t:
            {
              bktw1['tagName'];
            }'http://www.w3.org/1999/xhtml' === t5126[''] && $879ly['match'](/^(?:disabled|checked|selected)$/i) || g4sim['warning']('attribute "' + $879ly + '" missed value!! "' + $879ly + '" instead2!!'), bktw1['add']($879ly, $879ly, cf798), cf798 = zxsmoi, hpb0a = xsmo52z;break;case xehkp:
            g4sim['warning']('attribute space is required"' + $879ly + '\x22!!');case xy78l$:
            hpb0a = xsmo52z, cf798 = zxsmoi;break;case xujvncd:
            hpb0a = xq0heap, cf798 = zxsmoi;break;case xq_hape:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}zxsmoi++;
  }
}function xlf987y(ktwb, ndcujv, twkb3) {
  for (var c9junf = ktwb['tagName'], l79f8 = null, tz26o = ktwb['length']; tz26o--;) {
    var hpq = ktwb[tz26o],
        jf7l9c = hpq['qName'],
        vnudg = hpq['value'],
        gdvun = jf7l9c['indexOf'](':');if (gdvun > 0x0) var zt562 = hpq['prefix'] = jf7l9c['slice'](0x0, gdvun),
        zoms2 = jf7l9c['slice'](gdvun + 0x1),
        qhpa_ = 'xmlns' === zt562 && zoms2;else zoms2 = jf7l9c, zt562 = null, qhpa_ = 'xmlns' === jf7l9c && '';hpq['localName'] = zoms2, qhpa_ !== !0x1 && (null == l79f8 && (l79f8 = {}, xxiso4(twkb3, twkb3 = {})), twkb3[qhpa_] = l79f8[qhpa_] = vnudg, hpq['uri'] = 'http://www.w3.org/2000/xmlns/', ndcujv['startPrefixMapping'](qhpa_, vnudg));
  }for (var tz26o = ktwb['length']; tz26o--;) {
    hpq = ktwb[tz26o];var zt562 = hpq['prefix'];zt562 && ('xml' === zt562 && (hpq['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== zt562 && (hpq['uri'] = twkb3[zt562 || '']));
  }var gdvun = c9junf['indexOf'](':');gdvun > 0x0 ? (zt562 = ktwb['prefix'] = c9junf['slice'](0x0, gdvun), zoms2 = ktwb['localName'] = c9junf['slice'](gdvun + 0x1)) : (zt562 = null, zoms2 = ktwb['localName'] = c9junf);var w03k = ktwb['uri'] = twkb3[zt562 || ''];if (ndcujv['startElement'](w03k, zoms2, c9junf, ktwb), !ktwb['closed']) return ktwb['currentNSMap'] = twkb3, ktwb['localNSMap'] = l79f8, !0x0;if (ndcujv['endElement'](w03k, zoms2, c9junf), l79f8) {
    for (zt562 in l79f8) ndcujv['endPrefixMapping'](zt562);
  }
}function xbpke0(cnvju, i4sx, zom5, gvd4iu, epa0q) {
  if (/^(?:script|textarea)$/i['test'](zom5)) {
    var cjf7 = cnvju['indexOf']('</' + zom5 + '>', i4sx),
        vugd = cnvju['substring'](i4sx + 0x1, cjf7);if (/[&<]/['test'](vugd)) return (/^script$/i['test'](zom5) ? (epa0q['characters'](vugd, 0x0, vugd['length']), cjf7) : (vugd = vugd['replace'](/&#?\w+;/g, gvd4iu), epa0q['characters'](vugd, 0x0, vugd['length']), cjf7)
    );
  }return i4sx + 0x1;
}function xigd4s(omz256, sidx, hbk0e, m25zo6) {
  var wtk = m25zo6[hbk0e];return null == wtk && (wtk = omz256['lastIndexOf']('</' + hbk0e + '>'), sidx > wtk && (wtk = omz256['lastIndexOf']('</' + hbk0e)), m25zo6[hbk0e] = wtk), sidx > wtk;
}function xxiso4(wkb013, uvdi) {
  for (var x5zsom in wkb013) uvdi[x5zsom] = wkb013[x5zsom];
}function xbhp0ae(ah_r, h0ebwk, u9nfc, f98) {
  var jfnlc = ah_r['charAt'](h0ebwk + 0x2);switch (jfnlc) {case '-':
      if ('-' === ah_r['charAt'](h0ebwk + 0x3)) {
        var isx4 = ah_r['indexOf']('-->', h0ebwk + 0x4);return isx4 > h0ebwk ? (u9nfc['comment'](ah_r, h0ebwk + 0x4, isx4 - h0ebwk - 0x4), isx4 + 0x3) : (f98['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == ah_r['substr'](h0ebwk + 0x3, 0x6)) {
        var isx4 = ah_r['indexOf'](']]>', h0ebwk + 0x9);return u9nfc['startCDATA'](), u9nfc['characters'](ah_r, h0ebwk + 0x9, isx4 - h0ebwk - 0x9), u9nfc['endCDATA'](), isx4 + 0x3;
      }var jlc9nf = xpbh0(ah_r, h0ebwk),
          m2o5s = jlc9nf['length'];if (m2o5s > 0x1 && /!doctype/i['test'](jlc9nf[0x0][0x0])) {
        var duvn4 = jlc9nf[0x1][0x0],
            t3wk = m2o5s > 0x3 && /^public$/i['test'](jlc9nf[0x2][0x0]) && jlc9nf[0x3][0x0],
            pqa0e = m2o5s > 0x4 && jlc9nf[0x4][0x0],
            sxi4mo = jlc9nf[m2o5s - 0x1];return u9nfc['startDTD'](duvn4, t3wk && t3wk['replace'](/^(['"])(.*?)\1$/, '$2'), pqa0e && pqa0e['replace'](/^(['"])(.*?)\1$/, '$2')), u9nfc['endDTD'](), sxi4mo['index'] + sxi4mo[0x0]['length'];
      }}return -0x1;
}function xz6ot2(fl9y8, ufcj9n, nvdjug) {
  var b0whe = fl9y8['indexOf']('?>', ufcj9n);if (b0whe) {
    var v4iud = fl9y8['substring'](ufcj9n, b0whe)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (v4iud) {
      {
        v4iud[0x0]['length'];
      }return nvdjug['processingInstruction'](v4iud[0x1], v4iud[0x2]), b0whe + 0x2;
    }return -0x1;
  }return -0x1;
}function xud4i() {}function xdun4v(zto562, dgvi) {
  return zto562['__proto__'] = dgvi, zto562;
}function xpbh0(gvnduj, i4d) {
  var ew0kbh,
      bt31w = [],
      s4xmig = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (s4xmig['lastIndex'] = i4d, s4xmig['exec'](gvnduj); ew0kbh = s4xmig['exec'](gvnduj);) if (bt31w['push'](ew0kbh), ew0kbh[0x1]) return bt31w;
}var xgdvxi = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    xpe_h = new RegExp('[\\-\\.0-9' + xgdvxi['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    xwt61k3 = new RegExp('^' + xgdvxi['source'] + xpe_h['source'] + '*(?::' + xgdvxi['source'] + xpe_h['source'] + '*)?$'),
    xgudi4v = 0x0,
    xsmo52z = 0x1,
    xo526t = 0x2,
    xujvncd = 0x3,
    xq0heap = 0x4,
    xehkp = 0x5,
    xy78l$ = 0x6,
    xq_hape = 0x7;xh0ekb['prototype'] = { 'parse': function (h0kep, dsig, xs5omz) {
    var s2moz = this['domBuilder'];s2moz['startDocument'](), xxiso4(dsig, dsig = {}), xj7flc(h0kep, dsig, xs5omz, s2moz, this['errorHandler']), s2moz['endDocument']();
  } }, xud4i['prototype'] = { 'setTagName': function (paqrh) {
    if (!xwt61k3['test'](paqrh)) throw new Error('invalid tagName:' + paqrh);this['tagName'] = paqrh;
  }, 'add': function (s2mzo5, g4vdix, bhpe0k) {
    if (!xwt61k3['test'](s2mzo5)) throw new Error('invalid attribute:' + s2mzo5);this[this['length']++] = { 'qName': s2mzo5, 'value': g4vdix, 'offset': bhpe0k };
  }, 'length': 0x0, 'getLocalName': function (u4vdg) {
    return this[u4vdg]['localName'];
  }, 'getLocator': function (e0qap) {
    return this[e0qap]['locator'];
  }, 'getQName': function (fnc9uj) {
    return this[fnc9uj]['qName'];
  }, 'getURI': function (eph0q) {
    return this[eph0q]['uri'];
  }, 'getValue': function (bwk031) {
    return this[bwk031]['value'];
  } }, xdun4v({}, xdun4v['prototype']) instanceof xdun4v || (xdun4v = function (kw3t, vugn4d) {
  function n9ufc() {}n9ufc['prototype'] = vugn4d, n9ufc = new n9ufc();for (vugn4d in kw3t) n9ufc[vugn4d] = kw3t[vugn4d];return n9ufc;
}), exports['XMLReader'] = xh0ekb;