var p = wx.$h;
function a_$k() {}function a_bo9yi(t73jf4, ie$ob, tf1s3, jtcs1f, h6k$e) {
  function arn4p(gxv0_2) {
    if (gxv0_2 > 0xffff) {
      gxv0_2 -= 0x10000;var y9zibo = 0xd800 + (gxv0_2 >> 0xa),
          i8k6$e = 0xdc00 + (0x3ff & gxv0_2);return String['fromCharCode'](y9zibo, i8k6$e);
    }return String['fromCharCode'](gxv0_2);
  }function nrxwp2(i9bo) {
    var pa2 = i9bo['slice'](0x1, -0x1);return pa2 in tf1s3 ? tf1s3[pa2] : '#' === pa2['charAt'](0x0) ? arn4p(parseInt(pa2['substr'](0x1)['replace']('x', '0x'))) : (h6k$e['error']('entity not found:' + i9bo), i9bo);
  }function j3sf(c51dts) {
    if (c51dts > e$iy) {
      var sft13 = t73jf4['substring'](e$iy, c51dts)['replace'](/&#?\w+;/g, nrxwp2);xhg0_v && ft1jsc(e$iy), jtcs1f['characters'](sft13, 0x0, c51dts - e$iy), e$iy = c51dts;
    }
  }function ft1jsc(_20vxg, obq9yz) {
    for (; _20vxg >= boyie && (obq9yz = gv_x2n['exec'](t73jf4));) y6ibe$ = obq9yz['index'], boyie = y6ibe$ + obq9yz[0x0]['length'], xhg0_v['lineNumber']++;xhg0_v['columnNumber'] = _20vxg - y6ibe$ + 0x1;
  }for (var y6ibe$ = 0x0, boyie = 0x0, gv_x2n = /.*(?:\r\n?|\n)|.*$/g, xhg0_v = jtcs1f['locator'], r2pnw = [{ 'currentNSMap': ie$ob }], _vgx02 = {}, e$iy = 0x0;;) {
    try {
      var g8_0k = t73jf4['indexOf']('<', e$iy);if (0x0 > g8_0k) {
        if (!t73jf4['substr'](e$iy)['match'](/^\s*$/)) {
          var iky6$ = jtcs1f['doc'],
              d15t = iky6$['createTextNode'](t73jf4['substr'](e$iy));iky6$['appendChild'](d15t), jtcs1f['currentElement'] = d15t;
        }return;
      }switch (g8_0k > e$iy && j3sf(g8_0k), t73jf4['charAt'](g8_0k + 0x1)) {case '/':
          var ajf473 = t73jf4['indexOf']('>', g8_0k + 0x3),
              g_0k = t73jf4['substring'](g8_0k + 0x2, ajf473),
              s5cd1m = r2pnw['pop']();0x0 > ajf473 ? (g_0k = t73jf4['substring'](g8_0k + 0x2)['replace'](/[\s<].*/, ''), h6k$e['error']('end tag name: ' + g_0k + ' is not complete:' + s5cd1m['tagName']), ajf473 = g8_0k + 0x1 + g_0k['length']) : g_0k['match'](/\s</) && (g_0k = g_0k['replace'](/[\s<].*/, ''), h6k$e['error']('end tag name: ' + g_0k + ' maybe not complete'), ajf473 = g8_0k + 0x1 + g_0k['length']);var cjf = s5cd1m['localNSMap'],
              s1fctj = s5cd1m['tagName'] == g_0k,
              s5mlcd = s1fctj || s5cd1m['tagName'] && s5cd1m['tagName']['toLowerCase']() == g_0k['toLowerCase']();if (s5mlcd) {
            if (jtcs1f['endElement'](s5cd1m['uri'], s5cd1m['localName'], g_0k), cjf) {
              for (var y9iob in cjf) jtcs1f['endPrefixMapping'](y9iob);
            }s1fctj || h6k$e['fatalError']('end tag name: ' + g_0k + ' is not match the current start tagName:' + s5cd1m['tagName']);
          } else r2pnw['push'](s5cd1m);ajf473++;break;case '?':
          xhg0_v && ft1jsc(g8_0k), ajf473 = a_xn2v_g(t73jf4, g8_0k, jtcs1f);break;case '!':
          xhg0_v && ft1jsc(g8_0k), ajf473 = a__gx0vh(t73jf4, g8_0k, jtcs1f, h6k$e);break;default:
          xhg0_v && ft1jsc(g8_0k);var tc5d1s = new a_obzyi(),
              a2rwnp = r2pnw[r2pnw['length'] - 0x1]['currentNSMap'],
              ajf473 = a_r_nx(t73jf4, g8_0k, tc5d1s, a2rwnp, nrxwp2, h6k$e),
              g8vh = tc5d1s['length'];if (!tc5d1s['closed'] && a_prn2wa(t73jf4, ajf473, tc5d1s['tagName'], _vgx02) && (tc5d1s['closed'] = !0x0, tf1s3['nbsp'] || h6k$e['warning']('unclosed xml attribute')), xhg0_v && g8vh) {
            for (var $ike8 = a_tf43j(xhg0_v, {}), f3jt = 0x0; g8vh > f3jt; f3jt++) {
              var v2rn_x = tc5d1s[f3jt];ft1jsc(v2rn_x['offset']), v2rn_x['locator'] = a_tf43j(xhg0_v, {});
            }jtcs1f['locator'] = $ike8, a_ap347f(tc5d1s, jtcs1f, a2rwnp) && r2pnw['push'](tc5d1s), jtcs1f['locator'] = xhg0_v;
          } else a_ap347f(tc5d1s, jtcs1f, a2rwnp) && r2pnw['push'](tc5d1s);'http://www.w3.org/1999/xhtml' !== tc5d1s['uri'] || tc5d1s['closed'] ? ajf473++ : ajf473 = a_vg80_(t73jf4, ajf473, tc5d1s['tagName'], nrxwp2, jtcs1f);}
    } catch (jst31f) {
      h6k$e['error']('element parse error: ' + jst31f), ajf473 = -0x1;
    }ajf473 > e$iy ? e$iy = ajf473 : j3sf(Math['max'](g8_0k, e$iy) + 0x1);
  }
}function a_tf43j(f317jt, oibe) {
  return oibe['lineNumber'] = f317jt['lineNumber'], oibe['columnNumber'] = f317jt['columnNumber'], oibe;
}function a_r_nx(zob, i$8ke, h_v0gx, g_x0vh, ioye$, wp4ran) {
  for (var a43w, k6e$iy, yoeib9 = ++i$8ke, y$k = a_awp2;;) {
    var bzyoi = zob['charAt'](yoeib9);switch (bzyoi) {case '=':
        if (y$k === a_xn2gv_) a43w = zob['slice'](i$8ke, yoeib9), y$k = a_g6k0h8;else {
          if (y$k !== a_ra4nw) throw new Error('attribute equal must after attrName');y$k = a_g6k0h8;
        }break;case '\x27':case '\x22':
        if (y$k === a_g6k0h8 || y$k === a_xn2gv_) {
          if (y$k === a_xn2gv_ && (wp4ran['warning']('attribute value must after "="'), a43w = zob['slice'](i$8ke, yoeib9)), i$8ke = yoeib9 + 0x1, yoeib9 = zob['indexOf'](bzyoi, i$8ke), !(yoeib9 > 0x0)) throw new Error('attribute value no end \'' + bzyoi + '\' match');k6e$iy = zob['slice'](i$8ke, yoeib9)['replace'](/&#?\w+;/g, ioye$), h_v0gx['add'](a43w, k6e$iy, i$8ke - 0x1), y$k = a__ng2vx;
        } else {
          if (y$k != a_jtfs13) throw new Error('attribute value must after "="');k6e$iy = zob['slice'](i$8ke, yoeib9)['replace'](/&#?\w+;/g, ioye$), h_v0gx['add'](a43w, k6e$iy, i$8ke), wp4ran['warning']('attribute "' + a43w + '" missed start quot(' + bzyoi + ')!!'), i$8ke = yoeib9 + 0x1, y$k = a__ng2vx;
        }break;case '/':
        switch (y$k) {case a_awp2:
            h_v0gx['setTagName'](zob['slice'](i$8ke, yoeib9));case a__ng2vx:case a_w74rpa:case a_t437fj:
            y$k = a_t437fj, h_v0gx['closed'] = !0x0;case a_jtfs13:case a_xn2gv_:case a_ra4nw:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return wp4ran['error']('unexpected end of input'), y$k == a_awp2 && h_v0gx['setTagName'](zob['slice'](i$8ke, yoeib9)), yoeib9;case '>':
        switch (y$k) {case a_awp2:
            h_v0gx['setTagName'](zob['slice'](i$8ke, yoeib9));case a__ng2vx:case a_w74rpa:case a_t437fj:
            break;case a_jtfs13:case a_xn2gv_:
            k6e$iy = zob['slice'](i$8ke, yoeib9), '/' === k6e$iy['slice'](-0x1) && (h_v0gx['closed'] = !0x0, k6e$iy = k6e$iy['slice'](0x0, -0x1));case a_ra4nw:
            y$k === a_ra4nw && (k6e$iy = a43w), y$k == a_jtfs13 ? (wp4ran['warning']('attribute "' + k6e$iy + '" missed quot(")!!'), h_v0gx['add'](a43w, k6e$iy['replace'](/&#?\w+;/g, ioye$), i$8ke)) : ('http://www.w3.org/1999/xhtml' === g_x0vh[''] && k6e$iy['match'](/^(?:disabled|checked|selected)$/i) || wp4ran['warning']('attribute "' + k6e$iy + '" missed value!! "' + k6e$iy + '" instead!!'), h_v0gx['add'](k6e$iy, k6e$iy, i$8ke));break;case a_g6k0h8:
            throw new Error('attribute value missed!!');}return yoeib9;case '\u0080':
        bzyoi = '\x20';default:
        if ('\x20' >= bzyoi) switch (y$k) {case a_awp2:
            h_v0gx['setTagName'](zob['slice'](i$8ke, yoeib9)), y$k = a_w74rpa;break;case a_xn2gv_:
            a43w = zob['slice'](i$8ke, yoeib9), y$k = a_ra4nw;break;case a_jtfs13:
            var k6e$iy = zob['slice'](i$8ke, yoeib9)['replace'](/&#?\w+;/g, ioye$);wp4ran['warning']('attribute "' + k6e$iy + '" missed quot(")!!'), h_v0gx['add'](a43w, k6e$iy, i$8ke);case a__ng2vx:
            y$k = a_w74rpa;} else switch (y$k) {case a_ra4nw:
            {
              h_v0gx['tagName'];
            }'http://www.w3.org/1999/xhtml' === g_x0vh[''] && a43w['match'](/^(?:disabled|checked|selected)$/i) || wp4ran['warning']('attribute "' + a43w + '" missed value!! "' + a43w + '" instead2!!'), h_v0gx['add'](a43w, a43w, i$8ke), i$8ke = yoeib9, y$k = a_xn2gv_;break;case a__ng2vx:
            wp4ran['warning']('attribute space is required"' + a43w + '\x22!!');case a_w74rpa:
            y$k = a_xn2gv_, i$8ke = yoeib9;break;case a_g6k0h8:
            y$k = a_jtfs13, i$8ke = yoeib9;break;case a_t437fj:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}yoeib9++;
  }
}function a_ap347f(wap7, k8_g0h, w2xrv) {
  for (var p7r4 = wap7['tagName'], fj1ct = null, $i8ek = wap7['length']; $i8ek--;) {
    var e86k$h = wap7[$i8ek],
        rnwv2x = e86k$h['qName'],
        x02v = e86k$h['value'],
        $oybi = rnwv2x['indexOf'](':');if ($oybi > 0x0) var $k6ie8 = e86k$h['prefix'] = rnwv2x['slice'](0x0, $oybi),
        rxwv = rnwv2x['slice']($oybi + 0x1),
        t1d5 = 'xmlns' === $k6ie8 && rxwv;else rxwv = rnwv2x, $k6ie8 = null, t1d5 = 'xmlns' === rnwv2x && '';e86k$h['localName'] = rxwv, t1d5 !== !0x1 && (null == fj1ct && (fj1ct = {}, a_$ioey(w2xrv, w2xrv = {})), w2xrv[t1d5] = fj1ct[t1d5] = x02v, e86k$h['uri'] = 'http://www.w3.org/2000/xmlns/', k8_g0h['startPrefixMapping'](t1d5, x02v));
  }for (var $i8ek = wap7['length']; $i8ek--;) {
    e86k$h = wap7[$i8ek];var $k6ie8 = e86k$h['prefix'];$k6ie8 && ('xml' === $k6ie8 && (e86k$h['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== $k6ie8 && (e86k$h['uri'] = w2xrv[$k6ie8 || '']));
  }var $oybi = p7r4['indexOf'](':');$oybi > 0x0 ? ($k6ie8 = wap7['prefix'] = p7r4['slice'](0x0, $oybi), rxwv = wap7['localName'] = p7r4['slice']($oybi + 0x1)) : ($k6ie8 = null, rxwv = wap7['localName'] = p7r4);var js51ct = wap7['uri'] = w2xrv[$k6ie8 || ''];if (k8_g0h['startElement'](js51ct, rxwv, p7r4, wap7), !wap7['closed']) return wap7['currentNSMap'] = w2xrv, wap7['localNSMap'] = fj1ct, !0x0;if (k8_g0h['endElement'](js51ct, rxwv, p7r4), fj1ct) {
    for ($k6ie8 in fj1ct) k8_g0h['endPrefixMapping']($k6ie8);
  }
}function a_vg80_(jf1t3s, ldm5c, eib9, g2v_0, k06h$8) {
  if (/^(?:script|textarea)$/i['test'](eib9)) {
    var wvx2n = jf1t3s['indexOf']('</' + eib9 + '>', ldm5c),
        y9e = jf1t3s['substring'](ldm5c + 0x1, wvx2n);if (/[&<]/['test'](y9e)) return (/^script$/i['test'](eib9) ? (k06h$8['characters'](y9e, 0x0, y9e['length']), wvx2n) : (y9e = y9e['replace'](/&#?\w+;/g, g2v_0), k06h$8['characters'](y9e, 0x0, y9e['length']), wvx2n)
    );
  }return ldm5c + 0x1;
}function a_prn2wa(h_8gv0, yb6$, g_h80, o9zq) {
  var $6k08 = o9zq[g_h80];return null == $6k08 && ($6k08 = h_8gv0['lastIndexOf']('</' + g_h80 + '>'), yb6$ > $6k08 && ($6k08 = h_8gv0['lastIndexOf']('</' + g_h80)), o9zq[g_h80] = $6k08), yb6$ > $6k08;
}function a_$ioey(pa74w3, a4wrpn) {
  for (var tc5sj1 in pa74w3) a4wrpn[tc5sj1] = pa74w3[tc5sj1];
}function a__gx0vh(pna4r, $e6b, b9oqzy, p4war7) {
  var dt15s = pna4r['charAt']($e6b + 0x2);switch (dt15s) {case '-':
      if ('-' === pna4r['charAt']($e6b + 0x3)) {
        var k60 = pna4r['indexOf']('-->', $e6b + 0x4);return k60 > $e6b ? (b9oqzy['comment'](pna4r, $e6b + 0x4, k60 - $e6b - 0x4), k60 + 0x3) : (p4war7['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == pna4r['substr']($e6b + 0x3, 0x6)) {
        var k60 = pna4r['indexOf'](']]>', $e6b + 0x9);return b9oqzy['startCDATA'](), b9oqzy['characters'](pna4r, $e6b + 0x9, k60 - $e6b - 0x9), b9oqzy['endCDATA'](), k60 + 0x3;
      }var n_r2vx = a_$k860(pna4r, $e6b),
          e6kyi$ = n_r2vx['length'];if (e6kyi$ > 0x1 && /!doctype/i['test'](n_r2vx[0x0][0x0])) {
        var a7wr = n_r2vx[0x1][0x0],
            $6bey = e6kyi$ > 0x3 && /^public$/i['test'](n_r2vx[0x2][0x0]) && n_r2vx[0x3][0x0],
            $86eh = e6kyi$ > 0x4 && n_r2vx[0x4][0x0],
            r74wpa = n_r2vx[e6kyi$ - 0x1];return b9oqzy['startDTD'](a7wr, $6bey && $6bey['replace'](/^(['"])(.*?)\1$/, '$2'), $86eh && $86eh['replace'](/^(['"])(.*?)\1$/, '$2')), b9oqzy['endDTD'](), r74wpa['index'] + r74wpa[0x0]['length'];
      }}return -0x1;
}function a_xn2v_g(biyo9, xvn2rw, nxv2wr) {
  var dlsc5m = biyo9['indexOf']('?>', xvn2rw);if (dlsc5m) {
    var _gvnx2 = biyo9['substring'](xvn2rw, dlsc5m)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (_gvnx2) {
      {
        _gvnx2[0x0]['length'];
      }return nxv2wr['processingInstruction'](_gvnx2[0x1], _gvnx2[0x2]), dlsc5m + 0x2;
    }return -0x1;
  }return -0x1;
}function a_obzyi() {}function a_obiz9(h8k6$0, nv2_xg) {
  return h8k6$0['__proto__'] = nv2_xg, h8k6$0;
}function a_$k860(fsjc1t, r2x) {
  var yieb6,
      g0v_2 = [],
      ghk_80 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (ghk_80['lastIndex'] = r2x, ghk_80['exec'](fsjc1t); yieb6 = ghk_80['exec'](fsjc1t);) if (g0v_2['push'](yieb6), yieb6[0x1]) return g0v_2;
}var a_e$oyi = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    a_csldm5 = new RegExp('[\\-\\.0-9' + a_e$oyi['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    a_rn2_x = new RegExp('^' + a_e$oyi['source'] + a_csldm5['source'] + '*(?::' + a_e$oyi['source'] + a_csldm5['source'] + '*)?$'),
    a_awp2 = 0x0,
    a_xn2gv_ = 0x1,
    a_ra4nw = 0x2,
    a_g6k0h8 = 0x3,
    a_jtfs13 = 0x4,
    a__ng2vx = 0x5,
    a_w74rpa = 0x6,
    a_t437fj = 0x7;a_$k['prototype'] = { 'parse': function (par7w, nvxr_, pwnar) {
    var b6$ = this['domBuilder'];b6$['startDocument'](), a_$ioey(nvxr_, nvxr_ = {}), a_bo9yi(par7w, nvxr_, pwnar, b6$, this['errorHandler']), b6$['endDocument']();
  } }, a_obzyi['prototype'] = { 'setTagName': function (h0_g8k) {
    if (!a_rn2_x['test'](h0_g8k)) throw new Error('invalid tagName:' + h0_g8k);this['tagName'] = h0_g8k;
  }, 'add': function ($yeb, e6ki$, g0xhv) {
    if (!a_rn2_x['test']($yeb)) throw new Error('invalid attribute:' + $yeb);this[this['length']++] = { 'qName': $yeb, 'value': e6ki$, 'offset': g0xhv };
  }, 'length': 0x0, 'getLocalName': function (k8eh) {
    return this[k8eh]['localName'];
  }, 'getLocator': function (aj347) {
    return this[aj347]['locator'];
  }, 'getQName': function (fjcst1) {
    return this[fjcst1]['qName'];
  }, 'getURI': function (x0_2gv) {
    return this[x0_2gv]['uri'];
  }, 'getValue': function (_xg2v) {
    return this[_xg2v]['value'];
  } }, a_obiz9({}, a_obiz9['prototype']) instanceof a_obiz9 || (a_obiz9 = function (wpra, i6k$ey) {
  function ey9ob() {}ey9ob['prototype'] = i6k$ey, ey9ob = new ey9ob();for (i6k$ey in wpra) ey9ob[i6k$ey] = wpra[i6k$ey];return ey9ob;
}), exports['XMLReader'] = a_$k;