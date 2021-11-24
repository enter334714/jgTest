var E = wx.$p;
function p_yhijsk() {}function p_v16iy$(txpuf, jhk4i, phlt, ksphl4, qb8ga9) {
  function ufmtx_(n85w9) {
    if (n85w9 > 0xffff) {
      n85w9 -= 0x10000;var l4sth = 0xd800 + (n85w9 >> 0xa),
          w8ne9 = 0xdc00 + (0x3ff & n85w9);return String['fromCharCode'](l4sth, w8ne9);
    }return String['fromCharCode'](n85w9);
  }function fl_x(s4) {
    var bqn98 = s4['slice'](0x1, -0x1);return bqn98 in phlt ? phlt[bqn98] : '#' === bqn98['charAt'](0x0) ? ufmtx_(parseInt(bqn98['substr'](0x1)['replace']('x', '0x'))) : (qb8ga9['error']('entity not found:' + s4), s4);
  }function wezn53(i6jk$y) {
    if (i6jk$y > qacg8b) {
      var $iy16v = txpuf['substring'](qacg8b, i6jk$y)['replace'](/&#?\w+;/g, fl_x);r17v6$ && ulp4tx(qacg8b), ksphl4['characters']($iy16v, 0x0, i6jk$y - qacg8b), qacg8b = i6jk$y;
    }
  }function ulp4tx(xsptl, $kj6) {
    for (; xsptl >= $yj && ($kj6 = rv761$['exec'](txpuf));) txp4lu = $kj6['index'], $yj = txp4lu + $kj6[0x0]['length'], r17v6$['lineNumber']++;r17v6$['columnNumber'] = xsptl - txp4lu + 0x1;
  }for (var txp4lu = 0x0, $yj = 0x0, rv761$ = /.*(?:\r\n?|\n)|.*$/g, r17v6$ = ksphl4['locator'], sxl4p = [{ 'currentNSMap': jhk4i }], pshk4j = {}, qacg8b = 0x0;;) {
    try {
      var lph = txpuf['indexOf']('<', qacg8b);if (0x0 > lph) {
        if (!txpuf['substr'](qacg8b)['match'](/^\s*$/)) {
          var gq8ab9 = ksphl4['doc'],
              slx = gq8ab9['createTextNode'](txpuf['substr'](qacg8b));gq8ab9['appendChild'](slx), ksphl4['currentElement'] = slx;
        }return;
      }switch (lph > qacg8b && wezn53(lph), txpuf['charAt'](lph + 0x1)) {case '/':
          var nw0z5 = txpuf['indexOf']('>', lph + 0x3),
              ne85 = txpuf['substring'](lph + 0x2, nw0z5),
              c8bga = sxl4p['pop']();0x0 > nw0z5 ? (ne85 = txpuf['substring'](lph + 0x2)['replace'](/[\s<].*/, ''), qb8ga9['error']('end tag name: ' + ne85 + ' is not complete:' + c8bga['tagName']), nw0z5 = lph + 0x1 + ne85['length']) : ne85['match'](/\s</) && (ne85 = ne85['replace'](/[\s<].*/, ''), qb8ga9['error']('end tag name: ' + ne85 + ' maybe not complete'), nw0z5 = lph + 0x1 + ne85['length']);var gcb8a = c8bga['localNSMap'],
              shpkj = c8bga['tagName'] == ne85,
              nqe9b = shpkj || c8bga['tagName'] && c8bga['tagName']['toLowerCase']() == ne85['toLowerCase']();if (nqe9b) {
            if (ksphl4['endElement'](c8bga['uri'], c8bga['localName'], ne85), gcb8a) {
              for (var cbdgq in gcb8a) ksphl4['endPrefixMapping'](cbdgq);
            }shpkj || qb8ga9['fatalError']('end tag name: ' + ne85 + ' is not match the current start tagName:' + c8bga['tagName']);
          } else sxl4p['push'](c8bga);nw0z5++;break;case '?':
          r17v6$ && ulp4tx(lph), nw0z5 = p_w3n05(txpuf, lph, ksphl4);break;case '!':
          r17v6$ && ulp4tx(lph), nw0z5 = p_z20w53(txpuf, lph, ksphl4, qb8ga9);break;default:
          r17v6$ && ulp4tx(lph);var hkyijs = new p_zwr0(),
              r23wz = sxl4p[sxl4p['length'] - 0x1]['currentNSMap'],
              nw0z5 = p_utlxpf(txpuf, lph, hkyijs, r23wz, fl_x, qb8ga9),
              tpx4lu = hkyijs['length'];if (!hkyijs['closed'] && p_gaqb8(txpuf, nw0z5, hkyijs['tagName'], pshk4j) && (hkyijs['closed'] = !0x0, phlt['nbsp'] || qb8ga9['warning']('unclosed xml attribute')), r17v6$ && tpx4lu) {
            for (var vz7 = p_uoxm_(r17v6$, {}), en8b9q = 0x0; tpx4lu > en8b9q; en8b9q++) {
              var z0352w = hkyijs[en8b9q];ulp4tx(z0352w['offset']), z0352w['locator'] = p_uoxm_(r17v6$, {});
            }ksphl4['locator'] = vz7, p_qgba(hkyijs, ksphl4, r23wz) && sxl4p['push'](hkyijs), ksphl4['locator'] = r17v6$;
          } else p_qgba(hkyijs, ksphl4, r23wz) && sxl4p['push'](hkyijs);'http://www.w3.org/1999/xhtml' !== hkyijs['uri'] || hkyijs['closed'] ? nw0z5++ : nw0z5 = p_si4h(txpuf, nw0z5, hkyijs['tagName'], fl_x, ksphl4);}
    } catch (ksij4h) {
      qb8ga9['error']('element parse error: ' + ksij4h), nw0z5 = -0x1;
    }nw0z5 > qacg8b ? qacg8b = nw0z5 : wezn53(Math['max'](lph, qacg8b) + 0x1);
  }
}function p_uoxm_(t_luf, xutlf) {
  return xutlf['lineNumber'] = t_luf['lineNumber'], xutlf['columnNumber'] = t_luf['columnNumber'], xutlf;
}function p_utlxpf(ykshji, ne8w59, a9g8b, nzw50, ishjky, eq8a) {
  for (var i16jy, skyij, rv16$ = ++ne8w59, lpskh4 = p_yhsi;;) {
    var shp4kl = ykshji['charAt'](rv16$);switch (shp4kl) {case '=':
        if (lpskh4 === p_sijk) i16jy = ykshji['slice'](ne8w59, rv16$), lpskh4 = p_z20vr7;else {
          if (lpskh4 !== p_utlp) throw new Error('attribute equal must after attrName');lpskh4 = p_z20vr7;
        }break;case '\x27':case '\x22':
        if (lpskh4 === p_z20vr7 || lpskh4 === p_sijk) {
          if (lpskh4 === p_sijk && (eq8a['warning']('attribute value must after "="'), i16jy = ykshji['slice'](ne8w59, rv16$)), ne8w59 = rv16$ + 0x1, rv16$ = ykshji['indexOf'](shp4kl, ne8w59), !(rv16$ > 0x0)) throw new Error('attribute value no end \'' + shp4kl + '\' match');skyij = ykshji['slice'](ne8w59, rv16$)['replace'](/&#?\w+;/g, ishjky), a9g8b['add'](i16jy, skyij, ne8w59 - 0x1), lpskh4 = p_mxo_fu;
        } else {
          if (lpskh4 != p_nz0) throw new Error('attribute value must after "="');skyij = ykshji['slice'](ne8w59, rv16$)['replace'](/&#?\w+;/g, ishjky), a9g8b['add'](i16jy, skyij, ne8w59), eq8a['warning']('attribute "' + i16jy + '" missed start quot(' + shp4kl + ')!!'), ne8w59 = rv16$ + 0x1, lpskh4 = p_mxo_fu;
        }break;case '/':
        switch (lpskh4) {case p_yhsi:
            a9g8b['setTagName'](ykshji['slice'](ne8w59, rv16$));case p_mxo_fu:case p_kjys:case p_lsk4ph:
            lpskh4 = p_lsk4ph, a9g8b['closed'] = !0x0;case p_nz0:case p_sijk:case p_utlp:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return eq8a['error']('unexpected end of input'), lpskh4 == p_yhsi && a9g8b['setTagName'](ykshji['slice'](ne8w59, rv16$)), rv16$;case '>':
        switch (lpskh4) {case p_yhsi:
            a9g8b['setTagName'](ykshji['slice'](ne8w59, rv16$));case p_mxo_fu:case p_kjys:case p_lsk4ph:
            break;case p_nz0:case p_sijk:
            skyij = ykshji['slice'](ne8w59, rv16$), '/' === skyij['slice'](-0x1) && (a9g8b['closed'] = !0x0, skyij = skyij['slice'](0x0, -0x1));case p_utlp:
            lpskh4 === p_utlp && (skyij = i16jy), lpskh4 == p_nz0 ? (eq8a['warning']('attribute "' + skyij + '" missed quot(")!!'), a9g8b['add'](i16jy, skyij['replace'](/&#?\w+;/g, ishjky), ne8w59)) : ('http://www.w3.org/1999/xhtml' === nzw50[''] && skyij['match'](/^(?:disabled|checked|selected)$/i) || eq8a['warning']('attribute "' + skyij + '" missed value!! "' + skyij + '" instead!!'), a9g8b['add'](skyij, skyij, ne8w59));break;case p_z20vr7:
            throw new Error('attribute value missed!!');}return rv16$;case '\u0080':
        shp4kl = '\x20';default:
        if ('\x20' >= shp4kl) switch (lpskh4) {case p_yhsi:
            a9g8b['setTagName'](ykshji['slice'](ne8w59, rv16$)), lpskh4 = p_kjys;break;case p_sijk:
            i16jy = ykshji['slice'](ne8w59, rv16$), lpskh4 = p_utlp;break;case p_nz0:
            var skyij = ykshji['slice'](ne8w59, rv16$)['replace'](/&#?\w+;/g, ishjky);eq8a['warning']('attribute "' + skyij + '" missed quot(")!!'), a9g8b['add'](i16jy, skyij, ne8w59);case p_mxo_fu:
            lpskh4 = p_kjys;} else switch (lpskh4) {case p_utlp:
            {
              a9g8b['tagName'];
            }'http://www.w3.org/1999/xhtml' === nzw50[''] && i16jy['match'](/^(?:disabled|checked|selected)$/i) || eq8a['warning']('attribute "' + i16jy + '" missed value!! "' + i16jy + '" instead2!!'), a9g8b['add'](i16jy, i16jy, ne8w59), ne8w59 = rv16$, lpskh4 = p_sijk;break;case p_mxo_fu:
            eq8a['warning']('attribute space is required"' + i16jy + '\x22!!');case p_kjys:
            lpskh4 = p_sijk, ne8w59 = rv16$;break;case p_z20vr7:
            lpskh4 = p_nz0, ne8w59 = rv16$;break;case p_lsk4ph:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}rv16$++;
  }
}function p_qgba(ijsykh, u4xlpt, hl4ks) {
  for (var x4ulp = ijsykh['tagName'], x_tf = null, yjik$ = ijsykh['length']; yjik$--;) {
    var $r1v6 = ijsykh[yjik$],
        $kiy6j = $r1v6['qName'],
        r0zw = $r1v6['value'],
        v0r71 = $kiy6j['indexOf'](':');if (v0r71 > 0x0) var zrw32 = $r1v6['prefix'] = $kiy6j['slice'](0x0, v0r71),
        b89 = $kiy6j['slice'](v0r71 + 0x1),
        kshi4j = 'xmlns' === zrw32 && b89;else b89 = $kiy6j, zrw32 = null, kshi4j = 'xmlns' === $kiy6j && '';$r1v6['localName'] = b89, kshi4j !== !0x1 && (null == x_tf && (x_tf = {}, p_yhk$j(hl4ks, hl4ks = {})), hl4ks[kshi4j] = x_tf[kshi4j] = r0zw, $r1v6['uri'] = 'http://www.w3.org/2000/xmlns/', u4xlpt['startPrefixMapping'](kshi4j, r0zw));
  }for (var yjik$ = ijsykh['length']; yjik$--;) {
    $r1v6 = ijsykh[yjik$];var zrw32 = $r1v6['prefix'];zrw32 && ('xml' === zrw32 && ($r1v6['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== zrw32 && ($r1v6['uri'] = hl4ks[zrw32 || '']));
  }var v0r71 = x4ulp['indexOf'](':');v0r71 > 0x0 ? (zrw32 = ijsykh['prefix'] = x4ulp['slice'](0x0, v0r71), b89 = ijsykh['localName'] = x4ulp['slice'](v0r71 + 0x1)) : (zrw32 = null, b89 = ijsykh['localName'] = x4ulp);var l4sh = ijsykh['uri'] = hl4ks[zrw32 || ''];if (u4xlpt['startElement'](l4sh, b89, x4ulp, ijsykh), !ijsykh['closed']) return ijsykh['currentNSMap'] = hl4ks, ijsykh['localNSMap'] = x_tf, !0x0;if (u4xlpt['endElement'](l4sh, b89, x4ulp), x_tf) {
    for (zrw32 in x_tf) u4xlpt['endPrefixMapping'](zrw32);
  }
}function p_si4h(q98ag, lp4, y716v$, fuomx, w3ze5n) {
  if (/^(?:script|textarea)$/i['test'](y716v$)) {
    var v7r20z = q98ag['indexOf']('</' + y716v$ + '>', lp4),
        klhp4s = q98ag['substring'](lp4 + 0x1, v7r20z);if (/[&<]/['test'](klhp4s)) return (/^script$/i['test'](y716v$) ? (w3ze5n['characters'](klhp4s, 0x0, klhp4s['length']), v7r20z) : (klhp4s = klhp4s['replace'](/&#?\w+;/g, fuomx), w3ze5n['characters'](klhp4s, 0x0, klhp4s['length']), v7r20z)
    );
  }return lp4 + 0x1;
}function p_gaqb8(r2wz3, ij16$, hsyijk, xftm_) {
  var jk4phs = xftm_[hsyijk];return null == jk4phs && (jk4phs = r2wz3['lastIndexOf']('</' + hsyijk + '>'), ij16$ > jk4phs && (jk4phs = r2wz3['lastIndexOf']('</' + hsyijk)), xftm_[hsyijk] = jk4phs), ij16$ > jk4phs;
}function p_yhk$j(k4jis, thp4sl) {
  for (var q98bne in k4jis) thp4sl[q98bne] = k4jis[q98bne];
}function p_z20w53(ikjyh, n95we8, j$ik, z07) {
  var txpl4s = ikjyh['charAt'](n95we8 + 0x2);switch (txpl4s) {case '-':
      if ('-' === ikjyh['charAt'](n95we8 + 0x3)) {
        var z0r3w2 = ikjyh['indexOf']('-->', n95we8 + 0x4);return z0r3w2 > n95we8 ? (j$ik['comment'](ikjyh, n95we8 + 0x4, z0r3w2 - n95we8 - 0x4), z0r3w2 + 0x3) : (z07['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == ikjyh['substr'](n95we8 + 0x3, 0x6)) {
        var z0r3w2 = ikjyh['indexOf'](']]>', n95we8 + 0x9);return j$ik['startCDATA'](), j$ik['characters'](ikjyh, n95we8 + 0x9, z0r3w2 - n95we8 - 0x9), j$ik['endCDATA'](), z0r3w2 + 0x3;
      }var phsk4 = p_ji$y61(ikjyh, n95we8),
          ht4ps = phsk4['length'];if (ht4ps > 0x1 && /!doctype/i['test'](phsk4[0x0][0x0])) {
        var $khyij = phsk4[0x1][0x0],
            hikj4 = ht4ps > 0x3 && /^public$/i['test'](phsk4[0x2][0x0]) && phsk4[0x3][0x0],
            cqd = ht4ps > 0x4 && phsk4[0x4][0x0],
            aeb = phsk4[ht4ps - 0x1];return j$ik['startDTD']($khyij, hikj4 && hikj4['replace'](/^(['"])(.*?)\1$/, '$2'), cqd && cqd['replace'](/^(['"])(.*?)\1$/, '$2')), j$ik['endDTD'](), aeb['index'] + aeb[0x0]['length'];
      }}return -0x1;
}function p_w3n05(aqgc8, zw2053, umox_f) {
  var w3ne5 = aqgc8['indexOf']('?>', zw2053);if (w3ne5) {
    var ne35z = aqgc8['substring'](zw2053, w3ne5)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (ne35z) {
      {
        ne35z[0x0]['length'];
      }return umox_f['processingInstruction'](ne35z[0x1], ne35z[0x2]), w3ne5 + 0x2;
    }return -0x1;
  }return -0x1;
}function p_zwr0() {}function p__xmf(tlu4x, tmu_xf) {
  return tlu4x['__proto__'] = tmu_xf, tlu4x;
}function p_ji$y61(hky$j, sthp4l) {
  var sjiyh,
      n98w5 = [],
      ew985n = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (ew985n['lastIndex'] = sthp4l, ew985n['exec'](hky$j); sjiyh = ew985n['exec'](hky$j);) if (n98w5['push'](sjiyh), sjiyh[0x1]) return n98w5;
}var p_nw03z = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    p_v267 = new RegExp('[\\-\\.0-9' + p_nw03z['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    p_his = new RegExp('^' + p_nw03z['source'] + p_v267['source'] + '*(?::' + p_nw03z['source'] + p_v267['source'] + '*)?$'),
    p_yhsi = 0x0,
    p_sijk = 0x1,
    p_utlp = 0x2,
    p_z20vr7 = 0x3,
    p_nz0 = 0x4,
    p_mxo_fu = 0x5,
    p_kjys = 0x6,
    p_lsk4ph = 0x7;p_yhijsk['prototype'] = { 'parse': function (ik4jh, iksjh, aeb8q9) {
    var $v6 = this['domBuilder'];$v6['startDocument'](), p_yhk$j(iksjh, iksjh = {}), p_v16iy$(ik4jh, iksjh, aeb8q9, $v6, this['errorHandler']), $v6['endDocument']();
  } }, p_zwr0['prototype'] = { 'setTagName': function (sjhp4) {
    if (!p_his['test'](sjhp4)) throw new Error('invalid tagName:' + sjhp4);this['tagName'] = sjhp4;
  }, 'add': function (f_txm, jkiysh, p4xut) {
    if (!p_his['test'](f_txm)) throw new Error('invalid attribute:' + f_txm);this[this['length']++] = { 'qName': f_txm, 'value': jkiysh, 'offset': p4xut };
  }, 'length': 0x0, 'getLocalName': function (i4jhs) {
    return this[i4jhs]['localName'];
  }, 'getLocator': function (k4jps) {
    return this[k4jps]['locator'];
  }, 'getQName': function (y$j6) {
    return this[y$j6]['qName'];
  }, 'getURI': function (r170v2) {
    return this[r170v2]['uri'];
  }, 'getValue': function (r370) {
    return this[r370]['value'];
  } }, p__xmf({}, p__xmf['prototype']) instanceof p__xmf || (p__xmf = function ($ikh, m_fxu) {
  function n3z0() {}n3z0['prototype'] = m_fxu, n3z0 = new n3z0();for (m_fxu in $ikh) n3z0[m_fxu] = $ikh[m_fxu];return n3z0;
}), exports['XMLReader'] = p_yhijsk;