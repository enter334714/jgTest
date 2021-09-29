var p = wx.$h;
function a_w_crs() {}function a_mgon3(voxm, o1vg3m, k7i42n, m3gv1o, e5pyb9) {
  function m1qvo(bl9e5y) {
    var m3ox1v = bl9e5y['slice'](0x1, -0x1);return m3ox1v in k7i42n ? k7i42n[m3ox1v] : '#' === m3ox1v['charAt'](0x0) ? 0xffff < (m3ox1v = parseInt(m3ox1v['substr'](0x1)['replace']('x', '0x'))) ? (m3ox1v -= 0x10000, String['fromCharCode'](0xd800 + (m3ox1v >> 0xa), 0xdc00 + (0x3ff & m3ox1v))) : String['fromCharCode'](m3ox1v) : (e5pyb9['error']('entity not found:' + bl9e5y), bl9e5y);
  }function p6j$a9(kl5bey) {
    var b2ik;$wa6h < kl5bey && (b2ik = voxm['substring']($wa6h, kl5bey)['replace'](/&#?\w+;/g, m1qvo), rs_8 && tws_c($wa6h), m3gv1o['characters'](b2ik, 0x0, kl5bey - $wa6h), $wa6h = kl5bey);
  }function tws_c(jwash$, kye5) {
    for (; k5blye <= jwash$ && (kye5 = m3vgo['exec'](voxm));) mvo1x = kye5['index'], k5blye = mvo1x + kye5[0x0]['length'], rs_8['lineNumber']++;rs_8['columnNumber'] = jwash$ - mvo1x + 0x1;
  }for (var mvo1x = 0x0, k5blye = 0x0, m3vgo = /.*(?:\r\n?|\n)|.*$/g, rs_8 = m3gv1o['locator'], p6j59y = [{ 'currentNSMap': o1vg3m }], cs$hw_ = {}, $wa6h = 0x0;;) {
    try {
      var n20i = voxm['indexOf']('<', $wa6h),
          l24i,
          w$ha;if (n20i < 0x0) return void (voxm['substr']($wa6h)['match'](/^\s*$/) || (w$ha = (l24i = m3gv1o['doc'])['createTextNode'](voxm['substr']($wa6h)), l24i['appendChild'](w$ha), m3gv1o['currentElement'] = w$ha));switch ($wa6h < n20i && p6j$a9(n20i), voxm['charAt'](n20i + 0x1)) {case '/':
          var xm3o1 = voxm['indexOf']('>', n20i + 0x3),
              $ah6j = voxm['substring'](n20i + 0x2, xm3o1),
              $paj = p6j59y['pop']();xm3o1 < 0x0 ? ($ah6j = voxm['substring'](n20i + 0x2)['replace'](/[\s<].*/, ''), e5pyb9['error']('end tag name: ' + $ah6j + ' is not complete:' + $paj['tagName']), xm3o1 = n20i + 0x1 + $ah6j['length']) : $ah6j['match'](/\s</) && ($ah6j = $ah6j['replace'](/[\s<].*/, ''), e5pyb9['error']('end tag name: ' + $ah6j + ' maybe not complete'), xm3o1 = n20i + 0x1 + $ah6j['length']);var hjw$6 = $paj['localNSMap'],
              whcs = $paj['tagName'] == $ah6j;if (whcs || $paj['tagName'] && $paj['tagName']['toLowerCase']() == $ah6j['toLowerCase']()) {
            if (m3gv1o['endElement']($paj['uri'], $paj['localName'], $ah6j), hjw$6) {
              for (var _cwts in hjw$6) m3gv1o['endPrefixMapping'](_cwts);
            }whcs || e5pyb9['fatalError']('end tag name: ' + $ah6j + ' is not match the current start tagName:' + $paj['tagName']);
          } else p6j59y['push']($paj);xm3o1++;break;case '?':
          rs_8 && tws_c(n20i), xm3o1 = a_p9a5j6(voxm, n20i, m3gv1o);break;case '!':
          rs_8 && tws_c(n20i), xm3o1 = a_c$s_hw(voxm, n20i, m3gv1o, e5pyb9);break;default:
          rs_8 && tws_c(n20i);var p6aj$h = new a_w$jha6(),
              i74n20 = p6j59y[p6j59y['length'] - 0x1]['currentNSMap'],
              xm3o1 = a_g073o(voxm, n20i, p6aj$h, i74n20, m1qvo, e5pyb9),
              $ahw6j = p6aj$h['length'];if (!p6aj$h['closed'] && a_p96ye(voxm, xm3o1, p6aj$h['tagName'], cs$hw_) && (p6aj$h['closed'] = !0x0, k7i42n['nbsp'] || e5pyb9['warning']('unclosed xml attribute')), rs_8 && $ahw6j) {
            for (var $6p9aj = a_ahwc(rs_8, {}), ah$p6 = 0x0; ah$p6 < $ahw6j; ah$p6++) {
              var g3omv1 = p6aj$h[ah$p6];tws_c(g3omv1['offset']), g3omv1['locator'] = a_ahwc(rs_8, {});
            }m3gv1o['locator'] = $6p9aj, a_$aj9p(p6aj$h, m3gv1o, i74n20) && p6j59y['push'](p6aj$h), m3gv1o['locator'] = rs_8;
          } else a_$aj9p(p6aj$h, m3gv1o, i74n20) && p6j59y['push'](p6aj$h);'http://www.w3.org/1999/xhtml' !== p6aj$h['uri'] || p6aj$h['closed'] ? xm3o1++ : xm3o1 = a_zq1vxf(voxm, xm3o1, p6aj$h['tagName'], m1qvo, m3gv1o);}
    } catch (eibyk) {
      e5pyb9['error']('element parse error: ' + eibyk), xm3o1 = -0x1;
    }$wa6h < xm3o1 ? $wa6h = xm3o1 : p6j$a9(Math['max'](n20i, $wa6h) + 0x1);
  }
}function a_ahwc(gm301o, ov1mx) {
  return ov1mx['lineNumber'] = gm301o['lineNumber'], ov1mx['columnNumber'] = gm301o['columnNumber'], ov1mx;
}function a_g073o(mxv3o, _htcw, $awj, ctsw_, xf1vzq, $cashw) {
  for (var htcsw_, nk27i4 = ++_htcw, wh$6a = a_hc$ws_;;) {
    var $p6ahj = mxv3o['charAt'](nk27i4);switch ($p6ahj) {case '=':
        if (wh$6a === a_f1mvq) htcsw_ = mxv3o['slice'](_htcw, nk27i4), wh$6a = a_pey95b;else {
          if (wh$6a !== a_fxvq1m) throw new Error('attribute equal must after attrName');wh$6a = a_pey95b;
        }break;case '\x27':case '\x22':
        if (wh$6a === a_pey95b || wh$6a === a_f1mvq) {
          if (wh$6a === a_f1mvq && ($cashw['warning']('attribute value must after "="'), htcsw_ = mxv3o['slice'](_htcw, nk27i4)), !(0x0 < (nk27i4 = mxv3o['indexOf']($p6ahj, _htcw = nk27i4 + 0x1)))) throw new Error('attribute value no end \'' + $p6ahj + '\' match');li4e = mxv3o['slice'](_htcw, nk27i4)['replace'](/&#?\w+;/g, xf1vzq), $awj['add'](htcsw_, li4e, _htcw - 0x1), wh$6a = a_sacwh$;
        } else {
          if (wh$6a != a_p6a9$) throw new Error('attribute value must after "="');li4e = mxv3o['slice'](_htcw, nk27i4)['replace'](/&#?\w+;/g, xf1vzq), $awj['add'](htcsw_, li4e, _htcw), $cashw['warning']('attribute "' + htcsw_ + '" missed start quot(' + $p6ahj + ')!!'), _htcw = nk27i4 + 0x1, wh$6a = a_sacwh$;
        }break;case '/':
        switch (wh$6a) {case a_hc$ws_:
            $awj['setTagName'](mxv3o['slice'](_htcw, nk27i4));case a_sacwh$:case a_kbily:case a_ek5ly:
            wh$6a = a_ek5ly, $awj['closed'] = !0x0;case a_p6a9$:case a_f1mvq:case a_fxvq1m:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return $cashw['error']('unexpected end of input'), wh$6a == a_hc$ws_ && $awj['setTagName'](mxv3o['slice'](_htcw, nk27i4)), nk27i4;case '>':
        switch (wh$6a) {case a_hc$ws_:
            $awj['setTagName'](mxv3o['slice'](_htcw, nk27i4));case a_sacwh$:case a_kbily:case a_ek5ly:
            break;case a_p6a9$:case a_f1mvq:
            '/' === (li4e = mxv3o['slice'](_htcw, nk27i4))['slice'](-0x1) && ($awj['closed'] = !0x0, li4e = li4e['slice'](0x0, -0x1));case a_fxvq1m:
            wh$6a === a_fxvq1m && (li4e = htcsw_), wh$6a == a_p6a9$ ? ($cashw['warning']('attribute "' + li4e + '" missed quot(")!!'), $awj['add'](htcsw_, li4e['replace'](/&#?\w+;/g, xf1vzq), _htcw)) : ('http://www.w3.org/1999/xhtml' === ctsw_[''] && li4e['match'](/^(?:disabled|checked|selected)$/i) || $cashw['warning']('attribute "' + li4e + '" missed value!! "' + li4e + '" instead!!'), $awj['add'](li4e, li4e, _htcw));break;case a_pey95b:
            throw new Error('attribute value missed!!');}return nk27i4;case '\u0080':
        $p6ahj = '\x20';default:
        if ($p6ahj <= '\x20') switch (wh$6a) {case a_hc$ws_:
            $awj['setTagName'](mxv3o['slice'](_htcw, nk27i4)), wh$6a = a_kbily;break;case a_f1mvq:
            htcsw_ = mxv3o['slice'](_htcw, nk27i4), wh$6a = a_fxvq1m;break;case a_p6a9$:
            var li4e = mxv3o['slice'](_htcw, nk27i4)['replace'](/&#?\w+;/g, xf1vzq);$cashw['warning']('attribute "' + li4e + '" missed quot(")!!'), $awj['add'](htcsw_, li4e, _htcw);case a_sacwh$:
            wh$6a = a_kbily;} else switch (wh$6a) {case a_fxvq1m:
            $awj['tagName'], 'http://www.w3.org/1999/xhtml' === ctsw_[''] && htcsw_['match'](/^(?:disabled|checked|selected)$/i) || $cashw['warning']('attribute "' + htcsw_ + '" missed value!! "' + htcsw_ + '" instead2!!'), $awj['add'](htcsw_, htcsw_, _htcw), _htcw = nk27i4, wh$6a = a_f1mvq;break;case a_sacwh$:
            $cashw['warning']('attribute space is required"' + htcsw_ + '\x22!!');case a_kbily:
            wh$6a = a_f1mvq, _htcw = nk27i4;break;case a_pey95b:
            wh$6a = a_p6a9$, _htcw = nk27i4;break;case a_ek5ly:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}nk27i4++;
  }
}function a_$aj9p(mvxqo1, sh$a, ykb) {
  for (var c8dr_ = mvxqo1['tagName'], aw$chs = null, dcr8_ = mvxqo1['length']; dcr8_--;) {
    var qfv = mvxqo1[dcr8_],
        py5b9e = qfv['qName'],
        m13ovg = qfv['value'],
        wthc;py5b9e = 0x0 < (beily = py5b9e['indexOf'](':')) ? (pe65y = qfv['prefix'] = py5b9e['slice'](0x0, beily), wthc = py5b9e['slice'](beily + 0x1), 'xmlns' === pe65y && wthc) : (pe65y = null, 'xmlns' === (wthc = py5b9e) && ''), qfv['localName'] = wthc, !0x1 !== py5b9e && (null == aw$chs && (aw$chs = {}, a_cd8_tr(ykb, ykb = {})), ykb[py5b9e] = aw$chs[py5b9e] = m13ovg, qfv['uri'] = 'http://www.w3.org/2000/xmlns/', sh$a['startPrefixMapping'](py5b9e, m13ovg));
  }for (dcr8_ = mvxqo1['length']; dcr8_--;) (pe65y = (qfv = mvxqo1[dcr8_])['prefix']) && ('xml' === pe65y && (qfv['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== pe65y && (qfv['uri'] = ykb[pe65y || '']));var beily;wthc = 0x0 < (beily = c8dr_['indexOf'](':')) ? (pe65y = mvxqo1['prefix'] = c8dr_['slice'](0x0, beily), mvxqo1['localName'] = c8dr_['slice'](beily + 0x1)) : (pe65y = null, mvxqo1['localName'] = c8dr_);var _t8d = mvxqo1['uri'] = ykb[pe65y || ''];if (sh$a['startElement'](_t8d, wthc, c8dr_, mvxqo1), !mvxqo1['closed']) return mvxqo1['currentNSMap'] = ykb, mvxqo1['localNSMap'] = aw$chs, !0x0;if (sh$a['endElement'](_t8d, wthc, c8dr_), aw$chs) {
    for (var pe65y in aw$chs) sh$a['endPrefixMapping'](pe65y);
  }
}function a_zq1vxf(h$saj, $pahj, ble4, yep5b9, ebkyl) {
  if (/^(?:script|textarea)$/i['test'](ble4)) {
    var bl2k4i = h$saj['indexOf']('</' + ble4 + '>', $pahj),
        h$saj = h$saj['substring']($pahj + 0x1, bl2k4i);if (/[&<]/['test'](h$saj)) return (/^script$/i['test'](ble4) || (h$saj = h$saj['replace'](/&#?\w+;/g, yep5b9)), ebkyl['characters'](h$saj, 0x0, h$saj['length']), bl2k4i
    );
  }return $pahj + 0x1;
}function a_p96ye($6ahjp, ilk2b, yepb95, ybli) {
  var ov31x = ybli[yepb95];return null == ov31x && ((ov31x = $6ahjp['lastIndexOf']('</' + yepb95 + '>')) < ilk2b && (ov31x = $6ahjp['lastIndexOf']('</' + yepb95)), ybli[yepb95] = ov31x), ov31x < ilk2b;
}function a_cd8_tr(fq1m, nk24i) {
  for (var y6pe9 in fq1m) nk24i[y6pe9] = fq1m[y6pe9];
}function a_c$s_hw(ekl5yb, n02g4, wa$hcs, kl24bi) {
  var $69pja = ekl5yb['charAt'](n02g4 + 0x2);if ('-' === $69pja) return '-' !== ekl5yb['charAt'](n02g4 + 0x3) ? -0x1 : n02g4 < (ylbk = ekl5yb['indexOf']('-->', n02g4 + 0x4)) ? (wa$hcs['comment'](ekl5yb, n02g4 + 0x4, ylbk - n02g4 - 0x4), ylbk + 0x3) : (kl24bi['error']('Unclosed comment'), -0x1);if ('CDATA[' == ekl5yb['substr'](n02g4 + 0x3, 0x6)) {
    var ylbk = ekl5yb['indexOf'](']]>', n02g4 + 0x9);return wa$hcs['startCDATA'](), wa$hcs['characters'](ekl5yb, n02g4 + 0x9, ylbk - n02g4 - 0x9), wa$hcs['endCDATA'](), ylbk + 0x3;
  }$69pja = a_as$jh(ekl5yb, n02g4), kl24bi = $69pja['length'];if (0x1 < kl24bi && /!doctype/i['test']($69pja[0x0][0x0])) return ylbk = $69pja[0x1][0x0], ekl5yb = 0x3 < kl24bi && /^public$/i['test']($69pja[0x2][0x0]) && $69pja[0x3][0x0], n02g4 = 0x4 < kl24bi && $69pja[0x4][0x0], kl24bi = $69pja[kl24bi - 0x1], (wa$hcs['startDTD'](ylbk, ekl5yb && ekl5yb['replace'](/^(['"])(.*?)\1$/, '$2'), n02g4 && n02g4['replace'](/^(['"])(.*?)\1$/, '$2')), wa$hcs['endDTD'](), kl24bi['index'] + kl24bi[0x0]['length']);return -0x1;
}function a_p9a5j6(mx1q, hwajs, m1x3vo) {
  var s8_tc = mx1q['indexOf']('?>', hwajs);if (s8_tc) return hwajs = mx1q['substring'](hwajs, s8_tc)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), hwajs ? (hwajs[0x0]['length'], m1x3vo['processingInstruction'](hwajs[0x1], hwajs[0x2]), s8_tc + 0x2) : -0x1;return -0x1;
}function a_w$jha6() {}function a_eikby(hw$j6, $ch) {
  return hw$j6['__proto__'] = $ch, hw$j6;
}function a_as$jh(om31x, l9bye5) {
  var g7024n,
      fqxm = [],
      j596py = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (j596py['lastIndex'] = l9bye5, j596py['exec'](om31x); g7024n = j596py['exec'](om31x);) if (fqxm['push'](g7024n), g7024n[0x1]) return fqxm;
}var a_mogn0 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    a_g07 = new RegExp('[\\-\\.0-9' + a_mogn0['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    a_n203g = new RegExp('^' + a_mogn0['source'] + a_g07['source'] + '*(?::' + a_mogn0['source'] + a_g07['source'] + '*)?$'),
    a_hc$ws_ = 0x0,
    a_f1mvq = 0x1,
    a_fxvq1m = 0x2,
    a_pey95b = 0x3,
    a_p6a9$ = 0x4,
    a_sacwh$ = 0x5,
    a_kbily = 0x6,
    a_ek5ly = 0x7;a_w_crs['prototype'] = { 'parse': function (wh$ajs, b5elyk, w_s$c) {
    var _dtcr8 = this['domBuilder'];_dtcr8['startDocument'](), a_cd8_tr(b5elyk, b5elyk = {}), a_mgon3(wh$ajs, b5elyk, w_s$c, _dtcr8, this['errorHandler']), _dtcr8['endDocument']();
  } }, a_w$jha6['prototype'] = { 'setTagName': function (j6$9ap) {
    if (!a_n203g['test'](j6$9ap)) throw new Error('invalid tagName:' + j6$9ap);this['tagName'] = j6$9ap;
  }, 'add': function (mn0o3g, wst_r, fxzvq1) {
    if (!a_n203g['test'](mn0o3g)) throw new Error('invalid attribute:' + mn0o3g);this[this['length']++] = { 'qName': mn0o3g, 'value': wst_r, 'offset': fxzvq1 };
  }, 'length': 0x0, 'getLocalName': function (ap$j9) {
    return this[ap$j9]['localName'];
  }, 'getLocator': function (g20n) {
    return this[g20n]['locator'];
  }, 'getQName': function (liyebk) {
    return this[liyebk]['qName'];
  }, 'getURI': function (c_trs) {
    return this[c_trs]['uri'];
  }, 'getValue': function (e4kb) {
    return this[e4kb]['value'];
  } }, a_eikby({}, a_eikby['prototype']) instanceof a_eikby || (a_eikby = function (be5lky, xv1fm) {
  function y56ep() {}for (xv1fm in y56ep['prototype'] = xv1fm, y56ep = new y56ep(), be5lky) y56ep[xv1fm] = be5lky[xv1fm];return y56ep;
}), exports['XMLReader'] = a_w_crs;