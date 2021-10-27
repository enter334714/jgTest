var Q = wx.$I;
function i_tm6b4() {}function i_gasz(ywag2, q_gyw, _q1h5f, wzag, wyzk_g) {
  function tb0m64(oc9bmi) {
    if (oc9bmi > 0xffff) {
      oc9bmi -= 0x10000;var f_qkw = 0xd800 + (oc9bmi >> 0xa),
          sp238a = 0xdc00 + (0x3ff & oc9bmi);return String['fromCharCode'](f_qkw, sp238a);
    }return String['fromCharCode'](oc9bmi);
  }function eu$60t(y2zasp) {
    var i15vr = y2zasp['slice'](0x1, -0x1);return i15vr in _q1h5f ? _q1h5f[i15vr] : '#' === i15vr['charAt'](0x0) ? tb0m64(parseInt(i15vr['substr'](0x1)['replace']('x', '0x'))) : (wyzk_g['error']('entity not found:' + y2zasp), y2zasp);
  }function c9roix(obctm) {
    if (obctm > v19ix) {
      var nj7l = ywag2['substring'](v19ix, obctm)['replace'](/&#?\w+;/g, eu$60t);r9xc && xric9(v19ix), wzag['characters'](nj7l, 0x0, obctm - v19ix), v19ix = obctm;
    }
  }function xric9(f_qkwh, h1fq5_) {
    for (; f_qkwh >= saz28 && (h1fq5_ = qgy_wk['exec'](ywag2));) irxv = h1fq5_['index'], saz28 = irxv + h1fq5_[0x0]['length'], r9xc['lineNumber']++;r9xc['columnNumber'] = f_qkwh - irxv + 0x1;
  }for (var irxv = 0x0, saz28 = 0x0, qgy_wk = /.*(?:\r\n?|\n)|.*$/g, r9xc = wzag['locator'], zwkgy = [{ 'currentNSMap': q_gyw }], wy_gqk = {}, v19ix = 0x0;;) {
    try {
      var qfv15h = ywag2['indexOf']('<', v19ix);if (0x0 > qfv15h) {
        if (!ywag2['substr'](v19ix)['match'](/^\s*$/)) {
          var ywgkaz = wzag['doc'],
              p8s7 = ywgkaz['createTextNode'](ywag2['substr'](v19ix));ywgkaz['appendChild'](p8s7), wzag['currentElement'] = p8s7;
        }return;
      }switch (qfv15h > v19ix && c9roix(qfv15h), ywag2['charAt'](qfv15h + 0x1)) {case '/':
          var f1hrv = ywag2['indexOf']('>', qfv15h + 0x3),
              w2zy = ywag2['substring'](qfv15h + 0x2, f1hrv),
              p37jl = zwkgy['pop']();0x0 > f1hrv ? (w2zy = ywag2['substring'](qfv15h + 0x2)['replace'](/[\s<].*/, ''), wyzk_g['error']('end tag name: ' + w2zy + ' is not complete:' + p37jl['tagName']), f1hrv = qfv15h + 0x1 + w2zy['length']) : w2zy['match'](/\s</) && (w2zy = w2zy['replace'](/[\s<].*/, ''), wyzk_g['error']('end tag name: ' + w2zy + ' maybe not complete'), f1hrv = qfv15h + 0x1 + w2zy['length']);var $ue6d = p37jl['localNSMap'],
              rfhv15 = p37jl['tagName'] == w2zy,
              a2gzs = rfhv15 || p37jl['tagName'] && p37jl['tagName']['toLowerCase']() == w2zy['toLowerCase']();if (a2gzs) {
            if (wzag['endElement'](p37jl['uri'], p37jl['localName'], w2zy), $ue6d) {
              for (var jp873 in $ue6d) wzag['endPrefixMapping'](jp873);
            }rfhv15 || wyzk_g['fatalError']('end tag name: ' + w2zy + ' is not match the current start tagName:' + p37jl['tagName']);
          } else zwkgy['push'](p37jl);f1hrv++;break;case '?':
          r9xc && xric9(qfv15h), f1hrv = i_qv15hf(ywag2, qfv15h, wzag);break;case '!':
          r9xc && xric9(qfv15h), f1hrv = i_hk_5qf(ywag2, qfv15h, wzag, wyzk_g);break;default:
          r9xc && xric9(qfv15h);var l8s = new i_p3s827(),
              r5vi1 = zwkgy[zwkgy['length'] - 0x1]['currentNSMap'],
              f1hrv = i_hq5k(ywag2, qfv15h, l8s, r5vi1, eu$60t, wyzk_g),
              bt0mo = l8s['length'];if (!l8s['closed'] && i_$60etu(ywag2, f1hrv, l8s['tagName'], wy_gqk) && (l8s['closed'] = !0x0, _q1h5f['nbsp'] || wyzk_g['warning']('unclosed xml attribute')), r9xc && bt0mo) {
            for (var k5fhq = i_ypa2z(r9xc, {}), t60e$ = 0x0; bt0mo > t60e$; t60e$++) {
              var u06mt4 = l8s[t60e$];xric9(u06mt4['offset']), u06mt4['locator'] = i_ypa2z(r9xc, {});
            }wzag['locator'] = k5fhq, i_qfk_5(l8s, wzag, r5vi1) && zwkgy['push'](l8s), wzag['locator'] = r9xc;
          } else i_qfk_5(l8s, wzag, r5vi1) && zwkgy['push'](l8s);'http://www.w3.org/1999/xhtml' !== l8s['uri'] || l8s['closed'] ? f1hrv++ : f1hrv = i_qfvh(ywag2, f1hrv, l8s['tagName'], eu$60t, wzag);}
    } catch (_k5hfq) {
      wyzk_g['error']('element parse error: ' + _k5hfq), f1hrv = -0x1;
    }f1hrv > v19ix ? v19ix = f1hrv : c9roix(Math['max'](qfv15h, v19ix) + 0x1);
  }
}function i_ypa2z(j73lp8, bto40) {
  return bto40['lineNumber'] = j73lp8['lineNumber'], bto40['columnNumber'] = j73lp8['columnNumber'], bto40;
}function i_hq5k(lnj73, ypza2, fq5_k, fk_qhw, vrc9i, obmc) {
  for (var r5x1v, et$6u, hwkqf_ = ++ypza2, cxb = i_tb6m40;;) {
    var o4tcm = lnj73['charAt'](hwkqf_);switch (o4tcm) {case '=':
        if (cxb === i_waygz2) r5x1v = lnj73['slice'](ypza2, hwkqf_), cxb = i_bmi9c;else {
          if (cxb !== i_oxb9) throw new Error('attribute equal must after attrName');cxb = i_bmi9c;
        }break;case '\x27':case '\x22':
        if (cxb === i_bmi9c || cxb === i_waygz2) {
          if (cxb === i_waygz2 && (obmc['warning']('attribute value must after "="'), r5x1v = lnj73['slice'](ypza2, hwkqf_)), ypza2 = hwkqf_ + 0x1, hwkqf_ = lnj73['indexOf'](o4tcm, ypza2), !(hwkqf_ > 0x0)) throw new Error('attribute value no end \'' + o4tcm + '\' match');et$6u = lnj73['slice'](ypza2, hwkqf_)['replace'](/&#?\w+;/g, vrc9i), fq5_k['add'](r5x1v, et$6u, ypza2 - 0x1), cxb = i_v9xir;
        } else {
          if (cxb != i_s28pa3) throw new Error('attribute value must after "="');et$6u = lnj73['slice'](ypza2, hwkqf_)['replace'](/&#?\w+;/g, vrc9i), fq5_k['add'](r5x1v, et$6u, ypza2), obmc['warning']('attribute "' + r5x1v + '" missed start quot(' + o4tcm + ')!!'), ypza2 = hwkqf_ + 0x1, cxb = i_v9xir;
        }break;case '/':
        switch (cxb) {case i_tb6m40:
            fq5_k['setTagName'](lnj73['slice'](ypza2, hwkqf_));case i_v9xir:case i_vfh:case i_kazwy:
            cxb = i_kazwy, fq5_k['closed'] = !0x0;case i_s28pa3:case i_waygz2:case i_oxb9:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return obmc['error']('unexpected end of input'), cxb == i_tb6m40 && fq5_k['setTagName'](lnj73['slice'](ypza2, hwkqf_)), hwkqf_;case '>':
        switch (cxb) {case i_tb6m40:
            fq5_k['setTagName'](lnj73['slice'](ypza2, hwkqf_));case i_v9xir:case i_vfh:case i_kazwy:
            break;case i_s28pa3:case i_waygz2:
            et$6u = lnj73['slice'](ypza2, hwkqf_), '/' === et$6u['slice'](-0x1) && (fq5_k['closed'] = !0x0, et$6u = et$6u['slice'](0x0, -0x1));case i_oxb9:
            cxb === i_oxb9 && (et$6u = r5x1v), cxb == i_s28pa3 ? (obmc['warning']('attribute "' + et$6u + '" missed quot(")!!'), fq5_k['add'](r5x1v, et$6u['replace'](/&#?\w+;/g, vrc9i), ypza2)) : ('http://www.w3.org/1999/xhtml' === fk_qhw[''] && et$6u['match'](/^(?:disabled|checked|selected)$/i) || obmc['warning']('attribute "' + et$6u + '" missed value!! "' + et$6u + '" instead!!'), fq5_k['add'](et$6u, et$6u, ypza2));break;case i_bmi9c:
            throw new Error('attribute value missed!!');}return hwkqf_;case '\u0080':
        o4tcm = '\x20';default:
        if ('\x20' >= o4tcm) switch (cxb) {case i_tb6m40:
            fq5_k['setTagName'](lnj73['slice'](ypza2, hwkqf_)), cxb = i_vfh;break;case i_waygz2:
            r5x1v = lnj73['slice'](ypza2, hwkqf_), cxb = i_oxb9;break;case i_s28pa3:
            var et$6u = lnj73['slice'](ypza2, hwkqf_)['replace'](/&#?\w+;/g, vrc9i);obmc['warning']('attribute "' + et$6u + '" missed quot(")!!'), fq5_k['add'](r5x1v, et$6u, ypza2);case i_v9xir:
            cxb = i_vfh;} else switch (cxb) {case i_oxb9:
            {
              fq5_k['tagName'];
            }'http://www.w3.org/1999/xhtml' === fk_qhw[''] && r5x1v['match'](/^(?:disabled|checked|selected)$/i) || obmc['warning']('attribute "' + r5x1v + '" missed value!! "' + r5x1v + '" instead2!!'), fq5_k['add'](r5x1v, r5x1v, ypza2), ypza2 = hwkqf_, cxb = i_waygz2;break;case i_v9xir:
            obmc['warning']('attribute space is required"' + r5x1v + '\x22!!');case i_vfh:
            cxb = i_waygz2, ypza2 = hwkqf_;break;case i_bmi9c:
            cxb = i_s28pa3, ypza2 = hwkqf_;break;case i_kazwy:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}hwkqf_++;
  }
}function i_qfk_5(sg2ayz, f51qv, fvhq51) {
  for (var t4ombc = sg2ayz['tagName'], zwyg2a = null, q_yw = sg2ayz['length']; q_yw--;) {
    var ib9oxc = sg2ayz[q_yw],
        qwhg_ = ib9oxc['qName'],
        g2wz = ib9oxc['value'],
        cmbt4o = qwhg_['indexOf'](':');if (cmbt4o > 0x0) var e0t = ib9oxc['prefix'] = qwhg_['slice'](0x0, cmbt4o),
        gyzwk_ = qwhg_['slice'](cmbt4o + 0x1),
        wkg_y = 'xmlns' === e0t && gyzwk_;else gyzwk_ = qwhg_, e0t = null, wkg_y = 'xmlns' === qwhg_ && '';ib9oxc['localName'] = gyzwk_, wkg_y !== !0x1 && (null == zwyg2a && (zwyg2a = {}, i_p7s823(fvhq51, fvhq51 = {})), fvhq51[wkg_y] = zwyg2a[wkg_y] = g2wz, ib9oxc['uri'] = 'http://www.w3.org/2000/xmlns/', f51qv['startPrefixMapping'](wkg_y, g2wz));
  }for (var q_yw = sg2ayz['length']; q_yw--;) {
    ib9oxc = sg2ayz[q_yw];var e0t = ib9oxc['prefix'];e0t && ('xml' === e0t && (ib9oxc['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== e0t && (ib9oxc['uri'] = fvhq51[e0t || '']));
  }var cmbt4o = t4ombc['indexOf'](':');cmbt4o > 0x0 ? (e0t = sg2ayz['prefix'] = t4ombc['slice'](0x0, cmbt4o), gyzwk_ = sg2ayz['localName'] = t4ombc['slice'](cmbt4o + 0x1)) : (e0t = null, gyzwk_ = sg2ayz['localName'] = t4ombc);var a2wyg = sg2ayz['uri'] = fvhq51[e0t || ''];if (f51qv['startElement'](a2wyg, gyzwk_, t4ombc, sg2ayz), !sg2ayz['closed']) return sg2ayz['currentNSMap'] = fvhq51, sg2ayz['localNSMap'] = zwyg2a, !0x0;if (f51qv['endElement'](a2wyg, gyzwk_, t4ombc), zwyg2a) {
    for (e0t in zwyg2a) f51qv['endPrefixMapping'](e0t);
  }
}function i_qfvh(h_kwgq, h1rv5f, cboi, $6ue0t, slp3) {
  if (/^(?:script|textarea)$/i['test'](cboi)) {
    var m9io = h_kwgq['indexOf']('</' + cboi + '>', h1rv5f),
        qgky = h_kwgq['substring'](h1rv5f + 0x1, m9io);if (/[&<]/['test'](qgky)) return (/^script$/i['test'](cboi) ? (slp3['characters'](qgky, 0x0, qgky['length']), m9io) : (qgky = qgky['replace'](/&#?\w+;/g, $6ue0t), slp3['characters'](qgky, 0x0, qgky['length']), m9io)
    );
  }return h1rv5f + 0x1;
}function i_$60etu(vhr5f1, vhf1r, vr1ix9, te06) {
  var zag2yw = te06[vr1ix9];return null == zag2yw && (zag2yw = vhr5f1['lastIndexOf']('</' + vr1ix9 + '>'), vhf1r > zag2yw && (zag2yw = vhr5f1['lastIndexOf']('</' + vr1ix9)), te06[vr1ix9] = zag2yw), vhf1r > zag2yw;
}function i_p7s823(o9cxir, aps28) {
  for (var lp73j in o9cxir) aps28[lp73j] = o9cxir[lp73j];
}function i_hk_5qf(p378s, $0d6eu, ysaz, i9xrv1) {
  var irv9x = p378s['charAt']($0d6eu + 0x2);switch (irv9x) {case '-':
      if ('-' === p378s['charAt']($0d6eu + 0x3)) {
        var jn73 = p378s['indexOf']('-->', $0d6eu + 0x4);return jn73 > $0d6eu ? (ysaz['comment'](p378s, $0d6eu + 0x4, jn73 - $0d6eu - 0x4), jn73 + 0x3) : (i9xrv1['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == p378s['substr']($0d6eu + 0x3, 0x6)) {
        var jn73 = p378s['indexOf'](']]>', $0d6eu + 0x9);return ysaz['startCDATA'](), ysaz['characters'](p378s, $0d6eu + 0x9, jn73 - $0d6eu - 0x9), ysaz['endCDATA'](), jn73 + 0x3;
      }var pl3s7 = i_p382as(p378s, $0d6eu),
          um40 = pl3s7['length'];if (um40 > 0x1 && /!doctype/i['test'](pl3s7[0x0][0x0])) {
        var s7pl3 = pl3s7[0x1][0x0],
            whg_ = um40 > 0x3 && /^public$/i['test'](pl3s7[0x2][0x0]) && pl3s7[0x3][0x0],
            ivr5 = um40 > 0x4 && pl3s7[0x4][0x0],
            pza2s8 = pl3s7[um40 - 0x1];return ysaz['startDTD'](s7pl3, whg_ && whg_['replace'](/^(['"])(.*?)\1$/, '$2'), ivr5 && ivr5['replace'](/^(['"])(.*?)\1$/, '$2')), ysaz['endDTD'](), pza2s8['index'] + pza2s8[0x0]['length'];
      }}return -0x1;
}function i_qv15hf(xocbi, xiv5r1, yqg_w) {
  var h_fw = xocbi['indexOf']('?>', xiv5r1);if (h_fw) {
    var mcb4 = xocbi['substring'](xiv5r1, h_fw)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (mcb4) {
      {
        mcb4[0x0]['length'];
      }return yqg_w['processingInstruction'](mcb4[0x1], mcb4[0x2]), h_fw + 0x2;
    }return -0x1;
  }return -0x1;
}function i_p3s827() {}function i_t0eu$6(mo4bc9, iroxc9) {
  return mo4bc9['__proto__'] = iroxc9, mo4bc9;
}function i_p382as(vrfx, s3p8a) {
  var vh1rf5,
      qk_whf = [],
      cob4m = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (cob4m['lastIndex'] = s3p8a, cob4m['exec'](vrfx); vh1rf5 = cob4m['exec'](vrfx);) if (qk_whf['push'](vh1rf5), vh1rf5[0x1]) return qk_whf;
}var i_f5_k = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    i_vrx91i = new RegExp('[\\-\\.0-9' + i_f5_k['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    i_u6t4e = new RegExp('^' + i_f5_k['source'] + i_vrx91i['source'] + '*(?::' + i_f5_k['source'] + i_vrx91i['source'] + '*)?$'),
    i_tb6m40 = 0x0,
    i_waygz2 = 0x1,
    i_oxb9 = 0x2,
    i_bmi9c = 0x3,
    i_s28pa3 = 0x4,
    i_v9xir = 0x5,
    i_vfh = 0x6,
    i_kazwy = 0x7;i_tm6b4['prototype'] = { 'parse': function (m6t4u0, wfq_hk, zwy_) {
    var wqkh = this['domBuilder'];wqkh['startDocument'](), i_p7s823(wfq_hk, wfq_hk = {}), i_gasz(m6t4u0, wfq_hk, zwy_, wqkh, this['errorHandler']), wqkh['endDocument']();
  } }, i_p3s827['prototype'] = { 'setTagName': function (eu64) {
    if (!i_u6t4e['test'](eu64)) throw new Error('invalid tagName:' + eu64);this['tagName'] = eu64;
  }, 'add': function (xbic9, rxi19v, vr1x) {
    if (!i_u6t4e['test'](xbic9)) throw new Error('invalid attribute:' + xbic9);this[this['length']++] = { 'qName': xbic9, 'value': rxi19v, 'offset': vr1x };
  }, 'length': 0x0, 'getLocalName': function (c4bt) {
    return this[c4bt]['localName'];
  }, 'getLocator': function (gy2wa) {
    return this[gy2wa]['locator'];
  }, 'getQName': function ($t6e0u) {
    return this[$t6e0u]['qName'];
  }, 'getURI': function (ri19x) {
    return this[ri19x]['uri'];
  }, 'getValue': function (i1vrx5) {
    return this[i1vrx5]['value'];
  } }, i_t0eu$6({}, i_t0eu$6['prototype']) instanceof i_t0eu$6 || (i_t0eu$6 = function ($0d, omi9c) {
  function m94obc() {}m94obc['prototype'] = omi9c, m94obc = new m94obc();for (omi9c in $0d) m94obc[omi9c] = $0d[omi9c];return m94obc;
}), exports['XMLReader'] = i_tm6b4;