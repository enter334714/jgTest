var u = wx.$x;
function xva76k5() {}function xeq$l83(lvk76a, ijy2hc, du54o, akv4f, fkv4) {
  function $eq8(wo1u) {
    if (wo1u > 0xffff) {
      wo1u -= 0x10000;var mtbzn = 0xd800 + (wo1u >> 0xa),
          re$ms = 0xdc00 + (0x3ff & wo1u);return String['fromCharCode'](mtbzn, re$ms);
    }return String['fromCharCode'](wo1u);
  }function izbntx(uw19p0) {
    var _8eq3 = uw19p0['slice'](0x1, -0x1);return _8eq3 in du54o ? du54o[_8eq3] : '#' === _8eq3['charAt'](0x0) ? $eq8(parseInt(_8eq3['substr'](0x1)['replace']('x', '0x'))) : (fkv4['error']('entity not found:' + uw19p0), uw19p0);
  }function av7(do0u1w) {
    if (do0u1w > k5fd4a) {
      var dofk = lvk76a['substring'](k5fd4a, do0u1w)['replace'](/&#?\w+;/g, izbntx);yibhxt && ibtxyn(k5fd4a), akv4f['characters'](dofk, 0x0, do0u1w - k5fd4a), k5fd4a = do0u1w;
    }
  }function ibtxyn(a7l8v, jicyh) {
    for (; a7l8v >= pow01 && (jicyh = $q3e_8['exec'](lvk76a));) f45k = jicyh['index'], pow01 = f45k + jicyh[0x0]['length'], yibhxt['lineNumber']++;yibhxt['columnNumber'] = a7l8v - f45k + 0x1;
  }for (var f45k = 0x0, pow01 = 0x0, $q3e_8 = /.*(?:\r\n?|\n)|.*$/g, yibhxt = akv4f['locator'], fkad54 = [{ 'currentNSMap': ijy2hc }], d1u0 = {}, k5fd4a = 0x0;;) {
    try {
      var q_$e3 = lvk76a['indexOf']('<', k5fd4a);if (0x0 > q_$e3) {
        if (!lvk76a['substr'](k5fd4a)['match'](/^\s*$/)) {
          var mnzr_s = akv4f['doc'],
              r_s$mz = mnzr_s['createTextNode'](lvk76a['substr'](k5fd4a));mnzr_s['appendChild'](r_s$mz), akv4f['currentElement'] = r_s$mz;
        }return;
      }switch (q_$e3 > k5fd4a && av7(q_$e3), lvk76a['charAt'](q_$e3 + 0x1)) {case '/':
          var jci2 = lvk76a['indexOf']('>', q_$e3 + 0x3),
              s_nrzm = lvk76a['substring'](q_$e3 + 0x2, jci2),
              zsbtm = fkad54['pop']();0x0 > jci2 ? (s_nrzm = lvk76a['substring'](q_$e3 + 0x2)['replace'](/[\s<].*/, ''), fkv4['error']('end tag name: ' + s_nrzm + ' is not complete:' + zsbtm['tagName']), jci2 = q_$e3 + 0x1 + s_nrzm['length']) : s_nrzm['match'](/\s</) && (s_nrzm = s_nrzm['replace'](/[\s<].*/, ''), fkv4['error']('end tag name: ' + s_nrzm + ' maybe not complete'), jci2 = q_$e3 + 0x1 + s_nrzm['length']);var xiyth2 = zsbtm['localNSMap'],
              p09w1 = zsbtm['tagName'] == s_nrzm,
              wp1g0 = p09w1 || zsbtm['tagName'] && zsbtm['tagName']['toLowerCase']() == s_nrzm['toLowerCase']();if (wp1g0) {
            if (akv4f['endElement'](zsbtm['uri'], zsbtm['localName'], s_nrzm), xiyth2) {
              for (var r3$_q in xiyth2) akv4f['endPrefixMapping'](r3$_q);
            }p09w1 || fkv4['fatalError']('end tag name: ' + s_nrzm + ' is not match the current start tagName:' + zsbtm['tagName']);
          } else fkad54['push'](zsbtm);jci2++;break;case '?':
          yibhxt && ibtxyn(q_$e3), jci2 = xhcyxi2(lvk76a, q_$e3, akv4f);break;case '!':
          yibhxt && ibtxyn(q_$e3), jci2 = xnbmts(lvk76a, q_$e3, akv4f, fkv4);break;default:
          yibhxt && ibtxyn(q_$e3);var s_mz$ = new x_$msre(),
              sbmrn = fkad54[fkad54['length'] - 0x1]['currentNSMap'],
              jci2 = x$s_mz(lvk76a, q_$e3, s_mz$, sbmrn, izbntx, fkv4),
              owu14 = s_mz$['length'];if (!s_mz$['closed'] && xzbrmns(lvk76a, jci2, s_mz$['tagName'], d1u0) && (s_mz$['closed'] = !0x0, du54o['nbsp'] || fkv4['warning']('unclosed xml attribute')), yibhxt && owu14) {
            for (var _ers$m = xhixyc(yibhxt, {}), p10ow = 0x0; owu14 > p10ow; p10ow++) {
              var po10uw = s_mz$[p10ow];ibtxyn(po10uw['offset']), po10uw['locator'] = xhixyc(yibhxt, {});
            }akv4f['locator'] = _ers$m, xv67ak(s_mz$, akv4f, sbmrn) && fkad54['push'](s_mz$), akv4f['locator'] = yibhxt;
          } else xv67ak(s_mz$, akv4f, sbmrn) && fkad54['push'](s_mz$);'http://www.w3.org/1999/xhtml' !== s_mz$['uri'] || s_mz$['closed'] ? jci2++ : jci2 = xu1wd4o(lvk76a, jci2, s_mz$['tagName'], izbntx, akv4f);}
    } catch (l8qe) {
      fkv4['error']('element parse error: ' + l8qe), jci2 = -0x1;
    }jci2 > k5fd4a ? k5fd4a = jci2 : av7(Math['max'](q_$e3, k5fd4a) + 0x1);
  }
}function xhixyc(xmzb, a7v5k6) {
  return a7v5k6['lineNumber'] = xmzb['lineNumber'], a7v5k6['columnNumber'] = xmzb['columnNumber'], a7v5k6;
}function x$s_mz(nitbyx, yxtbh, rq_$e, l3786v, chxyi, ji2yhc) {
  for (var vfk45a, zts, $38qle = ++yxtbh, zmbtns = xj2h;;) {
    var xt2iy = nitbyx['charAt']($38qle);switch (xt2iy) {case '=':
        if (zmbtns === xfou1d) vfk45a = nitbyx['slice'](yxtbh, $38qle), zmbtns = xi2ty;else {
          if (zmbtns !== xhxyic2) throw new Error('attribute equal must after attrName');zmbtns = xi2ty;
        }break;case '\x27':case '\x22':
        if (zmbtns === xi2ty || zmbtns === xfou1d) {
          if (zmbtns === xfou1d && (ji2yhc['warning']('attribute value must after "="'), vfk45a = nitbyx['slice'](yxtbh, $38qle)), yxtbh = $38qle + 0x1, $38qle = nitbyx['indexOf'](xt2iy, yxtbh), !($38qle > 0x0)) throw new Error('attribute value no end \'' + xt2iy + '\' match');zts = nitbyx['slice'](yxtbh, $38qle)['replace'](/&#?\w+;/g, chxyi), rq_$e['add'](vfk45a, zts, yxtbh - 0x1), zmbtns = xmrszn;
        } else {
          if (zmbtns != xg10w9) throw new Error('attribute value must after "="');zts = nitbyx['slice'](yxtbh, $38qle)['replace'](/&#?\w+;/g, chxyi), rq_$e['add'](vfk45a, zts, yxtbh), ji2yhc['warning']('attribute "' + vfk45a + '" missed start quot(' + xt2iy + ')!!'), yxtbh = $38qle + 0x1, zmbtns = xmrszn;
        }break;case '/':
        switch (zmbtns) {case xj2h:
            rq_$e['setTagName'](nitbyx['slice'](yxtbh, $38qle));case xmrszn:case xniztbx:case xihxyc:
            zmbtns = xihxyc, rq_$e['closed'] = !0x0;case xg10w9:case xfou1d:case xhxyic2:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return ji2yhc['error']('unexpected end of input'), zmbtns == xj2h && rq_$e['setTagName'](nitbyx['slice'](yxtbh, $38qle)), $38qle;case '>':
        switch (zmbtns) {case xj2h:
            rq_$e['setTagName'](nitbyx['slice'](yxtbh, $38qle));case xmrszn:case xniztbx:case xihxyc:
            break;case xg10w9:case xfou1d:
            zts = nitbyx['slice'](yxtbh, $38qle), '/' === zts['slice'](-0x1) && (rq_$e['closed'] = !0x0, zts = zts['slice'](0x0, -0x1));case xhxyic2:
            zmbtns === xhxyic2 && (zts = vfk45a), zmbtns == xg10w9 ? (ji2yhc['warning']('attribute "' + zts + '" missed quot(")!!'), rq_$e['add'](vfk45a, zts['replace'](/&#?\w+;/g, chxyi), yxtbh)) : ('http://www.w3.org/1999/xhtml' === l3786v[''] && zts['match'](/^(?:disabled|checked|selected)$/i) || ji2yhc['warning']('attribute "' + zts + '" missed value!! "' + zts + '" instead!!'), rq_$e['add'](zts, zts, yxtbh));break;case xi2ty:
            throw new Error('attribute value missed!!');}return $38qle;case '\u0080':
        xt2iy = '\x20';default:
        if ('\x20' >= xt2iy) switch (zmbtns) {case xj2h:
            rq_$e['setTagName'](nitbyx['slice'](yxtbh, $38qle)), zmbtns = xniztbx;break;case xfou1d:
            vfk45a = nitbyx['slice'](yxtbh, $38qle), zmbtns = xhxyic2;break;case xg10w9:
            var zts = nitbyx['slice'](yxtbh, $38qle)['replace'](/&#?\w+;/g, chxyi);ji2yhc['warning']('attribute "' + zts + '" missed quot(")!!'), rq_$e['add'](vfk45a, zts, yxtbh);case xmrszn:
            zmbtns = xniztbx;} else switch (zmbtns) {case xhxyic2:
            {
              rq_$e['tagName'];
            }'http://www.w3.org/1999/xhtml' === l3786v[''] && vfk45a['match'](/^(?:disabled|checked|selected)$/i) || ji2yhc['warning']('attribute "' + vfk45a + '" missed value!! "' + vfk45a + '" instead2!!'), rq_$e['add'](vfk45a, vfk45a, yxtbh), yxtbh = $38qle, zmbtns = xfou1d;break;case xmrszn:
            ji2yhc['warning']('attribute space is required"' + vfk45a + '\x22!!');case xniztbx:
            zmbtns = xfou1d, yxtbh = $38qle;break;case xi2ty:
            zmbtns = xg10w9, yxtbh = $38qle;break;case xihxyc:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}$38qle++;
  }
}function xv67ak(v76k5, mnrz, s_nzr) {
  for (var rnsm = v76k5['tagName'], hy = null, ufdo14 = v76k5['length']; ufdo14--;) {
    var bmtsz = v76k5[ufdo14],
        kavf45 = bmtsz['qName'],
        a68l7v = bmtsz['value'],
        ij2yc = kavf45['indexOf'](':');if (ij2yc > 0x0) var k4o5 = bmtsz['prefix'] = kavf45['slice'](0x0, ij2yc),
        ms$zr = kavf45['slice'](ij2yc + 0x1),
        d1w4ou = 'xmlns' === k4o5 && ms$zr;else ms$zr = kavf45, k4o5 = null, d1w4ou = 'xmlns' === kavf45 && '';bmtsz['localName'] = ms$zr, d1w4ou !== !0x1 && (null == hy && (hy = {}, xuw9(s_nzr, s_nzr = {})), s_nzr[d1w4ou] = hy[d1w4ou] = a68l7v, bmtsz['uri'] = 'http://www.w3.org/2000/xmlns/', mnrz['startPrefixMapping'](d1w4ou, a68l7v));
  }for (var ufdo14 = v76k5['length']; ufdo14--;) {
    bmtsz = v76k5[ufdo14];var k4o5 = bmtsz['prefix'];k4o5 && ('xml' === k4o5 && (bmtsz['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== k4o5 && (bmtsz['uri'] = s_nzr[k4o5 || '']));
  }var ij2yc = rnsm['indexOf'](':');ij2yc > 0x0 ? (k4o5 = v76k5['prefix'] = rnsm['slice'](0x0, ij2yc), ms$zr = v76k5['localName'] = rnsm['slice'](ij2yc + 0x1)) : (k4o5 = null, ms$zr = v76k5['localName'] = rnsm);var tznib = v76k5['uri'] = s_nzr[k4o5 || ''];if (mnrz['startElement'](tznib, ms$zr, rnsm, v76k5), !v76k5['closed']) return v76k5['currentNSMap'] = s_nzr, v76k5['localNSMap'] = hy, !0x0;if (mnrz['endElement'](tznib, ms$zr, rnsm), hy) {
    for (k4o5 in hy) mnrz['endPrefixMapping'](k4o5);
  }
}function xu1wd4o(bmrsz, qr3$e, hcxy2i, qel83, bnmzsr) {
  if (/^(?:script|textarea)$/i['test'](hcxy2i)) {
    var f45u = bmrsz['indexOf']('</' + hcxy2i + '>', qr3$e),
        sm_$ = bmrsz['substring'](qr3$e + 0x1, f45u);if (/[&<]/['test'](sm_$)) return (/^script$/i['test'](hcxy2i) ? (bnmzsr['characters'](sm_$, 0x0, sm_$['length']), f45u) : (sm_$ = sm_$['replace'](/&#?\w+;/g, qel83), bnmzsr['characters'](sm_$, 0x0, sm_$['length']), f45u)
    );
  }return qr3$e + 0x1;
}function xzbrmns(wgp, q8$3_e, yxht2, f5v4a) {
  var nitxbz = f5v4a[yxht2];return null == nitxbz && (nitxbz = wgp['lastIndexOf']('</' + yxht2 + '>'), q8$3_e > nitxbz && (nitxbz = wgp['lastIndexOf']('</' + yxht2)), f5v4a[yxht2] = nitxbz), q8$3_e > nitxbz;
}function xuw9(bxtizn, cxhy) {
  for (var lq87 in bxtizn) cxhy[lq87] = bxtizn[lq87];
}function xnbmts(lvak67, rsm_n, pgw1, xc2y) {
  var _r$qs = lvak67['charAt'](rsm_n + 0x2);switch (_r$qs) {case '-':
      if ('-' === lvak67['charAt'](rsm_n + 0x3)) {
        var zbxn = lvak67['indexOf']('-->', rsm_n + 0x4);return zbxn > rsm_n ? (pgw1['comment'](lvak67, rsm_n + 0x4, zbxn - rsm_n - 0x4), zbxn + 0x3) : (xc2y['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == lvak67['substr'](rsm_n + 0x3, 0x6)) {
        var zbxn = lvak67['indexOf'](']]>', rsm_n + 0x9);return pgw1['startCDATA'](), pgw1['characters'](lvak67, rsm_n + 0x9, zbxn - rsm_n - 0x9), pgw1['endCDATA'](), zbxn + 0x3;
      }var ztib = xv7fak5(lvak67, rsm_n),
          mnrb = ztib['length'];if (mnrb > 0x1 && /!doctype/i['test'](ztib[0x0][0x0])) {
        var lvk67 = ztib[0x1][0x0],
            ijych = mnrb > 0x3 && /^public$/i['test'](ztib[0x2][0x0]) && ztib[0x3][0x0],
            dwuo41 = mnrb > 0x4 && ztib[0x4][0x0],
            iy2xht = ztib[mnrb - 0x1];return pgw1['startDTD'](lvk67, ijych && ijych['replace'](/^(['"])(.*?)\1$/, '$2'), dwuo41 && dwuo41['replace'](/^(['"])(.*?)\1$/, '$2')), pgw1['endDTD'](), iy2xht['index'] + iy2xht[0x0]['length'];
      }}return -0x1;
}function xhcyxi2(nyitx, p9uw01, er_) {
  var snrbzm = nyitx['indexOf']('?>', p9uw01);if (snrbzm) {
    var cy2ji = nyitx['substring'](p9uw01, snrbzm)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (cy2ji) {
      {
        cy2ji[0x0]['length'];
      }return er_['processingInstruction'](cy2ji[0x1], cy2ji[0x2]), snrbzm + 0x2;
    }return -0x1;
  }return -0x1;
}function x_$msre() {}function xrsn_z(o4f5d, fo4) {
  return o4f5d['__proto__'] = fo4, o4f5d;
}function xv7fak5(q8l3e6, e$83lq) {
  var xztb,
      $e3q_ = [],
      mes$r_ = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (mes$r_['lastIndex'] = e$83lq, mes$r_['exec'](q8l3e6); xztb = mes$r_['exec'](q8l3e6);) if ($e3q_['push'](xztb), xztb[0x1]) return $e3q_;
}var xerm_ = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    xntmsz = new RegExp('[\\-\\.0-9' + xerm_['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    xu5od4f = new RegExp('^' + xerm_['source'] + xntmsz['source'] + '*(?::' + xerm_['source'] + xntmsz['source'] + '*)?$'),
    xj2h = 0x0,
    xfou1d = 0x1,
    xhxyic2 = 0x2,
    xi2ty = 0x3,
    xg10w9 = 0x4,
    xmrszn = 0x5,
    xniztbx = 0x6,
    xihxyc = 0x7;xva76k5['prototype'] = { 'parse': function (h2cjiy, x2ciyh, o1d) {
    var nixbtz = this['domBuilder'];nixbtz['startDocument'](), xuw9(x2ciyh, x2ciyh = {}), xeq$l83(h2cjiy, x2ciyh, o1d, nixbtz, this['errorHandler']), nixbtz['endDocument']();
  } }, x_$msre['prototype'] = { 'setTagName': function (u1pwo0) {
    if (!xu5od4f['test'](u1pwo0)) throw new Error('invalid tagName:' + u1pwo0);this['tagName'] = u1pwo0;
  }, 'add': function (fd14o, lv6873, re_sm) {
    if (!xu5od4f['test'](fd14o)) throw new Error('invalid attribute:' + fd14o);this[this['length']++] = { 'qName': fd14o, 'value': lv6873, 'offset': re_sm };
  }, 'length': 0x0, 'getLocalName': function (xh2ic) {
    return this[xh2ic]['localName'];
  }, 'getLocator': function (nrs_m) {
    return this[nrs_m]['locator'];
  }, 'getQName': function (gwp) {
    return this[gwp]['qName'];
  }, 'getURI': function (ko45fd) {
    return this[ko45fd]['uri'];
  }, 'getValue': function (zrbmn) {
    return this[zrbmn]['value'];
  } }, xrsn_z({}, xrsn_z['prototype']) instanceof xrsn_z || (xrsn_z = function (up0w91, k57avf) {
  function btsmn() {}btsmn['prototype'] = k57avf, btsmn = new btsmn();for (k57avf in up0w91) btsmn[k57avf] = up0w91[k57avf];return btsmn;
}), exports['XMLReader'] = xva76k5;