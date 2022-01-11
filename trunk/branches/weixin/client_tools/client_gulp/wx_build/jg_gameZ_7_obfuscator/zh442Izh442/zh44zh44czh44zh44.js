var e = wx.$F;
function lm3tyi() {}function lpnzdc(cw9fz, jpneds, $b62, _kjes$, qr0xo7) {
  function v$k6($kv_2) {
    if ($kv_2 > 0xffff) {
      $kv_2 -= 0x10000;var $ba6v = 0xd800 + ($kv_2 >> 0xa),
          sekn_ = 0xdc00 + (0x3ff & $kv_2);return String['fromCharCode']($ba6v, sekn_);
    }return String['fromCharCode']($kv_2);
  }function _vk2$s(ks$2e_) {
    var p_sejn = ks$2e_['slice'](0x1, -0x1);return p_sejn in $b62 ? $b62[p_sejn] : '#' === p_sejn['charAt'](0x0) ? v$k6(parseInt(p_sejn['substr'](0x1)['replace']('x', '0x'))) : (qr0xo7['error']('entity not found:' + ks$2e_), ks$2e_);
  }function gmy83i(zcwuf) {
    if (zcwuf > pjn4) {
      var qoa75 = cw9fz['substring'](pjn4, zcwuf)['replace'](/&#?\w+;/g, _vk2$s);ekjs_ && gyi83(pjn4), _kjes$['characters'](qoa75, 0x0, zcwuf - pjn4), pjn4 = zcwuf;
    }
  }function gyi83(dcp4nj, a$v) {
    for (; dcp4nj >= czufw9 && (a$v = ro7x0q['exec'](cw9fz));) dnj4e = a$v['index'], czufw9 = dnj4e + a$v[0x0]['length'], ekjs_['lineNumber']++;ekjs_['columnNumber'] = dcp4nj - dnj4e + 0x1;
  }for (var dnj4e = 0x0, czufw9 = 0x0, ro7x0q = /.*(?:\r\n?|\n)|.*$/g, ekjs_ = _kjes$['locator'], kv_$2 = [{ 'currentNSMap': jpneds }], v$2s_k = {}, pjn4 = 0x0;;) {
    try {
      var bvk26$ = cw9fz['indexOf']('<', pjn4);if (0x0 > bvk26$) {
        if (!cw9fz['substr'](pjn4)['match'](/^\s*$/)) {
          var bva256 = _kjes$['doc'],
              c49 = bva256['createTextNode'](cw9fz['substr'](pjn4));bva256['appendChild'](c49), _kjes$['currentElement'] = c49;
        }return;
      }switch (bvk26$ > pjn4 && gmy83i(bvk26$), cw9fz['charAt'](bvk26$ + 0x1)) {case '/':
          var ox507q = cw9fz['indexOf']('>', bvk26$ + 0x3),
              $a6bv = cw9fz['substring'](bvk26$ + 0x2, ox507q),
              $kvs = kv_$2['pop']();0x0 > ox507q ? ($a6bv = cw9fz['substring'](bvk26$ + 0x2)['replace'](/[\s<].*/, ''), qr0xo7['error']('end tag name: ' + $a6bv + ' is not complete:' + $kvs['tagName']), ox507q = bvk26$ + 0x1 + $a6bv['length']) : $a6bv['match'](/\s</) && ($a6bv = $a6bv['replace'](/[\s<].*/, ''), qr0xo7['error']('end tag name: ' + $a6bv + ' maybe not complete'), ox507q = bvk26$ + 0x1 + $a6bv['length']);var q507x = $kvs['localNSMap'],
              k$_b2 = $kvs['tagName'] == $a6bv,
              dzcnp = k$_b2 || $kvs['tagName'] && $kvs['tagName']['toLowerCase']() == $a6bv['toLowerCase']();if (dzcnp) {
            if (_kjes$['endElement']($kvs['uri'], $kvs['localName'], $a6bv), q507x) {
              for (var gt in q507x) _kjes$['endPrefixMapping'](gt);
            }k$_b2 || qr0xo7['fatalError']('end tag name: ' + $a6bv + ' is not match the current start tagName:' + $kvs['tagName']);
          } else kv_$2['push']($kvs);ox507q++;break;case '?':
          ekjs_ && gyi83(bvk26$), ox507q = lcfuw9(cw9fz, bvk26$, _kjes$);break;case '!':
          ekjs_ && gyi83(bvk26$), ox507q = lo0xq5(cw9fz, bvk26$, _kjes$, qr0xo7);break;default:
          ekjs_ && gyi83(bvk26$);var o7x8r = new lori87(),
              xymir = kv_$2[kv_$2['length'] - 0x1]['currentNSMap'],
              ox507q = lcdnzp4(cw9fz, bvk26$, o7x8r, xymir, _vk2$s, qr0xo7),
              k_2se = o7x8r['length'];if (!o7x8r['closed'] && lvk2b(cw9fz, ox507q, o7x8r['tagName'], v$2s_k) && (o7x8r['closed'] = !0x0, $b62['nbsp'] || qr0xo7['warning']('unclosed xml attribute')), ekjs_ && k_2se) {
            for (var j_pes = lke_js$(ekjs_, {}), jcdp4 = 0x0; k_2se > jcdp4; jcdp4++) {
              var e4pjd = o7x8r[jcdp4];gyi83(e4pjd['offset']), e4pjd['locator'] = lke_js$(ekjs_, {});
            }_kjes$['locator'] = j_pes, ljps_ne(o7x8r, _kjes$, xymir) && kv_$2['push'](o7x8r), _kjes$['locator'] = ekjs_;
          } else ljps_ne(o7x8r, _kjes$, xymir) && kv_$2['push'](o7x8r);'http://www.w3.org/1999/xhtml' !== o7x8r['uri'] || o7x8r['closed'] ? ox507q++ : ox507q = lz4cnpd(cw9fz, ox507q, o7x8r['tagName'], _vk2$s, _kjes$);}
    } catch (aqo50) {
      qr0xo7['error']('element parse error: ' + aqo50), ox507q = -0x1;
    }ox507q > pjn4 ? pjn4 = ox507q : gmy83i(Math['max'](bvk26$, pjn4) + 0x1);
  }
}function lke_js$(s$ek_, f91uw) {
  return f91uw['lineNumber'] = s$ek_['lineNumber'], f91uw['columnNumber'] = s$ek_['columnNumber'], f91uw;
}function lcdnzp4(lu1fw9, udzc49, _$vb, d4jen, aq6bv, _b2kv$) {
  for (var z9cdu4, sdejpn, iry38 = ++udzc49, dpcnj = lr8im;;) {
    var a5bqv = lu1fw9['charAt'](iry38);switch (a5bqv) {case '=':
        if (dpcnj === lks_$v2) z9cdu4 = lu1fw9['slice'](udzc49, iry38), dpcnj = ldnp4e;else {
          if (dpcnj !== l$bv26k) throw new Error('attribute equal must after attrName');dpcnj = ldnp4e;
        }break;case '\x27':case '\x22':
        if (dpcnj === ldnp4e || dpcnj === lks_$v2) {
          if (dpcnj === lks_$v2 && (_b2kv$['warning']('attribute value must after "="'), z9cdu4 = lu1fw9['slice'](udzc49, iry38)), udzc49 = iry38 + 0x1, iry38 = lu1fw9['indexOf'](a5bqv, udzc49), !(iry38 > 0x0)) throw new Error('attribute value no end \'' + a5bqv + '\' match');sdejpn = lu1fw9['slice'](udzc49, iry38)['replace'](/&#?\w+;/g, aq6bv), _$vb['add'](z9cdu4, sdejpn, udzc49 - 0x1), dpcnj = lgmtiy;
        } else {
          if (dpcnj != lske2$_) throw new Error('attribute value must after "="');sdejpn = lu1fw9['slice'](udzc49, iry38)['replace'](/&#?\w+;/g, aq6bv), _$vb['add'](z9cdu4, sdejpn, udzc49), _b2kv$['warning']('attribute "' + z9cdu4 + '" missed start quot(' + a5bqv + ')!!'), udzc49 = iry38 + 0x1, dpcnj = lgmtiy;
        }break;case '/':
        switch (dpcnj) {case lr8im:
            _$vb['setTagName'](lu1fw9['slice'](udzc49, iry38));case lgmtiy:case ldu94z:case lse_p:
            dpcnj = lse_p, _$vb['closed'] = !0x0;case lske2$_:case lks_$v2:case l$bv26k:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return _b2kv$['error']('unexpected end of input'), dpcnj == lr8im && _$vb['setTagName'](lu1fw9['slice'](udzc49, iry38)), iry38;case '>':
        switch (dpcnj) {case lr8im:
            _$vb['setTagName'](lu1fw9['slice'](udzc49, iry38));case lgmtiy:case ldu94z:case lse_p:
            break;case lske2$_:case lks_$v2:
            sdejpn = lu1fw9['slice'](udzc49, iry38), '/' === sdejpn['slice'](-0x1) && (_$vb['closed'] = !0x0, sdejpn = sdejpn['slice'](0x0, -0x1));case l$bv26k:
            dpcnj === l$bv26k && (sdejpn = z9cdu4), dpcnj == lske2$_ ? (_b2kv$['warning']('attribute "' + sdejpn + '" missed quot(")!!'), _$vb['add'](z9cdu4, sdejpn['replace'](/&#?\w+;/g, aq6bv), udzc49)) : ('http://www.w3.org/1999/xhtml' === d4jen[''] && sdejpn['match'](/^(?:disabled|checked|selected)$/i) || _b2kv$['warning']('attribute "' + sdejpn + '" missed value!! "' + sdejpn + '" instead!!'), _$vb['add'](sdejpn, sdejpn, udzc49));break;case ldnp4e:
            throw new Error('attribute value missed!!');}return iry38;case '\u0080':
        a5bqv = '\x20';default:
        if ('\x20' >= a5bqv) switch (dpcnj) {case lr8im:
            _$vb['setTagName'](lu1fw9['slice'](udzc49, iry38)), dpcnj = ldu94z;break;case lks_$v2:
            z9cdu4 = lu1fw9['slice'](udzc49, iry38), dpcnj = l$bv26k;break;case lske2$_:
            var sdejpn = lu1fw9['slice'](udzc49, iry38)['replace'](/&#?\w+;/g, aq6bv);_b2kv$['warning']('attribute "' + sdejpn + '" missed quot(")!!'), _$vb['add'](z9cdu4, sdejpn, udzc49);case lgmtiy:
            dpcnj = ldu94z;} else switch (dpcnj) {case l$bv26k:
            {
              _$vb['tagName'];
            }'http://www.w3.org/1999/xhtml' === d4jen[''] && z9cdu4['match'](/^(?:disabled|checked|selected)$/i) || _b2kv$['warning']('attribute "' + z9cdu4 + '" missed value!! "' + z9cdu4 + '" instead2!!'), _$vb['add'](z9cdu4, z9cdu4, udzc49), udzc49 = iry38, dpcnj = lks_$v2;break;case lgmtiy:
            _b2kv$['warning']('attribute space is required"' + z9cdu4 + '\x22!!');case ldu94z:
            dpcnj = lks_$v2, udzc49 = iry38;break;case ldnp4e:
            dpcnj = lske2$_, udzc49 = iry38;break;case lse_p:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}iry38++;
  }
}function ljps_ne($k_e, djpes, g8miy) {
  for (var bv2$a6 = $k_e['tagName'], wul9f = null, b$k2v6 = $k_e['length']; b$k2v6--;) {
    var j4den = $k_e[b$k2v6],
        m3gtiy = j4den['qName'],
        sek$2 = j4den['value'],
        epd4j = m3gtiy['indexOf'](':');if (epd4j > 0x0) var $s_ekj = j4den['prefix'] = m3gtiy['slice'](0x0, epd4j),
        r0o = m3gtiy['slice'](epd4j + 0x1),
        ejnpd4 = 'xmlns' === $s_ekj && r0o;else r0o = m3gtiy, $s_ekj = null, ejnpd4 = 'xmlns' === m3gtiy && '';j4den['localName'] = r0o, ejnpd4 !== !0x1 && (null == wul9f && (wul9f = {}, lucwzf(g8miy, g8miy = {})), g8miy[ejnpd4] = wul9f[ejnpd4] = sek$2, j4den['uri'] = 'http://www.w3.org/2000/xmlns/', djpes['startPrefixMapping'](ejnpd4, sek$2));
  }for (var b$k2v6 = $k_e['length']; b$k2v6--;) {
    j4den = $k_e[b$k2v6];var $s_ekj = j4den['prefix'];$s_ekj && ('xml' === $s_ekj && (j4den['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== $s_ekj && (j4den['uri'] = g8miy[$s_ekj || '']));
  }var epd4j = bv2$a6['indexOf'](':');epd4j > 0x0 ? ($s_ekj = $k_e['prefix'] = bv2$a6['slice'](0x0, epd4j), r0o = $k_e['localName'] = bv2$a6['slice'](epd4j + 0x1)) : ($s_ekj = null, r0o = $k_e['localName'] = bv2$a6);var cdz49u = $k_e['uri'] = g8miy[$s_ekj || ''];if (djpes['startElement'](cdz49u, r0o, bv2$a6, $k_e), !$k_e['closed']) return $k_e['currentNSMap'] = g8miy, $k_e['localNSMap'] = wul9f, !0x0;if (djpes['endElement'](cdz49u, r0o, bv2$a6), wul9f) {
    for ($s_ekj in wul9f) djpes['endPrefixMapping']($s_ekj);
  }
}function lz4cnpd(_b2vk, den4, jns_e, v$62k, oqx0) {
  if (/^(?:script|textarea)$/i['test'](jns_e)) {
    var wfl19u = _b2vk['indexOf']('</' + jns_e + '>', den4),
        oir8 = _b2vk['substring'](den4 + 0x1, wfl19u);if (/[&<]/['test'](oir8)) return (/^script$/i['test'](jns_e) ? (oqx0['characters'](oir8, 0x0, oir8['length']), wfl19u) : (oir8 = oir8['replace'](/&#?\w+;/g, v$62k), oqx0['characters'](oir8, 0x0, oir8['length']), wfl19u)
    );
  }return den4 + 0x1;
}function lvk2b(w4uz9, end4j, p_sej, iom8rx) {
  var vb26k = iom8rx[p_sej];return null == vb26k && (vb26k = w4uz9['lastIndexOf']('</' + p_sej + '>'), end4j > vb26k && (vb26k = w4uz9['lastIndexOf']('</' + p_sej)), iom8rx[p_sej] = vb26k), end4j > vb26k;
}function lucwzf(uz19w, _neks) {
  for (var dc9u in uz19w) _neks[dc9u] = uz19w[dc9u];
}function lo0xq5(yig3tm, v$2a, j4pde, dnjpe4) {
  var qx7o5 = yig3tm['charAt'](v$2a + 0x2);switch (qx7o5) {case '-':
      if ('-' === yig3tm['charAt'](v$2a + 0x3)) {
        var jden4p = yig3tm['indexOf']('-->', v$2a + 0x4);return jden4p > v$2a ? (j4pde['comment'](yig3tm, v$2a + 0x4, jden4p - v$2a - 0x4), jden4p + 0x3) : (dnjpe4['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == yig3tm['substr'](v$2a + 0x3, 0x6)) {
        var jden4p = yig3tm['indexOf'](']]>', v$2a + 0x9);return j4pde['startCDATA'](), j4pde['characters'](yig3tm, v$2a + 0x9, jden4p - v$2a - 0x9), j4pde['endCDATA'](), jden4p + 0x3;
      }var wcfz9u = lfu1wl9(yig3tm, v$2a),
          qx07ro = wcfz9u['length'];if (qx07ro > 0x1 && /!doctype/i['test'](wcfz9u[0x0][0x0])) {
        var p4jed = wcfz9u[0x1][0x0],
            e4npdj = qx07ro > 0x3 && /^public$/i['test'](wcfz9u[0x2][0x0]) && wcfz9u[0x3][0x0],
            iy8m3g = qx07ro > 0x4 && wcfz9u[0x4][0x0],
            mig83y = wcfz9u[qx07ro - 0x1];return j4pde['startDTD'](p4jed, e4npdj && e4npdj['replace'](/^(['"])(.*?)\1$/, '$2'), iy8m3g && iy8m3g['replace'](/^(['"])(.*?)\1$/, '$2')), j4pde['endDTD'](), mig83y['index'] + mig83y[0x0]['length'];
      }}return -0x1;
}function lcfuw9(r80x7, $6a, se$k_j) {
  var wc4zu = r80x7['indexOf']('?>', $6a);if (wc4zu) {
    var ej4dn = r80x7['substring']($6a, wc4zu)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (ej4dn) {
      {
        ej4dn[0x0]['length'];
      }return se$k_j['processingInstruction'](ej4dn[0x1], ej4dn[0x2]), wc4zu + 0x2;
    }return -0x1;
  }return -0x1;
}function lori87() {}function l_bkv$2(oix78r, ej_nsk) {
  return oix78r['__proto__'] = ej_nsk, oix78r;
}function lfu1wl9($_kejs, $_2ksv) {
  var b5a,
      q0b5a6 = [],
      pjden4 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (pjden4['lastIndex'] = $_2ksv, pjden4['exec']($_kejs); b5a = pjden4['exec']($_kejs);) if (q0b5a6['push'](b5a), b5a[0x1]) return q0b5a6;
}var ls_jnke = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    lq07oa5 = new RegExp('[\\-\\.0-9' + ls_jnke['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    lo5q7a = new RegExp('^' + ls_jnke['source'] + lq07oa5['source'] + '*(?::' + ls_jnke['source'] + lq07oa5['source'] + '*)?$'),
    lr8im = 0x0,
    lks_$v2 = 0x1,
    l$bv26k = 0x2,
    ldnp4e = 0x3,
    lske2$_ = 0x4,
    lgmtiy = 0x5,
    ldu94z = 0x6,
    lse_p = 0x7;lm3tyi['prototype'] = { 'parse': function (cu9w4z, sjke$_, a65q) {
    var u9lfw = this['domBuilder'];u9lfw['startDocument'](), lucwzf(sjke$_, sjke$_ = {}), lpnzdc(cu9w4z, sjke$_, a65q, u9lfw, this['errorHandler']), u9lfw['endDocument']();
  } }, lori87['prototype'] = { 'setTagName': function (qa7560) {
    if (!lo5q7a['test'](qa7560)) throw new Error('invalid tagName:' + qa7560);this['tagName'] = qa7560;
  }, 'add': function (u94dcz, sjde, se2_k) {
    if (!lo5q7a['test'](u94dcz)) throw new Error('invalid attribute:' + u94dcz);this[this['length']++] = { 'qName': u94dcz, 'value': sjde, 'offset': se2_k };
  }, 'length': 0x0, 'getLocalName': function (o07a5q) {
    return this[o07a5q]['localName'];
  }, 'getLocator': function (cu9fz) {
    return this[cu9fz]['locator'];
  }, 'getQName': function (oq57) {
    return this[oq57]['qName'];
  }, 'getURI': function (cd9p4z) {
    return this[cd9p4z]['uri'];
  }, 'getValue': function (u1f9wl) {
    return this[u1f9wl]['value'];
  } }, l_bkv$2({}, l_bkv$2['prototype']) instanceof l_bkv$2 || (l_bkv$2 = function (q0ox7r, d4z9pc) {
  function q7a60() {}q7a60['prototype'] = d4z9pc, q7a60 = new q7a60();for (d4z9pc in q0ox7r) q7a60[d4z9pc] = q0ox7r[d4z9pc];return q7a60;
}), exports['XMLReader'] = lm3tyi;