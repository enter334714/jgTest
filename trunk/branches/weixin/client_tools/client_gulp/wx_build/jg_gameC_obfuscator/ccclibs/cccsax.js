var p = wx.$h;
function a_i6$8() {}function a_iz9yb(ldmc, yi$boe, sjf3t, nrwpa2, o$iby) {
  function iy6e$(c5st1d) {
    if (c5st1d > 0xffff) {
      c5st1d -= 0x10000;var tjfcs = 0xd800 + (c5st1d >> 0xa),
          ozybi9 = 0xdc00 + (0x3ff & c5st1d);return String['fromCharCode'](tjfcs, ozybi9);
    }return String['fromCharCode'](c5st1d);
  }function h_gxv(byi$o) {
    var oyz9b = byi$o['slice'](0x1, -0x1);return oyz9b in sjf3t ? sjf3t[oyz9b] : '#' === oyz9b['charAt'](0x0) ? iy6e$(parseInt(oyz9b['substr'](0x1)['replace']('x', '0x'))) : (o$iby['error']('entity not found:' + byi$o), byi$o);
  }function pw2rn(ct51j) {
    if (ct51j > ziob9y) {
      var j371 = ldmc['substring'](ziob9y, ct51j)['replace'](/&#?\w+;/g, h_gxv);v8_0gh && p37w4a(ziob9y), nrwpa2['characters'](j371, 0x0, ct51j - ziob9y), ziob9y = ct51j;
    }
  }function p37w4a(y6ei, xv_h0) {
    for (; y6ei >= iyzb9o && (xv_h0 = by9ozq['exec'](ldmc));) t374fj = xv_h0['index'], iyzb9o = t374fj + xv_h0[0x0]['length'], v8_0gh['lineNumber']++;v8_0gh['columnNumber'] = y6ei - t374fj + 0x1;
  }for (var t374fj = 0x0, iyzb9o = 0x0, by9ozq = /.*(?:\r\n?|\n)|.*$/g, v8_0gh = nrwpa2['locator'], nw4rpa = [{ 'currentNSMap': yi$boe }], p4anr = {}, ziob9y = 0x0;;) {
    try {
      var pa43f7 = ldmc['indexOf']('<', ziob9y);if (0x0 > pa43f7) {
        if (!ldmc['substr'](ziob9y)['match'](/^\s*$/)) {
          var jfs = nrwpa2['doc'],
              i6$eby = jfs['createTextNode'](ldmc['substr'](ziob9y));jfs['appendChild'](i6$eby), nrwpa2['currentElement'] = i6$eby;
        }return;
      }switch (pa43f7 > ziob9y && pw2rn(pa43f7), ldmc['charAt'](pa43f7 + 0x1)) {case '/':
          var xvn_2 = ldmc['indexOf']('>', pa43f7 + 0x3),
              r2paw = ldmc['substring'](pa43f7 + 0x2, xvn_2),
              hkg80_ = nw4rpa['pop']();0x0 > xvn_2 ? (r2paw = ldmc['substring'](pa43f7 + 0x2)['replace'](/[\s<].*/, ''), o$iby['error']('end tag name: ' + r2paw + ' is not complete:' + hkg80_['tagName']), xvn_2 = pa43f7 + 0x1 + r2paw['length']) : r2paw['match'](/\s</) && (r2paw = r2paw['replace'](/[\s<].*/, ''), o$iby['error']('end tag name: ' + r2paw + ' maybe not complete'), xvn_2 = pa43f7 + 0x1 + r2paw['length']);var i8$6ek = hkg80_['localNSMap'],
              a7p43w = hkg80_['tagName'] == r2paw,
              w4r7a = a7p43w || hkg80_['tagName'] && hkg80_['tagName']['toLowerCase']() == r2paw['toLowerCase']();if (w4r7a) {
            if (nrwpa2['endElement'](hkg80_['uri'], hkg80_['localName'], r2paw), i8$6ek) {
              for (var f4aj in i8$6ek) nrwpa2['endPrefixMapping'](f4aj);
            }a7p43w || o$iby['fatalError']('end tag name: ' + r2paw + ' is not match the current start tagName:' + hkg80_['tagName']);
          } else nw4rpa['push'](hkg80_);xvn_2++;break;case '?':
          v8_0gh && p37w4a(pa43f7), xvn_2 = a_k6eyi$(ldmc, pa43f7, nrwpa2);break;case '!':
          v8_0gh && p37w4a(pa43f7), xvn_2 = a_ts1c5j(ldmc, pa43f7, nrwpa2, o$iby);break;default:
          v8_0gh && p37w4a(pa43f7);var w2ra = new a_n4rpwa(),
              tcj = nw4rpa[nw4rpa['length'] - 0x1]['currentNSMap'],
              xvn_2 = a_s5m1(ldmc, pa43f7, w2ra, tcj, h_gxv, o$iby),
              kg06 = w2ra['length'];if (!w2ra['closed'] && a_kh$860(ldmc, xvn_2, w2ra['tagName'], p4anr) && (w2ra['closed'] = !0x0, sjf3t['nbsp'] || o$iby['warning']('unclosed xml attribute')), v8_0gh && kg06) {
            for (var nvxr_2 = a_obei9(v8_0gh, {}), izb9 = 0x0; kg06 > izb9; izb9++) {
              var ranwp = w2ra[izb9];p37w4a(ranwp['offset']), ranwp['locator'] = a_obei9(v8_0gh, {});
            }nrwpa2['locator'] = nvxr_2, a_xr_v2n(w2ra, nrwpa2, tcj) && nw4rpa['push'](w2ra), nrwpa2['locator'] = v8_0gh;
          } else a_xr_v2n(w2ra, nrwpa2, tcj) && nw4rpa['push'](w2ra);'http://www.w3.org/1999/xhtml' !== w2ra['uri'] || w2ra['closed'] ? xvn_2++ : xvn_2 = a_jc1fst(ldmc, xvn_2, w2ra['tagName'], h_gxv, nrwpa2);}
    } catch (j37tf) {
      o$iby['error']('element parse error: ' + j37tf), xvn_2 = -0x1;
    }xvn_2 > ziob9y ? ziob9y = xvn_2 : pw2rn(Math['max'](pa43f7, ziob9y) + 0x1);
  }
}function a_obei9(ft1sc, _xvgn2) {
  return _xvgn2['lineNumber'] = ft1sc['lineNumber'], _xvgn2['columnNumber'] = ft1sc['columnNumber'], _xvgn2;
}function a_s5m1(j3f71, dmc5l, vnr, pran4w, hgv80, f437ja) {
  for (var fjst31, h6$ke, hk8e$6 = ++dmc5l, v20x = a_t1jcf;;) {
    var $k8h0 = j3f71['charAt'](hk8e$6);switch ($k8h0) {case '=':
        if (v20x === a_d1cst) fjst31 = j3f71['slice'](dmc5l, hk8e$6), v20x = a_eoi9yb;else {
          if (v20x !== a_ds5tc1) throw new Error('attribute equal must after attrName');v20x = a_eoi9yb;
        }break;case '\x27':case '\x22':
        if (v20x === a_eoi9yb || v20x === a_d1cst) {
          if (v20x === a_d1cst && (f437ja['warning']('attribute value must after "="'), fjst31 = j3f71['slice'](dmc5l, hk8e$6)), dmc5l = hk8e$6 + 0x1, hk8e$6 = j3f71['indexOf']($k8h0, dmc5l), !(hk8e$6 > 0x0)) throw new Error('attribute value no end \'' + $k8h0 + '\' match');h6$ke = j3f71['slice'](dmc5l, hk8e$6)['replace'](/&#?\w+;/g, hgv80), vnr['add'](fjst31, h6$ke, dmc5l - 0x1), v20x = a_dm1sc;
        } else {
          if (v20x != a_ctf1s) throw new Error('attribute value must after "="');h6$ke = j3f71['slice'](dmc5l, hk8e$6)['replace'](/&#?\w+;/g, hgv80), vnr['add'](fjst31, h6$ke, dmc5l), f437ja['warning']('attribute "' + fjst31 + '" missed start quot(' + $k8h0 + ')!!'), dmc5l = hk8e$6 + 0x1, v20x = a_dm1sc;
        }break;case '/':
        switch (v20x) {case a_t1jcf:
            vnr['setTagName'](j3f71['slice'](dmc5l, hk8e$6));case a_dm1sc:case a_stc5:case a_c15sj:
            v20x = a_c15sj, vnr['closed'] = !0x0;case a_ctf1s:case a_d1cst:case a_ds5tc1:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return f437ja['error']('unexpected end of input'), v20x == a_t1jcf && vnr['setTagName'](j3f71['slice'](dmc5l, hk8e$6)), hk8e$6;case '>':
        switch (v20x) {case a_t1jcf:
            vnr['setTagName'](j3f71['slice'](dmc5l, hk8e$6));case a_dm1sc:case a_stc5:case a_c15sj:
            break;case a_ctf1s:case a_d1cst:
            h6$ke = j3f71['slice'](dmc5l, hk8e$6), '/' === h6$ke['slice'](-0x1) && (vnr['closed'] = !0x0, h6$ke = h6$ke['slice'](0x0, -0x1));case a_ds5tc1:
            v20x === a_ds5tc1 && (h6$ke = fjst31), v20x == a_ctf1s ? (f437ja['warning']('attribute "' + h6$ke + '" missed quot(")!!'), vnr['add'](fjst31, h6$ke['replace'](/&#?\w+;/g, hgv80), dmc5l)) : ('http://www.w3.org/1999/xhtml' === pran4w[''] && h6$ke['match'](/^(?:disabled|checked|selected)$/i) || f437ja['warning']('attribute "' + h6$ke + '" missed value!! "' + h6$ke + '" instead!!'), vnr['add'](h6$ke, h6$ke, dmc5l));break;case a_eoi9yb:
            throw new Error('attribute value missed!!');}return hk8e$6;case '\u0080':
        $k8h0 = '\x20';default:
        if ('\x20' >= $k8h0) switch (v20x) {case a_t1jcf:
            vnr['setTagName'](j3f71['slice'](dmc5l, hk8e$6)), v20x = a_stc5;break;case a_d1cst:
            fjst31 = j3f71['slice'](dmc5l, hk8e$6), v20x = a_ds5tc1;break;case a_ctf1s:
            var h6$ke = j3f71['slice'](dmc5l, hk8e$6)['replace'](/&#?\w+;/g, hgv80);f437ja['warning']('attribute "' + h6$ke + '" missed quot(")!!'), vnr['add'](fjst31, h6$ke, dmc5l);case a_dm1sc:
            v20x = a_stc5;} else switch (v20x) {case a_ds5tc1:
            {
              vnr['tagName'];
            }'http://www.w3.org/1999/xhtml' === pran4w[''] && fjst31['match'](/^(?:disabled|checked|selected)$/i) || f437ja['warning']('attribute "' + fjst31 + '" missed value!! "' + fjst31 + '" instead2!!'), vnr['add'](fjst31, fjst31, dmc5l), dmc5l = hk8e$6, v20x = a_d1cst;break;case a_dm1sc:
            f437ja['warning']('attribute space is required"' + fjst31 + '\x22!!');case a_stc5:
            v20x = a_d1cst, dmc5l = hk8e$6;break;case a_eoi9yb:
            v20x = a_ctf1s, dmc5l = hk8e$6;break;case a_c15sj:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}hk8e$6++;
  }
}function a_xr_v2n(eb9oyi, n_vx2, nrpxw) {
  for (var k$6ye = eb9oyi['tagName'], ibo$y = null, $068k = eb9oyi['length']; $068k--;) {
    var lcds5m = eb9oyi[$068k],
        rwa7 = lcds5m['qName'],
        $06hk = lcds5m['value'],
        o$eiby = rwa7['indexOf'](':');if (o$eiby > 0x0) var ftjs31 = lcds5m['prefix'] = rwa7['slice'](0x0, o$eiby),
        nxrw2v = rwa7['slice'](o$eiby + 0x1),
        fstj1 = 'xmlns' === ftjs31 && nxrw2v;else nxrw2v = rwa7, ftjs31 = null, fstj1 = 'xmlns' === rwa7 && '';lcds5m['localName'] = nxrw2v, fstj1 !== !0x1 && (null == ibo$y && (ibo$y = {}, a_ftj31s(nrpxw, nrpxw = {})), nrpxw[fstj1] = ibo$y[fstj1] = $06hk, lcds5m['uri'] = 'http://www.w3.org/2000/xmlns/', n_vx2['startPrefixMapping'](fstj1, $06hk));
  }for (var $068k = eb9oyi['length']; $068k--;) {
    lcds5m = eb9oyi[$068k];var ftjs31 = lcds5m['prefix'];ftjs31 && ('xml' === ftjs31 && (lcds5m['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== ftjs31 && (lcds5m['uri'] = nrpxw[ftjs31 || '']));
  }var o$eiby = k$6ye['indexOf'](':');o$eiby > 0x0 ? (ftjs31 = eb9oyi['prefix'] = k$6ye['slice'](0x0, o$eiby), nxrw2v = eb9oyi['localName'] = k$6ye['slice'](o$eiby + 0x1)) : (ftjs31 = null, nxrw2v = eb9oyi['localName'] = k$6ye);var a4p7 = eb9oyi['uri'] = nrpxw[ftjs31 || ''];if (n_vx2['startElement'](a4p7, nxrw2v, k$6ye, eb9oyi), !eb9oyi['closed']) return eb9oyi['currentNSMap'] = nrpxw, eb9oyi['localNSMap'] = ibo$y, !0x0;if (n_vx2['endElement'](a4p7, nxrw2v, k$6ye), ibo$y) {
    for (ftjs31 in ibo$y) n_vx2['endPrefixMapping'](ftjs31);
  }
}function a_jc1fst(_0hg8, obe9, n_r2xv, l5mds, wpra47) {
  if (/^(?:script|textarea)$/i['test'](n_r2xv)) {
    var g08k_ = _0hg8['indexOf']('</' + n_r2xv + '>', obe9),
        ye$ob = _0hg8['substring'](obe9 + 0x1, g08k_);if (/[&<]/['test'](ye$ob)) return (/^script$/i['test'](n_r2xv) ? (wpra47['characters'](ye$ob, 0x0, ye$ob['length']), g08k_) : (ye$ob = ye$ob['replace'](/&#?\w+;/g, l5mds), wpra47['characters'](ye$ob, 0x0, ye$ob['length']), g08k_)
    );
  }return obe9 + 0x1;
}function a_kh$860(dmcls5, k8_0h, jt, h_k08) {
  var y9qzbo = h_k08[jt];return null == y9qzbo && (y9qzbo = dmcls5['lastIndexOf']('</' + jt + '>'), k8_0h > y9qzbo && (y9qzbo = dmcls5['lastIndexOf']('</' + jt)), h_k08[jt] = y9qzbo), k8_0h > y9qzbo;
}function a_ftj31s(izboy, $6i8e) {
  for (var zq9oby in izboy) $6i8e[zq9oby] = izboy[zq9oby];
}function a_ts1c5j(xrvw2n, e$6k, c1sdt, vg8h0_) {
  var pr7aw = xrvw2n['charAt'](e$6k + 0x2);switch (pr7aw) {case '-':
      if ('-' === xrvw2n['charAt'](e$6k + 0x3)) {
        var sdt1c5 = xrvw2n['indexOf']('-->', e$6k + 0x4);return sdt1c5 > e$6k ? (c1sdt['comment'](xrvw2n, e$6k + 0x4, sdt1c5 - e$6k - 0x4), sdt1c5 + 0x3) : (vg8h0_['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == xrvw2n['substr'](e$6k + 0x3, 0x6)) {
        var sdt1c5 = xrvw2n['indexOf'](']]>', e$6k + 0x9);return c1sdt['startCDATA'](), c1sdt['characters'](xrvw2n, e$6k + 0x9, sdt1c5 - e$6k - 0x9), c1sdt['endCDATA'](), sdt1c5 + 0x3;
      }var vxh = a_rp2wa(xrvw2n, e$6k),
          na4pw = vxh['length'];if (na4pw > 0x1 && /!doctype/i['test'](vxh[0x0][0x0])) {
        var b9y = vxh[0x1][0x0],
            yb9eo = na4pw > 0x3 && /^public$/i['test'](vxh[0x2][0x0]) && vxh[0x3][0x0],
            $y6eib = na4pw > 0x4 && vxh[0x4][0x0],
            i9eybo = vxh[na4pw - 0x1];return c1sdt['startDTD'](b9y, yb9eo && yb9eo['replace'](/^(['"])(.*?)\1$/, '$2'), $y6eib && $y6eib['replace'](/^(['"])(.*?)\1$/, '$2')), c1sdt['endDTD'](), i9eybo['index'] + i9eybo[0x0]['length'];
      }}return -0x1;
}function a_k6eyi$(t15sj, oyi9eb, tsjc1f) {
  var kh068$ = t15sj['indexOf']('?>', oyi9eb);if (kh068$) {
    var mlc = t15sj['substring'](oyi9eb, kh068$)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (mlc) {
      {
        mlc[0x0]['length'];
      }return tsjc1f['processingInstruction'](mlc[0x1], mlc[0x2]), kh068$ + 0x2;
    }return -0x1;
  }return -0x1;
}function a_n4rpwa() {}function a_yiz(pwa, sdlmc5) {
  return pwa['__proto__'] = sdlmc5, pwa;
}function a_rp2wa(s31f, $ekh68) {
  var g_08,
      cts5d = [],
      f7t13 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (f7t13['lastIndex'] = $ekh68, f7t13['exec'](s31f); g_08 = f7t13['exec'](s31f);) if (cts5d['push'](g_08), g_08[0x1]) return cts5d;
}var a_g0vx_h = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    a_yz9ob = new RegExp('[\\-\\.0-9' + a_g0vx_h['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    a_yoi9zb = new RegExp('^' + a_g0vx_h['source'] + a_yz9ob['source'] + '*(?::' + a_g0vx_h['source'] + a_yz9ob['source'] + '*)?$'),
    a_t1jcf = 0x0,
    a_d1cst = 0x1,
    a_ds5tc1 = 0x2,
    a_eoi9yb = 0x3,
    a_ctf1s = 0x4,
    a_dm1sc = 0x5,
    a_stc5 = 0x6,
    a_c15sj = 0x7;a_i6$8['prototype'] = { 'parse': function (bo9iye, $he, h08_k) {
    var vwnr2x = this['domBuilder'];vwnr2x['startDocument'](), a_ftj31s($he, $he = {}), a_iz9yb(bo9iye, $he, h08_k, vwnr2x, this['errorHandler']), vwnr2x['endDocument']();
  } }, a_n4rpwa['prototype'] = { 'setTagName': function (a74rp) {
    if (!a_yoi9zb['test'](a74rp)) throw new Error('invalid tagName:' + a74rp);this['tagName'] = a74rp;
  }, 'add': function (jf31t, jtc1s, cm5sd1) {
    if (!a_yoi9zb['test'](jf31t)) throw new Error('invalid attribute:' + jf31t);this[this['length']++] = { 'qName': jf31t, 'value': jtc1s, 'offset': cm5sd1 };
  }, 'length': 0x0, 'getLocalName': function (cjs5t) {
    return this[cjs5t]['localName'];
  }, 'getLocator': function (w47) {
    return this[w47]['locator'];
  }, 'getQName': function (ke86i$) {
    return this[ke86i$]['qName'];
  }, 'getURI': function (ctj1fs) {
    return this[ctj1fs]['uri'];
  }, 'getValue': function (t47fj) {
    return this[t47fj]['value'];
  } }, a_yiz({}, a_yiz['prototype']) instanceof a_yiz || (a_yiz = function (yzqb9, ldcm5s) {
  function dslmc() {}dslmc['prototype'] = ldcm5s, dslmc = new dslmc();for (ldcm5s in yzqb9) dslmc[ldcm5s] = yzqb9[ldcm5s];return dslmc;
}), exports['XMLReader'] = a_i6$8;