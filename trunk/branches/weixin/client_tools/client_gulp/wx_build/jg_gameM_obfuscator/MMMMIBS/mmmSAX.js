var Y = wx.$M;
function M_vdw$b() {}function M_frwdbv(dbl$50, ec2t8z, s_7j4m, bdw0$l, og4_s) {
  function il5hn(wfdr) {
    if (wfdr > 0xffff) {
      wfdr -= 0x10000;var d$bvw = 0xd800 + (wfdr >> 0xa),
          mh7ijn = 0xdc00 + (0x3ff & wfdr);return String['fromCharCode'](d$bvw, mh7ijn);
    }return String['fromCharCode'](wfdr);
  }function m_n7(og6ca) {
    var _sj47 = og6ca['slice'](0x1, -0x1);return _sj47 in s_7j4m ? s_7j4m[_sj47] : '#' === _sj47['charAt'](0x0) ? il5hn(parseInt(_sj47['substr'](0x1)['replace']('x', '0x'))) : (og4_s['error']('entity not found:' + og6ca), og6ca);
  }function c68og(rvdwbf) {
    if (rvdwbf > oa6g8) {
      var l0in5h = dbl$50['substring'](oa6g8, rvdwbf)['replace'](/&#?\w+;/g, m_n7);_s4m7j && $0dbfw(oa6g8), bdw0$l['characters'](l0in5h, 0x0, rvdwbf - oa6g8), oa6g8 = rvdwbf;
    }
  }function $0dbfw(c2ezt, d$0i5) {
    for (; c2ezt >= ac2te && (d$0i5 = jsm7['exec'](dbl$50));) mij5h = d$0i5['index'], ac2te = mij5h + d$0i5[0x0]['length'], _s4m7j['lineNumber']++;_s4m7j['columnNumber'] = c2ezt - mij5h + 0x1;
  }for (var mij5h = 0x0, ac2te = 0x0, jsm7 = /.*(?:\r\n?|\n)|.*$/g, _s4m7j = bdw0$l['locator'], d$fvw = [{ 'currentNSMap': ec2t8z }], ez28tp = {}, oa6g8 = 0x0;;) {
    try {
      var sg_46 = dbl$50['indexOf']('<', oa6g8);if (0x0 > sg_46) {
        if (!dbl$50['substr'](oa6g8)['match'](/^\s*$/)) {
          var aogc8e = bdw0$l['doc'],
              lni$05 = aogc8e['createTextNode'](dbl$50['substr'](oa6g8));aogc8e['appendChild'](lni$05), bdw0$l['currentElement'] = lni$05;
        }return;
      }switch (sg_46 > oa6g8 && c68og(sg_46), dbl$50['charAt'](sg_46 + 0x1)) {case '/':
          var mjih = dbl$50['indexOf']('>', sg_46 + 0x3),
              gc82e = dbl$50['substring'](sg_46 + 0x2, mjih),
              wfv9 = d$fvw['pop']();0x0 > mjih ? (gc82e = dbl$50['substring'](sg_46 + 0x2)['replace'](/[\s<].*/, ''), og4_s['error']('end tag name: ' + gc82e + ' is not complete:' + wfv9['tagName']), mjih = sg_46 + 0x1 + gc82e['length']) : gc82e['match'](/\s</) && (gc82e = gc82e['replace'](/[\s<].*/, ''), og4_s['error']('end tag name: ' + gc82e + ' maybe not complete'), mjih = sg_46 + 0x1 + gc82e['length']);var ld50 = wfv9['localNSMap'],
              dfbv = wfv9['tagName'] == gc82e,
              bfvdw$ = dfbv || wfv9['tagName'] && wfv9['tagName']['toLowerCase']() == gc82e['toLowerCase']();if (bfvdw$) {
            if (bdw0$l['endElement'](wfv9['uri'], wfv9['localName'], gc82e), ld50) {
              for (var wr9bfv in ld50) bdw0$l['endPrefixMapping'](wr9bfv);
            }dfbv || og4_s['fatalError']('end tag name: ' + gc82e + ' is not match the current start tagName:' + wfv9['tagName']);
          } else d$fvw['push'](wfv9);mjih++;break;case '?':
          _s4m7j && $0dbfw(sg_46), mjih = M_r9xku(dbl$50, sg_46, bdw0$l);break;case '!':
          _s4m7j && $0dbfw(sg_46), mjih = M_uk91xr(dbl$50, sg_46, bdw0$l, og4_s);break;default:
          _s4m7j && $0dbfw(sg_46);var _j64 = new M_xq1yu(),
              ac8e2t = d$fvw[d$fvw['length'] - 0x1]['currentNSMap'],
              mjih = M_hi05ln(dbl$50, sg_46, _j64, ac8e2t, m_n7, og4_s),
              rbv9wf = _j64['length'];if (!_j64['closed'] && M_wr1v(dbl$50, mjih, _j64['tagName'], ez28tp) && (_j64['closed'] = !0x0, s_7j4m['nbsp'] || og4_s['warning']('unclosed xml attribute')), _s4m7j && rbv9wf) {
            for (var a6g = M_v9kfr1(_s4m7j, {}), fr9bv = 0x0; rbv9wf > fr9bv; fr9bv++) {
              var rbfd = _j64[fr9bv];$0dbfw(rbfd['offset']), rbfd['locator'] = M_v9kfr1(_s4m7j, {});
            }bdw0$l['locator'] = a6g, M_xkuy(_j64, bdw0$l, ac8e2t) && d$fvw['push'](_j64), bdw0$l['locator'] = _s4m7j;
          } else M_xkuy(_j64, bdw0$l, ac8e2t) && d$fvw['push'](_j64);'http://www.w3.org/1999/xhtml' !== _j64['uri'] || _j64['closed'] ? mjih++ : mjih = M_b0wdf(dbl$50, mjih, _j64['tagName'], m_n7, bdw0$l);}
    } catch (_jhm74) {
      og4_s['error']('element parse error: ' + _jhm74), mjih = -0x1;
    }mjih > oa6g8 ? oa6g8 = mjih : c68og(Math['max'](sg_46, oa6g8) + 0x1);
  }
}function M_v9kfr1(eac8go, idl0$) {
  return idl0$['lineNumber'] = eac8go['lineNumber'], idl0$['columnNumber'] = eac8go['columnNumber'], idl0$;
}function M_hi05ln(_j746, wdl$b0, wbdr, eagc8, qyxu3k, jh47m) {
  for (var bd05l$, m47j_, te = ++wdl$b0, ecgao8 = M_o7s6_;;) {
    var s_64j7 = _j746['charAt'](te);switch (s_64j7) {case '=':
        if (ecgao8 === M_m5ni) bd05l$ = _j746['slice'](wdl$b0, te), ecgao8 = M_ji5hnm;else {
          if (ecgao8 !== M_x3uqky) throw new Error('attribute equal must after attrName');ecgao8 = M_ji5hnm;
        }break;case '\x27':case '\x22':
        if (ecgao8 === M_ji5hnm || ecgao8 === M_m5ni) {
          if (ecgao8 === M_m5ni && (jh47m['warning']('attribute value must after "="'), bd05l$ = _j746['slice'](wdl$b0, te)), wdl$b0 = te + 0x1, te = _j746['indexOf'](s_64j7, wdl$b0), !(te > 0x0)) throw new Error('attribute value no end \'' + s_64j7 + '\' match');m47j_ = _j746['slice'](wdl$b0, te)['replace'](/&#?\w+;/g, qyxu3k), wbdr['add'](bd05l$, m47j_, wdl$b0 - 0x1), ecgao8 = M_ecat;
        } else {
          if (ecgao8 != M_h_nj7m) throw new Error('attribute value must after "="');m47j_ = _j746['slice'](wdl$b0, te)['replace'](/&#?\w+;/g, qyxu3k), wbdr['add'](bd05l$, m47j_, wdl$b0), jh47m['warning']('attribute "' + bd05l$ + '" missed start quot(' + s_64j7 + ')!!'), wdl$b0 = te + 0x1, ecgao8 = M_ecat;
        }break;case '/':
        switch (ecgao8) {case M_o7s6_:
            wbdr['setTagName'](_j746['slice'](wdl$b0, te));case M_ecat:case M_agos46:case M_l0dw:
            ecgao8 = M_l0dw, wbdr['closed'] = !0x0;case M_h_nj7m:case M_m5ni:case M_x3uqky:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return jh47m['error']('unexpected end of input'), ecgao8 == M_o7s6_ && wbdr['setTagName'](_j746['slice'](wdl$b0, te)), te;case '>':
        switch (ecgao8) {case M_o7s6_:
            wbdr['setTagName'](_j746['slice'](wdl$b0, te));case M_ecat:case M_agos46:case M_l0dw:
            break;case M_h_nj7m:case M_m5ni:
            m47j_ = _j746['slice'](wdl$b0, te), '/' === m47j_['slice'](-0x1) && (wbdr['closed'] = !0x0, m47j_ = m47j_['slice'](0x0, -0x1));case M_x3uqky:
            ecgao8 === M_x3uqky && (m47j_ = bd05l$), ecgao8 == M_h_nj7m ? (jh47m['warning']('attribute "' + m47j_ + '" missed quot(")!!'), wbdr['add'](bd05l$, m47j_['replace'](/&#?\w+;/g, qyxu3k), wdl$b0)) : ('http://www.w3.org/1999/xhtml' === eagc8[''] && m47j_['match'](/^(?:disabled|checked|selected)$/i) || jh47m['warning']('attribute "' + m47j_ + '" missed value!! "' + m47j_ + '" instead!!'), wbdr['add'](m47j_, m47j_, wdl$b0));break;case M_ji5hnm:
            throw new Error('attribute value missed!!');}return te;case '\u0080':
        s_64j7 = '\x20';default:
        if ('\x20' >= s_64j7) switch (ecgao8) {case M_o7s6_:
            wbdr['setTagName'](_j746['slice'](wdl$b0, te)), ecgao8 = M_agos46;break;case M_m5ni:
            bd05l$ = _j746['slice'](wdl$b0, te), ecgao8 = M_x3uqky;break;case M_h_nj7m:
            var m47j_ = _j746['slice'](wdl$b0, te)['replace'](/&#?\w+;/g, qyxu3k);jh47m['warning']('attribute "' + m47j_ + '" missed quot(")!!'), wbdr['add'](bd05l$, m47j_, wdl$b0);case M_ecat:
            ecgao8 = M_agos46;} else switch (ecgao8) {case M_x3uqky:
            {
              wbdr['tagName'];
            }'http://www.w3.org/1999/xhtml' === eagc8[''] && bd05l$['match'](/^(?:disabled|checked|selected)$/i) || jh47m['warning']('attribute "' + bd05l$ + '" missed value!! "' + bd05l$ + '" instead2!!'), wbdr['add'](bd05l$, bd05l$, wdl$b0), wdl$b0 = te, ecgao8 = M_m5ni;break;case M_ecat:
            jh47m['warning']('attribute space is required"' + bd05l$ + '\x22!!');case M_agos46:
            ecgao8 = M_m5ni, wdl$b0 = te;break;case M_ji5hnm:
            ecgao8 = M_h_nj7m, wdl$b0 = te;break;case M_l0dw:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}te++;
  }
}function M_xkuy(_sj7m, bdvfw, _76s) {
  for (var frvw = _sj7m['tagName'], n7mj = null, v9k1 = _sj7m['length']; v9k1--;) {
    var a6c = _sj7m[v9k1],
        coae8g = a6c['qName'],
        him7 = a6c['value'],
        g8oce = coae8g['indexOf'](':');if (g8oce > 0x0) var h_jmn7 = a6c['prefix'] = coae8g['slice'](0x0, g8oce),
        fbd0$w = coae8g['slice'](g8oce + 0x1),
        ykxu3q = 'xmlns' === h_jmn7 && fbd0$w;else fbd0$w = coae8g, h_jmn7 = null, ykxu3q = 'xmlns' === coae8g && '';a6c['localName'] = fbd0$w, ykxu3q !== !0x1 && (null == n7mj && (n7mj = {}, M_l5hinm(_76s, _76s = {})), _76s[ykxu3q] = n7mj[ykxu3q] = him7, a6c['uri'] = 'http://www.w3.org/2000/xmlns/', bdvfw['startPrefixMapping'](ykxu3q, him7));
  }for (var v9k1 = _sj7m['length']; v9k1--;) {
    a6c = _sj7m[v9k1];var h_jmn7 = a6c['prefix'];h_jmn7 && ('xml' === h_jmn7 && (a6c['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== h_jmn7 && (a6c['uri'] = _76s[h_jmn7 || '']));
  }var g8oce = frvw['indexOf'](':');g8oce > 0x0 ? (h_jmn7 = _sj7m['prefix'] = frvw['slice'](0x0, g8oce), fbd0$w = _sj7m['localName'] = frvw['slice'](g8oce + 0x1)) : (h_jmn7 = null, fbd0$w = _sj7m['localName'] = frvw);var ct28ea = _sj7m['uri'] = _76s[h_jmn7 || ''];if (bdvfw['startElement'](ct28ea, fbd0$w, frvw, _sj7m), !_sj7m['closed']) return _sj7m['currentNSMap'] = _76s, _sj7m['localNSMap'] = n7mj, !0x0;if (bdvfw['endElement'](ct28ea, fbd0$w, frvw), n7mj) {
    for (h_jmn7 in n7mj) bdvfw['endPrefixMapping'](h_jmn7);
  }
}function M_b0wdf(tea8c2, rwbvdf, vk91, fvwb, uky3xq) {
  if (/^(?:script|textarea)$/i['test'](vk91)) {
    var rw1v9f = tea8c2['indexOf']('</' + vk91 + '>', rwbvdf),
        cogae8 = tea8c2['substring'](rwbvdf + 0x1, rw1v9f);if (/[&<]/['test'](cogae8)) return (/^script$/i['test'](vk91) ? (uky3xq['characters'](cogae8, 0x0, cogae8['length']), rw1v9f) : (cogae8 = cogae8['replace'](/&#?\w+;/g, fvwb), uky3xq['characters'](cogae8, 0x0, cogae8['length']), rw1v9f)
    );
  }return rwbvdf + 0x1;
}function M_wr1v(epz82t, lni$50, oc86ga, _so4g6) {
  var db0f$ = _so4g6[oc86ga];return null == db0f$ && (db0f$ = epz82t['lastIndexOf']('</' + oc86ga + '>'), lni$50 > db0f$ && (db0f$ = epz82t['lastIndexOf']('</' + oc86ga)), _so4g6[oc86ga] = db0f$), lni$50 > db0f$;
}function M_l5hinm(inmj5h, dw$bf0) {
  for (var hjin5 in inmj5h) dw$bf0[hjin5] = inmj5h[hjin5];
}function M_uk91xr(f1vkr, nhm5ji, ctae8, rf9bv) {
  var vr9wf1 = f1vkr['charAt'](nhm5ji + 0x2);switch (vr9wf1) {case '-':
      if ('-' === f1vkr['charAt'](nhm5ji + 0x3)) {
        var fr1w = f1vkr['indexOf']('-->', nhm5ji + 0x4);return fr1w > nhm5ji ? (ctae8['comment'](f1vkr, nhm5ji + 0x4, fr1w - nhm5ji - 0x4), fr1w + 0x3) : (rf9bv['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == f1vkr['substr'](nhm5ji + 0x3, 0x6)) {
        var fr1w = f1vkr['indexOf'](']]>', nhm5ji + 0x9);return ctae8['startCDATA'](), ctae8['characters'](f1vkr, nhm5ji + 0x9, fr1w - nhm5ji - 0x9), ctae8['endCDATA'](), fr1w + 0x3;
      }var mih5n = M_rw1fv(f1vkr, nhm5ji),
          m_7hn = mih5n['length'];if (m_7hn > 0x1 && /!doctype/i['test'](mih5n[0x0][0x0])) {
        var ceog8a = mih5n[0x1][0x0],
            mh7jin = m_7hn > 0x3 && /^public$/i['test'](mih5n[0x2][0x0]) && mih5n[0x3][0x0],
            zt2e8 = m_7hn > 0x4 && mih5n[0x4][0x0],
            l5in0h = mih5n[m_7hn - 0x1];return ctae8['startDTD'](ceog8a, mh7jin && mh7jin['replace'](/^(['"])(.*?)\1$/, '$2'), zt2e8 && zt2e8['replace'](/^(['"])(.*?)\1$/, '$2')), ctae8['endDTD'](), l5in0h['index'] + l5in0h[0x0]['length'];
      }}return -0x1;
}function M_r9xku(gc2ae, xq3, ae8cgo) {
  var v19rkf = gc2ae['indexOf']('?>', xq3);if (v19rkf) {
    var pte8z2 = gc2ae['substring'](xq3, v19rkf)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (pte8z2) {
      {
        pte8z2[0x0]['length'];
      }return ae8cgo['processingInstruction'](pte8z2[0x1], pte8z2[0x2]), v19rkf + 0x2;
    }return -0x1;
  }return -0x1;
}function M_xq1yu() {}function M_rfv9k(s4_mj7, xu1yqk) {
  return s4_mj7['__proto__'] = xu1yqk, s4_mj7;
}function M_rw1fv(q1xky, bdl05) {
  var nmhi5,
      z2tpe = [],
      d0wb$f = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (d0wb$f['lastIndex'] = bdl05, d0wb$f['exec'](q1xky); nmhi5 = d0wb$f['exec'](q1xky);) if (z2tpe['push'](nmhi5), nmhi5[0x1]) return z2tpe;
}var M_ceg8a2 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    M_jh4_m = new RegExp('[\\-\\.0-9' + M_ceg8a2['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    M_h7_n = new RegExp('^' + M_ceg8a2['source'] + M_jh4_m['source'] + '*(?::' + M_ceg8a2['source'] + M_jh4_m['source'] + '*)?$'),
    M_o7s6_ = 0x0,
    M_m5ni = 0x1,
    M_x3uqky = 0x2,
    M_ji5hnm = 0x3,
    M_h_nj7m = 0x4,
    M_ecat = 0x5,
    M_agos46 = 0x6,
    M_l0dw = 0x7;M_vdw$b['prototype'] = { 'parse': function (kf1r9v, aos64, yu1x) {
    var ihn05 = this['domBuilder'];ihn05['startDocument'](), M_l5hinm(aos64, aos64 = {}), M_frwdbv(kf1r9v, aos64, yu1x, ihn05, this['errorHandler']), ihn05['endDocument']();
  } }, M_xq1yu['prototype'] = { 'setTagName': function (d$wfv) {
    if (!M_h7_n['test'](d$wfv)) throw new Error('invalid tagName:' + d$wfv);this['tagName'] = d$wfv;
  }, 'add': function (i7nhm, i$dl05, ca8t) {
    if (!M_h7_n['test'](i7nhm)) throw new Error('invalid attribute:' + i7nhm);this[this['length']++] = { 'qName': i7nhm, 'value': i$dl05, 'offset': ca8t };
  }, 'length': 0x0, 'getLocalName': function (dl$0bw) {
    return this[dl$0bw]['localName'];
  }, 'getLocator': function (g6ao4s) {
    return this[g6ao4s]['locator'];
  }, 'getQName': function (b$l50d) {
    return this[b$l50d]['qName'];
  }, 'getURI': function (tz2) {
    return this[tz2]['uri'];
  }, 'getValue': function (u1rkx) {
    return this[u1rkx]['value'];
  } }, M_rfv9k({}, M_rfv9k['prototype']) instanceof M_rfv9k || (M_rfv9k = function (u9ky1, c8ega) {
  function oa4sg6() {}oa4sg6['prototype'] = c8ega, oa4sg6 = new oa4sg6();for (c8ega in u9ky1) oa4sg6[c8ega] = u9ky1[c8ega];return oa4sg6;
}), exports['XMLReader'] = M_vdw$b;