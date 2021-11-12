var c = wx.$o;
function o_zprmc8() {}function o_ohbz4g(z8bohg, x9f, $je0y, nv_l3u, ye0) {
  function mpctr(o9b4gx) {
    if (o9b4gx > 0xffff) {
      o9b4gx -= 0x10000;var v36lad = 0xd800 + (o9b4gx >> 0xa),
          hcrz = 0xdc00 + (0x3ff & o9b4gx);return String['fromCharCode'](v36lad, hcrz);
    }return String['fromCharCode'](o9b4gx);
  }function qmtrs(zb4gho) {
    var n6val = zb4gho['slice'](0x1, -0x1);return n6val in $je0y ? $je0y[n6val] : '#' === n6val['charAt'](0x0) ? mpctr(parseInt(n6val['substr'](0x1)['replace']('x', '0x'))) : (ye0['error']('entity not found:' + zb4gho), zb4gho);
  }function w9i2f(uyv) {
    if (uyv > b9xo4) {
      var k_$ye0 = z8bohg['substring'](b9xo4, uyv)['replace'](/&#?\w+;/g, qmtrs);o8cbh && ykje0$(b9xo4), nv_l3u['characters'](k_$ye0, 0x0, uyv - b9xo4), b9xo4 = uyv;
    }
  }function ykje0$(sqtm5, hzcp8) {
    for (; sqtm5 >= rpc8 && (hzcp8 = d62wi1['exec'](z8bohg));) l_n3v = hzcp8['index'], rpc8 = l_n3v + hzcp8[0x0]['length'], o8cbh['lineNumber']++;o8cbh['columnNumber'] = sqtm5 - l_n3v + 0x1;
  }for (var l_n3v = 0x0, rpc8 = 0x0, d62wi1 = /.*(?:\r\n?|\n)|.*$/g, o8cbh = nv_l3u['locator'], vu3_nl = [{ 'currentNSMap': x9f }], e$0_yk = {}, b9xo4 = 0x0;;) {
    try {
      var i62wd1 = z8bohg['indexOf']('<', b9xo4);if (0x0 > i62wd1) {
        if (!z8bohg['substr'](b9xo4)['match'](/^\s*$/)) {
          var rch8z = nv_l3u['doc'],
              en_y3u = rch8z['createTextNode'](z8bohg['substr'](b9xo4));rch8z['appendChild'](en_y3u), nv_l3u['currentElement'] = en_y3u;
        }return;
      }switch (i62wd1 > b9xo4 && w9i2f(i62wd1), z8bohg['charAt'](i62wd1 + 0x1)) {case '/':
          var _unye = z8bohg['indexOf']('>', i62wd1 + 0x3),
              g9f4o = z8bohg['substring'](i62wd1 + 0x2, _unye),
              i62d = vu3_nl['pop']();0x0 > _unye ? (g9f4o = z8bohg['substring'](i62wd1 + 0x2)['replace'](/[\s<].*/, ''), ye0['error']('end tag name: ' + g9f4o + ' is not complete:' + i62d['tagName']), _unye = i62wd1 + 0x1 + g9f4o['length']) : g9f4o['match'](/\s</) && (g9f4o = g9f4o['replace'](/[\s<].*/, ''), ye0['error']('end tag name: ' + g9f4o + ' maybe not complete'), _unye = i62wd1 + 0x1 + g9f4o['length']);var u_e0 = i62d['localNSMap'],
              qs7 = i62d['tagName'] == g9f4o,
              ms5rqt = qs7 || i62d['tagName'] && i62d['tagName']['toLowerCase']() == g9f4o['toLowerCase']();if (ms5rqt) {
            if (nv_l3u['endElement'](i62d['uri'], i62d['localName'], g9f4o), u_e0) {
              for (var g9xo4b in u_e0) nv_l3u['endPrefixMapping'](g9xo4b);
            }qs7 || ye0['fatalError']('end tag name: ' + g9f4o + ' is not match the current start tagName:' + i62d['tagName']);
          } else vu3_nl['push'](i62d);_unye++;break;case '?':
          o8cbh && ykje0$(i62wd1), _unye = o_gbz8h(z8bohg, i62wd1, nv_l3u);break;case '!':
          o8cbh && ykje0$(i62wd1), _unye = o_p8m5(z8bohg, i62wd1, nv_l3u, ye0);break;default:
          o8cbh && ykje0$(i62wd1);var d1i2wf = new o_sr5m(),
              n3la = vu3_nl[vu3_nl['length'] - 0x1]['currentNSMap'],
              _unye = o_x194f(z8bohg, i62wd1, d1i2wf, n3la, qmtrs, ye0),
              g4obzh = d1i2wf['length'];if (!d1i2wf['closed'] && o_r85(z8bohg, _unye, d1i2wf['tagName'], e$0_yk) && (d1i2wf['closed'] = !0x0, $je0y['nbsp'] || ye0['warning']('unclosed xml attribute')), o8cbh && g4obzh) {
            for (var e_$ky0 = o__eku0(o8cbh, {}), l6id2a = 0x0; g4obzh > l6id2a; l6id2a++) {
              var vyu = d1i2wf[l6id2a];ykje0$(vyu['offset']), vyu['locator'] = o__eku0(o8cbh, {});
            }nv_l3u['locator'] = e_$ky0, o_di6w(d1i2wf, nv_l3u, n3la) && vu3_nl['push'](d1i2wf), nv_l3u['locator'] = o8cbh;
          } else o_di6w(d1i2wf, nv_l3u, n3la) && vu3_nl['push'](d1i2wf);'http://www.w3.org/1999/xhtml' !== d1i2wf['uri'] || d1i2wf['closed'] ? _unye++ : _unye = o_ghb8zo(z8bohg, _unye, d1i2wf['tagName'], qmtrs, nv_l3u);}
    } catch (dlv3a) {
      ye0['error']('element parse error: ' + dlv3a), _unye = -0x1;
    }_unye > b9xo4 ? b9xo4 = _unye : w9i2f(Math['max'](i62wd1, b9xo4) + 0x1);
  }
}function o__eku0(_y$e0k, aid126) {
  return aid126['lineNumber'] = _y$e0k['lineNumber'], aid126['columnNumber'] = _y$e0k['columnNumber'], aid126;
}function o_x194f(ek$y0j, mzrpc, ye_0ku, l6a2vd, z8obch, rphz) {
  for (var nue_3, o4xbgh, ptrm5c = ++mzrpc, cr58pm = o_x9bog4;;) {
    var v36na = ek$y0j['charAt'](ptrm5c);switch (v36na) {case '=':
        if (cr58pm === o_ob4g9) nue_3 = ek$y0j['slice'](mzrpc, ptrm5c), cr58pm = o_da6v2;else {
          if (cr58pm !== o_ghboz4) throw new Error('attribute equal must after attrName');cr58pm = o_da6v2;
        }break;case '\x27':case '\x22':
        if (cr58pm === o_da6v2 || cr58pm === o_ob4g9) {
          if (cr58pm === o_ob4g9 && (rphz['warning']('attribute value must after "="'), nue_3 = ek$y0j['slice'](mzrpc, ptrm5c)), mzrpc = ptrm5c + 0x1, ptrm5c = ek$y0j['indexOf'](v36na, mzrpc), !(ptrm5c > 0x0)) throw new Error('attribute value no end \'' + v36na + '\' match');o4xbgh = ek$y0j['slice'](mzrpc, ptrm5c)['replace'](/&#?\w+;/g, z8obch), ye_0ku['add'](nue_3, o4xbgh, mzrpc - 0x1), cr58pm = o_zhr;
        } else {
          if (cr58pm != o_z4obh) throw new Error('attribute value must after "="');o4xbgh = ek$y0j['slice'](mzrpc, ptrm5c)['replace'](/&#?\w+;/g, z8obch), ye_0ku['add'](nue_3, o4xbgh, mzrpc), rphz['warning']('attribute "' + nue_3 + '" missed start quot(' + v36na + ')!!'), mzrpc = ptrm5c + 0x1, cr58pm = o_zhr;
        }break;case '/':
        switch (cr58pm) {case o_x9bog4:
            ye_0ku['setTagName'](ek$y0j['slice'](mzrpc, ptrm5c));case o_zhr:case o_xb4ohg:case o_tqrm5p:
            cr58pm = o_tqrm5p, ye_0ku['closed'] = !0x0;case o_z4obh:case o_ob4g9:case o_ghboz4:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return rphz['error']('unexpected end of input'), cr58pm == o_x9bog4 && ye_0ku['setTagName'](ek$y0j['slice'](mzrpc, ptrm5c)), ptrm5c;case '>':
        switch (cr58pm) {case o_x9bog4:
            ye_0ku['setTagName'](ek$y0j['slice'](mzrpc, ptrm5c));case o_zhr:case o_xb4ohg:case o_tqrm5p:
            break;case o_z4obh:case o_ob4g9:
            o4xbgh = ek$y0j['slice'](mzrpc, ptrm5c), '/' === o4xbgh['slice'](-0x1) && (ye_0ku['closed'] = !0x0, o4xbgh = o4xbgh['slice'](0x0, -0x1));case o_ghboz4:
            cr58pm === o_ghboz4 && (o4xbgh = nue_3), cr58pm == o_z4obh ? (rphz['warning']('attribute "' + o4xbgh + '" missed quot(")!!'), ye_0ku['add'](nue_3, o4xbgh['replace'](/&#?\w+;/g, z8obch), mzrpc)) : ('http://www.w3.org/1999/xhtml' === l6a2vd[''] && o4xbgh['match'](/^(?:disabled|checked|selected)$/i) || rphz['warning']('attribute "' + o4xbgh + '" missed value!! "' + o4xbgh + '" instead!!'), ye_0ku['add'](o4xbgh, o4xbgh, mzrpc));break;case o_da6v2:
            throw new Error('attribute value missed!!');}return ptrm5c;case '\u0080':
        v36na = '\x20';default:
        if ('\x20' >= v36na) switch (cr58pm) {case o_x9bog4:
            ye_0ku['setTagName'](ek$y0j['slice'](mzrpc, ptrm5c)), cr58pm = o_xb4ohg;break;case o_ob4g9:
            nue_3 = ek$y0j['slice'](mzrpc, ptrm5c), cr58pm = o_ghboz4;break;case o_z4obh:
            var o4xbgh = ek$y0j['slice'](mzrpc, ptrm5c)['replace'](/&#?\w+;/g, z8obch);rphz['warning']('attribute "' + o4xbgh + '" missed quot(")!!'), ye_0ku['add'](nue_3, o4xbgh, mzrpc);case o_zhr:
            cr58pm = o_xb4ohg;} else switch (cr58pm) {case o_ghboz4:
            {
              ye_0ku['tagName'];
            }'http://www.w3.org/1999/xhtml' === l6a2vd[''] && nue_3['match'](/^(?:disabled|checked|selected)$/i) || rphz['warning']('attribute "' + nue_3 + '" missed value!! "' + nue_3 + '" instead2!!'), ye_0ku['add'](nue_3, nue_3, mzrpc), mzrpc = ptrm5c, cr58pm = o_ob4g9;break;case o_zhr:
            rphz['warning']('attribute space is required"' + nue_3 + '\x22!!');case o_xb4ohg:
            cr58pm = o_ob4g9, mzrpc = ptrm5c;break;case o_da6v2:
            cr58pm = o_z4obh, mzrpc = ptrm5c;break;case o_tqrm5p:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}ptrm5c++;
  }
}function o_di6w(vn3_lu, u_ynke, bhz4g) {
  for (var uvna3l = vn3_lu['tagName'], bhg4o = null, uav3l = vn3_lu['length']; uav3l--;) {
    var u_lnv3 = vn3_lu[uav3l],
        hg4bo = u_lnv3['qName'],
        g4zho = u_lnv3['value'],
        tpcr5 = hg4bo['indexOf'](':');if (tpcr5 > 0x0) var iw9f12 = u_lnv3['prefix'] = hg4bo['slice'](0x0, tpcr5),
        bzgo8 = hg4bo['slice'](tpcr5 + 0x1),
        zp8hcb = 'xmlns' === iw9f12 && bzgo8;else bzgo8 = hg4bo, iw9f12 = null, zp8hcb = 'xmlns' === hg4bo && '';u_lnv3['localName'] = bzgo8, zp8hcb !== !0x1 && (null == bhg4o && (bhg4o = {}, o_x4fw1(bhz4g, bhz4g = {})), bhz4g[zp8hcb] = bhg4o[zp8hcb] = g4zho, u_lnv3['uri'] = 'http://www.w3.org/2000/xmlns/', u_ynke['startPrefixMapping'](zp8hcb, g4zho));
  }for (var uav3l = vn3_lu['length']; uav3l--;) {
    u_lnv3 = vn3_lu[uav3l];var iw9f12 = u_lnv3['prefix'];iw9f12 && ('xml' === iw9f12 && (u_lnv3['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== iw9f12 && (u_lnv3['uri'] = bhz4g[iw9f12 || '']));
  }var tpcr5 = uvna3l['indexOf'](':');tpcr5 > 0x0 ? (iw9f12 = vn3_lu['prefix'] = uvna3l['slice'](0x0, tpcr5), bzgo8 = vn3_lu['localName'] = uvna3l['slice'](tpcr5 + 0x1)) : (iw9f12 = null, bzgo8 = vn3_lu['localName'] = uvna3l);var _0ky = vn3_lu['uri'] = bhz4g[iw9f12 || ''];if (u_ynke['startElement'](_0ky, bzgo8, uvna3l, vn3_lu), !vn3_lu['closed']) return vn3_lu['currentNSMap'] = bhz4g, vn3_lu['localNSMap'] = bhg4o, !0x0;if (u_ynke['endElement'](_0ky, bzgo8, uvna3l), bhg4o) {
    for (iw9f12 in bhg4o) u_ynke['endPrefixMapping'](iw9f12);
  }
}function o_ghb8zo(hxg4, fi92, nu3lav, ey0j$k, fx9wi1) {
  if (/^(?:script|textarea)$/i['test'](nu3lav)) {
    var kjye$0 = hxg4['indexOf']('</' + nu3lav + '>', fi92),
        crp85m = hxg4['substring'](fi92 + 0x1, kjye$0);if (/[&<]/['test'](crp85m)) return (/^script$/i['test'](nu3lav) ? (fx9wi1['characters'](crp85m, 0x0, crp85m['length']), kjye$0) : (crp85m = crp85m['replace'](/&#?\w+;/g, ey0j$k), fx9wi1['characters'](crp85m, 0x0, crp85m['length']), kjye$0)
    );
  }return fi92 + 0x1;
}function o_r85(zpmr8, uv_nl3, xh, nl6va) {
  var yeu0_ = nl6va[xh];return null == yeu0_ && (yeu0_ = zpmr8['lastIndexOf']('</' + xh + '>'), uv_nl3 > yeu0_ && (yeu0_ = zpmr8['lastIndexOf']('</' + xh)), nl6va[xh] = yeu0_), uv_nl3 > yeu0_;
}function o_x4fw1(v2l6, zr8hc) {
  for (var va6l3n in v2l6) zr8hc[va6l3n] = v2l6[va6l3n];
}function o_p8m5(o8zhc, aid61, gzohb8, _0ekuy) {
  var iw6d21 = o8zhc['charAt'](aid61 + 0x2);switch (iw6d21) {case '-':
      if ('-' === o8zhc['charAt'](aid61 + 0x3)) {
        var hoz8g = o8zhc['indexOf']('-->', aid61 + 0x4);return hoz8g > aid61 ? (gzohb8['comment'](o8zhc, aid61 + 0x4, hoz8g - aid61 - 0x4), hoz8g + 0x3) : (_0ekuy['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == o8zhc['substr'](aid61 + 0x3, 0x6)) {
        var hoz8g = o8zhc['indexOf'](']]>', aid61 + 0x9);return gzohb8['startCDATA'](), gzohb8['characters'](o8zhc, aid61 + 0x9, hoz8g - aid61 - 0x9), gzohb8['endCDATA'](), hoz8g + 0x3;
      }var u0ye_k = o_gbox94(o8zhc, aid61),
          vn63a = u0ye_k['length'];if (vn63a > 0x1 && /!doctype/i['test'](u0ye_k[0x0][0x0])) {
        var dia6 = u0ye_k[0x1][0x0],
            iw2d1f = vn63a > 0x3 && /^public$/i['test'](u0ye_k[0x2][0x0]) && u0ye_k[0x3][0x0],
            x1w = vn63a > 0x4 && u0ye_k[0x4][0x0],
            ohzc = u0ye_k[vn63a - 0x1];return gzohb8['startDTD'](dia6, iw2d1f && iw2d1f['replace'](/^(['"])(.*?)\1$/, '$2'), x1w && x1w['replace'](/^(['"])(.*?)\1$/, '$2')), gzohb8['endDTD'](), ohzc['index'] + ohzc[0x0]['length'];
      }}return -0x1;
}function o_gbz8h(tmsqr5, ph8zb, u3) {
  var d3lv6 = tmsqr5['indexOf']('?>', ph8zb);if (d3lv6) {
    var smtq7 = tmsqr5['substring'](ph8zb, d3lv6)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (smtq7) {
      {
        smtq7[0x0]['length'];
      }return u3['processingInstruction'](smtq7[0x1], smtq7[0x2]), d3lv6 + 0x2;
    }return -0x1;
  }return -0x1;
}function o_sr5m() {}function o_trpqm5(e_ky0u, _k$0y) {
  return e_ky0u['__proto__'] = _k$0y, e_ky0u;
}function o_gbox94(bg4oxh, mtr5p) {
  var og9xf4,
      yvnu_3 = [],
      adl6v = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (adl6v['lastIndex'] = mtr5p, adl6v['exec'](bg4oxh); og9xf4 = adl6v['exec'](bg4oxh);) if (yvnu_3['push'](og9xf4), og9xf4[0x1]) return yvnu_3;
}var o_bhgxo = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    o_zcpmr = new RegExp('[\\-\\.0-9' + o_bhgxo['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    o_nyu_v3 = new RegExp('^' + o_bhgxo['source'] + o_zcpmr['source'] + '*(?::' + o_bhgxo['source'] + o_zcpmr['source'] + '*)?$'),
    o_x9bog4 = 0x0,
    o_ob4g9 = 0x1,
    o_ghboz4 = 0x2,
    o_da6v2 = 0x3,
    o_z4obh = 0x4,
    o_zhr = 0x5,
    o_xb4ohg = 0x6,
    o_tqrm5p = 0x7;o_zprmc8['prototype'] = { 'parse': function (stmr, zg8boh, qtrm5s) {
    var mrqs5t = this['domBuilder'];mrqs5t['startDocument'](), o_x4fw1(zg8boh, zg8boh = {}), o_ohbz4g(stmr, zg8boh, qtrm5s, mrqs5t, this['errorHandler']), mrqs5t['endDocument']();
  } }, o_sr5m['prototype'] = { 'setTagName': function (cpmzr) {
    if (!o_nyu_v3['test'](cpmzr)) throw new Error('invalid tagName:' + cpmzr);this['tagName'] = cpmzr;
  }, 'add': function (w1f9i, tqp5rm, rc8zpm) {
    if (!o_nyu_v3['test'](w1f9i)) throw new Error('invalid attribute:' + w1f9i);this[this['length']++] = { 'qName': w1f9i, 'value': tqp5rm, 'offset': rc8zpm };
  }, 'length': 0x0, 'getLocalName': function (pb8hcz) {
    return this[pb8hcz]['localName'];
  }, 'getLocator': function (y_k0$e) {
    return this[y_k0$e]['locator'];
  }, 'getQName': function (lua) {
    return this[lua]['qName'];
  }, 'getURI': function (o9xgf) {
    return this[o9xgf]['uri'];
  }, 'getValue': function (zrp8c) {
    return this[zrp8c]['value'];
  } }, o_trpqm5({}, o_trpqm5['prototype']) instanceof o_trpqm5 || (o_trpqm5 = function (d1w26i, dv2) {
  function vn3_uy() {}vn3_uy['prototype'] = dv2, vn3_uy = new vn3_uy();for (dv2 in d1w26i) vn3_uy[dv2] = d1w26i[dv2];return vn3_uy;
}), exports['XMLReader'] = o_zprmc8;