var A = wx.$N;
function n_yjigfv() {}function n_yrf3g(ip9q0j, f3vyr, b2oaw, $hl_, xldsnz) {
  function f3vyg(yf3vg) {
    if (yf3vg > 0xffff) {
      yf3vg -= 0x10000;var s05pc = 0xd800 + (yf3vg >> 0xa),
          yij = 0xdc00 + (0x3ff & yf3vg);return String['fromCharCode'](s05pc, yij);
    }return String['fromCharCode'](yf3vg);
  }function o3e(h_mkx) {
    var dnszcx = h_mkx['slice'](0x1, -0x1);return dnszcx in b2oaw ? b2oaw[dnszcx] : '#' === dnszcx['charAt'](0x0) ? f3vyg(parseInt(dnszcx['substr'](0x1)['replace']('x', '0x'))) : (xldsnz['error']('entity not found:' + h_mkx), h_mkx);
  }function hzmxl(jvigyf) {
    if (jvigyf > vyfirg) {
      var iqfjg = ip9q0j['substring'](vyfirg, jvigyf)['replace'](/&#?\w+;/g, o3e);yrifgv && ygfv(vyfirg), $hl_['characters'](iqfjg, 0x0, jvigyf - vyfirg), vyfirg = jvigyf;
    }
  }function ygfv(q09jip, vr8eo3) {
    for (; q09jip >= a3oe8 && (vr8eo3 = ndsc['exec'](ip9q0j));) ev8r3g = vr8eo3['index'], a3oe8 = ev8r3g + vr8eo3[0x0]['length'], yrifgv['lineNumber']++;yrifgv['columnNumber'] = q09jip - ev8r3g + 0x1;
  }for (var ev8r3g = 0x0, a3oe8 = 0x0, ndsc = /.*(?:\r\n?|\n)|.*$/g, yrifgv = $hl_['locator'], e3or8v = [{ 'currentNSMap': f3vyr }], kldxmh = {}, vyfirg = 0x0;;) {
    try {
      var re8ao = ip9q0j['indexOf']('<', vyfirg);if (0x0 > re8ao) {
        if (!ip9q0j['substr'](vyfirg)['match'](/^\s*$/)) {
          var p0q9j = $hl_['doc'],
              yfq = p0q9j['createTextNode'](ip9q0j['substr'](vyfirg));p0q9j['appendChild'](yfq), $hl_['currentElement'] = yfq;
        }return;
      }switch (re8ao > vyfirg && hzmxl(re8ao), ip9q0j['charAt'](re8ao + 0x1)) {case '/':
          var _$4u1 = ip9q0j['indexOf']('>', re8ao + 0x3),
              w2e6 = ip9q0j['substring'](re8ao + 0x2, _$4u1),
              oa26w = e3or8v['pop']();0x0 > _$4u1 ? (w2e6 = ip9q0j['substring'](re8ao + 0x2)['replace'](/[\s<].*/, ''), xldsnz['error']('end tag name: ' + w2e6 + ' is not complete:' + oa26w['tagName']), _$4u1 = re8ao + 0x1 + w2e6['length']) : w2e6['match'](/\s</) && (w2e6 = w2e6['replace'](/[\s<].*/, ''), xldsnz['error']('end tag name: ' + w2e6 + ' maybe not complete'), _$4u1 = re8ao + 0x1 + w2e6['length']);var _$uk41 = oa26w['localNSMap'],
              gf3yv = oa26w['tagName'] == w2e6,
              dcxzsn = gf3yv || oa26w['tagName'] && oa26w['tagName']['toLowerCase']() == w2e6['toLowerCase']();if (dcxzsn) {
            if ($hl_['endElement'](oa26w['uri'], oa26w['localName'], w2e6), _$uk41) {
              for (var ijq90p in _$uk41) $hl_['endPrefixMapping'](ijq90p);
            }gf3yv || xldsnz['fatalError']('end tag name: ' + w2e6 + ' is not match the current start tagName:' + oa26w['tagName']);
          } else e3or8v['push'](oa26w);_$4u1++;break;case '?':
          yrifgv && ygfv(re8ao), _$4u1 = n_$m4h_k(ip9q0j, re8ao, $hl_);break;case '!':
          yrifgv && ygfv(re8ao), _$4u1 = n_zndslx(ip9q0j, re8ao, $hl_, xldsnz);break;default:
          yrifgv && ygfv(re8ao);var hmlx_ = new n_z7nc(),
              xsldzn = e3or8v[e3or8v['length'] - 0x1]['currentNSMap'],
              _$4u1 = n_vygr3(ip9q0j, re8ao, hmlx_, xsldzn, o3e, xldsnz),
              owab26 = hmlx_['length'];if (!hmlx_['closed'] && n_voe3r8(ip9q0j, _$4u1, hmlx_['tagName'], kldxmh) && (hmlx_['closed'] = !0x0, b2oaw['nbsp'] || xldsnz['warning']('unclosed xml attribute')), yrifgv && owab26) {
            for (var p9iyj = n_g3rvfy(yrifgv, {}), jgif = 0x0; owab26 > jgif; jgif++) {
              var $_lmh = hmlx_[jgif];ygfv($_lmh['offset']), $_lmh['locator'] = n_g3rvfy(yrifgv, {});
            }$hl_['locator'] = p9iyj, n_a83eor(hmlx_, $hl_, xsldzn) && e3or8v['push'](hmlx_), $hl_['locator'] = yrifgv;
          } else n_a83eor(hmlx_, $hl_, xsldzn) && e3or8v['push'](hmlx_);'http://www.w3.org/1999/xhtml' !== hmlx_['uri'] || hmlx_['closed'] ? _$4u1++ : _$4u1 = n_r3vfyg(ip9q0j, _$4u1, hmlx_['tagName'], o3e, $hl_);}
    } catch (wa6bt) {
      xldsnz['error']('element parse error: ' + wa6bt), _$4u1 = -0x1;
    }_$4u1 > vyfirg ? vyfirg = _$4u1 : hzmxl(Math['max'](re8ao, vyfirg) + 0x1);
  }
}function n_g3rvfy(e6o, iyjgv) {
  return iyjgv['lineNumber'] = e6o['lineNumber'], iyjgv['columnNumber'] = e6o['columnNumber'], iyjgv;
}function n_vygr3(cnsdz7, cdzn7, p95q70, q079p5, xdzsnc, szc5n7) {
  for (var e62o8, j9piyq, gyjfv = ++cdzn7, j9pq = n__4h$k;;) {
    var czs5 = cnsdz7['charAt'](gyjfv);switch (czs5) {case '=':
        if (j9pq === n_qpij90) e62o8 = cnsdz7['slice'](cdzn7, gyjfv), j9pq = n_csp07;else {
          if (j9pq !== n_dznscx) throw new Error('attribute equal must after attrName');j9pq = n_csp07;
        }break;case '\x27':case '\x22':
        if (j9pq === n_csp07 || j9pq === n_qpij90) {
          if (j9pq === n_qpij90 && (szc5n7['warning']('attribute value must after "="'), e62o8 = cnsdz7['slice'](cdzn7, gyjfv)), cdzn7 = gyjfv + 0x1, gyjfv = cnsdz7['indexOf'](czs5, cdzn7), !(gyjfv > 0x0)) throw new Error('attribute value no end \'' + czs5 + '\' match');j9piyq = cnsdz7['slice'](cdzn7, gyjfv)['replace'](/&#?\w+;/g, xdzsnc), p95q70['add'](e62o8, j9piyq, cdzn7 - 0x1), j9pq = n_qi09;
        } else {
          if (j9pq != n_xszdl) throw new Error('attribute value must after "="');j9piyq = cnsdz7['slice'](cdzn7, gyjfv)['replace'](/&#?\w+;/g, xdzsnc), p95q70['add'](e62o8, j9piyq, cdzn7), szc5n7['warning']('attribute "' + e62o8 + '" missed start quot(' + czs5 + ')!!'), cdzn7 = gyjfv + 0x1, j9pq = n_qi09;
        }break;case '/':
        switch (j9pq) {case n__4h$k:
            p95q70['setTagName'](cnsdz7['slice'](cdzn7, gyjfv));case n_qi09:case n_cp057s:case n_mxlz:
            j9pq = n_mxlz, p95q70['closed'] = !0x0;case n_xszdl:case n_qpij90:case n_dznscx:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return szc5n7['error']('unexpected end of input'), j9pq == n__4h$k && p95q70['setTagName'](cnsdz7['slice'](cdzn7, gyjfv)), gyjfv;case '>':
        switch (j9pq) {case n__4h$k:
            p95q70['setTagName'](cnsdz7['slice'](cdzn7, gyjfv));case n_qi09:case n_cp057s:case n_mxlz:
            break;case n_xszdl:case n_qpij90:
            j9piyq = cnsdz7['slice'](cdzn7, gyjfv), '/' === j9piyq['slice'](-0x1) && (p95q70['closed'] = !0x0, j9piyq = j9piyq['slice'](0x0, -0x1));case n_dznscx:
            j9pq === n_dznscx && (j9piyq = e62o8), j9pq == n_xszdl ? (szc5n7['warning']('attribute "' + j9piyq + '" missed quot(")!!'), p95q70['add'](e62o8, j9piyq['replace'](/&#?\w+;/g, xdzsnc), cdzn7)) : ('http://www.w3.org/1999/xhtml' === q079p5[''] && j9piyq['match'](/^(?:disabled|checked|selected)$/i) || szc5n7['warning']('attribute "' + j9piyq + '" missed value!! "' + j9piyq + '" instead!!'), p95q70['add'](j9piyq, j9piyq, cdzn7));break;case n_csp07:
            throw new Error('attribute value missed!!');}return gyjfv;case '\u0080':
        czs5 = '\x20';default:
        if ('\x20' >= czs5) switch (j9pq) {case n__4h$k:
            p95q70['setTagName'](cnsdz7['slice'](cdzn7, gyjfv)), j9pq = n_cp057s;break;case n_qpij90:
            e62o8 = cnsdz7['slice'](cdzn7, gyjfv), j9pq = n_dznscx;break;case n_xszdl:
            var j9piyq = cnsdz7['slice'](cdzn7, gyjfv)['replace'](/&#?\w+;/g, xdzsnc);szc5n7['warning']('attribute "' + j9piyq + '" missed quot(")!!'), p95q70['add'](e62o8, j9piyq, cdzn7);case n_qi09:
            j9pq = n_cp057s;} else switch (j9pq) {case n_dznscx:
            {
              p95q70['tagName'];
            }'http://www.w3.org/1999/xhtml' === q079p5[''] && e62o8['match'](/^(?:disabled|checked|selected)$/i) || szc5n7['warning']('attribute "' + e62o8 + '" missed value!! "' + e62o8 + '" instead2!!'), p95q70['add'](e62o8, e62o8, cdzn7), cdzn7 = gyjfv, j9pq = n_qpij90;break;case n_qi09:
            szc5n7['warning']('attribute space is required"' + e62o8 + '\x22!!');case n_cp057s:
            j9pq = n_qpij90, cdzn7 = gyjfv;break;case n_csp07:
            j9pq = n_xszdl, cdzn7 = gyjfv;break;case n_mxlz:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}gyjfv++;
  }
}function n_a83eor(ndc7s, h$_mk4, $h_k4u) {
  for (var ao8e23 = ndc7s['tagName'], fjyigq = null, vjigy = ndc7s['length']; vjigy--;) {
    var lh_m$k = ndc7s[vjigy],
        h$lk_ = lh_m$k['qName'],
        h4u$k_ = lh_m$k['value'],
        $4ku_1 = h$lk_['indexOf'](':');if ($4ku_1 > 0x0) var sp5 = lh_m$k['prefix'] = h$lk_['slice'](0x0, $4ku_1),
        p9507c = h$lk_['slice']($4ku_1 + 0x1),
        $lm_kh = 'xmlns' === sp5 && p9507c;else p9507c = h$lk_, sp5 = null, $lm_kh = 'xmlns' === h$lk_ && '';lh_m$k['localName'] = p9507c, $lm_kh !== !0x1 && (null == fjyigq && (fjyigq = {}, n_v3ge($h_k4u, $h_k4u = {})), $h_k4u[$lm_kh] = fjyigq[$lm_kh] = h4u$k_, lh_m$k['uri'] = 'http://www.w3.org/2000/xmlns/', h$_mk4['startPrefixMapping']($lm_kh, h4u$k_));
  }for (var vjigy = ndc7s['length']; vjigy--;) {
    lh_m$k = ndc7s[vjigy];var sp5 = lh_m$k['prefix'];sp5 && ('xml' === sp5 && (lh_m$k['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== sp5 && (lh_m$k['uri'] = $h_k4u[sp5 || '']));
  }var $4ku_1 = ao8e23['indexOf'](':');$4ku_1 > 0x0 ? (sp5 = ndc7s['prefix'] = ao8e23['slice'](0x0, $4ku_1), p9507c = ndc7s['localName'] = ao8e23['slice']($4ku_1 + 0x1)) : (sp5 = null, p9507c = ndc7s['localName'] = ao8e23);var fjivy = ndc7s['uri'] = $h_k4u[sp5 || ''];if (h$_mk4['startElement'](fjivy, p9507c, ao8e23, ndc7s), !ndc7s['closed']) return ndc7s['currentNSMap'] = $h_k4u, ndc7s['localNSMap'] = fjyigq, !0x0;if (h$_mk4['endElement'](fjivy, p9507c, ao8e23), fjyigq) {
    for (sp5 in fjyigq) h$_mk4['endPrefixMapping'](sp5);
  }
}function n_r3vfyg(fyvrg3, zdc7s, zlxnsd, _uk1, _$kl) {
  if (/^(?:script|textarea)$/i['test'](zlxnsd)) {
    var gerv38 = fyvrg3['indexOf']('</' + zlxnsd + '>', zdc7s),
        zn57cs = fyvrg3['substring'](zdc7s + 0x1, gerv38);if (/[&<]/['test'](zn57cs)) return (/^script$/i['test'](zlxnsd) ? (_$kl['characters'](zn57cs, 0x0, zn57cs['length']), gerv38) : (zn57cs = zn57cs['replace'](/&#?\w+;/g, _uk1), _$kl['characters'](zn57cs, 0x0, zn57cs['length']), gerv38)
    );
  }return zdc7s + 0x1;
}function n_voe3r8(u4$1_, vyg3r, qyjf9, u$k4_h) {
  var ijq09p = u$k4_h[qyjf9];return null == ijq09p && (ijq09p = u4$1_['lastIndexOf']('</' + qyjf9 + '>'), vyg3r > ijq09p && (ijq09p = u4$1_['lastIndexOf']('</' + qyjf9)), u$k4_h[qyjf9] = ijq09p), vyg3r > ijq09p;
}function n_v3ge(m$k_lh, ds7c) {
  for (var h_kxl in m$k_lh) ds7c[h_kxl] = m$k_lh[h_kxl];
}function n_zndslx(a28e6, jgqyi, gryfi, dhlxkm) {
  var fvyjgi = a28e6['charAt'](jgqyi + 0x2);switch (fvyjgi) {case '-':
      if ('-' === a28e6['charAt'](jgqyi + 0x3)) {
        var fjiygv = a28e6['indexOf']('-->', jgqyi + 0x4);return fjiygv > jgqyi ? (gryfi['comment'](a28e6, jgqyi + 0x4, fjiygv - jgqyi - 0x4), fjiygv + 0x3) : (dhlxkm['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == a28e6['substr'](jgqyi + 0x3, 0x6)) {
        var fjiygv = a28e6['indexOf'](']]>', jgqyi + 0x9);return gryfi['startCDATA'](), gryfi['characters'](a28e6, jgqyi + 0x9, fjiygv - jgqyi - 0x9), gryfi['endCDATA'](), fjiygv + 0x3;
      }var _lhmk = n_qpjiy(a28e6, jgqyi),
          n7dcsz = _lhmk['length'];if (n7dcsz > 0x1 && /!doctype/i['test'](_lhmk[0x0][0x0])) {
        var o3r = _lhmk[0x1][0x0],
            ldnzmx = n7dcsz > 0x3 && /^public$/i['test'](_lhmk[0x2][0x0]) && _lhmk[0x3][0x0],
            fg3rv8 = n7dcsz > 0x4 && _lhmk[0x4][0x0],
            s5nz7 = _lhmk[n7dcsz - 0x1];return gryfi['startDTD'](o3r, ldnzmx && ldnzmx['replace'](/^(['"])(.*?)\1$/, '$2'), fg3rv8 && fg3rv8['replace'](/^(['"])(.*?)\1$/, '$2')), gryfi['endDTD'](), s5nz7['index'] + s5nz7[0x0]['length'];
      }}return -0x1;
}function n_$m4h_k(ewoa6, oaw6e2, mzl) {
  var aw2e6 = ewoa6['indexOf']('?>', oaw6e2);if (aw2e6) {
    var lzhdm = ewoa6['substring'](oaw6e2, aw2e6)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (lzhdm) {
      {
        lzhdm[0x0]['length'];
      }return mzl['processingInstruction'](lzhdm[0x1], lzhdm[0x2]), aw2e6 + 0x2;
    }return -0x1;
  }return -0x1;
}function n_z7nc() {}function n_fv8rg(m_xhl, mk$_l) {
  return m_xhl['__proto__'] = mk$_l, m_xhl;
}function n_qpjiy($h_m4k, figyvj) {
  var j9fyiq,
      xl_k = [],
      _4ku1 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (_4ku1['lastIndex'] = figyvj, _4ku1['exec']($h_m4k); j9fyiq = _4ku1['exec']($h_m4k);) if (xl_k['push'](j9fyiq), j9fyiq[0x1]) return xl_k;
}var n_f9ij = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    n_dhzxm = new RegExp('[\\-\\.0-9' + n_f9ij['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    n_owa2b = new RegExp('^' + n_f9ij['source'] + n_dhzxm['source'] + '*(?::' + n_f9ij['source'] + n_dhzxm['source'] + '*)?$'),
    n__4h$k = 0x0,
    n_qpij90 = 0x1,
    n_dznscx = 0x2,
    n_csp07 = 0x3,
    n_xszdl = 0x4,
    n_qi09 = 0x5,
    n_cp057s = 0x6,
    n_mxlz = 0x7;n_yjigfv['prototype'] = { 'parse': function (gq, e2o8a6, r3yvg) {
    var c7nszd = this['domBuilder'];c7nszd['startDocument'](), n_v3ge(e2o8a6, e2o8a6 = {}), n_yrf3g(gq, e2o8a6, r3yvg, c7nszd, this['errorHandler']), c7nszd['endDocument']();
  } }, n_z7nc['prototype'] = { 'setTagName': function (h_km) {
    if (!n_owa2b['test'](h_km)) throw new Error('invalid tagName:' + h_km);this['tagName'] = h_km;
  }, 'add': function (qji, $4k_hu, n7ds) {
    if (!n_owa2b['test'](qji)) throw new Error('invalid attribute:' + qji);this[this['length']++] = { 'qName': qji, 'value': $4k_hu, 'offset': n7ds };
  }, 'length': 0x0, 'getLocalName': function (eg) {
    return this[eg]['localName'];
  }, 'getLocator': function (yjfgv) {
    return this[yjfgv]['locator'];
  }, 'getQName': function (o3a2) {
    return this[o3a2]['qName'];
  }, 'getURI': function (iq9jpy) {
    return this[iq9jpy]['uri'];
  }, 'getValue': function (e3g8v) {
    return this[e3g8v]['value'];
  } }, n_fv8rg({}, n_fv8rg['prototype']) instanceof n_fv8rg || (n_fv8rg = function (gyijvf, o8e2a6) {
  function xmlhdk() {}xmlhdk['prototype'] = o8e2a6, xmlhdk = new xmlhdk();for (o8e2a6 in gyijvf) xmlhdk[o8e2a6] = gyijvf[o8e2a6];return xmlhdk;
}), exports['XMLReader'] = n_yjigfv;