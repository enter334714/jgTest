var A = wx.$N;
function n_wqbr9() {}function n_h58tfd(eoy3z4, q49ryz, gc751x, r4o9zy, cskv1) {
  function t7dg5(w6$bq) {
    if (w6$bq > 0xffff) {
      w6$bq -= 0x10000;var o3j = 0xd800 + (w6$bq >> 0xa),
          o4r9zy = 0xdc00 + (0x3ff & w6$bq);return String['fromCharCode'](o3j, o4r9zy);
    }return String['fromCharCode'](w6$bq);
  }function w6bqa(fd5t8h) {
    var lej0n3 = fd5t8h['slice'](0x1, -0x1);return lej0n3 in gc751x ? gc751x[lej0n3] : '#' === lej0n3['charAt'](0x0) ? t7dg5(parseInt(lej0n3['substr'](0x1)['replace']('x', '0x'))) : (cskv1['error']('entity not found:' + fd5t8h), fd5t8h);
  }function vsikp2(r9zy4) {
    if (r9zy4 > _nmuj8) {
      var xg7c1s = eoy3z4['substring'](_nmuj8, r9zy4)['replace'](/&#?\w+;/g, w6bqa);isvx2k && munj_8(_nmuj8), r4o9zy['characters'](xg7c1s, 0x0, r9zy4 - _nmuj8), _nmuj8 = r9zy4;
    }
  }function munj_8(g1t75c, y3o4) {
    for (; g1t75c >= du8f_h && (y3o4 = xgv1['exec'](eoy3z4));) cvx1g = y3o4['index'], du8f_h = cvx1g + y3o4[0x0]['length'], isvx2k['lineNumber']++;isvx2k['columnNumber'] = g1t75c - cvx1g + 0x1;
  }for (var cvx1g = 0x0, du8f_h = 0x0, xgv1 = /.*(?:\r\n?|\n)|.*$/g, isvx2k = r4o9zy['locator'], b6qa$ = [{ 'currentNSMap': q49ryz }], ey3lzo = {}, _nmuj8 = 0x0;;) {
    try {
      var bqa$6w = eoy3z4['indexOf']('<', _nmuj8);if (0x0 > bqa$6w) {
        if (!eoy3z4['substr'](_nmuj8)['match'](/^\s*$/)) {
          var ybr94q = r4o9zy['doc'],
              muf8_ = ybr94q['createTextNode'](eoy3z4['substr'](_nmuj8));ybr94q['appendChild'](muf8_), r4o9zy['currentElement'] = muf8_;
        }return;
      }switch (bqa$6w > _nmuj8 && vsikp2(bqa$6w), eoy3z4['charAt'](bqa$6w + 0x1)) {case '/':
          var $r49qb = eoy3z4['indexOf']('>', bqa$6w + 0x3),
              j3ln0 = eoy3z4['substring'](bqa$6w + 0x2, $r49qb),
              ujmn = b6qa$['pop']();0x0 > $r49qb ? (j3ln0 = eoy3z4['substring'](bqa$6w + 0x2)['replace'](/[\s<].*/, ''), cskv1['error']('end tag name: ' + j3ln0 + ' is not complete:' + ujmn['tagName']), $r49qb = bqa$6w + 0x1 + j3ln0['length']) : j3ln0['match'](/\s</) && (j3ln0 = j3ln0['replace'](/[\s<].*/, ''), cskv1['error']('end tag name: ' + j3ln0 + ' maybe not complete'), $r49qb = bqa$6w + 0x1 + j3ln0['length']);var zryq49 = ujmn['localNSMap'],
              s1vgcx = ujmn['tagName'] == j3ln0,
              qb4r9$ = s1vgcx || ujmn['tagName'] && ujmn['tagName']['toLowerCase']() == j3ln0['toLowerCase']();if (qb4r9$) {
            if (r4o9zy['endElement'](ujmn['uri'], ujmn['localName'], j3ln0), zryq49) {
              for (var b$9qr4 in zryq49) r4o9zy['endPrefixMapping'](b$9qr4);
            }s1vgcx || cskv1['fatalError']('end tag name: ' + j3ln0 + ' is not match the current start tagName:' + ujmn['tagName']);
          } else b6qa$['push'](ujmn);$r49qb++;break;case '?':
          isvx2k && munj_8(bqa$6w), $r49qb = n__8unmh(eoy3z4, bqa$6w, r4o9zy);break;case '!':
          isvx2k && munj_8(bqa$6w), $r49qb = n_gt15c7(eoy3z4, bqa$6w, r4o9zy, cskv1);break;default:
          isvx2k && munj_8(bqa$6w);var z3lyeo = new n_bwrq9$(),
              ory43z = b6qa$[b6qa$['length'] - 0x1]['currentNSMap'],
              $r49qb = n_cgv1sx(eoy3z4, bqa$6w, z3lyeo, ory43z, w6bqa, cskv1),
              r4b = z3lyeo['length'];if (!z3lyeo['closed'] && n_j03(eoy3z4, $r49qb, z3lyeo['tagName'], ey3lzo) && (z3lyeo['closed'] = !0x0, gc751x['nbsp'] || cskv1['warning']('unclosed xml attribute')), isvx2k && r4b) {
            for (var ojl03 = n_oyrz49(isvx2k, {}), tc17g5 = 0x0; r4b > tc17g5; tc17g5++) {
              var f75d = z3lyeo[tc17g5];munj_8(f75d['offset']), f75d['locator'] = n_oyrz49(isvx2k, {});
            }r4o9zy['locator'] = ojl03, n_roy34z(z3lyeo, r4o9zy, ory43z) && b6qa$['push'](z3lyeo), r4o9zy['locator'] = isvx2k;
          } else n_roy34z(z3lyeo, r4o9zy, ory43z) && b6qa$['push'](z3lyeo);'http://www.w3.org/1999/xhtml' !== z3lyeo['uri'] || z3lyeo['closed'] ? $r49qb++ : $r49qb = n_oy4ez(eoy3z4, $r49qb, z3lyeo['tagName'], w6bqa, r4o9zy);}
    } catch (oy3ze4) {
      cskv1['error']('element parse error: ' + oy3ze4), $r49qb = -0x1;
    }$r49qb > _nmuj8 ? _nmuj8 = $r49qb : vsikp2(Math['max'](bqa$6w, _nmuj8) + 0x1);
  }
}function n_oyrz49(jln03e, q4rb9) {
  return q4rb9['lineNumber'] = jln03e['lineNumber'], q4rb9['columnNumber'] = jln03e['columnNumber'], q4rb9;
}function n_cgv1sx(s2vpi, ejlm, _0nujm, aw6b$, kv2i, kc1xvs) {
  for (var l0j3o, f8u_hd, x2ksiv = ++ejlm, rq94z = n_xcsi;;) {
    var n_u0mj = s2vpi['charAt'](x2ksiv);switch (n_u0mj) {case '=':
        if (rq94z === n_ej3ol0) l0j3o = s2vpi['slice'](ejlm, x2ksiv), rq94z = n_kxisv2;else {
          if (rq94z !== n_d5ft8h) throw new Error('attribute equal must after attrName');rq94z = n_kxisv2;
        }break;case '\x27':case '\x22':
        if (rq94z === n_kxisv2 || rq94z === n_ej3ol0) {
          if (rq94z === n_ej3ol0 && (kc1xvs['warning']('attribute value must after "="'), l0j3o = s2vpi['slice'](ejlm, x2ksiv)), ejlm = x2ksiv + 0x1, x2ksiv = s2vpi['indexOf'](n_u0mj, ejlm), !(x2ksiv > 0x0)) throw new Error('attribute value no end \'' + n_u0mj + '\' match');f8u_hd = s2vpi['slice'](ejlm, x2ksiv)['replace'](/&#?\w+;/g, kv2i), _0nujm['add'](l0j3o, f8u_hd, ejlm - 0x1), rq94z = n_ikxsv;
        } else {
          if (rq94z != n_byqr4) throw new Error('attribute value must after "="');f8u_hd = s2vpi['slice'](ejlm, x2ksiv)['replace'](/&#?\w+;/g, kv2i), _0nujm['add'](l0j3o, f8u_hd, ejlm), kc1xvs['warning']('attribute "' + l0j3o + '" missed start quot(' + n_u0mj + ')!!'), ejlm = x2ksiv + 0x1, rq94z = n_ikxsv;
        }break;case '/':
        switch (rq94z) {case n_xcsi:
            _0nujm['setTagName'](s2vpi['slice'](ejlm, x2ksiv));case n_ikxsv:case n_s2vkix:case n_um_8:
            rq94z = n_um_8, _0nujm['closed'] = !0x0;case n_byqr4:case n_ej3ol0:case n_d5ft8h:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return kc1xvs['error']('unexpected end of input'), rq94z == n_xcsi && _0nujm['setTagName'](s2vpi['slice'](ejlm, x2ksiv)), x2ksiv;case '>':
        switch (rq94z) {case n_xcsi:
            _0nujm['setTagName'](s2vpi['slice'](ejlm, x2ksiv));case n_ikxsv:case n_s2vkix:case n_um_8:
            break;case n_byqr4:case n_ej3ol0:
            f8u_hd = s2vpi['slice'](ejlm, x2ksiv), '/' === f8u_hd['slice'](-0x1) && (_0nujm['closed'] = !0x0, f8u_hd = f8u_hd['slice'](0x0, -0x1));case n_d5ft8h:
            rq94z === n_d5ft8h && (f8u_hd = l0j3o), rq94z == n_byqr4 ? (kc1xvs['warning']('attribute "' + f8u_hd + '" missed quot(")!!'), _0nujm['add'](l0j3o, f8u_hd['replace'](/&#?\w+;/g, kv2i), ejlm)) : ('http://www.w3.org/1999/xhtml' === aw6b$[''] && f8u_hd['match'](/^(?:disabled|checked|selected)$/i) || kc1xvs['warning']('attribute "' + f8u_hd + '" missed value!! "' + f8u_hd + '" instead!!'), _0nujm['add'](f8u_hd, f8u_hd, ejlm));break;case n_kxisv2:
            throw new Error('attribute value missed!!');}return x2ksiv;case '\u0080':
        n_u0mj = '\x20';default:
        if ('\x20' >= n_u0mj) switch (rq94z) {case n_xcsi:
            _0nujm['setTagName'](s2vpi['slice'](ejlm, x2ksiv)), rq94z = n_s2vkix;break;case n_ej3ol0:
            l0j3o = s2vpi['slice'](ejlm, x2ksiv), rq94z = n_d5ft8h;break;case n_byqr4:
            var f8u_hd = s2vpi['slice'](ejlm, x2ksiv)['replace'](/&#?\w+;/g, kv2i);kc1xvs['warning']('attribute "' + f8u_hd + '" missed quot(")!!'), _0nujm['add'](l0j3o, f8u_hd, ejlm);case n_ikxsv:
            rq94z = n_s2vkix;} else switch (rq94z) {case n_d5ft8h:
            {
              _0nujm['tagName'];
            }'http://www.w3.org/1999/xhtml' === aw6b$[''] && l0j3o['match'](/^(?:disabled|checked|selected)$/i) || kc1xvs['warning']('attribute "' + l0j3o + '" missed value!! "' + l0j3o + '" instead2!!'), _0nujm['add'](l0j3o, l0j3o, ejlm), ejlm = x2ksiv, rq94z = n_ej3ol0;break;case n_ikxsv:
            kc1xvs['warning']('attribute space is required"' + l0j3o + '\x22!!');case n_s2vkix:
            rq94z = n_ej3ol0, ejlm = x2ksiv;break;case n_kxisv2:
            rq94z = n_byqr4, ejlm = x2ksiv;break;case n_um_8:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}x2ksiv++;
  }
}function n_roy34z(l3j0en, t8_d, z43eo) {
  for (var u0jln = l3j0en['tagName'], c1gt75 = null, cksvxi = l3j0en['length']; cksvxi--;) {
    var _mfh = l3j0en[cksvxi],
        rbq4$9 = _mfh['qName'],
        fu8h_ = _mfh['value'],
        z3lo0 = rbq4$9['indexOf'](':');if (z3lo0 > 0x0) var qw$6b = _mfh['prefix'] = rbq4$9['slice'](0x0, z3lo0),
        sikcx = rbq4$9['slice'](z3lo0 + 0x1),
        ht5f7d = 'xmlns' === qw$6b && sikcx;else sikcx = rbq4$9, qw$6b = null, ht5f7d = 'xmlns' === rbq4$9 && '';_mfh['localName'] = sikcx, ht5f7d !== !0x1 && (null == c1gt75 && (c1gt75 = {}, n_uj_0n(z43eo, z43eo = {})), z43eo[ht5f7d] = c1gt75[ht5f7d] = fu8h_, _mfh['uri'] = 'http://www.w3.org/2000/xmlns/', t8_d['startPrefixMapping'](ht5f7d, fu8h_));
  }for (var cksvxi = l3j0en['length']; cksvxi--;) {
    _mfh = l3j0en[cksvxi];var qw$6b = _mfh['prefix'];qw$6b && ('xml' === qw$6b && (_mfh['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== qw$6b && (_mfh['uri'] = z43eo[qw$6b || '']));
  }var z3lo0 = u0jln['indexOf'](':');z3lo0 > 0x0 ? (qw$6b = l3j0en['prefix'] = u0jln['slice'](0x0, z3lo0), sikcx = l3j0en['localName'] = u0jln['slice'](z3lo0 + 0x1)) : (qw$6b = null, sikcx = l3j0en['localName'] = u0jln);var gc1t7 = l3j0en['uri'] = z43eo[qw$6b || ''];if (t8_d['startElement'](gc1t7, sikcx, u0jln, l3j0en), !l3j0en['closed']) return l3j0en['currentNSMap'] = z43eo, l3j0en['localNSMap'] = c1gt75, !0x0;if (t8_d['endElement'](gc1t7, sikcx, u0jln), c1gt75) {
    for (qw$6b in c1gt75) t8_d['endPrefixMapping'](qw$6b);
  }
}function n_oy4ez(dt5g71, vp2s, yr9qz4, tfh_d8, _h8du) {
  if (/^(?:script|textarea)$/i['test'](yr9qz4)) {
    var m0_ujn = dt5g71['indexOf']('</' + yr9qz4 + '>', vp2s),
        j_n0u = dt5g71['substring'](vp2s + 0x1, m0_ujn);if (/[&<]/['test'](j_n0u)) return (/^script$/i['test'](yr9qz4) ? (_h8du['characters'](j_n0u, 0x0, j_n0u['length']), m0_ujn) : (j_n0u = j_n0u['replace'](/&#?\w+;/g, tfh_d8), _h8du['characters'](j_n0u, 0x0, j_n0u['length']), m0_ujn)
    );
  }return vp2s + 0x1;
}function n_j03(z43eoy, wb9qr$, nuh_, jln03) {
  var o0lje = jln03[nuh_];return null == o0lje && (o0lje = z43eoy['lastIndexOf']('</' + nuh_ + '>'), wb9qr$ > o0lje && (o0lje = z43eoy['lastIndexOf']('</' + nuh_)), jln03[nuh_] = o0lje), wb9qr$ > o0lje;
}function n_uj_0n(d_8fuh, uhf_8) {
  for (var nhum8_ in d_8fuh) uhf_8[nhum8_] = d_8fuh[nhum8_];
}function n_gt15c7(m8uj_n, d5htf, _h8fdu, nm_hu) {
  var cvxg1s = m8uj_n['charAt'](d5htf + 0x2);switch (cvxg1s) {case '-':
      if ('-' === m8uj_n['charAt'](d5htf + 0x3)) {
        var jeo3l = m8uj_n['indexOf']('-->', d5htf + 0x4);return jeo3l > d5htf ? (_h8fdu['comment'](m8uj_n, d5htf + 0x4, jeo3l - d5htf - 0x4), jeo3l + 0x3) : (nm_hu['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == m8uj_n['substr'](d5htf + 0x3, 0x6)) {
        var jeo3l = m8uj_n['indexOf'](']]>', d5htf + 0x9);return _h8fdu['startCDATA'](), _h8fdu['characters'](m8uj_n, d5htf + 0x9, jeo3l - d5htf - 0x9), _h8fdu['endCDATA'](), jeo3l + 0x3;
      }var byq4 = n_qb$4(m8uj_n, d5htf),
          thdf5 = byq4['length'];if (thdf5 > 0x1 && /!doctype/i['test'](byq4[0x0][0x0])) {
        var n0jm = byq4[0x1][0x0],
            r49yzo = thdf5 > 0x3 && /^public$/i['test'](byq4[0x2][0x0]) && byq4[0x3][0x0],
            mn0u = thdf5 > 0x4 && byq4[0x4][0x0],
            f7g5td = byq4[thdf5 - 0x1];return _h8fdu['startDTD'](n0jm, r49yzo && r49yzo['replace'](/^(['"])(.*?)\1$/, '$2'), mn0u && mn0u['replace'](/^(['"])(.*?)\1$/, '$2')), _h8fdu['endDTD'](), f7g5td['index'] + f7g5td[0x0]['length'];
      }}return -0x1;
}function n__8unmh(a$wb6, dtfg, mn_0) {
  var rbqw9 = a$wb6['indexOf']('?>', dtfg);if (rbqw9) {
    var qba6$ = a$wb6['substring'](dtfg, rbqw9)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (qba6$) {
      {
        qba6$[0x0]['length'];
      }return mn_0['processingInstruction'](qba6$[0x1], qba6$[0x2]), rbqw9 + 0x2;
    }return -0x1;
  }return -0x1;
}function n_bwrq9$() {}function n_e0l3zo(t17cg, cxg17s) {
  return t17cg['__proto__'] = cxg17s, t17cg;
}function n_qb$4(nm8uh, n_ju0) {
  var dtg,
      m8_j = [],
      h8_dfu = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (h8_dfu['lastIndex'] = n_ju0, h8_dfu['exec'](nm8uh); dtg = h8_dfu['exec'](nm8uh);) if (m8_j['push'](dtg), dtg[0x1]) return m8_j;
}var n_vkp2is = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    n_fg7d5 = new RegExp('[\\-\\.0-9' + n_vkp2is['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    n_f8_ = new RegExp('^' + n_vkp2is['source'] + n_fg7d5['source'] + '*(?::' + n_vkp2is['source'] + n_fg7d5['source'] + '*)?$'),
    n_xcsi = 0x0,
    n_ej3ol0 = 0x1,
    n_d5ft8h = 0x2,
    n_kxisv2 = 0x3,
    n_byqr4 = 0x4,
    n_ikxsv = 0x5,
    n_s2vkix = 0x6,
    n_um_8 = 0x7;n_wqbr9['prototype'] = { 'parse': function ($bq6, _jm8, bq69) {
    var jm_u = this['domBuilder'];jm_u['startDocument'](), n_uj_0n(_jm8, _jm8 = {}), n_h58tfd($bq6, _jm8, bq69, jm_u, this['errorHandler']), jm_u['endDocument']();
  } }, n_bwrq9$['prototype'] = { 'setTagName': function (j3l0en) {
    if (!n_f8_['test'](j3l0en)) throw new Error('invalid tagName:' + j3l0en);this['tagName'] = j3l0en;
  }, 'add': function (zq, lje, eo43y) {
    if (!n_f8_['test'](zq)) throw new Error('invalid attribute:' + zq);this[this['length']++] = { 'qName': zq, 'value': lje, 'offset': eo43y };
  }, 'length': 0x0, 'getLocalName': function (nh8_u) {
    return this[nh8_u]['localName'];
  }, 'getLocator': function (w$b6a) {
    return this[w$b6a]['locator'];
  }, 'getQName': function (_num0) {
    return this[_num0]['qName'];
  }, 'getURI': function (mnuh8_) {
    return this[mnuh8_]['uri'];
  }, 'getValue': function (m0nlju) {
    return this[m0nlju]['value'];
  } }, n_e0l3zo({}, n_e0l3zo['prototype']) instanceof n_e0l3zo || (n_e0l3zo = function (xscg1v, nuj0_) {
  function e0z3() {}e0z3['prototype'] = nuj0_, e0z3 = new e0z3();for (nuj0_ in xscg1v) e0z3[nuj0_] = xscg1v[nuj0_];return e0z3;
}), exports['XMLReader'] = n_wqbr9;