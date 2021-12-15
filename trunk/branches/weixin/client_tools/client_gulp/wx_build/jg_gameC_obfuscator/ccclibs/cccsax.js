var p = wx.$h;
function a_vgxn_2() {}function a_h8kg(vxh0g, csmd15, wpa374, hvx_, ioeb9y) {
  function i6k$e8(rwp4an) {
    if (rwp4an > 0xffff) {
      rwp4an -= 0x10000;var arw2pn = 0xd800 + (rwp4an >> 0xa),
          hk8 = 0xdc00 + (0x3ff & rwp4an);return String['fromCharCode'](arw2pn, hk8);
    }return String['fromCharCode'](rwp4an);
  }function s1td5c(h_gxv0) {
    var j7f3 = h_gxv0['slice'](0x1, -0x1);return j7f3 in wpa374 ? wpa374[j7f3] : '#' === j7f3['charAt'](0x0) ? i6k$e8(parseInt(j7f3['substr'](0x1)['replace']('x', '0x'))) : (ioeb9y['error']('entity not found:' + h_gxv0), h_gxv0);
  }function k6g80h(h_0gvx) {
    if (h_0gvx > xhv0) {
      var iob$ey = vxh0g['substring'](xhv0, h_0gvx)['replace'](/&#?\w+;/g, s1td5c);gvh0x_ && oi9eby(xhv0), hvx_['characters'](iob$ey, 0x0, h_0gvx - xhv0), xhv0 = h_0gvx;
    }
  }function oi9eby(md15c, $8keh6) {
    for (; md15c >= x_02g && ($8keh6 = gk6['exec'](vxh0g));) cfjs = $8keh6['index'], x_02g = cfjs + $8keh6[0x0]['length'], gvh0x_['lineNumber']++;gvh0x_['columnNumber'] = md15c - cfjs + 0x1;
  }for (var cfjs = 0x0, x_02g = 0x0, gk6 = /.*(?:\r\n?|\n)|.*$/g, gvh0x_ = hvx_['locator'], c1tds5 = [{ 'currentNSMap': csmd15 }], paw2rn = {}, xhv0 = 0x0;;) {
    try {
      var yb9 = vxh0g['indexOf']('<', xhv0);if (0x0 > yb9) {
        if (!vxh0g['substr'](xhv0)['match'](/^\s*$/)) {
          var eiy6b$ = hvx_['doc'],
              gh_0x = eiy6b$['createTextNode'](vxh0g['substr'](xhv0));eiy6b$['appendChild'](gh_0x), hvx_['currentElement'] = gh_0x;
        }return;
      }switch (yb9 > xhv0 && k6g80h(yb9), vxh0g['charAt'](yb9 + 0x1)) {case '/':
          var vg0x = vxh0g['indexOf']('>', yb9 + 0x3),
              rx_v = vxh0g['substring'](yb9 + 0x2, vg0x),
              qo9bz = c1tds5['pop']();0x0 > vg0x ? (rx_v = vxh0g['substring'](yb9 + 0x2)['replace'](/[\s<].*/, ''), ioeb9y['error']('end tag name: ' + rx_v + ' is not complete:' + qo9bz['tagName']), vg0x = yb9 + 0x1 + rx_v['length']) : rx_v['match'](/\s</) && (rx_v = rx_v['replace'](/[\s<].*/, ''), ioeb9y['error']('end tag name: ' + rx_v + ' maybe not complete'), vg0x = yb9 + 0x1 + rx_v['length']);var jc1sf = qo9bz['localNSMap'],
              i$eb6y = qo9bz['tagName'] == rx_v,
              o9byq = i$eb6y || qo9bz['tagName'] && qo9bz['tagName']['toLowerCase']() == rx_v['toLowerCase']();if (o9byq) {
            if (hvx_['endElement'](qo9bz['uri'], qo9bz['localName'], rx_v), jc1sf) {
              for (var eiby$6 in jc1sf) hvx_['endPrefixMapping'](eiby$6);
            }i$eb6y || ioeb9y['fatalError']('end tag name: ' + rx_v + ' is not match the current start tagName:' + qo9bz['tagName']);
          } else c1tds5['push'](qo9bz);vg0x++;break;case '?':
          gvh0x_ && oi9eby(yb9), vg0x = a_f3p(vxh0g, yb9, hvx_);break;case '!':
          gvh0x_ && oi9eby(yb9), vg0x = a_pwa4rn(vxh0g, yb9, hvx_, ioeb9y);break;default:
          gvh0x_ && oi9eby(yb9);var vx2g_ = new a_kiye6(),
              vg20_x = c1tds5[c1tds5['length'] - 0x1]['currentNSMap'],
              vg0x = a_eki(vxh0g, yb9, vx2g_, vg20_x, s1td5c, ioeb9y),
              ftsj31 = vx2g_['length'];if (!vx2g_['closed'] && a_fj3a74(vxh0g, vg0x, vx2g_['tagName'], paw2rn) && (vx2g_['closed'] = !0x0, wpa374['nbsp'] || ioeb9y['warning']('unclosed xml attribute')), gvh0x_ && ftsj31) {
            for (var ls5mdc = a_oy9bz(gvh0x_, {}), j1ts5c = 0x0; ftsj31 > j1ts5c; j1ts5c++) {
              var yib$e6 = vx2g_[j1ts5c];oi9eby(yib$e6['offset']), yib$e6['locator'] = a_oy9bz(gvh0x_, {});
            }hvx_['locator'] = ls5mdc, a_a43fj(vx2g_, hvx_, vg20_x) && c1tds5['push'](vx2g_), hvx_['locator'] = gvh0x_;
          } else a_a43fj(vx2g_, hvx_, vg20_x) && c1tds5['push'](vx2g_);'http://www.w3.org/1999/xhtml' !== vx2g_['uri'] || vx2g_['closed'] ? vg0x++ : vg0x = a_ke6h(vxh0g, vg0x, vx2g_['tagName'], s1td5c, hvx_);}
    } catch (r_n2vx) {
      ioeb9y['error']('element parse error: ' + r_n2vx), vg0x = -0x1;
    }vg0x > xhv0 ? xhv0 = vg0x : k6g80h(Math['max'](yb9, xhv0) + 0x1);
  }
}function a_oy9bz(hg8v_0, nxv2) {
  return nxv2['lineNumber'] = hg8v_0['lineNumber'], nxv2['columnNumber'] = hg8v_0['columnNumber'], nxv2;
}function a_eki(ye$6k, dcl5ms, i6by$e, cml5d, $boyi, m5cs) {
  for (var fj374t, wr4a7, gk = ++dcl5ms, ei8$6 = a_a4jf37;;) {
    var $eiyo = ye$6k['charAt'](gk);switch ($eiyo) {case '=':
        if (ei8$6 === a_ib9z) fj374t = ye$6k['slice'](dcl5ms, gk), ei8$6 = a_biey6$;else {
          if (ei8$6 !== a_j1f3t7) throw new Error('attribute equal must after attrName');ei8$6 = a_biey6$;
        }break;case '\x27':case '\x22':
        if (ei8$6 === a_biey6$ || ei8$6 === a_ib9z) {
          if (ei8$6 === a_ib9z && (m5cs['warning']('attribute value must after "="'), fj374t = ye$6k['slice'](dcl5ms, gk)), dcl5ms = gk + 0x1, gk = ye$6k['indexOf']($eiyo, dcl5ms), !(gk > 0x0)) throw new Error('attribute value no end \'' + $eiyo + '\' match');wr4a7 = ye$6k['slice'](dcl5ms, gk)['replace'](/&#?\w+;/g, $boyi), i6by$e['add'](fj374t, wr4a7, dcl5ms - 0x1), ei8$6 = a_j1ft3s;
        } else {
          if (ei8$6 != a_oeiy$) throw new Error('attribute value must after "="');wr4a7 = ye$6k['slice'](dcl5ms, gk)['replace'](/&#?\w+;/g, $boyi), i6by$e['add'](fj374t, wr4a7, dcl5ms), m5cs['warning']('attribute "' + fj374t + '" missed start quot(' + $eiyo + ')!!'), dcl5ms = gk + 0x1, ei8$6 = a_j1ft3s;
        }break;case '/':
        switch (ei8$6) {case a_a4jf37:
            i6by$e['setTagName'](ye$6k['slice'](dcl5ms, gk));case a_j1ft3s:case a_m51s:case a_y6ebi$:
            ei8$6 = a_y6ebi$, i6by$e['closed'] = !0x0;case a_oeiy$:case a_ib9z:case a_j1f3t7:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return m5cs['error']('unexpected end of input'), ei8$6 == a_a4jf37 && i6by$e['setTagName'](ye$6k['slice'](dcl5ms, gk)), gk;case '>':
        switch (ei8$6) {case a_a4jf37:
            i6by$e['setTagName'](ye$6k['slice'](dcl5ms, gk));case a_j1ft3s:case a_m51s:case a_y6ebi$:
            break;case a_oeiy$:case a_ib9z:
            wr4a7 = ye$6k['slice'](dcl5ms, gk), '/' === wr4a7['slice'](-0x1) && (i6by$e['closed'] = !0x0, wr4a7 = wr4a7['slice'](0x0, -0x1));case a_j1f3t7:
            ei8$6 === a_j1f3t7 && (wr4a7 = fj374t), ei8$6 == a_oeiy$ ? (m5cs['warning']('attribute "' + wr4a7 + '" missed quot(")!!'), i6by$e['add'](fj374t, wr4a7['replace'](/&#?\w+;/g, $boyi), dcl5ms)) : ('http://www.w3.org/1999/xhtml' === cml5d[''] && wr4a7['match'](/^(?:disabled|checked|selected)$/i) || m5cs['warning']('attribute "' + wr4a7 + '" missed value!! "' + wr4a7 + '" instead!!'), i6by$e['add'](wr4a7, wr4a7, dcl5ms));break;case a_biey6$:
            throw new Error('attribute value missed!!');}return gk;case '\u0080':
        $eiyo = '\x20';default:
        if ('\x20' >= $eiyo) switch (ei8$6) {case a_a4jf37:
            i6by$e['setTagName'](ye$6k['slice'](dcl5ms, gk)), ei8$6 = a_m51s;break;case a_ib9z:
            fj374t = ye$6k['slice'](dcl5ms, gk), ei8$6 = a_j1f3t7;break;case a_oeiy$:
            var wr4a7 = ye$6k['slice'](dcl5ms, gk)['replace'](/&#?\w+;/g, $boyi);m5cs['warning']('attribute "' + wr4a7 + '" missed quot(")!!'), i6by$e['add'](fj374t, wr4a7, dcl5ms);case a_j1ft3s:
            ei8$6 = a_m51s;} else switch (ei8$6) {case a_j1f3t7:
            {
              i6by$e['tagName'];
            }'http://www.w3.org/1999/xhtml' === cml5d[''] && fj374t['match'](/^(?:disabled|checked|selected)$/i) || m5cs['warning']('attribute "' + fj374t + '" missed value!! "' + fj374t + '" instead2!!'), i6by$e['add'](fj374t, fj374t, dcl5ms), dcl5ms = gk, ei8$6 = a_ib9z;break;case a_j1ft3s:
            m5cs['warning']('attribute space is required"' + fj374t + '\x22!!');case a_m51s:
            ei8$6 = a_ib9z, dcl5ms = gk;break;case a_biey6$:
            ei8$6 = a_oeiy$, dcl5ms = gk;break;case a_y6ebi$:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}gk++;
  }
}function a_a43fj(vh0_gx, $ki68, sc5td1) {
  for (var xv2_n = vh0_gx['tagName'], c15dts = null, kh68 = vh0_gx['length']; kh68--;) {
    var aj37 = vh0_gx[kh68],
        p3a7f4 = aj37['qName'],
        gv20x = aj37['value'],
        xv_r2 = p3a7f4['indexOf'](':');if (xv_r2 > 0x0) var vg08h = aj37['prefix'] = p3a7f4['slice'](0x0, xv_r2),
        tdc15 = p3a7f4['slice'](xv_r2 + 0x1),
        cslm5d = 'xmlns' === vg08h && tdc15;else tdc15 = p3a7f4, vg08h = null, cslm5d = 'xmlns' === p3a7f4 && '';aj37['localName'] = tdc15, cslm5d !== !0x1 && (null == c15dts && (c15dts = {}, a_ke86h$(sc5td1, sc5td1 = {})), sc5td1[cslm5d] = c15dts[cslm5d] = gv20x, aj37['uri'] = 'http://www.w3.org/2000/xmlns/', $ki68['startPrefixMapping'](cslm5d, gv20x));
  }for (var kh68 = vh0_gx['length']; kh68--;) {
    aj37 = vh0_gx[kh68];var vg08h = aj37['prefix'];vg08h && ('xml' === vg08h && (aj37['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== vg08h && (aj37['uri'] = sc5td1[vg08h || '']));
  }var xv_r2 = xv2_n['indexOf'](':');xv_r2 > 0x0 ? (vg08h = vh0_gx['prefix'] = xv2_n['slice'](0x0, xv_r2), tdc15 = vh0_gx['localName'] = xv2_n['slice'](xv_r2 + 0x1)) : (vg08h = null, tdc15 = vh0_gx['localName'] = xv2_n);var cls5dm = vh0_gx['uri'] = sc5td1[vg08h || ''];if ($ki68['startElement'](cls5dm, tdc15, xv2_n, vh0_gx), !vh0_gx['closed']) return vh0_gx['currentNSMap'] = sc5td1, vh0_gx['localNSMap'] = c15dts, !0x0;if ($ki68['endElement'](cls5dm, tdc15, xv2_n), c15dts) {
    for (vg08h in c15dts) $ki68['endPrefixMapping'](vg08h);
  }
}function a_ke6h(oy9zb, _xhvg, ozbyi, c1sj, he$k6) {
  if (/^(?:script|textarea)$/i['test'](ozbyi)) {
    var lsdm5c = oy9zb['indexOf']('</' + ozbyi + '>', _xhvg),
        h68e$ = oy9zb['substring'](_xhvg + 0x1, lsdm5c);if (/[&<]/['test'](h68e$)) return (/^script$/i['test'](ozbyi) ? (he$k6['characters'](h68e$, 0x0, h68e$['length']), lsdm5c) : (h68e$ = h68e$['replace'](/&#?\w+;/g, c1sj), he$k6['characters'](h68e$, 0x0, h68e$['length']), lsdm5c)
    );
  }return _xhvg + 0x1;
}function a_fj3a74(x0g_h, be9y, s1t5, tf37j) {
  var $i6ke8 = tf37j[s1t5];return null == $i6ke8 && ($i6ke8 = x0g_h['lastIndexOf']('</' + s1t5 + '>'), be9y > $i6ke8 && ($i6ke8 = x0g_h['lastIndexOf']('</' + s1t5)), tf37j[s1t5] = $i6ke8), be9y > $i6ke8;
}function a_ke86h$(csdt1, h086k) {
  for (var wrnpa in csdt1) h086k[wrnpa] = csdt1[wrnpa];
}function a_pwa4rn(rnx2w, wap4n, ke6$i, $oiyb) {
  var prn4wa = rnx2w['charAt'](wap4n + 0x2);switch (prn4wa) {case '-':
      if ('-' === rnx2w['charAt'](wap4n + 0x3)) {
        var f3j47t = rnx2w['indexOf']('-->', wap4n + 0x4);return f3j47t > wap4n ? (ke6$i['comment'](rnx2w, wap4n + 0x4, f3j47t - wap4n - 0x4), f3j47t + 0x3) : ($oiyb['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == rnx2w['substr'](wap4n + 0x3, 0x6)) {
        var f3j47t = rnx2w['indexOf'](']]>', wap4n + 0x9);return ke6$i['startCDATA'](), ke6$i['characters'](rnx2w, wap4n + 0x9, f3j47t - wap4n - 0x9), ke6$i['endCDATA'](), f3j47t + 0x3;
      }var kh68$e = a_obyei$(rnx2w, wap4n),
          j1cfst = kh68$e['length'];if (j1cfst > 0x1 && /!doctype/i['test'](kh68$e[0x0][0x0])) {
        var h8k0g = kh68$e[0x1][0x0],
            stj5c1 = j1cfst > 0x3 && /^public$/i['test'](kh68$e[0x2][0x0]) && kh68$e[0x3][0x0],
            paw4nr = j1cfst > 0x4 && kh68$e[0x4][0x0],
            vn_2rx = kh68$e[j1cfst - 0x1];return ke6$i['startDTD'](h8k0g, stj5c1 && stj5c1['replace'](/^(['"])(.*?)\1$/, '$2'), paw4nr && paw4nr['replace'](/^(['"])(.*?)\1$/, '$2')), ke6$i['endDTD'](), vn_2rx['index'] + vn_2rx[0x0]['length'];
      }}return -0x1;
}function a_f3p(warn4, tfs13, s13) {
  var nw4arp = warn4['indexOf']('?>', tfs13);if (nw4arp) {
    var j734tf = warn4['substring'](tfs13, nw4arp)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (j734tf) {
      {
        j734tf[0x0]['length'];
      }return s13['processingInstruction'](j734tf[0x1], j734tf[0x2]), nw4arp + 0x2;
    }return -0x1;
  }return -0x1;
}function a_kiye6() {}function a_p7af43(oibe$, e8i$k6) {
  return oibe$['__proto__'] = e8i$k6, oibe$;
}function a_obyei$(_xh, aprn4) {
  var h$k,
      l5mcsd = [],
      eb9yo = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (eb9yo['lastIndex'] = aprn4, eb9yo['exec'](_xh); h$k = eb9yo['exec'](_xh);) if (l5mcsd['push'](h$k), h$k[0x1]) return l5mcsd;
}var a_prxn2w = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    a_n_gxv2 = new RegExp('[\\-\\.0-9' + a_prxn2w['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    a_pa734 = new RegExp('^' + a_prxn2w['source'] + a_n_gxv2['source'] + '*(?::' + a_prxn2w['source'] + a_n_gxv2['source'] + '*)?$'),
    a_a4jf37 = 0x0,
    a_ib9z = 0x1,
    a_j1f3t7 = 0x2,
    a_biey6$ = 0x3,
    a_oeiy$ = 0x4,
    a_j1ft3s = 0x5,
    a_m51s = 0x6,
    a_y6ebi$ = 0x7;a_vgxn_2['prototype'] = { 'parse': function (_0hk8g, h0$8, k6$8i) {
    var xgv_20 = this['domBuilder'];xgv_20['startDocument'](), a_ke86h$(h0$8, h0$8 = {}), a_h8kg(_0hk8g, h0$8, k6$8i, xgv_20, this['errorHandler']), xgv_20['endDocument']();
  } }, a_kiye6['prototype'] = { 'setTagName': function (t51c) {
    if (!a_pa734['test'](t51c)) throw new Error('invalid tagName:' + t51c);this['tagName'] = t51c;
  }, 'add': function (dc1st5, y$ibe6, oibye) {
    if (!a_pa734['test'](dc1st5)) throw new Error('invalid attribute:' + dc1st5);this[this['length']++] = { 'qName': dc1st5, 'value': y$ibe6, 'offset': oibye };
  }, 'length': 0x0, 'getLocalName': function (w74a3) {
    return this[w74a3]['localName'];
  }, 'getLocator': function ($yiboe) {
    return this[$yiboe]['locator'];
  }, 'getQName': function (ekh) {
    return this[ekh]['qName'];
  }, 'getURI': function (f3a74) {
    return this[f3a74]['uri'];
  }, 'getValue': function (nx2pwr) {
    return this[nx2pwr]['value'];
  } }, a_p7af43({}, a_p7af43['prototype']) instanceof a_p7af43 || (a_p7af43 = function (vwn2x, $ioye) {
  function cjft1s() {}cjft1s['prototype'] = $ioye, cjft1s = new cjft1s();for ($ioye in vwn2x) cjft1s[$ioye] = vwn2x[$ioye];return cjft1s;
}), exports['XMLReader'] = a_vgxn_2;