var D = wx.$b;
function bunij04() {}function bef4$(mt1cpw, vwtpc1, pcwvh1, phrv2_, c1tzmy) {
  function lxq7ko(dsr) {
    if (dsr > 0xffff) {
      dsr -= 0x10000;var ni5j = 0xd800 + (dsr >> 0xa),
          pw2v_ = 0xdc00 + (0x3ff & dsr);return String['fromCharCode'](ni5j, pw2v_);
    }return String['fromCharCode'](dsr);
  }function y0nuzi(y0inj) {
    var q3k7x = y0inj['slice'](0x1, -0x1);return q3k7x in pcwvh1 ? pcwvh1[q3k7x] : '#' === q3k7x['charAt'](0x0) ? lxq7ko(parseInt(q3k7x['substr'](0x1)['replace']('x', '0x'))) : (c1tzmy['error']('entity not found:' + y0inj), y0inj);
  }function iymt(x6lkdo) {
    if (x6lkdo > _9rh2s) {
      var iyz0m = mt1cpw['substring'](_9rh2s, x6lkdo)['replace'](/&#?\w+;/g, y0nuzi);vcpw && n4$ja5(_9rh2s), phrv2_['characters'](iyz0m, 0x0, x6lkdo - _9rh2s), _9rh2s = x6lkdo;
    }
  }function n4$ja5(vr9_2, od96s8) {
    for (; vr9_2 >= vrh_ && (od96s8 = fj5a$['exec'](mt1cpw));) d28r = od96s8['index'], vrh_ = d28r + od96s8[0x0]['length'], vcpw['lineNumber']++;vcpw['columnNumber'] = vr9_2 - d28r + 0x1;
  }for (var d28r = 0x0, vrh_ = 0x0, fj5a$ = /.*(?:\r\n?|\n)|.*$/g, vcpw = phrv2_['locator'], xlq7 = [{ 'currentNSMap': vwtpc1 }], m1tpc = {}, _9rh2s = 0x0;;) {
    try {
      var qx7gkl = mt1cpw['indexOf']('<', _9rh2s);if (0x0 > qx7gkl) {
        if (!mt1cpw['substr'](_9rh2s)['match'](/^\s*$/)) {
          var v_29r = phrv2_['doc'],
              xql7ko = v_29r['createTextNode'](mt1cpw['substr'](_9rh2s));v_29r['appendChild'](xql7ko), phrv2_['currentElement'] = xql7ko;
        }return;
      }switch (qx7gkl > _9rh2s && iymt(qx7gkl), mt1cpw['charAt'](qx7gkl + 0x1)) {case '/':
          var rp2 = mt1cpw['indexOf']('>', qx7gkl + 0x3),
              z1tcm = mt1cpw['substring'](qx7gkl + 0x2, rp2),
              twmcp = xlq7['pop']();0x0 > rp2 ? (z1tcm = mt1cpw['substring'](qx7gkl + 0x2)['replace'](/[\s<].*/, ''), c1tzmy['error']('end tag name: ' + z1tcm + ' is not complete:' + twmcp['tagName']), rp2 = qx7gkl + 0x1 + z1tcm['length']) : z1tcm['match'](/\s</) && (z1tcm = z1tcm['replace'](/[\s<].*/, ''), c1tzmy['error']('end tag name: ' + z1tcm + ' maybe not complete'), rp2 = qx7gkl + 0x1 + z1tcm['length']);var czu = twmcp['localNSMap'],
              ptvc1w = twmcp['tagName'] == z1tcm,
              j5$4n = ptvc1w || twmcp['tagName'] && twmcp['tagName']['toLowerCase']() == z1tcm['toLowerCase']();if (j5$4n) {
            if (phrv2_['endElement'](twmcp['uri'], twmcp['localName'], z1tcm), czu) {
              for (var w1hp in czu) phrv2_['endPrefixMapping'](w1hp);
            }ptvc1w || c1tzmy['fatalError']('end tag name: ' + z1tcm + ' is not match the current start tagName:' + twmcp['tagName']);
          } else xlq7['push'](twmcp);rp2++;break;case '?':
          vcpw && n4$ja5(qx7gkl), rp2 = biny0z(mt1cpw, qx7gkl, phrv2_);break;case '!':
          vcpw && n4$ja5(qx7gkl), rp2 = bunj04(mt1cpw, qx7gkl, phrv2_, c1tzmy);break;default:
          vcpw && n4$ja5(qx7gkl);var ziut = new btyz1mc(),
              k86ld = xlq7[xlq7['length'] - 0x1]['currentNSMap'],
              rp2 = btp1wv(mt1cpw, qx7gkl, ziut, k86ld, y0nuzi, c1tzmy),
              zuiyn0 = ziut['length'];if (!ziut['closed'] && bzmi0yu(mt1cpw, rp2, ziut['tagName'], m1tpc) && (ziut['closed'] = !0x0, pcwvh1['nbsp'] || c1tzmy['warning']('unclosed xml attribute')), vcpw && zuiyn0) {
            for (var yztu = bpmw1ct(vcpw, {}), k3g7qx = 0x0; zuiyn0 > k3g7qx; k3g7qx++) {
              var o8ld6k = ziut[k3g7qx];n4$ja5(o8ld6k['offset']), o8ld6k['locator'] = bpmw1ct(vcpw, {});
            }phrv2_['locator'] = yztu, byzni0u(ziut, phrv2_, k86ld) && xlq7['push'](ziut), phrv2_['locator'] = vcpw;
          } else byzni0u(ziut, phrv2_, k86ld) && xlq7['push'](ziut);'http://www.w3.org/1999/xhtml' !== ziut['uri'] || ziut['closed'] ? rp2++ : rp2 = bqglxk7(mt1cpw, rp2, ziut['tagName'], y0nuzi, phrv2_);}
    } catch (wphcv1) {
      c1tzmy['error']('element parse error: ' + wphcv1), rp2 = -0x1;
    }rp2 > _9rh2s ? _9rh2s = rp2 : iymt(Math['max'](qx7gkl, _9rh2s) + 0x1);
  }
}function bpmw1ct(ztmwc1, ko8l) {
  return ko8l['lineNumber'] = ztmwc1['lineNumber'], ko8l['columnNumber'] = ztmwc1['columnNumber'], ko8l;
}function btp1wv(yumtzi, fae, hv_p2r, h2_sr, v2hr_, q7kolx) {
  for (var hw1_v, g7qlxk, gx7k3 = ++fae, sd69o = b_hpw1v;;) {
    var wmc = yumtzi['charAt'](gx7k3);switch (wmc) {case '=':
        if (sd69o === b_vhwp1) hw1_v = yumtzi['slice'](fae, gx7k3), sd69o = bdk6ol;else {
          if (sd69o !== bk68d) throw new Error('attribute equal must after attrName');sd69o = bdk6ol;
        }break;case '\x27':case '\x22':
        if (sd69o === bdk6ol || sd69o === b_vhwp1) {
          if (sd69o === b_vhwp1 && (q7kolx['warning']('attribute value must after "="'), hw1_v = yumtzi['slice'](fae, gx7k3)), fae = gx7k3 + 0x1, gx7k3 = yumtzi['indexOf'](wmc, fae), !(gx7k3 > 0x0)) throw new Error('attribute value no end \'' + wmc + '\' match');g7qlxk = yumtzi['slice'](fae, gx7k3)['replace'](/&#?\w+;/g, v2hr_), hv_p2r['add'](hw1_v, g7qlxk, fae - 0x1), sd69o = bhvp2_;
        } else {
          if (sd69o != bn$j45) throw new Error('attribute value must after "="');g7qlxk = yumtzi['slice'](fae, gx7k3)['replace'](/&#?\w+;/g, v2hr_), hv_p2r['add'](hw1_v, g7qlxk, fae), q7kolx['warning']('attribute "' + hw1_v + '" missed start quot(' + wmc + ')!!'), fae = gx7k3 + 0x1, sd69o = bhvp2_;
        }break;case '/':
        switch (sd69o) {case b_hpw1v:
            hv_p2r['setTagName'](yumtzi['slice'](fae, gx7k3));case bhvp2_:case bitymzu:case bx3kgq7:
            sd69o = bx3kgq7, hv_p2r['closed'] = !0x0;case bn$j45:case b_vhwp1:case bk68d:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return q7kolx['error']('unexpected end of input'), sd69o == b_hpw1v && hv_p2r['setTagName'](yumtzi['slice'](fae, gx7k3)), gx7k3;case '>':
        switch (sd69o) {case b_hpw1v:
            hv_p2r['setTagName'](yumtzi['slice'](fae, gx7k3));case bhvp2_:case bitymzu:case bx3kgq7:
            break;case bn$j45:case b_vhwp1:
            g7qlxk = yumtzi['slice'](fae, gx7k3), '/' === g7qlxk['slice'](-0x1) && (hv_p2r['closed'] = !0x0, g7qlxk = g7qlxk['slice'](0x0, -0x1));case bk68d:
            sd69o === bk68d && (g7qlxk = hw1_v), sd69o == bn$j45 ? (q7kolx['warning']('attribute "' + g7qlxk + '" missed quot(")!!'), hv_p2r['add'](hw1_v, g7qlxk['replace'](/&#?\w+;/g, v2hr_), fae)) : ('http://www.w3.org/1999/xhtml' === h2_sr[''] && g7qlxk['match'](/^(?:disabled|checked|selected)$/i) || q7kolx['warning']('attribute "' + g7qlxk + '" missed value!! "' + g7qlxk + '" instead!!'), hv_p2r['add'](g7qlxk, g7qlxk, fae));break;case bdk6ol:
            throw new Error('attribute value missed!!');}return gx7k3;case '\u0080':
        wmc = '\x20';default:
        if ('\x20' >= wmc) switch (sd69o) {case b_hpw1v:
            hv_p2r['setTagName'](yumtzi['slice'](fae, gx7k3)), sd69o = bitymzu;break;case b_vhwp1:
            hw1_v = yumtzi['slice'](fae, gx7k3), sd69o = bk68d;break;case bn$j45:
            var g7qlxk = yumtzi['slice'](fae, gx7k3)['replace'](/&#?\w+;/g, v2hr_);q7kolx['warning']('attribute "' + g7qlxk + '" missed quot(")!!'), hv_p2r['add'](hw1_v, g7qlxk, fae);case bhvp2_:
            sd69o = bitymzu;} else switch (sd69o) {case bk68d:
            {
              hv_p2r['tagName'];
            }'http://www.w3.org/1999/xhtml' === h2_sr[''] && hw1_v['match'](/^(?:disabled|checked|selected)$/i) || q7kolx['warning']('attribute "' + hw1_v + '" missed value!! "' + hw1_v + '" instead2!!'), hv_p2r['add'](hw1_v, hw1_v, fae), fae = gx7k3, sd69o = b_vhwp1;break;case bhvp2_:
            q7kolx['warning']('attribute space is required"' + hw1_v + '\x22!!');case bitymzu:
            sd69o = b_vhwp1, fae = gx7k3;break;case bdk6ol:
            sd69o = bn$j45, fae = gx7k3;break;case bx3kgq7:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}gx7k3++;
  }
}function byzni0u($4e5fa, w_1hv, a4$5fe) {
  for (var j0uiny = $4e5fa['tagName'], wpvt = null, whp1vc = $4e5fa['length']; whp1vc--;) {
    var $4j5n0 = $4e5fa[whp1vc],
        hvr_2 = $4j5n0['qName'],
        izun0 = $4j5n0['value'],
        o6s8d = hvr_2['indexOf'](':');if (o6s8d > 0x0) var ea$f4 = $4j5n0['prefix'] = hvr_2['slice'](0x0, o6s8d),
        tp1w = hvr_2['slice'](o6s8d + 0x1),
        p_hw1v = 'xmlns' === ea$f4 && tp1w;else tp1w = hvr_2, ea$f4 = null, p_hw1v = 'xmlns' === hvr_2 && '';$4j5n0['localName'] = tp1w, p_hw1v !== !0x1 && (null == wpvt && (wpvt = {}, biujy0(a4$5fe, a4$5fe = {})), a4$5fe[p_hw1v] = wpvt[p_hw1v] = izun0, $4j5n0['uri'] = 'http://www.w3.org/2000/xmlns/', w_1hv['startPrefixMapping'](p_hw1v, izun0));
  }for (var whp1vc = $4e5fa['length']; whp1vc--;) {
    $4j5n0 = $4e5fa[whp1vc];var ea$f4 = $4j5n0['prefix'];ea$f4 && ('xml' === ea$f4 && ($4j5n0['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== ea$f4 && ($4j5n0['uri'] = a4$5fe[ea$f4 || '']));
  }var o6s8d = j0uiny['indexOf'](':');o6s8d > 0x0 ? (ea$f4 = $4e5fa['prefix'] = j0uiny['slice'](0x0, o6s8d), tp1w = $4e5fa['localName'] = j0uiny['slice'](o6s8d + 0x1)) : (ea$f4 = null, tp1w = $4e5fa['localName'] = j0uiny);var lokq7 = $4e5fa['uri'] = a4$5fe[ea$f4 || ''];if (w_1hv['startElement'](lokq7, tp1w, j0uiny, $4e5fa), !$4e5fa['closed']) return $4e5fa['currentNSMap'] = a4$5fe, $4e5fa['localNSMap'] = wpvt, !0x0;if (w_1hv['endElement'](lokq7, tp1w, j0uiny), wpvt) {
    for (ea$f4 in wpvt) w_1hv['endPrefixMapping'](ea$f4);
  }
}function bqglxk7(miu0y, dkl6x, $n45aj, x73k, h92s) {
  if (/^(?:script|textarea)$/i['test']($n45aj)) {
    var u0iym = miu0y['indexOf']('</' + $n45aj + '>', dkl6x),
        k76x = miu0y['substring'](dkl6x + 0x1, u0iym);if (/[&<]/['test'](k76x)) return (/^script$/i['test']($n45aj) ? (h92s['characters'](k76x, 0x0, k76x['length']), u0iym) : (k76x = k76x['replace'](/&#?\w+;/g, x73k), h92s['characters'](k76x, 0x0, k76x['length']), u0iym)
    );
  }return dkl6x + 0x1;
}function bzmi0yu(umzcty, umtizy, oxdlk6, ji04n) {
  var pt1vwc = ji04n[oxdlk6];return null == pt1vwc && (pt1vwc = umzcty['lastIndexOf']('</' + oxdlk6 + '>'), umtizy > pt1vwc && (pt1vwc = umzcty['lastIndexOf']('</' + oxdlk6)), ji04n[oxdlk6] = pt1vwc), umtizy > pt1vwc;
}function biujy0(wmt1p, p_1vh) {
  for (var ldk6 in wmt1p) p_1vh[ldk6] = wmt1p[ldk6];
}function bunj04(wcpv, h2w, cvwph1, jun40i) {
  var yzui0 = wcpv['charAt'](h2w + 0x2);switch (yzui0) {case '-':
      if ('-' === wcpv['charAt'](h2w + 0x3)) {
        var mtwpc = wcpv['indexOf']('-->', h2w + 0x4);return mtwpc > h2w ? (cvwph1['comment'](wcpv, h2w + 0x4, mtwpc - h2w - 0x4), mtwpc + 0x3) : (jun40i['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == wcpv['substr'](h2w + 0x3, 0x6)) {
        var mtwpc = wcpv['indexOf'](']]>', h2w + 0x9);return cvwph1['startCDATA'](), cvwph1['characters'](wcpv, h2w + 0x9, mtwpc - h2w - 0x9), cvwph1['endCDATA'](), mtwpc + 0x3;
      }var kdo68 = b$a4(wcpv, h2w),
          ymct1 = kdo68['length'];if (ymct1 > 0x1 && /!doctype/i['test'](kdo68[0x0][0x0])) {
        var ds869o = kdo68[0x1][0x0],
            cpw = ymct1 > 0x3 && /^public$/i['test'](kdo68[0x2][0x0]) && kdo68[0x3][0x0],
            pvhc = ymct1 > 0x4 && kdo68[0x4][0x0],
            vp1h_w = kdo68[ymct1 - 0x1];return cvwph1['startDTD'](ds869o, cpw && cpw['replace'](/^(['"])(.*?)\1$/, '$2'), pvhc && pvhc['replace'](/^(['"])(.*?)\1$/, '$2')), cvwph1['endDTD'](), vp1h_w['index'] + vp1h_w[0x0]['length'];
      }}return -0x1;
}function biny0z(_r982s, wpvc1h, umy) {
  var drs829 = _r982s['indexOf']('?>', wpvc1h);if (drs829) {
    var jn$540 = _r982s['substring'](wpvc1h, drs829)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (jn$540) {
      {
        jn$540[0x0]['length'];
      }return umy['processingInstruction'](jn$540[0x1], jn$540[0x2]), drs829 + 0x2;
    }return -0x1;
  }return -0x1;
}function btyz1mc() {}function bae45$f(_h2rvp, lxq7g) {
  return _h2rvp['__proto__'] = lxq7g, _h2rvp;
}function b$a4(mtzcy, klg7xq) {
  var s68rd,
      pt1vw = [],
      lxoqk = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (lxoqk['lastIndex'] = klg7xq, lxoqk['exec'](mtzcy); s68rd = lxoqk['exec'](mtzcy);) if (pt1vw['push'](s68rd), s68rd[0x1]) return pt1vw;
}var bn40j5i = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    bkol8d = new RegExp('[\\-\\.0-9' + bn40j5i['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    bl68dok = new RegExp('^' + bn40j5i['source'] + bkol8d['source'] + '*(?::' + bn40j5i['source'] + bkol8d['source'] + '*)?$'),
    b_hpw1v = 0x0,
    b_vhwp1 = 0x1,
    bk68d = 0x2,
    bdk6ol = 0x3,
    bn$j45 = 0x4,
    bhvp2_ = 0x5,
    bitymzu = 0x6,
    bx3kgq7 = 0x7;bunij04['prototype'] = { 'parse': function (r_vh, jn04i5, tw1z) {
    var dr6s9 = this['domBuilder'];dr6s9['startDocument'](), biujy0(jn04i5, jn04i5 = {}), bef4$(r_vh, jn04i5, tw1z, dr6s9, this['errorHandler']), dr6s9['endDocument']();
  } }, btyz1mc['prototype'] = { 'setTagName': function (j05in4) {
    if (!bl68dok['test'](j05in4)) throw new Error('invalid tagName:' + j05in4);this['tagName'] = j05in4;
  }, 'add': function (x6lko7, p1wvtc, d6s) {
    if (!bl68dok['test'](x6lko7)) throw new Error('invalid attribute:' + x6lko7);this[this['length']++] = { 'qName': x6lko7, 'value': p1wvtc, 'offset': d6s };
  }, 'length': 0x0, 'getLocalName': function (zcyt) {
    return this[zcyt]['localName'];
  }, 'getLocator': function (tzcm1y) {
    return this[tzcm1y]['locator'];
  }, 'getQName': function (z0iun) {
    return this[z0iun]['qName'];
  }, 'getURI': function (g7xl) {
    return this[g7xl]['uri'];
  }, 'getValue': function (mzit) {
    return this[mzit]['value'];
  } }, bae45$f({}, bae45$f['prototype']) instanceof bae45$f || (bae45$f = function (hvr29_, okq) {
  function wv2p_() {}wv2p_['prototype'] = okq, wv2p_ = new wv2p_();for (okq in hvr29_) wv2p_[okq] = hvr29_[okq];return wv2p_;
}), exports['XMLReader'] = bunij04;