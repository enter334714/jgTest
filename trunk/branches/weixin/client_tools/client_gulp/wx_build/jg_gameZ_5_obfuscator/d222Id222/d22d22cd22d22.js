var F = wx.$D;
function Dwtvqk() {}function Dsqwev(s30c, ozil_m, hrz21n, ajxwk6, fub39p) {
  function mojg5(rlz2) {
    if (rlz2 > 0xffff) {
      rlz2 -= 0x10000;var p3cu = 0xd800 + (rlz2 >> 0xa),
          kj6 = 0xdc00 + (0x3ff & rlz2);return String['fromCharCode'](p3cu, kj6);
    }return String['fromCharCode'](rlz2);
  }function gm5oa(etwq) {
    var ve0tsc = etwq['slice'](0x1, -0x1);return ve0tsc in hrz21n ? hrz21n[ve0tsc] : '#' === ve0tsc['charAt'](0x0) ? mojg5(parseInt(ve0tsc['substr'](0x1)['replace']('x', '0x'))) : (fub39p['error']('entity not found:' + etwq), etwq);
  }function cues03(gm_5lo) {
    if (gm_5lo > p974b) {
      var up39 = s30c['substring'](p974b, gm_5lo)['replace'](/&#?\w+;/g, gm5oa);pb9f7u && kgj6(p974b), ajxwk6['characters'](up39, 0x0, gm_5lo - p974b), p974b = gm_5lo;
    }
  }function kgj6(jkxwq, x6jka) {
    for (; jkxwq >= up93fb && (x6jka = up93bf['exec'](s30c));) wvtsq = x6jka['index'], up93fb = wvtsq + x6jka[0x0]['length'], pb9f7u['lineNumber']++;pb9f7u['columnNumber'] = jkxwq - wvtsq + 0x1;
  }for (var wvtsq = 0x0, up93fb = 0x0, up93bf = /.*(?:\r\n?|\n)|.*$/g, pb9f7u = ajxwk6['locator'], qxv6 = [{ 'currentNSMap': ozil_m }], sqtwe = {}, p974b = 0x0;;) {
    try {
      var ihz2r1 = s30c['indexOf']('<', p974b);if (0x0 > ihz2r1) {
        if (!s30c['substr'](p974b)['match'](/^\s*$/)) {
          var vwsqtk = ajxwk6['doc'],
              ga5xj = vwsqtk['createTextNode'](s30c['substr'](p974b));vwsqtk['appendChild'](ga5xj), ajxwk6['currentElement'] = ga5xj;
        }return;
      }switch (ihz2r1 > p974b && cues03(ihz2r1), s30c['charAt'](ihz2r1 + 0x1)) {case '/':
          var m5xjga = s30c['indexOf']('>', ihz2r1 + 0x3),
              mg_o5 = s30c['substring'](ihz2r1 + 0x2, m5xjga),
              ce0vt = qxv6['pop']();0x0 > m5xjga ? (mg_o5 = s30c['substring'](ihz2r1 + 0x2)['replace'](/[\s<].*/, ''), fub39p['error']('end tag name: ' + mg_o5 + ' is not complete:' + ce0vt['tagName']), m5xjga = ihz2r1 + 0x1 + mg_o5['length']) : mg_o5['match'](/\s</) && (mg_o5 = mg_o5['replace'](/[\s<].*/, ''), fub39p['error']('end tag name: ' + mg_o5 + ' maybe not complete'), m5xjga = ihz2r1 + 0x1 + mg_o5['length']);var vqswet = ce0vt['localNSMap'],
              kjx6w = ce0vt['tagName'] == mg_o5,
              nrh1z = kjx6w || ce0vt['tagName'] && ce0vt['tagName']['toLowerCase']() == mg_o5['toLowerCase']();if (nrh1z) {
            if (ajxwk6['endElement'](ce0vt['uri'], ce0vt['localName'], mg_o5), vqswet) {
              for (var nzr2 in vqswet) ajxwk6['endPrefixMapping'](nzr2);
            }kjx6w || fub39p['fatalError']('end tag name: ' + mg_o5 + ' is not match the current start tagName:' + ce0vt['tagName']);
          } else qxv6['push'](ce0vt);m5xjga++;break;case '?':
          pb9f7u && kgj6(ihz2r1), m5xjga = Dkt(s30c, ihz2r1, ajxwk6);break;case '!':
          pb9f7u && kgj6(ihz2r1), m5xjga = Dpub39c(s30c, ihz2r1, ajxwk6, fub39p);break;default:
          pb9f7u && kgj6(ihz2r1);var g5a6jx = new Dqxkwv6(),
              z1n = qxv6[qxv6['length'] - 0x1]['currentNSMap'],
              m5xjga = Dxa5gjm(s30c, ihz2r1, g5a6jx, z1n, gm5oa, fub39p),
              ctsv = g5a6jx['length'];if (!g5a6jx['closed'] && Doz_li(s30c, m5xjga, g5a6jx['tagName'], sqtwe) && (g5a6jx['closed'] = !0x0, hrz21n['nbsp'] || fub39p['warning']('unclosed xml attribute')), pb9f7u && ctsv) {
            for (var hriz2_ = Dfu9p3(pb9f7u, {}), izl_r2 = 0x0; ctsv > izl_r2; izl_r2++) {
              var qstvw = g5a6jx[izl_r2];kgj6(qstvw['offset']), qstvw['locator'] = Dfu9p3(pb9f7u, {});
            }ajxwk6['locator'] = hriz2_, De0ucs(g5a6jx, ajxwk6, z1n) && qxv6['push'](g5a6jx), ajxwk6['locator'] = pb9f7u;
          } else De0ucs(g5a6jx, ajxwk6, z1n) && qxv6['push'](g5a6jx);'http://www.w3.org/1999/xhtml' !== g5a6jx['uri'] || g5a6jx['closed'] ? m5xjga++ : m5xjga = Dgl_om(s30c, m5xjga, g5a6jx['tagName'], gm5oa, ajxwk6);}
    } catch (p794) {
      fub39p['error']('element parse error: ' + p794), m5xjga = -0x1;
    }m5xjga > p974b ? p974b = m5xjga : cues03(Math['max'](ihz2r1, p974b) + 0x1);
  }
}function Dfu9p3(p7f49b, $1hn8y) {
  return $1hn8y['lineNumber'] = p7f49b['lineNumber'], $1hn8y['columnNumber'] = p7f49b['columnNumber'], $1hn8y;
}function Dxa5gjm(izo_l, t0s3e, gjmxa5, jxga, rzl2_, eqvst0) {
  for (var ubcp39, c93ubp, a6wjx = ++t0s3e, r2ihz_ = Dlgo_5;;) {
    var lzmi_ = izo_l['charAt'](a6wjx);switch (lzmi_) {case '=':
        if (r2ihz_ === Dxgjak6) ubcp39 = izo_l['slice'](t0s3e, a6wjx), r2ihz_ = Dxj56ag;else {
          if (r2ihz_ !== Dufpb79) throw new Error('attribute equal must after attrName');r2ihz_ = Dxj56ag;
        }break;case '\x27':case '\x22':
        if (r2ihz_ === Dxj56ag || r2ihz_ === Dxgjak6) {
          if (r2ihz_ === Dxgjak6 && (eqvst0['warning']('attribute value must after "="'), ubcp39 = izo_l['slice'](t0s3e, a6wjx)), t0s3e = a6wjx + 0x1, a6wjx = izo_l['indexOf'](lzmi_, t0s3e), !(a6wjx > 0x0)) throw new Error('attribute value no end \'' + lzmi_ + '\' match');c93ubp = izo_l['slice'](t0s3e, a6wjx)['replace'](/&#?\w+;/g, rzl2_), gjmxa5['add'](ubcp39, c93ubp, t0s3e - 0x1), r2ihz_ = Dtsecv;
        } else {
          if (r2ihz_ != Detc0v) throw new Error('attribute value must after "="');c93ubp = izo_l['slice'](t0s3e, a6wjx)['replace'](/&#?\w+;/g, rzl2_), gjmxa5['add'](ubcp39, c93ubp, t0s3e), eqvst0['warning']('attribute "' + ubcp39 + '" missed start quot(' + lzmi_ + ')!!'), t0s3e = a6wjx + 0x1, r2ihz_ = Dtsecv;
        }break;case '/':
        switch (r2ihz_) {case Dlgo_5:
            gjmxa5['setTagName'](izo_l['slice'](t0s3e, a6wjx));case Dtsecv:case Dtwevsq:case Dpu39fb:
            r2ihz_ = Dpu39fb, gjmxa5['closed'] = !0x0;case Detc0v:case Dxgjak6:case Dufpb79:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return eqvst0['error']('unexpected end of input'), r2ihz_ == Dlgo_5 && gjmxa5['setTagName'](izo_l['slice'](t0s3e, a6wjx)), a6wjx;case '>':
        switch (r2ihz_) {case Dlgo_5:
            gjmxa5['setTagName'](izo_l['slice'](t0s3e, a6wjx));case Dtsecv:case Dtwevsq:case Dpu39fb:
            break;case Detc0v:case Dxgjak6:
            c93ubp = izo_l['slice'](t0s3e, a6wjx), '/' === c93ubp['slice'](-0x1) && (gjmxa5['closed'] = !0x0, c93ubp = c93ubp['slice'](0x0, -0x1));case Dufpb79:
            r2ihz_ === Dufpb79 && (c93ubp = ubcp39), r2ihz_ == Detc0v ? (eqvst0['warning']('attribute "' + c93ubp + '" missed quot(")!!'), gjmxa5['add'](ubcp39, c93ubp['replace'](/&#?\w+;/g, rzl2_), t0s3e)) : ('http://www.w3.org/1999/xhtml' === jxga[''] && c93ubp['match'](/^(?:disabled|checked|selected)$/i) || eqvst0['warning']('attribute "' + c93ubp + '" missed value!! "' + c93ubp + '" instead!!'), gjmxa5['add'](c93ubp, c93ubp, t0s3e));break;case Dxj56ag:
            throw new Error('attribute value missed!!');}return a6wjx;case '\u0080':
        lzmi_ = '\x20';default:
        if ('\x20' >= lzmi_) switch (r2ihz_) {case Dlgo_5:
            gjmxa5['setTagName'](izo_l['slice'](t0s3e, a6wjx)), r2ihz_ = Dtwevsq;break;case Dxgjak6:
            ubcp39 = izo_l['slice'](t0s3e, a6wjx), r2ihz_ = Dufpb79;break;case Detc0v:
            var c93ubp = izo_l['slice'](t0s3e, a6wjx)['replace'](/&#?\w+;/g, rzl2_);eqvst0['warning']('attribute "' + c93ubp + '" missed quot(")!!'), gjmxa5['add'](ubcp39, c93ubp, t0s3e);case Dtsecv:
            r2ihz_ = Dtwevsq;} else switch (r2ihz_) {case Dufpb79:
            {
              gjmxa5['tagName'];
            }'http://www.w3.org/1999/xhtml' === jxga[''] && ubcp39['match'](/^(?:disabled|checked|selected)$/i) || eqvst0['warning']('attribute "' + ubcp39 + '" missed value!! "' + ubcp39 + '" instead2!!'), gjmxa5['add'](ubcp39, ubcp39, t0s3e), t0s3e = a6wjx, r2ihz_ = Dxgjak6;break;case Dtsecv:
            eqvst0['warning']('attribute space is required"' + ubcp39 + '\x22!!');case Dtwevsq:
            r2ihz_ = Dxgjak6, t0s3e = a6wjx;break;case Dxj56ag:
            r2ihz_ = Detc0v, t0s3e = a6wjx;break;case Dpu39fb:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}a6wjx++;
  }
}function De0ucs(wsqkt, buc, hiz2_r) {
  for (var p0eu3c = wsqkt['tagName'], axjkg6 = null, ogm5 = wsqkt['length']; ogm5--;) {
    var j6qwk = wsqkt[ogm5],
        ewqtv = j6qwk['qName'],
        qe0vst = j6qwk['value'],
        o5_mlg = ewqtv['indexOf'](':');if (o5_mlg > 0x0) var mjao5g = j6qwk['prefix'] = ewqtv['slice'](0x0, o5_mlg),
        c0ubp = ewqtv['slice'](o5_mlg + 0x1),
        rz_hi2 = 'xmlns' === mjao5g && c0ubp;else c0ubp = ewqtv, mjao5g = null, rz_hi2 = 'xmlns' === ewqtv && '';j6qwk['localName'] = c0ubp, rz_hi2 !== !0x1 && (null == axjkg6 && (axjkg6 = {}, Dr2n1(hiz2_r, hiz2_r = {})), hiz2_r[rz_hi2] = axjkg6[rz_hi2] = qe0vst, j6qwk['uri'] = 'http://www.w3.org/2000/xmlns/', buc['startPrefixMapping'](rz_hi2, qe0vst));
  }for (var ogm5 = wsqkt['length']; ogm5--;) {
    j6qwk = wsqkt[ogm5];var mjao5g = j6qwk['prefix'];mjao5g && ('xml' === mjao5g && (j6qwk['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== mjao5g && (j6qwk['uri'] = hiz2_r[mjao5g || '']));
  }var o5_mlg = p0eu3c['indexOf'](':');o5_mlg > 0x0 ? (mjao5g = wsqkt['prefix'] = p0eu3c['slice'](0x0, o5_mlg), c0ubp = wsqkt['localName'] = p0eu3c['slice'](o5_mlg + 0x1)) : (mjao5g = null, c0ubp = wsqkt['localName'] = p0eu3c);var vtqksw = wsqkt['uri'] = hiz2_r[mjao5g || ''];if (buc['startElement'](vtqksw, c0ubp, p0eu3c, wsqkt), !wsqkt['closed']) return wsqkt['currentNSMap'] = hiz2_r, wsqkt['localNSMap'] = axjkg6, !0x0;if (buc['endElement'](vtqksw, c0ubp, p0eu3c), axjkg6) {
    for (mjao5g in axjkg6) buc['endPrefixMapping'](mjao5g);
  }
}function Dgl_om(cuse3, oir_l, zi_lo, bp47, rli2) {
  if (/^(?:script|textarea)$/i['test'](zi_lo)) {
    var j5ax6g = cuse3['indexOf']('</' + zi_lo + '>', oir_l),
        rhn128 = cuse3['substring'](oir_l + 0x1, j5ax6g);if (/[&<]/['test'](rhn128)) return (/^script$/i['test'](zi_lo) ? (rli2['characters'](rhn128, 0x0, rhn128['length']), j5ax6g) : (rhn128 = rhn128['replace'](/&#?\w+;/g, bp47), rli2['characters'](rhn128, 0x0, rhn128['length']), j5ax6g)
    );
  }return oir_l + 0x1;
}function Doz_li(agxmj5, kqsw, ir_ol, aogjm5) {
  var kxwvq = aogjm5[ir_ol];return null == kxwvq && (kxwvq = agxmj5['lastIndexOf']('</' + ir_ol + '>'), kqsw > kxwvq && (kxwvq = agxmj5['lastIndexOf']('</' + ir_ol)), aogjm5[ir_ol] = kxwvq), kqsw > kxwvq;
}function Dr2n1(xm5ajg, x5ag) {
  for (var vstk in xm5ajg) x5ag[vstk] = xm5ajg[vstk];
}function Dpub39c(ojmg5, ecup, hzi1, evt) {
  var lzo_ = ojmg5['charAt'](ecup + 0x2);switch (lzo_) {case '-':
      if ('-' === ojmg5['charAt'](ecup + 0x3)) {
        var _rh2zi = ojmg5['indexOf']('-->', ecup + 0x4);return _rh2zi > ecup ? (hzi1['comment'](ojmg5, ecup + 0x4, _rh2zi - ecup - 0x4), _rh2zi + 0x3) : (evt['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == ojmg5['substr'](ecup + 0x3, 0x6)) {
        var _rh2zi = ojmg5['indexOf'](']]>', ecup + 0x9);return hzi1['startCDATA'](), hzi1['characters'](ojmg5, ecup + 0x9, _rh2zi - ecup - 0x9), hzi1['endCDATA'](), _rh2zi + 0x3;
      }var lgoa5m = Dhnzr12(ojmg5, ecup),
          i5_ = lgoa5m['length'];if (i5_ > 0x1 && /!doctype/i['test'](lgoa5m[0x0][0x0])) {
        var qxv6wk = lgoa5m[0x1][0x0],
            oli = i5_ > 0x3 && /^public$/i['test'](lgoa5m[0x2][0x0]) && lgoa5m[0x3][0x0],
            nr1h = i5_ > 0x4 && lgoa5m[0x4][0x0],
            lm_oiz = lgoa5m[i5_ - 0x1];return hzi1['startDTD'](qxv6wk, oli && oli['replace'](/^(['"])(.*?)\1$/, '$2'), nr1h && nr1h['replace'](/^(['"])(.*?)\1$/, '$2')), hzi1['endDTD'](), lm_oiz['index'] + lm_oiz[0x0]['length'];
      }}return -0x1;
}function Dkt(waj6k, c0s3u, qevswt) {
  var kjwax6 = waj6k['indexOf']('?>', c0s3u);if (kjwax6) {
    var b3u0 = waj6k['substring'](c0s3u, kjwax6)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (b3u0) {
      {
        b3u0[0x0]['length'];
      }return qevswt['processingInstruction'](b3u0[0x1], b3u0[0x2]), kjwax6 + 0x2;
    }return -0x1;
  }return -0x1;
}function Dqxkwv6() {}function Dxk6jw(wk6qjx, h18r2) {
  return wk6qjx['__proto__'] = h18r2, wk6qjx;
}function Dhnzr12(b3p9uf, et0) {
  var m_i5,
      xk6agj = [],
      kw6vxq = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (kw6vxq['lastIndex'] = et0, kw6vxq['exec'](b3p9uf); m_i5 = kw6vxq['exec'](b3p9uf);) if (xk6agj['push'](m_i5), m_i5[0x1]) return xk6agj;
}var Dn8h1$y = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    Dg65jxa = new RegExp('[\\-\\.0-9' + Dn8h1$y['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    D_olzm = new RegExp('^' + Dn8h1$y['source'] + Dg65jxa['source'] + '*(?::' + Dn8h1$y['source'] + Dg65jxa['source'] + '*)?$'),
    Dlgo_5 = 0x0,
    Dxgjak6 = 0x1,
    Dufpb79 = 0x2,
    Dxj56ag = 0x3,
    Detc0v = 0x4,
    Dtsecv = 0x5,
    Dtwevsq = 0x6,
    Dpu39fb = 0x7;Dwtvqk['prototype'] = { 'parse': function (z2lri, te0s3c, rz2nh1) {
    var _om5 = this['domBuilder'];_om5['startDocument'](), Dr2n1(te0s3c, te0s3c = {}), Dsqwev(z2lri, te0s3c, rz2nh1, _om5, this['errorHandler']), _om5['endDocument']();
  } }, Dqxkwv6['prototype'] = { 'setTagName': function (qxk6j) {
    if (!D_olzm['test'](qxk6j)) throw new Error('invalid tagName:' + qxk6j);this['tagName'] = qxk6j;
  }, 'add': function (cs3ue0, kvqw6x, axm5) {
    if (!D_olzm['test'](cs3ue0)) throw new Error('invalid attribute:' + cs3ue0);this[this['length']++] = { 'qName': cs3ue0, 'value': kvqw6x, 'offset': axm5 };
  }, 'length': 0x0, 'getLocalName': function (zorl_i) {
    return this[zorl_i]['localName'];
  }, 'getLocator': function (am5ogj) {
    return this[am5ogj]['locator'];
  }, 'getQName': function (_z2hri) {
    return this[_z2hri]['qName'];
  }, 'getURI': function (qwk6t) {
    return this[qwk6t]['uri'];
  }, 'getValue': function (qst0ev) {
    return this[qst0ev]['value'];
  } }, Dxk6jw({}, Dxk6jw['prototype']) instanceof Dxk6jw || (Dxk6jw = function (bu3f9, ubfp7) {
  function pfub() {}pfub['prototype'] = ubfp7, pfub = new pfub();for (ubfp7 in bu3f9) pfub[ubfp7] = bu3f9[ubfp7];return pfub;
}), exports['XMLReader'] = Dwtvqk;