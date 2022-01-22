var U = wx.$k;
function K1_lxba() {}function K1_q1w(hij7et, zvxbw, qo1v, d_rul$, vzxwob) {
  function _$rlp(r$p_5) {
    if (r$p_5 > 0xffff) {
      r$p_5 -= 0x10000;var xa$zu = 0xd800 + (r$p_5 >> 0xa),
          p5rfg3 = 0xdc00 + (0x3ff & r$p_5);return String['fromCharCode'](xa$zu, p5rfg3);
    }return String['fromCharCode'](r$p_5);
  }function zawbxu(_5grp) {
    var s029q8 = _5grp['slice'](0x1, -0x1);return s029q8 in qo1v ? qo1v[s029q8] : '#' === s029q8['charAt'](0x0) ? _$rlp(parseInt(s029q8['substr'](0x1)['replace']('x', '0x'))) : (vzxwob['error']('entity not found:' + _5grp), _5grp);
  }function skh(wbvz1o) {
    if (wbvz1o > je) {
      var k2sh6 = hij7et['substring'](je, wbvz1o)['replace'](/&#?\w+;/g, zawbxu);i7tmj4 && vwn1qo(je), d_rul$['characters'](k2sh6, 0x0, wbvz1o - je), je = wbvz1o;
    }
  }function vwn1qo(l_r$p, wbazxo) {
    for (; l_r$p >= je7it && (wbazxo = _dlr$u['exec'](hij7et));) l$azux = wbazxo['index'], je7it = l$azux + wbazxo[0x0]['length'], i7tmj4['lineNumber']++;i7tmj4['columnNumber'] = l_r$p - l$azux + 0x1;
  }for (var l$azux = 0x0, je7it = 0x0, _dlr$u = /.*(?:\r\n?|\n)|.*$/g, i7tmj4 = d_rul$['locator'], e7mjt = [{ 'currentNSMap': zvxbw }], r$_u = {}, je = 0x0;;) {
    try {
      var e96s = hij7et['indexOf']('<', je);if (0x0 > e96s) {
        if (!hij7et['substr'](je)['match'](/^\s*$/)) {
          var mitj47 = d_rul$['doc'],
              tmi7 = mitj47['createTextNode'](hij7et['substr'](je));mitj47['appendChild'](tmi7), d_rul$['currentElement'] = tmi7;
        }return;
      }switch (e96s > je && skh(e96s), hij7et['charAt'](e96s + 0x1)) {case '/':
          var im7tj4 = hij7et['indexOf']('>', e96s + 0x3),
              zxwau = hij7et['substring'](e96s + 0x2, im7tj4),
              pf53g = e7mjt['pop']();0x0 > im7tj4 ? (zxwau = hij7et['substring'](e96s + 0x2)['replace'](/[\s<].*/, ''), vzxwob['error']('end tag name: ' + zxwau + ' is not complete:' + pf53g['tagName']), im7tj4 = e96s + 0x1 + zxwau['length']) : zxwau['match'](/\s</) && (zxwau = zxwau['replace'](/[\s<].*/, ''), vzxwob['error']('end tag name: ' + zxwau + ' maybe not complete'), im7tj4 = e96s + 0x1 + zxwau['length']);var ht6e = pf53g['localNSMap'],
              r3pg = pf53g['tagName'] == zxwau,
              rdp5_ = r3pg || pf53g['tagName'] && pf53g['tagName']['toLowerCase']() == zxwau['toLowerCase']();if (rdp5_) {
            if (d_rul$['endElement'](pf53g['uri'], pf53g['localName'], zxwau), ht6e) {
              for (var dlr_ in ht6e) d_rul$['endPrefixMapping'](dlr_);
            }r3pg || vzxwob['fatalError']('end tag name: ' + zxwau + ' is not match the current start tagName:' + pf53g['tagName']);
          } else e7mjt['push'](pf53g);im7tj4++;break;case '?':
          i7tmj4 && vwn1qo(e96s), im7tj4 = K1_zxua(hij7et, e96s, d_rul$);break;case '!':
          i7tmj4 && vwn1qo(e96s), im7tj4 = K1_rlud(hij7et, e96s, d_rul$, vzxwob);break;default:
          i7tmj4 && vwn1qo(e96s);var l_dp$r = new K1_nqo0v(),
              ti7jm = e7mjt[e7mjt['length'] - 0x1]['currentNSMap'],
              im7tj4 = K1__$plr(hij7et, e96s, l_dp$r, ti7jm, zawbxu, vzxwob),
              vnowb = l_dp$r['length'];if (!l_dp$r['closed'] && K1_bvo1z(hij7et, im7tj4, l_dp$r['tagName'], r$_u) && (l_dp$r['closed'] = !0x0, qo1v['nbsp'] || vzxwob['warning']('unclosed xml attribute')), i7tmj4 && vnowb) {
            for (var pr_5g3 = K1_ih7jt(i7tmj4, {}), udal$_ = 0x0; vnowb > udal$_; udal$_++) {
              var _$alud = l_dp$r[udal$_];vwn1qo(_$alud['offset']), _$alud['locator'] = K1_ih7jt(i7tmj4, {});
            }d_rul$['locator'] = pr_5g3, K1_nvo0q1(l_dp$r, d_rul$, ti7jm) && e7mjt['push'](l_dp$r), d_rul$['locator'] = i7tmj4;
          } else K1_nvo0q1(l_dp$r, d_rul$, ti7jm) && e7mjt['push'](l_dp$r);'http://www.w3.org/1999/xhtml' !== l_dp$r['uri'] || l_dp$r['closed'] ? im7tj4++ : im7tj4 = K1_xvbwz(hij7et, im7tj4, l_dp$r['tagName'], zawbxu, d_rul$);}
    } catch (qs890) {
      vzxwob['error']('element parse error: ' + qs890), im7tj4 = -0x1;
    }im7tj4 > je ? je = im7tj4 : skh(Math['max'](e96s, je) + 0x1);
  }
}function K1_ih7jt(oaxbw, nvq081) {
  return nvq081['lineNumber'] = oaxbw['lineNumber'], nvq081['columnNumber'] = oaxbw['columnNumber'], nvq081;
}function K1__$plr(qn180, ob1vw, vnb1w, vz1owb, rpd_3, voz1b) {
  for (var gy5f, vwobzx, o1wvq = ++ob1vw, qvwon1 = K1_q920n;;) {
    var k6sh92 = qn180['charAt'](o1wvq);switch (k6sh92) {case '=':
        if (qvwon1 === K1_lau$_) gy5f = qn180['slice'](ob1vw, o1wvq), qvwon1 = K1_ehks69;else {
          if (qvwon1 !== K1_k6eish) throw new Error('attribute equal must after attrName');qvwon1 = K1_ehks69;
        }break;case '\x27':case '\x22':
        if (qvwon1 === K1_ehks69 || qvwon1 === K1_lau$_) {
          if (qvwon1 === K1_lau$_ && (voz1b['warning']('attribute value must after "="'), gy5f = qn180['slice'](ob1vw, o1wvq)), ob1vw = o1wvq + 0x1, o1wvq = qn180['indexOf'](k6sh92, ob1vw), !(o1wvq > 0x0)) throw new Error('attribute value no end \'' + k6sh92 + '\' match');vwobzx = qn180['slice'](ob1vw, o1wvq)['replace'](/&#?\w+;/g, rpd_3), vnb1w['add'](gy5f, vwobzx, ob1vw - 0x1), qvwon1 = K1_$ualxd;
        } else {
          if (qvwon1 != K1_th7iej) throw new Error('attribute value must after "="');vwobzx = qn180['slice'](ob1vw, o1wvq)['replace'](/&#?\w+;/g, rpd_3), vnb1w['add'](gy5f, vwobzx, ob1vw), voz1b['warning']('attribute "' + gy5f + '" missed start quot(' + k6sh92 + ')!!'), ob1vw = o1wvq + 0x1, qvwon1 = K1_$ualxd;
        }break;case '/':
        switch (qvwon1) {case K1_q920n:
            vnb1w['setTagName'](qn180['slice'](ob1vw, o1wvq));case K1_$ualxd:case K1_azblxu:case K1_$xuald:
            qvwon1 = K1_$xuald, vnb1w['closed'] = !0x0;case K1_th7iej:case K1_lau$_:case K1_k6eish:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return voz1b['error']('unexpected end of input'), qvwon1 == K1_q920n && vnb1w['setTagName'](qn180['slice'](ob1vw, o1wvq)), o1wvq;case '>':
        switch (qvwon1) {case K1_q920n:
            vnb1w['setTagName'](qn180['slice'](ob1vw, o1wvq));case K1_$ualxd:case K1_azblxu:case K1_$xuald:
            break;case K1_th7iej:case K1_lau$_:
            vwobzx = qn180['slice'](ob1vw, o1wvq), '/' === vwobzx['slice'](-0x1) && (vnb1w['closed'] = !0x0, vwobzx = vwobzx['slice'](0x0, -0x1));case K1_k6eish:
            qvwon1 === K1_k6eish && (vwobzx = gy5f), qvwon1 == K1_th7iej ? (voz1b['warning']('attribute "' + vwobzx + '" missed quot(")!!'), vnb1w['add'](gy5f, vwobzx['replace'](/&#?\w+;/g, rpd_3), ob1vw)) : ('http://www.w3.org/1999/xhtml' === vz1owb[''] && vwobzx['match'](/^(?:disabled|checked|selected)$/i) || voz1b['warning']('attribute "' + vwobzx + '" missed value!! "' + vwobzx + '" instead!!'), vnb1w['add'](vwobzx, vwobzx, ob1vw));break;case K1_ehks69:
            throw new Error('attribute value missed!!');}return o1wvq;case '\u0080':
        k6sh92 = '\x20';default:
        if ('\x20' >= k6sh92) switch (qvwon1) {case K1_q920n:
            vnb1w['setTagName'](qn180['slice'](ob1vw, o1wvq)), qvwon1 = K1_azblxu;break;case K1_lau$_:
            gy5f = qn180['slice'](ob1vw, o1wvq), qvwon1 = K1_k6eish;break;case K1_th7iej:
            var vwobzx = qn180['slice'](ob1vw, o1wvq)['replace'](/&#?\w+;/g, rpd_3);voz1b['warning']('attribute "' + vwobzx + '" missed quot(")!!'), vnb1w['add'](gy5f, vwobzx, ob1vw);case K1_$ualxd:
            qvwon1 = K1_azblxu;} else switch (qvwon1) {case K1_k6eish:
            {
              vnb1w['tagName'];
            }'http://www.w3.org/1999/xhtml' === vz1owb[''] && gy5f['match'](/^(?:disabled|checked|selected)$/i) || voz1b['warning']('attribute "' + gy5f + '" missed value!! "' + gy5f + '" instead2!!'), vnb1w['add'](gy5f, gy5f, ob1vw), ob1vw = o1wvq, qvwon1 = K1_lau$_;break;case K1_$ualxd:
            voz1b['warning']('attribute space is required"' + gy5f + '\x22!!');case K1_azblxu:
            qvwon1 = K1_lau$_, ob1vw = o1wvq;break;case K1_ehks69:
            qvwon1 = K1_th7iej, ob1vw = o1wvq;break;case K1_$xuald:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}o1wvq++;
  }
}function K1_nvo0q1(ij4t, $xla, v1qnwo) {
  for (var zbxwu = ij4t['tagName'], q1novw = null, is6kh = ij4t['length']; is6kh--;) {
    var iet7mj = ij4t[is6kh],
        vwbzx = iet7mj['qName'],
        ies = iet7mj['value'],
        _$rdlp = vwbzx['indexOf'](':');if (_$rdlp > 0x0) var ijt7m4 = iet7mj['prefix'] = vwbzx['slice'](0x0, _$rdlp),
        te67h = vwbzx['slice'](_$rdlp + 0x1),
        e67th = 'xmlns' === ijt7m4 && te67h;else te67h = vwbzx, ijt7m4 = null, e67th = 'xmlns' === vwbzx && '';iet7mj['localName'] = te67h, e67th !== !0x1 && (null == q1novw && (q1novw = {}, K1_vob(v1qnwo, v1qnwo = {})), v1qnwo[e67th] = q1novw[e67th] = ies, iet7mj['uri'] = 'http://www.w3.org/2000/xmlns/', $xla['startPrefixMapping'](e67th, ies));
  }for (var is6kh = ij4t['length']; is6kh--;) {
    iet7mj = ij4t[is6kh];var ijt7m4 = iet7mj['prefix'];ijt7m4 && ('xml' === ijt7m4 && (iet7mj['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== ijt7m4 && (iet7mj['uri'] = v1qnwo[ijt7m4 || '']));
  }var _$rdlp = zbxwu['indexOf'](':');_$rdlp > 0x0 ? (ijt7m4 = ij4t['prefix'] = zbxwu['slice'](0x0, _$rdlp), te67h = ij4t['localName'] = zbxwu['slice'](_$rdlp + 0x1)) : (ijt7m4 = null, te67h = ij4t['localName'] = zbxwu);var kesi6 = ij4t['uri'] = v1qnwo[ijt7m4 || ''];if ($xla['startElement'](kesi6, te67h, zbxwu, ij4t), !ij4t['closed']) return ij4t['currentNSMap'] = v1qnwo, ij4t['localNSMap'] = q1novw, !0x0;if ($xla['endElement'](kesi6, te67h, zbxwu), q1novw) {
    for (ijt7m4 in q1novw) $xla['endPrefixMapping'](ijt7m4);
  }
}function K1_xvbwz(g3fyc, d_al, gf5p3r, e6sh9, qwon1v) {
  if (/^(?:script|textarea)$/i['test'](gf5p3r)) {
    var woazxb = g3fyc['indexOf']('</' + gf5p3r + '>', d_al),
        r3p5gf = g3fyc['substring'](d_al + 0x1, woazxb);if (/[&<]/['test'](r3p5gf)) return (/^script$/i['test'](gf5p3r) ? (qwon1v['characters'](r3p5gf, 0x0, r3p5gf['length']), woazxb) : (r3p5gf = r3p5gf['replace'](/&#?\w+;/g, e6sh9), qwon1v['characters'](r3p5gf, 0x0, r3p5gf['length']), woazxb)
    );
  }return d_al + 0x1;
}function K1_bvo1z(d_l$rp, xul$za, k629h, shek6i) {
  var hjiet7 = shek6i[k629h];return null == hjiet7 && (hjiet7 = d_l$rp['lastIndexOf']('</' + k629h + '>'), xul$za > hjiet7 && (hjiet7 = d_l$rp['lastIndexOf']('</' + k629h)), shek6i[k629h] = hjiet7), xul$za > hjiet7;
}function K1_vob(esh69k, $dlur) {
  for (var d_r$p5 in esh69k) $dlur[d_r$p5] = esh69k[d_r$p5];
}function K1_rlud(q8s9, l$pd_r, xz$a, frgp53) {
  var i4tmj = q8s9['charAt'](l$pd_r + 0x2);switch (i4tmj) {case '-':
      if ('-' === q8s9['charAt'](l$pd_r + 0x3)) {
        var zx = q8s9['indexOf']('-->', l$pd_r + 0x4);return zx > l$pd_r ? (xz$a['comment'](q8s9, l$pd_r + 0x4, zx - l$pd_r - 0x4), zx + 0x3) : (frgp53['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == q8s9['substr'](l$pd_r + 0x3, 0x6)) {
        var zx = q8s9['indexOf'](']]>', l$pd_r + 0x9);return xz$a['startCDATA'](), xz$a['characters'](q8s9, l$pd_r + 0x9, zx - l$pd_r - 0x9), xz$a['endCDATA'](), zx + 0x3;
      }var d$lu_a = K1_cpgf5(q8s9, l$pd_r),
          pr3d5_ = d$lu_a['length'];if (pr3d5_ > 0x1 && /!doctype/i['test'](d$lu_a[0x0][0x0])) {
        var zuxal$ = d$lu_a[0x1][0x0],
            vqnw = pr3d5_ > 0x3 && /^public$/i['test'](d$lu_a[0x2][0x0]) && d$lu_a[0x3][0x0],
            $adlx = pr3d5_ > 0x4 && d$lu_a[0x4][0x0],
            o1nbw = d$lu_a[pr3d5_ - 0x1];return xz$a['startDTD'](zuxal$, vqnw && vqnw['replace'](/^(['"])(.*?)\1$/, '$2'), $adlx && $adlx['replace'](/^(['"])(.*?)\1$/, '$2')), xz$a['endDTD'](), o1nbw['index'] + o1nbw[0x0]['length'];
      }}return -0x1;
}function K1_zxua(bxawu, o1bwnv, itjh) {
  var nov1 = bxawu['indexOf']('?>', o1bwnv);if (nov1) {
    var l$_aud = bxawu['substring'](o1bwnv, nov1)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (l$_aud) {
      {
        l$_aud[0x0]['length'];
      }return itjh['processingInstruction'](l$_aud[0x1], l$_aud[0x2]), nov1 + 0x2;
    }return -0x1;
  }return -0x1;
}function K1_nqo0v() {}function K1_bxoz(is6ke, uzxwa) {
  return is6ke['__proto__'] = uzxwa, is6ke;
}function K1_cpgf5(bzul, gyc35f) {
  var s0k28,
      ekh96s = [],
      bxaowz = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (bxaowz['lastIndex'] = gyc35f, bxaowz['exec'](bzul); s0k28 = bxaowz['exec'](bzul);) if (ekh96s['push'](s0k28), s0k28[0x1]) return ekh96s;
}var K1_h7tjei = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    K1_h6ie7 = new RegExp('[\\-\\.0-9' + K1_h7tjei['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    K1_k6iteh = new RegExp('^' + K1_h7tjei['source'] + K1_h6ie7['source'] + '*(?::' + K1_h7tjei['source'] + K1_h6ie7['source'] + '*)?$'),
    K1_q920n = 0x0,
    K1_lau$_ = 0x1,
    K1_k6eish = 0x2,
    K1_ehks69 = 0x3,
    K1_th7iej = 0x4,
    K1_$ualxd = 0x5,
    K1_azblxu = 0x6,
    K1_$xuald = 0x7;K1_lxba['prototype'] = { 'parse': function (jie7t, ihe7t, abxzwo) {
    var lbxuza = this['domBuilder'];lbxuza['startDocument'](), K1_vob(ihe7t, ihe7t = {}), K1_q1w(jie7t, ihe7t, abxzwo, lbxuza, this['errorHandler']), lbxuza['endDocument']();
  } }, K1_nqo0v['prototype'] = { 'setTagName': function (k26s) {
    if (!K1_k6iteh['test'](k26s)) throw new Error('invalid tagName:' + k26s);this['tagName'] = k26s;
  }, 'add': function (q8n210, k892, a$lud_) {
    if (!K1_k6iteh['test'](q8n210)) throw new Error('invalid attribute:' + q8n210);this[this['length']++] = { 'qName': q8n210, 'value': k892, 'offset': a$lud_ };
  }, 'length': 0x0, 'getLocalName': function (zbuxal) {
    return this[zbuxal]['localName'];
  }, 'getLocator': function (baxluz) {
    return this[baxluz]['locator'];
  }, 'getQName': function (qn0vo1) {
    return this[qn0vo1]['qName'];
  }, 'getURI': function (wov1nq) {
    return this[wov1nq]['uri'];
  }, 'getValue': function (ieth76) {
    return this[ieth76]['value'];
  } }, K1_bxoz({}, K1_bxoz['prototype']) instanceof K1_bxoz || (K1_bxoz = function (v0nqo1, $l_drp) {
  function zoxaw() {}zoxaw['prototype'] = $l_drp, zoxaw = new zoxaw();for ($l_drp in v0nqo1) zoxaw[$l_drp] = v0nqo1[$l_drp];return zoxaw;
}), exports['XMLReader'] = K1_lxba;