var Q = wx.$I;
function i_yog0dz() {}function i_u7se3b(t$rzil, ukesq2, qnsu2, a3_, n2h45) {
  function a7j386(zil0$g) {
    if (zil0$g > 0xffff) {
      zil0$g -= 0x10000;var r$l9 = 0xd800 + (zil0$g >> 0xa),
          zogl0y = 0xdc00 + (0x3ff & zil0$g);return String['fromCharCode'](r$l9, zogl0y);
    }return String['fromCharCode'](zil0$g);
  }function c9m1pv(r$0lz) {
    var $izrlt = r$0lz['slice'](0x1, -0x1);return $izrlt in qnsu2 ? qnsu2[$izrlt] : '#' === $izrlt['charAt'](0x0) ? a7j386(parseInt($izrlt['substr'](0x1)['replace']('x', '0x'))) : (n2h45['error']('entity not found:' + r$0lz), r$0lz);
  }function _fc1m(cf_81) {
    if (cf_81 > kqbus) {
      var it$zlr = t$rzil['substring'](kqbus, cf_81)['replace'](/&#?\w+;/g, c9m1pv);zgil$ && buqk(kqbus), a3_['characters'](it$zlr, 0x0, cf_81 - kqbus), kqbus = cf_81;
    }
  }function buqk(m9cv, _jpa) {
    for (; m9cv >= p1v && (_jpa = p_1f8c['exec'](t$rzil));) _ajf6 = _jpa['index'], p1v = _ajf6 + _jpa[0x0]['length'], zgil$['lineNumber']++;zgil$['columnNumber'] = m9cv - _ajf6 + 0x1;
  }for (var _ajf6 = 0x0, p1v = 0x0, p_1f8c = /.*(?:\r\n?|\n)|.*$/g, zgil$ = a3_['locator'], h4nxw = [{ 'currentNSMap': ukesq2 }], vcpm1 = {}, kqbus = 0x0;;) {
    try {
      var kuqs2 = t$rzil['indexOf']('<', kqbus);if (0x0 > kuqs2) {
        if (!t$rzil['substr'](kqbus)['match'](/^\s*$/)) {
          var l0rz$i = a3_['doc'],
              a6b7e = l0rz$i['createTextNode'](t$rzil['substr'](kqbus));l0rz$i['appendChild'](a6b7e), a3_['currentElement'] = a6b7e;
        }return;
      }switch (kuqs2 > kqbus && _fc1m(kuqs2), t$rzil['charAt'](kuqs2 + 0x1)) {case '/':
          var j36ba7 = t$rzil['indexOf']('>', kuqs2 + 0x3),
              cv91p = t$rzil['substring'](kuqs2 + 0x2, j36ba7),
              fjap = h4nxw['pop']();0x0 > j36ba7 ? (cv91p = t$rzil['substring'](kuqs2 + 0x2)['replace'](/[\s<].*/, ''), n2h45['error']('end tag name: ' + cv91p + ' is not complete:' + fjap['tagName']), j36ba7 = kuqs2 + 0x1 + cv91p['length']) : cv91p['match'](/\s</) && (cv91p = cv91p['replace'](/[\s<].*/, ''), n2h45['error']('end tag name: ' + cv91p + ' maybe not complete'), j36ba7 = kuqs2 + 0x1 + cv91p['length']);var su7 = fjap['localNSMap'],
              qwk5n2 = fjap['tagName'] == cv91p,
              e63bs7 = qwk5n2 || fjap['tagName'] && fjap['tagName']['toLowerCase']() == cv91p['toLowerCase']();if (e63bs7) {
            if (a3_['endElement'](fjap['uri'], fjap['localName'], cv91p), su7) {
              for (var w5k2nq in su7) a3_['endPrefixMapping'](w5k2nq);
            }qwk5n2 || n2h45['fatalError']('end tag name: ' + cv91p + ' is not match the current start tagName:' + fjap['tagName']);
          } else h4nxw['push'](fjap);j36ba7++;break;case '?':
          zgil$ && buqk(kuqs2), j36ba7 = i_h42wn(t$rzil, kuqs2, a3_);break;case '!':
          zgil$ && buqk(kuqs2), j36ba7 = i_a86j3_(t$rzil, kuqs2, a3_, n2h45);break;default:
          zgil$ && buqk(kuqs2);var vtmc1 = new i_r$tli9(),
              z0yogl = h4nxw[h4nxw['length'] - 0x1]['currentNSMap'],
              j36ba7 = i_i$0gz(t$rzil, kuqs2, vtmc1, z0yogl, c9m1pv, n2h45),
              f_8j = vtmc1['length'];if (!vtmc1['closed'] && i_kqu2e(t$rzil, j36ba7, vtmc1['tagName'], vcpm1) && (vtmc1['closed'] = !0x0, qnsu2['nbsp'] || n2h45['warning']('unclosed xml attribute')), zgil$ && f_8j) {
            for (var knqs2 = i_ukq25n(zgil$, {}), c1mpf = 0x0; f_8j > c1mpf; c1mpf++) {
              var ozd0g = vtmc1[c1mpf];buqk(ozd0g['offset']), ozd0g['locator'] = i_ukq25n(zgil$, {});
            }a3_['locator'] = knqs2, i_qn5u2(vtmc1, a3_, z0yogl) && h4nxw['push'](vtmc1), a3_['locator'] = zgil$;
          } else i_qn5u2(vtmc1, a3_, z0yogl) && h4nxw['push'](vtmc1);'http://www.w3.org/1999/xhtml' !== vtmc1['uri'] || vtmc1['closed'] ? j36ba7++ : j36ba7 = i_k2qw5n(t$rzil, j36ba7, vtmc1['tagName'], c9m1pv, a3_);}
    } catch (mr9v) {
      n2h45['error']('element parse error: ' + mr9v), j36ba7 = -0x1;
    }j36ba7 > kqbus ? kqbus = j36ba7 : _fc1m(Math['max'](kuqs2, kqbus) + 0x1);
  }
}function i_ukq25n(l$0ozg, ns2kq) {
  return ns2kq['lineNumber'] = l$0ozg['lineNumber'], ns2kq['columnNumber'] = l$0ozg['columnNumber'], ns2kq;
}function i_i$0gz(_8j36a, timr, i9vmr, p_j, e63s7, j786) {
  for (var suek2q, useq2k, _jfpa = ++timr, v9mcp1 = i_t$ivr;;) {
    var qk52 = _8j36a['charAt'](_jfpa);switch (qk52) {case '=':
        if (v9mcp1 === i_fj8a_6) suek2q = _8j36a['slice'](timr, _jfpa), v9mcp1 = i_jb7a3;else {
          if (v9mcp1 !== i_bsue7k) throw new Error('attribute equal must after attrName');v9mcp1 = i_jb7a3;
        }break;case '\x27':case '\x22':
        if (v9mcp1 === i_jb7a3 || v9mcp1 === i_fj8a_6) {
          if (v9mcp1 === i_fj8a_6 && (j786['warning']('attribute value must after "="'), suek2q = _8j36a['slice'](timr, _jfpa)), timr = _jfpa + 0x1, _jfpa = _8j36a['indexOf'](qk52, timr), !(_jfpa > 0x0)) throw new Error('attribute value no end \'' + qk52 + '\' match');useq2k = _8j36a['slice'](timr, _jfpa)['replace'](/&#?\w+;/g, e63s7), i9vmr['add'](suek2q, useq2k, timr - 0x1), v9mcp1 = i_l$t9;
        } else {
          if (v9mcp1 != i_qseuk) throw new Error('attribute value must after "="');useq2k = _8j36a['slice'](timr, _jfpa)['replace'](/&#?\w+;/g, e63s7), i9vmr['add'](suek2q, useq2k, timr), j786['warning']('attribute "' + suek2q + '" missed start quot(' + qk52 + ')!!'), timr = _jfpa + 0x1, v9mcp1 = i_l$t9;
        }break;case '/':
        switch (v9mcp1) {case i_t$ivr:
            i9vmr['setTagName'](_8j36a['slice'](timr, _jfpa));case i_l$t9:case i_mi9vtr:case i_pa_j8:
            v9mcp1 = i_pa_j8, i9vmr['closed'] = !0x0;case i_qseuk:case i_fj8a_6:case i_bsue7k:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return j786['error']('unexpected end of input'), v9mcp1 == i_t$ivr && i9vmr['setTagName'](_8j36a['slice'](timr, _jfpa)), _jfpa;case '>':
        switch (v9mcp1) {case i_t$ivr:
            i9vmr['setTagName'](_8j36a['slice'](timr, _jfpa));case i_l$t9:case i_mi9vtr:case i_pa_j8:
            break;case i_qseuk:case i_fj8a_6:
            useq2k = _8j36a['slice'](timr, _jfpa), '/' === useq2k['slice'](-0x1) && (i9vmr['closed'] = !0x0, useq2k = useq2k['slice'](0x0, -0x1));case i_bsue7k:
            v9mcp1 === i_bsue7k && (useq2k = suek2q), v9mcp1 == i_qseuk ? (j786['warning']('attribute "' + useq2k + '" missed quot(")!!'), i9vmr['add'](suek2q, useq2k['replace'](/&#?\w+;/g, e63s7), timr)) : ('http://www.w3.org/1999/xhtml' === p_j[''] && useq2k['match'](/^(?:disabled|checked|selected)$/i) || j786['warning']('attribute "' + useq2k + '" missed value!! "' + useq2k + '" instead!!'), i9vmr['add'](useq2k, useq2k, timr));break;case i_jb7a3:
            throw new Error('attribute value missed!!');}return _jfpa;case '\u0080':
        qk52 = '\x20';default:
        if ('\x20' >= qk52) switch (v9mcp1) {case i_t$ivr:
            i9vmr['setTagName'](_8j36a['slice'](timr, _jfpa)), v9mcp1 = i_mi9vtr;break;case i_fj8a_6:
            suek2q = _8j36a['slice'](timr, _jfpa), v9mcp1 = i_bsue7k;break;case i_qseuk:
            var useq2k = _8j36a['slice'](timr, _jfpa)['replace'](/&#?\w+;/g, e63s7);j786['warning']('attribute "' + useq2k + '" missed quot(")!!'), i9vmr['add'](suek2q, useq2k, timr);case i_l$t9:
            v9mcp1 = i_mi9vtr;} else switch (v9mcp1) {case i_bsue7k:
            {
              i9vmr['tagName'];
            }'http://www.w3.org/1999/xhtml' === p_j[''] && suek2q['match'](/^(?:disabled|checked|selected)$/i) || j786['warning']('attribute "' + suek2q + '" missed value!! "' + suek2q + '" instead2!!'), i9vmr['add'](suek2q, suek2q, timr), timr = _jfpa, v9mcp1 = i_fj8a_6;break;case i_l$t9:
            j786['warning']('attribute space is required"' + suek2q + '\x22!!');case i_mi9vtr:
            v9mcp1 = i_fj8a_6, timr = _jfpa;break;case i_jb7a3:
            v9mcp1 = i_qseuk, timr = _jfpa;break;case i_pa_j8:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}_jfpa++;
  }
}function i_qn5u2(fp1cv, j_cf8p, ilr0$z) {
  for (var $ti9r = fp1cv['tagName'], r$tl9i = null, b7a63e = fp1cv['length']; b7a63e--;) {
    var pcmv = fp1cv[b7a63e],
        q4wn25 = pcmv['qName'],
        q2uke = pcmv['value'],
        se7 = q4wn25['indexOf'](':');if (se7 > 0x0) var o0lgzy = pcmv['prefix'] = q4wn25['slice'](0x0, se7),
        oyg0lz = q4wn25['slice'](se7 + 0x1),
        z$ilg = 'xmlns' === o0lgzy && oyg0lz;else oyg0lz = q4wn25, o0lgzy = null, z$ilg = 'xmlns' === q4wn25 && '';pcmv['localName'] = oyg0lz, z$ilg !== !0x1 && (null == r$tl9i && (r$tl9i = {}, i_l$z0g(ilr0$z, ilr0$z = {})), ilr0$z[z$ilg] = r$tl9i[z$ilg] = q2uke, pcmv['uri'] = 'http://www.w3.org/2000/xmlns/', j_cf8p['startPrefixMapping'](z$ilg, q2uke));
  }for (var b7a63e = fp1cv['length']; b7a63e--;) {
    pcmv = fp1cv[b7a63e];var o0lgzy = pcmv['prefix'];o0lgzy && ('xml' === o0lgzy && (pcmv['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== o0lgzy && (pcmv['uri'] = ilr0$z[o0lgzy || '']));
  }var se7 = $ti9r['indexOf'](':');se7 > 0x0 ? (o0lgzy = fp1cv['prefix'] = $ti9r['slice'](0x0, se7), oyg0lz = fp1cv['localName'] = $ti9r['slice'](se7 + 0x1)) : (o0lgzy = null, oyg0lz = fp1cv['localName'] = $ti9r);var a3j67 = fp1cv['uri'] = ilr0$z[o0lgzy || ''];if (j_cf8p['startElement'](a3j67, oyg0lz, $ti9r, fp1cv), !fp1cv['closed']) return fp1cv['currentNSMap'] = ilr0$z, fp1cv['localNSMap'] = r$tl9i, !0x0;if (j_cf8p['endElement'](a3j67, oyg0lz, $ti9r), r$tl9i) {
    for (o0lgzy in r$tl9i) j_cf8p['endPrefixMapping'](o0lgzy);
  }
}function i_k2qw5n(hwn45, keus7, tmvi9, n2quks, uq2skn) {
  if (/^(?:script|textarea)$/i['test'](tmvi9)) {
    var seqkbu = hwn45['indexOf']('</' + tmvi9 + '>', keus7),
        seuqk = hwn45['substring'](keus7 + 0x1, seqkbu);if (/[&<]/['test'](seuqk)) return (/^script$/i['test'](tmvi9) ? (uq2skn['characters'](seuqk, 0x0, seuqk['length']), seqkbu) : (seuqk = seuqk['replace'](/&#?\w+;/g, n2quks), uq2skn['characters'](seuqk, 0x0, seuqk['length']), seqkbu)
    );
  }return keus7 + 0x1;
}function i_kqu2e(yozdg0, u7beks, j_6a8f, zo0dyg) {
  var ba6 = zo0dyg[j_6a8f];return null == ba6 && (ba6 = yozdg0['lastIndexOf']('</' + j_6a8f + '>'), u7beks > ba6 && (ba6 = yozdg0['lastIndexOf']('</' + j_6a8f)), zo0dyg[j_6a8f] = ba6), u7beks > ba6;
}function i_l$z0g(_m1fpc, ogz0l$) {
  for (var p1vc9 in _m1fpc) ogz0l$[p1vc9] = _m1fpc[p1vc9];
}function i_a86j3_(tir9$, pv91c, cvpm19, jp_fa) {
  var z$lgo = tir9$['charAt'](pv91c + 0x2);switch (z$lgo) {case '-':
      if ('-' === tir9$['charAt'](pv91c + 0x3)) {
        var cfvp1 = tir9$['indexOf']('-->', pv91c + 0x4);return cfvp1 > pv91c ? (cvpm19['comment'](tir9$, pv91c + 0x4, cfvp1 - pv91c - 0x4), cfvp1 + 0x3) : (jp_fa['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == tir9$['substr'](pv91c + 0x3, 0x6)) {
        var cfvp1 = tir9$['indexOf'](']]>', pv91c + 0x9);return cvpm19['startCDATA'](), cvpm19['characters'](tir9$, pv91c + 0x9, cfvp1 - pv91c - 0x9), cvpm19['endCDATA'](), cfvp1 + 0x3;
      }var r9mtv = i_a_63j(tir9$, pv91c),
          j6a387 = r9mtv['length'];if (j6a387 > 0x1 && /!doctype/i['test'](r9mtv[0x0][0x0])) {
        var rl9it = r9mtv[0x1][0x0],
            b736e = j6a387 > 0x3 && /^public$/i['test'](r9mtv[0x2][0x0]) && r9mtv[0x3][0x0],
            olz0gy = j6a387 > 0x4 && r9mtv[0x4][0x0],
            jpf8c = r9mtv[j6a387 - 0x1];return cvpm19['startDTD'](rl9it, b736e && b736e['replace'](/^(['"])(.*?)\1$/, '$2'), olz0gy && olz0gy['replace'](/^(['"])(.*?)\1$/, '$2')), cvpm19['endDTD'](), jpf8c['index'] + jpf8c[0x0]['length'];
      }}return -0x1;
}function i_h42wn(jf8_pa, vc91tm, eus2qk) {
  var eubk7s = jf8_pa['indexOf']('?>', vc91tm);if (eubk7s) {
    var ri$ = jf8_pa['substring'](vc91tm, eubk7s)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (ri$) {
      {
        ri$[0x0]['length'];
      }return eus2qk['processingInstruction'](ri$[0x1], ri$[0x2]), eubk7s + 0x2;
    }return -0x1;
  }return -0x1;
}function i_r$tli9() {}function i_d0zy(t$rl9i, w25h) {
  return t$rl9i['__proto__'] = w25h, t$rl9i;
}function i_a_63j(olzg, n4qw2) {
  var gol0,
      i0zr$l = [],
      _1cpm = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (_1cpm['lastIndex'] = n4qw2, _1cpm['exec'](olzg); gol0 = _1cpm['exec'](olzg);) if (i0zr$l['push'](gol0), gol0[0x1]) return i0zr$l;
}var i_g$0zli = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    i_lgoy = new RegExp('[\\-\\.0-9' + i_g$0zli['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    i_z$i = new RegExp('^' + i_g$0zli['source'] + i_lgoy['source'] + '*(?::' + i_g$0zli['source'] + i_lgoy['source'] + '*)?$'),
    i_t$ivr = 0x0,
    i_fj8a_6 = 0x1,
    i_bsue7k = 0x2,
    i_jb7a3 = 0x3,
    i_qseuk = 0x4,
    i_l$t9 = 0x5,
    i_mi9vtr = 0x6,
    i_pa_j8 = 0x7;i_yog0dz['prototype'] = { 'parse': function (lr$zt, v9tri, s7be3u) {
    var zl$o0g = this['domBuilder'];zl$o0g['startDocument'](), i_l$z0g(v9tri, v9tri = {}), i_u7se3b(lr$zt, v9tri, s7be3u, zl$o0g, this['errorHandler']), zl$o0g['endDocument']();
  } }, i_r$tli9['prototype'] = { 'setTagName': function ($vir9) {
    if (!i_z$i['test']($vir9)) throw new Error('invalid tagName:' + $vir9);this['tagName'] = $vir9;
  }, 'add': function (qusek, w5hn4, i$zt) {
    if (!i_z$i['test'](qusek)) throw new Error('invalid attribute:' + qusek);this[this['length']++] = { 'qName': qusek, 'value': w5hn4, 'offset': i$zt };
  }, 'length': 0x0, 'getLocalName': function (c9vp) {
    return this[c9vp]['localName'];
  }, 'getLocator': function (l0$zgi) {
    return this[l0$zgi]['locator'];
  }, 'getQName': function (sbkqeu) {
    return this[sbkqeu]['qName'];
  }, 'getURI': function (qkeus2) {
    return this[qkeus2]['uri'];
  }, 'getValue': function (jfp8) {
    return this[jfp8]['value'];
  } }, i_d0zy({}, i_d0zy['prototype']) instanceof i_d0zy || (i_d0zy = function (kesbq, ukseq2) {
  function itzl$() {}itzl$['prototype'] = ukseq2, itzl$ = new itzl$();for (ukseq2 in kesbq) itzl$[ukseq2] = kesbq[ukseq2];return itzl$;
}), exports['XMLReader'] = i_yog0dz;