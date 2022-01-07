var Y = wx.$M;
function M_$5bdl() {}function M_s74_j6(wf$dbv, krv19f, r9u1, b$wfv, _7s64o) {
  function j64s7(z2tp) {
    if (z2tp > 0xffff) {
      z2tp -= 0x10000;var il50n = 0xd800 + (z2tp >> 0xa),
          vf91w = 0xdc00 + (0x3ff & z2tp);return String['fromCharCode'](il50n, vf91w);
    }return String['fromCharCode'](z2tp);
  }function jmin(i5mjnh) {
    var k91rxu = i5mjnh['slice'](0x1, -0x1);return k91rxu in r9u1 ? r9u1[k91rxu] : '#' === k91rxu['charAt'](0x0) ? j64s7(parseInt(k91rxu['substr'](0x1)['replace']('x', '0x'))) : (_7s64o['error']('entity not found:' + i5mjnh), i5mjnh);
  }function _7mjs(hji7mn) {
    if (hji7mn > jhn) {
      var j_7m = wf$dbv['substring'](jhn, hji7mn)['replace'](/&#?\w+;/g, jmin);ecat8 && rk1ux(jhn), b$wfv['characters'](j_7m, 0x0, hji7mn - jhn), jhn = hji7mn;
    }
  }function rk1ux(wdb$, fdb) {
    for (; wdb$ >= s7_o && (fdb = _7msj['exec'](wf$dbv));) vkxr1 = fdb['index'], s7_o = vkxr1 + fdb[0x0]['length'], ecat8['lineNumber']++;ecat8['columnNumber'] = wdb$ - vkxr1 + 0x1;
  }for (var vkxr1 = 0x0, s7_o = 0x0, _7msj = /.*(?:\r\n?|\n)|.*$/g, ecat8 = b$wfv['locator'], kvfr9 = [{ 'currentNSMap': krv19f }], g8a6o = {}, jhn = 0x0;;) {
    try {
      var mh5li = wf$dbv['indexOf']('<', jhn);if (0x0 > mh5li) {
        if (!wf$dbv['substr'](jhn)['match'](/^\s*$/)) {
          var vfrk = b$wfv['doc'],
              j_mnh = vfrk['createTextNode'](wf$dbv['substr'](jhn));vfrk['appendChild'](j_mnh), b$wfv['currentElement'] = j_mnh;
        }return;
      }switch (mh5li > jhn && _7mjs(mh5li), wf$dbv['charAt'](mh5li + 0x1)) {case '/':
          var m7_nh = wf$dbv['indexOf']('>', mh5li + 0x3),
              ur9xk = wf$dbv['substring'](mh5li + 0x2, m7_nh),
              kxy1qu = kvfr9['pop']();0x0 > m7_nh ? (ur9xk = wf$dbv['substring'](mh5li + 0x2)['replace'](/[\s<].*/, ''), _7s64o['error']('end tag name: ' + ur9xk + ' is not complete:' + kxy1qu['tagName']), m7_nh = mh5li + 0x1 + ur9xk['length']) : ur9xk['match'](/\s</) && (ur9xk = ur9xk['replace'](/[\s<].*/, ''), _7s64o['error']('end tag name: ' + ur9xk + ' maybe not complete'), m7_nh = mh5li + 0x1 + ur9xk['length']);var _o46gs = kxy1qu['localNSMap'],
              hnl0 = kxy1qu['tagName'] == ur9xk,
              msj74 = hnl0 || kxy1qu['tagName'] && kxy1qu['tagName']['toLowerCase']() == ur9xk['toLowerCase']();if (msj74) {
            if (b$wfv['endElement'](kxy1qu['uri'], kxy1qu['localName'], ur9xk), _o46gs) {
              for (var mj_n7 in _o46gs) b$wfv['endPrefixMapping'](mj_n7);
            }hnl0 || _7s64o['fatalError']('end tag name: ' + ur9xk + ' is not match the current start tagName:' + kxy1qu['tagName']);
          } else kvfr9['push'](kxy1qu);m7_nh++;break;case '?':
          ecat8 && rk1ux(mh5li), m7_nh = M_ep82t(wf$dbv, mh5li, b$wfv);break;case '!':
          ecat8 && rk1ux(mh5li), m7_nh = M_ga2e8(wf$dbv, mh5li, b$wfv, _7s64o);break;default:
          ecat8 && rk1ux(mh5li);var zetp2 = new M_cea2t8(),
              d5i$l0 = kvfr9[kvfr9['length'] - 0x1]['currentNSMap'],
              m7_nh = M_fbrwvd(wf$dbv, mh5li, zetp2, d5i$l0, jmin, _7s64o),
              l0db = zetp2['length'];if (!zetp2['closed'] && M_vf1rk(wf$dbv, m7_nh, zetp2['tagName'], g8a6o) && (zetp2['closed'] = !0x0, r9u1['nbsp'] || _7s64o['warning']('unclosed xml attribute')), ecat8 && l0db) {
            for (var ilhn0 = M_g4os_6(ecat8, {}), rk1vx = 0x0; l0db > rk1vx; rk1vx++) {
              var fb0wd$ = zetp2[rk1vx];rk1ux(fb0wd$['offset']), fb0wd$['locator'] = M_g4os_6(ecat8, {});
            }b$wfv['locator'] = ilhn0, M_bl$50d(zetp2, b$wfv, d5i$l0) && kvfr9['push'](zetp2), b$wfv['locator'] = ecat8;
          } else M_bl$50d(zetp2, b$wfv, d5i$l0) && kvfr9['push'](zetp2);'http://www.w3.org/1999/xhtml' !== zetp2['uri'] || zetp2['closed'] ? m7_nh++ : m7_nh = M_f9rk1(wf$dbv, m7_nh, zetp2['tagName'], jmin, b$wfv);}
    } catch (li0hn) {
      _7s64o['error']('element parse error: ' + li0hn), m7_nh = -0x1;
    }m7_nh > jhn ? jhn = m7_nh : _7mjs(Math['max'](mh5li, jhn) + 0x1);
  }
}function M_g4os_6(_mhjn7, j_4h7) {
  return j_4h7['lineNumber'] = _mhjn7['lineNumber'], j_4h7['columnNumber'] = _mhjn7['columnNumber'], j_4h7;
}function M_fbrwvd(j4_mh, rx1ku9, a2gec, ec2a, jmih7n, mnih7j) {
  for (var i5d, $0di, _s76o4 = ++rx1ku9, $li5d0 = M__4j76s;;) {
    var k9f1vr = j4_mh['charAt'](_s76o4);switch (k9f1vr) {case '=':
        if ($li5d0 === M_csoga) i5d = j4_mh['slice'](rx1ku9, _s76o4), $li5d0 = M_ukyq1;else {
          if ($li5d0 !== M__j7hmn) throw new Error('attribute equal must after attrName');$li5d0 = M_ukyq1;
        }break;case '\x27':case '\x22':
        if ($li5d0 === M_ukyq1 || $li5d0 === M_csoga) {
          if ($li5d0 === M_csoga && (mnih7j['warning']('attribute value must after "="'), i5d = j4_mh['slice'](rx1ku9, _s76o4)), rx1ku9 = _s76o4 + 0x1, _s76o4 = j4_mh['indexOf'](k9f1vr, rx1ku9), !(_s76o4 > 0x0)) throw new Error('attribute value no end \'' + k9f1vr + '\' match');$0di = j4_mh['slice'](rx1ku9, _s76o4)['replace'](/&#?\w+;/g, jmih7n), a2gec['add'](i5d, $0di, rx1ku9 - 0x1), $li5d0 = M__so;
        } else {
          if ($li5d0 != M_rdf) throw new Error('attribute value must after "="');$0di = j4_mh['slice'](rx1ku9, _s76o4)['replace'](/&#?\w+;/g, jmih7n), a2gec['add'](i5d, $0di, rx1ku9), mnih7j['warning']('attribute "' + i5d + '" missed start quot(' + k9f1vr + ')!!'), rx1ku9 = _s76o4 + 0x1, $li5d0 = M__so;
        }break;case '/':
        switch ($li5d0) {case M__4j76s:
            a2gec['setTagName'](j4_mh['slice'](rx1ku9, _s76o4));case M__so:case M_a2gce8:case M_v19rkx:
            $li5d0 = M_v19rkx, a2gec['closed'] = !0x0;case M_rdf:case M_csoga:case M__j7hmn:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return mnih7j['error']('unexpected end of input'), $li5d0 == M__4j76s && a2gec['setTagName'](j4_mh['slice'](rx1ku9, _s76o4)), _s76o4;case '>':
        switch ($li5d0) {case M__4j76s:
            a2gec['setTagName'](j4_mh['slice'](rx1ku9, _s76o4));case M__so:case M_a2gce8:case M_v19rkx:
            break;case M_rdf:case M_csoga:
            $0di = j4_mh['slice'](rx1ku9, _s76o4), '/' === $0di['slice'](-0x1) && (a2gec['closed'] = !0x0, $0di = $0di['slice'](0x0, -0x1));case M__j7hmn:
            $li5d0 === M__j7hmn && ($0di = i5d), $li5d0 == M_rdf ? (mnih7j['warning']('attribute "' + $0di + '" missed quot(")!!'), a2gec['add'](i5d, $0di['replace'](/&#?\w+;/g, jmih7n), rx1ku9)) : ('http://www.w3.org/1999/xhtml' === ec2a[''] && $0di['match'](/^(?:disabled|checked|selected)$/i) || mnih7j['warning']('attribute "' + $0di + '" missed value!! "' + $0di + '" instead!!'), a2gec['add']($0di, $0di, rx1ku9));break;case M_ukyq1:
            throw new Error('attribute value missed!!');}return _s76o4;case '\u0080':
        k9f1vr = '\x20';default:
        if ('\x20' >= k9f1vr) switch ($li5d0) {case M__4j76s:
            a2gec['setTagName'](j4_mh['slice'](rx1ku9, _s76o4)), $li5d0 = M_a2gce8;break;case M_csoga:
            i5d = j4_mh['slice'](rx1ku9, _s76o4), $li5d0 = M__j7hmn;break;case M_rdf:
            var $0di = j4_mh['slice'](rx1ku9, _s76o4)['replace'](/&#?\w+;/g, jmih7n);mnih7j['warning']('attribute "' + $0di + '" missed quot(")!!'), a2gec['add'](i5d, $0di, rx1ku9);case M__so:
            $li5d0 = M_a2gce8;} else switch ($li5d0) {case M__j7hmn:
            {
              a2gec['tagName'];
            }'http://www.w3.org/1999/xhtml' === ec2a[''] && i5d['match'](/^(?:disabled|checked|selected)$/i) || mnih7j['warning']('attribute "' + i5d + '" missed value!! "' + i5d + '" instead2!!'), a2gec['add'](i5d, i5d, rx1ku9), rx1ku9 = _s76o4, $li5d0 = M_csoga;break;case M__so:
            mnih7j['warning']('attribute space is required"' + i5d + '\x22!!');case M_a2gce8:
            $li5d0 = M_csoga, rx1ku9 = _s76o4;break;case M_ukyq1:
            $li5d0 = M_rdf, rx1ku9 = _s76o4;break;case M_v19rkx:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}_s76o4++;
  }
}function M_bl$50d($bf0w, vf1r9k, wbf0d) {
  for (var t2ca = $bf0w['tagName'], wvbfr9 = null, ga8ceo = $bf0w['length']; ga8ceo--;) {
    var jh4_m7 = $bf0w[ga8ceo],
        h5mij = jh4_m7['qName'],
        jmin7 = jh4_m7['value'],
        yqx1uk = h5mij['indexOf'](':');if (yqx1uk > 0x0) var lnh5im = jh4_m7['prefix'] = h5mij['slice'](0x0, yqx1uk),
        d$fbw = h5mij['slice'](yqx1uk + 0x1),
        s6o_g4 = 'xmlns' === lnh5im && d$fbw;else d$fbw = h5mij, lnh5im = null, s6o_g4 = 'xmlns' === h5mij && '';jh4_m7['localName'] = d$fbw, s6o_g4 !== !0x1 && (null == wvbfr9 && (wvbfr9 = {}, M_wld$0(wbf0d, wbf0d = {})), wbf0d[s6o_g4] = wvbfr9[s6o_g4] = jmin7, jh4_m7['uri'] = 'http://www.w3.org/2000/xmlns/', vf1r9k['startPrefixMapping'](s6o_g4, jmin7));
  }for (var ga8ceo = $bf0w['length']; ga8ceo--;) {
    jh4_m7 = $bf0w[ga8ceo];var lnh5im = jh4_m7['prefix'];lnh5im && ('xml' === lnh5im && (jh4_m7['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== lnh5im && (jh4_m7['uri'] = wbf0d[lnh5im || '']));
  }var yqx1uk = t2ca['indexOf'](':');yqx1uk > 0x0 ? (lnh5im = $bf0w['prefix'] = t2ca['slice'](0x0, yqx1uk), d$fbw = $bf0w['localName'] = t2ca['slice'](yqx1uk + 0x1)) : (lnh5im = null, d$fbw = $bf0w['localName'] = t2ca);var in5hjm = $bf0w['uri'] = wbf0d[lnh5im || ''];if (vf1r9k['startElement'](in5hjm, d$fbw, t2ca, $bf0w), !$bf0w['closed']) return $bf0w['currentNSMap'] = wbf0d, $bf0w['localNSMap'] = wvbfr9, !0x0;if (vf1r9k['endElement'](in5hjm, d$fbw, t2ca), wvbfr9) {
    for (lnh5im in wvbfr9) vf1r9k['endPrefixMapping'](lnh5im);
  }
}function M_f9rk1(j47, ogsac, $5d, ca6sg, ms7_4) {
  if (/^(?:script|textarea)$/i['test']($5d)) {
    var goa8c = j47['indexOf']('</' + $5d + '>', ogsac),
        hnjim = j47['substring'](ogsac + 0x1, goa8c);if (/[&<]/['test'](hnjim)) return (/^script$/i['test']($5d) ? (ms7_4['characters'](hnjim, 0x0, hnjim['length']), goa8c) : (hnjim = hnjim['replace'](/&#?\w+;/g, ca6sg), ms7_4['characters'](hnjim, 0x0, hnjim['length']), goa8c)
    );
  }return ogsac + 0x1;
}function M_vf1rk(j764s, xk3qyu, pz2, m7jn_h) {
  var fbrwdv = m7jn_h[pz2];return null == fbrwdv && (fbrwdv = j764s['lastIndexOf']('</' + pz2 + '>'), xk3qyu > fbrwdv && (fbrwdv = j764s['lastIndexOf']('</' + pz2)), m7jn_h[pz2] = fbrwdv), xk3qyu > fbrwdv;
}function M_wld$0(hi7nmj, o_64) {
  for (var _gs4o6 in hi7nmj) o_64[_gs4o6] = hi7nmj[_gs4o6];
}function M_ga2e8(k1xur9, $50dbl, fvb9w, rwdvbf) {
  var $fbwdv = k1xur9['charAt']($50dbl + 0x2);switch ($fbwdv) {case '-':
      if ('-' === k1xur9['charAt']($50dbl + 0x3)) {
        var wrvf9b = k1xur9['indexOf']('-->', $50dbl + 0x4);return wrvf9b > $50dbl ? (fvb9w['comment'](k1xur9, $50dbl + 0x4, wrvf9b - $50dbl - 0x4), wrvf9b + 0x3) : (rwdvbf['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == k1xur9['substr']($50dbl + 0x3, 0x6)) {
        var wrvf9b = k1xur9['indexOf'](']]>', $50dbl + 0x9);return fvb9w['startCDATA'](), fvb9w['characters'](k1xur9, $50dbl + 0x9, wrvf9b - $50dbl - 0x9), fvb9w['endCDATA'](), wrvf9b + 0x3;
      }var qux = M_o64s(k1xur9, $50dbl),
          rbdvwf = qux['length'];if (rbdvwf > 0x1 && /!doctype/i['test'](qux[0x0][0x0])) {
        var $ld05 = qux[0x1][0x0],
            aoegc8 = rbdvwf > 0x3 && /^public$/i['test'](qux[0x2][0x0]) && qux[0x3][0x0],
            rwvbdf = rbdvwf > 0x4 && qux[0x4][0x0],
            oag6 = qux[rbdvwf - 0x1];return fvb9w['startDTD']($ld05, aoegc8 && aoegc8['replace'](/^(['"])(.*?)\1$/, '$2'), rwvbdf && rwvbdf['replace'](/^(['"])(.*?)\1$/, '$2')), fvb9w['endDTD'](), oag6['index'] + oag6[0x0]['length'];
      }}return -0x1;
}function M_ep82t(hm7nij, vfr1k, ga64o) {
  var d$0li = hm7nij['indexOf']('?>', vfr1k);if (d$0li) {
    var e82ga = hm7nij['substring'](vfr1k, d$0li)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (e82ga) {
      {
        e82ga[0x0]['length'];
      }return ga64o['processingInstruction'](e82ga[0x1], e82ga[0x2]), d$0li + 0x2;
    }return -0x1;
  }return -0x1;
}function M_cea2t8() {}function M_li5mh(fdrwv, l5hmn) {
  return fdrwv['__proto__'] = l5hmn, fdrwv;
}function M_o64s(fbv$d, d0lw$) {
  var a6gos4,
      _hj74m = [],
      kuq1yx = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (kuq1yx['lastIndex'] = d0lw$, kuq1yx['exec'](fbv$d); a6gos4 = kuq1yx['exec'](fbv$d);) if (_hj74m['push'](a6gos4), a6gos4[0x1]) return _hj74m;
}var M_p2ez8t = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    M_cae8t = new RegExp('[\\-\\.0-9' + M_p2ez8t['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    M_i5jmh = new RegExp('^' + M_p2ez8t['source'] + M_cae8t['source'] + '*(?::' + M_p2ez8t['source'] + M_cae8t['source'] + '*)?$'),
    M__4j76s = 0x0,
    M_csoga = 0x1,
    M__j7hmn = 0x2,
    M_ukyq1 = 0x3,
    M_rdf = 0x4,
    M__so = 0x5,
    M_a2gce8 = 0x6,
    M_v19rkx = 0x7;M_$5bdl['prototype'] = { 'parse': function (v1k9x, so64ga, v1r9kx) {
    var jn_7 = this['domBuilder'];jn_7['startDocument'](), M_wld$0(so64ga, so64ga = {}), M_s74_j6(v1k9x, so64ga, v1r9kx, jn_7, this['errorHandler']), jn_7['endDocument']();
  } }, M_cea2t8['prototype'] = { 'setTagName': function (j6s47_) {
    if (!M_i5jmh['test'](j6s47_)) throw new Error('invalid tagName:' + j6s47_);this['tagName'] = j6s47_;
  }, 'add': function (rfbvw, sg6o, $dbf) {
    if (!M_i5jmh['test'](rfbvw)) throw new Error('invalid attribute:' + rfbvw);this[this['length']++] = { 'qName': rfbvw, 'value': sg6o, 'offset': $dbf };
  }, 'length': 0x0, 'getLocalName': function (s_j746) {
    return this[s_j746]['localName'];
  }, 'getLocator': function (_47s6) {
    return this[_47s6]['locator'];
  }, 'getQName': function (blw0) {
    return this[blw0]['qName'];
  }, 'getURI': function (zt2c8e) {
    return this[zt2c8e]['uri'];
  }, 'getValue': function (hn5ji) {
    return this[hn5ji]['value'];
  } }, M_li5mh({}, M_li5mh['prototype']) instanceof M_li5mh || (M_li5mh = function (pez8t, u1x9rk) {
  function x91kur() {}x91kur['prototype'] = u1x9rk, x91kur = new x91kur();for (u1x9rk in pez8t) x91kur[u1x9rk] = pez8t[u1x9rk];return x91kur;
}), exports['XMLReader'] = M_$5bdl;