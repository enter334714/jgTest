var p = wx.$h;
function a_scft() {}function a_xgv20(h_vgx, awp473, oyib, jctfs, ob9qyz) {
  function jftcs1(vgx2n) {
    if (vgx2n > 0xffff) {
      vgx2n -= 0x10000;var e6$yb = 0xd800 + (vgx2n >> 0xa),
          ki$e = 0xdc00 + (0x3ff & vgx2n);return String['fromCharCode'](e6$yb, ki$e);
    }return String['fromCharCode'](vgx2n);
  }function jc1tsf(kg_0h) {
    var rwnxp = kg_0h['slice'](0x1, -0x1);return rwnxp in oyib ? oyib[rwnxp] : '#' === rwnxp['charAt'](0x0) ? jftcs1(parseInt(rwnxp['substr'](0x1)['replace']('x', '0x'))) : (ob9qyz['error']('entity not found:' + kg_0h), kg_0h);
  }function x_0hvg(nw4rpa) {
    if (nw4rpa > e$iby6) {
      var k0_g = h_vgx['substring'](e$iby6, nw4rpa)['replace'](/&#?\w+;/g, jc1tsf);rxn2v && j3t47f(e$iby6), jctfs['characters'](k0_g, 0x0, nw4rpa - e$iby6), e$iby6 = nw4rpa;
    }
  }function j3t47f(ik$6e8, xnr2_v) {
    for (; ik$6e8 >= ls5mcd && (xnr2_v = wpr2a['exec'](h_vgx));) jsc5t = xnr2_v['index'], ls5mcd = jsc5t + xnr2_v[0x0]['length'], rxn2v['lineNumber']++;rxn2v['columnNumber'] = ik$6e8 - jsc5t + 0x1;
  }for (var jsc5t = 0x0, ls5mcd = 0x0, wpr2a = /.*(?:\r\n?|\n)|.*$/g, rxn2v = jctfs['locator'], rp7wa = [{ 'currentNSMap': awp473 }], h$e6 = {}, e$iby6 = 0x0;;) {
    try {
      var k6e8i$ = h_vgx['indexOf']('<', e$iby6);if (0x0 > k6e8i$) {
        if (!h_vgx['substr'](e$iby6)['match'](/^\s*$/)) {
          var i9ybo = jctfs['doc'],
              pw374a = i9ybo['createTextNode'](h_vgx['substr'](e$iby6));i9ybo['appendChild'](pw374a), jctfs['currentElement'] = pw374a;
        }return;
      }switch (k6e8i$ > e$iby6 && x_0hvg(k6e8i$), h_vgx['charAt'](k6e8i$ + 0x1)) {case '/':
          var dcml5 = h_vgx['indexOf']('>', k6e8i$ + 0x3),
              ik68e = h_vgx['substring'](k6e8i$ + 0x2, dcml5),
              stj1 = rp7wa['pop']();0x0 > dcml5 ? (ik68e = h_vgx['substring'](k6e8i$ + 0x2)['replace'](/[\s<].*/, ''), ob9qyz['error']('end tag name: ' + ik68e + ' is not complete:' + stj1['tagName']), dcml5 = k6e8i$ + 0x1 + ik68e['length']) : ik68e['match'](/\s</) && (ik68e = ik68e['replace'](/[\s<].*/, ''), ob9qyz['error']('end tag name: ' + ik68e + ' maybe not complete'), dcml5 = k6e8i$ + 0x1 + ik68e['length']);var _g2v = stj1['localNSMap'],
              f34p7a = stj1['tagName'] == ik68e,
              e6by$ = f34p7a || stj1['tagName'] && stj1['tagName']['toLowerCase']() == ik68e['toLowerCase']();if (e6by$) {
            if (jctfs['endElement'](stj1['uri'], stj1['localName'], ik68e), _g2v) {
              for (var cst51d in _g2v) jctfs['endPrefixMapping'](cst51d);
            }f34p7a || ob9qyz['fatalError']('end tag name: ' + ik68e + ' is not match the current start tagName:' + stj1['tagName']);
          } else rp7wa['push'](stj1);dcml5++;break;case '?':
          rxn2v && j3t47f(k6e8i$), dcml5 = a_$ib6ye(h_vgx, k6e8i$, jctfs);break;case '!':
          rxn2v && j3t47f(k6e8i$), dcml5 = a_cs15d(h_vgx, k6e8i$, jctfs, ob9qyz);break;default:
          rxn2v && j3t47f(k6e8i$);var wpar47 = new a_n2awr(),
              sfcjt = rp7wa[rp7wa['length'] - 0x1]['currentNSMap'],
              dcml5 = a_p7a3w4(h_vgx, k6e8i$, wpar47, sfcjt, jc1tsf, ob9qyz),
              z9qb = wpar47['length'];if (!wpar47['closed'] && a_mc1s5d(h_vgx, dcml5, wpar47['tagName'], h$e6) && (wpar47['closed'] = !0x0, oyib['nbsp'] || ob9qyz['warning']('unclosed xml attribute')), rxn2v && z9qb) {
            for (var csfjt1 = a_p37a4f(rxn2v, {}), _vx02 = 0x0; z9qb > _vx02; _vx02++) {
              var _xv20g = wpar47[_vx02];j3t47f(_xv20g['offset']), _xv20g['locator'] = a_p37a4f(rxn2v, {});
            }jctfs['locator'] = csfjt1, a_v8hg0(wpar47, jctfs, sfcjt) && rp7wa['push'](wpar47), jctfs['locator'] = rxn2v;
          } else a_v8hg0(wpar47, jctfs, sfcjt) && rp7wa['push'](wpar47);'http://www.w3.org/1999/xhtml' !== wpar47['uri'] || wpar47['closed'] ? dcml5++ : dcml5 = a_p3a74f(h_vgx, dcml5, wpar47['tagName'], jc1tsf, jctfs);}
    } catch (byo9zq) {
      ob9qyz['error']('element parse error: ' + byo9zq), dcml5 = -0x1;
    }dcml5 > e$iby6 ? e$iby6 = dcml5 : x_0hvg(Math['max'](k6e8i$, e$iby6) + 0x1);
  }
}function a_p37a4f(x_02v, o9byie) {
  return o9byie['lineNumber'] = x_02v['lineNumber'], o9byie['columnNumber'] = x_02v['columnNumber'], o9byie;
}function a_p7a3w4(b9yoq, m5dlsc, xv0_2, k6e$, $h860, y6ke$) {
  for (var e8ki6$, xgvn2_, gxh0_ = ++m5dlsc, wa7p4r = a__rxv;;) {
    var zoyqb = b9yoq['charAt'](gxh0_);switch (zoyqb) {case '=':
        if (wa7p4r === a_k8h0g) e8ki6$ = b9yoq['slice'](m5dlsc, gxh0_), wa7p4r = a_k$6eh8;else {
          if (wa7p4r !== a_s5mdlc) throw new Error('attribute equal must after attrName');wa7p4r = a_k$6eh8;
        }break;case '\x27':case '\x22':
        if (wa7p4r === a_k$6eh8 || wa7p4r === a_k8h0g) {
          if (wa7p4r === a_k8h0g && (y6ke$['warning']('attribute value must after "="'), e8ki6$ = b9yoq['slice'](m5dlsc, gxh0_)), m5dlsc = gxh0_ + 0x1, gxh0_ = b9yoq['indexOf'](zoyqb, m5dlsc), !(gxh0_ > 0x0)) throw new Error('attribute value no end \'' + zoyqb + '\' match');xgvn2_ = b9yoq['slice'](m5dlsc, gxh0_)['replace'](/&#?\w+;/g, $h860), xv0_2['add'](e8ki6$, xgvn2_, m5dlsc - 0x1), wa7p4r = a_zoqy;
        } else {
          if (wa7p4r != a_ioz9) throw new Error('attribute value must after "="');xgvn2_ = b9yoq['slice'](m5dlsc, gxh0_)['replace'](/&#?\w+;/g, $h860), xv0_2['add'](e8ki6$, xgvn2_, m5dlsc), y6ke$['warning']('attribute "' + e8ki6$ + '" missed start quot(' + zoyqb + ')!!'), m5dlsc = gxh0_ + 0x1, wa7p4r = a_zoqy;
        }break;case '/':
        switch (wa7p4r) {case a__rxv:
            xv0_2['setTagName'](b9yoq['slice'](m5dlsc, gxh0_));case a_zoqy:case a_xv:case a_b$e6:
            wa7p4r = a_b$e6, xv0_2['closed'] = !0x0;case a_ioz9:case a_k8h0g:case a_s5mdlc:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return y6ke$['error']('unexpected end of input'), wa7p4r == a__rxv && xv0_2['setTagName'](b9yoq['slice'](m5dlsc, gxh0_)), gxh0_;case '>':
        switch (wa7p4r) {case a__rxv:
            xv0_2['setTagName'](b9yoq['slice'](m5dlsc, gxh0_));case a_zoqy:case a_xv:case a_b$e6:
            break;case a_ioz9:case a_k8h0g:
            xgvn2_ = b9yoq['slice'](m5dlsc, gxh0_), '/' === xgvn2_['slice'](-0x1) && (xv0_2['closed'] = !0x0, xgvn2_ = xgvn2_['slice'](0x0, -0x1));case a_s5mdlc:
            wa7p4r === a_s5mdlc && (xgvn2_ = e8ki6$), wa7p4r == a_ioz9 ? (y6ke$['warning']('attribute "' + xgvn2_ + '" missed quot(")!!'), xv0_2['add'](e8ki6$, xgvn2_['replace'](/&#?\w+;/g, $h860), m5dlsc)) : ('http://www.w3.org/1999/xhtml' === k6e$[''] && xgvn2_['match'](/^(?:disabled|checked|selected)$/i) || y6ke$['warning']('attribute "' + xgvn2_ + '" missed value!! "' + xgvn2_ + '" instead!!'), xv0_2['add'](xgvn2_, xgvn2_, m5dlsc));break;case a_k$6eh8:
            throw new Error('attribute value missed!!');}return gxh0_;case '\u0080':
        zoyqb = '\x20';default:
        if ('\x20' >= zoyqb) switch (wa7p4r) {case a__rxv:
            xv0_2['setTagName'](b9yoq['slice'](m5dlsc, gxh0_)), wa7p4r = a_xv;break;case a_k8h0g:
            e8ki6$ = b9yoq['slice'](m5dlsc, gxh0_), wa7p4r = a_s5mdlc;break;case a_ioz9:
            var xgvn2_ = b9yoq['slice'](m5dlsc, gxh0_)['replace'](/&#?\w+;/g, $h860);y6ke$['warning']('attribute "' + xgvn2_ + '" missed quot(")!!'), xv0_2['add'](e8ki6$, xgvn2_, m5dlsc);case a_zoqy:
            wa7p4r = a_xv;} else switch (wa7p4r) {case a_s5mdlc:
            {
              xv0_2['tagName'];
            }'http://www.w3.org/1999/xhtml' === k6e$[''] && e8ki6$['match'](/^(?:disabled|checked|selected)$/i) || y6ke$['warning']('attribute "' + e8ki6$ + '" missed value!! "' + e8ki6$ + '" instead2!!'), xv0_2['add'](e8ki6$, e8ki6$, m5dlsc), m5dlsc = gxh0_, wa7p4r = a_k8h0g;break;case a_zoqy:
            y6ke$['warning']('attribute space is required"' + e8ki6$ + '\x22!!');case a_xv:
            wa7p4r = a_k8h0g, m5dlsc = gxh0_;break;case a_k$6eh8:
            wa7p4r = a_ioz9, m5dlsc = gxh0_;break;case a_b$e6:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}gxh0_++;
  }
}function a_v8hg0(sl, jstf13, j371) {
  for (var k06g8h = sl['tagName'], f7a43 = null, a4f7 = sl['length']; a4f7--;) {
    var ts31f = sl[a4f7],
        gvx_20 = ts31f['qName'],
        fjc1ts = ts31f['value'],
        j4fa = gvx_20['indexOf'](':');if (j4fa > 0x0) var e6iby$ = ts31f['prefix'] = gvx_20['slice'](0x0, j4fa),
        wa4rpn = gvx_20['slice'](j4fa + 0x1),
        i6eb = 'xmlns' === e6iby$ && wa4rpn;else wa4rpn = gvx_20, e6iby$ = null, i6eb = 'xmlns' === gvx_20 && '';ts31f['localName'] = wa4rpn, i6eb !== !0x1 && (null == f7a43 && (f7a43 = {}, a__gvh08(j371, j371 = {})), j371[i6eb] = f7a43[i6eb] = fjc1ts, ts31f['uri'] = 'http://www.w3.org/2000/xmlns/', jstf13['startPrefixMapping'](i6eb, fjc1ts));
  }for (var a4f7 = sl['length']; a4f7--;) {
    ts31f = sl[a4f7];var e6iby$ = ts31f['prefix'];e6iby$ && ('xml' === e6iby$ && (ts31f['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== e6iby$ && (ts31f['uri'] = j371[e6iby$ || '']));
  }var j4fa = k06g8h['indexOf'](':');j4fa > 0x0 ? (e6iby$ = sl['prefix'] = k06g8h['slice'](0x0, j4fa), wa4rpn = sl['localName'] = k06g8h['slice'](j4fa + 0x1)) : (e6iby$ = null, wa4rpn = sl['localName'] = k06g8h);var xrpwn2 = sl['uri'] = j371[e6iby$ || ''];if (jstf13['startElement'](xrpwn2, wa4rpn, k06g8h, sl), !sl['closed']) return sl['currentNSMap'] = j371, sl['localNSMap'] = f7a43, !0x0;if (jstf13['endElement'](xrpwn2, wa4rpn, k06g8h), f7a43) {
    for (e6iby$ in f7a43) jstf13['endPrefixMapping'](e6iby$);
  }
}function a_p3a74f(i$k6ye, o9yie, g0hk, kh$8e, sc5md1) {
  if (/^(?:script|textarea)$/i['test'](g0hk)) {
    var cs1f = i$k6ye['indexOf']('</' + g0hk + '>', o9yie),
        xnv_g = i$k6ye['substring'](o9yie + 0x1, cs1f);if (/[&<]/['test'](xnv_g)) return (/^script$/i['test'](g0hk) ? (sc5md1['characters'](xnv_g, 0x0, xnv_g['length']), cs1f) : (xnv_g = xnv_g['replace'](/&#?\w+;/g, kh$8e), sc5md1['characters'](xnv_g, 0x0, xnv_g['length']), cs1f)
    );
  }return o9yie + 0x1;
}function a_mc1s5d(rvxnw2, e6yb$, m5cd1s, n2prwa) {
  var iy$6e = n2prwa[m5cd1s];return null == iy$6e && (iy$6e = rvxnw2['lastIndexOf']('</' + m5cd1s + '>'), e6yb$ > iy$6e && (iy$6e = rvxnw2['lastIndexOf']('</' + m5cd1s)), n2prwa[m5cd1s] = iy$6e), e6yb$ > iy$6e;
}function a__gvh08($iyb, rvx_n2) {
  for (var zq9yo in $iyb) rvx_n2[zq9yo] = $iyb[zq9yo];
}function a_cs15d(qozyb, t1jf3s, tjfs31, y$oe) {
  var iboey9 = qozyb['charAt'](t1jf3s + 0x2);switch (iboey9) {case '-':
      if ('-' === qozyb['charAt'](t1jf3s + 0x3)) {
        var ozq = qozyb['indexOf']('-->', t1jf3s + 0x4);return ozq > t1jf3s ? (tjfs31['comment'](qozyb, t1jf3s + 0x4, ozq - t1jf3s - 0x4), ozq + 0x3) : (y$oe['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == qozyb['substr'](t1jf3s + 0x3, 0x6)) {
        var ozq = qozyb['indexOf'](']]>', t1jf3s + 0x9);return tjfs31['startCDATA'](), tjfs31['characters'](qozyb, t1jf3s + 0x9, ozq - t1jf3s - 0x9), tjfs31['endCDATA'](), ozq + 0x3;
      }var x0hvg_ = a_px2rw(qozyb, t1jf3s),
          a4f73p = x0hvg_['length'];if (a4f73p > 0x1 && /!doctype/i['test'](x0hvg_[0x0][0x0])) {
        var arpw2 = x0hvg_[0x1][0x0],
            aw4r7 = a4f73p > 0x3 && /^public$/i['test'](x0hvg_[0x2][0x0]) && x0hvg_[0x3][0x0],
            naw2p = a4f73p > 0x4 && x0hvg_[0x4][0x0],
            nxr2v = x0hvg_[a4f73p - 0x1];return tjfs31['startDTD'](arpw2, aw4r7 && aw4r7['replace'](/^(['"])(.*?)\1$/, '$2'), naw2p && naw2p['replace'](/^(['"])(.*?)\1$/, '$2')), tjfs31['endDTD'](), nxr2v['index'] + nxr2v[0x0]['length'];
      }}return -0x1;
}function a_$ib6ye(ja3, e$ybi, i$y6ke) {
  var std51 = ja3['indexOf']('?>', e$ybi);if (std51) {
    var i$oy = ja3['substring'](e$ybi, std51)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (i$oy) {
      {
        i$oy[0x0]['length'];
      }return i$y6ke['processingInstruction'](i$oy[0x1], i$oy[0x2]), std51 + 0x2;
    }return -0x1;
  }return -0x1;
}function a_n2awr() {}function a_$yeo(_02v, _hvgx0) {
  return _02v['__proto__'] = _hvgx0, _02v;
}function a_px2rw(arnw2, wr47) {
  var rwp2,
      oybie$ = [],
      _xn2vr = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (_xn2vr['lastIndex'] = wr47, _xn2vr['exec'](arnw2); rwp2 = _xn2vr['exec'](arnw2);) if (oybie$['push'](rwp2), rwp2[0x1]) return oybie$;
}var a_b9zoi = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    a_oyi$be = new RegExp('[\\-\\.0-9' + a_b9zoi['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    a_m1c5sd = new RegExp('^' + a_b9zoi['source'] + a_oyi$be['source'] + '*(?::' + a_b9zoi['source'] + a_oyi$be['source'] + '*)?$'),
    a__rxv = 0x0,
    a_k8h0g = 0x1,
    a_s5mdlc = 0x2,
    a_k$6eh8 = 0x3,
    a_ioz9 = 0x4,
    a_zoqy = 0x5,
    a_xv = 0x6,
    a_b$e6 = 0x7;a_scft['prototype'] = { 'parse': function (a4npr, qyoz9, y6e$) {
    var x2_nv = this['domBuilder'];x2_nv['startDocument'](), a__gvh08(qyoz9, qyoz9 = {}), a_xgv20(a4npr, qyoz9, y6e$, x2_nv, this['errorHandler']), x2_nv['endDocument']();
  } }, a_n2awr['prototype'] = { 'setTagName': function (eb$yio) {
    if (!a_m1c5sd['test'](eb$yio)) throw new Error('invalid tagName:' + eb$yio);this['tagName'] = eb$yio;
  }, 'add': function (w4nap, fa3, nw2ar) {
    if (!a_m1c5sd['test'](w4nap)) throw new Error('invalid attribute:' + w4nap);this[this['length']++] = { 'qName': w4nap, 'value': fa3, 'offset': nw2ar };
  }, 'length': 0x0, 'getLocalName': function (boziy) {
    return this[boziy]['localName'];
  }, 'getLocator': function (d5l) {
    return this[d5l]['locator'];
  }, 'getQName': function (qboyz) {
    return this[qboyz]['qName'];
  }, 'getURI': function (vhg80_) {
    return this[vhg80_]['uri'];
  }, 'getValue': function (r4pw) {
    return this[r4pw]['value'];
  } }, a_$yeo({}, a_$yeo['prototype']) instanceof a_$yeo || (a_$yeo = function ($obei, vr_n) {
  function g02_vx() {}g02_vx['prototype'] = vr_n, g02_vx = new g02_vx();for (vr_n in $obei) g02_vx[vr_n] = $obei[vr_n];return g02_vx;
}), exports['XMLReader'] = a_scft;