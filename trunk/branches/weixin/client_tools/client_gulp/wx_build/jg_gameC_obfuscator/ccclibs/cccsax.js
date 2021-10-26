var p = wx.$h;
function a_c0j7q() {}function a_yk1hs(bs4hk$, fza1v2, $b_46, bg4m6_, h1ysk) {
  function v3t7j9($khsib) {
    if ($khsib > 0xffff) {
      $khsib -= 0x10000;var m6re8g = 0xd800 + ($khsib >> 0xa),
          r8me = 0xdc00 + (0x3ff & $khsib);return String['fromCharCode'](m6re8g, r8me);
    }return String['fromCharCode']($khsib);
  }function sib$k(rwmex8) {
    var $_bg = rwmex8['slice'](0x1, -0x1);return $_bg in $b_46 ? $b_46[$_bg] : '#' === $_bg['charAt'](0x0) ? v3t7j9(parseInt($_bg['substr'](0x1)['replace']('x', '0x'))) : (h1ysk['error']('entity not found:' + rwmex8), rwmex8);
  }function _gmb4(_46mbg) {
    if (_46mbg > ki1hsy) {
      var ew8xm = bs4hk$['substring'](ki1hsy, _46mbg)['replace'](/&#?\w+;/g, sib$k);fv2zta && k4b_$g(ki1hsy), bg4m6_['characters'](ew8xm, 0x0, _46mbg - ki1hsy), ki1hsy = _46mbg;
    }
  }function k4b_$g(_$b6g4, _4hb$k) {
    for (; _$b6g4 >= m_b46 && (_4hb$k = ncdqo5['exec'](bs4hk$));) _486gm = _4hb$k['index'], m_b46 = _486gm + _4hb$k[0x0]['length'], fv2zta['lineNumber']++;fv2zta['columnNumber'] = _$b6g4 - _486gm + 0x1;
  }for (var _486gm = 0x0, m_b46 = 0x0, ncdqo5 = /.*(?:\r\n?|\n)|.*$/g, fv2zta = bg4m6_['locator'], yh$isk = [{ 'currentNSMap': fza1v2 }], v39jtz = {}, ki1hsy = 0x0;;) {
    try {
      var _6bmg = bs4hk$['indexOf']('<', ki1hsy);if (0x0 > _6bmg) {
        if (!bs4hk$['substr'](ki1hsy)['match'](/^\s*$/)) {
          var e8r = bg4m6_['doc'],
              t23z = e8r['createTextNode'](bs4hk$['substr'](ki1hsy));e8r['appendChild'](t23z), bg4m6_['currentElement'] = t23z;
        }return;
      }switch (_6bmg > ki1hsy && _gmb4(_6bmg), bs4hk$['charAt'](_6bmg + 0x1)) {case '/':
          var m6gr8_ = bs4hk$['indexOf']('>', _6bmg + 0x3),
              _8mg = bs4hk$['substring'](_6bmg + 0x2, m6gr8_),
              m8egr = yh$isk['pop']();0x0 > m6gr8_ ? (_8mg = bs4hk$['substring'](_6bmg + 0x2)['replace'](/[\s<].*/, ''), h1ysk['error']('end tag name: ' + _8mg + ' is not complete:' + m8egr['tagName']), m6gr8_ = _6bmg + 0x1 + _8mg['length']) : _8mg['match'](/\s</) && (_8mg = _8mg['replace'](/[\s<].*/, ''), h1ysk['error']('end tag name: ' + _8mg + ' maybe not complete'), m6gr8_ = _6bmg + 0x1 + _8mg['length']);var ky$sh = m8egr['localNSMap'],
              l5ndco = m8egr['tagName'] == _8mg,
              q0cod = l5ndco || m8egr['tagName'] && m8egr['tagName']['toLowerCase']() == _8mg['toLowerCase']();if (q0cod) {
            if (bg4m6_['endElement'](m8egr['uri'], m8egr['localName'], _8mg), ky$sh) {
              for (var s1 in ky$sh) bg4m6_['endPrefixMapping'](s1);
            }l5ndco || h1ysk['fatalError']('end tag name: ' + _8mg + ' is not match the current start tagName:' + m8egr['tagName']);
          } else yh$isk['push'](m8egr);m6gr8_++;break;case '?':
          fv2zta && k4b_$g(_6bmg), m6gr8_ = a_q0j97c(bs4hk$, _6bmg, bg4m6_);break;case '!':
          fv2zta && k4b_$g(_6bmg), m6gr8_ = a_siy2f(bs4hk$, _6bmg, bg4m6_, h1ysk);break;default:
          fv2zta && k4b_$g(_6bmg);var epwr = new a__k$b4h(),
              k$sh4b = yh$isk[yh$isk['length'] - 0x1]['currentNSMap'],
              m6gr8_ = a_nl(bs4hk$, _6bmg, epwr, k$sh4b, sib$k, h1ysk),
              t3v2z = epwr['length'];if (!epwr['closed'] && a__46g8(bs4hk$, m6gr8_, epwr['tagName'], v39jtz) && (epwr['closed'] = !0x0, $b_46['nbsp'] || h1ysk['warning']('unclosed xml attribute')), fv2zta && t3v2z) {
            for (var iy$ = a_c0jqd(fv2zta, {}), a12zvf = 0x0; t3v2z > a12zvf; a12zvf++) {
              var mer68w = epwr[a12zvf];k4b_$g(mer68w['offset']), mer68w['locator'] = a_c0jqd(fv2zta, {});
            }bg4m6_['locator'] = iy$, a_xrpe8w(epwr, bg4m6_, k$sh4b) && yh$isk['push'](epwr), bg4m6_['locator'] = fv2zta;
          } else a_xrpe8w(epwr, bg4m6_, k$sh4b) && yh$isk['push'](epwr);'http://www.w3.org/1999/xhtml' !== epwr['uri'] || epwr['closed'] ? m6gr8_++ : m6gr8_ = a_qdj07(bs4hk$, m6gr8_, epwr['tagName'], sib$k, bg4m6_);}
    } catch (azy1f) {
      h1ysk['error']('element parse error: ' + azy1f), m6gr8_ = -0x1;
    }m6gr8_ > ki1hsy ? ki1hsy = m6gr8_ : _gmb4(Math['max'](_6bmg, ki1hsy) + 0x1);
  }
}function a_c0jqd(do5cn, y$ihs) {
  return y$ihs['lineNumber'] = do5cn['lineNumber'], y$ihs['columnNumber'] = do5cn['columnNumber'], y$ihs;
}function a_nl(rxpe, _8g46, y2f1za, q0ocd5, _6m84, g8rem6) {
  for (var fiy12s, tvj39z, vf2atz = ++_8g46, m8rg_6 = a_oqdc7;;) {
    var _m64g = rxpe['charAt'](vf2atz);switch (_m64g) {case '=':
        if (m8rg_6 === a__$hkb4) fiy12s = rxpe['slice'](_8g46, vf2atz), m8rg_6 = a_g8m_46;else {
          if (m8rg_6 !== a_$skbhi) throw new Error('attribute equal must after attrName');m8rg_6 = a_g8m_46;
        }break;case '\x27':case '\x22':
        if (m8rg_6 === a_g8m_46 || m8rg_6 === a__$hkb4) {
          if (m8rg_6 === a__$hkb4 && (g8rem6['warning']('attribute value must after "="'), fiy12s = rxpe['slice'](_8g46, vf2atz)), _8g46 = vf2atz + 0x1, vf2atz = rxpe['indexOf'](_m64g, _8g46), !(vf2atz > 0x0)) throw new Error('attribute value no end \'' + _m64g + '\' match');tvj39z = rxpe['slice'](_8g46, vf2atz)['replace'](/&#?\w+;/g, _6m84), y2f1za['add'](fiy12s, tvj39z, _8g46 - 0x1), m8rg_6 = a_odcn5l;
        } else {
          if (m8rg_6 != a_t970j) throw new Error('attribute value must after "="');tvj39z = rxpe['slice'](_8g46, vf2atz)['replace'](/&#?\w+;/g, _6m84), y2f1za['add'](fiy12s, tvj39z, _8g46), g8rem6['warning']('attribute "' + fiy12s + '" missed start quot(' + _m64g + ')!!'), _8g46 = vf2atz + 0x1, m8rg_6 = a_odcn5l;
        }break;case '/':
        switch (m8rg_6) {case a_oqdc7:
            y2f1za['setTagName'](rxpe['slice'](_8g46, vf2atz));case a_odcn5l:case a_ys$hki:case a_w8rp:
            m8rg_6 = a_w8rp, y2f1za['closed'] = !0x0;case a_t970j:case a__$hkb4:case a_$skbhi:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return g8rem6['error']('unexpected end of input'), m8rg_6 == a_oqdc7 && y2f1za['setTagName'](rxpe['slice'](_8g46, vf2atz)), vf2atz;case '>':
        switch (m8rg_6) {case a_oqdc7:
            y2f1za['setTagName'](rxpe['slice'](_8g46, vf2atz));case a_odcn5l:case a_ys$hki:case a_w8rp:
            break;case a_t970j:case a__$hkb4:
            tvj39z = rxpe['slice'](_8g46, vf2atz), '/' === tvj39z['slice'](-0x1) && (y2f1za['closed'] = !0x0, tvj39z = tvj39z['slice'](0x0, -0x1));case a_$skbhi:
            m8rg_6 === a_$skbhi && (tvj39z = fiy12s), m8rg_6 == a_t970j ? (g8rem6['warning']('attribute "' + tvj39z + '" missed quot(")!!'), y2f1za['add'](fiy12s, tvj39z['replace'](/&#?\w+;/g, _6m84), _8g46)) : ('http://www.w3.org/1999/xhtml' === q0ocd5[''] && tvj39z['match'](/^(?:disabled|checked|selected)$/i) || g8rem6['warning']('attribute "' + tvj39z + '" missed value!! "' + tvj39z + '" instead!!'), y2f1za['add'](tvj39z, tvj39z, _8g46));break;case a_g8m_46:
            throw new Error('attribute value missed!!');}return vf2atz;case '\u0080':
        _m64g = '\x20';default:
        if ('\x20' >= _m64g) switch (m8rg_6) {case a_oqdc7:
            y2f1za['setTagName'](rxpe['slice'](_8g46, vf2atz)), m8rg_6 = a_ys$hki;break;case a__$hkb4:
            fiy12s = rxpe['slice'](_8g46, vf2atz), m8rg_6 = a_$skbhi;break;case a_t970j:
            var tvj39z = rxpe['slice'](_8g46, vf2atz)['replace'](/&#?\w+;/g, _6m84);g8rem6['warning']('attribute "' + tvj39z + '" missed quot(")!!'), y2f1za['add'](fiy12s, tvj39z, _8g46);case a_odcn5l:
            m8rg_6 = a_ys$hki;} else switch (m8rg_6) {case a_$skbhi:
            {
              y2f1za['tagName'];
            }'http://www.w3.org/1999/xhtml' === q0ocd5[''] && fiy12s['match'](/^(?:disabled|checked|selected)$/i) || g8rem6['warning']('attribute "' + fiy12s + '" missed value!! "' + fiy12s + '" instead2!!'), y2f1za['add'](fiy12s, fiy12s, _8g46), _8g46 = vf2atz, m8rg_6 = a__$hkb4;break;case a_odcn5l:
            g8rem6['warning']('attribute space is required"' + fiy12s + '\x22!!');case a_ys$hki:
            m8rg_6 = a__$hkb4, _8g46 = vf2atz;break;case a_g8m_46:
            m8rg_6 = a_t970j, _8g46 = vf2atz;break;case a_w8rp:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}vf2atz++;
  }
}function a_xrpe8w($skhb4, fy2i1, z1yf2a) {
  for (var odlnc = $skhb4['tagName'], o7cd0q = null, rw86 = $skhb4['length']; rw86--;) {
    var yh1f = $skhb4[rw86],
        z2tfva = yh1f['qName'],
        rpx8ew = yh1f['value'],
        skh$4 = z2tfva['indexOf'](':');if (skh$4 > 0x0) var _g6b4m = yh1f['prefix'] = z2tfva['slice'](0x0, skh$4),
        rmxw8 = z2tfva['slice'](skh$4 + 0x1),
        mxwre = 'xmlns' === _g6b4m && rmxw8;else rmxw8 = z2tfva, _g6b4m = null, mxwre = 'xmlns' === z2tfva && '';yh1f['localName'] = rmxw8, mxwre !== !0x1 && (null == o7cd0q && (o7cd0q = {}, a_kb$_4h(z1yf2a, z1yf2a = {})), z1yf2a[mxwre] = o7cd0q[mxwre] = rpx8ew, yh1f['uri'] = 'http://www.w3.org/2000/xmlns/', fy2i1['startPrefixMapping'](mxwre, rpx8ew));
  }for (var rw86 = $skhb4['length']; rw86--;) {
    yh1f = $skhb4[rw86];var _g6b4m = yh1f['prefix'];_g6b4m && ('xml' === _g6b4m && (yh1f['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== _g6b4m && (yh1f['uri'] = z1yf2a[_g6b4m || '']));
  }var skh$4 = odlnc['indexOf'](':');skh$4 > 0x0 ? (_g6b4m = $skhb4['prefix'] = odlnc['slice'](0x0, skh$4), rmxw8 = $skhb4['localName'] = odlnc['slice'](skh$4 + 0x1)) : (_g6b4m = null, rmxw8 = $skhb4['localName'] = odlnc);var q9730 = $skhb4['uri'] = z1yf2a[_g6b4m || ''];if (fy2i1['startElement'](q9730, rmxw8, odlnc, $skhb4), !$skhb4['closed']) return $skhb4['currentNSMap'] = z1yf2a, $skhb4['localNSMap'] = o7cd0q, !0x0;if (fy2i1['endElement'](q9730, rmxw8, odlnc), o7cd0q) {
    for (_g6b4m in o7cd0q) fy2i1['endPrefixMapping'](_g6b4m);
  }
}function a_qdj07(v2f1za, rme6, dnq5oc, q0c5do, t9az3) {
  if (/^(?:script|textarea)$/i['test'](dnq5oc)) {
    var k4bs = v2f1za['indexOf']('</' + dnq5oc + '>', rme6),
        odn = v2f1za['substring'](rme6 + 0x1, k4bs);if (/[&<]/['test'](odn)) return (/^script$/i['test'](dnq5oc) ? (t9az3['characters'](odn, 0x0, odn['length']), k4bs) : (odn = odn['replace'](/&#?\w+;/g, q0c5do), t9az3['characters'](odn, 0x0, odn['length']), k4bs)
    );
  }return rme6 + 0x1;
}function a__46g8(zfvt2a, gemr6, cdqn, syhf1i) {
  var dcoq07 = syhf1i[cdqn];return null == dcoq07 && (dcoq07 = zfvt2a['lastIndexOf']('</' + cdqn + '>'), gemr6 > dcoq07 && (dcoq07 = zfvt2a['lastIndexOf']('</' + cdqn)), syhf1i[cdqn] = dcoq07), gemr6 > dcoq07;
}function a_kb$_4h(iyshf, j73tv9) {
  for (var nco5ld in iyshf) j73tv9[nco5ld] = iyshf[nco5ld];
}function a_siy2f(fta2zv, taf2vz, jzt93, zvfa21) {
  var r8emw6 = fta2zv['charAt'](taf2vz + 0x2);switch (r8emw6) {case '-':
      if ('-' === fta2zv['charAt'](taf2vz + 0x3)) {
        var er68mg = fta2zv['indexOf']('-->', taf2vz + 0x4);return er68mg > taf2vz ? (jzt93['comment'](fta2zv, taf2vz + 0x4, er68mg - taf2vz - 0x4), er68mg + 0x3) : (zvfa21['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == fta2zv['substr'](taf2vz + 0x3, 0x6)) {
        var er68mg = fta2zv['indexOf'](']]>', taf2vz + 0x9);return jzt93['startCDATA'](), jzt93['characters'](fta2zv, taf2vz + 0x9, er68mg - taf2vz - 0x9), jzt93['endCDATA'](), er68mg + 0x3;
      }var yih1sf = a_d5qo0c(fta2zv, taf2vz),
          gbk$ = yih1sf['length'];if (gbk$ > 0x1 && /!doctype/i['test'](yih1sf[0x0][0x0])) {
        var dqo50 = yih1sf[0x1][0x0],
            vaz93 = gbk$ > 0x3 && /^public$/i['test'](yih1sf[0x2][0x0]) && yih1sf[0x3][0x0],
            yf12ia = gbk$ > 0x4 && yih1sf[0x4][0x0],
            his$y = yih1sf[gbk$ - 0x1];return jzt93['startDTD'](dqo50, vaz93 && vaz93['replace'](/^(['"])(.*?)\1$/, '$2'), yf12ia && yf12ia['replace'](/^(['"])(.*?)\1$/, '$2')), jzt93['endDTD'](), his$y['index'] + his$y[0x0]['length'];
      }}return -0x1;
}function a_q0j97c(xe8rmw, oqc5d, gm4b_) {
  var h_b = xe8rmw['indexOf']('?>', oqc5d);if (h_b) {
    var hsbi$ = xe8rmw['substring'](oqc5d, h_b)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (hsbi$) {
      {
        hsbi$[0x0]['length'];
      }return gm4b_['processingInstruction'](hsbi$[0x1], hsbi$[0x2]), h_b + 0x2;
    }return -0x1;
  }return -0x1;
}function a__k$b4h() {}function a_a3zv2t($_g, $4k) {
  return $_g['__proto__'] = $4k, $_g;
}function a_d5qo0c(co0q7, $yhs) {
  var tvfaz,
      g_84 = [],
      zta9 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (zta9['lastIndex'] = $yhs, zta9['exec'](co0q7); tvfaz = zta9['exec'](co0q7);) if (g_84['push'](tvfaz), tvfaz[0x1]) return g_84;
}var a_kh4_$b = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    a_i2y1fs = new RegExp('[\\-\\.0-9' + a_kh4_$b['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    a_mwre86 = new RegExp('^' + a_kh4_$b['source'] + a_i2y1fs['source'] + '*(?::' + a_kh4_$b['source'] + a_i2y1fs['source'] + '*)?$'),
    a_oqdc7 = 0x0,
    a__$hkb4 = 0x1,
    a_$skbhi = 0x2,
    a_g8m_46 = 0x3,
    a_t970j = 0x4,
    a_odcn5l = 0x5,
    a_ys$hki = 0x6,
    a_w8rp = 0x7;a_c0j7q['prototype'] = { 'parse': function (jvzt3, avz12f, qdc5n) {
    var $kshib = this['domBuilder'];$kshib['startDocument'](), a_kb$_4h(avz12f, avz12f = {}), a_yk1hs(jvzt3, avz12f, qdc5n, $kshib, this['errorHandler']), $kshib['endDocument']();
  } }, a__k$b4h['prototype'] = { 'setTagName': function (ndc5l) {
    if (!a_mwre86['test'](ndc5l)) throw new Error('invalid tagName:' + ndc5l);this['tagName'] = ndc5l;
  }, 'add': function ($ihks, e8w6, rg_6) {
    if (!a_mwre86['test']($ihks)) throw new Error('invalid attribute:' + $ihks);this[this['length']++] = { 'qName': $ihks, 'value': e8w6, 'offset': rg_6 };
  }, 'length': 0x0, 'getLocalName': function (t3790j) {
    return this[t3790j]['localName'];
  }, 'getLocator': function (h4bs$k) {
    return this[h4bs$k]['locator'];
  }, 'getQName': function (rmx8ew) {
    return this[rmx8ew]['qName'];
  }, 'getURI': function (_g4bk$) {
    return this[_g4bk$]['uri'];
  }, 'getValue': function (q0doc5) {
    return this[q0doc5]['value'];
  } }, a_a3zv2t({}, a_a3zv2t['prototype']) instanceof a_a3zv2t || (a_a3zv2t = function (m6e8wr, e8wr) {
  function wrem68() {}wrem68['prototype'] = e8wr, wrem68 = new wrem68();for (e8wr in m6e8wr) wrem68[e8wr] = m6e8wr[e8wr];return wrem68;
}), exports['XMLReader'] = a_c0j7q;