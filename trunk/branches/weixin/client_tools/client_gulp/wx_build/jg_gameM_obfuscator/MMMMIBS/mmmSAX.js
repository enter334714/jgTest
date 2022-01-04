var Y = wx.$M;
function M_dl$0i() {}function M_ln5hi0(rvdwf, go6cas, a8ec2t, m7_jnh, ji5nm) {
  function $n50(a6oc8g) {
    if (a6oc8g > 0xffff) {
      a6oc8g -= 0x10000;var h0li = 0xd800 + (a6oc8g >> 0xa),
          $wdfbv = 0xdc00 + (0x3ff & a6oc8g);return String['fromCharCode'](h0li, $wdfbv);
    }return String['fromCharCode'](a6oc8g);
  }function d$5il(z2ect8) {
    var mn5ijh = z2ect8['slice'](0x1, -0x1);return mn5ijh in a8ec2t ? a8ec2t[mn5ijh] : '#' === mn5ijh['charAt'](0x0) ? $n50(parseInt(mn5ijh['substr'](0x1)['replace']('x', '0x'))) : (ji5nm['error']('entity not found:' + z2ect8), z2ect8);
  }function h50lni(ga6o4s) {
    if (ga6o4s > wv91fr) {
      var m7_s = rvdwf['substring'](wv91fr, ga6o4s)['replace'](/&#?\w+;/g, d$5il);ecta2 && r9f1vk(wv91fr), m7_jnh['characters'](m7_s, 0x0, ga6o4s - wv91fr), wv91fr = ga6o4s;
    }
  }function r9f1vk(jmn7_h, vfrb) {
    for (; jmn7_h >= rkx19u && (vfrb = kyqxu['exec'](rvdwf));) l50ihn = vfrb['index'], rkx19u = l50ihn + vfrb[0x0]['length'], ecta2['lineNumber']++;ecta2['columnNumber'] = jmn7_h - l50ihn + 0x1;
  }for (var l50ihn = 0x0, rkx19u = 0x0, kyqxu = /.*(?:\r\n?|\n)|.*$/g, ecta2 = m7_jnh['locator'], mj7h_4 = [{ 'currentNSMap': go6cas }], s64oag = {}, wv91fr = 0x0;;) {
    try {
      var j7_mh = rvdwf['indexOf']('<', wv91fr);if (0x0 > j7_mh) {
        if (!rvdwf['substr'](wv91fr)['match'](/^\s*$/)) {
          var n05ilh = m7_jnh['doc'],
              qx3u = n05ilh['createTextNode'](rvdwf['substr'](wv91fr));n05ilh['appendChild'](qx3u), m7_jnh['currentElement'] = qx3u;
        }return;
      }switch (j7_mh > wv91fr && h50lni(j7_mh), rvdwf['charAt'](j7_mh + 0x1)) {case '/':
          var vf9kr = rvdwf['indexOf']('>', j7_mh + 0x3),
              gc6oas = rvdwf['substring'](j7_mh + 0x2, vf9kr),
              mj_s47 = mj7h_4['pop']();0x0 > vf9kr ? (gc6oas = rvdwf['substring'](j7_mh + 0x2)['replace'](/[\s<].*/, ''), ji5nm['error']('end tag name: ' + gc6oas + ' is not complete:' + mj_s47['tagName']), vf9kr = j7_mh + 0x1 + gc6oas['length']) : gc6oas['match'](/\s</) && (gc6oas = gc6oas['replace'](/[\s<].*/, ''), ji5nm['error']('end tag name: ' + gc6oas + ' maybe not complete'), vf9kr = j7_mh + 0x1 + gc6oas['length']);var b$wvd = mj_s47['localNSMap'],
              db0$lw = mj_s47['tagName'] == gc6oas,
              lhi5n = db0$lw || mj_s47['tagName'] && mj_s47['tagName']['toLowerCase']() == gc6oas['toLowerCase']();if (lhi5n) {
            if (m7_jnh['endElement'](mj_s47['uri'], mj_s47['localName'], gc6oas), b$wvd) {
              for (var f$0bwd in b$wvd) m7_jnh['endPrefixMapping'](f$0bwd);
            }db0$lw || ji5nm['fatalError']('end tag name: ' + gc6oas + ' is not match the current start tagName:' + mj_s47['tagName']);
          } else mj7h_4['push'](mj_s47);vf9kr++;break;case '?':
          ecta2 && r9f1vk(j7_mh), vf9kr = M_j7ihmn(rvdwf, j7_mh, m7_jnh);break;case '!':
          ecta2 && r9f1vk(j7_mh), vf9kr = M_kx1yq(rvdwf, j7_mh, m7_jnh, ji5nm);break;default:
          ecta2 && r9f1vk(j7_mh);var cg2a = new M_dl$50(),
              ecg2 = mj7h_4[mj7h_4['length'] - 0x1]['currentNSMap'],
              vf9kr = M_m_hn(rvdwf, j7_mh, cg2a, ecg2, d$5il, ji5nm),
              wbrvdf = cg2a['length'];if (!cg2a['closed'] && M_$w0bl(rvdwf, vf9kr, cg2a['tagName'], s64oag) && (cg2a['closed'] = !0x0, a8ec2t['nbsp'] || ji5nm['warning']('unclosed xml attribute')), ecta2 && wbrvdf) {
            for (var d05$b = M_s46ao(ecta2, {}), d$5lb0 = 0x0; wbrvdf > d$5lb0; d$5lb0++) {
              var h5ln0 = cg2a[d$5lb0];r9f1vk(h5ln0['offset']), h5ln0['locator'] = M_s46ao(ecta2, {});
            }m7_jnh['locator'] = d05$b, M_e8act2(cg2a, m7_jnh, ecg2) && mj7h_4['push'](cg2a), m7_jnh['locator'] = ecta2;
          } else M_e8act2(cg2a, m7_jnh, ecg2) && mj7h_4['push'](cg2a);'http://www.w3.org/1999/xhtml' !== cg2a['uri'] || cg2a['closed'] ? vf9kr++ : vf9kr = M_x1kru9(rvdwf, vf9kr, cg2a['tagName'], d$5il, m7_jnh);}
    } catch (gaos6) {
      ji5nm['error']('element parse error: ' + gaos6), vf9kr = -0x1;
    }vf9kr > wv91fr ? wv91fr = vf9kr : h50lni(Math['max'](j7_mh, wv91fr) + 0x1);
  }
}function M_s46ao(h7_njm, g64s_o) {
  return g64s_o['lineNumber'] = h7_njm['lineNumber'], g64s_o['columnNumber'] = h7_njm['columnNumber'], g64s_o;
}function M_m_hn(i$n50l, x3uyq, bw0fd, csoag, ni5h0, bd0fw$) {
  for (var id0$5, mjni5, $0blw = ++x3uyq, mhn5li = M_$d0bl5;;) {
    var g2 = i$n50l['charAt']($0blw);switch (g2) {case '=':
        if (mhn5li === M_xkyq3) id0$5 = i$n50l['slice'](x3uyq, $0blw), mhn5li = M_e2zt;else {
          if (mhn5li !== M_wbfrd) throw new Error('attribute equal must after attrName');mhn5li = M_e2zt;
        }break;case '\x27':case '\x22':
        if (mhn5li === M_e2zt || mhn5li === M_xkyq3) {
          if (mhn5li === M_xkyq3 && (bd0fw$['warning']('attribute value must after "="'), id0$5 = i$n50l['slice'](x3uyq, $0blw)), x3uyq = $0blw + 0x1, $0blw = i$n50l['indexOf'](g2, x3uyq), !($0blw > 0x0)) throw new Error('attribute value no end \'' + g2 + '\' match');mjni5 = i$n50l['slice'](x3uyq, $0blw)['replace'](/&#?\w+;/g, ni5h0), bw0fd['add'](id0$5, mjni5, x3uyq - 0x1), mhn5li = M_gea8co;
        } else {
          if (mhn5li != M_rv9fb) throw new Error('attribute value must after "="');mjni5 = i$n50l['slice'](x3uyq, $0blw)['replace'](/&#?\w+;/g, ni5h0), bw0fd['add'](id0$5, mjni5, x3uyq), bd0fw$['warning']('attribute "' + id0$5 + '" missed start quot(' + g2 + ')!!'), x3uyq = $0blw + 0x1, mhn5li = M_gea8co;
        }break;case '/':
        switch (mhn5li) {case M_$d0bl5:
            bw0fd['setTagName'](i$n50l['slice'](x3uyq, $0blw));case M_gea8co:case M_bfvwdr:case M_xk19uy:
            mhn5li = M_xk19uy, bw0fd['closed'] = !0x0;case M_rv9fb:case M_xkyq3:case M_wbfrd:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return bd0fw$['error']('unexpected end of input'), mhn5li == M_$d0bl5 && bw0fd['setTagName'](i$n50l['slice'](x3uyq, $0blw)), $0blw;case '>':
        switch (mhn5li) {case M_$d0bl5:
            bw0fd['setTagName'](i$n50l['slice'](x3uyq, $0blw));case M_gea8co:case M_bfvwdr:case M_xk19uy:
            break;case M_rv9fb:case M_xkyq3:
            mjni5 = i$n50l['slice'](x3uyq, $0blw), '/' === mjni5['slice'](-0x1) && (bw0fd['closed'] = !0x0, mjni5 = mjni5['slice'](0x0, -0x1));case M_wbfrd:
            mhn5li === M_wbfrd && (mjni5 = id0$5), mhn5li == M_rv9fb ? (bd0fw$['warning']('attribute "' + mjni5 + '" missed quot(")!!'), bw0fd['add'](id0$5, mjni5['replace'](/&#?\w+;/g, ni5h0), x3uyq)) : ('http://www.w3.org/1999/xhtml' === csoag[''] && mjni5['match'](/^(?:disabled|checked|selected)$/i) || bd0fw$['warning']('attribute "' + mjni5 + '" missed value!! "' + mjni5 + '" instead!!'), bw0fd['add'](mjni5, mjni5, x3uyq));break;case M_e2zt:
            throw new Error('attribute value missed!!');}return $0blw;case '\u0080':
        g2 = '\x20';default:
        if ('\x20' >= g2) switch (mhn5li) {case M_$d0bl5:
            bw0fd['setTagName'](i$n50l['slice'](x3uyq, $0blw)), mhn5li = M_bfvwdr;break;case M_xkyq3:
            id0$5 = i$n50l['slice'](x3uyq, $0blw), mhn5li = M_wbfrd;break;case M_rv9fb:
            var mjni5 = i$n50l['slice'](x3uyq, $0blw)['replace'](/&#?\w+;/g, ni5h0);bd0fw$['warning']('attribute "' + mjni5 + '" missed quot(")!!'), bw0fd['add'](id0$5, mjni5, x3uyq);case M_gea8co:
            mhn5li = M_bfvwdr;} else switch (mhn5li) {case M_wbfrd:
            {
              bw0fd['tagName'];
            }'http://www.w3.org/1999/xhtml' === csoag[''] && id0$5['match'](/^(?:disabled|checked|selected)$/i) || bd0fw$['warning']('attribute "' + id0$5 + '" missed value!! "' + id0$5 + '" instead2!!'), bw0fd['add'](id0$5, id0$5, x3uyq), x3uyq = $0blw, mhn5li = M_xkyq3;break;case M_gea8co:
            bd0fw$['warning']('attribute space is required"' + id0$5 + '\x22!!');case M_bfvwdr:
            mhn5li = M_xkyq3, x3uyq = $0blw;break;case M_e2zt:
            mhn5li = M_rv9fb, x3uyq = $0blw;break;case M_xk19uy:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}$0blw++;
  }
}function M_e8act2(w0bl$, og, kf91) {
  for (var nmj_h = w0bl$['tagName'], zpt28 = null, k9vx = w0bl$['length']; k9vx--;) {
    var gc86 = w0bl$[k9vx],
        jnhm = gc86['qName'],
        ihmj7n = gc86['value'],
        _h7nm = jnhm['indexOf'](':');if (_h7nm > 0x0) var b$wdfv = gc86['prefix'] = jnhm['slice'](0x0, _h7nm),
        _7ms4j = jnhm['slice'](_h7nm + 0x1),
        w$dl0 = 'xmlns' === b$wdfv && _7ms4j;else _7ms4j = jnhm, b$wdfv = null, w$dl0 = 'xmlns' === jnhm && '';gc86['localName'] = _7ms4j, w$dl0 !== !0x1 && (null == zpt28 && (zpt28 = {}, M_eg8c2a(kf91, kf91 = {})), kf91[w$dl0] = zpt28[w$dl0] = ihmj7n, gc86['uri'] = 'http://www.w3.org/2000/xmlns/', og['startPrefixMapping'](w$dl0, ihmj7n));
  }for (var k9vx = w0bl$['length']; k9vx--;) {
    gc86 = w0bl$[k9vx];var b$wdfv = gc86['prefix'];b$wdfv && ('xml' === b$wdfv && (gc86['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== b$wdfv && (gc86['uri'] = kf91[b$wdfv || '']));
  }var _h7nm = nmj_h['indexOf'](':');_h7nm > 0x0 ? (b$wdfv = w0bl$['prefix'] = nmj_h['slice'](0x0, _h7nm), _7ms4j = w0bl$['localName'] = nmj_h['slice'](_h7nm + 0x1)) : (b$wdfv = null, _7ms4j = w0bl$['localName'] = nmj_h);var sjm_74 = w0bl$['uri'] = kf91[b$wdfv || ''];if (og['startElement'](sjm_74, _7ms4j, nmj_h, w0bl$), !w0bl$['closed']) return w0bl$['currentNSMap'] = kf91, w0bl$['localNSMap'] = zpt28, !0x0;if (og['endElement'](sjm_74, _7ms4j, nmj_h), zpt28) {
    for (b$wdfv in zpt28) og['endPrefixMapping'](b$wdfv);
  }
}function M_x1kru9(hl5nmi, r1u, zc2t8e, s67o4, _o4gs6) {
  if (/^(?:script|textarea)$/i['test'](zc2t8e)) {
    var g4osa = hl5nmi['indexOf']('</' + zc2t8e + '>', r1u),
        k3yqu = hl5nmi['substring'](r1u + 0x1, g4osa);if (/[&<]/['test'](k3yqu)) return (/^script$/i['test'](zc2t8e) ? (_o4gs6['characters'](k3yqu, 0x0, k3yqu['length']), g4osa) : (k3yqu = k3yqu['replace'](/&#?\w+;/g, s67o4), _o4gs6['characters'](k3yqu, 0x0, k3yqu['length']), g4osa)
    );
  }return r1u + 0x1;
}function M_$w0bl(f0db$w, g8eaco, ge2ac, o674s_) {
  var gc2ea = o674s_[ge2ac];return null == gc2ea && (gc2ea = f0db$w['lastIndexOf']('</' + ge2ac + '>'), g8eaco > gc2ea && (gc2ea = f0db$w['lastIndexOf']('</' + ge2ac)), o674s_[ge2ac] = gc2ea), g8eaco > gc2ea;
}function M_eg8c2a(v1frw, og8aec) {
  for (var ecz82t in v1frw) og8aec[ecz82t] = v1frw[ecz82t];
}function M_kx1yq(so7, e28pz, hj5mn, _og46) {
  var uqkx = so7['charAt'](e28pz + 0x2);switch (uqkx) {case '-':
      if ('-' === so7['charAt'](e28pz + 0x3)) {
        var goa8ce = so7['indexOf']('-->', e28pz + 0x4);return goa8ce > e28pz ? (hj5mn['comment'](so7, e28pz + 0x4, goa8ce - e28pz - 0x4), goa8ce + 0x3) : (_og46['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == so7['substr'](e28pz + 0x3, 0x6)) {
        var goa8ce = so7['indexOf'](']]>', e28pz + 0x9);return hj5mn['startCDATA'](), hj5mn['characters'](so7, e28pz + 0x9, goa8ce - e28pz - 0x9), hj5mn['endCDATA'](), goa8ce + 0x3;
      }var jh5imn = M_x19yk(so7, e28pz),
          mj_4h7 = jh5imn['length'];if (mj_4h7 > 0x1 && /!doctype/i['test'](jh5imn[0x0][0x0])) {
        var s67j4 = jh5imn[0x1][0x0],
            nml = mj_4h7 > 0x3 && /^public$/i['test'](jh5imn[0x2][0x0]) && jh5imn[0x3][0x0],
            o4as6g = mj_4h7 > 0x4 && jh5imn[0x4][0x0],
            rfwv9 = jh5imn[mj_4h7 - 0x1];return hj5mn['startDTD'](s67j4, nml && nml['replace'](/^(['"])(.*?)\1$/, '$2'), o4as6g && o4as6g['replace'](/^(['"])(.*?)\1$/, '$2')), hj5mn['endDTD'](), rfwv9['index'] + rfwv9[0x0]['length'];
      }}return -0x1;
}function M_j7ihmn($5ni0, wfrdv, hi0n5) {
  var _so746 = $5ni0['indexOf']('?>', wfrdv);if (_so746) {
    var mlin = $5ni0['substring'](wfrdv, _so746)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (mlin) {
      {
        mlin[0x0]['length'];
      }return hi0n5['processingInstruction'](mlin[0x1], mlin[0x2]), _so746 + 0x2;
    }return -0x1;
  }return -0x1;
}function M_dl$50() {}function M_$d05l(rxv9k, wbd$vf) {
  return rxv9k['__proto__'] = wbd$vf, rxv9k;
}function M_x19yk($ln0, nmihj) {
  var m5h,
      fw$db0 = [],
      s7_jm = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (s7_jm['lastIndex'] = nmihj, s7_jm['exec']($ln0); m5h = s7_jm['exec']($ln0);) if (fw$db0['push'](m5h), m5h[0x1]) return fw$db0;
}var M_act82e = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    M_agc8o = new RegExp('[\\-\\.0-9' + M_act82e['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    M_mhnj_ = new RegExp('^' + M_act82e['source'] + M_agc8o['source'] + '*(?::' + M_act82e['source'] + M_agc8o['source'] + '*)?$'),
    M_$d0bl5 = 0x0,
    M_xkyq3 = 0x1,
    M_wbfrd = 0x2,
    M_e2zt = 0x3,
    M_rv9fb = 0x4,
    M_gea8co = 0x5,
    M_bfvwdr = 0x6,
    M_xk19uy = 0x7;M_dl$0i['prototype'] = { 'parse': function (v9f1kr, x1uk9y, hmn_) {
    var wfdv = this['domBuilder'];wfdv['startDocument'](), M_eg8c2a(x1uk9y, x1uk9y = {}), M_ln5hi0(v9f1kr, x1uk9y, hmn_, wfdv, this['errorHandler']), wfdv['endDocument']();
  } }, M_dl$50['prototype'] = { 'setTagName': function (i50n$) {
    if (!M_mhnj_['test'](i50n$)) throw new Error('invalid tagName:' + i50n$);this['tagName'] = i50n$;
  }, 'add': function (krfv19, dlb50$, c8gaeo) {
    if (!M_mhnj_['test'](krfv19)) throw new Error('invalid attribute:' + krfv19);this[this['length']++] = { 'qName': krfv19, 'value': dlb50$, 'offset': c8gaeo };
  }, 'length': 0x0, 'getLocalName': function (o6scga) {
    return this[o6scga]['localName'];
  }, 'getLocator': function (mhj_4) {
    return this[mhj_4]['locator'];
  }, 'getQName': function (lhni) {
    return this[lhni]['qName'];
  }, 'getURI': function (ku19xy) {
    return this[ku19xy]['uri'];
  }, 'getValue': function (eago8) {
    return this[eago8]['value'];
  } }, M_$d05l({}, M_$d05l['prototype']) instanceof M_$d05l || (M_$d05l = function (k91uxy, k1fv9r) {
  function _s4j76() {}_s4j76['prototype'] = k1fv9r, _s4j76 = new _s4j76();for (k1fv9r in k91uxy) _s4j76[k1fv9r] = k91uxy[k1fv9r];return _s4j76;
}), exports['XMLReader'] = M_dl$0i;