var Q = wx.$I;
function i_wnq52k() {}function i_pcfm1(u3eb7, i$z, eqbus, t9il$, cmpf_1) {
  function h5nw4(xhn4) {
    if (xhn4 > 0xffff) {
      xhn4 -= 0x10000;var lti9r$ = 0xd800 + (xhn4 >> 0xa),
          vc1t9 = 0xdc00 + (0x3ff & xhn4);return String['fromCharCode'](lti9r$, vc1t9);
    }return String['fromCharCode'](xhn4);
  }function i$rv(wn5kq2) {
    var qkbu = wn5kq2['slice'](0x1, -0x1);return qkbu in eqbus ? eqbus[qkbu] : '#' === qkbu['charAt'](0x0) ? h5nw4(parseInt(qkbu['substr'](0x1)['replace']('x', '0x'))) : (cmpf_1['error']('entity not found:' + wn5kq2), wn5kq2);
  }function rimt9v(vc9m1t) {
    if (vc9m1t > q4nw5) {
      var q5wn = u3eb7['substring'](q4nw5, vc9m1t)['replace'](/&#?\w+;/g, i$rv);kqnu && ue73sb(q4nw5), t9il$['characters'](q5wn, 0x0, vc9m1t - q4nw5), q4nw5 = vc9m1t;
    }
  }function ue73sb(uesqk, og0z$) {
    for (; uesqk >= _m1f && (og0z$ = i$lg0z['exec'](u3eb7));) dygo0z = og0z$['index'], _m1f = dygo0z + og0z$[0x0]['length'], kqnu['lineNumber']++;kqnu['columnNumber'] = uesqk - dygo0z + 0x1;
  }for (var dygo0z = 0x0, _m1f = 0x0, i$lg0z = /.*(?:\r\n?|\n)|.*$/g, kqnu = t9il$['locator'], sbqkeu = [{ 'currentNSMap': i$z }], _cpf8 = {}, q4nw5 = 0x0;;) {
    try {
      var kuqebs = u3eb7['indexOf']('<', q4nw5);if (0x0 > kuqebs) {
        if (!u3eb7['substr'](q4nw5)['match'](/^\s*$/)) {
          var tiv$ = t9il$['doc'],
              pvc1fm = tiv$['createTextNode'](u3eb7['substr'](q4nw5));tiv$['appendChild'](pvc1fm), t9il$['currentElement'] = pvc1fm;
        }return;
      }switch (kuqebs > q4nw5 && rimt9v(kuqebs), u3eb7['charAt'](kuqebs + 0x1)) {case '/':
          var fpj = u3eb7['indexOf']('>', kuqebs + 0x3),
              dzoyg = u3eb7['substring'](kuqebs + 0x2, fpj),
              ku2qsn = sbqkeu['pop']();0x0 > fpj ? (dzoyg = u3eb7['substring'](kuqebs + 0x2)['replace'](/[\s<].*/, ''), cmpf_1['error']('end tag name: ' + dzoyg + ' is not complete:' + ku2qsn['tagName']), fpj = kuqebs + 0x1 + dzoyg['length']) : dzoyg['match'](/\s</) && (dzoyg = dzoyg['replace'](/[\s<].*/, ''), cmpf_1['error']('end tag name: ' + dzoyg + ' maybe not complete'), fpj = kuqebs + 0x1 + dzoyg['length']);var nhw425 = ku2qsn['localNSMap'],
              j7386 = ku2qsn['tagName'] == dzoyg,
              zdog = j7386 || ku2qsn['tagName'] && ku2qsn['tagName']['toLowerCase']() == dzoyg['toLowerCase']();if (zdog) {
            if (t9il$['endElement'](ku2qsn['uri'], ku2qsn['localName'], dzoyg), nhw425) {
              for (var ydo0g in nhw425) t9il$['endPrefixMapping'](ydo0g);
            }j7386 || cmpf_1['fatalError']('end tag name: ' + dzoyg + ' is not match the current start tagName:' + ku2qsn['tagName']);
          } else sbqkeu['push'](ku2qsn);fpj++;break;case '?':
          kqnu && ue73sb(kuqebs), fpj = i_fmpc1v(u3eb7, kuqebs, t9il$);break;case '!':
          kqnu && ue73sb(kuqebs), fpj = i_zglo0$(u3eb7, kuqebs, t9il$, cmpf_1);break;default:
          kqnu && ue73sb(kuqebs);var nuk2sq = new i_$zltri(),
              subqe = sbqkeu[sbqkeu['length'] - 0x1]['currentNSMap'],
              fpj = i_e7b3(u3eb7, kuqebs, nuk2sq, subqe, i$rv, cmpf_1),
              jf_6a = nuk2sq['length'];if (!nuk2sq['closed'] && i_fp_m1(u3eb7, fpj, nuk2sq['tagName'], _cpf8) && (nuk2sq['closed'] = !0x0, eqbus['nbsp'] || cmpf_1['warning']('unclosed xml attribute')), kqnu && jf_6a) {
            for (var yo0dz = i_eqb(kqnu, {}), un25qk = 0x0; jf_6a > un25qk; un25qk++) {
              var j837a = nuk2sq[un25qk];ue73sb(j837a['offset']), j837a['locator'] = i_eqb(kqnu, {});
            }t9il$['locator'] = yo0dz, i_bkequs(nuk2sq, t9il$, subqe) && sbqkeu['push'](nuk2sq), t9il$['locator'] = kqnu;
          } else i_bkequs(nuk2sq, t9il$, subqe) && sbqkeu['push'](nuk2sq);'http://www.w3.org/1999/xhtml' !== nuk2sq['uri'] || nuk2sq['closed'] ? fpj++ : fpj = i_a6873(u3eb7, fpj, nuk2sq['tagName'], i$rv, t9il$);}
    } catch (lzyg) {
      cmpf_1['error']('element parse error: ' + lzyg), fpj = -0x1;
    }fpj > q4nw5 ? q4nw5 = fpj : rimt9v(Math['max'](kuqebs, q4nw5) + 0x1);
  }
}function i_eqb(bj73a6, a786) {
  return a786['lineNumber'] = bj73a6['lineNumber'], a786['columnNumber'] = bj73a6['columnNumber'], a786;
}function i_e7b3(aj367b, cmp1_, qw5, il$t9, $9ivtr, golz$0) {
  for (var l$ir0z, f8_j, rl$tz = ++cmp1_, cfp8_1 = i__f8cjp;;) {
    var f8jc = aj367b['charAt'](rl$tz);switch (f8jc) {case '=':
        if (cfp8_1 === i_es7bk) l$ir0z = aj367b['slice'](cmp1_, rl$tz), cfp8_1 = i__6a83j;else {
          if (cfp8_1 !== i_nks2u) throw new Error('attribute equal must after attrName');cfp8_1 = i__6a83j;
        }break;case '\x27':case '\x22':
        if (cfp8_1 === i__6a83j || cfp8_1 === i_es7bk) {
          if (cfp8_1 === i_es7bk && (golz$0['warning']('attribute value must after "="'), l$ir0z = aj367b['slice'](cmp1_, rl$tz)), cmp1_ = rl$tz + 0x1, rl$tz = aj367b['indexOf'](f8jc, cmp1_), !(rl$tz > 0x0)) throw new Error('attribute value no end \'' + f8jc + '\' match');f8_j = aj367b['slice'](cmp1_, rl$tz)['replace'](/&#?\w+;/g, $9ivtr), qw5['add'](l$ir0z, f8_j, cmp1_ - 0x1), cfp8_1 = i_$gi0lz;
        } else {
          if (cfp8_1 != i_j8fa_6) throw new Error('attribute value must after "="');f8_j = aj367b['slice'](cmp1_, rl$tz)['replace'](/&#?\w+;/g, $9ivtr), qw5['add'](l$ir0z, f8_j, cmp1_), golz$0['warning']('attribute "' + l$ir0z + '" missed start quot(' + f8jc + ')!!'), cmp1_ = rl$tz + 0x1, cfp8_1 = i_$gi0lz;
        }break;case '/':
        switch (cfp8_1) {case i__f8cjp:
            qw5['setTagName'](aj367b['slice'](cmp1_, rl$tz));case i_$gi0lz:case i_vm9ti:case i_oly0zg:
            cfp8_1 = i_oly0zg, qw5['closed'] = !0x0;case i_j8fa_6:case i_es7bk:case i_nks2u:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return golz$0['error']('unexpected end of input'), cfp8_1 == i__f8cjp && qw5['setTagName'](aj367b['slice'](cmp1_, rl$tz)), rl$tz;case '>':
        switch (cfp8_1) {case i__f8cjp:
            qw5['setTagName'](aj367b['slice'](cmp1_, rl$tz));case i_$gi0lz:case i_vm9ti:case i_oly0zg:
            break;case i_j8fa_6:case i_es7bk:
            f8_j = aj367b['slice'](cmp1_, rl$tz), '/' === f8_j['slice'](-0x1) && (qw5['closed'] = !0x0, f8_j = f8_j['slice'](0x0, -0x1));case i_nks2u:
            cfp8_1 === i_nks2u && (f8_j = l$ir0z), cfp8_1 == i_j8fa_6 ? (golz$0['warning']('attribute "' + f8_j + '" missed quot(")!!'), qw5['add'](l$ir0z, f8_j['replace'](/&#?\w+;/g, $9ivtr), cmp1_)) : ('http://www.w3.org/1999/xhtml' === il$t9[''] && f8_j['match'](/^(?:disabled|checked|selected)$/i) || golz$0['warning']('attribute "' + f8_j + '" missed value!! "' + f8_j + '" instead!!'), qw5['add'](f8_j, f8_j, cmp1_));break;case i__6a83j:
            throw new Error('attribute value missed!!');}return rl$tz;case '\u0080':
        f8jc = '\x20';default:
        if ('\x20' >= f8jc) switch (cfp8_1) {case i__f8cjp:
            qw5['setTagName'](aj367b['slice'](cmp1_, rl$tz)), cfp8_1 = i_vm9ti;break;case i_es7bk:
            l$ir0z = aj367b['slice'](cmp1_, rl$tz), cfp8_1 = i_nks2u;break;case i_j8fa_6:
            var f8_j = aj367b['slice'](cmp1_, rl$tz)['replace'](/&#?\w+;/g, $9ivtr);golz$0['warning']('attribute "' + f8_j + '" missed quot(")!!'), qw5['add'](l$ir0z, f8_j, cmp1_);case i_$gi0lz:
            cfp8_1 = i_vm9ti;} else switch (cfp8_1) {case i_nks2u:
            {
              qw5['tagName'];
            }'http://www.w3.org/1999/xhtml' === il$t9[''] && l$ir0z['match'](/^(?:disabled|checked|selected)$/i) || golz$0['warning']('attribute "' + l$ir0z + '" missed value!! "' + l$ir0z + '" instead2!!'), qw5['add'](l$ir0z, l$ir0z, cmp1_), cmp1_ = rl$tz, cfp8_1 = i_es7bk;break;case i_$gi0lz:
            golz$0['warning']('attribute space is required"' + l$ir0z + '\x22!!');case i_vm9ti:
            cfp8_1 = i_es7bk, cmp1_ = rl$tz;break;case i__6a83j:
            cfp8_1 = i_j8fa_6, cmp1_ = rl$tz;break;case i_oly0zg:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}rl$tz++;
  }
}function i_bkequs(zd0oy, xhwn45, ab36j7) {
  for (var a6eb73 = zd0oy['tagName'], keuq2s = null, j_86a3 = zd0oy['length']; j_86a3--;) {
    var w4n5h2 = zd0oy[j_86a3],
        j86f = w4n5h2['qName'],
        li0gz = w4n5h2['value'],
        cpfv1m = j86f['indexOf'](':');if (cpfv1m > 0x0) var nw4x5h = w4n5h2['prefix'] = j86f['slice'](0x0, cpfv1m),
        z$0olg = j86f['slice'](cpfv1m + 0x1),
        w2qn45 = 'xmlns' === nw4x5h && z$0olg;else z$0olg = j86f, nw4x5h = null, w2qn45 = 'xmlns' === j86f && '';w4n5h2['localName'] = z$0olg, w2qn45 !== !0x1 && (null == keuq2s && (keuq2s = {}, i_ritv$9(ab36j7, ab36j7 = {})), ab36j7[w2qn45] = keuq2s[w2qn45] = li0gz, w4n5h2['uri'] = 'http://www.w3.org/2000/xmlns/', xhwn45['startPrefixMapping'](w2qn45, li0gz));
  }for (var j_86a3 = zd0oy['length']; j_86a3--;) {
    w4n5h2 = zd0oy[j_86a3];var nw4x5h = w4n5h2['prefix'];nw4x5h && ('xml' === nw4x5h && (w4n5h2['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== nw4x5h && (w4n5h2['uri'] = ab36j7[nw4x5h || '']));
  }var cpfv1m = a6eb73['indexOf'](':');cpfv1m > 0x0 ? (nw4x5h = zd0oy['prefix'] = a6eb73['slice'](0x0, cpfv1m), z$0olg = zd0oy['localName'] = a6eb73['slice'](cpfv1m + 0x1)) : (nw4x5h = null, z$0olg = zd0oy['localName'] = a6eb73);var rv9mit = zd0oy['uri'] = ab36j7[nw4x5h || ''];if (xhwn45['startElement'](rv9mit, z$0olg, a6eb73, zd0oy), !zd0oy['closed']) return zd0oy['currentNSMap'] = ab36j7, zd0oy['localNSMap'] = keuq2s, !0x0;if (xhwn45['endElement'](rv9mit, z$0olg, a6eb73), keuq2s) {
    for (nw4x5h in keuq2s) xhwn45['endPrefixMapping'](nw4x5h);
  }
}function i_a6873(_j6fa, mfv1cp, ygdo0, p8cj_f, mv1pfc) {
  if (/^(?:script|textarea)$/i['test'](ygdo0)) {
    var fp_8ja = _j6fa['indexOf']('</' + ygdo0 + '>', mfv1cp),
        i$zrl0 = _j6fa['substring'](mfv1cp + 0x1, fp_8ja);if (/[&<]/['test'](i$zrl0)) return (/^script$/i['test'](ygdo0) ? (mv1pfc['characters'](i$zrl0, 0x0, i$zrl0['length']), fp_8ja) : (i$zrl0 = i$zrl0['replace'](/&#?\w+;/g, p8cj_f), mv1pfc['characters'](i$zrl0, 0x0, i$zrl0['length']), fp_8ja)
    );
  }return mfv1cp + 0x1;
}function i_fp_m1(q5kw2, w4, j8_cfp, rt9im) {
  var z$l0i = rt9im[j8_cfp];return null == z$l0i && (z$l0i = q5kw2['lastIndexOf']('</' + j8_cfp + '>'), w4 > z$l0i && (z$l0i = q5kw2['lastIndexOf']('</' + j8_cfp)), rt9im[j8_cfp] = z$l0i), w4 > z$l0i;
}function i_ritv$9(vr9ti, w4x5) {
  for (var fp1c8 in vr9ti) w4x5[fp1c8] = vr9ti[fp1c8];
}function i_zglo0$(pcv91, eku7bs, $lgi, ekbuq) {
  var x4nw5h = pcv91['charAt'](eku7bs + 0x2);switch (x4nw5h) {case '-':
      if ('-' === pcv91['charAt'](eku7bs + 0x3)) {
        var r$9vti = pcv91['indexOf']('-->', eku7bs + 0x4);return r$9vti > eku7bs ? ($lgi['comment'](pcv91, eku7bs + 0x4, r$9vti - eku7bs - 0x4), r$9vti + 0x3) : (ekbuq['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == pcv91['substr'](eku7bs + 0x3, 0x6)) {
        var r$9vti = pcv91['indexOf'](']]>', eku7bs + 0x9);return $lgi['startCDATA'](), $lgi['characters'](pcv91, eku7bs + 0x9, r$9vti - eku7bs - 0x9), $lgi['endCDATA'](), r$9vti + 0x3;
      }var c9tmv = i_zygd0o(pcv91, eku7bs),
          ozdgy = c9tmv['length'];if (ozdgy > 0x1 && /!doctype/i['test'](c9tmv[0x0][0x0])) {
        var eb367a = c9tmv[0x1][0x0],
            wn2k5q = ozdgy > 0x3 && /^public$/i['test'](c9tmv[0x2][0x0]) && c9tmv[0x3][0x0],
            z0log$ = ozdgy > 0x4 && c9tmv[0x4][0x0],
            vpm1 = c9tmv[ozdgy - 0x1];return $lgi['startDTD'](eb367a, wn2k5q && wn2k5q['replace'](/^(['"])(.*?)\1$/, '$2'), z0log$ && z0log$['replace'](/^(['"])(.*?)\1$/, '$2')), $lgi['endDTD'](), vpm1['index'] + vpm1[0x0]['length'];
      }}return -0x1;
}function i_fmpc1v(_pcfj8, nxw5, dzgoy) {
  var uekqs = _pcfj8['indexOf']('?>', nxw5);if (uekqs) {
    var r9timv = _pcfj8['substring'](nxw5, uekqs)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (r9timv) {
      {
        r9timv[0x0]['length'];
      }return dzgoy['processingInstruction'](r9timv[0x1], r9timv[0x2]), uekqs + 0x2;
    }return -0x1;
  }return -0x1;
}function i_$zltri() {}function i_pvfm(baj736, qseuk2) {
  return baj736['__proto__'] = qseuk2, baj736;
}function i_zygd0o(g0oyd, b37) {
  var s7eu3,
      w52nk = [],
      nx5wh = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (nx5wh['lastIndex'] = b37, nx5wh['exec'](g0oyd); s7eu3 = nx5wh['exec'](g0oyd);) if (w52nk['push'](s7eu3), s7eu3[0x1]) return w52nk;
}var i_nxh54 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    i_fj_86 = new RegExp('[\\-\\.0-9' + i_nxh54['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    i_us7bk = new RegExp('^' + i_nxh54['source'] + i_fj_86['source'] + '*(?::' + i_nxh54['source'] + i_fj_86['source'] + '*)?$'),
    i__f8cjp = 0x0,
    i_es7bk = 0x1,
    i_nks2u = 0x2,
    i__6a83j = 0x3,
    i_j8fa_6 = 0x4,
    i_$gi0lz = 0x5,
    i_vm9ti = 0x6,
    i_oly0zg = 0x7;i_wnq52k['prototype'] = { 'parse': function (j8_a, kn5qu2, j_af86) {
    var m91pcv = this['domBuilder'];m91pcv['startDocument'](), i_ritv$9(kn5qu2, kn5qu2 = {}), i_pcfm1(j8_a, kn5qu2, j_af86, m91pcv, this['errorHandler']), m91pcv['endDocument']();
  } }, i_$zltri['prototype'] = { 'setTagName': function (goz0ly) {
    if (!i_us7bk['test'](goz0ly)) throw new Error('invalid tagName:' + goz0ly);this['tagName'] = goz0ly;
  }, 'add': function (qu2es, zi$g0, yzod) {
    if (!i_us7bk['test'](qu2es)) throw new Error('invalid attribute:' + qu2es);this[this['length']++] = { 'qName': qu2es, 'value': zi$g0, 'offset': yzod };
  }, 'length': 0x0, 'getLocalName': function (ks2qeu) {
    return this[ks2qeu]['localName'];
  }, 'getLocator': function (_mfp) {
    return this[_mfp]['locator'];
  }, 'getQName': function (j_a368) {
    return this[j_a368]['qName'];
  }, 'getURI': function (es673) {
    return this[es673]['uri'];
  }, 'getValue': function (ksebuq) {
    return this[ksebuq]['value'];
  } }, i_pvfm({}, i_pvfm['prototype']) instanceof i_pvfm || (i_pvfm = function (b6s3, vtc9) {
  function h245w() {}h245w['prototype'] = vtc9, h245w = new h245w();for (vtc9 in b6s3) h245w[vtc9] = b6s3[vtc9];return h245w;
}), exports['XMLReader'] = i_wnq52k;