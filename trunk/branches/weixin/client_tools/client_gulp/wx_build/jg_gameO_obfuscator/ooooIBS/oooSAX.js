var c = wx.$o;
function o_i2w91() {}function o_mcr85(x1w94, i92w1f, h8bz, zohcb, o49bx) {
  function q5ts(iw2d61) {
    if (iw2d61 > 0xffff) {
      iw2d61 -= 0x10000;var i2ld6a = 0xd800 + (iw2d61 >> 0xa),
          nye_k = 0xdc00 + (0x3ff & iw2d61);return String['fromCharCode'](i2ld6a, nye_k);
    }return String['fromCharCode'](iw2d61);
  }function kyej0$(pcbh) {
    var xf1w4 = pcbh['slice'](0x1, -0x1);return xf1w4 in h8bz ? h8bz[xf1w4] : '#' === xf1w4['charAt'](0x0) ? q5ts(parseInt(xf1w4['substr'](0x1)['replace']('x', '0x'))) : (o49bx['error']('entity not found:' + pcbh), pcbh);
  }function i6d(fidw12) {
    if (fidw12 > gh8bz) {
      var rzcp = x1w94['substring'](gh8bz, fidw12)['replace'](/&#?\w+;/g, kyej0$);z8hogb && cbzp8h(gh8bz), zohcb['characters'](rzcp, 0x0, fidw12 - gh8bz), gh8bz = fidw12;
    }
  }function cbzp8h(hrpz8, fd21) {
    for (; hrpz8 >= go9b4 && (fd21 = wf1d['exec'](x1w94));) tpqrm = fd21['index'], go9b4 = tpqrm + fd21[0x0]['length'], z8hogb['lineNumber']++;z8hogb['columnNumber'] = hrpz8 - tpqrm + 0x1;
  }for (var tpqrm = 0x0, go9b4 = 0x0, wf1d = /.*(?:\r\n?|\n)|.*$/g, z8hogb = zohcb['locator'], tms75 = [{ 'currentNSMap': i92w1f }], $0_ye = {}, gh8bz = 0x0;;) {
    try {
      var a6id1 = x1w94['indexOf']('<', gh8bz);if (0x0 > a6id1) {
        if (!x1w94['substr'](gh8bz)['match'](/^\s*$/)) {
          var un_y3 = zohcb['doc'],
              h8zcob = un_y3['createTextNode'](x1w94['substr'](gh8bz));un_y3['appendChild'](h8zcob), zohcb['currentElement'] = h8zcob;
        }return;
      }switch (a6id1 > gh8bz && i6d(a6id1), x1w94['charAt'](a6id1 + 0x1)) {case '/':
          var yej$k0 = x1w94['indexOf']('>', a6id1 + 0x3),
              lvu3_n = x1w94['substring'](a6id1 + 0x2, yej$k0),
              h8pzb = tms75['pop']();0x0 > yej$k0 ? (lvu3_n = x1w94['substring'](a6id1 + 0x2)['replace'](/[\s<].*/, ''), o49bx['error']('end tag name: ' + lvu3_n + ' is not complete:' + h8pzb['tagName']), yej$k0 = a6id1 + 0x1 + lvu3_n['length']) : lvu3_n['match'](/\s</) && (lvu3_n = lvu3_n['replace'](/[\s<].*/, ''), o49bx['error']('end tag name: ' + lvu3_n + ' maybe not complete'), yej$k0 = a6id1 + 0x1 + lvu3_n['length']);var _k0$ye = h8pzb['localNSMap'],
              hobgx4 = h8pzb['tagName'] == lvu3_n,
              ct5m = hobgx4 || h8pzb['tagName'] && h8pzb['tagName']['toLowerCase']() == lvu3_n['toLowerCase']();if (ct5m) {
            if (zohcb['endElement'](h8pzb['uri'], h8pzb['localName'], lvu3_n), _k0$ye) {
              for (var d3v6 in _k0$ye) zohcb['endPrefixMapping'](d3v6);
            }hobgx4 || o49bx['fatalError']('end tag name: ' + lvu3_n + ' is not match the current start tagName:' + h8pzb['tagName']);
          } else tms75['push'](h8pzb);yej$k0++;break;case '?':
          z8hogb && cbzp8h(a6id1), yej$k0 = o_mqstr5(x1w94, a6id1, zohcb);break;case '!':
          z8hogb && cbzp8h(a6id1), yej$k0 = o_n6la(x1w94, a6id1, zohcb, o49bx);break;default:
          z8hogb && cbzp8h(a6id1);var aid16 = new o_b8gh(),
              fx94go = tms75[tms75['length'] - 0x1]['currentNSMap'],
              yej$k0 = o_ogbhz8(x1w94, a6id1, aid16, fx94go, kyej0$, o49bx),
              s7q5mt = aid16['length'];if (!aid16['closed'] && o_uy_e3(x1w94, yej$k0, aid16['tagName'], $0_ye) && (aid16['closed'] = !0x0, h8bz['nbsp'] || o49bx['warning']('unclosed xml attribute')), z8hogb && s7q5mt) {
            for (var w9i2f1 = o_fw219(z8hogb, {}), mcr5p8 = 0x0; s7q5mt > mcr5p8; mcr5p8++) {
              var vu3nl = aid16[mcr5p8];cbzp8h(vu3nl['offset']), vu3nl['locator'] = o_fw219(z8hogb, {});
            }zohcb['locator'] = w9i2f1, o_d2ila(aid16, zohcb, fx94go) && tms75['push'](aid16), zohcb['locator'] = z8hogb;
          } else o_d2ila(aid16, zohcb, fx94go) && tms75['push'](aid16);'http://www.w3.org/1999/xhtml' !== aid16['uri'] || aid16['closed'] ? yej$k0++ : yej$k0 = o_ozhb8g(x1w94, yej$k0, aid16['tagName'], kyej0$, zohcb);}
    } catch (lv3na) {
      o49bx['error']('element parse error: ' + lv3na), yej$k0 = -0x1;
    }yej$k0 > gh8bz ? gh8bz = yej$k0 : i6d(Math['max'](a6id1, gh8bz) + 0x1);
  }
}function o_fw219(z8rpm, f9wi) {
  return f9wi['lineNumber'] = z8rpm['lineNumber'], f9wi['columnNumber'] = z8rpm['columnNumber'], f9wi;
}function o_ogbhz8(ogfx, u0_ek, lnv, _kynue, d2alv6, i291w) {
  for (var na3vl, uln3v, av6nl = ++u0_ek, nky_u = o_k0j$ye;;) {
    var ia = ogfx['charAt'](av6nl);switch (ia) {case '=':
        if (nky_u === o_wfi1d2) na3vl = ogfx['slice'](u0_ek, av6nl), nky_u = o_i1a26;else {
          if (nky_u !== o_bhzo8) throw new Error('attribute equal must after attrName');nky_u = o_i1a26;
        }break;case '\x27':case '\x22':
        if (nky_u === o_i1a26 || nky_u === o_wfi1d2) {
          if (nky_u === o_wfi1d2 && (i291w['warning']('attribute value must after "="'), na3vl = ogfx['slice'](u0_ek, av6nl)), u0_ek = av6nl + 0x1, av6nl = ogfx['indexOf'](ia, u0_ek), !(av6nl > 0x0)) throw new Error('attribute value no end \'' + ia + '\' match');uln3v = ogfx['slice'](u0_ek, av6nl)['replace'](/&#?\w+;/g, d2alv6), lnv['add'](na3vl, uln3v, u0_ek - 0x1), nky_u = o_u_e3yn;
        } else {
          if (nky_u != o_c8hpb) throw new Error('attribute value must after "="');uln3v = ogfx['slice'](u0_ek, av6nl)['replace'](/&#?\w+;/g, d2alv6), lnv['add'](na3vl, uln3v, u0_ek), i291w['warning']('attribute "' + na3vl + '" missed start quot(' + ia + ')!!'), u0_ek = av6nl + 0x1, nky_u = o_u_e3yn;
        }break;case '/':
        switch (nky_u) {case o_k0j$ye:
            lnv['setTagName'](ogfx['slice'](u0_ek, av6nl));case o_u_e3yn:case o_ch8bzp:case o_mqrt5s:
            nky_u = o_mqrt5s, lnv['closed'] = !0x0;case o_c8hpb:case o_wfi1d2:case o_bhzo8:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return i291w['error']('unexpected end of input'), nky_u == o_k0j$ye && lnv['setTagName'](ogfx['slice'](u0_ek, av6nl)), av6nl;case '>':
        switch (nky_u) {case o_k0j$ye:
            lnv['setTagName'](ogfx['slice'](u0_ek, av6nl));case o_u_e3yn:case o_ch8bzp:case o_mqrt5s:
            break;case o_c8hpb:case o_wfi1d2:
            uln3v = ogfx['slice'](u0_ek, av6nl), '/' === uln3v['slice'](-0x1) && (lnv['closed'] = !0x0, uln3v = uln3v['slice'](0x0, -0x1));case o_bhzo8:
            nky_u === o_bhzo8 && (uln3v = na3vl), nky_u == o_c8hpb ? (i291w['warning']('attribute "' + uln3v + '" missed quot(")!!'), lnv['add'](na3vl, uln3v['replace'](/&#?\w+;/g, d2alv6), u0_ek)) : ('http://www.w3.org/1999/xhtml' === _kynue[''] && uln3v['match'](/^(?:disabled|checked|selected)$/i) || i291w['warning']('attribute "' + uln3v + '" missed value!! "' + uln3v + '" instead!!'), lnv['add'](uln3v, uln3v, u0_ek));break;case o_i1a26:
            throw new Error('attribute value missed!!');}return av6nl;case '\u0080':
        ia = '\x20';default:
        if ('\x20' >= ia) switch (nky_u) {case o_k0j$ye:
            lnv['setTagName'](ogfx['slice'](u0_ek, av6nl)), nky_u = o_ch8bzp;break;case o_wfi1d2:
            na3vl = ogfx['slice'](u0_ek, av6nl), nky_u = o_bhzo8;break;case o_c8hpb:
            var uln3v = ogfx['slice'](u0_ek, av6nl)['replace'](/&#?\w+;/g, d2alv6);i291w['warning']('attribute "' + uln3v + '" missed quot(")!!'), lnv['add'](na3vl, uln3v, u0_ek);case o_u_e3yn:
            nky_u = o_ch8bzp;} else switch (nky_u) {case o_bhzo8:
            {
              lnv['tagName'];
            }'http://www.w3.org/1999/xhtml' === _kynue[''] && na3vl['match'](/^(?:disabled|checked|selected)$/i) || i291w['warning']('attribute "' + na3vl + '" missed value!! "' + na3vl + '" instead2!!'), lnv['add'](na3vl, na3vl, u0_ek), u0_ek = av6nl, nky_u = o_wfi1d2;break;case o_u_e3yn:
            i291w['warning']('attribute space is required"' + na3vl + '\x22!!');case o_ch8bzp:
            nky_u = o_wfi1d2, u0_ek = av6nl;break;case o_i1a26:
            nky_u = o_c8hpb, u0_ek = av6nl;break;case o_mqrt5s:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}av6nl++;
  }
}function o_d2ila(ln3_uv, ukey_0, r5qs) {
  for (var u_nvl = ln3_uv['tagName'], cbzp = null, q75stm = ln3_uv['length']; q75stm--;) {
    var g8hbz = ln3_uv[q75stm],
        uk0y_ = g8hbz['qName'],
        li2d6a = g8hbz['value'],
        a16d = uk0y_['indexOf'](':');if (a16d > 0x0) var hog = g8hbz['prefix'] = uk0y_['slice'](0x0, a16d),
        _uy0ek = uk0y_['slice'](a16d + 0x1),
        tmq5s7 = 'xmlns' === hog && _uy0ek;else _uy0ek = uk0y_, hog = null, tmq5s7 = 'xmlns' === uk0y_ && '';g8hbz['localName'] = _uy0ek, tmq5s7 !== !0x1 && (null == cbzp && (cbzp = {}, o_tqm5r(r5qs, r5qs = {})), r5qs[tmq5s7] = cbzp[tmq5s7] = li2d6a, g8hbz['uri'] = 'http://www.w3.org/2000/xmlns/', ukey_0['startPrefixMapping'](tmq5s7, li2d6a));
  }for (var q75stm = ln3_uv['length']; q75stm--;) {
    g8hbz = ln3_uv[q75stm];var hog = g8hbz['prefix'];hog && ('xml' === hog && (g8hbz['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== hog && (g8hbz['uri'] = r5qs[hog || '']));
  }var a16d = u_nvl['indexOf'](':');a16d > 0x0 ? (hog = ln3_uv['prefix'] = u_nvl['slice'](0x0, a16d), _uy0ek = ln3_uv['localName'] = u_nvl['slice'](a16d + 0x1)) : (hog = null, _uy0ek = ln3_uv['localName'] = u_nvl);var e0k_u = ln3_uv['uri'] = r5qs[hog || ''];if (ukey_0['startElement'](e0k_u, _uy0ek, u_nvl, ln3_uv), !ln3_uv['closed']) return ln3_uv['currentNSMap'] = r5qs, ln3_uv['localNSMap'] = cbzp, !0x0;if (ukey_0['endElement'](e0k_u, _uy0ek, u_nvl), cbzp) {
    for (hog in cbzp) ukey_0['endPrefixMapping'](hog);
  }
}function o_ozhb8g(h8zpbc, aunl, _3yne, bh4zg, w16d2) {
  if (/^(?:script|textarea)$/i['test'](_3yne)) {
    var w9fg = h8zpbc['indexOf']('</' + _3yne + '>', aunl),
        i92 = h8zpbc['substring'](aunl + 0x1, w9fg);if (/[&<]/['test'](i92)) return (/^script$/i['test'](_3yne) ? (w16d2['characters'](i92, 0x0, i92['length']), w9fg) : (i92 = i92['replace'](/&#?\w+;/g, bh4zg), w16d2['characters'](i92, 0x0, i92['length']), w9fg)
    );
  }return aunl + 0x1;
}function o_uy_e3(rm5tsq, bzhg8o, phc8r, yn_3vu) {
  var t57msq = yn_3vu[phc8r];return null == t57msq && (t57msq = rm5tsq['lastIndexOf']('</' + phc8r + '>'), bzhg8o > t57msq && (t57msq = rm5tsq['lastIndexOf']('</' + phc8r)), yn_3vu[phc8r] = t57msq), bzhg8o > t57msq;
}function o_tqm5r(bh8czo, w9g4f) {
  for (var cprh8z in bh8czo) w9g4f[cprh8z] = bh8czo[cprh8z];
}function o_n6la(u3lan, hozb, ye_u3n, ynu_ke) {
  var nu_v3l = u3lan['charAt'](hozb + 0x2);switch (nu_v3l) {case '-':
      if ('-' === u3lan['charAt'](hozb + 0x3)) {
        var lavd2 = u3lan['indexOf']('-->', hozb + 0x4);return lavd2 > hozb ? (ye_u3n['comment'](u3lan, hozb + 0x4, lavd2 - hozb - 0x4), lavd2 + 0x3) : (ynu_ke['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == u3lan['substr'](hozb + 0x3, 0x6)) {
        var lavd2 = u3lan['indexOf'](']]>', hozb + 0x9);return ye_u3n['startCDATA'](), ye_u3n['characters'](u3lan, hozb + 0x9, lavd2 - hozb - 0x9), ye_u3n['endCDATA'](), lavd2 + 0x3;
      }var k_y$0 = o_gz4(u3lan, hozb),
          liad2 = k_y$0['length'];if (liad2 > 0x1 && /!doctype/i['test'](k_y$0[0x0][0x0])) {
        var go9x4f = k_y$0[0x1][0x0],
            nu_vl3 = liad2 > 0x3 && /^public$/i['test'](k_y$0[0x2][0x0]) && k_y$0[0x3][0x0],
            y$0_ke = liad2 > 0x4 && k_y$0[0x4][0x0],
            xf91wi = k_y$0[liad2 - 0x1];return ye_u3n['startDTD'](go9x4f, nu_vl3 && nu_vl3['replace'](/^(['"])(.*?)\1$/, '$2'), y$0_ke && y$0_ke['replace'](/^(['"])(.*?)\1$/, '$2')), ye_u3n['endDTD'](), xf91wi['index'] + xf91wi[0x0]['length'];
      }}return -0x1;
}function o_mqstr5(l62adv, lnuav, zobg4h) {
  var d6v2a = l62adv['indexOf']('?>', lnuav);if (d6v2a) {
    var gx9o4f = l62adv['substring'](lnuav, d6v2a)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (gx9o4f) {
      {
        gx9o4f[0x0]['length'];
      }return zobg4h['processingInstruction'](gx9o4f[0x1], gx9o4f[0x2]), d6v2a + 0x2;
    }return -0x1;
  }return -0x1;
}function o_b8gh() {}function o_x9bo4(eyun_k, keyn) {
  return eyun_k['__proto__'] = keyn, eyun_k;
}function o_gz4(hbzp, ek$_y0) {
  var pr5ctm,
      k_$ey0 = [],
      rzcph8 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (rzcph8['lastIndex'] = ek$_y0, rzcph8['exec'](hbzp); pr5ctm = rzcph8['exec'](hbzp);) if (k_$ey0['push'](pr5ctm), pr5ctm[0x1]) return k_$ey0;
}var o_czbp8 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    o_mpr58c = new RegExp('[\\-\\.0-9' + o_czbp8['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    o_czr8mp = new RegExp('^' + o_czbp8['source'] + o_mpr58c['source'] + '*(?::' + o_czbp8['source'] + o_mpr58c['source'] + '*)?$'),
    o_k0j$ye = 0x0,
    o_wfi1d2 = 0x1,
    o_bhzo8 = 0x2,
    o_i1a26 = 0x3,
    o_c8hpb = 0x4,
    o_u_e3yn = 0x5,
    o_ch8bzp = 0x6,
    o_mqrt5s = 0x7;o_i2w91['prototype'] = { 'parse': function (bxgo49, zhr, zcmpr8) {
    var wf4x91 = this['domBuilder'];wf4x91['startDocument'](), o_tqm5r(zhr, zhr = {}), o_mcr85(bxgo49, zhr, zcmpr8, wf4x91, this['errorHandler']), wf4x91['endDocument']();
  } }, o_b8gh['prototype'] = { 'setTagName': function (stmq) {
    if (!o_czr8mp['test'](stmq)) throw new Error('invalid tagName:' + stmq);this['tagName'] = stmq;
  }, 'add': function (l3dav6, cpb8zh, xgf94o) {
    if (!o_czr8mp['test'](l3dav6)) throw new Error('invalid attribute:' + l3dav6);this[this['length']++] = { 'qName': l3dav6, 'value': cpb8zh, 'offset': xgf94o };
  }, 'length': 0x0, 'getLocalName': function (t5crpm) {
    return this[t5crpm]['localName'];
  }, 'getLocator': function (ekn_uy) {
    return this[ekn_uy]['locator'];
  }, 'getQName': function (zbhg4) {
    return this[zbhg4]['qName'];
  }, 'getURI': function (ue_nk) {
    return this[ue_nk]['uri'];
  }, 'getValue': function (ixf19) {
    return this[ixf19]['value'];
  } }, o_x9bo4({}, o_x9bo4['prototype']) instanceof o_x9bo4 || (o_x9bo4 = function (rhzp8c, k_$ye0) {
  function iw62() {}iw62['prototype'] = k_$ye0, iw62 = new iw62();for (k_$ye0 in rhzp8c) iw62[k_$ye0] = rhzp8c[k_$ye0];return iw62;
}), exports['XMLReader'] = o_i2w91;