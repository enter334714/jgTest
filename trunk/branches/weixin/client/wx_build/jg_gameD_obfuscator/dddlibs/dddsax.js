var a_ = wx.$d;
function b_vy9b50() {}function b_$81d_7z(dn1jt, cxe9b0s, a4lkqrw, ar5vcy, j7tdn1) {
  function uoh(raw4ql5) {
    var x90bsc = raw4ql5['slice'](0x1, -0x1);return x90bsc in a4lkqrw ? a4lkqrw[x90bsc] : '#' === x90bsc['charAt'](0x0) ? 0xffff < (x90bsc = parseInt(x90bsc['substr'](0x1)['replace']('x', '0x'))) ? (x90bsc -= 0x10000, String['fromCharCode'](0xd800 + (x90bsc >> 0xa), 0xdc00 + (0x3ff & x90bsc))) : String['fromCharCode'](x90bsc) : (j7tdn1['error']('entity not found:' + raw4ql5), raw4ql5);
  }function k62g3l(lw3p6) {
    var $d81tz7;mk3pg6 < lw3p6 && ($d81tz7 = dn1jt['substring'](mk3pg6, lw3p6)['replace'](/&#?\w+;/g, uoh), wk4p3 && y450(mk3pg6), ar5vcy['characters']($d81tz7, 0x0, lw3p6 - mk3pg6), mk3pg6 = lw3p6);
  }function y450(pklq6w3, wv5q4r) {
    for (; yrv45a <= pklq6w3 && (wv5q4r = w4lkqrp['exec'](dn1jt));) fujohi = wv5q4r['index'], yrv45a = fujohi + wv5q4r[0x0]['length'], wk4p3['lineNumber']++;wk4p3['columnNumber'] = pklq6w3 - fujohi + 0x1;
  }for (var fujohi = 0x0, yrv45a = 0x0, w4lkqrp = /.*(?:\r\n?|\n)|.*$/g, wk4p3 = ar5vcy['locator'], $m26g_3 = [{ 'currentNSMap': cxe9b0s }], mgp62 = {}, mk3pg6 = 0x0;;) {
    try {
      var fuijhon = dn1jt['indexOf']('<', mk3pg6),
          t7nfdz,
          yrv045;if (fuijhon < 0x0) return void (dn1jt['substr'](mk3pg6)['match'](/^\s*$/) || (yrv045 = (t7nfdz = ar5vcy['doc'])['createTextNode'](dn1jt['substr'](mk3pg6)), t7nfdz['appendChild'](yrv045), ar5vcy['currentElement'] = yrv045));switch (mk3pg6 < fuijhon && k62g3l(fuijhon), dn1jt['charAt'](fuijhon + 0x1)) {case '/':
          var lqpr4w = dn1jt['indexOf']('>', fuijhon + 0x3),
              $z1m_8d = dn1jt['substring'](fuijhon + 0x2, lqpr4w),
              qp3kl6w = $m26g_3['pop']();lqpr4w < 0x0 ? ($z1m_8d = dn1jt['substring'](fuijhon + 0x2)['replace'](/[\s<].*/, ''), j7tdn1['error']('end tag name: ' + $z1m_8d + ' is not complete:' + qp3kl6w['tagName']), lqpr4w = fuijhon + 0x1 + $z1m_8d['length']) : $z1m_8d['match'](/\s</) && ($z1m_8d = $z1m_8d['replace'](/[\s<].*/, ''), j7tdn1['error']('end tag name: ' + $z1m_8d + ' maybe not complete'), lqpr4w = fuijhon + 0x1 + $z1m_8d['length']);var $3m6 = qp3kl6w['localNSMap'],
              pw4rq = qp3kl6w['tagName'] == $z1m_8d;if (pw4rq || qp3kl6w['tagName'] && qp3kl6w['tagName']['toLowerCase']() == $z1m_8d['toLowerCase']()) {
            if (ar5vcy['endElement'](qp3kl6w['uri'], qp3kl6w['localName'], $z1m_8d), $3m6) {
              for (var m8g_2$z in $3m6) ar5vcy['endPrefixMapping'](m8g_2$z);
            }pw4rq || j7tdn1['fatalError']('end tag name: ' + $z1m_8d + ' is not match the current start tagName:' + qp3kl6w['tagName']);
          } else $m26g_3['push'](qp3kl6w);lqpr4w++;break;case '?':
          wk4p3 && y450(fuijhon), lqpr4w = b_rakq4w(dn1jt, fuijhon, ar5vcy);break;case '!':
          wk4p3 && y450(fuijhon), lqpr4w = b_onfiuj(dn1jt, fuijhon, ar5vcy, j7tdn1);break;default:
          wk4p3 && y450(fuijhon);var p3g62m = new b_sexc9b0(),
              p4l3wqk = $m26g_3[$m26g_3['length'] - 0x1]['currentNSMap'],
              lqpr4w = b_z2g$8m_(dn1jt, fuijhon, p3g62m, p4l3wqk, uoh, j7tdn1),
              z_$d1m = p3g62m['length'];if (!p3g62m['closed'] && b_$gm268(dn1jt, lqpr4w, p3g62m['tagName'], mgp62) && (p3g62m['closed'] = !0x0, a4lkqrw['nbsp'] || j7tdn1['warning']('unclosed xml attribute')), wk4p3 && z_$d1m) {
            for (var z1$dt = b_w6kpg(wk4p3, {}), l3qw4 = 0x0; l3qw4 < z_$d1m; l3qw4++) {
              var bce9s0 = p3g62m[l3qw4];y450(bce9s0['offset']), bce9s0['locator'] = b_w6kpg(wk4p3, {});
            }ar5vcy['locator'] = z1$dt, b_a4qrvy(p3g62m, ar5vcy, p4l3wqk) && $m26g_3['push'](p3g62m), ar5vcy['locator'] = wk4p3;
          } else b_a4qrvy(p3g62m, ar5vcy, p4l3wqk) && $m26g_3['push'](p3g62m);'http://www.w3.org/1999/xhtml' !== p3g62m['uri'] || p3g62m['closed'] ? lqpr4w++ : lqpr4w = b_$d8z7_(dn1jt, lqpr4w, p3g62m['tagName'], uoh, ar5vcy);}
    } catch (y90vc) {
      j7tdn1['error']('element parse error: ' + y90vc), lqpr4w = -0x1;
    }mk3pg6 < lqpr4w ? mk3pg6 = lqpr4w : k62g3l(Math['max'](fuijhon, mk3pg6) + 0x1);
  }
}function b_w6kpg(gz_$m, tdz$187) {
  return tdz$187['lineNumber'] = gz_$m['lineNumber'], tdz$187['columnNumber'] = gz_$m['columnNumber'], tdz$187;
}function b_z2g$8m_($1t8dz7, fju7nd, l3wgp6, qvy45ra, $dzm_, ra5yv) {
  for (var jnf7uht, _m6g32 = ++fju7nd, lwqkar4 = b_p3m6g2_;;) {
    var g6$m_ = $1t8dz7['charAt'](_m6g32);switch (g6$m_) {case '=':
        if (lwqkar4 === b_kgl3p26) jnf7uht = $1t8dz7['slice'](fju7nd, _m6g32), lwqkar4 = b_ijuoh;else {
          if (lwqkar4 !== b_m81d) throw new Error('attribute equal must after attrName');lwqkar4 = b_ijuoh;
        }break;case '\x27':case '\x22':
        if (lwqkar4 === b_ijuoh || lwqkar4 === b_kgl3p26) {
          if (lwqkar4 === b_kgl3p26 && (ra5yv['warning']('attribute value must after "="'), jnf7uht = $1t8dz7['slice'](fju7nd, _m6g32)), !(0x0 < (_m6g32 = $1t8dz7['indexOf'](g6$m_, fju7nd = _m6g32 + 0x1)))) throw new Error('attribute value no end \'' + g6$m_ + '\' match');qwr4a5v = $1t8dz7['slice'](fju7nd, _m6g32)['replace'](/&#?\w+;/g, $dzm_), l3wgp6['add'](jnf7uht, qwr4a5v, fju7nd - 0x1), lwqkar4 = b_ay45v0r;
        } else {
          if (lwqkar4 != b_uftih) throw new Error('attribute value must after "="');qwr4a5v = $1t8dz7['slice'](fju7nd, _m6g32)['replace'](/&#?\w+;/g, $dzm_), l3wgp6['add'](jnf7uht, qwr4a5v, fju7nd), ra5yv['warning']('attribute "' + jnf7uht + '" missed start quot(' + g6$m_ + ')!!'), fju7nd = _m6g32 + 0x1, lwqkar4 = b_ay45v0r;
        }break;case '/':
        switch (lwqkar4) {case b_p3m6g2_:
            l3wgp6['setTagName']($1t8dz7['slice'](fju7nd, _m6g32));case b_ay45v0r:case b_tjdfn71:case b_s0bc9x:
            lwqkar4 = b_s0bc9x, l3wgp6['closed'] = !0x0;case b_uftih:case b_kgl3p26:case b_m81d:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return ra5yv['error']('unexpected end of input'), lwqkar4 == b_p3m6g2_ && l3wgp6['setTagName']($1t8dz7['slice'](fju7nd, _m6g32)), _m6g32;case '>':
        switch (lwqkar4) {case b_p3m6g2_:
            l3wgp6['setTagName']($1t8dz7['slice'](fju7nd, _m6g32));case b_ay45v0r:case b_tjdfn71:case b_s0bc9x:
            break;case b_uftih:case b_kgl3p26:
            '/' === (qwr4a5v = $1t8dz7['slice'](fju7nd, _m6g32))['slice'](-0x1) && (l3wgp6['closed'] = !0x0, qwr4a5v = qwr4a5v['slice'](0x0, -0x1));case b_m81d:
            lwqkar4 === b_m81d && (qwr4a5v = jnf7uht), lwqkar4 == b_uftih ? (ra5yv['warning']('attribute "' + qwr4a5v + '" missed quot(")!!'), l3wgp6['add'](jnf7uht, qwr4a5v['replace'](/&#?\w+;/g, $dzm_), fju7nd)) : ('http://www.w3.org/1999/xhtml' === qvy45ra[''] && qwr4a5v['match'](/^(?:disabled|checked|selected)$/i) || ra5yv['warning']('attribute "' + qwr4a5v + '" missed value!! "' + qwr4a5v + '" instead!!'), l3wgp6['add'](qwr4a5v, qwr4a5v, fju7nd));break;case b_ijuoh:
            throw new Error('attribute value missed!!');}return _m6g32;case '\u0080':
        g6$m_ = '\x20';default:
        if (g6$m_ <= '\x20') switch (lwqkar4) {case b_p3m6g2_:
            l3wgp6['setTagName']($1t8dz7['slice'](fju7nd, _m6g32)), lwqkar4 = b_tjdfn71;break;case b_kgl3p26:
            jnf7uht = $1t8dz7['slice'](fju7nd, _m6g32), lwqkar4 = b_m81d;break;case b_uftih:
            var qwr4a5v = $1t8dz7['slice'](fju7nd, _m6g32)['replace'](/&#?\w+;/g, $dzm_);ra5yv['warning']('attribute "' + qwr4a5v + '" missed quot(")!!'), l3wgp6['add'](jnf7uht, qwr4a5v, fju7nd);case b_ay45v0r:
            lwqkar4 = b_tjdfn71;} else switch (lwqkar4) {case b_m81d:
            l3wgp6['tagName'], 'http://www.w3.org/1999/xhtml' === qvy45ra[''] && jnf7uht['match'](/^(?:disabled|checked|selected)$/i) || ra5yv['warning']('attribute "' + jnf7uht + '" missed value!! "' + jnf7uht + '" instead2!!'), l3wgp6['add'](jnf7uht, jnf7uht, fju7nd), fju7nd = _m6g32, lwqkar4 = b_kgl3p26;break;case b_ay45v0r:
            ra5yv['warning']('attribute space is required"' + jnf7uht + '\x22!!');case b_tjdfn71:
            lwqkar4 = b_kgl3p26, fju7nd = _m6g32;break;case b_ijuoh:
            lwqkar4 = b_uftih, fju7nd = _m6g32;break;case b_s0bc9x:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}_m6g32++;
  }
}function b_a4qrvy(d7nz1f, hijofu, wkpq3) {
  for (var tj71d = d7nz1f['tagName'], v90syb = null, r5yav = d7nz1f['length']; r5yav--;) {
    var jniufoh = d7nz1f[r5yav],
        cy0bv = jniufoh['qName'],
        _2$18zm = jniufoh['value'],
        z128$_;cy0bv = 0x0 < (pg6k3l = cy0bv['indexOf'](':')) ? (uijfnh = jniufoh['prefix'] = cy0bv['slice'](0x0, pg6k3l), z128$_ = cy0bv['slice'](pg6k3l + 0x1), 'xmlns' === uijfnh && z128$_) : (uijfnh = null, 'xmlns' === (z128$_ = cy0bv) && ''), jniufoh['localName'] = z128$_, !0x1 !== cy0bv && (null == v90syb && (v90syb = {}, b_dt7z1f8(wkpq3, wkpq3 = {})), wkpq3[cy0bv] = v90syb[cy0bv] = _2$18zm, jniufoh['uri'] = 'http://www.w3.org/2000/xmlns/', hijofu['startPrefixMapping'](cy0bv, _2$18zm));
  }for (r5yav = d7nz1f['length']; r5yav--;) (uijfnh = (jniufoh = d7nz1f[r5yav])['prefix']) && ('xml' === uijfnh && (jniufoh['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== uijfnh && (jniufoh['uri'] = wkpq3[uijfnh || '']));var pg6k3l;z128$_ = 0x0 < (pg6k3l = tj71d['indexOf'](':')) ? (uijfnh = d7nz1f['prefix'] = tj71d['slice'](0x0, pg6k3l), d7nz1f['localName'] = tj71d['slice'](pg6k3l + 0x1)) : (uijfnh = null, d7nz1f['localName'] = tj71d);var tfnuihj = d7nz1f['uri'] = wkpq3[uijfnh || ''];if (hijofu['startElement'](tfnuihj, z128$_, tj71d, d7nz1f), !d7nz1f['closed']) return d7nz1f['currentNSMap'] = wkpq3, d7nz1f['localNSMap'] = v90syb, !0x0;if (hijofu['endElement'](tfnuihj, z128$_, tj71d), v90syb) {
    for (var uijfnh in v90syb) hijofu['endPrefixMapping'](uijfnh);
  }
}function b_$d8z7_(q4alrw5, g23p_, arv45yq, p3kl62g, fj7thun) {
  if (/^(?:script|textarea)$/i['test'](arv45yq)) {
    var wa4klr = q4alrw5['indexOf']('</' + arv45yq + '>', g23p_),
        q4alrw5 = q4alrw5['substring'](g23p_ + 0x1, wa4klr);if (/[&<]/['test'](q4alrw5)) return (/^script$/i['test'](arv45yq) || (q4alrw5 = q4alrw5['replace'](/&#?\w+;/g, p3kl62g)), fj7thun['characters'](q4alrw5, 0x0, q4alrw5['length']), wa4klr
    );
  }return g23p_ + 0x1;
}function b_$gm268(arqkl4, bc50yv9, dmz$_81, iufhjtn) {
  var gw3pk6l = iufhjtn[dmz$_81];return null == gw3pk6l && ((gw3pk6l = arqkl4['lastIndexOf']('</' + dmz$_81 + '>')) < bc50yv9 && (gw3pk6l = arqkl4['lastIndexOf']('</' + dmz$_81)), iufhjtn[dmz$_81] = gw3pk6l), gw3pk6l < bc50yv9;
}function b_dt7z1f8($_dz178, tjnufd7) {
  for (var nifohu in $_dz178) tjnufd7[nifohu] = $_dz178[nifohu];
}function b_onfiuj(y0v5a, j1dn7tf, wqa4, v05y) {
  var fz1d7nt = y0v5a['charAt'](j1dn7tf + 0x2);if ('-' === fz1d7nt) return '-' !== y0v5a['charAt'](j1dn7tf + 0x3) ? -0x1 : j1dn7tf < ($m8z1 = y0v5a['indexOf']('-->', j1dn7tf + 0x4)) ? (wqa4['comment'](y0v5a, j1dn7tf + 0x4, $m8z1 - j1dn7tf - 0x4), $m8z1 + 0x3) : (v05y['error']('Unclosed comment'), -0x1);if ('CDATA[' == y0v5a['substr'](j1dn7tf + 0x3, 0x6)) {
    var $m8z1 = y0v5a['indexOf'](']]>', j1dn7tf + 0x9);return wqa4['startCDATA'](), wqa4['characters'](y0v5a, j1dn7tf + 0x9, $m8z1 - j1dn7tf - 0x9), wqa4['endCDATA'](), $m8z1 + 0x3;
  }fz1d7nt = b_qw5r4a(y0v5a, j1dn7tf), v05y = fz1d7nt['length'];if (0x1 < v05y && /!doctype/i['test'](fz1d7nt[0x0][0x0])) return $m8z1 = fz1d7nt[0x1][0x0], y0v5a = 0x3 < v05y && /^public$/i['test'](fz1d7nt[0x2][0x0]) && fz1d7nt[0x3][0x0], j1dn7tf = 0x4 < v05y && fz1d7nt[0x4][0x0], v05y = fz1d7nt[v05y - 0x1], (wqa4['startDTD']($m8z1, y0v5a && y0v5a['replace'](/^(['"])(.*?)\1$/, '$2'), j1dn7tf && j1dn7tf['replace'](/^(['"])(.*?)\1$/, '$2')), wqa4['endDTD'](), v05y['index'] + v05y[0x0]['length']);return -0x1;
}function b_rakq4w(ijofhun, fj7dn1, n1tfdz7) {
  var ujnfi = ijofhun['indexOf']('?>', fj7dn1);if (ujnfi) return fj7dn1 = ijofhun['substring'](fj7dn1, ujnfi)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), fj7dn1 ? (fj7dn1[0x0]['length'], n1tfdz7['processingInstruction'](fj7dn1[0x1], fj7dn1[0x2]), ujnfi + 0x2) : -0x1;return -0x1;
}function b_sexc9b0() {}function b_m_p623(arqyv45, g$8m26) {
  return arqyv45['__proto__'] = g$8m26, arqyv45;
}function b_qw5r4a(n7j1fd, awqk4l) {
  var _81z7,
      d18z$7 = [],
      tufnhji = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (tufnhji['lastIndex'] = awqk4l, tufnhji['exec'](n7j1fd); _81z7 = tufnhji['exec'](n7j1fd);) if (d18z$7['push'](_81z7), _81z7[0x1]) return d18z$7;
}var b_a5r0v4 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    b__2g$6m8 = new RegExp('[\\-\\.0-9' + b_a5r0v4['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    b_q3pl6w = new RegExp('^' + b_a5r0v4['source'] + b__2g$6m8['source'] + '*(?::' + b_a5r0v4['source'] + b__2g$6m8['source'] + '*)?$'),
    b_p3m6g2_ = 0x0,
    b_kgl3p26 = 0x1,
    b_m81d = 0x2,
    b_ijuoh = 0x3,
    b_uftih = 0x4,
    b_ay45v0r = 0x5,
    b_tjdfn71 = 0x6,
    b_s0bc9x = 0x7;b_vy9b50['prototype'] = { 'parse': function (d8_1$z, lqp63k, $3mg6) {
    var lwq4r5 = this['domBuilder'];lwq4r5['startDocument'](), b_dt7z1f8(lqp63k, lqp63k = {}), b_$81d_7z(d8_1$z, lqp63k, $3mg6, lwq4r5, this['errorHandler']), lwq4r5['endDocument']();
  } }, b_sexc9b0['prototype'] = { 'setTagName': function (yaq5rv) {
    if (!b_q3pl6w['test'](yaq5rv)) throw new Error('invalid tagName:' + yaq5rv);this['tagName'] = yaq5rv;
  }, 'add': function ($gzm2, inhjof, a4qwr5l) {
    if (!b_q3pl6w['test']($gzm2)) throw new Error('invalid attribute:' + $gzm2);this[this['length']++] = { 'qName': $gzm2, 'value': inhjof, 'offset': a4qwr5l };
  }, 'length': 0x0, 'getLocalName': function (pmg2k36) {
    return this[pmg2k36]['localName'];
  }, 'getLocator': function (nfjhut) {
    return this[nfjhut]['locator'];
  }, 'getQName': function (r4yvqa) {
    return this[r4yvqa]['qName'];
  }, 'getURI': function (v5cray) {
    return this[v5cray]['uri'];
  }, 'getValue': function (yq4rv5a) {
    return this[yq4rv5a]['value'];
  } }, b_m_p623({}, b_m_p623['prototype']) instanceof b_m_p623 || (b_m_p623 = function (avcr, r4lqwp) {
  function pkwl4q3() {}for (r4lqwp in pkwl4q3['prototype'] = r4lqwp, pkwl4q3 = new pkwl4q3(), avcr) pkwl4q3[r4lqwp] = avcr[r4lqwp];return pkwl4q3;
}), exports['XMLReader'] = b_vy9b50;