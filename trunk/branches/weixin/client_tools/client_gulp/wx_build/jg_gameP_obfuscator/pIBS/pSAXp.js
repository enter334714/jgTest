var E = wx.$p;
function p_gcdq() {}function p_ul_tf(iy$61v, $v67r, cqb8, x4plu, z35wne) {
  function ew53z(y1v$) {
    if (y1v$ > 0xffff) {
      y1v$ -= 0x10000;var xumo_f = 0xd800 + (y1v$ >> 0xa),
          abdqg = 0xdc00 + (0x3ff & y1v$);return String['fromCharCode'](xumo_f, abdqg);
    }return String['fromCharCode'](y1v$);
  }function z2v7r(f_txm) {
    var lpxst4 = f_txm['slice'](0x1, -0x1);return lpxst4 in cqb8 ? cqb8[lpxst4] : '#' === lpxst4['charAt'](0x0) ? ew53z(parseInt(lpxst4['substr'](0x1)['replace']('x', '0x'))) : (z35wne['error']('entity not found:' + f_txm), f_txm);
  }function luxtf(ne89q) {
    if (ne89q > mutf_x) {
      var v71$6 = iy$61v['substring'](mutf_x, ne89q)['replace'](/&#?\w+;/g, z2v7r);dgb && k4pjhs(mutf_x), x4plu['characters'](v71$6, 0x0, ne89q - mutf_x), mutf_x = ne89q;
    }
  }function k4pjhs(tupl4x, bagdc) {
    for (; tupl4x >= tpxl4s && (bagdc = i1y6j$['exec'](iy$61v));) sk4jph = bagdc['index'], tpxl4s = sk4jph + bagdc[0x0]['length'], dgb['lineNumber']++;dgb['columnNumber'] = tupl4x - sk4jph + 0x1;
  }for (var sk4jph = 0x0, tpxl4s = 0x0, i1y6j$ = /.*(?:\r\n?|\n)|.*$/g, dgb = x4plu['locator'], $ihj = [{ 'currentNSMap': $v67r }], kjhs4i = {}, mutf_x = 0x0;;) {
    try {
      var r761v = iy$61v['indexOf']('<', mutf_x);if (0x0 > r761v) {
        if (!iy$61v['substr'](mutf_x)['match'](/^\s*$/)) {
          var e39w5 = x4plu['doc'],
              tl4phs = e39w5['createTextNode'](iy$61v['substr'](mutf_x));e39w5['appendChild'](tl4phs), x4plu['currentElement'] = tl4phs;
        }return;
      }switch (r761v > mutf_x && luxtf(r761v), iy$61v['charAt'](r761v + 0x1)) {case '/':
          var q5e8n = iy$61v['indexOf']('>', r761v + 0x3),
              w0z53n = iy$61v['substring'](r761v + 0x2, q5e8n),
              wz3520 = $ihj['pop']();0x0 > q5e8n ? (w0z53n = iy$61v['substring'](r761v + 0x2)['replace'](/[\s<].*/, ''), z35wne['error']('end tag name: ' + w0z53n + ' is not complete:' + wz3520['tagName']), q5e8n = r761v + 0x1 + w0z53n['length']) : w0z53n['match'](/\s</) && (w0z53n = w0z53n['replace'](/[\s<].*/, ''), z35wne['error']('end tag name: ' + w0z53n + ' maybe not complete'), q5e8n = r761v + 0x1 + w0z53n['length']);var skj4ih = wz3520['localNSMap'],
              _ultx = wz3520['tagName'] == w0z53n,
              r03w2z = _ultx || wz3520['tagName'] && wz3520['tagName']['toLowerCase']() == w0z53n['toLowerCase']();if (r03w2z) {
            if (x4plu['endElement'](wz3520['uri'], wz3520['localName'], w0z53n), skj4ih) {
              for (var uxlp4 in skj4ih) x4plu['endPrefixMapping'](uxlp4);
            }_ultx || z35wne['fatalError']('end tag name: ' + w0z53n + ' is not match the current start tagName:' + wz3520['tagName']);
          } else $ihj['push'](wz3520);q5e8n++;break;case '?':
          dgb && k4pjhs(r761v), q5e8n = p_v72r1(iy$61v, r761v, x4plu);break;case '!':
          dgb && k4pjhs(r761v), q5e8n = p_vy61i(iy$61v, r761v, x4plu, z35wne);break;default:
          dgb && k4pjhs(r761v);var kjyhis = new p_z20r3w(),
              qcbg8 = $ihj[$ihj['length'] - 0x1]['currentNSMap'],
              q5e8n = p_wnz3e5(iy$61v, r761v, kjyhis, qcbg8, z2v7r, z35wne),
              lftupx = kjyhis['length'];if (!kjyhis['closed'] && p_fuxtl(iy$61v, q5e8n, kjyhis['tagName'], kjhs4i) && (kjyhis['closed'] = !0x0, cqb8['nbsp'] || z35wne['warning']('unclosed xml attribute')), dgb && lftupx) {
            for (var acdq = p_yvi1$(dgb, {}), z03n = 0x0; lftupx > z03n; z03n++) {
              var n3wez = kjyhis[z03n];k4pjhs(n3wez['offset']), n3wez['locator'] = p_yvi1$(dgb, {});
            }x4plu['locator'] = acdq, p_lpxu4(kjyhis, x4plu, qcbg8) && $ihj['push'](kjyhis), x4plu['locator'] = dgb;
          } else p_lpxu4(kjyhis, x4plu, qcbg8) && $ihj['push'](kjyhis);'http://www.w3.org/1999/xhtml' !== kjyhis['uri'] || kjyhis['closed'] ? q5e8n++ : q5e8n = p_ihsyjk(iy$61v, q5e8n, kjyhis['tagName'], z2v7r, x4plu);}
    } catch ($y16v7) {
      z35wne['error']('element parse error: ' + $y16v7), q5e8n = -0x1;
    }q5e8n > mutf_x ? mutf_x = q5e8n : luxtf(Math['max'](r761v, mutf_x) + 0x1);
  }
}function p_yvi1$(r1v672, txul_f) {
  return txul_f['lineNumber'] = r1v672['lineNumber'], txul_f['columnNumber'] = r1v672['columnNumber'], txul_f;
}function p_wnz3e5(cgqbda, $r71v, lpx4st, e3wn59, wen35z, ihksjy) {
  for (var $vr176, eaq, en9b = ++$r71v, isyhjk = p_ksj4;;) {
    var b8eaq = cgqbda['charAt'](en9b);switch (b8eaq) {case '=':
        if (isyhjk === p_u4tp) $vr176 = cgqbda['slice']($r71v, en9b), isyhjk = p_pls4x;else {
          if (isyhjk !== p_iyjkhs) throw new Error('attribute equal must after attrName');isyhjk = p_pls4x;
        }break;case '\x27':case '\x22':
        if (isyhjk === p_pls4x || isyhjk === p_u4tp) {
          if (isyhjk === p_u4tp && (ihksjy['warning']('attribute value must after "="'), $vr176 = cgqbda['slice']($r71v, en9b)), $r71v = en9b + 0x1, en9b = cgqbda['indexOf'](b8eaq, $r71v), !(en9b > 0x0)) throw new Error('attribute value no end \'' + b8eaq + '\' match');eaq = cgqbda['slice']($r71v, en9b)['replace'](/&#?\w+;/g, wen35z), lpx4st['add']($vr176, eaq, $r71v - 0x1), isyhjk = p_l_xtfu;
        } else {
          if (isyhjk != p_fm) throw new Error('attribute value must after "="');eaq = cgqbda['slice']($r71v, en9b)['replace'](/&#?\w+;/g, wen35z), lpx4st['add']($vr176, eaq, $r71v), ihksjy['warning']('attribute "' + $vr176 + '" missed start quot(' + b8eaq + ')!!'), $r71v = en9b + 0x1, isyhjk = p_l_xtfu;
        }break;case '/':
        switch (isyhjk) {case p_ksj4:
            lpx4st['setTagName'](cgqbda['slice']($r71v, en9b));case p_l_xtfu:case p_syjkhi:case p_jkps4:
            isyhjk = p_jkps4, lpx4st['closed'] = !0x0;case p_fm:case p_u4tp:case p_iyjkhs:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return ihksjy['error']('unexpected end of input'), isyhjk == p_ksj4 && lpx4st['setTagName'](cgqbda['slice']($r71v, en9b)), en9b;case '>':
        switch (isyhjk) {case p_ksj4:
            lpx4st['setTagName'](cgqbda['slice']($r71v, en9b));case p_l_xtfu:case p_syjkhi:case p_jkps4:
            break;case p_fm:case p_u4tp:
            eaq = cgqbda['slice']($r71v, en9b), '/' === eaq['slice'](-0x1) && (lpx4st['closed'] = !0x0, eaq = eaq['slice'](0x0, -0x1));case p_iyjkhs:
            isyhjk === p_iyjkhs && (eaq = $vr176), isyhjk == p_fm ? (ihksjy['warning']('attribute "' + eaq + '" missed quot(")!!'), lpx4st['add']($vr176, eaq['replace'](/&#?\w+;/g, wen35z), $r71v)) : ('http://www.w3.org/1999/xhtml' === e3wn59[''] && eaq['match'](/^(?:disabled|checked|selected)$/i) || ihksjy['warning']('attribute "' + eaq + '" missed value!! "' + eaq + '" instead!!'), lpx4st['add'](eaq, eaq, $r71v));break;case p_pls4x:
            throw new Error('attribute value missed!!');}return en9b;case '\u0080':
        b8eaq = '\x20';default:
        if ('\x20' >= b8eaq) switch (isyhjk) {case p_ksj4:
            lpx4st['setTagName'](cgqbda['slice']($r71v, en9b)), isyhjk = p_syjkhi;break;case p_u4tp:
            $vr176 = cgqbda['slice']($r71v, en9b), isyhjk = p_iyjkhs;break;case p_fm:
            var eaq = cgqbda['slice']($r71v, en9b)['replace'](/&#?\w+;/g, wen35z);ihksjy['warning']('attribute "' + eaq + '" missed quot(")!!'), lpx4st['add']($vr176, eaq, $r71v);case p_l_xtfu:
            isyhjk = p_syjkhi;} else switch (isyhjk) {case p_iyjkhs:
            {
              lpx4st['tagName'];
            }'http://www.w3.org/1999/xhtml' === e3wn59[''] && $vr176['match'](/^(?:disabled|checked|selected)$/i) || ihksjy['warning']('attribute "' + $vr176 + '" missed value!! "' + $vr176 + '" instead2!!'), lpx4st['add']($vr176, $vr176, $r71v), $r71v = en9b, isyhjk = p_u4tp;break;case p_l_xtfu:
            ihksjy['warning']('attribute space is required"' + $vr176 + '\x22!!');case p_syjkhi:
            isyhjk = p_u4tp, $r71v = en9b;break;case p_pls4x:
            isyhjk = p_fm, $r71v = en9b;break;case p_jkps4:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}en9b++;
  }
}function p_lpxu4(tlf_u, y$1vi, v0r127) {
  for (var t4xlsp = tlf_u['tagName'], txlupf = null, r02vz = tlf_u['length']; r02vz--;) {
    var fxut = tlf_u[r02vz],
        bne8q = fxut['qName'],
        tlphs = fxut['value'],
        $viy16 = bne8q['indexOf'](':');if ($viy16 > 0x0) var n85eq = fxut['prefix'] = bne8q['slice'](0x0, $viy16),
        y176v = bne8q['slice']($viy16 + 0x1),
        ts4lh = 'xmlns' === n85eq && y176v;else y176v = bne8q, n85eq = null, ts4lh = 'xmlns' === bne8q && '';fxut['localName'] = y176v, ts4lh !== !0x1 && (null == txlupf && (txlupf = {}, p_f_txmu(v0r127, v0r127 = {})), v0r127[ts4lh] = txlupf[ts4lh] = tlphs, fxut['uri'] = 'http://www.w3.org/2000/xmlns/', y$1vi['startPrefixMapping'](ts4lh, tlphs));
  }for (var r02vz = tlf_u['length']; r02vz--;) {
    fxut = tlf_u[r02vz];var n85eq = fxut['prefix'];n85eq && ('xml' === n85eq && (fxut['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== n85eq && (fxut['uri'] = v0r127[n85eq || '']));
  }var $viy16 = t4xlsp['indexOf'](':');$viy16 > 0x0 ? (n85eq = tlf_u['prefix'] = t4xlsp['slice'](0x0, $viy16), y176v = tlf_u['localName'] = t4xlsp['slice']($viy16 + 0x1)) : (n85eq = null, y176v = tlf_u['localName'] = t4xlsp);var tluxp = tlf_u['uri'] = v0r127[n85eq || ''];if (y$1vi['startElement'](tluxp, y176v, t4xlsp, tlf_u), !tlf_u['closed']) return tlf_u['currentNSMap'] = v0r127, tlf_u['localNSMap'] = txlupf, !0x0;if (y$1vi['endElement'](tluxp, y176v, t4xlsp), txlupf) {
    for (n85eq in txlupf) y$1vi['endPrefixMapping'](n85eq);
  }
}function p_ihsyjk(jykhsi, n530z, v6$i1y, r02w, rz23w0) {
  if (/^(?:script|textarea)$/i['test'](v6$i1y)) {
    var $6y7 = jykhsi['indexOf']('</' + v6$i1y + '>', n530z),
        aq8bcg = jykhsi['substring'](n530z + 0x1, $6y7);if (/[&<]/['test'](aq8bcg)) return (/^script$/i['test'](v6$i1y) ? (rz23w0['characters'](aq8bcg, 0x0, aq8bcg['length']), $6y7) : (aq8bcg = aq8bcg['replace'](/&#?\w+;/g, r02w), rz23w0['characters'](aq8bcg, 0x0, aq8bcg['length']), $6y7)
    );
  }return n530z + 0x1;
}function p_fuxtl(sjkh4i, l4txpu, n5ew98, qda) {
  var gcbdq = qda[n5ew98];return null == gcbdq && (gcbdq = sjkh4i['lastIndexOf']('</' + n5ew98 + '>'), l4txpu > gcbdq && (gcbdq = sjkh4i['lastIndexOf']('</' + n5ew98)), qda[n5ew98] = gcbdq), l4txpu > gcbdq;
}function p_f_txmu(yv17, lsht) {
  for (var iy6$kj in yv17) lsht[iy6$kj] = yv17[iy6$kj];
}function p_vy61i(vz0, r302z, xfu_om, $ijyk6) {
  var g8bcqa = vz0['charAt'](r302z + 0x2);switch (g8bcqa) {case '-':
      if ('-' === vz0['charAt'](r302z + 0x3)) {
        var xmtu_ = vz0['indexOf']('-->', r302z + 0x4);return xmtu_ > r302z ? (xfu_om['comment'](vz0, r302z + 0x4, xmtu_ - r302z - 0x4), xmtu_ + 0x3) : ($ijyk6['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == vz0['substr'](r302z + 0x3, 0x6)) {
        var xmtu_ = vz0['indexOf'](']]>', r302z + 0x9);return xfu_om['startCDATA'](), xfu_om['characters'](vz0, r302z + 0x9, xmtu_ - r302z - 0x9), xfu_om['endCDATA'](), xmtu_ + 0x3;
      }var yi$v1 = p_hslp4t(vz0, r302z),
          a98eq = yi$v1['length'];if (a98eq > 0x1 && /!doctype/i['test'](yi$v1[0x0][0x0])) {
        var yi$6k = yi$v1[0x1][0x0],
            mtxu_f = a98eq > 0x3 && /^public$/i['test'](yi$v1[0x2][0x0]) && yi$v1[0x3][0x0],
            i1yv = a98eq > 0x4 && yi$v1[0x4][0x0],
            f_tmx = yi$v1[a98eq - 0x1];return xfu_om['startDTD'](yi$6k, mtxu_f && mtxu_f['replace'](/^(['"])(.*?)\1$/, '$2'), i1yv && i1yv['replace'](/^(['"])(.*?)\1$/, '$2')), xfu_om['endDTD'](), f_tmx['index'] + f_tmx[0x0]['length'];
      }}return -0x1;
}function p_v72r1(gqb9a, tpulx, ji$y) {
  var ltpf = gqb9a['indexOf']('?>', tpulx);if (ltpf) {
    var stx4p = gqb9a['substring'](tpulx, ltpf)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (stx4p) {
      {
        stx4p[0x0]['length'];
      }return ji$y['processingInstruction'](stx4p[0x1], stx4p[0x2]), ltpf + 0x2;
    }return -0x1;
  }return -0x1;
}function p_z20r3w() {}function p_ltux_f(lxt4sp, znw3e) {
  return lxt4sp['__proto__'] = znw3e, lxt4sp;
}function p_hslp4t(tps4x, tfxlu) {
  var ne3wz,
      xo_umf = [],
      tfx_lu = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (tfx_lu['lastIndex'] = tfxlu, tfx_lu['exec'](tps4x); ne3wz = tfx_lu['exec'](tps4x);) if (xo_umf['push'](ne3wz), ne3wz[0x1]) return xo_umf;
}var p_qdbacg = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    p_q8cab = new RegExp('[\\-\\.0-9' + p_qdbacg['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    p_b8gqa9 = new RegExp('^' + p_qdbacg['source'] + p_q8cab['source'] + '*(?::' + p_qdbacg['source'] + p_q8cab['source'] + '*)?$'),
    p_ksj4 = 0x0,
    p_u4tp = 0x1,
    p_iyjkhs = 0x2,
    p_pls4x = 0x3,
    p_fm = 0x4,
    p_l_xtfu = 0x5,
    p_syjkhi = 0x6,
    p_jkps4 = 0x7;p_gcdq['prototype'] = { 'parse': function (rz327, b9n8eq, n03wz) {
    var khji$y = this['domBuilder'];khji$y['startDocument'](), p_f_txmu(b9n8eq, b9n8eq = {}), p_ul_tf(rz327, b9n8eq, n03wz, khji$y, this['errorHandler']), khji$y['endDocument']();
  } }, p_z20r3w['prototype'] = { 'setTagName': function (jis) {
    if (!p_b8gqa9['test'](jis)) throw new Error('invalid tagName:' + jis);this['tagName'] = jis;
  }, 'add': function (aqeb98, en9q8, l4u) {
    if (!p_b8gqa9['test'](aqeb98)) throw new Error('invalid attribute:' + aqeb98);this[this['length']++] = { 'qName': aqeb98, 'value': en9q8, 'offset': l4u };
  }, 'length': 0x0, 'getLocalName': function (z2w05) {
    return this[z2w05]['localName'];
  }, 'getLocator': function (e985q) {
    return this[e985q]['locator'];
  }, 'getQName': function (i1yv$) {
    return this[i1yv$]['qName'];
  }, 'getURI': function (s4hpk) {
    return this[s4hpk]['uri'];
  }, 'getValue': function (hj4ik) {
    return this[hj4ik]['value'];
  } }, p_ltux_f({}, p_ltux_f['prototype']) instanceof p_ltux_f || (p_ltux_f = function (rv20z7, z23w5) {
  function new3z5() {}new3z5['prototype'] = z23w5, new3z5 = new new3z5();for (z23w5 in rv20z7) new3z5[z23w5] = rv20z7[z23w5];return new3z5;
}), exports['XMLReader'] = p_gcdq;