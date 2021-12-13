var p = wx.$h;
function a_jt1s() {}function a_yo$bi(anrwp, cts15d, v_x0hg, yie6, wnx2vr) {
  function y$bo(rpn2wa) {
    if (rpn2wa > 0xffff) {
      rpn2wa -= 0x10000;var xv2nrw = 0xd800 + (rpn2wa >> 0xa),
          $yeib6 = 0xdc00 + (0x3ff & rpn2wa);return String['fromCharCode'](xv2nrw, $yeib6);
    }return String['fromCharCode'](rpn2wa);
  }function be$yoi(p4wa73) {
    var mld = p4wa73['slice'](0x1, -0x1);return mld in v_x0hg ? v_x0hg[mld] : '#' === mld['charAt'](0x0) ? y$bo(parseInt(mld['substr'](0x1)['replace']('x', '0x'))) : (wnx2vr['error']('entity not found:' + p4wa73), p4wa73);
  }function $i8e($iyeob) {
    if ($iyeob > cmsd15) {
      var b9oie = anrwp['substring'](cmsd15, $iyeob)['replace'](/&#?\w+;/g, be$yoi);gkh80 && awprn(cmsd15), yie6['characters'](b9oie, 0x0, $iyeob - cmsd15), cmsd15 = $iyeob;
    }
  }function awprn(yobqz, k$h0) {
    for (; yobqz >= zybq9 && (k$h0 = cstf1j['exec'](anrwp));) k8_g0h = k$h0['index'], zybq9 = k8_g0h + k$h0[0x0]['length'], gkh80['lineNumber']++;gkh80['columnNumber'] = yobqz - k8_g0h + 0x1;
  }for (var k8_g0h = 0x0, zybq9 = 0x0, cstf1j = /.*(?:\r\n?|\n)|.*$/g, gkh80 = yie6['locator'], i$yke6 = [{ 'currentNSMap': cts15d }], ftj31s = {}, cmsd15 = 0x0;;) {
    try {
      var nrxv2_ = anrwp['indexOf']('<', cmsd15);if (0x0 > nrxv2_) {
        if (!anrwp['substr'](cmsd15)['match'](/^\s*$/)) {
          var hv0g8 = yie6['doc'],
              vrn2x_ = hv0g8['createTextNode'](anrwp['substr'](cmsd15));hv0g8['appendChild'](vrn2x_), yie6['currentElement'] = vrn2x_;
        }return;
      }switch (nrxv2_ > cmsd15 && $i8e(nrxv2_), anrwp['charAt'](nrxv2_ + 0x1)) {case '/':
          var pwra2n = anrwp['indexOf']('>', nrxv2_ + 0x3),
              bye9oi = anrwp['substring'](nrxv2_ + 0x2, pwra2n),
              ki$68 = i$yke6['pop']();0x0 > pwra2n ? (bye9oi = anrwp['substring'](nrxv2_ + 0x2)['replace'](/[\s<].*/, ''), wnx2vr['error']('end tag name: ' + bye9oi + ' is not complete:' + ki$68['tagName']), pwra2n = nrxv2_ + 0x1 + bye9oi['length']) : bye9oi['match'](/\s</) && (bye9oi = bye9oi['replace'](/[\s<].*/, ''), wnx2vr['error']('end tag name: ' + bye9oi + ' maybe not complete'), pwra2n = nrxv2_ + 0x1 + bye9oi['length']);var zq9by = ki$68['localNSMap'],
              a74fp3 = ki$68['tagName'] == bye9oi,
              cs1dm5 = a74fp3 || ki$68['tagName'] && ki$68['tagName']['toLowerCase']() == bye9oi['toLowerCase']();if (cs1dm5) {
            if (yie6['endElement'](ki$68['uri'], ki$68['localName'], bye9oi), zq9by) {
              for (var yb$ie6 in zq9by) yie6['endPrefixMapping'](yb$ie6);
            }a74fp3 || wnx2vr['fatalError']('end tag name: ' + bye9oi + ' is not match the current start tagName:' + ki$68['tagName']);
          } else i$yke6['push'](ki$68);pwra2n++;break;case '?':
          gkh80 && awprn(nrxv2_), pwra2n = a_kh60$(anrwp, nrxv2_, yie6);break;case '!':
          gkh80 && awprn(nrxv2_), pwra2n = a_p2rwa(anrwp, nrxv2_, yie6, wnx2vr);break;default:
          gkh80 && awprn(nrxv2_);var jf7t3 = new a_e6b$iy(),
              $k8 = i$yke6[i$yke6['length'] - 0x1]['currentNSMap'],
              pwra2n = a_f17jt(anrwp, nrxv2_, jf7t3, $k8, be$yoi, wnx2vr),
              wn2r = jf7t3['length'];if (!jf7t3['closed'] && a_ie$ob(anrwp, pwra2n, jf7t3['tagName'], ftj31s) && (jf7t3['closed'] = !0x0, v_x0hg['nbsp'] || wnx2vr['warning']('unclosed xml attribute')), gkh80 && wn2r) {
            for (var i$boey = a_nw2xrv(gkh80, {}), x2npw = 0x0; wn2r > x2npw; x2npw++) {
              var pw2nr = jf7t3[x2npw];awprn(pw2nr['offset']), pw2nr['locator'] = a_nw2xrv(gkh80, {});
            }yie6['locator'] = i$boey, a_v_2x0g(jf7t3, yie6, $k8) && i$yke6['push'](jf7t3), yie6['locator'] = gkh80;
          } else a_v_2x0g(jf7t3, yie6, $k8) && i$yke6['push'](jf7t3);'http://www.w3.org/1999/xhtml' !== jf7t3['uri'] || jf7t3['closed'] ? pwra2n++ : pwra2n = a_k_8hg(anrwp, pwra2n, jf7t3['tagName'], be$yoi, yie6);}
    } catch (tf317j) {
      wnx2vr['error']('element parse error: ' + tf317j), pwra2n = -0x1;
    }pwra2n > cmsd15 ? cmsd15 = pwra2n : $i8e(Math['max'](nrxv2_, cmsd15) + 0x1);
  }
}function a_nw2xrv(fc1js, yzbio) {
  return yzbio['lineNumber'] = fc1js['lineNumber'], yzbio['columnNumber'] = fc1js['columnNumber'], yzbio;
}function a_f17jt(b$ey6i, yo9bei, i$key6, g_v80, d51cms, oqyb9) {
  for (var af4p37, r4nwa, npr = ++yo9bei, biz = a_yb6;;) {
    var oyib9e = b$ey6i['charAt'](npr);switch (oyib9e) {case '=':
        if (biz === a_j3ft) af4p37 = b$ey6i['slice'](yo9bei, npr), biz = a_parw4n;else {
          if (biz !== a_p4a7r) throw new Error('attribute equal must after attrName');biz = a_parw4n;
        }break;case '\x27':case '\x22':
        if (biz === a_parw4n || biz === a_j3ft) {
          if (biz === a_j3ft && (oqyb9['warning']('attribute value must after "="'), af4p37 = b$ey6i['slice'](yo9bei, npr)), yo9bei = npr + 0x1, npr = b$ey6i['indexOf'](oyib9e, yo9bei), !(npr > 0x0)) throw new Error('attribute value no end \'' + oyib9e + '\' match');r4nwa = b$ey6i['slice'](yo9bei, npr)['replace'](/&#?\w+;/g, d51cms), i$key6['add'](af4p37, r4nwa, yo9bei - 0x1), biz = a_kg6h;
        } else {
          if (biz != a_nr2pwa) throw new Error('attribute value must after "="');r4nwa = b$ey6i['slice'](yo9bei, npr)['replace'](/&#?\w+;/g, d51cms), i$key6['add'](af4p37, r4nwa, yo9bei), oqyb9['warning']('attribute "' + af4p37 + '" missed start quot(' + oyib9e + ')!!'), yo9bei = npr + 0x1, biz = a_kg6h;
        }break;case '/':
        switch (biz) {case a_yb6:
            i$key6['setTagName'](b$ey6i['slice'](yo9bei, npr));case a_kg6h:case a_vxg02:case a__gnvx2:
            biz = a__gnvx2, i$key6['closed'] = !0x0;case a_nr2pwa:case a_j3ft:case a_p4a7r:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return oqyb9['error']('unexpected end of input'), biz == a_yb6 && i$key6['setTagName'](b$ey6i['slice'](yo9bei, npr)), npr;case '>':
        switch (biz) {case a_yb6:
            i$key6['setTagName'](b$ey6i['slice'](yo9bei, npr));case a_kg6h:case a_vxg02:case a__gnvx2:
            break;case a_nr2pwa:case a_j3ft:
            r4nwa = b$ey6i['slice'](yo9bei, npr), '/' === r4nwa['slice'](-0x1) && (i$key6['closed'] = !0x0, r4nwa = r4nwa['slice'](0x0, -0x1));case a_p4a7r:
            biz === a_p4a7r && (r4nwa = af4p37), biz == a_nr2pwa ? (oqyb9['warning']('attribute "' + r4nwa + '" missed quot(")!!'), i$key6['add'](af4p37, r4nwa['replace'](/&#?\w+;/g, d51cms), yo9bei)) : ('http://www.w3.org/1999/xhtml' === g_v80[''] && r4nwa['match'](/^(?:disabled|checked|selected)$/i) || oqyb9['warning']('attribute "' + r4nwa + '" missed value!! "' + r4nwa + '" instead!!'), i$key6['add'](r4nwa, r4nwa, yo9bei));break;case a_parw4n:
            throw new Error('attribute value missed!!');}return npr;case '\u0080':
        oyib9e = '\x20';default:
        if ('\x20' >= oyib9e) switch (biz) {case a_yb6:
            i$key6['setTagName'](b$ey6i['slice'](yo9bei, npr)), biz = a_vxg02;break;case a_j3ft:
            af4p37 = b$ey6i['slice'](yo9bei, npr), biz = a_p4a7r;break;case a_nr2pwa:
            var r4nwa = b$ey6i['slice'](yo9bei, npr)['replace'](/&#?\w+;/g, d51cms);oqyb9['warning']('attribute "' + r4nwa + '" missed quot(")!!'), i$key6['add'](af4p37, r4nwa, yo9bei);case a_kg6h:
            biz = a_vxg02;} else switch (biz) {case a_p4a7r:
            {
              i$key6['tagName'];
            }'http://www.w3.org/1999/xhtml' === g_v80[''] && af4p37['match'](/^(?:disabled|checked|selected)$/i) || oqyb9['warning']('attribute "' + af4p37 + '" missed value!! "' + af4p37 + '" instead2!!'), i$key6['add'](af4p37, af4p37, yo9bei), yo9bei = npr, biz = a_j3ft;break;case a_kg6h:
            oqyb9['warning']('attribute space is required"' + af4p37 + '\x22!!');case a_vxg02:
            biz = a_j3ft, yo9bei = npr;break;case a_parw4n:
            biz = a_nr2pwa, yo9bei = npr;break;case a__gnvx2:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}npr++;
  }
}function a_v_2x0g(_gxvn2, rnawp2, wpxn2) {
  for (var rawp2 = _gxvn2['tagName'], wr2pa = null, yieb9o = _gxvn2['length']; yieb9o--;) {
    var b9iz = _gxvn2[yieb9o],
        g_02 = b9iz['qName'],
        m5csd1 = b9iz['value'],
        rwn4p = g_02['indexOf'](':');if (rwn4p > 0x0) var wr2nv = b9iz['prefix'] = g_02['slice'](0x0, rwn4p),
        yo$ebi = g_02['slice'](rwn4p + 0x1),
        v0gh_ = 'xmlns' === wr2nv && yo$ebi;else yo$ebi = g_02, wr2nv = null, v0gh_ = 'xmlns' === g_02 && '';b9iz['localName'] = yo$ebi, v0gh_ !== !0x1 && (null == wr2pa && (wr2pa = {}, a_d5sc1t(wpxn2, wpxn2 = {})), wpxn2[v0gh_] = wr2pa[v0gh_] = m5csd1, b9iz['uri'] = 'http://www.w3.org/2000/xmlns/', rnawp2['startPrefixMapping'](v0gh_, m5csd1));
  }for (var yieb9o = _gxvn2['length']; yieb9o--;) {
    b9iz = _gxvn2[yieb9o];var wr2nv = b9iz['prefix'];wr2nv && ('xml' === wr2nv && (b9iz['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== wr2nv && (b9iz['uri'] = wpxn2[wr2nv || '']));
  }var rwn4p = rawp2['indexOf'](':');rwn4p > 0x0 ? (wr2nv = _gxvn2['prefix'] = rawp2['slice'](0x0, rwn4p), yo$ebi = _gxvn2['localName'] = rawp2['slice'](rwn4p + 0x1)) : (wr2nv = null, yo$ebi = _gxvn2['localName'] = rawp2);var j34f7a = _gxvn2['uri'] = wpxn2[wr2nv || ''];if (rnawp2['startElement'](j34f7a, yo$ebi, rawp2, _gxvn2), !_gxvn2['closed']) return _gxvn2['currentNSMap'] = wpxn2, _gxvn2['localNSMap'] = wr2pa, !0x0;if (rnawp2['endElement'](j34f7a, yo$ebi, rawp2), wr2pa) {
    for (wr2nv in wr2pa) rnawp2['endPrefixMapping'](wr2nv);
  }
}function a_k_8hg(jc1ts, apn4r, j1ts3, sfjtc, $eioy) {
  if (/^(?:script|textarea)$/i['test'](j1ts3)) {
    var gh_k08 = jc1ts['indexOf']('</' + j1ts3 + '>', apn4r),
        i$k8e6 = jc1ts['substring'](apn4r + 0x1, gh_k08);if (/[&<]/['test'](i$k8e6)) return (/^script$/i['test'](j1ts3) ? ($eioy['characters'](i$k8e6, 0x0, i$k8e6['length']), gh_k08) : (i$k8e6 = i$k8e6['replace'](/&#?\w+;/g, sfjtc), $eioy['characters'](i$k8e6, 0x0, i$k8e6['length']), gh_k08)
    );
  }return apn4r + 0x1;
}function a_ie$ob(slmdc5, jct1sf, xw2vnr, xhvg) {
  var tjf17 = xhvg[xw2vnr];return null == tjf17 && (tjf17 = slmdc5['lastIndexOf']('</' + xw2vnr + '>'), jct1sf > tjf17 && (tjf17 = slmdc5['lastIndexOf']('</' + xw2vnr)), xhvg[xw2vnr] = tjf17), jct1sf > tjf17;
}function a_d5sc1t(bizo9y, vn2wrx) {
  for (var wr2xn in bizo9y) vn2wrx[wr2xn] = bizo9y[wr2xn];
}function a_p2rwa(ie9b, z9ybi, zyb9i, g0k) {
  var o9bqz = ie9b['charAt'](z9ybi + 0x2);switch (o9bqz) {case '-':
      if ('-' === ie9b['charAt'](z9ybi + 0x3)) {
        var fjt173 = ie9b['indexOf']('-->', z9ybi + 0x4);return fjt173 > z9ybi ? (zyb9i['comment'](ie9b, z9ybi + 0x4, fjt173 - z9ybi - 0x4), fjt173 + 0x3) : (g0k['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == ie9b['substr'](z9ybi + 0x3, 0x6)) {
        var fjt173 = ie9b['indexOf'](']]>', z9ybi + 0x9);return zyb9i['startCDATA'](), zyb9i['characters'](ie9b, z9ybi + 0x9, fjt173 - z9ybi - 0x9), zyb9i['endCDATA'](), fjt173 + 0x3;
      }var ja47 = a_scft(ie9b, z9ybi),
          $ykie6 = ja47['length'];if ($ykie6 > 0x1 && /!doctype/i['test'](ja47[0x0][0x0])) {
        var x_0hv = ja47[0x1][0x0],
            r2wvnx = $ykie6 > 0x3 && /^public$/i['test'](ja47[0x2][0x0]) && ja47[0x3][0x0],
            pw2ar = $ykie6 > 0x4 && ja47[0x4][0x0],
            y$ieo = ja47[$ykie6 - 0x1];return zyb9i['startDTD'](x_0hv, r2wvnx && r2wvnx['replace'](/^(['"])(.*?)\1$/, '$2'), pw2ar && pw2ar['replace'](/^(['"])(.*?)\1$/, '$2')), zyb9i['endDTD'](), y$ieo['index'] + y$ieo[0x0]['length'];
      }}return -0x1;
}function a_kh60$(ms15c, j73ft, $e8k6) {
  var j17 = ms15c['indexOf']('?>', j73ft);if (j17) {
    var pnrw2x = ms15c['substring'](j73ft, j17)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (pnrw2x) {
      {
        pnrw2x[0x0]['length'];
      }return $e8k6['processingInstruction'](pnrw2x[0x1], pnrw2x[0x2]), j17 + 0x2;
    }return -0x1;
  }return -0x1;
}function a_e6b$iy() {}function a_v_xhg($ie86k, h08g_k) {
  return $ie86k['__proto__'] = h08g_k, $ie86k;
}function a_scft(yo9bz, rnwa4p) {
  var nr2aw,
      csjt51 = [],
      j3ts1 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (j3ts1['lastIndex'] = rnwa4p, j3ts1['exec'](yo9bz); nr2aw = j3ts1['exec'](yo9bz);) if (csjt51['push'](nr2aw), nr2aw[0x1]) return csjt51;
}var a_xwrvn = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    a_c1msd = new RegExp('[\\-\\.0-9' + a_xwrvn['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    a_$ei6y = new RegExp('^' + a_xwrvn['source'] + a_c1msd['source'] + '*(?::' + a_xwrvn['source'] + a_c1msd['source'] + '*)?$'),
    a_yb6 = 0x0,
    a_j3ft = 0x1,
    a_p4a7r = 0x2,
    a_parw4n = 0x3,
    a_nr2pwa = 0x4,
    a_kg6h = 0x5,
    a_vxg02 = 0x6,
    a__gnvx2 = 0x7;a_jt1s['prototype'] = { 'parse': function (g_x20, dm5, j7t34) {
    var sf1tj = this['domBuilder'];sf1tj['startDocument'](), a_d5sc1t(dm5, dm5 = {}), a_yo$bi(g_x20, dm5, j7t34, sf1tj, this['errorHandler']), sf1tj['endDocument']();
  } }, a_e6b$iy['prototype'] = { 'setTagName': function (gh0v8) {
    if (!a_$ei6y['test'](gh0v8)) throw new Error('invalid tagName:' + gh0v8);this['tagName'] = gh0v8;
  }, 'add': function (lsmc5d, jsf, lds5c) {
    if (!a_$ei6y['test'](lsmc5d)) throw new Error('invalid attribute:' + lsmc5d);this[this['length']++] = { 'qName': lsmc5d, 'value': jsf, 'offset': lds5c };
  }, 'length': 0x0, 'getLocalName': function (ra4pwn) {
    return this[ra4pwn]['localName'];
  }, 'getLocator': function (gkh_8) {
    return this[gkh_8]['locator'];
  }, 'getQName': function (zb9yqo) {
    return this[zb9yqo]['qName'];
  }, 'getURI': function (nra2p) {
    return this[nra2p]['uri'];
  }, 'getValue': function (dl5cs) {
    return this[dl5cs]['value'];
  } }, a_v_xhg({}, a_v_xhg['prototype']) instanceof a_v_xhg || (a_v_xhg = function (st5j1c, zboqy9) {
  function wr2vn() {}wr2vn['prototype'] = zboqy9, wr2vn = new wr2vn();for (zboqy9 in st5j1c) wr2vn[zboqy9] = st5j1c[zboqy9];return wr2vn;
}), exports['XMLReader'] = a_jt1s;