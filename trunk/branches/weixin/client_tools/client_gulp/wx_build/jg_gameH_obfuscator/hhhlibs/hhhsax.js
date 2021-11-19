var O = wx.$C;
function h_jzd9r8() {}function h_u$rc8(uolcp5, rupc$8, u$pc, r8c, ctpl) {
  function zr89j($u8zrp) {
    if ($u8zrp > 0xffff) {
      $u8zrp -= 0x10000;var hj0w9 = 0xd800 + ($u8zrp >> 0xa),
          nsa62 = 0xdc00 + (0x3ff & $u8zrp);return String['fromCharCode'](hj0w9, nsa62);
    }return String['fromCharCode']($u8zrp);
  }function yanvs_(purz$8) {
    var lot = purz$8['slice'](0x1, -0x1);return lot in u$pc ? u$pc[lot] : '#' === lot['charAt'](0x0) ? zr89j(parseInt(lot['substr'](0x1)['replace']('x', '0x'))) : (ctpl['error']('entity not found:' + purz$8), purz$8);
  }function drz9j(tpcl5) {
    if (tpcl5 > qx7341) {
      var _ysn6 = uolcp5['substring'](qx7341, tpcl5)['replace'](/&#?\w+;/g, yanvs_);lt5omk && jw0hx(qx7341), r8c['characters'](_ysn6, 0x0, tpcl5 - qx7341), qx7341 = tpcl5;
    }
  }function jw0hx(pzru8, a6sy_) {
    for (; pzru8 >= p$zr8 && (a6sy_ = w0qx71['exec'](uolcp5));) $rp8zu = a6sy_['index'], p$zr8 = $rp8zu + a6sy_[0x0]['length'], lt5omk['lineNumber']++;lt5omk['columnNumber'] = pzru8 - $rp8zu + 0x1;
  }for (var $rp8zu = 0x0, p$zr8 = 0x0, w0qx71 = /.*(?:\r\n?|\n)|.*$/g, lt5omk = r8c['locator'], sy2i = [{ 'currentNSMap': rupc$8 }], f7g41 = {}, qx7341 = 0x0;;) {
    try {
      var m5lc = uolcp5['indexOf']('<', qx7341);if (0x0 > m5lc) {
        if (!uolcp5['substr'](qx7341)['match'](/^\s*$/)) {
          var x03q71 = r8c['doc'],
              cmlt5 = x03q71['createTextNode'](uolcp5['substr'](qx7341));x03q71['appendChild'](cmlt5), r8c['currentElement'] = cmlt5;
        }return;
      }switch (m5lc > qx7341 && drz9j(m5lc), uolcp5['charAt'](m5lc + 0x1)) {case '/':
          var biae2 = uolcp5['indexOf']('>', m5lc + 0x3),
              s26aiy = uolcp5['substring'](m5lc + 0x2, biae2),
              x70q3 = sy2i['pop']();0x0 > biae2 ? (s26aiy = uolcp5['substring'](m5lc + 0x2)['replace'](/[\s<].*/, ''), ctpl['error']('end tag name: ' + s26aiy + ' is not complete:' + x70q3['tagName']), biae2 = m5lc + 0x1 + s26aiy['length']) : s26aiy['match'](/\s</) && (s26aiy = s26aiy['replace'](/[\s<].*/, ''), ctpl['error']('end tag name: ' + s26aiy + ' maybe not complete'), biae2 = m5lc + 0x1 + s26aiy['length']);var q0xw17 = x70q3['localNSMap'],
              s2y6na = x70q3['tagName'] == s26aiy,
              klt5 = s2y6na || x70q3['tagName'] && x70q3['tagName']['toLowerCase']() == s26aiy['toLowerCase']();if (klt5) {
            if (r8c['endElement'](x70q3['uri'], x70q3['localName'], s26aiy), q0xw17) {
              for (var wj9hd in q0xw17) r8c['endPrefixMapping'](wj9hd);
            }s2y6na || ctpl['fatalError']('end tag name: ' + s26aiy + ' is not match the current start tagName:' + x70q3['tagName']);
          } else sy2i['push'](x70q3);biae2++;break;case '?':
          lt5omk && jw0hx(m5lc), biae2 = h__n6(uolcp5, m5lc, r8c);break;case '!':
          lt5omk && jw0hx(m5lc), biae2 = h_a2be6(uolcp5, m5lc, r8c, ctpl);break;default:
          lt5omk && jw0hx(m5lc);var g_nvf4 = new h_wq07xh(),
              _4vf = sy2i[sy2i['length'] - 0x1]['currentNSMap'],
              biae2 = h_loct(uolcp5, m5lc, g_nvf4, _4vf, yanvs_, ctpl),
              djh9w0 = g_nvf4['length'];if (!g_nvf4['closed'] && h_q03x17(uolcp5, biae2, g_nvf4['tagName'], f7g41) && (g_nvf4['closed'] = !0x0, u$pc['nbsp'] || ctpl['warning']('unclosed xml attribute')), lt5omk && djh9w0) {
            for (var q0xhd = h_rhz(lt5omk, {}), c5plu = 0x0; djh9w0 > c5plu; c5plu++) {
              var vay_s = g_nvf4[c5plu];jw0hx(vay_s['offset']), vay_s['locator'] = h_rhz(lt5omk, {});
            }r8c['locator'] = q0xhd, h_yn2a6s(g_nvf4, r8c, _4vf) && sy2i['push'](g_nvf4), r8c['locator'] = lt5omk;
          } else h_yn2a6s(g_nvf4, r8c, _4vf) && sy2i['push'](g_nvf4);'http://www.w3.org/1999/xhtml' !== g_nvf4['uri'] || g_nvf4['closed'] ? biae2++ : biae2 = h_h7qx0(uolcp5, biae2, g_nvf4['tagName'], yanvs_, r8c);}
    } catch (fg147) {
      ctpl['error']('element parse error: ' + fg147), biae2 = -0x1;
    }biae2 > qx7341 ? qx7341 = biae2 : drz9j(Math['max'](m5lc, qx7341) + 0x1);
  }
}function h_rhz(ns26a, $8curp) {
  return $8curp['lineNumber'] = ns26a['lineNumber'], $8curp['columnNumber'] = ns26a['columnNumber'], $8curp;
}function h_loct(f_4n, ulpo, $rz9, pr8uc$, lcpo5t, w7) {
  for (var d9j8, vs_nyg, _6nysa = ++ulpo, vg_sny = h_ruzp8$;;) {
    var pcul5$ = f_4n['charAt'](_6nysa);switch (pcul5$) {case '=':
        if (vg_sny === h_pc$8u) d9j8 = f_4n['slice'](ulpo, _6nysa), vg_sny = h__g;else {
          if (vg_sny !== h_otp5l) throw new Error('attribute equal must after attrName');vg_sny = h__g;
        }break;case '\x27':case '\x22':
        if (vg_sny === h__g || vg_sny === h_pc$8u) {
          if (vg_sny === h_pc$8u && (w7['warning']('attribute value must after "="'), d9j8 = f_4n['slice'](ulpo, _6nysa)), ulpo = _6nysa + 0x1, _6nysa = f_4n['indexOf'](pcul5$, ulpo), !(_6nysa > 0x0)) throw new Error('attribute value no end \'' + pcul5$ + '\' match');vs_nyg = f_4n['slice'](ulpo, _6nysa)['replace'](/&#?\w+;/g, lcpo5t), $rz9['add'](d9j8, vs_nyg, ulpo - 0x1), vg_sny = h_xw7hq0;
        } else {
          if (vg_sny != h_xqw71) throw new Error('attribute value must after "="');vs_nyg = f_4n['slice'](ulpo, _6nysa)['replace'](/&#?\w+;/g, lcpo5t), $rz9['add'](d9j8, vs_nyg, ulpo), w7['warning']('attribute "' + d9j8 + '" missed start quot(' + pcul5$ + ')!!'), ulpo = _6nysa + 0x1, vg_sny = h_xw7hq0;
        }break;case '/':
        switch (vg_sny) {case h_ruzp8$:
            $rz9['setTagName'](f_4n['slice'](ulpo, _6nysa));case h_xw7hq0:case h_jwd09:case h_pc8$lu:
            vg_sny = h_pc8$lu, $rz9['closed'] = !0x0;case h_xqw71:case h_pc$8u:case h_otp5l:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return w7['error']('unexpected end of input'), vg_sny == h_ruzp8$ && $rz9['setTagName'](f_4n['slice'](ulpo, _6nysa)), _6nysa;case '>':
        switch (vg_sny) {case h_ruzp8$:
            $rz9['setTagName'](f_4n['slice'](ulpo, _6nysa));case h_xw7hq0:case h_jwd09:case h_pc8$lu:
            break;case h_xqw71:case h_pc$8u:
            vs_nyg = f_4n['slice'](ulpo, _6nysa), '/' === vs_nyg['slice'](-0x1) && ($rz9['closed'] = !0x0, vs_nyg = vs_nyg['slice'](0x0, -0x1));case h_otp5l:
            vg_sny === h_otp5l && (vs_nyg = d9j8), vg_sny == h_xqw71 ? (w7['warning']('attribute "' + vs_nyg + '" missed quot(")!!'), $rz9['add'](d9j8, vs_nyg['replace'](/&#?\w+;/g, lcpo5t), ulpo)) : ('http://www.w3.org/1999/xhtml' === pr8uc$[''] && vs_nyg['match'](/^(?:disabled|checked|selected)$/i) || w7['warning']('attribute "' + vs_nyg + '" missed value!! "' + vs_nyg + '" instead!!'), $rz9['add'](vs_nyg, vs_nyg, ulpo));break;case h__g:
            throw new Error('attribute value missed!!');}return _6nysa;case '\u0080':
        pcul5$ = '\x20';default:
        if ('\x20' >= pcul5$) switch (vg_sny) {case h_ruzp8$:
            $rz9['setTagName'](f_4n['slice'](ulpo, _6nysa)), vg_sny = h_jwd09;break;case h_pc$8u:
            d9j8 = f_4n['slice'](ulpo, _6nysa), vg_sny = h_otp5l;break;case h_xqw71:
            var vs_nyg = f_4n['slice'](ulpo, _6nysa)['replace'](/&#?\w+;/g, lcpo5t);w7['warning']('attribute "' + vs_nyg + '" missed quot(")!!'), $rz9['add'](d9j8, vs_nyg, ulpo);case h_xw7hq0:
            vg_sny = h_jwd09;} else switch (vg_sny) {case h_otp5l:
            {
              $rz9['tagName'];
            }'http://www.w3.org/1999/xhtml' === pr8uc$[''] && d9j8['match'](/^(?:disabled|checked|selected)$/i) || w7['warning']('attribute "' + d9j8 + '" missed value!! "' + d9j8 + '" instead2!!'), $rz9['add'](d9j8, d9j8, ulpo), ulpo = _6nysa, vg_sny = h_pc$8u;break;case h_xw7hq0:
            w7['warning']('attribute space is required"' + d9j8 + '\x22!!');case h_jwd09:
            vg_sny = h_pc$8u, ulpo = _6nysa;break;case h__g:
            vg_sny = h_xqw71, ulpo = _6nysa;break;case h_pc8$lu:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}_6nysa++;
  }
}function h_yn2a6s(f_gv4n, zhrj, w0hd) {
  for (var dw9j = f_gv4n['tagName'], ays62 = null, f3g47 = f_gv4n['length']; f3g47--;) {
    var u$l5p = f_gv4n[f3g47],
        pcu5$ = u$l5p['qName'],
        g_fnv = u$l5p['value'],
        hz9dwj = pcu5$['indexOf'](':');if (hz9dwj > 0x0) var n_s6ay = u$l5p['prefix'] = pcu5$['slice'](0x0, hz9dwj),
        zpu8$r = pcu5$['slice'](hz9dwj + 0x1),
        rzd9hj = 'xmlns' === n_s6ay && zpu8$r;else zpu8$r = pcu5$, n_s6ay = null, rzd9hj = 'xmlns' === pcu5$ && '';u$l5p['localName'] = zpu8$r, rzd9hj !== !0x1 && (null == ays62 && (ays62 = {}, h_a6sny2(w0hd, w0hd = {})), w0hd[rzd9hj] = ays62[rzd9hj] = g_fnv, u$l5p['uri'] = 'http://www.w3.org/2000/xmlns/', zhrj['startPrefixMapping'](rzd9hj, g_fnv));
  }for (var f3g47 = f_gv4n['length']; f3g47--;) {
    u$l5p = f_gv4n[f3g47];var n_s6ay = u$l5p['prefix'];n_s6ay && ('xml' === n_s6ay && (u$l5p['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== n_s6ay && (u$l5p['uri'] = w0hd[n_s6ay || '']));
  }var hz9dwj = dw9j['indexOf'](':');hz9dwj > 0x0 ? (n_s6ay = f_gv4n['prefix'] = dw9j['slice'](0x0, hz9dwj), zpu8$r = f_gv4n['localName'] = dw9j['slice'](hz9dwj + 0x1)) : (n_s6ay = null, zpu8$r = f_gv4n['localName'] = dw9j);var ayn_s6 = f_gv4n['uri'] = w0hd[n_s6ay || ''];if (zhrj['startElement'](ayn_s6, zpu8$r, dw9j, f_gv4n), !f_gv4n['closed']) return f_gv4n['currentNSMap'] = w0hd, f_gv4n['localNSMap'] = ays62, !0x0;if (zhrj['endElement'](ayn_s6, zpu8$r, dw9j), ays62) {
    for (n_s6ay in ays62) zhrj['endPrefixMapping'](n_s6ay);
  }
}function h_h7qx0(lucop5, x1q4, mltk5o, c5$pu, kto5) {
  if (/^(?:script|textarea)$/i['test'](mltk5o)) {
    var gv143f = lucop5['indexOf']('</' + mltk5o + '>', x1q4),
        x1037 = lucop5['substring'](x1q4 + 0x1, gv143f);if (/[&<]/['test'](x1037)) return (/^script$/i['test'](mltk5o) ? (kto5['characters'](x1037, 0x0, x1037['length']), gv143f) : (x1037 = x1037['replace'](/&#?\w+;/g, c5$pu), kto5['characters'](x1037, 0x0, x1037['length']), gv143f)
    );
  }return x1q4 + 0x1;
}function h_q03x17(dw0hj, tomlc5, tp5lco, p5olcu) {
  var djwzh9 = p5olcu[tp5lco];return null == djwzh9 && (djwzh9 = dw0hj['lastIndexOf']('</' + tp5lco + '>'), tomlc5 > djwzh9 && (djwzh9 = dw0hj['lastIndexOf']('</' + tp5lco)), p5olcu[tp5lco] = djwzh9), tomlc5 > djwzh9;
}function h_a6sny2(abi6e2, qh0dx) {
  for (var x3701 in abi6e2) qh0dx[x3701] = abi6e2[x3701];
}function h_a2be6(ulo5p, pc8u$, fgvs_n, bi62) {
  var navs = ulo5p['charAt'](pc8u$ + 0x2);switch (navs) {case '-':
      if ('-' === ulo5p['charAt'](pc8u$ + 0x3)) {
        var omlt = ulo5p['indexOf']('-->', pc8u$ + 0x4);return omlt > pc8u$ ? (fgvs_n['comment'](ulo5p, pc8u$ + 0x4, omlt - pc8u$ - 0x4), omlt + 0x3) : (bi62['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == ulo5p['substr'](pc8u$ + 0x3, 0x6)) {
        var omlt = ulo5p['indexOf'](']]>', pc8u$ + 0x9);return fgvs_n['startCDATA'](), fgvs_n['characters'](ulo5p, pc8u$ + 0x9, omlt - pc8u$ - 0x9), fgvs_n['endCDATA'](), omlt + 0x3;
      }var qxwh = h_fsgnv_(ulo5p, pc8u$),
          djr8z = qxwh['length'];if (djr8z > 0x1 && /!doctype/i['test'](qxwh[0x0][0x0])) {
        var wdq0hx = qxwh[0x1][0x0],
            vsn_gf = djr8z > 0x3 && /^public$/i['test'](qxwh[0x2][0x0]) && qxwh[0x3][0x0],
            _vans = djr8z > 0x4 && qxwh[0x4][0x0],
            f1374 = qxwh[djr8z - 0x1];return fgvs_n['startDTD'](wdq0hx, vsn_gf && vsn_gf['replace'](/^(['"])(.*?)\1$/, '$2'), _vans && _vans['replace'](/^(['"])(.*?)\1$/, '$2')), fgvs_n['endDTD'](), f1374['index'] + f1374[0x0]['length'];
      }}return -0x1;
}function h__n6(lu5pco, $u8c, s6i2ya) {
  var qx710w = lu5pco['indexOf']('?>', $u8c);if (qx710w) {
    var pclt = lu5pco['substring']($u8c, qx710w)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (pclt) {
      {
        pclt[0x0]['length'];
      }return s6i2ya['processingInstruction'](pclt[0x1], pclt[0x2]), qx710w + 0x2;
    }return -0x1;
  }return -0x1;
}function h_wq07xh() {}function h_v1fg3(r98uz, dz89j) {
  return r98uz['__proto__'] = dz89j, r98uz;
}function h_fsgnv_(_vg43, d9z8rj) {
  var wqx0h,
      ot5cpl = [],
      mko5 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (mko5['lastIndex'] = d9z8rj, mko5['exec'](_vg43); wqx0h = mko5['exec'](_vg43);) if (ot5cpl['push'](wqx0h), wqx0h[0x1]) return ot5cpl;
}var h_l$pc = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    h_m5otc = new RegExp('[\\-\\.0-9' + h_l$pc['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    h_anvsy_ = new RegExp('^' + h_l$pc['source'] + h_m5otc['source'] + '*(?::' + h_l$pc['source'] + h_m5otc['source'] + '*)?$'),
    h_ruzp8$ = 0x0,
    h_pc$8u = 0x1,
    h_otp5l = 0x2,
    h__g = 0x3,
    h_xqw71 = 0x4,
    h_xw7hq0 = 0x5,
    h_jwd09 = 0x6,
    h_pc8$lu = 0x7;h_jzd9r8['prototype'] = { 'parse': function (oclp5, $c8p, ucp8$r) {
    var dj9h0w = this['domBuilder'];dj9h0w['startDocument'](), h_a6sny2($c8p, $c8p = {}), h_u$rc8(oclp5, $c8p, ucp8$r, dj9h0w, this['errorHandler']), dj9h0w['endDocument']();
  } }, h_wq07xh['prototype'] = { 'setTagName': function (fq31) {
    if (!h_anvsy_['test'](fq31)) throw new Error('invalid tagName:' + fq31);this['tagName'] = fq31;
  }, 'add': function (q1w0x, jx0hwd, _ysn) {
    if (!h_anvsy_['test'](q1w0x)) throw new Error('invalid attribute:' + q1w0x);this[this['length']++] = { 'qName': q1w0x, 'value': jx0hwd, 'offset': _ysn };
  }, 'length': 0x0, 'getLocalName': function (ys2n6a) {
    return this[ys2n6a]['localName'];
  }, 'getLocator': function (h9jdzw) {
    return this[h9jdzw]['locator'];
  }, 'getQName': function (u$) {
    return this[u$]['qName'];
  }, 'getURI': function (hj0xdw) {
    return this[hj0xdw]['uri'];
  }, 'getValue': function (xhwq) {
    return this[xhwq]['value'];
  } }, h_v1fg3({}, h_v1fg3['prototype']) instanceof h_v1fg3 || (h_v1fg3 = function (c8l$u, n_syv) {
  function ulopc() {}ulopc['prototype'] = n_syv, ulopc = new ulopc();for (n_syv in c8l$u) ulopc[n_syv] = c8l$u[n_syv];return ulopc;
}), exports['XMLReader'] = h_jzd9r8;