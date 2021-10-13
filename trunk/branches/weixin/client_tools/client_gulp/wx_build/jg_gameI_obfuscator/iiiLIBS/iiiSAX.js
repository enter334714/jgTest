var Q = wx.$I;
function i_rcs2h7() {}function i_n2bc7(zioy8$, _oiz8, q61pnv, zy8fie, k0) {
  function duhtjw(_a$) {
    if (_a$ > 0xffff) {
      _a$ -= 0x10000;var o$8zi_ = 0xd800 + (_a$ >> 0xa),
          a3oz_$ = 0xdc00 + (0x3ff & _a$);return String['fromCharCode'](o$8zi_, a3oz_$);
    }return String['fromCharCode'](_a$);
  }function _z$i8(v1q6px) {
    var a39$o_ = v1q6px['slice'](0x1, -0x1);return a39$o_ in q61pnv ? q61pnv[a39$o_] : '#' === a39$o_['charAt'](0x0) ? duhtjw(parseInt(a39$o_['substr'](0x1)['replace']('x', '0x'))) : (k0['error']('entity not found:' + v1q6px), v1q6px);
  }function yzi$($yoi8) {
    if ($yoi8 > juhdtw) {
      var eg5pfx = zioy8$['substring'](juhdtw, $yoi8)['replace'](/&#?\w+;/g, _z$i8);jtud && o_z8i$(juhdtw), zy8fie['characters'](eg5pfx, 0x0, $yoi8 - juhdtw), juhdtw = $yoi8;
    }
  }function o_z8i$(m9340, _a9$k) {
    for (; m9340 >= _o$a9 && (_a9$k = vc6bqn['exec'](zioy8$));) bnvcq6 = _a9$k['index'], _o$a9 = bnvcq6 + _a9$k[0x0]['length'], jtud['lineNumber']++;jtud['columnNumber'] = m9340 - bnvcq6 + 0x1;
  }for (var bnvcq6 = 0x0, _o$a9 = 0x0, vc6bqn = /.*(?:\r\n?|\n)|.*$/g, jtud = zy8fie['locator'], hr2t7 = [{ 'currentNSMap': _oiz8 }], vcnb72 = {}, juhdtw = 0x0;;) {
    try {
      var fxg5pe = zioy8$['indexOf']('<', juhdtw);if (0x0 > fxg5pe) {
        if (!zioy8$['substr'](juhdtw)['match'](/^\s*$/)) {
          var xgp16q = zy8fie['doc'],
              ge8f5y = xgp16q['createTextNode'](zioy8$['substr'](juhdtw));xgp16q['appendChild'](ge8f5y), zy8fie['currentElement'] = ge8f5y;
        }return;
      }switch (fxg5pe > juhdtw && yzi$(fxg5pe), zioy8$['charAt'](fxg5pe + 0x1)) {case '/':
          var z$y8o = zioy8$['indexOf']('>', fxg5pe + 0x3),
              uthj = zioy8$['substring'](fxg5pe + 0x2, z$y8o),
              utjwdh = hr2t7['pop']();0x0 > z$y8o ? (uthj = zioy8$['substring'](fxg5pe + 0x2)['replace'](/[\s<].*/, ''), k0['error']('end tag name: ' + uthj + ' is not complete:' + utjwdh['tagName']), z$y8o = fxg5pe + 0x1 + uthj['length']) : uthj['match'](/\s</) && (uthj = uthj['replace'](/[\s<].*/, ''), k0['error']('end tag name: ' + uthj + ' maybe not complete'), z$y8o = fxg5pe + 0x1 + uthj['length']);var oz$8_ = utjwdh['localNSMap'],
              _a$o = utjwdh['tagName'] == uthj,
              cq6bv = _a$o || utjwdh['tagName'] && utjwdh['tagName']['toLowerCase']() == uthj['toLowerCase']();if (cq6bv) {
            if (zy8fie['endElement'](utjwdh['uri'], utjwdh['localName'], uthj), oz$8_) {
              for (var jsrwh in oz$8_) zy8fie['endPrefixMapping'](jsrwh);
            }_a$o || k0['fatalError']('end tag name: ' + uthj + ' is not match the current start tagName:' + utjwdh['tagName']);
          } else hr2t7['push'](utjwdh);z$y8o++;break;case '?':
          jtud && o_z8i$(fxg5pe), z$y8o = i_o_$iza(zioy8$, fxg5pe, zy8fie);break;case '!':
          jtud && o_z8i$(fxg5pe), z$y8o = i_crs(zioy8$, fxg5pe, zy8fie, k0);break;default:
          jtud && o_z8i$(fxg5pe);var $9oa3_ = new i_k9m340(),
              izao_ = hr2t7[hr2t7['length'] - 0x1]['currentNSMap'],
              z$y8o = i_p6v1qx(zioy8$, fxg5pe, $9oa3_, izao_, _z$i8, k0),
              c72rs = $9oa3_['length'];if (!$9oa3_['closed'] && i_pv6q1(zioy8$, z$y8o, $9oa3_['tagName'], vcnb72) && ($9oa3_['closed'] = !0x0, q61pnv['nbsp'] || k0['warning']('unclosed xml attribute')), jtud && c72rs) {
            for (var fy5gx = i_m9k04l(jtud, {}), $_a39 = 0x0; c72rs > $_a39; $_a39++) {
              var v6pnq = $9oa3_[$_a39];o_z8i$(v6pnq['offset']), v6pnq['locator'] = i_m9k04l(jtud, {});
            }zy8fie['locator'] = fy5gx, i_n6bvq($9oa3_, zy8fie, izao_) && hr2t7['push']($9oa3_), zy8fie['locator'] = jtud;
          } else i_n6bvq($9oa3_, zy8fie, izao_) && hr2t7['push']($9oa3_);'http://www.w3.org/1999/xhtml' !== $9oa3_['uri'] || $9oa3_['closed'] ? z$y8o++ : z$y8o = i_pxq16v(zioy8$, z$y8o, $9oa3_['tagName'], _z$i8, zy8fie);}
    } catch (whutd) {
      k0['error']('element parse error: ' + whutd), z$y8o = -0x1;
    }z$y8o > juhdtw ? juhdtw = z$y8o : yzi$(Math['max'](fxg5pe, juhdtw) + 0x1);
  }
}function i_m9k04l(gp1xq6, bnv61q) {
  return bnv61q['lineNumber'] = gp1xq6['lineNumber'], bnv61q['columnNumber'] = gp1xq6['columnNumber'], bnv61q;
}function i_p6v1qx(sth7r2, $3_oa, hscr2, vc6, qbc6nv, io8z$_) {
  for (var tjrhs2, csr7, tj2rs = ++$3_oa, hwjtu = i_y$iz8;;) {
    var trjsh = sth7r2['charAt'](tj2rs);switch (trjsh) {case '=':
        if (hwjtu === i_a0k_3) tjrhs2 = sth7r2['slice']($3_oa, tj2rs), hwjtu = i_fgx5ey;else {
          if (hwjtu !== i_x1v6p) throw new Error('attribute equal must after attrName');hwjtu = i_fgx5ey;
        }break;case '\x27':case '\x22':
        if (hwjtu === i_fgx5ey || hwjtu === i_a0k_3) {
          if (hwjtu === i_a0k_3 && (io8z$_['warning']('attribute value must after "="'), tjrhs2 = sth7r2['slice']($3_oa, tj2rs)), $3_oa = tj2rs + 0x1, tj2rs = sth7r2['indexOf'](trjsh, $3_oa), !(tj2rs > 0x0)) throw new Error('attribute value no end \'' + trjsh + '\' match');csr7 = sth7r2['slice']($3_oa, tj2rs)['replace'](/&#?\w+;/g, qbc6nv), hscr2['add'](tjrhs2, csr7, $3_oa - 0x1), hwjtu = i_g6pqx1;
        } else {
          if (hwjtu != i_m4l0k9) throw new Error('attribute value must after "="');csr7 = sth7r2['slice']($3_oa, tj2rs)['replace'](/&#?\w+;/g, qbc6nv), hscr2['add'](tjrhs2, csr7, $3_oa), io8z$_['warning']('attribute "' + tjrhs2 + '" missed start quot(' + trjsh + ')!!'), $3_oa = tj2rs + 0x1, hwjtu = i_g6pqx1;
        }break;case '/':
        switch (hwjtu) {case i_y$iz8:
            hscr2['setTagName'](sth7r2['slice']($3_oa, tj2rs));case i_g6pqx1:case i_fxy5:case i_hs27tr:
            hwjtu = i_hs27tr, hscr2['closed'] = !0x0;case i_m4l0k9:case i_a0k_3:case i_x1v6p:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return io8z$_['error']('unexpected end of input'), hwjtu == i_y$iz8 && hscr2['setTagName'](sth7r2['slice']($3_oa, tj2rs)), tj2rs;case '>':
        switch (hwjtu) {case i_y$iz8:
            hscr2['setTagName'](sth7r2['slice']($3_oa, tj2rs));case i_g6pqx1:case i_fxy5:case i_hs27tr:
            break;case i_m4l0k9:case i_a0k_3:
            csr7 = sth7r2['slice']($3_oa, tj2rs), '/' === csr7['slice'](-0x1) && (hscr2['closed'] = !0x0, csr7 = csr7['slice'](0x0, -0x1));case i_x1v6p:
            hwjtu === i_x1v6p && (csr7 = tjrhs2), hwjtu == i_m4l0k9 ? (io8z$_['warning']('attribute "' + csr7 + '" missed quot(")!!'), hscr2['add'](tjrhs2, csr7['replace'](/&#?\w+;/g, qbc6nv), $3_oa)) : ('http://www.w3.org/1999/xhtml' === vc6[''] && csr7['match'](/^(?:disabled|checked|selected)$/i) || io8z$_['warning']('attribute "' + csr7 + '" missed value!! "' + csr7 + '" instead!!'), hscr2['add'](csr7, csr7, $3_oa));break;case i_fgx5ey:
            throw new Error('attribute value missed!!');}return tj2rs;case '\u0080':
        trjsh = '\x20';default:
        if ('\x20' >= trjsh) switch (hwjtu) {case i_y$iz8:
            hscr2['setTagName'](sth7r2['slice']($3_oa, tj2rs)), hwjtu = i_fxy5;break;case i_a0k_3:
            tjrhs2 = sth7r2['slice']($3_oa, tj2rs), hwjtu = i_x1v6p;break;case i_m4l0k9:
            var csr7 = sth7r2['slice']($3_oa, tj2rs)['replace'](/&#?\w+;/g, qbc6nv);io8z$_['warning']('attribute "' + csr7 + '" missed quot(")!!'), hscr2['add'](tjrhs2, csr7, $3_oa);case i_g6pqx1:
            hwjtu = i_fxy5;} else switch (hwjtu) {case i_x1v6p:
            {
              hscr2['tagName'];
            }'http://www.w3.org/1999/xhtml' === vc6[''] && tjrhs2['match'](/^(?:disabled|checked|selected)$/i) || io8z$_['warning']('attribute "' + tjrhs2 + '" missed value!! "' + tjrhs2 + '" instead2!!'), hscr2['add'](tjrhs2, tjrhs2, $3_oa), $3_oa = tj2rs, hwjtu = i_a0k_3;break;case i_g6pqx1:
            io8z$_['warning']('attribute space is required"' + tjrhs2 + '\x22!!');case i_fxy5:
            hwjtu = i_a0k_3, $3_oa = tj2rs;break;case i_fgx5ey:
            hwjtu = i_m4l0k9, $3_oa = tj2rs;break;case i_hs27tr:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}tj2rs++;
  }
}function i_n6bvq(i$_oz, z8i$_o, pg1qx) {
  for (var e58yfi = i$_oz['tagName'], f8y5ge = null, _ozia$ = i$_oz['length']; _ozia$--;) {
    var lk40m = i$_oz[_ozia$],
        ts27h = lk40m['qName'],
        _8izo = lk40m['value'],
        _ak03 = ts27h['indexOf'](':');if (_ak03 > 0x0) var efiy = lk40m['prefix'] = ts27h['slice'](0x0, _ak03),
        a_9o3 = ts27h['slice'](_ak03 + 0x1),
        _a930 = 'xmlns' === efiy && a_9o3;else a_9o3 = ts27h, efiy = null, _a930 = 'xmlns' === ts27h && '';lk40m['localName'] = a_9o3, _a930 !== !0x1 && (null == f8y5ge && (f8y5ge = {}, i_y58efg(pg1qx, pg1qx = {})), pg1qx[_a930] = f8y5ge[_a930] = _8izo, lk40m['uri'] = 'http://www.w3.org/2000/xmlns/', z8i$_o['startPrefixMapping'](_a930, _8izo));
  }for (var _ozia$ = i$_oz['length']; _ozia$--;) {
    lk40m = i$_oz[_ozia$];var efiy = lk40m['prefix'];efiy && ('xml' === efiy && (lk40m['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== efiy && (lk40m['uri'] = pg1qx[efiy || '']));
  }var _ak03 = e58yfi['indexOf'](':');_ak03 > 0x0 ? (efiy = i$_oz['prefix'] = e58yfi['slice'](0x0, _ak03), a_9o3 = i$_oz['localName'] = e58yfi['slice'](_ak03 + 0x1)) : (efiy = null, a_9o3 = i$_oz['localName'] = e58yfi);var p6qv1n = i$_oz['uri'] = pg1qx[efiy || ''];if (z8i$_o['startElement'](p6qv1n, a_9o3, e58yfi, i$_oz), !i$_oz['closed']) return i$_oz['currentNSMap'] = pg1qx, i$_oz['localNSMap'] = f8y5ge, !0x0;if (z8i$_o['endElement'](p6qv1n, a_9o3, e58yfi), f8y5ge) {
    for (efiy in f8y5ge) z8i$_o['endPrefixMapping'](efiy);
  }
}function i_pxq16v($3az_o, o8yzie, pxe5g, oeyzi8, fyez8i) {
  if (/^(?:script|textarea)$/i['test'](pxe5g)) {
    var z_3a$ = $3az_o['indexOf']('</' + pxe5g + '>', o8yzie),
        dtjhsw = $3az_o['substring'](o8yzie + 0x1, z_3a$);if (/[&<]/['test'](dtjhsw)) return (/^script$/i['test'](pxe5g) ? (fyez8i['characters'](dtjhsw, 0x0, dtjhsw['length']), z_3a$) : (dtjhsw = dtjhsw['replace'](/&#?\w+;/g, oeyzi8), fyez8i['characters'](dtjhsw, 0x0, dtjhsw['length']), z_3a$)
    );
  }return o8yzie + 0x1;
}function i_pv6q1($8zy, g1pf5, hudjwt, _k9a3$) {
  var pqn16v = _k9a3$[hudjwt];return null == pqn16v && (pqn16v = $8zy['lastIndexOf']('</' + hudjwt + '>'), g1pf5 > pqn16v && (pqn16v = $8zy['lastIndexOf']('</' + hudjwt)), _k9a3$[hudjwt] = pqn16v), g1pf5 > pqn16v;
}function i_y58efg(b7cnq, $oiaz) {
  for (var vcb6 in b7cnq) $oiaz[vcb6] = b7cnq[vcb6];
}function i_crs(ch72rs, jwutdh, _io8$, t2rhsj) {
  var $o93 = ch72rs['charAt'](jwutdh + 0x2);switch ($o93) {case '-':
      if ('-' === ch72rs['charAt'](jwutdh + 0x3)) {
        var a_$ozi = ch72rs['indexOf']('-->', jwutdh + 0x4);return a_$ozi > jwutdh ? (_io8$['comment'](ch72rs, jwutdh + 0x4, a_$ozi - jwutdh - 0x4), a_$ozi + 0x3) : (t2rhsj['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == ch72rs['substr'](jwutdh + 0x3, 0x6)) {
        var a_$ozi = ch72rs['indexOf'](']]>', jwutdh + 0x9);return _io8$['startCDATA'](), _io8$['characters'](ch72rs, jwutdh + 0x9, a_$ozi - jwutdh - 0x9), _io8$['endCDATA'](), a_$ozi + 0x3;
      }var fexg5y = i_cv2b7(ch72rs, jwutdh),
          sht72r = fexg5y['length'];if (sht72r > 0x1 && /!doctype/i['test'](fexg5y[0x0][0x0])) {
        var h27trs = fexg5y[0x1][0x0],
            tjwhdu = sht72r > 0x3 && /^public$/i['test'](fexg5y[0x2][0x0]) && fexg5y[0x3][0x0],
            $oaz_3 = sht72r > 0x4 && fexg5y[0x4][0x0],
            xfpg5e = fexg5y[sht72r - 0x1];return _io8$['startDTD'](h27trs, tjwhdu && tjwhdu['replace'](/^(['"])(.*?)\1$/, '$2'), $oaz_3 && $oaz_3['replace'](/^(['"])(.*?)\1$/, '$2')), _io8$['endDTD'](), xfpg5e['index'] + xfpg5e[0x0]['length'];
      }}return -0x1;
}function i_o_$iza(b2v7cn, k_09a3, jhtd) {
  var vcn72b = b2v7cn['indexOf']('?>', k_09a3);if (vcn72b) {
    var m0k349 = b2v7cn['substring'](k_09a3, vcn72b)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (m0k349) {
      {
        m0k349[0x0]['length'];
      }return jhtd['processingInstruction'](m0k349[0x1], m0k349[0x2]), vcn72b + 0x2;
    }return -0x1;
  }return -0x1;
}function i_k9m340() {}function i_rb7sc2(hsr27t, r7sth) {
  return hsr27t['__proto__'] = r7sth, hsr27t;
}function i_cv2b7(ioz8e, cvn6) {
  var a_390,
      oai_ = [],
      f5y8i = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (f5y8i['lastIndex'] = cvn6, f5y8i['exec'](ioz8e); a_390 = f5y8i['exec'](ioz8e);) if (oai_['push'](a_390), a_390[0x1]) return oai_;
}var i_c7rs2b = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    i_vcn7b = new RegExp('[\\-\\.0-9' + i_c7rs2b['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    i_efxp = new RegExp('^' + i_c7rs2b['source'] + i_vcn7b['source'] + '*(?::' + i_c7rs2b['source'] + i_vcn7b['source'] + '*)?$'),
    i_y$iz8 = 0x0,
    i_a0k_3 = 0x1,
    i_x1v6p = 0x2,
    i_fgx5ey = 0x3,
    i_m4l0k9 = 0x4,
    i_g6pqx1 = 0x5,
    i_fxy5 = 0x6,
    i_hs27tr = 0x7;i_rcs2h7['prototype'] = { 'parse': function (_ioa, $_i8o, xe5) {
    var xp15 = this['domBuilder'];xp15['startDocument'](), i_y58efg($_i8o, $_i8o = {}), i_n2bc7(_ioa, $_i8o, xe5, xp15, this['errorHandler']), xp15['endDocument']();
  } }, i_k9m340['prototype'] = { 'setTagName': function (z$a3_) {
    if (!i_efxp['test'](z$a3_)) throw new Error('invalid tagName:' + z$a3_);this['tagName'] = z$a3_;
  }, 'add': function (yfz, swhjr, e5ygf8) {
    if (!i_efxp['test'](yfz)) throw new Error('invalid attribute:' + yfz);this[this['length']++] = { 'qName': yfz, 'value': swhjr, 'offset': e5ygf8 };
  }, 'length': 0x0, 'getLocalName': function (qbc6v) {
    return this[qbc6v]['localName'];
  }, 'getLocator': function (rhcs2) {
    return this[rhcs2]['locator'];
  }, 'getQName': function (cvqb6) {
    return this[cvqb6]['qName'];
  }, 'getURI': function (hrtswj) {
    return this[hrtswj]['uri'];
  }, 'getValue': function (n2r) {
    return this[n2r]['value'];
  } }, i_rb7sc2({}, i_rb7sc2['prototype']) instanceof i_rb7sc2 || (i_rb7sc2 = function (o8_z$, m4k) {
  function bv7nc2() {}bv7nc2['prototype'] = m4k, bv7nc2 = new bv7nc2();for (m4k in o8_z$) bv7nc2[m4k] = o8_z$[m4k];return bv7nc2;
}), exports['XMLReader'] = i_rcs2h7;