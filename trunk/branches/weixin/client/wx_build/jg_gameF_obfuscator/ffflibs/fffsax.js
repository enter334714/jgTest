var k = wx.$f;
function fy2s5d() {}function fy52dsp(e0q, mbg_rj, e9, jmr_ga, grb_7m) {
  function y582pd(e4k) {
    var fb7uiw = e4k['slice'](0x1, -0x1);return fb7uiw in e9 ? e9[fb7uiw] : '#' === fb7uiw['charAt'](0x0) ? 0xffff < (fb7uiw = parseInt(fb7uiw['substr'](0x1)['replace']('x', '0x'))) ? (fb7uiw -= 0x10000, String['fromCharCode'](0xd800 + (fb7uiw >> 0xa), 0xdc00 + (0x3ff & fb7uiw))) : String['fromCharCode'](fb7uiw) : (grb_7m['error']('entity not found:' + e4k), e4k);
  }function zv43c(zajv) {
    var r_jgam;fui7 < zajv && (r_jgam = e0q['substring'](fui7, zajv)['replace'](/&#?\w+;/g, y582pd), kq4c6e && k4eqc6(fui7), jmr_ga['characters'](r_jgam, 0x0, zajv - fui7), fui7 = zajv);
  }function k4eqc6(gma_jr, _armgj) {
    for (; qkx01 <= gma_jr && (_armgj = tyos5p['exec'](e0q));) jg_br = _armgj['index'], qkx01 = jg_br + _armgj[0x0]['length'], kq4c6e['lineNumber']++;kq4c6e['columnNumber'] = gma_jr - jg_br + 0x1;
  }for (var jg_br = 0x0, qkx01 = 0x0, tyos5p = /.*(?:\r\n?|\n)|.*$/g, kq4c6e = jmr_ga['locator'], ecz4 = [{ 'currentNSMap': mbg_rj }], os1xt0 = {}, fui7 = 0x0;;) {
    try {
      var ysp2d5 = e0q['indexOf']('<', fui7),
          $cz34,
          k0xq91;if (ysp2d5 < 0x0) return void (e0q['substr'](fui7)['match'](/^\s*$/) || (k0xq91 = ($cz34 = jmr_ga['doc'])['createTextNode'](e0q['substr'](fui7)), $cz34['appendChild'](k0xq91), jmr_ga['currentElement'] = k0xq91));switch (fui7 < ysp2d5 && zv43c(ysp2d5), e0q['charAt'](ysp2d5 + 0x1)) {case '/':
          var g_rj = e0q['indexOf']('>', ysp2d5 + 0x3),
              jgrm = e0q['substring'](ysp2d5 + 0x2, g_rj),
              kq690e = ecz4['pop']();g_rj < 0x0 ? (jgrm = e0q['substring'](ysp2d5 + 0x2)['replace'](/[\s<].*/, ''), grb_7m['error']('end tag name: ' + jgrm + ' is not complete:' + kq690e['tagName']), g_rj = ysp2d5 + 0x1 + jgrm['length']) : jgrm['match'](/\s</) && (jgrm = jgrm['replace'](/[\s<].*/, ''), grb_7m['error']('end tag name: ' + jgrm + ' maybe not complete'), g_rj = ysp2d5 + 0x1 + jgrm['length']);var kv6e4 = kq690e['localNSMap'],
              a$zjv = kq690e['tagName'] == jgrm;if (a$zjv || kq690e['tagName'] && kq690e['tagName']['toLowerCase']() == jgrm['toLowerCase']()) {
            if (jmr_ga['endElement'](kq690e['uri'], kq690e['localName'], jgrm), kv6e4) {
              for (var za3$jv in kv6e4) jmr_ga['endPrefixMapping'](za3$jv);
            }a$zjv || grb_7m['fatalError']('end tag name: ' + jgrm + ' is not match the current start tagName:' + kq690e['tagName']);
          } else ecz4['push'](kq690e);g_rj++;break;case '?':
          kq4c6e && k4eqc6(ysp2d5), g_rj = fk6cv(e0q, ysp2d5, jmr_ga);break;case '!':
          kq4c6e && k4eqc6(ysp2d5), g_rj = fcv4k6e(e0q, ysp2d5, jmr_ga, grb_7m);break;default:
          kq4c6e && k4eqc6(ysp2d5);var ra_$jg = new finwf7u(),
              _a$3 = ecz4[ecz4['length'] - 0x1]['currentNSMap'],
              g_rj = ft90xq(e0q, ysp2d5, ra_$jg, _a$3, y582pd, grb_7m),
              $arj_3 = ra_$jg['length'];if (!ra_$jg['closed'] && fja_$gr(e0q, g_rj, ra_$jg['tagName'], os1xt0) && (ra_$jg['closed'] = !0x0, e9['nbsp'] || grb_7m['warning']('unclosed xml attribute')), kq4c6e && $arj_3) {
            for (var bi7um = fnuwif7(kq4c6e, {}), ifbw7 = 0x0; ifbw7 < $arj_3; ifbw7++) {
              var x901qk = ra_$jg[ifbw7];k4eqc6(x901qk['offset']), x901qk['locator'] = fnuwif7(kq4c6e, {});
            }jmr_ga['locator'] = bi7um, fys2p5(ra_$jg, jmr_ga, _a$3) && ecz4['push'](ra_$jg), jmr_ga['locator'] = kq4c6e;
          } else fys2p5(ra_$jg, jmr_ga, _a$3) && ecz4['push'](ra_$jg);'http://www.w3.org/1999/xhtml' !== ra_$jg['uri'] || ra_$jg['closed'] ? g_rj++ : g_rj = fqk10(e0q, g_rj, ra_$jg['tagName'], y582pd, jmr_ga);}
    } catch (jra$_) {
      grb_7m['error']('element parse error: ' + jra$_), g_rj = -0x1;
    }fui7 < g_rj ? fui7 = g_rj : zv43c(Math['max'](ysp2d5, fui7) + 0x1);
  }
}function fnuwif7(ui7bm, e4cqk) {
  return e4cqk['lineNumber'] = ui7bm['lineNumber'], e4cqk['columnNumber'] = ui7bm['columnNumber'], e4cqk;
}function ft90xq(_rgjam, $_3ajr, d2hp8, $_z, mrja, jra_$g) {
  for (var a$j3_r, m_rj = ++$_3ajr, amr_gj = fnuwf;;) {
    var wu7if = _rgjam['charAt'](m_rj);switch (wu7if) {case '=':
        if (amr_gj === fp5o) a$j3_r = _rgjam['slice']($_3ajr, m_rj), amr_gj = fm_g7b;else {
          if (amr_gj !== fib7fum) throw new Error('attribute equal must after attrName');amr_gj = fm_g7b;
        }break;case '\x27':case '\x22':
        if (amr_gj === fm_g7b || amr_gj === fp5o) {
          if (amr_gj === fp5o && (jra_$g['warning']('attribute value must after "="'), a$j3_r = _rgjam['slice']($_3ajr, m_rj)), !(0x0 < (m_rj = _rgjam['indexOf'](wu7if, $_3ajr = m_rj + 0x1)))) throw new Error('attribute value no end \'' + wu7if + '\' match');rbg_m7 = _rgjam['slice']($_3ajr, m_rj)['replace'](/&#?\w+;/g, mrja), d2hp8['add'](a$j3_r, rbg_m7, $_3ajr - 0x1), amr_gj = fja$r_;
        } else {
          if (amr_gj != fuw7b) throw new Error('attribute value must after "="');rbg_m7 = _rgjam['slice']($_3ajr, m_rj)['replace'](/&#?\w+;/g, mrja), d2hp8['add'](a$j3_r, rbg_m7, $_3ajr), jra_$g['warning']('attribute "' + a$j3_r + '" missed start quot(' + wu7if + ')!!'), $_3ajr = m_rj + 0x1, amr_gj = fja$r_;
        }break;case '/':
        switch (amr_gj) {case fnuwf:
            d2hp8['setTagName'](_rgjam['slice']($_3ajr, m_rj));case fja$r_:case fqce46:case fgbrm7_:
            amr_gj = fgbrm7_, d2hp8['closed'] = !0x0;case fuw7b:case fp5o:case fib7fum:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return jra_$g['error']('unexpected end of input'), amr_gj == fnuwf && d2hp8['setTagName'](_rgjam['slice']($_3ajr, m_rj)), m_rj;case '>':
        switch (amr_gj) {case fnuwf:
            d2hp8['setTagName'](_rgjam['slice']($_3ajr, m_rj));case fja$r_:case fqce46:case fgbrm7_:
            break;case fuw7b:case fp5o:
            '/' === (rbg_m7 = _rgjam['slice']($_3ajr, m_rj))['slice'](-0x1) && (d2hp8['closed'] = !0x0, rbg_m7 = rbg_m7['slice'](0x0, -0x1));case fib7fum:
            amr_gj === fib7fum && (rbg_m7 = a$j3_r), amr_gj == fuw7b ? (jra_$g['warning']('attribute "' + rbg_m7 + '" missed quot(")!!'), d2hp8['add'](a$j3_r, rbg_m7['replace'](/&#?\w+;/g, mrja), $_3ajr)) : ('http://www.w3.org/1999/xhtml' === $_z[''] && rbg_m7['match'](/^(?:disabled|checked|selected)$/i) || jra_$g['warning']('attribute "' + rbg_m7 + '" missed value!! "' + rbg_m7 + '" instead!!'), d2hp8['add'](rbg_m7, rbg_m7, $_3ajr));break;case fm_g7b:
            throw new Error('attribute value missed!!');}return m_rj;case '\u0080':
        wu7if = '\x20';default:
        if (wu7if <= '\x20') switch (amr_gj) {case fnuwf:
            d2hp8['setTagName'](_rgjam['slice']($_3ajr, m_rj)), amr_gj = fqce46;break;case fp5o:
            a$j3_r = _rgjam['slice']($_3ajr, m_rj), amr_gj = fib7fum;break;case fuw7b:
            var rbg_m7 = _rgjam['slice']($_3ajr, m_rj)['replace'](/&#?\w+;/g, mrja);jra_$g['warning']('attribute "' + rbg_m7 + '" missed quot(")!!'), d2hp8['add'](a$j3_r, rbg_m7, $_3ajr);case fja$r_:
            amr_gj = fqce46;} else switch (amr_gj) {case fib7fum:
            d2hp8['tagName'], 'http://www.w3.org/1999/xhtml' === $_z[''] && a$j3_r['match'](/^(?:disabled|checked|selected)$/i) || jra_$g['warning']('attribute "' + a$j3_r + '" missed value!! "' + a$j3_r + '" instead2!!'), d2hp8['add'](a$j3_r, a$j3_r, $_3ajr), $_3ajr = m_rj, amr_gj = fp5o;break;case fja$r_:
            jra_$g['warning']('attribute space is required"' + a$j3_r + '\x22!!');case fqce46:
            amr_gj = fp5o, $_3ajr = m_rj;break;case fm_g7b:
            amr_gj = fuw7b, $_3ajr = m_rj;break;case fgbrm7_:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}m_rj++;
  }
}function fys2p5(_$jar, nu7w, s5dop) {
  for (var e46vz = _$jar['tagName'], fmubi7 = null, jmbrg = _$jar['length']; jmbrg--;) {
    var tsxy = _$jar[jmbrg],
        v6cz4e = tsxy['qName'],
        hpd8 = tsxy['value'],
        rgb_7;v6cz4e = 0x0 < (oxtys = v6cz4e['indexOf'](':')) ? ($_jaz = tsxy['prefix'] = v6cz4e['slice'](0x0, oxtys), rgb_7 = v6cz4e['slice'](oxtys + 0x1), 'xmlns' === $_jaz && rgb_7) : ($_jaz = null, 'xmlns' === (rgb_7 = v6cz4e) && ''), tsxy['localName'] = rgb_7, !0x1 !== v6cz4e && (null == fmubi7 && (fmubi7 = {}, fi7ufwn(s5dop, s5dop = {})), s5dop[v6cz4e] = fmubi7[v6cz4e] = hpd8, tsxy['uri'] = 'http://www.w3.org/2000/xmlns/', nu7w['startPrefixMapping'](v6cz4e, hpd8));
  }for (jmbrg = _$jar['length']; jmbrg--;) ($_jaz = (tsxy = _$jar[jmbrg])['prefix']) && ('xml' === $_jaz && (tsxy['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== $_jaz && (tsxy['uri'] = s5dop[$_jaz || '']));var oxtys;rgb_7 = 0x0 < (oxtys = e46vz['indexOf'](':')) ? ($_jaz = _$jar['prefix'] = e46vz['slice'](0x0, oxtys), _$jar['localName'] = e46vz['slice'](oxtys + 0x1)) : ($_jaz = null, _$jar['localName'] = e46vz);var q609kx = _$jar['uri'] = s5dop[$_jaz || ''];if (nu7w['startElement'](q609kx, rgb_7, e46vz, _$jar), !_$jar['closed']) return _$jar['currentNSMap'] = s5dop, _$jar['localNSMap'] = fmubi7, !0x0;if (nu7w['endElement'](q609kx, rgb_7, e46vz), fmubi7) {
    for (var $_jaz in fmubi7) nu7w['endPrefixMapping']($_jaz);
  }
}function fqk10(typ, u7inwf, brjg_m, p5y2s, kceq4) {
  if (/^(?:script|textarea)$/i['test'](brjg_m)) {
    var ox0t1 = typ['indexOf']('</' + brjg_m + '>', u7inwf),
        typ = typ['substring'](u7inwf + 0x1, ox0t1);if (/[&<]/['test'](typ)) return (/^script$/i['test'](brjg_m) || (typ = typ['replace'](/&#?\w+;/g, p5y2s)), kceq4['characters'](typ, 0x0, typ['length']), ox0t1
    );
  }return u7inwf + 0x1;
}function fja_$gr(r$_3aj, cke64v, fu7im, rmug7b) {
  var d58y2 = rmug7b[fu7im];return null == d58y2 && ((d58y2 = r$_3aj['lastIndexOf']('</' + fu7im + '>')) < cke64v && (d58y2 = r$_3aj['lastIndexOf']('</' + fu7im)), rmug7b[fu7im] = d58y2), d58y2 < cke64v;
}function fi7ufwn(fwin7u, _aj3r) {
  for (var ox1ty in fwin7u) _aj3r[ox1ty] = fwin7u[ox1ty];
}function fcv4k6e(bmif, $jr3_a, m7ubgr, dph52) {
  var avcz = bmif['charAt']($jr3_a + 0x2);if ('-' === avcz) return '-' !== bmif['charAt']($jr3_a + 0x3) ? -0x1 : $jr3_a < (_3ajz$ = bmif['indexOf']('-->', $jr3_a + 0x4)) ? (m7ubgr['comment'](bmif, $jr3_a + 0x4, _3ajz$ - $jr3_a - 0x4), _3ajz$ + 0x3) : (dph52['error']('Unclosed comment'), -0x1);if ('CDATA[' == bmif['substr']($jr3_a + 0x3, 0x6)) {
    var _3ajz$ = bmif['indexOf'](']]>', $jr3_a + 0x9);return m7ubgr['startCDATA'](), m7ubgr['characters'](bmif, $jr3_a + 0x9, _3ajz$ - $jr3_a - 0x9), m7ubgr['endCDATA'](), _3ajz$ + 0x3;
  }avcz = fa3$jzv(bmif, $jr3_a), dph52 = avcz['length'];if (0x1 < dph52 && /!doctype/i['test'](avcz[0x0][0x0])) return _3ajz$ = avcz[0x1][0x0], bmif = 0x3 < dph52 && /^public$/i['test'](avcz[0x2][0x0]) && avcz[0x3][0x0], $jr3_a = 0x4 < dph52 && avcz[0x4][0x0], dph52 = avcz[dph52 - 0x1], (m7ubgr['startDTD'](_3ajz$, bmif && bmif['replace'](/^(['"])(.*?)\1$/, '$2'), $jr3_a && $jr3_a['replace'](/^(['"])(.*?)\1$/, '$2')), m7ubgr['endDTD'](), dph52['index'] + dph52[0x0]['length']);return -0x1;
}function fk6cv(o0xst1, tysp5, o9x1t0) {
  var grbm_j = o0xst1['indexOf']('?>', tysp5);if (grbm_j) return tysp5 = o0xst1['substring'](tysp5, grbm_j)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), tysp5 ? (tysp5[0x0]['length'], o9x1t0['processingInstruction'](tysp5[0x1], tysp5[0x2]), grbm_j + 0x2) : -0x1;return -0x1;
}function finwf7u() {}function frm7bg(e64k9, ys5pdo) {
  return e64k9['__proto__'] = ys5pdo, e64k9;
}function fa3$jzv(cz3$4, qx01) {
  var y28pd,
      _g$ajr = [],
      ru7m = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (ru7m['lastIndex'] = qx01, ru7m['exec'](cz3$4); y28pd = ru7m['exec'](cz3$4);) if (_g$ajr['push'](y28pd), y28pd[0x1]) return _g$ajr;
}var ftypo = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    fg_rjmb = new RegExp('[\\-\\.0-9' + ftypo['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    fez6v4c = new RegExp('^' + ftypo['source'] + fg_rjmb['source'] + '*(?::' + ftypo['source'] + fg_rjmb['source'] + '*)?$'),
    fnuwf = 0x0,
    fp5o = 0x1,
    fib7fum = 0x2,
    fm_g7b = 0x3,
    fuw7b = 0x4,
    fja$r_ = 0x5,
    fqce46 = 0x6,
    fgbrm7_ = 0x7;fy2s5d['prototype'] = { 'parse': function (pot5, $34zcv, s5otyp) {
    var xk1q09 = this['domBuilder'];xk1q09['startDocument'](), fi7ufwn($34zcv, $34zcv = {}), fy52dsp(pot5, $34zcv, s5otyp, xk1q09, this['errorHandler']), xk1q09['endDocument']();
  } }, finwf7u['prototype'] = { 'setTagName': function (gbmu) {
    if (!fez6v4c['test'](gbmu)) throw new Error('invalid tagName:' + gbmu);this['tagName'] = gbmu;
  }, 'add': function (g$a, xyt1o, _rmgb7) {
    if (!fez6v4c['test'](g$a)) throw new Error('invalid attribute:' + g$a);this[this['length']++] = { 'qName': g$a, 'value': xyt1o, 'offset': _rmgb7 };
  }, 'length': 0x0, 'getLocalName': function (mrgj_) {
    return this[mrgj_]['localName'];
  }, 'getLocator': function (vec46k) {
    return this[vec46k]['locator'];
  }, 'getQName': function (s52dy) {
    return this[s52dy]['qName'];
  }, 'getURI': function (dysp2) {
    return this[dysp2]['uri'];
  }, 'getValue': function (v3zc$4) {
    return this[v3zc$4]['value'];
  } }, frm7bg({}, frm7bg['prototype']) instanceof frm7bg || (frm7bg = function (e46kq9, i7bfum) {
  function ps5d() {}for (i7bfum in ps5d['prototype'] = i7bfum, ps5d = new ps5d(), e46kq9) ps5d[i7bfum] = e46kq9[i7bfum];return ps5d;
}), exports['XMLReader'] = fy2s5d;