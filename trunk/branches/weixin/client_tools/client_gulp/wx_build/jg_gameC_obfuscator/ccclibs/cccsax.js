var p = wx.$h;
function a_x2wpr() {}function a_x_hg(eo$y, ek8$i6, k$e86, k$80h, byzoq9) {
  function eyb$6(msc15d) {
    if (msc15d > 0xffff) {
      msc15d -= 0x10000;var wnxp2r = 0xd800 + (msc15d >> 0xa),
          ie9b = 0xdc00 + (0x3ff & msc15d);return String['fromCharCode'](wnxp2r, ie9b);
    }return String['fromCharCode'](msc15d);
  }function tc5ds1(gxvn2_) {
    var pna2rw = gxvn2_['slice'](0x1, -0x1);return pna2rw in k$e86 ? k$e86[pna2rw] : '#' === pna2rw['charAt'](0x0) ? eyb$6(parseInt(pna2rw['substr'](0x1)['replace']('x', '0x'))) : (byzoq9['error']('entity not found:' + gxvn2_), gxvn2_);
  }function _8hg0k(tds) {
    if (tds > xnp) {
      var b$iy6 = eo$y['substring'](xnp, tds)['replace'](/&#?\w+;/g, tc5ds1);$h8ek && a7fj4(xnp), k$80h['characters'](b$iy6, 0x0, tds - xnp), xnp = tds;
    }
  }function a7fj4(sjtf1, apf47) {
    for (; sjtf1 >= nxpr2w && (apf47 = v0g_2['exec'](eo$y));) tf4j37 = apf47['index'], nxpr2w = tf4j37 + apf47[0x0]['length'], $h8ek['lineNumber']++;$h8ek['columnNumber'] = sjtf1 - tf4j37 + 0x1;
  }for (var tf4j37 = 0x0, nxpr2w = 0x0, v0g_2 = /.*(?:\r\n?|\n)|.*$/g, $h8ek = k$80h['locator'], pran2 = [{ 'currentNSMap': ek8$i6 }], h8$60k = {}, xnp = 0x0;;) {
    try {
      var ap4wr7 = eo$y['indexOf']('<', xnp);if (0x0 > ap4wr7) {
        if (!eo$y['substr'](xnp)['match'](/^\s*$/)) {
          var rvx_2n = k$80h['doc'],
              k06 = rvx_2n['createTextNode'](eo$y['substr'](xnp));rvx_2n['appendChild'](k06), k$80h['currentElement'] = k06;
        }return;
      }switch (ap4wr7 > xnp && _8hg0k(ap4wr7), eo$y['charAt'](ap4wr7 + 0x1)) {case '/':
          var scld5m = eo$y['indexOf']('>', ap4wr7 + 0x3),
              c1fstj = eo$y['substring'](ap4wr7 + 0x2, scld5m),
              c1sd5m = pran2['pop']();0x0 > scld5m ? (c1fstj = eo$y['substring'](ap4wr7 + 0x2)['replace'](/[\s<].*/, ''), byzoq9['error']('end tag name: ' + c1fstj + ' is not complete:' + c1sd5m['tagName']), scld5m = ap4wr7 + 0x1 + c1fstj['length']) : c1fstj['match'](/\s</) && (c1fstj = c1fstj['replace'](/[\s<].*/, ''), byzoq9['error']('end tag name: ' + c1fstj + ' maybe not complete'), scld5m = ap4wr7 + 0x1 + c1fstj['length']);var wrn2a = c1sd5m['localNSMap'],
              fjt473 = c1sd5m['tagName'] == c1fstj,
              h0g_8k = fjt473 || c1sd5m['tagName'] && c1sd5m['tagName']['toLowerCase']() == c1fstj['toLowerCase']();if (h0g_8k) {
            if (k$80h['endElement'](c1sd5m['uri'], c1sd5m['localName'], c1fstj), wrn2a) {
              for (var jt13s in wrn2a) k$80h['endPrefixMapping'](jt13s);
            }fjt473 || byzoq9['fatalError']('end tag name: ' + c1fstj + ' is not match the current start tagName:' + c1sd5m['tagName']);
          } else pran2['push'](c1sd5m);scld5m++;break;case '?':
          $h8ek && a7fj4(ap4wr7), scld5m = a_nxvw2(eo$y, ap4wr7, k$80h);break;case '!':
          $h8ek && a7fj4(ap4wr7), scld5m = a_md1cs5(eo$y, ap4wr7, k$80h, byzoq9);break;default:
          $h8ek && a7fj4(ap4wr7);var w7pra = new a_$ioeby(),
              ieoy9b = pran2[pran2['length'] - 0x1]['currentNSMap'],
              scld5m = a_r4ap(eo$y, ap4wr7, w7pra, ieoy9b, tc5ds1, byzoq9),
              ct1sd = w7pra['length'];if (!w7pra['closed'] && a_xvg_h(eo$y, scld5m, w7pra['tagName'], h8$60k) && (w7pra['closed'] = !0x0, k$e86['nbsp'] || byzoq9['warning']('unclosed xml attribute')), $h8ek && ct1sd) {
            for (var $k86ie = a_zo9yb($h8ek, {}), b9iyo = 0x0; ct1sd > b9iyo; b9iyo++) {
              var parnw2 = w7pra[b9iyo];a7fj4(parnw2['offset']), parnw2['locator'] = a_zo9yb($h8ek, {});
            }k$80h['locator'] = $k86ie, a_jtf13(w7pra, k$80h, ieoy9b) && pran2['push'](w7pra), k$80h['locator'] = $h8ek;
          } else a_jtf13(w7pra, k$80h, ieoy9b) && pran2['push'](w7pra);'http://www.w3.org/1999/xhtml' !== w7pra['uri'] || w7pra['closed'] ? scld5m++ : scld5m = a_md5scl(eo$y, scld5m, w7pra['tagName'], tc5ds1, k$80h);}
    } catch (zio9b) {
      byzoq9['error']('element parse error: ' + zio9b), scld5m = -0x1;
    }scld5m > xnp ? xnp = scld5m : _8hg0k(Math['max'](ap4wr7, xnp) + 0x1);
  }
}function a_zo9yb(be6i$, t1jfs) {
  return t1jfs['lineNumber'] = be6i$['lineNumber'], t1jfs['columnNumber'] = be6i$['columnNumber'], t1jfs;
}function a_r4ap(z9ybi, kyi$6e, bz9o, h_8k0, ds1c, sdt5c) {
  for (var ts51dc, prna2w, xn_v2g = ++kyi$6e, npxrw2 = a_y6$ebi;;) {
    var wnx2vr = z9ybi['charAt'](xn_v2g);switch (wnx2vr) {case '=':
        if (npxrw2 === a_pwnar4) ts51dc = z9ybi['slice'](kyi$6e, xn_v2g), npxrw2 = a_ki6$8e;else {
          if (npxrw2 !== a_s5ldc) throw new Error('attribute equal must after attrName');npxrw2 = a_ki6$8e;
        }break;case '\x27':case '\x22':
        if (npxrw2 === a_ki6$8e || npxrw2 === a_pwnar4) {
          if (npxrw2 === a_pwnar4 && (sdt5c['warning']('attribute value must after "="'), ts51dc = z9ybi['slice'](kyi$6e, xn_v2g)), kyi$6e = xn_v2g + 0x1, xn_v2g = z9ybi['indexOf'](wnx2vr, kyi$6e), !(xn_v2g > 0x0)) throw new Error('attribute value no end \'' + wnx2vr + '\' match');prna2w = z9ybi['slice'](kyi$6e, xn_v2g)['replace'](/&#?\w+;/g, ds1c), bz9o['add'](ts51dc, prna2w, kyi$6e - 0x1), npxrw2 = a_$eobiy;
        } else {
          if (npxrw2 != a__0k8g) throw new Error('attribute value must after "="');prna2w = z9ybi['slice'](kyi$6e, xn_v2g)['replace'](/&#?\w+;/g, ds1c), bz9o['add'](ts51dc, prna2w, kyi$6e), sdt5c['warning']('attribute "' + ts51dc + '" missed start quot(' + wnx2vr + ')!!'), kyi$6e = xn_v2g + 0x1, npxrw2 = a_$eobiy;
        }break;case '/':
        switch (npxrw2) {case a_y6$ebi:
            bz9o['setTagName'](z9ybi['slice'](kyi$6e, xn_v2g));case a_$eobiy:case a_nra4p:case a_beoi:
            npxrw2 = a_beoi, bz9o['closed'] = !0x0;case a__0k8g:case a_pwnar4:case a_s5ldc:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return sdt5c['error']('unexpected end of input'), npxrw2 == a_y6$ebi && bz9o['setTagName'](z9ybi['slice'](kyi$6e, xn_v2g)), xn_v2g;case '>':
        switch (npxrw2) {case a_y6$ebi:
            bz9o['setTagName'](z9ybi['slice'](kyi$6e, xn_v2g));case a_$eobiy:case a_nra4p:case a_beoi:
            break;case a__0k8g:case a_pwnar4:
            prna2w = z9ybi['slice'](kyi$6e, xn_v2g), '/' === prna2w['slice'](-0x1) && (bz9o['closed'] = !0x0, prna2w = prna2w['slice'](0x0, -0x1));case a_s5ldc:
            npxrw2 === a_s5ldc && (prna2w = ts51dc), npxrw2 == a__0k8g ? (sdt5c['warning']('attribute "' + prna2w + '" missed quot(")!!'), bz9o['add'](ts51dc, prna2w['replace'](/&#?\w+;/g, ds1c), kyi$6e)) : ('http://www.w3.org/1999/xhtml' === h_8k0[''] && prna2w['match'](/^(?:disabled|checked|selected)$/i) || sdt5c['warning']('attribute "' + prna2w + '" missed value!! "' + prna2w + '" instead!!'), bz9o['add'](prna2w, prna2w, kyi$6e));break;case a_ki6$8e:
            throw new Error('attribute value missed!!');}return xn_v2g;case '\u0080':
        wnx2vr = '\x20';default:
        if ('\x20' >= wnx2vr) switch (npxrw2) {case a_y6$ebi:
            bz9o['setTagName'](z9ybi['slice'](kyi$6e, xn_v2g)), npxrw2 = a_nra4p;break;case a_pwnar4:
            ts51dc = z9ybi['slice'](kyi$6e, xn_v2g), npxrw2 = a_s5ldc;break;case a__0k8g:
            var prna2w = z9ybi['slice'](kyi$6e, xn_v2g)['replace'](/&#?\w+;/g, ds1c);sdt5c['warning']('attribute "' + prna2w + '" missed quot(")!!'), bz9o['add'](ts51dc, prna2w, kyi$6e);case a_$eobiy:
            npxrw2 = a_nra4p;} else switch (npxrw2) {case a_s5ldc:
            {
              bz9o['tagName'];
            }'http://www.w3.org/1999/xhtml' === h_8k0[''] && ts51dc['match'](/^(?:disabled|checked|selected)$/i) || sdt5c['warning']('attribute "' + ts51dc + '" missed value!! "' + ts51dc + '" instead2!!'), bz9o['add'](ts51dc, ts51dc, kyi$6e), kyi$6e = xn_v2g, npxrw2 = a_pwnar4;break;case a_$eobiy:
            sdt5c['warning']('attribute space is required"' + ts51dc + '\x22!!');case a_nra4p:
            npxrw2 = a_pwnar4, kyi$6e = xn_v2g;break;case a_ki6$8e:
            npxrw2 = a__0k8g, kyi$6e = xn_v2g;break;case a_beoi:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}xn_v2g++;
  }
}function a_jtf13($hk86, eki6y, h80k6) {
  for (var rp7wa4 = $hk86['tagName'], dst5 = null, eh6$8k = $hk86['length']; eh6$8k--;) {
    var fa74p = $hk86[eh6$8k],
        t17f = fa74p['qName'],
        xpw2r = fa74p['value'],
        g80hv_ = t17f['indexOf'](':');if (g80hv_ > 0x0) var yb$o = fa74p['prefix'] = t17f['slice'](0x0, g80hv_),
        h6ek$8 = t17f['slice'](g80hv_ + 0x1),
        $iyeb = 'xmlns' === yb$o && h6ek$8;else h6ek$8 = t17f, yb$o = null, $iyeb = 'xmlns' === t17f && '';fa74p['localName'] = h6ek$8, $iyeb !== !0x1 && (null == dst5 && (dst5 = {}, a_p4a(h80k6, h80k6 = {})), h80k6[$iyeb] = dst5[$iyeb] = xpw2r, fa74p['uri'] = 'http://www.w3.org/2000/xmlns/', eki6y['startPrefixMapping']($iyeb, xpw2r));
  }for (var eh6$8k = $hk86['length']; eh6$8k--;) {
    fa74p = $hk86[eh6$8k];var yb$o = fa74p['prefix'];yb$o && ('xml' === yb$o && (fa74p['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== yb$o && (fa74p['uri'] = h80k6[yb$o || '']));
  }var g80hv_ = rp7wa4['indexOf'](':');g80hv_ > 0x0 ? (yb$o = $hk86['prefix'] = rp7wa4['slice'](0x0, g80hv_), h6ek$8 = $hk86['localName'] = rp7wa4['slice'](g80hv_ + 0x1)) : (yb$o = null, h6ek$8 = $hk86['localName'] = rp7wa4);var ozbiy9 = $hk86['uri'] = h80k6[yb$o || ''];if (eki6y['startElement'](ozbiy9, h6ek$8, rp7wa4, $hk86), !$hk86['closed']) return $hk86['currentNSMap'] = h80k6, $hk86['localNSMap'] = dst5, !0x0;if (eki6y['endElement'](ozbiy9, h6ek$8, rp7wa4), dst5) {
    for (yb$o in dst5) eki6y['endPrefixMapping'](yb$o);
  }
}function a_md5scl(ap2nwr, j7a3, nprx2, e6yk$, iz9oyb) {
  if (/^(?:script|textarea)$/i['test'](nprx2)) {
    var y$6eik = ap2nwr['indexOf']('</' + nprx2 + '>', j7a3),
        yi6$eb = ap2nwr['substring'](j7a3 + 0x1, y$6eik);if (/[&<]/['test'](yi6$eb)) return (/^script$/i['test'](nprx2) ? (iz9oyb['characters'](yi6$eb, 0x0, yi6$eb['length']), y$6eik) : (yi6$eb = yi6$eb['replace'](/&#?\w+;/g, e6yk$), iz9oyb['characters'](yi6$eb, 0x0, yi6$eb['length']), y$6eik)
    );
  }return j7a3 + 0x1;
}function a_xvg_h(rapw47, v8_0h, dtc1s, h8$0k6) {
  var ey6bi$ = h8$0k6[dtc1s];return null == ey6bi$ && (ey6bi$ = rapw47['lastIndexOf']('</' + dtc1s + '>'), v8_0h > ey6bi$ && (ey6bi$ = rapw47['lastIndexOf']('</' + dtc1s)), h8$0k6[dtc1s] = ey6bi$), v8_0h > ey6bi$;
}function a_p4a(prnw4, e8$kh) {
  for (var wr4an in prnw4) e8$kh[wr4an] = prnw4[wr4an];
}function a_md1cs5($ibyoe, k80g_, p4rw7, fp) {
  var b6$iey = $ibyoe['charAt'](k80g_ + 0x2);switch (b6$iey) {case '-':
      if ('-' === $ibyoe['charAt'](k80g_ + 0x3)) {
        var zb9yq = $ibyoe['indexOf']('-->', k80g_ + 0x4);return zb9yq > k80g_ ? (p4rw7['comment']($ibyoe, k80g_ + 0x4, zb9yq - k80g_ - 0x4), zb9yq + 0x3) : (fp['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == $ibyoe['substr'](k80g_ + 0x3, 0x6)) {
        var zb9yq = $ibyoe['indexOf'](']]>', k80g_ + 0x9);return p4rw7['startCDATA'](), p4rw7['characters']($ibyoe, k80g_ + 0x9, zb9yq - k80g_ - 0x9), p4rw7['endCDATA'](), zb9yq + 0x3;
      }var kh$e6 = a_h_g80v($ibyoe, k80g_),
          ts31j = kh$e6['length'];if (ts31j > 0x1 && /!doctype/i['test'](kh$e6[0x0][0x0])) {
        var hvx0 = kh$e6[0x1][0x0],
            oibyz9 = ts31j > 0x3 && /^public$/i['test'](kh$e6[0x2][0x0]) && kh$e6[0x3][0x0],
            i9oybe = ts31j > 0x4 && kh$e6[0x4][0x0],
            xgh = kh$e6[ts31j - 0x1];return p4rw7['startDTD'](hvx0, oibyz9 && oibyz9['replace'](/^(['"])(.*?)\1$/, '$2'), i9oybe && i9oybe['replace'](/^(['"])(.*?)\1$/, '$2')), p4rw7['endDTD'](), xgh['index'] + xgh[0x0]['length'];
      }}return -0x1;
}function a_nxvw2(fa3p74, oz9yi, afp34) {
  var sft1j3 = fa3p74['indexOf']('?>', oz9yi);if (sft1j3) {
    var x_0ghv = fa3p74['substring'](oz9yi, sft1j3)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (x_0ghv) {
      {
        x_0ghv[0x0]['length'];
      }return afp34['processingInstruction'](x_0ghv[0x1], x_0ghv[0x2]), sft1j3 + 0x2;
    }return -0x1;
  }return -0x1;
}function a_$ioeby() {}function a_hxvg0_(e8k$h, gn_) {
  return e8k$h['__proto__'] = gn_, e8k$h;
}function a_h_g80v(oiye, g0h_x) {
  var gkh60,
      w2rv = [],
      csm15 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (csm15['lastIndex'] = g0h_x, csm15['exec'](oiye); gkh60 = csm15['exec'](oiye);) if (w2rv['push'](gkh60), gkh60[0x1]) return w2rv;
}var a_bi9yeo = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    a_ebi9yo = new RegExp('[\\-\\.0-9' + a_bi9yeo['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    a_ja34 = new RegExp('^' + a_bi9yeo['source'] + a_ebi9yo['source'] + '*(?::' + a_bi9yeo['source'] + a_ebi9yo['source'] + '*)?$'),
    a_y6$ebi = 0x0,
    a_pwnar4 = 0x1,
    a_s5ldc = 0x2,
    a_ki6$8e = 0x3,
    a__0k8g = 0x4,
    a_$eobiy = 0x5,
    a_nra4p = 0x6,
    a_beoi = 0x7;a_x2wpr['prototype'] = { 'parse': function ($860h, n2_xv, e$yi) {
    var x2rvn = this['domBuilder'];x2rvn['startDocument'](), a_p4a(n2_xv, n2_xv = {}), a_x_hg($860h, n2_xv, e$yi, x2rvn, this['errorHandler']), x2rvn['endDocument']();
  } }, a_$ioeby['prototype'] = { 'setTagName': function (k08$h6) {
    if (!a_ja34['test'](k08$h6)) throw new Error('invalid tagName:' + k08$h6);this['tagName'] = k08$h6;
  }, 'add': function (vwr2nx, ozy9qb, iebyo$) {
    if (!a_ja34['test'](vwr2nx)) throw new Error('invalid attribute:' + vwr2nx);this[this['length']++] = { 'qName': vwr2nx, 'value': ozy9qb, 'offset': iebyo$ };
  }, 'length': 0x0, 'getLocalName': function (tj4f3) {
    return this[tj4f3]['localName'];
  }, 'getLocator': function (anr4wp) {
    return this[anr4wp]['locator'];
  }, 'getQName': function ($ehk) {
    return this[$ehk]['qName'];
  }, 'getURI': function (tj3s1f) {
    return this[tj3s1f]['uri'];
  }, 'getValue': function (t5sdc) {
    return this[t5sdc]['value'];
  } }, a_hxvg0_({}, a_hxvg0_['prototype']) instanceof a_hxvg0_ || (a_hxvg0_ = function (_vg2, ioyzb9) {
  function dlscm() {}dlscm['prototype'] = ioyzb9, dlscm = new dlscm();for (ioyzb9 in _vg2) dlscm[ioyzb9] = _vg2[ioyzb9];return dlscm;
}), exports['XMLReader'] = a_x2wpr;