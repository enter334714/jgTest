var Q = wx.$I;
function i_faj8_6() {}function i_rt$vi(x4nw5h, uekbq, f8j6a_, r9mt1v, lrzi0) {
  function yzog0l(r$i0z) {
    if (r$i0z > 0xffff) {
      r$i0z -= 0x10000;var rlz$it = 0xd800 + (r$i0z >> 0xa),
          qe2sku = 0xdc00 + (0x3ff & r$i0z);return String['fromCharCode'](rlz$it, qe2sku);
    }return String['fromCharCode'](r$i0z);
  }function wq5n42(a738j6) {
    var jp = a738j6['slice'](0x1, -0x1);return jp in f8j6a_ ? f8j6a_[jp] : '#' === jp['charAt'](0x0) ? yzog0l(parseInt(jp['substr'](0x1)['replace']('x', '0x'))) : (lrzi0['error']('entity not found:' + a738j6), a738j6);
  }function _p8c1(_1cf8p) {
    if (_1cf8p > fc81p) {
      var oyzlg0 = x4nw5h['substring'](fc81p, _1cf8p)['replace'](/&#?\w+;/g, wq5n42);b7e63 && us7eb3(fc81p), r9mt1v['characters'](oyzlg0, 0x0, _1cf8p - fc81p), fc81p = _1cf8p;
    }
  }function us7eb3(imt9r, hn54x) {
    for (; imt9r >= mv9tc1 && (hn54x = vp19['exec'](x4nw5h));) ap8f_ = hn54x['index'], mv9tc1 = ap8f_ + hn54x[0x0]['length'], b7e63['lineNumber']++;b7e63['columnNumber'] = imt9r - ap8f_ + 0x1;
  }for (var ap8f_ = 0x0, mv9tc1 = 0x0, vp19 = /.*(?:\r\n?|\n)|.*$/g, b7e63 = r9mt1v['locator'], gd0zyo = [{ 'currentNSMap': uekbq }], fcp_1 = {}, fc81p = 0x0;;) {
    try {
      var eqbuks = x4nw5h['indexOf']('<', fc81p);if (0x0 > eqbuks) {
        if (!x4nw5h['substr'](fc81p)['match'](/^\s*$/)) {
          var ab7 = r9mt1v['doc'],
              pc9vm1 = ab7['createTextNode'](x4nw5h['substr'](fc81p));ab7['appendChild'](pc9vm1), r9mt1v['currentElement'] = pc9vm1;
        }return;
      }switch (eqbuks > fc81p && _p8c1(eqbuks), x4nw5h['charAt'](eqbuks + 0x1)) {case '/':
          var m9vit = x4nw5h['indexOf']('>', eqbuks + 0x3),
              tmv1c9 = x4nw5h['substring'](eqbuks + 0x2, m9vit),
              mfcvp1 = gd0zyo['pop']();0x0 > m9vit ? (tmv1c9 = x4nw5h['substring'](eqbuks + 0x2)['replace'](/[\s<].*/, ''), lrzi0['error']('end tag name: ' + tmv1c9 + ' is not complete:' + mfcvp1['tagName']), m9vit = eqbuks + 0x1 + tmv1c9['length']) : tmv1c9['match'](/\s</) && (tmv1c9 = tmv1c9['replace'](/[\s<].*/, ''), lrzi0['error']('end tag name: ' + tmv1c9 + ' maybe not complete'), m9vit = eqbuks + 0x1 + tmv1c9['length']);var ig$z = mfcvp1['localNSMap'],
              c1pfmv = mfcvp1['tagName'] == tmv1c9,
              uqkbe = c1pfmv || mfcvp1['tagName'] && mfcvp1['tagName']['toLowerCase']() == tmv1c9['toLowerCase']();if (uqkbe) {
            if (r9mt1v['endElement'](mfcvp1['uri'], mfcvp1['localName'], tmv1c9), ig$z) {
              for (var j7638a in ig$z) r9mt1v['endPrefixMapping'](j7638a);
            }c1pfmv || lrzi0['fatalError']('end tag name: ' + tmv1c9 + ' is not match the current start tagName:' + mfcvp1['tagName']);
          } else gd0zyo['push'](mfcvp1);m9vit++;break;case '?':
          b7e63 && us7eb3(eqbuks), m9vit = i_mtvir(x4nw5h, eqbuks, r9mt1v);break;case '!':
          b7e63 && us7eb3(eqbuks), m9vit = i_qsnu(x4nw5h, eqbuks, r9mt1v, lrzi0);break;default:
          b7e63 && us7eb3(eqbuks);var q2u5n = new i_j3876a(),
              f_cp = gd0zyo[gd0zyo['length'] - 0x1]['currentNSMap'],
              m9vit = i_ksn2uq(x4nw5h, eqbuks, q2u5n, f_cp, wq5n42, lrzi0),
              e37a6b = q2u5n['length'];if (!q2u5n['closed'] && i_subek7(x4nw5h, m9vit, q2u5n['tagName'], fcp_1) && (q2u5n['closed'] = !0x0, f8j6a_['nbsp'] || lrzi0['warning']('unclosed xml attribute')), b7e63 && e37a6b) {
            for (var _8fa6 = i_b7uks(b7e63, {}), hw425n = 0x0; e37a6b > hw425n; hw425n++) {
              var izrl$0 = q2u5n[hw425n];us7eb3(izrl$0['offset']), izrl$0['locator'] = i_b7uks(b7e63, {});
            }r9mt1v['locator'] = _8fa6, i_rlt$iz(q2u5n, r9mt1v, f_cp) && gd0zyo['push'](q2u5n), r9mt1v['locator'] = b7e63;
          } else i_rlt$iz(q2u5n, r9mt1v, f_cp) && gd0zyo['push'](q2u5n);'http://www.w3.org/1999/xhtml' !== q2u5n['uri'] || q2u5n['closed'] ? m9vit++ : m9vit = i_jp_(x4nw5h, m9vit, q2u5n['tagName'], wq5n42, r9mt1v);}
    } catch (e3a7b6) {
      lrzi0['error']('element parse error: ' + e3a7b6), m9vit = -0x1;
    }m9vit > fc81p ? fc81p = m9vit : _p8c1(Math['max'](eqbuks, fc81p) + 0x1);
  }
}function i_b7uks(goz0ly, eb76a) {
  return eb76a['lineNumber'] = goz0ly['lineNumber'], eb76a['columnNumber'] = goz0ly['columnNumber'], eb76a;
}function i_ksn2uq(tvr, t9mrv1, r9mv1t, _af68, pc_f1m, nw42q) {
  for (var itr9l, _af8j, qsekub = ++t9mrv1, n4q25 = i_w452q;;) {
    var gz$li = tvr['charAt'](qsekub);switch (gz$li) {case '=':
        if (n4q25 === i_k5nu2) itr9l = tvr['slice'](t9mrv1, qsekub), n4q25 = i_s2uek;else {
          if (n4q25 !== i_suqe2) throw new Error('attribute equal must after attrName');n4q25 = i_s2uek;
        }break;case '\x27':case '\x22':
        if (n4q25 === i_s2uek || n4q25 === i_k5nu2) {
          if (n4q25 === i_k5nu2 && (nw42q['warning']('attribute value must after "="'), itr9l = tvr['slice'](t9mrv1, qsekub)), t9mrv1 = qsekub + 0x1, qsekub = tvr['indexOf'](gz$li, t9mrv1), !(qsekub > 0x0)) throw new Error('attribute value no end \'' + gz$li + '\' match');_af8j = tvr['slice'](t9mrv1, qsekub)['replace'](/&#?\w+;/g, pc_f1m), r9mv1t['add'](itr9l, _af8j, t9mrv1 - 0x1), n4q25 = i_lgozy;
        } else {
          if (n4q25 != i_ukn52q) throw new Error('attribute value must after "="');_af8j = tvr['slice'](t9mrv1, qsekub)['replace'](/&#?\w+;/g, pc_f1m), r9mv1t['add'](itr9l, _af8j, t9mrv1), nw42q['warning']('attribute "' + itr9l + '" missed start quot(' + gz$li + ')!!'), t9mrv1 = qsekub + 0x1, n4q25 = i_lgozy;
        }break;case '/':
        switch (n4q25) {case i_w452q:
            r9mv1t['setTagName'](tvr['slice'](t9mrv1, qsekub));case i_lgozy:case i_z0li$:case i_r$0z:
            n4q25 = i_r$0z, r9mv1t['closed'] = !0x0;case i_ukn52q:case i_k5nu2:case i_suqe2:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return nw42q['error']('unexpected end of input'), n4q25 == i_w452q && r9mv1t['setTagName'](tvr['slice'](t9mrv1, qsekub)), qsekub;case '>':
        switch (n4q25) {case i_w452q:
            r9mv1t['setTagName'](tvr['slice'](t9mrv1, qsekub));case i_lgozy:case i_z0li$:case i_r$0z:
            break;case i_ukn52q:case i_k5nu2:
            _af8j = tvr['slice'](t9mrv1, qsekub), '/' === _af8j['slice'](-0x1) && (r9mv1t['closed'] = !0x0, _af8j = _af8j['slice'](0x0, -0x1));case i_suqe2:
            n4q25 === i_suqe2 && (_af8j = itr9l), n4q25 == i_ukn52q ? (nw42q['warning']('attribute "' + _af8j + '" missed quot(")!!'), r9mv1t['add'](itr9l, _af8j['replace'](/&#?\w+;/g, pc_f1m), t9mrv1)) : ('http://www.w3.org/1999/xhtml' === _af68[''] && _af8j['match'](/^(?:disabled|checked|selected)$/i) || nw42q['warning']('attribute "' + _af8j + '" missed value!! "' + _af8j + '" instead!!'), r9mv1t['add'](_af8j, _af8j, t9mrv1));break;case i_s2uek:
            throw new Error('attribute value missed!!');}return qsekub;case '\u0080':
        gz$li = '\x20';default:
        if ('\x20' >= gz$li) switch (n4q25) {case i_w452q:
            r9mv1t['setTagName'](tvr['slice'](t9mrv1, qsekub)), n4q25 = i_z0li$;break;case i_k5nu2:
            itr9l = tvr['slice'](t9mrv1, qsekub), n4q25 = i_suqe2;break;case i_ukn52q:
            var _af8j = tvr['slice'](t9mrv1, qsekub)['replace'](/&#?\w+;/g, pc_f1m);nw42q['warning']('attribute "' + _af8j + '" missed quot(")!!'), r9mv1t['add'](itr9l, _af8j, t9mrv1);case i_lgozy:
            n4q25 = i_z0li$;} else switch (n4q25) {case i_suqe2:
            {
              r9mv1t['tagName'];
            }'http://www.w3.org/1999/xhtml' === _af68[''] && itr9l['match'](/^(?:disabled|checked|selected)$/i) || nw42q['warning']('attribute "' + itr9l + '" missed value!! "' + itr9l + '" instead2!!'), r9mv1t['add'](itr9l, itr9l, t9mrv1), t9mrv1 = qsekub, n4q25 = i_k5nu2;break;case i_lgozy:
            nw42q['warning']('attribute space is required"' + itr9l + '\x22!!');case i_z0li$:
            n4q25 = i_k5nu2, t9mrv1 = qsekub;break;case i_s2uek:
            n4q25 = i_ukn52q, t9mrv1 = qsekub;break;case i_r$0z:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}qsekub++;
  }
}function i_rlt$iz(jpfc_8, w5n4xh, qkw5) {
  for (var $0zlg = jpfc_8['tagName'], fc_m1 = null, a3j7b6 = jpfc_8['length']; a3j7b6--;) {
    var zlr$i = jpfc_8[a3j7b6],
        vmi9r = zlr$i['qName'],
        g$lo0 = zlr$i['value'],
        hnw245 = vmi9r['indexOf'](':');if (hnw245 > 0x0) var rzt$li = zlr$i['prefix'] = vmi9r['slice'](0x0, hnw245),
        nw5q42 = vmi9r['slice'](hnw245 + 0x1),
        ub7kes = 'xmlns' === rzt$li && nw5q42;else nw5q42 = vmi9r, rzt$li = null, ub7kes = 'xmlns' === vmi9r && '';zlr$i['localName'] = nw5q42, ub7kes !== !0x1 && (null == fc_m1 && (fc_m1 = {}, i_nqw42(qkw5, qkw5 = {})), qkw5[ub7kes] = fc_m1[ub7kes] = g$lo0, zlr$i['uri'] = 'http://www.w3.org/2000/xmlns/', w5n4xh['startPrefixMapping'](ub7kes, g$lo0));
  }for (var a3j7b6 = jpfc_8['length']; a3j7b6--;) {
    zlr$i = jpfc_8[a3j7b6];var rzt$li = zlr$i['prefix'];rzt$li && ('xml' === rzt$li && (zlr$i['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== rzt$li && (zlr$i['uri'] = qkw5[rzt$li || '']));
  }var hnw245 = $0zlg['indexOf'](':');hnw245 > 0x0 ? (rzt$li = jpfc_8['prefix'] = $0zlg['slice'](0x0, hnw245), nw5q42 = jpfc_8['localName'] = $0zlg['slice'](hnw245 + 0x1)) : (rzt$li = null, nw5q42 = jpfc_8['localName'] = $0zlg);var tmvi9r = jpfc_8['uri'] = qkw5[rzt$li || ''];if (w5n4xh['startElement'](tmvi9r, nw5q42, $0zlg, jpfc_8), !jpfc_8['closed']) return jpfc_8['currentNSMap'] = qkw5, jpfc_8['localNSMap'] = fc_m1, !0x0;if (w5n4xh['endElement'](tmvi9r, nw5q42, $0zlg), fc_m1) {
    for (rzt$li in fc_m1) w5n4xh['endPrefixMapping'](rzt$li);
  }
}function i_jp_(pvmc19, c9tmv1, o0d, t9m1cv, mr9ti) {
  if (/^(?:script|textarea)$/i['test'](o0d)) {
    var ir0$zl = pvmc19['indexOf']('</' + o0d + '>', c9tmv1),
        c1t9v = pvmc19['substring'](c9tmv1 + 0x1, ir0$zl);if (/[&<]/['test'](c1t9v)) return (/^script$/i['test'](o0d) ? (mr9ti['characters'](c1t9v, 0x0, c1t9v['length']), ir0$zl) : (c1t9v = c1t9v['replace'](/&#?\w+;/g, t9m1cv), mr9ti['characters'](c1t9v, 0x0, c1t9v['length']), ir0$zl)
    );
  }return c9tmv1 + 0x1;
}function i_subek7(g0d, tivr, z$gi0, $go0) {
  var nw2q5k = $go0[z$gi0];return null == nw2q5k && (nw2q5k = g0d['lastIndexOf']('</' + z$gi0 + '>'), tivr > nw2q5k && (nw2q5k = g0d['lastIndexOf']('</' + z$gi0)), $go0[z$gi0] = nw2q5k), tivr > nw2q5k;
}function i_nqw42(f8p1c_, j67ba3) {
  for (var z$lti in f8p1c_) j67ba3[z$lti] = f8p1c_[z$lti];
}function i_qsnu(o$0lzg, z0i$g, kqbes, p8_1f) {
  var a763bj = o$0lzg['charAt'](z0i$g + 0x2);switch (a763bj) {case '-':
      if ('-' === o$0lzg['charAt'](z0i$g + 0x3)) {
        var a63_j = o$0lzg['indexOf']('-->', z0i$g + 0x4);return a63_j > z0i$g ? (kqbes['comment'](o$0lzg, z0i$g + 0x4, a63_j - z0i$g - 0x4), a63_j + 0x3) : (p8_1f['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == o$0lzg['substr'](z0i$g + 0x3, 0x6)) {
        var a63_j = o$0lzg['indexOf'](']]>', z0i$g + 0x9);return kqbes['startCDATA'](), kqbes['characters'](o$0lzg, z0i$g + 0x9, a63_j - z0i$g - 0x9), kqbes['endCDATA'](), a63_j + 0x3;
      }var pc19m = i_ab736e(o$0lzg, z0i$g),
          cp1m_f = pc19m['length'];if (cp1m_f > 0x1 && /!doctype/i['test'](pc19m[0x0][0x0])) {
        var vr9tim = pc19m[0x1][0x0],
            zt$ = cp1m_f > 0x3 && /^public$/i['test'](pc19m[0x2][0x0]) && pc19m[0x3][0x0],
            ilz0r$ = cp1m_f > 0x4 && pc19m[0x4][0x0],
            uskqn2 = pc19m[cp1m_f - 0x1];return kqbes['startDTD'](vr9tim, zt$ && zt$['replace'](/^(['"])(.*?)\1$/, '$2'), ilz0r$ && ilz0r$['replace'](/^(['"])(.*?)\1$/, '$2')), kqbes['endDTD'](), uskqn2['index'] + uskqn2[0x0]['length'];
      }}return -0x1;
}function i_mtvir(b367aj, hn45xw, vt9r1) {
  var zg0$li = b367aj['indexOf']('?>', hn45xw);if (zg0$li) {
    var xnh54w = b367aj['substring'](hn45xw, zg0$li)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (xnh54w) {
      {
        xnh54w[0x0]['length'];
      }return vt9r1['processingInstruction'](xnh54w[0x1], xnh54w[0x2]), zg0$li + 0x2;
    }return -0x1;
  }return -0x1;
}function i_j3876a() {}function i_zgo0ly(b3a76e, qk2n) {
  return b3a76e['__proto__'] = qk2n, b3a76e;
}function i_ab736e(jaf_68, l$ogz) {
  var buqesk,
      vfcmp = [],
      hn452w = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (hn452w['lastIndex'] = l$ogz, hn452w['exec'](jaf_68); buqesk = hn452w['exec'](jaf_68);) if (vfcmp['push'](buqesk), buqesk[0x1]) return vfcmp;
}var i_c_8fp1 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    i_bques = new RegExp('[\\-\\.0-9' + i_c_8fp1['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    i_rmv9 = new RegExp('^' + i_c_8fp1['source'] + i_bques['source'] + '*(?::' + i_c_8fp1['source'] + i_bques['source'] + '*)?$'),
    i_w452q = 0x0,
    i_k5nu2 = 0x1,
    i_suqe2 = 0x2,
    i_s2uek = 0x3,
    i_ukn52q = 0x4,
    i_lgozy = 0x5,
    i_z0li$ = 0x6,
    i_r$0z = 0x7;i_faj8_6['prototype'] = { 'parse': function (b3e6s, v1mr9, zg0yod) {
    var g0doyz = this['domBuilder'];g0doyz['startDocument'](), i_nqw42(v1mr9, v1mr9 = {}), i_rt$vi(b3e6s, v1mr9, zg0yod, g0doyz, this['errorHandler']), g0doyz['endDocument']();
  } }, i_j3876a['prototype'] = { 'setTagName': function (s7ueb) {
    if (!i_rmv9['test'](s7ueb)) throw new Error('invalid tagName:' + s7ueb);this['tagName'] = s7ueb;
  }, 'add': function (t91rmv, z0l$go, pfmc_1) {
    if (!i_rmv9['test'](t91rmv)) throw new Error('invalid attribute:' + t91rmv);this[this['length']++] = { 'qName': t91rmv, 'value': z0l$go, 'offset': pfmc_1 };
  }, 'length': 0x0, 'getLocalName': function (c9t1) {
    return this[c9t1]['localName'];
  }, 'getLocator': function (gdo0z) {
    return this[gdo0z]['locator'];
  }, 'getQName': function (tri$9v) {
    return this[tri$9v]['qName'];
  }, 'getURI': function (rl0iz) {
    return this[rl0iz]['uri'];
  }, 'getValue': function (rtim9v) {
    return this[rtim9v]['value'];
  } }, i_zgo0ly({}, i_zgo0ly['prototype']) instanceof i_zgo0ly || (i_zgo0ly = function (c91mv, cjp_8) {
  function a3j67() {}a3j67['prototype'] = cjp_8, a3j67 = new a3j67();for (cjp_8 in c91mv) a3j67[cjp_8] = c91mv[cjp_8];return a3j67;
}), exports['XMLReader'] = i_faj8_6;