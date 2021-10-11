var p = wx.$h;
function a_qfka2() {}function a_rw8(f$tjz, i$_mv, b7wdnp, crnw, om90) {
  function k62qf(akf26j) {
    var o_mi = akf26j['slice'](0x1, -0x1);return o_mi in b7wdnp ? b7wdnp[o_mi] : '#' === o_mi['charAt'](0x0) ? 0xffff < (o_mi = parseInt(o_mi['substr'](0x1)['replace']('x', '0x'))) ? (o_mi -= 0x10000, String['fromCharCode'](0xd800 + (o_mi >> 0xa), 0xdc00 + (0x3ff & o_mi))) : String['fromCharCode'](o_mi) : (om90['error']('entity not found:' + akf26j), akf26j);
  }function $zx_t1(cyg38r) {
    var sdc83r;aq2fk < cyg38r && (sdc83r = f$tjz['substring'](aq2fk, cyg38r)['replace'](/&#?\w+;/g, k62qf), drncw && ry83g(aq2fk), crnw['characters'](sdc83r, 0x0, cyg38r - aq2fk), aq2fk = cyg38r);
  }function ry83g(ftjk2z, rs8cd3) {
    for (; rwc <= ftjk2z && (rs8cd3 = _oi1['exec'](f$tjz));) fq62k = rs8cd3['index'], rwc = fq62k + rs8cd3[0x0]['length'], drncw['lineNumber']++;drncw['columnNumber'] = ftjk2z - fq62k + 0x1;
  }for (var fq62k = 0x0, rwc = 0x0, _oi1 = /.*(?:\r\n?|\n)|.*$/g, drncw = crnw['locator'], f2jtk = [{ 'currentNSMap': i$_mv }], t_x1i$ = {}, aq2fk = 0x0;;) {
    try {
      var iv95o = f$tjz['indexOf']('<', aq2fk),
          swpbnd,
          $ztx_;if (iv95o < 0x0) return void (f$tjz['substr'](aq2fk)['match'](/^\s*$/) || ($ztx_ = (swpbnd = crnw['doc'])['createTextNode'](f$tjz['substr'](aq2fk)), swpbnd['appendChild']($ztx_), crnw['currentElement'] = $ztx_));switch (aq2fk < iv95o && $zx_t1(iv95o), f$tjz['charAt'](iv95o + 0x1)) {case '/':
          var crsd38 = f$tjz['indexOf']('>', iv95o + 0x3),
              pn7eb = f$tjz['substring'](iv95o + 0x2, crsd38),
              rw8dcs = f2jtk['pop']();crsd38 < 0x0 ? (pn7eb = f$tjz['substring'](iv95o + 0x2)['replace'](/[\s<].*/, ''), om90['error']('end tag name: ' + pn7eb + ' is not complete:' + rw8dcs['tagName']), crsd38 = iv95o + 0x1 + pn7eb['length']) : pn7eb['match'](/\s</) && (pn7eb = pn7eb['replace'](/[\s<].*/, ''), om90['error']('end tag name: ' + pn7eb + ' maybe not complete'), crsd38 = iv95o + 0x1 + pn7eb['length']);var hak46 = rw8dcs['localNSMap'],
              txz2jf = rw8dcs['tagName'] == pn7eb;if (txz2jf || rw8dcs['tagName'] && rw8dcs['tagName']['toLowerCase']() == pn7eb['toLowerCase']()) {
            if (crnw['endElement'](rw8dcs['uri'], rw8dcs['localName'], pn7eb), hak46) {
              for (var y9g in hak46) crnw['endPrefixMapping'](y9g);
            }txz2jf || om90['fatalError']('end tag name: ' + pn7eb + ' is not match the current start tagName:' + rw8dcs['tagName']);
          } else f2jtk['push'](rw8dcs);crsd38++;break;case '?':
          drncw && ry83g(iv95o), crsd38 = a_vmoi1(f$tjz, iv95o, crnw);break;case '!':
          drncw && ry83g(iv95o), crsd38 = a_o90mv5(f$tjz, iv95o, crnw, om90);break;default:
          drncw && ry83g(iv95o);var nb7e = new a_zxtj1$(),
              i9ov5 = f2jtk[f2jtk['length'] - 0x1]['currentNSMap'],
              crsd38 = a_a2k6jf(f$tjz, iv95o, nb7e, i9ov5, k62qf, om90),
              gy8c30 = nb7e['length'];if (!nb7e['closed'] && a_mi1v$(f$tjz, crsd38, nb7e['tagName'], t_x1i$) && (nb7e['closed'] = !0x0, b7wdnp['nbsp'] || om90['warning']('unclosed xml attribute')), drncw && gy8c30) {
            for (var _1ixm = a_q64ah(drncw, {}), scd83r = 0x0; scd83r < gy8c30; scd83r++) {
              var c8y3sr = nb7e[scd83r];ry83g(c8y3sr['offset']), c8y3sr['locator'] = a_q64ah(drncw, {});
            }crnw['locator'] = _1ixm, a__m1oi(nb7e, crnw, i9ov5) && f2jtk['push'](nb7e), crnw['locator'] = drncw;
          } else a__m1oi(nb7e, crnw, i9ov5) && f2jtk['push'](nb7e);'http://www.w3.org/1999/xhtml' !== nb7e['uri'] || nb7e['closed'] ? crsd38++ : crsd38 = a_ws8rcd(f$tjz, crsd38, nb7e['tagName'], k62qf, crnw);}
    } catch (o9y5g0) {
      om90['error']('element parse error: ' + o9y5g0), crsd38 = -0x1;
    }aq2fk < crsd38 ? aq2fk = crsd38 : $zx_t1(Math['max'](iv95o, aq2fk) + 0x1);
  }
}function a_q64ah($1ixm_, h6aq4) {
  return h6aq4['lineNumber'] = $1ixm_['lineNumber'], h6aq4['columnNumber'] = $1ixm_['columnNumber'], h6aq4;
}function a_a2k6jf(_zt, n7webp, jztx1$, vo50g, ix_t$, wb7dpn) {
  for (var o95mv, wncdsr = ++n7webp, z$xtj1 = a_tx2fj;;) {
    var ak4 = _zt['charAt'](wncdsr);switch (ak4) {case '=':
        if (z$xtj1 === a__t$1ix) o95mv = _zt['slice'](n7webp, wncdsr), z$xtj1 = a_ov095;else {
          if (z$xtj1 !== a_q26) throw new Error('attribute equal must after attrName');z$xtj1 = a_ov095;
        }break;case '\x27':case '\x22':
        if (z$xtj1 === a_ov095 || z$xtj1 === a__t$1ix) {
          if (z$xtj1 === a__t$1ix && (wb7dpn['warning']('attribute value must after "="'), o95mv = _zt['slice'](n7webp, wncdsr)), !(0x0 < (wncdsr = _zt['indexOf'](ak4, n7webp = wncdsr + 0x1)))) throw new Error('attribute value no end \'' + ak4 + '\' match');k6fja = _zt['slice'](n7webp, wncdsr)['replace'](/&#?\w+;/g, ix_t$), jztx1$['add'](o95mv, k6fja, n7webp - 0x1), z$xtj1 = a_v1m_oi;
        } else {
          if (z$xtj1 != a_n7w) throw new Error('attribute value must after "="');k6fja = _zt['slice'](n7webp, wncdsr)['replace'](/&#?\w+;/g, ix_t$), jztx1$['add'](o95mv, k6fja, n7webp), wb7dpn['warning']('attribute "' + o95mv + '" missed start quot(' + ak4 + ')!!'), n7webp = wncdsr + 0x1, z$xtj1 = a_v1m_oi;
        }break;case '/':
        switch (z$xtj1) {case a_tx2fj:
            jztx1$['setTagName'](_zt['slice'](n7webp, wncdsr));case a_v1m_oi:case a_qha64:case a_f2xtj:
            z$xtj1 = a_f2xtj, jztx1$['closed'] = !0x0;case a_n7w:case a__t$1ix:case a_q26:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return wb7dpn['error']('unexpected end of input'), z$xtj1 == a_tx2fj && jztx1$['setTagName'](_zt['slice'](n7webp, wncdsr)), wncdsr;case '>':
        switch (z$xtj1) {case a_tx2fj:
            jztx1$['setTagName'](_zt['slice'](n7webp, wncdsr));case a_v1m_oi:case a_qha64:case a_f2xtj:
            break;case a_n7w:case a__t$1ix:
            '/' === (k6fja = _zt['slice'](n7webp, wncdsr))['slice'](-0x1) && (jztx1$['closed'] = !0x0, k6fja = k6fja['slice'](0x0, -0x1));case a_q26:
            z$xtj1 === a_q26 && (k6fja = o95mv), z$xtj1 == a_n7w ? (wb7dpn['warning']('attribute "' + k6fja + '" missed quot(")!!'), jztx1$['add'](o95mv, k6fja['replace'](/&#?\w+;/g, ix_t$), n7webp)) : ('http://www.w3.org/1999/xhtml' === vo50g[''] && k6fja['match'](/^(?:disabled|checked|selected)$/i) || wb7dpn['warning']('attribute "' + k6fja + '" missed value!! "' + k6fja + '" instead!!'), jztx1$['add'](k6fja, k6fja, n7webp));break;case a_ov095:
            throw new Error('attribute value missed!!');}return wncdsr;case '\u0080':
        ak4 = '\x20';default:
        if (ak4 <= '\x20') switch (z$xtj1) {case a_tx2fj:
            jztx1$['setTagName'](_zt['slice'](n7webp, wncdsr)), z$xtj1 = a_qha64;break;case a__t$1ix:
            o95mv = _zt['slice'](n7webp, wncdsr), z$xtj1 = a_q26;break;case a_n7w:
            var k6fja = _zt['slice'](n7webp, wncdsr)['replace'](/&#?\w+;/g, ix_t$);wb7dpn['warning']('attribute "' + k6fja + '" missed quot(")!!'), jztx1$['add'](o95mv, k6fja, n7webp);case a_v1m_oi:
            z$xtj1 = a_qha64;} else switch (z$xtj1) {case a_q26:
            jztx1$['tagName'], 'http://www.w3.org/1999/xhtml' === vo50g[''] && o95mv['match'](/^(?:disabled|checked|selected)$/i) || wb7dpn['warning']('attribute "' + o95mv + '" missed value!! "' + o95mv + '" instead2!!'), jztx1$['add'](o95mv, o95mv, n7webp), n7webp = wncdsr, z$xtj1 = a__t$1ix;break;case a_v1m_oi:
            wb7dpn['warning']('attribute space is required"' + o95mv + '\x22!!');case a_qha64:
            z$xtj1 = a__t$1ix, n7webp = wncdsr;break;case a_ov095:
            z$xtj1 = a_n7w, n7webp = wncdsr;break;case a_f2xtj:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}wncdsr++;
  }
}function a__m1oi(i1omv, sbpw, oivm_9) {
  for (var _v1m = i1omv['tagName'], m1$ix = null, zj62kf = i1omv['length']; zj62kf--;) {
    var bdnsrw = i1omv[zj62kf],
        c3sy = bdnsrw['qName'],
        z2tfxj = bdnsrw['value'],
        p7bnwe;c3sy = 0x0 < (v9_m = c3sy['indexOf'](':')) ? (m59v = bdnsrw['prefix'] = c3sy['slice'](0x0, v9_m), p7bnwe = c3sy['slice'](v9_m + 0x1), 'xmlns' === m59v && p7bnwe) : (m59v = null, 'xmlns' === (p7bnwe = c3sy) && ''), bdnsrw['localName'] = p7bnwe, !0x1 !== c3sy && (null == m1$ix && (m1$ix = {}, a_fzj$x(oivm_9, oivm_9 = {})), oivm_9[c3sy] = m1$ix[c3sy] = z2tfxj, bdnsrw['uri'] = 'http://www.w3.org/2000/xmlns/', sbpw['startPrefixMapping'](c3sy, z2tfxj));
  }for (zj62kf = i1omv['length']; zj62kf--;) (m59v = (bdnsrw = i1omv[zj62kf])['prefix']) && ('xml' === m59v && (bdnsrw['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== m59v && (bdnsrw['uri'] = oivm_9[m59v || '']));var v9_m;p7bnwe = 0x0 < (v9_m = _v1m['indexOf'](':')) ? (m59v = i1omv['prefix'] = _v1m['slice'](0x0, v9_m), i1omv['localName'] = _v1m['slice'](v9_m + 0x1)) : (m59v = null, i1omv['localName'] = _v1m);var syc8 = i1omv['uri'] = oivm_9[m59v || ''];if (sbpw['startElement'](syc8, p7bnwe, _v1m, i1omv), !i1omv['closed']) return i1omv['currentNSMap'] = oivm_9, i1omv['localNSMap'] = m1$ix, !0x0;if (sbpw['endElement'](syc8, p7bnwe, _v1m), m1$ix) {
    for (var m59v in m1$ix) sbpw['endPrefixMapping'](m59v);
  }
}function a_ws8rcd($imx_, m590, sndrcw, v905o, g8r3c) {
  if (/^(?:script|textarea)$/i['test'](sndrcw)) {
    var ivm1o = $imx_['indexOf']('</' + sndrcw + '>', m590),
        $imx_ = $imx_['substring'](m590 + 0x1, ivm1o);if (/[&<]/['test']($imx_)) return (/^script$/i['test'](sndrcw) || ($imx_ = $imx_['replace'](/&#?\w+;/g, v905o)), g8r3c['characters']($imx_, 0x0, $imx_['length']), ivm1o
    );
  }return m590 + 0x1;
}function a_mi1v$(grc8y3, cdswr, k2zft, _1mx) {
  var g9530y = _1mx[k2zft];return null == g9530y && ((g9530y = grc8y3['lastIndexOf']('</' + k2zft + '>')) < cdswr && (g9530y = grc8y3['lastIndexOf']('</' + k2zft)), _1mx[k2zft] = g9530y), g9530y < cdswr;
}function a_fzj$x(m5voi9, akfq26) {
  for (var iv1_om in m5voi9) akfq26[iv1_om] = m5voi9[iv1_om];
}function a_o90mv5(a6fq, fkzj, g38ryc, f$zx) {
  var a426 = a6fq['charAt'](fkzj + 0x2);if ('-' === a426) return '-' !== a6fq['charAt'](fkzj + 0x3) ? -0x1 : fkzj < (a6fkj2 = a6fq['indexOf']('-->', fkzj + 0x4)) ? (g38ryc['comment'](a6fq, fkzj + 0x4, a6fkj2 - fkzj - 0x4), a6fkj2 + 0x3) : (f$zx['error']('Unclosed comment'), -0x1);if ('CDATA[' == a6fq['substr'](fkzj + 0x3, 0x6)) {
    var a6fkj2 = a6fq['indexOf'](']]>', fkzj + 0x9);return g38ryc['startCDATA'](), g38ryc['characters'](a6fq, fkzj + 0x9, a6fkj2 - fkzj - 0x9), g38ryc['endCDATA'](), a6fkj2 + 0x3;
  }a426 = a__i1t$(a6fq, fkzj), f$zx = a426['length'];if (0x1 < f$zx && /!doctype/i['test'](a426[0x0][0x0])) return a6fkj2 = a426[0x1][0x0], a6fq = 0x3 < f$zx && /^public$/i['test'](a426[0x2][0x0]) && a426[0x3][0x0], fkzj = 0x4 < f$zx && a426[0x4][0x0], f$zx = a426[f$zx - 0x1], (g38ryc['startDTD'](a6fkj2, a6fq && a6fq['replace'](/^(['"])(.*?)\1$/, '$2'), fkzj && fkzj['replace'](/^(['"])(.*?)\1$/, '$2')), g38ryc['endDTD'](), f$zx['index'] + f$zx[0x0]['length']);return -0x1;
}function a_vmoi1(r8dswc, jtx$fz, wdrcsn) {
  var n7wpdb = r8dswc['indexOf']('?>', jtx$fz);if (n7wpdb) return jtx$fz = r8dswc['substring'](jtx$fz, n7wpdb)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), jtx$fz ? (jtx$fz[0x0]['length'], wdrcsn['processingInstruction'](jtx$fz[0x1], jtx$fz[0x2]), n7wpdb + 0x2) : -0x1;return -0x1;
}function a_zxtj1$() {}function a_pbdnw7(x1_i$, z_1$t) {
  return x1_i$['__proto__'] = z_1$t, x1_i$;
}function a__i1t$(fjz2k6, hakq64) {
  var cwrds8,
      vi1_om = [],
      $i1_mx = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for ($i1_mx['lastIndex'] = hakq64, $i1_mx['exec'](fjz2k6); cwrds8 = $i1_mx['exec'](fjz2k6);) if (vi1_om['push'](cwrds8), cwrds8[0x1]) return vi1_om;
}var a_m1_$iv = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    a_ja2 = new RegExp('[\\-\\.0-9' + a_m1_$iv['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    a__1omvi = new RegExp('^' + a_m1_$iv['source'] + a_ja2['source'] + '*(?::' + a_m1_$iv['source'] + a_ja2['source'] + '*)?$'),
    a_tx2fj = 0x0,
    a__t$1ix = 0x1,
    a_q26 = 0x2,
    a_ov095 = 0x3,
    a_n7w = 0x4,
    a_v1m_oi = 0x5,
    a_qha64 = 0x6,
    a_f2xtj = 0x7;a_qfka2['prototype'] = { 'parse': function (zjx2, nwdbps, cwd8sr) {
    var m_$x1 = this['domBuilder'];m_$x1['startDocument'](), a_fzj$x(nwdbps, nwdbps = {}), a_rw8(zjx2, nwdbps, cwd8sr, m_$x1, this['errorHandler']), m_$x1['endDocument']();
  } }, a_zxtj1$['prototype'] = { 'setTagName': function (npbl7e) {
    if (!a__1omvi['test'](npbl7e)) throw new Error('invalid tagName:' + npbl7e);this['tagName'] = npbl7e;
  }, 'add': function (z2tfjx, wrbs, ft$z) {
    if (!a__1omvi['test'](z2tfjx)) throw new Error('invalid attribute:' + z2tfjx);this[this['length']++] = { 'qName': z2tfjx, 'value': wrbs, 'offset': ft$z };
  }, 'length': 0x0, 'getLocalName': function (lpn7b) {
    return this[lpn7b]['localName'];
  }, 'getLocator': function (drbswn) {
    return this[drbswn]['locator'];
  }, 'getQName': function (wscnd) {
    return this[wscnd]['qName'];
  }, 'getURI': function (v5m9oi) {
    return this[v5m9oi]['uri'];
  }, 'getValue': function (ble7pn) {
    return this[ble7pn]['value'];
  } }, a_pbdnw7({}, a_pbdnw7['prototype']) instanceof a_pbdnw7 || (a_pbdnw7 = function (r8cwds, vo5g90) {
  function fztjx() {}for (vo5g90 in fztjx['prototype'] = vo5g90, fztjx = new fztjx(), r8cwds) fztjx[vo5g90] = r8cwds[vo5g90];return fztjx;
}), exports['XMLReader'] = a_qfka2;