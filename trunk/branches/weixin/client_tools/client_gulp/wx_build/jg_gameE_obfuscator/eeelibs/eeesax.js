var b = wx.$e;
function etlxhg$() {}function evy_7(kub69s, i3u, va47m, f4v_z, y_4fvz) {
  function zryhvf(fzy4_) {
    if (fzy4_ > 0xffff) {
      fzy4_ -= 0x10000;var co7map = 0xd800 + (fzy4_ >> 0xa),
          j$gitx = 0xdc00 + (0x3ff & fzy4_);return String['fromCharCode'](co7map, j$gitx);
    }return String['fromCharCode'](fzy4_);
  }function fvy7_4(_7m4c) {
    var niqu = _7m4c['slice'](0x1, -0x1);return niqu in va47m ? va47m[niqu] : '#' === niqu['charAt'](0x0) ? zryhvf(parseInt(niqu['substr'](0x1)['replace']('x', '0x'))) : (y_4fvz['error']('entity not found:' + _7m4c), _7m4c);
  }function w21d85(kd065b) {
    if (kd065b > m74a_) {
      var k6bs9 = kub69s['substring'](m74a_, kd065b)['replace'](/&#?\w+;/g, fvy7_4);lxigt$ && m7_va(m74a_), f4v_z['characters'](k6bs9, 0x0, kd065b - m74a_), m74a_ = kd065b;
    }
  }function m7_va(u9b6s, qksun9) {
    for (; u9b6s >= tzly && (qksun9 = fyhz['exec'](kub69s));) o_c7a = qksun9['index'], tzly = o_c7a + qksun9[0x0]['length'], lxigt$['lineNumber']++;lxigt$['columnNumber'] = u9b6s - o_c7a + 0x1;
  }for (var o_c7a = 0x0, tzly = 0x0, fyhz = /.*(?:\r\n?|\n)|.*$/g, lxigt$ = f4v_z['locator'], ca_o7m = [{ 'currentNSMap': i3u }], yrzf4 = {}, m74a_ = 0x0;;) {
    try {
      var lxgi$t = kub69s['indexOf']('<', m74a_);if (0x0 > lxgi$t) {
        if (!kub69s['substr'](m74a_)['match'](/^\s*$/)) {
          var xrlg = f4v_z['doc'],
              w812 = xrlg['createTextNode'](kub69s['substr'](m74a_));xrlg['appendChild'](w812), f4v_z['currentElement'] = w812;
        }return;
      }switch (lxgi$t > m74a_ && w21d85(lxgi$t), kub69s['charAt'](lxgi$t + 0x1)) {case '/':
          var amc7 = kub69s['indexOf']('>', lxgi$t + 0x3),
              xgil = kub69s['substring'](lxgi$t + 0x2, amc7),
              rzyv4 = ca_o7m['pop']();0x0 > amc7 ? (xgil = kub69s['substring'](lxgi$t + 0x2)['replace'](/[\s<].*/, ''), y_4fvz['error']('end tag name: ' + xgil + ' is not complete:' + rzyv4['tagName']), amc7 = lxgi$t + 0x1 + xgil['length']) : xgil['match'](/\s</) && (xgil = xgil['replace'](/[\s<].*/, ''), y_4fvz['error']('end tag name: ' + xgil + ' maybe not complete'), amc7 = lxgi$t + 0x1 + xgil['length']);var bd586 = rzyv4['localNSMap'],
              trzhgl = rzyv4['tagName'] == xgil,
              jq3x = trzhgl || rzyv4['tagName'] && rzyv4['tagName']['toLowerCase']() == xgil['toLowerCase']();if (jq3x) {
            if (f4v_z['endElement'](rzyv4['uri'], rzyv4['localName'], xgil), bd586) {
              for (var jix$g in bd586) f4v_z['endPrefixMapping'](jix$g);
            }trzhgl || y_4fvz['fatalError']('end tag name: ' + xgil + ' is not match the current start tagName:' + rzyv4['tagName']);
          } else ca_o7m['push'](rzyv4);amc7++;break;case '?':
          lxigt$ && m7_va(lxgi$t), amc7 = ev_yf74(kub69s, lxgi$t, f4v_z);break;case '!':
          lxigt$ && m7_va(lxgi$t), amc7 = enu3jqi(kub69s, lxgi$t, f4v_z, y_4fvz);break;default:
          lxigt$ && m7_va(lxgi$t);var _z4yvf = new eigj$t(),
              g$htl = ca_o7m[ca_o7m['length'] - 0x1]['currentNSMap'],
              amc7 = e_fva4(kub69s, lxgi$t, _z4yvf, g$htl, fvy7_4, y_4fvz),
              kbd50 = _z4yvf['length'];if (!_z4yvf['closed'] && ed8b0(kub69s, amc7, _z4yvf['tagName'], yrzf4) && (_z4yvf['closed'] = !0x0, va47m['nbsp'] || y_4fvz['warning']('unclosed xml attribute')), lxigt$ && kbd50) {
            for (var af_v4 = ev_y7(lxigt$, {}), pom7 = 0x0; kbd50 > pom7; pom7++) {
              var htglxr = _z4yvf[pom7];m7_va(htglxr['offset']), htglxr['locator'] = ev_y7(lxigt$, {});
            }f4v_z['locator'] = af_v4, etxg$(_z4yvf, f4v_z, g$htl) && ca_o7m['push'](_z4yvf), f4v_z['locator'] = lxigt$;
          } else etxg$(_z4yvf, f4v_z, g$htl) && ca_o7m['push'](_z4yvf);'http://www.w3.org/1999/xhtml' !== _z4yvf['uri'] || _z4yvf['closed'] ? amc7++ : amc7 = ezgtr(kub69s, amc7, _z4yvf['tagName'], fvy7_4, f4v_z);}
    } catch (rgxhtl) {
      y_4fvz['error']('element parse error: ' + rgxhtl), amc7 = -0x1;
    }amc7 > m74a_ ? m74a_ = amc7 : w21d85(Math['max'](lxgi$t, m74a_) + 0x1);
  }
}function ev_y7(r4vzy, yzfr) {
  return yzfr['lineNumber'] = r4vzy['lineNumber'], yzfr['columnNumber'] = r4vzy['columnNumber'], yzfr;
}function e_fva4(s9nu6, qn3s9, gjtxi, txli$, tgrxh, zhyrvf) {
  for (var $ilxtg, xltig, dw218 = ++qn3s9, ksub9 = ezvfy4r;;) {
    var lzrhf = s9nu6['charAt'](dw218);switch (lzrhf) {case '=':
        if (ksub9 === ei$x3j) $ilxtg = s9nu6['slice'](qn3s9, dw218), ksub9 = eigtjx$;else {
          if (ksub9 !== ejqn3s) throw new Error('attribute equal must after attrName');ksub9 = eigtjx$;
        }break;case '\x27':case '\x22':
        if (ksub9 === eigtjx$ || ksub9 === ei$x3j) {
          if (ksub9 === ei$x3j && (zhyrvf['warning']('attribute value must after "="'), $ilxtg = s9nu6['slice'](qn3s9, dw218)), qn3s9 = dw218 + 0x1, dw218 = s9nu6['indexOf'](lzrhf, qn3s9), !(dw218 > 0x0)) throw new Error('attribute value no end \'' + lzrhf + '\' match');xltig = s9nu6['slice'](qn3s9, dw218)['replace'](/&#?\w+;/g, tgrxh), gjtxi['add']($ilxtg, xltig, qn3s9 - 0x1), ksub9 = ey_vf4z;
        } else {
          if (ksub9 != erztyh) throw new Error('attribute value must after "="');xltig = s9nu6['slice'](qn3s9, dw218)['replace'](/&#?\w+;/g, tgrxh), gjtxi['add']($ilxtg, xltig, qn3s9), zhyrvf['warning']('attribute "' + $ilxtg + '" missed start quot(' + lzrhf + ')!!'), qn3s9 = dw218 + 0x1, ksub9 = ey_vf4z;
        }break;case '/':
        switch (ksub9) {case ezvfy4r:
            gjtxi['setTagName'](s9nu6['slice'](qn3s9, dw218));case ey_vf4z:case ev4rfy:case eigjt$:
            ksub9 = eigjt$, gjtxi['closed'] = !0x0;case erztyh:case ei$x3j:case ejqn3s:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return zhyrvf['error']('unexpected end of input'), ksub9 == ezvfy4r && gjtxi['setTagName'](s9nu6['slice'](qn3s9, dw218)), dw218;case '>':
        switch (ksub9) {case ezvfy4r:
            gjtxi['setTagName'](s9nu6['slice'](qn3s9, dw218));case ey_vf4z:case ev4rfy:case eigjt$:
            break;case erztyh:case ei$x3j:
            xltig = s9nu6['slice'](qn3s9, dw218), '/' === xltig['slice'](-0x1) && (gjtxi['closed'] = !0x0, xltig = xltig['slice'](0x0, -0x1));case ejqn3s:
            ksub9 === ejqn3s && (xltig = $ilxtg), ksub9 == erztyh ? (zhyrvf['warning']('attribute "' + xltig + '" missed quot(")!!'), gjtxi['add']($ilxtg, xltig['replace'](/&#?\w+;/g, tgrxh), qn3s9)) : ('http://www.w3.org/1999/xhtml' === txli$[''] && xltig['match'](/^(?:disabled|checked|selected)$/i) || zhyrvf['warning']('attribute "' + xltig + '" missed value!! "' + xltig + '" instead!!'), gjtxi['add'](xltig, xltig, qn3s9));break;case eigtjx$:
            throw new Error('attribute value missed!!');}return dw218;case '\u0080':
        lzrhf = '\x20';default:
        if ('\x20' >= lzrhf) switch (ksub9) {case ezvfy4r:
            gjtxi['setTagName'](s9nu6['slice'](qn3s9, dw218)), ksub9 = ev4rfy;break;case ei$x3j:
            $ilxtg = s9nu6['slice'](qn3s9, dw218), ksub9 = ejqn3s;break;case erztyh:
            var xltig = s9nu6['slice'](qn3s9, dw218)['replace'](/&#?\w+;/g, tgrxh);zhyrvf['warning']('attribute "' + xltig + '" missed quot(")!!'), gjtxi['add']($ilxtg, xltig, qn3s9);case ey_vf4z:
            ksub9 = ev4rfy;} else switch (ksub9) {case ejqn3s:
            {
              gjtxi['tagName'];
            }'http://www.w3.org/1999/xhtml' === txli$[''] && $ilxtg['match'](/^(?:disabled|checked|selected)$/i) || zhyrvf['warning']('attribute "' + $ilxtg + '" missed value!! "' + $ilxtg + '" instead2!!'), gjtxi['add']($ilxtg, $ilxtg, qn3s9), qn3s9 = dw218, ksub9 = ei$x3j;break;case ey_vf4z:
            zhyrvf['warning']('attribute space is required"' + $ilxtg + '\x22!!');case ev4rfy:
            ksub9 = ei$x3j, qn3s9 = dw218;break;case eigtjx$:
            ksub9 = erztyh, qn3s9 = dw218;break;case eigjt$:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}dw218++;
  }
}function etxg$(jqiun3, fzv4y_, vy_4f7) {
  for (var cm7o_a = jqiun3['tagName'], zfyhrl = null, tgixl = jqiun3['length']; tgixl--;) {
    var x$itjg = jqiun3[tgixl],
        vzrfy = x$itjg['qName'],
        fvzyhr = x$itjg['value'],
        sn6k = vzrfy['indexOf'](':');if (sn6k > 0x0) var kd5b0 = x$itjg['prefix'] = vzrfy['slice'](0x0, sn6k),
        zvf_ = vzrfy['slice'](sn6k + 0x1),
        _7a4mv = 'xmlns' === kd5b0 && zvf_;else zvf_ = vzrfy, kd5b0 = null, _7a4mv = 'xmlns' === vzrfy && '';x$itjg['localName'] = zvf_, _7a4mv !== !0x1 && (null == zfyhrl && (zfyhrl = {}, eiqn$3(vy_4f7, vy_4f7 = {})), vy_4f7[_7a4mv] = zfyhrl[_7a4mv] = fvzyhr, x$itjg['uri'] = 'http://www.w3.org/2000/xmlns/', fzv4y_['startPrefixMapping'](_7a4mv, fvzyhr));
  }for (var tgixl = jqiun3['length']; tgixl--;) {
    x$itjg = jqiun3[tgixl];var kd5b0 = x$itjg['prefix'];kd5b0 && ('xml' === kd5b0 && (x$itjg['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== kd5b0 && (x$itjg['uri'] = vy_4f7[kd5b0 || '']));
  }var sn6k = cm7o_a['indexOf'](':');sn6k > 0x0 ? (kd5b0 = jqiun3['prefix'] = cm7o_a['slice'](0x0, sn6k), zvf_ = jqiun3['localName'] = cm7o_a['slice'](sn6k + 0x1)) : (kd5b0 = null, zvf_ = jqiun3['localName'] = cm7o_a);var _4yzf = jqiun3['uri'] = vy_4f7[kd5b0 || ''];if (fzv4y_['startElement'](_4yzf, zvf_, cm7o_a, jqiun3), !jqiun3['closed']) return jqiun3['currentNSMap'] = vy_4f7, jqiun3['localNSMap'] = zfyhrl, !0x0;if (fzv4y_['endElement'](_4yzf, zvf_, cm7o_a), zfyhrl) {
    for (kd5b0 in zfyhrl) fzv4y_['endPrefixMapping'](kd5b0);
  }
}function ezgtr(l$hx, n39qsu, lthrzg, lyrhzt, a7moc) {
  if (/^(?:script|textarea)$/i['test'](lthrzg)) {
    var k9sqnu = l$hx['indexOf']('</' + lthrzg + '>', n39qsu),
        ghrlxt = l$hx['substring'](n39qsu + 0x1, k9sqnu);if (/[&<]/['test'](ghrlxt)) return (/^script$/i['test'](lthrzg) ? (a7moc['characters'](ghrlxt, 0x0, ghrlxt['length']), k9sqnu) : (ghrlxt = ghrlxt['replace'](/&#?\w+;/g, lyrhzt), a7moc['characters'](ghrlxt, 0x0, ghrlxt['length']), k9sqnu)
    );
  }return n39qsu + 0x1;
}function ed8b0(o7a_cm, lhrtgz, cemapo, rlhf) {
  var gx3$j = rlhf[cemapo];return null == gx3$j && (gx3$j = o7a_cm['lastIndexOf']('</' + cemapo + '>'), lhrtgz > gx3$j && (gx3$j = o7a_cm['lastIndexOf']('</' + cemapo)), rlhf[cemapo] = gx3$j), lhrtgz > gx3$j;
}function eiqn$3(_c7a4m, rlgzht) {
  for (var _fa4 in _c7a4m) rlgzht[_fa4] = _c7a4m[_fa4];
}function enu3jqi(bsu96k, x3i$qj, vf4z_, z4rvfy) {
  var yzrh = bsu96k['charAt'](x3i$qj + 0x2);switch (yzrh) {case '-':
      if ('-' === bsu96k['charAt'](x3i$qj + 0x3)) {
        var zyfr4 = bsu96k['indexOf']('-->', x3i$qj + 0x4);return zyfr4 > x3i$qj ? (vf4z_['comment'](bsu96k, x3i$qj + 0x4, zyfr4 - x3i$qj - 0x4), zyfr4 + 0x3) : (z4rvfy['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == bsu96k['substr'](x3i$qj + 0x3, 0x6)) {
        var zyfr4 = bsu96k['indexOf'](']]>', x3i$qj + 0x9);return vf4z_['startCDATA'](), vf4z_['characters'](bsu96k, x3i$qj + 0x9, zyfr4 - x3i$qj - 0x9), vf4z_['endCDATA'](), zyfr4 + 0x3;
      }var xhtgrl = evm74(bsu96k, x3i$qj),
          n6k9u = xhtgrl['length'];if (n6k9u > 0x1 && /!doctype/i['test'](xhtgrl[0x0][0x0])) {
        var _f4z = xhtgrl[0x1][0x0],
            gtx$lh = n6k9u > 0x3 && /^public$/i['test'](xhtgrl[0x2][0x0]) && xhtgrl[0x3][0x0],
            zfr = n6k9u > 0x4 && xhtgrl[0x4][0x0],
            hlrtxg = xhtgrl[n6k9u - 0x1];return vf4z_['startDTD'](_f4z, gtx$lh && gtx$lh['replace'](/^(['"])(.*?)\1$/, '$2'), zfr && zfr['replace'](/^(['"])(.*?)\1$/, '$2')), vf4z_['endDTD'](), hlrtxg['index'] + hlrtxg[0x0]['length'];
      }}return -0x1;
}function ev_yf74(sb069k, igx$lt, zhtr) {
  var bdk5 = sb069k['indexOf']('?>', igx$lt);if (bdk5) {
    var jixg = sb069k['substring'](igx$lt, bdk5)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (jixg) {
      {
        jixg[0x0]['length'];
      }return zhtr['processingInstruction'](jixg[0x1], jixg[0x2]), bdk5 + 0x2;
    }return -0x1;
  }return -0x1;
}function eigj$t() {}function ed0b85w(zfrvhy, d18w) {
  return zfrvhy['__proto__'] = d18w, zfrvhy;
}function evm74(_acmo7, cmepao) {
  var _ocma7,
      q3njus = [],
      cmae = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (cmae['lastIndex'] = cmepao, cmae['exec'](_acmo7); _ocma7 = cmae['exec'](_acmo7);) if (q3njus['push'](_ocma7), _ocma7[0x1]) return q3njus;
}var ezlhyf = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    exhrt = new RegExp('[\\-\\.0-9' + ezlhyf['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    eryhfvz = new RegExp('^' + ezlhyf['source'] + exhrt['source'] + '*(?::' + ezlhyf['source'] + exhrt['source'] + '*)?$'),
    ezvfy4r = 0x0,
    ei$x3j = 0x1,
    ejqn3s = 0x2,
    eigtjx$ = 0x3,
    erztyh = 0x4,
    ey_vf4z = 0x5,
    ev4rfy = 0x6,
    eigjt$ = 0x7;etlxhg$['prototype'] = { 'parse': function (v_yf4z, z4yvrf, i$lgtx) {
    var ac7_ = this['domBuilder'];ac7_['startDocument'](), eiqn$3(z4yvrf, z4yvrf = {}), evy_7(v_yf4z, z4yvrf, i$lgtx, ac7_, this['errorHandler']), ac7_['endDocument']();
  } }, eigj$t['prototype'] = { 'setTagName': function (ujni3) {
    if (!eryhfvz['test'](ujni3)) throw new Error('invalid tagName:' + ujni3);this['tagName'] = ujni3;
  }, 'add': function (lyh, j$nqi, zyhlrt) {
    if (!eryhfvz['test'](lyh)) throw new Error('invalid attribute:' + lyh);this[this['length']++] = { 'qName': lyh, 'value': j$nqi, 'offset': zyhlrt };
  }, 'length': 0x0, 'getLocalName': function ($tjgi) {
    return this[$tjgi]['localName'];
  }, 'getLocator': function (sukn69) {
    return this[sukn69]['locator'];
  }, 'getQName': function (b85d0) {
    return this[b85d0]['qName'];
  }, 'getURI': function (_m47av) {
    return this[_m47av]['uri'];
  }, 'getValue': function (uqnks9) {
    return this[uqnks9]['value'];
  } }, ed0b85w({}, ed0b85w['prototype']) instanceof ed0b85w || (ed0b85w = function (lthr, oacepm) {
  function zhvrf() {}zhvrf['prototype'] = oacepm, zhvrf = new zhvrf();for (oacepm in lthr) zhvrf[oacepm] = lthr[oacepm];return zhvrf;
}), exports['XMLReader'] = etlxhg$;