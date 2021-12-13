var U = wx.$k;
function K1_ozv1bw() {}function K1_ihe7t6(hs6k, theji, q0n82, vn1wo, oxbvwz) {
  function r35_dp(bvwo1) {
    if (bvwo1 > 0xffff) {
      bvwo1 -= 0x10000;var fg3p = 0xd800 + (bvwo1 >> 0xa),
          ikeh6t = 0xdc00 + (0x3ff & bvwo1);return String['fromCharCode'](fg3p, ikeh6t);
    }return String['fromCharCode'](bvwo1);
  }function xuz$a(j74it) {
    var $rpd_ = j74it['slice'](0x1, -0x1);return $rpd_ in q0n82 ? q0n82[$rpd_] : '#' === $rpd_['charAt'](0x0) ? r35_dp(parseInt($rpd_['substr'](0x1)['replace']('x', '0x'))) : (oxbvwz['error']('entity not found:' + j74it), j74it);
  }function zlbax(mj7ti) {
    if (mj7ti > $pdrl_) {
      var $ladux = hs6k['substring']($pdrl_, mj7ti)['replace'](/&#?\w+;/g, xuz$a);s9682k && ekt6ih($pdrl_), vn1wo['characters']($ladux, 0x0, mj7ti - $pdrl_), $pdrl_ = mj7ti;
    }
  }function ekt6ih(zvox, xzu$a) {
    for (; zvox >= baxz && (xzu$a = f3gc['exec'](hs6k));) v081nq = xzu$a['index'], baxz = v081nq + xzu$a[0x0]['length'], s9682k['lineNumber']++;s9682k['columnNumber'] = zvox - v081nq + 0x1;
  }for (var v081nq = 0x0, baxz = 0x0, f3gc = /.*(?:\r\n?|\n)|.*$/g, s9682k = vn1wo['locator'], s8k26 = [{ 'currentNSMap': theji }], s9h62k = {}, $pdrl_ = 0x0;;) {
    try {
      var $da_u = hs6k['indexOf']('<', $pdrl_);if (0x0 > $da_u) {
        if (!hs6k['substr']($pdrl_)['match'](/^\s*$/)) {
          var _rdp3 = vn1wo['doc'],
              d$rp5 = _rdp3['createTextNode'](hs6k['substr']($pdrl_));_rdp3['appendChild'](d$rp5), vn1wo['currentElement'] = d$rp5;
        }return;
      }switch ($da_u > $pdrl_ && zlbax($da_u), hs6k['charAt']($da_u + 0x1)) {case '/':
          var jemti = hs6k['indexOf']('>', $da_u + 0x3),
              eks96 = hs6k['substring']($da_u + 0x2, jemti),
              q0n829 = s8k26['pop']();0x0 > jemti ? (eks96 = hs6k['substring']($da_u + 0x2)['replace'](/[\s<].*/, ''), oxbvwz['error']('end tag name: ' + eks96 + ' is not complete:' + q0n829['tagName']), jemti = $da_u + 0x1 + eks96['length']) : eks96['match'](/\s</) && (eks96 = eks96['replace'](/[\s<].*/, ''), oxbvwz['error']('end tag name: ' + eks96 + ' maybe not complete'), jemti = $da_u + 0x1 + eks96['length']);var k9ehs = q0n829['localNSMap'],
              aul$xz = q0n829['tagName'] == eks96,
              y53fc = aul$xz || q0n829['tagName'] && q0n829['tagName']['toLowerCase']() == eks96['toLowerCase']();if (y53fc) {
            if (vn1wo['endElement'](q0n829['uri'], q0n829['localName'], eks96), k9ehs) {
              for (var t7ej in k9ehs) vn1wo['endPrefixMapping'](t7ej);
            }aul$xz || oxbvwz['fatalError']('end tag name: ' + eks96 + ' is not match the current start tagName:' + q0n829['tagName']);
          } else s8k26['push'](q0n829);jemti++;break;case '?':
          s9682k && ekt6ih($da_u), jemti = K1_d_p$l(hs6k, $da_u, vn1wo);break;case '!':
          s9682k && ekt6ih($da_u), jemti = K1_pd_r35(hs6k, $da_u, vn1wo, oxbvwz);break;default:
          s9682k && ekt6ih($da_u);var h9ks2 = new K1__l$dau(),
              p$r5 = s8k26[s8k26['length'] - 0x1]['currentNSMap'],
              jemti = K1_qn8120(hs6k, $da_u, h9ks2, p$r5, xuz$a, oxbvwz),
              ek6t = h9ks2['length'];if (!h9ks2['closed'] && K1_vwzbox(hs6k, jemti, h9ks2['tagName'], s9h62k) && (h9ks2['closed'] = !0x0, q0n82['nbsp'] || oxbvwz['warning']('unclosed xml attribute')), s9682k && ek6t) {
            for (var wvb1no = K1_ubaxwz(s9682k, {}), u$x = 0x0; ek6t > u$x; u$x++) {
              var fcpg5 = h9ks2[u$x];ekt6ih(fcpg5['offset']), fcpg5['locator'] = K1_ubaxwz(s9682k, {});
            }vn1wo['locator'] = wvb1no, K1_$lrdp(h9ks2, vn1wo, p$r5) && s8k26['push'](h9ks2), vn1wo['locator'] = s9682k;
          } else K1_$lrdp(h9ks2, vn1wo, p$r5) && s8k26['push'](h9ks2);'http://www.w3.org/1999/xhtml' !== h9ks2['uri'] || h9ks2['closed'] ? jemti++ : jemti = K1_bwv1o(hs6k, jemti, h9ks2['tagName'], xuz$a, vn1wo);}
    } catch (wzvobx) {
      oxbvwz['error']('element parse error: ' + wzvobx), jemti = -0x1;
    }jemti > $pdrl_ ? $pdrl_ = jemti : zlbax(Math['max']($da_u, $pdrl_) + 0x1);
  }
}function K1_ubaxwz(zvwoxb, ozbwa) {
  return ozbwa['lineNumber'] = zvwoxb['lineNumber'], ozbwa['columnNumber'] = zvwoxb['columnNumber'], ozbwa;
}function K1_qn8120(ehsi6, $udl_a, abzwo, s8q92, k9862, aozxwb) {
  for (var la_ud, t4j7mi, uzx$ = ++$udl_a, nov0q = K1_a$xuz;;) {
    var iht6e = ehsi6['charAt'](uzx$);switch (iht6e) {case '=':
        if (nov0q === K1_dp_lr) la_ud = ehsi6['slice']($udl_a, uzx$), nov0q = K1_d5r_3p;else {
          if (nov0q !== K1_mti4j7) throw new Error('attribute equal must after attrName');nov0q = K1_d5r_3p;
        }break;case '\x27':case '\x22':
        if (nov0q === K1_d5r_3p || nov0q === K1_dp_lr) {
          if (nov0q === K1_dp_lr && (aozxwb['warning']('attribute value must after "="'), la_ud = ehsi6['slice']($udl_a, uzx$)), $udl_a = uzx$ + 0x1, uzx$ = ehsi6['indexOf'](iht6e, $udl_a), !(uzx$ > 0x0)) throw new Error('attribute value no end \'' + iht6e + '\' match');t4j7mi = ehsi6['slice']($udl_a, uzx$)['replace'](/&#?\w+;/g, k9862), abzwo['add'](la_ud, t4j7mi, $udl_a - 0x1), nov0q = K1_x$ula;
        } else {
          if (nov0q != K1__d$rlu) throw new Error('attribute value must after "="');t4j7mi = ehsi6['slice']($udl_a, uzx$)['replace'](/&#?\w+;/g, k9862), abzwo['add'](la_ud, t4j7mi, $udl_a), aozxwb['warning']('attribute "' + la_ud + '" missed start quot(' + iht6e + ')!!'), $udl_a = uzx$ + 0x1, nov0q = K1_x$ula;
        }break;case '/':
        switch (nov0q) {case K1_a$xuz:
            abzwo['setTagName'](ehsi6['slice']($udl_a, uzx$));case K1_x$ula:case K1_lad$_u:case K1_sh9e6k:
            nov0q = K1_sh9e6k, abzwo['closed'] = !0x0;case K1__d$rlu:case K1_dp_lr:case K1_mti4j7:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return aozxwb['error']('unexpected end of input'), nov0q == K1_a$xuz && abzwo['setTagName'](ehsi6['slice']($udl_a, uzx$)), uzx$;case '>':
        switch (nov0q) {case K1_a$xuz:
            abzwo['setTagName'](ehsi6['slice']($udl_a, uzx$));case K1_x$ula:case K1_lad$_u:case K1_sh9e6k:
            break;case K1__d$rlu:case K1_dp_lr:
            t4j7mi = ehsi6['slice']($udl_a, uzx$), '/' === t4j7mi['slice'](-0x1) && (abzwo['closed'] = !0x0, t4j7mi = t4j7mi['slice'](0x0, -0x1));case K1_mti4j7:
            nov0q === K1_mti4j7 && (t4j7mi = la_ud), nov0q == K1__d$rlu ? (aozxwb['warning']('attribute "' + t4j7mi + '" missed quot(")!!'), abzwo['add'](la_ud, t4j7mi['replace'](/&#?\w+;/g, k9862), $udl_a)) : ('http://www.w3.org/1999/xhtml' === s8q92[''] && t4j7mi['match'](/^(?:disabled|checked|selected)$/i) || aozxwb['warning']('attribute "' + t4j7mi + '" missed value!! "' + t4j7mi + '" instead!!'), abzwo['add'](t4j7mi, t4j7mi, $udl_a));break;case K1_d5r_3p:
            throw new Error('attribute value missed!!');}return uzx$;case '\u0080':
        iht6e = '\x20';default:
        if ('\x20' >= iht6e) switch (nov0q) {case K1_a$xuz:
            abzwo['setTagName'](ehsi6['slice']($udl_a, uzx$)), nov0q = K1_lad$_u;break;case K1_dp_lr:
            la_ud = ehsi6['slice']($udl_a, uzx$), nov0q = K1_mti4j7;break;case K1__d$rlu:
            var t4j7mi = ehsi6['slice']($udl_a, uzx$)['replace'](/&#?\w+;/g, k9862);aozxwb['warning']('attribute "' + t4j7mi + '" missed quot(")!!'), abzwo['add'](la_ud, t4j7mi, $udl_a);case K1_x$ula:
            nov0q = K1_lad$_u;} else switch (nov0q) {case K1_mti4j7:
            {
              abzwo['tagName'];
            }'http://www.w3.org/1999/xhtml' === s8q92[''] && la_ud['match'](/^(?:disabled|checked|selected)$/i) || aozxwb['warning']('attribute "' + la_ud + '" missed value!! "' + la_ud + '" instead2!!'), abzwo['add'](la_ud, la_ud, $udl_a), $udl_a = uzx$, nov0q = K1_dp_lr;break;case K1_x$ula:
            aozxwb['warning']('attribute space is required"' + la_ud + '\x22!!');case K1_lad$_u:
            nov0q = K1_dp_lr, $udl_a = uzx$;break;case K1_d5r_3p:
            nov0q = K1__d$rlu, $udl_a = uzx$;break;case K1_sh9e6k:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}uzx$++;
  }
}function K1_$lrdp(u$lza, a_$ldu, xzlbau) {
  for (var o1wbnv = u$lza['tagName'], zw1vo = null, $5r = u$lza['length']; $5r--;) {
    var s62k9 = u$lza[$5r],
        wzobx = s62k9['qName'],
        q10n2 = s62k9['value'],
        r35p_d = wzobx['indexOf'](':');if (r35p_d > 0x0) var bxwao = s62k9['prefix'] = wzobx['slice'](0x0, r35p_d),
        uaxbl = wzobx['slice'](r35p_d + 0x1),
        axwub = 'xmlns' === bxwao && uaxbl;else uaxbl = wzobx, bxwao = null, axwub = 'xmlns' === wzobx && '';s62k9['localName'] = uaxbl, axwub !== !0x1 && (null == zw1vo && (zw1vo = {}, K1_mt7jei(xzlbau, xzlbau = {})), xzlbau[axwub] = zw1vo[axwub] = q10n2, s62k9['uri'] = 'http://www.w3.org/2000/xmlns/', a_$ldu['startPrefixMapping'](axwub, q10n2));
  }for (var $5r = u$lza['length']; $5r--;) {
    s62k9 = u$lza[$5r];var bxwao = s62k9['prefix'];bxwao && ('xml' === bxwao && (s62k9['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== bxwao && (s62k9['uri'] = xzlbau[bxwao || '']));
  }var r35p_d = o1wbnv['indexOf'](':');r35p_d > 0x0 ? (bxwao = u$lza['prefix'] = o1wbnv['slice'](0x0, r35p_d), uaxbl = u$lza['localName'] = o1wbnv['slice'](r35p_d + 0x1)) : (bxwao = null, uaxbl = u$lza['localName'] = o1wbnv);var hi6e7 = u$lza['uri'] = xzlbau[bxwao || ''];if (a_$ldu['startElement'](hi6e7, uaxbl, o1wbnv, u$lza), !u$lza['closed']) return u$lza['currentNSMap'] = xzlbau, u$lza['localNSMap'] = zw1vo, !0x0;if (a_$ldu['endElement'](hi6e7, uaxbl, o1wbnv), zw1vo) {
    for (bxwao in zw1vo) a_$ldu['endPrefixMapping'](bxwao);
  }
}function K1_bwv1o(s26kh9, xula$z, xowabz, vn81, vn1o) {
  if (/^(?:script|textarea)$/i['test'](xowabz)) {
    var $d_r5 = s26kh9['indexOf']('</' + xowabz + '>', xula$z),
        tej7im = s26kh9['substring'](xula$z + 0x1, $d_r5);if (/[&<]/['test'](tej7im)) return (/^script$/i['test'](xowabz) ? (vn1o['characters'](tej7im, 0x0, tej7im['length']), $d_r5) : (tej7im = tej7im['replace'](/&#?\w+;/g, vn81), vn1o['characters'](tej7im, 0x0, tej7im['length']), $d_r5)
    );
  }return xula$z + 0x1;
}function K1_vwzbox(gp_3r5, bzo1w, $5_pr, bz) {
  var imj47t = bz[$5_pr];return null == imj47t && (imj47t = gp_3r5['lastIndexOf']('</' + $5_pr + '>'), bzo1w > imj47t && (imj47t = gp_3r5['lastIndexOf']('</' + $5_pr)), bz[$5_pr] = imj47t), bzo1w > imj47t;
}function K1_mt7jei(oawzx, cf3g) {
  for (var r5d$ in oawzx) cf3g[r5d$] = oawzx[r5d$];
}function K1_pd_r35(h6is, iehks6, _3rd, rd_u) {
  var zaow = h6is['charAt'](iehks6 + 0x2);switch (zaow) {case '-':
      if ('-' === h6is['charAt'](iehks6 + 0x3)) {
        var _5drp3 = h6is['indexOf']('-->', iehks6 + 0x4);return _5drp3 > iehks6 ? (_3rd['comment'](h6is, iehks6 + 0x4, _5drp3 - iehks6 - 0x4), _5drp3 + 0x3) : (rd_u['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == h6is['substr'](iehks6 + 0x3, 0x6)) {
        var _5drp3 = h6is['indexOf'](']]>', iehks6 + 0x9);return _3rd['startCDATA'](), _3rd['characters'](h6is, iehks6 + 0x9, _5drp3 - iehks6 - 0x9), _3rd['endCDATA'](), _5drp3 + 0x3;
      }var oq1nwv = K1_vnow1q(h6is, iehks6),
          q2n890 = oq1nwv['length'];if (q2n890 > 0x1 && /!doctype/i['test'](oq1nwv[0x0][0x0])) {
        var ti7mej = oq1nwv[0x1][0x0],
            ek6ht = q2n890 > 0x3 && /^public$/i['test'](oq1nwv[0x2][0x0]) && oq1nwv[0x3][0x0],
            dul_$ = q2n890 > 0x4 && oq1nwv[0x4][0x0],
            xual$ = oq1nwv[q2n890 - 0x1];return _3rd['startDTD'](ti7mej, ek6ht && ek6ht['replace'](/^(['"])(.*?)\1$/, '$2'), dul_$ && dul_$['replace'](/^(['"])(.*?)\1$/, '$2')), _3rd['endDTD'](), xual$['index'] + xual$[0x0]['length'];
      }}return -0x1;
}function K1_d_p$l(j7tmi4, se69, eht7ij) {
  var nwbo1 = j7tmi4['indexOf']('?>', se69);if (nwbo1) {
    var nqo01 = j7tmi4['substring'](se69, nwbo1)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (nqo01) {
      {
        nqo01[0x0]['length'];
      }return eht7ij['processingInstruction'](nqo01[0x1], nqo01[0x2]), nwbo1 + 0x2;
    }return -0x1;
  }return -0x1;
}function K1__l$dau() {}function K1_wzabx(azl$xu, l_pdr) {
  return azl$xu['__proto__'] = l_pdr, azl$xu;
}function K1_vnow1q(n2018, vo0q1n) {
  var r$_dul,
      l_$dru = [],
      shik = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (shik['lastIndex'] = vo0q1n, shik['exec'](n2018); r$_dul = shik['exec'](n2018);) if (l_$dru['push'](r$_dul), r$_dul[0x1]) return l_$dru;
}var K1_uaxz$ = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    K1_udalx = new RegExp('[\\-\\.0-9' + K1_uaxz$['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    K1_bxzuaw = new RegExp('^' + K1_uaxz$['source'] + K1_udalx['source'] + '*(?::' + K1_uaxz$['source'] + K1_udalx['source'] + '*)?$'),
    K1_a$xuz = 0x0,
    K1_dp_lr = 0x1,
    K1_mti4j7 = 0x2,
    K1_d5r_3p = 0x3,
    K1__d$rlu = 0x4,
    K1_x$ula = 0x5,
    K1_lad$_u = 0x6,
    K1_sh9e6k = 0x7;K1_ozv1bw['prototype'] = { 'parse': function (r$dp, gf3cp, hskie6) {
    var zbvxo = this['domBuilder'];zbvxo['startDocument'](), K1_mt7jei(gf3cp, gf3cp = {}), K1_ihe7t6(r$dp, gf3cp, hskie6, zbvxo, this['errorHandler']), zbvxo['endDocument']();
  } }, K1__l$dau['prototype'] = { 'setTagName': function (bawz) {
    if (!K1_bxzuaw['test'](bawz)) throw new Error('invalid tagName:' + bawz);this['tagName'] = bawz;
  }, 'add': function (xzula, l_d$ur, _rg3p5) {
    if (!K1_bxzuaw['test'](xzula)) throw new Error('invalid attribute:' + xzula);this[this['length']++] = { 'qName': xzula, 'value': l_d$ur, 'offset': _rg3p5 };
  }, 'length': 0x0, 'getLocalName': function (p5$_r) {
    return this[p5$_r]['localName'];
  }, 'getLocator': function (b1no) {
    return this[b1no]['locator'];
  }, 'getQName': function ($dlax) {
    return this[$dlax]['qName'];
  }, 'getURI': function (wuaxbz) {
    return this[wuaxbz]['uri'];
  }, 'getValue': function (ozvx) {
    return this[ozvx]['value'];
  } }, K1_wzabx({}, K1_wzabx['prototype']) instanceof K1_wzabx || (K1_wzabx = function (dr_5, _rl$u) {
  function esh69() {}esh69['prototype'] = _rl$u, esh69 = new esh69();for (_rl$u in dr_5) esh69[_rl$u] = dr_5[_rl$u];return esh69;
}), exports['XMLReader'] = K1_ozv1bw;