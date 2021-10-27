var Y = wx.$M;
function M_rue269() {}function M_jvngx(ml, q1kued, ed1, q1ku, xcjog5) {
  function u62r($1kd0q) {
    var gnw83v = $1kd0q['slice'](0x1, -0x1);return gnw83v in ed1 ? ed1[gnw83v] : '#' === gnw83v['charAt'](0x0) ? 0xffff < (gnw83v = parseInt(gnw83v['substr'](0x1)['replace']('x', '0x'))) ? (gnw83v -= 0x10000, String['fromCharCode'](0xd800 + (gnw83v >> 0xa), 0xdc00 + (0x3ff & gnw83v))) : String['fromCharCode'](gnw83v) : (xcjog5['error']('entity not found:' + $1kd0q), $1kd0q);
  }function d9uq(k10q$d) {
    var gn3w;nv3j < k10q$d && (gn3w = ml['substring'](nv3j, k10q$d)['replace'](/&#?\w+;/g, u62r), at7f && _hzip(nv3j), q1ku['characters'](gn3w, 0x0, k10q$d - nv3j), nv3j = k10q$d);
  }function _hzip(fbha, rs26w4) {
    for (; $10q <= fbha && (rs26w4 = dt$q1['exec'](ml));) y1a$0 = rs26w4['index'], $10q = y1a$0 + rs26w4[0x0]['length'], at7f['lineNumber']++;at7f['columnNumber'] = fbha - y1a$0 + 0x1;
  }for (var y1a$0 = 0x0, $10q = 0x0, dt$q1 = /.*(?:\r\n?|\n)|.*$/g, at7f = q1ku['locator'], y$tf0a = [{ 'currentNSMap': q1kued }], atfyb$ = {}, nv3j = 0x0;;) {
    try {
      var r92u6e = ml['indexOf']('<', nv3j),
          _i7bh,
          q01$yt;if (r92u6e < 0x0) return void (ml['substr'](nv3j)['match'](/^\s*$/) || (q01$yt = (_i7bh = q1ku['doc'])['createTextNode'](ml['substr'](nv3j)), _i7bh['appendChild'](q01$yt), q1ku['currentElement'] = q01$yt));switch (nv3j < r92u6e && d9uq(r92u6e), ml['charAt'](r92u6e + 0x1)) {case '/':
          var hbip_ = ml['indexOf']('>', r92u6e + 0x3),
              hp7fa = ml['substring'](r92u6e + 0x2, hbip_),
              u69re = y$tf0a['pop']();hbip_ < 0x0 ? (hp7fa = ml['substring'](r92u6e + 0x2)['replace'](/[\s<].*/, ''), xcjog5['error']('end tag name: ' + hp7fa + ' is not complete:' + u69re['tagName']), hbip_ = r92u6e + 0x1 + hp7fa['length']) : hp7fa['match'](/\s</) && (hp7fa = hp7fa['replace'](/[\s<].*/, ''), xcjog5['error']('end tag name: ' + hp7fa + ' maybe not complete'), hbip_ = r92u6e + 0x1 + hp7fa['length']);var w8v3ng = u69re['localNSMap'],
              bahpf7 = u69re['tagName'] == hp7fa;if (bahpf7 || u69re['tagName'] && u69re['tagName']['toLowerCase']() == hp7fa['toLowerCase']()) {
            if (q1ku['endElement'](u69re['uri'], u69re['localName'], hp7fa), w8v3ng) {
              for (var nxcj in w8v3ng) q1ku['endPrefixMapping'](nxcj);
            }bahpf7 || xcjog5['fatalError']('end tag name: ' + hp7fa + ' is not match the current start tagName:' + u69re['tagName']);
          } else y$tf0a['push'](u69re);hbip_++;break;case '?':
          at7f && _hzip(r92u6e), hbip_ = M_ngjo3(ml, r92u6e, q1ku);break;case '!':
          at7f && _hzip(r92u6e), hbip_ = M_jgocn(ml, r92u6e, q1ku, xcjog5);break;default:
          at7f && _hzip(r92u6e);var hmi_ = new M_i_pz7h(),
              ek1uqd = y$tf0a[y$tf0a['length'] - 0x1]['currentNSMap'],
              hbip_ = M_ih_b(ml, r92u6e, hmi_, ek1uqd, u62r, xcjog5),
              _zil = hmi_['length'];if (!hmi_['closed'] && M_y$t1(ml, hbip_, hmi_['tagName'], atfyb$) && (hmi_['closed'] = !0x0, ed1['nbsp'] || xcjog5['warning']('unclosed xml attribute')), at7f && _zil) {
            for (var d10qu = M_kd9qeu(at7f, {}), sre692 = 0x0; sre692 < _zil; sre692++) {
              var ox5jgc = hmi_[sre692];_hzip(ox5jgc['offset']), ox5jgc['locator'] = M_kd9qeu(at7f, {});
            }q1ku['locator'] = d10qu, M_ib_h(hmi_, q1ku, ek1uqd) && y$tf0a['push'](hmi_), q1ku['locator'] = at7f;
          } else M_ib_h(hmi_, q1ku, ek1uqd) && y$tf0a['push'](hmi_);'http://www.w3.org/1999/xhtml' !== hmi_['uri'] || hmi_['closed'] ? hbip_++ : hbip_ = M_$1d0qt(ml, hbip_, hmi_['tagName'], u62r, q1ku);}
    } catch (p7ib_) {
      xcjog5['error']('element parse error: ' + p7ib_), hbip_ = -0x1;
    }nv3j < hbip_ ? nv3j = hbip_ : d9uq(Math['max'](r92u6e, nv3j) + 0x1);
  }
}function M_kd9qeu(bf$ya, zmpi_h) {
  return zmpi_h['lineNumber'] = bf$ya['lineNumber'], zmpi_h['columnNumber'] = bf$ya['columnNumber'], zmpi_h;
}function M_ih_b(v8sw34, uqkd, bf7at, lzh_mi, w28s46, edq1) {
  for (var vg38nj, kdq1u = ++uqkd, zl_mi = M_yba7;;) {
    var qt01y$ = v8sw34['charAt'](kdq1u);switch (qt01y$) {case '=':
        if (zl_mi === M_x5o) vg38nj = v8sw34['slice'](uqkd, kdq1u), zl_mi = M_b$fayt;else {
          if (zl_mi !== M_w3vg8n) throw new Error('attribute equal must after attrName');zl_mi = M_b$fayt;
        }break;case '\x27':case '\x22':
        if (zl_mi === M_b$fayt || zl_mi === M_x5o) {
          if (zl_mi === M_x5o && (edq1['warning']('attribute value must after "="'), vg38nj = v8sw34['slice'](uqkd, kdq1u)), !(0x0 < (kdq1u = v8sw34['indexOf'](qt01y$, uqkd = kdq1u + 0x1)))) throw new Error('attribute value no end \'' + qt01y$ + '\' match');d9keru = v8sw34['slice'](uqkd, kdq1u)['replace'](/&#?\w+;/g, w28s46), bf7at['add'](vg38nj, d9keru, uqkd - 0x1), zl_mi = M_u9ek;
        } else {
          if (zl_mi != M__z7ph) throw new Error('attribute value must after "="');d9keru = v8sw34['slice'](uqkd, kdq1u)['replace'](/&#?\w+;/g, w28s46), bf7at['add'](vg38nj, d9keru, uqkd), edq1['warning']('attribute "' + vg38nj + '" missed start quot(' + qt01y$ + ')!!'), uqkd = kdq1u + 0x1, zl_mi = M_u9ek;
        }break;case '/':
        switch (zl_mi) {case M_yba7:
            bf7at['setTagName'](v8sw34['slice'](uqkd, kdq1u));case M_u9ek:case M_nvw4:case M_q10$y:
            zl_mi = M_q10$y, bf7at['closed'] = !0x0;case M__z7ph:case M_x5o:case M_w3vg8n:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return edq1['error']('unexpected end of input'), zl_mi == M_yba7 && bf7at['setTagName'](v8sw34['slice'](uqkd, kdq1u)), kdq1u;case '>':
        switch (zl_mi) {case M_yba7:
            bf7at['setTagName'](v8sw34['slice'](uqkd, kdq1u));case M_u9ek:case M_nvw4:case M_q10$y:
            break;case M__z7ph:case M_x5o:
            '/' === (d9keru = v8sw34['slice'](uqkd, kdq1u))['slice'](-0x1) && (bf7at['closed'] = !0x0, d9keru = d9keru['slice'](0x0, -0x1));case M_w3vg8n:
            zl_mi === M_w3vg8n && (d9keru = vg38nj), zl_mi == M__z7ph ? (edq1['warning']('attribute "' + d9keru + '" missed quot(")!!'), bf7at['add'](vg38nj, d9keru['replace'](/&#?\w+;/g, w28s46), uqkd)) : ('http://www.w3.org/1999/xhtml' === lzh_mi[''] && d9keru['match'](/^(?:disabled|checked|selected)$/i) || edq1['warning']('attribute "' + d9keru + '" missed value!! "' + d9keru + '" instead!!'), bf7at['add'](d9keru, d9keru, uqkd));break;case M_b$fayt:
            throw new Error('attribute value missed!!');}return kdq1u;case '\u0080':
        qt01y$ = '\x20';default:
        if (qt01y$ <= '\x20') switch (zl_mi) {case M_yba7:
            bf7at['setTagName'](v8sw34['slice'](uqkd, kdq1u)), zl_mi = M_nvw4;break;case M_x5o:
            vg38nj = v8sw34['slice'](uqkd, kdq1u), zl_mi = M_w3vg8n;break;case M__z7ph:
            var d9keru = v8sw34['slice'](uqkd, kdq1u)['replace'](/&#?\w+;/g, w28s46);edq1['warning']('attribute "' + d9keru + '" missed quot(")!!'), bf7at['add'](vg38nj, d9keru, uqkd);case M_u9ek:
            zl_mi = M_nvw4;} else switch (zl_mi) {case M_w3vg8n:
            bf7at['tagName'], 'http://www.w3.org/1999/xhtml' === lzh_mi[''] && vg38nj['match'](/^(?:disabled|checked|selected)$/i) || edq1['warning']('attribute "' + vg38nj + '" missed value!! "' + vg38nj + '" instead2!!'), bf7at['add'](vg38nj, vg38nj, uqkd), uqkd = kdq1u, zl_mi = M_x5o;break;case M_u9ek:
            edq1['warning']('attribute space is required"' + vg38nj + '\x22!!');case M_nvw4:
            zl_mi = M_x5o, uqkd = kdq1u;break;case M_b$fayt:
            zl_mi = M__z7ph, uqkd = kdq1u;break;case M_q10$y:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}kdq1u++;
  }
}function M_ib_h(rk2u, fayb$t, qtd$1) {
  for (var ur9k2e = rk2u['tagName'], p7fb = null, _mizph = rk2u['length']; _mizph--;) {
    var fhbpa7 = rk2u[_mizph],
        w83vn4 = fhbpa7['qName'],
        jxnog = fhbpa7['value'],
        r62e9;w83vn4 = 0x0 < (bft7ay = w83vn4['indexOf'](':')) ? (j3gox = fhbpa7['prefix'] = w83vn4['slice'](0x0, bft7ay), r62e9 = w83vn4['slice'](bft7ay + 0x1), 'xmlns' === j3gox && r62e9) : (j3gox = null, 'xmlns' === (r62e9 = w83vn4) && ''), fhbpa7['localName'] = r62e9, !0x1 !== w83vn4 && (null == p7fb && (p7fb = {}, M_t10a$(qtd$1, qtd$1 = {})), qtd$1[w83vn4] = p7fb[w83vn4] = jxnog, fhbpa7['uri'] = 'http://www.w3.org/2000/xmlns/', fayb$t['startPrefixMapping'](w83vn4, jxnog));
  }for (_mizph = rk2u['length']; _mizph--;) (j3gox = (fhbpa7 = rk2u[_mizph])['prefix']) && ('xml' === j3gox && (fhbpa7['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== j3gox && (fhbpa7['uri'] = qtd$1[j3gox || '']));var bft7ay;r62e9 = 0x0 < (bft7ay = ur9k2e['indexOf'](':')) ? (j3gox = rk2u['prefix'] = ur9k2e['slice'](0x0, bft7ay), rk2u['localName'] = ur9k2e['slice'](bft7ay + 0x1)) : (j3gox = null, rk2u['localName'] = ur9k2e);var w3s8v = rk2u['uri'] = qtd$1[j3gox || ''];if (fayb$t['startElement'](w3s8v, r62e9, ur9k2e, rk2u), !rk2u['closed']) return rk2u['currentNSMap'] = qtd$1, rk2u['localNSMap'] = p7fb, !0x0;if (fayb$t['endElement'](w3s8v, r62e9, ur9k2e), p7fb) {
    for (var j3gox in p7fb) fayb$t['endPrefixMapping'](j3gox);
  }
}function M_$1d0qt(g38vnw, fp7yab, s864v, hpabf, mhip_z) {
  if (/^(?:script|textarea)$/i['test'](s864v)) {
    var fahb7p = g38vnw['indexOf']('</' + s864v + '>', fp7yab),
        g38vnw = g38vnw['substring'](fp7yab + 0x1, fahb7p);if (/[&<]/['test'](g38vnw)) return (/^script$/i['test'](s864v) || (g38vnw = g38vnw['replace'](/&#?\w+;/g, hpabf)), mhip_z['characters'](g38vnw, 0x0, g38vnw['length']), fahb7p
    );
  }return fp7yab + 0x1;
}function M_y$t1(z_im, keudr9, ftb7ay, n8vwg3) {
  var b7hpf = n8vwg3[ftb7ay];return null == b7hpf && ((b7hpf = z_im['lastIndexOf']('</' + ftb7ay + '>')) < keudr9 && (b7hpf = z_im['lastIndexOf']('</' + ftb7ay)), n8vwg3[ftb7ay] = b7hpf), b7hpf < keudr9;
}function M_t10a$(hfb7ap, atfy) {
  for (var eqkd9u in hfb7ap) atfy[eqkd9u] = hfb7ap[eqkd9u];
}function M_jgocn(k1udq, w4nv83, $1d0kq, r6eu) {
  var k$d = k1udq['charAt'](w4nv83 + 0x2);if ('-' === k$d) return '-' !== k1udq['charAt'](w4nv83 + 0x3) ? -0x1 : w4nv83 < (eqkud9 = k1udq['indexOf']('-->', w4nv83 + 0x4)) ? ($1d0kq['comment'](k1udq, w4nv83 + 0x4, eqkud9 - w4nv83 - 0x4), eqkud9 + 0x3) : (r6eu['error']('Unclosed comment'), -0x1);if ('CDATA[' == k1udq['substr'](w4nv83 + 0x3, 0x6)) {
    var eqkud9 = k1udq['indexOf'](']]>', w4nv83 + 0x9);return $1d0kq['startCDATA'](), $1d0kq['characters'](k1udq, w4nv83 + 0x9, eqkud9 - w4nv83 - 0x9), $1d0kq['endCDATA'](), eqkud9 + 0x3;
  }k$d = M_hz_pi(k1udq, w4nv83), r6eu = k$d['length'];if (0x1 < r6eu && /!doctype/i['test'](k$d[0x0][0x0])) return eqkud9 = k$d[0x1][0x0], k1udq = 0x3 < r6eu && /^public$/i['test'](k$d[0x2][0x0]) && k$d[0x3][0x0], w4nv83 = 0x4 < r6eu && k$d[0x4][0x0], r6eu = k$d[r6eu - 0x1], ($1d0kq['startDTD'](eqkud9, k1udq && k1udq['replace'](/^(['"])(.*?)\1$/, '$2'), w4nv83 && w4nv83['replace'](/^(['"])(.*?)\1$/, '$2')), $1d0kq['endDTD'](), r6eu['index'] + r6eu[0x0]['length']);return -0x1;
}function M_ngjo3(ws8426, $1y0q, zlihm_) {
  var bp_hi = ws8426['indexOf']('?>', $1y0q);if (bp_hi) return $1y0q = ws8426['substring']($1y0q, bp_hi)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), $1y0q ? ($1y0q[0x0]['length'], zlihm_['processingInstruction']($1y0q[0x1], $1y0q[0x2]), bp_hi + 0x2) : -0x1;return -0x1;
}function M_i_pz7h() {}function M_s64r2w(njoxcg, jxcg5o) {
  return njoxcg['__proto__'] = jxcg5o, njoxcg;
}function M_hz_pi(goc5jx, tdq1) {
  var pbah7,
      n3jo = [],
      gxjocn = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (gxjocn['lastIndex'] = tdq1, gxjocn['exec'](goc5jx); pbah7 = gxjocn['exec'](goc5jx);) if (n3jo['push'](pbah7), pbah7[0x1]) return n3jo;
}var M_zihp_ = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    M_du1q = new RegExp('[\\-\\.0-9' + M_zihp_['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    M_xcjg5 = new RegExp('^' + M_zihp_['source'] + M_du1q['source'] + '*(?::' + M_zihp_['source'] + M_du1q['source'] + '*)?$'),
    M_yba7 = 0x0,
    M_x5o = 0x1,
    M_w3vg8n = 0x2,
    M_b$fayt = 0x3,
    M__z7ph = 0x4,
    M_u9ek = 0x5,
    M_nvw4 = 0x6,
    M_q10$y = 0x7;M_rue269['prototype'] = { 'parse': function (edukq1, mzp_h, bapfh) {
    var b7yf = this['domBuilder'];b7yf['startDocument'](), M_t10a$(mzp_h, mzp_h = {}), M_jvngx(edukq1, mzp_h, bapfh, b7yf, this['errorHandler']), b7yf['endDocument']();
  } }, M_i_pz7h['prototype'] = { 'setTagName': function (ker9u) {
    if (!M_xcjg5['test'](ker9u)) throw new Error('invalid tagName:' + ker9u);this['tagName'] = ker9u;
  }, 'add': function (mi_zlh, g3nxv, xojcg5) {
    if (!M_xcjg5['test'](mi_zlh)) throw new Error('invalid attribute:' + mi_zlh);this[this['length']++] = { 'qName': mi_zlh, 'value': g3nxv, 'offset': xojcg5 };
  }, 'length': 0x0, 'getLocalName': function (vwn4) {
    return this[vwn4]['localName'];
  }, 'getLocator': function (a10y$t) {
    return this[a10y$t]['locator'];
  }, 'getQName': function (gxo5) {
    return this[gxo5]['qName'];
  }, 'getURI': function (r9k2ue) {
    return this[r9k2ue]['uri'];
  }, 'getValue': function (jxgo5) {
    return this[jxgo5]['value'];
  } }, M_s64r2w({}, M_s64r2w['prototype']) instanceof M_s64r2w || (M_s64r2w = function (kdue1, _pihb) {
  function py7fb() {}for (_pihb in py7fb['prototype'] = _pihb, py7fb = new py7fb(), kdue1) py7fb[_pihb] = kdue1[_pihb];return py7fb;
}), exports['XMLReader'] = M_rue269;