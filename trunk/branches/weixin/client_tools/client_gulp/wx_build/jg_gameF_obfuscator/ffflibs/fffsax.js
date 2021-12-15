var k = wx.$f;
function ft5h0k() {}function fh0timf(wesxnd, _co2, ojcs6d, tfhm, c6o) {
  function codj(btimfh) {
    if (btimfh > 0xffff) {
      btimfh -= 0x10000;var bivu91 = 0xd800 + (btimfh >> 0xa),
          w8nxe = 0xdc00 + (0x3ff & btimfh);return String['fromCharCode'](bivu91, w8nxe);
    }return String['fromCharCode'](btimfh);
  }function zr$7e8(owdjc) {
    var ibmt = owdjc['slice'](0x1, -0x1);return ibmt in ojcs6d ? ojcs6d[ibmt] : '#' === ibmt['charAt'](0x0) ? codj(parseInt(ibmt['substr'](0x1)['replace']('x', '0x'))) : (c6o['error']('entity not found:' + owdjc), owdjc);
  }function ivtbfm(oj62cd) {
    if (oj62cd > csd6) {
      var o6j = wesxnd['substring'](csd6, oj62cd)['replace'](/&#?\w+;/g, zr$7e8);k05t && dxnsj(csd6), tfhm['characters'](o6j, 0x0, oj62cd - csd6), csd6 = oj62cd;
    }
  }function dxnsj(y3$7r, xnzr8e) {
    for (; y3$7r >= y73$ra && (xnzr8e = tfm0q['exec'](wesxnd));) sd6jo = xnzr8e['index'], y73$ra = sd6jo + xnzr8e[0x0]['length'], k05t['lineNumber']++;k05t['columnNumber'] = y3$7r - sd6jo + 0x1;
  }for (var sd6jo = 0x0, y73$ra = 0x0, tfm0q = /.*(?:\r\n?|\n)|.*$/g, k05t = tfhm['locator'], $y73r8 = [{ 'currentNSMap': _co2 }], y$r = {}, csd6 = 0x0;;) {
    try {
      var vbiftm = wesxnd['indexOf']('<', csd6);if (0x0 > vbiftm) {
        if (!wesxnd['substr'](csd6)['match'](/^\s*$/)) {
          var ifvbmu = tfhm['doc'],
              tfqh05 = ifvbmu['createTextNode'](wesxnd['substr'](csd6));ifvbmu['appendChild'](tfqh05), tfhm['currentElement'] = tfqh05;
        }return;
      }switch (vbiftm > csd6 && ivtbfm(vbiftm), wesxnd['charAt'](vbiftm + 0x1)) {case '/':
          var a73y$ = wesxnd['indexOf']('>', vbiftm + 0x3),
              mvfb = wesxnd['substring'](vbiftm + 0x2, a73y$),
              xe7z8r = $y73r8['pop']();0x0 > a73y$ ? (mvfb = wesxnd['substring'](vbiftm + 0x2)['replace'](/[\s<].*/, ''), c6o['error']('end tag name: ' + mvfb + ' is not complete:' + xe7z8r['tagName']), a73y$ = vbiftm + 0x1 + mvfb['length']) : mvfb['match'](/\s</) && (mvfb = mvfb['replace'](/[\s<].*/, ''), c6o['error']('end tag name: ' + mvfb + ' maybe not complete'), a73y$ = vbiftm + 0x1 + mvfb['length']);var sjowcd = xe7z8r['localNSMap'],
              c_o62 = xe7z8r['tagName'] == mvfb,
              swnd = c_o62 || xe7z8r['tagName'] && xe7z8r['tagName']['toLowerCase']() == mvfb['toLowerCase']();if (swnd) {
            if (tfhm['endElement'](xe7z8r['uri'], xe7z8r['localName'], mvfb), sjowcd) {
              for (var cjnsw in sjowcd) tfhm['endPrefixMapping'](cjnsw);
            }c_o62 || c6o['fatalError']('end tag name: ' + mvfb + ' is not match the current start tagName:' + xe7z8r['tagName']);
          } else $y73r8['push'](xe7z8r);a73y$++;break;case '?':
          k05t && dxnsj(vbiftm), a73y$ = ftm0ihf(wesxnd, vbiftm, tfhm);break;case '!':
          k05t && dxnsj(vbiftm), a73y$ = fc26(wesxnd, vbiftm, tfhm, c6o);break;default:
          k05t && dxnsj(vbiftm);var jdwsn = new fcsojdw(),
              xzre78 = $y73r8[$y73r8['length'] - 0x1]['currentNSMap'],
              a73y$ = fay37$(wesxnd, vbiftm, jdwsn, xzre78, zr$7e8, c6o),
              ze$87r = jdwsn['length'];if (!jdwsn['closed'] && fezrx7(wesxnd, a73y$, jdwsn['tagName'], y$r) && (jdwsn['closed'] = !0x0, ojcs6d['nbsp'] || c6o['warning']('unclosed xml attribute')), k05t && ze$87r) {
            for (var fvmubi = fkt5qh0(k05t, {}), zxre8 = 0x0; ze$87r > zxre8; zxre8++) {
              var cjdsnw = jdwsn[zxre8];dxnsj(cjdsnw['offset']), cjdsnw['locator'] = fkt5qh0(k05t, {});
            }tfhm['locator'] = fvmubi, fmitf(jdwsn, tfhm, xzre78) && $y73r8['push'](jdwsn), tfhm['locator'] = k05t;
          } else fmitf(jdwsn, tfhm, xzre78) && $y73r8['push'](jdwsn);'http://www.w3.org/1999/xhtml' !== jdwsn['uri'] || jdwsn['closed'] ? a73y$++ : a73y$ = fjc2o6(wesxnd, a73y$, jdwsn['tagName'], zr$7e8, tfhm);}
    } catch (zxe78r) {
      c6o['error']('element parse error: ' + zxe78r), a73y$ = -0x1;
    }a73y$ > csd6 ? csd6 = a73y$ : ivtbfm(Math['max'](vbiftm, csd6) + 0x1);
  }
}function fkt5qh0(xe8zw, p7a3) {
  return p7a3['lineNumber'] = xe8zw['lineNumber'], p7a3['columnNumber'] = xe8zw['columnNumber'], p7a3;
}function fay37$(cjd6o, r8z$e, o62k_, jcdo6, qk054_, osdcw) {
  for (var _42c, cjwod, sdco6 = ++r8z$e, xr8zne = fmqfh;;) {
    var p7$3 = cjd6o['charAt'](sdco6);switch (p7$3) {case '=':
        if (xr8zne === fwnxdse) _42c = cjd6o['slice'](r8z$e, sdco6), xr8zne = fdj2o6c;else {
          if (xr8zne !== fj64o2) throw new Error('attribute equal must after attrName');xr8zne = fdj2o6c;
        }break;case '\x27':case '\x22':
        if (xr8zne === fdj2o6c || xr8zne === fwnxdse) {
          if (xr8zne === fwnxdse && (osdcw['warning']('attribute value must after "="'), _42c = cjd6o['slice'](r8z$e, sdco6)), r8z$e = sdco6 + 0x1, sdco6 = cjd6o['indexOf'](p7$3, r8z$e), !(sdco6 > 0x0)) throw new Error('attribute value no end \'' + p7$3 + '\' match');cjwod = cjd6o['slice'](r8z$e, sdco6)['replace'](/&#?\w+;/g, qk054_), o62k_['add'](_42c, cjwod, r8z$e - 0x1), xr8zne = fvbufim;
        } else {
          if (xr8zne != fhim0) throw new Error('attribute value must after "="');cjwod = cjd6o['slice'](r8z$e, sdco6)['replace'](/&#?\w+;/g, qk054_), o62k_['add'](_42c, cjwod, r8z$e), osdcw['warning']('attribute "' + _42c + '" missed start quot(' + p7$3 + ')!!'), r8z$e = sdco6 + 0x1, xr8zne = fvbufim;
        }break;case '/':
        switch (xr8zne) {case fmqfh:
            o62k_['setTagName'](cjd6o['slice'](r8z$e, sdco6));case fvbufim:case fy873r:case fy78r:
            xr8zne = fy78r, o62k_['closed'] = !0x0;case fhim0:case fwnxdse:case fj64o2:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return osdcw['error']('unexpected end of input'), xr8zne == fmqfh && o62k_['setTagName'](cjd6o['slice'](r8z$e, sdco6)), sdco6;case '>':
        switch (xr8zne) {case fmqfh:
            o62k_['setTagName'](cjd6o['slice'](r8z$e, sdco6));case fvbufim:case fy873r:case fy78r:
            break;case fhim0:case fwnxdse:
            cjwod = cjd6o['slice'](r8z$e, sdco6), '/' === cjwod['slice'](-0x1) && (o62k_['closed'] = !0x0, cjwod = cjwod['slice'](0x0, -0x1));case fj64o2:
            xr8zne === fj64o2 && (cjwod = _42c), xr8zne == fhim0 ? (osdcw['warning']('attribute "' + cjwod + '" missed quot(")!!'), o62k_['add'](_42c, cjwod['replace'](/&#?\w+;/g, qk054_), r8z$e)) : ('http://www.w3.org/1999/xhtml' === jcdo6[''] && cjwod['match'](/^(?:disabled|checked|selected)$/i) || osdcw['warning']('attribute "' + cjwod + '" missed value!! "' + cjwod + '" instead!!'), o62k_['add'](cjwod, cjwod, r8z$e));break;case fdj2o6c:
            throw new Error('attribute value missed!!');}return sdco6;case '\u0080':
        p7$3 = '\x20';default:
        if ('\x20' >= p7$3) switch (xr8zne) {case fmqfh:
            o62k_['setTagName'](cjd6o['slice'](r8z$e, sdco6)), xr8zne = fy873r;break;case fwnxdse:
            _42c = cjd6o['slice'](r8z$e, sdco6), xr8zne = fj64o2;break;case fhim0:
            var cjwod = cjd6o['slice'](r8z$e, sdco6)['replace'](/&#?\w+;/g, qk054_);osdcw['warning']('attribute "' + cjwod + '" missed quot(")!!'), o62k_['add'](_42c, cjwod, r8z$e);case fvbufim:
            xr8zne = fy873r;} else switch (xr8zne) {case fj64o2:
            {
              o62k_['tagName'];
            }'http://www.w3.org/1999/xhtml' === jcdo6[''] && _42c['match'](/^(?:disabled|checked|selected)$/i) || osdcw['warning']('attribute "' + _42c + '" missed value!! "' + _42c + '" instead2!!'), o62k_['add'](_42c, _42c, r8z$e), r8z$e = sdco6, xr8zne = fwnxdse;break;case fvbufim:
            osdcw['warning']('attribute space is required"' + _42c + '\x22!!');case fy873r:
            xr8zne = fwnxdse, r8z$e = sdco6;break;case fdj2o6c:
            xr8zne = fhim0, r8z$e = sdco6;break;case fy78r:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}sdco6++;
  }
}function fmitf(bui1v, ibvufm, h0mfi) {
  for (var cndsjw = bui1v['tagName'], k45_2 = null, cjwdsn = bui1v['length']; cjwdsn--;) {
    var vb1um = bui1v[cjwdsn],
        exz87r = vb1um['qName'],
        nsxd = vb1um['value'],
        wcodsj = exz87r['indexOf'](':');if (wcodsj > 0x0) var zsxwne = vb1um['prefix'] = exz87r['slice'](0x0, wcodsj),
        mvti = exz87r['slice'](wcodsj + 0x1),
        v19u = 'xmlns' === zsxwne && mvti;else mvti = exz87r, zsxwne = null, v19u = 'xmlns' === exz87r && '';vb1um['localName'] = mvti, v19u !== !0x1 && (null == k45_2 && (k45_2 = {}, f_q52k4(h0mfi, h0mfi = {})), h0mfi[v19u] = k45_2[v19u] = nsxd, vb1um['uri'] = 'http://www.w3.org/2000/xmlns/', ibvufm['startPrefixMapping'](v19u, nsxd));
  }for (var cjwdsn = bui1v['length']; cjwdsn--;) {
    vb1um = bui1v[cjwdsn];var zsxwne = vb1um['prefix'];zsxwne && ('xml' === zsxwne && (vb1um['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== zsxwne && (vb1um['uri'] = h0mfi[zsxwne || '']));
  }var wcodsj = cndsjw['indexOf'](':');wcodsj > 0x0 ? (zsxwne = bui1v['prefix'] = cndsjw['slice'](0x0, wcodsj), mvti = bui1v['localName'] = cndsjw['slice'](wcodsj + 0x1)) : (zsxwne = null, mvti = bui1v['localName'] = cndsjw);var vu91bg = bui1v['uri'] = h0mfi[zsxwne || ''];if (ibvufm['startElement'](vu91bg, mvti, cndsjw, bui1v), !bui1v['closed']) return bui1v['currentNSMap'] = h0mfi, bui1v['localNSMap'] = k45_2, !0x0;if (ibvufm['endElement'](vu91bg, mvti, cndsjw), k45_2) {
    for (zsxwne in k45_2) ibvufm['endPrefixMapping'](zsxwne);
  }
}function fjc2o6(z7$3r, nwed, _o6c42, hm0ft, owdcs) {
  if (/^(?:script|textarea)$/i['test'](_o6c42)) {
    var y$73ra = z7$3r['indexOf']('</' + _o6c42 + '>', nwed),
        ht5q0 = z7$3r['substring'](nwed + 0x1, y$73ra);if (/[&<]/['test'](ht5q0)) return (/^script$/i['test'](_o6c42) ? (owdcs['characters'](ht5q0, 0x0, ht5q0['length']), y$73ra) : (ht5q0 = ht5q0['replace'](/&#?\w+;/g, hm0ft), owdcs['characters'](ht5q0, 0x0, ht5q0['length']), y$73ra)
    );
  }return nwed + 0x1;
}function fezrx7(cs6jo, wsnzx, bui1v9, bvg91) {
  var $pay3 = bvg91[bui1v9];return null == $pay3 && ($pay3 = cs6jo['lastIndexOf']('</' + bui1v9 + '>'), wsnzx > $pay3 && ($pay3 = cs6jo['lastIndexOf']('</' + bui1v9)), bvg91[bui1v9] = $pay3), wsnzx > $pay3;
}function f_q52k4(fitbmv, sdjx) {
  for (var _46o2c in fitbmv) sdjx[_46o2c] = fitbmv[_46o2c];
}function fc26(bu9gv1, x8ze, dsco, wdjxsn) {
  var z7e8$r = bu9gv1['charAt'](x8ze + 0x2);switch (z7e8$r) {case '-':
      if ('-' === bu9gv1['charAt'](x8ze + 0x3)) {
        var $73ayr = bu9gv1['indexOf']('-->', x8ze + 0x4);return $73ayr > x8ze ? (dsco['comment'](bu9gv1, x8ze + 0x4, $73ayr - x8ze - 0x4), $73ayr + 0x3) : (wdjxsn['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == bu9gv1['substr'](x8ze + 0x3, 0x6)) {
        var $73ayr = bu9gv1['indexOf'](']]>', x8ze + 0x9);return dsco['startCDATA'](), dsco['characters'](bu9gv1, x8ze + 0x9, $73ayr - x8ze - 0x9), dsco['endCDATA'](), $73ayr + 0x3;
      }var $a73yp = fmfh0t(bu9gv1, x8ze),
          hmfbi = $a73yp['length'];if (hmfbi > 0x1 && /!doctype/i['test']($a73yp[0x0][0x0])) {
        var _kq425 = $a73yp[0x1][0x0],
            $8ry37 = hmfbi > 0x3 && /^public$/i['test']($a73yp[0x2][0x0]) && $a73yp[0x3][0x0],
            jo26d = hmfbi > 0x4 && $a73yp[0x4][0x0],
            fth50q = $a73yp[hmfbi - 0x1];return dsco['startDTD'](_kq425, $8ry37 && $8ry37['replace'](/^(['"])(.*?)\1$/, '$2'), jo26d && jo26d['replace'](/^(['"])(.*?)\1$/, '$2')), dsco['endDTD'](), fth50q['index'] + fth50q[0x0]['length'];
      }}return -0x1;
}function ftm0ihf(cdwsj, uibv91, h_05q) {
  var vmtibf = cdwsj['indexOf']('?>', uibv91);if (vmtibf) {
    var jc6d = cdwsj['substring'](uibv91, vmtibf)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (jc6d) {
      {
        jc6d[0x0]['length'];
      }return h_05q['processingInstruction'](jc6d[0x1], jc6d[0x2]), vmtibf + 0x2;
    }return -0x1;
  }return -0x1;
}function fcsojdw() {}function fmhf0i(t0q5f, mt0hfq) {
  return t0q5f['__proto__'] = mt0hfq, t0q5f;
}function fmfh0t(djxsn, bu1iv) {
  var nwezx8,
      $3yar7 = [],
      er78z = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (er78z['lastIndex'] = bu1iv, er78z['exec'](djxsn); nwezx8 = er78z['exec'](djxsn);) if ($3yar7['push'](nwezx8), nwezx8[0x1]) return $3yar7;
}var fwocdj = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    fn8rex = new RegExp('[\\-\\.0-9' + fwocdj['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    fb1g9uv = new RegExp('^' + fwocdj['source'] + fn8rex['source'] + '*(?::' + fwocdj['source'] + fn8rex['source'] + '*)?$'),
    fmqfh = 0x0,
    fwnxdse = 0x1,
    fj64o2 = 0x2,
    fdj2o6c = 0x3,
    fhim0 = 0x4,
    fvbufim = 0x5,
    fy873r = 0x6,
    fy78r = 0x7;ft5h0k['prototype'] = { 'parse': function (ivmbu, z$837, wncsd) {
    var $a3r7 = this['domBuilder'];$a3r7['startDocument'](), f_q52k4(z$837, z$837 = {}), fh0timf(ivmbu, z$837, wncsd, $a3r7, this['errorHandler']), $a3r7['endDocument']();
  } }, fcsojdw['prototype'] = { 'setTagName': function (snjdwc) {
    if (!fb1g9uv['test'](snjdwc)) throw new Error('invalid tagName:' + snjdwc);this['tagName'] = snjdwc;
  }, 'add': function (pa$, o4_6k2, gb9vu1) {
    if (!fb1g9uv['test'](pa$)) throw new Error('invalid attribute:' + pa$);this[this['length']++] = { 'qName': pa$, 'value': o4_6k2, 'offset': gb9vu1 };
  }, 'length': 0x0, 'getLocalName': function (xwends) {
    return this[xwends]['localName'];
  }, 'getLocator': function (kh05t) {
    return this[kh05t]['locator'];
  }, 'getQName': function (btivf) {
    return this[btivf]['qName'];
  }, 'getURI': function (fht50) {
    return this[fht50]['uri'];
  }, 'getValue': function (u1bv9i) {
    return this[u1bv9i]['value'];
  } }, fmhf0i({}, fmhf0i['prototype']) instanceof fmhf0i || (fmhf0i = function (tivb, uvbg91) {
  function ndxe() {}ndxe['prototype'] = uvbg91, ndxe = new ndxe();for (uvbg91 in tivb) ndxe[uvbg91] = tivb[uvbg91];return ndxe;
}), exports['XMLReader'] = ft5h0k;